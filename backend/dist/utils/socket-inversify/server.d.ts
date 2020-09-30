import { Container } from 'inversify';
import { Server } from 'socket.io';
export declare class InversifySocketServer {
    server: Server;
    private container;
    constructor(container: Container, server: Server);
    build(): Server;
    private registerControllers;
    private handleConnection;
    private handleAction;
    private extractParams;
}
