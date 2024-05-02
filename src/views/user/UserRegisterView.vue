<template>
  <div class="userRegisterView">
    <h2>注册</h2>
    <a-form
      style="max-width: 360px; margin: 0 auto"
      auto-label-width
      ref="formRef"
      :model="form"
      :style="{}"
      @submit="handleSubmit"
    >
      <a-form-item field="userAccount" label="账号" validate-trigger="blur">
        <a-input v-model="form.userAccount" placeholder="请输入账号..." />
      </a-form-item>
      <a-form-item field="userName" label="用户名" validate-trigger="blur">
        <a-input v-model="form.userName" placeholder="请输入用户名..." />
      </a-form-item>
      <a-form-item field="userPassword" label="密码" validate-trigger="blur">
        <a-input-password
          v-model="form.userPassword"
          placeholder="请输入密码..."
        />
      </a-form-item>
      <a-form-item
        field="checkPassword"
        label="确认密码"
        validate-trigger="blur"
      >
        <a-input-password
          v-model="form.checkPassword"
          placeholder="请再次确认密码..."
        />
      </a-form-item>
      <a-form-item>
        <a-space>
          <a-button type="primary" html-type="submit">注册 </a-button>
          <a-button type="primary" href="/user/login">登陆</a-button>
        </a-space>
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import {
  UserControllerService,
  UserLoginRequest,
  UserRegisterRequest,
} from "../../../generated";
import message from "@arco-design/web-vue/es/message";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const form = reactive({
  userAccount: "",
  userPassword: "",
  checkPassword: "",
  userName: "",
} as UserRegisterRequest);

const router = useRouter();
const store = useStore();
const userLoginUser = reactive({
  userAccount: "",
  userPassword: "",
} as UserLoginRequest);
/**
 * 提交表单
 */
const handleSubmit = async () => {
  const res = await UserControllerService.userRegisterUsingPost(form);
  if (res.code === 0) {
    userLoginUser.userAccount = form.userAccount;
    userLoginUser.userPassword = form.userPassword;
    alert("注册成功");
    //注册成功，执行自动登陆
    const res = await UserControllerService.userLoginUsingPost(userLoginUser);
    if (res.code === 0) {
      await store.dispatch("user/getLoginUser");
      router.push({
        path: "/",
        replace: true,
      });
    } else {
      message.error("登陆失败" + res.message);
    }
  } else {
    message.error("注册失败" + res.message);
  }
};
</script>
