$(function(){

    $('.btn-up').on({
        'click':function(){
            $('html, body').animate({scrollTop: 0}, 600);
        }
    });

    $(window).on({
        'scroll':function(){
            if($(window).scrollTop() > $(window).height()){
                $('.btn-up').fadeIn();
            } else {
                $('.btn-up').fadeOut();
            }
            if($(window).scrollTop() + $(window).height() > $('.site__footer').offset().top + 16) {
                $('.btn-up').css({ bottom: $(window).scrollTop() + $(window).height() - $('.site__footer').offset().bottom + 55 });
            } else {
                $('.btn-up').css({ bottom: '55px' });
            }
        }
    });

    $('.menu__btn').on({
        'click':function(){
            var curElem = $(this).parent();

            if (curElem.hasClass('active')) {
                curElem.removeClass('active');
            } else {
                curElem.addClass('active');
            }

        }
    });

    $('.swiper-container').each(function () {
        Slider($(this));
    })

} );

var Slider = function (obj) {

    //private properties
    var _self = this,
        _next = obj.parent().find($('.swiper-button-next')),
        _prev = obj.parent().find($('.swiper-button-prev')),
        _obj = obj;

    //private methods
    var _addEvents = function () {

        },
        _init = function () {
            _addEvents();
        };
    if (_obj.parent().hasClass('coutry-slider')) {
        var _swiperPromo = new Swiper(_obj, {
            nextButton: _next,
            prevButton: _prev,
            slidesPerView: 13,
            spaceBetween: 0,
            loop: true,
            breakpoints: {
                768: {
                    slidesPerView: 5
                }
            }
        });
    }

    //public properties

    //public methods

    _init();
};