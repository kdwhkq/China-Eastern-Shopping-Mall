define([], () => {
    return{
        init:function(){
            let $form = $('form');
            let $username = $('.username');
            let $ID = $('.zhengjian');
            let $password = $('.password');
            let $tel = $('.tel');
            let $span = $('form span');
            
            

            //设置标记
            let $userflag = true;
            let $IDflag = true;
            let $passflag = true;
            let $telflag = true;
            //姓名
            $username.on('blur', function() {
                let $value = $(this).val(); //当前表单的值
                if ($value !== '') {
                    let $strLen = $value.replace(/[\u4e00-\u9fa5]/g, '**').length; //中文当做两个字符
                    if ($strLen > 0 && $strLen <= 10) {
                        let $reg = /^[\u4e00-\u9fa5]+$/;
                        if ($reg.test($value)) {
                            $span.eq(0).html('√').css('color', 'green');
                            $userflag = true;
                            console.log( $username.val());
                        } else {
                            $span.eq(0).html('用户名格式有误').css('color', 'red');
                            $userflag = false;
                        }
                    } else {
                        $span.eq(0).html('用户名长度有误').css('color', 'red');
                        $userflag = false;
                    }
                } else {
                    $span.eq(0).html('用户名不能为空').css('color', 'red');
                }
            });

            //身份证
            // /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
            $ID.on('blur',function(){
                let $value = $(this).val();
                if($value !== ''){
                    let $reg = /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
                    if($reg.test($value)){
                        $span.eq(1).html('√').css('color', 'green');
                        $telflag = true;
                        $.ajax({
                            type: 'post',
                            url: 'http://10.31.161.131/dashboard/China%20Eastern/php/reg.php',
                            data: {
                                ID: $ID.val()
                            }
                        }).done(function(data) {
                            if (!data) { //不存在
                                $span.eq(0).html('√').css('color', 'green');
                            } else { //存在
                                $span.eq(0).html('该用户名已存在').css('color', 'red');
                            }
                        });
                    }else{
                        $span.eq(1).html('身份证号格式有误').css('color', 'red');
                        $IDflag = false;
                    }

                }else{
                    $span.eq(1).html('身份证号不能为空').css('color', 'red');
                    $IDflag = false;
                }
            });

            //密码
            //^[0-9]{8}$ 
            $password.on('focus',function(){
                $span.eq(2).html('请输入8位数字作为密码').css('color', '#333');
            });

            $password.on('blur',function(){
                let $value = $(this).val();
                if($value !== ''){
                    let $reg = /^[0-9]{8}$/;
                    if($reg.test($value)){
                        $span.eq(2).html('√').css('color', 'green');
                        $telflag = true;
                    }else{
                        $span.eq(2).html('密码格式有误').css('color', 'red');
                        $passflag = false;
                    }
                }else{
                    $span.eq(2).html('密码不能为空').css('color','red');
                    $passflag = false;
                }
            });

            //手机号
            $tel.on('focus', function() {
                $span.eq(3).html('请输入11位正确的手机号码').css('color', '#333');
            });

            $tel.on('blur', function() {
                let $value = $(this).val(); //当前表单的值
                if ($value !== '') {
                    let $reg = /^1[3|4|5|6|7|8|9]\d{9}$/;
                    if ($reg.test($value)) {
                        $span.eq(3).html('√').css('color', 'green');
                        $telflag = true;
                    } else {
                        $span.eq(3).html('手机号码格式有误').css('color', 'red');
                        $telflag = false;
                    }
                } else {
                    $span.eq(3).html('手机号码不能为空').css('color', 'red');
                    $telflag = false;
                }
            });



            //阻止表单的直接跳转
            $form.on('submit',function(){
                if($username.val() === ''){
                    $span.eq(0).html('用户名不能为空').css('color','red');
                    $userflag = false;
                }
                if($ID.val() === ''){
                    $span.eq(1).html('身份证号不能为空').css('color','red');
                    $IDflag = false;
                }
                if($password.val() === ''){
                    $span.eq(2).html('密码不能为空').css('color','red');
                    $passflag = false;
                }
                if($tel.val() === ''){
                    $span.eq(3).html('手机号码不能为空').css('color','red');
                    $telflag = false;
                }
                if (!$userflag || !$IDflag || !$passflag || !$telflag) {
                    return false;
                }
                
            });

            


        }
    }
});

/* ! function($) {
    const $username = $('.username');
    const $submit = $('.submit');
    const $span = $('span');

    $username.on('blur', function() {
        $.ajax({
            type: 'post',
            url: 'http://localhost/JS2010/week06/Day%2029-Day%2031_jquery/loginregistry/php/reg.php',
            data: {
                xingming: $username.val()
            }
        }).done(function(data) { //data就是后端返回的结果
            if (!data) { //不存在
                $span.css('color', 'green').html('√');
            } else { //存在
                $span.css('color', 'red').html('该用户名已存在');
            }
        });
    });
    $submit.on('click',function(){
        alert(1);
    })
}(jQuery); */