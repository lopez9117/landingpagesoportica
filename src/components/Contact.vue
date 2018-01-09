<template>
	<div class="div-fa-contact">
		<div class="div-row1contact"> 
			<div>
				<h1>Contacto</h1>
				<div class="col-lg-6 div-line"></div>
			</div>
			<form class="col-xs-12 col-sm-12 col-md-12 col-lg-10 form-contact">
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<p class="col-xs-12 col-sm-12 col-md-12 col-lg-12">Completa el siguiente formulario.</p>
					<input type="text" placeholder="Nombre" required="" class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
					<input type="number" placeholder="Teléfono(s)" required="" class="col-xs-12 col-sm-12 col-md-6 col-lg-5">
				</div>
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<input type="email" placeholder="Email" required="" class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
					<input type="text" placeholder="Ciudad" required="" class="col-xs-12 col-sm-12 col-md-6 col-lg-5">
				</div>
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<input type="text" placeholder="Asunto" class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				</div>
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<input type="text" placeholder="Comentarios"  class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				</div>
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<textarea class="col-xs-12 col-sm-12 col-md-12 col-lg-12" placeholder="Mensaje"></textarea>
				</div>
				<div class="div-fa-buttoncontact">
					<button class="col-xs-6 col-sm-12 col-md-6 col-lg-4" type="Submit">Enviar</button>
					<router-link to="/formwork" class="btn-working-contact col-xs-12 col-sm-12 col-md-6 col-lg-6">Trabaja con nosotros!</router-link>
				</div>
			</form>
		</div>
		<div class="div-row2contanct">
			<div class="div-trasparent-contact">
				
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'contact',
	data () {
		return {
			texto: 'contactos hpta'
		}
	}
}
</script>