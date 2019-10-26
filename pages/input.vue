<template lang="pug">
div
  button.bg-orange(v-b-modal.modal-center class="btn btn-warning") タスク追加
  b-modal(
  　　id="modal-center"
  　　centered
  　　title="タスク一覧"
     ok-title="完了"
     cancel-title="キャンセル"
     @ok="onComplete"
  )
    p(v-if="error" style="color:red;") ※{{error}}
    ul(class="list-group" style="max-width: 500px;")
      li(class="list-group-item" v-for="(task,i) in tmp_task_list" style="display: inline-block;") {{ task.name }}
        button(class="btn btn-danger" style="display: inline-block; float: right;" @click="delName(i)") 削除
    input(type="text" v-model="name")
    b-button(@click="addTaskName") +
</template>

<script>
  import {mapState, mapMutations, mapActions} from 'vuex';
  export default {
    data() {
      return {
        name:'',
        error:'',
        tmp_task_list:[],
      }
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
      ...mapMutations(['setTaskList','delTaskName']),
      addTaskName() {
        if(this.validation(this.name)){
          let task = {
                name: '',
                status: 1,
                man_hour: 0,
                fortune:{
                  plan:{},
                  result:{}
                }
              }
          task.name = this.name;
          this.tmp_task_list.push(task);
          this.name='';
        }
      },
      onComplete() {
        this.setTaskList(this.tmp_task_list);
      },
      validation(name) {
        this.error='';
        let result = true;
        if(!this.name){
          this.error = 'タスク名を入力してください';
          result = false;
        }
        this.tmp_task_list.forEach(task => {
          if(task.name === this.name){
            this.error = 'すでに存在するタスク名です'
            result = false;
          }
        });
        return result;
      },
      delName(i) {
        this.delTaskName(i);
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
  .bg-orange{
    background-color: #FF9900;
    color: #F7F8FB;
  }
</style>
