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
			<div>
				<div class="col-xs-12 col-sm-12 col-md-5 col-lg-6 div-city1">
					<h1><i class="fa fa-map-marker" aria-hidden="true"></i>Medellín</h1>
					<p><i class="fa fa-address-book fa-2x" aria-hidden="true"></i>Carrera 49 No. 61 sur 68.Centro Ejecutivo Sabana, oficina 201.PBX: (574) 514 9150 Fax: (574) 514 9150 ext. 150</p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-5 col-lg-6 div-city1">
					<h1><i class="fa fa-map-marker" aria-hidden="true"></i>Bogotá</h1>
					<p><i class="fa fa-address-book fa-2x" aria-hidden="true"></i>	Calle 29 No. 6-94.Edificio calle 29, oficinas 301 y 302.Teléfonos: (571) 232 4510, (571) 232 5314.Fax: (571) 245 5391</p>
				</div>
			</div>
			<div>
				<div class="col-xs-12 col-sm-12 col-md-5 col-lg-6 div-city1">
					<h1><i class="fa fa-map-marker" aria-hidden="true"></i>Barranquilla</h1>
					<p><i class="fa fa-address-book fa-2x" aria-hidden="true"></i>Calle 63 No. 45 - 64, Boston.
					Teléfono: (575) 300 7332</p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-5 col-lg-6 div-city1">
					<h1><i class="fa fa-map-marker" aria-hidden="true"></i>Cali</h1>
					<p><i class="fa fa-address-book fa-2x" aria-hidden="true"></i>Avenida 8 Norte número 10 – 98.
					Teléfono: (572) 342 9469</p>
				</div>
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