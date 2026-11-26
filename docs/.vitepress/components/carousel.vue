<template>
  <div class="carousel-wrapper" :style="{ maxWidth: containerMaxWidth }">
    <Carousel
      v-model="currentSlide"
      :autoplay="5000"
      :wrap-around="true"
      :items-to-show="1"
      :transition="500"
    >
      <Slide v-for="slide in slides" :key="slide.file">
        <div class="carousel__item">
          <p class="photo-caption"><strong>{{ slide.caption }}</strong></p>
          <img :src="slide.src" :alt="slide.caption" />
        </div>
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
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

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
const containerMaxWidth = ref('1080px');

const resizeImage = () => {
  const activeSlide = slides[currentSlide.value];
  if (!activeSlide || typeof window === 'undefined') return;

  const img = new Image();
  img.src = activeSlide.src;
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
.carousel-wrapper {
  width: 100%;
  margin: 0 auto;
  transition: max-width 0.3s ease;
}

.carousel__item {
  width: 100%;
  padding: 0 3rem;
  box-sizing: border-box;
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
  max-height: calc(100vh - 12rem);
  object-fit: contain;
}

.carousel__prev--in-active,
.carousel__next--in-active {
  display: none;
}
</style>
