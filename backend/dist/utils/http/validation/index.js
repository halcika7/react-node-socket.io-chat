"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isString = exports.isObject = exports.isNil = exports.isUndefined = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var isUndefined = function isUndefined(obj) {
  return typeof obj === 'undefined';
};

exports.isUndefined = isUndefined;

var isNil = function isNil(obj) {
  return isUndefined(obj) || obj === null;
};

exports.isNil = isNil;

var isObject = function isObject(fn) {
  return !isNil(fn) && (0, _typeof2["default"])(fn) === 'object';
};

exports.isObject = isObject;

var isString = function isString(fn) {
  return typeof fn === 'string';
};

exports.isString = isString;