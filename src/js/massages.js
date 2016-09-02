define(['jquery'],function  ($) {
	if(location.href.indexOf("massages") ==-1 )return;
	
	$('.back').on("click",function(){
		window.location.href = 'xinxi.html';
	})

	$("#cardnum").blur(function () { 
		var isIDcard=/^(\d{15}|\d{17}[x0-9])$/i;
		if(isIDcard.test($('#cardnum').val())){
			var a=$(this).val().substr(0,6);
	    	$(this).val(a+"************")
		}else if($("#cardnum").val()==''){
			alert('请输入身份证号')
		}else{
			alert('身份证号错误');
			$(this).val('')
		}
	    
    })
    $("#phone").blur(function () { 
		var re = /^1\d{10}$/ 
		if (re.test($("#phone").val())) { 
			var a=$(this).val().substr(0,6);
	    	$(this).val(a+"*****")
		}else if($("#phone").val()==''){
			alert('请输入手机号');
		} else { 
			alert("错误"); 
			$(this).val('')
		}
		
    })
	$('.sphoto').on("click",function  () {
		$('.plugin').addClass('plugin-active').removeClass('plugin-hide');	
	})
	$('.complete').on("click",function  () {
		$('.plugin').removeClass('plugin-active').addClass('plugin-hide');
		$('.sphoto').addClass('bg')
	})
	$('.right-arrow').on("click",function  () {
		$('.plugin').removeClass('plugin-active').addClass('plugin-hide');
	})
	$('.read em').on("click",function  () {
		if($(this).html()==""){
			$(this).html("√").addClass('true');
			$('.sub').css({'background':'#5e83e1'})
		}else{
			$(this).html('').removeClass('true')
			$('.sub').css({'background':'#ccc'})
		}
		
	})
	
	$('.sub').on("click",function  () {
		if($('input').val()=='' || $('.sphoto').hasClass('')){
			alert('请填写完整')
		}else if($('.read em').html()==''){
			alert('请阅读入网协议')
		}else{
			var money=$('money').html();
			var rental=$('rental').html();
			var phonenumber=$('phonenumber').html();
			location.href='order.html?'+'money='+money+'&phoneId='+obj.phoneId+"&taocanId="+obj.taocanId;
		}
		
	})

	var str=decodeURI(location.search.substr(1));
	var url=str.split('&');
	var obj={};
	for(var i=0;i<url.length;i++){
		var tempArr=url[i].split('=');
		obj[tempArr[0]]=tempArr[1];
	}
	//console.log(obj);



	$.ajax({
		url:'../data/xinxi.json',
		success:function  (data) {
			for(var i in data.phone){
				if(i==obj.phoneId){
					$('phonenumber').html(data.phone[i])
				}
			}
		}
	})

	$.ajax({
		url:'../data/taocan.json',
		success:function  (data) {
			for(var i in data.taocan){
				if(data.taocan[i].id==obj.taocanId){
					$('rental').html(data.taocan[i].type)
					//console.log(data.taocan[i].type)
				}
				
			}
		}
	})








	//上传照片
	jQuery.fn.extend({
	    uploadPreview: function (opts) {
	        var _self = this, _this = $(this);
	        opts = jQuery.extend({
	            Img: "ImgPr",
	            Width: 100,
	            Height: 100,
	            ImgType: ["gif", "jpeg", "jpg", "bmp", "png"],
	            Callback: function () { }
	        }, opts || {});
	        _self.getObjectURL = function (file) {
	            var url = null;
	            if (window.createObjectURL != undefined) {
	                url = window.createObjectURL(file);
	            } else if (window.URL != undefined) {
	                url = window.URL.createObjectURL(file);
	            } else if (window.webkitURL != undefined) {
	                url = window.webkitURL.createObjectURL(file);
	            }
	            return url;
	        }
	        _this.change(function () {
	            if (this.value) {
	                if (!RegExp("\.(" + opts.ImgType.join("|") + ")$", "i").test(this.value.toLowerCase())) {
	                    alert("选择文件错误,图片类型必须是" + opts.ImgType.join("，") + "中的一种");
	                    this.value = "";
	                    return false;
	                }
	                if (navigator.userAgent.indexOf("MSIE") > -1) {
	                    try {
	                        $("#" + opts.Img).attr('src', _self.getObjectURL(this.files[0]));
	                    } catch (e) {
	                        var src = "";
	                        var obj = $("#" + opts.Img);
	                        var div = obj.parent("div")[0];
	                        _self.select();
	                        if (top != self) {
	                            window.parent.document.body.focus();
	                        } else {
	                            _self.blur();
	                        }
	                        src = document.selection.createRange().text;
	                        document.selection.empty();
	                        obj.hide();
	                        obj.parent("div").css({
	                            'filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)',
	                            'width': opts.Width + 'px',
	                            'height': opts.Height + 'px'
	                        });
	                        div.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = src;
	                    }
	                } else {
	                    $("#" + opts.Img).attr('src', _self.getObjectURL(this.files[0]));
	                }
	                opts.Callback();
	            }
	        });

	                
	    }

	});

 	$(function () {
        $("#up").uploadPreview({ Img: "ImgPr"});
        $("#up1").uploadPreview({ Img: "ImgPr1"});
        $("#up2").uploadPreview({ Img: "ImgPr2"});
        $('#up').on('click',function  () {
        	 $('#filephoto').show();
        	 
        })
        $('#up1').on('click',function  () {
        	 $('#filephoto1').show();
        	 
        })
        $('#up2').on('click',function  () {
        	 $('#filephoto2').show();
        })

      /*  if($('#ImgPr2').attr('src')==''){
	        alert(11)	 
        	 
        }else{
        	$(".complete").removeClass('disabled');
        }*/
       
	});

})