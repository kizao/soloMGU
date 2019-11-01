<template lang="pug">
b-navbar(toggleable='md', type='dark' class="bg-orange")
  b-navbar-toggle(target='nav_collapse')
  b-navbar-brand(href=''  style="font-weight: 900;") soloMGU
  b-collapse#nav_collapse(is-nav='')
    b-navbar-nav.ml-auto
      b-nav-item-dropdown(right='')
        // Using button-content slot
        template(slot='button-content')
          img(src="~/assets/gear.png" style="width:30px;" )
        b-dropdown-item(v-b-modal.settingModal) 詳細設定
        b-dropdown-item(v-b-modal.contactModal) 問い合わせ
  settingModal
  contactModal
</template>
<script>
  import settingModal from '~/pages/settingModal.vue'
  import contactModal from '~/pages/contactModal.vue'
  export default {
    components: { settingModal, contactModal },
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
  bg-orange{
    background-color: #FF9900;
  }
  .dropdown-toggle::after {
    content: none;
  }
</style>
