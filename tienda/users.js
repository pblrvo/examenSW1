const bcrypt = require("bcrypt");

const users = {};

users.comparePass = function(pass, hash, callback){
    bcrypt.compare(pass, hash, callback);
}

users.generateHash = function(pass, callback){
    bcrypt.hash(pass, 10, callback);
}

users.register = function(username, pass, callback){
    users.generateHash(pass, function(err, hash){
        users[username] = {username, hash};
        if (callback) {
            callback();
        };
    });
}

users.register('admin', 'admin', function(){
    console.log('User admin successfully registered');
});
users.register('user', 'user');


users.saveCookies = function (username, cookies) {
    console.log('cookies en aceptarCookies:', cookies);
    if (!users.hasOwnProperty(username)) {
        throw new Error(`No existe el usuario ${username}.`);
    }
    users[username].cookies = cookies;
}

users.getCookies = function (username) {
    if (!users.hasOwnProperty(username)) {
        throw new Error(`No existe el usuario ${username}.`);
    }
    return users[username].cookies;
}

module.exports = users;