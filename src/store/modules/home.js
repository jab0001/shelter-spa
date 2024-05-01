/* import Vue from "vue"; */
import axios from "axios";

export default {
  namespaced: true,
  state: {
    cards: [],
  },
  getters: {
    getSliderList: (state) => {
      return state.cards;
    },
  },
  actions: {
    async fetchSliderList({ commit }) {
      try {
        let res = await axios({
          method: "post",
          url: `https://backend.help-shelter.com/blog/cards`,
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            cards_on_page: 8,
            page: 1,
            themes: [],
          },
        });
        commit("SET_SLIDER_LIST", res.data);
        return res.data;
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    },
  },
  mutations: {
    SET_SLIDER_LIST(state, cards) {
      state.cards = cards;
    },
  },
};
