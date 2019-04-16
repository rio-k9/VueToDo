<!-- This is like your Laravel App file, except all of the HTML has been cut out,
and we are just left with the app div

Here you would have something like an alerts component
login component etc
-->
<template>
  <div id="app">
    <Header></Header>
    <AddToDo v-on:add-todo="addToDoItem"></AddToDo>
    <ToDo v-bind:todos="todos" v-on:del-todo='deleteToDoItem'></ToDo>
  </div>
</template>

<script>

import ToDo from './components/ToDo.vue';
import AddToDo from './components/AddToDo.vue'
import Header from './components/layout/Header.vue';
export default {
  name: 'app',
  components: {
    ToDo,
    Header,
    AddToDo
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: 'ToDo One',
          completed: false
        },
        {
          id: 2,
          title: 'ToDo Two',
          completed: true,
        },
        {
          id: 3,
          title: 'ToDo Three',
          completed: false
        }
      ]
    }
  },
  methods: {
    deleteToDoItem(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);

      //fetch del todo database usual provider apiCall
    },
    addToDoItem(newTodoItem) {
      this.todos = [...this.todos, newTodoItem]

      //fetch post todo database usual provider apiCall
    }
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding:0;
  }


</style>
