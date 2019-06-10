(window.webpackJsonp = window.webpackJsonp || []).push([[5], {
    142: function (t, e, i) {
        i(0), i(0)
    }, 144: function (t, e, i) {
    }, 146: function (t, e, i) {
    }, 228: function (t, e, i) {
        "use strict";
        i.r(e);
        var s = i(0), u = i.n(s), r = i(9), c = i.n(r);
        i(160), i(161), i(162), i(163), i(164), i(165), i(166), i(167), i(168), i(169), i(170), i(229), i(171), i(231), i(142), i(144), i(232), i(234), i(146);
        u()(function () {
            var e = [{
                label: "Clicks",
                color: Colors.byName("purple-300"),
                data: [["1", 40], ["2", 50], ["3", 40], ["4", 50], ["5", 66], ["6", 66], ["7", 76], ["8", 96], ["9", 90], ["10", 105], ["11", 125], ["12", 135]]
            }, {
                label: "Unique",
                color: Colors.byName("green-400"),
                data: [["1", 30], ["2", 40], ["3", 20], ["4", 40], ["5", 80], ["6", 90], ["7", 70], ["8", 60], ["9", 90], ["10", 150], ["11", 130], ["12", 160]]
            }, {
                label: "Recurrent",
                color: Colors.byName("blue-500"),
                data: [["1", 10], ["2", 20], ["3", 10], ["4", 20], ["5", 6], ["6", 10], ["7", 32], ["8", 26], ["9", 20], ["10", 35], ["11", 30], ["12", 56]]
            }], i = {
                series: {
                    lines: {show: !1},
                    points: {show: !1, radius: 3},
                    splines: {show: !0, tension: .39, lineWidth: 5, fill: 1, fillColor: Colors.byName("primary")}
                },
                grid: {borderColor: "#eee", borderWidth: 0, hoverable: !0, backgroundColor: "transparent"},
                tooltip: !0,
                tooltipOpts: {
                    content: function (t, e, i) {
                        return e + " : " + i
                    }
                },
                xaxis: {tickColor: "transparent", mode: "categories", font: {color: Colors.byName("blueGrey-200")}},
                yaxis: {
                    show: !1,
                    min: 0,
                    max: 220,
                    tickColor: "transparent",
                    font: {color: Colors.byName("blueGrey-200")},
                    tickFormatter: function (t) {
                        return t
                    }
                },
                shadowSize: 0
            };
            u()("#flot-main-spline").each(function () {
                var t = u()(this);
                t.data("height") && t.height(t.data("height")), t.plot(e, i)
            });
            var s = [{data: [[1, 45], [2, 42], [3, 45], [4, 43], [5, 45], [6, 47], [7, 45], [8, 42], [9, 45], [10, 43]]}, {data: [[1, 35], [2, 35], [3, 17], [4, 29], [5, 10], [6, 7], [7, 35], [8, 35], [9, 17], [10, 29]]}],
                r = {
                    bars: {
                        show: !0,
                        fill: !0,
                        barWidth: .3,
                        lineWidth: 1,
                        align: "center",
                        fillColor: {colors: [{opacity: 1}, {opacity: 1}]}
                    },
                    colors: [Colors.byName("blue-100"), Colors.byName("blue-500")],
                    series: {shadowSize: 3},
                    xaxis: {show: !0, position: "bottom", ticks: 10, font: {color: Colors.byName("blueGrey-200")}},
                    yaxis: {show: !1, min: 0, max: 60, font: {color: Colors.byName("blueGrey-200")}},
                    grid: {hoverable: !0, clickable: !0, borderWidth: 0, color: "rgba(120,120,120,0.5)"},
                    tooltip: !0,
                    tooltipOpts: {content: "Value %x.0 is %y.0", defaultTheme: !1, shifts: {x: 0, y: -20}}
                };
            u()("#flot-stacked-chart").each(function () {
                var t = u()(this);
                t.data("height") && t.height(t.data("height")), t.plot(s, r)
            });
            var n = {
                series: {
                    bars: {show: !0, fill: 1, barWidth: .2, lineWidth: 0, align: "center"},
                    highlightColor: "rgba(255,255,255,0.2)"
                },
                grid: {hoverable: !0, clickable: !0, borderWidth: 0, color: "#8394a9"},
                tooltip: !0,
                tooltipOpts: {
                    content: function (t, e, i) {
                        return "Visitors for " + e + " was " + 1e3 * i
                    }
                },
                xaxis: {tickColor: "transparent", mode: "categories", font: {color: Colors.byName("blueGrey-200")}},
                yaxis: {tickColor: "transparent", font: {color: Colors.byName("blueGrey-200")}},
                legend: {show: !1},
                shadowSize: 0
            }, a = [{
                label: "New",
                bars: {order: 0, fillColor: Colors.byName("primary")},
                data: [["Jan", 20], ["Feb", 15], ["Mar", 25], ["Apr", 30], ["May", 40], ["Jun", 35]]
            }, {
                label: "Recurrent",
                bars: {order: 1, fillColor: Colors.byName("green-400")},
                data: [["Jan", 35], ["Feb", 25], ["Mar", 45], ["Apr", 25], ["May", 30], ["Jun", 15]]
            }];
            u()("#flot-bar-chart").each(function () {
                var t = u()(this);
                t.data("height") && t.height(t.data("height")), t.plot(a, n)
            });
            var o = [{
                label: "Total",
                color: Colors.byName("primary"),
                data: [["Jan", 14], ["Feb", 14], ["Mar", 12], ["Apr", 16], ["May", 13], ["Jun", 14], ["Jul", 19]]
            }], h = {
                series: {
                    lines: {show: !1},
                    points: {show: !1},
                    splines: {show: !0, tension: .4, lineWidth: 3, fill: 1}
                },
                legend: {show: !1},
                grid: {show: !1},
                tooltip: !0,
                tooltipOpts: {
                    content: function (t, e, i) {
                        return e + " : " + i
                    }
                },
                xaxis: {tickColor: "#fcfcfc", mode: "categories"},
                yaxis: {
                    min: 0, max: 30, tickColor: "#eee", tickFormatter: function (t) {
                        return t
                    }
                },
                shadowSize: 0
            };
            u()("#flot-task-chart").each(function () {
                var t = u()(this);
                t.data("height") && t.height(t.data("height")), t.plot(o, h)
            });
            var t = {
                lineWidth: 6,
                trackColor: "transparent",
                barColor: Colors.byName("primary"),
                scaleColor: !1,
                size: 90,
                lineCap: "round",
                animate: {duration: 3e3, enabled: !0}
            }, l = document.querySelector("#dashboard-easypiechartTask");
            new c.a(l, t);
            var p = {
                map: "us_mill_en",
                normalizeFunction: "polynomial",
                backgroundColor: "#fff",
                regionsSelectable: !1,
                markersSelectable: !1,
                zoomButtons: !1,
                zoomOnScroll: !1,
                markers: [{latLng: [40.71, -74], name: "New York"}, {
                    latLng: [34.05, -118.24],
                    name: "Los Angeles"
                }, {
                    latLng: [41.87, -87.62],
                    name: "Chicago",
                    style: {fill: Colors.byName("pink-500"), r: 15}
                }, {
                    latLng: [29.76, -95.36],
                    name: "Houston",
                    style: {fill: Colors.byName("purple-500"), r: 10}
                }, {latLng: [39.95, -75.16], name: "Philadelphia"}, {
                    latLng: [38.9, -77.03],
                    name: "Washington"
                }, {
                    latLng: [37.36, -122.03],
                    name: "Silicon Valley",
                    style: {fill: Colors.byName("green-500"), r: 20}
                }],
                regionStyle: {
                    initial: {fill: Colors.byName("blueGrey-200")},
                    hover: {fill: Colors.byName("gray-light"), stroke: "#fff"}
                },
                markerStyle: {
                    initial: {fill: Colors.byName("blue-500"), stroke: "#fff", r: 10},
                    hover: {fill: Colors.byName("orange-500"), stroke: "#fff"}
                }
            };
            u()("#vector-map").vectorMap(p), u()("#dashboard-datepicker").datepicker();
            var g = {
                type: "line",
                height: 20,
                width: "70",
                lineWidth: 2,
                valueSpots: {"0:": Colors.byName("blue-700")},
                lineColor: Colors.byName("blue-700"),
                spotColor: Colors.byName("blue-700"),
                fillColor: "transparent",
                highlightLineColor: Colors.byName("blue-700"),
                spotRadius: 0
            };

            function initSparkline(t, e, i) {
                t.sparkline(e, u.a.extend(g, t.data()))
            }

            initSparkline(u()("#sparkline1"), [4, 4, 3, 5, 3, 4, 6, 5, 3, 2, 3, 4, 6], g), initSparkline(u()("#sparkline2"), [2, 3, 4, 6, 5, 4, 3, 5, 4, 3, 4, 3, 4, 5], g), initSparkline(u()("#sparkline3"), [4, 4, 3, 5, 3, 4, 6, 5, 3, 2, 3, 4, 6], g), initSparkline(u()("#sparkline4"), [6, 5, 4, 3, 5, 4, 3, 4, 3, 4, 3, 2, 2], g)
        })
    }, 229: function (t, e, i) {
    }, 231: function (t, e, i) {
        var s, r, n, R, V, X;
        R = document, V = Math, r = [i(0)], (n = "function" == typeof (s = function (N) {
            "use strict";
            var t, e, v, j, C, A, F, B, p, w, i, n, g, O, u, s, r, I, z, o, a, h, l, b, c, d, f, m, y, x = {}, S = 0;
            t = function () {
                return {
                    common: {
                        type: "line",
                        lineColor: "#00f",
                        fillColor: "#cdf",
                        defaultPixelsPerValue: 3,
                        width: "auto",
                        height: "auto",
                        composite: !1,
                        tagValuesAttribute: "values",
                        tagOptionsPrefix: "spark",
                        enableTagOptions: !1,
                        enableHighlight: !0,
                        highlightLighten: 1.4,
                        tooltipSkipNull: !0,
                        tooltipPrefix: "",
                        tooltipSuffix: "",
                        disableHiddenCheck: !1,
                        numberFormatter: !1,
                        numberDigitGroupCount: 3,
                        numberDigitGroupSep: ",",
                        numberDecimalMark: ".",
                        disableTooltips: !1,
                        disableInteraction: !1
                    },
                    line: {
                        spotColor: "#f80",
                        highlightSpotColor: "#5f5",
                        highlightLineColor: "#f22",
                        spotRadius: 1.5,
                        minSpotColor: "#f80",
                        maxSpotColor: "#f80",
                        lineWidth: 1,
                        normalRangeMin: X,
                        normalRangeMax: X,
                        normalRangeColor: "#ccc",
                        drawNormalOnTop: !1,
                        chartRangeMin: X,
                        chartRangeMax: X,
                        chartRangeMinX: X,
                        chartRangeMaxX: X,
                        tooltipFormat: new v('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')
                    },
                    bar: {
                        barColor: "#3366cc",
                        negBarColor: "#f44",
                        stackedBarColor: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"],
                        zeroColor: X,
                        nullColor: X,
                        zeroAxis: !0,
                        barWidth: 4,
                        barSpacing: 1,
                        chartRangeMax: X,
                        chartRangeMin: X,
                        chartRangeClip: !1,
                        colorMap: X,
                        tooltipFormat: new v('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')
                    },
                    tristate: {
                        barWidth: 4,
                        barSpacing: 1,
                        posBarColor: "#6f6",
                        negBarColor: "#f44",
                        zeroBarColor: "#999",
                        colorMap: {},
                        tooltipFormat: new v('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),
                        tooltipValueLookups: {map: {"-1": "Loss", 0: "Draw", 1: "Win"}}
                    },
                    discrete: {
                        lineHeight: "auto",
                        thresholdColor: X,
                        thresholdValue: 0,
                        chartRangeMax: X,
                        chartRangeMin: X,
                        chartRangeClip: !1,
                        tooltipFormat: new v("{{prefix}}{{value}}{{suffix}}")
                    },
                    bullet: {
                        targetColor: "#f33",
                        targetWidth: 3,
                        performanceColor: "#33f",
                        rangeColors: ["#d3dafe", "#a8b6ff", "#7f94ff"],
                        base: X,
                        tooltipFormat: new v("{{fieldkey:fields}} - {{value}}"),
                        tooltipValueLookups: {fields: {r: "Range", p: "Performance", t: "Target"}}
                    },
                    pie: {
                        offset: 0,
                        sliceColors: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"],
                        borderWidth: 0,
                        borderColor: "#000",
                        tooltipFormat: new v('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')
                    },
                    box: {
                        raw: !1,
                        boxLineColor: "#000",
                        boxFillColor: "#cdf",
                        whiskerColor: "#000",
                        outlierLineColor: "#333",
                        outlierFillColor: "#fff",
                        medianColor: "#f00",
                        showOutliers: !0,
                        outlierIQR: 1.5,
                        spotRadius: 1.5,
                        target: X,
                        targetColor: "#4a2",
                        chartRangeMax: X,
                        chartRangeMin: X,
                        tooltipFormat: new v("{{field:fields}}: {{value}}"),
                        tooltipFormatFieldlistKey: "field",
                        tooltipValueLookups: {
                            fields: {
                                lq: "Lower Quartile",
                                med: "Median",
                                uq: "Upper Quartile",
                                lo: "Left Outlier",
                                ro: "Right Outlier",
                                lw: "Left Whisker",
                                rw: "Right Whisker"
                            }
                        }
                    }
                }
            }, e = function () {
                var t, e;
                return t = function () {
                    this.init.apply(this, arguments)
                }, 1 < arguments.length ? (arguments[0] ? (t.prototype = N.extend(new arguments[0], arguments[arguments.length - 1]), t._super = arguments[0].prototype) : t.prototype = arguments[arguments.length - 1], 2 < arguments.length && ((e = Array.prototype.slice.call(arguments, 1, -1)).unshift(t.prototype), N.extend.apply(N, e))) : t.prototype = arguments[0], t.prototype.cls = t
            }, N.SPFormatClass = v = e({
                fre: /\{\{([\w.]+?)(:(.+?))?\}\}/g,
                precre: /(\w+)\.(\d+)/,
                init: function (t, e) {
                    this.format = t, this.fclass = e
                },
                render: function (t, e, i) {
                    var s, r, n, a, o, h = this, l = t;
                    return this.format.replace(this.fre, function () {
                        return r = arguments[1], n = arguments[3], (s = h.precre.exec(r)) ? (o = s[2], r = s[1]) : o = !1, (a = l[r]) === X ? "" : n && e && e[n] ? e[n].get ? e[n].get(a) || a : e[n][a] || a : (p(a) && (a = i.get("numberFormatter") ? i.get("numberFormatter")(a) : g(a, o, i.get("numberDigitGroupCount"), i.get("numberDigitGroupSep"), i.get("numberDecimalMark"))), a)
                    })
                }
            }), N.spformat = function (t, e) {
                return new v(t, e)
            }, j = function (t, e, i) {
                return t < e ? e : i < t ? i : t
            }, C = function (t, e) {
                var i;
                return 2 === e ? (i = V.floor(t.length / 2), t.length % 2 ? t[i] : (t[i - 1] + t[i]) / 2) : t.length % 2 ? (i = (t.length * e + e) / 4) % 1 ? (t[V.floor(i)] + t[V.floor(i) - 1]) / 2 : t[i - 1] : (i = (t.length * e + 2) / 4) % 1 ? (t[V.floor(i)] + t[V.floor(i) - 1]) / 2 : t[i - 1]
            }, A = function (t) {
                var e;
                switch (t) {
                    case"undefined":
                        t = X;
                        break;
                    case"null":
                        t = null;
                        break;
                    case"true":
                        t = !0;
                        break;
                    case"false":
                        t = !1;
                        break;
                    default:
                        e = parseFloat(t), t == e && (t = e)
                }
                return t
            }, F = function (t) {
                var e, i = [];
                for (e = t.length; e--;) i[e] = A(t[e]);
                return i
            }, B = function (t, e) {
                var i, s, r = [];
                for (i = 0, s = t.length; i < s; i++) t[i] !== e && r.push(t[i]);
                return r
            }, p = function (t) {
                return !isNaN(parseFloat(t)) && isFinite(t)
            }, g = function (t, e, i, s, r) {
                var n, a;
                for (t = (!1 === e ? parseFloat(t).toString() : t.toFixed(e)).split(""), (n = (n = N.inArray(".", t)) < 0 ? t.length : n) < t.length && (t[n] = r), a = n - i; 0 < a; a -= i) t.splice(a, 0, s);
                return t.join("")
            }, w = function (t, e, i) {
                var s;
                for (s = e.length; s--;) if ((!i || null !== e[s]) && e[s] !== t) return !1;
                return !0
            }, n = function (t) {
                return N.isArray(t) ? t : [t]
            }, i = function (t) {
                var e, i;
                if (R.createStyleSheet) try {
                    return void (R.createStyleSheet().cssText = t)
                } catch (t) {
                    i = !0
                }
                (e = R.createElement("style")).type = "text/css", R.getElementsByTagName("head")[0].appendChild(e), i ? R.styleSheets[R.styleSheets.length - 1].cssText = t : e["string" == typeof R.body.style.WebkitAppearance ? "innerText" : "innerHTML"] = t
            }, N.fn.simpledraw = function (t, e, i, s) {
                var r, n;
                if (i && (r = this.data("_jqs_vcanvas"))) return r;
                if (!1 === N.fn.sparkline.canvas) return !1;
                if (N.fn.sparkline.canvas === X) {
                    var a = R.createElement("canvas");
                    if (a.getContext && a.getContext("2d")) N.fn.sparkline.canvas = function (t, e, i, s) {
                        return new f(t, e, i, s)
                    }; else {
                        if (!R.namespaces || R.namespaces.v) return N.fn.sparkline.canvas = !1;
                        R.namespaces.add("v", "urn:schemas-microsoft-com:vml", "#default#VML"), N.fn.sparkline.canvas = function (t, e, i, s) {
                            return new m(t, e, i)
                        }
                    }
                }
                return t === X && (t = N(this).innerWidth()), e === X && (e = N(this).innerHeight()), r = N.fn.sparkline.canvas(t, e, this, s), (n = N(this).data("_jqs_mhandler")) && n.registerCanvas(r), r
            }, N.fn.cleardraw = function () {
                var t = this.data("_jqs_vcanvas");
                t && t.reset()
            }, N.RangeMapClass = O = e({
                init: function (t) {
                    var e, i, s = [];
                    for (e in t) t.hasOwnProperty(e) && "string" == typeof e && -1 < e.indexOf(":") && ((i = e.split(":"))[0] = 0 === i[0].length ? -1 / 0 : parseFloat(i[0]), i[1] = 0 === i[1].length ? 1 / 0 : parseFloat(i[1]), i[2] = t[e], s.push(i));
                    this.map = t, this.rangelist = s || !1
                }, get: function (t) {
                    var e, i, s, r = this.rangelist;
                    if ((s = this.map[t]) !== X) return s;
                    if (r) for (e = r.length; e--;) if ((i = r[e])[0] <= t && i[1] >= t) return i[2];
                    return X
                }
            }), N.range_map = function (t) {
                return new O(t)
            }, u = e({
                init: function (t, e) {
                    var i = N(t);
                    this.$el = i, this.options = e, this.currentPageX = 0, this.currentPageY = 0, this.el = t, this.splist = [], this.tooltip = null, this.over = !1, this.displayTooltips = !e.get("disableTooltips"), this.highlightEnabled = !e.get("disableHighlight")
                }, registerSparkline: function (t) {
                    this.splist.push(t), this.over && this.updateDisplay()
                }, registerCanvas: function (t) {
                    var e = N(t.canvas);
                    this.canvas = t, (this.$canvas = e).mouseenter(N.proxy(this.mouseenter, this)), e.mouseleave(N.proxy(this.mouseleave, this)), e.click(N.proxy(this.mouseclick, this))
                }, reset: function (t) {
                    this.splist = [], this.tooltip && t && (this.tooltip.remove(), this.tooltip = X)
                }, mouseclick: function (t) {
                    var e = N.Event("sparklineClick");
                    e.originalEvent = t, e.sparklines = this.splist, this.$el.trigger(e)
                }, mouseenter: function (t) {
                    N(R.body).unbind("mousemove.jqs"), N(R.body).bind("mousemove.jqs", N.proxy(this.mousemove, this)), this.over = !0, this.currentPageX = t.pageX, this.currentPageY = t.pageY, this.currentEl = t.target, !this.tooltip && this.displayTooltips && (this.tooltip = new s(this.options), this.tooltip.updatePosition(t.pageX, t.pageY)), this.updateDisplay()
                }, mouseleave: function () {
                    N(R.body).unbind("mousemove.jqs");
                    var t, e = this.splist, i = e.length, s = !1;
                    for (this.over = !1, this.currentEl = null, this.tooltip && (this.tooltip.remove(), this.tooltip = null), t = 0; t < i; t++) e[t].clearRegionHighlight() && (s = !0);
                    s && this.canvas.render()
                }, mousemove: function (t) {
                    this.currentPageX = t.pageX, this.currentPageY = t.pageY, this.currentEl = t.target, this.tooltip && this.tooltip.updatePosition(t.pageX, t.pageY), this.updateDisplay()
                }, updateDisplay: function () {
                    var t, e, i, s, r, n = this.splist, a = n.length, o = !1, h = this.$canvas.offset(),
                        l = this.currentPageX - h.left, p = this.currentPageY - h.top;
                    if (this.over) {
                        for (i = 0; i < a; i++) e = n[i], (s = e.setRegionHighlight(this.currentEl, l, p)) && (o = !0);
                        if (o) {
                            if ((r = N.Event("sparklineRegionChange")).sparklines = this.splist, this.$el.trigger(r), this.tooltip) {
                                for (t = "", i = 0; i < a; i++) e = n[i], t += e.getCurrentRegionTooltip();
                                this.tooltip.setContent(t)
                            }
                            this.disableHighlight || this.canvas.render()
                        }
                        null === s && this.mouseleave()
                    }
                }
            }), s = e({
                sizeStyle: "position: static !important;display: block !important;visibility: hidden !important;float: left !important;",
                init: function (t) {
                    var e, i = t.get("tooltipClassname", "jqstooltip"), s = this.sizeStyle;
                    this.container = t.get("tooltipContainer") || R.body, this.tooltipOffsetX = t.get("tooltipOffsetX", 10), this.tooltipOffsetY = t.get("tooltipOffsetY", 12), N("#jqssizetip").remove(), N("#jqstooltip").remove(), this.sizetip = N("<div/>", {
                        id: "jqssizetip",
                        style: s,
                        class: i
                    }), this.tooltip = N("<div/>", {
                        id: "jqstooltip",
                        class: i
                    }).appendTo(this.container), e = this.tooltip.offset(), this.offsetLeft = e.left, this.offsetTop = e.top, this.hidden = !0, N(window).unbind("resize.jqs scroll.jqs"), N(window).bind("resize.jqs scroll.jqs", N.proxy(this.updateWindowDims, this)), this.updateWindowDims()
                },
                updateWindowDims: function () {
                    this.scrollTop = N(window).scrollTop(), this.scrollLeft = N(window).scrollLeft(), this.scrollRight = this.scrollLeft + N(window).width(), this.updatePosition()
                },
                getSize: function (t) {
                    this.sizetip.html(t).appendTo(this.container), this.width = this.sizetip.width() + 1, this.height = this.sizetip.height(), this.sizetip.remove()
                },
                setContent: function (t) {
                    if (!t) return this.tooltip.css("visibility", "hidden"), void (this.hidden = !0);
                    this.getSize(t), this.tooltip.html(t).css({
                        width: this.width,
                        height: this.height,
                        visibility: "visible"
                    }), this.hidden && (this.hidden = !1, this.updatePosition())
                },
                updatePosition: function (t, e) {
                    if (t === X) {
                        if (this.mousex === X) return;
                        t = this.mousex - this.offsetLeft, e = this.mousey - this.offsetTop
                    } else this.mousex = t -= this.offsetLeft, this.mousey = e -= this.offsetTop;
                    this.height && this.width && !this.hidden && (e -= this.height + this.tooltipOffsetY, t += this.tooltipOffsetX, e < this.scrollTop && (e = this.scrollTop), t < this.scrollLeft ? t = this.scrollLeft : t + this.width > this.scrollRight && (t = this.scrollRight - this.width), this.tooltip.css({
                        left: t,
                        top: e
                    }))
                },
                remove: function () {
                    this.tooltip.remove(), this.sizetip.remove(), this.sizetip = this.tooltip = X, N(window).unbind("resize.jqs scroll.jqs")
                }
            }), N(function () {
                i('.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;box-sizing: content-box;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}')
            }), y = [], N.fn.sparkline = function (l, i) {
                return this.each(function () {
                    var t, e, o = new N.fn.sparkline.options(this, i), h = N(this);
                    if (t = function () {
                        var t, e, i, s, r, n, a;
                        t = "html" === l || l === X ? ((a = this.getAttribute(o.get("tagValuesAttribute"))) !== X && null !== a || (a = h.html()), a.replace(/(^\s*<!--)|(-->\s*$)|\s+/g, "").split(",")) : l, e = "auto" === o.get("width") ? t.length * o.get("defaultPixelsPerValue") : o.get("width"), "auto" === o.get("height") ? o.get("composite") && N.data(this, "_jqs_vcanvas") || ((s = R.createElement("span")).innerHTML = "a", h.html(s), i = N(s).innerHeight() || N(s).height(), N(s).remove(), s = null) : i = o.get("height"), o.get("disableInteraction") ? r = !1 : (r = N.data(this, "_jqs_mhandler")) ? o.get("composite") || r.reset() : (r = new u(this, o), N.data(this, "_jqs_mhandler", r)), !o.get("composite") || N.data(this, "_jqs_vcanvas") ? ((n = new (N.fn.sparkline[o.get("type")])(this, t, o, e, i)).render(), r && r.registerSparkline(n)) : N.data(this, "_jqs_errnotify") || (alert("Attempted to attach a composite sparkline to an element with no existing sparkline"), N.data(this, "_jqs_errnotify", !0))
                    }, N(this).html() && !o.get("disableHiddenCheck") && N(this).is(":hidden") || !N(this).parents("body").length) {
                        if (!o.get("composite") && N.data(this, "_jqs_pending")) for (e = y.length; e; e--) y[e - 1][0] == this && y.splice(e - 1, 1);
                        y.push([this, t]), N.data(this, "_jqs_pending", !0)
                    } else t.call(this)
                })
            }, N.fn.sparkline.defaults = t(), N.sparkline_display_visible = function () {
                var t, e, i, s = [];
                for (e = 0, i = y.length; e < i; e++) t = y[e][0], N(t).is(":visible") && !N(t).parents().is(":hidden") ? (y[e][1].call(t), N.data(y[e][0], "_jqs_pending", !1), s.push(e)) : N(t).closest("html").length || N.data(t, "_jqs_pending") || (N.data(y[e][0], "_jqs_pending", !1), s.push(e));
                for (e = s.length; e; e--) y.splice(s[e - 1], 1)
            }, N.fn.sparkline.options = e({
                init: function (t, e) {
                    var i, s, r, n;
                    this.userOptions = e = e || {}, this.tag = t, this.tagValCache = {}, s = N.fn.sparkline.defaults, r = s.common, this.tagOptionsPrefix = e.enableTagOptions && (e.tagOptionsPrefix || r.tagOptionsPrefix), n = this.getTagSetting("type"), i = n === x ? s[e.type || r.type] : s[n], this.mergedOptions = N.extend({}, r, i, e)
                }, getTagSetting: function (t) {
                    var e, i, s, r, n = this.tagOptionsPrefix;
                    if (!1 === n || n === X) return x;
                    if (this.tagValCache.hasOwnProperty(t)) e = this.tagValCache.key; else {
                        if ((e = this.tag.getAttribute(n + t)) === X || null === e) e = x; else if ("[" === e.substr(0, 1)) for (e = e.substr(1, e.length - 2).split(","), i = e.length; i--;) e[i] = A(e[i].replace(/(^\s*)|(\s*$)/g, "")); else if ("{" === e.substr(0, 1)) for (s = e.substr(1, e.length - 2).split(","), e = {}, i = s.length; i--;) r = s[i].split(":", 2), e[r[0].replace(/(^\s*)|(\s*$)/g, "")] = A(r[1].replace(/(^\s*)|(\s*$)/g, "")); else e = A(e);
                        this.tagValCache.key = e
                    }
                    return e
                }, get: function (t, e) {
                    var i, s = this.getTagSetting(t);
                    return s !== x ? s : (i = this.mergedOptions[t]) === X ? e : i
                }
            }), N.fn.sparkline._base = e({
                disabled: !1, init: function (t, e, i, s, r) {
                    this.el = t, this.$el = N(t), this.values = e, this.options = i, this.width = s, this.height = r, this.currentRegion = X
                }, initTarget: function () {
                    var t = !this.options.get("disableInteraction");
                    (this.target = this.$el.simpledraw(this.width, this.height, this.options.get("composite"), t)) ? (this.canvasWidth = this.target.pixelWidth, this.canvasHeight = this.target.pixelHeight) : this.disabled = !0
                }, render: function () {
                    return !this.disabled || (this.el.innerHTML = "", !1)
                }, getRegion: function (t, e) {
                }, setRegionHighlight: function (t, e, i) {
                    var s, r = this.currentRegion, n = !this.options.get("disableHighlight");
                    return e > this.canvasWidth || i > this.canvasHeight || e < 0 || i < 0 ? null : (s = this.getRegion(t, e, i), r !== s && (r !== X && n && this.removeHighlight(), (this.currentRegion = s) !== X && n && this.renderHighlight(), !0))
                }, clearRegionHighlight: function () {
                    return this.currentRegion !== X && (this.removeHighlight(), !(this.currentRegion = X))
                }, renderHighlight: function () {
                    this.changeHighlight(!0)
                }, removeHighlight: function () {
                    this.changeHighlight(!1)
                }, changeHighlight: function (t) {
                }, getCurrentRegionTooltip: function () {
                    var t, e, i, s, r, n, a, o, h, l, p, g, u, c, d = this.options, f = "", m = [];
                    if (this.currentRegion === X) return "";
                    if (t = this.getCurrentRegionFields(), p = d.get("tooltipFormatter")) return p(this, d, t);
                    if (d.get("tooltipChartTitle") && (f += '<div class="jqs jqstitle">' + d.get("tooltipChartTitle") + "</div>\n"), !(e = this.options.get("tooltipFormat"))) return "";
                    if (N.isArray(e) || (e = [e]), N.isArray(t) || (t = [t]), a = this.options.get("tooltipFormatFieldlist"), o = this.options.get("tooltipFormatFieldlistKey"), a && o) {
                        for (h = [], n = t.length; n--;) l = t[n][o], -1 != (c = N.inArray(l, a)) && (h[c] = t[n]);
                        t = h
                    }
                    for (i = e.length, u = t.length, n = 0; n < i; n++) for ("string" == typeof (g = e[n]) && (g = new v(g)), s = g.fclass || "jqsfield", c = 0; c < u; c++) t[c].isNull && d.get("tooltipSkipNull") || (N.extend(t[c], {
                        prefix: d.get("tooltipPrefix"),
                        suffix: d.get("tooltipSuffix")
                    }), r = g.render(t[c], d.get("tooltipValueLookups"), d), m.push('<div class="' + s + '">' + r + "</div>"));
                    return m.length ? f + m.join("\n") : ""
                }, getCurrentRegionFields: function () {
                }, calcHighlightColor: function (t, e) {
                    var i, s, r, n, a = e.get("highlightColor"), o = e.get("highlightLighten");
                    if (a) return a;
                    if (o && (i = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(t) || /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(t))) {
                        for (r = [], s = 4 === t.length ? 16 : 1, n = 0; n < 3; n++) r[n] = j(V.round(parseInt(i[n + 1], 16) * s * o), 0, 255);
                        return "rgb(" + r.join(",") + ")"
                    }
                    return t
                }
            }), r = {
                changeHighlight: function (t) {
                    var e, i = this.currentRegion, s = this.target, r = this.regionShapes[i];
                    r && (e = this.renderRegion(i, t), N.isArray(e) || N.isArray(r) ? (s.replaceWithShapes(r, e), this.regionShapes[i] = N.map(e, function (t) {
                        return t.id
                    })) : (s.replaceWithShape(r, e), this.regionShapes[i] = e.id))
                }, render: function () {
                    var t, e, i, s, r = this.values, n = this.target, a = this.regionShapes;
                    if (this.cls._super.render.call(this)) {
                        for (i = r.length; i--;) if (t = this.renderRegion(i)) if (N.isArray(t)) {
                            for (e = [], s = t.length; s--;) t[s].append(), e.push(t[s].id);
                            a[i] = e
                        } else t.append(), a[i] = t.id; else a[i] = null;
                        n.render()
                    }
                }
            }, N.fn.sparkline.line = I = e(N.fn.sparkline._base, {
                type: "line", init: function (t, e, i, s, r) {
                    I._super.init.call(this, t, e, i, s, r), this.vertices = [], this.regionMap = [], this.xvalues = [], this.yvalues = [], this.yminmax = [], this.hightlightSpotId = null, this.lastShapeId = null, this.initTarget()
                }, getRegion: function (t, e, i) {
                    var s, r = this.regionMap;
                    for (s = r.length; s--;) if (null !== r[s] && e >= r[s][0] && e <= r[s][1]) return r[s][2];
                    return X
                }, getCurrentRegionFields: function () {
                    var t = this.currentRegion;
                    return {
                        isNull: null === this.yvalues[t],
                        x: this.xvalues[t],
                        y: this.yvalues[t],
                        color: this.options.get("lineColor"),
                        fillColor: this.options.get("fillColor"),
                        offset: t
                    }
                }, renderHighlight: function () {
                    var t, e, i = this.currentRegion, s = this.target, r = this.vertices[i], n = this.options,
                        a = n.get("spotRadius"), o = n.get("highlightSpotColor"), h = n.get("highlightLineColor");
                    r && (a && o && (t = s.drawCircle(r[0], r[1], a, X, o), this.highlightSpotId = t.id, s.insertAfterShape(this.lastShapeId, t)), h && (e = s.drawLine(r[0], this.canvasTop, r[0], this.canvasTop + this.canvasHeight, h), this.highlightLineId = e.id, s.insertAfterShape(this.lastShapeId, e)))
                }, removeHighlight: function () {
                    var t = this.target;
                    this.highlightSpotId && (t.removeShapeId(this.highlightSpotId), this.highlightSpotId = null), this.highlightLineId && (t.removeShapeId(this.highlightLineId), this.highlightLineId = null)
                }, scanValues: function () {
                    var t, e, i, s, r, n = this.values, a = n.length, o = this.xvalues, h = this.yvalues,
                        l = this.yminmax;
                    for (t = 0; t < a; t++) e = n[t], i = "string" == typeof n[t], s = "object" == typeof n[t] && n[t] instanceof Array, r = i && n[t].split(":"), i && 2 === r.length ? (o.push(Number(r[0])), h.push(Number(r[1])), l.push(Number(r[1]))) : s ? (o.push(e[0]), h.push(e[1]), l.push(e[1])) : (o.push(t), null === n[t] || "null" === n[t] ? h.push(null) : (h.push(Number(e)), l.push(Number(e))));
                    this.options.get("xvalues") && (o = this.options.get("xvalues")), this.maxy = this.maxyorg = V.max.apply(V, l), this.miny = this.minyorg = V.min.apply(V, l), this.maxx = V.max.apply(V, o), this.minx = V.min.apply(V, o), this.xvalues = o, this.yvalues = h, this.yminmax = l
                }, processRangeOptions: function () {
                    var t = this.options, e = t.get("normalRangeMin"), i = t.get("normalRangeMax");
                    e !== X && (e < this.miny && (this.miny = e), i > this.maxy && (this.maxy = i)), t.get("chartRangeMin") !== X && (t.get("chartRangeClip") || t.get("chartRangeMin") < this.miny) && (this.miny = t.get("chartRangeMin")), t.get("chartRangeMax") !== X && (t.get("chartRangeClip") || t.get("chartRangeMax") > this.maxy) && (this.maxy = t.get("chartRangeMax")), t.get("chartRangeMinX") !== X && (t.get("chartRangeClipX") || t.get("chartRangeMinX") < this.minx) && (this.minx = t.get("chartRangeMinX")), t.get("chartRangeMaxX") !== X && (t.get("chartRangeClipX") || t.get("chartRangeMaxX") > this.maxx) && (this.maxx = t.get("chartRangeMaxX"))
                }, drawNormalRange: function (t, e, i, s, r) {
                    var n = this.options.get("normalRangeMin"), a = this.options.get("normalRangeMax"),
                        o = e + V.round(i - i * ((a - this.miny) / r)), h = V.round(i * (a - n) / r);
                    this.target.drawRect(t, o, s, h, X, this.options.get("normalRangeColor")).append()
                }, render: function () {
                    var t, e, i, s, r, n, a, o, h, l, p, g, u, c, d, f, m, v, y, x, C, b, w, S, R, k = this.options,
                        M = this.target, _ = this.canvasWidth, H = this.canvasHeight, W = this.vertices,
                        T = k.get("spotRadius"), q = this.regionMap;
                    if (I._super.render.call(this) && (this.scanValues(), this.processRangeOptions(), w = this.xvalues, S = this.yvalues, this.yminmax.length && !(this.yvalues.length < 2))) {
                        for (s = r = 0, t = this.maxx - this.minx == 0 ? 1 : this.maxx - this.minx, e = this.maxy - this.miny == 0 ? 1 : this.maxy - this.miny, i = this.yvalues.length - 1, T && (_ < 4 * T || H < 4 * T) && (T = 0), T && (((C = k.get("highlightSpotColor") && !k.get("disableInteraction")) || k.get("minSpotColor") || k.get("spotColor") && S[i] === this.miny) && (H -= V.ceil(T)), (C || k.get("maxSpotColor") || k.get("spotColor") && S[i] === this.maxy) && (H -= V.ceil(T), s += V.ceil(T)), (C || (k.get("minSpotColor") || k.get("maxSpotColor")) && (S[0] === this.miny || S[0] === this.maxy)) && (r += V.ceil(T), _ -= V.ceil(T)), (C || k.get("spotColor") || k.get("minSpotColor") || k.get("maxSpotColor") && (S[i] === this.miny || S[i] === this.maxy)) && (_ -= V.ceil(T))), H--, k.get("normalRangeMin") === X || k.get("drawNormalOnTop") || this.drawNormalRange(r, s, H, _, e), o = [a = []], c = d = null, f = S.length, R = 0; R < f; R++) h = w[R], p = w[R + 1], l = S[R], g = r + V.round((h - this.minx) * (_ / t)), u = R < f - 1 ? r + V.round((p - this.minx) * (_ / t)) : _, d = g + (u - g) / 2, q[R] = [c || 0, d, R], c = d, null === l ? R && (null !== S[R - 1] && (a = [], o.push(a)), W.push(null)) : (l < this.miny && (l = this.miny), l > this.maxy && (l = this.maxy), a.length || a.push([g, s + H]), n = [g, s + V.round(H - H * ((l - this.miny) / e))], a.push(n), W.push(n));
                        for (m = [], v = [], y = o.length, R = 0; R < y; R++) (a = o[R]).length && (k.get("fillColor") && (a.push([a[a.length - 1][0], s + H]), v.push(a.slice(0)), a.pop()), 2 < a.length && (a[0] = [a[0][0], a[1][1]]), m.push(a));
                        for (y = v.length, R = 0; R < y; R++) M.drawShape(v[R], k.get("fillColor"), k.get("fillColor")).append();
                        for (k.get("normalRangeMin") !== X && k.get("drawNormalOnTop") && this.drawNormalRange(r, s, H, _, e), y = m.length, R = 0; R < y; R++) M.drawShape(m[R], k.get("lineColor"), X, k.get("lineWidth")).append();
                        if (T && k.get("valueSpots")) for ((x = k.get("valueSpots")).get === X && (x = new O(x)), R = 0; R < f; R++) (b = x.get(S[R])) && M.drawCircle(r + V.round((w[R] - this.minx) * (_ / t)), s + V.round(H - H * ((S[R] - this.miny) / e)), T, X, b).append();
                        T && k.get("spotColor") && null !== S[i] && M.drawCircle(r + V.round((w[w.length - 1] - this.minx) * (_ / t)), s + V.round(H - H * ((S[i] - this.miny) / e)), T, X, k.get("spotColor")).append(), this.maxy !== this.minyorg && (T && k.get("minSpotColor") && (h = w[N.inArray(this.minyorg, S)], M.drawCircle(r + V.round((h - this.minx) * (_ / t)), s + V.round(H - H * ((this.minyorg - this.miny) / e)), T, X, k.get("minSpotColor")).append()), T && k.get("maxSpotColor") && (h = w[N.inArray(this.maxyorg, S)], M.drawCircle(r + V.round((h - this.minx) * (_ / t)), s + V.round(H - H * ((this.maxyorg - this.miny) / e)), T, X, k.get("maxSpotColor")).append())), this.lastShapeId = M.getLastShapeId(), this.canvasTop = s, M.render()
                    }
                }
            }), N.fn.sparkline.bar = z = e(N.fn.sparkline._base, r, {
                type: "bar", init: function (t, e, i, s, r) {
                    var n, a, o, h, l, p, g, u, c, d, f, m, v, y, x, C, b, w, S, R, k,
                        M = parseInt(i.get("barWidth"), 10), _ = parseInt(i.get("barSpacing"), 10),
                        H = i.get("chartRangeMin"), W = i.get("chartRangeMax"), T = i.get("chartRangeClip"), q = 1 / 0,
                        I = -1 / 0;
                    for (z._super.init.call(this, t, e, i, s, r), p = 0, g = e.length; p < g; p++) R = e[p], ((n = "string" == typeof R && -1 < R.indexOf(":")) || N.isArray(R)) && (x = !0, n && (R = e[p] = F(R.split(":"))), R = B(R, null), a = V.min.apply(V, R), o = V.max.apply(V, R), a < q && (q = a), I < o && (I = o));
                    this.stacked = x, this.regionShapes = {}, this.barWidth = M, this.barSpacing = _, this.totalBarWidth = M + _, this.width = s = e.length * M + (e.length - 1) * _, this.initTarget(), T && (v = H === X ? -1 / 0 : H, y = W === X ? 1 / 0 : W), l = [], h = x ? [] : l;
                    var L = [], P = [];
                    for (p = 0, g = e.length; p < g; p++) if (x) for (C = e[p], e[p] = S = [], L[p] = 0, h[p] = P[p] = 0, b = 0, w = C.length; b < w; b++) null !== (R = S[b] = T ? j(C[b], v, y) : C[b]) && (0 < R && (L[p] += R), q < 0 && 0 < I ? R < 0 ? P[p] += V.abs(R) : h[p] += R : h[p] += V.abs(R - (R < 0 ? I : q)), l.push(R)); else R = T ? j(e[p], v, y) : e[p], null !== (R = e[p] = A(R)) && l.push(R);
                    this.max = m = V.max.apply(V, l), this.min = f = V.min.apply(V, l), this.stackMax = I = x ? V.max.apply(V, L) : m, this.stackMin = q = x ? V.min.apply(V, l) : f, i.get("chartRangeMin") !== X && (i.get("chartRangeClip") || i.get("chartRangeMin") < f) && (f = i.get("chartRangeMin")), i.get("chartRangeMax") !== X && (i.get("chartRangeClip") || i.get("chartRangeMax") > m) && (m = i.get("chartRangeMax")), this.zeroAxis = c = i.get("zeroAxis", !0), d = f <= 0 && 0 <= m && c ? 0 : 0 == c ? f : 0 < f ? f : m, this.xaxisOffset = d, u = x ? V.max.apply(V, h) + V.max.apply(V, P) : m - f, this.canvasHeightEf = c && f < 0 ? this.canvasHeight - 2 : this.canvasHeight - 1, f < d ? (k = ((x && 0 <= m ? I : m) - d) / u * this.canvasHeight) !== V.ceil(k) && (this.canvasHeightEf -= 2, k = V.ceil(k)) : k = this.canvasHeight, this.yoffset = k, N.isArray(i.get("colorMap")) ? (this.colorMapByIndex = i.get("colorMap"), this.colorMapByValue = null) : (this.colorMapByIndex = null, this.colorMapByValue = i.get("colorMap"), this.colorMapByValue && this.colorMapByValue.get === X && (this.colorMapByValue = new O(this.colorMapByValue))), this.range = u
                }, getRegion: function (t, e, i) {
                    var s = V.floor(e / this.totalBarWidth);
                    return s < 0 || s >= this.values.length ? X : s
                }, getCurrentRegionFields: function () {
                    var t, e, i = this.currentRegion, s = n(this.values[i]), r = [];
                    for (e = s.length; e--;) t = s[e], r.push({
                        isNull: null === t,
                        value: t,
                        color: this.calcColor(e, t, i),
                        offset: i
                    });
                    return r
                }, calcColor: function (t, e, i) {
                    var s, r, n = this.colorMapByIndex, a = this.colorMapByValue, o = this.options;
                    return s = this.stacked ? o.get("stackedBarColor") : e < 0 ? o.get("negBarColor") : o.get("barColor"), 0 === e && o.get("zeroColor") !== X && (s = o.get("zeroColor")), a && (r = a.get(e)) ? s = r : n && n.length > i && (s = n[i]), N.isArray(s) ? s[t % s.length] : s
                }, renderRegion: function (t, e) {
                    var i, s, r, n, a, o, h, l, p, g, u = this.values[t], c = this.options, d = this.xaxisOffset,
                        f = [], m = this.range, v = this.stacked, y = this.target, x = t * this.totalBarWidth,
                        C = this.canvasHeightEf, b = this.yoffset;
                    if (u = N.isArray(u) ? u : [u], h = u.length, l = u[0], n = w(null, u), g = w(d, u, !0), n) return c.get("nullColor") ? (r = e ? c.get("nullColor") : this.calcHighlightColor(c.get("nullColor"), c), i = 0 < b ? b - 1 : b, y.drawRect(x, i, this.barWidth - 1, 0, r, r)) : X;
                    for (a = b, o = 0; o < h; o++) {
                        if (l = u[o], v && l === d) {
                            if (!g || p) continue;
                            p = !0
                        }
                        s = 0 < m ? V.floor(C * (V.abs(l - d) / m)) + 1 : 1, l < d || l === d && 0 === b ? (i = a, a += s) : (i = b - s, b -= s), r = this.calcColor(o, l, t), e && (r = this.calcHighlightColor(r, c)), f.push(y.drawRect(x, i, this.barWidth - 1, s - 1, r, r))
                    }
                    return 1 === f.length ? f[0] : f
                }
            }), N.fn.sparkline.tristate = o = e(N.fn.sparkline._base, r, {
                type: "tristate", init: function (t, e, i, s, r) {
                    var n = parseInt(i.get("barWidth"), 10), a = parseInt(i.get("barSpacing"), 10);
                    o._super.init.call(this, t, e, i, s, r), this.regionShapes = {}, this.barWidth = n, this.barSpacing = a, this.totalBarWidth = n + a, this.values = N.map(e, Number), this.width = s = e.length * n + (e.length - 1) * a, N.isArray(i.get("colorMap")) ? (this.colorMapByIndex = i.get("colorMap"), this.colorMapByValue = null) : (this.colorMapByIndex = null, this.colorMapByValue = i.get("colorMap"), this.colorMapByValue && this.colorMapByValue.get === X && (this.colorMapByValue = new O(this.colorMapByValue))), this.initTarget()
                }, getRegion: function (t, e, i) {
                    return V.floor(e / this.totalBarWidth)
                }, getCurrentRegionFields: function () {
                    var t = this.currentRegion;
                    return {
                        isNull: this.values[t] === X,
                        value: this.values[t],
                        color: this.calcColor(this.values[t], t),
                        offset: t
                    }
                }, calcColor: function (t, e) {
                    var i, s = this.values, r = this.options, n = this.colorMapByIndex, a = this.colorMapByValue;
                    return a && (i = a.get(t)) ? i : n && n.length > e ? n[e] : s[e] < 0 ? r.get("negBarColor") : 0 < s[e] ? r.get("posBarColor") : r.get("zeroBarColor")
                }, renderRegion: function (t, e) {
                    var i, s, r, n, a, o, h = this.values, l = this.options, p = this.target;
                    if (i = p.pixelHeight, r = V.round(i / 2), n = t * this.totalBarWidth, s = h[t] < 0 ? (a = r) - 1 : 0 < h[t] ? (a = 0, r - 1) : (a = r - 1, 2), null !== (o = this.calcColor(h[t], t))) return e && (o = this.calcHighlightColor(o, l)), p.drawRect(n, a, this.barWidth - 1, s - 1, o, o)
                }
            }), N.fn.sparkline.discrete = a = e(N.fn.sparkline._base, r, {
                type: "discrete", init: function (t, e, i, s, r) {
                    a._super.init.call(this, t, e, i, s, r), this.regionShapes = {}, this.values = e = N.map(e, Number), this.min = V.min.apply(V, e), this.max = V.max.apply(V, e), this.range = this.max - this.min, this.width = s = "auto" === i.get("width") ? 2 * e.length : this.width, this.interval = V.floor(s / e.length), this.itemWidth = s / e.length, i.get("chartRangeMin") !== X && (i.get("chartRangeClip") || i.get("chartRangeMin") < this.min) && (this.min = i.get("chartRangeMin")), i.get("chartRangeMax") !== X && (i.get("chartRangeClip") || i.get("chartRangeMax") > this.max) && (this.max = i.get("chartRangeMax")), this.initTarget(), this.target && (this.lineHeight = "auto" === i.get("lineHeight") ? V.round(.3 * this.canvasHeight) : i.get("lineHeight"))
                }, getRegion: function (t, e, i) {
                    return V.floor(e / this.itemWidth)
                }, getCurrentRegionFields: function () {
                    var t = this.currentRegion;
                    return {isNull: this.values[t] === X, value: this.values[t], offset: t}
                }, renderRegion: function (t, e) {
                    var i, s, r, n, a = this.values, o = this.options, h = this.min, l = this.max, p = this.range,
                        g = this.interval, u = this.target, c = this.canvasHeight, d = this.lineHeight, f = c - d;
                    return s = j(a[t], h, l), n = t * g, i = V.round(f - f * ((s - h) / p)), r = o.get("thresholdColor") && s < o.get("thresholdValue") ? o.get("thresholdColor") : o.get("lineColor"), e && (r = this.calcHighlightColor(r, o)), u.drawLine(n, i, n, i + d, r)
                }
            }), N.fn.sparkline.bullet = h = e(N.fn.sparkline._base, {
                type: "bullet", init: function (t, e, i, s, r) {
                    var n, a, o;
                    h._super.init.call(this, t, e, i, s, r), this.values = e = F(e), (o = e.slice())[0] = null === o[0] ? o[2] : o[0], o[1] = null === e[1] ? o[2] : o[1], n = V.min.apply(V, e), a = V.max.apply(V, e), n = i.get("base") === X ? n < 0 ? n : 0 : i.get("base"), this.min = n, this.max = a, this.range = a - n, this.shapes = {}, this.valueShapes = {}, this.regiondata = {}, this.width = s = "auto" === i.get("width") ? "4.0em" : s, this.target = this.$el.simpledraw(s, r, i.get("composite")), e.length || (this.disabled = !0), this.initTarget()
                }, getRegion: function (t, e, i) {
                    var s = this.target.getShapeAt(t, e, i);
                    return s !== X && this.shapes[s] !== X ? this.shapes[s] : X
                }, getCurrentRegionFields: function () {
                    var t = this.currentRegion;
                    return {fieldkey: t.substr(0, 1), value: this.values[t.substr(1)], region: t}
                }, changeHighlight: function (t) {
                    var e, i = this.currentRegion, s = this.valueShapes[i];
                    switch (delete this.shapes[s], i.substr(0, 1)) {
                        case"r":
                            e = this.renderRange(i.substr(1), t);
                            break;
                        case"p":
                            e = this.renderPerformance(t);
                            break;
                        case"t":
                            e = this.renderTarget(t)
                    }
                    this.valueShapes[i] = e.id, this.shapes[e.id] = i, this.target.replaceWithShape(s, e)
                }, renderRange: function (t, e) {
                    var i = this.values[t], s = V.round(this.canvasWidth * ((i - this.min) / this.range)),
                        r = this.options.get("rangeColors")[t - 2];
                    return e && (r = this.calcHighlightColor(r, this.options)), this.target.drawRect(0, 0, s - 1, this.canvasHeight - 1, r, r)
                }, renderPerformance: function (t) {
                    var e = this.values[1], i = V.round(this.canvasWidth * ((e - this.min) / this.range)),
                        s = this.options.get("performanceColor");
                    return t && (s = this.calcHighlightColor(s, this.options)), this.target.drawRect(0, V.round(.3 * this.canvasHeight), i - 1, V.round(.4 * this.canvasHeight) - 1, s, s)
                }, renderTarget: function (t) {
                    var e = this.values[0],
                        i = V.round(this.canvasWidth * ((e - this.min) / this.range) - this.options.get("targetWidth") / 2),
                        s = V.round(.1 * this.canvasHeight), r = this.canvasHeight - 2 * s,
                        n = this.options.get("targetColor");
                    return t && (n = this.calcHighlightColor(n, this.options)), this.target.drawRect(i, s, this.options.get("targetWidth") - 1, r - 1, n, n)
                }, render: function () {
                    var t, e, i = this.values.length, s = this.target;
                    if (h._super.render.call(this)) {
                        for (t = 2; t < i; t++) e = this.renderRange(t).append(), this.shapes[e.id] = "r" + t, this.valueShapes["r" + t] = e.id;
                        null !== this.values[1] && (e = this.renderPerformance().append(), this.shapes[e.id] = "p1", this.valueShapes.p1 = e.id), null !== this.values[0] && (e = this.renderTarget().append(), this.shapes[e.id] = "t0", this.valueShapes.t0 = e.id), s.render()
                    }
                }
            }), N.fn.sparkline.pie = l = e(N.fn.sparkline._base, {
                type: "pie", init: function (t, e, i, s, r) {
                    var n, a = 0;
                    if (l._super.init.call(this, t, e, i, s, r), this.shapes = {}, this.valueShapes = {}, this.values = e = N.map(e, Number), "auto" === i.get("width") && (this.width = this.height), 0 < e.length) for (n = e.length; n--;) a += e[n];
                    this.total = a, this.initTarget(), this.radius = V.floor(V.min(this.canvasWidth, this.canvasHeight) / 2)
                }, getRegion: function (t, e, i) {
                    var s = this.target.getShapeAt(t, e, i);
                    return s !== X && this.shapes[s] !== X ? this.shapes[s] : X
                }, getCurrentRegionFields: function () {
                    var t = this.currentRegion;
                    return {
                        isNull: this.values[t] === X,
                        value: this.values[t],
                        percent: this.values[t] / this.total * 100,
                        color: this.options.get("sliceColors")[t % this.options.get("sliceColors").length],
                        offset: t
                    }
                }, changeHighlight: function (t) {
                    var e = this.currentRegion, i = this.renderSlice(e, t), s = this.valueShapes[e];
                    delete this.shapes[s], this.target.replaceWithShape(s, i), this.valueShapes[e] = i.id, this.shapes[i.id] = e
                }, renderSlice: function (t, e) {
                    var i, s, r, n, a, o = this.target, h = this.options, l = this.radius, p = h.get("borderWidth"),
                        g = h.get("offset"), u = 2 * V.PI, c = this.values, d = this.total,
                        f = g ? 2 * V.PI * (g / 360) : 0;
                    for (n = c.length, r = 0; r < n; r++) {
                        if (s = i = f, 0 < d && (s = f + u * (c[r] / d)), t === r) return a = h.get("sliceColors")[r % h.get("sliceColors").length], e && (a = this.calcHighlightColor(a, h)), o.drawPieSlice(l, l, l - p, i, s, X, a);
                        f = s
                    }
                }, render: function () {
                    var t, e, i = this.target, s = this.values, r = this.options, n = this.radius,
                        a = r.get("borderWidth"), o = r.get("donutWidth");
                    if (l._super.render.call(this)) {
                        for (a && i.drawCircle(n, n, V.floor(n - a / 2), r.get("borderColor"), X, a).append(), e = s.length; e--;) s[e] && (t = this.renderSlice(e).append(), this.valueShapes[e] = t.id, this.shapes[t.id] = e);
                        o && i.drawCircle(n, n, n - o, r.get("donutColor"), r.get("donutColor"), 0).append(), i.render()
                    }
                }
            }), N.fn.sparkline.box = b = e(N.fn.sparkline._base, {
                type: "box", init: function (t, e, i, s, r) {
                    b._super.init.call(this, t, e, i, s, r), this.values = N.map(e, Number), this.width = "auto" === i.get("width") ? "4.0em" : s, this.initTarget(), this.values.length || (this.disabled = 1)
                }, getRegion: function () {
                    return 1
                }, getCurrentRegionFields: function () {
                    var t = [{field: "lq", value: this.quartiles[0]}, {
                        field: "med",
                        value: this.quartiles[1]
                    }, {field: "uq", value: this.quartiles[2]}];
                    return this.loutlier !== X && t.push({
                        field: "lo",
                        value: this.loutlier
                    }), this.routlier !== X && t.push({
                        field: "ro",
                        value: this.routlier
                    }), this.lwhisker !== X && t.push({
                        field: "lw",
                        value: this.lwhisker
                    }), this.rwhisker !== X && t.push({field: "rw", value: this.rwhisker}), t
                }, render: function () {
                    var t, e, i, s, r, n, a, o, h, l, p, g = this.target, u = this.values, c = u.length,
                        d = this.options, f = this.canvasWidth, m = this.canvasHeight,
                        v = d.get("chartRangeMin") === X ? V.min.apply(V, u) : d.get("chartRangeMin"),
                        y = d.get("chartRangeMax") === X ? V.max.apply(V, u) : d.get("chartRangeMax"), x = 0;
                    if (b._super.render.call(this)) {
                        if (d.get("raw")) d.get("showOutliers") && 5 < u.length ? (e = u[0], t = u[1], s = u[2], r = u[3], n = u[4], a = u[5], o = u[6]) : (t = u[0], s = u[1], r = u[2], n = u[3], a = u[4]); else if (u.sort(function (t, e) {
                            return t - e
                        }), s = C(u, 1), r = C(u, 2), n = C(u, 3), i = n - s, d.get("showOutliers")) {
                            for (t = a = X, h = 0; h < c; h++) t === X && u[h] > s - i * d.get("outlierIQR") && (t = u[h]), u[h] < n + i * d.get("outlierIQR") && (a = u[h]);
                            e = u[0], o = u[c - 1]
                        } else t = u[0], a = u[c - 1];
                        this.quartiles = [s, r, n], this.lwhisker = t, this.rwhisker = a, this.loutlier = e, this.routlier = o, p = f / (y - v + 1), d.get("showOutliers") && (x = V.ceil(d.get("spotRadius")), f -= 2 * V.ceil(d.get("spotRadius")), p = f / (y - v + 1), e < t && g.drawCircle((e - v) * p + x, m / 2, d.get("spotRadius"), d.get("outlierLineColor"), d.get("outlierFillColor")).append(), a < o && g.drawCircle((o - v) * p + x, m / 2, d.get("spotRadius"), d.get("outlierLineColor"), d.get("outlierFillColor")).append()), g.drawRect(V.round((s - v) * p + x), V.round(.1 * m), V.round((n - s) * p), V.round(.8 * m), d.get("boxLineColor"), d.get("boxFillColor")).append(), g.drawLine(V.round((t - v) * p + x), V.round(m / 2), V.round((s - v) * p + x), V.round(m / 2), d.get("lineColor")).append(), g.drawLine(V.round((t - v) * p + x), V.round(m / 4), V.round((t - v) * p + x), V.round(m - m / 4), d.get("whiskerColor")).append(), g.drawLine(V.round((a - v) * p + x), V.round(m / 2), V.round((n - v) * p + x), V.round(m / 2), d.get("lineColor")).append(), g.drawLine(V.round((a - v) * p + x), V.round(m / 4), V.round((a - v) * p + x), V.round(m - m / 4), d.get("whiskerColor")).append(), g.drawLine(V.round((r - v) * p + x), V.round(.1 * m), V.round((r - v) * p + x), V.round(.9 * m), d.get("medianColor")).append(), d.get("target") && (l = V.ceil(d.get("spotRadius")), g.drawLine(V.round((d.get("target") - v) * p + x), V.round(m / 2 - l), V.round((d.get("target") - v) * p + x), V.round(m / 2 + l), d.get("targetColor")).append(), g.drawLine(V.round((d.get("target") - v) * p + x - l), V.round(m / 2), V.round((d.get("target") - v) * p + x + l), V.round(m / 2), d.get("targetColor")).append()), g.render()
                    }
                }
            }), c = e({
                init: function (t, e, i, s) {
                    this.target = t, this.id = e, this.type = i, this.args = s
                }, append: function () {
                    return this.target.appendShape(this), this
                }
            }), d = e({
                _pxregex: /(\d+)(px)?\s*$/i, init: function (t, e, i) {
                    t && (this.width = t, this.height = e, this.target = i, this.lastShapeId = null, i[0] && (i = i[0]), N.data(i, "_jqs_vcanvas", this))
                }, drawLine: function (t, e, i, s, r, n) {
                    return this.drawShape([[t, e], [i, s]], r, n)
                }, drawShape: function (t, e, i, s) {
                    return this._genShape("Shape", [t, e, i, s])
                }, drawCircle: function (t, e, i, s, r, n) {
                    return this._genShape("Circle", [t, e, i, s, r, n])
                }, drawPieSlice: function (t, e, i, s, r, n, a) {
                    return this._genShape("PieSlice", [t, e, i, s, r, n, a])
                }, drawRect: function (t, e, i, s, r, n) {
                    return this._genShape("Rect", [t, e, i, s, r, n])
                }, getElement: function () {
                    return this.canvas
                }, getLastShapeId: function () {
                    return this.lastShapeId
                }, reset: function () {
                    alert("reset not implemented")
                }, _insert: function (t, e) {
                    N(e).html(t)
                }, _calculatePixelDims: function (t, e, i) {
                    var s;
                    s = this._pxregex.exec(e), this.pixelHeight = s ? s[1] : N(i).height(), s = this._pxregex.exec(t), this.pixelWidth = s ? s[1] : N(i).width()
                }, _genShape: function (t, e) {
                    var i = S++;
                    return e.unshift(i), new c(this, i, t, e)
                }, appendShape: function (t) {
                    alert("appendShape not implemented")
                }, replaceWithShape: function (t, e) {
                    alert("replaceWithShape not implemented")
                }, insertAfterShape: function (t, e) {
                    alert("insertAfterShape not implemented")
                }, removeShapeId: function (t) {
                    alert("removeShapeId not implemented")
                }, getShapeAt: function (t, e, i) {
                    alert("getShapeAt not implemented")
                }, render: function () {
                    alert("render not implemented")
                }
            }), f = e(d, {
                init: function (t, e, i, s) {
                    f._super.init.call(this, t, e, i), this.canvas = R.createElement("canvas"), i[0] && (i = i[0]), N.data(i, "_jqs_vcanvas", this), N(this.canvas).css({
                        display: "inline-block",
                        width: t,
                        height: e,
                        verticalAlign: "top"
                    }), this._insert(this.canvas, i), this._calculatePixelDims(t, e, this.canvas), this.canvas.width = this.pixelWidth, this.canvas.height = this.pixelHeight, this.interact = s, this.shapes = {}, this.shapeseq = [], this.currentTargetShapeId = X, N(this.canvas).css({
                        width: this.pixelWidth,
                        height: this.pixelHeight
                    })
                }, _getContext: function (t, e, i) {
                    var s = this.canvas.getContext("2d");
                    return t !== X && (s.strokeStyle = t), s.lineWidth = i === X ? 1 : i, e !== X && (s.fillStyle = e), s
                }, reset: function () {
                    var t = this._getContext();
                    t.clearRect(0, 0, this.pixelWidth, this.pixelHeight), this.shapes = {}, this.shapeseq = [], this.currentTargetShapeId = X
                }, _drawShape: function (t, e, i, s, r) {
                    var n, a, o = this._getContext(i, s, r);
                    for (o.beginPath(), o.moveTo(e[0][0] + .5, e[0][1] + .5), n = 1, a = e.length; n < a; n++) o.lineTo(e[n][0] + .5, e[n][1] + .5);
                    i !== X && o.stroke(), s !== X && o.fill(), this.targetX !== X && this.targetY !== X && o.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = t)
                }, _drawCircle: function (t, e, i, s, r, n, a) {
                    var o = this._getContext(r, n, a);
                    o.beginPath(), o.arc(e, i, s, 0, 2 * V.PI, !1), this.targetX !== X && this.targetY !== X && o.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = t), r !== X && o.stroke(), n !== X && o.fill()
                }, _drawPieSlice: function (t, e, i, s, r, n, a, o) {
                    var h = this._getContext(a, o);
                    h.beginPath(), h.moveTo(e, i), h.arc(e, i, s, r, n, !1), h.lineTo(e, i), h.closePath(), a !== X && h.stroke(), o && h.fill(), this.targetX !== X && this.targetY !== X && h.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = t)
                }, _drawRect: function (t, e, i, s, r, n, a) {
                    return this._drawShape(t, [[e, i], [e + s, i], [e + s, i + r], [e, i + r], [e, i]], n, a)
                }, appendShape: function (t) {
                    return this.shapes[t.id] = t, this.shapeseq.push(t.id), this.lastShapeId = t.id, t.id
                }, replaceWithShape: function (t, e) {
                    var i, s = this.shapeseq;
                    for (this.shapes[e.id] = e, i = s.length; i--;) s[i] == t && (s[i] = e.id);
                    delete this.shapes[t]
                }, replaceWithShapes: function (t, e) {
                    var i, s, r, n = this.shapeseq, a = {};
                    for (s = t.length; s--;) a[t[s]] = !0;
                    for (s = n.length; s--;) i = n[s], a[i] && (n.splice(s, 1), delete this.shapes[i], r = s);
                    for (s = e.length; s--;) n.splice(r, 0, e[s].id), this.shapes[e[s].id] = e[s]
                }, insertAfterShape: function (t, e) {
                    var i, s = this.shapeseq;
                    for (i = s.length; i--;) if (s[i] === t) return s.splice(i + 1, 0, e.id), void (this.shapes[e.id] = e)
                }, removeShapeId: function (t) {
                    var e, i = this.shapeseq;
                    for (e = i.length; e--;) if (i[e] === t) {
                        i.splice(e, 1);
                        break
                    }
                    delete this.shapes[t]
                }, getShapeAt: function (t, e, i) {
                    return this.targetX = e, this.targetY = i, this.render(), this.currentTargetShapeId
                }, render: function () {
                    var t, e, i, s = this.shapeseq, r = this.shapes, n = s.length, a = this._getContext();
                    for (a.clearRect(0, 0, this.pixelWidth, this.pixelHeight), i = 0; i < n; i++) t = s[i], this["_draw" + (e = r[t]).type].apply(this, e.args);
                    this.interact || (this.shapes = {}, this.shapeseq = [])
                }
            }), m = e(d, {
                init: function (t, e, i) {
                    var s;
                    m._super.init.call(this, t, e, i), i[0] && (i = i[0]), N.data(i, "_jqs_vcanvas", this), this.canvas = R.createElement("span"), N(this.canvas).css({
                        display: "inline-block",
                        position: "relative",
                        overflow: "hidden",
                        width: t,
                        height: e,
                        margin: "0px",
                        padding: "0px",
                        verticalAlign: "top"
                    }), this._insert(this.canvas, i), this._calculatePixelDims(t, e, this.canvas), this.canvas.width = this.pixelWidth, this.canvas.height = this.pixelHeight, s = '<v:group coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '" style="position:absolute;top:0;left:0;width:' + this.pixelWidth + "px;height=" + this.pixelHeight + 'px;"></v:group>', this.canvas.insertAdjacentHTML("beforeEnd", s), this.group = N(this.canvas).children()[0], this.rendered = !1, this.prerender = ""
                }, _drawShape: function (t, e, i, s, r) {
                    var n, a, o, h, l, p, g = [];
                    for (p = 0, l = e.length; p < l; p++) g[p] = e[p][0] + "," + e[p][1];
                    return n = g.splice(0, 1), r = r === X ? 1 : r, a = i === X ? ' stroked="false" ' : ' strokeWeight="' + r + 'px" strokeColor="' + i + '" ', o = s === X ? ' filled="false"' : ' fillColor="' + s + '" filled="true" ', h = g[0] === g[g.length - 1] ? "x " : "", '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '"  id="jqsshape' + t + '" ' + a + o + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;"  path="m ' + n + " l " + g.join(", ") + " " + h + 'e"> </v:shape>'
                }, _drawCircle: function (t, e, i, s, r, n, a) {
                    return '<v:oval  id="jqsshape' + t + '" ' + (r === X ? ' stroked="false" ' : ' strokeWeight="' + a + 'px" strokeColor="' + r + '" ') + (n === X ? ' filled="false"' : ' fillColor="' + n + '" filled="true" ') + ' style="position:absolute;top:' + (i -= s) + "px; left:" + (e -= s) + "px; width:" + 2 * s + "px; height:" + 2 * s + 'px"></v:oval>'
                }, _drawPieSlice: function (t, e, i, s, r, n, a, o) {
                    var h, l, p, g, u, c, d;
                    if (r === n) return "";
                    if (n - r == 2 * V.PI && (r = 0, n = 2 * V.PI), l = e + V.round(V.cos(r) * s), p = i + V.round(V.sin(r) * s), g = e + V.round(V.cos(n) * s), u = i + V.round(V.sin(n) * s), l === g && p === u) {
                        if (n - r < V.PI) return "";
                        l = g = e + s, p = u = i
                    }
                    return l === g && p === u && n - r < V.PI ? "" : (h = [e - s, i - s, e + s, i + s, l, p, g, u], c = a === X ? ' stroked="false" ' : ' strokeWeight="1px" strokeColor="' + a + '" ', d = o === X ? ' filled="false"' : ' fillColor="' + o + '" filled="true" ', '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '"  id="jqsshape' + t + '" ' + c + d + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;"  path="m ' + e + "," + i + " wa " + h.join(", ") + ' x e"> </v:shape>')
                }, _drawRect: function (t, e, i, s, r, n, a) {
                    return this._drawShape(t, [[e, i], [e, i + r], [e + s, i + r], [e + s, i], [e, i]], n, a)
                }, reset: function () {
                    this.group.innerHTML = ""
                }, appendShape: function (t) {
                    var e = this["_draw" + t.type].apply(this, t.args);
                    return this.rendered ? this.group.insertAdjacentHTML("beforeEnd", e) : this.prerender += e, this.lastShapeId = t.id, t.id
                }, replaceWithShape: function (t, e) {
                    var i = N("#jqsshape" + t), s = this["_draw" + e.type].apply(this, e.args);
                    i[0].outerHTML = s
                }, replaceWithShapes: function (t, e) {
                    var i, s = N("#jqsshape" + t[0]), r = "", n = e.length;
                    for (i = 0; i < n; i++) r += this["_draw" + e[i].type].apply(this, e[i].args);
                    for (s[0].outerHTML = r, i = 1; i < t.length; i++) N("#jqsshape" + t[i]).remove()
                }, insertAfterShape: function (t, e) {
                    var i = N("#jqsshape" + t), s = this["_draw" + e.type].apply(this, e.args);
                    i[0].insertAdjacentHTML("afterEnd", s)
                }, removeShapeId: function (t) {
                    var e = N("#jqsshape" + t);
                    this.group.removeChild(e[0])
                }, getShapeAt: function (t, e, i) {
                    var s = t.id.substr(8);
                    return s
                }, render: function () {
                    this.rendered || (this.group.innerHTML = this.prerender, this.rendered = !0)
                }
            })
        }) ? s.apply(e, r) : s) === X || (t.exports = n)
    }, 232: function (t, e, i) {
    }, 234: function (t, e, i) {
    }
}, [[228, 0]]]);