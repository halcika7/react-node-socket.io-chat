"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthService = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Base = require("../Base");

var _JWT = require("../JWT");

var _index = require("../../utils/types/index");

var _codes = require("../../utils/http/codes");

var _class3 = require("../../utils/decorators/class");

var _AuthServiceI = require("./AuthServiceI");

var _dec, _dec2, _dec3, _class, _temp;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var AuthService = (_dec = (0, _class3.Injectable)(), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", []), _dec(_class = _dec2(_class = _dec3(_class = (_temp = /*#__PURE__*/function (_BaseService) {
  (0, _inherits2["default"])(AuthService, _BaseService);

  var _super = _createSuper(AuthService);

  function AuthService() {
    var _this;

    (0, _classCallCheck2["default"])(this, AuthService);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "jwt", _JWT.JWTService);
    return _this;
  }

  (0, _createClass2["default"])(AuthService, [{
    key: "refreshToken",
    value: function () {
      var _refreshToken = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(token) {
        var _ref, id, role;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.jwt.verifyToken(token, true);

              case 2:
                _ref = _context.sent;
                id = _ref.id;
                role = _ref.role;
                return _context.abrupt("return", this.returnResponseTokens({
                  status: _codes.HTTPCodes.OK,
                  message: '',
                  accessToken: this.jwt.signToken({
                    id: id,
                    role: role
                  }),
                  refreshToken: this.jwt.signToken({
                    id: id,
                    role: role
                  }, true)
                }));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function refreshToken(_x) {
        return _refreshToken.apply(this, arguments);
      }

      return refreshToken;
    }()
  }]);
  return AuthService;
}(_Base.BaseService), _temp)) || _class) || _class) || _class);
exports.AuthService = AuthService;