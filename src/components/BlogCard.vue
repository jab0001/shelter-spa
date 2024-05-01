<template>
  <div class="card">
    <router-link :to="`blogs/${item.id}`">
      <div class="card__wrapper">
        <img :src="`${item.image}`" class="card__preview-image" />
        <div class="card__text-wrapper">
          <p class="card__date-and-name">{{ item.created_at }} ✦ {{ item.name }}</p>
          <h3 class="card__title">{{ item.title }}</h3>
          <p class="card__text">
            {{ item.content }}
          </p>
          <ul class="card__themes">
            <li
              v-for="(chip, index) in item.themes"
              :key="index"
              class="card__themes-chip"
            >
              {{ chip.toUpperCase() }}
            </li>
            <div class="card__upload-icon">
              <img src="./../../public/icons/upload.svg" />
            </div>
          </ul>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BlogCard",

  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },

  components: {},

  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.card {
  text-decoration: none;
  border-bottom: 1px solid #272727;
  margin-bottom: 60px;

  &__wrapper {
    display: flex;
    flex-direction: row;
  }

  &__preview-image {
    min-width: 360px;
    min-height: 220px;
    max-width: 360px;
    max-height: 220px;
    object-fit: cover;
    border-radius: 7px;
    margin-bottom: 50px;
  }

  &__text-wrapper {
    margin-left: 36px;
  }

  &__date-and-name {
    display: flex;
    flex-direction: row;
    font-family: "Onest";
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.04em;
    color: #444444;
  }

  &__title {
    font-family: "Onest";
    font-weight: 500;
    font-size: 26px;
    line-height: 26px;
    letter-spacing: -0.04em;
    color: #272727;
  }

  &__text {
    font-family: "Onest";
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #444444;
    margin-top: 14px;
    margin-bottom: 14px;
  }

  &__themes {
    display: flex;
    flex-direction: row;
    margin-left: -16px;

    &-chip {
      display: inline-block;
      background-color: #d1d457;
      color: #272727;
      font-family: "Onest";
      font-weight: 500;
      font-size: 13px;
      line-height: 13px;
      letter-spacing: -0.04em;
      border-radius: 19px;
      padding-top: 4px;
      padding-bottom: 4px;
      padding-right: 10px;
      padding-left: 10px;
      margin-left: 16px;
    }
  }

  &__upload-icon {
    margin-left: auto;
  }

  @media (max-width: 900px) {
    margin-bottom: 40px;
    &__wrapper {
      flex-direction: column;
    }

    &__themes-chip {
      display: flex;
      align-items: center;
    }

    &__text-wrapper {
      order: 1;
      margin-left: 0;
      margin-bottom: 10px;
    }

    &__preview {
      &-image {
        min-width: initial;
        order: 2;
      }
    }
  }
}

a {
  color: #272727;
  text-decoration: none;
}
</style>
