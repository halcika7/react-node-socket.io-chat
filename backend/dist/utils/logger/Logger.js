"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logger = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _os = _interopRequireDefault(require("os"));

var _winston = _interopRequireWildcard(require("winston"));

var _index = require("../../configs/index");

var _class3 = require("../decorators/class");

var _dec, _dec2, _dec3, _class, _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var LogLevels;

(function (LogLevels) {
  LogLevels["DEBUG"] = "debug";
  LogLevels["INFO"] = "info";
  LogLevels["WARN"] = "warn";
  LogLevels["ERROR"] = "error";
})(LogLevels || (LogLevels = {}));

var WinstonLogger = _winston["default"].createLogger({
  level: _index.Configuration.appConfig.logging.defaultLevel,
  format: _winston["default"].format.json(),
  transports: [new _winston["default"].transports.File({
    filename: _index.Configuration.appConfig.logging.logsPath
  }), new _winston["default"].transports.File({
    level: LogLevels.ERROR,
    filename: _index.Configuration.appConfig.logging.errorLogsPath
  })]
});

if (_index.Configuration.appConfig.environment !== 'production' && _index.Configuration.appConfig.environment !== 'test') {
  WinstonLogger.add(new _winston["default"].transports.Console({
    format: _winston["default"].format.prettyPrint()
  }));
}

var Logger = (_dec = (0, _class3.Injectable)(), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", [String]), _dec(_class = _dec2(_class = _dec3(_class = (_temp = /*#__PURE__*/function () {
  function Logger(Class) {
    (0, _classCallCheck2["default"])(this, Logger);
    this.Class = Class;
    (0, _defineProperty2["default"])(this, "winstonLogger", WinstonLogger);
    (0, _defineProperty2["default"])(this, "logConfig", {
      app: _index.Configuration.appConfig.appName,
      timestamp: new Date().toISOString(),
      hostName: _os["default"].hostname(),
      "class": this.Class,
      method: '',
      event: ''
    });
    this.Class = Class;
  }

  (0, _createClass2["default"])(Logger, [{
    key: "formatMessage",
    value: function formatMessage(msg, method) {
      return _objectSpread(_objectSpread({}, this.logConfig), {}, {
        method: method,
        event: msg
      });
    }
  }, {
    key: "formatErrorMessage",
    value: function formatErrorMessage(err, method) {
      var log = _objectSpread(_objectSpread({}, this.logConfig), {}, {
        method: method,
        err: {}
      });

      if (err instanceof Error) {
        log.err = {
          name: err.name,
          msg: err.message,
          stack: err.stack || ''
        };
      } else {
        log.err = {
          name: 'Unknown Error',
          msg: err,
          stack: new Error().stack || ''
        };
      }

      return log;
    }
  }, {
    key: "logEvent",
    value: function logEvent(level, event) {
      this.winstonLogger.log(level, event);
    }
  }, {
    key: "info",
    value: function info(msg, method) {
      this.logEvent(LogLevels.INFO, this.formatMessage(msg, method));
    }
  }, {
    key: "debug",
    value: function debug(msg, method) {
      this.logEvent(LogLevels.DEBUG, this.formatMessage(msg, method));
    }
  }, {
    key: "warning",
    value: function warning(msg, method) {
      this.logEvent(LogLevels.WARN, this.formatMessage(msg, method));
    }
  }, {
    key: "error",
    value: function error(err, method) {
      this.logEvent(LogLevels.ERROR, this.formatErrorMessage(err, method));
    }
  }]);
  return Logger;
}(), _temp)) || _class) || _class) || _class);
exports.Logger = Logger;