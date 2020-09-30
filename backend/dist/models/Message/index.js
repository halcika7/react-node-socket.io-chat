"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _Message = require("./Message");

var messageSchema = new _mongoose.Schema({
  senderId: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  receiverId: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  message: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  },
  seen: {
    type: Boolean,
    required: true,
    "default": false
  },
  seenAt: {
    type: Date || undefined
  }
});

var _default = (0, _mongoose.model)('Message', messageSchema);

exports["default"] = _default;