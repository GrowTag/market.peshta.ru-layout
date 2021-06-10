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

$(document).ready(function() {
    $('.js-select2').select2({
        placeholder: "Выберите город",
        maximumSelectionLength: 2,
        language: "ru"
    });
});
