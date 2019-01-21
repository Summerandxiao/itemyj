//二级导航
$(".has_list").find("a").hover(function(){
	$(this).css("color","red")
},function(){
	$(this).css("color","black")
})
//鼠标划上二级导航出现与消失
$(".blank").find("li").hover(function(){
	$(this).find(".has_list").show()
},function(){
	$(this).find(".has_list").hide()
})
//轮播图淡入淡出效果
var index = 0;
var timer = null;
timer = setInterval( auto , 2000 );
var ulist = $(".ban_ab").children();
var olist = $(".nav_sec").find("ol").children();

function auto(){
	index++;
	if(index == olist.size()){
		index = 0 ; 
	}
	olist.eq(index).css("background","white")
	               .siblings()
	               .css("background","#b9b8bb")
	ulist.eq(index).fadeIn(1500)
	               .siblings()
	               .fadeOut(1500)
}

olist.mouseenter(function(){
	index = $(this).index()-1;
	clearInterval(timer);
	auto();
})
olist.mouseleave(function(){
	timer = setInterval(auto,2000)
})
//今日直播

var shop = $(".shop").find("ol")
$(".tv").on("click","li",function(){
	$(this).css({
		"background":"#c42c33",
		"color":"#fff",
		})
		.siblings()
		.css({
			"background":"",
		   "color":"black",
		})
	$(this).find(".iconfont").css("color","white")
	       .end()
	       .siblings()
	       .find(".iconfont").css("color","black")
	$(this).find("span").addClass("jiao_x")
	       .end()
	       .siblings()
	       .find("span").removeClass("jiao_x")
	       
	       
	$(".shop").html(shop.eq($(this).index()))
})
