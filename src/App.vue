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
    <OfferJS
    v-if="activePage=='js'"
    @changePage="changePage('js')"
    />
    <OfferHTML
    v-if="activePage=='html'"
    />
    <OfferCSS
    v-if="activePage=='css'"
    />
    <Forms
    v-if="activePage=='home'"
    />
    <Footer/>
    <BuildSide
    v-if="!(activePage=='home') && !(activePage=='js') && !(activePage=='html') && !(activePage=='css')"
    />
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Header from './components/Header.vue';
import Offers from './components/Offers.vue';
import OfferJS from './components/OfferJS.vue';
import OfferHTML from './components/OfferHTML.vue';
import OfferCSS from './components/OfferCSS.vue';
import Forms from './components/Forms.vue';
import Footer from './components/Footer.vue';
import BuildSide from './components/BuildSide.vue';

export default {
  name: 'App',

  components: {
    NavBar,
    Header,
    Offers,
    OfferJS,
    OfferHTML,
    OfferCSS,
    Forms,
    Footer,
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
</style>