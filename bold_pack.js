/**
	Created:2012-08-07
	Author:kyohei kondo
	Description:
	スマートフォン（Android）でfont-weight:bold;が使えない機種に擬似的に対応する関数
	※エレメントを複製するため、CSSなどでズレが発生する可能性があります。
*/

// className を擬似boldフォントにするclass名を設定する
// boldSize を擬似boldにする際のズレ許可値を設定する

var fn_ec_spfb = {
	className:"bold",
	boldSize:"0.6px",
	init:function() {
		var elArray = document.getElementsByClassName(fn_ec_spfb.className);
		for(var i=0;i<elArray.length;i++) {
			var before = document.createElement(elArray[i].tagName)
			before.style.position = "absolute";
			before.innerHTML = elArray[i].innerHTML;
			elArray[i].parentNode.insertBefore(before,elArray[i]);
			elArray[i].style.position="relative";
			elArray[i].style.top=fn_ec_spfb.boldSize;
			elArray[i].style.left=fn_ec_spfb.boldSize;
		}
	}
}
fn_ec_spfb.init();