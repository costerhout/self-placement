<template>
<div class="writing-course-descriptions">
  <h3 class="text-center">Typical Tasks Required</h3>

  <div class="card-group">
    <div class="card" :class="classActive('wrtg-090')">
      <div class="card-header">
        <h4 class="text-center">WRTG 090</h4>
      </div>
      <div class="card-body">
        <ul class="list-unstyled">
          <li>Write thoughtful responses to and accurate summaries of articles, essays, books, and other academic texts.</li>
          <li>Learn specific study skills for understanding and responding to academic texts.</li>
          <li>Write well-developed, coherent paragraphs and short essays.</li>
        </ul>
      </div>
    </div>

    <div class="card" :class="classActive('wrtg-110')">
      <div class="card-header">
        <h4 class="text-center">WRTG 110</h4>
      </div>
      <div class="card-body">
        <ul class="list-unstyled">
          <li>Critically interpret and evaluate academic texts and your own writing.</li>
          <li>Learn persuasive techniques for use in basic academic essays.</li>
          <li>Create a portfolio of 3–4 brief academic essays, shaped by effective writing processes such revision, class discussion, and using additional texts for support.</li>
        </ul>
      </div>
    </div>

    <div class="card" :class="classActive('wrtg-111')">
      <div class="card-header">
        <h4 class="text-center">WRTG 111</h4>
      </div>
      <div class="card-body">
        <ul class="list-unstyled">
          <li>Engage with academic texts based on their features, context, design, and relationship to other texts.</li>
          <li>Use tools like research and analysis to support your arguments and address specific audiences.</li>
          <li>Plan, write, and revise longer academic essays, including research papers and/or collaborative projects.</li>
        </ul>
      </div>
    </div>
  </div>

  <h3 class="mt-5 text-center">Typical Student Skills</h3>

  <div class="card-group">
    <div class="card" :class="classActive('wrtg-090')">
      <div class="card-header">
        <h4 class="text-center">WRTG 090</h4>
      </div>
      <div class="card-body">
        <ul class="list-unstyled">
          <li>May have never written an essay, or may not have developed any writing of two or more typed pages in many years.</li>
          <li>Haven’t read printed works of several pages, or may not have in several years.</li>
          <li>May have grammar and mechanics issues in their writing.</li>
        </ul>
      </div>
    </div>

    <div class="card" :class="classActive('wrtg-110')">
      <div class="card-header">
        <h4 class="text-center">WRTG 110</h4>
      </div>
      <div class="card-body">
        <ul class="list-unstyled">
          <li>Have written essays before, but they may have been short (1–2 pages) or it may have been many years ago.</li>
          <li>Have read printed works before, but not regularly, or not in many years.</li>
          <li>May have minor grammar and mechanics issues in their writing, but are aware of them to some extent.</li>
        </ul>
      </div>
    </div>

    <div class="card" :class="classActive('wrtg-111')">
      <div class="card-header">
        <h4 class="text-center">WRTG 111</h4>
      </div>
      <div class="card-body">
        <ul class="list-unstyled">
          <li>Have written several essays of three or more typed pages.</li>
          <li>Have read academic texts of several pages or more regularly in previous classes.</li>
          <li>Able to fix proofreading and grammar issues in others’ writing and their own.</li>
          <li>Able to stay focused while working independently and with others, in class and online.</li>
          <li>Willing to stick with a project, developing it over multiple drafts.</li>
          <li>Able to recognize when professors’ help is needed, and willing to ask for it.</li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '~ernie-theme/scss/modules/bootstrap-extend';

li {
    margin: 1rem 0;
}

.active .card-header {
    background-color: lighten($primary, 50%);
}

.active .card-body {
    background-color: $primary;
    color: $gray-100;
}

.card-header {
    border-radius: 0 !important;
}
</style>

<script>
export default {
  name: '',
  props: {
    answerId: {
      type: String,
      required: true
    }
  },
  data: function () {
    return {}
  },
  methods: {
    classActive: function (answerId) {
      return answerId === this.answerId ?
        'active' :
        ''
    }
  },
  components: {}
}
</script>
