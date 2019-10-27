import Vue from 'vue'
import Vuex from 'vuex'
export default {
  namespaced: true,
  state:{
    task_list:[],
    timerFlg: false,
    workingTime: {
      start : 9,
      end : 18
    },
    time_opitons: [
      {id:0, label:'00:00'},
      {id:1, label:'01:00'},
      {id:2, label:'02:00'},
      {id:3, label:'03:00'},
      {id:4, label:'04:00'},
      {id:5, label:'05:00'},
      {id:6, label:'06:00'},
      {id:7, label:'07:00'},
      {id:8, label:'08:00'},
      {id:9, label:'09:00'},
      {id:10, label:'10:00'},
      {id:11, label:'11:00'},
      {id:12, label:'12:00'},
      {id:13, label:'13:00'},
      {id:14, label:'14:00'},
      {id:15, label:'15:00'},
      {id:16, label:'16:00'},
      {id:17, label:'17:00'},
      {id:18, label:'18:00'},
      {id:19, label:'19:00'},
      {id:20, label:'20:00'},
      {id:21, label:'21:00'},
      {id:22, label:'22:00'},
      {id:23, label:'23:00'}
    ]
  },
  mutations:{
    setTaskList(state,set_task_list) {
      state.task_list = set_task_list.concat();
    },
    delTaskName(state, index) {
      state.task_list.splice(index, 1);
    },
    allReset(state) {
      state.task_list = [];
    },
    setTimerFlg(state, flg){
      state.timerFlg = flg;
    },
    setWorkingTime(state, workingTime){
      state.workingTime = workingTime;
    }
  },

}
