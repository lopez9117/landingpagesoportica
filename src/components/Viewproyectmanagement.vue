<template>
	<div>
		<div class="div-rowfc1 col-xs-12 col-sm-12 col-md-6 col-lg-6">
			<h2>{{texto}}</h2>
			<h2>Gerencia operativa</h2>
			<p>Administramos todos los recursos involucrados en el proyecto inmobiliario, esto es:</p>
			<p>Gestión del alcance</p>
			<p>Casos de negocios</p>
			<p>Gestión del tiempo</p>
			<p>Gestión de costos</p>
			<p>Gestión de calidad</p>
			<p>Gestión Recursos Humanos</p>
			<p>Gestión Comunicaciones</p>
			<p>Compras o adquisiciones</p>
			<h2>Gerencia estratégica e integral</h2>
			<p>Atendemos de manera estratégica e integral cada una de las actividades necesarias para el correcto desarrollo de un proyecto inmobiliario: conceptualización, diseños, gestión inmobiliaria, contratación, coordinación y seguimiento al proceso constructivo, interventoría, entrega, postventa y mantenimiento futuro del inmueble. Esto le permite al cliente concentrarse en las verdaderas necesidades del objeto de su negocio, entregándonos toda la gestión que involucra este tipo de proyectos.</p>
		</div>
		<div class="div-rowfc1 col-xs-12 col-sm-12 col-md-6 col-lg-6">
			<div class="col-xs-12 col-sm-12 col-md-10 col-lg-10">
				<img src="src/assets/images/terminado3.jpg" class="img-responsive">
			</div>
		</div>
		<!-- foooter -->
		<div class="div-footer col-lg-12">
			<div class="div-father-fo">
				<i class="fa fa-phone fa-2x" aria-hidden="true"></i>
				<div class="div-fa-footer">
					<i class="fa fa-map-marker fa-2x" aria-hidden="true"></i><h1>Sábaneta</h1>
				</div>
				<div class="div-h2-fo">
					<i class="fa fa-mobile fa-2x" aria-hidden="true"></i>
					<h2>(4) 514 9150</h2>
				</div>
			</div>
			<div class="div-father-fo">
				<i class="fa fa-phone fa-2x" aria-hidden="true"></i>
				<h1>Bogotá</h1>
				<div class="div-h2-fo">
					<i class="fa fa-mobile fa-2x" aria-hidden="true"></i>
					<h2>(1) 232 4510</h2>
				</div>
			</div>
			<div class="div-father-fo">
				<i class="fa fa-phone fa-2x" aria-hidden="true"></i>
				<h1>Barranquilla</h1>
				<div class="div-h2-fo">
					<i class="fa fa-mobile fa-2x" aria-hidden="true"></i>
					<h2>(5) 300 7332</h2>
				</div>
			</div>
			<div class="div-father-fo">
				<i class="fa fa-phone fa-2x" aria-hidden="true"></i>
				<h1>Cali</h1>
				<div class="div-h2-fo">
					<i class="fa fa-mobile fa-2x" aria-hidden="true"></i>
					<h2>(2) 342 9469</h2>
				</div>
			</div>
			<div>
				<img src="http://ieinterventoria.com/wp-content/uploads/2015/05/logos_icontec.png">
			</div>
			<div class="div-social-networks">
				<a href="#"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
				<a href="#"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
				<a href="#"><i class="fa fa-twitter  fa-2x" aria-hidden="true"></i></a>
				<a href="#"><i class="fa fa-youtube  fa-2x" aria-hidden="true"></i></a>
				<a href="#"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
			</div>
		</div>
		<!-- finfooter -->
	</div>
</template>
<!-- Viewproyectmanagement -->
<script>
export default {
	name: 'Viewproyectmanagement',
	data () {
		return {
			texto:'Gerencia de proyectos'
		}
	}
}
</script>