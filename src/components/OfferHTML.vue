<template>
    <section class="body">
        <div style="height:70px"></div>
        <marquee class="order"> Naciśnij kontynent </marquee>
        <center>
            <img src="../assets/world-night.jpg" usemap="#world" width="1200" height="600" alt=""/>
            <map name="world" >
                <area target=”_blank”  shape="rect" coords="100,50,425,250" href="https://pl.wikipedia.org/wiki/Ameryka_P%C3%B3%C5%82nocna" alt="" />
                <area target=”_blank”  shape="rect" coords="300,250,500,500" href="https://pl.wikipedia.org/wiki/Ameryka_Po%C5%82udniowa" alt="" />
                <area target=”_blank”  shape="rect" coords="560,50,725,180" href="https://pl.wikipedia.org/wiki/Europa" alt="" />
                <area target=”_blank”  shape="rect" coords="500,180,800,410" href="https://pl.wikipedia.org/wiki/Afryka" alt="" />
                <area target=”_blank” shape="rect" coords="725,50,1100,220" href="https://pl.wikipedia.org/wiki/Afryka" alt="" />
            </map>

            <CodeContainer>

            <!-- HTML -->    
                HTML
                <p v-highlightjs>
                    <code class="html">
                            &lt;marquee class="order"&gt; Naciśnij kontynent &lt;/marquee&gt; <br>
                            &lt;img src="../assets/world-night.jpg" usemap="#world" width="1200" height="600" alt=""/&gt;<br>
                            &lt;map name="world" &gt; <br><br>
                                &nbsp; &lt;area target=”_blank” shape="rect" coords="100,50,425,250" href="https://pl.wikipedia.org/wiki/Ameryka_P%C3%B3%C5%82nocna" alt="" /&gt; <br>
                                &nbsp; &lt;area target=”_blank” shape="rect" coords="300,250,500,500" href="https://pl.wikipedia.org/wiki/Ameryka_Po%C5%82udniowa" alt="" /&gt; <br>
                                &nbsp; &lt;area target=”_blank” shape="rect" coords="560,50,725,180" href="https://pl.wikipedia.org/wiki/Europa" alt="" /&gt; <br>
                                &nbsp; &lt;area target=”_blank” shape="rect" coords="500,180,800,410" href="https://pl.wikipedia.org/wiki/Afryka" alt="" /&gt; <br>
                                &nbsp; &lt;area target=”_blank” shape="rect" coords="725,50,1100,220" href="https://pl.wikipedia.org/wiki/Afryka" alt="" /&gt; <br><br>
                            &lt;/map&gt; <br>
                    </code>
                </p>

            <!-- CSS --> 
                <p v-highlightjs>
                    <code class="javascript">
                    </code>
                </p> 

            <!-- JS -->
                <p v-highlightjs>
                    <code class="javascript">
                    </code>
                </p> 

            </CodeContainer>

        </center>

        <v-alert
        :value= mobileAlert
        dense
        border="left"
        type="warning"
        >
            I'm a dense alert with the <strong>border</strong> prop and a <strong>type</strong> of warning
        </v-alert>

    </section>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import CodeContainer from './shared/CodeContainer.vue'

export default defineComponent({
    data(){
        return{
            mobileAlert: false,
        }
    },
    components: {
        CodeContainer,
    },
    created(){
        if(this.$vuetify.breakpoint.mobile) alert("Strona może nie wyświetlać się poprawnie na smartfonie, do jej stworzenia zastosowano wyłącznie HTML")
    }
})
</script>


<style scope>
    .body{
        background: #01021E;
        min-height: 100vh;
    }
    .path{
        position: absolute;
        left:18.5%;
        z-index: 1;
        -webkit-clip-path: polygon(0% 0%, 0% 100%, 6% 100%, 5% 6%, 94% 6%, 93% 93%, 5% 94%, 2% 100%, 100% 100%, 100% 0%); 
        clip-path: polygon(0% 0%, 0% 100%, 6% 100%, 5% 6%, 94% 6%, 93% 93%, 5% 94%, 2% 100%, 100% 100%, 100% 0%);
    }
    .order{
        font-size: 40px;
        color: white;
    }
</style>