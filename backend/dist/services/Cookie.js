"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CookieService = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _express = require("express");

var _index = require("../configs/index");

var CookieService = function CookieService() {
  (0, _classCallCheck2["default"])(this, CookieService);
};

exports.CookieService = CookieService;
(0, _defineProperty2["default"])(CookieService, "_refreshName", _index.Configuration.appConfig.webToken.REFRESH_TOKEN_NAME);
(0, _defineProperty2["default"])(CookieService, "refreshOptions", {
  httpOnly: true,
  path: _index.Configuration.appConfig.webToken.REFRESH_TOKEN_PATH,
  sameSite: true,
  secure: _index.Configuration.appConfig.environment === 'production'
});
(0, _defineProperty2["default"])(CookieService, "setRefreshToken", function (res, token) {
  res.cookie(CookieService._refreshName, token, CookieService.refreshOptions);
});
(0, _defineProperty2["default"])(CookieService, "removeRefreshToken", function (res) {
  res.cookie(CookieService._refreshName, '', CookieService.refreshOptions);
});