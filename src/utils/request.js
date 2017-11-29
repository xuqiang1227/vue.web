import Vue from 'vue';

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response.body;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

export const get = ({url, params}) => {
  return Vue.http.get(url, {params}).then(checkStatus).then(data => data, error => Vue.$Message.error(error))
}
