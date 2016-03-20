$(document).ready(function() {
	console.log('Hi');

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

	$('.opened li').on('click',function(){
		$('.center').hide();
		$('.auto').css({'margin':'270px 0 0 0'});		
		$('.showcenter').slideDown();		
	});	

	$('.center li').on('click',function(){
		$('.center').hide();
		$('.auto').css({'margin':'270px 0 0 0'});		
		$('.showcenter').slideDown();		
	});	
	$(function() {
	    $( ".nearbymenu" ).accordion();	    
	  });
	function meun1(){
		$('.traffic').hide();
		$('.Advantages').hide();
		$('.Reviews').hide();
		$('.nearby').hide();
		$('.auto').css({'height':'4000px'});
		$('.Introduction').slideDown(1000);		
		$('.menu1').css({'border': '3px solid black','border-radius':'10px'});
		$('.meun1').css({'background':'#888'});
		$('.menu2').css({'border-style':'none'});
		$('.menu3').css({'border-style':'none'});
		$('.menu4').css({'border-style':'none'});
		$('.menu5').css({'border-style':'none'});
		$('.meun5').css({'background':'none'});
		$('.meun3').css({'background':'none'});
		$('.meun2').css({'background':'none'});
		$('.meun4').css({'background':'none'});
	}	

	function meun2(){
		$('.Introduction').hide();
		$('.Advantages').hide();
		$('.Reviews').hide();
		$('.nearby').hide();
		$('.auto').css({'height':'1600px'});
		$('.traffic').slideDown(1000);		
		$('.menu2').css({'border': '3px solid black','border-radius':'10px'});
		$('.meun2').css({'background':'#888'});
		$('.menu1').css({'border-style':'none'});
		$('.menu3').css({'border-style':'none'});
		$('.menu4').css({'border-style':'none'});
		$('.menu5').css({'border-style':'none'});
		$('.meun1').css({'background':'none'});
		$('.meun3').css({'background':'none'});
		$('.meun5').css({'background':'none'});
		$('.meun4').css({'background':'none'});
	}	

	function meun3(){
		$('.Introduction').hide();
		$('.traffic').hide();
		$('.Reviews').hide();
		$('.nearby').hide();
		$('.auto').css({'height':'1800px'});
		$('.Advantages').slideDown(1000);		
		$('.menu3').css({'border': '3px solid black','border-radius':'10px'});
		$('.meun3').css({'background':'#888'});
		$('.menu1').css({'border-style':'none'});
		$('.menu2').css({'border-style':'none'});
		$('.menu4').css({'border-style':'none'});
		$('.menu5').css({'border-style':'none'});
		$('.meun1').css({'background':'none'});
		$('.meun4').css({'background':'none'});
		$('.meun2').css({'background':'none'});
		$('.meun5').css({'background':'none'});
	}

	function meun4(){
		$('.Introduction').hide();
		$('.traffic').hide();
		$('.Advantages').hide();
		$('.nearby').hide();
		$('.auto').css({'height':'2000px'});
		$('.Reviews').slideDown(1000);
		$('.menu4').css({'border': '3px solid black','border-radius':'10px'});
		$('.meun4').css({'background':'#888'});
		$('.menu1').css({'border-style':'none'});
		$('.menu3').css({'border-style':'none'});
		$('.menu2').css({'border-style':'none'});
		$('.menu5').css({'border-style':'none'});
		$('.meun1').css({'background':'none'});
		$('.meun2').css({'background':'none'});
		$('.meun3').css({'background':'none'});
		$('.meun5').css({'background':'none'});
	}
	
	function meun5(){
		$('.Introduction').hide();
		$('.traffic').hide();
		$('.Advantages').hide();
		$('.Reviews').hide();
		$('.auto').css({'height':'2000px'});
		$('.nearby').slideDown(1000);
		$('.menu5').css({'border': '3px solid black','border-radius':'10px'});
		$('.meun5').css({'background':'#888'});
		$('.menu1').css({'border-style':'none'});
		$('.menu3').css({'border-style':'none'});
		$('.menu2').css({'border-style':'none'});
		$('.menu4').css({'border-style':'none'});
		$('.meun1').css({'background':'none'});
		$('.meun3').css({'background':'none'});
		$('.meun2').css({'background':'none'});
		$('.meun4').css({'background':'none'});
	}
	$('.meun1').on('click',meun1);
	$('.menu1').on('click',meun1);

	$('.meun2').on('click',meun2);
	$('.menu2').on('click',meun2);

	$('.meun3').on('click',meun3);
	$('.menu3').on('click',meun3);

	$('.meun4').on('click',meun4);		
	$('.menu4').on('click',meun4);
	
	$('.meun5').on('click',meun5);		
	$('.menu5').on('click',meun5);

	$('.opend').click(function(){
		$(this).hide();
		$('.any').show();

	});
	$('.any').click(function(){
		$(this).hide(); 
		$('.opend').show();
	});
});