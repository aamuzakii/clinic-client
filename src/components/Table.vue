<template>
  <div class="mt-7 mx-5" >
    <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Birth Date</th>
        <th scope="col">Phone Number</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="patient in patients" :key="patient.id" >
        <th scope="row">1</th>
        <td> {{ patient.patient_name }} </td>
        <td> {{ patient.birth_date }} </td>
        <td> {{ patient.phone_number }} </td>
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

</style>