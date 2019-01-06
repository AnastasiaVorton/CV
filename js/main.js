// Top navigation is done referencing https://stackoverflow.com/questions/6848269/using-jquery-to-find-current-visible-element-and-update-navigation

window.onscroll = function () {
    navigationHandler()
};

// Get the header
let header = document.getElementById("nav-list");

// Get the offset position of the navbar
let sticky = header.offsetTop;

function navigationHandler() {
    if (window.pageYOffset > window.innerHeight) {
        header.classList.add("sticky");

        let cutoff = $(window).scrollTop();
        let curSec = $.find('.current');
        let curID = $(curSec).attr('id');

        if (curID === "projects" || curID === "bio") {
            $('.top-nav-a').addClass('white');
        } else {
            $('.top-nav-a').removeClass('white')
        }


        $('.section').each(function () {
            if ($(this).offset().top + $(this).height() + 65 > cutoff) {
                $('.section').removeClass('current');
                $(this).addClass('current');
                return false; // stops the iteration after the first one on screen
            }
        });

        if (curID !== 'home') {
            document.getElementById("nav-list").style.backgroundColor = getComputedStyle(document.getElementById(curID)).backgroundColor;
        } else {
            document.getElementById("nav-list").style.backgroundColor = '#F4ECD6';
        }

    } else {
        header.classList.remove("sticky");
    }
}

