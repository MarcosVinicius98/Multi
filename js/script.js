$('.open-menu').click(function(){
    $('.menu-wrapper').slideToggle()
    $('main')[0].classList.toggle('d-none')
    $('footer')[0].classList.toggle('d-none')
})
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
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 1,
                centerMode:true,
              }
            },
        ],
       
    });

    $('.company-slide').slick({
        slidesToShow: 4,
        prevArrow: '.company-left',
        nextArrow: '.company-right',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            },
        ],
    });

    $('.slides-gallery').slick({
        slidesToShow: 1,
        centerMode: true,
        centerPadding:'10vw',
        prevArrow: '.gallery-left',
        nextArrow: '.gallery-right',
    });

    $('.features-slick').slick({
        slidesToShow: 1,
        prevArrow: '.features-left',
        nextArrow: '.features-right'
    });
    $('.slides-enterprise').slick({
        slideToShow: 1,
        dots: true,
        prevArrow: '.left-arrow',
        nextArrow: '.right-arrow'
    })

})

$('.plus-button').click(function(){
  $(this.nextElementSibling).slideToggle()
})