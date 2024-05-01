<template>
  <div class="gallery">
    <agile class="main" ref="main" :options="options1" :as-nav-for="asNavFor1">
      <div class="slide" v-for="(slide, index) in item.pictures" :key="index">
        <img class="slider__img" :src="slide.picture" />
      </div>
    </agile>
    <agile
      class="thumbnails"
      ref="thumbnails"
      :options="options2"
      :as-nav-for="asNavFor2"
    >
      <div
        class="slide slide-thumbnail"
        v-for="(slide, index) in item.pictures"
        :key="index"
        @click="$refs.thumbnails.goTo(index)"
      >
        <img class="slider__img-thumbnails" :src="slide.picture" />
      </div>
    </agile>
  </div>
</template>

<script>
import { VueAgile } from "vue-agile";

export default {
  name: "ShelterCardGallery",

  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },

  components: {
    agile: VueAgile,
  },

  data() {
    return {
      asNavFor1: [],
      asNavFor2: [],
      options1: {
        dots: false,
        fade: true,
        navButtons: false,
      },

      options2: {
        autoplay: false,
        centerMode: true,
        dots: false,
        navButtons: true,
        slidesToShow:
          this.item.pictures.length <= 6 ? this.item.pictures.length : 6,
      },
    };
  },

  methods: {},
  mounted() {
    this.asNavFor1.push(this.$refs.thumbnails);
    this.asNavFor2.push(this.$refs.main);
  },
};
</script>

<style scoped lang="scss">
.slider {
  width: 100%;
  &__img {
    width: 100%;
    max-height: 420px;
    border-radius: 7px;

    &-thumbnails {
      width: 60px;
      height: 60px;
    }
  }

  @media (max-width: 900px) {
    &__img {
      width: 100vw;
    }
  }
}

.thumbnails {
  margin-top: 8px;
  max-width: 445px;
}
</style>
