define(['jquery'],function($){
    if(window.location.href.indexOf('xinxi.html')==-1)return;

    $('.back').on("click",function(){
        window.location.href = 'bundling.html';
    })

    $.when($.ajax("../data/taocan.json"))
        .done(function(data){
            var obj = data.taocan;
            var str = '';
            obj.forEach(function(v,i){
                if(i==0){
                    str += '<div class="xinxi_type active" data-id="'+v.id+'">' +
                        '<p>'+v.type+'</p>' +
                        '<p>'+v.huafei+'</p>' +
                        '<p>'+v.liuliang+'</p>' +
                        '</div>';
                }else{
                    str += '<div class="xinxi_type" data-id="'+v.id+'">' +
                        '<p>'+v.type+'</p>' +
                        '<p>'+v.huafei+'</p>' +
                        '<p>'+v.liuliang+'</p>' +
                        '</div>';
                }
            });
            $(".xinxi_tcxz_box").html(str);
        })
        .fail(function(err){console.log(err)});
    $(".xinxi_tcxz_box").on("click",".xinxi_type",function(){
        $(this).addClass("active").siblings().removeClass("active");
    });
    $(".xinxi_more").on("click",function(){
       $(".xinxi_more_box").toggleClass("none");
    });

    $.when($.ajax("../data/xinxi.json"))
        .done(function(data){
            var tellPhone = data.phone;
            var str = '';
            tellPhone.forEach(function(v,i){
                str += '<span data-id="'+i+'">'+v.toString().slice(0,3)+' '+v.toString().slice(3,7)+' '+v.toString().slice(-4)+'</span>';
            });
            $(".plug_box").html(str);
        }).fail(function(err){console.log(err)});

    $(".xinxi_tell_more").on("click",function(){
       $(".plug_box").show();
    });
    $(".plug_box").on("click","span",function(){
        $(this).addClass("active").siblings().removeClass("active");
       var str = "已选 "+$(this).text();
        $(".xinxi_tell_active").html(str).attr("data-id",$(this).data('id'));
        $(".xinxi_tell_more").addClass("active")
        $(".plug_box").hide();
        nextColor();
    });
    $(".tiwatchid").on("input",function(){
        nextColor();
    });
    function nextColor(){
        //console.log($(".xinxi_type.active").data("id"))
        if($(".xinxi_tell_active").text().indexOf('已选') != -1 && $(".tiwatchid").val() != ""){
            $(".xinxi_next_btn").addClass('active');
        }else{
            $(".xinxi_next_btn").removeClass('active');
        }
    }

    //下一步
    $(".xinxi_next_btn").on("click",function(){
        if($(this).hasClass('active')){
            var locationStr = 'massages.html?phoneId='+$(".xinxi_tell_active").data("id")+"&taocanId="+$(".xinxi_type.active").data("id");
            window.location.href = locationStr;
        }
    })
});