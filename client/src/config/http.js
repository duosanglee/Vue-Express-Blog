import axios from 'axios'
import qs from 'qs'
// import router from '../router'
import {
  baseURL
} from '@/config/env'
// import store from '../store'

axios.defaults.baseURL = baseURL

// http request 拦截器
axios.interceptors.request.use(
  config => {
    // config.withCredentials = true
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    alert(error.response.data)
    return Promise.reject(error.response.data)
  }
)

let post = (url, data) => {
  return axios({
    method: 'post',
    url,
    data: qs.stringify(data)
  })
}

let get = (url, params) => {
  return axios({
    method: 'get',
    url,
    params
  })
}

export default {
  post,
  get
}
