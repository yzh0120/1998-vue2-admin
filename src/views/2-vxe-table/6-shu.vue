<template>
  <page>
    <el-button @click="add">新增</el-button>
    <!-- 表格 -->


    <div class="flex">
      <vxe-grid class="reverse-table" v-bind="gridOptions1" style="width:50%;" :auto-resize="true">
        <template #demo="{ row, columnIndex }">
          <div>
            <!-- 
            columnIndex  代表了第几列  
            col${index}   是代表了第几行的值
           -->
            <!-- <div v-if="columnIndex == 1">
            <span v-if="row.col0 == '科目'">{{eval(`row.col${columnIndex}`)  }}</span>
            <span v-else>{{row.col1 | formatMoney}}</span>
          </div>
          <div v-else-if="columnIndex == 2">
            <span v-if="row.col0 == '科目'">{{row.col2 }}</span>
            <span v-else>{{row.col2 | formatMoney}}</span>
          </div>
          <div v-else-if="columnIndex == 3">
            <span v-if="row.col0 == '科目'">{{row.col3 }}</span>
            <span v-else>{{row.col3 | formatMoney}}</span>
          </div> -->

            <span v-if="row.col0 == '科目'">{{ eval(row, columnIndex) }}</span>
            <span v-else>{{ eval(row, columnIndex) }}</span>

            <el-button type="text" v-if="row.col0 == '科目'" @click="edit(row, columnIndex)">编辑</el-button>
            <el-button type="text" v-if="row.col0 == '科目'" @click="del(row, columnIndex)">删除</el-button>
          </div>
        </template>
      </vxe-grid>
      <vxe-grid class="reverse-table" v-bind="gridOptions2" style="width:50%;" :auto-resize="true">
        <template #demo="{ row, columnIndex }">
          <div>
            <span v-if="row.col0 == '科目'">{{ eval(row, columnIndex) }}</span>
            <span v-else>{{ eval(row, columnIndex) }}</span>
            <!-- <el-button type="text" v-if="row.col0 == '科目'" @click="edit(row, columnIndex)">编辑</el-button>
            <el-button type="text" v-if="row.col0 == '科目'" @click="del(row, columnIndex)">删除</el-button> -->
          </div>
        </template>
      </vxe-grid>
    </div>
    <!-- 弹窗 -->
    <alert :data="alertData" @cancel="alertCancel" @close="alertCancel" @confirm="alertConfirm">
      <base-form :data="formData" ref="form"></base-form>
    </alert>
  </page>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        list: [
          { type: "input", field: "statDate", title: "科目" },
          { type: "input", field: "moneyFunds", title: "货币资金1" },
          { type: "input", field: "moneyFunds2", title: "货币资金2" },
        ],
        data: {},
      },
      alertData: {
        alert: false,
        // width: "1066px",
        // height: "800px",
        title: "基础弹窗",
      },
      //列表1
      gridOptions1: {
        border: false,
        showOverflow: false,
        // height: 400,
        showHeader: false,
        columns: [],
        data: [],
      },
      //列表2
      gridOptions2: {
        border: false,
        showOverflow: false,
        // height: 400,
        showHeader: false,
        columns: [],
        data: [],
      },
      //这个是给reverseTable使用的  gridOptions1的字段
      columnsList: [
        { field: "statDate", title: "科目" },
        { field: "moneyFunds", title: "货币资金1" },
      ],
      //这个是给reverseTable使用的  gridOptions2的字段
      columnsList2: [
        { field: "moneyFunds2", title: "货币资金2" },
      ],
      mytableDataList: [], //这个是给reverseTable使用的  所有table的数据
    };
  },
  created() {
    this.getData();
  },
  methods: {
    //获取数据
    getData() {
      this.reverseTable(this.columnsList, this.mytableDataList, 1);
      this.reverseTable(this.columnsList2, this.mytableDataList, 2);
    },
    //弹窗
    add() {
      this.alertData.alert = true;
    },
    //编辑某行
    edit(row, columnIndex) {
      this.alertData.alert = true;
      this.formData.data = this.$fn.deepClone(
        this.mytableDataList[columnIndex - 1]
      );
    },
    //删除某行
    del(row, columnIndex) {
      this.mytableDataList.splice(columnIndex - 1, 1)
      // this.gridOptionsHead.data = this.$fn.deepClone(this.mytableDataList) // 这是普通表格
      this.getData()
    },
    // 弹窗取消
    alertCancel() {
      this.formData.data = {}
      this.alertData.alert = false;
    },
    // 弹窗确认
    alertConfirm() {
      if (this.formData.data.id) {//编辑
        let index = this.mytableDataList.findIndex((e) => {
          return e.id == this.formData.data.id
        })
        this.mytableDataList.splice(index, 1, this.$fn.deepClone(this.formData.data))
      } else { //新增
        this.formData.data.id = new Date().getTime()
        this.mytableDataList.push(this.$fn.deepClone(this.formData.data));
      }
      console.log(this.$fn.deepClone(this.formData.data), "this.$fn.deepClone(this.formData.data)")

      // this.gridOptionsHead.data = this.$fn.deepClone(this.mytableDataList)


      this.getData();
      this.alertCancel()
    },

    eval(row, columnIndex) {
      return row[`col${columnIndex}`];
    },

    // 反转函数  设置竖向表格的方法
    reverseTable(columnsList, list, num) {
      const buildData = columnsList.map((column) => {
        const item = { col0: column.title };
        list.forEach((row, index) => {
          item[`col${index + 1}`] = row[column.field];
        });
        return item;
      });
      const buildColumns = [
        {
          field: "col0", //col0 是标题
          fixed: "left",
          width: 80,
        },
      ];
      list.forEach((item, index) => {
        buildColumns.push({
          field: `col${index + 1}`,
          minWidth: 120,
          slots: {
            default: "demo",
          },
        });
      });
      console.log(buildData, "buildData", buildColumns);
      this[`gridOptions${num}`].data = buildData;
      this[`gridOptions${num}`].columns = buildColumns;
      /*
      在没有数据的情况下
        buildData :[
          {
            col0: "科目"
            _XID: "row_133"
          },
          {
            col0: "货币资金"
            _XID: "row_134"
          }
        ]

        buildColumns:[
          {              
            field: "col0"
            fixed: "left"
            width: 80
          },
        ]
      */
      /*
      在有数据的情况下
        buildData :[
          {
            col0: "科目"   //这是来自this.columnsList的标题
            col1: "科目1"  //这是手动填写的
            col2: "科目2"  //这是手动填写的
            _XID: "row_133"
          },
          {
            col0: "货币资金"   //这是来自this.columnsList的标题
            col1: "货币资金1"  //这是手动填写的
            col2: "货币资金2"  //这是手动填写的
            _XID: "row_134"
          }
        ]

        buildColumns:[
          {               //这是title
            field: "col0"
            fixed: "left"
            width: 80
          },
          {               //这是手动填写的
            field: "col1"
            minWidth: 120,
            slots: {
              default: "demo",
            },
          },
          {                //这是手动填写的
            field: "col2"
            minWidth: 120,
            slots: {
              default: "demo",
            },
          }
        ]
      */
      // this.gridOptions.data = buildData;
      // this.gridOptions.columns = buildColumns;

      

    },
  },
};
</script>

<style>
.reverse-table .vxe-body--row .vxe-body--column:first-child {
  background-color: #f8f8f9;
}



</style>

<style scoped lang="scss">
.flex {
  display: flex;
  justify-content: space-between;
}
</style>
