<!--
@Author: Colin Osterhout <ctosterhout>
@Date:   2020-04-08T19:11:56-08:00
@Email:  ctosterhout@alaska.edu
@Project: ernie
@Last modified by:   ctosterhout
@Last modified time: 2020-04-09T11:11:14-08:00
@License: Released under MIT License. Copyright 2020 University of Alaska Southeast.  For more details, see https://opensource.org/licenses/MIT
-->

<template>
<div class="self-placement">
  <transition-group name="screens"
                    tag="div"
                    :duration="animationDuration"
                    enter-active-class="animated fadeIn"
                    leave-active-class="d-none"
                    mode="out-in">
    <div class="self-placement-screen"
         v-for="screen in screens"
         v-show="screen.id === currentScreen.id"
         :key="screen.id">
      <div class="screen-question"
        v-if="screen.type === 'question'">
        <b-form-group :label="screen.title"
                      label-size="lg"
                      class="form-section">
          <p class="question-text"><span class="question-id">{{ screen.id }}</span>: {{ screen.text }}</p>
          <b-form-radio-group :options="screen.answers"
                              v-model="answers[screen.id]"
                              stacked></b-form-radio-group>
        </b-form-group>
      </div>
      <div v-else class="screen-answer">
        {{ score }}
      </div>
      <div class="screen-navigation d-flex flex-row justify-content-beginning">
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
        <button v-if="history.length > 1"
                @click="reset()"
                class="btn btn-outline-secondary btn-circle mx-1 border-0"><span class="sr-only">Reset</span>
          <Icon name="undo-alt"
                scale="1.35" /></button>
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
    border: $card-border-width solid $card-border-color;
    @include border-radius($card-border-radius);

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

<script>
import fnIdgen from 'ernie-core/js/idgen'
import questions from '../js/part1-questions'
import _ from 'lodash'
import Icon from 'vue-awesome/components/Icon'
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
    }
  },
  data: function () {
    return {
      screens: this.buildScreens(questions),
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
    }
  },
  methods: {
    idgen: fnIdgen(),
    buildScreens: function (questions) {
      return _.flatten([
        _.map(questions, question => ({
          ...question,
          type: 'question'
        })),
        {
          id: this.idgen('answer-screen'),
          type: 'answer'
        }
      ])
    },
    selectChoice: function (id) {
      this.history.push(id)
    },
    goBack: function () {
      this.history.pop()
    },
    goNext: function () {
      const indexCurrentScreen = _.findIndex(this.screens, screen => screen.id === this.currentScreen.id)
      const indexNextScreen = indexCurrentScreen+1

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
    Icon
  }
}
</script>
