<template>
    <div id="swiper">
        <mt-swipe :auto="4000" :speed="speed" :showIndicators="showIndicators" >

            <mt-swipe-item v-for="item in imglist" :key="item.id">
                <img :src="item.img" alt="">
            </mt-swipe-item>
           
        </mt-swipe>
    </div>
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui';
export default {
    name: 'Swiper',
    components: {
        'mt-swipe': Swipe,
        'mt-swipe-item': SwipeItem,
    },
    props: {
        auto: {
            type: Number,
            default: 4000
        },
        speed: {
            type: Number,
            default: 300
        },
        showIndicators: {
            type: Boolean,
            default: true
        },
        imglist: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>
<style lang="less" scoped>
   
    .mint-swipe {
        height: 200px;
       img {
           width: 100%;
           height: auto;
       }
    }
</style>