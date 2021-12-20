 (function($) {
	'use strict';     
     function custom_elements() {
        jQuery('.de_tab').find('.de_tab_content > div').hide();
         jQuery('.de_tab').find('.de_tab_content > div:first').show();
         jQuery('li').find('.v-border').fadeTo(150, 0);
         jQuery('li.active').find('.v-border').fadeTo(150, 1);
         jQuery('.de_nav li').on("click", function() {
            jQuery(this).parent().find('li').removeClass("active");
            jQuery(this).addClass("active");
            jQuery(this).parent().parent().find('.v-border').fadeTo(150, 0);
            jQuery(this).parent().parent().find('.de_tab_content > div').hide();
            var indexer = jQuery(this).index(); //gets the current index of (this) which is #nav li
            jQuery(this).parent().parent().find('.de_tab_content > div:eq(' + indexer + ')').fadeIn(); //uses whatever index the link has to open the corresponding box 
            jQuery(this).find('.v-border').fadeTo(150, 1);
         });
         jQuery('.de_review').find('.de_tab_content > div').hide();
         jQuery('.de_review').find('.de_tab_content > div:first').show();
         //jQuery('.de_review').find('.de_nav li').fadeTo(150,.5);
         jQuery('.de_review').find('.de_nav li:first').fadeTo(150, 1);
         jQuery('.de_nav li').on("click", function() {
             jQuery(this).parent().find('li').removeClass("active");
             //jQuery(this).parent().find('li').fadeTo(150,.5);
             jQuery(this).addClass("active");
             jQuery(this).fadeTo(150, 1);
             jQuery(this).parent().parent().find('.de_tab_content > div').hide();
             var indexer = jQuery(this).index(); //gets the current index of (this) which is #nav li
             jQuery(this).parent().parent().find('.de_tab_content > div:eq(' + indexer + ')').show(); //uses whatever index the link has to open the corresponding box 
         });
     }
     jQuery(document).ready(function() {
         custom_elements(); 
     });
 })(jQuery); 
 $(window).load(function() {         
		 new WOW().init();		 		 
		 // hide preloader after loaded
         jQuery('#preloader').delay(500).fadeOut(500);
		 window.dispatchEvent(new Event('resize')); 
});