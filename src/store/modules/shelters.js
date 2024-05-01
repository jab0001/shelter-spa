/* import Vue from "vue"; */
import axios from "axios";

export default {
  namespaced: true,
  state: {
    shelters: [],
    shelter: {},
    related: [],
    searchParams: {},
    loaded: false,
    totalPages: null,
  },
  getters: {
    getShelters: (state) => {
      return state.shelters;
    },

    getTotalPages: (state) => {
      return state.totalPages;
    },

    getShelter: (state) => {
      return state.shelter;
    },

    getSearchParams: (state) => {
      return state.searchParams;
    },

    getRelated: (state) => {
      return state.related;
    },

    getLoaded: (state) => {
      return state.loaded;
    },
  },
  actions: {
    async fetchSearchParams({ commit }) {
      try {
        let res = await axios({
          method: "get",
          url: `https://backend.help-shelter.com/shelter_filters`,
          headers: {
            "Content-Type": "application/json",
          },
        });
        commit("SET_SEARCH_PARAMS", res.data);
      } catch (error) {
        console.error("Failed to fetch search shelters:", error);
      }
    },
    async fetchShelters({ commit }, data) {
      console.log("searchParams", data.data);
      console.log("add", data.add);
      try {
        let res = await axios({
          method: "post",
          url: `https://backend.help-shelter.com/shelter_cards`,
          headers: {
            "Content-Type": "application/json",
          },
          data: data.data,
        });
        if (data.add) {
          commit("SET_ADD_SHELTERS", res.data);
        } else {
          commit("SET_SHELTERS", res.data);
        }

        commit("SET_TOTAL_PAGE", res.data[0].total_pages);
        return res.data;
      } catch (error) {
        console.error("Failed to fetch shelters:", error);
      }
    },

    async fetchShelter({ commit }, id) {
      console.log(id);
      try {
        let res = await axios({
          method: "get",
          url: `https://backend.help-shelter.com/shelter/v2/${id}`,
          headers: {
            "Content-Type": "application/json",
          },
        });

        commit("SET_SHELTER", res.data);
        commit("SET_LOADED", true);
        return res.data;
      } catch (error) {
        console.error("Failed to fetch shelter:", error);
      }
    },

    async fetchRelated({ commit }, data) {
      try {
        let res = await axios({
          method: "post",
          url: `https://backend.help-shelter.com/shelter_cards`,
          headers: {
            "Content-Type": "application/json",
          },
          data,
        });
        commit("SET_RELATED", res.data);
        return res.data;
      } catch (error) {
        console.error("Failed to fetch related:", error);
      }
    },
  },
  mutations: {
    SET_SHELTERS(state, shelters) {
      state.shelters = shelters;
    },

    SET_ADD_SHELTERS(state, shelters) {
      state.shelters = [...state.shelters, ...shelters];
    },

    SET_SHELTER(state, shelter) {
      state.shelter = shelter;
    },

    SET_RELATED(state, related) {
      state.related = related;
    },

    SET_SEARCH_PARAMS(state, searchParams) {
      state.searchParams = searchParams;
    },

    SET_LOADED(state, loaded) {
      state.loaded = loaded;
    },

    SET_TOTAL_PAGE(state, total_pages) {
      state.totalPages = total_pages;
    },
  },
};
