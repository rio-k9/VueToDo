<template lang="html">
  <header class="header">
    <h1>Todo List</h1>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="css" scoped>
  .header {
    background: grey;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100vw;
    height:30px;
    color:white;
    padding:30px 0;
  }
</style>
