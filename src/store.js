import { reactive } from 'vue'

export const store = reactive({

    movies: [],
    series: [],
    searchText: '',
    searchResult: '',
    noResults: false,
});