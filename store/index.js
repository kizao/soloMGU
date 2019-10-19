import Vue from 'vue'
import Vuex from 'vuex'
export default {
  namespaced: true,
  state:{
    task_name_list:[]
  },
  mutations:{
    add(state,list) {
      state.task_name_list = list.concat();
    }
  },

}
