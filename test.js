'use strict';

require('mocha');
var assert = require('assert');
var re = require('./')();

function match(str) {
  var m = re.exec(str);
  return m;
}

it('should match dotfiles', function() {
  assert.equal(match('a/b/c/d/.git/')[1], '.git');
  assert.equal(match('a/.git/c/')[1], '.git');
  assert.equal(match('a/.git/')[1], '.git');
  assert.equal(match('.git/')[1], '.git');
  assert.equal(match('/.git/')[1], '.git');
});

it('should return false when the file is not a dot-directory', function() {
  assert.equal(!!match('a/b/c/d/e.js'), false);
  assert.equal(!!match('a/b.c.d/e.js'), false);
  assert.equal(!!match('a/b.js'), false);
  assert.equal(!!match('a/b/c/d/.git'), false);
  assert.equal(!!match('a/.git'), false);
  assert.equal(!!match('.git'), false);
  assert.equal(!!match('/.git'), false);
});

it('should return true when the file is a dot-directory', function() {
  assert.equal(!!match('a/.b/c/.git'), true);
  assert.equal(!!match('a/.b/c/a.js'), true);
  assert.equal(!!match('.git/foo'), true);
});
