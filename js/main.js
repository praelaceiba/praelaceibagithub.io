// Escribiendo 

const texto = document.querySelector(".sec-texto");

const escribiendo = () => {
    setTimeout(() => {
        texto.textContent = "P"
    }, 0);
    setTimeout(() => {
        texto.textContent = "Pr"
    }, 200);
    setTimeout(() => {
        texto.textContent = "Pro"
    }, 400);
    setTimeout(() => {
        texto.textContent = "Proy"
    }, 600);
    setTimeout(() => {
        texto.textContent = "Proye"
    }, 800);
    setTimeout(() => {
        texto.textContent = "Proyec"
    }, 1000);
    setTimeout(() => {
        texto.textContent = "Proyect"
    }, 1200);
    setTimeout(() => {
        texto.textContent = "Proyecto"
    }, 1400);
    setTimeout(() => {
        texto.textContent = "Proyect"
    }, 1800);
    setTimeout(() => {
        texto.textContent = "Proyect"
    }, 2000);
    setTimeout(() => {
        texto.textContent = "Proyec"
    }, 2200);
    setTimeout(() => {
        texto.textContent = "Proye"
    }, 2400);
    setTimeout(() => {
        texto.textContent = "Proy"
    }, 2600);
    setTimeout(() => {
        texto.textContent = "Pro"
    }, 2800);
    setTimeout(() => {
        texto.textContent = "Pr"
    }, 3000);
    setTimeout(() => {
        texto.textContent = "P"
    }, 3200);
    setTimeout(() => {
        texto.textContent = "A"
    }, 3600);
    setTimeout(() => {
        texto.textContent = "Am"
    }, 3800);
    setTimeout(() => {
        texto.textContent = "Amb"
    }, 4000);
    setTimeout(() => {
        texto.textContent = "Ambi"
    }, 4200);
    setTimeout(() => {
        texto.textContent = "Ambie"
    }, 4400);
    setTimeout(() => {
        texto.textContent = "Ambien"
    }, 4600);
    setTimeout(() => {
        texto.textContent = "Ambient"
    }, 4800);
    setTimeout(() => {
        texto.textContent = "Ambienta"
    }, 5000);
    setTimeout(() => {
        texto.textContent = "Ambiental"
    }, 5200);
    setTimeout(() => {
        texto.textContent = "Ambient"
    }, 5400);
    setTimeout(() => {
        texto.textContent = "Ambien"
    }, 5600);
    setTimeout(() => {
        texto.textContent = "Ambie"
    }, 5800);
    setTimeout(() => {
        texto.textContent = "Ambi"
    }, 6000);
    setTimeout(() => {
        texto.textContent = "Amb"
    }, 6200);
    setTimeout(() => {
        texto.textContent = "Am"
    }, 6400);
    setTimeout(() => {
        texto.textContent = "A"
    }, 6600);
    setTimeout(() => {
        texto.textContent = "E"
    }, 7000);
    setTimeout(() => {
        texto.textContent = "Es"
    }, 7200);
    setTimeout(() => {
        texto.textContent = "Esc"
    }, 7400);
    setTimeout(() => {
        texto.textContent = "Esco"
    }, 7600);
    setTimeout(() => {
        texto.textContent = "Escol"
    }, 7800);
    setTimeout(() => {
        texto.textContent = "Escola"
    }, 8000);
    setTimeout(() => {
        texto.textContent = "Escolar"
    }, 8200);
    setTimeout(() => {
        texto.textContent = "Escola"
    }, 8400);
    setTimeout(() => {
        texto.textContent = "Escol"
    }, 8600);
    setTimeout(() => {
        texto.textContent = "Esco"
    }, 8800);
    setTimeout(() => {
        texto.textContent = "Esc"
    }, 9000);
    setTimeout(() => {
        texto.textContent = "Es"
    }, 9200);
    setTimeout(() => {
        texto.textContent = "E"
    }, 9400);
}

escribiendo();
setInterval
(escribiendo, 9500);


(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);
