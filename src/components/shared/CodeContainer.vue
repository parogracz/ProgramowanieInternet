<template>
    <v-container
        fluid
    >
        <div
            class="code-menu"
        >
            <div
                style="display: flex; align-items: center; justify-content: space-around; height: 40px;"
            >
                <div
                >
                    Code Container
                </div>
                <div
                style="height:40px; padding: 2px;"
                >
                    <v-btn
                    class="mx-2"
                    fab
                    dark
                    small
                    color="#FFFFFF"
                    style="height: 90%"
                    @click='open = !open'
                    >
                        <v-icon
                        color="#060963"
                        >
                            {{ codeIcon }}
                        </v-icon>
                    </v-btn>
                    <v-btn
                    class="mx-2"
                    fab
                    dark
                    small
                    color="#FFFFFF"
                    style="height: 90%"
                    >
                        <v-icon
                        color="#060963"
                        >
                            {{ infoIcon }}
                        </v-icon>
                    </v-btn>
                </div>
            </div>
            <transition :duration="{ enter: 500, leave: 800 }" name="code">
                <div
                    class="code-content"
                    v-if="open"
                >
                    <div class="code-paper">
                        <slot></slot>
                    </div>
                </div>
            </transition>
        </div>
       
    </v-container>
</template>

<script>
import { mdiXml, mdiInformationVariant } from '@mdi/js';

export default ({
    data(){
        return{
            codeIcon: mdiXml,
            infoIcon: mdiInformationVariant,
            open: false,
        }
    }
})
</script>


<style scope>
    .code-menu{
        max-width: 800px;
        border-radius: 5px;
        background: #060963;
        color: white;
        border: 2px solid #03064b;
    }
    .code-content{
        min-height: 50px;
        background: #7477d8;
        color: black;
        text-align: justify;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    .code-paper{
        background: #1E1E1E;
        color: white;
        padding: 5px;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    tag{
        color: #9CDCF0;
    }
    prop{
        color: #C39178;
    }
    class{
        color: #D7983D;
    }

    .code-enter-active,
    .code-leave-active {
        transition: opacity .5s ease;
    }

    .code-enter-from{
        opacity: 1;
    }
    .code-leave-to {
        opacity: 0;
    }

</style>