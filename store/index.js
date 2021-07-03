import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      isAuthenticated: "",
      user: "7676"
    },
    getters: {
      getUser(state) {
        return state.user;
      }
    },
    mutations: {
      setUser(state, payload) {
        state.user = payload;
      }
    },
    actions: {
      async nuxtServerInit(vuexContext, payload) {},

      getUser({ commit }) {
        const user = localStorage.getItem("user");
        commit("setUser", user);
      }
    }
  });
};

export default createStore;
