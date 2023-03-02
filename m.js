let = menuIcons = document.querySelectorAll('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcons.onclick = () => {
    menuIcons.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offsetTop = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100)
}

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text',{
    strings: ['Fronted Developer', 'Designer', 'Youtuber'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});





let telegram_bot_id = "5888454950:AAFE1qLd10cBw5-A-P1CVfnatH8GoZKNVKU";
// https://api.telegram.org/bot6200957174:AAFI8PcmEbAkIiGbrcMp-a6_Ngci2muR8r8/getupdates
let chat_id = 5477175368;
let name, email, number, subject, message;
let ready = function () {
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    number = document.getElementById("number").value;
    subject = document.getElementById("subject").value;
    message = document.getElementById("message").value;
    message = "Name: " + name + "\nEmail: " + email + "\nMobile number: " + number + "\nSubject: " + subject + "\nMessage: " + message;
};
function port() {
    event.preventDefault();
    ready();
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("number").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
    return false;
};