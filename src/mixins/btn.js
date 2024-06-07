// import * as menu from "@/api/menu";
export default {
  data() {
    return {
      btnArr: [],
      // loading:false,
    }
  },
  mounted() {
    //如果需要按钮权限 
    if (this.btnPower) {
      // this.getAuthorizeButtonColumnList()
    }
  },
  methods: {
    getAuthorizeButtonColumnList() {
      let params = {
        enCode: this.$route.name
      }
      menu.getAuthorizeButtonColumnList(params).then((res) => {
        if (res.code == 200) {
          this.btnArr = res.data.moduleButtons
          /*
          
          <el-button type="primary" @click="look(row)" v-btn:detail="btnArr" v-if="type == `waitDo`">审核</el-button>

          [这个是moduleButtons的格式
            {     
              actionAddress: null
              enCode: "detail"         //重要
              fullName: "查看"
              icon: null
              moduleButtonId: "1476864088440242179"
              moduleId: "1463792099794251777"
              parentId: "0"
              sortCode: 1
            }
          ]
          */

          // if (res.data.moduleEntity?.isPermVerification) {
          //   console.log(this.gridOptions,"this.gridOptions")
          //   this.gridOptions.columns.forEach((item) => {

          //     res.data.moduleColumns.forEach((item2) => {
          //       if (item.type == "seq") {
          //         this.tableArr.push(item)
          //       }
          //       if (item.field == item2.enCode) {
          //         this.tableArr.push(item)
          //       }
          //     })
          //   })
          //   this.gridOptions.columns = this.tableArr
          // }


        } else {
          this.$message.error(res.info)
        }
      })
    },
  },
  directives: {
    // 注册一个局部的自定义指令 v-focus
    //<el-button type="primary"  v-btn:detail="btnArr" >审核</el-button>
    btn: {
      // 统一全部隐藏 
      bind: function (el) {//bind 钩子函数会立即执行
        console.log(el.tagName,"el.tagName")
        //如果指令绑定的是button则禁用
        if (el.tagName == "BUTTON") {
          el.setAttribute("disabled", "disabled")
          el.classList.add("is-disabled")
        } else {
          //如果是其他标签则隐藏
          el.style.display = "none"
        }
      },
      update: function (el, binding, vnode) {//update只会等到btnArr变化了才会执行
        // el是dom
        /*
        binding.value 是 this.btnArr(后台获取的数组)
        binding.arg 是 指令冒号后面的字符串 :-->detail
        */
        console.log(binding,"binding")
        //如果指令绑定的值(btnArr)是一个对象(包括数组)
        if (typeof binding.value == 'object') {
          //循环数组
          for (let i = 0; i < binding.value.length; i++) {
            //如果数组中的对象有一个的enCode等于 自定义指令绑定的参数 (v-btn:detail="btnArr" 的detail)
            if (binding.value[i].enCode == binding.arg) {
              //按钮恢复点击
              if (el.tagName == "BUTTON") {
                el.removeAttribute("disabled")
                el.classList.remove("is-disabled")
              } else {
                el.style.display = "inline-block"
              }
            }
          }
        }

      }
    },
    //元素拖动
    drag: {
      bind: function (el, binding) {
        let oDiv = el; //当前元素
        let self = this; //上下文
        let firstTime = '',
          lastTime = '';
        oDiv.onmousedown = function (e) {
          oDiv.setAttribute("data-flag", false)
          firstTime = new Date().getTime();
          //鼠标按下，计算当前元素距离可视区的距离
          let disX = e.clientX - oDiv.offsetLeft;
          let disY = e.clientY - oDiv.offsetTop;
          document.onmousemove = function (e) {
            //通过事件委托，计算移动的距离 
            let l = e.clientX - disX;
            let t = e.clientY - disY;
            //移动当前元素  
            let winWidth = document.documentElement.clientWidth || document.body.clientWidth
            let winHeight = document.documentElement.clientHeight || document.body.clientHeight
            if (l + el.offsetWidth >= winWidth) {
              l = winWidth - el.offsetWidth
            }
            if (l <= 0) {
              l = 0
            }
            if (t <= 0) {
              t = 0
            }
            if (t + el.offsetHeight >= winHeight) {
              t = winHeight - el.offsetHeight
            }
            oDiv.style.left = l + 'px';
            oDiv.style.top = t + 'px';
          };
          document.onmouseup = function (e) {
            document.onmousemove = null;
            document.onmouseup = null;
            lastTime = new Date().getTime();
            if ((lastTime - firstTime) < 200) {
              oDiv.setAttribute('data-flag', true)
            }
          };
        };
      },
    }
  },
}
