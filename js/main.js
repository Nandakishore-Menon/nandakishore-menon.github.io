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

	$('.tabs a').click(function(){
  
     $('.panel').hide();
     $('.tabs a.active').removeClass('active');
     $(this).addClass('active');
     
     var panel = $(this).attr('href');
     $(panel).fadeIn(1000);
     
     return false;  // prevents link action
    
  });  // end click 

     $('.tabs li:first a').click();
     
  
	

};

slide();

$('.carousel').on('slid.bs.carousel', function () {
    $('.projinfo').html($('.active > .carousel-caption').html());
});



$(document).ready(function(){

  $("#t_logo,.navitems").on('click', function(event) {
    if (this.hash !== "") {

      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top-150
      }, 700, function(){
        window.location.hash = hash;
      });
    } 
  });
});



/* active menu item on click */
$(document).ready(function() {
    
    'use strict';
    
    
    $('.navlinks li a').click(function(){
        
        'use strict';
        
        //$('.navlinks li a').parent().removeClass("current");
        
        $(this).parent().addClass("current");
    
    });
});

// highlight menu item on scroll
$(document).ready(function() {
    
    'use strict';
    
    $(window).scroll( function() {
        
        'use strict';
        
        $("div").each(function()  {
            
            'use strict';
            
            var bb = $(this).attr("id");  // ABOUT, CONTACT, DOWNLOAD
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 250;
            
            if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {
             
                $(".navlinks li a[href='#" + bb + "']").parent().addClass("current");
           
            } else {
                $(".navlinks li a[href='#" + bb + "']").parent().removeClass("current");
                
            }
            
            
        });
    
    
    });
    
    
});


// $('i.techic').on('mouseover',(event)=>{
//   var icon=$(event.target);
//   //console.log(icon);
//   //console.log(icon.siblings('h4.title').text());
//   icon.siblings('h4').text(icon.attr("id"));
//   icon.siblings('h4').removeClass('title');
//   icon.siblings('h4').addClass("skname");
// });

// $('i.techic').on('mouseout',(event)=>{
//   var heading=$(event.target).siblings('h4');
//   heading.text(heading.attr("id"));
//   heading.removeClass("skname");
//   heading.addClass('title');
// });



