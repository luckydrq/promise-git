'use strict';

var exec = require('promise-exec');
var Command = require('../command_base');

module.exports = function() {
  if (!(this instanceof Command)) return new Command('git remote show');
};
