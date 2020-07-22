// function parseWeather()
// {
//     loadJSON(function(response){
//         var jsonData = JSON.parse(response);
//         document.getElementById("weather").innerHTML = jsonData["list"][0]["weather"][0]["main"];
//     });
// }

// function loadJSON(callback){
//     var url
// }
window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
window.myWidgetParam.push({
    id: 15,
    cityid: '1846266',
    appid: 'b5074028acb6d0f8d209dced073df1a8',
    units: 'metric',
    containerid: 'openweathermap-widget-15',  
});  
(function() {
    var script = document.createElement('script');
    script.async = true;
    script.charset = "utf-8";
    script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(script, s);  
})();