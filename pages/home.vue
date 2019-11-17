<template lang="pug">
div
  table
    tr
      td タスク達数
      td {{ complete_num }} / {{ task_list.length }}
    tr
      td タスク達成率
      td {{ complete_percent }} %
  br
  div(class="table-responsive" v-if="row_label.length > 0 && tmp_task_list.length > 0")
    table(border="1" class="table" style="table-layout: fixed; width:100%;")
      tr(bgcolor="silver")
        th(class="fortune_col") タスク名
        th(class="status_col") ステータス
        th(class="plan_col") 見積(H)
        th(class="fortune_col") 予/実
        th(v-for="label in row_label") {{label}}
      tbody(v-for="(task,i) in tmp_task_list" :bgcolor="isCompleteColor(task.status)")
        tr
          td.task_name_col(rowspan="2") {{ task.name }}
          td(rowspan="2" class="fortune_col")
            select(v-model="task.status" class="form-control" @change="editTask")
              option(v-for="status_option in status_options" :value="status_option.id") {{ status_option.label }}
          td(rowspan="2" class="fortune_col")
            input(type="number" style="width:100%;" v-model="task.man_hour" @change="editTask")
          td(class="fortune_col" :bgcolor="isCompletePlanColor(task.status)") 予定
          td(v-for="val in col_num" :bgcolor="isCompletePlanColor(task.status)" style="width:6%;")
            input(type="number" min="0" max="100" class="input_percent" v-model="task.fortune.plan[val]" @change="editTask")
            .percent %
        tr
          td(class="fortune_col") 実績
          td(v-for="(val in col_num" style="width:6%;")
            input(type="number" class="input_percent" min="0" max="100" v-model="task.fortune.result[val]" @change="editTask")
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
        row_label: [],
        time:'',
        status_options:[
          {id:1, label:'未着手'},
          {id:2,  label: '着手中'},
          {id:3,  label: '完了'}
        ],
        current_start:0,
        current_end:0,
        tmp_task_list:[],
        complete_num:0
      }
    },
    mounted () {
      if(this.timerFlg) setTimeout(this.timer, this.nextRefreshTime());
    },
    created () {
      this.init();
    },
    computed: {
      ...mapState({
        task_list: state => state.task_list,
        timerFlg: state => state.timerFlg,
        workingTime: state => state.workingTime,
        time_opitons: state => state.time_opitons
      }),

      complete_percent() {
        let x = Math.round(this.complete_num /this.task_list.length * 100);
        return x? x:0
      }
    },
    watch: {
      task_list: function(newValue) {
        this.tmp_task_list = [];
        newValue.forEach((val) => {
          this.tmp_task_list.push(JSON.parse(JSON.stringify(val)));
        });
        this.calculation();
      },
      workingTime: function(newValue) {
        this.createLabel(newValue);
      },
    },
    methods: {
      ...mapMutations(['allReset','setTaskList']),
      init() {
        this.createLabel(this.workingTime);
      },
      nextRefreshTime() {
        let minute = new Date().getMinutes();
        return (30 - (minute % 30)) * 60 * 1000;
      },
      createLabel(workingTime){
        this.current_start = workingTime.start;
        this.current_end = workingTime.end;
        this.col_num = [];
        this.row_label = [];
        for (var i = workingTime.start; i < workingTime.end + 1; i++){
          this.col_num.push(i);
          this.row_label.push(this.time_opitons[i].label);
        }
      },
      timer() {
        Push.create("進捗を記入してください");
        setTimeout(this.timer, this.nextRefreshTime());
      },
      editTask() {
        this.setTaskList(this.tmp_task_list);
      },
      calculation() {
        this.complete_num = 0;
        this.tmp_task_list.forEach( task => {
          if(task.status === 3){
            this.complete_num ++;
          }
        });
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
  .fortune_col{
    width: 100px;
    white-space: nowrap;
  }
  .task_name_col{
    width: 100px;
    word-wrap: break-word;
  }
  .status_col{
    width:120px;
    white-space: nowrap;
  }
  plan_col{
    wihth:60px;
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
