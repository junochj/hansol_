
var bw = document.documentElement.clientWidth;

setInterval("test()",0);
function test(){
    bw = document.documentElement.clientWidth;
    
    $(".visual,.visual_img li,visual_img img").css( { width: bw } );
    $(".visual_img").css({ width: bw * ( $(".visual_img li:last").index()+1) });


};


var ag_count = 0;
var vg = setInterval("ag()",3500);

function ag(){
   ag_count +=1;
   if( $(".visual_img li:last").index() >=  ag_count){ 
         $(".visual_img").animate({marginLeft:-bw * ag_count});
   }else{ 
         $(".visual_img li:not(:last)").appendTo(".visual_img");
         $(".visual_img").css({marginLeft:0});
         $(".visual_img").animate({marginLeft:-bw },function(){
                 $(".visual_img li:first").appendTo(".visual_img");
                 $(".visual_img").css({marginLeft:0});
                 ag_count=0;
         });
   };
};







$(function(){
  $(".gnb>li>ul").hide();
  $(".gnb>li>h2").mouseover(function(){
$(".header_wrap").stop().animate({height:168},300);
$(".gnb>li>ul").stop().fadeIn("fast");
});
$(".header_wrap").mouseleave(function(){
$(".header_wrap").stop().animate({height:156},300);
$(".gnb>li>ul").stop().fadeOut("fast");
});
  


$(function(){

   $(".btn_button1 li:not(:last)").click(function(){
           clearInterval(vg);
           $(".btn_button1 li:last").fadeIn("fast");

           ag_count = $(this).index();
           $(".visual_img").animate({ marginLeft: -bw * ag_count  });
	    a = 1;
            $(".btn_button1 li:last button");
   });




   var a = 0;

   $(".btn_button1 li:last").click(function(){
                   
         if(a == 0){ 

              clearInterval(vg);

              $(".btn_button1 li:last button").text(""); 
               a = 1; 


         }else{
              vg = setInterval("ag()",3500);

              $(".btn_button1 li:last button").text("");
               a = 0;

         }

   });



});




});


