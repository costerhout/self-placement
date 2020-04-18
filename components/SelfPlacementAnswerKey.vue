<!--
@Author: Colin Osterhout <ctosterhout>
@Date:   2020-04-17T15:14:33-08:00
@Email:  ctosterhout@alaska.edu
@Project: ernie
@Last modified by:   ctosterhout
@Last modified time: 2020-04-17T16:22:35-08:00
@License: Released under MIT License. Copyright 2020 University of Alaska Southeast.  For more details, see https://opensource.org/licenses/MIT
-->

<template>
<div class="self-placement-answer">
  <div class="alert alert-secondary"
       v-html="answer.text"></div>
  <WritingCourseDescriptions :answerId="answer.id" class="my-5"/>
</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>

<script>
import _ from 'lodash'
import WritingCourseDescriptions from './WritingCourseDescriptions'

export default {
  name: 'SelfPlacementAnswerKey',
  props: {
    answerKey: {
      type: Array,
      required: true
    },
    score: {
      type: Number,
      required: true
    }
  },
  computed: {
    answer: function () {
      // Sort the answers by their cutoff, then find the last one for which the score is >= than the cutoff
      const answersSorted = _.sortBy(this.answerKey, ['cutoff'])
      return _.findLast(answersSorted, answer => this.score >= answer.cutoff)
    }
  },
  components: {
    WritingCourseDescriptions
  }
}
</script>
