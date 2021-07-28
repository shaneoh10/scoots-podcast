// Navbar collapse on menu item click
// https://mdbootstrap.com/support/general/auto-close-navbar-when-click-on-link-responsive-mode/

$('.nav-link').click(function () {
    $('.navbar-collapse').collapse('hide');
});


// Navbar appear on scroll up
// https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
}