<template>
  <div id="app">
    <Header />
    <div id="nav">
      <router-link to="/dashboard">Home</router-link>| <router-link to="/about">About</router-link>|
      <router-link to="/teachers">Teachers</router-link>|
      <router-link to="/courses">Courses</router-link>|
      <router-link to="/gallery">Gallery</router-link>| <router-link to="/blog">Blog</router-link>|
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import Header from './components/business/Header/Header.vue';
import Footer from './components/business/Footer/Footer.vue';

export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    Header,
    Footer,
  },
};
</script>
