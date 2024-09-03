<template>
  <div class="home">
    <div class="home__help-block help-block">
      <div class="help-block__wrapper">
        <h2 class="help-block__title">
          Find an
          <span class="help-block__title--yellow"> animal shelter</span><br />
          that you will help
        </h2>
        <LinkBtn
          link="shelters"
          title="Find a shelter"
          class="help-block__btn"
        />
      </div>
      <img
        :src="
          mobile
            ? './images/cat-and-dog-mobile.jpg'
            : './images/cat-and-dog.jpg'
        "
        alt=""
        class="help-block__img"
      />
    </div>

    <DonationBlock class="home__donation" />

    <DeserveBlock />

    <WorkBlock />

    <div class="home__stories-block stories-block">
      <div class="stories-block__wrapper">
        <h3 class="home__title stories-block__title">Stories and ideas</h3>

        <LinkBtn link="blogs" title="Go to blog" class="stories-block__btn" />
      </div>

      <div class="slider">
        <agile
          :slidesToShow="mobile ? 1.1 : 3"
          :navButtons="true"
          :dots="false"
        >
          <div
            class="slider__wrapper"
            v-for="slider in getSliderList"
            :key="slider.id"
          >
            <div class="slider__container">
              <div class="slider__info">
                <p class="slider__info-date">{{ slider.date }}</p>
                <span class="slider__info-dot">✦</span>
                <p class="slider__info-name">{{ slider.name }}</p>
              </div>
              <h4 class="slider__title">{{ slider.title }}</h4>
              <p class="slider__text">{{ slider.text }}</p>
              <div class="slider__img-wrapper">
                <img class="slider__img" :src="`${slider.image}`" />
                <ul class="slider__list">
                  <li
                    class="slider__item"
                    v-for="(theme, index) in slider.themes"
                    :key="index"
                  >
                    {{ theme }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <template slot="prevButton">
            <svg
              width="33"
              height="12"
              viewBox="0 0 33 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.469669 6.53033C0.176777 6.23744 0.176777 5.76256 0.469669 5.46967L5.24264 0.696699C5.53553 0.403806 6.01041 0.403806 6.3033 0.696699C6.59619 0.989593 6.59619 1.46447 6.3033 1.75736L2.06066 6L6.3033 10.2426C6.59619 10.5355 6.59619 11.0104 6.3033 11.3033C6.01041 11.5962 5.53553 11.5962 5.24264 11.3033L0.469669 6.53033ZM33 6.75H1V5.25H33V6.75Z"
                fill="#272727"
              />
            </svg>
          </template>
          <template slot="nextButton">
            <svg
              width="33"
              height="12"
              viewBox="0 0 33 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.5303 6.53033C32.8232 6.23744 32.8232 5.76256 32.5303 5.46967L27.7574 0.696699C27.4645 0.403806 26.9896 0.403806 26.6967 0.696699C26.4038 0.989593 26.4038 1.46447 26.6967 1.75736L30.9393 6L26.6967 10.2426C26.4038 10.5355 26.4038 11.0104 26.6967 11.3033C26.9896 11.5962 27.4645 11.5962 27.7574 11.3033L32.5303 6.53033ZM0 6.75H32V5.25H0V6.75Z"
                fill="#272727"
              />
            </svg>
          </template>
        </agile>
      </div>
      <ContactUs link="new-topic" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ContactUs from "@/components/ContactUs.vue";
import LinkBtn from "@/components/LinkBtn.vue";
import DonationBlock from "@/components/DonationBlock.vue";
import DeserveBlock from "@/components/DeserveBlock.vue";
import WorkBlock from "@/components/WorkBlock.vue";
import { VueAgile } from "vue-agile";

export default {
  name: "HomeView",

  components: {
    agile: VueAgile,
    ContactUs,
    LinkBtn,
    DonationBlock,
    DeserveBlock,
    WorkBlock,
  },

  data() {
    return {
      mobile: false,
    };
  },
  computed: {
    ...mapGetters({
      getSliderList: "home/getSliderList",
    }),
  },
  methods: {
    ...mapActions({
      fetchSliderList: "home/fetchSliderList",
    }),
  },
  created() {
    this.fetchSliderList();
    if (window.innerWidth < 900) {
      this.mobile = true;
    }
  },
};
</script>

<style lang="scss">
.agile__actions {
  position: absolute;
  top: -86px;
  left: 0px;

  @media (max-width: 900px) {
    display: none;
  }
}

.agile__nav-button {
  border: none;
  background: none;
  padding: 0;

  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  &--next {
    margin-left: 14px;
  }
}
</style>

<style scoped lang="scss">
.home {
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 160px;
  margin-bottom: 200px;

  &__title {
    font-family: "Onest";
    font-size: 45px;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: -0.04em;
  }

  &__donation {
    margin-top: 156px;
  }

  @media (max-width: 900px) {
    margin-top: 60px;
    margin-bottom: 100px;

    &__title {
      font-size: 30px;
      font-weight: 400;
      line-height: 33px;
      letter-spacing: -0.04em;
      text-align: left;
    }

    &__donation {
      margin-top: 57px;
    }
  }
}

.help-block {
  &__wrapper {
    display: flex;
    max-width: 1018px;
    justify-content: space-between;
  }

  &__img {
    margin-top: 50px;
    width: 100%;
    height: auto;
    border-radius: 7px;
  }

  &__btn {
    margin-top: 67px;
  }

  &__title {
    font-family: "Onest";
    font-size: 62px;
    font-weight: 500;
    line-height: 74px;
    letter-spacing: -0.04em;

    &--yellow {
      background: #d1d457;
      border-radius: 40px;
      color: #fffcf9;
      padding: 0px 19px;
    }
  }

  @media (max-width: 900px) {
    padding: 0 16px;

    &__wrapper {
      max-width: initial;
      flex-wrap: wrap;
      justify-content: center;
    }

    &__title {
      font-size: 32px;
      font-weight: 500;
      line-height: 38.4px;
      letter-spacing: -0.04em;

      width: 100%;

      &--yellow {
        padding: 0 9px;
      }
    }

    &__btn {
      margin-top: 28px;
      max-height: 20px;
      padding: 10px 29px;
      font-size: 16px;
      font-weight: 400;
      line-height: 20.4px;
    }

    &__img {
      margin-top: 30px;
      width: 100%;
      height: 100%;
      border-radius: 7px;
    }
  }
}

.stories-block {
  margin-top: 200px;

  &__wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__btn {
    margin-top: 40px;
  }

  @media (max-width: 900px) {
    margin-top: 160px;
    position: relative;

    &__wrapper {
      padding: 0 16px;
    }

    &__btn {
      position: absolute;
      top: 555px;
      right: 50%;
      max-height: initial;
      padding: 11px 42px;
      transform: translate(50%, 0);
      font-size: 16px;
      font-weight: 400;
      line-height: 20.4px;
      text-align: left;
    }
  }
}

.slider {
  margin-top: 80px;

  &__container {
    max-width: 430px;
  }

  &__info {
    display: flex;
    position: relative;
    &-date,
    &-name {
      font-family: "Onest";
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }

    &-name {
      margin-left: 12px;
    }

    &-dot {
      margin-left: 10px;
      display: flex;
      align-items: center;
    }
  }

  &__title {
    font-family: "Onest";
    font-size: 26px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: -0.04em;

    width: 90%;
  }

  &__text {
    margin-top: 10px;

    font-family: "Onest";
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;

    width: 90%;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__img {
    max-width: 100%;
    max-height: auto;

    &-wrapper {
      margin-top: 20px;
      position: relative;
    }
  }

  &__list {
    top: 30px;
    left: 31px;
    position: absolute;
    display: flex;
    max-width: 50%;
  }

  &__item {
    padding: 4px 10px;

    font-family: "Onest";
    font-size: 13px;
    font-weight: 500;
    line-height: 13px;
    letter-spacing: -0.04em;

    text-transform: uppercase;

    border-radius: 19px;
    background-color: #d1d457;

    &:not(:first-child) {
      margin-left: 12px;
    }
  }

  @media (max-width: 900px) {
    margin-top: 60px;

    &__container {
      padding: 0 16px;
    }

    &__title {
      font-size: 18px;
      font-weight: 500;
      line-height: 21.6px;
      letter-spacing: -0.04em;
      text-align: left;
    }

    &__text {
      font-size: 14px;
      font-weight: 400;
      line-height: 18.9px;
      text-align: left;
    }

    &__img-wrapper {
      margin-top: 12px;
    }

    &__img {
      max-height: 300px;
    }

    &__info {
      &-date,
      &-name {
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        text-align: left;
      }

      &-name {
        margin-left: 9px;
      }
    }
  }
}
</style>
