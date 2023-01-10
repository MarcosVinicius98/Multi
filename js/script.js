$(function(){
    $('.slide-content').slick({
        slidesToShow: 1,
        prevArrow: '.arrow-left',
        nextArrow: '.arrow-right',
    });

    $('.slides-ventures').slick({
        slidesToShow: 3,
        prevArrow: '.left',
        nextArrow: '.right',
    })

    $('.company-slide').slick({
        slidesToShow: 4,
        prevArrow: '.company-left',
        nextArrow: '.company-right',
    })
})