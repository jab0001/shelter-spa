<template>
  <div class="work-block">
    <div class="work-block__wrapper">
      <h3 class="work-block__title">{{ mainTitle }}</h3>
      <LinkBtn :link="link" :title="title" class="work-block__btn" />
    </div>
    <ul class="work-block__list">
      <li class="work-block__item" v-for="info in items" :key="info.id">
        <h4 class="work-block__item-title">
          {{ info.id + 1 }}. &nbsp;{{ info.title }}
        </h4>
        <p class="work-block__item-text">
          {{ info.content }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import LinkBtn from "@/components/LinkBtn.vue";
export default {
  name: "WorkBlock",

  props: {
    mainTitle: {
      type: String,
      default: "How the platform works",
    },
    items: {
      type: Array,
      default: () => [
        {
          id: 0,
          title: "Select the search options",
          content:
            "You can choose from a range of selection criteria to make a more informed and efficient decision.",
        },
        {
          id: 1,
          title: "Check out suitable shelters",
          content:
            "Explore in-depth information about each shelter on their dedicated pages, where you'll find all available details.",
        },
        {
          id: 2,
          title: "Donate to the chosen shelter",
          content:
            "Discover the shelter's bank account information and other details on the shelter page, along with guidance and tips on how to make a donation.",
        },
        {
          id: 3,
          title: "Share on social media",
          content:
            "Make a difference for the shelter by sharing information about their mission and needs on social media. By raising awareness and encouraging others to get involved, you can help the shelter secure the support it needs to continue its life-saving work. ",
        },
      ],
    },
    link: {
      type: String,
      default: "shelters",
    },
    title: {
      type: String,
      default: "Find a shelter",
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
.work-block {
  display: flex;
  margin-top: 195px;
  justify-content: space-between;

  &__title {
    font-family: "Onest";
    font-size: 45px;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: -0.04em;
  }

  &__wrapper {
    width: 35%;
    display: flex;
    flex-direction: column;
  }

  &__btn {
    margin-top: auto;
    width: fit-content;
  }

  &__list {
    width: 57.2%;
  }

  &__item {
    &:not(:first-child) {
      margin-top: 40px;
    }

    padding-bottom: 39px;
    border-bottom: 1px solid #272727;

    &-title {
      font-family: "Onest";
      font-size: 30px;
      font-weight: 500;
      line-height: 30px;
      letter-spacing: -0.04em;
    }

    &-text {
      margin-top: 14px;

      font-family: "Onest";
      font-size: 20px;
      font-weight: 400;
      line-height: 30px;

      color: #444444;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    margin-top: 95px;
    position: relative;
    padding: 0 16px;

    &__wrapper {
      width: 236px;
    }
    &__title {
      font-size: 30px;
      font-weight: 400;
      line-height: 33px;
      letter-spacing: -0.04em;
      text-align: left;
    }

    &__btn {
      position: absolute;
      bottom: -62px;
      right: 50%;
      max-height: 15px;
      padding: 14px 28px;

      transform: translate(50%, 0);

      font-size: 16px;
      font-weight: 400;
      line-height: 20.4px;
      text-align: left;
    }

    &__list {
      width: 100%;
      margin-top: 60px;
    }

    &__item {
      padding-bottom: 15px;

      &:not(:first-child) {
        margin-top: 29px;
      }

      &:last-child {
        border: none;
      }

      &-title {
        font-size: 20px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: -0.04em;
        text-align: left;
      }

      &-text {
        margin-top: 17px;

        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
      }
    }
  }
}
</style>
