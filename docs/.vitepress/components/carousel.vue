<template>
  <Carousel :autoplay="5000" :wrap-around="true">
    <Slide v-for="slide in slides" :key="slide">
      <div class="carousel__item">
        <span style="font-size: 40px;"><strong>{{ slide.replace(".jpg", "") }}</strong></span><br/>
        <img :src="'../photo/' + slide" />
      </div>
    </Slide>

    <template #addons>
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
    //const photos = require.context("/photo/", true, /\.jpg$/);

    //const url = new URL('/photo', import.meta.url).href
    //console.log(url);
    //const photos = import.meta.globEager(`/photo/*.jpg`);
    //console.log(JSON.stringify(photos));

    const photosObject = import.meta.glob('../../public/photo/*.jpg');
    const slides = Object.keys(photosObject).map((photo) =>
      photo.replace('../../public/photo/', '')
    );
    console.log(slides);

    return { slides };
  },
};
</script>

<style>
.carousel__prev--in-active,
.carousel__next--in-active {
  display: none;
}
</style>
