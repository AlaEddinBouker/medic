(window.webpackJsonp = window.webpackJsonp || []).push([[14], {
    299: function (o, a, n) {
        "use strict";
        n.r(a);
        var t = n(0), d = n.n(t), e = n(10), i = n.n(e);
        d()(function () {
            if (document.getElementById("mapfull-markers")) {
                for (var o = [{id: 0, name: "Canada", coords: {latitude: 56.130366, longitude: -106.346771}}, {
                    id: 1,
                    name: "New York",
                    coords: {latitude: 40.712784, longitude: -74.005941}
                }, {id: 2, name: "Toronto", coords: {latitude: 43.653226, longitude: -79.383184}}, {
                    id: 3,
                    name: "San Francisco",
                    coords: {latitude: 37.774929, longitude: -122.419416}
                }, {
                    id: 4,
                    name: "Utah",
                    coords: {latitude: 39.32098, longitude: -111.093731}
                }], n = new i.a({
                    div: "#mapfull-markers",
                    lat: o[0].coords.latitude,
                    lng: o[0].coords.longitude,
                    zoom: 4
                }), a = 0; a < o.length; a++) n.addMarker({
                    lat: o[a].coords.latitude,
                    lng: o[a].coords.longitude,
                    infoWindow: {content: "<p>" + o[a].name + "</p>"}
                });
                d()("#markers-list").on("click", "[data-panto-marker]", function () {
                    var o = n.markers, a = d()(this).data("pantoMarker");
                    o[a] && n.map.panTo(o[a].getPosition())
                })
            }
        })
    }
}, [[299, 0]]]);