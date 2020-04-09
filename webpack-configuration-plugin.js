/**
 * @Author: Colin Osterhout <ctosterhout>
 * @Date:   2020-01-30T10:17:01-09:00
 * @Email:  ctosterhout@alaska.edu
 * @Project: self-placement
 * @Last modified by:   ctosterhout
 * @Last modified time: 2020-04-08T18:01:26-08:00
 * @License: Released under MIT License. Copyright 2020 University of Alaska Southeast.  For more details, see https://opensource.org/licenses/MIT
 */

// Reexport the ernie-build webpackConfigurationPlugin
const path = require('path');

module.exports = require('ernie-build').webpackConfigurationPlugin(path.join(__dirname, '../..'))
