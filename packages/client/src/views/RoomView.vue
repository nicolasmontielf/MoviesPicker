<script setup lang="ts">
    import { getRoom } from '@/services/api.service'
    import { onMounted, ref } from 'vue'
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
    const socket = ref()
    function startSocketAndGetMovies() {
        socket.value = new socketClass(props.id)
        socket.value.getMovies(room.value?.genres as string);
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
        </div>
    </div>
</template>