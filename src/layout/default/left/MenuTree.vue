<template>
  <div class="menuTree">
    <label v-for="item in data" :key="item.path">
      <!-- //是否隐藏 -->
      <template v-if="isHidden(item)">
        <!-- 有多个子菜单 v-if="item.children && item.meta"   item.meta 是为了防止 1父 1子-->
        <el-submenu v-if="open(item)" :index="bindingName(item)">
          <template slot="title">
            <svgIcon :icon="showIcon(item)" className="titile-left-icon" v-if="item.meta.icon"></svgIcon>
            <span class="menu-text">{{ item.meta.title }}</span>
          </template>
          <menutree :data="item.children" class="nest-menu" />
        </el-submenu>

        <!-- 没有多个子菜单 -->
        <el-menu-item v-else :index="bindingName(item)">
          <svgIcon :icon="showIcon(item)" className="titile-left-icon"></svgIcon>
          <span slot="title">
            <span class="menu-text">{{ showTitle(item) }}</span>
          </span>
        </el-menu-item>
      </template>

    </label>
  </div>
</template>


<script>
export default {
  name: "Menutree",
  props: {
    data: {
      type: Array,
      required: true,
    },
    // active: {
    //   type: String,
    //   default: "",
    // },
  },
  methods: {

    showTitle(item) { //展示meta的信息
      if (this.onlyOneChilren(item.children)) {//只有一个可以显示的子菜单
        return this.getFirstNoHidden(item.children).meta.title;
      } else {
        return item.meta.title;
      }
    },
    showIcon(item) { //展示Ico的信息
      if (this.onlyOneChilren(item.children)) {//只有一个可以显示的子菜单
        return this.getFirstNoHidden(item.children).meta.icon
      } else {
        return item.meta.icon
      }
    },
    bindingName(item) { //bind name
      if (item.children) { //如果有children ,兼容 类似于首页这种结构,优先展示 第一级 children的name
        return this.getFirstNoHidden(item.children).name
      } else {
        return item.name;
      }
      // return item.name;
    },
    open(item) {//展开目录     && item.children.length > 1
      //子节点只有一个展示的目录
      if (this.onlyOneChilren(item.children)) {//只有一个显示的目录   (要么全部都是隐藏(没有children) 要么至少有两个)
        return false
      } else if (item.children) {
        return true
      } else {
        return false
      }

    },
    isHidden(item) {//是否隐藏
      return item.meta && !item.meta.hidden
    },

    //工具类
    onlyOneChilren(arr) {//至少有两个不被隐藏的子目录,使用这个方法前 确保item.chilrem有值
      if (arr && arr.length) {
        let count = arr.length
        arr.forEach((item) => {
          if (item.meta.hidden) {
            count--
          }
        })

        let onlyOneChilren = false;
        let onlyOneChilrenNoChilren = false
        if (count == 1) {
          onlyOneChilren = true
        } else {
          onlyOneChilren = false
        }
        if (onlyOneChilren) {//确保只有一个 没有被隐藏的children
          arr.forEach((item) => {
            if (!item.meta.hidden) {
              //没有 子菜单 或者子菜单全部是隐藏
              if (!item.children || item.children.every((i) => { return i.meta.hidden })) {
                onlyOneChilrenNoChilren = true
              }
            }
          })
        }
        if (onlyOneChilren && onlyOneChilrenNoChilren) {
          return true
        }

      } else {
        return false
      }

    },
    getFirstNoHidden(item) {//得到第一个没有被隐藏的
      if (item) {
        return item.find((item) => {
          return !item.meta.hidden
        })
      }
    },
  },
};
</script> 








