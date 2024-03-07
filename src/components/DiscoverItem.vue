<script>

import MovieItem from '../components/MovieItem.vue'
import SerieItem from '../components/SerieItem.vue'

import { store } from '../store.js'

export default {
    name: 'DiscoverItem',

    components: {
        MovieItem,
        SerieItem,
    },

    data() {
        return {
            store,
        }
    }
}

</script>

<template>
    <div v-show="store.noResults" class="main-container">
        <div class="no-content-found d-flex flex-column justify-content-start align-items-start text-start">
            <span>Your search for {{ store.searchResult }} did not have any matches.</span>
            <span>Suggestions:</span>
            <ul class="text-start d-flex flex-column">
                <li class="mb-0 pb-0">Try different keywords</li>
                <li>Looking for a movie or TV show?</li>
            </ul>
        </div>
    </div>

    <div v-show="!store.noResults" class="main-container">
        <div v-show="!store.noMovies" class="p-5 bg-dark rounded-1">
            <h2 class="mb-4 text-uppercase fs-5">Movies</h2>
            <ul id="content" class="list-unstyled">
                <MovieItem v-for="currentMovie in store.movies" :movie="currentMovie"></MovieItem>
            </ul>
        </div>
        <br>
        <div v-show="!store.noSeries" class="p-5 bg-dark rounded-1">
            <br>
            <h2 class="mb-4 text-uppercase fs-5">TV Series</h2>
            <ul id="content" class="list-unstyled">
                <SerieItem v-for="currentSerie in store.series" :serie="currentSerie"></SerieItem>
            </ul>
        </div>
    </div>



</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;

.main-container {
    padding: 32px 72px 72px;

    #content {
        display: flex;
        flex-flow: wrap;

        gap: $movieGap;
        overflow-x: auto;
    }

}
</style>