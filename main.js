$(function(){

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

    $("#contact").validate({
        // Set the validation rules
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            message: "required",
        },
        // Specify the validation error messages
        messages: {
            name: "Please enter your name",
            email: "Please enter a valid email address",
            message: "Please enter a message",
        },
        // submit handler
        submitHandler: function(form) {
          //form.submit();
           $(".message").show();
           $(".message").fadeOut(4500);
        }
    });
});
