"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoggerFactory = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Logger = require("./Logger");

var LoggerFactory = /*#__PURE__*/function () {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  function LoggerFactory() {
    (0, _classCallCheck2["default"])(this, LoggerFactory);
  }

  (0, _createClass2["default"])(LoggerFactory, null, [{
    key: "getLogger",
    value: function getLogger(Class) {
      if (!LoggerFactory.loggerMap.has(Class)) {
        LoggerFactory.loggerMap.set(Class, new _Logger.Logger(Class));
      }

      return LoggerFactory.loggerMap.get(Class);
    }
  }]);
  return LoggerFactory;
}();

exports.LoggerFactory = LoggerFactory;
(0, _defineProperty2["default"])(LoggerFactory, "loggerMap", new Map());