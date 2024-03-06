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

            console.log(res.data.results);
            this.store.movies = res.data.results;
        })
    },

    methods: {

        searchMovies() {

            axios.get('https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=' + this.store.searchText)
                .then(res => {
                    console.log(res.data.results)

                    this.store.movies = res.data.results;
                });

            console.log("Ricerca percepita")
        },
    }
}
</script>

<template>
    <AppNav @search="searchMovies()"></AppNav>
    <AppExplorer></AppExplorer>
</template>

<style lang="scss"></style>
