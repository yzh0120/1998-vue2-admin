export default {
  namespaced: true,
  state: {
    userInfo: {},
  },
  mutations: {
    m_set_userInfo(state, data) {
      state.userInfo = data
    },
  },
  actions: {
    a_set_userInfo({
      commit
    }, data) {
      commit('m_set_userInfo', data)
    }
  }
}
