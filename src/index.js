import "./main.scss"
import "magnific-popup"

    $('.popup-gallery').each(function () { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: 'a', // the selector for gallery item
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });
    $('.main-navigation-link').each(function () { 
       
        $(this).mouseover(function() {
            var color = '#'+Math.floor(Math.random()*16777000).toString(16);
            $(this).css("background-color", color);
        }  )
        $(this).mouseout(function() {
            console.log($(this))
            $(this).css("background-color", "#fff");
            
        })
    })


   