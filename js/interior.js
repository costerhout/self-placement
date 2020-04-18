/**
 * @Author: Colin Osterhout <ctosterhout>
 * @Date:   2020-04-05T17:47:04-08:00
 * @Email:  ctosterhout@alaska.edu
 * @Project: self-placement
 * @Last modified by:   ctosterhout
 * @Last modified time: 2020-04-17T17:39:22-08:00
 * @License: Released under MIT License. Copyright 2020 University of Alaska Southeast.  For more details, see https://opensource.org/licenses/MIT
 */

// ----------------------------------------------------------------------------
// Import common functionality
// ----------------------------------------------------------------------------
import { ErnieCommon, Vue } from 'ernie/packages/common'

// ----------------------------------------------------------------------------
// JS Module imports
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// Components particular to this template
// ----------------------------------------------------------------------------
import SelfPlacement from '../components/SelfPlacement'

// ----------------------------------------------------------------------------
// SCSS
// ----------------------------------------------------------------------------
import '../scss/interior.scss'

const components = {
  SelfPlacement
}

// Initialize Ernie and then render all templates, passing in our own page-specific components.
Vue.use(ErnieCommon, {
  components: components
})

// Begin page render
ErnieCommon.render({
  disableScrollDown: true
})
