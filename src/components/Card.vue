<template>
  <div class="m-5" >
    <div class="card selectable-card " style="width: 18rem;">
  <img src='../assets/medical_records.jpg' class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"> {{ title }} </h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["title"],
  data() {
    return {
      
    }
  },
  methods: {
  }
}
</script>

<style>
  .selectable-card:hover {
    transform: scale(1.03);
    transition: 200ms;
  }
</style>