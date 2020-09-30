"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.socketM = void 0;

var _socket = require("socket.io");

var socketM = function socketM(io, socket, next) {
  try {
    next();
  } catch (error) {
    io.to(socket.id).emit('err', error.message);
  }
};

exports.socketM = socketM;