console.log("Ops");

window.addEventListener('DOMContentLoaded', function(){
    function initializeSlick(){
        $('.blocks-container').slick({
            // Configurações do Slick
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1
        });
    }

    initializeSlick();
});
