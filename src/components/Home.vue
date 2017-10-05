<template>
	<div>
		<!-- menuresponsive -->
		<div class="div-menufixed-mobile">
			<router-link to="/home" ><i class="fa fa-home fa-2x" aria-hidden="true"></i></router-link>
			<router-link to="/aboutus"><i class="fa fa-users fa-2x" aria-hidden="true"></i></router-link>
			<router-link to="/services"><i class="fa fa-caret-down fa-2x"></i></router-link>
			<router-link to="/projects"><i class="fa fa-caret-down fa-2x"></i></router-link>
			<router-link to="/customers" ><i class="fa fa-handshake-o fa-2x" aria-hidden="true"></i></router-link>
		</div>
		<!-- seguidor -->
		<div class="seguidor">
			<div class="lines1"></div>
			<a href="#body"><div class="bolita1"></div></a>
			<a href="#div-contenedor2-ld-soportica"><div class="bolita2"></div></a>
			<a href="#div-contenedor3-ld-soportica"><div class="bolita2"></div></a>
			<a href="#div-content-4"><div class="bolita2"></div></a>
			<a href="#gallery"><div class="bolita2"></div></a>
			<a href="#fin"><div class="bolita2"></div></a>
			<div class="lines2"></div>
		</div> 
		<!-- content -->
		<div class="container-fluid body" id="body">
			<img src="http://www.soportica.com.co/images/logo_2016.png" class=" img-logo-soportica animated bounceInDown">
			<h1 class="animated bounceInLeft">Aquí va una gran frase</h1>	
			<p class="p-text-sentence animated bounceInLeft">ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
			<router-link to="/aboutus"  class="a-knowmore animated bounceInUp">Conocer más.</router-link>
			<a href="#div-contenedor2-ld-soportica" class="animated bounceInUp"><i class="fa fa-caret-down" aria-hidden="true"></i></a>
		</div>
		<!-- fincontent -->
		<!-- secondcontent -->
		<div>
			<div class="container-fluid div-container2-ld-soportica" id="div-contenedor2-ld-soportica">
				<div class="div-title-services">
					<h1  class="h1-services">Nuestros Servicios</h1><h1 class="h1-insoportica">en sopórtica.</h1>
				</div>
				<div class="div-container-inner">
					<div class="div-colum1 col-xs-12 col-sm-12 col-md-4 col-lg-4">
						<div class="div-target-services">
							<h2 class="h2-title">Facility management</h2>
							<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 div-line"></div>
							<p class="col-xs-12 col-sm-12 col-md-12 col-lg-12">Gerencia estratégica e integral / Servicios de mantenimiento locativo / Servicios de seguridad física / Sostenibilidad ambiental / Gestión de espacios y amoblamiento.</p>
							<div class="div-a-seemore col-xs-12 col-sm-12 col-md-12 col-lg-6">
								<router-link to="/facility" class="a-seemore col-lg-12">Ver más</router-link>
							</div>
						</div>
						<div class="div-target-services">
							<h2>Gerencia de proyectos</h2>	
							<p>Gerencia estratégica,Gestión inmobiliaria (locales y licencias) / Diseño / Gestión de suministros, proveedores y contratación / Construcción e interventoría / MantenimientoGerencia operativaInterventoría / Gestión de tiempos, costos y recursos</p>
							<div class="div-a-seemore">
								<router-link to="/management" class="a-seemore">Ver más</router-link>
							</div>
						</div>
						<div class="div-target-services">
							<h2>Gestión inverventoria</h2>
							<p>Diseño arquitectónico / Diseño técnico: eléctrico, mecánico, estructural, hidrosanitario / Diseño interior / Diseño de seguridad y alarmas / Red contra incendios / Seguridad humana / Comunicaciones audio y video / Diseño de iluminación / Eficiencia energética.</p>
							<div class="div-a-seemore">
								<router-link to="/interventory" class="a-seemore">Ver más</router-link>
							</div>
						</div>
					</div>
					<div class="div-img-adm col-sm-12 col-md-4 col-lg-4">
						<img src="http://www.ceipa.edu.co/ceipa/wp-content/uploads/2016/05/estudiante_book.png">
					</div>
					<div class="div-colum1 col-xs-12 col-sm-12 col-md-4 col-lg-4">
						<div class="div-target-services2">
							<h2 class="h2-titulo">Supervisión técnica</h2>
							<p>Realizamos la verificación del cumplimiento estructural y de elementos complementarios de una edificación bajo el enfoque normativo en el ámbito colombiano Norma Sismo Resistente - NSR-10.</p>
							<div class="div-a-seemore">
								<router-link to="/technical" class="a-seemore">Ver más</router-link>
							</div>
						</div>
						<div class="div-target-services2">
							<h2 class="h2-titulo">Diseño sostenible</h2>
							<p>Diseño arquitectónico / Diseño técnico: eléctrico, mecánico, estructural, hidrosanitario / Diseño interior / Diseño de seguridad y alarmas / Red contra incendios / Seguridad humana / Comunicaciones audio y video / Diseño de iluminación / Eficiencia energética.</p>
							<div class="div-a-seemore">
								<router-link to="/sustainable" class="a-seemore">Ver más</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- finsecondcontent -->
		<!-- empty -->
		<div>
			<div class="div-empty">
			</div>
		</div>
		<!-- finempty -->
		<!-- 3content -->
		<div>
			<div class="div-container3-ld-soportica" id="div-contenedor3-ld-soportica">
				<h1>Aquí va algo</h1>
				<div class="a-content3 col-xs-12 col-sm-12 col-md-12  col-lg-12">
					<a href="#" class="a-c3"><i class="fa fa-caret-square-o-down fa-1x" aria-hidden="true"></i></a>
				</div>
			</div>
		</div>
		<!-- fincontent3 -->
		<!-- empty2 -->
		<div>
			<div class="div-empty">
			</div>
		</div>
		<!-- finempty2 -->
		<!-- content4 -->
		<div>
			<div class="div div-container4-ld-soportica" id="div-content-4">
				<div class="div-row2-ld col-xs-12 col-sm-12 col-md-8  col-lg-8">
					<h1 class="h1-projects-play">Proyectos en ejecución.</h1>
					<div class="div-container-projects">
						<div class="div-project-1 col-xs-12 col-sm-12 col-md-4 col-lg-4">
							<div class="div-head">
								<div class="div-circle-project">
									<img src="src/assets/images/bancolombia.jpg">
								</div>
								<div class="div-info-project">
									<h3>Cajeros automaticos</h3>
									<p><i class="fa fa-university fa-1x" aria-hidden="true"></i>Bancolombia</p>
								</div>
							</div>
							<div class="div-des-project">
								<h1>des</h1>
							</div>
						</div>
						<div class="div-project-1 col-xs-12 col-sm-12 col-md-4 col-lg-4">
							<div class="div-head">
								<div class="div-circle-project">
									<img src="src/assets/images/bancolombia.jpg">
								</div>
								<div class="div-info-project">
									<h3>Cajeros automaticos</h3>
									<p><i class="fa fa-university" aria-hidden="true"></i>Bancolombia</p>
								</div>
							</div>
							<div class="div-des-project">
								<h1>des</h1>
							</div>
						</div>
						<div class="div-project-2 col-xs-12 col-sm-12 col-md-4 col-lg-4">
							<div class="div-head">
								<div class="div-circle-project">
									<img src="src/assets/images/otro.jpg">
								</div>
								<div class="div-info-project">
									<h3>Banco de la republica</h3>
									<p><i class="fa fa-university" aria-hidden="true"></i>Bancolombia</p>
								</div>
							</div>
							<div class="div-des-project">
								<h1>des</h1>
							</div>
						</div>
					</div>
					<div class="div-container-projects">
						<div class="div-project-1 col-xs-12 col-sm-12 col-md-4 col-lg-4">
							<div class="div-head">
								<div class="div-circle-project">
									<img src="src/assets/images/terminado.jpg">
								</div>
								<div class="div-info-project">
									<h3>Torre oriente</h3>
									<p><i class="fa fa-university" aria-hidden="true"></i>Bancolombia</p>
								</div>
							</div>
							<div class="div-des-project">
								<h1>des</h1>
							</div>
						</div>
						<div class="div-project-2-delete col-xs-12 col-sm-12 col-md-4 col-lg-4">
							<div class="div-head">
								<div class="div-circle-project">
									<img src="src/assets/images/terminado3.jpg">
								</div>
								<div class="div-info-project">
									<h3>Banca Digital</h3>
									<p><i class="fa fa-university" aria-hidden="true"></i>Bancolombia</p>
								</div>
							</div>
							<div class="div-des-project">
								<h1>des</h1>
							</div>
						</div>
					</div>
			<!-- <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<a href="#">Ver todo</a>
			</div> -->
		</div>
		<div class="div-row1-ld col-xs-12 col-sm-12 col-md-4 col-lg-4">
			<h1>Nuestros proyectos</h1>
		</div>
	</div>
</div>
<!-- fincontent4 -->
<!-- content5 -->
<div class="container-fluid div-header-galeria col-lg-12" id="gallery">
	<h1>Galeria</h1>
</div>
<div class="div-bodygallery col-lg-12">
	<div class="div-galery-1">
		<h3>Realizando sueños.</h3>
		<div class="div-text col-lg-4"><h1>EN SOPÓRTICA TRABAJAMOS CON EL CORAZÓN</h1></div>
	</div>
	<div class="div-galery-2">
		<div class="div-text">Hola</div>
	</div>
	<div class="div-galery-3">
		<div>Hola</div>
	</div>
	<div class="div-galery-4">
		<div>Hola</div>
	</div>
</div>
<div class="div-bodygallery col-lg-12">
	<div class="div-galery2-1">
		<div>Hola</div>
	</div>
	<div class="div-galery2-2">
		<div>Hola</div>
	</div>
	<div class="div-galery2-3">
		<div>Hola</div>
	</div>
	<div class="div-galery2-4">
		<div>Hola</div>
	</div>
</div>
<div class="div-bodygallery col-lg-12">
	<div class="div-galery3-1">
		<div>Hola</div>
	</div>
	<div class="div-galery3-2">
		<div>Hola</div>
	</div>
	<div class="div-galery3-3">
		<div>Hola</div>
	</div>
	<div class="div-galery3-4">
		<div>Hola</div>
	</div>
</div>
<!-- fincontent5 -->
<!-- content6 -->
<div class="div-title-experiencie col-xs-12 col-sm-12 col-md-12 col-lg-12" id="fin">
	<h1>Mucha experiencia</h1>
</div>
<div class="div-corporate-images col-xs-12 col-sm-12 col-md-6 col-lg-6">

</div>
<div class="div-corporate-images1 col-xs-12 col-sm-12 col-md-6 col-lg-6">
	<h1>TITULO 1</h1>
	<div class="col-lg-7">
		<p> ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris</p>
	</div>
	<div class="col-lg-12">
		<a href="" class="a-processes  col-lg-4">Conocer más</a>
	</div>
</div>
<div class="div-corporate-images1 col-xs-12 col-sm-12 col-md-6 col-lg-6">
	<h1>TITULO2</h1>
	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-7">
		<p> ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris</p>
	</div>
	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
		<a href="" class="a-processes col-lg-4">Conocer más</a>
	</div>
</div>
<div class="div-corporate-images2 col-xs-12 col-sm-12 col-md-6 col-lg-6">

</div>
<!-- fincontent6 -->
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

<script>
export default {
	name: 'home',
	data () {
		return {

		}
	}
}
</script>