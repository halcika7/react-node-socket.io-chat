"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthController = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _class4 = require("../utils/decorators/class");

var _Base = require("./Base");

var _method = require("../utils/decorators/method");

var _param = require("../utils/decorators/param");

var _express = require("express");

var _Cookie = require("../services/Cookie");

var _codes = require("../utils/http/codes");

var _index = require("../configs/index");

var _Auth = require("../services/auth/Auth");

var _Passport = _interopRequireDefault(require("../services/Passport"));

var _passportCallBack = require("../middlewares/passportCallBack");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _class, _class2, _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var AuthController = (_dec = (0, _class4.Controller)('/auth'), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", [typeof _Auth.AuthService === "undefined" ? Object : _Auth.AuthService]), _dec4 = (0, _method.Post)('/logout'), _dec5 = function _dec5(target, key) {
  return (0, _param.Res)()(target, key, 0);
}, _dec6 = function _dec6(target, key) {
  return (0, _param.Req)()(target, key, 1);
}, _dec7 = Reflect.metadata("design:type", Function), _dec8 = Reflect.metadata("design:paramtypes", [typeof _express.Response === "undefined" ? Object : _express.Response, typeof _express.Request === "undefined" ? Object : _express.Request]), _dec9 = (0, _method.Get)('/refresh'), _dec10 = function _dec10(target, key) {
  return (0, _param.Cookie)(_index.Configuration.appConfig.webToken.REFRESH_TOKEN_NAME)(target, key, 0);
}, _dec11 = function _dec11(target, key) {
  return (0, _param.Res)()(target, key, 1);
}, _dec12 = Reflect.metadata("design:type", Function), _dec13 = Reflect.metadata("design:paramtypes", [String, typeof _express.Response === "undefined" ? Object : _express.Response]), _dec14 = (0, _method.Get)('/google', _Passport["default"].authenticate('google', {
  scope: ['profile', 'email'],
  prompt: 'select_account'
})), _dec15 = Reflect.metadata("design:type", Function), _dec16 = Reflect.metadata("design:paramtypes", []), _dec17 = (0, _method.Get)('/google/callback', (0, _passportCallBack.passportCallBack)('google')), _dec18 = Reflect.metadata("design:type", Function), _dec19 = Reflect.metadata("design:paramtypes", []), _dec20 = (0, _method.Get)('/facebook', _Passport["default"].authenticate('facebook', {
  scope: 'email'
})), _dec21 = Reflect.metadata("design:type", Function), _dec22 = Reflect.metadata("design:paramtypes", []), _dec23 = (0, _method.Get)('/facebook/callback', (0, _passportCallBack.passportCallBack)('facebook')), _dec24 = Reflect.metadata("design:type", Function), _dec25 = Reflect.metadata("design:paramtypes", []), _dec26 = (0, _method.Get)('/twitter', _Passport["default"].authenticate('twitter', {
  scope: 'email'
})), _dec27 = Reflect.metadata("design:type", Function), _dec28 = Reflect.metadata("design:paramtypes", []), _dec29 = (0, _method.Get)('/twitter/callback', (0, _passportCallBack.passportCallBack)('twitter')), _dec30 = Reflect.metadata("design:type", Function), _dec31 = Reflect.metadata("design:paramtypes", []), _dec32 = (0, _method.Get)('/linkedin', _Passport["default"].authenticate('linkedin')), _dec33 = Reflect.metadata("design:type", Function), _dec34 = Reflect.metadata("design:paramtypes", []), _dec35 = (0, _method.Get)('/linkedin/callback', (0, _passportCallBack.passportCallBack)('linkedin')), _dec36 = Reflect.metadata("design:type", Function), _dec37 = Reflect.metadata("design:paramtypes", []), _dec38 = (0, _method.Get)('/github', _Passport["default"].authenticate('github', {
  scope: ['user']
})), _dec39 = Reflect.metadata("design:type", Function), _dec40 = Reflect.metadata("design:paramtypes", []), _dec41 = (0, _method.Get)('/github/callback', (0, _passportCallBack.passportCallBack)('github')), _dec42 = Reflect.metadata("design:type", Function), _dec43 = Reflect.metadata("design:paramtypes", []), _dec44 = (0, _method.Get)('/spotify', _Passport["default"].authenticate('spotify', {
  scope: ['user-read-email', 'user-read-private']
})), _dec45 = Reflect.metadata("design:type", Function), _dec46 = Reflect.metadata("design:paramtypes", []), _dec47 = (0, _method.Get)('/spotify/callback', (0, _passportCallBack.passportCallBack)('spotify')), _dec48 = Reflect.metadata("design:type", Function), _dec49 = Reflect.metadata("design:paramtypes", []), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = (_temp = /*#__PURE__*/function (_BaseController) {
  (0, _inherits2["default"])(AuthController, _BaseController);

  var _super = _createSuper(AuthController);

  function AuthController(auth) {
    var _this;

    (0, _classCallCheck2["default"])(this, AuthController);
    _this = _super.call(this);
    _this.auth = auth;
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "cookie", _Cookie.CookieService);
    return _this;
  }

  (0, _createClass2["default"])(AuthController, [{
    key: "logout",
    value: function logout(res, req) {
      req.logout();
      req.logOut();
      this.cookie.removeRefreshToken(res);
      return this.sendResponse(res, _codes.HTTPCodes.OK, {});
    }
  }, {
    key: "refreshToken",
    value: function () {
      var _refreshToken = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(token, res) {
        var _yield$this$auth$refr, status, refreshToken, rest;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.auth.refreshToken(token);

              case 2:
                _yield$this$auth$refr = _context.sent;
                status = _yield$this$auth$refr.status;
                refreshToken = _yield$this$auth$refr.refreshToken;
                rest = (0, _objectWithoutProperties2["default"])(_yield$this$auth$refr, ["status", "refreshToken"]);
                this.cookie.setRefreshToken(res, refreshToken || '');
                return _context.abrupt("return", this.sendResponse(res, status, _objectSpread({}, rest)));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function refreshToken(_x, _x2) {
        return _refreshToken.apply(this, arguments);
      }

      return refreshToken;
    }()
  }, {
    key: "google",
    value: function google() {
      return null;
    }
  }, {
    key: "googleCallback",
    value: function googleCallback() {
      return null;
    }
  }, {
    key: "facebook",
    value: function facebook() {
      return null;
    }
  }, {
    key: "facebookCallback",
    value: function facebookCallback() {
      return null;
    }
  }, {
    key: "twitter",
    value: function twitter() {
      return null;
    }
  }, {
    key: "twitterCallback",
    value: function twitterCallback() {
      return null;
    }
  }, {
    key: "linkedin",
    value: function linkedin() {
      return null;
    }
  }, {
    key: "linkedinCallback",
    value: function linkedinCallback() {
      return null;
    }
  }, {
    key: "github",
    value: function github() {
      return null;
    }
  }, {
    key: "githubCallback",
    value: function githubCallback() {
      return null;
    }
  }, {
    key: "spotify",
    value: function spotify() {
      return null;
    }
  }, {
    key: "spotifyCallback",
    value: function spotifyCallback() {
      return null;
    }
  }]);
  return AuthController;
}(_Base.BaseController), _temp), ((0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "logout", [_dec4, _dec5, _dec6, _dec7, _dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "logout"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "refreshToken", [_dec9, _dec10, _dec11, _dec12, _dec13], Object.getOwnPropertyDescriptor(_class2.prototype, "refreshToken"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "google", [_dec14, _dec15, _dec16], Object.getOwnPropertyDescriptor(_class2.prototype, "google"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "googleCallback", [_dec17, _dec18, _dec19], Object.getOwnPropertyDescriptor(_class2.prototype, "googleCallback"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "facebook", [_dec20, _dec21, _dec22], Object.getOwnPropertyDescriptor(_class2.prototype, "facebook"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "facebookCallback", [_dec23, _dec24, _dec25], Object.getOwnPropertyDescriptor(_class2.prototype, "facebookCallback"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "twitter", [_dec26, _dec27, _dec28], Object.getOwnPropertyDescriptor(_class2.prototype, "twitter"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "twitterCallback", [_dec29, _dec30, _dec31], Object.getOwnPropertyDescriptor(_class2.prototype, "twitterCallback"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "linkedin", [_dec32, _dec33, _dec34], Object.getOwnPropertyDescriptor(_class2.prototype, "linkedin"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "linkedinCallback", [_dec35, _dec36, _dec37], Object.getOwnPropertyDescriptor(_class2.prototype, "linkedinCallback"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "github", [_dec38, _dec39, _dec40], Object.getOwnPropertyDescriptor(_class2.prototype, "github"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "githubCallback", [_dec41, _dec42, _dec43], Object.getOwnPropertyDescriptor(_class2.prototype, "githubCallback"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "spotify", [_dec44, _dec45, _dec46], Object.getOwnPropertyDescriptor(_class2.prototype, "spotify"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "spotifyCallback", [_dec47, _dec48, _dec49], Object.getOwnPropertyDescriptor(_class2.prototype, "spotifyCallback"), _class2.prototype)), _class2)) || _class) || _class) || _class);
exports.AuthController = AuthController;