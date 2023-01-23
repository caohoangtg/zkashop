

const removeProductOpenClass = () => {
    $('.js-product-detail').removeClass('product-open');
};

$(function () {
    $('.js-product-detail').on('click', (e) => {
        removeProductOpenClass();
        console.log($(e.currentTarget));
        $(e.currentTarget).addClass('product-open');
        showPopup('#id');
    })
});