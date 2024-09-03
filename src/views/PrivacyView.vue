<template>
  <div class="privacy">
    <h2 class="privacy__title">Privacy Policy</h2>
    <TextBlock
      text="Welcome to HelpShelter, a dedicated platform committed to providing information about animal shelters worldwide, accessible from <a href='https://help-shelter.com/' style='color: #BA6D00;'> https://help-shelter.com/ <a/>. At HelpShelter, we understand the importance of privacy and transparency. Our product serves as an information resource, providing details about shelters, their contact information, and other relevant data sourced from publicly available channels. We respect the privacy of our users and shelter partners and are committed to complying with applicable data protection laws. This Privacy Policy explains how we collect, use, and safeguard information to ensure a safe and trustworthy experience for everyone involved. If you have any questions or concerns about our practices, please feel free to contact us."
    />
    <TextBlock
      title="Consent"
      text="By using our website, you hereby consent to our Privacy Policy and agree to its terms."
    />
    <TextBlock
      title="Information we collect"
      text="We do not collect any personal information from users. All information provided pertains exclusively to animal shelters. <br/> We gather publicly available information about animal shelters from free and open sources. This information includes shelter names, contact details, descriptions, and other publicly accessible data. Banking details and contact information are collected for the purpose of facilitating donations to shelters. This information is also sourced from publicly available channels."
    />
    <TextBlock
      title="Cookies"
      text="Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer's hard drive. <br/> Like any other website, HelpShelter uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service."
    />
    <TextBlock
      title="Links to Other Sites"
      text="Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services."
    />
    <TextBlock
      title="Updates"
      text="We may update this privacy policy at our discretion from time to time by posting a new version on our Website. You should check our Website occasionally to ensure any changes made are suitable for you. If required by applicable law, you will be informed of any significant changes made to the privacy policy. <br/> <br/> The current version of this privacy policy was modified on Feb 1, 2024."
    />
    <TextBlock
      title="Contact Us"
      text="If you have any questions or suggestions about our Privacy Policy, do not hesitate to <a href='/get-in-touch' style='color: #BA6D00;'> contact us <a/>."
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
