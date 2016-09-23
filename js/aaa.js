var swiper1 = new Swiper('.xiaoxi', {
        paginationClickable: true,
        direction: 'vertical',
        autoplay: 3000,
        autoheight:false,
        loop:true
    });
$(function(){
	$('footer').on('click','li',function(){
		$(this).addClass('footer_bj').siblings().removeClass('footer_bj');
	});
});