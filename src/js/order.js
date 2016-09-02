define(['jquery'],function  ($) {
	if(location.href.indexOf("order") ==-1 )return;
	
	$('.back').on("click",function(){
		window.location.href = 'massages.html';
	})

	var str=decodeURI(location.search.substr(1));
	var url=str.split('&');
	var obj={};
	for(var i=0;i<url.length;i++){
		var tempArr=url[i].split('=');
		obj[tempArr[0]]=tempArr[1];
	}
	//console.log(obj)
	var money='￥'+Number(obj.money).toFixed(2);
	$('.yu i').html(money);
	$('.pay em').html(money)


	var date=new Date();
	var time=date.toLocaleString( );
	//console.log(time)
	$('.time em').html(time);

	$('.ispay').on("click",function  () {
		location.href='tab.html?taocanId='+obj.taocanId;;
	})


	$.ajax({
		url:'../data/xinxi.json',
		success:function  (data) {
			for(var i in data.phone){
				if(i==obj.phoneId){
					$('.number i').html(data.phone[i])
				}
			}
		}
	})

	$.ajax({
		url:'../data/taocan.json',
		success:function  (data) {
			for(var i in data.taocan){
				if(data.taocan[i].id==obj.taocanId){
					$('.set i').html(data.taocan[i].type)
					//console.log(data.taocan[i].type)
				}
				
			}
		}
	})
})