var Q = require('q');
var http = Q.denodeify(require('./requestMock'));

function request(options, callback) {
  return http(options).nodeify(callback);
}

module.exports.get = function(options, callback) {
  options.method = 'GET';
  return request(options, callback);
};
