<template>
  <div class="support">
    <div class="support__container">
      <h2 class="support__title">Support us</h2>
      <img
        :src="mobile ? './images/hands-mobile.png' : './images/hands.png'"
        alt=""
        class="support__img"
      />
      <div class="support__wrapper">
        <h2 class="support__title support__title-second">
          Welcome to our
          <span class="support__title--yellow"> «Support&nbsp;us»</span
          >&nbsp;page!
        </h2>
        <p class="support__text">
          We're a team of dedicated individuals who have developed this app with
          a mission to help and support animal shelters and welfare
          organizations. We are driven by our love for animals and a desire to
          make a difference in their lives. Our team has created this app on a
          voluntary basis, without any financial support or investors, solely
          relying on our passion and dedication.<br  style="margin-top: 10px;"/>We believe in our project
          and its potential to make a positive impact, and we hope you do too.
          Your support can make all the difference in helping us achieve our
          goal.
        </p>
      </div>
      <WorkBlock
        title="Donate us"
        link="donate"
        :items="items"
        mainTitle="Our goals for your donation"
      />
      <OurTeam class="support__team" />
    </div>
    <Thanks
      class="support__thanks"
      first_text="Help us spread the word! Share your donation with others&nbsp;on social
        media to inspire more support. By sharing&nbsp;your contribution, you
        can raise awareness and&nbsp;encourage others to join us in making a
        difference for&nbsp;animals in need. Every share counts and brings us
        closer to achieving our goals.
      </p>"
      second_text="We would like to extend a heartfelt thank you to each and every one of
        our donors for their generous contributions and unwavering support. Your
        donations are invaluable in helping us achieve our mission and make a
        positive impact on the lives of animals in need.<br />Please know that
        every penny you donate goes directly towards the goals we have outlined
        above. Your support enables us to enhance our product, expand our reach,
        and continue advocating for the welfare of animals."
    />
    <ContactUs
      title="If you have any questions or concerns, please feel free to reach out to us. We are always happy to help"
      link="get-in-touch"
      btnText="Get in touch"
    />
  </div>
</template>

<script>
import WorkBlock from "@/components/WorkBlock.vue";
import OurTeam from "@/components/OurTeam.vue";
import Thanks from "@/components/Thanks.vue";
import ContactUs from "@/components/ContactUs.vue";

export default {
  name: "SupportView",

  components: {
    WorkBlock,
    OurTeam,
    Thanks,
    ContactUs,
  },

  data() {
    return {
      mobile: false,
      items: [
        {
          id: 0,
          title: "Technical support",
          content:
            "Your donation will help us cover the costs of maintaining our technical infrastructure and ensure that our product remains accessible and user-friendly for everyone.",
        },
        {
          id: 1,
          title: "Product development",
          content:
            "With your support, we can invest in research and development to continuously improve our product and introduce new features that meet the evolving needs of our users.",
        },
        {
          id: 2,
          title: "Staff expansion",
          content:
            "As our user base grows, so does the demand for our product. By donating, you can help us hire more talented individuals to join our team and contribute to the success of our project.",
        },
        {
          id: 3,
          title: "Community outreach",
          content:
            "We believe in the importance of educating and engaging our community on important issues related to our product. With your donation, we can host events, create educational materials, and collaborate with other organizations to spread awareness and build a stronger network of support.",
        },
      ],
    };
  },
  computed: {},

  methods: {},

  mounted() {
    if (window.innerWidth < 900) {
      this.mobile = true;
    }
  },
};
</script>

<style scoped lang="scss">
.support {
  margin-top: 120px;
  margin-bottom: 200px;

  &__thanks {
    margin-top: 200px;
  }

  &__container {
    max-width: 1400px;
    margin: 0 auto;
  }

  &__donation {
    margin-top: 77px;
  }

  &__wrapper {
    display: flex;
    margin-top: 80px;
  }

  &__title {
    font-family: "Onest";
    font-size: 45px;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: -0.04em;
    text-align: center;

    &-second {
      width: 45%;
      text-align: left;
    }

    &--yellow {
      background: #d1d457;
      border-radius: 40px;
      color: #fffcf9;
      padding: 0px 10px;
    }
  }

  &__text {
    width: 60%;
    font-family: "Onest";
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;

    color: #444;
  }

  &__img {
    margin-top: 80px;
    width: 100%;
    height: auto;
    border-radius: 7px;
  }

  &__team {
    margin-top: 200px;
  }

  @media (max-width: 900px) {
    margin-top: 60px;
    margin-bottom: 100px;

    &__wrapper {
      flex-direction: column;
      padding: 0 16px;
      margin-top: 55px;
    }

    &__text {
      width: 100%;
      margin-top: 40px;

      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      text-align: left;
    }

    &__title {
      font-size: 26px;
      font-weight: 400;
      line-height: 31.2px;
      letter-spacing: -0.04em;
      text-align: center;

      &-second {
        font-size: 30px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: -0.04em;
        text-align: left;

        width: 100%;
      }
    }

    &__img {
      padding: 0 16px;
      margin-top: 60px;

      box-sizing: border-box;
    }
  }
}
</style>
