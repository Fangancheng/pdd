var user = $1(".user")
var pass = $1(".pass")
var lodin = $1(".lodin")
var register = $1(".register")

register.onclick = function(){
	var us = user.value
	var ps = pass.value
	
	//验证
	if(!us || !ps){
		alert('账号或密码不能为空')
		return
	}else{
		// var storage = window.localStorage;
		// storage.setItem("pass",ps);
		localStorage.setItem("user" , us);
		localStorage.setItem("pass" , ps);
		alert("注册成功，请登录");
		$1(".pass").value = "";
	}	
}

lodin.onclick = function(){
	var us = user.value
	var ps = pass.value
	var usval = localStorage.getItem("user");
	var psval = localStorage.getItem("pass");
	
	if(!us || !ps){
		alert('账号或密码不能为空')
		return
	}if (us === usval && ps === psval){
		alert("登录成功");
		// open("../pages/person.html");
		location.href = "./person.html"
	} else{
		alert("账号或密码错误，请重新输入或确认是否为最新注册");
	}
}