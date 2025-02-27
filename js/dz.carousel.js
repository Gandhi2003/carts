/* JavaScript Document */
jQuery(window).on('load', function () {
	'use strict';

	// menu-swiper
	if (jQuery('.menu-swiper').length > 0) {
		var swiper = new Swiper(".menu-swiper", {
			speed: 1000,
			slidesPerView: 1,
			loop: true,
			autoplay: {
				delay: 1500,
				disableOnInteraction: false,
			},
			spaceBetween: 10,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".next1",
				prevEl: ".prev1",
			},
			breakpoints: {
				640: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				1024: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
		});
	}

	// Team Swiper
	if (jQuery('.team-swiper').length > 0) {
		var swiper = new Swiper(".team-swiper", {
			speed: 1000,
			loop: true,
			parallax: true,
			slidesPerView: 4,
			spaceBetween: 30,
			autoplay: {
				delay: 1000,
			},
			navigation: {
				nextEl: '.team-button-next',
				prevEl: '.team-button-prev',
			},
			breakpoints: {
				1280: {
					slidesPerView: 4,
				},
				991: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 2,
				},
				600: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			}

		});
	}

	// testimonial-one-thumb-swiper
	if (jQuery('.testimonial-one-thumb').length > 0) {
		var swiper = new Swiper(".testimonial-one-thumb", {
			speed: 1000,
			slidesPerView: "3",
			loop: true,
			spaceBetween: 0,

			grid: {
				rows: 2,
			},
			autoplay: {
				delay: 1500,
			},
		});
		var swiper2 = new Swiper(".testimonial-one-swiper", {
			slidesPerView: "1",
			autoplay: {
				delay: 1500,
			},
			thumbs: {
				swiper: swiper,
			},
		});
	}

	// testimonial-one-thumb-swiper
	if (jQuery('.testimonial-one-thumb').length > 0) {
		var swiper = new Swiper('.blog-swiper', {
			speed: 1000,
			slidesPerView: 2,
			loop: true,
			spaceBetween: 30,
			centeredSlides: false,
			watchSlidesVisibility: true,
			parallax: true,
			autoplay: {
				delay: 1500,
			},
			navigation: {
				nextEl: '.blog-button-next',
				prevEl: '.blog-button-prev',
			},
			pagination: {
				el: ".swiper-pagination",
			},
			breakpoints: {
				1200: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			}
		});
	}

	// main-banner-1
	if (jQuery('.main-slider-1').length > 0) {
		var swiperThumbs = new Swiper(".main-thumb1", {
			loop: true,
			spaceBetween: 25,
			slidesPerView: "2",
			freeMode: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			// autoplay: {
			//    delay: 3000,
			// },
			navigation: {
				nextEl: '.thumb-button-next',
				prevEl: '.thumb-button-prev',
			},
		});
		var swiper2 = new Swiper(".main-slider-1", {
			loop: true,
			effect: "fade",
			speed: 1500,
			parallax: true,
			// autoplay: {
			//    delay: 2000,
			// },																			
			navigation: {
				nextEl: '.main-button-next',
				prevEl: '.main-button-prev',
			},
			pagination: {
				el: ".main-slider-pagination",
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + "0" + (index + 1) + "</span>";
				},
			},
			thumbs: {
				swiper: swiperThumbs,
			},
		});
	}

	// Banner 3
	if (jQuery('.main-slider-3').length > 0) {
		var swiper = new Swiper(".main-slider-3", {
			speed: 1000,
			parallax: true,
			spaceBetween: 0,
			freeMode: false,
			direction: 'vertical',
			scrollbar: '.swiper-scrollbar',
			autoplay: {
				delay: 2500,
			},
			navigation: {
				nextEl: '.main-button-next',
				prevEl: '.main-button-prev',
			},
			pagination: {
				el: ".main-swiper3-pagination",
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + "0" + (index + 1) + "</span>";
				},
			},
		});
		swiper.on('onSlideNextStart', function () {
			$('.swiper-slide .banner-inner1').attr('data-swiper-parallax-duration', '');
			$('.swiper-slide-prev .banner-inner1').attr('data-swiper-parallax-duration', '4000');
		});
	}

	// browser-menu
	if (jQuery('.menu-swiper2').length > 0) {
		var swiper = new Swiper(".menu-swiper2", {
			speed: 1000,
			slidesPerView: 1,
			spaceBetween: 30,
			parallax: true,
			loop: true,
			autoplay: {
				delay: 2000,
			},
			navigation: {
				nextEl: '.menu-button-next1',
				prevEl: '.menu-button-prev1',
			},
			breakpoints: {
				1280: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
				991: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 40,
				},
				0: {
					slidesPerView: 1,
					spaceBetween: 50,
				},
			}
		});
	}

	// testimonial2
	if (jQuery('.testimonial-two-swiper').length > 0) {
		var swiper = new Swiper('.testimonial-two-swiper', {
			speed: 2000,
			slidesPerView: 1,
			spaceBetween: 30,
			parallax: true,
			loop: true,
			autoplay: {
				delay: 2000,
			},
			navigation: {
				nextEl: '.testimonial-2-button-next',
				prevEl: '.testimonial-2-button-prev',
			},
			breakpoints: {
				1200: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 1,
				},
				320: {
					slidesPerView: 1,
				},
			}
		});
	}

	// img slider
	if (jQuery('.portfolio-swiper').length > 0) {
		var swiper = new Swiper('.portfolio-swiper', {
			slidesPerView: 4,
			spaceBetween: 30,
			speed: 1000,
			parallax: true,
			loop: true,
			autoplay: {
				delay: 1000,
			},
			navigation: {
				nextEl: '.img-button-next',
				prevEl: '.img-button-prev',
			},
			breakpoints: {
				1200: {
					slidesPerView: 4,
				},
				1024: {
					slidesPerView: 4,
				},
				768: {
					slidesPerView: 2,
				},
				600: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			}
		});
	}
	// service-swiper
	if (jQuery('.service-swiper').length > 0) {
		var swiper = new Swiper(".service-swiper", {
			slidesPerView: "1",
			spaceBetween: 10,
			speed: 1000,
			loop: true,
			autoplay: {
				delay: 1000,
			},
			navigation: {
				nextEl: '.service-button-next',
				prevEl: '.service-button-prev',
			},
			paginationClickable: true,
			pagination: {
				el: ".swiper-pagination",
			},
		});
	}
	if (jQuery('.service2-swiper').length > 0) {
		var swiper = new Swiper(".service2-swiper", {
			slidesPerView: "1",
			spaceBetween: 10,
			speed: 1000,
			loop: true,
			autoplay: {
				delay: 1000,
			},
			paginationClickable: true,
			pagination: {
				el: ".swiper-pagination",
			},
		});
	}

});


/* Document .ready END */