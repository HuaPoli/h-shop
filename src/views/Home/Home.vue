<template>
    <div id="home" >
        <swiper :imglist="imgList" />
    </div>
</template>
<script>
import Swiper from 'components/Swiper/Swiper.vue'
import {getImglist} from 'network/home'
export default {
    name: 'Home',
    components: {
        Swiper
    },
    data() {
        return {
            imgList: []
        }
    },
    created() {
     this.getImglist()

    },

    methods: {
        getImglist() {
            getImglist().then(res => {
                this.imgList = res.data
            })
        },
    }

    

}
</script>
<style scoped>

</style>