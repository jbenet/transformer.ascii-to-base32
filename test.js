#!/usr/bin/env node
var tTest = require('transformer-test');
var conv = require('./');

// run stock conversion tests, and try expected input/output pairs
var test = tTest.conversion(conv, [
  ['beep boop', 'c9jpaw10c9qpyw0']
])
