import { reactive } from 'vue'

export const store = reactive({

    movies: [],
    series: [],
    searchText: '',
    searchResult: '',
    noMovies: false,
    noSeries: false,
    noResults: false,
    actors: '',
});