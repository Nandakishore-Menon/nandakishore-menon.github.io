/*
navbar
*/
const slide=()=>{
	const burger=document.querySelector('.burger');
	const nav=document.querySelector('.navlinks');
	const navlinks=document.querySelectorAll('.navlinks li');


	burger.addEventListener('click',()=>{
		nav.classList.toggle('nav-active');
		navlinks.forEach((link,index)=>{
			if(link.style.animation){
				link.style.animation='';
			}
			else{
			
				link.style.animation=`navlinksFade 0.5s ease forwards ${index/7+0.5}s`;
			
			}

		});


	});

};

slide();
