$(function(){


    $(".slickslider").slick();

    var $myNavItem = $("nav > ul > li");
    $myNavItem.on("mouseover", function(){
        $(this).find("div").animate(
            {height: "100px"},
            {queue: false,
             duration: 500,
             easing: "linear",
             start: function(){
                 $(this).css("border-width", "3px");
             }
            }
        );

    }).on("mouseleave", function(){
        $(this).find("div").animate(
            {height: "0px"},
            {queue: false,
             duration: 500,
             easing: "linear",
             complete: function(){
                 $(this).css("border-width","0");
             }
            }

        );
    });

    $('.slider').slick({
        arrows: false,
        dots: true
    }   );


    var $theForm = $("#contact_form");
   $theForm.submit(function(e){
        e.preventDefault();
         var form_data = $theForm.serialize();

        $.ajax(
             {type: 'POST', url: $theForm.attr("action"), data: form_data}
         ).done(function(response){
            $theForm.html("<h2>"+response+"</h2>");
         }).fail(function(response){
            $theForm.append("<h2>"+response+"</h2>");
         });
     });

});


