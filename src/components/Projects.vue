<template>
	<div class="">
		<div class="div-optionsrow1 col-xs-12 col-sm-12 col-md-6 col-lg-6 container-fluid">
			<h1>Proyectos en ejecución</h1>
			<a href="#" class="col-xs-12 col-sm-12 col-md-12 col-lg-4">Ver todos</a>
		</div>
		<div class="div-optionsrow2 col-xs-12 col-sm-12 col-md-6 col-lg-6">
			<h1>Proyectos terminados</h1>
			<router-link to="/finishedprojects" class="col-xs-12 col-sm-12 col-md-12 col-lg-4">Ver todos</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'projects',
	data () {
		return {
			texto: 'hpta servicios papi servicios'
		}
	}
}
</script>