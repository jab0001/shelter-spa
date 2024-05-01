<template>
  <div class="blog">
    <!-- bread crumbs -->
    <div class="blog__bread">
      <router-link to="/" class="blog__bread-start"> Home </router-link>
      <span class="blog__bread-arrow">→</span>
      <router-link to="/blogs" class="blog__bread-middle"> Blog </router-link>
      <span class="blog__bread-arrow">→</span>
      <a href="#" class="blog__bread-end"> «{{ getBlog.title }}» </a>
    </div>

    <div class="blog__wrapper">
      <!-- column 1 -->
      <span class="blog__wrapper__column1">
        <h2 class="blog__wrapper__column1__title">{{ getBlog.title }}</h2>
        <img
          :src="`${getBlog.image}`"
          class="blog__wrapper__column1__image"
        />
        <p>{{ getBlog.text }}</p>
      </span>

      <!-- column 2 -->
      <span class="blog__wrapper__column2">
        <div class="blog__wrapper__column2__section">
          <h4>Author</h4>
          <p>By {{ getBlog.name }}</p>
        </div>
        <div class="blog__wrapper__column2__section">
          <h4>Published</h4>
          <p>{{ getBlog.date }}</p>
        </div>
        <div class="blog__wrapper__column2__section">
          <h4>Category</h4>
          <p>Story / Help</p>
        </div>
        <div class="blog__wrapper__column2__section">
          <h4>Share</h4>
          <ul v-for="socialMedia in getBlog.socialMedias" :key="socialMedia.id">
            <li>
              <a href="#"
                ><p>{{ socialMedia.name }}</p></a
              >
            </li>
          </ul>
        </div>
      </span>
    </div>

    <!-- related topics -->
    <!-- <div class="blog__related">
      <h3>Related Topics</h3>
    </div> -->

    <ContactUs
      title="Do you have an interesting story, article or idea, please feel free to share it with us"
      btnText="Share a story"
      link="share-story"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import ContactUs from "@/components/ContactUs.vue";

export default {
  name: "BlogView",

  components: {
    ContactUs,
  },

  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      getBlog: "blogs/getBlog",
      getRelated: "blogs/getRelated",
    }),
  },

  methods: {
    ...mapActions({
      fetchBlog: "blogs/fetchBlog",
    }),
  },

  created() {
    this.fetchBlog(this.$route.params.id);
  },
};
</script>

<style scoped lang="scss">
.blog {
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 200px;

  &__bread {
    max-width: 1400px;
    margin: 0 auto;
    &-start,
    &-end,
    &-middle {
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
      margin-right: 20px;
    }

    &-arrow {
      font-family: "Onest";
      font-size: 20px;
    }

    &-middle {
      color: #444;
      margin-left: 20px;
      margin-right: 20px;
    }

    &-end {
      color: #bbbe31;
      margin-left: 20px;
    }
  }

  &__wrapper {
    display: flex;
    flex-direction: row;

    &__column1 {
      width: 950px;
      display: flex;
      flex-direction: column;

      &__title {
        font-family: "Onest";
        font-weight: 400;
        font-size: 45px;
        line-height: 49.5px;
        letter-spacing: -0.04em;

        margin-top: 80px;
      }

      &__image {
        width: 950px;
        height: 600px;
        object-fit: cover;
        border-radius: 7px;
        margin: 60px 0;
      }

      & p {
        font-family: "Onest";
        font-weight: 400;
        font-size: 18px;
        line-height: 29.7px;
        color: #272727;

        max-width: 840px;
        margin-bottom: 80px;
        white-space: pre-line;
      }
    }

    &__column2 {
      width: 450px;
      margin-top: 210px;
      margin-left: 80px;

      &__section {
        border-bottom: 1px solid #272727;
        margin-bottom: 40px;
      }

      & h4 {
        font-family: "Onest";
        font-weight: 500;
        font-size: 20px;
        line-height: 20px;
        letter-spacing: -0.04em;
        margin: 0;
        margin-bottom: 18px;
      }

      & p {
        font-family: "Onest";
        font-weight: 400;
        font-size: 18px;
        line-height: 18px;
        margin: 0;
        padding-bottom: 16px;
      }

      & a {
        color: #ba6d00;
      }
    }
  }

  &__related {
    width: 1400px;
    margin-left: -260px;
    padding: 0 260px;
    padding-top: 80px;
    border-top: 1px solid #272727;

    & h5 {
      font-family: "Onest";
      font-weight: 500;
      font-size: 20px;
      line-height: 20px;
      letter-spacing: -0.04em;
    }
  }

  @media (max-width: 900px) {
    margin-bottom: 100px;
    
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

    &__wrapper {
      flex-direction: column;
    }

    &__wrapper__column1 {
      width: 100vw;
      &__title {
        padding: 0 16px;
        box-sizing: border-box;
        margin-top: 30px;
        width: 100vw;
        font-size: 26px;
        font-weight: 400;
        line-height: 31.2px;
        letter-spacing: -0.04em;
        text-align: left;
      }

      &__image {
        width: 100%;
        height: auto;
      }

      p {
        padding: 0 16px;
        padding-bottom: 30px;
        margin-bottom: 0;
        border-bottom: 1px solid #000;

        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
      }
    }

    &__wrapper__column2 {
      margin: 0;
      padding: 0 16px;
      padding-top: 30px;
      width: 100vw;
      box-sizing: border-box;

      &__section {
        margin-bottom: 20px;
        h4 {
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
    }
  }
}
</style>
