<template>
  <section id="Forms">
      <h1>Wyślij do siebie maila!<b>_</b></h1>
      <form 
      @submit.prevent="sendMail"
      id="sendler"
      ref="form"
      >
        <v-row>
            <v-col 
            cols="12"
            md="6"
            >
                <v-text-field
                    v-model="email.addres"
                    color="black"
                    background-color="white"
                    label="Twój e-mail *"
                    placeholder="example@xyz.com"
                    :rules="[rules.required, rules.email]"
                    filled
                    name=mail
                ></v-text-field>
            </v-col>
            <v-col
            cols="12"
            md="6"
            >
                <v-text-field
                    v-model="email.asign"
                    color="black"
                    background-color="white"
                    label="Podpis"
                    placeholder="np. A Kowalska"
                    :rules="[rules.required]"
                    filled
                    name=as
                ></v-text-field>
            </v-col>
            <v-col
            cols="12"
            md="6"
            >
                <v-checkbox
                    color="white"
                    v-model="email.agree"
                    light
                >
                <template v-slot:label> <span style="color:white">Chcę aby wysłano mi maila *</span> </template>
                </v-checkbox>
            </v-col>
            <v-col
            cols="12"
            md="6"
            style="display:flex; justify-content: center"
            >
                <v-btn
                    depressed
                    elevation="2"
                    large
                    outlined
                    color="white"
                    type="submit"
                >
                    Wyślij Mail
                </v-btn>
            </v-col>
        </v-row>
      </form>
  </section>
</template>

<script>
import axios from "axios";
export default {
    name: 'Forms',
    data(){
        return{
            forms: false,
            email: {addres: '', asign: '', agree: false},
            rules: {
            required: value => !!value || 'Wymagane.',
            email: value => {
                const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
                return pattern.test(value) || 'Niepoprawny e-mail.'
                },
            },
        }
    },
    methods:{
        sendMail(){
            axios({
                method: 'POST',
                url: 'https://localhost:44385/api/Mailer',
                data: this.email,
                })
                .then(response => {
                    alert("Mail wysłany poprawnie! ");
                    if(response.status==200) window.location.reload();
                })
                .catch(error => {
                    alert("Coś poszło nie tak.. Kod:" + error);
                });
        }
    }
}
</script>

<style lang="scss" scoped>
    @keyframes return{
        0% {background: red; display: none}
        25% {background: white; display: block}
        50% {background: red; display: none}
        75% {background: white; display: block}
        100% {background: red; display: none}
    }
    #Forms{
        background:#3900A2;
        padding: 40px 20%;
        font-size: 36px;
        color: white;
    }
    b{
        animation-name: "return";
        animation-duration: 2s;
    }
    .v-btn{
        align-self: center;
    }
</style>
