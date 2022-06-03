$(document).ready(function(){
    /*-----------Navbar Shrink----------------*/
    $(window).on("scroll",function(){
        if($(this).scrollTop() > 90){
            $(".navbar").addClass("navbar-shrink");
        }
        else{
            $(".navbar").removeClass("navbar-shrink");
        }
    })
    /*-----------------video popup------------*/
    const videoSrc = $("#player-1").attr("src");
    $(".video-play-btn, .video-popup-close").on("click", function(){
        if($(".video-popup").hasClass("open")){
            $(".video-popup").removeClass("open");
            $("#player-1").attr("src","")
        }
        else{
            $(".video-popup").addClass("open");
            if($("#player-1").attr("src") == ''){
                $("#player-1").attr("src","videoSrc")
            }
        }
    });

    /*--------------features carousel-------------*/
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }

});
/* ------ app screenshots carousel--------------*/
$('.screenshots-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:4,
        },
    }

});
/* ------ testimonial carousel--------------*/
$('.testimonials-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        },
    }

});
/* ------ Team carousel--------------*/
$('.team-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        },
    }

});
/*---------------scrollit ------------*/
$.scrollIt({
        topOffset:-50
    });
/*------------------ navbar collapse-------------*/
$(".nav-link").on("click", function(){
    $(".navbar-collapse").collapse("hide");
})
});
