<template>
    <div>
        <h2 class="mb-4 text-2xl font-semibold text-gray-900">
            Genres
        </h2>
        <div
            class="flex items-center mb-1"
            v-for="genre in genres"
            :key="genre.id"
        >
            <input
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                :value="genre.id"
                v-model="checked"
                :id="`genre_${genre.id}`"
            />
            <label
                class="ms-2 text-sm font-medium text-gray-900"
                :for="`genre_${genre.id}`"
            >
                {{ genre.name }}
            </label>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, watch } from 'vue'
    import { getGenres } from '@/services/api.service'
    import type { Genre } from '@movies/common/types';

    const checked = ref<number[]>([])
    const genres = ref<Genre[]>([])

    async function fetchGenres(): Promise<void> {
        genres.value = await getGenres()
    }
    fetchGenres()

    const emit = defineEmits<{
        (e: 'genreUpdated', value: number[]): void
    }>()

    watch(checked, (value) => {
        emit('genreUpdated', value)
    })

</script>