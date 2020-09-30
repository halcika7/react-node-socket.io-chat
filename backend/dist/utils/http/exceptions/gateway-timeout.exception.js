"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GatewayTimeoutException = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _codes = require("../codes");

var _http = require("./http.exception");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var GatewayTimeoutException = /*#__PURE__*/function (_HttpException) {
  (0, _inherits2["default"])(GatewayTimeoutException, _HttpException);

  var _super = _createSuper(GatewayTimeoutException);

  /**
   * Instantiate a `GatewayTimeoutException` Exception.
   *
   * @example
   * `throw new GatewayTimeoutException()`
   *
   * The HTTP response status code will be 504.
   *
   * @param objectOrError string or object describing the error condition.
   * @param description a short description of the HTTP error.
   */
  function GatewayTimeoutException(objectOrError) {
    (0, _classCallCheck2["default"])(this, GatewayTimeoutException);
    return _super.call(this, _http.HttpException.createBody(objectOrError, _codes.HTTPDescription.GATEWAY_TIMEOUT, _codes.HTTPCodes.GATEWAY_TIMEOUT), _codes.HTTPCodes.GATEWAY_TIMEOUT, _codes.HTTPDescription.GATEWAY_TIMEOUT);
  }

  return GatewayTimeoutException;
}(_http.HttpException);

exports.GatewayTimeoutException = GatewayTimeoutException;