/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var app = new EmberApp();
var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');

var bootstrapFonts = pickFiles('bower_components/bootstrap-sass-official/assets/fonts/bootstrap', {
  srcDir: '/',
  destDir: '/assets/bootstrap'
});
var icons = pickFiles('bower_components/flag-icon-css/flags', {
  srcDir: '/',
  destDir: '/flags'
});

module.exports = mergeTrees([app.toTree(), bootstrapFonts, icons]);
