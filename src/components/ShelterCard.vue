<template>
  <div class="card">
    <router-link class="card__link" :to="`/shelters/${item.id}`">
      <img class="card__img" :src="item.picture" alt="Shelter Image" />
      <div class="card__wrapper">
        <h4 class="card__title">
          {{ item.name }}
        </h4>
        <div class="card__inform card__inform-wrapper">
          <ul class="card__inform-list">
            <li
              class="card__inform-item"
              v-for="(type, index) in item.types"
              :key="index"
            >
              {{ getFirstWord(type).toUpperCase() }}
            </li>
          </ul>
        </div>
        <div class="card__details">
          <div class="card__details-country">{{ item.country }}</div>
          <p class="card__details-capacity">{{ item.capacity }}</p>
        </div>
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

  methods: {
    getFirstWord(str) {
      return str.split(' ')[0];
    },
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
    max-width: 300px;

    font-family: "Onest";
    font-size: 20px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.04em;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    min-height: 42px;
  }

  &__inform {
    margin-top: 8px;

    &-list {
      display: flex;
      gap: 16px;
    }

    &-item {
      padding: 4px 10px;

      background: #d1d457;
      border-radius: 19px;

      font-family: "Onest";
      font-size: 13px;
      font-weight: 500;
      line-height: 13px;
      letter-spacing: -0.04em;
    }
  }

  &__details {
    margin-top: 9px;
    display: flex;
    &-capacity {
      margin-left: 16px;
    }
  }

  &__inform,
  &__details {
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

      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;

      min-height: 22px;
      color: #272727;
    }

    &__details {
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
