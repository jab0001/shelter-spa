<template>
  <div class="terms">
    <h2 class="terms__title">Terms of use</h2>
    <TextBlock
      text='Your affirmative act of using our website located at <a href="https://help-shelter.com/" style="color: #BA6D00;"> https://help-shelter.com/ </a> (and all associated sites linked to it) or services ("HelpShelter") signifies that you agree to the following terms and conditions of use ("Terms of Use"). If you do not agree, do not use HelpShelter ("us", "we" or "our").'
    />
    <TextBlock
      title="Changes to the terms of use"
      text="We may update these Terms of Use from time to time. If you continue to use HelpShelter after we make changes, this means that you agree to the new terms. You can always find the latest version of our Terms of Use here, so please check back from time to time. By using the platform, you agree to be bound by the most recent version of these terms."
    />
    <TextBlock
      title="Changes to HelpShelter"
      text="We may discontinue or change any service or feature on HelpShelter at any time without notice. We do not guarantee backward compatibility of our services and Application Programming Interface (API) in this case."
    />
    <TextBlock
      title="The HelpShelter database"
      text="p4.1 <a href='https://opendatacommons.org/licenses/odbl/summary/' style='color: #BA6D00;''> Open Database License </a>. <br/> <br/> We collect data into our platform from various open and publicly available sources, including public datasets, social media accounts of shelters, shelter owners' websites, Patreon pages, and other similar open sources. Our team invests significant time, effort, and resources to acquire and process this data, making it a valuable and accessible resource. <br/> <br/> While we do not assert ownership over the information obtained from free and open sources, we make every effort to attribute it appropriately, as outlined in the ODbL license. <br/> <br/> However, we do claim ownership rights over our database containing this information. <br/> <br/> In accordance with the ODbL, users are required to attribute their use of our database. This attribution is crucial as it enables us, to benefit from the reuse of our work and ensures the sustainability of our platform. Any use of our data must include a prominent hyperlink stating 'from HelpShelter' and linking to either our platform's homepage or the specific page containing the relevant information. <br/> <br/> The attribution must be clearly visible and sizable, occupying no less than 70% of the largest font size used on the page or 7px, whichever is larger. If our data forms a substantial portion of a webpage, the rel-canonical tag should be employed to signal to search engines that our platform's page is the primary source for the topic. By citing us in your reports or acknowledging the source in your publications, you directly support our efforts and contribute to the enhancement of our platform. <br/> <br/> Additionally, the ODbL mandates the sharing of any improvements made to our databases under the same license. This means that if you integrate our data with your own and produce derivative works, they must be shared under the Attribution Share-Alike ODbL, allowing the entire community to benefit from our collective contributions to the database"
    />
    <TextBlock
      title="Redistribution of data"
      text="You may not utilize any data mining, robots, or similar data gathering and extraction tools on HelpShelter's content. Additionally, you may not sublicense, assign, transfer, sell, loan, or otherwise distribute for payment HelpShelter's content without our prior written consent. You are prohibited from circumventing any mechanisms included in HelpShelter's content to prevent unauthorized reproduction or distribution. For further details on commercial and partnership inquiries, please refer to section 13.1. <br/> <br/> Except as expressly permitted in the preceding paragraph, you agree not to sell any of our services or materials in any manner or for any purposes without the prior express written consent of HelpShelter. Furthermore, you shall not make copies of any software or documentation provided by HelpShelter, electronically or otherwise, without our prior express written consent, including but not limited to translating, decompiling, disassembling, or creating derivative works. <br/> <br/> Unless otherwise expressly permitted by additional agreement, commercial usage of any of our services or APIs is not allowed."
    />
    <TextBlock
      title="Third party sites"
      text="HelpShelter may include links to third party websites. You agree that HelpShelter shall not be held liable for any activities that occur on any website you access through links on HelpShelter."
    />
    <TextBlock
      title="Contact Us"
      text="If you have any questions or suggestions about our Terms of use, do not hesitate to <a href='/get-in-touch' style='color: #BA6D00;'> contact us <a/>."
    />
  </div>
</template>

<script>
import TextBlock from "@/components/TextBlock.vue";

export default {
  name: "TermsView",

  components: {
    TextBlock,
  },

  data() {
    return {};
  },
  computed: {},

  methods: {},
};
</script>

<style scoped lang="scss">
.terms {
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
