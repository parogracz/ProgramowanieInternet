<template>
    <section class="body">
        <center>

            <div class="blok1"></div>
        
            <CodeContainer>

            <!-- HTML -->    
                HTML
                <p v-highlightjs>
                    <code class="html">
                        &lt;div class="blok1"&gt;&lt;/div&gt;
                    </code>
                </p>

            <!-- CSS --> 
                CSS
                <p v-highlightjs>
                    <code class="javascript">
                        .blok1 { <br>
                        &nbsp;height: 100px;<br>
                        &nbsp;width: 250px;<br>
                        &nbsp;margin-bottom: 200px;<br>
                        &nbsp;transform: translateX(150px);<br>
                        &nbsp;background: purple;<br>
                        &nbsp;animation: div1 infinite;<br>
                        &nbsp;animation-duration: 5s;<br>
                        &nbsp;animation-delay: 1s;<br>
                        }<br>
                        <br>
                        @keyframes div1{<br>
                        &nbsp;0% {<br>
                        &nbsp;&nbsp;transform: translateX(150px);<br>
                        &nbsp;}<br>
                        &nbsp;10% {<br>
                        &nbsp;&nbsp;opacity: 100%;<br>
                        &nbsp;}<br>
                        &nbsp;50% {<br>
                        &nbsp;&nbsp;transform: translateX(0px);<br> 
                        &nbsp;}<br>
                        &nbsp;60% {<br>
                        &nbsp;&nbsp;transform: rotate(15deg);<br>
                        &nbsp;}<br>
                        &nbsp;70% {<br>
                        &nbsp;&nbsp;transform: rotate(-15deg);<br>
                        &nbsp;}<br>
                        &nbsp;80% {<br>
                        &nbsp;&nbsp;transform: rotate(15deg);<br> 
                        &nbsp;&nbsp;opacity: 100%;<br>
                        &nbsp;}<br>
                        &nbsp;90% {<br>
                        &nbsp;&nbsp;transform: translateY(150px);<br>
                        &nbsp;&nbsp;opacity: 0%;<br>
                        &nbsp;}<br>
                        }<br>
                    </code>
                </p> 

            <!-- JS -->

            </CodeContainer>

            <div class="blok2"></div>

            <CodeContainer>

            <!-- HTML -->    
                HTML
                <p v-highlightjs>
                    <code class="html">
                        &lt;div class="blok2"&gt;&lt;/div&gt;
                    </code>
                </p>

            <!-- CSS --> 
                CSS
                <p v-highlightjs>
                    <code class="javascript">
                            .blok2 {<br>
                            &nbsp;background-image: url("../assets/developer-woman.png");<br>
                            &nbsp;width: 300px;<br>
                            &nbsp;height: 300px;<br>
                            &nbsp;background-size: cover;<br>
                            &nbsp;background-repeat: no-repeat;<br>
                            &nbsp;background-size: 100% 100%;<br>
                            &nbsp;animation: div2 infinite;<br>
                            &nbsp;animation-duration: 10s; <br>
                            &nbsp;animation-delay: 1s;<br>
                            }<br>
                            <br>
                            @keyframes div2 {<br>
                            &nbsp;7% {<br>
                            &nbsp;&nbsp;-webkit-clip-path: polygon(24% 15%, 23% 92%, 42% 93%, 41% 55%, 58% 55%, 71% 44%, 71% 28%, 58% 17%); <br>
                            &nbsp;&nbsp;clip-path: polygon(24% 15%, 23% 92%, 42% 93%, 41% 55%, 58% 55%, 71% 44%, 71% 28%, 58% 17%); <br>
                            &nbsp;}<br>
                            &nbsp;14% {<br>
                            &nbsp;&nbsp;-webkit-clip-path: polygon(23% 12%, 23% 87%, 44% 89%, 42% 50%, 59% 87%, 78% 88%, 57% 50%, 70% 48%, 79% 35%, 79% 21%, 63% 11%); <br> 
                            &nbsp;&nbsp;clip-path: polygon(23% 12%, 23% 87%, 44% 89%, 42% 50%, 59% 87%, 78% 88%, 57% 50%, 70% 48%, 79% 35%, 79% 21%, 63% 11%);<br>
                            &nbsp;}<br>
                            &nbsp;21% {<br>
                            &nbsp;&nbsp;-webkit-clip-path: ellipse(28% 47% at 50% 50%); <br>
                            &nbsp;&nbsp;clip-path: ellipse(28% 47% at 50% 50%); <br>
                            &nbsp;}<br>
                            &nbsp;28% {<br>
                            &nbsp;&nbsp;-webkit-clip-path: polygon(75% 27%, 75% 7%, 37% 7%, 18% 34%, 14% 77%, 44% 92%, 66% 93%, 79% 90%, 80% 66%, 92% 66%, 93% 49%, 62% 48%, 62% 64%, 61% 85%, 35% 68%, 40% 40%, 49% 26%); <br>
                            &nbsp;&nbsp;clip-path: polygon(75% 27%, 75% 7%, 37% 7%, 18% 34%, 14% 77%, 44% 92%, 66% 93%, 79% 90%, 80% 66%, 92% 66%, 93% 49%, 62% 48%, 62% 64%, 61% 85%, 35% 68%, 40% 40%, 49% 26%); <br>
                            &nbsp;} <br>
                            &nbsp;35% { <br>
                            &nbsp;&nbsp;-webkit-clip-path: polygon(23% 12%, 23% 87%, 44% 89%, 42% 50%, 59% 87%, 78% 88%, 57% 50%, 70% 48%, 79% 35%, 79% 21%, 63% 11%); <br>
                            &nbsp;&nbsp;clip-path: polygon(23% 12%, 23% 87%, 44% 89%, 42% 50%, 59% 87%, 78% 88%, 57% 50%, 70% 48%, 79% 35%, 79% 21%, 63% 11%); <br>
                            &nbsp;}<br>
                            &nbsp;42% {<br>
                            &nbsp;&nbsp;-webkit-clip-path: polygon(13% 96%, 51% 2%, 84% 96%, 65% 96%, 57% 69%, 43% 69%, 31% 96%); <br>
                            &nbsp;&nbsp;clip-path: polygon(13% 96%, 51% 2%, 84% 96%, 65% 96%, 57% 69%, 43% 69%, 31% 96%); <br>
                            &nbsp;}<br>
                            &nbsp;49% {<br>
                            &nbsp;&nbsp;-webkit-clip-path: polygon(5% 94%, 5% 7%, 27% 7%, 45% 38%, 60% 7%, 87% 7%, 88% 94%, 66% 94%, 64% 45%, 45% 64%, 26% 45%, 27% 94%); <br>
                            &nbsp;&nbsp;clip-path: polygon(5% 94%, 5% 7%, 27% 7%, 45% 38%, 60% 7%, 87% 7%, 88% 94%, 66% 94%, 64% 45%, 45% 64%, 26% 45%, 27% 94%); <br>
                            &nbsp;}<br>
                            &nbsp;56% {<br>
                            &nbsp;&nbsp;-webkit-clip-path: ellipse(28% 47% at 50% 50%); <br>
                            &nbsp;&nbsp;clip-path: ellipse(28% 47% at 50% 50%); <br>
                            &nbsp;}<br>
                            &nbsp;63% {<br>
                            &nbsp;&nbsp;-webkit-clip-path: polygon(7% 6%, 6% 94%, 26% 94%, 48% 61%, 66% 92%, 86% 93%, 86% 6%, 63% 6%, 64% 48%, 47% 32%, 31% 49%, 29% 6%); 
                            &nbsp;&nbsp;clip-path: polygon(7% 6%, 6% 94%, 26% 94%, 48% 61%, 66% 92%, 86% 93%, 86% 6%, 63% 6%, 64% 48%, 47% 32%, 31% 49%, 29% 6%);
                            &nbsp;}<br>
                            &nbsp;70% {<br>
                            &nbsp;&nbsp;-webkit-clip-path: polygon(13% 96%, 51% 2%, 84% 96%, 65% 96%, 57% 69%, 43% 69%, 31% 96%);<br>
                            &nbsp;&nbsp;clip-path: polygon(13% 96%, 51% 2%, 84% 96%, 65% 96%, 57% 69%, 43% 69%, 31% 96%);<br>
                            &nbsp;}<br>
                            &nbsp;77% {<br>
                            &nbsp;-webkit-clip-path: polygon(17% 91%, 15% 9%, 37% 8%, 68% 57%, 68% 8%, 91% 8%, 93% 91%, 71% 91%, 38% 42%, 40% 91%); <br>
                            &nbsp;&nbsp;clip-path: polygon(17% 91%, 15% 9%, 37% 8%, 68% 57%, 68% 8%, 91% 8%, 93% 91%, 71% 91%, 38% 42%, 40% 91%);<br>
                            &nbsp;}<br>
                            &nbsp;84% {<br>
                            &nbsp;&nbsp;-webkit-clip-path: polygon(35% 25%, 35% 0%, 65% 0%, 65% 25%, 65% 50%, 65% 100%, 35% 100%, 35% 50%); <br>
                            &nbsp;&nbsp;clip-path: polygon(35% 25%, 35% 0%, 65% 0%, 65% 25%, 65% 50%, 65% 100%, 35% 100%, 35% 50%);<br>
                            &nbsp;}<br>
                            &nbsp;91% {<br>
                            &nbsp;&nbsp;-webkit-clip-path: polygon(23% 3%, 85% 3%, 85% 20%, 47% 21%, 47% 39%, 68% 39%, 69% 60%, 46% 60%, 46% 78%, 86% 77%, 86% 98%, 22% 98%); <br>
                            &nbsp;&nbsp;clip-path: polygon(23% 3%, 85% 3%, 85% 20%, 47% 21%, 47% 39%, 68% 39%, 69% 60%, 46% 60%, 46% 78%, 86% 77%, 86% 98%, 22% 98%); <br>
                            &nbsp;}<br>
                            }
                    </code>
                </p> 

            <!-- JS -->

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
        }
    },
    components: {
        CodeContainer,
    },
    created(){
        
    }
})
</script>


<style scope>
    .body {
        /* padding: 200px; */
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-content: center;
    }
    .blok1 {
        height: 100px;
        width: 250px;
        margin-bottom: 150px;
        margin-top: 100px;
        transform: translateX(100px); 
        background: purple;
        animation: div1 infinite;
        animation-duration: 5s; 
        animation-delay: 1s;
    }
    .blok2 {
        background-image: url("../assets/developer-woman.png");
        width: 300px;
        height: 300px;
        background-size: cover;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        animation: div2 infinite;
        animation-duration: 10s; 
        animation-delay: 1s;
    }

    @keyframes div1{
        0% {
            transform: translateX(100px); 
        }
        10% {
            opacity: 100%;
        }
        50% {
            transform: translateX(0px); 
        }
        60% {
            transform: rotate(5deg); 
        }
        70% {
            transform: rotate(-10deg); 
        }
        80% {
            transform: rotate(15deg); 
            opacity: 100%;
        }
        90% {
            transform: translateY(100px);
            opacity: 0%;
        }
    }

    @keyframes div2 {
        7% {
            -webkit-clip-path: polygon(24% 15%, 23% 92%, 42% 93%, 41% 55%, 58% 55%, 71% 44%, 71% 28%, 58% 17%); 
            clip-path: polygon(24% 15%, 23% 92%, 42% 93%, 41% 55%, 58% 55%, 71% 44%, 71% 28%, 58% 17%);
        }
        14% {
            -webkit-clip-path: polygon(23% 12%, 23% 87%, 44% 89%, 42% 50%, 59% 87%, 78% 88%, 57% 50%, 70% 48%, 79% 35%, 79% 21%, 63% 11%); 
            clip-path: polygon(23% 12%, 23% 87%, 44% 89%, 42% 50%, 59% 87%, 78% 88%, 57% 50%, 70% 48%, 79% 35%, 79% 21%, 63% 11%);
        }
        21% {
            -webkit-clip-path: ellipse(28% 47% at 50% 50%); 
            clip-path: ellipse(28% 47% at 50% 50%);
        }
        28% {
            -webkit-clip-path: polygon(75% 27%, 75% 7%, 37% 7%, 18% 34%, 14% 77%, 44% 92%, 66% 93%, 79% 90%, 80% 66%, 92% 66%, 93% 49%, 62% 48%, 62% 64%, 61% 85%, 35% 68%, 40% 40%, 49% 26%); 
            clip-path: polygon(75% 27%, 75% 7%, 37% 7%, 18% 34%, 14% 77%, 44% 92%, 66% 93%, 79% 90%, 80% 66%, 92% 66%, 93% 49%, 62% 48%, 62% 64%, 61% 85%, 35% 68%, 40% 40%, 49% 26%);
        }
        35% {
            -webkit-clip-path: polygon(23% 12%, 23% 87%, 44% 89%, 42% 50%, 59% 87%, 78% 88%, 57% 50%, 70% 48%, 79% 35%, 79% 21%, 63% 11%); 
            clip-path: polygon(23% 12%, 23% 87%, 44% 89%, 42% 50%, 59% 87%, 78% 88%, 57% 50%, 70% 48%, 79% 35%, 79% 21%, 63% 11%);
        }
        42% {
            -webkit-clip-path: polygon(13% 96%, 51% 2%, 84% 96%, 65% 96%, 57% 69%, 43% 69%, 31% 96%);
            clip-path: polygon(13% 96%, 51% 2%, 84% 96%, 65% 96%, 57% 69%, 43% 69%, 31% 96%);
        }
        49% {
            -webkit-clip-path: polygon(5% 94%, 5% 7%, 27% 7%, 45% 38%, 60% 7%, 87% 7%, 88% 94%, 66% 94%, 64% 45%, 45% 64%, 26% 45%, 27% 94%); 
            clip-path: polygon(5% 94%, 5% 7%, 27% 7%, 45% 38%, 60% 7%, 87% 7%, 88% 94%, 66% 94%, 64% 45%, 45% 64%, 26% 45%, 27% 94%);
        }
        56% {
            -webkit-clip-path: ellipse(28% 47% at 50% 50%); 
            clip-path: ellipse(28% 47% at 50% 50%);
        }
        63% {
            -webkit-clip-path: polygon(7% 6%, 6% 94%, 26% 94%, 48% 61%, 66% 92%, 86% 93%, 86% 6%, 63% 6%, 64% 48%, 47% 32%, 31% 49%, 29% 6%); 
            clip-path: polygon(7% 6%, 6% 94%, 26% 94%, 48% 61%, 66% 92%, 86% 93%, 86% 6%, 63% 6%, 64% 48%, 47% 32%, 31% 49%, 29% 6%);
        }
        70% {
            -webkit-clip-path: polygon(13% 96%, 51% 2%, 84% 96%, 65% 96%, 57% 69%, 43% 69%, 31% 96%);
            clip-path: polygon(13% 96%, 51% 2%, 84% 96%, 65% 96%, 57% 69%, 43% 69%, 31% 96%);
        }
        77% {
            -webkit-clip-path: polygon(17% 91%, 15% 9%, 37% 8%, 68% 57%, 68% 8%, 91% 8%, 93% 91%, 71% 91%, 38% 42%, 40% 91%); 
            clip-path: polygon(17% 91%, 15% 9%, 37% 8%, 68% 57%, 68% 8%, 91% 8%, 93% 91%, 71% 91%, 38% 42%, 40% 91%);
        }
        84% {
            -webkit-clip-path: polygon(35% 25%, 35% 0%, 65% 0%, 65% 25%, 65% 50%, 65% 100%, 35% 100%, 35% 50%); 
            clip-path: polygon(35% 25%, 35% 0%, 65% 0%, 65% 25%, 65% 50%, 65% 100%, 35% 100%, 35% 50%);
        }
        91% {
            -webkit-clip-path: polygon(23% 3%, 85% 3%, 85% 20%, 47% 21%, 47% 39%, 68% 39%, 69% 60%, 46% 60%, 46% 78%, 86% 77%, 86% 98%, 22% 98%); 
            clip-path: polygon(23% 3%, 85% 3%, 85% 20%, 47% 21%, 47% 39%, 68% 39%, 69% 60%, 46% 60%, 46% 78%, 86% 77%, 86% 98%, 22% 98%);
        }
    }
</style>