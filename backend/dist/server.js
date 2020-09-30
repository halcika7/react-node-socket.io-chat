"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("reflect-metadata");

var _app = _interopRequireDefault(require("./app"));

var server = new _app["default"]();
server.start();
var _default = server;
exports["default"] = _default;