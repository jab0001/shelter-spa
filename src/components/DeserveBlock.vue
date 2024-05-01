<template>
  <div class="deserve-block">
    <h3 class="deserve-block__title">Everyone deserves <br />love and care</h3>
    <img
      :src="
        mobile
          ? './images/friendly-dog-and-girl-mobile.jpg'
          : './images/friendly-dog-and-girl.png'
      "
      alt=""
      class="deserve-block__img"
    />
  </div>
</template>

<script>
export default {
  name: "DeserveBlock",

  props: {},

  components: {},

  data() {
    return {
      mobile: false,
    };
  },

  mounted() {
    if (window.innerWidth < 900) {
      this.mobile = true;
    }
  },
};
</script>

<style scoped lang="scss">
.deserve-block {
  margin-top: 200px;

  &__title {
    font-family: "Onest";
    font-size: 45px;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: -0.04em;
  }

  &__img {
    margin-top: 40px;

    width: 100%;
    height: auto;

    border-radius: 7px;
  }

  @media (max-width: 900px) {
    margin-top: 100px;
    padding: 0 16px;

    &__title {
      font-size: 30px;
      font-weight: 400;
      line-height: 33px;
      letter-spacing: -0.04em;
      text-align: left;
    }

    &__img {
      margin-top: 30px;
    }
  }
}
</style>
