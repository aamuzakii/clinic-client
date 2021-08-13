<template>
  <div class="home-container" >
    <!-- <div class="home-wallpaper-wrapper">
      <img src="../assets/doctor3.jpg" class="home-wallpaper" alt="">
    </div> -->
    <Form
      v-if="isRegistering"
      data-aos="fade-up" data-aos-duration="800" data-aos-delay="50"
    ></Form>
    <div class="layer"
      @click="cancelRegister" 
      v-if="isRegistering" data-aos="zoom-in"  data-aos-duration="10">
    </div>
    <img src="../assets/logo2.png" alt="" class="logo" data-aos="fade-right" data-aos-duration="1200">
    <div class="title" >
    </div>
    <div class="main d-flex flex-column " >
      <div class="melayani" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="150">
        MELAYANI
      </div>
      <div class="melayani" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="150">
        SEPENUH HATI
      </div>
      <div  data-aos="fade-right" data-aos-duration="1200" data-aos-delay="500">
        <button class="btn-primary round-regis"
          @click="toAddPage"
        >Registrasi Pasien</button>
        <button class="round-list"
          @click="toListPage"
        >Lihat Daftar Pasien</button>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import Form from '../components/Form.vue'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import "../style.css"
AOS.init();

export default {
  components: { Card, Form },
  data(){
    return {
      isRegistering: false
    }
  },
  props: ["movies", "history", "role", "profPicture"],
  created(){
    this.$emit("fetchHistory")
  },
  methods: {
    patchStatus(payload){
      this.$emit("patchStatus", payload)
    },
    cancelRegister() {
      this.isRegistering = false
    },


    toListPage() {
      console.log(`masuk list`)
      this.$router.push({ name: 'ListPage' }).catch(_ => {})
    },
    toAddPage() {
      console.log(`masuk add`)
      this.isRegistering = true
    },
    
  }
}
</script>
<style scoped src="@/style.css"></style>

<style>


</style>
      <!-- <Card
        title="Add Patient"
        imgSrc='../assets/medical_records.jpg'
        @click.prevent="toAddPage"
      /> -->
      <!-- <Card
        title="Search Patient"
        imgSrc='../assets/medical_records.jpg'
        @click.prevent="toListPage"
      /> -->