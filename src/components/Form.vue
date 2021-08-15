<template>
	<div class="card">
		<form class="card-form" @submit.prevent="toAddPatient" >
			<h2>
        Registrasi Pasien
      </h2>
      <div class="input">
				<input type="text" class="input-field" value="" v-model="patientName" required/>
				<label class="input-label">Full name</label>
			</div>
      <div class="input">
				<input 
          class="input-field" 
          required
          name="date" type="text" onfocus="(this.type='date')" onblur="if(!this.value)this.type='text'"
					v-model="birthDate"
        />
				<label class="input-label">Birth Date</label>
			</div>
      <div class="input">
				<input type="text" class="input-field" value="" v-model=phoneNumber required/>
				<label class="input-label">Phone Number</label>
			</div>
      
			<div class="action">
				<button class="action-button">Add Patient</button>
			</div>
		</form>
		<div class="card-info">
			<p>By signing up you are agreeing to our <a href="#">Terms and Conditions</a></p>
		</div>
	</div>

</template>

<script>


export default {
	data: () => ({
		patientName : "",
		birthDate : "",
		phoneNumber : "",
	}),
	methods: {
		toAddPatient() {
			let payload = {
				patientName: this.patientName,
				birthDate: this.birthDate,
				phoneNumber: this.phoneNumber
			}
			this.$store.dispatch("addPatients", payload)
		}
	}
}
</script>
<style scoped src="./Form.css"></style>
<style>

.action-button {
  font: inherit;
	font-size: 1.25rem;
	padding: 1em;
	width: 100%;
	font-weight: 500;
	color: #FFF;
	&:focus {
    outline: 0;
	}
  border-radius: 50px;
  border: none;
  font-weight: 500;
  padding: 7px 17px 7px 17px;
  margin: 40px 10px 10px -10px !important;
  background-color: $brand-blue;
}

</style>