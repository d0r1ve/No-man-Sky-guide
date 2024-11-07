$(document).ready(function () {

    // Инициализация библиотеки анимаций
    AOS.init({
        duration: 1000,
        once: true
    });

    // Плавная прокрутка к секциям
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        let target = $(this.getAttribute('href'));
        target.scrollTop(0);
        target.animate({
            scrollTop: target.offset().top
        }, 'smooth'); // Используем 'smooth' для плавной прокрутки
    });

    // Анимация навигационной панели при прокрутке
    let nav = $('.nav');
    let lastScroll = 0;

    $(window).scroll(function () {
        let currentScroll = $(window).scrollTop();

        if (currentScroll <= 0) {
            nav.css('transform', 'translateY(0)');
            return;
        }

        if (currentScroll > lastScroll && !nav.hasClass('scroll-down')) {
            nav.css('transform', 'translateY(-100%)');
        } else if (currentScroll < lastScroll && nav.hasClass('scroll-down')) {
            nav.css('transform', 'translateY(0)');
        }

        lastScroll = currentScroll;
    });

    // Создаём аудио-объект
    let audio = new Audio('images/harold-screamer.mp3');
    let audio_fart = new Audio('images/mega-fart.mp3');
    let audio_fart2 = new Audio('images/perd.mp3');

    $('.done-btn').one('click', function () {
        // Устанавливаем transform для ship-image при загрузке страницы
        $('.ship-image').css({
            'transform': 'translate(-50%, -10%)',
            'opacity': '1'
        });
        $(".hello-part").css({
            'opacity': '0'
        });
        setTimeout(function () {
            $(".hello-part").css({"pointer-events": "none"});
        }, 200);
        // Устанавливаем таймер на 6 секунд
        setTimeout(function () {
            $('.screamer-image').css({
                'transform': 'scale(1)',
                'opacity': '1'
            });
            audio.play();
            setTimeout(function () {
                audio_fart.play();
                setTimeout(function () {
                    audio_fart2.play();
                }, 1300);
            }, 1000);
        }, 6000);
    });
});
