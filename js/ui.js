
$(function(){

	console.log(window.screen.availWidth);




	$(".close").click(function () {
			$('#dialog').hide();
	});

	$("#showToast").on('touchend mouseup',function(){
		$('#toast').show();
	     setTimeout(function () {
	         $('#toast').hide();
	     }, 2000);
    event.preventDefault();// 阻止默认行为
  })

	// $("#showToast").click(function () {
  //     $('#toast').show();
  //     setTimeout(function () {
  //         $('#toast').hide();
  //     }, 2000);
  // });



	$("#showLoading").click(function () {
      $('#loading').show();
      setTimeout(function () {
          $('#loading').hide();
      }, 2000);
  });

	/*向上弹出菜单*/
	$("#showActionsheet-up").on('click',function () {
		//alert(bb)
		//$(".actionsheet-up").css("top","220px")
	    $('#mask').show().focus().addClass("transition-toggle") ;//获取焦点然后在改变背景色
	    $('.actionsheet-up').removeClass("actionsheet-animationDown").addClass("actionsheet-animationInUp")
	});

	$(".mask-transition").click(function () {
    $('#mask').removeClass("transition-toggle").one('transitionend', function () {
        $('#mask').hide();
    });
    $('.actionsheet-up').removeClass("actionsheet-animationInUp").addClass("actionsheet-animationDown");

	});
	$("#actionsheet-cancel").click(function(){
      $('#mask').removeClass("transition-toggle").one('transitionend', function () {
          $('#mask').hide();
      });
      $('.actionsheet-up').removeClass("actionsheet-animationInUp").addClass("actionsheet-animationDown");
  })

	/*向左侧滑菜单*/
	function scrollLeft(){
		$("#scrollLeft").on('click',function () {
			$('.scroll-left').css('z-index', '5');
		  $('.mask').show().focus().addClass("transition-toggle") ;//获取焦点然后在改变背景色
		  $('.scroll-leftbox').css('transform', 'translateX(50%)');
		});

		$("#scrollLeft01").on('click',function () {
			$('.scroll-left').css('z-index', '5');
		  $('.mask').show().focus().addClass("transition-toggle") ;//获取焦点然后在改变背景色
		  $('.scroll-leftbox').css('transform', 'translateX(50%)');
			$('.actionsheet-box01').css('transform', 'translateX(-50%)');
		});

		$(".mask").click(function () {
			$('.mask').removeClass("transition-toggle").one('transitionend', function () {
      	$('.mask').hide();
        $('.scroll-left').css('z-index', '2');
      });
      $('.scroll-leftbox').css({'transform':'translateX(100%)',})
			$('.actionsheet-box01').css('transform', 'translateX(0%)');
		});





	}
	scrollLeft();

	// tab切换
	function tabCut(){
		$(".tabBox").on("click","li",function(){
			var titNum = $(this).index();
			$(".tabBox li").removeClass('active');
			$(this).addClass("active");
			$(".tabCon").hide();
			$(".tabCon").eq(titNum).show();
		})
	}
	tabCut();


















})
