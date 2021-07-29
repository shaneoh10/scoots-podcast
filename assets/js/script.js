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

// Scroll Reveal 

ScrollReveal().reveal('.reveal-about', { distance: '100px', duration: 2000, origin: 'right'});
ScrollReveal().reveal('.reveal-listen', { distance: '100px', duration: 2000});
ScrollReveal().reveal('.reveal-contact', { distance: '100px', duration: 2000, origin: 'left'});

// EMAIL JS CODE

function sendMail(contactForm) {

    let name = contactForm.from_name.value
    let email = contactForm.from_email.value
    let message = contactForm.from_message.value

    document.getElementById('form').innerHTML = `
        <div class="text-center mt-5 mb-5 pt-5 pb-5">
            <img src="https://media.tenor.com/images/9da8a7cec33307a43306a32e54fbaca0/tenor.gif" height="160px">
        </div>`;
    emailjs.send('gmail', 'PriceChart', {
            'from_name': name,
            'from_email': email,
            'message': message
        })
        .then(

            function(response) {
                console.log('SUCCESS', response);
                document.getElementById('form').innerHTML = `
                <div class="text-center mt-5 mb-5 pt-5 pb-5">
                    <h2>Thanks for your message!</h2>
                </div>`;
            },
            function(error) {
                console.log('FAILED', error);
                document.getElementById('form').innerHTML = `
                <div class="text-center mt-5 mb-5 pt-5 pb-5">
                    <h2>Error sending message, please try again.</h2>
                </div>`;
            });

    return false;
}
