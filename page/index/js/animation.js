$(function(){ 
    $('.search_radio_getVal').children().click(function(e){ 
        $('.search_frame_val').text($(this)[0].innerText)
    })
}) 