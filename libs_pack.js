/**
	author:kyohei kondo
	イークリエイトjsライブラリパック
*/
var fn_ec_libs = {
	/**
		ロールオーバー処理
		画像の非透明から半透明処理（指定値）
	*/
	alpha_on:{
		active:true, // 透過処理を使用するか
		Element:".img_trans", // 対象要素
		speed:"slow", // 1000=1秒　他 "slow"や"normal"や"fast"を指定可
		alpha_num:0.5 // 透過度の指定0~1
	},
	/**
		ロールオーバー処理
		画像の半透明から非透明処理
	*/
	alpha_off:{
		active:true, // 透過処理を使用するか
		Element:".img_vivid", // 対象要素
		speed:"slow", // 1000=1秒　他 "slow"や"normal"や"fast"を指定可
	},
	/**
		ロールオーバー処理
		（画像の切替）jpg or png
	*/
	img_hover:{
		active:true, // ロールオーバー処理を使用するか
		Element:".img_hover" // 対象要素
	}
	,
	
	/**
		処理実行用
	*/
	_init:function() {
		if(fn_ec_libs.alpha_on.active) {
			$(fn_ec_libs.alpha_on.Element).live("mouseover",function() {
				$(this).queue([]).animate({opacity:fn_ec_libs.alpha_on.alpha_num},fn_ec_libs.alpha_on.speed);
			});
			$(fn_ec_libs.alpha_on.Element).live("mouseout",function() {
				$(this).queue([]).animate({opacity:1},fn_ec_libs.alpha_on.speed);
			});
		}
		if(fn_ec_libs.alpha_off.active) {
			$(fn_ec_libs.alpha_off.Element).live("mouseover",function() {
				$(this).queue([]).animate({opacity:fn_ec_libs.alpha_off.alpha_num},fn_ec_libs.alpha_off.speed);
			});
			$(fn_ec_libs.alpha_off.Element).live("mouseout",function() {
				$(this).queue([]).animate({opacity:1},fn_ec_libs.alpha_off.speed);
			});
		}
		if(fn_ec_libs.img_hover.active) {
			$(fn_ec_libs.img_hover.Element).live("mouseover",function() {
				$(this).attr("src",$(this).attr("src").replace(".jpg","_on.jpg"));
				$(this).attr("src",$(this).attr("src").replace(".png","_on.png"));
			});
			$(fn_ec_libs.img_hover.Element).live("mouseout",function() {
				$(this).attr("src",$(this).attr("src").replace("_on.jpg",".jpg"));
				$(this).attr("src",$(this).attr("src").replace("_on.png",".png"));
			});
		}
	}
}
fn_ec_libs._init();