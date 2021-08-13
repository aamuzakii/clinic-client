<template>
	<div class="card">
		<form class="card-form">
			<h2>
        Registrasi Pasien
      </h2>
      <div class="input">
				<input type="text" class="input-field" value="" required/>
				<label class="input-label">Full name</label>
			</div>
      <div class="input">
				<input 
          class="input-field" 
          required
          name="date" type="text" onfocus="(this.type='date')" onblur="if(!this.value)this.type='text'"
        />
				<label class="input-label">Birth Date</label>
			</div>
      <div class="input">
				<input type="text" class="input-field" value="" required/>
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

}
</script>
<style scoped src="./Form.css"></style>
<style>

</style>