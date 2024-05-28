<template>
  <div>
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
  beforeDestroy() {
    // 销毁编辑器
    this.editor.destroy()
    this.editor = null
  }
  }
</script>

<style lang="scss" scoped>

</style>
