/*
 * @Author: Sunny
 * @Date: 2022-01-05 10:30:00
 * @LastEditors: Suuny
 * @LastEditTime: 2022-01-05 14:29:32
 * @Description: vuex导入文件
 * @FilePath: \vue-element-admin\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

// 把 modules 下的 js 文件全部导入
const modulesFiles = require.context('./modules', true, /\.js$/)
console.log()

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)

  // console.log(moduleName, value)

  modules[moduleName] = value.default
  // console.log('modules', modules)
  return modules
}, {})

const store = new Vuex.Store({
  modules,
  getters
})

export default store
