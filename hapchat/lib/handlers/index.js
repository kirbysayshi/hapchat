// Load modules

module.exports = {};

module.exports.home = function (request, reply) {

    reply.view('index');
};

module.exports.photo = function (request, reply) {

    reply.view('upload');
};

module.exports.feed = function (request, reply) {

    reply.view('feed');
};

module.exports.login = function (request, reply) {

    reply.view('login');
};

module.exports.upload = require('./upload');
