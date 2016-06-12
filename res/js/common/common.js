/*
	简易分拆JS方法.适用于小型网站或者dome
*/
// 动态获取JS路径
var jsPath=document.scripts;
jsPath=jsPath[jsPath.length-1].src.substring(0,jsPath[jsPath.length-1].src.lastIndexOf("/")+1);
// 调用方法JS
document.writeln('<script src="'+jsPath+'method.js"></script>');

$(function(){
	var $goTop = $(".go_top"),
		$win = $(window),
		$bar = $(".bar"),
		barOffTop = $bar.offset().top;
	$win.scroll(function(){
		// 返回顶部的显示与隐藏
		$win.scrollTop() > 200 ? $goTop.show() : $goTop.hide();
		// 侧边栏的定位处理
		barOffTop <= $win.scrollTop() ? $bar.addClass('fixed'): $bar.removeClass('fixed');
	});
	// 返回顶部
	$goTop.on("click",function(){ 
		$('body,html').animate({scrollTop:0},200); 
		return false;
	});
})