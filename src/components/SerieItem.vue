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
            isHovered: false,
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

        starVote(number) {
            number /= 2;
            number = Math.round(number);

            if (number == 0) {
                number = 1;
            }

            switch (number) {
                case 1:
                    return '<i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>';

                case 2:

                    return '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>';

                case 3:
                    return '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>';

                case 4:
                    return '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>';

                case 5:
                    return '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>'
            }
        },

        getCover(cover) {
            if (cover == null) {
                return 'https://picsum.photos/342/500'
            } else {
                return 'https://image.tmdb.org/t/p/w342/' + cover;
            }
        },

        addHoverClass() {
            this.isHovered = true;
        },

        removeHoverClass() {
            this.isHovered = false;
        }

    }
}

</script>

<template>
    <li @mouseenter="addHoverClass" @mouseleave="removeHoverClass"
        class="serie d-flex flex-column justify-content-start" :class="{ 'hovered': isHovered }">
        <div class="front-card">
            <div class="cover-container">
                <img id="cover" :src="getCover(serie.poster_path)" :alt="serie.name">
            </div>
        </div>
        <div class="back-card">

            <div class="text">
                <span id="title">{{ serie.name }}</span><br>
                <span id="vote" v-html="starVote(serie.vote_average)"></span><br>
                <span v-show="serie.name !== serie.original_name" id="original-title"><strong>Original name: </strong>{{
            serie.original_name }}</span><br><br>
                <span v-if="serie.overview.length < 100" id="overview">{{ serie.overview }}</span>
                <div v-else>{{ serie.overview.substring(0, 100) + ".." }}</div>
                <a :href="'https://www.themoviedb.org/tv/' + serie.id" target="_blank">more</a>
            </div>
            <div class="flag-container">
                <img id="language" :src="getFlagUrl(serie.original_language)">
            </div>
        </div>
    </li>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;
@use '../styles/general' as *;

li {

    width: calc(100% / 5 - $movieGap / 5 * 4);
    position: relative;

    transition: transform 0.5s;
    transform-style: preserve-3d;

    &.hovered {
        transform: rotateY(-180deg);
    }

    .front-card {

        border: 1px solid #212529;

        .cover-container {

            aspect-ratio: 4 / 6;
            backface-visibility: hidden;


            #cover {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

        }
    }

    .back-card {

        position: absolute;

        left: 0;
        top: 0;

        padding: 20px;
        background-color: #141414f7;
        width: 100%;
        height: 100%;

        backface-visibility: hidden;
        transform: rotateY(180deg);

        #language {
            height: 10px;
            position: absolute;
            right: 20px;
            bottom: 20px;
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
                color: white;
                font-size: .7em;
                letter-spacing: 2px;
            }

            a {
                position: absolute;
                bottom: 20px;
                left: 20px;
                text-transform: uppercase;
                color: lightgray;

                &:hover {
                    color: white;
                }
            }
        }

    }

    li.hovered .back-card {
        transform: rotateY(0deg);
    }

}
</style>