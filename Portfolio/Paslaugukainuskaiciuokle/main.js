$(document).ready(function(){

  $('.kiekis1, .kiekis2, .kiekis3, .kiekis4, .kiekis5, .kiekis6, .kiekis7, .kiekis8, .kiekis9, .kiekis10').keyup(function() {
  skaiciavimas();
  });
  $('.kiekis1, .kiekis2, .kiekis3, .kiekis4, .kiekis5, .kiekis6, .kiekis7, .kiekis8, .kiekis9, .kiekis10, .Taip').click(function() {
  skaiciavimas();
  });

  function skaiciavimas(){
      //Gaunamos SF (čekiai, sąskaitos-faktūros) --- KAINOS APSKAIČIAVIMAS
      var kiekis1 = $(".kiekis1").val();
      kaina1 = kiekis1 * 0.5;
      kaina1 = kaina1.toFixed(2);
      $('.kaina1').text(kaina1);
      //Išrašomos SF (Pardavimų sąskaitos-faktūros) --- KAINOS APSKAIČIAVIMAS
      var kiekis2 = $(".kiekis2").val();
      kaina2 = kiekis2 * 0.5;
      kaina2 = kaina2.toFixed(2);
      $('.kaina2').text(kaina2);
      //Banko dokumentų sk.per mėn. (mokėjimai ir gautos įplaukos) --- KAINOS APSKAIČIAVIMAS
      var kiekis3 = $(".kiekis3").val();
      kaina3 = kiekis3 * 0.99;
      kaina3 = kaina3.toFixed(2);
      $('.kaina3').text(kaina3);
      //Kasos dokumentų skaičius per mėn. (kasos pajamų ir išlaidų orderiai) --- KAINOS APSKAIČIAVIMAS
      var kiekis4 = $(".kiekis4").val();
      kaina4 = kiekis4 * 0.99;
      kaina4 = kaina4.toFixed(2);
      $('.kaina4').text(kaina4);
      //Kasos aparato apskaita --- KAINOS APSKAIČIAVIMAS
      var kiekis5 = $(".kiekis5").val();
      kaina5 = kiekis5 * 15;
      kaina5 = kaina5.toFixed(2);
      $('.kaina5').text(kaina5);
      //Avanso apyskaitų skaičius per mėn. --- KAINOS APSKAIČIAVIMAS
      var kiekis6 = $(".kiekis6").val();
      kaina6 = kiekis6 * 7;
      kaina6 = kaina6.toFixed(2);
      $('.kaina6').text(kaina6);
      //Ilgalaikio truto amortizacija (Ilgalaikio truto skaičius). --- KAINOS APSKAIČIAVIMAS
      var kiekis7 = $(".kiekis7").val();
      kaina7 = kiekis7 * 0.5;
      kaina7 = kaina7.toFixed(2);
      $('.kaina7').text(kaina7);
      //Transporto priemonių skaičius --- KAINOS APSKAIČIAVIMAS
      var kiekis8 = $(".kiekis8").val();
      kaina8 = kiekis8 * 4;
      kaina8 = kaina8.toFixed(2);
      $('.kaina8').text(kaina8);
      //Komandiruočių skaičius per mėn. --- KAINOS APSKAIČIAVIMAS
      var kiekis9 = $(".kiekis9").val();
      kaina9 = kiekis9 * 6;
      kaina9 = kaina9.toFixed(2);
      $('.kaina9').text(kaina9);
      //Darbuotojų skaičius (Drabuotojų sk. einamo mėn. tabelyje) --- KAINOS APSKAIČIAVIMAS
      var kiekis10 = $(".kiekis10").val();
      kaina10 = kiekis10 * 10;
      kaina10 = kaina10.toFixed(2);
      $('.kaina10').text(kaina10);
      //Ar esate PVM mokėtojas? --- KAINOS APSKAIČIAVIMAS
      if ($('.Taip').attr('checked')) {
        kaina11 = 15;
      } else {
        kaina11 = 0;
      }
      $('.kaina11').text(kaina11);
      //Preliminari paslaugų kaina: --- KAINOS APSKAIČIAVIMAS
      //Reikia visas kainas paversti i skaiciu nes toFixed grazina stringa
      kaina1 = Number(kaina1);
      kaina2 = Number(kaina2);
      kaina3 = Number(kaina3);
      kaina4 = Number(kaina4);
      kaina5 = Number(kaina5);
      kaina6 = Number(kaina6);
      kaina7 = Number(kaina7);
      kaina8 = Number(kaina8);
      kaina9 = Number(kaina9);
      kaina10 = Number(kaina10);
      kaina11 = Number(kaina11);
      visaKaina = kaina1 + kaina2 + kaina3 + kaina4 + kaina5 + kaina6 + kaina7 + kaina8 + kaina9 + kaina10 + kaina11;
      visaKaina = visaKaina.toFixed(2);
      $('.visaKaina span').text(visaKaina);
    }
});
