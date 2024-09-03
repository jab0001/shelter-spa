<template>
  <div class="shelter">
    <!-- bread crumbs -->
    <div class="shelter__bread">
      <router-link to="/" class="shelter__bread-start"> Home </router-link>
      <span class="shelter__bread-arrow">→</span>
      <router-link to="/shelters" class="shelter__bread-start">
        Shelters</router-link
      >
      <span class="shelter__bread-arrow">→</span>
      <a href="#" class="shelter__bread-end"> {{ getShelter.name }}</a>
    </div>
    <h2 class="shelter__title">{{ getShelter.name }}</h2>
    <div class="shelter__content">
      <div class="shelter__left">
        <ShelterCardGallery :item="getShelter" v-if="getLoaded" />
        <h3 class="shelter__left-title">Description</h3>
        <p class="shelter__left-text">
          {{ getShelter.description }}
        </p>
      </div>
      <div class="shelter__right">
        <ul class="shelter__list">
          <li class="shelter__item" v-for="info in informations" :key="info.id">
            <h4 class="shelter__item-title">{{ info.title }}</h4>
            <p v-if="!Array.isArray(getShelter[info.text])">
              {{ getShelter[info.text] }}
            </p>
            <p
              v-else
              v-for="(text, index) in getShelter[info.text]"
              :key="index"
            >
              {{ text }}
            </p>
          </li>
          <li class="shelter__item">
            <h4 class="shelter__item-title">Links</h4>
            <a
              class="shelter__link"
              v-for="(link, index) in getShelter['social_media']"
              :key="index"
              :href="link.url"
              target="_blank"
            >
              {{ link.platform }}
            </a>
          </li>
          <li class="shelter__item">
            <h4 class="shelter__item-title">Donation contacts</h4>
            <ul lass="shelter__list-donation">
              <li
                class="shelter__item-donation"
                v-for="(donation, index, number) in getShelter[
                  'donation_details'
                ]"
                :key="index"
              >
                <h5 class="shelter__title-donation">
                  {{ number + 1 }}.{{ index }}
                </h5>
                <div
                  class="shelter__bank"
                  v-for="(bank, index) in donation"
                  :key="index"
                >
                  <div v-for="(item, index) in bank" :key="index">
                    <a class="shelter__bank-link">
                      {{ index }}: <span>{{ item }}</span>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <Thanks />
    <div class="shelter__similar">
      <h3 class="shelter__similar-title">Similar Shelters</h3>
      <ul class="shelter__similar-list">
        <li
          class="shelter__similar-item"
          v-for="card in getRelated"
          :key="card.id"
        >
          <ShelterCard :item="card" />
        </li>
      </ul>
    </div>
    <ContactUs
      title="Are you the owner of the shelter? Contact us to set up your page or update your information"
      btnText="Get in touch"
      link="get-in-touch"
    />
    <!-- <div class="123">{{ $route.params.id }}</div> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ShelterCardGallery from "@/components/ShelterCardGallery.vue";
import ContactUs from "@/components/ContactUs.vue";
import Thanks from "@/components/Thanks.vue";
import ShelterCard from "@/components/ShelterCard.vue";

export default {
  name: "ShelterView",

  components: {
    ShelterCard,
    ShelterCardGallery,
    Thanks,
    ContactUs,
  },

  data() {
    return {
      informations: [
        {
          id: 1,
          title: "Country",
          text: "country",
        },
        {
          id: 2,
          title: "Type of shelter",
          text: "types",
        },
        {
          id: 3,
          title: "Size of shelter",
          text: "capacity",
        },
        {
          id: 4,
          title: "Owner",
          text: "owner_name",
        },
        {
          id: 5,
          title: "Phone",
          text: "phones",
        },
        {
          id: 6,
          title: "Email",
          text: "email",
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      getShelter: "shelters/getShelter",
      getRelated: "shelters/getRelated",
      getLoaded: "shelters/getLoaded",
    }),
  },

  methods: {
    ...mapActions({
      fetchShelter: "shelters/fetchShelter",
      fetchRelated: "shelters/fetchRelated",
    }),
  },

  async mounted() {
    await this.fetchShelter(this.$route.params.id);
    console.log(this.getShelter);
    let data = {
      countries: [this.getShelter.country],
      types: this.getShelter.types,
      sizes: [this.getShelter.capacity],
      cards_on_page: 4,
      page: 1,
    };
    await this.fetchRelated(data);
  },
};
</script>

<style scoped lang="scss">
.shelter {
  margin-top: 60px;
  margin-bottom: 200px;

  &__bread {
    max-width: 1400px;
    margin: 0 auto;
    &-start,
    &-end {
      font-family: "Onest";
      font-size: 18px;
      font-weight: 400;
      line-height: 27px;

      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    &-start {
      color: #444;
    }

    &-arrow {
      font-family: "Onest";
      font-size: 20px;
      margin: 0 16px;
    }

    &-end {
      color: #bbbe31;
    }
  }

  &__title {
    max-width: 1400px;
    margin: 0 auto;
    margin-top: 80px;

    font-family: "Onest";
    font-size: 45px;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: -0.04em;
    text-align: left;

    &-donation {
      margin: 0;
      margin-bottom: 12px;

      font-family: "Onest";
      font-size: 18px;
      text-transform: uppercase;

      display: block;
      line-height: 18px;
    }
  }

  &__content {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 60px;
    padding-bottom: 108px;
  }

  &__left {
    max-width: 800px;

    &-title {
      margin-top: 80px;

      font-family: "Onest";
      font-size: 20px;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: -0.04em;
      text-align: left;
    }

    &-text {
      margin-top: 30px;
      font-family: "Onest";
      font-size: 18px;
      font-weight: 400;
      line-height: 30px;

      color: #444;
      white-space: pre-wrap;
    }
  }

  &__right {
    /* display: none; */
    width: 500px;
    padding-top: 20px;
  }

  &__list {
    font-family: "Onest";
    font-size: 18px;
    font-weight: 400;
    line-height: 18px;

    color: #444;
  }

  &__item {
    padding-bottom: 15px;
    display: flex;
    flex-direction: column;

    &:not(:first-child) {
      margin-top: 40px;
    }

    &:not(:last-child) {
      border-bottom: 1px solid #272727;
    }

    &-title {
      margin-bottom: 18px;

      font-family: "Onest";
      font-size: 20px;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: -0.04em;
      text-align: left;
    }
  }

  &__link {
    text-decoration: none;

    color: #ba6d00;

    &:not(:last-child) {
      margin-bottom: 12px;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  &__bank {
    &-link {
      margin-bottom: 12px;

      text-transform: uppercase;

      display: block;

      span {
        color: #ba6d00;
      }
    }
  }

  &__similar {
    margin-top: 100px;

    &-title {
      max-width: 1400px;
      margin: 0 auto;
      font-family: "Onest";
      font-size: 20px;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: -0.04em;
      text-align: left;
    }

    &-list {
      max-width: 1285px;
      margin: 0 auto;
      margin-top: 60px;

      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    &-item {
    }
  }

  @media (max-width: 900px) {
    margin-top: 39px;
    margin-bottom: 100px;

    &__similar {
      padding-bottom: 60px;
      border-bottom: 1px solid #000;

      &-title {
        padding: 0 16px;
      }
      &-list {
        margin-top: 20px;
        flex-wrap: nowrap;
        gap: 0 16px;
        overflow: auto;

        padding: 0 16px;
        padding-bottom: 20px;
      }
    }

    &__content {
      padding-bottom: 20px;
    }

    &__title {
      padding: 0 16px;
      margin-top: 40px;

      font-size: 26px;
      font-weight: 400;
      line-height: 31.2px;
      letter-spacing: -0.04em;
      text-align: left;

      &-donation {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
      }
    }

    &__bank {
      &-link {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
      }
    }

    &__left {
      &-title {
        padding: 0 16px;
        font-size: 18px;
      }

      &-text {
        margin-top: 20px;
        padding: 0 16px;
        width: 100vw;

        box-sizing: border-box;

        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
      }
    }

    &__right {
      margin-top: 40px;
      padding: 0 16px;
    }

    &__link {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      text-align: left;

      &:not(:last-child) {
        margin-bottom: 6px;
      }
    }

    &__item {
      padding-bottom: 10px;

      &:not(:first-child) {
        margin-top: 20px;
      }

      &-title {
        margin-bottom: 12px;

        font-size: 18px;
        font-weight: 500;
        line-height: 21.6px;
        letter-spacing: -0.04em;
        text-align: left;
      }

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
      }
    }

    &__bread {
      padding: 0 16px;

      &-start,
      &-end,
      &-arrow {
        font-size: 14px;
        font-weight: 400;
        line-height: 18.9px;
        text-align: left;
      }

      &-arrow {
        margin: 0 10px;
      }
    }
  }
}
</style>
