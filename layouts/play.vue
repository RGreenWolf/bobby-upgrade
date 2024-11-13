<template>
    <div class="bg-slate-950 w-screen h-screen p-1">
        <slot></slot>
    </div>
</template>
<script setup>
const toasts = useToast()
toasts.add({
    "id": "welcome",
    "title": "Bienvenue sur Bobby",
    "description": "Bobby est un jeu en développement fait par anawan-yt"
})
</script>