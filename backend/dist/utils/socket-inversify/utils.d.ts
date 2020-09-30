import { interfaces as inversifyInterfaces } from 'inversify';
import { Controller, ControllerActionMetadata, ControllerMetadata, ControllerParameterMetadata } from './interfaces';
export declare function getControllersFromContainer(container: inversifyInterfaces.Container, forceControllers: boolean): Controller[];
export declare function getControllersFromMetadata(): any[];
export declare function getControllerMetadata(constructor: any): ControllerMetadata;
export declare function getActionMetadata(constructor: any): ControllerActionMetadata[];
export declare function getParameterMetadata(constructor: any): ControllerParameterMetadata;
export declare function cleanUpMetadata(): void;
