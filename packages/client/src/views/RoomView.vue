<script setup lang="ts">
    defineProps<{
        id: string
    }>()
</script>

<template>
    <div class="room">
        <h1>This is the room view: {{ id }}</h1>
    </div>
</template>

<style>
</style>
