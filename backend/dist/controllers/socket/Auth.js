"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthSocketController = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _class3 = require("../../utils/decorators/class");

var _User = require("../../repositories/User");

var _index = require("../../utils/socket-inversify/index");

var _socket = require("socket.io");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _class, _class2;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var AuthSocketController = (_dec = (0, _class3.Injectable)(), _dec2 = (0, _index.SocketController)(''), _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _User.UserRepository === "undefined" ? Object : _User.UserRepository]), _dec5 = (0, _index.OnConnect)('connection'), _dec6 = function _dec6(target, key) {
  return (0, _index.SocketIO)()(target, key, 0);
}, _dec7 = function _dec7(target, key) {
  return (0, _index.SocketID)()(target, key, 1);
}, _dec8 = function _dec8(target, key) {
  return (0, _index.SocketQueryParam)('id')(target, key, 2);
}, _dec9 = function _dec9(target, key) {
  return (0, _index.ConnectedSocket)()(target, key, 3);
}, _dec10 = Reflect.metadata("design:type", Function), _dec11 = Reflect.metadata("design:paramtypes", [typeof _socket.Server === "undefined" ? Object : _socket.Server, String, String, typeof _socket.Socket === "undefined" ? Object : _socket.Socket]), _dec12 = (0, _index.OnMessage)('logout'), _dec13 = function _dec13(target, key) {
  return (0, _index.SocketQueryParam)('id')(target, key, 0);
}, _dec14 = function _dec14(target, key) {
  return (0, _index.ConnectedSocket)()(target, key, 1);
}, _dec15 = Reflect.metadata("design:type", Function), _dec16 = Reflect.metadata("design:paramtypes", [String, typeof _socket.Socket === "undefined" ? Object : _socket.Socket]), _dec17 = (0, _index.OnMessage)('im-online-too'), _dec18 = function _dec18(target, key) {
  return (0, _index.SocketQueryParam)('id')(target, key, 0);
}, _dec19 = function _dec19(target, key) {
  return (0, _index.SocketIO)()(target, key, 1);
}, _dec20 = function _dec20(target, key) {
  return (0, _index.SocketID)()(target, key, 2);
}, _dec21 = function _dec21(target, key) {
  return (0, _index.Payload)()(target, key, 3);
}, _dec22 = Reflect.metadata("design:type", Function), _dec23 = Reflect.metadata("design:paramtypes", [String, typeof _socket.Server === "undefined" ? Object : _socket.Server, String, String]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = /*#__PURE__*/function () {
  function AuthSocketController(userRepository) {
    (0, _classCallCheck2["default"])(this, AuthSocketController);
    this.userRepository = userRepository;
  }

  (0, _createClass2["default"])(AuthSocketController, [{
    key: "connection",
    value: function () {
      var _connection = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(io, id, userId, socket) {
        var _yield$Promise$all, _yield$Promise$all2, allUsers, user;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Promise.all([this.userRepository.getAll(userId), this.userRepository.findById(userId)]);

              case 2:
                _yield$Promise$all = _context.sent;
                _yield$Promise$all2 = (0, _slicedToArray2["default"])(_yield$Promise$all, 2);
                allUsers = _yield$Promise$all2[0];
                user = _yield$Promise$all2[1];
                socket.broadcast.emit('user-logged', _objectSpread(_objectSpread({}, user), {}, {
                  socketId: id
                }));
                return _context.abrupt("return", io.to(id).emit('users', {
                  users: (0, _toConsumableArray2["default"])(allUsers)
                }));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function connection(_x, _x2, _x3, _x4) {
        return _connection.apply(this, arguments);
      }

      return connection;
    }()
  }, {
    key: "logout",
    value: function logout(id, socket) {
      return socket.broadcast.emit('logout', id);
    }
  }, {
    key: "imOnlineToo",
    value: function () {
      var _imOnlineToo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(userId, io, id, otherUserSocketId) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", io.to(otherUserSocketId).emit('im-online-too', {
                  userId: userId,
                  socketId: id
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function imOnlineToo(_x5, _x6, _x7, _x8) {
        return _imOnlineToo.apply(this, arguments);
      }

      return imOnlineToo;
    }()
  }]);
  return AuthSocketController;
}(), ((0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "connection", [_dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "connection"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "logout", [_dec12, _dec13, _dec14, _dec15, _dec16], Object.getOwnPropertyDescriptor(_class2.prototype, "logout"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "imOnlineToo", [_dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23], Object.getOwnPropertyDescriptor(_class2.prototype, "imOnlineToo"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class);
exports.AuthSocketController = AuthSocketController;