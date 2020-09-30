"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JWTService = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _index = require("../configs/index");

var _index2 = require("../utils/http/exceptions/index");

var JWTService = /*#__PURE__*/function () {
  function JWTService() {
    (0, _classCallCheck2["default"])(this, JWTService);
  }

  (0, _createClass2["default"])(JWTService, null, [{
    key: "getSecret",
    value: function getSecret(refresh) {
      return !refresh ? JWTService.access_secret : JWTService.refresh_secret;
    }
  }, {
    key: "getExpires",
    value: function getExpires(refresh) {
      return !refresh ? '15m' : '7d';
    }
  }, {
    key: "verifyToken",
    value: function verifyToken(token) {
      var refresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      try {
        return _jsonwebtoken["default"].verify(token, JWTService.getSecret(refresh));
      } catch (error) {
        throw new _index2.UnauthorizedException({
          message: 'Invalid token...'
        });
      }
    }
  }, {
    key: "signToken",
    value: function signToken(payload) {
      var refresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return _jsonwebtoken["default"].sign(payload, JWTService.getSecret(refresh), {
        expiresIn: JWTService.getExpires(refresh)
      });
    }
  }, {
    key: "signActivationToken",
    value: function signActivationToken(payload) {
      return _jsonwebtoken["default"].sign(payload, JWTService.getSecret(false), {
        expiresIn: '1h'
      });
    }
  }]);
  return JWTService;
}();

exports.JWTService = JWTService;
(0, _defineProperty2["default"])(JWTService, "access_secret", _index.Configuration.appConfig.webToken.ACCESS_SECRET);
(0, _defineProperty2["default"])(JWTService, "refresh_secret", _index.Configuration.appConfig.webToken.REFRESH_SECRET);