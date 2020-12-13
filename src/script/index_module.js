define([], () => {
    return {
        init: function () {
            //代码实现
            //1.鼠标移入左侧的li元素，显示右侧的大盒子。
            const $list = $('.menu li');
            const $cartlist = $('.cartlist');
            const $items = $('.item');
            $list.hover(function () {
                $cartlist.show();
                $(this).addClass('active').siblings('li').removeClass('active');
                //切换内容发生改变，不同的li对应不同的内容块。
                $items.eq($(this).index()).show().siblings('.item').hide();

                //改变右侧的大盒子的位置
                let $scrolltop = $(window).scrollTop();
                let $bannertop = $('.banner').offset().top;
                if ($scrolltop > $bannertop) {
                    $cartlist.css({
                        top: $scrolltop - $bannertop
                    });
                } else {
                    $cartlist.css({
                        top: 0
                    });
                }
            }, function () {
                $cartlist.hide();
                $(this).removeClass('active');
            });

            //2.鼠标移入右侧的大盒子，大盒子依然显示隐藏
            $cartlist.hover(function () {
                $(this).show();
            }, function () {
                $(this).hide();
            });


            //tab切换
            const $titles = $('.phone .title_r span'); //6个标题
            const $contents = $('.phone .span7 .content'); //6块内容
            $titles.hover(function(){
                $(this).addClass('t_span').siblings('span').removeClass('t_span');
                $contents.eq($(this).index()).addClass('c_show').siblings('.content').removeClass('c_show');
            },function(){});
            //tab切换板块1
            const $content_1 = $('.span7 .content_1 ul');
            $.ajax({
                url: 'http://127.0.0.1/dashboard/China%20Eastern/php/listdata.php',
                dataType: 'json'
            }).done(function (data) {
                let $strhtml = '';
                $.each(data, function (index, value) {
                    if(index<7){
                        $strhtml += `
                        <li>
                            <img src="${value.url}"/>
                        </li>
                        `;
                    }
                    
                });
                $content_1.html($strhtml);
            });
            //tab切换板块2
            const $content_2 = $('.span7 .content_2 ul');
            $.ajax({
                url: 'http://127.0.0.1/dashboard/China%20Eastern/php/listdata.php',
                dataType: 'json'
            }).done(function (data) {
                let $strhtml = '';
                $.each(data, function (index, value) {
                    if(index>=7&&index<15){
                        $strhtml += `
                        <li>
                            <img src="${value.url}"/>
                            <h6>${value.title}</h6>
                            <span>￥${value.price}</span>
                            <p>￥${value.integral}</p>
                        </li>
                        `;
                    }
                    
                });
                $content_2.html($strhtml);
            });
            //tab切换板块3
            const $content_3 = $('.span7 .content_3 ul');
            $.ajax({
                url: 'http://127.0.0.1/dashboard/China%20Eastern/php/listdata.php',
                dataType: 'json'
            }).done(function (data) {
                let $strhtml = '';
                $.each(data, function (index, value) {
                    if(index>=15&&index<23){
                        $strhtml += `
                        <li>
                            <img src="${value.url}"/>
                            <h6>${value.title}</h6>
                            <span>￥${value.price}</span>
                            <p>￥${value.integral}</p>
                        </li>
                        `;
                    }
                    
                });
                $content_3.html($strhtml);
            });
            //tab切换板块4
            const $content_4 = $('.span7 .content_4 ul');
            $.ajax({
                url: 'http://127.0.0.1/dashboard/China%20Eastern/php/listdata.php',
                dataType: 'json'
            }).done(function (data) {
                let $strhtml = '';
                $.each(data, function (index, value) {
                    if(index>=23&&index<31){
                        $strhtml += `
                        <li>
                            <img src="${value.url}"/>
                            <h6>${value.title}</h6>
                            <span>￥${value.price}</span>
                            <p>￥${value.integral}</p>
                        </li>
                        `;
                    }
                    
                });
                $content_4.html($strhtml);
            });
            //tab切换板块5
            const $content_5 = $('.span7 .content_5 ul');
            $.ajax({
                url: 'http://127.0.0.1/dashboard/China%20Eastern/php/listdata.php',
                dataType: 'json'
            }).done(function (data) {
                let $strhtml = '';
                $.each(data, function (index, value) {
                    if(index>=31&&index<39){
                        $strhtml += `
                        <li>
                            <img src="${value.url}"/>
                            <h6>${value.title}</h6>
                            <span>￥${value.price}</span>
                            <p>￥${value.integral}</p>
                        </li>
                        `;
                    }
                    
                });
                $content_5.html($strhtml);
            });
            //tab切换板块6
            const $content_6 = $('.span7 .content_6 ul');
            $.ajax({
                url: 'http://127.0.0.1/dashboard/China%20Eastern/php/listdata.php',
                dataType: 'json'
            }).done(function (data) {
                let $strhtml = '';
                $.each(data, function (index, value) {
                    if(index>=39&&index<47){
                        $strhtml += `
                        <li>
                            <img src="${value.url}"/>
                            <h6>${value.title}</h6>
                            <span>￥${value.price}</span>
                            <p>￥${value.integral}</p>
                        </li>
                        `;
                    }
                    
                });
                $content_6.html($strhtml);
            });
            //检测是否用户已经登录
            if (localStorage.getItem('loginname')) {
                $('.admin').show();
                $('.login').hide();
                $('.admin span').html(localStorage.getItem('loginname'));
            }

            //退出登录 - 删除本地存储
            $('.admin a').on('click', function () {
                $('.admin').hide();
                $('.login').show();
                localStorage.removeItem('loginname');
            });

        }
    }
});