//随机验证码
function yzm() {
	var str = "";
	for(var i = 1; i <= 4; i++) {
		var code = rand(65, 122);
		if(code >= 91 && code <= 96) {
			i--;
		} else {
			var ch = String.fromCharCode(code);
			str += ch;
		}
	}
	return str;
}
$(".yzm").html(yzm());
$(".yzm").click(function() {
	$(".yzm").html(yzm());
})

//页面打开后获取cookie数据
var str = document.cookie;
var reg = /\s/g;
newstr = str.replace(reg, "");
console.log(newstr);
var arr = newstr.split(";");
var uname = arr[0].split("=")[1];
var pwd = arr[1].split("=")[1];

$(".sub").click(function(){
	var yzm = $(".yan").val();
    var yzm2 = $(".yzm").html()
    var usname = $id("first").value;
    var upwd = $id("second").value;

	console.log(usname, upwd, yzm, yzm2)
	if(usname == uname && upwd == pwd && yzm == yzm2) {
		alert("登录成功");
		location.href = "index.html"
	}else if(usname != uname){
		alert("用户名有误");
		return false;
	}else if(upwd != pwd){
		alert("密码有误");
		return false;
	}else if(yzm != yzm2){
		alert("验证码有误");
		return false;
	}else {
		alert("登录失败")
		return false;

	}

})