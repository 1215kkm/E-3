setInterval(function(){
    $('.slide ul').animate({top:-900}, function(){
        $('.slide li').eq(0).appendTo($('.slide ul'))
        $('.slide ul').css({top:0})
    })
}, 2000)


/* popup */
$('.notice li').eq(0).click(function(){
    $('.popup').fadeIn()
})

$('.popup a').click(function(){
    $('.popup').fadeOut()
})
