<template lang="pug">
div
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
  div(class="table-responsive" v-if="row_label.length > 0")
    table(border="1" class="table" style="table-layout: fixed; width:100%")
      tr
        td(class="task_col" style="width:5%;") タスク名
        td(class="fortune_col" style="width:5%;") 予定/実
        td(v-for="label in row_label") {{label}}
      tbody(v-for="n in task_num")
        tr(style="width:5%;")
          td(rowspan="2" style="width:5%;") タスク
          td(style="width:5%;") 予定
          td(v-for="val in col_num" style="width:6%;")
            input(type="text" style="box-sizing:border-box; width:100%;")
        tr
          td(style="width:5%;") 実績
          td(v-for="val in col_num" style="width:6%;")
            input(type="text" style="box-sizing:border-box; width:100%;")
  button(@click="add") +
</template>
<script>
    export default {
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
                ]
            }
        },
        methods: {
            send () {
                this.col_num =  Number(this.end.slice(0,2)) - Number(this.start.slice(0,2)) + 1;
                this.working_time= Number(this.end.slice(0,2)) - Number(this.start.slice(0,2)) - this.break_time;
                for (var i = this.start.slice(0,2); i < Number(this.start.slice(0,2)) + this.col_num; i++){
                    var label =  i + ':00'
                    this.row_label.push(label);
                }
            },
            add() {
                this.task_num ++;
            }
        }
    }
</script>

<style  lang="scss">
  task_col{
    width:5%;
  }
  fortune_col{
    width:3%;
  }
</style>
