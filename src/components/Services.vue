<template>
	<div class="col-lg-12">
		<!-- seguidor -->
		<div class="seguidor2">
			<!-- <div class="lines1"></div> -->
			<a href="#fc"><div class="bolita1"></div></a>
			<a href="#go"><div class="bolita2"></div></a>
			<a href="#in"><div class="bolita2"></div></a>
			<a href="#sp"><div class="bolita2"></div></a>
			<a href="#ds"><div class="bolita2"></div></a>
			<!-- <div class="lines2"></div> -->
		</div> 
		<div class="container-fluid div-content-services col-xs-12 col-sm-12">
			<h1 class="h1-title-services animated bounceInLeft" id="fc">{{texto}}</h1>
			<div class="div-fatherservices col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<div class="div-servicesfc col-xs-12 col-sm-12 col-md-5 col-lg-5 animated bounceInRight">
				</div>
				<div class="div-servicesfc1 col-xs-12 col-sm-12 col-md-5 col-lg-5 animated bounceInRight">
					<h1>Facility manager</h1>
					<h3>Gerencia estratégica e integral de proyectos inmobiliarios</h3>
					<h3>Servicios de mantenimiento locativo</h3>
					<h3>Construcción Sostenible</h3>
					<h3>Gestión de Espacios (Censo, administración, optimización y traslados de puestos de trabajo)</h3>
				</div>
			</div>
		</div>
		<div class="div-fatherservices col-xs-12 col-sm-12 col-md-12 col-lg-12 animated bounceInRight" id="go">
			<div class="div-servicesg1 col-xs-12 col-sm-12 col-md-5 col-lg-5 animated bounceInRight">
				<h1>Gerencia operativa</h1>
				<h3>Casos de negocios</h3>
				<h3>Gestión del tiempo</h3>
				<h3>Construcción Sostenible</h3>
				<h3>Gestión de costos</h3>
				<h3>Gestión de calidad</h3>
			</div>
			<div class="div-servicesgp col-xs-12 col-sm-12 col-md-5 col-lg-5">
			</div>
		</div>
		<div class="div-fatherservices col-xs-12 col-sm-12 col-md-12 col-lg-12" id="in">
			<div class="div-servicesin1 col-xs-12 col-sm-12 col-md-5 col-lg-5 animated bounceInRight">
			</div>
			<div class="div-servicesin col-xs-12 col-sm-12 col-md-5 col-lg-5 animated bounceInRight">
				<h1>Interventoría</h1>
				<h3>Recopilación de la información y estudio de la obra</h3>
				<h3>Revisión y aprobación de procedimientos y diseños del contratista</h3>
				<h3>Inspección, supervisión de la obra, expedientes o registros de inspección, aceptación y recibo de obra</h3>
				<h3>Medición de cantidades de obra ejecutada</h3>
			</div>
		</div>
		<div class="div-fatherservices col-xs-12 col-sm-12 col-md-12 col-lg-12 animated bounceInRight" id="sp">
			<div class="div-servicessp col-xs-12 col-sm-12 col-md-5 col-lg-5 animated bounceInRight">
				<h1>Supervisión técnica</h1>
				<h3>Replanteo y control topográfico</h3>
				<h3>Servicios de mantenimiento locativo</h3>
				<h3>Construcción Sostenible</h3>
				<h3>Gestión de Espacios (Censo, administración, optimización y traslados de puestos de trabajo)</h3>
			</div>
			<div class="div-servicessp1 col-xs-12 col-sm-12 col-md-5 col-lg-5">
			</div>
		</div>
		<div class="div-fatherservices col-xs-12 col-sm-12 col-md-12 col-lg-12" id="ds">
			<div class="div-servicesds1 col-xs-12 col-sm-12 col-md-5 col-lg-5 animated bounceInRight">
			</div>
			<div class="div-servicesds col-xs-12 col-sm-12 col-md-5 col-lg-5 animated bounceInRight">
				<h1>Diseño Sostenible</h1>
				<h3>Gerencia estratégica e integral de proyectos inmobiliarios</h3>
				<h3>Servicios de mantenimiento locativo</h3>
				<h3>Construcción Sostenible</h3>
				<h3>Gestión de Espacios (Censo, administración, optimización y traslados de puestos de trabajo)</h3>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'services',
	data () {
		return {
			texto: 'SERVICIOS'
		}
	}
}
</script>