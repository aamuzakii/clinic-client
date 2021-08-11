<template>
  <div class="mt-5" >
    <div class="title" >
      Tangerang Manucipality Clinic
    </div>
    <div class="middle d-flex justify-content-center" >
      <div class="left selectable-card">
        <Card
          title="Add Patient"
          imgSrc='../assets/medical_records.jpg'
        />
      </div>
      <div class="right selectable-card">
        <Card
          title="Search Patient"
          imgSrc='../assets/medical_records.jpg'
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'

export default {
  components: { Card },
  data(){
    return {
      activeTable: '',
      username: localStorage.username,
      
    }
  },
  props: ["movies", "history", "role", "profPicture"],
  created(){
    // this.fetchMovies()
    this.$emit("fetchHistory")
  },
  methods: {
    patchStatus(payload){
      this.$emit("patchStatus", payload)
    },
    
  }
}
</script>

<style>


</style>