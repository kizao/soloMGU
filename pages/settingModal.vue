<template lang="pug">
  b-modal(
    id="settingModal"
    hide-footer
    title="設定"
    ok-title="完了"
    cancel-title="キャンセル"
   )
     table.table-borderless(style="width:100%;")
       tr
         td タイマー設定
         td
           select(v-model="timerFlg" style="height: 30px;" class="selectpicker" @change="editTimer")
              option(v-for="timer_opiton in timer_opitons" :value="timer_opiton.flg") {{ timer_opiton.label }}
     br
     br
     br
</template>
<script>
  import {mapState, mapMutations, mapActions} from 'vuex';
  export default {
    data() {
      return {
        timerFlg : false,
        timer_opitons: [
          {flg:false, label:'タイマー設定しない'},
          {flg:true, label:'タイマー設定する'}
        ]
      }
    },

    methods: {
      editTimer(){
        if(this.timerFlg){
          Push.create("タイマー設定がONになりました");
        } else {
          Push.create("タイマー設定がOFFになりました");
          clearTimeout();
        }
      }
    }
  }
</script lang="scss">
<style>
</style>
