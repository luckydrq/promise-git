'use strict';

var util = require('util');
var assert = require('assert');

function Command(cmd) {
  assert(typeof cmd === 'string' && cmd.length > 0);
  this.cmd = cmd;
  this.options = [];
}

Command.prototype.option = function(opt) {
  assert(typeof opt === 'string');
  this.options.push(opt.trim());
  return this;
};

module.exports = Command;
