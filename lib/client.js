/**
 * Main client of the test library, uses the
 * node-callback request mock
 */

var Q = require('q');
// denodeify makes request return promises
var http = Q.denodeify(require('./requestMock'));

function makeRequest(options, callback) {
  // Call our mock and return the promise, but
  // at the end of the promise chain, use .nodeify
  // to auto-handle the callback according to 
  // the promise success/failure
  return http(options).nodeify(callback);
}

module.exports.get = function(options, callback) {
  options.method = 'GET';
  // return here and everything is taken care of
  return makeRequest(options, callback);
};
