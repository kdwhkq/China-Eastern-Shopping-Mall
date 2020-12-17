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

            //轮播图
            const $lunbo = $('.lunbotu');
            const $piclist = $('.lunbotu ul li');
            const $left = $('#left');
            const $right = $('#right');
            let $num = 0;
            // let $timer1 = null;
            let $timer2 = null;
            $piclist.hover(function(){
                $left.show();
                $right.show();
            },function(){
                $left.hide();
                $right.hide();
            });

            $left.hover(function(){
                $left.show();
                $right.show();
                clearInterval($timer2);
            },function(){
                $timer2 = setInterval(function () {
                    $right.click();
                }, 3000);
            });
            
            $right.hover(function(){
                $left.show();
                $right.show();
                clearInterval($timer2);
            },function(){
                $timer2 = setInterval(function () {
                    $right.click();
                }, 3000);
            });

            //2.左右箭头切换
            $right.on('click', function () {
                $num++;
                if ($num > $piclist.length - 1) {
                    $num = 0;
                    
                }
                tabswitch();
            });

            $left.on('click', function () {
                $num--;
                if ($num < 0) {
                    $num = $piclist.length - 1;
                }

                tabswitch()
            });

            function tabswitch() {
                $piclist.eq($num).stop(true).animate({
                    opacity: 1
                }).siblings().stop(true).animate({
                    opacity: 0
                });
            }

            //3.自动轮播
            $timer2 = setInterval(function () {
                $right.click();
            }, 3000);

            //4.鼠标控制定时器停止和开启。
            $lunbo.hover(function () {
                clearInterval($timer2);
            }, function () {
                $timer2 = setInterval(function () {
                    $right.click();
                }, 3000);
            });



            //tab切换
            const $titles = $('.phone .title_r span'); //6个标题
            const $contents = $('.phone .span7 .content'); //6块内容
            $titles.hover(function () {
                $(this).addClass('t_span').siblings('span').removeClass('t_span'); 
                $contents.eq($(this).index()).addClass('c_show').siblings('.content').removeClass('c_show');
            }, function () {});
            //tab切换板块1
            const $content_1 = $('.span7 .content_1 ul');
            $.ajax({
                url: 'http://10.31.161.131/dashboard/China%20Eastern/php/indexdata.php',
                dataType: 'json'
            }).done(function (data) {
                let $strhtml = '';
                $.each(data, function (index, value) {
                    if (index < 7) {
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
                url: 'http://10.31.161.131/dashboard/China%20Eastern/php/indexdata.php',
                dataType: 'json'
            }).done(function (data) {
                let $strhtml = '';
                $.each(data, function (index, value) {
                    if (index >= 7 && index < 15) {
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
                url: 'http://10.31.161.131/dashboard/China%20Eastern/php/indexdata.php',
                dataType: 'json'
            }).done(function (data) {
                let $strhtml = '';
                $.each(data, function (index, value) {
                    if (index >= 15 && index < 23) {
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
                url: 'http://10.31.161.131/dashboard/China%20Eastern/php/indexdata.php',
                dataType: 'json'
            }).done(function (data) {
                let $strhtml = '';
                $.each(data, function (index, value) {
                    if (index >= 23 && index < 31) {
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
                url: 'http://10.31.161.131/dashboard/China%20Eastern/php/indexdata.php',
                dataType: 'json'
            }).done(function (data) {
                let $strhtml = '';
                $.each(data, function (index, value) {
                    if (index >= 31 && index < 39) {
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
                url: 'http://10.31.161.131/dashboard/China%20Eastern/php/indexdata.php',
                dataType: 'json'
            }).done(function (data) {
                let $strhtml = '';
                $.each(data, function (index, value) {
                    if (index >= 39 && index < 47) {
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

            //楼梯效果
            const $loutinav = $('#loutinav'); //整个楼梯
            const $louti = $('#loutinav dl'); //获取7个dl
            const $louceng = $('.louceng'); //7个楼层
            //第一步：显示隐藏左侧的楼梯：触发滚轮，根据对应的scrollTop值确定是否显示左侧的楼梯。
            //滚动条top>=500 显示左侧楼梯


            // $louti.hover(function(){
            //     $(this).addClass('display').siblings(dl).removeClass('display')
            // },function(){});
                                                                                                     
            //封装函数
            function scroll() {
                var $scrolltop = $(window).scrollTop(); //获取滚动条的top值
                if ($scrolltop >= 500) {
                    $loutinav.show();
                } else {
                    $loutinav.hide();
                }
                // $('title').html($scrolltop);
                // 第四步：通过触发滚动条，通过楼层将对应的楼梯添加激活的样式。
                // 如果楼层的top值>滚动条的top值,给楼层对应的楼梯添加激活状态。
                $louceng.each(function(index, element) {
                    var $loucengtop = $(element).offset().top; //每一个楼层的top值。
                    if ($loucengtop >= $scrolltop) {
                        //每次触发滚动条，滚动条的top值都会发生变化。
                        $louti.removeClass('on'); //移除前面所有的激活状态
                        $louti.eq(index).addClass('on'); //给满足条件的添加状态
                        return false; //终止循环
                    }
                });
        
            }
            scroll();
        
        
            $(window).on('scroll', function() {
                scroll();
            });
        
            //第二步：点击左侧的楼梯，楼层运动到对应的位置
            //思路：将每个楼层的top值求出，然后给滚动条的top值
            //document.documentElement.scrollTop = 100;
        
            $louti.on('click', function() {
                //点击楼梯，会触发滚轮事件，这个时候激活状态一直加载。干掉滚轮事件。
                $(window).off('scroll');
                //求出每个楼层的top值。
                $(this).addClass('on').siblings('dl').removeClass('on'); //当前点击的添加类名。
                var $loucengtop = $louceng.eq($(this).index()).offset().top; //每个楼层的top
                $('html').animate({
                    scrollTop: $loucengtop //每个楼层的top值求出，然后给滚动条的top值
                }, function() {
                    $(window).on('scroll', function() {
                        scroll();
                    });
                });
            });
        
            //第三步：回到顶部
            // $('.last').on('click', function() {
            //     $('html').animate({
            //         scrollTop: 0
            //     });
            // });

            //检测是否用户已经登录
            if (localStorage.getItem('loginID')) {
                $('.admin').show();
                $('.login').hide();
                $('.register').hide();
                $('.spaner').hide();
                $('.admin span').html(localStorage.getItem('loginID'));
            }

            //退出登录 - 删除本地存储
            $('.logout').on('click', function () {
                $('.admin').hide();
                $('.login').show();
                $('.register').show();
                $('.spaner').show();
                localStorage.removeItem('loginID');
            });

        }
    }
});