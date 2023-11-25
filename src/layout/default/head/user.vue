<template>
  <div class="layout-navbars-user">

    <el-dropdown :show-timeout="70" :hide-timeout="50" @command="onDropdownCommand">
      <span class="layout-navbars-user-link">
        {{ userInfo.userName }}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="/">首页</el-dropdown-item>
        <el-dropdown-item divided command="/personalCenter/index">个人中心</el-dropdown-item>
        <el-dropdown-item divided command="logOut">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
// import { removeCookie, setCookie, getCookie } from "@/utils/auth";
import * as cookieFn from '@/utils/cookie.js';
import keepAlive from "@/mixins/keepAlive";
export default {
  name: "user",
  mixins: [keepAlive],
  computed: {
    userInfo() {
      console.log(this.$store.getters.userInfo);
      return this.$store.getters.userInfo;
    },
  },

  data() {
    return {
      userName: localStorage.getItem("username"),
      disabledSize: cookieFn.getCookie("elsize") || "",
    };
  },
  methods: {
    // `dropdown 下拉菜单` 当前项点击
    onDropdownCommand(path) {
      if (path == "logOut") {
        cookieFn.removeCookie(process.env.VUE_APP_TOKEN);
        this._closeAllTagsView(this.$route)
        this.$store.state.router.routes = []//
        this.$router.push({ name: "login" }).then(() => {
          // window.location.reload();
        });
      } else {
        this.$router.push(path);
      }
    },


    onComponentSizeChange(size) {
      this.$ELEMENT.size = size;
      cookieFn.setCookie("elsize", size);
      switch (size) {
        case "":
          this.disabledSize = "";
          break;
        case "medium":
          this.disabledSize = "medium";
          break;
        case "small":
          this.disabledSize = "small";
          break;
        case "mini":
          this.disabledSize = "mini";
          break;
      }
      window.location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes logoAnimation {
  0% {
    transform: scale(0);
  }

  80% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}

.layout-navbars-user {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  &-icon {
    padding: 0 10px;
    cursor: pointer;
    // color: var(--bg-topBarColor);
    height: 50px;
    line-height: 50px;
    display: flex;
    align-items: center;

    &:hover {
      background: rgba(0, 0, 0, 0.04);

      .svg-icon {
        display: inline-block;
        animation: logoAnimation 0.3s ease-in-out;
      }
    }
  }

  &-link {
    display: flex;
    height: 100%;
    align-items: center;
    white-space: nowrap;

    &-photo {
      width: 25px;
      height: 25px;
      border-radius: 100%;
    }
  }
}
</style>
