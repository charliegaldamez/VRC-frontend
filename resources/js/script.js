jQuery(document).ready(function ($) {
    jQuery(".side-menu li").click(function(){
        jQuery(".side-menu li").each(function(a,i){
           jQuery(this).removeClass("active"); 
        });
       jQuery(this).addClass("active"); 
    });
    jQuery(".side-menu li.moto").click(function(){
        jQuery(".side-menu .sub-items.moto").toggle(500);
    });
});