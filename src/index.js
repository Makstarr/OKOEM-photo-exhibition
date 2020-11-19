import "./main.scss"
import "magnific-popup"


/* ROUTING FUNCTION */
const checkThePath = () => {
    let path = document.location.hash.slice(1)
    /* DEFAULT PAGE */
    if (path == "") {
        document.location.hash = "gran";
        path = "gran"
    }
    /* CHECK ROUTE */
    if (!($(this).hasClass("active"))) {
        $(".active").removeClass("active")
        $("." + path).each(function () {
            $(this).addClass("active")
        });
    }
}
/* RUN ROUTING BY DEFAULT */
checkThePath()

/* COPY YEAR */
$('.this-year').text(new Date().getFullYear())

/*INFORMATION SHOW BUTTON*/
$('.open-info-button').each(function () {
    $(this).on("click", function (e) {
        e.preventDefault();
        $(".information").toggleClass("slide-from")
        $("body").toggleClass("hidden-body")
        window.setTimeout(function () {
            $(".information").toggleClass("display-none")

        }, 0);
        window.setTimeout(function () {
            $(".information").toggleClass("slide-from")
        }, 1000)
    })
});

/*INFORMATION HIDE BUTTON*/
$('.information-hide').each(function () {
    $(this).on("click", function (e) {
        e.preventDefault();
        $("body").toggleClass("hidden-body")
        $(".information").toggleClass("slide-away")
        window.setTimeout(function () {
            $(".information").toggleClass("display-none")
            $(".information").toggleClass("slide-away")
        }, 1000);
    })
});

/* CHANGE ROUTE*/
$('.main-navigation-link').each(function () {
    $(this).on("click", function (e) {
        console.log("click")
        e.preventDefault()
        document.location.hash = $(this).attr("class").split(/\s+/)[0];
    });
})

/* CHECK FOR CHANGING ROUTE */
window.onhashchange = function () {
    checkThePath()
}


/*LIST OF HOVER RANDOM COLORS*/
const colorList=["#FFFF66","#FF9966","#FF9999","#CC66CC","#9999FF","#6666FF","#66CCFF","#99FF66",]

/*RANDOM CLORS ON HOVER FOR MENU ITEMS*/
$('.main-navigation-link').each(function () {
    $(this).mouseover(function () {
        $(this).css("background-color", colorList[Math.floor(Math.random() * 8)]);
    })
    $(this).mouseout(function () {
        $(this).css("background-color", "#fff");
    })
})

/* MAGNIFIC POPUP GALLERY FUNCTION*/
$('.popup-gallery').each(function () { 
    // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'a', 
        // the selector for gallery item
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
