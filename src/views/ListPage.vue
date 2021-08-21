<template>
  <div class="mt-5 d-flex justify-content-center" >
    <div class="card m-5 w-100 h-100" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Daftar Pasien</h5>
        <div>
          <Table/>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Table from '../components/Table.vue'

export default {
  components: { Table },
  created() {
    this.$store.dispatch("fetchPatients")
  },


}
</script>

<style>

</style>