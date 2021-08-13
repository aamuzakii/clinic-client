import Vue from 'vue'
import Vuex from 'vuex'
import instance from '../apis/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    patients: []
  },
  mutations: {
    SET_PATIENTS (state, payload) {
      state.patients = payload
    }
  },
  actions: {
    fetchPatients({commit}) {
      instance.get('/patients')
      .then( ({data}) => {
        commit('SET_PATIENTS', data.users)
      })
      .catch( err => {
        console.log(err)
      })
    },
  },
  modules: {
  }
})
