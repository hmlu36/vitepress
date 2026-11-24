<template>
  <audio class="audio-player" controls preload="metadata" :src="`${baseUrl}${file}`">
    您的瀏覽器不支援音訊播放。
  </audio>
</template>

<script setup>
defineProps({
  file: {
    type: String,
    required: true,
  },
});

const baseUrl = import.meta.env.BASE_URL;
</script>

<style scoped>
.audio-player {
  display: block;
  width: min(100%, 32rem);
  margin: 1rem 0;
}
</style>
