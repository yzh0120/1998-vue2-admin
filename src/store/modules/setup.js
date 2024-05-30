/*
 * @Author: yz
 * @Date: 2022-09-05 09:46:35
 * @Description: 
 * 
 */
export default {
  namespaced: true, //带命名空间
  state: {
    appid: "jbw",
    // 窗口数据
    mobile: false,
    window_innerWidth: undefined,
    window_innerHeight: undefined,
  },
  // 只能通过此函数修改state的data
  mutations: {

    windowResize(state, params) { //是一个函数
      let {
        innerWidth,
        innerHeight
      } = window
      state.window_innerWidth = innerWidth
      state.window_innerHeight = innerHeight

      state.mobile = state.window_innerWidth < 992 ? true : false;
    },
  },
  // 异步
  actions: {

  },


}
