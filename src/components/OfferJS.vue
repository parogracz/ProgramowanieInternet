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
<center>
        <CodeContainer>
            HTML
            <p v-highlightjs>
                <code class="html">
                </code>
            </p>

            CSS
            <p v-highlightjs>
                <code class="css">
                </code>
            </p> 

            JS
            <p v-highlightjs>
                <code class="javascript">
                    clear() <br>
                    {<br>
                    &nbsp;this.player1 = [];<br>
                    &nbsp;this.player2 = [];<br>
                    &nbsp;for(let i=1; i&lt;=9; i++) document.getElementById(i).style.backgroundColor='white';<br>
                    },<br>
                    win(prop, gracz)<br>
                    {<br>
                    &nbsp;this.rule.forEach(winBase => {<br>
                    &nbsp;&nbsp;let count = 0;<br>
                    &nbsp;&nbsp;prop.forEach(point => {<br>
                    &nbsp;&nbsp;&nbsp;winBase.forEach(element => {<br>
                    &nbsp;&nbsp;&nbsp;if(point == element) count++;<br>
                    &nbsp;&nbsp;})<br>
                    &nbsp;&nbsp;if(count == 3)<br>
                    &nbsp;&nbsp;{<br>
                    &nbsp;&nbsp;&nbsp;alert('Wygrał '+gracz+'!');<br>
                    &nbsp;&nbsp;&nbsp;this.clear();<br>
                    &nbsp;&nbsp;}<br>
                    &nbsp;})<br>
                    return false;<br>
                    },<br>
                    lose()<br>
                    {<br>
                    &nbsp;if(this.player1.length >= 5 || this.player2.length >= 5)<br>
                    &nbsp;{<br>
                    &nbsp;&nbsp;alert('Spróbujcie jeszcze raz!');<br>
                    &nbsp;&nbsp;this.clear();<br>
                    &nbsp;}<br>
                    },<br>
                    check(param)<br>
                    {<br>
                    &nbsp;var field = document.getElementById(param);<br>
                    &nbsp;let pass = true;<br>
                    &nbsp;this.player1.forEach(obj => {if(obj === param) pass = false})<br>
                    &nbsp;this.player2.forEach(obj => {if(obj === param) pass = false})<br>
                    &nbsp;if(!pass) return; <br>
                    &nbsp;&nbsp;if(this.turn) <br>
                    &nbsp;&nbsp;{ <br>
                    &nbsp;&nbsp;&nbsp;field.style.backgroundColor = 'blue'; <br>
                    &nbsp;&nbsp;&nbsp;this.player1.push(param); <br>
                    &nbsp;&nbsp;&nbsp;this.win(this.player1,'gracz1') <br>
                    &nbsp;&nbsp;} <br>
                    &nbsp;&nbsp;else <br>
                    &nbsp;&nbsp;{ <br>
                    &nbsp;&nbsp;&nbsp;field.style.backgroundColor = 'red'; <br>
                    &nbsp;&nbsp;&nbsp;this.player2.push(param); <br>
                    &nbsp;&nbsp;&nbsp;this.win(this.player2,'gracz2') <br>
                    &nbsp;&nbsp;}<br>
                    &nbsp;this.lose(); <br>
                    &nbsp;this.turn = !this.turn; <br>
                    } <br>
                </code>
            </p> 

        </CodeContainer>
</center>
    </section>
</template>

<script>
import CodeContainer from './shared/CodeContainer.vue';

export default {
  name: 'js',

  data: () => ({
    turn: false,
    player1: [],
    player2: [],
    rule: [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]],
  }),
  components: {
    CodeContainer,
  },
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
            this.lose();
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