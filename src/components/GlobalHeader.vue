<template>
  <a-row id="GlobalHeader" align="center" :wrap="false">
    <a-col flex="auto">
      <a-menu
        mode="horizontal"
        :selected-keys="selectedKeys"
        @menu-item-click="doMenuClick"
      >
        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <div class="title-bar">
            <img class="logo" src="../assets/zha-logo.png" />
            <div class="title">黑子OJ</div>
          </div>
        </a-menu-item>
        <a-menu-item v-for="item in visibleRoutes" :key="item.path">
          {{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="100px">
      <a-dropdown>
        <!--  用户未登录时，返回“未登录”，用户登陆且没有上传头像时，显示名称  -->
        <a-avatar v-if="fileList[0].url != null">
          <img :src="fileList[0].url" alt="头像" />
        </a-avatar>
        <a-avatar v-else-if="isUserLogin.string == '未登录'">
          <span>{{ isUserLogin.string }}</span>
        </a-avatar>
        <a-avatar v-else :style="{ backgroundColor: '#3370ff' }">
          <span>{{ isUserLogin.string }}</span>
        </a-avatar>
        <template #content>
          <a-doption disabled>
            <icon-user />
            个人中心
          </a-doption>
          <a-doption disabled @click="userSetting">
            <icon-settings />
            用户设置
          </a-doption>
          <a-doption v-if="isUserLogin.string === '未登录'" @click="goLogin">
            <icon-export />
            登陆用户
          </a-doption>
          <a-doption v-else @click="userLogout">
            <icon-export />
            登出用户
          </a-doption>
        </template>
      </a-dropdown>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { routes } from "@/router/routes";
import { useRouter } from "vue-router";
import { computed, onMounted, ref, watch, watchEffect } from "vue";
import { useStore } from "vuex";
import checkAccess from "@/access/checkAccess";
import accessEnum from "@/access/accessEnum";
import { UserControllerService } from "../../generated";
import message from "@arco-design/web-vue/es/message";
import type { FileItem } from "@arco-design/web-vue/es/upload/interfaces";

const router = useRouter();
const store = useStore();

const fetchData = async () => {
  await store.dispatch("user/getLoginUser");
};

onMounted(async () => {
  const data = await fetchData();
  console.log(data + "111");
});

//展示在菜单的路由数组
const visibleRoutes = computed(() => {
  return routes.filter((item) => {
    if (item.meta?.hideInMenu) {
      return false;
    }
    //根据权限过滤菜单
    return checkAccess(
      store.state.user.loginUser,
      item?.meta?.access as string
    );
  });
});

//默认主页
const selectedKeys = ref(["/"]);

//路由跳转后，更新选中菜单项
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});

//权限测试，测试无误后请注解
// setTimeout(() => {
//   store.dispatch("user/getLoginUser", {
//     username: "刘伟",
//     userRole: accessEnum.ADMIN,
//   });
// }, 3000);

const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};

/**
 * 用户登出
 */
const userLogout = async () => {
  const res = await UserControllerService.userLogoutUsingPost();
  // 清除本地存储
  await window.localStorage.removeItem("vuex");
  // 重置 Vuex 状态
  await store.commit("user/resetUserState");
  if (res.code === 0) {
    await router.push({
      path: "/user/login",
      replace: true,
      key: new Date().getTime(), // 每次点击登录都会生成一个新的key，迫使组件重新渲染
    });
  } else {
    message.error("登出失败：" + res.message);
  }
};

/**
 * 前往登陆页面
 */
const goLogin = async () => {
  router.push({
    path: "user/login",
    replace: true,
  });
};

/**
 * 用户设置
 */
const userSetting = () => {
  router.push({
    path: "user/setting",
    replace: true,
  });
};

/**
 * 用户是否登录 若登录是否有头像 若有则返回头像url，否则返回 null
 */
let isUserLogin = {
  url: store.state.user.loginUser?.userAvatar
    ? store.state.user.loginUser.userAvatar
    : null,
  string: store.state.user?.loginUser.userName
    ? store.state.user.loginUser.userName
    : "未登录",
};

const fileList = ref<FileItem[]>([isUserLogin]);
</script>
<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.title {
  color: #444;
  margin-left: 16px;
}

.logo {
  height: 70px;
}
</style>
