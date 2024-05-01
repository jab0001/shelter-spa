<template>
  <div class="donation-block">
    <h3 class="donation-block__title">
      Find a shelter that speaks to you, and make a donation
    </h3>
    <ul class="donation-block__list">
      <li
        class="donation-block__item"
        v-for="info in infoDonations"
        :key="info.id"
      >
        <h4 v-if="info.title" class="donation-block__item-title">
          {{ info.title }}
        </h4>
        <p class="donation-block__item-text">
          {{ info.content }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DonationBlock",

  props: {},

  components: {},

  data() {
    return {
      infoDonations: [
        {
          id: 0,
          title: "",
          content:
            "Our app empowers you to make a difference in the lives of pets in need. Browse information on various animal shelters, find the one that aligns with your values, and use the provided bank account information to donate. Our platform also allows you to search for shelters based on specific criteria. Be a part of the solution and help animals in need.",
        },
        {
          id: 1,
          title: "Our Goals",
          content:
            "Our goal is to connect pet lovers with animal shelters in need and facilitate donations to improve the lives of pets. We strive to make it easy for individuals to make a positive impact by providing comprehensive information about shelters and their needs. Our ultimate aim is to create a community of individuals who are passionate about supporting pets in need.",
        },
        {
          id: 2,
          title: "Our Vision",
          content:
            "We believe that by providing accessible information and resources, our platform will empower individuals to make a difference and drive meaningful change for the welfare of all pets.",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.donation-block {
  display: flex;
  justify-content: space-between;

  &__title {
    font-family: "Onest";
    font-size: 45px;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: -0.04em;
    width: 35%;
  }

  &__list {
    width: 57%;
  }

  &__item {
    &:not(:first-child) {
      margin-top: 80px;
    }

    &-text {
      font-family: "Onest";
      font-size: 20px;
      font-weight: 400;
      line-height: 30px;

      color: #444444;
    }

    &-title {
      margin-bottom: 30px;

      font-family: "Onest";
      font-size: 30px;
      font-weight: 500;
      line-height: 30px;
      letter-spacing: -0.04em;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 0 16px;

    &__title {
      width: 90%;

      font-size: 30px;
      font-weight: 400;
      line-height: 33px;
      letter-spacing: -0.036em;
    }

    &__list {
      width: 100%;

      margin-top: 40px;
    }

    &__item {
      &:not(:first-child) {
        margin-top: 40px;
      }

      &-text {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
      }

      &-title {
        margin-bottom: 20px;

        font-size: 24px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: -0.04em;
        text-align: left;
      }
    }
  }
}
</style>
