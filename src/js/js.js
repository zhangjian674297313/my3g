//define(['jquery','angular','route'],function($,angular,route){

//定义模板

var str=decodeURI(location.search.substr(1));
var url=str.split('&');
var obj={};
for(var i=0;i<url.length;i++){
	var tempArr=url[i].split('=');
	obj[tempArr[0]]=tempArr[1];
}
//console.log(obj);

var myApp=angular.module("myApp",["ngRoute"]);
//定义控制器
myApp.controller("ctrl",["$scope",function($scope,$changebj,$blur){
	$scope.changebj=function(){
		$(".T_ol li").on("click",function(){
			$(this).addClass("T_li").siblings().removeClass("T_li");
		})
	}
	$scope.blur=function(){
		if($(".T_put").val()==""){
			alert("请输入手机号")
		}else{
			$(".T_instant").css({'background':"#5e83e1"})

		}
	}
}]);

//定义路由配置
myApp.config(["$routeProvider",function($routeProvider){
	$routeProvider
	.when('/one',{
		templateUrl:"../page/one.html",

	})
	.when('/two',{
		templateUrl:"../page/two.html",
	})
	.when('/three',{
		templateUrl:"../page/three.html",
		controller:function($scope){
			$scope.Month=[
					{
						"type":"月基话费",
						"yuan":"14.9元",
						"ji":"基本月租",
						"zu":"9.9元",
						"lai":"来电显示",
						"xian":"5.0元",
					},
					{
						"type":"增值业务",
						"yuan":"2.9元",
						"ji":"点对点短信",
						"zu":"0.3元",
						"lai":"数据流量",
						"xian":"2.6元",
					},
				]
			$scope.list=[
					{
						"type":"语音通话",
						"yuan":"3.2元",
					},
					{
						"type":"合计应缴",
						"yuan":"21.0元",
					
					},
				]
			}
	})
	.when('/four',{
		templateUrl:"../page/four.html",
		controller:function(){
			$.ajax({
				url:"../data/taocan.json",
				success:function(e){
					var data=e.taocan;
					var str="";

					for(var i in data){
						if(location.href.indexOf("taocanId") >-1 ){
							if(data[i].id==obj.taocanId){
								str+="<h5>我的套餐</h5><div class='T_content'><h4>"+data[i].type+"</h4><ol class='T_yuan'><li>"+data[i].huafei+"</li><li>"+data[i].zhujiao+"</li><li>"+data[i].liuliang+"</li></ol></div><div class='T_instant login'><span class='leave' ng-click='backfunction()'>退出登录</span></div><div class='T_footer'><p>注:本页数据仅供参考,更多详情请登录民生通讯官方</p><p>网站 www.ms170.cn 进行查询</p><p>民生通讯官方客服:400-6509170</p></div>"

							}
						}else{
							if(data[i].id==2){
								str+="<h5>我的套餐</h5><div class='T_content'><h4>"+data[i].type+"</h4><ol class='T_yuan'><li>"+data[i].huafei+"</li><li>"+data[i].zhujiao+"</li><li>"+data[i].liuliang+"</li></ol></div><div class='T_instant login'><span class='leave' ng-click='backfunction()'>退出登录</span></div><div class='T_footer'><p>注:本页数据仅供参考,更多详情请登录民生通讯官方</p><p>网站 www.ms170.cn 进行查询</p><p>民生通讯官方客服:400-6509170</p></div>"

							}
						}
					}

					$('.view1').html(str);
				}

			})
		}
	})
	.otherwise({
		redirectTo:"/one"
	})

}])

//点击显示高亮
$(".T_nav li").on("click","a",function(){
$(this).addClass("active").parent().siblings().find("a").removeClass("active");
})
//头部返回主页
$('.T_back').on("click",function(){
	window.location.href = 'index.html';
})

//退出登录返回到首页
$('.T_content').on("click",'.T_instant',function(){
	window.location.href = 'index.html';
	//alert(11);
})

//刷新显示对应导航
var location_index=window.location.href;

if (location_index.indexOf('one')>-1) {
    $(".T_nav li").eq(0).find('a').addClass("active").parent().siblings().find("a").removeClass("active");
}
if (location_index.indexOf('two')>-1) {
    $(".T_nav li").eq(1).find('a').addClass("active").parent().siblings().find("a").removeClass("active");
}
if (location_index.indexOf('three')>-1) {
    $(".T_nav li").eq(2).find('a').addClass("active").parent().siblings().find("a").removeClass("active");
}
if (location_index.indexOf('four')>-1) {
    $(".T_nav li").eq(3).find('a').addClass("active").parent().siblings().find("a").removeClass("active");

    
}
//})
