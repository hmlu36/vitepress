<template>
  <Carousel :autoplay="5000" :wrap-around="true" :items-to-show="1" :transition="500">
    <Slide v-for="photo in photos" :key="photo">
      <img class="pre-wedding-photo" :src="`${baseUrl}preWedding/${encodeURIComponent(photo)}`" :alt="photo" />
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';

const baseUrl = import.meta.env.BASE_URL;
const photos = Object.keys(import.meta.glob('../../public/preWedding/*.jpg'))
  .map((path) => path.split('/').pop())
  .sort();
</script>

<style scoped>
.pre-wedding-photo {
  display: block;
  width: 100%;
  max-height: calc(100vh - 8rem);
  object-fit: contain;
}
</style>
