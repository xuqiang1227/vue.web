import Vue from 'vue'

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response.body
  }
  const error = new Error(response.statusText)
  error.response = response
  throw error
}

export const get = ({url, params}) => {
  return Vue.http.get(url, {params}).then(checkStatus).then(data => data, error => Vue.$Message.error(error))
}

export const post = ({url, body, params}) => {
  return Vue.http.post(url, {body}, {params}).then(checkStatus).then(data => data, e => Vue.$Message.error(e))
}

export const put = ({url, body, params}) => {
  return Vue.http.put(url, {body}, {params}).then(checkStatus).then(data => data, e => Vue.$Message.error(e))
}

export const $delete = ({url, params}) => {
  return Vue.http.delete(url, {params}).then(checkStatus).then(data => data, error => Vue.$Message.error(error))
}

export const patch = ({url, body, params}) => {
  return Vue.http.put(url, {body}, {params}).then(checkStatus).then(data => data, e => Vue.$Message.error(e))
}

//获取URL地址的参数值。
//name为URL参数名
//例如：?param1=abc&param2=123
//当调用GetURLparam("param2"）时，获取到的值为：123
export const getUrlParam = (name) => {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
  const r = window.location.search.substr(1).match(reg);
  if (r !== null) return r[2];
  return null;
}
