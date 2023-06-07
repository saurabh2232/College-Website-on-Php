	//login//
	function login(){
		$("#loginModal").css('display','none');
		$(".modal-backdrop").css('display','none');
	}

$(function(){
	//Submenu Dropdown Toggle
	if($('.sticky_header ul.navbar-nav > li.has-submenu').length){
		$('.sticky_header ul.navbar-nav > li.has-submenu').append('<div class="arrow-down"></div>');
	
	//Dropdown Button	
	$('.sticky_header ul.navbar-nav > li.has-submenu .arrow-down').click(function(){
		$(this).toggleClass('up');
        $(this).siblings('ul').slideToggle('500');
    });
	};

	 // Hide Header on scroll down
	  var navbarHeight = $('.top_bar').outerHeight(true);
	  var offsetEqual = $('.sticky_header').outerHeight(true);
	  $('.nav_outr').css({'padding-bottom': offsetEqual});
	  
	  function hasScrolled() {
	   var st = $(this).scrollTop();
	   if (st > navbarHeight){
		$('.sticky_header').addClass('fixed');

	   }else{
		$('.sticky_header').removeClass('fixed');
	   };
	  };	  
	  $(window).scroll(function(event){
	   hasScrolled();
	  });
	  

	  //additional
	 if ( $(window).width() < 768) {
		$('header').css({'padding-bottom': navbarHeight});
		$('.nav_outr').css({'padding-bottom': 0});
	 }


	$('.menu-btn').click (function() {
      $('.sticky_header').toggleClass("menu-off menu-on");
	  $('body').toggleClass("hide-scroll");
	  $(this).toggleClass("left");
	   $('.menu-btn > span').toggle('fast');;
    });
	
	
	//home Gallery
	$('.slider-main').slick({
 	  dots: true,
		infinite: true,
		speed: 500,
		fade: false,
		autoplay:true,
		cssEase: 'ease'
	});
	
	$('.home_slider2').slick({
	  dots: true,
	  infinite: true,
	  speed: 400,
	  autoplay:true,
	  slidesToShow: 1,
	  adaptiveHeight: true
	});
	
	$('.testimonial').slick({
	  dots: true,
	  infinite: true,
	  speed: 400,
	  autoplay:true,
	  slidesToShow: 1,
	  adaptiveHeight: true
	});
	
	//logo slider//
	$(".logo_slider").slick({
	dots: true,
	autoplay:true,
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [
		{
		  breakpoint: 1100,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true,
			dots: false
		  }
		},
		{
		  breakpoint: 850,
		  settings: {	
			slidesToShow: 2,
			slidesToScroll: 2
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	  ]
  });
  
//product detail slider///
  $('.slider-for5').slick({
   slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    fade: false,
    autoplay: false,
    autoplaySpeed: 1000,
    speed: 1500,
    lazyLoad: 'ondemand',
    asNavFor: '.slider-nav5'
 });
 $('.slider-nav5').slick({
   slidesToShow: 4,
   slidesToScroll: 1,
   dots: false,
   speed: 400,
   focusOnSelect: true,
   infinite: true,
   adaptiveHeight: true,
   asNavFor: '.slider-for5',
   responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3
      }
    }
	]
 });

  //galleru///
		$('.slider-for').slick({
		dots: false,
		infinite: true,
		speed: 500,
		fade: false,
		autoplay:true,
		cssEase: 'ease',
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: false,
	  focusOnSelect: true,
	  cssEase: 'ease',
	  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4
      }
    },
	 {
      breakpoint: 640,
      settings: {
        slidesToShow: 3
      }
    },
	 {
      breakpoint: 480,
      settings: {
        slidesToShow: 2
      }
    },
	 ]
	});
	
	//home banner//
	 $(document).ready(function() {
     $(".owl-demo").owlCarousel({
     autoPlay: 3000,
     stopOnHover : true,
     navigation:true,
     paginationSpeed : 1000,
     goToFirstSpeed : 2000,
     singleItem : true,
     autoHeight : true,
     transitionStyle:"fade"
   });
 });
	
//offer gallery	//
$('.gallery_slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
	
	
	
	
	
	
  
  //accordion//
  var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
	  acc[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
		  panel.style.maxHeight = null;
		} else {
		  panel.style.maxHeight = panel.scrollHeight + "px";
		} 
	  });
	}
		

		///video///
		
		jQuery(document).ready(function() {

			document.onkeydown = function(e) {
				(e.keyCode == 39) && (jQuery('.pupup-element.active .right-change a ').click());
				(e.keyCode == 37) && (jQuery('.pupup-element.active .left-change a ').click());
				(e.keyCode == 27) && (closePopup());

			};

			jQuery('body').on('click', '.element_2 .image-block_2 .videogallery-image-overlay a', function() {
				var strid = jQuery(this).attr('href').replace('#', '');
				jQuery('body').append('<div id="huge-popup-overlay"></div>');
				jQuery('#huge_it_videogallery_popup_list_2').insertBefore('#huge-popup-overlay');
				var height = jQuery(window).height();
				var width = jQuery(window).width();
				if (width <= 767) {
					jQuery(window).scrollTop(0);
					jQuery('#huge_it_videogallery_popup_list_2 .popup-wrapper_2 .image-block_2 iframe').height(jQuery('body').width() * 0.5);
				} else {
					jQuery('#huge_it_videogallery_popup_list_2 .popup-wrapper_2 .image-block_2 iframe').height(jQuery('body').width() * 0.23);
				}
				jQuery('#huge_it_videogallery_pupup_element_' + strid).addClass('active').css({
					height: height * 0.7
				});
				jQuery('#huge_it_videogallery_popup_list_2').addClass('active');

				if (1.2 * parseInt(jQuery('.pupup-element.active .description').height()) > parseInt(jQuery('.pupup-element.active .right-block').height())) {

					if (jQuery('.pupup-element.active .image-block_2 img').height() > jQuery('.pupup-element.active .image-block_2').height()) {
						jQuery('.pupup-element.active .popup-wrapper_2').css({
							'overflow-y': 'auto',
						});

					} else {
						jQuery('.pupup-element.active .popup-wrapper_2').css({
							'overflow-y': 'auto',
							'width': '98%',
							'padding-right': '0',
						});
						jQuery('.pupup-element.active .right-block').css({
							'overflow-y': 'auto',
							'width': '40.5%',
							'padding-right': '2%',
						});
					}

				} else if (jQuery('.pupup-element.active .description').height() < jQuery('.pupup-element.active .right-block').height() && jQuery('.pupup-element.active img').height() > jQuery('.pupup-element.active .image-block_2').height()) {
					jQuery('.pupup-element.active .popup-wrapper_2').css({
						'overflow-y': 'auto',
						'width': '98%',
					});
				}
				return false;
			});
			/* POPUP LEFT CLICK  */
			jQuery("#huge_it_videogallery_popup_list_2 .heading-navigation .left-change").click(function() {


				var pl = window[jQuery(this).parents('.pupup-element.active').find('iframe').attr('id')];
				pl && pl.pauseVideo();
				var height = jQuery(window).height();
				var num = jQuery(this).find("a").attr("href").replace('#', '');
				if (num >= 1) {
					var strid = jQuery(this).closest(".pupup-element").prev(".pupup-element").find('a').data('popupid').replace('#', '');
					jQuery('#huge_it_videogallery_pupup_element_' + strid).css({
						height: height * 0.7
					});
					jQuery(this).closest(".pupup-element").removeClass("active");
					jQuery(this).closest(".pupup-element").prev(".pupup-element").addClass("active");
				} else {
					var strid = jQuery("#huge_it_videogallery_popup_list_2").find(".pupup-element").last().find('a').data('popupid').replace('#', '');
					jQuery('#huge_it_videogallery_pupup_element_' + strid).css({
						height: height * 0.7
					});
					jQuery(this).closest(".pupup-element").removeClass("active");
					jQuery("#huge_it_videogallery_popup_list_2").find(".pupup-element").last().addClass("active");
				}
				if (1.2 * parseInt(jQuery('.pupup-element.active .description').height()) > parseInt(jQuery('.pupup-element.active .right-block').height())) {
					if (jQuery('.pupup-element.active .image-block_2 img').height() > jQuery('.pupup-element.active .image-block_2').height()) {
						jQuery('.pupup-element.active .popup-wrapper_2').css({
							'overflow-y': 'auto',
						});

					} else {
						jQuery('.pupup-element.active .popup-wrapper_2').css({
							'overflow-y': 'auto',
							'width': '98%',
							'padding-right': '0',
						});
						jQuery('.pupup-element.active .right-block').css({
							'overflow-y': 'auto',
							'width': '40.5%',
							'padding-right': '2%',
						});
					}

				} else if (jQuery('.pupup-element.active .description').height() < jQuery('.pupup-element.active .right-block').height() && jQuery('.pupup-element.active img').height() > jQuery('.pupup-element.active .image-block_2').height()) {
					jQuery('.pupup-element.active .popup-wrapper_2').css({
						'overflow-y': 'auto',
						'width': '98%',
					});
				}
				return false;
			});

			/* POPUP RIGHT CLICK */
			jQuery("#huge_it_videogallery_popup_list_2 .heading-navigation .right-change ").click(function() {

				var pl = window[jQuery(this).parents('.pupup-element.active').find('iframe').attr('id')];
				pl && pl.pauseVideo();

				var height = jQuery(window).height();
				var num = jQuery(this).find("a").attr("href").replace('#', '');
				var cnt = 1;
				jQuery("#huge_it_videogallery_popup_list_2").find(".pupup-element").each(function() {
					cnt++;
				});
				if (num <= cnt) {
					var strid = jQuery(this).closest(".pupup-element").next(".pupup-element").find('a').data('popupid').replace('#', '');
					jQuery('#huge_it_videogallery_pupup_element_' + strid).css({
						height: height * 0.7
					});
					jQuery(this).closest(".pupup-element").removeClass("active");
					jQuery(this).closest(".pupup-element").next(".pupup-element").addClass("active");
				} else {
					var strid = jQuery("#huge_it_videogallery_popup_list_2").find(".pupup-element:first-child a").data('popupid').replace('#', '');
					jQuery('#huge_it_videogallery_pupup_element_' + strid).css({
						height: height * 0.7
					});
					jQuery(this).closest(".pupup-element").removeClass("active");
					jQuery("#huge_it_videogallery_popup_list_2").find(".pupup-element:first-child").addClass("active");
				}
				if (1.2 * parseInt(jQuery('.pupup-element.active .description').height()) > parseInt(jQuery('.pupup-element.active .right-block').height())) {
					if (jQuery('.pupup-element.active .image-block_2 img').height() > jQuery('.pupup-element.active .image-block_2').height()) {
						jQuery('.pupup-element.active .popup-wrapper_2').css({
							'overflow-y': 'auto',
						});

					} else {
						jQuery('.pupup-element.active .popup-wrapper_2').css({
							'overflow-y': 'auto',
							'width': '98%',
							'padding-right': '0',
						});
						jQuery('.pupup-element.active .right-block').css({
							'overflow-y': 'auto',
							'width': '40.5%',
							'padding-right': '2%',
						});
					}

				} else if (jQuery('.pupup-element.active .description').height() < jQuery('.pupup-element.active .right-block').height() && jQuery('.pupup-element.active img').height() > jQuery('.pupup-element.active .image-block_2').height()) {
					jQuery('.pupup-element.active .popup-wrapper_2').css({
						'overflow-y': 'auto',
						'width': '98%',
					});
				}

				return false;
			});
			//////

			jQuery('#huge_it_videogallery_popup_list_2 .heading-navigation .close').on('click', function() {
				closePopup();
				return false;
			});

			jQuery('body').on('click', '#huge-popup-overlay', function() {
				closePopup();
				return false;
			});

			function closePopup() {
				var scrollingTo = jQuery('#huge_it_videogallery_popup_list_2 .pupup-element.active').attr('id');
				//jQuery(window).scrollTop(jQuery("#" + scrollingTo + "_child").offset().top - 100);
				jQuery('#huge-popup-overlay').remove();
				var videsrc = jQuery('#huge_it_videogallery_popup_list_2 li.active iframe').attr('src');
				jQuery('#huge_it_videogallery_popup_list_2 li.active iframe').attr('src', '');
				jQuery('#huge_it_videogallery_popup_list_2 li.active iframe').attr('src', videsrc);

				/* Removing autoplay attribute from iframe src */
				var container = jQuery(".pupup-element.active");
				iframe_src_have_autoplay_container = videsrc;
				//var container_iframe_src_replace = iframe_src_have_autoplay_container.split("?");
				//container.find("iframe").attr("src", container_iframe_src_replace[0]);
				jQuery('#huge_it_videogallery_popup_list_2 li').removeClass('active');
				jQuery('#huge_it_videogallery_popup_list_2').removeClass('active');
			}



			jQuery(window).resize(function() {
				var imgBlockWidth = jQuery(window).width();
				if (imgBlockWidth >= 768) {
					jQuery('#huge_it_videogallery_popup_list_2 .popup-wrapper_2 .image-block_2 iframe').height(jQuery(window).width() * 0.20);
				} else {
					jQuery('#huge_it_videogallery_popup_list_2 .popup-wrapper_2 .image-block_2 iframe').height(jQuery(window).width() * 0.5);
				}
			});
		});
		
///////////////////////////////////////////////////////////
});

//on load popup//
$('#modal-content').on('shown.bs.modal', function () {
    $("#txtname").focus();
});

$('#modal-content').modal({
    show: true
});

$('#openBtn').click(function () {
    $('#modal-content').modal({
        show: true
    });
});



// Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});


