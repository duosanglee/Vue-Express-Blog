<template>
  <div id="app">
    <div class="nav-wrap">
      <router-link :to="{name: route.name}" class="nav" v-for="(route, key) of link" :key="key">{{route.title}}</router-link>
    </div>
    <router-view class="main"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      link: [
        {
          name: 'home',
          title: '首页'
        },
        {
          name: 'aboutMe',
          title: '关于我'
        }
      ]
    }
  },
  computed: {
    route () {
      return this.$router.options.routes.slice(1)
    }
  },
  created () {
  }
}
</script>

<style>
@import "./style/reset.css";
</style>

<style lang="scss" scoped>
.nav-wrap {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  max-width: 1000px;
  height: 60px;
  line-height: 60px;
  z-index: 100;
  .nav {
    font-size: 16px;
    color: rgb(31, 31, 31);
    font-weight: normal;
    &.router-link-active {
      font-size: 26px;
      font-weight: bold;
      color: #222;
      order: -1;
    }
  }
}
</style>
