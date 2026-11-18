const test = require('node:test');
const assert = require('node:assert');
const { capitalize, reverse, isPalindrome } = require('../src/string');

test('capitalize', () => assert.strictEqual(capitalize('hello'), 'Hello'));
test('capitalize empty string', () => assert.strictEqual(capitalize(''), ''));
test('reverse', () => assert.strictEqual(reverse('abc'), 'cba'));
test('isPalindrome true', () => assert.ok(isPalindrome('Race car')));
test('isPalindrome false', () => assert.ok(!isPalindrome('hello')));
