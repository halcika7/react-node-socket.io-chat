"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageRepository = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Message = _interopRequireDefault(require("../models/Message"));

var _Message2 = require("../models/Message/Message");

var _Base = require("./Base");

var _class2 = require("../utils/decorators/class");

var _genericTypes = require("../utils/genericTypes");

var _dec, _dec2, _dec3, _class;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var MessageRepository = (_dec = (0, _class2.Injectable)(), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", []), _dec(_class = _dec2(_class = _dec3(_class = /*#__PURE__*/function (_BaseRepository) {
  (0, _inherits2["default"])(MessageRepository, _BaseRepository);

  var _super = _createSuper(MessageRepository);

  function MessageRepository() {
    (0, _classCallCheck2["default"])(this, MessageRepository);
    return _super.call(this);
  }

  (0, _createClass2["default"])(MessageRepository, [{
    key: "createMessage",
    value: function createMessage(data) {
      return (0, _get2["default"])((0, _getPrototypeOf2["default"])(MessageRepository.prototype), "createModelInstance", this).call(this, _Message["default"], _objectSpread(_objectSpread({}, data), {}, {
        createdAt: new Date()
      }));
    }
  }, {
    key: "getMessages",
    value: function getMessages(currentUserId, otherUserId) {
      var skip = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var limit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;
      return _Message["default"].find({
        $or: [{
          senderId: currentUserId,
          receiverId: otherUserId
        }, {
          senderId: otherUserId,
          receiverId: currentUserId
        }]
      }, null, {
        skip: skip,
        limit: limit,
        sort: {
          createdAt: -1
        }
      }).populate('senderId', 'name picture _id');
    }
  }, {
    key: "populateMessage",
    value: function populateMessage(id) {
      return _Message["default"].findById(id).populate('senderId', 'name picture _id');
    }
  }]);
  return MessageRepository;
}(_Base.BaseRepository)) || _class) || _class) || _class);
exports.MessageRepository = MessageRepository;