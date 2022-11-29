"use strict";
window.onload = function () {
    loading.classList.add("hide");

    setTimeout(() => {
        loading.classList.add("d-none");
    }, 300);
};



$(window).scroll(function () {
    let scroll = jQuery(window).scrollTop();
    if (scroll >= 400) {
        // deskopt menu fixed adn color setting
        $("#navigation").addClass("sticky");
        $(".active").css("color", "#ffa45c");
        $(".card-color").css({ "background-color": "#ffa45c", "color": "#fff" });


        // mobile&tablet menu fixed adn color setting

        $("#mobile").addClass("sticky-mobile");
        $("#mobile").css({ "background-color": "#fff" });
        $("#mobile .navbar-brand").css({ "color": "#000" });
        $("#mobile .menu-icon").css({ "color": "#000" });
        $("#mobile #mobile-menu .navbar-mobile li a").css({ "color": "#000" });
        $("#mobile #mobile-menu .navbar-mobile li a.card-color").css({ "color": "#000", "background-color": "#ffa45c" });




    }
    else {
        // deskopt menu fixed adn color setting
        $("#navigation").removeClass("sticky");
        $(".active").css("color", "#000");
        $(".card-color").css({ "background-color": "#fff", "color": "#000" });


        // mobile&tablet menu fixed adn color setting

        $("#mobile").removeClass("sticky-mobile");
        $("#mobile").css({ "background-color": "#000" });
        $("#mobile .navbar-brand").css({ "color": "#fff" });
        $("#mobile .menu-icon").css({ "color": "#fff" });
        $("#mobile #mobile-menu .navbar-mobile li a").css({ "color": "#fff" });
        $("#mobile #mobile-menu .navbar-mobile li a.card-color").css({ "color": "#000" });






    }
});
let pageTop = document.getElementById("page-top");


$(document).ready(function () {

    //  menu open
    $(".menu-icon i").on("click", function () {
        $("#mobile-menu").toggleClass("d-none");
    });

    // plugin carusel
    $(".owl-carousel").owlCarousel();


    //  a href clcik page top 0px 
    $(pageTop).click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });

    // statictika section num increase
    let counters = [...document.querySelectorAll(".s-text strong")];
    counters.forEach(counter => {
        let value = counter.getAttribute("data-num");


        let count = 0;
        count = parseInt(counter.innerHTML);

        setInterval(() => {
            if (count < value) {
                count = count + 1;
                counter.innerHTML = count;
            }
            else {
                clearInterval();
            }

        }, 0.001);




    })


});

const autoplay = true;

$('.oc-1').owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1
        }
    }
})

$('.my-carousel').owlCarousel({

    loop: true,
    margin: 10,
    dots: true,
    autoplay: false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 3
        }
    }
})
$('.loop').owlCarousel({
    center: true,
    items: 2,
    loop: true,
    margin: 10,
    center: true,
    responsive: {
        600: {
            items: 4
        }
    }
});
$('.nonloop').owlCarousel({
    center: true,
    items: 2,
    loop: false,
    margin: 10,
    responsive: {
        600: {
            items: 4
        }
    }
});

const delet = [...document.getElementsByClassName("delet")];
$(delet).on("click", function () {
    $(this).parents("tr").remove();
});




