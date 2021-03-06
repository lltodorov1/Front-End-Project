jQuery(document).ready(function ($) {

    var $dataContainer = $("<div>").attr("id", "weather-box")
         .append($("<div/>").addClass("row")
        .append($("<div/>").addClass("col-xs-6")
                .append($("<p/>").addClass("hour"))
                .append($("<p/>").addClass("date")))
        .append($("<div>").addClass("col-xs-6 right").attr("id", "icon")
            .append($("<img/>").addClass("max-width-100-height-auto")
            .css('margin', '3%'))
           ))
        .append($("<div>").attr("id", "city-name"))
        .append($("<div>").attr("id", "city-tempC"))
        .append($("<div>").addClass("right").attr("id", "weather"));

    $dataContainer.appendTo("#weather-live");

});


var showCurrentWeather = (function (city, jsonWeather) {

    var temperatureCelsius = convertTemp(jsonWeather.main.temp) + "&deg;C";
    var iconUrl = "../styles/images/weather-icons/" + jsonWeather.weather[0].icon + ".svg";
    //var thatDay = new Date().toJSON().slice(0, 10).replace(/-/g, '.');
    var months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
    var now = new Date();
    var today = now.getDate();
    var thisMonth =  months[now.getMonth()+1]
    var thatDay = today + " " + thisMonth;
    var minutes = now.getMinutes();
    if (minutes.toString().length === 1) {
        minutes = "0" + minutes;
    }
    var thatHour = now.getHours() + ":" + minutes;
    $(".date").html(thatDay);
    $(".hour").html(thatHour);
    $("#city-name").html(city);
    $("#city-tempC").html(temperatureCelsius);
    $("#weather").html(jsonWeather.weather[0].main);
    $("#icon img").attr("src", iconUrl);

    var weatherBox = $("#weather-box").css('height', '100%')
    .css('overflow', 'hidden');
    // weatherBox.css('padding', '3%')
    if (Number.parseInt(weatherBox.height()) > 500) {
        weatherBox.css("fontSize", "90%");
    } else {
        weatherBox.css("fontSize", "100%");
    }

});