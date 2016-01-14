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

    $.each( $('.hidden-wrap'), function () {
        new ShowText( $(this) );
    });

} );

var ShowText = function (obj) {

    var _obj = obj,
        _btn = _obj.find(".game_descr-read"),
        _wrap = _obj.find(".game__hidden-wrap");

    var _addEvents = function () {
            _btn.on({
                click: function(){
                    var _innerHeight = _obj.innerHeight(),
                        _height = _obj.height(),
                        _paddings = _innerHeight - _height,
                        _wrapHeight = _wrap.innerHeight();
                    _btn.remove();
                    _obj.addClass("active");
                    _obj.animate({
                        'height': _paddings + _wrapHeight
                    }, 300);
                    setTimeout(function(){
                        _obj.css({
                            "height": "auto"
                        });
                    },400)
                }
            })
        },
        _init = function () {
            _addEvents();
        };


    _init();
};