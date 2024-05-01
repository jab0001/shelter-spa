<template>
  <div class="card">
    <router-link class="card__link" :to="`/shelters/${item.id}`">
      <img class="card__img" :src="item.picture" alt="Shelter Image" />
      <!-- <img class="card__img" :src="item.image" alt="Shelter Image" /> -->
      <div class="card__wrapper">
        <h4 class="card__title">
          {{ item.name }}
        </h4>
        <div class="card__inform card__inform-wrapper">
          <p class="card__inform-text">{{ item.capacity }}</p>
          <ul class="card__inform-list">
            <li
              class="card__inform-item"
              v-for="(type, index) in item.types"
              :key="index"
            >
              {{ type.toUpperCase() }}
            </li>
          </ul>
        </div>
        <div class="card__country">{{ item.country }}</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ShelterCard",

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
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  &__img {
    border-radius: 6px;
    width: 300px;
    height: 280px;
  }

  &__title {
    margin-top: 15px;

    font-family: "Onest";
    font-size: 20px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.04em;
  }

  &__inform {
    margin-left: 4px;
    display: flex;
    &-wrapper {
      margin-top: 8px;
    }

    &-list {
      display: flex;
      margin-left: 16px;
      gap: 16px;
    }

    &-item {
      padding: 4px 10px;

      background: #d1d457;
      border-radius: 19px;

      font-family: "Onest";
      font-size: 15px;
      font-weight: 500;
      line-height: 13px;
      letter-spacing: -0.04em;
    }
  }

  &__country {
    margin-top: 9px;
  }

  &__inform,
  &__country {
    font-family: "Onest";
    font-size: 18px;
    font-weight: 400;
    line-height: 18px;
  }

  &__link {
    color: inherit;
    text-decoration: none;
  }

  @media (max-width: 900px) {
    &__title {
      margin-top: 12px;

      font-size: 18px;
      font-weight: 500;
      line-height: 21.6px;
      letter-spacing: -0.04em;
      text-align: left;
    }

    &__country {
      margin-top: 5px;

      font-size: 14px;
      font-weight: 400;
      line-height: 18.9px;
      text-align: left;
    }

    &__inform {
      &-text {
        font-size: 14px;
        font-weight: 400;
        line-height: 18.9px;
        text-align: left;
      }

      &-item {
        font-size: 12px;
        font-weight: 500;
        line-height: 12px;
        letter-spacing: -0.04em;
        text-align: center;
      }
    }
  }
}
</style>
