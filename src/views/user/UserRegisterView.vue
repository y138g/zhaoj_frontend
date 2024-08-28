<template>
  <div class="userRegisterView">
    <h2>注册 Online Judge</h2>
    <a-form
      style="max-width: 360px; margin: 0 auto"
      ref="formRef"
      :model="form"
      class="login-form"
      layout="vertical"
      @submit="handleSubmit"
    >
      <a-form-item
        field="userAccount"
        :rules="[{ required: true, message: '账号不能为空' }]"
        :validate-trigger="['change', 'blur']"
        hide-label
      >
        <a-input v-model="form.userAccount" placeholder="请输入您的账号...">
          <template #prefix>
            <icon-user />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item
        field="userName"
        :rules="[{ required: true, message: '用户名不能为空' }]"
        :validate-trigger="['change', 'blur']"
        hide-label
      >
        <a-input v-model="form.userName" placeholder="请输入您的用户名...">
          <template #prefix>
            <icon-pen-fill />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item
        field="userPassword"
        ref="formRef"
        :rules="[{ required: true, message: '密码不能为空' }]"
        :validate-trigger="['change', 'blur']"
        hide-label
      >
        <a-input-password
          v-model="form.userPassword"
          placeholder="请输入您的密码..."
          allow-clear
        >
          <template #prefix>
            <icon-lock />
          </template>
        </a-input-password>
      </a-form-item>
      <a-form-item
        field="checkPassword"
        ref="formRef"
        :rules="[{ required: true, message: '请确认密码' }]"
        :validate-trigger="['change', 'blur']"
        hide-label
      >
        <a-input-password
          v-model="form.checkPassword"
          placeholder="请确认密码..."
          allow-clear
        >
          <template #prefix>
            <icon-lock />
          </template>
        </a-input-password>
      </a-form-item>
      <a-space :size="16" direction="vertical">
        <a-button type="primary" html-type="submit" long>注册</a-button>
        <a-button
          style="color: var(--color-text-3)"
          type="text"
          long
          class="login-form-login-btn"
          href="/user/login"
        >
          已有账号？点击登陆
        </a-button>
      </a-space>
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
  userName: "",
  userPassword: "",
  checkPassword: "",
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
