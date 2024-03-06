<script>
import axios from 'axios';
import { store } from '../store.js'

export default {
    name: 'SerieItem',

    props: {
        serie: Object,
    },

    data() {
        return {
            store,
        }
    },

    methods: {
        getFlagUrl(language) {

            if (language === 'en') {
                return 'https://flagcdn.com/us.svg';
            }

            else if (language === 'ja') {
                return 'https://flagcdn.com/jp.svg';
            }

            else if (language === 'zh') {
                return 'https://flagcdn.com/cn.svg';
            }

            else if (language === 'hi') {
                return 'https://flagcdn.com/in.svg';
            }

            else if (language === 'ko') {
                return 'https://flagcdn.com/kr.svg';
            }

            else if (language === 'cs') {
                return 'https://flagcdn.com/cz.svg';
            }

            else if (language === 'el') {
                return 'https://flagcdn.com/gr.svg';
            }

            else {
                return 'https://flagcdn.com/' + language + '.svg';
            }
        },

        roundVote(number) {
            return number.toFixed(1);
        },

    }
}

</script>

<template>
    <li class="serie d-flex flex-column justify-content-start">
        <img src="" alt="">
        <div class="img-container">
            <img id="language" :src="getFlagUrl(serie.original_language)">
        </div>
        <div class="text">
            <span id="title">{{ serie.name }}</span><br>
            <span v-show="serie.name !== serie.original_name" id="original-title">Original name: {{ serie.original_name
                }}</span><br>
            <span id="vote">Vote: {{ roundVote(serie.vote_average) }}</span><br>
        </div>
    </li>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;
@use '../styles/general' as *;

li {

    width: calc(100% / 5 - $movieGap / 5 * 4);

    #language {
        height: 10px;
    }

    .text {

        #title {
            font-size: 1.2em;
            width: 100%;
        }

        #original-title {
            font-size: .9em;
        }

        #vote {
            color: #00E164;
            font-size: .9em;
        }
    }

}
</style>