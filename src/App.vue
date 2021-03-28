<template>
  <div class="container" id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="less" scoped>
 #app {
  font-family:'Avenir',Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
}
.container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
  background-color: green;
}
</style>