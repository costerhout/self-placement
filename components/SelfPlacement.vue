<!--
@Author: Colin Osterhout <ctosterhout>
@Date:   2020-04-08T19:11:56-08:00
@Email:  ctosterhout@alaska.edu
@Project: ernie
@Last modified by:   ctosterhout
@Last modified time: 2020-04-21T08:59:05-08:00
@License: Released under MIT License. Copyright 2020 University of Alaska Southeast.  For more details, see https://opensource.org/licenses/MIT
-->

<template>
<div class="self-placement" ref="selfPlacement">
  <transition-group name="screens"
                    tag="div"
                    :duration="animationDuration"
                    enter-active-class="animated fadeIn"
                    leave-active-class="d-none"
                    mode="out-in">
    <div class="self-placement-screen card"
         :style="`min-height: ${minHeight}px`"
         v-for="screen in screens"
         v-show="screen.id === currentScreen.id"
         :key="screen.id">
      <div v-if="screen.type !== 'answer'"
           class="progress rounded-0">
        <div class="progress-bar"
             role="progressbar"
             :aria-valuenow="progressPercent"
             aria-valuemin="0"
             aria-valuemax="100"
             :style="`width: ${progressPercent}%`"></div>
      </div>
      <div class="card-body d-flex flex-column justify-content-between">
        <div class="screen-question"
             v-if="screen.type === 'question'">
          <b-form-group :label="screen.title"
                        label-size="lg"
                        class="form-section">
            <h3 class="question-text"><span class="question-id">{{ screen.id }}</span>: {{ screen.text }}</h3>
            <b-form-radio-group :options="screen.answers"
                                v-model="answers[screen.id]"
                                stacked></b-form-radio-group>
          </b-form-group>
        </div>
        <div class="screen-information"
             v-if="screen.type === 'information'">
          <h2 class="card-title">{{ screen.title }}</h2>
          <div v-if="screen.text"
               v-html="screen.text"></div>
        </div>
        <div v-if="screen.type === 'answer'"
             class="screen-answer">
          <h2 class="card-title">{{ screen.title }}</h2>
          <SelfPlacementAnswerKey :score="score"
                                  :answer-key="screen.answerKey">
          </SelfPlacementAnswerKey>
          <div v-html="screen.text"></div>
        </div>
        <div class="screen-navigation d-flex flex-row justify-content-center">
          <div class="screen-navigation-next-back mx-5">
            <button v-if="currentScreen.id !== idInit"
                    @click="goBack()"
                    class="btn btn-secondary btn-circle mx-1"><span class="sr-only">Go Back to Previous Question</span>
              <Icon name="chevron-left"
                    scale="1.35" /></button>
            <button v-if="currentScreen.type !== 'answer'"
                    @click="goNext()"
                    class="btn btn-secondary btn-circle mx-1"><span class="sr-only">Go Back to Previous Question</span>
              <Icon name="chevron-right"
                    scale="1.35" /></button>
          </div>
          <button v-if="history.length > 1"
                  @click="reset()"
                  class="btn btn-outline-secondary mx-1">Restart</button>
        </div>
      </div>
    </div>
  </transition-group>
</div>
</template>

<style lang="scss" scoped>
@import '~ernie-theme/scss/modules/bootstrap-extend';
@import '~ernie-theme/scss/modules/palette';
@import '~ernie-theme/scss/modules/variables';
@import '~animate.css/animate.css';

// Incorporate the card formatting taken from Bootstrap's source rather than @extending as the semantics don't line up well
.form-section {
    padding: $card-spacer-x;
}

.self-placement-section {
    margin-top: 2rem;
}

.self-placement-section:not(:last-of-type) {
    margin-bottom: 3rem;
}

.custom-radio {
    margin: 1rem 0;
}

.screen-navigation {
    margin-top: auto;
}


@include media-breakpoint-up(lg) {}
</style>

<style lang="scss">
.screen-question .custom-control-label {
    margin: 0.5rem 0;
}
</style>

<script>
import fnIdgen from 'ernie-core/js/idgen'
import performSmoothScroll from 'ernie-core/js/perform-smooth-scroll'
import screens from '../js/screens'
import _ from 'lodash'
import Icon from 'vue-awesome/components/Icon'
import SelfPlacementAnswerKey from './SelfPlacementAnswerKey'
import 'vue-awesome/icons/chevron-left'
import 'vue-awesome/icons/chevron-right'
import 'vue-awesome/icons/undo-alt'

export default {
  name: 'SelfPlacement',
  props: {
    animationDuration: {
      type: Number,
      required: false,
      default: 500
    },
    minHeight: {
      type: String,
      required: false,
      default: '500'
    }
  },
  data: function () {
    return {
      screens: screens,
      idInit: undefined,
      history: [],
      answers: {}
    }
  },
  created: function () {
    // Determine the initial screen: either the first one where "initial" is set to true or the first screen
    this.idInit = this.screens[0].id

    this.selectChoice(this.idInit)
  },
  computed: {
    currentScreen: function () {
      const idCurrent = this.history.length > 1 ?
        this.history[this.history.length - 1] :
        this.idInit

      return _.find(this.screens, {
        id: idCurrent
      })
    },
    score: function () {
      // Iterate through the values of all the answers and add up all the values
      // Since the initial result will be undefined, return a 0 in that instance
      return _.reduce(_.values(this.answers), (sum, value) => sum + value) || 0
    },
    progressPercent: function () {
      return _.floor((this.indexCurrentScreen + 1) * 100 / this.screens.length)
    },
    indexCurrentScreen: function () {
      return _.findIndex(this.screens, screen => screen.id === this.currentScreen.id)
    }
  },
  methods: {
    idgen: fnIdgen(),
    selectChoice: function (id) {
      this.history.push(id)

      // Scroll up to the top of the display
      if (!_.isUndefined(this.$refs.selfPlacement)) {
        performSmoothScroll(this.$refs.selfPlacement)
      }
    },
    goBack: function () {
      this.history.pop()
    },
    goNext: function () {
      const indexNextScreen = this.indexCurrentScreen + 1

      if (indexNextScreen !== this.screens.length) {
        this.selectChoice(this.screens[indexNextScreen].id)
      }
    },
    reset: function () {
      this.history = []
      _.each(_.keys(this.answers), key => {
        _.unset(this.answers, key)
      })
      this.selectChoice(this.idInit)
    }
  },
  components: {
    Icon,
    SelfPlacementAnswerKey
  }
}
</script>
