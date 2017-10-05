<template>
	<div>
		<div class="div-rowaboutus1 col-xs-12 col-sm-12 col-md-7 col-lg-7">
			<h1 class="animated bounceInUp">Nosotros</h1>
			<p class="animated bounceInUp col-xs-12 col-sm-12 col-md-11 col-lg-11">Somos una firma especializada en gerencia de proyectos inmobiliarios. En nuestros 20 años de experiencia hemos incursionado en diferentes sectores, principalmente el sector financiero e institucional.</p>
			<p class="animated bounceInUp col-xs-12 col-sm-12 col-md-11 col-lg-11">Contamos con sedes en Medellín, Bogotá, Barranquilla y Cali, lo cual nos permite dar cobertura a nivel nacional. Nuestro equipo de trabajo se encuentra fortalecido por el respaldo y la experticia de profesionales en Arquitectura e Ingeniería.</p>
			<p class="animated bounceInUp col-xs-12 col-sm-12 col-md-11 col-lg-11">Nuestros valores están dados por la confianza, transparencia, compromiso, responsabilidad, cercanía en todas nuestras actuaciones.</p>
			<div class="div-fatherwokaboutus col-xs-12 col-sm-12 animated bounceInUp">
				<h3>¿Quieres trabajar con nosotros?</h3><router-link to="/formwork" class="a-item col-xs-12 col-sm-12 animated bounce">Unete¡</router-link>
			</div>
		</div>
		<div class="div-rowaboutus2 col-xs-12 col-sm-12 col-md-5 col-lg-5">
			
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'Aboutus',
	data () {
		return {

		}
	}
}
</script>