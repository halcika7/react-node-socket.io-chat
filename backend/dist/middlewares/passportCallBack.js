"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passportCallBack = void 0;

var _express = require("express");

var _Passport = require("../services/Passport");

var passportService = new _Passport.PassportService();

var passportCallBack = function passportCallBack(provider) {
  return function (req, res) {
    return passportService.socialCallback(req, res, provider);
  };
};

exports.passportCallBack = passportCallBack;