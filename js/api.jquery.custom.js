var icon_url___full = "//bizweb.dktcdn.net/thumb/icon/100/333/279/themes/695197/assets/icon_cart___full.png";
var icon_url___empty = "//bizweb.dktcdn.net/thumb/icon/100/333/279/themes/695197/assets/icon_cart___empty.png";
var product_noimage = "//bizweb.dktcdn.net/thumb/small/100/333/279/themes/695197/assets/libra-sport___product.png";


Bizweb.updateCartFromForm = function(cart, cart_summary_id, cart_count_id) {
	if ((typeof cart_summary_id) === 'string') {
		var cart_summary = jQuery(cart_summary_id);
		if (cart_summary.length) {
			cart_summary.empty();
			jQuery.each(cart, function(key, value) {
				if (key === 'items') {
					var table = jQuery(cart_summary_id);           
					if (value.length) {   
						jQuery('<div class="cart_count_info bg-success">Giỏ hàng hiện có <strong>0</strong> sản phẩm</div><ul class="list-item-cart"></ul>').appendTo(table);
						jQuery.each(value, function(i, item) {	
							var buttonQty = "";
							if(item.quantity == '1'){
								buttonQty = 'disabled';
							}else{
								buttonQty = '';
							}
							if(item.price == 0){
								var price = "Tặng kèm";
							}else{
								var price = Bizweb.formatMoney(item.price, "{{amount_no_decimals_with_comma_separator}}₫");
							}

							var link_img0 = Bizweb.resizeImage(item.image, 'small');
							if (link_img0=="null" || link_img0 =='' || link_img0 ==null){
								link_img0 = product_noimage;
							}
							jQuery('<li class="item productid-' + item.variant_id +'">'
								+		'<a class="product-image" href="' + item.url + '" title="' + item.name + '">'
								+			'<img alt="'+  item.name  + '" src="' + link_img0 + '" \>'
								+		'</a>'
								+		'<div class="detail-item">'
								+			'<div class="product-details">'
								+				'<p class="product-name">'
								+					'<a href="' + item.url + '" title="' + item.name + '">' + item.name + '</a>'
								+				'</p>'
								+				'<a href="javascript:;" data-id="'+ item.variant_id +'" title="Xóa" class="remove-item-cart fa fa-remove">&nbsp;</a>'
								+			'</div>'
								+			'<div class="product-details-bottom">'
								+				'<span class="price">' + price + '</span>'
								+				'<div class="quantity-select qty_drop_cart">'
								+					'<input class="variantID" type="hidden" name="variantId" value="'+ item.variant_id +'">'
								+					'<button onClick="var result = document.getElementById(\'qty'+ item.variant_id +'\'); var qty'+ item.variant_id +' = result.value; if( !isNaN( qty'+ item.variant_id +' ) &amp;&amp; qty'+ item.variant_id +' &gt; 1 ) result.value--;return false;" class="btn_reduced reduced items-count btn-minus" ' + buttonQty + ' type="button">–</button>'
								+					'<input type="text" maxlength="3" min="1" class="input-text number-sidebar qty'+ item.variant_id +'" id="qty'+ item.variant_id +'" name="Lines" id="updates_'+ item.variant_id +'" size="4" value="'+ item.quantity +'" onkeypress="if ( isNaN(this.value + String.fromCharCode(event.keyCode) )) return false;">'
								+					'<button onClick="var result = document.getElementById(\'qty'+ item.variant_id +'\'); var qty'+ item.variant_id +' = result.value; if( !isNaN( qty'+ item.variant_id +' )) result.value++;return false;" class="btn_increase increase items-count btn-plus" type="button">+</button>'
								+				'</div>'
								+			'</div>'
								+	'</li>').appendTo(table.children('.list-item-cart'));
						}); 
						jQuery('<div class="pd">'
							+	'<div class="top-subtotal">'
							+		'<strong>Tổng cộng</strong>: <span class="price">' + Bizweb.formatMoney(cart.total_price, "{{amount_no_decimals_with_comma_separator}}₫") + '</span>'
							+	'</div>'
							+'</div>').appendTo(table);
						jQuery('<div class="pd right_ct">'
							+	'<a href="/cart" class="btn">'
							+		'<span>Giỏ hàng</span>'
							+	'</a>'
							+	'<a href="/checkout" class="btn">'
							+		'<span>Thanh toán</span>'
							+	'</a>'
							+'</div>').appendTo(table);
					}
					else {
						jQuery('<div class="no-item"><p>Chưa có sản phẩm nào trong giỏ hàng.</p></div>').appendTo(table);
					}
				}
			});
		}
	}
	updateCartDesc(cart);
	var numInput = document.querySelector('#cart-sidebar input.input-text');
	if (numInput != null){
		numInput.addEventListener('input', function(){
			var num = this.value.match(/^\d+$/);
			if (num == 0) {
				this.value = 1;
			}
			if (num === null) {
				this.value = "";
			}
		}, false)
	}
}

Bizweb.updateCartPopupForm = function(cart, cart_summary_id, cart_count_id) {
	if ((typeof cart_summary_id) === 'string') {
		var cart_summary = jQuery(cart_summary_id);
		if (cart_summary.length) {
			cart_summary.empty();
			jQuery.each(cart, function(key, value) {
				if (key === 'items') {
					var table = jQuery(cart_summary_id);           
					if (value.length) { 
						jQuery.each(value, function(i, item) {
							var src = Bizweb.resizeImage(item.image, 'small');
							if(src == null){
								src = "http://bizweb.dktcdn.net/thumb/small/assets/themes_support/noimage.gif";
							}
							var buttonQty = "";
							if(item.quantity == '1'){
								buttonQty = 'disabled';
							}else{
								buttonQty = '';
							}
							var pageCartItem = '<div class="item-popup productid-' + item.variant_id +'">'
							+	'<div style="width: 49%;" class="text-left">'
							+		'<div class="item-image">'
							+			'<a class="product-image" href="' + item.url + '" title="' + item.name + '">'
							+				'<img alt="'+ item.name + '" src="' + src + '" >'
							+			'</a>'
							+ 		'</div>'
							+		'<div class="item-info">'
							+			'<p class="item-name">'
							+				'<a href="' + item.url + '" title="' + item.name + '">' + item.title + '</a>'
							+			'</p>'
							+ 			'<p class="variant-title-popup">' + item.variant_title + '</p>'
							+ 			'<p class="item-remove">'
							+				'<a href="javascript:;" class="remove-item-cart" title="Xóa" data-id="'+ item.variant_id +'"><i class="fa fa-close"></i> Xóa</a>'
							+			'</p>'
							+			'<p class="addpass" style="color:transparent;">'+ item.variant_id +'</p>'
							+		'</div>'
							+	'</div>'
							+ 	'<div style="width: 16%;" class="text-center">'
							+		'<div class="item-price">'
							+			'<span class="price">' + Bizweb.formatMoney(item.price, "{{amount_no_decimals_with_comma_separator}}₫") + '</span>'
							+ 		'</div>'
							+	'</div>'
							+	'<div style="width: 14%;" class="text-center">'
							+		'<div class="relative fixqtyflex">'
							+ 			'<input class="variantID" type="hidden" name="variantId" value="'+ item.variant_id +'">'
							+ 			'<button onClick="var result = document.getElementById(\'qtyItem'+ item.variant_id +'\'); var qtyItem'+ item.variant_id +' = result.value; if( !isNaN( qtyItem'+ item.variant_id +' ) &amp;&amp; qtyItem'+ item.variant_id +' &gt; 1 ) result.value--;return false;" ' + buttonQty + ' class="reduced items-count btn-minus" type="button">–</button>'
							+ 			'<input onkeypress="if ( isNaN(this.value + String.fromCharCode(event.keyCode) )) return false;" type="text" maxlength="3" min="0" class="input-text number-sidebar qtyItem'+ item.variant_id +'" id="qtyItem'+ item.variant_id +'" name="Lines" id="updates_'+ item.variant_id +'" size="4" value="'+ item.quantity +'">'
							+ 			'<button onClick="var result = document.getElementById(\'qtyItem'+ item.variant_id +'\'); var qtyItem'+ item.variant_id +' = result.value; if( !isNaN( qtyItem'+ item.variant_id +' )) result.value++;return false;" class="increase items-count btn-plus" type="button">+</button>'
							+		'</div>'
							+ 	'</div>'
							+ 	'<div style="width: 19%;" class="text-center">'
							+		'<span class="cart-price">'
							+			'<span class="price">'+ Bizweb.formatMoney(item.price * item.quantity, "{{amount_no_decimals_with_comma_separator}}₫") +'</span>'
							+		'</span>'
							+	'</div>'
							+'</div>';
							jQuery(pageCartItem).appendTo(table);
							if(item.variant_title == 'Default Title'){
								$('.variant-title-popup').hide();
							}
							$('.link_product').text();
						}); 
					}
				}
			});
		}
	}
	jQuery('.total-price').html(Bizweb.formatMoney(cart.total_price, "{{amount_no_decimals_with_comma_separator}}₫"));
	updateCartDesc(cart);
}

Bizweb.updateCartPageForm = function(cart, cart_summary_id, cart_count_id) {
	if ((typeof cart_summary_id) === 'string') {
		var cart_summary = jQuery(cart_summary_id);
		if (cart_summary.length) {
			cart_summary.empty();
			jQuery.each(cart, function(key, value) {
				if (key === 'items') {
					var table = jQuery(cart_summary_id);           
					if (value.length) {  
						var pageCart = '<div class="cart page_cart hidden-xs">'
						+ 		'<form action="/cart" method="post" novalidate class="margin-bottom-0">'
						+			'<div class="bg-scroll">'
						+				'<div class="cart-thead">'
						+ 					'<div style="width: 17%" class="a-center">Ảnh sản phẩm</div>'
						+					'<div style="width: 28%" class="a-center">Thông tin</div>'
						+					'<div style="width: 16%" class="a-center"><span class="nobr">Đơn giá</span></div>'
						+					'<div style="width: 14%" class="a-center">Số lượng</div>'
						+					'<div style="width: 20%" class="a-center">Thành tiền</div>'
						+					'<div style="width: 5%"  class="a-center">Xóa</div>'
						+				'</div>'
						+ 				'<div class="cart-tbody">'+'</div>'
						+			'</div>'
						+		'</form>'
						+	'</div>';
						var pageCartCheckout = '<div class="cart-collaterals cart_submit row">'
						+		'<div class="totals col-xs-12 col-sm-12 col-md-12 col-lg-12">'
						+			'<div class="totals">'
						+				'<div class="inner">'
						+ 					'<table class="table shopping-cart-table-total margin-bottom-0" id="shopping-cart-totals-table">'
						+						'<colgroup><col><col></colgroup>'
						+ 						'<tfoot>'
						+							'<tr>'
						+								'<td colspan="20" class="a-right"></td>'
						+								'<td class="a-right">'
						+									'<span>Tổng tiền:</span> <strong><span class="totals_price price">' + Bizweb.formatMoney(cart.total_price, "{{amount_no_decimals_with_comma_separator}}₫") + '</span></strong>'
						+								'</td>'
						+							'</tr>'
						+						'</tfoot>'
						+					'</table>'
						+ 					'<ul class="checkout">'
						+						'<li class="clearfix">'
						+							'<button class="btn button btn-proceed-checkout libra-sport___button f-right" title="Tiến hành đặt hàng" type="button" onclick="window.location.href=\'/checkout\'">'
						+								'<span>Tiến hành đặt hàng</span>'
						+							'</button>'
						+							'<button class="btn btn-gray margin-right-15 libra-sport___button f-right" title="Tiếp tục mua hàng" type="button" onclick="window.location.href=\'/collections/all\'">'
						+								'<span>Tiếp tục mua hàng</span>'
						+							'</button>'
						+						'</li>'
						+ 					'</ul>'
						+				'</div>'
						+			'</div>'
						+		'</div>'
						+	'</div>';
						jQuery(pageCart).appendTo(table);
						jQuery.each(value, function(i, item) {
							var buttonQty = "";
							if(item.quantity == '1'){
								buttonQty = 'disabled';
							}else{
								buttonQty = '';
							}
							var link_img1 = Bizweb.resizeImage(item.image, 'compact');
							if(link_img1=="null" || link_img1 =='' || link_img1 == null){
								link_img1 = 'https://bizweb.dktcdn.net/thumb/compact/assets/themes_support/noimage.gif';
							}
							if(item.price == 0){
								var price = "Tặng kèm";
								var hidden = "hidden";
							} else {
								var hidden = "";
								var price = Bizweb.formatMoney(item.price, "{{amount_no_decimals_with_comma_separator}}₫");
							}

							var item_price = item.price * item.quantity;

							if (item.variant_title == "Default Title"){
								var item_variant = "";
							} else {
								var item_variant = item.variant_title;
							}
							var pageCartItem = '<div class="item-cart productid-' + item.variant_id +'">'
							+		'<div style="width: 17%" class="image">'
							+			'<a class="product-image" title="' + item.name + '" href="' + item.url + '">'
							+				'<img alt="' + item.name + '" src="' + link_img1 +  '">'
							+			'</a>'
							+		'</div>'
							+ 		'<div style="width: 28%;" class="a-center">'
							+			'<h2 class="product-name">'
							+				'<a href="' + item.url + '">' + item.title + '</a>'
							+				'<span class="variant-title">' + item_variant + '</span>'
							+			'</h2>'
							+		'</div>'
							+		'<div style="width: 16%" class="a-center">'
							+			'<span class="item-price">'
							+				'<span class="price">' + price + '</span>'
							+			'</span>'
							+		'</div>'
							+		'<div style="width: 14%" class="a-center">'
							+			'<div class="input_qty_pr relative '+hidden+'">'
							+				'<input class="variantID" type="hidden" name="variantId" value="'+ item.variant_id +'">'
							+				'<button onClick="var result = document.getElementById(\'qtyItem'+ item.variant_id +'\'); var qtyItem'+ item.variant_id +' = result.value; if( !isNaN( qtyItem'+ item.variant_id +' ) &amp;&amp; qtyItem'+ item.variant_id +' &gt; 1 ) result.value--;return false;" ' + buttonQty + ' class="reduced_pop items-count btn-minus" type="button">–</button>'
							+				'<input onkeypress="if ( isNaN(this.value + String.fromCharCode(event.keyCode) )) return false;" type="text" maxlength="3" min="0" class="input-text number-sidebar input_pop input_pop qtyItem'+ item.variant_id +'" id="qtyItem'+ item.variant_id +'" name="Lines" id="updates_'+ item.variant_id +'" size="4" value="'+ item.quantity +'">'
							+				'<button onClick="var result = document.getElementById(\'qtyItem'+ item.variant_id +'\'); var qtyItem'+ item.variant_id +' = result.value; if( !isNaN( qtyItem'+ item.variant_id +' )) result.value++;return false;" class="increase_pop items-count btn-plus" type="button">+</button>'
							+			'</div>'
							+		'</div>'
							+ 		'<div style="width: 20%" class="a-center">'
							+			'<span class="cart-price">'
							+				'<span class="price">'+ Bizweb.formatMoney(item_price, "{{amount_no_decimals_with_comma_separator}}₫") +'</span>'
							+			'</span>'
							+		'</div>'
							+ 		'<div style="width: 5%" class="a-center">'
							+			'<a class="button remove-item remove-item-cart" title="Xóa" href="javascript:;" data-id="'+ item.variant_id +'">'
							+				'<span><i class="fa fa-remove"></i></span>'
							+			'</a>'
							+		'</div>'
							+ '</div>';
							jQuery(pageCartItem).appendTo(table.find('.cart-tbody'));
						}); 
						jQuery(pageCartCheckout).appendTo(table.children('.cart'));
					} else {
						jQuery('<p class="hidden-xs-down margin-top-15">Không có sản phẩm nào trong giỏ hàng. Quay lại <a href="/" style="color:{{settings.color_main}};">cửa hàng</a> để tiếp tục mua sắm.</p>').appendTo(table);
						jQuery('.cart_desktop_page').css('min-height', 'auto');
					}
				}
			});
}
}
updateCartDesc(cart);
jQuery('#wait').hide();
}

Bizweb.updateCartPageFormMobile = function(cart, cart_summary_id, cart_count_id) {
	if ((typeof cart_summary_id) === 'string') {
		var cart_summary = jQuery(cart_summary_id);
		if (cart_summary.length) {
			cart_summary.empty();
			jQuery.each(cart, function(key, value) {
				if (key === 'items') {
					var table = jQuery(cart_summary_id);           
					if (value.length) {   
						jQuery('<div class="cart_page_mobile content-product-list"></div>').appendTo(table);
						jQuery.each(value, function(i, item) {
							if( item.image != null){
								var src = Bizweb.resizeImage(item.image, 'small');
							}else{
								var src = "https://bizweb.dktcdn.net/thumb/small/assets/themes_support/noimage.gif";
							}
							jQuery('<div class="item-product item productid-' + item.variant_id +' ">'
								+		'<div class="item-product-cart-mobile">'
								+			'<a href="' + item.url + '"  class="product-images1"  title="' + item.name + '">'
								+				'<img alt="" src="' + src +  '" alt="' + item.name + '">'
								+			'</a>'
								+		'</div>'
								+ 		'<div class="title-product-cart-mobile">'
								+			'<h3>'
								+				'<a href="' + item.url + '" title="' + item.name + '">' + item.name + '</a>'
								+			'</h3>'
								+			'<p>Giá: <span>' + Bizweb.formatMoney(item.price, "{{amount_no_decimals_with_comma_separator}}₫") + '</span></p>'
								+		'</div>'
								+ 		'<div class="select-item-qty-mobile">'
								+			'<div class="txt_center">'
								+ 				'<input class="variantID" type="hidden" name="variantId" value="'+ item.variant_id +'">'
								+				'<button onClick="var result = document.getElementById(\'qtyMobile'+ item.variant_id +'\'); var qtyMobile'+ item.variant_id +' = result.value; if( !isNaN( qtyMobile'+ item.variant_id +' ) &amp;&amp; qtyMobile'+ item.variant_id +' &gt; 0 ) result.value--;return false;" class="reduced items-count btn-minus" type="button">–</button>'
								+				'<input type="text" maxlength="12" min="0" class="input-text number-sidebar qtyMobile'+ item.variant_id +'" id="qtyMobile'+ item.variant_id +'" name="Lines" id="updates_'+ item.variant_id +'" size="4" value="'+ item.quantity +'">'
								+				'<button onClick="var result = document.getElementById(\'qtyMobile'+ item.variant_id +'\'); var qtyMobile'+ item.variant_id +' = result.value; if( !isNaN( qtyMobile'+ item.variant_id +' )) result.value++;return false;" class="increase items-count btn-plus" type="button">+</button>'
								+			'</div>'
								+ 			'<a class="button remove-item remove-item-cart" href="javascript:;" data-id="'+ item.variant_id +'">Xoá</a>'
								+		'</div>').appendTo(table.children('.content-product-list'));
						});
						jQuery('<div class="header-cart-price">'
							+		'<div class="title-cart ">'
							+			'<h3 class="text-xs-left">Tổng tiền</h3>'
							+			'<a class="text-xs-right totals_price_mobile">' + Bizweb.formatMoney(cart.total_price, "{{amount_no_decimals_with_comma_separator}}₫") + '</a>'
							+		'</div>'
							+ 		'<div class="checkout">'
							+			'<button class="btn button btn-continue fw margin-bottom-15" type="button" onclick="window.location.href=\'/collections/all\'">'
							+ 				'<span>Tiếp tục mua hàng</span>'
							+			'</button>'
							+			'<button class="btn-proceed-checkout-mobile" type="button" onclick="window.location.href=\'/checkout\'">'
							+ 				'<span>Tiến hành thanh toán</span>'
							+			'</button>'
							+		'</div>'
							+	'</div>').appendTo(table);
					}
				}
			});
		}
	}
	updateCartDesc(cart);
}

function updateCartDesc(data){
	var $cartPrice = Bizweb.formatMoney(data.total_price, "{{amount_no_decimals_with_comma_separator}}₫"),
	$cartMobile = $('#header .cart-mobile .quantity-product'),
	$cartDesktop = $('.count_item_pr'),
	$cartDesktopList = $('.cart-counter-list'),
	$cartPopup = $('.cart-popup-count');
	$cardCountInfo = $('.cart_count_info strong');

	var cart___item_count = data.item_count;
	switch(cart___item_count){
		case 0:
		$cartMobile.text('0');
		$cartDesktop.text('0');
		$cartDesktopList.text('0');
		$cartPopup.text('0');
		$cardCountInfo.text('0');
		break;
		case 1:
		$cartMobile.text('1');
		$cartDesktop.text('1');
		$cartDesktopList.text('1');
		$cartPopup.text('1');
		$cardCountInfo.text('1');
		break;
		default:
		$cartMobile.text(cart___item_count);
		$cartDesktop.text(cart___item_count);
		$cartDesktopList.text(cart___item_count);
		$cartPopup.text(cart___item_count);
		$cardCountInfo.text(cart___item_count);
		break;
	}

	if (cart___item_count > 0){
		$('.cartImg img').attr('src',icon_url___full);
	} else {
		$('.cartImg img').attr('src',icon_url___empty);
	}

	$('.top-cart-content .top-subtotal .price, aside.sidebar .block-cart .subtotal .price, .popup-total .total-price').html($cartPrice);
	$('.popup-total .total-price').html($cartPrice);
	$('.shopping-cart-table-total .totals_price').html($cartPrice);
	$('.header-cart-price .totals_price_mobile').html($cartPrice);
	$('.cartCount').html(cart___item_count);
}

Bizweb.onCartUpdate = function(cart) {
	Bizweb.updateCartFromForm(cart, '.mini-products-list');
	Bizweb.updateCartPopupForm(cart, '#popup-cart-desktop .tbody-popup');
	if(template == 'cart'){
		Bizweb.updateCartPageFormMobile(cart, '.cart-mobile .header-cart-content');
		Bizweb.updateCartPageForm(cart, '.cart_desktop_page');
	}
};

Bizweb.onCartUpdateClick = function(cart, variantId) {
	jQuery.each(cart, function(key, value) {
		if (key === 'items') {    
			jQuery.each(value, function(i, item) {	
				if(item.variant_id == variantId){
					$('.productid-'+variantId).find('.cart-price span.price').html(Bizweb.formatMoney(item.price * item.quantity, "{{amount_no_decimals_with_comma_separator}}₫"));
					$('.productid-'+variantId).find('.items-count').prop("disabled", false);
					$('.productid-'+variantId).find('.number-sidebar').prop("disabled", false);
					$('.productid-'+variantId +' .number-sidebar').val(item.quantity);
					if(item.quantity == '1'){
						$('.productid-'+variantId).find('.items-count.btn-minus').prop("disabled", true);
					}
				}
			}); 
		}
	});
	updateCartDesc(cart);
}

Bizweb.onCartRemoveClick = function(cart, variantId) {
	jQuery.each(cart, function(key, value) {
		if (key === 'items') {    
			jQuery.each(value, function(i, item) {	
				if(item.variant_id == variantId){
					$('.productid-'+variantId).remove();
				}
			}); 
		}
	});
	updateCartDesc(cart);
}

$(window).ready(function(){
	$.ajax({
		type: 'GET',
		url: '/cart.js',
		async: false,
		cache: false,
		dataType: 'json',
		success: function (cart){
			Bizweb.updateCartFromForm(cart, '.mini-products-list');
			Bizweb.updateCartPopupForm(cart, '#popup-cart-desktop .tbody-popup'); 
			if(template == 'cart'){
				Bizweb.updateCartPageFormMobile(cart, '.cart-mobile .header-cart-content');
				Bizweb.updateCartPageForm(cart, '.cart_desktop_page');   
			}
		}
	});
});