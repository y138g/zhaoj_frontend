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
        <a-avatar v-if="fileList[0].url != 1">
          <img :src="fileList[0].url" />
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
          <a-doption v-if="!store.state.user.loginUser" @click="userLogout">
            <icon-export />
            登出用户
          </a-doption>
          <a-doption v-else @click="goLogin">
            <icon-export />
            登陆用户
          </a-doption>
        </template>
      </a-dropdown>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { routes } from "@/router/routes";
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import checkAccess from "@/access/checkAccess";
import accessEnum from "@/access/accessEnum";
import { UserControllerService } from "../../generated";
import message from "@arco-design/web-vue/es/message";
import type { FileItem } from "@arco-design/web-vue/es/upload/interfaces";

const router = useRouter();
const store = useStore();

//展示在菜单的路由数组
const visibleRoutes = computed(() => {
  return routes.filter((item, index) => {
    if (item.meta?.hideInMenu) {
      return false;
    }
    //根据权限过滤菜单
    if (
      !checkAccess(store.state.user.loginUser, item?.meta?.access as string)
    ) {
      return false;
    }
    return true;
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
  if (res.code === 0) {
    router.push({
      path: "user/login",
      replace: true,
    });
  } else {
    message.error("登出失败" + res.message);
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
const userSetting = async () => {
  router.push({
    path: "user/setting",
    replace: true,
  });
};

/**
 * 头像逻辑 如果有头像返回头像url，否则返回 1
 */
const file = {
  url: store.state.user.loginUser?.userAvatar
    ? store.state.user.loginUser.userAvatar
    : 1,
};

/**
 * 用户是否登录
 */
const isUserLogin = {
  string: store.state.user?.loginUser.userName
    ? store.state.user.loginUser.userName
    : "未登录",
};

const fileList = ref<FileItem[]>([file]);
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
