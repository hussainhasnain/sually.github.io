$(document).ready(function(){

    /* For Mobile Responsiveness navigation using icofont 100% working */
    
    $('.js--menu').click(function() {
        var nav = $('.js--nav__list');
       
       nav.slideToggle(200);
        var icon = $('.js--menu');
        
        if (icon.hasClass('fa-bars')) {
            icon.addClass('fa-times');
            icon.removeClass('fa-bars');
        } else {
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
        }
        $(window).on('resize', function() {
    
            if ($(this).width() > 600) {
              $('.nav__list').css({
                'display': 'inline-block'
              });
            } else {
              $('.nav__list').css({
                'display': 'none'
              });
            }
          });
        
    });
    
    
    });