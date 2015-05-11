/**
 * Mock of a node-style callback library like request
 *
 * Fails 25% of the time to demo error cases
 */

module.exports = function(options, callback) {
  options.timeout = Math.floor(Math.random() * 3000);
  setTimeout(function() {
    var test = Math.random();
    if (test < 0.25) {
      callback(new Error('Random error event in request mock, ' + test + ' less than 0.25'));
      return;
    }
    callback(null, options);
  }, options.timeout);
};