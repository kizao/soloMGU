<template lang="pug">
div
  br
  br
  br
  table
    tr
      td(align="right") 作業時刻
      td
        select(v-model="start")
          option(v-for="option in opitons") {{option}}
      td
      td 〜
      td(align="right")
      td
        select(v-model="end")
          option(v-for="option in opitons") {{option}}
    tr
      td 休憩時間
      td
        select(v-model="break_time")
          option(v-for="time in 10") {{time}}
    tr
      td
        button(@click="send") 送信

  br
  br
  h3 作業時間 {{ working_time }}
  h3 {{time}}
  div(class="table-responsive" v-if="row_label.length > 0 && task_name_list.length > 0")
    table(border="1" class="table" style="table-layout: fixed; width:100%;")
      tr
        th(class="fortune_col") タスク名
        th(class="fortune_col") ステータス
        th(class="fortune_col") 予/実
        th(v-for="label in row_label") {{label}}
      tbody(v-for="task_name in task_name_list")
        tr
          td(rowspan="2" class="fortune_col") {{ task_name }}
          td(rowspan="2" class="fortune_col")
            select(v-model="stats")
              option(v-for="status_option in status_options") {{ status_option }}
          td(class="fortune_col") 予定
          td(v-for="val in col_num" style="width:6%;")
            input(type="text" style="box-sizing:border-box; width:100%;")
        tr
          td(class="fortune_col") 実績
          td(v-for="val in col_num" style="width:6%;")
            input(type="text" style="box-sizing:border-box; width:100%;")
  modal(
    :task_name_list="task_name_list"
  )
</template>
<script>
  import modal from './input'
  import {mapState, mapMutations, mapActions} from 'vuex';
  export default {
    head () {
      return {
        script: [
          { src: 'https://cdnjs.cloudflare.com/ajax/libs/push.js/1.0.9/push.min.js' }
        ],
        link: []
      }
    },
    components: {
      modal
    },
    data() {
      return {
        col_num: 0,
        working_time: 0,
        DatePickerFormat: 'hh:mm',
        task_num : 1,
        start : '10:00',
        end : '19:00',
        break_time: 1,
        row_label: [],
        opitons: [
          '01:00',
          '02:00',
          '03:00',
          '04:00',
          '05:00',
          '06:00',
          '07:00',
          '08:00',
          '09:00',
          '10:00',
          '11:00',
          '12:00',
          '13:00',
          '14:00',
          '15:00',
          '16:00',
          '17:00',
          '18:00',
          '19:00',
          '20:00',
          '21:00',
          '22:00',
          '23:00',
          '24:00'
        ],
        time:'',
        status_options:[
          '未着手',
          '着手中',
          '完了'
        ],
        stats:'未着手',
        task_data:{
          user_id:1,
          task_list:[
            {
              task_id:1,
              task_name:'aaa',
              status:0,
              task_detail:[
                {
                  task_id:1,
                  task_detail_id:1,
                  time:'2019/10/10 10:00',
                  yotei:100,
                  zisseki:50
                }
              ]
            }
          ]
        }
      }
    },
    mounted () {
      setTimeout(this.alert, this.nextRefreshTime());
    },
    created () {
      this.init();
    },
    computed: {
      ...mapState({
        task_name_list: state => state.task_name_list
      })
    },
    methods: {
      init(){
        this.send();
      },
      nextRefreshTime() {
        let minute = new Date().getMinutes();
        return (30 - (minute % 30)) * 60 * 1000;
      },
      send () {
        this.col_num =  Number(this.end.slice(0,2)) - Number(this.start.slice(0,2)) + 1;
        this.working_time= Number(this.end.slice(0,2)) - Number(this.start.slice(0,2)) - this.break_time;
        for (var i = this.start.slice(0,2); i < Number(this.start.slice(0,2)) + this.col_num; i++){
          var label =  i + ':00'
          this.row_label.push(label);
        }
      },
      alert() {
        Push.create("プッシュ通知！");
        setTimeout(this.alert, this.nextRefreshTime());
      }
    }
  }
</script>

<style lang="scss">
  task_col{
    width:5%;
  }
  fortune_col{
    width:3%;
    white-space: nowrap;
  }
  is_complete{
    background-color: red;
  }
</style>
