// $(document).ready(function(){
//     $('.arrow__right').click(function(e){
//         var $active_block = $('.span.active');
//         if($active_block.next('.span').length){
//             $('.span.active').removeClass('active').css('margin-left', '-100%');
//             $active_block.next('.span').addClass('active').width('100%');
//         }
//     });
//     $('.arrow__left').click(function(e){
//         var $active_block = $('.span.active');
//         if($active_block.prev('.span').length){
//             $('.span.active').removeClass('active').css('margin-left','10%');
//             $active_block.prev('.span').addClass('active').width('100%');
//         }
//     });
// });

var slideWidth = 1300;


// Устанавливаем ширину списка равную произведению ширины одного слайда на общее кол-во слайдов
$('.slider__list').width($('.slider__list').children().length * slideWidth);


$('.right').click(nextSlide);
$('.left').click(prevSlide);

function nextSlide() {
    // определяется текущий элемент
    // как определяет хрен его знает
    var currentSlide = parseInt($('.slider__list').data('current'));
    // 
    currentSlide++;
    if (currentSlide >= $('.slider__list').children().length) {
        // если элементов больше нет, то возвращает к первому элементу
        currentSlide = 0;
    }
    $('.slider__list').animate({ marginLeft: -currentSlide * slideWidth }, 300).data('current', currentSlide);
}

function prevSlide() {
    // определяется текущий элемент
    // как определяет хрен его знает
    var currentSlide = parseInt($('.slider__list').data('current'));
    currentSlide--;
    if (currentSlide < 0) {
        // если на первом элементе, то ведет к последнему элементу
        currentSlide = $('.slider__list').children().length - 1;
    }
    $('.slider__list').animate({ marginLeft: -currentSlide * slideWidth }, 300).data('current', currentSlide);
}