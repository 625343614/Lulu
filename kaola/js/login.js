$(function(){
	$('.denglu a').click(function(){
		var uname=$('input[name=uname]').val();
		var upwd=$('input[name=upwd]').val();
		login(uname,upwd);
	});

	
	
	//清空
    $('.times').on('click',function(){
        //$(this).prev().children().val('');
        $('.text input').val('');
    });
	//登陆方法
	function login(username,upwd){
		$.ajax({
			url:'./data/check_login.php',
			data:{'uname':username,'upwd':upwd},
			type:'post',
            dataType:'json',
         	success:function(data){//服务器请求成功运行这里
                //data是服务器返回的数据
                //验证账号密码
                if(data.code!=1){
					$('#tishi').html('<i></i>用户名或密码有误');
				}else{
					/*var uname=$('input[name=uname]').val();
					console.log($('#top_box .login'));??????
					$('#top_box .login').html('欢迎+uname+');*/
					alert(data.msg);
					setInterval(function(){
			          location.href='./index.html';
			        },3000);
				}
            },
            error:function(){//服务器请求失败运行这里
                alert('网络出错~');
            }
		})
	}
})