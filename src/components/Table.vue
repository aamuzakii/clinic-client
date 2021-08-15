<template>
  <div class="mt-7 mx-5" >
    <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Birth Date</th>
        <th scope="col">Phone Number</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="patient in patients" :key="patient.id" >
        <th scope="row">1</th>
        <td> {{ patient.patientName }} </td>
        <td> {{ patient.birthDate }} </td>
        <td> {{ patient.phoneNumber }} </td>
        <td class="d-flex" > <button class="delete-edit-button">Delete</button> <button class="delete-edit-button">Edit</button></td>
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
  ])
}
</script>

<style>
.delete-edit-button {
	 font: inherit;
	 font-size: 1.25rem;
	 width: 100%;
	 color: #fff;
	 border-radius: 50px;
	 border: none;
	 font-weight: 400;
	 background-color: #4081c0;
	 padding: 0 0 0 0;
}
 .delete-edit-button:focus {
	 outline: 0;
}
 
</style>
	 /* margin: 40px 10px 10px -10px !important; */