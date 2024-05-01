<template>
  <ul class="mobileMenu">
    <li class="mobileMenu__search">
      <img
        class="mobileMenu__search-img"
        src="../../public/icons/search.svg"
        alt="Search"
      />
      <input
        id="search"
        name="search"
        class="mobileMenu__search-input"
        placeholder="Search"
        type="search"
      />
    </li>
    <li class="mobileMenu__item">
      <select id="language" class="mobileMenu__select">
        <option value="Romana">Romana</option>
        <option value="Русский" selected>Рус</option>
        <option value="English">English</option>
        <option value="Deutsch">Deutsch</option>
      </select>
    </li>
    <li class="mobileMenu__item" v-for="menu in menuLinks" :key="menu.id">
      <router-link
        :to="menu.link"
        @click.native="closeModal"
        class="mobileMenu__link"
        >{{ menu.title }}</router-link
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: "MobileMenu",

  props: {},

  components: {},

  data() {
    return {
      menuLinks: [
        {
          id: 1,
          title: "Home",
          link: "/",
        },
        {
          id: 2,
          title: "Shelters",
          link: "/shelters",
        },
        {
          id: 4,
          title: "Blog",
          link: "/blogs",
        },
        {
          id: 5,
          title: "About",
          link: "/about",
        },
        {
          id: 6,
          title: "Support Us",
          link: "/support",
        },
      ],
    };
  },
  methods: {
    closeModal() {
      this.$emit("showMenu");
    },
  },
};
</script>

<style scoped lang="scss">
.router-link-exact-active {
  color: #d1d457 !important;
}

.mobileMenu {
  z-index: 500;
  position: absolute;
  background: #fffcf9;
  right: 0;
  top: 63px;
  width: 100vw;
  height: calc(100% - 63px);

  &__item {
    max-width: 50%;
    margin: 0 auto;
    text-align: center;
    margin-top: 20px;
  }

  &__search {
    min-height: 25px;
    position: relative;
    max-width: 50%;
    margin: 0 auto;

    &-input {
      height: 100%;
      width: 100%;
      border: 1.5px solid #e0dcd8;
      border-radius: 25px;
      flex-grow: 1;
      padding-left: 40px;

      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      text-align: left;

      outline: none;

      &:hover {
        border: 1.5px solid #000;
      }

      &:focus {
        border: 1.5px solid #d1d457;
      }
    }

    &-img {
      position: absolute;
      top: 4px;
      left: 11px;
      width: 16px;
    }
  }

  &__link,
  &__select {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;

    color: #272727;
    text-decoration: none;
    border: none;
    outline: none;
  }
}
</style>
