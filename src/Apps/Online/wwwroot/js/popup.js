const $popup = $('#popup');

function hidePopup(callback = null) {
    $('body').removeAttr('style');
    $popup.find('.popup').removeClass("popup-show popup-hide");
    $popup.hide();

    removeProductOpenClass();
    if (callback != null && callback != undefined) {
        callback();
    }
}

function showPopup(popupSelected, callback = null) {
    $('body').css('overflow', 'hidden');
    $(popupSelected).removeClass('popup-hide').addClass('popup-show');
    $popup.show();

    if (callback != null && callback != undefined) {
        callback();
    }
}

$(function () {
    $popup.on('click', '.popup-close, .swipe-popup-down', function () {
        const $currentPopup = $(this).parents('.popup');
        $currentPopup.addClass("popup-hide").removeClass("popup-show");

        setTimeout(function () {
            hidePopup();
        }, 300);
    });

    $popup.on('click', '.popup-backdrop', function () {
        hidePopup();
    });

    $popup.on('click', '.btn-view-cart', function () {
        hidePopup();
        $("#my-cart-count").trigger("click");
    });

    let deviceWindowWidth = $(window).outerWidth();
    $(window).resize(function () {
        const currentDeviceWindowWidth = $(window).outerWidth();
        if (currentDeviceWindowWidth != deviceWindowWidth) {
            if ((currentDeviceWindowWidth > 991 && deviceWindowWidth < 992)
                || (currentDeviceWindowWidth < 992 && deviceWindowWidth > 991)) {
                deviceWindowWidth = currentDeviceWindowWidth;
                hidePopup();
            }
        }
    });

    $('.swipe-popup-down').each(function () {
        var mc = new Hammer(this);
        mc.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });

        mc.on("swipedown", function (e) {
            $('.swipe-popup-down').trigger('click');
        });
    });

});