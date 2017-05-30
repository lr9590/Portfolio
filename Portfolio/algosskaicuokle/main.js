$(document).ready(function(){
//--------------funkcionalumas-----------
  $('#alga, #taikomas_npd').keyup(function() {
    skaiciavimas();
  });
  $('#alga, #taikomas_npd').click(function() {
    skaiciavimas();
  });
  $('#vaikai, #augina').change(function() {
    skaiciavimas();
  });
  $(function() {
    // Pasirinkimas ar ant popieriaus ar i rankas
    $("#uzdarbis1").click(function(){
      $("#uzdarbistext").html("Ant popieriaus");
      skaiciavimas();
    });
    // Pasirinkimas ar ant popieriaus ar i rankas
    $("#uzdarbis2").click(function(){
      $("#uzdarbistext").html("I rankas");
    });
    // renkames kaip skaiciuoti npd
    $("#npd1").click(function(){
      $("#vaikupasirinkimas").show();
      $("#npdIvedimas").hide();
      skaiciavimas();
    });
    $("#npd2").click(function(){
      $("#vaikupasirinkimas").hide();
      $("#npdIvedimas").show();
      skaiciavimas();
    });
    // Keiciam penciju ir soc draudimo procentus.
    $( "#pensijos_kaupimas" ).change(function() {
      if(this.checked) {
          $(".socTax h4").html("Sodra. Pencijų ir soc. draudimas 5%: <span class='socTax'></span> €");
      } else {
          $(".socTax h4").html("Sodra. Pencijų ir soc. draudimas 3%: <span class='socTax'></span> €");
      }
      skaiciavimas();
    });
  });


  //------------------------SKAICIAVIMO FUNKCIJA---------------------

  function skaiciavimas(){
      //ant popieriaus lygu ant popieriaus
      var alga = $("#alga").val();
      alga = parseFloat(alga).toFixed(2);
      $('.atlyginimas span').text(alga);
      //NPD skaiciavimas kai alga ant popieriaus
      var taikomas_npd = $("#taikomas_npd").val();
      if(alga <= 380) {
        NPD = 310;
      } else if (alga >= 999.991) {
        NPD = 0;
      } else {
        NPD = 310 - 0.5 * (alga - 380);
      }
      NPD = NPD.toFixed(2);
      $('.NPD span').text(NPD);
     //PNPD skaiciavimas
     var option = $("#vaikai").val();
     if(option == 0) {
      PNPD = 0;
      } else if (option == 1) {
      PNPD = 200;
      } else if (option == 2) {
      PNPD = 400;
      } else if (option == 3) {
      PNPD = 600;
      } else if (option == 4) {
      PNPD = 800;
      } else if (option == 5) {
      PNPD = 1000;
      } else if (option == 6) {
      PNPD = 1200;
      } else if (option == 7) {
      PNPD = 1400;
      } else if (option == 8) {
      PNPD = 1600;
      } else if (option == 9) {
      PNPD = 1800;
      } else {
      PNPD = 2000;
      }
     //su kuo augina PNPD apskaiciavimas
     if($('#augina2').is(':checked')) {
      PNPD = PNPD / 2;
     }
     PNPD = PNPD.toFixed(2);
     $('.PNPD span').text(PNPD);
     // Jei NPD nurodo pats
     var option = $("#vaikai").val();
        if($('#npd2').is(':checked')) {
          NPD = taikomas_npd;
          NPD = parseFloat(NPD).toFixed(2);
        }
     $('.NPD span').text(NPD);
     //Pajamu mokescio skaiciavimas
     pajamuTax = (alga - NPD - PNPD) * 0.15;
     if (pajamuTax < 0) {
      pajamuTax = 0;
     }
     pajamuTax = pajamuTax.toFixed(2);
     $('.pajamuTax span').text(pajamuTax);
     // sveikatos draudimo skaiciavimas
     sveikatosTax = alga * 0.06;
     sveikatosTax = sveikatosTax.toFixed(2);
     $('.sveikatosTax span').text(sveikatosTax);
     // pencijos ir soc draudimo skaiciavimas
     if ($('#pensijos_kaupimas').attr('checked')) {
     socTax = alga * 0.05;
     } else {
     socTax = alga * 0.03;
     }
     socTax = socTax.toFixed(2);
     $('.socTax span').text(socTax);
     //Alga į rankas
     algairankas = alga - pajamuTax - sveikatosTax - socTax;
     algairankas = algairankas.toFixed(2);
     $('.algairankas span').text(algairankas);
     //Darbdavio sumokami mokesciai. Sodra 31.18%
     sodra = alga * 0.3118;
     sodra = sodra.toFixed(2);
     $('.sodra span').text(sodra);
     //Darbuotojo vietos kaina
     //Reikia alga ir sodra paversti i skaiciu nes toFixed grazino stringa
     debugger;
     alga = Number(alga);
     sodra = Number(sodra);
     darbKaina = alga + sodra;
     darbKaina = darbKaina.toFixed(2);
     $('.darbKaina span').text(darbKaina);
     }
});
