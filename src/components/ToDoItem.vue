<template id="ToDoItem">
  <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
    <p>
      <input type="checkbox" v-on:change="markComplete">
      {{todo.title}}
      <button class='del' v-on:click="$emit('del-todo', todo.id)" type="button" name="button"></button>
    </p>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: "ToDoItem",
    props: ['todo'],
    methods: {
      markComplete() {
        this.todo.completed = !this.todo.completed
      }
    }
  }
</script>

<style scoped media="screen">
  .todo-item{
    background: #f4f4f4;
    padding: 10px;
    border-bottom:1px #ccc dotted;
  }

  .is-complete{
    text-decoration:line-through;
  }

  .del {
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
  }
</style>
