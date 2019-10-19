<template lang="pug">
div
  b-button(v-b-modal.modal-center) タスク追加
  b-modal(
  　　id="modal-center"
  　　centered
  　　title="タスク一覧"
     @ok="onComplete"
  )
    p(v-if="error" style="color:red;") ※{{error}}
    ul(class="list-group" style="max-width: 400px;")
      li(class="list-group-item" v-for="(task_name,i) in name_list" @click="delName(i)") {{ task_name }}
    input(type="text" v-model="name")
    b-button(@click="addTaskName") +
</template>

<script>
  import {mapState, mapMutations, mapActions} from 'vuex';
  export default {
    data() {
      return {
        name_list:[],
        tmp_status_list:{},
        name:'',
        error:''
      }
    },
    computed: {
      ...mapState({
        task_name_list: state => state.task_name_list,
        status_list: state => state.status_list
      })
    },
    watch: {
      task_name_list: function(newValue) {
        this.name_list = newValue.concat();
      },
      status_list: function(newValue) {
        this.tmp_status_list = JSON.parse(JSON.stringify(newValue));
      }
    },
    methods: {
      ...mapMutations(['setTaskName','delTaskName']),
      addTaskName() {
        if(this.validation(this.name)){
          this.name_list.push(this.name);
          this.name='';
        }
      },
      onComplete() {
        this.setTaskName({name_list: this.name_list, status_list: this.tmp_status_list});
      },
      validation(name) {
        this.error='';
        if(!this.name){
          this.error = 'タスク名を入力してください';
          return false;
        }else if(this.name_list.includes(name)){
          this.error = 'すでに存在するタスク名です'
          return false;
        }
        return true;
      },
      delName(i) {
        this.name_list.splice(i, 1);
        delete this.tmp_status_list[i];
      },

    }
  }
</script>

<style lang="scss">
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  .modal-container {
    width: 70%;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }
</style>
