

//楼梯
var h3 = $(".pics h3");
var olist = $(".de_nav ol li")
olist.on("click", function() {
	$(this).css("background", "white")
		.siblings()
		.css("background", "#F6F6F6");
		var topHeight = h3.eq($(this).index()).offset().top-52;
//设置滚动条滚走的距离 为  topHeight
	$("body,html").stop().animate({"scrollTop": topHeight}, 1000)
})
//购买数量变化
var num = $(".txt_de").find("img")
var index = 1 ;
num.eq(0).click(function(){
	$(this).parent().siblings().html( ++index )
	
	
})
num.eq(1).click(function(){
	if(index>1){
		$(this).parent().siblings().html( --index )
	}
})
//点击最小图，小图区显示对应图片；
$(".small ul li").eq(0).show().siblings().hide();
$(".small ol li").click(function(){
	$(".small ul li").eq($(this).index()).fadeIn(500)
	                 .siblings()
	                 .fadeOut(500)
})
//移入小图区，显示大图
$(".small ul li").hover(function(){
	$(".big").show();
	//$(".mask").show();
	$(".big ul li").eq($(this).index()).show()
	               .siblings()
	               .hide();
	//放大镜               
	$(".sm_u").on("mousemove","li",function(e){
	 var e = e || event ;
	  var x = e.pageX - $(".sm_u").offset().left -  $(".mask").width()/2;
	   var y = e.pageY - $(".sm_u").offset().top -  $(".mask").height()/2;
	// console.log($(".sm_u").offset().left,e.pageX,  x,y )
	   var maxL = $(".sm_u").width() - $(".mask").width();
	   var maxT = $(".sm_u").height() - $(".mask").height();
	     
	   x = x < 0 ? 0 : ( x > maxL ? maxL : x );
	   y = y < 0 ? 0 : ( y > maxT ? maxT : y );
	   $(".mask").css("left",x+"px");
	    $(".mask").css("top",y+"px") ;
	   var bimgl = x *(800-500)/(380- 170);
	      
	   var bimgt= y *(800-500)/(380- 170);
	  $(".bigmg").eq($(this).index()).css("left",-bimgl + "px")
	    $(".bigmg").eq($(this).index()).css("top",-bimgt + "px")
	   // console.log($(".sm_u").offset().left,e.pageX , $(".mask").css("top"),$(".bigmg").eq($(this).index()).css("top"))
	 
})
	               
},function(){
	$(".big").hide();
	//$(".mask").hide();
})


/*small.onmousemove=function(e){
	   var e = e || event ;
	   //console.log(small.offsetLeft,e.pageX,e.pageY,small.offsetTop)
	   
	  var x = e.pageX - small.offsetLeft - mask.offsetWidth/2;
	   var y = e.pageY - small.offsetTop - mask.offsetHeight/2;
	   console.log(x, y,   small.offetLeft,small.offsetTop)
	   var maxL = 380 - 170;
	   var maxT = 380 - 170;
	   
	   x = x < 0 ? 0 : ( x > maxL ? maxL : x );
	   y = y < 0 ? 0 : ( y > maxT ? maxT : y );
	   
	   mask.style.left = x + "px" ;
	   mask.style.top = y + "px" ;
	   console.log(x,y)
	   var bimgl = x *(800-500)/(380-170);
	      
	   var bimgr = y *(800-500)/(380-170);
	   
	   bimg.style.left = -bimgl + "px" ;
	   bimg.style.top = -bimgr + "px" ;
	  
}
*/
//点击收藏变实心

$(".small a").find("i").click(function(){
	 $(this).siblings().find("i").show()
	    $(this).hide()   ;
	       
})
