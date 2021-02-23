"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLeave = exports.userJoin = exports.users = void 0;
var redis_db_1 = require("../redis/redis-db");
exports.users = [];
// Join user to chat
function userJoin(id, name, room) {
    var existingUsers = redis_db_1.getUsers().then(function (data) {
        exports.users = data;
        var user = {
            id: id,
            name: name,
            room: room,
        };
        exports.users && exports.users.push(user);
        exports.users && redis_db_1.setUser('users', exports.users);
        return user;
    });
    return existingUsers;
}
exports.userJoin = userJoin;
function userLeave(id) {
    return redis_db_1.getUsers().then(function (data) {
        exports.users = data;
        var index = exports.users && exports.users.findIndex(function (user) { return user.id === id; });
        if (index && exports.users) {
            var user = exports.users[index];
            exports.users && exports.users.splice(index, 1);
            exports.users && redis_db_1.setUser('users', exports.users);
            return user;
        }
    });
}
exports.userLeave = userLeave;
