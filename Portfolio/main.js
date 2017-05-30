$(document).ready(function() {
    //nuvaziuoja iki apie mane
    $("#a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
    //nuvaziuoja iki igudziai, parodo slidebarus ir juos uzkrauna
    $("#b").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash,
                    $("#igudziai").slideDown(function() {
                        $(".slidebars").show();
                        $('html, body').animate({
                            scrollTop: $("#igudziai").offset().top
                        }, 2000);
                        $('.skillbar').each(function() {
                            $(this).find('.skillbar-bar').animate({
                                width: $(this).attr('data-percent')
                            }, 3000);
                        });
                    });
            });
        }
    });
    //nuvaziuoja iki darbai, parodo karusele ir vel nuvaziuoja siek tiek kad vaizdas butu geresnis
    $("#c").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash,
                    $("#darbai").slideDown(function() {
                        $(".owl-theme").show();
                        $('html, body').animate({
                            scrollTop: $("#darbai").offset().top
                        }, 2000);
                    });
            });
        }
    });
    //nuvaziuoja iki kontaktu, parodo kontaktus ir vel nuvaziuoja siek tiek kad vaizdas butu geresnis
    $("#d").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash,
                    $("#kontaktai").slideDown(function() {
                        $(".remas").css('display', 'block');
                        $('html, body').animate({
                            scrollTop: $("#kontaktai").offset().top
                        }, 2000);
                    });
            });
        }
    });

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

    //mirksintis mygtukas
    var pause = false;
    function blink() {
        $(".download-btn").fadeIn("slow", function() {
            if (pause) return;
            $(".download-btn").fadeOut("slow", function() {
                blink();
            });
        });
    }
// Uzvedus nustoja mirkseti download mygtukas
    blink();
    $(".download-btn").mouseover(function() {
        pause = true;
    });
    $(".download-btn").mouseout(function() {
        pause = false;
        blink();
    });

//Antrastes toggle ir ivykdo savo funkcijas
	 $("#igudziai").click(function(){
        $(".slidebars").slideToggle();
		 $('html, body').animate({
         scrollTop: $("#igudziai").offset().top
         }, 1500);
		$('.skillbar').each(function() {
          $(this).find('.skillbar-bar').animate({
           width: $(this).attr('data-percent')
           }, 3000);
        });
    });

	 $("#darbai").click(function(){
     $(".owl-theme").slideToggle();
	 $('html, body').animate({
         scrollTop: $("#darbai").offset().top
         }, 1500);
    });

	 $("#kontaktai").click(function(){
     $(".remas").slideToggle();
	 $('html, body').animate({
         scrollTop: $("#kontaktai").offset().top
         }, 1500);
    });

//Responsive karusele
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});
    $(".owl-carousel").owlCarousel();

});
