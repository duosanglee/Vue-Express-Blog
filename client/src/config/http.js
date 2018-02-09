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

// const filters = [
//   '/user/addMobile',
//   '/login',
//   '/regist',
//   '/user/validateOldMobile',
//   '/discuss/get', // 讨论轮询
//   '/privateLetter/get', // 私信轮询
//   '/work/getUserUnRatingWork'
// ]

// http response 拦截器
axios.interceptors.response.use(
  response => {
    // store.commit('app/setAuth', response.data)
    // if (response.data.code === 1101) router.push('/login') // 没有登录，去登陆
    // let length = filters.length
    // for (let i = 0; i < length; i++) {
    //   if (response.config.url.indexOf(filters[i]) !== -1) {
    //     return response.data
    //   }
    // }
    // if (response.data.code && response.data.code !== 1000) {
    //   alert(response.data.data)
    //   return Promise.reject(response.data.data)
    // } else {
    return response.data
    // }
  },
  error => {
    alert(error.response.data)
    return Promise.reject(error.response.data)
  }
)

let post = (url, data, {
  onUploadProgressCal
} = {}) => {
  return axios({
    method: 'post',
    url,
    data: qs.stringify(data),
    onUploadProgress: function (progressEvent) {
      // 对原生进度事件的处理
      if (onUploadProgressCal) {
        onUploadProgressCal(progressEvent)
      }
    }
  })
}

let get = (url, params, {
  onUploadProgressCal
} = {}) => {
  return axios({
    method: 'get',
    url,
    params,
    onUploadProgress: function (progressEvent) {
      // 对原生进度事件的处理
      if (onUploadProgressCal) {
        onUploadProgressCal(progressEvent)
      }
    }
  })
}

let put = (url, data, {
  onUploadProgressCal
} = {}) => {
  return axios({
    method: 'put',
    url,
    data: data,
    onUploadProgress: function (progressEvent) {
      // 对原生进度事件的处理
      if (onUploadProgressCal) {
        onUploadProgressCal(progressEvent)
      }
    }
  })
}

export default {
  post,
  get,
  put
}
