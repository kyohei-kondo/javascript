/**
	author:kyohei kondo
	イークリエイト調査・検証用ツールjs
	画像のaltを表示する関数
	id="alt_div"は使わないでください
*/
var fn_ec_dev = {
	_animate:true,
	// マウスカーソル位置の取得
	_mouseX:0,
	_mouseY:0,
	_thisX:50,// X座標位置の調整
	_thisY:50,// Y座標位置の調整
	_init:function() {
		$(function(){
			$("img").hover(function(){
				if($(this).attr("alt")!=""){
					fn_ec_dev._alt_getor($(this).attr("alt"));
				}else{
					fn_ec_dev._alt_remove();
				}
			},function() {
				fn_ec_dev._alt_remove();
			});
		});
		$(function(){
			$("img").mousemove(function(){
				if($(this).attr("alt") != "") {
					fn_ec_dev._on_move($(this).attr("alt"));
				}else{
					fn_ec_dev._alt_remove();
				}
			});
		});
	},
	_on_move:function(e) {
		$("#alt_div").css({
			"top":(fn_ec_dev._mouseY-fn_ec_dev._thisY)+"px",
			"left":(fn_ec_dev._mouseX-fn_ec_dev._thisX)+"px"
		});
	},
	_alt_getor:function(str) {
		if($("#alt_div").html() == null) {
			$("body").append('<div id="alt_div"></div>');
		}
		$("#alt_div").html(str);
		if($("#alt_div").css("width").split("p")[0] < fn_ec_dev._thisX) {
			fn_ec_dev._thisX=10;
		}
		$("#alt_div").css({
			"position":"absolute",
			"top":(fn_ec_dev._mouseY-fn_ec_dev._thisY)+"px",
			"left":(fn_ec_dev._mouseX-fn_ec_dev._thisX)+"px",
			"background-color":"#000000",
			"color":"#ffffff",
			"z-index":10000,
			"opacity":0
		});
		if(fn_ec_dev._animate){
			$("#alt_div").stop().animate({"opacity":1});
		}
	},
	_alt_remove:function() {
		if(fn_ec_dev._animate){
			$("#alt_div").stop().animate({"opacity":0},function() {
		}
		var dom_obj=document.getElementById("alt_div");
		var dom_obj_parent=dom_obj.parentNode;
		dom_obj_parent.removeChild(dom_obj);
		if(fn_ec_dev._animate){
			});
		}
	}
}
window.document.onmousemove = function(e){
	if(e) {
		fn_ec_dev._mouseX = e.pageX;
		fn_ec_dev._mouseY = e.pageY;
	}
	else {
		fn_ec_dev._mouseX = event.x + document.body.scrollLeft;
		fn_ec_dev._mouseY = event.y + document.body.scrollTop;
	}
}