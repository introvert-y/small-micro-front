import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getter';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

const modulesFiles = require.context('./modules', true, /\.js$/);

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});
console.log('store modules', modules);
const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage,
});

const store = new Vuex.Store({
  modules,
  getters,
  plugins: [vuexLocal.plugin]
});

// 刷新时保存vuex缓存
// const key = 'LOCAL_VUEX_STORE';

// window.addEventListener('beforeunload', () => {
//   localStorage.setItem(key, JSON.stringify(store.state));
// });

// if (localStorage.getItem(key)) {
//   store.replaceState(Object.assign({}, store.state, JSON.parse(localStorage.getItem(key))));
// }
// localStorage.removeItem(key);

export default store;
