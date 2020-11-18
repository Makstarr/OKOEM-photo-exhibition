import {
    run
} from "./app/app";
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

   function hidePreloader(){
    $('.preloader').addClass("hidden");
    console.log( $('.preloader'))
   }