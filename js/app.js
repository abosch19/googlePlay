$(document).ready(function (){
  $(window).scroll(function(){
    if($(window).scrollTop() >= $('.main').offset().top){
      $('aside').css({
        "position":"fixed",
        "top": "0px",
        "height":"100vh"
      });
      $('.container').css({
        "position":"fixed",
        "top": "0px"
      });
      $('.main-articles').css({
        "width": "100%",
        "margin-left": "220px"
      });
    } else {
      $('aside').css({
        "position":"static"
      });
      $('.container').css({
        "position":"static"
      });
      $('.main-articles').css({
        "width": "-moz-calc(100% - 220px)",
        "margin-left": "0px"
      });
    }
  });
})
