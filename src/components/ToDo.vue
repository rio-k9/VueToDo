<template>
  <div>
    <div v-bind:key="todo.id" v-for="todo in todos">
      <h3>
        <ToDoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)"></ToDoItem>
      </h3>
    </div>
  </div>
</template>

<script>

  import ToDoItem from './ToDoItem.vue';
  export default {
    name: 'ToDo',
    components: {
      ToDoItem
    },
    props: ['todos']
  }
</script>

<style scoped>

</style>
