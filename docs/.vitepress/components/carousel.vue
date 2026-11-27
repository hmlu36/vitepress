<template>
  <div class="carousel-wrapper">
    <Carousel
      ref="carouselRef"
      v-model="currentSlide"
      :autoplay="5000"
      :wrap-around="true"
      :items-to-show="1"
      snap-align="center"
      :transition="500"
    >
      <Slide v-for="slide in slides" :key="slide.file">
        <div class="carousel__item">
          <p class="photo-caption"><strong>{{ slide.caption }}</strong></p>
          <img :src="slide.src" :alt="slide.caption" />
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';

const baseUrl = import.meta.env.BASE_URL;
const photosObject = import.meta.glob('../../public/photo/*.{jpg,JPG}');

const slides = Object.keys(photosObject)
  .map((photo) => photo.replace('../../public/photo/', ''))
  .sort()
  .map((file) => {
    const rawName = file.replace(/\.jpg$/i, '');
    const dotIndex = rawName.indexOf('.');
    const caption = dotIndex !== -1 ? rawName.substring(dotIndex + 1) : rawName;
    return {
      file,
      caption,
      src: `${baseUrl}photo/${encodeURIComponent(file)}`,
    };
  });

const currentSlide = ref(0);

</script>

<style scoped>
.carousel-wrapper {
  width: 100%;
  margin: 0 auto;
}

.carousel__item {
  width: 100%;
  padding: 0 0.5rem;
  box-sizing: border-box;
}

.carousel__slide:not(.carousel__slide--active) .carousel__item {
  cursor: pointer;
}

.photo-caption {
  margin: 0 0 1rem;
  text-align: center;
  font-size: clamp(1.25rem, 3vw, 2rem);
  overflow-wrap: anywhere;
}

.carousel__item img {
  display: block;
  width: 100%;
  height: calc(100vh - 12rem);
  margin: 0 auto;
  object-fit: contain;
}

</style>
