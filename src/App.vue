<template>
  <HeaderCompVue></HeaderCompVue>
  <HomeCompVue></HomeCompVue>
  <AboutCompVue></AboutCompVue>
  <EditorCompVue></EditorCompVue>
  <FooterCompVue></FooterCompVue>
</template>

<script>

import HeaderCompVue from './components/HeaderComp.vue';
import HomeCompVue from './components/HomeComp.vue';
import AboutCompVue from './components/AboutComp.vue';
import EditorCompVue from './components/EditorComp.vue';
import FooterCompVue from './components/FooterComp.vue';

export default {
  components:{
    HeaderCompVue,
    HomeCompVue,
    AboutCompVue,
    EditorCompVue,
    FooterCompVue,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
