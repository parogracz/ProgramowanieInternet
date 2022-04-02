<template>
  <v-app>
    <NavBar/>
    <Header/>
    <Offers/>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Header from './components/Header.vue';
import Offers from './components/Offers.vue';

export default {
  name: 'App',

  components: {
    NavBar,
    Header,
    Offers,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
  body{
    font-family: 'Barlow';
    line-height: 1.1;
    letter-spacing: 0.5mm;
  }
</style>