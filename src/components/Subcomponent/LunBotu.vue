<template>
    <div id="LunBotu">
        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in imgList" :key="item.id">
                <img :src="item.img" alt="" :class="{'full':isfull}">
            </mt-swipe-item>     
        </mt-swipe>
    </div>
</template>
<script>
export default {
    data () {
        return {
            
        }
    },
    props: ['imgList','isfull']
}
</script>
<style scoped>
 .mint-swipe{
    width: 100%;
    height: 200px;
    text-align: center
  }
  .mint-swipe img{
    
    height: 100%;
  }
  .full{
    width: 100%;
    height: 100%;
  }
  /* .mint-swipe .mint-swipe-items-wrap div:nth-child(1){
    background-color: aqua
  }
  .mint-swipe .mint-swipe-items-wrap div:nth-child(2){
    background-color: lightpink
  }
  .mint-swipe .mint-swipe-items-wrap div:nth-child(3){
    background-color: lightgreen
  } */
</style>
