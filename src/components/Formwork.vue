<template>
	<div>
		<div class="div-rowformwork1 col-xs-12 col-sm-12 col-md-5 col-lg-5 container-fluid">
			<h1>{{texto}}</h1>
			<p class="col-xs-12 col-sm-12 col-md-10 col-lg-10">Si está interesado en enviar su hoja de vida para trabajar en nuestra empresa, por favor diligencie los campos del formulario y adjunte su hoja de vida en formato Word o PDF. </p>
			<!-- <p class="col-xs-12 col-sm-12 col-md-10 col-lg-10">Del área de gestión humana se estarán comunicando con usted en caso de que exista una vacante que se acomode a su perfil.</p> -->
			<router-link to="/home" class="animated bounce"><img src="http://www.soportica.com.co/images/logo_2016.png"></router-link>
		</div>
		<div class="div-rowformwork2 col-xs-12 col-sm-12 col-md-7 col-lg-7 container-fluid">
			<h1>No tengas miedo,¡UNETE!</h1>
			<form action="" method="" class="formwork col-xs-12 col-sm-12 col-md-12 col-lg-12" id="">
				<input type="text" class="input-formwork col-xs-12 col-sm-12 col-md-7 col-lg-6" placeholder="Nombre y apellidos" required="">
				<input type="email" class="input-formwork col-xs-12 col-sm-12 col-md-7 col-lg-6" placeholder="Email" required="">
				<input type="text" class="input-formwork col-xs-12 col-sm-12 col-md-7 col-lg-6" placeholder="Documento" required="">
				<div class="div-columnformwork">
					<input type="text" class="input-formwork1 col-xs-12 col-sm-12 col-md-3 col-lg-6" placeholder="Profesion" required="">
					<input type="number" min="0" class="input-formwork2 col-xs-12 col-sm-12 col-md-3 col-lg-3" placeholder="Años de experiencia" required="">
				</div>
				<input type="text" class="input-formwork col-xs-12 col-sm-12 col-md-7 col-lg-6" placeholder="Ciudad" required="">
				<label>Adjuntar Hoja de Vida (Word o PDF - Peso máximo permitido: 1 mega):</label>
				<div class="inputFile col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<input type="file" class="file" />
					<div class="fakeFile">
						<img src="http://www.unionpaper.net/wp-content/uploads/2016/06/logo_homepage_20150714083101.png" width="100" class="img-responsive col-xs-6 col-sm-2 col-md-2 col-lg-2" />
					</div>
				</div>
				<div class="div-father-buttonwork col-xs-12 col-sm-12 col-md-7 col-lg-7">
					<button>Enviar</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Formwork',
	data () {
		return {
			texto:'Trabaje con nosotros'
		}
	}
}
</script>