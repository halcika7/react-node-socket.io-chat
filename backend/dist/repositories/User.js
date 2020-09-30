"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserRepository = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _User = _interopRequireDefault(require("../models/User"));

var _User2 = require("../models/User/User");

var _Base = require("./Base");

var _class2 = require("../utils/decorators/class");

var _genericTypes = require("../utils/genericTypes");

var _dec, _dec2, _dec3, _class;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var UserRepository = (_dec = (0, _class2.Injectable)(), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", []), _dec(_class = _dec2(_class = _dec3(_class = /*#__PURE__*/function (_BaseRepository) {
  (0, _inherits2["default"])(UserRepository, _BaseRepository);

  var _super = _createSuper(UserRepository);

  function UserRepository() {
    (0, _classCallCheck2["default"])(this, UserRepository);
    return _super.call(this);
  }

  (0, _createClass2["default"])(UserRepository, [{
    key: "createUser",
    value: function createUser(data) {
      return (0, _get2["default"])((0, _getPrototypeOf2["default"])(UserRepository.prototype), "createModelInstance", this).call(this, _User["default"], data);
    }
  }, {
    key: "findById",
    value: function () {
      var _findById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(id) {
        var user;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _User["default"].findById(id).select('_id name picture');

              case 2:
                user = _context.sent;
                return _context.abrupt("return", {
                  _id: user === null || user === void 0 ? void 0 : user.id,
                  name: user === null || user === void 0 ? void 0 : user.name,
                  picture: user === null || user === void 0 ? void 0 : user.picture
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function findById(_x) {
        return _findById.apply(this, arguments);
      }

      return findById;
    }()
  }, {
    key: "getAll",
    value: function () {
      var _getAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", _User["default"].find({
                  _id: {
                    $ne: id
                  }
                }, '_id name picture'));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getAll(_x2) {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
  }]);
  return UserRepository;
}(_Base.BaseRepository)) || _class) || _class) || _class);
exports.UserRepository = UserRepository;