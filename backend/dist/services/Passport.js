"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PassportService = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _passport = _interopRequireDefault(require("passport"));

var _passportGoogleOauth = require("passport-google-oauth20");

var _passportFacebook = require("passport-facebook");

var _passportTwitter = require("passport-twitter");

var _passportLinkedinOauth = require("passport-linkedin-oauth2");

var _passportGithub = require("passport-github2");

var _passportSpotify = require("passport-spotify");

var _index = require("../configs/index");

var _express = require("express");

var _User = _interopRequireDefault(require("../models/User"));

var _User2 = require("../models/User/User");

var _Cookie = require("./Cookie");

var _JWT = require("./JWT");

var _class3 = require("../utils/decorators/class");

var _dec, _class, _temp;

var PassportService = (_dec = (0, _class3.Injectable)(), _dec(_class = (_temp = /*#__PURE__*/function () {
  function PassportService() {
    (0, _classCallCheck2["default"])(this, PassportService);
    (0, _defineProperty2["default"])(this, "cookie", _Cookie.CookieService);
    (0, _defineProperty2["default"])(this, "jwt", _JWT.JWTService);
  }

  (0, _createClass2["default"])(PassportService, [{
    key: "socialCallback",
    value: function socialCallback(req, res, provider) {
      var _this = this;

      return _passport["default"].authenticate(provider, {
        session: false,
        failureRedirect: '/',
        successRedirect: '/'
      }, function (err, user, isNewUser) {
        return _this.passportCallback(err, user, res, isNewUser);
      })(req, res, provider);
    }
  }, {
    key: "passportCallback",
    value: function () {
      var _passportCallback = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(err, user, res) {
        var isNewUser,
            url,
            id,
            name,
            accessToken,
            _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                isNewUser = _args.length > 3 && _args[3] !== undefined ? _args[3] : false;
                url = _index.Configuration.appConfig.url;
                _context.prev = 2;
                id = user.id, name = user.name;

                if (!err) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", res.redirect("".concat(url, "/?err=").concat(err)));

              case 6:
                accessToken = this.jwt.signToken({
                  id: id,
                  name: name
                });
                this.cookie.setRefreshToken(res, this.jwt.signToken({
                  id: id,
                  name: name
                }, true));

                if (!isNewUser) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt("return", res.redirect("".concat(url, "/?token=").concat(accessToken, "&new=jidjasoifjoa")));

              case 10:
                return _context.abrupt("return", res.redirect("".concat(url, "/?token=").concat(accessToken)));

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](2);
                return _context.abrupt("return", res.redirect("".concat(url, "/?err=").concat(_context.t0)));

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 13]]);
      }));

      function passportCallback(_x, _x2, _x3) {
        return _passportCallback.apply(this, arguments);
      }

      return passportCallback;
    }()
  }], [{
    key: "passportStrategy",
    value: function () {
      var _passportStrategy = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(profile, done, socialType) {
        var email, user, _profile$name, _profile$name2, picture, newUser;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                email = profile.emails[0].value || '';

                if (email) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return", done('Email address is required'));

              case 4:
                _context2.next = 6;
                return _User["default"].findOne({
                  email: email
                });

              case 6:
                user = _context2.sent;

                if (user) {
                  _context2.next = 13;
                  break;
                }

                picture = profile.photos ? profile.photos[0].value : 'https://res.cloudinary.com/halcika/image/upload/v1601248708/blank-user-img.jpg';
                _context2.next = 11;
                return new _User["default"]({
                  name: profile.displayName || "".concat((_profile$name = profile.name) === null || _profile$name === void 0 ? void 0 : _profile$name.familyName, " ").concat((_profile$name2 = profile.name) === null || _profile$name2 === void 0 ? void 0 : _profile$name2.givenName),
                  email: email,
                  picture: picture,
                  subscription: {},
                  socialIds: (0, _defineProperty2["default"])({}, "".concat(socialType, "Id"), profile.id)
                }).save();

              case 11:
                newUser = _context2.sent;
                return _context2.abrupt("return", done(undefined, newUser, true));

              case 13:
                if (user.socialIds.get("".concat(socialType, "Id"))) {
                  _context2.next = 16;
                  break;
                }

                _context2.next = 16;
                return user.updateOne({
                  $set: (0, _defineProperty2["default"])({}, "socialIds.".concat(socialType, "Id"), profile.id)
                });

              case 16:
                return _context2.abrupt("return", done(undefined, user));

              case 19:
                _context2.prev = 19;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", done(_context2.t0.message, null));

              case 22:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 19]]);
      }));

      function passportStrategy(_x4, _x5, _x6) {
        return _passportStrategy.apply(this, arguments);
      }

      return passportStrategy;
    }()
  }]);
  return PassportService;
}(), _temp)) || _class);
exports.PassportService = PassportService;

_passport["default"].serializeUser(function (user, done) {
  return done(null, user._id);
});

_passport["default"].deserializeUser( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id, done) {
    var user;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _User["default"].findById(id);

          case 2:
            user = _context3.sent;
            return _context3.abrupt("return", done(null, user));

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x7, _x8) {
    return _ref.apply(this, arguments);
  };
}());

_passport["default"].use(new _passportGoogleOauth.Strategy({
  clientID: _index.Configuration.appConfig.social.googleID,
  clientSecret: _index.Configuration.appConfig.social.googleSecretID,
  callbackURL: _index.Configuration.appConfig.social.googleCallBack
}, function (_, __, profile, done) {
  return PassportService.passportStrategy(profile, done, 'google');
}));

_passport["default"].use(new _passportFacebook.Strategy({
  clientID: _index.Configuration.appConfig.social.facebookID,
  clientSecret: _index.Configuration.appConfig.social.facebookSecretID,
  callbackURL: _index.Configuration.appConfig.social.facebookCallBack,
  profileFields: ['id', 'email', 'name']
}, function (_, __, profile, done) {
  return PassportService.passportStrategy(profile, done, 'facebook');
}));

_passport["default"].use(new _passportTwitter.Strategy({
  consumerKey: _index.Configuration.appConfig.social.twitterID,
  consumerSecret: _index.Configuration.appConfig.social.twitterSecretID,
  callbackURL: _index.Configuration.appConfig.social.twitterCallBack,
  includeEmail: true,
  userProfileURL: 'https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true'
}, function (_, __, profile, done) {
  return PassportService.passportStrategy(profile, done, 'twitter');
}));

_passport["default"].use(new _passportLinkedinOauth.Strategy({
  clientID: _index.Configuration.appConfig.social.linkedinID,
  clientSecret: _index.Configuration.appConfig.social.linkedinSecretID,
  callbackURL: _index.Configuration.appConfig.social.linkedinCallBack,
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  scope: ['r_emailaddress', 'r_liteprofile']
}, function (_, __, profile, done) {
  return PassportService.passportStrategy(profile, done, 'linkedin');
}));

_passport["default"].use(new _passportGithub.Strategy({
  clientID: _index.Configuration.appConfig.social.githubID,
  clientSecret: _index.Configuration.appConfig.social.githubSecretID,
  callbackURL: _index.Configuration.appConfig.social.githubCallBack
}, function (_, __, profile, done) {
  return PassportService.passportStrategy(profile, done, 'github');
}));

_passport["default"].use(new _passportSpotify.Strategy({
  clientID: _index.Configuration.appConfig.social.spotifyID,
  clientSecret: _index.Configuration.appConfig.social.spotifySecretID,
  callbackURL: _index.Configuration.appConfig.social.spotifyCallBack
}, function (_, __, profile, done) {
  return PassportService.passportStrategy(profile, done, 'spotify');
}));

var _default = _passport["default"];
exports["default"] = _default;