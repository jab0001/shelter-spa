<template>
  <div class="our-team">
    <h3 class="our-team__title">Meet our team</h3>
    <ul class="our-team__list">
      <li class="our-team__item" v-for="member in team" :key="member.id">
        <a href="#" target="_blank" class="our-team__link">
          <img
            :src="`./images/${member.img}.jpg`"
            :alt="`${member.name}`"
            class="our-team__img"
          />
          <div class="our-team__wrapper">
            <p class="our-team__name">{{ member.name }}</p>
            <i :class="`icon-${member.icon}`"></i>
          </div>
          <p class="our-team__specialization">{{ member.specilazation }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "OurTeam",

  props: {},

  components: {},

  data() {
    return {
      team: [
        {
          id: 1,
          img: "cat-and-dog",
          name: "Amelia Jones",
          icon: "linkedin",
          specilazation: "Web Designer",
        },
        {
          id: 2,
          img: "cat-and-dog",
          name: "George Williams",
          icon: "linkedin",
          specilazation: "Web Developer",
        },
        {
          id: 3,
          img: "cat-and-dog",
          name: "James Johnson",
          icon: "linkedin",
          specilazation: "Software Developer",
        },
        {
          id: 4,
          img: "cat-and-dog",
          name: "Amelia Jones",
          icon: "instagram",
          specilazation: "Writer / Content maker",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.our-team {
  &__title {
    font-family: "Onest";
    font-size: 45px;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: -0.04em;
    text-align: left;
  }

  &__name {
    font-family: "Onest";
    font-size: 26px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: -0.04em;
    text-align: left;
  }

  &__specialization {
    margin-top: 8px;
    font-family: "Onest";
    font-size: 20px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.04em;
    text-align: left;
  }

  &__link {
    color: #272727;
    text-decoration: none;

    &:hover {
      img {
        filter: grayscale(0%);
      }

      color: #d1d457;
      text-decoration: underline;
    }
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 100px;
    justify-content: space-between;

    gap: 20px 0px;
  }

  &__img {
    max-width: 330px;
    height: 330px;
    border-radius: 7px;

    filter: grayscale(100%);
  }

  &__wrapper {
    display: flex;
    margin-top: 20px;
    justify-content: space-between;

    i {
      font-size: 20px;
    }
  }

  @media (max-width: 900px) {
    margin-top: 97px;

    &__list {
      margin-top: 60px;
      padding: 0 16px;
    }

    &__wrapper {
      margin-top: 14px;
    }

    &__item {
      &:not(:first-child) {
        margin-top: 18px;
      }
    }

    &__name {
      font-size: 24px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: -0.04em;
      text-align: left;
    }

    &__specialization {
      font-size: 18px;
      font-weight: 500;
      line-height: 21.6px;
      letter-spacing: -0.04em;
      text-align: left;
    }

    &__title {
      padding: 0 16px;

      font-size: 30px;
      font-weight: 400;
      line-height: 33px;
      letter-spacing: -0.04em;
      text-align: left;
    }
  }
}
</style>
