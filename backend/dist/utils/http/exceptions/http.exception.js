"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HttpException = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

var _validation = require("../validation");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var HttpException = /*#__PURE__*/function (_Error) {
  (0, _inherits2["default"])(HttpException, _Error);

  var _super = _createSuper(HttpException);

  /**
   * Instantiate a plain HTTP Exception.
   *
   * @example
   * `throw new HttpException()`
   *
   * @param response string or object describing the error condition.
   * @param status HTTP response status code.
   */
  function HttpException(response, status) {
    var _this;

    var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Error';
    (0, _classCallCheck2["default"])(this, HttpException);
    _this = _super.call(this);
    _this.response = response;
    _this.status = status;
    _this.name = name;

    _this.initMessage();

    return _this;
  }

  (0, _createClass2["default"])(HttpException, [{
    key: "initMessage",
    value: function initMessage() {
      if ((0, _validation.isString)(this.response)) {
        this.message = this.response;
      } else if ((0, _validation.isObject)(this.response) && (0, _validation.isString)(this.response.message)) {
        this.message = this.response.message;
      } else if (this.constructor) {
        var match = this.constructor.name.match(/[A-Z][a-z]+|[0-9]+/g);
        this.message = match ? match.join(' ') : '';
      }
    }
  }, {
    key: "getResponse",
    value: function getResponse() {
      return this.response;
    }
  }, {
    key: "getStatus",
    value: function getStatus() {
      return this.status;
    }
  }], [{
    key: "createBody",
    value: function createBody(objectOrError, message, statusCode) {
      if (!objectOrError) {
        return {
          statusCode: statusCode,
          message: message
        };
      }

      return (0, _validation.isObject)(objectOrError) && !Array.isArray(objectOrError) ? objectOrError : {
        statusCode: statusCode,
        message: objectOrError,
        error: message
      };
    }
  }]);
  return HttpException;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));

exports.HttpException = HttpException;