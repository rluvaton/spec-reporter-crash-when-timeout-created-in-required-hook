const {spec: Spec} = require('node:test/reporters');
const {run} = require("node:test");

const stream = run({
    files: ['./index.test.js'],
    timeout: 5000,
})
    .compose(new Spec())
    .pipe(process.stdout);
