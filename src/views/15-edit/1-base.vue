<template>
  <div>
    <el-button type="primary" size="mini" @click="get">获取htmle</el-button>

    <div style="border: 1px solid #ccc;">
      <Toolbar   style="border-bottom: 1px solid #ccc" :editor="editor" :defaultConfig="toolbarConfig" :mode="mode" />
      <Editor style="height: 500px; overflow-y: hidden;" v-model="html" :defaultConfig="editorConfig" :mode="mode"
        @onCreated="onCreated" />
    </div>
  </div>
</template>

<script>
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
export default {
  components: { Editor, Toolbar },
  data() {
    return {
      editor: null,//编辑器实例
      html: '<p>hello</p>',
      toolbarConfig: {//工具栏配置  https://www.wangeditor.com/v5/toolbar-config.html
           // toolbarKeys: [ /* 显示哪些菜单，如何排序、分组 */ ],
        excludeKeys: [ "uploadVideo" ,"insertVideo","group-video"],
      },
      editorConfig: {//编辑器配置  https://www.wangeditor.com/v5/editor-config.html
        placeholder: '请输入内容...',
        // readOnly: true,
        MENU_CONF: {// 所有的菜单配置，都要在 MENU_CONF 属性下
          uploadImage: {
            // 小于该值就插入 base64 格式（而不上传），默认为 0
            base64LimitSize: 5 * 1024 * 100000000000 // 5kb
          }
        }
      },
      mode: 'default', // or 'simple'
    }
  },
  methods: {
    get() {
      console.log(this.editor.getHtml(), "getHtml")// 
    },
    onCreated(editor) {
      this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
      console.log(this.editor.getAllMenuKeys(),"------------")
    },
  },
  mounted() {
    /*
    相关事件 
       @onCreated="handleCreated"
        @onChange="handleChange"
        @onDestroyed="handleDestroyed"
        @onFocus="handleFocus"
        @onBlur="handleBlur"
        @customAlert="customAlert"
        @customPaste="customPaste"

this.editor相关api
https://www.wangeditor.com/v5/API.html#handletab

编辑器配置 
菜单配置 
    */
    // 模拟 ajax 请求，异步渲染编辑器
    setTimeout(() => {
      this.html = '<p>模拟 Ajax 异步设置内容 HTML</p>'

    }, 1500)
  },
  beforeDestroy() {
    const editor = this.editor
    if (editor == null) return
    editor.destroy() // 组件销毁时，及时销毁编辑器
  }
}
</script>

<style lang="scss" scoped></style>
<style src="@wangeditor/editor/dist/css/style.css"></style>
