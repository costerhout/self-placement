/**
 * @Author: Colin Osterhout <ctosterhout>
 * @Date:   2020-02-18T11:34:15-09:00
 * @Email:  ctosterhout@alaska.edu
 * @Project: self-placement
 * @Last modified by:   ctosterhout
 * @Last modified time: 2020-04-09T07:30:29-08:00
 * @License: Released under MIT License. Copyright 2020 University of Alaska Southeast.  For more details, see https://opensource.org/licenses/MIT
 */

'use strict'

const path = require('path');
const _ = require('lodash');
const loadParameters = require('ernie-build').fnLoadParameters(path.join(__dirname, 'dev/template-parameters'));
const vueDefaultConfig = require('ernie-build').vueConfigGenerator(__dirname);
const templateParameterDefaults = require('ernie/packages/common/config/template-parameter-defaults');
const bodySelfPlacement = `
<script id="componentSelfPlacement" type="text/x-template">
    <SelfPlacement />
  </script>
  <div data-template="componentSelfPlacement"></div>
`

const pages = {
  "self-placement-interior": {
    entry: 'js/interior.js',
    template: 'node_modules/ernie/packages/common/html/interior.html',
    filename: 'interior.html',
    open: true,
    templateParameters: {
      displayName: 'Directed Self Placement',
      body: bodySelfPlacement,
      ...templateParameterDefaults
    }
  }
};

module.exports = _.merge(vueDefaultConfig, {
  pages: pages
});
