Running:

```shell
$ npm test

> spec-reporter-crash-when-timeout-created-in-required-hook@1.0.0 test
> node --require ./setup.js ./run-tests.js

✔ should get a (0.88675ms)
node:internal/test_runner/harness:40
      throw err;
      ^

TypeError [ERR_INVALID_ARG_TYPE]: The "to" argument must be of type string. Received undefined
    at new NodeError (node:internal/errors:405:5)
    at validateString (node:internal/validators:162:11)
    at relative (node:path:1195:5)
    at SpecReporter._flush (node:internal/test_runner/reporter/spec:148:23)
    at SpecReporter.final [as _final] (node:internal/streams/transform:132:10)
    at callFinal (node:internal/streams/writable:707:12)
    at prefinish (node:internal/streams/writable:719:7)
    at finishMaybe (node:internal/streams/writable:729:5)
    at Writable.end (node:internal/streams/writable:641:5)
    at TestsStream.endFn (node:internal/streams/pipeline:430:11)
Emitted 'error' event on Readable instance at:
    at emitErrorNT (node:internal/streams/destroy:151:8)
    at emitErrorCloseNT (node:internal/streams/destroy:116:3)
    at process.processTicksAndRejections (node:internal/process/task_queues:82:21) {
  code: 'ERR_INVALID_ARG_TYPE'
}

Node.js v20.7.0
```
