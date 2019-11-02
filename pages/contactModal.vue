<template lang="pug">
no-ssr
  b-modal(
    id="contactModal"
    hide-footer
    title="問い合わせ"
   )
    form(name="ask-question" method="post" data-netlify="true" data-netlify-honeypot="bot-field")
      input(type="hidden" name="form-name" value="ask-question")
      label(v-for="(panelist, index) in panelists" :key="index")
        input(type="radio" name="panelist" :value="panelist" @input="ev => updatePanelist" :checked="panelist === currentPanelist")
        span {{ panelist }}
      button Submit

</template>
<script>
  import {mapState, mapMutations, mapActions} from 'vuex';
  export default {
    data() {
      return {
      }
    },
    computed: {
      ...mapState({
        workingTime: state => state.workingTime,
      })
    },
    watch: {
    },

    methods: {
      ...mapMutations(['setWorkingTime','setTimerFlg']),
    }
  }
</script>
<style>
</style>
