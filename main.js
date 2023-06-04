$(function() {
    /* Shop Slider
    ===================================== */
    let multipleItems = $("#shopSlider");

    multipleItems.slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1
    });



    /* Reviews Slider
    ===================================== */

    let reviewsSlider = $("#reviewsSlider");

    reviewsSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        speed: 500
    });


    let header = $(".header");
    let headerH = header.innerHeight();
    let scrollTop = $(window).scrollTop();



    /* Smooth Scroll to sections
    ===================================== */

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let scrollEl = $(this).data("scroll");
        
        let scrollElPos = $(scrollEl).offset().top;
        console.log(scrollElPos);

        $("html, body").animate({
            scrollTop: scrollElPos - headerH
        }, 500)
    });



    /* ScrollSpy
    =====================================*/

    let windowH = $(window).height();
    scrollSpy(scrollTop);

    $(window).on("scroll", function() {
        scrollTop = $(this).scrollTop();
        scrollSpy(scrollTop);
    });

    function scrollSpy(scrollTop) {
        $("[data-scrollspy]").each(function() {
            let $this = $(this);
            let sectionId = $this.data('scrollspy');
            let sectionOffset = $this.offset().top;
            sectionOffset = sectionOffset - (windowH * 0.33333);

            if(scrollTop >= sectionOffset) {
                $('#nav [data-scroll]').removeClass('header__nav-link_active');
                $('#nav [data-scroll="' + sectionId + '"]').addClass('header__nav-link_active');
            }

            if(scrollTop == 0) {
                $('#nav [data-scroll]').removeClass('header__nav-link_active');
            }
        });
    }
});
