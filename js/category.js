$(document).ready(function(){$(".header .menu .open").click(function(e){$(this).hasClass("close")?($(".overlay").addClass("hidden"),$(".menu-mobile").removeClass("active"),$(this).removeClass("close")):($(".overlay").removeClass("hidden"),$(".menu-mobile").addClass("active"),$(this).addClass("close")),$(".header .account").removeClass("active"),$(".form-search").hasClass("active")&&($(".form-search").removeClass("active"),$(".search .close-search").addClass("open-search"),$(".search .open-search").removeClass("close-search"))}),$(".menu-mobile li.main > a").click(function(e){$(".menu-mobile li.main").removeClass("active"),$(this).parent().addClass("active")}),$(".menu-mobile li.main ul li").click(function(e){$(".menu-mobile li.main ul li").removeClass("active"),$(this).addClass("active")}),$(".overlay").click(function(e){$(".overlay").addClass("hidden"),$(".menu-mobile").removeClass("active"),$(".header .menu .open").removeClass("close")}),$(".bg-black-opacity").click(function(e){$(".bg-black-opacity").addClass("hidden"),$(".popup").addClass("hidden"),$(".sec-cart").addClass("hidden")}),$(".popup .close").click(function(e){$(".bg-black-opacity").addClass("hidden"),$(".popup").addClass("hidden")}),$(document).on("click",".search .open-search",function(){$(this).addClass("close-search"),$(this).removeClass("open-search"),$(".form-search").addClass("active"),$(".header .account").removeClass("active"),$(".header .menu .open").hasClass("close")&&($(".overlay").addClass("hidden"),$(".menu-mobile").removeClass("active"),$(".header .menu .open").removeClass("close"))}),$(document).on("click",".search .close-search",function(){$(this).addClass("open-search"),$(this).removeClass("close-search"),$(".form-search").removeClass("active")}),$(".open-account").click(function(e){$(".form-search").hasClass("active")&&($(".form-search").removeClass("active"),$(".search .close-search").addClass("open-search"),$(".search .open-search").removeClass("close-search")),$(".header .menu .open").hasClass("close")&&($(".overlay").addClass("hidden"),$(".menu-mobile").removeClass("active"),$(".header .menu .open").removeClass("close")),$(this).parent().toggleClass("active")}),$(document).on("click",function(e){document.getElementById("header-desktop").contains(e.target)||($(".form-search").removeClass("active"),$(".search > div").addClass("open-search"),$(".search > div").removeClass("close-search"),$(".account").removeClass("active"),$(".header .menu ul li").removeClass("active"),$(".menu-desktop .menu-item").addClass("hidden"))}),$(".header .cart").click(function(e){$(".bg-black-opacity").removeClass("hidden"),$(".sec-cart").removeClass("hidden"),$(".header .account").removeClass("active"),$(".form-search").hasClass("active")&&($(".form-search").removeClass("active"),$(".search .close-search").addClass("open-search"),$(".search .open-search").removeClass("close-search"))}),$(".sec-cart .head-cart .close").click(function(e){$(".bg-black-opacity").addClass("hidden"),$(".sec-cart").addClass("hidden")}),$(".display-number .value .minus").click(function(e){let a=$(this).parent().find(".number").val();a>1&&(a=parseInt(a)-1),$(this).parent().find(".number").val(a)}),$(".display-number .value .plus").click(function(e){let a=$(this).parent().find(".number").val();a>=1&&(a=parseInt(a)+1),$(this).parent().find(".number").val(a)})}),$(document).ready(function(){new Swiper(".swiper-container",{scrollbar:{el:".swiper-scrollbar"},slidesPerView:"auto",paginationClickable:!0,spaceBetween:30});$(".colors ul li").click(function(e){let a=$(this).data("color");$(".product-item").attr("src",a)}),$(".sec-filter ul li").click(function(e){$(".sec-filter ul li").removeClass("active");let a=$(this).data("title"),s=$(this).data("number");$(".wrapper-inner h1").html(a+"<span>("+s+" Sản phẩm)</span>"),$(this).addClass("active")})});