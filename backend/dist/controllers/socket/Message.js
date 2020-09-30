"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageController = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _class3 = require("../../utils/decorators/class");

var _Message = require("../../repositories/Message");

var _index = require("../../utils/socket-inversify/index");

var _socket = require("../../middlewares/socket");

var _socket2 = require("socket.io");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _class, _class2;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var MessageController = (_dec = (0, _class3.Injectable)(), _dec2 = (0, _index.SocketController)(''), _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _Message.MessageRepository === "undefined" ? Object : _Message.MessageRepository]), _dec5 = (0, _index.OnMessage)('get-messages'), _dec6 = function _dec6(target, key) {
  return (0, _index.Payload)()(target, key, 0);
}, _dec7 = function _dec7(target, key) {
  return (0, _index.SocketIO)()(target, key, 1);
}, _dec8 = function _dec8(target, key) {
  return (0, _index.SocketID)()(target, key, 2);
}, _dec9 = function _dec9(target, key) {
  return (0, _index.SocketQueryParam)('id')(target, key, 3);
}, _dec10 = Reflect.metadata("design:type", Function), _dec11 = Reflect.metadata("design:paramtypes", [String, typeof _socket2.Server === "undefined" ? Object : _socket2.Server, String, String]), _dec12 = (0, _index.OnMessage)('send-message', _socket.socketM), _dec13 = function _dec13(target, key) {
  return (0, _index.Payload)()(target, key, 0);
}, _dec14 = function _dec14(target, key) {
  return (0, _index.SocketIO)()(target, key, 1);
}, _dec15 = function _dec15(target, key) {
  return (0, _index.SocketQueryParam)('id')(target, key, 2);
}, _dec16 = function _dec16(target, key) {
  return (0, _index.ConnectedSocket)()(target, key, 3);
}, _dec17 = Reflect.metadata("design:type", Function), _dec18 = Reflect.metadata("design:paramtypes", [typeof PostBodyMessage === "undefined" ? Object : PostBodyMessage, typeof _socket2.Server === "undefined" ? Object : _socket2.Server, String, typeof _socket2.Socket === "undefined" ? Object : _socket2.Socket]), _dec19 = (0, _index.OnMessage)('user-typing'), _dec20 = function _dec20(target, key) {
  return (0, _index.SocketIO)()(target, key, 1);
}, _dec21 = function _dec21(target, key) {
  return (0, _index.SocketQueryParam)('id')(target, key, 2);
}, _dec22 = Reflect.metadata("design:type", Function), _dec23 = Reflect.metadata("design:paramtypes", [void 0, typeof _socket2.Server === "undefined" ? Object : _socket2.Server, String]), _dec24 = (0, _index.OnMessage)('load-more'), _dec25 = function _dec25(target, key) {
  return (0, _index.SocketIO)()(target, key, 0);
}, _dec26 = function _dec26(target, key) {
  return (0, _index.SocketID)()(target, key, 1);
}, _dec27 = function _dec27(target, key) {
  return (0, _index.SocketQueryParam)('id')(target, key, 2);
}, _dec28 = Reflect.metadata("design:type", Function), _dec29 = Reflect.metadata("design:paramtypes", [typeof _socket2.Server === "undefined" ? Object : _socket2.Server, String, String, void 0]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = /*#__PURE__*/function () {
  function MessageController(messageRepository) {
    (0, _classCallCheck2["default"])(this, MessageController);
    this.messageRepository = messageRepository;
  }

  (0, _createClass2["default"])(MessageController, [{
    key: "messages",
    value: function () {
      var _messages = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(otherUserId, io, id, userId) {
        var messages;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.messageRepository.getMessages(userId, otherUserId);

              case 2:
                messages = _context.sent;
                return _context.abrupt("return", io.to(id).emit('messages', messages));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function messages(_x, _x2, _x3, _x4) {
        return _messages.apply(this, arguments);
      }

      return messages;
    }()
  }, {
    key: "message",
    value: function () {
      var _message = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body, io, senderId, socket) {
        var socketId, postData, m, message;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                socketId = String(body.socketId);
                postData = _objectSpread(_objectSpread({}, body), {}, {
                  senderId: senderId,
                  seen: !!body.socketId,
                  seenAt: body.socketId ? new Date() : undefined
                });
                delete postData.socketId;
                _context2.next = 5;
                return this.messageRepository.createMessage(postData).save();

              case 5:
                m = _context2.sent;
                _context2.next = 8;
                return this.messageRepository.populateMessage(m._id);

              case 8:
                message = _context2.sent;

                if (socketId) {
                  io.to(socketId).emit('receive-message', message);
                }

                return _context2.abrupt("return", socket.emit('receive-message', message));

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function message(_x5, _x6, _x7, _x8) {
        return _message.apply(this, arguments);
      }

      return message;
    }()
  }, {
    key: "typing",
    value: function typing(_ref, io, senderId) {
      var _typing = _ref.typing,
          socketId = _ref.socketId;
      return io.to(socketId).emit('is-typing', {
        typing: _typing,
        senderId: senderId
      });
    }
  }, {
    key: "loadMore",
    value: function () {
      var _loadMore = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(io, id, senderId, _ref2) {
        var skip, userId, messages;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                skip = _ref2.skip, userId = _ref2.userId;
                _context3.next = 3;
                return this.messageRepository.getMessages(senderId, userId, skip);

              case 3:
                messages = _context3.sent;
                return _context3.abrupt("return", io.to(id).emit('loaded-more', messages));

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function loadMore(_x9, _x10, _x11, _x12) {
        return _loadMore.apply(this, arguments);
      }

      return loadMore;
    }()
  }]);
  (0, _index.Payload)()(MessageController.prototype, "loadMore", 3);
  (0, _index.Payload)()(MessageController.prototype, "typing", 0);
  return MessageController;
}(), ((0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "messages", [_dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "messages"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "message", [_dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18], Object.getOwnPropertyDescriptor(_class2.prototype, "message"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "typing", [_dec19, _dec20, _dec21, _dec22, _dec23], Object.getOwnPropertyDescriptor(_class2.prototype, "typing"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "loadMore", [_dec24, _dec25, _dec26, _dec27, _dec28, _dec29], Object.getOwnPropertyDescriptor(_class2.prototype, "loadMore"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class);
exports.MessageController = MessageController;