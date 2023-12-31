<template>
    <div v-if="currentMovie">
        <h1>{{ currentMovie?.title }}</h1>
        <!-- <p>{{ movie.overview }}</p> -->
        <img :src="generateImgUrl(currentMovie?.poster_path)" />
        
        <div class="mt-2">
            <button class="mx-4" @click="() => vote(true, currentMovie?.id)">Si</button>
            <button class="mx-4" @click="() => vote(false, currentMovie?.id)">No</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Movie } from '@movies/common/types';
import { computed, ref } from 'vue';

const props = defineProps<{
    movies: Movie[];
}>();

const emit = defineEmits<{
    (e: 'get-more-movies'): void;
}>()

const currentIndex = ref(0);

const currentMovie = computed(() => {
    return props.movies[currentIndex.value];
})

function generateImgUrl(path: string) {
    return `https://image.tmdb.org/t/p/w300${path}`;
}

function vote(vote: boolean, id: number) {
    console.log(vote, id);
    currentIndex.value++;

    if (currentIndex.value == props.movies.length - 3) {
        emit('get-more-movies');
    }
}
</script>