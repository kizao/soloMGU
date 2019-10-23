import Vue from 'vue'
import Vuex from 'vuex'
export default {
  namespaced: true,
  state:{
    task_name_list:[],
    status_list:{},
    fortune_list:{
      plan:{},
      result:{},

    },
    man_hour_list:{}
  },
  mutations:{
    setTaskName(state,list) {
      state.status_list = JSON.parse(JSON.stringify(list.status_list));
      list.name_list.forEach((val,index) => {
        if(!state.status_list[index]) state.status_list[index] = 1;
        if(!state.fortune_list.plan[index]) state.fortune_list.plan[index]={};
        if(!state.fortune_list.result[index]) state.fortune_list.result[index]={};
      });
      state.task_name_list = list.name_list.concat();
    },
    delTaskName(state, index) {
      state.task_name_list.splice(index, 1);
      delete state.status_list[index];
    },
    setStatus(state, status) {
      state.status_list = status;
    },
    setFortune(state, fortune) {
      state.fortune_list = fortune;
    },
    setManHourList(state, man_hour) {
      state.man_hour_list = man_hour;
    },
    allReset(state) {
      state.task_name_list = [];
      state.status_list = {};
      state.fortune_list.plan = {};
      state.fortune_list.result = {};
      state.man_hour_list = {};
    }
  },

}
