<template>
    <section class="body">
        <v-parallax 
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax>
        <center>
            <CodeContainer>

            <!-- HTML -->    
                HTML
                <p v-highlightjs>
                    <code class="html">
                        &lt;v-parallax 
                        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"&gt;&lt;/v-parallax&gt;
                    </code>
                </p>

            <!-- CSS --> 
                CSS
                <p v-highlightjs>
                    <code class="javascript">
                    </code>
                </p> 

            <!-- JS -->
                JS
                <p v-highlightjs>
                    <code class="javascript">
                    </code>
                </p> 
            </CodeContainer>
            
            <v-carousel
                cycle
                height="400"
                hide-delimiter-background
                show-arrows-on-hover
            >
                <v-carousel-item
                v-for="(slide, i) in slides"
                :key="i"
                >
                <v-sheet
                    :color="colors[i]"
                    height="100%"
                >
                    <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                    >
                    <div class="text-h2">
                        {{ slide }} Slide
                    </div>
                    </v-row>
                </v-sheet>
                </v-carousel-item>
            </v-carousel>

            <CodeContainer>

            <!-- HTML -->    
                HTML
                <p v-highlightjs>
                    <code class="html">
                        &lt;v-carousel<br>
                        &nbsp;cycle<br>
                        &nbsp;height="400"<br>
                        &nbsp;hide-delimiter-background<br>
                        &nbsp;show-arrows-on-hover<br>
                        &gt;<br>
                        &nbsp;&lt;v-carousel-item<br>
                        &nbsp;v-for="(slide, i) in slides"<br>
                        &nbsp;:key="i"<br>
                        &nbsp; &gt;<br>
                        &nbsp;&lt;v-sheet<br>
                        &nbsp;&nbsp;:color="colors[i]"<br>
                        &nbsp;&nbsp;height="100%"<br>
                        &nbsp;&gt;<br>
                        &nbsp;&nbsp;&lt;v-row<br>
                        &nbsp;&nbsp;class="fill-height"<br>
                        &nbsp;&nbsp;align="center"<br>
                        &nbsp;&nbsp;justify="center"<br>
                        &nbsp;&nbsp;&gt;<br>
                        &nbsp;&nbsp;&lt;div class="text-h2"&gt;<br>
                        &nbsp;&nbsp;&nbsp;{{ slide }} Slide<br>
                        &nbsp;&nbsp;&lt;/div&gt;<br>
                        &nbsp;&nbsp;&lt;/v-row&gt;<br>
                        &nbsp;&lt;/v-sheet&gt;<br>
                        &nbsp;&lt;/v-carousel-item&gt;<br>
                        &lt;/v-carousel&gt;<br>
                    </code>
                </p>

            <!-- CSS --> 
                CSS
                <p v-highlightjs>
                    <code class="javascript">
                    </code>
                </p> 

            <!-- JS -->
                JS
                <p v-highlightjs>
                    <code class="javascript">
                        export default { <br>
                        &nbsp;data () { <br>
                        &nbsp;&nbsp;return { <br>
                        &nbsp;&nbsp;colors: [
                                'indigo',
                                'warning',
                                'pink darken-2',
                                'red lighten-1',
                                'deep-purple accent-4',
                                ], <br>
                        &nbsp;&nbsp;slides: [
                                'First',
                                'Second',
                                'Third',
                                'Fourth',
                                'Fifth',
                                ], <br>
                        &nbsp;&nbsp;}<br>
                        &nbsp;},<br>
                        }
                    </code>
                </p> 
            </CodeContainer>
        </center>
    </section>
</template>

<script>
import CodeContainer from './shared/CodeContainer.vue'

export default ({
    data(){
        return{
            mobileAlert: false,
            colors: [
            'indigo',
            'warning',
            'pink darken-2',
            'red lighten-1',
            'deep-purple accent-4',
            ],
            slides: [
            'First',
            'Second',
            'Third',
            'Fourth',
            'Fifth',
            ],
        }
    },
    components: {
        CodeContainer,
    },
})
</script>


<style scope>
    .body{
        background: #01021E;
        min-height: 100vh;
        padding-top: 150px;
    }
</style>