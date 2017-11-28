import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      username: '',
      password: ''
    }
  },

  mutations: {
    setState(state, payload) {
      Object.keys(payload).forEach(obj => {
        Object.keys(payload[obj]).forEach(key => {
          state[obj][key] = payload[obj][key];
        });
      });
    }
  }
});
