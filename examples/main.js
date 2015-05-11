var client = require('../lib/client');

/**
 * Tests the direct client.get method, with callbacks
 * and promises. Error case will randomly happen
 * about 25% of the time.
 */

// Callback style
client.get({ type: 'callback' }, function(err, result) {
  if (err) {
    console.error('Callback error!', err.message);
    return;
  }
  console.log('Callback success!', result);
});

// Promise style
client.get({ type: 'promise' })
  .then(function(result) {
    console.log('Promise success!', result);
  })
  .fail(function(err) {
    console.error('Promise error!', err.message);
  });