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
  // Popular
  var popuplar = new Swiper('.sec-popuplar .swiper-container', {
     scrollbar: {
        el: '.swiper-scrollbar-popuplar',
      },
    slidesPerView: 'auto',
    paginationClickable: true,
    spaceBetween: 30
 });
 // Sản phẩm đã xem
	 var viewer = new Swiper('.sec-product-viewer .swiper-container', {
	    scrollbar: {
	       el: '.swiper-scrollbar-viewer',
	     },
	   slidesPerView: 'auto',
	   paginationClickable: true,
	   spaceBetween: 30
	});
  // Dự án
  let projects = $('.sec-projects-complete .owl-carousel');
	projects.owlCarousel({
    nav: true,
    navText:["<span class='prev'><img src='images/product/prev.svg'/></span>","<span class='next'><img src='images/product/next.svg'/></span>"],
    margin: 30,
    dots: false,
    autoplay: true,
    loop: true,
    responsive:{
       0:{
           nav: false,
           items: 1.5
       },
       768:{
         items: 2
       },
       1024:{
          items: 4
       }
   }
  });
  /* Detail Product */
  $(".detail-product .more a").click(function(e){
    if($(".detail-product .context").hasClass("active")){
      $(".detail-product .context").removeClass("active")
      $(".detail-product .more a").text("Xem thêm")
      $(".detail-product .more").removeClass("active")
    }
    else
    {
      $(".detail-product .context").addClass("active")
      $(".detail-product .more a").text("Thu gọn")
      $(".detail-product .more").addClass("active")
    }
  })
  /* Main Product */
  $('.rtl-slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      $("#counter").text(i + '/' + slick.slideCount);
    });
  $('.rtl-slider').slick({
      infinite: true,
  	  slidesToShow: 1,
  	  slidesToScroll: 1,
  	  arrows: true,
  	  fade: true,
  	  autoplay: true,
  	  asNavFor: '.rtl-slider-nav'
  	});
  $('.rtl-slider-nav').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    vertical: true,
    asNavFor: '.rtl-slider',
    centerMode: false,
    focusOnSelect: true,
    arrows: true,
  });
  /* Tab Products */
  $(".tab-products ul li").click(function(e){
    if($(this).hasClass('active'))
    {
      $(this).removeClass("active")
    }
    else{
      $(".tab-products ul li").removeClass("active")
      $(this).addClass("active")
    }
  })
  /* Item Context */
  $(".main-product .item-context .more a").click(function(e){
    if($(".item-context .context").hasClass("active"))
    {
      $(".item-context .context").removeClass("active")
      $(".main-product .item-context .more a").text("Xem thêm")
    }
    else{
      $(".item-context .context").addClass("active")
      $(".main-product .item-context .more a").text("Rút gọn")
    }
  })
  /* View Product */
  let view = $('.popup-view-product .owl-carousel');
  	view.owlCarousel({
      nav: true,
      navText:["<span class='prev'><img src='images/product/popup-prev.svg'/></span>","<span class='next'><img src='images/product/popup-next.svg'/></span>"],
      items: 1,
      dots: false,
      autoplay: true,
      loop: true,
    });
  $(document).on("click",".rtl-slider .rtl-slider-slide",function() {
      $(".bg-popup-view-product").removeClass("hidden");
      $(".popup-view-product").removeClass("hidden")
      $(".product-page").css("overflow","hidden")
  });
  $(".popup-view-product .close").click(function(e){
    $(".bg-popup-view-product").addClass("hidden");
    $(".popup-view-product").addClass("hidden")
    $(".product-page").css("overflow","auto")
  })
  $(".bg-popup-view-product").click(function(e){
    $(".bg-popup-view-product").addClass("hidden");
    $(".popup-view-product").addClass("hidden")
    $(".product-page").css("overflow","auto")
  })
  /* Item Size */
	$(".item-size ul li").click(function(e){
	  $(".item-size ul li").removeClass('active')
	  $(this).addClass("active")
		let old_price = $(this).data('price-old')
		let new_price = $(this).data('price-new')
		$(".display-number .price-old .price-value:nth-child(1)").text(old_price)
		$(".display-number .new .price-value:nth-child(1)").text(new_price)
	})
	/* Item Colors */
	$(".item-colors ul li").click(function(e){
	  $('.popup-view-product .owl-carousel').trigger('destroy.owl.carousel');
	  $('.rtl-slider').slick('destroy')
    $('.rtl-slider-nav').slick('destroy')
	  $(".item-colors ul li").removeClass("active")
	  $(this).addClass("active")
    let color = $(this).data('color')
    let data = {
       "color1" :
       [
         {
           "big": "images/product/product-big-color1.jpg",
           "thumb": "images/product/product-big-color1.jpg"
         }
       ],
       "color2" :
       [
         {
           "big": "images/product/product-big-color2.jpg",
           "thumb": "images/product/product-big-color2.jpg"
         },
         {
           "big": "images/product/product-big-color2.jpg",
           "thumb": "images/product/product-big-color2.jpg"
         }
       ],
       "color3" :
       [
         {
           "big": "images/product/product-big-color3.jpg",
           "thumb": "images/product/product-big-color3.jpg"
         },
         {
           "big": "images/product/product-big-color3.jpg",
           "thumb": "images/product/product-big-color3.jpg"
         },
         {
           "big": "images/product/product-big-color3.jpg",
           "thumb": "images/product/product-big-color3.jpg"
         }
       ],
       "color4" :
       [
         {
           "big": "images/product/product-big-color4.jpg",
           "thumb": "images/product/product-big-color4.jpg"
         },
         {
           "big": "images/product/product-big-color4.jpg",
           "thumb": "images/product/product-big-color4.jpg"
         },
         {
           "big": "images/product/product-big-color4.jpg",
           "thumb": "images/product/product-big-color4.jpg"
         },
         {
           "big": "images/product/product-big-color4.jpg",
           "thumb": "images/product/product-big-color4.jpg"
         }
       ],
       "color5" :
       [
         {
           "big": "images/product/product-big-color5.jpg",
           "thumb": "images/product/product-big-color5.jpg"
         },
         {
           "big": "images/product/product-big-color5.jpg",
           "thumb": "images/product/product-big-color5.jpg"
         },
         {
           "big": "images/product/product-big-color5.jpg",
           "thumb": "images/product/product-big-color5.jpg"
         },
         {
           "big": "images/product/product-big-color5.jpg",
           "thumb": "images/product/product-big-color5.jpg"
         },
         {
           "big": "images/product/product-big-color5.jpg",
           "thumb": "images/product/product-big-color5.jpg"
         }
       ]
     }
	  var content_big = "";
    var content_thumb = "";
    var content_big_owl = "";
    for(var i in data[color]){
	     content_big += '<div class="rtl-slider-slide"><img src="'+data[color][i].big+'" /></div>'
       content_thumb += '<div class="rtl-slider-slide"><div class="img"><img src="'+data[color][i].thumb+'" /></div></div>'
       content_big_owl += '<div class="item"><img src="'+data[color][i].big+'" /></div>'
    }
    $(".rtl-slider").html(content_big)
    $(".rtl-slider-nav").html(content_thumb)
    $(".popup-view-product .owl-carousel").html(content_big_owl)
     $('.rtl-slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
          var i = (currentSlide ? currentSlide : 0) + 1;
          $("#counter").text(i + '/' + slick.slideCount);
        });
      $('.rtl-slider').slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          fade: true,
          autoplay: true,
          asNavFor: '.rtl-slider-nav'
        });
      $('.rtl-slider-nav').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        vertical: true,
        asNavFor: '.rtl-slider',
        centerMode: false,
        focusOnSelect: true,
        arrows: true,
      });
      let view = $('.popup-view-product .owl-carousel');
        view.owlCarousel({
          nav: true,
          navText:["<span class='prev'><img src='images/product/popup-prev.svg'/></span>","<span class='next'><img src='images/product/popup-next.svg'/></span>"],
          items: 1,
          dots: false,
          autoplay: true,
          loop: true,
        });
  })
});
