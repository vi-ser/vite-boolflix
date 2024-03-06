<script>

import MovieItem from '../components/MovieItem.vue'
import { store } from '../store.js'

export default {
    name: 'DiscoverItem',

    components: {
        MovieItem,
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
        <h2 class="mb-4">Discover</h2>
        <ul class="list-unstyled">
            <MovieItem v-for="currentMovie in store.movies" :movie="currentMovie"></MovieItem>
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