<template>
  <div class="main">
    <div class="tags-avatar">
      <tags-wrap :tagsArr="tagsArr"></tags-wrap>
      <img src="../../../assets/avatar.jpeg" alt="" class="avatar">
    </div>
    <articles-wrap></articles-wrap>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
  actions: {

  }
}

export default {
  props: [],
  data () {
    return {
      tagsArr: [
        {
          id: -1,
          name: '全部'
        }
      ]
    }
  },
  components: {
    TagsWrap,
    ArticlesWrap
  },
  computed: {
    ...mapGetters('HomeModule', ['activeTag'])
  },
  methods: {
  },
  watch: {},
  mounted () {},
  created () {
    this.$store.registerModule('HomeModule', HomeModule)

    this.$api.tagsList().then(({code, data}) => {
      this.tagsArr = [...this.tagsArr, ...data]
    })
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
