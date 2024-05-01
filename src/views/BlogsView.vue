<template>
  <div class="blogs">
    <!-- bread crumbs -->
    <div class="blogs__bread">
      <router-link to="/" class="blogs__bread-start"> Home </router-link>
      <span class="blogs__bread-arrow">→</span>
      <a href="#" class="blogs__bread-end"> Blog </a>
    </div>

    <!-- filters bar -->
    <div class="blogs__filter-bar">
      <h2>Blog</h2>
      <ul>
        <li v-for="(filter, index) in getFilters.per_theme" :key="index">
          <label :for="index">
            <input
              type="radio"
              :id="index"
              name="filter"
              class="blogs__filter-bar__input"
              :value="index"
              v-model="selectedOption"
              @change="logSelectedOption"
            />
            <p class="blogs__filter-bar__label">{{ index }} ({{ filter }})</p>
          </label>
        </li>
      </ul>
      <LinkBtn
        link="/new-topic"
        title="Share a Story"
        class="blogs__filter-bar__share-button"
      />
    </div>

    <ul>
      <li v-for="blog in getBlogs" :key="blog.id" class="blogs__list">
        <BlogCard :item="blog" />
      </li>
    </ul>

    <div class="blogs__view-more">
      <button v-if="getTotalPage > page" type="button" class="blogs__btn" @click="viewMore">
          View More
        </button>
    </div>

    <ContactUs
      title="Do you have an interesting story, article or idea, please feel free to share it with us"
      btnText="Share a story"
      link="share-story"
    />
  </div>
</template>

<script>
import ContactUs from "@/components/ContactUs.vue";
import BlogCard from "@/components/BlogCard.vue";
import { mapGetters, mapActions } from "vuex";
import LinkBtn from "@/components/LinkBtn.vue";

export default {
  name: "BlogsView",

  components: {
    BlogCard,
    ContactUs,
    LinkBtn,
  },

  data() {
    return {
      selectedOption: "",
      cards_on_page: 8,
      page: 1,
    };
  },
  computed: {
    ...mapGetters({
      getBlogs: "blogs/getBlogs",
      getTotalPage: "blogs/getTotalPages",
      getFilters: "blogs/getFilters",
    }),
  },

  methods: {
    ...mapActions({
      fetchBlogs: "blogs/fetchBlogs",
    }),
    ...mapActions({
      fetchFilters: "blogs/fetchFilters",
    }),
    async viewMore() {
      if (this.getTotalPage > this.page) {
        this.page++;
      }
      await this.getData(true);
    },
    async logSelectedOption() {
      this.page = 1;
      await this.getData();
    },
    async getData(add) {
      let data = {
        data: {
          themes: this.selectedOption === "" ? [] : [this.selectedOption],
          cards_on_page: this.cards_on_page,
          page: this.page,
        },
        add
      };

      await this.fetchBlogs(data);
    },
  },

  async mounted() {
    await this.getData();
    await this.fetchFilters();
  },
};
</script>

<style scoped lang="scss">
.blogs {
  margin-top: 60px;
  margin-bottom: 200px;

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
      margin-right: 9px;
    }

    &-arrow {
      font-family: "Onest";
      font-size: 20px;
      margin: 0 16px;
    }

    &-end {
      color: #bbbe31;
      margin-left: 15px;
    }
  }

  &__list {
    max-width: 950px;
    margin: auto;
    text-decoration: none;
  }

  &__filter-bar {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    height: 66px;
    max-width: 1400px;
    margin: 0 auto;
    margin-top: 44px;
    margin-bottom: 120px;

    & ul {
      display: flex;
      flex-direction: row;
      margin-left: 164px;
      margin-top: auto;
    }

    & h2 {
      font-family: "Onest";
      font-weight: 500;
      font-size: 30px;
      line-height: 30px;
      letter-spacing: -0.04em;
      color: #272727;
      margin-left: 0px;
      margin-top: auto;
    }

    &__share-button {
      margin-left: auto;
    }

    &__input {
      display: none;
    }

    &__label {
      font-family: "Onest";
      font-weight: 400;
      font-size: 20px;
      line-height: 18px;
      letter-spacing: -0.04em;
      color: #272727;

      border: 1.5px solid #272727;
      height: 18px;
      border-radius: 50px;
      padding: 10px 24px 10px 24px;
      margin-right: 30px;

      cursor: pointer;

      &:hover {
        background: radial-gradient(#f3c98f, #fff);
      }
    }
  }

  &__view-more {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    align-items: center;
    width: 950px;
    margin-top: 80px;
    margin-bottom: 80px;

    &__btn {
      display: inline-block;
      margin: 0 auto;
    }

    &__pages {
      & a {
        text-decoration: none;
        font-family: "Onest";
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        color: #b1aea9;
        margin-left: 14px;

        &:focus {
          color: #272727;
        }
      }
    }
  }

  @media (max-width: 900px) {
    margin-top: 39px;
    margin-bottom: 90px;

    &__btn {
      margin-top: 28px;
      max-height: initial;
      padding: 10px 29px;
      font-size: 16px;
      font-weight: 400;
      line-height: 20.4px;
    }

    &__view-more {
      flex-direction: column;
      width: initial;
      margin-top: 30px;
      margin-bottom: 30px;

      &__pages {
        a {
          &:first-child {
            margin-left: 0;
          }
        }
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

    ul {
      padding: 0 16px;
      padding-top: 60px;
    }

    &__filter {
      &-bar {
        margin-top: 30px;
        flex-direction: column;

        &__share-button {
          margin: 0 auto;
          margin-top: 20px;
        }

        &__label {
          margin: 0;
          padding: 7px 24px 7px 24px;

          font-size: 16px;
          font-weight: 400;
          line-height: 16px;
          text-align: left;
        }

        ul {
          margin: 0;
          margin-top: 10px;
          padding: 0 16px;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 10px 0;
        }

        h2 {
          padding: 0 16px;

          font-size: 24px;
          font-weight: 500;
          line-height: 24px;
          letter-spacing: -0.04em;
          text-align: left;
        }
      }
    }
  }
}
</style>
