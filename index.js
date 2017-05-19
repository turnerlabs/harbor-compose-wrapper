#!/usr/bin/env node
'use strict';

var bin = require('./harborcompose.js');

//run the search for the binary, downloading it if not exists
//note that this gets run on-demand when the command is executed
bin.run(function(err) {
  if (err) throw err;

  //we got it, now spawn it
  var harborcompose = bin.path();
  var spawn = require('child_process').spawn;
  var input = process.argv.slice(2);
  spawn(harborcompose, input, { stdio: 'inherit' })
});
