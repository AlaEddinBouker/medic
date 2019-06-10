(window.webpackJsonp = window.webpackJsonp || []).push([[24], {
    11: function (t, e, n) {
        var r, i, a;
        a = this, r = [n(225)], void 0 === (i = function (t) {
            return a.Rickshaw = (v = t, function (t) {
                var e = Object.prototype.toString, r = "Null", i = "Undefined", a = "Boolean", o = "Number",
                    s = "String", u = "Object", n = "[object Function]";

                function isFunction(t) {
                    return e.call(t) === n
                }

                function keys(t) {
                    if (function (t) {
                        switch (t) {
                            case null:
                                return r;
                            case void 0:
                                return i
                        }
                        switch (typeof t) {
                            case"boolean":
                                return a;
                            case"number":
                                return o;
                            case"string":
                                return s
                        }
                        return u
                    }(t) !== u) throw new TypeError;
                    var e = [];
                    for (var n in t) t.hasOwnProperty(n) && e.push(n);
                    return e
                }

                var c = Array.prototype.slice;

                function wrap(t, e) {
                    var n = t;
                    return function () {
                        var t = update([bind(n, this)], arguments);
                        return e.apply(this, t)
                    }
                }

                function update(t, e) {
                    for (var n = t.length, r = e.length; r--;) t[n + r] = e[r];
                    return t
                }

                function bind(t, r) {
                    if (arguments.length < 2 && void 0 === t) return this;
                    var i = t, a = c.call(arguments, 2);
                    return function () {
                        var t, e, n = (t = a, e = arguments, update(t = c.call(t, 0), e));
                        return i.apply(r, n)
                    }
                }

                var h = function () {
                }, d = function () {
                    var l = function () {
                        for (var t in{toString: 1}) if ("toString" === t) return !1;
                        return !0
                    }();

                    function subclass() {
                    }

                    return {
                        create: function () {
                            var t = null, e = [].slice.apply(arguments);

                            function klass() {
                                this.initialize.apply(this, arguments)
                            }

                            if (isFunction(e[0]) && (t = e.shift()), function (t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                            }(klass, d.Methods), klass.superclass = t, klass.subclasses = [], t) {
                                subclass.prototype = t.prototype, klass.prototype = new subclass;
                                try {
                                    t.subclasses.push(klass)
                                } catch (t) {
                                }
                            }
                            for (var n = 0, r = e.length; n < r; n++) klass.addMethods(e[n]);
                            return klass.prototype.initialize || (klass.prototype.initialize = h), klass.prototype.constructor = klass
                        }, Methods: {
                            addMethods: function (t) {
                                var e, n, r = this.superclass && this.superclass.prototype, i = keys(t);
                                l && (t.toString != Object.prototype.toString && i.push("toString"), t.valueOf != Object.prototype.valueOf && i.push("valueOf"));
                                for (var a = 0, o = i.length; a < o; a++) {
                                    var s = i[a], u = t[s];
                                    if (r && isFunction(u) && "$super" == (e = u, n = e.toString().match(/^[\s\(]*function[^(]*\(([^)]*)\)/)[1].replace(/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g, "").replace(/\s+/g, "").split(","), 1 != n.length || n[0] ? n : [])[0]) {
                                        var c = u;
                                        (u = wrap(function (t) {
                                            return function () {
                                                return r[t].apply(this, arguments)
                                            }
                                        }(s), c)).valueOf = bind(c.valueOf, c), u.toString = bind(c.toString, c)
                                    }
                                    this.prototype[s] = u
                                }
                                return this
                            }
                        }
                    }
                }();
                t.exports ? t.exports.Class = d : t.Class = d
            }(u = {
                version: "1.6.6", namespace: function (t, e) {
                    for (var n = t.split("."), r = u, i = 1, a = n.length; i < a; i++) {
                        var o = n[i];
                        r[o] = r[o] || {}, r = r[o]
                    }
                    return r
                }, keys: function (t) {
                    var e = [];
                    for (var n in t) e.push(n);
                    return e
                }, extend: function (t, e) {
                    for (var n in e) t[n] = e[n];
                    return t
                }, clone: function (t) {
                    return JSON.parse(JSON.stringify(t))
                }
            }), u.namespace("Rickshaw.Compat.ClassList"), u.Compat.ClassList = function () {
                "undefined" == typeof document || "classList" in document.createElement("a") || function (t) {
                    "use strict";
                    var e = "classList", n = "prototype", r = (t.HTMLElement || t.Element)[n], i = Object,
                        a = String[n].trim || function () {
                            return this.replace(/^\s+|\s+$/g, "")
                        }, o = Array[n].indexOf || function (t) {
                            for (var e = 0, n = this.length; e < n; e++) if (e in this && this[e] === t) return e;
                            return -1
                        }, s = function (t, e) {
                            this.name = t, this.code = DOMException[t], this.message = e
                        }, u = function (t, e) {
                            if ("" === e) throw new s("SYNTAX_ERR", "An invalid or illegal string was specified");
                            if (/\s/.test(e)) throw new s("INVALID_CHARACTER_ERR", "String contains an invalid character");
                            return o.call(t, e)
                        }, c = function (t) {
                            for (var e = a.call(t.className), n = e ? e.split(/\s+/) : [], r = 0, i = n.length; r < i; r++) this.push(n[r]);
                            this._updateClassName = function () {
                                t.className = this.toString()
                            }
                        }, l = c[n] = [], h = function () {
                            return new c(this)
                        };
                    if (s[n] = Error[n], l.item = function (t) {
                        return this[t] || null
                    }, l.contains = function (t) {
                        return -1 !== u(this, t += "")
                    }, l.add = function (t) {
                        -1 === u(this, t += "") && (this.push(t), this._updateClassName())
                    }, l.remove = function (t) {
                        var e = u(this, t += "");
                        -1 !== e && (this.splice(e, 1), this._updateClassName())
                    }, l.toggle = function (t) {
                        -1 === u(this, t += "") ? this.add(t) : this.remove(t)
                    }, l.toString = function () {
                        return this.join(" ")
                    }, i.defineProperty) {
                        var d = {get: h, enumerable: !0, configurable: !0};
                        try {
                            i.defineProperty(r, e, d)
                        } catch (t) {
                            -2146823252 === t.number && (d.enumerable = !1, i.defineProperty(r, e, d))
                        }
                    } else i[n].__defineGetter__ && r.__defineGetter__(e, h)
                }(window)
            }, ("undefined" != typeof RICKSHAW_NO_COMPAT && !RICKSHAW_NO_COMPAT || "undefined" == typeof RICKSHAW_NO_COMPAT) && new u.Compat.ClassList, u.namespace("Rickshaw.Graph"), u.Graph = function (t) {
                var a = this;
                this.initialize = function (t) {
                    if (!t.element) throw"Rickshaw.Graph needs a reference to an element";
                    if (1 !== t.element.nodeType) throw"Rickshaw.Graph element was defined but not an HTML element";
                    this.element = t.element, this.series = t.series, this.window = {}, this.updateCallbacks = [], this.configureCallbacks = [], this.defaults = {
                        interpolation: "cardinal",
                        offset: "zero",
                        min: void 0,
                        max: void 0,
                        preserve: !1,
                        xScale: void 0,
                        yScale: void 0,
                        stack: !0
                    }, this._loadRenderers(), this.configure(t), this.setSeries(t.series), this.setSize({
                        width: t.width,
                        height: t.height
                    }), this.element.classList.add("rickshaw_graph"), this.vis = v.select(this.element).append("svg:svg").attr("width", this.width).attr("height", this.height), this.discoverRange()
                }, this._loadRenderers = function () {
                    for (var t in u.Graph.Renderer) if (t && u.Graph.Renderer.hasOwnProperty(t)) {
                        var e = u.Graph.Renderer[t];
                        e && e.prototype && e.prototype.render && a.registerRenderer(new e({graph: a}))
                    }
                }, this.validateSeries = function (t) {
                    if (!(Array.isArray(t) || t instanceof u.Series)) throw"series is not an array: " + Object.prototype.toString.apply(t);
                    t.forEach(function (t) {
                        if (!(t instanceof Object)) throw"series element is not an object: " + t;
                        if (!t.data) throw"series has no data: " + JSON.stringify(t);
                        if (!Array.isArray(t.data)) throw"series data is not an array: " + JSON.stringify(t.data);
                        if (0 < t.data.length) {
                            var e = t.data[0].x, n = t.data[0].y;
                            if ("number" != typeof e || "number" != typeof n && null !== n) throw"x and y properties of points should be numbers instead of " + typeof e + " and " + typeof n
                        }
                        if (3 <= t.data.length && (t.data[2].x < t.data[1].x || t.data[1].x < t.data[0].x || t.data[t.data.length - 1].x < t.data[0].x)) throw"series data needs to be sorted on x values for series name: " + t.name
                    }, this)
                }, this.setSeries = function (t) {
                    this.validateSeries(t), this.series = t, this.series.active = function () {
                        return a.series.filter(function (t) {
                            return !t.disabled
                        })
                    }
                }, this.dataDomain = function () {
                    var t = this.series.map(function (t) {
                        return t.data
                    });
                    return [v.min(t.map(function (t) {
                        return t[0].x
                    })), v.max(t.map(function (t) {
                        return t[t.length - 1].x
                    }))]
                }, this.discoverRange = function () {
                    var t = this.renderer.domain();
                    this.x = (this.xScale || v.scale.linear()).copy().domain(t.x).range([0, this.width]), this.y = (this.yScale || v.scale.linear()).copy().domain(t.y).range([this.height, 0]), this.x.magnitude = v.scale.linear().domain([t.x[0] - t.x[0], t.x[1] - t.x[0]]).range([0, this.width]), this.y.magnitude = v.scale.linear().domain([t.y[0] - t.y[0], t.y[1] - t.y[0]]).range([0, this.height])
                }, this.render = function () {
                    this.stackData(), this.discoverRange(), this.renderer.render(), this.updateCallbacks.forEach(function (t) {
                        t()
                    })
                }, this.update = this.render, this.stackData = function () {
                    var e, r = this.series.active().map(function (t) {
                        return t.data
                    }).map(function (t) {
                        return t.filter(function (t) {
                            return this._slice(t)
                        }, this)
                    }, this), n = this.preserve;
                    if (n || this.series.forEach(function (t) {
                        t.scale && (n = !0)
                    }), r = n ? u.clone(r) : r, this.series.active().forEach(function (e, t) {
                        if (e.scale) {
                            var n = r[t];
                            n && n.forEach(function (t) {
                                t.y = e.scale(t.y)
                            })
                        }
                    }), this.stackData.hooks.data.forEach(function (t) {
                        r = t.f.apply(a, [r])
                    }), !this.renderer.unstack) {
                        this._validateStackable();
                        var t = v.layout.stack();
                        t.offset(a.offset), e = t(r)
                    }
                    e = e || r, this.renderer.unstack && e.forEach(function (t) {
                        t.forEach(function (t) {
                            t.y0 = void 0 === t.y0 ? 0 : t.y0
                        })
                    }), this.stackData.hooks.after.forEach(function (t) {
                        e = t.f.apply(a, [r])
                    });
                    var i = 0;
                    return this.series.forEach(function (t) {
                        t.disabled || (t.stack = e[i++])
                    }), this.stackedData = e
                }, this._validateStackable = function () {
                    var e;
                    this.series.forEach(function (t) {
                        if ((e = e || t.data.length) && t.data.length != e) throw"stacked series cannot have differing numbers of points: " + e + " vs " + t.data.length + "; see Rickshaw.Series.fill()"
                    }, this)
                }, this.stackData.hooks = {data: [], after: []}, this._slice = function (t) {
                    if (this.window.xMin || this.window.xMax) {
                        var e = !0;
                        return this.window.xMin && t.x < this.window.xMin && (e = !1), this.window.xMax && t.x > this.window.xMax && (e = !1), e
                    }
                    return !0
                }, this.onUpdate = function (t) {
                    this.updateCallbacks.push(t)
                }, this.onConfigure = function (t) {
                    this.configureCallbacks.push(t)
                }, this.registerRenderer = function (t) {
                    this._renderers = this._renderers || {}, this._renderers[t.name] = t
                }, this.configure = function (e) {
                    this.config = this.config || {}, (e.width || e.height) && this.setSize(e), u.keys(this.defaults).forEach(function (t) {
                        this.config[t] = t in e ? e[t] : t in this ? this[t] : this.defaults[t]
                    }, this), u.keys(this.config).forEach(function (t) {
                        this[t] = this.config[t]
                    }, this), "stack" in e && (e.unstack = !e.stack);
                    var t = e.renderer || this.renderer && this.renderer.name || "stack";
                    this.setRenderer(t, e), this.configureCallbacks.forEach(function (t) {
                        t(e)
                    })
                }, this.setRenderer = function (t, e) {
                    if ("function" == typeof t) this.renderer = new t({graph: a}), this.registerRenderer(this.renderer); else {
                        if (!this._renderers[t]) throw"couldn't find renderer " + t;
                        this.renderer = this._renderers[t]
                    }
                    "object" == typeof e && this.renderer.configure(e)
                }, this.setSize = function (t) {
                    if ((t = t || {}).width && t.height) this.width = t.width, this.height = t.height; else {
                        if ("undefined" != typeof window) var e = window.getComputedStyle(this.element, null),
                            n = parseInt(e.getPropertyValue("width"), 10),
                            r = parseInt(e.getPropertyValue("height"), 10);
                        this.width = t.width || n || 400, this.height = t.height || r || 250
                    }
                    this.vis && this.vis.attr("width", this.width).attr("height", this.height)
                }, this.initialize(t)
            }, u.namespace("Rickshaw.Fixtures.Color"), u.Fixtures.Color = function () {
                this.schemes = {}, this.schemes.spectrum14 = ["#ecb796", "#dc8f70", "#b2a470", "#92875a", "#716c49", "#d2ed82", "#bbe468", "#a1d05d", "#e7cbe6", "#d8aad6", "#a888c2", "#9dc2d3", "#649eb9", "#387aa3"].reverse(), this.schemes.spectrum2000 = ["#57306f", "#514c76", "#646583", "#738394", "#6b9c7d", "#84b665", "#a7ca50", "#bfe746", "#e2f528", "#fff726", "#ecdd00", "#d4b11d", "#de8800", "#de4800", "#c91515", "#9a0000", "#7b0429", "#580839", "#31082b"], this.schemes.spectrum2001 = ["#2f243f", "#3c2c55", "#4a3768", "#565270", "#6b6b7c", "#72957f", "#86ad6e", "#a1bc5e", "#b8d954", "#d3e04e", "#ccad2a", "#cc8412", "#c1521d", "#ad3821", "#8a1010", "#681717", "#531e1e", "#3d1818", "#320a1b"], this.schemes.classic9 = ["#423d4f", "#4a6860", "#848f39", "#a2b73c", "#ddcb53", "#c5a32f", "#7d5836", "#963b20", "#7c2626", "#491d37", "#2f254a"].reverse(), this.schemes.httpStatus = {
                    503: "#ea5029",
                    502: "#d23f14",
                    500: "#bf3613",
                    410: "#efacea",
                    409: "#e291dc",
                    403: "#f457e8",
                    408: "#e121d2",
                    401: "#b92dae",
                    405: "#f47ceb",
                    404: "#a82a9f",
                    400: "#b263c6",
                    301: "#6fa024",
                    302: "#87c32b",
                    307: "#a0d84c",
                    304: "#28b55c",
                    200: "#1a4f74",
                    206: "#27839f",
                    201: "#52adc9",
                    202: "#7c979f",
                    203: "#a5b8bd",
                    204: "#c1cdd1"
                }, this.schemes.colorwheel = ["#b5b6a9", "#858772", "#785f43", "#96557e", "#4682b4", "#65b9ac", "#73c03a", "#cb513a"].reverse(), this.schemes.cool = ["#5e9d2f", "#73c03a", "#4682b4", "#7bc3b8", "#a9884e", "#c1b266", "#a47493", "#c09fb5"], this.schemes.munin = ["#00cc00", "#0066b3", "#ff8000", "#ffcc00", "#330099", "#990099", "#ccff00", "#ff0000", "#808080", "#008f00", "#00487d", "#b35a00", "#b38f00", "#6b006b", "#8fb300", "#b30000", "#bebebe", "#80ff80", "#80c9ff", "#ffc080", "#ffe680", "#aa80ff", "#ee00cc", "#ff8080", "#666600", "#ffbfff", "#00ffcc", "#cc6699", "#999900"]
            }, u.namespace("Rickshaw.Fixtures.RandomData"), u.Fixtures.RandomData = function (o) {
                o = o || 1;
                var e = 200, s = Math.floor((new Date).getTime() / 1e3);
                this.addData = function (t) {
                    var r = 100 * Math.random() + 15 + e, i = t[0].length, a = 1;
                    t.forEach(function (t) {
                        var e = 20 * Math.random(),
                            n = r / 25 + a++ + 15 * (Math.cos(i * a * 11 / 960) + 2) + 7 * (Math.cos(i / 7) + 2) + 1 * (Math.cos(i / 17) + 2);
                        t.push({x: i * o + s, y: n + e})
                    }), e = .85 * r
                }, this.removeData = function (t) {
                    t.forEach(function (t) {
                        t.shift()
                    }), s += o
                }
            }, u.namespace("Rickshaw.Fixtures.Time"), u.Fixtures.Time = function () {
                var e = this;
                this.months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], this.units = [{
                    name: "decade",
                    seconds: 315576e3,
                    formatter: function (t) {
                        return 10 * parseInt(t.getUTCFullYear() / 10, 10)
                    }
                }, {
                    name: "year", seconds: 31557600, formatter: function (t) {
                        return t.getUTCFullYear()
                    }
                }, {
                    name: "month", seconds: 2635200, formatter: function (t) {
                        return e.months[t.getUTCMonth()]
                    }
                }, {
                    name: "week", seconds: 604800, formatter: function (t) {
                        return e.formatDate(t)
                    }
                }, {
                    name: "day", seconds: 86400, formatter: function (t) {
                        return t.getUTCDate()
                    }
                }, {
                    name: "6 hour", seconds: 21600, formatter: function (t) {
                        return e.formatTime(t)
                    }
                }, {
                    name: "hour", seconds: 3600, formatter: function (t) {
                        return e.formatTime(t)
                    }
                }, {
                    name: "15 minute", seconds: 900, formatter: function (t) {
                        return e.formatTime(t)
                    }
                }, {
                    name: "minute", seconds: 60, formatter: function (t) {
                        return t.getUTCMinutes() + "m"
                    }
                }, {
                    name: "15 second", seconds: 15, formatter: function (t) {
                        return t.getUTCSeconds() + "s"
                    }
                }, {
                    name: "second", seconds: 1, formatter: function (t) {
                        return t.getUTCSeconds() + "s"
                    }
                }, {
                    name: "decisecond", seconds: .1, formatter: function (t) {
                        return t.getUTCMilliseconds() + "ms"
                    }
                }, {
                    name: "centisecond", seconds: .01, formatter: function (t) {
                        return t.getUTCMilliseconds() + "ms"
                    }
                }], this.unit = function (e) {
                    return this.units.filter(function (t) {
                        return e == t.name
                    }).shift()
                }, this.formatDate = function (t) {
                    return v.time.format("%b %e")(t)
                }, this.formatTime = function (t) {
                    return t.toUTCString().match(/(\d+:\d+):/)[1]
                }, this.ceil = function (t, e) {
                    var n, r;
                    if ("month" != e.name) return "year" == e.name ? (n = new Date(1e3 * t), Date.UTC(n.getUTCFullYear(), 0) / 1e3 == t ? t : (r = n.getUTCFullYear() + 1, Date.UTC(r, 0) / 1e3)) : Math.ceil(t / e.seconds) * e.seconds;
                    if (n = new Date(1e3 * t), Date.UTC(n.getUTCFullYear(), n.getUTCMonth()) / 1e3 == t) return t;
                    r = n.getUTCFullYear();
                    var i = n.getUTCMonth();
                    return 11 == i ? (i = 0, r += 1) : i += 1, Date.UTC(r, i) / 1e3
                }
            }, u.namespace("Rickshaw.Fixtures.Time.Local"), u.Fixtures.Time.Local = function () {
                var e = this;
                this.months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], this.units = [{
                    name: "decade",
                    seconds: 315576e3,
                    formatter: function (t) {
                        return 10 * parseInt(t.getFullYear() / 10, 10)
                    }
                }, {
                    name: "year", seconds: 31557600, formatter: function (t) {
                        return t.getFullYear()
                    }
                }, {
                    name: "month", seconds: 2635200, formatter: function (t) {
                        return e.months[t.getMonth()]
                    }
                }, {
                    name: "week", seconds: 604800, formatter: function (t) {
                        return e.formatDate(t)
                    }
                }, {
                    name: "day", seconds: 86400, formatter: function (t) {
                        return t.getDate()
                    }
                }, {
                    name: "6 hour", seconds: 21600, formatter: function (t) {
                        return e.formatTime(t)
                    }
                }, {
                    name: "hour", seconds: 3600, formatter: function (t) {
                        return e.formatTime(t)
                    }
                }, {
                    name: "15 minute", seconds: 900, formatter: function (t) {
                        return e.formatTime(t)
                    }
                }, {
                    name: "minute", seconds: 60, formatter: function (t) {
                        return t.getMinutes()
                    }
                }, {
                    name: "15 second", seconds: 15, formatter: function (t) {
                        return t.getSeconds() + "s"
                    }
                }, {
                    name: "second", seconds: 1, formatter: function (t) {
                        return t.getSeconds() + "s"
                    }
                }, {
                    name: "decisecond", seconds: .1, formatter: function (t) {
                        return t.getMilliseconds() + "ms"
                    }
                }, {
                    name: "centisecond", seconds: .01, formatter: function (t) {
                        return t.getMilliseconds() + "ms"
                    }
                }], this.unit = function (e) {
                    return this.units.filter(function (t) {
                        return e == t.name
                    }).shift()
                }, this.formatDate = function (t) {
                    return v.time.format("%b %e")(t)
                }, this.formatTime = function (t) {
                    return t.toString().match(/(\d+:\d+):/)[1]
                }, this.ceil = function (t, e) {
                    var n, r, i;
                    if ("day" == e.name) {
                        var a = new Date(1e3 * (t + e.seconds - 1)), o = new Date(0);
                        return o.setFullYear(a.getFullYear()), o.setMonth(a.getMonth()), o.setDate(a.getDate()), o.setMilliseconds(0), o.setSeconds(0), o.setMinutes(0), o.setHours(0), o.getTime() / 1e3
                    }
                    if ("month" != e.name) return "year" == e.name ? (n = new Date(1e3 * t), new Date(n.getUTCFullYear(), 0).getTime() / 1e3 == t ? t : (r = n.getFullYear() + 1, new Date(r, 0).getTime() / 1e3)) : (i = 60 * new Date(1e3 * t).getTimezoneOffset(), Math.ceil((t - i) / e.seconds) * e.seconds + i);
                    if (n = new Date(1e3 * t), new Date(n.getFullYear(), n.getMonth()).getTime() / 1e3 == t) return t;
                    r = n.getFullYear();
                    var s = n.getMonth();
                    return 11 == s ? (s = 0, r += 1) : s += 1, new Date(r, s).getTime() / 1e3
                }
            }, u.namespace("Rickshaw.Fixtures.Number"), u.Fixtures.Number.formatKMBT = function (t) {
                var e = Math.abs(t);
                return 1e12 <= e ? t / 1e12 + "T" : 1e9 <= e ? t / 1e9 + "B" : 1e6 <= e ? t / 1e6 + "M" : 1e3 <= e ? t / 1e3 + "K" : e < 1 && 0 < e ? t.toFixed(2) : 0 === e ? "" : t
            }, u.Fixtures.Number.formatBase1024KMGTP = function (t) {
                var e = Math.abs(t);
                return 0x4000000000000 <= e ? t / 0x4000000000000 + "P" : 1099511627776 <= e ? t / 1099511627776 + "T" : 1073741824 <= e ? t / 1073741824 + "G" : 1048576 <= e ? t / 1048576 + "M" : 1024 <= e ? t / 1024 + "K" : e < 1 && 0 < e ? t.toFixed(2) : 0 === e ? "" : t
            }, u.namespace("Rickshaw.Color.Palette"), u.Color.Palette = function (t) {
                var e = new u.Fixtures.Color;
                if (t = t || {}, this.schemes = {}, this.scheme = e.schemes[t.scheme] || t.scheme || e.schemes.colorwheel, this.runningIndex = 0, this.generatorIndex = 0, t.interpolatedStopCount) {
                    var n, r, i = this.scheme.length - 1, a = [];
                    for (n = 0; n < i; n++) {
                        a.push(this.scheme[n]);
                        var o = v.interpolateHsl(this.scheme[n], this.scheme[n + 1]);
                        for (r = 1; r < t.interpolatedStopCount; r++) a.push(o(1 / t.interpolatedStopCount * r))
                    }
                    a.push(this.scheme[this.scheme.length - 1]), this.scheme = a
                }
                this.rotateCount = this.scheme.length, this.color = function (t) {
                    return this.scheme[t] || this.scheme[this.runningIndex++] || this.interpolateColor() || "#808080"
                }, this.interpolateColor = function () {
                    var t;
                    if (Array.isArray(this.scheme)) return this.generatorIndex == 2 * this.rotateCount - 1 ? (t = v.interpolateHsl(this.scheme[this.generatorIndex], this.scheme[0])(.5), this.generatorIndex = 0, this.rotateCount *= 2) : (t = v.interpolateHsl(this.scheme[this.generatorIndex], this.scheme[this.generatorIndex + 1])(.5), this.generatorIndex++), this.scheme.push(t), t
                }
            }, u.namespace("Rickshaw.Graph.Ajax"), u.Graph.Ajax = u.Class.create({
                initialize: function (t) {
                    this.dataURL = t.dataURL, this.onData = t.onData || function (t) {
                        return t
                    }, this.onComplete = t.onComplete || function () {
                    }, this.onError = t.onError || function () {
                    }, this.args = t, this.request()
                }, request: function () {
                    jQuery.ajax({
                        url: this.dataURL,
                        dataType: "json",
                        success: this.success.bind(this),
                        error: this.error.bind(this)
                    })
                }, error: function () {
                    console.log("error loading dataURL: " + this.dataURL), this.onError(this)
                }, success: function (t, e) {
                    t = this.onData(t), this.args.series = this._splice({
                        data: t,
                        series: this.args.series
                    }), this.graph = this.graph || new u.Graph(this.args), this.graph.render(), this.onComplete(this)
                }, _splice: function (t) {
                    var e = t.data, n = t.series;
                    return t.series ? (n.forEach(function (n) {
                        var r = n.key || n.name;
                        if (!r) throw"series needs a key or a name";
                        e.forEach(function (e) {
                            var t = e.key || e.name;
                            if (!t) throw"data needs a key or a name";
                            r == t && ["color", "name", "data"].forEach(function (t) {
                                e[t] && (n[t] = e[t])
                            })
                        })
                    }), n) : e
                }
            }), u.namespace("Rickshaw.Graph.Annotate"), u.Graph.Annotate = function (t) {
                this.graph = t.graph, this.elements = {timeline: t.element};
                var s = this;
                this.data = {}, this.elements.timeline.classList.add("rickshaw_annotation_timeline"), this.add = function (t, e, n) {
                    s.data[t] = s.data[t] || {boxes: []}, s.data[t].boxes.push({content: e, end: n})
                }, this.update = function () {
                    u.keys(s.data).forEach(function (t) {
                        var a = s.data[t], o = s.graph.x(t);
                        if (o < 0 || o > s.graph.x.range()[1]) return a.element && (a.line.classList.add("offscreen"), a.element.style.display = "none"), void a.boxes.forEach(function (t) {
                            t.rangeElement && t.rangeElement.classList.add("offscreen")
                        });
                        if (!a.element) {
                            var e = a.element = document.createElement("div");
                            e.classList.add("annotation"), this.elements.timeline.appendChild(e), e.addEventListener("click", function (t) {
                                e.classList.toggle("active"), a.line.classList.toggle("active"), a.boxes.forEach(function (t) {
                                    t.rangeElement && t.rangeElement.classList.toggle("active")
                                })
                            }, !1)
                        }
                        a.element.style.left = o + "px", a.element.style.display = "block", a.boxes.forEach(function (t) {
                            var e = t.element;
                            if (e || ((e = t.element = document.createElement("div")).classList.add("content"), e.innerHTML = t.content, a.element.appendChild(e), a.line = document.createElement("div"), a.line.classList.add("annotation_line"), s.graph.element.appendChild(a.line), t.end && (t.rangeElement = document.createElement("div"), t.rangeElement.classList.add("annotation_range"), s.graph.element.appendChild(t.rangeElement))), t.end) {
                                var n = o, r = Math.min(s.graph.x(t.end), s.graph.x.range()[1]);
                                r < n && (r = o, n = Math.max(s.graph.x(t.end), s.graph.x.range()[0]));
                                var i = r - n;
                                t.rangeElement.style.left = n + "px", t.rangeElement.style.width = i + "px", t.rangeElement.classList.remove("offscreen")
                            }
                            a.line.classList.remove("offscreen"), a.line.style.left = o + "px"
                        })
                    }, this)
                }, this.graph.onUpdate(function () {
                    s.update()
                })
            }, u.namespace("Rickshaw.Graph.Axis.Time"), u.Graph.Axis.Time = function (t) {
                var r = this;
                this.graph = t.graph, this.elements = [], this.ticksTreatment = t.ticksTreatment || "plain", this.fixedTimeUnit = t.timeUnit;
                var s = t.timeFixture || new u.Fixtures.Time;
                this.appropriateTimeUnit = function () {
                    var e, t = s.units, n = this.graph.x.domain(), r = n[1] - n[0];
                    return t.forEach(function (t) {
                        2 <= Math.floor(r / t.seconds) && (e = e || t)
                    }), e || s.units[s.units.length - 1]
                }, this.tickOffsets = function () {
                    for (var t = this.graph.x.domain(), e = this.fixedTimeUnit || this.appropriateTimeUnit(), n = Math.ceil((t[1] - t[0]) / e.seconds), r = t[0], i = [], a = 0; a < n; a++) {
                        var o = s.ceil(r, e);
                        r = o + e.seconds / 2, i.push({value: o, unit: e})
                    }
                    return i
                }, this.render = function () {
                    this.elements.forEach(function (t) {
                        t.parentNode.removeChild(t)
                    }), this.elements = [], this.tickOffsets().forEach(function (t) {
                        if (!(r.graph.x(t.value) > r.graph.x.range()[1])) {
                            var e = document.createElement("div");
                            e.style.left = r.graph.x(t.value) + "px", e.classList.add("x_tick"), e.classList.add(r.ticksTreatment);
                            var n = document.createElement("div");
                            n.classList.add("title"), n.innerHTML = t.unit.formatter(new Date(1e3 * t.value)), e.appendChild(n), r.graph.element.appendChild(e), r.elements.push(e)
                        }
                    })
                }, this.graph.onUpdate(function () {
                    r.render()
                })
            }, u.namespace("Rickshaw.Graph.Axis.X"), u.Graph.Axis.X = function (a) {
                var e = this;
                this.initialize = function (t) {
                    this.graph = t.graph, this.orientation = t.orientation || "top", this.pixelsPerTick = t.pixelsPerTick || 75, t.ticks && (this.staticTicks = t.ticks), t.tickValues && (this.tickValues = t.tickValues), this.tickSize = t.tickSize || 4, this.ticksTreatment = t.ticksTreatment || "plain", t.element ? (this.element = t.element, this._discoverSize(t.element, t), this.vis = v.select(t.element).append("svg:svg").attr("height", this.height).attr("width", this.width).attr("class", "rickshaw_graph x_axis_d3"), this.element = this.vis[0][0], this.element.style.position = "relative", this.setSize({
                        width: t.width,
                        height: t.height
                    })) : this.vis = this.graph.vis, this.graph.onUpdate(function () {
                        e.render()
                    })
                }, this.setSize = function (t) {
                    if (t = t || {}, this.element) {
                        this._discoverSize(this.element.parentNode, t), this.vis.attr("height", this.height).attr("width", 1.1 * this.width);
                        var e = Math.floor(.1 * this.width / 2);
                        this.element.style.left = -1 * e + "px"
                    }
                }, this.render = function () {
                    void 0 !== this._renderWidth && this.graph.width !== this._renderWidth && this.setSize({auto: !0});
                    var t = v.svg.axis().scale(this.graph.x).orient(this.orientation);
                    t.tickFormat(a.tickFormat || function (t) {
                        return t
                    }), this.tickValues && t.tickValues(this.tickValues), this.ticks = this.staticTicks || Math.floor(this.graph.width / this.pixelsPerTick);
                    var e, n = Math.floor(.1 * this.width / 2) || 0,
                        r = "bar" == this.graph.renderer.name && Math.ceil(.95 * this.graph.width / this.graph.series[0].data.length / 2) || 0;
                    e = "top" == this.orientation ? "translate(" + (n + r) + "," + (this.height || this.graph.height) + ")" : "translate(" + (n + r) + ", 0)", this.element && this.vis.selectAll("*").remove(), this.vis.append("svg:g").attr("class", ["x_ticks_d3", this.ticksTreatment].join(" ")).attr("transform", e).call(t.ticks(this.ticks).tickSubdivide(0).tickSize(this.tickSize));
                    var i = ("bottom" == this.orientation ? 1 : -1) * this.graph.height;
                    this.graph.vis.append("svg:g").attr("class", "x_grid_d3").call(t.ticks(this.ticks).tickSubdivide(0).tickSize(i)).selectAll("text").each(function () {
                        this.parentNode.setAttribute("data-x-value", this.textContent)
                    }), this._renderHeight = this.graph.height
                }, this._discoverSize = function (t, e) {
                    if ("undefined" != typeof window) {
                        var n = window.getComputedStyle(t, null), r = parseInt(n.getPropertyValue("height"), 10);
                        if (!e.auto) var i = parseInt(n.getPropertyValue("width"), 10)
                    }
                    this.width = 1.1 * (e.width || i || this.graph.width), this.height = e.height || r || 40
                }, this.initialize(a)
            }, u.namespace("Rickshaw.Graph.Axis.Y"), u.Graph.Axis.Y = u.Class.create({
                initialize: function (t) {
                    this.graph = t.graph, this.orientation = t.orientation || "right", this.pixelsPerTick = t.pixelsPerTick || 75, t.ticks && (this.staticTicks = t.ticks), t.tickValues && (this.tickValues = t.tickValues), this.tickSize = t.tickSize || 4, this.ticksTreatment = t.ticksTreatment || "plain", this.tickFormat = t.tickFormat || function (t) {
                        return t
                    }, this.berthRate = .1, t.element ? (this.element = t.element, this.vis = v.select(t.element).append("svg:svg").attr("class", "rickshaw_graph y_axis"), this.element = this.vis[0][0], this.element.style.position = "relative", this.setSize({
                        width: t.width,
                        height: t.height
                    })) : this.vis = this.graph.vis;
                    var e = this;
                    this.graph.onUpdate(function () {
                        e.render()
                    })
                }, setSize: function (t) {
                    if (t = t || {}, this.element) {
                        if ("undefined" != typeof window) {
                            var e = window.getComputedStyle(this.element.parentNode, null),
                                n = parseInt(e.getPropertyValue("width"), 10);
                            if (!t.auto) var r = parseInt(e.getPropertyValue("height"), 10)
                        }
                        this.width = t.width || n || this.graph.width * this.berthRate, this.height = t.height || r || this.graph.height, this.vis.attr("width", this.width).attr("height", this.height * (1 + this.berthRate));
                        var i = this.height * this.berthRate;
                        "left" == this.orientation && (this.element.style.top = -1 * i + "px")
                    }
                }, render: function () {
                    void 0 !== this._renderHeight && this.graph.height !== this._renderHeight && this.setSize({auto: !0}), this.ticks = this.staticTicks || Math.floor(this.graph.height / this.pixelsPerTick);
                    var t = this._drawAxis(this.graph.y);
                    this._drawGrid(t), this._renderHeight = this.graph.height
                }, _drawAxis: function (t) {
                    var e = v.svg.axis().scale(t).orient(this.orientation);
                    if (e.tickFormat(this.tickFormat), this.tickValues && e.tickValues(this.tickValues), "left" == this.orientation) var n = this.height * this.berthRate,
                        r = "translate(" + this.width + ", " + n + ")";
                    return this.element && this.vis.selectAll("*").remove(), this.vis.append("svg:g").attr("class", ["y_ticks", this.ticksTreatment].join(" ")).attr("transform", r).call(e.ticks(this.ticks).tickSubdivide(0).tickSize(this.tickSize)), e
                }, _drawGrid: function (t) {
                    var e = ("right" == this.orientation ? 1 : -1) * this.graph.width;
                    this.graph.vis.append("svg:g").attr("class", "y_grid").call(t.ticks(this.ticks).tickSubdivide(0).tickSize(e)).selectAll("text").each(function () {
                        this.parentNode.setAttribute("data-y-value", this.textContent)
                    })
                }
            }), u.namespace("Rickshaw.Graph.Axis.Y.Scaled"), u.Graph.Axis.Y.Scaled = u.Class.create(u.Graph.Axis.Y, {
                initialize: function ($super, t) {
                    if (void 0 === t.scale) throw new Error("Scaled requires scale");
                    this.scale = t.scale, void 0 === t.grid ? this.grid = !0 : this.grid = t.grid, $super(t)
                }, _drawAxis: function ($super, t) {
                    var e = this.scale.domain(), n = this.graph.renderer.domain().y,
                        r = [Math.min.apply(Math, e), Math.max.apply(Math, e)],
                        i = v.scale.linear().domain([0, 1]).range(r), a = [i(n[0]), i(n[1])],
                        o = v.scale.linear().domain(r).range(a);
                    return $super(this.scale.copy().domain(e.map(o)).range(t.range()))
                }, _drawGrid: function ($super, t) {
                    this.grid && $super(t)
                }
            }), u.namespace("Rickshaw.Graph.Behavior.Series.Highlight"), u.Graph.Behavior.Series.Highlight = function (t) {
                this.graph = t.graph, this.legend = t.legend;
                var i = this, a = {}, e = null, o = t.disabledColor || function (t) {
                    return v.interpolateRgb(t, v.rgb("#d8d8d8"))(.8).toString()
                };
                this.addHighlightEvents = function (r) {
                    r.element.addEventListener("mouseover", function (t) {
                        e || (e = r, i.legend.lines.forEach(function (t) {
                            if (r !== t) a[t.series.name] = a[t.series.name] || t.series.color, t.series.color = o(t.series.color); else if (i.graph.renderer.unstack && (!t.series.renderer || t.series.renderer.unstack)) {
                                var e = i.graph.series.indexOf(t.series);
                                t.originalIndex = e;
                                var n = i.graph.series.splice(e, 1)[0];
                                i.graph.series.push(n)
                            }
                        }), i.graph.update())
                    }, !1), r.element.addEventListener("mouseout", function (t) {
                        e && (e = null, i.legend.lines.forEach(function (t) {
                            if (r === t && t.hasOwnProperty("originalIndex")) {
                                var e = i.graph.series.pop();
                                i.graph.series.splice(t.originalIndex, 0, e), delete t.originalIndex
                            }
                            a[t.series.name] && (t.series.color = a[t.series.name])
                        }), i.graph.update())
                    }, !1)
                }, this.legend && this.legend.lines.forEach(function (t) {
                    i.addHighlightEvents(t)
                })
            }, u.namespace("Rickshaw.Graph.Behavior.Series.Order"), u.Graph.Behavior.Series.Order = function (t) {
                this.graph = t.graph, this.legend = t.legend;
                var i = this;
                if (void 0 === window.jQuery) throw"couldn't find jQuery at window.jQuery";
                if (void 0 === window.jQuery.ui) throw"couldn't find jQuery UI at window.jQuery.ui";
                jQuery(function () {
                    jQuery(i.legend.list).sortable({
                        containment: "parent",
                        tolerance: "pointer",
                        update: function (t, e) {
                            var n = [];
                            jQuery(i.legend.list).find("li").each(function (t, e) {
                                e.series && n.push(e.series)
                            });
                            for (var r = i.graph.series.length - 1; 0 <= r; r--) i.graph.series[r] = n.shift();
                            i.graph.update()
                        }
                    }), jQuery(i.legend.list).disableSelection()
                }), this.graph.onUpdate(function () {
                    var t = window.getComputedStyle(i.legend.element).height;
                    i.legend.element.style.height = t
                })
            }, u.namespace("Rickshaw.Graph.Behavior.Series.Toggle"), u.Graph.Behavior.Series.Toggle = function (t) {
                this.graph = t.graph, this.legend = t.legend;
                var a = this;
                this.addAnchor = function (i) {
                    var t = document.createElement("a");
                    t.innerHTML = "&#10004;", t.classList.add("action"), i.element.insertBefore(t, i.element.firstChild), t.onclick = function (t) {
                        if (i.series.disabled) i.series.enable(), i.element.classList.remove("disabled"); else {
                            if (this.graph.series.filter(function (t) {
                                return !t.disabled
                            }).length <= 1) return;
                            i.series.disable(), i.element.classList.add("disabled")
                        }
                        a.graph.update()
                    }.bind(this), i.element.getElementsByTagName("span")[0].onclick = function (t) {
                        var e = i.series.disabled;
                        if (!e) for (var n = 0; n < a.legend.lines.length; n++) {
                            var r = a.legend.lines[n];
                            if (i.series === r.series) ; else if (!r.series.disabled) {
                                e = !0;
                                break
                            }
                        }
                        e ? (i.series.enable(), i.element.classList.remove("disabled"), a.legend.lines.forEach(function (t) {
                            i.series === t.series || (t.series.disable(), t.element.classList.add("disabled"))
                        })) : a.legend.lines.forEach(function (t) {
                            t.series.enable(), t.element.classList.remove("disabled")
                        }), a.graph.update()
                    }
                }, this.legend && ("undefined" != typeof jQuery && jQuery(this.legend.list).sortable && jQuery(this.legend.list).sortable({
                    start: function (t, e) {
                        e.item.bind("no.onclick", function (t) {
                            t.preventDefault()
                        })
                    }, stop: function (t, e) {
                        setTimeout(function () {
                            e.item.unbind("no.onclick")
                        }, 250)
                    }
                }), this.legend.lines.forEach(function (t) {
                    a.addAnchor(t)
                })), this._addBehavior = function () {
                    this.graph.series.forEach(function (t) {
                        t.disable = function () {
                            if (a.graph.series.length <= 1) throw"only one series left";
                            t.disabled = !0
                        }, t.enable = function () {
                            t.disabled = !1
                        }
                    })
                }, this._addBehavior(), this.updateBehaviour = function () {
                    this._addBehavior()
                }
            }, u.namespace("Rickshaw.Graph.DragZoom"), u.Graph.DragZoom = u.Class.create({
                initialize: function (t) {
                    if (!t || !t.graph) throw new Error("Rickshaw.Graph.DragZoom needs a reference to a graph");
                    var e = {
                        opacity: .5, fill: "steelblue", minimumTimeSelection: 60, callback: function () {
                        }
                    };
                    this.graph = t.graph, this.svg = v.select(this.graph.element).select("svg"), this.svgWidth = parseInt(this.svg.attr("width"), 10), this.opacity = t.opacity || e.opacity, this.fill = t.fill || e.fill, this.minimumTimeSelection = t.minimumTimeSelection || e.minimumTimeSelection, this.callback = t.callback || e.callback, this.registerMouseEvents()
                }, registerMouseEvents: function () {
                    var r, a = this, e = 27, o = {startDt: null, stopDt: null, startPX: null, stopPX: null};

                    function onMouseup(t, e) {
                        o.stopDt = pointAsDate(v.event);
                        var n = [o.startDt, o.stopDt].sort(compareNumbers);
                        a.graph.window.xMin = n[0], a.graph.window.xMax = n[1];
                        var r = a.graph.window.xMax, i = a.graph.window.xMax - a.graph.window.xMin;
                        reset(this), i < a.minimumTimeSelection || isNaN(i) || (a.graph.update(), a.callback({
                            range: i,
                            endTime: r
                        }))
                    }

                    function onMousemove() {
                        var t = o.stopPX = v.event.offsetX || v.event.layerX;
                        if (!(t > a.svgWidth - 1 || t < 1)) {
                            var e = [o.startPX, t].sort(compareNumbers), n = e[1] - e[0];
                            if (isNaN(n)) return reset(this);
                            r.attr("fill", a.fill).attr("x", e[0]).attr("width", n)
                        }
                    }

                    function reset(t) {
                        v.select(t).on("mousemove", null), v.select(document).on("mouseup", null), o = {}, r.remove()
                    }

                    function compareNumbers(t, e) {
                        return t - e
                    }

                    function pointAsDate(t) {
                        return Math.floor(a.graph.x.invert(t.offsetX || t.layerX))
                    }

                    this.svg.on("mousedown", function () {
                        var t = v.select(this);
                        r = t.append("rect").style("opacity", a.opacity).attr("y", 0).attr("height", "100%"), v.event.preventDefault ? v.event.preventDefault() : v.event.returnValue = !1, o.target = v.event.target, o.startDt = pointAsDate(v.event), o.startPX = v.event.offsetX || v.event.layerX, t.on("mousemove", onMousemove), v.select(document).on("mouseup", onMouseup), v.select(document).on("keyup", function () {
                            v.event.keyCode === e && reset(this)
                        })
                    })
                }
            }), u.namespace("Rickshaw.Graph.HoverDetail"), u.Graph.HoverDetail = u.Class.create({
                initialize: function (t) {
                    var e = this.graph = t.graph;
                    this.xFormatter = t.xFormatter || function (t) {
                        return new Date(1e3 * t).toUTCString()
                    }, this.yFormatter = t.yFormatter || function (t) {
                        return null === t ? t : t.toFixed(2)
                    };
                    var n = this.element = document.createElement("div");
                    n.className = "detail inactive", this.visible = !0, e.element.appendChild(n), this.lastEvent = null, this._addListeners(), this.onShow = t.onShow, this.onHide = t.onHide, this.onRender = t.onRender, this.formatter = t.formatter || this.formatter
                }, formatter: function (t, e, n, r, i, a) {
                    return t.name + ":&nbsp;" + i
                }, update: function (t) {
                    if ((t = t || this.lastEvent) && (this.lastEvent = t).target.nodeName.match(/^(path|svg|rect|circle)$/)) {
                        var d, f = this.graph, e = f.element.getBoundingClientRect(), g = t.clientX - e.left,
                            p = t.clientY - e.top, _ = 0, m = [];
                        if (this.graph.series.active().forEach(function (t) {
                            var e = this.graph.stackedData[_++];
                            if (e.length) {
                                var n = f.x.invert(g),
                                    r = v.scale.linear().domain([e[0].x, e.slice(-1)[0].x]).range([0, e.length - 1]),
                                    i = Math.round(r(n));
                                i == e.length - 1 && i--;
                                for (var a = Math.min(i || 0, e.length - 1), o = i; o < e.length - 1 && e[o] && e[o + 1];) {
                                    if (e[o].x <= n && e[o + 1].x > n) {
                                        a = Math.abs(n - e[o].x) < Math.abs(n - e[o + 1].x) ? o : o + 1;
                                        break
                                    }
                                    e[o + 1].x <= n ? o++ : o--
                                }
                                a < 0 && (a = 0);
                                var s = e[a],
                                    u = Math.sqrt(Math.pow(Math.abs(f.x(s.x) - g), 2) + Math.pow(Math.abs(f.y(s.y + s.y0) - p), 2)),
                                    c = t.xFormatter || this.xFormatter, l = t.yFormatter || this.yFormatter, h = {
                                        formattedXValue: c(s.x),
                                        formattedYValue: l(t.scale ? t.scale.invert(s.y) : s.y),
                                        series: t,
                                        value: s,
                                        distance: u,
                                        order: _,
                                        name: t.name
                                    };
                                (!d || u < d.distance) && (d = h), m.push(h)
                            }
                        }, this), d) {
                            d.active = !0;
                            var n = d.value.x, r = d.formattedXValue;
                            this.element.innerHTML = "", this.element.style.left = f.x(n) + "px", this.visible && this.render({
                                points: m,
                                detail: m,
                                mouseX: g,
                                mouseY: p,
                                formattedXValue: r,
                                domainX: n
                            })
                        }
                    }
                }, hide: function () {
                    this.visible = !1, this.element.classList.add("inactive"), "function" == typeof this.onHide && this.onHide()
                }, show: function () {
                    this.visible = !0, this.element.classList.remove("inactive"), "function" == typeof this.onShow && this.onShow()
                }, render: function (t) {
                    var e = this.graph, n = t.points.filter(function (t) {
                        return t.active
                    }).shift();
                    if (null !== n.value.y) {
                        var r = n.formattedXValue, i = n.formattedYValue;
                        this.element.innerHTML = "", this.element.style.left = e.x(n.value.x) + "px";
                        var a = document.createElement("div");
                        a.className = "x_label", a.innerHTML = r, this.element.appendChild(a);
                        var o = document.createElement("div");
                        o.className = "item";
                        var s = n.series, u = s.scale ? s.scale.invert(n.value.y) : n.value.y;
                        o.innerHTML = this.formatter(s, n.value.x, u, r, i, n), o.style.top = this.graph.y(n.value.y0 + n.value.y) + "px", this.element.appendChild(o);
                        var c = document.createElement("div");
                        c.className = "dot", c.style.top = o.style.top, c.style.borderColor = s.color, this.element.appendChild(c), n.active && (o.classList.add("active"), c.classList.add("active"));
                        var l = [a, o];
                        l.forEach(function (t) {
                            t.classList.add("left")
                        }), this.show();
                        var h = this._calcLayoutError(l);
                        0 < h && (l.forEach(function (t) {
                            t.classList.remove("left"), t.classList.add("right")
                        }), h < this._calcLayoutError(l) && l.forEach(function (t) {
                            t.classList.remove("right"), t.classList.add("left")
                        })), "function" == typeof this.onRender && this.onRender(t)
                    }
                }, _calcLayoutError: function (t) {
                    var n = this.element.parentNode.getBoundingClientRect(), r = 0;
                    return t.forEach(function (t) {
                        var e = t.getBoundingClientRect();
                        e.width && (e.right > n.right && (r += e.right - n.right), e.left < n.left && (r += n.left - e.left))
                    }), r
                }, _addListeners: function () {
                    this.mousemoveListener = function (t) {
                        this.visible = !0, this.update(t)
                    }.bind(this), this.graph.element.addEventListener("mousemove", this.mousemoveListener, !1), this.graph.onUpdate(function () {
                        this.update()
                    }.bind(this)), this.mouseoutListener = function (t) {
                        !t.relatedTarget || t.relatedTarget.compareDocumentPosition(this.graph.element) & Node.DOCUMENT_POSITION_CONTAINS || this.hide()
                    }.bind(this), this.graph.element.addEventListener("mouseout", this.mouseoutListener, !1)
                }, _removeListeners: function () {
                    this.mousemoveListener && this.graph.element.removeEventListener("mousemove", this.mousemoveListener, !1), this.mouseoutListener && this.graph.element.removeEventListener("mouseout", this.mouseoutListener, !1)
                }
            }), u.namespace("Rickshaw.Graph.JSONP"), u.Graph.JSONP = u.Class.create(u.Graph.Ajax, {
                request: function () {
                    jQuery.ajax({
                        url: this.dataURL,
                        dataType: "jsonp",
                        success: this.success.bind(this),
                        error: this.error.bind(this)
                    })
                }
            }), u.namespace("Rickshaw.Graph.Legend"), u.Graph.Legend = u.Class.create({
                className: "rickshaw_legend", initialize: function (t) {
                    this.element = t.element, this.graph = t.graph, this.naturalOrder = t.naturalOrder, this.element.classList.add(this.className), this.list = document.createElement("ul"), this.element.appendChild(this.list), this.render(), this.graph.onUpdate(function () {
                    })
                }, render: function () {
                    for (var e = this; this.list.firstChild;) this.list.removeChild(this.list.firstChild);
                    this.lines = [];
                    var t = this.graph.series.map(function (t) {
                        return t
                    });
                    this.naturalOrder || (t = t.reverse()), t.forEach(function (t) {
                        e.addLine(t)
                    })
                }, addLine: function (t) {
                    var e = document.createElement("li");
                    e.className = "line", t.disabled && (e.className += " disabled"), t.className && v.select(e).classed(t.className, !0);
                    var n = document.createElement("div");
                    n.className = "swatch", n.style.backgroundColor = t.color, e.appendChild(n);
                    var r = document.createElement("span");
                    r.className = "label", r.innerHTML = t.name, e.appendChild(r), this.list.appendChild(e), (e.series = t).noLegend && (e.style.display = "none");
                    var i = {element: e, series: t};
                    return this.shelving && (this.shelving.addAnchor(i), this.shelving.updateBehaviour()), this.highlighter && this.highlighter.addHighlightEvents(i), this.lines.push(i), e
                }
            }), u.namespace("Rickshaw.Graph.RangeSlider"), u.Graph.RangeSlider = u.Class.create({
                initialize: function (t) {
                    var e = jQuery, n = this, r = (this.element = t.element, this.graphs = t.graphs);
                    r || (r = this.graph = t.graph), r.constructor !== Array && (r = [r]), this.graph = r[0], this.slideCallbacks = [], this.build();
                    for (var i = 0; i < r.length; i++) r[i].onUpdate(function () {
                        n.update()
                    }.bind(n)), function (t) {
                        r[t].onConfigure(function () {
                            e(this.element)[0].style.width = r[t].width + "px"
                        }.bind(n))
                    }(i)
                }, build: function () {
                    var t, e = this.element, n = jQuery, r = this, i = this.graphs || this.graph;
                    i.constructor !== Array && (i = [i]), this.graph = i[0], t = i[0].dataDomain(), n(function () {
                        n(e).slider({
                            range: !0, min: t[0], max: t[1], values: [t[0], t[1]], start: function (t, e) {
                                r.slideStarted({event: t, ui: e})
                            }, stop: function (t, e) {
                                r.slideFinished({event: t, ui: e})
                            }, slide: function (t, e) {
                                if (r.slideShouldUpdate(t, e) && !(e.values[1] <= e.values[0])) for (var n = 0; n < i.length; n++) r.processSlideChange({
                                    event: t,
                                    ui: e,
                                    graph: i[n]
                                })
                            }
                        })
                    }), i[0].onConfigure(function () {
                        n(this.element)[0].style.width = i[0].width + "px"
                    }.bind(this))
                }, update: function () {
                    var t = this.element, e = this.graph, n = jQuery, r = n(t).slider("option", "values"),
                        i = e.dataDomain();
                    n(t).slider("option", "min", i[0]), n(t).slider("option", "max", i[1]), null == e.window.xMin && (r[0] = i[0]), null == e.window.xMax && (r[1] = i[1]), n(t).slider("option", "values", r)
                }, onSlide: function (t) {
                    this.slideCallbacks.push(t)
                }, processSlideChange: function (t) {
                    t.event;
                    var e = t.ui, n = t.graph;
                    n.window.xMin = e.values[0], n.window.xMax = e.values[1], n.update();
                    var r = n.dataDomain();
                    r[0] == e.values[0] && (n.window.xMin = void 0), r[1] == e.values[1] && (n.window.xMax = void 0), this.slideCallbacks.forEach(function (t) {
                        t(n, n.window.xMin, n.window.xMax)
                    })
                }, slideShouldUpdate: function () {
                    return !0
                }, slideStarted: function () {
                }, slideFinished: function () {
                }
            }), u.namespace("Rickshaw.Graph.RangeSlider.Preview"), u.Graph.RangeSlider.Preview = u.Class.create({
                initialize: function (t) {
                    if (!t.element) throw"Rickshaw.Graph.RangeSlider.Preview needs a reference to an element";
                    if (!t.graph && !t.graphs) throw"Rickshaw.Graph.RangeSlider.Preview needs a reference to an graph or an array of graphs";
                    this.element = t.element, this.element.style.position = "relative", this.graphs = t.graph ? [t.graph] : t.graphs, this.defaults = {
                        height: 75,
                        width: 400,
                        gripperColor: void 0,
                        frameTopThickness: 3,
                        frameHandleThickness: 10,
                        frameColor: "#d4d4d4",
                        frameOpacity: 1,
                        minimumFrameWidth: 0,
                        heightRatio: .2
                    }, this.heightRatio = t.heightRatio || this.defaults.heightRatio, this.defaults.gripperColor = v.rgb(this.defaults.frameColor).darker().toString(), this.configureCallbacks = [], this.slideCallbacks = [], this.previews = [], t.width || (this.widthFromGraph = !0), t.height || (this.heightFromGraph = !0), (this.widthFromGraph || this.heightFromGraph) && this.graphs[0].onConfigure(function () {
                        this.configure(t), this.render()
                    }.bind(this)), t.width = t.width || this.graphs[0].width || this.defaults.width, t.height = t.height || this.graphs[0].height * this.heightRatio || this.defaults.height, this.configure(t), this.render()
                }, onSlide: function (t) {
                    this.slideCallbacks.push(t)
                }, onConfigure: function (t) {
                    this.configureCallbacks.push(t)
                }, configure: function (e) {
                    this.config = this.config || {}, this.configureCallbacks.forEach(function (t) {
                        t(e)
                    }), u.keys(this.defaults).forEach(function (t) {
                        this.config[t] = t in e ? e[t] : t in this.config ? this.config[t] : this.defaults[t]
                    }, this), ("width" in e || "height" in e) && (this.widthFromGraph && (this.config.width = this.graphs[0].width), this.heightFromGraph && (this.config.height = this.graphs[0].height * this.heightRatio, this.previewHeight = this.config.height), this.previews.forEach(function (t) {
                        var e = this.previewHeight / this.graphs.length - 2 * this.config.frameTopThickness,
                            n = this.config.width - 2 * this.config.frameHandleThickness;
                        if (t.setSize({width: n, height: e}), this.svg) {
                            var r = e + 2 * this.config.frameHandleThickness,
                                i = n + 2 * this.config.frameHandleThickness;
                            this.svg.style("width", i + "px"), this.svg.style("height", r + "px")
                        }
                    }, this))
                }, render: function () {
                    var o = this;
                    this.svg = v.select(this.element).selectAll("svg.rickshaw_range_slider_preview").data([null]), this.previewHeight = this.config.height - 2 * this.config.frameTopThickness, this.previewWidth = this.config.width - 2 * this.config.frameHandleThickness, this.currentFrame = [0, this.previewWidth];
                    var t = v.select(this.element).selectAll("div.rickshaw_range_slider_preview_container").data(this.graphs),
                        e = "translate(" + this.config.frameHandleThickness + "px, " + this.config.frameTopThickness + "px)";
                    t.enter().append("div").classed("rickshaw_range_slider_preview_container", !0).style("-webkit-transform", e).style("-moz-transform", e).style("-ms-transform", e).style("transform", e).each(function (t, e) {
                        var n = u.extend({}, t.config), r = o.previewHeight / o.graphs.length, i = t.renderer.name;
                        u.extend(n, {
                            element: this.appendChild(document.createElement("div")),
                            height: r,
                            width: o.previewWidth,
                            series: t.series,
                            renderer: i
                        });
                        var a = new u.Graph(n);
                        o.previews.push(a), t.onUpdate(function () {
                            a.render(), o.render()
                        }), t.onConfigure(function (t) {
                            delete t.height, t.width = t.width - 2 * o.config.frameHandleThickness, a.configure(t), a.render()
                        }), a.render()
                    }), t.exit().remove();
                    var n = this.graphs[0], r = v.scale.linear().domain([0, this.previewWidth]).range(n.dataDomain()),
                        i = [n.window.xMin, n.window.xMax];
                    this.currentFrame[0] = void 0 === i[0] ? 0 : Math.round(r.invert(i[0])), this.currentFrame[0] < 0 && (this.currentFrame[0] = 0), this.currentFrame[1] = void 0 === i[1] ? this.previewWidth : r.invert(i[1]), this.currentFrame[1] - this.currentFrame[0] < o.config.minimumFrameWidth && (this.currentFrame[1] = (this.currentFrame[0] || 0) + o.config.minimumFrameWidth), this.svg.enter().append("svg").classed("rickshaw_range_slider_preview", !0).style("height", this.config.height + "px").style("width", this.config.width + "px").style("position", "absolute").style("top", 0), this._renderDimming(), this._renderFrame(), this._renderGrippers(), this._renderHandles(), this._renderMiddle(), this._registerMouseEvents()
                }, _renderDimming: function () {
                    var t = this.svg.selectAll("path.dimming").data([null]);
                    t.enter().append("path").attr("fill", "white").attr("fill-opacity", "0.7").attr("fill-rule", "evenodd").classed("dimming", !0);
                    var e = "";
                    e += " M " + this.config.frameHandleThickness + " " + this.config.frameTopThickness, e += " h " + this.previewWidth, e += " v " + this.previewHeight, e += " h " + -this.previewWidth, e += " z ", e += " M " + Math.max(this.currentFrame[0], this.config.frameHandleThickness) + " " + this.config.frameTopThickness, e += " H " + Math.min(this.currentFrame[1] + 2 * this.config.frameHandleThickness, this.previewWidth + this.config.frameHandleThickness), e += " v " + this.previewHeight, e += " H " + Math.max(this.currentFrame[0], this.config.frameHandleThickness), e += " z", t.attr("d", e)
                }, _renderFrame: function () {
                    var t = this.svg.selectAll("path.frame").data([null]);
                    t.enter().append("path").attr("stroke", "white").attr("stroke-width", "1px").attr("stroke-linejoin", "round").attr("fill", this.config.frameColor).attr("fill-opacity", this.config.frameOpacity).attr("fill-rule", "evenodd").classed("frame", !0);
                    var e = "";
                    e += " M " + this.currentFrame[0] + " 0", e += " H " + (this.currentFrame[1] + 2 * this.config.frameHandleThickness), e += " V " + this.config.height, e += " H " + this.currentFrame[0], e += " z", e += " M " + (this.currentFrame[0] + this.config.frameHandleThickness) + " " + this.config.frameTopThickness, e += " H " + (this.currentFrame[1] + this.config.frameHandleThickness), e += " v " + this.previewHeight, e += " H " + (this.currentFrame[0] + this.config.frameHandleThickness), e += " z", t.attr("d", e)
                }, _renderGrippers: function () {
                    var t = this.svg.selectAll("path.gripper").data([null]);
                    t.enter().append("path").attr("stroke", this.config.gripperColor).classed("gripper", !0);
                    var e = "";
                    [.4, .6].forEach(function (t) {
                        e += " M " + Math.round(this.currentFrame[0] + this.config.frameHandleThickness * t) + " " + Math.round(.3 * this.config.height), e += " V " + Math.round(.7 * this.config.height), e += " M " + Math.round(this.currentFrame[1] + this.config.frameHandleThickness * (1 + t)) + " " + Math.round(.3 * this.config.height), e += " V " + Math.round(.7 * this.config.height)
                    }.bind(this)), t.attr("d", e)
                }, _renderHandles: function () {
                    var t = this.svg.selectAll("rect.left_handle").data([null]);
                    t.enter().append("rect").attr("width", this.config.frameHandleThickness).style("cursor", "ew-resize").style("fill-opacity", "0").classed("left_handle", !0), t.attr("x", this.currentFrame[0]).attr("height", this.config.height);
                    var e = this.svg.selectAll("rect.right_handle").data([null]);
                    e.enter().append("rect").attr("width", this.config.frameHandleThickness).style("cursor", "ew-resize").style("fill-opacity", "0").classed("right_handle", !0), e.attr("x", this.currentFrame[1] + this.config.frameHandleThickness).attr("height", this.config.height)
                }, _renderMiddle: function () {
                    var t = this.svg.selectAll("rect.middle_handle").data([null]);
                    t.enter().append("rect").style("cursor", "move").style("fill-opacity", "0").classed("middle_handle", !0), t.attr("width", Math.max(0, this.currentFrame[1] - this.currentFrame[0])).attr("x", this.currentFrame[0] + this.config.frameHandleThickness).attr("height", this.config.height)
                }, _registerMouseEvents: function () {
                    var t = v.select(this.element),
                        a = {target: null, start: null, stop: null, left: !1, right: !1, rigid: !1}, o = this;

                    function onMousemove(t, e) {
                        a.stop = o._getClientXFromEvent(v.event, a);
                        var n = a.stop - a.start, r = o.frameBeforeDrag.slice(0), i = o.config.minimumFrameWidth;
                        a.rigid && (i = o.frameBeforeDrag[1] - o.frameBeforeDrag[0]), a.left && (r[0] = Math.max(r[0] + n, 0)), a.right && (r[1] = Math.min(r[1] + n, o.previewWidth)), r[1] - r[0] <= i && (a.left && (r[0] = r[1] - i), a.right && (r[1] = r[0] + i), r[0] <= 0 && (r[1] -= r[0], r[0] = 0), r[1] >= o.previewWidth && (r[0] -= r[1] - o.previewWidth, r[1] = o.previewWidth)), o.graphs.forEach(function (e) {
                            var t = v.scale.linear().interpolate(v.interpolateNumber).domain([0, o.previewWidth]).range(e.dataDomain()),
                                n = [t(r[0]), t(r[1])];
                            o.slideCallbacks.forEach(function (t) {
                                t(e, n[0], n[1])
                            }), 0 === r[0] && (n[0] = void 0), r[1] === o.previewWidth && (n[1] = void 0), e.window.xMin = n[0], e.window.xMax = n[1], e.update()
                        })
                    }

                    function onMousedown() {
                        a.target = v.event.target, a.start = o._getClientXFromEvent(v.event, a), o.frameBeforeDrag = o.currentFrame.slice(), v.event.preventDefault ? v.event.preventDefault() : v.event.returnValue = !1, v.select(document).on("mousemove.rickshaw_range_slider_preview", onMousemove), v.select(document).on("mouseup.rickshaw_range_slider_preview", onMouseup), v.select(document).on("touchmove.rickshaw_range_slider_preview", onMousemove), v.select(document).on("touchend.rickshaw_range_slider_preview", onMouseup), v.select(document).on("touchcancel.rickshaw_range_slider_preview", onMouseup)
                    }

                    function onMousedownLeftHandle(t, e) {
                        a.left = !0, onMousedown()
                    }

                    function onMousedownRightHandle(t, e) {
                        a.right = !0, onMousedown()
                    }

                    function onMousedownMiddleHandle(t, e) {
                        a.left = !0, a.right = !0, a.rigid = !0, onMousedown()
                    }

                    function onMouseup(t, e) {
                        v.select(document).on("mousemove.rickshaw_range_slider_preview", null), v.select(document).on("mouseup.rickshaw_range_slider_preview", null), v.select(document).on("touchmove.rickshaw_range_slider_preview", null), v.select(document).on("touchend.rickshaw_range_slider_preview", null), v.select(document).on("touchcancel.rickshaw_range_slider_preview", null), delete o.frameBeforeDrag, a.left = !1, a.right = !1, a.rigid = !1
                    }

                    t.select("rect.left_handle").on("mousedown", onMousedownLeftHandle), t.select("rect.right_handle").on("mousedown", onMousedownRightHandle), t.select("rect.middle_handle").on("mousedown", onMousedownMiddleHandle), t.select("rect.left_handle").on("touchstart", onMousedownLeftHandle), t.select("rect.right_handle").on("touchstart", onMousedownRightHandle), t.select("rect.middle_handle").on("touchstart", onMousedownMiddleHandle)
                }, _getClientXFromEvent: function (t, e) {
                    switch (t.type) {
                        case"touchstart":
                        case"touchmove":
                            for (var n = t.changedTouches, r = null, i = 0; i < n.length; i++) if (n[i].target === e.target) {
                                r = n[i];
                                break
                            }
                            return null !== r ? r.clientX : void 0;
                        default:
                            return t.clientX
                    }
                }
            }), u.namespace("Rickshaw.Graph.Renderer"), u.Graph.Renderer = u.Class.create({
                initialize: function (t) {
                    this.graph = t.graph, this.tension = t.tension || this.tension, this.configure(t)
                }, seriesPathFactory: function () {
                }, seriesStrokeFactory: function () {
                }, defaults: function () {
                    return {
                        tension: .8,
                        strokeWidth: 2,
                        unstack: !0,
                        padding: {top: .01, right: 0, bottom: .01, left: 0},
                        stroke: !1,
                        fill: !1,
                        opacity: 1
                    }
                }, domain: function (t) {
                    var e = t || this.graph.stackedData || this.graph.stackData();
                    e = e.filter(function (t) {
                        return t && 0 !== t.length
                    });
                    var n = 1 / 0, r = -1 / 0, i = 1 / 0, a = -1 / 0;
                    return e.forEach(function (t) {
                        t.forEach(function (t) {
                            if (null != t.y) {
                                var e = t.y + t.y0;
                                e < i && (i = e), a < e && (a = e)
                            }
                        }), t.length && (t[0].x < n && (n = t[0].x), t[t.length - 1].x > r && (r = t[t.length - 1].x))
                    }), n -= (r - n) * this.padding.left, r += (r - n) * this.padding.right, i = "auto" === this.graph.min ? i : this.graph.min || 0, a = void 0 === this.graph.max ? a : this.graph.max, ("auto" === this.graph.min || i < 0) && (i -= (a - i) * this.padding.bottom), void 0 === this.graph.max && (a += (a - i) * this.padding.top), {
                        x: [n, r],
                        y: [i, a]
                    }
                }, render: function (t) {
                    t = t || {};
                    var e = this.graph, n = t.series || e.series, r = t.vis || e.vis;
                    r.selectAll("*").remove();
                    var i = n.filter(function (t) {
                            return !t.disabled
                        }).map(function (t) {
                            return t.stack
                        }),
                        a = r.selectAll("path.path").data(i).enter().append("svg:path").classed("path", !0).attr("d", this.seriesPathFactory());
                    if (this.stroke) var o = r.selectAll("path.stroke").data(i).enter().append("svg:path").classed("stroke", !0).attr("d", this.seriesStrokeFactory());
                    var s = 0;
                    n.forEach(function (t) {
                        t.disabled || (t.path = a[0][s], this.stroke && (t.stroke = o[0][s]), this._styleSeries(t), s++)
                    }, this)
                }, _styleSeries: function (t) {
                    var e = this.fill ? t.color : "none", n = this.stroke ? t.color : "none",
                        r = t.strokeWidth ? t.strokeWidth : this.strokeWidth, i = t.opacity ? t.opacity : this.opacity;
                    t.path.setAttribute("fill", e), t.path.setAttribute("stroke", n), t.path.setAttribute("stroke-width", r), t.path.setAttribute("opacity", i), t.className && v.select(t.path).classed(t.className, !0), t.className && this.stroke && v.select(t.stroke).classed(t.className, !0)
                }, configure: function (n) {
                    n = n || {}, u.keys(this.defaults()).forEach(function (e) {
                        n.hasOwnProperty(e) ? "object" == typeof this.defaults()[e] ? u.keys(this.defaults()[e]).forEach(function (t) {
                            this[e][t] = void 0 !== n[e][t] ? n[e][t] : void 0 !== this[e][t] ? this[e][t] : this.defaults()[e][t]
                        }, this) : this[e] = void 0 !== n[e] ? n[e] : void 0 !== this[e] ? this[e] : void 0 !== this.graph[e] ? this.graph[e] : this.defaults()[e] : this[e] = this[e] || this.graph[e] || this.defaults()[e]
                    }, this)
                }, setStrokeWidth: function (t) {
                    void 0 !== t && (this.strokeWidth = t)
                }, setTension: function (t) {
                    void 0 !== t && (this.tension = t)
                }
            }), u.namespace("Rickshaw.Graph.Renderer.Line"), u.Graph.Renderer.Line = u.Class.create(u.Graph.Renderer, {
                name: "line",
                defaults: function ($super) {
                    return u.extend($super(), {unstack: !0, fill: !1, stroke: !0})
                },
                seriesPathFactory: function () {
                    var e = this.graph, t = v.svg.line().x(function (t) {
                        return e.x(t.x)
                    }).y(function (t) {
                        return e.y(t.y)
                    }).interpolate(this.graph.interpolation).tension(this.tension);
                    return t.defined && t.defined(function (t) {
                        return null !== t.y
                    }), t
                }
            }), u.namespace("Rickshaw.Graph.Renderer.Stack"), u.Graph.Renderer.Stack = u.Class.create(u.Graph.Renderer, {
                name: "stack",
                defaults: function ($super) {
                    return u.extend($super(), {fill: !0, stroke: !1, unstack: !1})
                },
                seriesPathFactory: function () {
                    var e = this.graph, t = v.svg.area().x(function (t) {
                        return e.x(t.x)
                    }).y0(function (t) {
                        return e.y(t.y0)
                    }).y1(function (t) {
                        return e.y(t.y + t.y0)
                    }).interpolate(this.graph.interpolation).tension(this.tension);
                    return t.defined && t.defined(function (t) {
                        return null !== t.y
                    }), t
                }
            }), u.namespace("Rickshaw.Graph.Renderer.Bar"), u.Graph.Renderer.Bar = u.Class.create(u.Graph.Renderer, {
                name: "bar", defaults: function ($super) {
                    var t = u.extend($super(), {gapSize: .05, unstack: !1, opacity: 1});
                    return delete t.tension, t
                }, initialize: function ($super, t) {
                    t = t || {}, this.gapSize = t.gapSize || this.gapSize, $super(t)
                }, domain: function ($super) {
                    var t = $super(), e = this._frequentInterval(this.graph.stackedData.slice(-1).shift());
                    return t.x[1] += Number(e.magnitude), t
                }, barWidth: function (t) {
                    var e = this._frequentInterval(t.stack);
                    return this.graph.x.magnitude(e.magnitude) * (1 - this.gapSize)
                }, render: function (t) {
                    t = t || {};
                    var n = this.graph, e = t.series || n.series, r = t.vis || n.vis;
                    r.selectAll("*").remove();
                    var i = this.barWidth(e.active()[0]), a = 0, o = e.filter(function (t) {
                        return !t.disabled
                    }).length, s = this.unstack ? i / o : i, u = function (t) {
                        return "matrix(" + [1, 0, 0, t.y < 0 ? -1 : 1, 0, t.y < 0 ? 2 * n.y.magnitude(Math.abs(t.y)) : 0].join(",") + ")"
                    };
                    e.forEach(function (e) {
                        if (!e.disabled) {
                            this.barWidth(e);
                            var t = r.selectAll("path").data(e.stack.filter(function (t) {
                                return null !== t.y
                            })).enter().append("svg:rect").attr("x", function (t) {
                                return n.x(t.x) + a
                            }).attr("y", function (t) {
                                return n.y(t.y0 + Math.abs(t.y)) * (t.y < 0 ? -1 : 1)
                            }).attr("width", s).attr("height", function (t) {
                                return n.y.magnitude(Math.abs(t.y))
                            }).attr("opacity", e.opacity).attr("transform", u);
                            Array.prototype.forEach.call(t[0], function (t) {
                                t.setAttribute("fill", e.color)
                            }), this.unstack && (a += s)
                        }
                    }, this)
                }, _frequentInterval: function (t) {
                    for (var e = {}, n = 0; n < t.length - 1; n++) {
                        var r = t[n + 1].x - t[n].x;
                        e[r] = e[r] || 0, e[r]++
                    }
                    var i = {count: 0, magnitude: 1};
                    return u.keys(e).sort(function (t, e) {
                        return Number(t) - Number(e)
                    }).forEach(function (t) {
                        i.count < e[t] && (i = {count: e[t], magnitude: t})
                    }), i
                }
            }), u.namespace("Rickshaw.Graph.Renderer.Area"), u.Graph.Renderer.Area = u.Class.create(u.Graph.Renderer, {
                name: "area", defaults: function ($super) {
                    return u.extend($super(), {unstack: !1, fill: !1, stroke: !1})
                }, seriesPathFactory: function () {
                    var e = this.graph, t = v.svg.area().x(function (t) {
                        return e.x(t.x)
                    }).y0(function (t) {
                        return e.y(t.y0)
                    }).y1(function (t) {
                        return e.y(t.y + t.y0)
                    }).interpolate(e.interpolation).tension(this.tension);
                    return t.defined && t.defined(function (t) {
                        return null !== t.y
                    }), t
                }, seriesStrokeFactory: function () {
                    var e = this.graph, t = v.svg.line().x(function (t) {
                        return e.x(t.x)
                    }).y(function (t) {
                        return e.y(t.y + t.y0)
                    }).interpolate(e.interpolation).tension(this.tension);
                    return t.defined && t.defined(function (t) {
                        return null !== t.y
                    }), t
                }, render: function (t) {
                    t = t || {};
                    var e = this.graph, n = t.series || e.series, r = t.vis || e.vis;
                    r.selectAll("*").remove();
                    var i = this.unstack ? "append" : "insert", a = n.filter(function (t) {
                        return !t.disabled
                    }).map(function (t) {
                        return t.stack
                    }), o = r.selectAll("path").data(a).enter()[i]("svg:g", "g");
                    o.append("svg:path").attr("d", this.seriesPathFactory()).attr("class", "area"), this.stroke && o.append("svg:path").attr("d", this.seriesStrokeFactory()).attr("class", "line");
                    var s = 0;
                    n.forEach(function (t) {
                        t.disabled || (t.path = o[0][s++], this._styleSeries(t))
                    }, this)
                }, _styleSeries: function (t) {
                    t.path && (v.select(t.path).select(".area").attr("fill", t.color), this.stroke && v.select(t.path).select(".line").attr("fill", "none").attr("stroke", t.stroke || v.interpolateRgb(t.color, "black")(.125)).attr("stroke-width", this.strokeWidth), t.className && t.path.setAttribute("class", t.className))
                }
            }), u.namespace("Rickshaw.Graph.Renderer.ScatterPlot"), u.Graph.Renderer.ScatterPlot = u.Class.create(u.Graph.Renderer, {
                name: "scatterplot",
                defaults: function ($super) {
                    return u.extend($super(), {
                        unstack: !0,
                        fill: !0,
                        stroke: !1,
                        padding: {top: .01, right: .01, bottom: .01, left: .01},
                        dotSize: 4
                    })
                },
                initialize: function ($super, t) {
                    $super(t)
                },
                render: function (t) {
                    t = t || {};
                    var r = this.graph, e = t.series || r.series, i = t.vis || r.vis, a = this.dotSize;
                    i.selectAll("*").remove(), e.forEach(function (e) {
                        if (!e.disabled) {
                            var n = e.opacity ? e.opacity : 1,
                                t = i.selectAll("path").data(e.stack.filter(function (t) {
                                    return null !== t.y
                                })).enter().append("svg:circle").attr("cx", function (t) {
                                    return r.x(t.x)
                                }).attr("cy", function (t) {
                                    return r.y(t.y)
                                }).attr("r", function (t) {
                                    return "r" in t ? t.r : a
                                }).attr("opacity", function (t) {
                                    return "opacity" in t ? t.opacity : n
                                });
                            e.className && t.classed(e.className, !0), Array.prototype.forEach.call(t[0], function (t) {
                                t.setAttribute("fill", e.color)
                            })
                        }
                    }, this)
                }
            }), u.namespace("Rickshaw.Graph.Renderer.Multi"), u.Graph.Renderer.Multi = u.Class.create(u.Graph.Renderer, {
                name: "multi", initialize: function ($super, t) {
                    $super(t)
                }, defaults: function ($super) {
                    return u.extend($super(), {unstack: !0, fill: !1, stroke: !0})
                }, configure: function ($super, t) {
                    t = t || {}, $super(this.config = t)
                }, domain: function ($super) {
                    this.graph.stackData();
                    var r = [], t = this._groups();
                    return this._stack(t), t.forEach(function (t) {
                        var e = t.series.filter(function (t) {
                            return !t.disabled
                        }).map(function (t) {
                            return t.stack
                        });
                        if (e.length) {
                            var n = null;
                            n = t.renderer && t.renderer.domain ? t.renderer.domain(e) : $super(e), r.push(n)
                        }
                    }), {
                        x: [v.min(r.map(function (t) {
                            return t.x[0]
                        })), v.max(r.map(function (t) {
                            return t.x[1]
                        }))], y: [v.min(r.map(function (t) {
                            return t.y[0]
                        })), v.max(r.map(function (t) {
                            return t.y[1]
                        }))]
                    }
                }, _groups: function () {
                    var i = this.graph, a = {};
                    i.series.forEach(function (t) {
                        if (!t.disabled) {
                            if (!a[t.renderer]) {
                                var e = document.createElementNS("http://www.w3.org/2000/svg", "g");
                                i.vis[0][0].appendChild(e);
                                var n = i._renderers[t.renderer], r = {};
                                [this.defaults(), n.defaults(), this.config, this.graph].forEach(function (t) {
                                    u.extend(r, t)
                                }), n.configure(r), a[t.renderer] = {renderer: n, series: [], vis: v.select(e)}
                            }
                            a[t.renderer].series.push(t)
                        }
                    }, this);
                    var n = [];
                    return Object.keys(a).forEach(function (t) {
                        var e = a[t];
                        n.push(e)
                    }), n
                }, _stack: function (t) {
                    return t.forEach(function (t) {
                        var e = t.series.filter(function (t) {
                            return !t.disabled
                        }), n = e.map(function (t) {
                            return t.stack
                        });
                        if (!t.renderer.unstack) {
                            var r = v.layout.stack(), i = u.clone(r(n));
                            e.forEach(function (t, e) {
                                t._stack = u.clone(i[e])
                            })
                        }
                    }, this), t
                }, render: function () {
                    this.graph.series.forEach(function (t) {
                        if (!t.renderer) throw new Error("Each series needs a renderer for graph 'multi' renderer")
                    }), this.graph.vis.selectAll("*").remove();
                    var t = this._groups();
                    (t = this._stack(t)).forEach(function (t) {
                        var e = t.series.filter(function (t) {
                            return !t.disabled
                        });
                        e.active = function () {
                            return e
                        }, t.renderer.render({series: e, vis: t.vis}), e.forEach(function (t) {
                            t.stack = t._stack || t.stack || t.data
                        })
                    })
                }
            }), u.namespace("Rickshaw.Graph.Renderer.LinePlot"), u.Graph.Renderer.LinePlot = u.Class.create(u.Graph.Renderer, {
                name: "lineplot", defaults: function ($super) {
                    return u.extend($super(), {
                        unstack: !0,
                        fill: !1,
                        stroke: !0,
                        padding: {top: .01, right: .01, bottom: .01, left: .01},
                        dotSize: 3,
                        strokeWidth: 2
                    })
                }, seriesPathFactory: function () {
                    var e = this.graph, t = v.svg.line().x(function (t) {
                        return e.x(t.x)
                    }).y(function (t) {
                        return e.y(t.y)
                    }).interpolate(this.graph.interpolation).tension(this.tension);
                    return t.defined && t.defined(function (t) {
                        return null !== t.y
                    }), t
                }, render: function (t) {
                    t = t || {};
                    var n = this.graph, e = t.series || n.series, r = t.vis || n.vis, i = this.dotSize;
                    r.selectAll("*").remove();
                    var a = e.filter(function (t) {
                            return !t.disabled
                        }).map(function (t) {
                            return t.stack
                        }), o = r.selectAll("path").data(a).enter().append("svg:path").attr("d", this.seriesPathFactory()),
                        s = 0;
                    e.forEach(function (t) {
                        t.disabled || (t.path = o[0][s++], this._styleSeries(t))
                    }, this), e.forEach(function (e) {
                        if (!e.disabled) {
                            var t = r.selectAll("x").data(e.stack.filter(function (t) {
                                return null !== t.y
                            })).enter().append("svg:circle").attr("cx", function (t) {
                                return n.x(t.x)
                            }).attr("cy", function (t) {
                                return n.y(t.y)
                            }).attr("r", function (t) {
                                return "r" in t ? t.r : i
                            });
                            Array.prototype.forEach.call(t[0], function (t) {
                                t && (t.setAttribute("data-color", e.color), t.setAttribute("fill", "white"), t.setAttribute("stroke", e.color), t.setAttribute("stroke-width", this.strokeWidth))
                            }.bind(this))
                        }
                    }, this)
                }
            }), u.namespace("Rickshaw.Graph.Smoother"), u.Graph.Smoother = u.Class.create({
                initialize: function (t) {
                    this.graph = t.graph, this.element = t.element, this.aggregationScale = 1, this.build(), this.graph.stackData.hooks.data.push({
                        name: "smoother",
                        orderPosition: 50,
                        f: this.transformer.bind(this)
                    })
                }, build: function () {
                    var n = this, t = jQuery;
                    this.element && t(function () {
                        t(n.element).slider({
                            min: 1, max: 100, slide: function (t, e) {
                                n.setScale(e.value)
                            }
                        })
                    })
                }, setScale: function (t) {
                    if (t < 1) throw"scale out of range: " + t;
                    this.aggregationScale = t, this.graph.update()
                }, transformer: function (t) {
                    if (1 == this.aggregationScale) return t;
                    var a = [];
                    return t.forEach(function (t) {
                        for (var e = []; t.length;) {
                            var n = 0, r = 0, i = t.splice(0, this.aggregationScale);
                            i.forEach(function (t) {
                                n += t.x / i.length, r += t.y / i.length
                            }), e.push({x: n, y: r})
                        }
                        a.push(e)
                    }.bind(this)), a
                }
            }), u.namespace("Rickshaw.Graph.Socketio"), u.Graph.Socketio = u.Class.create(u.Graph.Ajax, {
                request: function () {
                    var t = io.connect(this.dataURL), e = this;
                    t.on("rickshaw", function (t) {
                        e.success(t)
                    })
                }
            }), u.namespace("Rickshaw.Series"), u.Series = u.Class.create(Array, {
                initialize: function (t, e, n) {
                    n = n || {}, this.palette = new u.Color.Palette(e), this.timeBase = void 0 === n.timeBase ? Math.floor((new Date).getTime() / 1e3) : n.timeBase;
                    var r = void 0 === n.timeInterval ? 1e3 : n.timeInterval;
                    this.setTimeInterval(r), t && "object" == typeof t && Array.isArray(t) && t.forEach(function (t) {
                        this.addItem(t)
                    }, this)
                }, addItem: function (e) {
                    if (void 0 === e.name) throw"addItem() needs a name";
                    e.color = e.color || this.palette.color(e.name), e.data = e.data || [], 0 === e.data.length && this.length && 0 < this.getIndex() ? this[0].data.forEach(function (t) {
                        e.data.push({x: t.x, y: 0})
                    }) : 0 === e.data.length && e.data.push({
                        x: this.timeBase - (this.timeInterval || 0),
                        y: 0
                    }), this.push(e), this.legend && this.legend.addLine(this.itemByName(e.name))
                }, addData: function (e, n) {
                    var r = this.getIndex();
                    u.keys(e).forEach(function (t) {
                        this.itemByName(t) || this.addItem({name: t})
                    }, this), this.forEach(function (t) {
                        t.data.push({x: n || (r * this.timeInterval || 1) + this.timeBase, y: e[t.name] || 0})
                    }, this)
                }, getIndex: function () {
                    return this[0] && this[0].data && this[0].data.length ? this[0].data.length : 0
                }, itemByName: function (t) {
                    for (var e = 0; e < this.length; e++) if (this[e].name == t) return this[e]
                }, setTimeInterval: function (t) {
                    this.timeInterval = t / 1e3
                }, setTimeBase: function (t) {
                    this.timeBase = t
                }, dump: function () {
                    var n = {timeBase: this.timeBase, timeInterval: this.timeInterval, items: []};
                    return this.forEach(function (t) {
                        var e = {color: t.color, name: t.name, data: []};
                        t.data.forEach(function (t) {
                            e.data.push({x: t.x, y: t.y})
                        }), n.items.push(e)
                    }), n
                }, load: function (t) {
                    t.timeInterval && (this.timeInterval = t.timeInterval), t.timeBase && (this.timeBase = t.timeBase), t.items && t.items.forEach(function (t) {
                        this.push(t), this.legend && this.legend.addLine(this.itemByName(t.name))
                    }, this)
                }
            }), u.Series.zeroFill = function (t) {
                u.Series.fill(t, 0)
            }, u.Series.fill = function (t, e) {
                for (var n, r = 0, i = t.map(function (t) {
                    return t.data
                }); r < Math.max.apply(null, i.map(function (t) {
                    return t.length
                }));) n = Math.min.apply(null, i.filter(function (t) {
                    return t[r]
                }).map(function (t) {
                    return t[r].x
                })), i.forEach(function (t) {
                    t[r] && t[r].x == n || t.splice(r, 0, {x: n, y: e})
                }), r++
            }, u.namespace("Rickshaw.Series.FixedDuration"), u.Series.FixedDuration = u.Class.create(u.Series, {
                initialize: function (t, e, n) {
                    if (void 0 === (n = n || {}).timeInterval) throw new Error("FixedDuration series requires timeInterval");
                    if (void 0 === n.maxDataPoints) throw new Error("FixedDuration series requires maxDataPoints");
                    if (this.palette = new u.Color.Palette(e), this.timeBase = void 0 === n.timeBase ? Math.floor((new Date).getTime() / 1e3) : n.timeBase, this.setTimeInterval(n.timeInterval), this[0] && this[0].data && this[0].data.length ? (this.currentSize = this[0].data.length, this.currentIndex = this[0].data.length) : (this.currentSize = 0, this.currentIndex = 0), this.maxDataPoints = n.maxDataPoints, t && "object" == typeof t && Array.isArray(t) && (t.forEach(function (t) {
                        this.addItem(t)
                    }, this), this.currentSize += 1, this.currentIndex += 1), this.timeBase -= (this.maxDataPoints - this.currentSize) * this.timeInterval, void 0 !== this.maxDataPoints && this.currentSize < this.maxDataPoints) for (var r = this.maxDataPoints - this.currentSize - 1; 1 < r; r--) this.currentSize += 1, this.currentIndex += 1, this.forEach(function (t) {
                        t.data.unshift({x: ((r - 1) * this.timeInterval || 1) + this.timeBase, y: 0, i: r})
                    }, this)
                }, addData: function ($super, t, e) {
                    if ($super(t, e), this.currentSize += 1, this.currentIndex += 1, void 0 !== this.maxDataPoints) for (; this.currentSize > this.maxDataPoints;) this.dropData()
                }, dropData: function () {
                    this.forEach(function (t) {
                        t.data.splice(0, 1)
                    }), this.currentSize -= 1
                }, getIndex: function () {
                    return this.currentIndex
                }
            }), u);
            var v, u
        }.apply(e, r)) || (t.exports = i)
    }, 224: function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0), c = n.n(r), i = n(11), l = n.n(i);
        n(226);
        document.querySelector("#rickshaw-chart1") && document.querySelector("#rickshaw-chart2") && document.querySelector("#rickshaw-chart3") && c()(function () {
            for (var t = [[], [], []], e = new l.a.Fixtures.RandomData(150), n = 0; n < 150; n++) e.addData(t);
            var r = new l.a.Graph({
                element: document.querySelector("#rickshaw-chart1"),
                renderer: "area",
                series: [{
                    color: Colors.byName("indigo-700"),
                    data: t[0],
                    name: "New York"
                }, {color: Colors.byName("primary"), data: t[1], name: "London"}, {
                    color: Colors.byName("info"),
                    data: t[2],
                    name: "Tokyo"
                }]
            });
            r.render();
            var i = new l.a.Graph({
                element: document.querySelector("#rickshaw-chart2"),
                renderer: "bar",
                series: [{
                    color: Colors.byName("green-700"),
                    data: t[0],
                    name: "New York"
                }, {color: Colors.byName("green-500"), data: t[1], name: "London"}, {
                    color: Colors.byName("green-200"),
                    data: t[2],
                    name: "Tokyo"
                }]
            });
            i.render();
            for (var a = [[], [], []], o = new l.a.Fixtures.RandomData(150), s = 0; s < 200; s++) o.addData(a);
            var u = new l.a.Graph({
                element: document.querySelector("#rickshaw-chart3"),
                width: "100%",
                renderer: "scatterplot",
                legend: {toggle: !0, highlight: !0},
                series: [{
                    color: Colors.byName("pink-700"),
                    data: a[0],
                    name: "New York"
                }, {color: Colors.byName("pink-500"), data: a[1], name: "London"}, {
                    color: Colors.byName("pink-200"),
                    data: a[2],
                    name: "Tokyo"
                }]
            });
            new l.a.Graph.HoverDetail({
                graph: u, xFormatter: function (t) {
                    return "t=" + t
                }, yFormatter: function (t) {
                    return "$" + t
                }
            }), u.render(), window.addEventListener("resize", function () {
                r.configure({
                    width: c()("#rickshaw-chart1").width(),
                    height: c()("#rickshaw-chart1").height()
                }), r.render(), i.configure({
                    width: c()("#rickshaw-chart2").width(),
                    height: c()("#rickshaw-chart2").height()
                }), i.render(), u.configure({
                    width: c()("#rickshaw-chart3").width(),
                    height: c()("#rickshaw-chart3").height()
                }), u.render()
            })
        })
    }, 225: function (Ve, Xe, We) {
        var Ze, Qe;
        !function () {
            var P = {version: "3.5.17"}, a = [].slice, d = function (t) {
                return a.call(t)
            }, p = this.document;

            function d3_documentElement(t) {
                return t && (t.ownerDocument || t.document || t).documentElement
            }

            function d3_window(t) {
                return t && (t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView)
            }

            if (p) try {
                d(p.documentElement.childNodes)[0].nodeType
            } catch (t) {
                d = function (t) {
                    for (var e = t.length, n = new Array(e); e--;) n[e] = t[e];
                    return n
                }
            }
            if (Date.now || (Date.now = function () {
                return +new Date
            }), p) try {
                p.createElement("DIV").style.setProperty("opacity", 0, "")
            } catch (t) {
                var e = this.Element.prototype, n = e.setAttribute, r = e.setAttributeNS,
                    i = this.CSSStyleDeclaration.prototype, o = i.setProperty;
                e.setAttribute = function (t, e) {
                    n.call(this, t, e + "")
                }, e.setAttributeNS = function (t, e, n) {
                    r.call(this, t, e, n + "")
                }, i.setProperty = function (t, e, n) {
                    o.call(this, t, e + "", n)
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
                            var i = n + r >>> 1;
                            a(t[i], e) < 0 ? n = i + 1 : r = i
                        }
                        return n
                    }, right: function (t, e, n, r) {
                        for (arguments.length < 3 && (n = 0), arguments.length < 4 && (r = t.length); n < r;) {
                            var i = n + r >>> 1;
                            0 < a(t[i], e) ? r = i : n = i + 1
                        }
                        return n
                    }
                }
            }

            P.ascending = d3_ascending, P.descending = function (t, e) {
                return e < t ? -1 : t < e ? 1 : t <= e ? 0 : NaN
            }, P.min = function (t, e) {
                var n, r, i = -1, a = t.length;
                if (1 === arguments.length) {
                    for (; ++i < a;) if (null != (r = t[i]) && r <= r) {
                        n = r;
                        break
                    }
                    for (; ++i < a;) null != (r = t[i]) && r < n && (n = r)
                } else {
                    for (; ++i < a;) if (null != (r = e.call(t, t[i], i)) && r <= r) {
                        n = r;
                        break
                    }
                    for (; ++i < a;) null != (r = e.call(t, t[i], i)) && r < n && (n = r)
                }
                return n
            }, P.max = function (t, e) {
                var n, r, i = -1, a = t.length;
                if (1 === arguments.length) {
                    for (; ++i < a;) if (null != (r = t[i]) && r <= r) {
                        n = r;
                        break
                    }
                    for (; ++i < a;) null != (r = t[i]) && n < r && (n = r)
                } else {
                    for (; ++i < a;) if (null != (r = e.call(t, t[i], i)) && r <= r) {
                        n = r;
                        break
                    }
                    for (; ++i < a;) null != (r = e.call(t, t[i], i)) && n < r && (n = r)
                }
                return n
            }, P.extent = function (t, e) {
                var n, r, i, a = -1, o = t.length;
                if (1 === arguments.length) {
                    for (; ++a < o;) if (null != (r = t[a]) && r <= r) {
                        n = i = r;
                        break
                    }
                    for (; ++a < o;) null != (r = t[a]) && (r < n && (n = r), i < r && (i = r))
                } else {
                    for (; ++a < o;) if (null != (r = e.call(t, t[a], a)) && r <= r) {
                        n = i = r;
                        break
                    }
                    for (; ++a < o;) null != (r = e.call(t, t[a], a)) && (r < n && (n = r), i < r && (i = r))
                }
                return [n, i]
            }, P.sum = function (t, e) {
                var n, r = 0, i = t.length, a = -1;
                if (1 === arguments.length) for (; ++a < i;) d3_numeric(n = +t[a]) && (r += n); else for (; ++a < i;) d3_numeric(n = +e.call(t, t[a], a)) && (r += n);
                return r
            }, P.mean = function (t, e) {
                var n, r = 0, i = t.length, a = -1, o = i;
                if (1 === arguments.length) for (; ++a < i;) d3_numeric(n = d3_number(t[a])) ? r += n : --o; else for (; ++a < i;) d3_numeric(n = d3_number(e.call(t, t[a], a))) ? r += n : --o;
                if (o) return r / o
            }, P.quantile = function (t, e) {
                var n = (t.length - 1) * e + 1, r = Math.floor(n), i = +t[r - 1], a = n - r;
                return a ? i + a * (t[r] - i) : i
            }, P.median = function (t, e) {
                var n, r = [], i = t.length, a = -1;
                if (1 === arguments.length) for (; ++a < i;) d3_numeric(n = d3_number(t[a])) && r.push(n); else for (; ++a < i;) d3_numeric(n = d3_number(e.call(t, t[a], a))) && r.push(n);
                if (r.length) return P.quantile(r.sort(d3_ascending), .5)
            }, P.variance = function (t, e) {
                var n, r, i = t.length, a = 0, o = 0, s = -1, u = 0;
                if (1 === arguments.length) for (; ++s < i;) d3_numeric(n = d3_number(t[s])) && (o += (r = n - a) * (n - (a += r / ++u))); else for (; ++s < i;) d3_numeric(n = d3_number(e.call(t, t[s], s))) && (o += (r = n - a) * (n - (a += r / ++u)));
                if (1 < u) return o / (u - 1)
            }, P.deviation = function () {
                var t = P.variance.apply(this, arguments);
                return t ? Math.sqrt(t) : t
            };
            var t = d3_bisector(d3_ascending);

            function d3_transposeLength(t) {
                return t.length
            }

            P.bisectLeft = t.left, P.bisect = P.bisectRight = t.right, P.bisector = function (n) {
                return d3_bisector(1 === n.length ? function (t, e) {
                    return d3_ascending(n(t), e)
                } : n)
            }, P.shuffle = function (t, e, n) {
                (a = arguments.length) < 3 && (n = t.length, a < 2 && (e = 0));
                for (var r, i, a = n - e; a;) i = Math.random() * a-- | 0, r = t[a + e], t[a + e] = t[i + e], t[i + e] = r;
                return t
            }, P.permute = function (t, e) {
                for (var n = e.length, r = new Array(n); n--;) r[n] = t[e[n]];
                return r
            }, P.pairs = function (t) {
                for (var e = 0, n = t.length - 1, r = t[0], i = new Array(n < 0 ? 0 : n); e < n;) i[e] = [r, r = t[++e]];
                return i
            }, P.transpose = function (t) {
                if (!(i = t.length)) return [];
                for (var e = -1, n = P.min(t, d3_transposeLength), r = new Array(n); ++e < n;) for (var i, a = -1, o = r[e] = new Array(i); ++a < i;) o[a] = t[a][e];
                return r
            }, P.zip = function () {
                return P.transpose(arguments)
            }, P.keys = function (t) {
                var e = [];
                for (var n in t) e.push(n);
                return e
            }, P.values = function (t) {
                var e = [];
                for (var n in t) e.push(t[n]);
                return e
            }, P.entries = function (t) {
                var e = [];
                for (var n in t) e.push({key: n, value: t[n]});
                return e
            }, P.merge = function (t) {
                for (var e, n, r, i = t.length, a = -1, o = 0; ++a < i;) o += t[a].length;
                for (n = new Array(o); 0 <= --i;) for (e = (r = t[i]).length; 0 <= --e;) n[--o] = r[e];
                return n
            };
            var L = Math.abs;

            function d3_class(t, e) {
                for (var n in e) Object.defineProperty(t.prototype, n, {value: e[n], enumerable: !1})
            }

            function d3_Map() {
                this._ = Object.create(null)
            }

            P.range = function (t, e, n) {
                if (arguments.length < 3 && (n = 1, arguments.length < 2 && (e = t, t = 0)), (e - t) / n == 1 / 0) throw new Error("infinite range");
                var r, i = [], a = function (t) {
                    var e = 1;
                    for (; t * e % 1;) e *= 10;
                    return e
                }(L(n)), o = -1;
                if (t *= a, e *= a, (n *= a) < 0) for (; (r = t + n * ++o) > e;) i.push(r / a); else for (; (r = t + n * ++o) < e;) i.push(r / a);
                return i
            }, P.map = function (t, e) {
                var n = new d3_Map;
                if (t instanceof d3_Map) t.forEach(function (t, e) {
                    n.set(t, e)
                }); else if (Array.isArray(t)) {
                    var r, i = -1, a = t.length;
                    if (1 === arguments.length) for (; ++i < a;) n.set(i, t[i]); else for (; ++i < a;) n.set(e.call(t, r = t[i], i), r)
                } else for (var o in t) n.set(o, t[o]);
                return n
            };
            var s = "__proto__", u = "\0";

            function d3_map_escape(t) {
                return (t += "") === s || t[0] === u ? u + t : t
            }

            function d3_map_unescape(t) {
                return (t += "")[0] === u ? t.slice(1) : t
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
                for (var n = 0, r = c.length; n < r; ++n) {
                    var i = c[n] + e;
                    if (i in t) return i
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
            }), P.nest = function () {
                var h, d, f = {}, g = [], e = [];

                function map(n, t, r) {
                    if (r >= g.length) return d ? d.call(f, t) : h ? t.sort(h) : t;
                    for (var e, i, a, o, s = -1, u = t.length, c = g[r++], l = new d3_Map; ++s < u;) (o = l.get(e = c(i = t[s]))) ? o.push(i) : l.set(e, [i]);
                    return a = n ? (i = n(), function (t, e) {
                        i.set(t, map(n, e, r))
                    }) : (i = {}, function (t, e) {
                        i[t] = map(n, e, r)
                    }), l.forEach(a), i
                }

                return f.map = function (t, e) {
                    return map(e, t, 0)
                }, f.entries = function (t) {
                    return function entries(t, n) {
                        if (n >= g.length) return t;
                        var r = [], i = e[n++];
                        return t.forEach(function (t, e) {
                            r.push({key: t, values: entries(e, n)})
                        }), i ? r.sort(function (t, e) {
                            return i(t.key, e.key)
                        }) : r
                    }(map(P.map, t, 0), 0)
                }, f.key = function (t) {
                    return g.push(t), f
                }, f.sortKeys = function (t) {
                    return e[g.length - 1] = t, f
                }, f.sortValues = function (t) {
                    return h = t, f
                }, f.rollup = function (t) {
                    return d = t, f
                }, f
            }, P.set = function (t) {
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
            }), P.behavior = {}, P.rebind = function (t, e) {
                for (var n, r = 1, i = arguments.length; ++r < i;) t[n = arguments[r]] = d3_rebind(t, e, e[n]);
                return t
            };
            var c = ["webkit", "ms", "moz", "Moz", "o", "O"];

            function d3_noop() {
            }

            function d3_dispatch() {
            }

            function d3_dispatch_event(i) {
                var a = [], o = new d3_Map;

                function event() {
                    for (var t, e = a, n = -1, r = e.length; ++n < r;) (t = e[n].on) && t.apply(this, arguments);
                    return i
                }

                return event.on = function (t, e) {
                    var n, r = o.get(t);
                    return arguments.length < 2 ? r && r.on : (r && (r.on = null, a = a.slice(0, n = a.indexOf(r)).concat(a.slice(n + 1)), o.remove(t)), e && a.push(o.set(t, {on: e})), i)
                }, event
            }

            function d3_eventPreventDefault() {
                P.event.preventDefault()
            }

            function d3_eventSource() {
                for (var t, e = P.event; t = e.sourceEvent;) e = t;
                return e
            }

            function d3_eventDispatch(i) {
                for (var a = new d3_dispatch, t = 0, e = arguments.length; ++t < e;) a[arguments[t]] = d3_dispatch_event(a);
                return a.of = function (n, r) {
                    return function (t) {
                        try {
                            var e = t.sourceEvent = P.event;
                            t.target = i, P.event = t, a[t.type].apply(n, r)
                        } finally {
                            P.event = e
                        }
                    }
                }, a
            }

            P.dispatch = function () {
                for (var t = new d3_dispatch, e = -1, n = arguments.length; ++e < n;) t[arguments[e]] = d3_dispatch_event(t);
                return t
            }, d3_dispatch.prototype.on = function (t, e) {
                var n = t.indexOf("."), r = "";
                if (0 <= n && (r = t.slice(n + 1), t = t.slice(0, n)), t) return arguments.length < 2 ? this[t].on(r) : this[t].on(r, e);
                if (2 === arguments.length) {
                    if (null == e) for (t in this) this.hasOwnProperty(t) && this[t].on(r, null);
                    return this
                }
            }, P.event = null, P.requote = function (t) {
                return t.replace(l, "\\$&")
            };
            var l = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g, h = {}.__proto__ ? function (t, e) {
                t.__proto__ = e
            } : function (t, e) {
                for (var n in e) t[n] = e[n]
            };

            function d3_selection(t) {
                return h(t, m), t
            }

            var f = function (t, e) {
                return e.querySelector(t)
            }, g = function (t, e) {
                return e.querySelectorAll(t)
            }, _ = function (t, e) {
                var n = t.matches || t[d3_vendorSymbol(t, "matchesSelector")];
                return (_ = function (t, e) {
                    return n.call(t, e)
                })(t, e)
            };
            "function" == typeof Sizzle && (f = function (t, e) {
                return Sizzle(t, e)[0] || null
            }, g = Sizzle, _ = Sizzle.matchesSelector), P.selection = function () {
                return P.select(p.documentElement)
            };
            var m = P.selection.prototype = [];

            function d3_selection_selector(t) {
                return "function" == typeof t ? t : function () {
                    return f(t, this)
                }
            }

            function d3_selection_selectorAll(t) {
                return "function" == typeof t ? t : function () {
                    return g(t, this)
                }
            }

            m.select = function (t) {
                var e, n, r, i, a = [];
                t = d3_selection_selector(t);
                for (var o = -1, s = this.length; ++o < s;) {
                    a.push(e = []), e.parentNode = (r = this[o]).parentNode;
                    for (var u = -1, c = r.length; ++u < c;) (i = r[u]) ? (e.push(n = t.call(i, i.__data__, u, o)), n && "__data__" in i && (n.__data__ = i.__data__)) : e.push(null)
                }
                return d3_selection(a)
            }, m.selectAll = function (t) {
                var e, n, r = [];
                t = d3_selection_selectorAll(t);
                for (var i = -1, a = this.length; ++i < a;) for (var o = this[i], s = -1, u = o.length; ++s < u;) (n = o[s]) && (r.push(e = d(t.call(n, n.__data__, s, i))), e.parentNode = n);
                return d3_selection(r)
            };
            var v = "http://www.w3.org/1999/xhtml", y = {
                svg: "http://www.w3.org/2000/svg",
                xhtml: v,
                xlink: "http://www.w3.org/1999/xlink",
                xml: "http://www.w3.org/XML/1998/namespace",
                xmlns: "http://www.w3.org/2000/xmlns/"
            };

            function d3_selection_attr(e, n) {
                return e = P.ns.qualify(e), null == n ? e.local ? function () {
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
                return new RegExp("(?:^|\\s+)" + P.requote(t) + "(?:\\s+|$)", "g")
            }

            function d3_selection_classes(t) {
                return (t + "").trim().split(/^|\s+/)
            }

            function d3_selection_classed(n, r) {
                var i = (n = d3_selection_classes(n).map(d3_selection_classedName)).length;
                return "function" == typeof r ? function () {
                    for (var t = -1, e = r.apply(this, arguments); ++t < i;) n[t](this, e)
                } : function () {
                    for (var t = -1; ++t < i;) n[t](this, r)
                }
            }

            function d3_selection_classedName(r) {
                var i = d3_selection_classedRe(r);
                return function (t, e) {
                    if (n = t.classList) return e ? n.add(r) : n.remove(r);
                    var n = t.getAttribute("class") || "";
                    e ? (i.lastIndex = 0, i.test(n) || t.setAttribute("class", d3_collapse(n + " " + r))) : t.setAttribute("class", d3_collapse(n.replace(i, " ")))
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
                return "function" == typeof n ? n : (n = P.ns.qualify(n)).local ? function () {
                    return this.ownerDocument.createElementNS(n.space, n.local)
                } : function () {
                    var t = this.ownerDocument, e = this.namespaceURI;
                    return e === v && t.documentElement.namespaceURI === v ? t.createElement(n) : t.createElementNS(e, n)
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
                    return _(this, t)
                }
            }

            function d3_selection_each(t, e) {
                for (var n = 0, r = t.length; n < r; n++) for (var i, a = t[n], o = 0, s = a.length; o < s; o++) (i = a[o]) && e(i, o, n);
                return t
            }

            function d3_selection_enter(t) {
                return h(t, x), t
            }

            P.ns = {
                prefix: y, qualify: function (t) {
                    var e = t.indexOf(":"), n = t;
                    return 0 <= e && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), y.hasOwnProperty(n) ? {
                        space: y[n],
                        local: t
                    } : t
                }
            }, m.attr = function (t, e) {
                if (arguments.length < 2) {
                    if ("string" == typeof t) {
                        var n = this.node();
                        return (t = P.ns.qualify(t)).local ? n.getAttributeNS(t.space, t.local) : n.getAttribute(t)
                    }
                    for (e in t) this.each(d3_selection_attr(e, t[e]));
                    return this
                }
                return this.each(d3_selection_attr(t, e))
            }, m.classed = function (t, e) {
                if (arguments.length < 2) {
                    if ("string" == typeof t) {
                        var n = this.node(), r = (t = d3_selection_classes(t)).length, i = -1;
                        if (e = n.classList) {
                            for (; ++i < r;) if (!e.contains(t[i])) return !1
                        } else for (e = n.getAttribute("class"); ++i < r;) if (!d3_selection_classedRe(t[i]).test(e)) return !1;
                        return !0
                    }
                    for (e in t) this.each(d3_selection_classed(e, t[e]));
                    return this
                }
                return this.each(d3_selection_classed(t, e))
            }, m.style = function (t, e, n) {
                var r = arguments.length;
                if (r < 3) {
                    if ("string" != typeof t) {
                        for (n in r < 2 && (e = ""), t) this.each(d3_selection_style(n, t[n], e));
                        return this
                    }
                    if (r < 2) {
                        var i = this.node();
                        return d3_window(i).getComputedStyle(i, null).getPropertyValue(t)
                    }
                    n = ""
                }
                return this.each(d3_selection_style(t, e, n))
            }, m.property = function (t, e) {
                if (arguments.length < 2) {
                    if ("string" == typeof t) return this.node()[t];
                    for (e in t) this.each(d3_selection_property(e, t[e]));
                    return this
                }
                return this.each(d3_selection_property(t, e))
            }, m.text = function (e) {
                return arguments.length ? this.each("function" == typeof e ? function () {
                    var t = e.apply(this, arguments);
                    this.textContent = null == t ? "" : t
                } : null == e ? function () {
                    this.textContent = ""
                } : function () {
                    this.textContent = e
                }) : this.node().textContent
            }, m.html = function (e) {
                return arguments.length ? this.each("function" == typeof e ? function () {
                    var t = e.apply(this, arguments);
                    this.innerHTML = null == t ? "" : t
                } : null == e ? function () {
                    this.innerHTML = ""
                } : function () {
                    this.innerHTML = e
                }) : this.node().innerHTML
            }, m.append = function (t) {
                return t = d3_selection_creator(t), this.select(function () {
                    return this.appendChild(t.apply(this, arguments))
                })
            }, m.insert = function (t, e) {
                return t = d3_selection_creator(t), e = d3_selection_selector(e), this.select(function () {
                    return this.insertBefore(t.apply(this, arguments), e.apply(this, arguments) || null)
                })
            }, m.remove = function () {
                return this.each(d3_selectionRemove)
            }, m.data = function (t, g) {
                var e, n, r = -1, i = this.length;
                if (!arguments.length) {
                    for (t = new Array(i = (e = this[0]).length); ++r < i;) (n = e[r]) && (t[r] = n.__data__);
                    return t
                }

                function bind(t, e) {
                    var n, r, i, a = t.length, o = e.length, s = Math.min(a, o), u = new Array(o), c = new Array(o),
                        l = new Array(a);
                    if (g) {
                        var h, d = new d3_Map, f = new Array(a);
                        for (n = -1; ++n < a;) (r = t[n]) && (d.has(h = g.call(r, r.__data__, n)) ? l[n] = r : d.set(h, r), f[n] = h);
                        for (n = -1; ++n < o;) (r = d.get(h = g.call(e, i = e[n], n))) ? !0 !== r && ((u[n] = r).__data__ = i) : c[n] = d3_selection_dataNode(i), d.set(h, !0);
                        for (n = -1; ++n < a;) n in f && !0 !== d.get(f[n]) && (l[n] = t[n])
                    } else {
                        for (n = -1; ++n < s;) r = t[n], i = e[n], r ? (r.__data__ = i, u[n] = r) : c[n] = d3_selection_dataNode(i);
                        for (; n < o; ++n) c[n] = d3_selection_dataNode(e[n]);
                        for (; n < a; ++n) l[n] = t[n]
                    }
                    c.update = u, c.parentNode = u.parentNode = l.parentNode = t.parentNode, p.push(c), _.push(u), m.push(l)
                }

                var p = d3_selection_enter([]), _ = d3_selection([]), m = d3_selection([]);
                if ("function" == typeof t) for (; ++r < i;) bind(e = this[r], t.call(e, e.parentNode.__data__, r)); else for (; ++r < i;) bind(e = this[r], t);
                return _.enter = function () {
                    return p
                }, _.exit = function () {
                    return m
                }, _
            }, m.datum = function (t) {
                return arguments.length ? this.property("__data__", t) : this.property("__data__")
            }, m.filter = function (t) {
                var e, n, r, i = [];
                "function" != typeof t && (t = d3_selection_filter(t));
                for (var a = 0, o = this.length; a < o; a++) {
                    i.push(e = []), e.parentNode = (n = this[a]).parentNode;
                    for (var s = 0, u = n.length; s < u; s++) (r = n[s]) && t.call(r, r.__data__, s, a) && e.push(r)
                }
                return d3_selection(i)
            }, m.order = function () {
                for (var t = -1, e = this.length; ++t < e;) for (var n, r = this[t], i = r.length - 1, a = r[i]; 0 <= --i;) (n = r[i]) && (a && a !== n.nextSibling && a.parentNode.insertBefore(n, a), a = n);
                return this
            }, m.sort = function (t) {
                t = function (n) {
                    arguments.length || (n = d3_ascending);
                    return function (t, e) {
                        return t && e ? n(t.__data__, e.__data__) : !t - !e
                    }
                }.apply(this, arguments);
                for (var e = -1, n = this.length; ++e < n;) this[e].sort(t);
                return this.order()
            }, m.each = function (r) {
                return d3_selection_each(this, function (t, e, n) {
                    r.call(t, t.__data__, e, n)
                })
            }, m.call = function (t) {
                var e = d(arguments);
                return t.apply(e[0] = this, e), this
            }, m.empty = function () {
                return !this.node()
            }, m.node = function () {
                for (var t = 0, e = this.length; t < e; t++) for (var n = this[t], r = 0, i = n.length; r < i; r++) {
                    var a = n[r];
                    if (a) return a
                }
                return null
            }, m.size = function () {
                var t = 0;
                return d3_selection_each(this, function () {
                    ++t
                }), t
            };
            var x = [];

            function d3_selection_on(i, e, n) {
                var r = "__on" + i, t = i.indexOf("."), a = d3_selection_onListener;
                0 < t && (i = i.slice(0, t));
                var o = b.get(i);

                function onRemove() {
                    var t = this[r];
                    t && (this.removeEventListener(i, t, t.$), delete this[r])
                }

                return o && (i = o, a = d3_selection_onFilter), t ? e ? function () {
                    var t = a(e, d(arguments));
                    onRemove.call(this), this.addEventListener(i, this[r] = t, t.$ = n), t._ = e
                } : onRemove : e ? d3_noop : function () {
                    var t, e = new RegExp("^__on([^.]+)" + P.requote(i) + "$");
                    for (var n in this) if (t = n.match(e)) {
                        var r = this[n];
                        this.removeEventListener(t[1], r, r.$), delete this[n]
                    }
                }
            }

            P.selection.enter = d3_selection_enter, (P.selection.enter.prototype = x).append = m.append, x.empty = m.empty, x.node = m.node, x.call = m.call, x.size = m.size, x.select = function (t) {
                for (var e, n, r, i, a, o = [], s = -1, u = this.length; ++s < u;) {
                    r = (i = this[s]).update, o.push(e = []), e.parentNode = i.parentNode;
                    for (var c = -1, l = i.length; ++c < l;) (a = i[c]) ? (e.push(r[c] = n = t.call(i.parentNode, a.__data__, c, s)), n.__data__ = a.__data__) : e.push(null)
                }
                return d3_selection(o)
            }, x.insert = function (t, e) {
                var o, s, u;
                return arguments.length < 2 && (o = this, e = function (t, e, n) {
                    var r, i = o[n].update, a = i.length;
                    for (n != u && (u = n, s = 0), s <= e && (s = e + 1); !(r = i[s]) && ++s < a;) ;
                    return r
                }), m.insert.call(this, t, e)
            }, P.select = function (t) {
                var e;
                return "string" == typeof t ? (e = [f(t, p)]).parentNode = p.documentElement : (e = [t]).parentNode = d3_documentElement(t), d3_selection([e])
            }, P.selectAll = function (t) {
                var e;
                return "string" == typeof t ? (e = d(g(t, p))).parentNode = p.documentElement : (e = d(t)).parentNode = null, d3_selection([e])
            }, m.on = function (t, e, n) {
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
            var b = P.map({mouseenter: "mouseover", mouseleave: "mouseout"});

            function d3_selection_onListener(n, r) {
                return function (t) {
                    var e = P.event;
                    P.event = t, r[0] = this.__data__;
                    try {
                        n.apply(this, r)
                    } finally {
                        P.event = e
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

            p && b.forEach(function (t) {
                "on" + t in p && b.remove(t)
            });
            var w, M = 0;

            function d3_event_dragSuppress(t) {
                var n = ".dragsuppress-" + ++M, r = "click" + n,
                    i = P.select(d3_window(t)).on("touchmove" + n, d3_eventPreventDefault).on("dragstart" + n, d3_eventPreventDefault).on("selectstart" + n, d3_eventPreventDefault);
                if (null == w && (w = !("onselectstart" in t) && d3_vendorSymbol(t.style, "userSelect")), w) {
                    var a = d3_documentElement(t).style, o = a[w];
                    a[w] = "none"
                }
                return function (t) {
                    if (i.on(n, null), w && (a[w] = o), t) {
                        var e = function () {
                            i.on(r, null)
                        };
                        i.on(r, function () {
                            d3_eventPreventDefault(), e()
                        }, !0), setTimeout(e, 0)
                    }
                }
            }

            P.mouse = function (t) {
                return d3_mousePoint(t, d3_eventSource())
            };
            var k = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;

            function d3_mousePoint(t, e) {
                e.changedTouches && (e = e.changedTouches[0]);
                var n = t.ownerSVGElement || t;
                if (n.createSVGPoint) {
                    var r = n.createSVGPoint();
                    if (k < 0) {
                        var i = d3_window(t);
                        if (i.scrollX || i.scrollY) {
                            var a = (n = P.select("body").append("svg").style({
                                position: "absolute",
                                top: 0,
                                left: 0,
                                margin: 0,
                                padding: 0,
                                border: "none"
                            }, "important"))[0][0].getScreenCTM();
                            k = !(a.f || a.e), n.remove()
                        }
                    }
                    return r.y = k ? (r.x = e.pageX, e.pageY) : (r.x = e.clientX, e.clientY), [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y]
                }
                var o = t.getBoundingClientRect();
                return [e.clientX - o.left - t.clientLeft, e.clientY - o.top - t.clientTop]
            }

            function d3_behavior_dragTouchId() {
                return P.event.changedTouches[0].identifier
            }

            P.touch = function (t, e, n) {
                if (arguments.length < 3 && (n = e, e = d3_eventSource().changedTouches), e) for (var r, i = 0, a = e.length; i < a; ++i) if ((r = e[i]).identifier === n) return d3_mousePoint(t, r)
            }, P.behavior.drag = function () {
                var p = d3_eventDispatch(drag, "drag", "dragstart", "dragend"), _ = null,
                    t = dragstart(d3_noop, P.mouse, d3_window, "mousemove", "mouseup"),
                    e = dragstart(d3_behavior_dragTouchId, P.touch, d3_identity, "touchmove", "touchend");

                function drag() {
                    this.on("mousedown.drag", t).on("touchstart.drag", e)
                }

                function dragstart(l, h, d, f, g) {
                    return function () {
                        var r, t = P.event.target.correspondingElement || P.event.target, i = this.parentNode,
                            a = p.of(this, arguments), o = 0, s = l(), e = ".drag" + (null == s ? "" : "-" + s),
                            n = P.select(d(t)).on(f + e, function () {
                                var t, e, n = h(i, s);
                                if (!n) return;
                                t = n[0] - c[0], e = n[1] - c[1], o |= t | e, a({
                                    type: "drag",
                                    x: (c = n)[0] + r[0],
                                    y: n[1] + r[1],
                                    dx: t,
                                    dy: e
                                })
                            }).on(g + e, function () {
                                if (!h(i, s)) return;
                                n.on(f + e, null).on(g + e, null), u(o), a({type: "dragend"})
                            }), u = d3_event_dragSuppress(t), c = h(i, s);
                        r = _ ? [(r = _.apply(this, arguments)).x - c[0], r.y - c[1]] : [0, 0], a({type: "dragstart"})
                    }
                }

                return drag.origin = function (t) {
                    return arguments.length ? (_ = t, drag) : _
                }, P.rebind(drag, p, "on")
            }, P.touches = function (n, t) {
                return arguments.length < 2 && (t = d3_eventSource().touches), t ? d(t).map(function (t) {
                    var e = d3_mousePoint(n, t);
                    return e.identifier = t.identifier, e
                }) : []
            };
            var Y = 1e-6, S = Y * Y, V = Math.PI, R = 2 * V, X = R - Y, W = V / 2, C = V / 180, E = 180 / V;

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
                return 1 < t ? W : t < -1 ? -W : Math.asin(t)
            }

            function d3_cosh(t) {
                return ((t = Math.exp(t)) + 1 / t) / 2
            }

            function d3_haversin(t) {
                return (t = Math.sin(t / 2)) * t
            }

            var N = Math.SQRT2;
            P.interpolateZoom = function (t, e) {
                var n, o, s = t[0], u = t[1], c = t[2], r = e[0], i = e[1], a = e[2], l = r - s, h = i - u,
                    d = l * l + h * h;
                if (d < S) o = Math.log(a / c) / N, n = function (t) {
                    return [s + t * l, u + t * h, c * Math.exp(N * t * o)]
                }; else {
                    var f = Math.sqrt(d), g = (a * a - c * c + 4 * d) / (2 * c * 2 * f),
                        p = (a * a - c * c - 4 * d) / (2 * a * 2 * f), _ = Math.log(Math.sqrt(g * g + 1) - g),
                        m = Math.log(Math.sqrt(p * p + 1) - p);
                    o = (m - _) / N, n = function (t) {
                        var e, n, r = t * o, i = d3_cosh(_),
                            a = c / (2 * f) * (i * (n = N * r + _, ((n = Math.exp(2 * n)) - 1) / (n + 1)) - (e = _, ((e = Math.exp(e)) - 1 / e) / 2));
                        return [s + a * l, u + a * h, c * i / d3_cosh(N * r + _)]
                    }
                }
                return n.duration = 1e3 * o, n
            }, P.behavior.zoom = function () {
                var e, u, n, r, m, i, a, o, s, v = {x: 0, y: 0, k: 1}, c = [960, 500], l = z, h = 250, d = 0,
                    y = "mousedown.zoom", f = "mousemove.zoom", g = "mouseup.zoom", x = "touchstart.zoom",
                    b = d3_eventDispatch(zoom, "zoomstart", "zoom", "zoomend");

                function zoom(t) {
                    t.on(y, mousedowned).on(A + ".zoom", mousewheeled).on("dblclick.zoom", dblclicked).on(x, touchstarted)
                }

                function location(t) {
                    return [(t[0] - v.x) / v.k, (t[1] - v.y) / v.k]
                }

                function scaleTo(t) {
                    v.k = Math.max(l[0], Math.min(l[1], t))
                }

                function translateTo(t, e) {
                    var n;
                    e = [(n = e)[0] * v.k + v.x, n[1] * v.k + v.y], v.x += t[0] - e[0], v.y += t[1] - e[1]
                }

                function zoomTo(t, e, n, r) {
                    t.__chart__ = {
                        x: v.x,
                        y: v.y,
                        k: v.k
                    }, scaleTo(Math.pow(2, r)), translateTo(u = e, n), t = P.select(t), 0 < h && (t = t.transition().duration(h)), t.call(zoom.event)
                }

                function rescale() {
                    a && a.domain(i.range().map(function (t) {
                        return (t - v.x) / v.k
                    }).map(i.invert)), s && s.domain(o.range().map(function (t) {
                        return (t - v.y) / v.k
                    }).map(o.invert))
                }

                function zoomstarted(t) {
                    d++ || t({type: "zoomstart"})
                }

                function zoomed(t) {
                    rescale(), t({type: "zoom", scale: v.k, translate: [v.x, v.y]})
                }

                function zoomended(t) {
                    --d || (t({type: "zoomend"}), u = null)
                }

                function mousedowned() {
                    var t = this, e = b.of(t, arguments), n = 0, r = P.select(d3_window(t)).on(f, function () {
                        n = 1, translateTo(P.mouse(t), i), zoomed(e)
                    }).on(g, function () {
                        r.on(f, null).on(g, null), a(n), zoomended(e)
                    }), i = location(P.mouse(t)), a = d3_event_dragSuppress(t);
                    Ne.call(t), zoomstarted(e)
                }

                function touchstarted() {
                    var c, l = this, h = b.of(l, arguments), d = {}, f = 0,
                        i = ".zoom-" + P.event.changedTouches[0].identifier, g = "touchmove" + i, p = "touchend" + i,
                        _ = [], a = P.select(l), o = d3_event_dragSuppress(l);

                    function relocate() {
                        var t = P.touches(l);
                        return c = v.k, t.forEach(function (t) {
                            t.identifier in d && (d[t.identifier] = location(t))
                        }), t
                    }

                    function started() {
                        var t = P.event.target;
                        P.select(t).on(g, moved).on(p, ended), _.push(t);
                        for (var e = P.event.changedTouches, n = 0, r = e.length; n < r; ++n) d[e[n].identifier] = null;
                        var i = relocate(), a = Date.now();
                        if (1 === i.length) {
                            if (a - m < 500) {
                                var o = i[0];
                                zoomTo(l, o, d[o.identifier], Math.floor(Math.log(v.k) / Math.LN2) + 1), d3_eventPreventDefault()
                            }
                            m = a
                        } else if (1 < i.length) {
                            o = i[0];
                            var s = i[1], u = o[0] - s[0], c = o[1] - s[1];
                            f = u * u + c * c
                        }
                    }

                    function moved() {
                        var t, e, n, r, i = P.touches(l);
                        Ne.call(l);
                        for (var a = 0, o = i.length; a < o; ++a, r = null) if (n = i[a], r = d[n.identifier]) {
                            if (e) break;
                            t = n, e = r
                        }
                        if (r) {
                            var s = (s = n[0] - t[0]) * s + (s = n[1] - t[1]) * s, u = f && Math.sqrt(s / f);
                            t = [(t[0] + n[0]) / 2, (t[1] + n[1]) / 2], e = [(e[0] + r[0]) / 2, (e[1] + r[1]) / 2], scaleTo(u * c)
                        }
                        m = null, translateTo(t, e), zoomed(h)
                    }

                    function ended() {
                        if (P.event.touches.length) {
                            for (var t = P.event.changedTouches, e = 0, n = t.length; e < n; ++e) delete d[t[e].identifier];
                            for (var r in d) return void relocate()
                        }
                        P.selectAll(_).on(i, null), a.on(y, mousedowned).on(x, touchstarted), o(), zoomended(h)
                    }

                    started(), zoomstarted(h), a.on(y, null).on(x, started)
                }

                function mousewheeled() {
                    var t = b.of(this, arguments);
                    r ? clearTimeout(r) : (Ne.call(this), e = location(u = n || P.mouse(this)), zoomstarted(t)), r = setTimeout(function () {
                        r = null, zoomended(t)
                    }, 50), d3_eventPreventDefault(), scaleTo(Math.pow(2, .002 * T()) * v.k), translateTo(u, e), zoomed(t)
                }

                function dblclicked() {
                    var t = P.mouse(this), e = Math.log(v.k) / Math.LN2;
                    zoomTo(this, t, location(t), P.event.shiftKey ? Math.ceil(e) - 1 : Math.floor(e) + 1)
                }

                return A || (A = "onwheel" in p ? (T = function () {
                    return -P.event.deltaY * (P.event.deltaMode ? 120 : 1)
                }, "wheel") : "onmousewheel" in p ? (T = function () {
                    return P.event.wheelDelta
                }, "mousewheel") : (T = function () {
                    return -P.event.detail
                }, "MozMousePixelScroll")), zoom.event = function (t) {
                    t.each(function () {
                        var s = b.of(this, arguments), e = v;
                        Re ? P.select(this).transition().each("start.zoom", function () {
                            v = this.__chart__ || {x: 0, y: 0, k: 1}, zoomstarted(s)
                        }).tween("zoom:zoom", function () {
                            var r = c[0], t = c[1], i = u ? u[0] : r / 2, a = u ? u[1] : t / 2,
                                o = P.interpolateZoom([(i - v.x) / v.k, (a - v.y) / v.k, r / v.k], [(i - e.x) / e.k, (a - e.y) / e.k, r / e.k]);
                            return function (t) {
                                var e = o(t), n = r / e[2];
                                this.__chart__ = v = {x: i - e[0] * n, y: a - e[1] * n, k: n}, zoomed(s)
                            }
                        }).each("interrupt.zoom", function () {
                            zoomended(s)
                        }).each("end.zoom", function () {
                            zoomended(s)
                        }) : (this.__chart__ = v, zoomstarted(s), zoomed(s), zoomended(s))
                    })
                }, zoom.translate = function (t) {
                    return arguments.length ? (v = {x: +t[0], y: +t[1], k: v.k}, rescale(), zoom) : [v.x, v.y]
                }, zoom.scale = function (t) {
                    return arguments.length ? (v = {x: v.x, y: v.y, k: null}, scaleTo(+t), rescale(), zoom) : v.k
                }, zoom.scaleExtent = function (t) {
                    return arguments.length ? (l = null == t ? z : [+t[0], +t[1]], zoom) : l
                }, zoom.center = function (t) {
                    return arguments.length ? (n = t && [+t[0], +t[1]], zoom) : n
                }, zoom.size = function (t) {
                    return arguments.length ? (c = t && [+t[0], +t[1]], zoom) : c
                }, zoom.duration = function (t) {
                    return arguments.length ? (h = +t, zoom) : h
                }, zoom.x = function (t) {
                    return arguments.length ? (i = (a = t).copy(), v = {x: 0, y: 0, k: 1}, zoom) : a
                }, zoom.y = function (t) {
                    return arguments.length ? (o = (s = t).copy(), v = {x: 0, y: 0, k: 1}, zoom) : s
                }, P.rebind(zoom, b, "on")
            };
            var T, A, z = [0, 1 / 0];

            function d3_color() {
            }

            function d3_hsl(t, e, n) {
                return this instanceof d3_hsl ? (this.h = +t, this.s = +e, void (this.l = +n)) : arguments.length < 2 ? t instanceof d3_hsl ? new d3_hsl(t.h, t.s, t.l) : d3_rgb_parse("" + t, d3_rgb_hsl, d3_hsl) : new d3_hsl(t, e, n)
            }

            (P.color = d3_color).prototype.toString = function () {
                return this.rgb() + ""
            };
            var D = (P.hsl = d3_hsl).prototype = new d3_color;

            function d3_hsl_rgb(t, e, n) {
                var r, i;

                function vv(t) {
                    return Math.round(255 * (360 < (e = t) ? e -= 360 : e < 0 && (e += 360), e < 60 ? r + (i - r) * e / 60 : e < 180 ? i : e < 240 ? r + (i - r) * (240 - e) / 60 : r));
                    var e
                }

                return t = isNaN(t) ? 0 : (t %= 360) < 0 ? t + 360 : t, e = isNaN(e) ? 0 : e < 0 ? 0 : 1 < e ? 1 : e, r = 2 * (n = n < 0 ? 0 : 1 < n ? 1 : n) - (i = n <= .5 ? n * (1 + e) : n + e - n * e), new d3_rgb(vv(t + 120), vv(t), vv(t - 120))
            }

            function d3_hcl(t, e, n) {
                return this instanceof d3_hcl ? (this.h = +t, this.c = +e, void (this.l = +n)) : arguments.length < 2 ? t instanceof d3_hcl ? new d3_hcl(t.h, t.c, t.l) : d3_lab_hcl(t instanceof d3_lab ? t.l : (t = d3_rgb_lab((t = P.rgb(t)).r, t.g, t.b)).l, t.a, t.b) : new d3_hcl(t, e, n)
            }

            D.brighter = function (t) {
                return t = Math.pow(.7, arguments.length ? t : 1), new d3_hsl(this.h, this.s, this.l / t)
            }, D.darker = function (t) {
                return t = Math.pow(.7, arguments.length ? t : 1), new d3_hsl(this.h, this.s, t * this.l)
            }, D.rgb = function () {
                return d3_hsl_rgb(this.h, this.s, this.l)
            };
            var F = (P.hcl = d3_hcl).prototype = new d3_color;

            function d3_hcl_lab(t, e, n) {
                return isNaN(t) && (t = 0), isNaN(e) && (e = 0), new d3_lab(n, Math.cos(t *= C) * e, Math.sin(t) * e)
            }

            function d3_lab(t, e, n) {
                return this instanceof d3_lab ? (this.l = +t, this.a = +e, void (this.b = +n)) : arguments.length < 2 ? t instanceof d3_lab ? new d3_lab(t.l, t.a, t.b) : t instanceof d3_hcl ? d3_hcl_lab(t.h, t.c, t.l) : d3_rgb_lab((t = d3_rgb(t)).r, t.g, t.b) : new d3_lab(t, e, n)
            }

            F.brighter = function (t) {
                return new d3_hcl(this.h, this.c, Math.min(100, this.l + q * (arguments.length ? t : 1)))
            }, F.darker = function (t) {
                return new d3_hcl(this.h, this.c, Math.max(0, this.l - q * (arguments.length ? t : 1)))
            }, F.rgb = function () {
                return d3_hcl_lab(this.h, this.c, this.l).rgb()
            }, P.lab = d3_lab;
            var q = 18, j = .95047, I = 1, H = 1.08883, B = d3_lab.prototype = new d3_color;

            function d3_lab_rgb(t, e, n) {
                var r = (t + 16) / 116, i = r + e / 500, a = r - n / 200;
                return new d3_rgb(d3_xyz_rgb(3.2404542 * (i = d3_lab_xyz(i) * j) - 1.5371385 * (r = d3_lab_xyz(r) * I) - .4985314 * (a = d3_lab_xyz(a) * H)), d3_xyz_rgb(-.969266 * i + 1.8760108 * r + .041556 * a), d3_xyz_rgb(.0556434 * i - .2040259 * r + 1.0572252 * a))
            }

            function d3_lab_hcl(t, e, n) {
                return 0 < t ? new d3_hcl(Math.atan2(n, e) * E, Math.sqrt(e * e + n * n), t) : new d3_hcl(NaN, NaN, t)
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

            B.brighter = function (t) {
                return new d3_lab(Math.min(100, this.l + q * (arguments.length ? t : 1)), this.a, this.b)
            }, B.darker = function (t) {
                return new d3_lab(Math.max(0, this.l - q * (arguments.length ? t : 1)), this.a, this.b)
            }, B.rgb = function () {
                return d3_lab_rgb(this.l, this.a, this.b)
            };
            var U = (P.rgb = d3_rgb).prototype = new d3_color;

            function d3_rgb_hex(t) {
                return t < 16 ? "0" + Math.max(0, t).toString(16) : Math.min(255, t).toString(16)
            }

            function d3_rgb_parse(t, e, n) {
                var r, i, a, o = 0, s = 0, u = 0;
                if (r = /([a-z]+)\((.*)\)/.exec(t = t.toLowerCase())) switch (i = r[2].split(","), r[1]) {
                    case"hsl":
                        return n(parseFloat(i[0]), parseFloat(i[1]) / 100, parseFloat(i[2]) / 100);
                    case"rgb":
                        return e(d3_rgb_parseNumber(i[0]), d3_rgb_parseNumber(i[1]), d3_rgb_parseNumber(i[2]))
                }
                return (a = O.get(t)) ? e(a.r, a.g, a.b) : (null == t || "#" !== t.charAt(0) || isNaN(a = parseInt(t.slice(1), 16)) || (4 === t.length ? (o = (3840 & a) >> 4, o |= o >> 4, s = 240 & a, s |= s >> 4, u = 15 & a, u |= u << 4) : 7 === t.length && (o = (16711680 & a) >> 16, s = (65280 & a) >> 8, u = 255 & a)), e(o, s, u))
            }

            function d3_rgb_hsl(t, e, n) {
                var r, i, a = Math.min(t /= 255, e /= 255, n /= 255), o = Math.max(t, e, n), s = o - a, u = (o + a) / 2;
                return s ? (i = u < .5 ? s / (o + a) : s / (2 - o - a), r = t == o ? (e - n) / s + (e < n ? 6 : 0) : e == o ? (n - t) / s + 2 : (t - e) / s + 4, r *= 60) : (r = NaN, i = 0 < u && u < 1 ? 0 : r), new d3_hsl(r, i, u)
            }

            function d3_rgb_lab(t, e, n) {
                var r = d3_xyz_lab((.4124564 * (t = d3_rgb_xyz(t)) + .3575761 * (e = d3_rgb_xyz(e)) + .1804375 * (n = d3_rgb_xyz(n))) / j),
                    i = d3_xyz_lab((.2126729 * t + .7151522 * e + .072175 * n) / I);
                return d3_lab(116 * i - 16, 500 * (r - i), 200 * (i - d3_xyz_lab((.0193339 * t + .119192 * e + .9503041 * n) / H)))
            }

            function d3_rgb_xyz(t) {
                return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
            }

            function d3_rgb_parseNumber(t) {
                var e = parseFloat(t);
                return "%" === t.charAt(t.length - 1) ? Math.round(2.55 * e) : e
            }

            U.brighter = function (t) {
                t = Math.pow(.7, arguments.length ? t : 1);
                var e = this.r, n = this.g, r = this.b;
                return e || n || r ? (e && e < 30 && (e = 30), n && n < 30 && (n = 30), r && r < 30 && (r = 30), new d3_rgb(Math.min(255, e / t), Math.min(255, n / t), Math.min(255, r / t))) : new d3_rgb(30, 30, 30)
            }, U.darker = function (t) {
                return new d3_rgb((t = Math.pow(.7, arguments.length ? t : 1)) * this.r, t * this.g, t * this.b)
            }, U.hsl = function () {
                return d3_rgb_hsl(this.r, this.g, this.b)
            }, U.toString = function () {
                return "#" + d3_rgb_hex(this.r) + d3_rgb_hex(this.g) + d3_rgb_hex(this.b)
            };
            var O = P.map({
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

            function d3_xhr(i, a, o, t) {
                var n, s = {}, u = P.dispatch("beforesend", "progress", "load", "error"), c = {},
                    l = new XMLHttpRequest, h = null;

                function respond() {
                    var t, e, n, r = l.status;
                    if (!r && ((n = (e = l).responseType) && "text" !== n ? e.response : e.responseText) || 200 <= r && r < 300 || 304 === r) {
                        try {
                            t = o.call(s, l)
                        } catch (t) {
                            return void u.error.call(s, t)
                        }
                        u.load.call(s, t)
                    } else u.error.call(s, l)
                }

                return !this.XDomainRequest || "withCredentials" in l || !/^(http(s)?:)?\/\//.test(i) || (l = new XDomainRequest), "onload" in l ? l.onload = l.onerror = respond : l.onreadystatechange = function () {
                    3 < l.readyState && respond()
                }, l.onprogress = function (t) {
                    var e = P.event;
                    P.event = t;
                    try {
                        u.progress.call(s, l)
                    } finally {
                        P.event = e
                    }
                }, s.header = function (t, e) {
                    return t = (t + "").toLowerCase(), arguments.length < 2 ? c[t] : (null == e ? delete c[t] : c[t] = e + "", s)
                }, s.mimeType = function (t) {
                    return arguments.length ? (a = null == t ? null : t + "", s) : a
                }, s.responseType = function (t) {
                    return arguments.length ? (h = t, s) : h
                }, s.response = function (t) {
                    return o = t, s
                }, ["get", "post"].forEach(function (t) {
                    s[t] = function () {
                        return s.send.apply(s, [t].concat(d(arguments)))
                    }
                }), s.send = function (t, e, n) {
                    if (2 === arguments.length && "function" == typeof e && (n = e, e = null), l.open(t, i, !0), null == a || "accept" in c || (c.accept = a + ",*/*"), l.setRequestHeader) for (var r in c) l.setRequestHeader(r, c[r]);
                    return null != a && l.overrideMimeType && l.overrideMimeType(a), null != h && (l.responseType = h), null != n && s.on("error", n).on("load", function (t) {
                        n(null, t)
                    }), u.beforesend.call(s, l), l.send(null == e ? null : e), s
                }, s.abort = function () {
                    return l.abort(), s
                }, P.rebind(s, u, "on"), null == t ? s : s.get(1 === (n = t).length ? function (t, e) {
                    n(null == t ? e : null)
                } : n)
            }

            O.forEach(function (t, e) {
                O.set(t, d3_rgbNumber(e))
            }), P.functor = d3_functor, P.xhr = d3_xhrType(d3_identity), P.dsv = function (i, a) {
                var e = new RegExp('["' + i + "\n]"), h = i.charCodeAt(0);

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
                    return t.map(formatValue).join(i)
                }

                function formatValue(t) {
                    return e.test(t) ? '"' + t.replace(/\"/g, '""') + '"' : t
                }

                return dsv.parse = function (t, r) {
                    var i;
                    return dsv.parseRows(t, function (t, e) {
                        if (i) return i(t, e - 1);
                        var n = new Function("d", "return {" + t.map(function (t, e) {
                            return JSON.stringify(t) + ": d[" + e + "]"
                        }).join(",") + "}");
                        i = r ? function (t, e) {
                            return r(n(t), e)
                        } : n
                    })
                }, dsv.parseRows = function (i, t) {
                    var e, a, o = {}, s = {}, n = [], u = i.length, c = 0, r = 0;

                    function token() {
                        if (u <= c) return s;
                        if (a) return a = !1, o;
                        var t = c;
                        if (34 === i.charCodeAt(t)) {
                            for (var e = t; e++ < u;) if (34 === i.charCodeAt(e)) {
                                if (34 !== i.charCodeAt(e + 1)) break;
                                ++e
                            }
                            return c = e + 2, 13 === (n = i.charCodeAt(e + 1)) ? (a = !0, 10 === i.charCodeAt(e + 2) && ++c) : 10 === n && (a = !0), i.slice(t + 1, e).replace(/""/g, '"')
                        }
                        for (; c < u;) {
                            var n, r = 1;
                            if (10 === (n = i.charCodeAt(c++))) a = !0; else if (13 === n) a = !0, 10 === i.charCodeAt(c) && (++c, ++r); else if (n !== h) continue;
                            return i.slice(t, c - r)
                        }
                        return i.slice(t)
                    }

                    for (; (e = token()) !== s;) {
                        for (var l = []; e !== o && e !== s;) l.push(e), e = token();
                        t && null == (l = t(l, r++)) || n.push(l)
                    }
                    return n
                }, dsv.format = function (t) {
                    if (Array.isArray(t[0])) return dsv.formatRows(t);
                    var n = new d3_Set, r = [];
                    return t.forEach(function (t) {
                        for (var e in t) n.has(e) || r.push(n.add(e))
                    }), [r.map(formatValue).join(i)].concat(t.map(function (e) {
                        return r.map(function (t) {
                            return formatValue(e[t])
                        }).join(i)
                    })).join("\n")
                }, dsv.formatRows = function (t) {
                    return t.map(formatRow).join("\n")
                }, dsv
            }, P.csv = P.dsv(",", "text/csv"), P.tsv = P.dsv("\t", "text/tab-separated-values");
            var G, Z, Q, J, $ = this[d3_vendorSymbol(this, "requestAnimationFrame")] || function (t) {
                setTimeout(t, 17)
            };

            function d3_timer(t, e, n) {
                var r = arguments.length;
                r < 2 && (e = 0), r < 3 && (n = Date.now());
                var i = {c: t, t: n + e, n: null};
                return Z ? Z.n = i : G = i, Z = i, Q || (J = clearTimeout(J), Q = 1, $(d3_timer_step)), i
            }

            function d3_timer_step() {
                var t = d3_timer_mark(), e = d3_timer_sweep() - t;
                24 < e ? (isFinite(e) && (clearTimeout(J), J = setTimeout(d3_timer_step, e)), Q = 0) : (Q = 1, $(d3_timer_step))
            }

            function d3_timer_mark() {
                for (var t = Date.now(), e = G; e;) t >= e.t && e.c(t - e.t) && (e.c = null), e = e.n;
                return t
            }

            function d3_timer_sweep() {
                for (var t, e = G, n = 1 / 0; e;) e = e.c ? (e.t < n && (n = e.t), (t = e).n) : t ? t.n = e.n : G = e.n;
                return Z = t, n
            }

            function d3_format_precision(t, e) {
                return e - (t ? Math.ceil(Math.log(t) / Math.LN10) : 1)
            }

            P.timer = function () {
                d3_timer.apply(this, arguments)
            }, P.timer.flush = function () {
                d3_timer_mark(), d3_timer_sweep()
            }, P.round = function (t, e) {
                return e ? Math.round(t * (e = Math.pow(10, e))) / e : Math.round(t)
            };
            var K = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(function (t, e) {
                var n = Math.pow(10, 3 * L(8 - e));
                return {
                    scale: 8 < e ? function (t) {
                        return t / n
                    } : function (t) {
                        return t * n
                    }, symbol: t
                }
            });
            P.formatPrefix = function (t, e) {
                var n = 0;
                return (t = +t) && (t < 0 && (t *= -1), e && (t = P.round(t, d3_format_precision(t, e))), n = 1 + Math.floor(1e-12 + Math.log(t) / Math.LN10), n = Math.max(-24, Math.min(24, 3 * Math.floor((n - 1) / 3)))), K[8 + n / 3]
            };
            var tt = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i, et = P.map({
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
                    return (t = P.round(t, d3_format_precision(t, e))).toFixed(Math.max(0, Math.min(20, d3_format_precision(t * (1 + 1e-15), e))))
                }
            });

            function d3_format_typeDefault(t) {
                return t + ""
            }

            var nt = P.time = {}, rt = Date;

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
                    it.setUTCDate.apply(this._, arguments)
                }, setDay: function () {
                    it.setUTCDay.apply(this._, arguments)
                }, setFullYear: function () {
                    it.setUTCFullYear.apply(this._, arguments)
                }, setHours: function () {
                    it.setUTCHours.apply(this._, arguments)
                }, setMilliseconds: function () {
                    it.setUTCMilliseconds.apply(this._, arguments)
                }, setMinutes: function () {
                    it.setUTCMinutes.apply(this._, arguments)
                }, setMonth: function () {
                    it.setUTCMonth.apply(this._, arguments)
                }, setSeconds: function () {
                    it.setUTCSeconds.apply(this._, arguments)
                }, setTime: function () {
                    it.setTime.apply(this._, arguments)
                }
            };
            var it = Date.prototype;

            function d3_time_interval(r, a, o) {
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
                    var r = ceil(t), i = [];
                    if (1 < n) for (; r < e;) o(r) % n || i.push(new Date(+r)), a(r, 1); else for (; r < e;) i.push(new Date(+r)), a(r, 1);
                    return i
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
            var at = {"-": "", _: " ", 0: "0"}, ot = /^\s*\d+/, st = /^%/;

            function d3_time_formatPad(t, e, n) {
                var r = t < 0 ? "-" : "", i = (r ? -t : t) + "", a = i.length;
                return r + (a < n ? new Array(n - a + 1).join(e) + i : i)
            }

            function d3_time_formatRe(t) {
                return new RegExp("^(?:" + t.map(P.requote).join("|") + ")", "i")
            }

            function d3_time_formatLookup(t) {
                for (var e = new d3_Map, n = -1, r = t.length; ++n < r;) e.set(t[n].toLowerCase(), n);
                return e
            }

            function d3_time_parseWeekdayNumber(t, e, n) {
                ot.lastIndex = 0;
                var r = ot.exec(e.slice(n, n + 1));
                return r ? (t.w = +r[0], n + r[0].length) : -1
            }

            function d3_time_parseWeekNumberSunday(t, e, n) {
                ot.lastIndex = 0;
                var r = ot.exec(e.slice(n));
                return r ? (t.U = +r[0], n + r[0].length) : -1
            }

            function d3_time_parseWeekNumberMonday(t, e, n) {
                ot.lastIndex = 0;
                var r = ot.exec(e.slice(n));
                return r ? (t.W = +r[0], n + r[0].length) : -1
            }

            function d3_time_parseFullYear(t, e, n) {
                ot.lastIndex = 0;
                var r = ot.exec(e.slice(n, n + 4));
                return r ? (t.y = +r[0], n + r[0].length) : -1
            }

            function d3_time_parseYear(t, e, n) {
                ot.lastIndex = 0;
                var r, i = ot.exec(e.slice(n, n + 2));
                return i ? (t.y = (r = +i[0]) + (68 < r ? 1900 : 2e3), n + i[0].length) : -1
            }

            function d3_time_parseZone(t, e, n) {
                return /^[+-]\d{4}$/.test(e = e.slice(n, n + 5)) ? (t.Z = -e, n + 5) : -1
            }

            function d3_time_parseMonthNumber(t, e, n) {
                ot.lastIndex = 0;
                var r = ot.exec(e.slice(n, n + 2));
                return r ? (t.m = r[0] - 1, n + r[0].length) : -1
            }

            function d3_time_parseDay(t, e, n) {
                ot.lastIndex = 0;
                var r = ot.exec(e.slice(n, n + 2));
                return r ? (t.d = +r[0], n + r[0].length) : -1
            }

            function d3_time_parseDayOfYear(t, e, n) {
                ot.lastIndex = 0;
                var r = ot.exec(e.slice(n, n + 3));
                return r ? (t.j = +r[0], n + r[0].length) : -1
            }

            function d3_time_parseHour24(t, e, n) {
                ot.lastIndex = 0;
                var r = ot.exec(e.slice(n, n + 2));
                return r ? (t.H = +r[0], n + r[0].length) : -1
            }

            function d3_time_parseMinutes(t, e, n) {
                ot.lastIndex = 0;
                var r = ot.exec(e.slice(n, n + 2));
                return r ? (t.M = +r[0], n + r[0].length) : -1
            }

            function d3_time_parseSeconds(t, e, n) {
                ot.lastIndex = 0;
                var r = ot.exec(e.slice(n, n + 2));
                return r ? (t.S = +r[0], n + r[0].length) : -1
            }

            function d3_time_parseMilliseconds(t, e, n) {
                ot.lastIndex = 0;
                var r = ot.exec(e.slice(n, n + 3));
                return r ? (t.L = +r[0], n + r[0].length) : -1
            }

            function d3_time_zone(t) {
                var e = t.getTimezoneOffset(), n = 0 < e ? "-" : "+", r = L(e) / 60 | 0, i = L(e) % 60;
                return n + d3_time_formatPad(r, "0", 2) + d3_time_formatPad(i, "0", 2)
            }

            function d3_time_parseLiteralPercent(t, e, n) {
                st.lastIndex = 0;
                var r = st.exec(e.slice(n, n + 1));
                return r ? n + r[0].length : -1
            }

            function d3_time_formatMulti(r) {
                for (var t = r.length, e = -1; ++e < t;) r[e][0] = this(r[e][0]);
                return function (t) {
                    for (var e = 0, n = r[e]; !n[1](t);) n = r[++e];
                    return n[0](t)
                }
            }

            P.locale = function (t) {
                return {
                    numberFormat: (e = t, k = e.decimal, s = e.thousands, u = e.grouping, r = e.currency, S = u && s ? function (t, e) {
                        for (var n = t.length, r = [], i = 0, a = u[0], o = 0; 0 < n && 0 < a && (e < o + a + 1 && (a = Math.max(1, e - o)), r.push(t.substring(n -= a, n + a)), !((o += a + 1) > e));) a = u[i = (i + 1) % u.length];
                        return r.reverse().join(s)
                    } : d3_identity, function (t) {
                        var e = tt.exec(t), l = e[1] || " ", h = e[2] || ">", d = e[3] || "-", n = e[4] || "", f = e[5],
                            g = +e[6], p = e[7], _ = e[8], m = e[9], v = 1, y = "", x = "", b = !1, w = !0;
                        switch (_ && (_ = +_.substring(1)), (f || "0" === l && "=" === h) && (f = l = "0", h = "="), m) {
                            case"n":
                                p = !0, m = "g";
                                break;
                            case"%":
                                v = 100, x = "%", m = "f";
                                break;
                            case"p":
                                v = 100, x = "%", m = "r";
                                break;
                            case"b":
                            case"o":
                            case"x":
                            case"X":
                                "#" === n && (y = "0" + m.toLowerCase());
                            case"c":
                                w = !1;
                            case"d":
                                b = !0, _ = 0;
                                break;
                            case"s":
                                v = -1, m = "r"
                        }
                        "$" === n && (y = r[0], x = r[1]), "r" != m || _ || (m = "g"), null != _ && ("g" == m ? _ = Math.max(1, Math.min(21, _)) : "e" != m && "f" != m || (_ = Math.max(0, Math.min(20, _)))), m = et.get(m) || d3_format_typeDefault;
                        var M = f && p;
                        return function (t) {
                            var e = x;
                            if (b && t % 1) return "";
                            var n = t < 0 || 0 === t && 1 / t < 0 ? (t = -t, "-") : "-" === d ? "" : d;
                            if (v < 0) {
                                var r = P.formatPrefix(t, _);
                                t = r.scale(t), e = r.symbol + x
                            } else t *= v;
                            var i, a, o = (t = m(t, _)).lastIndexOf(".");
                            if (o < 0) {
                                var s = w ? t.lastIndexOf("e") : -1;
                                a = s < 0 ? (i = t, "") : (i = t.substring(0, s), t.substring(s))
                            } else i = t.substring(0, o), a = k + t.substring(o + 1);
                            !f && p && (i = S(i, 1 / 0));
                            var u = y.length + i.length + a.length + (M ? 0 : n.length),
                                c = u < g ? new Array(u = g - u + 1).join(l) : "";
                            return M && (i = S(c + i, c.length ? g - a.length : 1 / 0)), n += y, t = i + a, ("<" === h ? n + t + c : ">" === h ? c + n + t : "^" === h ? c.substring(0, u >>= 1) + n + t + c.substring(u) : n + (M ? t : c + t)) + e
                        }
                    }), timeFormat: function (t) {
                        var e = t.dateTime, n = t.date, r = t.time, i = t.periods, a = t.days, o = t.shortDays,
                            s = t.months, u = t.shortMonths;

                        function d3_time_format(s) {
                            var u = s.length;

                            function format(t) {
                                for (var e, n, r, i = [], a = -1, o = 0; ++a < u;) 37 === s.charCodeAt(a) && (i.push(s.slice(o, a)), null != (n = at[e = s.charAt(++a)]) && (e = s.charAt(++a)), (r = v[e]) && (e = r(t, null == n ? "e" === e ? " " : "0" : n)), i.push(e), o = a + 1);
                                return i.push(s.slice(o, a)), i.join("")
                            }

                            return format.parse = function (t) {
                                var e = {y: 1900, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0, Z: null};
                                if (d3_time_parse(e, s, t, 0) != t.length) return null;
                                "p" in e && (e.H = e.H % 12 + 12 * e.p);
                                var n = null != e.Z && rt !== d3_date_utc, r = new (n ? d3_date_utc : rt);
                                return "j" in e ? r.setFullYear(e.y, 0, e.j) : "W" in e || "U" in e ? ("w" in e || (e.w = "W" in e ? 1 : 0), r.setFullYear(e.y, 0, 1), r.setFullYear(e.y, 0, "W" in e ? (e.w + 6) % 7 + 7 * e.W - (r.getDay() + 5) % 7 : e.w + 7 * e.U - (r.getDay() + 6) % 7)) : r.setFullYear(e.y, e.m, e.d), r.setHours(e.H + (e.Z / 100 | 0), e.M + e.Z % 100, e.S, e.L), n ? r._ : r
                            }, format.toString = function () {
                                return s
                            }, format
                        }

                        function d3_time_parse(t, e, n, r) {
                            for (var i, a, o, s = 0, u = e.length, c = n.length; s < u;) {
                                if (c <= r) return -1;
                                if (37 === (i = e.charCodeAt(s++))) {
                                    if (o = e.charAt(s++), !(a = y[o in at ? e.charAt(s++) : o]) || (r = a(t, n, r)) < 0) return -1
                                } else if (i != n.charCodeAt(r++)) return -1
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
                        var c = P.map(), l = d3_time_formatRe(a), h = d3_time_formatLookup(a), d = d3_time_formatRe(o),
                            f = d3_time_formatLookup(o), g = d3_time_formatRe(s), p = d3_time_formatLookup(s),
                            _ = d3_time_formatRe(u), m = d3_time_formatLookup(u);
                        i.forEach(function (t, e) {
                            c.set(t.toLowerCase(), e)
                        });
                        var v = {
                            a: function (t) {
                                return o[t.getDay()]
                            }, A: function (t) {
                                return a[t.getDay()]
                            }, b: function (t) {
                                return u[t.getMonth()]
                            }, B: function (t) {
                                return s[t.getMonth()]
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
                                return i[+(12 <= t.getHours())]
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
                        }, y = {
                            a: function (t, e, n) {
                                d.lastIndex = 0;
                                var r = d.exec(e.slice(n));
                                return r ? (t.w = f.get(r[0].toLowerCase()), n + r[0].length) : -1
                            },
                            A: function (t, e, n) {
                                l.lastIndex = 0;
                                var r = l.exec(e.slice(n));
                                return r ? (t.w = h.get(r[0].toLowerCase()), n + r[0].length) : -1
                            },
                            b: function (t, e, n) {
                                _.lastIndex = 0;
                                var r = _.exec(e.slice(n));
                                return r ? (t.m = m.get(r[0].toLowerCase()), n + r[0].length) : -1
                            },
                            B: function (t, e, n) {
                                g.lastIndex = 0;
                                var r = g.exec(e.slice(n));
                                return r ? (t.m = p.get(r[0].toLowerCase()), n + r[0].length) : -1
                            },
                            c: function (t, e, n) {
                                return d3_time_parse(t, v.c.toString(), e, n)
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
                                var r = c.get(e.slice(n, n += 2).toLowerCase());
                                return null == r ? -1 : (t.p = r, n)
                            },
                            S: d3_time_parseSeconds,
                            U: d3_time_parseWeekNumberSunday,
                            w: d3_time_parseWeekdayNumber,
                            W: d3_time_parseWeekNumberMonday,
                            x: function (t, e, n) {
                                return d3_time_parse(t, v.x.toString(), e, n)
                            },
                            X: function (t, e, n) {
                                return d3_time_parse(t, v.X.toString(), e, n)
                            },
                            y: d3_time_parseYear,
                            Y: d3_time_parseFullYear,
                            Z: d3_time_parseZone,
                            "%": d3_time_parseLiteralPercent
                        };
                        return d3_time_format
                    }(t)
                };
                var e, k, s, u, r, S
            };
            var ut = P.locale({
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

            P.format = ut.numberFormat, P.geo = {}, d3_adder.prototype = {
                s: 0, t: 0, add: function (t) {
                    d3_adderSum(t, this.t, ct), d3_adderSum(ct.s, this.s, this), this.s ? this.t += ct.t : this.s = ct.t
                }, reset: function () {
                    this.s = this.t = 0
                }, valueOf: function () {
                    return this.s
                }
            };
            var ct = new d3_adder;

            function d3_adderSum(t, e, n) {
                var r = n.s = t + e, i = r - t, a = r - i;
                n.t = t - a + (e - i)
            }

            function d3_geo_streamGeometry(t, e) {
                t && ht.hasOwnProperty(t.type) && ht[t.type](t, e)
            }

            P.geo.stream = function (t, e) {
                t && lt.hasOwnProperty(t.type) ? lt[t.type](t, e) : d3_geo_streamGeometry(t, e)
            };
            var lt = {
                Feature: function (t, e) {
                    d3_geo_streamGeometry(t.geometry, e)
                }, FeatureCollection: function (t, e) {
                    for (var n = t.features, r = -1, i = n.length; ++r < i;) d3_geo_streamGeometry(n[r].geometry, e)
                }
            }, ht = {
                Sphere: function (t, e) {
                    e.sphere()
                }, Point: function (t, e) {
                    t = t.coordinates, e.point(t[0], t[1], t[2])
                }, MultiPoint: function (t, e) {
                    for (var n = t.coordinates, r = -1, i = n.length; ++r < i;) t = n[r], e.point(t[0], t[1], t[2])
                }, LineString: function (t, e) {
                    d3_geo_streamLine(t.coordinates, e, 0)
                }, MultiLineString: function (t, e) {
                    for (var n = t.coordinates, r = -1, i = n.length; ++r < i;) d3_geo_streamLine(n[r], e, 0)
                }, Polygon: function (t, e) {
                    d3_geo_streamPolygon(t.coordinates, e)
                }, MultiPolygon: function (t, e) {
                    for (var n = t.coordinates, r = -1, i = n.length; ++r < i;) d3_geo_streamPolygon(n[r], e)
                }, GeometryCollection: function (t, e) {
                    for (var n = t.geometries, r = -1, i = n.length; ++r < i;) d3_geo_streamGeometry(n[r], e)
                }
            };

            function d3_geo_streamLine(t, e, n) {
                var r, i = -1, a = t.length - n;
                for (e.lineStart(); ++i < a;) r = t[i], e.point(r[0], r[1], r[2]);
                e.lineEnd()
            }

            function d3_geo_streamPolygon(t, e) {
                var n = -1, r = t.length;
                for (e.polygonStart(); ++n < r;) d3_geo_streamLine(t[n], e, 1);
                e.polygonEnd()
            }

            P.geo.area = function (t) {
                return dt = 0, P.geo.stream(t, St), dt
            };
            var dt, ft, gt, pt, _t, mt, vt, yt, xt, bt, wt, Mt, kt = new d3_adder, St = {
                sphere: function () {
                    dt += 4 * V
                }, point: d3_noop, lineStart: d3_noop, lineEnd: d3_noop, polygonStart: function () {
                    kt.reset(), St.lineStart = d3_geo_areaRingStart
                }, polygonEnd: function () {
                    var t = 2 * kt;
                    dt += t < 0 ? 4 * V + t : t, St.lineStart = St.lineEnd = St.point = d3_noop
                }
            };

            function d3_geo_areaRingStart() {
                var n, r, l, h, d;

                function nextPoint(t, e) {
                    e = e * C / 2 + V / 4;
                    var n = (t *= C) - l, r = 0 <= n ? 1 : -1, i = r * n, a = Math.cos(e), o = Math.sin(e), s = d * o,
                        u = h * a + s * Math.cos(i), c = s * r * Math.sin(i);
                    kt.add(Math.atan2(c, u)), l = t, h = a, d = o
                }

                St.point = function (t, e) {
                    St.point = nextPoint, l = (n = t) * C, h = Math.cos(e = (r = e) * C / 2 + V / 4), d = Math.sin(e)
                }, St.lineEnd = function () {
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
                return L(t[0] - e[0]) < Y && L(t[1] - e[1]) < Y
            }

            P.geo.bounds = function () {
                var l, h, d, f, g, r, i, p, a, u, c, _ = {
                    point: point, lineStart: lineStart, lineEnd: lineEnd, polygonStart: function () {
                        _.point = ringPoint, _.lineStart = ringStart, _.lineEnd = ringEnd, a = 0, St.polygonStart()
                    }, polygonEnd: function () {
                        St.polygonEnd(), _.point = point, _.lineStart = lineStart, _.lineEnd = lineEnd, kt < 0 ? (l = -(d = 180), h = -(f = 90)) : Y < a ? f = 90 : a < -Y && (h = -90), c[0] = l, c[1] = d
                    }
                };

                function point(t, e) {
                    u.push(c = [l = t, d = t]), e < h && (h = e), f < e && (f = e)
                }

                function linePoint(t, e) {
                    var n = d3_geo_cartesian([t * C, e * C]);
                    if (p) {
                        var r = d3_geo_cartesianCross(p, n), i = d3_geo_cartesianCross([r[1], -r[0], 0], r);
                        d3_geo_cartesianNormalize(i), i = d3_geo_spherical(i);
                        var a = t - g, o = 0 < a ? 1 : -1, s = i[0] * E * o, u = 180 < L(a);
                        if (u ^ (o * g < s && s < o * t)) {
                            var c = i[1] * E;
                            f < c && (f = c)
                        } else if (u ^ (o * g < (s = (s + 360) % 360 - 180) && s < o * t)) {
                            (c = -i[1] * E) < h && (h = c)
                        } else e < h && (h = e), f < e && (f = e);
                        u ? t < g ? angle(l, t) > angle(l, d) && (d = t) : angle(t, d) > angle(l, d) && (l = t) : l <= d ? (t < l && (l = t), d < t && (d = t)) : g < t ? angle(l, t) > angle(l, d) && (d = t) : angle(t, d) > angle(l, d) && (l = t)
                    } else point(t, e);
                    p = n, g = t
                }

                function lineStart() {
                    _.point = linePoint
                }

                function lineEnd() {
                    c[0] = l, c[1] = d, _.point = point, p = null
                }

                function ringPoint(t, e) {
                    if (p) {
                        var n = t - g;
                        a += 180 < L(n) ? n + (0 < n ? 360 : -360) : n
                    } else r = t, i = e;
                    St.point(t, e), linePoint(t, e)
                }

                function ringStart() {
                    St.lineStart()
                }

                function ringEnd() {
                    ringPoint(r, i), St.lineEnd(), L(a) > Y && (l = -(d = 180)), c[0] = l, c[1] = d, p = null
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
                    if (f = d = -(l = h = 1 / 0), u = [], P.geo.stream(t, _), i = u.length) {
                        u.sort(compareRanges);
                        for (var e = 1, n = [s = u[0]]; e < i; ++e) withinRange((a = u[e])[0], s) || withinRange(a[1], s) ? (angle(s[0], a[1]) > angle(s[0], s[1]) && (s[1] = a[1]), angle(a[0], s[1]) > angle(s[0], s[1]) && (s[0] = a[0])) : n.push(s = a);
                        for (var r, i, a, o = -1 / 0, s = (e = 0, n[i = n.length - 1]); e <= i; s = a, ++e) a = n[e], (r = angle(s[1], a[0])) > o && (o = r, l = a[0], d = s[1])
                    }
                    return u = c = null, l === 1 / 0 || h === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[l, h], [d, f]]
                }
            }(), P.geo.centroid = function (t) {
                ft = gt = pt = _t = mt = vt = yt = xt = bt = wt = Mt = 0, P.geo.stream(t, Et);
                var e = bt, n = wt, r = Mt, i = e * e + n * n + r * r;
                return i < S && (e = vt, n = yt, r = xt, gt < Y && (e = pt, n = _t, r = mt), (i = e * e + n * n + r * r) < S) ? [NaN, NaN] : [Math.atan2(n, e) * E, d3_asin(r / Math.sqrt(i)) * E]
            };
            var Et = {
                sphere: d3_noop,
                point: d3_geo_centroidPoint,
                lineStart: d3_geo_centroidLineStart,
                lineEnd: d3_geo_centroidLineEnd,
                polygonStart: function () {
                    Et.lineStart = d3_geo_centroidRingStart
                },
                polygonEnd: function () {
                    Et.lineStart = d3_geo_centroidLineStart
                }
            };

            function d3_geo_centroidPoint(t, e) {
                t *= C;
                var n = Math.cos(e *= C);
                d3_geo_centroidPointXYZ(n * Math.cos(t), n * Math.sin(t), Math.sin(e))
            }

            function d3_geo_centroidPointXYZ(t, e, n) {
                pt += (t - pt) / ++ft, _t += (e - _t) / ft, mt += (n - mt) / ft
            }

            function d3_geo_centroidLineStart() {
                var s, u, c;

                function nextPoint(t, e) {
                    t *= C;
                    var n = Math.cos(e *= C), r = n * Math.cos(t), i = n * Math.sin(t), a = Math.sin(e),
                        o = Math.atan2(Math.sqrt((o = u * a - c * i) * o + (o = c * r - s * a) * o + (o = s * i - u * r) * o), s * r + u * i + c * a);
                    gt += o, vt += o * (s + (s = r)), yt += o * (u + (u = i)), xt += o * (c + (c = a)), d3_geo_centroidPointXYZ(s, u, c)
                }

                Et.point = function (t, e) {
                    t *= C;
                    var n = Math.cos(e *= C);
                    s = n * Math.cos(t), u = n * Math.sin(t), c = Math.sin(e), Et.point = nextPoint, d3_geo_centroidPointXYZ(s, u, c)
                }
            }

            function d3_geo_centroidLineEnd() {
                Et.point = d3_geo_centroidPoint
            }

            function d3_geo_centroidRingStart() {
                var r, i, f, g, p;

                function nextPoint(t, e) {
                    t *= C;
                    var n = Math.cos(e *= C), r = n * Math.cos(t), i = n * Math.sin(t), a = Math.sin(e),
                        o = g * a - p * i, s = p * r - f * a, u = f * i - g * r, c = Math.sqrt(o * o + s * s + u * u),
                        l = f * r + g * i + p * a, h = c && -d3_acos(l) / c, d = Math.atan2(c, l);
                    bt += h * o, wt += h * s, Mt += h * u, gt += d, vt += d * (f + (f = r)), yt += d * (g + (g = i)), xt += d * (p + (p = a)), d3_geo_centroidPointXYZ(f, g, p)
                }

                Et.point = function (t, e) {
                    r = t, i = e, Et.point = nextPoint, t *= C;
                    var n = Math.cos(e *= C);
                    f = n * Math.cos(t), g = n * Math.sin(t), p = Math.sin(e), d3_geo_centroidPointXYZ(f, g, p)
                }, Et.lineEnd = function () {
                    nextPoint(r, i), Et.lineEnd = d3_geo_centroidLineEnd, Et.point = d3_geo_centroidPoint
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

            function d3_geo_clipPolygon(t, e, n, r, s) {
                var u = [], c = [];
                if (t.forEach(function (t) {
                    if (!((e = t.length - 1) <= 0)) {
                        var e, n = t[0], r = t[e];
                        if (d3_geo_sphericalEqual(n, r)) {
                            s.lineStart();
                            for (var i = 0; i < e; ++i) s.point((n = t[i])[0], n[1]);
                            s.lineEnd()
                        } else {
                            var a = new d3_geo_clipPolygonIntersection(n, t, null, !0),
                                o = new d3_geo_clipPolygonIntersection(n, null, a, !1);
                            a.o = o, u.push(a), c.push(o), o = new d3_geo_clipPolygonIntersection(r, null, a = new d3_geo_clipPolygonIntersection(r, t, null, !1), !0), a.o = o, u.push(a), c.push(o)
                        }
                    }
                }), c.sort(e), d3_geo_clipPolygonLinkCircular(u), d3_geo_clipPolygonLinkCircular(c), u.length) {
                    for (var i = 0, a = n, o = c.length; i < o; ++i) c[i].e = a = !a;
                    for (var l, h, d = u[0]; ;) {
                        for (var f = d, g = !0; f.v;) if ((f = f.n) === d) return;
                        l = f.z, s.lineStart();
                        do {
                            if (f.v = f.o.v = !0, f.e) {
                                if (g) for (i = 0, o = l.length; i < o; ++i) s.point((h = l[i])[0], h[1]); else r(f.x, f.n.x, 1, s);
                                f = f.n
                            } else {
                                if (g) for (i = (l = f.p.z).length - 1; 0 <= i; --i) s.point((h = l[i])[0], h[1]); else r(f.x, f.p.x, -1, s);
                                f = f.p
                            }
                            l = (f = f.o).z, g = !g
                        } while (!f.v);
                        s.lineEnd()
                    }
                }
            }

            function d3_geo_clipPolygonLinkCircular(t) {
                if (e = t.length) {
                    for (var e, n, r = 0, i = t[0]; ++r < e;) i.n = n = t[r], n.p = i, i = n;
                    i.n = n = t[0], n.p = i
                }
            }

            function d3_geo_clipPolygonIntersection(t, e, n, r) {
                this.x = t, this.z = e, this.o = n, this.e = r, this.v = !1, this.n = this.p = null
            }

            function d3_geo_clip(a, t, f, g) {
                return function (r, o) {
                    var s, i = t(o), e = r.invert(g[0], g[1]), n = {
                        point: point, lineStart: lineStart, lineEnd: lineEnd, polygonStart: function () {
                            n.point = pointRing, n.lineStart = ringStart, n.lineEnd = ringEnd, s = [], u = []
                        }, polygonEnd: function () {
                            n.point = point, n.lineStart = lineStart, n.lineEnd = lineEnd, s = P.merge(s);
                            var t = function (t, e) {
                                var n = t[0], r = t[1], i = [Math.sin(n), -Math.cos(n), 0], a = 0, o = 0;
                                kt.reset();
                                for (var s = 0, u = e.length; s < u; ++s) {
                                    var c = e[s], l = c.length;
                                    if (l) for (var h = c[0], d = h[0], f = h[1] / 2 + V / 4, g = Math.sin(f), p = Math.cos(f), _ = 1; ;) {
                                        _ === l && (_ = 0);
                                        var m = (t = c[_])[0], v = t[1] / 2 + V / 4, y = Math.sin(v), x = Math.cos(v),
                                            b = m - d, w = 0 <= b ? 1 : -1, M = w * b, k = V < M, S = g * y;
                                        if (kt.add(Math.atan2(S * w * Math.sin(M), p * x + S * Math.cos(M))), a += k ? b + w * R : b, k ^ n <= d ^ n <= m) {
                                            var E = d3_geo_cartesianCross(d3_geo_cartesian(h), d3_geo_cartesian(t));
                                            d3_geo_cartesianNormalize(E);
                                            var C = d3_geo_cartesianCross(i, E);
                                            d3_geo_cartesianNormalize(C);
                                            var N = (k ^ 0 <= b ? -1 : 1) * d3_asin(C[2]);
                                            (N < r || r === N && (E[0] || E[1])) && (o += k ^ 0 <= b ? 1 : -1)
                                        }
                                        if (!_++) break;
                                        d = m, g = y, p = x, h = t
                                    }
                                }
                                return (a < -Y || a < Y && kt < -Y) ^ 1 & o
                            }(e, u);
                            s.length ? (d || (o.polygonStart(), d = !0), d3_geo_clipPolygon(s, d3_geo_clipSort, t, f, o)) : t && (d || (o.polygonStart(), d = !0), o.lineStart(), f(null, null, 1, o), o.lineEnd()), d && (o.polygonEnd(), d = !1), s = u = null
                        }, sphere: function () {
                            o.polygonStart(), o.lineStart(), f(null, null, 1, o), o.lineEnd(), o.polygonEnd()
                        }
                    };

                    function point(t, e) {
                        var n = r(t, e);
                        a(t = n[0], e = n[1]) && o.point(t, e)
                    }

                    function pointLine(t, e) {
                        var n = r(t, e);
                        i.point(n[0], n[1])
                    }

                    function lineStart() {
                        n.point = pointLine, i.lineStart()
                    }

                    function lineEnd() {
                        n.point = point, i.lineEnd()
                    }

                    var u, c, l = d3_geo_clipBufferListener(), h = t(l), d = !1;

                    function pointRing(t, e) {
                        c.push([t, e]);
                        var n = r(t, e);
                        h.point(n[0], n[1])
                    }

                    function ringStart() {
                        h.lineStart(), c = []
                    }

                    function ringEnd() {
                        pointRing(c[0][0], c[0][1]), h.lineEnd();
                        var t, e = h.clean(), n = l.buffer(), r = n.length;
                        if (c.pop(), u.push(c), c = null, r) if (1 & e) {
                            var i, a = -1;
                            if (0 < (r = (t = n[0]).length - 1)) {
                                for (d || (o.polygonStart(), d = !0), o.lineStart(); ++a < r;) o.point((i = t[a])[0], i[1]);
                                o.lineEnd()
                            }
                        } else 1 < r && 2 & e && n.push(n.pop().concat(n.shift())), s.push(n.filter(d3_geo_clipSegmentLength1))
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
                return ((t = t.x)[0] < 0 ? t[1] - W - Y : W - t[1]) - ((e = e.x)[0] < 0 ? e[1] - W - Y : W - e[1])
            }

            var Ct = d3_geo_clip(d3_true, function (h) {
                var d, f = NaN, g = NaN, p = NaN;
                return {
                    lineStart: function () {
                        h.lineStart(), d = 1
                    }, point: function (t, e) {
                        var n, r, i, a, o, s, u, c = 0 < t ? V : -V, l = L(t - f);
                        L(l - V) < Y ? (h.point(f, g = 0 < (g + e) / 2 ? W : -W), h.point(p, g), h.lineEnd(), h.lineStart(), h.point(c, g), h.point(t, g), d = 0) : p !== c && V <= l && (L(f - p) < Y && (f -= p * Y), L(t - c) < Y && (t -= c * Y), n = f, r = g, i = t, a = e, u = Math.sin(n - i), g = L(u) > Y ? Math.atan((Math.sin(r) * (s = Math.cos(a)) * Math.sin(i) - Math.sin(a) * (o = Math.cos(r)) * Math.sin(n)) / (o * s * u)) : (r + a) / 2, h.point(p, g), h.lineEnd(), h.lineStart(), h.point(c, g), d = 0), h.point(f = t, g = e), p = c
                    }, lineEnd: function () {
                        h.lineEnd(), f = g = NaN
                    }, clean: function () {
                        return 2 - d
                    }
                }
            }, function (t, e, n, r) {
                var i;
                if (null == t) i = n * W, r.point(-V, i), r.point(0, i), r.point(V, i), r.point(V, 0), r.point(V, -i), r.point(0, -i), r.point(-V, -i), r.point(-V, 0), r.point(-V, i); else if (L(t[0] - e[0]) > Y) {
                    var a = t[0] < e[0] ? V : -V;
                    i = n * a / 2, r.point(-a, i), r.point(0, i), r.point(a, i)
                } else r.point(e[0], e[1])
            }, [-V, -V / 2]);

            function d3_geom_clipLine(l, h, d, f) {
                return function (t) {
                    var e, n = t.a, r = t.b, i = n.x, a = n.y, o = 0, s = 1, u = r.x - i, c = r.y - a;
                    if (e = l - i, u || !(0 < e)) {
                        if (e /= u, u < 0) {
                            if (e < o) return;
                            e < s && (s = e)
                        } else if (0 < u) {
                            if (s < e) return;
                            o < e && (o = e)
                        }
                        if (e = d - i, u || !(e < 0)) {
                            if (e /= u, u < 0) {
                                if (s < e) return;
                                o < e && (o = e)
                            } else if (0 < u) {
                                if (e < o) return;
                                e < s && (s = e)
                            }
                            if (e = h - a, c || !(0 < e)) {
                                if (e /= c, c < 0) {
                                    if (e < o) return;
                                    e < s && (s = e)
                                } else if (0 < c) {
                                    if (s < e) return;
                                    o < e && (o = e)
                                }
                                if (e = f - a, c || !(e < 0)) {
                                    if (e /= c, c < 0) {
                                        if (s < e) return;
                                        o < e && (o = e)
                                    } else if (0 < c) {
                                        if (e < o) return;
                                        e < s && (s = e)
                                    }
                                    return 0 < o && (t.a = {x: i + o * u, y: a + o * c}), s < 1 && (t.b = {
                                        x: i + s * u,
                                        y: a + s * c
                                    }), t
                                }
                            }
                        }
                    }
                }
            }

            var Nt = 1e9;

            function d3_geo_clipExtent(m, v, y, x) {
                return function (i) {
                    var r, l, a, o, s, u, c, h, d, f, g, p = i, t = d3_geo_clipBufferListener(),
                        _ = d3_geom_clipLine(m, v, y, x), e = {
                            point: point, lineStart: function () {
                                e.point = linePoint, l && l.push(a = []);
                                f = !0, d = !1, c = h = NaN
                            }, lineEnd: function () {
                                r && (linePoint(o, s), u && d && t.rejoin(), r.push(t.buffer()));
                                e.point = point, d && i.lineEnd()
                            }, polygonStart: function () {
                                i = t, r = [], l = [], g = !0
                            }, polygonEnd: function () {
                                i = p, r = P.merge(r);
                                var t = function (t) {
                                    for (var e = 0, n = l.length, r = t[1], i = 0; i < n; ++i) for (var a, o = 1, s = l[i], u = s.length, c = s[0]; o < u; ++o) a = s[o], c[1] <= r ? a[1] > r && 0 < d3_cross2d(c, a, t) && ++e : a[1] <= r && d3_cross2d(c, a, t) < 0 && --e, c = a;
                                    return 0 !== e
                                }([m, x]), e = g && t, n = r.length;
                                (e || n) && (i.polygonStart(), e && (i.lineStart(), interpolate(null, null, 1, i), i.lineEnd()), n && d3_geo_clipPolygon(r, compare, t, interpolate, i), i.polygonEnd()), r = l = a = null
                            }
                        };

                    function interpolate(t, e, n, r) {
                        var i = 0, a = 0;
                        if (null == t || (i = corner(t, n)) !== (a = corner(e, n)) || comparePoints(t, e) < 0 ^ 0 < n) for (; r.point(0 === i || 3 === i ? m : y, 1 < i ? x : v), (i = (i + n + 4) % 4) !== a;) ; else r.point(e[0], e[1])
                    }

                    function pointVisible(t, e) {
                        return m <= t && t <= y && v <= e && e <= x
                    }

                    function point(t, e) {
                        pointVisible(t, e) && i.point(t, e)
                    }

                    function linePoint(t, e) {
                        var n = pointVisible(t = Math.max(-Nt, Math.min(Nt, t)), e = Math.max(-Nt, Math.min(Nt, e)));
                        if (l && a.push([t, e]), f) o = t, s = e, f = !1, (u = n) && (i.lineStart(), i.point(t, e)); else if (n && d) i.point(t, e); else {
                            var r = {a: {x: c, y: h}, b: {x: t, y: e}};
                            _(r) ? (d || (i.lineStart(), i.point(r.a.x, r.a.y)), i.point(r.b.x, r.b.y), n || i.lineEnd(), g = !1) : n && (i.lineStart(), i.point(t, e), g = !1)
                        }
                        c = t, h = e, d = n
                    }

                    return e
                };

                function corner(t, e) {
                    return L(t[0] - m) < Y ? 0 < e ? 0 : 3 : L(t[0] - y) < Y ? 0 < e ? 2 : 1 : L(t[1] - v) < Y ? 0 < e ? 1 : 0 : 0 < e ? 3 : 2
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
                var e = 0, n = V / 3, r = d3_geo_projectionMutator(t), i = r(e, n);
                return i.parallels = function (t) {
                    return arguments.length ? r(e = t[0] * V / 180, n = t[1] * V / 180) : [e / V * 180, n / V * 180]
                }, i
            }

            function d3_geo_conicEqualArea(t, e) {
                var n = Math.sin(t), r = (n + Math.sin(e)) / 2, i = 1 + n * (2 * r - n), a = Math.sqrt(i) / r;

                function forward(t, e) {
                    var n = Math.sqrt(i - 2 * r * Math.sin(e)) / r;
                    return [n * Math.sin(t *= r), a - n * Math.cos(t)]
                }

                return forward.invert = function (t, e) {
                    var n = a - e;
                    return [Math.atan2(t, n) / r, d3_asin((i - (t * t + n * n) * r * r) / (2 * r))]
                }, forward
            }

            P.geo.clipExtent = function () {
                var e, n, r, i, a, o, s = {
                    stream: function (t) {
                        return a && (a.valid = !1), (a = o(t)).valid = !0, a
                    }, extent: function (t) {
                        return arguments.length ? (o = d3_geo_clipExtent(e = +t[0][0], n = +t[0][1], r = +t[1][0], i = +t[1][1]), a && (a.valid = !1, a = null), s) : [[e, n], [r, i]]
                    }
                };
                return s.extent([[0, 0], [960, 500]])
            }, (P.geo.conicEqualArea = function () {
                return d3_geo_conic(d3_geo_conicEqualArea)
            }).raw = d3_geo_conicEqualArea, P.geo.albers = function () {
                return P.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
            }, P.geo.albersUsa = function () {
                var r, i, a, o, s = P.geo.albers(),
                    u = P.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
                    c = P.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), l = {
                        point: function (t, e) {
                            r = [t, e]
                        }
                    };

                function albersUsa(t) {
                    var e = t[0], n = t[1];
                    return r = null, i(e, n), r || (a(e, n), r) || o(e, n), r
                }

                return albersUsa.invert = function (t) {
                    var e = s.scale(), n = s.translate(), r = (t[0] - n[0]) / e, i = (t[1] - n[1]) / e;
                    return (.12 <= i && i < .234 && -.425 <= r && r < -.214 ? u : .166 <= i && i < .234 && -.214 <= r && r < -.115 ? c : s).invert(t)
                }, albersUsa.stream = function (t) {
                    var n = s.stream(t), r = u.stream(t), i = c.stream(t);
                    return {
                        point: function (t, e) {
                            n.point(t, e), r.point(t, e), i.point(t, e)
                        }, sphere: function () {
                            n.sphere(), r.sphere(), i.sphere()
                        }, lineStart: function () {
                            n.lineStart(), r.lineStart(), i.lineStart()
                        }, lineEnd: function () {
                            n.lineEnd(), r.lineEnd(), i.lineEnd()
                        }, polygonStart: function () {
                            n.polygonStart(), r.polygonStart(), i.polygonStart()
                        }, polygonEnd: function () {
                            n.polygonEnd(), r.polygonEnd(), i.polygonEnd()
                        }
                    }
                }, albersUsa.precision = function (t) {
                    return arguments.length ? (s.precision(t), u.precision(t), c.precision(t), albersUsa) : s.precision()
                }, albersUsa.scale = function (t) {
                    return arguments.length ? (s.scale(t), u.scale(.35 * t), c.scale(t), albersUsa.translate(s.translate())) : s.scale()
                }, albersUsa.translate = function (t) {
                    if (!arguments.length) return s.translate();
                    var e = s.scale(), n = +t[0], r = +t[1];
                    return i = s.translate(t).clipExtent([[n - .455 * e, r - .238 * e], [n + .455 * e, r + .238 * e]]).stream(l).point, a = u.translate([n - .307 * e, r + .201 * e]).clipExtent([[n - .425 * e + Y, r + .12 * e + Y], [n - .214 * e - Y, r + .234 * e - Y]]).stream(l).point, o = c.translate([n - .205 * e, r + .212 * e]).clipExtent([[n - .214 * e + Y, r + .166 * e + Y], [n - .115 * e - Y, r + .234 * e - Y]]).stream(l).point, albersUsa
                }, albersUsa.scale(1070)
            };
            var Rt, Tt, At, Lt, zt, Pt, Dt = {
                point: d3_noop, lineStart: d3_noop, lineEnd: d3_noop, polygonStart: function () {
                    Tt = 0, Dt.lineStart = d3_geo_pathAreaRingStart
                }, polygonEnd: function () {
                    Dt.lineStart = Dt.lineEnd = Dt.point = d3_noop, Rt += L(Tt / 2)
                }
            };

            function d3_geo_pathAreaRingStart() {
                var n, r, i, a;

                function nextPoint(t, e) {
                    Tt += a * t - i * e, i = t, a = e
                }

                Dt.point = function (t, e) {
                    Dt.point = nextPoint, n = i = t, r = a = e
                }, Dt.lineEnd = function () {
                    nextPoint(n, r)
                }
            }

            var Ft = {
                point: function (t, e) {
                    t < At && (At = t);
                    zt < t && (zt = t);
                    e < Lt && (Lt = e);
                    Pt < e && (Pt = e)
                }, lineStart: d3_noop, lineEnd: d3_noop, polygonStart: d3_noop, polygonEnd: d3_noop
            };

            function d3_geo_pathBuffer() {
                var n = d3_geo_pathBufferCircle(4.5), r = [], i = {
                    point: point, lineStart: function () {
                        i.point = pointLineStart
                    }, lineEnd: lineEnd, polygonStart: function () {
                        i.lineEnd = lineEndPolygon
                    }, polygonEnd: function () {
                        i.lineEnd = lineEnd, i.point = point
                    }, pointRadius: function (t) {
                        return n = d3_geo_pathBufferCircle(t), i
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
                    r.push("M", t, ",", e), i.point = pointLine
                }

                function pointLine(t, e) {
                    r.push("L", t, ",", e)
                }

                function lineEnd() {
                    i.point = point
                }

                function lineEndPolygon() {
                    r.push("Z")
                }

                return i
            }

            function d3_geo_pathBufferCircle(t) {
                return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
            }

            var qt, jt = {
                point: d3_geo_pathCentroidPoint,
                lineStart: d3_geo_pathCentroidLineStart,
                lineEnd: d3_geo_pathCentroidLineEnd,
                polygonStart: function () {
                    jt.lineStart = d3_geo_pathCentroidRingStart
                },
                polygonEnd: function () {
                    jt.point = d3_geo_pathCentroidPoint, jt.lineStart = d3_geo_pathCentroidLineStart, jt.lineEnd = d3_geo_pathCentroidLineEnd
                }
            };

            function d3_geo_pathCentroidPoint(t, e) {
                pt += t, _t += e, ++mt
            }

            function d3_geo_pathCentroidLineStart() {
                var a, o;

                function nextPoint(t, e) {
                    var n = t - a, r = e - o, i = Math.sqrt(n * n + r * r);
                    vt += i * (a + t) / 2, yt += i * (o + e) / 2, xt += i, d3_geo_pathCentroidPoint(a = t, o = e)
                }

                jt.point = function (t, e) {
                    jt.point = nextPoint, d3_geo_pathCentroidPoint(a = t, o = e)
                }
            }

            function d3_geo_pathCentroidLineEnd() {
                jt.point = d3_geo_pathCentroidPoint
            }

            function d3_geo_pathCentroidRingStart() {
                var n, r, a, o;

                function nextPoint(t, e) {
                    var n = t - a, r = e - o, i = Math.sqrt(n * n + r * r);
                    vt += i * (a + t) / 2, yt += i * (o + e) / 2, xt += i, bt += (i = o * t - a * e) * (a + t), wt += i * (o + e), Mt += 3 * i, d3_geo_pathCentroidPoint(a = t, o = e)
                }

                jt.point = function (t, e) {
                    jt.point = nextPoint, d3_geo_pathCentroidPoint(n = a = t, r = o = e)
                }, jt.lineEnd = function () {
                    nextPoint(n, r)
                }
            }

            function d3_geo_pathContext(n) {
                var r = 4.5, i = {
                    point: point, lineStart: function () {
                        i.point = pointLineStart
                    }, lineEnd: lineEnd, polygonStart: function () {
                        i.lineEnd = lineEndPolygon
                    }, polygonEnd: function () {
                        i.lineEnd = lineEnd, i.point = point
                    }, pointRadius: function (t) {
                        return r = t, i
                    }, result: d3_noop
                };

                function point(t, e) {
                    n.moveTo(t + r, e), n.arc(t, e, r, 0, R)
                }

                function pointLineStart(t, e) {
                    n.moveTo(t, e), i.point = pointLine
                }

                function pointLine(t, e) {
                    n.lineTo(t, e)
                }

                function lineEnd() {
                    i.point = point
                }

                function lineEndPolygon() {
                    n.closePath()
                }

                return i
            }

            function d3_geo_resample(R) {
                var T = .5, A = Math.cos(30 * C), _ = 16;

                function resample(t) {
                    return (_ ? function (i) {
                        var n, r, a, o, s, u, c, l, h, d, f, g, p = {
                            point: point, lineStart: lineStart, lineEnd: lineEnd, polygonStart: function () {
                                i.polygonStart(), p.lineStart = ringStart
                            }, polygonEnd: function () {
                                i.polygonEnd(), p.lineStart = lineStart
                            }
                        };

                        function point(t, e) {
                            t = R(t, e), i.point(t[0], t[1])
                        }

                        function lineStart() {
                            l = NaN, p.point = linePoint, i.lineStart()
                        }

                        function linePoint(t, e) {
                            var n = d3_geo_cartesian([t, e]), r = R(t, e);
                            resampleLineTo(l, h, c, d, f, g, l = r[0], h = r[1], c = t, d = n[0], f = n[1], g = n[2], _, i), i.point(l, h)
                        }

                        function lineEnd() {
                            p.point = point, i.lineEnd()
                        }

                        function ringStart() {
                            lineStart(), p.point = ringPoint, p.lineEnd = ringEnd
                        }

                        function ringPoint(t, e) {
                            linePoint(n = t, e), r = l, a = h, o = d, s = f, u = g, p.point = linePoint
                        }

                        function ringEnd() {
                            resampleLineTo(l, h, c, d, f, g, r, a, n, o, s, u, _, i), (p.lineEnd = lineEnd)()
                        }

                        return p
                    } : function (n) {
                        return d3_geo_transformPoint(n, function (t, e) {
                            t = R(t, e), n.point(t[0], t[1])
                        })
                    })(t)
                }

                function resampleLineTo(t, e, n, r, i, a, o, s, u, c, l, h, d, f) {
                    var g = o - t, p = s - e, _ = g * g + p * p;
                    if (4 * T < _ && d--) {
                        var m = r + c, v = i + l, y = a + h, x = Math.sqrt(m * m + v * v + y * y),
                            b = Math.asin(y /= x), w = L(L(y) - 1) < Y || L(n - u) < Y ? (n + u) / 2 : Math.atan2(v, m),
                            M = R(w, b), k = M[0], S = M[1], E = k - t, C = S - e, N = p * E - g * C;
                        (T < N * N / _ || .3 < L((g * E + p * C) / _ - .5) || r * c + i * l + a * h < A) && (resampleLineTo(t, e, n, r, i, a, k, S, w, m /= x, v /= x, y, d, f), f.point(k, S), resampleLineTo(k, S, w, m, v, y, o, s, u, c, l, h, d, f))
                    }
                }

                return resample.precision = function (t) {
                    return arguments.length ? (_ = 0 < (T = t * t) && 16, resample) : Math.sqrt(T)
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
                var n, e, r, i, a, o, s = d3_geo_resample(function (t, e) {
                        return [(t = n(t, e))[0] * u + i, a - t[1] * u]
                    }), u = 150, c = 480, l = 250, h = 0, d = 0, f = 0, g = 0, p = 0, _ = Ct, m = d3_identity, v = null,
                    y = null;

                function projection(t) {
                    return [(t = r(t[0] * C, t[1] * C))[0] * u + i, a - t[1] * u]
                }

                function invert(t) {
                    return (t = r.invert((t[0] - i) / u, (a - t[1]) / u)) && [t[0] * E, t[1] * E]
                }

                function reset() {
                    r = d3_geo_compose(e = d3_geo_rotation(f, g, p), n);
                    var t = n(h, d);
                    return i = c - t[0] * u, a = l + t[1] * u, invalidate()
                }

                function invalidate() {
                    return o && (o.valid = !1, o = null), projection
                }

                return projection.stream = function (t) {
                    return o && (o.valid = !1), (o = d3_geo_projectionRadians(_(e, s(m(t))))).valid = !0, o
                }, projection.clipAngle = function (t) {
                    return arguments.length ? (_ = null == t ? (v = t, Ct) : function (i) {
                        var E = Math.cos(i), f = 0 < E, g = L(E) > Y;
                        return d3_geo_clip(visible, function (s) {
                            var u, c, l, h, d;
                            return {
                                lineStart: function () {
                                    h = l = !1, d = 1
                                }, point: function (t, e) {
                                    var n, r = [t, e], i = visible(t, e),
                                        a = f ? i ? 0 : code(t, e) : i ? code(t + (t < 0 ? V : -V), e) : 0;
                                    if (!u && (h = l = i) && s.lineStart(), i !== l && (n = intersect(u, r), (d3_geo_sphericalEqual(u, n) || d3_geo_sphericalEqual(r, n)) && (r[0] += Y, r[1] += Y, i = visible(r[0], r[1]))), i !== l) d = 0, i ? (s.lineStart(), n = intersect(r, u), s.point(n[0], n[1])) : (n = intersect(u, r), s.point(n[0], n[1]), s.lineEnd()), u = n; else if (g && u && f ^ i) {
                                        var o;
                                        a & c || !(o = intersect(r, u, !0)) || (d = 0, f ? (s.lineStart(), s.point(o[0][0], o[0][1]), s.point(o[1][0], o[1][1]), s.lineEnd()) : (s.point(o[1][0], o[1][1]), s.lineEnd(), s.lineStart(), s.point(o[0][0], o[0][1])))
                                    }
                                    !i || u && d3_geo_sphericalEqual(u, r) || s.point(r[0], r[1]), u = r, l = i, c = a
                                }, lineEnd: function () {
                                    l && s.lineEnd(), u = null
                                }, clean: function () {
                                    return d | (h && l) << 1
                                }
                            }
                        }, d3_geo_circleInterpolate(i, 6 * C), f ? [0, -i] : [-V, i - V]);

                        function visible(t, e) {
                            return Math.cos(t) * Math.cos(e) > E
                        }

                        function intersect(t, e, n) {
                            var r = [1, 0, 0], i = d3_geo_cartesianCross(d3_geo_cartesian(t), d3_geo_cartesian(e)),
                                a = d3_geo_cartesianDot(i, i), o = i[0], s = a - o * o;
                            if (!s) return !n && t;
                            var u = E * a / s, c = -E * o / s, l = d3_geo_cartesianCross(r, i),
                                h = d3_geo_cartesianScale(r, u);
                            d3_geo_cartesianAdd(h, d3_geo_cartesianScale(i, c));
                            var d = l, f = d3_geo_cartesianDot(h, d), g = d3_geo_cartesianDot(d, d),
                                p = f * f - g * (d3_geo_cartesianDot(h, h) - 1);
                            if (!(p < 0)) {
                                var _ = Math.sqrt(p), m = d3_geo_cartesianScale(d, (-f - _) / g);
                                if (d3_geo_cartesianAdd(m, h), m = d3_geo_spherical(m), !n) return m;
                                var v, y = t[0], x = e[0], b = t[1], w = e[1];
                                x < y && (v = y, y = x, x = v);
                                var M = x - y, k = L(M - V) < Y;
                                if (!k && w < b && (v = b, b = w, w = v), k || M < Y ? k ? 0 < b + w ^ m[1] < (L(m[0] - y) < Y ? b : w) : b <= m[1] && m[1] <= w : V < M ^ (y <= m[0] && m[0] <= x)) {
                                    var S = d3_geo_cartesianScale(d, (-f + _) / g);
                                    return d3_geo_cartesianAdd(S, h), [m, d3_geo_spherical(S)]
                                }
                            }
                        }

                        function code(t, e) {
                            var n = f ? i : V - i, r = 0;
                            return t < -n ? r |= 1 : n < t && (r |= 2), e < -n ? r |= 4 : n < e && (r |= 8), r
                        }
                    }((v = +t) * C), invalidate()) : v
                }, projection.clipExtent = function (t) {
                    return arguments.length ? (m = (y = t) ? d3_geo_clipExtent(t[0][0], t[0][1], t[1][0], t[1][1]) : d3_identity, invalidate()) : y
                }, projection.scale = function (t) {
                    return arguments.length ? (u = +t, reset()) : u
                }, projection.translate = function (t) {
                    return arguments.length ? (c = +t[0], l = +t[1], reset()) : [c, l]
                }, projection.center = function (t) {
                    return arguments.length ? (h = t[0] % 360 * C, d = t[1] % 360 * C, reset()) : [h * E, d * E]
                }, projection.rotate = function (t) {
                    return arguments.length ? (f = t[0] % 360 * C, g = t[1] % 360 * C, p = 2 < t.length ? t[2] % 360 * C : 0, reset()) : [f * E, g * E, p * E]
                }, P.rebind(projection, s, "precision"), function () {
                    return n = t.apply(this, arguments), projection.invert = n.invert && invert, reset()
                }
            }

            function d3_geo_projectionRadians(n) {
                return d3_geo_transformPoint(n, function (t, e) {
                    n.point(t * C, e * C)
                })
            }

            function d3_geo_equirectangular(t, e) {
                return [t, e]
            }

            function d3_geo_identityRotation(t, e) {
                return [V < t ? t - R : t < -V ? t + R : t, e]
            }

            function d3_geo_rotation(t, e, n) {
                return t ? e || n ? d3_geo_compose(d3_geo_rotationλ(t), d3_geo_rotationφγ(e, n)) : d3_geo_rotationλ(t) : e || n ? d3_geo_rotationφγ(e, n) : d3_geo_identityRotation
            }

            function d3_geo_forwardRotationλ(n) {
                return function (t, e) {
                    return [V < (t += n) ? t - R : t < -V ? t + R : t, e]
                }
            }

            function d3_geo_rotationλ(t) {
                var e = d3_geo_forwardRotationλ(t);
                return e.invert = d3_geo_forwardRotationλ(-t), e
            }

            function d3_geo_rotationφγ(t, e) {
                var s = Math.cos(t), u = Math.sin(t), c = Math.cos(e), l = Math.sin(e);

                function rotation(t, e) {
                    var n = Math.cos(e), r = Math.cos(t) * n, i = Math.sin(t) * n, a = Math.sin(e), o = a * s + r * u;
                    return [Math.atan2(i * c - o * l, r * s - a * u), d3_asin(o * c + i * l)]
                }

                return rotation.invert = function (t, e) {
                    var n = Math.cos(e), r = Math.cos(t) * n, i = Math.sin(t) * n, a = Math.sin(e), o = a * c - i * l;
                    return [Math.atan2(i * c + a * l, r * s + o * u), d3_asin(o * s - r * u)]
                }, rotation
            }

            function d3_geo_circleInterpolate(s, u) {
                var c = Math.cos(s), l = Math.sin(s);
                return function (t, e, n, r) {
                    var i = n * u;
                    null != t ? (t = d3_geo_circleAngle(c, t), e = d3_geo_circleAngle(c, e), (0 < n ? t < e : e < t) && (t += n * R)) : (t = s + n * R, e = s - .5 * i);
                    for (var a, o = t; 0 < n ? e < o : o < e; o -= i) r.point((a = d3_geo_spherical([c, -l * Math.cos(o), -l * Math.sin(o)]))[0], a[1])
                }
            }

            function d3_geo_circleAngle(t, e) {
                var n = d3_geo_cartesian(e);
                n[0] -= t, d3_geo_cartesianNormalize(n);
                var r = d3_acos(-n[1]);
                return ((-n[2] < 0 ? -r : r) + 2 * Math.PI - Y) % (2 * Math.PI)
            }

            function d3_geo_graticuleX(t, e, n) {
                var r = P.range(t, e - Y, n).concat(e);
                return function (e) {
                    return r.map(function (t) {
                        return [e, t]
                    })
                }
            }

            function d3_geo_graticuleY(t, e, n) {
                var r = P.range(t, e - Y, n).concat(e);
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

            P.geo.path = function () {
                var r, e, i, n, a, o = 4.5;

                function path(t) {
                    return t && ("function" == typeof o && n.pointRadius(+o.apply(this, arguments)), a && a.valid || (a = i(n)), P.geo.stream(t, a)), n.result()
                }

                function reset() {
                    return a = null, path
                }

                return path.area = function (t) {
                    return Rt = 0, P.geo.stream(t, i(Dt)), Rt
                }, path.centroid = function (t) {
                    return pt = _t = mt = vt = yt = xt = bt = wt = Mt = 0, P.geo.stream(t, i(jt)), Mt ? [bt / Mt, wt / Mt] : xt ? [vt / xt, yt / xt] : mt ? [pt / mt, _t / mt] : [NaN, NaN]
                }, path.bounds = function (t) {
                    return zt = Pt = -(At = Lt = 1 / 0), P.geo.stream(t, i(Ft)), [[At, Lt], [zt, Pt]]
                }, path.projection = function (t) {
                    return arguments.length ? (i = (r = t) ? t.stream || (n = t, e = d3_geo_resample(function (t, e) {
                        return n([t * E, e * E])
                    }), function (t) {
                        return d3_geo_projectionRadians(e(t))
                    }) : d3_identity, reset()) : r;
                    var n, e
                }, path.context = function (t) {
                    return arguments.length ? (n = null == (e = t) ? new d3_geo_pathBuffer : new d3_geo_pathContext(t), "function" != typeof o && n.pointRadius(o), reset()) : e
                }, path.pointRadius = function (t) {
                    return arguments.length ? (o = "function" == typeof t ? t : (n.pointRadius(+t), +t), path) : o
                }, path.projection(P.geo.albersUsa()).context(null)
            }, P.geo.transform = function (r) {
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
            }, P.geo.projection = d3_geo_projection, P.geo.projectionMutator = d3_geo_projectionMutator, (P.geo.equirectangular = function () {
                return d3_geo_projection(d3_geo_equirectangular)
            }).raw = d3_geo_equirectangular.invert = d3_geo_equirectangular, P.geo.rotation = function (e) {
                function forward(t) {
                    return (t = e(t[0] * C, t[1] * C))[0] *= E, t[1] *= E, t
                }

                return e = d3_geo_rotation(e[0] % 360 * C, e[1] * C, 2 < e.length ? e[2] * C : 0), forward.invert = function (t) {
                    return (t = e.invert(t[0] * C, t[1] * C))[0] *= E, t[1] *= E, t
                }, forward
            }, d3_geo_identityRotation.invert = d3_geo_equirectangular, P.geo.circle = function () {
                var e, i, a = [0, 0], n = 6;

                function circle() {
                    var t = "function" == typeof a ? a.apply(this, arguments) : a,
                        n = d3_geo_rotation(-t[0] * C, -t[1] * C, 0).invert, r = [];
                    return i(null, null, 1, {
                        point: function (t, e) {
                            r.push(t = n(t, e)), t[0] *= E, t[1] *= E
                        }
                    }), {type: "Polygon", coordinates: [r]}
                }

                return circle.origin = function (t) {
                    return arguments.length ? (a = t, circle) : a
                }, circle.angle = function (t) {
                    return arguments.length ? (i = d3_geo_circleInterpolate((e = +t) * C, n * C), circle) : e
                }, circle.precision = function (t) {
                    return arguments.length ? (i = d3_geo_circleInterpolate(e * C, (n = +t) * C), circle) : n
                }, circle.angle(90)
            }, P.geo.distance = function (t, e) {
                var n, r = (e[0] - t[0]) * C, i = t[1] * C, a = e[1] * C, o = Math.sin(r), s = Math.cos(r),
                    u = Math.sin(i), c = Math.cos(i), l = Math.sin(a), h = Math.cos(a);
                return Math.atan2(Math.sqrt((n = h * o) * n + (n = c * l - u * h * s) * n), u * l + c * h * s)
            }, P.geo.graticule = function () {
                var e, n, r, i, a, o, s, u, c, l, h, d, f = 10, g = f, p = 90, _ = 360, m = 2.5;

                function graticule() {
                    return {type: "MultiLineString", coordinates: lines()}
                }

                function lines() {
                    return P.range(Math.ceil(i / p) * p, r, p).map(h).concat(P.range(Math.ceil(u / _) * _, s, _).map(d)).concat(P.range(Math.ceil(n / f) * f, e, f).filter(function (t) {
                        return L(t % p) > Y
                    }).map(c)).concat(P.range(Math.ceil(o / g) * g, a, g).filter(function (t) {
                        return L(t % _) > Y
                    }).map(l))
                }

                return graticule.lines = function () {
                    return lines().map(function (t) {
                        return {type: "LineString", coordinates: t}
                    })
                }, graticule.outline = function () {
                    return {
                        type: "Polygon",
                        coordinates: [h(i).concat(d(s).slice(1), h(r).reverse().slice(1), d(u).reverse().slice(1))]
                    }
                }, graticule.extent = function (t) {
                    return arguments.length ? graticule.majorExtent(t).minorExtent(t) : graticule.minorExtent()
                }, graticule.majorExtent = function (t) {
                    return arguments.length ? (i = +t[0][0], r = +t[1][0], u = +t[0][1], s = +t[1][1], r < i && (t = i, i = r, r = t), s < u && (t = u, u = s, s = t), graticule.precision(m)) : [[i, u], [r, s]]
                }, graticule.minorExtent = function (t) {
                    return arguments.length ? (n = +t[0][0], e = +t[1][0], o = +t[0][1], a = +t[1][1], e < n && (t = n, n = e, e = t), a < o && (t = o, o = a, a = t), graticule.precision(m)) : [[n, o], [e, a]]
                }, graticule.step = function (t) {
                    return arguments.length ? graticule.majorStep(t).minorStep(t) : graticule.minorStep()
                }, graticule.majorStep = function (t) {
                    return arguments.length ? (p = +t[0], _ = +t[1], graticule) : [p, _]
                }, graticule.minorStep = function (t) {
                    return arguments.length ? (f = +t[0], g = +t[1], graticule) : [f, g]
                }, graticule.precision = function (t) {
                    return arguments.length ? (m = +t, c = d3_geo_graticuleX(o, a, 90), l = d3_geo_graticuleY(n, e, m), h = d3_geo_graticuleX(u, s, 90), d = d3_geo_graticuleY(i, r, m), graticule) : m
                }, graticule.majorExtent([[-180, -90 + Y], [180, 90 - Y]]).minorExtent([[-180, -80 - Y], [180, 80 + Y]])
            }, P.geo.greatArc = function () {
                var e, n, r = d3_source, i = d3_target;

                function greatArc() {
                    return {
                        type: "LineString",
                        coordinates: [e || r.apply(this, arguments), n || i.apply(this, arguments)]
                    }
                }

                return greatArc.distance = function () {
                    return P.geo.distance(e || r.apply(this, arguments), n || i.apply(this, arguments))
                }, greatArc.source = function (t) {
                    return arguments.length ? (e = "function" == typeof (r = t) ? null : t, greatArc) : r
                }, greatArc.target = function (t) {
                    return arguments.length ? (n = "function" == typeof (i = t) ? null : t, greatArc) : i
                }, greatArc.precision = function () {
                    return arguments.length ? greatArc : 0
                }, greatArc
            }, P.geo.interpolate = function (t, e) {
                return n = t[0] * C, r = t[1] * C, i = e[0] * C, a = e[1] * C, o = Math.cos(r), s = Math.sin(r), u = Math.cos(a), c = Math.sin(a), l = o * Math.cos(n), h = o * Math.sin(n), d = u * Math.cos(i), f = u * Math.sin(i), g = 2 * Math.asin(Math.sqrt(d3_haversin(a - r) + o * u * d3_haversin(i - n))), p = 1 / Math.sin(g), (_ = g ? function (t) {
                    var e = Math.sin(t *= g) * p, n = Math.sin(g - t) * p, r = n * l + e * d, i = n * h + e * f,
                        a = n * s + e * c;
                    return [Math.atan2(i, r) * E, Math.atan2(a, Math.sqrt(r * r + i * i)) * E]
                } : function () {
                    return [n * E, r * E]
                }).distance = g, _;
                var n, r, i, a, o, s, u, c, l, h, d, f, g, p, _
            }, P.geo.length = function (t) {
                return qt = 0, P.geo.stream(t, It), qt
            };
            var It = {
                sphere: d3_noop, point: d3_noop, lineStart: function () {
                    var o, s, u;

                    function nextPoint(t, e) {
                        var n = Math.sin(e *= C), r = Math.cos(e), i = L((t *= C) - o), a = Math.cos(i);
                        qt += Math.atan2(Math.sqrt((i = r * Math.sin(i)) * i + (i = u * n - s * r * a) * i), s * n + u * r * a), o = t, s = n, u = r
                    }

                    It.point = function (t, e) {
                        o = t * C, s = Math.sin(e *= C), u = Math.cos(e), It.point = nextPoint
                    }, It.lineEnd = function () {
                        It.point = It.lineEnd = d3_noop
                    }
                }, lineEnd: d3_noop, polygonStart: d3_noop, polygonEnd: d3_noop
            };

            function d3_geo_azimuthal(a, o) {
                function azimuthal(t, e) {
                    var n = Math.cos(t), r = Math.cos(e), i = a(n * r);
                    return [i * r * Math.sin(t), i * Math.sin(e)]
                }

                return azimuthal.invert = function (t, e) {
                    var n = Math.sqrt(t * t + e * e), r = o(n), i = Math.sin(r), a = Math.cos(r);
                    return [Math.atan2(t * i, n * a), Math.asin(n && e * i / n)]
                }, azimuthal
            }

            var Ht = d3_geo_azimuthal(function (t) {
                return Math.sqrt(2 / (1 + t))
            }, function (t) {
                return 2 * Math.asin(t / 2)
            });
            (P.geo.azimuthalEqualArea = function () {
                return d3_geo_projection(Ht)
            }).raw = Ht;
            var Bt = d3_geo_azimuthal(function (t) {
                var e = Math.acos(t);
                return e && e / Math.sin(e)
            }, d3_identity);

            function d3_geo_conicConformal(t, e) {
                var n = Math.cos(t), r = function (t) {
                        return Math.tan(V / 4 + t / 2)
                    }, i = t === e ? Math.sin(t) : Math.log(n / Math.cos(e)) / Math.log(r(e) / r(t)),
                    a = n * Math.pow(r(t), i) / i;
                if (!i) return d3_geo_mercator;

                function forward(t, e) {
                    0 < a ? e < -W + Y && (e = -W + Y) : W - Y < e && (e = W - Y);
                    var n = a / Math.pow(r(e), i);
                    return [n * Math.sin(i * t), a - n * Math.cos(i * t)]
                }

                return forward.invert = function (t, e) {
                    var n = a - e, r = d3_sgn(i) * Math.sqrt(t * t + n * n);
                    return [Math.atan2(t, n) / i, 2 * Math.atan(Math.pow(a / r, 1 / i)) - W]
                }, forward
            }

            function d3_geo_conicEquidistant(t, e) {
                var n = Math.cos(t), r = t === e ? Math.sin(t) : (n - Math.cos(e)) / (e - t), i = n / r + t;
                if (L(r) < Y) return d3_geo_equirectangular;

                function forward(t, e) {
                    var n = i - e;
                    return [n * Math.sin(r * t), i - n * Math.cos(r * t)]
                }

                return forward.invert = function (t, e) {
                    var n = i - e;
                    return [Math.atan2(t, n) / r, i - d3_sgn(r) * Math.sqrt(t * t + n * n)]
                }, forward
            }

            (P.geo.azimuthalEquidistant = function () {
                return d3_geo_projection(Bt)
            }).raw = Bt, (P.geo.conicConformal = function () {
                return d3_geo_conic(d3_geo_conicConformal)
            }).raw = d3_geo_conicConformal, (P.geo.conicEquidistant = function () {
                return d3_geo_conic(d3_geo_conicEquidistant)
            }).raw = d3_geo_conicEquidistant;
            var Ut = d3_geo_azimuthal(function (t) {
                return 1 / t
            }, Math.atan);

            function d3_geo_mercator(t, e) {
                return [t, Math.log(Math.tan(V / 4 + e / 2))]
            }

            function d3_geo_mercatorProjection(t) {
                var i, a = d3_geo_projection(t), o = a.scale, s = a.translate, u = a.clipExtent;
                return a.scale = function () {
                    var t = o.apply(a, arguments);
                    return t === a ? i ? a.clipExtent(null) : a : t
                }, a.translate = function () {
                    var t = s.apply(a, arguments);
                    return t === a ? i ? a.clipExtent(null) : a : t
                }, a.clipExtent = function (t) {
                    var e = u.apply(a, arguments);
                    if (e === a) {
                        if (i = null == t) {
                            var n = V * o(), r = s();
                            u([[r[0] - n, r[1] - n], [r[0] + n, r[1] + n]])
                        }
                    } else i && (e = null);
                    return e
                }, a.clipExtent(null)
            }

            (P.geo.gnomonic = function () {
                return d3_geo_projection(Ut)
            }).raw = Ut, d3_geo_mercator.invert = function (t, e) {
                return [t, 2 * Math.atan(Math.exp(e)) - W]
            }, (P.geo.mercator = function () {
                return d3_geo_mercatorProjection(d3_geo_mercator)
            }).raw = d3_geo_mercator;
            var Ot = d3_geo_azimuthal(function () {
                return 1
            }, Math.asin);
            (P.geo.orthographic = function () {
                return d3_geo_projection(Ot)
            }).raw = Ot;
            var Gt = d3_geo_azimuthal(function (t) {
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
                for (var e = t.length, n = [0, 1], r = 2, i = 2; i < e; i++) {
                    for (; 1 < r && d3_cross2d(t[n[r - 2]], t[n[r - 1]], t[i]) <= 0;) --r;
                    n[r++] = i
                }
                return n.slice(0, r)
            }

            function d3_geom_hullOrder(t, e) {
                return t[0] - e[0] || t[1] - e[1]
            }

            (P.geo.stereographic = function () {
                return d3_geo_projection(Gt)
            }).raw = Gt, d3_geo_transverseMercator.invert = function (t, e) {
                return [-e, 2 * Math.atan(Math.exp(t)) - W]
            }, (P.geo.transverseMercator = function () {
                var t = d3_geo_mercatorProjection(d3_geo_transverseMercator), e = t.center, n = t.rotate;
                return t.center = function (t) {
                    return t ? e([-t[1], t[0]]) : [(t = e())[1], -t[0]]
                }, t.rotate = function (t) {
                    return t ? n([t[0], t[1], 2 < t.length ? t[2] + 90 : 90]) : [(t = n())[0], t[1], t[2] - 90]
                }, n([0, 0, 90])
            }).raw = d3_geo_transverseMercator, P.geom = {}, P.geom.hull = function (t) {
                var d = d3_geom_pointX, f = d3_geom_pointY;
                if (arguments.length) return hull(t);

                function hull(t) {
                    if (t.length < 3) return [];
                    var e, n = d3_functor(d), r = d3_functor(f), i = t.length, a = [], o = [];
                    for (e = 0; e < i; e++) a.push([+n.call(this, t[e], e), +r.call(this, t[e], e), e]);
                    for (a.sort(d3_geom_hullOrder), e = 0; e < i; e++) o.push([a[e][0], -a[e][1]]);
                    var s = d3_geom_hullUpper(a), u = d3_geom_hullUpper(o), c = u[0] === s[0],
                        l = u[u.length - 1] === s[s.length - 1], h = [];
                    for (e = s.length - 1; 0 <= e; --e) h.push(t[a[s[e]][2]]);
                    for (e = +c; e < u.length - l; ++e) h.push(t[a[u[e]][2]]);
                    return h
                }

                return hull.x = function (t) {
                    return arguments.length ? (d = t, hull) : d
                }, hull.y = function (t) {
                    return arguments.length ? (f = t, hull) : f
                }, hull
            }, P.geom.polygon = function (t) {
                return h(t, Yt), t
            };
            var Yt = P.geom.polygon.prototype = [];

            function d3_geom_polygonInside(t, e, n) {
                return (n[0] - e[0]) * (t[1] - e[1]) < (n[1] - e[1]) * (t[0] - e[0])
            }

            function d3_geom_polygonIntersect(t, e, n, r) {
                var i = t[0], a = n[0], o = e[0] - i, s = r[0] - a, u = t[1], c = n[1], l = e[1] - u, h = r[1] - c,
                    d = (s * (u - c) - h * (i - a)) / (h * o - s * l);
                return [i + d * o, u + d * l]
            }

            function d3_geom_polygonClosed(t) {
                var e = t[0], n = t[t.length - 1];
                return !(e[0] - n[0] || e[1] - n[1])
            }

            Yt.area = function () {
                for (var t, e = -1, n = this.length, r = this[n - 1], i = 0; ++e < n;) t = r, r = this[e], i += t[1] * r[0] - t[0] * r[1];
                return .5 * i
            }, Yt.centroid = function (t) {
                var e, n, r = -1, i = this.length, a = 0, o = 0, s = this[i - 1];
                for (arguments.length || (t = -1 / (6 * this.area())); ++r < i;) e = s, s = this[r], n = e[0] * s[1] - s[0] * e[1], a += (e[0] + s[0]) * n, o += (e[1] + s[1]) * n;
                return [a * t, o * t]
            }, Yt.clip = function (t) {
                for (var e, n, r, i, a, o, s = d3_geom_polygonClosed(t), u = -1, c = this.length - d3_geom_polygonClosed(this), l = this[c - 1]; ++u < c;) {
                    for (e = t.slice(), t.length = 0, i = this[u], a = e[(r = e.length - s) - 1], n = -1; ++n < r;) d3_geom_polygonInside(o = e[n], l, i) ? (d3_geom_polygonInside(a, l, i) || t.push(d3_geom_polygonIntersect(a, o, l, i)), t.push(o)) : d3_geom_polygonInside(a, l, i) && t.push(d3_geom_polygonIntersect(a, o, l, i)), a = o;
                    s && t.push(t[0]), l = i
                }
                return t
            };
            var Vt, Xt, Wt, Zt, Qt, Jt = [], $t = [];

            function d3_geom_voronoiBeach() {
                d3_geom_voronoiRedBlackNode(this), this.edge = this.site = this.circle = null
            }

            function d3_geom_voronoiCreateBeach(t) {
                var e = Jt.pop() || new d3_geom_voronoiBeach;
                return e.site = t, e
            }

            function d3_geom_voronoiDetachBeach(t) {
                d3_geom_voronoiDetachCircle(t), Wt.remove(t), Jt.push(t), d3_geom_voronoiRedBlackNode(t)
            }

            function d3_geom_voronoiRemoveBeach(t) {
                var e = t.circle, n = e.x, r = e.cy, i = {x: n, y: r}, a = t.P, o = t.N, s = [t];
                d3_geom_voronoiDetachBeach(t);
                for (var u = a; u.circle && L(n - u.circle.x) < Y && L(r - u.circle.cy) < Y;) a = u.P, s.unshift(u), d3_geom_voronoiDetachBeach(u), u = a;
                s.unshift(u), d3_geom_voronoiDetachCircle(u);
                for (var c = o; c.circle && L(n - c.circle.x) < Y && L(r - c.circle.cy) < Y;) o = c.N, s.push(c), d3_geom_voronoiDetachBeach(c), c = o;
                s.push(c), d3_geom_voronoiDetachCircle(c);
                var l, h = s.length;
                for (l = 1; l < h; ++l) c = s[l], u = s[l - 1], d3_geom_voronoiSetEdgeEnd(c.edge, u.site, c.site, i);
                u = s[0], (c = s[h - 1]).edge = d3_geom_voronoiCreateEdge(u.site, c.site, null, i), d3_geom_voronoiAttachCircle(u), d3_geom_voronoiAttachCircle(c)
            }

            function d3_geom_voronoiAddBeach(t) {
                for (var e, n, r, i, a = t.x, o = t.y, s = Wt._; s;) if (r = d3_geom_voronoiLeftBreakPoint(s, o) - a, Y < r) s = s.L; else {
                    if (i = a - d3_geom_voronoiRightBreakPoint(s, o), !(Y < i)) {
                        -Y < r ? (e = s.P, n = s) : -Y < i ? n = (e = s).N : e = n = s;
                        break
                    }
                    if (!s.R) {
                        e = s;
                        break
                    }
                    s = s.R
                }
                var u = d3_geom_voronoiCreateBeach(t);
                if (Wt.insert(e, u), e || n) {
                    if (e === n) return d3_geom_voronoiDetachCircle(e), n = d3_geom_voronoiCreateBeach(e.site), Wt.insert(u, n), u.edge = n.edge = d3_geom_voronoiCreateEdge(e.site, u.site), d3_geom_voronoiAttachCircle(e), void d3_geom_voronoiAttachCircle(n);
                    if (n) {
                        d3_geom_voronoiDetachCircle(e), d3_geom_voronoiDetachCircle(n);
                        var c = e.site, l = c.x, h = c.y, d = t.x - l, f = t.y - h, g = n.site, p = g.x - l,
                            _ = g.y - h, m = 2 * (d * _ - f * p), v = d * d + f * f, y = p * p + _ * _,
                            x = {x: (_ * v - f * y) / m + l, y: (d * y - p * v) / m + h};
                        d3_geom_voronoiSetEdgeEnd(n.edge, c, g, x), u.edge = d3_geom_voronoiCreateEdge(c, t, null, x), n.edge = d3_geom_voronoiCreateEdge(t, g, null, x), d3_geom_voronoiAttachCircle(e), d3_geom_voronoiAttachCircle(n)
                    } else u.edge = d3_geom_voronoiCreateEdge(e.site, u.site)
                }
            }

            function d3_geom_voronoiLeftBreakPoint(t, e) {
                var n = t.site, r = n.x, i = n.y, a = i - e;
                if (!a) return r;
                var o = t.P;
                if (!o) return -1 / 0;
                var s = (n = o.site).x, u = n.y, c = u - e;
                if (!c) return s;
                var l = s - r, h = 1 / a - 1 / c, d = l / c;
                return h ? (-d + Math.sqrt(d * d - 2 * h * (l * l / (-2 * c) - u + c / 2 + i - a / 2))) / h + r : (r + s) / 2
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
                    var r = e.site, i = t.site, a = n.site;
                    if (r !== a) {
                        var o = i.x, s = i.y, u = r.x - o, c = r.y - s, l = a.x - o,
                            h = 2 * (u * (_ = a.y - s) - c * l);
                        if (!(-S <= h)) {
                            var d = u * u + c * c, f = l * l + _ * _, g = (_ * d - c * f) / h, p = (u * f - l * d) / h,
                                _ = p + s, m = $t.pop() || new d3_geom_voronoiCircle;
                            m.arc = t, m.site = i, m.x = g + o, m.y = _ + Math.sqrt(g * g + p * p), m.cy = _, t.circle = m;
                            for (var v = null, y = Qt._; y;) if (m.y < y.y || m.y === y.y && m.x <= y.x) {
                                if (!y.L) {
                                    v = y.P;
                                    break
                                }
                                y = y.L
                            } else {
                                if (!y.R) {
                                    v = y;
                                    break
                                }
                                y = y.R
                            }
                            Qt.insert(v, m), v || (Zt = m)
                        }
                    }
                }
            }

            function d3_geom_voronoiDetachCircle(t) {
                var e = t.circle;
                e && (e.P || (Zt = e.N), Qt.remove(e), $t.push(e), d3_geom_voronoiRedBlackNode(e), t.circle = null)
            }

            function d3_geom_voronoiConnectEdge(t, e) {
                var n = t.b;
                if (n) return !0;
                var r, i, a = t.a, o = e[0][0], s = e[1][0], u = e[0][1], c = e[1][1], l = t.l, h = t.r, d = l.x,
                    f = l.y, g = h.x, p = h.y, _ = (d + g) / 2, m = (f + p) / 2;
                if (p === f) {
                    if (_ < o || s <= _) return;
                    if (g < d) {
                        if (a) {
                            if (a.y >= c) return
                        } else a = {x: _, y: u};
                        n = {x: _, y: c}
                    } else {
                        if (a) {
                            if (a.y < u) return
                        } else a = {x: _, y: c};
                        n = {x: _, y: u}
                    }
                } else if (i = m - (r = (d - g) / (p - f)) * _, r < -1 || 1 < r) if (g < d) {
                    if (a) {
                        if (a.y >= c) return
                    } else a = {x: (u - i) / r, y: u};
                    n = {x: (c - i) / r, y: c}
                } else {
                    if (a) {
                        if (a.y < u) return
                    } else a = {x: (c - i) / r, y: c};
                    n = {x: (u - i) / r, y: u}
                } else if (f < p) {
                    if (a) {
                        if (a.x >= s) return
                    } else a = {x: o, y: r * o + i};
                    n = {x: s, y: r * s + i}
                } else {
                    if (a) {
                        if (a.x < o) return
                    } else a = {x: s, y: r * s + i};
                    n = {x: o, y: r * o + i}
                }
                return t.a = a, t.b = n, !0
            }

            function d3_geom_voronoiEdge(t, e) {
                this.l = t, this.r = e, this.a = this.b = null
            }

            function d3_geom_voronoiCreateEdge(t, e, n, r) {
                var i = new d3_geom_voronoiEdge(t, e);
                return Vt.push(i), n && d3_geom_voronoiSetEdgeEnd(i, t, e, n), r && d3_geom_voronoiSetEdgeEnd(i, e, t, r), Xt[t.i].edges.push(new d3_geom_voronoiHalfEdge(i, t, e)), Xt[e.i].edges.push(new d3_geom_voronoiHalfEdge(i, e, t)), i
            }

            function d3_geom_voronoiSetEdgeEnd(t, e, n, r) {
                t.a || t.b ? t.l === n ? t.b = r : t.a = r : (t.a = r, t.l = e, t.r = n)
            }

            function d3_geom_voronoiHalfEdge(t, e, n) {
                var r = t.a, i = t.b;
                this.edge = t, this.site = e, this.angle = n ? Math.atan2(n.y - e.y, n.x - e.x) : t.l === e ? Math.atan2(i.x - r.x, r.y - i.y) : Math.atan2(r.x - i.x, i.y - r.y)
            }

            function d3_geom_voronoiRedBlackTree() {
                this._ = null
            }

            function d3_geom_voronoiRedBlackNode(t) {
                t.U = t.C = t.L = t.R = t.P = t.N = null
            }

            function d3_geom_voronoiRedBlackRotateLeft(t, e) {
                var n = e, r = e.R, i = n.U;
                i ? i.L === n ? i.L = r : i.R = r : t._ = r, r.U = i, n.U = r, n.R = r.L, n.R && (n.R.U = n), r.L = n
            }

            function d3_geom_voronoiRedBlackRotateRight(t, e) {
                var n = e, r = e.L, i = n.U;
                i ? i.L === n ? i.L = r : i.R = r : t._ = r, r.U = i, n.U = r, n.L = r.R, n.L && (n.L.U = n), r.R = n
            }

            function d3_geom_voronoiRedBlackFirst(t) {
                for (; t.L;) t = t.L;
                return t
            }

            function d3_geom_voronoi(t, e) {
                var n, r, i, a = t.sort(d3_geom_voronoiVertexOrder).pop();
                for (Vt = [], Xt = new Array(t.length), Wt = new d3_geom_voronoiRedBlackTree, Qt = new d3_geom_voronoiRedBlackTree; ;) if (i = Zt, a && (!i || a.y < i.y || a.y === i.y && a.x < i.x)) a.x === n && a.y === r || (Xt[a.i] = new d3_geom_voronoiCell(a), d3_geom_voronoiAddBeach(a), n = a.x, r = a.y), a = t.pop(); else {
                    if (!i) break;
                    d3_geom_voronoiRemoveBeach(i.arc)
                }
                e && (function (t) {
                    for (var e, n = Vt, r = d3_geom_clipLine(t[0][0], t[0][1], t[1][0], t[1][1]), i = n.length; i--;) (!d3_geom_voronoiConnectEdge(e = n[i], t) || !r(e) || L(e.a.x - e.b.x) < Y && L(e.a.y - e.b.y) < Y) && (e.a = e.b = null, n.splice(i, 1))
                }(e), function (t) {
                    for (var e, n, r, i, a, o, s, u, c, l, h = t[0][0], d = t[1][0], f = t[0][1], g = t[1][1], p = Xt, _ = p.length; _--;) if ((a = p[_]) && a.prepare()) for (u = (s = a.edges).length, o = 0; o < u;) r = (l = s[o].end()).x, i = l.y, e = (c = s[++o % u].start()).x, n = c.y, (L(r - e) > Y || L(i - n) > Y) && (s.splice(o, 0, new d3_geom_voronoiHalfEdge((m = a.site, v = l, y = L(r - h) < Y && Y < g - i ? {
                        x: h,
                        y: L(e - h) < Y ? n : g
                    } : L(i - g) < Y && Y < d - r ? {x: L(n - g) < Y ? e : d, y: g} : L(r - d) < Y && Y < i - f ? {
                        x: d,
                        y: L(e - d) < Y ? n : f
                    } : L(i - f) < Y && Y < r - h ? {
                        x: L(n - f) < Y ? e : h,
                        y: f
                    } : null, x = void 0, x = new d3_geom_voronoiEdge(m, null), x.a = v, x.b = y, Vt.push(x), x), a.site, null)), ++u);
                    var m, v, y, x
                }(e));
                var o = {cells: Xt, edges: Vt};
                return Wt = Qt = Vt = Xt = null, o
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
                    var n, r, i;
                    if (t) {
                        if (e.P = t, e.N = t.N, t.N && (t.N.P = e), t.N = e, t.R) {
                            for (t = t.R; t.L;) t = t.L;
                            t.L = e
                        } else t.R = e;
                        n = t
                    } else n = this._ ? (t = d3_geom_voronoiRedBlackFirst(this._), e.P = null, (e.N = t).P = t.L = e, t) : (e.P = e.N = null, this._ = e, null);
                    for (e.L = e.R = null, e.U = n, e.C = !0, t = e; n && n.C;) n === (r = n.U).L ? (i = r.R) && i.C ? (n.C = i.C = !1, r.C = !0, t = r) : (t === n.R && (d3_geom_voronoiRedBlackRotateLeft(this, n), n = (t = n).U), n.C = !1, r.C = !0, d3_geom_voronoiRedBlackRotateRight(this, r)) : (i = r.L) && i.C ? (n.C = i.C = !1, r.C = !0, t = r) : (t === n.L && (d3_geom_voronoiRedBlackRotateRight(this, n), n = (t = n).U), n.C = !1, r.C = !0, d3_geom_voronoiRedBlackRotateLeft(this, r)), n = t.U;
                    this._.C = !1
                }, remove: function (t) {
                    t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;
                    var e, n, r, i = t.U, a = t.L, o = t.R;
                    if (n = a ? o ? d3_geom_voronoiRedBlackFirst(o) : a : o, i ? i.L === t ? i.L = n : i.R = n : this._ = n, a && o ? (r = n.C, n.C = t.C, ((n.L = a).U = n) !== o ? (i = n.U, n.U = t.U, t = n.R, i.L = t, (n.R = o).U = n) : (n.U = i, t = (i = n).R)) : (r = t.C, t = n), t && (t.U = i), !r) if (t && t.C) t.C = !1; else {
                        do {
                            if (t === this._) break;
                            if (t === i.L) {
                                if ((e = i.R).C && (e.C = !1, i.C = !0, d3_geom_voronoiRedBlackRotateLeft(this, i), e = i.R), e.L && e.L.C || e.R && e.R.C) {
                                    e.R && e.R.C || (e.L.C = !1, e.C = !0, d3_geom_voronoiRedBlackRotateRight(this, e), e = i.R), e.C = i.C, i.C = e.R.C = !1, d3_geom_voronoiRedBlackRotateLeft(this, i), t = this._;
                                    break
                                }
                            } else if ((e = i.L).C && (e.C = !1, i.C = !0, d3_geom_voronoiRedBlackRotateRight(this, i), e = i.L), e.L && e.L.C || e.R && e.R.C) {
                                e.L && e.L.C || (e.R.C = !1, e.C = !0, d3_geom_voronoiRedBlackRotateLeft(this, e), e = i.L), e.C = i.C, i.C = e.L.C = !1, d3_geom_voronoiRedBlackRotateRight(this, i), t = this._;
                                break
                            }
                            e.C = !0, i = (t = i).U
                        } while (!t.C);
                        t && (t.C = !1)
                    }
                }
            }, P.geom.voronoi = function (t) {
                var e = d3_geom_pointX, n = d3_geom_pointY, r = e, i = n, l = Kt;
                if (t) return voronoi(t);

                function voronoi(i) {
                    var a = new Array(i.length), o = l[0][0], s = l[0][1], u = l[1][0], c = l[1][1];
                    return d3_geom_voronoi(sites(i), l).cells.forEach(function (t, e) {
                        var n = t.edges, r = t.site;
                        (a[e] = n.length ? n.map(function (t) {
                            var e = t.start();
                            return [e.x, e.y]
                        }) : r.x >= o && r.x <= u && r.y >= s && r.y <= c ? [[o, c], [u, c], [u, s], [o, s]] : []).point = i[e]
                    }), a
                }

                function sites(t) {
                    return t.map(function (t, e) {
                        return {x: Math.round(r(t, e) / Y) * Y, y: Math.round(i(t, e) / Y) * Y, i: e}
                    })
                }

                return voronoi.links = function (e) {
                    return d3_geom_voronoi(sites(e)).edges.filter(function (t) {
                        return t.l && t.r
                    }).map(function (t) {
                        return {source: e[t.l.i], target: e[t.r.i]}
                    })
                }, voronoi.triangles = function (d) {
                    var f = [];
                    return d3_geom_voronoi(sites(d)).cells.forEach(function (t, e) {
                        for (var n, r, i, a, o = t.site, s = t.edges.sort(d3_geom_voronoiHalfEdgeOrder), u = -1, c = s.length, l = s[c - 1].edge, h = l.l === o ? l.r : l.l; ++u < c;) l, n = h, h = (l = s[u].edge).l === o ? l.r : l.l, e < n.i && e < h.i && (i = n, a = h, ((r = o).x - a.x) * (i.y - r.y) - (r.x - i.x) * (a.y - r.y) < 0) && f.push([d[e], d[n.i], d[h.i]])
                    }), f
                }, voronoi.x = function (t) {
                    return arguments.length ? (r = d3_functor(e = t), voronoi) : e
                }, voronoi.y = function (t) {
                    return arguments.length ? (i = d3_functor(n = t), voronoi) : n
                }, voronoi.clipExtent = function (t) {
                    return arguments.length ? (l = null == t ? Kt : t, voronoi) : l === Kt ? null : l
                }, voronoi.size = function (t) {
                    return arguments.length ? voronoi.clipExtent(t && [[0, 0], t]) : l === Kt ? null : l && l[1]
                }, voronoi
            };
            var Kt = [[-1e6, -1e6], [1e6, 1e6]];

            function d3_geom_quadtreeCompatX(t) {
                return t.x
            }

            function d3_geom_quadtreeCompatY(t) {
                return t.y
            }

            function d3_interpolateRgb(t, e) {
                t = P.rgb(t), e = P.rgb(e);
                var n = t.r, r = t.g, i = t.b, a = e.r - n, o = e.g - r, s = e.b - i;
                return function (t) {
                    return "#" + d3_rgb_hex(Math.round(n + a * t)) + d3_rgb_hex(Math.round(r + o * t)) + d3_rgb_hex(Math.round(i + s * t))
                }
            }

            function d3_interpolateObject(t, e) {
                var n, r = {}, i = {};
                for (n in t) n in e ? r[n] = d3_interpolate(t[n], e[n]) : i[n] = t[n];
                for (n in e) n in t || (i[n] = e[n]);
                return function (t) {
                    for (n in r) i[n] = r[n](t);
                    return i
                }
            }

            function d3_interpolateNumber(e, n) {
                return e = +e, n = +n, function (t) {
                    return e * (1 - t) + n * t
                }
            }

            function d3_interpolateString(t, r) {
                var e, n, i, a = te.lastIndex = ee.lastIndex = 0, o = -1, s = [], u = [];
                for (t += "", r += ""; (e = te.exec(t)) && (n = ee.exec(r));) (i = n.index) > a && (i = r.slice(a, i), s[o] ? s[o] += i : s[++o] = i), (e = e[0]) === (n = n[0]) ? s[o] ? s[o] += n : s[++o] = n : (s[++o] = null, u.push({
                    i: o,
                    x: d3_interpolateNumber(e, n)
                })), a = ee.lastIndex;
                return a < r.length && (i = r.slice(a), s[o] ? s[o] += i : s[++o] = i), s.length < 2 ? u[0] ? (r = u[0].x, function (t) {
                    return r(t) + ""
                }) : function () {
                    return r
                } : (r = u.length, function (t) {
                    for (var e, n = 0; n < r; ++n) s[(e = u[n]).i] = e.x(t);
                    return s.join("")
                })
            }

            P.geom.delaunay = function (t) {
                return P.geom.voronoi().triangles(t)
            }, P.geom.quadtree = function (t, _, m, v, y) {
                var x, b = d3_geom_pointX, w = d3_geom_pointY;
                if (x = arguments.length) return b = d3_geom_quadtreeCompatX, w = d3_geom_quadtreeCompatY, 3 === x && (y = m, v = _, m = _ = 0), quadtree(t);

                function quadtree(t) {
                    var e, n, r, i, a, o, s, u, c, l = d3_functor(b), h = d3_functor(w);
                    if (null != _) o = _, s = m, u = v, c = y; else if (u = c = -(o = s = 1 / 0), n = [], r = [], a = t.length, x) for (i = 0; i < a; ++i) (e = t[i]).x < o && (o = e.x), e.y < s && (s = e.y), e.x > u && (u = e.x), e.y > c && (c = e.y), n.push(e.x), r.push(e.y); else for (i = 0; i < a; ++i) {
                        var d = +l(e = t[i], i), f = +h(e, i);
                        d < o && (o = d), f < s && (s = f), u < d && (u = d), c < f && (c = f), n.push(d), r.push(f)
                    }
                    var g = u - o, p = c - s;

                    function insert(t, e, n, r, i, a, o, s) {
                        if (!isNaN(n) && !isNaN(r)) if (t.leaf) {
                            var u = t.x, c = t.y;
                            if (null != u) if (L(u - n) + L(c - r) < .01) insertChild(t, e, n, r, i, a, o, s); else {
                                var l = t.point;
                                t.x = t.y = t.point = null, insertChild(t, l, u, c, i, a, o, s), insertChild(t, e, n, r, i, a, o, s)
                            } else t.x = n, t.y = r, t.point = e
                        } else insertChild(t, e, n, r, i, a, o, s)
                    }

                    function insertChild(t, e, n, r, i, a, o, s) {
                        var u = .5 * (i + o), c = .5 * (a + s), l = u <= n, h = c <= r, d = h << 1 | l;
                        t.leaf = !1, l ? i = u : o = u, h ? a = c : s = c, insert(t = t.nodes[d] || (t.nodes[d] = {
                            leaf: !0,
                            nodes: [],
                            point: null,
                            x: null,
                            y: null
                        }), e, n, r, i, a, o, s)
                    }

                    p < g ? c = s + g : u = o + p;
                    var M = {
                        leaf: !0, nodes: [], point: null, x: null, y: null, add: function (t) {
                            insert(M, t, +l(t, ++i), +h(t, i), o, s, u, c)
                        }
                    };
                    if (M.visit = function (t) {
                        !function d3_geom_quadtreeVisit(t, e, n, r, i, a) {
                            if (!t(e, n, r, i, a)) {
                                var o = .5 * (n + i), s = .5 * (r + a), u = e.nodes;
                                u[0] && d3_geom_quadtreeVisit(t, u[0], n, r, o, s), u[1] && d3_geom_quadtreeVisit(t, u[1], o, r, i, s), u[2] && d3_geom_quadtreeVisit(t, u[2], n, s, o, a), u[3] && d3_geom_quadtreeVisit(t, u[3], o, s, i, a)
                            }
                        }(t, M, o, s, u, c)
                    }, M.find = function (t) {
                        return e = M, p = t[0], _ = t[1], w = 1 / 0, function find(t, e, n, r, i) {
                            if (!(y < e || x < n || r < m || i < v)) {
                                if (a = t.point) {
                                    var a, o = p - t.x, s = _ - t.y, u = o * o + s * s;
                                    if (u < w) {
                                        var c = Math.sqrt(w = u);
                                        m = p - c, v = _ - c, y = p + c, x = _ + c, b = a
                                    }
                                }
                                for (var l = t.nodes, h = .5 * (e + r), d = .5 * (n + i), f = (d <= _) << 1 | h <= p, g = f + 4; f < g; ++f) if (t = l[3 & f]) switch (3 & f) {
                                    case 0:
                                        find(t, e, n, h, d);
                                        break;
                                    case 1:
                                        find(t, h, n, r, d);
                                        break;
                                    case 2:
                                        find(t, e, d, h, i);
                                        break;
                                    case 3:
                                        find(t, h, d, r, i)
                                }
                            }
                        }(e, m = o, v = s, y = u, x = c), b;
                        var e, p, _, m, v, y, x, b, w
                    }, i = -1, null == _) {
                        for (; ++i < a;) insert(M, t[i], n[i], r[i], o, s, u, c);
                        --i
                    } else t.forEach(M.add);
                    return n = r = t = e = null, M
                }

                return quadtree.x = function (t) {
                    return arguments.length ? (b = t, quadtree) : b
                }, quadtree.y = function (t) {
                    return arguments.length ? (w = t, quadtree) : w
                }, quadtree.extent = function (t) {
                    return arguments.length ? (null == t ? _ = m = v = y = null : (_ = +t[0][0], m = +t[0][1], v = +t[1][0], y = +t[1][1]), quadtree) : null == _ ? null : [[_, m], [v, y]]
                }, quadtree.size = function (t) {
                    return arguments.length ? (null == t ? _ = m = v = y = null : (_ = m = 0, v = +t[0], y = +t[1]), quadtree) : null == _ ? null : [v - _, y - m]
                }, quadtree
            }, P.interpolateRgb = d3_interpolateRgb, P.interpolateObject = d3_interpolateObject, P.interpolateNumber = d3_interpolateNumber, P.interpolateString = d3_interpolateString;
            var te = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ee = new RegExp(te.source, "g");

            function d3_interpolate(t, e) {
                for (var n, r = P.interpolators.length; 0 <= --r && !(n = P.interpolators[r](t, e));) ;
                return n
            }

            function d3_interpolateArray(t, e) {
                var n, r = [], i = [], a = t.length, o = e.length, s = Math.min(t.length, e.length);
                for (n = 0; n < s; ++n) r.push(d3_interpolate(t[n], e[n]));
                for (; n < a; ++n) i[n] = t[n];
                for (; n < o; ++n) i[n] = e[n];
                return function (t) {
                    for (n = 0; n < s; ++n) i[n] = r[n](t);
                    return i
                }
            }

            P.interpolate = d3_interpolate, P.interpolators = [function (t, e) {
                var n = typeof e;
                return ("string" === n ? O.has(e.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(e) ? d3_interpolateRgb : d3_interpolateString : e instanceof d3_color ? d3_interpolateRgb : Array.isArray(e) ? d3_interpolateArray : "object" === n && isNaN(e) ? d3_interpolateObject : d3_interpolateNumber)(t, e)
            }], P.interpolateArray = d3_interpolateArray;
            var ne = function () {
                return d3_identity
            }, re = P.map({
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
                    r = arguments.length ? n / R * Math.asin(1 / e) : (e = 1, n / 4);
                    return function (t) {
                        return 1 + e * Math.pow(2, -10 * t) * Math.sin((t - r) * R / n)
                    }
                }, back: function (e) {
                    e || (e = 1.70158);
                    return function (t) {
                        return t * t * ((e + 1) * t - e)
                    }
                }, bounce: function () {
                    return d3_ease_bounce
                }
            }), ie = P.map({
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
                return 1 - Math.cos(t * W)
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
                var e, n, r, i = [t.a, t.b], a = [t.c, t.d], o = d3_transformNormalize(i), s = d3_transformDot(i, a),
                    u = d3_transformNormalize(((e = a)[0] += (r = -s) * (n = i)[0], e[1] += r * n[1], e)) || 0;
                i[0] * a[1] < a[0] * i[1] && (i[0] *= -1, i[1] *= -1, o *= -1, s *= -1), this.rotate = (o ? Math.atan2(i[1], i[0]) : Math.atan2(-a[0], a[1])) * E, this.translate = [t.e, t.f], this.scale = [o, u], this.skew = u ? Math.atan2(s, u) * E : 0
            }

            function d3_transformDot(t, e) {
                return t[0] * e[0] + t[1] * e[1]
            }

            function d3_transformNormalize(t) {
                var e = Math.sqrt(d3_transformDot(t, t));
                return e && (t[0] /= e, t[1] /= e), e
            }

            P.ease = function (t) {
                var e, n = t.indexOf("-"), r = 0 <= n ? t.slice(0, n) : t, i = 0 <= n ? t.slice(n + 1) : "in";
                return r = re.get(r) || ne, i = ie.get(i) || d3_identity, e = i(r.apply(null, a.call(arguments, 1))), function (t) {
                    return t <= 0 ? 0 : 1 <= t ? 1 : e(t)
                }
            }, P.interpolateHcl = function (t, e) {
                t = P.hcl(t), e = P.hcl(e);
                var n = t.h, r = t.c, i = t.l, a = e.h - n, o = e.c - r, s = e.l - i;
                isNaN(o) && (o = 0, r = isNaN(r) ? e.c : r);
                isNaN(a) ? (a = 0, n = isNaN(n) ? e.h : n) : 180 < a ? a -= 360 : a < -180 && (a += 360);
                return function (t) {
                    return d3_hcl_lab(n + a * t, r + o * t, i + s * t) + ""
                }
            }, P.interpolateHsl = function (t, e) {
                t = P.hsl(t), e = P.hsl(e);
                var n = t.h, r = t.s, i = t.l, a = e.h - n, o = e.s - r, s = e.l - i;
                isNaN(o) && (o = 0, r = isNaN(r) ? e.s : r);
                isNaN(a) ? (a = 0, n = isNaN(n) ? e.h : n) : 180 < a ? a -= 360 : a < -180 && (a += 360);
                return function (t) {
                    return d3_hsl_rgb(n + a * t, r + o * t, i + s * t) + ""
                }
            }, P.interpolateLab = function (t, e) {
                t = P.lab(t), e = P.lab(e);
                var n = t.l, r = t.a, i = t.b, a = e.l - n, o = e.a - r, s = e.b - i;
                return function (t) {
                    return d3_lab_rgb(n + a * t, r + o * t, i + s * t) + ""
                }
            }, P.interpolateRound = d3_interpolateRound, P.transform = function (t) {
                var n = p.createElementNS(P.ns.prefix.svg, "g");
                return (P.transform = function (t) {
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
                var n, r, i, a, o, s, u, c, l = [], h = [];
                return t = P.transform(t), e = P.transform(e), function (t, e, n, r) {
                    if (t[0] !== e[0] || t[1] !== e[1]) {
                        var i = n.push("translate(", null, ",", null, ")");
                        r.push({i: i - 4, x: d3_interpolateNumber(t[0], e[0])}, {
                            i: i - 2,
                            x: d3_interpolateNumber(t[1], e[1])
                        })
                    } else (e[0] || e[1]) && n.push("translate(" + e + ")")
                }(t.translate, e.translate, l, h), n = t.rotate, r = e.rotate, i = l, a = h, n !== r ? (180 < n - r ? r += 360 : 180 < r - n && (n += 360), a.push({
                    i: i.push(d3_interpolateTransformPop(i) + "rotate(", null, ")") - 2,
                    x: d3_interpolateNumber(n, r)
                })) : r && i.push(d3_interpolateTransformPop(i) + "rotate(" + r + ")"), o = t.skew, s = e.skew, u = l, c = h, o !== s ? c.push({
                    i: u.push(d3_interpolateTransformPop(u) + "skewX(", null, ")") - 2,
                    x: d3_interpolateNumber(o, s)
                }) : s && u.push(d3_interpolateTransformPop(u) + "skewX(" + s + ")"), function (t, e, n, r) {
                    if (t[0] !== e[0] || t[1] !== e[1]) {
                        var i = n.push(d3_interpolateTransformPop(n) + "scale(", null, ",", null, ")");
                        r.push({i: i - 4, x: d3_interpolateNumber(t[0], e[0])}, {
                            i: i - 2,
                            x: d3_interpolateNumber(t[1], e[1])
                        })
                    } else 1 === e[0] && 1 === e[1] || n.push(d3_interpolateTransformPop(n) + "scale(" + e + ")")
                }(t.scale, e.scale, l, h), t = e = null, function (t) {
                    for (var e, n = -1, r = h.length; ++n < r;) l[(e = h[n]).i] = e.x(t);
                    return l.join("")
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
                    var n = d3_layout_bundleAncestors(t), r = d3_layout_bundleAncestors(e), i = n.pop(), a = r.pop(),
                        o = null;
                    for (; i === a;) o = i, i = n.pop(), a = r.pop();
                    return o
                }(e, n), i = [e]; e !== r;) e = e.parent, i.push(e);
                for (var a = i.length; n !== r;) i.splice(a, 0, n), n = n.parent;
                return i
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

            P.interpolateTransform = d3_interpolateTransform, P.layout = {}, P.layout.bundle = function () {
                return function (t) {
                    for (var e = [], n = -1, r = t.length; ++n < r;) e.push(d3_layout_bundlePath(t[n]));
                    return e
                }
            }, P.layout.chord = function () {
                var _, m, v, y, x, b, w, e = {}, M = 0;

                function relayout() {
                    var t, e, n, r, i, a = {}, o = [], s = P.range(y), u = [];
                    for (_ = [], m = [], t = 0, r = -1; ++r < y;) {
                        for (e = 0, i = -1; ++i < y;) e += v[r][i];
                        o.push(e), u.push(P.range(y)), t += e
                    }
                    for (x && s.sort(function (t, e) {
                        return x(o[t], o[e])
                    }), b && u.forEach(function (t, n) {
                        t.sort(function (t, e) {
                            return b(v[n][t], v[n][e])
                        })
                    }), t = (R - M * y) / t, e = 0, r = -1; ++r < y;) {
                        for (n = e, i = -1; ++i < y;) {
                            var c = s[r], l = u[c][i], h = v[c][l], d = e, f = e += h * t;
                            a[c + "-" + l] = {index: c, subindex: l, startAngle: d, endAngle: f, value: h}
                        }
                        m[c] = {index: c, startAngle: n, endAngle: e, value: o[c]}, e += M
                    }
                    for (r = -1; ++r < y;) for (i = r - 1; ++i < y;) {
                        var g = a[r + "-" + i], p = a[i + "-" + r];
                        (g.value || p.value) && _.push(g.value < p.value ? {source: p, target: g} : {
                            source: g,
                            target: p
                        })
                    }
                    w && resort()
                }

                function resort() {
                    _.sort(function (t, e) {
                        return w((t.source.value + t.target.value) / 2, (e.source.value + e.target.value) / 2)
                    })
                }

                return e.matrix = function (t) {
                    return arguments.length ? (y = (v = t) && v.length, _ = m = null, e) : v
                }, e.padding = function (t) {
                    return arguments.length ? (M = t, _ = m = null, e) : M
                }, e.sortGroups = function (t) {
                    return arguments.length ? (x = t, _ = m = null, e) : x
                }, e.sortSubgroups = function (t) {
                    return arguments.length ? (b = t, _ = null, e) : b
                }, e.sortChords = function (t) {
                    return arguments.length ? (w = t, _ && resort(), e) : w
                }, e.chords = function () {
                    return _ || relayout(), _
                }, e.groups = function () {
                    return m || relayout(), m
                }, e
            }, P.layout.force = function () {
                var h, t, d, f, g, p, r = {}, _ = P.dispatch("start", "tick", "end"), m = [1, 1], v = .9, i = oe,
                    a = se, y = -30, l = ue, x = .1, b = .64, w = [], M = [];

                function repulse(c) {
                    return function (t, e, n, r) {
                        if (t.point !== c) {
                            var i = t.cx - c.x, a = t.cy - c.y, o = r - e, s = i * i + a * a;
                            if (o * o / b < s) {
                                if (s < l) {
                                    var u = t.charge / s;
                                    c.px -= i * u, c.py -= a * u
                                }
                                return !0
                            }
                            if (t.point && s && s < l) {
                                u = t.pointCharge / s;
                                c.px -= i * u, c.py -= a * u
                            }
                        }
                        return !t.charge
                    }
                }

                function dragmove(t) {
                    t.px = P.event.x, t.py = P.event.y, r.resume()
                }

                return r.tick = function () {
                    if ((d *= .99) < .005) return h = null, _.end({type: "end", alpha: d = 0}), !0;
                    var t, e, n, r, i, a, o, s, u, c = w.length, l = M.length;
                    for (e = 0; e < l; ++e) r = (n = M[e]).source, (a = (s = (i = n.target).x - r.x) * s + (u = i.y - r.y) * u) && (s *= a = d * g[e] * ((a = Math.sqrt(a)) - f[e]) / a, u *= a, i.x -= s * (o = r.weight + i.weight ? r.weight / (r.weight + i.weight) : .5), i.y -= u * o, r.x += s * (o = 1 - o), r.y += u * o);
                    if ((o = d * x) && (s = m[0] / 2, u = m[1] / 2, e = -1, o)) for (; ++e < c;) (n = w[e]).x += (s - n.x) * o, n.y += (u - n.y) * o;
                    if (y) for (!function d3_layout_forceAccumulate(t, e, n) {
                        var r = 0, i = 0;
                        t.charge = 0;
                        if (!t.leaf) for (var a, o = t.nodes, s = o.length, u = -1; ++u < s;) null != (a = o[u]) && (d3_layout_forceAccumulate(a, e, n), t.charge += a.charge, r += a.charge * a.cx, i += a.charge * a.cy);
                        if (t.point) {
                            t.leaf || (t.point.x += Math.random() - .5, t.point.y += Math.random() - .5);
                            var c = e * n[t.point.index];
                            t.charge += t.pointCharge = c, r += c * t.point.x, i += c * t.point.y
                        }
                        t.cx = r / t.charge;
                        t.cy = i / t.charge
                    }(t = P.geom.quadtree(w), d, p), e = -1; ++e < c;) (n = w[e]).fixed || t.visit(repulse(n));
                    for (e = -1; ++e < c;) (n = w[e]).fixed ? (n.x = n.px, n.y = n.py) : (n.x -= (n.px - (n.px = n.x)) * v, n.y -= (n.py - (n.py = n.y)) * v);
                    _.tick({type: "tick", alpha: d})
                }, r.nodes = function (t) {
                    return arguments.length ? (w = t, r) : w
                }, r.links = function (t) {
                    return arguments.length ? (M = t, r) : M
                }, r.size = function (t) {
                    return arguments.length ? (m = t, r) : m
                }, r.linkDistance = function (t) {
                    return arguments.length ? (i = "function" == typeof t ? t : +t, r) : i
                }, r.distance = r.linkDistance, r.linkStrength = function (t) {
                    return arguments.length ? (a = "function" == typeof t ? t : +t, r) : a
                }, r.friction = function (t) {
                    return arguments.length ? (v = +t, r) : v
                }, r.charge = function (t) {
                    return arguments.length ? (y = "function" == typeof t ? t : +t, r) : y
                }, r.chargeDistance = function (t) {
                    return arguments.length ? (l = t * t, r) : Math.sqrt(l)
                }, r.gravity = function (t) {
                    return arguments.length ? (x = +t, r) : x
                }, r.theta = function (t) {
                    return arguments.length ? (b = t * t, r) : Math.sqrt(b)
                }, r.alpha = function (t) {
                    return arguments.length ? (t = +t, d ? 0 < t ? d = t : (h.c = null, h.t = NaN, h = null, _.end({
                        type: "end",
                        alpha: d = 0
                    })) : 0 < t && (_.start({type: "start", alpha: d = t}), h = d3_timer(r.tick)), r) : d
                }, r.start = function () {
                    var s, u, t, c = w.length, l = M.length, e = m[0], n = m[1];
                    for (s = 0; s < c; ++s) (t = w[s]).index = s, t.weight = 0;
                    for (s = 0; s < l; ++s) "number" == typeof (t = M[s]).source && (t.source = w[t.source]), "number" == typeof t.target && (t.target = w[t.target]), ++t.source.weight, ++t.target.weight;
                    for (s = 0; s < c; ++s) t = w[s], isNaN(t.x) && (t.x = position("x", e)), isNaN(t.y) && (t.y = position("y", n)), isNaN(t.px) && (t.px = t.x), isNaN(t.py) && (t.py = t.y);
                    if (f = [], "function" == typeof i) for (s = 0; s < l; ++s) f[s] = +i.call(this, M[s], s); else for (s = 0; s < l; ++s) f[s] = i;
                    if (g = [], "function" == typeof a) for (s = 0; s < l; ++s) g[s] = +a.call(this, M[s], s); else for (s = 0; s < l; ++s) g[s] = a;
                    if (p = [], "function" == typeof y) for (s = 0; s < c; ++s) p[s] = +y.call(this, w[s], s); else for (s = 0; s < c; ++s) p[s] = y;

                    function position(t, e) {
                        if (!u) {
                            for (u = new Array(c), a = 0; a < c; ++a) u[a] = [];
                            for (a = 0; a < l; ++a) {
                                var n = M[a];
                                u[n.source.index].push(n.target), u[n.target.index].push(n.source)
                            }
                        }
                        for (var r, i = u[s], a = -1, o = i.length; ++a < o;) if (!isNaN(r = i[a][t])) return r;
                        return Math.random() * e
                    }

                    return r.resume()
                }, r.resume = function () {
                    return r.alpha(.1)
                }, r.stop = function () {
                    return r.alpha(0)
                }, r.drag = function () {
                    if (t || (t = P.behavior.drag().origin(d3_identity).on("dragstart.force", d3_layout_forceDragstart).on("drag.force", dragmove).on("dragend.force", d3_layout_forceDragend)), !arguments.length) return t;
                    this.on("mouseover.force", d3_layout_forceMouseover).on("mouseout.force", d3_layout_forceMouseout).call(t)
                }, P.rebind(r, _, "on")
            };
            var oe = 20, se = 1, ue = 1 / 0;

            function d3_layout_hierarchyRebind(t, e) {
                return P.rebind(t, e, "sort", "children", "value"), (t.nodes = t).links = d3_layout_hierarchyLinks, t
            }

            function d3_layout_hierarchyVisitBefore(t, e) {
                for (var n = [t]; null != (t = n.pop());) if (e(t), (i = t.children) && (r = i.length)) for (var r, i; 0 <= --r;) n.push(i[r])
            }

            function d3_layout_hierarchyVisitAfter(t, e) {
                for (var n = [t], r = []; null != (t = n.pop());) if (r.push(t), (a = t.children) && (i = a.length)) for (var i, a, o = -1; ++o < i;) n.push(a[o]);
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
                return P.merge(t.map(function (e) {
                    return (e.children || []).map(function (t) {
                        return {source: e, target: t}
                    })
                }))
            }

            P.layout.hierarchy = function () {
                var s = d3_layout_hierarchySort, u = d3_layout_hierarchyChildren, c = d3_layout_hierarchyValue;

                function hierarchy(t) {
                    var e, n = [t], r = [];
                    for (t.depth = 0; null != (e = n.pop());) if (r.push(e), (a = u.call(hierarchy, e, e.depth)) && (i = a.length)) {
                        for (var i, a, o; 0 <= --i;) n.push(o = a[i]), o.parent = e, o.depth = e.depth + 1;
                        c && (e.value = 0), e.children = a
                    } else c && (e.value = +c.call(hierarchy, e, e.depth) || 0), delete e.children;
                    return d3_layout_hierarchyVisitAfter(t, function (t) {
                        var e, n;
                        s && (e = t.children) && e.sort(s), c && (n = t.parent) && (n.value += t.value)
                    }), r
                }

                return hierarchy.sort = function (t) {
                    return arguments.length ? (s = t, hierarchy) : s
                }, hierarchy.children = function (t) {
                    return arguments.length ? (u = t, hierarchy) : u
                }, hierarchy.value = function (t) {
                    return arguments.length ? (c = t, hierarchy) : c
                }, hierarchy.revalue = function (t) {
                    return c && (d3_layout_hierarchyVisitBefore(t, function (t) {
                        t.children && (t.value = 0)
                    }), d3_layout_hierarchyVisitAfter(t, function (t) {
                        var e;
                        t.children || (t.value = +c.call(hierarchy, t, t.depth) || 0), (e = t.parent) && (e.value += t.value)
                    })), t
                }, hierarchy
            }, P.layout.partition = function () {
                var r = P.layout.hierarchy(), i = [1, 1];

                function partition(t, e) {
                    var n = r.call(this, t, e);
                    return function position(t, e, n, r) {
                        var i = t.children;
                        if (t.x = e, t.y = t.depth * r, t.dx = n, t.dy = r, i && (a = i.length)) {
                            var a, o, s, u = -1;
                            for (n = t.value ? n / t.value : 0; ++u < a;) position(o = i[u], e, s = o.value * n, r), e += s
                        }
                    }(n[0], 0, i[0], i[1] / function depth(t) {
                        var e = t.children, n = 0;
                        if (e && (r = e.length)) for (var r, i = -1; ++i < r;) n = Math.max(n, depth(e[i]));
                        return 1 + n
                    }(n[0])), n
                }

                return partition.size = function (t) {
                    return arguments.length ? (i = t, partition) : i
                }, d3_layout_hierarchyRebind(partition, r)
            }, P.layout.pie = function () {
                var d = Number, f = ce, g = 0, p = R, _ = 0;

                function pie(n) {
                    var e, t = n.length, r = n.map(function (t, e) {
                            return +d.call(pie, t, e)
                        }), i = +("function" == typeof g ? g.apply(this, arguments) : g),
                        a = ("function" == typeof p ? p.apply(this, arguments) : p) - i,
                        o = Math.min(Math.abs(a) / t, +("function" == typeof _ ? _.apply(this, arguments) : _)),
                        s = o * (a < 0 ? -1 : 1), u = P.sum(r), c = u ? (a - t * s) / u : 0, l = P.range(t), h = [];
                    return null != f && l.sort(f === ce ? function (t, e) {
                        return r[e] - r[t]
                    } : function (t, e) {
                        return f(n[t], n[e])
                    }), l.forEach(function (t) {
                        h[t] = {data: n[t], value: e = r[t], startAngle: i, endAngle: i += e * c + s, padAngle: o}
                    }), h
                }

                return pie.value = function (t) {
                    return arguments.length ? (d = t, pie) : d
                }, pie.sort = function (t) {
                    return arguments.length ? (f = t, pie) : f
                }, pie.startAngle = function (t) {
                    return arguments.length ? (g = t, pie) : g
                }, pie.endAngle = function (t) {
                    return arguments.length ? (p = t, pie) : p
                }, pie.padAngle = function (t) {
                    return arguments.length ? (_ = t, pie) : _
                }, pie
            };
            var ce = {};

            function d3_layout_stackX(t) {
                return t.x
            }

            function d3_layout_stackY(t) {
                return t.y
            }

            function d3_layout_stackOut(t, e, n) {
                t.y0 = e, t.y = n
            }

            P.layout.stack = function () {
                var h = d3_identity, d = d3_layout_stackOrderDefault, f = d3_layout_stackOffsetZero,
                    g = d3_layout_stackOut, p = d3_layout_stackX, _ = d3_layout_stackY;

                function stack(t, e) {
                    if (!(a = t.length)) return t;
                    var n = t.map(function (t, e) {
                        return h.call(stack, t, e)
                    }), r = n.map(function (t) {
                        return t.map(function (t, e) {
                            return [p.call(stack, t, e), _.call(stack, t, e)]
                        })
                    }), i = d.call(stack, r, e);
                    n = P.permute(n, i), r = P.permute(r, i);
                    var a, o, s, u, c = f.call(stack, r, e), l = n[0].length;
                    for (s = 0; s < l; ++s) for (g.call(stack, n[0][s], u = c[s], r[0][s][1]), o = 1; o < a; ++o) g.call(stack, n[o][s], u += r[o - 1][s][1], r[o][s][1]);
                    return t
                }

                return stack.values = function (t) {
                    return arguments.length ? (h = t, stack) : h
                }, stack.order = function (t) {
                    return arguments.length ? (d = "function" == typeof t ? t : le.get(t) || d3_layout_stackOrderDefault, stack) : d
                }, stack.offset = function (t) {
                    return arguments.length ? (f = "function" == typeof t ? t : he.get(t) || d3_layout_stackOffsetZero, stack) : f
                }, stack.x = function (t) {
                    return arguments.length ? (p = t, stack) : p
                }, stack.y = function (t) {
                    return arguments.length ? (_ = t, stack) : _
                }, stack.out = function (t) {
                    return arguments.length ? (g = t, stack) : g
                }, stack
            };
            var le = P.map({
                "inside-out": function (t) {
                    var e, n, r = t.length, i = t.map(d3_layout_stackMaxIndex), a = t.map(d3_layout_stackReduceSum),
                        o = P.range(r).sort(function (t, e) {
                            return i[t] - i[e]
                        }), s = 0, u = 0, c = [], l = [];
                    for (e = 0; e < r; ++e) n = o[e], s < u ? (s += a[n], c.push(n)) : (u += a[n], l.push(n));
                    return l.reverse().concat(c)
                }, reverse: function (t) {
                    return P.range(t.length).reverse()
                }, default: d3_layout_stackOrderDefault
            }), he = P.map({
                silhouette: function (t) {
                    var e, n, r, i = t.length, a = t[0].length, o = [], s = 0, u = [];
                    for (n = 0; n < a; ++n) {
                        for (r = e = 0; e < i; e++) r += t[e][n][1];
                        s < r && (s = r), o.push(r)
                    }
                    for (n = 0; n < a; ++n) u[n] = (s - o[n]) / 2;
                    return u
                }, wiggle: function (t) {
                    var e, n, r, i, a, o, s, u, c, l = t.length, h = t[0], d = h.length, f = [];
                    for (f[0] = u = c = 0, n = 1; n < d; ++n) {
                        for (i = e = 0; e < l; ++e) i += t[e][n][1];
                        for (a = e = 0, s = h[n][0] - h[n - 1][0]; e < l; ++e) {
                            for (r = 0, o = (t[e][n][1] - t[e][n - 1][1]) / (2 * s); r < e; ++r) o += (t[r][n][1] - t[r][n - 1][1]) / s;
                            a += o * t[e][n][1]
                        }
                        f[n] = u -= i ? a / i * s : 0, u < c && (c = u)
                    }
                    for (n = 0; n < d; ++n) f[n] -= c;
                    return f
                }, expand: function (t) {
                    var e, n, r, i = t.length, a = t[0].length, o = 1 / i, s = [];
                    for (n = 0; n < a; ++n) {
                        for (r = e = 0; e < i; e++) r += t[e][n][1];
                        if (r) for (e = 0; e < i; e++) t[e][n][1] /= r; else for (e = 0; e < i; e++) t[e][n][1] = o
                    }
                    for (n = 0; n < a; ++n) s[n] = 0;
                    return s
                }, zero: d3_layout_stackOffsetZero
            });

            function d3_layout_stackOrderDefault(t) {
                return P.range(t.length)
            }

            function d3_layout_stackOffsetZero(t) {
                for (var e = -1, n = t[0].length, r = []; ++e < n;) r[e] = 0;
                return r
            }

            function d3_layout_stackMaxIndex(t) {
                for (var e, n = 1, r = 0, i = t[0][1], a = t.length; n < a; ++n) (e = t[n][1]) > i && (r = n, i = e);
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
                for (var n = -1, r = +t[0], i = (t[1] - r) / e, a = []; ++n <= e;) a[n] = i * n + r;
                return a
            }

            function d3_layout_histogramRange(t) {
                return [P.min(t), P.max(t)]
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
                var n = e.x - t.x, r = e.y - t.y, i = t.r + e.r;
                return n * n + r * r < .999 * i * i
            }

            function d3_layout_packSiblings(t) {
                if ((e = t.children) && (u = e.length)) {
                    var e, n, r, i, a, o, s, u, c = 1 / 0, l = -1 / 0, h = 1 / 0, d = -1 / 0;
                    if (e.forEach(d3_layout_packLink), (n = e[0]).x = -n.r, n.y = 0, bound(n), 1 < u && ((r = e[1]).x = r.r, r.y = 0, bound(r), 2 < u)) for (d3_layout_packPlace(n, r, i = e[2]), bound(i), d3_layout_packInsert(n, i), d3_layout_packInsert(n._pack_prev = i, r), r = n._pack_next, a = 3; a < u; a++) {
                        d3_layout_packPlace(n, r, i = e[a]);
                        var f = 0, g = 1, p = 1;
                        for (o = r._pack_next; o !== r; o = o._pack_next, g++) if (d3_layout_packIntersects(o, i)) {
                            f = 1;
                            break
                        }
                        if (1 == f) for (s = n._pack_prev; s !== o._pack_prev && !d3_layout_packIntersects(s, i); s = s._pack_prev, p++) ;
                        f ? (g < p || g == p && r.r < n.r ? d3_layout_packSplice(n, r = o) : d3_layout_packSplice(n = s, r), a--) : (d3_layout_packInsert(n, i), bound(r = i))
                    }
                    var _ = (c + l) / 2, m = (h + d) / 2, v = 0;
                    for (a = 0; a < u; a++) (i = e[a]).x -= _, i.y -= m, v = Math.max(v, i.r + Math.sqrt(i.x * i.x + i.y * i.y));
                    t.r = v, e.forEach(d3_layout_packUnlink)
                }

                function bound(t) {
                    c = Math.min(t.x - t.r, c), l = Math.max(t.x + t.r, l), h = Math.min(t.y - t.r, h), d = Math.max(t.y + t.r, d)
                }
            }

            function d3_layout_packLink(t) {
                t._pack_next = t._pack_prev = t
            }

            function d3_layout_packUnlink(t) {
                delete t._pack_next, delete t._pack_prev
            }

            function d3_layout_packPlace(t, e, n) {
                var r = t.r + n.r, i = e.x - t.x, a = e.y - t.y;
                if (r && (i || a)) {
                    var o = e.r + n.r, s = i * i + a * a, u = .5 + ((r *= r) - (o *= o)) / (2 * s),
                        c = Math.sqrt(Math.max(0, 2 * o * (r + s) - (r -= s) * r - o * o)) / (2 * s);
                    n.x = t.x + u * i + c * a, n.y = t.y + u * a - c * i
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
                var n = t.x + e[3], r = t.y + e[0], i = t.dx - e[1] - e[3], a = t.dy - e[0] - e[2];
                return i < 0 && (n += i / 2, i = 0), a < 0 && (r += a / 2, a = 0), {x: n, y: r, dx: i, dy: a}
            }

            function d3_scaleExtent(t) {
                var e = t[0], n = t[t.length - 1];
                return e < n ? [e, n] : [n, e]
            }

            function d3_scaleRange(t) {
                return t.rangeExtent ? t.rangeExtent() : d3_scaleExtent(t.range())
            }

            function d3_scale_bilinear(t, e, n, r) {
                var i = n(t[0], t[1]), a = r(e[0], e[1]);
                return function (t) {
                    return a(i(t))
                }
            }

            function d3_scale_nice(t, e) {
                var n, r = 0, i = t.length - 1, a = t[r], o = t[i];
                return o < a && (n = r, r = i, i = n, n = a, a = o, o = n), t[r] = e.floor(a), t[i] = e.ceil(o), t
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

            P.layout.histogram = function () {
                var h = !0, d = Number, f = d3_layout_histogramRange, g = d3_layout_histogramBinSturges;

                function histogram(t, e) {
                    for (var n, r, i = [], a = t.map(d, this), o = f.call(this, a, e), s = g.call(this, o, a, e), u = (e = -1, a.length), c = s.length - 1, l = h ? 1 : 1 / u; ++e < c;) (n = i[e] = []).dx = s[e + 1] - (n.x = s[e]), n.y = 0;
                    if (0 < c) for (e = -1; ++e < u;) (r = a[e]) >= o[0] && r <= o[1] && ((n = i[P.bisect(s, r, 1, c) - 1]).y += l, n.push(t[e]));
                    return i
                }

                return histogram.value = function (t) {
                    return arguments.length ? (d = t, histogram) : d
                }, histogram.range = function (t) {
                    return arguments.length ? (f = d3_functor(t), histogram) : f
                }, histogram.bins = function (e) {
                    return arguments.length ? (g = "number" == typeof e ? function (t) {
                        return d3_layout_histogramBinFixed(t, e)
                    } : d3_functor(e), histogram) : g
                }, histogram.frequency = function (t) {
                    return arguments.length ? (h = !!t, histogram) : h
                }, histogram
            }, P.layout.pack = function () {
                var u, c = P.layout.hierarchy().sort(d3_layout_packSort), l = 0, h = [1, 1];

                function pack(t, e) {
                    var n = c.call(this, t, e), r = n[0], i = h[0], a = h[1],
                        o = null == u ? Math.sqrt : "function" == typeof u ? u : function () {
                            return u
                        };
                    if (r.x = r.y = 0, d3_layout_hierarchyVisitAfter(r, function (t) {
                        t.r = +o(t.value)
                    }), d3_layout_hierarchyVisitAfter(r, d3_layout_packSiblings), l) {
                        var s = l * (u ? 1 : Math.max(2 * r.r / i, 2 * r.r / a)) / 2;
                        d3_layout_hierarchyVisitAfter(r, function (t) {
                            t.r += s
                        }), d3_layout_hierarchyVisitAfter(r, d3_layout_packSiblings), d3_layout_hierarchyVisitAfter(r, function (t) {
                            t.r -= s
                        })
                    }
                    return function d3_layout_packTransform(t, e, n, r) {
                        var i = t.children;
                        t.x = e += r * t.x;
                        t.y = n += r * t.y;
                        t.r *= r;
                        if (i) for (var a = -1, o = i.length; ++a < o;) d3_layout_packTransform(i[a], e, n, r)
                    }(r, i / 2, a / 2, u ? 1 : 1 / Math.max(2 * r.r / i, 2 * r.r / a)), n
                }

                return pack.size = function (t) {
                    return arguments.length ? (h = t, pack) : h
                }, pack.radius = function (t) {
                    return arguments.length ? (u = null == t || "function" == typeof t ? t : +t, pack) : u
                }, pack.padding = function (t) {
                    return arguments.length ? (l = +t, pack) : l
                }, d3_layout_hierarchyRebind(pack, c)
            }, P.layout.tree = function () {
                var h = P.layout.hierarchy().sort(null).value(null), p = d3_layout_treeSeparation, d = [1, 1], f = null;

                function tree(t, e) {
                    var n = h.call(this, t, e), r = n[0], i = function (t) {
                        var e, n = {A: null, children: [t]}, r = [n];
                        for (; null != (e = r.pop());) for (var i, a = e.children, o = 0, s = a.length; o < s; ++o) r.push((a[o] = i = {
                            _: a[o],
                            parent: e,
                            children: (i = a[o].children) && i.slice() || [],
                            A: null,
                            a: null,
                            z: 0,
                            m: 0,
                            c: 0,
                            s: 0,
                            t: null,
                            i: o
                        }).a = i);
                        return n.children[0]
                    }(r);
                    if (d3_layout_hierarchyVisitAfter(i, firstWalk), i.parent.m = -i.z, d3_layout_hierarchyVisitBefore(i, secondWalk), f) d3_layout_hierarchyVisitBefore(r, sizeNode); else {
                        var a = r, o = r, s = r;
                        d3_layout_hierarchyVisitBefore(r, function (t) {
                            t.x < a.x && (a = t), t.x > o.x && (o = t), t.depth > s.depth && (s = t)
                        });
                        var u = p(a, o) / 2 - a.x, c = d[0] / (o.x + p(o, a) / 2 + u), l = d[1] / (s.depth || 1);
                        d3_layout_hierarchyVisitBefore(r, function (t) {
                            t.x = (t.x + u) * c, t.y = t.depth * l
                        })
                    }
                    return n
                }

                function firstWalk(t) {
                    var e = t.children, n = t.parent.children, r = t.i ? n[t.i - 1] : null;
                    if (e.length) {
                        !function (t) {
                            var e, n = 0, r = 0, i = t.children, a = i.length;
                            for (; 0 <= --a;) (e = i[a]).z += n, e.m += n, n += e.s + (r += e.c)
                        }(t);
                        var i = (e[0].z + e[e.length - 1].z) / 2;
                        r ? (t.z = r.z + p(t._, r._), t.m = t.z - i) : t.z = i
                    } else r && (t.z = r.z + p(t._, r._));
                    t.parent.A = function (t, e, n) {
                        if (e) {
                            for (var r, i = t, a = t, o = e, s = i.parent.children[0], u = i.m, c = a.m, l = o.m, h = s.m; o = d3_layout_treeRight(o), i = d3_layout_treeLeft(i), o && i;) s = d3_layout_treeLeft(s), (a = d3_layout_treeRight(a)).a = t, 0 < (r = o.z + l - i.z - u + p(o._, i._)) && (d3_layout_treeMove((f = t, g = n, (d = o).a.parent === f.parent ? d.a : g), t, r), u += r, c += r), l += o.m, u += i.m, h += s.m, c += a.m;
                            o && !d3_layout_treeRight(a) && (a.t = o, a.m += l - c), i && !d3_layout_treeLeft(s) && (s.t = i, s.m += u - h, n = t)
                        }
                        var d, f, g;
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
                    return arguments.length ? (p = t, tree) : p
                }, tree.size = function (t) {
                    return arguments.length ? (f = null == (d = t) ? sizeNode : null, tree) : f ? null : d
                }, tree.nodeSize = function (t) {
                    return arguments.length ? (f = null == (d = t) ? null : sizeNode, tree) : f ? d : null
                }, d3_layout_hierarchyRebind(tree, h)
            }, P.layout.cluster = function () {
                var l = P.layout.hierarchy().sort(null).value(null), h = d3_layout_treeSeparation, d = [1, 1], f = !1;

                function cluster(t, e) {
                    var i, n = l.call(this, t, e), r = n[0], a = 0;
                    d3_layout_hierarchyVisitAfter(r, function (t) {
                        var e, n, r = t.children;
                        r && r.length ? (t.x = (n = r).reduce(function (t, e) {
                            return t + e.x
                        }, 0) / n.length, t.y = (e = r, 1 + P.max(e, function (t) {
                            return t.y
                        }))) : (t.x = i ? a += h(t, i) : 0, t.y = 0, i = t)
                    });
                    var o = function d3_layout_clusterLeft(t) {
                        var e = t.children;
                        return e && e.length ? d3_layout_clusterLeft(e[0]) : t
                    }(r), s = function d3_layout_clusterRight(t) {
                        var e, n = t.children;
                        return n && (e = n.length) ? d3_layout_clusterRight(n[e - 1]) : t
                    }(r), u = o.x - h(o, s) / 2, c = s.x + h(s, o) / 2;
                    return d3_layout_hierarchyVisitAfter(r, f ? function (t) {
                        t.x = (t.x - r.x) * d[0], t.y = (r.y - t.y) * d[1]
                    } : function (t) {
                        t.x = (t.x - u) / (c - u) * d[0], t.y = (1 - (r.y ? t.y / r.y : 1)) * d[1]
                    }), n
                }

                return cluster.separation = function (t) {
                    return arguments.length ? (h = t, cluster) : h
                }, cluster.size = function (t) {
                    return arguments.length ? (f = null == (d = t), cluster) : f ? null : d
                }, cluster.nodeSize = function (t) {
                    return arguments.length ? (f = null != (d = t), cluster) : f ? d : null
                }, d3_layout_hierarchyRebind(cluster, l)
            }, P.layout.treemap = function () {
                var r, i = P.layout.hierarchy(), l = Math.round, a = [1, 1], e = null, h = d3_layout_treemapPadNull,
                    o = !1, d = "squarify", u = .5 * (1 + Math.sqrt(5));

                function scale(t, e) {
                    for (var n, r, i = -1, a = t.length; ++i < a;) r = (n = t[i]).value * (e < 0 ? 0 : e), n.area = isNaN(r) || r <= 0 ? 0 : r
                }

                function squarify(t) {
                    var e = t.children;
                    if (e && e.length) {
                        var n, r, i, a = h(t), o = [], s = e.slice(), u = 1 / 0,
                            c = "slice" === d ? a.dx : "dice" === d ? a.dy : "slice-dice" === d ? 1 & t.depth ? a.dy : a.dx : Math.min(a.dx, a.dy);
                        for (scale(s, a.dx * a.dy / t.value), o.area = 0; 0 < (i = s.length);) o.push(n = s[i - 1]), o.area += n.area, u = "squarify" !== d || (r = worst(o, c)) <= u ? (s.pop(), r) : (o.area -= o.pop().area, position(o, c, a, !1), c = Math.min(a.dx, a.dy), o.length = o.area = 0, 1 / 0);
                        o.length && (position(o, c, a, !0), o.length = o.area = 0), e.forEach(squarify)
                    }
                }

                function stickify(t) {
                    var e = t.children;
                    if (e && e.length) {
                        var n, r = h(t), i = e.slice(), a = [];
                        for (scale(i, r.dx * r.dy / t.value), a.area = 0; n = i.pop();) a.push(n), a.area += n.area, null != n.z && (position(a, n.z ? r.dx : r.dy, r, !i.length), a.length = a.area = 0);
                        e.forEach(stickify)
                    }
                }

                function worst(t, e) {
                    for (var n, r = t.area, i = 0, a = 1 / 0, o = -1, s = t.length; ++o < s;) (n = t[o].area) && (n < a && (a = n), i < n && (i = n));
                    return e *= e, (r *= r) ? Math.max(e * i * u / r, r / (e * a * u)) : 1 / 0
                }

                function position(t, e, n, r) {
                    var i, a = -1, o = t.length, s = n.x, u = n.y, c = e ? l(t.area / e) : 0;
                    if (e == n.dx) {
                        for ((r || c > n.dy) && (c = n.dy); ++a < o;) (i = t[a]).x = s, i.y = u, i.dy = c, s += i.dx = Math.min(n.x + n.dx - s, c ? l(i.area / c) : 0);
                        i.z = !0, i.dx += n.x + n.dx - s, n.y += c, n.dy -= c
                    } else {
                        for ((r || c > n.dx) && (c = n.dx); ++a < o;) (i = t[a]).x = s, i.y = u, i.dx = c, u += i.dy = Math.min(n.y + n.dy - u, c ? l(i.area / c) : 0);
                        i.z = !1, i.dy += n.y + n.dy - u, n.x += c, n.dx -= c
                    }
                }

                function treemap(t) {
                    var e = r || i(t), n = e[0];
                    return n.x = n.y = 0, n.value ? (n.dx = a[0], n.dy = a[1]) : n.dx = n.dy = 0, r && i.revalue(n), scale([n], n.dx * n.dy / n.value), (r ? stickify : squarify)(n), o && (r = e), e
                }

                return treemap.size = function (t) {
                    return arguments.length ? (a = t, treemap) : a
                }, treemap.padding = function (n) {
                    if (!arguments.length) return e;

                    function padConstant(t) {
                        return d3_layout_treemapPad(t, n)
                    }

                    var t;
                    return h = null == (e = n) ? d3_layout_treemapPadNull : "function" == (t = typeof n) ? function (t) {
                        var e = n.call(treemap, t, t.depth);
                        return null == e ? d3_layout_treemapPadNull(t) : d3_layout_treemapPad(t, "number" == typeof e ? [e, e, e, e] : e)
                    } : ("number" === t && (n = [n, n, n, n]), padConstant), treemap
                }, treemap.round = function (t) {
                    return arguments.length ? (l = t ? Math.round : Number, treemap) : l != Number
                }, treemap.sticky = function (t) {
                    return arguments.length ? (o = t, r = null, treemap) : o
                }, treemap.ratio = function (t) {
                    return arguments.length ? (u = t, treemap) : u
                }, treemap.mode = function (t) {
                    return arguments.length ? (d = t + "", treemap) : d
                }, d3_layout_hierarchyRebind(treemap, i)
            }, P.random = {
                normal: function (r, i) {
                    var t = arguments.length;
                    return t < 2 && (i = 1), t < 1 && (r = 0), function () {
                        for (var t, e, n; !(n = (t = 2 * Math.random() - 1) * t + (e = 2 * Math.random() - 1) * e) || 1 < n;) ;
                        return r + i * t * Math.sqrt(-2 * Math.log(n) / n)
                    }
                }, logNormal: function () {
                    var t = P.random.normal.apply(P, arguments);
                    return function () {
                        return Math.exp(t())
                    }
                }, bates: function (t) {
                    var e = P.random.irwinHall(t);
                    return function () {
                        return e() / t
                    }
                }, irwinHall: function (n) {
                    return function () {
                        for (var t = 0, e = 0; e < n; e++) t += Math.random();
                        return t
                    }
                }
            }, P.scale = {};
            var de = {floor: d3_identity, ceil: d3_identity};

            function d3_scale_polylinear(n, t, e, r) {
                var i = [], a = [], o = 0, s = Math.min(n.length, t.length) - 1;
                for (n[s] < n[0] && (n = n.slice().reverse(), t = t.slice().reverse()); ++o <= s;) i.push(e(n[o - 1], n[o])), a.push(r(t[o - 1], t[o]));
                return function (t) {
                    var e = P.bisect(n, t, 1, s) - 1;
                    return a[e](i[e](t))
                }
            }

            function d3_scale_linearRebind(t, e) {
                return P.rebind(t, e, "range", "rangeRound", "interpolate", "clamp")
            }

            function d3_scale_linearNice(t, e) {
                return d3_scale_nice(t, d3_scale_niceStep(d3_scale_linearTickRange(t, e)[2])), d3_scale_nice(t, d3_scale_niceStep(d3_scale_linearTickRange(t, e)[2])), t
            }

            function d3_scale_linearTickRange(t, e) {
                null == e && (e = 10);
                var n = d3_scaleExtent(t), r = n[1] - n[0], i = Math.pow(10, Math.floor(Math.log(r / e) / Math.LN10)),
                    a = e / r * i;
                return a <= .15 ? i *= 10 : a <= .35 ? i *= 5 : a <= .75 && (i *= 2), n[0] = Math.ceil(n[0] / i) * i, n[1] = Math.floor(n[1] / i) * i + .5 * i, n[2] = i, n
            }

            function d3_scale_linearTicks(t, e) {
                return P.range.apply(P, d3_scale_linearTickRange(t, e))
            }

            function d3_scale_linearTickFormat(t, e, n) {
                var r, i, a, o = d3_scale_linearTickRange(t, e);
                if (n) {
                    var s = tt.exec(n);
                    if (s.shift(), "s" === s[8]) {
                        var u = P.formatPrefix(Math.max(L(o[0]), L(o[1])));
                        return s[7] || (s[7] = "." + d3_scale_linearPrecision(u.scale(o[2]))), s[8] = "f", n = P.format(s.join("")), function (t) {
                            return n(u.scale(t)) + u.symbol
                        }
                    }
                    s[7] || (s[7] = "." + (r = s[8], a = d3_scale_linearPrecision((i = o)[2]), r in fe ? Math.abs(a - d3_scale_linearPrecision(Math.max(L(i[0]), L(i[1])))) + +("e" !== r) : a - 2 * ("%" === r))), n = s.join("")
                } else n = ",." + d3_scale_linearPrecision(o[2]) + "f";
                return P.format(n)
            }

            P.scale.linear = function () {
                return function d3_scale_linear(n, r, i, a) {
                    var o, s;

                    function rescale() {
                        var t = 2 < Math.min(n.length, r.length) ? d3_scale_polylinear : d3_scale_bilinear,
                            e = a ? d3_uninterpolateClamp : d3_uninterpolateNumber;
                        return o = t(n, r, e, i), s = t(r, n, e, d3_interpolate), scale
                    }

                    function scale(t) {
                        return o(t)
                    }

                    scale.invert = function (t) {
                        return s(t)
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
                        return arguments.length ? (i = t, rescale()) : i
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
                        return d3_scale_linear(n, r, i, a)
                    };
                    return rescale()
                }([0, 1], [0, 1], d3_interpolate, !1)
            };
            var fe = {s: 1, g: 1, p: 1, r: 1, e: 1};

            function d3_scale_linearPrecision(t) {
                return -Math.floor(Math.log(t) / Math.LN10 + .01)
            }

            P.scale.log = function () {
                return function d3_scale_log(e, u, c, l) {
                    function log(t) {
                        return (c ? Math.log(t < 0 ? 0 : t) : -Math.log(0 < t ? 0 : -t)) / Math.log(u)
                    }

                    function pow(t) {
                        return c ? Math.pow(u, t) : -Math.pow(u, -t)
                    }

                    function scale(t) {
                        return e(log(t))
                    }

                    scale.invert = function (t) {
                        return pow(e.invert(t))
                    };
                    scale.domain = function (t) {
                        return arguments.length ? (c = 0 <= t[0], e.domain((l = t.map(Number)).map(log)), scale) : l
                    };
                    scale.base = function (t) {
                        return arguments.length ? (u = +t, e.domain(l.map(log)), scale) : u
                    };
                    scale.nice = function () {
                        var t = d3_scale_nice(l.map(log), c ? Math : pe);
                        return e.domain(t), l = t.map(pow), scale
                    };
                    scale.ticks = function () {
                        var t = d3_scaleExtent(l), e = [], n = t[0], r = t[1], i = Math.floor(log(n)),
                            a = Math.ceil(log(r)), o = u % 1 ? 2 : u;
                        if (isFinite(a - i)) {
                            if (c) {
                                for (; i < a; i++) for (var s = 1; s < o; s++) e.push(pow(i) * s);
                                e.push(pow(i))
                            } else for (e.push(pow(i)); i++ < a;) for (var s = o - 1; 0 < s; s--) e.push(pow(i) * s);
                            for (i = 0; e[i] < n; i++) ;
                            for (a = e.length; e[a - 1] > r; a--) ;
                            e = e.slice(i, a)
                        }
                        return e
                    };
                    scale.tickFormat = function (t, n) {
                        if (!arguments.length) return ge;
                        arguments.length < 2 ? n = ge : "function" != typeof n && (n = P.format(n));
                        var r = Math.max(1, u * t / scale.ticks().length);
                        return function (t) {
                            var e = t / pow(Math.round(log(t)));
                            return e * u < u - .5 && (e *= u), e <= r ? n(t) : ""
                        }
                    };
                    scale.copy = function () {
                        return d3_scale_log(e.copy(), u, c, l)
                    };
                    return d3_scale_linearRebind(scale, e)
                }(P.scale.linear().domain([0, 1]), 10, !0, [1, 10])
            };
            var ge = P.format(".0e"), pe = {
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

            P.scale.pow = function () {
                return function d3_scale_pow(e, n, r) {
                    var i = d3_scale_powPow(n), a = d3_scale_powPow(1 / n);

                    function scale(t) {
                        return e(i(t))
                    }

                    scale.invert = function (t) {
                        return a(e.invert(t))
                    };
                    scale.domain = function (t) {
                        return arguments.length ? (e.domain((r = t.map(Number)).map(i)), scale) : r
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
                        return arguments.length ? (i = d3_scale_powPow(n = t), a = d3_scale_powPow(1 / n), e.domain(r.map(i)), scale) : n
                    };
                    scale.copy = function () {
                        return d3_scale_pow(e.copy(), n, r)
                    };
                    return d3_scale_linearRebind(scale, e)
                }(P.scale.linear(), 1, [0, 1])
            }, P.scale.sqrt = function () {
                return P.scale.pow().exponent(.5)
            }, P.scale.ordinal = function () {
                return function d3_scale_ordinal(s, u) {
                    var i, c, l;

                    function scale(t) {
                        return c[((i.get(t) || ("range" === u.t ? i.set(t, s.push(t)) : NaN)) - 1) % c.length]
                    }

                    function steps(e, n) {
                        return P.range(s.length).map(function (t) {
                            return e + n * t
                        })
                    }

                    scale.domain = function (t) {
                        if (!arguments.length) return s;
                        s = [], i = new d3_Map;
                        for (var e, n = -1, r = t.length; ++n < r;) i.has(e = t[n]) || i.set(e, s.push(e));
                        return scale[u.t].apply(scale, u.a)
                    };
                    scale.range = function (t) {
                        return arguments.length ? (c = t, l = 0, u = {t: "range", a: arguments}, scale) : c
                    };
                    scale.rangePoints = function (t, e) {
                        arguments.length < 2 && (e = 0);
                        var n = t[0], r = t[1], i = s.length < 2 ? (n = (n + r) / 2, 0) : (r - n) / (s.length - 1 + e);
                        return c = steps(n + i * e / 2, i), l = 0, u = {t: "rangePoints", a: arguments}, scale
                    };
                    scale.rangeRoundPoints = function (t, e) {
                        arguments.length < 2 && (e = 0);
                        var n = t[0], r = t[1],
                            i = s.length < 2 ? (n = r = Math.round((n + r) / 2), 0) : (r - n) / (s.length - 1 + e) | 0;
                        return c = steps(n + Math.round(i * e / 2 + (r - n - (s.length - 1 + e) * i) / 2), i), l = 0, u = {
                            t: "rangeRoundPoints",
                            a: arguments
                        }, scale
                    };
                    scale.rangeBands = function (t, e, n) {
                        arguments.length < 2 && (e = 0), arguments.length < 3 && (n = e);
                        var r = t[1] < t[0], i = t[r - 0], a = t[1 - r], o = (a - i) / (s.length - e + 2 * n);
                        return c = steps(i + o * n, o), r && c.reverse(), l = o * (1 - e), u = {
                            t: "rangeBands",
                            a: arguments
                        }, scale
                    };
                    scale.rangeRoundBands = function (t, e, n) {
                        arguments.length < 2 && (e = 0), arguments.length < 3 && (n = e);
                        var r = t[1] < t[0], i = t[r - 0], a = t[1 - r],
                            o = Math.floor((a - i) / (s.length - e + 2 * n));
                        return c = steps(i + Math.round((a - i - (s.length - e) * o) / 2), o), r && c.reverse(), l = Math.round(o * (1 - e)), u = {
                            t: "rangeRoundBands",
                            a: arguments
                        }, scale
                    };
                    scale.rangeBand = function () {
                        return l
                    };
                    scale.rangeExtent = function () {
                        return d3_scaleExtent(u.a[0])
                    };
                    scale.copy = function () {
                        return d3_scale_ordinal(s, u)
                    };
                    return scale.domain(s)
                }([], {t: "range", a: [[]]})
            }, P.scale.category10 = function () {
                return P.scale.ordinal().range(_e)
            }, P.scale.category20 = function () {
                return P.scale.ordinal().range(me)
            }, P.scale.category20b = function () {
                return P.scale.ordinal().range(ve)
            }, P.scale.category20c = function () {
                return P.scale.ordinal().range(ye)
            };
            var _e = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(d3_rgbString),
                me = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(d3_rgbString),
                ve = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(d3_rgbString),
                ye = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(d3_rgbString);

            function d3_zero() {
                return 0
            }

            P.scale.quantile = function () {
                return function d3_scale_quantile(n, r) {
                    var i;

                    function rescale() {
                        var t = 0, e = r.length;
                        for (i = []; ++t < e;) i[t - 1] = P.quantile(n, t / e);
                        return scale
                    }

                    function scale(t) {
                        if (!isNaN(t = +t)) return r[P.bisect(i, t)]
                    }

                    scale.domain = function (t) {
                        return arguments.length ? (n = t.map(d3_number).filter(d3_numeric).sort(d3_ascending), rescale()) : n
                    };
                    scale.range = function (t) {
                        return arguments.length ? (r = t, rescale()) : r
                    };
                    scale.quantiles = function () {
                        return i
                    };
                    scale.invertExtent = function (t) {
                        return (t = r.indexOf(t)) < 0 ? [NaN, NaN] : [0 < t ? i[t - 1] : n[0], t < i.length ? i[t] : n[n.length - 1]]
                    };
                    scale.copy = function () {
                        return d3_scale_quantile(n, r)
                    };
                    return rescale()
                }([], [])
            }, P.scale.quantize = function () {
                return function d3_scale_quantize(e, n, r) {
                    var i, a;

                    function scale(t) {
                        return r[Math.max(0, Math.min(a, Math.floor(i * (t - e))))]
                    }

                    function rescale() {
                        return i = r.length / (n - e), a = r.length - 1, scale
                    }

                    scale.domain = function (t) {
                        return arguments.length ? (e = +t[0], n = +t[t.length - 1], rescale()) : [e, n]
                    };
                    scale.range = function (t) {
                        return arguments.length ? (r = t, rescale()) : r
                    };
                    scale.invertExtent = function (t) {
                        return [t = (t = r.indexOf(t)) < 0 ? NaN : t / i + e, t + 1 / i]
                    };
                    scale.copy = function () {
                        return d3_scale_quantize(e, n, r)
                    };
                    return rescale()
                }(0, 1, [0, 1])
            }, P.scale.threshold = function () {
                return function d3_scale_threshold(e, n) {
                    function scale(t) {
                        if (t <= t) return n[P.bisect(e, t)]
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
            }, P.scale.identity = function () {
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
            }, P.svg = {}, P.svg.arc = function () {
                var j = d3_svg_arcInnerRadius, I = d3_svg_arcOuterRadius, H = d3_zero, B = xe, U = d3_svg_arcStartAngle,
                    O = d3_svg_arcEndAngle, G = d3_svg_arcPadAngle;

                function arc() {
                    var t = Math.max(0, +j.apply(this, arguments)), e = Math.max(0, +I.apply(this, arguments)),
                        n = U.apply(this, arguments) - W, r = O.apply(this, arguments) - W, i = Math.abs(r - n),
                        a = r < n ? 0 : 1;
                    if (e < t && (o = e, e = t, t = o), X <= i) return circleSegment(e, a) + (t ? circleSegment(t, 1 - a) : "") + "Z";
                    var o, s, u, c, l, h, d, f, g, p, _, m, v = 0, y = 0, x = [];
                    if ((c = (+G.apply(this, arguments) || 0) / 2) && (u = B === xe ? Math.sqrt(t * t + e * e) : +B.apply(this, arguments), a || (y *= -1), e && (y = d3_asin(u / e * Math.sin(c))), t && (v = d3_asin(u / t * Math.sin(c)))), e) {
                        l = e * Math.cos(n + y), h = e * Math.sin(n + y), d = e * Math.cos(r - y), f = e * Math.sin(r - y);
                        var b = Math.abs(r - n - 2 * y) <= V ? 0 : 1;
                        if (y && d3_svg_arcSweep(l, h, d, f) === a ^ b) {
                            var w = (n + r) / 2;
                            l = e * Math.cos(w), h = e * Math.sin(w), d = f = null
                        }
                    } else l = h = 0;
                    if (t) {
                        g = t * Math.cos(r - v), p = t * Math.sin(r - v), _ = t * Math.cos(n + v), m = t * Math.sin(n + v);
                        var M = Math.abs(n - r + 2 * v) <= V ? 0 : 1;
                        if (v && d3_svg_arcSweep(g, p, _, m) === 1 - a ^ M) {
                            var k = (n + r) / 2;
                            g = t * Math.cos(k), p = t * Math.sin(k), _ = m = null
                        }
                    } else g = p = 0;
                    if (Y < i && .001 < (o = Math.min(Math.abs(e - t) / 2, +H.apply(this, arguments)))) {
                        s = t < e ^ a ? 0 : 1;
                        var S = o, E = o;
                        if (i < V) {
                            var C = null == _ ? [g, p] : null == d ? [l, h] : d3_geom_polygonIntersect([l, h], [_, m], [d, f], [g, p]),
                                N = l - C[0], R = h - C[1], T = d - C[0], A = f - C[1],
                                L = 1 / Math.sin(Math.acos((N * T + R * A) / (Math.sqrt(N * N + R * R) * Math.sqrt(T * T + A * A))) / 2),
                                z = Math.sqrt(C[0] * C[0] + C[1] * C[1]);
                            E = Math.min(o, (t - z) / (L - 1)), S = Math.min(o, (e - z) / (L + 1))
                        }
                        if (null != d) {
                            var P = d3_svg_arcCornerTangents(null == _ ? [g, p] : [_, m], [l, h], e, S, a),
                                D = d3_svg_arcCornerTangents([d, f], [g, p], e, S, a);
                            o === S ? x.push("M", P[0], "A", S, ",", S, " 0 0,", s, " ", P[1], "A", e, ",", e, " 0 ", 1 - a ^ d3_svg_arcSweep(P[1][0], P[1][1], D[1][0], D[1][1]), ",", a, " ", D[1], "A", S, ",", S, " 0 0,", s, " ", D[0]) : x.push("M", P[0], "A", S, ",", S, " 0 1,", s, " ", D[0])
                        } else x.push("M", l, ",", h);
                        if (null != _) {
                            var F = d3_svg_arcCornerTangents([l, h], [_, m], t, -E, a),
                                q = d3_svg_arcCornerTangents([g, p], null == d ? [l, h] : [d, f], t, -E, a);
                            o === E ? x.push("L", q[0], "A", E, ",", E, " 0 0,", s, " ", q[1], "A", t, ",", t, " 0 ", a ^ d3_svg_arcSweep(q[1][0], q[1][1], F[1][0], F[1][1]), ",", 1 - a, " ", F[1], "A", E, ",", E, " 0 0,", s, " ", F[0]) : x.push("L", q[0], "A", E, ",", E, " 0 0,", s, " ", F[0])
                        } else x.push("L", g, ",", p)
                    } else x.push("M", l, ",", h), null != d && x.push("A", e, ",", e, " 0 ", b, ",", a, " ", d, ",", f), x.push("L", g, ",", p), null != _ && x.push("A", t, ",", t, " 0 ", M, ",", 1 - a, " ", _, ",", m);
                    return x.push("Z"), x.join("")
                }

                function circleSegment(t, e) {
                    return "M0," + t + "A" + t + "," + t + " 0 1," + e + " 0," + -t + "A" + t + "," + t + " 0 1," + e + " 0," + t
                }

                return arc.innerRadius = function (t) {
                    return arguments.length ? (j = d3_functor(t), arc) : j
                }, arc.outerRadius = function (t) {
                    return arguments.length ? (I = d3_functor(t), arc) : I
                }, arc.cornerRadius = function (t) {
                    return arguments.length ? (H = d3_functor(t), arc) : H
                }, arc.padRadius = function (t) {
                    return arguments.length ? (B = t == xe ? xe : d3_functor(t), arc) : B
                }, arc.startAngle = function (t) {
                    return arguments.length ? (U = d3_functor(t), arc) : U
                }, arc.endAngle = function (t) {
                    return arguments.length ? (O = d3_functor(t), arc) : O
                }, arc.padAngle = function (t) {
                    return arguments.length ? (G = d3_functor(t), arc) : G
                }, arc.centroid = function () {
                    var t = (+j.apply(this, arguments) + +I.apply(this, arguments)) / 2,
                        e = (+U.apply(this, arguments) + +O.apply(this, arguments)) / 2 - W;
                    return [Math.cos(e) * t, Math.sin(e) * t]
                }, arc
            };
            var xe = "auto";

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

            function d3_svg_arcCornerTangents(t, e, n, r, i) {
                var a = t[0] - e[0], o = t[1] - e[1], s = (i ? r : -r) / Math.sqrt(a * a + o * o), u = s * o,
                    c = -s * a, l = t[0] + u, h = t[1] + c, d = e[0] + u, f = e[1] + c, g = (l + d) / 2,
                    p = (h + f) / 2, _ = d - l, m = f - h, v = _ * _ + m * m, y = n - r, x = l * f - d * h,
                    b = (m < 0 ? -1 : 1) * Math.sqrt(Math.max(0, y * y * v - x * x)), w = (x * m - _ * b) / v,
                    M = (-x * _ - m * b) / v, k = (x * m + _ * b) / v, S = (-x * _ + m * b) / v, E = w - g, C = M - p,
                    N = k - g, R = S - p;
                return N * N + R * R < E * E + C * C && (w = k, M = S), [[w - u, M - c], [w * n / y, M * n / y]]
            }

            function d3_svg_line(u) {
                var c = d3_geom_pointX, l = d3_geom_pointY, h = d3_true, d = d3_svg_lineLinear, e = d.key, f = .7;

                function line(t) {
                    var e, n = [], r = [], i = -1, a = t.length, o = d3_functor(c), s = d3_functor(l);

                    function segment() {
                        n.push("M", d(u(r), f))
                    }

                    for (; ++i < a;) h.call(this, e = t[i], i) ? r.push([+o.call(this, e, i), +s.call(this, e, i)]) : r.length && (segment(), r = []);
                    return r.length && segment(), n.length ? n.join("") : null
                }

                return line.x = function (t) {
                    return arguments.length ? (c = t, line) : c
                }, line.y = function (t) {
                    return arguments.length ? (l = t, line) : l
                }, line.defined = function (t) {
                    return arguments.length ? (h = t, line) : h
                }, line.interpolate = function (t) {
                    return arguments.length ? (e = "function" == typeof t ? d = t : (d = be.get(t) || d3_svg_lineLinear).key, line) : e
                }, line.tension = function (t) {
                    return arguments.length ? (f = t, line) : f
                }, line
            }

            P.svg.line = function () {
                return d3_svg_line(d3_identity)
            };
            var be = P.map({
                linear: d3_svg_lineLinear,
                "linear-closed": d3_svg_lineLinearClosed,
                step: function (t) {
                    var e = 0, n = t.length, r = t[0], i = [r[0], ",", r[1]];
                    for (; ++e < n;) i.push("H", (r[0] + (r = t[e])[0]) / 2, "V", r[1]);
                    1 < n && i.push("H", r[0]);
                    return i.join("")
                },
                "step-before": d3_svg_lineStepBefore,
                "step-after": d3_svg_lineStepAfter,
                basis: d3_svg_lineBasis,
                "basis-open": function (t) {
                    if (t.length < 4) return d3_svg_lineLinear(t);
                    var e, n = [], r = -1, i = t.length, a = [0], o = [0];
                    for (; ++r < 3;) e = t[r], a.push(e[0]), o.push(e[1]);
                    n.push(d3_svg_lineDot4(ke, a) + "," + d3_svg_lineDot4(ke, o)), --r;
                    for (; ++r < i;) e = t[r], a.shift(), a.push(e[0]), o.shift(), o.push(e[1]), d3_svg_lineBasisBezier(n, a, o);
                    return n.join("")
                },
                "basis-closed": function (t) {
                    var e, n, r = -1, i = t.length, a = i + 4, o = [], s = [];
                    for (; ++r < 4;) n = t[r % i], o.push(n[0]), s.push(n[1]);
                    e = [d3_svg_lineDot4(ke, o), ",", d3_svg_lineDot4(ke, s)], --r;
                    for (; ++r < a;) n = t[r % i], o.shift(), o.push(n[0]), s.shift(), s.push(n[1]), d3_svg_lineBasisBezier(e, o, s);
                    return e.join("")
                },
                bundle: function (t, e) {
                    var n = t.length - 1;
                    if (n) for (var r, i, a = t[0][0], o = t[0][1], s = t[n][0] - a, u = t[n][1] - o, c = -1; ++c <= n;) r = t[c], i = c / n, r[0] = e * r[0] + (1 - e) * (a + i * s), r[1] = e * r[1] + (1 - e) * (o + i * u);
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
                        var e, n, r, i, a = [], o = function (t) {
                            var e = 0, n = t.length - 1, r = [], i = t[0], a = t[1], o = r[0] = d3_svg_lineSlope(i, a);
                            for (; ++e < n;) r[e] = (o + (o = d3_svg_lineSlope(i = a, a = t[e + 1]))) / 2;
                            return r[e] = o, r
                        }(t), s = -1, u = t.length - 1;
                        for (; ++s < u;) e = d3_svg_lineSlope(t[s], t[s + 1]), L(e) < Y ? o[s] = o[s + 1] = 0 : (n = o[s] / e, r = o[s + 1] / e, 9 < (i = n * n + r * r) && (i = 3 * e / Math.sqrt(i), o[s] = i * n, o[s + 1] = i * r));
                        s = -1;
                        for (; ++s <= u;) i = (t[Math.min(u, s + 1)][0] - t[Math.max(0, s - 1)][0]) / (6 * (1 + o[s] * o[s])), a.push([i || 0, o[s] * i || 0]);
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
                for (var e = 0, n = t.length, r = t[0], i = [r[0], ",", r[1]]; ++e < n;) i.push("V", (r = t[e])[1], "H", r[0]);
                return i.join("")
            }

            function d3_svg_lineStepAfter(t) {
                for (var e = 0, n = t.length, r = t[0], i = [r[0], ",", r[1]]; ++e < n;) i.push("H", (r = t[e])[0], "V", r[1]);
                return i.join("")
            }

            function d3_svg_lineHermite(t, e) {
                if (e.length < 1 || t.length != e.length && t.length != e.length + 2) return d3_svg_lineLinear(t);
                var n = t.length != e.length, r = "", i = t[0], a = t[1], o = e[0], s = o, u = 1;
                if (n && (r += "Q" + (a[0] - 2 * o[0] / 3) + "," + (a[1] - 2 * o[1] / 3) + "," + a[0] + "," + a[1], i = t[1], u = 2), 1 < e.length) {
                    s = e[1], a = t[u], u++, r += "C" + (i[0] + o[0]) + "," + (i[1] + o[1]) + "," + (a[0] - s[0]) + "," + (a[1] - s[1]) + "," + a[0] + "," + a[1];
                    for (var c = 2; c < e.length; c++, u++) a = t[u], s = e[c], r += "S" + (a[0] - s[0]) + "," + (a[1] - s[1]) + "," + a[0] + "," + a[1]
                }
                if (n) {
                    var l = t[u];
                    r += "Q" + (a[0] + 2 * s[0] / 3) + "," + (a[1] + 2 * s[1] / 3) + "," + l[0] + "," + l[1]
                }
                return r
            }

            function d3_svg_lineCardinalTangents(t, e) {
                for (var n, r = [], i = (1 - e) / 2, a = t[0], o = t[1], s = 1, u = t.length; ++s < u;) n = a, a = o, o = t[s], r.push([i * (o[0] - n[0]), i * (o[1] - n[1])]);
                return r
            }

            function d3_svg_lineBasis(t) {
                if (t.length < 3) return d3_svg_lineLinear(t);
                var e = 1, n = t.length, r = t[0], i = r[0], a = r[1], o = [i, i, i, (r = t[1])[0]],
                    s = [a, a, a, r[1]], u = [i, ",", a, "L", d3_svg_lineDot4(ke, o), ",", d3_svg_lineDot4(ke, s)];
                for (t.push(t[n - 1]); ++e <= n;) r = t[e], o.shift(), o.push(r[0]), s.shift(), s.push(r[1]), d3_svg_lineBasisBezier(u, o, s);
                return t.pop(), u.push("L", r), u.join("")
            }

            function d3_svg_lineDot4(t, e) {
                return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3]
            }

            be.forEach(function (t, e) {
                e.key = t, e.closed = /-closed$/.test(t)
            });
            var we = [0, 2 / 3, 1 / 3, 0], Me = [0, 1 / 3, 2 / 3, 0], ke = [0, 1 / 6, 2 / 3, 1 / 6];

            function d3_svg_lineBasisBezier(t, e, n) {
                t.push("C", d3_svg_lineDot4(we, e), ",", d3_svg_lineDot4(we, n), ",", d3_svg_lineDot4(Me, e), ",", d3_svg_lineDot4(Me, n), ",", d3_svg_lineDot4(ke, e), ",", d3_svg_lineDot4(ke, n))
            }

            function d3_svg_lineSlope(t, e) {
                return (e[1] - t[1]) / (e[0] - t[0])
            }

            function d3_svg_lineRadial(t) {
                for (var e, n, r, i = -1, a = t.length; ++i < a;) n = (e = t[i])[0], r = e[1] - W, e[0] = n * Math.cos(r), e[1] = n * Math.sin(r);
                return t
            }

            function d3_svg_area(f) {
                var g = d3_geom_pointX, p = d3_geom_pointX, _ = 0, m = d3_geom_pointY, v = d3_true,
                    y = d3_svg_lineLinear, e = y.key, x = y, b = "L", w = .7;

                function area(t) {
                    var e, n, r, i = [], a = [], o = [], s = -1, u = t.length, c = d3_functor(g), l = d3_functor(_),
                        h = g === p ? function () {
                            return n
                        } : d3_functor(p), d = _ === m ? function () {
                            return r
                        } : d3_functor(m);

                    function segment() {
                        i.push("M", y(f(o), w), b, x(f(a.reverse()), w), "Z")
                    }

                    for (; ++s < u;) v.call(this, e = t[s], s) ? (a.push([n = +c.call(this, e, s), r = +l.call(this, e, s)]), o.push([+h.call(this, e, s), +d.call(this, e, s)])) : a.length && (segment(), a = [], o = []);
                    return a.length && segment(), i.length ? i.join("") : null
                }

                return area.x = function (t) {
                    return arguments.length ? (g = p = t, area) : p
                }, area.x0 = function (t) {
                    return arguments.length ? (g = t, area) : g
                }, area.x1 = function (t) {
                    return arguments.length ? (p = t, area) : p
                }, area.y = function (t) {
                    return arguments.length ? (_ = m = t, area) : m
                }, area.y0 = function (t) {
                    return arguments.length ? (_ = t, area) : _
                }, area.y1 = function (t) {
                    return arguments.length ? (m = t, area) : m
                }, area.defined = function (t) {
                    return arguments.length ? (v = t, area) : v
                }, area.interpolate = function (t) {
                    return arguments.length ? (e = "function" == typeof t ? y = t : (y = be.get(t) || d3_svg_lineLinear).key, x = y.reverse || y, b = y.closed ? "M" : "L", area) : e
                }, area.tension = function (t) {
                    return arguments.length ? (w = t, area) : w
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

            P.svg.line.radial = function () {
                var t = d3_svg_line(d3_svg_lineRadial);
                return t.radius = t.x, delete t.x, t.angle = t.y, delete t.y, t
            }, (d3_svg_lineStepBefore.reverse = d3_svg_lineStepAfter).reverse = d3_svg_lineStepBefore, P.svg.area = function () {
                return d3_svg_area(d3_identity)
            }, P.svg.area.radial = function () {
                var t = d3_svg_area(d3_svg_lineRadial);
                return t.radius = t.x, delete t.x, t.innerRadius = t.x0, delete t.x0, t.outerRadius = t.x1, delete t.x1, t.angle = t.y, delete t.y, t.startAngle = t.y0, delete t.y0, t.endAngle = t.y1, delete t.y1, t
            }, P.svg.chord = function () {
                var o = d3_source, s = d3_target, u = d3_svg_chordRadius, c = d3_svg_arcStartAngle,
                    l = d3_svg_arcEndAngle;

                function chord(t, e) {
                    var n, r, i = subgroup(this, o, t, e), a = subgroup(this, s, t, e);
                    return "M" + i.p0 + arc(i.r, i.p1, i.a1 - i.a0) + (r = a, (n = i).a0 == r.a0 && n.a1 == r.a1 ? curve(i.r, i.p1, i.r, i.p0) : curve(i.r, i.p1, a.r, a.p0) + arc(a.r, a.p1, a.a1 - a.a0) + curve(a.r, a.p1, i.r, i.p0)) + "Z"
                }

                function subgroup(t, e, n, r) {
                    var i = e.call(t, n, r), a = u.call(t, i, r), o = c.call(t, i, r) - W, s = l.call(t, i, r) - W;
                    return {
                        r: a,
                        a0: o,
                        a1: s,
                        p0: [a * Math.cos(o), a * Math.sin(o)],
                        p1: [a * Math.cos(s), a * Math.sin(s)]
                    }
                }

                function arc(t, e, n) {
                    return "A" + t + "," + t + " 0 " + +(V < n) + ",1 " + e
                }

                function curve(t, e, n, r) {
                    return "Q 0,0 " + r
                }

                return chord.radius = function (t) {
                    return arguments.length ? (u = d3_functor(t), chord) : u
                }, chord.source = function (t) {
                    return arguments.length ? (o = d3_functor(t), chord) : o
                }, chord.target = function (t) {
                    return arguments.length ? (s = d3_functor(t), chord) : s
                }, chord.startAngle = function (t) {
                    return arguments.length ? (c = d3_functor(t), chord) : c
                }, chord.endAngle = function (t) {
                    return arguments.length ? (l = d3_functor(t), chord) : l
                }, chord
            }, P.svg.diagonal = function () {
                var o = d3_source, s = d3_target, u = d3_svg_diagonalProjection;

                function diagonal(t, e) {
                    var n = o.call(this, t, e), r = s.call(this, t, e), i = (n.y + r.y) / 2,
                        a = [n, {x: n.x, y: i}, {x: r.x, y: i}, r];
                    return "M" + (a = a.map(u))[0] + "C" + a[1] + " " + a[2] + " " + a[3]
                }

                return diagonal.source = function (t) {
                    return arguments.length ? (o = d3_functor(t), diagonal) : o
                }, diagonal.target = function (t) {
                    return arguments.length ? (s = d3_functor(t), diagonal) : s
                }, diagonal.projection = function (t) {
                    return arguments.length ? (u = t, diagonal) : u
                }, diagonal
            }, P.svg.diagonal.radial = function () {
                var t = P.svg.diagonal(), e = d3_svg_diagonalProjection, n = t.projection;
                return t.projection = function (t) {
                    return arguments.length ? n((r = e = t, function () {
                        var t = r.apply(this, arguments), e = t[0], n = t[1] - W;
                        return [e * Math.cos(n), e * Math.sin(n)]
                    })) : e;
                    var r
                }, t
            }, P.svg.symbol = function () {
                var n = d3_svg_symbolType, r = d3_svg_symbolSize;

                function symbol(t, e) {
                    return (Se.get(n.call(this, t, e)) || d3_svg_symbolCircle)(r.call(this, t, e))
                }

                return symbol.type = function (t) {
                    return arguments.length ? (n = d3_functor(t), symbol) : n
                }, symbol.size = function (t) {
                    return arguments.length ? (r = d3_functor(t), symbol) : r
                }, symbol
            };
            var Se = P.map({
                circle: d3_svg_symbolCircle, cross: function (t) {
                    var e = Math.sqrt(t / 5) / 2;
                    return "M" + -3 * e + "," + -e + "H" + -e + "V" + -3 * e + "H" + e + "V" + -e + "H" + 3 * e + "V" + e + "H" + e + "V" + 3 * e + "H" + -e + "V" + e + "H" + -3 * e + "Z"
                }, diamond: function (t) {
                    var e = Math.sqrt(t / (2 * Ce)), n = e * Ce;
                    return "M0," + -e + "L" + n + ",0 0," + e + " " + -n + ",0Z"
                }, square: function (t) {
                    var e = Math.sqrt(t) / 2;
                    return "M" + -e + "," + -e + "L" + e + "," + -e + " " + e + "," + e + " " + -e + "," + e + "Z"
                }, "triangle-down": function (t) {
                    var e = Math.sqrt(t / Ee), n = e * Ee / 2;
                    return "M0," + n + "L" + e + "," + -n + " " + -e + "," + -n + "Z"
                }, "triangle-up": function (t) {
                    var e = Math.sqrt(t / Ee), n = e * Ee / 2;
                    return "M0," + -n + "L" + e + "," + n + " " + -e + "," + n + "Z"
                }
            });
            P.svg.symbolTypes = Se.keys();
            var Ee = Math.sqrt(3), Ce = Math.tan(30 * C);
            m.transition = function (t) {
                for (var e, n, r = Re || ++Le, i = d3_transitionNamespace(t), a = [], o = Te || {
                    time: Date.now(),
                    ease: d3_ease_cubicInOut,
                    delay: 0,
                    duration: 250
                }, s = -1, u = this.length; ++s < u;) {
                    a.push(e = []);
                    for (var c = this[s], l = -1, h = c.length; ++l < h;) (n = c[l]) && d3_transitionNode(n, l, i, r, o), e.push(n)
                }
                return d3_transition(a, i, r)
            }, m.interrupt = function (t) {
                return this.each(null == t ? Ne : d3_selection_interruptNS(d3_transitionNamespace(t)))
            };
            var Ne = d3_selection_interruptNS(d3_transitionNamespace());

            function d3_selection_interruptNS(r) {
                return function () {
                    var t, e, n;
                    (t = this[r]) && (n = t[e = t.active]) && (n.timer.c = null, n.timer.t = NaN, --t.count ? delete t[e] : delete this[r], t.active += .5, n.event && n.event.interrupt.call(this, this.__data__, n.index))
                }
            }

            function d3_transition(t, e, n) {
                return h(t, Ae), t.namespace = e, t.id = n, t
            }

            var Re, Te, Ae = [], Le = 0;

            function d3_transition_tween(t, r, i, a) {
                var o = t.id, s = t.namespace;
                return d3_selection_each(t, "function" == typeof i ? function (t, e, n) {
                    t[s][o].tween.set(r, a(i.call(t, t.__data__, e, n)))
                } : (i = a(i), function (t) {
                    t[s][o].tween.set(r, i)
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

            function d3_transitionNode(a, o, i, s, t) {
                var u, c, l, h, d, f = a[i] || (a[i] = {active: 0, count: 0}), g = f[s];

                function start(t) {
                    var e = f.active, n = f[e];
                    for (var r in n && (n.timer.c = null, n.timer.t = NaN, --f.count, delete f[e], n.event && n.event.interrupt.call(a, a.__data__, n.index)), f) if (+r < s) {
                        var i = f[r];
                        i.timer.c = null, i.timer.t = NaN, --f.count, delete f[r]
                    }
                    c.c = tick, d3_timer(function () {
                        return c.c && tick(t || 1) && (c.c = null, c.t = NaN), 1
                    }, 0, u), f.active = s, g.event && g.event.start.call(a, a.__data__, o), d = [], g.tween.forEach(function (t, e) {
                        (e = e.call(a, a.__data__, o)) && d.push(e)
                    }), h = g.ease, l = g.duration
                }

                function tick(t) {
                    for (var e = t / l, n = h(e), r = d.length; 0 < r;) d[--r].call(a, n);
                    if (1 <= e) return g.event && g.event.end.call(a, a.__data__, o), --f.count ? delete f[s] : delete a[i], 1
                }

                g || (u = t.time, c = d3_timer(function (t) {
                    var e = g.delay;
                    if (c.t = e + u, e <= t) return start(t - e);
                    c.c = start
                }, 0, u), g = f[s] = {
                    tween: new d3_Map,
                    time: u,
                    timer: c,
                    delay: t.delay,
                    duration: t.duration,
                    ease: t.ease,
                    index: o
                }, t = null, ++f.count)
            }

            Ae.call = m.call, Ae.empty = m.empty, Ae.node = m.node, Ae.size = m.size, P.transition = function (t, e) {
                return t && t.transition ? Re ? t.transition(e) : t : P.selection().transition(t)
            }, (P.transition.prototype = Ae).select = function (t) {
                var e, n, r, i = this.id, a = this.namespace, o = [];
                t = d3_selection_selector(t);
                for (var s = -1, u = this.length; ++s < u;) {
                    o.push(e = []);
                    for (var c = this[s], l = -1, h = c.length; ++l < h;) (r = c[l]) && (n = t.call(r, r.__data__, l, s)) ? ("__data__" in r && (n.__data__ = r.__data__), d3_transitionNode(n, l, a, i, r[a][i]), e.push(n)) : e.push(null)
                }
                return d3_transition(o, a, i)
            }, Ae.selectAll = function (t) {
                var e, n, r, i, a, o = this.id, s = this.namespace, u = [];
                t = d3_selection_selectorAll(t);
                for (var c = -1, l = this.length; ++c < l;) for (var h = this[c], d = -1, f = h.length; ++d < f;) if (r = h[d]) {
                    a = r[s][o], n = t.call(r, r.__data__, d, c), u.push(e = []);
                    for (var g = -1, p = n.length; ++g < p;) (i = n[g]) && d3_transitionNode(i, g, s, o, a), e.push(i)
                }
                return d3_transition(u, s, o)
            }, Ae.filter = function (t) {
                var e, n, r = [];
                "function" != typeof t && (t = d3_selection_filter(t));
                for (var i = 0, a = this.length; i < a; i++) {
                    r.push(e = []);
                    for (var o, s = 0, u = (o = this[i]).length; s < u; s++) (n = o[s]) && t.call(n, n.__data__, s, i) && e.push(n)
                }
                return d3_transition(r, this.namespace, this.id)
            }, Ae.tween = function (e, n) {
                var r = this.id, i = this.namespace;
                return arguments.length < 2 ? this.node()[i][r].tween.get(e) : d3_selection_each(this, null == n ? function (t) {
                    t[i][r].tween.remove(e)
                } : function (t) {
                    t[i][r].tween.set(e, n)
                })
            }, Ae.attr = function (t, e) {
                if (arguments.length < 2) {
                    for (e in t) this.attr(e, t[e]);
                    return this
                }
                var r = "transform" == t ? d3_interpolateTransform : d3_interpolate, i = P.ns.qualify(t);

                function attrNull() {
                    this.removeAttribute(i)
                }

                function attrNullNS() {
                    this.removeAttributeNS(i.space, i.local)
                }

                return d3_transition_tween(this, "attr." + t, e, i.local ? function (n) {
                    return null == n ? attrNullNS : (n += "", function () {
                        var e, t = this.getAttributeNS(i.space, i.local);
                        return t !== n && (e = r(t, n), function (t) {
                            this.setAttributeNS(i.space, i.local, e(t))
                        })
                    })
                } : function (n) {
                    return null == n ? attrNull : (n += "", function () {
                        var e, t = this.getAttribute(i);
                        return t !== n && (e = r(t, n), function (t) {
                            this.setAttribute(i, e(t))
                        })
                    })
                })
            }, Ae.attrTween = function (t, r) {
                var i = P.ns.qualify(t);
                return this.tween("attr." + t, i.local ? function (t, e) {
                    var n = r.call(this, t, e, this.getAttributeNS(i.space, i.local));
                    return n && function (t) {
                        this.setAttributeNS(i.space, i.local, n(t))
                    }
                } : function (t, e) {
                    var n = r.call(this, t, e, this.getAttribute(i));
                    return n && function (t) {
                        this.setAttribute(i, n(t))
                    }
                })
            }, Ae.style = function (r, t, i) {
                var e = arguments.length;
                if (e < 3) {
                    if ("string" != typeof r) {
                        for (i in e < 2 && (t = ""), r) this.style(i, r[i], t);
                        return this
                    }
                    i = ""
                }

                function styleNull() {
                    this.style.removeProperty(r)
                }

                return d3_transition_tween(this, "style." + r, t, function (n) {
                    return null == n ? styleNull : (n += "", function () {
                        var e, t = d3_window(this).getComputedStyle(this, null).getPropertyValue(r);
                        return t !== n && (e = d3_interpolate(t, n), function (t) {
                            this.style.setProperty(r, e(t), i)
                        })
                    })
                })
            }, Ae.styleTween = function (r, i, a) {
                return arguments.length < 3 && (a = ""), this.tween("style." + r, function (t, e) {
                    var n = i.call(this, t, e, d3_window(this).getComputedStyle(this, null).getPropertyValue(r));
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
                return arguments.length < 1 ? this.node()[r][n].ease : ("function" != typeof e && (e = P.ease.apply(P, arguments)), d3_selection_each(this, function (t) {
                    t[r][n].ease = e
                }))
            }, Ae.delay = function (r) {
                var i = this.id, a = this.namespace;
                return arguments.length < 1 ? this.node()[a][i].delay : d3_selection_each(this, "function" == typeof r ? function (t, e, n) {
                    t[a][i].delay = +r.call(t, t.__data__, e, n)
                } : (r = +r, function (t) {
                    t[a][i].delay = r
                }))
            }, Ae.duration = function (r) {
                var i = this.id, a = this.namespace;
                return arguments.length < 1 ? this.node()[a][i].duration : d3_selection_each(this, "function" == typeof r ? function (t, e, n) {
                    t[a][i].duration = Math.max(1, r.call(t, t.__data__, e, n))
                } : (r = Math.max(1, r), function (t) {
                    t[a][i].duration = r
                }))
            }, Ae.each = function (r, n) {
                var i = this.id, a = this.namespace;
                if (arguments.length < 2) {
                    var t = Te, e = Re;
                    try {
                        Re = i, d3_selection_each(this, function (t, e, n) {
                            Te = t[a][i], r.call(t, t.__data__, e, n)
                        })
                    } finally {
                        Te = t, Re = e
                    }
                } else d3_selection_each(this, function (t) {
                    var e = t[a][i];
                    (e.event || (e.event = P.dispatch("start", "end", "interrupt"))).on(r, n)
                });
                return this
            }, Ae.transition = function () {
                for (var t, e, n, r = this.id, i = ++Le, a = this.namespace, o = [], s = 0, u = this.length; s < u; s++) {
                    o.push(t = []);
                    for (var c, l = 0, h = (c = this[s]).length; l < h; l++) (e = c[l]) && d3_transitionNode(e, l, a, i, {
                        time: (n = e[a][r]).time,
                        ease: n.ease,
                        delay: n.delay + n.duration,
                        duration: n.duration
                    }), t.push(e)
                }
                return d3_transition(o, a, i)
            }, P.svg.axis = function () {
                var E, C = P.scale.linear(), N = ze, R = 6, T = 6, A = 3, L = [10], z = null;

                function axis(t) {
                    t.each(function () {
                        var t, e = P.select(this), n = this.__chart__ || C, r = this.__chart__ = C.copy(),
                            i = null == z ? r.ticks ? r.ticks.apply(r, L) : r.domain() : z,
                            a = null == E ? r.tickFormat ? r.tickFormat.apply(r, L) : d3_identity : E,
                            o = e.selectAll(".tick").data(i, r),
                            s = o.enter().insert("g", ".domain").attr("class", "tick").style("opacity", Y),
                            u = P.transition(o.exit()).style("opacity", Y).remove(),
                            c = P.transition(o.order()).style("opacity", 1), l = Math.max(R, 0) + A,
                            h = d3_scaleRange(r), d = e.selectAll(".domain").data([0]),
                            f = (d.enter().append("path").attr("class", "domain"), P.transition(d));
                        s.append("line"), s.append("text");
                        var g, p, _, m, v = s.select("line"), y = c.select("line"), x = o.select("text").text(a),
                            b = s.select("text"), w = c.select("text"), M = "top" === N || "left" === N ? -1 : 1;
                        if ("bottom" === N || "top" === N ? (t = d3_svg_axisX, g = "x", _ = "y", p = "x2", m = "y2", x.attr("dy", M < 0 ? "0em" : ".71em").style("text-anchor", "middle"), f.attr("d", "M" + h[0] + "," + M * T + "V0H" + h[1] + "V" + M * T)) : (t = d3_svg_axisY, g = "y", _ = "x", p = "y2", m = "x2", x.attr("dy", ".32em").style("text-anchor", M < 0 ? "end" : "start"), f.attr("d", "M" + M * T + "," + h[0] + "H0V" + h[1] + "H" + M * T)), v.attr(m, M * R), b.attr(_, M * l), y.attr(p, 0).attr(m, M * R), w.attr(g, 0).attr(_, M * l), r.rangeBand) {
                            var k = r, S = k.rangeBand() / 2;
                            n = r = function (t) {
                                return k(t) + S
                            }
                        } else n.rangeBand ? n = r : u.call(t, r, n);
                        s.call(t, n, r), c.call(t, r, r)
                    })
                }

                return axis.scale = function (t) {
                    return arguments.length ? (C = t, axis) : C
                }, axis.orient = function (t) {
                    return arguments.length ? (N = t in Pe ? t + "" : ze, axis) : N
                }, axis.ticks = function () {
                    return arguments.length ? (L = d(arguments), axis) : L
                }, axis.tickValues = function (t) {
                    return arguments.length ? (z = t, axis) : z
                }, axis.tickFormat = function (t) {
                    return arguments.length ? (E = t, axis) : E
                }, axis.tickSize = function (t) {
                    var e = arguments.length;
                    return e ? (R = +t, T = +arguments[e - 1], axis) : R
                }, axis.innerTickSize = function (t) {
                    return arguments.length ? (R = +t, axis) : R
                }, axis.outerTickSize = function (t) {
                    return arguments.length ? (T = +t, axis) : T
                }, axis.tickPadding = function (t) {
                    return arguments.length ? (A = +t, axis) : A
                }, axis.tickSubdivide = function () {
                    return arguments.length && axis
                }, axis
            };
            var ze = "bottom", Pe = {top: 1, right: 1, bottom: 1, left: 1};

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

            P.svg.brush = function () {
                var p, _, m = d3_eventDispatch(brush, "brushstart", "brush", "brushend"), v = null, y = null,
                    x = [0, 0], b = [0, 0], w = !0, M = !0, o = Fe[0];

                function brush(t) {
                    t.each(function () {
                        var t = P.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", brushstart).on("touchstart.brush", brushstart),
                            e = t.selectAll(".background").data([0]);
                        e.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), t.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
                        var n = t.selectAll(".resize").data(o, d3_identity);
                        n.exit().remove(), n.enter().append("g").attr("class", function (t) {
                            return "resize " + t
                        }).style("cursor", function (t) {
                            return De[t]
                        }).append("rect").attr("x", function (t) {
                            return /[ew]$/.test(t) ? -3 : null
                        }).attr("y", function (t) {
                            return /^[ns]/.test(t) ? -3 : null
                        }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), n.style("display", brush.empty() ? "none" : null);
                        var r, i = P.transition(t), a = P.transition(e);
                        v && (r = d3_scaleRange(v), a.attr("x", r[0]).attr("width", r[1] - r[0]), redrawX(i)), y && (r = d3_scaleRange(y), a.attr("y", r[0]).attr("height", r[1] - r[0]), redrawY(i)), redraw(i)
                    })
                }

                function redraw(t) {
                    t.selectAll(".resize").attr("transform", function (t) {
                        return "translate(" + x[+/e$/.test(t)] + "," + b[+/^s/.test(t)] + ")"
                    })
                }

                function redrawX(t) {
                    t.select(".extent").attr("x", x[0]), t.selectAll(".extent,.n>rect,.s>rect").attr("width", x[1] - x[0])
                }

                function redrawY(t) {
                    t.select(".extent").attr("y", b[0]), t.selectAll(".extent,.e>rect,.w>rect").attr("height", b[1] - b[0])
                }

                function brushstart() {
                    var h, n, r = this, t = P.select(P.event.target), i = m.of(r, arguments), a = P.select(r),
                        e = t.datum(), o = !/^(n|s)$/.test(e) && v, s = !/^(e|w)$/.test(e) && y,
                        d = t.classed("extent"), u = d3_event_dragSuppress(r), f = P.mouse(r),
                        c = P.select(d3_window(r)).on("keydown.brush", function () {
                            32 == P.event.keyCode && (d || (h = null, f[0] -= x[1], f[1] -= b[1], d = 2), d3_eventPreventDefault())
                        }).on("keyup.brush", function () {
                            32 == P.event.keyCode && 2 == d && (f[0] += x[1], f[1] += b[1], d = 0, d3_eventPreventDefault())
                        });
                    if (P.event.changedTouches ? c.on("touchmove.brush", brushmove).on("touchend.brush", brushend) : c.on("mousemove.brush", brushmove).on("mouseup.brush", brushend), a.interrupt().selectAll("*").interrupt(), d) f[0] = x[0] - f[0], f[1] = b[0] - f[1]; else if (e) {
                        var l = +/w$/.test(e), g = +/^n/.test(e);
                        n = [x[1 - l] - f[0], b[1 - g] - f[1]], f[0] = x[l], f[1] = b[g]
                    } else P.event.altKey && (h = f.slice());

                    function brushmove() {
                        var t = P.mouse(r), e = !1;
                        n && (t[0] += n[0], t[1] += n[1]), d || (P.event.altKey ? (h || (h = [(x[0] + x[1]) / 2, (b[0] + b[1]) / 2]), f[0] = x[+(t[0] < h[0])], f[1] = b[+(t[1] < h[1])]) : h = null), o && move1(t, v, 0) && (redrawX(a), e = !0), s && move1(t, y, 1) && (redrawY(a), e = !0), e && (redraw(a), i({
                            type: "brush",
                            mode: d ? "move" : "resize"
                        }))
                    }

                    function move1(t, e, n) {
                        var r, i, a = d3_scaleRange(e), o = a[0], s = a[1], u = f[n], c = n ? b : x, l = c[1] - c[0];
                        if (d && (o -= u, s -= l + u), r = (n ? M : w) ? Math.max(o, Math.min(s, t[n])) : t[n], d ? i = (r += u) + l : (h && (u = Math.max(o, Math.min(s, 2 * h[n] - r))), u < r ? (i = r, r = u) : i = u), c[0] != r || c[1] != i) return n ? _ = null : p = null, c[0] = r, c[1] = i, !0
                    }

                    function brushend() {
                        brushmove(), a.style("pointer-events", "all").selectAll(".resize").style("display", brush.empty() ? "none" : null), P.select("body").style("cursor", null), c.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), u(), i({type: "brushend"})
                    }

                    a.style("pointer-events", "none").selectAll(".resize").style("display", null), P.select("body").style("cursor", t.style("cursor")), i({type: "brushstart"}), brushmove()
                }

                return brush.event = function (t) {
                    t.each(function () {
                        var r = m.of(this, arguments), i = {x: x, y: b, i: p, j: _}, t = this.__chart__ || i;
                        this.__chart__ = i, Re ? P.select(this).transition().each("start.brush", function () {
                            p = t.i, _ = t.j, x = t.x, b = t.y, r({type: "brushstart"})
                        }).tween("brush:brush", function () {
                            var e = d3_interpolateArray(x, i.x), n = d3_interpolateArray(b, i.y);
                            return p = _ = null, function (t) {
                                x = i.x = e(t), b = i.y = n(t), r({type: "brush", mode: "resize"})
                            }
                        }).each("end.brush", function () {
                            p = i.i, _ = i.j, r({type: "brush", mode: "resize"}), r({type: "brushend"})
                        }) : (r({type: "brushstart"}), r({type: "brush", mode: "resize"}), r({type: "brushend"}))
                    })
                }, brush.x = function (t) {
                    return arguments.length ? (o = Fe[!(v = t) << 1 | !y], brush) : v
                }, brush.y = function (t) {
                    return arguments.length ? (o = Fe[!v << 1 | !(y = t)], brush) : y
                }, brush.clamp = function (t) {
                    return arguments.length ? (v && y ? (w = !!t[0], M = !!t[1]) : v ? w = !!t : y && (M = !!t), brush) : v && y ? [w, M] : v ? w : y ? M : null
                }, brush.extent = function (t) {
                    var e, n, r, i, a;
                    return arguments.length ? (v && (e = t[0], n = t[1], y && (e = e[0], n = n[0]), p = [e, n], v.invert && (e = v(e), n = v(n)), n < e && (a = e, e = n, n = a), e == x[0] && n == x[1] || (x = [e, n])), y && (r = t[0], i = t[1], v && (r = r[1], i = i[1]), _ = [r, i], y.invert && (r = y(r), i = y(i)), i < r && (a = r, r = i, i = a), r == b[0] && i == b[1] || (b = [r, i])), brush) : (v && (p ? (e = p[0], n = p[1]) : (e = x[0], n = x[1], v.invert && (e = v.invert(e), n = v.invert(n)), n < e && (a = e, e = n, n = a))), y && (_ ? (r = _[0], i = _[1]) : (r = b[0], i = b[1], y.invert && (r = y.invert(r), i = y.invert(i)), i < r && (a = r, r = i, i = a))), v && y ? [[e, r], [n, i]] : v ? [e, n] : y && [r, i])
                }, brush.clear = function () {
                    return brush.empty() || (x = [0, 0], b = [0, 0], p = _ = null), brush
                }, brush.empty = function () {
                    return !!v && x[0] == x[1] || !!y && b[0] == b[1]
                }, P.rebind(brush, m, "on")
            };
            var De = {
                    n: "ns-resize",
                    e: "ew-resize",
                    s: "ns-resize",
                    w: "ew-resize",
                    nw: "nwse-resize",
                    ne: "nesw-resize",
                    se: "nwse-resize",
                    sw: "nesw-resize"
                }, Fe = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []],
                qe = nt.format = ut.timeFormat, je = qe.utc, Ie = je("%Y-%m-%dT%H:%M:%S.%LZ");

            function d3_time_formatIsoNative(t) {
                return t.toISOString()
            }

            function d3_time_scale(e, i, t) {
                function scale(t) {
                    return e(t)
                }

                function tickMethod(t, e) {
                    var n = (t[1] - t[0]) / e, r = P.bisect(He, n);
                    return r == He.length ? [i.year, d3_scale_linearTickRange(t.map(function (t) {
                        return t / 31536e6
                    }), e)[2]] : r ? i[n / He[r - 1] < He[r] / n ? r - 1 : r] : [Oe, d3_scale_linearTickRange(t, e)[2]]
                }

                return scale.invert = function (t) {
                    return d3_time_scaleDate(e.invert(t))
                }, scale.domain = function (t) {
                    return arguments.length ? (e.domain(t), scale) : e.domain().map(d3_time_scaleDate)
                }, scale.nice = function (e, n) {
                    var t = scale.domain(), r = d3_scaleExtent(t),
                        i = null == e ? tickMethod(r, 10) : "number" == typeof e && tickMethod(r, e);

                    function skipped(t) {
                        return !isNaN(t) && !e.range(t, d3_time_scaleDate(+t + 1), n).length
                    }

                    return i && (e = i[0], n = i[1]), scale.domain(d3_scale_nice(t, 1 < n ? {
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
                    return d3_time_scale(e.copy(), i, t)
                }, d3_scale_linearRebind(scale, e)
            }

            function d3_time_scaleDate(t) {
                return new Date(t)
            }

            qe.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? d3_time_formatIsoNative : Ie, d3_time_formatIsoNative.parse = function (t) {
                var e = new Date(t);
                return isNaN(e) ? null : e
            }, d3_time_formatIsoNative.toString = Ie.toString, nt.second = d3_time_interval(function (t) {
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
            var He = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
                Be = [[nt.second, 1], [nt.second, 5], [nt.second, 15], [nt.second, 30], [nt.minute, 1], [nt.minute, 5], [nt.minute, 15], [nt.minute, 30], [nt.hour, 1], [nt.hour, 3], [nt.hour, 6], [nt.hour, 12], [nt.day, 1], [nt.day, 2], [nt.week, 1], [nt.month, 1], [nt.month, 3], [nt.year, 1]],
                Ue = qe.multi([[".%L", function (t) {
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
                }], ["%Y", d3_true]]), Oe = {
                    range: function (t, e, n) {
                        return P.range(Math.ceil(t / n) * n, +e, n).map(d3_time_scaleDate)
                    }, floor: d3_identity, ceil: d3_identity
                };
            Be.year = nt.year, nt.scale = function () {
                return d3_time_scale(P.scale.linear(), Be, Ue)
            };
            var Ge = Be.map(function (t) {
                return [t[0].utc, t[1]]
            }), Ye = je.multi([[".%L", function (t) {
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
                var e = p.createRange();
                return e.selectNode(p.body), e.createContextualFragment(t.responseText)
            }

            Ge.year = nt.year.utc, nt.scale.utc = function () {
                return d3_time_scale(P.scale.linear(), Ge, Ye)
            }, P.text = d3_xhrType(function (t) {
                return t.responseText
            }), P.json = function (t, e) {
                return d3_xhr(t, "application/json", d3_json, e)
            }, P.html = function (t, e) {
                return d3_xhr(t, "text/html", d3_html, e)
            }, P.xml = d3_xhrType(function (t) {
                return t.responseXML
            }), this.d3 = P, void 0 === (Qe = "function" == typeof (Ze = P) ? Ze.call(Xe, We, Xe, Ve) : Ze) || (Ve.exports = Qe)
        }()
    }, 226: function (t, e, n) {
    }
}, [[224, 0]]]);