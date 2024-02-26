// Aguarda o evento de carregamento do DOM antes de executar o código
window.addEventListener('DOMContentLoaded', function(){

    // Declaração de uma função chamada initializeSlick
    function initializeSlick(){

        // Inicializa o plugin Slick no elemento com a classe 'blocks-container'
        $('.blocks-container').slick({
            
            // Configurações do Slick
            infinite: false,       // Permite ou impede a rotação infinita de slides
            slidesToShow: 3,        // Número de slides a serem exibidos ao mesmo tempo
            slidesToScroll: 1,       // Número de slides a serem percorridos ao avançar/retroceder
            responsive: [
                {
                  breakpoint: 1019,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
        });
    }

    // Chama a função initializeSlick para aplicar as configurações do Slick após o carregamento do DOM
    initializeSlick();
});
