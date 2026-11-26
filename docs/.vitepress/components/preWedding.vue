<template>
  <div class="pre-wedding-wrapper" :style="{ maxWidth: containerMaxWidth }">
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
      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';

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
const containerMaxWidth = ref('100%');

// 點擊左右露出的照片卡切換（取代原本的箭頭）
const onPhotoClick = (index) => {
  if (index !== currentSlide.value) {
    carouselRef.value?.slideTo(index);
  }
};

// 依照片方向調整容器寬度，讓直式/橫式照片交錯時都能貼合顯示、大小一致
const resizeImage = () => {
  const activePhoto = photos[currentSlide.value];
  if (!activePhoto || typeof window === 'undefined') return;

  const img = new Image();
  img.src = activePhoto.src;
  img.onload = ({ target }) => {
    if (target.width > target.height) {
      containerMaxWidth.value = '88%';
    } else {
      containerMaxWidth.value = window.innerWidth > 768 ? '42vw' : '100%';
    }
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
  box-sizing: border-box;
  padding: 0 0.5rem;
  max-height: calc(100vh - 8rem);
  object-fit: contain;
}

.carousel__slide:not(.carousel__slide--active) .pre-wedding-photo {
  cursor: pointer;
}
</style>
