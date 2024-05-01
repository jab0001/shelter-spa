<template>
  <div class="disclaimer">
    <h2 class="disclaimer__title">Disclaimer</h2>
    <p class="disclaimer__text">
      The company data available through B2BHint ("company data") comes from
      many different government sources. In some cases, the source data contain
      errors that we have not yet detected, and in other cases, the data were
      provided in very complex formats, which may have led to errors in their
      presentation on B2BHint.<br /><br />Therefore, we cannot make any promises
      about the quality of company data. Your use of company data is entirely at
      your own risk.<br /><br />For this reason, we limit our liability as
      follows:<br /><br />B2BHint is provided "AS IS" and on an "AS AVAILABLE"
      basis without any representations or warranties of any kind (express or
      implied by law) to the extent permitted by law, including implied
      warranties of satisfactory quality, fitness for a particular purpose,
      non-infringement, compatibility, security and accuracy.<br /><br />Under
      no circumstances will we be liable for any of the following losses or
      damages (whether such losses were foreseen, foreseeable, known or
      otherwise) (a) loss of data; (b) loss of revenue or anticipated profits;
      (c) loss of business; (d) loss of opportunity; (e) loss of goodwill or
      damage to reputation; (f) loss suffered by third parties; or (g) any
      indirect, consequential, special or exemplary damages arising out of
      B2BHint, regardless of form of action.<br /><br />We do not warrant that
      B2BHint content will be uninterrupted or error-free, that defects will be
      corrected, or that B2BHint or the servers that make it available are free
      of viruses or bugs.
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
    font-size: 15px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: -0.27px;

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
