/**
 * Extended API of our test library, which will use
 * the client.get method
 */

var client = require('./client');
var Q = require('q');

module.exports.find = function(options, callback) {
  if (options.test < 2.5) {
    // If an error must be handled in this file, return Q.reject
    // and do another .nodeify call to handle the callback for
    // this error case, basically the same as doing:
    // callback(error);
    // return Q.reject(error);
    return Q.reject(new Error('Random error event in api.find, ' + options.test + ' is less than 2.5')).nodeify(callback);
  }
  // This handles most of the cases by returning
  // the promise and passing the callback to be 
  // nodeified in our client file
  return client.get(options, callback);
};