<template lang="pug">
div
  nav.navbar.navbar-expand-md.navbar-dark.fixed-top.bg-orange
    a.navbar-brand(href="" color="white" style="font-weight: 900;") soloMGU
    button.navbar-toggler(type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation")
      span.navbar-toggler-icon
    button(v-b-modal.settingModal style="margin-left: 90%;" class="btn btn-default")
      img(src="~/assets/gear.png" style="width:30px;" )
    settingModal
</template>
<script>
  import settingModal from '~/pages/settingModal.vue'
  export default {
    components: { settingModal },
    data() {
      return {
        modal:false
      }
    },
    methods: {
      onSettingModal(){
        this.modal = true;
      }
    }
  }
</script>
<style lang="scss">
  .bg-orange{
    background-color: #FF9900;
  }
</style>
