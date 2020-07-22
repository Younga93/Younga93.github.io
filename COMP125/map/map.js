//Younga Jin #301055699

"use strict";

function geoTest(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(createMap, fail);
    }else{
        fail();
    }
}

function createMap(position){
    var Lat = 43.642549;
    var Lng = -79.387063;

    var mapOptions = {
        center:new google.maps.LatLng(Lat, Lng), 
        zoom: 10
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

function fail(){
    document.getElementById("map").innerHTML = "Unable to access now.";
}
