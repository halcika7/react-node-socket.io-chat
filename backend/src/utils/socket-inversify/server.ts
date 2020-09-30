/* eslint-disable security/detect-object-injection */
import { Container } from 'inversify';
import {
  Controller,
  ControllerActionMetadata,
  ControllerMetadata,
  ControllerParameterMetadata,
  ParameterMetadata,
} from './interfaces';
import { TYPE, ACTION_TYPE, PARAMETER_TYPE } from './constants';
import {
  getControllerMetadata,
  getActionMetadata,
  getParameterMetadata,
  getControllersFromContainer,
} from './utils';
import { Server, Socket } from 'socket.io';

export class InversifySocketServer {
  public server: Server;

  private container: Container;

  constructor(container: Container, server: Server) {
    this.container = container;
    this.server = server;
  }

  public build(): Server {
    this.registerControllers();

    return this.server;
  }

  private registerControllers() {
    const controllers = getControllersFromContainer(this.container, false);

    controllers.forEach((controller: Controller) => {
      const controllerMetadata = getControllerMetadata(controller.constructor);
      const actionMetadata = getActionMetadata(controller.constructor);
      const parameterMetadata = getParameterMetadata(controller.constructor);

      if (controllerMetadata && actionMetadata) {
        this.server
          .of(controllerMetadata.namespace)
          .on('connection', (socket: Socket) => {
            this.handleConnection(
              socket,
              controllerMetadata,
              actionMetadata,
              parameterMetadata
            );
          });
      }
    });
  }

  private handleConnection(
    socket: Socket,
    controllerMetadata: ControllerMetadata,
    actionMetadata: ControllerActionMetadata[],
    parameterMetadata: ControllerParameterMetadata
  ) {
    actionMetadata.forEach((metadata: ControllerActionMetadata) => {
      switch (metadata.type) {
        case ACTION_TYPE.CONNECT:
          this.handleAction(
            socket,
            controllerMetadata,
            metadata,
            parameterMetadata
          );
          break;
        case ACTION_TYPE.DISCONNECT:
          socket.on('disconnect', () => {
            this.handleAction(
              socket,
              controllerMetadata,
              metadata,
              parameterMetadata
            );
          });
          break;
        case ACTION_TYPE.MESSAGE:
          socket.on(metadata.name, (payload: any) => {
            this.handleAction(
              socket,
              controllerMetadata,
              metadata,
              parameterMetadata,
              payload
            );
          });
          break;
        default:
          break;
      }
    });
  }

  // eslint-disable-next-line max-params
  private handleAction(
    socket: Socket,
    controller: ControllerMetadata,
    action: ControllerActionMetadata,
    parameters: ControllerParameterMetadata,
    payload?: any
  ) {
    let paramList: ParameterMetadata[] = [];
    if (parameters) {
      paramList = parameters[action.key] || [];
    }

    const args = this.extractParams(socket, payload, paramList);

    const cb = () =>
      (this.container.getNamed(TYPE.Controller, controller.target.name) as any)[
        action.key
      ](...args);

    (this.container.getNamed(TYPE.Controller, controller.target.name) as any)[
      action.key
    ] = action.middleware ? action.middleware(this.server, socket, cb) : cb();
  }

  private extractParams(
    socket: any,
    payload: any,
    params: ParameterMetadata[]
  ): any[] {
    const args: any[] = [];

    params.forEach(({ type, index, name }) => {
      switch (type) {
        case PARAMETER_TYPE.CONNECTED_SOCKET:
          args[index] = socket;
          break;
        case PARAMETER_TYPE.SOCKET_IO:
          args[index] = this.server;
          break;
        case PARAMETER_TYPE.SOCKET_QUERY_PARAM:
          args[index] = socket.handshake.query[name];
          break;
        case PARAMETER_TYPE.SOCKET_ID:
          args[index] = socket.id;
          break;
        case PARAMETER_TYPE.SOCKET_REQUEST:
          args[index] = socket.request;
          break;
        case PARAMETER_TYPE.SOCKET_ROOMS:
          args[index] = socket.rooms;
          break;
        default:
          args[index] = payload;
          break;
      }
    });

    return args;
  }
}
