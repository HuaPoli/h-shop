<template>
    <div id="myHeader">
      <mt-header fixed :title="$route.meta.title">
         <span slot="left" @click="goBack"  v-show="showBack"> 
          <mt-button icon="back">返回</mt-button>
        </span>
      </mt-header>
    </div>
</template>
<script>
import {Header,Button } from 'mint-ui'
export default {
    name: 'MyHeader',
    components: {
      'mt-header': Header,
      'mt-button': Button
    },
    data() {
      return {
        showBack: false
      }
    },
    created() {
     
      this.showBack = this.$route.path !== '/home'
    },
    watch: {
      '$route.path' (newVal) {
        this.showBack = newVal !== '/home'
        console.log(this.showBack)
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      }
    }

}
</script>