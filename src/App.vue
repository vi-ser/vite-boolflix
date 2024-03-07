<script>
import axios from 'axios';
import { store } from './store.js'
import AppNav from './components/AppNav.vue'
import AppExplorer from './components/AppExplorer.vue'

export default {

    components: {
        AppNav,
        AppExplorer,
    },

    data() {
        return {
            store,
        }
    },

    created() {
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=9a5bf9d0d0e38756373c9b8e6d6b6c10').then(res => {
            this.store.movies = res.data.results;
        })

        axios.get('https://api.themoviedb.org/3/discover/tv?api_key=9a5bf9d0d0e38756373c9b8e6d6b6c10').then(res => {
            this.store.series = res.data.results;
        })
    },

    methods: {

        searchContent() {
            // resetto le variabili
            this.store.noMovies = false;
            this.store.noSeries = false;
            this.store.noResults = false;

            // se l'input non è vuoto o composto da spazi
            if (this.store.searchText.trim() !== '') {
                // multi per ottenere sia film che serie tv
                axios.get('https://api.themoviedb.org/3/search/multi?api_key=9a5bf9d0d0e38756373c9b8e6d6b6c10&query=' + this.store.searchText)
                    .then(res => {
                        // filtro i film
                        this.store.movies = res.data.results.filter(content => content.media_type === 'movie');
                        // filtro le serie tv
                        this.store.series = res.data.results.filter(content => content.media_type === 'tv');

                        if (this.store.movies.length === 0) {
                            this.store.noMovies = true;
                        }

                        if (this.store.series.length === 0) {
                            this.store.noSeries = true;
                        }

                        if (this.store.noMovies && this.store.noSeries) {
                            this.store.noResults = true;
                        }

                    });
            }
        },

    }
}
</script>

<template>
    <AppNav @search="searchContent()"></AppNav>
    <AppExplorer></AppExplorer>
</template>

<style lang="scss"></style>
