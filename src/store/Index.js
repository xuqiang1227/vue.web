import Vue from 'vue';
import Vuex from 'vuex';
import * as i18n from '../i18n'

Vue.use(Vuex);
const locale = localStorage.getItem('locale') || 'zh_CN';

export default new Vuex.Store({
  state: {
    user: {
      username: '',
      password: ''
    },
    i18n: {
      locale: locale,
      messages: {[locale]: i18n[locale]}
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
      state.i18n.messages = i18n[locale];
      localStorage.setItem('locale', locale);
    }
  }
});
