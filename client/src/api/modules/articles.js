import http from '@/config/http'

export default {
  articlesList (model) {
    return http.get('/articles/list')
  }
}
