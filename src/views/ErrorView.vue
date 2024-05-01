<template>
  <div class="error">
    <ul class="error__list">
      <li class="error__item">
        <p class="error__code">404</p>
        <p class="error__code-text">error</p>
      </li>
      <li class="error__item">
        <p class="error__description"><span>Sorry</span><br />Page not found</p>
        <LinkBtn link="/" title="Back to Homepage" class="error__btn" />
      </li>
    </ul>
  </div>
</template>

<script>
import LinkBtn from "@/components/LinkBtn.vue";

export default {
  name: "ErrorView",

  components: {
    LinkBtn,
  },

  data() {
    return {};
  },
  computed: {},

  methods: {},
};
</script>

<style scoped lang="scss">
.error {
  height: calc(100vh - 90px);
  display: flex;
  align-items: center;

  &__btn {
    display: block;
    width: fit-content;
    margin-left: auto;
    margin-top: 50px;
  }

  &__list {
    max-width: 1400px;
    height: 449px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  &__item:not(:first-child) {
    padding-left: 100px;
    padding-top: 70px;
  }

  &__description {
    font-family: "Onest";
    font-size: 62px;
    font-weight: 500;
    line-height: 74.4px;
    letter-spacing: -0.04em;
    text-align: left;

    span {
      position: relative;
      left: -37px;

      padding: 0px 37px;
      border-radius: 40px;
      background-color: #d1d457;
      color: #fff;
    }
  }

  &__code {
    font-family: "Onest";
    font-size: 47vh;
    font-weight: bold;
    line-height: 35vh;
    text-align: left;
    letter-spacing: -1px;
  }

  &__code-text {
    font-family: "Onest";
    font-size: 60px;
    font-weight: 400;
    line-height: 90px;
    text-align: right;

    text-transform: uppercase;
  }

  @media (max-width: 900px) {
    &__list {
      flex-direction: column;
    }

    &__code {
      font-size: 165px;
      line-height: 165px;
    }

    &__code-text {
      font-size: 26px;

      line-height: 39px;
    }

    &__item {
      

      &:not(:first-child) {
        padding: 0 30px;
      }
    }

    &__description {
      font-size: 32px;
      font-weight: 500;
      line-height: 38.4px;
      letter-spacing: -0.04em;
    }

    &__btn {
      margin: 0 auto;
      margin-top: 40px;
    }
  }
}
</style>
