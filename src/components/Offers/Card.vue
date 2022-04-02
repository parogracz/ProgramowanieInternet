<template>
  <div id="Card">
    <v-card
    rounded
    class="offer-card"
    :color="color"
    >
        <v-card-text>
            <b>{{title}}</b> <br>
            {{subtitle}}
            <v-img
            max-height="250"
            max-width="250"
            class="offer-img"
            :src="image"
            />
            <!-- <v-img
            src='../../assets/html.png'
            /> -->
            <!-- {{getSrc}} -->
            <!-- {{require(image)}} -->
        </v-card-text>
        <br>

    </v-card>
  </div>
</template>

<script>

export default {
  name: 'Offers',
  props: ['title', 'subtitle', 'color', 'image'],
  data(){
    return{
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
    #Offers{
        text-align: center;
        padding: 50px 10%;
    }
    .col{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .v-card{
        display: grid;
        justify-content: center;
        width: 300px;
    }
    .v-image{
        align-items: center;
    }
</style>
