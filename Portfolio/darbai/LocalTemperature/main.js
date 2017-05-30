$(document).ready(function() {

  $.post( "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyB0HRH-uerVbzam2QLMWRqY3HfcoktYEw8", function(val) {
    var lat = val.location.lat;
    var lon = val.location.lng;

    var URL = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=metric&APPID=8f3a17b77f4722fb511480bce1eb208e";

    $.getJSON( URL, function(val) {
      var temperature = val["main"]["temp"];
      var tempCelsius = Math.round(temperature) + " ° C";
      var tempFahrenheit = Math.round((temperature * 1.8) + 32)+" ° F";

      $("#loc").html(val["name"] + ", " + val["sys"]["country"] );
      $("#temp").html(tempCelsius);
      $("#description").html(val["weather"][0]["main"]);

      var img = "http://openweathermap.org/img/w/" + val["weather"][0]["icon"] + ".png";
      $("#icon").attr("src", img);

      $("#far").click(function() {
        $("#temp").html(tempFahrenheit);
      });
      $("#cel").click(function() {
        $("#temp").html(tempCelsius);
      });
    });
  })
});
