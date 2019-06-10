(window.webpackJsonp = window.webpackJsonp || []).push([[10], {
    142: function (o, r, t) {
        t(0), t(0)
    }, 221: function (o, r, t) {
        "use strict";
        t.r(r);
        t(160), t(161), t(162), t(163), t(164), t(165), t(166), t(167), t(142), t(0);
        var e = t(0);
        e(function () {
            if (e.fn.plot && e("#bar-flotchart").length) {
                e.get("server/chart/bar.json", function (o) {
                    var r = o, t = {
                        series: {
                            bars: {
                                align: "center",
                                lineWidth: 0,
                                show: !0,
                                barWidth: .6,
                                fill: !0,
                                fillColor: {colors: [{opacity: .8}, {opacity: .5}]}
                            }
                        },
                        grid: {
                            borderColor: "rgba(162,162,162,.26)",
                            borderWidth: 1,
                            hoverable: !0,
                            backgroundColor: "transparent"
                        },
                        tooltip: !0,
                        tooltipOpts: {
                            content: function (o, r, t) {
                                return r + " : " + t
                            }
                        },
                        xaxis: {
                            tickColor: "rgba(162,162,162,.26)",
                            font: {color: Colors.byName("blueGrey-200")},
                            mode: "categories"
                        },
                        yaxis: {tickColor: "rgba(162,162,162,.26)", font: {color: Colors.byName("blueGrey-200")}},
                        shadowSize: 0
                    };
                    e("#bar-flotchart").plot(r, t)
                }), e.get("server/chart/barstacked.json", function (o) {
                    var r = o, t = {
                        series: {
                            stack: !0,
                            bars: {align: "center", lineWidth: 0, show: !0, barWidth: .6, fill: .9}
                        },
                        grid: {
                            borderColor: "rgba(162,162,162,.26)",
                            borderWidth: 1,
                            hoverable: !0,
                            backgroundColor: "transparent"
                        },
                        tooltip: !0,
                        tooltipOpts: {
                            content: function (o, r, t) {
                                return r + " : " + t
                            }
                        },
                        xaxis: {
                            tickColor: "rgba(162,162,162,.26)",
                            font: {color: Colors.byName("blueGrey-200")},
                            mode: "categories"
                        },
                        yaxis: {
                            min: 0,
                            max: 200,
                            tickColor: "rgba(162,162,162,.26)",
                            font: {color: Colors.byName("blueGrey-200")}
                        },
                        shadowSize: 0
                    };
                    e("#barstacked-flotchart").plot(r, t)
                }), e.get("server/chart/spline.json", function (o) {
                    var r = o, t = {
                        series: {
                            lines: {show: !1},
                            points: {show: !0, radius: 2},
                            splines: {show: !0, tension: .4, lineWidth: 1, fill: 1}
                        },
                        grid: {
                            borderColor: "rgba(162,162,162,.26)",
                            borderWidth: 1,
                            hoverable: !0,
                            backgroundColor: "transparent"
                        },
                        tooltip: !0,
                        tooltipOpts: {
                            content: function (o, r, t) {
                                return r + " : " + t
                            }
                        },
                        xaxis: {
                            tickColor: "rgba(162,162,162,.26)",
                            font: {color: Colors.byName("blueGrey-200")},
                            mode: "categories"
                        },
                        yaxis: {
                            min: 0,
                            max: 150,
                            tickColor: "rgba(162,162,162,.26)",
                            font: {color: Colors.byName("blueGrey-200")},
                            tickFormatter: function (o) {
                                return o
                            }
                        },
                        shadowSize: 0
                    };
                    e("#spline-flotchart").plot(r, t)
                }), e.get("server/chart/area.json", function (o) {
                    var r = o, t = {
                        series: {
                            lines: {show: !0, fill: !0, fillColor: {colors: [{opacity: .5}, {opacity: .9}]}},
                            points: {show: !1}
                        },
                        grid: {
                            borderColor: "rgba(162,162,162,.26)",
                            borderWidth: 1,
                            hoverable: !0,
                            backgroundColor: "transparent"
                        },
                        tooltip: !0,
                        tooltipOpts: {
                            content: function (o, r, t) {
                                return r + " : " + t
                            }
                        },
                        xaxis: {
                            tickColor: "rgba(162,162,162,.26)",
                            font: {color: Colors.byName("blueGrey-200")},
                            mode: "categories"
                        },
                        yaxis: {
                            min: 0,
                            max: 150,
                            tickColor: "rgba(162,162,162,.26)",
                            font: {color: Colors.byName("blueGrey-200")}
                        },
                        shadowSize: 0
                    };
                    e("#area-flotchart").plot(r, t)
                }), e.get("server/chart/line.json", function (o) {
                    var r = o, t = {
                        series: {lines: {show: !0, fill: .01}, points: {show: !0, radius: 4}},
                        grid: {
                            borderColor: "rgba(162,162,162,.26)",
                            borderWidth: 1,
                            hoverable: !0,
                            backgroundColor: "transparent"
                        },
                        tooltip: !0,
                        tooltipOpts: {
                            content: function (o, r, t) {
                                return r + " : " + t
                            }
                        },
                        xaxis: {
                            tickColor: "rgba(162,162,162,.26)",
                            font: {color: Colors.byName("blueGrey-200")},
                            mode: "categories"
                        },
                        yaxis: {tickColor: "rgba(162,162,162,.26)", font: {color: Colors.byName("blueGrey-200")}},
                        shadowSize: 0
                    };
                    e("#line-flotchart").plot(r, t)
                });
                var o = {
                    series: {
                        pie: {
                            show: !0,
                            innerRadius: 0,
                            label: {
                                show: !0, radius: .8, formatter: function (o, r) {
                                    return '<div class="flot-pie-label">' + Math.round(r.percent) + "%</div>"
                                }, background: {opacity: .8, color: "#222"}
                            }
                        }
                    }
                };
                e("#pie-flotchart").plot([{label: "CSS", color: "#009688", data: 40}, {
                    label: "LESS",
                    color: "#FFC107",
                    data: 90
                }, {label: "SASS", color: "#FF7043", data: 75}], o), e("#donut-flotchart").plot([{
                    color: "#4CAF50",
                    data: 60,
                    label: "Coffee"
                }, {color: "#009688", data: 90, label: "CSS"}, {
                    color: "#FFC107",
                    data: 50,
                    label: "LESS"
                }, {color: "#FF7043", data: 80, label: "Jade"}, {
                    color: "#3949AB",
                    data: 116,
                    label: "AngularJS"
                }], {series: {pie: {show: !0, innerRadius: .5}}});
                var r = {
                    series: {
                        lines: {show: !0, fill: !0, fillColor: {colors: ["#3F51B5", "#3F51B5"]}},
                        shadowSize: 0
                    },
                    grid: {show: !1, borderWidth: 0, minBorderMargin: 20, labelMargin: 10},
                    xaxis: {
                        tickFormatter: function () {
                            return ""
                        }
                    },
                    yaxis: {min: 0, max: 110},
                    legend: {show: !0},
                    colors: ["#3F51B5"]
                }, a = [], l = 300, t = getRandomData();
                !function update() {
                    t = getRandomData(), e("#realtime-flotchart").plot(t, r), setTimeout(update, 30)
                }()
            }

            function getRandomData() {
                for (0 < a.length && (a = a.slice(1)); a.length < l;) {
                    var o = 0 < a.length ? a[a.length - 1] : 50, r = o + 10 * Math.random() - 5;
                    r < 0 ? r = 0 : 100 < r && (r = 100), a.push(r)
                }
                for (var t = [], e = 0; e < a.length; ++e) t.push([e, a[e]]);
                return [t]
            }
        })
    }
}, [[221, 0]]]);