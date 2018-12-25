window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("nav-list");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > window.innerHeight) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


// $(window).bind('scroll', function () {
//     if ($(window).scrollTop() > $( window ).height()) {
//         $('.menu').addClass('sticky');
//     } else {
//         $('.menu').removeClass('sticky');
//     }
// });