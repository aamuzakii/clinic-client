import Vue from 'vue'
import Vuex from 'vuex'
import { instanceSpring, instanceGin } from '../apis/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    patients: [],
    isLoading: false
  },
  mutations: {
    SET_PATIENTS (state, payload) {
      state.patients = payload
    }
  },
  actions: {
    fetchPatients({commit}) {
      instanceSpring.get('/patients')
      .then( ({data}) => {
        commit('SET_PATIENTS', data)
      })
      .catch( err => {
        console.log(err)
      })
    },
    addPatients(_, payload) {
      console.log(payload, `<<< ini PY`)
      instanceGin.post('/patients', {
        "patient_name" : payload.patientName,
        "birth_date": payload.birthDate,
        "phone_number" : payload.phoneNumber
      })
      .then( ({data}) => {
        console.log(data, `<<<`)
        return Promise.resolve()
      })
      .catch( err => {
        console.log(err)
      })
    },
    deletePatientById( {commit, dispatch}, id) {
      instanceSpring.delete(`/patients/${id}`)
      .then( ({data}) => {
        dispatch("fetchPatients")
        console.log(data, `<<<`)
      })
      .catch( err => {
        console.log(err)
      })
    },
  },
  modules: {
  }
})
