<template>
  <div class="privacy">
    <h2 class="privacy__title">Privacy Policy</h2>
    <TextBlock
      text="At B2BHint, accessible from https://b2bhint.com/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by B2BHint and how we use it.If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in B2BHint. This policy is not applicable to any information collected offline or via channels other than this website."
    />
    <TextBlock
      title="Consent"
      text="By using our website, you hereby consent to our Privacy Policy and agree to its terms."
    />
    <TextBlock
      title="Information we collect"
      text="The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide. When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number."
    />
    <TextBlock
      title="How we use your information"
      text="We use the information we collect in various ways, including to:"
      :items="items"
    />
    <TextBlock
      title="Log Files"
      text="B2BHint follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information."
    />
    <TextBlock
      title="Cookies and Web Beacons"
      text="Like any other website, B2BHint uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information."
    />
    <TextBlock
      title="Google DoubleClick DART Cookie"
      text="Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL"
    />
    <TextBlock
      title="Updates"
      text="We may update this privacy policy at our discretion from time to time by posting a new version on our Website. You should check our Website occasionally to ensure any changes made are suitable for you. If required by applicable law, you will be informed of any significant changes made to the privacy policy. <br /> <br />The current version of this privacy policy was modified on May 22, 2022"
    />
  </div>
</template>

<script>
import TextBlock from "@/components/TextBlock.vue";

export default {
  name: "PrivacyView",

  components: {
    TextBlock,
  },

  data() {
    return {
      items: [
        "Provide, operate, and maintain our website",
        "Improve, personalize, and expand our website",
        "Understand and analyze how you use our website",
        "Develop new products, services, features, and functionality",
        "Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes",
        "Send you emails",
        "Find and prevent fraud",
      ],
    };
  },
  computed: {},

  methods: {},
};
</script>

<style scoped lang="scss">
.privacy {
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
  }
}
</style>
