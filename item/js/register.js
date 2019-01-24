
$(".sub").click(function(){
	if( flagTel && flagPwd && flagQpwd){
		
		var uname = $(".tel").val();
		var pwd = $(".pwd").val();
		document.cookie=`usname=${uname}`;
		document.cookie=`upwd=${pwd}`;
		alert("注册成功");
		location.href="login.html"
		
	}else{
		return false;
	}
})

//验证手机号
var flagTel = null;
$(".tel").blur(function(){
	var strTel = $(".tel").val();
	var reg = /1[3|5|8|7]\d{9}/;
	if(reg.test(strTel)){
	     flagTel = true ;
	      $("#s1").html("ok")
	       $("#s1").css("color","green")
	}else{
		$("#s1").html("error")
		 $("#s1").css("color","red")
		//alert("手机号输入有误")
		 flagTel = false;
		
	}
})
//密码
var flagPwd = null;
$(".pwd").blur(function(){
	var strPwd = $(".pwd").val();
	var reg = /\w{6,18}/;
	if(reg.test(strPwd)){
	      flagPwd = true ;
	      $("#s2").html("ok")
	       $("#s2").css("color","green")
	}else{
		$("#s2").html("error")
		 $("#s2").css("color","red")
		//alert("密码输入有误")
		 flagPwd = false;
		 
	}
})
//确认密码
var flagQpwd = null;
$(".qpwd").blur(function(){
	var strPwd = $(".pwd").val();
	var str = $(".qpwd").val();
	
	if(strPwd == str ){
	      flagQpwd = true ;
	    $("#s3").html("ok")
	     $("#s3").css("color","green")
	}else{
		$("#s3").html("error")
		 $("#s3").css("color","red")
		//alert("确认密码输入有误")
		 flagQpwd = false;
		
	}
})