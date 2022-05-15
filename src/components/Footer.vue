<template>
<section>
  <v-divider></v-divider>
  <v-footer
    color="#3900A2"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link.name"
        color="white"
        text
        rounded
        :href="link.url"
        class="my-2"
      >
        <v-icon> {{link.image}} </v-icon>
        <span 
        v-show="!$vuetify.breakpoint.mobile"
        >
            {{link.name}}
        </span>
      </v-btn>
      <v-col
        class="py-4 text-center white--text footer"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Programowanie W Internetowe</strong>
      </v-col>
    </v-row>
  </v-footer>
</section>
</template>

<script>
  import { mdiFacebook, mdiLinkedin, mdiYoutube} from '@mdi/js';
  export default {
    data: () => ({
      links: [
          {name: 'Facebook', image: mdiFacebook, url: 'https://www.facebook.com/' },
          {name: 'LinkedIn', image: mdiLinkedin, url: 'https://www.linkedin.com/' },
          {name: 'YouTube', image: mdiYoutube, url: 'https://www.youtube.com/' },
      ]
    }),
  }
</script>

<style scoped>
    .footer{
        background: #28016F;
    }
</style>