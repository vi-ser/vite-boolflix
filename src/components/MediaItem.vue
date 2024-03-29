<script>
import axios from 'axios';
import { store } from '../store.js'


export default {
    name: 'MediaItem',

    props: {
        media: Object,
        title: String,
        original_title: String,
        mediaType: String,
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

        getCover(cover) {
            if (cover == null) {
                return 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
            } else {
                return 'https://image.tmdb.org/t/p/w342/' + cover;
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

        addHoverClass() {
            this.isHovered = true;
        },

        removeHoverClass() {
            this.isHovered = false;
        },

        castShow() {
            axios.get('https://api.themoviedb.org/3/' + this.mediaType + '/' + this.media.id + '/credits?api_key=9a5bf9d0d0e38756373c9b8e6d6b6c10')
                .then(res => {
                    this.store.actors = res.data.cast;

                    this.store.actors = res.data.cast.slice(0, 5);
                    if (this.store.actors.length === 0) {
                        this.store.actors = [{ name: 'No credits' }];
                    }

                });
        }
    }
}
</script>

<template>
    <li @mouseenter="addHoverClass" @mouseleave="removeHoverClass" id="media-element"
        class="serie d-flex flex-column justify-content-start" :class="{ 'hovered': isHovered }">
        <div class="front-card">
            <div class="cover-container">
                <img id="cover" :src="getCover(media.poster_path)" :alt="title">
            </div>
        </div>
        <div class="back-card">

            <div class="text">
                <span id="title">{{ title }}</span><br>
                <span id="vote" v-html="starVote(media.vote_average)"></span><br>
                <span v-show="title !== original_title" id="original-title"><strong>Original name:
                    </strong>{{
            original_title }}</span> <br> <br>
                <span v-if="media.overview.length < 100" id="overview">{{ media.overview }}</span>
                <div v-else>{{ media.overview.substring(0, 100) + ".." }}</div>
                <a :href="'https://www.themoviedb.org/' + mediaType + '/' + media.id" target="_blank">more</a>

            </div>
            <div class="flag-container">
                <img id="language" :src="getFlagUrl(media.original_language)">
            </div>

            <div @click="castShow" class="dropup">
                <a class="btn btn-secondary btn-sm dropdown-toggle px-2 border-white text-uppercase bg-white text-black fw-bold"
                    href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    cast
                </a>

                <ul class="dropdown-menu px-3 py-1 mb-2 bg-dark">
                    <li class="dropdown-item text-white my-2 user-select-none text-uppercase fw-bold">credits</li>
                    <li v-for="actor in store.actors"><a class="dropdown-item text-white mb-2"
                            :href="'https://www.themoviedb.org/person/' + actor.id" target="_blank">{{ actor.name
                            }}</a></li>
                </ul>
            </div>
        </div>
    </li>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;
@use '../styles/general' as *;

#media-element {

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
                text-transform: uppercase;
                color: lightgray;

                &:hover {
                    color: white;
                }
            }
        }

        .dropup {
            position: absolute;
            left: 20px;
            bottom: 20px;
        }

        .dropdown-item:hover {
            background-color: transparent;
        }

        .dropdown-toggle::after {
            display: none;
        }
    }

    li.hovered .back-card {
        transform: rotateY(0deg);
    }

}
</style>
