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
        <h2 class="mb-4">Movies</h2>
        <ul class="list-unstyled">
            <MovieItem v-for="currentMovie in store.movies" :movie="currentMovie"></MovieItem>
        </ul>
        <h2 class="mb-4">TV Series</h2>
        <ul class="list-unstyled">
            <SerieItem v-for="currentSerie in store.series" :serie="currentSerie"></SerieItem>
        </ul>
    </div>



</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;

.main-container {
    padding: 32px 72px;

    ul {
        display: flex;
        flex-flow: wrap;

        gap: $movieGap;
        overflow-x: auto;
    }

}
</style>