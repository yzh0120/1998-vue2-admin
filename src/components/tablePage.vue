<template>
  <div class="box_table">
    <div class="top" ref="top">
      <slot name="form"></slot>
    </div>

    <div class="bottom" ref="boottom">
      <div :style="{ height: height }" class="bbb" v-if="tableChange">
        <slot name="table"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import elementResizeDetectorMaker from 'element-resize-detector'
export default {
  data() {
    return {
      tableChange: false,
      height: "0px"
    }
  },
  mounted() {
    const _this = this;
    const erd = elementResizeDetectorMaker()
    //监听top  只是为了在窗口变化的时候 改变 _this.height 然后触发
    erd.listenTo(_this.$refs.top, (element) => {
      console.log(_this.$refs.boottom.offsetHeight, "top.offsetHeight")
      _this.height = 0 + 'px'
      //this.tableChange = true
    })
    //监听bottom
    erd.listenTo(_this.$refs.boottom, (element) => {
      setTimeout(() => {
        console.log(element.offsetHeight, "bottom.offsetHeight")
        _this.height = element.offsetHeight + 'px'
        this.tableChange = true
      }, 100)
    })
  },
}
</script>

<style lang="scss" scoped>
.box_table {
  // background-color: green;
  height: calc(100vh - 130px);
  display: flex;
  flex-direction: column;

  // overflow-y: auto;
  .top {
    // background-color: red;
    // height: 200px;
  }

  .bottom {
    // overflow-y: auto;
    // background-color: yellow;
    flex-grow: 2;

    .bbb {
      overflow-y: auto;
      // background-color: aqua;
    }
  }
}
</style>
