"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _badGateway = require("./bad-gateway.exception");

Object.keys(_badGateway).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _badGateway[key];
    }
  });
});

var _badRequest = require("./bad-request.exception");

Object.keys(_badRequest).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _badRequest[key];
    }
  });
});

var _conflict = require("./conflict.exception");

Object.keys(_conflict).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _conflict[key];
    }
  });
});

var _forbiden = require("./forbiden.exception");

Object.keys(_forbiden).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _forbiden[key];
    }
  });
});

var _gatewayTimeout = require("./gateway-timeout.exception");

Object.keys(_gatewayTimeout).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _gatewayTimeout[key];
    }
  });
});

var _gone = require("./gone.exception");

Object.keys(_gone).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _gone[key];
    }
  });
});

var _httpVersionNotSupported = require("./http-version-not-supported");

Object.keys(_httpVersionNotSupported).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _httpVersionNotSupported[key];
    }
  });
});

var _imATeapot = require("./im-a-teapot.exception");

Object.keys(_imATeapot).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _imATeapot[key];
    }
  });
});

var _internalServerError = require("./internal-server-error.exception");

Object.keys(_internalServerError).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _internalServerError[key];
    }
  });
});

var _methodNotAllowed = require("./method-not-allowed.exception");

Object.keys(_methodNotAllowed).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _methodNotAllowed[key];
    }
  });
});

var _notAcceptable = require("./not-acceptable.exception");

Object.keys(_notAcceptable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _notAcceptable[key];
    }
  });
});

var _notFound = require("./not-found.exception");

Object.keys(_notFound).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _notFound[key];
    }
  });
});

var _notImplemented = require("./not-implemented.exception");

Object.keys(_notImplemented).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _notImplemented[key];
    }
  });
});

var _payloadTooLarge = require("./payload-too-large.exception");

Object.keys(_payloadTooLarge).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _payloadTooLarge[key];
    }
  });
});

var _requestTimeout = require("./request-timeout.exception");

Object.keys(_requestTimeout).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _requestTimeout[key];
    }
  });
});

var _serviceUnavailable = require("./service-unavailable.exception");

Object.keys(_serviceUnavailable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _serviceUnavailable[key];
    }
  });
});

var _unauthorized = require("./unauthorized.exception");

Object.keys(_unauthorized).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _unauthorized[key];
    }
  });
});

var _unprocessableEntity = require("./unprocessable-entity.exception");

Object.keys(_unprocessableEntity).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _unprocessableEntity[key];
    }
  });
});

var _unsupportedMediaType = require("./unsupported-media-type.exception");

Object.keys(_unsupportedMediaType).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _unsupportedMediaType[key];
    }
  });
});

var _requestUriTooLong = require("./request-uri-too-long.exception");

Object.keys(_requestUriTooLong).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _requestUriTooLong[key];
    }
  });
});

var _tooManyRequests = require("./too-many-requests.exception");

Object.keys(_tooManyRequests).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tooManyRequests[key];
    }
  });
});

var _custom = require("./custom.exception");

Object.keys(_custom).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _custom[key];
    }
  });
});

var _http = require("./http.exception");

Object.keys(_http).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _http[key];
    }
  });
});