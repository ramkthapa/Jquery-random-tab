$(document).ready(function(){

     /* Created function for the random Number */   
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        var randomNum = getRandomIntInclusive(0, 1);
        var selectedTab = $(".tabs-menu a")[randomNum];
        $(selectedTab.parentElement).addClass("current");
        var tabContent = $(selectedTab).attr("href");
        $(".tab-content").not(tabContent).css("display", "none");
    /* If tab mode */
    $(".tabs-menu a").click(function(event){
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn(); 
		 
    });
    /* If accordian mode */
	$(".accordian").click(function() {
        $(".tab-content").hide();
        var d_activeTab = $(this).attr("rel"); 
        $("#"+d_activeTab).fadeIn();
        
        $(".accordian").removeClass("d_active");
        $(this).addClass("d_active");
        
        $("ul.tabs li").removeClass("current");
        $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("current");
    });
});


	


