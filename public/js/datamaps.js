(window.webpackJsonp = window.webpackJsonp || []).push([[6], {
    153: function (t, e, n) {
        !function () {
            var c = window.d3, i = window.topojson, o = {
                scope: "world",
                responsive: !1,
                aspectRatio: .5625,
                setProjection: function (t, e) {
                    var n, r, o = e.width || t.offsetWidth, a = e.height || t.offsetHeight, i = this.svg;
                    e && void 0 === e.scope && (e.scope = "world");
                    "usa" === e.scope ? n = c.geo.albersUsa().scale(o).translate([o / 2, a / 2]) : "world" === e.scope && (n = c.geo[e.projection]().scale((o + 1) / 2 / Math.PI).translate([o / 2, a / ("mercator" === e.projection ? 1.45 : 1.8)]));
                    "orthographic" === e.projection && (i.append("defs").append("path").datum({type: "Sphere"}).attr("id", "sphere").attr("d", r), i.append("use").attr("class", "stroke").attr("xlink:href", "#sphere"), i.append("use").attr("class", "fill").attr("xlink:href", "#sphere"), n.scale(250).clipAngle(90).rotate(e.projectionConfig.rotation));
                    return {path: r = c.geo.path().projection(n), projection: n}
                },
                projection: "equirectangular",
                dataType: "json",
                data: {},
                done: function () {
                },
                fills: {defaultFill: "#ABDDA4"},
                filters: {},
                geographyConfig: {
                    dataUrl: null,
                    hideAntarctica: !0,
                    hideHawaiiAndAlaska: !1,
                    borderWidth: 1,
                    borderOpacity: 1,
                    borderColor: "#FDFDFD",
                    popupTemplate: function (t, e) {
                        return '<div class="hoverinfo"><strong>' + t.properties.name + "</strong></div>"
                    },
                    popupOnHover: !0,
                    highlightOnHover: !0,
                    highlightFillColor: "#FC8D59",
                    highlightBorderColor: "rgba(250, 15, 160, 0.2)",
                    highlightBorderWidth: 2,
                    highlightBorderOpacity: 1
                },
                projectionConfig: {rotation: [97, 0]},
                bubblesConfig: {
                    borderWidth: 2,
                    borderOpacity: 1,
                    borderColor: "#FFFFFF",
                    popupOnHover: !0,
                    radius: null,
                    popupTemplate: function (t, e) {
                        return '<div class="hoverinfo"><strong>' + e.name + "</strong></div>"
                    },
                    fillOpacity: .75,
                    animate: !0,
                    highlightOnHover: !0,
                    highlightFillColor: "#FC8D59",
                    highlightBorderColor: "rgba(250, 15, 160, 0.2)",
                    highlightBorderWidth: 2,
                    highlightBorderOpacity: 1,
                    highlightFillOpacity: .85,
                    exitDelay: 100,
                    key: JSON.stringify
                },
                arcConfig: {
                    strokeColor: "#DD1C77",
                    strokeWidth: 1,
                    arcSharpness: 1,
                    animationSpeed: 600,
                    popupOnHover: !1,
                    popupTemplate: function (t, e) {
                        return e.origin && e.destination && e.origin.latitude && e.origin.longitude && e.destination.latitude && e.destination.longitude ? '<div class="hoverinfo"><strong>Arc</strong><br>Origin: ' + JSON.stringify(e.origin) + "<br>Destination: " + JSON.stringify(e.destination) + "</div>" : e.origin && e.destination ? '<div class="hoverinfo"><strong>Arc</strong><br>' + e.origin + " -> " + e.destination + "</div>" : ""
                    }
                }
            };

            function val(t, e, n) {
                void 0 === n && (n = e, optionsValues = void 0);
                var r = void 0 !== t ? t : e;
                if (void 0 === r) return null;
                if ("function" != typeof r) return r;
                var o = [n];
                return n.geography && (o = [n.geography, n.data]), r.apply(null, o)
            }

            function addLegend(t, e, n) {
                if (e = e || {}, this.options.fills) {
                    var r = "<dl>", o = "";
                    for (var a in e.legendTitle && (r = "<h2>" + e.legendTitle + "</h2>" + r), this.options.fills) {
                        if ("defaultFill" === a) {
                            if (!e.defaultFillName) continue;
                            o = e.defaultFillName
                        } else o = e.labels && e.labels[a] ? e.labels[a] : a + ": ";
                        r += "<dt>" + o + "</dt>", r += '<dd style="background-color:' + this.options.fills[a] + '">&nbsp;</dd>'
                    }
                    r += "</dl>";
                    c.select(this.options.element).append("div").attr("class", "datamaps-legend").html(r)
                }
            }

            function addGraticule(t, e) {
                var n = c.geo.graticule();
                this.svg.insert("path", ".datamaps-subunits").datum(n).attr("class", "datamaps-graticule").attr("d", this.path)
            }

            function handleArcs(t, e, i) {
                var l = this, s = this.svg;
                if (!e || e && !e.slice) throw"Datamaps Error - arcs must be an array";
                for (var n = 0; n < e.length; n++) e[n] = defaults(e[n], e[n].options), delete e[n].options;
                void 0 === i && (i = o.arcConfig);
                var r = t.selectAll("path.datamaps-arc").data(e, JSON.stringify),
                    u = c.geo.path().projection(l.projection);
                r.enter().append("svg:path").attr("class", "datamaps-arc").style("stroke-linecap", "round").style("stroke", function (t) {
                    return val(t.strokeColor, i.strokeColor, t)
                }).style("fill", "none").style("stroke-width", function (t) {
                    return val(t.strokeWidth, i.strokeWidth, t)
                }).attr("d", function (t) {
                    var e, n;
                    if ("string" == typeof t.origin) switch (t.origin) {
                        case"CAN":
                            e = l.latLngToXY(56.624472, -114.665293);
                            break;
                        case"CHL":
                            e = l.latLngToXY(-33.44889, -70.669265);
                            break;
                        case"IDN":
                            e = l.latLngToXY(-6.208763, 106.845599);
                            break;
                        case"JPN":
                            e = l.latLngToXY(35.689487, 139.691706);
                            break;
                        case"MYS":
                            e = l.latLngToXY(3.139003, 101.686855);
                            break;
                        case"NOR":
                            e = l.latLngToXY(59.913869, 10.752245);
                            break;
                        case"USA":
                            e = l.latLngToXY(41.140276, -100.760145);
                            break;
                        case"VNM":
                            e = l.latLngToXY(21.027764, 105.83416);
                            break;
                        default:
                            e = l.path.centroid(s.select("path." + t.origin).data()[0])
                    } else e = l.latLngToXY(val(t.origin.latitude, t), val(t.origin.longitude, t));
                    if ("string" == typeof t.destination) switch (t.destination) {
                        case"CAN":
                            n = l.latLngToXY(56.624472, -114.665293);
                            break;
                        case"CHL":
                            n = l.latLngToXY(-33.44889, -70.669265);
                            break;
                        case"IDN":
                            n = l.latLngToXY(-6.208763, 106.845599);
                            break;
                        case"JPN":
                            n = l.latLngToXY(35.689487, 139.691706);
                            break;
                        case"MYS":
                            n = l.latLngToXY(3.139003, 101.686855);
                            break;
                        case"NOR":
                            n = l.latLngToXY(59.913869, 10.752245);
                            break;
                        case"USA":
                            n = l.latLngToXY(41.140276, -100.760145);
                            break;
                        case"VNM":
                            n = l.latLngToXY(21.027764, 105.83416);
                            break;
                        default:
                            n = l.path.centroid(s.select("path." + t.destination).data()[0])
                    } else n = l.latLngToXY(val(t.destination.latitude, t), val(t.destination.longitude, t));
                    var r = [(e[0] + n[0]) / 2, (e[1] + n[1]) / 2];
                    if (i.greatArc) {
                        var o = c.geo.greatArc().source(function (t) {
                            return [val(t.origin.longitude, t), val(t.origin.latitude, t)]
                        }).target(function (t) {
                            return [val(t.destination.longitude, t), val(t.destination.latitude, t)]
                        });
                        return u(o(t))
                    }
                    var a = val(t.arcSharpness, i.arcSharpness, t);
                    return "M" + e[0] + "," + e[1] + "S" + (r[0] + 50 * a) + "," + (r[1] - 75 * a) + "," + n[0] + "," + n[1]
                }).attr("data-info", function (t) {
                    return JSON.stringify(t)
                }).on("mouseover", function (t) {
                    var e = c.select(this);
                    i.popupOnHover && l.updatePopup(e, t, i, s)
                }).on("mouseout", function (t) {
                    c.select(this);
                    c.selectAll(".datamaps-hoverover").style("display", "none")
                }).transition().delay(100).style("fill", function (t) {
                    var e = this.getTotalLength();
                    return this.style.transition = this.style.WebkitTransition = "none", this.style.strokeDasharray = e + " " + e, this.style.strokeDashoffset = e, this.getBoundingClientRect(), this.style.transition = this.style.WebkitTransition = "stroke-dashoffset " + val(t.animationSpeed, i.animationSpeed, t) + "ms ease-out", this.style.strokeDashoffset = "0", "none"
                }), r.exit().transition().style("opacity", 0).remove()
            }

            function handleLabels(s, u) {
                var c = this;
                u = u || {};
                var p = this.projection([-67.707617, 42.722131]);
                this.svg.selectAll(".datamaps-subunit").attr("data-foo", function (t) {
                    var e, n, r = c.path.centroid(t), o = 7.5, a = 5;
                    -1 < ["FL", "KY", "MI"].indexOf(t.id) && (o = -2.5), "NY" === t.id && (o = -1), "MI" === t.id && (a = 18), "LA" === t.id && (o = 13), e = r[0] - o, n = r[1] + a;
                    var i = ["VT", "NH", "MA", "RI", "CT", "NJ", "DE", "MD", "DC"].indexOf(t.id);
                    if (-1 < i) {
                        var l = p[1];
                        e = p[0], n = l + i * (2 + (u.fontSize || 12)), s.append("line").attr("x1", e - 3).attr("y1", n - 5).attr("x2", r[0]).attr("y2", r[1]).style("stroke", u.labelColor || "#000").style("stroke-width", u.lineWidth || 1)
                    }
                    return s.append("text").attr("x", e).attr("y", n).style("font-size", (u.fontSize || 10) + "px").style("font-family", u.fontFamily || "Verdana").style("fill", u.labelColor || "#000").text(function () {
                        return u.customLabelText && u.customLabelText[t.id] ? u.customLabelText[t.id] : t.id
                    }), "bar"
                })
            }

            function handleBubbles(t, e, o) {
                var r = this, n = this.options.fills, a = this.options.filters, i = this.svg;
                if (!e || e && !e.slice) throw"Datamaps Error - bubbles must be an array";
                var l = t.selectAll("circle.datamaps-bubble").data(e, o.key);

                function datumHasCoords(t) {
                    return void 0 !== t && void 0 !== t.latitude && void 0 !== t.longitude
                }

                l.enter().append("svg:circle").attr("class", "datamaps-bubble").attr("cx", function (t) {
                    var e;
                    if (datumHasCoords(t) ? e = r.latLngToXY(t.latitude, t.longitude) : t.centered && (e = "USA" === t.centered ? r.projection([-98.58333, 39.83333]) : r.path.centroid(i.select("path." + t.centered).data()[0])), e) return e[0]
                }).attr("cy", function (t) {
                    var e;
                    if (datumHasCoords(t) ? e = r.latLngToXY(t.latitude, t.longitude) : t.centered && (e = "USA" === t.centered ? r.projection([-98.58333, 39.83333]) : r.path.centroid(i.select("path." + t.centered).data()[0])), e) return e[1]
                }).attr("r", function (t) {
                    return o.animate ? 0 : val(t.radius, o.radius, t)
                }).attr("data-info", function (t) {
                    return JSON.stringify(t)
                }).attr("filter", function (t) {
                    var e = a[val(t.filterKey, o.filterKey, t)];
                    if (e) return e
                }).style("stroke", function (t) {
                    return val(t.borderColor, o.borderColor, t)
                }).style("stroke-width", function (t) {
                    return val(t.borderWidth, o.borderWidth, t)
                }).style("stroke-opacity", function (t) {
                    return val(t.borderOpacity, o.borderOpacity, t)
                }).style("fill-opacity", function (t) {
                    return val(t.fillOpacity, o.fillOpacity, t)
                }).style("fill", function (t) {
                    return n[val(t.fillKey, o.fillKey, t)] || n.defaultFill
                }).on("mouseover", function (t) {
                    var e = c.select(this);
                    if (o.highlightOnHover) {
                        var n = {
                            fill: e.style("fill"),
                            stroke: e.style("stroke"),
                            "stroke-width": e.style("stroke-width"),
                            "fill-opacity": e.style("fill-opacity")
                        };
                        e.style("fill", val(t.highlightFillColor, o.highlightFillColor, t)).style("stroke", val(t.highlightBorderColor, o.highlightBorderColor, t)).style("stroke-width", val(t.highlightBorderWidth, o.highlightBorderWidth, t)).style("stroke-opacity", val(t.highlightBorderOpacity, o.highlightBorderOpacity, t)).style("fill-opacity", val(t.highlightFillOpacity, o.highlightFillOpacity, t)).attr("data-previousAttributes", JSON.stringify(n))
                    }
                    o.popupOnHover && r.updatePopup(e, t, o, i)
                }).on("mouseout", function (t) {
                    var e = c.select(this);
                    if (o.highlightOnHover) {
                        var n = JSON.parse(e.attr("data-previousAttributes"));
                        for (var r in n) e.style(r, n[r])
                    }
                    c.selectAll(".datamaps-hoverover").style("display", "none")
                }), l.transition().duration(400).attr("r", function (t) {
                    return val(t.radius, o.radius, t)
                }).transition().duration(0).attr("data-info", function (t) {
                    return JSON.stringify(t)
                }), l.exit().transition().delay(o.exitDelay).attr("r", 0).remove()
            }

            function defaults(n) {
                return Array.prototype.slice.call(arguments, 1).forEach(function (t) {
                    if (t) for (var e in t) null == n[e] && ("function" == typeof t[e] ? n[e] = t[e] : n[e] = JSON.parse(JSON.stringify(t[e])))
                }), n
            }

            function Datamap(t) {
                if (void 0 === c || void 0 === i) throw new Error("Include d3.js (v3.0.3 or greater) and topojson on this page before creating a new map");
                return this.options = defaults(t, o), this.options.geographyConfig = defaults(t.geographyConfig, o.geographyConfig), this.options.projectionConfig = defaults(t.projectionConfig, o.projectionConfig), this.options.bubblesConfig = defaults(t.bubblesConfig, o.bubblesConfig), this.options.arcConfig = defaults(t.arcConfig, o.arcConfig), 0 < c.select(this.options.element).select("svg").length && function (t, e, n) {
                    return this.svg = c.select(t).append("svg").attr("width", n || t.offsetWidth).attr("data-width", n || t.offsetWidth).attr("class", "datamap").attr("height", e || t.offsetHeight).style("overflow", "hidden"), this.options.responsive && (c.select(this.options.element).style({
                        position: "relative",
                        "padding-bottom": 100 * this.options.aspectRatio + "%"
                    }), c.select(this.options.element).select("svg").style({
                        position: "absolute",
                        width: "100%",
                        height: "100%"
                    }), c.select(this.options.element).select("svg").select("g").selectAll("path").style("vector-effect", "non-scaling-stroke")), this.svg
                }.call(this, this.options.element, this.options.height, this.options.width), this.addPlugin("bubbles", handleBubbles), this.addPlugin("legend", addLegend), this.addPlugin("arc", handleArcs), this.addPlugin("labels", handleLabels), this.addPlugin("graticule", addGraticule), this.options.disableDefaultStyles || c.select(".datamaps-style-block").empty() && c.select("head").append("style").attr("class", "datamaps-style-block").html('.datamap path.datamaps-graticule { fill: none; stroke: #777; stroke-width: 0.5px; stroke-opacity: .5; pointer-events: none; } .datamap .labels {pointer-events: none;} .datamap path:not(.datamaps-arc), .datamap circle, .datamap line {stroke: #FFFFFF; vector-effect: non-scaling-stroke; stroke-width: 1px;} .datamaps-legend dt, .datamaps-legend dd { float: left; margin: 0 3px 0 0;} .datamaps-legend dd {width: 20px; margin-right: 6px; border-radius: 3px;} .datamaps-legend {padding-bottom: 20px; z-index: 1001; position: absolute; left: 4px; font-size: 12px; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;} .datamaps-hoverover {display: none; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; } .hoverinfo {padding: 4px; border-radius: 1px; background-color: #FFF; box-shadow: 1px 1px 5px #CCC; font-size: 12px; border: 1px solid #CCC; } .hoverinfo hr {border:1px dotted #CCC; }'), this.draw()
            }

            Datamap.prototype.resize = function () {
                var t = this.options;
                if (t.responsive) {
                    var e = t.element.clientWidth, n = c.select(t.element).select("svg").attr("data-width");
                    c.select(t.element).select("svg").selectAll("g").attr("transform", "scale(" + e / n + ")")
                }
            }, Datamap.prototype.draw = function () {
                var r = this, t = r.options, e = t.setProjection.apply(this, [t.element, t]);
                return this.path = e.path, this.projection = e.projection, t.geographyConfig.dataUrl ? c.json(t.geographyConfig.dataUrl, function (t, e) {
                    if (t) throw new Error(t);
                    draw(r.customTopo = e)
                }) : draw(this[t.scope + "Topo"] || t.geographyConfig.dataJson), this;

                function draw(t) {
                    r.options.dataUrl && c[r.options.dataType](r.options.dataUrl, function (t) {
                        if ("csv" === r.options.dataType && t && t.slice) {
                            for (var e = {}, n = 0; n < t.length; n++) e[t[n].id] = t[n];
                            t = e
                        }
                        Datamaps.prototype.updateChoropleth.call(r, t)
                    }), function (t) {
                        var r = this.options.fills, o = this.options.data || {}, e = this.options.geographyConfig,
                            n = this.svg.select("g.datamaps-subunits");
                        n.empty() && (n = this.addLayer("datamaps-subunits", null, !0));
                        var a = i.feature(t, t.objects[this.options.scope]).features;
                        e.hideAntarctica && (a = a.filter(function (t) {
                            return "ATA" !== t.id
                        })), e.hideHawaiiAndAlaska && (a = a.filter(function (t) {
                            return "HI" !== t.id && "AK" !== t.id
                        })), n.selectAll("path.datamaps-subunit").data(a).enter().append("path").attr("d", this.path).attr("class", function (t) {
                            return "datamaps-subunit " + t.id
                        }).attr("data-info", function (t) {
                            return JSON.stringify(o[t.id])
                        }).style("fill", function (t) {
                            var e, n = o[t.id];
                            return n && n.fillKey && (e = r[val(n.fillKey, {
                                data: o[t.id],
                                geography: t
                            })]), void 0 === e && (e = val(n && n.fillColor, r.defaultFill, {
                                data: o[t.id],
                                geography: t
                            })), e
                        }).style("stroke-width", e.borderWidth).style("stroke-opacity", e.borderOpacity).style("stroke", e.borderColor)
                    }.call(r, t), function () {
                        var o = this.svg, a = this, i = this.options.geographyConfig;
                        (i.highlightOnHover || i.popupOnHover) && o.selectAll(".datamaps-subunit").on("mouseover", function (t) {
                            var e = c.select(this), n = a.options.data[t.id] || {};
                            if (i.highlightOnHover) {
                                var r = {
                                    fill: e.style("fill"),
                                    stroke: e.style("stroke"),
                                    "stroke-width": e.style("stroke-width"),
                                    "fill-opacity": e.style("fill-opacity")
                                };
                                e.style("fill", val(n.highlightFillColor, i.highlightFillColor, n)).style("stroke", val(n.highlightBorderColor, i.highlightBorderColor, n)).style("stroke-width", val(n.highlightBorderWidth, i.highlightBorderWidth, n)).style("stroke-opacity", val(n.highlightBorderOpacity, i.highlightBorderOpacity, n)).style("fill-opacity", val(n.highlightFillOpacity, i.highlightFillOpacity, n)).attr("data-previousAttributes", JSON.stringify(r)), /((MSIE)|(Trident))/.test(navigator.userAgent) || function () {
                                    this.parentNode.appendChild(this)
                                }.call(this)
                            }
                            i.popupOnHover && a.updatePopup(e, t, i, o)
                        }).on("mouseout", function () {
                            var t = c.select(this);
                            if (i.highlightOnHover) {
                                var e = JSON.parse(t.attr("data-previousAttributes"));
                                for (var n in e) t.style(n, e[n])
                            }
                            t.on("mousemove", null), c.selectAll(".datamaps-hoverover").style("display", "none")
                        })
                    }.call(r), (r.options.geographyConfig.popupOnHover || r.options.bubblesConfig.popupOnHover) && (hoverover = c.select(r.options.element).append("div").attr("class", "datamaps-hoverover").style("z-index", 10001).style("position", "absolute")), r.options.done(r)
                }
            }, Datamap.prototype.worldTopo = {
                type: "Topology",
                objects: {
                    world: {
                        type: "GeometryCollection",
                        geometries: [{
                            type: "Polygon",
                            properties: {name: "Afghanistan"},
                            id: "AFG",
                            arcs: [[0, 1, 2, 3, 4, 5]]
                        }, {
                            type: "MultiPolygon",
                            properties: {name: "Angola"},
                            id: "AGO",
                            arcs: [[[6, 7, 8, 9]], [[10, 11, 12]]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Albania"},
                            id: "ALB",
                            arcs: [[13, 14, 15, 16, 17]]
                        }, {
                            type: "Polygon",
                            properties: {name: "United Arab Emirates"},
                            id: "ARE",
                            arcs: [[18, 19, 20, 21, 22]]
                        }, {
                            type: "MultiPolygon",
                            properties: {name: "Argentina"},
                            id: "ARG",
                            arcs: [[[23, 24]], [[25, 26, 27, 28, 29, 30]]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Armenia"},
                            id: "ARM",
                            arcs: [[31, 32, 33, 34, 35]]
                        }, {
                            type: "MultiPolygon",
                            properties: {name: "Antarctica"},
                            id: "ATA",
                            arcs: [[[36]], [[37]], [[38]], [[39]], [[40]], [[41]], [[42]], [[43]]]
                        }, {
                            type: "Polygon",
                            properties: {name: "French Southern and Antarctic Lands"},
                            id: "ATF",
                            arcs: [[44]]
                        }, {
                            type: "MultiPolygon",
                            properties: {name: "Australia"},
                            id: "AUS",
                            arcs: [[[45]], [[46]]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Austria"},
                            id: "AUT",
                            arcs: [[47, 48, 49, 50, 51, 52, 53]]
                        }, {
                            type: "MultiPolygon",
                            properties: {name: "Azerbaijan"},
                            id: "AZE",
                            arcs: [[[54, -35]], [[55, 56, -33, 57, 58]]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Burundi"},
                            id: "BDI",
                            arcs: [[59, 60, 61]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Belgium"},
                            id: "BEL",
                            arcs: [[62, 63, 64, 65, 66]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Benin"},
                            id: "BEN",
                            arcs: [[67, 68, 69, 70, 71]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Burkina Faso"},
                            id: "BFA",
                            arcs: [[72, 73, 74, -70, 75, 76]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Bangladesh"},
                            id: "BGD",
                            arcs: [[77, 78, 79]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Bulgaria"},
                            id: "BGR",
                            arcs: [[80, 81, 82, 83, 84, 85]]
                        }, {
                            type: "MultiPolygon",
                            properties: {name: "The Bahamas"},
                            id: "BHS",
                            arcs: [[[86]], [[87]], [[88]]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Bosnia and Herzegovina"},
                            id: "BIH",
                            arcs: [[89, 90, 91]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Belarus"},
                            id: "BLR",
                            arcs: [[92, 93, 94, 95, 96]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Belize"},
                            id: "BLZ",
                            arcs: [[97, 98, 99]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Bolivia"},
                            id: "BOL",
                            arcs: [[100, 101, 102, 103, -31]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Brazil"},
                            id: "BRA",
                            arcs: [[-27, 104, -103, 105, 106, 107, 108, 109, 110, 111, 112]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Brunei"},
                            id: "BRN",
                            arcs: [[113, 114]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Bhutan"},
                            id: "BTN",
                            arcs: [[115, 116]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Botswana"},
                            id: "BWA",
                            arcs: [[117, 118, 119, 120]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Central African Republic"},
                            id: "CAF",
                            arcs: [[121, 122, 123, 124, 125, 126, 127]]
                        }, {
                            type: "MultiPolygon",
                            properties: {name: "Canada"},
                            id: "CAN",
                            arcs: [[[128]], [[129]], [[130]], [[131]], [[132]], [[133]], [[134]], [[135]], [[136]], [[137]], [[138, 139, 140, 141]], [[142]], [[143]], [[144]], [[145]], [[146]], [[147]], [[148]], [[149]], [[150]], [[151]], [[152]], [[153]], [[154]], [[155]], [[156]], [[157]], [[158]], [[159]], [[160]]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Switzerland"},
                            id: "CHE",
                            arcs: [[-51, 161, 162, 163]]
                        }, {
                            type: "MultiPolygon",
                            properties: {name: "Chile"},
                            id: "CHL",
                            arcs: [[[-24, 164]], [[-30, 165, 166, -101]]]
                        }, {
                            type: "MultiPolygon",
                            properties: {name: "China"},
                            id: "CHN",
                            arcs: [[[167]], [[168, 169, 170, 171, 172, 173, -117, 174, 175, 176, 177, -4, 178, 179, 180, 181, 182, 183]]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Ivory Coast"},
                            id: "CIV",
                            arcs: [[184, 185, 186, 187, -73, 188]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Cameroon"},
                            id: "CMR",
                            arcs: [[189, 190, 191, 192, 193, 194, -128, 195]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Democratic Republic of the Congo"},
                            id: "COD",
                            arcs: [[196, 197, -60, 198, 199, -10, 200, -13, 201, -126, 202]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Republic of the Congo"},
                            id: "COG",
                            arcs: [[-12, 203, 204, -196, -127, -202]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Colombia"},
                            id: "COL",
                            arcs: [[205, 206, 207, 208, 209, -107, 210]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Costa Rica"},
                            id: "CRI",
                            arcs: [[211, 212, 213, 214]]
                        }, {type: "Polygon", properties: {name: "Cuba"}, id: "CUB", arcs: [[215]]}, {
                            type: "Polygon",
                            properties: {name: "Northern Cyprus"},
                            id: "-99",
                            arcs: [[216, 217]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Cyprus"},
                            id: "CYP",
                            arcs: [[218, -218]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Czech Republic"},
                            id: "CZE",
                            arcs: [[-53, 219, 220, 221]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Germany"},
                            id: "DEU",
                            arcs: [[222, 223, -220, -52, -164, 224, 225, -64, 226, 227, 228]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Djibouti"},
                            id: "DJI",
                            arcs: [[229, 230, 231, 232]]
                        }, {
                            type: "MultiPolygon",
                            properties: {name: "Denmark"},
                            id: "DNK",
                            arcs: [[[233]], [[-229, 234]]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Dominican Republic"},
                            id: "DOM",
                            arcs: [[235, 236]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Algeria"},
                            id: "DZA",
                            arcs: [[237, 238, 239, 240, 241, 242, 243, 244]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Ecuador"},
                            id: "ECU",
                            arcs: [[245, -206, 246]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Egypt"},
                            id: "EGY",
                            arcs: [[247, 248, 249, 250, 251]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Eritrea"},
                            id: "ERI",
                            arcs: [[252, 253, 254, -233]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Spain"},
                            id: "ESP",
                            arcs: [[255, 256, 257, 258]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Estonia"},
                            id: "EST",
                            arcs: [[259, 260, 261]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Ethiopia"},
                            id: "ETH",
                            arcs: [[-232, 262, 263, 264, 265, 266, 267, -253]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Finland"},
                            id: "FIN",
                            arcs: [[268, 269, 270, 271]]
                        }, {
                            type: "MultiPolygon",
                            properties: {name: "Fiji"},
                            id: "FJI",
                            arcs: [[[272]], [[273, 274]], [[275, -275]]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Falkland Islands"},
                            id: "FLK",
                            arcs: [[276]]
                        }, {
                            type: "MultiPolygon",
                            properties: {name: "France"},
                            id: "FRA",
                            arcs: [[[277]], [[278, -225, -163, 279, 280, -257, 281, -66]]]
                        }, {
                            type: "Polygon",
                            properties: {name: "French Guiana"},
                            id: "GUF",
                            arcs: [[282, 283, 284, 285, -111]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Gabon"},
                            id: "GAB",
                            arcs: [[286, 287, -190, -205]]
                        }, {
                            type: "MultiPolygon",
                            properties: {name: "United Kingdom"},
                            id: "GBR",
                            arcs: [[[288, 289]], [[290]]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Georgia"},
                            id: "GEO",
                            arcs: [[291, 292, -58, -32, 293]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Ghana"},
                            id: "GHA",
                            arcs: [[294, -189, -77, 295]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Guinea"},
                            id: "GIN",
                            arcs: [[296, 297, 298, 299, 300, 301, -187]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Gambia"},
                            id: "GMB",
                            arcs: [[302, 303]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Guinea Bissau"},
                            id: "GNB",
                            arcs: [[304, 305, -300]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Equatorial Guinea"},
                            id: "GNQ",
                            arcs: [[306, -191, -288]]
                        }, {
                            type: "MultiPolygon",
                            properties: {name: "Greece"},
                            id: "GRC",
                            arcs: [[[307]], [[308, -15, 309, -84, 310]]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Greenland"},
                            id: "GRL",
                            arcs: [[311]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Guatemala"},
                            id: "GTM",
                            arcs: [[312, 313, -100, 314, 315, 316]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Guyana"},
                            id: "GUY",
                            arcs: [[317, 318, -109, 319]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Honduras"},
                            id: "HND",
                            arcs: [[320, 321, -316, 322, 323]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Croatia"},
                            id: "HRV",
                            arcs: [[324, -92, 325, 326, 327, 328]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Haiti"},
                            id: "HTI",
                            arcs: [[-237, 329]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Hungary"},
                            id: "HUN",
                            arcs: [[-48, 330, 331, 332, 333, -329, 334]]
                        }, {
                            type: "MultiPolygon",
                            properties: {name: "Indonesia"},
                            id: "IDN",
                            arcs: [[[335]], [[336, 337]], [[338]], [[339]], [[340]], [[341]], [[342]], [[343]], [[344, 345]], [[346]], [[347]], [[348, 349]], [[350]]]
                        }, {
                            type: "Polygon",
                            properties: {name: "India"},
                            id: "IND",
                            arcs: [[-177, 351, -175, -116, -174, 352, -80, 353, 354]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Ireland"},
                            id: "IRL",
                            arcs: [[355, -289]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Iran"},
                            id: "IRN",
                            arcs: [[356, -6, 357, 358, 359, 360, -55, -34, -57, 361]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Iraq"},
                            id: "IRQ",
                            arcs: [[362, 363, 364, 365, 366, 367, -360]]
                        }, {type: "Polygon", properties: {name: "Iceland"}, id: "ISL", arcs: [[368]]}, {
                            type: "Polygon",
                            properties: {name: "Israel"},
                            id: "ISR",
                            arcs: [[369, 370, 371, -252, 372, 373, 374]]
                        }, {
                            type: "MultiPolygon",
                            properties: {name: "Italy"},
                            id: "ITA",
                            arcs: [[[375]], [[376]], [[377, 378, -280, -162, -50]]]
                        }, {type: "Polygon", properties: {name: "Jamaica"}, id: "JAM", arcs: [[379]]}, {
                            type: "Polygon",
                            properties: {name: "Jordan"},
                            id: "JOR",
                            arcs: [[-370, 380, -366, 381, 382, -372, 383]]
                        }, {
                            type: "MultiPolygon",
                            properties: {name: "Japan"},
                            id: "JPN",
                            arcs: [[[384]], [[385]], [[386]]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Kazakhstan"},
                            id: "KAZ",
                            arcs: [[387, 388, 389, 390, -181, 391]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Kenya"},
                            id: "KEN",
                            arcs: [[392, 393, 394, 395, -265, 396]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Kyrgyzstan"},
                            id: "KGZ",
                            arcs: [[-392, -180, 397, 398]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Cambodia"},
                            id: "KHM",
                            arcs: [[399, 400, 401, 402]]
                        }, {
                            type: "Polygon",
                            properties: {name: "South Korea"},
                            id: "KOR",
                            arcs: [[403, 404]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Kosovo"},
                            id: "-99",
                            arcs: [[-18, 405, 406, 407]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Kuwait"},
                            id: "KWT",
                            arcs: [[408, 409, -364]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Laos"},
                            id: "LAO",
                            arcs: [[410, 411, -172, 412, -401]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Lebanon"},
                            id: "LBN",
                            arcs: [[-374, 413, 414]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Liberia"},
                            id: "LBR",
                            arcs: [[415, 416, -297, -186]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Libya"},
                            id: "LBY",
                            arcs: [[417, -245, 418, 419, -250, 420, 421]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Sri Lanka"},
                            id: "LKA",
                            arcs: [[422]]
                        }, {type: "Polygon", properties: {name: "Lesotho"}, id: "LSO", arcs: [[423]]}, {
                            type: "Polygon",
                            properties: {name: "Lithuania"},
                            id: "LTU",
                            arcs: [[424, 425, 426, -93, 427]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Luxembourg"},
                            id: "LUX",
                            arcs: [[-226, -279, -65]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Latvia"},
                            id: "LVA",
                            arcs: [[428, -262, 429, -94, -427]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Morocco"},
                            id: "MAR",
                            arcs: [[-242, 430, 431]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Moldova"},
                            id: "MDA",
                            arcs: [[432, 433]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Madagascar"},
                            id: "MDG",
                            arcs: [[434]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Mexico"},
                            id: "MEX",
                            arcs: [[435, -98, -314, 436, 437]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Macedonia"},
                            id: "MKD",
                            arcs: [[-408, 438, -85, -310, -14]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Mali"},
                            id: "MLI",
                            arcs: [[439, -239, 440, -74, -188, -302, 441]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Myanmar"},
                            id: "MMR",
                            arcs: [[442, -78, -353, -173, -412, 443]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Montenegro"},
                            id: "MNE",
                            arcs: [[444, -326, -91, 445, -406, -17]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Mongolia"},
                            id: "MNG",
                            arcs: [[446, -183]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Mozambique"},
                            id: "MOZ",
                            arcs: [[447, 448, 449, 450, 451, 452, 453, 454]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Mauritania"},
                            id: "MRT",
                            arcs: [[455, 456, 457, -240, -440]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Malawi"},
                            id: "MWI",
                            arcs: [[-455, 458, 459]]
                        }, {
                            type: "MultiPolygon",
                            properties: {name: "Malaysia"},
                            id: "MYS",
                            arcs: [[[460, 461]], [[-349, 462, -115, 463]]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Namibia"},
                            id: "NAM",
                            arcs: [[464, -8, 465, -119, 466]]
                        }, {
                            type: "Polygon",
                            properties: {name: "New Caledonia"},
                            id: "NCL",
                            arcs: [[467]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Niger"},
                            id: "NER",
                            arcs: [[-75, -441, -238, -418, 468, -194, 469, -71]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Nigeria"},
                            id: "NGA",
                            arcs: [[470, -72, -470, -193]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Nicaragua"},
                            id: "NIC",
                            arcs: [[471, -324, 472, -213]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Netherlands"},
                            id: "NLD",
                            arcs: [[-227, -63, 473]]
                        }, {
                            type: "MultiPolygon",
                            properties: {name: "Norway"},
                            id: "NOR",
                            arcs: [[[474, -272, 475, 476]], [[477]], [[478]], [[479]]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Nepal"},
                            id: "NPL",
                            arcs: [[-352, -176]]
                        }, {
                            type: "MultiPolygon",
                            properties: {name: "New Zealand"},
                            id: "NZL",
                            arcs: [[[480]], [[481]]]
                        }, {
                            type: "MultiPolygon",
                            properties: {name: "Oman"},
                            id: "OMN",
                            arcs: [[[482, 483, -22, 484]], [[-20, 485]]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Pakistan"},
                            id: "PAK",
                            arcs: [[-178, -355, 486, -358, -5]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Panama"},
                            id: "PAN",
                            arcs: [[487, -215, 488, -208]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Peru"},
                            id: "PER",
                            arcs: [[-167, 489, -247, -211, -106, -102]]
                        }, {
                            type: "MultiPolygon",
                            properties: {name: "Philippines"},
                            id: "PHL",
                            arcs: [[[490]], [[491]], [[492]], [[493]], [[494]], [[495]], [[496]]]
                        }, {
                            type: "MultiPolygon",
                            properties: {name: "Papua New Guinea"},
                            id: "PNG",
                            arcs: [[[497]], [[498]], [[-345, 499]], [[500]]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Poland"},
                            id: "POL",
                            arcs: [[-224, 501, 502, -428, -97, 503, 504, -221]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Puerto Rico"},
                            id: "PRI",
                            arcs: [[505]]
                        }, {
                            type: "Polygon",
                            properties: {name: "North Korea"},
                            id: "PRK",
                            arcs: [[506, 507, -405, 508, -169]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Portugal"},
                            id: "PRT",
                            arcs: [[-259, 509]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Paraguay"},
                            id: "PRY",
                            arcs: [[-104, -105, -26]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Qatar"},
                            id: "QAT",
                            arcs: [[510, 511]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Romania"},
                            id: "ROU",
                            arcs: [[512, -434, 513, 514, -81, 515, -333]]
                        }, {
                            type: "MultiPolygon",
                            properties: {name: "Russia"},
                            id: "RUS",
                            arcs: [[[516]], [[-503, 517, -425]], [[518, 519]], [[520]], [[521]], [[522]], [[523]], [[524]], [[525]], [[526, -507, -184, -447, -182, -391, 527, -59, -293, 528, 529, -95, -430, -261, 530, -269, -475, 531, -520]], [[532]], [[533]], [[534]]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Rwanda"},
                            id: "RWA",
                            arcs: [[535, -61, -198, 536]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Western Sahara"},
                            id: "ESH",
                            arcs: [[-241, -458, 537, -431]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Saudi Arabia"},
                            id: "SAU",
                            arcs: [[538, -382, -365, -410, 539, -512, 540, -23, -484, 541]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Sudan"},
                            id: "SDN",
                            arcs: [[542, 543, -123, 544, -421, -249, 545, -254, -268, 546]]
                        }, {
                            type: "Polygon",
                            properties: {name: "South Sudan"},
                            id: "SSD",
                            arcs: [[547, -266, -396, 548, -203, -125, 549, -543]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Senegal"},
                            id: "SEN",
                            arcs: [[550, -456, -442, -301, -306, 551, -304]]
                        }, {
                            type: "MultiPolygon",
                            properties: {name: "Solomon Islands"},
                            id: "SLB",
                            arcs: [[[552]], [[553]], [[554]], [[555]], [[556]]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Sierra Leone"},
                            id: "SLE",
                            arcs: [[557, -298, -417]]
                        }, {
                            type: "Polygon",
                            properties: {name: "El Salvador"},
                            id: "SLV",
                            arcs: [[558, -317, -322]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Somaliland"},
                            id: "-99",
                            arcs: [[-263, -231, 559, 560]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Somalia"},
                            id: "SOM",
                            arcs: [[-397, -264, -561, 561]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Republic of Serbia"},
                            id: "SRB",
                            arcs: [[-86, -439, -407, -446, -90, -325, -334, -516]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Suriname"},
                            id: "SUR",
                            arcs: [[562, -285, 563, -283, -110, -319]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Slovakia"},
                            id: "SVK",
                            arcs: [[-505, 564, -331, -54, -222]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Slovenia"},
                            id: "SVN",
                            arcs: [[-49, -335, -328, 565, -378]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Sweden"},
                            id: "SWE",
                            arcs: [[-476, -271, 566]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Swaziland"},
                            id: "SWZ",
                            arcs: [[567, -451]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Syria"},
                            id: "SYR",
                            arcs: [[-381, -375, -415, 568, 569, -367]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Chad"},
                            id: "TCD",
                            arcs: [[-469, -422, -545, -122, -195]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Togo"},
                            id: "TGO",
                            arcs: [[570, -296, -76, -69]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Thailand"},
                            id: "THA",
                            arcs: [[571, -462, 572, -444, -411, -400]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Tajikistan"},
                            id: "TJK",
                            arcs: [[-398, -179, -3, 573]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Turkmenistan"},
                            id: "TKM",
                            arcs: [[-357, 574, -389, 575, -1]]
                        }, {
                            type: "Polygon",
                            properties: {name: "East Timor"},
                            id: "TLS",
                            arcs: [[576, -337]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Trinidad and Tobago"},
                            id: "TTO",
                            arcs: [[577]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Tunisia"},
                            id: "TUN",
                            arcs: [[-244, 578, -419]]
                        }, {
                            type: "MultiPolygon",
                            properties: {name: "Turkey"},
                            id: "TUR",
                            arcs: [[[-294, -36, -361, -368, -570, 579]], [[-311, -83, 580]]]
                        }, {type: "Polygon", properties: {name: "Taiwan"}, id: "TWN", arcs: [[581]]}, {
                            type: "Polygon",
                            properties: {name: "United Republic of Tanzania"},
                            id: "TZA",
                            arcs: [[-394, 582, -448, -460, 583, -199, -62, -536, 584]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Uganda"},
                            id: "UGA",
                            arcs: [[-537, -197, -549, -395, -585]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Ukraine"},
                            id: "UKR",
                            arcs: [[-530, 585, -514, -433, -513, -332, -565, -504, -96]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Uruguay"},
                            id: "URY",
                            arcs: [[-113, 586, -28]]
                        }, {
                            type: "MultiPolygon",
                            properties: {name: "United States of America"},
                            id: "USA",
                            arcs: [[[587]], [[588]], [[589]], [[590]], [[591]], [[592, -438, 593, -139]], [[594]], [[595]], [[596]], [[-141, 597]]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Uzbekistan"},
                            id: "UZB",
                            arcs: [[-576, -388, -399, -574, -2]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Venezuela"},
                            id: "VEN",
                            arcs: [[598, -320, -108, -210]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Vietnam"},
                            id: "VNM",
                            arcs: [[599, -402, -413, -171]]
                        }, {
                            type: "MultiPolygon",
                            properties: {name: "Vanuatu"},
                            id: "VUT",
                            arcs: [[[600]], [[601]]]
                        }, {
                            type: "Polygon",
                            properties: {name: "West Bank"},
                            id: "PSE",
                            arcs: [[-384, -371]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Yemen"},
                            id: "YEM",
                            arcs: [[602, -542, -483]]
                        }, {
                            type: "Polygon",
                            properties: {name: "South Africa"},
                            id: "ZAF",
                            arcs: [[-467, -118, 603, -452, -568, -450, 604], [-424]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Zambia"},
                            id: "ZMB",
                            arcs: [[-459, -454, 605, -120, -466, -7, -200, -584]]
                        }, {
                            type: "Polygon",
                            properties: {name: "Zimbabwe"},
                            id: "ZWE",
                            arcs: [[-604, -121, -606, -453]]
                        }]
                    }
                },
                arcs: [[[6700, 7164], [28, -23], [21, 8], [6, 27], [22, 9], [15, 18], [6, 47], [23, 11], [5, 21], [13, -15], [8, -2]], [[6847, 7265], [16, -1], [20, -12]], [[6883, 7252], [9, -7], [20, 19], [9, -12], [9, 27], [17, -1], [4, 9], [3, 24], [12, 20], [15, -13], [-3, -18], [9, -3], [-3, -50], [11, -19], [10, 12], [12, 6], [17, 27], [19, -5], [29, 0]], [[7082, 7268], [5, -17]], [[7087, 7251], [-16, -6], [-14, -11], [-32, -7], [-30, -13], [-16, -25], [6, -25], [4, -30], [-14, -25], [1, -22], [-8, -22], [-26, 2], [11, -39], [-18, -15], [-12, -35], [2, -36], [-11, -16], [-10, 5], [-22, -8], [-3, -16], [-20, 0], [-16, -34], [-1, -50], [-36, -24], [-19, 5], [-6, -13], [-16, 7], [-28, -8], [-47, 30]], [[6690, 6820], [25, 53], [-2, 38], [-21, 10], [-2, 38], [-9, 47], [12, 32], [-12, 9], [7, 43], [12, 74]], [[5664, 4412], [3, -18], [-4, -29], [5, -28], [-4, -22], [3, -20], [-58, 1], [-2, -188], [19, -49], [18, -37]], [[5644, 4022], [-51, -24], [-67, 9], [-19, 28], [-113, -3], [-4, -4], [-17, 27], [-18, 2], [-16, -10], [-14, -12]], [[5325, 4035], [-2, 38], [4, 51], [9, 55], [2, 25], [9, 53], [6, 24], [16, 39], [9, 26], [3, 44], [-1, 34], [-9, 21], [-7, 36], [-7, 35], [2, 12], [8, 24], [-8, 57], [-6, 39], [-14, 38], [3, 11]], [[5342, 4697], [11, 8], [8, -1], [10, 7], [82, -1], [7, -44], [8, -35], [6, -19], [11, -31], [18, 5], [9, 8], [16, -8], [4, 14], [7, 35], [17, 2], [2, 10], [14, 1], [-3, -22], [34, 1], [1, -37], [5, -23], [-4, -36], [2, -36], [9, -22], [-1, -70], [7, 5], [12, -1], [17, 8], [13, -3]], [[5338, 4715], [-8, 45]], [[5330, 4760], [12, 25], [8, 10], [10, -20]], [[5360, 4775], [-10, -12], [-4, -16], [-1, -25], [-7, -7]], [[5571, 7530], [-3, -20], [4, -25], [11, -15]], [[5583, 7470], [0, -15], [-9, -9], [-2, -19], [-13, -29]], [[5559, 7398], [-5, 5], [0, 13], [-15, 19], [-3, 29], [2, 40], [4, 18], [-4, 10]], [[5538, 7532], [-2, 18], [12, 29], [1, -11], [8, 6]], [[5557, 7574], [6, -16], [7, -6], [1, -22]], [[6432, 6490], [5, 3], [1, -16], [22, 9], [23, -2], [17, -1], [19, 39], [20, 38], [18, 37]], [[6557, 6597], [5, -20]], [[6562, 6577], [4, -47]], [[6566, 6530], [-14, 0], [-3, -39], [5, -8], [-12, -12], [0, -24], [-8, -24], [-1, -24]], [[6533, 6399], [-6, -12], [-83, 29], [-11, 60], [-1, 14]], [[3140, 1814], [-17, 2], [-30, 0], [0, 132]], [[3093, 1948], [11, -27], [14, -45], [36, -35], [39, -15], [-13, -30], [-26, -2], [-14, 20]], [[3258, 3743], [51, -96], [23, -9], [34, -44], [29, -23], [4, -26], [-28, -90], [28, -16], [32, -9], [22, 10], [25, 45], [4, 52]], [[3482, 3537], [14, 11], [14, -34], [-1, -47], [-23, -33], [-19, -24], [-31, -57], [-37, -81]], [[3399, 3272], [-7, -47], [-7, -61], [0, -58], [-6, -14], [-2, -38]], [[3377, 3054], [-2, -31], [35, -50], [-4, -41], [18, -26], [-2, -29], [-26, -75], [-42, -32], [-55, -12], [-31, 6], [6, -36], [-6, -44], [5, -30], [-16, -20], [-29, -8], [-26, 21], [-11, -15], [4, -59], [18, -18], [16, 19], [8, -31], [-26, -18], [-22, -37], [-4, -59], [-7, -32], [-26, 0], [-22, -31], [-8, -44], [28, -43], [26, -12], [-9, -53], [-33, -33], [-18, -70], [-25, -23], [-12, -28], [9, -61], [19, -34], [-12, 3]], [[3095, 1968], [-26, 9], [-67, 8], [-11, 34], [0, 45], [-18, -4], [-10, 21], [-3, 63], [22, 26], [9, 37], [-4, 30], [15, 51], [10, 78], [-3, 35], [12, 11], [-3, 22], [-13, 12], [10, 25], [-13, 22], [-6, 68], [11, 12], [-5, 72], [7, 61], [7, 52], [17, 22], [-9, 58], [0, 54], [21, 38], [-1, 50], [16, 57], [0, 55], [-7, 11], [-13, 102], [17, 60], [-2, 58], [10, 53], [18, 56], [20, 36], [-9, 24], [6, 19], [-1, 98], [30, 29], [10, 62], [-3, 14]], [[3136, 3714], [23, 54], [36, -15], [16, -42], [11, 47], [32, -2], [4, -13]], [[6210, 7485], [39, 9]], [[6249, 7494], [5, -15], [11, -10], [-6, -15], [15, -21], [-8, -18], [12, -16], [13, -10], [0, -41]], [[6291, 7348], [-10, -2]], [[6281, 7346], [-11, 34], [0, 10], [-12, -1], [-9, 16], [-5, -1]], [[6244, 7404], [-11, 17], [-21, 15], [3, 28], [-5, 21]], [[3345, 329], [-8, -30], [-8, -27], [-59, 8], [-62, -3], [-34, 20], [0, 2], [-16, 17], [63, -2], [60, -6], [20, 24], [15, 21], [29, -24]], [[577, 361], [-53, -8], [-36, 21], [-17, 21], [-1, 3], [-18, 16], [17, 22], [52, -9], [28, -18], [21, -21], [7, -27]], [[3745, 447], [35, -26], [12, -36], [3, -25], [1, -30], [-43, -19], [-45, -15], [-52, -14], [-59, -11], [-65, 3], [-37, 20], [5, 24], [59, 16], [24, 20], [18, 26], [12, 22], [17, 20], [18, 25], [14, 0], [41, 12], [42, -12]], [[1633, 715], [36, -9], [33, 10], [-16, -20], [-26, -15], [-39, 4], [-27, 21], [6, 20], [33, -11]], [[1512, 716], [43, -23], [-17, 3], [-36, 5], [-38, 17], [20, 12], [28, -14]], [[2250, 808], [31, -8], [30, 7], [17, -34], [-22, 5], [-34, -2], [-34, 2], [-38, -4], [-28, 12], [-15, 24], [18, 11], [35, -8], [40, -5]], [[3098, 866], [4, -27], [-5, -23], [-8, -22], [-33, -8], [-31, -12], [-36, 1], [14, 24], [-33, -9], [-31, -8], [-21, 18], [-2, 24], [30, 23], [20, 7], [32, -2], [8, 30], [1, 22], [0, 47], [16, 28], [25, 9], [15, -22], [6, -22], [12, -26], [10, -26], [7, -26]], [[3371, 1268], [-11, -13], [-21, 9], [-23, -6], [-19, -14], [-20, -15], [-14, -17], [-4, -23], [2, -22], [13, -20], [-19, -14], [-26, -4], [-15, -20], [-17, -19], [-17, -25], [-4, -22], [9, -24], [15, -19], [23, -14], [21, -18], [12, -23], [6, -22], [8, -24], [13, -19], [8, -22], [4, -55], [8, -22], [2, -23], [9, -23], [-4, -31], [-15, -24], [-17, -20], [-37, -8], [-12, -21], [-17, -20], [-42, -22], [-37, -9], [-35, -13], [-37, -13], [-22, -24], [-45, -2], [-49, 2], [-44, -4], [-47, 0], [9, -24], [42, -10], [31, -16], [18, -21], [-31, -19], [-48, 6], [-40, -15], [-2, -24], [-1, -23], [33, -20], [6, -22], [35, -22], [59, -9], [50, -16], [40, -19], [50, -18], [70, -10], [68, -16], [47, -17], [52, -20], [27, -28], [13, -22], [34, 21], [46, 17], [48, 19], [58, 15], [49, 16], [69, 1], [68, -8], [56, -14], [18, 26], [39, 17], [70, 1], [55, 13], [52, 13], [58, 8], [62, 10], [43, 15], [-20, 21], [-12, 21], [0, 22], [-54, -2], [-57, -10], [-54, 0], [-8, 22], [4, 44], [12, 13], [40, 14], [47, 14], [34, 17], [33, 18], [25, 23], [38, 10], [38, 8], [19, 5], [43, 2], [41, 8], [34, 12], [34, 14], [30, 14], [39, 18], [24, 20], [26, 17], [9, 24], [-30, 13], [10, 25], [18, 18], [29, 12], [31, 14], [28, 18], [22, 23], [13, 28], [21, 16], [33, -3], [13, -20], [34, -2], [1, 22], [14, 23], [30, -6], [7, -22], [33, -3], [36, 10], [35, 7], [31, -3], [12, -25], [31, 20], [28, 10], [31, 9], [31, 8], [29, 14], [31, 9], [24, 13], [17, 20], [20, -15], [29, 8], [20, -27], [16, -21], [32, 11], [12, 24], [28, 16], [37, -4], [11, -22], [22, 22], [30, 7], [33, 3], [29, -2], [31, -7], [30, -3], [13, -20], [18, -17], [31, 10], [32, 3], [32, 0], [31, 1], [28, 8], [29, 7], [25, 16], [26, 11], [28, 5], [21, 17], [15, 32], [16, 20], [29, -10], [11, -21], [24, -13], [29, 4], [19, -21], [21, -15], [28, 14], [10, 26], [25, 10], [29, 20], [27, 8], [33, 11], [22, 13], [22, 14], [22, 13], [26, -7], [25, 21], [18, 16], [26, -1], [23, 14], [6, 21], [23, 16], [23, 11], [28, 10], [25, 4], [25, -3], [26, -6], [22, -16], [3, -26], [24, -19], [17, -17], [33, -7], [19, -16], [23, -16], [26, -3], [23, 11], [24, 24], [26, -12], [27, -7], [26, -7], [27, -5], [28, 0], [23, -61], [-1, -15], [-4, -27], [-26, -15], [-22, -22], [4, -23], [31, 1], [-4, -23], [-14, -22], [-13, -24], [21, -19], [32, -6], [32, 11], [15, 23], [10, 22], [15, 18], [17, 18], [7, 21], [15, 29], [18, 5], [31, 3], [28, 7], [28, 9], [14, 23], [8, 22], [19, 22], [27, 15], [23, 12], [16, 19], [15, 11], [21, 9], [27, -6], [25, 6], [28, 7], [30, -4], [20, 17], [14, 39], [11, -16], [13, -28], [23, -12], [27, -4], [26, 7], [29, -5], [26, -1], [17, 6], [24, -4], [21, -12], [25, 8], [30, 0], [25, 8], [29, -8], [19, 19], [14, 20], [19, 16], [35, 44], [18, -8], [21, -16], [18, -21], [36, -36], [27, -1], [25, 0], [30, 7], [30, 8], [23, 16], [19, 18], [31, 2], [21, 13], [22, -12], [14, -18], [19, -19], [31, 2], [19, -15], [33, -15], [35, -5], [29, 4], [21, 19], [19, 18], [25, 5], [25, -8], [29, -6], [26, 9], [25, 0], [24, -6], [26, -5], [25, 10], [30, 9], [28, 3], [32, 0], [25, 5], [25, 5], [8, 29], [1, 24], [17, -16], [5, -27], [10, -24], [11, -20], [23, -10], [32, 4], [36, 1], [25, 3], [37, 0], [26, 1], [36, -2], [31, -5], [20, -18], [-5, -22], [18, -18], [30, -13], [31, -15], [35, -11], [38, -9], [28, -9], [32, -2], [18, 20], [24, -16], [21, -19], [25, -13], [34, -6], [32, -7], [13, -23], [32, -14], [21, -21], [31, -9], [32, 1], [30, -4], [33, 1], [34, -4], [31, -8], [28, -14], [29, -12], [20, -17], [-3, -23], [-15, -21], [-13, -27], [-9, -21], [-14, -24], [-36, -9], [-16, -21], [-36, -13], [-13, -23], [-19, -22], [-20, -18], [-11, -25], [-7, -22], [-3, -26], [0, -22], [16, -23], [6, -22], [13, -21], [52, -8], [11, -26], [-50, -9], [-43, -13], [-52, -2], [-24, -34], [-5, -27], [-12, -22], [-14, -22], [37, -20], [14, -24], [24, -22], [33, -20], [39, -19], [42, -18], [64, -19], [14, -29], [80, -12], [5, -5], [21, -17], [77, 15], [63, -19], [48, -14], [-9997, -1], [24, 35], [50, -19], [3, 2], [30, 19], [4, 0], [3, -1], [40, -25], [35, 25], [7, 3], [81, 11], [27, -14], [13, -7], [41, -20], [79, -15], [63, -18], [107, -14], [80, 16], [118, -11], [67, -19], [73, 17], [78, 17], [6, 27], [-110, 3], [-89, 14], [-24, 23], [-74, 12], [5, 27], [10, 24], [10, 22], [-5, 25], [-46, 16], [-22, 21], [-43, 18], [68, -3], [64, 9], [40, -20], [50, 18], [45, 22], [23, 19], [-10, 25], [-36, 16], [-41, 17], [-57, 4], [-50, 8], [-54, 6], [-18, 22], [-36, 18], [-21, 21], [-9, 67], [14, -6], [25, -18], [45, 6], [44, 8], [23, -26], [44, 6], [37, 13], [35, 16], [32, 20], [41, 5], [-1, 22], [-9, 22], [8, 21], [36, 11], [16, -20], [42, 12], [32, 15], [40, 1], [38, 6], [37, 13], [30, 13], [34, 13], [22, -4], [19, -4], [41, 8], [37, -10], [38, 1], [37, 8], [37, -6], [41, -6], [39, 3], [40, -2], [42, -1], [38, 3], [28, 17], [34, 9], [35, -13], [33, 11], [30, 21], [18, -19], [9, -21], [18, -19], [29, 17], [33, -22], [38, -7], [32, -16], [39, 3], [36, 11], [41, -3], [38, -8], [38, -10], [15, 25], [-18, 20], [-14, 21], [-36, 5], [-15, 22], [-6, 22], [-10, 43], [21, -8], [36, -3], [36, 3], [33, -9], [28, -17], [12, -21], [38, -4], [36, 9], [38, 11], [34, 7], [28, -14], [37, 5], [24, 45], [23, -27], [32, -10], [34, 6], [23, -23], [37, -3], [33, -7], [34, -12], [21, 22], [11, 20], [28, -23], [38, 6], [28, -13], [19, -19], [37, 5], [29, 13], [29, 15], [33, 8], [39, 7], [36, 8], [27, 13], [16, 19], [7, 25], [-3, 24], [-9, 24], [-10, 23], [-9, 23], [-7, 21], [-1, 23], [2, 23], [13, 22], [11, 24], [5, 23], [-6, 26], [-3, 23], [14, 27], [15, 17], [18, 22], [19, 19], [22, 17], [11, 25], [15, 17], [18, 15], [26, 3], [18, 19], [19, 11], [23, 7], [20, 15], [16, 19], [22, 7], [16, -15], [-10, -20], [-29, -17]], [[6914, 2185], [18, -19], [26, -7], [1, -11], [-7, -27], [-43, -4], [-1, 31], [4, 25], [2, 12]], [[9038, 2648], [27, -21], [15, 8], [22, 12], [16, -4], [2, -70], [-9, -21], [-3, -47], [-10, 16], [-19, -41], [-6, 3], [-17, 2], [-17, 50], [-4, 39], [-16, 52], [1, 27], [18, -5]], [[8987, 4244], [10, -46], [18, 22], [9, -25], [13, -23], [-3, -26], [6, -51], [5, -29], [7, -7], [7, -51], [-3, -30], [9, -40], [31, -31], [19, -28], [19, -26], [-4, -14], [16, -37], [11, -64], [11, 13], [11, -26], [7, 9], [5, -63], [19, -36], [13, -22], [22, -48], [8, -48], [1, -33], [-2, -37], [13, -50], [-2, -52], [-5, -28], [-7, -52], [1, -34], [-6, -43], [-12, -53], [-21, -29], [-10, -46], [-9, -29], [-8, -51], [-11, -30], [-7, -44], [-4, -41], [2, -18], [-16, -21], [-31, -2], [-26, -24], [-13, -23], [-17, -26], [-23, 27], [-17, 10], [5, 31], [-15, -11], [-25, -43], [-24, 16], [-15, 9], [-16, 4], [-27, 17], [-18, 37], [-5, 45], [-7, 30], [-13, 24], [-27, 7], [9, 28], [-7, 44], [-13, -41], [-25, -11], [14, 33], [5, 34], [10, 29], [-2, 44], [-22, -50], [-18, -21], [-10, -47], [-22, 25], [1, 31], [-18, 43], [-14, 22], [5, 14], [-36, 35], [-19, 2], [-27, 29], [-50, -6], [-36, -21], [-31, -20], [-27, 4], [-29, -30], [-24, -14], [-6, -31], [-10, -24], [-23, -1], [-18, -5], [-24, 10], [-20, -6], [-19, -3], [-17, -31], [-8, 2], [-14, -16], [-13, -19], [-21, 2], [-18, 0], [-30, 38], [-15, 11], [1, 34], [14, 8], [4, 14], [-1, 21], [4, 41], [-3, 35], [-15, 60], [-4, 33], [1, 34], [-11, 38], [-1, 18], [-12, 23], [-4, 47], [-16, 46], [-4, 26], [13, -26], [-10, 55], [14, -17], [8, -23], [0, 30], [-14, 47], [-3, 18], [-6, 18], [3, 34], [6, 15], [4, 29], [-3, 35], [11, 42], [2, -45], [12, 41], [22, 20], [14, 25], [21, 22], [13, 4], [7, -7], [22, 22], [17, 6], [4, 13], [8, 6], [15, -2], [29, 18], [15, 26], [7, 31], [17, 30], [1, 24], [1, 32], [19, 50], [12, -51], [12, 12], [-10, 28], [9, 29], [12, -13], [3, 45], [15, 29], [7, 23], [14, 10], [0, 17], [13, -7], [0, 15], [12, 8], [14, 8], [20, -27], [16, -35], [17, 0], [18, -6], [-6, 33], [13, 47], [13, 15], [-5, 15], [12, 34], [17, 21], [14, -7], [24, 11], [-1, 30], [-20, 19], [15, 9], [18, -15], [15, -24], [23, -15], [8, 6], [17, -18], [17, 17], [10, -5], [7, 11], [12, -29], [-7, -32], [-11, -24], [-9, -2], [3, -23], [-8, -30], [-10, -29], [2, -17], [22, -32], [21, -19], [15, -20], [20, -35], [8, 0], [14, -15], [4, -19], [27, -20], [18, 20], [6, 32], [5, 26], [4, 33], [8, 47], [-4, 28], [2, 17], [-3, 34], [4, 45], [5, 12], [-4, 20], [7, 31], [5, 32], [1, 17], [10, 22], [8, -29], [2, -37], [7, -7], [1, -25], [10, -30], [2, -33], [-1, -22]], [[5471, 7900], [-2, -24], [-16, 0], [6, -13], [-9, -38]], [[5450, 7825], [-6, -10], [-24, -1], [-14, -13], [-23, 4]], [[5383, 7805], [-40, 15], [-6, 21], [-27, -10], [-4, -12], [-16, 9]], [[5290, 7828], [-15, 1], [-12, 11], [4, 15], [-1, 10]], [[5266, 7865], [8, 3], [14, -16], [4, 16], [25, -3], [20, 11], [13, -2], [9, -12], [2, 10], [-4, 38], [10, 8], [10, 27]], [[5377, 7945], [21, -19], [15, 24], [10, 5], [22, -18], [13, 3], [13, -12]], [[5471, 7928], [-3, -7], [3, -21]], [[6281, 7346], [-19, 8], [-14, 27], [-4, 23]], [[6349, 7527], [15, -31], [14, -42], [13, -2], [8, -16], [-23, -5], [-5, -46], [-4, -21], [-11, -13], [1, -30]], [[6357, 7321], [-7, -3], [-17, 31], [10, 30], [-9, 17], [-10, -4], [-33, -44]], [[6249, 7494], [6, 10], [21, -17], [15, -4], [4, 7], [-14, 32], [7, 9]], [[6288, 7531], [8, -2], [19, -36], [13, -4], [4, 15], [17, 23]], [[5814, 4792], [-1, 71], [-7, 27]], [[5806, 4890], [17, -5], [8, 34], [15, -4]], [[5846, 4915], [1, -23], [6, -14], [1, -19], [-7, -12], [-11, -31], [-10, -22], [-12, -2]], [[5092, 8091], [20, -5], [26, 12], [17, -25], [16, -14]], [[5171, 8059], [-4, -40]], [[5167, 8019], [-7, -2], [-3, -33]], [[5157, 7984], [-24, 26], [-14, -4], [-20, 28], [-13, 23], [-13, 1], [-4, 21]], [[5069, 8079], [23, 12]], [[5074, 5427], [-23, -7]], [[5051, 5420], [-7, 41], [2, 136], [-6, 12], [-1, 29], [-10, 21], [-8, 17], [3, 31]], [[5024, 5707], [10, 7], [6, 26], [13, 5], [6, 18]], [[5059, 5763], [10, 17], [10, 0], [21, -34]], [[5100, 5746], [-1, -19], [6, -35], [-6, -24], [3, -16], [-13, -37], [-9, -18], [-5, -37], [1, -38], [-2, -95]], [[4921, 5627], [-19, 15], [-13, -2], [-10, -15], [-12, 13], [-5, 19], [-13, 13]], [[4849, 5670], [-1, 34], [7, 26], [-1, 20], [23, 48], [4, 41], [7, 14], [14, -8], [11, 12], [4, 16], [22, 26], [5, 19], [26, 24], [15, 9], [7, -12], [18, 0]], [[5010, 5939], [-2, -28], [3, -27], [16, -39], [1, -28], [32, -14], [-1, -40]], [[5024, 5707], [-24, 1]], [[5e3, 5708], [-13, 5], [-9, -9], [-12, 4], [-48, -3], [-1, -33], [4, -45]], [[7573, 6360], [0, -43], [-10, 9], [2, -47]], [[7565, 6279], [-8, 30], [-1, 31], [-6, 28], [-11, 34], [-26, 3], [3, -25], [-9, -32], [-12, 12], [-4, -11], [-8, 6], [-11, 5]], [[7472, 6360], [-4, 49], [-10, 45], [5, 35], [-17, 16], [6, 22], [18, 22], [-20, 31], [9, 40], [22, -26], [14, -3], [2, -41], [26, -8], [26, 1], [16, -10], [-13, -50], [-12, -3], [-9, -34], [16, -31], [4, 38], [8, 0], [14, -93]], [[5629, 7671], [8, -25], [11, 5], [21, -9], [41, -4], [13, 16], [33, 13], [20, -21], [17, -6]], [[5793, 7640], [-15, -25], [-10, -42], [9, -34]], [[5777, 7539], [-24, 8], [-28, -18]], [[5725, 7529], [0, -30], [-26, -5], [-19, 20], [-22, -16], [-21, 2]], [[5637, 7500], [-2, 39], [-14, 19]], [[5621, 7558], [5, 8], [-3, 7], [4, 19], [11, 18], [-14, 26], [-2, 21], [7, 14]], [[2846, 6461], [-7, -3], [-7, 34], [-10, 17], [6, 38], [8, -3], [10, -49], [0, -34]], [[2838, 6628], [-30, -10], [-2, 22], [13, 5], [18, -2], [1, -15]], [[2861, 6628], [-5, -42], [-5, 8], [0, 31], [-12, 23], [0, 7], [22, -27]], [[5527, 7708], [10, 0], [-7, -26], [14, -23], [-4, -28], [-7, -2]], [[5533, 7629], [-5, -6], [-9, -13], [-4, -33]], [[5515, 7577], [-25, 23], [-10, 24], [-11, 13], [-12, 22], [-6, 19], [-14, 27], [6, 25], [10, -14], [6, 12], [13, 2], [24, -10], [19, 1], [12, -13]], [[5652, 8242], [27, 0], [30, 22], [6, 34], [23, 19], [-3, 26]], [[5735, 8343], [17, 10], [30, 23]], [[5782, 8376], [29, -15], [4, -15], [15, 7], [27, -14], [3, -27], [-6, -16], [17, -39], [12, -11], [-2, -11], [19, -10], [8, -16], [-11, -13], [-23, 2], [-5, -5], [7, -20], [6, -37]], [[5882, 8136], [-23, -4], [-9, -13], [-2, -30], [-11, 6], [-25, -3], [-7, 14], [-11, -10], [-10, 8], [-22, 1], [-31, 15], [-28, 4], [-22, -1], [-15, -16], [-13, -2]], [[5653, 8105], [-1, 26], [-8, 27], [17, 12], [0, 24], [-8, 22], [-1, 26]], [[2524, 6110], [-1, 8], [4, 3], [5, -7], [10, 36], [5, 0]], [[2547, 6150], [0, -8], [5, -1], [0, -16], [-5, -25], [3, -9], [-3, -21], [2, -6], [-4, -30], [-5, -16], [-5, -1], [-6, -21]], [[2529, 5996], [-8, 0], [2, 67], [1, 47]], [[3136, 3714], [-20, -8], [-11, 82], [-15, 66], [9, 57], [-15, 25], [-4, 43], [-13, 40]], [[3067, 4019], [17, 64], [-12, 49], [7, 20], [-5, 22], [10, 30], [1, 50], [1, 41], [6, 20], [-24, 96]], [[3068, 4411], [21, -5], [14, 1], [6, 18], [25, 24], [14, 22], [37, 10], [-3, -44], [3, -23], [-2, -40], [30, -53], [31, -9], [11, -23], [19, -11], [11, -17], [18, 0], [16, -17], [1, -34], [6, -18], [0, -25], [-8, -1], [11, -69], [53, -2], [-4, -35], [3, -23], [15, -16], [6, -37], [-4, -47], [-8, -26], [3, -33], [-9, -12]], [[3384, 3866], [-1, 18], [-25, 30], [-26, 1], [-49, -17], [-13, -52], [-1, -32], [-11, -71]], [[3482, 3537], [6, 34], [3, 35], [1, 32], [-10, 11], [-11, -9], [-10, 2], [-4, 23], [-2, 54], [-5, 18], [-19, 16], [-11, -12], [-30, 11], [2, 81], [-8, 33]], [[3068, 4411], [-15, -11], [-13, 7], [2, 90], [-23, -35], [-24, 2], [-11, 31], [-18, 4], [5, 25], [-15, 36], [-11, 53], [7, 11], [0, 25], [17, 17], [-3, 32], [7, 20], [2, 28], [32, 40], [22, 11], [4, 9], [25, -2]], [[3058, 4804], [13, 162], [0, 25], [-4, 34], [-12, 22], [0, 42], [15, 10], [6, -6], [1, 23], [-16, 6], [-1, 37], [54, -2], [10, 21], [7, -19], [6, -35], [5, 8]], [[3142, 5132], [15, -32], [22, 4], [5, 18], [21, 14], [11, 10], [4, 25], [19, 17], [-1, 12], [-24, 5], [-3, 37], [1, 40], [-13, 15], [5, 6], [21, -8], [22, -15], [8, 14], [20, 9], [31, 23], [10, 22], [-3, 17]], [[3313, 5365], [14, 2], [7, -13], [-4, -26], [9, -9], [7, -28], [-8, -20], [-4, -51], [7, -30], [2, -27], [17, -28], [14, -3], [3, 12], [8, 3], [13, 10], [9, 16], [15, -5], [7, 2]], [[3429, 5170], [15, -5], [3, 12], [-5, 12], [3, 17], [11, -5], [13, 6], [16, -13]], [[3485, 5194], [12, -12], [9, 16], [6, -3], [4, -16], [13, 4], [11, 22], [8, 44], [17, 54]], [[3565, 5303], [9, 3], [7, -33], [16, -103], [14, -10], [1, -41], [-21, -48], [9, -18], [49, -9], [1, -60], [21, 39], [35, -21], [46, -36], [14, -35], [-5, -32], [33, 18], [54, -32], [41, 3], [41, -49], [36, -66], [21, -17], [24, -3], [10, -18], [9, -76], [5, -35], [-11, -98], [-14, -39], [-39, -82], [-18, -67], [-21, -51], [-7, -1], [-7, -43], [2, -111], [-8, -91], [-3, -39], [-9, -23], [-5, -79], [-28, -77], [-5, -61], [-22, -26], [-7, -35], [-30, 0], [-44, -23], [-19, -26], [-31, -18], [-33, -47], [-23, -58], [-5, -44], [5, -33], [-5, -60], [-6, -28], [-20, -33], [-31, -104], [-24, -47], [-19, -27], [-13, -57], [-18, -33]], [[3517, 3063], [-8, 33], [13, 28], [-16, 40], [-22, 33], [-29, 38], [-10, -2], [-28, 46], [-18, -7]], [[8172, 5325], [11, 22], [23, 32]], [[8206, 5379], [-1, -29], [-2, -37], [-13, 1], [-6, -20], [-12, 31]], [[7546, 6698], [12, -19], [-2, -36], [-23, -2], [-23, 4], [-18, -9], [-25, 22], [-1, 12]], [[7466, 6670], [19, 44], [15, 15], [20, -14], [14, -1], [12, -16]], [[5817, 3752], [-39, -43], [-25, -44], [-10, -40], [-8, -22], [-15, -4], [-5, -29], [-3, -18], [-17, -14], [-23, 3], [-13, 17], [-12, 7], [-14, -14], [-6, -28], [-14, -18], [-13, -26], [-20, -6], [-6, 20], [2, 36], [-16, 56], [-8, 9]], [[5552, 3594], [0, 173], [27, 2], [1, 210], [21, 2], [43, 21], [10, -24], [18, 23], [9, 0], [15, 13]], [[5696, 4014], [5, -4]], [[5701, 4010], [11, -48], [5, -10], [9, -34], [32, -65], [12, -7], [0, -20], [8, -38], [21, -9], [18, -27]], [[5424, 5496], [23, 4], [5, 16], [5, -2], [7, -13], [34, 23], [12, 23], [15, 20], [-3, 21], [8, 6], [27, -4], [26, 27], [20, 65], [14, 24], [18, 10]], [[5635, 5716], [3, -26], [16, -36], [0, -25], [-5, -24], [2, -18], [10, -18]], [[5661, 5569], [21, -25]], [[5682, 5544], [15, -24], [0, -19], [19, -31], [12, -26], [7, -35], [20, -24], [5, -18]], [[5760, 5367], [-9, -7], [-18, 2], [-21, 6], [-10, -5], [-5, -14], [-9, -2], [-10, 12], [-31, -29], [-13, 6], [-4, -5], [-8, -35], [-21, 11], [-20, 6], [-18, 22], [-23, 20], [-15, -19], [-10, -30], [-3, -41]], [[5512, 5265], [-18, 3], [-19, 10], [-16, -32], [-15, -55]], [[5444, 5191], [-3, 18], [-1, 27], [-13, 19], [-10, 30], [-2, 21], [-13, 31], [2, 18], [-3, 25], [2, 45], [7, 11], [14, 60]], [[3231, 7808], [20, -8], [26, 1], [-14, -24], [-10, -4], [-35, 25], [-7, 20], [10, 18], [10, -28]], [[3283, 7958], [-14, -1], [-36, 19], [-26, 28], [10, 5], [37, -15], [28, -25], [1, -11]], [[1569, 7923], [-14, -8], [-46, 27], [-8, 21], [-25, 21], [-5, 16], [-28, 11], [-11, 32], [2, 14], [30, -13], [17, -9], [26, -6], [9, -21], [14, -28], [28, -24], [11, -33]], [[3440, 8052], [-18, -52], [18, 20], [19, -12], [-10, -21], [25, -16], [12, 14], [28, -18], [-8, -43], [19, 10], [4, -32], [8, -36], [-11, -52], [-13, -2], [-18, 11], [6, 48], [-8, 8], [-32, -52], [-17, 2], [20, 28], [-27, 14], [-30, -3], [-54, 2], [-4, 17], [17, 21], [-12, 16], [24, 36], [28, 94], [18, 33], [24, 21], [13, -3], [-6, -16], [-15, -37]], [[1313, 8250], [27, 5], [-8, -67], [24, -48], [-11, 0], [-17, 27], [-10, 27], [-14, 19], [-5, 26], [1, 19], [13, -8]], [[2798, 8730], [-11, -31], [-12, 5], [-8, 17], [2, 4], [10, 18], [12, -1], [7, -12]], [[2725, 8762], [-33, -32], [-19, 1], [-6, 16], [20, 27], [38, 0], [0, -12]], [[2634, 8936], [5, -26], [15, 9], [16, -15], [30, -20], [32, -19], [2, -28], [21, 5], [20, -20], [-25, -18], [-43, 14], [-16, 26], [-27, -31], [-40, -31], [-9, 35], [-38, -6], [24, 30], [4, 46], [9, 54], [20, -5]], [[2892, 9024], [-31, -3], [-7, 29], [12, 34], [26, 8], [21, -17], [1, -25], [-4, -8], [-18, -18]], [[2343, 9140], [-17, -21], [-38, 18], [-22, -6], [-38, 26], [24, 19], [19, 25], [30, -16], [17, -11], [8, -11], [17, -23]], [[3135, 7724], [-18, 33], [0, 81], [-13, 17], [-18, -10], [-10, 16], [-21, -45], [-8, -46], [-10, -27], [-12, -9], [-9, -3], [-3, -15], [-51, 0], [-42, 0], [-12, -11], [-30, -42], [-3, -5], [-9, -23], [-26, 0], [-27, 0], [-12, -10], [4, -11], [2, -18], [0, -6], [-36, -30], [-29, -9], [-32, -31], [-7, 0], [-10, 9], [-3, 8], [1, 6], [6, 21], [13, 33], [8, 35], [-5, 51], [-6, 53], [-29, 28], [3, 11], [-4, 7], [-8, 0], [-5, 9], [-2, 14], [-5, -6], [-7, 2], [1, 6], [-6, 6], [-3, 15], [-21, 19], [-23, 20], [-27, 23], [-26, 21], [-25, -17], [-9, 0], [-34, 15], [-23, -8], [-27, 19], [-28, 9], [-19, 4], [-9, 10], [-5, 32], [-9, 0], [-1, -23], [-57, 0], [-95, 0], [-94, 0], [-84, 0], [-83, 0], [-82, 0], [-85, 0], [-27, 0], [-82, 0], [-79, 0]], [[1588, 7952], [-4, 0], [-54, 58], [-20, 26], [-50, 24], [-15, 53], [3, 36], [-35, 25], [-5, 48], [-34, 43], [0, 30]], [[1374, 8295], [15, 29], [0, 37], [-48, 37], [-28, 68], [-17, 42], [-26, 27], [-19, 24], [-14, 31], [-28, -20], [-27, -33], [-25, 39], [-19, 26], [-27, 16], [-28, 2], [0, 337], [1, 219]], [[1084, 9176], [51, -14], [44, -29], [29, -5], [24, 24], [34, 19], [41, -7], [42, 26], [45, 14], [20, -24], [20, 14], [6, 27], [20, -6], [47, -53], [37, 40], [3, -45], [34, 10], [11, 17], [34, -3], [42, -25], [65, -22], [38, -10], [28, 4], [37, -30], [-39, -29], [50, -13], [75, 7], [24, 11], [29, -36], [31, 30], [-29, 25], [18, 20], [34, 3], [22, 6], [23, -14], [28, -32], [31, 5], [49, -27], [43, 9], [40, -1], [-3, 37], [25, 10], [43, -20], [0, -56], [17, 47], [23, -1], [12, 59], [-30, 36], [-32, 24], [2, 65], [33, 43], [37, -9], [28, -26], [38, -67], [-25, -29], [52, -12], [-1, -60], [38, 46], [33, -38], [-9, -44], [27, -40], [29, 43], [21, 51], [1, 65], [40, -5], [41, -8], [37, -30], [2, -29], [-21, -31], [20, -32], [-4, -29], [-54, -41], [-39, -9], [-29, 18], [-8, -30], [-27, -50], [-8, -26], [-32, -40], [-40, -4], [-22, -25], [-2, -38], [-32, -7], [-34, -48], [-30, -67], [-11, -46], [-1, -69], [40, -10], [13, -55], [13, -45], [39, 12], [51, -26], [28, -22], [20, -28], [35, -17], [29, -24], [46, -4], [30, -6], [-4, -51], [8, -59], [21, -66], [41, -56], [21, 19], [15, 61], [-14, 93], [-20, 31], [45, 28], [31, 41], [16, 41], [-3, 40], [-19, 50], [-33, 44], [32, 62], [-12, 54], [-9, 92], [19, 14], [48, -16], [29, -6], [23, 15], [25, -20], [35, -34], [8, -23], [50, -4], [-1, -50], [9, -74], [25, -10], [21, -35], [40, 33], [26, 65], [19, 28], [21, -53], [36, -75], [31, -71], [-11, -37], [37, -33], [25, -34], [44, -15], [18, -19], [11, -50], [22, -8], [11, -22], [2, -67], [-20, -22], [-20, -21], [-46, -21], [-35, -48], [-47, -10], [-59, 13], [-42, 0], [-29, -4], [-23, -43], [-35, -26], [-40, -78], [-32, -54], [23, 9], [45, 78], [58, 49], [42, 6], [24, -29], [-26, -40], [9, -63], [9, -45], [36, -29], [46, 8], [28, 67], [2, -43], [17, -22], [-34, -38], [-61, -36], [-28, -23], [-31, -43], [-21, 4], [-1, 50], [48, 49], [-44, -2], [-31, -7]], [[1829, 9377], [-14, -27], [61, 17], [39, -29], [31, 30], [26, -20], [23, -58], [14, 25], [-20, 60], [24, 9], [28, -9], [31, -24], [17, -58], [9, -41], [47, -30], [50, -28], [-3, -26], [-46, -4], [18, -23], [-9, -22], [-51, 9], [-48, 16], [-32, -3], [-52, -20], [-70, -9], [-50, -6], [-15, 28], [-38, 16], [-24, -6], [-35, 47], [19, 6], [43, 10], [39, -3], [36, 11], [-54, 13], [-59, -4], [-39, 1], [-15, 22], [64, 23], [-42, -1], [-49, 16], [23, 44], [20, 24], [74, 36], [29, -12]], [[2097, 9395], [-24, -39], [-44, 41], [10, 9], [37, 2], [21, -13]], [[2879, 9376], [3, -16], [-30, 2], [-30, 1], [-30, -8], [-8, 3], [-31, 32], [1, 21], [14, 4], [63, -6], [48, -33]], [[2595, 9379], [22, -36], [26, 47], [70, 24], [48, -61], [-4, -38], [55, 17], [26, 23], [62, -30], [38, -28], [3, -25], [52, 13], [29, -38], [67, -23], [24, -24], [26, -55], [-51, -28], [66, -38], [44, -13], [40, -55], [44, -3], [-9, -42], [-49, -69], [-34, 26], [-44, 57], [-36, -8], [-3, -34], [29, -34], [38, -27], [11, -16], [18, -58], [-9, -43], [-35, 16], [-70, 47], [39, -51], [29, -35], [5, -21], [-76, 24], [-59, 34], [-34, 29], [10, 17], [-42, 30], [-40, 29], [0, -18], [-80, -9], [-23, 20], [18, 44], [52, 1], [57, 7], [-9, 21], [10, 30], [36, 57], [-8, 27], [-11, 20], [-42, 29], [-57, 20], [18, 15], [-29, 36], [-25, 4], [-22, 20], [-14, -18], [-51, -7], [-101, 13], [-59, 17], [-45, 9], [-23, 21], [29, 27], [-39, 0], [-9, 60], [21, 53], [29, 24], [72, 16], [-21, -39]], [[2212, 9420], [33, -12], [50, 7], [7, -17], [-26, -28], [42, -26], [-5, -53], [-45, -23], [-27, 5], [-19, 23], [-69, 45], [0, 19], [57, -7], [-31, 38], [33, 29]], [[2411, 9357], [-30, -45], [-32, 3], [-17, 52], [1, 29], [14, 25], [28, 16], [58, -2], [53, -14], [-42, -53], [-33, -11]], [[1654, 9275], [-73, -29], [-15, 26], [-64, 31], [12, 25], [19, 43], [24, 39], [-27, 36], [94, 10], [39, -13], [71, -3], [27, -17], [30, -25], [-35, -15], [-68, -41], [-34, -42], [0, -25]], [[2399, 9487], [-15, -23], [-40, 5], [-34, 15], [15, 27], [40, 16], [24, -21], [10, -19]], [[2264, 9590], [21, -27], [1, -31], [-13, -44], [-46, -6], [-30, 10], [1, 34], [-45, -4], [-2, 45], [30, -2], [41, 21], [40, -4], [2, 8]], [[1994, 9559], [11, -21], [25, 10], [29, -2], [5, -29], [-17, -28], [-94, -10], [-70, -25], [-43, -2], [-3, 20], [57, 26], [-125, -7], [-39, 10], [38, 58], [26, 17], [78, -20], [50, -35], [48, -5], [-40, 57], [26, 21], [29, -7], [9, -28]], [[2370, 9612], [30, -19], [55, 0], [24, -19], [-6, -22], [32, -14], [17, -14], [38, -2], [40, -5], [44, 13], [57, 5], [45, -5], [30, -22], [6, -24], [-17, -16], [-42, -13], [-35, 8], [-80, -10], [-57, -1], [-45, 8], [-74, 19], [-9, 32], [-4, 29], [-27, 26], [-58, 7], [-32, 19], [10, 24], [58, -4]], [[1772, 9645], [-4, -46], [-21, -20], [-26, -3], [-52, -26], [-44, -9], [-38, 13], [47, 44], [57, 39], [43, -1], [38, 9]], [[2393, 9637], [-13, -2], [-52, 4], [-7, 17], [56, -1], [19, -11], [-3, -7]], [[1939, 9648], [-52, -17], [-41, 19], [23, 19], [40, 6], [39, -10], [-9, -17]], [[1954, 9701], [-34, -11], [-46, 0], [0, 8], [29, 18], [14, -3], [37, -12]], [[2338, 9669], [-41, -12], [-23, 13], [-12, 23], [-2, 24], [36, -2], [16, -4], [33, -21], [-7, -21]], [[2220, 9685], [11, -25], [-45, 7], [-46, 19], [-62, 2], [27, 18], [-34, 14], [-2, 22], [55, -8], [75, -21], [21, -28]], [[2583, 9764], [33, -20], [-38, -17], [-51, -45], [-50, -4], [-57, 8], [-30, 24], [0, 21], [22, 16], [-50, 0], [-31, 19], [-18, 27], [20, 26], [19, 18], [28, 4], [-12, 14], [65, 3], [35, -32], [47, -12], [46, -11], [22, -39]], [[3097, 9967], [74, -4], [60, -8], [51, -16], [-2, -16], [-67, -25], [-68, -12], [-25, -14], [61, 1], [-66, -36], [-45, -17], [-48, -48], [-57, -10], [-18, -12], [-84, -6], [39, -8], [-20, -10], [23, -29], [-26, -21], [-43, -16], [-13, -24], [-39, -17], [4, -14], [48, 3], [0, -15], [-74, -35], [-73, 16], [-81, -9], [-42, 7], [-52, 3], [-4, 29], [52, 13], [-14, 43], [17, 4], [74, -26], [-38, 38], [-45, 11], [23, 23], [49, 14], [8, 21], [-39, 23], [-12, 31], [76, -3], [22, -6], [43, 21], [-62, 7], [-98, -4], [-49, 20], [-23, 24], [-32, 17], [-6, 21], [41, 11], [32, 2], [55, 9], [41, 22], [34, -3], [30, -16], [21, 32], [37, 9], [50, 7], [85, 2], [14, -6], [81, 10], [60, -4], [60, -4]], [[5290, 7828], [-3, -24], [-12, -10], [-20, 7], [-6, -24], [-14, -2], [-5, 10], [-15, -20], [-13, -3], [-12, 13]], [[5190, 7775], [-10, 25], [-13, -9], [0, 27], [21, 33], [-1, 15], [12, -5], [8, 10]], [[5207, 7871], [24, -1], [5, 13], [30, -18]], [[3140, 1814], [-10, -24], [-23, -18], [-14, 2], [-16, 5], [-21, 18], [-29, 8], [-35, 33], [-28, 32], [-38, 66], [23, -12], [39, -40], [36, -21], [15, 27], [9, 41], [25, 24], [20, -7]], [[3095, 1968], [-25, 0], [-13, -14], [-25, -22], [-5, -55], [-11, -1], [-32, 19], [-32, 41], [-34, 34], [-9, 37], [8, 35], [-14, 39], [-4, 101], [12, 57], [30, 45], [-43, 18], [27, 52], [9, 98], [31, -21], [15, 123], [-19, 15], [-9, -73], [-17, 8], [9, 84], [9, 110], [13, 40], [-8, 58], [-2, 66], [11, 2], [17, 96], [20, 94], [11, 88], [-6, 89], [8, 49], [-3, 72], [16, 73], [5, 114], [9, 123], [9, 132], [-2, 96], [-6, 84]], [[3045, 3974], [14, 15], [8, 30]], [[8064, 6161], [-24, -28], [-23, 18], [0, 51], [13, 26], [31, 17], [16, -1], [6, -23], [-12, -26], [-7, -34]], [[8628, 7562], [-18, 35], [-11, -33], [-43, -26], [4, -31], [-24, 2], [-13, 19], [-19, -42], [-30, -32], [-23, -38]], [[8451, 7416], [-39, -17], [-20, -27], [-30, -17], [15, 28], [-6, 23], [22, 40], [-15, 30], [-24, -20], [-32, -41], [-17, -39], [-27, -2], [-14, -28], [15, -40], [22, -10], [1, -26], [22, -17], [31, 42], [25, -23], [18, -2], [4, -31], [-39, -16], [-13, -32], [-27, -30], [-14, -41], [30, -33], [11, -58], [17, -54], [18, -45], [0, -44], [-17, -16], [6, -32], [17, -18], [-5, -48], [-7, -47], [-15, -5], [-21, -64], [-22, -78], [-26, -70], [-38, -55], [-39, -50], [-31, -6], [-17, -27], [-10, 20], [-15, -30], [-39, -29], [-29, -9], [-10, -63], [-15, -3], [-8, 43], [7, 22], [-37, 19], [-13, -9]], [[8001, 6331], [-28, 15], [-14, 24], [5, 34], [-26, 11], [-13, 22], [-24, -31], [-27, -7], [-22, 0], [-15, -14]], [[7837, 6385], [-14, -9], [4, -68], [-15, 2], [-2, 14]], [[7810, 6324], [-1, 24], [-20, -17], [-12, 11], [-21, 22], [8, 49], [-18, 12], [-6, 54], [-30, -10], [4, 70], [26, 50], [1, 48], [-1, 46], [-12, 14], [-9, 35], [-16, -5]], [[7703, 6727], [-30, 9], [9, 25], [-13, 36], [-20, -24], [-23, 14], [-32, -37], [-25, -44], [-23, -8]], [[7466, 6670], [-2, 47], [-17, -13]], [[7447, 6704], [-32, 6], [-32, 14], [-22, 26], [-22, 11], [-9, 29], [-16, 8], [-28, 39], [-22, 18], [-12, -14]], [[7252, 6841], [-38, 41], [-28, 37], [-7, 65], [20, -7], [1, 30], [-12, 30], [3, 48], [-30, 69]], [[7161, 7154], [-45, 24], [-8, 46], [-21, 27]], [[7082, 7268], [-4, 34], [1, 23], [-17, 13], [-9, -6], [-7, 55]], [[7046, 7387], [8, 13], [-4, 14], [26, 28], [20, 12], [29, -8], [11, 38], [35, 7], [10, 23], [44, 32], [4, 13]], [[7229, 7559], [-2, 34], [19, 15], [-25, 103], [55, 24], [14, 13], [20, 106], [55, -20], [15, 27], [2, 59], [23, 6], [21, 39]], [[7426, 7965], [11, 5]], [[7437, 7970], [7, -41], [23, -32], [40, -22], [19, -47], [-10, -70], [10, -25], [33, -10], [37, -8], [33, -37], [18, -7], [12, -54], [17, -35], [30, 1], [58, -13], [36, 8], [28, -9], [41, -36], [34, 0], [12, -18], [32, 32], [45, 20], [42, 2], [32, 21], [20, 32], [20, 20], [-5, 19], [-9, 23], [15, 38], [15, -5], [29, -12], [28, 31], [42, 23], [20, 39], [20, 17], [40, 8], [22, -7], [3, 21], [-25, 41], [-22, 19], [-22, -22], [-27, 10], [-16, -8], [-7, 24], [20, 59], [13, 45]], [[8240, 8005], [34, -23], [39, 38], [-1, 26], [26, 62], [15, 19], [0, 33], [-16, 14], [23, 29], [35, 11], [37, 2], [41, -18], [25, -22], [17, -59], [10, -26], [10, -36], [10, -58], [49, -19], [32, -42], [12, -55], [42, 0], [24, 23], [46, 17], [-15, -53], [-11, -21], [-9, -65], [-19, -58], [-33, 11], [-24, -21], [7, -51], [-4, -69], [-14, -2], [0, -30]], [[4920, 5353], [-12, -1], [-20, 12], [-18, -1], [-33, -10], [-19, -18], [-27, -21], [-6, 1]], [[4785, 5315], [2, 49], [3, 7], [-1, 24], [-12, 24], [-8, 4], [-8, 17], [6, 26], [-3, 28], [1, 18]], [[4765, 5512], [5, 0], [1, 25], [-2, 12], [3, 8], [10, 7], [-7, 47], [-6, 25], [2, 20], [5, 4]], [[4776, 5660], [4, 6], [8, -9], [21, -1], [5, 18], [5, -1], [8, 6], [4, -25], [7, 7], [11, 9]], [[4921, 5627], [7, -84], [-11, -50], [-8, -66], [12, -51], [-1, -23]], [[5363, 5191], [-4, 4], [-16, -8], [-17, 8], [-13, -4]], [[5313, 5191], [-45, 1]], [[5268, 5192], [4, 47], [-11, 39], [-13, 10], [-6, 27], [-7, 8], [1, 16]], [[5236, 5339], [7, 42], [13, 57], [8, 1], [17, 34], [10, 1], [16, -24], [19, 20], [2, 25], [7, 23], [4, 30], [15, 25], [5, 41], [6, 13], [4, 31], [7, 37], [24, 46], [1, 20], [3, 10], [-11, 24]], [[5393, 5795], [1, 19], [8, 3]], [[5402, 5817], [11, -38], [2, -39], [-1, -39], [15, -54], [-15, 1], [-8, -4], [-13, 6], [-6, -28], [16, -35], [13, -10], [3, -24], [9, -41], [-4, -16]], [[5444, 5191], [-2, -31], [-22, 14], [-22, 15], [-35, 2]], [[5856, 5265], [-2, -69], [11, -8], [-9, -21], [-10, -16], [-11, -31], [-6, -27], [-1, -48], [-7, -22], [0, -45]], [[5821, 4978], [-8, -16], [-1, -35], [-4, -5], [-2, -32]], [[5814, 4792], [5, -55], [-2, -30], [5, -35], [16, -33], [15, -74]], [[5853, 4565], [-11, 6], [-37, -10], [-7, -7], [-8, -38], [6, -26], [-5, -70], [-3, -59], [7, -11], [19, -23], [8, 11], [2, -64], [-21, 1], [-11, 32], [-10, 25], [-22, 9], [-6, 31], [-17, -19], [-22, 8], [-10, 27], [-17, 6], [-13, -2], [-2, 19], [-9, 1]], [[5342, 4697], [-4, 18]], [[5360, 4775], [8, -6], [9, 23], [15, -1], [2, -17], [11, -10], [16, 37], [16, 29], [7, 19], [-1, 48], [12, 58], [13, 30], [18, 29], [3, 18], [1, 22], [5, 21], [-2, 33], [4, 52], [5, 37], [8, 32], [2, 36]], [[5760, 5367], [17, -49], [12, -7], [8, 10], [12, -4], [16, 12], [6, -25], [25, -39]], [[5330, 4760], [-22, 62]], [[5308, 4822], [21, 33], [-11, 39], [10, 15], [19, 7], [2, 26], [15, -28], [24, -2], [9, 27], [3, 40], [-3, 46], [-13, 35], [12, 68], [-7, 12], [-21, -5], [-7, 31], [2, 25]], [[2906, 5049], [-12, 14], [-14, 19], [-7, -9], [-24, 8], [-7, 25], [-5, -1], [-28, 34]], [[2809, 5139], [-3, 18], [10, 5], [-1, 29], [6, 22], [14, 4], [12, 37], [10, 31], [-10, 14], [5, 34], [-6, 54], [6, 16], [-4, 50], [-12, 31]], [[2836, 5484], [4, 29], [9, -4], [5, 17], [-6, 35], [3, 9]], [[2851, 5570], [14, -2], [21, 41], [12, 6], [0, 20], [5, 50], [16, 27], [17, 1], [3, 13], [21, -5], [22, 30], [11, 13], [14, 28], [9, -3], [8, -16], [-6, -20]], [[3018, 5753], [-18, -10], [-7, -29], [-10, -17], [-8, -22], [-4, -42], [-8, -35], [15, -4], [3, -27], [6, -13], [3, -24], [-4, -22], [1, -12], [7, -5], [7, -20], [36, 5], [16, -7], [19, -51], [11, 6], [20, -3], [16, 7], [10, -10], [-5, -32], [-6, -20], [-2, -42], [5, -40], [8, -17], [1, -13], [-14, -30], [10, -13], [8, -21], [8, -58]], [[3058, 4804], [-14, 31], [-8, 1], [18, 61], [-21, 27], [-17, -5], [-10, 10], [-15, -15], [-21, 7], [-16, 62], [-13, 15], [-9, 28], [-19, 28], [-7, -5]], [[2695, 5543], [-15, 14], [-6, 12], [4, 10], [-1, 13], [-8, 14], [-11, 12], [-10, 8], [-1, 17], [-8, 10], [2, -17], [-5, -14], [-7, 17], [-9, 5], [-4, 12], [1, 18], [3, 19], [-8, 8], [7, 12]], [[2619, 5713], [4, 7], [18, -15], [7, 7], [9, -5], [4, -12], [8, -4], [7, 13]], [[2676, 5704], [7, -32], [11, -24], [13, -25]], [[2707, 5623], [-11, -6], [0, -23], [6, -9], [-4, -7], [1, -11], [-2, -12], [-2, -12]], [[2715, 6427], [23, -4], [22, 0], [26, -21], [11, -21], [26, 6], [10, -13], [24, -37], [17, -27], [9, 1], [17, -12], [-2, -17], [20, -2], [21, -24], [-3, -14], [-19, -7], [-18, -3], [-19, 4], [-40, -5], [18, 32], [-11, 16], [-18, 4], [-9, 17], [-7, 33], [-16, -2], [-26, 16], [-8, 12], [-36, 10], [-10, 11], [11, 15], [-28, 3], [-20, -31], [-11, -1], [-4, -14], [-14, -7], [-12, 6], [15, 18], [6, 22], [13, 13], [14, 11], [21, 6], [7, 6]], [[5909, 7133], [2, 1], [4, 14], [20, -1], [25, 18], [-19, -25], [2, -11]], [[5943, 7129], [-3, 2], [-5, -5], [-4, 1], [-2, -2], [0, 6], [-2, 4], [-6, 0], [-7, -5], [-5, 3]], [[5943, 7129], [1, -5], [-28, -24], [-14, 8], [-7, 23], [14, 2]], [[5377, 7945], [-16, 25], [-14, 15], [-3, 25], [-5, 17], [21, 13], [10, 15], [20, 11], [7, 11], [7, -6], [13, 6]], [[5417, 8077], [13, -19], [21, -5], [-2, -17], [15, -12], [4, 15], [19, -6], [3, -19], [20, -3], [13, -29]], [[5523, 7982], [-8, 0], [-4, -11], [-7, -3], [-2, -13], [-5, -3], [-1, -5], [-9, -7], [-12, 1], [-4, -13]], [[5275, 8306], [1, -23], [28, -14], [-1, -21], [29, 11], [15, 16], [32, -23], [13, -19]], [[5392, 8233], [6, -30], [-8, -16], [11, -21], [6, -31], [-2, -21], [12, -37]], [[5207, 7871], [3, 42], [14, 40], [-40, 11], [-13, 16]], [[5171, 7980], [2, 26], [-6, 13]], [[5171, 8059], [-5, 62], [17, 0], [7, 22], [6, 54], [-5, 20]], [[5191, 8217], [6, 13], [23, 3], [5, -13], [19, 29], [-6, 22], [-2, 34]], [[5236, 8305], [21, -8], [18, 9]], [[6196, 5808], [7, -19], [-1, -24], [-16, -14], [12, -16]], [[6198, 5735], [-10, -32]], [[6188, 5703], [-7, 11], [-6, -5], [-16, 1], [0, 18], [-2, 17], [9, 27], [10, 26]], [[6176, 5798], [12, -5], [8, 15]], [[5352, 8343], [-17, -48], [-29, 33], [-4, 25], [41, 19], [9, -29]], [[5236, 8305], [-11, 32], [-1, 61], [5, 16], [8, 17], [24, 4], [10, 16], [22, 17], [-1, -30], [-8, -20], [4, -16], [15, -9], [-7, -22], [-8, 6], [-20, -42], [7, -29]], [[3008, 6222], [3, 10], [22, 0], [16, -15], [8, 1], [5, -21], [15, 1], [-1, -17], [12, -2], [14, -22], [-10, -24], [-14, 13], [-12, -3], [-9, 3], [-5, -11], [-11, -3], [-4, 14], [-10, -8], [-11, -41], [-7, 10], [-1, 17]], [[3008, 6124], [0, 16], [-7, 17], [7, 10], [2, 23], [-2, 32]], [[5333, 6444], [-95, -112], [-81, -117], [-39, -26]], [[5118, 6189], [-31, -6], [0, 38], [-13, 10], [-17, 16], [-7, 28], [-94, 129], [-93, 129]], [[4863, 6533], [-105, 143]], [[4758, 6676], [1, 11], [0, 4]], [[4759, 6691], [0, 70], [44, 44], [28, 9], [23, 16], [11, 29], [32, 24], [1, 44], [16, 5], [13, 22], [36, 9], [5, 23], [-7, 13], [-10, 62], [-1, 36], [-11, 38]], [[4939, 7135], [27, 32], [30, 11], [17, 24], [27, 18], [47, 11], [46, 4], [14, -8], [26, 23], [30, 0], [11, -13], [19, 3]], [[5233, 7240], [-5, -30], [4, -56], [-6, -49], [-18, -33], [3, -45], [23, -35], [0, -14], [17, -24], [12, -106]], [[5263, 6848], [9, -52], [1, -28], [-5, -48], [2, -27], [-3, -32], [2, -37], [-11, -25], [17, -43], [1, -25], [10, -33], [13, 11], [22, -28], [12, -37]], [[2769, 4856], [15, 45], [-6, 25], [-11, -27], [-16, 26], [5, 16], [-4, 54], [9, 9], [5, 37], [11, 38], [-2, 24], [15, 13], [19, 23]], [[2906, 5049], [4, -45], [-9, -39], [-30, -62], [-33, -23], [-17, -51], [-6, -40], [-15, -24], [-12, 29], [-11, 7], [-12, -5], [-1, 22], [8, 14], [-3, 24]], [[5969, 6800], [-7, -23], [-6, -45], [-8, -31], [-6, -10], [-10, 19], [-12, 26], [-20, 85], [-3, -5], [12, -63], [17, -59], [21, -92], [10, -32], [9, -34], [25, -65], [-6, -10], [1, -39], [33, -53], [4, -12]], [[6023, 6357], [-110, 0], [-107, 0], [-112, 0]], [[5694, 6357], [0, 218], [0, 210], [-8, 47], [7, 37], [-5, 25], [10, 29]], [[5698, 6923], [37, 0], [27, -15], [28, -18], [13, -9], [21, 19], [11, 17], [25, 5], [20, -8], [7, -29], [7, 19], [22, -14], [22, -3], [13, 15]], [[5951, 6902], [18, -102]], [[6176, 5798], [-10, 20], [-11, 34], [-12, 19], [-8, 21], [-24, 23], [-19, 1], [-7, 12], [-16, -14], [-17, 27], [-8, -44], [-33, 13]], [[6011, 5910], [-3, 23], [12, 87], [3, 39], [9, 18], [20, 10], [14, 34]], [[6066, 6121], [16, -69], [8, -54], [15, -29], [38, -55], [16, -34], [15, -34], [8, -20], [14, -18]], [[4749, 7532], [1, 42], [-11, 25], [39, 43], [34, -11], [37, 1], [30, -10], [23, 3], [45, -2]], [[4947, 7623], [11, -23], [51, -27], [10, 13], [31, -27], [32, 8]], [[5082, 7567], [2, -35], [-26, -39], [-36, -12], [-2, -20], [-18, -33], [-10, -48], [11, -34], [-16, -26], [-6, -39], [-21, -11], [-20, -46], [-35, -1], [-27, 1], [-17, -21], [-11, -22], [-13, 5], [-11, 20], [-8, 34], [-26, 9]], [[4792, 7249], [-2, 20], [10, 22], [4, 16], [-9, 17], [7, 39], [-11, 36], [12, 5], [1, 27], [5, 9], [0, 46], [13, 16], [-8, 30], [-16, 2], [-5, -8], [-16, 0], [-7, 29], [-11, -8], [-10, -15]], [[5675, 8472], [3, 35], [-10, -8], [-18, 21], [-2, 34], [35, 17], [35, 8], [30, -10], [29, 2]], [[5777, 8571], [4, -10], [-20, -34], [8, -55], [-12, -19]], [[5757, 8453], [-22, 0], [-24, 22], [-13, 7], [-23, -10]], [[6188, 5703], [-6, -21], [10, -32], [10, -29], [11, -21], [90, -70], [24, 0]], [[6327, 5530], [-79, -177], [-36, -3], [-25, -41], [-17, -1], [-8, -19]], [[6162, 5289], [-19, 0], [-11, 20], [-26, -25], [-8, -24], [-18, 4], [-6, 7], [-7, -1], [-9, 0], [-35, 50], [-19, 0], [-10, 20], [0, 33], [-14, 10]], [[5980, 5383], [-17, 64], [-12, 14], [-5, 23], [-14, 29], [-17, 4], [9, 34], [15, 2], [4, 18]], [[5943, 5571], [0, 53]], [[5943, 5624], [8, 62], [13, 16], [3, 24], [12, 45], [17, 30], [11, 58], [4, 51]], [[5794, 9138], [-4, -42], [42, -39], [-26, -45], [33, -67], [-19, -51], [25, -43], [-11, -39], [41, -40], [-11, -31], [-25, -34], [-60, -75]], [[5779, 8632], [-50, -5], [-49, -21], [-45, -13], [-16, 32], [-27, 20], [6, 58], [-14, 53], [14, 35], [25, 37], [63, 64], [19, 12], [-3, 25], [-39, 28]], [[5663, 8957], [-9, 23], [-1, 91], [-43, 40], [-37, 29]], [[5573, 9140], [17, 16], [30, -32], [37, 3], [30, -14], [26, 26], [14, 44], [43, 20], [35, -24], [-11, -41]], [[9954, 4033], [9, -17], [-4, -31], [-17, -8], [-16, 7], [-2, 26], [10, 21], [13, -8], [7, 10]], [[0, 4079], [9981, -14], [-17, -13], [-4, 23], [14, 12], [9, 3], [-9983, 18]], [[0, 4108], [0, -29]], [[0, 4108], [6, 3], [-4, -28], [-2, -4]], [[3300, 1994], [33, 36], [24, -15], [16, 24], [22, -27], [-8, -21], [-37, -17], [-13, 20], [-23, -26], [-14, 26]], [[5265, 7548], [-9, -46], [-13, 12], [-6, 40], [5, 22], [18, 22], [5, -50]], [[5157, 7984], [6, -6], [8, 2]], [[5190, 7775], [-2, -17], [9, -22], [-10, -18], [7, -46], [15, -8], [-3, -25]], [[5206, 7639], [-25, -34], [-55, 16], [-40, -19], [-4, -35]], [[4947, 7623], [14, 35], [5, 118], [-28, 62], [-21, 30], [-42, 23], [-3, 43], [36, 12], [47, -15], [-9, 67], [26, -25], [65, 46], [8, 48], [24, 12]], [[3485, 5194], [7, 25], [3, 27]], [[3495, 5246], [4, 26], [-10, 34]], [[3489, 5306], [-3, 41], [15, 51]], [[3501, 5398], [9, -7], [21, -14], [29, -50], [5, -24]], [[5308, 4822], [-29, 60], [-18, 49], [-17, 61], [1, 19], [6, 19], [7, 43], [5, 44]], [[5263, 5117], [10, 4], [40, -1], [0, 71]], [[4827, 8240], [-21, 12], [-17, -1], [6, 32], [-6, 32]], [[4789, 8315], [23, 2], [30, -37], [-15, -40]], [[4916, 8521], [-30, -63], [29, 8], [30, -1], [-7, -48], [-25, -53], [29, -4], [2, -6], [25, -69], [19, -10], [17, -67], [8, -24], [33, -11], [-3, -38], [-14, -17], [11, -30], [-25, -31], [-37, 0], [-48, -16], [-13, 12], [-18, -28], [-26, 7], [-19, -23], [-15, 12], [41, 62], [25, 13], [-1, 0], [-43, 9], [-8, 24], [29, 18], [-15, 32], [5, 39], [42, -6], [4, 35], [-19, 36], [0, 1], [-34, 10], [-7, 16], [10, 27], [-9, 16], [-15, -28], [-1, 57], [-14, 30], [10, 61], [21, 48], [23, -4], [33, 4]], [[6154, 7511], [4, 26], [-7, 40], [-16, 22], [-16, 6], [-10, 19]], [[6109, 7624], [4, 6], [23, -10], [41, -9], [38, -28], [5, -11], [17, 9], [25, -13], [9, -24], [17, -13]], [[6210, 7485], [-27, 29], [-29, -3]], [[5029, 5408], [-44, -35], [-15, -20], [-25, -17], [-25, 17]], [[5e3, 5708], [-2, -18], [12, -30], [0, -43], [2, -47], [7, -21], [-6, -54], [2, -29], [8, -37], [6, -21]], [[4765, 5512], [-8, 1], [-5, -24], [-8, 1], [-6, 12], [2, 24], [-11, 36], [-8, -7], [-6, -1]], [[4715, 5554], [-7, -3], [0, 21], [-4, 16], [0, 17], [-6, 25], [-7, 21], [-23, 0], [-6, -11], [-8, -1], [-4, -13], [-4, -17], [-14, -26]], [[4632, 5583], [-13, 35], [-10, 24], [-8, 7], [-6, 12], [-4, 26], [-4, 13], [-8, 10]], [[4579, 5710], [13, 29], [8, -2], [7, 10], [6, 0], [5, 8], [-3, 20], [3, 6], [1, 20]], [[4619, 5801], [13, -1], [20, -14], [6, 1], [3, 7], [15, -5], [4, 4]], [[4680, 5793], [1, -22], [5, 0], [7, 8], [5, -2], [7, -15], [12, -5], [8, 13], [9, 8], [6, 8], [6, -1], [6, -13], [3, -17], [12, -24], [-6, -16], [-1, -19], [6, 6], [3, -7], [-1, -17], [8, -18]], [[4532, 5834], [3, 27]], [[4535, 5861], [31, 1], [6, 14], [9, 1], [11, -14], [8, -1], [9, 10], [6, -17], [-12, -13], [-12, 1], [-12, 13], [-10, -14], [-5, -1], [-7, -8], [-25, 1]], [[4579, 5710], [-15, 24], [-11, 4], [-7, 17], [1, 9], [-9, 13], [-2, 12]], [[4536, 5789], [15, 10], [9, -2], [8, 7], [51, -3]], [[5263, 5117], [-5, 9], [10, 66]], [[5658, 7167], [15, -20], [22, 3], [20, -4], [0, -10], [15, 7], [-4, -18], [-40, -5], [1, 10], [-34, 12], [5, 25]], [[5723, 7469], [-17, 2], [-14, 6], [-34, -16], [19, -33], [-14, -10], [-15, 0], [-15, 31], [-5, -13], [6, -36], [14, -27], [-10, -13], [15, -27], [14, -18], [0, -33], [-25, 16], [8, -30], [-18, -7], [11, -52], [-19, -1], [-23, 26], [-10, 47], [-5, 40], [-11, 27], [-14, 34], [-2, 16]], [[5583, 7470], [18, 6], [11, 13], [15, -2], [5, 11], [5, 2]], [[5725, 7529], [13, -16], [-8, -37], [-7, -7]], [[3701, 9939], [93, 35], [97, -2], [36, 21], [98, 6], [222, -7], [174, -47], [-52, -23], [-106, -3], [-150, -5], [14, -11], [99, 7], [83, -21], [54, 18], [23, -21], [-30, -34], [71, 22], [135, 23], [83, -12], [15, -25], [-113, -42], [-16, -14], [-88, -10], [64, -3], [-32, -43], [-23, -38], [1, -66], [33, -38], [-43, -3], [-46, -19], [52, -31], [6, -50], [-30, -6], [36, -50], [-61, -5], [32, -24], [-9, -20], [-39, -10], [-39, 0], [35, -40], [0, -26], [-55, 24], [-14, -15], [37, -15], [37, -36], [10, -48], [-49, -11], [-22, 22], [-34, 34], [10, -40], [-33, -31], [73, -2], [39, -3], [-75, -52], [-75, -46], [-81, -21], [-31, 0], [-29, -23], [-38, -62], [-60, -42], [-19, -2], [-37, -15], [-40, -13], [-24, -37], [0, -41], [-15, -39], [-45, -47], [11, -47], [-12, -48], [-14, -58], [-39, -4], [-41, 49], [-56, 0], [-27, 32], [-18, 58], [-49, 73], [-14, 39], [-3, 53], [-39, 54], [10, 44], [-18, 21], [27, 69], [42, 22], [11, 25], [6, 46], [-32, -21], [-15, -9], [-25, -8], [-34, 19], [-2, 40], [11, 31], [25, 1], [57, -15], [-48, 37], [-24, 20], [-28, -8], [-23, 15], [31, 55], [-17, 22], [-22, 41], [-34, 62], [-35, 23], [0, 25], [-74, 34], [-59, 5], [-74, -3], [-68, -4], [-32, 19], [-49, 37], [73, 19], [56, 3], [-119, 15], [-62, 24], [3, 23], [106, 28], [101, 29], [11, 21], [-75, 22], [24, 23], [97, 41], [40, 7], [-12, 26], [66, 16], [86, 9], [85, 1], [30, -19], [74, 33], [66, -22], [39, -5], [58, -19], [-66, 32], [4, 25]], [[2497, 5869], [-14, 10], [-17, 1], [-13, 12], [-15, 24]], [[2438, 5916], [1, 18], [3, 13], [-4, 12], [13, 48], [36, 0], [1, 20], [-5, 4], [-3, 12], [-10, 14], [-11, 20], [13, 0], [0, 33], [26, 0], [26, 0]], [[2529, 5996], [10, -11], [2, 9], [8, -7]], [[2549, 5987], [-13, -23], [-13, -16], [-2, -12], [2, -11], [-5, -15]], [[2518, 5910], [-7, -4], [2, -7], [-6, -6], [-9, -15], [-1, -9]], [[3340, 5552], [18, -22], [17, -38], [1, -31], [10, -1], [15, -29], [11, -21]], [[3412, 5410], [-4, -53], [-17, -15], [1, -14], [-5, -31], [13, -42], [9, -1], [3, -33], [17, -51]], [[3313, 5365], [-19, 45], [7, 16], [0, 27], [17, 10], [7, 11], [-10, 22], [3, 21], [22, 35]], [[2574, 5825], [-5, 18], [-8, 5]], [[2561, 5848], [2, 24], [-4, 6], [-6, 4], [-12, -7], [-1, 8], [-8, 10], [-6, 12], [-8, 5]], [[2549, 5987], [3, -3], [6, 11], [8, 1], [3, -5], [4, 3], [13, -6], [13, 2], [9, 6], [3, 7], [9, -3], [6, -4], [8, 1], [5, 5], [13, -8], [4, -1], [9, -11], [8, -13], [10, -9], [7, -17]], [[2690, 5943], [-9, 2], [-4, -8], [-10, -8], [-7, 0], [-6, -8], [-6, 3], [-4, 9], [-3, -2], [-4, -14], [-3, 1], [0, -12], [-10, -17], [-5, -7], [-3, -7], [-8, 12], [-6, -16], [-6, 1], [-6, -2], [0, -29], [-4, 0], [-3, -14], [-9, -2]], [[5522, 7770], [7, -23], [9, -17], [-11, -22]], [[5515, 7577], [-3, -10]], [[5512, 7567], [-26, 22], [-16, 21], [-26, 18], [-23, 43], [6, 5], [-13, 25], [-1, 19], [-17, 10], [-9, -26], [-8, 20], [0, 21], [1, 1]], [[5380, 7746], [20, -2], [5, 9], [9, -9], [11, -1], [0, 16], [10, 6], [2, 24], [23, 16]], [[5460, 7805], [8, -7], [21, -26], [23, -11], [10, 9]], [[3008, 6124], [-19, 10], [-13, -5], [-17, 5], [-13, -11], [-15, 18], [3, 19], [25, -8], [21, -5], [10, 13], [-12, 26], [0, 23], [-18, 9], [7, 16], [17, -3], [24, -9]], [[5471, 7900], [14, -15], [10, -6], [24, 7], [2, 12], [11, 2], [14, 9], [3, -4], [13, 8], [6, 13], [9, 4], [30, -18], [6, 6]], [[5613, 7918], [15, -16], [2, -16]], [[5630, 7886], [-17, -12], [-13, -40], [-17, -40], [-22, -11]], [[5561, 7783], [-17, 2], [-22, -15]], [[5460, 7805], [-6, 20], [-4, 0]], [[8352, 4453], [-11, -2], [-37, 42], [26, 11], [14, -18], [10, -17], [-2, -16]], [[8471, 4532], [2, -11], [1, -18]], [[8474, 4503], [-18, -45], [-24, -13], [-3, 8], [2, 20], [12, 36], [28, 23]], [[8274, 4579], [10, -16], [17, 5], [7, -25], [-32, -12], [-19, -8], [-15, 1], [10, 34], [15, 0], [7, 21]], [[8413, 4579], [-4, -32], [-42, -17], [-37, 7], [0, 22], [22, 12], [18, -18], [18, 5], [25, 21]], [[8017, 4657], [53, -6], [6, 25], [51, -29], [10, -38], [42, -11], [34, -35], [-31, -23], [-31, 24], [-25, -1], [-29, 4], [-26, 11], [-32, 22], [-21, 6], [-11, -7], [-51, 24], [-5, 25], [-25, 5], [19, 56], [34, -3], [22, -23], [12, -5], [4, -21]], [[8741, 4690], [-14, -40], [-3, 45], [5, 21], [6, 20], [7, -17], [-1, -29]], [[8534, 4853], [-11, -19], [-19, 10], [-5, 26], [28, 3], [7, -20]], [[8623, 4875], [10, -45], [-23, 24], [-23, 5], [-16, -4], [-19, 2], [6, 33], [35, 2], [30, -17]], [[8916, 4904], [0, -193], [1, -192]], [[8917, 4519], [-25, 48], [-28, 12], [-7, -17], [-35, -1], [12, 48], [17, 16], [-7, 64], [-14, 50], [-53, 50], [-23, 5], [-42, 54], [-8, -28], [-11, -5], [-6, 21], [0, 26], [-21, 29], [29, 21], [20, -1], [-2, 16], [-41, 0], [-11, 35], [-25, 11], [-11, 29], [37, 14], [14, 20], [45, -25], [4, -22], [8, -95], [29, -35], [23, 62], [32, 36], [25, 0], [23, -21], [21, -21], [30, -11]], [[8478, 5141], [-22, -58], [-21, -12], [-27, 12], [-46, -3], [-24, -8], [-4, -45], [24, -53], [15, 27], [52, 20], [-2, -27], [-12, 9], [-12, -35], [-25, -23], [27, -76], [-5, -20], [25, -68], [-1, -39], [-14, -17], [-11, 20], [13, 49], [-27, -23], [-7, 16], [3, 23], [-20, 35], [3, 57], [-19, -18], [2, -69], [1, -84], [-17, -9], [-12, 18], [8, 54], [-4, 57], [-12, 1], [-9, 40], [12, 39], [4, 47], [14, 89], [5, 24], [24, 44], [22, -18], [35, -8], [32, 3], [27, 43], [5, -14]], [[8574, 5124], [-2, -51], [-14, 6], [-4, -36], [11, -32], [-8, -7], [-11, 38], [-8, 75], [6, 47], [9, 22], [2, -32], [16, -5], [3, -25]], [[8045, 5176], [5, -39], [19, -34], [18, 12], [18, -4], [16, 30], [13, 5], [26, -17], [23, 13], [14, 82], [11, 21], [10, 67], [32, 0], [24, -10]], [[8274, 5302], [-16, -53], [20, -56], [-5, -28], [32, -54], [-33, -7], [-10, -40], [2, -54], [-27, -40], [-1, -59], [-10, -91], [-5, 21], [-31, -26], [-11, 36], [-20, 3], [-14, 19], [-33, -21], [-10, 29], [-18, -4], [-23, 7], [-4, 79], [-14, 17], [-13, 50], [-4, 52], [3, 55], [16, 39]], [[7939, 4712], [-31, -1], [-24, 49], [-35, 48], [-12, 36], [-21, 48], [-14, 44], [-21, 83], [-24, 49], [-9, 51], [-10, 46], [-25, 37], [-14, 51], [-21, 33], [-29, 65], [-3, 30], [18, -2], [43, -12], [25, -57], [21, -40], [16, -25], [26, -63], [28, -1], [23, -41], [16, -49], [22, -27], [-12, -49], [16, -20], [10, -2], [5, -41], [10, -33], [20, -5], [14, -37], [-7, -74], [-1, -91]], [[7252, 6841], [-17, -27], [-11, -55], [27, -23], [26, -29], [36, -33], [38, -8], [16, -30], [22, -5], [33, -14], [23, 1], [4, 23], [-4, 38], [2, 25]], [[7703, 6727], [2, -22], [-10, -11], [2, -36], [-19, 10], [-36, -41], [0, -33], [-15, -50], [-1, -29], [-13, -48], [-21, 13], [-1, -61], [-7, -20], [3, -25], [-14, -14]], [[7472, 6360], [-4, -21], [-19, 1], [-34, -13], [2, -44], [-15, -35], [-40, -40], [-31, -69], [-21, -38], [-28, -38], [0, -27], [-13, -15], [-26, -21], [-12, -3], [-9, -45], [6, -77], [1, -49], [-11, -56], [0, -101], [-15, -2], [-12, -46], [8, -19], [-25, -17], [-10, -40], [-11, -17], [-26, 55], [-13, 83], [-11, 60], [-9, 28], [-15, 56], [-7, 74], [-5, 37], [-25, 81], [-12, 115], [-8, 75], [0, 72], [-5, 55], [-41, -35], [-19, 7], [-36, 71], [13, 22], [-8, 23], [-33, 50]], [[6893, 6457], [19, 40], [61, -1], [-6, 51], [-15, 30], [-4, 46], [-18, 26], [31, 62], [32, -4], [29, 61], [18, 60], [27, 60], [-1, 42], [24, 34], [-23, 29], [-9, 40], [-10, 52], [14, 25], [42, -14], [31, 9], [26, 49]], [[4827, 8240], [5, -42], [-21, -53], [-49, -35], [-40, 9], [23, 62], [-15, 60], [38, 46], [21, 28]], [[6497, 7255], [25, 12], [19, 33], [19, -1], [12, 11], [20, -6], [31, -30], [22, -6], [31, -53], [21, -2], [3, -49]], [[6690, 6820], [14, -31], [11, -36], [27, -26], [1, -52], [13, -10], [2, -27], [-40, -30], [-10, -69]], [[6708, 6539], [-53, 18], [-30, 13], [-31, 8], [-12, 73], [-13, 10], [-22, -11], [-28, -28], [-34, 20], [-28, 45], [-27, 17], [-18, 56], [-21, 79], [-15, -10], [-17, 20], [-11, -24]], [[6348, 6825], [-15, 32], [0, 31], [-9, 0], [5, 43], [-15, 45], [-34, 32], [-19, 56], [6, 46], [14, 21], [-2, 34], [-18, 18], [-18, 70]], [[6243, 7253], [-15, 48], [5, 18], [-8, 68], [19, 17]], [[6357, 7321], [9, -43], [26, -13], [20, -29], [39, -10], [44, 15], [2, 14]], [[6348, 6825], [-16, 3]], [[6332, 6828], [-19, 5], [-20, -56]], [[6293, 6777], [-52, 4], [-78, 119], [-41, 41], [-34, 16]], [[6088, 6957], [-11, 72]], [[6077, 7029], [61, 62], [11, 71], [-3, 43], [16, 15], [14, 37]], [[6176, 7257], [12, 9], [32, -8], [10, -15], [13, 10]], [[4597, 8984], [-7, -39], [31, -40], [-36, -45], [-80, -41], [-24, -10], [-36, 8], [-78, 19], [28, 26], [-61, 29], [49, 12], [-1, 17], [-58, 14], [19, 38], [42, 9], [43, -40], [42, 32], [35, -17], [45, 32], [47, -4]], [[5992, 6990], [-5, -19]], [[5987, 6971], [-10, 8], [-6, -39], [7, -7], [-7, -8], [-1, -15], [13, 8]], [[5983, 6918], [0, -23], [-14, -95]], [[5951, 6902], [8, 19], [-2, 4], [8, 27], [5, 45], [4, 15], [1, 0]], [[5975, 7012], [9, 0], [3, 11], [7, 0]], [[5994, 7023], [1, -24], [-4, -9], [1, 0]], [[5431, 7316], [-10, -46], [4, -19], [-6, -30], [-21, 22], [-14, 7], [-39, 30], [4, 30], [32, -6], [28, 7], [22, 5]], [[5255, 7492], [17, -42], [-4, -78], [-13, 4], [-11, -20], [-10, 16], [-2, 71], [-6, 34], [15, -3], [14, 18]], [[5383, 7805], [-3, -29], [7, -25]], [[5387, 7751], [-22, 8], [-23, -20], [1, -30], [-3, -17], [9, -30], [26, -29], [14, -49], [31, -48], [22, 0], [7, -13], [-8, -11], [25, -22], [20, -18], [24, -30], [3, -11], [-5, -22], [-16, 28], [-24, 10], [-12, -39], [20, -21], [-3, -31], [-11, -4], [-15, -50], [-12, -5], [0, 18], [6, 32], [6, 12], [-11, 35], [-8, 29], [-12, 8], [-8, 25], [-18, 11], [-12, 24], [-21, 4], [-21, 26], [-26, 39], [-19, 34], [-8, 58], [-14, 7], [-23, 20], [-12, -8], [-16, -28], [-12, -4]], [[2845, 6150], [19, -5], [14, -15], [5, -16], [-19, -1], [-9, -10], [-15, 10], [-16, 21], [3, 14], [12, 4], [6, -2]], [[5992, 6990], [31, -24], [54, 63]], [[6088, 6957], [-5, -8], [-56, -30], [28, -59], [-9, -10], [-5, -20], [-21, -8], [-7, -21], [-12, -19], [-31, 10]], [[5970, 6792], [-1, 8]], [[5983, 6918], [4, 17], [0, 36]], [[8739, 7075], [4, -20], [-16, -36], [-11, 19], [-15, -14], [-7, -34], [-18, 16], [0, 28], [15, 36], [16, -7], [12, 25], [20, -13]], [[8915, 7252], [-10, -47], [4, -30], [-14, -42], [-35, -27], [-49, -4], [-40, -67], [-19, 22], [-1, 44], [-48, -13], [-33, -27], [-32, -2], [28, -43], [-19, -101], [-18, -24], [-13, 23], [7, 53], [-18, 17], [-11, 41], [26, 18], [15, 37], [28, 30], [20, 41], [55, 17], [30, -12], [29, 105], [19, -28], [40, 59], [16, 23], [18, 72], [-5, 67], [11, 37], [30, 11], [15, -82], [-1, -48], [-25, -59], [0, -61]], [[8997, 7667], [19, -12], [20, 25], [6, -67], [-41, -16], [-25, -59], [-43, 41], [-15, -65], [-31, -1], [-4, 59], [14, 46], [29, 3], [8, 82], [9, 46], [32, -62], [22, -20]], [[6970, 7554], [-15, -10], [-37, -42], [-12, -42], [-11, 0], [-7, 28], [-36, 2], [-5, 48], [-14, 0], [2, 60], [-33, 43], [-48, -5], [-32, -8], [-27, 53], [-22, 22], [-43, 43], [-6, 5], [-71, -35], [1, -218]], [[6554, 7498], [-14, -3], [-20, 46], [-18, 17], [-32, -12], [-12, -20]], [[6458, 7526], [-2, 14], [7, 25], [-5, 21], [-32, 20], [-13, 53], [-15, 15], [-1, 19], [27, -6], [1, 44], [23, 9], [25, -9], [5, 58], [-5, 36], [-28, -2], [-24, 14], [-32, -26], [-26, -12]], [[6363, 7799], [-14, 9], [3, 31], [-18, 39], [-20, -2], [-24, 40], [16, 45], [-8, 12], [22, 65], [29, -34], [3, 43], [58, 64], [43, 2], [61, -41], [33, -24], [30, 25], [44, 1], [35, -30], [8, 17], [39, -2], [7, 28], [-45, 40], [27, 29], [-5, 16], [26, 15], [-20, 41], [13, 20], [104, 21], [13, 14], [70, 22], [25, 24], [50, -12], [9, -61], [29, 14], [35, -20], [-2, -32], [27, 3], [69, 56], [-10, -19], [35, -46], [62, -150], [15, 31], [39, -34], [39, 16], [16, -11], [13, -34], [20, -12], [11, -25], [36, 8], [15, -36]], [[7229, 7559], [-17, 9], [-14, 21], [-42, 6], [-46, 2], [-10, -6], [-39, 24], [-16, -12], [-4, -35], [-46, 21], [-18, -9], [-7, -26]], [[6155, 4958], [-20, -24], [-7, -24], [-10, -4], [-4, -42], [-9, -24], [-5, -39], [-12, -20]], [[6088, 4781], [-40, 59], [-1, 35], [-101, 120], [-5, 6]], [[5941, 5001], [0, 63], [8, 24], [14, 39], [10, 43], [-13, 68], [-3, 30], [-13, 41]], [[5944, 5309], [17, 35], [19, 39]], [[6162, 5289], [-24, -67], [0, -215], [17, -49]], [[7046, 7387], [-53, -9], [-34, 19], [-30, -4], [3, 34], [30, -10], [10, 18]], [[6972, 7435], [21, -6], [36, 43], [-33, 31], [-20, -15], [-21, 22], [24, 39], [-9, 5]], [[7849, 5777], [-7, 72], [18, 49], [36, 11], [26, -8]], [[7922, 5901], [23, -23], [12, 40], [25, -21]], [[7982, 5897], [6, -40], [-3, -71], [-47, -45], [13, -36], [-30, -4], [-24, -24]], [[7897, 5677], [-23, 9], [-11, 30], [-14, 61]], [[8564, 7339], [24, -70], [7, -38], [0, -68], [-10, -33], [-25, -11], [-22, -25], [-25, -5], [-3, 32], [5, 45], [-13, 61], [21, 10], [-19, 51]], [[8504, 7288], [2, 5], [12, -2], [11, 27], [20, 2], [11, 4], [4, 15]], [[5557, 7574], [5, 13]], [[5562, 7587], [7, 4], [4, 20], [5, 3], [4, -8], [5, -4], [3, -10], [5, -2], [5, -11], [4, 0], [-3, -14], [-3, -7], [1, -5]], [[5599, 7553], [-6, -2], [-17, -9], [-1, -12], [-4, 0]], [[6332, 6828], [6, -26], [-3, -13], [9, -45]], [[6344, 6744], [-19, -1], [-7, 28], [-25, 6]], [[7922, 5901], [9, 26], [1, 50], [-22, 52], [-2, 58], [-21, 48], [-21, 4], [-6, -20], [-16, -2], [-8, 10], [-30, -35], [0, 53], [7, 62], [-19, 3], [-2, 36], [-12, 18]], [[7780, 6264], [6, 21], [24, 39]], [[7837, 6385], [17, -47], [12, -54], [34, 0], [11, -52], [-18, -15], [-8, -21], [34, -36], [23, -70], [17, -52], [21, -41], [7, -41], [-5, -59]], [[5975, 7012], [10, 49], [14, 41], [0, 2]], [[5999, 7104], [13, -3], [4, -23], [-15, -22], [-7, -33]], [[4785, 5315], [-7, 0], [-29, 28], [-25, 45], [-24, 32], [-18, 38]], [[4682, 5458], [6, 19], [2, 17], [12, 33], [13, 27]], [[5412, 6408], [-20, -22], [-15, 33], [-44, 25]], [[5263, 6848], [13, 14], [3, 25], [-3, 24], [19, 23], [8, 19], [14, 17], [2, 45]], [[5319, 7015], [32, -20], [12, 5], [23, -10], [37, -26], [13, -53], [25, -11], [39, -25], [30, -29], [13, 15], [13, 27], [-6, 45], [9, 29], [20, 28], [19, 8], [37, -12], [10, -27], [10, 0], [9, -10], [28, -7], [6, -19]], [[5694, 6357], [0, -118], [-32, 0], [0, -25]], [[5662, 6214], [-111, 113], [-111, 113], [-28, -32]], [[7271, 5502], [-4, -62], [-12, -16], [-24, -14], [-13, 47], [-5, 85], [13, 96], [19, -33], [13, -42], [13, -61]], [[5804, 3347], [10, -18], [-9, -29], [-4, -19], [-16, -9], [-5, -19], [-10, -6], [-21, 46], [15, 37], [15, 23], [13, 12], [12, -18]], [[5631, 8267], [-2, 15], [3, 16], [-13, 10], [-29, 10]], [[5590, 8318], [-6, 50]], [[5584, 8368], [32, 18], [47, -4], [27, 6], [4, -12], [15, -4], [26, -29]], [[5652, 8242], [-7, 19], [-14, 6]], [[5584, 8368], [1, 44], [14, 37], [26, 20], [22, -44], [22, 1], [6, 46]], [[5757, 8453], [14, -14], [2, -28], [9, -35]], [[4759, 6691], [-4, 0], [0, -31], [-17, -2], [-9, -14], [-13, 0], [-10, 8], [-23, -6], [-9, -46], [-9, -5], [-13, -74], [-38, -64], [-9, -81], [-12, -27], [-3, -21], [-63, -5]], [[4527, 6323], [1, 27], [11, 17], [9, 30], [-2, 20], [10, 42], [15, 38], [9, 9], [8, 35], [0, 31], [10, 37], [19, 21], [18, 60], [0, 1], [14, 23], [26, 6], [22, 41], [14, 16], [23, 49], [-7, 73], [10, 51], [4, 31], [18, 40], [28, 27], [21, 25], [18, 61], [9, 36], [20, 0], [17, -25], [26, 4], [29, -13], [12, -1]], [[5739, 7906], [6, 9], [19, 6], [20, -19], [12, -2], [12, -16], [-2, -20], [11, -9], [4, -25], [9, -15], [-2, -9], [5, -6], [-7, -4], [-16, 1], [-3, 9], [-6, -5], [2, -11], [-7, -19], [-5, -20], [-7, -6]], [[5784, 7745], [-5, 27], [3, 25], [-1, 26], [-16, 35], [-9, 25], [-9, 17], [-8, 6]], [[6376, 4321], [7, -25], [7, -39], [4, -71], [7, -28], [-2, -28], [-5, -18], [-10, 35], [-5, -18], [5, -43], [-2, -25], [-8, -14], [-1, -50], [-11, -69], [-14, -81], [-17, -112], [-11, -82], [-12, -69], [-23, -14], [-24, -25], [-16, 15], [-22, 21], [-8, 31], [-2, 53], [-10, 47], [-2, 42], [5, 43], [13, 10], [0, 20], [13, 45], [2, 37], [-6, 28], [-5, 38], [-2, 54], [9, 33], [4, 38], [14, 2], [15, 12], [11, 10], [12, 1], [16, 34], [23, 36], [8, 30], [-4, 25], [12, -7], [15, 41], [1, 36], [9, 26], [10, -25]], [[2301, 6586], [-10, -52], [-5, -43], [-2, -79], [-3, -29], [5, -32], [9, -29], [5, -45], [19, -44], [6, -34], [11, -29], [29, -16], [12, -25], [24, 17], [21, 6], [21, 11], [18, 10], [17, 24], [7, 34], [2, 50], [5, 17], [19, 16], [29, 13], [25, -2], [17, 5], [6, -12], [-1, -29], [-15, -35], [-6, -36], [5, -10], [-4, -26], [-7, -46], [-7, 15], [-6, -1]], [[2438, 5916], [-32, 64], [-14, 19], [-23, 16], [-15, -5], [-22, -22], [-14, -6], [-20, 16], [-21, 11], [-26, 27], [-21, 8], [-31, 28], [-23, 28], [-7, 16], [-16, 3], [-28, 19], [-12, 27], [-30, 34], [-14, 37], [-6, 29], [9, 5], [-3, 17], [7, 16], [0, 20], [-10, 27], [-2, 23], [-9, 30], [-25, 59], [-28, 46], [-13, 37], [-24, 24], [-5, 14], [4, 37], [-14, 13], [-17, 29], [-7, 41], [-14, 5], [-17, 31], [-13, 29], [-1, 19], [-15, 44], [-10, 45], [1, 23], [-20, 23], [-10, -2], [-15, 16], [-5, -24], [5, -28], [2, -45], [10, -24], [21, -41], [4, -14], [4, -4], [4, -20], [5, 1], [6, -38], [8, -15], [6, -21], [17, -30], [10, -55], [8, -26], [8, -28], [1, -31], [13, -2], [12, -27], [10, -26], [-1, -11], [-12, -21], [-5, 0], [-7, 36], [-18, 33], [-20, 29], [-14, 15], [1, 43], [-5, 32], [-13, 19], [-19, 26], [-4, -8], [-7, 16], [-17, 14], [-16, 34], [2, 5], [11, -4], [11, 22], [1, 27], [-22, 42], [-16, 17], [-10, 36], [-11, 39], [-12, 47], [-12, 54]], [[1746, 6980], [32, 4], [35, 7], [-2, -12], [41, -29], [64, -41], [55, 0], [22, 0], [0, 24], [48, 0], [10, -20], [15, -19], [16, -26], [9, -31], [7, -32], [15, -18], [23, -18], [17, 47], [23, 1], [19, -24], [14, -40], [10, -35], [16, -34], [6, -41], [8, -28], [22, -18], [20, -13], [10, 2]], [[5599, 7553], [9, 4], [13, 1]], [[4661, 5921], [10, 11], [4, 35], [9, 1], [20, -16], [15, 11], [11, -4], [4, 13], [112, 1], [6, 42], [-5, 7], [-13, 255], [-14, 255], [43, 1]], [[5118, 6189], [0, -136], [-15, -39], [-2, -37], [-25, -9], [-38, -5], [-10, -21], [-18, -3]], [[4680, 5793], [1, 18], [-2, 23], [-11, 16], [-5, 34], [-2, 37]], [[7737, 5644], [-3, 44], [9, 45], [-10, 35], [3, 65], [-12, 30], [-9, 71], [-5, 75], [-12, 49], [-18, -30], [-32, -42], [-15, 5], [-17, 14], [9, 73], [-6, 56], [-21, 68], [3, 21], [-16, 7], [-20, 49]], [[7780, 6264], [-16, -14], [-16, -26], [-20, -2], [-12, -64], [-12, -11], [14, -52], [17, -43], [12, -39], [-11, -51], [-9, -11], [6, -30], [19, -47], [3, -33], [0, -27], [11, -54], [-16, -55], [-13, -61]], [[5538, 7532], [-6, 4], [-8, 19], [-12, 12]], [[5533, 7629], [8, -10], [4, -9], [9, -6], [10, -12], [-2, -5]], [[7437, 7970], [29, 10], [53, 51], [42, 28], [24, -18], [29, -1], [19, -28], [28, -2], [40, -15], [27, 41], [-11, 35], [28, 61], [31, -24], [26, -7], [32, -15], [6, -44], [39, -25], [26, 11], [36, 7], [27, -7], [28, -29], [16, -30], [26, 1], [35, -10], [26, 15], [36, 9], [41, 42], [17, -6], [14, -20], [33, 5]], [[5959, 4377], [21, 5], [34, -17], [7, 8], [19, 1], [10, 18], [17, -1], [30, 23], [22, 34]], [[6119, 4448], [5, -26], [-1, -59], [3, -52], [1, -92], [5, -29], [-8, -43], [-11, -41], [-18, -36], [-25, -23], [-31, -28], [-32, -64], [-10, -11], [-20, -42], [-11, -13], [-3, -42], [14, -45], [5, -35], [0, -17], [5, 3], [-1, -58], [-4, -28], [6, -10], [-4, -25], [-11, -21], [-23, -20], [-34, -32], [-12, -21], [3, -25], [7, -4], [-3, -31]], [[5911, 3478], [-21, 0]], [[5890, 3478], [-2, 26], [-4, 27]], [[5884, 3531], [-3, 21], [5, 66], [-7, 42], [-13, 83]], [[5866, 3743], [29, 67], [7, 43], [5, 5], [3, 35], [-5, 17], [1, 44], [6, 41], [0, 75], [-15, 19], [-13, 4], [-6, 15], [-13, 12], [-23, -1], [-2, 22]], [[5840, 4141], [-2, 42], [84, 49]], [[5922, 4232], [16, -28], [8, 5], [11, -15], [1, -23], [-6, -28], [2, -42], [19, -36], [8, 41], [12, 12], [-2, 76], [-12, 43], [-10, 19], [-10, -1], [-7, 77], [7, 45]], [[4661, 5921], [-18, 41], [-17, 43], [-18, 16], [-13, 17], [-16, -1], [-13, -12], [-14, 5], [-10, -19]], [[4542, 6011], [-2, 32], [8, 29], [3, 55], [-3, 59], [-3, 29], [2, 30], [-7, 28], [-14, 25]], [[4526, 6298], [6, 20], [108, -1], [-5, 86], [7, 30], [26, 5], [-1, 152], [91, -4], [0, 90]], [[5922, 4232], [-15, 15], [9, 55], [9, 21], [-6, 49], [6, 48], [5, 16], [-7, 50], [-14, 26]], [[5909, 4512], [28, -11], [5, -16], [10, -28], [7, -80]], [[7836, 5425], [7, -5], [16, -36], [12, -40], [2, -39], [-3, -27], [2, -21], [2, -35], [10, -16], [11, -52], [-1, -20], [-19, -4], [-27, 44], [-32, 47], [-4, 30], [-16, 39], [-4, 49], [-10, 32], [4, 43], [-7, 25]], [[7779, 5439], [5, 11], [23, -26], [2, -30], [18, 7], [9, 24]], [[8045, 5176], [21, -20], [21, 11], [6, 50], [12, 11], [33, 13], [20, 47], [14, 37]], [[8206, 5379], [22, 41], [14, 47], [11, 0], [14, -30], [1, -26], [19, -16], [23, -18], [-2, -23], [-19, -3], [5, -29], [-20, -20]], [[5453, 3369], [-20, 45], [-11, 43], [-6, 58], [-7, 42], [-9, 91], [-1, 71], [-3, 32], [-11, 25], [-15, 48], [-14, 71], [-6, 37], [-23, 58], [-2, 45]], [[5644, 4022], [23, 14], [18, -4], [11, -13], [0, -5]], [[5552, 3594], [0, -218], [-25, -30], [-15, -4], [-17, 11], [-13, 4], [-4, 25], [-11, 17], [-14, -30]], [[9604, 3812], [23, -36], [14, -28], [-10, -14], [-16, 16], [-19, 27], [-18, 31], [-19, 42], [-4, 20], [12, -1], [16, -20], [12, -20], [9, -17]], [[5412, 6408], [7, -92], [10, -15], [1, -19], [11, -20], [-6, -25], [-11, -120], [-1, -77], [-35, -56], [-12, -78], [11, -22], [0, -38], [18, -1], [-3, -28]], [[5393, 5795], [-5, -1], [-19, 64], [-6, 3], [-22, -33], [-21, 17], [-15, 3], [-8, -8], [-17, 2], [-16, -25], [-14, -2], [-34, 31], [-13, -15], [-14, 1], [-10, 23], [-28, 22], [-30, -7], [-7, -13], [-4, -34], [-8, -24], [-2, -53]], [[5236, 5339], [-29, -21], [-11, 3], [-10, -13], [-23, 1], [-15, 37], [-9, 43], [-19, 39], [-21, -1], [-25, 0]], [[2619, 5713], [-10, 18], [-13, 24], [-6, 20], [-12, 19], [-13, 26], [3, 9], [4, -9], [2, 5]], [[2690, 5943], [-2, -5], [-2, -13], [3, -22], [-6, -20], [-3, -24], [-1, -26], [1, -15], [1, -27], [-4, -6], [-3, -25], [2, -15], [-6, -16], [2, -16], [4, -9]], [[5092, 8091], [14, 16], [24, 87], [38, 25], [23, -2]], [[5863, 9167], [-47, -24], [-22, -5]], [[5573, 9140], [-17, -2], [-4, -39], [-53, 9], [-7, -33], [-27, 1], [-18, -42], [-28, -66], [-43, -83], [10, -20], [-10, -24], [-27, 1], [-18, -55], [2, -79], [17, -29], [-9, -70], [-23, -40], [-12, -34]], [[5306, 8535], [-19, 36], [-55, -69], [-37, -13], [-38, 30], [-10, 63], [-9, 137], [26, 38], [73, 49], [55, 61], [51, 82], [66, 115], [47, 44], [76, 74], [61, 26], [46, -3], [42, 49], [51, -3], [50, 12], [87, -43], [-36, -16], [30, -37]], [[5686, 9657], [-62, -24], [-49, 13], [19, 16], [-16, 19], [57, 11], [11, -22], [40, -13]], [[5506, 9766], [92, -44], [-70, -23], [-15, -44], [-25, -11], [-13, -49], [-34, -2], [-59, 36], [25, 21], [-42, 17], [-54, 50], [-21, 46], [75, 21], [16, -20], [39, 0], [11, 21], [40, 2], [35, -21]], [[5706, 9808], [55, -21], [-41, -32], [-81, -7], [-82, 10], [-5, 16], [-40, 1], [-30, 27], [86, 17], [40, -14], [28, 17], [70, -14]], [[9805, 2640], [6, -24], [20, 24], [8, -25], [0, -25], [-10, -27], [-18, -44], [-14, -24], [10, -28], [-22, -1], [-23, -22], [-8, -39], [-16, -60], [-21, -26], [-14, -17], [-26, 1], [-18, 20], [-30, 4], [-5, 22], [15, 43], [35, 59], [18, 11], [20, 22], [24, 31], [16, 31], [13, 44], [10, 15], [5, 33], [19, 27], [6, -25]], [[9849, 2922], [20, -63], [1, 41], [13, -16], [4, -45], [22, -19], [19, -5], [16, 22], [14, -6], [-7, -53], [-8, -34], [-22, 1], [-7, -18], [3, -25], [-4, -11], [-11, -32], [-14, -41], [-21, -23], [-5, 15], [-12, 9], [16, 48], [-9, 33], [-30, 23], [1, 22], [20, 20], [5, 46], [-1, 38], [-12, 40], [1, 10], [-13, 25], [-22, 52], [-12, 42], [11, 4], [15, -33], [21, -15], [8, -52]], [[6475, 6041], [-9, 41], [-22, 98]], [[6444, 6180], [83, 59], [19, 118], [-13, 42]], [[6566, 6530], [12, -40], [16, -22], [20, -8], [17, -10], [12, -34], [8, -20], [10, -7], [0, -13], [-10, -36], [-5, -16], [-12, -19], [-10, -41], [-13, 3], [-5, -14], [-5, -30], [4, -39], [-3, -7], [-13, 0], [-17, -22], [-3, -29], [-6, -12], [-18, 0], [-10, -15], [0, -24], [-14, -16], [-15, 5], [-19, -19], [-12, -4]], [[6557, 6597], [8, 20], [3, -5], [-2, -25], [-4, -10]], [[6893, 6457], [-20, 15], [-9, 43], [-21, 45], [-51, -12], [-45, -1], [-39, -8]], [[2836, 5484], [-9, 17], [-6, 32], [7, 16], [-7, 4], [-5, 20], [-14, 16], [-12, -4], [-6, -20], [-11, -15], [-6, -2], [-3, -13], [13, -32], [-7, -7], [-4, -9], [-13, -3], [-5, 35], [-4, -10], [-9, 4], [-5, 24], [-12, 3], [-7, 7], [-12, 0], [-1, -13], [-3, 9]], [[2707, 5623], [10, -22], [-1, -12], [11, -3], [3, 5], [8, -14], [13, 4], [12, 15], [17, 12], [9, 17], [16, -3], [-1, -6], [15, -2], [12, -10], [10, -18], [10, -16]], [[3045, 3974], [-28, 33], [-2, 25], [-55, 59], [-50, 65], [-22, 36], [-11, 49], [4, 17], [-23, 77], [-28, 109], [-26, 118], [-11, 27], [-9, 43], [-21, 39], [-20, 24], [9, 26], [-14, 57], [9, 41], [22, 37]], [[8510, 5555], [2, -40], [2, -33], [-9, -54], [-11, 60], [-13, -30], [9, -43], [-8, -28], [-32, 35], [-8, 42], [8, 28], [-17, 28], [-9, -24], [-13, 2], [-21, -33], [-4, 17], [11, 50], [17, 17], [15, 22], [10, -27], [21, 17], [5, 26], [19, 1], [-1, 46], [22, -28], [3, -30], [2, -21]], [[8443, 5665], [-10, -20], [-9, -37], [-8, -17], [-17, 40], [5, 16], [7, 17], [3, 36], [16, 4], [-5, -40], [21, 57], [-3, -56]], [[8291, 5608], [-37, -56], [14, 41], [20, 37], [16, 41], [15, 58], [5, -48], [-18, -33], [-15, -40]], [[8385, 5760], [16, -18], [18, 0], [0, -25], [-13, -25], [-18, -18], [-1, 28], [2, 30], [-4, 28]], [[8485, 5776], [8, -66], [-21, 16], [0, -20], [7, -37], [-13, -13], [-1, 42], [-9, 3], [-4, 36], [16, -5], [0, 22], [-17, 45], [27, -1], [7, -22]], [[8375, 5830], [-7, -51], [-12, 29], [-15, 45], [24, -2], [10, -21]], [[8369, 6151], [17, -17], [9, 15], [2, -15], [-4, -24], [9, -43], [-7, -49], [-16, -19], [-5, -48], [7, -47], [14, -7], [13, 7], [34, -32], [-2, -32], [9, -15], [-3, -27], [-22, 29], [-10, 31], [-7, -22], [-18, 36], [-25, -9], [-14, 13], [1, 25], [9, 15], [-8, 13], [-4, -21], [-14, 34], [-4, 26], [-1, 56], [11, -19], [3, 92], [9, 54], [17, 0]], [[9329, 4655], [-8, -6], [-12, 22], [-12, 38], [-6, 45], [4, 6], [3, -18], [8, -13], [14, -38], [13, -20], [-4, -16]], [[9221, 4734], [-15, -5], [-4, -17], [-15, -14], [-15, -14], [-14, 0], [-23, 18], [-16, 16], [2, 18], [25, -8], [15, 4], [5, 29], [4, 1], [2, -31], [16, 4], [8, 20], [16, 21], [-4, 35], [17, 1], [6, -9], [-1, -33], [-9, -36]], [[8916, 4904], [48, -41], [51, -34], [19, -30], [16, -30], [4, -34], [46, -37], [7, -31], [-25, -7], [6, -39], [25, -39], [18, -62], [15, 2], [-1, -27], [22, -10], [-9, -11], [30, -25], [-3, -17], [-18, -4], [-7, 16], [-24, 6], [-28, 9], [-22, 38], [-16, 32], [-14, 52], [-36, 26], [-24, -17], [-17, -20], [4, -43], [-22, -20], [-16, 9], [-28, 3]], [[9253, 4792], [-9, -16], [-5, 35], [-6, 23], [-13, 19], [-16, 25], [-20, 18], [8, 14], [15, -17], [9, -13], [12, -14], [11, -25], [11, -19], [3, -30]], [[5392, 8233], [19, 18], [43, 27], [35, 20], [28, -10], [2, -14], [27, -1]], [[5546, 8273], [34, -7], [51, 1]], [[5653, 8105], [14, -52], [-3, -17], [-14, -6], [-25, -50], [7, -26], [-6, 3]], [[5626, 7957], [-26, 23], [-20, -8], [-13, 6], [-17, -13], [-14, 21], [-11, -8], [-2, 4]], [[3159, 6151], [14, -5], [5, -12], [-7, -15], [-21, 1], [-17, -2], [-1, 25], [4, 9], [23, -1]], [[8628, 7562], [4, -10]], [[8632, 7552], [-11, 3], [-12, -20], [-8, -20], [1, -42], [-14, -13], [-5, -11], [-11, -17], [-18, -10], [-12, -16], [-1, -25], [-3, -7], [11, -9], [15, -26]], [[8504, 7288], [-13, 11], [-4, -11], [-8, -5], [-1, 11], [-7, 5], [-8, 10], [8, 26], [7, 7], [-3, 11], [7, 31], [-2, 10], [-16, 7], [-13, 15]], [[4792, 7249], [-11, -15], [-14, 8], [-15, -6], [5, 46], [-3, 36], [-12, 6], [-7, 22], [2, 39], [11, 21], [2, 24], [6, 36], [-1, 25], [-5, 21], [-1, 20]], [[6411, 6520], [-2, 43], [7, 31], [8, 6], [8, -18], [1, -35], [-6, -35]], [[6427, 6512], [-8, -4], [-8, 12]], [[5630, 7886], [12, 13], [17, -7], [18, 0], [13, -14], [10, 9], [20, 5], [7, 14], [12, 0]], [[5784, 7745], [12, -11], [13, 9], [13, -10]], [[5822, 7733], [0, -15], [-13, -13], [-9, 6], [-7, -71]], [[5629, 7671], [-5, 10], [6, 10], [-7, 7], [-8, -13], [-17, 17], [-2, 25], [-17, 14], [-3, 18], [-15, 24]], [[8989, 8056], [28, -105], [-41, 19], [-17, -85], [27, -61], [-1, -41], [-21, 36], [-18, -46], [-5, 50], [3, 57], [-3, 64], [6, 45], [2, 79], [-17, 58], [3, 80], [25, 28], [-11, 27], [13, 8], [7, -39], [10, -57], [-1, -58], [11, -59]], [[5546, 8273], [6, 26], [38, 19]], [[0, 9132], [68, -45], [73, -59], [-3, -37], [19, -15], [-6, 43], [75, -8], [55, -56], [-28, -26], [-46, -6], [0, -57], [-11, -13], [-26, 2], [-22, 21], [-36, 17], [-7, 26], [-28, 9], [-31, -7], [-16, 20], [6, 22], [-33, -14], [13, -28], [-16, -25]], [[0, 8896], [0, 236]], [[0, 9282], [9999, -40], [-30, -3], [-5, 19], [-9964, 24]], [[0, 9282], [4, 3], [23, 0], [40, -17], [-2, -8], [-29, -14], [-36, -4], [0, 40]], [[8988, 9383], [-42, -1], [-57, 7], [-5, 3], [27, 23], [34, 6], [40, -23], [3, -15]], [[9186, 9493], [-32, -23], [-44, 5], [-52, 23], [7, 20], [51, -9], [70, -16]], [[9029, 9522], [-22, -44], [-102, 1], [-46, -14], [-55, 39], [15, 40], [37, 11], [73, -2], [100, -31]], [[6598, 9235], [-17, -5], [-91, 8], [-7, 26], [-50, 16], [-4, 32], [28, 13], [-1, 32], [55, 50], [-25, 7], [66, 52], [-7, 27], [62, 31], [91, 38], [93, 11], [48, 22], [54, 8], [19, -23], [-19, -19], [-98, -29], [-85, -28], [-86, -57], [-42, -57], [-43, -57], [5, -49], [54, -49]], [[0, 8896], [9963, -26], [-36, 4], [25, -31], [17, -49], [13, -16], [3, -24], [-7, -16], [-52, 13], [-78, -44], [-25, -7], [-42, -42], [-40, -36], [-11, -27], [-39, 41], [-73, -46], [-12, 22], [-27, -26], [-37, 8], [-9, -38], [-33, -58], [1, -24], [31, -13], [-4, -86], [-25, -2], [-12, -49], [11, -26], [-48, -30], [-10, -67], [-41, -15], [-9, -60], [-40, -55], [-10, 41], [-12, 86], [-15, 131], [13, 82], [23, 35], [2, 28], [43, 13], [50, 75], [47, 60], [50, 48], [23, 83], [-34, -5], [-17, -49], [-70, -65], [-23, 73], [-72, -20], [-69, -99], [23, -36], [-62, -16], [-43, -6], [2, 43], [-43, 9], [-35, -29], [-85, 10], [-91, -18], [-90, -115], [-106, -139], [43, -8], [14, -37], [27, -13], [18, 30], [30, -4], [40, -65], [1, -50], [-21, -59], [-3, -71], [-12, -94], [-42, -86], [-9, -41], [-38, -69], [-38, -68], [-18, -35], [-37, -34], [-17, -1], [-17, 29], [-38, -44], [-4, -19]], [[6363, 7799], [-12, -35], [-27, -10], [-28, -61], [25, -56], [-2, -40], [30, -70]], [[6109, 7624], [-35, 49], [-32, 23], [-24, 34], [20, 10], [23, 49], [-15, 24], [41, 24], [-1, 13], [-25, -10]], [[6061, 7840], [1, 26], [14, 17], [27, 4], [5, 20], [-7, 33], [12, 30], [-1, 18], [-41, 19], [-16, -1], [-17, 28], [-21, -9], [-35, 20], [0, 12], [-10, 26], [-22, 3], [-2, 18], [7, 12], [-18, 33], [-29, -5], [-8, 3], [-7, -14], [-11, 3]], [[5777, 8571], [31, 33], [-29, 28]], [[5863, 9167], [29, 20], [46, -35], [76, -14], [105, -67], [21, -28], [2, -40], [-31, -31], [-45, -15], [-124, 44], [-21, -7], [45, -43], [2, -28], [2, -60], [36, -18], [22, -15], [3, 28], [-17, 26], [18, 22], [67, -37], [24, 15], [-19, 43], [65, 58], [25, -4], [26, -20], [16, 40], [-23, 35], [14, 36], [-21, 36], [78, -18], [16, -34], [-35, -7], [0, -33], [22, -20], [43, 13], [7, 38], [58, 28], [97, 50], [20, -3], [-27, -35], [35, -7], [19, 21], [52, 1], [42, 25], [31, -36], [32, 39], [-29, 35], [14, 19], [82, -18], [39, -18], [100, -68], [19, 31], [-28, 31], [-1, 13], [-34, 6], [10, 28], [-15, 46], [-1, 19], [51, 53], [18, 54], [21, 11], [74, -15], [5, -33], [-26, -48], [17, -19], [9, -41], [-6, -81], [31, -36], [-12, -40], [-55, -84], [32, -8], [11, 21], [31, 15], [7, 29], [24, 29], [-16, 33], [13, 39], [-31, 5], [-6, 33], [22, 59], [-36, 48], [50, 40], [-7, 42], [14, 2], [15, -33], [-11, -57], [29, -11], [-12, 43], [46, 23], [58, 3], [51, -34], [-25, 49], [-2, 63], [48, 12], [67, -2], [60, 7], [-23, 31], [33, 39], [31, 2], [54, 29], [74, 8], [9, 16], [73, 6], [23, -14], [62, 32], [51, -1], [8, 25], [26, 25], [66, 25], [48, -19], [-38, -15], [63, -9], [7, -29], [25, 14], [82, -1], [62, -29], [23, -22], [-7, -30], [-31, -18], [-73, -33], [-21, -17], [35, -8], [41, -15], [25, 11], [14, -38], [12, 15], [44, 10], [90, -10], [6, -28], [116, -9], [2, 46], [59, -11], [44, 1], [45, -32], [13, -37], [-17, -25], [35, -47], [44, -24], [27, 62], [44, -26], [48, 16], [53, -18], [21, 16], [45, -8], [-20, 55], [37, 25], [251, -38], [24, -35], [72, -45], [112, 11], [56, -10], [23, -24], [-4, -44], [35, -16], [37, 12], [49, 1], [52, -11], [53, 6], [49, -52], [34, 19], [-23, 37], [13, 27], [88, -17], [58, 4], [80, -29], [-9960, -25]], [[7918, 9684], [-157, -23], [51, 77], [23, 7], [21, -4], [70, -33], [-8, -24]], [[6420, 9816], [-37, -8], [-25, -4], [-4, -10], [-33, -10], [-30, 14], [16, 19], [-62, 2], [54, 10], [43, 1], [5, -16], [16, 14], [26, 10], [42, -13], [-11, -9]], [[7775, 9718], [-60, -8], [-78, 17], [-46, 23], [-21, 42], [-38, 12], [72, 40], [60, 14], [54, -30], [64, -57], [-7, -53]], [[5844, 4990], [11, -33], [-1, -35], [-8, -7]], [[5821, 4978], [7, -6], [16, 18]], [[4526, 6298], [1, 25]], [[6188, 6023], [-4, 26], [-8, 17], [-2, 24], [-15, 21], [-15, 50], [-7, 48], [-20, 40], [-12, 10], [-18, 56], [-4, 41], [2, 35], [-16, 66], [-13, 23], [-15, 12], [-10, 34], [2, 13], [-8, 31], [-8, 13], [-11, 44], [-17, 48], [-14, 40], [-14, 0], [5, 33], [1, 20], [3, 24]], [[6344, 6744], [11, -51], [14, -13], [5, -21], [18, -25], [2, -24], [-3, -20], [4, -20], [8, -16], [4, -20], [4, -14]], [[6427, 6512], [5, -22]], [[6444, 6180], [-80, -23], [-26, -26], [-20, -62], [-13, -10], [-7, 20], [-11, -3], [-27, 6], [-5, 5], [-32, -1], [-7, -5], [-12, 15], [-7, -29], [3, -25], [-12, -19]], [[5943, 5617], [-4, 1], [0, 29], [-3, 20], [-14, 24], [-4, 42], [4, 44], [-13, 4], [-2, -13], [-17, -3], [7, -17], [2, -36], [-15, -32], [-14, -43], [-14, -6], [-23, 34], [-11, -12], [-3, -17], [-14, -11], [-1, -12], [-28, 0], [-3, 12], [-20, 2], [-10, -10], [-8, 5], [-14, 34], [-5, 17], [-20, -9], [-8, -27], [-7, -53], [-10, -11], [-8, -6]], [[5663, 5567], [-2, 2]], [[5635, 5716], [0, 14], [-10, 17], [-1, 35], [-5, 23], [-10, -4], [3, 22], [7, 25], [-3, 24], [9, 18], [-6, 14], [7, 36], [13, 44], [24, -4], [-1, 234]], [[6023, 6357], [9, -58], [-6, -10], [4, -61], [11, -71], [10, -14], [15, -22]], [[5943, 5624], [0, -7]], [[5943, 5617], [0, -46]], [[5944, 5309], [-17, -28], [-20, 1], [-22, -14], [-18, 13], [-11, -16]], [[5682, 5544], [-19, 23]], [[4535, 5861], [-11, 46], [-14, 21], [12, 11], [14, 41], [6, 31]], [[4536, 5789], [-4, 45]], [[9502, 4438], [8, -20], [-19, 0], [-11, 37], [17, -15], [5, -2]], [[9467, 4474], [-11, -1], [-17, 6], [-5, 9], [1, 23], [19, -9], [9, -12], [4, -16]], [[9490, 4490], [-4, -11], [-21, 52], [-5, 35], [9, 0], [10, -47], [11, -29]], [[9440, 4565], [1, -12], [-22, 25], [-15, 21], [-10, 20], [4, 6], [13, -14], [23, -27], [6, -19]], [[9375, 4623], [-5, -3], [-13, 14], [-11, 24], [1, 10], [17, -25], [11, -20]], [[4682, 5458], [-8, 5], [-20, 24], [-14, 31], [-5, 22], [-3, 43]], [[2561, 5848], [-3, -14], [-16, 1], [-10, 6], [-12, 12], [-15, 3], [-8, 13]], [[6198, 5735], [9, -11], [5, -25], [13, -24], [14, -1], [26, 16], [30, 7], [25, 18], [13, 4], [10, 11], [16, 2]], [[6359, 5732], [0, -1], [0, -25], [0, -59], [0, -31], [-13, -36], [-19, -50]], [[6359, 5732], [9, 1], [13, 9], [14, 6], [14, 20], [10, 0], [1, -16], [-3, -35], [0, -31], [-6, -21], [-7, -64], [-14, -66], [-17, -75], [-24, -87], [-23, -66], [-33, -81], [-28, -48], [-42, -58], [-25, -45], [-31, -72], [-6, -31], [-6, -14]], [[3412, 5410], [34, -11], [2, 10], [23, 4], [30, -15]], [[3489, 5306], [10, -35], [-4, -25]], [[5626, 7957], [-8, -15], [-5, -24]], [[5380, 7746], [7, 5]], [[5663, 8957], [-47, -17], [-27, -41], [4, -36], [-44, -48], [-54, -50], [-20, -84], [20, -41], [26, -33], [-25, -67], [-29, -14], [-11, -99], [-15, -55], [-34, 6], [-16, -47], [-32, -3], [-9, 56], [-23, 67], [-21, 84]], [[5890, 3478], [-5, -26], [-17, -6], [-16, 32], [0, 20], [7, 22], [3, 17], [8, 5], [14, -11]], [[5999, 7104], [-2, 45], [7, 25]], [[6004, 7174], [7, 13], [7, 13], [2, 33], [9, -12], [31, 17], [14, -12], [23, 1], [32, 22], [15, -1], [32, 9]], [[5051, 5420], [-22, -12]], [[7849, 5777], [-25, 28], [-24, -2], [4, 47], [-24, 0], [-2, -65], [-15, -87], [-10, -52], [2, -43], [18, -2], [12, -53], [5, -52], [15, -33], [17, -7], [14, -31]], [[7779, 5439], [-11, 23], [-4, 29], [-15, 34], [-14, 28], [-4, -35], [-5, 33], [3, 37], [8, 56]], [[6883, 7252], [16, 60], [-6, 44], [-20, 14], [7, 26], [23, -3], [13, 33], [9, 38], [37, 13], [-6, -27], [4, -17], [12, 2]], [[6497, 7255], [-5, 42], [4, 62], [-22, 20], [8, 40], [-19, 4], [6, 49], [26, -14], [25, 19], [-20, 35], [-8, 34], [-23, -15], [-3, -43], [-8, 38]], [[6554, 7498], [31, 1], [-4, 29], [24, 21], [23, 34], [37, -31], [3, -47], [11, -12], [30, 2], [9, -10], [14, -61], [32, -41], [18, -28], [29, -29], [37, -25], [-1, -36]], [[8471, 4532], [3, 14], [24, 13], [19, 2], [9, 8], [10, -8], [-10, -16], [-29, -25], [-23, -17]], [[3286, 5693], [16, 8], [6, -2], [-1, -44], [-23, -7], [-5, 6], [8, 16], [-1, 23]], [[5233, 7240], [31, 24], [19, -7], [-1, -30], [24, 22], [2, -12], [-14, -29], [0, -27], [9, -15], [-3, -51], [-19, -29], [6, -33], [14, -1], [7, -28], [11, -9]], [[6004, 7174], [-11, 27], [11, 22], [-17, -5], [-23, 13], [-19, -34], [-43, -6], [-22, 31], [-30, 2], [-6, -24], [-20, -7], [-26, 31], [-31, -1], [-16, 59], [-21, 33], [14, 46], [-18, 28], [31, 56], [43, 3], [12, 45], [53, -8], [33, 38], [32, 17], [46, 1], [49, -42], [40, -22], [32, 9], [24, -6], [33, 31]], [[5777, 7539], [3, -23], [25, -19], [-5, -14], [-33, -3], [-12, -19], [-23, -31], [-9, 27], [0, 12]], [[8382, 6499], [-17, -95], [-12, -49], [-14, 50], [-4, 44], [17, 58], [22, 45], [13, -18], [-5, -35]], [[6088, 4781], [-12, -73], [1, -33], [18, -22], [1, -15], [-8, -36], [2, -18], [-2, -28], [10, -37], [11, -58], [10, -13]], [[5909, 4512], [-15, 18], [-18, 10], [-11, 10], [-12, 15]], [[5844, 4990], [10, 8], [31, -1], [56, 4]], [[6061, 7840], [-22, -5], [-18, -19], [-26, -3], [-24, -22], [1, -37], [14, -14], [28, 4], [-5, -21], [-31, -11], [-37, -34], [-16, 12], [6, 28], [-30, 17], [5, 12], [26, 19], [-8, 14], [-43, 15], [-2, 22], [-25, -8], [-11, -32], [-21, -44]], [[3517, 3063], [-12, -38], [-31, -32], [-21, 11], [-15, -6], [-26, 25], [-18, -1], [-17, 32]], [[679, 6185], [-4, -10], [-7, 8], [1, 17], [-4, 21], [1, 7], [5, 10], [-2, 11], [1, 6], [3, -1], [10, -10], [5, -5], [5, -8], [7, -21], [-1, -3], [-11, -13], [-9, -9]], [[664, 6277], [-9, -4], [-5, 12], [-3, 5], [0, 4], [3, 5], [9, -6], [8, -9], [-3, -7]], [[646, 6309], [-1, -7], [-15, 2], [2, 7], [14, -2]], [[621, 6317], [-2, -3], [-2, 1], [-9, 2], [-4, 13], [-1, 2], [7, 8], [3, -3], [8, -20]], [[574, 6356], [-4, -6], [-9, 11], [1, 4], [5, 6], [6, -1], [1, -14]], [[3135, 7724], [5, -19], [-30, -29], [-29, -20], [-29, -18], [-15, -35], [-4, -13], [-1, -31], [10, -32], [11, -1], [-3, 21], [8, -13], [-2, -17], [-19, -9], [-13, 1], [-20, -10], [-12, -3], [-17, -3], [-23, -17], [41, 11], [8, -11], [-39, -18], [-17, 0], [0, 7], [-8, -16], [8, -3], [-6, -43], [-20, -45], [-2, 15], [-6, 3], [-9, 15], [5, -32], [7, -10], [1, -23], [-9, -23], [-16, -47], [-2, 3], [8, 40], [-14, 22], [-3, 49], [-5, -25], [5, -38], [-18, 10], [19, -19], [1, -57], [8, -4], [3, -20], [4, -59], [-17, -44], [-29, -18], [-18, -34], [-14, -4], [-14, -22], [-4, -20], [-31, -38], [-16, -28], [-13, -35], [-4, -42], [5, -41], [9, -51], [13, -41], [0, -26], [13, -69], [-1, -39], [-1, -23], [-7, -36], [-8, -8], [-14, 7], [-4, 26], [-11, 14], [-15, 51], [-13, 45], [-4, 23], [6, 39], [-8, 33], [-22, 49], [-10, 9], [-28, -27], [-5, 3], [-14, 28], [-17, 14], [-32, -7], [-24, 7], [-21, -5], [-12, -9], [5, -15], [0, -24], [5, -12], [-5, -8], [-10, 9], [-11, -11], [-20, 2], [-20, 31], [-25, -8], [-20, 14], [-17, -4], [-24, -14], [-25, -44], [-27, -25], [-16, -28], [-6, -27], [0, -41], [1, -28], [5, -20]], [[1746, 6980], [-4, 30], [-18, 34], [-13, 7], [-3, 17], [-16, 3], [-10, 16], [-26, 6], [-7, 9], [-3, 32], [-27, 60], [-23, 82], [1, 14], [-13, 19], [-21, 50], [-4, 48], [-15, 32], [6, 49], [-1, 51], [-8, 45], [10, 56], [4, 53], [3, 54], [-5, 79], [-9, 51], [-8, 27], [4, 12], [40, -20], [15, -56], [7, 15], [-5, 49], [-9, 48]], [[750, 8432], [-28, -23], [-14, 15], [-4, 28], [25, 21], [15, 9], [18, -4], [12, -18], [-24, -28]], [[401, 8597], [-18, -9], [-18, 11], [-17, 16], [28, 10], [22, -6], [3, -22]], [[230, 8826], [17, -12], [17, 6], [23, -15], [27, -8], [-2, -7], [-21, -12], [-21, 13], [-11, 11], [-24, -4], [-7, 5], [2, 23]], [[1374, 8295], [-15, 22], [-25, 19], [-8, 52], [-36, 47], [-15, 56], [-26, 4], [-44, 2], [-33, 17], [-57, 61], [-27, 11], [-49, 21], [-38, -5], [-55, 27], [-33, 25], [-30, -12], [5, -41], [-15, -4], [-32, -12], [-25, -20], [-30, -13], [-4, 35], [12, 58], [30, 18], [-8, 15], [-35, -33], [-19, -39], [-40, -42], [20, -29], [-26, -42], [-30, -25], [-28, -18], [-7, -26], [-43, -31], [-9, -28], [-32, -25], [-20, 5], [-25, -17], [-29, -20], [-23, -20], [-47, -16], [-5, 9], [31, 28], [27, 18], [29, 33], [35, 6], [14, 25], [38, 35], [6, 12], [21, 21], [5, 44], [14, 35], [-32, -18], [-9, 11], [-15, -22], [-18, 30], [-8, -21], [-10, 29], [-28, -23], [-17, 0], [-3, 35], [5, 21], [-17, 22], [-37, -12], [-23, 28], [-19, 14], [0, 34], [-22, 25], [11, 34], [23, 33], [10, 30], [22, 4], [19, -9], [23, 28], [20, -5], [21, 19], [-5, 27], [-16, 10], [21, 23], [-17, -1], [-30, -13], [-8, -13], [-22, 13], [-39, -6], [-41, 14], [-12, 24], [-35, 34], [39, 25], [62, 29], [23, 0], [-4, -30], [59, 2], [-23, 37], [-34, 23], [-20, 29], [-26, 25], [-38, 19], [15, 31], [49, 2], [35, 27], [7, 29], [28, 28], [28, 6], [52, 27], [26, -4], [42, 31], [42, -12], [21, -27], [12, 11], [47, -3], [-2, -14], [43, -10], [28, 6], [59, -18], [53, -6], [21, -8], [37, 10], [42, -18], [31, -8]], [[3018, 5753], [-1, -14], [-16, -7], [9, -26], [0, -31], [-12, -35], [10, -47], [12, 4], [6, 43], [-8, 21], [-2, 45], [35, 24], [-4, 27], [10, 19], [10, -41], [19, -1], [18, -33], [1, -20], [25, 0], [30, 6], [16, -27], [21, -7], [16, 18], [0, 15], [34, 4], [34, 1], [-24, -18], [10, -28], [22, -4], [21, -29], [4, -48], [15, 2], [11, -14]], [[8001, 6331], [-37, -51], [-24, -56], [-6, -41], [22, -62], [25, -77], [26, -37], [17, -47], [12, -109], [-3, -104], [-24, -39], [-31, -38], [-23, -49], [-35, -55], [-10, 37], [8, 40], [-21, 34]], [[9661, 4085], [-9, -8], [-9, 26], [1, 16], [17, -34]], [[9641, 4175], [4, -47], [-7, 7], [-6, -3], [-4, 16], [0, 45], [13, -18]], [[6475, 6041], [-21, -16], [-5, -26], [-1, -20], [-27, -25], [-45, -28], [-24, -41], [-13, -3], [-8, 3], [-16, -25], [-18, -11], [-23, -3], [-7, -3], [-6, -16], [-8, -4], [-4, -15], [-14, 1], [-9, -8], [-19, 3], [-7, 35], [1, 32], [-5, 17], [-5, 44], [-8, 24], [5, 3], [-2, 27], [3, 12], [-1, 25]], [[5817, 3752], [11, 0], [14, -10], [9, 7], [15, -6]], [[5911, 3478], [-7, -43], [-3, -49], [-7, -27], [-19, -30], [-5, -8], [-12, -30], [-8, -31], [-16, -42], [-31, -61], [-20, -36], [-21, -26], [-29, -23], [-14, -3], [-3, -17], [-17, 9], [-14, -11], [-30, 11], [-17, -7], [-12, 3], [-28, -23], [-24, -10], [-17, -22], [-13, -1], [-11, 21], [-10, 1], [-12, 26], [-1, -8], [-4, 16], [0, 34], [-9, 40], [9, 11], [0, 45], [-19, 55], [-14, 50], [0, 1], [-20, 76]], [[5840, 4141], [-21, -8], [-15, -23], [-4, -21], [-10, -4], [-24, -49], [-15, -38], [-10, -2], [-9, 7], [-31, 7]]],
                transform: {scale: [.036003600360036005, .016927109510951093], translate: [-180, -85.609038]}
            }, Datamap.prototype.abwTopo = "__ABW__", Datamap.prototype.afgTopo = "__AFG__", Datamap.prototype.agoTopo = "__AGO__", Datamap.prototype.aiaTopo = "__AIA__", Datamap.prototype.albTopo = "__ALB__", Datamap.prototype.aldTopo = "__ALD__", Datamap.prototype.andTopo = "__AND__", Datamap.prototype.areTopo = "__ARE__", Datamap.prototype.argTopo = "__ARG__", Datamap.prototype.armTopo = "__ARM__", Datamap.prototype.asmTopo = "__ASM__", Datamap.prototype.ataTopo = "__ATA__", Datamap.prototype.atcTopo = "__ATC__", Datamap.prototype.atfTopo = "__ATF__", Datamap.prototype.atgTopo = "__ATG__", Datamap.prototype.ausTopo = "__AUS__", Datamap.prototype.autTopo = "__AUT__", Datamap.prototype.azeTopo = "__AZE__", Datamap.prototype.bdiTopo = "__BDI__", Datamap.prototype.belTopo = "__BEL__", Datamap.prototype.benTopo = "__BEN__", Datamap.prototype.bfaTopo = "__BFA__", Datamap.prototype.bgdTopo = "__BGD__", Datamap.prototype.bgrTopo = "__BGR__", Datamap.prototype.bhrTopo = "__BHR__", Datamap.prototype.bhsTopo = "__BHS__", Datamap.prototype.bihTopo = "__BIH__", Datamap.prototype.bjnTopo = "__BJN__", Datamap.prototype.blmTopo = "__BLM__", Datamap.prototype.blrTopo = "__BLR__", Datamap.prototype.blzTopo = "__BLZ__", Datamap.prototype.bmuTopo = "__BMU__", Datamap.prototype.bolTopo = "__BOL__", Datamap.prototype.braTopo = "__BRA__", Datamap.prototype.brbTopo = "__BRB__", Datamap.prototype.brnTopo = "__BRN__", Datamap.prototype.btnTopo = "__BTN__", Datamap.prototype.norTopo = "__NOR__", Datamap.prototype.bwaTopo = "__BWA__", Datamap.prototype.cafTopo = "__CAF__", Datamap.prototype.canTopo = "__CAN__", Datamap.prototype.cheTopo = "__CHE__", Datamap.prototype.chlTopo = "__CHL__", Datamap.prototype.chnTopo = "__CHN__", Datamap.prototype.civTopo = "__CIV__", Datamap.prototype.clpTopo = "__CLP__", Datamap.prototype.cmrTopo = "__CMR__", Datamap.prototype.codTopo = "__COD__", Datamap.prototype.cogTopo = "__COG__", Datamap.prototype.cokTopo = "__COK__", Datamap.prototype.colTopo = "__COL__", Datamap.prototype.comTopo = "__COM__", Datamap.prototype.cpvTopo = "__CPV__", Datamap.prototype.criTopo = "__CRI__", Datamap.prototype.csiTopo = "__CSI__", Datamap.prototype.cubTopo = "__CUB__", Datamap.prototype.cuwTopo = "__CUW__", Datamap.prototype.cymTopo = "__CYM__", Datamap.prototype.cynTopo = "__CYN__", Datamap.prototype.cypTopo = "__CYP__", Datamap.prototype.czeTopo = "__CZE__", Datamap.prototype.deuTopo = "__DEU__", Datamap.prototype.djiTopo = "__DJI__", Datamap.prototype.dmaTopo = "__DMA__", Datamap.prototype.dnkTopo = "__DNK__", Datamap.prototype.domTopo = "__DOM__", Datamap.prototype.dzaTopo = "__DZA__", Datamap.prototype.ecuTopo = "__ECU__", Datamap.prototype.egyTopo = "__EGY__", Datamap.prototype.eriTopo = "__ERI__", Datamap.prototype.esbTopo = "__ESB__", Datamap.prototype.espTopo = "__ESP__", Datamap.prototype.estTopo = "__EST__", Datamap.prototype.ethTopo = "__ETH__", Datamap.prototype.finTopo = "__FIN__", Datamap.prototype.fjiTopo = "__FJI__", Datamap.prototype.flkTopo = "__FLK__", Datamap.prototype.fraTopo = "__FRA__", Datamap.prototype.froTopo = "__FRO__", Datamap.prototype.fsmTopo = "__FSM__", Datamap.prototype.gabTopo = "__GAB__", Datamap.prototype.psxTopo = "__PSX__", Datamap.prototype.gbrTopo = "__GBR__", Datamap.prototype.geoTopo = "__GEO__", Datamap.prototype.ggyTopo = "__GGY__", Datamap.prototype.ghaTopo = "__GHA__", Datamap.prototype.gibTopo = "__GIB__", Datamap.prototype.ginTopo = "__GIN__", Datamap.prototype.gmbTopo = "__GMB__", Datamap.prototype.gnbTopo = "__GNB__", Datamap.prototype.gnqTopo = "__GNQ__", Datamap.prototype.grcTopo = "__GRC__", Datamap.prototype.grdTopo = "__GRD__", Datamap.prototype.grlTopo = "__GRL__", Datamap.prototype.gtmTopo = "__GTM__", Datamap.prototype.gumTopo = "__GUM__", Datamap.prototype.guyTopo = "__GUY__", Datamap.prototype.hkgTopo = "__HKG__",Datamap.prototype.hmdTopo = "__HMD__",Datamap.prototype.hndTopo = "__HND__",Datamap.prototype.hrvTopo = "__HRV__",Datamap.prototype.htiTopo = "__HTI__",Datamap.prototype.hunTopo = "__HUN__",Datamap.prototype.idnTopo = "__IDN__",Datamap.prototype.imnTopo = "__IMN__",Datamap.prototype.indTopo = "__IND__",Datamap.prototype.ioaTopo = "__IOA__",Datamap.prototype.iotTopo = "__IOT__",Datamap.prototype.irlTopo = "__IRL__",Datamap.prototype.irnTopo = "__IRN__",Datamap.prototype.irqTopo = "__IRQ__",Datamap.prototype.islTopo = "__ISL__",Datamap.prototype.isrTopo = "__ISR__",Datamap.prototype.itaTopo = "__ITA__",Datamap.prototype.jamTopo = "__JAM__",Datamap.prototype.jeyTopo = "__JEY__",Datamap.prototype.jorTopo = "__JOR__",Datamap.prototype.jpnTopo = "__JPN__",Datamap.prototype.kabTopo = "__KAB__",Datamap.prototype.kasTopo = "__KAS__",Datamap.prototype.kazTopo = "__KAZ__",Datamap.prototype.kenTopo = "__KEN__",Datamap.prototype.kgzTopo = "__KGZ__",Datamap.prototype.khmTopo = "__KHM__",Datamap.prototype.kirTopo = "__KIR__",Datamap.prototype.knaTopo = "__KNA__",Datamap.prototype.korTopo = "__KOR__",Datamap.prototype.kosTopo = "__KOS__",Datamap.prototype.kwtTopo = "__KWT__",Datamap.prototype.laoTopo = "__LAO__",Datamap.prototype.lbnTopo = "__LBN__",Datamap.prototype.lbrTopo = "__LBR__",Datamap.prototype.lbyTopo = "__LBY__",Datamap.prototype.lcaTopo = "__LCA__",Datamap.prototype.lieTopo = "__LIE__",Datamap.prototype.lkaTopo = "__LKA__",Datamap.prototype.lsoTopo = "__LSO__",Datamap.prototype.ltuTopo = "__LTU__",Datamap.prototype.luxTopo = "__LUX__",Datamap.prototype.lvaTopo = "__LVA__",Datamap.prototype.macTopo = "__MAC__",Datamap.prototype.mafTopo = "__MAF__",Datamap.prototype.marTopo = "__MAR__",Datamap.prototype.mcoTopo = "__MCO__",Datamap.prototype.mdaTopo = "__MDA__",Datamap.prototype.mdgTopo = "__MDG__",Datamap.prototype.mdvTopo = "__MDV__",Datamap.prototype.mexTopo = "__MEX__",Datamap.prototype.mhlTopo = "__MHL__",Datamap.prototype.mkdTopo = "__MKD__",Datamap.prototype.mliTopo = "__MLI__",Datamap.prototype.mltTopo = "__MLT__",Datamap.prototype.mmrTopo = "__MMR__",Datamap.prototype.mneTopo = "__MNE__",Datamap.prototype.mngTopo = "__MNG__",Datamap.prototype.mnpTopo = "__MNP__",Datamap.prototype.mozTopo = "__MOZ__",Datamap.prototype.mrtTopo = "__MRT__",Datamap.prototype.msrTopo = "__MSR__",Datamap.prototype.musTopo = "__MUS__",Datamap.prototype.mwiTopo = "__MWI__",Datamap.prototype.mysTopo = "__MYS__",Datamap.prototype.namTopo = "__NAM__",Datamap.prototype.nclTopo = "__NCL__",Datamap.prototype.nerTopo = "__NER__",Datamap.prototype.nfkTopo = "__NFK__",Datamap.prototype.ngaTopo = "__NGA__",Datamap.prototype.nicTopo = "__NIC__",Datamap.prototype.niuTopo = "__NIU__",Datamap.prototype.nldTopo = "__NLD__",Datamap.prototype.nplTopo = "__NPL__",Datamap.prototype.nruTopo = "__NRU__",Datamap.prototype.nulTopo = "__NUL__",Datamap.prototype.nzlTopo = "__NZL__",Datamap.prototype.omnTopo = "__OMN__",Datamap.prototype.pakTopo = "__PAK__",Datamap.prototype.panTopo = "__PAN__",Datamap.prototype.pcnTopo = "__PCN__",Datamap.prototype.perTopo = "__PER__",Datamap.prototype.pgaTopo = "__PGA__",Datamap.prototype.phlTopo = "__PHL__",Datamap.prototype.plwTopo = "__PLW__",Datamap.prototype.pngTopo = "__PNG__",Datamap.prototype.polTopo = "__POL__",Datamap.prototype.priTopo = "__PRI__",Datamap.prototype.prkTopo = "__PRK__",Datamap.prototype.prtTopo = "__PRT__",Datamap.prototype.pryTopo = "__PRY__",Datamap.prototype.pyfTopo = "__PYF__",Datamap.prototype.qatTopo = "__QAT__",Datamap.prototype.rouTopo = "__ROU__",Datamap.prototype.rusTopo = "__RUS__",Datamap.prototype.rwaTopo = "__RWA__",Datamap.prototype.sahTopo = "__SAH__",Datamap.prototype.sauTopo = "__SAU__",Datamap.prototype.scrTopo = "__SCR__",Datamap.prototype.sdnTopo = "__SDN__",Datamap.prototype.sdsTopo = "__SDS__",Datamap.prototype.senTopo = "__SEN__",Datamap.prototype.serTopo = "__SER__",Datamap.prototype.sgpTopo = "__SGP__",Datamap.prototype.sgsTopo = "__SGS__",Datamap.prototype.shnTopo = "__SHN__",Datamap.prototype.slbTopo = "__SLB__",Datamap.prototype.sleTopo = "__SLE__",Datamap.prototype.slvTopo = "__SLV__",Datamap.prototype.smrTopo = "__SMR__",Datamap.prototype.solTopo = "__SOL__",Datamap.prototype.somTopo = "__SOM__",Datamap.prototype.spmTopo = "__SPM__",Datamap.prototype.srbTopo = "__SRB__",Datamap.prototype.stpTopo = "__STP__",Datamap.prototype.surTopo = "__SUR__",Datamap.prototype.svkTopo = "__SVK__",Datamap.prototype.svnTopo = "__SVN__",Datamap.prototype.sweTopo = "__SWE__",Datamap.prototype.swzTopo = "__SWZ__",Datamap.prototype.sxmTopo = "__SXM__",Datamap.prototype.sycTopo = "__SYC__",Datamap.prototype.syrTopo = "__SYR__",Datamap.prototype.tcaTopo = "__TCA__",Datamap.prototype.tcdTopo = "__TCD__",Datamap.prototype.tgoTopo = "__TGO__",Datamap.prototype.thaTopo = "__THA__",Datamap.prototype.tjkTopo = "__TJK__",Datamap.prototype.tkmTopo = "__TKM__",Datamap.prototype.tlsTopo = "__TLS__",Datamap.prototype.tonTopo = "__TON__",Datamap.prototype.ttoTopo = "__TTO__",Datamap.prototype.tunTopo = "__TUN__",Datamap.prototype.turTopo = "__TUR__",Datamap.prototype.tuvTopo = "__TUV__",Datamap.prototype.twnTopo = "__TWN__",Datamap.prototype.tzaTopo = "__TZA__",Datamap.prototype.ugaTopo = "__UGA__",Datamap.prototype.ukrTopo = "__UKR__",Datamap.prototype.umiTopo = "__UMI__",Datamap.prototype.uryTopo = "__URY__",Datamap.prototype.usaTopo = {
                type: "Topology",
                transform: {scale: [.03514630243024302, .005240860686068607], translate: [-178.123152, 18.948267]},
                objects: {
                    usa: {
                        type: "GeometryCollection",
                        geometries: [{
                            type: "Polygon",
                            id: "AL",
                            arcs: [[0, 1, 2, 3, 4]],
                            properties: {name: "Alabama"}
                        }, {
                            type: "MultiPolygon",
                            id: "AK",
                            arcs: [[[5]], [[6]], [[7]], [[8]], [[9]], [[10]], [[11]], [[12]], [[13]], [[14]], [[15]], [[16]], [[17]], [[18]], [[19]], [[20]], [[21]], [[22]], [[23]], [[24]], [[25]], [[26]], [[27]], [[28]], [[29]], [[30]], [[31]], [[32]], [[33]], [[34]], [[35]], [[36]], [[37]], [[38]], [[39]], [[40]], [[41]], [[42]], [[43]]],
                            properties: {name: "Alaska"}
                        }, {
                            type: "Polygon",
                            id: "AZ",
                            arcs: [[44, 45, 46, 47, 48]],
                            properties: {name: "Arizona"}
                        }, {
                            type: "Polygon",
                            id: "AR",
                            arcs: [[49, 50, 51, 52, 53, 54]],
                            properties: {name: "Arkansas"}
                        }, {
                            type: "Polygon",
                            id: "CA",
                            arcs: [[55, -47, 56, 57]],
                            properties: {name: "California"}
                        }, {
                            type: "Polygon",
                            id: "CO",
                            arcs: [[58, 59, 60, 61, 62, 63]],
                            properties: {name: "Colorado"}
                        }, {
                            type: "Polygon",
                            id: "CT",
                            arcs: [[64, 65, 66, 67]],
                            properties: {name: "Connecticut"}
                        }, {
                            type: "Polygon",
                            id: "DE",
                            arcs: [[68, 69, 70, 71]],
                            properties: {name: "Delaware"}
                        }, {
                            type: "Polygon",
                            id: "DC",
                            arcs: [[72, 73]],
                            properties: {name: "District of Columbia"}
                        }, {
                            type: "Polygon",
                            id: "FL",
                            arcs: [[74, 75, -2]],
                            properties: {name: "Florida"}
                        }, {
                            type: "Polygon",
                            id: "GA",
                            arcs: [[76, 77, -75, -1, 78, 79]],
                            properties: {name: "Georgia"}
                        }, {
                            type: "MultiPolygon",
                            id: "HI",
                            arcs: [[[80]], [[81]], [[82]], [[83]], [[84]]],
                            properties: {name: "Hawaii"}
                        }, {
                            type: "Polygon",
                            id: "ID",
                            arcs: [[85, 86, 87, 88, 89, 90, 91]],
                            properties: {name: "Idaho"}
                        }, {
                            type: "Polygon",
                            id: "IL",
                            arcs: [[92, 93, 94, 95, 96, 97]],
                            properties: {name: "Illinois"}
                        }, {
                            type: "Polygon",
                            id: "IN",
                            arcs: [[98, 99, -95, 100, 101]],
                            properties: {name: "Indiana"}
                        }, {
                            type: "Polygon",
                            id: "IA",
                            arcs: [[102, -98, 103, 104, 105, 106]],
                            properties: {name: "Iowa"}
                        }, {
                            type: "Polygon",
                            id: "KS",
                            arcs: [[107, 108, -60, 109]],
                            properties: {name: "Kansas"}
                        }, {
                            type: "Polygon",
                            id: "KY",
                            arcs: [[110, 111, 112, 113, -96, -100, 114]],
                            properties: {name: "Kentucky"}
                        }, {
                            type: "Polygon",
                            id: "LA",
                            arcs: [[115, 116, 117, -52]],
                            properties: {name: "Louisiana"}
                        }, {
                            type: "Polygon",
                            id: "ME",
                            arcs: [[118, 119]],
                            properties: {name: "Maine"}
                        }, {
                            type: "MultiPolygon",
                            id: "MD",
                            arcs: [[[120]], [[-71, 121, 122, 123, 124, -74, 125, 126, 127]]],
                            properties: {name: "Maryland"}
                        }, {
                            type: "Polygon",
                            id: "MA",
                            arcs: [[128, 129, 130, 131, -68, 132, 133, 134]],
                            properties: {name: "Massachusetts"}
                        }, {
                            type: "MultiPolygon",
                            id: "MI",
                            arcs: [[[-102, 135, 136]], [[137]], [[138, 139]], [[140]]],
                            properties: {name: "Michigan"}
                        }, {
                            type: "Polygon",
                            id: "MN",
                            arcs: [[-107, 141, 142, 143, 144]],
                            properties: {name: "Minnesota"}
                        }, {
                            type: "Polygon",
                            id: "MS",
                            arcs: [[-4, 145, -116, -51, 146]],
                            properties: {name: "Mississippi"}
                        }, {
                            type: "Polygon",
                            id: "MO",
                            arcs: [[-97, -114, 147, -55, 148, -108, 149, -104]],
                            properties: {name: "Missouri"}
                        }, {
                            type: "Polygon",
                            id: "MT",
                            arcs: [[150, 151, -92, 152, 153]],
                            properties: {name: "Montana"}
                        }, {
                            type: "Polygon",
                            id: "NE",
                            arcs: [[-105, -150, -110, -59, 154, 155]],
                            properties: {name: "Nebraska"}
                        }, {
                            type: "Polygon",
                            id: "NV",
                            arcs: [[156, -48, -56, 157, -88]],
                            properties: {name: "Nevada"}
                        }, {
                            type: "Polygon",
                            id: "NH",
                            arcs: [[-135, 158, 159, -120, 160]],
                            properties: {name: "New Hampshire"}
                        }, {
                            type: "Polygon",
                            id: "NJ",
                            arcs: [[161, -69, 162, 163]],
                            properties: {name: "New Jersey"}
                        }, {
                            type: "Polygon",
                            id: "NM",
                            arcs: [[164, 165, 166, -45, -62]],
                            properties: {name: "New Mexico"}
                        }, {
                            type: "Polygon",
                            id: "NY",
                            arcs: [[-133, -67, 167, -164, 168, 169, 170]],
                            properties: {name: "New York"}
                        }, {
                            type: "Polygon",
                            id: "NC",
                            arcs: [[171, 172, -80, 173, 174]],
                            properties: {name: "North Carolina"}
                        }, {
                            type: "Polygon",
                            id: "ND",
                            arcs: [[175, -154, 176, -143]],
                            properties: {name: "North Dakota"}
                        }, {
                            type: "Polygon",
                            id: "OH",
                            arcs: [[177, -115, -99, -137, 178, 179]],
                            properties: {name: "Ohio"}
                        }, {
                            type: "Polygon",
                            id: "OK",
                            arcs: [[-149, -54, 180, -165, -61, -109]],
                            properties: {name: "Oklahoma"}
                        }, {
                            type: "Polygon",
                            id: "OR",
                            arcs: [[-89, -158, -58, 181, 182]],
                            properties: {name: "Oregon"}
                        }, {
                            type: "Polygon",
                            id: "PA",
                            arcs: [[-163, -72, -128, 183, -180, 184, -169]],
                            properties: {name: "Pennsylvania"}
                        }, {
                            type: "MultiPolygon",
                            id: "RI",
                            arcs: [[[185, -130]], [[186, -65, -132]]],
                            properties: {name: "Rhode Island"}
                        }, {
                            type: "Polygon",
                            id: "SC",
                            arcs: [[187, -77, -173]],
                            properties: {name: "South Carolina"}
                        }, {
                            type: "Polygon",
                            id: "SD",
                            arcs: [[-142, -106, -156, 188, -151, -176]],
                            properties: {name: "South Dakota"}
                        }, {
                            type: "Polygon",
                            id: "TN",
                            arcs: [[189, -174, -79, -5, -147, -50, -148, -113]],
                            properties: {name: "Tennessee"}
                        }, {
                            type: "Polygon",
                            id: "TX",
                            arcs: [[-53, -118, 190, -166, -181]],
                            properties: {name: "Texas"}
                        }, {
                            type: "Polygon",
                            id: "UT",
                            arcs: [[191, -63, -49, -157, -87]],
                            properties: {name: "Utah"}
                        }, {
                            type: "Polygon",
                            id: "VT",
                            arcs: [[-134, -171, 192, -159]],
                            properties: {name: "Vermont"}
                        }, {
                            type: "MultiPolygon",
                            id: "VA",
                            arcs: [[[193, -123]], [[120]], [[-126, -73, -125, 194, -175, -190, -112, 195]]],
                            properties: {name: "Virginia"}
                        }, {
                            type: "MultiPolygon",
                            id: "WA",
                            arcs: [[[-183, 196, -90]], [[197]], [[198]]],
                            properties: {name: "Washington"}
                        }, {
                            type: "Polygon",
                            id: "WV",
                            arcs: [[-184, -127, -196, -111, -178]],
                            properties: {name: "West Virginia"}
                        }, {
                            type: "Polygon",
                            id: "WI",
                            arcs: [[199, -93, -103, -145, 200, -140]],
                            properties: {name: "Wisconsin"}
                        }, {
                            type: "Polygon",
                            id: "WY",
                            arcs: [[-189, -155, -64, -192, -86, -152]],
                            properties: {name: "Wyoming"}
                        }]
                    }
                },
                arcs: [[[2632, 3060], [5, -164], [7, -242], [4, -53], [3, -30], [-2, -19], [4, -11], [-5, -25], [0, -24], [-2, -32], [2, -57], [-2, -51], [3, -52]], [[2649, 2300], [-14, -1], [-59, 0], [-1, -25], [6, -37], [-1, -31], [2, -16], [-4, -28]], [[2578, 2162], [-4, -6], [-7, 31], [-1, 47], [-2, 6], [-3, -36], [-1, -34], [-7, 9]], [[2553, 2179], [-2, 291], [6, 363], [4, 209], [-3, 20]], [[2558, 3062], [24, 1], [50, -3]], [[1324, 6901], [1, 32], [6, -19], [-1, -32], [-8, 4], [2, 15]], [[1317, 6960], [5, -23], [-3, -33], [-2, 11], [0, 45]], [[1285, 7153], [6, 5], [3, -8], [-1, -28], [-6, -6], [-5, 17], [3, 20]], [[1267, 7137], [12, -7], [3, -36], [13, -41], [4, -25], [0, -21], [3, -4], [1, -27], [5, -27], [0, -25], [3, 8], [2, -19], [1, -74], [-3, -17], [-7, 3], [-3, 38], [-2, -3], [-6, 28], [-2, -10], [-5, 10], [1, -28], [5, 7], [3, -10], [-2, -39], [-5, 4], [-9, 49], [-2, 25], [1, 26], [-7, -2], [0, 20], [5, 2], [5, 18], [-2, 31], [-6, 7], [-1, 50], [-2, 25], [-4, -18], [-2, 28], [4, 14], [-3, 32], [2, 8]], [[1263, 6985], [5, -12], [4, 15], [4, -7], [-4, -28], [-6, 8], [-3, 24]], [[1258, 7247], [-4, 19], [5, 13], [15, -18], [7, 1], [5, -36], [9, -29], [-1, -22], [-5, -11], [-6, 5], [-5, -14], [-6, 9], [-7, -9], [-1, 45], [0, 30], [-5, 1], [-1, 16]], [[1252, 7162], [-4, 14], [-4, 32], [0, 24], [3, 11], [4, -11], [0, 20], [12, -35], [1, -33], [-4, -5], [-3, -37], [3, -11], [-3, -43], [-5, 9], [0, -27], [-3, 13], [-2, 54], [5, 25]], [[1207, 7331], [8, 38], [3, -16], [7, -13], [6, -2], [0, -30], [6, -99], [0, -85], [-1, -22], [-4, 13], [-10, 84], [-7, 25], [3, 20], [-3, 48], [-8, 39]], [[1235, 7494], [10, -15], [5, 2], [0, -14], [8, -52], [-5, 8], [-2, -18], [6, -27], [2, -48], [-6, -13], [-2, -16], [-10, -35], [-3, 1], [-1, 37], [2, 22], [-1, 32], [-3, 40], [0, 21], [-2, 51], [-4, 22], [-1, 38], [7, -36]], [[1203, 7324], [4, 0], [4, -35], [-2, -24], [-6, -5], [0, 38], [0, 26]], [[1207, 7331], [-5, 7], [-3, 26], [-6, 18], [-5, 37], [-6, 17], [1, 30], [4, 10], [1, 26], [3, -11], [8, -1], [6, 17], [8, -23], [-5, -26], [2, -9], [4, 28], [10, -9], [5, -21], [-3, -38], [3, -3], [3, -50], [-7, -7], [-14, 41], [0, -42], [-4, -17]], [[883, 7871], [-12, -48], [-1, -19], [-9, -12], [2, 29], [10, 30], [7, 34], [3, -14]], [[870, 7943], [-2, -39], [-4, -41], [-6, 14], [5, 47], [7, 19]], [[863, 9788], [3, -8], [15, -9], [8, 5], [10, 0], [12, -7], [7, 4], [7, -15], [12, -18], [16, -4], [5, 10], [11, 6], [4, 14], [12, 2], [0, -9], [7, 5], [15, -15], [9, -24], [10, -11], [2, -11], [8, -2], [8, -18], [1, -11], [5, 9], [6, -7], [0, -1783], [13, -16], [2, 17], [14, -24], [8, 30], [18, 4], [-3, -52], [4, -17], [10, -17], [2, -27], [29, -101], [4, -63], [6, 17], [12, 31], [7, 1], [3, 23], [0, 34], [5, 0], [1, 31], [9, 7], [13, 26], [13, -45], [-1, -27], [3, -27], [7, -7], [10, -40], [-1, -12], [4, -22], [12, -25], [19, -110], [3, -29], [6, -29], [8, -65], [9, -55], [-3, -23], [9, -9], [-2, -33], [7, -14], [1, -38], [7, 2], [14, -40], [9, -7], [5, -19], [4, -5], [1, -19], [9, -5], [3, -23], [-4, -43], [1, -36], [4, -58], [-4, -15], [-6, -53], [-10, -39], [-3, 20], [-4, -6], [-3, 39], [1, 17], [-3, 20], [7, 21], [-2, 7], [-7, -26], [-3, 17], [-4, -10], [-12, 42], [4, 46], [-8, -15], [0, -23], [-6, 17], [-1, 22], [4, 24], [-1, 24], [-6, -19], [-6, 42], [-3, -8], [-2, 36], [5, 23], [6, 0], [-2, 28], [3, 36], [-5, -1], [-9, 32], [-6, 37], [-15, 27], [0, 77], [-4, 9], [1, 31], [-5, 9], [-8, 42], [-2, 22], [-12, 7], [-14, 56], [-6, 132], [-3, -30], [1, -27], [6, -53], [-1, -8], [3, -43], [0, -28], [-6, 6], [-4, 31], [-6, 6], [-8, -9], [0, 45], [-5, 38], [-5, -12], [-17, 40], [-2, -11], [10, -13], [7, -31], [3, -1], [1, -25], [4, -30], [-10, -16], [-5, 10], [0, -26], [-8, 20], [-2, 14], [-5, 0], [-13, 38], [-10, 33], [-1, 20], [-5, 30], [-14, 21], [-9, 21], [-14, 26], [-9, 24], [1, 26], [2, -9], [3, 17], [-3, 38], [4, 21], [-2, 9], [-7, -40], [-14, -26], [-18, 10], [-14, 24], [-1, 18], [-7, -4], [-7, 14], [-17, 12], [-9, 1], [-21, -10], [-8, -7], [-10, 27], [-12, 12], [-3, 17], [-2, 28], [-8, -2], [-3, -25], [-15, 34], [-2, 14], [-15, -27], [-7, -32], [-3, 30], [3, 17], [4, -5], [14, 22], [-2, 17], [-6, -8], [-3, 22], [-6, 3], [-6, 55], [-3, -13], [-8, -8], [-3, 8], [-3, -18], [-11, 6], [-1, -20], [-7, -5], [-3, 7], [2, 36], [-3, -1], [-5, -38], [7, -12], [1, -27], [4, -30], [-3, -31], [-5, 10], [-2, -15], [6, -7], [3, -41], [-8, -9], [-4, 9], [-7, -12], [-3, 10], [-9, -2], [0, 16], [-4, -10], [-3, -20], [-3, 18], [-5, -25], [2, -12], [-6, -15], [-6, -2], [-3, -20], [-6, -17], [-4, 6], [-5, -21], [-4, 1], [-8, -43], [-9, -3], [-3, 14], [-5, -23], [-11, 17], [2, 33], [8, 11], [4, -2], [2, 13], [8, 25], [0, 21], [-11, -28], [-9, 16], [-1, 12], [5, 48], [8, 34], [1, 29], [2, 5], [1, 30], [-4, 34], [10, 12], [19, 48], [4, -19], [6, -5], [9, 20], [-10, 26], [-4, 20], [-7, -2], [-5, 9], [-2, -8], [-9, -14], [-4, -26], [-9, -6], [-9, -30], [-1, -20], [-7, -11], [-2, -22], [-5, -13], [-2, -39], [-10, -25], [5, -20], [-4, -29], [-9, -5], [-1, -38], [-8, -13], [-3, 15], [-4, -29], [-5, -1], [1, -21], [-11, -13], [-2, -57], [12, -3], [10, -16], [3, -19], [-4, -30], [-7, -19], [-6, -1], [0, -17], [-4, -6], [1, -21], [-4, -31], [-9, -29], [-5, 0], [-5, -11], [-5, 2], [-4, -11], [2, -16], [-7, -8], [-2, -23], [-5, 14], [-5, -45], [-9, 4], [1, -24], [-6, 6], [-3, -11], [0, -32], [-6, -50], [-10, -6], [-7, -23], [-2, -13], [-5, 18], [-8, -48], [-2, 13], [-5, -4], [-1, -27], [-5, -10], [-6, 4], [-4, -27], [8, -9], [-9, -60], [-25, -20], [-6, -54], [-2, 12], [1, 33], [-5, 6], [-6, -13], [-1, -14], [-10, -22], [-4, -25], [-1, 18], [-2, -21], [-6, 14], [-10, -33], [-8, 2], [1, 25], [-4, 24], [-3, -20], [1, -21], [-11, -64], [-3, 16], [-1, -24], [-8, 4], [-1, 38], [-4, 8], [-2, -14], [4, -16], [-2, -27], [-5, -13], [-5, 29], [-5, 2], [-1, -11], [5, -17], [-9, -27], [6, -7], [0, -13], [-5, 9], [-7, -25], [-15, 1], [-7, -16], [0, -13], [-8, -15], [-6, 6], [-2, 35], [6, 12], [4, 43], [6, 1], [13, 28], [10, 1], [4, -27], [3, 20], [-1, 23], [6, 10], [7, 0], [8, 50], [10, 45], [12, 40], [15, 18], [6, -9], [6, 12], [1, -17], [-3, -19], [4, -14], [1, 23], [7, 2], [2, -15], [5, -5], [0, 18], [-8, 15], [0, 11], [5, 49], [6, 28], [9, 27], [15, 24], [10, 35], [5, -13], [4, 5], [-1, 22], [1, 21], [8, 44], [11, 28], [8, 38], [0, 21], [7, 148], [11, 40], [-1, 31], [-27, -45], [-8, 6], [-2, 18], [-5, 9], [-1, 21], [-4, -10], [-3, -32], [5, -41], [-6, -18], [-5, 7], [-9, 64], [-6, 33], [-4, 0], [-2, -24], [-3, -4], [-4, 19], [-5, 4], [-2, 32], [-16, -37], [-13, -26], [-1, -14], [-11, -22], [-6, 20], [5, 23], [-1, 54], [-4, 57], [7, 24], [-6, 49], [-5, 27], [-4, 39], [-6, 17], [-2, -34], [-7, -8], [-12, -22], [-14, -9], [-7, 2], [-7, 12], [-1, 30], [-5, 9], [-9, 42], [-8, 8], [-8, 46], [6, 21], [1, 39], [-5, -8], [0, 24], [2, 19], [-6, 18], [0, -19], [-7, 8], [-1, 32], [-6, 4], [-3, 22], [0, 27], [-5, -12], [-1, 26], [7, 6], [-6, 30], [10, 2], [0, 35], [2, 24], [18, 77], [4, 23], [3, -5], [-2, 33], [7, 55], [6, 22], [11, 9], [8, -9], [12, -33], [8, 4], [11, 32], [11, 49], [6, 6], [1, -13], [13, 0], [12, 10], [11, 52], [0, 12], [-5, 48], [-1, 28], [-8, 31], [-3, 26], [8, -7], [8, 22], [0, 20], [-10, 39], [-8, -30], [-7, 5], [-6, -17], [-8, -4], [-2, -11], [-9, -17], [-2, -28], [-5, -12], [-2, 34], [-5, 7], [-4, -26], [-2, 12], [-10, 19], [-20, -1], [-14, -21], [-6, -3], [-11, 13], [-22, 14], [-6, 12], [-3, 19], [2, 26], [-8, 22], [2, 24], [5, 12], [-2, 31], [-8, 0], [-6, 8], [-13, 6], [-7, 16], [-10, 16], [-1, 19], [16, 27], [20, 43], [15, 27], [8, -15], [8, -3], [2, 21], [-5, 3], [-1, 18], [20, 29], [22, 22], [12, 2], [7, -7], [-4, -32], [2, -22], [-3, -15], [4, -26], [8, 5], [10, -5], [11, 6], [4, -10], [7, -2], [7, 10], [8, -11], [9, 42], [5, 2], [5, -8], [2, 24], [-12, 11], [-11, -9], [1, 31], [-8, 34], [-10, 10], [-2, 30], [7, 8], [9, -31], [-1, -24], [4, -18], [10, -22], [2, 23], [-11, 30], [5, 54], [-4, 10], [-11, -12], [-11, 3], [-2, 10], [-6, -10], [-24, 23], [0, 24], [-7, 54], [-6, 19], [-9, 17], [-19, 46], [-9, 18], [-8, 4], [-13, 31], [-12, 18], [-1, 6], [9, 10], [4, 29], [1, 59], [25, -4], [31, 13], [8, 11], [12, 29], [12, 45], [3, 45], [5, 38], [10, 33], [5, 24], [13, 38], [2, -10], [11, -3], [16, 20], [10, 21], [24, 64], [9, 4], [1, -10], [9, 7], [9, -2], [18, 9], [17, 28], [17, 58], [7, 13], [2, -10], [26, -24], [2, -17], [-9, -22], [-4, -1], [0, -29], [14, 9], [0, 16], [6, 14], [2, -8], [5, 33], [13, -30], [-2, -23], [8, -6], [5, -14], [7, 22], [13, 1], [7, 7], [18, -7], [10, -8], [-5, -45], [17, -12], [2, -11], [16, -20], [1, 9], [12, 13], [11, -1], [0, -11], [7, -1], [7, 15], [11, 2], [9, -6], [11, -16], [5, 3], [7, -22], [4, 9], [7, -7], [5, -13]], [[717, 7456], [-1, -8], [-9, 13], [7, 49], [6, 4], [4, 45], [5, -40], [4, 14], [8, -22], [0, -31], [-11, -4], [-5, -13], [-8, -7]], [[688, 7363], [8, 25], [-8, 6], [0, 22], [6, 14], [5, -10], [0, -22], [3, 15], [0, 32], [5, -15], [1, 21], [5, -12], [5, 0], [5, 11], [7, -20], [0, -55], [9, 4], [-6, -37], [-11, 15], [4, -24], [-3, -20], [-6, 10], [0, -38], [-8, -10], [-3, -16], [-5, 15], [-6, -40], [-4, -4], [-5, -18], [-2, 43], [-6, -23], [-1, 13], [-6, 14], [0, 39], [-6, 15], [4, 45], [11, 28], [7, -2], [1, -21]], [[671, 7185], [-6, -39], [-2, 6], [8, 33]], [[640, 7055], [4, -2], [-1, -40], [-8, 6], [-1, 13], [6, 23]], [[519, 6933], [-2, -41], [-9, -33], [5, 51], [2, -5], [4, 28]], [[501, 6947], [5, 0], [0, -20], [-5, -23], [-5, 15], [-3, -14], [-2, 35], [2, 12], [8, -5]], [[451, 6875], [1, -16], [-3, -11], [-3, 18], [5, 9]], [[447, 8527], [-4, -19], [-2, 16], [6, 3]], [[436, 6781], [6, -7], [-1, -16], [-5, 1], [0, 22]], [[358, 6745], [2, -22], [-5, -10], [-1, 23], [4, 9]], [[352, 6718], [-8, -21], [-2, 14], [3, 19], [7, -12]], [[335, 7902], [6, 7], [2, -14], [5, 3], [6, -12], [1, -54], [-3, -18], [-7, -11], [-2, -18], [-11, 20], [-5, -1], [-10, 28], [-4, 0], [-6, 15], [-3, 25], [4, 7], [10, -7], [5, 20], [5, 2], [3, 14], [4, -6]], [[334, 6690], [5, -14], [-10, -36], [1, -6], [12, 26], [0, -15], [-5, -17], [-8, -12], [-1, -18], [-8, -18], [-7, -1], [-5, -18], [-9, -16], [-5, 17], [9, 20], [3, -3], [8, 16], [-2, 19], [4, 20], [6, -9], [1, 12], [-7, 4], [-4, 14], [4, 23], [11, 13], [2, -26], [5, 25]], [[266, 6527], [10, 37], [1, 16], [4, 17], [7, 9], [3, -10], [1, -25], [-12, -27], [-6, -40], [-6, -13], [-2, 36]], [[238, 6477], [2, -19], [-8, -1], [-1, 13], [7, 7]], [[227, 7303], [-4, -18], [-1, 18], [5, 0]], [[212, 6440], [2, -18], [-5, -13], [-1, 19], [4, 12]], [[182, 8542], [22, -28], [13, 24], [6, -2], [5, -14], [2, -23], [11, -12], [4, -12], [15, -5], [8, -8], [-4, -28], [-7, 6], [-8, -5], [-4, -13], [-4, -28], [-5, 26], [-6, 18], [-6, 2], [-3, 20], [-15, 25], [-6, 1], [-11, -22], [-7, 11], [-4, 23], [4, 44]], [[162, 6381], [0, -22], [-5, -4], [1, 19], [4, 7]], [[128, 6335], [4, -8], [10, 1], [1, -7], [-13, -9], [-2, 23]], [[108, 6360], [0, 19], [4, 7], [6, -19], [-2, -17], [-4, 1], [1, -20], [-5, -2], [-12, -21], [-6, 6], [2, 15], [7, -2], [9, 33]], [[47, 6279], [5, 3], [0, -24], [-6, 3], [-8, -28], [-4, 37], [4, 1], [0, 29], [5, 1], [0, -21], [4, -1]], [[28, 6296], [3, -9], [-2, -32], [-5, -10], [0, 20], [4, 31]], [[0, 6291], [5, -1], [4, -23], [-4, -27], [-5, 51]], [[9993, 6496], [6, -13], [0, -19], [-11, -12], [-8, 31], [0, 15], [13, -2]], [[1966, 3444], [-1, -1081]], [[1965, 2363], [-57, 0], [-34, 71], [-73, 150], [3, 43]], [[1804, 2627], [6, 8], [1, 16], [-1, 36], [-4, 1], [-2, 71], [6, 27], [0, 28], [-1, 45], [4, 34], [4, 12], [4, 25], [-6, 27], [-4, 51], [-5, 31], [0, 24]], [[1806, 3063], [2, 26], [0, 36], [-3, 36], [-2, 112], [11, 7], [3, -23], [3, 1], [3, 33], [0, 153]], [[1823, 3444], [101, 2], [42, -2]], [[2515, 3253], [-1, -35], [-4, -11], [-1, -29], [-5, -31], [0, -46], [-3, -34], [-3, -5]], [[2498, 3062], [2, -17], [-4, -14], [-2, -33], [-3, -8], [0, -38], [-5, -10], [0, -13], [-6, -31], [2, -21], [-5, -30], [-5, -59], [5, -25], [-2, -16], [1, -39], [-2, -26]], [[2474, 2682], [-69, 3], [-13, 0]], [[2392, 2685], [0, 101], [-4, 8], [-5, -9], [-3, 18]], [[2380, 2803], [1, 335], [-5, 211]], [[2376, 3349], [4, 0], [123, -1], [2, -36], [-4, -23], [-4, -36], [18, 0]], [[1654, 4398], [0, -331], [0, -241], [36, -171], [35, -169], [27, -137], [20, -101], [34, -185]], [[1804, 2627], [-38, -18], [-30, -16], [-4, 25], [0, 40], [-2, 47], [-4, 33], [-9, 46], [-12, 43], [-2, -12], [-4, 8], [1, 18], [-5, 39], [-7, -8], [-12, 28], [-2, 23], [-8, 28], [-9, -1], [-7, 13], [-10, -6], [-5, 26], [1, 53], [-1, 8], [1, 38], [-8, 28], [0, 39], [-3, 2], [-4, 33], [-4, 8], [-1, 20], [-11, 79], [-5, 23], [-1, 61], [2, -5], [2, 37], [-4, 33], [-5, -4], [-7, 30], [-2, 24], [0, 23], [-3, 31], [0, 50], [5, 0], [-2, 70], [-2, -7], [-1, -35], [-5, -7], [-7, 26], [-1, 45], [-4, 35], [-6, 22], [-3, 25], [-9, 50], [2, 14], [-4, 64], [2, 35], [-3, 54], [-7, 52], [-7, 29], [-2, 35], [7, 83], [2, 29], [-2, 22], [3, 57], [-2, 52], [-3, 13], [1, 42]], [[1534, 4399], [28, 1], [24, 1], [38, -3], [30, 0]], [[2107, 4208], [57, 0], [0, -191]], [[2164, 4017], [1, -574]], [[2165, 3443], [-28, 1]], [[2137, 3444], [-38, -1], [-72, 0], [-15, 1], [-46, 0]], [[1966, 3444], [0, 223], [-1, 21], [0, 162], [0, 357]], [[1965, 4207], [32, 1], [63, -1], [47, 1]], [[3025, 4400], [0, -113], [-2, -18]], [[3023, 4269], [-2, 3], [-12, -14], [-15, 4], [-7, -26], [-7, -9], [-8, -22]], [[2972, 4205], [-2, 22], [7, 21], [-2, 16], [2, 144]], [[2977, 4408], [12, -2], [36, -3], [0, -3]], [[2922, 3980], [-2, -23]], [[2920, 3957], [-3, -13], [0, -30], [5, -29], [1, -47], [6, -49], [3, -2], [1, -66]], [[2933, 3721], [-19, 2], [-2, 241]], [[2912, 3964], [5, 21], [5, -5]], [[2876, 3786], [-2, 27]], [[2874, 3813], [2, 12], [4, -19], [-4, -20]], [[2649, 2300], [4, -55], [39, -13], [37, -14], [1, -41], [4, 1], [1, 39], [-1, 35], [2, 15], [7, -16], [8, -7]], [[2751, 2244], [1, -83], [4, -93], [8, -122], [13, -131], [-2, -9], [1, -61], [5, -68], [8, -137], [2, -42], [0, -44], [-3, -158], [-3, -3], [-3, -49], [1, -16], [-5, -36], [-2, 9], [-6, -15], [-9, -8], [-2, 20], [1, 29], [-7, 85], [-5, 15], [-4, -11], [-3, 47], [-1, 38], [-6, 43], [-2, 28], [1, 41], [-3, 8], [1, -24], [-3, -7], [-9, 104], [-4, 26], [9, 76], [-6, -4], [-4, -24], [-3, 38], [5, 104], [1, 87], [-4, 21], [-1, 28], [-5, 6], [-7, 46], [-5, 19], [0, 28], [-4, 11], [-3, 31], [-11, 42], [-9, -10], [0, -29], [-3, 5], [-12, -35], [-12, -9], [0, 21], [-3, 25], [-15, 57], [-10, 24], [-10, 6], [-8, -4], [-17, -18]], [[2703, 3063], [-6, -41], [0, -20], [9, -40], [3, 3], [5, -42], [1, -22], [4, -40], [7, -24], [3, -35], [8, -33], [0, -22], [5, -35], [7, -29], [2, -32], [1, -40], [3, -14], [5, -51], [0, -33], [7, -16]], [[2767, 2497], [-7, -65], [-2, -34], [-3, -29], [0, -30], [-3, -14], [-1, -81]], [[2632, 3060], [37, 1]], [[2669, 3061], [20, -1], [14, 3]], [[640, 0], [-7, 17], [-1, 16], [1, 43], [-5, 73], [4, 24], [2, 34], [-2, 22], [1, 23], [8, -27], [9, -20], [5, -29], [0, -26], [8, -40], [-5, -34], [-8, -15], [-7, -25], [-3, -36]], [[613, 397], [3, -26], [4, 11], [9, -30], [-1, -27], [-9, -14], [-2, 6], [-1, 33], [-5, 7], [-1, 19], [3, 21]], [[602, 432], [-3, -20], [-7, 0], [2, 22], [8, -2]], [[574, 525], [3, -45], [-2, -26], [-6, -5], [-4, 54], [4, 1], [5, 21]], [[531, 626], [3, -2], [2, -20], [-1, -28], [-4, -18], [-9, 22], [1, 31], [8, 15]], [[1908, 4871], [0, -472]], [[1908, 4399], [-31, -1], [-54, 0]], [[1823, 4398], [-85, 1]], [[1738, 4399], [0, 349], [4, 62], [-2, 16], [-6, 3], [-2, 26], [6, 68], [3, 6], [3, 29], [-1, 17], [4, 23], [1, 34], [6, 56], [-2, 26], [-7, 14], [-4, 32]], [[1741, 5160], [0, 34], [-3, 33], [0, 16], [0, 255], [0, 236]], [[1738, 5734], [28, 0]], [[1766, 5734], [0, -195], [9, -54], [1, -52], [5, -23], [6, -8], [0, -14], [11, -51], [1, -21], [8, -20], [0, -12], [8, 1], [-4, -71], [-1, -45], [3, -29], [-5, -21], [2, -20], [-1, -21], [6, -20], [7, 26], [3, 21], [5, -19], [-1, -15], [3, -37], [5, -39], [3, -13], [0, -37], [3, -16], [6, -2], [4, -61], [3, -11], [3, 18], [9, -1], [7, 17], [3, -10], [7, 9], [2, -11], [5, 8], [7, 39], [4, -33], [5, -20]], [[2489, 4496], [53, -3], [28, 0]], [[2570, 4493], [-1, -37], [4, -43], [5, -70]], [[2578, 4343], [0, -450], [-3, -35], [3, -40], [1, -34], [-4, -27], [-1, -25], [-5, -41], [-3, -3], [0, -24], [-2, -9], [-1, -45], [0, -13]], [[2563, 3597], [-3, -27], [2, -34], [-11, -17], [-1, -20], [2, -25], [-3, -16], [-11, 29], [-3, -2], [-4, -33], [1, -11]], [[2532, 3441], [-5, 2], [-6, 55], [2, 12], [-2, 37], [0, 29], [-9, 41], [-3, -4], [-3, 25], [-9, 38], [0, 31], [5, 49], [-1, 18], [3, 23], [-4, 13], [-6, 9], [-3, -18], [-3, 11], [-1, 63], [-10, 41], [-9, 49], [-3, 58], [-1, 39], [3, 27]], [[2467, 4089], [0, 35], [8, 21], [1, 29], [4, 19], [0, 33], [-4, 27], [2, 34], [11, 9], [9, 24], [0, 29], [4, 13], [1, 37], [0, 24], [-7, 18], [-1, 20], [-6, 35]], [[2655, 4340], [0, -228], [0, -266]], [[2655, 3846], [-2, -9], [2, -52], [-5, -1], [-5, -18], [-8, 9], [1, -38], [-5, -16], [-2, -24], [-5, -9], [-3, -48], [-3, -13], [-6, 18], [-1, 22], [-7, -24], [1, -21], [-7, -7], [-1, 19], [-8, -19], [-2, -20], [-7, 28], [-4, -6], [-2, 13], [-3, -13], [-7, -2], [-3, -18]], [[2578, 4343], [3, -12], [8, 0], [9, 22]], [[2598, 4353], [23, 0], [34, 0], [0, -13]], [[2473, 4685], [0, -28], [4, -19], [-3, -23], [1, -43], [2, -30], [10, -22], [2, -24]], [[2467, 4089], [-3, 7], [-6, 38], [-3, -1], [-40, -5], [-39, -2], [-33, 3]], [[2343, 4129], [-3, 25], [2, 49], [-3, 43], [0, 48], [-5, 17], [-1, 26], [2, 23], [-2, 33], [-4, 13], [-5, 86]], [[2324, 4492], [-5, 41], [2, 29], [1, 37], [2, 14], [-3, 19], [1, 33], [-2, 16], [4, 4]], [[2324, 4685], [144, 0], [5, 0]], [[2356, 4017], [3, -18], [9, -14], [-6, -56], [4, -18], [4, -45], [6, -10], [0, -412]], [[2376, 3444], [-156, 0], [-55, -1]], [[2164, 4017], [5, 0], [187, 0]], [[2718, 3716], [-1, -57], [4, -37], [4, -28], [2, -22], [5, -22], [4, -3]], [[2736, 3547], [-11, -51], [-11, -29], [0, -14], [-4, -13], [0, -16], [-6, -8], [-1, -21], [-16, -27]], [[2687, 3368], [0, -3], [-24, 2], [-22, 6], [-5, -2], [-32, 8], [-36, -5], [-6, 9], [1, -35], [-36, 2], [-3, -2]], [[2524, 3348], [1, 24], [5, -8], [2, 77]], [[2655, 3846], [11, 0], [5, -40], [1, -17], [9, -7], [6, -26], [5, 13], [10, -14], [4, 19], [4, 6], [1, -32], [3, -6], [4, -26]], [[2474, 2682], [3, -22], [-2, -9], [-1, -38], [5, -24], [0, -57], [-3, -44], [-7, -27], [-2, -43], [-2, 4], [-1, -70], [-3, -2], [2, -37], [-2, -14], [54, 0], [-3, -63], [4, -41], [1, -32], [4, -20]], [[2521, 2143], [-9, -26], [0, -19], [7, -12], [3, 30], [6, -30], [-1, -24], [-3, -11], [-7, 10], [1, -18], [-2, -27], [5, -24], [9, -7], [3, -29], [3, -4], [-5, -32], [-5, 6], [-4, 33], [-10, 18], [0, 33], [-6, -11], [1, -27], [-3, -25], [-3, -4], [-3, 28], [-7, 1], [-2, -29], [-4, -9], [-5, 18], [-4, 2], [-3, 47], [-7, 21], [-2, -3], [-3, 40], [-7, -5], [0, 24], [-8, -23], [1, -18], [-5, -17], [-9, 8], [-10, 27], [-7, 11], [-16, -9], [-2, -8]], [[2398, 2049], [-2, 19], [6, 68], [-2, 37], [2, 20], [-1, 26], [3, 19], [3, 50], [0, 40], [-8, 78], [0, 41], [-7, 42], [0, 196]], [[3046, 5029], [12, 26], [-2, 13], [5, 30], [4, 13], [-1, 12], [5, 18], [-1, 33], [2, 50], [5, 17], [1, 53], [22, 147], [6, -7], [0, -35], [4, -13], [9, 21], [6, 0], [4, 14], [8, -31], [4, -25], [1, -214], [-1, -51], [10, -14], [-2, -22], [3, -21], [-2, -18], [4, -30], [5, 7], [5, -68], [-6, -31], [-3, 12], [-3, -21], [-4, 5], [0, -18], [-6, 2], [-8, -40], [-2, 28], [-3, 2], [1, -30], [-6, -15], [-2, 24], [-3, -12], [-7, 0], [0, 28], [-5, -6], [1, -20], [-4, -42], [1, -12], [-6, -23], [-5, 9], [-3, -24], [-4, -3], [-4, -20], [-4, 4], [-1, 21], [-7, -34], [2, -21], [-5, -7], [0, -18], [-5, -22], [-5, -50]], [[3056, 4600], [-3, 14], [0, 19], [-4, 22], [-2, 250], [-1, 124]], [[2904, 3626], [2, 0], [-1, 0], [-1, 0]], [[2933, 3721], [-6, -80]], [[2927, 3641], [-4, -3], [-8, -12]], [[2915, 3626], [-6, -8], [0, 31], [-2, 13], [3, 13], [-4, 32], [-2, -14], [-6, 3], [-2, 35], [2, 0], [0, 45], [2, 18], [-2, 60], [3, 36], [5, 6], [0, 37], [-3, -5], [0, -18], [-8, -25], [-2, -21], [0, -56], [-3, -26], [1, -44], [4, -30], [-1, -23], [3, -23], [-2, -16], [-6, 30], [-10, 15], [-2, 29], [-6, -16], [-2, 23], [5, 29]], [[2874, 3756], [2, 30]], [[2874, 3813], [-4, 18], [-6, 10], [0, 28], [-3, 15], [-4, 4]], [[2857, 3888], [-4, 53], [-4, 0], [-5, 18], [-3, -15], [-5, 1], [-1, -21], [-8, 14], [-6, -28], [-3, 6], [-6, -33], [-6, -17], [1, 98]], [[2807, 3964], [105, 0]], [[3053, 4565], [1, -34], [-1, -27], [-5, -25], [0, -29], [6, -4], [4, -31], [0, -24], [3, -6], [0, -22], [8, -19], [9, 18], [-2, -26], [-13, -23], [-5, -1], [-3, 18], [-5, -6], [0, -13], [-5, -9]], [[3045, 4302], [-3, 35]], [[3042, 4337], [0, 6]], [[3042, 4343], [-3, 14], [-2, 45], [-4, 0], [-8, -2]], [[2977, 4408], [0, 7], [6, 126]], [[2983, 4541], [23, -3]], [[3006, 4538], [34, -7], [3, 18], [7, 19], [3, -3]], [[2598, 4353], [5, 25], [4, 43], [4, 26], [3, 36], [1, 52], [0, 57], [-9, 111], [3, 42], [-2, 50], [6, 51], [2, 43], [-1, 23], [5, 9], [0, 31], [8, 9], [5, 34], [0, -69], [3, -3], [3, 35], [1, 58], [2, 15], [8, 9], [-3, 41], [5, 35], [7, 2], [7, -22], [7, -3], [3, -28], [6, -2], [9, -25], [3, 1], [4, -41], [-3, -21], [3, -29], [2, -32], [-2, -71], [-6, -18], [-1, -37], [-7, -12], [-4, -44], [2, -17], [6, -15], [6, 24], [6, 49], [10, 19], [5, -15], [3, -27], [3, -80], [0, -39], [3, -48], [-3, -69], [-4, -11], [-1, 25], [-3, -7], [-3, -58], [-6, -21], [-2, -44], [-7, -37], [0, -16]], [[2694, 4347], [-39, -7]], [[2635, 5110], [1, -23], [-4, -4], [1, 33], [2, -6]], [[2496, 5270], [11, 20], [5, 23], [12, 9], [8, 29], [4, 1], [3, 20], [9, 28], [4, 24], [7, 15], [6, -13], [-11, -59], [-2, -19], [0, -36], [5, 27], [10, -4], [8, -19], [7, -52], [3, -10], [7, 9], [2, -12], [7, -6], [16, 44], [8, 4], [10, -2], [7, 15], [6, 1], [1, -54], [5, -7], [6, 8], [2, -12], [4, 16], [8, 5], [1, -67], [3, -28], [6, -8], [1, 19], [5, 0], [3, -20], [-3, -14], [-15, 12], [-8, -8], [-8, 23], [-2, -21], [1, -18], [-4, 4], [-5, 27], [-9, 15], [-5, 1], [-4, -25], [-8, -6], [-8, 5], [-3, -10], [-1, -21], [-9, -18], [1, 25], [-4, 5], [-2, -26], [-6, -1], [-3, -11], [-5, -45], [-8, -58], [1, -5]], [[2576, 4989], [-4, 20], [2, 27], [-7, 4], [3, 26], [0, 34], [-5, 23], [-4, 24], [-12, 19], [-4, -7], [-12, 29], [-29, 38], [-3, 33], [-5, 11]], [[2541, 5539], [-7, -24], [-4, -3], [1, 19], [18, 45], [-4, -31], [-4, -6]], [[2324, 4685], [0, 343], [-7, 22], [-5, 36], [8, 41], [1, 22]], [[2321, 5149], [-1, 76], [-4, 20], [-2, 42], [0, 51], [-1, 8], [-1, 123], [-5, 65], [-3, 36], [0, 77], [1, 27], [-3, 60]], [[2302, 5734], [59, 0], [0, 73], [5, -2], [4, -14], [4, -100], [3, -11], [9, -3], [1, -10], [11, -4], [1, -21], [10, 5], [0, 9], [7, 10], [6, -4], [8, -16], [2, -19], [4, 2], [4, -43], [2, 18], [7, 8], [1, -18], [9, -12], [0, -17], [4, -14], [8, 8], [5, 18], [8, 12], [2, -28], [5, 6], [6, -6], [6, 4], [8, -24], [7, 4], [0, -10], [-10, -24], [-13, -19], [-9, -20], [-12, -49], [-5, -31], [-8, -34], [-13, -46], [2, -16]], [[2450, 5296], [-2, 9], [-6, -16], [0, -113], [-2, -11], [-8, -16], [-6, -41], [-1, -27], [3, -2], [4, -24], [-3, -29], [0, -33], [-2, -70], [8, -34], [6, -3], [3, -21], [8, -21], [2, -25], [8, -33], [5, -7], [5, -42], [-1, -30], [2, -22]], [[2553, 2179], [-3, -8], [-7, 4], [-3, 12], [-7, -8], [-9, -22], [-3, -14]], [[2498, 3062], [53, 0], [7, 0]], [[2524, 3348], [-2, 0], [-2, 0], [1, -47], [-6, -48]], [[2376, 3349], [0, 95]], [[2356, 4017], [-7, 50], [-6, 62]], [[2108, 5151], [0, -181], [-1, 0]], [[2107, 4970], [-53, 1], [-90, 0], [-56, 0], [0, -100]], [[1766, 5734], [130, -1], [58, 1], [154, 0]], [[2108, 5734], [0, -217], [0, -366]], [[2107, 4208], [0, 382]], [[2107, 4590], [21, 0], [49, -1], [88, 0], [1, -10], [15, -34], [4, 19], [4, -4], [13, 0], [15, -36], [2, -27], [5, -5]], [[1823, 4398], [0, -954]], [[1654, 4398], [37, -1], [47, 2]], [[3006, 4538], [-2, 14], [0, 28], [3, 11], [-1, 27], [3, 81], [5, 37], [2, 43], [3, 16], [-1, 47], [10, 17], [5, 33], [-3, 31], [4, 32], [0, 18]], [[3034, 4973], [4, 49], [6, -5], [2, 12]], [[3056, 4600], [-3, -35]], [[2962, 4152], [-5, -13], [-2, -29], [8, -14], [0, -22], [-3, -103], [-9, -76], [-6, -22], [-5, -48], [-3, 31], [-8, 16], [-10, 42], [-1, 28], [0, 4], [2, 11]], [[2922, 3980], [8, 15], [0, 15], [9, 31], [2, 17], [-9, 39], [0, 24], [-3, 6], [-1, 22], [5, 33], [-3, 20], [7, 40], [2, 21], [4, 13]], [[2943, 4276], [13, -41], [9, -28], [-3, -55]], [[2137, 3444], [0, -95]], [[2137, 3349], [-1, 0], [0, -474], [0, -193], [0, -192], [-101, 0], [-1, -18], [3, -22]], [[2037, 2450], [-48, 0], [0, -87], [-24, 0]], [[2972, 4205], [13, -15], [2, 11], [10, 0], [6, 6], [8, 31], [1, -22], [5, -10], [-11, -28], [-22, -42], [-9, -8], [-6, 2], [-5, -9], [-2, 31]], [[2943, 4276], [-2, 14], [-4, 1], [-5, 32], [1, 29], [-4, 22], [-2, -2], [-3, 27], [-125, 0], [0, 48], [0, 3]], [[2799, 4450], [17, 54], [3, 26], [5, 18], [-2, 32], [-2, 7], [-2, 52], [17, 22], [15, -1], [6, -5], [6, -21], [4, 8], [12, -1], [8, 14], [8, 34], [5, 1], [0, 52], [3, 31], [-7, 21], [2, 24], [11, 32], [4, 28], [14, 64], [13, 32], [19, -5], [23, 4]], [[2981, 4973], [1, -39], [-2, -36], [3, -34], [-1, -37], [-3, -39], [2, -52], [-1, -16], [4, -31], [-1, -132], [0, -16]], [[2909, 3359], [4, -77], [-8, 8], [-1, -10], [-10, -11], [-1, -11], [-7, -3], [0, -13], [8, 9], [1, -8], [9, 9], [3, -18], [5, 8], [2, -46], [-2, -22], [-3, -2], [-8, -47], [-9, -2], [-2, -33], [4, -32], [4, -6], [-6, -54], [-6, 7], [-9, -6], [-6, -11], [-10, -37], [-7, -48], [-4, -60], [-6, 13], [-11, -12]], [[2833, 2844], [-32, 181], [-32, 4], [1, 21], [-5, 33], [-3, -12], [0, 20], [-35, 10], [-8, -8], [-6, -17], [-10, -13]], [[2669, 3061], [1, 45], [5, 4], [3, 31], [7, 29], [7, 1], [7, 29], [8, 10], [6, 43], [4, 13], [1, -19], [11, 37], [5, -8], [4, 36], [5, 9], [1, 45]], [[2744, 3366], [20, -5], [19, -3], [23, -1], [103, 2]], [[2321, 5149], [-213, 2]], [[2108, 5734], [194, 0]], [[2777, 4138], [-4, -10], [2, -21], [0, -29], [-4, -46], [-3, -70], [-11, -62], [-3, -8], [-4, 12], [-3, -27], [-3, 1], [-4, -36], [1, -22], [-3, -18], [-4, 29], [-5, -46], [1, -29], [-3, -11], [-1, -25], [-8, -4]], [[2694, 4347], [11, -26], [3, -15], [3, 14], [6, -30], [4, -9], [14, 25], [7, -6], [9, 36], [12, 34], [14, 24]], [[2777, 4394], [0, -256]], [[2380, 2803], [-11, 21], [-3, 22], [-7, 18], [-2, -16], [-8, 1], [-1, 10], [-7, -19], [-3, 11], [-6, -10], [-5, -29], [-2, 17], [-6, 14], [-7, 0], [-2, 21], [-7, -42], [-2, 24], [-3, -8], [-3, 16], [-7, 15], [-5, -25], [-2, 26], [-4, 3], [-2, 21], [-6, 8], [-3, -18], [-3, 16], [-5, -2], [-6, 17], [-6, -2], [-2, 36], [-9, 2], [-4, -6], [-6, 37], [-2, -3], [0, 370], [-52, 0], [-34, 0]], [[1534, 4399], [-4, 22], [-2, 61], [0, 43], [-4, 33], [3, 32], [2, 51], [4, 54], [2, 48], [3, 162], [0, 22], [3, 71], [1, 99], [-2, 54], [1, 32], [12, 29]], [[1553, 5212], [5, -22], [4, 5], [3, 2], [6, -20], [3, -23], [1, -57], [15, -21], [12, 30], [8, 3], [9, -10], [1, -13], [16, 27], [3, -9], [9, 5], [7, 19], [12, 17], [12, 4], [4, 12], [58, -1]], [[2807, 3964], [-30, 0], [0, 174]], [[2777, 4394], [5, 11], [17, 45]], [[3045, 4302], [-6, -4], [3, 39]], [[3042, 4343], [-4, 3], [-3, -28], [-1, -40], [-11, -9]], [[2833, 2844], [-5, -10], [-6, -31], [-6, -49], [-1, -40], [-5, -31], [-6, 0], [-2, -23], [-6, -25], [-4, -28], [-6, -11], [-6, -29], [-1, -14], [-6, -16], [-6, -40]], [[2107, 4590], [0, 380]], [[2687, 3368], [57, -2]], [[2398, 2049], [-5, -1], [-14, -26], [-6, 15], [-1, 31], [-3, -22], [-3, 5], [-1, -27], [3, -11], [0, -36], [-5, -37], [-9, -47], [-17, -51], [-2, 9], [-5, -13], [0, 12], [-7, -9], [-3, 24], [-2, -5], [7, -49], [-5, -16], [-5, 10], [-1, -35], [-7, -35], [-6, -66], [-4, -69], [-3, 5], [-1, -25], [3, 6], [-2, -50], [-2, -2], [0, -28], [3, -16], [1, -57], [3, -20], [0, -37], [3, -32], [-9, -20], [-3, 25], [-7, 10], [-9, -3], [-8, 32], [-5, 3], [-5, 25], [-6, 8], [-4, 24], [-2, 58], [-5, 34], [0, 30], [-2, 31], [1, 27], [-4, 30], [-3, 4], [-5, 27], [-1, 34], [-5, 32], [-6, 26], [-3, 57], [-2, 16], [-4, 46], [-1, 38], [-4, 27], [-6, 24], [-1, 16], [-6, 15], [-4, 42], [-13, 9], [-7, -2], [-7, 15], [-1, -20], [-7, -6], [-5, -40], [-3, -64], [-2, -1], [-4, -37], [-5, -1], [-7, 29], [-17, 47], [-4, 25], [-6, 24], [-5, 54], [-1, 49], [-4, 40], [-2, 35], [-3, 22], [-11, 32], [-6, 44], [-4, 15], [-6, 38], [-7, 20], [-5, 50], [-4, 11]], [[1908, 4399], [0, -192], [57, 0]], [[2981, 4973], [30, -2], [23, 2]], [[2927, 3641], [-4, -32], [-3, -12], [-3, -44], [-6, -71], [-5, -15], [-1, 27], [2, 58], [8, 74]], [[2874, 3756], [-4, -8], [-2, -28], [1, -19], [8, 6], [1, -31], [10, -12], [3, -24], [8, -26], [-4, -54], [4, -41], [-4, -20], [-1, -24], [4, -15], [-4, -23], [-6, 30], [-1, -10], [5, -22], [14, -5], [3, -71]], [[2736, 3547], [-1, -16], [4, -32], [5, -16], [4, 1], [5, 25], [4, -20], [7, 11], [13, 36], [1, -11], [5, 17], [0, 34], [4, 30], [5, 29], [2, 34], [6, 36], [2, 44], [5, -27], [4, -8], [3, 16], [6, 68], [4, -17], [13, 77], [2, 57], [15, -64], [3, 37]], [[1553, 5212], [-5, 7], [-4, -12], [-6, 17], [1, 26], [4, 14], [-6, 40], [-4, 103], [-2, 14], [-3, 73], [-6, 28], [-2, 56], [3, 38], [6, -18], [11, -24], [8, 1], [8, -9], [8, 9], [3, -16], [7, 1], [5, -42], [3, 3], [1, -56], [2, -52], [3, 6], [-3, 43], [1, 43], [4, 44], [-3, 18], [-1, 31], [-3, 35], [2, 25], [-2, 29], [-5, 4], [-4, 22], [1, 21], [163, 0]], [[1576, 5602], [4, 9], [0, -39], [-5, 15], [1, 15]], [[1568, 5655], [3, 25], [4, -30], [-1, -27], [-7, 8], [1, 24]], [[2576, 4989], [-1, -23], [-6, -4], [-4, -44], [-2, -30], [3, -6], [5, 20], [4, 38], [6, 15], [5, 48], [6, 10], [-1, -25], [-4, -23], [-8, -79], [-2, -44], [0, -32], [-3, -10], [-2, -43], [1, -37], [-3, -24], [-3, -59], [0, -47], [4, -42], [-1, -55]], [[2450, 5296], [6, -2], [20, 33], [8, 17], [2, -13], [-4, -25], [9, -33], [5, -3]]]
            },Datamap.prototype.usgTopo = "__USG__",Datamap.prototype.uzbTopo = "__UZB__",Datamap.prototype.vatTopo = "__VAT__",Datamap.prototype.vctTopo = "__VCT__",Datamap.prototype.venTopo = "__VEN__",Datamap.prototype.vgbTopo = "__VGB__",Datamap.prototype.virTopo = "__VIR__",Datamap.prototype.vnmTopo = "__VNM__",Datamap.prototype.vutTopo = "__VUT__",Datamap.prototype.wlfTopo = "__WLF__",Datamap.prototype.wsbTopo = "__WSB__",Datamap.prototype.wsmTopo = "__WSM__",Datamap.prototype.yemTopo = "__YEM__",Datamap.prototype.zafTopo = "__ZAF__",Datamap.prototype.zmbTopo = "__ZMB__",Datamap.prototype.zweTopo = "__ZWE__",Datamap.prototype.latLngToXY = function (t, e) {
                return this.projection([e, t])
            },Datamap.prototype.addLayer = function (t, e, n) {
                return (n ? this.svg.insert("g", ":first-child") : this.svg.append("g")).attr("id", e || "").attr("class", t || "")
            },Datamap.prototype.updateChoropleth = function (t, e) {
                var n = this.svg;
                for (var r in e && !0 === e.reset && n.selectAll(".datamaps-subunit").attr("data-info", function () {
                    return "{}"
                }).transition().style("fill", this.options.fills.defaultFill), t) if (t.hasOwnProperty(r)) {
                    var o, a = t[r];
                    if (!r) continue;
                    if (o = "string" == typeof a ? a : "string" == typeof a.color ? a.color : "string" == typeof a.fillColor ? a.fillColor : this.options.fills[a.fillKey], a === Object(a)) {
                        this.options.data[r] = defaults(a, this.options.data[r] || {});
                        this.svg.select("." + r).attr("data-info", JSON.stringify(this.options.data[r]))
                    }
                    n.selectAll("." + r).transition().style("fill", o)
                }
            },Datamap.prototype.updatePopup = function (e, n, r) {
                var o = this;
                e.on("mousemove", null), e.on("mousemove", function () {
                    var t = c.mouse(o.options.element);
                    c.select(o.svg[0][0].parentNode).select(".datamaps-hoverover").style("top", t[1] + 30 + "px").html(function () {
                        var t = JSON.parse(e.attr("data-info"));
                        try {
                            return r.popupTemplate(n, t)
                        } catch (t) {
                            return ""
                        }
                    }).style("left", t[0] + "px")
                }), c.select(o.svg[0][0].parentNode).select(".datamaps-hoverover").style("display", "block")
            },Datamap.prototype.addPlugin = function (a, i) {
                var l = this;
                void 0 === Datamap.prototype[a] && (Datamap.prototype[a] = function (t, e, n, r) {
                    var o;
                    void 0 === r && (r = !1), "function" == typeof e && (n = e, e = void 0), e = defaults(e || {}, l.options[a + "Config"]), !r && this.options[a + "Layer"] ? (o = this.options[a + "Layer"], e = e || this.options[a + "Options"]) : (o = this.addLayer(a), this.options[a + "Layer"] = o, this.options[a + "Options"] = e), i.apply(this, [o, t, e]), n && n(o)
                })
            },c = n(297),i = n(298),t.exports = Datamap,window.jQuery && (window.jQuery.fn.datamaps = function (t, e) {
                (t = t || {}).element = this[0];
                var n = new Datamap(t);
                return "function" == typeof e && e(n, t), this
            })
        }()
    }, 296: function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0), o = n.n(r), a = n(153), i = n.n(a);
        o()(function () {
            var t = document.getElementById("datamap-basic"), e = document.getElementById("datamap-arc");
            if (t && e) {
                var n = new i.a({
                    element: t,
                    scope: "usa",
                    responsive: !0,
                    options: {width: 1110, legendHeight: 60},
                    geographyConfig: {highlightFillColor: Colors.byName("info"), highlightBorderWidth: 0},
                    fills: {
                        HIGH: Colors.byName("info"),
                        MEDIUM: Colors.byName("info"),
                        LOW: Colors.byName("info"),
                        defaultFill: Colors.byName("gray-lighter")
                    },
                    data: {
                        AZ: {fillKey: "MEDIUM"},
                        CO: {fillKey: "HIGH"},
                        DE: {fillKey: "LOW"},
                        GA: {fillKey: "MEDIUM"}
                    }
                }), r = new i.a({
                    element: e,
                    scope: "usa",
                    responsive: !0,
                    fills: {defaultFill: Colors.byName("blue-500"), win: Colors.byName("blueGrey-700")},
                    geographyConfig: {
                        borderWidth: 0,
                        highlightFillColor: Colors.byName("blue-100"),
                        highlightBorderWidth: 0
                    },
                    data: {
                        TX: {fillKey: "win"},
                        FL: {fillKey: "win"},
                        NC: {fillKey: "win"},
                        CA: {fillKey: "win"},
                        NY: {fillKey: "win"},
                        CO: {fillKey: "win"}
                    }
                });
                r.arc([{origin: "CA", destination: "TX", options: {strokeWidth: 3, strokeColor: "#fff"}}, {
                    origin: "OR",
                    destination: "TX",
                    options: {strokeWidth: 3, strokeColor: "#fff"}
                }, {
                    origin: "NY",
                    destination: "TX",
                    options: {strokeWidth: 3, strokeColor: "#fff"}
                }]), o()(window).resize(function () {
                    r.resize(), n.resize()
                })
            }
        })
    }, 297: function (Ve, We, Ke) {
        var Xe, Ze;
        !function () {
            var L = {version: "3.5.17"}, a = [].slice, d = function (t) {
                return a.call(t)
            }, h = this.document;

            function d3_documentElement(t) {
                return t && (t.ownerDocument || t.document || t).documentElement
            }

            function d3_window(t) {
                return t && (t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView)
            }

            if (h) try {
                d(h.documentElement.childNodes)[0].nodeType
            } catch (t) {
                d = function (t) {
                    for (var e = t.length, n = new Array(e); e--;) n[e] = t[e];
                    return n
                }
            }
            if (Date.now || (Date.now = function () {
                return +new Date
            }), h) try {
                h.createElement("DIV").style.setProperty("opacity", 0, "")
            } catch (t) {
                var e = this.Element.prototype, n = e.setAttribute, r = e.setAttributeNS,
                    o = this.CSSStyleDeclaration.prototype, i = o.setProperty;
                e.setAttribute = function (t, e) {
                    n.call(this, t, e + "")
                }, e.setAttributeNS = function (t, e, n) {
                    r.call(this, t, e, n + "")
                }, o.setProperty = function (t, e, n) {
                    i.call(this, t, e + "", n)
                }
            }

            function d3_ascending(t, e) {
                return t < e ? -1 : e < t ? 1 : e <= t ? 0 : NaN
            }

            function d3_number(t) {
                return null === t ? NaN : +t
            }

            function d3_numeric(t) {
                return !isNaN(t)
            }

            function d3_bisector(a) {
                return {
                    left: function (t, e, n, r) {
                        for (arguments.length < 3 && (n = 0), arguments.length < 4 && (r = t.length); n < r;) {
                            var o = n + r >>> 1;
                            a(t[o], e) < 0 ? n = o + 1 : r = o
                        }
                        return n
                    }, right: function (t, e, n, r) {
                        for (arguments.length < 3 && (n = 0), arguments.length < 4 && (r = t.length); n < r;) {
                            var o = n + r >>> 1;
                            0 < a(t[o], e) ? r = o : n = o + 1
                        }
                        return n
                    }
                }
            }

            L.ascending = d3_ascending, L.descending = function (t, e) {
                return e < t ? -1 : t < e ? 1 : t <= e ? 0 : NaN
            }, L.min = function (t, e) {
                var n, r, o = -1, a = t.length;
                if (1 === arguments.length) {
                    for (; ++o < a;) if (null != (r = t[o]) && r <= r) {
                        n = r;
                        break
                    }
                    for (; ++o < a;) null != (r = t[o]) && r < n && (n = r)
                } else {
                    for (; ++o < a;) if (null != (r = e.call(t, t[o], o)) && r <= r) {
                        n = r;
                        break
                    }
                    for (; ++o < a;) null != (r = e.call(t, t[o], o)) && r < n && (n = r)
                }
                return n
            }, L.max = function (t, e) {
                var n, r, o = -1, a = t.length;
                if (1 === arguments.length) {
                    for (; ++o < a;) if (null != (r = t[o]) && r <= r) {
                        n = r;
                        break
                    }
                    for (; ++o < a;) null != (r = t[o]) && n < r && (n = r)
                } else {
                    for (; ++o < a;) if (null != (r = e.call(t, t[o], o)) && r <= r) {
                        n = r;
                        break
                    }
                    for (; ++o < a;) null != (r = e.call(t, t[o], o)) && n < r && (n = r)
                }
                return n
            }, L.extent = function (t, e) {
                var n, r, o, a = -1, i = t.length;
                if (1 === arguments.length) {
                    for (; ++a < i;) if (null != (r = t[a]) && r <= r) {
                        n = o = r;
                        break
                    }
                    for (; ++a < i;) null != (r = t[a]) && (r < n && (n = r), o < r && (o = r))
                } else {
                    for (; ++a < i;) if (null != (r = e.call(t, t[a], a)) && r <= r) {
                        n = o = r;
                        break
                    }
                    for (; ++a < i;) null != (r = e.call(t, t[a], a)) && (r < n && (n = r), o < r && (o = r))
                }
                return [n, o]
            }, L.sum = function (t, e) {
                var n, r = 0, o = t.length, a = -1;
                if (1 === arguments.length) for (; ++a < o;) d3_numeric(n = +t[a]) && (r += n); else for (; ++a < o;) d3_numeric(n = +e.call(t, t[a], a)) && (r += n);
                return r
            }, L.mean = function (t, e) {
                var n, r = 0, o = t.length, a = -1, i = o;
                if (1 === arguments.length) for (; ++a < o;) d3_numeric(n = d3_number(t[a])) ? r += n : --i; else for (; ++a < o;) d3_numeric(n = d3_number(e.call(t, t[a], a))) ? r += n : --i;
                if (i) return r / i
            }, L.quantile = function (t, e) {
                var n = (t.length - 1) * e + 1, r = Math.floor(n), o = +t[r - 1], a = n - r;
                return a ? o + a * (t[r] - o) : o
            }, L.median = function (t, e) {
                var n, r = [], o = t.length, a = -1;
                if (1 === arguments.length) for (; ++a < o;) d3_numeric(n = d3_number(t[a])) && r.push(n); else for (; ++a < o;) d3_numeric(n = d3_number(e.call(t, t[a], a))) && r.push(n);
                if (r.length) return L.quantile(r.sort(d3_ascending), .5)
            }, L.variance = function (t, e) {
                var n, r, o = t.length, a = 0, i = 0, l = -1, s = 0;
                if (1 === arguments.length) for (; ++l < o;) d3_numeric(n = d3_number(t[l])) && (i += (r = n - a) * (n - (a += r / ++s))); else for (; ++l < o;) d3_numeric(n = d3_number(e.call(t, t[l], l))) && (i += (r = n - a) * (n - (a += r / ++s)));
                if (1 < s) return i / (s - 1)
            }, L.deviation = function () {
                var t = L.variance.apply(this, arguments);
                return t ? Math.sqrt(t) : t
            };
            var t = d3_bisector(d3_ascending);

            function d3_transposeLength(t) {
                return t.length
            }

            L.bisectLeft = t.left, L.bisect = L.bisectRight = t.right, L.bisector = function (n) {
                return d3_bisector(1 === n.length ? function (t, e) {
                    return d3_ascending(n(t), e)
                } : n)
            }, L.shuffle = function (t, e, n) {
                (a = arguments.length) < 3 && (n = t.length, a < 2 && (e = 0));
                for (var r, o, a = n - e; a;) o = Math.random() * a-- | 0, r = t[a + e], t[a + e] = t[o + e], t[o + e] = r;
                return t
            }, L.permute = function (t, e) {
                for (var n = e.length, r = new Array(n); n--;) r[n] = t[e[n]];
                return r
            }, L.pairs = function (t) {
                for (var e = 0, n = t.length - 1, r = t[0], o = new Array(n < 0 ? 0 : n); e < n;) o[e] = [r, r = t[++e]];
                return o
            }, L.transpose = function (t) {
                if (!(o = t.length)) return [];
                for (var e = -1, n = L.min(t, d3_transposeLength), r = new Array(n); ++e < n;) for (var o, a = -1, i = r[e] = new Array(o); ++a < o;) i[a] = t[a][e];
                return r
            }, L.zip = function () {
                return L.transpose(arguments)
            }, L.keys = function (t) {
                var e = [];
                for (var n in t) e.push(n);
                return e
            }, L.values = function (t) {
                var e = [];
                for (var n in t) e.push(t[n]);
                return e
            }, L.entries = function (t) {
                var e = [];
                for (var n in t) e.push({key: n, value: t[n]});
                return e
            }, L.merge = function (t) {
                for (var e, n, r, o = t.length, a = -1, i = 0; ++a < o;) i += t[a].length;
                for (n = new Array(i); 0 <= --o;) for (e = (r = t[o]).length; 0 <= --e;) n[--i] = r[e];
                return n
            };
            var E = Math.abs;

            function d3_class(t, e) {
                for (var n in e) Object.defineProperty(t.prototype, n, {value: e[n], enumerable: !1})
            }

            function d3_Map() {
                this._ = Object.create(null)
            }

            L.range = function (t, e, n) {
                if (arguments.length < 3 && (n = 1, arguments.length < 2 && (e = t, t = 0)), (e - t) / n == 1 / 0) throw new Error("infinite range");
                var r, o = [], a = function (t) {
                    var e = 1;
                    for (; t * e % 1;) e *= 10;
                    return e
                }(E(n)), i = -1;
                if (t *= a, e *= a, (n *= a) < 0) for (; (r = t + n * ++i) > e;) o.push(r / a); else for (; (r = t + n * ++i) < e;) o.push(r / a);
                return o
            }, L.map = function (t, e) {
                var n = new d3_Map;
                if (t instanceof d3_Map) t.forEach(function (t, e) {
                    n.set(t, e)
                }); else if (Array.isArray(t)) {
                    var r, o = -1, a = t.length;
                    if (1 === arguments.length) for (; ++o < a;) n.set(o, t[o]); else for (; ++o < a;) n.set(e.call(t, r = t[o], o), r)
                } else for (var i in t) n.set(i, t[i]);
                return n
            };
            var l = "__proto__", s = "\0";

            function d3_map_escape(t) {
                return (t += "") === l || t[0] === s ? s + t : t
            }

            function d3_map_unescape(t) {
                return (t += "")[0] === s ? t.slice(1) : t
            }

            function d3_map_has(t) {
                return d3_map_escape(t) in this._
            }

            function d3_map_remove(t) {
                return (t = d3_map_escape(t)) in this._ && delete this._[t]
            }

            function d3_map_keys() {
                var t = [];
                for (var e in this._) t.push(d3_map_unescape(e));
                return t
            }

            function d3_map_size() {
                var t = 0;
                for (var e in this._) ++t;
                return t
            }

            function d3_map_empty() {
                for (var t in this._) return !1;
                return !0
            }

            function d3_Set() {
                this._ = Object.create(null)
            }

            function d3_identity(t) {
                return t
            }

            function d3_rebind(e, n, r) {
                return function () {
                    var t = r.apply(n, arguments);
                    return t === n ? e : t
                }
            }

            function d3_vendorSymbol(t, e) {
                if (e in t) return e;
                e = e.charAt(0).toUpperCase() + e.slice(1);
                for (var n = 0, r = u.length; n < r; ++n) {
                    var o = u[n] + e;
                    if (o in t) return o
                }
            }

            d3_class(d3_Map, {
                has: d3_map_has, get: function (t) {
                    return this._[d3_map_escape(t)]
                }, set: function (t, e) {
                    return this._[d3_map_escape(t)] = e
                }, remove: d3_map_remove, keys: d3_map_keys, values: function () {
                    var t = [];
                    for (var e in this._) t.push(this._[e]);
                    return t
                }, entries: function () {
                    var t = [];
                    for (var e in this._) t.push({key: d3_map_unescape(e), value: this._[e]});
                    return t
                }, size: d3_map_size, empty: d3_map_empty, forEach: function (t) {
                    for (var e in this._) t.call(this, d3_map_unescape(e), this._[e])
                }
            }), L.nest = function () {
                var p, d, _ = {}, f = [], e = [];

                function map(n, t, r) {
                    if (r >= f.length) return d ? d.call(_, t) : p ? t.sort(p) : t;
                    for (var e, o, a, i, l = -1, s = t.length, u = f[r++], c = new d3_Map; ++l < s;) (i = c.get(e = u(o = t[l]))) ? i.push(o) : c.set(e, [o]);
                    return a = n ? (o = n(), function (t, e) {
                        o.set(t, map(n, e, r))
                    }) : (o = {}, function (t, e) {
                        o[t] = map(n, e, r)
                    }), c.forEach(a), o
                }

                return _.map = function (t, e) {
                    return map(e, t, 0)
                }, _.entries = function (t) {
                    return function entries(t, n) {
                        if (n >= f.length) return t;
                        var r = [], o = e[n++];
                        return t.forEach(function (t, e) {
                            r.push({key: t, values: entries(e, n)})
                        }), o ? r.sort(function (t, e) {
                            return o(t.key, e.key)
                        }) : r
                    }(map(L.map, t, 0), 0)
                }, _.key = function (t) {
                    return f.push(t), _
                }, _.sortKeys = function (t) {
                    return e[f.length - 1] = t, _
                }, _.sortValues = function (t) {
                    return p = t, _
                }, _.rollup = function (t) {
                    return d = t, _
                }, _
            }, L.set = function (t) {
                var e = new d3_Set;
                if (t) for (var n = 0, r = t.length; n < r; ++n) e.add(t[n]);
                return e
            }, d3_class(d3_Set, {
                has: d3_map_has,
                add: function (t) {
                    return this._[d3_map_escape(t += "")] = !0, t
                },
                remove: d3_map_remove,
                values: d3_map_keys,
                size: d3_map_size,
                empty: d3_map_empty,
                forEach: function (t) {
                    for (var e in this._) t.call(this, d3_map_unescape(e))
                }
            }), L.behavior = {}, L.rebind = function (t, e) {
                for (var n, r = 1, o = arguments.length; ++r < o;) t[n = arguments[r]] = d3_rebind(t, e, e[n]);
                return t
            };
            var u = ["webkit", "ms", "moz", "Moz", "o", "O"];

            function d3_noop() {
            }

            function d3_dispatch() {
            }

            function d3_dispatch_event(o) {
                var a = [], i = new d3_Map;

                function event() {
                    for (var t, e = a, n = -1, r = e.length; ++n < r;) (t = e[n].on) && t.apply(this, arguments);
                    return o
                }

                return event.on = function (t, e) {
                    var n, r = i.get(t);
                    return arguments.length < 2 ? r && r.on : (r && (r.on = null, a = a.slice(0, n = a.indexOf(r)).concat(a.slice(n + 1)), i.remove(t)), e && a.push(i.set(t, {on: e})), o)
                }, event
            }

            function d3_eventPreventDefault() {
                L.event.preventDefault()
            }

            function d3_eventSource() {
                for (var t, e = L.event; t = e.sourceEvent;) e = t;
                return e
            }

            function d3_eventDispatch(o) {
                for (var a = new d3_dispatch, t = 0, e = arguments.length; ++t < e;) a[arguments[t]] = d3_dispatch_event(a);
                return a.of = function (n, r) {
                    return function (t) {
                        try {
                            var e = t.sourceEvent = L.event;
                            t.target = o, L.event = t, a[t.type].apply(n, r)
                        } finally {
                            L.event = e
                        }
                    }
                }, a
            }

            L.dispatch = function () {
                for (var t = new d3_dispatch, e = -1, n = arguments.length; ++e < n;) t[arguments[e]] = d3_dispatch_event(t);
                return t
            }, d3_dispatch.prototype.on = function (t, e) {
                var n = t.indexOf("."), r = "";
                if (0 <= n && (r = t.slice(n + 1), t = t.slice(0, n)), t) return arguments.length < 2 ? this[t].on(r) : this[t].on(r, e);
                if (2 === arguments.length) {
                    if (null == e) for (t in this) this.hasOwnProperty(t) && this[t].on(r, null);
                    return this
                }
            }, L.event = null, L.requote = function (t) {
                return t.replace(c, "\\$&")
            };
            var c = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g, p = {}.__proto__ ? function (t, e) {
                t.__proto__ = e
            } : function (t, e) {
                for (var n in e) t[n] = e[n]
            };

            function d3_selection(t) {
                return p(t, y), t
            }

            var _ = function (t, e) {
                return e.querySelector(t)
            }, f = function (t, e) {
                return e.querySelectorAll(t)
            }, g = function (t, e) {
                var n = t.matches || t[d3_vendorSymbol(t, "matchesSelector")];
                return (g = function (t, e) {
                    return n.call(t, e)
                })(t, e)
            };
            "function" == typeof Sizzle && (_ = function (t, e) {
                return Sizzle(t, e)[0] || null
            }, f = Sizzle, g = Sizzle.matchesSelector), L.selection = function () {
                return L.select(h.documentElement)
            };
            var y = L.selection.prototype = [];

            function d3_selection_selector(t) {
                return "function" == typeof t ? t : function () {
                    return _(t, this)
                }
            }

            function d3_selection_selectorAll(t) {
                return "function" == typeof t ? t : function () {
                    return f(t, this)
                }
            }

            y.select = function (t) {
                var e, n, r, o, a = [];
                t = d3_selection_selector(t);
                for (var i = -1, l = this.length; ++i < l;) {
                    a.push(e = []), e.parentNode = (r = this[i]).parentNode;
                    for (var s = -1, u = r.length; ++s < u;) (o = r[s]) ? (e.push(n = t.call(o, o.__data__, s, i)), n && "__data__" in o && (n.__data__ = o.__data__)) : e.push(null)
                }
                return d3_selection(a)
            }, y.selectAll = function (t) {
                var e, n, r = [];
                t = d3_selection_selectorAll(t);
                for (var o = -1, a = this.length; ++o < a;) for (var i = this[o], l = -1, s = i.length; ++l < s;) (n = i[l]) && (r.push(e = d(t.call(n, n.__data__, l, o))), e.parentNode = n);
                return d3_selection(r)
            };
            var m = "http://www.w3.org/1999/xhtml", v = {
                svg: "http://www.w3.org/2000/svg",
                xhtml: m,
                xlink: "http://www.w3.org/1999/xlink",
                xml: "http://www.w3.org/XML/1998/namespace",
                xmlns: "http://www.w3.org/2000/xmlns/"
            };

            function d3_selection_attr(e, n) {
                return e = L.ns.qualify(e), null == n ? e.local ? function () {
                    this.removeAttributeNS(e.space, e.local)
                } : function () {
                    this.removeAttribute(e)
                } : "function" == typeof n ? e.local ? function () {
                    var t = n.apply(this, arguments);
                    null == t ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, t)
                } : function () {
                    var t = n.apply(this, arguments);
                    null == t ? this.removeAttribute(e) : this.setAttribute(e, t)
                } : e.local ? function () {
                    this.setAttributeNS(e.space, e.local, n)
                } : function () {
                    this.setAttribute(e, n)
                }
            }

            function d3_collapse(t) {
                return t.trim().replace(/\s+/g, " ")
            }

            function d3_selection_classedRe(t) {
                return new RegExp("(?:^|\\s+)" + L.requote(t) + "(?:\\s+|$)", "g")
            }

            function d3_selection_classes(t) {
                return (t + "").trim().split(/^|\s+/)
            }

            function d3_selection_classed(n, r) {
                var o = (n = d3_selection_classes(n).map(d3_selection_classedName)).length;
                return "function" == typeof r ? function () {
                    for (var t = -1, e = r.apply(this, arguments); ++t < o;) n[t](this, e)
                } : function () {
                    for (var t = -1; ++t < o;) n[t](this, r)
                }
            }

            function d3_selection_classedName(r) {
                var o = d3_selection_classedRe(r);
                return function (t, e) {
                    if (n = t.classList) return e ? n.add(r) : n.remove(r);
                    var n = t.getAttribute("class") || "";
                    e ? (o.lastIndex = 0, o.test(n) || t.setAttribute("class", d3_collapse(n + " " + r))) : t.setAttribute("class", d3_collapse(n.replace(o, " ")))
                }
            }

            function d3_selection_style(e, n, r) {
                return null == n ? function () {
                    this.style.removeProperty(e)
                } : "function" == typeof n ? function () {
                    var t = n.apply(this, arguments);
                    null == t ? this.style.removeProperty(e) : this.style.setProperty(e, t, r)
                } : function () {
                    this.style.setProperty(e, n, r)
                }
            }

            function d3_selection_property(e, n) {
                return null == n ? function () {
                    delete this[e]
                } : "function" == typeof n ? function () {
                    var t = n.apply(this, arguments);
                    null == t ? delete this[e] : this[e] = t
                } : function () {
                    this[e] = n
                }
            }

            function d3_selection_creator(n) {
                return "function" == typeof n ? n : (n = L.ns.qualify(n)).local ? function () {
                    return this.ownerDocument.createElementNS(n.space, n.local)
                } : function () {
                    var t = this.ownerDocument, e = this.namespaceURI;
                    return e === m && t.documentElement.namespaceURI === m ? t.createElement(n) : t.createElementNS(e, n)
                }
            }

            function d3_selectionRemove() {
                var t = this.parentNode;
                t && t.removeChild(this)
            }

            function d3_selection_dataNode(t) {
                return {__data__: t}
            }

            function d3_selection_filter(t) {
                return function () {
                    return g(this, t)
                }
            }

            function d3_selection_each(t, e) {
                for (var n = 0, r = t.length; n < r; n++) for (var o, a = t[n], i = 0, l = a.length; i < l; i++) (o = a[i]) && e(o, i, n);
                return t
            }

            function d3_selection_enter(t) {
                return p(t, b), t
            }

            L.ns = {
                prefix: v, qualify: function (t) {
                    var e = t.indexOf(":"), n = t;
                    return 0 <= e && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), v.hasOwnProperty(n) ? {
                        space: v[n],
                        local: t
                    } : t
                }
            }, y.attr = function (t, e) {
                if (arguments.length < 2) {
                    if ("string" == typeof t) {
                        var n = this.node();
                        return (t = L.ns.qualify(t)).local ? n.getAttributeNS(t.space, t.local) : n.getAttribute(t)
                    }
                    for (e in t) this.each(d3_selection_attr(e, t[e]));
                    return this
                }
                return this.each(d3_selection_attr(t, e))
            }, y.classed = function (t, e) {
                if (arguments.length < 2) {
                    if ("string" == typeof t) {
                        var n = this.node(), r = (t = d3_selection_classes(t)).length, o = -1;
                        if (e = n.classList) {
                            for (; ++o < r;) if (!e.contains(t[o])) return !1
                        } else for (e = n.getAttribute("class"); ++o < r;) if (!d3_selection_classedRe(t[o]).test(e)) return !1;
                        return !0
                    }
                    for (e in t) this.each(d3_selection_classed(e, t[e]));
                    return this
                }
                return this.each(d3_selection_classed(t, e))
            }, y.style = function (t, e, n) {
                var r = arguments.length;
                if (r < 3) {
                    if ("string" != typeof t) {
                        for (n in r < 2 && (e = ""), t) this.each(d3_selection_style(n, t[n], e));
                        return this
                    }
                    if (r < 2) {
                        var o = this.node();
                        return d3_window(o).getComputedStyle(o, null).getPropertyValue(t)
                    }
                    n = ""
                }
                return this.each(d3_selection_style(t, e, n))
            }, y.property = function (t, e) {
                if (arguments.length < 2) {
                    if ("string" == typeof t) return this.node()[t];
                    for (e in t) this.each(d3_selection_property(e, t[e]));
                    return this
                }
                return this.each(d3_selection_property(t, e))
            }, y.text = function (e) {
                return arguments.length ? this.each("function" == typeof e ? function () {
                    var t = e.apply(this, arguments);
                    this.textContent = null == t ? "" : t
                } : null == e ? function () {
                    this.textContent = ""
                } : function () {
                    this.textContent = e
                }) : this.node().textContent
            }, y.html = function (e) {
                return arguments.length ? this.each("function" == typeof e ? function () {
                    var t = e.apply(this, arguments);
                    this.innerHTML = null == t ? "" : t
                } : null == e ? function () {
                    this.innerHTML = ""
                } : function () {
                    this.innerHTML = e
                }) : this.node().innerHTML
            }, y.append = function (t) {
                return t = d3_selection_creator(t), this.select(function () {
                    return this.appendChild(t.apply(this, arguments))
                })
            }, y.insert = function (t, e) {
                return t = d3_selection_creator(t), e = d3_selection_selector(e), this.select(function () {
                    return this.insertBefore(t.apply(this, arguments), e.apply(this, arguments) || null)
                })
            }, y.remove = function () {
                return this.each(d3_selectionRemove)
            }, y.data = function (t, f) {
                var e, n, r = -1, o = this.length;
                if (!arguments.length) {
                    for (t = new Array(o = (e = this[0]).length); ++r < o;) (n = e[r]) && (t[r] = n.__data__);
                    return t
                }

                function bind(t, e) {
                    var n, r, o, a = t.length, i = e.length, l = Math.min(a, i), s = new Array(i), u = new Array(i),
                        c = new Array(a);
                    if (f) {
                        var p, d = new d3_Map, _ = new Array(a);
                        for (n = -1; ++n < a;) (r = t[n]) && (d.has(p = f.call(r, r.__data__, n)) ? c[n] = r : d.set(p, r), _[n] = p);
                        for (n = -1; ++n < i;) (r = d.get(p = f.call(e, o = e[n], n))) ? !0 !== r && ((s[n] = r).__data__ = o) : u[n] = d3_selection_dataNode(o), d.set(p, !0);
                        for (n = -1; ++n < a;) n in _ && !0 !== d.get(_[n]) && (c[n] = t[n])
                    } else {
                        for (n = -1; ++n < l;) r = t[n], o = e[n], r ? (r.__data__ = o, s[n] = r) : u[n] = d3_selection_dataNode(o);
                        for (; n < i; ++n) u[n] = d3_selection_dataNode(e[n]);
                        for (; n < a; ++n) c[n] = t[n]
                    }
                    u.update = s, u.parentNode = s.parentNode = c.parentNode = t.parentNode, h.push(u), g.push(s), y.push(c)
                }

                var h = d3_selection_enter([]), g = d3_selection([]), y = d3_selection([]);
                if ("function" == typeof t) for (; ++r < o;) bind(e = this[r], t.call(e, e.parentNode.__data__, r)); else for (; ++r < o;) bind(e = this[r], t);
                return g.enter = function () {
                    return h
                }, g.exit = function () {
                    return y
                }, g
            }, y.datum = function (t) {
                return arguments.length ? this.property("__data__", t) : this.property("__data__")
            }, y.filter = function (t) {
                var e, n, r, o = [];
                "function" != typeof t && (t = d3_selection_filter(t));
                for (var a = 0, i = this.length; a < i; a++) {
                    o.push(e = []), e.parentNode = (n = this[a]).parentNode;
                    for (var l = 0, s = n.length; l < s; l++) (r = n[l]) && t.call(r, r.__data__, l, a) && e.push(r)
                }
                return d3_selection(o)
            }, y.order = function () {
                for (var t = -1, e = this.length; ++t < e;) for (var n, r = this[t], o = r.length - 1, a = r[o]; 0 <= --o;) (n = r[o]) && (a && a !== n.nextSibling && a.parentNode.insertBefore(n, a), a = n);
                return this
            }, y.sort = function (t) {
                t = function (n) {
                    arguments.length || (n = d3_ascending);
                    return function (t, e) {
                        return t && e ? n(t.__data__, e.__data__) : !t - !e
                    }
                }.apply(this, arguments);
                for (var e = -1, n = this.length; ++e < n;) this[e].sort(t);
                return this.order()
            }, y.each = function (r) {
                return d3_selection_each(this, function (t, e, n) {
                    r.call(t, t.__data__, e, n)
                })
            }, y.call = function (t) {
                var e = d(arguments);
                return t.apply(e[0] = this, e), this
            }, y.empty = function () {
                return !this.node()
            }, y.node = function () {
                for (var t = 0, e = this.length; t < e; t++) for (var n = this[t], r = 0, o = n.length; r < o; r++) {
                    var a = n[r];
                    if (a) return a
                }
                return null
            }, y.size = function () {
                var t = 0;
                return d3_selection_each(this, function () {
                    ++t
                }), t
            };
            var b = [];

            function d3_selection_on(o, e, n) {
                var r = "__on" + o, t = o.indexOf("."), a = d3_selection_onListener;
                0 < t && (o = o.slice(0, t));
                var i = M.get(o);

                function onRemove() {
                    var t = this[r];
                    t && (this.removeEventListener(o, t, t.$), delete this[r])
                }

                return i && (o = i, a = d3_selection_onFilter), t ? e ? function () {
                    var t = a(e, d(arguments));
                    onRemove.call(this), this.addEventListener(o, this[r] = t, t.$ = n), t._ = e
                } : onRemove : e ? d3_noop : function () {
                    var t, e = new RegExp("^__on([^.]+)" + L.requote(o) + "$");
                    for (var n in this) if (t = n.match(e)) {
                        var r = this[n];
                        this.removeEventListener(t[1], r, r.$), delete this[n]
                    }
                }
            }

            L.selection.enter = d3_selection_enter, (L.selection.enter.prototype = b).append = y.append, b.empty = y.empty, b.node = y.node, b.call = y.call, b.size = y.size, b.select = function (t) {
                for (var e, n, r, o, a, i = [], l = -1, s = this.length; ++l < s;) {
                    r = (o = this[l]).update, i.push(e = []), e.parentNode = o.parentNode;
                    for (var u = -1, c = o.length; ++u < c;) (a = o[u]) ? (e.push(r[u] = n = t.call(o.parentNode, a.__data__, u, l)), n.__data__ = a.__data__) : e.push(null)
                }
                return d3_selection(i)
            }, b.insert = function (t, e) {
                var i, l, s;
                return arguments.length < 2 && (i = this, e = function (t, e, n) {
                    var r, o = i[n].update, a = o.length;
                    for (n != s && (s = n, l = 0), l <= e && (l = e + 1); !(r = o[l]) && ++l < a;) ;
                    return r
                }), y.insert.call(this, t, e)
            }, L.select = function (t) {
                var e;
                return "string" == typeof t ? (e = [_(t, h)]).parentNode = h.documentElement : (e = [t]).parentNode = d3_documentElement(t), d3_selection([e])
            }, L.selectAll = function (t) {
                var e;
                return "string" == typeof t ? (e = d(f(t, h))).parentNode = h.documentElement : (e = d(t)).parentNode = null, d3_selection([e])
            }, y.on = function (t, e, n) {
                var r = arguments.length;
                if (r < 3) {
                    if ("string" != typeof t) {
                        for (n in r < 2 && (e = !1), t) this.each(d3_selection_on(n, t[n], e));
                        return this
                    }
                    if (r < 2) return (r = this.node()["__on" + t]) && r._;
                    n = !1
                }
                return this.each(d3_selection_on(t, e, n))
            };
            var M = L.map({mouseenter: "mouseover", mouseleave: "mouseout"});

            function d3_selection_onListener(n, r) {
                return function (t) {
                    var e = L.event;
                    L.event = t, r[0] = this.__data__;
                    try {
                        n.apply(this, r)
                    } finally {
                        L.event = e
                    }
                }
            }

            function d3_selection_onFilter(t, e) {
                var n = d3_selection_onListener(t, e);
                return function (t) {
                    var e = t.relatedTarget;
                    e && (e === this || 8 & e.compareDocumentPosition(this)) || n.call(this, t)
                }
            }

            h && M.forEach(function (t) {
                "on" + t in h && M.remove(t)
            });
            var x, T = 0;

            function d3_event_dragSuppress(t) {
                var n = ".dragsuppress-" + ++T, r = "click" + n,
                    o = L.select(d3_window(t)).on("touchmove" + n, d3_eventPreventDefault).on("dragstart" + n, d3_eventPreventDefault).on("selectstart" + n, d3_eventPreventDefault);
                if (null == x && (x = !("onselectstart" in t) && d3_vendorSymbol(t.style, "userSelect")), x) {
                    var a = d3_documentElement(t).style, i = a[x];
                    a[x] = "none"
                }
                return function (t) {
                    if (o.on(n, null), x && (a[x] = i), t) {
                        var e = function () {
                            o.on(r, null)
                        };
                        o.on(r, function () {
                            d3_eventPreventDefault(), e()
                        }, !0), setTimeout(e, 0)
                    }
                }
            }

            L.mouse = function (t) {
                return d3_mousePoint(t, d3_eventSource())
            };
            var P = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;

            function d3_mousePoint(t, e) {
                e.changedTouches && (e = e.changedTouches[0]);
                var n = t.ownerSVGElement || t;
                if (n.createSVGPoint) {
                    var r = n.createSVGPoint();
                    if (P < 0) {
                        var o = d3_window(t);
                        if (o.scrollX || o.scrollY) {
                            var a = (n = L.select("body").append("svg").style({
                                position: "absolute",
                                top: 0,
                                left: 0,
                                margin: 0,
                                padding: 0,
                                border: "none"
                            }, "important"))[0][0].getScreenCTM();
                            P = !(a.f || a.e), n.remove()
                        }
                    }
                    return r.y = P ? (r.x = e.pageX, e.pageY) : (r.x = e.clientX, e.clientY), [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y]
                }
                var i = t.getBoundingClientRect();
                return [e.clientX - i.left - t.clientLeft, e.clientY - i.top - t.clientTop]
            }

            function d3_behavior_dragTouchId() {
                return L.event.changedTouches[0].identifier
            }

            L.touch = function (t, e, n) {
                if (arguments.length < 3 && (n = e, e = d3_eventSource().changedTouches), e) for (var r, o = 0, a = e.length; o < a; ++o) if ((r = e[o]).identifier === n) return d3_mousePoint(t, r)
            }, L.behavior.drag = function () {
                var h = d3_eventDispatch(drag, "drag", "dragstart", "dragend"), g = null,
                    t = dragstart(d3_noop, L.mouse, d3_window, "mousemove", "mouseup"),
                    e = dragstart(d3_behavior_dragTouchId, L.touch, d3_identity, "touchmove", "touchend");

                function drag() {
                    this.on("mousedown.drag", t).on("touchstart.drag", e)
                }

                function dragstart(c, p, d, _, f) {
                    return function () {
                        var r, t = L.event.target.correspondingElement || L.event.target, o = this.parentNode,
                            a = h.of(this, arguments), i = 0, l = c(), e = ".drag" + (null == l ? "" : "-" + l),
                            n = L.select(d(t)).on(_ + e, function () {
                                var t, e, n = p(o, l);
                                if (!n) return;
                                t = n[0] - u[0], e = n[1] - u[1], i |= t | e, a({
                                    type: "drag",
                                    x: (u = n)[0] + r[0],
                                    y: n[1] + r[1],
                                    dx: t,
                                    dy: e
                                })
                            }).on(f + e, function () {
                                if (!p(o, l)) return;
                                n.on(_ + e, null).on(f + e, null), s(i), a({type: "dragend"})
                            }), s = d3_event_dragSuppress(t), u = p(o, l);
                        r = g ? [(r = g.apply(this, arguments)).x - u[0], r.y - u[1]] : [0, 0], a({type: "dragstart"})
                    }
                }

                return drag.origin = function (t) {
                    return arguments.length ? (g = t, drag) : g
                }, L.rebind(drag, h, "on")
            }, L.touches = function (n, t) {
                return arguments.length < 2 && (t = d3_eventSource().touches), t ? d(t).map(function (t) {
                    var e = d3_mousePoint(n, t);
                    return e.identifier = t.identifier, e
                }) : []
            };
            var G = 1e-6, w = G * G, V = Math.PI, N = 2 * V, W = N - G, K = V / 2, k = V / 180, D = 180 / V;

            function d3_sgn(t) {
                return 0 < t ? 1 : t < 0 ? -1 : 0
            }

            function d3_cross2d(t, e, n) {
                return (e[0] - t[0]) * (n[1] - t[1]) - (e[1] - t[1]) * (n[0] - t[0])
            }

            function d3_acos(t) {
                return 1 < t ? 0 : t < -1 ? V : Math.acos(t)
            }

            function d3_asin(t) {
                return 1 < t ? K : t < -1 ? -K : Math.asin(t)
            }

            function d3_cosh(t) {
                return ((t = Math.exp(t)) + 1 / t) / 2
            }

            function d3_haversin(t) {
                return (t = Math.sin(t / 2)) * t
            }

            var S = Math.SQRT2;
            L.interpolateZoom = function (t, e) {
                var n, i, l = t[0], s = t[1], u = t[2], r = e[0], o = e[1], a = e[2], c = r - l, p = o - s,
                    d = c * c + p * p;
                if (d < w) i = Math.log(a / u) / S, n = function (t) {
                    return [l + t * c, s + t * p, u * Math.exp(S * t * i)]
                }; else {
                    var _ = Math.sqrt(d), f = (a * a - u * u + 4 * d) / (2 * u * 2 * _),
                        h = (a * a - u * u - 4 * d) / (2 * a * 2 * _), g = Math.log(Math.sqrt(f * f + 1) - f),
                        y = Math.log(Math.sqrt(h * h + 1) - h);
                    i = (y - g) / S, n = function (t) {
                        var e, n, r = t * i, o = d3_cosh(g),
                            a = u / (2 * _) * (o * (n = S * r + g, ((n = Math.exp(2 * n)) - 1) / (n + 1)) - (e = g, ((e = Math.exp(e)) - 1 / e) / 2));
                        return [l + a * c, s + a * p, u * o / d3_cosh(S * r + g)]
                    }
                }
                return n.duration = 1e3 * i, n
            }, L.behavior.zoom = function () {
                var e, s, n, r, y, o, a, i, l, m = {x: 0, y: 0, k: 1}, u = [960, 500], c = R, p = 250, d = 0,
                    v = "mousedown.zoom", _ = "mousemove.zoom", f = "mouseup.zoom", b = "touchstart.zoom",
                    M = d3_eventDispatch(zoom, "zoomstart", "zoom", "zoomend");

                function zoom(t) {
                    t.on(v, mousedowned).on(A + ".zoom", mousewheeled).on("dblclick.zoom", dblclicked).on(b, touchstarted)
                }

                function location(t) {
                    return [(t[0] - m.x) / m.k, (t[1] - m.y) / m.k]
                }

                function scaleTo(t) {
                    m.k = Math.max(c[0], Math.min(c[1], t))
                }

                function translateTo(t, e) {
                    var n;
                    e = [(n = e)[0] * m.k + m.x, n[1] * m.k + m.y], m.x += t[0] - e[0], m.y += t[1] - e[1]
                }

                function zoomTo(t, e, n, r) {
                    t.__chart__ = {
                        x: m.x,
                        y: m.y,
                        k: m.k
                    }, scaleTo(Math.pow(2, r)), translateTo(s = e, n), t = L.select(t), 0 < p && (t = t.transition().duration(p)), t.call(zoom.event)
                }

                function rescale() {
                    a && a.domain(o.range().map(function (t) {
                        return (t - m.x) / m.k
                    }).map(o.invert)), l && l.domain(i.range().map(function (t) {
                        return (t - m.y) / m.k
                    }).map(i.invert))
                }

                function zoomstarted(t) {
                    d++ || t({type: "zoomstart"})
                }

                function zoomed(t) {
                    rescale(), t({type: "zoom", scale: m.k, translate: [m.x, m.y]})
                }

                function zoomended(t) {
                    --d || (t({type: "zoomend"}), s = null)
                }

                function mousedowned() {
                    var t = this, e = M.of(t, arguments), n = 0, r = L.select(d3_window(t)).on(_, function () {
                        n = 1, translateTo(L.mouse(t), o), zoomed(e)
                    }).on(f, function () {
                        r.on(_, null).on(f, null), a(n), zoomended(e)
                    }), o = location(L.mouse(t)), a = d3_event_dragSuppress(t);
                    Se.call(t), zoomstarted(e)
                }

                function touchstarted() {
                    var u, c = this, p = M.of(c, arguments), d = {}, _ = 0,
                        o = ".zoom-" + L.event.changedTouches[0].identifier, f = "touchmove" + o, h = "touchend" + o,
                        g = [], a = L.select(c), i = d3_event_dragSuppress(c);

                    function relocate() {
                        var t = L.touches(c);
                        return u = m.k, t.forEach(function (t) {
                            t.identifier in d && (d[t.identifier] = location(t))
                        }), t
                    }

                    function started() {
                        var t = L.event.target;
                        L.select(t).on(f, moved).on(h, ended), g.push(t);
                        for (var e = L.event.changedTouches, n = 0, r = e.length; n < r; ++n) d[e[n].identifier] = null;
                        var o = relocate(), a = Date.now();
                        if (1 === o.length) {
                            if (a - y < 500) {
                                var i = o[0];
                                zoomTo(c, i, d[i.identifier], Math.floor(Math.log(m.k) / Math.LN2) + 1), d3_eventPreventDefault()
                            }
                            y = a
                        } else if (1 < o.length) {
                            i = o[0];
                            var l = o[1], s = i[0] - l[0], u = i[1] - l[1];
                            _ = s * s + u * u
                        }
                    }

                    function moved() {
                        var t, e, n, r, o = L.touches(c);
                        Se.call(c);
                        for (var a = 0, i = o.length; a < i; ++a, r = null) if (n = o[a], r = d[n.identifier]) {
                            if (e) break;
                            t = n, e = r
                        }
                        if (r) {
                            var l = (l = n[0] - t[0]) * l + (l = n[1] - t[1]) * l, s = _ && Math.sqrt(l / _);
                            t = [(t[0] + n[0]) / 2, (t[1] + n[1]) / 2], e = [(e[0] + r[0]) / 2, (e[1] + r[1]) / 2], scaleTo(s * u)
                        }
                        y = null, translateTo(t, e), zoomed(p)
                    }

                    function ended() {
                        if (L.event.touches.length) {
                            for (var t = L.event.changedTouches, e = 0, n = t.length; e < n; ++e) delete d[t[e].identifier];
                            for (var r in d) return void relocate()
                        }
                        L.selectAll(g).on(o, null), a.on(v, mousedowned).on(b, touchstarted), i(), zoomended(p)
                    }

                    started(), zoomstarted(p), a.on(v, null).on(b, started)
                }

                function mousewheeled() {
                    var t = M.of(this, arguments);
                    r ? clearTimeout(r) : (Se.call(this), e = location(s = n || L.mouse(this)), zoomstarted(t)), r = setTimeout(function () {
                        r = null, zoomended(t)
                    }, 50), d3_eventPreventDefault(), scaleTo(Math.pow(2, .002 * C()) * m.k), translateTo(s, e), zoomed(t)
                }

                function dblclicked() {
                    var t = L.mouse(this), e = Math.log(m.k) / Math.LN2;
                    zoomTo(this, t, location(t), L.event.shiftKey ? Math.ceil(e) - 1 : Math.floor(e) + 1)
                }

                return A || (A = "onwheel" in h ? (C = function () {
                    return -L.event.deltaY * (L.event.deltaMode ? 120 : 1)
                }, "wheel") : "onmousewheel" in h ? (C = function () {
                    return L.event.wheelDelta
                }, "mousewheel") : (C = function () {
                    return -L.event.detail
                }, "MozMousePixelScroll")), zoom.event = function (t) {
                    t.each(function () {
                        var l = M.of(this, arguments), e = m;
                        Ne ? L.select(this).transition().each("start.zoom", function () {
                            m = this.__chart__ || {x: 0, y: 0, k: 1}, zoomstarted(l)
                        }).tween("zoom:zoom", function () {
                            var r = u[0], t = u[1], o = s ? s[0] : r / 2, a = s ? s[1] : t / 2,
                                i = L.interpolateZoom([(o - m.x) / m.k, (a - m.y) / m.k, r / m.k], [(o - e.x) / e.k, (a - e.y) / e.k, r / e.k]);
                            return function (t) {
                                var e = i(t), n = r / e[2];
                                this.__chart__ = m = {x: o - e[0] * n, y: a - e[1] * n, k: n}, zoomed(l)
                            }
                        }).each("interrupt.zoom", function () {
                            zoomended(l)
                        }).each("end.zoom", function () {
                            zoomended(l)
                        }) : (this.__chart__ = m, zoomstarted(l), zoomed(l), zoomended(l))
                    })
                }, zoom.translate = function (t) {
                    return arguments.length ? (m = {x: +t[0], y: +t[1], k: m.k}, rescale(), zoom) : [m.x, m.y]
                }, zoom.scale = function (t) {
                    return arguments.length ? (m = {x: m.x, y: m.y, k: null}, scaleTo(+t), rescale(), zoom) : m.k
                }, zoom.scaleExtent = function (t) {
                    return arguments.length ? (c = null == t ? R : [+t[0], +t[1]], zoom) : c
                }, zoom.center = function (t) {
                    return arguments.length ? (n = t && [+t[0], +t[1]], zoom) : n
                }, zoom.size = function (t) {
                    return arguments.length ? (u = t && [+t[0], +t[1]], zoom) : u
                }, zoom.duration = function (t) {
                    return arguments.length ? (p = +t, zoom) : p
                }, zoom.x = function (t) {
                    return arguments.length ? (o = (a = t).copy(), m = {x: 0, y: 0, k: 1}, zoom) : a
                }, zoom.y = function (t) {
                    return arguments.length ? (i = (l = t).copy(), m = {x: 0, y: 0, k: 1}, zoom) : l
                }, L.rebind(zoom, M, "on")
            };
            var C, A, R = [0, 1 / 0];

            function d3_color() {
            }

            function d3_hsl(t, e, n) {
                return this instanceof d3_hsl ? (this.h = +t, this.s = +e, void (this.l = +n)) : arguments.length < 2 ? t instanceof d3_hsl ? new d3_hsl(t.h, t.s, t.l) : d3_rgb_parse("" + t, d3_rgb_hsl, d3_hsl) : new d3_hsl(t, e, n)
            }

            (L.color = d3_color).prototype.toString = function () {
                return this.rgb() + ""
            };
            var z = (L.hsl = d3_hsl).prototype = new d3_color;

            function d3_hsl_rgb(t, e, n) {
                var r, o;

                function vv(t) {
                    return Math.round(255 * (360 < (e = t) ? e -= 360 : e < 0 && (e += 360), e < 60 ? r + (o - r) * e / 60 : e < 180 ? o : e < 240 ? r + (o - r) * (240 - e) / 60 : r));
                    var e
                }

                return t = isNaN(t) ? 0 : (t %= 360) < 0 ? t + 360 : t, e = isNaN(e) ? 0 : e < 0 ? 0 : 1 < e ? 1 : e, r = 2 * (n = n < 0 ? 0 : 1 < n ? 1 : n) - (o = n <= .5 ? n * (1 + e) : n + e - n * e), new d3_rgb(vv(t + 120), vv(t), vv(t - 120))
            }

            function d3_hcl(t, e, n) {
                return this instanceof d3_hcl ? (this.h = +t, this.c = +e, void (this.l = +n)) : arguments.length < 2 ? t instanceof d3_hcl ? new d3_hcl(t.h, t.c, t.l) : d3_lab_hcl(t instanceof d3_lab ? t.l : (t = d3_rgb_lab((t = L.rgb(t)).r, t.g, t.b)).l, t.a, t.b) : new d3_hcl(t, e, n)
            }

            z.brighter = function (t) {
                return t = Math.pow(.7, arguments.length ? t : 1), new d3_hsl(this.h, this.s, this.l / t)
            }, z.darker = function (t) {
                return t = Math.pow(.7, arguments.length ? t : 1), new d3_hsl(this.h, this.s, t * this.l)
            }, z.rgb = function () {
                return d3_hsl_rgb(this.h, this.s, this.l)
            };
            var B = (L.hcl = d3_hcl).prototype = new d3_color;

            function d3_hcl_lab(t, e, n) {
                return isNaN(t) && (t = 0), isNaN(e) && (e = 0), new d3_lab(n, Math.cos(t *= k) * e, Math.sin(t) * e)
            }

            function d3_lab(t, e, n) {
                return this instanceof d3_lab ? (this.l = +t, this.a = +e, void (this.b = +n)) : arguments.length < 2 ? t instanceof d3_lab ? new d3_lab(t.l, t.a, t.b) : t instanceof d3_hcl ? d3_hcl_lab(t.h, t.c, t.l) : d3_rgb_lab((t = d3_rgb(t)).r, t.g, t.b) : new d3_lab(t, e, n)
            }

            B.brighter = function (t) {
                return new d3_hcl(this.h, this.c, Math.min(100, this.l + O * (arguments.length ? t : 1)))
            }, B.darker = function (t) {
                return new d3_hcl(this.h, this.c, Math.max(0, this.l - O * (arguments.length ? t : 1)))
            }, B.rgb = function () {
                return d3_hcl_lab(this.h, this.c, this.l).rgb()
            }, L.lab = d3_lab;
            var O = 18, I = .95047, q = 1, U = 1.08883, j = d3_lab.prototype = new d3_color;

            function d3_lab_rgb(t, e, n) {
                var r = (t + 16) / 116, o = r + e / 500, a = r - n / 200;
                return new d3_rgb(d3_xyz_rgb(3.2404542 * (o = d3_lab_xyz(o) * I) - 1.5371385 * (r = d3_lab_xyz(r) * q) - .4985314 * (a = d3_lab_xyz(a) * U)), d3_xyz_rgb(-.969266 * o + 1.8760108 * r + .041556 * a), d3_xyz_rgb(.0556434 * o - .2040259 * r + 1.0572252 * a))
            }

            function d3_lab_hcl(t, e, n) {
                return 0 < t ? new d3_hcl(Math.atan2(n, e) * D, Math.sqrt(e * e + n * n), t) : new d3_hcl(NaN, NaN, t)
            }

            function d3_lab_xyz(t) {
                return .206893034 < t ? t * t * t : (t - 4 / 29) / 7.787037
            }

            function d3_xyz_lab(t) {
                return .008856 < t ? Math.pow(t, 1 / 3) : 7.787037 * t + 4 / 29
            }

            function d3_xyz_rgb(t) {
                return Math.round(255 * (t <= .00304 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055))
            }

            function d3_rgb(t, e, n) {
                return this instanceof d3_rgb ? (this.r = ~~t, this.g = ~~e, void (this.b = ~~n)) : arguments.length < 2 ? t instanceof d3_rgb ? new d3_rgb(t.r, t.g, t.b) : d3_rgb_parse("" + t, d3_rgb, d3_hsl_rgb) : new d3_rgb(t, e, n)
            }

            function d3_rgbNumber(t) {
                return new d3_rgb(t >> 16, t >> 8 & 255, 255 & t)
            }

            function d3_rgbString(t) {
                return d3_rgbNumber(t) + ""
            }

            j.brighter = function (t) {
                return new d3_lab(Math.min(100, this.l + O * (arguments.length ? t : 1)), this.a, this.b)
            }, j.darker = function (t) {
                return new d3_lab(Math.max(0, this.l - O * (arguments.length ? t : 1)), this.a, this.b)
            }, j.rgb = function () {
                return d3_lab_rgb(this.l, this.a, this.b)
            };
            var H = (L.rgb = d3_rgb).prototype = new d3_color;

            function d3_rgb_hex(t) {
                return t < 16 ? "0" + Math.max(0, t).toString(16) : Math.min(255, t).toString(16)
            }

            function d3_rgb_parse(t, e, n) {
                var r, o, a, i = 0, l = 0, s = 0;
                if (r = /([a-z]+)\((.*)\)/.exec(t = t.toLowerCase())) switch (o = r[2].split(","), r[1]) {
                    case"hsl":
                        return n(parseFloat(o[0]), parseFloat(o[1]) / 100, parseFloat(o[2]) / 100);
                    case"rgb":
                        return e(d3_rgb_parseNumber(o[0]), d3_rgb_parseNumber(o[1]), d3_rgb_parseNumber(o[2]))
                }
                return (a = F.get(t)) ? e(a.r, a.g, a.b) : (null == t || "#" !== t.charAt(0) || isNaN(a = parseInt(t.slice(1), 16)) || (4 === t.length ? (i = (3840 & a) >> 4, i |= i >> 4, l = 240 & a, l |= l >> 4, s = 15 & a, s |= s << 4) : 7 === t.length && (i = (16711680 & a) >> 16, l = (65280 & a) >> 8, s = 255 & a)), e(i, l, s))
            }

            function d3_rgb_hsl(t, e, n) {
                var r, o, a = Math.min(t /= 255, e /= 255, n /= 255), i = Math.max(t, e, n), l = i - a, s = (i + a) / 2;
                return l ? (o = s < .5 ? l / (i + a) : l / (2 - i - a), r = t == i ? (e - n) / l + (e < n ? 6 : 0) : e == i ? (n - t) / l + 2 : (t - e) / l + 4, r *= 60) : (r = NaN, o = 0 < s && s < 1 ? 0 : r), new d3_hsl(r, o, s)
            }

            function d3_rgb_lab(t, e, n) {
                var r = d3_xyz_lab((.4124564 * (t = d3_rgb_xyz(t)) + .3575761 * (e = d3_rgb_xyz(e)) + .1804375 * (n = d3_rgb_xyz(n))) / I),
                    o = d3_xyz_lab((.2126729 * t + .7151522 * e + .072175 * n) / q);
                return d3_lab(116 * o - 16, 500 * (r - o), 200 * (o - d3_xyz_lab((.0193339 * t + .119192 * e + .9503041 * n) / U)))
            }

            function d3_rgb_xyz(t) {
                return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
            }

            function d3_rgb_parseNumber(t) {
                var e = parseFloat(t);
                return "%" === t.charAt(t.length - 1) ? Math.round(2.55 * e) : e
            }

            H.brighter = function (t) {
                t = Math.pow(.7, arguments.length ? t : 1);
                var e = this.r, n = this.g, r = this.b;
                return e || n || r ? (e && e < 30 && (e = 30), n && n < 30 && (n = 30), r && r < 30 && (r = 30), new d3_rgb(Math.min(255, e / t), Math.min(255, n / t), Math.min(255, r / t))) : new d3_rgb(30, 30, 30)
            }, H.darker = function (t) {
                return new d3_rgb((t = Math.pow(.7, arguments.length ? t : 1)) * this.r, t * this.g, t * this.b)
            }, H.hsl = function () {
                return d3_rgb_hsl(this.r, this.g, this.b)
            }, H.toString = function () {
                return "#" + d3_rgb_hex(this.r) + d3_rgb_hex(this.g) + d3_rgb_hex(this.b)
            };
            var F = L.map({
                aliceblue: 15792383,
                antiquewhite: 16444375,
                aqua: 65535,
                aquamarine: 8388564,
                azure: 15794175,
                beige: 16119260,
                bisque: 16770244,
                black: 0,
                blanchedalmond: 16772045,
                blue: 255,
                blueviolet: 9055202,
                brown: 10824234,
                burlywood: 14596231,
                cadetblue: 6266528,
                chartreuse: 8388352,
                chocolate: 13789470,
                coral: 16744272,
                cornflowerblue: 6591981,
                cornsilk: 16775388,
                crimson: 14423100,
                cyan: 65535,
                darkblue: 139,
                darkcyan: 35723,
                darkgoldenrod: 12092939,
                darkgray: 11119017,
                darkgreen: 25600,
                darkgrey: 11119017,
                darkkhaki: 12433259,
                darkmagenta: 9109643,
                darkolivegreen: 5597999,
                darkorange: 16747520,
                darkorchid: 10040012,
                darkred: 9109504,
                darksalmon: 15308410,
                darkseagreen: 9419919,
                darkslateblue: 4734347,
                darkslategray: 3100495,
                darkslategrey: 3100495,
                darkturquoise: 52945,
                darkviolet: 9699539,
                deeppink: 16716947,
                deepskyblue: 49151,
                dimgray: 6908265,
                dimgrey: 6908265,
                dodgerblue: 2003199,
                firebrick: 11674146,
                floralwhite: 16775920,
                forestgreen: 2263842,
                fuchsia: 16711935,
                gainsboro: 14474460,
                ghostwhite: 16316671,
                gold: 16766720,
                goldenrod: 14329120,
                gray: 8421504,
                green: 32768,
                greenyellow: 11403055,
                grey: 8421504,
                honeydew: 15794160,
                hotpink: 16738740,
                indianred: 13458524,
                indigo: 4915330,
                ivory: 16777200,
                khaki: 15787660,
                lavender: 15132410,
                lavenderblush: 16773365,
                lawngreen: 8190976,
                lemonchiffon: 16775885,
                lightblue: 11393254,
                lightcoral: 15761536,
                lightcyan: 14745599,
                lightgoldenrodyellow: 16448210,
                lightgray: 13882323,
                lightgreen: 9498256,
                lightgrey: 13882323,
                lightpink: 16758465,
                lightsalmon: 16752762,
                lightseagreen: 2142890,
                lightskyblue: 8900346,
                lightslategray: 7833753,
                lightslategrey: 7833753,
                lightsteelblue: 11584734,
                lightyellow: 16777184,
                lime: 65280,
                limegreen: 3329330,
                linen: 16445670,
                magenta: 16711935,
                maroon: 8388608,
                mediumaquamarine: 6737322,
                mediumblue: 205,
                mediumorchid: 12211667,
                mediumpurple: 9662683,
                mediumseagreen: 3978097,
                mediumslateblue: 8087790,
                mediumspringgreen: 64154,
                mediumturquoise: 4772300,
                mediumvioletred: 13047173,
                midnightblue: 1644912,
                mintcream: 16121850,
                mistyrose: 16770273,
                moccasin: 16770229,
                navajowhite: 16768685,
                navy: 128,
                oldlace: 16643558,
                olive: 8421376,
                olivedrab: 7048739,
                orange: 16753920,
                orangered: 16729344,
                orchid: 14315734,
                palegoldenrod: 15657130,
                palegreen: 10025880,
                paleturquoise: 11529966,
                palevioletred: 14381203,
                papayawhip: 16773077,
                peachpuff: 16767673,
                peru: 13468991,
                pink: 16761035,
                plum: 14524637,
                powderblue: 11591910,
                purple: 8388736,
                rebeccapurple: 6697881,
                red: 16711680,
                rosybrown: 12357519,
                royalblue: 4286945,
                saddlebrown: 9127187,
                salmon: 16416882,
                sandybrown: 16032864,
                seagreen: 3050327,
                seashell: 16774638,
                sienna: 10506797,
                silver: 12632256,
                skyblue: 8900331,
                slateblue: 6970061,
                slategray: 7372944,
                slategrey: 7372944,
                snow: 16775930,
                springgreen: 65407,
                steelblue: 4620980,
                tan: 13808780,
                teal: 32896,
                thistle: 14204888,
                tomato: 16737095,
                turquoise: 4251856,
                violet: 15631086,
                wheat: 16113331,
                white: 16777215,
                whitesmoke: 16119285,
                yellow: 16776960,
                yellowgreen: 10145074
            });

            function d3_functor(t) {
                return "function" == typeof t ? t : function () {
                    return t
                }
            }

            function d3_xhrType(r) {
                return function (t, e, n) {
                    return 2 === arguments.length && "function" == typeof e && (n = e, e = null), d3_xhr(t, e, r, n)
                }
            }

            function d3_xhr(o, a, i, t) {
                var n, l = {}, s = L.dispatch("beforesend", "progress", "load", "error"), u = {},
                    c = new XMLHttpRequest, p = null;

                function respond() {
                    var t, e, n, r = c.status;
                    if (!r && ((n = (e = c).responseType) && "text" !== n ? e.response : e.responseText) || 200 <= r && r < 300 || 304 === r) {
                        try {
                            t = i.call(l, c)
                        } catch (t) {
                            return void s.error.call(l, t)
                        }
                        s.load.call(l, t)
                    } else s.error.call(l, c)
                }

                return !this.XDomainRequest || "withCredentials" in c || !/^(http(s)?:)?\/\//.test(o) || (c = new XDomainRequest), "onload" in c ? c.onload = c.onerror = respond : c.onreadystatechange = function () {
                    3 < c.readyState && respond()
                }, c.onprogress = function (t) {
                    var e = L.event;
                    L.event = t;
                    try {
                        s.progress.call(l, c)
                    } finally {
                        L.event = e
                    }
                }, l.header = function (t, e) {
                    return t = (t + "").toLowerCase(), arguments.length < 2 ? u[t] : (null == e ? delete u[t] : u[t] = e + "", l)
                }, l.mimeType = function (t) {
                    return arguments.length ? (a = null == t ? null : t + "", l) : a
                }, l.responseType = function (t) {
                    return arguments.length ? (p = t, l) : p
                }, l.response = function (t) {
                    return i = t, l
                }, ["get", "post"].forEach(function (t) {
                    l[t] = function () {
                        return l.send.apply(l, [t].concat(d(arguments)))
                    }
                }), l.send = function (t, e, n) {
                    if (2 === arguments.length && "function" == typeof e && (n = e, e = null), c.open(t, o, !0), null == a || "accept" in u || (u.accept = a + ",*/*"), c.setRequestHeader) for (var r in u) c.setRequestHeader(r, u[r]);
                    return null != a && c.overrideMimeType && c.overrideMimeType(a), null != p && (c.responseType = p), null != n && l.on("error", n).on("load", function (t) {
                        n(null, t)
                    }), s.beforesend.call(l, c), c.send(null == e ? null : e), l
                }, l.abort = function () {
                    return c.abort(), l
                }, L.rebind(l, s, "on"), null == t ? l : l.get(1 === (n = t).length ? function (t, e) {
                    n(null == t ? e : null)
                } : n)
            }

            F.forEach(function (t, e) {
                F.set(t, d3_rgbNumber(e))
            }), L.functor = d3_functor, L.xhr = d3_xhrType(d3_identity), L.dsv = function (o, a) {
                var e = new RegExp('["' + o + "\n]"), p = o.charCodeAt(0);

                function dsv(t, e, n) {
                    arguments.length < 3 && (n = e, e = null);
                    var r = d3_xhr(t, a, null == e ? response : typedResponse(e), n);
                    return r.row = function (t) {
                        return arguments.length ? r.response(null == (e = t) ? response : typedResponse(t)) : e
                    }, r
                }

                function response(t) {
                    return dsv.parse(t.responseText)
                }

                function typedResponse(e) {
                    return function (t) {
                        return dsv.parse(t.responseText, e)
                    }
                }

                function formatRow(t) {
                    return t.map(formatValue).join(o)
                }

                function formatValue(t) {
                    return e.test(t) ? '"' + t.replace(/\"/g, '""') + '"' : t
                }

                return dsv.parse = function (t, r) {
                    var o;
                    return dsv.parseRows(t, function (t, e) {
                        if (o) return o(t, e - 1);
                        var n = new Function("d", "return {" + t.map(function (t, e) {
                            return JSON.stringify(t) + ": d[" + e + "]"
                        }).join(",") + "}");
                        o = r ? function (t, e) {
                            return r(n(t), e)
                        } : n
                    })
                }, dsv.parseRows = function (o, t) {
                    var e, a, i = {}, l = {}, n = [], s = o.length, u = 0, r = 0;

                    function token() {
                        if (s <= u) return l;
                        if (a) return a = !1, i;
                        var t = u;
                        if (34 === o.charCodeAt(t)) {
                            for (var e = t; e++ < s;) if (34 === o.charCodeAt(e)) {
                                if (34 !== o.charCodeAt(e + 1)) break;
                                ++e
                            }
                            return u = e + 2, 13 === (n = o.charCodeAt(e + 1)) ? (a = !0, 10 === o.charCodeAt(e + 2) && ++u) : 10 === n && (a = !0), o.slice(t + 1, e).replace(/""/g, '"')
                        }
                        for (; u < s;) {
                            var n, r = 1;
                            if (10 === (n = o.charCodeAt(u++))) a = !0; else if (13 === n) a = !0, 10 === o.charCodeAt(u) && (++u, ++r); else if (n !== p) continue;
                            return o.slice(t, u - r)
                        }
                        return o.slice(t)
                    }

                    for (; (e = token()) !== l;) {
                        for (var c = []; e !== i && e !== l;) c.push(e), e = token();
                        t && null == (c = t(c, r++)) || n.push(c)
                    }
                    return n
                }, dsv.format = function (t) {
                    if (Array.isArray(t[0])) return dsv.formatRows(t);
                    var n = new d3_Set, r = [];
                    return t.forEach(function (t) {
                        for (var e in t) n.has(e) || r.push(n.add(e))
                    }), [r.map(formatValue).join(o)].concat(t.map(function (e) {
                        return r.map(function (t) {
                            return formatValue(e[t])
                        }).join(o)
                    })).join("\n")
                }, dsv.formatRows = function (t) {
                    return t.map(formatRow).join("\n")
                }, dsv
            }, L.csv = L.dsv(",", "text/csv"), L.tsv = L.dsv("\t", "text/tab-separated-values");
            var Y, X, Z, J, $ = this[d3_vendorSymbol(this, "requestAnimationFrame")] || function (t) {
                setTimeout(t, 17)
            };

            function d3_timer(t, e, n) {
                var r = arguments.length;
                r < 2 && (e = 0), r < 3 && (n = Date.now());
                var o = {c: t, t: n + e, n: null};
                return X ? X.n = o : Y = o, X = o, Z || (J = clearTimeout(J), Z = 1, $(d3_timer_step)), o
            }

            function d3_timer_step() {
                var t = d3_timer_mark(), e = d3_timer_sweep() - t;
                24 < e ? (isFinite(e) && (clearTimeout(J), J = setTimeout(d3_timer_step, e)), Z = 0) : (Z = 1, $(d3_timer_step))
            }

            function d3_timer_mark() {
                for (var t = Date.now(), e = Y; e;) t >= e.t && e.c(t - e.t) && (e.c = null), e = e.n;
                return t
            }

            function d3_timer_sweep() {
                for (var t, e = Y, n = 1 / 0; e;) e = e.c ? (e.t < n && (n = e.t), (t = e).n) : t ? t.n = e.n : Y = e.n;
                return X = t, n
            }

            function d3_format_precision(t, e) {
                return e - (t ? Math.ceil(Math.log(t) / Math.LN10) : 1)
            }

            L.timer = function () {
                d3_timer.apply(this, arguments)
            }, L.timer.flush = function () {
                d3_timer_mark(), d3_timer_sweep()
            }, L.round = function (t, e) {
                return e ? Math.round(t * (e = Math.pow(10, e))) / e : Math.round(t)
            };
            var Q = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(function (t, e) {
                var n = Math.pow(10, 3 * E(8 - e));
                return {
                    scale: 8 < e ? function (t) {
                        return t / n
                    } : function (t) {
                        return t * n
                    }, symbol: t
                }
            });
            L.formatPrefix = function (t, e) {
                var n = 0;
                return (t = +t) && (t < 0 && (t *= -1), e && (t = L.round(t, d3_format_precision(t, e))), n = 1 + Math.floor(1e-12 + Math.log(t) / Math.LN10), n = Math.max(-24, Math.min(24, 3 * Math.floor((n - 1) / 3)))), Q[8 + n / 3]
            };
            var tt = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i, et = L.map({
                b: function (t) {
                    return t.toString(2)
                }, c: function (t) {
                    return String.fromCharCode(t)
                }, o: function (t) {
                    return t.toString(8)
                }, x: function (t) {
                    return t.toString(16)
                }, X: function (t) {
                    return t.toString(16).toUpperCase()
                }, g: function (t, e) {
                    return t.toPrecision(e)
                }, e: function (t, e) {
                    return t.toExponential(e)
                }, f: function (t, e) {
                    return t.toFixed(e)
                }, r: function (t, e) {
                    return (t = L.round(t, d3_format_precision(t, e))).toFixed(Math.max(0, Math.min(20, d3_format_precision(t * (1 + 1e-15), e))))
                }
            });

            function d3_format_typeDefault(t) {
                return t + ""
            }

            var nt = L.time = {}, rt = Date;

            function d3_date_utc() {
                this._ = new Date(1 < arguments.length ? Date.UTC.apply(this, arguments) : arguments[0])
            }

            d3_date_utc.prototype = {
                getDate: function () {
                    return this._.getUTCDate()
                }, getDay: function () {
                    return this._.getUTCDay()
                }, getFullYear: function () {
                    return this._.getUTCFullYear()
                }, getHours: function () {
                    return this._.getUTCHours()
                }, getMilliseconds: function () {
                    return this._.getUTCMilliseconds()
                }, getMinutes: function () {
                    return this._.getUTCMinutes()
                }, getMonth: function () {
                    return this._.getUTCMonth()
                }, getSeconds: function () {
                    return this._.getUTCSeconds()
                }, getTime: function () {
                    return this._.getTime()
                }, getTimezoneOffset: function () {
                    return 0
                }, valueOf: function () {
                    return this._.valueOf()
                }, setDate: function () {
                    ot.setUTCDate.apply(this._, arguments)
                }, setDay: function () {
                    ot.setUTCDay.apply(this._, arguments)
                }, setFullYear: function () {
                    ot.setUTCFullYear.apply(this._, arguments)
                }, setHours: function () {
                    ot.setUTCHours.apply(this._, arguments)
                }, setMilliseconds: function () {
                    ot.setUTCMilliseconds.apply(this._, arguments)
                }, setMinutes: function () {
                    ot.setUTCMinutes.apply(this._, arguments)
                }, setMonth: function () {
                    ot.setUTCMonth.apply(this._, arguments)
                }, setSeconds: function () {
                    ot.setUTCSeconds.apply(this._, arguments)
                }, setTime: function () {
                    ot.setTime.apply(this._, arguments)
                }
            };
            var ot = Date.prototype;

            function d3_time_interval(r, a, i) {
                function round(t) {
                    var e = r(t), n = offset(e, 1);
                    return t - e < n - t ? e : n
                }

                function ceil(t) {
                    return a(t = r(new rt(t - 1)), 1), t
                }

                function offset(t, e) {
                    return a(t = new rt(+t), e), t
                }

                function range(t, e, n) {
                    var r = ceil(t), o = [];
                    if (1 < n) for (; r < e;) i(r) % n || o.push(new Date(+r)), a(r, 1); else for (; r < e;) o.push(new Date(+r)), a(r, 1);
                    return o
                }

                (r.floor = r).round = round, r.ceil = ceil, r.offset = offset, r.range = range;
                var t = r.utc = d3_time_interval_utc(r);
                return (t.floor = t).round = d3_time_interval_utc(round), t.ceil = d3_time_interval_utc(ceil), t.offset = d3_time_interval_utc(offset), t.range = function (t, e, n) {
                    try {
                        var r = new (rt = d3_date_utc);
                        return r._ = t, range(r, e, n)
                    } finally {
                        rt = Date
                    }
                }, r
            }

            function d3_time_interval_utc(r) {
                return function (t, e) {
                    try {
                        var n = new (rt = d3_date_utc);
                        return n._ = t, r(n, e)._
                    } finally {
                        rt = Date
                    }
                }
            }

            nt.year = d3_time_interval(function (t) {
                return (t = nt.day(t)).setMonth(0, 1), t
            }, function (t, e) {
                t.setFullYear(t.getFullYear() + e)
            }, function (t) {
                return t.getFullYear()
            }), nt.years = nt.year.range, nt.years.utc = nt.year.utc.range, nt.day = d3_time_interval(function (t) {
                var e = new rt(2e3, 0);
                return e.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()), e
            }, function (t, e) {
                t.setDate(t.getDate() + e)
            }, function (t) {
                return t.getDate() - 1
            }), nt.days = nt.day.range, nt.days.utc = nt.day.utc.range, nt.dayOfYear = function (t) {
                var e = nt.year(t);
                return Math.floor((t - e - 6e4 * (t.getTimezoneOffset() - e.getTimezoneOffset())) / 864e5)
            }, ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function (t, n) {
                n = 7 - n;
                var e = nt[t] = d3_time_interval(function (t) {
                    return (t = nt.day(t)).setDate(t.getDate() - (t.getDay() + n) % 7), t
                }, function (t, e) {
                    t.setDate(t.getDate() + 7 * Math.floor(e))
                }, function (t) {
                    var e = nt.year(t).getDay();
                    return Math.floor((nt.dayOfYear(t) + (e + n) % 7) / 7) - (e !== n)
                });
                nt[t + "s"] = e.range, nt[t + "s"].utc = e.utc.range, nt[t + "OfYear"] = function (t) {
                    var e = nt.year(t).getDay();
                    return Math.floor((nt.dayOfYear(t) + (e + n) % 7) / 7)
                }
            }), nt.week = nt.sunday, nt.weeks = nt.sunday.range, nt.weeks.utc = nt.sunday.utc.range, nt.weekOfYear = nt.sundayOfYear;
            var at = {"-": "", _: " ", 0: "0"}, it = /^\s*\d+/, lt = /^%/;

            function d3_time_formatPad(t, e, n) {
                var r = t < 0 ? "-" : "", o = (r ? -t : t) + "", a = o.length;
                return r + (a < n ? new Array(n - a + 1).join(e) + o : o)
            }

            function d3_time_formatRe(t) {
                return new RegExp("^(?:" + t.map(L.requote).join("|") + ")", "i")
            }

            function d3_time_formatLookup(t) {
                for (var e = new d3_Map, n = -1, r = t.length; ++n < r;) e.set(t[n].toLowerCase(), n);
                return e
            }

            function d3_time_parseWeekdayNumber(t, e, n) {
                it.lastIndex = 0;
                var r = it.exec(e.slice(n, n + 1));
                return r ? (t.w = +r[0], n + r[0].length) : -1
            }

            function d3_time_parseWeekNumberSunday(t, e, n) {
                it.lastIndex = 0;
                var r = it.exec(e.slice(n));
                return r ? (t.U = +r[0], n + r[0].length) : -1
            }

            function d3_time_parseWeekNumberMonday(t, e, n) {
                it.lastIndex = 0;
                var r = it.exec(e.slice(n));
                return r ? (t.W = +r[0], n + r[0].length) : -1
            }

            function d3_time_parseFullYear(t, e, n) {
                it.lastIndex = 0;
                var r = it.exec(e.slice(n, n + 4));
                return r ? (t.y = +r[0], n + r[0].length) : -1
            }

            function d3_time_parseYear(t, e, n) {
                it.lastIndex = 0;
                var r, o = it.exec(e.slice(n, n + 2));
                return o ? (t.y = (r = +o[0]) + (68 < r ? 1900 : 2e3), n + o[0].length) : -1
            }

            function d3_time_parseZone(t, e, n) {
                return /^[+-]\d{4}$/.test(e = e.slice(n, n + 5)) ? (t.Z = -e, n + 5) : -1
            }

            function d3_time_parseMonthNumber(t, e, n) {
                it.lastIndex = 0;
                var r = it.exec(e.slice(n, n + 2));
                return r ? (t.m = r[0] - 1, n + r[0].length) : -1
            }

            function d3_time_parseDay(t, e, n) {
                it.lastIndex = 0;
                var r = it.exec(e.slice(n, n + 2));
                return r ? (t.d = +r[0], n + r[0].length) : -1
            }

            function d3_time_parseDayOfYear(t, e, n) {
                it.lastIndex = 0;
                var r = it.exec(e.slice(n, n + 3));
                return r ? (t.j = +r[0], n + r[0].length) : -1
            }

            function d3_time_parseHour24(t, e, n) {
                it.lastIndex = 0;
                var r = it.exec(e.slice(n, n + 2));
                return r ? (t.H = +r[0], n + r[0].length) : -1
            }

            function d3_time_parseMinutes(t, e, n) {
                it.lastIndex = 0;
                var r = it.exec(e.slice(n, n + 2));
                return r ? (t.M = +r[0], n + r[0].length) : -1
            }

            function d3_time_parseSeconds(t, e, n) {
                it.lastIndex = 0;
                var r = it.exec(e.slice(n, n + 2));
                return r ? (t.S = +r[0], n + r[0].length) : -1
            }

            function d3_time_parseMilliseconds(t, e, n) {
                it.lastIndex = 0;
                var r = it.exec(e.slice(n, n + 3));
                return r ? (t.L = +r[0], n + r[0].length) : -1
            }

            function d3_time_zone(t) {
                var e = t.getTimezoneOffset(), n = 0 < e ? "-" : "+", r = E(e) / 60 | 0, o = E(e) % 60;
                return n + d3_time_formatPad(r, "0", 2) + d3_time_formatPad(o, "0", 2)
            }

            function d3_time_parseLiteralPercent(t, e, n) {
                lt.lastIndex = 0;
                var r = lt.exec(e.slice(n, n + 1));
                return r ? n + r[0].length : -1
            }

            function d3_time_formatMulti(r) {
                for (var t = r.length, e = -1; ++e < t;) r[e][0] = this(r[e][0]);
                return function (t) {
                    for (var e = 0, n = r[e]; !n[1](t);) n = r[++e];
                    return n[0](t)
                }
            }

            L.locale = function (t) {
                return {
                    numberFormat: (e = t, P = e.decimal, l = e.thousands, s = e.grouping, r = e.currency, w = s && l ? function (t, e) {
                        for (var n = t.length, r = [], o = 0, a = s[0], i = 0; 0 < n && 0 < a && (e < i + a + 1 && (a = Math.max(1, e - i)), r.push(t.substring(n -= a, n + a)), !((i += a + 1) > e));) a = s[o = (o + 1) % s.length];
                        return r.reverse().join(l)
                    } : d3_identity, function (t) {
                        var e = tt.exec(t), c = e[1] || " ", p = e[2] || ">", d = e[3] || "-", n = e[4] || "", _ = e[5],
                            f = +e[6], h = e[7], g = e[8], y = e[9], m = 1, v = "", b = "", M = !1, x = !0;
                        switch (g && (g = +g.substring(1)), (_ || "0" === c && "=" === p) && (_ = c = "0", p = "="), y) {
                            case"n":
                                h = !0, y = "g";
                                break;
                            case"%":
                                m = 100, b = "%", y = "f";
                                break;
                            case"p":
                                m = 100, b = "%", y = "r";
                                break;
                            case"b":
                            case"o":
                            case"x":
                            case"X":
                                "#" === n && (v = "0" + y.toLowerCase());
                            case"c":
                                x = !1;
                            case"d":
                                M = !0, g = 0;
                                break;
                            case"s":
                                m = -1, y = "r"
                        }
                        "$" === n && (v = r[0], b = r[1]), "r" != y || g || (y = "g"), null != g && ("g" == y ? g = Math.max(1, Math.min(21, g)) : "e" != y && "f" != y || (g = Math.max(0, Math.min(20, g)))), y = et.get(y) || d3_format_typeDefault;
                        var T = _ && h;
                        return function (t) {
                            var e = b;
                            if (M && t % 1) return "";
                            var n = t < 0 || 0 === t && 1 / t < 0 ? (t = -t, "-") : "-" === d ? "" : d;
                            if (m < 0) {
                                var r = L.formatPrefix(t, g);
                                t = r.scale(t), e = r.symbol + b
                            } else t *= m;
                            var o, a, i = (t = y(t, g)).lastIndexOf(".");
                            if (i < 0) {
                                var l = x ? t.lastIndexOf("e") : -1;
                                a = l < 0 ? (o = t, "") : (o = t.substring(0, l), t.substring(l))
                            } else o = t.substring(0, i), a = P + t.substring(i + 1);
                            !_ && h && (o = w(o, 1 / 0));
                            var s = v.length + o.length + a.length + (T ? 0 : n.length),
                                u = s < f ? new Array(s = f - s + 1).join(c) : "";
                            return T && (o = w(u + o, u.length ? f - a.length : 1 / 0)), n += v, t = o + a, ("<" === p ? n + t + u : ">" === p ? u + n + t : "^" === p ? u.substring(0, s >>= 1) + n + t + u.substring(s) : n + (T ? t : u + t)) + e
                        }
                    }), timeFormat: function (t) {
                        var e = t.dateTime, n = t.date, r = t.time, o = t.periods, a = t.days, i = t.shortDays,
                            l = t.months, s = t.shortMonths;

                        function d3_time_format(l) {
                            var s = l.length;

                            function format(t) {
                                for (var e, n, r, o = [], a = -1, i = 0; ++a < s;) 37 === l.charCodeAt(a) && (o.push(l.slice(i, a)), null != (n = at[e = l.charAt(++a)]) && (e = l.charAt(++a)), (r = m[e]) && (e = r(t, null == n ? "e" === e ? " " : "0" : n)), o.push(e), i = a + 1);
                                return o.push(l.slice(i, a)), o.join("")
                            }

                            return format.parse = function (t) {
                                var e = {y: 1900, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0, Z: null};
                                if (d3_time_parse(e, l, t, 0) != t.length) return null;
                                "p" in e && (e.H = e.H % 12 + 12 * e.p);
                                var n = null != e.Z && rt !== d3_date_utc, r = new (n ? d3_date_utc : rt);
                                return "j" in e ? r.setFullYear(e.y, 0, e.j) : "W" in e || "U" in e ? ("w" in e || (e.w = "W" in e ? 1 : 0), r.setFullYear(e.y, 0, 1), r.setFullYear(e.y, 0, "W" in e ? (e.w + 6) % 7 + 7 * e.W - (r.getDay() + 5) % 7 : e.w + 7 * e.U - (r.getDay() + 6) % 7)) : r.setFullYear(e.y, e.m, e.d), r.setHours(e.H + (e.Z / 100 | 0), e.M + e.Z % 100, e.S, e.L), n ? r._ : r
                            }, format.toString = function () {
                                return l
                            }, format
                        }

                        function d3_time_parse(t, e, n, r) {
                            for (var o, a, i, l = 0, s = e.length, u = n.length; l < s;) {
                                if (u <= r) return -1;
                                if (37 === (o = e.charCodeAt(l++))) {
                                    if (i = e.charAt(l++), !(a = v[i in at ? e.charAt(l++) : i]) || (r = a(t, n, r)) < 0) return -1
                                } else if (o != n.charCodeAt(r++)) return -1
                            }
                            return r
                        }

                        d3_time_format.multi = (d3_time_format.utc = function (t) {
                            var n = d3_time_format(t);

                            function format(t) {
                                try {
                                    var e = new (rt = d3_date_utc);
                                    return e._ = t, n(e)
                                } finally {
                                    rt = Date
                                }
                            }

                            return format.parse = function (t) {
                                try {
                                    rt = d3_date_utc;
                                    var e = n.parse(t);
                                    return e && e._
                                } finally {
                                    rt = Date
                                }
                            }, format.toString = n.toString, format
                        }).multi = d3_time_formatMulti;
                        var u = L.map(), c = d3_time_formatRe(a), p = d3_time_formatLookup(a), d = d3_time_formatRe(i),
                            _ = d3_time_formatLookup(i), f = d3_time_formatRe(l), h = d3_time_formatLookup(l),
                            g = d3_time_formatRe(s), y = d3_time_formatLookup(s);
                        o.forEach(function (t, e) {
                            u.set(t.toLowerCase(), e)
                        });
                        var m = {
                            a: function (t) {
                                return i[t.getDay()]
                            }, A: function (t) {
                                return a[t.getDay()]
                            }, b: function (t) {
                                return s[t.getMonth()]
                            }, B: function (t) {
                                return l[t.getMonth()]
                            }, c: d3_time_format(e), d: function (t, e) {
                                return d3_time_formatPad(t.getDate(), e, 2)
                            }, e: function (t, e) {
                                return d3_time_formatPad(t.getDate(), e, 2)
                            }, H: function (t, e) {
                                return d3_time_formatPad(t.getHours(), e, 2)
                            }, I: function (t, e) {
                                return d3_time_formatPad(t.getHours() % 12 || 12, e, 2)
                            }, j: function (t, e) {
                                return d3_time_formatPad(1 + nt.dayOfYear(t), e, 3)
                            }, L: function (t, e) {
                                return d3_time_formatPad(t.getMilliseconds(), e, 3)
                            }, m: function (t, e) {
                                return d3_time_formatPad(t.getMonth() + 1, e, 2)
                            }, M: function (t, e) {
                                return d3_time_formatPad(t.getMinutes(), e, 2)
                            }, p: function (t) {
                                return o[+(12 <= t.getHours())]
                            }, S: function (t, e) {
                                return d3_time_formatPad(t.getSeconds(), e, 2)
                            }, U: function (t, e) {
                                return d3_time_formatPad(nt.sundayOfYear(t), e, 2)
                            }, w: function (t) {
                                return t.getDay()
                            }, W: function (t, e) {
                                return d3_time_formatPad(nt.mondayOfYear(t), e, 2)
                            }, x: d3_time_format(n), X: d3_time_format(r), y: function (t, e) {
                                return d3_time_formatPad(t.getFullYear() % 100, e, 2)
                            }, Y: function (t, e) {
                                return d3_time_formatPad(t.getFullYear() % 1e4, e, 4)
                            }, Z: d3_time_zone, "%": function () {
                                return "%"
                            }
                        }, v = {
                            a: function (t, e, n) {
                                d.lastIndex = 0;
                                var r = d.exec(e.slice(n));
                                return r ? (t.w = _.get(r[0].toLowerCase()), n + r[0].length) : -1
                            },
                            A: function (t, e, n) {
                                c.lastIndex = 0;
                                var r = c.exec(e.slice(n));
                                return r ? (t.w = p.get(r[0].toLowerCase()), n + r[0].length) : -1
                            },
                            b: function (t, e, n) {
                                g.lastIndex = 0;
                                var r = g.exec(e.slice(n));
                                return r ? (t.m = y.get(r[0].toLowerCase()), n + r[0].length) : -1
                            },
                            B: function (t, e, n) {
                                f.lastIndex = 0;
                                var r = f.exec(e.slice(n));
                                return r ? (t.m = h.get(r[0].toLowerCase()), n + r[0].length) : -1
                            },
                            c: function (t, e, n) {
                                return d3_time_parse(t, m.c.toString(), e, n)
                            },
                            d: d3_time_parseDay,
                            e: d3_time_parseDay,
                            H: d3_time_parseHour24,
                            I: d3_time_parseHour24,
                            j: d3_time_parseDayOfYear,
                            L: d3_time_parseMilliseconds,
                            m: d3_time_parseMonthNumber,
                            M: d3_time_parseMinutes,
                            p: function (t, e, n) {
                                var r = u.get(e.slice(n, n += 2).toLowerCase());
                                return null == r ? -1 : (t.p = r, n)
                            },
                            S: d3_time_parseSeconds,
                            U: d3_time_parseWeekNumberSunday,
                            w: d3_time_parseWeekdayNumber,
                            W: d3_time_parseWeekNumberMonday,
                            x: function (t, e, n) {
                                return d3_time_parse(t, m.x.toString(), e, n)
                            },
                            X: function (t, e, n) {
                                return d3_time_parse(t, m.X.toString(), e, n)
                            },
                            y: d3_time_parseYear,
                            Y: d3_time_parseFullYear,
                            Z: d3_time_parseZone,
                            "%": d3_time_parseLiteralPercent
                        };
                        return d3_time_format
                    }(t)
                };
                var e, P, l, s, r, w
            };
            var st = L.locale({
                decimal: ".",
                thousands: ",",
                grouping: [3],
                currency: ["$", ""],
                dateTime: "%a %b %e %X %Y",
                date: "%m/%d/%Y",
                time: "%H:%M:%S",
                periods: ["AM", "PM"],
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            });

            function d3_adder() {
            }

            L.format = st.numberFormat, L.geo = {}, d3_adder.prototype = {
                s: 0, t: 0, add: function (t) {
                    d3_adderSum(t, this.t, ut), d3_adderSum(ut.s, this.s, this), this.s ? this.t += ut.t : this.s = ut.t
                }, reset: function () {
                    this.s = this.t = 0
                }, valueOf: function () {
                    return this.s
                }
            };
            var ut = new d3_adder;

            function d3_adderSum(t, e, n) {
                var r = n.s = t + e, o = r - t, a = r - o;
                n.t = t - a + (e - o)
            }

            function d3_geo_streamGeometry(t, e) {
                t && pt.hasOwnProperty(t.type) && pt[t.type](t, e)
            }

            L.geo.stream = function (t, e) {
                t && ct.hasOwnProperty(t.type) ? ct[t.type](t, e) : d3_geo_streamGeometry(t, e)
            };
            var ct = {
                Feature: function (t, e) {
                    d3_geo_streamGeometry(t.geometry, e)
                }, FeatureCollection: function (t, e) {
                    for (var n = t.features, r = -1, o = n.length; ++r < o;) d3_geo_streamGeometry(n[r].geometry, e)
                }
            }, pt = {
                Sphere: function (t, e) {
                    e.sphere()
                }, Point: function (t, e) {
                    t = t.coordinates, e.point(t[0], t[1], t[2])
                }, MultiPoint: function (t, e) {
                    for (var n = t.coordinates, r = -1, o = n.length; ++r < o;) t = n[r], e.point(t[0], t[1], t[2])
                }, LineString: function (t, e) {
                    d3_geo_streamLine(t.coordinates, e, 0)
                }, MultiLineString: function (t, e) {
                    for (var n = t.coordinates, r = -1, o = n.length; ++r < o;) d3_geo_streamLine(n[r], e, 0)
                }, Polygon: function (t, e) {
                    d3_geo_streamPolygon(t.coordinates, e)
                }, MultiPolygon: function (t, e) {
                    for (var n = t.coordinates, r = -1, o = n.length; ++r < o;) d3_geo_streamPolygon(n[r], e)
                }, GeometryCollection: function (t, e) {
                    for (var n = t.geometries, r = -1, o = n.length; ++r < o;) d3_geo_streamGeometry(n[r], e)
                }
            };

            function d3_geo_streamLine(t, e, n) {
                var r, o = -1, a = t.length - n;
                for (e.lineStart(); ++o < a;) r = t[o], e.point(r[0], r[1], r[2]);
                e.lineEnd()
            }

            function d3_geo_streamPolygon(t, e) {
                var n = -1, r = t.length;
                for (e.polygonStart(); ++n < r;) d3_geo_streamLine(t[n], e, 1);
                e.polygonEnd()
            }

            L.geo.area = function (t) {
                return dt = 0, L.geo.stream(t, wt), dt
            };
            var dt, _t, ft, ht, gt, yt, mt, vt, bt, Mt, xt, Tt, Pt = new d3_adder, wt = {
                sphere: function () {
                    dt += 4 * V
                }, point: d3_noop, lineStart: d3_noop, lineEnd: d3_noop, polygonStart: function () {
                    Pt.reset(), wt.lineStart = d3_geo_areaRingStart
                }, polygonEnd: function () {
                    var t = 2 * Pt;
                    dt += t < 0 ? 4 * V + t : t, wt.lineStart = wt.lineEnd = wt.point = d3_noop
                }
            };

            function d3_geo_areaRingStart() {
                var n, r, c, p, d;

                function nextPoint(t, e) {
                    e = e * k / 2 + V / 4;
                    var n = (t *= k) - c, r = 0 <= n ? 1 : -1, o = r * n, a = Math.cos(e), i = Math.sin(e), l = d * i,
                        s = p * a + l * Math.cos(o), u = l * r * Math.sin(o);
                    Pt.add(Math.atan2(u, s)), c = t, p = a, d = i
                }

                wt.point = function (t, e) {
                    wt.point = nextPoint, c = (n = t) * k, p = Math.cos(e = (r = e) * k / 2 + V / 4), d = Math.sin(e)
                }, wt.lineEnd = function () {
                    nextPoint(n, r)
                }
            }

            function d3_geo_cartesian(t) {
                var e = t[0], n = t[1], r = Math.cos(n);
                return [r * Math.cos(e), r * Math.sin(e), Math.sin(n)]
            }

            function d3_geo_cartesianDot(t, e) {
                return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
            }

            function d3_geo_cartesianCross(t, e) {
                return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
            }

            function d3_geo_cartesianAdd(t, e) {
                t[0] += e[0], t[1] += e[1], t[2] += e[2]
            }

            function d3_geo_cartesianScale(t, e) {
                return [t[0] * e, t[1] * e, t[2] * e]
            }

            function d3_geo_cartesianNormalize(t) {
                var e = Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
                t[0] /= e, t[1] /= e, t[2] /= e
            }

            function d3_geo_spherical(t) {
                return [Math.atan2(t[1], t[0]), d3_asin(t[2])]
            }

            function d3_geo_sphericalEqual(t, e) {
                return E(t[0] - e[0]) < G && E(t[1] - e[1]) < G
            }

            L.geo.bounds = function () {
                var c, p, d, _, f, r, o, h, a, s, u, g = {
                    point: point, lineStart: lineStart, lineEnd: lineEnd, polygonStart: function () {
                        g.point = ringPoint, g.lineStart = ringStart, g.lineEnd = ringEnd, a = 0, wt.polygonStart()
                    }, polygonEnd: function () {
                        wt.polygonEnd(), g.point = point, g.lineStart = lineStart, g.lineEnd = lineEnd, Pt < 0 ? (c = -(d = 180), p = -(_ = 90)) : G < a ? _ = 90 : a < -G && (p = -90), u[0] = c, u[1] = d
                    }
                };

                function point(t, e) {
                    s.push(u = [c = t, d = t]), e < p && (p = e), _ < e && (_ = e)
                }

                function linePoint(t, e) {
                    var n = d3_geo_cartesian([t * k, e * k]);
                    if (h) {
                        var r = d3_geo_cartesianCross(h, n), o = d3_geo_cartesianCross([r[1], -r[0], 0], r);
                        d3_geo_cartesianNormalize(o), o = d3_geo_spherical(o);
                        var a = t - f, i = 0 < a ? 1 : -1, l = o[0] * D * i, s = 180 < E(a);
                        if (s ^ (i * f < l && l < i * t)) {
                            var u = o[1] * D;
                            _ < u && (_ = u)
                        } else if (s ^ (i * f < (l = (l + 360) % 360 - 180) && l < i * t)) {
                            (u = -o[1] * D) < p && (p = u)
                        } else e < p && (p = e), _ < e && (_ = e);
                        s ? t < f ? angle(c, t) > angle(c, d) && (d = t) : angle(t, d) > angle(c, d) && (c = t) : c <= d ? (t < c && (c = t), d < t && (d = t)) : f < t ? angle(c, t) > angle(c, d) && (d = t) : angle(t, d) > angle(c, d) && (c = t)
                    } else point(t, e);
                    h = n, f = t
                }

                function lineStart() {
                    g.point = linePoint
                }

                function lineEnd() {
                    u[0] = c, u[1] = d, g.point = point, h = null
                }

                function ringPoint(t, e) {
                    if (h) {
                        var n = t - f;
                        a += 180 < E(n) ? n + (0 < n ? 360 : -360) : n
                    } else r = t, o = e;
                    wt.point(t, e), linePoint(t, e)
                }

                function ringStart() {
                    wt.lineStart()
                }

                function ringEnd() {
                    ringPoint(r, o), wt.lineEnd(), E(a) > G && (c = -(d = 180)), u[0] = c, u[1] = d, h = null
                }

                function angle(t, e) {
                    return (e -= t) < 0 ? e + 360 : e
                }

                function compareRanges(t, e) {
                    return t[0] - e[0]
                }

                function withinRange(t, e) {
                    return e[0] <= e[1] ? e[0] <= t && t <= e[1] : t < e[0] || e[1] < t
                }

                return function (t) {
                    if (_ = d = -(c = p = 1 / 0), s = [], L.geo.stream(t, g), o = s.length) {
                        s.sort(compareRanges);
                        for (var e = 1, n = [l = s[0]]; e < o; ++e) withinRange((a = s[e])[0], l) || withinRange(a[1], l) ? (angle(l[0], a[1]) > angle(l[0], l[1]) && (l[1] = a[1]), angle(a[0], l[1]) > angle(l[0], l[1]) && (l[0] = a[0])) : n.push(l = a);
                        for (var r, o, a, i = -1 / 0, l = (e = 0, n[o = n.length - 1]); e <= o; l = a, ++e) a = n[e], (r = angle(l[1], a[0])) > i && (i = r, c = a[0], d = l[1])
                    }
                    return s = u = null, c === 1 / 0 || p === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[c, p], [d, _]]
                }
            }(), L.geo.centroid = function (t) {
                _t = ft = ht = gt = yt = mt = vt = bt = Mt = xt = Tt = 0, L.geo.stream(t, Dt);
                var e = Mt, n = xt, r = Tt, o = e * e + n * n + r * r;
                return o < w && (e = mt, n = vt, r = bt, ft < G && (e = ht, n = gt, r = yt), (o = e * e + n * n + r * r) < w) ? [NaN, NaN] : [Math.atan2(n, e) * D, d3_asin(r / Math.sqrt(o)) * D]
            };
            var Dt = {
                sphere: d3_noop,
                point: d3_geo_centroidPoint,
                lineStart: d3_geo_centroidLineStart,
                lineEnd: d3_geo_centroidLineEnd,
                polygonStart: function () {
                    Dt.lineStart = d3_geo_centroidRingStart
                },
                polygonEnd: function () {
                    Dt.lineStart = d3_geo_centroidLineStart
                }
            };

            function d3_geo_centroidPoint(t, e) {
                t *= k;
                var n = Math.cos(e *= k);
                d3_geo_centroidPointXYZ(n * Math.cos(t), n * Math.sin(t), Math.sin(e))
            }

            function d3_geo_centroidPointXYZ(t, e, n) {
                ht += (t - ht) / ++_t, gt += (e - gt) / _t, yt += (n - yt) / _t
            }

            function d3_geo_centroidLineStart() {
                var l, s, u;

                function nextPoint(t, e) {
                    t *= k;
                    var n = Math.cos(e *= k), r = n * Math.cos(t), o = n * Math.sin(t), a = Math.sin(e),
                        i = Math.atan2(Math.sqrt((i = s * a - u * o) * i + (i = u * r - l * a) * i + (i = l * o - s * r) * i), l * r + s * o + u * a);
                    ft += i, mt += i * (l + (l = r)), vt += i * (s + (s = o)), bt += i * (u + (u = a)), d3_geo_centroidPointXYZ(l, s, u)
                }

                Dt.point = function (t, e) {
                    t *= k;
                    var n = Math.cos(e *= k);
                    l = n * Math.cos(t), s = n * Math.sin(t), u = Math.sin(e), Dt.point = nextPoint, d3_geo_centroidPointXYZ(l, s, u)
                }
            }

            function d3_geo_centroidLineEnd() {
                Dt.point = d3_geo_centroidPoint
            }

            function d3_geo_centroidRingStart() {
                var r, o, _, f, h;

                function nextPoint(t, e) {
                    t *= k;
                    var n = Math.cos(e *= k), r = n * Math.cos(t), o = n * Math.sin(t), a = Math.sin(e),
                        i = f * a - h * o, l = h * r - _ * a, s = _ * o - f * r, u = Math.sqrt(i * i + l * l + s * s),
                        c = _ * r + f * o + h * a, p = u && -d3_acos(c) / u, d = Math.atan2(u, c);
                    Mt += p * i, xt += p * l, Tt += p * s, ft += d, mt += d * (_ + (_ = r)), vt += d * (f + (f = o)), bt += d * (h + (h = a)), d3_geo_centroidPointXYZ(_, f, h)
                }

                Dt.point = function (t, e) {
                    r = t, o = e, Dt.point = nextPoint, t *= k;
                    var n = Math.cos(e *= k);
                    _ = n * Math.cos(t), f = n * Math.sin(t), h = Math.sin(e), d3_geo_centroidPointXYZ(_, f, h)
                }, Dt.lineEnd = function () {
                    nextPoint(r, o), Dt.lineEnd = d3_geo_centroidLineEnd, Dt.point = d3_geo_centroidPoint
                }
            }

            function d3_geo_compose(n, r) {
                function compose(t, e) {
                    return t = n(t, e), r(t[0], t[1])
                }

                return n.invert && r.invert && (compose.invert = function (t, e) {
                    return (t = r.invert(t, e)) && n.invert(t[0], t[1])
                }), compose
            }

            function d3_true() {
                return !0
            }

            function d3_geo_clipPolygon(t, e, n, r, l) {
                var s = [], u = [];
                if (t.forEach(function (t) {
                    if (!((e = t.length - 1) <= 0)) {
                        var e, n = t[0], r = t[e];
                        if (d3_geo_sphericalEqual(n, r)) {
                            l.lineStart();
                            for (var o = 0; o < e; ++o) l.point((n = t[o])[0], n[1]);
                            l.lineEnd()
                        } else {
                            var a = new d3_geo_clipPolygonIntersection(n, t, null, !0),
                                i = new d3_geo_clipPolygonIntersection(n, null, a, !1);
                            a.o = i, s.push(a), u.push(i), i = new d3_geo_clipPolygonIntersection(r, null, a = new d3_geo_clipPolygonIntersection(r, t, null, !1), !0), a.o = i, s.push(a), u.push(i)
                        }
                    }
                }), u.sort(e), d3_geo_clipPolygonLinkCircular(s), d3_geo_clipPolygonLinkCircular(u), s.length) {
                    for (var o = 0, a = n, i = u.length; o < i; ++o) u[o].e = a = !a;
                    for (var c, p, d = s[0]; ;) {
                        for (var _ = d, f = !0; _.v;) if ((_ = _.n) === d) return;
                        c = _.z, l.lineStart();
                        do {
                            if (_.v = _.o.v = !0, _.e) {
                                if (f) for (o = 0, i = c.length; o < i; ++o) l.point((p = c[o])[0], p[1]); else r(_.x, _.n.x, 1, l);
                                _ = _.n
                            } else {
                                if (f) for (o = (c = _.p.z).length - 1; 0 <= o; --o) l.point((p = c[o])[0], p[1]); else r(_.x, _.p.x, -1, l);
                                _ = _.p
                            }
                            c = (_ = _.o).z, f = !f
                        } while (!_.v);
                        l.lineEnd()
                    }
                }
            }

            function d3_geo_clipPolygonLinkCircular(t) {
                if (e = t.length) {
                    for (var e, n, r = 0, o = t[0]; ++r < e;) o.n = n = t[r], n.p = o, o = n;
                    o.n = n = t[0], n.p = o
                }
            }

            function d3_geo_clipPolygonIntersection(t, e, n, r) {
                this.x = t, this.z = e, this.o = n, this.e = r, this.v = !1, this.n = this.p = null
            }

            function d3_geo_clip(a, t, _, f) {
                return function (r, i) {
                    var l, o = t(i), e = r.invert(f[0], f[1]), n = {
                        point: point, lineStart: lineStart, lineEnd: lineEnd, polygonStart: function () {
                            n.point = pointRing, n.lineStart = ringStart, n.lineEnd = ringEnd, l = [], s = []
                        }, polygonEnd: function () {
                            n.point = point, n.lineStart = lineStart, n.lineEnd = lineEnd, l = L.merge(l);
                            var t = function (t, e) {
                                var n = t[0], r = t[1], o = [Math.sin(n), -Math.cos(n), 0], a = 0, i = 0;
                                Pt.reset();
                                for (var l = 0, s = e.length; l < s; ++l) {
                                    var u = e[l], c = u.length;
                                    if (c) for (var p = u[0], d = p[0], _ = p[1] / 2 + V / 4, f = Math.sin(_), h = Math.cos(_), g = 1; ;) {
                                        g === c && (g = 0);
                                        var y = (t = u[g])[0], m = t[1] / 2 + V / 4, v = Math.sin(m), b = Math.cos(m),
                                            M = y - d, x = 0 <= M ? 1 : -1, T = x * M, P = V < T, w = f * v;
                                        if (Pt.add(Math.atan2(w * x * Math.sin(T), h * b + w * Math.cos(T))), a += P ? M + x * N : M, P ^ n <= d ^ n <= y) {
                                            var D = d3_geo_cartesianCross(d3_geo_cartesian(p), d3_geo_cartesian(t));
                                            d3_geo_cartesianNormalize(D);
                                            var k = d3_geo_cartesianCross(o, D);
                                            d3_geo_cartesianNormalize(k);
                                            var S = (P ^ 0 <= M ? -1 : 1) * d3_asin(k[2]);
                                            (S < r || r === S && (D[0] || D[1])) && (i += P ^ 0 <= M ? 1 : -1)
                                        }
                                        if (!g++) break;
                                        d = y, f = v, h = b, p = t
                                    }
                                }
                                return (a < -G || a < G && Pt < -G) ^ 1 & i
                            }(e, s);
                            l.length ? (d || (i.polygonStart(), d = !0), d3_geo_clipPolygon(l, d3_geo_clipSort, t, _, i)) : t && (d || (i.polygonStart(), d = !0), i.lineStart(), _(null, null, 1, i), i.lineEnd()), d && (i.polygonEnd(), d = !1), l = s = null
                        }, sphere: function () {
                            i.polygonStart(), i.lineStart(), _(null, null, 1, i), i.lineEnd(), i.polygonEnd()
                        }
                    };

                    function point(t, e) {
                        var n = r(t, e);
                        a(t = n[0], e = n[1]) && i.point(t, e)
                    }

                    function pointLine(t, e) {
                        var n = r(t, e);
                        o.point(n[0], n[1])
                    }

                    function lineStart() {
                        n.point = pointLine, o.lineStart()
                    }

                    function lineEnd() {
                        n.point = point, o.lineEnd()
                    }

                    var s, u, c = d3_geo_clipBufferListener(), p = t(c), d = !1;

                    function pointRing(t, e) {
                        u.push([t, e]);
                        var n = r(t, e);
                        p.point(n[0], n[1])
                    }

                    function ringStart() {
                        p.lineStart(), u = []
                    }

                    function ringEnd() {
                        pointRing(u[0][0], u[0][1]), p.lineEnd();
                        var t, e = p.clean(), n = c.buffer(), r = n.length;
                        if (u.pop(), s.push(u), u = null, r) if (1 & e) {
                            var o, a = -1;
                            if (0 < (r = (t = n[0]).length - 1)) {
                                for (d || (i.polygonStart(), d = !0), i.lineStart(); ++a < r;) i.point((o = t[a])[0], o[1]);
                                i.lineEnd()
                            }
                        } else 1 < r && 2 & e && n.push(n.pop().concat(n.shift())), l.push(n.filter(d3_geo_clipSegmentLength1))
                    }

                    return n
                }
            }

            function d3_geo_clipSegmentLength1(t) {
                return 1 < t.length
            }

            function d3_geo_clipBufferListener() {
                var n, e = [];
                return {
                    lineStart: function () {
                        e.push(n = [])
                    }, point: function (t, e) {
                        n.push([t, e])
                    }, lineEnd: d3_noop, buffer: function () {
                        var t = e;
                        return e = [], n = null, t
                    }, rejoin: function () {
                        1 < e.length && e.push(e.pop().concat(e.shift()))
                    }
                }
            }

            function d3_geo_clipSort(t, e) {
                return ((t = t.x)[0] < 0 ? t[1] - K - G : K - t[1]) - ((e = e.x)[0] < 0 ? e[1] - K - G : K - e[1])
            }

            var kt = d3_geo_clip(d3_true, function (p) {
                var d, _ = NaN, f = NaN, h = NaN;
                return {
                    lineStart: function () {
                        p.lineStart(), d = 1
                    }, point: function (t, e) {
                        var n, r, o, a, i, l, s, u = 0 < t ? V : -V, c = E(t - _);
                        E(c - V) < G ? (p.point(_, f = 0 < (f + e) / 2 ? K : -K), p.point(h, f), p.lineEnd(), p.lineStart(), p.point(u, f), p.point(t, f), d = 0) : h !== u && V <= c && (E(_ - h) < G && (_ -= h * G), E(t - u) < G && (t -= u * G), n = _, r = f, o = t, a = e, s = Math.sin(n - o), f = E(s) > G ? Math.atan((Math.sin(r) * (l = Math.cos(a)) * Math.sin(o) - Math.sin(a) * (i = Math.cos(r)) * Math.sin(n)) / (i * l * s)) : (r + a) / 2, p.point(h, f), p.lineEnd(), p.lineStart(), p.point(u, f), d = 0), p.point(_ = t, f = e), h = u
                    }, lineEnd: function () {
                        p.lineEnd(), _ = f = NaN
                    }, clean: function () {
                        return 2 - d
                    }
                }
            }, function (t, e, n, r) {
                var o;
                if (null == t) o = n * K, r.point(-V, o), r.point(0, o), r.point(V, o), r.point(V, 0), r.point(V, -o), r.point(0, -o), r.point(-V, -o), r.point(-V, 0), r.point(-V, o); else if (E(t[0] - e[0]) > G) {
                    var a = t[0] < e[0] ? V : -V;
                    o = n * a / 2, r.point(-a, o), r.point(0, o), r.point(a, o)
                } else r.point(e[0], e[1])
            }, [-V, -V / 2]);

            function d3_geom_clipLine(c, p, d, _) {
                return function (t) {
                    var e, n = t.a, r = t.b, o = n.x, a = n.y, i = 0, l = 1, s = r.x - o, u = r.y - a;
                    if (e = c - o, s || !(0 < e)) {
                        if (e /= s, s < 0) {
                            if (e < i) return;
                            e < l && (l = e)
                        } else if (0 < s) {
                            if (l < e) return;
                            i < e && (i = e)
                        }
                        if (e = d - o, s || !(e < 0)) {
                            if (e /= s, s < 0) {
                                if (l < e) return;
                                i < e && (i = e)
                            } else if (0 < s) {
                                if (e < i) return;
                                e < l && (l = e)
                            }
                            if (e = p - a, u || !(0 < e)) {
                                if (e /= u, u < 0) {
                                    if (e < i) return;
                                    e < l && (l = e)
                                } else if (0 < u) {
                                    if (l < e) return;
                                    i < e && (i = e)
                                }
                                if (e = _ - a, u || !(e < 0)) {
                                    if (e /= u, u < 0) {
                                        if (l < e) return;
                                        i < e && (i = e)
                                    } else if (0 < u) {
                                        if (e < i) return;
                                        e < l && (l = e)
                                    }
                                    return 0 < i && (t.a = {x: o + i * s, y: a + i * u}), l < 1 && (t.b = {
                                        x: o + l * s,
                                        y: a + l * u
                                    }), t
                                }
                            }
                        }
                    }
                }
            }

            var St = 1e9;

            function d3_geo_clipExtent(y, m, v, b) {
                return function (o) {
                    var r, c, a, i, l, s, u, p, d, _, f, h = o, t = d3_geo_clipBufferListener(),
                        g = d3_geom_clipLine(y, m, v, b), e = {
                            point: point, lineStart: function () {
                                e.point = linePoint, c && c.push(a = []);
                                _ = !0, d = !1, u = p = NaN
                            }, lineEnd: function () {
                                r && (linePoint(i, l), s && d && t.rejoin(), r.push(t.buffer()));
                                e.point = point, d && o.lineEnd()
                            }, polygonStart: function () {
                                o = t, r = [], c = [], f = !0
                            }, polygonEnd: function () {
                                o = h, r = L.merge(r);
                                var t = function (t) {
                                    for (var e = 0, n = c.length, r = t[1], o = 0; o < n; ++o) for (var a, i = 1, l = c[o], s = l.length, u = l[0]; i < s; ++i) a = l[i], u[1] <= r ? a[1] > r && 0 < d3_cross2d(u, a, t) && ++e : a[1] <= r && d3_cross2d(u, a, t) < 0 && --e, u = a;
                                    return 0 !== e
                                }([y, b]), e = f && t, n = r.length;
                                (e || n) && (o.polygonStart(), e && (o.lineStart(), interpolate(null, null, 1, o), o.lineEnd()), n && d3_geo_clipPolygon(r, compare, t, interpolate, o), o.polygonEnd()), r = c = a = null
                            }
                        };

                    function interpolate(t, e, n, r) {
                        var o = 0, a = 0;
                        if (null == t || (o = corner(t, n)) !== (a = corner(e, n)) || comparePoints(t, e) < 0 ^ 0 < n) for (; r.point(0 === o || 3 === o ? y : v, 1 < o ? b : m), (o = (o + n + 4) % 4) !== a;) ; else r.point(e[0], e[1])
                    }

                    function pointVisible(t, e) {
                        return y <= t && t <= v && m <= e && e <= b
                    }

                    function point(t, e) {
                        pointVisible(t, e) && o.point(t, e)
                    }

                    function linePoint(t, e) {
                        var n = pointVisible(t = Math.max(-St, Math.min(St, t)), e = Math.max(-St, Math.min(St, e)));
                        if (c && a.push([t, e]), _) i = t, l = e, _ = !1, (s = n) && (o.lineStart(), o.point(t, e)); else if (n && d) o.point(t, e); else {
                            var r = {a: {x: u, y: p}, b: {x: t, y: e}};
                            g(r) ? (d || (o.lineStart(), o.point(r.a.x, r.a.y)), o.point(r.b.x, r.b.y), n || o.lineEnd(), f = !1) : n && (o.lineStart(), o.point(t, e), f = !1)
                        }
                        u = t, p = e, d = n
                    }

                    return e
                };

                function corner(t, e) {
                    return E(t[0] - y) < G ? 0 < e ? 0 : 3 : E(t[0] - v) < G ? 0 < e ? 2 : 1 : E(t[1] - m) < G ? 0 < e ? 1 : 0 : 0 < e ? 3 : 2
                }

                function compare(t, e) {
                    return comparePoints(t.x, e.x)
                }

                function comparePoints(t, e) {
                    var n = corner(t, 1), r = corner(e, 1);
                    return n !== r ? n - r : 0 === n ? e[1] - t[1] : 1 === n ? t[0] - e[0] : 2 === n ? t[1] - e[1] : e[0] - t[0]
                }
            }

            function d3_geo_conic(t) {
                var e = 0, n = V / 3, r = d3_geo_projectionMutator(t), o = r(e, n);
                return o.parallels = function (t) {
                    return arguments.length ? r(e = t[0] * V / 180, n = t[1] * V / 180) : [e / V * 180, n / V * 180]
                }, o
            }

            function d3_geo_conicEqualArea(t, e) {
                var n = Math.sin(t), r = (n + Math.sin(e)) / 2, o = 1 + n * (2 * r - n), a = Math.sqrt(o) / r;

                function forward(t, e) {
                    var n = Math.sqrt(o - 2 * r * Math.sin(e)) / r;
                    return [n * Math.sin(t *= r), a - n * Math.cos(t)]
                }

                return forward.invert = function (t, e) {
                    var n = a - e;
                    return [Math.atan2(t, n) / r, d3_asin((o - (t * t + n * n) * r * r) / (2 * r))]
                }, forward
            }

            L.geo.clipExtent = function () {
                var e, n, r, o, a, i, l = {
                    stream: function (t) {
                        return a && (a.valid = !1), (a = i(t)).valid = !0, a
                    }, extent: function (t) {
                        return arguments.length ? (i = d3_geo_clipExtent(e = +t[0][0], n = +t[0][1], r = +t[1][0], o = +t[1][1]), a && (a.valid = !1, a = null), l) : [[e, n], [r, o]]
                    }
                };
                return l.extent([[0, 0], [960, 500]])
            }, (L.geo.conicEqualArea = function () {
                return d3_geo_conic(d3_geo_conicEqualArea)
            }).raw = d3_geo_conicEqualArea, L.geo.albers = function () {
                return L.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
            }, L.geo.albersUsa = function () {
                var r, o, a, i, l = L.geo.albers(),
                    s = L.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
                    u = L.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), c = {
                        point: function (t, e) {
                            r = [t, e]
                        }
                    };

                function albersUsa(t) {
                    var e = t[0], n = t[1];
                    return r = null, o(e, n), r || (a(e, n), r) || i(e, n), r
                }

                return albersUsa.invert = function (t) {
                    var e = l.scale(), n = l.translate(), r = (t[0] - n[0]) / e, o = (t[1] - n[1]) / e;
                    return (.12 <= o && o < .234 && -.425 <= r && r < -.214 ? s : .166 <= o && o < .234 && -.214 <= r && r < -.115 ? u : l).invert(t)
                }, albersUsa.stream = function (t) {
                    var n = l.stream(t), r = s.stream(t), o = u.stream(t);
                    return {
                        point: function (t, e) {
                            n.point(t, e), r.point(t, e), o.point(t, e)
                        }, sphere: function () {
                            n.sphere(), r.sphere(), o.sphere()
                        }, lineStart: function () {
                            n.lineStart(), r.lineStart(), o.lineStart()
                        }, lineEnd: function () {
                            n.lineEnd(), r.lineEnd(), o.lineEnd()
                        }, polygonStart: function () {
                            n.polygonStart(), r.polygonStart(), o.polygonStart()
                        }, polygonEnd: function () {
                            n.polygonEnd(), r.polygonEnd(), o.polygonEnd()
                        }
                    }
                }, albersUsa.precision = function (t) {
                    return arguments.length ? (l.precision(t), s.precision(t), u.precision(t), albersUsa) : l.precision()
                }, albersUsa.scale = function (t) {
                    return arguments.length ? (l.scale(t), s.scale(.35 * t), u.scale(t), albersUsa.translate(l.translate())) : l.scale()
                }, albersUsa.translate = function (t) {
                    if (!arguments.length) return l.translate();
                    var e = l.scale(), n = +t[0], r = +t[1];
                    return o = l.translate(t).clipExtent([[n - .455 * e, r - .238 * e], [n + .455 * e, r + .238 * e]]).stream(c).point, a = s.translate([n - .307 * e, r + .201 * e]).clipExtent([[n - .425 * e + G, r + .12 * e + G], [n - .214 * e - G, r + .234 * e - G]]).stream(c).point, i = u.translate([n - .205 * e, r + .212 * e]).clipExtent([[n - .214 * e + G, r + .166 * e + G], [n - .115 * e - G, r + .234 * e - G]]).stream(c).point, albersUsa
                }, albersUsa.scale(1070)
            };
            var Nt, Ct, At, Et, Rt, Lt, zt = {
                point: d3_noop, lineStart: d3_noop, lineEnd: d3_noop, polygonStart: function () {
                    Ct = 0, zt.lineStart = d3_geo_pathAreaRingStart
                }, polygonEnd: function () {
                    zt.lineStart = zt.lineEnd = zt.point = d3_noop, Nt += E(Ct / 2)
                }
            };

            function d3_geo_pathAreaRingStart() {
                var n, r, o, a;

                function nextPoint(t, e) {
                    Ct += a * t - o * e, o = t, a = e
                }

                zt.point = function (t, e) {
                    zt.point = nextPoint, n = o = t, r = a = e
                }, zt.lineEnd = function () {
                    nextPoint(n, r)
                }
            }

            var Bt = {
                point: function (t, e) {
                    t < At && (At = t);
                    Rt < t && (Rt = t);
                    e < Et && (Et = e);
                    Lt < e && (Lt = e)
                }, lineStart: d3_noop, lineEnd: d3_noop, polygonStart: d3_noop, polygonEnd: d3_noop
            };

            function d3_geo_pathBuffer() {
                var n = d3_geo_pathBufferCircle(4.5), r = [], o = {
                    point: point, lineStart: function () {
                        o.point = pointLineStart
                    }, lineEnd: lineEnd, polygonStart: function () {
                        o.lineEnd = lineEndPolygon
                    }, polygonEnd: function () {
                        o.lineEnd = lineEnd, o.point = point
                    }, pointRadius: function (t) {
                        return n = d3_geo_pathBufferCircle(t), o
                    }, result: function () {
                        if (r.length) {
                            var t = r.join("");
                            return r = [], t
                        }
                    }
                };

                function point(t, e) {
                    r.push("M", t, ",", e, n)
                }

                function pointLineStart(t, e) {
                    r.push("M", t, ",", e), o.point = pointLine
                }

                function pointLine(t, e) {
                    r.push("L", t, ",", e)
                }

                function lineEnd() {
                    o.point = point
                }

                function lineEndPolygon() {
                    r.push("Z")
                }

                return o
            }

            function d3_geo_pathBufferCircle(t) {
                return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
            }

            var Ot, It = {
                point: d3_geo_pathCentroidPoint,
                lineStart: d3_geo_pathCentroidLineStart,
                lineEnd: d3_geo_pathCentroidLineEnd,
                polygonStart: function () {
                    It.lineStart = d3_geo_pathCentroidRingStart
                },
                polygonEnd: function () {
                    It.point = d3_geo_pathCentroidPoint, It.lineStart = d3_geo_pathCentroidLineStart, It.lineEnd = d3_geo_pathCentroidLineEnd
                }
            };

            function d3_geo_pathCentroidPoint(t, e) {
                ht += t, gt += e, ++yt
            }

            function d3_geo_pathCentroidLineStart() {
                var a, i;

                function nextPoint(t, e) {
                    var n = t - a, r = e - i, o = Math.sqrt(n * n + r * r);
                    mt += o * (a + t) / 2, vt += o * (i + e) / 2, bt += o, d3_geo_pathCentroidPoint(a = t, i = e)
                }

                It.point = function (t, e) {
                    It.point = nextPoint, d3_geo_pathCentroidPoint(a = t, i = e)
                }
            }

            function d3_geo_pathCentroidLineEnd() {
                It.point = d3_geo_pathCentroidPoint
            }

            function d3_geo_pathCentroidRingStart() {
                var n, r, a, i;

                function nextPoint(t, e) {
                    var n = t - a, r = e - i, o = Math.sqrt(n * n + r * r);
                    mt += o * (a + t) / 2, vt += o * (i + e) / 2, bt += o, Mt += (o = i * t - a * e) * (a + t), xt += o * (i + e), Tt += 3 * o, d3_geo_pathCentroidPoint(a = t, i = e)
                }

                It.point = function (t, e) {
                    It.point = nextPoint, d3_geo_pathCentroidPoint(n = a = t, r = i = e)
                }, It.lineEnd = function () {
                    nextPoint(n, r)
                }
            }

            function d3_geo_pathContext(n) {
                var r = 4.5, o = {
                    point: point, lineStart: function () {
                        o.point = pointLineStart
                    }, lineEnd: lineEnd, polygonStart: function () {
                        o.lineEnd = lineEndPolygon
                    }, polygonEnd: function () {
                        o.lineEnd = lineEnd, o.point = point
                    }, pointRadius: function (t) {
                        return r = t, o
                    }, result: d3_noop
                };

                function point(t, e) {
                    n.moveTo(t + r, e), n.arc(t, e, r, 0, N)
                }

                function pointLineStart(t, e) {
                    n.moveTo(t, e), o.point = pointLine
                }

                function pointLine(t, e) {
                    n.lineTo(t, e)
                }

                function lineEnd() {
                    o.point = point
                }

                function lineEndPolygon() {
                    n.closePath()
                }

                return o
            }

            function d3_geo_resample(N) {
                var C = .5, A = Math.cos(30 * k), g = 16;

                function resample(t) {
                    return (g ? function (o) {
                        var n, r, a, i, l, s, u, c, p, d, _, f, h = {
                            point: point, lineStart: lineStart, lineEnd: lineEnd, polygonStart: function () {
                                o.polygonStart(), h.lineStart = ringStart
                            }, polygonEnd: function () {
                                o.polygonEnd(), h.lineStart = lineStart
                            }
                        };

                        function point(t, e) {
                            t = N(t, e), o.point(t[0], t[1])
                        }

                        function lineStart() {
                            c = NaN, h.point = linePoint, o.lineStart()
                        }

                        function linePoint(t, e) {
                            var n = d3_geo_cartesian([t, e]), r = N(t, e);
                            resampleLineTo(c, p, u, d, _, f, c = r[0], p = r[1], u = t, d = n[0], _ = n[1], f = n[2], g, o), o.point(c, p)
                        }

                        function lineEnd() {
                            h.point = point, o.lineEnd()
                        }

                        function ringStart() {
                            lineStart(), h.point = ringPoint, h.lineEnd = ringEnd
                        }

                        function ringPoint(t, e) {
                            linePoint(n = t, e), r = c, a = p, i = d, l = _, s = f, h.point = linePoint
                        }

                        function ringEnd() {
                            resampleLineTo(c, p, u, d, _, f, r, a, n, i, l, s, g, o), (h.lineEnd = lineEnd)()
                        }

                        return h
                    } : function (n) {
                        return d3_geo_transformPoint(n, function (t, e) {
                            t = N(t, e), n.point(t[0], t[1])
                        })
                    })(t)
                }

                function resampleLineTo(t, e, n, r, o, a, i, l, s, u, c, p, d, _) {
                    var f = i - t, h = l - e, g = f * f + h * h;
                    if (4 * C < g && d--) {
                        var y = r + u, m = o + c, v = a + p, b = Math.sqrt(y * y + m * m + v * v),
                            M = Math.asin(v /= b), x = E(E(v) - 1) < G || E(n - s) < G ? (n + s) / 2 : Math.atan2(m, y),
                            T = N(x, M), P = T[0], w = T[1], D = P - t, k = w - e, S = h * D - f * k;
                        (C < S * S / g || .3 < E((f * D + h * k) / g - .5) || r * u + o * c + a * p < A) && (resampleLineTo(t, e, n, r, o, a, P, w, x, y /= b, m /= b, v, d, _), _.point(P, w), resampleLineTo(P, w, x, y, m, v, i, l, s, u, c, p, d, _))
                    }
                }

                return resample.precision = function (t) {
                    return arguments.length ? (g = 0 < (C = t * t) && 16, resample) : Math.sqrt(C)
                }, resample
            }

            function d3_geo_transform(t) {
                this.stream = t
            }

            function d3_geo_transformPoint(t, e) {
                return {
                    point: e, sphere: function () {
                        t.sphere()
                    }, lineStart: function () {
                        t.lineStart()
                    }, lineEnd: function () {
                        t.lineEnd()
                    }, polygonStart: function () {
                        t.polygonStart()
                    }, polygonEnd: function () {
                        t.polygonEnd()
                    }
                }
            }

            function d3_geo_projection(t) {
                return d3_geo_projectionMutator(function () {
                    return t
                })()
            }

            function d3_geo_projectionMutator(t) {
                var n, e, r, o, a, i, l = d3_geo_resample(function (t, e) {
                        return [(t = n(t, e))[0] * s + o, a - t[1] * s]
                    }), s = 150, u = 480, c = 250, p = 0, d = 0, _ = 0, f = 0, h = 0, g = kt, y = d3_identity, m = null,
                    v = null;

                function projection(t) {
                    return [(t = r(t[0] * k, t[1] * k))[0] * s + o, a - t[1] * s]
                }

                function invert(t) {
                    return (t = r.invert((t[0] - o) / s, (a - t[1]) / s)) && [t[0] * D, t[1] * D]
                }

                function reset() {
                    r = d3_geo_compose(e = d3_geo_rotation(_, f, h), n);
                    var t = n(p, d);
                    return o = u - t[0] * s, a = c + t[1] * s, invalidate()
                }

                function invalidate() {
                    return i && (i.valid = !1, i = null), projection
                }

                return projection.stream = function (t) {
                    return i && (i.valid = !1), (i = d3_geo_projectionRadians(g(e, l(y(t))))).valid = !0, i
                }, projection.clipAngle = function (t) {
                    return arguments.length ? (g = null == t ? (m = t, kt) : function (o) {
                        var D = Math.cos(o), _ = 0 < D, f = E(D) > G;
                        return d3_geo_clip(visible, function (l) {
                            var s, u, c, p, d;
                            return {
                                lineStart: function () {
                                    p = c = !1, d = 1
                                }, point: function (t, e) {
                                    var n, r = [t, e], o = visible(t, e),
                                        a = _ ? o ? 0 : code(t, e) : o ? code(t + (t < 0 ? V : -V), e) : 0;
                                    if (!s && (p = c = o) && l.lineStart(), o !== c && (n = intersect(s, r), (d3_geo_sphericalEqual(s, n) || d3_geo_sphericalEqual(r, n)) && (r[0] += G, r[1] += G, o = visible(r[0], r[1]))), o !== c) d = 0, o ? (l.lineStart(), n = intersect(r, s), l.point(n[0], n[1])) : (n = intersect(s, r), l.point(n[0], n[1]), l.lineEnd()), s = n; else if (f && s && _ ^ o) {
                                        var i;
                                        a & u || !(i = intersect(r, s, !0)) || (d = 0, _ ? (l.lineStart(), l.point(i[0][0], i[0][1]), l.point(i[1][0], i[1][1]), l.lineEnd()) : (l.point(i[1][0], i[1][1]), l.lineEnd(), l.lineStart(), l.point(i[0][0], i[0][1])))
                                    }
                                    !o || s && d3_geo_sphericalEqual(s, r) || l.point(r[0], r[1]), s = r, c = o, u = a
                                }, lineEnd: function () {
                                    c && l.lineEnd(), s = null
                                }, clean: function () {
                                    return d | (p && c) << 1
                                }
                            }
                        }, d3_geo_circleInterpolate(o, 6 * k), _ ? [0, -o] : [-V, o - V]);

                        function visible(t, e) {
                            return Math.cos(t) * Math.cos(e) > D
                        }

                        function intersect(t, e, n) {
                            var r = [1, 0, 0], o = d3_geo_cartesianCross(d3_geo_cartesian(t), d3_geo_cartesian(e)),
                                a = d3_geo_cartesianDot(o, o), i = o[0], l = a - i * i;
                            if (!l) return !n && t;
                            var s = D * a / l, u = -D * i / l, c = d3_geo_cartesianCross(r, o),
                                p = d3_geo_cartesianScale(r, s);
                            d3_geo_cartesianAdd(p, d3_geo_cartesianScale(o, u));
                            var d = c, _ = d3_geo_cartesianDot(p, d), f = d3_geo_cartesianDot(d, d),
                                h = _ * _ - f * (d3_geo_cartesianDot(p, p) - 1);
                            if (!(h < 0)) {
                                var g = Math.sqrt(h), y = d3_geo_cartesianScale(d, (-_ - g) / f);
                                if (d3_geo_cartesianAdd(y, p), y = d3_geo_spherical(y), !n) return y;
                                var m, v = t[0], b = e[0], M = t[1], x = e[1];
                                b < v && (m = v, v = b, b = m);
                                var T = b - v, P = E(T - V) < G;
                                if (!P && x < M && (m = M, M = x, x = m), P || T < G ? P ? 0 < M + x ^ y[1] < (E(y[0] - v) < G ? M : x) : M <= y[1] && y[1] <= x : V < T ^ (v <= y[0] && y[0] <= b)) {
                                    var w = d3_geo_cartesianScale(d, (-_ + g) / f);
                                    return d3_geo_cartesianAdd(w, p), [y, d3_geo_spherical(w)]
                                }
                            }
                        }

                        function code(t, e) {
                            var n = _ ? o : V - o, r = 0;
                            return t < -n ? r |= 1 : n < t && (r |= 2), e < -n ? r |= 4 : n < e && (r |= 8), r
                        }
                    }((m = +t) * k), invalidate()) : m
                }, projection.clipExtent = function (t) {
                    return arguments.length ? (y = (v = t) ? d3_geo_clipExtent(t[0][0], t[0][1], t[1][0], t[1][1]) : d3_identity, invalidate()) : v
                }, projection.scale = function (t) {
                    return arguments.length ? (s = +t, reset()) : s
                }, projection.translate = function (t) {
                    return arguments.length ? (u = +t[0], c = +t[1], reset()) : [u, c]
                }, projection.center = function (t) {
                    return arguments.length ? (p = t[0] % 360 * k, d = t[1] % 360 * k, reset()) : [p * D, d * D]
                }, projection.rotate = function (t) {
                    return arguments.length ? (_ = t[0] % 360 * k, f = t[1] % 360 * k, h = 2 < t.length ? t[2] % 360 * k : 0, reset()) : [_ * D, f * D, h * D]
                }, L.rebind(projection, l, "precision"), function () {
                    return n = t.apply(this, arguments), projection.invert = n.invert && invert, reset()
                }
            }

            function d3_geo_projectionRadians(n) {
                return d3_geo_transformPoint(n, function (t, e) {
                    n.point(t * k, e * k)
                })
            }

            function d3_geo_equirectangular(t, e) {
                return [t, e]
            }

            function d3_geo_identityRotation(t, e) {
                return [V < t ? t - N : t < -V ? t + N : t, e]
            }

            function d3_geo_rotation(t, e, n) {
                return t ? e || n ? d3_geo_compose(d3_geo_rotationλ(t), d3_geo_rotationφγ(e, n)) : d3_geo_rotationλ(t) : e || n ? d3_geo_rotationφγ(e, n) : d3_geo_identityRotation
            }

            function d3_geo_forwardRotationλ(n) {
                return function (t, e) {
                    return [V < (t += n) ? t - N : t < -V ? t + N : t, e]
                }
            }

            function d3_geo_rotationλ(t) {
                var e = d3_geo_forwardRotationλ(t);
                return e.invert = d3_geo_forwardRotationλ(-t), e
            }

            function d3_geo_rotationφγ(t, e) {
                var l = Math.cos(t), s = Math.sin(t), u = Math.cos(e), c = Math.sin(e);

                function rotation(t, e) {
                    var n = Math.cos(e), r = Math.cos(t) * n, o = Math.sin(t) * n, a = Math.sin(e), i = a * l + r * s;
                    return [Math.atan2(o * u - i * c, r * l - a * s), d3_asin(i * u + o * c)]
                }

                return rotation.invert = function (t, e) {
                    var n = Math.cos(e), r = Math.cos(t) * n, o = Math.sin(t) * n, a = Math.sin(e), i = a * u - o * c;
                    return [Math.atan2(o * u + a * c, r * l + i * s), d3_asin(i * l - r * s)]
                }, rotation
            }

            function d3_geo_circleInterpolate(l, s) {
                var u = Math.cos(l), c = Math.sin(l);
                return function (t, e, n, r) {
                    var o = n * s;
                    null != t ? (t = d3_geo_circleAngle(u, t), e = d3_geo_circleAngle(u, e), (0 < n ? t < e : e < t) && (t += n * N)) : (t = l + n * N, e = l - .5 * o);
                    for (var a, i = t; 0 < n ? e < i : i < e; i -= o) r.point((a = d3_geo_spherical([u, -c * Math.cos(i), -c * Math.sin(i)]))[0], a[1])
                }
            }

            function d3_geo_circleAngle(t, e) {
                var n = d3_geo_cartesian(e);
                n[0] -= t, d3_geo_cartesianNormalize(n);
                var r = d3_acos(-n[1]);
                return ((-n[2] < 0 ? -r : r) + 2 * Math.PI - G) % (2 * Math.PI)
            }

            function d3_geo_graticuleX(t, e, n) {
                var r = L.range(t, e - G, n).concat(e);
                return function (e) {
                    return r.map(function (t) {
                        return [e, t]
                    })
                }
            }

            function d3_geo_graticuleY(t, e, n) {
                var r = L.range(t, e - G, n).concat(e);
                return function (e) {
                    return r.map(function (t) {
                        return [t, e]
                    })
                }
            }

            function d3_source(t) {
                return t.source
            }

            function d3_target(t) {
                return t.target
            }

            L.geo.path = function () {
                var r, e, o, n, a, i = 4.5;

                function path(t) {
                    return t && ("function" == typeof i && n.pointRadius(+i.apply(this, arguments)), a && a.valid || (a = o(n)), L.geo.stream(t, a)), n.result()
                }

                function reset() {
                    return a = null, path
                }

                return path.area = function (t) {
                    return Nt = 0, L.geo.stream(t, o(zt)), Nt
                }, path.centroid = function (t) {
                    return ht = gt = yt = mt = vt = bt = Mt = xt = Tt = 0, L.geo.stream(t, o(It)), Tt ? [Mt / Tt, xt / Tt] : bt ? [mt / bt, vt / bt] : yt ? [ht / yt, gt / yt] : [NaN, NaN]
                }, path.bounds = function (t) {
                    return Rt = Lt = -(At = Et = 1 / 0), L.geo.stream(t, o(Bt)), [[At, Et], [Rt, Lt]]
                }, path.projection = function (t) {
                    return arguments.length ? (o = (r = t) ? t.stream || (n = t, e = d3_geo_resample(function (t, e) {
                        return n([t * D, e * D])
                    }), function (t) {
                        return d3_geo_projectionRadians(e(t))
                    }) : d3_identity, reset()) : r;
                    var n, e
                }, path.context = function (t) {
                    return arguments.length ? (n = null == (e = t) ? new d3_geo_pathBuffer : new d3_geo_pathContext(t), "function" != typeof i && n.pointRadius(i), reset()) : e
                }, path.pointRadius = function (t) {
                    return arguments.length ? (i = "function" == typeof t ? t : (n.pointRadius(+t), +t), path) : i
                }, path.projection(L.geo.albersUsa()).context(null)
            }, L.geo.transform = function (r) {
                return {
                    stream: function (t) {
                        var e = new d3_geo_transform(t);
                        for (var n in r) e[n] = r[n];
                        return e
                    }
                }
            }, d3_geo_transform.prototype = {
                point: function (t, e) {
                    this.stream.point(t, e)
                }, sphere: function () {
                    this.stream.sphere()
                }, lineStart: function () {
                    this.stream.lineStart()
                }, lineEnd: function () {
                    this.stream.lineEnd()
                }, polygonStart: function () {
                    this.stream.polygonStart()
                }, polygonEnd: function () {
                    this.stream.polygonEnd()
                }
            }, L.geo.projection = d3_geo_projection, L.geo.projectionMutator = d3_geo_projectionMutator, (L.geo.equirectangular = function () {
                return d3_geo_projection(d3_geo_equirectangular)
            }).raw = d3_geo_equirectangular.invert = d3_geo_equirectangular, L.geo.rotation = function (e) {
                function forward(t) {
                    return (t = e(t[0] * k, t[1] * k))[0] *= D, t[1] *= D, t
                }

                return e = d3_geo_rotation(e[0] % 360 * k, e[1] * k, 2 < e.length ? e[2] * k : 0), forward.invert = function (t) {
                    return (t = e.invert(t[0] * k, t[1] * k))[0] *= D, t[1] *= D, t
                }, forward
            }, d3_geo_identityRotation.invert = d3_geo_equirectangular, L.geo.circle = function () {
                var e, o, a = [0, 0], n = 6;

                function circle() {
                    var t = "function" == typeof a ? a.apply(this, arguments) : a,
                        n = d3_geo_rotation(-t[0] * k, -t[1] * k, 0).invert, r = [];
                    return o(null, null, 1, {
                        point: function (t, e) {
                            r.push(t = n(t, e)), t[0] *= D, t[1] *= D
                        }
                    }), {type: "Polygon", coordinates: [r]}
                }

                return circle.origin = function (t) {
                    return arguments.length ? (a = t, circle) : a
                }, circle.angle = function (t) {
                    return arguments.length ? (o = d3_geo_circleInterpolate((e = +t) * k, n * k), circle) : e
                }, circle.precision = function (t) {
                    return arguments.length ? (o = d3_geo_circleInterpolate(e * k, (n = +t) * k), circle) : n
                }, circle.angle(90)
            }, L.geo.distance = function (t, e) {
                var n, r = (e[0] - t[0]) * k, o = t[1] * k, a = e[1] * k, i = Math.sin(r), l = Math.cos(r),
                    s = Math.sin(o), u = Math.cos(o), c = Math.sin(a), p = Math.cos(a);
                return Math.atan2(Math.sqrt((n = p * i) * n + (n = u * c - s * p * l) * n), s * c + u * p * l)
            }, L.geo.graticule = function () {
                var e, n, r, o, a, i, l, s, u, c, p, d, _ = 10, f = _, h = 90, g = 360, y = 2.5;

                function graticule() {
                    return {type: "MultiLineString", coordinates: lines()}
                }

                function lines() {
                    return L.range(Math.ceil(o / h) * h, r, h).map(p).concat(L.range(Math.ceil(s / g) * g, l, g).map(d)).concat(L.range(Math.ceil(n / _) * _, e, _).filter(function (t) {
                        return E(t % h) > G
                    }).map(u)).concat(L.range(Math.ceil(i / f) * f, a, f).filter(function (t) {
                        return E(t % g) > G
                    }).map(c))
                }

                return graticule.lines = function () {
                    return lines().map(function (t) {
                        return {type: "LineString", coordinates: t}
                    })
                }, graticule.outline = function () {
                    return {
                        type: "Polygon",
                        coordinates: [p(o).concat(d(l).slice(1), p(r).reverse().slice(1), d(s).reverse().slice(1))]
                    }
                }, graticule.extent = function (t) {
                    return arguments.length ? graticule.majorExtent(t).minorExtent(t) : graticule.minorExtent()
                }, graticule.majorExtent = function (t) {
                    return arguments.length ? (o = +t[0][0], r = +t[1][0], s = +t[0][1], l = +t[1][1], r < o && (t = o, o = r, r = t), l < s && (t = s, s = l, l = t), graticule.precision(y)) : [[o, s], [r, l]]
                }, graticule.minorExtent = function (t) {
                    return arguments.length ? (n = +t[0][0], e = +t[1][0], i = +t[0][1], a = +t[1][1], e < n && (t = n, n = e, e = t), a < i && (t = i, i = a, a = t), graticule.precision(y)) : [[n, i], [e, a]]
                }, graticule.step = function (t) {
                    return arguments.length ? graticule.majorStep(t).minorStep(t) : graticule.minorStep()
                }, graticule.majorStep = function (t) {
                    return arguments.length ? (h = +t[0], g = +t[1], graticule) : [h, g]
                }, graticule.minorStep = function (t) {
                    return arguments.length ? (_ = +t[0], f = +t[1], graticule) : [_, f]
                }, graticule.precision = function (t) {
                    return arguments.length ? (y = +t, u = d3_geo_graticuleX(i, a, 90), c = d3_geo_graticuleY(n, e, y), p = d3_geo_graticuleX(s, l, 90), d = d3_geo_graticuleY(o, r, y), graticule) : y
                }, graticule.majorExtent([[-180, -90 + G], [180, 90 - G]]).minorExtent([[-180, -80 - G], [180, 80 + G]])
            }, L.geo.greatArc = function () {
                var e, n, r = d3_source, o = d3_target;

                function greatArc() {
                    return {
                        type: "LineString",
                        coordinates: [e || r.apply(this, arguments), n || o.apply(this, arguments)]
                    }
                }

                return greatArc.distance = function () {
                    return L.geo.distance(e || r.apply(this, arguments), n || o.apply(this, arguments))
                }, greatArc.source = function (t) {
                    return arguments.length ? (e = "function" == typeof (r = t) ? null : t, greatArc) : r
                }, greatArc.target = function (t) {
                    return arguments.length ? (n = "function" == typeof (o = t) ? null : t, greatArc) : o
                }, greatArc.precision = function () {
                    return arguments.length ? greatArc : 0
                }, greatArc
            }, L.geo.interpolate = function (t, e) {
                return n = t[0] * k, r = t[1] * k, o = e[0] * k, a = e[1] * k, i = Math.cos(r), l = Math.sin(r), s = Math.cos(a), u = Math.sin(a), c = i * Math.cos(n), p = i * Math.sin(n), d = s * Math.cos(o), _ = s * Math.sin(o), f = 2 * Math.asin(Math.sqrt(d3_haversin(a - r) + i * s * d3_haversin(o - n))), h = 1 / Math.sin(f), (g = f ? function (t) {
                    var e = Math.sin(t *= f) * h, n = Math.sin(f - t) * h, r = n * c + e * d, o = n * p + e * _,
                        a = n * l + e * u;
                    return [Math.atan2(o, r) * D, Math.atan2(a, Math.sqrt(r * r + o * o)) * D]
                } : function () {
                    return [n * D, r * D]
                }).distance = f, g;
                var n, r, o, a, i, l, s, u, c, p, d, _, f, h, g
            }, L.geo.length = function (t) {
                return Ot = 0, L.geo.stream(t, qt), Ot
            };
            var qt = {
                sphere: d3_noop, point: d3_noop, lineStart: function () {
                    var i, l, s;

                    function nextPoint(t, e) {
                        var n = Math.sin(e *= k), r = Math.cos(e), o = E((t *= k) - i), a = Math.cos(o);
                        Ot += Math.atan2(Math.sqrt((o = r * Math.sin(o)) * o + (o = s * n - l * r * a) * o), l * n + s * r * a), i = t, l = n, s = r
                    }

                    qt.point = function (t, e) {
                        i = t * k, l = Math.sin(e *= k), s = Math.cos(e), qt.point = nextPoint
                    }, qt.lineEnd = function () {
                        qt.point = qt.lineEnd = d3_noop
                    }
                }, lineEnd: d3_noop, polygonStart: d3_noop, polygonEnd: d3_noop
            };

            function d3_geo_azimuthal(a, i) {
                function azimuthal(t, e) {
                    var n = Math.cos(t), r = Math.cos(e), o = a(n * r);
                    return [o * r * Math.sin(t), o * Math.sin(e)]
                }

                return azimuthal.invert = function (t, e) {
                    var n = Math.sqrt(t * t + e * e), r = i(n), o = Math.sin(r), a = Math.cos(r);
                    return [Math.atan2(t * o, n * a), Math.asin(n && e * o / n)]
                }, azimuthal
            }

            var Ut = d3_geo_azimuthal(function (t) {
                return Math.sqrt(2 / (1 + t))
            }, function (t) {
                return 2 * Math.asin(t / 2)
            });
            (L.geo.azimuthalEqualArea = function () {
                return d3_geo_projection(Ut)
            }).raw = Ut;
            var jt = d3_geo_azimuthal(function (t) {
                var e = Math.acos(t);
                return e && e / Math.sin(e)
            }, d3_identity);

            function d3_geo_conicConformal(t, e) {
                var n = Math.cos(t), r = function (t) {
                        return Math.tan(V / 4 + t / 2)
                    }, o = t === e ? Math.sin(t) : Math.log(n / Math.cos(e)) / Math.log(r(e) / r(t)),
                    a = n * Math.pow(r(t), o) / o;
                if (!o) return d3_geo_mercator;

                function forward(t, e) {
                    0 < a ? e < -K + G && (e = -K + G) : K - G < e && (e = K - G);
                    var n = a / Math.pow(r(e), o);
                    return [n * Math.sin(o * t), a - n * Math.cos(o * t)]
                }

                return forward.invert = function (t, e) {
                    var n = a - e, r = d3_sgn(o) * Math.sqrt(t * t + n * n);
                    return [Math.atan2(t, n) / o, 2 * Math.atan(Math.pow(a / r, 1 / o)) - K]
                }, forward
            }

            function d3_geo_conicEquidistant(t, e) {
                var n = Math.cos(t), r = t === e ? Math.sin(t) : (n - Math.cos(e)) / (e - t), o = n / r + t;
                if (E(r) < G) return d3_geo_equirectangular;

                function forward(t, e) {
                    var n = o - e;
                    return [n * Math.sin(r * t), o - n * Math.cos(r * t)]
                }

                return forward.invert = function (t, e) {
                    var n = o - e;
                    return [Math.atan2(t, n) / r, o - d3_sgn(r) * Math.sqrt(t * t + n * n)]
                }, forward
            }

            (L.geo.azimuthalEquidistant = function () {
                return d3_geo_projection(jt)
            }).raw = jt, (L.geo.conicConformal = function () {
                return d3_geo_conic(d3_geo_conicConformal)
            }).raw = d3_geo_conicConformal, (L.geo.conicEquidistant = function () {
                return d3_geo_conic(d3_geo_conicEquidistant)
            }).raw = d3_geo_conicEquidistant;
            var Ht = d3_geo_azimuthal(function (t) {
                return 1 / t
            }, Math.atan);

            function d3_geo_mercator(t, e) {
                return [t, Math.log(Math.tan(V / 4 + e / 2))]
            }

            function d3_geo_mercatorProjection(t) {
                var o, a = d3_geo_projection(t), i = a.scale, l = a.translate, s = a.clipExtent;
                return a.scale = function () {
                    var t = i.apply(a, arguments);
                    return t === a ? o ? a.clipExtent(null) : a : t
                }, a.translate = function () {
                    var t = l.apply(a, arguments);
                    return t === a ? o ? a.clipExtent(null) : a : t
                }, a.clipExtent = function (t) {
                    var e = s.apply(a, arguments);
                    if (e === a) {
                        if (o = null == t) {
                            var n = V * i(), r = l();
                            s([[r[0] - n, r[1] - n], [r[0] + n, r[1] + n]])
                        }
                    } else o && (e = null);
                    return e
                }, a.clipExtent(null)
            }

            (L.geo.gnomonic = function () {
                return d3_geo_projection(Ht)
            }).raw = Ht, d3_geo_mercator.invert = function (t, e) {
                return [t, 2 * Math.atan(Math.exp(e)) - K]
            }, (L.geo.mercator = function () {
                return d3_geo_mercatorProjection(d3_geo_mercator)
            }).raw = d3_geo_mercator;
            var Ft = d3_geo_azimuthal(function () {
                return 1
            }, Math.asin);
            (L.geo.orthographic = function () {
                return d3_geo_projection(Ft)
            }).raw = Ft;
            var Yt = d3_geo_azimuthal(function (t) {
                return 1 / (1 + t)
            }, function (t) {
                return 2 * Math.atan(t)
            });

            function d3_geo_transverseMercator(t, e) {
                return [Math.log(Math.tan(V / 4 + e / 2)), -t]
            }

            function d3_geom_pointX(t) {
                return t[0]
            }

            function d3_geom_pointY(t) {
                return t[1]
            }

            function d3_geom_hullUpper(t) {
                for (var e = t.length, n = [0, 1], r = 2, o = 2; o < e; o++) {
                    for (; 1 < r && d3_cross2d(t[n[r - 2]], t[n[r - 1]], t[o]) <= 0;) --r;
                    n[r++] = o
                }
                return n.slice(0, r)
            }

            function d3_geom_hullOrder(t, e) {
                return t[0] - e[0] || t[1] - e[1]
            }

            (L.geo.stereographic = function () {
                return d3_geo_projection(Yt)
            }).raw = Yt, d3_geo_transverseMercator.invert = function (t, e) {
                return [-e, 2 * Math.atan(Math.exp(t)) - K]
            }, (L.geo.transverseMercator = function () {
                var t = d3_geo_mercatorProjection(d3_geo_transverseMercator), e = t.center, n = t.rotate;
                return t.center = function (t) {
                    return t ? e([-t[1], t[0]]) : [(t = e())[1], -t[0]]
                }, t.rotate = function (t) {
                    return t ? n([t[0], t[1], 2 < t.length ? t[2] + 90 : 90]) : [(t = n())[0], t[1], t[2] - 90]
                }, n([0, 0, 90])
            }).raw = d3_geo_transverseMercator, L.geom = {}, L.geom.hull = function (t) {
                var d = d3_geom_pointX, _ = d3_geom_pointY;
                if (arguments.length) return hull(t);

                function hull(t) {
                    if (t.length < 3) return [];
                    var e, n = d3_functor(d), r = d3_functor(_), o = t.length, a = [], i = [];
                    for (e = 0; e < o; e++) a.push([+n.call(this, t[e], e), +r.call(this, t[e], e), e]);
                    for (a.sort(d3_geom_hullOrder), e = 0; e < o; e++) i.push([a[e][0], -a[e][1]]);
                    var l = d3_geom_hullUpper(a), s = d3_geom_hullUpper(i), u = s[0] === l[0],
                        c = s[s.length - 1] === l[l.length - 1], p = [];
                    for (e = l.length - 1; 0 <= e; --e) p.push(t[a[l[e]][2]]);
                    for (e = +u; e < s.length - c; ++e) p.push(t[a[s[e]][2]]);
                    return p
                }

                return hull.x = function (t) {
                    return arguments.length ? (d = t, hull) : d
                }, hull.y = function (t) {
                    return arguments.length ? (_ = t, hull) : _
                }, hull
            }, L.geom.polygon = function (t) {
                return p(t, Gt), t
            };
            var Gt = L.geom.polygon.prototype = [];

            function d3_geom_polygonInside(t, e, n) {
                return (n[0] - e[0]) * (t[1] - e[1]) < (n[1] - e[1]) * (t[0] - e[0])
            }

            function d3_geom_polygonIntersect(t, e, n, r) {
                var o = t[0], a = n[0], i = e[0] - o, l = r[0] - a, s = t[1], u = n[1], c = e[1] - s, p = r[1] - u,
                    d = (l * (s - u) - p * (o - a)) / (p * i - l * c);
                return [o + d * i, s + d * c]
            }

            function d3_geom_polygonClosed(t) {
                var e = t[0], n = t[t.length - 1];
                return !(e[0] - n[0] || e[1] - n[1])
            }

            Gt.area = function () {
                for (var t, e = -1, n = this.length, r = this[n - 1], o = 0; ++e < n;) t = r, r = this[e], o += t[1] * r[0] - t[0] * r[1];
                return .5 * o
            }, Gt.centroid = function (t) {
                var e, n, r = -1, o = this.length, a = 0, i = 0, l = this[o - 1];
                for (arguments.length || (t = -1 / (6 * this.area())); ++r < o;) e = l, l = this[r], n = e[0] * l[1] - l[0] * e[1], a += (e[0] + l[0]) * n, i += (e[1] + l[1]) * n;
                return [a * t, i * t]
            }, Gt.clip = function (t) {
                for (var e, n, r, o, a, i, l = d3_geom_polygonClosed(t), s = -1, u = this.length - d3_geom_polygonClosed(this), c = this[u - 1]; ++s < u;) {
                    for (e = t.slice(), t.length = 0, o = this[s], a = e[(r = e.length - l) - 1], n = -1; ++n < r;) d3_geom_polygonInside(i = e[n], c, o) ? (d3_geom_polygonInside(a, c, o) || t.push(d3_geom_polygonIntersect(a, i, c, o)), t.push(i)) : d3_geom_polygonInside(a, c, o) && t.push(d3_geom_polygonIntersect(a, i, c, o)), a = i;
                    l && t.push(t[0]), c = o
                }
                return t
            };
            var Vt, Wt, Kt, Xt, Zt, Jt = [], $t = [];

            function d3_geom_voronoiBeach() {
                d3_geom_voronoiRedBlackNode(this), this.edge = this.site = this.circle = null
            }

            function d3_geom_voronoiCreateBeach(t) {
                var e = Jt.pop() || new d3_geom_voronoiBeach;
                return e.site = t, e
            }

            function d3_geom_voronoiDetachBeach(t) {
                d3_geom_voronoiDetachCircle(t), Kt.remove(t), Jt.push(t), d3_geom_voronoiRedBlackNode(t)
            }

            function d3_geom_voronoiRemoveBeach(t) {
                var e = t.circle, n = e.x, r = e.cy, o = {x: n, y: r}, a = t.P, i = t.N, l = [t];
                d3_geom_voronoiDetachBeach(t);
                for (var s = a; s.circle && E(n - s.circle.x) < G && E(r - s.circle.cy) < G;) a = s.P, l.unshift(s), d3_geom_voronoiDetachBeach(s), s = a;
                l.unshift(s), d3_geom_voronoiDetachCircle(s);
                for (var u = i; u.circle && E(n - u.circle.x) < G && E(r - u.circle.cy) < G;) i = u.N, l.push(u), d3_geom_voronoiDetachBeach(u), u = i;
                l.push(u), d3_geom_voronoiDetachCircle(u);
                var c, p = l.length;
                for (c = 1; c < p; ++c) u = l[c], s = l[c - 1], d3_geom_voronoiSetEdgeEnd(u.edge, s.site, u.site, o);
                s = l[0], (u = l[p - 1]).edge = d3_geom_voronoiCreateEdge(s.site, u.site, null, o), d3_geom_voronoiAttachCircle(s), d3_geom_voronoiAttachCircle(u)
            }

            function d3_geom_voronoiAddBeach(t) {
                for (var e, n, r, o, a = t.x, i = t.y, l = Kt._; l;) if (r = d3_geom_voronoiLeftBreakPoint(l, i) - a, G < r) l = l.L; else {
                    if (o = a - d3_geom_voronoiRightBreakPoint(l, i), !(G < o)) {
                        -G < r ? (e = l.P, n = l) : -G < o ? n = (e = l).N : e = n = l;
                        break
                    }
                    if (!l.R) {
                        e = l;
                        break
                    }
                    l = l.R
                }
                var s = d3_geom_voronoiCreateBeach(t);
                if (Kt.insert(e, s), e || n) {
                    if (e === n) return d3_geom_voronoiDetachCircle(e), n = d3_geom_voronoiCreateBeach(e.site), Kt.insert(s, n), s.edge = n.edge = d3_geom_voronoiCreateEdge(e.site, s.site), d3_geom_voronoiAttachCircle(e), void d3_geom_voronoiAttachCircle(n);
                    if (n) {
                        d3_geom_voronoiDetachCircle(e), d3_geom_voronoiDetachCircle(n);
                        var u = e.site, c = u.x, p = u.y, d = t.x - c, _ = t.y - p, f = n.site, h = f.x - c,
                            g = f.y - p, y = 2 * (d * g - _ * h), m = d * d + _ * _, v = h * h + g * g,
                            b = {x: (g * m - _ * v) / y + c, y: (d * v - h * m) / y + p};
                        d3_geom_voronoiSetEdgeEnd(n.edge, u, f, b), s.edge = d3_geom_voronoiCreateEdge(u, t, null, b), n.edge = d3_geom_voronoiCreateEdge(t, f, null, b), d3_geom_voronoiAttachCircle(e), d3_geom_voronoiAttachCircle(n)
                    } else s.edge = d3_geom_voronoiCreateEdge(e.site, s.site)
                }
            }

            function d3_geom_voronoiLeftBreakPoint(t, e) {
                var n = t.site, r = n.x, o = n.y, a = o - e;
                if (!a) return r;
                var i = t.P;
                if (!i) return -1 / 0;
                var l = (n = i.site).x, s = n.y, u = s - e;
                if (!u) return l;
                var c = l - r, p = 1 / a - 1 / u, d = c / u;
                return p ? (-d + Math.sqrt(d * d - 2 * p * (c * c / (-2 * u) - s + u / 2 + o - a / 2))) / p + r : (r + l) / 2
            }

            function d3_geom_voronoiRightBreakPoint(t, e) {
                var n = t.N;
                if (n) return d3_geom_voronoiLeftBreakPoint(n, e);
                var r = t.site;
                return r.y === e ? r.x : 1 / 0
            }

            function d3_geom_voronoiCell(t) {
                this.site = t, this.edges = []
            }

            function d3_geom_voronoiHalfEdgeOrder(t, e) {
                return e.angle - t.angle
            }

            function d3_geom_voronoiCircle() {
                d3_geom_voronoiRedBlackNode(this), this.x = this.y = this.arc = this.site = this.cy = null
            }

            function d3_geom_voronoiAttachCircle(t) {
                var e = t.P, n = t.N;
                if (e && n) {
                    var r = e.site, o = t.site, a = n.site;
                    if (r !== a) {
                        var i = o.x, l = o.y, s = r.x - i, u = r.y - l, c = a.x - i,
                            p = 2 * (s * (g = a.y - l) - u * c);
                        if (!(-w <= p)) {
                            var d = s * s + u * u, _ = c * c + g * g, f = (g * d - u * _) / p, h = (s * _ - c * d) / p,
                                g = h + l, y = $t.pop() || new d3_geom_voronoiCircle;
                            y.arc = t, y.site = o, y.x = f + i, y.y = g + Math.sqrt(f * f + h * h), y.cy = g, t.circle = y;
                            for (var m = null, v = Zt._; v;) if (y.y < v.y || y.y === v.y && y.x <= v.x) {
                                if (!v.L) {
                                    m = v.P;
                                    break
                                }
                                v = v.L
                            } else {
                                if (!v.R) {
                                    m = v;
                                    break
                                }
                                v = v.R
                            }
                            Zt.insert(m, y), m || (Xt = y)
                        }
                    }
                }
            }

            function d3_geom_voronoiDetachCircle(t) {
                var e = t.circle;
                e && (e.P || (Xt = e.N), Zt.remove(e), $t.push(e), d3_geom_voronoiRedBlackNode(e), t.circle = null)
            }

            function d3_geom_voronoiConnectEdge(t, e) {
                var n = t.b;
                if (n) return !0;
                var r, o, a = t.a, i = e[0][0], l = e[1][0], s = e[0][1], u = e[1][1], c = t.l, p = t.r, d = c.x,
                    _ = c.y, f = p.x, h = p.y, g = (d + f) / 2, y = (_ + h) / 2;
                if (h === _) {
                    if (g < i || l <= g) return;
                    if (f < d) {
                        if (a) {
                            if (a.y >= u) return
                        } else a = {x: g, y: s};
                        n = {x: g, y: u}
                    } else {
                        if (a) {
                            if (a.y < s) return
                        } else a = {x: g, y: u};
                        n = {x: g, y: s}
                    }
                } else if (o = y - (r = (d - f) / (h - _)) * g, r < -1 || 1 < r) if (f < d) {
                    if (a) {
                        if (a.y >= u) return
                    } else a = {x: (s - o) / r, y: s};
                    n = {x: (u - o) / r, y: u}
                } else {
                    if (a) {
                        if (a.y < s) return
                    } else a = {x: (u - o) / r, y: u};
                    n = {x: (s - o) / r, y: s}
                } else if (_ < h) {
                    if (a) {
                        if (a.x >= l) return
                    } else a = {x: i, y: r * i + o};
                    n = {x: l, y: r * l + o}
                } else {
                    if (a) {
                        if (a.x < i) return
                    } else a = {x: l, y: r * l + o};
                    n = {x: i, y: r * i + o}
                }
                return t.a = a, t.b = n, !0
            }

            function d3_geom_voronoiEdge(t, e) {
                this.l = t, this.r = e, this.a = this.b = null
            }

            function d3_geom_voronoiCreateEdge(t, e, n, r) {
                var o = new d3_geom_voronoiEdge(t, e);
                return Vt.push(o), n && d3_geom_voronoiSetEdgeEnd(o, t, e, n), r && d3_geom_voronoiSetEdgeEnd(o, e, t, r), Wt[t.i].edges.push(new d3_geom_voronoiHalfEdge(o, t, e)), Wt[e.i].edges.push(new d3_geom_voronoiHalfEdge(o, e, t)), o
            }

            function d3_geom_voronoiSetEdgeEnd(t, e, n, r) {
                t.a || t.b ? t.l === n ? t.b = r : t.a = r : (t.a = r, t.l = e, t.r = n)
            }

            function d3_geom_voronoiHalfEdge(t, e, n) {
                var r = t.a, o = t.b;
                this.edge = t, this.site = e, this.angle = n ? Math.atan2(n.y - e.y, n.x - e.x) : t.l === e ? Math.atan2(o.x - r.x, r.y - o.y) : Math.atan2(r.x - o.x, o.y - r.y)
            }

            function d3_geom_voronoiRedBlackTree() {
                this._ = null
            }

            function d3_geom_voronoiRedBlackNode(t) {
                t.U = t.C = t.L = t.R = t.P = t.N = null
            }

            function d3_geom_voronoiRedBlackRotateLeft(t, e) {
                var n = e, r = e.R, o = n.U;
                o ? o.L === n ? o.L = r : o.R = r : t._ = r, r.U = o, n.U = r, n.R = r.L, n.R && (n.R.U = n), r.L = n
            }

            function d3_geom_voronoiRedBlackRotateRight(t, e) {
                var n = e, r = e.L, o = n.U;
                o ? o.L === n ? o.L = r : o.R = r : t._ = r, r.U = o, n.U = r, n.L = r.R, n.L && (n.L.U = n), r.R = n
            }

            function d3_geom_voronoiRedBlackFirst(t) {
                for (; t.L;) t = t.L;
                return t
            }

            function d3_geom_voronoi(t, e) {
                var n, r, o, a = t.sort(d3_geom_voronoiVertexOrder).pop();
                for (Vt = [], Wt = new Array(t.length), Kt = new d3_geom_voronoiRedBlackTree, Zt = new d3_geom_voronoiRedBlackTree; ;) if (o = Xt, a && (!o || a.y < o.y || a.y === o.y && a.x < o.x)) a.x === n && a.y === r || (Wt[a.i] = new d3_geom_voronoiCell(a), d3_geom_voronoiAddBeach(a), n = a.x, r = a.y), a = t.pop(); else {
                    if (!o) break;
                    d3_geom_voronoiRemoveBeach(o.arc)
                }
                e && (function (t) {
                    for (var e, n = Vt, r = d3_geom_clipLine(t[0][0], t[0][1], t[1][0], t[1][1]), o = n.length; o--;) (!d3_geom_voronoiConnectEdge(e = n[o], t) || !r(e) || E(e.a.x - e.b.x) < G && E(e.a.y - e.b.y) < G) && (e.a = e.b = null, n.splice(o, 1))
                }(e), function (t) {
                    for (var e, n, r, o, a, i, l, s, u, c, p = t[0][0], d = t[1][0], _ = t[0][1], f = t[1][1], h = Wt, g = h.length; g--;) if ((a = h[g]) && a.prepare()) for (s = (l = a.edges).length, i = 0; i < s;) r = (c = l[i].end()).x, o = c.y, e = (u = l[++i % s].start()).x, n = u.y, (E(r - e) > G || E(o - n) > G) && (l.splice(i, 0, new d3_geom_voronoiHalfEdge((y = a.site, m = c, v = E(r - p) < G && G < f - o ? {
                        x: p,
                        y: E(e - p) < G ? n : f
                    } : E(o - f) < G && G < d - r ? {x: E(n - f) < G ? e : d, y: f} : E(r - d) < G && G < o - _ ? {
                        x: d,
                        y: E(e - d) < G ? n : _
                    } : E(o - _) < G && G < r - p ? {
                        x: E(n - _) < G ? e : p,
                        y: _
                    } : null, b = void 0, b = new d3_geom_voronoiEdge(y, null), b.a = m, b.b = v, Vt.push(b), b), a.site, null)), ++s);
                    var y, m, v, b
                }(e));
                var i = {cells: Wt, edges: Vt};
                return Kt = Zt = Vt = Wt = null, i
            }

            function d3_geom_voronoiVertexOrder(t, e) {
                return e.y - t.y || e.x - t.x
            }

            d3_geom_voronoiCell.prototype.prepare = function () {
                for (var t, e = this.edges, n = e.length; n--;) (t = e[n].edge).b && t.a || e.splice(n, 1);
                return e.sort(d3_geom_voronoiHalfEdgeOrder), e.length
            }, d3_geom_voronoiHalfEdge.prototype = {
                start: function () {
                    return this.edge.l === this.site ? this.edge.a : this.edge.b
                }, end: function () {
                    return this.edge.l === this.site ? this.edge.b : this.edge.a
                }
            }, d3_geom_voronoiRedBlackTree.prototype = {
                insert: function (t, e) {
                    var n, r, o;
                    if (t) {
                        if (e.P = t, e.N = t.N, t.N && (t.N.P = e), t.N = e, t.R) {
                            for (t = t.R; t.L;) t = t.L;
                            t.L = e
                        } else t.R = e;
                        n = t
                    } else n = this._ ? (t = d3_geom_voronoiRedBlackFirst(this._), e.P = null, (e.N = t).P = t.L = e, t) : (e.P = e.N = null, this._ = e, null);
                    for (e.L = e.R = null, e.U = n, e.C = !0, t = e; n && n.C;) n === (r = n.U).L ? (o = r.R) && o.C ? (n.C = o.C = !1, r.C = !0, t = r) : (t === n.R && (d3_geom_voronoiRedBlackRotateLeft(this, n), n = (t = n).U), n.C = !1, r.C = !0, d3_geom_voronoiRedBlackRotateRight(this, r)) : (o = r.L) && o.C ? (n.C = o.C = !1, r.C = !0, t = r) : (t === n.L && (d3_geom_voronoiRedBlackRotateRight(this, n), n = (t = n).U), n.C = !1, r.C = !0, d3_geom_voronoiRedBlackRotateLeft(this, r)), n = t.U;
                    this._.C = !1
                }, remove: function (t) {
                    t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;
                    var e, n, r, o = t.U, a = t.L, i = t.R;
                    if (n = a ? i ? d3_geom_voronoiRedBlackFirst(i) : a : i, o ? o.L === t ? o.L = n : o.R = n : this._ = n, a && i ? (r = n.C, n.C = t.C, ((n.L = a).U = n) !== i ? (o = n.U, n.U = t.U, t = n.R, o.L = t, (n.R = i).U = n) : (n.U = o, t = (o = n).R)) : (r = t.C, t = n), t && (t.U = o), !r) if (t && t.C) t.C = !1; else {
                        do {
                            if (t === this._) break;
                            if (t === o.L) {
                                if ((e = o.R).C && (e.C = !1, o.C = !0, d3_geom_voronoiRedBlackRotateLeft(this, o), e = o.R), e.L && e.L.C || e.R && e.R.C) {
                                    e.R && e.R.C || (e.L.C = !1, e.C = !0, d3_geom_voronoiRedBlackRotateRight(this, e), e = o.R), e.C = o.C, o.C = e.R.C = !1, d3_geom_voronoiRedBlackRotateLeft(this, o), t = this._;
                                    break
                                }
                            } else if ((e = o.L).C && (e.C = !1, o.C = !0, d3_geom_voronoiRedBlackRotateRight(this, o), e = o.L), e.L && e.L.C || e.R && e.R.C) {
                                e.L && e.L.C || (e.R.C = !1, e.C = !0, d3_geom_voronoiRedBlackRotateLeft(this, e), e = o.L), e.C = o.C, o.C = e.L.C = !1, d3_geom_voronoiRedBlackRotateRight(this, o), t = this._;
                                break
                            }
                            e.C = !0, o = (t = o).U
                        } while (!t.C);
                        t && (t.C = !1)
                    }
                }
            }, L.geom.voronoi = function (t) {
                var e = d3_geom_pointX, n = d3_geom_pointY, r = e, o = n, c = Qt;
                if (t) return voronoi(t);

                function voronoi(o) {
                    var a = new Array(o.length), i = c[0][0], l = c[0][1], s = c[1][0], u = c[1][1];
                    return d3_geom_voronoi(sites(o), c).cells.forEach(function (t, e) {
                        var n = t.edges, r = t.site;
                        (a[e] = n.length ? n.map(function (t) {
                            var e = t.start();
                            return [e.x, e.y]
                        }) : r.x >= i && r.x <= s && r.y >= l && r.y <= u ? [[i, u], [s, u], [s, l], [i, l]] : []).point = o[e]
                    }), a
                }

                function sites(t) {
                    return t.map(function (t, e) {
                        return {x: Math.round(r(t, e) / G) * G, y: Math.round(o(t, e) / G) * G, i: e}
                    })
                }

                return voronoi.links = function (e) {
                    return d3_geom_voronoi(sites(e)).edges.filter(function (t) {
                        return t.l && t.r
                    }).map(function (t) {
                        return {source: e[t.l.i], target: e[t.r.i]}
                    })
                }, voronoi.triangles = function (d) {
                    var _ = [];
                    return d3_geom_voronoi(sites(d)).cells.forEach(function (t, e) {
                        for (var n, r, o, a, i = t.site, l = t.edges.sort(d3_geom_voronoiHalfEdgeOrder), s = -1, u = l.length, c = l[u - 1].edge, p = c.l === i ? c.r : c.l; ++s < u;) c, n = p, p = (c = l[s].edge).l === i ? c.r : c.l, e < n.i && e < p.i && (o = n, a = p, ((r = i).x - a.x) * (o.y - r.y) - (r.x - o.x) * (a.y - r.y) < 0) && _.push([d[e], d[n.i], d[p.i]])
                    }), _
                }, voronoi.x = function (t) {
                    return arguments.length ? (r = d3_functor(e = t), voronoi) : e
                }, voronoi.y = function (t) {
                    return arguments.length ? (o = d3_functor(n = t), voronoi) : n
                }, voronoi.clipExtent = function (t) {
                    return arguments.length ? (c = null == t ? Qt : t, voronoi) : c === Qt ? null : c
                }, voronoi.size = function (t) {
                    return arguments.length ? voronoi.clipExtent(t && [[0, 0], t]) : c === Qt ? null : c && c[1]
                }, voronoi
            };
            var Qt = [[-1e6, -1e6], [1e6, 1e6]];

            function d3_geom_quadtreeCompatX(t) {
                return t.x
            }

            function d3_geom_quadtreeCompatY(t) {
                return t.y
            }

            function d3_interpolateRgb(t, e) {
                t = L.rgb(t), e = L.rgb(e);
                var n = t.r, r = t.g, o = t.b, a = e.r - n, i = e.g - r, l = e.b - o;
                return function (t) {
                    return "#" + d3_rgb_hex(Math.round(n + a * t)) + d3_rgb_hex(Math.round(r + i * t)) + d3_rgb_hex(Math.round(o + l * t))
                }
            }

            function d3_interpolateObject(t, e) {
                var n, r = {}, o = {};
                for (n in t) n in e ? r[n] = d3_interpolate(t[n], e[n]) : o[n] = t[n];
                for (n in e) n in t || (o[n] = e[n]);
                return function (t) {
                    for (n in r) o[n] = r[n](t);
                    return o
                }
            }

            function d3_interpolateNumber(e, n) {
                return e = +e, n = +n, function (t) {
                    return e * (1 - t) + n * t
                }
            }

            function d3_interpolateString(t, r) {
                var e, n, o, a = te.lastIndex = ee.lastIndex = 0, i = -1, l = [], s = [];
                for (t += "", r += ""; (e = te.exec(t)) && (n = ee.exec(r));) (o = n.index) > a && (o = r.slice(a, o), l[i] ? l[i] += o : l[++i] = o), (e = e[0]) === (n = n[0]) ? l[i] ? l[i] += n : l[++i] = n : (l[++i] = null, s.push({
                    i: i,
                    x: d3_interpolateNumber(e, n)
                })), a = ee.lastIndex;
                return a < r.length && (o = r.slice(a), l[i] ? l[i] += o : l[++i] = o), l.length < 2 ? s[0] ? (r = s[0].x, function (t) {
                    return r(t) + ""
                }) : function () {
                    return r
                } : (r = s.length, function (t) {
                    for (var e, n = 0; n < r; ++n) l[(e = s[n]).i] = e.x(t);
                    return l.join("")
                })
            }

            L.geom.delaunay = function (t) {
                return L.geom.voronoi().triangles(t)
            }, L.geom.quadtree = function (t, g, y, m, v) {
                var b, M = d3_geom_pointX, x = d3_geom_pointY;
                if (b = arguments.length) return M = d3_geom_quadtreeCompatX, x = d3_geom_quadtreeCompatY, 3 === b && (v = y, m = g, y = g = 0), quadtree(t);

                function quadtree(t) {
                    var e, n, r, o, a, i, l, s, u, c = d3_functor(M), p = d3_functor(x);
                    if (null != g) i = g, l = y, s = m, u = v; else if (s = u = -(i = l = 1 / 0), n = [], r = [], a = t.length, b) for (o = 0; o < a; ++o) (e = t[o]).x < i && (i = e.x), e.y < l && (l = e.y), e.x > s && (s = e.x), e.y > u && (u = e.y), n.push(e.x), r.push(e.y); else for (o = 0; o < a; ++o) {
                        var d = +c(e = t[o], o), _ = +p(e, o);
                        d < i && (i = d), _ < l && (l = _), s < d && (s = d), u < _ && (u = _), n.push(d), r.push(_)
                    }
                    var f = s - i, h = u - l;

                    function insert(t, e, n, r, o, a, i, l) {
                        if (!isNaN(n) && !isNaN(r)) if (t.leaf) {
                            var s = t.x, u = t.y;
                            if (null != s) if (E(s - n) + E(u - r) < .01) insertChild(t, e, n, r, o, a, i, l); else {
                                var c = t.point;
                                t.x = t.y = t.point = null, insertChild(t, c, s, u, o, a, i, l), insertChild(t, e, n, r, o, a, i, l)
                            } else t.x = n, t.y = r, t.point = e
                        } else insertChild(t, e, n, r, o, a, i, l)
                    }

                    function insertChild(t, e, n, r, o, a, i, l) {
                        var s = .5 * (o + i), u = .5 * (a + l), c = s <= n, p = u <= r, d = p << 1 | c;
                        t.leaf = !1, c ? o = s : i = s, p ? a = u : l = u, insert(t = t.nodes[d] || (t.nodes[d] = {
                            leaf: !0,
                            nodes: [],
                            point: null,
                            x: null,
                            y: null
                        }), e, n, r, o, a, i, l)
                    }

                    h < f ? u = l + f : s = i + h;
                    var T = {
                        leaf: !0, nodes: [], point: null, x: null, y: null, add: function (t) {
                            insert(T, t, +c(t, ++o), +p(t, o), i, l, s, u)
                        }
                    };
                    if (T.visit = function (t) {
                        !function d3_geom_quadtreeVisit(t, e, n, r, o, a) {
                            if (!t(e, n, r, o, a)) {
                                var i = .5 * (n + o), l = .5 * (r + a), s = e.nodes;
                                s[0] && d3_geom_quadtreeVisit(t, s[0], n, r, i, l), s[1] && d3_geom_quadtreeVisit(t, s[1], i, r, o, l), s[2] && d3_geom_quadtreeVisit(t, s[2], n, l, i, a), s[3] && d3_geom_quadtreeVisit(t, s[3], i, l, o, a)
                            }
                        }(t, T, i, l, s, u)
                    }, T.find = function (t) {
                        return e = T, h = t[0], g = t[1], x = 1 / 0, function find(t, e, n, r, o) {
                            if (!(v < e || b < n || r < y || o < m)) {
                                if (a = t.point) {
                                    var a, i = h - t.x, l = g - t.y, s = i * i + l * l;
                                    if (s < x) {
                                        var u = Math.sqrt(x = s);
                                        y = h - u, m = g - u, v = h + u, b = g + u, M = a
                                    }
                                }
                                for (var c = t.nodes, p = .5 * (e + r), d = .5 * (n + o), _ = (d <= g) << 1 | p <= h, f = _ + 4; _ < f; ++_) if (t = c[3 & _]) switch (3 & _) {
                                    case 0:
                                        find(t, e, n, p, d);
                                        break;
                                    case 1:
                                        find(t, p, n, r, d);
                                        break;
                                    case 2:
                                        find(t, e, d, p, o);
                                        break;
                                    case 3:
                                        find(t, p, d, r, o)
                                }
                            }
                        }(e, y = i, m = l, v = s, b = u), M;
                        var e, h, g, y, m, v, b, M, x
                    }, o = -1, null == g) {
                        for (; ++o < a;) insert(T, t[o], n[o], r[o], i, l, s, u);
                        --o
                    } else t.forEach(T.add);
                    return n = r = t = e = null, T
                }

                return quadtree.x = function (t) {
                    return arguments.length ? (M = t, quadtree) : M
                }, quadtree.y = function (t) {
                    return arguments.length ? (x = t, quadtree) : x
                }, quadtree.extent = function (t) {
                    return arguments.length ? (null == t ? g = y = m = v = null : (g = +t[0][0], y = +t[0][1], m = +t[1][0], v = +t[1][1]), quadtree) : null == g ? null : [[g, y], [m, v]]
                }, quadtree.size = function (t) {
                    return arguments.length ? (null == t ? g = y = m = v = null : (g = y = 0, m = +t[0], v = +t[1]), quadtree) : null == g ? null : [m - g, v - y]
                }, quadtree
            }, L.interpolateRgb = d3_interpolateRgb, L.interpolateObject = d3_interpolateObject, L.interpolateNumber = d3_interpolateNumber, L.interpolateString = d3_interpolateString;
            var te = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ee = new RegExp(te.source, "g");

            function d3_interpolate(t, e) {
                for (var n, r = L.interpolators.length; 0 <= --r && !(n = L.interpolators[r](t, e));) ;
                return n
            }

            function d3_interpolateArray(t, e) {
                var n, r = [], o = [], a = t.length, i = e.length, l = Math.min(t.length, e.length);
                for (n = 0; n < l; ++n) r.push(d3_interpolate(t[n], e[n]));
                for (; n < a; ++n) o[n] = t[n];
                for (; n < i; ++n) o[n] = e[n];
                return function (t) {
                    for (n = 0; n < l; ++n) o[n] = r[n](t);
                    return o
                }
            }

            L.interpolate = d3_interpolate, L.interpolators = [function (t, e) {
                var n = typeof e;
                return ("string" === n ? F.has(e.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(e) ? d3_interpolateRgb : d3_interpolateString : e instanceof d3_color ? d3_interpolateRgb : Array.isArray(e) ? d3_interpolateArray : "object" === n && isNaN(e) ? d3_interpolateObject : d3_interpolateNumber)(t, e)
            }], L.interpolateArray = d3_interpolateArray;
            var ne = function () {
                return d3_identity
            }, re = L.map({
                linear: ne, poly: function (e) {
                    return function (t) {
                        return Math.pow(t, e)
                    }
                }, quad: function () {
                    return d3_ease_quad
                }, cubic: function () {
                    return d3_ease_cubic
                }, sin: function () {
                    return d3_ease_sin
                }, exp: function () {
                    return d3_ease_exp
                }, circle: function () {
                    return d3_ease_circle
                }, elastic: function (e, n) {
                    var r;
                    arguments.length < 2 && (n = .45);
                    r = arguments.length ? n / N * Math.asin(1 / e) : (e = 1, n / 4);
                    return function (t) {
                        return 1 + e * Math.pow(2, -10 * t) * Math.sin((t - r) * N / n)
                    }
                }, back: function (e) {
                    e || (e = 1.70158);
                    return function (t) {
                        return t * t * ((e + 1) * t - e)
                    }
                }, bounce: function () {
                    return d3_ease_bounce
                }
            }), oe = L.map({
                in: d3_identity, out: d3_ease_reverse, "in-out": d3_ease_reflect, "out-in": function (t) {
                    return d3_ease_reflect(d3_ease_reverse(t))
                }
            });

            function d3_ease_reverse(e) {
                return function (t) {
                    return 1 - e(1 - t)
                }
            }

            function d3_ease_reflect(e) {
                return function (t) {
                    return .5 * (t < .5 ? e(2 * t) : 2 - e(2 - 2 * t))
                }
            }

            function d3_ease_quad(t) {
                return t * t
            }

            function d3_ease_cubic(t) {
                return t * t * t
            }

            function d3_ease_cubicInOut(t) {
                if (t <= 0) return 0;
                if (1 <= t) return 1;
                var e = t * t, n = e * t;
                return 4 * (t < .5 ? n : 3 * (t - e) + n - .75)
            }

            function d3_ease_sin(t) {
                return 1 - Math.cos(t * K)
            }

            function d3_ease_exp(t) {
                return Math.pow(2, 10 * (t - 1))
            }

            function d3_ease_circle(t) {
                return 1 - Math.sqrt(1 - t * t)
            }

            function d3_ease_bounce(t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }

            function d3_interpolateRound(e, n) {
                return n -= e, function (t) {
                    return Math.round(e + n * t)
                }
            }

            function d3_transform(t) {
                var e, n, r, o = [t.a, t.b], a = [t.c, t.d], i = d3_transformNormalize(o), l = d3_transformDot(o, a),
                    s = d3_transformNormalize(((e = a)[0] += (r = -l) * (n = o)[0], e[1] += r * n[1], e)) || 0;
                o[0] * a[1] < a[0] * o[1] && (o[0] *= -1, o[1] *= -1, i *= -1, l *= -1), this.rotate = (i ? Math.atan2(o[1], o[0]) : Math.atan2(-a[0], a[1])) * D, this.translate = [t.e, t.f], this.scale = [i, s], this.skew = s ? Math.atan2(l, s) * D : 0
            }

            function d3_transformDot(t, e) {
                return t[0] * e[0] + t[1] * e[1]
            }

            function d3_transformNormalize(t) {
                var e = Math.sqrt(d3_transformDot(t, t));
                return e && (t[0] /= e, t[1] /= e), e
            }

            L.ease = function (t) {
                var e, n = t.indexOf("-"), r = 0 <= n ? t.slice(0, n) : t, o = 0 <= n ? t.slice(n + 1) : "in";
                return r = re.get(r) || ne, o = oe.get(o) || d3_identity, e = o(r.apply(null, a.call(arguments, 1))), function (t) {
                    return t <= 0 ? 0 : 1 <= t ? 1 : e(t)
                }
            }, L.interpolateHcl = function (t, e) {
                t = L.hcl(t), e = L.hcl(e);
                var n = t.h, r = t.c, o = t.l, a = e.h - n, i = e.c - r, l = e.l - o;
                isNaN(i) && (i = 0, r = isNaN(r) ? e.c : r);
                isNaN(a) ? (a = 0, n = isNaN(n) ? e.h : n) : 180 < a ? a -= 360 : a < -180 && (a += 360);
                return function (t) {
                    return d3_hcl_lab(n + a * t, r + i * t, o + l * t) + ""
                }
            }, L.interpolateHsl = function (t, e) {
                t = L.hsl(t), e = L.hsl(e);
                var n = t.h, r = t.s, o = t.l, a = e.h - n, i = e.s - r, l = e.l - o;
                isNaN(i) && (i = 0, r = isNaN(r) ? e.s : r);
                isNaN(a) ? (a = 0, n = isNaN(n) ? e.h : n) : 180 < a ? a -= 360 : a < -180 && (a += 360);
                return function (t) {
                    return d3_hsl_rgb(n + a * t, r + i * t, o + l * t) + ""
                }
            }, L.interpolateLab = function (t, e) {
                t = L.lab(t), e = L.lab(e);
                var n = t.l, r = t.a, o = t.b, a = e.l - n, i = e.a - r, l = e.b - o;
                return function (t) {
                    return d3_lab_rgb(n + a * t, r + i * t, o + l * t) + ""
                }
            }, L.interpolateRound = d3_interpolateRound, L.transform = function (t) {
                var n = h.createElementNS(L.ns.prefix.svg, "g");
                return (L.transform = function (t) {
                    if (null != t) {
                        n.setAttribute("transform", t);
                        var e = n.transform.baseVal.consolidate()
                    }
                    return new d3_transform(e ? e.matrix : ae)
                })(t)
            }, d3_transform.prototype.toString = function () {
                return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
            };
            var ae = {a: 1, b: 0, c: 0, d: 1, e: 0, f: 0};

            function d3_interpolateTransformPop(t) {
                return t.length ? t.pop() + "," : ""
            }

            function d3_interpolateTransform(t, e) {
                var n, r, o, a, i, l, s, u, c = [], p = [];
                return t = L.transform(t), e = L.transform(e), function (t, e, n, r) {
                    if (t[0] !== e[0] || t[1] !== e[1]) {
                        var o = n.push("translate(", null, ",", null, ")");
                        r.push({i: o - 4, x: d3_interpolateNumber(t[0], e[0])}, {
                            i: o - 2,
                            x: d3_interpolateNumber(t[1], e[1])
                        })
                    } else (e[0] || e[1]) && n.push("translate(" + e + ")")
                }(t.translate, e.translate, c, p), n = t.rotate, r = e.rotate, o = c, a = p, n !== r ? (180 < n - r ? r += 360 : 180 < r - n && (n += 360), a.push({
                    i: o.push(d3_interpolateTransformPop(o) + "rotate(", null, ")") - 2,
                    x: d3_interpolateNumber(n, r)
                })) : r && o.push(d3_interpolateTransformPop(o) + "rotate(" + r + ")"), i = t.skew, l = e.skew, s = c, u = p, i !== l ? u.push({
                    i: s.push(d3_interpolateTransformPop(s) + "skewX(", null, ")") - 2,
                    x: d3_interpolateNumber(i, l)
                }) : l && s.push(d3_interpolateTransformPop(s) + "skewX(" + l + ")"), function (t, e, n, r) {
                    if (t[0] !== e[0] || t[1] !== e[1]) {
                        var o = n.push(d3_interpolateTransformPop(n) + "scale(", null, ",", null, ")");
                        r.push({i: o - 4, x: d3_interpolateNumber(t[0], e[0])}, {
                            i: o - 2,
                            x: d3_interpolateNumber(t[1], e[1])
                        })
                    } else 1 === e[0] && 1 === e[1] || n.push(d3_interpolateTransformPop(n) + "scale(" + e + ")")
                }(t.scale, e.scale, c, p), t = e = null, function (t) {
                    for (var e, n = -1, r = p.length; ++n < r;) c[(e = p[n]).i] = e.x(t);
                    return c.join("")
                }
            }

            function d3_uninterpolateNumber(e, n) {
                return n = (n -= e = +e) || 1 / n, function (t) {
                    return (t - e) / n
                }
            }

            function d3_uninterpolateClamp(e, n) {
                return n = (n -= e = +e) || 1 / n, function (t) {
                    return Math.max(0, Math.min(1, (t - e) / n))
                }
            }

            function d3_layout_bundlePath(t) {
                for (var e = t.source, n = t.target, r = function (t, e) {
                    if (t === e) return t;
                    var n = d3_layout_bundleAncestors(t), r = d3_layout_bundleAncestors(e), o = n.pop(), a = r.pop(),
                        i = null;
                    for (; o === a;) i = o, o = n.pop(), a = r.pop();
                    return i
                }(e, n), o = [e]; e !== r;) e = e.parent, o.push(e);
                for (var a = o.length; n !== r;) o.splice(a, 0, n), n = n.parent;
                return o
            }

            function d3_layout_bundleAncestors(t) {
                for (var e = [], n = t.parent; null != n;) e.push(t), n = (t = n).parent;
                return e.push(t), e
            }

            function d3_layout_forceDragstart(t) {
                t.fixed |= 2
            }

            function d3_layout_forceDragend(t) {
                t.fixed &= -7
            }

            function d3_layout_forceMouseover(t) {
                t.fixed |= 4, t.px = t.x, t.py = t.y
            }

            function d3_layout_forceMouseout(t) {
                t.fixed &= -5
            }

            L.interpolateTransform = d3_interpolateTransform, L.layout = {}, L.layout.bundle = function () {
                return function (t) {
                    for (var e = [], n = -1, r = t.length; ++n < r;) e.push(d3_layout_bundlePath(t[n]));
                    return e
                }
            }, L.layout.chord = function () {
                var g, y, m, v, b, M, x, e = {}, T = 0;

                function relayout() {
                    var t, e, n, r, o, a = {}, i = [], l = L.range(v), s = [];
                    for (g = [], y = [], t = 0, r = -1; ++r < v;) {
                        for (e = 0, o = -1; ++o < v;) e += m[r][o];
                        i.push(e), s.push(L.range(v)), t += e
                    }
                    for (b && l.sort(function (t, e) {
                        return b(i[t], i[e])
                    }), M && s.forEach(function (t, n) {
                        t.sort(function (t, e) {
                            return M(m[n][t], m[n][e])
                        })
                    }), t = (N - T * v) / t, e = 0, r = -1; ++r < v;) {
                        for (n = e, o = -1; ++o < v;) {
                            var u = l[r], c = s[u][o], p = m[u][c], d = e, _ = e += p * t;
                            a[u + "-" + c] = {index: u, subindex: c, startAngle: d, endAngle: _, value: p}
                        }
                        y[u] = {index: u, startAngle: n, endAngle: e, value: i[u]}, e += T
                    }
                    for (r = -1; ++r < v;) for (o = r - 1; ++o < v;) {
                        var f = a[r + "-" + o], h = a[o + "-" + r];
                        (f.value || h.value) && g.push(f.value < h.value ? {source: h, target: f} : {
                            source: f,
                            target: h
                        })
                    }
                    x && resort()
                }

                function resort() {
                    g.sort(function (t, e) {
                        return x((t.source.value + t.target.value) / 2, (e.source.value + e.target.value) / 2)
                    })
                }

                return e.matrix = function (t) {
                    return arguments.length ? (v = (m = t) && m.length, g = y = null, e) : m
                }, e.padding = function (t) {
                    return arguments.length ? (T = t, g = y = null, e) : T
                }, e.sortGroups = function (t) {
                    return arguments.length ? (b = t, g = y = null, e) : b
                }, e.sortSubgroups = function (t) {
                    return arguments.length ? (M = t, g = null, e) : M
                }, e.sortChords = function (t) {
                    return arguments.length ? (x = t, g && resort(), e) : x
                }, e.chords = function () {
                    return g || relayout(), g
                }, e.groups = function () {
                    return y || relayout(), y
                }, e
            }, L.layout.force = function () {
                var p, t, d, _, f, h, r = {}, g = L.dispatch("start", "tick", "end"), y = [1, 1], m = .9, o = ie,
                    a = le, v = -30, c = se, b = .1, M = .64, x = [], T = [];

                function repulse(u) {
                    return function (t, e, n, r) {
                        if (t.point !== u) {
                            var o = t.cx - u.x, a = t.cy - u.y, i = r - e, l = o * o + a * a;
                            if (i * i / M < l) {
                                if (l < c) {
                                    var s = t.charge / l;
                                    u.px -= o * s, u.py -= a * s
                                }
                                return !0
                            }
                            if (t.point && l && l < c) {
                                s = t.pointCharge / l;
                                u.px -= o * s, u.py -= a * s
                            }
                        }
                        return !t.charge
                    }
                }

                function dragmove(t) {
                    t.px = L.event.x, t.py = L.event.y, r.resume()
                }

                return r.tick = function () {
                    if ((d *= .99) < .005) return p = null, g.end({type: "end", alpha: d = 0}), !0;
                    var t, e, n, r, o, a, i, l, s, u = x.length, c = T.length;
                    for (e = 0; e < c; ++e) r = (n = T[e]).source, (a = (l = (o = n.target).x - r.x) * l + (s = o.y - r.y) * s) && (l *= a = d * f[e] * ((a = Math.sqrt(a)) - _[e]) / a, s *= a, o.x -= l * (i = r.weight + o.weight ? r.weight / (r.weight + o.weight) : .5), o.y -= s * i, r.x += l * (i = 1 - i), r.y += s * i);
                    if ((i = d * b) && (l = y[0] / 2, s = y[1] / 2, e = -1, i)) for (; ++e < u;) (n = x[e]).x += (l - n.x) * i, n.y += (s - n.y) * i;
                    if (v) for (!function d3_layout_forceAccumulate(t, e, n) {
                        var r = 0, o = 0;
                        t.charge = 0;
                        if (!t.leaf) for (var a, i = t.nodes, l = i.length, s = -1; ++s < l;) null != (a = i[s]) && (d3_layout_forceAccumulate(a, e, n), t.charge += a.charge, r += a.charge * a.cx, o += a.charge * a.cy);
                        if (t.point) {
                            t.leaf || (t.point.x += Math.random() - .5, t.point.y += Math.random() - .5);
                            var u = e * n[t.point.index];
                            t.charge += t.pointCharge = u, r += u * t.point.x, o += u * t.point.y
                        }
                        t.cx = r / t.charge;
                        t.cy = o / t.charge
                    }(t = L.geom.quadtree(x), d, h), e = -1; ++e < u;) (n = x[e]).fixed || t.visit(repulse(n));
                    for (e = -1; ++e < u;) (n = x[e]).fixed ? (n.x = n.px, n.y = n.py) : (n.x -= (n.px - (n.px = n.x)) * m, n.y -= (n.py - (n.py = n.y)) * m);
                    g.tick({type: "tick", alpha: d})
                }, r.nodes = function (t) {
                    return arguments.length ? (x = t, r) : x
                }, r.links = function (t) {
                    return arguments.length ? (T = t, r) : T
                }, r.size = function (t) {
                    return arguments.length ? (y = t, r) : y
                }, r.linkDistance = function (t) {
                    return arguments.length ? (o = "function" == typeof t ? t : +t, r) : o
                }, r.distance = r.linkDistance, r.linkStrength = function (t) {
                    return arguments.length ? (a = "function" == typeof t ? t : +t, r) : a
                }, r.friction = function (t) {
                    return arguments.length ? (m = +t, r) : m
                }, r.charge = function (t) {
                    return arguments.length ? (v = "function" == typeof t ? t : +t, r) : v
                }, r.chargeDistance = function (t) {
                    return arguments.length ? (c = t * t, r) : Math.sqrt(c)
                }, r.gravity = function (t) {
                    return arguments.length ? (b = +t, r) : b
                }, r.theta = function (t) {
                    return arguments.length ? (M = t * t, r) : Math.sqrt(M)
                }, r.alpha = function (t) {
                    return arguments.length ? (t = +t, d ? 0 < t ? d = t : (p.c = null, p.t = NaN, p = null, g.end({
                        type: "end",
                        alpha: d = 0
                    })) : 0 < t && (g.start({type: "start", alpha: d = t}), p = d3_timer(r.tick)), r) : d
                }, r.start = function () {
                    var l, s, t, u = x.length, c = T.length, e = y[0], n = y[1];
                    for (l = 0; l < u; ++l) (t = x[l]).index = l, t.weight = 0;
                    for (l = 0; l < c; ++l) "number" == typeof (t = T[l]).source && (t.source = x[t.source]), "number" == typeof t.target && (t.target = x[t.target]), ++t.source.weight, ++t.target.weight;
                    for (l = 0; l < u; ++l) t = x[l], isNaN(t.x) && (t.x = position("x", e)), isNaN(t.y) && (t.y = position("y", n)), isNaN(t.px) && (t.px = t.x), isNaN(t.py) && (t.py = t.y);
                    if (_ = [], "function" == typeof o) for (l = 0; l < c; ++l) _[l] = +o.call(this, T[l], l); else for (l = 0; l < c; ++l) _[l] = o;
                    if (f = [], "function" == typeof a) for (l = 0; l < c; ++l) f[l] = +a.call(this, T[l], l); else for (l = 0; l < c; ++l) f[l] = a;
                    if (h = [], "function" == typeof v) for (l = 0; l < u; ++l) h[l] = +v.call(this, x[l], l); else for (l = 0; l < u; ++l) h[l] = v;

                    function position(t, e) {
                        if (!s) {
                            for (s = new Array(u), a = 0; a < u; ++a) s[a] = [];
                            for (a = 0; a < c; ++a) {
                                var n = T[a];
                                s[n.source.index].push(n.target), s[n.target.index].push(n.source)
                            }
                        }
                        for (var r, o = s[l], a = -1, i = o.length; ++a < i;) if (!isNaN(r = o[a][t])) return r;
                        return Math.random() * e
                    }

                    return r.resume()
                }, r.resume = function () {
                    return r.alpha(.1)
                }, r.stop = function () {
                    return r.alpha(0)
                }, r.drag = function () {
                    if (t || (t = L.behavior.drag().origin(d3_identity).on("dragstart.force", d3_layout_forceDragstart).on("drag.force", dragmove).on("dragend.force", d3_layout_forceDragend)), !arguments.length) return t;
                    this.on("mouseover.force", d3_layout_forceMouseover).on("mouseout.force", d3_layout_forceMouseout).call(t)
                }, L.rebind(r, g, "on")
            };
            var ie = 20, le = 1, se = 1 / 0;

            function d3_layout_hierarchyRebind(t, e) {
                return L.rebind(t, e, "sort", "children", "value"), (t.nodes = t).links = d3_layout_hierarchyLinks, t
            }

            function d3_layout_hierarchyVisitBefore(t, e) {
                for (var n = [t]; null != (t = n.pop());) if (e(t), (o = t.children) && (r = o.length)) for (var r, o; 0 <= --r;) n.push(o[r])
            }

            function d3_layout_hierarchyVisitAfter(t, e) {
                for (var n = [t], r = []; null != (t = n.pop());) if (r.push(t), (a = t.children) && (o = a.length)) for (var o, a, i = -1; ++i < o;) n.push(a[i]);
                for (; null != (t = r.pop());) e(t)
            }

            function d3_layout_hierarchyChildren(t) {
                return t.children
            }

            function d3_layout_hierarchyValue(t) {
                return t.value
            }

            function d3_layout_hierarchySort(t, e) {
                return e.value - t.value
            }

            function d3_layout_hierarchyLinks(t) {
                return L.merge(t.map(function (e) {
                    return (e.children || []).map(function (t) {
                        return {source: e, target: t}
                    })
                }))
            }

            L.layout.hierarchy = function () {
                var l = d3_layout_hierarchySort, s = d3_layout_hierarchyChildren, u = d3_layout_hierarchyValue;

                function hierarchy(t) {
                    var e, n = [t], r = [];
                    for (t.depth = 0; null != (e = n.pop());) if (r.push(e), (a = s.call(hierarchy, e, e.depth)) && (o = a.length)) {
                        for (var o, a, i; 0 <= --o;) n.push(i = a[o]), i.parent = e, i.depth = e.depth + 1;
                        u && (e.value = 0), e.children = a
                    } else u && (e.value = +u.call(hierarchy, e, e.depth) || 0), delete e.children;
                    return d3_layout_hierarchyVisitAfter(t, function (t) {
                        var e, n;
                        l && (e = t.children) && e.sort(l), u && (n = t.parent) && (n.value += t.value)
                    }), r
                }

                return hierarchy.sort = function (t) {
                    return arguments.length ? (l = t, hierarchy) : l
                }, hierarchy.children = function (t) {
                    return arguments.length ? (s = t, hierarchy) : s
                }, hierarchy.value = function (t) {
                    return arguments.length ? (u = t, hierarchy) : u
                }, hierarchy.revalue = function (t) {
                    return u && (d3_layout_hierarchyVisitBefore(t, function (t) {
                        t.children && (t.value = 0)
                    }), d3_layout_hierarchyVisitAfter(t, function (t) {
                        var e;
                        t.children || (t.value = +u.call(hierarchy, t, t.depth) || 0), (e = t.parent) && (e.value += t.value)
                    })), t
                }, hierarchy
            }, L.layout.partition = function () {
                var r = L.layout.hierarchy(), o = [1, 1];

                function partition(t, e) {
                    var n = r.call(this, t, e);
                    return function position(t, e, n, r) {
                        var o = t.children;
                        if (t.x = e, t.y = t.depth * r, t.dx = n, t.dy = r, o && (a = o.length)) {
                            var a, i, l, s = -1;
                            for (n = t.value ? n / t.value : 0; ++s < a;) position(i = o[s], e, l = i.value * n, r), e += l
                        }
                    }(n[0], 0, o[0], o[1] / function depth(t) {
                        var e = t.children, n = 0;
                        if (e && (r = e.length)) for (var r, o = -1; ++o < r;) n = Math.max(n, depth(e[o]));
                        return 1 + n
                    }(n[0])), n
                }

                return partition.size = function (t) {
                    return arguments.length ? (o = t, partition) : o
                }, d3_layout_hierarchyRebind(partition, r)
            }, L.layout.pie = function () {
                var d = Number, _ = ue, f = 0, h = N, g = 0;

                function pie(n) {
                    var e, t = n.length, r = n.map(function (t, e) {
                            return +d.call(pie, t, e)
                        }), o = +("function" == typeof f ? f.apply(this, arguments) : f),
                        a = ("function" == typeof h ? h.apply(this, arguments) : h) - o,
                        i = Math.min(Math.abs(a) / t, +("function" == typeof g ? g.apply(this, arguments) : g)),
                        l = i * (a < 0 ? -1 : 1), s = L.sum(r), u = s ? (a - t * l) / s : 0, c = L.range(t), p = [];
                    return null != _ && c.sort(_ === ue ? function (t, e) {
                        return r[e] - r[t]
                    } : function (t, e) {
                        return _(n[t], n[e])
                    }), c.forEach(function (t) {
                        p[t] = {data: n[t], value: e = r[t], startAngle: o, endAngle: o += e * u + l, padAngle: i}
                    }), p
                }

                return pie.value = function (t) {
                    return arguments.length ? (d = t, pie) : d
                }, pie.sort = function (t) {
                    return arguments.length ? (_ = t, pie) : _
                }, pie.startAngle = function (t) {
                    return arguments.length ? (f = t, pie) : f
                }, pie.endAngle = function (t) {
                    return arguments.length ? (h = t, pie) : h
                }, pie.padAngle = function (t) {
                    return arguments.length ? (g = t, pie) : g
                }, pie
            };
            var ue = {};

            function d3_layout_stackX(t) {
                return t.x
            }

            function d3_layout_stackY(t) {
                return t.y
            }

            function d3_layout_stackOut(t, e, n) {
                t.y0 = e, t.y = n
            }

            L.layout.stack = function () {
                var p = d3_identity, d = d3_layout_stackOrderDefault, _ = d3_layout_stackOffsetZero,
                    f = d3_layout_stackOut, h = d3_layout_stackX, g = d3_layout_stackY;

                function stack(t, e) {
                    if (!(a = t.length)) return t;
                    var n = t.map(function (t, e) {
                        return p.call(stack, t, e)
                    }), r = n.map(function (t) {
                        return t.map(function (t, e) {
                            return [h.call(stack, t, e), g.call(stack, t, e)]
                        })
                    }), o = d.call(stack, r, e);
                    n = L.permute(n, o), r = L.permute(r, o);
                    var a, i, l, s, u = _.call(stack, r, e), c = n[0].length;
                    for (l = 0; l < c; ++l) for (f.call(stack, n[0][l], s = u[l], r[0][l][1]), i = 1; i < a; ++i) f.call(stack, n[i][l], s += r[i - 1][l][1], r[i][l][1]);
                    return t
                }

                return stack.values = function (t) {
                    return arguments.length ? (p = t, stack) : p
                }, stack.order = function (t) {
                    return arguments.length ? (d = "function" == typeof t ? t : ce.get(t) || d3_layout_stackOrderDefault, stack) : d
                }, stack.offset = function (t) {
                    return arguments.length ? (_ = "function" == typeof t ? t : pe.get(t) || d3_layout_stackOffsetZero, stack) : _
                }, stack.x = function (t) {
                    return arguments.length ? (h = t, stack) : h
                }, stack.y = function (t) {
                    return arguments.length ? (g = t, stack) : g
                }, stack.out = function (t) {
                    return arguments.length ? (f = t, stack) : f
                }, stack
            };
            var ce = L.map({
                "inside-out": function (t) {
                    var e, n, r = t.length, o = t.map(d3_layout_stackMaxIndex), a = t.map(d3_layout_stackReduceSum),
                        i = L.range(r).sort(function (t, e) {
                            return o[t] - o[e]
                        }), l = 0, s = 0, u = [], c = [];
                    for (e = 0; e < r; ++e) n = i[e], l < s ? (l += a[n], u.push(n)) : (s += a[n], c.push(n));
                    return c.reverse().concat(u)
                }, reverse: function (t) {
                    return L.range(t.length).reverse()
                }, default: d3_layout_stackOrderDefault
            }), pe = L.map({
                silhouette: function (t) {
                    var e, n, r, o = t.length, a = t[0].length, i = [], l = 0, s = [];
                    for (n = 0; n < a; ++n) {
                        for (r = e = 0; e < o; e++) r += t[e][n][1];
                        l < r && (l = r), i.push(r)
                    }
                    for (n = 0; n < a; ++n) s[n] = (l - i[n]) / 2;
                    return s
                }, wiggle: function (t) {
                    var e, n, r, o, a, i, l, s, u, c = t.length, p = t[0], d = p.length, _ = [];
                    for (_[0] = s = u = 0, n = 1; n < d; ++n) {
                        for (o = e = 0; e < c; ++e) o += t[e][n][1];
                        for (a = e = 0, l = p[n][0] - p[n - 1][0]; e < c; ++e) {
                            for (r = 0, i = (t[e][n][1] - t[e][n - 1][1]) / (2 * l); r < e; ++r) i += (t[r][n][1] - t[r][n - 1][1]) / l;
                            a += i * t[e][n][1]
                        }
                        _[n] = s -= o ? a / o * l : 0, s < u && (u = s)
                    }
                    for (n = 0; n < d; ++n) _[n] -= u;
                    return _
                }, expand: function (t) {
                    var e, n, r, o = t.length, a = t[0].length, i = 1 / o, l = [];
                    for (n = 0; n < a; ++n) {
                        for (r = e = 0; e < o; e++) r += t[e][n][1];
                        if (r) for (e = 0; e < o; e++) t[e][n][1] /= r; else for (e = 0; e < o; e++) t[e][n][1] = i
                    }
                    for (n = 0; n < a; ++n) l[n] = 0;
                    return l
                }, zero: d3_layout_stackOffsetZero
            });

            function d3_layout_stackOrderDefault(t) {
                return L.range(t.length)
            }

            function d3_layout_stackOffsetZero(t) {
                for (var e = -1, n = t[0].length, r = []; ++e < n;) r[e] = 0;
                return r
            }

            function d3_layout_stackMaxIndex(t) {
                for (var e, n = 1, r = 0, o = t[0][1], a = t.length; n < a; ++n) (e = t[n][1]) > o && (r = n, o = e);
                return r
            }

            function d3_layout_stackReduceSum(t) {
                return t.reduce(d3_layout_stackSum, 0)
            }

            function d3_layout_stackSum(t, e) {
                return t + e[1]
            }

            function d3_layout_histogramBinSturges(t, e) {
                return d3_layout_histogramBinFixed(t, Math.ceil(Math.log(e.length) / Math.LN2 + 1))
            }

            function d3_layout_histogramBinFixed(t, e) {
                for (var n = -1, r = +t[0], o = (t[1] - r) / e, a = []; ++n <= e;) a[n] = o * n + r;
                return a
            }

            function d3_layout_histogramRange(t) {
                return [L.min(t), L.max(t)]
            }

            function d3_layout_packSort(t, e) {
                return t.value - e.value
            }

            function d3_layout_packInsert(t, e) {
                var n = t._pack_next;
                (t._pack_next = e)._pack_prev = t, (e._pack_next = n)._pack_prev = e
            }

            function d3_layout_packSplice(t, e) {
                (t._pack_next = e)._pack_prev = t
            }

            function d3_layout_packIntersects(t, e) {
                var n = e.x - t.x, r = e.y - t.y, o = t.r + e.r;
                return n * n + r * r < .999 * o * o
            }

            function d3_layout_packSiblings(t) {
                if ((e = t.children) && (s = e.length)) {
                    var e, n, r, o, a, i, l, s, u = 1 / 0, c = -1 / 0, p = 1 / 0, d = -1 / 0;
                    if (e.forEach(d3_layout_packLink), (n = e[0]).x = -n.r, n.y = 0, bound(n), 1 < s && ((r = e[1]).x = r.r, r.y = 0, bound(r), 2 < s)) for (d3_layout_packPlace(n, r, o = e[2]), bound(o), d3_layout_packInsert(n, o), d3_layout_packInsert(n._pack_prev = o, r), r = n._pack_next, a = 3; a < s; a++) {
                        d3_layout_packPlace(n, r, o = e[a]);
                        var _ = 0, f = 1, h = 1;
                        for (i = r._pack_next; i !== r; i = i._pack_next, f++) if (d3_layout_packIntersects(i, o)) {
                            _ = 1;
                            break
                        }
                        if (1 == _) for (l = n._pack_prev; l !== i._pack_prev && !d3_layout_packIntersects(l, o); l = l._pack_prev, h++) ;
                        _ ? (f < h || f == h && r.r < n.r ? d3_layout_packSplice(n, r = i) : d3_layout_packSplice(n = l, r), a--) : (d3_layout_packInsert(n, o), bound(r = o))
                    }
                    var g = (u + c) / 2, y = (p + d) / 2, m = 0;
                    for (a = 0; a < s; a++) (o = e[a]).x -= g, o.y -= y, m = Math.max(m, o.r + Math.sqrt(o.x * o.x + o.y * o.y));
                    t.r = m, e.forEach(d3_layout_packUnlink)
                }

                function bound(t) {
                    u = Math.min(t.x - t.r, u), c = Math.max(t.x + t.r, c), p = Math.min(t.y - t.r, p), d = Math.max(t.y + t.r, d)
                }
            }

            function d3_layout_packLink(t) {
                t._pack_next = t._pack_prev = t
            }

            function d3_layout_packUnlink(t) {
                delete t._pack_next, delete t._pack_prev
            }

            function d3_layout_packPlace(t, e, n) {
                var r = t.r + n.r, o = e.x - t.x, a = e.y - t.y;
                if (r && (o || a)) {
                    var i = e.r + n.r, l = o * o + a * a, s = .5 + ((r *= r) - (i *= i)) / (2 * l),
                        u = Math.sqrt(Math.max(0, 2 * i * (r + l) - (r -= l) * r - i * i)) / (2 * l);
                    n.x = t.x + s * o + u * a, n.y = t.y + s * a - u * o
                } else n.x = t.x + r, n.y = t.y
            }

            function d3_layout_treeSeparation(t, e) {
                return t.parent == e.parent ? 1 : 2
            }

            function d3_layout_treeLeft(t) {
                var e = t.children;
                return e.length ? e[0] : t.t
            }

            function d3_layout_treeRight(t) {
                var e, n = t.children;
                return (e = n.length) ? n[e - 1] : t.t
            }

            function d3_layout_treeMove(t, e, n) {
                var r = n / (e.i - t.i);
                e.c -= r, e.s += n, t.c += r, e.z += n, e.m += n
            }

            function d3_layout_treemapPadNull(t) {
                return {x: t.x, y: t.y, dx: t.dx, dy: t.dy}
            }

            function d3_layout_treemapPad(t, e) {
                var n = t.x + e[3], r = t.y + e[0], o = t.dx - e[1] - e[3], a = t.dy - e[0] - e[2];
                return o < 0 && (n += o / 2, o = 0), a < 0 && (r += a / 2, a = 0), {x: n, y: r, dx: o, dy: a}
            }

            function d3_scaleExtent(t) {
                var e = t[0], n = t[t.length - 1];
                return e < n ? [e, n] : [n, e]
            }

            function d3_scaleRange(t) {
                return t.rangeExtent ? t.rangeExtent() : d3_scaleExtent(t.range())
            }

            function d3_scale_bilinear(t, e, n, r) {
                var o = n(t[0], t[1]), a = r(e[0], e[1]);
                return function (t) {
                    return a(o(t))
                }
            }

            function d3_scale_nice(t, e) {
                var n, r = 0, o = t.length - 1, a = t[r], i = t[o];
                return i < a && (n = r, r = o, o = n, n = a, a = i, i = n), t[r] = e.floor(a), t[o] = e.ceil(i), t
            }

            function d3_scale_niceStep(e) {
                return e ? {
                    floor: function (t) {
                        return Math.floor(t / e) * e
                    }, ceil: function (t) {
                        return Math.ceil(t / e) * e
                    }
                } : de
            }

            L.layout.histogram = function () {
                var p = !0, d = Number, _ = d3_layout_histogramRange, f = d3_layout_histogramBinSturges;

                function histogram(t, e) {
                    for (var n, r, o = [], a = t.map(d, this), i = _.call(this, a, e), l = f.call(this, i, a, e), s = (e = -1, a.length), u = l.length - 1, c = p ? 1 : 1 / s; ++e < u;) (n = o[e] = []).dx = l[e + 1] - (n.x = l[e]), n.y = 0;
                    if (0 < u) for (e = -1; ++e < s;) (r = a[e]) >= i[0] && r <= i[1] && ((n = o[L.bisect(l, r, 1, u) - 1]).y += c, n.push(t[e]));
                    return o
                }

                return histogram.value = function (t) {
                    return arguments.length ? (d = t, histogram) : d
                }, histogram.range = function (t) {
                    return arguments.length ? (_ = d3_functor(t), histogram) : _
                }, histogram.bins = function (e) {
                    return arguments.length ? (f = "number" == typeof e ? function (t) {
                        return d3_layout_histogramBinFixed(t, e)
                    } : d3_functor(e), histogram) : f
                }, histogram.frequency = function (t) {
                    return arguments.length ? (p = !!t, histogram) : p
                }, histogram
            }, L.layout.pack = function () {
                var s, u = L.layout.hierarchy().sort(d3_layout_packSort), c = 0, p = [1, 1];

                function pack(t, e) {
                    var n = u.call(this, t, e), r = n[0], o = p[0], a = p[1],
                        i = null == s ? Math.sqrt : "function" == typeof s ? s : function () {
                            return s
                        };
                    if (r.x = r.y = 0, d3_layout_hierarchyVisitAfter(r, function (t) {
                        t.r = +i(t.value)
                    }), d3_layout_hierarchyVisitAfter(r, d3_layout_packSiblings), c) {
                        var l = c * (s ? 1 : Math.max(2 * r.r / o, 2 * r.r / a)) / 2;
                        d3_layout_hierarchyVisitAfter(r, function (t) {
                            t.r += l
                        }), d3_layout_hierarchyVisitAfter(r, d3_layout_packSiblings), d3_layout_hierarchyVisitAfter(r, function (t) {
                            t.r -= l
                        })
                    }
                    return function d3_layout_packTransform(t, e, n, r) {
                        var o = t.children;
                        t.x = e += r * t.x;
                        t.y = n += r * t.y;
                        t.r *= r;
                        if (o) for (var a = -1, i = o.length; ++a < i;) d3_layout_packTransform(o[a], e, n, r)
                    }(r, o / 2, a / 2, s ? 1 : 1 / Math.max(2 * r.r / o, 2 * r.r / a)), n
                }

                return pack.size = function (t) {
                    return arguments.length ? (p = t, pack) : p
                }, pack.radius = function (t) {
                    return arguments.length ? (s = null == t || "function" == typeof t ? t : +t, pack) : s
                }, pack.padding = function (t) {
                    return arguments.length ? (c = +t, pack) : c
                }, d3_layout_hierarchyRebind(pack, u)
            }, L.layout.tree = function () {
                var p = L.layout.hierarchy().sort(null).value(null), h = d3_layout_treeSeparation, d = [1, 1], _ = null;

                function tree(t, e) {
                    var n = p.call(this, t, e), r = n[0], o = function (t) {
                        var e, n = {A: null, children: [t]}, r = [n];
                        for (; null != (e = r.pop());) for (var o, a = e.children, i = 0, l = a.length; i < l; ++i) r.push((a[i] = o = {
                            _: a[i],
                            parent: e,
                            children: (o = a[i].children) && o.slice() || [],
                            A: null,
                            a: null,
                            z: 0,
                            m: 0,
                            c: 0,
                            s: 0,
                            t: null,
                            i: i
                        }).a = o);
                        return n.children[0]
                    }(r);
                    if (d3_layout_hierarchyVisitAfter(o, firstWalk), o.parent.m = -o.z, d3_layout_hierarchyVisitBefore(o, secondWalk), _) d3_layout_hierarchyVisitBefore(r, sizeNode); else {
                        var a = r, i = r, l = r;
                        d3_layout_hierarchyVisitBefore(r, function (t) {
                            t.x < a.x && (a = t), t.x > i.x && (i = t), t.depth > l.depth && (l = t)
                        });
                        var s = h(a, i) / 2 - a.x, u = d[0] / (i.x + h(i, a) / 2 + s), c = d[1] / (l.depth || 1);
                        d3_layout_hierarchyVisitBefore(r, function (t) {
                            t.x = (t.x + s) * u, t.y = t.depth * c
                        })
                    }
                    return n
                }

                function firstWalk(t) {
                    var e = t.children, n = t.parent.children, r = t.i ? n[t.i - 1] : null;
                    if (e.length) {
                        !function (t) {
                            var e, n = 0, r = 0, o = t.children, a = o.length;
                            for (; 0 <= --a;) (e = o[a]).z += n, e.m += n, n += e.s + (r += e.c)
                        }(t);
                        var o = (e[0].z + e[e.length - 1].z) / 2;
                        r ? (t.z = r.z + h(t._, r._), t.m = t.z - o) : t.z = o
                    } else r && (t.z = r.z + h(t._, r._));
                    t.parent.A = function (t, e, n) {
                        if (e) {
                            for (var r, o = t, a = t, i = e, l = o.parent.children[0], s = o.m, u = a.m, c = i.m, p = l.m; i = d3_layout_treeRight(i), o = d3_layout_treeLeft(o), i && o;) l = d3_layout_treeLeft(l), (a = d3_layout_treeRight(a)).a = t, 0 < (r = i.z + c - o.z - s + h(i._, o._)) && (d3_layout_treeMove((_ = t, f = n, (d = i).a.parent === _.parent ? d.a : f), t, r), s += r, u += r), c += i.m, s += o.m, p += l.m, u += a.m;
                            i && !d3_layout_treeRight(a) && (a.t = i, a.m += c - u), o && !d3_layout_treeLeft(l) && (l.t = o, l.m += s - p, n = t)
                        }
                        var d, _, f;
                        return n
                    }(t, r, t.parent.A || n[0])
                }

                function secondWalk(t) {
                    t._.x = t.z + t.parent.m, t.m += t.parent.m
                }

                function sizeNode(t) {
                    t.x *= d[0], t.y = t.depth * d[1]
                }

                return tree.separation = function (t) {
                    return arguments.length ? (h = t, tree) : h
                }, tree.size = function (t) {
                    return arguments.length ? (_ = null == (d = t) ? sizeNode : null, tree) : _ ? null : d
                }, tree.nodeSize = function (t) {
                    return arguments.length ? (_ = null == (d = t) ? null : sizeNode, tree) : _ ? d : null
                }, d3_layout_hierarchyRebind(tree, p)
            }, L.layout.cluster = function () {
                var c = L.layout.hierarchy().sort(null).value(null), p = d3_layout_treeSeparation, d = [1, 1], _ = !1;

                function cluster(t, e) {
                    var o, n = c.call(this, t, e), r = n[0], a = 0;
                    d3_layout_hierarchyVisitAfter(r, function (t) {
                        var e, n, r = t.children;
                        r && r.length ? (t.x = (n = r).reduce(function (t, e) {
                            return t + e.x
                        }, 0) / n.length, t.y = (e = r, 1 + L.max(e, function (t) {
                            return t.y
                        }))) : (t.x = o ? a += p(t, o) : 0, t.y = 0, o = t)
                    });
                    var i = function d3_layout_clusterLeft(t) {
                        var e = t.children;
                        return e && e.length ? d3_layout_clusterLeft(e[0]) : t
                    }(r), l = function d3_layout_clusterRight(t) {
                        var e, n = t.children;
                        return n && (e = n.length) ? d3_layout_clusterRight(n[e - 1]) : t
                    }(r), s = i.x - p(i, l) / 2, u = l.x + p(l, i) / 2;
                    return d3_layout_hierarchyVisitAfter(r, _ ? function (t) {
                        t.x = (t.x - r.x) * d[0], t.y = (r.y - t.y) * d[1]
                    } : function (t) {
                        t.x = (t.x - s) / (u - s) * d[0], t.y = (1 - (r.y ? t.y / r.y : 1)) * d[1]
                    }), n
                }

                return cluster.separation = function (t) {
                    return arguments.length ? (p = t, cluster) : p
                }, cluster.size = function (t) {
                    return arguments.length ? (_ = null == (d = t), cluster) : _ ? null : d
                }, cluster.nodeSize = function (t) {
                    return arguments.length ? (_ = null != (d = t), cluster) : _ ? d : null
                }, d3_layout_hierarchyRebind(cluster, c)
            }, L.layout.treemap = function () {
                var r, o = L.layout.hierarchy(), c = Math.round, a = [1, 1], e = null, p = d3_layout_treemapPadNull,
                    i = !1, d = "squarify", s = .5 * (1 + Math.sqrt(5));

                function scale(t, e) {
                    for (var n, r, o = -1, a = t.length; ++o < a;) r = (n = t[o]).value * (e < 0 ? 0 : e), n.area = isNaN(r) || r <= 0 ? 0 : r
                }

                function squarify(t) {
                    var e = t.children;
                    if (e && e.length) {
                        var n, r, o, a = p(t), i = [], l = e.slice(), s = 1 / 0,
                            u = "slice" === d ? a.dx : "dice" === d ? a.dy : "slice-dice" === d ? 1 & t.depth ? a.dy : a.dx : Math.min(a.dx, a.dy);
                        for (scale(l, a.dx * a.dy / t.value), i.area = 0; 0 < (o = l.length);) i.push(n = l[o - 1]), i.area += n.area, s = "squarify" !== d || (r = worst(i, u)) <= s ? (l.pop(), r) : (i.area -= i.pop().area, position(i, u, a, !1), u = Math.min(a.dx, a.dy), i.length = i.area = 0, 1 / 0);
                        i.length && (position(i, u, a, !0), i.length = i.area = 0), e.forEach(squarify)
                    }
                }

                function stickify(t) {
                    var e = t.children;
                    if (e && e.length) {
                        var n, r = p(t), o = e.slice(), a = [];
                        for (scale(o, r.dx * r.dy / t.value), a.area = 0; n = o.pop();) a.push(n), a.area += n.area, null != n.z && (position(a, n.z ? r.dx : r.dy, r, !o.length), a.length = a.area = 0);
                        e.forEach(stickify)
                    }
                }

                function worst(t, e) {
                    for (var n, r = t.area, o = 0, a = 1 / 0, i = -1, l = t.length; ++i < l;) (n = t[i].area) && (n < a && (a = n), o < n && (o = n));
                    return e *= e, (r *= r) ? Math.max(e * o * s / r, r / (e * a * s)) : 1 / 0
                }

                function position(t, e, n, r) {
                    var o, a = -1, i = t.length, l = n.x, s = n.y, u = e ? c(t.area / e) : 0;
                    if (e == n.dx) {
                        for ((r || u > n.dy) && (u = n.dy); ++a < i;) (o = t[a]).x = l, o.y = s, o.dy = u, l += o.dx = Math.min(n.x + n.dx - l, u ? c(o.area / u) : 0);
                        o.z = !0, o.dx += n.x + n.dx - l, n.y += u, n.dy -= u
                    } else {
                        for ((r || u > n.dx) && (u = n.dx); ++a < i;) (o = t[a]).x = l, o.y = s, o.dx = u, s += o.dy = Math.min(n.y + n.dy - s, u ? c(o.area / u) : 0);
                        o.z = !1, o.dy += n.y + n.dy - s, n.x += u, n.dx -= u
                    }
                }

                function treemap(t) {
                    var e = r || o(t), n = e[0];
                    return n.x = n.y = 0, n.value ? (n.dx = a[0], n.dy = a[1]) : n.dx = n.dy = 0, r && o.revalue(n), scale([n], n.dx * n.dy / n.value), (r ? stickify : squarify)(n), i && (r = e), e
                }

                return treemap.size = function (t) {
                    return arguments.length ? (a = t, treemap) : a
                }, treemap.padding = function (n) {
                    if (!arguments.length) return e;

                    function padConstant(t) {
                        return d3_layout_treemapPad(t, n)
                    }

                    var t;
                    return p = null == (e = n) ? d3_layout_treemapPadNull : "function" == (t = typeof n) ? function (t) {
                        var e = n.call(treemap, t, t.depth);
                        return null == e ? d3_layout_treemapPadNull(t) : d3_layout_treemapPad(t, "number" == typeof e ? [e, e, e, e] : e)
                    } : ("number" === t && (n = [n, n, n, n]), padConstant), treemap
                }, treemap.round = function (t) {
                    return arguments.length ? (c = t ? Math.round : Number, treemap) : c != Number
                }, treemap.sticky = function (t) {
                    return arguments.length ? (i = t, r = null, treemap) : i
                }, treemap.ratio = function (t) {
                    return arguments.length ? (s = t, treemap) : s
                }, treemap.mode = function (t) {
                    return arguments.length ? (d = t + "", treemap) : d
                }, d3_layout_hierarchyRebind(treemap, o)
            }, L.random = {
                normal: function (r, o) {
                    var t = arguments.length;
                    return t < 2 && (o = 1), t < 1 && (r = 0), function () {
                        for (var t, e, n; !(n = (t = 2 * Math.random() - 1) * t + (e = 2 * Math.random() - 1) * e) || 1 < n;) ;
                        return r + o * t * Math.sqrt(-2 * Math.log(n) / n)
                    }
                }, logNormal: function () {
                    var t = L.random.normal.apply(L, arguments);
                    return function () {
                        return Math.exp(t())
                    }
                }, bates: function (t) {
                    var e = L.random.irwinHall(t);
                    return function () {
                        return e() / t
                    }
                }, irwinHall: function (n) {
                    return function () {
                        for (var t = 0, e = 0; e < n; e++) t += Math.random();
                        return t
                    }
                }
            }, L.scale = {};
            var de = {floor: d3_identity, ceil: d3_identity};

            function d3_scale_polylinear(n, t, e, r) {
                var o = [], a = [], i = 0, l = Math.min(n.length, t.length) - 1;
                for (n[l] < n[0] && (n = n.slice().reverse(), t = t.slice().reverse()); ++i <= l;) o.push(e(n[i - 1], n[i])), a.push(r(t[i - 1], t[i]));
                return function (t) {
                    var e = L.bisect(n, t, 1, l) - 1;
                    return a[e](o[e](t))
                }
            }

            function d3_scale_linearRebind(t, e) {
                return L.rebind(t, e, "range", "rangeRound", "interpolate", "clamp")
            }

            function d3_scale_linearNice(t, e) {
                return d3_scale_nice(t, d3_scale_niceStep(d3_scale_linearTickRange(t, e)[2])), d3_scale_nice(t, d3_scale_niceStep(d3_scale_linearTickRange(t, e)[2])), t
            }

            function d3_scale_linearTickRange(t, e) {
                null == e && (e = 10);
                var n = d3_scaleExtent(t), r = n[1] - n[0], o = Math.pow(10, Math.floor(Math.log(r / e) / Math.LN10)),
                    a = e / r * o;
                return a <= .15 ? o *= 10 : a <= .35 ? o *= 5 : a <= .75 && (o *= 2), n[0] = Math.ceil(n[0] / o) * o, n[1] = Math.floor(n[1] / o) * o + .5 * o, n[2] = o, n
            }

            function d3_scale_linearTicks(t, e) {
                return L.range.apply(L, d3_scale_linearTickRange(t, e))
            }

            function d3_scale_linearTickFormat(t, e, n) {
                var r, o, a, i = d3_scale_linearTickRange(t, e);
                if (n) {
                    var l = tt.exec(n);
                    if (l.shift(), "s" === l[8]) {
                        var s = L.formatPrefix(Math.max(E(i[0]), E(i[1])));
                        return l[7] || (l[7] = "." + d3_scale_linearPrecision(s.scale(i[2]))), l[8] = "f", n = L.format(l.join("")), function (t) {
                            return n(s.scale(t)) + s.symbol
                        }
                    }
                    l[7] || (l[7] = "." + (r = l[8], a = d3_scale_linearPrecision((o = i)[2]), r in _e ? Math.abs(a - d3_scale_linearPrecision(Math.max(E(o[0]), E(o[1])))) + +("e" !== r) : a - 2 * ("%" === r))), n = l.join("")
                } else n = ",." + d3_scale_linearPrecision(i[2]) + "f";
                return L.format(n)
            }

            L.scale.linear = function () {
                return function d3_scale_linear(n, r, o, a) {
                    var i, l;

                    function rescale() {
                        var t = 2 < Math.min(n.length, r.length) ? d3_scale_polylinear : d3_scale_bilinear,
                            e = a ? d3_uninterpolateClamp : d3_uninterpolateNumber;
                        return i = t(n, r, e, o), l = t(r, n, e, d3_interpolate), scale
                    }

                    function scale(t) {
                        return i(t)
                    }

                    scale.invert = function (t) {
                        return l(t)
                    };
                    scale.domain = function (t) {
                        return arguments.length ? (n = t.map(Number), rescale()) : n
                    };
                    scale.range = function (t) {
                        return arguments.length ? (r = t, rescale()) : r
                    };
                    scale.rangeRound = function (t) {
                        return scale.range(t).interpolate(d3_interpolateRound)
                    };
                    scale.clamp = function (t) {
                        return arguments.length ? (a = t, rescale()) : a
                    };
                    scale.interpolate = function (t) {
                        return arguments.length ? (o = t, rescale()) : o
                    };
                    scale.ticks = function (t) {
                        return d3_scale_linearTicks(n, t)
                    };
                    scale.tickFormat = function (t, e) {
                        return d3_scale_linearTickFormat(n, t, e)
                    };
                    scale.nice = function (t) {
                        return d3_scale_linearNice(n, t), rescale()
                    };
                    scale.copy = function () {
                        return d3_scale_linear(n, r, o, a)
                    };
                    return rescale()
                }([0, 1], [0, 1], d3_interpolate, !1)
            };
            var _e = {s: 1, g: 1, p: 1, r: 1, e: 1};

            function d3_scale_linearPrecision(t) {
                return -Math.floor(Math.log(t) / Math.LN10 + .01)
            }

            L.scale.log = function () {
                return function d3_scale_log(e, s, u, c) {
                    function log(t) {
                        return (u ? Math.log(t < 0 ? 0 : t) : -Math.log(0 < t ? 0 : -t)) / Math.log(s)
                    }

                    function pow(t) {
                        return u ? Math.pow(s, t) : -Math.pow(s, -t)
                    }

                    function scale(t) {
                        return e(log(t))
                    }

                    scale.invert = function (t) {
                        return pow(e.invert(t))
                    };
                    scale.domain = function (t) {
                        return arguments.length ? (u = 0 <= t[0], e.domain((c = t.map(Number)).map(log)), scale) : c
                    };
                    scale.base = function (t) {
                        return arguments.length ? (s = +t, e.domain(c.map(log)), scale) : s
                    };
                    scale.nice = function () {
                        var t = d3_scale_nice(c.map(log), u ? Math : he);
                        return e.domain(t), c = t.map(pow), scale
                    };
                    scale.ticks = function () {
                        var t = d3_scaleExtent(c), e = [], n = t[0], r = t[1], o = Math.floor(log(n)),
                            a = Math.ceil(log(r)), i = s % 1 ? 2 : s;
                        if (isFinite(a - o)) {
                            if (u) {
                                for (; o < a; o++) for (var l = 1; l < i; l++) e.push(pow(o) * l);
                                e.push(pow(o))
                            } else for (e.push(pow(o)); o++ < a;) for (var l = i - 1; 0 < l; l--) e.push(pow(o) * l);
                            for (o = 0; e[o] < n; o++) ;
                            for (a = e.length; e[a - 1] > r; a--) ;
                            e = e.slice(o, a)
                        }
                        return e
                    };
                    scale.tickFormat = function (t, n) {
                        if (!arguments.length) return fe;
                        arguments.length < 2 ? n = fe : "function" != typeof n && (n = L.format(n));
                        var r = Math.max(1, s * t / scale.ticks().length);
                        return function (t) {
                            var e = t / pow(Math.round(log(t)));
                            return e * s < s - .5 && (e *= s), e <= r ? n(t) : ""
                        }
                    };
                    scale.copy = function () {
                        return d3_scale_log(e.copy(), s, u, c)
                    };
                    return d3_scale_linearRebind(scale, e)
                }(L.scale.linear().domain([0, 1]), 10, !0, [1, 10])
            };
            var fe = L.format(".0e"), he = {
                floor: function (t) {
                    return -Math.ceil(-t)
                }, ceil: function (t) {
                    return -Math.floor(-t)
                }
            };

            function d3_scale_powPow(e) {
                return function (t) {
                    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e)
                }
            }

            L.scale.pow = function () {
                return function d3_scale_pow(e, n, r) {
                    var o = d3_scale_powPow(n), a = d3_scale_powPow(1 / n);

                    function scale(t) {
                        return e(o(t))
                    }

                    scale.invert = function (t) {
                        return a(e.invert(t))
                    };
                    scale.domain = function (t) {
                        return arguments.length ? (e.domain((r = t.map(Number)).map(o)), scale) : r
                    };
                    scale.ticks = function (t) {
                        return d3_scale_linearTicks(r, t)
                    };
                    scale.tickFormat = function (t, e) {
                        return d3_scale_linearTickFormat(r, t, e)
                    };
                    scale.nice = function (t) {
                        return scale.domain(d3_scale_linearNice(r, t))
                    };
                    scale.exponent = function (t) {
                        return arguments.length ? (o = d3_scale_powPow(n = t), a = d3_scale_powPow(1 / n), e.domain(r.map(o)), scale) : n
                    };
                    scale.copy = function () {
                        return d3_scale_pow(e.copy(), n, r)
                    };
                    return d3_scale_linearRebind(scale, e)
                }(L.scale.linear(), 1, [0, 1])
            }, L.scale.sqrt = function () {
                return L.scale.pow().exponent(.5)
            }, L.scale.ordinal = function () {
                return function d3_scale_ordinal(l, s) {
                    var o, u, c;

                    function scale(t) {
                        return u[((o.get(t) || ("range" === s.t ? o.set(t, l.push(t)) : NaN)) - 1) % u.length]
                    }

                    function steps(e, n) {
                        return L.range(l.length).map(function (t) {
                            return e + n * t
                        })
                    }

                    scale.domain = function (t) {
                        if (!arguments.length) return l;
                        l = [], o = new d3_Map;
                        for (var e, n = -1, r = t.length; ++n < r;) o.has(e = t[n]) || o.set(e, l.push(e));
                        return scale[s.t].apply(scale, s.a)
                    };
                    scale.range = function (t) {
                        return arguments.length ? (u = t, c = 0, s = {t: "range", a: arguments}, scale) : u
                    };
                    scale.rangePoints = function (t, e) {
                        arguments.length < 2 && (e = 0);
                        var n = t[0], r = t[1], o = l.length < 2 ? (n = (n + r) / 2, 0) : (r - n) / (l.length - 1 + e);
                        return u = steps(n + o * e / 2, o), c = 0, s = {t: "rangePoints", a: arguments}, scale
                    };
                    scale.rangeRoundPoints = function (t, e) {
                        arguments.length < 2 && (e = 0);
                        var n = t[0], r = t[1],
                            o = l.length < 2 ? (n = r = Math.round((n + r) / 2), 0) : (r - n) / (l.length - 1 + e) | 0;
                        return u = steps(n + Math.round(o * e / 2 + (r - n - (l.length - 1 + e) * o) / 2), o), c = 0, s = {
                            t: "rangeRoundPoints",
                            a: arguments
                        }, scale
                    };
                    scale.rangeBands = function (t, e, n) {
                        arguments.length < 2 && (e = 0), arguments.length < 3 && (n = e);
                        var r = t[1] < t[0], o = t[r - 0], a = t[1 - r], i = (a - o) / (l.length - e + 2 * n);
                        return u = steps(o + i * n, i), r && u.reverse(), c = i * (1 - e), s = {
                            t: "rangeBands",
                            a: arguments
                        }, scale
                    };
                    scale.rangeRoundBands = function (t, e, n) {
                        arguments.length < 2 && (e = 0), arguments.length < 3 && (n = e);
                        var r = t[1] < t[0], o = t[r - 0], a = t[1 - r],
                            i = Math.floor((a - o) / (l.length - e + 2 * n));
                        return u = steps(o + Math.round((a - o - (l.length - e) * i) / 2), i), r && u.reverse(), c = Math.round(i * (1 - e)), s = {
                            t: "rangeRoundBands",
                            a: arguments
                        }, scale
                    };
                    scale.rangeBand = function () {
                        return c
                    };
                    scale.rangeExtent = function () {
                        return d3_scaleExtent(s.a[0])
                    };
                    scale.copy = function () {
                        return d3_scale_ordinal(l, s)
                    };
                    return scale.domain(l)
                }([], {t: "range", a: [[]]})
            }, L.scale.category10 = function () {
                return L.scale.ordinal().range(ge)
            }, L.scale.category20 = function () {
                return L.scale.ordinal().range(ye)
            }, L.scale.category20b = function () {
                return L.scale.ordinal().range(me)
            }, L.scale.category20c = function () {
                return L.scale.ordinal().range(ve)
            };
            var ge = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(d3_rgbString),
                ye = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(d3_rgbString),
                me = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(d3_rgbString),
                ve = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(d3_rgbString);

            function d3_zero() {
                return 0
            }

            L.scale.quantile = function () {
                return function d3_scale_quantile(n, r) {
                    var o;

                    function rescale() {
                        var t = 0, e = r.length;
                        for (o = []; ++t < e;) o[t - 1] = L.quantile(n, t / e);
                        return scale
                    }

                    function scale(t) {
                        if (!isNaN(t = +t)) return r[L.bisect(o, t)]
                    }

                    scale.domain = function (t) {
                        return arguments.length ? (n = t.map(d3_number).filter(d3_numeric).sort(d3_ascending), rescale()) : n
                    };
                    scale.range = function (t) {
                        return arguments.length ? (r = t, rescale()) : r
                    };
                    scale.quantiles = function () {
                        return o
                    };
                    scale.invertExtent = function (t) {
                        return (t = r.indexOf(t)) < 0 ? [NaN, NaN] : [0 < t ? o[t - 1] : n[0], t < o.length ? o[t] : n[n.length - 1]]
                    };
                    scale.copy = function () {
                        return d3_scale_quantile(n, r)
                    };
                    return rescale()
                }([], [])
            }, L.scale.quantize = function () {
                return function d3_scale_quantize(e, n, r) {
                    var o, a;

                    function scale(t) {
                        return r[Math.max(0, Math.min(a, Math.floor(o * (t - e))))]
                    }

                    function rescale() {
                        return o = r.length / (n - e), a = r.length - 1, scale
                    }

                    scale.domain = function (t) {
                        return arguments.length ? (e = +t[0], n = +t[t.length - 1], rescale()) : [e, n]
                    };
                    scale.range = function (t) {
                        return arguments.length ? (r = t, rescale()) : r
                    };
                    scale.invertExtent = function (t) {
                        return [t = (t = r.indexOf(t)) < 0 ? NaN : t / o + e, t + 1 / o]
                    };
                    scale.copy = function () {
                        return d3_scale_quantize(e, n, r)
                    };
                    return rescale()
                }(0, 1, [0, 1])
            }, L.scale.threshold = function () {
                return function d3_scale_threshold(e, n) {
                    function scale(t) {
                        if (t <= t) return n[L.bisect(e, t)]
                    }

                    scale.domain = function (t) {
                        return arguments.length ? (e = t, scale) : e
                    };
                    scale.range = function (t) {
                        return arguments.length ? (n = t, scale) : n
                    };
                    scale.invertExtent = function (t) {
                        return t = n.indexOf(t), [e[t - 1], e[t]]
                    };
                    scale.copy = function () {
                        return d3_scale_threshold(e, n)
                    };
                    return scale
                }([.5], [0, 1])
            }, L.scale.identity = function () {
                return function d3_scale_identity(n) {
                    function identity(t) {
                        return +t
                    }

                    identity.invert = identity;
                    identity.domain = identity.range = function (t) {
                        return arguments.length ? (n = t.map(identity), identity) : n
                    };
                    identity.ticks = function (t) {
                        return d3_scale_linearTicks(n, t)
                    };
                    identity.tickFormat = function (t, e) {
                        return d3_scale_linearTickFormat(n, t, e)
                    };
                    identity.copy = function () {
                        return d3_scale_identity(n)
                    };
                    return identity
                }([0, 1])
            }, L.svg = {}, L.svg.arc = function () {
                var I = d3_svg_arcInnerRadius, q = d3_svg_arcOuterRadius, U = d3_zero, j = be, H = d3_svg_arcStartAngle,
                    F = d3_svg_arcEndAngle, Y = d3_svg_arcPadAngle;

                function arc() {
                    var t = Math.max(0, +I.apply(this, arguments)), e = Math.max(0, +q.apply(this, arguments)),
                        n = H.apply(this, arguments) - K, r = F.apply(this, arguments) - K, o = Math.abs(r - n),
                        a = r < n ? 0 : 1;
                    if (e < t && (i = e, e = t, t = i), W <= o) return circleSegment(e, a) + (t ? circleSegment(t, 1 - a) : "") + "Z";
                    var i, l, s, u, c, p, d, _, f, h, g, y, m = 0, v = 0, b = [];
                    if ((u = (+Y.apply(this, arguments) || 0) / 2) && (s = j === be ? Math.sqrt(t * t + e * e) : +j.apply(this, arguments), a || (v *= -1), e && (v = d3_asin(s / e * Math.sin(u))), t && (m = d3_asin(s / t * Math.sin(u)))), e) {
                        c = e * Math.cos(n + v), p = e * Math.sin(n + v), d = e * Math.cos(r - v), _ = e * Math.sin(r - v);
                        var M = Math.abs(r - n - 2 * v) <= V ? 0 : 1;
                        if (v && d3_svg_arcSweep(c, p, d, _) === a ^ M) {
                            var x = (n + r) / 2;
                            c = e * Math.cos(x), p = e * Math.sin(x), d = _ = null
                        }
                    } else c = p = 0;
                    if (t) {
                        f = t * Math.cos(r - m), h = t * Math.sin(r - m), g = t * Math.cos(n + m), y = t * Math.sin(n + m);
                        var T = Math.abs(n - r + 2 * m) <= V ? 0 : 1;
                        if (m && d3_svg_arcSweep(f, h, g, y) === 1 - a ^ T) {
                            var P = (n + r) / 2;
                            f = t * Math.cos(P), h = t * Math.sin(P), g = y = null
                        }
                    } else f = h = 0;
                    if (G < o && .001 < (i = Math.min(Math.abs(e - t) / 2, +U.apply(this, arguments)))) {
                        l = t < e ^ a ? 0 : 1;
                        var w = i, D = i;
                        if (o < V) {
                            var k = null == g ? [f, h] : null == d ? [c, p] : d3_geom_polygonIntersect([c, p], [g, y], [d, _], [f, h]),
                                S = c - k[0], N = p - k[1], C = d - k[0], A = _ - k[1],
                                E = 1 / Math.sin(Math.acos((S * C + N * A) / (Math.sqrt(S * S + N * N) * Math.sqrt(C * C + A * A))) / 2),
                                R = Math.sqrt(k[0] * k[0] + k[1] * k[1]);
                            D = Math.min(i, (t - R) / (E - 1)), w = Math.min(i, (e - R) / (E + 1))
                        }
                        if (null != d) {
                            var L = d3_svg_arcCornerTangents(null == g ? [f, h] : [g, y], [c, p], e, w, a),
                                z = d3_svg_arcCornerTangents([d, _], [f, h], e, w, a);
                            i === w ? b.push("M", L[0], "A", w, ",", w, " 0 0,", l, " ", L[1], "A", e, ",", e, " 0 ", 1 - a ^ d3_svg_arcSweep(L[1][0], L[1][1], z[1][0], z[1][1]), ",", a, " ", z[1], "A", w, ",", w, " 0 0,", l, " ", z[0]) : b.push("M", L[0], "A", w, ",", w, " 0 1,", l, " ", z[0])
                        } else b.push("M", c, ",", p);
                        if (null != g) {
                            var B = d3_svg_arcCornerTangents([c, p], [g, y], t, -D, a),
                                O = d3_svg_arcCornerTangents([f, h], null == d ? [c, p] : [d, _], t, -D, a);
                            i === D ? b.push("L", O[0], "A", D, ",", D, " 0 0,", l, " ", O[1], "A", t, ",", t, " 0 ", a ^ d3_svg_arcSweep(O[1][0], O[1][1], B[1][0], B[1][1]), ",", 1 - a, " ", B[1], "A", D, ",", D, " 0 0,", l, " ", B[0]) : b.push("L", O[0], "A", D, ",", D, " 0 0,", l, " ", B[0])
                        } else b.push("L", f, ",", h)
                    } else b.push("M", c, ",", p), null != d && b.push("A", e, ",", e, " 0 ", M, ",", a, " ", d, ",", _), b.push("L", f, ",", h), null != g && b.push("A", t, ",", t, " 0 ", T, ",", 1 - a, " ", g, ",", y);
                    return b.push("Z"), b.join("")
                }

                function circleSegment(t, e) {
                    return "M0," + t + "A" + t + "," + t + " 0 1," + e + " 0," + -t + "A" + t + "," + t + " 0 1," + e + " 0," + t
                }

                return arc.innerRadius = function (t) {
                    return arguments.length ? (I = d3_functor(t), arc) : I
                }, arc.outerRadius = function (t) {
                    return arguments.length ? (q = d3_functor(t), arc) : q
                }, arc.cornerRadius = function (t) {
                    return arguments.length ? (U = d3_functor(t), arc) : U
                }, arc.padRadius = function (t) {
                    return arguments.length ? (j = t == be ? be : d3_functor(t), arc) : j
                }, arc.startAngle = function (t) {
                    return arguments.length ? (H = d3_functor(t), arc) : H
                }, arc.endAngle = function (t) {
                    return arguments.length ? (F = d3_functor(t), arc) : F
                }, arc.padAngle = function (t) {
                    return arguments.length ? (Y = d3_functor(t), arc) : Y
                }, arc.centroid = function () {
                    var t = (+I.apply(this, arguments) + +q.apply(this, arguments)) / 2,
                        e = (+H.apply(this, arguments) + +F.apply(this, arguments)) / 2 - K;
                    return [Math.cos(e) * t, Math.sin(e) * t]
                }, arc
            };
            var be = "auto";

            function d3_svg_arcInnerRadius(t) {
                return t.innerRadius
            }

            function d3_svg_arcOuterRadius(t) {
                return t.outerRadius
            }

            function d3_svg_arcStartAngle(t) {
                return t.startAngle
            }

            function d3_svg_arcEndAngle(t) {
                return t.endAngle
            }

            function d3_svg_arcPadAngle(t) {
                return t && t.padAngle
            }

            function d3_svg_arcSweep(t, e, n, r) {
                return 0 < (t - n) * e - (e - r) * t ? 0 : 1
            }

            function d3_svg_arcCornerTangents(t, e, n, r, o) {
                var a = t[0] - e[0], i = t[1] - e[1], l = (o ? r : -r) / Math.sqrt(a * a + i * i), s = l * i,
                    u = -l * a, c = t[0] + s, p = t[1] + u, d = e[0] + s, _ = e[1] + u, f = (c + d) / 2,
                    h = (p + _) / 2, g = d - c, y = _ - p, m = g * g + y * y, v = n - r, b = c * _ - d * p,
                    M = (y < 0 ? -1 : 1) * Math.sqrt(Math.max(0, v * v * m - b * b)), x = (b * y - g * M) / m,
                    T = (-b * g - y * M) / m, P = (b * y + g * M) / m, w = (-b * g + y * M) / m, D = x - f, k = T - h,
                    S = P - f, N = w - h;
                return S * S + N * N < D * D + k * k && (x = P, T = w), [[x - s, T - u], [x * n / v, T * n / v]]
            }

            function d3_svg_line(s) {
                var u = d3_geom_pointX, c = d3_geom_pointY, p = d3_true, d = d3_svg_lineLinear, e = d.key, _ = .7;

                function line(t) {
                    var e, n = [], r = [], o = -1, a = t.length, i = d3_functor(u), l = d3_functor(c);

                    function segment() {
                        n.push("M", d(s(r), _))
                    }

                    for (; ++o < a;) p.call(this, e = t[o], o) ? r.push([+i.call(this, e, o), +l.call(this, e, o)]) : r.length && (segment(), r = []);
                    return r.length && segment(), n.length ? n.join("") : null
                }

                return line.x = function (t) {
                    return arguments.length ? (u = t, line) : u
                }, line.y = function (t) {
                    return arguments.length ? (c = t, line) : c
                }, line.defined = function (t) {
                    return arguments.length ? (p = t, line) : p
                }, line.interpolate = function (t) {
                    return arguments.length ? (e = "function" == typeof t ? d = t : (d = Me.get(t) || d3_svg_lineLinear).key, line) : e
                }, line.tension = function (t) {
                    return arguments.length ? (_ = t, line) : _
                }, line
            }

            L.svg.line = function () {
                return d3_svg_line(d3_identity)
            };
            var Me = L.map({
                linear: d3_svg_lineLinear,
                "linear-closed": d3_svg_lineLinearClosed,
                step: function (t) {
                    var e = 0, n = t.length, r = t[0], o = [r[0], ",", r[1]];
                    for (; ++e < n;) o.push("H", (r[0] + (r = t[e])[0]) / 2, "V", r[1]);
                    1 < n && o.push("H", r[0]);
                    return o.join("")
                },
                "step-before": d3_svg_lineStepBefore,
                "step-after": d3_svg_lineStepAfter,
                basis: d3_svg_lineBasis,
                "basis-open": function (t) {
                    if (t.length < 4) return d3_svg_lineLinear(t);
                    var e, n = [], r = -1, o = t.length, a = [0], i = [0];
                    for (; ++r < 3;) e = t[r], a.push(e[0]), i.push(e[1]);
                    n.push(d3_svg_lineDot4(Pe, a) + "," + d3_svg_lineDot4(Pe, i)), --r;
                    for (; ++r < o;) e = t[r], a.shift(), a.push(e[0]), i.shift(), i.push(e[1]), d3_svg_lineBasisBezier(n, a, i);
                    return n.join("")
                },
                "basis-closed": function (t) {
                    var e, n, r = -1, o = t.length, a = o + 4, i = [], l = [];
                    for (; ++r < 4;) n = t[r % o], i.push(n[0]), l.push(n[1]);
                    e = [d3_svg_lineDot4(Pe, i), ",", d3_svg_lineDot4(Pe, l)], --r;
                    for (; ++r < a;) n = t[r % o], i.shift(), i.push(n[0]), l.shift(), l.push(n[1]), d3_svg_lineBasisBezier(e, i, l);
                    return e.join("")
                },
                bundle: function (t, e) {
                    var n = t.length - 1;
                    if (n) for (var r, o, a = t[0][0], i = t[0][1], l = t[n][0] - a, s = t[n][1] - i, u = -1; ++u <= n;) r = t[u], o = u / n, r[0] = e * r[0] + (1 - e) * (a + o * l), r[1] = e * r[1] + (1 - e) * (i + o * s);
                    return d3_svg_lineBasis(t)
                },
                cardinal: function (t, e) {
                    return t.length < 3 ? d3_svg_lineLinear(t) : t[0] + d3_svg_lineHermite(t, d3_svg_lineCardinalTangents(t, e))
                },
                "cardinal-open": function (t, e) {
                    return t.length < 4 ? d3_svg_lineLinear(t) : t[1] + d3_svg_lineHermite(t.slice(1, -1), d3_svg_lineCardinalTangents(t, e))
                },
                "cardinal-closed": function (t, e) {
                    return t.length < 3 ? d3_svg_lineLinearClosed(t) : t[0] + d3_svg_lineHermite((t.push(t[0]), t), d3_svg_lineCardinalTangents([t[t.length - 2]].concat(t, [t[1]]), e))
                },
                monotone: function (t) {
                    return t.length < 3 ? d3_svg_lineLinear(t) : t[0] + d3_svg_lineHermite(t, function (t) {
                        var e, n, r, o, a = [], i = function (t) {
                            var e = 0, n = t.length - 1, r = [], o = t[0], a = t[1], i = r[0] = d3_svg_lineSlope(o, a);
                            for (; ++e < n;) r[e] = (i + (i = d3_svg_lineSlope(o = a, a = t[e + 1]))) / 2;
                            return r[e] = i, r
                        }(t), l = -1, s = t.length - 1;
                        for (; ++l < s;) e = d3_svg_lineSlope(t[l], t[l + 1]), E(e) < G ? i[l] = i[l + 1] = 0 : (n = i[l] / e, r = i[l + 1] / e, 9 < (o = n * n + r * r) && (o = 3 * e / Math.sqrt(o), i[l] = o * n, i[l + 1] = o * r));
                        l = -1;
                        for (; ++l <= s;) o = (t[Math.min(s, l + 1)][0] - t[Math.max(0, l - 1)][0]) / (6 * (1 + i[l] * i[l])), a.push([o || 0, i[l] * o || 0]);
                        return a
                    }(t))
                }
            });

            function d3_svg_lineLinear(t) {
                return 1 < t.length ? t.join("L") : t + "Z"
            }

            function d3_svg_lineLinearClosed(t) {
                return t.join("L") + "Z"
            }

            function d3_svg_lineStepBefore(t) {
                for (var e = 0, n = t.length, r = t[0], o = [r[0], ",", r[1]]; ++e < n;) o.push("V", (r = t[e])[1], "H", r[0]);
                return o.join("")
            }

            function d3_svg_lineStepAfter(t) {
                for (var e = 0, n = t.length, r = t[0], o = [r[0], ",", r[1]]; ++e < n;) o.push("H", (r = t[e])[0], "V", r[1]);
                return o.join("")
            }

            function d3_svg_lineHermite(t, e) {
                if (e.length < 1 || t.length != e.length && t.length != e.length + 2) return d3_svg_lineLinear(t);
                var n = t.length != e.length, r = "", o = t[0], a = t[1], i = e[0], l = i, s = 1;
                if (n && (r += "Q" + (a[0] - 2 * i[0] / 3) + "," + (a[1] - 2 * i[1] / 3) + "," + a[0] + "," + a[1], o = t[1], s = 2), 1 < e.length) {
                    l = e[1], a = t[s], s++, r += "C" + (o[0] + i[0]) + "," + (o[1] + i[1]) + "," + (a[0] - l[0]) + "," + (a[1] - l[1]) + "," + a[0] + "," + a[1];
                    for (var u = 2; u < e.length; u++, s++) a = t[s], l = e[u], r += "S" + (a[0] - l[0]) + "," + (a[1] - l[1]) + "," + a[0] + "," + a[1]
                }
                if (n) {
                    var c = t[s];
                    r += "Q" + (a[0] + 2 * l[0] / 3) + "," + (a[1] + 2 * l[1] / 3) + "," + c[0] + "," + c[1]
                }
                return r
            }

            function d3_svg_lineCardinalTangents(t, e) {
                for (var n, r = [], o = (1 - e) / 2, a = t[0], i = t[1], l = 1, s = t.length; ++l < s;) n = a, a = i, i = t[l], r.push([o * (i[0] - n[0]), o * (i[1] - n[1])]);
                return r
            }

            function d3_svg_lineBasis(t) {
                if (t.length < 3) return d3_svg_lineLinear(t);
                var e = 1, n = t.length, r = t[0], o = r[0], a = r[1], i = [o, o, o, (r = t[1])[0]],
                    l = [a, a, a, r[1]], s = [o, ",", a, "L", d3_svg_lineDot4(Pe, i), ",", d3_svg_lineDot4(Pe, l)];
                for (t.push(t[n - 1]); ++e <= n;) r = t[e], i.shift(), i.push(r[0]), l.shift(), l.push(r[1]), d3_svg_lineBasisBezier(s, i, l);
                return t.pop(), s.push("L", r), s.join("")
            }

            function d3_svg_lineDot4(t, e) {
                return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3]
            }

            Me.forEach(function (t, e) {
                e.key = t, e.closed = /-closed$/.test(t)
            });
            var xe = [0, 2 / 3, 1 / 3, 0], Te = [0, 1 / 3, 2 / 3, 0], Pe = [0, 1 / 6, 2 / 3, 1 / 6];

            function d3_svg_lineBasisBezier(t, e, n) {
                t.push("C", d3_svg_lineDot4(xe, e), ",", d3_svg_lineDot4(xe, n), ",", d3_svg_lineDot4(Te, e), ",", d3_svg_lineDot4(Te, n), ",", d3_svg_lineDot4(Pe, e), ",", d3_svg_lineDot4(Pe, n))
            }

            function d3_svg_lineSlope(t, e) {
                return (e[1] - t[1]) / (e[0] - t[0])
            }

            function d3_svg_lineRadial(t) {
                for (var e, n, r, o = -1, a = t.length; ++o < a;) n = (e = t[o])[0], r = e[1] - K, e[0] = n * Math.cos(r), e[1] = n * Math.sin(r);
                return t
            }

            function d3_svg_area(_) {
                var f = d3_geom_pointX, h = d3_geom_pointX, g = 0, y = d3_geom_pointY, m = d3_true,
                    v = d3_svg_lineLinear, e = v.key, b = v, M = "L", x = .7;

                function area(t) {
                    var e, n, r, o = [], a = [], i = [], l = -1, s = t.length, u = d3_functor(f), c = d3_functor(g),
                        p = f === h ? function () {
                            return n
                        } : d3_functor(h), d = g === y ? function () {
                            return r
                        } : d3_functor(y);

                    function segment() {
                        o.push("M", v(_(i), x), M, b(_(a.reverse()), x), "Z")
                    }

                    for (; ++l < s;) m.call(this, e = t[l], l) ? (a.push([n = +u.call(this, e, l), r = +c.call(this, e, l)]), i.push([+p.call(this, e, l), +d.call(this, e, l)])) : a.length && (segment(), a = [], i = []);
                    return a.length && segment(), o.length ? o.join("") : null
                }

                return area.x = function (t) {
                    return arguments.length ? (f = h = t, area) : h
                }, area.x0 = function (t) {
                    return arguments.length ? (f = t, area) : f
                }, area.x1 = function (t) {
                    return arguments.length ? (h = t, area) : h
                }, area.y = function (t) {
                    return arguments.length ? (g = y = t, area) : y
                }, area.y0 = function (t) {
                    return arguments.length ? (g = t, area) : g
                }, area.y1 = function (t) {
                    return arguments.length ? (y = t, area) : y
                }, area.defined = function (t) {
                    return arguments.length ? (m = t, area) : m
                }, area.interpolate = function (t) {
                    return arguments.length ? (e = "function" == typeof t ? v = t : (v = Me.get(t) || d3_svg_lineLinear).key, b = v.reverse || v, M = v.closed ? "M" : "L", area) : e
                }, area.tension = function (t) {
                    return arguments.length ? (x = t, area) : x
                }, area
            }

            function d3_svg_chordRadius(t) {
                return t.radius
            }

            function d3_svg_diagonalProjection(t) {
                return [t.x, t.y]
            }

            function d3_svg_symbolSize() {
                return 64
            }

            function d3_svg_symbolType() {
                return "circle"
            }

            function d3_svg_symbolCircle(t) {
                var e = Math.sqrt(t / V);
                return "M0," + e + "A" + e + "," + e + " 0 1,1 0," + -e + "A" + e + "," + e + " 0 1,1 0," + e + "Z"
            }

            L.svg.line.radial = function () {
                var t = d3_svg_line(d3_svg_lineRadial);
                return t.radius = t.x, delete t.x, t.angle = t.y, delete t.y, t
            }, (d3_svg_lineStepBefore.reverse = d3_svg_lineStepAfter).reverse = d3_svg_lineStepBefore, L.svg.area = function () {
                return d3_svg_area(d3_identity)
            }, L.svg.area.radial = function () {
                var t = d3_svg_area(d3_svg_lineRadial);
                return t.radius = t.x, delete t.x, t.innerRadius = t.x0, delete t.x0, t.outerRadius = t.x1, delete t.x1, t.angle = t.y, delete t.y, t.startAngle = t.y0, delete t.y0, t.endAngle = t.y1, delete t.y1, t
            }, L.svg.chord = function () {
                var i = d3_source, l = d3_target, s = d3_svg_chordRadius, u = d3_svg_arcStartAngle,
                    c = d3_svg_arcEndAngle;

                function chord(t, e) {
                    var n, r, o = subgroup(this, i, t, e), a = subgroup(this, l, t, e);
                    return "M" + o.p0 + arc(o.r, o.p1, o.a1 - o.a0) + (r = a, (n = o).a0 == r.a0 && n.a1 == r.a1 ? curve(o.r, o.p1, o.r, o.p0) : curve(o.r, o.p1, a.r, a.p0) + arc(a.r, a.p1, a.a1 - a.a0) + curve(a.r, a.p1, o.r, o.p0)) + "Z"
                }

                function subgroup(t, e, n, r) {
                    var o = e.call(t, n, r), a = s.call(t, o, r), i = u.call(t, o, r) - K, l = c.call(t, o, r) - K;
                    return {
                        r: a,
                        a0: i,
                        a1: l,
                        p0: [a * Math.cos(i), a * Math.sin(i)],
                        p1: [a * Math.cos(l), a * Math.sin(l)]
                    }
                }

                function arc(t, e, n) {
                    return "A" + t + "," + t + " 0 " + +(V < n) + ",1 " + e
                }

                function curve(t, e, n, r) {
                    return "Q 0,0 " + r
                }

                return chord.radius = function (t) {
                    return arguments.length ? (s = d3_functor(t), chord) : s
                }, chord.source = function (t) {
                    return arguments.length ? (i = d3_functor(t), chord) : i
                }, chord.target = function (t) {
                    return arguments.length ? (l = d3_functor(t), chord) : l
                }, chord.startAngle = function (t) {
                    return arguments.length ? (u = d3_functor(t), chord) : u
                }, chord.endAngle = function (t) {
                    return arguments.length ? (c = d3_functor(t), chord) : c
                }, chord
            }, L.svg.diagonal = function () {
                var i = d3_source, l = d3_target, s = d3_svg_diagonalProjection;

                function diagonal(t, e) {
                    var n = i.call(this, t, e), r = l.call(this, t, e), o = (n.y + r.y) / 2,
                        a = [n, {x: n.x, y: o}, {x: r.x, y: o}, r];
                    return "M" + (a = a.map(s))[0] + "C" + a[1] + " " + a[2] + " " + a[3]
                }

                return diagonal.source = function (t) {
                    return arguments.length ? (i = d3_functor(t), diagonal) : i
                }, diagonal.target = function (t) {
                    return arguments.length ? (l = d3_functor(t), diagonal) : l
                }, diagonal.projection = function (t) {
                    return arguments.length ? (s = t, diagonal) : s
                }, diagonal
            }, L.svg.diagonal.radial = function () {
                var t = L.svg.diagonal(), e = d3_svg_diagonalProjection, n = t.projection;
                return t.projection = function (t) {
                    return arguments.length ? n((r = e = t, function () {
                        var t = r.apply(this, arguments), e = t[0], n = t[1] - K;
                        return [e * Math.cos(n), e * Math.sin(n)]
                    })) : e;
                    var r
                }, t
            }, L.svg.symbol = function () {
                var n = d3_svg_symbolType, r = d3_svg_symbolSize;

                function symbol(t, e) {
                    return (we.get(n.call(this, t, e)) || d3_svg_symbolCircle)(r.call(this, t, e))
                }

                return symbol.type = function (t) {
                    return arguments.length ? (n = d3_functor(t), symbol) : n
                }, symbol.size = function (t) {
                    return arguments.length ? (r = d3_functor(t), symbol) : r
                }, symbol
            };
            var we = L.map({
                circle: d3_svg_symbolCircle, cross: function (t) {
                    var e = Math.sqrt(t / 5) / 2;
                    return "M" + -3 * e + "," + -e + "H" + -e + "V" + -3 * e + "H" + e + "V" + -e + "H" + 3 * e + "V" + e + "H" + e + "V" + 3 * e + "H" + -e + "V" + e + "H" + -3 * e + "Z"
                }, diamond: function (t) {
                    var e = Math.sqrt(t / (2 * ke)), n = e * ke;
                    return "M0," + -e + "L" + n + ",0 0," + e + " " + -n + ",0Z"
                }, square: function (t) {
                    var e = Math.sqrt(t) / 2;
                    return "M" + -e + "," + -e + "L" + e + "," + -e + " " + e + "," + e + " " + -e + "," + e + "Z"
                }, "triangle-down": function (t) {
                    var e = Math.sqrt(t / De), n = e * De / 2;
                    return "M0," + n + "L" + e + "," + -n + " " + -e + "," + -n + "Z"
                }, "triangle-up": function (t) {
                    var e = Math.sqrt(t / De), n = e * De / 2;
                    return "M0," + -n + "L" + e + "," + n + " " + -e + "," + n + "Z"
                }
            });
            L.svg.symbolTypes = we.keys();
            var De = Math.sqrt(3), ke = Math.tan(30 * k);
            y.transition = function (t) {
                for (var e, n, r = Ne || ++Ee, o = d3_transitionNamespace(t), a = [], i = Ce || {
                    time: Date.now(),
                    ease: d3_ease_cubicInOut,
                    delay: 0,
                    duration: 250
                }, l = -1, s = this.length; ++l < s;) {
                    a.push(e = []);
                    for (var u = this[l], c = -1, p = u.length; ++c < p;) (n = u[c]) && d3_transitionNode(n, c, o, r, i), e.push(n)
                }
                return d3_transition(a, o, r)
            }, y.interrupt = function (t) {
                return this.each(null == t ? Se : d3_selection_interruptNS(d3_transitionNamespace(t)))
            };
            var Se = d3_selection_interruptNS(d3_transitionNamespace());

            function d3_selection_interruptNS(r) {
                return function () {
                    var t, e, n;
                    (t = this[r]) && (n = t[e = t.active]) && (n.timer.c = null, n.timer.t = NaN, --t.count ? delete t[e] : delete this[r], t.active += .5, n.event && n.event.interrupt.call(this, this.__data__, n.index))
                }
            }

            function d3_transition(t, e, n) {
                return p(t, Ae), t.namespace = e, t.id = n, t
            }

            var Ne, Ce, Ae = [], Ee = 0;

            function d3_transition_tween(t, r, o, a) {
                var i = t.id, l = t.namespace;
                return d3_selection_each(t, "function" == typeof o ? function (t, e, n) {
                    t[l][i].tween.set(r, a(o.call(t, t.__data__, e, n)))
                } : (o = a(o), function (t) {
                    t[l][i].tween.set(r, o)
                }))
            }

            function d3_transition_text(t) {
                return null == t && (t = ""), function () {
                    this.textContent = t
                }
            }

            function d3_transitionNamespace(t) {
                return null == t ? "__transition__" : "__transition_" + t + "__"
            }

            function d3_transitionNode(a, i, o, l, t) {
                var s, u, c, p, d, _ = a[o] || (a[o] = {active: 0, count: 0}), f = _[l];

                function start(t) {
                    var e = _.active, n = _[e];
                    for (var r in n && (n.timer.c = null, n.timer.t = NaN, --_.count, delete _[e], n.event && n.event.interrupt.call(a, a.__data__, n.index)), _) if (+r < l) {
                        var o = _[r];
                        o.timer.c = null, o.timer.t = NaN, --_.count, delete _[r]
                    }
                    u.c = tick, d3_timer(function () {
                        return u.c && tick(t || 1) && (u.c = null, u.t = NaN), 1
                    }, 0, s), _.active = l, f.event && f.event.start.call(a, a.__data__, i), d = [], f.tween.forEach(function (t, e) {
                        (e = e.call(a, a.__data__, i)) && d.push(e)
                    }), p = f.ease, c = f.duration
                }

                function tick(t) {
                    for (var e = t / c, n = p(e), r = d.length; 0 < r;) d[--r].call(a, n);
                    if (1 <= e) return f.event && f.event.end.call(a, a.__data__, i), --_.count ? delete _[l] : delete a[o], 1
                }

                f || (s = t.time, u = d3_timer(function (t) {
                    var e = f.delay;
                    if (u.t = e + s, e <= t) return start(t - e);
                    u.c = start
                }, 0, s), f = _[l] = {
                    tween: new d3_Map,
                    time: s,
                    timer: u,
                    delay: t.delay,
                    duration: t.duration,
                    ease: t.ease,
                    index: i
                }, t = null, ++_.count)
            }

            Ae.call = y.call, Ae.empty = y.empty, Ae.node = y.node, Ae.size = y.size, L.transition = function (t, e) {
                return t && t.transition ? Ne ? t.transition(e) : t : L.selection().transition(t)
            }, (L.transition.prototype = Ae).select = function (t) {
                var e, n, r, o = this.id, a = this.namespace, i = [];
                t = d3_selection_selector(t);
                for (var l = -1, s = this.length; ++l < s;) {
                    i.push(e = []);
                    for (var u = this[l], c = -1, p = u.length; ++c < p;) (r = u[c]) && (n = t.call(r, r.__data__, c, l)) ? ("__data__" in r && (n.__data__ = r.__data__), d3_transitionNode(n, c, a, o, r[a][o]), e.push(n)) : e.push(null)
                }
                return d3_transition(i, a, o)
            }, Ae.selectAll = function (t) {
                var e, n, r, o, a, i = this.id, l = this.namespace, s = [];
                t = d3_selection_selectorAll(t);
                for (var u = -1, c = this.length; ++u < c;) for (var p = this[u], d = -1, _ = p.length; ++d < _;) if (r = p[d]) {
                    a = r[l][i], n = t.call(r, r.__data__, d, u), s.push(e = []);
                    for (var f = -1, h = n.length; ++f < h;) (o = n[f]) && d3_transitionNode(o, f, l, i, a), e.push(o)
                }
                return d3_transition(s, l, i)
            }, Ae.filter = function (t) {
                var e, n, r = [];
                "function" != typeof t && (t = d3_selection_filter(t));
                for (var o = 0, a = this.length; o < a; o++) {
                    r.push(e = []);
                    for (var i, l = 0, s = (i = this[o]).length; l < s; l++) (n = i[l]) && t.call(n, n.__data__, l, o) && e.push(n)
                }
                return d3_transition(r, this.namespace, this.id)
            }, Ae.tween = function (e, n) {
                var r = this.id, o = this.namespace;
                return arguments.length < 2 ? this.node()[o][r].tween.get(e) : d3_selection_each(this, null == n ? function (t) {
                    t[o][r].tween.remove(e)
                } : function (t) {
                    t[o][r].tween.set(e, n)
                })
            }, Ae.attr = function (t, e) {
                if (arguments.length < 2) {
                    for (e in t) this.attr(e, t[e]);
                    return this
                }
                var r = "transform" == t ? d3_interpolateTransform : d3_interpolate, o = L.ns.qualify(t);

                function attrNull() {
                    this.removeAttribute(o)
                }

                function attrNullNS() {
                    this.removeAttributeNS(o.space, o.local)
                }

                return d3_transition_tween(this, "attr." + t, e, o.local ? function (n) {
                    return null == n ? attrNullNS : (n += "", function () {
                        var e, t = this.getAttributeNS(o.space, o.local);
                        return t !== n && (e = r(t, n), function (t) {
                            this.setAttributeNS(o.space, o.local, e(t))
                        })
                    })
                } : function (n) {
                    return null == n ? attrNull : (n += "", function () {
                        var e, t = this.getAttribute(o);
                        return t !== n && (e = r(t, n), function (t) {
                            this.setAttribute(o, e(t))
                        })
                    })
                })
            }, Ae.attrTween = function (t, r) {
                var o = L.ns.qualify(t);
                return this.tween("attr." + t, o.local ? function (t, e) {
                    var n = r.call(this, t, e, this.getAttributeNS(o.space, o.local));
                    return n && function (t) {
                        this.setAttributeNS(o.space, o.local, n(t))
                    }
                } : function (t, e) {
                    var n = r.call(this, t, e, this.getAttribute(o));
                    return n && function (t) {
                        this.setAttribute(o, n(t))
                    }
                })
            }, Ae.style = function (r, t, o) {
                var e = arguments.length;
                if (e < 3) {
                    if ("string" != typeof r) {
                        for (o in e < 2 && (t = ""), r) this.style(o, r[o], t);
                        return this
                    }
                    o = ""
                }

                function styleNull() {
                    this.style.removeProperty(r)
                }

                return d3_transition_tween(this, "style." + r, t, function (n) {
                    return null == n ? styleNull : (n += "", function () {
                        var e, t = d3_window(this).getComputedStyle(this, null).getPropertyValue(r);
                        return t !== n && (e = d3_interpolate(t, n), function (t) {
                            this.style.setProperty(r, e(t), o)
                        })
                    })
                })
            }, Ae.styleTween = function (r, o, a) {
                return arguments.length < 3 && (a = ""), this.tween("style." + r, function (t, e) {
                    var n = o.call(this, t, e, d3_window(this).getComputedStyle(this, null).getPropertyValue(r));
                    return n && function (t) {
                        this.style.setProperty(r, n(t), a)
                    }
                })
            }, Ae.text = function (t) {
                return d3_transition_tween(this, "text", t, d3_transition_text)
            }, Ae.remove = function () {
                var e = this.namespace;
                return this.each("end.transition", function () {
                    var t;
                    this[e].count < 2 && (t = this.parentNode) && t.removeChild(this)
                })
            }, Ae.ease = function (e) {
                var n = this.id, r = this.namespace;
                return arguments.length < 1 ? this.node()[r][n].ease : ("function" != typeof e && (e = L.ease.apply(L, arguments)), d3_selection_each(this, function (t) {
                    t[r][n].ease = e
                }))
            }, Ae.delay = function (r) {
                var o = this.id, a = this.namespace;
                return arguments.length < 1 ? this.node()[a][o].delay : d3_selection_each(this, "function" == typeof r ? function (t, e, n) {
                    t[a][o].delay = +r.call(t, t.__data__, e, n)
                } : (r = +r, function (t) {
                    t[a][o].delay = r
                }))
            }, Ae.duration = function (r) {
                var o = this.id, a = this.namespace;
                return arguments.length < 1 ? this.node()[a][o].duration : d3_selection_each(this, "function" == typeof r ? function (t, e, n) {
                    t[a][o].duration = Math.max(1, r.call(t, t.__data__, e, n))
                } : (r = Math.max(1, r), function (t) {
                    t[a][o].duration = r
                }))
            }, Ae.each = function (r, n) {
                var o = this.id, a = this.namespace;
                if (arguments.length < 2) {
                    var t = Ce, e = Ne;
                    try {
                        Ne = o, d3_selection_each(this, function (t, e, n) {
                            Ce = t[a][o], r.call(t, t.__data__, e, n)
                        })
                    } finally {
                        Ce = t, Ne = e
                    }
                } else d3_selection_each(this, function (t) {
                    var e = t[a][o];
                    (e.event || (e.event = L.dispatch("start", "end", "interrupt"))).on(r, n)
                });
                return this
            }, Ae.transition = function () {
                for (var t, e, n, r = this.id, o = ++Ee, a = this.namespace, i = [], l = 0, s = this.length; l < s; l++) {
                    i.push(t = []);
                    for (var u, c = 0, p = (u = this[l]).length; c < p; c++) (e = u[c]) && d3_transitionNode(e, c, a, o, {
                        time: (n = e[a][r]).time,
                        ease: n.ease,
                        delay: n.delay + n.duration,
                        duration: n.duration
                    }), t.push(e)
                }
                return d3_transition(i, a, o)
            }, L.svg.axis = function () {
                var D, k = L.scale.linear(), S = Re, N = 6, C = 6, A = 3, E = [10], R = null;

                function axis(t) {
                    t.each(function () {
                        var t, e = L.select(this), n = this.__chart__ || k, r = this.__chart__ = k.copy(),
                            o = null == R ? r.ticks ? r.ticks.apply(r, E) : r.domain() : R,
                            a = null == D ? r.tickFormat ? r.tickFormat.apply(r, E) : d3_identity : D,
                            i = e.selectAll(".tick").data(o, r),
                            l = i.enter().insert("g", ".domain").attr("class", "tick").style("opacity", G),
                            s = L.transition(i.exit()).style("opacity", G).remove(),
                            u = L.transition(i.order()).style("opacity", 1), c = Math.max(N, 0) + A,
                            p = d3_scaleRange(r), d = e.selectAll(".domain").data([0]),
                            _ = (d.enter().append("path").attr("class", "domain"), L.transition(d));
                        l.append("line"), l.append("text");
                        var f, h, g, y, m = l.select("line"), v = u.select("line"), b = i.select("text").text(a),
                            M = l.select("text"), x = u.select("text"), T = "top" === S || "left" === S ? -1 : 1;
                        if ("bottom" === S || "top" === S ? (t = d3_svg_axisX, f = "x", g = "y", h = "x2", y = "y2", b.attr("dy", T < 0 ? "0em" : ".71em").style("text-anchor", "middle"), _.attr("d", "M" + p[0] + "," + T * C + "V0H" + p[1] + "V" + T * C)) : (t = d3_svg_axisY, f = "y", g = "x", h = "y2", y = "x2", b.attr("dy", ".32em").style("text-anchor", T < 0 ? "end" : "start"), _.attr("d", "M" + T * C + "," + p[0] + "H0V" + p[1] + "H" + T * C)), m.attr(y, T * N), M.attr(g, T * c), v.attr(h, 0).attr(y, T * N), x.attr(f, 0).attr(g, T * c), r.rangeBand) {
                            var P = r, w = P.rangeBand() / 2;
                            n = r = function (t) {
                                return P(t) + w
                            }
                        } else n.rangeBand ? n = r : s.call(t, r, n);
                        l.call(t, n, r), u.call(t, r, r)
                    })
                }

                return axis.scale = function (t) {
                    return arguments.length ? (k = t, axis) : k
                }, axis.orient = function (t) {
                    return arguments.length ? (S = t in Le ? t + "" : Re, axis) : S
                }, axis.ticks = function () {
                    return arguments.length ? (E = d(arguments), axis) : E
                }, axis.tickValues = function (t) {
                    return arguments.length ? (R = t, axis) : R
                }, axis.tickFormat = function (t) {
                    return arguments.length ? (D = t, axis) : D
                }, axis.tickSize = function (t) {
                    var e = arguments.length;
                    return e ? (N = +t, C = +arguments[e - 1], axis) : N
                }, axis.innerTickSize = function (t) {
                    return arguments.length ? (N = +t, axis) : N
                }, axis.outerTickSize = function (t) {
                    return arguments.length ? (C = +t, axis) : C
                }, axis.tickPadding = function (t) {
                    return arguments.length ? (A = +t, axis) : A
                }, axis.tickSubdivide = function () {
                    return arguments.length && axis
                }, axis
            };
            var Re = "bottom", Le = {top: 1, right: 1, bottom: 1, left: 1};

            function d3_svg_axisX(t, n, r) {
                t.attr("transform", function (t) {
                    var e = n(t);
                    return "translate(" + (isFinite(e) ? e : r(t)) + ",0)"
                })
            }

            function d3_svg_axisY(t, n, r) {
                t.attr("transform", function (t) {
                    var e = n(t);
                    return "translate(0," + (isFinite(e) ? e : r(t)) + ")"
                })
            }

            L.svg.brush = function () {
                var h, g, y = d3_eventDispatch(brush, "brushstart", "brush", "brushend"), m = null, v = null,
                    b = [0, 0], M = [0, 0], x = !0, T = !0, i = Be[0];

                function brush(t) {
                    t.each(function () {
                        var t = L.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", brushstart).on("touchstart.brush", brushstart),
                            e = t.selectAll(".background").data([0]);
                        e.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), t.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
                        var n = t.selectAll(".resize").data(i, d3_identity);
                        n.exit().remove(), n.enter().append("g").attr("class", function (t) {
                            return "resize " + t
                        }).style("cursor", function (t) {
                            return ze[t]
                        }).append("rect").attr("x", function (t) {
                            return /[ew]$/.test(t) ? -3 : null
                        }).attr("y", function (t) {
                            return /^[ns]/.test(t) ? -3 : null
                        }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), n.style("display", brush.empty() ? "none" : null);
                        var r, o = L.transition(t), a = L.transition(e);
                        m && (r = d3_scaleRange(m), a.attr("x", r[0]).attr("width", r[1] - r[0]), redrawX(o)), v && (r = d3_scaleRange(v), a.attr("y", r[0]).attr("height", r[1] - r[0]), redrawY(o)), redraw(o)
                    })
                }

                function redraw(t) {
                    t.selectAll(".resize").attr("transform", function (t) {
                        return "translate(" + b[+/e$/.test(t)] + "," + M[+/^s/.test(t)] + ")"
                    })
                }

                function redrawX(t) {
                    t.select(".extent").attr("x", b[0]), t.selectAll(".extent,.n>rect,.s>rect").attr("width", b[1] - b[0])
                }

                function redrawY(t) {
                    t.select(".extent").attr("y", M[0]), t.selectAll(".extent,.e>rect,.w>rect").attr("height", M[1] - M[0])
                }

                function brushstart() {
                    var p, n, r = this, t = L.select(L.event.target), o = y.of(r, arguments), a = L.select(r),
                        e = t.datum(), i = !/^(n|s)$/.test(e) && m, l = !/^(e|w)$/.test(e) && v,
                        d = t.classed("extent"), s = d3_event_dragSuppress(r), _ = L.mouse(r),
                        u = L.select(d3_window(r)).on("keydown.brush", function () {
                            32 == L.event.keyCode && (d || (p = null, _[0] -= b[1], _[1] -= M[1], d = 2), d3_eventPreventDefault())
                        }).on("keyup.brush", function () {
                            32 == L.event.keyCode && 2 == d && (_[0] += b[1], _[1] += M[1], d = 0, d3_eventPreventDefault())
                        });
                    if (L.event.changedTouches ? u.on("touchmove.brush", brushmove).on("touchend.brush", brushend) : u.on("mousemove.brush", brushmove).on("mouseup.brush", brushend), a.interrupt().selectAll("*").interrupt(), d) _[0] = b[0] - _[0], _[1] = M[0] - _[1]; else if (e) {
                        var c = +/w$/.test(e), f = +/^n/.test(e);
                        n = [b[1 - c] - _[0], M[1 - f] - _[1]], _[0] = b[c], _[1] = M[f]
                    } else L.event.altKey && (p = _.slice());

                    function brushmove() {
                        var t = L.mouse(r), e = !1;
                        n && (t[0] += n[0], t[1] += n[1]), d || (L.event.altKey ? (p || (p = [(b[0] + b[1]) / 2, (M[0] + M[1]) / 2]), _[0] = b[+(t[0] < p[0])], _[1] = M[+(t[1] < p[1])]) : p = null), i && move1(t, m, 0) && (redrawX(a), e = !0), l && move1(t, v, 1) && (redrawY(a), e = !0), e && (redraw(a), o({
                            type: "brush",
                            mode: d ? "move" : "resize"
                        }))
                    }

                    function move1(t, e, n) {
                        var r, o, a = d3_scaleRange(e), i = a[0], l = a[1], s = _[n], u = n ? M : b, c = u[1] - u[0];
                        if (d && (i -= s, l -= c + s), r = (n ? T : x) ? Math.max(i, Math.min(l, t[n])) : t[n], d ? o = (r += s) + c : (p && (s = Math.max(i, Math.min(l, 2 * p[n] - r))), s < r ? (o = r, r = s) : o = s), u[0] != r || u[1] != o) return n ? g = null : h = null, u[0] = r, u[1] = o, !0
                    }

                    function brushend() {
                        brushmove(), a.style("pointer-events", "all").selectAll(".resize").style("display", brush.empty() ? "none" : null), L.select("body").style("cursor", null), u.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), s(), o({type: "brushend"})
                    }

                    a.style("pointer-events", "none").selectAll(".resize").style("display", null), L.select("body").style("cursor", t.style("cursor")), o({type: "brushstart"}), brushmove()
                }

                return brush.event = function (t) {
                    t.each(function () {
                        var r = y.of(this, arguments), o = {x: b, y: M, i: h, j: g}, t = this.__chart__ || o;
                        this.__chart__ = o, Ne ? L.select(this).transition().each("start.brush", function () {
                            h = t.i, g = t.j, b = t.x, M = t.y, r({type: "brushstart"})
                        }).tween("brush:brush", function () {
                            var e = d3_interpolateArray(b, o.x), n = d3_interpolateArray(M, o.y);
                            return h = g = null, function (t) {
                                b = o.x = e(t), M = o.y = n(t), r({type: "brush", mode: "resize"})
                            }
                        }).each("end.brush", function () {
                            h = o.i, g = o.j, r({type: "brush", mode: "resize"}), r({type: "brushend"})
                        }) : (r({type: "brushstart"}), r({type: "brush", mode: "resize"}), r({type: "brushend"}))
                    })
                }, brush.x = function (t) {
                    return arguments.length ? (i = Be[!(m = t) << 1 | !v], brush) : m
                }, brush.y = function (t) {
                    return arguments.length ? (i = Be[!m << 1 | !(v = t)], brush) : v
                }, brush.clamp = function (t) {
                    return arguments.length ? (m && v ? (x = !!t[0], T = !!t[1]) : m ? x = !!t : v && (T = !!t), brush) : m && v ? [x, T] : m ? x : v ? T : null
                }, brush.extent = function (t) {
                    var e, n, r, o, a;
                    return arguments.length ? (m && (e = t[0], n = t[1], v && (e = e[0], n = n[0]), h = [e, n], m.invert && (e = m(e), n = m(n)), n < e && (a = e, e = n, n = a), e == b[0] && n == b[1] || (b = [e, n])), v && (r = t[0], o = t[1], m && (r = r[1], o = o[1]), g = [r, o], v.invert && (r = v(r), o = v(o)), o < r && (a = r, r = o, o = a), r == M[0] && o == M[1] || (M = [r, o])), brush) : (m && (h ? (e = h[0], n = h[1]) : (e = b[0], n = b[1], m.invert && (e = m.invert(e), n = m.invert(n)), n < e && (a = e, e = n, n = a))), v && (g ? (r = g[0], o = g[1]) : (r = M[0], o = M[1], v.invert && (r = v.invert(r), o = v.invert(o)), o < r && (a = r, r = o, o = a))), m && v ? [[e, r], [n, o]] : m ? [e, n] : v && [r, o])
                }, brush.clear = function () {
                    return brush.empty() || (b = [0, 0], M = [0, 0], h = g = null), brush
                }, brush.empty = function () {
                    return !!m && b[0] == b[1] || !!v && M[0] == M[1]
                }, L.rebind(brush, y, "on")
            };
            var ze = {
                    n: "ns-resize",
                    e: "ew-resize",
                    s: "ns-resize",
                    w: "ew-resize",
                    nw: "nwse-resize",
                    ne: "nesw-resize",
                    se: "nwse-resize",
                    sw: "nesw-resize"
                }, Be = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []],
                Oe = nt.format = st.timeFormat, Ie = Oe.utc, qe = Ie("%Y-%m-%dT%H:%M:%S.%LZ");

            function d3_time_formatIsoNative(t) {
                return t.toISOString()
            }

            function d3_time_scale(e, o, t) {
                function scale(t) {
                    return e(t)
                }

                function tickMethod(t, e) {
                    var n = (t[1] - t[0]) / e, r = L.bisect(Ue, n);
                    return r == Ue.length ? [o.year, d3_scale_linearTickRange(t.map(function (t) {
                        return t / 31536e6
                    }), e)[2]] : r ? o[n / Ue[r - 1] < Ue[r] / n ? r - 1 : r] : [Fe, d3_scale_linearTickRange(t, e)[2]]
                }

                return scale.invert = function (t) {
                    return d3_time_scaleDate(e.invert(t))
                }, scale.domain = function (t) {
                    return arguments.length ? (e.domain(t), scale) : e.domain().map(d3_time_scaleDate)
                }, scale.nice = function (e, n) {
                    var t = scale.domain(), r = d3_scaleExtent(t),
                        o = null == e ? tickMethod(r, 10) : "number" == typeof e && tickMethod(r, e);

                    function skipped(t) {
                        return !isNaN(t) && !e.range(t, d3_time_scaleDate(+t + 1), n).length
                    }

                    return o && (e = o[0], n = o[1]), scale.domain(d3_scale_nice(t, 1 < n ? {
                        floor: function (t) {
                            for (; skipped(t = e.floor(t));) t = d3_time_scaleDate(t - 1);
                            return t
                        }, ceil: function (t) {
                            for (; skipped(t = e.ceil(t));) t = d3_time_scaleDate(+t + 1);
                            return t
                        }
                    } : e))
                }, scale.ticks = function (t, e) {
                    var n = d3_scaleExtent(scale.domain()),
                        r = null == t ? tickMethod(n, 10) : "number" == typeof t ? tickMethod(n, t) : !t.range && [{range: t}, e];
                    return r && (t = r[0], e = r[1]), t.range(n[0], d3_time_scaleDate(+n[1] + 1), e < 1 ? 1 : e)
                }, scale.tickFormat = function () {
                    return t
                }, scale.copy = function () {
                    return d3_time_scale(e.copy(), o, t)
                }, d3_scale_linearRebind(scale, e)
            }

            function d3_time_scaleDate(t) {
                return new Date(t)
            }

            Oe.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? d3_time_formatIsoNative : qe, d3_time_formatIsoNative.parse = function (t) {
                var e = new Date(t);
                return isNaN(e) ? null : e
            }, d3_time_formatIsoNative.toString = qe.toString, nt.second = d3_time_interval(function (t) {
                return new rt(1e3 * Math.floor(t / 1e3))
            }, function (t, e) {
                t.setTime(t.getTime() + 1e3 * Math.floor(e))
            }, function (t) {
                return t.getSeconds()
            }), nt.seconds = nt.second.range, nt.seconds.utc = nt.second.utc.range, nt.minute = d3_time_interval(function (t) {
                return new rt(6e4 * Math.floor(t / 6e4))
            }, function (t, e) {
                t.setTime(t.getTime() + 6e4 * Math.floor(e))
            }, function (t) {
                return t.getMinutes()
            }), nt.minutes = nt.minute.range, nt.minutes.utc = nt.minute.utc.range, nt.hour = d3_time_interval(function (t) {
                var e = t.getTimezoneOffset() / 60;
                return new rt(36e5 * (Math.floor(t / 36e5 - e) + e))
            }, function (t, e) {
                t.setTime(t.getTime() + 36e5 * Math.floor(e))
            }, function (t) {
                return t.getHours()
            }), nt.hours = nt.hour.range, nt.hours.utc = nt.hour.utc.range, nt.month = d3_time_interval(function (t) {
                return (t = nt.day(t)).setDate(1), t
            }, function (t, e) {
                t.setMonth(t.getMonth() + e)
            }, function (t) {
                return t.getMonth()
            }), nt.months = nt.month.range, nt.months.utc = nt.month.utc.range;
            var Ue = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
                je = [[nt.second, 1], [nt.second, 5], [nt.second, 15], [nt.second, 30], [nt.minute, 1], [nt.minute, 5], [nt.minute, 15], [nt.minute, 30], [nt.hour, 1], [nt.hour, 3], [nt.hour, 6], [nt.hour, 12], [nt.day, 1], [nt.day, 2], [nt.week, 1], [nt.month, 1], [nt.month, 3], [nt.year, 1]],
                He = Oe.multi([[".%L", function (t) {
                    return t.getMilliseconds()
                }], [":%S", function (t) {
                    return t.getSeconds()
                }], ["%I:%M", function (t) {
                    return t.getMinutes()
                }], ["%I %p", function (t) {
                    return t.getHours()
                }], ["%a %d", function (t) {
                    return t.getDay() && 1 != t.getDate()
                }], ["%b %d", function (t) {
                    return 1 != t.getDate()
                }], ["%B", function (t) {
                    return t.getMonth()
                }], ["%Y", d3_true]]), Fe = {
                    range: function (t, e, n) {
                        return L.range(Math.ceil(t / n) * n, +e, n).map(d3_time_scaleDate)
                    }, floor: d3_identity, ceil: d3_identity
                };
            je.year = nt.year, nt.scale = function () {
                return d3_time_scale(L.scale.linear(), je, He)
            };
            var Ye = je.map(function (t) {
                return [t[0].utc, t[1]]
            }), Ge = Ie.multi([[".%L", function (t) {
                return t.getUTCMilliseconds()
            }], [":%S", function (t) {
                return t.getUTCSeconds()
            }], ["%I:%M", function (t) {
                return t.getUTCMinutes()
            }], ["%I %p", function (t) {
                return t.getUTCHours()
            }], ["%a %d", function (t) {
                return t.getUTCDay() && 1 != t.getUTCDate()
            }], ["%b %d", function (t) {
                return 1 != t.getUTCDate()
            }], ["%B", function (t) {
                return t.getUTCMonth()
            }], ["%Y", d3_true]]);

            function d3_json(t) {
                return JSON.parse(t.responseText)
            }

            function d3_html(t) {
                var e = h.createRange();
                return e.selectNode(h.body), e.createContextualFragment(t.responseText)
            }

            Ye.year = nt.year.utc, nt.scale.utc = function () {
                return d3_time_scale(L.scale.linear(), Ye, Ge)
            }, L.text = d3_xhrType(function (t) {
                return t.responseText
            }), L.json = function (t, e) {
                return d3_xhr(t, "application/json", d3_json, e)
            }, L.html = function (t, e) {
                return d3_xhr(t, "text/html", d3_html, e)
            }, L.xml = d3_xhrType(function (t) {
                return t.responseXML
            }), this.d3 = L, void 0 === (Ze = "function" == typeof (Xe = L) ? Xe.call(We, Ke, We, Ve) : Xe) || (Ve.exports = Ze)
        }()
    }, 298: function (t, e, n) {
        !function (t) {
            "use strict";

            function noop() {
            }

            function transformAbsolute(t) {
                if (!t) return noop;
                var n, r, o = t.scale[0], a = t.scale[1], i = t.translate[0], l = t.translate[1];
                return function (t, e) {
                    e || (n = r = 0), t[0] = (n += t[0]) * o + i, t[1] = (r += t[1]) * a + l
                }
            }

            function transformRelative(t) {
                if (!t) return noop;
                var o, a, i = t.scale[0], l = t.scale[1], s = t.translate[0], u = t.translate[1];
                return function (t, e) {
                    e || (o = a = 0);
                    var n = Math.round((t[0] - s) / i), r = Math.round((t[1] - u) / l);
                    t[0] = n - o, t[1] = r - a, o = n, a = r
                }
            }

            function bisect(t, e) {
                for (var n = 0, r = t.length; n < r;) {
                    var o = n + r >>> 1;
                    t[o] < e ? n = o + 1 : r = o
                }
                return n
            }

            function feature$1(t, e) {
                var n = {type: "Feature", id: e.id, properties: e.properties || {}, geometry: object(t, e)};
                return null == e.id && delete n.id, n
            }

            function object(t, e) {
                var i = transformAbsolute(t.transform), l = t.arcs;

                function arc(t, e) {
                    e.length && e.pop();
                    for (var n, r = l[t < 0 ? ~t : t], o = 0, a = r.length; o < a; ++o) e.push(n = r[o].slice()), i(n, o);
                    t < 0 && function (t, e) {
                        for (var n, r = t.length, o = r - e; o < --r;) n = t[o], t[o++] = t[r], t[r] = n
                    }(e, a)
                }

                function point(t) {
                    return t = t.slice(), i(t, 0), t
                }

                function line(t) {
                    for (var e = [], n = 0, r = t.length; n < r; ++n) arc(t[n], e);
                    return e.length < 2 && e.push(e[0].slice()), e
                }

                function ring(t) {
                    for (var e = line(t); e.length < 4;) e.push(e[0].slice());
                    return e
                }

                function polygon(t) {
                    return t.map(ring)
                }

                var n = {
                    Point: function (t) {
                        return point(t.coordinates)
                    }, MultiPoint: function (t) {
                        return t.coordinates.map(point)
                    }, LineString: function (t) {
                        return line(t.arcs)
                    }, MultiLineString: function (t) {
                        return t.arcs.map(line)
                    }, Polygon: function (t) {
                        return polygon(t.arcs)
                    }, MultiPolygon: function (t) {
                        return t.arcs.map(polygon)
                    }
                };
                return function geometry(t) {
                    var e = t.type;
                    return "GeometryCollection" === e ? {
                        type: e,
                        geometries: t.geometries.map(geometry)
                    } : e in n ? {type: e, coordinates: n[e](t)} : null
                }(e)
            }

            function stitchArcs(d, o) {
                var a = {}, _ = {}, f = {}, i = [], l = -1;

                function flush(t, e) {
                    for (var n in t) {
                        var r = t[n];
                        delete e[r.start], delete r.start, delete r.end, r.forEach(function (t) {
                            a[t < 0 ? ~t : t] = 1
                        }), i.push(r)
                    }
                }

                return o.forEach(function (t, e) {
                    var n, r = d.arcs[t < 0 ? ~t : t];
                    r.length < 3 && !r[1][0] && !r[1][1] && (n = o[++l], o[l] = t, o[e] = n)
                }), o.forEach(function (t) {
                    var e, n, r, o, a, i,
                        l = (r = t, a = d.arcs[r < 0 ? ~r : r], i = a[0], d.transform ? (o = [0, 0], a.forEach(function (t) {
                            o[0] += t[0], o[1] += t[1]
                        })) : o = a[a.length - 1], r < 0 ? [o, i] : [i, o]), s = l[0], u = l[1];
                    if (e = f[s]) if (delete f[e.end], e.push(t), e.end = u, n = _[u]) {
                        delete _[n.start];
                        var c = n === e ? e : e.concat(n);
                        _[c.start = e.start] = f[c.end = n.end] = c
                    } else _[e.start] = f[e.end] = e; else if (e = _[u]) if (delete _[e.start], e.unshift(t), e.start = s, n = f[s]) {
                        delete f[n.end];
                        var p = n === e ? e : n.concat(e);
                        _[p.start = n.start] = f[p.end = e.end] = p
                    } else _[e.start] = f[e.end] = e; else _[(e = [t]).start = s] = f[e.end = u] = e
                }), flush(f, _), flush(_, f), o.forEach(function (t) {
                    a[t < 0 ? ~t : t] || i.push([t])
                }), i
            }

            function meshArcs(t, e, n) {
                var r = [];

                function arc(t) {
                    var e = t < 0 ? ~t : t;
                    (a[e] || (a[e] = [])).push({i: t, g: o})
                }

                function line(t) {
                    t.forEach(arc)
                }

                function polygon(t) {
                    t.forEach(line)
                }

                if (1 < arguments.length) {
                    var o, a = [], i = {
                        LineString: line, MultiLineString: polygon, Polygon: polygon, MultiPolygon: function (t) {
                            t.forEach(polygon)
                        }
                    };
                    !function geometry(t) {
                        "GeometryCollection" === t.type ? t.geometries.forEach(geometry) : t.type in i && i[(o = t).type](t.arcs)
                    }(e), a.forEach(arguments.length < 3 ? function (t) {
                        r.push(t[0].i)
                    } : function (t) {
                        n(t[0].g, t[t.length - 1].g) && r.push(t[0].i)
                    })
                } else for (var l = 0, s = t.arcs.length; l < s; ++l) r.push(l);
                return {type: "MultiLineString", arcs: stitchArcs(t, r)}
            }

            function cartesianTriangleArea(t) {
                var e = t[0], n = t[1], r = t[2];
                return Math.abs((e[0] - r[0]) * (n[1] - e[1]) - (e[0] - n[0]) * (r[1] - e[1]))
            }

            function mergeArcs(l, t) {
                var s = {}, n = [], r = [];

                function register(e) {
                    e.forEach(function (t) {
                        t.forEach(function (t) {
                            (s[t = t < 0 ? ~t : t] || (s[t] = [])).push(e)
                        })
                    }), n.push(e)
                }

                function area(t) {
                    return Math.abs(function (t) {
                        for (var e, n = -1, r = t.length, o = t[r - 1], a = 0; ++n < r;) e = o, o = t[n], a += e[0] * o[1] - e[1] * o[0];
                        return a / 2
                    }(object(l, {type: "Polygon", arcs: [t]}).coordinates[0]))
                }

                return t.forEach(function (t) {
                    "Polygon" === t.type ? register(t.arcs) : "MultiPolygon" === t.type && t.arcs.forEach(register)
                }), n.forEach(function (t) {
                    if (!t._) {
                        var e = [], n = [t];
                        for (t._ = 1, r.push(e); t = n.pop();) e.push(t), t.forEach(function (t) {
                            t.forEach(function (t) {
                                s[t < 0 ? ~t : t].forEach(function (t) {
                                    t._ || (t._ = 1, n.push(t))
                                })
                            })
                        })
                    }
                }), n.forEach(function (t) {
                    delete t._
                }), {
                    type: "MultiPolygon", arcs: r.map(function (t) {
                        var e, n = [];
                        if (t.forEach(function (t) {
                            t.forEach(function (t) {
                                t.forEach(function (t) {
                                    s[t < 0 ? ~t : t].length < 2 && n.push(t)
                                })
                            })
                        }), n = stitchArcs(l, n), 1 < (e = n.length)) for (var r, o, a = 1, i = area(n[0]); a < e; ++a) (r = area(n[a])) > i && (o = n[0], n[0] = n[a], n[a] = o, i = r);
                        return n
                    })
                }
            }

            function compareArea(t, e) {
                return t[1][2] - e[1][2]
            }

            function minAreaHeap() {
                var t = {}, i = [], l = 0;

                function up(t, e) {
                    for (; 0 < e;) {
                        var n = (e + 1 >> 1) - 1, r = i[n];
                        if (0 <= compareArea(t, r)) break;
                        i[r._ = e] = r, i[t._ = e = n] = t
                    }
                }

                function down(t, e) {
                    for (; ;) {
                        var n = e + 1 << 1, r = n - 1, o = e, a = i[o];
                        if (r < l && compareArea(i[r], a) < 0 && (a = i[o = r]), n < l && compareArea(i[n], a) < 0 && (a = i[o = n]), o === e) break;
                        i[a._ = e] = a, i[t._ = e = o] = t
                    }
                }

                return t.push = function (t) {
                    return up(i[t._ = l] = t, l++), l
                }, t.pop = function () {
                    if (!(l <= 0)) {
                        var t, e = i[0];
                        return 0 < --l && (t = i[l], down(i[t._ = 0] = t, 0)), e
                    }
                }, t.remove = function (t) {
                    var e, n = t._;
                    if (i[n] === t) return n !== --l && (compareArea(e = i[l], t) < 0 ? up : down)(i[e._ = n] = e, n), n
                }, t
            }

            t.version = "1.6.27", t.mesh = function (t) {
                return object(t, meshArcs.apply(this, arguments))
            }, t.meshArcs = meshArcs, t.merge = function (t) {
                return object(t, mergeArcs.apply(this, arguments))
            }, t.mergeArcs = mergeArcs, t.feature = function (e, t) {
                return "GeometryCollection" === t.type ? {
                    type: "FeatureCollection",
                    features: t.geometries.map(function (t) {
                        return feature$1(e, t)
                    })
                } : feature$1(e, t)
            }, t.neighbors = function (t) {
                var r = {}, e = t.map(function () {
                    return []
                });

                function line(t, n) {
                    t.forEach(function (t) {
                        t < 0 && (t = ~t);
                        var e = r[t];
                        e ? e.push(n) : r[t] = [n]
                    })
                }

                function polygon(t, e) {
                    t.forEach(function (t) {
                        line(t, e)
                    })
                }

                function geometry(t, e) {
                    "GeometryCollection" === t.type ? t.geometries.forEach(function (t) {
                        geometry(t, e)
                    }) : t.type in n && n[t.type](t.arcs, e)
                }

                var n = {
                    LineString: line, MultiLineString: polygon, Polygon: polygon, MultiPolygon: function (t, e) {
                        t.forEach(function (t) {
                            polygon(t, e)
                        })
                    }
                };
                for (var o in t.forEach(geometry), r) for (var a = r[o], i = a.length, l = 0; l < i; ++l) for (var s = l + 1; s < i; ++s) {
                    var u, c = a[l], p = a[s];
                    (u = e[c])[o = bisect(u, p)] !== p && u.splice(o, 0, p), (u = e[p])[o = bisect(u, c)] !== c && u.splice(o, 0, c)
                }
                return e
            }, t.presimplify = function (t, u) {
                var c = transformAbsolute(t.transform), p = transformRelative(t.transform), d = minAreaHeap();

                function update(t) {
                    d.remove(t), t[1][2] = u(t), d.push(t)
                }

                return u || (u = cartesianTriangleArea), t.arcs.forEach(function (t) {
                    var e, n, r, o, a = [], i = 0;
                    for (n = 0, r = t.length; n < r; ++n) o = t[n], c(t[n] = [o[0], o[1], 1 / 0], n);
                    for (n = 1, r = t.length - 1; n < r; ++n) (e = t.slice(n - 1, n + 2))[1][2] = u(e), a.push(e), d.push(e);
                    for (n = 0, r = a.length; n < r; ++n) (e = a[n]).previous = a[n - 1], e.next = a[n + 1];
                    for (; e = d.pop();) {
                        var l = e.previous, s = e.next;
                        e[1][2] < i ? e[1][2] = i : i = e[1][2], l && (l.next = s, l[2] = e[2], update(l)), s && (s.previous = l, s[0] = e[0], update(s))
                    }
                    t.forEach(p)
                }), t
            }, Object.defineProperty(t, "__esModule", {value: !0})
        }(e)
    }
}, [[296, 0]]]);