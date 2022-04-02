<template>
  <v-app>
    <NavBar
    @changePage="changePage($event)"
    />
    <Header
    v-if="activePage=='home'"
    />
    <Offers
    v-if="activePage=='home'"
    />
    <BuildSide
    v-if="!(activePage=='home')"
    />
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Header from './components/Header.vue';
import Offers from './components/Offers.vue';
import BuildSide from './components/BuildSide.vue';

export default {
  name: 'App',

  components: {
    NavBar,
    Header,
    Offers,
    BuildSide,
  },

  data: () => ({
    activePage:'home',
  }),
  methods:{
    changePage(actual){
      this.activePage = actual;
    }
  }
};
</script>

<style>
  body{
    font-family: 'Barlow';
    line-height: 1.1;
    letter-spacing: 0.5mm;
  }
  .fixed{
  }
</style>