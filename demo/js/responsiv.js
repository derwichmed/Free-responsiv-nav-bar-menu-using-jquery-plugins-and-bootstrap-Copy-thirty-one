$(function (){
   $('body > header .nav_bar .nav_bar_item').mouseover(function (){
      $('body > header .nav_bar .nav_bar_item .sub_menu').hide();
      $(this).find('.sub_menu').show();
   });
   
   isNavBarHidden = true;
   $('body > header .menu_icon img').click(function (){
        if(isNavBarHidden){
          $('body > header .nav_bar').fadeIn("slow");
          isNavBarHidden = false;
      }
        else{
          $('body > header .nav_bar').fadeOut("slwo");
          isNavBarHidden = true;
      }
   });
});