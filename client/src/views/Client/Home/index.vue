<template>
  <div class="main">
    <div class="tags-avatar">
      <tags-wrap></tags-wrap>
      <img src="../../../assets/avatar.jpeg" alt="" class="avatar">
    </div>
    <articles-wrap></articles-wrap>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import router from '@/router'
import TagsWrap from './TagsWrap'
import ArticlesWrap from './ArticlesWrap'

let HomeModule = {
  namespaced: true,
  state: {
  },
  getters: {
    activeTag (state, getters, rootState) {
      let tagId = rootState.route.query.tagId || -1
      return +tagId
    }
  },
  mutations: {
    clickTag ({state, rootState}, tagId) {
      router.push({
        query: {
          tagId
        }
      })
    }
  },
  actions: {}
}

export default {
  props: [],
  data () {
    return {
    }
  },
  components: {
    TagsWrap,
    ArticlesWrap
  },
  computed: {
  },
  methods: {
  },
  watch: {},
  mounted () {},
  created () {
    this.$store.registerModule('HomeModule', HomeModule)
  },
  destroyed () {
    // 销毁动态store
    this.$store.unregisterModule('HomeModule', HomeModule)
  }
}
</script>

<style lang='scss' scoped>
.main {
  margin: 0 auto;
  padding-top: 60px;
  width: 700px;
  .tags-avatar {
    position: relative;
    .avatar {
      position: absolute;
      right: 0;
      bottom: 0;
      margin-right: 50px;
      width: 150px;
    }
  }
}
</style>
