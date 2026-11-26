<template>
  <div ref="carouselWrapper" class="carousel-wrapper" :style="{ maxWidth: containerMaxWidth }">
    <Carousel
      ref="carouselRef"
      v-model="currentSlide"
      :autoplay="5000"
      :wrap-around="true"
      :items-to-show="1.2"
      snap-align="center"
      :transition="500"
    >
      <Slide v-for="(slide, index) in slides" :key="slide.file">
        <div class="carousel__item" @click="onSlideClick(index)">
          <p class="photo-caption"><strong>{{ slide.caption }}</strong></p>
          <img :src="slide.src" :alt="slide.caption" />
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
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
const carouselRef = ref(null);
const carouselWrapper = ref(null);
const containerMaxWidth = ref('100%');

let resizeObserver;

// 點擊左右露出的照片卡切換（取代原本的箭頭）
const onSlideClick = (index) => {
  if (index !== currentSlide.value) {
    carouselRef.value?.slideTo(index);
  }
};

// 依照片方向調整容器寬度，讓直式/橫式照片交錯時都能貼合顯示、大小一致
// 快取量測結果，切換時「同步」套用容器寬度，避免在滑動動畫中間才改變尺寸導致卡在一半
const orientationCache = {};

const applyContainerWidth = (index) => {
  const item = slides[index];
  if (!item || typeof window === 'undefined') return;

  const orientation = orientationCache[item.file];
  if (orientation !== 'landscape' && orientation !== 'portrait') return;

  containerMaxWidth.value = orientation === 'landscape'
    ? '88%'
    : (window.innerWidth > 768 ? '42vw' : '100%');
};

const measureOrientation = (index) => {
  const item = slides[index];
  if (!item || orientationCache[item.file] || typeof window === 'undefined') return;

  orientationCache[item.file] = 'measuring';
  const img = new Image();
  img.src = item.src;
  img.onload = ({ target }) => {
    orientationCache[item.file] = target.width > target.height ? 'landscape' : 'portrait';
    if (index === currentSlide.value) {
      applyContainerWidth(index);
    }
  };
};

const resizeImage = () => {
  applyContainerWidth(currentSlide.value);
  measureOrientation(currentSlide.value);
};

watch(currentSlide, (index) => {
  resizeImage();
  // 預先量測前後照片的方向，之後切換時容器寬度就能立即生效
  measureOrientation((index + 1) % slides.length);
  measureOrientation((index - 1 + slides.length) % slides.length);
});

onMounted(() => {
  resizeImage();

  // 容器寬度隨直/橫式照片變化時，同步重算輪播位移，避免照片卡在中間
  if (typeof ResizeObserver !== 'undefined' && carouselWrapper.value) {
    resizeObserver = new ResizeObserver(() => {
      carouselRef.value?.updateSlideWidth();
    });
    resizeObserver.observe(carouselWrapper.value);
  }
});

onBeforeUnmount(() => {
  resizeObserver?.disconnect();
});

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
  max-height: calc(100vh - 12rem);
  object-fit: contain;
}

</style>
