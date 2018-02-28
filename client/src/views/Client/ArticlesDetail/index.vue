<template>
  <div class="articles-detail-wrap">
    <div class="banner">
      <div class="cover-overlay"></div>
      <div class="title">{{detail.title}}</div>
    </div>
    <div class="articles-time">
      {{detail.time}}
    </div>
    <div class="articles-content">
      {{detail.content}}
    </div>
  </div>
</template>

<script>
export default {
  props: [],
  data () {
    return {
      detail: null
    }
  },
  computed: {},
  methods: {},
  watch: {},
  components: {},
  mounted () {},
  created () {
    let articlesId = this.$route.params.id
    this.$api.articlesDetail({articlesId}).then(({code, data}) => {
      this.detail = data
    })
  }
}
</script>

<style lang='scss' scoped>
.articles-detail-wrap {
  .banner {
    position: relative;
    .cover-overlay {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(255, 255, 255, 0.4);
      z-index: 1;
    }
    .title {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
      font-size: 56px;
      color: #000;
    }
    height: 500px;
    background: url("../../../assets/banner.jpeg") 50% / cover;
  }
  .articles-time {
    margin-top: 96px;
    margin-bottom: 36px;
    text-align: center;
    font-size: 16px;
    color: #1f1f1f;
  }
  .articles-content {
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
  }
}
</style>
