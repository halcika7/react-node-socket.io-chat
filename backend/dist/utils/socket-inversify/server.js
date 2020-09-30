"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InversifySocketServer = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _inversify = require("inversify");

var _interfaces = require("./interfaces");

var _constants = require("./constants");

var _utils = require("./utils");

var _socket = require("socket.io");

/* eslint-disable security/detect-object-injection */
var InversifySocketServer = /*#__PURE__*/function () {
  function InversifySocketServer(container, server) {
    (0, _classCallCheck2["default"])(this, InversifySocketServer);
    (0, _defineProperty2["default"])(this, "server", void 0);
    (0, _defineProperty2["default"])(this, "container", void 0);
    this.container = container;
    this.server = server;
  }

  (0, _createClass2["default"])(InversifySocketServer, [{
    key: "build",
    value: function build() {
      this.registerControllers();
      return this.server;
    }
  }, {
    key: "registerControllers",
    value: function registerControllers() {
      var _this = this;

      var controllers = (0, _utils.getControllersFromContainer)(this.container, false);
      controllers.forEach(function (controller) {
        var controllerMetadata = (0, _utils.getControllerMetadata)(controller.constructor);
        var actionMetadata = (0, _utils.getActionMetadata)(controller.constructor);
        var parameterMetadata = (0, _utils.getParameterMetadata)(controller.constructor);

        if (controllerMetadata && actionMetadata) {
          _this.server.of(controllerMetadata.namespace).on('connection', function (socket) {
            _this.handleConnection(socket, controllerMetadata, actionMetadata, parameterMetadata);
          });
        }
      });
    }
  }, {
    key: "handleConnection",
    value: function handleConnection(socket, controllerMetadata, actionMetadata, parameterMetadata) {
      var _this2 = this;

      actionMetadata.forEach(function (metadata) {
        switch (metadata.type) {
          case _constants.ACTION_TYPE.CONNECT:
            _this2.handleAction(socket, controllerMetadata, metadata, parameterMetadata);

            break;

          case _constants.ACTION_TYPE.DISCONNECT:
            socket.on('disconnect', function () {
              _this2.handleAction(socket, controllerMetadata, metadata, parameterMetadata);
            });
            break;

          case _constants.ACTION_TYPE.MESSAGE:
            socket.on(metadata.name, function (payload) {
              _this2.handleAction(socket, controllerMetadata, metadata, parameterMetadata, payload);
            });
            break;

          default:
            break;
        }
      });
    } // eslint-disable-next-line max-params

  }, {
    key: "handleAction",
    value: function handleAction(socket, controller, action, parameters, payload) {
      var _this3 = this;

      var paramList = [];

      if (parameters) {
        paramList = parameters[action.key] || [];
      }

      var args = this.extractParams(socket, payload, paramList);

      var cb = function cb() {
        var _ref;

        return (_ref = _this3.container.getNamed(_constants.TYPE.Controller, controller.target.name))[action.key].apply(_ref, (0, _toConsumableArray2["default"])(args));
      };

      this.container.getNamed(_constants.TYPE.Controller, controller.target.name)[action.key] = action.middleware ? action.middleware(this.server, socket, cb) : cb();
    }
  }, {
    key: "extractParams",
    value: function extractParams(socket, payload, params) {
      var _this4 = this;

      var args = [];
      params.forEach(function (_ref2) {
        var type = _ref2.type,
            index = _ref2.index,
            name = _ref2.name;

        switch (type) {
          case _constants.PARAMETER_TYPE.CONNECTED_SOCKET:
            args[index] = socket;
            break;

          case _constants.PARAMETER_TYPE.SOCKET_IO:
            args[index] = _this4.server;
            break;

          case _constants.PARAMETER_TYPE.SOCKET_QUERY_PARAM:
            args[index] = socket.handshake.query[name];
            break;

          case _constants.PARAMETER_TYPE.SOCKET_ID:
            args[index] = socket.id;
            break;

          case _constants.PARAMETER_TYPE.SOCKET_REQUEST:
            args[index] = socket.request;
            break;

          case _constants.PARAMETER_TYPE.SOCKET_ROOMS:
            args[index] = socket.rooms;
            break;

          default:
            args[index] = payload;
            break;
        }
      });
      return args;
    }
  }]);
  return InversifySocketServer;
}();

exports.InversifySocketServer = InversifySocketServer;