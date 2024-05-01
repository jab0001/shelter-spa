<template>
  <div class="thanks">
    <div class="thanks__left">
      <h2 class="thanks__title thanks__title-left">Share on social networks</h2>
      <p class="thanks__text thanks__text-left" v-html="first_text"></p>
      <ul class="thanks__list">
        <li class="thanks__item" v-for="link in links" :key="link.id">
          <a :href="link.url" target="_blank" class="thanks__link">{{
            link.name
          }}</a>
        </li>
      </ul>
    </div>
    <div class="thanks__right">
      <h2 class="thanks__title thanks__title-right">Thank you! 🧡</h2>
      <p class="thanks__text thanks__text-right" v-html="second_text"></p>
      <!-- <LinkBtn
        link=""
        title="Donate us"
        class="thanks__btn-donate"
      /> -->
    </div>
  </div>
</template>

<script>
/* import LinkBtn from "@/components/LinkBtn.vue"; */
export default {
  name: "ThanksBlock",

  props: {
    first_text: {
      type: String,
      default: `Help us raise awareness and support for this shelter! Share&nbsp;their
        page on social media to help raise awareness&nbsp;and new donations for
        this shelter. By spreading the word about this particular shelter, you
        can&nbsp;make a significant impact in providing the
        necessary&nbsp;resources and funding to care for the
        animals&nbsp;in&nbsp;their care. Every share can help generate
        new&nbsp;contributions and ensure that the shelter can continue&nbsp;its
        vital work.`,
    },
    second_text: {
      type: String,
      default: `We would like to express our deepest gratitude to each and every one of
        you who have generously donated to and shared information about the
        shelters. Your contributions directly benefit the shelters, providing
        vital resources and helping to improve the lives of the animals in their
        care.<br />
        Thank you also to those who have shared information about the shelters,
        raising awareness and encouraging others to get involved. Your efforts
        reach more people and inspire them to support these important causes.`,
    },
  },

  components: {
    /* LinkBtn, */
  },

  data() {
    return {
      links: [
        {
          id: 1,
          name: "Facebook",
          url: "https://www.test.com",
        },
        {
          id: 2,
          name: "Instagram",
          url: "https://www.test.com",
        },
        {
          id: 3,
          name: "Twitter",
          url: "https://www.test.com",
        },
        {
          id: 4,
          name: "Copy link",
          url: "https://www.test.com",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.thanks {
  border-top: 1px solid #272727;
  border-bottom: 1px solid #272727;

  display: flex;

  &__btn-donate {
    display: none;
  }

  &__title {
    font-family: "Onest";
    font-size: 45px;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: -0.04em;
    text-align: left;

    &-left {
      max-width: 554px;
      margin-left: auto;
      margin-right: 5%;
    }
  }

  &__text {
    margin-top: 60px;

    font-family: "Onest";
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    text-align: left;

    &-left {
      max-width: 557px;
      margin-left: auto;
      margin-right: 5%;
    }

    &-right {
      max-width: 770px;
    }
  }

  &__list {
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    max-width: 554px;
    margin-left: auto;
    margin-right: 5.5%;
  }

  &__left {
    padding: 80px 0;
    width: 44.8%;
  }

  &__right {
    border-left: 1px solid #272727;
    padding: 80px 0;
    padding-left: 1.5%;
    width: 55%;
    box-sizing: border-box;
  }

  &__link {
    font-family: "Onest";
    font-size: 30px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: -0.04em;
    text-align: left;

    color: #272727;

    &:hover {
      text-decoration: none;
      color: #ba6d00;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
     margin-top: 40px !important;

    &__btn-donate {
      display: block;
      width: fit-content;
      margin: 0 auto;
      margin-top: 30px;
    }

    &__left {
      width: 100vw;
      box-sizing: border-box;
      padding: 60px 16px;
      border-bottom: 1px solid #272727;
    }

    &__right {
      width: 100vw;
      box-sizing: border-box;
      border: none;
      padding: 60px 16px;
    }

    &__title {
      font-size: 30px;
      font-weight: 400;
      line-height: 33px;
      letter-spacing: -0.04em;
      text-align: left;
    }

    &__text {
      margin: 0;
      margin-top: 40px;

      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      text-align: left;
    }

    &__link {
      display: block;
      width: fit-content;
      margin: 0 auto;

      font-size: 20px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: -0.04em;
      text-align: left;
    }

    &__list {
      margin-top: 30px;
      flex-direction: column;
      gap: 14px 0;
    }
  }
}
</style>
