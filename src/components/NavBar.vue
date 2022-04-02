<template>
    <section id="Nav">
        <!-- Desktop --> 
        <v-app-bar 
        v-if="!$vuetify.breakpoint.mobile"
        elevate-on-scroll
        fixed
        flat
        >
            <v-tabs
              fixed-tabs
              background-color="#28016f"
              dark
            >
              <v-tab 
              v-for="item in route"
              :key=item.name
              @click="$emit('changePage',item.props)"
              >
                {{item.name}}
              </v-tab>
            </v-tabs>
        </v-app-bar>
        <!-- Mobile --> 
        <v-app-bar
        color="deep-purple accent-4"
        dense
        dark
        fixed
        v-if="$vuetify.breakpoint.mobile"
        >
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-app-bar-nav-icon
              v-bind="attrs"
              v-on="on"
              >
              </v-app-bar-nav-icon>
            </template>
            <v-list
            flat
            >
              <v-list-item
                v-for="(item, index) in route"
                :key="index"
                @click="$emit('changePage',item.props)"
              >
                <v-list-item-title>{{ item.name }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-app-title>
            Nawigacja
          </v-app-title>
        </v-app-bar>
    </section>
</template>

<script>

import { mdiArrowDown } from '@mdi/js'
export default {
  name: 'Header',
  data(){
    return{
      icon: mdiArrowDown,
      route: [
        {name: 'HomePage', props: 'home'},
        {name: 'HTML', props: 'html'},
        {name: 'CSS', props: 'css'},
        {name: 'JS', props: 'js'},
        {name: 'VueJS', props: 'vue'},
        {name: 'React', props: 'react'},
      ]
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
  .NavBar{
    background: #28016f;
    width:100%;
  }
</style>
