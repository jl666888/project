<template>
  <div style="margin-left:20px;margin-right:20px">
    <!-- loading -->
    <van-loading style="text-align:center" v-show="show" />

    <div class="to" @click="back">
      &lt;
      <span style="margin-left:10px">详情页</span>
    </div>

    <div style="width:79vw" class="img">
        <!-- 图片 -->
      <img style="width:100%" :src="img" alt />
      <div style="width:50%;float:left">
        <p>课程名称</p>
        <p>263人已报名</p>
      </div>
      <div style="float:right;margin-top:15px">1500元/小时</div>
    </div>
    <!-- 导航 -->
    <div class="main">
      <van-tabs @click="onClick" v-model="active">
        <van-tab title="标签 1">内容 1</van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import url from "@/api/url";
import Vue from "vue";
import { Loading, Button, Grid, GridItem, Tab, Tabs } from "vant";

Vue.use(Loading);
Vue.use(Button);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Tab);
Vue.use(Tabs);
export default {
  data: function() {
    return {
      arr: [],
      show: true,
      img: "",
    //   导航默认显示的索引
      active:0,
    };
  },
  created() {
    this.arr = this.$store.state.defaltArr;
    console.log(this.arr);
    this.img = this.$store.state.titleArr[this.$route.query.key].pic;
  },
  methods: {
    back: function() {
      this.$router.go(-1);
    },
    onClick(name, title) {
      
    }
  }
};
</script>

<style scoped>
.to {
  position: fixed;

  z-index: 1;
  width: 100%;
  height: 50px;
  top: 0;
  left: 0;
  background: #f4f4f4;
  line-height: 50px;
}
.img {
  margin: 0 auto;
  padding-top: 50px;
}
.main {
  clear: both;
}
</style>