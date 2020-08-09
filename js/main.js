/*
navbar
*/
var func=()=>{
		const nav=document.querySelector('.navlinks');
		const navlinks=document.querySelectorAll('.navlinks li');
		nav.classList.toggle('nav-active');
		navlinks.forEach((link,index)=>{
			if(link.style.animation){
				link.style.animation='';

			}
			else{
			
				link.style.animation=`navlinksFade 0.5s ease forwards ${index/7+0.5}s`;

			}

		});
	};
const slide=()=>{
	const burger=document.querySelector('.burger');
	const nav=document.querySelector('.navlinks');
	const navlinks=document.querySelectorAll('.navlinks li');


	burger.addEventListener('click',func);

	navlinks.forEach((link,index)=>{
			link.addEventListener('click',()=>{
				// $('.navlinks').toggleClass('nav-active');
				func();
			});
		});


	

};

slide();

$('.carousel').on('slid.bs.carousel', function () {
    $('.projinfo').html($('.active > .carousel-caption').html());
});



$(document).ready(function(){

  $(".navitems").on('click', function(event) {
    if (this.hash !== "") {

      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function(){
        window.location.hash = hash;
      });
    } 
  });
});





