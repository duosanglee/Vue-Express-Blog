import http from '@/config/http'

export default {
  test (model) {
    return http.get('/asdf')
  }
}
