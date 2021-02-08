'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.userLeave = exports.userJoin = exports.users = void 0;
exports.users = [];
// Join user to chat
function userJoin (id, name, room) {
  var user = {
    id: id,
    name: name,
    room: room,
  };
  exports.users.push(user);
  return user;
}
exports.userJoin = userJoin;
// User leaves chat
function userLeave (id) {
  var index = exports.users.findIndex(function (user) { return user.id === id; });
  if (index !== -1) {
    return exports.users.splice(index, 1)[0];
  }
}
exports.userLeave = userLeave;
