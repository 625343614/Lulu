$(function(){
    //验证
    //账户
    $('#username').on('blur',function(){
       verify_username();
    })  
    //密码
    $('#password').on('blur',function(){
    verify_password();
    })  
    //确认密码
    $('#conform_pwd').on('blur',function(){
     verify_conform_pwd();
    })  
    //图片验证码
    $('#captcha').on('blur',function(){
      verify_captcha();
    })
    //手机号
    $('#tel').on('blur',function(){
        verify_tel();
    }) 
    //手机验证码
    $('#tel_captcha').on('blur',function(){
        verify_tel_capcha();
    })
    //用户名
    function verify_username(){
         var username = $('#username').val();     
            var str_length = username.length;
            var reg = /^[a-z|\d|_]{6,18}$/i;
            if (str_length < 6 || str_length > 18) {
                $('#msg_username').html('<i></i>帐号须由6-18个字符组成');
                return false;
            }else if(!reg.test(username)){
                $('#msg_username').html('<i></i>请用字母、数字或下划线命名');   
                return false;
            }else{
                $('#msg_username').html('<b></b>').css('color','green');
                return true;
            }
    }
    //密码
    function verify_password(){
            var password = $('#password').val();     
            var str_length = password.length;
            var reg = /^[a-z|\d|_]{6,18}$/i;
            if (str_length <6 || str_length > 16) {
                $('#msg_password').html('<i></i>帐号须由6-16个字符组成');
                return false;
            }else if(!reg.test(password)){
                $('#msg_password').html('<i></i>请用字母、数字或下划线组成'); 
                return false;  
            }else{
                $('#msg_password').html('<b></b>').css('color','green');
                return true;
            }
    }
    //确认密码
    function verify_conform_pwd(){
            var conform_pwd = $('#conform_pwd').val(); 
            var password = $('#password').val(); 
            if (!password) {
                $('#msg_conform_pwd').html('<i></i>请输入密码').css('color','red');
                return false;
            }else if (conform_pwd !== password) {
                $('#msg_conform_pwd').html('<i></i>密码不一致').css('color','red');
                return false;
            }else{
                $('#msg_conform_pwd').html('<b></b>').css('color','green');
                return true;
            }
    }
    //验证码不能为空
    function verify_captcha(){
            var captcha = $('#captcha').val();  
            if (captcha == '') {
                $('#msg_captcha').html('<i></i>验证码不能为空').css('color','red');
                return false;
            }else{
                $('#msg_captcha').html('<b></b>').css('color','green');
                return true;
            }
    }
    //验证手机号
    function verify_tel(){
            var tel = $('#tel').val(); 
            console.log(tel);  
            var reg = /^[1][3|5|7|8|9][\d]{9}$/i;      
            if (!reg.test(tel)) {
                $('#msg_tel').html('<i></i>请输入正确的手机号').css('color','red');
                return false;
            }else{
                $('#msg_tel').html('<b></b>').css('color','green');
                return true;
            }
    }
    //手机验证码验证
    function verify_tel_capcha(){
            var tel_captcha = $('#tel_captcha').val();   
            if (!tel_captcha) {
                $('#msg_tel_captcha').html('<i></i>请输入验证码').css('color','red');
                return false;
            }else{
                $('#msg_tel_captcha').html('<b></b>').css('color','green');
                return true;
            }
    }
    //点击注册的时候机进行全部验证
    $('#form_register').on('submit',function(){
        if (!verify_username()) { return false; }

        if (!verify_password()) { return false; }

        if (!verify_conform_pwd()) { return false;}
        
        if (!verify_captcha()) { return false;}
        
        if (!verify_tel()){ return false;}
        
        if(!verify_tel_capcha()){ return false;}

        window.location.href='/my-project/kaola/kaola_index.html';
    })

    //小叉叉点击事件
    $('.times').on('click',function(){
        $(this).prev().val('');
    })


})
