var client = require('./client');
var Q = require('q');

module.exports.find = function(options, callback) {
  if (options.test < 2.5) {
    return Q.reject(new Error('Random error event in api.find, ' + options.test + ' is less than 2.5')).nodeify(callback);
  }
  return client.get(options, callback);
};