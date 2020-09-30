"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _User = require("./repositories/User");

var _index = require("./services/index");

var _index2 = require("./utils/socket-inversify/index");

var _Message = require("./controllers/socket/Message");

var _Auth = require("./controllers/socket/Auth");

var _Message2 = require("./repositories/Message");

var _container = require("./utils/container");

_container.container.bind(_index2.TYPE.Controller).to(_Auth.AuthSocketController).whenTargetNamed('AuthSocketController');

_container.container.bind(_index2.TYPE.Controller).to(_Message.MessageController).whenTargetNamed('MessageController');

_container.container.bind(_index.AuthService).toSelf().inSingletonScope();

_container.container.bind(_index.PassportService).toSelf().inSingletonScope();

_container.container.bind(_User.UserRepository).toSelf().inSingletonScope();

_container.container.bind(_Message2.MessageRepository).toSelf().inSingletonScope();

var _default = _container.container;
exports["default"] = _default;