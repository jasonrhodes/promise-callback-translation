# promise-callback-translation

Test library to figure out how to best translate a callback API so that it can return promises when you don't pass a callback. Uses q nodeify/denodeify but you can probably swap in Bluebird, etc. too

### To test

Run each of the examples in the examples folder with just

```
$ node examples/main
$ node examples/api
```

Each run will output results from a callback test and a promise test, and will produce different success/error combinations, randomly.