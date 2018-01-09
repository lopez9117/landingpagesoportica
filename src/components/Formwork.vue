<template>
	<div>
		<div class="div-form-work">
			<div class="div-column-form">
				<form action="" method="" id="" class="form-workus">
					<div class="div-dates-ofuser">
						<label for="" class="label-work">Datos personales</label>
						<input type="text" placeholder="Nombre y apellidos">
						<input type="text" placeholder="Email">
					</div>
					<label for="" class="label-easy">Información básica</label>
					<div class="div-info-easy">
						<input type="text" placeholder="Documento">
						<input type="text" placeholder="Ciudad">
					</div>
					<div class="div-dates-ofuser">
						<label for="" class="label-work2">Experiencia</label>
						<input type="text" placeholder="Profesión">
						<input type="text" placeholder="Años de experiencia">
					</div>
					<input type="file">
					<button><i class="fa fa-check" aria-hidden="true"></i>{{button}}</button>
				</form>
			</div>
			<div class="div-column2-work">
				<h1>{{workforus}}</h1>
				<p>{{textDes}}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Formwork',
	data () {
		return {
			workforus: 'Trabaje con nosotros',
			textDes:'Si está interesado en enviar su hoja de vida para trabajar en nuestra empresa por favor diligencie los campos del formulario y adjunte su hoja de vida  en formato Word o PDF.',
			button :'Enviar'
		}
	}
}
</script>