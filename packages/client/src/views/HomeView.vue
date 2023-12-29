<script setup lang="ts">
    import GenresList from '@/components/Home/GenresList.vue'
    import { createRoom } from '@/services/api.service'
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'

    const router = useRouter()

    const genres = ref<number[]>([])

    function handleGenresChange(selectedGenres: number[]) {
        genres.value = selectedGenres
    }

    async function createNewRoom() {
        const room = await createRoom(genres.value.toString())
        router.push({
            name: 'room',
            params: { id: room.id },
        })
    }
</script>

<template>
    <main>
        <p>{{ genres }}</p>
        <GenresList @genre-updated="handleGenresChange" />

        <div class="mt-3">
            <button
                type="button"
                class="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                @click="createNewRoom"
            >
                Crear Room
            </button>
        </div>
    </main>
</template>
