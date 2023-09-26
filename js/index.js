$( document ).ready(function() {
   $('.scrollbar-inner').scrollbar();
    $(".header .menu .open").click(function(e){
			if($(this).hasClass("close"))
			{
			  $(".overlay").addClass("hidden")
        $(".menu-mobile").removeClass("active")
				$(this).removeClass("close")
			}
			else
			{
			  $(".overlay").removeClass("hidden")
        $(".menu-mobile").addClass("active")
				$(this).addClass("close")
			}
			$(".header .account").removeClass("active")
      if($(".form-search").hasClass("active"))
      {
          $(".form-search").removeClass("active")
          $(".search .close-search").addClass("open-search")
          $(".search .open-search").removeClass("close-search")
      }
		})
		$(".menu-mobile li.main > a").click(function(e){
			$(".menu-mobile li.main").removeClass("active")
			$(this).parent().addClass("active")
		})
		$(".menu-mobile li.main ul li").click(function(e){
      $(".menu-mobile li.main ul li").removeClass("active")
      $(this).addClass("active")
    })
    $(".overlay").click(function(e){
      $(".overlay").addClass("hidden")
      $(".menu-mobile").removeClass("active")
      $(".header .menu .open").removeClass("close")
    })
    /* Close Popup */
    $(".bg-black-opacity").click(function(e){
      $(".bg-black-opacity").addClass("hidden")
      $(".popup").addClass("hidden")
      $(".sec-cart").addClass("hidden")
    })
    $(".popup .close").click(function(e){
      $(".bg-black-opacity").addClass("hidden")
      $(".popup").addClass("hidden")
    })
    /* Search */
    $(document).on('click','.search .open-search',function(){
       $(this).addClass("close-search")
       $(this).removeClass("open-search")
       $(".form-search").addClass("active")
       /* Account */
       $(".header .account").removeClass("active")
       /* Menu Mobile */
       if($(".header .menu .open").hasClass("close"))
       {
          $(".overlay").addClass("hidden")
          $(".menu-mobile").removeClass("active")
          $(".header .menu .open").removeClass("close")
       }
    });
    $(document).on('click','.search .close-search',function(){
       $(this).addClass("open-search")
       $(this).removeClass("close-search")
       $(".form-search").removeClass("active")
    });
    $(".open-account").click(function(e){
      /* Search */
      if($(".form-search").hasClass("active"))
      {
          $(".form-search").removeClass("active")
          $(".search .close-search").addClass("open-search")
          $(".search .open-search").removeClass("close-search")
      }
      /* Menu Mobile */
       if($(".header .menu .open").hasClass("close"))
       {
          $(".overlay").addClass("hidden")
          $(".menu-mobile").removeClass("active")
          $(".header .menu .open").removeClass("close")
       }
      $(this).parent().toggleClass("active")
    })
    $(document).on('click', function (e) {
       if (document.getElementById('header-desktop').contains(e.target)){
       } else{
          /* Form Search */
          $(".form-search").removeClass("active")
          $('.search > div').addClass("open-search")
          $('.search > div').removeClass("close-search")
          /* Account */
          $(".account").removeClass("active")
          /* Menu Desktop */
          $(".header .menu ul li").removeClass("active")
          $('.menu-desktop .menu-item').addClass("hidden")
       }
    });
    /* Menu Cart */
		$(".header .cart").click(function(e){
			$(".bg-black-opacity").removeClass("hidden")
			$(".sec-cart").removeClass("hidden")
			$(".header .account").removeClass("active")
			if($(".form-search").hasClass("active"))
      {
          $(".form-search").removeClass("active")
          $(".search .close-search").addClass("open-search")
          $(".search .open-search").removeClass("close-search")
      }
		})
		$(".sec-cart .head-cart .close").click(function(e){
      $(".bg-black-opacity").addClass("hidden")
      $(".sec-cart").addClass("hidden")
    })
		/* Add or Minius number of products */
    $(".display-number .value .minus").click(function(e){
      let value = $(this).parent().find(".number").val();
      if(value > 1){
        value = parseInt(value) - 1;
      }
      $(this).parent().find(".number").val(value)
    })
    $(".display-number .value .plus").click(function(e){
      let value = $(this).parent().find(".number").val();
      if(value >= 1){
        value = parseInt(value) + 1;
      }
      $(this).parent().find(".number").val(value)
    })
    /* Languages */
    $(".languages").click(function (e) {
      if($(".languages .en").hasClass("active")) {
          $(".languages .en").removeClass("active")
          $(".languages .vn").addClass("active")
      }
      else {
          $(".languages .en").addClass("active")
          $(".languages .vn").removeClass("active")
      }
    })
    /* Banner Ads */
    if($("#banner-ads").hasClass("banner-ads")){
      $(".header-mobile").css("top","80px")
      $(".main-mobile").addClass("top")
      $(".form-search").addClass("top")
      $(".menu-mobile").addClass("top")
    }
    $("#banner-ads .close").click(function(e){
      $("#banner-ads").addClass("hidden")
      $(".header-mobile").css("top","0")
      $(".main-mobile").removeClass("top")
      $(".form-search").removeClass("top")
      $(".menu-mobile").removeClass("top")
    })
});

$(document).ready(function() {
    // Slider
    let slider = $('.slider .owl-carousel');
    slider.owlCarousel({
      items:1,
      lazyLoad:true,
      loop:true,
      dots: false,
    });
    // Popular
    var swiper = new Swiper('.swiper-container', {
       scrollbar: {
          el: '.swiper-scrollbar',
        },
      slidesPerView: 'auto',
      paginationClickable: true,
      spaceBetween: 30
   });
    // Colors
    $(".colors ul li").click(function(e){
      let data = $(this).data("color");
      $(".product-item").attr("src",data);
    })
    // Services
    $(".services-item").hover( function (e) {
        $('.services-item').removeClass("active");
        $(this).addClass("active");
    });
    // Partners
		let partners = $('.sec-partners .owl-carousel');
		partners.owlCarousel({
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      loop:true,
      responsive:{
         0:{
             nav: false,
             items: 2
         },
         768:{
           items: 3
         },
         1024:{
            items: 5
         }
     }
    });
    // Projects
    let projects = $('.sec-projects .owl-carousel');
    projects.on('initialized.owl.carousel changed.owl.carousel', function(e) {
      if (!e.namespace)  {
        return;
      }
      var carousel = e.relatedTarget;
      $('#counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
    }).owlCarousel({
      items: 1,
      loop: true,
      autoplay: false,
      dots: false,
      responsive:{
           0:{
               nav: false
           },
           1024:{
               nav: true,
               navText:["<span class='prev'><svg width='28' height='54' viewBox='0 0 28 54' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M27 1L1 27L27 53' stroke='#424B5A' stroke-linecap='round' stroke-linejoin='round'/></svg></span>","<span class='next'><svg width='28' height='54' viewBox='0 0 28 54' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 53L27 27L1 1' stroke='#424B5A' stroke-linecap='round' stroke-linejoin='round'/></svg></span>"]
           }
       }
    });
    projects.on('dragged', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            projects.trigger('next.owl');
        } else {
            projects.trigger('prev.owl');
        }
        e.preventDefault();
    });
});
