<template>
  <div>
    <van-nav-bar
      title="注册"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div>请输入手机号</div>

    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="手机号"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>
<script>
import Vue from "vue";
import { NavBar, Toast, Form } from "vant";

Vue.use(NavBar);
Vue.use(Toast);
Vue.use(Form);
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onSubmit(values) {
      //   console.log('submit', values);
    },
  },
};
</script>