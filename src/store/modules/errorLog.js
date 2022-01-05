/*
 * @Author: Sunny
 * @Date: 2022-01-05 10:30:00
 * @LastEditors: Suuny
 * @LastEditTime: 2022-01-05 15:02:08
 * @Description:
 * @FilePath: \vue-element-admin\src\store\modules\errorLog.js
 */
const state = {
  logs: []
}

const mutations = {
  // 存储错误信息
  ADD_ERROR_LOG: (state, log) => {
    state.logs.push(log)
  },
  // 清空错误信息
  CLEAR_ERROR_LOG: (state) => {
    state.logs.splice(0)
  }
}

const actions = {
  addErrorLog({ commit }, log) {
    commit('ADD_ERROR_LOG', log)
  },
  clearErrorLog({ commit }) {
    commit('CLEAR_ERROR_LOG')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
