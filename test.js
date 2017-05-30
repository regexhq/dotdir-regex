'use strict';

require('mocha');
var assert = require('assert');
var regex = require('./');

function test(str) {
  return regex().test(str);
}

describe('dotdir-regex', function() {
  describe('regular (non-dot) filepaths', function() {
    var notdotfile = [
      'a/b.c.d/e.js',
      'a/b.js',
      'a/b/c/d/e.js',
      './foo',
      '/../git',
    ].forEach(function(filepath) {
      it('should not match non-dotfiles: ' + filepath, function() {
        assert(!test(filepath));
      });
    });
  });

  describe('truthy', function() {
    var truthy = [
      '.git/foo',
      '.github/contributor.md',
      '.gitignore/foo',
      '.g.i.t.i.g.n.o.r.e/foo',
      'a/.b/c/a.js',
      'a/.b/c/a.js',
      'a/.b/c/.gitignore',
      'a/.git/c/a.js',
    ].forEach(function(filepath) {
      it('should be true: ' + filepath, function() {
        assert(test(filepath));
      });
    });
  });

  describe('falsey', function() {
    var falsey = [
      '.editorconfig',
      '.git',
      '.gitignore',
      '.travis.yml',
      '/.git',
      '/.gitignore',
      'a/.gitignore',
      'a/b.c.d/e.js/.git',
      'a/b/c/d/.gitignore',
    ].forEach(function(filepath) {
      it('should be false: ' + filepath, function() {
        assert(!test(filepath));
      });
    });
  });

  describe('match groups', function() {
    it('should match dotfiles', function() {
      assert.equal(regex().exec('a/.git/b')[0], '/.git/');
      assert.equal(regex().exec('a/.git/b')[1], '.git');
      assert.equal(regex().exec('a/.git/b/.gitignore')[1], '.git');
      assert.equal(regex().exec('.git/')[1], '.git');
      assert.equal(regex().exec('/.git/')[1], '.git');
    });
  });
});
