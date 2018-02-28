import http from '@/config/http'

export default {
  articlesList ({tagId}) {
    return http.get('/articles/list', {
      tagId
    })
  },
  articlesDetail ({articlesId}) {
    return http.get(`/articles/${articlesId}`)
  }
}
