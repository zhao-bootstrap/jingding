$(".J_tab_ul .tab_ul_link").bind("mouseover",function(){
	/*$(this).parents(".J_tab_ul").find(".tab_ul_link").removeClass("active");
	$(this).addClass("active");*/
	// $(this).parents(".J_tab_ul").find(".J_sub_tab_ul").show();
});

$(".J_sub_tab_ul .J_sub_tab_ul_li").bind("mouseover",function(){
	$(this).parents(".J_sub_tab_ul").find(".J_sub_tab_ul_li").removeClass("active");
	$(this).addClass("active");
	// $(this).parents(".J_tab_ul").find(".J_sub_tab_ul").show();
});

$(".J_tab_ul .has-submenu").bind("mouseover",function(){
	
	$(this).children(".J_sub_tab_ul").show();

});

$(".J_tab_ul .has-submenu").bind("mouseout",function(){
	$(this).parents(".J_tab_ul").find(".J_sub_tab_ul").hide();
	$(this).children(".J_sub_tab_ul").hide();

});
