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
                $('.btn-up').css({ bottom: $(window).scrollTop() + $(window).height() - $('.footer').offset().top + 16 });
            } else {
                $('.btn-up').css({ bottom: '16px' });
            }
        }
    });

} );

var Shablon = function (obj) {
    this.obj = obj;


    this.init();
};
Shablon.prototype = {
    init: function () {
        var self = this;

        self.core = self.core();
        self.core.build();
    },
    core: function () {
        var self = this;

        return {
            addEvents: function () {

            },
            build: function () {
                self.core.addEvents();
            }
        };
    }
};

$(window).on({
    load: function () {
        
    }
});