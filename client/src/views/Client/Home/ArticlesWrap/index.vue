<template>
  <div class="article-wrap">
    <div class="article-content" v-for="(article, index) of articlesArr" :key="index">
      <div class="tags-wrap">
        <div class="tags" v-for="(tag, index) of article.tags" :key="index" @click="clickTag(tag.id)">{{tag.name}}</div>
      </div>
      <div class="title">{{article.title}}</div>
      <div class="time">{{article.time}}</div>
      <div class="content" @click="readMore()">{{article.content}}</div>
      <div class="info-bar">
        <div class="viewCount">阅读数
          <span class="num">{{article.viewCount}}</span>
        </div>
        <div class="read-more">更多</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  props: [],
  data () {
    return {
      articlesArr: null
    }
  },
  computed: {
    ...mapGetters('HomeModule', ['activeTag'])
  },
  methods: {
    ...mapMutations('HomeModule', ['clickTag']),
    fetchArticlesList (tagId) {
      this.$api.articlesList({tagId}).then(({code, data}) => {
        this.articlesArr = data
      })
    }
  },
  watch: {},
  components: {},
  mounted () {},
  created () {
    this.fetchArticlesList(this.activeTag)
  }
}
</script>

<style lang='scss' scoped>
.article-wrap {
  .article-content {
    margin: 75px auto 128px;
    .tags-wrap {
      display: flex;
      justify-content: center;
      .tags {
        font-size: 16px;
        color: rgba(31, 31, 31, 0.5);
        margin-right: 20px;
        cursor: pointer;
        &:last-child {
          margin-right: 0;
        }
      }
    }
    .title {
      margin: 12px 0;
      font-size: 32px;
      color: #1c1c1c;
      text-align: center;
    }
    .time {
      font-size: 16px;
      color: rgba(31, 31, 31, 0.5);
      text-align: center;
    }
    .content {
      margin: 36px auto 16px;
      line-height: 25.6px;
      font-size: 16px;
      color: #1f1f1f;
    }
    .info-bar {
      display: flex;
      font-size: 16px;
      > * {
        color: rgba(31, 31, 31, 0.5) !important;
        cursor: pointer;
      }
      .viewCount {
        margin-right: 20px;
        .num {
          color: #1f1f1f;
        }
      }
    }
  }
}
</style>
