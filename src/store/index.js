import Vue from 'vue'
import Vuex from 'vuex'
import auth from '../modules/auth';
import VuexPersistence from 'vuex-persist';
import createMultiTabState from 'vuex-multi-tab-state';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['auth']
})

export default new Vuex.Store({
  state: {
   //guardas los datos que quieres esten disponibles
  },
  mutations: {
   //
  },
  actions: {
    
  },
  modules: {
    auth,
  },
  plugins: [vuexLocal.plugin, createMultiTabState()]
})
