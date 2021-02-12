"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLeave = exports.userJoin = exports.users = void 0;
var redis_db_1 = require("../redis/redis-db");
exports.users = [];
// Join user to chat
function userJoin(id, name, room) {
    redis_db_1.getUsers().then(function (data) { return exports.users = data; });
    var user = {
        id: id,
        name: name,
        room: room,
    };
    exports.users === null || exports.users === void 0 ? void 0 : exports.users.push(user);
    console.log(exports.users, 'users');
    redis_db_1.setUser('users', exports.users);
    return user;
}
exports.userJoin = userJoin;
// User leaves chat
function userLeave(id) {
    redis_db_1.getUsers().then(function (data) { return exports.users = data; });
    var index = exports.users === null || exports.users === void 0 ? void 0 : exports.users.findIndex(function (user) { return user.id === id; });
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (index && exports.users) {
        var user = exports.users[index];
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        console.log(exports.users, 'users');
        exports.users === null || exports.users === void 0 ? void 0 : exports.users.splice(index, 1);
        redis_db_1.setUser('users', exports.users);
        return user;
    }
}
exports.userLeave = userLeave;
