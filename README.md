# 电子投标保函面客端web开发说明

### 1、项目介绍
该项目是一个基于 [vue2](https://cn.vuejs.org) + [elementui](https://element.eleme.cn/) + [vxe-table](https://vxetable.cn/) 开发的前后端分离的项目。

### 2、使用说明
```
- node版本 > v12.0.0
- IDE推荐：Visual Studio Code
```
> 目前开发使用的node版本：v12.22.3
> 使用 Visual Studio Code 的 vue 代码高亮插件为volar/vetur

### 3、项目依赖安装和启动
#### 3.1 安装依赖
```
npm install
or
yarn
```

#### 3.2 启动项目
```
npm run dev
or
yarn dev
```

#### 3.3 打包项目
```
npm run build
or
yarn build
```
> 使用yarn时，需安装[yarn](https://gitee.com/mirrors/yarn/releases)。
> 推荐使用yarn。

### 4、项目目录结构
```
├── public
│   ├── favicon.ico                     -- 网址浏览器图标
│   ├── index.html                      -- 主页面
├── src                                 -- 源代码
│   ├── api                             -- api 组
│   ├── App.vue                         -- 入口页面
│   ├── assets                          -- 静态资源
│   ├── components                      -- 全局组件
│   ├── config                          -- 配置
│   ├── icons                           -- svg组件
│   ├── layout                          -- 模板
│   ├── mixins                          -- mixins
│   ├── router                          -- 路由声明文件
│   │   └── index.js
│   ├── main.js                         -- 主文件
│   ├── store                           -- vuex 状态管理器
│   │   └── index.js                    -- 入口文件
│   ├── styles                          -- 全局样式
│   │   ├── app.scss
│   │   ├── table.css
│   │   └── var.scss
│   ├── utils                           -- 方法工具库
│   │   ├── auth.js                     -- 设置cookie和localStorage
│   │   ├── aes.js                      -- aes加解密
│   │   ├── baseFn.js                   -- 全局公共方法
│   │   ├── elerequest.js               -- http封装
│   │   ├── request.js                  -- 面客端http封装
│   │   └── validate.js                 -- 校验规则
|   ├── view                            -- 主要view代码
|   |   ├── components                  -- 电子投标保函
|   |   |   ├── filelist                -- 附件展示
|   |   |   └── upload                  -- 上传组件
|   |   ├── auditdata                   -- 提交申请资料
|   |   ├── claims                      -- 理赔申请
|   |   ├── custNo                      -- 项目已取消
|   |   ├── financial                   -- 金融机构审核
|   |   ├── guarantee                   -- 出具保函
|   |   ├── home                        -- 首页 
|   |   ├── invoice                     -- 开票资料 
|   |   ├── letterinfo                  -- 开函信息 
|   |   ├── payment                     -- 支付保费 
|   |   ├── sendletter                  -- 确认出函机构 
|   |   └── sign                        -- 签约流程 
├── .env                                -- 公共配置
├── .env.development                    -- 开发环境配置
├── .env.production                     -- 生产环境配置
├── .env.productiontest                 -- 预发布环境配置
├── .env.productiontest                 -- 测试环境配置
├── .gitignore                          -- 忽略文件配置
├── babel.config.js                     -- Babel配置文件
├── jsconfig.json                       -- 功能选项
├── package.json                        -- 包管理器代码
├── vue.config.js                       -- vue 配置文件
└── yarn.lock
```
