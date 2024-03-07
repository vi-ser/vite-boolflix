<script>
import { store } from '../store';

export default {
    name: 'AppNav',

    data() {
        return {
            store,
        }
    },
    methods: {
        refresh() {
            location.reload();
        }
    }
}
</script>

<template>
    <nav class="d-flex justify-content-between">
        <div class="left-container d-flex gap-5 align-items-center">
            <img @click="refresh()" src="/logo.svg" alt="">
            <ul class="categories list-unstyled d-flex gap-4 mb-0">
                <li @click="refresh()" class="active">Home</li>
                <li>Tv Shows</li>
                <li>Media</li>
                <li>Movies</li>
                <li>Recently Added</li>
                <li>My List</li>
            </ul>
        </div>
        <div class="right-container d-flex gap-4 align-items-center">
            <div id="search-bar" class="d-flex align-items-center mb-0">
                <input v-model="store.searchText" type="search" class="rounded-1" name="saerchText"
                    placeholder="Search for a movie">
                <button @click="$emit('search')" class="btn rounded-1">Search</button>
            </div>
            <i class="fa-solid fa-bell"></i>
            <img src="/img/avatar.svg" alt="">
        </div>

    </nav>

</template>

<style lang="scss" scoped>
nav {
    padding: 24px 72px;

    .left-container {

        img {
            width: 124px;

            &:hover {
                cursor: pointer;
            }
        }

        ul {
            user-select: none;
            color: #A2A2A2;

            li:hover {
                color: white;
                cursor: pointer;
            }

            li.active {
                font-weight: bold;
                color: white;
            }
        }
    }

    .right-container {
        #search-bar {
            display: flex;
            gap: 12px;

            margin-bottom: 1em;

            height: 40px;

            input {
                padding: 6px 8px;
                background-color: #3C3C3C;
                border: 1px solid #3C3C3C;
                height: 100%;
            }

            button {
                padding: 8px 12px;
                background-color: white;
                color: black;
                height: 100%;

                &:hover {
                    background-color: lightgrey;
                }
            }
        }

        i {
            font-size: 1.2em;

            &:hover {
                cursor: pointer;
            }
        }

        img {
            width: 40px;

            &:hover {
                cursor: pointer;
            }
        }

    }
}
</style>