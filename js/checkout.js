$(document).ready(function(){$(".header .menu .open").click(function(e){$(this).hasClass("close")?($(".overlay").addClass("hidden"),$(".menu-mobile").removeClass("active"),$(this).removeClass("close")):($(".overlay").removeClass("hidden"),$(".menu-mobile").addClass("active"),$(this).addClass("close"))}),$(".menu-mobile li.main > a").click(function(e){$(".menu-mobile li.main").removeClass("active"),$(this).parent().addClass("active")}),$(".menu-mobile li.main ul li").click(function(e){$(".menu-mobile li.main ul li").removeClass("active"),$(this).addClass("active")}),$(".overlay").click(function(e){$(".overlay").addClass("hidden"),$(".menu-mobile").removeClass("active"),$(".header .menu .open").removeClass("close")}),$(".bg-black-opacity").click(function(e){$(".bg-black-opacity").addClass("hidden"),$(".popup").addClass("hidden")}),$(".popup .close").click(function(e){$(".bg-black-opacity").addClass("hidden"),$(".popup").addClass("hidden")}),$(document).on("click",".search .open-search",function(){$(this).addClass("close-search"),$(this).removeClass("open-search"),$(".form-search").addClass("active")}),$(document).on("click",".search .close-search",function(){$(this).addClass("open-search"),$(this).removeClass("close-search"),$(".form-search").removeClass("active")}),$(document).on("click",function(e){0===$(e.target).closest(".search").length&&($(".search > div").addClass("open-search"),$(".search > div").removeClass("close-search"),$(".form-search").removeClass("active"))})}),$(document).ready(function(){$(".scrollbar-inner").scrollbar(),$(".display-number .value .minus").click(function(e){let s=$(this).parent().find(".number").val();s>1&&(s=parseInt(s)-1),$(this).parent().find(".number").val(s)}),$(".display-number .value .plus").click(function(e){let s=$(this).parent().find(".number").val();s>=1&&(s=parseInt(s)+1),$(this).parent().find(".number").val(s)}),$(".change-address").click(function(e){$(".bg-black-opacity").removeClass("hidden"),$(".popup-address").removeClass("hidden")}),$(".add-new-address").click(function(e){$(".popup-address").addClass("hidden"),$(".popup-add-address").removeClass("hidden")}),$(".update-address").click(function(e){$(".popup-address").addClass("hidden"),$(".popup-add-address").removeClass("hidden")})});