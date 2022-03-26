

$("document").ready(function(){

    $(window).scroll(function() {
  
    var scroll = $('body').scrollTop();
  
       if (scroll >= 150) {
          $(function () {
              $(".all-small-boxes").hide();
      $(".scrolled-menu").css("display","block");
      $(".scrolled-menu").css("position","fixed");
          })
       } else {
           $(".all-small-boxes").show();
             $(".scrolled-menu").css("display","none");
  
       }
           
    });
    
    $(".drop-down-menu").hide();
    
    $(".fa-bars").on("click", function(){
       $(".drop-down-menu").toggle();
     });
    
    
    $(document).click(function(e) {
      //if the menu is visible
      if($(".scrolled-menu").show()) {
          //if the click is outside of menu
          if($(e.target).closest(".scrolled-menu").length === 0){
              $('.drop-down-menu').hide();
          } 
      }       
  });
  
     
  });
  