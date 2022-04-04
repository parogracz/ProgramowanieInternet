<template>
  <section id="Header">
    <v-row>
      <v-col
      :cols="$vuetify.breakpoint.mobile ? 12 : 6"
      class="header-title"
      :class="{'header-title-mobile': $vuetify.breakpoint.mobile}"
      >
        <h1>Programowanie W Internecie</h1>
        Poznaj topowe technologie Webowe!
        <br>
        <v-btn
          color="white"
          elevation="24"
          fab
          icon
          outlined
          text
          class="header-btn"
          @click="$vuetify.goTo('#Offers',optionScroll)"
        >
          <v-icon>
            {{icon}}
          </v-icon>
        </v-btn>
      </v-col>
      <v-col
      cols="6"
      v-if="!$vuetify.breakpoint.mobile"
      >
        <img
        src="@/assets/developer.png"
        class="header-img"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { mdiArrowDown } from '@mdi/js';
export default {
  name: 'Header',
  data(){
    return{
      icon: mdiArrowDown,
    }
  },
  computed: {
    optionScroll(){
      return{
        duration: 500,
        offset: 0,
        easing: 'easeInOutCubic',
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  #Header{
    background: #3900A2;
    height: 600px;
    width: 100%;
    color: white;
    padding:100px 10%;
  }
  .header-img{
    max-height: 400px;
  }
  .header-btn{
    margin-top:20%;
  }
  .header-title{
    margin-top:10%;
  }
  .header-title-mobile{
    font-size: 23px;
    background-image: url("../assets/developer.png"); 
    background-size: cover;
  }
</style>
