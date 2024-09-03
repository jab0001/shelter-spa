<template>
  <div class="disclaimer">
    <h2 class="disclaimer__title">Disclaimer</h2>
    <p class="disclaimer__text">
      The information provided on the HelpShelter platform ("the platform") is obtained from various 
      open and publicly available sources, social media accounts of shelters, shelter owners' websites, 
      Patreon pages, and other similar open sources. While we strive to ensure the accuracy and reliability 
      of the information presented, we cannot guarantee its completeness, accuracy, or reliability. Your use 
      of the platform data is entirely at your own risk. <br/> <br> The platform is for information purposes only and 
      does not constitute professional advice or services. Users of the platform are solely responsible for 
      verifying the accuracy and reliability of the information presented and should exercise caution and 
      diligence when relying on it. <br/> <br> In no event shall HelpShelter be liable for any direct, indirect, 
      incidental, special, or consequential damages arising out of or in any way connected with the use or
      inability to use the platform or the information presented on it. This includes but is not limited 
      to damages for loss of profits, data, or goodwill. <br/> <br> The platform is provided on an "as is" and 
      "as available" basis, without any representations or warranties of any kind, express or implied.
      HelpShelter disclaims all warranties, including but not limited to the implied warranties of
      merchantability, fitness for a particular purpose, and non-infringement, compatibility, security
      and accuracy. <br/> <br> By using the platform, you agree to indemnify and hold HelpShelter from any claims,
      damages, losses, liabilities, costs, and expenses, including legal fees, arising out of or in any
      way related to your use of the platform or any violation of these terms. <br/> <br> This disclaimer is 
      subject to change without notice. Please review it periodically for updates.
    </p>
  </div>
</template>

<script>
export default {
  name: "DisclaimerView",

  components: {},

  data() {
    return {};
  },
  computed: {},

  methods: {},
};
</script>

<style scoped lang="scss">
.disclaimer {
  max-width: 950px;
  margin: 0 auto;
  margin-top: 120px;
  margin-bottom: 200px;

  &__title {
    font-family: "Onest";
    font-size: 45px;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: -0.04em;
    text-align: center;
  }

  &__text {
    margin-top: 80px;
    font-family: "Onest";
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    color: #444444;
    text-align: left;
  }

  @media (max-width: 900px) {
    margin-top: 60px;
    padding: 0 16px;
    margin-bottom: 100px;

    &__title {
      font-size: 26px;
      font-weight: 400;
      line-height: 31.2px;
      letter-spacing: -0.04em;
      text-align: center;
    }

    &__text {
      margin-top: 60px;
    }
  }
}
</style>
