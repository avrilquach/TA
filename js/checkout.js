$(document).ready(function(){$(".header .menu .open").click(function(e){$(this).hasClass("close")?($(".overlay").addClass("hidden"),$(".menu-mobile").removeClass("active"),$(this).removeClass("close")):($(".overlay").removeClass("hidden"),$(".menu-mobile").addClass("active"),$(this).addClass("close"))}),$(".menu-mobile li.main > a").click(function(e){$(".menu-mobile li.main").removeClass("active"),$(this).parent().addClass("active")}),$(".menu-mobile li.main ul li").click(function(e){$(".menu-mobile li.main ul li").removeClass("active"),$(this).addClass("active")}),$(".overlay").click(function(e){$(".overlay").addClass("hidden"),$(".menu-mobile").removeClass("active"),$(".header .menu .open").removeClass("close")}),$(".bg-black-opacity").click(function(e){$(".bg-black-opacity").addClass("hidden"),$(".popup").addClass("hidden")}),$(".popup .close").click(function(e){$(".bg-black-opacity").addClass("hidden"),$(".popup").addClass("hidden")})}),$(document).ready(function(){$(".scrollbar-inner").scrollbar(),$(".display-number .value .minus").click(function(e){let a=$(this).parent().find(".number").val();a>1&&(a=parseInt(a)-1),$(this).parent().find(".number").val(a)}),$(".display-number .value .plus").click(function(e){let a=$(this).parent().find(".number").val();a>=1&&(a=parseInt(a)+1),$(this).parent().find(".number").val(a)}),$(".change-address").click(function(e){$(".bg-black-opacity").removeClass("hidden"),$(".popup-address").removeClass("hidden")}),$(".add-new-address").click(function(e){$(".popup-address").addClass("hidden"),$(".popup-add-address").removeClass("hidden")}),$(".update-address").click(function(e){$(".popup-address").addClass("hidden"),$(".popup-add-address").removeClass("hidden")})});