<template>
  <router-link :to="link" class="link">
    {{ title }}
  </router-link>
</template>

<script>
export default {
  name: "LinkBtn",

  props: {
    link: {
      type: String,
      default: "/",
    },
    title: {
      type: String,
      default: "link",
    },
  },

  components: {},

  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.link {
  max-height: 22px;
  padding: 20px 50px;

  font-family: "Onest";
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;

  border: 1.5px solid #272727;
  border-radius: 33.5px;

  background: inherit;

  color: #272727;
  text-decoration: none;

  &:hover {
    background: radial-gradient(#f3c98f, #fff);
  }

  @media (max-width: 900px) {
    margin-top: 28px;
    max-height: 20px;
    padding: 10px 29px;
    font-size: 16px;
    font-weight: 400;
    line-height: 20.4px;
  }
}
</style>
