$(function(){
	window.onscroll=function(){
		var top = document.body.scrollTop | document.documentElement.scrollTop;
		if(top>100){
			$('#header').css('display','block');
		}else{
			$('#header').css('display','none');
		}
		if(top>600){
			$('.lbarnew').css('top','150px');
		}else{
			$('.lbarnew').css('top','900px');
		}
	}

	//顶部菜单弹出
	overAndOut('.phone_kaola>a','.sjweixin');
	overAndOut('.li_3','.sup_li_3');
	overAndOut('.li_4','.sup_li_4');
	overAndOut('.li_7','.sup_li_7');
	//所有分类
	overAndOut('#top_caps','#sort_box');	
	$('#sort_box li').on('mouseover',function(){
        $(this).children()[4].style.display="block";
    });
    $('#sort_box li').on('mouseout',function(){
	   $(this).children()[4].style.display="none";
    });
    //图片轮播
	var len=$('.banner-imgs li').length;
		var index=0;
		var timer=null;
		//定时器自动轮播
	function run(){
			timer=setInterval(function(){
			index++;
			if(index>len-1){
				index=0;
			}
			$('.banner-imgs li').eq(index).css('display','block').siblings().css('display','none');
			//页码z
			$('#page_box li').eq(index).addClass('current').siblings().removeClass('current');
		},2100)
	}
    run();
	//鼠标移入移出
	$('#banner').hover(function(){
		clearInterval(timer);
	},function(){
		run();
	});
	//页码改变
	$('#page_box li').on('mouseover',function(){
		index = $(this).index();//获得对应的index
		$(this).addClass('current').siblings().removeClass('current');
		$('.banner-imgs li').eq(index).css('display','block').siblings().css('display','none');
	});
	//轮播图片点击前后按钮
   	$('.prev').click(function(){
   		index--;
   		if(index<0){
   			index=6;
   		}
   		$('.banner-imgs li').eq(index).css('display','block').siblings().css('display','none');
   		$('#page_box li').eq(index).addClass('current').siblings().removeClass('current');
   	});
   	$('.next').click(function(){
   		index++;
   		if(index>len-1){
   			index=0;
   		}
   		$('.banner-imgs li').eq(index).css('display','block').siblings().css('display','none');
   		$('#page_box li').eq(index).addClass('current').siblings().removeClass('current');
   	});
   	//产品轮播效果
	function lunb(ch){
		//console.log(ch);//lb1 lb2
		var aaa=$("."+ch+">.lasthot");
		//console.dir(aaa);
		var len2 = aaa.length;
		//console.log(len2);

		var index2 = 0;
		var timer2 = null;

		function lunbo() {
			timer2 = setInterval(function () {
				index2++;
				if (index2 > 2) {
					index2 = 0;
				}
				//console.log('.'+ch+' .p_page li',$('.'+ch+' .p_page li').eq(index2));
				$('.'+ch+'>.lasthot').eq(index2).css('display', 'block').siblings('.lasthot').css('display', 'none');
				$('.'+ch+' .p_page li').eq(index2).addClass("current").siblings().removeClass("current");
			}, 1500);
		}
		lunbo();
		//鼠标移入移出
		$('.'+ch+'').hover(function () {
			clearInterval(timer2);
		}, function () {
			lunbo();
		});
		$('.'+ch+ ' .p_page li').on('mouseover', function () {
			index2 = $(this).index();
			console.log(index2);
			$(this).addClass('current').siblings().removeClass('current');
			$('.'+ch+'>.lasthot').eq(index2).css('display', 'block').siblings('.lasthot').css('display', 'none');
		});
	}
	var a="lb1";
	//console.log(lb1);
	lunb(a);
	var b="lb2";
	lunb(b);
})
//子弹出框方法函数
function overAndOut(select,showHideEle){
    $(select).mouseover(function(){
        $(showHideEle).css('display','block');
    });
    $(select).mouseout(function(){
        $(showHideEle).css('display','none');
    });
}




   