import Vue from 'vue'
import Vuex from 'vuex'
export default {
  namespaced: true,
  state:{
    task_list:[],
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
    }
  },

}
