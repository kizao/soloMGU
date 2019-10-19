import Vue from 'vue'
import Vuex from 'vuex'
export default {
  namespaced: true,
  state:{
    task_name_list:[],
    status_list:{}
  },
  mutations:{
    setTaskName(state,list) {
      state.task_name_list = list.name_list.concat();
      state.status_list = JSON.parse(JSON.stringify(list.status_list));
      list.name_list.forEach((val,index) => {
        if(!state.status_list[index]) state.status_list[index] = 1;
      });
    },
    delTaskName(state, index) {
      state.task_name_list.splice(index, 1);
      delete state.status_list[index];
    },
    setStatus(state, status) {
      state.status_list = status;
    }
  },

}
