"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _User = require("./User");

var userSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: true,
    "default": ''
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  subscription: {
    type: Object
  },
  socialIds: {
    type: Map,
    of: String,
    unique: false
  }
});

var _default = (0, _mongoose.model)('User', userSchema);

exports["default"] = _default;