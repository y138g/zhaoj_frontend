<template>
  <div class="userLoginView">
    <h2>登陆</h2>
    <a-form
      style="max-width: 360px; margin: 0 auto"
      auto-label-width
      ref="formRef"
      :model="form"
      :style="{}"
      @submit="handleSubmit"
    >
      <a-form-item field="userAccount" label="账号" validate-trigger="blur">
        <a-input v-model="form.userAccount" placeholder="请输入您的账号..." />
      </a-form-item>
      <a-form-item field="userPassword" label="密码" validate-trigger="blur">
        <a-input-password
          v-model="form.userPassword"
          placeholder="请输入您的密码..."
        />
      </a-form-item>
      <a-form-item>
        <a-space>
          <a-button type="primary" html-type="submit" auto-label-width
            >登陆
          </a-button>
          <a-button type="primary" href="/user/register">注册 </a-button>
        </a-space>
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { UserControllerService, UserLoginRequest } from "../../../generated";
import message from "@arco-design/web-vue/es/message";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const form = reactive({
  userAccount: "",
  userPassword: "",
} as UserLoginRequest);

const router = useRouter();
const store = useStore();
/**
 * 提交表单
 */
const handleSubmit = async () => {
  const res = await UserControllerService.userLoginUsingPost(form);
  if (res.code === 0) {
    //登陆成功，跳转到主页
    await store.dispatch("user/getLoginUser");
    router.push({
      path: "/",
      replace: true,
    });
  } else {
    message.error("登陆失败" + res.message);
  }
};
</script>
