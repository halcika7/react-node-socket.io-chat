"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnauthorizedException = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _codes = require("../codes");

var _http = require("./http.exception");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var UnauthorizedException = /*#__PURE__*/function (_HttpException) {
  (0, _inherits2["default"])(UnauthorizedException, _HttpException);

  var _super = _createSuper(UnauthorizedException);

  /**
   * Instantiate an `UnauthorizedException` Exception.
   *
   * @example
   * `throw new UnauthorizedException()`
   *
   * The HTTP response status code will be 401.
   *
   * @param objectOrError string or object describing the error condition.
   * @param description a short description of the HTTP error.
   */
  function UnauthorizedException(objectOrError) {
    (0, _classCallCheck2["default"])(this, UnauthorizedException);
    return _super.call(this, _http.HttpException.createBody(objectOrError, _codes.HTTPDescription.UNAUTHORIZED, _codes.HTTPCodes.UNAUTHORIZED), _codes.HTTPCodes.UNAUTHORIZED, _codes.HTTPDescription.UNAUTHORIZED);
  }

  return UnauthorizedException;
}(_http.HttpException);

exports.UnauthorizedException = UnauthorizedException;