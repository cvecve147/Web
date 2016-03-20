$(document).ready(function() {
	$('.menu li').on('click',function(){
		$('.menu li').hide();		
		$('.center').css({'width':'100%','margin':'0px'});		
		$('.showdown').slideDown();		
	});
	function meun1(){
		$('.showmenu2').hide();
		$('.showmenu3').hide();
		$('.meun1 h1').css({'border': '3px solid black','border-radius':'10px'});
		$('.showmenu1').show();
		$('.center').css({'height':'1000px'});
		$('.meun2 h1').css({'border-style':'none'});
		$('.meun3 h1').css({'border-style':'none'});
	}
	function meun2(){
		$('.showmenu1').hide();
		$('.showmenu3').hide();
		$('.meun2 h1').css({'border': '3px solid black','border-radius':'10px'});
		$('.showmenu2').show();
		$('.center').css({'height':'2100px'});
		$('.meun1 h1').css({'border-style':'none'});
		$('.meun3 h1').css({'border-style':'none'});
	}
	function meun3(){
		$('.showmenu2').hide();
		$('.showmenu1').hide();
		$('.meun3 h1').css({'border': '3px solid black','border-radius':'10px'});
		$('.showmenu3').show();	
		$('.center').css({'height':'1500px'});	
		$('.meun2 h1').css({'border-style':'none'});
		$('.meun1 h1').css({'border-style':'none'});
	}

	$('.meun1').on('click',meun1);

	$('.meun2').on('click',meun2);

	$('.meun3').on('click',meun3);
});