<template>
  <div class="text">
    <h3 v-if="title" class="text__title">{{ title }}</h3>
    <p class="text__context" v-html="text"></p>
    <ul v-if="items.length" class="text__list">
      <li
        class="text__item text__context"
        v-for="(item, index) in items"
        :key="index"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TextBlock",

  components: {},

  props: {
    text: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    items: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {};
  },
  computed: {},

  methods: {},
};
</script>

<style scoped lang="scss">
.text {
  margin-top: 80px;

  &__title {
    font-family: "Onest";
    font-size: 30px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: -0.04em;
    text-align: left;
  }

  &__context {
    margin-top: 30px;

    font-family: "Onest";
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    text-align: left;
    color: #444444;
  }

  &__list {
    list-style: disc;
    padding-left: 25px;
    margin-top: 30px;
  }

  &__item {
    margin: 0;
  }

  @media (max-width: 900px) {
    margin-top: 40px;

    &__context {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      text-align: left;
    }

    &__title {
      font-size: 24px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: -0.04em;
      text-align: left;
    }
  }
}
</style>
