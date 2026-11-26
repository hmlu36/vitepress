<template>
  <div class="pre-wedding-wrapper">
    <Carousel
      ref="carouselRef"
      v-model="currentSlide"
      :autoplay="5000"
      :wrap-around="true"
      :items-to-show="1.2"
      snap-align="center"
      :transition="500"
    >
      <Slide v-for="(photo, index) in photos" :key="photo.file">
        <img
          class="pre-wedding-photo"
          :src="photo.src"
          :alt="photo.file"
          @click="onPhotoClick(index)"
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
const carouselRef = ref(null);

// 點擊左右露出的照片卡切換（取代原本的箭頭）
const onPhotoClick = (index) => {
  if (index !== currentSlide.value) {
    carouselRef.value?.slideTo(index);
  }
};

</script>

<style scoped>
.pre-wedding-wrapper {
  width: 100%;
  margin: 0 auto;
}

.pre-wedding-photo {
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.5rem;
  max-height: calc(100vh - 8rem);
  object-fit: contain;
}

.carousel__slide:not(.carousel__slide--active) .pre-wedding-photo {
  cursor: pointer;
}
</style>
