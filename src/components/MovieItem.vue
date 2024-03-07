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

        getCover(cover) {
            if (cover == null) {
                return 'https://picsum.photos/342/500'
            } else {
                return 'https://image.tmdb.org/t/p/w342/' + cover;
            }
        },

        roundVote(number) {
            number /= 2;
            return number.toFixed(0);
        },

    }
}

</script>

<template>
    <li class="movie d-flex flex-column justify-content-start">
        <img id="cover" class="mb-2" :src="getCover(movie.poster_path)" :alt="movie.title">
        <div class="img-container">
            <img id="language" :src="getFlagUrl(movie.original_language)">
        </div>
        <div class="text">
            <span id="title">{{ movie.title }}</span><br>
            <span v-show="movie.title !== movie.original_title" id="original-title">Original title: {{
            movie.original_title
        }}</span><br>
            <span id="vote">Vote: {{ roundVote(movie.vote_average) }}</span><br>
        </div>
    </li>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;
@use '../styles/general' as *;

li {

    width: calc(100% / 5 - $movieGap / 5 * 4);

    #cover {
        aspect-ratio: 4 / 6;
    }

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