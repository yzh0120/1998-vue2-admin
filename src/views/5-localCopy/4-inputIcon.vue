<template>
  <page>
    <base-form :data="form" ref="form" @event="formEvent">
      <template #mySlot>
        <el-popover placement="bottom" width="300" v-model="fontIconVisible" trigger="click">
          <div class="icon-selector-warp">
            <el-row :gutter="10" v-if="fontIconSheetsList.length > 0">
              <el-col :xs="6" :sm="4" :md="4" :lg="4" :xl="4" v-for="(v, k) in fontIconSheetsList" :key="k">
                <div class="icon-selector-warp-item" @click="selectIcon(v)"
                  :class="{ 'icon-selector-active': fontIconPrefix === v }">
                  <div class="flex-margin">
                    <div class="icon-selector-warp-item-value">
                      <!-- <i :class="v" /> -->
                      <svgIcon :icon="v" ></svgIcon>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>

          <el-input slot="reference" v-model.trim="form.data.icon" placeholder="请输入菜单图标">
            <template slot="prepend">
              <!-- <i class="fa-lg" :class="fontIconPrefix" /> -->
              <svgIcon :icon="fontIconPrefix" ></svgIcon>
            </template>
          </el-input>
        </el-popover>
      </template>
    </base-form>
  </page>
</template>

<script>
export default {
  data() {
    let self = this;
    return {
      fontIconSheetsList: ["shijian", "RDCIconDashboard"],
      fontIconPrefix: "",
      fontIconVisible: false,


      form: {
        list: [


          { slot: "mySlot", field: "icon", title: "菜单图标" },
        ],
        data: {icon:null},
        titleWidth: "160px",
      },
    };
  },
  mounted() {

  },
  methods: {
    selectIcon(icon) {
      this.fontIconVisible = false;
      this.fontIconPrefix = icon;
      this.$nextTick(() => {
        this.form.data.icon = icon;
      })
      this.$refs.form.$refs.form.clearValidate(['icon'])
    },
    formEvent(e) {
      console.log(e, "表单事件");
      if (e.item.field == "_input_btn") {
        if ((e.name = "btn")) {
          console.log(this.form.data);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
<style lang="scss" scoped>
.icon-selector-warp {
  height: 260px;
  overflow-x: hidden;
}
.icon-selector-warp-item {
  display: flex;
  border: 1px solid #f5f7fa;
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 10px;
}
.icon-selector-active {
  background-color: #ecf5ff;
  border: 1px solid #b3d8ff;
}
.flex-margin {
  margin: auto;
}

.icon-selector-warp-item .icon-selector-warp-item-value i {
  font-size: 20px;
  color: #606266;
}
.icon-selector-active .icon-selector-warp-item-value i {
  color: #409eff;
}
</style>
