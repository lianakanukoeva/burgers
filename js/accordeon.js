// $(document).ready(e =>{
//     let element = $('.nav__label');
//     let li = $('.nav__li');

//     element.on('click', function() {
//         $(this).parent().toggleClass('nav__li__active');
//     });

//     let menu = $('.acc-h1');

//     menu.on('click', function()
//     {
//         $(this).parent().toggleClass('accordeon__active');
//     })
// });

function Accordion() {
    let items = document.querySelectorAll('.nav__li');
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function(e) {
            e.preventDefault();
            if (items[i].classList.contains('nav__li__active')) {
                items[i].classList.remove('nav__li__active')
            } else {
                for (let i = 0; i < items.length; i++) {
                    items[i].classList.remove('nav__li__active')
                }
                items[i].classList.add('nav__li__active');
            }
        });
    }
}
Accordion();

function Accordion_1() {
    let items = document.querySelectorAll('.accordeon');
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function(e) {
            e.preventDefault();
            if (items[i].classList.contains('accordeon__active')) {
                items[i].classList.remove('accordeon__active')
            } else {
                for (let i = 0; i < items.length; i++) {
                    items[i].classList.remove('accordeon__active')
                }
                items[i].classList.add('accordeon__active');
            }
        });
    }
}
Accordion_1();