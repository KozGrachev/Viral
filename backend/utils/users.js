"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = [];
// Join user to chat
function userJoin(id, username, room) {
    const user = {
        id,
        username,
        room
    };
    exports.users.push(user);
    return user;
}
exports.userJoin = userJoin;
// User leaves chat
function userLeave(id) {
    const index = exports.users.findIndex(user => user.id === id);
    if (index !== -1) {
        return exports.users.splice(index, 1)[0];
    }
}
exports.userLeave = userLeave;
