"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Method = exports.Head = exports.Put = exports.Delete = exports.Post = exports.Patch = exports.Get = void 0;

var _inversifyExpressUtils = require("inversify-express-utils");

var Get = _inversifyExpressUtils.httpGet;
exports.Get = Get;
var Patch = _inversifyExpressUtils.httpPatch;
exports.Patch = Patch;
var Post = _inversifyExpressUtils.httpPost;
exports.Post = Post;
var Delete = _inversifyExpressUtils.httpDelete;
exports.Delete = Delete;
var Put = _inversifyExpressUtils.httpPut;
exports.Put = Put;
var Head = _inversifyExpressUtils.httpHead;
exports.Head = Head;
var Method = _inversifyExpressUtils.httpMethod;
exports.Method = Method;