$(document).ready(function ($) {
	"use strict";
	lib_backtotop();
	lib_owl();
	lib_category();
	lib_tab();
	lib_menumobile();
	lib___noProCol();
	// lib_menuItemList();

	if(navigator.userAgent.indexOf("Speed Insights") == -1) {
		lib_lazyloadImage();
	}

	$('.product_detail_countdown .product_detail_dealtime').each(function(e){
		lib_countDown($(this));
	});

	lib_click_swatch();
});

$(document).on('click','.overlay, .close-popup, .btn-continue, .fancybox-close', function() {   
	lib_hidePopup('.awe-popup'); 	
	setTimeout(function(){
		$('.loading').removeClass('loaded-content');
	},500);
	return false;
})
var ww = $(window).width();

/********************************************************
product no collection
********************************************************/
function lib___noProCol(){
	$('.no-procol').parent().find('li:last-child').addClass('hidden');
} window.lib___noProCol = lib___noProCol;


/********************************************************
# Countdown
********************************************************/
function lib_countDown(selector){
	// Set the date we're counting down to
	// Kiểu thời gian đặt tag endtime_4/15/2018 15:10:00
	var dataTime = selector.attr('data-time');
	var countDownDate = new Date(dataTime).getTime();
	// Update the count down every 1 second
	var x = setInterval(function() {
		// Get todays date and time
		var now = new Date().getTime();
		// Find the distance between now an the count down date
		var distance = countDownDate - now;
		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		// Display the result in the element
		selector.html("<div><strong>"+days+"</strong><span>Ngày</span></div>" +"<div><strong>"+hours+"</strong><span>Giờ</span></div>" + "<div><strong>"+minutes+"</strong><span>Phút</span></div>" + "<div><strong>"+seconds+"</strong><span>Giây</span></div>");
		// If the count down is finished, write some text
		if (distance < 0) {
			clearInterval(x);
			selector.parent().html("");
		}
	}, 1000);
}


/********************************************************
# Thu gọn menu item
********************************************************/
// function lib_menuItemList(){
// 	if (ww >= 1600){
// 		var menu_limit = 15;
// 	} else if (ww >= 1200 && ww < 1599){
// 		var menu_limit = 11;
// 	} else if (ww >= 992 && ww < 1200){
// 		var menu_limit = 9;
// 	}
// 	var menu_item = $('.category-nav > ul > li').length;

// 	if (menu_item > menu_limit){
// 		menu_limit--;
// 		$('.category-nav > ul').each(function(){
// 			$('.category-nav > ul > li').eq(menu_limit).nextAll().hide().addClass('toggleable');
// 			$(this).append('<li class="more"><a><label>Xem thêm ... </label></a></li>');
// 		});
// 		$('.category-nav > ul').on('click','.more', function(){
// 			if($(this).hasClass('less')){
// 				$(this).html('<a><label>Xem thêm ...</label></a>').removeClass('less');
// 			} else {
// 				$(this).html('<a><label>Thu gọn ... </label></a>').addClass('less');;
// 			}
// 			$(this).siblings('li.toggleable').slideToggle();
// 		});
// 	}
// } window.lib_menuItemList = lib_menuItemList;

/********************************************************
# LazyLoad
********************************************************/
function lib_lazyloadImage() {
	var i = $("[data-lazyload]");
	i.length > 0 && i.each(function() {
		var i = $(this),
		e = i.attr("data-lazyload");
		i.appear(function() {
			i.removeAttr("height").attr("src", e);
		}, {
			accX: 0,
			accY: 120
		}, "easeInCubic");
	});
	var e = $("[data-lazyload2]");
	e.length > 0 && e.each(function() {
		var i = $(this),
		e = i.attr("data-lazyload2");
		i.appear(function() {
			i.css("background-image", "url(" + e + ")");
		}, {
			accX: 0,
			accY: 120
		}, "easeInCubic");
	});
} window.lib_lazyloadImage=lib_lazyloadImage;

/********************************************************
# SHOW NOITICE
********************************************************/
function lib_showNoitice(selector) {
	$(selector).animate({right: '0'}, 500);
	setTimeout(function() {
		$(selector).animate({right: '-300px'}, 500);
	}, 3500);
}  window.lib_showNoitice=lib_showNoitice;

/********************************************************
# SHOW LOADING
********************************************************/
function lib_showLoading(selector) {
	var loading = $('.loader').html();
	$(selector).addClass("loading").append(loading); 
}  window.lib_showLoading=lib_showLoading;

/********************************************************
# HIDE LOADING
********************************************************/
function lib_hideLoading(selector) {
	$(selector).removeClass("loading"); 
	$(selector + ' .loading-icon').remove();
}  window.lib_hideLoading=lib_hideLoading;

/********************************************************
# SHOW POPUP
********************************************************/
function lib_showPopup(selector) {
	$(selector).addClass('active');
}  window.lib_showPopup=lib_showPopup;

/********************************************************
# HIDE POPUP
********************************************************/
function lib_hidePopup(selector) {
	$(selector).removeClass('active');
}  window.lib_hidePopup=lib_hidePopup;

/********************************************************
# CONVERT VIETNAMESE
********************************************************/
function lib_convertVietnamese(str) { 
	str= str.toLowerCase();
	str= str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
	str= str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
	str= str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
	str= str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
	str= str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
	str= str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
	str= str.replace(/đ/g,"d"); 
	str= str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,"-");
	str= str.replace(/-+-/g,"-");
	str= str.replace(/^\-+|\-+$/g,""); 
	return str; 
} window.lib_convertVietnamese=lib_convertVietnamese;


/********************************************************
# SIDEBAR CATEOGRY
********************************************************/
function lib_category(){
	$('.nav-category .fa-angle-down').click(function(e){
		$(this).parent().toggleClass('active');
	});
} window.lib_category=lib_category;

/********************************************************
# MENU MOBILE
********************************************************/
$(document).ready(function(){
	$("#nav-mobile").mmenu({
		extensions: [ "multiline","pagedim-black","border-full" ],
		navbars:[{
			position	: "top",
			type		: 'tabs',
			content		: [ 
			'<a href="#panel-menu"><i class="fa fa-bars"></i> <span>Danh mục</span></a>', 
			'<a href="#panel-account"><i class="fa fa-user"></i> <span>Tài khoản</span></a>'
			]
		}, {
			content		: [ 'prev', 'close' ]
		}]
	});
});

/********************************************************
/*** FOOTER MOBILE
/********************************************************/
$(document).ready(function(e){
	if (ww < 768 ){
		$('.foo-col .footer-title').on('click', function(){
			$(this).parent().find('.list-menu').toggleClass('active'); 	
			$(this).toggleClass('active');
		});
	}
	if (ww < 992){
		$('.category-title').on('click', function(){
			$('.category-nav').toggleClass('open');
		});
	}
});

/********************************************************
# MENU MOBILE
********************************************************/
function lib_menumobile(){
	$('.menu-bar').click(function(e){
		e.preventDefault();
		$('#nav').toggleClass('open');
	});
	$('#nav .fa').click(function(e){		
		e.preventDefault();
		$(this).parent().parent().toggleClass('open');
	});
} window.lib_menumobile=lib_menumobile;

/********************************************************
# ACCORDION
********************************************************/
function lib_accordion(){
	$('.accordion .nav-link').click(function(e){
		e.preventDefault;
		$(this).parent().toggleClass('active');
	})
} window.lib_accordion=lib_accordion;

/********************************************************
# OWL CAROUSEL
********************************************************/
function lib_owl() { 
	setTimeout(function(){
		$('.owl-carousel:not(.lib---owl)').each( function(){
			var xxs_item = $(this).attr('data-xxs-items');
			var xs_item = $(this).attr('data-xs-items');
			var md_item = $(this).attr('data-md-items');
			var lg_item = $(this).attr('data-lg-items');
			var hg_item = $(this).attr('data-hg-items');
			var sm_item = $(this).attr('data-sm-items');	
			var margin	= $(this).attr('data-margin');
			var dot		= $(this).attr('data-dot');
			var loop	= $(this).attr('data-loop');
			var nav		= $(this).attr('data-nav');
			var auto_play = $(this).attr('data-autoplay');
			var auto_height = $(this).attr('data-autoheight');
			var auto_width = $(this).attr('data-autowidth');
			var mouse_drag = $(this).attr('data-mousedrag');
			var touch_drag = $(this).attr('data-touchdrag');
			var pull_drag = $(this).attr('data-pulldrag');
			var free_drag = $(this).attr('data-freedrag');
			if (typeof margin !== typeof undefined && margin !== false) {    
			} else{
				margin = 0;
			}
			if (typeof xxs_item !== typeof undefined && xxs_item !== false) {    
			} else{
				xxs_item = 1;
			}
			if (typeof xs_item !== typeof undefined && xs_item !== false) {    
			} else{
				xs_item = 1;
			}
			if (typeof sm_item !== typeof undefined && sm_item !== false) {    
			} else{
				sm_item = 3;
			}	
			if (typeof md_item !== typeof undefined && md_item !== false) {    
			} else{
				md_item = 3;
			}
			if (typeof lg_item !== typeof undefined && lg_item !== false) {    
			} else{
				lg_item = 3;
			}
			if (typeof hg_item !== typeof undefined && hg_item !== false) {    
			} else{
				hg_item = 1;
			}
			if (typeof dot !== typeof undefined && dot !== true) {   
				dot = dot;
			} else{
				dot = false;
			}
			if (typeof loop !== typeof undefined && loop !== true){
				loop = loop;
			} else {
				loop = false;
			}
			if (typeof nav !== typeof undefined && nav !== true) {   
				nav = nav;
			} else{
				nav = false;
			}
			if (typeof auto_play !== typeof undefined && auto_play !== true){
				auto_play = auto_play;
			} else {
				auto_play = false;
			}
			if (typeof auto_height !== typeof undefined && auto_height !== true){
				auto_height = auto_height;
			} else {
				auto_height = false;
			}
			if (typeof auto_width !== typeof undefined && auto_width !== true){
				auto_width = auto_width;
			} else {
				auto_width = false;
			}
			if (typeof mouse_drag !== typeof undefined && mouse_drag !== true){
				mouse_drag = mouse_drag;
			} else {
				mouse_drag = true;
			}
			if (typeof touch_drag !== typeof undefined && touch_drag !== true){
				touch_drag = touch_drag;
			} else {
				touch_drag = true;
			}
			if (typeof pull_drag !== typeof undefined && pull_drag !== true){
				pull_drag = pull_drag;
			} else {
				pull_drag = true;
			}
			if (typeof free_drag !== typeof undefined && free_drag !== true){
				free_drag = free_drag;
			} else {
				free_drag = false;
			}
			$(this).owlCarousel({
				loop: loop,
				margin:Number(margin),
				responsiveClass:true,
				dots: dot,
				nav: nav,
				autoPlay: false,
				navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
				responsive:{
					0:{
						items:Number(xxs_item)				
					},
					543:{
						items:Number(xs_item)				
					},
					768:{
						items:Number(sm_item)				
					},
					992:{
						items:Number(md_item)				
					},
					1200:{
						items:Number(lg_item)				
					},
					1600:{
						items: Number(hg_item)
					}
				},
				autoplay: auto_play,
				autoPlayHoverPause: true,
				autoHeight: false,
				autoWidth: auto_width,
				rewind: true,
				callbacks: true,
				mouseDrag: mouse_drag,
				touchDrag: touch_drag,
				pullDrag: pull_drag,
				freeDrag: free_drag
			});
	// }).on('changed.owl.carousel', check_first_active); // check last active owl item
})
	},300);
} window.lib_owl=lib_owl;

/* check last active owl-item */
// $(window).resize(function(){
// 	check_first_active();
// });
// function check_first_active(){
// 	ww = $(window).width();
// 	var x = $('.owl-carousel:not(.slider)');
// 	if (ww < 992){
// 		setTimeout(function(){
// 			x.find('.active .product-box').css('border-left','none');
// 			if(x.find('.active').first()){
// 				$(this).css('background','red');
// 				x.find('.active').first().find('.product-box').css({
// 					'border-left' : '{{ settings.color_borders }} 1px solid'
// 				});
// 			}
// 		}, 300);
// 	} else {
// 		setTimeout(function(){
// 			x.find('.active .product-box').css('border-left','transparent 1px solid');
// 		}, 300);
// 	}
// } window.check_first_active = check_first_active;

/********************************************************
# BACKTOTOP
********************************************************/
function lib_backtotop() { 
	if ($('.back-to-top').length) {
		var scrollTrigger = 100,
		backToTop = function () {
			var scrollTop = $(window).scrollTop();
			if (scrollTop > scrollTrigger) {
				$('.back-to-top').addClass('show');
			} else {
				$('.back-to-top').removeClass('show');
			}
		};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('.back-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}
} window.lib_backtotop=lib_backtotop;

/********************************************************
# TAB
********************************************************/
function lib_tab() {
	$(".e-tabs:not(.not-coltabs)").each( function(){
		$(this).find('.tabs-title li:first-child').addClass('current');
		$(this).find('.tab-content').first().addClass('current');
		$(this).find('.tabs-title li').click(function(){
			var tab_id = $(this).attr('data-tab');
			var url = $(this).attr('data-url');
			$(this).closest('.e-tabs').find('.tab-viewall').attr('href',url);
			$(this).closest('.e-tabs').find('.tabs-title li').removeClass('current');
			$(this).closest('.e-tabs').find('.tab-content').removeClass('current');
			$(this).addClass('current');
			$(this).closest('.e-tabs').find("#"+tab_id).addClass('current');
		});    
	});
} window.lib_tab=lib_tab;

/********************************************************
# DROPDOWN
********************************************************/
$('.dropdown-toggle').click(function() {
	$(this).parent().toggleClass('open'); 	
}); 
$('.btn-close').click(function() {
	$(this).parents('.dropdown').toggleClass('open');
}); 
$('body').click(function(event) {
	if (!$(event.target).closest('.dropdown').length) {
		$('.dropdown').removeClass('open');
	};
});

/**********************************************************
# OPEN FILTER
**********************************************************/
$('.open-filters').click(function(e){
	e.stopPropagation();
	$(this).toggleClass('openf');
	$('.opacity_filter').toggleClass('opacity_filter_true');
	$('.dqdt-sidebar').toggleClass('openf');
});

if (ww < 992 ){
	$(".filter-group li span label").click(function(){
		$('.dqdt-sidebar').removeClass('openf');
		$('.open-filters').removeClass('openf');
		$('.opacity_filter').removeClass('opacity_filter_true');
	});
	$('.opacity_filter').click(function(e){
		$('.dqdt-sidebar').removeClass('openf');
		$('.open-filters').removeClass('openf');
		$('.opacity_filter').removeClass('opacity_filter_true');
	});
}

/***********************************************************
# COLLECTION TABS
***********************************************************/
// Create tab
$(".not-coltabs").each(function(e) {
	var $this1 = $(this);
	var datasection = $this1.closest('.not-coltabs').attr('data-section');
	$this1.find('.tabs-title li:first-child').addClass('current');
	$this1.find('.tab-content').first().addClass('current');
	$this1.find('.tabs-title.ajax li').click(function() {
		var $this2 = $(this),
		tab_id = $this2.attr('data-tab'),
		url = $this2.attr('data-url');
		var etabs = $this2.closest('.e-tabs');
		etabs.find('.tab-viewall').attr('href', url);
		etabs.find('.tabs-title li').removeClass('current');
		etabs.find('.tab-content').removeClass('current');
		$this2.addClass('current');
		etabs.find("." + tab_id).addClass('current');
		if (!$this2.hasClass('has-content')) {
			$this2.addClass('has-content');
			getContentTab(url, "." + datasection + " ." + tab_id);
		}
	});
});

//Xử lý mobile
$('.not-coltabs .next').click(function(e) {
	var count = 0
	$(this).parents('.content').find('.tab-content').each(function(e) {
		count += 1;
	})
	var str = $(this).parent().find('.tab-titlexs').attr('data-tab'),
	res = str.replace("tab-", ""),
	datasection = $(this).closest('.not-coltabs').attr('data-section');
	res = Number(res);
	if (res < count) {
		var current = res + 1;
	} else {
		var current = 1;
	}
	action(current, datasection);
})
$('.not-coltabs .prev').click(function(e) {
	var count = 0
	$(this).parents('.content').find('.tab-content').each(function(e) {
		count += 1;
	})
	var str = $(this).parent().find('.tab-titlexs').attr('data-tab'),
	res = str.replace("tab-", ""),
	datasection = $(this).closest('.not-coltabs').attr('data-section'),
	res = Number(res);
	if (res > 1) {
		var current = res - 1;
	} else {
		var current = count;
	}
	action(current, datasection);
})
// Action mobile
function action(current, datasection) {
	$('.' + datasection + ' .tab-titlexs').attr('data-tab', 'tab-' + current);
	var text = '',
	url = '',
	tab_id = '';
	$('.' + datasection + ' ul.tabs.tabs-title.hidden-xs li').each(function(e) {
		if ($(this).attr('data-tab') == 'tab-' + current) {
			var $this3 = $(this);
			title = $this3.find('span').text();
			url = $this3.attr('data-url');
			tab_id = $this3.attr('data-tab');
        //Nếu đã load rồi thì không load nữa
        if (!$this3.hasClass('has-content')) {
        	$this3.addClass('has-content');
        	getContentTab(url, "." + datasection + " ." + tab_id);
        }
    }
})
	$("." + datasection + " .tab-titlexs span").text(title);
	$("." + datasection + " .tab-content").removeClass('current');
	$("." + datasection + " .tab-" + current).addClass('current');
}
// Get content cho tab
function getContentTab(url,selector){
	url = url+"?view=ajaxload";
	// var dataLgg = $(selector).parent().find('.tab-1 .owl-carousel').attr('data-lgg-items');
	// var loading = '<div class="loader loader--style5" title="4"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="#333"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite" /> </rect> <rect x="10" y="0" width="4" height="10" fill="#333"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite" /> </rect> <rect x="20" y="0" width="4" height="10" fill="#333"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite" /> </rect> </svg></div>';
	var loading = '<div class="loader loader--style5" title="4"><svg class=""><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#collection_tab_loading"></use></svg>';
	$.ajax({
		type: 'GET',
		url: url,
		beforeSend: function() {
			$(selector).html(loading);
		},
		success: function(data) {
			var content = $(data);
			setTimeout(function(){
				$(selector).html(content.html());
				ajaxCarousel(selector);
				lib_lazyloadImage();
				lib_click_swatch();
				$('.add_to_cart').click(function(e){
					e.preventDefault();
					var $this = $(this);						   
					var form = $this.parents('form');						   
					$.ajax({
						type: 'POST',
						url: '/cart/add.js',
						async: false,
						data: form.serialize(),
						dataType: 'json',
						error: addToCartFail,
						beforeSend: function() {  
							if(window.theme_load == "icon"){
								lib_showLoading('.btn-addToCart');
							} else{
								lib_showPopup('.loading');
							}
						},
						success: addToCartSuccess,
						cache: false
					});
				});
			}, 500);
			if(window.BPR)
				return window.BPR.initDomEls(), window.BPR.loadBadges();
		},
		dataType: "html"
	});
}
// Ajax carousel
function ajaxCarousel(selector,dataLgg){
	$(selector+' .owl-carousel.ajax-carousel').each( function(){
		var xxs_item = $(this).attr('data-xxs-items');
		var xs_item = $(this).attr('data-xs-items');
		var sm_item = $(this).attr('data-sm-items');
		var md_item = $(this).attr('data-md-items');
		var lg_item = $(this).attr('data-lg-items');
		var hg_item = $(this).attr('data-hg-items');
		var margin	= $(this).attr('data-margin');
		var dot		= $(this).attr('data-dot');
		var loop	= $(this).attr('data-loop');
		var nav		= $(this).attr('data-nav');
		var auto_play = $(this).attr('data-autoplay');
		var auto_height = $(this).attr('data-autoheight');
		var auto_width = $(this).attr('data-autowidth');
		var mouse_drag = $(this).attr('data-mousedrag');
		var touch_drag = $(this).attr('data-touchdrag');
		var pull_drag = $(this).attr('data-pulldrag');
		var free_drag = $(this).attr('data-freedrag');
		if (typeof margin !== typeof undefined && margin !== false) {    
		} else{
			margin = 0;
		}
		if (typeof xxs_item !== typeof undefined && xxs_item !== false) {    
		} else{
			xxs_item = 1;
		}
		if (typeof xs_item !== typeof undefined && xs_item !== false) {    
		} else{
			xs_item = 1;
		}
		if (typeof sm_item !== typeof undefined && sm_item !== false) {    
		} else{
			sm_item = 3;
		}	
		if (typeof md_item !== typeof undefined && md_item !== false) {    
		} else{
			md_item = 3;
		}
		if (typeof lg_item !== typeof undefined && lg_item !== false) {    
		} else{
			lg_item = 3;
		}
		if (typeof hg_item !== typeof undefined && hg_item !== false) {    
		} else{
			hg_item = 1;
		}
		if (typeof dot !== typeof undefined && dot !== true) {   
			dot = dot;
		} else{
			dot = false;
		}
		if (typeof loop !== typeof undefined && loop !== true){
			loop = loop;
		} else {
			loop = false;
		}
		if (typeof nav !== typeof undefined && nav !== true) {   
			nav = nav;
		} else{
			nav = false;
		}
		if (typeof auto_play !== typeof undefined && auto_play !== true){
			auto_play = auto_play;
		} else {
			auto_play = false;
		}
		if (typeof auto_height !== typeof undefined && auto_height !== true){
			auto_height = auto_height;
		} else {
			auto_height = false;
		}
		if (typeof auto_width !== typeof undefined && auto_width !== true){
			auto_width = auto_width;
		} else {
			auto_width = false;
		}
		if (typeof mouse_drag !== typeof undefined && mouse_drag !== true){
			mouse_drag = mouse_drag;
		} else {
			mouse_drag = true;
		}
		if (typeof touch_drag !== typeof undefined && touch_drag !== true){
			touch_drag = touch_drag;
		} else {
			touch_drag = true;
		}
		if (typeof pull_drag !== typeof undefined && pull_drag !== true){
			pull_drag = pull_drag;
		} else {
			pull_drag = true;
		}
		if (typeof free_drag !== typeof undefined && free_drag !== true){
			free_drag = free_drag;
		} else {
			free_drag = false;
		}
		$(this).owlCarousel({
			loop: loop,
			margin:Number(margin),
			responsiveClass:true,
			dots: dot,
			nav: nav,
			autoPlay: false,
			navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			responsive:{
				0:{
					items:Number(xxs_item)				
				},
				543:{
					items:Number(xs_item)				
				},
				768:{
					items:Number(sm_item)				
				},
				992:{
					items:Number(md_item)				
				},
				1200:{
					items:Number(lg_item)				
				},
				1600:{
					items: Number(hg_item)
				}
			},
			autoplay: auto_play,
			autoPlayHoverPause: true,
			autoHeight: false,
			autoWidth: auto_width,
			rewind: true,
			callbacks: true,
			mouseDrag: mouse_drag,
			touchDrag: touch_drag,
			pullDrag: pull_drag,
			freeDrag: free_drag
		})
	})
}


/*** SWATCH PRODUCT IMAGE ***/
function lib_click_swatch(){
	$('.col-variant .swatch-element').on('mouseover', function(e){
		$('.col-variant .swatch-element').removeClass('variant-color-active');
		$(this).addClass('variant-color-active');
		var img = $(this).attr('data-image');
		if (img != ''){
			$(this).parents('.product-box-swatch').find('.product-thumbnail a img').attr('src',img);
		}
	});
} window.lib_click_swatch = lib_click_swatch;