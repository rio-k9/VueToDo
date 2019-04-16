<template lang="html">
  <div class="">
    <form v-on:submit="addToDo">
      <input type="text" placeholder='Add Todo..' v-model="title" name="title" value="">
      <input type="submit" name="submit" value="Submit" class="btn">
    </form>
  </div>
</template>

<script>
import uuid from 'uuid'
export default {
  name: 'AddToDo',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addToDo(evt) {
      evt.preventDefault()
      const newToDo = {
        id: uuid.v4(),
        title: this.title,
        completed: false
      }
      //Send to parent element
      this.$emit('add-todo', newToDo)
      this.title = ''
    }
  }
}
</script>

<style lang="css" scoped>
</style>
