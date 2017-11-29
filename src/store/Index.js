import Vue from 'vue';
import Vuex from 'vuex';
import * as i18n from '../i18n';
import {ENGLIST, CHINESE} from '../utils/constants'

Vue.use(Vuex);
const locale = localStorage.getItem('locale') || CHINESE;

export default new Vuex.Store({
  state: {
    user: {
      username: '',
      password: ''
    },
    i18n: {
      locale: locale,
      messages: {[CHINESE]: i18n[CHINESE], [ENGLIST]: i18n[ENGLIST]}
    }
  },

  mutations: {
    setState(state, payload) {
      Object.keys(payload).forEach(obj => {
        Object.keys(payload[obj]).forEach(key => {
          state[obj][key] = payload[obj][key];
        });
      });
    },
    setLocale(state, locale) {
      state.i18n.locale = locale;
      localStorage.setItem('locale', locale);
    }
  }
});
