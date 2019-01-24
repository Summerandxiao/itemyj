//吸顶搜索栏
$(window).scroll(function(){
	var sTop = document.documentElement.scrollTop || document.body.scrollTop ;
	var h = 300;
	if(sTop > h){
		$(".dao").slideDown();
		$(".dao").css({
			"position":"fixed",
			"top":0  
		})
	}else{
		$(".dao").slideUp();
	}
})





//二级导航
$(".has_list").find("a").hover(function() {
	$(this).css("color", "red")
}, function() {
	$(this).css("color", "black")
})
//鼠标划上二级导航出现与消失
$(".blank").find("li").hover(function() {
	$(this).find(".has_list").show()
}, function() {
	$(this).find(".has_list").hide()
})
//轮播图淡入淡出效果
var index = 0;
var timer = null;
timer = setInterval(auto, 2000);
var ulist = $(".ban_ab").children();
var olist = $(".nav_sec").find("ol").children();

function auto() {
	index++;
	if(index == olist.size()) {
		index = 0;
	}
	olist.eq(index).css("background", "white")
		.siblings()
		.css("background", "#b9b8bb")
	ulist.eq(index).fadeIn(1500)
		.siblings()
		.fadeOut(1500)
}

olist.mouseenter(function() {
	index = $(this).index() - 1;
	clearInterval(timer);
	auto();
})
olist.mouseleave(function() {
	timer = setInterval(auto, 2000)
})
//今日直播
//页面加载完后请求服务器数据
/*window.onload = function() {
	var def = $.ajax({
		type: "get",
		url: "js/data.json?id="+new Date().getTime(),
		async: true
	});
	
		def.done(function(meg) {
			console.log(meg)
			/*var str = "";
			for(var i in json) {
				  var index = 1 //页码
			      var pagNum = 5 //每页有5张图片；
				for(var j = (index - 1) * pageNum; j < index * pageNum; j++) {
					if(j < json[i].list.length) {
						var pro = json[i].list[j];
						str += `<li>
				        		<div><p>${j+1}</p></div>
				        		<img src="../img/${pro.src}.jpg" alt="${pro.title}" />
				        		<h5>${pro.title}</h5>
				        		<span>
				        			<i>￥</i><b>298</b>
				        		</span>
				        		
				        	 </li> `
						
					}

				}
			}
			$(".to_live").append(str)
			})
		
			

		
	
}
	*/
//选项卡
var shop = $(".shop").find("ol")
$(".tv").on("click", "li", function() {
	$(this).css({
			"background": "#c42c33",
			"color": "#fff",
		})
		.siblings()
		.css({
			"background": "",
			"color": "black",
		})
	$(this).find(".iconfont").css("color", "white")
		.end()
		.siblings()
		.find(".iconfont").css("color", "black")
	$(this).find("span").addClass("jiao_x")
		.end()
		.siblings()
		.find("span").removeClass("jiao_x")

	$(".shop").html(shop.eq($(this).index()))
})