$('.inputs').on('input', () => {

    $('.div').css({
        width: $('#div-width').val(),
        height: $("#div-height").val(),
        backgroundColor: $("#color-div").val(),
        borderRadius: `${$("#rangeBorder").val()}%`
    })
})
