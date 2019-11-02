<template lang="pug">
no-ssr
  b-modal(
    id="contactModal"
    hide-footer
    title="問い合わせ"
   )
    form(netlify name="contact" netlify-honeypot="bot-field" action="thank-you" data-netlify="true" method="post")
      input(type="hidden" name="form-name" value="contact")
      table.table
        tr
          td お名前
          td
            input(type='text', name='name')
        tr
          td Eメールアドレス
          td
            input(type='email', name='email')
        tr
          td 内容
          td
            textarea(name='message')
        tr
          td
          td
            button(type='submit' class="btn btn-primary" style="float: right;") 送信

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
