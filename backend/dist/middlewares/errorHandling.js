"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorHandle = void 0;

var _express = require("express");

var _index = require("../utils/logger/index");

var _codes = require("../utils/http/codes");

var _index2 = require("../utils/http/exceptions/index");

var errorHandle = function errorHandle(error, _, res, __) {
  if (error instanceof _index2.HttpException) {
    return res.status(error.getStatus()).json(error.getResponse());
  }

  var logger = _index.LoggerFactory.getLogger('Unhandled error');

  logger.error(error, 'Unhandled error');
  return res.status(_codes.HTTPCodes.INTERNAL_SERVER_ERROR).json({
    message: 'Internal server error'
  });
};

exports.errorHandle = errorHandle;