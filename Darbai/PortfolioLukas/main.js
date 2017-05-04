$(document).ready(function() {

    $('.karusele').css("display", "block");
    setTimeout(function() {
        $('.karusele').css('display', 'none');
    }, 50) //uz puse milisekundes pradangis karusele

    //uzsikrauna skillbarai
    // $('.skillbar').each(function(){
    // 	$(this).find('.skillbar-bar').animate({
    // 		width:$(this).attr('data-percent')
    // 	},6000);
    // });

    //nuvaziuoja letai kur reikia
    $("#a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });




    $("#b").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash,
                    $("#igudziai").slideDown(function() {
                        $(".slidebars").show();
                        $('html, body').animate({ //nuvaziuoja kur nurodome
                            scrollTop: $("#igudziai").offset().top
                        }, 2000);
                        $('.skillbar').each(function() {
                            $(this).find('.skillbar-bar').animate({
                                width: $(this).attr('data-percent')
                            }, 3000);
                        });

                    });
            });
        } // End if
    });

    $("#c").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash,
                    $("#darbai").slideDown(function() {
                        $(".karusele").css('display', 'block');
                        $('html, body').animate({ //nuvaziuoja kur nurodome
                            scrollTop: $("#darbai").offset().top
                        }, 2000);
                    });
            });
        } // End if
    });

    $("#d").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash,
                    $("#kontaktai").slideDown(function() {
                        $(".remas").css('display', 'block');
                        $('html, body').animate({ //nuvaziuoja kur nurodome
                            scrollTop: $("#kontaktai").offset().top
                        }, 2000);
                    });

            });
        } // End if
    });









    // nuvaziuoja letai kur reikia
    //   $(function() {
    //   $('a[href*="#"]:not([href="#"])').click(function() {
    //     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    //       var target = $(this.hash);
    //       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    //       if (target.length) {
    //         $('html, body').animate({
    //           scrollTop: target.offset().top
    //         }, 1000);
    //         return false;
    //       }
    //     }
    //   });
    // });









    // download mygtukas iskeliauja i apacia
    $('.download-btn').click(function() {
        // nusikopijuojame paspausta paveiksliuko Obj
        // that - yra paveikslelio objekto kopija
        var mygtukoObjKopija = this.cloneNode(true);
        var mygtukasParent = this.parentNode;

        // i HTML idedame savo HTML elementa (paveikslelioObjKopija)
        mygtukasParent.insertBefore(mygtukoObjKopija, this);

        $(mygtukoObjKopija).css("position", "absolute");
        $(mygtukoObjKopija).animate({

            top: '1000px',
            opacity: '0',
            height: '20px',
            width: '20px'
        }, 1000);

    });
    // mirksintis mygtukas. Kaip padaryti kad uzvedus pele nebemirksetu? ir paspaudus nustotu mirkseti isviso.
    // $('.download-btn').each(function() {
    //     var elem = $(this);
    //     setInterval(function() {
    //         if (elem.css('visibility') == 'hidden') {
    //             elem.css('visibility', 'visible');
    //         } else {
    //             elem.css('visibility', 'hidden');
    //         }
    //     }, 200);
    // });



    //mirksintis mygtukas, bet kazkodel daznai nuluzta puslapis situo budu
    var pause = false;

    function blink() {
        $(".download-btn").fadeIn("slow", function() {
            if (pause) return;
            $(".download-btn").fadeOut("slow", function() {
                blink();
            });
        });
    }
    $(document).ready(function() {
        blink();
        $(".download-btn").mouseover(function() {
            pause = true;
        });
        $(".download-btn").mouseout(function() {
            pause = false;
            blink();
        });

    });

    $("#carousel").Cloud9Carousel({
        buttonLeft: $("#buttons > .left"),
        buttonRight: $("#buttons > .right"),
        autoPlay: 1,
        bringToFront: true
    });

    $(window).resize(function() {
        if ($(this).width() <= 1000) {
            $('#carousel').removeId('#carousel') //whatever css class is doing the undesired effect at breakpoint
        }
    });

});
