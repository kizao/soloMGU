<template lang="pug">
div
  b-button(v-b-modal.modal-center>タスク追加)
  b-modal(
  　　id="modal-center"
  　　centered
  　　title="タスク一覧"
     @ok="onComplete"
  )
    li(v-for="task_name in name_list") {{ task_name }}
    input(type="text" v-model="name")
    b-button(@click="addTaskName")
</template>

<script>
    export default {
        props: ['task_name_list'],
        data() {
            return {
                label:'aaaa',
                name_list:[],
                name:'',
                data:''
            }
        },
        mounted: function(){
            this.name_list = this.task_name_list.concat();
        },
        methods: {
            addTaskName() {
                this.name_list.push(this.name);
            },
            onComplete() {
                this.$emit('setNameList', this.name_list);
            }
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
