<template>
  <page>
    <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic" >
      <!-- 邮箱 -->
      <el-form-item prop="email" label="邮箱" :rules="[{ required: true, message: '请输入邮箱地址', trigger: 'blur' } ]">
        <el-input v-model="dynamicValidateForm.email"></el-input>
      </el-form-item>
      <!-- 域名 -->
      <!-- <el-form-item
        v-for="(domain, index) in dynamicValidateForm.domains"
        :label="'域名' + index"
        :key="domain.key"
        :prop="`domains.${index}.value`"
        :rules="{
          required: true,
          message: '域名不能为空',
          trigger: 'blur',
        }"
      >
        <el-input v-model="domain.value"></el-input
        ><el-button @click.prevent="removeDomain(domain)">删除</el-button>
      </el-form-item> -->

      <el-row :gutter="20" v-for="(domain, index) in dynamicValidateForm.domains" :key="index">
                  <!-- 域名 -->
        <el-col :span="8">
          <el-form-item :label="'域名1' + index" :prop="`domains.${index}.value1`" :rules="{required: true,message: '域名不能为空',trigger: 'blur',}">
            <el-input v-model="domain.value1"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item :label="'域名2' + index" :prop="`domains.${index}.value2`" :rules="{required: true,message: '域名不能为空',trigger: 'blur',}">
            <el-input v-model="domain.value2"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item :label="'域名3' + index" :prop="`domains.${index}.value3`" :rules="{required: true,message: '域名不能为空',trigger: 'blur',}">
            <el-input v-model="domain.value3"></el-input>
            <el-button @click.prevent="removeDomain(domain)">删除</el-button>
          </el-form-item>
        </el-col>

      </el-row>
      <!-- 按钮 -->
      <el-form-item>
        <el-button type="primary" @click="submitForm('dynamicValidateForm')"
          >提交</el-button
        >
        <el-button @click="addDomain">新增域名</el-button>
        <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </page>
</template>

<script>
export default {
  data() {
    return {
      dynamicValidateForm: {
        //这是动态表单的对象,动态新增和删除都操作这个对象
        domains: [
          {
            value: "",
          },
        ],
        email: "",
      },
    };
  },
  methods: {
    //提交
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //移除
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    //增加
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value1: "",
        value2: "",
        value3: "",
        key: Date.now(),
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
