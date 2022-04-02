<template>
  <section id="Offers">
    <h1>Stack, czyli czym się zajmiemy</h1> 
    HTML, CSS, JS i frameworki..''
    <div 
    class="Card-container"
    >
        <v-row>
            <v-col>
                <Card
                :title="'HTML'"
                :subtitle="'Język opisowy'"
                :color="'#e79874'"
                :image="require('../assets/html.png')"
                />
            </v-col>
            <v-col>
                <Card
                :title="'CSS'"
                :subtitle="'Język opisowy'"
                :color="'#689EE7'"
                :image="require('../assets/css3.png')"
                />
            </v-col>
        </v-row>
        <v-row>
            <v-col> 
                <Card
                :title="'JavaScript'"
                :subtitle="'Język interaktywny'"
                :color="'#DDC02D'"
                :image="require('../assets/js.png')"
                />
            </v-col>
        </v-row>
        <v-row>
            <v-col>            
                <Card
                :title="'Vuejs'"
                :subtitle="'Framework JavaScript'"
                :color="'#80D3B0'"
                :image="require('../assets/vuejs.png')"
                />
            </v-col>
            <v-col>
                <Card
                :title="'React'"
                :subtitle="'Framework JavaScript'"
                :color="'#00D8FF'"
                :image="require('../assets/react.png')"
                />
            </v-col>
        </v-row>
    </div>
    
  </section>
</template>

<script>
import Card from '../components/Offers/Card.vue';

export default {
  name: 'Offers',
  components: {
      Card,
  },
  data(){
    return{
    }
  }
}
</script>

<style lang="scss" scoped>
    #Offers{
        text-align: center;
        padding: 50px 10%;
        background-image: url('../assets/tlo2.png');
        background-position: bottom;
        background-size: 100%;
    }
    .col{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .v-card{
        display: flex;
        text-align: center;
        align-items: center;
        width: 300px;
    }
    .v-image{
        align-items: center;
    }
    .Card-container{
        margin-top: 80px;
    }
</style>
