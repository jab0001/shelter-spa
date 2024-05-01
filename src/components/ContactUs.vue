<template>
  <div :class="`contact contact-${$router.history.current.name}`">
    <div
      :class="`contact__wrapper contact__wrapper-${$router.history.current.name}`"
    >
      <p :class="`contact__text contact__text-${$router.history.current.name}`">
        {{ title }}
      </p>
      <LinkBtn :link="link" :title="btnText" class="contact__btn" />
    </div>
  </div>
</template>

<script>
import LinkBtn from "@/components/LinkBtn.vue";

export default {
  name: "ContactUs",

  props: {
    title: {
      type: String,
      default: `Do you have an interesting story, article or idea, please feel free
      to share it with us`,
    },
    btnText: {
      type: String,
      default: "Share a story",
    },
    link: {
      type: String,
      default: "/",
    },
  },

  components: {
    LinkBtn,
  },

  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.contact {
  display: flex;
  justify-content: center;

  &-shelters {
    border-top: 1px solid #272727;
  }

  &-blogs {
    border-top: 1px solid #272727;
    max-width: 1920px;
    margin: 0 auto;
  }

  &-about {
    border-top: 1px solid #272727;
    min-width: 1920px;
    margin-left: -260px;
  }

  &__wrapper {
    max-width: 60%;
    padding-top: 160px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    &-index {
      max-width: 82%;
    }

    &-blogs {
      max-width: 60%;
    }

    &-about {
      max-width: 60%;
    }
  }

  &__text {
    font-family: "Onest";
    font-size: 45px;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: -0.04em;

    width: 60%;

    &-support {
      width: 66.3%;
    }

    &-about {
      width: 66.3%;
    }
  }

  &__btn {
    margin-left: 6%;
  }

  @media (max-width: 900px) {
    &__wrapper {
      max-width: 90%;
      padding-top: 230px;

      &-shelters {
        padding-top: 80px;
      }

      &-shelter {
        padding-top: 80px;
      }

      &-about {
        padding-top: 80px;
      }

      &-support {
        padding-top: 80px;
      }

      &-blogs {
        padding-top: 80px;
      }

      &-blog {
        padding-top: 80px;
      }
    }

    &-about {
      border-top: 1px solid #272727;
      min-width: initial;
      margin-left: 0;
    }

    &__btn {
      margin-left: auto;
      margin-top: 18px;
      max-height: initial;
      padding: 11px 27px;
      font-size: 16px;
      font-weight: 400;
      line-height: 20.4px;
      text-align: left;
    }

    &__text {
      font-size: 26px;
      font-weight: 400;
      line-height: 31.2px;
      letter-spacing: -0.04em;
      text-align: left;

      width: 100%;
    }
  }
}
</style>
