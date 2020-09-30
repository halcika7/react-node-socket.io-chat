"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _express = _interopRequireWildcard(require("express"));

var _compression = _interopRequireDefault(require("compression"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

var _hpp = _interopRequireDefault(require("hpp"));

var _index = require("./utils/logger/index");

var _Passport = _interopRequireDefault(require("./services/Passport"));

var _index2 = require("./configs/index");

var _dbConnect = require("./configs/db-connect");

var _inversify = _interopRequireDefault(require("./inversify.config"));

var _inversifyExpressUtils = require("inversify-express-utils");

require("./controllers/Auth");

var _errorHandling = require("./middlewares/errorHandling");

var _index3 = require("./utils/socket-inversify/index");

var _socket = _interopRequireDefault(require("socket.io"));

var _Configuration$appCon = _index2.Configuration.appConfig,
    environment = _Configuration$appCon.environment,
    url = _Configuration$appCon.url,
    server = _Configuration$appCon.server,
    db = _Configuration$appCon.db;

var App = /*#__PURE__*/function () {
  function App() {
    (0, _classCallCheck2["default"])(this, App);
    (0, _defineProperty2["default"])(this, "app", void 0);
    (0, _defineProperty2["default"])(this, "port", server.PORT);
    (0, _defineProperty2["default"])(this, "url", server.BACKEND_URL);
    (0, _defineProperty2["default"])(this, "env", environment);
    (0, _defineProperty2["default"])(this, "logger", _index.LoggerFactory.getLogger(App.name));
    (0, _defineProperty2["default"])(this, "server", null);
    this.app = (0, _express["default"])();
    this.setAppMiddlewares();
    (0, _dbConnect.connect)(db.MONGO_URI);
  }

  (0, _createClass2["default"])(App, [{
    key: "setAppMiddlewares",
    value: function setAppMiddlewares() {
      this.app.disable('x-powered-by');
      this.app.use([_Passport["default"].initialize(), (0, _hpp["default"])(), (0, _helmet["default"])(), (0, _compression["default"])(), (0, _express.json)({
        limit: '1kb'
      }), (0, _express.urlencoded)({
        extended: false,
        limit: '1kb',
        parameterLimit: 10
      }), (0, _cors["default"])({
        origin: url,
        credentials: true
      }), (0, _cookieParser["default"])()]);
    }
  }, {
    key: "start",
    value: function () {
      var _start = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _this = this;

        var appConfigured, httpsServer, socketServer;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.server = new _inversifyExpressUtils.InversifyExpressServer(_inversify["default"], null, {
                  rootPath: '/api'
                }, this.app);
                this.server.setErrorConfig(function (app) {
                  return app.use(function (err, req, res, next) {
                    return (0, _errorHandling.errorHandle)(err, req, res, next);
                  });
                });
                appConfigured = this.server.build();
                httpsServer = appConfigured.listen(this.port, function () {
                  _this.logger.info("App is running at ".concat(_this.url, " in ").concat(_this.env, " mode."), 'this.app.listen');
                });
                socketServer = new _index3.InversifySocketServer(_inversify["default"], (0, _socket["default"])(httpsServer));
                socketServer.build();

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function start() {
        return _start.apply(this, arguments);
      }

      return start;
    }()
  }]);
  return App;
}();

var _default = App;
exports["default"] = _default;