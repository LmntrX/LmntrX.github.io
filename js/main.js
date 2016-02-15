$(document).ready(function(){
			$("#teamvector").addClass('fadeInLeft');
			$("#teamvectordescription").addClass('fadeInRight');
			

			$(window).scroll(function(event){
				var y=$(this).scrollTop();
				if(y>=300){
					$("#android").addClass("slideInUp").css("visibility", "visible");
					setTimeout(function(){ 
						$("#ios").addClass("slideInUp").css("visibility", "visible");
					}, 200);
					setTimeout(function(){ 
						$("#windowsphone").addClass("slideInUp").css("visibility", "visible");
					}, 400);
					
					
				}
			});

		});