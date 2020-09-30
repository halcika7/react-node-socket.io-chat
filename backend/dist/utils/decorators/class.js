"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Injectable = exports.Inject = exports.Controller = void 0;

var _inversify = require("inversify");

var _inversifyExpressUtils = require("inversify-express-utils");

var Controller = _inversifyExpressUtils.controller;
exports.Controller = Controller;
var Inject = _inversify.inject;
exports.Inject = Inject;
var Injectable = _inversify.injectable;
exports.Injectable = Injectable;