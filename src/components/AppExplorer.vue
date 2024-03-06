<script>

import DiscoverItem from '../components/DiscoverItem.vue'
import { store } from '../store.js'

export default {
    name: 'AppExplorer',

    components: {
        DiscoverItem,
    },

    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <DiscoverItem></DiscoverItem>
</template>

<style lang="scss"></style>
