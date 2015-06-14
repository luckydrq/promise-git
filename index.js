'use strict';

var exec = require('promise-exec');

exports.exec = function(cmd) {
  var argv = cmd.split(' ');
  if (argv[0] !== 'git') {
    argv.unshift('git');
  }
  return exec(argv.join(' '));
};

module.exports = {
  remote: require('./lib/remote')
};
