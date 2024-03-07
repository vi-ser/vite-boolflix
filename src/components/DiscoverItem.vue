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

    <div class="main-container">
        <div v-if="store.noResults || (store.movies.length === 0 && store.series.length === 0)"
            class="no-content-found d-flex flex-column justify-content-start align-items-start text-start">
            <span v-if="store.searchResult">Your search for {{ store.searchResult }} did not have any matches.</span>
            <span v-else>Suggestions:</span>
            <ul class="text-start d-flex flex-column">
                <li class="mb-0 pb-0 " v-if="store.searchResult">Try different keywords</li>
                <li v-if="store.searchResult">Looking for a movie or TV show?</li>
            </ul>
        </div>
        <div v-else>
            <h2 class="mb-4">Movies</h2>
            <ul id="content" class="list-unstyled">
                <MovieItem v-for="currentMovie in store.movies" :movie="currentMovie"></MovieItem>
            </ul>
            <br>
            <h2 class="mb-4">TV Series</h2>
            <ul id="content" class="list-unstyled">
                <SerieItem v-for="currentSerie in store.series" :serie="currentSerie"></SerieItem>
            </ul>
        </div>
    </div>



</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;

.main-container {
    padding: 32px 72px;

    #content {
        display: flex;
        flex-flow: wrap;

        gap: $movieGap;
        overflow-x: auto;
    }

}
</style>