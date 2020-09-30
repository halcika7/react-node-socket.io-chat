"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Param = exports.Body = exports.Query = exports.Headers = exports.Cookie = exports.Next = exports.Res = exports.Req = void 0;

var _inversifyExpressUtils = require("inversify-express-utils");

var Req = _inversifyExpressUtils.request;
exports.Req = Req;
var Res = _inversifyExpressUtils.response;
exports.Res = Res;
var Next = _inversifyExpressUtils.next;
exports.Next = Next;
var Cookie = _inversifyExpressUtils.cookies;
exports.Cookie = Cookie;
var Headers = _inversifyExpressUtils.requestHeaders;
exports.Headers = Headers;
var Query = _inversifyExpressUtils.queryParam;
exports.Query = Query;
var Body = _inversifyExpressUtils.requestBody;
exports.Body = Body;
var Param = _inversifyExpressUtils.requestParam;
exports.Param = Param;