ymaps.ready(function () {
    var pehtaAddress = new ymaps.Map('address-pehta-map', {
            center: [56.86025056782644,53.20580399999999],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(pehtaAddress.getCenter(), {

        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/peshta.png',
            // Размеры метки.
            iconImageSize: [98, 44],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-60, -50]
        })
    pehtaAddress.geoObjects
        .add(myPlacemark)
    pehtaAddress.behaviors.disable('scrollZoom')

    var deliveryMap = new ymaps.Map('delivery-map', {
            center: [56.86025056782644,53.20580399999999],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(deliveryMap.getCenter(), {

        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/peshta.png',
            // Размеры метки.
            iconImageSize: [98, 44],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-60, -50]
        })
    deliveryMap.geoObjects
        .add(myPlacemark)
    deliveryMap.behaviors.disable('scrollZoom')
});


if($('.js-select2').length !== 0){
    $('.js-select2').select2({
        placeholder: "Выберите город",
        maximumSelectionLength: 2,
        language: "ru",
    });
}
if($('.js-select-lk').length !== 0){
    $('.js-select-lk').select2({
        minimumResultsForSearch: -1
    });}
$('body').on('click','.js-calc',function (e){
    let total_attr = $(e.currentTarget).find('.js-calc-total')
    let size = total_attr.attr('data-number')
    size = size*1
    if($(e.target).hasClass('js-calc-inc')){
        size++;
    }
    if($(e.target).hasClass('js-calc-dec')){
        size--;
    }
    if(size < 0){
        size = 0;
    }
    $(e.currentTarget).find('.js-calc-total').attr('data-number',size)
    total_attr.html(size+' шт')
})

if($('.polzunok-5').length !== 0){
    $(".polzunok-5").slider({
        min: 0,
        max: 5000,
        values: [2000, 3000],
        range: true,
        animate: "fast",
        slide : function(event, ui) {
            $(".polzunok-input-5-left").val(ui.values[ 0 ]);
            $(".polzunok-input-5-right").val(ui.values[ 1 ]);
        }
    });
    $(".polzunok-input-5-left").val($(".polzunok-5").slider("values", 0));
    $(".polzunok-input-5-right").val($(".polzunok-5").slider("values", 1));
    $(".polzunok-container-5 input").change(function() {
        var input_left = $(".polzunok-input-5-left").val().replace(/[^0-9]/g, ''),
            opt_left = $(".polzunok-5").slider("option", "min"),
            where_right = $(".polzunok-5").slider("values", 1),
            input_right = $(".polzunok-input-5-right").val().replace(/[^0-9]/g, ''),
            opt_right = $(".polzunok-5").slider("option", "max"),
            where_left = $(".polzunok-5").slider("values", 0);
        if (input_left > where_right) {
            input_left = where_right;
        }
        if (input_left < opt_left) {
            input_left = opt_left;
        }
        if (input_left == "") {
            input_left = 0;
        }
        if (input_right < where_left) {
            input_right = where_left;
        }
        if (input_right > opt_right) {
            input_right = opt_right;
        }
        if (input_right == "") {
            input_right = 0;
        }
        $(".polzunok-input-5-left").val(input_left);
        $(".polzunok-input-5-right").val(input_right);
        if (input_left != where_left) {
            $(".polzunok-5").slider("values", 0, input_left);
        }
        if (input_right != where_right) {
            $(".polzunok-5").slider("values", 1, input_right);
        }
    });
}

if($('.js-open-filter').length !== 0){
    $('.js-open-filter').on('click',function (){
        $('#filter').toggleClass('uk-visible@m')
        $(this).toggleClass('filter_closed')
    })
}

if($('.main-slider').length !== 0){
    $('.main-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        fade: true,
        arrows: true,
        nextArrow: '<span class="arrow-next"></span>',
        prevArrow: '<span class="arrow-prev"></span>',
        asNavFor: '.thumb-slider'
    });

    $('.thumb-slider').slick({
        infinite: true,
        slidesToShow: 5,
        vertical: true,
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: true,
        asNavFor: '.main-slider',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    vertical: false,
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 960,
                settings: {
                    vertical: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 640,
                settings: {

                }
            }
        ]
    });
}
$('.js-show-password').on('click',function (){
    $(this).toggleClass('password__show');
    let input = $('.js-password')
    if(input.attr('type') === 'password'){
        input.attr('type','text')
    }else{
        input.attr('type','password')
    }
})



