<template>
  <div>
    <div class="about">
      <h2 class="about__title">About HelpShelter</h2>
      <img
        :src="mobile ? './images/dogs-mobile.png' : './images/dogs.png'"
        alt=""
        class="about__img"
      />
      <DonationBlock class="about__donation" />
      <DeserveBlock />
      <WorkBlock />

      <div class="about__reasons__wrapper">
        <ul class="about__reasons__list">
          <li>
            <div class="about__reasons__list__digit">1</div>
            <h4 class="about__reasons__list__title">
              Why is it important to help shelters?
            </h4>
            <div class="about__reasons__list__info__wrapper">
              <div>
                <p class="about__reasons__list__info">
                  We believe that helping animal shelters is crucial. There are
                  many homeless animals in the world that need love, attention,
                  and care.
                </p>
                <p class="about__reasons__list__info">
                  By donating to a shelter, you can make a significant impact on
                  an animal's life. We encourage everyone to take the time to
                  browse through our app, find a shelter that speaks to you, and
                  make a donation
                </p>
              </div>
              <LinkBtn
                link="shelters"
                title="Find a shelter"
                class="about__reasons__list__btn"
              />
            </div>
          </li>
          <li>
            <div class="about__reasons__list__digit">2</div>
            <h4 class="about__reasons__list__title">We remind you</h4>
            <div class="about__reasons__list__info__wrapper">
              <div>
                <p class="about__reasons__list__info">
                  Supporting animal shelters is important, but it is only a
                  band-aid solution to the problem of pet overpopulation.
                </p>
                <p class="about__reasons__list__info">
                  To make a real difference, it is vital to educate people about
                  the importance of neutering their pets and the responsibility
                  that comes with adopting a pet.
                </p>
                <p class="about__reasons__list__info">
                  Educating people can prevent more unwanted animals from being
                  born and reduce the number of animals in shelters in the long
                  term.
                </p>
                <p class="about__reasons__list__info">
                  That's why we encourage you to check out the information
                  provided by the international organization PETA.
                </p>
              </div>
              <LinkBtn
                link="get-in-touch"
                title="Learn more"
                class="about__reasons__list__btn"
              />
            </div>
          </li>
        </ul>
        <div class="about__reasons__motto">
          <h3>Let's work together to create a world</h3>
          <h3>where every animal is wanted and loved</h3>
        </div>
      </div>

      <OurTeam class="support__team" />

      <div class="about__help-us">
        <h3 class="about__help-us__title">How can you help us?</h3>
        <div class="about__help-us__info">
          <p class="about__help-us__info__text">
            You can help us achieve our mission by making a donation to our app.
            Your contribution will go towards the maintenance and improvement of
            our platform. Together, we can make a difference in the lives of
            animals.
          </p>
          <LinkBtn
            link="donate"
            title="Donate us"
            class="about__help-us__info__btn"
          />
        </div>
        <a href=""> <p class="about__help-us__link">Learn more ↗</p> </a>
      </div>
    </div>
    <ContactUs
      title="If you have any questions or concerns, please feel free to reach out to us. We are always happy to help"
      btnText="Get in touch"
      link="get-in-touch"
      class="about__contact"
    />
  </div>
</template>

<script>
import DonationBlock from "@/components/DonationBlock.vue";
import DeserveBlock from "@/components/DeserveBlock.vue";
import WorkBlock from "@/components/WorkBlock.vue";
import OurTeam from "@/components/OurTeam.vue";
import LinkBtn from "@/components/LinkBtn.vue";
import ContactUs from "@/components/ContactUs.vue";

export default {
  name: "GetTouchView",

  components: {
    DonationBlock,
    DeserveBlock,
    WorkBlock,
    OurTeam,
    LinkBtn,
    ContactUs,
  },

  data() {
    return {
      mobile: false,
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
.about {
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 120px;

  &__contact {
    margin-bottom: 200px;

    @media (max-width: 900px) {
      margin-bottom: 100px;
    }
  }

  &__donation {
    margin-top: 77px;
  }

  &__title {
    font-family: "Onest";
    font-size: 45px;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: -0.04em;
    text-align: center;
  }

  &__img {
    margin-top: 80px;
    width: 100%;
    height: auto;
    border-radius: 7px;
  }

  &__reasons {
    &__wrapper {
      margin-top: 200px;
      margin-bottom: 200px;
    }

    &__list {
      white-space: pre-line;

      & li {
        margin-bottom: 160px;
      }

      &__digit {
        font-family: "Onest";
        font-weight: 800;
        font-size: 80px;
        line-height: 88px;
        letter-spacing: -0.04em;
        color: white;
        -webkit-text-stroke: 2px #bbbe31;
        margin-bottom: 5px;
      }

      &__title {
        font-family: "Onest";
        font-weight: 500;
        font-size: 30px;
        line-height: 30px;
        color: #bbbe31;
        letter-spacing: -0.04em;

        margin-bottom: 62px;
      }

      &__info {
        font-family: "Onest";
        font-weight: 400;
        font-size: 30px;
        line-height: 40px;
        color: #272727;
        letter-spacing: -0.04em;

        margin-left: 126px;
        margin-top: 19px;
        width: 860px;

        &__wrapper {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
      }

      &__btn {
        margin-top: auto;
        margin-left: auto;
      }
    }

    &__motto {
      text-align: center;
      margin-top: 200px;

      & h3 {
        font-family: "Onest";
        font-weight: 400;
        font-size: 45px;
        line-height: 49.5px;
        color: #bbbe31;
        letter-spacing: -0.04em;
      }
    }
  }

  &__help-us {
    margin-top: 200px;
    margin-bottom: 80px;

    &__title {
      font-family: "Onest";
      font-weight: 400;
      font-size: 45px;
      line-height: 49.5px;
      letter-spacing: -0.04em;
      color: #272727;
    }

    &__info {
      margin-top: 80px;
      display: flex;
      flex-direction: row;
      align-items: center;

      &__text {
        font-family: "Onest";
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        color: #444444;

        width: 800px;
      }

      &__btn {
        margin-left: 179px;
      }
    }

    &__link {
      font-family: "Onest";
      font-weight: 400;
      font-size: 18px;
      line-height: 27px;
      color: #ba6d00;

      margin-top: 16px;
    }
  }

  @media (max-width: 900px) {
    margin-top: 60px;
    margin-bottom: 100px;

    &__title {
      font-size: 26px;
      font-weight: 400;
      line-height: 31.2px;
      letter-spacing: -0.04em;
      text-align: center;
    }

    &__img {
      box-sizing: border-box;
      padding: 0 16px;
      margin-top: 60px;
    }

    &__donation {
      margin-top: 55px;
    }

    &__reasons {
      &__motto {
        margin-top: 80px;
        h3 {
          font-size: 30px;
          font-weight: 400;
          line-height: 33px;
          letter-spacing: -0.04em;
          text-align: center;
        }
      }

      &__wrapper {
        margin-top: 162px;
        margin-bottom: 0;
      }

      &__list {
        padding: 0 16px;

        li {
          margin-bottom: 82px;
        }

        &__btn {
          margin-top: 30px;
        }

        &__info {
          margin: 0;
          width: 100%;

          font-size: 20px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: -0.04em;
          text-align: left;

          &:not(:first-child) {
            margin-top: 20px;
          }

          &__wrapper {
            flex-direction: column;
          }
        }

        &__digit {
          font-size: 60px;
          font-weight: 800;
          line-height: 66px;
          letter-spacing: -0.04em;
          text-align: left;
        }

        &__title {
          margin-bottom: 40px;

          font-size: 20px;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: -0.04em;
          text-align: left;
        }
      }
    }

    &__help-us {
      padding: 0 16px;
      margin-top: 100px;
      margin-bottom: 18px;

      &__link {
        text-align: center;
        
        @media (max-width: 900px) {
          display: none;
        }
      }

      &__info {
        flex-direction: column;
        margin-top: 60px;

        &__btn {
          margin: 0 auto;
          margin-top: 30px;
        }

        &__text {
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          text-align: left;
          width: 100%;
        }
      }

      &__title {
        font-size: 30px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: -0.04em;
        text-align: left;
      }
    }
  }
}
</style>
