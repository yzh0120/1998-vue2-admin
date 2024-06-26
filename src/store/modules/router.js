import baseRoutes  from '@/router/baseRoutes'

export default {
  namespaced: true,
  state: {
    //此角色全部的路由
    routes:[],
  },
  mutations: {
    //记录此角色全部的路由,方便在left菜单展示 仅一次
    m_set_routes: (state, params) => { 
      state.routes = baseRoutes.concat(params)
    },
  },

  actions: {
    //第一次登录的时候获取 角色的权限相匹配的路由
    a_HeBingRoleRoutes({
      commit
    }, list) {
      return new Promise(resolve => {
        //1-递归后台传来的多维路由，替换字段
        let tempRoutes = replaceField(list) //change(translateDataToTree(list))
         //记录此角色全部的路由,方便在left菜单展示 仅一次
        commit('m_set_routes', tempRoutes)
        //返回出去 ,方便router.addRoutes() 合并到路与
        let otherRoutes = [{
          path: '*',
          redirect: '/404',
          meta: {
            hidden: true,
          },
        }]
         resolve(filterAsyncRoutes(tempRoutes).concat(otherRoutes))//resolve(filterAsyncRoutes(tempRoutes).concat(otherRoutes))
      })
    }
  },
}



//1-递归后台传来的多维路由，替换字段
function replaceField(asyncRouterMap) {
  let arr = [];
  asyncRouterMap.filter(route => {
    let obj = {
      meta: {}
    };
    if (route.target) {
      obj.name = route.enCode//必须唯一因为在左侧菜单组件中是key
      obj.meta.title = route.fullName//标题
      obj.meta.icon = route.icon//图标
      obj.path = route.urlAddress//路径
      obj.meta.hidden = !route.isMenu//是否隐藏
      obj.component = route.target//组件
    }
    // console.log(route.children, "obj.children")
    if (route.children && route.children.length) {
      obj.children = replaceField(route.children)

    }
    arr.push(obj)
    return true
  })
  return arr
}


//2-将数据处理成符合vue结构的数据
function filterAsyncRoutes(routes) {
  const res = []

  routes.filter(route => {
    const tmp = {
      ...route
    }
    // console.log(tmp.component, tmp.meta && tmp.meta.title, "tmp.component")
    if (tmp.component == "layout") { //布局
      tmp.component = layout;
    } else if (tmp.component == "blank") {
      tmp.component = blank;
    } else {
      tmp.component =  () => import('@/views/' + tmp.component + '.vue')
    }

    if (tmp.children && tmp.children.length) {
      tmp.children = filterAsyncRoutes(tmp.children)
    }
    res.push(tmp)
    return true
  })
  return res
}
