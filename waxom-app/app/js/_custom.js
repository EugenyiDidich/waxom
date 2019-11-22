document.addEventListener("DOMContentLoaded", function() {
	
	function menu() {

		var checkbox = document.getElementById("input-id");
		var mnuList = document.getElementById("primary-menu");
		var navItem = document.getElementsByClassName("menu-item");
		var sandwich = document.getElementById("sandwich");


		function menuStart() {
			mnuList.classList.add("active");
			sandwich.classList.add("active");
		};

		function menuExit() {
			mnuList.classList.remove("active");
			sandwich.classList.remove("active");
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

	$('.scroll-down').click(function(){
		$('html, body').animate({
			scrollTop: $('.culture').offset().top
		}, 1000);
   });

   var words = $('.about p').text().split(".");
  
   $('.about p').empty();
   $.each(words, function(i, v) {
		$('.about p').append($("<span>").text(v + this.trim("") + "."));
   });




   if (  $('.gallery-wrap').length > 0 ){

	

	var $grid = $('.gallery-wrap').masonry({
		isFitWidth: true,
		columnWidth: 380,
		gutter : 15,
		itemSelector: '.gallery-item'
	});

	 $('.btn-more').on('click', function() {
				var el = $(`<a class="gallery-item" data-fancybox="roadtrip" href="img/gallery/1.png">
								<img src="img/gallery/1.png" alt="">
							</a>
							<a class="gallery-item" data-fancybox="roadtrip" href="img/gallery/2.png">
								<img src="img/gallery/2.png" alt="">
							</a>
							<a class="gallery-item" data-fancybox="roadtrip" href="img/gallery/3.png">
								<img src="img/gallery/3.png" alt="">
							</a>
							<a class="gallery-item" data-fancybox="roadtrip" href="img/gallery/4.png">
								<img src="img/gallery/4.png" alt="">
							</a>
							<a class="gallery-item" data-fancybox="roadtrip" href="img/gallery/5.png">
								<img src="img/gallery/5.png" alt="">
							</a>
							<a class="gallery-item" data-fancybox="roadtrip" href="img/gallery/6.png">
								<img src="img/gallery/6.png" alt="">
							</a>
							<a class="gallery-item" data-fancybox="roadtrip" href="img/gallery/1.png">
								<img src="img/gallery/1.png" alt="">
							</a>
							<a class="gallery-item" data-fancybox="roadtrip" href="img/gallery/2.png">
								
								<img src="img/gallery/2.png" alt="">
							</a>
							<a class="gallery-item" data-fancybox="roadtrip" href="img/gallery/1.png">
								<img src="img/gallery/1.png" alt="">
							</a>
							<a class="gallery-item" data-fancybox="roadtrip" href="img/gallery/2.png">
								<img src="img/gallery/2.png" alt="">
							</a>
							<a class="gallery-item" data-fancybox="roadtrip" href="img/gallery/3.png">
								<img src="img/gallery/3.png" alt="">
							</a>
							<a class="gallery-item" data-fancybox="roadtrip" href="img/gallery/4.png">
								<img src="img/gallery/4.png" alt="">
							</a>
							<a class="gallery-item" data-fancybox="roadtrip" href="img/gallery/5.png">
								<img src="img/gallery/5.png" alt="">
							</a>
							<a class="gallery-item" data-fancybox="roadtrip" href="img/gallery/6.png">
								<img src="img/gallery/6.png" alt="">
							</a>
							<a class="gallery-item" data-fancybox="roadtrip" href="img/gallery/1.png">
								<img src="img/gallery/1.png" alt="">
							</a>
							<a class="gallery-item" data-fancybox="roadtrip" href="img/gallery/2.png">
								
								<img src="img/gallery/2.png" alt="">
							</a>
							<a class="gallery-item" data-fancybox="roadtrip" href="img/gallery/6.png">
								<img src="img/gallery/6.png" alt="">
							</a>
							<a class="gallery-item" data-fancybox="roadtrip" href="img/gallery/1.png">
								<img src="img/gallery/1.png" alt="">
							</a>
							<a class="gallery-item" data-fancybox="roadtrip" href="img/gallery/2.png">
								
								<img src="img/gallery/2.png" alt="">
							</a>`) 
					$grid.masonry().append( el ).masonry( 'appended',el );  

	 }),

	$grid.imagesLoaded().progress( function() {
		$grid.masonry('layout');
	  });

	// var $container = $('.gallery-wrap');
	// 	$container.masonry({
	// 	  isFitWidth: true,
	// 	  columnWidth: 380,
	// 	  gutter : 15,
	// 	  itemSelector: '.gallery-item'
	// 	});

		//  $('.btn-more').on('click', function() {
		// 		var el = $('<div class="gallery-item" style="height:300px;"></div><div class="gallery-item" style="height:300px;"></div>') 
		// 			$container.masonry().append( el ).masonry( 'appended',el );  

		// 	}
	}


   jQuery(document).ready(function($) {
    $(".gallery-item").fancybox({
        fitToView: false,
        maxWidth: "90%" // or whatever you need
    });
})

$('.sl-slider').slick({
	dots: true,
	autoplay: true,
	 autoplaySpeed: 5000,
	 cssEase: 'linear'
});

});

	