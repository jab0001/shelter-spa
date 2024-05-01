/* import Vue from "vue"; */
import axios from "axios";

export default {
  namespaced: true,
  state: {
    blogs: [],
    blog: {},
    related: [],
    filters: [],
    totalPages: null,
  },
  getters: {
    getBlogs: (state) => {
      return state.blogs;
    },

    getTotalPages: (state) => {
      return state.totalPages;
    },

    getBlog: (state) => {
      return state.blog;
    },

    getFilters: (state) => {
      return state.filters;
    },
  },
  actions: {
    async fetchBlogs({ commit }, data) {
      console.log(data.add)
      try {
        let res = await axios({
          method: "post",
          url: `https://backend.help-shelter.com/blog/cards`,
          headers: {
            "Content-Type": "application/json",
          },
          data: data.data,
        });
        if (data.add) {
          commit("SET_ADD_BLOGS", res.data);
        } else {
          commit("SET_BLOGS", res.data);
        }

        commit("SET_TOTAL_PAGE", res.data[0].total_pages);
        return res.data;
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    },

    async fetchBlog({ commit }, id) {
      console.log("id-test", id);

      try {
        let res = await axios({
          method: "get",
          url: `https://backend.help-shelter.com/blog/${id}`,
          headers: {
            "Content-Type": "application/json",
          },
        });
        commit("SET_BLOG", res.data);
        return res.data;
      } catch (error) {
        console.error("Failed to fetch blog:", error);
      }
    },

    async fetchFilters({ commit }) {
      try {
        let res = await axios({
          method: "get",
          url: `https://backend.help-shelter.com/blog/stats`,
          headers: {
            "Content-Type": "application/json",
          },
        });
        commit("SET_FILTERS", res.data);
        return res.data;
      } catch (error) {
        console.error("Failed to fetch filters:", error);
      }
    },
  },
  mutations: {
    SET_BLOGS(state, blogs) {
      state.blogs = blogs;
    },

    SET_ADD_BLOGS(state, blogs) {
      state.blogs = [...state.blogs, ...blogs];
    },

    SET_BLOG(state, blog) {
      state.blog = blog;
    },

    SET_FILTERS(state, filters) {
      state.filters = filters;
    },

    SET_TOTAL_PAGE(state, total_pages) {
      state.totalPages = total_pages;
    },
  },
};
