$(document).ready(function() {


    var height = $(window).height()
    $('header').height(height)


    var services = $('#service').offset().top;
    var product = $('#product').offset().top;
    var aboutUs = $('#aboutUs').offset().top;
    var contact = $('#contact').offset().top;
    var menu = $("#menu")

    $(window).scroll(function() {
        if (menu.offset().top > 200) {
            menu.addClass('bg-blue')
            menu.removeClass('bg-transparent')
            $('.logImg').removeClass('display')
            if ($(window).width() <= 991) {
                menu.removeClass('menu');
                menu.removeClass('bg-blue');
                $('.btn-menu').click(()=>{
                    menu.addClass('bg-blue')
                })
            }
        } else {
            menu.removeClass('bg-blue')
            menu.addClass('bg-transparent')
            $('.logImg').addClass('display')
        }
    })

     


    $('#btn-services').click((e) => {
        e.preventDefault()

        $('html, body').animate({
            scrollTop: services - 100
        }, 500)
    })

    $('#btn-product').click((e) => {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: product - 100,
        }, 500)

    })
    $("#btn-services").focus(() => {
        $(this).css('font-size', '25px')
    })

    $('#btn-aboutUs').click((e) => {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: aboutUs - 100
        }, 500)
    })
    $('#btn-contact').click((e) => {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: contact - 100
        }, 500)
    })

    var link = $('.nav-link');
    link.click(function() {
        link.removeClass('active');
        $(this).addClass('active');
    })



    $('#send-mail').click(function() {

        var name = $('input #name').val(); // get the value of the input field
        var error = false;
        if (name === "" || name === " ") {
            $('#err-name').show(500);
            $('#err-name').delay(4000);
            $('#err-name').animate({
                height: 'toggle'
            }, 500, function() {
                // Animation complete.
            });
            error = true; // change the error state to true
        }

        var emailCompare = /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/; // Syntax to compare against input
        var email = $('input#email').val().toLowerCase(); // get the value of the input field
        if (email === "" || email === " " || !emailCompare.test(email)) {
            $('#err-email').show(500);
            $('#err-email').delay(4000);
            $('#err-email').animate({
                height: 'toggle'
            }, 500, function() {
                // Animation complete.
            });
            error = true; // change the error state to true
        }


        var comment = $('textarea #comment').val(); // get the value of the input field
        if (comment === "" || comment === " ") {
            $('#err-comment').show(500);
            $('#err-comment').delay(4000);
            $('#err-comment').animate({
                height: 'toggle'
            }, 500, function() {
                // Animation complete.
            });
            error = true; // change the error state to true
        }

        if (error === false) {
            var dataString = $('#contact-form').serialize(); // Collect data from form
            $.ajax({
                type: "POST",
                url: 'encontacto.php',
                data: dataString,
                timeout: 6000,
                error: function(request, error) {
                    $.notify("No pudo ser enviado", "error");
                },
                success: function(response) {
                    if (parseInt(response) === 1) {
                        $.notify("Correo enviado", "success");
                        $("#name").val('');
                        $("#email").val('');
                        $("#comment").val('');
                    } else {
                        $.notify("No pudo ser enviado", "error");
                    }
                }
            });
            return false;
        }

        return false; // stops user browser being directed to the php file
    });


    // $('#enviarMail').click(() => {
    //     $("#name").val();
    //     $("#email").val();
    //     $("#phone").val();
    //     $("#comment").val();


    // })
})