import accessEnum from "@/access/accessEnum";
import store from "@/store";
import router from "@/router";
import checkAccess from "@/access/checkAccess";

router.beforeEach(async (to, from, next) => {
  //仅管理员可见，判断当前用户是否有权限
  console.log("获取用户登陆信息", store.state.user.loginUser);
  const loginUser = store.state.user.loginUser;
  //如果之前未登录，则自动登陆
  if (!loginUser || !loginUser.userRole) {
    //加上 await 是为了等用户登陆成功后，再执行后面的代码
    await store.dispatch("user/getLoginUser");
  }
  const needAccess = (to.meta?.access as string) ?? accessEnum.NOT_LOGIN;
  //需要跳转的页面必须登陆
  if (needAccess !== accessEnum.NOT_LOGIN) {
    //如果没登陆，跳转到登陆页面
    if (!loginUser || !loginUser.userRole) {
      next(`user/login?redirect=${to.fullPath}`);
      return;
    }
    //如果已经登陆，但权限不足，则跳转无权限页面
    if (!checkAccess(loginUser, needAccess)) {
      next("/noAuth");
      return;
    }
  }
  next();
});
