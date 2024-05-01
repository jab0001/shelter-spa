<template>
  <div id="app" :style="isMenuOpen ? 'height: 100vh' : ''">
    <header class="navigation">
      <nav class="navigation__wrapper-desktop">
        <a class="navigation__logo">
          <img
            class="navigation__logo-img"
            src="../public/icons/logo.svg"
            alt="Help Shelter"
          />
        </a>

        <div v-if="$route.name !== '404'" class="navigation__search">
          <img
            class="navigation__search-img"
            src="../public/icons/search.svg"
            alt="Search"
          />
          <input
            id="search"
            name="search"
            class="navigation__search-input"
            placeholder="Search"
            type="search"
          />
        </div>

        <ul v-if="$route.name !== '404'" class="navigation__list">
          <li class="navigation__item" v-for="menu in menuLinks" :key="menu.id">
            <router-link :to="menu.link" class="navigation__link">{{
              menu.title
            }}</router-link>
          </li>
          <li>
            <select id="language" class="navigation__select">
              <option value="Romana">Romana</option>
              <option value="Русский" selected>Рус</option>
              <option value="English">English</option>
              <option value="Deutsch">Deutsch</option>
            </select>
          </li>
        </ul>
      </nav>
      <nav class="navigation__wrapper-mobile">
        <a class="navigation__logo">
          <img
            class="navigation__logo-img"
            src="../public/icons/logo.svg"
            alt="Help Shelter"
          />
        </a>
        <button class="navigation__menu" @click="isMenuOpen = !isMenuOpen">
          <img
            class="navigation__menu-img"
            :src="isMenuOpen ? '../icons/close.svg' : '../icons/menu.svg'"
            alt="Menu"
          />
        </button>
      </nav>
    </header>

    <MobileMenu v-if="isMenuOpen" @showMenu="showMenu" />

    <router-view />

    <div class="footer" v-if="$route.name !== '404'">
      <div class="footer__wrapper">
        <a class="footer__logo-link" href="">
          <img
            class="footer__logo-img"
            src="../public/icons/footer-logo.svg"
            alt="Help Shelter"
          />
        </a>
        <ul class="footer__list">
          <li
            class="footer__item"
            v-for="(link, index) in linkList"
            :key="index"
          >
            <router-link class="footer__link" :to="link.href">
              {{ link.name }}</router-link
            >
          </li>
        </ul>
        <ul class="footer__list-social">
          <li
            class="footer__item-social"
            v-for="social in socials"
            :key="social.id"
          >
            <a :href="social.href" target="_blank" class="footer__link-social"
              ><i :class="`icon-${social.icon}`"></i
            ></a>
          </li>
        </ul>
        <div class="footer__copyright">
          <p>© Copyright 2023 HelpShelter. All rights reserved.</p>
          <p>Information provided from public sources.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MobileMenu from "@/components/MobileMenu.vue";
export default {
  name: "AppFrame",

  components: {
    MobileMenu,
  },

  data() {
    return {
      isMenuOpen: false,
      socials: [
        {
          id: 1,
          href: "",
          icon: "twitter",
        },
        { id: 2, href: "", icon: "instagram" },
        { id: 3, href: "", icon: "linkedin" },
        {
          id: 4,
          href: "",
          icon: "medium",
        },
      ],
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
      linkList: [
        {
          href: "/about",
          name: "About",
        },
        {
          href: "/contact",
          name: "Contact",
        },
        {
          href: "/support",
          name: "Support Us",
        },
        {
          href: "/privacy",
          name: "Privacy Policy",
        },
        {
          href: "/terms",
          name: "Terms of use",
        },
        {
          href: "/disclaimer",
          name: "Disclaimer",
        },
      ],
    };
  },

  methods: {
    showMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<style lang="scss">
#app {
  @media (max-width: 900px) {
    width: 100%;
    overflow: hidden;
  }
}

.navigation {
  border-bottom: 1px solid #e0dcd8;
  &__wrapper {
    &-desktop {
      display: flex;
      margin: 0 auto;
      max-width: 1400px;
      padding-top: 31px;
      padding-bottom: 18px;
    }

    &-mobile {
      display: none;
    }
  }

  &__list {
    margin-left: auto;

    width: 45%;
    justify-content: space-between;
  }

  &__select {
    max-width: 52px;
    border: none;
    padding-top: 10px;
  }

  &__item {
    display: flex;
    align-items: center;
  }

  &__link,
  &__select {
    font-family: "Onest";
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;

    color: #272727;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  &__logo {
    padding-top: 9px;
    margin-right: 64px;
  }

  &__search {
    min-height: 46px;
    flex-grow: 1;
    max-width: 440px;
    position: relative;
    margin-right: 20px;

    &-input {
      height: 100%;
      width: 100%;
      border: 1.5px solid #e0dcd8;
      border-radius: 25px;
      flex-grow: 1;
      padding-left: 40px;

      font-family: "Onest";
      font-size: 18px;
      font-weight: 400;
      line-height: 23px;

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
      top: 12px;
      left: 14px;
    }
  }

  &__logo {
    &-img {
      width: 158px;
      height: 28px;
    }
  }

  &__list {
    display: flex;
  }

  .router-link-exact-active {
    color: #d1d457;
  }

  @media (max-width: 900px) {
    height: 63px;

    &__menu {
      border: none;
      background: inherit;
    }

    &__wrapper {
      &-desktop {
        display: none;
      }

      &-mobile {
        position: fixed;
        width: 100%;
        box-sizing: border-box;
        background: #fffcf9;
        display: flex;
        justify-content: space-between;
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 10px;
        padding-right: 10px;

        z-index: 500;
      }
    }

    &__menu {
      position: relative;
    }

    &__logo-img {
      width: 120px;
      height: 20px;
    }
  }
}
.footer {
  background: linear-gradient(#c5c6bf, #f8d19a);
  padding-top: 111px;
  padding-bottom: 50px;

  &__wrapper {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__logo {
    margin: 0 auto;
    &-img {
      width: 252px;
      height: 42px;
    }
  }

  &__list {
    display: flex;
    justify-content: space-between;
    width: 55%;
    margin: 0 auto;
    margin-top: 60px;

    &-social {
      margin-top: 100px;
      display: flex;
      width: 12.5%;
      justify-content: space-between;
    }
  }

  &__link {
    font-family: "Onest";
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;

    color: #272727;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &-social {
      i {
        font-size: 24px;
        color: #272727;
      }

      &:hover {
        opacity: 0.5;
      }
    }
  }

  &__copyright {
    margin-top: 16px;

    font-family: "Onest";
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: center;

    color: #444444;
  }

  @media (max-width: 900px) {
    padding-top: 59px;

    &__list {
      width: 100%;
      flex-direction: column;
      margin-top: 78px;

      &-social {
        margin-top: 60px;
        display: flex;
        width: 50.5%;
      }
    }

    &__link {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      text-align: left;
    }

    &__item {
      text-align: center;

      &:not(:first-child) {
        margin-top: 14px;
      }
    }

    &__copyright {
      margin-top: 32px;

      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      text-align: center;
    }

    &__logo-img {
      width: 214px;
      height: 36px;
    }
  }
}
</style>
