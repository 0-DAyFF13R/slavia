// Shop slider
let multipleItems = $("#shopSlider");

multipleItems.slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1
});



/* Reviews Slider */

let reviewsSlider = $("#reviewsSlider");

reviewsSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    speed: 500
});