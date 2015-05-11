var api = require('../lib/api');

/**
 * Tests the library find method, which calls client.get
 * -- find fails 50% of the time, randomly.
 */

function getTest() {
  return Math.floor(Math.random() * 10);
}

// Callback style
api.find({ type: 'callback', test: getTest() }, function(err, result) {
  if (err) {
    console.error('API Callback error!', err.message);
    return;
  }
  console.log('API Callback success!', result);
});

// Promise style
api.find({ type: 'promise', test: getTest() })
  .then(function(result) {
    console.log('API Promise success!', result);
  })
  .fail(function(err) {
    console.error('API Promise error!', err.message);
  });