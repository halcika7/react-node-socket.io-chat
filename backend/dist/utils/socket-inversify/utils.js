"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getControllersFromContainer = getControllersFromContainer;
exports.getControllersFromMetadata = getControllersFromMetadata;
exports.getControllerMetadata = getControllerMetadata;
exports.getActionMetadata = getActionMetadata;
exports.getParameterMetadata = getParameterMetadata;
exports.cleanUpMetadata = cleanUpMetadata;

var _inversify = require("inversify");

var _constants = require("./constants");

var _interfaces = require("./interfaces");

function getControllersFromContainer(container, forceControllers) {
  if (container.isBound(_constants.TYPE.Controller)) {
    return container.getAll(_constants.TYPE.Controller);
  } else if (forceControllers) {
    throw new Error(_constants.NO_CONTROLLERS_FOUND);
  } else {
    return [];
  }
}

function getControllersFromMetadata() {
  var arrayOfControllerMetadata = Reflect.getMetadata(_constants.METADATA_KEY.Controller, Reflect) || [];
  return arrayOfControllerMetadata.map(function (metadata) {
    return metadata.target;
  });
}

function getControllerMetadata(constructor) {
  var controllerMetadata = Reflect.getMetadata(_constants.METADATA_KEY.Controller, constructor);
  return controllerMetadata;
}

function getActionMetadata(constructor) {
  var actionMetadata = Reflect.getMetadata(_constants.METADATA_KEY.Action, constructor);
  return actionMetadata;
}

function getParameterMetadata(constructor) {
  var parameterMetadata = Reflect.getMetadata(_constants.METADATA_KEY.Parameter, constructor);
  return parameterMetadata;
}

function cleanUpMetadata() {
  Reflect.defineMetadata(_constants.METADATA_KEY.Controller, [], Reflect);
}