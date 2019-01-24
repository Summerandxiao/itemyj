//綁定超鏈接，鼠标划上字体颜色变红，出现下划线。

$("nav").on("mouseenter","a", function() {
	$(this).css("textDecoration", "underline");
	$(this).css("color", "red");
  //服务中心特效
	if($(this).html() == $(".ho").html()) {
		$(this).parent().nextAll().addClass("xian")
		$(this).parent().parent().addClass("chu")
	}
	//微信商城
	if($(this).html() == $(".wei").html()) {
		$(".ig").css("display", "block");
		/*var left = $("body,html").scrollLeft();
		var top = $("body,html").scrollTop();
		console.log(left,top)
		left = top = 0*/
	}
})
$("nav").on("mouseleave","a", function(){
	$(this).css("textDecoration", "none");
	$(this).css("color", "");
	if($(this).html() == $(".ho").html()) {
		$(this).parent().nextAll().removeClass("xian")
		$(this).parent().parent().removeClass("chu")
	}
	if($(this).html() == $(".wei").html()) {
		$(".ig").css("display", "none");
	}
})
//随机验证码
function yzm(){
	var str = "" ;
    for(var i = 1 ; i <= 4 ; i++){
    	 var code = rand(65,122);
    	 if( code >= 91 && code <= 96 ){
    	 	i--; 
    	 }else{
    	 	var ch = String.fromCharCode( code );
    	 	str += ch ;
    	 }
    }
    return str;
}
//鼠标划上icon图标背景变色
$(".f_c_same").hover(function() {
	$(this).css("background-color", "#c42d29")
	// console.log($(this).html(),$(".f_c_list").html())
	//登录框的出现
	if($(this).html()==$(".f_c_list").html()){
		   	   $(this).addClass("jiao");
		       $(this).find(".user_center").show();
		       $(".yzm").html( yzm() );
		     
		  }
	//二维码的出现
	if($(this).html()==$(".f_c_wei").html()){
		   	   $(this).addClass("jiao_r");
		       $(this).find("img").show();
		  }
	//账户服务的出现
	if($(this).html()==$(".f_c_serve").html()){
		   	   $(this).addClass("jiao_s");
		       $(this).find(".serve").show();
		  }
}, function() {
	$(this).css("background-color", "");
	//登录框的消失
	 if($(this).find("p").html()==$(".f_c_list").find("p").html()){
	   	   $(this).removeClass("jiao");
	   	   $(this).find(".user_center").hide();
	   	  $(".yzm").html( yzm() );
	   }
    //二维码的消失
    if($(this).html()==$(".f_c_wei").html()){
		   	   $(this).removeClass("jiao_r");
		       $(this).find("img").hide();
		  }
    //账户服务的消失
	if($(this).html()==$(".f_c_serve").html()){
		   	   $(this).removeClass("jiao_s");
		       $(this).find(".serve").hide();
		  }
})
$(".user_center").find("span").click(function() {
	$(".user_center").hide();
	$(".f_c_list").removeClass("jiao")
})


//登录小框注册划上变色
$(".user_center_a").hover( function(){
		$(this).css("background-color","#a82045");
	} , function(){
		$(this).css("background","");
	} )
//点击top回到顶部
$(".f_c_stop").find(".iconfont").click(function(){
		$("body,html").animate({"scrollTop":0},1000,)
})

//在线客服特效
$(".tuo").click(function(){
	$(".online").hide();
	$(".kuai").show();
})
$(".mg").click(function(){
	$(".online").show();
	$(".kuai").hide();
})

