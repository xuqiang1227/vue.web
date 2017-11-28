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
      messages: {'zh_CN': i18n['zh_CN'], 'en_US': i18n['en_US']}
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
