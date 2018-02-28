<template>
  <div id="app">
    <div class="nav-wrap">
      <router-link :to="{name: route.name}" class="nav" v-for="(route, key) of route" :key="key">{{route.meta.title}}</router-link>
    </div>
    <router-view class="main"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {

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
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1000px;
  height: 60px;
  line-height: 60px;
  .nav {
    font-size: 14px;
    color: rgba(31, 31, 31, 0.5);
    &.router-link-active {
      font-size: 26px;
      font-weight: bold;
      color: #222;
      order: -1;
    }
  }
}
</style>
