<template>
  <div class="pre-wedding-wrapper">
    <Carousel
      ref="carouselRef"
      v-model="currentSlide"
      :autoplay="5000"
      :wrap-around="true"
      :items-to-show="1"
      snap-align="center"
      :transition="500"
    >
      <Slide v-for="photo in photos" :key="photo.file">
        <img
          class="pre-wedding-photo"
          :src="photo.src"
          :alt="photo.file"
        />
      </Slide>
    </Carousel>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';

const baseUrl = import.meta.env.BASE_URL;
const photos = Object.keys(import.meta.glob('../../public/preWedding/*.{jpg,JPG}'))
  .map((path) => path.split('/').pop())
  .sort()
  .map((file) => ({
    file,
    src: `${baseUrl}preWedding/${encodeURIComponent(file)}`,
  }));

const currentSlide = ref(0);

</script>

<style scoped>
.pre-wedding-wrapper {
  width: 100%;
  margin: 0 auto;
}

.pre-wedding-photo {
  display: block;
  width: 100%;
  height: calc(100vh - 8rem);
  box-sizing: border-box;
  margin: 0 auto;
  object-fit: contain;
}
</style>
