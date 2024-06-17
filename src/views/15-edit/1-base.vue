<template>
  <div>
  <el-button type="primary" size="default" @click="ggg">获取html</el-button>
  
    <p>
        container 和 toolbar 分开
    </p>
    <div>
        <div ref="toolbar" class="toolbar"></div>
        <p>------ 我是分割线 ------</p>
        <div ref="text" class="text"></div>
    </div>
  </div>
</template>

<script>
//https://www.wangeditor.com/v4/pages/01-%E5%BC%80%E5%A7%8B%E4%BD%BF%E7%94%A8/06-zIndex.html
import E from 'wangeditor'
export default {
  data() { 
    return {
      editor:null
    }
  },
    mounted() {
      this.editor = new E(this.$refs.toolbar, this.$refs.text)
      //菜单栏
      this.editor.config.menus = [
      'head',
      'bold',
      'fontSize',
      'fontName',
      'italic',
      'underline',
      'strikeThrough',
      'indent',
      'lineHeight',
      'foreColor',
      'backColor',
      'link',
      'list',
      'todo',
      'justify',
      'quote',
      'emoticon',
      'image',
      // 'video',
      'table',
      'code',
      // 'splitLine',
      'undo',
      'redo',
      ]
      this.editor.config.uploadImgShowBase64  = true
      //编辑器 z-index 默认为 10000，可以自行调整。
      this.editor.config.zIndex = 3;
      //创建
      this.editor.create();

      //设置为只读模式
      //this.editor.disable()

      //设置文本
      this.editor.txt.html("文本")

       // 获取text
      //this.editor.txt.text() 

      //清空内容
      // this.editor.txt.clear()
  },
  methods: {
    ggg(){
      console.log(this.editor.txt.html())
    },
  },
  beforeDestroy() {
    // 销毁编辑器
    this.editor.destroy()
    this.editor = null
  }
  }
</script>

<style lang="scss" scoped>

.toolbar {
            border: 1px solid #ccc;
        }
        .text {
            border: 1px solid #ccc;
            min-height: 400px;
        }

</style>
