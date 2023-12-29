<script setup lang="ts">
    import GenresList from '@/components/Home/GenresList.vue'
    import { ref } from 'vue'

    const genres = ref<number[]>([])

    function handleGenresChange(selectedGenres: number[]) {
        genres.value = selectedGenres
    }

</script>

<template>
    <main>
        <p>{{ genres }}</p>
        <GenresList @genre-updated="handleGenresChange" />
    </main>
</template>
