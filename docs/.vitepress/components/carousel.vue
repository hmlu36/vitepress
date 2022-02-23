<template>
  <Carousel :autoplay="2000" :wrap-around="true">
    <Slide v-for="slide in photos" :key="slide">
      <span>{{ slide }}</span>
      <img :src="slide" />
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
    const photos = Object.keys(photosObject).map(photo => photo.replace("../../public", ""));
    console.log(photos);

    return { photos };
  },
};
</script>
