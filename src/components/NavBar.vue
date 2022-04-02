<template>
    <section id="Nav">
        <!-- Desktop --> 
        <div class="NavBar">
            <v-tabs
              fixed-tabs
              background-color="#28016f"
              dark
            >
              <v-tab>
                Option
              </v-tab>
              <v-tab>
                Another Selection
              </v-tab>
              <v-tab>
                Items
              </v-tab>
              <v-tab>
                Another Screen
              </v-tab>
            </v-tabs>
        </div>
        <!-- Mobile --> 
        <v-app-bar
        color="deep-purple accent-4"
        dense
        dark
        v-if="$vuetify.breakpoint.mobile"
        >
            <v-app-bar-nav-icon>

            </v-app-bar-nav-icon>

            <v-spacer></v-spacer>


            <v-menu
                left
                bottom
            >
                <template v-slot:activator="{ on, attrs }">
                <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on"
                >
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
                </template>

                <v-list>
                <v-list-item
                    v-for="n in 5"
                    :key="n"
                    @click="() => {}"
                >
                    <v-list-item-title>Option {{ n }}</v-list-item-title>
                </v-list-item>
                </v-list>
            </v-menu>
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
  }
</style>
