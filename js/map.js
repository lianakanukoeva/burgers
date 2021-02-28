//гугл карта
function initMap() {
    // The location of Uluru
    var uluru = {lat: 59.9390094, lng: 30.315868};
    // The map, centered at Uluru
/*
var style = [
        {
            " featureType ": "all" ,
            " elementType ": "geometry.fill" ,
            " stylers ": [
                {
                    " weight ": "2.00"
                }
            ]
        } ,
        {
            " featureType ": "all" ,
            " elementType ": "geometry.stroke" ,
            " stylers ":[
                {
                    "color ": " # 9c9c9c "
                }
            ]
        } ,
        {
            " featureType ": " all " ,
            " elementType ": " labels.text " ,
            " stylers ": [
                {
                    " visibility ": " on "
                }
            ]
        } ,
        {
            " featureType ": " пейзаж " ,
            "elementType ": " all " ,
            " stylers ": [
                {
                    " color ": "# f2f2f2"
                }
            ]
        } ,
        {
            " featureType ": "landscape.man_made" ,
            " elementType ": "geometry.fill" ,
            " stylers ": [
                {
                    " color ": " # f4e9cd "
                }
            ]
        } ,
        {
            " featureType ":"landscape.natural" ,
            " elementType ": "geometry" ,
            " stylers ": [
                {
                    " color ": "# d3e5cd"
                }
            ]
        } ,
        {
            " featureType ": "landscape.natural.landcover" ,
            " elementType ": " геометрия " ,
            " стайлеры ": [
                {
                    "цвет ": " # d3e5cd "
                }
            ]
        } ,
        {
            " featureType ": "landscape.natural.terrain" ,
            " elementType ": "geometry" ,
            " stylers ": [
                {
                    " color ": "# f6f0d8"
                }
            ]
        } ,
        {
            " featureType ": "poi " ,
            " elementType ": " all " ,
            " стайлеры ":[
                {
                    " visibility ": "off"
                }
            ]
        } ,
        {
            " featureType ": "road" ,
            " elementType ": "all" ,
            " stylers ": [
                {
                    " saturation ": - 100
                } ,
                {
                    " lightness ":45
                }
            ]
        } ,
        {
            " FeatureType ": "дорога" ,
            " ElementType ": "geometry.fill" ,
            " стайлеры ": [
                {
                    " цвет ": "#eeeeee"
                }
            ]
        } ,
        {
            " FeatureType ": "дорога" ,
            " ElementType ": "labels.text.fill" ,
            " stylers ":[
                {
                    "color ": " # 7b7b7b "
                }
            ]
        } ,
        {
            " featureType ": " road " ,
            " elementType ": " labels.text.stroke " ,
            " stylers ": [
                {
                    " color ": " #ffffff "
                }
            ]
        } ,
        {
            " featureType ": "road.highway" ,
            "elementType ": " all " ,
            " stylers ": [
                {
                    " weight ": "0.43"
                }
            ]
        } ,
        {
            " featureType ": "road.highway" ,
            " elementType ": "geometry.fill" ,
            " stylers ": [
                {
                    " color ": "# f6970d "
                } ,
                {
                    "вес ": " 4.96 "
                }
            ]
        } ,
        {
            " featureType ": "road.arterial" ,
            " elementType ": "geometry" ,
            " stylers ": [
                {
                    " color ": "# ff9700"
                } ,
                {
                    " weight ": "1.77"
                }
            ]
        } ,
        {
            " featureType ":"road.arterial" ,
            " elementType ": "labels.icon" ,
            " stylers ": [
                {
                    " visibility ": "off"
                }
            ]
        } ,
        {
            " featureType ": "transit" ,
            " elementType ": "all" ,
            " stylers ": [
                {
                    " видимость ": "выключено"
                }
            ]
        } ,
        {
            " featureType ": "water" ,
            " elementType ": "all" ,
            " stylers ": [
                {
                    " color ": "# 46bcec"
                } ,
                {
                    " visibility ": "on"
                }
            ]
        } ,
        {
            " featureType ": "вода" ,
            "elementType ": " geometry " ,
            " stylers ": [
                {
                    " color ": "# c8d7d4"
                }
            ]
        } ,
        {
            " featureType ": "water" ,
            " elementType ": "geometry.fill" ,
            " stylers ": [
                {
                    " color ": "# c8d7d4 "
                }
            ]
        } ,
        {
            "featureType ":"вода" ,
            " elementType ": "labels.text.fill" ,
            " stylers ": [
                {
                    " color ": "# 070707"
                }
            ]
        } ,
        {
            " featureType ": "вода" ,
            " elementType ": "labels.text.stroke" ,
            " стайлеры ": [
                {
                    " color ": "#ffffff"
                }
            ]
        }
    ]*/
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 10, center: uluru});

    var locations = [
        {
            position: {lat: 59.896228, lng: 30.4220842},
            icon: {
                url: "icons/map-marker.svg"
            }
        },
        {
            position: {lat: 59.9993294, lng: 30.3695612},
            icon: {
                url: "icons/map-marker.svg"
            }
        },
        {
            position: {lat: 59.852577, lng: 30.3116954},
            icon: {
                url: "icons/map-marker.svg"
            }
        }
    ];
    locations.forEach( function( element ) {
        var marker = new google.maps.Marker({
                position: element.position,
                map: map,
                icon: element.icon,
            });
        });
    }