// seguidor
// 
 
 $(function(){
 	$('a').click(function(){
		var href =$(this).attr("href");
 		$('a').children('div').removeClass().addClass('bolita2');
 		$(this).children('div').removeClass('bolita2').addClass('bolita1');
		$('body,html').animate({
			scrollTop: $(href).offset().top
 		},800)
 	});
});
// menuhamburgesa
// 
// 
 $(document).ready(main);

 var contador = 1;

 function main(){
 	$('.menu').click(function(){
		if(contador == 1){
			$('.div-menu-active').animate({
 				left: '0'
 			});
			contador = 0;
		} else {
 			contador = 1;
 			$('.div-menu-active').animate({
 				left: '-100%'
 			});
		}
	});
 };
 carousel
 $('.carousel').carousel({
 	interval: 3000
 })
// efectoscrolmenufijo

 function Scroll(){
 	var op = document.getElementById('menu');
 	var ypos = window.pageYOFFset;
 	if (ypos > 587) {
 		top.style.height ="60px";
 	}
 	else{
 		top.style.height  ="0px";
	}
 }

 window.addEventListener("scroll",Scroll);


Start of Tawk.to Script
 var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
 	var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
	s1.async=true;
 	s1.src='https://embed.tawk.to/59caa2fa4854b82732ff23a3/default';
 	s1.charset='UTF-8';
 	s1.setAttribute('crossorigin','*');
 	s0.parentNode.insertBefore(s1,s0);
})();
 // <--End of Tawk.to Script-->