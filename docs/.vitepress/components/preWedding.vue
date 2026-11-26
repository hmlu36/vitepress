<template>
  <div class="pre-wedding-wrapper" :style="{ maxWidth: containerMaxWidth }">
    <Carousel
      v-model="currentSlide"
      :autoplay="5000"
      :wrap-around="true"
      :items-to-show="1"
      :transition="500"
    >
      <Slide v-for="photo in photos" :key="photo.file">
        <img class="pre-wedding-photo" :src="photo.src" :alt="photo.file" />
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';

const baseUrl = import.meta.env.BASE_URL;
const photos = Object.keys(import.meta.glob('../../public/preWedding/*.{jpg,JPG}'))
  .map((path) => path.split('/').pop())
  .sort()
  .map((file) => ({
    file,
    src: `${baseUrl}preWedding/${encodeURIComponent(file)}`,
  }));

const currentSlide = ref(0);
const containerMaxWidth = ref('1080px');

const resizeImage = () => {
  const activePhoto = photos[currentSlide.value];
  if (!activePhoto || typeof window === 'undefined') return;

  const img = new Image();
  img.src = activePhoto.src;
  img.onload = ({ target }) => {
    containerMaxWidth.value = target.width > target.height ? '1080px' : '720px';
  };
};

watch(currentSlide, () => {
  resizeImage();
});

onMounted(() => {
  resizeImage();
});
</script>

<style scoped>
.pre-wedding-wrapper {
  width: 100%;
  margin: 0 auto;
  transition: max-width 0.3s ease;
}

.pre-wedding-photo {
  display: block;
  width: 100%;
  max-height: calc(100vh - 8rem);
  object-fit: contain;
}
</style>
