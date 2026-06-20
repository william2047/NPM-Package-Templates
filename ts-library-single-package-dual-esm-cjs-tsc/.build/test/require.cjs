const assert = require('node:assert/strict');
const { greet } = require('package-name');

assert.equal(greet('CommonJS'), 'Hello, CommonJS!');
