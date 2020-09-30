"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HTTPDescription = exports.HTTPCodes = void 0;
var HTTPCodes;
exports.HTTPCodes = HTTPCodes;

(function (HTTPCodes) {
  HTTPCodes[HTTPCodes["OK"] = 200] = "OK";
  HTTPCodes[HTTPCodes["Created"] = 201] = "Created";
  HTTPCodes[HTTPCodes["Accepted"] = 202] = "Accepted";
  HTTPCodes[HTTPCodes["NO_CONTENT"] = 204] = "NO_CONTENT";
  HTTPCodes[HTTPCodes["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
  HTTPCodes[HTTPCodes["BAD_REQUEST"] = 400] = "BAD_REQUEST";
  HTTPCodes[HTTPCodes["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
  HTTPCodes[HTTPCodes["FORBIDDEN"] = 403] = "FORBIDDEN";
  HTTPCodes[HTTPCodes["NOT_FOUND"] = 404] = "NOT_FOUND";
  HTTPCodes[HTTPCodes["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
  HTTPCodes[HTTPCodes["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
  HTTPCodes[HTTPCodes["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
  HTTPCodes[HTTPCodes["CONFLICT"] = 409] = "CONFLICT";
  HTTPCodes[HTTPCodes["GONE"] = 410] = "GONE";
  HTTPCodes[HTTPCodes["REQUEST_TOO_LONG"] = 413] = "REQUEST_TOO_LONG";
  HTTPCodes[HTTPCodes["REQUEST_URI_TOO_LONG"] = 414] = "REQUEST_URI_TOO_LONG";
  HTTPCodes[HTTPCodes["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
  HTTPCodes[HTTPCodes["IM_A_TEAPOT"] = 418] = "IM_A_TEAPOT";
  HTTPCodes[HTTPCodes["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
  HTTPCodes[HTTPCodes["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
  HTTPCodes[HTTPCodes["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
  HTTPCodes[HTTPCodes["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
  HTTPCodes[HTTPCodes["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
  HTTPCodes[HTTPCodes["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
  HTTPCodes[HTTPCodes["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
  HTTPCodes[HTTPCodes["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
})(HTTPCodes || (exports.HTTPCodes = HTTPCodes = {}));

var HTTPDescription;
exports.HTTPDescription = HTTPDescription;

(function (HTTPDescription) {
  HTTPDescription["BAD_REQUEST"] = "Bad Request";
  HTTPDescription["UNAUTHORIZED"] = "Unauthorized";
  HTTPDescription["FORBIDDEN"] = "Forbidden";
  HTTPDescription["NOT_FOUND"] = "Not Found";
  HTTPDescription["METHOD_NOT_ALLOWED"] = "Method Not Allowed";
  HTTPDescription["NOT_ACCEPTABLE"] = "Not Acceptable";
  HTTPDescription["REQUEST_TIMEOUT"] = "Request Timeout";
  HTTPDescription["CONFLICT"] = "Conflict";
  HTTPDescription["GONE"] = "Gone";
  HTTPDescription["REQUEST_TOO_LONG"] = "Request Entity Too Large";
  HTTPDescription["REQUEST_URI_TOO_LONG"] = "Request-URI Too Long";
  HTTPDescription["UNSUPPORTED_MEDIA_TYPE"] = "Unsupported Media Type";
  HTTPDescription["IM_A_TEAPOT"] = "I'm a teapot";
  HTTPDescription["UNPROCESSABLE_ENTITY"] = "Unprocessable Entity";
  HTTPDescription["TOO_MANY_REQUESTS"] = "Too Many Requests";
  HTTPDescription["INTERNAL_SERVER_ERROR"] = "Server Error";
  HTTPDescription["NOT_IMPLEMENTED"] = "Not Implemented";
  HTTPDescription["BAD_GATEWAY"] = "Bad Gateway";
  HTTPDescription["SERVICE_UNAVAILABLE"] = "Service Unavailable";
  HTTPDescription["GATEWAY_TIMEOUT"] = "Gateway Timeout";
  HTTPDescription["HTTP_VERSION_NOT_SUPPORTED"] = "HTTP Version Not Supported";
})(HTTPDescription || (exports.HTTPDescription = HTTPDescription = {}));