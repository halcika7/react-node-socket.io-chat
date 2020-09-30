import { ACTION_TYPE, PARAMETER_TYPE } from './constants';
export interface Controller {
}
export interface ActionDecorator {
    (target: any, key: string): void;
}
export interface SocketMiddlware {
    (io: any, socket: any, next: any): void;
}
export interface ControllerMetadata {
    namespace: string;
    target: any;
}
export interface ControllerActionMetadata {
    key: string;
    name: string;
    type: ACTION_TYPE;
    target: any;
    middleware?: SocketMiddlware;
}
export interface ControllerParameterMetadata {
    [methodName: string]: ParameterMetadata[];
}
export interface ParameterMetadata {
    name: string;
    index: number;
    type: PARAMETER_TYPE;
}
