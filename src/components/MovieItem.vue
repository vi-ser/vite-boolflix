<script>
import axios from 'axios';
import { store } from '../store.js'

export default {
    name: 'MovieItem',

    props: {
        movie: Object,
    },

    data() {
        return {
            store,
        }
    },

    methods: {
        getFlagUrl(language) {

            if (language === 'en') {
                return 'https://flagcdn.com/gb-eng.svg';
            }

            else if (language === 'ko') {
                return 'https://flagcdn.com/kr.svg';
            }

            else {
                return 'https://flagcdn.com/' + language + '.svg';

            }
        },

    }
}

</script>

<template>
    <li class="movie d-flex flex-column justify-content-start">

        <img src="" alt="">
        <div class="img-container">
            <img id="language" :src="getFlagUrl(movie.original_language)">
        </div>
        <div class="text">
            <span id="title">{{ movie.title }}</span><br>
            <span id="original-title">Original title: {{ movie.original_title }}</span><br>
            <span id="vote">Vote: {{ movie.vote_count }}</span><br>
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