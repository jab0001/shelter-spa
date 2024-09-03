<template>
  <div class="shelters">
    <!-- bread crumbs -->
    <div class="shelters__bread">
      <router-link to="/" class="shelters__bread-start"> Home </router-link>
      <span class="shelters__bread-arrow">→</span>
      <a href="#" class="shelters__bread-end"> Shelters</a>
    </div>

    <div class="shelters__content">
      <div class="shelters__filters filters">
        <h2 class="filters__title">Shelters</h2>
        <button
          class="filters__settings"
          @click="openedSettings = !openedSettings"
        >
          <img src="../../public/icons/settings.svg" />
        </button>
        <form class="filters__form" v-if="openedSettings">
          <!-- COUNTRY FILTER -->

          <fieldset class="filters__fieldset">
            <legend class="filters__legend">Country</legend>
            <div
              class="filters__wrapper"
              v-for="(option, index) in getSearchParams.countries"
              :key="index"
            >
              <input
                type="checkbox"
                :id="option"
                :value="option"
                v-model="countryFilters"
                class="filters__tick"
              />
              <label :for="option" class="filters__label">{{ option }}</label>
            </div>
          </fieldset>

          <!-- TYPE OF SHELTER FILTER -->

          <fieldset class="filters__fieldset">
            <legend class="filters__legend">Type of Shelter</legend>
            <div
              class="filters__wrapper"
              v-for="(option, index) in getSearchParams.types"
              :key="index"
            >
              <input
                type="checkbox"
                :id="option"
                :value="option"
                v-model="typeFilters"
                class="filters__tick"
              />
              <label :for="option" class="filters__label">{{ option }}</label>
            </div>
          </fieldset>

          <!-- SIZE OF SHELTER FILTER -->

          <fieldset class="filters__fieldset">
            <legend class="filters__legend">Size of shelter</legend>
            <div
              class="filters__wrapper"
              v-for="(option, index) in getSearchParams.sizes"
              :key="index"
            >
              <input
                type="radio"
                :id="option"
                name="radio"
                :value="option"
                v-model="sizeFilter"
                class="filters__tick"
              />
              <label :for="option" class="filters__label">{{ option }}</label>
            </div>
          </fieldset>
          <button class="filters__btn" @click.prevent="clearFilters">
            Clear all
          </button>
        </form>
      </div>

      <!-- second column -->
      <div class="shelter__cards cards">
        <ul class="cards__list-search">
          <li
            class="cards__item-search"
            v-for="filter in countryFilters"
            :key="filter"
          >
            {{ filter }}
            <a
              href=""
              class="cards__item-close"
              @click.prevent="deleteFilter('country', filter)"
              ><i class="icon-times"></i
            ></a>
          </li>
          <li
            class="cards__item-search"
            v-for="filter in typeFilters"
            :key="filter"
          >
            {{ getFirstWord(filter) }}
            <a
              href=""
              class="cards__item-close"
              @click.prevent="deleteFilter('type', filter)"
              ><i class="icon-times"></i
            ></a>
          </li>
          <li class="cards__item-search" v-if="sizeFilter">
            {{ sizeFilter
            }}<a
              href=""
              class="cards__item-close"
              @click.prevent="deleteFilter('size')"
              ><i class="icon-times"></i
            ></a>
          </li>
        </ul>
        <div v-if="isListEmpty" class="cards__empty-div"></div>
        <!-- DISPLAY CARDS -->
        <ul class="cards__list">
          <li class="cards__item" v-for="card in getShelters" :key="card.id">
            <ShelterCard :item="card" />
          </li>
        </ul>

        <button v-if="getTotalPage > page" type="button" class="cards__btn" @click="viewMore">
          View More
        </button>

        <!-- "scroll to the top of page" button for mobile: -->
        <button class="shelters__button-top-page" @click="scrollToTop"> ↑ </button>
      </div>
    </div>
    <ContactUs
      title="Are you the owner of the shelter? Contact us to set up your page or update your information"
      btnText="Get in touch"
      link="get-in-touch"
    />
  </div>
</template>

<script>
import ShelterCard from "@/components/ShelterCard.vue";
import ContactUs from "@/components/ContactUs.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ShelterView",

  components: {
    ShelterCard,
    ContactUs,
  },

  data() {
    return {
      countryFilters: [],
      typeFilters: [],
      sizeFilter: "",
      openedSettings: true,
      page: 1,
      cards_on_page: 10,
    };
  },
  computed: {
    ...mapGetters({
      getShelters: "shelters/getShelters",
      getSearchParams: "shelters/getSearchParams",
      getTotalPage: "shelters/getTotalPages",
    }),

    isListEmpty() {
      if (this.countryFilters.length > 0) return false;
      if (this.sizeFilter !== "") return false;
      if (this.typeFilters.length > 0) return false;
      return true;
    },
  },

  watch: {
    countryFilters: {
      handler: async function (newValue) {
        console.log(newValue);
        this.page = 1;
        await this.getData();
      },
      deep: true,
    },
    typeFilters: {
      handler: async function (newValue) {
        console.log(newValue);
        this.page = 1;
        await this.getData();
      },
      deep: true,
    },
    sizeFilter: {
      handler: async function (newValue) {
        console.log(newValue);
        this.page = 1;
        await this.getData();
      },
      deep: true,
    },
  },

  methods: {
    ...mapActions({
      fetchShelters: "shelters/fetchShelters",
      fetchSearchParams: "shelters/fetchSearchParams",
    }),

    async viewMore() {
      if (this.getTotalPage > this.page) {
        this.page++;
      }

      await this.getData(true);
    },

    async clearFilters() {
      this.countryFilters = [];
      this.typeFilters = [];
      this.sizeFilter = "";
      await this.getData();
      return;
    },

    async deleteFilter(type, filter) {
      if (type === "size") {
        this.sizeFilter = "";
      } else {
        let indexToRemove =
          type === "type"
            ? this.typeFilters.indexOf(filter)
            : this.countryFilters.indexOf(filter);

        if (indexToRemove !== -1) {
          type === "type"
            ? this.typeFilters.splice(indexToRemove, 1)
            : this.countryFilters.splice(indexToRemove, 1);
        }
      }

      await this.getData();
    },

    async getData(add) {
      let data = {
        data: {
          countries: this.countryFilters,
          types: this.typeFilters,
          sizes: this.sizeFilter === "" ? [] : [this.sizeFilter],
          cards_on_page: this.cards_on_page,
          page: this.page,
        },
        add,
      };
      console.log(data);
      await this.fetchSearchParams();
      await this.fetchShelters(data);
    },

    getFirstWord(str) {
      return str.split(' ')[0];
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },

  },

  async mounted() {
    await this.getData();
    if (window.innerWidth < 900) {
      this.openedSettings = false;
      this.cards_on_page = 4;
    }
  },
};
</script>

<style scoped lang="scss">
.shelters {
  margin-top: 60px;
  margin-bottom: 200px;

  &__content {
    display: flex;

    max-width: 1400px;
    margin: 0 auto;
    margin-top: 72px;
    margin-bottom: 80px;
  }

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
 
  &__button-top-page {
    all: unset;
    background-color: #D1D457;
    width: 46px;
    height: 46px;
    border-radius: 100px;
    color: #272727;
    margin-left: auto;
    font-size: 30px;
    font-weight: bolder;
    text-align: center;
    cursor: pointer;
    line-height: 46px;

    @media (min-width: 901px) {
      display: none;
    }
  }

  @media (max-width: 900px) {
    margin-top: 39px;
    margin-bottom: 90px;

    &__content {
      flex-direction: column;
      margin-top: 31px;
      margin-bottom: 60px;
    }

    &__bread {
      padding: 0 24px;

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

.filters {
  padding-top: 8px;
  &__title {
    font-family: "Onest";
    font-size: 30px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: -0.04em;
  }

  &__settings {
    display: none;
  }

  &__wrapper {
    input {
      margin: 0;
      width: 16px;
      height: 16px;
    }

    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }

  &__tick {
    accent-color: #FFC675;
  }

  &__legend {
    font-family: "Onest";
    font-size: 20px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.04em;

    margin-bottom: 24px;
    margin-left: 10px;
  }

  &__label {
    margin-left: 7px;

    font-family: "Onest";
    font-size: 18px;
    font-weight: 400;
    line-height: 18px;

    color: #444;
  }

  &__form {
    margin-top: 60px;
    min-width: 340px;
    padding: 0px 24px 40px 24px;
    box-sizing: border-box;
    border: 1px solid #272727;
    border-radius: 9px;
  }

  &__fieldset {
    margin-top: 40px;
    padding: 0;
    padding-bottom: 27px;
    border: none;
    border-bottom: 1px solid #272727;

    &:nth-last-child(2) {
      border: none;
    }
  }

  &__btn {
    margin-left: 18px;
    margin-top: 10px;

    font-family: "Onest";
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;

    border: none;
    background: none;

    color: #ba6d00;

    text-decoration: underline;

    cursor: pointer;

    &:hover {
      text-decoration: none;
    }
  }

  @media (max-width: 900px) {
    position: relative;

    &__form {
      margin-top: 25px;
      border: none;
    }

    &__title {
      padding: 0 24px;

      font-size: 24px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: -0.04em;
      text-align: left;
    }

    &__settings {
      top: 1px;
      right: 30px;

      display: block;

      position: absolute;
      background: inherit;
      border: none;
    }
  }
}

.cards {
  flex-grow: 1;
  padding-left: 7.1%;
  display: flex;
  flex-wrap: wrap;
  align-content: baseline;

  &__list {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 60px 30px;
    width: 100%;

    &-search {
      min-height: 78px;
      max-height: 78px;
      display: flex;
      flex-wrap: wrap;
      gap: 6px 16px;
    }
  }

  &__item {
    width: 300px;
    &-search {
      position: relative;
      padding: 10px 30px 10px 16px;
      align-items: center;

      height: 18px;

      border: 1.5px solid #272727;
      border-radius: 50px;

      font-family: "Onest";
      font-size: 20px;
      font-weight: 400;
      line-height: 18px;
      color: #272727;
    }

    &-close {
      display: block;
      position: absolute;
      top: 11px;
      right: 8px;
      align-items: center;
      width: 20px;
      height: auto;
    }
  }

  &__btn {
    max-height: 66px;
    padding: 20px 50px;
    margin: 0 auto;
    margin-top: 78px;

    font-family: "Onest";
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;

    border: 1.5px solid #272727;
    border-radius: 33.5px;

    background: inherit;

    cursor: pointer;

    &:hover {
      background: radial-gradient(#f3c98f, #fff);
    }
  }

  &__empty-div {
    height: 78px; 
    width: 100%; 
    clear: both;
  }

  @media (max-width: 900px) {
    margin-top: 20px;
    padding: 0 37px;

    &__btn {
      margin-top: 28px;
      max-height: initial;
      padding: 10px 29px;
      font-size: 16px;
      font-weight: 400;
      line-height: 20.4px;
    }

    &__list {
      gap: 40px 30px;

      &-search {
        gap: 15px 9px;
        min-height: 52px;
      }
    }

    &__item {
      &-search {
        padding: 6px 29px 5px 11px;

        font-size: 16px;
        font-weight: 400;
        line-height: 16px;
        text-align: left;
      }

      &-close {
        top: 6px;
        right: 3px;
      }
    }
  }
}
</style>
