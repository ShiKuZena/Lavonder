
$(function(){
    $(".up").toggle();
    $(window).scroll(function () { 
        if ($(window).scrollTop() > $('body').height() / 5) {
            $(".up").fadeIn(800);
        }
        else{
            $(".up").fadeOut();
        }
    });
    $(".up").click(function(){
        setTimeout(
            function(){
                $(window).scrollTop(0);
            },
        600);
        
    })
})

$(function(){
    $(window).scroll(function(){
        
    })
})