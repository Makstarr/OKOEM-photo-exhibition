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
   /* $('.information-hide').each(function () { 
        $(this).mouseover(function() {
            var color = '#'+Math.floor(Math.random()*16777000).toString(16);
            $(this).css("background-color", color);
        }  )
        $(this).mouseout(function() {
            console.log($(this))
            $(this).css("background-color", "#161616");
            
        })
    })*/
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
    $('#this-year').html(new Date().getFullYear())

    $('.information-hide').each(function () { 
        $(this).on( "click", function(e) {
            console.log($(".information"))
            e.preventDefault();
            $("body").toggleClass("hidden-body")
            
            $(".information").toggleClass("slide-away")

           window.setTimeout(function () {
                $(".information").toggleClass("display-none")
                $(".information").toggleClass("slide-away")
            }, 1000);
            
            
        })
    });
    $('.open-info-button').each(function () { 
        $(this).on( "click", function(e) {
            console.log($(".information"))
            e.preventDefault();
            $(".information").toggleClass("slide-from")
            $("body").toggleClass("hidden-body")
            window.setTimeout(function () {
                $(".information").toggleClass("display-none")
           
        }, 0);
        window.setTimeout(function () {
        $(".information").toggleClass("slide-from")}
        , 1000)
        })
    });
    $('.main-navigation-link').each(function () { 
        $(this).on( "click", function(e) {
            e.preventDefault()
            if (!($(this).hasClass("active"))){
                $(".active").removeClass("active")
                console.log("."+$(this).attr("class").split(/\s+/)[0])
                $("."+$(this).attr("class").split(/\s+/)[0]).each(function () {
                    $(this).addClass("active")});
               // $(this).addClass("active")
            }
        });
    });
    