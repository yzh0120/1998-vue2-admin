<template>
  <div :class="[`pager`,fixed?`fixed`:``]">
          <el-pagination
          background
      @current-change="handleCurrentChange"
       @size-change="handleSizeChange"
        :current-page="data.pageNo"
      :page-sizes="[10, 20, 30, 40]"
        :page-size="data.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="data.total">
      </el-pagination>
  
  </div>
  </template>
  <!-- 
    <pager :data="pagerData"  @pageChange="()=>{getData()}" @sizeChange="()=>{getData()}"/>
      入参 :
      pagerData: {
          pageNo: 1,//第一页
          pageSize:20,//每页显示20张
          total: 100,//总数
      },
      暴露事件 :
      methods:{
        getData(){
          
        },
      },
    
      
   -->
  <script> 
  export default {
    // props:['data'],
    props: {
      data: {
        type: Object,
        default: () => { 
          return {

          }
        }
      },
      fixed: {
        type: Boolean,
        default:false,
      },
    },
      methods:{
      //当前页
          handleCurrentChange(val){
        
        this.data.pageNo = val//更改当前页面
              this.$emit('pageChange',val)
          },
       handleSizeChange(val) {
        this.data.pageNo = 1
        this.data.pageSize = val
        this.$emit('sizeChange',val)
      }
      }
  }
  </script>
  
  <style lang="scss" scoped>
    .pager{
    background-color: white !important;
  }
  .fixed{
    position: fixed;
    bottom: 0px;
    right: 0;
    z-index: 99999999999999999;
  }
  </style>
