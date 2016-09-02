require(['jquery'],function(jquery){
	if(location.href.indexOf("bundling.html") ==-1 )return;
	//换一个验证码
	/*$("#pic_change").on("click",function(){
		
	});*/

	$('.back').on("click",function(){
		window.location.href = 'index.html';
	})

	$("#getNum").on("click",function(){
		if( $(this).hasClass("disabled") ) return;
		var patt1 = new RegExp(/^[1][358][0-9]{9}$/);
		if( $("#phone_num").val() =="" || !patt1.test( $("#phone_num").val() ) ) {alert("请输入正确的手机号码"); return;}
		var i=59,that=this;
		$(this).html(i+"秒后重发").addClass("disabled");
		var str="短信已发送至  "+$("#phone_num").val();
		$("#dia").show().find("small").html(str);
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
	$("#wenw input").on("keyup",function(){
		if( $("#phone_num").val()=="" || $("#pic_passNum").val()=="" || $("#test").val()=="" ){
			$("#bundling").addClass("disabled");
			return;
		}
		$("#bundling").removeClass("disabled");
	})
	$("#bundling").on("click",function(){
		if( $(this).hasClass("disabled") )return;

		//数据上传

		location.href="../html/xinxi.html";
	})
})