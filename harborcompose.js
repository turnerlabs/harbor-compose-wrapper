'use strict';

var path = require('path');
var util = require('util');
var BinWrapper = require('bin-wrapper');
var version = require('./package.json').version;

//use bin-wrapper to download the actual binary
var base = 'https://github.com/turnerlabs/harbor-compose/releases/download';
var binary = util.format('ncd_%s_amd64', process.platform);
if (process.platform === 'win32') binary += '.exe';
var bin = new BinWrapper({ skipCheck: true })
  .src(util.format('%s/v%s/%s', base, version, binary))
  .use(binary)
  .dest(path.join('node_modules/.bin'));

module.exports = bin;
