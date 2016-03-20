$(document).ready(function() {
	var isshowmeunOpen = false;
    $('.meun').on('mouseenter',function(){
        if (isshowmeunOpen) return; // 已經開了就返回
        isshowmeunOpen = true;
        $('.headnav ul').css({'border-radius': '0 0 0px 20px'});
        // .stop 是假設正在收起中則把收起的動作停掉
        $('.downmeun').stop().slideDown();
    });
    
	$(document).on('touchstart mousedown', function (e) {
        if (isshowmeunOpen) { // 開啟中
            var down = e.target;
            // 點的東西不是downmeun 或其下內容
            if (down != $('.downmeun')[0]
                && !$(down).closest('.downmeun')[0]) {
                // 關掉 downmeun
                isshowmeunOpen = false;
                // .stop 是假設正在打開中則把打開的動作停掉
                $('.downmeun').stop().slideUp();              
                $('.headnav ul').css({'border-radius': '0 0 20px 20px'});
            }
        }        
    });
    
    var isMobliemenuOpen = false;
    $('.hamburger-menu').tap(function(){
        if (isMobliemenuOpen) return; // 已經開了就返回
        isMobliemenuOpen = true;
        $('.headnav ul').css({'border-radius': '0 0 0px 20px'});
        // .stop 是假設正在收起中則把收起的動作停掉
        $('.mobliemenu').stop().slideDown();

    });

    // 如果在任何地方按下滑鼠或觸碰
    $(document).on('touchstart mousedown', function (e) {
        if (isMobliemenuOpen) { // 開啟中
            var target = e.target;
            // 點的東西不是 mobliemenu 或其下內容
            if (target != $('.mobliemenu')[0]
                && !$(target).closest('.mobliemenu')[0]) {
                // 關掉 mobliemenu
                isMobliemenuOpen = false;
                // .stop 是假設正在打開中則把打開的動作停掉
                $('.mobliemenu').stop().slideUp();                
                $('.headnav ul').css({'border-radius': '0 0 20px 20px'});
            }
        }
    });

});