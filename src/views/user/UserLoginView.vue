<template>
  <div class="userLoginView">
    <h2>登录 Online Judge</h2>
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
      <a-space :size="16" direction="vertical">
        <div class="login-form-password-actions">
          <a-checkbox
            checked="rememberPassword"
            :model-value="loginConfig.rememberPassword"
            @change="setRememberPassword as any"
          >
            {{ "记住密码" }}
          </a-checkbox>
          <a-link>{{ "忘记密码？" }}</a-link>
        </div>
        <a-button type="primary" html-type="submit" long>登录</a-button>
        <a-button
          style="color: var(--color-text-3)"
          type="text"
          long
          class="login-form-register-btn"
          href="/user/register"
        >
          注册账号
        </a-button>
      </a-space>
    </a-form>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { UserControllerService, UserLoginRequest } from "../../../generated";
import message from "@arco-design/web-vue/es/message";
import { useStorage } from "@vueuse/core";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const form = reactive({
  userAccount: "",
  userPassword: "",
} as UserLoginRequest);

const loginConfig = useStorage("login-config", {
  rememberPassword: true,
  userAccount: "",
  userPassword: "",
});

const router = useRouter();
const store = useStore();
/**
 * 提交表单
 */
const handleSubmit = async ({ values }: { values: Record<string, any> }) => {
  const res = await UserControllerService.userLoginUsingPost(form);
  if (res.code === 0) {
    //登陆成功，跳转到主页
    await store.dispatch("user/getLoginUser");
    router.push({
      path: "/",
      replace: true,
    });
    const { rememberPassword } = loginConfig;
    const { userAccount, userPassword } = values;
    // 实际生产环境需要进行加密存储。
    loginConfig.value.userAccount = rememberPassword ? userAccount : "";
    loginConfig.value.userPassword = rememberPassword ? userPassword : "";
  } else {
    message.error("登陆失败" + res.message);
  }
};
const setRememberPassword = (value: boolean) => {
  loginConfig.value.rememberPassword = value;
};
</script>

<style>
.login-form-password-actions {
  display: flex;
  justify-content: space-between;
}
</style>
