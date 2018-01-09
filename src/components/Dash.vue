<template>
  	<div>
		<div class="div-module-dash">
			<form action="" id="" method="" class="">
				<h2><i class="fa fa-cloud fa-4x" aria-hidden="true"></i></h2>
				<h1>Dashboard soportica</h1>
				<div class="div-father-in-dash">
					<label for="">Input1</label>
					<input type="text">
				</div>
				<div class="div-father-in-dash">
					<label for="">Input2</label>
					<input type="text">
				</div>
				<button><i class="fa fa-check" aria-hidden="true"></i>Ingresar</button>	
			</form>
		</div>
	</div>
</template>
<script>
export default {
  	name: 'Dash',
	data () {
		return {
			workforus: 'Trabaje con nosotros',
			textDes:'Si está interesado en enviar su hoja de vida para trabajar en nuestra empresa por favor diligencie los campos del formulario y adjunte su hoja de vida  en formato Word o PDF.',
			button :'Enviar'
		}
	}
}
</script>

