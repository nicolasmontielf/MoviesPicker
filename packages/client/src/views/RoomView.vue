<script setup lang="ts">
    import { getRoom } from '@/services/api.service'
    import { onMounted, ref, reactive } from 'vue'
    import type { Room } from '@movies/common/types';
    import socketClass from '@/services/socket.service'

    // Props from the router
    const props = defineProps<{
        id: string
    }>()
    
    // Get room data from the API
    const room = ref<Room>()
    async function fetchRoom() { 
        room.value = await getRoom(props.id)
    }

    // Socket data
    const socket = reactive(new socketClass(props.id))
    function startSocketAndGetMovies() {
        socket.start()
        socket.getMovies(room.value?.genres as string);
    }
    
    onMounted(async () => {
        await fetchRoom()
        startSocketAndGetMovies()
    })
</script>

<template>
    <div class="room">
        <h1>This is the room view: {{ id }}</h1>

        <div>
            <p>{{ room }}</p>

            <div>
                {{JSON.stringify(socket.movies)}}
            </div>
        </div>
    </div>
</template>