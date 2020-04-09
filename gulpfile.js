/**
 * @Author: Colin Osterhout <ctosterhout>
 * @Date:   2020-02-18T11:27:30-09:00
 * @Email:  ctosterhout@alaska.edu
 * @Project: self-placement
 * @Last modified by:   ctosterhout
 * @Last modified time: 2020-04-08T18:02:17-08:00
 * @License: Released under MIT License. Copyright 2020 University of Alaska Southeast.  For more details, see https://opensource.org/licenses/MIT
 */

'use strict';

const gulp = require('gulp');
const path = require('path');
const sass = require('gulp-sass');
const gulpConfigGenerator = require('ernie-build').gulpConfigGenerator;
const pathCore = path.resolve(require.resolve('ernie-core'), '../../dev/xslt');
const configFtp = require(path.join(__dirname, 'private/ftp.json'));

// Contains a key/value mappings for replacing strings in the source XSLT files in the form of "@@key".
// These key/value mappings are broken up into 'dist' and 'dev' types. At the very least you'l need to define a mapping for 'ernie'
const replaceXslt = {
  dist: {
    "ernie-core": 'site://UAS/_assets/stylesheets/ernie-core',
    "self-placement": 'site://UAS/_assets/stylesheets/tidalechoes',
    imagebase: ''
  },
  dev: {
    "ernie-core": pathCore,
    "self-placement": 'dev/xslt',  // Unused for now, sample for this package template
    imagebase: '//uas.alaska.edu'
  },
  staging: {
    "ernie-core": 'site://UAS/_assets-staging/stylesheets/ernie-core',
    "self-placement": 'site://UAS/_assets-staging/stylesheets/tidalechoes',
    imagebase: ''
  }
};

// Where files should be outputted to
const pathsDest = {
  dev: './dev',
  dist: './dist',       // unused
  staging: './staging'  // unused
};

gulpConfigGenerator(gulp, {
  configFtp: configFtp,
  replaceXslt: replaceXslt,
  basePath: __dirname
});
