<template>
  <section id="Forms">
      <form 
      @submit.prevent="say"
      id="sendler"
      ref="form"
      >
        <v-row>
            <v-col 
            cols="12"
            md="6"
            >
                <v-text-field
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
                    v-model="asign"
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
                    v-model="agree"
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
// import emailjs from 'emailjs-com';
export default {
    name: 'Forms',
    data(){
        return{
            forms: false,
            email: '',
            rules: {
            required: value => !!value || 'Wymagane.',
            email: value => {
                const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
                return pattern.test(value) || 'Niepoprawny e-mail.'
                },
            },
            asign: '',
            // mailContent: 'Hi '+ this.asign + '!',
            agree: false,
        }
    },
    methods:{
        // sendMail(){
        //     console.log(this.$refs.form)
        //     emailjs.send((
        //         'service_k9gdoge',
        //         'template_5fz1cf3',
        //         {name: 'James', note: 'Check'},
        //         'bIGbmI8-X57F4Qw1g'
        //     ))
        //     .then((result) => {
        //         console.log(result.text)
        //     },(error) => {
        //         console.log(error)
        //     })
        // },
        say(){
            console.log('qwerty')
        }
    }
}
</script>

<style lang="scss" scoped>
    #Forms{
        background:#3900A2;
        padding: 40px 20%;
    }
    .v-btn{
        align-self: center;
    }
</style>
