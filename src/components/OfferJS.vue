<template

>
    <section
    class="body"
    >
        <v-card
        style="margin-top:200px; background: #28016F"
        >
            <v-card 
            class="d-flex flex-row mb-6 justify-center align-center"
            v-for="i in 3"
            :key=i
            style="background:#A999C5"
            >
                <v-card
                class="pa-2 game-item"
                outlined
                tile
                v-for="j in 3"
                :key=j
                :id='(i-1)*3+j'
                @click='check((i-1)*3 + j)'
                ></v-card>
            </v-card>
        </v-card>
    </section>
</template>

<script>

export default {
  name: 'js',

  data: () => ({
    turn: false,
    player1: [],
    player2: [],
    rule: [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]],
  }),
  methods: {
        clear(){
            this.player1 = [];
            this.player2 = [];
            // for(let i=1; i<=9; i++) console.log(document.getElementById(i));
            for(let i=1; i<=9; i++) document.getElementById(i).style.backgroundColor='white';
        },
        win(prop, gracz)
        {
            this.rule.forEach(winBase => {
                let count = 0;
                prop.forEach(point => {
                    winBase.forEach(element => {
                        if(point == element) count++;
                    })
                    if(count == 3)
                    {
                        alert('Wygrał '+gracz+'!');
                        this.clear();
                    }      
                })
            })
        return false;
        },
        lose()
        {
            if(this.player1.length >= 5 || this.player2.length >= 5)
            {
                alert('Spróbujcie jeszcze raz!');
                this.clear();
            }
        },
        check(param)
        {
            //player1.forEach()
            var field = document.getElementById(param);
            let pass = true;
            this.player1.forEach(obj => {if(obj === param) pass = false})
            this.player2.forEach(obj => {if(obj === param) pass = false})
            if(!pass) return; 
                if(this.turn)
                {
                    field.style.backgroundColor = 'blue';
                    this.player1.push(param);
                    this.win(this.player1,'gracz1')
                }
                else 
                {
                    field.style.backgroundColor = 'red';
                    this.player2.push(param);
                    this.win(this.player2,'gracz2')
                }
            console.log(this.lose());
            this.turn = !this.turn;
        }
  }
};
</script>

<style >
    .body{
        background: #6F41BF
    }
    .game-item{
        height: 100px;
        width: 100px;
    }
</style>