<template lang="pug">
div
  br
  br
  br
  //
    table
      tr
        td(align="right") 作業時刻
        td
          select(v-model="start" class="form-control")
            option(v-for="option in opitons") {{option}}
        td
        td 〜
        td(align="right")
        td
          select(v-model="end" class="form-control")
            option(v-for="option in opitons") {{option}}
      tr
        td 休憩時間
        td
          select(v-model="break_time" class="form-control")
            option(v-for="time in 10") {{time}}
      tr
        td
          button(@click="send" class="btn btn-primary") 送信
  div(class="table-responsive" v-if="row_label.length > 0 && tmp_task_list.length > 0")
    table(border="1" class="table" style="table-layout: fixed; width:100%;")
      tr(bgcolor="#ff9966")
        th(class="fortune_col") タスク名
        th(class="fortune_col") ステータス
        th(class="fortune_col") 見積(H)
        th(class="fortune_col") 予/実
        th(v-for="label in row_label") {{label}}
      tbody(v-for="(task,i) in tmp_task_list" :bgcolor="isCompleteColor(task.status)")
        tr
          td(rowspan="2" class="fortune_col") {{ task.name }}
          td(rowspan="2" class="fortune_col")
            select(v-model="task.status" class="form-control" @change="editTask")
              option(v-for="status_option in status_options" :value="status_option.id") {{ status_option.label }}
          td(rowspan="2" class="fortune_col")
            input(type="number" style="width:100%;" v-model="task.man_hour" @change="editTask")
          td(class="fortune_col" :bgcolor="isCompletePlanColor(task.status)") 予定
          td(v-for="(val,y) in col_num" :bgcolor="isCompletePlanColor(task.status)" style="width:6%;")
            input(type="number" min="0" max="100" class="input_percent" v-model="task.fortune.plan[y]" @change="editTask")
            .percent %
        tr
          td(class="fortune_col") 実績
          td(v-for="(val,y) in col_num" style="width:6%;")
            input(type="number" class="input_percent" min="0" max="100" v-model="task.fortune.result[y]" @change="editTask")
            .percent %
  modal(style="display: inline-block; margin-right:  20px;")
  button(style="display: inline-block;" @click="allDelete" class="btn btn-danger") 全削除
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
        end : '20:00',
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
          {id:1, label:'未着手'},
          {id:2,  label: '着手中'},
          {id:3,  label: '完了'}
        ],
        tmp_task_list:[]
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
        task_list: state => state.task_list
      })
    },
    watch: {
      task_list: function(newValue) {
        this.tmp_task_list = [];
        newValue.forEach((val) => {
          this.tmp_task_list.push(JSON.parse(JSON.stringify(val)));
        });
      }
    },
    methods: {
      ...mapMutations(['allReset','setTaskList']),
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
        Push.create("進捗を記入してください");
        setTimeout(this.alert, this.nextRefreshTime());
      },
      editTask() {
       this.setTaskList(this.tmp_task_list);
      },
      isCompleteColor(status_id) {
        return status_id == 3 ? "gray":"white";
      },
      isCompletePlanColor(status_id) {
        return status_id == 3 ? "gray":"#F2F2F2";
      },
      allDelete() {
        this.allReset();
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
  fortune_col2{
    width:5%;
    white-space: nowrap;
  }
  is_complete{
    background-color: red;
  }
  .input_percent {
    text-align: center;
    box-sizing:border-box;
    width:80%;
    display:inline-block;
    vertical-align: middle;
  }
  .percent {
    display: inline;
    vertical-align: middle;
  }
</style>
