$(document).ready(function(){
    
    $('img').click(function(){
        $(this).attr('temp', $(this).attr('src'));
        $(this).attr('src', $(this).attr('meow'));
        $(this).attr('meow', $(this).attr('temp'));
    });



});

