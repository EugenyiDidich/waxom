document.addEventListener("DOMContentLoaded", function() {
	
	function menu() {

		var checkbox = document.getElementById("input-id");
		var mnuList = document.getElementById("primary-menu");
		var navItem = document.getElementsByClassName("menu-item");
		var sandwich = document.getElementById("sandwich");
		var mnuBtn = document.getElementById("mnu-btn");


		function menuStart() {
			mnuList.classList.add("active");
			sandwich.classList.add("active");
			mnuBtn.classList.add("fixed");
			$('.search-input').removeClass('active');
			$(".search-btn").removeClass('active');
		};

		function menuExit() {
			mnuList.classList.remove("active");
			sandwich.classList.remove("active");
			mnuBtn.classList.remove("fixed");
		};

		for (var i = 0 ; i < navItem.length; i++) {
		   navItem[i].addEventListener('click', function() {
		   		menuExit();
		        checkbox.checked = false;
		   });  
		};

		 
		checkbox.addEventListener( 'change', function() {

		    if(this.checked) {
		    	menuStart();

		    } else {
		       menuExit();  
		    }
		});
	};
	menu();
	$(".search-btn").click(function(e) {
		e.preventDefault();
		$('.search-input').toggleClass('active');
		$(".search-btn").toggleClass('active')
	});

	$('.top-carousel').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		fade: true,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
	  });

	  //projects cards img

	  $( ".loupe" ).mouseover(function() {
		$(this).parent().siblings('.mix-img img').css({'transform': 'scale(1.2)'});
		$('.mix').toggleClass('light');
	  });
	  $( ".loupe" ).mouseleave(function() {
		$('.mix').toggleClass('light');
		$('.mix-img img').css({'transform': 'scale(1)'});
	});

	
	//mixitup 
	var mixer = mixitup('.mix-wrapper');
});

	