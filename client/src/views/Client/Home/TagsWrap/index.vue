<template>
  <div class="tags-wrap">
    <div class="tags" :class="{'active': activeTag === +tag.id}" v-for="(tag, index) of tagsArr" :key="index" @click="clickTag(tag.id)">
      {{tag.name}}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
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
  computed: {
    ...mapGetters('HomeModule', ['activeTag'])
  },
  methods: {
    ...mapMutations('HomeModule', ['clickTag'])
  },
  watch: {},
  components: {},
  mounted () {},
  created () {
    this.$api.tagsList().then(({code, data}) => {
      this.tagsArr = [...this.tagsArr, ...data]
    })
  }
}
</script>

<style lang='scss' scoped>
.tags-wrap {
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap-reverse;
  margin-top: 50px;
  padding-right: 250px;
  height: 150px;
  .tags {
    margin-right: 20px;
    height: 34px;
    line-height: 32px;
    font-size: 16px;
    color: rgba(31, 31, 31, 0.5);
    cursor: pointer;
    &.active {
      border-bottom: 2px solid rgba(31, 31, 31, 0.5);
    }
  }
}
</style>
