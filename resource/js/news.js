$(".J_newscentre_rt_nav li").bind("click",function(){
	$(this).index();
	$(this).parents(".J_newscentre_rt_nav").find("li").removeClass("active");
	$(this).addClass("active");
	$(".J_newscentre_left_cnt li").hide();
	$(".J_newscentre_left_cnt li").eq($(this).index()).show();
});
