/*
 * @Author: Sunny
 * @Date: 2022-01-05 10:30:00
 * @LastEditors: Suuny
 * @LastEditTime: 2022-01-05 14:45:49
 * @Description: 侧边栏、设备
 * @FilePath: \vue-element-admin\src\store\modules\app.js
 */
import Cookies from 'js-cookie'

const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true, // 是否打开
    withoutAnimation: false // 是否有动画
  },
  device: 'desktop', // 设备
  size: Cookies.get('size') || 'medium' // 尺寸
}

// 同步
const mutations = {
  // 切换侧边栏
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
  // 关闭侧边栏
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  // 切换设备
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  // 设置尺寸
  SET_SIZE: (state, size) => {
    state.size = size
    Cookies.set('size', size)
  }
}

// 异步
const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  setSize({ commit }, size) {
    commit('SET_SIZE', size)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
