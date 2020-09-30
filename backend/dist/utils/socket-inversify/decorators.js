"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.params = params;
exports.SocketController = SocketController;
exports.OnConnect = OnConnect;
exports.OnDisconnect = OnDisconnect;
exports.OnMessage = OnMessage;
exports.SocketRooms = exports.SocketRequest = exports.SocketQueryParam = exports.Payload = exports.ConnectedSocket = exports.SocketID = exports.SocketIO = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _constants = require("./constants");

var _interfaces = require("./interfaces");

function params(type, name) {
  return function (target, methodName, index) {
    var metadataList = {};
    var parameterMetadataList = [];
    var parameterMetadata = {
      index: index,
      name: name,
      type: type
    };

    if (!Reflect.hasMetadata(_constants.METADATA_KEY.Parameter, target.constructor)) {
      parameterMetadataList.unshift(parameterMetadata);
    } else {
      metadataList = Reflect.getMetadata(_constants.METADATA_KEY.Parameter, target.constructor);

      if (Object.prototype.hasOwnProperty.call(metadataList, methodName)) {
        parameterMetadataList = metadataList[String(methodName)];
      }

      parameterMetadataList.unshift(parameterMetadata);
    }

    metadataList[String(methodName)] = parameterMetadataList;
    Reflect.defineMetadata(_constants.METADATA_KEY.Parameter, metadataList, target.constructor);
  };
}

function paramDecoratorFactory(parameterType) {
  return function (name) {
    var finalName = name || 'default';
    return params(parameterType, finalName);
  };
}

function SocketController() {
  var namespace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return function (target) {
    var currentMetadata = {
      namespace: namespace,
      target: target
    };
    Reflect.defineMetadata(_constants.METADATA_KEY.Controller, currentMetadata, target);
    var previousMetadata = Reflect.getMetadata(_constants.METADATA_KEY.Controller, Reflect) || [];
    var newMetadata = [currentMetadata].concat((0, _toConsumableArray2["default"])(previousMetadata));
    Reflect.defineMetadata(_constants.METADATA_KEY.Controller, newMetadata, Reflect);
  };
}

function OnConnect(name) {
  return function (target, key) {
    var metadata = {
      key: key,
      name: name,
      type: _constants.ACTION_TYPE.CONNECT,
      target: target
    };
    var metadataList = [];

    if (!Reflect.hasMetadata(_constants.METADATA_KEY.Action, target.constructor)) {
      Reflect.defineMetadata(_constants.METADATA_KEY.Action, metadataList, target.constructor);
    } else {
      metadataList = Reflect.getMetadata(_constants.METADATA_KEY.Action, target.constructor);
    }

    metadataList.push(metadata);
  };
}

function OnDisconnect(name) {
  return function (target, key) {
    var metadata = {
      key: key,
      name: name,
      type: _constants.ACTION_TYPE.DISCONNECT,
      target: target
    };
    var metadataList = [];

    if (!Reflect.hasMetadata(_constants.METADATA_KEY.Action, target.constructor)) {
      Reflect.defineMetadata(_constants.METADATA_KEY.Action, metadataList, target.constructor);
    } else {
      metadataList = Reflect.getMetadata(_constants.METADATA_KEY.Action, target.constructor);
    }

    metadataList.push(metadata);
  };
}

function OnMessage(name, middleware) {
  return function (target, key) {
    var metadata = {
      key: key,
      name: name,
      type: _constants.ACTION_TYPE.MESSAGE,
      target: target,
      middleware: middleware
    };
    var metadataList = [];

    if (!Reflect.hasMetadata(_constants.METADATA_KEY.Action, target.constructor)) {
      Reflect.defineMetadata(_constants.METADATA_KEY.Action, metadataList, target.constructor);
    } else {
      metadataList = Reflect.getMetadata(_constants.METADATA_KEY.Action, target.constructor);
    }

    metadataList.push(metadata);
  };
}

var SocketIO = paramDecoratorFactory(_constants.PARAMETER_TYPE.SOCKET_IO);
exports.SocketIO = SocketIO;
var SocketID = paramDecoratorFactory(_constants.PARAMETER_TYPE.SOCKET_ID);
exports.SocketID = SocketID;
var ConnectedSocket = paramDecoratorFactory(_constants.PARAMETER_TYPE.CONNECTED_SOCKET);
exports.ConnectedSocket = ConnectedSocket;
var Payload = paramDecoratorFactory(_constants.PARAMETER_TYPE.SOCKET_BODY);
exports.Payload = Payload;
var SocketQueryParam = paramDecoratorFactory(_constants.PARAMETER_TYPE.SOCKET_QUERY_PARAM);
exports.SocketQueryParam = SocketQueryParam;
var SocketRequest = paramDecoratorFactory(_constants.PARAMETER_TYPE.SOCKET_REQUEST);
exports.SocketRequest = SocketRequest;
var SocketRooms = paramDecoratorFactory(_constants.PARAMETER_TYPE.SOCKET_ROOMS);
exports.SocketRooms = SocketRooms;