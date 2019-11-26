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

	$('.sly').slick({
		infinite: true,
		loop: true,
		centeredMode: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: $('.prev1'),
		nextArrow: $('.next1'),
		responsive: [
			
			{
			  breakpoint: 800,
			  settings: {
				slidesToShow: 2
			  }
			},
			{
				breakpoint: 480,
				settings: {
				  slidesToShow: 1
				}
			  }

		  ]
	});

	 var video = $('.player')[0]
    // 	meta = $('.video-time');
	// 	
	video.addEventListener("loadedmetadata", function() {
		console.log(video.duration / 60)
	})

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

	$('.play').on('click', function(){
		$('.presentation').addClass('play-height');
		$('.player').get(0).play();
	});



	function start_count(){
		$('.counter-number').each(function () {
			$(this).prop('Counter',0).animate({
				Counter: $(this).text()
			}, {
				duration: 4000,
				easing: 'swing',
				step: function (now) {
					$(this).text(Math.ceil(now));
				}
			});
		});
	}


	var eventFired = false,
    objectPositionTop = $('#counters').offset().top;

	$(window).on('scroll', function() {

	var currentPosition = $(document).scrollTop();
	if (currentPosition > objectPositionTop && eventFired === false) {
	eventFired = true;
	start_count()
	}

	});
});
