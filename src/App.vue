<template>
  <div class="container" id="app">
    <my-header/>
    <transition name="fade">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
    <tab-bar/>
  </div>
</template>
<script>
import MyHeader from './components/MyHeader/MyHeader.vue'
import TabBar from './components/TabBar/TabBar'
export default {
  name: 'App',
  components: {
    MyHeader,
     TabBar,
  }
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
  }
  .fade-enter {
    opacity: 0;
    transform: translateX(100%);
  }
  .fade-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }
  .fade-enter-active, .fade-leave-active {
    transition:all .5s ease;
  }

</style>