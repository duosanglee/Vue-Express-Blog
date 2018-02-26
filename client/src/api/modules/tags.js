import http from '@/config/http'

export default {
  tagsList (model) {
    return http.get('/tags/list')
  }
}
