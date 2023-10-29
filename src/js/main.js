$(document).ready(function(){
  $("#tabs .tabs-item").click(function(e){
    let id = $(this).attr("id");
    $("#tabs .tabs-item").removeClass("active");
    $(this).addClass("active");
    $(".tabs-content .tabs").addClass("hidden");
    $(".tabs-content ."+id).removeClass("hidden");
  })
  $('.stories .owl-carousel').owlCarousel({
    loop:true,
    autoPlay: true,
    dots: false,
    items: 1,
    nav: true,
    navText: ["<img src='pic/pre-arow.png'>","<img src='pic/nex-arrow.png'>"]
  });
  $('.owl-carousel').owlCarousel({
    loop:true,
    autoPlay: true,
    items: 1,
    dots: false,
    responsive : {
      1024 : {
        dots: true,
      }
  }
  });
  $(".tab-title-video li").click(function(e){
    $(".tab-title-video li").removeClass("active");
    $(this).addClass("active");
    let id = $(this).attr("id");
    $(".tab-content-video > div").addClass("hidden");
    $("."+id).removeClass("hidden");
  });
  $(".menu-mobile .open").click(function(e){
    $("#navbar-default").toggleClass("hidden");
  })
});