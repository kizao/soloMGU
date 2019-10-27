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
         td(style="width:40%;") タイマー設定
         td
           select.form-control(v-model="timerFlg" style="height: 40px;" @change="editTimer")
              option(v-for="timer_opiton in timer_opitons" :value="timer_opiton.flg") {{ timer_opiton.label }}
     table.table-borderless(style="width:100%;")
       tr
        td(style="width:40%; white-space: nowrap;") 始業時刻
        td
          select.form-control(v-model="start" @change="editWorkingTime()")
            option(v-for="option in time_opitons" :value="option.id") {{option.label}}
       tr
        td(style="width:40%;") 終業時刻
        td
          select.form-control(v-model="end" @change="editWorkingTime()")
            option(v-for="option in time_opitons" :value="option.id") {{option.label}}
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
        ],
        start : 0,
        end : 0
      }
    },
    computed: {
      ...mapState({
        workingTime: state => state.workingTime,
        time_opitons: state => state.time_opitons
      })
    },
    watch: {
      workingTime: function(newValue) {
        this.start = this.workingTime.start;
        this.end = this.workingTime.end;
      },
    },

    methods: {
      ...mapMutations(['setWorkingTime']),
      editTimer(){
        if(this.timerFlg){
          Push.create("タイマー設定がONになりました");
        } else {
          Push.create("タイマー設定がOFFになりました");
          clearTimeout();
        }
      },
      editWorkingTime(){
        this.setWorkingTime({start:this.start,end: this.end});
      }
    }
  }
</script>
<style>
</style>
