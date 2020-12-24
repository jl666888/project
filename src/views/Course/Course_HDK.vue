<template>
  <div>
    <p style="text-align:center">课程</p>

    <!-- 定位 -->
    <router-link class="location" :to="{path:'/location'}">点我定位</router-link>
    <van-swipe class="my-swipe" style="overflow:hidden" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <!-- 格子 -->
    <van-grid :gutter="10" style="margin-top:10px">
      <van-grid-item v-for="value in grid" :key="value" icon="photo-o" :text="value" @click="Grid(value)"/>
    </van-grid>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem, Grid, GridItem } from "vant";

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Grid);
Vue.use(GridItem);

export default {
  data:function(){
    return {
      grid:['高校晚辅导','周末精品班','一对一','搜索'],
      one:''
    }
  },
  created(){
    this.$store.commit('setGrid',this.grid)
  },
  methods:{
    //跳路由
    Grid:function(val){
      if(this.grid.indexOf(val) !== 3){
      this.$router.push({path:'/title',query:{id:this.grid.indexOf(val)}})
      }
    }
  }
};
</script>

<style scoped>
.location {
  margin-top: 100px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  float: left;
}
</style>