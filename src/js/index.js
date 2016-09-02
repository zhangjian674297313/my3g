require(['jquery'],function(jquery){
	if( location.href.indexOf("index.html") == -1 ) return;
	//登录跳转
	$("#login-in").on("click",function(){
		if( $(this).hasClass("disabled"))return;
		location.href="../html/tab.html"
	});
	//判断input是否非空，与登录按钮关联
	$(".login-page input").on("keyup",function(){
		if( $(this).val() =="" || $(this).parent("p").siblings("p").find("input").val()=="" ) {$("#login-in").addClass("disabled");return};
		$("#login-in").removeClass("disabled");
	})
	//没有账号,跳转注册绑定问问ID
	$("#openNew").on("click",function(){
		location.href="../html/bundling.html"
	})
	//获取验证码
	$("#getNum").on("click",function(){
		if( $("#card_num").val() =="") {alert("请输入正确的入网证件号码"); return;}
		if( $(this).hasClass("disabled") ) return;
		var i=59,that=this;
		$(this).html(i+"秒后重发").addClass("disabled");
		var t=setInterval(function(){
			i--;
			$(that).html(i+"秒后重发");
			if( i<=0 ){
				clearInterval(t);
				$(that).removeClass("disabled").html("获取验证码");
			}
		},1000)
		//操作代码

	});
})