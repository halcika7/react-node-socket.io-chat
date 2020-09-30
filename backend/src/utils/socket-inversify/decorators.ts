import { METADATA_KEY, ACTION_TYPE, PARAMETER_TYPE } from './constants';
import {
  ActionDecorator,
  ControllerActionMetadata,
  ControllerParameterMetadata,
  ControllerMetadata,
  ParameterMetadata,
  SocketMiddlware,
} from './interfaces';

export function params(type: PARAMETER_TYPE, name: string) {
  return (
    target: Record<string, any>,
    methodName: string | symbol,
    index: number
  ) => {
    let metadataList: ControllerParameterMetadata = {};
    let parameterMetadataList: ParameterMetadata[] = [];
    const parameterMetadata: ParameterMetadata = {
      index,
      name,
      type,
    };

    if (!Reflect.hasMetadata(METADATA_KEY.Parameter, target.constructor)) {
      parameterMetadataList.unshift(parameterMetadata);
    } else {
      metadataList = Reflect.getMetadata(
        METADATA_KEY.Parameter,
        target.constructor
      );
      if (Object.prototype.hasOwnProperty.call(metadataList, methodName)) {
        parameterMetadataList = metadataList[String(methodName)];
      }
      parameterMetadataList.unshift(parameterMetadata);
    }

    metadataList[String(methodName)] = parameterMetadataList;
    Reflect.defineMetadata(
      METADATA_KEY.Parameter,
      metadataList,
      target.constructor
    );
  };
}

function paramDecoratorFactory(
  parameterType: PARAMETER_TYPE
): (name?: string) => ParameterDecorator {
  return (name?: string): ParameterDecorator => {
    const finalName = name || 'default';
    return params(parameterType, finalName);
  };
}

export function SocketController(namespace = '') {
  return (target: any) => {
    const currentMetadata: ControllerMetadata = {
      namespace,
      target,
    };

    Reflect.defineMetadata(METADATA_KEY.Controller, currentMetadata, target);

    const previousMetadata: ControllerMetadata[] =
      Reflect.getMetadata(METADATA_KEY.Controller, Reflect) || [];

    const newMetadata = [currentMetadata, ...previousMetadata];

    Reflect.defineMetadata(METADATA_KEY.Controller, newMetadata, Reflect);
  };
}

export function OnConnect(name: string): ActionDecorator {
  return (target: any, key: string) => {
    const metadata: ControllerActionMetadata = {
      key,
      name,
      type: ACTION_TYPE.CONNECT,
      target,
    };

    let metadataList: ControllerActionMetadata[] = [];

    if (!Reflect.hasMetadata(METADATA_KEY.Action, target.constructor)) {
      Reflect.defineMetadata(
        METADATA_KEY.Action,
        metadataList,
        target.constructor
      );
    } else {
      metadataList = Reflect.getMetadata(
        METADATA_KEY.Action,
        target.constructor
      );
    }

    metadataList.push(metadata);
  };
}

export function OnDisconnect(name: string): ActionDecorator {
  return (target: any, key: string) => {
    const metadata: ControllerActionMetadata = {
      key,
      name,
      type: ACTION_TYPE.DISCONNECT,
      target,
    };

    let metadataList: ControllerActionMetadata[] = [];

    if (!Reflect.hasMetadata(METADATA_KEY.Action, target.constructor)) {
      Reflect.defineMetadata(
        METADATA_KEY.Action,
        metadataList,
        target.constructor
      );
    } else {
      metadataList = Reflect.getMetadata(
        METADATA_KEY.Action,
        target.constructor
      );
    }

    metadataList.push(metadata);
  };
}

export function OnMessage(
  name: string,
  middleware?: SocketMiddlware
): ActionDecorator {
  return (target: any, key: string) => {
    const metadata: ControllerActionMetadata = {
      key,
      name,
      type: ACTION_TYPE.MESSAGE,
      target,
      middleware,
    };

    let metadataList: ControllerActionMetadata[] = [];

    if (!Reflect.hasMetadata(METADATA_KEY.Action, target.constructor)) {
      Reflect.defineMetadata(
        METADATA_KEY.Action,
        metadataList,
        target.constructor
      );
    } else {
      metadataList = Reflect.getMetadata(
        METADATA_KEY.Action,
        target.constructor
      );
    }

    metadataList.push(metadata);
  };
}

export const SocketIO: () => ParameterDecorator = paramDecoratorFactory(
  PARAMETER_TYPE.SOCKET_IO
);
export const SocketID: () => ParameterDecorator = paramDecoratorFactory(
  PARAMETER_TYPE.SOCKET_ID
);
export const ConnectedSocket: () => ParameterDecorator = paramDecoratorFactory(
  PARAMETER_TYPE.CONNECTED_SOCKET
);
export const Payload: () => ParameterDecorator = paramDecoratorFactory(
  PARAMETER_TYPE.SOCKET_BODY
);
export const SocketQueryParam: (
  name: string
) => ParameterDecorator = paramDecoratorFactory(
  PARAMETER_TYPE.SOCKET_QUERY_PARAM
);
export const SocketRequest: () => ParameterDecorator = paramDecoratorFactory(
  PARAMETER_TYPE.SOCKET_REQUEST
);
export const SocketRooms: () => ParameterDecorator = paramDecoratorFactory(
  PARAMETER_TYPE.SOCKET_ROOMS
);
