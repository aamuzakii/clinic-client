<template>
  <div class="mt-7 mx-5" >
    <table class="table">
    <thead>
      <tr >
        <th scope="col">No.</th>
        <th scope="col">Name</th>
        <th scope="col">Birth Date</th>
        <th scope="col">Phone Number</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="patient,index in patients" :key="index" :index="index" >
        <th scope="row"> {{ index +1 }} </th>
        <td> {{ patient.patientName }} </td>
        <td> {{ patient.birthDate }} </td>  
        <td> {{ patient.phoneNumber }} </td>
        <td class="d-flex" > <button class="delete-edit-button btn-danger" @click="deleteById(patient.id)" >Delete</button> <button class="delete-edit-button btn-secondary ">Edit</button></td>
      </tr>
    </tbody>
  </table>
  </div>
  
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState([
    'patients'
  ]),
  methods: {
    deleteById(id) {
      console.log(id, `<<< 36`)
      this.$store.dispatch("deletePatientById", id)
    }
  },
}
</script>

<style>
.delete-edit-button {
	 font: inherit;
	 font-size: 1.1rem;
	 width: 100%;
	 color: #fff;
	 border-radius: 50px;
	 border: none;
	 font-weight: 490;
	 background-color: #4081c0;
	 padding: 0 0 0 0;
	 margin: 0 5px 0 0 !important;
}
 .delete-edit-button:focus {
	 outline: 0;
}
 
</style>