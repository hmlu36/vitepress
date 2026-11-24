<template>
  <Carousel :autoplay="5000" :wrap-around="true" :items-to-show="1" :transition="500">
    <Slide v-for="slide in slides" :key="slide">
      <div class="carousel__item">
        <p class="photo-caption"><strong>{{ slide.replace(/\.jpg$/i, '') }}</strong></p>
        <img :src="`${baseUrl}photo/${encodeURIComponent(slide)}`" :alt="slide.replace(/\.jpg$/i, '')" />
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup() {
    const photosObject = import.meta.glob('../../public/photo/*.jpg');
    const slides = Object.keys(photosObject).map((photo) =>
      photo.replace('../../public/photo/', '')
    ).sort();
    const baseUrl = import.meta.env.BASE_URL;

    return { slides, baseUrl };
  },
};
</script>

<style scoped>
.carousel__item {
  width: 100%;
  padding: 0 3rem;
  box-sizing: border-box;
}

.photo-caption {
  margin: 0 0 1rem;
  font-size: clamp(1.25rem, 3vw, 2.5rem);
  overflow-wrap: anywhere;
}

.carousel__item img {
  display: block;
  width: 100%;
  max-height: calc(100vh - 12rem);
  object-fit: contain;
}

.carousel__prev--in-active,
.carousel__next--in-active {
  display: none;
}
</style>
