(window.webpackJsonp = window.webpackJsonp || []).push([[9], {
    174: function (e, t, n) {
        e.exports = function () {
            "use strict";
            var e = navigator.userAgent, t = navigator.platform, g = /gecko\/\d/i.test(e), n = /MSIE \d/.test(e),
                o = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e), i = /Edge\/(\d+)/.exec(e), x = n || o || i,
                w = x && (n ? document.documentMode || 6 : +(i || o)[1]), y = !i && /WebKit\//.test(e),
                r = y && /Qt\/\d+\.\d+/.test(e), a = !i && /Chrome\//.test(e), m = /Opera\//.test(e),
                l = /Apple Computer/.test(navigator.vendor), s = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),
                c = /PhantomJS/.test(e), d = !i && /AppleWebKit/.test(e) && /Mobile\/\w+/.test(e),
                u = /Android/.test(e), h = d || u || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),
                b = d || /Mac/.test(t), v = /\bCrOS\b/.test(e), p = /win/i.test(t),
                f = m && e.match(/Version\/(\d*\.\d*)/);
            f && (f = Number(f[1])), f && 15 <= f && (y = !(m = !1));
            var C = b && (r || m && (null == f || f < 12.11)), k = g || x && 9 <= w;

            function classTest(e) {
                return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*")
            }

            var S, L = function (e, t) {
                var n = e.className, o = classTest(t).exec(n);
                if (o) {
                    var i = n.slice(o.index + o[0].length);
                    e.className = n.slice(0, o.index) + (i ? o[1] + i : "")
                }
            };

            function removeChildren(e) {
                for (var t = e.childNodes.length; 0 < t; --t) e.removeChild(e.firstChild);
                return e
            }

            function removeChildrenAndAdd(e, t) {
                return removeChildren(e).appendChild(t)
            }

            function elt(e, t, n, o) {
                var i = document.createElement(e);
                if (n && (i.className = n), o && (i.style.cssText = o), "string" == typeof t) i.appendChild(document.createTextNode(t)); else if (t) for (var r = 0; r < t.length; ++r) i.appendChild(t[r]);
                return i
            }

            function eltP(e, t, n, o) {
                var i = elt(e, t, n, o);
                return i.setAttribute("role", "presentation"), i
            }

            function contains(e, t) {
                if (3 == t.nodeType && (t = t.parentNode), e.contains) return e.contains(t);
                do {
                    if (11 == t.nodeType && (t = t.host), t == e) return !0
                } while (t = t.parentNode)
            }

            function activeElt() {
                var t;
                try {
                    t = document.activeElement
                } catch (e) {
                    t = document.body || null
                }
                for (; t && t.shadowRoot && t.shadowRoot.activeElement;) t = t.shadowRoot.activeElement;
                return t
            }

            function addClass(e, t) {
                var n = e.className;
                classTest(t).test(n) || (e.className += (n ? " " : "") + t)
            }

            function joinClasses(e, t) {
                for (var n = e.split(" "), o = 0; o < n.length; o++) n[o] && !classTest(n[o]).test(t) && (t += " " + n[o]);
                return t
            }

            S = document.createRange ? function (e, t, n, o) {
                var i = document.createRange();
                return i.setEnd(o || e, n), i.setStart(e, t), i
            } : function (e, t, n) {
                var o = document.body.createTextRange();
                try {
                    o.moveToElementText(e.parentNode)
                } catch (e) {
                    return o
                }
                return o.collapse(!0), o.moveEnd("character", n), o.moveStart("character", t), o
            };
            var T = function (e) {
                e.select()
            };

            function bind(e) {
                var t = Array.prototype.slice.call(arguments, 1);
                return function () {
                    return e.apply(null, t)
                }
            }

            function copyObj(e, t, n) {
                for (var o in t || (t = {}), e) !e.hasOwnProperty(o) || !1 === n && t.hasOwnProperty(o) || (t[o] = e[o]);
                return t
            }

            function countColumn(e, t, n, o, i) {
                null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);
                for (var r = o || 0, a = i || 0; ;) {
                    var s = e.indexOf("\t", r);
                    if (s < 0 || t <= s) return a + (t - r);
                    a += s - r, a += n - a % n, r = s + 1
                }
            }

            d ? T = function (e) {
                e.selectionStart = 0, e.selectionEnd = e.value.length
            } : x && (T = function (e) {
                try {
                    e.select()
                } catch (e) {
                }
            });
            var P = function () {
                this.id = null
            };

            function indexOf(e, t) {
                for (var n = 0; n < e.length; ++n) if (e[n] == t) return n;
                return -1
            }

            P.prototype.set = function (e, t) {
                clearTimeout(this.id), this.id = setTimeout(t, e)
            };
            var M = 30, N = {
                toString: function () {
                    return "CodeMirror.Pass"
                }
            }, A = {scroll: !1}, H = {origin: "*mouse"}, E = {origin: "+move"};

            function findColumn(e, t, n) {
                for (var o = 0, i = 0; ;) {
                    var r = e.indexOf("\t", o);
                    -1 == r && (r = e.length);
                    var a = r - o;
                    if (r == e.length || t <= i + a) return o + Math.min(a, t - i);
                    if (i += r - o, o = r + 1, t <= (i += n - i % n)) return o
                }
            }

            var I = [""];

            function spaceStr(e) {
                for (; I.length <= e;) I.push(lst(I) + " ");
                return I[e]
            }

            function lst(e) {
                return e[e.length - 1]
            }

            function map(e, t) {
                for (var n = [], o = 0; o < e.length; o++) n[o] = t(e[o], o);
                return n
            }

            function insertSorted(e, t, n) {
                for (var o = 0, i = n(t); o < e.length && n(e[o]) <= i;) o++;
                e.splice(o, 0, t)
            }

            function nothing() {
            }

            function createObj(e, t) {
                var n;
                return n = Object.create ? Object.create(e) : (nothing.prototype = e, new nothing), t && copyObj(t, n), n
            }

            var D = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;

            function isWordCharBasic(e) {
                return /\w/.test(e) || "" < e && (e.toUpperCase() != e.toLowerCase() || D.test(e))
            }

            function isWordChar(e, t) {
                return t ? !!(-1 < t.source.indexOf("\\w") && isWordCharBasic(e)) || t.test(e) : isWordCharBasic(e)
            }

            function isEmpty(e) {
                for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1;
                return !0
            }

            var O = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;

            function isExtendingChar(e) {
                return 768 <= e.charCodeAt(0) && O.test(e)
            }

            function skipExtendingChars(e, t, n) {
                for (; (n < 0 ? 0 < t : t < e.length) && isExtendingChar(e.charAt(t));) t += n;
                return t
            }

            function findFirst(e, t, n) {
                for (var o = n < t ? -1 : 1; ;) {
                    if (t == n) return t;
                    var i = (t + n) / 2, r = o < 0 ? Math.ceil(i) : Math.floor(i);
                    if (r == t) return e(r) ? t : n;
                    e(r) ? n = r : t = r + o
                }
            }

            function Display(e, t, n) {
                var o = this;
                this.input = n, o.scrollbarFiller = elt("div", null, "CodeMirror-scrollbar-filler"), o.scrollbarFiller.setAttribute("cm-not-content", "true"), o.gutterFiller = elt("div", null, "CodeMirror-gutter-filler"), o.gutterFiller.setAttribute("cm-not-content", "true"), o.lineDiv = eltP("div", null, "CodeMirror-code"), o.selectionDiv = elt("div", null, null, "position: relative; z-index: 1"), o.cursorDiv = elt("div", null, "CodeMirror-cursors"), o.measure = elt("div", null, "CodeMirror-measure"), o.lineMeasure = elt("div", null, "CodeMirror-measure"), o.lineSpace = eltP("div", [o.measure, o.lineMeasure, o.selectionDiv, o.cursorDiv, o.lineDiv], null, "position: relative; outline: none");
                var i = eltP("div", [o.lineSpace], "CodeMirror-lines");
                o.mover = elt("div", [i], null, "position: relative"), o.sizer = elt("div", [o.mover], "CodeMirror-sizer"), o.sizerWidth = null, o.heightForcer = elt("div", null, null, "position: absolute; height: " + M + "px; width: 1px;"), o.gutters = elt("div", null, "CodeMirror-gutters"), o.lineGutter = null, o.scroller = elt("div", [o.sizer, o.heightForcer, o.gutters], "CodeMirror-scroll"), o.scroller.setAttribute("tabIndex", "-1"), o.wrapper = elt("div", [o.scrollbarFiller, o.gutterFiller, o.scroller], "CodeMirror"), x && w < 8 && (o.gutters.style.zIndex = -1, o.scroller.style.paddingRight = 0), y || g && h || (o.scroller.draggable = !0), e && (e.appendChild ? e.appendChild(o.wrapper) : e(o.wrapper)), o.viewFrom = o.viewTo = t.first, o.reportedViewFrom = o.reportedViewTo = t.first, o.view = [], o.renderedView = null, o.externalMeasured = null, o.viewOffset = 0, o.lastWrapHeight = o.lastWrapWidth = 0, o.updateLineNumbers = null, o.nativeBarWidth = o.barHeight = o.barWidth = 0, o.scrollbarsClipped = !1, o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null, o.alignWidgets = !1, o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null, o.maxLine = null, o.maxLineLength = 0, o.maxLineChanged = !1, o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null, o.shift = !1, o.selForContextMenu = null, o.activeTouch = null, n.init(o)
            }

            function getLine(e, t) {
                if ((t -= e.first) < 0 || t >= e.size) throw new Error("There is no line " + (t + e.first) + " in the document.");
                for (var n = e; !n.lines;) for (var o = 0; ; ++o) {
                    var i = n.children[o], r = i.chunkSize();
                    if (t < r) {
                        n = i;
                        break
                    }
                    t -= r
                }
                return n.lines[t]
            }

            function getBetween(e, n, o) {
                var i = [], r = n.line;
                return e.iter(n.line, o.line + 1, function (e) {
                    var t = e.text;
                    r == o.line && (t = t.slice(0, o.ch)), r == n.line && (t = t.slice(n.ch)), i.push(t), ++r
                }), i
            }

            function getLines(e, t, n) {
                var o = [];
                return e.iter(t, n, function (e) {
                    o.push(e.text)
                }), o
            }

            function updateLineHeight(e, t) {
                var n = t - e.height;
                if (n) for (var o = e; o; o = o.parent) o.height += n
            }

            function lineNo(e) {
                if (null == e.parent) return null;
                for (var t = e.parent, n = indexOf(t.lines, e), o = t.parent; o; o = (t = o).parent) for (var i = 0; o.children[i] != t; ++i) n += o.children[i].chunkSize();
                return n + t.first
            }

            function lineAtHeight(e, t) {
                var n = e.first;
                e:do {
                    for (var o = 0; o < e.children.length; ++o) {
                        var i = e.children[o], r = i.height;
                        if (t < r) {
                            e = i;
                            continue e
                        }
                        t -= r, n += i.chunkSize()
                    }
                    return n
                } while (!e.lines);
                for (var a = 0; a < e.lines.length; ++a) {
                    var s = e.lines[a], l = s.height;
                    if (t < l) break;
                    t -= l
                }
                return n + a
            }

            function isLine(e, t) {
                return t >= e.first && t < e.first + e.size
            }

            function lineNumberFor(e, t) {
                return String(e.lineNumberFormatter(t + e.firstLineNumber))
            }

            function Pos(e, t, n) {
                if (void 0 === n && (n = null), !(this instanceof Pos)) return new Pos(e, t, n);
                this.line = e, this.ch = t, this.sticky = n
            }

            function cmp(e, t) {
                return e.line - t.line || e.ch - t.ch
            }

            function equalCursorPos(e, t) {
                return e.sticky == t.sticky && 0 == cmp(e, t)
            }

            function copyPos(e) {
                return Pos(e.line, e.ch)
            }

            function maxPos(e, t) {
                return cmp(e, t) < 0 ? t : e
            }

            function minPos(e, t) {
                return cmp(e, t) < 0 ? e : t
            }

            function clipLine(e, t) {
                return Math.max(e.first, Math.min(t, e.first + e.size - 1))
            }

            function clipPos(e, t) {
                if (t.line < e.first) return Pos(e.first, 0);
                var n, o, i, r = e.first + e.size - 1;
                return t.line > r ? Pos(r, getLine(e, r).text.length) : (o = getLine(e, (n = t).line).text.length, null == (i = n.ch) || o < i ? Pos(n.line, o) : i < 0 ? Pos(n.line, 0) : n)
            }

            function clipPosArray(e, t) {
                for (var n = [], o = 0; o < t.length; o++) n[o] = clipPos(e, t[o]);
                return n
            }

            var F = !1, R = !1;

            function MarkedSpan(e, t, n) {
                this.marker = e, this.from = t, this.to = n
            }

            function getMarkedSpanFor(e, t) {
                if (e) for (var n = 0; n < e.length; ++n) {
                    var o = e[n];
                    if (o.marker == t) return o
                }
            }

            function removeMarkedSpan(e, t) {
                for (var n, o = 0; o < e.length; ++o) e[o] != t && (n || (n = [])).push(e[o]);
                return n
            }

            function stretchSpansOverChange(e, t) {
                if (t.full) return null;
                var n = isLine(e, t.from.line) && getLine(e, t.from.line).markedSpans,
                    o = isLine(e, t.to.line) && getLine(e, t.to.line).markedSpans;
                if (!n && !o) return null;
                var i = t.from.ch, r = t.to.ch, a = 0 == cmp(t.from, t.to), s = function (e, t, n) {
                    var o;
                    if (e) for (var i = 0; i < e.length; ++i) {
                        var r = e[i], a = r.marker, s = null == r.from || (a.inclusiveLeft ? r.from <= t : r.from < t);
                        if (s || r.from == t && "bookmark" == a.type && (!n || !r.marker.insertLeft)) {
                            var l = null == r.to || (a.inclusiveRight ? r.to >= t : r.to > t);
                            (o || (o = [])).push(new MarkedSpan(a, r.from, l ? null : r.to))
                        }
                    }
                    return o
                }(n, i, a), l = function (e, t, n) {
                    var o;
                    if (e) for (var i = 0; i < e.length; ++i) {
                        var r = e[i], a = r.marker, s = null == r.to || (a.inclusiveRight ? r.to >= t : r.to > t);
                        if (s || r.from == t && "bookmark" == a.type && (!n || r.marker.insertLeft)) {
                            var l = null == r.from || (a.inclusiveLeft ? r.from <= t : r.from < t);
                            (o || (o = [])).push(new MarkedSpan(a, l ? null : r.from - t, null == r.to ? null : r.to - t))
                        }
                    }
                    return o
                }(o, r, a), c = 1 == t.text.length, d = lst(t.text).length + (c ? i : 0);
                if (s) for (var u = 0; u < s.length; ++u) {
                    var h = s[u];
                    if (null == h.to) {
                        var p = getMarkedSpanFor(l, h.marker);
                        p ? c && (h.to = null == p.to ? null : p.to + d) : h.to = i
                    }
                }
                if (l) for (var f = 0; f < l.length; ++f) {
                    var g = l[f];
                    if (null != g.to && (g.to += d), null == g.from) {
                        var m = getMarkedSpanFor(s, g.marker);
                        m || (g.from = d, c && (s || (s = [])).push(g))
                    } else g.from += d, c && (s || (s = [])).push(g)
                }
                s && (s = clearEmptySpans(s)), l && l != s && (l = clearEmptySpans(l));
                var v = [s];
                if (!c) {
                    var y, b = t.text.length - 2;
                    if (0 < b && s) for (var C = 0; C < s.length; ++C) null == s[C].to && (y || (y = [])).push(new MarkedSpan(s[C].marker, null, null));
                    for (var x = 0; x < b; ++x) v.push(y);
                    v.push(l)
                }
                return v
            }

            function clearEmptySpans(e) {
                for (var t = 0; t < e.length; ++t) {
                    var n = e[t];
                    null != n.from && n.from == n.to && !1 !== n.marker.clearWhenEmpty && e.splice(t--, 1)
                }
                return e.length ? e : null
            }

            function detachMarkedSpans(e) {
                var t = e.markedSpans;
                if (t) {
                    for (var n = 0; n < t.length; ++n) t[n].marker.detachLine(e);
                    e.markedSpans = null
                }
            }

            function attachMarkedSpans(e, t) {
                if (t) {
                    for (var n = 0; n < t.length; ++n) t[n].marker.attachLine(e);
                    e.markedSpans = t
                }
            }

            function extraLeft(e) {
                return e.inclusiveLeft ? -1 : 0
            }

            function extraRight(e) {
                return e.inclusiveRight ? 1 : 0
            }

            function compareCollapsedMarkers(e, t) {
                var n = e.lines.length - t.lines.length;
                if (0 != n) return n;
                var o = e.find(), i = t.find(), r = cmp(o.from, i.from) || extraLeft(e) - extraLeft(t);
                if (r) return -r;
                var a = cmp(o.to, i.to) || extraRight(e) - extraRight(t);
                return a || t.id - e.id
            }

            function collapsedSpanAtSide(e, t) {
                var n, o = R && e.markedSpans;
                if (o) for (var i = void 0, r = 0; r < o.length; ++r) (i = o[r]).marker.collapsed && null == (t ? i.from : i.to) && (!n || compareCollapsedMarkers(n, i.marker) < 0) && (n = i.marker);
                return n
            }

            function collapsedSpanAtStart(e) {
                return collapsedSpanAtSide(e, !0)
            }

            function collapsedSpanAtEnd(e) {
                return collapsedSpanAtSide(e, !1)
            }

            function collapsedSpanAround(e, t) {
                var n, o = R && e.markedSpans;
                if (o) for (var i = 0; i < o.length; ++i) {
                    var r = o[i];
                    r.marker.collapsed && (null == r.from || r.from < t) && (null == r.to || r.to > t) && (!n || compareCollapsedMarkers(n, r.marker) < 0) && (n = r.marker)
                }
                return n
            }

            function conflictingCollapsedRange(e, t, n, o, i) {
                var r = getLine(e, t), a = R && r.markedSpans;
                if (a) for (var s = 0; s < a.length; ++s) {
                    var l = a[s];
                    if (l.marker.collapsed) {
                        var c = l.marker.find(0), d = cmp(c.from, n) || extraLeft(l.marker) - extraLeft(i),
                            u = cmp(c.to, o) || extraRight(l.marker) - extraRight(i);
                        if (!(0 <= d && u <= 0 || d <= 0 && 0 <= u) && (d <= 0 && (l.marker.inclusiveRight && i.inclusiveLeft ? 0 <= cmp(c.to, n) : 0 < cmp(c.to, n)) || 0 <= d && (l.marker.inclusiveRight && i.inclusiveLeft ? cmp(c.from, o) <= 0 : cmp(c.from, o) < 0))) return !0
                    }
                }
            }

            function visualLine(e) {
                for (var t; t = collapsedSpanAtStart(e);) e = t.find(-1, !0).line;
                return e
            }

            function visualLineNo(e, t) {
                var n = getLine(e, t), o = visualLine(n);
                return n == o ? t : lineNo(o)
            }

            function visualLineEndNo(e, t) {
                if (t > e.lastLine()) return t;
                var n, o = getLine(e, t);
                if (!lineIsHidden(e, o)) return t;
                for (; n = collapsedSpanAtEnd(o);) o = n.find(1, !0).line;
                return lineNo(o) + 1
            }

            function lineIsHidden(e, t) {
                var n = R && t.markedSpans;
                if (n) for (var o = void 0, i = 0; i < n.length; ++i) if ((o = n[i]).marker.collapsed) {
                    if (null == o.from) return !0;
                    if (!o.marker.widgetNode && 0 == o.from && o.marker.inclusiveLeft && lineIsHiddenInner(e, t, o)) return !0
                }
            }

            function lineIsHiddenInner(e, t, n) {
                if (null == n.to) {
                    var o = n.marker.find(1, !0);
                    return lineIsHiddenInner(e, o.line, getMarkedSpanFor(o.line.markedSpans, n.marker))
                }
                if (n.marker.inclusiveRight && n.to == t.text.length) return !0;
                for (var i = void 0, r = 0; r < t.markedSpans.length; ++r) if ((i = t.markedSpans[r]).marker.collapsed && !i.marker.widgetNode && i.from == n.to && (null == i.to || i.to != n.from) && (i.marker.inclusiveLeft || n.marker.inclusiveRight) && lineIsHiddenInner(e, t, i)) return !0
            }

            function heightAtLine(e) {
                e = visualLine(e);
                for (var t = 0, n = e.parent, o = 0; o < n.lines.length; ++o) {
                    var i = n.lines[o];
                    if (i == e) break;
                    t += i.height
                }
                for (var r = n.parent; r; r = (n = r).parent) for (var a = 0; a < r.children.length; ++a) {
                    var s = r.children[a];
                    if (s == n) break;
                    t += s.height
                }
                return t
            }

            function lineLength(e) {
                if (0 == e.height) return 0;
                for (var t, n = e.text.length, o = e; t = collapsedSpanAtStart(o);) {
                    var i = t.find(0, !0);
                    o = i.from.line, n += i.from.ch - i.to.ch
                }
                for (o = e; t = collapsedSpanAtEnd(o);) {
                    var r = t.find(0, !0);
                    n -= o.text.length - r.from.ch, o = r.to.line, n += o.text.length - r.to.ch
                }
                return n
            }

            function findMaxLine(e) {
                var n = e.display, t = e.doc;
                n.maxLine = getLine(t, t.first), n.maxLineLength = lineLength(n.maxLine), n.maxLineChanged = !0, t.iter(function (e) {
                    var t = lineLength(e);
                    t > n.maxLineLength && (n.maxLineLength = t, n.maxLine = e)
                })
            }

            var B = null;

            function getBidiPartAt(e, t, n) {
                var o;
                B = null;
                for (var i = 0; i < e.length; ++i) {
                    var r = e[i];
                    if (r.from < t && r.to > t) return i;
                    r.to == t && (r.from != r.to && "before" == n ? o = i : B = i), r.from == t && (r.from != r.to && "before" != n ? o = i : B = i)
                }
                return null != o ? o : B
            }

            var W = function () {
                var B = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
                    W = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
                var $ = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/, z = /[stwN]/, V = /[LRr]/, U = /[Lb1n]/,
                    K = /[1n]/;

                function BidiSpan(e, t, n) {
                    this.level = e, this.from = t, this.to = n
                }

                return function (e, t) {
                    var n, o = "ltr" == t ? "L" : "R";
                    if (0 == e.length || "ltr" == t && !$.test(e)) return !1;
                    for (var i = e.length, r = [], a = 0; a < i; ++a) r.push((n = e.charCodeAt(a)) <= 247 ? B.charAt(n) : 1424 <= n && n <= 1524 ? "R" : 1536 <= n && n <= 1785 ? W.charAt(n - 1536) : 1774 <= n && n <= 2220 ? "r" : 8192 <= n && n <= 8203 ? "w" : 8204 == n ? "b" : "L");
                    for (var s = 0, l = o; s < i; ++s) {
                        var c = r[s];
                        "m" == c ? r[s] = l : l = c
                    }
                    for (var d = 0, u = o; d < i; ++d) {
                        var h = r[d];
                        "1" == h && "r" == u ? r[d] = "n" : V.test(h) && "r" == (u = h) && (r[d] = "R")
                    }
                    for (var p = 1, f = r[0]; p < i - 1; ++p) {
                        var g = r[p];
                        "+" == g && "1" == f && "1" == r[p + 1] ? r[p] = "1" : "," != g || f != r[p + 1] || "1" != f && "n" != f || (r[p] = f), f = g
                    }
                    for (var m = 0; m < i; ++m) {
                        var v = r[m];
                        if ("," == v) r[m] = "N"; else if ("%" == v) {
                            var y = void 0;
                            for (y = m + 1; y < i && "%" == r[y]; ++y) ;
                            for (var b = m && "!" == r[m - 1] || y < i && "1" == r[y] ? "1" : "N", C = m; C < y; ++C) r[C] = b;
                            m = y - 1
                        }
                    }
                    for (var x = 0, w = o; x < i; ++x) {
                        var k = r[x];
                        "L" == w && "1" == k ? r[x] = "L" : V.test(k) && (w = k)
                    }
                    for (var S = 0; S < i; ++S) if (z.test(r[S])) {
                        var L = void 0;
                        for (L = S + 1; L < i && z.test(r[L]); ++L) ;
                        for (var T = "L" == (S ? r[S - 1] : o), P = "L" == (L < i ? r[L] : o), M = T == P ? T ? "L" : "R" : o, N = S; N < L; ++N) r[N] = M;
                        S = L - 1
                    }
                    for (var A, H = [], E = 0; E < i;) if (U.test(r[E])) {
                        var I = E;
                        for (++E; E < i && U.test(r[E]); ++E) ;
                        H.push(new BidiSpan(0, I, E))
                    } else {
                        var D = E, O = H.length;
                        for (++E; E < i && "L" != r[E]; ++E) ;
                        for (var F = D; F < E;) if (K.test(r[F])) {
                            D < F && H.splice(O, 0, new BidiSpan(1, D, F));
                            var R = F;
                            for (++F; F < E && K.test(r[F]); ++F) ;
                            H.splice(O, 0, new BidiSpan(2, R, F)), D = F
                        } else ++F;
                        D < E && H.splice(O, 0, new BidiSpan(1, D, E))
                    }
                    return "ltr" == t && (1 == H[0].level && (A = e.match(/^\s+/)) && (H[0].from = A[0].length, H.unshift(new BidiSpan(0, 0, A[0].length))), 1 == lst(H).level && (A = e.match(/\s+$/)) && (lst(H).to -= A[0].length, H.push(new BidiSpan(0, i - A[0].length, i)))), "rtl" == t ? H.reverse() : H
                }
            }();

            function getOrder(e, t) {
                var n = e.order;
                return null == n && (n = e.order = W(e.text, t)), n
            }

            var $ = [], z = function (e, t, n) {
                if (e.addEventListener) e.addEventListener(t, n, !1); else if (e.attachEvent) e.attachEvent("on" + t, n); else {
                    var o = e._handlers || (e._handlers = {});
                    o[t] = (o[t] || $).concat(n)
                }
            };

            function getHandlers(e, t) {
                return e._handlers && e._handlers[t] || $
            }

            function off(e, t, n) {
                if (e.removeEventListener) e.removeEventListener(t, n, !1); else if (e.detachEvent) e.detachEvent("on" + t, n); else {
                    var o = e._handlers, i = o && o[t];
                    if (i) {
                        var r = indexOf(i, n);
                        -1 < r && (o[t] = i.slice(0, r).concat(i.slice(r + 1)))
                    }
                }
            }

            function signal(e, t) {
                var n = getHandlers(e, t);
                if (n.length) for (var o = Array.prototype.slice.call(arguments, 2), i = 0; i < n.length; ++i) n[i].apply(null, o)
            }

            function signalDOMEvent(e, t, n) {
                return "string" == typeof t && (t = {
                    type: t, preventDefault: function () {
                        this.defaultPrevented = !0
                    }
                }), signal(e, n || t.type, e, t), e_defaultPrevented(t) || t.codemirrorIgnore
            }

            function signalCursorActivity(e) {
                var t = e._handlers && e._handlers.cursorActivity;
                if (t) for (var n = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), o = 0; o < t.length; ++o) -1 == indexOf(n, t[o]) && n.push(t[o])
            }

            function hasHandler(e, t) {
                return 0 < getHandlers(e, t).length
            }

            function eventMixin(e) {
                e.prototype.on = function (e, t) {
                    z(this, e, t)
                }, e.prototype.off = function (e, t) {
                    off(this, e, t)
                }
            }

            function e_preventDefault(e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1
            }

            function e_stopPropagation(e) {
                e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
            }

            function e_defaultPrevented(e) {
                return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue
            }

            function e_stop(e) {
                e_preventDefault(e), e_stopPropagation(e)
            }

            function e_target(e) {
                return e.target || e.srcElement
            }

            function e_button(e) {
                var t = e.which;
                return null == t && (1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)), b && e.ctrlKey && 1 == t && (t = 3), t
            }

            var V, U, K = function () {
                if (x && w < 9) return !1;
                var e = elt("div");
                return "draggable" in e || "dragDrop" in e
            }();

            function zeroWidthElement(e) {
                if (null == V) {
                    var t = elt("span", "​");
                    removeChildrenAndAdd(e, elt("span", [t, document.createTextNode("x")])), 0 != e.firstChild.offsetHeight && (V = t.offsetWidth <= 1 && 2 < t.offsetHeight && !(x && w < 8))
                }
                var n = V ? elt("span", "​") : elt("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
                return n.setAttribute("cm-text", ""), n
            }

            function hasBadBidiRects(e) {
                if (null != U) return U;
                var t = removeChildrenAndAdd(e, document.createTextNode("AخA")), n = S(t, 0, 1).getBoundingClientRect(),
                    o = S(t, 1, 2).getBoundingClientRect();
                return removeChildren(e), !(!n || n.left == n.right) && (U = o.right - n.right < 3)
            }

            var j, G = 3 != "\n\nb".split(/\n/).length ? function (e) {
                    for (var t = 0, n = [], o = e.length; t <= o;) {
                        var i = e.indexOf("\n", t);
                        -1 == i && (i = e.length);
                        var r = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i), a = r.indexOf("\r");
                        -1 != a ? (n.push(r.slice(0, a)), t += a + 1) : (n.push(r), t = i + 1)
                    }
                    return n
                } : function (e) {
                    return e.split(/\r\n?|\n/)
                }, _ = window.getSelection ? function (e) {
                    try {
                        return e.selectionStart != e.selectionEnd
                    } catch (e) {
                        return !1
                    }
                } : function (e) {
                    var t;
                    try {
                        t = e.ownerDocument.selection.createRange()
                    } catch (e) {
                    }
                    return !(!t || t.parentElement() != e) && 0 != t.compareEndPoints("StartToEnd", t)
                }, q = "oncopy" in (j = elt("div")) || (j.setAttribute("oncopy", "return;"), "function" == typeof j.oncopy),
                X = null, Y = {}, Z = {};

            function resolveMode(e) {
                if ("string" == typeof e && Z.hasOwnProperty(e)) e = Z[e]; else if (e && "string" == typeof e.name && Z.hasOwnProperty(e.name)) {
                    var t = Z[e.name];
                    "string" == typeof t && (t = {name: t}), (e = createObj(t, e)).name = t.name
                } else {
                    if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e)) return resolveMode("application/xml");
                    if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e)) return resolveMode("application/json")
                }
                return "string" == typeof e ? {name: e} : e || {name: "null"}
            }

            function getMode(e, t) {
                t = resolveMode(t);
                var n = Y[t.name];
                if (!n) return getMode(e, "text/plain");
                var o = n(e, t);
                if (J.hasOwnProperty(t.name)) {
                    var i = J[t.name];
                    for (var r in i) i.hasOwnProperty(r) && (o.hasOwnProperty(r) && (o["_" + r] = o[r]), o[r] = i[r])
                }
                if (o.name = t.name, t.helperType && (o.helperType = t.helperType), t.modeProps) for (var a in t.modeProps) o[a] = t.modeProps[a];
                return o
            }

            var J = {};

            function extendMode(e, t) {
                var n = J.hasOwnProperty(e) ? J[e] : J[e] = {};
                copyObj(t, n)
            }

            function copyState(e, t) {
                if (!0 === t) return t;
                if (e.copyState) return e.copyState(t);
                var n = {};
                for (var o in t) {
                    var i = t[o];
                    i instanceof Array && (i = i.concat([])), n[o] = i
                }
                return n
            }

            function innerMode(e, t) {
                for (var n; e.innerMode && (n = e.innerMode(t)) && n.mode != e;) t = n.state, e = n.mode;
                return n || {mode: e, state: t}
            }

            function startState(e, t, n) {
                return !e.startState || e.startState(t, n)
            }

            var Q = function (e, t, n) {
                this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, this.lineOracle = n
            };
            Q.prototype.eol = function () {
                return this.pos >= this.string.length
            }, Q.prototype.sol = function () {
                return this.pos == this.lineStart
            }, Q.prototype.peek = function () {
                return this.string.charAt(this.pos) || void 0
            }, Q.prototype.next = function () {
                if (this.pos < this.string.length) return this.string.charAt(this.pos++)
            }, Q.prototype.eat = function (e) {
                var t = this.string.charAt(this.pos);
                if ("string" == typeof e ? t == e : t && (e.test ? e.test(t) : e(t))) return ++this.pos, t
            }, Q.prototype.eatWhile = function (e) {
                for (var t = this.pos; this.eat(e);) ;
                return this.pos > t
            }, Q.prototype.eatSpace = function () {
                for (var e = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos));) ++this.pos;
                return this.pos > e
            }, Q.prototype.skipToEnd = function () {
                this.pos = this.string.length
            }, Q.prototype.skipTo = function (e) {
                var t = this.string.indexOf(e, this.pos);
                if (-1 < t) return this.pos = t, !0
            }, Q.prototype.backUp = function (e) {
                this.pos -= e
            }, Q.prototype.column = function () {
                return this.lastColumnPos < this.start && (this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0)
            }, Q.prototype.indentation = function () {
                return countColumn(this.string, null, this.tabSize) - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0)
            }, Q.prototype.match = function (e, t, n) {
                if ("string" != typeof e) {
                    var o = this.string.slice(this.pos).match(e);
                    return o && 0 < o.index ? null : (o && !1 !== t && (this.pos += o[0].length), o)
                }
                var i = function (e) {
                    return n ? e.toLowerCase() : e
                }, r = this.string.substr(this.pos, e.length);
                if (i(r) == i(e)) return !1 !== t && (this.pos += e.length), !0
            }, Q.prototype.current = function () {
                return this.string.slice(this.start, this.pos)
            }, Q.prototype.hideFirstChars = function (e, t) {
                this.lineStart += e;
                try {
                    return t()
                } finally {
                    this.lineStart -= e
                }
            }, Q.prototype.lookAhead = function (e) {
                var t = this.lineOracle;
                return t && t.lookAhead(e)
            }, Q.prototype.baseToken = function () {
                var e = this.lineOracle;
                return e && e.baseToken(this.pos)
            };
            var ee = function (e, t) {
                this.state = e, this.lookAhead = t
            }, te = function (e, t, n, o) {
                this.state = t, this.doc = e, this.line = n, this.maxLookAhead = o || 0, this.baseTokens = null, this.baseTokenPos = 1
            };

            function highlightLine(t, n, o, e) {
                var l = [t.state.modeGen], i = {};
                runMode(t, n.text, t.doc.mode, o, function (e, t) {
                    return l.push(e, t)
                }, i, e);
                for (var c = o.state, r = function (e) {
                    o.baseTokens = l;
                    var r = t.state.overlays[e], a = 1, s = 0;
                    o.state = !0, runMode(t, n.text, r.mode, o, function (e, t) {
                        for (var n = a; s < e;) {
                            var o = l[a];
                            e < o && l.splice(a, 1, e, l[a + 1], o), a += 2, s = Math.min(e, o)
                        }
                        if (t) if (r.opaque) l.splice(n, a - n, e, "overlay " + t), a = n + 2; else for (; n < a; n += 2) {
                            var i = l[n + 1];
                            l[n + 1] = (i ? i + " " : "") + "overlay " + t
                        }
                    }, i), o.state = c, o.baseTokens = null, o.baseTokenPos = 1
                }, a = 0; a < t.state.overlays.length; ++a) r(a);
                return {styles: l, classes: i.bgClass || i.textClass ? i : null}
            }

            function getLineStyles(e, t, n) {
                if (!t.styles || t.styles[0] != e.state.modeGen) {
                    var o = getContextBefore(e, lineNo(t)),
                        i = t.text.length > e.options.maxHighlightLength && copyState(e.doc.mode, o.state),
                        r = highlightLine(e, t, o);
                    i && (o.state = i), t.stateAfter = o.save(!i), t.styles = r.styles, r.classes ? t.styleClasses = r.classes : t.styleClasses && (t.styleClasses = null), n === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier))
                }
                return t.styles
            }

            function getContextBefore(n, o, e) {
                var t = n.doc, i = n.display;
                if (!t.mode.startState) return new te(t, !0, o);
                var r = function (e, t, n) {
                        for (var o, i, r = e.doc, a = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), s = t; a < s; --s) {
                            if (s <= r.first) return r.first;
                            var l = getLine(r, s - 1), c = l.stateAfter;
                            if (c && (!n || s + (c instanceof ee ? c.lookAhead : 0) <= r.modeFrontier)) return s;
                            var d = countColumn(l.text, null, e.options.tabSize);
                            (null == i || d < o) && (i = s - 1, o = d)
                        }
                        return i
                    }(n, o, e), a = r > t.first && getLine(t, r - 1).stateAfter,
                    s = a ? te.fromSaved(t, a, r) : new te(t, startState(t.mode), r);
                return t.iter(r, o, function (e) {
                    processLine(n, e.text, s);
                    var t = s.line;
                    e.stateAfter = t == o - 1 || t % 5 == 0 || t >= i.viewFrom && t < i.viewTo ? s.save() : null, s.nextLine()
                }), e && (t.modeFrontier = s.line), s
            }

            function processLine(e, t, n, o) {
                var i = e.doc.mode, r = new Q(t, e.options.tabSize, n);
                for (r.start = r.pos = o || 0, "" == t && callBlankLine(i, n.state); !r.eol();) readToken(i, r, n.state), r.start = r.pos
            }

            function callBlankLine(e, t) {
                if (e.blankLine) return e.blankLine(t);
                if (e.innerMode) {
                    var n = innerMode(e, t);
                    return n.mode.blankLine ? n.mode.blankLine(n.state) : void 0
                }
            }

            function readToken(e, t, n, o) {
                for (var i = 0; i < 10; i++) {
                    o && (o[0] = innerMode(e, n).mode);
                    var r = e.token(t, n);
                    if (t.pos > t.start) return r
                }
                throw new Error("Mode " + e.name + " failed to advance stream.")
            }

            te.prototype.lookAhead = function (e) {
                var t = this.doc.getLine(this.line + e);
                return null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t
            }, te.prototype.baseToken = function (e) {
                if (!this.baseTokens) return null;
                for (; this.baseTokens[this.baseTokenPos] <= e;) this.baseTokenPos += 2;
                var t = this.baseTokens[this.baseTokenPos + 1];
                return {type: t && t.replace(/( |^)overlay .*/, ""), size: this.baseTokens[this.baseTokenPos] - e}
            }, te.prototype.nextLine = function () {
                this.line++, 0 < this.maxLookAhead && this.maxLookAhead--
            }, te.fromSaved = function (e, t, n) {
                return t instanceof ee ? new te(e, copyState(e.mode, t.state), n, t.lookAhead) : new te(e, copyState(e.mode, t), n)
            }, te.prototype.save = function (e) {
                var t = !1 !== e ? copyState(this.doc.mode, this.state) : this.state;
                return 0 < this.maxLookAhead ? new ee(t, this.maxLookAhead) : t
            };
            var ne = function (e, t, n) {
                this.start = e.start, this.end = e.pos, this.string = e.current(), this.type = t || null, this.state = n
            };

            function takeToken(e, t, n, o) {
                var i, r = e.doc, a = r.mode;
                t = clipPos(r, t);
                var s, l = getLine(r, t.line), c = getContextBefore(e, t.line, n),
                    d = new Q(l.text, e.options.tabSize, c);
                for (o && (s = []); (o || d.pos < t.ch) && !d.eol();) d.start = d.pos, i = readToken(a, d, c.state), o && s.push(new ne(d, i, copyState(r.mode, c.state)));
                return o ? s : new ne(d, i, c.state)
            }

            function extractLineClasses(e, t) {
                if (e) for (; ;) {
                    var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
                    if (!n) break;
                    e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
                    var o = n[1] ? "bgClass" : "textClass";
                    null == t[o] ? t[o] = n[2] : new RegExp("(?:^|s)" + n[2] + "(?:$|s)").test(t[o]) || (t[o] += " " + n[2])
                }
                return e
            }

            function runMode(e, t, n, o, i, r, a) {
                var s = n.flattenSpans;
                null == s && (s = e.options.flattenSpans);
                var l, c = 0, d = null, u = new Q(t, e.options.tabSize, o), h = e.options.addModeClass && [null];
                for ("" == t && extractLineClasses(callBlankLine(n, o.state), r); !u.eol();) {
                    if (l = u.pos > e.options.maxHighlightLength ? (s = !1, a && processLine(e, t, o, u.pos), u.pos = t.length, null) : extractLineClasses(readToken(n, u, o.state, h), r), h) {
                        var p = h[0].name;
                        p && (l = "m-" + (l ? p + " " + l : p))
                    }
                    if (!s || d != l) {
                        for (; c < u.start;) c = Math.min(u.start, c + 5e3), i(c, d);
                        d = l
                    }
                    u.start = u.pos
                }
                for (; c < u.pos;) {
                    var f = Math.min(u.pos, c + 5e3);
                    i(f, d), c = f
                }
            }

            var oe = function (e, t, n) {
                this.text = e, attachMarkedSpans(this, t), this.height = n ? n(this) : 1
            };
            oe.prototype.lineNo = function () {
                return lineNo(this)
            }, eventMixin(oe);
            var ie = {}, re = {};

            function interpretTokenStyle(e, t) {
                if (!e || /^\s*$/.test(e)) return null;
                var n = t.addModeClass ? re : ie;
                return n[e] || (n[e] = e.replace(/\S+/g, "cm-$&"))
            }

            function buildLineContent(e, t) {
                var n = eltP("span", null, null, y ? "padding-right: .1px" : null), o = {
                    pre: eltP("pre", [n], "CodeMirror-line"),
                    content: n,
                    col: 0,
                    pos: 0,
                    cm: e,
                    trailingSpace: !1,
                    splitSpaces: e.getOption("lineWrapping")
                };
                t.measure = {};
                for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
                    var r = i ? t.rest[i - 1] : t.line, a = void 0;
                    o.pos = 0, o.addToken = buildToken, hasBadBidiRects(e.display.measure) && (a = getOrder(r, e.doc.direction)) && (o.addToken = buildTokenBadBidi(o.addToken, a)), o.map = [];
                    var s = t != e.display.externalMeasured && lineNo(r);
                    insertLineContent(r, o, getLineStyles(e, r, s)), r.styleClasses && (r.styleClasses.bgClass && (o.bgClass = joinClasses(r.styleClasses.bgClass, o.bgClass || "")), r.styleClasses.textClass && (o.textClass = joinClasses(r.styleClasses.textClass, o.textClass || ""))), 0 == o.map.length && o.map.push(0, 0, o.content.appendChild(zeroWidthElement(e.display.measure))), 0 == i ? (t.measure.map = o.map, t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(o.map), (t.measure.caches || (t.measure.caches = [])).push({}))
                }
                if (y) {
                    var l = o.content.lastChild;
                    (/\bcm-tab\b/.test(l.className) || l.querySelector && l.querySelector(".cm-tab")) && (o.content.className = "cm-tab-wrap-hack")
                }
                return signal(e, "renderLine", e, t.line, o.pre), o.pre.className && (o.textClass = joinClasses(o.pre.className, o.textClass || "")), o
            }

            function defaultSpecialCharPlaceholder(e) {
                var t = elt("span", "•", "cm-invalidchar");
                return t.title = "\\u" + e.charCodeAt(0).toString(16), t.setAttribute("aria-label", t.title), t
            }

            function buildToken(e, t, n, o, i, r, a) {
                if (t) {
                    var s, l = e.splitSpaces ? function (e, t) {
                        if (1 < e.length && !/  /.test(e)) return e;
                        for (var n = t, o = "", i = 0; i < e.length; i++) {
                            var r = e.charAt(i);
                            " " != r || !n || i != e.length - 1 && 32 != e.charCodeAt(i + 1) || (r = " "), o += r, n = " " == r
                        }
                        return o
                    }(t, e.trailingSpace) : t, c = e.cm.state.specialChars, d = !1;
                    if (c.test(t)) {
                        s = document.createDocumentFragment();
                        for (var u = 0; ;) {
                            c.lastIndex = u;
                            var h = c.exec(t), p = h ? h.index - u : t.length - u;
                            if (p) {
                                var f = document.createTextNode(l.slice(u, u + p));
                                x && w < 9 ? s.appendChild(elt("span", [f])) : s.appendChild(f), e.map.push(e.pos, e.pos + p, f), e.col += p, e.pos += p
                            }
                            if (!h) break;
                            u += p + 1;
                            var g = void 0;
                            if ("\t" == h[0]) {
                                var m = e.cm.options.tabSize, v = m - e.col % m;
                                (g = s.appendChild(elt("span", spaceStr(v), "cm-tab"))).setAttribute("role", "presentation"), g.setAttribute("cm-text", "\t"), e.col += v
                            } else "\r" == h[0] || "\n" == h[0] ? (g = s.appendChild(elt("span", "\r" == h[0] ? "␍" : "␤", "cm-invalidchar"))).setAttribute("cm-text", h[0]) : ((g = e.cm.options.specialCharPlaceholder(h[0])).setAttribute("cm-text", h[0]), x && w < 9 ? s.appendChild(elt("span", [g])) : s.appendChild(g)), e.col += 1;
                            e.map.push(e.pos, e.pos + 1, g), e.pos++
                        }
                    } else e.col += t.length, s = document.createTextNode(l), e.map.push(e.pos, e.pos + t.length, s), x && w < 9 && (d = !0), e.pos += t.length;
                    if (e.trailingSpace = 32 == l.charCodeAt(t.length - 1), n || o || i || d || r) {
                        var y = n || "";
                        o && (y += o), i && (y += i);
                        var b = elt("span", [s], y, r);
                        if (a) for (var C in a) a.hasOwnProperty(C) && "style" != C && "class" != C && b.setAttribute(C, a[C]);
                        return e.content.appendChild(b)
                    }
                    e.content.appendChild(s)
                }
            }

            function buildTokenBadBidi(u, h) {
                return function (e, t, n, o, i, r, a) {
                    n = n ? n + " cm-force-border" : "cm-force-border";
                    for (var s = e.pos, l = s + t.length; ;) {
                        for (var c = void 0, d = 0; d < h.length && !((c = h[d]).to > s && c.from <= s); d++) ;
                        if (c.to >= l) return u(e, t, n, o, i, r, a);
                        u(e, t.slice(0, c.to - s), n, o, null, r, a), o = null, t = t.slice(c.to - s), s = c.to
                    }
                }
            }

            function buildCollapsedSpan(e, t, n, o) {
                var i = !o && n.widgetNode;
                i && e.map.push(e.pos, e.pos + t, i), !o && e.cm.display.input.needsContentAttribute && (i || (i = e.content.appendChild(document.createElement("span"))), i.setAttribute("cm-marker", n.id)), i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)), e.pos += t, e.trailingSpace = !1
            }

            function insertLineContent(e, t, n) {
                var o = e.markedSpans, i = e.text, r = 0;
                if (o) for (var a, s, l, c, d, u, h, p = i.length, f = 0, g = 1, m = "", v = 0; ;) {
                    if (v == f) {
                        l = c = d = s = "", u = h = null, v = 1 / 0;
                        for (var y = [], b = void 0, C = 0; C < o.length; ++C) {
                            var x = o[C], w = x.marker;
                            if ("bookmark" == w.type && x.from == f && w.widgetNode) y.push(w); else if (x.from <= f && (null == x.to || x.to > f || w.collapsed && x.to == f && x.from == f)) {
                                if (null != x.to && x.to != f && v > x.to && (v = x.to, c = ""), w.className && (l += " " + w.className), w.css && (s = (s ? s + ";" : "") + w.css), w.startStyle && x.from == f && (d += " " + w.startStyle), w.endStyle && x.to == v && (b || (b = [])).push(w.endStyle, x.to), w.title && ((h || (h = {})).title = w.title), w.attributes) for (var k in w.attributes) (h || (h = {}))[k] = w.attributes[k];
                                w.collapsed && (!u || compareCollapsedMarkers(u.marker, w) < 0) && (u = x)
                            } else x.from > f && v > x.from && (v = x.from)
                        }
                        if (b) for (var S = 0; S < b.length; S += 2) b[S + 1] == v && (c += " " + b[S]);
                        if (!u || u.from == f) for (var L = 0; L < y.length; ++L) buildCollapsedSpan(t, 0, y[L]);
                        if (u && (u.from || 0) == f) {
                            if (buildCollapsedSpan(t, (null == u.to ? p + 1 : u.to) - f, u.marker, null == u.from), null == u.to) return;
                            u.to == f && (u = !1)
                        }
                    }
                    if (p <= f) break;
                    for (var T = Math.min(p, v); ;) {
                        if (m) {
                            var P = f + m.length;
                            if (!u) {
                                var M = T < P ? m.slice(0, T - f) : m;
                                t.addToken(t, M, a ? a + l : l, d, f + M.length == v ? c : "", s, h)
                            }
                            if (T <= P) {
                                m = m.slice(T - f), f = T;
                                break
                            }
                            f = P, d = ""
                        }
                        m = i.slice(r, r = n[g++]), a = interpretTokenStyle(n[g++], t.cm.options)
                    }
                } else for (var N = 1; N < n.length; N += 2) t.addToken(t, i.slice(r, r = n[N]), interpretTokenStyle(n[N + 1], t.cm.options))
            }

            function LineView(e, t, n) {
                this.line = t, this.rest = function (e) {
                    for (var t, n; t = collapsedSpanAtEnd(e);) e = t.find(1, !0).line, (n || (n = [])).push(e);
                    return n
                }(t), this.size = this.rest ? lineNo(lst(this.rest)) - n + 1 : 1, this.node = this.text = null, this.hidden = lineIsHidden(e, t)
            }

            function buildViewArray(e, t, n) {
                for (var o, i = [], r = t; r < n; r = o) {
                    var a = new LineView(e.doc, getLine(e.doc, r), r);
                    o = r + a.size, i.push(a)
                }
                return i
            }

            var ae = null;

            function fireCallbacksForOps(e) {
                var t = e.delayedCallbacks, n = 0;
                do {
                    for (; n < t.length; n++) t[n].call(null);
                    for (var o = 0; o < e.ops.length; o++) {
                        var i = e.ops[o];
                        if (i.cursorActivityHandlers) for (; i.cursorActivityCalled < i.cursorActivityHandlers.length;) i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm)
                    }
                } while (n < t.length)
            }

            var se = null;

            function signalLater(e, t) {
                var n = getHandlers(e, t);
                if (n.length) {
                    var o, i = Array.prototype.slice.call(arguments, 2);
                    ae ? o = ae.delayedCallbacks : se ? o = se : (o = se = [], setTimeout(fireOrphanDelayed, 0));
                    for (var r = function (e) {
                        o.push(function () {
                            return n[e].apply(null, i)
                        })
                    }, a = 0; a < n.length; ++a) r(a)
                }
            }

            function fireOrphanDelayed() {
                var e = se;
                se = null;
                for (var t = 0; t < e.length; ++t) e[t]()
            }

            function updateLineForChanges(e, t, n, o) {
                for (var i = 0; i < t.changes.length; i++) {
                    var r = t.changes[i];
                    "text" == r ? (a = e, void 0, l = (s = t).text.className, c = getLineContent(a, s), s.text == s.node && (s.node = c.pre), s.text.parentNode.replaceChild(c.pre, s.text), s.text = c.pre, c.bgClass != s.bgClass || c.textClass != s.textClass ? (s.bgClass = c.bgClass, s.textClass = c.textClass, updateLineClasses(a, s)) : l && (s.text.className = l)) : "gutter" == r ? updateLineGutter(e, t, n, o) : "class" == r ? updateLineClasses(e, t) : "widget" == r && updateLineWidgets(e, t, o)
                }
                var a, s, l, c;
                t.changes = null
            }

            function ensureLineWrapped(e) {
                return e.node == e.text && (e.node = elt("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), x && w < 8 && (e.node.style.zIndex = 2)), e.node
            }

            function getLineContent(e, t) {
                var n = e.display.externalMeasured;
                return n && n.line == t.line ? (e.display.externalMeasured = null, t.measure = n.measure, n.built) : buildLineContent(e, t)
            }

            function updateLineClasses(e, t) {
                !function (e, t) {
                    var n = t.bgClass ? t.bgClass + " " + (t.line.bgClass || "") : t.line.bgClass;
                    if (n && (n += " CodeMirror-linebackground"), t.background) n ? t.background.className = n : (t.background.parentNode.removeChild(t.background), t.background = null); else if (n) {
                        var o = ensureLineWrapped(t);
                        t.background = o.insertBefore(elt("div", null, n), o.firstChild), e.display.input.setUneditable(t.background)
                    }
                }(e, t), t.line.wrapClass ? ensureLineWrapped(t).className = t.line.wrapClass : t.node != t.text && (t.node.className = "");
                var n = t.textClass ? t.textClass + " " + (t.line.textClass || "") : t.line.textClass;
                t.text.className = n || ""
            }

            function updateLineGutter(e, t, n, o) {
                if (t.gutter && (t.node.removeChild(t.gutter), t.gutter = null), t.gutterBackground && (t.node.removeChild(t.gutterBackground), t.gutterBackground = null), t.line.gutterClass) {
                    var i = ensureLineWrapped(t);
                    t.gutterBackground = elt("div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + (e.options.fixedGutter ? o.fixedPos : -o.gutterTotalWidth) + "px; width: " + o.gutterTotalWidth + "px"), e.display.input.setUneditable(t.gutterBackground), i.insertBefore(t.gutterBackground, t.text)
                }
                var r = t.line.gutterMarkers;
                if (e.options.lineNumbers || r) {
                    var a = ensureLineWrapped(t),
                        s = t.gutter = elt("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? o.fixedPos : -o.gutterTotalWidth) + "px");
                    if (e.display.input.setUneditable(s), a.insertBefore(s, t.text), t.line.gutterClass && (s.className += " " + t.line.gutterClass), !e.options.lineNumbers || r && r["CodeMirror-linenumbers"] || (t.lineNumber = s.appendChild(elt("div", lineNumberFor(e.options, n), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + o.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))), r) for (var l = 0; l < e.options.gutters.length; ++l) {
                        var c = e.options.gutters[l], d = r.hasOwnProperty(c) && r[c];
                        d && s.appendChild(elt("div", [d], "CodeMirror-gutter-elt", "left: " + o.gutterLeft[c] + "px; width: " + o.gutterWidth[c] + "px"))
                    }
                }
            }

            function updateLineWidgets(e, t, n) {
                t.alignable && (t.alignable = null);
                for (var o = t.node.firstChild, i = void 0; o; o = i) i = o.nextSibling, "CodeMirror-linewidget" == o.className && t.node.removeChild(o);
                insertLineWidgets(e, t, n)
            }

            function insertLineWidgets(e, t, n) {
                if (insertLineWidgetsFor(e, t.line, t, n, !0), t.rest) for (var o = 0; o < t.rest.length; o++) insertLineWidgetsFor(e, t.rest[o], t, n, !1)
            }

            function insertLineWidgetsFor(e, t, n, o, i) {
                if (t.widgets) for (var r = ensureLineWrapped(n), a = 0, s = t.widgets; a < s.length; ++a) {
                    var l = s[a], c = elt("div", [l.node], "CodeMirror-linewidget");
                    l.handleMouseEvents || c.setAttribute("cm-ignore-events", "true"), positionLineWidget(l, c, n, o), e.display.input.setUneditable(c), i && l.above ? r.insertBefore(c, n.gutter || n.text) : r.appendChild(c), signalLater(l, "redraw")
                }
            }

            function positionLineWidget(e, t, n, o) {
                if (e.noHScroll) {
                    (n.alignable || (n.alignable = [])).push(t);
                    var i = o.wrapperWidth;
                    t.style.left = o.fixedPos + "px", e.coverGutter || (i -= o.gutterTotalWidth, t.style.paddingLeft = o.gutterTotalWidth + "px"), t.style.width = i + "px"
                }
                e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -o.gutterTotalWidth + "px"))
            }

            function widgetHeight(e) {
                if (null != e.height) return e.height;
                var t = e.doc.cm;
                if (!t) return 0;
                if (!contains(document.body, e.node)) {
                    var n = "position: relative;";
                    e.coverGutter && (n += "margin-left: -" + t.display.gutters.offsetWidth + "px;"), e.noHScroll && (n += "width: " + t.display.wrapper.clientWidth + "px;"), removeChildrenAndAdd(t.display.measure, elt("div", [e.node], null, n))
                }
                return e.height = e.node.parentNode.offsetHeight
            }

            function eventInWidget(e, t) {
                for (var n = e_target(t); n != e.wrapper; n = n.parentNode) if (!n || 1 == n.nodeType && "true" == n.getAttribute("cm-ignore-events") || n.parentNode == e.sizer && n != e.mover) return !0
            }

            function paddingTop(e) {
                return e.lineSpace.offsetTop
            }

            function paddingVert(e) {
                return e.mover.offsetHeight - e.lineSpace.offsetHeight
            }

            function paddingH(e) {
                if (e.cachedPaddingH) return e.cachedPaddingH;
                var t = removeChildrenAndAdd(e.measure, elt("pre", "x")),
                    n = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
                    o = {left: parseInt(n.paddingLeft), right: parseInt(n.paddingRight)};
                return isNaN(o.left) || isNaN(o.right) || (e.cachedPaddingH = o), o
            }

            function scrollGap(e) {
                return M - e.display.nativeBarWidth
            }

            function displayWidth(e) {
                return e.display.scroller.clientWidth - scrollGap(e) - e.display.barWidth
            }

            function displayHeight(e) {
                return e.display.scroller.clientHeight - scrollGap(e) - e.display.barHeight
            }

            function mapFromLineView(e, t, n) {
                if (e.line == t) return {map: e.measure.map, cache: e.measure.cache};
                for (var o = 0; o < e.rest.length; o++) if (e.rest[o] == t) return {
                    map: e.measure.maps[o],
                    cache: e.measure.caches[o]
                };
                for (var i = 0; i < e.rest.length; i++) if (lineNo(e.rest[i]) > n) return {
                    map: e.measure.maps[i],
                    cache: e.measure.caches[i],
                    before: !0
                }
            }

            function measureChar(e, t, n, o) {
                return measureCharPrepared(e, prepareMeasureForLine(e, t), n, o)
            }

            function findViewForLine(e, t) {
                if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[findViewIndex(e, t)];
                var n = e.display.externalMeasured;
                return n && t >= n.lineN && t < n.lineN + n.size ? n : void 0
            }

            function prepareMeasureForLine(e, t) {
                var n = lineNo(t), o = findViewForLine(e, n);
                o && !o.text ? o = null : o && o.changes && (updateLineForChanges(e, o, n, getDimensions(e)), e.curOp.forceUpdate = !0), o || (o = function (e, t) {
                    var n = lineNo(t = visualLine(t)), o = e.display.externalMeasured = new LineView(e.doc, t, n);
                    o.lineN = n;
                    var i = o.built = buildLineContent(e, o);
                    return o.text = i.pre, removeChildrenAndAdd(e.display.lineMeasure, i.pre), o
                }(e, t));
                var i = mapFromLineView(o, t, n);
                return {line: t, view: o, rect: null, map: i.map, cache: i.cache, before: i.before, hasHeights: !1}
            }

            function measureCharPrepared(e, t, n, o, i) {
                t.before && (n = -1);
                var r, a = n + (o || "");
                return t.cache.hasOwnProperty(a) ? r = t.cache[a] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()), t.hasHeights || (function (e, t, n) {
                    var o = e.options.lineWrapping, i = o && displayWidth(e);
                    if (!t.measure.heights || o && t.measure.width != i) {
                        var r = t.measure.heights = [];
                        if (o) {
                            t.measure.width = i;
                            for (var a = t.text.firstChild.getClientRects(), s = 0; s < a.length - 1; s++) {
                                var l = a[s], c = a[s + 1];
                                2 < Math.abs(l.bottom - c.bottom) && r.push((l.bottom + c.top) / 2 - n.top)
                            }
                        }
                        r.push(n.bottom - n.top)
                    }
                }(e, t.view, t.rect), t.hasHeights = !0), (r = function (e, t, n, o) {
                    var i, r = nodeAndOffsetInLineMap(t.map, n, o), a = r.node, s = r.start, l = r.end, c = r.collapse;
                    if (3 == a.nodeType) {
                        for (var d = 0; d < 4; d++) {
                            for (; s && isExtendingChar(t.line.text.charAt(r.coverStart + s));) --s;
                            for (; r.coverStart + l < r.coverEnd && isExtendingChar(t.line.text.charAt(r.coverStart + l));) ++l;
                            if ((i = x && w < 9 && 0 == s && l == r.coverEnd - r.coverStart ? a.parentNode.getBoundingClientRect() : getUsefulRect(S(a, s, l).getClientRects(), o)).left || i.right || 0 == s) break;
                            l = s, s -= 1, c = "right"
                        }
                        x && w < 11 && (i = function (e, t) {
                            if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !function (e) {
                                if (null != X) return X;
                                var t = removeChildrenAndAdd(e, elt("span", "x")), n = t.getBoundingClientRect(),
                                    o = S(t, 0, 1).getBoundingClientRect();
                                return X = 1 < Math.abs(n.left - o.left)
                            }(e)) return t;
                            var n = screen.logicalXDPI / screen.deviceXDPI, o = screen.logicalYDPI / screen.deviceYDPI;
                            return {left: t.left * n, right: t.right * n, top: t.top * o, bottom: t.bottom * o}
                        }(e.display.measure, i))
                    } else {
                        var u;
                        0 < s && (c = o = "right"), i = e.options.lineWrapping && 1 < (u = a.getClientRects()).length ? u["right" == o ? u.length - 1 : 0] : a.getBoundingClientRect()
                    }
                    if (x && w < 9 && !s && (!i || !i.left && !i.right)) {
                        var h = a.parentNode.getClientRects()[0];
                        i = h ? {left: h.left, right: h.left + charWidth(e.display), top: h.top, bottom: h.bottom} : ce
                    }
                    for (var p = i.top - t.rect.top, f = i.bottom - t.rect.top, g = (p + f) / 2, m = t.view.measure.heights, v = 0; v < m.length - 1 && !(g < m[v]); v++) ;
                    var y = v ? m[v - 1] : 0, b = m[v], C = {
                        left: ("right" == c ? i.right : i.left) - t.rect.left,
                        right: ("left" == c ? i.left : i.right) - t.rect.left,
                        top: y,
                        bottom: b
                    };
                    return i.left || i.right || (C.bogus = !0), e.options.singleCursorHeightPerLine || (C.rtop = p, C.rbottom = f), C
                }(e, t, n, o)).bogus || (t.cache[a] = r)), {
                    left: r.left,
                    right: r.right,
                    top: i ? r.rtop : r.top,
                    bottom: i ? r.rbottom : r.bottom
                }
            }

            var le, ce = {left: 0, right: 0, top: 0, bottom: 0};

            function nodeAndOffsetInLineMap(e, t, n) {
                for (var o, i, r, a, s, l, c = 0; c < e.length; c += 3) if (s = e[c], l = e[c + 1], t < s ? (i = 0, r = 1, a = "left") : t < l ? r = 1 + (i = t - s) : (c == e.length - 3 || t == l && e[c + 3] > t) && (i = (r = l - s) - 1, l <= t && (a = "right")), null != i) {
                    if (o = e[c + 2], s == l && n == (o.insertLeft ? "left" : "right") && (a = n), "left" == n && 0 == i) for (; c && e[c - 2] == e[c - 3] && e[c - 1].insertLeft;) o = e[2 + (c -= 3)], a = "left";
                    if ("right" == n && i == l - s) for (; c < e.length - 3 && e[c + 3] == e[c + 4] && !e[c + 5].insertLeft;) o = e[(c += 3) + 2], a = "right";
                    break
                }
                return {node: o, start: i, end: r, collapse: a, coverStart: s, coverEnd: l}
            }

            function getUsefulRect(e, t) {
                var n = ce;
                if ("left" == t) for (var o = 0; o < e.length && (n = e[o]).left == n.right; o++) ; else for (var i = e.length - 1; 0 <= i && (n = e[i]).left == n.right; i--) ;
                return n
            }

            function clearLineMeasurementCacheFor(e) {
                if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest)) for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {}
            }

            function clearLineMeasurementCache(e) {
                e.display.externalMeasure = null, removeChildren(e.display.lineMeasure);
                for (var t = 0; t < e.display.view.length; t++) clearLineMeasurementCacheFor(e.display.view[t])
            }

            function clearCaches(e) {
                clearLineMeasurementCache(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null
            }

            function pageScrollX() {
                return a && u ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) : window.pageXOffset || (document.documentElement || document.body).scrollLeft
            }

            function pageScrollY() {
                return a && u ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) : window.pageYOffset || (document.documentElement || document.body).scrollTop
            }

            function widgetTopHeight(e) {
                var t = 0;
                if (e.widgets) for (var n = 0; n < e.widgets.length; ++n) e.widgets[n].above && (t += widgetHeight(e.widgets[n]));
                return t
            }

            function intoCoordSystem(e, t, n, o, i) {
                if (!i) {
                    var r = widgetTopHeight(t);
                    n.top += r, n.bottom += r
                }
                if ("line" == o) return n;
                o || (o = "local");
                var a = heightAtLine(t);
                if ("local" == o ? a += paddingTop(e.display) : a -= e.display.viewOffset, "page" == o || "window" == o) {
                    var s = e.display.lineSpace.getBoundingClientRect();
                    a += s.top + ("window" == o ? 0 : pageScrollY());
                    var l = s.left + ("window" == o ? 0 : pageScrollX());
                    n.left += l, n.right += l
                }
                return n.top += a, n.bottom += a, n
            }

            function fromCoordSystem(e, t, n) {
                if ("div" == n) return t;
                var o = t.left, i = t.top;
                if ("page" == n) o -= pageScrollX(), i -= pageScrollY(); else if ("local" == n || !n) {
                    var r = e.display.sizer.getBoundingClientRect();
                    o += r.left, i += r.top
                }
                var a = e.display.lineSpace.getBoundingClientRect();
                return {left: o - a.left, top: i - a.top}
            }

            function charCoords(e, t, n, o, i) {
                return o || (o = getLine(e.doc, t.line)), intoCoordSystem(e, o, measureChar(e, o, t.ch, i), n)
            }

            function cursorCoords(o, e, i, r, a, s) {
                function get(e, t) {
                    var n = measureCharPrepared(o, a, e, t ? "right" : "left", s);
                    return t ? n.left = n.right : n.right = n.left, intoCoordSystem(o, r, n, i)
                }

                r = r || getLine(o.doc, e.line), a || (a = prepareMeasureForLine(o, r));
                var l = getOrder(r, o.doc.direction), t = e.ch, n = e.sticky;
                if (t >= r.text.length ? (t = r.text.length, n = "before") : t <= 0 && (t = 0, n = "after"), !l) return get("before" == n ? t - 1 : t, "before" == n);

                function getBidi(e, t, n) {
                    var o = l[t], i = 1 == o.level;
                    return get(n ? e - 1 : e, i != n)
                }

                var c = getBidiPartAt(l, t, n), d = B, u = getBidi(t, c, "before" == n);
                return null != d && (u.other = getBidi(t, d, "before" != n)), u
            }

            function estimateCoords(e, t) {
                var n = 0;
                t = clipPos(e.doc, t), e.options.lineWrapping || (n = charWidth(e.display) * t.ch);
                var o = getLine(e.doc, t.line), i = heightAtLine(o) + paddingTop(e.display);
                return {left: n, right: n, top: i, bottom: i + o.height}
            }

            function PosWithInfo(e, t, n, o, i) {
                var r = Pos(e, t, n);
                return r.xRel = i, o && (r.outside = !0), r
            }

            function coordsChar(e, t, n) {
                var o = e.doc;
                if ((n += e.display.viewOffset) < 0) return PosWithInfo(o.first, 0, null, !0, -1);
                var i = lineAtHeight(o, n), r = o.first + o.size - 1;
                if (r < i) return PosWithInfo(o.first + o.size - 1, getLine(o, r).text.length, null, !0, 1);
                t < 0 && (t = 0);
                for (var a = getLine(o, i); ;) {
                    var s = coordsCharInner(e, a, i, t, n), l = collapsedSpanAround(a, s.ch + (0 < s.xRel ? 1 : 0));
                    if (!l) return s;
                    var c = l.find(1);
                    if (c.line == i) return c;
                    a = getLine(o, i = c.line)
                }
            }

            function wrappedLineExtent(t, e, n, o) {
                o -= widgetTopHeight(e);
                var i = e.text.length, r = findFirst(function (e) {
                    return measureCharPrepared(t, n, e - 1).bottom <= o
                }, i, 0);
                return i = findFirst(function (e) {
                    return measureCharPrepared(t, n, e).top > o
                }, r, i), {begin: r, end: i}
            }

            function wrappedLineExtentChar(e, t, n, o) {
                n || (n = prepareMeasureForLine(e, t));
                var i = intoCoordSystem(e, t, measureCharPrepared(e, n, o), "line").top;
                return wrappedLineExtent(e, t, n, i)
            }

            function boxIsAfter(e, t, n, o) {
                return !(e.bottom <= n) && (e.top > n || (o ? e.left : e.right) > t)
            }

            function coordsCharInner(n, e, t, o, i) {
                i -= heightAtLine(e);
                var r = prepareMeasureForLine(n, e), a = widgetTopHeight(e), s = 0, l = e.text.length, c = !0,
                    d = getOrder(e, n.doc.direction);
                if (d) {
                    var u = (n.options.lineWrapping ? function (e, t, n, o, i, r, a) {
                        var s = wrappedLineExtent(e, t, o, a), l = s.begin, c = s.end;
                        /\s/.test(t.text.charAt(c - 1)) && c--;
                        for (var d = null, u = null, h = 0; h < i.length; h++) {
                            var p = i[h];
                            if (!(p.from >= c || p.to <= l)) {
                                var f = 1 != p.level,
                                    g = measureCharPrepared(e, o, f ? Math.min(c, p.to) - 1 : Math.max(l, p.from)).right,
                                    m = g < r ? r - g + 1e9 : g - r;
                                (!d || m < u) && (d = p, u = m)
                            }
                        }
                        return d || (d = i[i.length - 1]), d.from < l && (d = {
                            from: l,
                            to: d.to,
                            level: d.level
                        }), d.to > c && (d = {from: d.from, to: c, level: d.level}), d
                    } : function (o, i, r, a, s, l, c) {
                        var e = findFirst(function (e) {
                            var t = s[e], n = 1 != t.level;
                            return boxIsAfter(cursorCoords(o, Pos(r, n ? t.to : t.from, n ? "before" : "after"), "line", i, a), l, c, !0)
                        }, 0, s.length - 1), t = s[e];
                        if (0 < e) {
                            var n = 1 != t.level,
                                d = cursorCoords(o, Pos(r, n ? t.from : t.to, n ? "after" : "before"), "line", i, a);
                            boxIsAfter(d, l, c, !0) && d.top > c && (t = s[e - 1])
                        }
                        return t
                    })(n, e, t, r, d, o, i);
                    c = 1 != u.level, s = c ? u.from : u.to - 1, l = c ? u.to : u.from - 1
                }
                var h, p, f = null, g = null, m = findFirst(function (e) {
                    var t = measureCharPrepared(n, r, e);
                    return t.top += a, t.bottom += a, !!boxIsAfter(t, o, i, !1) && (t.top <= i && t.left <= o && (f = e, g = t), !0)
                }, s, l), v = !1;
                if (g) {
                    var y = o - g.left < g.right - o, b = y == c;
                    m = f + (b ? 0 : 1), p = b ? "after" : "before", h = y ? g.left : g.right
                } else {
                    c || m != l && m != s || m++, p = 0 == m ? "after" : m == e.text.length ? "before" : measureCharPrepared(n, r, m - (c ? 1 : 0)).bottom + a <= i == c ? "after" : "before";
                    var C = cursorCoords(n, Pos(t, m, p), "line", e, r);
                    h = C.left, v = i < C.top || i >= C.bottom
                }
                return m = skipExtendingChars(e.text, m, 1), PosWithInfo(t, m, p, v, o - h)
            }

            function textHeight(e) {
                if (null != e.cachedTextHeight) return e.cachedTextHeight;
                if (null == le) {
                    le = elt("pre");
                    for (var t = 0; t < 49; ++t) le.appendChild(document.createTextNode("x")), le.appendChild(elt("br"));
                    le.appendChild(document.createTextNode("x"))
                }
                removeChildrenAndAdd(e.measure, le);
                var n = le.offsetHeight / 50;
                return 3 < n && (e.cachedTextHeight = n), removeChildren(e.measure), n || 1
            }

            function charWidth(e) {
                if (null != e.cachedCharWidth) return e.cachedCharWidth;
                var t = elt("span", "xxxxxxxxxx"), n = elt("pre", [t]);
                removeChildrenAndAdd(e.measure, n);
                var o = t.getBoundingClientRect(), i = (o.right - o.left) / 10;
                return 2 < i && (e.cachedCharWidth = i), i || 10
            }

            function getDimensions(e) {
                for (var t = e.display, n = {}, o = {}, i = t.gutters.clientLeft, r = t.gutters.firstChild, a = 0; r; r = r.nextSibling, ++a) n[e.options.gutters[a]] = r.offsetLeft + r.clientLeft + i, o[e.options.gutters[a]] = r.clientWidth;
                return {
                    fixedPos: compensateForHScroll(t),
                    gutterTotalWidth: t.gutters.offsetWidth,
                    gutterLeft: n,
                    gutterWidth: o,
                    wrapperWidth: t.wrapper.clientWidth
                }
            }

            function compensateForHScroll(e) {
                return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left
            }

            function estimateHeight(o) {
                var i = textHeight(o.display), r = o.options.lineWrapping,
                    a = r && Math.max(5, o.display.scroller.clientWidth / charWidth(o.display) - 3);
                return function (e) {
                    if (lineIsHidden(o.doc, e)) return 0;
                    var t = 0;
                    if (e.widgets) for (var n = 0; n < e.widgets.length; n++) e.widgets[n].height && (t += e.widgets[n].height);
                    return r ? t + (Math.ceil(e.text.length / a) || 1) * i : t + i
                }
            }

            function estimateLineHeights(e) {
                var t = e.doc, n = estimateHeight(e);
                t.iter(function (e) {
                    var t = n(e);
                    t != e.height && updateLineHeight(e, t)
                })
            }

            function posFromMouse(e, t, n, o) {
                var i = e.display;
                if (!n && "true" == e_target(t).getAttribute("cm-not-content")) return null;
                var r, a, s = i.lineSpace.getBoundingClientRect();
                try {
                    r = t.clientX - s.left, a = t.clientY - s.top
                } catch (t) {
                    return null
                }
                var l, c = coordsChar(e, r, a);
                if (o && 1 == c.xRel && (l = getLine(e.doc, c.line).text).length == c.ch) {
                    var d = countColumn(l, l.length, e.options.tabSize) - l.length;
                    c = Pos(c.line, Math.max(0, Math.round((r - paddingH(e.display).left) / charWidth(e.display)) - d))
                }
                return c
            }

            function findViewIndex(e, t) {
                if (t >= e.display.viewTo) return null;
                if ((t -= e.display.viewFrom) < 0) return null;
                for (var n = e.display.view, o = 0; o < n.length; o++) if ((t -= n[o].size) < 0) return o
            }

            function updateSelection(e) {
                e.display.input.showSelection(e.display.input.prepareSelection())
            }

            function prepareSelection(e, t) {
                void 0 === t && (t = !0);
                for (var n = e.doc, o = {}, i = o.cursors = document.createDocumentFragment(), r = o.selection = document.createDocumentFragment(), a = 0; a < n.sel.ranges.length; a++) if (t || a != n.sel.primIndex) {
                    var s = n.sel.ranges[a];
                    if (!(s.from().line >= e.display.viewTo || s.to().line < e.display.viewFrom)) {
                        var l = s.empty();
                        (l || e.options.showCursorWhenSelecting) && drawSelectionCursor(e, s.head, i), l || drawSelectionRange(e, s, r)
                    }
                }
                return o
            }

            function drawSelectionCursor(e, t, n) {
                var o = cursorCoords(e, t, "div", null, null, !e.options.singleCursorHeightPerLine),
                    i = n.appendChild(elt("div", " ", "CodeMirror-cursor"));
                if (i.style.left = o.left + "px", i.style.top = o.top + "px", i.style.height = Math.max(0, o.bottom - o.top) * e.options.cursorHeight + "px", o.other) {
                    var r = n.appendChild(elt("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
                    r.style.display = "", r.style.left = o.other.left + "px", r.style.top = o.other.top + "px", r.style.height = .85 * (o.other.bottom - o.other.top) + "px"
                }
            }

            function cmpCoords(e, t) {
                return e.top - t.top || e.left - t.left
            }

            function drawSelectionRange(s, e, t) {
                var n = s.display, o = s.doc, i = document.createDocumentFragment(), r = paddingH(s.display),
                    L = r.left, T = Math.max(n.sizerWidth, displayWidth(s) - n.sizer.offsetLeft) - r.right,
                    P = "ltr" == o.direction;

                function add(e, t, n, o) {
                    t < 0 && (t = 0), t = Math.round(t), o = Math.round(o), i.appendChild(elt("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px;\n                             top: " + t + "px; width: " + (null == n ? T - e : n) + "px;\n                             height: " + (o - t) + "px"))
                }

                function drawForLine(n, b, C) {
                    var x, w, a = getLine(o, n), k = a.text.length;

                    function coords(e, t) {
                        return charCoords(s, Pos(n, e), "div", a, t)
                    }

                    function wrapX(e, t, n) {
                        var o = wrappedLineExtentChar(s, a, null, e),
                            i = "ltr" == t == ("after" == n) ? "left" : "right",
                            r = "after" == n ? o.begin : o.end - (/\s/.test(a.text.charAt(o.end - 1)) ? 2 : 1);
                        return coords(r, i)[i]
                    }

                    var S = getOrder(a, o.direction);
                    return function (e, t, n, o) {
                        if (!e) return o(t, n, "ltr", 0);
                        for (var i = !1, r = 0; r < e.length; ++r) {
                            var a = e[r];
                            (a.from < n && a.to > t || t == n && a.to == t) && (o(Math.max(a.from, t), Math.min(a.to, n), 1 == a.level ? "rtl" : "ltr", r), i = !0)
                        }
                        i || o(t, n, "ltr")
                    }(S, b || 0, null == C ? k : C, function (e, t, n, o) {
                        var i = "ltr" == n, r = coords(e, i ? "left" : "right"),
                            a = coords(t - 1, i ? "right" : "left"), s = null == b && 0 == e, l = null == C && t == k,
                            c = 0 == o, d = !S || o == S.length - 1;
                        if (a.top - r.top <= 3) {
                            var u = (P ? s : l) && c, h = (P ? l : s) && d, p = u ? L : (i ? r : a).left,
                                f = h ? T : (i ? a : r).right;
                            add(p, r.top, f - p, r.bottom)
                        } else {
                            var g, m, v, y;
                            y = i ? (g = P && s && c ? L : r.left, m = P ? T : wrapX(e, n, "before"), v = P ? L : wrapX(t, n, "after"), P && l && d ? T : a.right) : (g = P ? wrapX(e, n, "before") : L, m = !P && s && c ? T : r.right, v = !P && l && d ? L : a.left, P ? wrapX(t, n, "after") : T), add(g, r.top, m - g, r.bottom), r.bottom < a.top && add(L, r.bottom, null, a.top), add(v, a.top, y - v, a.bottom)
                        }
                        (!x || cmpCoords(r, x) < 0) && (x = r), cmpCoords(a, x) < 0 && (x = a), (!w || cmpCoords(r, w) < 0) && (w = r), cmpCoords(a, w) < 0 && (w = a)
                    }), {start: x, end: w}
                }

                var a = e.from(), l = e.to();
                if (a.line == l.line) drawForLine(a.line, a.ch, l.ch); else {
                    var c = getLine(o, a.line), d = getLine(o, l.line), u = visualLine(c) == visualLine(d),
                        h = drawForLine(a.line, a.ch, u ? c.text.length + 1 : null).end,
                        p = drawForLine(l.line, u ? 0 : null, l.ch).start;
                    u && (h.top < p.top - 2 ? (add(h.right, h.top, null, h.bottom), add(L, p.top, p.left, p.bottom)) : add(h.right, h.top, p.left - h.right, h.bottom)), h.bottom < p.top && add(L, h.bottom, null, p.top)
                }
                t.appendChild(i)
            }

            function restartBlink(e) {
                if (e.state.focused) {
                    var t = e.display;
                    clearInterval(t.blinker);
                    var n = !0;
                    t.cursorDiv.style.visibility = "", 0 < e.options.cursorBlinkRate ? t.blinker = setInterval(function () {
                        return t.cursorDiv.style.visibility = (n = !n) ? "" : "hidden"
                    }, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden")
                }
            }

            function ensureFocus(e) {
                e.state.focused || (e.display.input.focus(), onFocus(e))
            }

            function delayBlurEvent(e) {
                e.state.delayingBlurEvent = !0, setTimeout(function () {
                    e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, onBlur(e))
                }, 100)
            }

            function onFocus(e, t) {
                e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1), "nocursor" != e.options.readOnly && (e.state.focused || (signal(e, "focus", e, t), e.state.focused = !0, addClass(e.display.wrapper, "CodeMirror-focused"), e.curOp || e.display.selForContextMenu == e.doc.sel || (e.display.input.reset(), y && setTimeout(function () {
                    return e.display.input.reset(!0)
                }, 20)), e.display.input.receivedFocus()), restartBlink(e))
            }

            function onBlur(e, t) {
                e.state.delayingBlurEvent || (e.state.focused && (signal(e, "blur", e, t), e.state.focused = !1, L(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout(function () {
                    e.state.focused || (e.display.shift = !1)
                }, 150))
            }

            function updateHeightsInViewport(e) {
                for (var t = e.display, n = t.lineDiv.offsetTop, o = 0; o < t.view.length; o++) {
                    var i = t.view[o], r = e.options.lineWrapping, a = void 0, s = 0;
                    if (!i.hidden) {
                        if (x && w < 8) {
                            var l = i.node.offsetTop + i.node.offsetHeight;
                            a = l - n, n = l
                        } else {
                            var c = i.node.getBoundingClientRect();
                            a = c.bottom - c.top, !r && i.text.firstChild && (s = i.text.firstChild.getBoundingClientRect().right - c.left - 1)
                        }
                        var d = i.line.height - a;
                        if (a < 2 && (a = textHeight(t)), (.005 < d || d < -.005) && (updateLineHeight(i.line, a), updateWidgetHeight(i.line), i.rest)) for (var u = 0; u < i.rest.length; u++) updateWidgetHeight(i.rest[u]);
                        if (s > e.display.sizerWidth) {
                            var h = Math.ceil(s / charWidth(e.display));
                            h > e.display.maxLineLength && (e.display.maxLineLength = h, e.display.maxLine = i.line, e.display.maxLineChanged = !0)
                        }
                    }
                }
            }

            function updateWidgetHeight(e) {
                if (e.widgets) for (var t = 0; t < e.widgets.length; ++t) {
                    var n = e.widgets[t], o = n.node.parentNode;
                    o && (n.height = o.offsetHeight)
                }
            }

            function visibleLines(e, t, n) {
                var o = n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop;
                o = Math.floor(o - paddingTop(e));
                var i = n && null != n.bottom ? n.bottom : o + e.wrapper.clientHeight, r = lineAtHeight(t, o),
                    a = lineAtHeight(t, i);
                if (n && n.ensure) {
                    var s = n.ensure.from.line, l = n.ensure.to.line;
                    s < r ? a = lineAtHeight(t, heightAtLine(getLine(t, r = s)) + e.wrapper.clientHeight) : Math.min(l, t.lastLine()) >= a && (r = lineAtHeight(t, heightAtLine(getLine(t, l)) - e.wrapper.clientHeight), a = l)
                }
                return {from: r, to: Math.max(a, r + 1)}
            }

            function alignHorizontally(e) {
                var t = e.display, n = t.view;
                if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) {
                    for (var o = compensateForHScroll(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, r = o + "px", a = 0; a < n.length; a++) if (!n[a].hidden) {
                        e.options.fixedGutter && (n[a].gutter && (n[a].gutter.style.left = r), n[a].gutterBackground && (n[a].gutterBackground.style.left = r));
                        var s = n[a].alignable;
                        if (s) for (var l = 0; l < s.length; l++) s[l].style.left = r
                    }
                    e.options.fixedGutter && (t.gutters.style.left = o + i + "px")
                }
            }

            function maybeUpdateLineNumberWidth(e) {
                if (!e.options.lineNumbers) return !1;
                var t = e.doc, n = lineNumberFor(e.options, t.first + t.size - 1), o = e.display;
                if (n.length == o.lineNumChars) return !1;
                var i = o.measure.appendChild(elt("div", [elt("div", n)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
                    r = i.firstChild.offsetWidth, a = i.offsetWidth - r;
                return o.lineGutter.style.width = "", o.lineNumInnerWidth = Math.max(r, o.lineGutter.offsetWidth - a) + 1, o.lineNumWidth = o.lineNumInnerWidth + a, o.lineNumChars = o.lineNumInnerWidth ? n.length : -1, o.lineGutter.style.width = o.lineNumWidth + "px", updateGutterSpace(e), !0
            }

            function scrollIntoView(e, t) {
                var n = calculateScrollPos(e, t);
                null != n.scrollTop && updateScrollTop(e, n.scrollTop), null != n.scrollLeft && setScrollLeft(e, n.scrollLeft)
            }

            function calculateScrollPos(e, t) {
                var n = e.display, o = textHeight(e.display);
                t.top < 0 && (t.top = 0);
                var i = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : n.scroller.scrollTop,
                    r = displayHeight(e), a = {};
                t.bottom - t.top > r && (t.bottom = t.top + r);
                var s = e.doc.height + paddingVert(n), l = t.top < o, c = t.bottom > s - o;
                if (t.top < i) a.scrollTop = l ? 0 : t.top; else if (t.bottom > i + r) {
                    var d = Math.min(t.top, (c ? s : t.bottom) - r);
                    d != i && (a.scrollTop = d)
                }
                var u = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : n.scroller.scrollLeft,
                    h = displayWidth(e) - (e.options.fixedGutter ? n.gutters.offsetWidth : 0), p = t.right - t.left > h;
                return p && (t.right = t.left + h), t.left < 10 ? a.scrollLeft = 0 : t.left < u ? a.scrollLeft = Math.max(0, t.left - (p ? 0 : 10)) : t.right > h + u - 3 && (a.scrollLeft = t.right + (p ? 0 : 10) - h), a
            }

            function addToScrollTop(e, t) {
                null != t && (resolveScrollToPos(e), e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + t)
            }

            function ensureCursorVisible(e) {
                resolveScrollToPos(e);
                var t = e.getCursor();
                e.curOp.scrollToPos = {from: t, to: t, margin: e.options.cursorScrollMargin}
            }

            function scrollToCoords(e, t, n) {
                null == t && null == n || resolveScrollToPos(e), null != t && (e.curOp.scrollLeft = t), null != n && (e.curOp.scrollTop = n)
            }

            function resolveScrollToPos(e) {
                var t = e.curOp.scrollToPos;
                if (t) {
                    e.curOp.scrollToPos = null;
                    var n = estimateCoords(e, t.from), o = estimateCoords(e, t.to);
                    scrollToCoordsRange(e, n, o, t.margin)
                }
            }

            function scrollToCoordsRange(e, t, n, o) {
                var i = calculateScrollPos(e, {
                    left: Math.min(t.left, n.left),
                    top: Math.min(t.top, n.top) - o,
                    right: Math.max(t.right, n.right),
                    bottom: Math.max(t.bottom, n.bottom) + o
                });
                scrollToCoords(e, i.scrollLeft, i.scrollTop)
            }

            function updateScrollTop(e, t) {
                Math.abs(e.doc.scrollTop - t) < 2 || (g || updateDisplaySimple(e, {top: t}), setScrollTop(e, t, !0), g && updateDisplaySimple(e), startWorker(e, 100))
            }

            function setScrollTop(e, t, n) {
                t = Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t), (e.display.scroller.scrollTop != t || n) && (e.doc.scrollTop = t, e.display.scrollbars.setScrollTop(t), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t))
            }

            function setScrollLeft(e, t, n, o) {
                t = Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth), (n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !o || (e.doc.scrollLeft = t, alignHorizontally(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbars.setScrollLeft(t))
            }

            function measureForScrollbars(e) {
                var t = e.display, n = t.gutters.offsetWidth, o = Math.round(e.doc.height + paddingVert(e.display));
                return {
                    clientHeight: t.scroller.clientHeight,
                    viewHeight: t.wrapper.clientHeight,
                    scrollWidth: t.scroller.scrollWidth,
                    clientWidth: t.scroller.clientWidth,
                    viewWidth: t.wrapper.clientWidth,
                    barLeft: e.options.fixedGutter ? n : 0,
                    docHeight: o,
                    scrollHeight: o + scrollGap(e) + t.barHeight,
                    nativeBarWidth: t.nativeBarWidth,
                    gutterWidth: n
                }
            }

            var de = function (e, t, n) {
                this.cm = n;
                var o = this.vert = elt("div", [elt("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"),
                    i = this.horiz = elt("div", [elt("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
                o.tabIndex = i.tabIndex = -1, e(o), e(i), z(o, "scroll", function () {
                    o.clientHeight && t(o.scrollTop, "vertical")
                }), z(i, "scroll", function () {
                    i.clientWidth && t(i.scrollLeft, "horizontal")
                }), this.checkedZeroWidth = !1, x && w < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px")
            };
            de.prototype.update = function (e) {
                var t = e.scrollWidth > e.clientWidth + 1, n = e.scrollHeight > e.clientHeight + 1,
                    o = e.nativeBarWidth;
                if (n) {
                    this.vert.style.display = "block", this.vert.style.bottom = t ? o + "px" : "0";
                    var i = e.viewHeight - (t ? o : 0);
                    this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + "px"
                } else this.vert.style.display = "", this.vert.firstChild.style.height = "0";
                if (t) {
                    this.horiz.style.display = "block", this.horiz.style.right = n ? o + "px" : "0", this.horiz.style.left = e.barLeft + "px";
                    var r = e.viewWidth - e.barLeft - (n ? o : 0);
                    this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + r) + "px"
                } else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
                return !this.checkedZeroWidth && 0 < e.clientHeight && (0 == o && this.zeroWidthHack(), this.checkedZeroWidth = !0), {
                    right: n ? o : 0,
                    bottom: t ? o : 0
                }
            }, de.prototype.setScrollLeft = function (e) {
                this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz")
            }, de.prototype.setScrollTop = function (e) {
                this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert")
            }, de.prototype.zeroWidthHack = function () {
                var e = b && !s ? "12px" : "18px";
                this.horiz.style.height = this.vert.style.width = e, this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none", this.disableHoriz = new P, this.disableVert = new P
            }, de.prototype.enableZeroWidthBar = function (n, o, i) {
                n.style.pointerEvents = "auto", o.set(1e3, function maybeDisable() {
                    var e = n.getBoundingClientRect(),
                        t = "vert" == i ? document.elementFromPoint(e.right - 1, (e.top + e.bottom) / 2) : document.elementFromPoint((e.right + e.left) / 2, e.bottom - 1);
                    t != n ? n.style.pointerEvents = "none" : o.set(1e3, maybeDisable)
                })
            }, de.prototype.clear = function () {
                var e = this.horiz.parentNode;
                e.removeChild(this.horiz), e.removeChild(this.vert)
            };
            var ue = function () {
            };

            function updateScrollbars(e, t) {
                t || (t = measureForScrollbars(e));
                var n = e.display.barWidth, o = e.display.barHeight;
                updateScrollbarsInner(e, t);
                for (var i = 0; i < 4 && n != e.display.barWidth || o != e.display.barHeight; i++) n != e.display.barWidth && e.options.lineWrapping && updateHeightsInViewport(e), updateScrollbarsInner(e, measureForScrollbars(e)), n = e.display.barWidth, o = e.display.barHeight
            }

            function updateScrollbarsInner(e, t) {
                var n = e.display, o = n.scrollbars.update(t);
                n.sizer.style.paddingRight = (n.barWidth = o.right) + "px", n.sizer.style.paddingBottom = (n.barHeight = o.bottom) + "px", n.heightForcer.style.borderBottom = o.bottom + "px solid transparent", o.right && o.bottom ? (n.scrollbarFiller.style.display = "block", n.scrollbarFiller.style.height = o.bottom + "px", n.scrollbarFiller.style.width = o.right + "px") : n.scrollbarFiller.style.display = "", o.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (n.gutterFiller.style.display = "block", n.gutterFiller.style.height = o.bottom + "px", n.gutterFiller.style.width = t.gutterWidth + "px") : n.gutterFiller.style.display = ""
            }

            ue.prototype.update = function () {
                return {bottom: 0, right: 0}
            }, ue.prototype.setScrollLeft = function () {
            }, ue.prototype.setScrollTop = function () {
            }, ue.prototype.clear = function () {
            };
            var he = {native: de, null: ue};

            function initScrollbars(n) {
                n.display.scrollbars && (n.display.scrollbars.clear(), n.display.scrollbars.addClass && L(n.display.wrapper, n.display.scrollbars.addClass)), n.display.scrollbars = new he[n.options.scrollbarStyle](function (e) {
                    n.display.wrapper.insertBefore(e, n.display.scrollbarFiller), z(e, "mousedown", function () {
                        n.state.focused && setTimeout(function () {
                            return n.display.input.focus()
                        }, 0)
                    }), e.setAttribute("cm-not-content", "true")
                }, function (e, t) {
                    "horizontal" == t ? setScrollLeft(n, e) : updateScrollTop(n, e)
                }, n), n.display.scrollbars.addClass && addClass(n.display.wrapper, n.display.scrollbars.addClass)
            }

            var pe = 0;

            function startOperation(e) {
                var t;
                e.curOp = {
                    cm: e,
                    viewChanged: !1,
                    startHeight: e.doc.height,
                    forceUpdate: !1,
                    updateInput: null,
                    typing: !1,
                    changeObjs: null,
                    cursorActivityHandlers: null,
                    cursorActivityCalled: 0,
                    selectionChanged: !1,
                    updateMaxLine: !1,
                    scrollLeft: null,
                    scrollTop: null,
                    scrollToPos: null,
                    focus: !1,
                    id: ++pe
                }, t = e.curOp, ae ? ae.ops.push(t) : t.ownsGroup = ae = {ops: [t], delayedCallbacks: []}
            }

            function endOperation(e) {
                var t = e.curOp;
                t && function (e, t) {
                    var n = e.ownsGroup;
                    if (n) try {
                        fireCallbacksForOps(n)
                    } finally {
                        ae = null, t(n)
                    }
                }(t, function (e) {
                    for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null;
                    !function (e) {
                        for (var t = e.ops, n = 0; n < t.length; n++) endOperation_R1(t[n]);
                        for (var o = 0; o < t.length; o++) (i = t[o]).updatedDisplay = i.mustUpdate && updateDisplayIfNeeded(i.cm, i.update);
                        for (var i, r, a, s, l = 0; l < t.length; l++) r = t[l], s = a = void 0, a = r.cm, s = a.display, r.updatedDisplay && updateHeightsInViewport(a), r.barMeasure = measureForScrollbars(a), s.maxLineChanged && !a.options.lineWrapping && (r.adjustWidthTo = measureChar(a, s.maxLine, s.maxLine.text.length).left + 3, a.display.sizerWidth = r.adjustWidthTo, r.barMeasure.scrollWidth = Math.max(s.scroller.clientWidth, s.sizer.offsetLeft + r.adjustWidthTo + scrollGap(a) + a.display.barWidth), r.maxScrollLeft = Math.max(0, s.sizer.offsetLeft + r.adjustWidthTo - displayWidth(a))), (r.updatedDisplay || r.selectionChanged) && (r.preparedSelection = s.input.prepareSelection());
                        for (var c = 0; c < t.length; c++) endOperation_W2(t[c]);
                        for (var d = 0; d < t.length; d++) endOperation_finish(t[d])
                    }(e)
                })
            }

            function endOperation_R1(e) {
                var t, n, o = e.cm, i = o.display;
                !(n = (t = o).display).scrollbarsClipped && n.scroller.offsetWidth && (n.nativeBarWidth = n.scroller.offsetWidth - n.scroller.clientWidth, n.heightForcer.style.height = scrollGap(t) + "px", n.sizer.style.marginBottom = -n.nativeBarWidth + "px", n.sizer.style.borderRightWidth = scrollGap(t) + "px", n.scrollbarsClipped = !0), e.updateMaxLine && findMaxLine(o), e.mustUpdate = e.viewChanged || e.forceUpdate || null != e.scrollTop || e.scrollToPos && (e.scrollToPos.from.line < i.viewFrom || e.scrollToPos.to.line >= i.viewTo) || i.maxLineChanged && o.options.lineWrapping, e.update = e.mustUpdate && new fe(o, e.mustUpdate && {
                    top: e.scrollTop,
                    ensure: e.scrollToPos
                }, e.forceUpdate)
            }

            function endOperation_W2(e) {
                var t = e.cm;
                null != e.adjustWidthTo && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < t.doc.scrollLeft && setScrollLeft(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0), t.display.maxLineChanged = !1);
                var n = e.focus && e.focus == activeElt();
                e.preparedSelection && t.display.input.showSelection(e.preparedSelection, n), (e.updatedDisplay || e.startHeight != t.doc.height) && updateScrollbars(t, e.barMeasure), e.updatedDisplay && setDocumentHeight(t, e.barMeasure), e.selectionChanged && restartBlink(t), t.state.focused && e.updateInput && t.display.input.reset(e.typing), n && ensureFocus(e.cm)
            }

            function endOperation_finish(e) {
                var t = e.cm, n = t.display, o = t.doc;
                if (e.updatedDisplay && postUpdateDisplay(t, e.update), null == n.wheelStartX || null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos || (n.wheelStartX = n.wheelStartY = null), null != e.scrollTop && setScrollTop(t, e.scrollTop, e.forceScroll), null != e.scrollLeft && setScrollLeft(t, e.scrollLeft, !0, !0), e.scrollToPos) {
                    var i = function (e, t, n, o) {
                        var i;
                        null == o && (o = 0), e.options.lineWrapping || t != n || (t = t.ch ? Pos(t.line, "before" == t.sticky ? t.ch - 1 : t.ch, "after") : t, n = "before" == t.sticky ? Pos(t.line, t.ch + 1, "before") : t);
                        for (var r = 0; r < 5; r++) {
                            var a = !1, s = cursorCoords(e, t), l = n && n != t ? cursorCoords(e, n) : s;
                            i = {
                                left: Math.min(s.left, l.left),
                                top: Math.min(s.top, l.top) - o,
                                right: Math.max(s.left, l.left),
                                bottom: Math.max(s.bottom, l.bottom) + o
                            };
                            var c = calculateScrollPos(e, i), d = e.doc.scrollTop, u = e.doc.scrollLeft;
                            if (null != c.scrollTop && (updateScrollTop(e, c.scrollTop), 1 < Math.abs(e.doc.scrollTop - d) && (a = !0)), null != c.scrollLeft && (setScrollLeft(e, c.scrollLeft), 1 < Math.abs(e.doc.scrollLeft - u) && (a = !0)), !a) break
                        }
                        return i
                    }(t, clipPos(o, e.scrollToPos.from), clipPos(o, e.scrollToPos.to), e.scrollToPos.margin);
                    !function (e, t) {
                        if (!signalDOMEvent(e, "scrollCursorIntoView")) {
                            var n = e.display, o = n.sizer.getBoundingClientRect(), i = null;
                            if (t.top + o.top < 0 ? i = !0 : t.bottom + o.top > (window.innerHeight || document.documentElement.clientHeight) && (i = !1), null != i && !c) {
                                var r = elt("div", "​", null, "position: absolute;\n                         top: " + (t.top - n.viewOffset - paddingTop(e.display)) + "px;\n                         height: " + (t.bottom - t.top + scrollGap(e) + n.barHeight) + "px;\n                         left: " + t.left + "px; width: " + Math.max(2, t.right - t.left) + "px;");
                                e.display.lineSpace.appendChild(r), r.scrollIntoView(i), e.display.lineSpace.removeChild(r)
                            }
                        }
                    }(t, i)
                }
                var r = e.maybeHiddenMarkers, a = e.maybeUnhiddenMarkers;
                if (r) for (var s = 0; s < r.length; ++s) r[s].lines.length || signal(r[s], "hide");
                if (a) for (var l = 0; l < a.length; ++l) a[l].lines.length && signal(a[l], "unhide");
                n.wrapper.offsetHeight && (o.scrollTop = t.display.scroller.scrollTop), e.changeObjs && signal(t, "changes", t, e.changeObjs), e.update && e.update.finish()
            }

            function runInOp(e, t) {
                if (e.curOp) return t();
                startOperation(e);
                try {
                    return t()
                } finally {
                    endOperation(e)
                }
            }

            function operation(e, t) {
                return function () {
                    if (e.curOp) return t.apply(e, arguments);
                    startOperation(e);
                    try {
                        return t.apply(e, arguments)
                    } finally {
                        endOperation(e)
                    }
                }
            }

            function methodOp(e) {
                return function () {
                    if (this.curOp) return e.apply(this, arguments);
                    startOperation(this);
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        endOperation(this)
                    }
                }
            }

            function docMethodOp(t) {
                return function () {
                    var e = this.cm;
                    if (!e || e.curOp) return t.apply(this, arguments);
                    startOperation(e);
                    try {
                        return t.apply(this, arguments)
                    } finally {
                        endOperation(e)
                    }
                }
            }

            function regChange(e, t, n, o) {
                null == t && (t = e.doc.first), null == n && (n = e.doc.first + e.doc.size), o || (o = 0);
                var i = e.display;
                if (o && n < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > t) && (i.updateLineNumbers = t), e.curOp.viewChanged = !0, t >= i.viewTo) R && visualLineNo(e.doc, t) < i.viewTo && resetView(e); else if (n <= i.viewFrom) R && visualLineEndNo(e.doc, n + o) > i.viewFrom ? resetView(e) : (i.viewFrom += o, i.viewTo += o); else if (t <= i.viewFrom && n >= i.viewTo) resetView(e); else if (t <= i.viewFrom) {
                    var r = viewCuttingPoint(e, n, n + o, 1);
                    r ? (i.view = i.view.slice(r.index), i.viewFrom = r.lineN, i.viewTo += o) : resetView(e)
                } else if (n >= i.viewTo) {
                    var a = viewCuttingPoint(e, t, t, -1);
                    a ? (i.view = i.view.slice(0, a.index), i.viewTo = a.lineN) : resetView(e)
                } else {
                    var s = viewCuttingPoint(e, t, t, -1), l = viewCuttingPoint(e, n, n + o, 1);
                    s && l ? (i.view = i.view.slice(0, s.index).concat(buildViewArray(e, s.lineN, l.lineN)).concat(i.view.slice(l.index)), i.viewTo += o) : resetView(e)
                }
                var c = i.externalMeasured;
                c && (n < c.lineN ? c.lineN += o : t < c.lineN + c.size && (i.externalMeasured = null))
            }

            function regLineChange(e, t, n) {
                e.curOp.viewChanged = !0;
                var o = e.display, i = e.display.externalMeasured;
                if (i && t >= i.lineN && t < i.lineN + i.size && (o.externalMeasured = null), !(t < o.viewFrom || t >= o.viewTo)) {
                    var r = o.view[findViewIndex(e, t)];
                    if (null != r.node) {
                        var a = r.changes || (r.changes = []);
                        -1 == indexOf(a, n) && a.push(n)
                    }
                }
            }

            function resetView(e) {
                e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0
            }

            function viewCuttingPoint(e, t, n, o) {
                var i, r = findViewIndex(e, t), a = e.display.view;
                if (!R || n == e.doc.first + e.doc.size) return {index: r, lineN: n};
                for (var s = e.display.viewFrom, l = 0; l < r; l++) s += a[l].size;
                if (s != t) {
                    if (0 < o) {
                        if (r == a.length - 1) return null;
                        i = s + a[r].size - t, r++
                    } else i = s - t;
                    t += i, n += i
                }
                for (; visualLineNo(e.doc, n) != n;) {
                    if (r == (o < 0 ? 0 : a.length - 1)) return null;
                    n += o * a[r - (o < 0 ? 1 : 0)].size, r += o
                }
                return {index: r, lineN: n}
            }

            function countDirtyView(e) {
                for (var t = e.display.view, n = 0, o = 0; o < t.length; o++) {
                    var i = t[o];
                    i.hidden || i.node && !i.changes || ++n
                }
                return n
            }

            function startWorker(e, t) {
                e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, bind(highlightWorker, e))
            }

            function highlightWorker(l) {
                var c = l.doc;
                if (!(c.highlightFrontier >= l.display.viewTo)) {
                    var d = +new Date + l.options.workTime, u = getContextBefore(l, c.highlightFrontier), h = [];
                    c.iter(u.line, Math.min(c.first + c.size, l.display.viewTo + 500), function (e) {
                        if (u.line >= l.display.viewFrom) {
                            var t = e.styles,
                                n = e.text.length > l.options.maxHighlightLength ? copyState(c.mode, u.state) : null,
                                o = highlightLine(l, e, u, !0);
                            n && (u.state = n), e.styles = o.styles;
                            var i = e.styleClasses, r = o.classes;
                            r ? e.styleClasses = r : i && (e.styleClasses = null);
                            for (var a = !t || t.length != e.styles.length || i != r && (!i || !r || i.bgClass != r.bgClass || i.textClass != r.textClass), s = 0; !a && s < t.length; ++s) a = t[s] != e.styles[s];
                            a && h.push(u.line), e.stateAfter = u.save(), u.nextLine()
                        } else e.text.length <= l.options.maxHighlightLength && processLine(l, e.text, u), e.stateAfter = u.line % 5 == 0 ? u.save() : null, u.nextLine();
                        if (+new Date > d) return startWorker(l, l.options.workDelay), !0
                    }), c.highlightFrontier = u.line, c.modeFrontier = Math.max(c.modeFrontier, u.line), h.length && runInOp(l, function () {
                        for (var e = 0; e < h.length; e++) regLineChange(l, h[e], "text")
                    })
                }
            }

            var fe = function (e, t, n) {
                var o = e.display;
                this.viewport = t, this.visible = visibleLines(o, e.doc, t), this.editorIsHidden = !o.wrapper.offsetWidth, this.wrapperHeight = o.wrapper.clientHeight, this.wrapperWidth = o.wrapper.clientWidth, this.oldDisplayWidth = displayWidth(e), this.force = n, this.dims = getDimensions(e), this.events = []
            };

            function updateDisplayIfNeeded(e, t) {
                var n = e.display, o = e.doc;
                if (t.editorIsHidden) return resetView(e), !1;
                if (!t.force && t.visible.from >= n.viewFrom && t.visible.to <= n.viewTo && (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo) && n.renderedView == n.view && 0 == countDirtyView(e)) return !1;
                maybeUpdateLineNumberWidth(e) && (resetView(e), t.dims = getDimensions(e));
                var i = o.first + o.size, r = Math.max(t.visible.from - e.options.viewportMargin, o.first),
                    a = Math.min(i, t.visible.to + e.options.viewportMargin);
                n.viewFrom < r && r - n.viewFrom < 20 && (r = Math.max(o.first, n.viewFrom)), n.viewTo > a && n.viewTo - a < 20 && (a = Math.min(i, n.viewTo)), R && (r = visualLineNo(e.doc, r), a = visualLineEndNo(e.doc, a));
                var s, l, c, d,
                    u = r != n.viewFrom || a != n.viewTo || n.lastWrapHeight != t.wrapperHeight || n.lastWrapWidth != t.wrapperWidth;
                l = r, c = a, 0 == (d = (s = e).display).view.length || l >= d.viewTo || c <= d.viewFrom ? (d.view = buildViewArray(s, l, c), d.viewFrom = l) : (d.viewFrom > l ? d.view = buildViewArray(s, l, d.viewFrom).concat(d.view) : d.viewFrom < l && (d.view = d.view.slice(findViewIndex(s, l))), d.viewFrom = l, d.viewTo < c ? d.view = d.view.concat(buildViewArray(s, d.viewTo, c)) : d.viewTo > c && (d.view = d.view.slice(0, findViewIndex(s, c)))), d.viewTo = c, n.viewOffset = heightAtLine(getLine(e.doc, n.viewFrom)), e.display.mover.style.top = n.viewOffset + "px";
                var h = countDirtyView(e);
                if (!u && 0 == h && !t.force && n.renderedView == n.view && (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo)) return !1;
                var p = function (e) {
                    if (e.hasFocus()) return null;
                    var t = activeElt();
                    if (!t || !contains(e.display.lineDiv, t)) return null;
                    var n = {activeElt: t};
                    if (window.getSelection) {
                        var o = window.getSelection();
                        o.anchorNode && o.extend && contains(e.display.lineDiv, o.anchorNode) && (n.anchorNode = o.anchorNode, n.anchorOffset = o.anchorOffset, n.focusNode = o.focusNode, n.focusOffset = o.focusOffset)
                    }
                    return n
                }(e);
                return 4 < h && (n.lineDiv.style.display = "none"), function (n, e, t) {
                    var o, i, r, a, s, l = n.display, c = n.options.lineNumbers, d = l.lineDiv, u = d.firstChild;

                    function rm(e) {
                        var t = e.nextSibling;
                        return y && b && n.display.currentWheelTarget == e ? e.style.display = "none" : e.parentNode.removeChild(e), t
                    }

                    for (var h = l.view, p = l.viewFrom, f = 0; f < h.length; f++) {
                        var g = h[f];
                        if (g.hidden) ; else if (g.node && g.node.parentNode == d) {
                            for (; u != g.node;) u = rm(u);
                            var m = c && null != e && e <= p && g.lineNumber;
                            g.changes && (-1 < indexOf(g.changes, "gutter") && (m = !1), updateLineForChanges(n, g, p, t)), m && (removeChildren(g.lineNumber), g.lineNumber.appendChild(document.createTextNode(lineNumberFor(n.options, p)))), u = g.node.nextSibling
                        } else {
                            var v = (r = p, a = t, void 0, s = getLineContent(o = n, i = g), i.text = i.node = s.pre, s.bgClass && (i.bgClass = s.bgClass), s.textClass && (i.textClass = s.textClass), updateLineClasses(o, i), updateLineGutter(o, i, r, a), insertLineWidgets(o, i, a), i.node);
                            d.insertBefore(v, u)
                        }
                        p += g.size
                    }
                    for (; u;) u = rm(u)
                }(e, n.updateLineNumbers, t.dims), 4 < h && (n.lineDiv.style.display = ""), n.renderedView = n.view, function (e) {
                    if (e && e.activeElt && e.activeElt != activeElt() && (e.activeElt.focus(), e.anchorNode && contains(document.body, e.anchorNode) && contains(document.body, e.focusNode))) {
                        var t = window.getSelection(), n = document.createRange();
                        n.setEnd(e.anchorNode, e.anchorOffset), n.collapse(!1), t.removeAllRanges(), t.addRange(n), t.extend(e.focusNode, e.focusOffset)
                    }
                }(p), removeChildren(n.cursorDiv), removeChildren(n.selectionDiv), n.gutters.style.height = n.sizer.style.minHeight = 0, u && (n.lastWrapHeight = t.wrapperHeight, n.lastWrapWidth = t.wrapperWidth, startWorker(e, 400)), !(n.updateLineNumbers = null)
            }

            function postUpdateDisplay(e, t) {
                for (var n = t.viewport, o = !0; (o && e.options.lineWrapping && t.oldDisplayWidth != displayWidth(e) || (n && null != n.top && (n = {top: Math.min(e.doc.height + paddingVert(e.display) - displayHeight(e), n.top)}), t.visible = visibleLines(e.display, e.doc, n), !(t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo))) && updateDisplayIfNeeded(e, t); o = !1) {
                    updateHeightsInViewport(e);
                    var i = measureForScrollbars(e);
                    updateSelection(e), updateScrollbars(e, i), setDocumentHeight(e, i), t.force = !1
                }
                t.signal(e, "update", e), e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo || (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo)
            }

            function updateDisplaySimple(e, t) {
                var n = new fe(e, t);
                if (updateDisplayIfNeeded(e, n)) {
                    updateHeightsInViewport(e), postUpdateDisplay(e, n);
                    var o = measureForScrollbars(e);
                    updateSelection(e), updateScrollbars(e, o), setDocumentHeight(e, o), n.finish()
                }
            }

            function updateGutterSpace(e) {
                var t = e.display.gutters.offsetWidth;
                e.display.sizer.style.marginLeft = t + "px"
            }

            function setDocumentHeight(e, t) {
                e.display.sizer.style.minHeight = t.docHeight + "px", e.display.heightForcer.style.top = t.docHeight + "px", e.display.gutters.style.height = t.docHeight + e.display.barHeight + scrollGap(e) + "px"
            }

            function updateGutters(e) {
                var t = e.display.gutters, n = e.options.gutters;
                removeChildren(t);
                for (var o = 0; o < n.length; ++o) {
                    var i = n[o], r = t.appendChild(elt("div", null, "CodeMirror-gutter " + i));
                    "CodeMirror-linenumbers" == i && ((e.display.lineGutter = r).style.width = (e.display.lineNumWidth || 1) + "px")
                }
                t.style.display = o ? "" : "none", updateGutterSpace(e)
            }

            function setGuttersForLineNumbers(e) {
                var t = indexOf(e.gutters, "CodeMirror-linenumbers");
                -1 == t && e.lineNumbers ? e.gutters = e.gutters.concat(["CodeMirror-linenumbers"]) : -1 < t && !e.lineNumbers && (e.gutters = e.gutters.slice(0), e.gutters.splice(t, 1))
            }

            fe.prototype.signal = function (e, t) {
                hasHandler(e, t) && this.events.push(arguments)
            }, fe.prototype.finish = function () {
                for (var e = 0; e < this.events.length; e++) signal.apply(null, this.events[e])
            };
            var ge = 0, me = null;

            function wheelEventDelta(e) {
                var t = e.wheelDeltaX, n = e.wheelDeltaY;
                return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail), null == n && e.detail && e.axis == e.VERTICAL_AXIS ? n = e.detail : null == n && (n = e.wheelDelta), {
                    x: t,
                    y: n
                }
            }

            function wheelEventPixels(e) {
                var t = wheelEventDelta(e);
                return t.x *= me, t.y *= me, t
            }

            function onScrollWheel(e, t) {
                var n = wheelEventDelta(t), o = n.x, i = n.y, r = e.display, a = r.scroller,
                    s = a.scrollWidth > a.clientWidth, l = a.scrollHeight > a.clientHeight;
                if (o && s || i && l) {
                    if (i && b && y) e:for (var c = t.target, d = r.view; c != a; c = c.parentNode) for (var u = 0; u < d.length; u++) if (d[u].node == c) {
                        e.display.currentWheelTarget = c;
                        break e
                    }
                    if (o && !g && !m && null != me) return i && l && updateScrollTop(e, Math.max(0, a.scrollTop + i * me)), setScrollLeft(e, Math.max(0, a.scrollLeft + o * me)), (!i || i && l) && e_preventDefault(t), void (r.wheelStartX = null);
                    if (i && null != me) {
                        var h = i * me, p = e.doc.scrollTop, f = p + r.wrapper.clientHeight;
                        h < 0 ? p = Math.max(0, p + h - 50) : f = Math.min(e.doc.height, f + h + 50), updateDisplaySimple(e, {
                            top: p,
                            bottom: f
                        })
                    }
                    ge < 20 && (null == r.wheelStartX ? (r.wheelStartX = a.scrollLeft, r.wheelStartY = a.scrollTop, r.wheelDX = o, r.wheelDY = i, setTimeout(function () {
                        if (null != r.wheelStartX) {
                            var e = a.scrollLeft - r.wheelStartX, t = a.scrollTop - r.wheelStartY,
                                n = t && r.wheelDY && t / r.wheelDY || e && r.wheelDX && e / r.wheelDX;
                            r.wheelStartX = r.wheelStartY = null, n && (me = (me * ge + n) / (ge + 1), ++ge)
                        }
                    }, 200)) : (r.wheelDX += o, r.wheelDY += i))
                }
            }

            x ? me = -.53 : g ? me = 15 : a ? me = -.7 : l && (me = -1 / 3);
            var ve = function (e, t) {
                this.ranges = e, this.primIndex = t
            };
            ve.prototype.primary = function () {
                return this.ranges[this.primIndex]
            }, ve.prototype.equals = function (e) {
                if (e == this) return !0;
                if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1;
                for (var t = 0; t < this.ranges.length; t++) {
                    var n = this.ranges[t], o = e.ranges[t];
                    if (!equalCursorPos(n.anchor, o.anchor) || !equalCursorPos(n.head, o.head)) return !1
                }
                return !0
            }, ve.prototype.deepCopy = function () {
                for (var e = [], t = 0; t < this.ranges.length; t++) e[t] = new ye(copyPos(this.ranges[t].anchor), copyPos(this.ranges[t].head));
                return new ve(e, this.primIndex)
            }, ve.prototype.somethingSelected = function () {
                for (var e = 0; e < this.ranges.length; e++) if (!this.ranges[e].empty()) return !0;
                return !1
            }, ve.prototype.contains = function (e, t) {
                t || (t = e);
                for (var n = 0; n < this.ranges.length; n++) {
                    var o = this.ranges[n];
                    if (0 <= cmp(t, o.from()) && cmp(e, o.to()) <= 0) return n
                }
                return -1
            };
            var ye = function (e, t) {
                this.anchor = e, this.head = t
            };

            function normalizeSelection(e, t, n) {
                var o = e && e.options.selectionsMayTouch, i = t[n];
                t.sort(function (e, t) {
                    return cmp(e.from(), t.from())
                }), n = indexOf(t, i);
                for (var r = 1; r < t.length; r++) {
                    var a = t[r], s = t[r - 1], l = cmp(s.to(), a.from());
                    if (o && !a.empty() ? 0 < l : 0 <= l) {
                        var c = minPos(s.from(), a.from()), d = maxPos(s.to(), a.to()),
                            u = s.empty() ? a.from() == a.head : s.from() == s.head;
                        r <= n && --n, t.splice(--r, 2, new ye(u ? d : c, u ? c : d))
                    }
                }
                return new ve(t, n)
            }

            function simpleSelection(e, t) {
                return new ve([new ye(e, t || e)], 0)
            }

            function changeEnd(e) {
                return e.text ? Pos(e.from.line + e.text.length - 1, lst(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to
            }

            function adjustForChange(e, t) {
                if (cmp(e, t.from) < 0) return e;
                if (cmp(e, t.to) <= 0) return changeEnd(t);
                var n = e.line + t.text.length - (t.to.line - t.from.line) - 1, o = e.ch;
                return e.line == t.to.line && (o += changeEnd(t).ch - t.to.ch), Pos(n, o)
            }

            function computeSelAfterChange(e, t) {
                for (var n = [], o = 0; o < e.sel.ranges.length; o++) {
                    var i = e.sel.ranges[o];
                    n.push(new ye(adjustForChange(i.anchor, t), adjustForChange(i.head, t)))
                }
                return normalizeSelection(e.cm, n, e.sel.primIndex)
            }

            function offsetPos(e, t, n) {
                return e.line == t.line ? Pos(n.line, e.ch - t.ch + n.ch) : Pos(n.line + (e.line - t.line), e.ch)
            }

            function loadMode(e) {
                e.doc.mode = getMode(e.options, e.doc.modeOption), resetModeState(e)
            }

            function resetModeState(e) {
                e.doc.iter(function (e) {
                    e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null)
                }), e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first, startWorker(e, 100), e.state.modeGen++, e.curOp && regChange(e)
            }

            function isWholeLineUpdate(e, t) {
                return 0 == t.from.ch && 0 == t.to.ch && "" == lst(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore)
            }

            function updateDoc(e, o, t, i) {
                function spansFor(e) {
                    return t ? t[e] : null
                }

                function update(e, t, n) {
                    !function (e, t, n, o) {
                        e.text = t, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), null != e.order && (e.order = null), detachMarkedSpans(e), attachMarkedSpans(e, n);
                        var i = o ? o(e) : 1;
                        i != e.height && updateLineHeight(e, i)
                    }(e, t, n, i), signalLater(e, "change", e, o)
                }

                function linesFor(e, t) {
                    for (var n = [], o = e; o < t; ++o) n.push(new oe(a[o], spansFor(o), i));
                    return n
                }

                var n = o.from, r = o.to, a = o.text, s = getLine(e, n.line), l = getLine(e, r.line), c = lst(a),
                    d = spansFor(a.length - 1), u = r.line - n.line;
                if (o.full) e.insert(0, linesFor(0, a.length)), e.remove(a.length, e.size - a.length); else if (isWholeLineUpdate(e, o)) {
                    var h = linesFor(0, a.length - 1);
                    update(l, l.text, d), u && e.remove(n.line, u), h.length && e.insert(n.line, h)
                } else if (s == l) if (1 == a.length) update(s, s.text.slice(0, n.ch) + c + s.text.slice(r.ch), d); else {
                    var p = linesFor(1, a.length - 1);
                    p.push(new oe(c + s.text.slice(r.ch), d, i)), update(s, s.text.slice(0, n.ch) + a[0], spansFor(0)), e.insert(n.line + 1, p)
                } else if (1 == a.length) update(s, s.text.slice(0, n.ch) + a[0] + l.text.slice(r.ch), spansFor(0)), e.remove(n.line + 1, u); else {
                    update(s, s.text.slice(0, n.ch) + a[0], spansFor(0)), update(l, c + l.text.slice(r.ch), d);
                    var f = linesFor(1, a.length - 1);
                    1 < u && e.remove(n.line + 1, u - 1), e.insert(n.line + 1, f)
                }
                signalLater(e, "change", e, o)
            }

            function linkedDocs(e, a, s) {
                !function propagate(e, t, n) {
                    if (e.linked) for (var o = 0; o < e.linked.length; ++o) {
                        var i = e.linked[o];
                        if (i.doc != t) {
                            var r = n && i.sharedHist;
                            s && !r || (a(i.doc, r), propagate(i.doc, e, r))
                        }
                    }
                }(e, null, !0)
            }

            function attachDoc(e, t) {
                if (t.cm) throw new Error("This document is already in use.");
                estimateLineHeights((e.doc = t).cm = e), loadMode(e), setDirectionClass(e), e.options.lineWrapping || findMaxLine(e), e.options.mode = t.modeOption, regChange(e)
            }

            function setDirectionClass(e) {
                ("rtl" == e.doc.direction ? addClass : L)(e.display.lineDiv, "CodeMirror-rtl")
            }

            function History(e) {
                this.done = [], this.undone = [], this.undoDepth = 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e || 1
            }

            function historyChangeFromChange(e, t) {
                var n = {from: copyPos(t.from), to: changeEnd(t), text: getBetween(e, t.from, t.to)};
                return attachLocalSpans(e, n, t.from.line, t.to.line + 1), linkedDocs(e, function (e) {
                    return attachLocalSpans(e, n, t.from.line, t.to.line + 1)
                }, !0), n
            }

            function clearSelectionEvents(e) {
                for (; e.length;) {
                    var t = lst(e);
                    if (!t.ranges) break;
                    e.pop()
                }
            }

            function addChangeToHistory(e, t, n, o) {
                var i = e.history;
                i.undone.length = 0;
                var r, a, s, l, c = +new Date;
                if ((i.lastOp == o || i.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && i.lastModTime > c - (e.cm ? e.cm.options.historyEventDelay : 500) || "*" == t.origin.charAt(0))) && (l = (s = i).lastOp == o, r = l ? (clearSelectionEvents(s.done), lst(s.done)) : s.done.length && !lst(s.done).ranges ? lst(s.done) : 1 < s.done.length && !s.done[s.done.length - 2].ranges ? (s.done.pop(), lst(s.done)) : void 0)) a = lst(r.changes), 0 == cmp(t.from, t.to) && 0 == cmp(t.from, a.to) ? a.to = changeEnd(t) : r.changes.push(historyChangeFromChange(e, t)); else {
                    var d = lst(i.done);
                    for (d && d.ranges || pushSelectionToHistory(e.sel, i.done), r = {
                        changes: [historyChangeFromChange(e, t)],
                        generation: i.generation
                    }, i.done.push(r); i.done.length > i.undoDepth;) i.done.shift(), i.done[0].ranges || i.done.shift()
                }
                i.done.push(n), i.generation = ++i.maxGeneration, i.lastModTime = i.lastSelTime = c, i.lastOp = i.lastSelOp = o, i.lastOrigin = i.lastSelOrigin = t.origin, a || signal(e, "historyAdded")
            }

            function addSelectionToHistory(e, t, n, o) {
                var i, r, a, s, l, c = e.history, d = o && o.origin;
                n == c.lastSelOp || d && c.lastSelOrigin == d && (c.lastModTime == c.lastSelTime && c.lastOrigin == d || (i = e, r = d, a = lst(c.done), s = t, "*" == (l = r.charAt(0)) || "+" == l && a.ranges.length == s.ranges.length && a.somethingSelected() == s.somethingSelected() && new Date - i.history.lastSelTime <= (i.cm ? i.cm.options.historyEventDelay : 500))) ? c.done[c.done.length - 1] = t : pushSelectionToHistory(t, c.done), c.lastSelTime = +new Date, c.lastSelOrigin = d, c.lastSelOp = n, o && !1 !== o.clearRedo && clearSelectionEvents(c.undone)
            }

            function pushSelectionToHistory(e, t) {
                var n = lst(t);
                n && n.ranges && n.equals(e) || t.push(e)
            }

            function attachLocalSpans(t, n, e, o) {
                var i = n["spans_" + t.id], r = 0;
                t.iter(Math.max(t.first, e), Math.min(t.first + t.size, o), function (e) {
                    e.markedSpans && ((i || (i = n["spans_" + t.id] = {}))[r] = e.markedSpans), ++r
                })
            }

            function removeClearedSpans(e) {
                if (!e) return null;
                for (var t, n = 0; n < e.length; ++n) e[n].marker.explicitlyCleared ? t || (t = e.slice(0, n)) : t && t.push(e[n]);
                return t ? t.length ? t : null : e
            }

            function mergeOldSpans(e, t) {
                var n = function (e, t) {
                    var n = t["spans_" + e.id];
                    if (!n) return null;
                    for (var o = [], i = 0; i < t.text.length; ++i) o.push(removeClearedSpans(n[i]));
                    return o
                }(e, t), o = stretchSpansOverChange(e, t);
                if (!n) return o;
                if (!o) return n;
                for (var i = 0; i < n.length; ++i) {
                    var r = n[i], a = o[i];
                    if (r && a) e:for (var s = 0; s < a.length; ++s) {
                        for (var l = a[s], c = 0; c < r.length; ++c) if (r[c].marker == l.marker) continue e;
                        r.push(l)
                    } else a && (n[i] = a)
                }
                return n
            }

            function copyHistoryArray(e, t, n) {
                for (var o = [], i = 0; i < e.length; ++i) {
                    var r = e[i];
                    if (r.ranges) o.push(n ? ve.prototype.deepCopy.call(r) : r); else {
                        var a = r.changes, s = [];
                        o.push({changes: s});
                        for (var l = 0; l < a.length; ++l) {
                            var c = a[l], d = void 0;
                            if (s.push({
                                from: c.from,
                                to: c.to,
                                text: c.text
                            }), t) for (var u in c) (d = u.match(/^spans_(\d+)$/)) && -1 < indexOf(t, Number(d[1])) && (lst(s)[u] = c[u], delete c[u])
                        }
                    }
                }
                return o
            }

            function extendRange(e, t, n, o) {
                if (o) {
                    var i = e.anchor;
                    if (n) {
                        var r = cmp(t, i) < 0;
                        r != cmp(n, i) < 0 ? (i = t, t = n) : r != cmp(t, n) < 0 && (t = n)
                    }
                    return new ye(i, t)
                }
                return new ye(n || t, t)
            }

            function extendSelection(e, t, n, o, i) {
                null == i && (i = e.cm && (e.cm.display.shift || e.extend)), setSelection(e, new ve([extendRange(e.sel.primary(), t, n, i)], 0), o)
            }

            function extendSelections(e, t, n) {
                for (var o = [], i = e.cm && (e.cm.display.shift || e.extend), r = 0; r < e.sel.ranges.length; r++) o[r] = extendRange(e.sel.ranges[r], t[r], null, i);
                var a = normalizeSelection(e.cm, o, e.sel.primIndex);
                setSelection(e, a, n)
            }

            function replaceOneSelection(e, t, n, o) {
                var i = e.sel.ranges.slice(0);
                i[t] = n, setSelection(e, normalizeSelection(e.cm, i, e.sel.primIndex), o)
            }

            function setSimpleSelection(e, t, n, o) {
                setSelection(e, simpleSelection(t, n), o)
            }

            function setSelectionReplaceHistory(e, t, n) {
                var o = e.history.done, i = lst(o);
                i && i.ranges ? (o[o.length - 1] = t, setSelectionNoUndo(e, t, n)) : setSelection(e, t, n)
            }

            function setSelection(e, t, n) {
                setSelectionNoUndo(e, t, n), addSelectionToHistory(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n)
            }

            function setSelectionNoUndo(e, t, n) {
                var o, i, r, a;
                (hasHandler(e, "beforeSelectionChange") || e.cm && hasHandler(e.cm, "beforeSelectionChange")) && (o = e, r = n, a = {
                    ranges: (i = t).ranges,
                    update: function (e) {
                        this.ranges = [];
                        for (var t = 0; t < e.length; t++) this.ranges[t] = new ye(clipPos(o, e[t].anchor), clipPos(o, e[t].head))
                    },
                    origin: r && r.origin
                }, signal(o, "beforeSelectionChange", o, a), o.cm && signal(o.cm, "beforeSelectionChange", o.cm, a), t = a.ranges != i.ranges ? normalizeSelection(o.cm, a.ranges, a.ranges.length - 1) : i);
                var s = n && n.bias || (cmp(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
                setSelectionInner(e, skipAtomicInSelection(e, t, s, !0)), n && !1 === n.scroll || !e.cm || ensureCursorVisible(e.cm)
            }

            function setSelectionInner(e, t) {
                t.equals(e.sel) || (e.sel = t, e.cm && (e.cm.curOp.updateInput = e.cm.curOp.selectionChanged = !0, signalCursorActivity(e.cm)), signalLater(e, "cursorActivity", e))
            }

            function reCheckSelection(e) {
                setSelectionInner(e, skipAtomicInSelection(e, e.sel, null, !1))
            }

            function skipAtomicInSelection(e, t, n, o) {
                for (var i, r = 0; r < t.ranges.length; r++) {
                    var a = t.ranges[r], s = t.ranges.length == e.sel.ranges.length && e.sel.ranges[r],
                        l = skipAtomic(e, a.anchor, s && s.anchor, n, o), c = skipAtomic(e, a.head, s && s.head, n, o);
                    (i || l != a.anchor || c != a.head) && (i || (i = t.ranges.slice(0, r)), i[r] = new ye(l, c))
                }
                return i ? normalizeSelection(e.cm, i, t.primIndex) : t
            }

            function skipAtomicInner(e, t, n, o, i) {
                var r = getLine(e, t.line);
                if (r.markedSpans) for (var a = 0; a < r.markedSpans.length; ++a) {
                    var s = r.markedSpans[a], l = s.marker;
                    if ((null == s.from || (l.inclusiveLeft ? s.from <= t.ch : s.from < t.ch)) && (null == s.to || (l.inclusiveRight ? s.to >= t.ch : s.to > t.ch))) {
                        if (i && (signal(l, "beforeCursorEnter"), l.explicitlyCleared)) {
                            if (r.markedSpans) {
                                --a;
                                continue
                            }
                            break
                        }
                        if (!l.atomic) continue;
                        if (n) {
                            var c = l.find(o < 0 ? 1 : -1), d = void 0;
                            if ((o < 0 ? l.inclusiveRight : l.inclusiveLeft) && (c = movePos(e, c, -o, c && c.line == t.line ? r : null)), c && c.line == t.line && (d = cmp(c, n)) && (o < 0 ? d < 0 : 0 < d)) return skipAtomicInner(e, c, t, o, i)
                        }
                        var u = l.find(o < 0 ? -1 : 1);
                        return (o < 0 ? l.inclusiveLeft : l.inclusiveRight) && (u = movePos(e, u, o, u.line == t.line ? r : null)), u ? skipAtomicInner(e, u, t, o, i) : null
                    }
                }
                return t
            }

            function skipAtomic(e, t, n, o, i) {
                var r = o || 1,
                    a = skipAtomicInner(e, t, n, r, i) || !i && skipAtomicInner(e, t, n, r, !0) || skipAtomicInner(e, t, n, -r, i) || !i && skipAtomicInner(e, t, n, -r, !0);
                return a || (e.cantEdit = !0, Pos(e.first, 0))
            }

            function movePos(e, t, n, o) {
                return n < 0 && 0 == t.ch ? t.line > e.first ? clipPos(e, Pos(t.line - 1)) : null : 0 < n && t.ch == (o || getLine(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? Pos(t.line + 1, 0) : null : new Pos(t.line, t.ch + n)
            }

            function selectAll(e) {
                e.setSelection(Pos(e.firstLine(), 0), Pos(e.lastLine()), A)
            }

            function filterChange(i, e, t) {
                var r = {
                    canceled: !1, from: e.from, to: e.to, text: e.text, origin: e.origin, cancel: function () {
                        return r.canceled = !0
                    }
                };
                return t && (r.update = function (e, t, n, o) {
                    e && (r.from = clipPos(i, e)), t && (r.to = clipPos(i, t)), n && (r.text = n), void 0 !== o && (r.origin = o)
                }), signal(i, "beforeChange", i, r), i.cm && signal(i.cm, "beforeChange", i.cm, r), r.canceled ? null : {
                    from: r.from,
                    to: r.to,
                    text: r.text,
                    origin: r.origin
                }
            }

            function makeChange(e, t, n) {
                if (e.cm) {
                    if (!e.cm.curOp) return operation(e.cm, makeChange)(e, t, n);
                    if (e.cm.state.suppressEdits) return
                }
                if (!(hasHandler(e, "beforeChange") || e.cm && hasHandler(e.cm, "beforeChange")) || (t = filterChange(e, t, !0))) {
                    var o = F && !n && function (e, t, n) {
                        var o = null;
                        if (e.iter(t.line, n.line + 1, function (e) {
                            if (e.markedSpans) for (var t = 0; t < e.markedSpans.length; ++t) {
                                var n = e.markedSpans[t].marker;
                                !n.readOnly || o && -1 != indexOf(o, n) || (o || (o = [])).push(n)
                            }
                        }), !o) return null;
                        for (var i = [{
                            from: t,
                            to: n
                        }], r = 0; r < o.length; ++r) for (var a = o[r], s = a.find(0), l = 0; l < i.length; ++l) {
                            var c = i[l];
                            if (!(cmp(c.to, s.from) < 0 || 0 < cmp(c.from, s.to))) {
                                var d = [l, 1], u = cmp(c.from, s.from), h = cmp(c.to, s.to);
                                (u < 0 || !a.inclusiveLeft && !u) && d.push({
                                    from: c.from,
                                    to: s.from
                                }), (0 < h || !a.inclusiveRight && !h) && d.push({
                                    from: s.to,
                                    to: c.to
                                }), i.splice.apply(i, d), l += d.length - 3
                            }
                        }
                        return i
                    }(e, t.from, t.to);
                    if (o) for (var i = o.length - 1; 0 <= i; --i) makeChangeInner(e, {
                        from: o[i].from,
                        to: o[i].to,
                        text: i ? [""] : t.text,
                        origin: t.origin
                    }); else makeChangeInner(e, t)
                }
            }

            function makeChangeInner(e, n) {
                if (1 != n.text.length || "" != n.text[0] || 0 != cmp(n.from, n.to)) {
                    var t = computeSelAfterChange(e, n);
                    addChangeToHistory(e, n, t, e.cm ? e.cm.curOp.id : NaN), makeChangeSingleDoc(e, n, t, stretchSpansOverChange(e, n));
                    var o = [];
                    linkedDocs(e, function (e, t) {
                        t || -1 != indexOf(o, e.history) || (rebaseHist(e.history, n), o.push(e.history)), makeChangeSingleDoc(e, n, null, stretchSpansOverChange(e, n))
                    })
                }
            }

            function makeChangeFromHistory(i, r, e) {
                var t = i.cm && i.cm.state.suppressEdits;
                if (!t || e) {
                    for (var a, n = i.history, o = i.sel, s = "undo" == r ? n.done : n.undone, l = "undo" == r ? n.undone : n.done, c = 0; c < s.length && (a = s[c], e ? !a.ranges || a.equals(i.sel) : a.ranges); c++) ;
                    if (c != s.length) {
                        for (n.lastOrigin = n.lastSelOrigin = null; ;) {
                            if (!(a = s.pop()).ranges) {
                                if (t) return void s.push(a);
                                break
                            }
                            if (pushSelectionToHistory(a, l), e && !a.equals(i.sel)) return void setSelection(i, a, {clearRedo: !1});
                            o = a
                        }
                        var d = [];
                        pushSelectionToHistory(o, l), l.push({
                            changes: d,
                            generation: n.generation
                        }), n.generation = a.generation || ++n.maxGeneration;
                        for (var u = hasHandler(i, "beforeChange") || i.cm && hasHandler(i.cm, "beforeChange"), h = function (e) {
                            var n = a.changes[e];
                            if (n.origin = r, u && !filterChange(i, n, !1)) return s.length = 0, {};
                            d.push(historyChangeFromChange(i, n));
                            var t = e ? computeSelAfterChange(i, n) : lst(s);
                            makeChangeSingleDoc(i, n, t, mergeOldSpans(i, n)), !e && i.cm && i.cm.scrollIntoView({
                                from: n.from,
                                to: changeEnd(n)
                            });
                            var o = [];
                            linkedDocs(i, function (e, t) {
                                t || -1 != indexOf(o, e.history) || (rebaseHist(e.history, n), o.push(e.history)), makeChangeSingleDoc(e, n, null, mergeOldSpans(e, n))
                            })
                        }, p = a.changes.length - 1; 0 <= p; --p) {
                            var f = h(p);
                            if (f) return f.v
                        }
                    }
                }
            }

            function shiftDoc(e, t) {
                if (0 != t && (e.first += t, e.sel = new ve(map(e.sel.ranges, function (e) {
                    return new ye(Pos(e.anchor.line + t, e.anchor.ch), Pos(e.head.line + t, e.head.ch))
                }), e.sel.primIndex), e.cm)) {
                    regChange(e.cm, e.first, e.first - t, t);
                    for (var n = e.cm.display, o = n.viewFrom; o < n.viewTo; o++) regLineChange(e.cm, o, "gutter")
                }
            }

            function makeChangeSingleDoc(e, t, n, o) {
                if (e.cm && !e.cm.curOp) return operation(e.cm, makeChangeSingleDoc)(e, t, n, o);
                if (t.to.line < e.first) shiftDoc(e, t.text.length - 1 - (t.to.line - t.from.line)); else if (!(t.from.line > e.lastLine())) {
                    if (t.from.line < e.first) {
                        var i = t.text.length - 1 - (e.first - t.from.line);
                        shiftDoc(e, i), t = {
                            from: Pos(e.first, 0),
                            to: Pos(t.to.line + i, t.to.ch),
                            text: [lst(t.text)],
                            origin: t.origin
                        }
                    }
                    var r = e.lastLine();
                    t.to.line > r && (t = {
                        from: t.from,
                        to: Pos(r, getLine(e, r).text.length),
                        text: [t.text[0]],
                        origin: t.origin
                    }), t.removed = getBetween(e, t.from, t.to), n || (n = computeSelAfterChange(e, t)), e.cm ? function (e, t, n) {
                        var o = e.doc, i = e.display, r = t.from, a = t.to, s = !1, l = r.line;
                        e.options.lineWrapping || (l = lineNo(visualLine(getLine(o, r.line))), o.iter(l, a.line + 1, function (e) {
                            if (e == i.maxLine) return s = !0
                        })), -1 < o.sel.contains(t.from, t.to) && signalCursorActivity(e), updateDoc(o, t, n, estimateHeight(e)), e.options.lineWrapping || (o.iter(l, r.line + t.text.length, function (e) {
                            var t = lineLength(e);
                            t > i.maxLineLength && (i.maxLine = e, i.maxLineLength = t, i.maxLineChanged = !0, s = !1)
                        }), s && (e.curOp.updateMaxLine = !0)), function (e, t) {
                            if (e.modeFrontier = Math.min(e.modeFrontier, t), !(e.highlightFrontier < t - 10)) {
                                for (var n = e.first, o = t - 1; n < o; o--) {
                                    var i = getLine(e, o).stateAfter;
                                    if (i && (!(i instanceof ee) || o + i.lookAhead < t)) {
                                        n = o + 1;
                                        break
                                    }
                                }
                                e.highlightFrontier = Math.min(e.highlightFrontier, n)
                            }
                        }(o, r.line), startWorker(e, 400);
                        var c = t.text.length - (a.line - r.line) - 1;
                        t.full ? regChange(e) : r.line != a.line || 1 != t.text.length || isWholeLineUpdate(e.doc, t) ? regChange(e, r.line, a.line + 1, c) : regLineChange(e, r.line, "text");
                        var d = hasHandler(e, "changes"), u = hasHandler(e, "change");
                        if (u || d) {
                            var h = {from: r, to: a, text: t.text, removed: t.removed, origin: t.origin};
                            u && signalLater(e, "change", e, h), d && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(h)
                        }
                        e.display.selForContextMenu = null
                    }(e.cm, t, o) : updateDoc(e, t, o), setSelectionNoUndo(e, n, A)
                }
            }

            function replaceRange(e, t, n, o, i) {
                var r;
                o || (o = n), cmp(o, n) < 0 && (n = (r = [o, n])[0], o = r[1]), "string" == typeof t && (t = e.splitLines(t)), makeChange(e, {
                    from: n,
                    to: o,
                    text: t,
                    origin: i
                })
            }

            function rebaseHistSelSingle(e, t, n, o) {
                n < e.line ? e.line += o : t < e.line && (e.line = t, e.ch = 0)
            }

            function rebaseHistArray(e, t, n, o) {
                for (var i = 0; i < e.length; ++i) {
                    var r = e[i], a = !0;
                    if (r.ranges) {
                        r.copied || ((r = e[i] = r.deepCopy()).copied = !0);
                        for (var s = 0; s < r.ranges.length; s++) rebaseHistSelSingle(r.ranges[s].anchor, t, n, o), rebaseHistSelSingle(r.ranges[s].head, t, n, o)
                    } else {
                        for (var l = 0; l < r.changes.length; ++l) {
                            var c = r.changes[l];
                            if (n < c.from.line) c.from = Pos(c.from.line + o, c.from.ch), c.to = Pos(c.to.line + o, c.to.ch); else if (t <= c.to.line) {
                                a = !1;
                                break
                            }
                        }
                        a || (e.splice(0, i + 1), i = 0)
                    }
                }
            }

            function rebaseHist(e, t) {
                var n = t.from.line, o = t.to.line, i = t.text.length - (o - n) - 1;
                rebaseHistArray(e.done, n, o, i), rebaseHistArray(e.undone, n, o, i)
            }

            function changeLine(e, t, n, o) {
                var i = t, r = t;
                return "number" == typeof t ? r = getLine(e, clipLine(e, t)) : i = lineNo(t), null == i ? null : (o(r, i) && e.cm && regLineChange(e.cm, i, n), r)
            }

            function LeafChunk(e) {
                this.lines = e, this.parent = null;
                for (var t = 0, n = 0; n < e.length; ++n) e[n].parent = this, t += e[n].height;
                this.height = t
            }

            function BranchChunk(e) {
                this.children = e;
                for (var t = 0, n = 0, o = 0; o < e.length; ++o) {
                    var i = e[o];
                    t += i.chunkSize(), n += i.height, i.parent = this
                }
                this.size = t, this.height = n, this.parent = null
            }

            ye.prototype.from = function () {
                return minPos(this.anchor, this.head)
            }, ye.prototype.to = function () {
                return maxPos(this.anchor, this.head)
            }, ye.prototype.empty = function () {
                return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
            }, LeafChunk.prototype = {
                chunkSize: function () {
                    return this.lines.length
                }, removeInner: function (e, t) {
                    for (var n = e, o = e + t; n < o; ++n) {
                        var i = this.lines[n];
                        this.height -= i.height, (r = i).parent = null, detachMarkedSpans(r), signalLater(i, "delete")
                    }
                    var r;
                    this.lines.splice(e, t)
                }, collapse: function (e) {
                    e.push.apply(e, this.lines)
                }, insertInner: function (e, t, n) {
                    this.height += n, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));
                    for (var o = 0; o < t.length; ++o) t[o].parent = this
                }, iterN: function (e, t, n) {
                    for (var o = e + t; e < o; ++e) if (n(this.lines[e])) return !0
                }
            }, BranchChunk.prototype = {
                chunkSize: function () {
                    return this.size
                }, removeInner: function (e, t) {
                    this.size -= t;
                    for (var n = 0; n < this.children.length; ++n) {
                        var o = this.children[n], i = o.chunkSize();
                        if (e < i) {
                            var r = Math.min(t, i - e), a = o.height;
                            if (o.removeInner(e, r), this.height -= a - o.height, i == r && (this.children.splice(n--, 1), o.parent = null), 0 == (t -= r)) break;
                            e = 0
                        } else e -= i
                    }
                    if (this.size - t < 25 && (1 < this.children.length || !(this.children[0] instanceof LeafChunk))) {
                        var s = [];
                        this.collapse(s), this.children = [new LeafChunk(s)], this.children[0].parent = this
                    }
                }, collapse: function (e) {
                    for (var t = 0; t < this.children.length; ++t) this.children[t].collapse(e)
                }, insertInner: function (e, t, n) {
                    this.size += t.length, this.height += n;
                    for (var o = 0; o < this.children.length; ++o) {
                        var i = this.children[o], r = i.chunkSize();
                        if (e <= r) {
                            if (i.insertInner(e, t, n), i.lines && 50 < i.lines.length) {
                                for (var a = i.lines.length % 25 + 25, s = a; s < i.lines.length;) {
                                    var l = new LeafChunk(i.lines.slice(s, s += 25));
                                    i.height -= l.height, this.children.splice(++o, 0, l), l.parent = this
                                }
                                i.lines = i.lines.slice(0, a), this.maybeSpill()
                            }
                            break
                        }
                        e -= r
                    }
                }, maybeSpill: function () {
                    if (!(this.children.length <= 10)) {
                        var e = this;
                        do {
                            var t = e.children.splice(e.children.length - 5, 5), n = new BranchChunk(t);
                            if (e.parent) {
                                e.size -= n.size, e.height -= n.height;
                                var o = indexOf(e.parent.children, e);
                                e.parent.children.splice(o + 1, 0, n)
                            } else {
                                var i = new BranchChunk(e.children);
                                (i.parent = e).children = [i, n], e = i
                            }
                            n.parent = e.parent
                        } while (10 < e.children.length);
                        e.parent.maybeSpill()
                    }
                }, iterN: function (e, t, n) {
                    for (var o = 0; o < this.children.length; ++o) {
                        var i = this.children[o], r = i.chunkSize();
                        if (e < r) {
                            var a = Math.min(t, r - e);
                            if (i.iterN(e, a, n)) return !0;
                            if (0 == (t -= a)) break;
                            e = 0
                        } else e -= r
                    }
                }
            };
            var be = function (e, t, n) {
                if (n) for (var o in n) n.hasOwnProperty(o) && (this[o] = n[o]);
                this.doc = e, this.node = t
            };

            function adjustScrollWhenAboveVisible(e, t, n) {
                heightAtLine(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && addToScrollTop(e, n)
            }

            be.prototype.clear = function () {
                var e = this.doc.cm, t = this.line.widgets, n = this.line, o = lineNo(n);
                if (null != o && t) {
                    for (var i = 0; i < t.length; ++i) t[i] == this && t.splice(i--, 1);
                    t.length || (n.widgets = null);
                    var r = widgetHeight(this);
                    updateLineHeight(n, Math.max(0, n.height - r)), e && (runInOp(e, function () {
                        adjustScrollWhenAboveVisible(e, n, -r), regLineChange(e, o, "widget")
                    }), signalLater(e, "lineWidgetCleared", e, this, o))
                }
            }, be.prototype.changed = function () {
                var e = this, t = this.height, n = this.doc.cm, o = this.line;
                this.height = null;
                var i = widgetHeight(this) - t;
                i && (lineIsHidden(this.doc, o) || updateLineHeight(o, o.height + i), n && runInOp(n, function () {
                    n.curOp.forceUpdate = !0, adjustScrollWhenAboveVisible(n, o, i), signalLater(n, "lineWidgetChanged", n, e, lineNo(o))
                }))
            }, eventMixin(be);
            var Ce = 0, xe = function (e, t) {
                this.lines = [], this.type = t, this.doc = e, this.id = ++Ce
            };

            function markText(t, o, i, e, n) {
                if (e && e.shared) return function (e, n, o, i, r) {
                    (i = copyObj(i)).shared = !1;
                    var a = [markText(e, n, o, i, r)], s = a[0], l = i.widgetNode;
                    return linkedDocs(e, function (e) {
                        l && (i.widgetNode = l.cloneNode(!0)), a.push(markText(e, clipPos(e, n), clipPos(e, o), i, r));
                        for (var t = 0; t < e.linked.length; ++t) if (e.linked[t].isParent) return;
                        s = lst(a)
                    }), new we(a, s)
                }(t, o, i, e, n);
                if (t.cm && !t.cm.curOp) return operation(t.cm, markText)(t, o, i, e, n);
                var r = new xe(t, n), a = cmp(o, i);
                if (e && copyObj(e, r, !1), 0 < a || 0 == a && !1 !== r.clearWhenEmpty) return r;
                if (r.replacedWith && (r.collapsed = !0, r.widgetNode = eltP("span", [r.replacedWith], "CodeMirror-widget"), e.handleMouseEvents || r.widgetNode.setAttribute("cm-ignore-events", "true"), e.insertLeft && (r.widgetNode.insertLeft = !0)), r.collapsed) {
                    if (conflictingCollapsedRange(t, o.line, o, i, r) || o.line != i.line && conflictingCollapsedRange(t, i.line, o, i, r)) throw new Error("Inserting collapsed marker partially overlapping an existing one");
                    R = !0
                }
                r.addToHistory && addChangeToHistory(t, {from: o, to: i, origin: "markText"}, t.sel, NaN);
                var s, l = o.line, c = t.cm;
                if (t.iter(l, i.line + 1, function (e) {
                    var t, n;
                    c && r.collapsed && !c.options.lineWrapping && visualLine(e) == c.display.maxLine && (s = !0), r.collapsed && l != o.line && updateLineHeight(e, 0), t = e, n = new MarkedSpan(r, l == o.line ? o.ch : null, l == i.line ? i.ch : null), t.markedSpans = t.markedSpans ? t.markedSpans.concat([n]) : [n], n.marker.attachLine(t), ++l
                }), r.collapsed && t.iter(o.line, i.line + 1, function (e) {
                    lineIsHidden(t, e) && updateLineHeight(e, 0)
                }), r.clearOnEnter && z(r, "beforeCursorEnter", function () {
                    return r.clear()
                }), r.readOnly && (F = !0, (t.history.done.length || t.history.undone.length) && t.clearHistory()), r.collapsed && (r.id = ++Ce, r.atomic = !0), c) {
                    if (s && (c.curOp.updateMaxLine = !0), r.collapsed) regChange(c, o.line, i.line + 1); else if (r.className || r.startStyle || r.endStyle || r.css || r.attributes || r.title) for (var d = o.line; d <= i.line; d++) regLineChange(c, d, "text");
                    r.atomic && reCheckSelection(c.doc), signalLater(c, "markerAdded", c, r)
                }
                return r
            }

            xe.prototype.clear = function () {
                var e = this;
                if (!this.explicitlyCleared) {
                    var t = this.doc.cm, n = t && !t.curOp;
                    if (n && startOperation(t), hasHandler(this, "clear")) {
                        var o = this.find();
                        o && signalLater(this, "clear", o.from, o.to)
                    }
                    for (var i = null, r = null, a = 0; a < this.lines.length; ++a) {
                        var s = e.lines[a], l = getMarkedSpanFor(s.markedSpans, e);
                        t && !e.collapsed ? regLineChange(t, lineNo(s), "text") : t && (null != l.to && (r = lineNo(s)), null != l.from && (i = lineNo(s))), s.markedSpans = removeMarkedSpan(s.markedSpans, l), null == l.from && e.collapsed && !lineIsHidden(e.doc, s) && t && updateLineHeight(s, textHeight(t.display))
                    }
                    if (t && this.collapsed && !t.options.lineWrapping) for (var c = 0; c < this.lines.length; ++c) {
                        var d = visualLine(e.lines[c]), u = lineLength(d);
                        u > t.display.maxLineLength && (t.display.maxLine = d, t.display.maxLineLength = u, t.display.maxLineChanged = !0)
                    }
                    null != i && t && this.collapsed && regChange(t, i, r + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, t && reCheckSelection(t.doc)), t && signalLater(t, "markerCleared", t, this, i, r), n && endOperation(t), this.parent && this.parent.clear()
                }
            }, xe.prototype.find = function (e, t) {
                var n, o;
                null == e && "bookmark" == this.type && (e = 1);
                for (var i = 0; i < this.lines.length; ++i) {
                    var r = this.lines[i], a = getMarkedSpanFor(r.markedSpans, this);
                    if (null != a.from && (n = Pos(t ? r : lineNo(r), a.from), -1 == e)) return n;
                    if (null != a.to && (o = Pos(t ? r : lineNo(r), a.to), 1 == e)) return o
                }
                return n && {from: n, to: o}
            }, xe.prototype.changed = function () {
                var r = this, a = this.find(-1, !0), s = this, l = this.doc.cm;
                a && l && runInOp(l, function () {
                    var e = a.line, t = lineNo(a.line), n = findViewForLine(l, t);
                    if (n && (clearLineMeasurementCacheFor(n), l.curOp.selectionChanged = l.curOp.forceUpdate = !0), l.curOp.updateMaxLine = !0, !lineIsHidden(s.doc, e) && null != s.height) {
                        var o = s.height;
                        s.height = null;
                        var i = widgetHeight(s) - o;
                        i && updateLineHeight(e, e.height + i)
                    }
                    signalLater(l, "markerChanged", l, r)
                })
            }, xe.prototype.attachLine = function (e) {
                if (!this.lines.length && this.doc.cm) {
                    var t = this.doc.cm.curOp;
                    t.maybeHiddenMarkers && -1 != indexOf(t.maybeHiddenMarkers, this) || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this)
                }
                this.lines.push(e)
            }, xe.prototype.detachLine = function (e) {
                if (this.lines.splice(indexOf(this.lines, e), 1), !this.lines.length && this.doc.cm) {
                    var t = this.doc.cm.curOp;
                    (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this)
                }
            }, eventMixin(xe);
            var we = function (e, t) {
                this.markers = e, this.primary = t;
                for (var n = 0; n < e.length; ++n) e[n].parent = this
            };

            function findSharedMarkers(e) {
                return e.findMarks(Pos(e.first, 0), e.clipPos(Pos(e.lastLine())), function (e) {
                    return e.parent
                })
            }

            function detachSharedMarkers(r) {
                for (var e = function (e) {
                    var t = r[e], n = [t.primary.doc];
                    linkedDocs(t.primary.doc, function (e) {
                        return n.push(e)
                    });
                    for (var o = 0; o < t.markers.length; o++) {
                        var i = t.markers[o];
                        -1 == indexOf(n, i.doc) && (i.parent = null, t.markers.splice(o--, 1))
                    }
                }, t = 0; t < r.length; t++) e(t)
            }

            we.prototype.clear = function () {
                if (!this.explicitlyCleared) {
                    this.explicitlyCleared = !0;
                    for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear();
                    signalLater(this, "clear")
                }
            }, we.prototype.find = function (e, t) {
                return this.primary.find(e, t)
            }, eventMixin(we);
            var ke = 0, Se = function (e, t, n, o, i) {
                if (!(this instanceof Se)) return new Se(e, t, n, o, i);
                null == n && (n = 0), BranchChunk.call(this, [new LeafChunk([new oe("", null)])]), this.first = n, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = n;
                var r = Pos(n, 0);
                this.sel = simpleSelection(r), this.history = new History(null), this.id = ++ke, this.modeOption = t, this.lineSep = o, this.direction = "rtl" == i ? "rtl" : "ltr", this.extend = !1, "string" == typeof e && (e = this.splitLines(e)), updateDoc(this, {
                    from: r,
                    to: r,
                    text: e
                }), setSelection(this, simpleSelection(r), A)
            };
            Se.prototype = createObj(BranchChunk.prototype, {
                constructor: Se, iter: function (e, t, n) {
                    n ? this.iterN(e - this.first, t - e, n) : this.iterN(this.first, this.first + this.size, e)
                }, insert: function (e, t) {
                    for (var n = 0, o = 0; o < t.length; ++o) n += t[o].height;
                    this.insertInner(e - this.first, t, n)
                }, remove: function (e, t) {
                    this.removeInner(e - this.first, t)
                }, getValue: function (e) {
                    var t = getLines(this, this.first, this.first + this.size);
                    return !1 === e ? t : t.join(e || this.lineSeparator())
                }, setValue: docMethodOp(function (e) {
                    var t = Pos(this.first, 0), n = this.first + this.size - 1;
                    makeChange(this, {
                        from: t,
                        to: Pos(n, getLine(this, n).text.length),
                        text: this.splitLines(e),
                        origin: "setValue",
                        full: !0
                    }, !0), this.cm && scrollToCoords(this.cm, 0, 0), setSelection(this, simpleSelection(t), A)
                }), replaceRange: function (e, t, n, o) {
                    t = clipPos(this, t), n = n ? clipPos(this, n) : t, replaceRange(this, e, t, n, o)
                }, getRange: function (e, t, n) {
                    var o = getBetween(this, clipPos(this, e), clipPos(this, t));
                    return !1 === n ? o : o.join(n || this.lineSeparator())
                }, getLine: function (e) {
                    var t = this.getLineHandle(e);
                    return t && t.text
                }, getLineHandle: function (e) {
                    if (isLine(this, e)) return getLine(this, e)
                }, getLineNumber: function (e) {
                    return lineNo(e)
                }, getLineHandleVisualStart: function (e) {
                    return "number" == typeof e && (e = getLine(this, e)), visualLine(e)
                }, lineCount: function () {
                    return this.size
                }, firstLine: function () {
                    return this.first
                }, lastLine: function () {
                    return this.first + this.size - 1
                }, clipPos: function (e) {
                    return clipPos(this, e)
                }, getCursor: function (e) {
                    var t = this.sel.primary();
                    return null == e || "head" == e ? t.head : "anchor" == e ? t.anchor : "end" == e || "to" == e || !1 === e ? t.to() : t.from()
                }, listSelections: function () {
                    return this.sel.ranges
                }, somethingSelected: function () {
                    return this.sel.somethingSelected()
                }, setCursor: docMethodOp(function (e, t, n) {
                    setSimpleSelection(this, clipPos(this, "number" == typeof e ? Pos(e, t || 0) : e), null, n)
                }), setSelection: docMethodOp(function (e, t, n) {
                    setSimpleSelection(this, clipPos(this, e), clipPos(this, t || e), n)
                }), extendSelection: docMethodOp(function (e, t, n) {
                    extendSelection(this, clipPos(this, e), t && clipPos(this, t), n)
                }), extendSelections: docMethodOp(function (e, t) {
                    extendSelections(this, clipPosArray(this, e), t)
                }), extendSelectionsBy: docMethodOp(function (e, t) {
                    var n = map(this.sel.ranges, e);
                    extendSelections(this, clipPosArray(this, n), t)
                }), setSelections: docMethodOp(function (e, t, n) {
                    if (e.length) {
                        for (var o = [], i = 0; i < e.length; i++) o[i] = new ye(clipPos(this, e[i].anchor), clipPos(this, e[i].head));
                        null == t && (t = Math.min(e.length - 1, this.sel.primIndex)), setSelection(this, normalizeSelection(this.cm, o, t), n)
                    }
                }), addSelection: docMethodOp(function (e, t, n) {
                    var o = this.sel.ranges.slice(0);
                    o.push(new ye(clipPos(this, e), clipPos(this, t || e))), setSelection(this, normalizeSelection(this.cm, o, o.length - 1), n)
                }), getSelection: function (e) {
                    for (var t, n = this.sel.ranges, o = 0; o < n.length; o++) {
                        var i = getBetween(this, n[o].from(), n[o].to());
                        t = t ? t.concat(i) : i
                    }
                    return !1 === e ? t : t.join(e || this.lineSeparator())
                }, getSelections: function (e) {
                    for (var t = [], n = this.sel.ranges, o = 0; o < n.length; o++) {
                        var i = getBetween(this, n[o].from(), n[o].to());
                        !1 !== e && (i = i.join(e || this.lineSeparator())), t[o] = i
                    }
                    return t
                }, replaceSelection: function (e, t, n) {
                    for (var o = [], i = 0; i < this.sel.ranges.length; i++) o[i] = e;
                    this.replaceSelections(o, t, n || "+input")
                }, replaceSelections: docMethodOp(function (e, t, n) {
                    for (var o = [], i = this.sel, r = 0; r < i.ranges.length; r++) {
                        var a = i.ranges[r];
                        o[r] = {from: a.from(), to: a.to(), text: this.splitLines(e[r]), origin: n}
                    }
                    for (var s = t && "end" != t && function (e, t, n) {
                        for (var o = [], i = Pos(e.first, 0), r = i, a = 0; a < t.length; a++) {
                            var s = t[a], l = offsetPos(s.from, i, r), c = offsetPos(changeEnd(s), i, r);
                            if (i = s.to, r = c, "around" == n) {
                                var d = e.sel.ranges[a], u = cmp(d.head, d.anchor) < 0;
                                o[a] = new ye(u ? c : l, u ? l : c)
                            } else o[a] = new ye(l, l)
                        }
                        return new ve(o, e.sel.primIndex)
                    }(this, o, t), l = o.length - 1; 0 <= l; l--) makeChange(this, o[l]);
                    s ? setSelectionReplaceHistory(this, s) : this.cm && ensureCursorVisible(this.cm)
                }), undo: docMethodOp(function () {
                    makeChangeFromHistory(this, "undo")
                }), redo: docMethodOp(function () {
                    makeChangeFromHistory(this, "redo")
                }), undoSelection: docMethodOp(function () {
                    makeChangeFromHistory(this, "undo", !0)
                }), redoSelection: docMethodOp(function () {
                    makeChangeFromHistory(this, "redo", !0)
                }), setExtending: function (e) {
                    this.extend = e
                }, getExtending: function () {
                    return this.extend
                }, historySize: function () {
                    for (var e = this.history, t = 0, n = 0, o = 0; o < e.done.length; o++) e.done[o].ranges || ++t;
                    for (var i = 0; i < e.undone.length; i++) e.undone[i].ranges || ++n;
                    return {undo: t, redo: n}
                }, clearHistory: function () {
                    this.history = new History(this.history.maxGeneration)
                }, markClean: function () {
                    this.cleanGeneration = this.changeGeneration(!0)
                }, changeGeneration: function (e) {
                    return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation
                }, isClean: function (e) {
                    return this.history.generation == (e || this.cleanGeneration)
                }, getHistory: function () {
                    return {done: copyHistoryArray(this.history.done), undone: copyHistoryArray(this.history.undone)}
                }, setHistory: function (e) {
                    var t = this.history = new History(this.history.maxGeneration);
                    t.done = copyHistoryArray(e.done.slice(0), null, !0), t.undone = copyHistoryArray(e.undone.slice(0), null, !0)
                }, setGutterMarker: docMethodOp(function (e, n, o) {
                    return changeLine(this, e, "gutter", function (e) {
                        var t = e.gutterMarkers || (e.gutterMarkers = {});
                        return !(t[n] = o) && isEmpty(t) && (e.gutterMarkers = null), !0
                    })
                }), clearGutter: docMethodOp(function (t) {
                    var n = this;
                    this.iter(function (e) {
                        e.gutterMarkers && e.gutterMarkers[t] && changeLine(n, e, "gutter", function () {
                            return e.gutterMarkers[t] = null, isEmpty(e.gutterMarkers) && (e.gutterMarkers = null), !0
                        })
                    })
                }), lineInfo: function (e) {
                    var t;
                    if ("number" == typeof e) {
                        if (!isLine(this, e)) return null;
                        if (!(e = getLine(this, t = e))) return null
                    } else if (null == (t = lineNo(e))) return null;
                    return {
                        line: t,
                        handle: e,
                        text: e.text,
                        gutterMarkers: e.gutterMarkers,
                        textClass: e.textClass,
                        bgClass: e.bgClass,
                        wrapClass: e.wrapClass,
                        widgets: e.widgets
                    }
                }, addLineClass: docMethodOp(function (e, n, o) {
                    return changeLine(this, e, "gutter" == n ? "gutter" : "class", function (e) {
                        var t = "text" == n ? "textClass" : "background" == n ? "bgClass" : "gutter" == n ? "gutterClass" : "wrapClass";
                        if (e[t]) {
                            if (classTest(o).test(e[t])) return !1;
                            e[t] += " " + o
                        } else e[t] = o;
                        return !0
                    })
                }), removeLineClass: docMethodOp(function (e, r, a) {
                    return changeLine(this, e, "gutter" == r ? "gutter" : "class", function (e) {
                        var t = "text" == r ? "textClass" : "background" == r ? "bgClass" : "gutter" == r ? "gutterClass" : "wrapClass",
                            n = e[t];
                        if (!n) return !1;
                        if (null == a) e[t] = null; else {
                            var o = n.match(classTest(a));
                            if (!o) return !1;
                            var i = o.index + o[0].length;
                            e[t] = n.slice(0, o.index) + (o.index && i != n.length ? " " : "") + n.slice(i) || null
                        }
                        return !0
                    })
                }), addLineWidget: docMethodOp(function (e, t, n) {
                    return i = e, r = new be(o = this, t, n), (a = o.cm) && r.noHScroll && (a.display.alignWidgets = !0), changeLine(o, i, "widget", function (e) {
                        var t = e.widgets || (e.widgets = []);
                        if (null == r.insertAt ? t.push(r) : t.splice(Math.min(t.length - 1, Math.max(0, r.insertAt)), 0, r), r.line = e, a && !lineIsHidden(o, e)) {
                            var n = heightAtLine(e) < o.scrollTop;
                            updateLineHeight(e, e.height + widgetHeight(r)), n && addToScrollTop(a, r.height), a.curOp.forceUpdate = !0
                        }
                        return !0
                    }), a && signalLater(a, "lineWidgetAdded", a, r, "number" == typeof i ? i : lineNo(i)), r;
                    var o, i, r, a
                }), removeLineWidget: function (e) {
                    e.clear()
                }, markText: function (e, t, n) {
                    return markText(this, clipPos(this, e), clipPos(this, t), n, n && n.type || "range")
                }, setBookmark: function (e, t) {
                    var n = {
                        replacedWith: t && (null == t.nodeType ? t.widget : t),
                        insertLeft: t && t.insertLeft,
                        clearWhenEmpty: !1,
                        shared: t && t.shared,
                        handleMouseEvents: t && t.handleMouseEvents
                    };
                    return markText(this, e = clipPos(this, e), e, n, "bookmark")
                }, findMarksAt: function (e) {
                    e = clipPos(this, e);
                    var t = [], n = getLine(this, e.line).markedSpans;
                    if (n) for (var o = 0; o < n.length; ++o) {
                        var i = n[o];
                        (null == i.from || i.from <= e.ch) && (null == i.to || i.to >= e.ch) && t.push(i.marker.parent || i.marker)
                    }
                    return t
                }, findMarks: function (i, r, a) {
                    i = clipPos(this, i), r = clipPos(this, r);
                    var s = [], l = i.line;
                    return this.iter(i.line, r.line + 1, function (e) {
                        var t = e.markedSpans;
                        if (t) for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            null != o.to && l == i.line && i.ch >= o.to || null == o.from && l != i.line || null != o.from && l == r.line && o.from >= r.ch || a && !a(o.marker) || s.push(o.marker.parent || o.marker)
                        }
                        ++l
                    }), s
                }, getAllMarks: function () {
                    var o = [];
                    return this.iter(function (e) {
                        var t = e.markedSpans;
                        if (t) for (var n = 0; n < t.length; ++n) null != t[n].from && o.push(t[n].marker)
                    }), o
                }, posFromIndex: function (n) {
                    var o, i = this.first, r = this.lineSeparator().length;
                    return this.iter(function (e) {
                        var t = e.text.length + r;
                        if (n < t) return o = n, !0;
                        n -= t, ++i
                    }), clipPos(this, Pos(i, o))
                }, indexFromPos: function (e) {
                    var t = (e = clipPos(this, e)).ch;
                    if (e.line < this.first || e.ch < 0) return 0;
                    var n = this.lineSeparator().length;
                    return this.iter(this.first, e.line, function (e) {
                        t += e.text.length + n
                    }), t
                }, copy: function (e) {
                    var t = new Se(getLines(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction);
                    return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = this.sel, t.extend = !1, e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())), t
                }, linkedDoc: function (e) {
                    e || (e = {});
                    var t = this.first, n = this.first + this.size;
                    null != e.from && e.from > t && (t = e.from), null != e.to && e.to < n && (n = e.to);
                    var o = new Se(getLines(this, t, n), e.mode || this.modeOption, t, this.lineSep, this.direction);
                    return e.sharedHist && (o.history = this.history), (this.linked || (this.linked = [])).push({
                        doc: o,
                        sharedHist: e.sharedHist
                    }), o.linked = [{doc: this, isParent: !0, sharedHist: e.sharedHist}], function (e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n], i = o.find(), r = e.clipPos(i.from), a = e.clipPos(i.to);
                            if (cmp(r, a)) {
                                var s = markText(e, r, a, o.primary, o.primary.type);
                                o.markers.push(s), s.parent = o
                            }
                        }
                    }(o, findSharedMarkers(this)), o
                }, unlinkDoc: function (e) {
                    if (e instanceof CodeMirror && (e = e.doc), this.linked) for (var t = 0; t < this.linked.length; ++t) {
                        var n = this.linked[t];
                        if (n.doc == e) {
                            this.linked.splice(t, 1), e.unlinkDoc(this), detachSharedMarkers(findSharedMarkers(this));
                            break
                        }
                    }
                    if (e.history == this.history) {
                        var o = [e.id];
                        linkedDocs(e, function (e) {
                            return o.push(e.id)
                        }, !0), e.history = new History(null), e.history.done = copyHistoryArray(this.history.done, o), e.history.undone = copyHistoryArray(this.history.undone, o)
                    }
                }, iterLinkedDocs: function (e) {
                    linkedDocs(this, e)
                }, getMode: function () {
                    return this.mode
                }, getEditor: function () {
                    return this.cm
                }, splitLines: function (e) {
                    return this.lineSep ? e.split(this.lineSep) : G(e)
                }, lineSeparator: function () {
                    return this.lineSep || "\n"
                }, setDirection: docMethodOp(function (e) {
                    var t;
                    "rtl" != e && (e = "ltr"), e != this.direction && (this.direction = e, this.iter(function (e) {
                        return e.order = null
                    }), this.cm && runInOp(t = this.cm, function () {
                        setDirectionClass(t), regChange(t)
                    }))
                })
            }), Se.prototype.eachLine = Se.prototype.iter;
            var Le = 0;

            function onDrop(e) {
                var i = this;
                if (clearDragCursor(i), !signalDOMEvent(i, e) && !eventInWidget(i.display, e)) {
                    e_preventDefault(e), x && (Le = +new Date);
                    var r = posFromMouse(i, e, !0), t = e.dataTransfer.files;
                    if (r && !i.isReadOnly()) if (t && t.length && window.FileReader && window.File) for (var a = t.length, s = Array(a), l = 0, n = function (e, n) {
                        if (!i.options.allowDropFileTypes || -1 != indexOf(i.options.allowDropFileTypes, e.type)) {
                            var o = new FileReader;
                            o.onload = operation(i, function () {
                                var e = o.result;
                                if (/[\x00-\x08\x0e-\x1f]{2}/.test(e) && (e = ""), s[n] = e, ++l == a) {
                                    var t = {
                                        from: r = clipPos(i.doc, r),
                                        to: r,
                                        text: i.doc.splitLines(s.join(i.doc.lineSeparator())),
                                        origin: "paste"
                                    };
                                    makeChange(i.doc, t), setSelectionReplaceHistory(i.doc, simpleSelection(r, changeEnd(t)))
                                }
                            }), o.readAsText(e)
                        }
                    }, o = 0; o < a; ++o) n(t[o], o); else {
                        if (i.state.draggingText && -1 < i.doc.sel.contains(r)) return i.state.draggingText(e), void setTimeout(function () {
                            return i.display.input.focus()
                        }, 20);
                        try {
                            var c = e.dataTransfer.getData("Text");
                            if (c) {
                                var d;
                                if (i.state.draggingText && !i.state.draggingText.copy && (d = i.listSelections()), setSelectionNoUndo(i.doc, simpleSelection(r, r)), d) for (var u = 0; u < d.length; ++u) replaceRange(i.doc, "", d[u].anchor, d[u].head, "drag");
                                i.replaceSelection(c, "around", "paste"), i.display.input.focus()
                            }
                        } catch (e) {
                        }
                    }
                }
            }

            function clearDragCursor(e) {
                e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null)
            }

            function forEachCodeMirror(t) {
                if (document.getElementsByClassName) {
                    for (var e = document.getElementsByClassName("CodeMirror"), n = [], o = 0; o < e.length; o++) {
                        var i = e[o].CodeMirror;
                        i && n.push(i)
                    }
                    n.length && n[0].operation(function () {
                        for (var e = 0; e < n.length; e++) t(n[e])
                    })
                }
            }

            var Te = !1;

            function ensureGlobalHandlers() {
                var e;
                Te || (z(window, "resize", function () {
                    null == e && (e = setTimeout(function () {
                        e = null, forEachCodeMirror(onResize)
                    }, 100))
                }), z(window, "blur", function () {
                    return forEachCodeMirror(onBlur)
                }), Te = !0)
            }

            function onResize(e) {
                var t = e.display;
                t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, t.scrollbarsClipped = !1, e.setSize()
            }

            for (var Pe = {
                3: "Pause",
                8: "Backspace",
                9: "Tab",
                13: "Enter",
                16: "Shift",
                17: "Ctrl",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Esc",
                32: "Space",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "Left",
                38: "Up",
                39: "Right",
                40: "Down",
                44: "PrintScrn",
                45: "Insert",
                46: "Delete",
                59: ";",
                61: "=",
                91: "Mod",
                92: "Mod",
                93: "Mod",
                106: "*",
                107: "=",
                109: "-",
                110: ".",
                111: "/",
                127: "Delete",
                145: "ScrollLock",
                173: "-",
                186: ";",
                187: "=",
                188: ",",
                189: "-",
                190: ".",
                191: "/",
                192: "`",
                219: "[",
                220: "\\",
                221: "]",
                222: "'",
                63232: "Up",
                63233: "Down",
                63234: "Left",
                63235: "Right",
                63272: "Delete",
                63273: "Home",
                63275: "End",
                63276: "PageUp",
                63277: "PageDown",
                63302: "Insert"
            }, Me = 0; Me < 10; Me++) Pe[Me + 48] = Pe[Me + 96] = String(Me);
            for (var Ne = 65; Ne <= 90; Ne++) Pe[Ne] = String.fromCharCode(Ne);
            for (var Ae = 1; Ae <= 12; Ae++) Pe[Ae + 111] = Pe[Ae + 63235] = "F" + Ae;
            var He = {};

            function normalizeKeyName(e) {
                var t, n, o, i, r = e.split(/-(?!$)/);
                e = r[r.length - 1];
                for (var a = 0; a < r.length - 1; a++) {
                    var s = r[a];
                    if (/^(cmd|meta|m)$/i.test(s)) i = !0; else if (/^a(lt)?$/i.test(s)) t = !0; else if (/^(c|ctrl|control)$/i.test(s)) n = !0; else {
                        if (!/^s(hift)?$/i.test(s)) throw new Error("Unrecognized modifier name: " + s);
                        o = !0
                    }
                }
                return t && (e = "Alt-" + e), n && (e = "Ctrl-" + e), i && (e = "Cmd-" + e), o && (e = "Shift-" + e), e
            }

            function normalizeKeyMap(e) {
                var t = {};
                for (var n in e) if (e.hasOwnProperty(n)) {
                    var o = e[n];
                    if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue;
                    if ("..." == o) {
                        delete e[n];
                        continue
                    }
                    for (var i = map(n.split(" "), normalizeKeyName), r = 0; r < i.length; r++) {
                        var a = void 0, s = void 0;
                        a = r == i.length - 1 ? (s = i.join(" "), o) : (s = i.slice(0, r + 1).join(" "), "...");
                        var l = t[s];
                        if (l) {
                            if (l != a) throw new Error("Inconsistent bindings for " + s)
                        } else t[s] = a
                    }
                    delete e[n]
                }
                for (var c in t) e[c] = t[c];
                return e
            }

            function lookupKey(e, t, n, o) {
                var i = (t = getKeyMap(t)).call ? t.call(e, o) : t[e];
                if (!1 === i) return "nothing";
                if ("..." === i) return "multi";
                if (null != i && n(i)) return "handled";
                if (t.fallthrough) {
                    if ("[object Array]" != Object.prototype.toString.call(t.fallthrough)) return lookupKey(e, t.fallthrough, n, o);
                    for (var r = 0; r < t.fallthrough.length; r++) {
                        var a = lookupKey(e, t.fallthrough[r], n, o);
                        if (a) return a
                    }
                }
            }

            function isModifierKey(e) {
                var t = "string" == typeof e ? e : Pe[e.keyCode];
                return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t
            }

            function addModifierNames(e, t, n) {
                var o = e;
                return t.altKey && "Alt" != o && (e = "Alt-" + e), (C ? t.metaKey : t.ctrlKey) && "Ctrl" != o && (e = "Ctrl-" + e), (C ? t.ctrlKey : t.metaKey) && "Cmd" != o && (e = "Cmd-" + e), !n && t.shiftKey && "Shift" != o && (e = "Shift-" + e), e
            }

            function keyName(e, t) {
                if (m && 34 == e.keyCode && e.char) return !1;
                var n = Pe[e.keyCode];
                return null != n && !e.altGraphKey && (3 == e.keyCode && e.code && (n = e.code), addModifierNames(n, e, t))
            }

            function getKeyMap(e) {
                return "string" == typeof e ? He[e] : e
            }

            function deleteNearSelection(t, e) {
                for (var n = t.doc.sel.ranges, o = [], i = 0; i < n.length; i++) {
                    for (var r = e(n[i]); o.length && cmp(r.from, lst(o).to) <= 0;) {
                        var a = o.pop();
                        if (cmp(a.from, r.from) < 0) {
                            r.from = a.from;
                            break
                        }
                    }
                    o.push(r)
                }
                runInOp(t, function () {
                    for (var e = o.length - 1; 0 <= e; e--) replaceRange(t.doc, "", o[e].from, o[e].to, "+delete");
                    ensureCursorVisible(t)
                })
            }

            function moveCharLogically(e, t, n) {
                var o = skipExtendingChars(e.text, t + n, n);
                return o < 0 || o > e.text.length ? null : o
            }

            function moveLogically(e, t, n) {
                var o = moveCharLogically(e, t.ch, n);
                return null == o ? null : new Pos(t.line, o, n < 0 ? "after" : "before")
            }

            function endOfLine(e, t, n, o, i) {
                if (e) {
                    var r = getOrder(n, t.doc.direction);
                    if (r) {
                        var a, s = i < 0 ? lst(r) : r[0], l = i < 0 == (1 == s.level), c = l ? "after" : "before";
                        if (0 < s.level || "rtl" == t.doc.direction) {
                            var d = prepareMeasureForLine(t, n);
                            a = i < 0 ? n.text.length - 1 : 0;
                            var u = measureCharPrepared(t, d, a).top;
                            a = findFirst(function (e) {
                                return measureCharPrepared(t, d, e).top == u
                            }, i < 0 == (1 == s.level) ? s.from : s.to - 1, a), "before" == c && (a = moveCharLogically(n, a, 1))
                        } else a = i < 0 ? s.to : s.from;
                        return new Pos(o, a, c)
                    }
                }
                return new Pos(o, i < 0 ? n.text.length : 0, i < 0 ? "before" : "after")
            }

            He.basic = {
                Left: "goCharLeft",
                Right: "goCharRight",
                Up: "goLineUp",
                Down: "goLineDown",
                End: "goLineEnd",
                Home: "goLineStartSmart",
                PageUp: "goPageUp",
                PageDown: "goPageDown",
                Delete: "delCharAfter",
                Backspace: "delCharBefore",
                "Shift-Backspace": "delCharBefore",
                Tab: "defaultTab",
                "Shift-Tab": "indentAuto",
                Enter: "newlineAndIndent",
                Insert: "toggleOverwrite",
                Esc: "singleSelection"
            }, He.pcDefault = {
                "Ctrl-A": "selectAll",
                "Ctrl-D": "deleteLine",
                "Ctrl-Z": "undo",
                "Shift-Ctrl-Z": "redo",
                "Ctrl-Y": "redo",
                "Ctrl-Home": "goDocStart",
                "Ctrl-End": "goDocEnd",
                "Ctrl-Up": "goLineUp",
                "Ctrl-Down": "goLineDown",
                "Ctrl-Left": "goGroupLeft",
                "Ctrl-Right": "goGroupRight",
                "Alt-Left": "goLineStart",
                "Alt-Right": "goLineEnd",
                "Ctrl-Backspace": "delGroupBefore",
                "Ctrl-Delete": "delGroupAfter",
                "Ctrl-S": "save",
                "Ctrl-F": "find",
                "Ctrl-G": "findNext",
                "Shift-Ctrl-G": "findPrev",
                "Shift-Ctrl-F": "replace",
                "Shift-Ctrl-R": "replaceAll",
                "Ctrl-[": "indentLess",
                "Ctrl-]": "indentMore",
                "Ctrl-U": "undoSelection",
                "Shift-Ctrl-U": "redoSelection",
                "Alt-U": "redoSelection",
                fallthrough: "basic"
            }, He.emacsy = {
                "Ctrl-F": "goCharRight",
                "Ctrl-B": "goCharLeft",
                "Ctrl-P": "goLineUp",
                "Ctrl-N": "goLineDown",
                "Alt-F": "goWordRight",
                "Alt-B": "goWordLeft",
                "Ctrl-A": "goLineStart",
                "Ctrl-E": "goLineEnd",
                "Ctrl-V": "goPageDown",
                "Shift-Ctrl-V": "goPageUp",
                "Ctrl-D": "delCharAfter",
                "Ctrl-H": "delCharBefore",
                "Alt-D": "delWordAfter",
                "Alt-Backspace": "delWordBefore",
                "Ctrl-K": "killLine",
                "Ctrl-T": "transposeChars",
                "Ctrl-O": "openLine"
            }, He.macDefault = {
                "Cmd-A": "selectAll",
                "Cmd-D": "deleteLine",
                "Cmd-Z": "undo",
                "Shift-Cmd-Z": "redo",
                "Cmd-Y": "redo",
                "Cmd-Home": "goDocStart",
                "Cmd-Up": "goDocStart",
                "Cmd-End": "goDocEnd",
                "Cmd-Down": "goDocEnd",
                "Alt-Left": "goGroupLeft",
                "Alt-Right": "goGroupRight",
                "Cmd-Left": "goLineLeft",
                "Cmd-Right": "goLineRight",
                "Alt-Backspace": "delGroupBefore",
                "Ctrl-Alt-Backspace": "delGroupAfter",
                "Alt-Delete": "delGroupAfter",
                "Cmd-S": "save",
                "Cmd-F": "find",
                "Cmd-G": "findNext",
                "Shift-Cmd-G": "findPrev",
                "Cmd-Alt-F": "replace",
                "Shift-Cmd-Alt-F": "replaceAll",
                "Cmd-[": "indentLess",
                "Cmd-]": "indentMore",
                "Cmd-Backspace": "delWrappedLineLeft",
                "Cmd-Delete": "delWrappedLineRight",
                "Cmd-U": "undoSelection",
                "Shift-Cmd-U": "redoSelection",
                "Ctrl-Up": "goDocStart",
                "Ctrl-Down": "goDocEnd",
                fallthrough: ["basic", "emacsy"]
            }, He.default = b ? He.macDefault : He.pcDefault;
            var Ee = {
                selectAll: selectAll, singleSelection: function (e) {
                    return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), A)
                }, killLine: function (n) {
                    return deleteNearSelection(n, function (e) {
                        if (e.empty()) {
                            var t = getLine(n.doc, e.head.line).text.length;
                            return e.head.ch == t && e.head.line < n.lastLine() ? {
                                from: e.head,
                                to: Pos(e.head.line + 1, 0)
                            } : {from: e.head, to: Pos(e.head.line, t)}
                        }
                        return {from: e.from(), to: e.to()}
                    })
                }, deleteLine: function (t) {
                    return deleteNearSelection(t, function (e) {
                        return {from: Pos(e.from().line, 0), to: clipPos(t.doc, Pos(e.to().line + 1, 0))}
                    })
                }, delLineLeft: function (e) {
                    return deleteNearSelection(e, function (e) {
                        return {from: Pos(e.from().line, 0), to: e.from()}
                    })
                }, delWrappedLineLeft: function (o) {
                    return deleteNearSelection(o, function (e) {
                        var t = o.charCoords(e.head, "div").top + 5, n = o.coordsChar({left: 0, top: t}, "div");
                        return {from: n, to: e.from()}
                    })
                }, delWrappedLineRight: function (o) {
                    return deleteNearSelection(o, function (e) {
                        var t = o.charCoords(e.head, "div").top + 5,
                            n = o.coordsChar({left: o.display.lineDiv.offsetWidth + 100, top: t}, "div");
                        return {from: e.from(), to: n}
                    })
                }, undo: function (e) {
                    return e.undo()
                }, redo: function (e) {
                    return e.redo()
                }, undoSelection: function (e) {
                    return e.undoSelection()
                }, redoSelection: function (e) {
                    return e.redoSelection()
                }, goDocStart: function (e) {
                    return e.extendSelection(Pos(e.firstLine(), 0))
                }, goDocEnd: function (e) {
                    return e.extendSelection(Pos(e.lastLine()))
                }, goLineStart: function (t) {
                    return t.extendSelectionsBy(function (e) {
                        return lineStart(t, e.head.line)
                    }, {origin: "+move", bias: 1})
                }, goLineStartSmart: function (t) {
                    return t.extendSelectionsBy(function (e) {
                        return lineStartSmart(t, e.head)
                    }, {origin: "+move", bias: 1})
                }, goLineEnd: function (r) {
                    return r.extendSelectionsBy(function (e) {
                        return t = r, n = e.head.line, o = getLine(t.doc, n), (i = function (e) {
                            for (var t; t = collapsedSpanAtEnd(e);) e = t.find(1, !0).line;
                            return e
                        }(o)) != o && (n = lineNo(i)), endOfLine(!0, t, o, n, -1);
                        var t, n, o, i
                    }, {origin: "+move", bias: -1})
                }, goLineRight: function (n) {
                    return n.extendSelectionsBy(function (e) {
                        var t = n.cursorCoords(e.head, "div").top + 5;
                        return n.coordsChar({left: n.display.lineDiv.offsetWidth + 100, top: t}, "div")
                    }, E)
                }, goLineLeft: function (n) {
                    return n.extendSelectionsBy(function (e) {
                        var t = n.cursorCoords(e.head, "div").top + 5;
                        return n.coordsChar({left: 0, top: t}, "div")
                    }, E)
                }, goLineLeftSmart: function (o) {
                    return o.extendSelectionsBy(function (e) {
                        var t = o.cursorCoords(e.head, "div").top + 5, n = o.coordsChar({left: 0, top: t}, "div");
                        return n.ch < o.getLine(n.line).search(/\S/) ? lineStartSmart(o, e.head) : n
                    }, E)
                }, goLineUp: function (e) {
                    return e.moveV(-1, "line")
                }, goLineDown: function (e) {
                    return e.moveV(1, "line")
                }, goPageUp: function (e) {
                    return e.moveV(-1, "page")
                }, goPageDown: function (e) {
                    return e.moveV(1, "page")
                }, goCharLeft: function (e) {
                    return e.moveH(-1, "char")
                }, goCharRight: function (e) {
                    return e.moveH(1, "char")
                }, goColumnLeft: function (e) {
                    return e.moveH(-1, "column")
                }, goColumnRight: function (e) {
                    return e.moveH(1, "column")
                }, goWordLeft: function (e) {
                    return e.moveH(-1, "word")
                }, goGroupRight: function (e) {
                    return e.moveH(1, "group")
                }, goGroupLeft: function (e) {
                    return e.moveH(-1, "group")
                }, goWordRight: function (e) {
                    return e.moveH(1, "word")
                }, delCharBefore: function (e) {
                    return e.deleteH(-1, "char")
                }, delCharAfter: function (e) {
                    return e.deleteH(1, "char")
                }, delWordBefore: function (e) {
                    return e.deleteH(-1, "word")
                }, delWordAfter: function (e) {
                    return e.deleteH(1, "word")
                }, delGroupBefore: function (e) {
                    return e.deleteH(-1, "group")
                }, delGroupAfter: function (e) {
                    return e.deleteH(1, "group")
                }, indentAuto: function (e) {
                    return e.indentSelection("smart")
                }, indentMore: function (e) {
                    return e.indentSelection("add")
                }, indentLess: function (e) {
                    return e.indentSelection("subtract")
                }, insertTab: function (e) {
                    return e.replaceSelection("\t")
                }, insertSoftTab: function (e) {
                    for (var t = [], n = e.listSelections(), o = e.options.tabSize, i = 0; i < n.length; i++) {
                        var r = n[i].from(), a = countColumn(e.getLine(r.line), r.ch, o);
                        t.push(spaceStr(o - a % o))
                    }
                    e.replaceSelections(t)
                }, defaultTab: function (e) {
                    e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab")
                }, transposeChars: function (a) {
                    return runInOp(a, function () {
                        for (var e = a.listSelections(), t = [], n = 0; n < e.length; n++) if (e[n].empty()) {
                            var o = e[n].head, i = getLine(a.doc, o.line).text;
                            if (i) if (o.ch == i.length && (o = new Pos(o.line, o.ch - 1)), 0 < o.ch) o = new Pos(o.line, o.ch + 1), a.replaceRange(i.charAt(o.ch - 1) + i.charAt(o.ch - 2), Pos(o.line, o.ch - 2), o, "+transpose"); else if (o.line > a.doc.first) {
                                var r = getLine(a.doc, o.line - 1).text;
                                r && (o = new Pos(o.line, 1), a.replaceRange(i.charAt(0) + a.doc.lineSeparator() + r.charAt(r.length - 1), Pos(o.line - 1, r.length - 1), o, "+transpose"))
                            }
                            t.push(new ye(o, o))
                        }
                        a.setSelections(t)
                    })
                }, newlineAndIndent: function (o) {
                    return runInOp(o, function () {
                        for (var e = o.listSelections(), t = e.length - 1; 0 <= t; t--) o.replaceRange(o.doc.lineSeparator(), e[t].anchor, e[t].head, "+input");
                        e = o.listSelections();
                        for (var n = 0; n < e.length; n++) o.indentLine(e[n].from().line, null, !0);
                        ensureCursorVisible(o)
                    })
                }, openLine: function (e) {
                    return e.replaceSelection("\n", "start")
                }, toggleOverwrite: function (e) {
                    return e.toggleOverwrite()
                }
            };

            function lineStart(e, t) {
                var n = getLine(e.doc, t), o = visualLine(n);
                return o != n && (t = lineNo(o)), endOfLine(!0, e, o, t, 1)
            }

            function lineStartSmart(e, t) {
                var n = lineStart(e, t.line), o = getLine(e.doc, n.line), i = getOrder(o, e.doc.direction);
                if (i && 0 != i[0].level) return n;
                var r = Math.max(0, o.text.search(/\S/)), a = t.line == n.line && t.ch <= r && t.ch;
                return Pos(n.line, a ? 0 : r, n.sticky)
            }

            function doHandleBinding(e, t, n) {
                if ("string" == typeof t && !(t = Ee[t])) return !1;
                e.display.input.ensurePolled();
                var o = e.display.shift, i = !1;
                try {
                    e.isReadOnly() && (e.state.suppressEdits = !0), n && (e.display.shift = !1), i = t(e) != N
                } finally {
                    e.display.shift = o, e.state.suppressEdits = !1
                }
                return i
            }

            var Ie = new P;

            function dispatchKey(e, t, n, o) {
                var i = e.state.keySeq;
                if (i) {
                    if (isModifierKey(t)) return "handled";
                    if (/\'$/.test(t) ? e.state.keySeq = null : Ie.set(50, function () {
                        e.state.keySeq == i && (e.state.keySeq = null, e.display.input.reset())
                    }), dispatchKeyInner(e, i + " " + t, n, o)) return !0
                }
                return dispatchKeyInner(e, t, n, o)
            }

            function dispatchKeyInner(e, t, n, o) {
                var i = function (e, t, n) {
                    for (var o = 0; o < e.state.keyMaps.length; o++) {
                        var i = lookupKey(t, e.state.keyMaps[o], n, e);
                        if (i) return i
                    }
                    return e.options.extraKeys && lookupKey(t, e.options.extraKeys, n, e) || lookupKey(t, e.options.keyMap, n, e)
                }(e, t, o);
                return "multi" == i && (e.state.keySeq = t), "handled" == i && signalLater(e, "keyHandled", e, t, n), "handled" != i && "multi" != i || (e_preventDefault(n), restartBlink(e)), !!i
            }

            function handleKeyBinding(t, e) {
                var n = keyName(e, !0);
                return !!n && (e.shiftKey && !t.state.keySeq ? dispatchKey(t, "Shift-" + n, e, function (e) {
                    return doHandleBinding(t, e, !0)
                }) || dispatchKey(t, n, e, function (e) {
                    if ("string" == typeof e ? /^go[A-Z]/.test(e) : e.motion) return doHandleBinding(t, e)
                }) : dispatchKey(t, n, e, function (e) {
                    return doHandleBinding(t, e)
                }))
            }

            var De = null;

            function onKeyDown(e) {
                var t = this;
                if (t.curOp.focus = activeElt(), !signalDOMEvent(t, e)) {
                    x && w < 11 && 27 == e.keyCode && (e.returnValue = !1);
                    var n = e.keyCode;
                    t.display.shift = 16 == n || e.shiftKey;
                    var o = handleKeyBinding(t, e);
                    m && (De = o ? n : null, !o && 88 == n && !q && (b ? e.metaKey : e.ctrlKey) && t.replaceSelection("", null, "cut")), 18 != n || /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) || function (e) {
                        var t = e.display.lineDiv;

                        function up(e) {
                            18 != e.keyCode && e.altKey || (L(t, "CodeMirror-crosshair"), off(document, "keyup", up), off(document, "mouseover", up))
                        }

                        addClass(t, "CodeMirror-crosshair"), z(document, "keyup", up), z(document, "mouseover", up)
                    }(t)
                }
            }

            function onKeyUp(e) {
                16 == e.keyCode && (this.doc.sel.shift = !1), signalDOMEvent(this, e)
            }

            function onKeyPress(e) {
                var t = this;
                if (!(eventInWidget(t.display, e) || signalDOMEvent(t, e) || e.ctrlKey && !e.altKey || b && e.metaKey)) {
                    var n = e.keyCode, o = e.charCode;
                    if (m && n == De) return De = null, void e_preventDefault(e);
                    if (!m || e.which && !(e.which < 10) || !handleKeyBinding(t, e)) {
                        var i, r = String.fromCharCode(null == o ? n : o);
                        "\b" != r && (dispatchKey(i = t, "'" + r + "'", e, function (e) {
                            return doHandleBinding(i, e, !0)
                        }) || t.display.input.onKeyPress(e))
                    }
                }
            }

            var Oe, Fe, Re = function (e, t, n) {
                this.time = e, this.pos = t, this.button = n
            };

            function onMouseDown(e) {
                var n, t, o, i, r, a, s = this, l = s.display;
                if (!(signalDOMEvent(s, e) || l.activeTouch && l.input.supportsTouch())) if (l.input.ensurePolled(), l.shift = e.shiftKey, eventInWidget(l, e)) y || (l.scroller.draggable = !1, setTimeout(function () {
                    return l.scroller.draggable = !0
                }, 100)); else if (!clickInGutter(s, e)) {
                    var c, d, u, h = posFromMouse(s, e), p = e_button(e),
                        f = h ? (c = h, d = p, u = +new Date, Fe && Fe.compare(u, c, d) ? (Oe = Fe = null, "triple") : Oe && Oe.compare(u, c, d) ? (Fe = new Re(u, c, d), Oe = null, "double") : (Oe = new Re(u, c, d), Fe = null, "single")) : "single";
                    window.focus(), 1 == p && s.state.selectingText && s.state.selectingText(e), h && (o = h, a = "Click", "double" == (i = f) ? a = "Double" + a : "triple" == i && (a = "Triple" + a), dispatchKey(n = s, addModifierNames(a = (1 == (t = p) ? "Left" : 2 == t ? "Middle" : "Right") + a, r = e), r, function (e) {
                        if ("string" == typeof e && (e = Ee[e]), !e) return !1;
                        var t = !1;
                        try {
                            n.isReadOnly() && (n.state.suppressEdits = !0), t = e(n, o) != N
                        } finally {
                            n.state.suppressEdits = !1
                        }
                        return t
                    })) || (1 == p ? h ? function (e, t, n, o) {
                        x ? setTimeout(bind(ensureFocus, e), 0) : e.curOp.focus = activeElt();
                        var i, r, a, s, l, c, d, u, h, p, f = function (e, t, n) {
                            var o = e.getOption("configureMouse"), i = o ? o(e, t, n) : {};
                            if (null == i.unit) {
                                var r = v ? n.shiftKey && n.metaKey : n.altKey;
                                i.unit = r ? "rectangle" : "single" == t ? "char" : "double" == t ? "word" : "line"
                            }
                            return (null == i.extend || e.doc.extend) && (i.extend = e.doc.extend || n.shiftKey), null == i.addNew && (i.addNew = b ? n.metaKey : n.ctrlKey), null == i.moveOnDrag && (i.moveOnDrag = !(b ? n.altKey : n.ctrlKey)), i
                        }(e, n, o), g = e.doc.sel;
                        e.options.dragDrop && K && !e.isReadOnly() && "single" == n && -1 < (i = g.contains(t)) && (cmp((i = g.ranges[i]).from(), t) < 0 || 0 < t.xRel) && (0 < cmp(i.to(), t) || t.xRel < 0) ? (a = o, s = t, l = f, c = (r = e).display, d = !1, u = operation(r, function (e) {
                            y && (c.scroller.draggable = !1), r.state.draggingText = !1, off(c.wrapper.ownerDocument, "mouseup", u), off(c.wrapper.ownerDocument, "mousemove", h), off(c.scroller, "dragstart", p), off(c.scroller, "drop", u), d || (e_preventDefault(e), l.addNew || extendSelection(r.doc, s, null, null, l.extend), y || x && 9 == w ? setTimeout(function () {
                                c.wrapper.ownerDocument.body.focus(), c.input.focus()
                            }, 20) : c.input.focus())
                        }), h = function (e) {
                            d = d || 10 <= Math.abs(a.clientX - e.clientX) + Math.abs(a.clientY - e.clientY)
                        }, p = function () {
                            return d = !0
                        }, y && (c.scroller.draggable = !0), (r.state.draggingText = u).copy = !l.moveOnDrag, c.scroller.dragDrop && c.scroller.dragDrop(), z(c.wrapper.ownerDocument, "mouseup", u), z(c.wrapper.ownerDocument, "mousemove", h), z(c.scroller, "dragstart", p), z(c.scroller, "drop", u), delayBlurEvent(r), setTimeout(function () {
                            return c.input.focus()
                        }, 20)) : function (m, e, v, y) {
                            var r = m.display, b = m.doc;
                            e_preventDefault(e);
                            var C, x, w = b.sel, t = w.ranges;
                            if (y.addNew && !y.extend ? (x = b.sel.contains(v), C = -1 < x ? t[x] : new ye(v, v)) : (C = b.sel.primary(), x = b.sel.primIndex), "rectangle" == y.unit) y.addNew || (C = new ye(v, v)), v = posFromMouse(m, e, !0, !0), x = -1; else {
                                var n = rangeForUnit(m, v, y.unit);
                                C = y.extend ? extendRange(C, n.anchor, n.head, y.extend) : n
                            }
                            y.addNew ? -1 == x ? (x = t.length, setSelection(b, normalizeSelection(m, t.concat([C]), x), {
                                scroll: !1,
                                origin: "*mouse"
                            })) : 1 < t.length && t[x].empty() && "char" == y.unit && !y.extend ? (setSelection(b, normalizeSelection(m, t.slice(0, x).concat(t.slice(x + 1)), 0), {
                                scroll: !1,
                                origin: "*mouse"
                            }), w = b.sel) : replaceOneSelection(b, x, C, H) : (setSelection(b, new ve([C], x = 0), H), w = b.sel);
                            var k = v;

                            function extendTo(e) {
                                if (0 != cmp(k, e)) if (k = e, "rectangle" == y.unit) {
                                    for (var t = [], n = m.options.tabSize, o = countColumn(getLine(b, v.line).text, v.ch, n), i = countColumn(getLine(b, e.line).text, e.ch, n), r = Math.min(o, i), a = Math.max(o, i), s = Math.min(v.line, e.line), l = Math.min(m.lastLine(), Math.max(v.line, e.line)); s <= l; s++) {
                                        var c = getLine(b, s).text, d = findColumn(c, r, n);
                                        r == a ? t.push(new ye(Pos(s, d), Pos(s, d))) : c.length > d && t.push(new ye(Pos(s, d), Pos(s, findColumn(c, a, n))))
                                    }
                                    t.length || t.push(new ye(v, v)), setSelection(b, normalizeSelection(m, w.ranges.slice(0, x).concat(t), x), {
                                        origin: "*mouse",
                                        scroll: !1
                                    }), m.scrollIntoView(e)
                                } else {
                                    var u, h = C, p = rangeForUnit(m, e, y.unit), f = h.anchor;
                                    f = 0 < cmp(p.anchor, f) ? (u = p.head, minPos(h.from(), p.anchor)) : (u = p.anchor, maxPos(h.to(), p.head));
                                    var g = w.ranges.slice(0);
                                    g[x] = function (e, t) {
                                        var n = t.anchor, o = t.head, i = getLine(e.doc, n.line);
                                        if (0 == cmp(n, o) && n.sticky == o.sticky) return t;
                                        var r = getOrder(i);
                                        if (!r) return t;
                                        var a = getBidiPartAt(r, n.ch, n.sticky), s = r[a];
                                        if (s.from != n.ch && s.to != n.ch) return t;
                                        var l, c = a + (s.from == n.ch == (1 != s.level) ? 0 : 1);
                                        if (0 == c || c == r.length) return t;
                                        if (o.line != n.line) l = 0 < (o.line - n.line) * ("ltr" == e.doc.direction ? 1 : -1); else {
                                            var d = getBidiPartAt(r, o.ch, o.sticky),
                                                u = d - a || (o.ch - n.ch) * (1 == s.level ? -1 : 1);
                                            l = d == c - 1 || d == c ? u < 0 : 0 < u
                                        }
                                        var h = r[c + (l ? -1 : 0)], p = l == (1 == h.level), f = p ? h.from : h.to,
                                            g = p ? "after" : "before";
                                        return n.ch == f && n.sticky == g ? t : new ye(new Pos(n.line, f, g), o)
                                    }(m, new ye(clipPos(b, f), u)), setSelection(b, normalizeSelection(m, g, x), H)
                                }
                            }

                            var a = r.wrapper.getBoundingClientRect(), s = 0;

                            function done(e) {
                                m.state.selectingText = !1, s = 1 / 0, e_preventDefault(e), r.input.focus(), off(r.wrapper.ownerDocument, "mousemove", o), off(r.wrapper.ownerDocument, "mouseup", i), b.history.lastSelOrigin = null
                            }

                            var o = operation(m, function (e) {
                                0 !== e.buttons && e_button(e) ? function extend(e) {
                                    var t = ++s, n = posFromMouse(m, e, !0, "rectangle" == y.unit);
                                    if (n) if (0 != cmp(n, k)) {
                                        m.curOp.focus = activeElt(), extendTo(n);
                                        var o = visibleLines(r, b);
                                        (n.line >= o.to || n.line < o.from) && setTimeout(operation(m, function () {
                                            s == t && extend(e)
                                        }), 150)
                                    } else {
                                        var i = e.clientY < a.top ? -20 : e.clientY > a.bottom ? 20 : 0;
                                        i && setTimeout(operation(m, function () {
                                            s == t && (r.scroller.scrollTop += i, extend(e))
                                        }), 50)
                                    }
                                }(e) : done(e)
                            }), i = operation(m, done);
                            m.state.selectingText = i, z(r.wrapper.ownerDocument, "mousemove", o), z(r.wrapper.ownerDocument, "mouseup", i)
                        }(e, o, t, f)
                    }(s, h, f, e) : e_target(e) == l.scroller && e_preventDefault(e) : 2 == p ? (h && extendSelection(s.doc, h), setTimeout(function () {
                        return l.input.focus()
                    }, 20)) : 3 == p && (k ? s.display.input.onContextMenu(e) : delayBlurEvent(s)))
                }
            }

            function rangeForUnit(e, t, n) {
                if ("char" == n) return new ye(t, t);
                if ("word" == n) return e.findWordAt(t);
                if ("line" == n) return new ye(Pos(t.line, 0), clipPos(e.doc, Pos(t.line + 1, 0)));
                var o = n(e, t);
                return new ye(o.from, o.to)
            }

            function gutterEvent(e, t, n, o) {
                var i, r;
                if (t.touches) i = t.touches[0].clientX, r = t.touches[0].clientY; else try {
                    i = t.clientX, r = t.clientY
                } catch (t) {
                    return !1
                }
                if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
                o && e_preventDefault(t);
                var a = e.display, s = a.lineDiv.getBoundingClientRect();
                if (r > s.bottom || !hasHandler(e, n)) return e_defaultPrevented(t);
                r -= s.top - a.viewOffset;
                for (var l = 0; l < e.options.gutters.length; ++l) {
                    var c = a.gutters.childNodes[l];
                    if (c && c.getBoundingClientRect().right >= i) {
                        var d = lineAtHeight(e.doc, r), u = e.options.gutters[l];
                        return signal(e, n, e, d, u, t), e_defaultPrevented(t)
                    }
                }
            }

            function clickInGutter(e, t) {
                return gutterEvent(e, t, "gutterClick", !0)
            }

            function onContextMenu(e, t) {
                var n, o;
                eventInWidget(e.display, t) || (o = t, hasHandler(n = e, "gutterContextMenu") && gutterEvent(n, o, "gutterContextMenu", !1)) || signalDOMEvent(e, t, "contextmenu") || k || e.display.input.onContextMenu(t)
            }

            function themeChanged(e) {
                e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), clearCaches(e)
            }

            Re.prototype.compare = function (e, t, n) {
                return this.time + 400 > e && 0 == cmp(t, this.pos) && n == this.button
            };
            var Be = {
                toString: function () {
                    return "CodeMirror.Init"
                }
            }, We = {}, $e = {};

            function guttersChanged(e) {
                updateGutters(e), regChange(e), alignHorizontally(e)
            }

            function dragDropChanged(e, t, n) {
                var o = n && n != Be;
                if (!t != !o) {
                    var i = e.display.dragFunctions, r = t ? z : off;
                    r(e.display.scroller, "dragstart", i.start), r(e.display.scroller, "dragenter", i.enter), r(e.display.scroller, "dragover", i.over), r(e.display.scroller, "dragleave", i.leave), r(e.display.scroller, "drop", i.drop)
                }
            }

            function wrappingChanged(e) {
                e.options.lineWrapping ? (addClass(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (L(e.display.wrapper, "CodeMirror-wrap"), findMaxLine(e)), estimateLineHeights(e), regChange(e), clearCaches(e), setTimeout(function () {
                    return updateScrollbars(e)
                }, 100)
            }

            function CodeMirror(e, t) {
                var n = this;
                if (!(this instanceof CodeMirror)) return new CodeMirror(e, t);
                this.options = t = t ? copyObj(t) : {}, copyObj(We, t, !1), setGuttersForLineNumbers(t);
                var o = t.value;
                "string" == typeof o ? o = new Se(o, t.mode, null, t.lineSeparator, t.direction) : t.mode && (o.modeOption = t.mode), this.doc = o;
                var i = new CodeMirror.inputStyles[t.inputStyle](this), r = this.display = new Display(e, o, i);
                for (var a in updateGutters(r.wrapper.CodeMirror = this), themeChanged(this), t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), initScrollbars(this), this.state = {
                    keyMaps: [],
                    overlays: [],
                    modeGen: 0,
                    overwrite: !1,
                    delayingBlurEvent: !1,
                    focused: !1,
                    suppressEdits: !1,
                    pasteIncoming: !1,
                    cutIncoming: !1,
                    selectingText: !1,
                    draggingText: !1,
                    highlight: new P,
                    keySeq: null,
                    specialChars: null
                }, t.autofocus && !h && r.input.focus(), x && w < 11 && setTimeout(function () {
                    return n.display.input.reset(!0)
                }, 20), function (i) {
                    var r = i.display;
                    z(r.scroller, "mousedown", operation(i, onMouseDown)), z(r.scroller, "dblclick", x && w < 11 ? operation(i, function (e) {
                        if (!signalDOMEvent(i, e)) {
                            var t = posFromMouse(i, e);
                            if (t && !clickInGutter(i, e) && !eventInWidget(i.display, e)) {
                                e_preventDefault(e);
                                var n = i.findWordAt(t);
                                extendSelection(i.doc, n.anchor, n.head)
                            }
                        }
                    }) : function (e) {
                        return signalDOMEvent(i, e) || e_preventDefault(e)
                    }), z(r.scroller, "contextmenu", function (e) {
                        return onContextMenu(i, e)
                    });
                    var n, o = {end: 0};

                    function finishTouch() {
                        r.activeTouch && (n = setTimeout(function () {
                            return r.activeTouch = null
                        }, 1e3), (o = r.activeTouch).end = +new Date)
                    }

                    function farAway(e, t) {
                        if (null == t.left) return !0;
                        var n = t.left - e.left, o = t.top - e.top;
                        return 400 < n * n + o * o
                    }

                    z(r.scroller, "touchstart", function (e) {
                        if (!signalDOMEvent(i, e) && !function (e) {
                            if (1 != e.touches.length) return !1;
                            var t = e.touches[0];
                            return t.radiusX <= 1 && t.radiusY <= 1
                        }(e) && !clickInGutter(i, e)) {
                            r.input.ensurePolled(), clearTimeout(n);
                            var t = +new Date;
                            r.activeTouch = {
                                start: t,
                                moved: !1,
                                prev: t - o.end <= 300 ? o : null
                            }, 1 == e.touches.length && (r.activeTouch.left = e.touches[0].pageX, r.activeTouch.top = e.touches[0].pageY)
                        }
                    }), z(r.scroller, "touchmove", function () {
                        r.activeTouch && (r.activeTouch.moved = !0)
                    }), z(r.scroller, "touchend", function (e) {
                        var t = r.activeTouch;
                        if (t && !eventInWidget(r, e) && null != t.left && !t.moved && new Date - t.start < 300) {
                            var n, o = i.coordsChar(r.activeTouch, "page");
                            n = !t.prev || farAway(t, t.prev) ? new ye(o, o) : !t.prev.prev || farAway(t, t.prev.prev) ? i.findWordAt(o) : new ye(Pos(o.line, 0), clipPos(i.doc, Pos(o.line + 1, 0))), i.setSelection(n.anchor, n.head), i.focus(), e_preventDefault(e)
                        }
                        finishTouch()
                    }), z(r.scroller, "touchcancel", finishTouch), z(r.scroller, "scroll", function () {
                        r.scroller.clientHeight && (updateScrollTop(i, r.scroller.scrollTop), setScrollLeft(i, r.scroller.scrollLeft, !0), signal(i, "scroll", i))
                    }), z(r.scroller, "mousewheel", function (e) {
                        return onScrollWheel(i, e)
                    }), z(r.scroller, "DOMMouseScroll", function (e) {
                        return onScrollWheel(i, e)
                    }), z(r.wrapper, "scroll", function () {
                        return r.wrapper.scrollTop = r.wrapper.scrollLeft = 0
                    }), r.dragFunctions = {
                        enter: function (e) {
                            signalDOMEvent(i, e) || e_stop(e)
                        }, over: function (e) {
                            signalDOMEvent(i, e) || (function (e, t) {
                                var n = posFromMouse(e, t);
                                if (n) {
                                    var o = document.createDocumentFragment();
                                    drawSelectionCursor(e, n, o), e.display.dragCursor || (e.display.dragCursor = elt("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), removeChildrenAndAdd(e.display.dragCursor, o)
                                }
                            }(i, e), e_stop(e))
                        }, start: function (e) {
                            return function (e, t) {
                                if (x && (!e.state.draggingText || +new Date - Le < 100)) e_stop(t); else if (!signalDOMEvent(e, t) && !eventInWidget(e.display, t) && (t.dataTransfer.setData("Text", e.getSelection()), t.dataTransfer.effectAllowed = "copyMove", t.dataTransfer.setDragImage && !l)) {
                                    var n = elt("img", null, null, "position: fixed; left: 0; top: 0;");
                                    n.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", m && (n.width = n.height = 1, e.display.wrapper.appendChild(n), n._top = n.offsetTop), t.dataTransfer.setDragImage(n, 0, 0), m && n.parentNode.removeChild(n)
                                }
                            }(i, e)
                        }, drop: operation(i, onDrop), leave: function (e) {
                            signalDOMEvent(i, e) || clearDragCursor(i)
                        }
                    };
                    var e = r.input.getField();
                    z(e, "keyup", function (e) {
                        return onKeyUp.call(i, e)
                    }), z(e, "keydown", operation(i, onKeyDown)), z(e, "keypress", operation(i, onKeyPress)), z(e, "focus", function (e) {
                        return onFocus(i, e)
                    }), z(e, "blur", function (e) {
                        return onBlur(i, e)
                    })
                }(this), ensureGlobalHandlers(), startOperation(this), this.curOp.forceUpdate = !0, attachDoc(this, o), t.autofocus && !h || this.hasFocus() ? setTimeout(bind(onFocus, this), 20) : onBlur(this), $e) $e.hasOwnProperty(a) && $e[a](n, t[a], Be);
                maybeUpdateLineNumberWidth(this), t.finishInit && t.finishInit(this);
                for (var s = 0; s < ze.length; ++s) ze[s](n);
                endOperation(this), y && t.lineWrapping && "optimizelegibility" == getComputedStyle(r.lineDiv).textRendering && (r.lineDiv.style.textRendering = "auto")
            }

            CodeMirror.defaults = We, CodeMirror.optionHandlers = $e;
            var ze = [];

            function indentLine(e, t, n, o) {
                var i, r = e.doc;
                null == n && (n = "add"), "smart" == n && (r.mode.indent ? i = getContextBefore(e, t).state : n = "prev");
                var a = e.options.tabSize, s = getLine(r, t), l = countColumn(s.text, null, a);
                s.stateAfter && (s.stateAfter = null);
                var c, d = s.text.match(/^\s*/)[0];
                if (o || /\S/.test(s.text)) {
                    if ("smart" == n && ((c = r.mode.indent(i, s.text.slice(d.length), s.text)) == N || 150 < c)) {
                        if (!o) return;
                        n = "prev"
                    }
                } else c = 0, n = "not";
                "prev" == n ? c = t > r.first ? countColumn(getLine(r, t - 1).text, null, a) : 0 : "add" == n ? c = l + e.options.indentUnit : "subtract" == n ? c = l - e.options.indentUnit : "number" == typeof n && (c = l + n), c = Math.max(0, c);
                var u = "", h = 0;
                if (e.options.indentWithTabs) for (var p = Math.floor(c / a); p; --p) h += a, u += "\t";
                if (h < c && (u += spaceStr(c - h)), u != d) return replaceRange(r, u, Pos(t, 0), Pos(t, d.length), "+input"), !(s.stateAfter = null);
                for (var f = 0; f < r.sel.ranges.length; f++) {
                    var g = r.sel.ranges[f];
                    if (g.head.line == t && g.head.ch < d.length) {
                        var m = Pos(t, d.length);
                        replaceOneSelection(r, f, new ye(m, m));
                        break
                    }
                }
            }

            CodeMirror.defineInitHook = function (e) {
                return ze.push(e)
            };
            var Ve = null;

            function setLastCopied(e) {
                Ve = e
            }

            function applyTextInput(e, t, n, o, i) {
                var r = e.doc;
                e.display.shift = !1, o || (o = r.sel);
                var a, s = e.state.pasteIncoming || "paste" == i, l = G(t), c = null;
                if (s && 1 < o.ranges.length) if (Ve && Ve.text.join("\n") == t) {
                    if (o.ranges.length % Ve.text.length == 0) {
                        c = [];
                        for (var d = 0; d < Ve.text.length; d++) c.push(r.splitLines(Ve.text[d]))
                    }
                } else l.length == o.ranges.length && e.options.pasteLinesPerSelection && (c = map(l, function (e) {
                    return [e]
                }));
                for (var u = o.ranges.length - 1; 0 <= u; u--) {
                    var h = o.ranges[u], p = h.from(), f = h.to();
                    h.empty() && (n && 0 < n ? p = Pos(p.line, p.ch - n) : e.state.overwrite && !s ? f = Pos(f.line, Math.min(getLine(r, f.line).text.length, f.ch + lst(l).length)) : s && Ve && Ve.lineWise && Ve.text.join("\n") == t && (p = f = Pos(p.line, 0))), a = e.curOp.updateInput;
                    var g = {
                        from: p,
                        to: f,
                        text: c ? c[u % c.length] : l,
                        origin: i || (s ? "paste" : e.state.cutIncoming ? "cut" : "+input")
                    };
                    makeChange(e.doc, g), signalLater(e, "inputRead", e, g)
                }
                t && !s && triggerElectric(e, t), ensureCursorVisible(e), e.curOp.updateInput = a, e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = !1
            }

            function handlePaste(e, t) {
                var n = e.clipboardData && e.clipboardData.getData("Text");
                if (n) return e.preventDefault(), t.isReadOnly() || t.options.disableInput || runInOp(t, function () {
                    return applyTextInput(t, n, 0, null, "paste")
                }), !0
            }

            function triggerElectric(e, t) {
                if (e.options.electricChars && e.options.smartIndent) for (var n = e.doc.sel, o = n.ranges.length - 1; 0 <= o; o--) {
                    var i = n.ranges[o];
                    if (!(100 < i.head.ch || o && n.ranges[o - 1].head.line == i.head.line)) {
                        var r = e.getModeAt(i.head), a = !1;
                        if (r.electricChars) {
                            for (var s = 0; s < r.electricChars.length; s++) if (-1 < t.indexOf(r.electricChars.charAt(s))) {
                                a = indentLine(e, i.head.line, "smart");
                                break
                            }
                        } else r.electricInput && r.electricInput.test(getLine(e.doc, i.head.line).text.slice(0, i.head.ch)) && (a = indentLine(e, i.head.line, "smart"));
                        a && signalLater(e, "electricInput", e, i.head.line)
                    }
                }
            }

            function copyableRanges(e) {
                for (var t = [], n = [], o = 0; o < e.doc.sel.ranges.length; o++) {
                    var i = e.doc.sel.ranges[o].head.line, r = {anchor: Pos(i, 0), head: Pos(i + 1, 0)};
                    n.push(r), t.push(e.getRange(r.anchor, r.head))
                }
                return {text: t, ranges: n}
            }

            function disableBrowserMagic(e, t) {
                e.setAttribute("autocorrect", "off"), e.setAttribute("autocapitalize", "off"), e.setAttribute("spellcheck", !!t)
            }

            function hiddenTextarea() {
                var e = elt("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),
                    t = elt("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
                return y ? e.style.width = "1000px" : e.setAttribute("wrap", "off"), d && (e.style.border = "1px solid black"), disableBrowserMagic(e), t
            }

            function findPosH(o, i, r, e, a) {
                var t = i, n = r, s = getLine(o, i.line);

                function moveOnce(e) {
                    var t, n;
                    if (null == (t = a ? function (t, n, s, e) {
                        var l = getOrder(n, t.doc.direction);
                        if (!l) return moveLogically(n, s, e);
                        s.ch >= n.text.length ? (s.ch = n.text.length, s.sticky = "before") : s.ch <= 0 && (s.ch = 0, s.sticky = "after");
                        var o = getBidiPartAt(l, s.ch, s.sticky), i = l[o];
                        if ("ltr" == t.doc.direction && i.level % 2 == 0 && (0 < e ? i.to > s.ch : i.from < s.ch)) return moveLogically(n, s, e);
                        var r, c = function (e, t) {
                            return moveCharLogically(n, e instanceof Pos ? e.ch : e, t)
                        }, a = function (e) {
                            return t.options.lineWrapping ? (r = r || prepareMeasureForLine(t, n), wrappedLineExtentChar(t, n, r, e)) : {
                                begin: 0,
                                end: n.text.length
                            }
                        }, d = a("before" == s.sticky ? c(s, -1) : s.ch);
                        if ("rtl" == t.doc.direction || 1 == i.level) {
                            var u = 1 == i.level == e < 0, h = c(s, u ? 1 : -1);
                            if (null != h && (u ? h <= i.to && h <= d.end : h >= i.from && h >= d.begin)) {
                                var p = u ? "before" : "after";
                                return new Pos(s.line, h, p)
                            }
                        }
                        var f = function (e, t, n) {
                            for (var o = function (e, t) {
                                return t ? new Pos(s.line, c(e, 1), "before") : new Pos(s.line, e, "after")
                            }; 0 <= e && e < l.length; e += t) {
                                var i = l[e], r = 0 < t == (1 != i.level), a = r ? n.begin : c(n.end, -1);
                                if (i.from <= a && a < i.to) return o(a, r);
                                if (a = r ? i.from : c(i.to, -1), n.begin <= a && a < n.end) return o(a, r)
                            }
                        }, g = f(o + e, e, d);
                        if (g) return g;
                        var m = 0 < e ? d.end : c(d.begin, -1);
                        return null == m || 0 < e && m == n.text.length || !(g = f(0 < e ? 0 : l.length - 1, e, a(m))) ? null : g
                    }(o.cm, s, i, r) : moveLogically(s, i, r))) {
                        if (e || ((n = i.line + r) < o.first || n >= o.first + o.size || (i = new Pos(n, i.ch, i.sticky), !(s = getLine(o, n))))) return !1;
                        i = endOfLine(a, o.cm, s, i.line, r)
                    } else i = t;
                    return !0
                }

                if ("char" == e) moveOnce(); else if ("column" == e) moveOnce(!0); else if ("word" == e || "group" == e) for (var l = null, c = "group" == e, d = o.cm && o.cm.getHelper(i, "wordChars"), u = !0; !(r < 0) || moveOnce(!u); u = !1) {
                    var h = s.text.charAt(i.ch) || "\n",
                        p = isWordChar(h, d) ? "w" : c && "\n" == h ? "n" : !c || /\s/.test(h) ? null : "p";
                    if (!c || u || p || (p = "s"), l && l != p) {
                        r < 0 && (r = 1, moveOnce(), i.sticky = "after");
                        break
                    }
                    if (p && (l = p), 0 < r && !moveOnce(!u)) break
                }
                var f = skipAtomic(o, i, t, n, !0);
                return equalCursorPos(t, f) && (f.hitSide = !0), f
            }

            function findPosV(e, t, n, o) {
                var i, r, a = e.doc, s = t.left;
                if ("page" == o) {
                    var l = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight),
                        c = Math.max(l - .5 * textHeight(e.display), 3);
                    i = (0 < n ? t.bottom : t.top) + n * c
                } else "line" == o && (i = 0 < n ? t.bottom + 3 : t.top - 3);
                for (; (r = coordsChar(e, s, i)).outside;) {
                    if (n < 0 ? i <= 0 : i >= a.height) {
                        r.hitSide = !0;
                        break
                    }
                    i += 5 * n
                }
                return r
            }

            var Ue = function (e) {
                this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new P, this.composing = null, this.gracePeriod = !1, this.readDOMTimeout = null
            };

            function posToDOM(e, t) {
                var n = findViewForLine(e, t.line);
                if (!n || n.hidden) return null;
                var o = getLine(e.doc, t.line), i = mapFromLineView(n, o, t.line), r = getOrder(o, e.doc.direction),
                    a = "left";
                if (r) {
                    var s = getBidiPartAt(r, t.ch);
                    a = s % 2 ? "right" : "left"
                }
                var l = nodeAndOffsetInLineMap(i.map, t.ch, a);
                return l.offset = "right" == l.collapse ? l.end : l.start, l
            }

            function badPos(e, t) {
                return t && (e.bad = !0), e
            }

            function domToPos(e, t, n) {
                var o;
                if (t == e.display.lineDiv) {
                    if (!(o = e.display.lineDiv.childNodes[n])) return badPos(e.clipPos(Pos(e.display.viewTo - 1)), !0);
                    t = null, n = 0
                } else for (o = t; ; o = o.parentNode) {
                    if (!o || o == e.display.lineDiv) return null;
                    if (o.parentNode && o.parentNode == e.display.lineDiv) break
                }
                for (var i = 0; i < e.display.view.length; i++) {
                    var r = e.display.view[i];
                    if (r.node == o) return locateNodeInLineView(r, t, n)
                }
            }

            function locateNodeInLineView(c, e, t) {
                var n = c.text.firstChild, o = !1;
                if (!e || !contains(n, e)) return badPos(Pos(lineNo(c.line), 0), !0);
                if (e == n && (o = !0, e = n.childNodes[t], t = 0, !e)) {
                    var i = c.rest ? lst(c.rest) : c.line;
                    return badPos(Pos(lineNo(i), i.text.length), o)
                }
                var r = 3 == e.nodeType ? e : null, a = e;
                for (r || 1 != e.childNodes.length || 3 != e.firstChild.nodeType || (r = e.firstChild, t && (t = r.nodeValue.length)); a.parentNode != n;) a = a.parentNode;
                var d = c.measure, u = d.maps;

                function find(e, t, n) {
                    for (var o = -1; o < (u ? u.length : 0); o++) for (var i = o < 0 ? d.map : u[o], r = 0; r < i.length; r += 3) {
                        var a = i[r + 2];
                        if (a == e || a == t) {
                            var s = lineNo(o < 0 ? c.line : c.rest[o]), l = i[r] + n;
                            return (n < 0 || a != e) && (l = i[r + (n ? 1 : 0)]), Pos(s, l)
                        }
                    }
                }

                var s = find(r, a, t);
                if (s) return badPos(s, o);
                for (var l = a.nextSibling, h = r ? r.nodeValue.length - t : 0; l; l = l.nextSibling) {
                    if (s = find(l, l.firstChild, 0)) return badPos(Pos(s.line, s.ch - h), o);
                    h += l.textContent.length
                }
                for (var p = a.previousSibling, f = t; p; p = p.previousSibling) {
                    if (s = find(p, p.firstChild, -1)) return badPos(Pos(s.line, s.ch + f), o);
                    f += p.textContent.length
                }
            }

            Ue.prototype.init = function (e) {
                var t = this, a = this, s = a.cm, l = a.div = e.lineDiv;

                function onCopyCut(e) {
                    if (!signalDOMEvent(s, e)) {
                        if (s.somethingSelected()) setLastCopied({
                            lineWise: !1,
                            text: s.getSelections()
                        }), "cut" == e.type && s.replaceSelection("", null, "cut"); else {
                            if (!s.options.lineWiseCopyCut) return;
                            var t = copyableRanges(s);
                            setLastCopied({lineWise: !0, text: t.text}), "cut" == e.type && s.operation(function () {
                                s.setSelections(t.ranges, 0, A), s.replaceSelection("", null, "cut")
                            })
                        }
                        if (e.clipboardData) {
                            e.clipboardData.clearData();
                            var n = Ve.text.join("\n");
                            if (e.clipboardData.setData("Text", n), e.clipboardData.getData("Text") == n) return void e.preventDefault()
                        }
                        var o = hiddenTextarea(), i = o.firstChild;
                        s.display.lineSpace.insertBefore(o, s.display.lineSpace.firstChild), i.value = Ve.text.join("\n");
                        var r = document.activeElement;
                        T(i), setTimeout(function () {
                            s.display.lineSpace.removeChild(o), r.focus(), r == l && a.showPrimarySelection()
                        }, 50)
                    }
                }

                disableBrowserMagic(l, s.options.spellcheck), z(l, "paste", function (e) {
                    signalDOMEvent(s, e) || handlePaste(e, s) || w <= 11 && setTimeout(operation(s, function () {
                        return t.updateFromDOM()
                    }), 20)
                }), z(l, "compositionstart", function (e) {
                    t.composing = {data: e.data, done: !1}
                }), z(l, "compositionupdate", function (e) {
                    t.composing || (t.composing = {data: e.data, done: !1})
                }), z(l, "compositionend", function (e) {
                    t.composing && (e.data != t.composing.data && t.readFromDOMSoon(), t.composing.done = !0)
                }), z(l, "touchstart", function () {
                    return a.forceCompositionEnd()
                }), z(l, "input", function () {
                    t.composing || t.readFromDOMSoon()
                }), z(l, "copy", onCopyCut), z(l, "cut", onCopyCut)
            }, Ue.prototype.prepareSelection = function () {
                var e = prepareSelection(this.cm, !1);
                return e.focus = this.cm.state.focused, e
            }, Ue.prototype.showSelection = function (e, t) {
                e && this.cm.display.view.length && ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e))
            }, Ue.prototype.getSelection = function () {
                return this.cm.display.wrapper.ownerDocument.getSelection()
            }, Ue.prototype.showPrimarySelection = function () {
                var e = this.getSelection(), t = this.cm, n = t.doc.sel.primary(), o = n.from(), i = n.to();
                if (t.display.viewTo == t.display.viewFrom || o.line >= t.display.viewTo || i.line < t.display.viewFrom) e.removeAllRanges(); else {
                    var r = domToPos(t, e.anchorNode, e.anchorOffset), a = domToPos(t, e.focusNode, e.focusOffset);
                    if (!r || r.bad || !a || a.bad || 0 != cmp(minPos(r, a), o) || 0 != cmp(maxPos(r, a), i)) {
                        var s = t.display.view, l = o.line >= t.display.viewFrom && posToDOM(t, o) || {
                            node: s[0].measure.map[2],
                            offset: 0
                        }, c = i.line < t.display.viewTo && posToDOM(t, i);
                        if (!c) {
                            var d = s[s.length - 1].measure, u = d.maps ? d.maps[d.maps.length - 1] : d.map;
                            c = {node: u[u.length - 1], offset: u[u.length - 2] - u[u.length - 3]}
                        }
                        if (l && c) {
                            var h, p = e.rangeCount && e.getRangeAt(0);
                            try {
                                h = S(l.node, l.offset, c.offset, c.node)
                            } catch (e) {
                            }
                            h && (!g && t.state.focused ? (e.collapse(l.node, l.offset), h.collapsed || (e.removeAllRanges(), e.addRange(h))) : (e.removeAllRanges(), e.addRange(h)), p && null == e.anchorNode ? e.addRange(p) : g && this.startGracePeriod()), this.rememberSelection()
                        } else e.removeAllRanges()
                    }
                }
            }, Ue.prototype.startGracePeriod = function () {
                var e = this;
                clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function () {
                    e.gracePeriod = !1, e.selectionChanged() && e.cm.operation(function () {
                        return e.cm.curOp.selectionChanged = !0
                    })
                }, 20)
            }, Ue.prototype.showMultipleSelections = function (e) {
                removeChildrenAndAdd(this.cm.display.cursorDiv, e.cursors), removeChildrenAndAdd(this.cm.display.selectionDiv, e.selection)
            }, Ue.prototype.rememberSelection = function () {
                var e = this.getSelection();
                this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset
            }, Ue.prototype.selectionInEditor = function () {
                var e = this.getSelection();
                if (!e.rangeCount) return !1;
                var t = e.getRangeAt(0).commonAncestorContainer;
                return contains(this.div, t)
            }, Ue.prototype.focus = function () {
                "nocursor" != this.cm.options.readOnly && (this.selectionInEditor() || this.showSelection(this.prepareSelection(), !0), this.div.focus())
            }, Ue.prototype.blur = function () {
                this.div.blur()
            }, Ue.prototype.getField = function () {
                return this.div
            }, Ue.prototype.supportsTouch = function () {
                return !0
            }, Ue.prototype.receivedFocus = function () {
                var e = this;
                this.selectionInEditor() ? this.pollSelection() : runInOp(this.cm, function () {
                    return e.cm.curOp.selectionChanged = !0
                }), this.polling.set(this.cm.options.pollInterval, function poll() {
                    e.cm.state.focused && (e.pollSelection(), e.polling.set(e.cm.options.pollInterval, poll))
                })
            }, Ue.prototype.selectionChanged = function () {
                var e = this.getSelection();
                return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset
            }, Ue.prototype.pollSelection = function () {
                if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
                    var e = this.getSelection(), t = this.cm;
                    if (u && a && this.cm.options.gutters.length && function (e) {
                        for (var t = e; t; t = t.parentNode) if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0;
                        return !1
                    }(e.anchorNode)) return this.cm.triggerOnKeyDown({
                        type: "keydown",
                        keyCode: 8,
                        preventDefault: Math.abs
                    }), this.blur(), void this.focus();
                    if (!this.composing) {
                        this.rememberSelection();
                        var n = domToPos(t, e.anchorNode, e.anchorOffset), o = domToPos(t, e.focusNode, e.focusOffset);
                        n && o && runInOp(t, function () {
                            setSelection(t.doc, simpleSelection(n, o), A), (n.bad || o.bad) && (t.curOp.selectionChanged = !0)
                        })
                    }
                }
            }, Ue.prototype.pollContent = function () {
                null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null);
                var e, t, n, o = this.cm, i = o.display, r = o.doc.sel.primary(), a = r.from(), s = r.to();
                if (0 == a.ch && a.line > o.firstLine() && (a = Pos(a.line - 1, getLine(o.doc, a.line - 1).length)), s.ch == getLine(o.doc, s.line).text.length && s.line < o.lastLine() && (s = Pos(s.line + 1, 0)), a.line < i.viewFrom || s.line > i.viewTo - 1) return !1;
                n = a.line == i.viewFrom || 0 == (e = findViewIndex(o, a.line)) ? (t = lineNo(i.view[0].line), i.view[0].node) : (t = lineNo(i.view[e].line), i.view[e - 1].node.nextSibling);
                var l, c, d = findViewIndex(o, s.line);
                if (c = d == i.view.length - 1 ? (l = i.viewTo - 1, i.lineDiv.lastChild) : (l = lineNo(i.view[d + 1].line) - 1, i.view[d + 1].node.previousSibling), !n) return !1;
                for (var u = o.doc.splitLines(function (l, e, t, c, d) {
                    var n = "", u = !1, h = l.doc.lineSeparator(), p = !1;

                    function close() {
                        u && (n += h, p && (n += h), u = p = !1)
                    }

                    function addText(e) {
                        e && (close(), n += e)
                    }

                    function walk(e) {
                        if (1 == e.nodeType) {
                            var t = e.getAttribute("cm-text");
                            if (t) return void addText(t);
                            var n, o = e.getAttribute("cm-marker");
                            if (o) {
                                var i = l.findMarks(Pos(c, 0), Pos(d + 1, 0), (s = +o, function (e) {
                                    return e.id == s
                                }));
                                return void (i.length && (n = i[0].find(0)) && addText(getBetween(l.doc, n.from, n.to).join(h)))
                            }
                            if ("false" == e.getAttribute("contenteditable")) return;
                            var r = /^(pre|div|p|li|table|br)$/i.test(e.nodeName);
                            if (!/^br$/i.test(e.nodeName) && 0 == e.textContent.length) return;
                            r && close();
                            for (var a = 0; a < e.childNodes.length; a++) walk(e.childNodes[a]);
                            /^(pre|p)$/i.test(e.nodeName) && (p = !0), r && (u = !0)
                        } else 3 == e.nodeType && addText(e.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
                        var s
                    }

                    for (; walk(e), e != t;) e = e.nextSibling, p = !1;
                    return n
                }(o, n, c, t, l)), h = getBetween(o.doc, Pos(t, 0), Pos(l, getLine(o.doc, l).text.length)); 1 < u.length && 1 < h.length;) if (lst(u) == lst(h)) u.pop(), h.pop(), l--; else {
                    if (u[0] != h[0]) break;
                    u.shift(), h.shift(), t++
                }
                for (var p = 0, f = 0, g = u[0], m = h[0], v = Math.min(g.length, m.length); p < v && g.charCodeAt(p) == m.charCodeAt(p);) ++p;
                for (var y = lst(u), b = lst(h), C = Math.min(y.length - (1 == u.length ? p : 0), b.length - (1 == h.length ? p : 0)); f < C && y.charCodeAt(y.length - f - 1) == b.charCodeAt(b.length - f - 1);) ++f;
                if (1 == u.length && 1 == h.length && t == a.line) for (; p && p > a.ch && y.charCodeAt(y.length - f - 1) == b.charCodeAt(b.length - f - 1);) p--, f++;
                u[u.length - 1] = y.slice(0, y.length - f).replace(/^\u200b+/, ""), u[0] = u[0].slice(p).replace(/\u200b+$/, "");
                var x = Pos(t, p), w = Pos(l, h.length ? lst(h).length - f : 0);
                return 1 < u.length || u[0] || cmp(x, w) ? (replaceRange(o.doc, u, x, w, "+input"), !0) : void 0
            }, Ue.prototype.ensurePolled = function () {
                this.forceCompositionEnd()
            }, Ue.prototype.reset = function () {
                this.forceCompositionEnd()
            }, Ue.prototype.forceCompositionEnd = function () {
                this.composing && (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus())
            }, Ue.prototype.readFromDOMSoon = function () {
                var e = this;
                null == this.readDOMTimeout && (this.readDOMTimeout = setTimeout(function () {
                    if (e.readDOMTimeout = null, e.composing) {
                        if (!e.composing.done) return;
                        e.composing = null
                    }
                    e.updateFromDOM()
                }, 80))
            }, Ue.prototype.updateFromDOM = function () {
                var e = this;
                !this.cm.isReadOnly() && this.pollContent() || runInOp(this.cm, function () {
                    return regChange(e.cm)
                })
            }, Ue.prototype.setUneditable = function (e) {
                e.contentEditable = "false"
            }, Ue.prototype.onKeyPress = function (e) {
                0 == e.charCode || this.composing || (e.preventDefault(), this.cm.isReadOnly() || operation(this.cm, applyTextInput)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0))
            }, Ue.prototype.readOnlyChanged = function (e) {
                this.div.contentEditable = String("nocursor" != e)
            }, Ue.prototype.onContextMenu = function () {
            }, Ue.prototype.resetPosition = function () {
            }, Ue.prototype.needsContentAttribute = !0;
            var Ke, je, Ge, _e = function (e) {
                this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new P, this.hasSelection = !1, this.composing = null
            };
            _e.prototype.init = function (t) {
                var e = this, n = this, o = this.cm;
                this.createField(t);
                var i = this.textarea;

                function prepareCopyCut(e) {
                    if (!signalDOMEvent(o, e)) {
                        if (o.somethingSelected()) setLastCopied({lineWise: !1, text: o.getSelections()}); else {
                            if (!o.options.lineWiseCopyCut) return;
                            var t = copyableRanges(o);
                            setLastCopied({
                                lineWise: !0,
                                text: t.text
                            }), "cut" == e.type ? o.setSelections(t.ranges, null, A) : (n.prevInput = "", i.value = t.text.join("\n"), T(i))
                        }
                        "cut" == e.type && (o.state.cutIncoming = !0)
                    }
                }

                t.wrapper.insertBefore(this.wrapper, t.wrapper.firstChild), d && (i.style.width = "0px"), z(i, "input", function () {
                    x && 9 <= w && e.hasSelection && (e.hasSelection = null), n.poll()
                }), z(i, "paste", function (e) {
                    signalDOMEvent(o, e) || handlePaste(e, o) || (o.state.pasteIncoming = !0, n.fastPoll())
                }), z(i, "cut", prepareCopyCut), z(i, "copy", prepareCopyCut), z(t.scroller, "paste", function (e) {
                    eventInWidget(t, e) || signalDOMEvent(o, e) || (o.state.pasteIncoming = !0, n.focus())
                }), z(t.lineSpace, "selectstart", function (e) {
                    eventInWidget(t, e) || e_preventDefault(e)
                }), z(i, "compositionstart", function () {
                    var e = o.getCursor("from");
                    n.composing && n.composing.range.clear(), n.composing = {
                        start: e,
                        range: o.markText(e, o.getCursor("to"), {className: "CodeMirror-composing"})
                    }
                }), z(i, "compositionend", function () {
                    n.composing && (n.poll(), n.composing.range.clear(), n.composing = null)
                })
            }, _e.prototype.createField = function (e) {
                this.wrapper = hiddenTextarea(), this.textarea = this.wrapper.firstChild
            }, _e.prototype.prepareSelection = function () {
                var e = this.cm, t = e.display, n = e.doc, o = prepareSelection(e);
                if (e.options.moveInputWithCursor) {
                    var i = cursorCoords(e, n.sel.primary().head, "div"), r = t.wrapper.getBoundingClientRect(),
                        a = t.lineDiv.getBoundingClientRect();
                    o.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + a.top - r.top)), o.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, i.left + a.left - r.left))
                }
                return o
            }, _e.prototype.showSelection = function (e) {
                var t = this.cm, n = t.display;
                removeChildrenAndAdd(n.cursorDiv, e.cursors), removeChildrenAndAdd(n.selectionDiv, e.selection), null != e.teTop && (this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px")
            }, _e.prototype.reset = function (e) {
                if (!this.contextMenuPending && !this.composing) {
                    var t = this.cm;
                    if (t.somethingSelected()) {
                        this.prevInput = "";
                        var n = t.getSelection();
                        this.textarea.value = n, t.state.focused && T(this.textarea), x && 9 <= w && (this.hasSelection = n)
                    } else e || (this.prevInput = this.textarea.value = "", x && 9 <= w && (this.hasSelection = null))
                }
            }, _e.prototype.getField = function () {
                return this.textarea
            }, _e.prototype.supportsTouch = function () {
                return !1
            }, _e.prototype.focus = function () {
                if ("nocursor" != this.cm.options.readOnly && (!h || activeElt() != this.textarea)) try {
                    this.textarea.focus()
                } catch (e) {
                }
            }, _e.prototype.blur = function () {
                this.textarea.blur()
            }, _e.prototype.resetPosition = function () {
                this.wrapper.style.top = this.wrapper.style.left = 0
            }, _e.prototype.receivedFocus = function () {
                this.slowPoll()
            }, _e.prototype.slowPoll = function () {
                var e = this;
                this.pollingFast || this.polling.set(this.cm.options.pollInterval, function () {
                    e.poll(), e.cm.state.focused && e.slowPoll()
                })
            }, _e.prototype.fastPoll = function () {
                var t = !1, n = this;
                n.pollingFast = !0, n.polling.set(20, function p() {
                    var e = n.poll();
                    e || t ? (n.pollingFast = !1, n.slowPoll()) : (t = !0, n.polling.set(60, p))
                })
            }, _e.prototype.poll = function () {
                var e = this, t = this.cm, n = this.textarea, o = this.prevInput;
                if (this.contextMenuPending || !t.state.focused || _(n) && !o && !this.composing || t.isReadOnly() || t.options.disableInput || t.state.keySeq) return !1;
                var i = n.value;
                if (i == o && !t.somethingSelected()) return !1;
                if (x && 9 <= w && this.hasSelection === i || b && /[\uf700-\uf7ff]/.test(i)) return t.display.input.reset(), !1;
                if (t.doc.sel == t.display.selForContextMenu) {
                    var r = i.charCodeAt(0);
                    if (8203 != r || o || (o = "​"), 8666 == r) return this.reset(), this.cm.execCommand("undo")
                }
                for (var a = 0, s = Math.min(o.length, i.length); a < s && o.charCodeAt(a) == i.charCodeAt(a);) ++a;
                return runInOp(t, function () {
                    applyTextInput(t, i.slice(a), o.length - a, null, e.composing ? "*compose" : null), 1e3 < i.length || -1 < i.indexOf("\n") ? n.value = e.prevInput = "" : e.prevInput = i, e.composing && (e.composing.range.clear(), e.composing.range = t.markText(e.composing.start, t.getCursor("to"), {className: "CodeMirror-composing"}))
                }), !0
            }, _e.prototype.ensurePolled = function () {
                this.pollingFast && this.poll() && (this.pollingFast = !1)
            }, _e.prototype.onKeyPress = function () {
                x && 9 <= w && (this.hasSelection = null), this.fastPoll()
            }, _e.prototype.onContextMenu = function (e) {
                var n = this, o = n.cm, i = o.display, r = n.textarea, t = posFromMouse(o, e), a = i.scroller.scrollTop;
                if (t && !m) {
                    var s = o.options.resetSelectionOnContextMenu;
                    s && -1 == o.doc.sel.contains(t) && operation(o, setSelection)(o.doc, simpleSelection(t), A);
                    var l = r.style.cssText, c = n.wrapper.style.cssText;
                    n.wrapper.style.cssText = "position: absolute";
                    var d, u = n.wrapper.getBoundingClientRect();
                    if (r.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - u.top - 5) + "px; left: " + (e.clientX - u.left - 5) + "px;\n      z-index: 1000; background: " + (x ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);", y && (d = window.scrollY), i.input.focus(), y && window.scrollTo(null, d), i.input.reset(), o.somethingSelected() || (r.value = n.prevInput = " "), n.contextMenuPending = !0, i.selForContextMenu = o.doc.sel, clearTimeout(i.detectingSelectAll), x && 9 <= w && prepareSelectAllHack(), k) {
                        e_stop(e);
                        var h = function () {
                            off(window, "mouseup", h), setTimeout(rehide, 20)
                        };
                        z(window, "mouseup", h)
                    } else setTimeout(rehide, 50)
                }

                function prepareSelectAllHack() {
                    if (null != r.selectionStart) {
                        var e = o.somethingSelected(), t = "​" + (e ? r.value : "");
                        r.value = "⇚", r.value = t, n.prevInput = e ? "" : "​", r.selectionStart = 1, r.selectionEnd = t.length, i.selForContextMenu = o.doc.sel
                    }
                }

                function rehide() {
                    if (n.contextMenuPending = !1, n.wrapper.style.cssText = c, r.style.cssText = l, x && w < 9 && i.scrollbars.setScrollTop(i.scroller.scrollTop = a), null != r.selectionStart) {
                        (!x || x && w < 9) && prepareSelectAllHack();
                        var e = 0, t = function () {
                            i.selForContextMenu == o.doc.sel && 0 == r.selectionStart && 0 < r.selectionEnd && "​" == n.prevInput ? operation(o, selectAll)(o) : e++ < 10 ? i.detectingSelectAll = setTimeout(t, 500) : (i.selForContextMenu = null, i.input.reset())
                        };
                        i.detectingSelectAll = setTimeout(t, 200)
                    }
                }
            }, _e.prototype.readOnlyChanged = function (e) {
                e || this.reset(), this.textarea.disabled = "nocursor" == e
            }, _e.prototype.setUneditable = function () {
            }, _e.prototype.needsContentAttribute = !1, function (i) {
                var r = i.optionHandlers;

                function option(e, t, o, n) {
                    i.defaults[e] = t, o && (r[e] = n ? function (e, t, n) {
                        n != Be && o(e, t, n)
                    } : o)
                }

                i.defineOption = option, i.Init = Be, option("value", "", function (e, t) {
                    return e.setValue(t)
                }, !0), option("mode", null, function (e, t) {
                    e.doc.modeOption = t, loadMode(e)
                }, !0), option("indentUnit", 2, loadMode, !0), option("indentWithTabs", !1), option("smartIndent", !0), option("tabSize", 4, function (e) {
                    resetModeState(e), clearCaches(e), regChange(e)
                }, !0), option("lineSeparator", null, function (e, o) {
                    if (e.doc.lineSep = o) {
                        var i = [], r = e.doc.first;
                        e.doc.iter(function (e) {
                            for (var t = 0; ;) {
                                var n = e.text.indexOf(o, t);
                                if (-1 == n) break;
                                t = n + o.length, i.push(Pos(r, n))
                            }
                            r++
                        });
                        for (var t = i.length - 1; 0 <= t; t--) replaceRange(e.doc, o, i[t], Pos(i[t].line, i[t].ch + o.length))
                    }
                }), option("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g, function (e, t, n) {
                    e.state.specialChars = new RegExp(t.source + (t.test("\t") ? "" : "|\t"), "g"), n != Be && e.refresh()
                }), option("specialCharPlaceholder", defaultSpecialCharPlaceholder, function (e) {
                    return e.refresh()
                }, !0), option("electricChars", !0), option("inputStyle", h ? "contenteditable" : "textarea", function () {
                    throw new Error("inputStyle can not (yet) be changed in a running editor")
                }, !0), option("spellcheck", !1, function (e, t) {
                    return e.getInputField().spellcheck = t
                }, !0), option("rtlMoveVisually", !p), option("wholeLineUpdateBefore", !0), option("theme", "default", function (e) {
                    themeChanged(e), guttersChanged(e)
                }, !0), option("keyMap", "default", function (e, t, n) {
                    var o = getKeyMap(t), i = n != Be && getKeyMap(n);
                    i && i.detach && i.detach(e, o), o.attach && o.attach(e, i || null)
                }), option("extraKeys", null), option("configureMouse", null), option("lineWrapping", !1, wrappingChanged, !0), option("gutters", [], function (e) {
                    setGuttersForLineNumbers(e.options), guttersChanged(e)
                }, !0), option("fixedGutter", !0, function (e, t) {
                    e.display.gutters.style.left = t ? compensateForHScroll(e.display) + "px" : "0", e.refresh()
                }, !0), option("coverGutterNextToScrollbar", !1, function (e) {
                    return updateScrollbars(e)
                }, !0), option("scrollbarStyle", "native", function (e) {
                    initScrollbars(e), updateScrollbars(e), e.display.scrollbars.setScrollTop(e.doc.scrollTop), e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)
                }, !0), option("lineNumbers", !1, function (e) {
                    setGuttersForLineNumbers(e.options), guttersChanged(e)
                }, !0), option("firstLineNumber", 1, guttersChanged, !0), option("lineNumberFormatter", function (e) {
                    return e
                }, guttersChanged, !0), option("showCursorWhenSelecting", !1, updateSelection, !0), option("resetSelectionOnContextMenu", !0), option("lineWiseCopyCut", !0), option("pasteLinesPerSelection", !0), option("selectionsMayTouch", !1), option("readOnly", !1, function (e, t) {
                    "nocursor" == t && (onBlur(e), e.display.input.blur()), e.display.input.readOnlyChanged(t)
                }), option("disableInput", !1, function (e, t) {
                    t || e.display.input.reset()
                }, !0), option("dragDrop", !0, dragDropChanged), option("allowDropFileTypes", null), option("cursorBlinkRate", 530), option("cursorScrollMargin", 0), option("cursorHeight", 1, updateSelection, !0), option("singleCursorHeightPerLine", !0, updateSelection, !0), option("workTime", 100), option("workDelay", 100), option("flattenSpans", !0, resetModeState, !0), option("addModeClass", !1, resetModeState, !0), option("pollInterval", 100), option("undoDepth", 200, function (e, t) {
                    return e.doc.history.undoDepth = t
                }), option("historyEventDelay", 1250), option("viewportMargin", 10, function (e) {
                    return e.refresh()
                }, !0), option("maxHighlightLength", 1e4, resetModeState, !0), option("moveInputWithCursor", !0, function (e, t) {
                    t || e.display.input.resetPosition()
                }), option("tabindex", null, function (e, t) {
                    return e.display.input.getField().tabIndex = t || ""
                }), option("autofocus", null), option("direction", "ltr", function (e, t) {
                    return e.doc.setDirection(t)
                }, !0), option("phrases", null)
            }(CodeMirror), je = (Ke = CodeMirror).optionHandlers, Ge = Ke.helpers = {}, Ke.prototype = {
                constructor: Ke,
                focus: function () {
                    window.focus(), this.display.input.focus()
                },
                setOption: function (e, t) {
                    var n = this.options, o = n[e];
                    n[e] == t && "mode" != e || (n[e] = t, je.hasOwnProperty(e) && operation(this, je[e])(this, t, o), signal(this, "optionChange", this, e))
                },
                getOption: function (e) {
                    return this.options[e]
                },
                getDoc: function () {
                    return this.doc
                },
                addKeyMap: function (e, t) {
                    this.state.keyMaps[t ? "push" : "unshift"](getKeyMap(e))
                },
                removeKeyMap: function (e) {
                    for (var t = this.state.keyMaps, n = 0; n < t.length; ++n) if (t[n] == e || t[n].name == e) return t.splice(n, 1), !0
                },
                addOverlay: methodOp(function (e, t) {
                    var n = e.token ? e : Ke.getMode(this.options, e);
                    if (n.startState) throw new Error("Overlays may not be stateful.");
                    insertSorted(this.state.overlays, {
                        mode: n,
                        modeSpec: e,
                        opaque: t && t.opaque,
                        priority: t && t.priority || 0
                    }, function (e) {
                        return e.priority
                    }), this.state.modeGen++, regChange(this)
                }),
                removeOverlay: methodOp(function (e) {
                    for (var t = this.state.overlays, n = 0; n < t.length; ++n) {
                        var o = t[n].modeSpec;
                        if (o == e || "string" == typeof e && o.name == e) return t.splice(n, 1), this.state.modeGen++, void regChange(this)
                    }
                }),
                indentLine: methodOp(function (e, t, n) {
                    "string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"), isLine(this.doc, e) && indentLine(this, e, t, n)
                }),
                indentSelection: methodOp(function (e) {
                    for (var t = this, n = this.doc.sel.ranges, o = -1, i = 0; i < n.length; i++) {
                        var r = n[i];
                        if (r.empty()) r.head.line > o && (indentLine(t, r.head.line, e, !0), o = r.head.line, i == t.doc.sel.primIndex && ensureCursorVisible(t)); else {
                            var a = r.from(), s = r.to(), l = Math.max(o, a.line);
                            o = Math.min(t.lastLine(), s.line - (s.ch ? 0 : 1)) + 1;
                            for (var c = l; c < o; ++c) indentLine(t, c, e);
                            var d = t.doc.sel.ranges;
                            0 == a.ch && n.length == d.length && 0 < d[i].from().ch && replaceOneSelection(t.doc, i, new ye(a, d[i].to()), A)
                        }
                    }
                }),
                getTokenAt: function (e, t) {
                    return takeToken(this, e, t)
                },
                getLineTokens: function (e, t) {
                    return takeToken(this, Pos(e), t, !0)
                },
                getTokenTypeAt: function (e) {
                    e = clipPos(this.doc, e);
                    var t, n = getLineStyles(this, getLine(this.doc, e.line)), o = 0, i = (n.length - 1) / 2, r = e.ch;
                    if (0 == r) t = n[2]; else for (; ;) {
                        var a = o + i >> 1;
                        if ((a ? n[2 * a - 1] : 0) >= r) i = a; else {
                            if (!(n[2 * a + 1] < r)) {
                                t = n[2 * a + 2];
                                break
                            }
                            o = a + 1
                        }
                    }
                    var s = t ? t.indexOf("overlay ") : -1;
                    return s < 0 ? t : 0 == s ? null : t.slice(0, s - 1)
                },
                getModeAt: function (e) {
                    var t = this.doc.mode;
                    return t.innerMode ? Ke.innerMode(t, this.getTokenAt(e).state).mode : t
                },
                getHelper: function (e, t) {
                    return this.getHelpers(e, t)[0]
                },
                getHelpers: function (e, t) {
                    var n = [];
                    if (!Ge.hasOwnProperty(t)) return n;
                    var o = Ge[t], i = this.getModeAt(e);
                    if ("string" == typeof i[t]) o[i[t]] && n.push(o[i[t]]); else if (i[t]) for (var r = 0; r < i[t].length; r++) {
                        var a = o[i[t][r]];
                        a && n.push(a)
                    } else i.helperType && o[i.helperType] ? n.push(o[i.helperType]) : o[i.name] && n.push(o[i.name]);
                    for (var s = 0; s < o._global.length; s++) {
                        var l = o._global[s];
                        l.pred(i, this) && -1 == indexOf(n, l.val) && n.push(l.val)
                    }
                    return n
                },
                getStateAfter: function (e, t) {
                    var n = this.doc;
                    return getContextBefore(this, (e = clipLine(n, null == e ? n.first + n.size - 1 : e)) + 1, t).state
                },
                cursorCoords: function (e, t) {
                    var n = this.doc.sel.primary();
                    return cursorCoords(this, null == e ? n.head : "object" == typeof e ? clipPos(this.doc, e) : e ? n.from() : n.to(), t || "page")
                },
                charCoords: function (e, t) {
                    return charCoords(this, clipPos(this.doc, e), t || "page")
                },
                coordsChar: function (e, t) {
                    return coordsChar(this, (e = fromCoordSystem(this, e, t || "page")).left, e.top)
                },
                lineAtHeight: function (e, t) {
                    return e = fromCoordSystem(this, {
                        top: e,
                        left: 0
                    }, t || "page").top, lineAtHeight(this.doc, e + this.display.viewOffset)
                },
                heightAtLine: function (e, t, n) {
                    var o, i = !1;
                    if ("number" == typeof e) {
                        var r = this.doc.first + this.doc.size - 1;
                        e < this.doc.first ? e = this.doc.first : r < e && (e = r, i = !0), o = getLine(this.doc, e)
                    } else o = e;
                    return intoCoordSystem(this, o, {
                        top: 0,
                        left: 0
                    }, t || "page", n || i).top + (i ? this.doc.height - heightAtLine(o) : 0)
                },
                defaultTextHeight: function () {
                    return textHeight(this.display)
                },
                defaultCharWidth: function () {
                    return charWidth(this.display)
                },
                getViewport: function () {
                    return {from: this.display.viewFrom, to: this.display.viewTo}
                },
                addWidget: function (e, t, n, o, i) {
                    var r = this.display, a = (e = cursorCoords(this, clipPos(this.doc, e))).bottom, s = e.left;
                    if (t.style.position = "absolute", t.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(t), r.sizer.appendChild(t), "over" == o) a = e.top; else if ("above" == o || "near" == o) {
                        var l = Math.max(r.wrapper.clientHeight, this.doc.height),
                            c = Math.max(r.sizer.clientWidth, r.lineSpace.clientWidth);
                        ("above" == o || e.bottom + t.offsetHeight > l) && e.top > t.offsetHeight ? a = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= l && (a = e.bottom), s + t.offsetWidth > c && (s = c - t.offsetWidth)
                    }
                    t.style.top = a + "px", t.style.left = t.style.right = "", "right" == i ? (s = r.sizer.clientWidth - t.offsetWidth, t.style.right = "0px") : ("left" == i ? s = 0 : "middle" == i && (s = (r.sizer.clientWidth - t.offsetWidth) / 2), t.style.left = s + "px"), n && scrollIntoView(this, {
                        left: s,
                        top: a,
                        right: s + t.offsetWidth,
                        bottom: a + t.offsetHeight
                    })
                },
                triggerOnKeyDown: methodOp(onKeyDown),
                triggerOnKeyPress: methodOp(onKeyPress),
                triggerOnKeyUp: onKeyUp,
                triggerOnMouseDown: methodOp(onMouseDown),
                execCommand: function (e) {
                    if (Ee.hasOwnProperty(e)) return Ee[e].call(null, this)
                },
                triggerElectric: methodOp(function (e) {
                    triggerElectric(this, e)
                }),
                findPosH: function (e, t, n, o) {
                    var i = 1;
                    t < 0 && (i = -1, t = -t);
                    for (var r = clipPos(this.doc, e), a = 0; a < t && !(r = findPosH(this.doc, r, i, n, o)).hitSide; ++a) ;
                    return r
                },
                moveH: methodOp(function (t, n) {
                    var o = this;
                    this.extendSelectionsBy(function (e) {
                        return o.display.shift || o.doc.extend || e.empty() ? findPosH(o.doc, e.head, t, n, o.options.rtlMoveVisually) : t < 0 ? e.from() : e.to()
                    }, E)
                }),
                deleteH: methodOp(function (n, o) {
                    var e = this.doc.sel, i = this.doc;
                    e.somethingSelected() ? i.replaceSelection("", null, "+delete") : deleteNearSelection(this, function (e) {
                        var t = findPosH(i, e.head, n, o, !1);
                        return n < 0 ? {from: t, to: e.head} : {from: e.head, to: t}
                    })
                }),
                findPosV: function (e, t, n, o) {
                    var i = 1, r = o;
                    t < 0 && (i = -1, t = -t);
                    for (var a = clipPos(this.doc, e), s = 0; s < t; ++s) {
                        var l = cursorCoords(this, a, "div");
                        if (null == r ? r = l.left : l.left = r, (a = findPosV(this, l, i, n)).hitSide) break
                    }
                    return a
                },
                moveV: methodOp(function (o, i) {
                    var r = this, a = this.doc, s = [],
                        l = !this.display.shift && !a.extend && a.sel.somethingSelected();
                    if (a.extendSelectionsBy(function (e) {
                        if (l) return o < 0 ? e.from() : e.to();
                        var t = cursorCoords(r, e.head, "div");
                        null != e.goalColumn && (t.left = e.goalColumn), s.push(t.left);
                        var n = findPosV(r, t, o, i);
                        return "page" == i && e == a.sel.primary() && addToScrollTop(r, charCoords(r, n, "div").top - t.top), n
                    }, E), s.length) for (var e = 0; e < a.sel.ranges.length; e++) a.sel.ranges[e].goalColumn = s[e]
                }),
                findWordAt: function (e) {
                    var t = this.doc, n = getLine(t, e.line).text, o = e.ch, i = e.ch;
                    if (n) {
                        var r = this.getHelper(e, "wordChars");
                        "before" != e.sticky && i != n.length || !o ? ++i : --o;
                        for (var a = n.charAt(o), s = isWordChar(a, r) ? function (e) {
                            return isWordChar(e, r)
                        } : /\s/.test(a) ? function (e) {
                            return /\s/.test(e)
                        } : function (e) {
                            return !/\s/.test(e) && !isWordChar(e)
                        }; 0 < o && s(n.charAt(o - 1));) --o;
                        for (; i < n.length && s(n.charAt(i));) ++i
                    }
                    return new ye(Pos(e.line, o), Pos(e.line, i))
                },
                toggleOverwrite: function (e) {
                    null != e && e == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? addClass(this.display.cursorDiv, "CodeMirror-overwrite") : L(this.display.cursorDiv, "CodeMirror-overwrite"), signal(this, "overwriteToggle", this, this.state.overwrite))
                },
                hasFocus: function () {
                    return this.display.input.getField() == activeElt()
                },
                isReadOnly: function () {
                    return !(!this.options.readOnly && !this.doc.cantEdit)
                },
                scrollTo: methodOp(function (e, t) {
                    scrollToCoords(this, e, t)
                }),
                getScrollInfo: function () {
                    var e = this.display.scroller;
                    return {
                        left: e.scrollLeft,
                        top: e.scrollTop,
                        height: e.scrollHeight - scrollGap(this) - this.display.barHeight,
                        width: e.scrollWidth - scrollGap(this) - this.display.barWidth,
                        clientHeight: displayHeight(this),
                        clientWidth: displayWidth(this)
                    }
                },
                scrollIntoView: methodOp(function (e, t) {
                    var n, o;
                    null == e ? (e = {
                        from: this.doc.sel.primary().head,
                        to: null
                    }, null == t && (t = this.options.cursorScrollMargin)) : "number" == typeof e ? e = {
                        from: Pos(e, 0),
                        to: null
                    } : null == e.from && (e = {
                        from: e,
                        to: null
                    }), e.to || (e.to = e.from), e.margin = t || 0, null != e.from.line ? (o = e, resolveScrollToPos(n = this), n.curOp.scrollToPos = o) : scrollToCoordsRange(this, e.from, e.to, e.margin)
                }),
                setSize: methodOp(function (e, t) {
                    var n = this, o = function (e) {
                        return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e
                    };
                    null != e && (this.display.wrapper.style.width = o(e)), null != t && (this.display.wrapper.style.height = o(t)), this.options.lineWrapping && clearLineMeasurementCache(this);
                    var i = this.display.viewFrom;
                    this.doc.iter(i, this.display.viewTo, function (e) {
                        if (e.widgets) for (var t = 0; t < e.widgets.length; t++) if (e.widgets[t].noHScroll) {
                            regLineChange(n, i, "widget");
                            break
                        }
                        ++i
                    }), this.curOp.forceUpdate = !0, signal(this, "refresh", this)
                }),
                operation: function (e) {
                    return runInOp(this, e)
                },
                startOperation: function () {
                    return startOperation(this)
                },
                endOperation: function () {
                    return endOperation(this)
                },
                refresh: methodOp(function () {
                    var e = this.display.cachedTextHeight;
                    regChange(this), this.curOp.forceUpdate = !0, clearCaches(this), scrollToCoords(this, this.doc.scrollLeft, this.doc.scrollTop), updateGutterSpace(this), (null == e || .5 < Math.abs(e - textHeight(this.display))) && estimateLineHeights(this), signal(this, "refresh", this)
                }),
                swapDoc: methodOp(function (e) {
                    var t = this.doc;
                    return t.cm = null, attachDoc(this, e), clearCaches(this), this.display.input.reset(), scrollToCoords(this, e.scrollLeft, e.scrollTop), this.curOp.forceScroll = !0, signalLater(this, "swapDoc", this, t), t
                }),
                phrase: function (e) {
                    var t = this.options.phrases;
                    return t && Object.prototype.hasOwnProperty.call(t, e) ? t[e] : e
                },
                getInputField: function () {
                    return this.display.input.getField()
                },
                getWrapperElement: function () {
                    return this.display.wrapper
                },
                getScrollerElement: function () {
                    return this.display.scroller
                },
                getGutterElement: function () {
                    return this.display.gutters
                }
            }, eventMixin(Ke), Ke.registerHelper = function (e, t, n) {
                Ge.hasOwnProperty(e) || (Ge[e] = Ke[e] = {_global: []}), Ge[e][t] = n
            }, Ke.registerGlobalHelper = function (e, t, n, o) {
                Ke.registerHelper(e, t, o), Ge[e]._global.push({pred: n, val: o})
            };
            var qe, Xe = "iter insert remove copy getEditor constructor".split(" ");
            for (var Ye in Se.prototype) Se.prototype.hasOwnProperty(Ye) && indexOf(Xe, Ye) < 0 && (CodeMirror.prototype[Ye] = function (e) {
                return function () {
                    return e.apply(this.doc, arguments)
                }
            }(Se.prototype[Ye]));
            return eventMixin(Se), CodeMirror.inputStyles = {
                textarea: _e,
                contenteditable: Ue
            }, CodeMirror.defineMode = function (e) {
                CodeMirror.defaults.mode || "null" == e || (CodeMirror.defaults.mode = e), function (e, t) {
                    2 < arguments.length && (t.dependencies = Array.prototype.slice.call(arguments, 2)), Y[e] = t
                }.apply(this, arguments)
            }, CodeMirror.defineMIME = function (e, t) {
                Z[e] = t
            }, CodeMirror.defineMode("null", function () {
                return {
                    token: function (e) {
                        return e.skipToEnd()
                    }
                }
            }), CodeMirror.defineMIME("text/plain", "null"), CodeMirror.defineExtension = function (e, t) {
                CodeMirror.prototype[e] = t
            }, CodeMirror.defineDocExtension = function (e, t) {
                Se.prototype[e] = t
            }, CodeMirror.fromTextArea = function (t, e) {
                if ((e = e ? copyObj(e) : {}).value = t.value, !e.tabindex && t.tabIndex && (e.tabindex = t.tabIndex), !e.placeholder && t.placeholder && (e.placeholder = t.placeholder), null == e.autofocus) {
                    var n = activeElt();
                    e.autofocus = n == t || null != t.getAttribute("autofocus") && n == document.body
                }

                function save() {
                    t.value = a.getValue()
                }

                var o;
                if (t.form && (z(t.form, "submit", save), !e.leaveSubmitMethodAlone)) {
                    var i = t.form;
                    o = i.submit;
                    try {
                        var r = i.submit = function () {
                            save(), i.submit = o, i.submit(), i.submit = r
                        }
                    } catch (e) {
                    }
                }
                e.finishInit = function (e) {
                    e.save = save, e.getTextArea = function () {
                        return t
                    }, e.toTextArea = function () {
                        e.toTextArea = isNaN, save(), t.parentNode.removeChild(e.getWrapperElement()), t.style.display = "", t.form && (off(t.form, "submit", save), "function" == typeof t.form.submit && (t.form.submit = o))
                    }
                }, t.style.display = "none";
                var a = CodeMirror(function (e) {
                    return t.parentNode.insertBefore(e, t.nextSibling)
                }, e);
                return a
            }, (qe = CodeMirror).off = off, qe.on = z, qe.wheelEventPixels = wheelEventPixels, qe.Doc = Se, qe.splitLines = G, qe.countColumn = countColumn, qe.findColumn = findColumn, qe.isWordChar = isWordCharBasic, qe.Pass = N, qe.signal = signal, qe.Line = oe, qe.changeEnd = changeEnd, qe.scrollbarModel = he, qe.Pos = Pos, qe.cmpPos = cmp, qe.modes = Y, qe.mimeModes = Z, qe.resolveMode = resolveMode, qe.getMode = getMode, qe.modeExtensions = J, qe.extendMode = extendMode, qe.copyState = copyState, qe.startState = startState, qe.innerMode = innerMode, qe.commands = Ee, qe.keyMap = He, qe.keyName = keyName, qe.isModifierKey = isModifierKey, qe.lookupKey = lookupKey, qe.normalizeKeyMap = normalizeKeyMap, qe.StringStream = Q, qe.SharedTextMarker = we, qe.TextMarker = xe, qe.LineWidget = be, qe.e_preventDefault = e_preventDefault, qe.e_stopPropagation = e_stopPropagation, qe.e_stop = e_stop, qe.addClass = addClass, qe.contains = contains, qe.rmClass = L, qe.keyNames = Pe, CodeMirror.version = "5.42.0", CodeMirror
        }()
    }, 261: function (e, t, n) {
        "use strict";
        n.r(t);
        var o = n(0), i = n.n(o);
        n(262), n(264), n(266);
        i()(function () {
            i()(".summernote").each(function () {
                i()(this).summernote({height: 380})
            }), i()(".summernote-air").each(function () {
                i()(this).summernote({airMode: !0})
            }), i()(".note-popover").css({display: "none"})
        })
    }, 262: function (e, t, n) {
    }, 264: function (e, t, Te) {
        !function (C) {
            "use strict";
            C = C && C.hasOwnProperty("default") ? C.default : C;
            var i = function () {
                    function Renderer(e, t, n, o) {
                        this.markup = e, this.children = t, this.options = n, this.callback = o
                    }

                    return Renderer.prototype.render = function (e) {
                        var n = C(this.markup);
                        if (this.options && this.options.contents && n.html(this.options.contents), this.options && this.options.className && n.addClass(this.options.className), this.options && this.options.data && C.each(this.options.data, function (e, t) {
                            n.attr("data-" + e, t)
                        }), this.options && this.options.click && n.on("click", this.options.click), this.children) {
                            var t = n.find(".note-children-container");
                            this.children.forEach(function (e) {
                                e.render(t.length ? t : n)
                            })
                        }
                        return this.callback && this.callback(n, this.options), this.options && this.options.callback && this.options.callback(n), e && e.append(n), n
                    }, Renderer
                }(), n = {
                    create: function (n, o) {
                        return function () {
                            var e = "object" == typeof arguments[1] ? arguments[1] : arguments[0],
                                t = C.isArray(arguments[0]) ? arguments[0] : [];
                            return e && e.children && (t = e.children), new i(n, t, e, o)
                        }
                    }
                }, e = n.create('<div class="note-editor note-frame panel panel-default"/>'),
                t = n.create('<div class="note-toolbar panel-heading" role="toolbar"></div></div>'),
                o = n.create('<div class="note-editing-area"/>'),
                r = n.create('<textarea class="note-codable" role="textbox" aria-multiline="true"/>'),
                a = n.create('<div class="note-editable" contentEditable="true" role="textbox" aria-multiline="true"/>'),
                s = n.create(['<output class="note-status-output" aria-live="polite"/>', '<div class="note-statusbar" role="status">', '  <div class="note-resizebar" role="seperator" aria-orientation="horizontal" aria-label="Resize">', '    <div class="note-icon-bar"/>', '    <div class="note-icon-bar"/>', '    <div class="note-icon-bar"/>', "  </div>", "</div>"].join("")),
                l = n.create('<div class="note-editor"/>'),
                c = n.create(['<div class="note-editable" contentEditable="true" role="textbox" aria-multiline="true"/>', '<output class="note-status-output" aria-live="polite"/>'].join("")),
                d = n.create('<div class="note-btn-group btn-group">'),
                u = n.create('<ul class="dropdown-menu" role="list">', function (e, a) {
                    var t = C.isArray(a.items) ? a.items.map(function (e) {
                        var t = "string" == typeof e ? e : e.value || "", n = a.template ? a.template(e) : e,
                            o = "object" == typeof e ? e.option : void 0, i = 'data-value="' + t + '"',
                            r = void 0 !== o ? ' data-option="' + o + '"' : "";
                        return '<li role="listitem" aria-label="' + e + '"><a href="#" ' + (i + r) + ">" + n + "</a></li>"
                    }).join("") : a.items;
                    e.html(t).attr({"aria-label": a.title})
                }), h = n.create('<ul class="dropdown-menu note-check" role="list">', function (e, o) {
                    var t = C.isArray(o.items) ? o.items.map(function (e) {
                        var t = "string" == typeof e ? e : e.value || "", n = o.template ? o.template(e) : e;
                        return '<li role="listitem" aria-label="' + e + '"><a href="#" data-value="' + t + '">' + v(o.checkClassName) + " " + n + "</a></li>"
                    }).join("") : o.items;
                    e.html(t).attr({"aria-label": o.title})
                }), p = n.create('<div class="note-color-palette"/>', function (e, t) {
                    for (var n = [], o = 0, i = t.colors.length; o < i; o++) {
                        for (var r = t.eventName, a = t.colors[o], s = t.colorsName[o], l = [], c = 0, d = a.length; c < d; c++) {
                            var u = a[c], h = s[c];
                            l.push(['<button type="button" class="note-color-btn"', 'style="background-color:', u, '" ', 'data-event="', r, '" ', 'data-value="', u, '" ', 'title="', h, '" ', 'aria-label="', h, '" ', 'data-toggle="button" tabindex="-1"></button>'].join(""))
                        }
                        n.push('<div class="note-color-row">' + l.join("") + "</div>")
                    }
                    e.html(n.join("")), t.tooltip && e.find(".note-color-btn").tooltip({
                        container: t.container,
                        trigger: "hover",
                        placement: "bottom"
                    })
                }), f = n.create('<div class="modal" aria-hidden="false" tabindex="-1" role="dialog"/>', function (e, t) {
                    t.fade && e.addClass("fade"), e.attr({"aria-label": t.title}), e.html(['<div class="modal-dialog">', '  <div class="modal-content">', t.title ? '    <div class="modal-header">      <button type="button" class="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">&times;</button>      <h4 class="modal-title">' + t.title + "</h4>    </div>" : "", '    <div class="modal-body">' + t.body + "</div>", t.footer ? '    <div class="modal-footer">' + t.footer + "</div>" : "", "  </div>", "</div>"].join(""))
                }),
                g = n.create(['<div class="note-popover popover in">', '  <div class="arrow"/>', '  <div class="popover-content note-children-container"/>', "</div>"].join(""), function (e, t) {
                    var n = void 0 !== t.direction ? t.direction : "bottom";
                    e.addClass(n), t.hideArrow && e.find(".arrow").hide()
                }), m = n.create('<div class="checkbox"></div>', function (e, t) {
                    e.html(["<label" + (t.id ? ' for="' + t.id + '"' : "") + ">", ' <input role="checkbox" type="checkbox"' + (t.id ? ' id="' + t.id + '"' : ""), t.checked ? " checked" : "", ' aria-checked="' + (t.checked ? "true" : "false") + '"/>', t.text ? t.text : "", "</label>"].join(""))
                }), v = function (e, t) {
                    return "<" + (t = t || "i") + ' class="' + e + '"/>'
                }, y = {
                    editor: e,
                    toolbar: t,
                    editingArea: o,
                    codable: r,
                    editable: a,
                    statusbar: s,
                    airEditor: l,
                    airEditable: c,
                    buttonGroup: d,
                    dropdown: u,
                    dropdownButtonContents: function (e, t) {
                        return e + " " + v(t.icons.caret, "span")
                    },
                    dropdownCheck: h,
                    palette: p,
                    dialog: f,
                    popover: g,
                    checkbox: m,
                    icon: v,
                    options: {},
                    button: function (e, t) {
                        return n.create('<button type="button" class="note-btn btn btn-default btn-sm" role="button" tabindex="-1">', function (e, t) {
                            t && t.tooltip && e.attr({
                                title: t.tooltip,
                                "aria-label": t.tooltip
                            }).tooltip({
                                container: void 0 !== t.container ? t.container : "body",
                                trigger: "hover",
                                placement: "bottom"
                            })
                        })(e, t)
                    },
                    toggleBtn: function (e, t) {
                        e.toggleClass("disabled", !t), e.attr("disabled", !t)
                    },
                    toggleBtnActive: function (e, t) {
                        e.toggleClass("active", t)
                    },
                    onDialogShown: function (e, t) {
                        e.one("shown.bs.modal", t)
                    },
                    onDialogHidden: function (e, t) {
                        e.one("hidden.bs.modal", t)
                    },
                    showDialog: function (e) {
                        e.modal("show")
                    },
                    hideDialog: function (e) {
                        e.modal("hide")
                    },
                    createLayout: function (e, t) {
                        var n = (t.airMode ? y.airEditor([y.editingArea([y.airEditable()])]) : y.editor([y.toolbar(), y.editingArea([y.codable(), y.editable()]), y.statusbar()])).render();
                        return n.insertAfter(e), {
                            note: e,
                            editor: n,
                            toolbar: n.find(".note-toolbar"),
                            editingArea: n.find(".note-editing-area"),
                            editable: n.find(".note-editable"),
                            codable: n.find(".note-codable"),
                            statusbar: n.find(".note-statusbar")
                        }
                    },
                    removeLayout: function (e, t) {
                        e.html(t.editable.html()), t.editor.remove(), e.show()
                    }
                }, b = 0, x = {
                    eq: function (t) {
                        return function (e) {
                            return t === e
                        }
                    }, eq2: function (e, t) {
                        return e === t
                    }, peq2: function (n) {
                        return function (e, t) {
                            return e[n] === t[n]
                        }
                    }, ok: function () {
                        return !0
                    }, fail: function () {
                        return !1
                    }, self: function (e) {
                        return e
                    }, not: function (e) {
                        return function () {
                            return !e.apply(e, arguments)
                        }
                    }, and: function (t, n) {
                        return function (e) {
                            return t(e) && n(e)
                        }
                    }, invoke: function (e, t) {
                        return function () {
                            return e[t].apply(e, arguments)
                        }
                    }, uniqueId: function (e) {
                        var t = ++b + "";
                        return e ? e + t : t
                    }, rect2bnd: function (e) {
                        var t = $(document);
                        return {
                            top: e.top + t.scrollTop(),
                            left: e.left + t.scrollLeft(),
                            width: e.right - e.left,
                            height: e.bottom - e.top
                        }
                    }, invertObject: function (e) {
                        var t = {};
                        for (var n in e) e.hasOwnProperty(n) && (t[e[n]] = n);
                        return t
                    }, namespaceToCamel: function (e, t) {
                        return (t = t || "") + e.split(".").map(function (e) {
                            return e.substring(0, 1).toUpperCase() + e.substring(1)
                        }).join("")
                    }, debounce: function (i, r, a) {
                        var s;
                        return function () {
                            var e = this, t = arguments, n = function () {
                                s = null, a || i.apply(e, t)
                            }, o = a && !s;
                            clearTimeout(s), s = setTimeout(n, r), o && i.apply(e, t)
                        }
                    }
                };

            function head(e) {
                return e[0]
            }

            function last(e) {
                return e[e.length - 1]
            }

            function tail(e) {
                return e.slice(1)
            }

            function indexOf(e, t) {
                return C.inArray(t, e)
            }

            function contains(e, t) {
                return -1 !== indexOf(e, t)
            }

            var w, k = {
                head: head, last: last, initial: function (e) {
                    return e.slice(0, e.length - 1)
                }, tail: tail, prev: function (e, t) {
                    var n = indexOf(e, t);
                    return -1 !== n ? e[n - 1] : null
                }, next: function (e, t) {
                    var n = indexOf(e, t);
                    return -1 !== n ? e[n + 1] : null
                }, find: function (e, t) {
                    for (var n = 0, o = e.length; n < o; n++) {
                        var i = e[n];
                        if (t(i)) return i
                    }
                }, contains: contains, all: function (e, t) {
                    for (var n = 0, o = e.length; n < o; n++) if (!t(e[n])) return !1;
                    return !0
                }, sum: function (e, n) {
                    return n = n || x.self, e.reduce(function (e, t) {
                        return e + n(t)
                    }, 0)
                }, from: function (e) {
                    for (var t = [], n = e.length, o = -1; ++o < n;) t[o] = e[o];
                    return t
                }, isEmpty: function (e) {
                    return !e || !e.length
                }, clusterBy: function (e, o) {
                    return e.length ? tail(e).reduce(function (e, t) {
                        var n = last(e);
                        return o(last(n), t) ? n[n.length] = t : e[e.length] = [t], e
                    }, [[head(e)]]) : []
                }, compact: function (e) {
                    for (var t = [], n = 0, o = e.length; n < o; n++) e[n] && t.push(e[n]);
                    return t
                }, unique: function (e) {
                    for (var t = [], n = 0, o = e.length; n < o; n++) contains(t, e[n]) || t.push(e[n]);
                    return t
                }
            }, S = Te(265), L = navigator.userAgent, T = /MSIE|Trident/i.test(L);
            if (T) {
                var P = /MSIE (\d+[.]\d+)/.exec(L);
                P && (w = parseFloat(P[1])), (P = /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(L)) && (w = parseFloat(P[1]))
            }
            var M = /Edge\/\d+/.test(L), N = !!window.CodeMirror;
            if (!N && S) try {
                N = !0
            } catch (e) {
            }
            var A = "ontouchstart" in window || 0 < navigator.MaxTouchPoints || 0 < navigator.msMaxTouchPoints,
                H = T || M ? "DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted" : "input", E = {
                    isMac: -1 < navigator.appVersion.indexOf("Mac"),
                    isMSIE: T,
                    isEdge: M,
                    isFF: !M && /firefox/i.test(L),
                    isPhantom: /PhantomJS/i.test(L),
                    isWebkit: !M && /webkit/i.test(L),
                    isChrome: !M && /chrome/i.test(L),
                    isSafari: !M && /safari/i.test(L),
                    browserVersion: w,
                    jqueryVersion: parseFloat(C.fn.jquery),
                    isSupportAmd: S,
                    isSupportTouch: A,
                    hasCodeMirror: N,
                    isFontInstalled: function (e) {
                        var t = "Comic Sans MS" === e ? "Courier New" : "Comic Sans MS", n = C("<div>").css({
                                position: "absolute",
                                left: "-9999px",
                                top: "-9999px",
                                fontSize: "200px"
                            }).text("mmmmmmmmmwwwwwww").appendTo(document.body), o = n.css("fontFamily", t).width(),
                            i = n.css("fontFamily", e + "," + t).width();
                        return n.remove(), o !== i
                    },
                    isW3CRangeSupport: !!document.createRange,
                    inputEventName: H
                }, I = String.fromCharCode(160);

            function isEditable(e) {
                return e && C(e).hasClass("note-editable")
            }

            function makePredByNodeName(t) {
                return t = t.toUpperCase(), function (e) {
                    return e && e.nodeName.toUpperCase() === t
                }
            }

            function isText(e) {
                return e && 3 === e.nodeType
            }

            function isVoid(e) {
                return e && /^BR|^IMG|^HR|^IFRAME|^BUTTON|^INPUT|^VIDEO|^EMBED/.test(e.nodeName.toUpperCase())
            }

            function isPara(e) {
                return !isEditable(e) && e && /^DIV|^P|^LI|^H[1-7]/.test(e.nodeName.toUpperCase())
            }

            var D = makePredByNodeName("PRE"), O = makePredByNodeName("LI"), F = makePredByNodeName("TABLE"),
                R = makePredByNodeName("DATA");

            function isInline(e) {
                return !(isBodyContainer(e) || isList(e) || B(e) || isPara(e) || F(e) || W(e) || R(e))
            }

            function isList(e) {
                return e && /^UL|^OL/.test(e.nodeName.toUpperCase())
            }

            var B = makePredByNodeName("HR");

            function isCell(e) {
                return e && /^TD|^TH/.test(e.nodeName.toUpperCase())
            }

            var W = makePredByNodeName("BLOCKQUOTE");

            function isBodyContainer(e) {
                return isCell(e) || W(e) || isEditable(e)
            }

            var z = makePredByNodeName("A"), V = makePredByNodeName("BODY"),
                U = E.isMSIE && E.browserVersion < 11 ? "&nbsp;" : "<br>";

            function nodeLength(e) {
                return isText(e) ? e.nodeValue.length : e ? e.childNodes.length : 0
            }

            function isEmpty$1(e) {
                var t = nodeLength(e);
                return 0 === t || !isText(e) && 1 === t && e.innerHTML === U || !(!k.all(e.childNodes, isText) || "" !== e.innerHTML)
            }

            function paddingBlankHTML(e) {
                isVoid(e) || nodeLength(e) || (e.innerHTML = U)
            }

            function ancestor(e, t) {
                for (; e;) {
                    if (t(e)) return e;
                    if (isEditable(e)) break;
                    e = e.parentNode
                }
                return null
            }

            function listAncestor(e, t) {
                t = t || x.fail;
                var n = [];
                return ancestor(e, function (e) {
                    return isEditable(e) || n.push(e), t(e)
                }), n
            }

            function listNext(e, t) {
                t = t || x.fail;
                for (var n = []; e && !t(e);) n.push(e), e = e.nextSibling;
                return n
            }

            function insertAfter(e, t) {
                var n = t.nextSibling, o = t.parentNode;
                return n ? o.insertBefore(e, n) : o.appendChild(e), e
            }

            function appendChildNodes(n, e) {
                return C.each(e, function (e, t) {
                    n.appendChild(t)
                }), n
            }

            function isLeftEdgePoint(e) {
                return 0 === e.offset
            }

            function isRightEdgePoint(e) {
                return e.offset === nodeLength(e.node)
            }

            function isEdgePoint(e) {
                return isLeftEdgePoint(e) || isRightEdgePoint(e)
            }

            function isLeftEdgeOf(e, t) {
                for (; e && e !== t;) {
                    if (0 !== position(e)) return !1;
                    e = e.parentNode
                }
                return !0
            }

            function isRightEdgeOf(e, t) {
                if (!t) return !1;
                for (; e && e !== t;) {
                    if (position(e) !== nodeLength(e.parentNode) - 1) return !1;
                    e = e.parentNode
                }
                return !0
            }

            function position(e) {
                for (var t = 0; e = e.previousSibling;) t += 1;
                return t
            }

            function hasChildren(e) {
                return !!(e && e.childNodes && e.childNodes.length)
            }

            function prevPoint(e, t) {
                var n, o;
                if (0 === e.offset) {
                    if (isEditable(e.node)) return null;
                    n = e.node.parentNode, o = position(e.node)
                } else o = hasChildren(e.node) ? nodeLength(n = e.node.childNodes[e.offset - 1]) : (n = e.node, t ? 0 : e.offset - 1);
                return {node: n, offset: o}
            }

            function nextPoint(e, t) {
                var n, o;
                if (nodeLength(e.node) === e.offset) {
                    if (isEditable(e.node)) return null;
                    n = e.node.parentNode, o = position(e.node) + 1
                } else o = hasChildren(e.node) ? (n = e.node.childNodes[e.offset], 0) : (n = e.node, t ? nodeLength(e.node) : e.offset + 1);
                return {node: n, offset: o}
            }

            function isSamePoint(e, t) {
                return e.node === t.node && e.offset === t.offset
            }

            function splitNode(e, t) {
                var n = t && t.isSkipPaddingBlankHTML, o = t && t.isNotSplitEdgePoint, i = t && t.isDiscardEmptySplits;
                if (i && (n = !0), isEdgePoint(e) && (isText(e.node) || o)) {
                    if (isLeftEdgePoint(e)) return e.node;
                    if (isRightEdgePoint(e)) return e.node.nextSibling
                }
                if (isText(e.node)) return e.node.splitText(e.offset);
                var r = e.node.childNodes[e.offset], a = insertAfter(e.node.cloneNode(!1), e.node);
                return appendChildNodes(a, listNext(r)), n || (paddingBlankHTML(e.node), paddingBlankHTML(a)), i && (isEmpty$1(e.node) && remove(e.node), isEmpty$1(a)) ? (remove(a), e.node.nextSibling) : a
            }

            function splitTree(e, n, o) {
                var t = listAncestor(n.node, x.eq(e));
                return t.length ? 1 === t.length ? splitNode(n, o) : t.reduce(function (e, t) {
                    return e === n.node && (e = splitNode(n, o)), splitNode({
                        node: t,
                        offset: e ? position(e) : nodeLength(t)
                    }, o)
                }) : null
            }

            function create(e) {
                return document.createElement(e)
            }

            function remove(e, t) {
                if (e && e.parentNode) {
                    if (e.removeNode) return e.removeNode(t);
                    var n = e.parentNode;
                    if (!t) {
                        for (var o = [], i = 0, r = e.childNodes.length; i < r; i++) o.push(e.childNodes[i]);
                        for (var i = 0, r = o.length; i < r; i++) n.insertBefore(o[i], e)
                    }
                    n.removeChild(e)
                }
            }

            var K = makePredByNodeName("TEXTAREA");

            function value(e, t) {
                var n = K(e[0]) ? e.val() : e.html();
                return t ? n.replace(/[\n\r]/g, "") : n
            }

            var j = {
                NBSP_CHAR: I,
                ZERO_WIDTH_NBSP_CHAR: "\ufeff",
                blank: U,
                emptyPara: "<p>" + U + "</p>",
                makePredByNodeName: makePredByNodeName,
                isEditable: isEditable,
                isControlSizing: function (e) {
                    return e && C(e).hasClass("note-control-sizing")
                },
                isText: isText,
                isElement: function (e) {
                    return e && 1 === e.nodeType
                },
                isVoid: isVoid,
                isPara: isPara,
                isPurePara: function (e) {
                    return isPara(e) && !O(e)
                },
                isHeading: function (e) {
                    return e && /^H[1-7]/.test(e.nodeName.toUpperCase())
                },
                isInline: isInline,
                isBlock: x.not(isInline),
                isBodyInline: function (e) {
                    return isInline(e) && !ancestor(e, isPara)
                },
                isBody: V,
                isParaInline: function (e) {
                    return isInline(e) && !!ancestor(e, isPara)
                },
                isPre: D,
                isList: isList,
                isTable: F,
                isData: R,
                isCell: isCell,
                isBlockquote: W,
                isBodyContainer: isBodyContainer,
                isAnchor: z,
                isDiv: makePredByNodeName("DIV"),
                isLi: O,
                isBR: makePredByNodeName("BR"),
                isSpan: makePredByNodeName("SPAN"),
                isB: makePredByNodeName("B"),
                isU: makePredByNodeName("U"),
                isS: makePredByNodeName("S"),
                isI: makePredByNodeName("I"),
                isImg: makePredByNodeName("IMG"),
                isTextarea: K,
                isEmpty: isEmpty$1,
                isEmptyAnchor: x.and(z, isEmpty$1),
                isClosestSibling: function (e, t) {
                    return e.nextSibling === t || e.previousSibling === t
                },
                withClosestSiblings: function (e, t) {
                    t = t || x.ok;
                    var n = [];
                    return e.previousSibling && t(e.previousSibling) && n.push(e.previousSibling), n.push(e), e.nextSibling && t(e.nextSibling) && n.push(e.nextSibling), n
                },
                nodeLength: nodeLength,
                isLeftEdgePoint: isLeftEdgePoint,
                isRightEdgePoint: isRightEdgePoint,
                isEdgePoint: isEdgePoint,
                isLeftEdgeOf: isLeftEdgeOf,
                isRightEdgeOf: isRightEdgeOf,
                isLeftEdgePointOf: function (e, t) {
                    return isLeftEdgePoint(e) && isLeftEdgeOf(e.node, t)
                },
                isRightEdgePointOf: function (e, t) {
                    return isRightEdgePoint(e) && isRightEdgeOf(e.node, t)
                },
                prevPoint: prevPoint,
                nextPoint: nextPoint,
                isSamePoint: isSamePoint,
                isVisiblePoint: function (e) {
                    if (isText(e.node) || !hasChildren(e.node) || isEmpty$1(e.node)) return !0;
                    var t = e.node.childNodes[e.offset - 1], n = e.node.childNodes[e.offset];
                    return !(t && !isVoid(t) || n && !isVoid(n))
                },
                prevPointUntil: function (e, t) {
                    for (; e;) {
                        if (t(e)) return e;
                        e = prevPoint(e)
                    }
                    return null
                },
                nextPointUntil: function (e, t) {
                    for (; e;) {
                        if (t(e)) return e;
                        e = nextPoint(e)
                    }
                    return null
                },
                isCharPoint: function (e) {
                    if (!isText(e.node)) return !1;
                    var t = e.node.nodeValue.charAt(e.offset - 1);
                    return t && " " !== t && t !== I
                },
                walkPoint: function (e, t, n, o) {
                    for (var i = e; i && (n(i), !isSamePoint(i, t));) {
                        var r = o && e.node !== i.node && t.node !== i.node;
                        i = nextPoint(i, r)
                    }
                },
                ancestor: ancestor,
                singleChildAncestor: function (e, t) {
                    for (e = e.parentNode; e && 1 === nodeLength(e);) {
                        if (t(e)) return e;
                        if (isEditable(e)) break;
                        e = e.parentNode
                    }
                    return null
                },
                listAncestor: listAncestor,
                lastAncestor: function (e, t) {
                    var n = listAncestor(e);
                    return k.last(n.filter(t))
                },
                listNext: listNext,
                listPrev: function (e, t) {
                    t = t || x.fail;
                    for (var n = []; e && !t(e);) n.push(e), e = e.previousSibling;
                    return n
                },
                listDescendant: function (o, i) {
                    var r = [];
                    return i = i || x.ok, function fnWalk(e) {
                        o !== e && i(e) && r.push(e);
                        for (var t = 0, n = e.childNodes.length; t < n; t++) fnWalk(e.childNodes[t])
                    }(o), r
                },
                commonAncestor: function (e, t) {
                    for (var n = listAncestor(e), o = t; o; o = o.parentNode) if (-1 < C.inArray(o, n)) return o;
                    return null
                },
                wrap: function (e, t) {
                    var n = e.parentNode, o = C("<" + t + ">")[0];
                    return n.insertBefore(o, e), o.appendChild(e), o
                },
                insertAfter: insertAfter,
                appendChildNodes: appendChildNodes,
                position: position,
                hasChildren: hasChildren,
                makeOffsetPath: function (e, t) {
                    return listAncestor(t, x.eq(e)).map(position).reverse()
                },
                fromOffsetPath: function (e, t) {
                    for (var n = e, o = 0, i = t.length; o < i; o++) n = n.childNodes.length <= t[o] ? n.childNodes[n.childNodes.length - 1] : n.childNodes[t[o]];
                    return n
                },
                splitTree: splitTree,
                splitPoint: function (e, t) {
                    var n, o, i = t ? isPara : isBodyContainer, r = listAncestor(e.node, i), a = k.last(r) || e.node;
                    o = i(a) ? (n = r[r.length - 2], a) : (n = a).parentNode;
                    var s = n && splitTree(n, e, {isSkipPaddingBlankHTML: t, isNotSplitEdgePoint: t});
                    return s || o !== e.node || (s = e.node.childNodes[e.offset]), {rightNode: s, container: o}
                },
                create: create,
                createText: function (e) {
                    return document.createTextNode(e)
                },
                remove: remove,
                removeWhile: function (e, t) {
                    for (; e && !isEditable(e) && t(e);) {
                        var n = e.parentNode;
                        remove(e), e = n
                    }
                },
                replace: function (e, t) {
                    if (e.nodeName.toUpperCase() === t.toUpperCase()) return e;
                    var n = create(t);
                    return e.style.cssText && (n.style.cssText = e.style.cssText), appendChildNodes(n, k.from(e.childNodes)), insertAfter(n, e), remove(e), n
                },
                html: function (e, t) {
                    var n = value(e);
                    if (t) {
                        var o = /<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g;
                        n = n.replace(o, function (e, t, n) {
                            n = n.toUpperCase();
                            var o = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(n) && !!t,
                                i = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(n);
                            return e + (o || i ? "\n" : "")
                        }), n = C.trim(n)
                    }
                    return n
                },
                value: value,
                posFromPlaceholder: function (e) {
                    var t = C(e), n = t.offset(), o = t.outerHeight(!0);
                    return {left: n.left, top: n.top + o}
                },
                attachEvents: function (t, n) {
                    Object.keys(n).forEach(function (e) {
                        t.on(e, n[e])
                    })
                },
                detachEvents: function (t, n) {
                    Object.keys(n).forEach(function (e) {
                        t.off(e, n[e])
                    })
                },
                isCustomStyleTag: function (e) {
                    return e && !isText(e) && k.contains(e.classList, "note-styletag")
                }
            };

            function textRangeToPoint(e, t) {
                var n, o, i = e.parentElement(), r = document.body.createTextRange(), a = k.from(i.childNodes);
                for (n = 0; n < a.length; n++) if (!j.isText(a[n])) {
                    if (r.moveToElementText(a[n]), 0 <= r.compareEndPoints("StartToStart", e)) break;
                    o = a[n]
                }
                if (0 !== n && j.isText(a[n - 1])) {
                    var s = document.body.createTextRange(), l = null;
                    s.moveToElementText(o || i), s.collapse(!o), l = o ? o.nextSibling : i.firstChild;
                    var c = e.duplicate();
                    c.setEndPoint("StartToStart", s);
                    for (var d = c.text.replace(/[\r\n]/g, "").length; d > l.nodeValue.length && l.nextSibling;) d -= l.nodeValue.length, l = l.nextSibling;
                    l.nodeValue, t && l.nextSibling && j.isText(l.nextSibling) && d === l.nodeValue.length && (d -= l.nodeValue.length, l = l.nextSibling), i = l, n = d
                }
                return {cont: i, offset: n}
            }

            function pointToTextRange(e) {
                var a = function (e, t) {
                    var n, o;
                    if (j.isText(e)) {
                        var i = j.listPrev(e, x.not(j.isText)), r = k.last(i).previousSibling;
                        n = r || e.parentNode, t += k.sum(k.tail(i), j.nodeLength), o = !r
                    } else {
                        if (n = e.childNodes[t] || e, j.isText(n)) return a(n, 0);
                        t = 0, o = !1
                    }
                    return {node: n, collapseToStart: o, offset: t}
                }, t = document.body.createTextRange(), n = a(e.node, e.offset);
                return t.moveToElementText(n.node), t.collapse(n.collapseToStart), t.moveStart("character", n.offset), t
            }

            var G = function () {
                function WrappedRange(e, t, n, o) {
                    this.sc = e, this.so = t, this.ec = n, this.eo = o, this.isOnEditable = this.makeIsOn(j.isEditable), this.isOnList = this.makeIsOn(j.isList), this.isOnAnchor = this.makeIsOn(j.isAnchor), this.isOnCell = this.makeIsOn(j.isCell), this.isOnData = this.makeIsOn(j.isData)
                }

                return WrappedRange.prototype.nativeRange = function () {
                    if (E.isW3CRangeSupport) {
                        var e = document.createRange();
                        return e.setStart(this.sc, this.so), e.setEnd(this.ec, this.eo), e
                    }
                    var t = pointToTextRange({node: this.sc, offset: this.so});
                    return t.setEndPoint("EndToEnd", pointToTextRange({node: this.ec, offset: this.eo})), t
                }, WrappedRange.prototype.getPoints = function () {
                    return {sc: this.sc, so: this.so, ec: this.ec, eo: this.eo}
                }, WrappedRange.prototype.getStartPoint = function () {
                    return {node: this.sc, offset: this.so}
                }, WrappedRange.prototype.getEndPoint = function () {
                    return {node: this.ec, offset: this.eo}
                }, WrappedRange.prototype.select = function () {
                    var e = this.nativeRange();
                    if (E.isW3CRangeSupport) {
                        var t = document.getSelection();
                        0 < t.rangeCount && t.removeAllRanges(), t.addRange(e)
                    } else e.select();
                    return this
                }, WrappedRange.prototype.scrollIntoView = function (e) {
                    var t = C(e).height();
                    return e.scrollTop + t < this.sc.offsetTop && (e.scrollTop += Math.abs(e.scrollTop + t - this.sc.offsetTop)), this
                }, WrappedRange.prototype.normalize = function () {
                    var e = function (e, t) {
                        if (j.isVisiblePoint(e) && !j.isEdgePoint(e) || j.isVisiblePoint(e) && j.isRightEdgePoint(e) && !t || j.isVisiblePoint(e) && j.isLeftEdgePoint(e) && t || j.isVisiblePoint(e) && j.isBlock(e.node) && j.isEmpty(e.node)) return e;
                        var n = j.ancestor(e.node, j.isBlock);
                        if ((j.isLeftEdgePointOf(e, n) || j.isVoid(j.prevPoint(e).node)) && !t || (j.isRightEdgePointOf(e, n) || j.isVoid(j.nextPoint(e).node)) && t) {
                            if (j.isVisiblePoint(e)) return e;
                            t = !t
                        }
                        var o = t ? j.nextPointUntil(j.nextPoint(e), j.isVisiblePoint) : j.prevPointUntil(j.prevPoint(e), j.isVisiblePoint);
                        return o || e
                    }, t = e(this.getEndPoint(), !1), n = this.isCollapsed() ? t : e(this.getStartPoint(), !0);
                    return new WrappedRange(n.node, n.offset, t.node, t.offset)
                }, WrappedRange.prototype.nodes = function (n, e) {
                    n = n || x.ok;
                    var o = e && e.includeAncestor, i = e && e.fullyContains, t = this.getStartPoint(),
                        r = this.getEndPoint(), a = [], s = [];
                    return j.walkPoint(t, r, function (e) {
                        var t;
                        j.isEditable(e.node) || (i ? (j.isLeftEdgePoint(e) && s.push(e.node), j.isRightEdgePoint(e) && k.contains(s, e.node) && (t = e.node)) : t = o ? j.ancestor(e.node, n) : e.node, t && n(t) && a.push(t))
                    }, !0), k.unique(a)
                }, WrappedRange.prototype.commonAncestor = function () {
                    return j.commonAncestor(this.sc, this.ec)
                }, WrappedRange.prototype.expand = function (e) {
                    var t = j.ancestor(this.sc, e), n = j.ancestor(this.ec, e);
                    if (!t && !n) return new WrappedRange(this.sc, this.so, this.ec, this.eo);
                    var o = this.getPoints();
                    return t && (o.sc = t, o.so = 0), n && (o.ec = n, o.eo = j.nodeLength(n)), new WrappedRange(o.sc, o.so, o.ec, o.eo)
                }, WrappedRange.prototype.collapse = function (e) {
                    return e ? new WrappedRange(this.sc, this.so, this.sc, this.so) : new WrappedRange(this.ec, this.eo, this.ec, this.eo)
                }, WrappedRange.prototype.splitText = function () {
                    var e = this.sc === this.ec, t = this.getPoints();
                    return j.isText(this.ec) && !j.isEdgePoint(this.getEndPoint()) && this.ec.splitText(this.eo), j.isText(this.sc) && !j.isEdgePoint(this.getStartPoint()) && (t.sc = this.sc.splitText(this.so), t.so = 0, e && (t.ec = t.sc, t.eo = this.eo - this.so)), new WrappedRange(t.sc, t.so, t.ec, t.eo)
                }, WrappedRange.prototype.deleteContents = function () {
                    if (this.isCollapsed()) return this;
                    var e = this.splitText(), t = e.nodes(null, {fullyContains: !0}),
                        o = j.prevPointUntil(e.getStartPoint(), function (e) {
                            return !k.contains(t, e.node)
                        }), i = [];
                    return C.each(t, function (e, t) {
                        var n = t.parentNode;
                        o.node !== n && 1 === j.nodeLength(n) && i.push(n), j.remove(t, !1)
                    }), C.each(i, function (e, t) {
                        j.remove(t, !1)
                    }), new WrappedRange(o.node, o.offset, o.node, o.offset).normalize()
                }, WrappedRange.prototype.makeIsOn = function (t) {
                    return function () {
                        var e = j.ancestor(this.sc, t);
                        return !!e && e === j.ancestor(this.ec, t)
                    }
                }, WrappedRange.prototype.isLeftEdgeOf = function (e) {
                    if (!j.isLeftEdgePoint(this.getStartPoint())) return !1;
                    var t = j.ancestor(this.sc, e);
                    return t && j.isLeftEdgeOf(this.sc, t)
                }, WrappedRange.prototype.isCollapsed = function () {
                    return this.sc === this.ec && this.so === this.eo
                }, WrappedRange.prototype.wrapBodyInlineWithPara = function () {
                    if (j.isBodyContainer(this.sc) && j.isEmpty(this.sc)) return this.sc.innerHTML = j.emptyPara, new WrappedRange(this.sc.firstChild, 0, this.sc.firstChild, 0);
                    var e, t = this.normalize();
                    if (j.isParaInline(this.sc) || j.isPara(this.sc)) return t;
                    if (j.isInline(t.sc)) {
                        var n = j.listAncestor(t.sc, x.not(j.isInline));
                        e = k.last(n), j.isInline(e) || (e = n[n.length - 2] || t.sc.childNodes[t.so])
                    } else e = t.sc.childNodes[0 < t.so ? t.so - 1 : 0];
                    var o = j.listPrev(e, j.isParaInline).reverse();
                    if ((o = o.concat(j.listNext(e.nextSibling, j.isParaInline))).length) {
                        var i = j.wrap(k.head(o), "p");
                        j.appendChildNodes(i, k.tail(o))
                    }
                    return this.normalize()
                }, WrappedRange.prototype.insertNode = function (e) {
                    var t = this.wrapBodyInlineWithPara().deleteContents(),
                        n = j.splitPoint(t.getStartPoint(), j.isInline(e));
                    return n.rightNode ? n.rightNode.parentNode.insertBefore(e, n.rightNode) : n.container.appendChild(e), e
                }, WrappedRange.prototype.pasteHTML = function (e) {
                    var t = C("<div></div>").html(e)[0], n = k.from(t.childNodes),
                        o = this.wrapBodyInlineWithPara().deleteContents();
                    return 0 < o.so && (n = n.reverse()), n = n.map(function (e) {
                        return o.insertNode(e)
                    }), 0 < o.so && (n = n.reverse()), n
                }, WrappedRange.prototype.toString = function () {
                    var e = this.nativeRange();
                    return E.isW3CRangeSupport ? e.toString() : e.text
                }, WrappedRange.prototype.getWordRange = function (e) {
                    var t = this.getEndPoint();
                    if (!j.isCharPoint(t)) return this;
                    var n = j.prevPointUntil(t, function (e) {
                        return !j.isCharPoint(e)
                    });
                    return e && (t = j.nextPointUntil(t, function (e) {
                        return !j.isCharPoint(e)
                    })), new WrappedRange(n.node, n.offset, t.node, t.offset)
                }, WrappedRange.prototype.bookmark = function (e) {
                    return {
                        s: {path: j.makeOffsetPath(e, this.sc), offset: this.so},
                        e: {path: j.makeOffsetPath(e, this.ec), offset: this.eo}
                    }
                }, WrappedRange.prototype.paraBookmark = function (e) {
                    return {
                        s: {path: k.tail(j.makeOffsetPath(k.head(e), this.sc)), offset: this.so},
                        e: {path: k.tail(j.makeOffsetPath(k.last(e), this.ec)), offset: this.eo}
                    }
                }, WrappedRange.prototype.getClientRects = function () {
                    var e = this.nativeRange();
                    return e.getClientRects()
                }, WrappedRange
            }(), _ = {
                create: function (e, t, n, o) {
                    if (4 === arguments.length) return new G(e, t, n, o);
                    if (2 === arguments.length) return new G(n = e, o = t, n, o);
                    var i = this.createFromSelection();
                    return i || 1 !== arguments.length ? i : (i = this.createFromNode(e)).collapse(j.emptyPara === e.innerHTML)
                }, createFromSelection: function () {
                    var e, t, n, o;
                    if (E.isW3CRangeSupport) {
                        var i = document.getSelection();
                        if (!i || 0 === i.rangeCount) return null;
                        if (j.isBody(i.anchorNode)) return null;
                        var r = i.getRangeAt(0);
                        e = r.startContainer, t = r.startOffset, n = r.endContainer, o = r.endOffset
                    } else {
                        var a = document.selection.createRange(), s = a.duplicate();
                        s.collapse(!1);
                        var l = a;
                        l.collapse(!0);
                        var c = textRangeToPoint(l, !0), d = textRangeToPoint(s, !1);
                        j.isText(c.node) && j.isLeftEdgePoint(c) && j.isTextNode(d.node) && j.isRightEdgePoint(d) && d.node.nextSibling === c.node && (c = d), e = c.cont, t = c.offset, n = d.cont, o = d.offset
                    }
                    return new G(e, t, n, o)
                }, createFromNode: function (e) {
                    var t = e, n = 0, o = e, i = j.nodeLength(o);
                    return j.isVoid(t) && (n = j.listPrev(t).length - 1, t = t.parentNode), j.isBR(o) ? (i = j.listPrev(o).length - 1, o = o.parentNode) : j.isVoid(o) && (i = j.listPrev(o).length, o = o.parentNode), this.create(t, n, o, i)
                }, createFromNodeBefore: function (e) {
                    return this.createFromNode(e).collapse(!0)
                }, createFromNodeAfter: function (e) {
                    return this.createFromNode(e).collapse()
                }, createFromBookmark: function (e, t) {
                    var n = j.fromOffsetPath(e, t.s.path), o = t.s.offset, i = j.fromOffsetPath(e, t.e.path),
                        r = t.e.offset;
                    return new G(n, o, i, r)
                }, createFromParaBookmark: function (e, t) {
                    var n = e.s.offset, o = e.e.offset, i = j.fromOffsetPath(k.head(t), e.s.path),
                        r = j.fromOffsetPath(k.last(t), e.e.path);
                    return new G(i, n, r, o)
                }
            };
            C.summernote = C.summernote || {lang: {}}, C.extend(C.summernote.lang, {
                "en-US": {
                    font: {
                        bold: "Bold",
                        italic: "Italic",
                        underline: "Underline",
                        clear: "Remove Font Style",
                        height: "Line Height",
                        name: "Font Family",
                        strikethrough: "Strikethrough",
                        subscript: "Subscript",
                        superscript: "Superscript",
                        size: "Font Size"
                    },
                    image: {
                        image: "Picture",
                        insert: "Insert Image",
                        resizeFull: "Resize Full",
                        resizeHalf: "Resize Half",
                        resizeQuarter: "Resize Quarter",
                        floatLeft: "Float Left",
                        floatRight: "Float Right",
                        floatNone: "Float None",
                        shapeRounded: "Shape: Rounded",
                        shapeCircle: "Shape: Circle",
                        shapeThumbnail: "Shape: Thumbnail",
                        shapeNone: "Shape: None",
                        dragImageHere: "Drag image or text here",
                        dropImage: "Drop image or Text",
                        selectFromFiles: "Select from files",
                        maximumFileSize: "Maximum file size",
                        maximumFileSizeError: "Maximum file size exceeded.",
                        url: "Image URL",
                        remove: "Remove Image",
                        original: "Original"
                    },
                    video: {
                        video: "Video",
                        videoLink: "Video Link",
                        insert: "Insert Video",
                        url: "Video URL",
                        providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)"
                    },
                    link: {
                        link: "Link",
                        insert: "Insert Link",
                        unlink: "Unlink",
                        edit: "Edit",
                        textToDisplay: "Text to display",
                        url: "To what URL should this link go?",
                        openInNewWindow: "Open in new window"
                    },
                    table: {
                        table: "Table",
                        addRowAbove: "Add row above",
                        addRowBelow: "Add row below",
                        addColLeft: "Add column left",
                        addColRight: "Add column right",
                        delRow: "Delete row",
                        delCol: "Delete column",
                        delTable: "Delete table"
                    },
                    hr: {insert: "Insert Horizontal Rule"},
                    style: {
                        style: "Style",
                        p: "Normal",
                        blockquote: "Quote",
                        pre: "Code",
                        h1: "Header 1",
                        h2: "Header 2",
                        h3: "Header 3",
                        h4: "Header 4",
                        h5: "Header 5",
                        h6: "Header 6"
                    },
                    lists: {unordered: "Unordered list", ordered: "Ordered list"},
                    options: {help: "Help", fullscreen: "Full Screen", codeview: "Code View"},
                    paragraph: {
                        paragraph: "Paragraph",
                        outdent: "Outdent",
                        indent: "Indent",
                        left: "Align left",
                        center: "Align center",
                        right: "Align right",
                        justify: "Justify full"
                    },
                    color: {
                        recent: "Recent Color",
                        more: "More Color",
                        background: "Background Color",
                        foreground: "Foreground Color",
                        transparent: "Transparent",
                        setTransparent: "Set transparent",
                        reset: "Reset",
                        resetToDefault: "Reset to default",
                        cpSelect: "Select"
                    },
                    shortcut: {
                        shortcuts: "Keyboard shortcuts",
                        close: "Close",
                        textFormatting: "Text formatting",
                        action: "Action",
                        paragraphFormatting: "Paragraph formatting",
                        documentStyle: "Document Style",
                        extraKeys: "Extra keys"
                    },
                    help: {
                        insertParagraph: "Insert Paragraph",
                        undo: "Undoes the last command",
                        redo: "Redoes the last command",
                        tab: "Tab",
                        untab: "Untab",
                        bold: "Set a bold style",
                        italic: "Set a italic style",
                        underline: "Set a underline style",
                        strikethrough: "Set a strikethrough style",
                        removeFormat: "Clean a style",
                        justifyLeft: "Set left align",
                        justifyCenter: "Set center align",
                        justifyRight: "Set right align",
                        justifyFull: "Set full align",
                        insertUnorderedList: "Toggle unordered list",
                        insertOrderedList: "Toggle ordered list",
                        outdent: "Outdent on current paragraph",
                        indent: "Indent on current paragraph",
                        formatPara: "Change current block's format as a paragraph(P tag)",
                        formatH1: "Change current block's format as H1",
                        formatH2: "Change current block's format as H2",
                        formatH3: "Change current block's format as H3",
                        formatH4: "Change current block's format as H4",
                        formatH5: "Change current block's format as H5",
                        formatH6: "Change current block's format as H6",
                        insertHorizontalRule: "Insert horizontal rule",
                        "linkDialog.show": "Show Link Dialog"
                    },
                    history: {undo: "Undo", redo: "Redo"},
                    specialChar: {specialChar: "SPECIAL CHARACTERS", select: "Select Special characters"}
                }
            });
            var q = {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                SPACE: 32,
                DELETE: 46,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                NUM0: 48,
                NUM1: 49,
                NUM2: 50,
                NUM3: 51,
                NUM4: 52,
                NUM5: 53,
                NUM6: 54,
                NUM7: 55,
                NUM8: 56,
                B: 66,
                E: 69,
                I: 73,
                J: 74,
                K: 75,
                L: 76,
                R: 82,
                S: 83,
                U: 85,
                V: 86,
                Y: 89,
                Z: 90,
                SLASH: 191,
                LEFTBRACKET: 219,
                BACKSLASH: 220,
                RIGHTBRACKET: 221
            }, X = {
                isEdit: function (e) {
                    return k.contains([q.BACKSPACE, q.TAB, q.ENTER, q.SPACE, q.DELETE], e)
                }, isMove: function (e) {
                    return k.contains([q.LEFT, q.UP, q.RIGHT, q.DOWN], e)
                }, nameFromCode: x.invertObject(q), code: q
            }, Y = function () {
                function History(e) {
                    this.stack = [], this.stackOffset = -1, this.$editable = e, this.editable = e[0]
                }

                return History.prototype.makeSnapshot = function () {
                    var e = _.create(this.editable);
                    return {
                        contents: this.$editable.html(),
                        bookmark: e ? e.bookmark(this.editable) : {s: {path: [], offset: 0}, e: {path: [], offset: 0}}
                    }
                }, History.prototype.applySnapshot = function (e) {
                    null !== e.contents && this.$editable.html(e.contents), null !== e.bookmark && _.createFromBookmark(this.editable, e.bookmark).select()
                }, History.prototype.rewind = function () {
                    this.$editable.html() !== this.stack[this.stackOffset].contents && this.recordUndo(), this.stackOffset = 0, this.applySnapshot(this.stack[this.stackOffset])
                }, History.prototype.commit = function () {
                    this.stack = [], this.stackOffset = -1, this.recordUndo()
                }, History.prototype.reset = function () {
                    this.stack = [], this.stackOffset = -1, this.$editable.html(""), this.recordUndo()
                }, History.prototype.undo = function () {
                    this.$editable.html() !== this.stack[this.stackOffset].contents && this.recordUndo(), 0 < this.stackOffset && (this.stackOffset--, this.applySnapshot(this.stack[this.stackOffset]))
                }, History.prototype.redo = function () {
                    this.stack.length - 1 > this.stackOffset && (this.stackOffset++, this.applySnapshot(this.stack[this.stackOffset]))
                }, History.prototype.recordUndo = function () {
                    this.stackOffset++, this.stack.length > this.stackOffset && (this.stack = this.stack.slice(0, this.stackOffset)), this.stack.push(this.makeSnapshot())
                }, History
            }(), Z = function () {
                function Style() {
                }

                return Style.prototype.jQueryCSS = function (n, e) {
                    if (E.jqueryVersion < 1.9) {
                        var o = {};
                        return C.each(e, function (e, t) {
                            o[t] = n.css(t)
                        }), o
                    }
                    return n.css(e)
                }, Style.prototype.fromNode = function (e) {
                    var t = this.jQueryCSS(e, ["font-family", "font-size", "text-align", "list-style-type", "line-height"]) || {};
                    return t["font-size"] = parseInt(t["font-size"], 10), t
                }, Style.prototype.stylePara = function (e, n) {
                    C.each(e.nodes(j.isPara, {includeAncestor: !0}), function (e, t) {
                        C(t).css(n)
                    })
                }, Style.prototype.styleNodes = function (e, t) {
                    e = e.splitText();
                    var n = t && t.nodeName || "SPAN", o = !(!t || !t.expandClosestSibling),
                        i = !(!t || !t.onlyPartialContains);
                    if (e.isCollapsed()) return [e.insertNode(j.create(n))];
                    var r = j.makePredByNodeName(n), a = e.nodes(j.isText, {fullyContains: !0}).map(function (e) {
                        return j.singleChildAncestor(e, r) || j.wrap(e, n)
                    });
                    if (o) {
                        if (i) {
                            var s = e.nodes();
                            r = x.and(r, function (e) {
                                return k.contains(s, e)
                            })
                        }
                        return a.map(function (e) {
                            var t = j.withClosestSiblings(e, r), n = k.head(t), o = k.tail(t);
                            return C.each(o, function (e, t) {
                                j.appendChildNodes(n, t.childNodes), j.remove(t)
                            }), k.head(t)
                        })
                    }
                    return a
                }, Style.prototype.current = function (e) {
                    var t = C(j.isElement(e.sc) ? e.sc : e.sc.parentNode), n = this.fromNode(t);
                    try {
                        n = C.extend(n, {
                            "font-bold": document.queryCommandState("bold") ? "bold" : "normal",
                            "font-italic": document.queryCommandState("italic") ? "italic" : "normal",
                            "font-underline": document.queryCommandState("underline") ? "underline" : "normal",
                            "font-subscript": document.queryCommandState("subscript") ? "subscript" : "normal",
                            "font-superscript": document.queryCommandState("superscript") ? "superscript" : "normal",
                            "font-strikethrough": document.queryCommandState("strikethrough") ? "strikethrough" : "normal",
                            "font-family": document.queryCommandValue("fontname") || n["font-family"]
                        })
                    } catch (e) {
                    }
                    if (e.isOnList()) {
                        var o = -1 < C.inArray(n["list-style-type"], ["circle", "disc", "disc-leading-zero", "square"]);
                        n["list-style"] = o ? "unordered" : "ordered"
                    } else n["list-style"] = "none";
                    var i = j.ancestor(e.sc, j.isPara);
                    if (i && i.style["line-height"]) n["line-height"] = i.style.lineHeight; else {
                        var r = parseInt(n["line-height"], 10) / parseInt(n["font-size"], 10);
                        n["line-height"] = r.toFixed(1)
                    }
                    return n.anchor = e.isOnAnchor() && j.ancestor(e.sc, j.isAnchor), n.ancestors = j.listAncestor(e.sc, j.isEditable), n.range = e, n
                }, Style
            }(), J = function () {
                function Bullet() {
                }

                return Bullet.prototype.insertOrderedList = function (e) {
                    this.toggleList("OL", e)
                }, Bullet.prototype.insertUnorderedList = function (e) {
                    this.toggleList("UL", e)
                }, Bullet.prototype.indent = function (e) {
                    var i = this, t = _.create(e).wrapBodyInlineWithPara(),
                        n = t.nodes(j.isPara, {includeAncestor: !0}), o = k.clusterBy(n, x.peq2("parentNode"));
                    C.each(o, function (e, t) {
                        var n = k.head(t);
                        if (j.isLi(n)) {
                            var o = i.findList(n.previousSibling);
                            o ? t.map(function (e) {
                                return o.appendChild(e)
                            }) : (i.wrapList(t, n.parentNode.nodeName), t.map(function (e) {
                                return e.parentNode
                            }).map(function (e) {
                                return i.appendToPrevious(e)
                            }))
                        } else C.each(t, function (e, t) {
                            C(t).css("marginLeft", function (e, t) {
                                return (parseInt(t, 10) || 0) + 25
                            })
                        })
                    }), t.select()
                }, Bullet.prototype.outdent = function (e) {
                    var o = this, t = _.create(e).wrapBodyInlineWithPara(),
                        n = t.nodes(j.isPara, {includeAncestor: !0}), i = k.clusterBy(n, x.peq2("parentNode"));
                    C.each(i, function (e, t) {
                        var n = k.head(t);
                        j.isLi(n) ? o.releaseList([t]) : C.each(t, function (e, t) {
                            C(t).css("marginLeft", function (e, t) {
                                return 25 < (t = parseInt(t, 10) || 0) ? t - 25 : ""
                            })
                        })
                    }), t.select()
                }, Bullet.prototype.toggleList = function (n, e) {
                    var o = this, t = _.create(e).wrapBodyInlineWithPara(),
                        i = t.nodes(j.isPara, {includeAncestor: !0}), r = t.paraBookmark(i),
                        a = k.clusterBy(i, x.peq2("parentNode"));
                    if (k.find(i, j.isPurePara)) {
                        var s = [];
                        C.each(a, function (e, t) {
                            s = s.concat(o.wrapList(t, n))
                        }), i = s
                    } else {
                        var l = t.nodes(j.isList, {includeAncestor: !0}).filter(function (e) {
                            return !C.nodeName(e, n)
                        });
                        l.length ? C.each(l, function (e, t) {
                            j.replace(t, n)
                        }) : i = this.releaseList(a, !0)
                    }
                    _.createFromParaBookmark(r, i).select()
                }, Bullet.prototype.wrapList = function (e, t) {
                    var n = k.head(e), o = k.last(e), i = j.isList(n.previousSibling) && n.previousSibling,
                        r = j.isList(o.nextSibling) && o.nextSibling, a = i || j.insertAfter(j.create(t || "UL"), o);
                    return e = e.map(function (e) {
                        return j.isPurePara(e) ? j.replace(e, "LI") : e
                    }), j.appendChildNodes(a, e), r && (j.appendChildNodes(a, k.from(r.childNodes)), j.remove(r)), e
                }, Bullet.prototype.releaseList = function (e, c) {
                    var d = this, u = [];
                    return C.each(e, function (e, t) {
                        var n = k.head(t), o = k.last(t), i = c ? j.lastAncestor(n, j.isList) : n.parentNode,
                            r = i.parentNode;
                        if ("LI" === i.parentNode.nodeName) t.map(function (e) {
                            var t = d.findNextSiblings(e);
                            r.nextSibling ? r.parentNode.insertBefore(e, r.nextSibling) : r.parentNode.appendChild(e), t.length && (d.wrapList(t, i.nodeName), e.appendChild(t[0].parentNode))
                        }), 0 === i.children.length && r.removeChild(i), 0 === r.childNodes.length && r.parentNode.removeChild(r); else {
                            var a = 1 < i.childNodes.length ? j.splitTree(i, {
                                node: o.parentNode,
                                offset: j.position(o) + 1
                            }, {isSkipPaddingBlankHTML: !0}) : null, s = j.splitTree(i, {
                                node: n.parentNode,
                                offset: j.position(n)
                            }, {isSkipPaddingBlankHTML: !0});
                            t = c ? j.listDescendant(s, j.isLi) : k.from(s.childNodes).filter(j.isLi), !c && j.isList(i.parentNode) || (t = t.map(function (e) {
                                return j.replace(e, "P")
                            })), C.each(k.from(t).reverse(), function (e, t) {
                                j.insertAfter(t, i)
                            });
                            var l = k.compact([i, s, a]);
                            C.each(l, function (e, t) {
                                var n = [t].concat(j.listDescendant(t, j.isList));
                                C.each(n.reverse(), function (e, t) {
                                    j.nodeLength(t) || j.remove(t, !0)
                                })
                            })
                        }
                        u = u.concat(t)
                    }), u
                }, Bullet.prototype.appendToPrevious = function (e) {
                    return e.previousSibling ? j.appendChildNodes(e.previousSibling, [e]) : this.wrapList([e], "LI")
                }, Bullet.prototype.findList = function (e) {
                    return e ? k.find(e.children, function (e) {
                        return -1 < ["OL", "UL"].indexOf(e.nodeName)
                    }) : null
                }, Bullet.prototype.findNextSiblings = function (e) {
                    for (var t = []; e.nextSibling;) t.push(e.nextSibling), e = e.nextSibling;
                    return t
                }, Bullet
            }(), Q = function () {
                function Typing(e) {
                    this.bullet = new J, this.options = e.options
                }

                return Typing.prototype.insertTab = function (e, t) {
                    var n = j.createText(new Array(t + 1).join(j.NBSP_CHAR));
                    (e = e.deleteContents()).insertNode(n, !0), (e = _.create(n, t)).select()
                }, Typing.prototype.insertParagraph = function (e, t) {
                    t = (t = (t = t || _.create(e)).deleteContents()).wrapBodyInlineWithPara();
                    var n, o = j.ancestor(t.sc, j.isPara);
                    if (o) {
                        if (j.isEmpty(o) && j.isLi(o)) return void this.bullet.toggleList(o.parentNode.nodeName);
                        var i = null;
                        if (1 === this.options.blockquoteBreakingLevel ? i = j.ancestor(o, j.isBlockquote) : 2 === this.options.blockquoteBreakingLevel && (i = j.lastAncestor(o, j.isBlockquote)), i) {
                            n = C(j.emptyPara)[0], j.isRightEdgePoint(t.getStartPoint()) && j.isBR(t.sc.nextSibling) && C(t.sc.nextSibling).remove();
                            var r = j.splitTree(i, t.getStartPoint(), {isDiscardEmptySplits: !0});
                            r ? r.parentNode.insertBefore(n, r) : j.insertAfter(n, i)
                        } else {
                            n = j.splitTree(o, t.getStartPoint());
                            var a = j.listDescendant(o, j.isEmptyAnchor);
                            a = a.concat(j.listDescendant(n, j.isEmptyAnchor)), C.each(a, function (e, t) {
                                j.remove(t)
                            }), (j.isHeading(n) || j.isPre(n) || j.isCustomStyleTag(n)) && j.isEmpty(n) && (n = j.replace(n, "p"))
                        }
                    } else {
                        var s = t.sc.childNodes[t.so];
                        n = C(j.emptyPara)[0], s ? t.sc.insertBefore(n, s) : t.sc.appendChild(n)
                    }
                    _.create(n, 0).normalize().select().scrollIntoView(e)
                }, Typing
            }(), ee = function (e, h, p, i) {
                var f = {colPos: 0, rowPos: 0}, g = [], m = [];

                function setStartPoint() {
                    e && e.tagName && ("td" === e.tagName.toLowerCase() || "th" === e.tagName.toLowerCase()) ? (f.colPos = e.cellIndex, e.parentElement && e.parentElement.tagName && "tr" === e.parentElement.tagName.toLowerCase() ? f.rowPos = e.parentElement.rowIndex : console.error("Impossible to identify start Row point.", e)) : console.error("Impossible to identify start Cell point.", e)
                }

                function setVirtualTablePosition(e, t, n, o, i, r, a) {
                    var s = {baseRow: n, baseCell: o, isRowSpan: i, isColSpan: r, isVirtual: a};
                    g[e] || (g[e] = []), g[e][t] = s
                }

                function recoverCellIndex(e, t) {
                    if (!g[e]) return t;
                    if (!g[e][t]) return t;
                    for (var n = t; g[e][n];) if (n++, !g[e][n]) return n
                }

                function addCellInfoToVirtual(e, t) {
                    var n = recoverCellIndex(e.rowIndex, t.cellIndex), o = 1 < t.colSpan, i = 1 < t.rowSpan,
                        r = e.rowIndex === f.rowPos && t.cellIndex === f.colPos;
                    setVirtualTablePosition(e.rowIndex, n, e, t, i, o, !1);
                    var a = t.attributes.rowSpan ? parseInt(t.attributes.rowSpan.value, 10) : 0;
                    if (1 < a) for (var s = 1; s < a; s++) {
                        var l = e.rowIndex + s;
                        adjustStartPoint(l, n, t, r), setVirtualTablePosition(l, n, e, t, !0, o, !0)
                    }
                    var c = t.attributes.colSpan ? parseInt(t.attributes.colSpan.value, 10) : 0;
                    if (1 < c) for (var d = 1; d < c; d++) {
                        var u = recoverCellIndex(e.rowIndex, n + d);
                        adjustStartPoint(e.rowIndex, u, t, r), setVirtualTablePosition(e.rowIndex, u, e, t, i, !0, !0)
                    }
                }

                function adjustStartPoint(e, t, n, o) {
                    e === f.rowPos && f.colPos >= n.cellIndex && n.cellIndex <= t && !o && f.colPos++
                }

                function createVirtualTable() {
                    for (var e = i.rows, t = 0; t < e.length; t++) for (var n = e[t].cells, o = 0; o < n.length; o++) addCellInfoToVirtual(e[t], n[o])
                }

                function getDeleteResultActionToCell(e) {
                    switch (h) {
                        case ee.where.Column:
                            if (e.isColSpan) return ee.resultAction.SubtractSpanCount;
                            break;
                        case ee.where.Row:
                            if (!e.isVirtual && e.isRowSpan) return ee.resultAction.AddCell;
                            if (e.isRowSpan) return ee.resultAction.SubtractSpanCount
                    }
                    return ee.resultAction.RemoveCell
                }

                function getAddResultActionToCell(e) {
                    switch (h) {
                        case ee.where.Column:
                            if (e.isColSpan) return ee.resultAction.SumSpanCount;
                            if (e.isRowSpan && e.isVirtual) return ee.resultAction.Ignore;
                            break;
                        case ee.where.Row:
                            if (e.isRowSpan) return ee.resultAction.SumSpanCount;
                            if (e.isColSpan && e.isVirtual) return ee.resultAction.Ignore
                    }
                    return ee.resultAction.AddCell
                }

                this.getActionList = function () {
                    for (var e, t, n, o = h === ee.where.Row ? f.rowPos : -1, i = h === ee.where.Column ? f.colPos : -1, r = 0, a = !0; a;) {
                        var s = 0 <= o ? o : r, l = 0 <= i ? i : r, c = g[s];
                        if (!c) return a = !1, m;
                        var d = c[l];
                        if (!d) return a = !1, m;
                        var u = ee.resultAction.Ignore;
                        switch (p) {
                            case ee.requestAction.Add:
                                u = getAddResultActionToCell(d);
                                break;
                            case ee.requestAction.Delete:
                                u = getDeleteResultActionToCell(d)
                        }
                        m.push((e = u, t = s, n = l, {
                            baseCell: d.baseCell,
                            action: e,
                            virtualTable: {rowIndex: t, cellIndex: n}
                        })), r++
                    }
                    return m
                }, setStartPoint(), createVirtualTable()
            };
            ee.where = {Row: 0, Column: 1}, ee.requestAction = {Add: 0, Delete: 1}, ee.resultAction = {
                Ignore: 0,
                SubtractSpanCount: 1,
                RemoveCell: 2,
                AddCell: 3,
                SumSpanCount: 4
            };
            var te, ne = function () {
                function Table() {
                }

                return Table.prototype.tab = function (e, t) {
                    var n = j.ancestor(e.commonAncestor(), j.isCell), o = j.ancestor(n, j.isTable),
                        i = j.listDescendant(o, j.isCell), r = k[t ? "prev" : "next"](i, n);
                    r && _.create(r, 0).select()
                }, Table.prototype.addRow = function (e, t) {
                    for (var n = j.ancestor(e.commonAncestor(), j.isCell), o = C(n).closest("tr"), i = this.recoverAttributes(o), r = C("<tr" + i + "></tr>"), a = new ee(n, ee.where.Row, ee.requestAction.Add, C(o).closest("table")[0]), s = a.getActionList(), l = 0; l < s.length; l++) {
                        var c = s[l], d = this.recoverAttributes(c.baseCell);
                        switch (c.action) {
                            case ee.resultAction.AddCell:
                                r.append("<td" + d + ">" + j.blank + "</td>");
                                break;
                            case ee.resultAction.SumSpanCount:
                                if ("top" === t) {
                                    var u = c.baseCell.parent,
                                        h = (u ? c.baseCell.closest("tr").rowIndex : 0) <= o[0].rowIndex;
                                    if (h) {
                                        var p = C("<div></div>").append(C("<td" + d + ">" + j.blank + "</td>").removeAttr("rowspan")).html();
                                        r.append(p);
                                        break
                                    }
                                }
                                var f = parseInt(c.baseCell.rowSpan, 10);
                                f++, c.baseCell.setAttribute("rowSpan", f)
                        }
                    }
                    if ("top" === t) o.before(r); else {
                        var g = 1 < n.rowSpan;
                        if (g) {
                            var m = o[0].rowIndex + (n.rowSpan - 2);
                            return void C(C(o).parent().find("tr")[m]).after(C(r))
                        }
                        o.after(r)
                    }
                }, Table.prototype.addCol = function (e, t) {
                    var n = j.ancestor(e.commonAncestor(), j.isCell), o = C(n).closest("tr"), i = C(o).siblings();
                    i.push(o);
                    for (var r = new ee(n, ee.where.Column, ee.requestAction.Add, C(o).closest("table")[0]), a = r.getActionList(), s = 0; s < a.length; s++) {
                        var l = a[s], c = this.recoverAttributes(l.baseCell);
                        switch (l.action) {
                            case ee.resultAction.AddCell:
                                "right" === t ? C(l.baseCell).after("<td" + c + ">" + j.blank + "</td>") : C(l.baseCell).before("<td" + c + ">" + j.blank + "</td>");
                                break;
                            case ee.resultAction.SumSpanCount:
                                if ("right" === t) {
                                    var d = parseInt(l.baseCell.colSpan, 10);
                                    d++, l.baseCell.setAttribute("colSpan", d)
                                } else C(l.baseCell).before("<td" + c + ">" + j.blank + "</td>")
                        }
                    }
                }, Table.prototype.recoverAttributes = function (e) {
                    var t = "";
                    if (!e) return t;
                    for (var n = e.attributes || [], o = 0; o < n.length; o++) "id" !== n[o].name.toLowerCase() && n[o].specified && (t += " " + n[o].name + "='" + n[o].value + "'");
                    return t
                }, Table.prototype.deleteRow = function (e) {
                    for (var t = j.ancestor(e.commonAncestor(), j.isCell), n = C(t).closest("tr"), o = n.children("td, th").index(C(t)), i = n[0].rowIndex, r = new ee(t, ee.where.Row, ee.requestAction.Delete, C(n).closest("table")[0]), a = r.getActionList(), s = 0; s < a.length; s++) if (a[s]) {
                        var l = a[s].baseCell, c = a[s].virtualTable, d = l.rowSpan && 1 < l.rowSpan,
                            u = d ? parseInt(l.rowSpan, 10) : 0;
                        switch (a[s].action) {
                            case ee.resultAction.Ignore:
                                continue;
                            case ee.resultAction.AddCell:
                                var h = n.next("tr")[0];
                                if (!h) continue;
                                var p = n[0].cells[o];
                                d && (2 < u ? (u--, h.insertBefore(p, h.cells[o]), h.cells[o].setAttribute("rowSpan", u), h.cells[o].innerHTML = "") : 2 === u && (h.insertBefore(p, h.cells[o]), h.cells[o].removeAttribute("rowSpan"), h.cells[o].innerHTML = ""));
                                continue;
                            case ee.resultAction.SubtractSpanCount:
                                d && (2 < u ? (u--, l.setAttribute("rowSpan", u), c.rowIndex !== i && l.cellIndex === o && (l.innerHTML = "")) : 2 === u && (l.removeAttribute("rowSpan"), c.rowIndex !== i && l.cellIndex === o && (l.innerHTML = "")));
                                continue;
                            case ee.resultAction.RemoveCell:
                                continue
                        }
                    }
                    n.remove()
                }, Table.prototype.deleteCol = function (e) {
                    for (var t = j.ancestor(e.commonAncestor(), j.isCell), n = C(t).closest("tr"), o = n.children("td, th").index(C(t)), i = new ee(t, ee.where.Column, ee.requestAction.Delete, C(n).closest("table")[0]), r = i.getActionList(), a = 0; a < r.length; a++) if (r[a]) switch (r[a].action) {
                        case ee.resultAction.Ignore:
                            continue;
                        case ee.resultAction.SubtractSpanCount:
                            var s = r[a].baseCell, l = s.colSpan && 1 < s.colSpan;
                            if (l) {
                                var c = s.colSpan ? parseInt(s.colSpan, 10) : 0;
                                2 < c ? (c--, s.setAttribute("colSpan", c), s.cellIndex === o && (s.innerHTML = "")) : 2 === c && (s.removeAttribute("colSpan"), s.cellIndex === o && (s.innerHTML = ""))
                            }
                            continue;
                        case ee.resultAction.RemoveCell:
                            j.remove(r[a].baseCell, !0);
                            continue
                    }
                }, Table.prototype.createTable = function (e, t, n) {
                    for (var o, i = [], r = 0; r < e; r++) i.push("<td>" + j.blank + "</td>");
                    o = i.join("");
                    for (var a, s = [], l = 0; l < t; l++) s.push("<tr>" + o + "</tr>");
                    a = s.join("");
                    var c = C("<table>" + a + "</table>");
                    return n && n.tableClassName && c.addClass(n.tableClassName), c[0]
                }, Table.prototype.deleteTable = function (e) {
                    var t = j.ancestor(e.commonAncestor(), j.isCell);
                    C(t).closest("table").remove()
                }, Table
            }(), oe = function () {
                function Editor(e) {
                    var p = this;
                    this.context = e, this.$note = e.layoutInfo.note, this.$editor = e.layoutInfo.editor, this.$editable = e.layoutInfo.editable, this.options = e.options, this.lang = this.options.langInfo, this.editable = this.$editable[0], this.lastRange = null, this.style = new Z, this.table = new ne, this.typing = new Q(e), this.bullet = new J, this.history = new Y(this.$editable), this.context.memo("help.undo", this.lang.help.undo), this.context.memo("help.redo", this.lang.help.redo), this.context.memo("help.tab", this.lang.help.tab), this.context.memo("help.untab", this.lang.help.untab), this.context.memo("help.insertParagraph", this.lang.help.insertParagraph), this.context.memo("help.insertOrderedList", this.lang.help.insertOrderedList), this.context.memo("help.insertUnorderedList", this.lang.help.insertUnorderedList), this.context.memo("help.indent", this.lang.help.indent), this.context.memo("help.outdent", this.lang.help.outdent), this.context.memo("help.formatPara", this.lang.help.formatPara), this.context.memo("help.insertHorizontalRule", this.lang.help.insertHorizontalRule), this.context.memo("help.fontName", this.lang.help.fontName);
                    for (var t = ["bold", "italic", "underline", "strikethrough", "superscript", "subscript", "justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "formatBlock", "removeFormat", "backColor"], n = 0, o = t.length; n < o; n++) this[t[n]] = function (t) {
                        return function (e) {
                            p.beforeCommand(), document.execCommand(t, !1, e), p.afterCommand(!0)
                        }
                    }(t[n]), this.context.memo("help." + t[n], this.lang.help[t[n]]);
                    this.fontName = this.wrapCommand(function (e) {
                        return p.fontStyling("font-family", "'" + e + "'")
                    }), this.fontSize = this.wrapCommand(function (e) {
                        return p.fontStyling("font-size", e + "px")
                    });
                    for (var n = 1; n <= 6; n++) this["formatH" + n] = function (e) {
                        return function () {
                            p.formatBlock("H" + e)
                        }
                    }(n), this.context.memo("help.formatH" + n, this.lang.help["formatH" + n]);
                    this.insertParagraph = this.wrapCommand(function () {
                        p.typing.insertParagraph(p.editable)
                    }), this.insertOrderedList = this.wrapCommand(function () {
                        p.bullet.insertOrderedList(p.editable)
                    }), this.insertUnorderedList = this.wrapCommand(function () {
                        p.bullet.insertUnorderedList(p.editable)
                    }), this.indent = this.wrapCommand(function () {
                        p.bullet.indent(p.editable)
                    }), this.outdent = this.wrapCommand(function () {
                        p.bullet.outdent(p.editable)
                    }), this.insertNode = this.wrapCommand(function (e) {
                        if (!p.isLimited(C(e).text().length)) {
                            var t = p.createRange();
                            t.insertNode(e), _.createFromNodeAfter(e).select()
                        }
                    }), this.insertText = this.wrapCommand(function (e) {
                        if (!p.isLimited(e.length)) {
                            var t = p.createRange(), n = t.insertNode(j.createText(e));
                            _.create(n, j.nodeLength(n)).select()
                        }
                    }), this.pasteHTML = this.wrapCommand(function (e) {
                        if (!p.isLimited(e.length)) {
                            var t = p.createRange().pasteHTML(e);
                            _.createFromNodeAfter(k.last(t)).select()
                        }
                    }), this.formatBlock = this.wrapCommand(function (e, t) {
                        var n = p.options.callbacks.onApplyCustomStyle;
                        n ? n.call(p, t, p.context, p.onFormatBlock) : p.onFormatBlock(e, t)
                    }), this.insertHorizontalRule = this.wrapCommand(function () {
                        var e = p.createRange().insertNode(j.create("HR"));
                        e.nextSibling && _.create(e.nextSibling, 0).normalize().select()
                    }), this.lineHeight = this.wrapCommand(function (e) {
                        p.style.stylePara(p.createRange(), {lineHeight: e})
                    }), this.createLink = this.wrapCommand(function (e) {
                        var n = e.url, t = e.text, o = e.isNewWindow, i = e.range || p.createRange(),
                            r = t.length - i.toString().length;
                        if (!(0 < r && p.isLimited(r))) {
                            var a = i.toString() !== t;
                            "string" == typeof n && (n = n.trim()), p.options.onCreateLink ? n = p.options.onCreateLink(n) : /^\.?\/(.*)/.test(n) || (n = /^[A-Za-z][A-Za-z0-9+-.]*\:[\/\/]?/.test(n) ? n : "http://" + n);
                            var s = [];
                            if (a) {
                                var l = (i = i.deleteContents()).insertNode(C("<A>" + t + "</A>")[0]);
                                s.push(l)
                            } else s = p.style.styleNodes(i, {
                                nodeName: "A",
                                expandClosestSibling: !0,
                                onlyPartialContains: !0
                            });
                            C.each(s, function (e, t) {
                                C(t).attr("href", n), o ? C(t).attr("target", "_blank") : C(t).removeAttr("target")
                            });
                            var c = _.createFromNodeBefore(k.head(s)), d = c.getStartPoint(),
                                u = _.createFromNodeAfter(k.last(s)), h = u.getEndPoint();
                            _.create(d.node, d.offset, h.node, h.offset).select()
                        }
                    }), this.color = this.wrapCommand(function (e) {
                        var t = e.foreColor, n = e.backColor;
                        t && document.execCommand("foreColor", !1, t), n && document.execCommand("backColor", !1, n)
                    }), this.foreColor = this.wrapCommand(function (e) {
                        document.execCommand("styleWithCSS", !1, !0), document.execCommand("foreColor", !1, e)
                    }), this.insertTable = this.wrapCommand(function (e) {
                        var t = e.split("x"), n = p.createRange().deleteContents();
                        n.insertNode(p.table.createTable(t[0], t[1], p.options))
                    }), this.removeMedia = this.wrapCommand(function () {
                        var e = C(p.restoreTarget()).parent();
                        e.parent("figure").length ? e.parent("figure").remove() : e = C(p.restoreTarget()).detach(), p.context.triggerEvent("media.delete", e, p.$editable)
                    }), this.floatMe = this.wrapCommand(function (e) {
                        var t = C(p.restoreTarget());
                        t.toggleClass("note-float-left", "left" === e), t.toggleClass("note-float-right", "right" === e), t.css("float", e)
                    }), this.resize = this.wrapCommand(function (e) {
                        var t = C(p.restoreTarget());
                        t.css({width: 100 * e + "%", height: ""})
                    })
                }

                return Editor.prototype.initialize = function () {
                    var t = this;
                    this.$editable.on("keydown", function (e) {
                        if (e.keyCode === X.code.ENTER && t.context.triggerEvent("enter", e), t.context.triggerEvent("keydown", e), e.isDefaultPrevented() || (t.options.shortcuts ? t.handleKeyMap(e) : t.preventDefaultEditableShortCuts(e)), t.isLimited(1, e)) return !1
                    }).on("keyup", function (e) {
                        t.context.triggerEvent("keyup", e)
                    }).on("focus", function (e) {
                        t.context.triggerEvent("focus", e)
                    }).on("blur", function (e) {
                        t.context.triggerEvent("blur", e)
                    }).on("mousedown", function (e) {
                        t.context.triggerEvent("mousedown", e)
                    }).on("mouseup", function (e) {
                        t.context.triggerEvent("mouseup", e)
                    }).on("scroll", function (e) {
                        t.context.triggerEvent("scroll", e)
                    }).on("paste", function (e) {
                        t.context.triggerEvent("paste", e)
                    }), this.$editable.html(j.html(this.$note) || j.emptyPara), this.$editable.on(E.inputEventName, x.debounce(function () {
                        t.context.triggerEvent("change", t.$editable.html())
                    }, 10)), this.$editor.on("focusin", function (e) {
                        t.context.triggerEvent("focusin", e)
                    }).on("focusout", function (e) {
                        t.context.triggerEvent("focusout", e)
                    }), this.options.airMode || (this.options.width && this.$editor.outerWidth(this.options.width), this.options.height && this.$editable.outerHeight(this.options.height), this.options.maxHeight && this.$editable.css("max-height", this.options.maxHeight), this.options.minHeight && this.$editable.css("min-height", this.options.minHeight)), this.history.recordUndo()
                }, Editor.prototype.destroy = function () {
                    this.$editable.off()
                }, Editor.prototype.handleKeyMap = function (e) {
                    var t = this.options.keyMap[E.isMac ? "mac" : "pc"], n = [];
                    e.metaKey && n.push("CMD"), e.ctrlKey && !e.altKey && n.push("CTRL"), e.shiftKey && n.push("SHIFT");
                    var o = X.nameFromCode[e.keyCode];
                    o && n.push(o);
                    var i = t[n.join("+")];
                    i ? !1 !== this.context.invoke(i) && e.preventDefault() : X.isEdit(e.keyCode) && this.afterCommand()
                }, Editor.prototype.preventDefaultEditableShortCuts = function (e) {
                    (e.ctrlKey || e.metaKey) && k.contains([66, 73, 85], e.keyCode) && e.preventDefault()
                }, Editor.prototype.isLimited = function (e, t) {
                    return e = e || 0, (void 0 === t || !(X.isMove(t.keyCode) || t.ctrlKey || t.metaKey || k.contains([X.code.BACKSPACE, X.code.DELETE], t.keyCode))) && 0 < this.options.maxTextLength && this.$editable.text().length + e >= this.options.maxTextLength
                }, Editor.prototype.createRange = function () {
                    return this.focus(), _.create(this.editable)
                }, Editor.prototype.saveRange = function (e) {
                    this.lastRange = this.createRange(), e && this.lastRange.collapse().select()
                }, Editor.prototype.restoreRange = function () {
                    this.lastRange && (this.lastRange.select(), this.focus())
                }, Editor.prototype.saveTarget = function (e) {
                    this.$editable.data("target", e)
                }, Editor.prototype.clearTarget = function () {
                    this.$editable.removeData("target")
                }, Editor.prototype.restoreTarget = function () {
                    return this.$editable.data("target")
                }, Editor.prototype.currentStyle = function () {
                    var e = _.create();
                    return e && (e = e.normalize()), e ? this.style.current(e) : this.style.fromNode(this.$editable)
                }, Editor.prototype.styleFromNode = function (e) {
                    return this.style.fromNode(e)
                }, Editor.prototype.undo = function () {
                    this.context.triggerEvent("before.command", this.$editable.html()), this.history.undo(), this.context.triggerEvent("change", this.$editable.html())
                }, Editor.prototype.commit = function () {
                    this.context.triggerEvent("before.command", this.$editable.html()), this.history.commit(), this.context.triggerEvent("change", this.$editable.html())
                }, Editor.prototype.redo = function () {
                    this.context.triggerEvent("before.command", this.$editable.html()), this.history.redo(), this.context.triggerEvent("change", this.$editable.html())
                }, Editor.prototype.beforeCommand = function () {
                    this.context.triggerEvent("before.command", this.$editable.html()), this.focus()
                }, Editor.prototype.afterCommand = function (e) {
                    this.normalizeContent(), this.history.recordUndo(), e || this.context.triggerEvent("change", this.$editable.html())
                }, Editor.prototype.tab = function () {
                    var e = this.createRange();
                    if (e.isCollapsed() && e.isOnCell()) this.table.tab(e); else {
                        if (0 === this.options.tabSize) return !1;
                        this.isLimited(this.options.tabSize) || (this.beforeCommand(), this.typing.insertTab(e, this.options.tabSize), this.afterCommand())
                    }
                }, Editor.prototype.untab = function () {
                    var e = this.createRange();
                    if (e.isCollapsed() && e.isOnCell()) this.table.tab(e, !0); else if (0 === this.options.tabSize) return !1
                }, Editor.prototype.wrapCommand = function (e) {
                    return function () {
                        this.beforeCommand(), e.apply(this, arguments), this.afterCommand()
                    }
                }, Editor.prototype.insertImage = function (e, t) {
                    var n, o = this;
                    return (n = e, C.Deferred(function (e) {
                        var t = C("<img>");
                        t.one("load", function () {
                            t.off("error abort"), e.resolve(t)
                        }).one("error abort", function () {
                            t.off("load").detach(), e.reject(t)
                        }).css({display: "none"}).appendTo(document.body).attr("src", n)
                    }).promise()).then(function (e) {
                        o.beforeCommand(), "function" == typeof t ? t(e) : ("string" == typeof t && e.attr("data-filename", t), e.css("width", Math.min(o.$editable.width(), e.width()))), e.show(), _.create(o.editable).insertNode(e[0]), _.createFromNodeAfter(e[0]).select(), o.afterCommand()
                    }).fail(function (e) {
                        o.context.triggerEvent("image.upload.error", e)
                    })
                }, Editor.prototype.insertImagesAsDataURL = function (e) {
                    var i = this;
                    C.each(e, function (e, t) {
                        var o, n = t.name;
                        i.options.maximumImageFileSize && i.options.maximumImageFileSize < t.size ? i.context.triggerEvent("image.upload.error", i.lang.image.maximumFileSizeError) : (o = t, C.Deferred(function (n) {
                            C.extend(new FileReader, {
                                onload: function (e) {
                                    var t = e.target.result;
                                    n.resolve(t)
                                }, onerror: function (e) {
                                    n.reject(e)
                                }
                            }).readAsDataURL(o)
                        }).promise()).then(function (e) {
                            return i.insertImage(e, n)
                        }).fail(function () {
                            i.context.triggerEvent("image.upload.error")
                        })
                    })
                }, Editor.prototype.getSelectedText = function () {
                    var e = this.createRange();
                    return e.isOnAnchor() && (e = _.createFromNode(j.ancestor(e.sc, j.isAnchor))), e.toString()
                }, Editor.prototype.onFormatBlock = function (e, t) {
                    if (e = E.isMSIE ? "<" + e + ">" : e, document.execCommand("FormatBlock", !1, e), t && t.length) {
                        var n = t[0].className || "";
                        if (n) {
                            var o = this.createRange(), i = C([o.sc, o.ec]).closest(e);
                            i.addClass(n)
                        }
                    }
                }, Editor.prototype.formatPara = function () {
                    this.formatBlock("P")
                }, Editor.prototype.fontStyling = function (e, t) {
                    var n = this.createRange();
                    if (n) {
                        var o = this.style.styleNodes(n);
                        if (C(o).css(e, t), n.isCollapsed()) {
                            var i = k.head(o);
                            i && !j.nodeLength(i) && (i.innerHTML = j.ZERO_WIDTH_NBSP_CHAR, _.createFromNodeAfter(i.firstChild).select(), this.$editable.data("bogus", i))
                        }
                    }
                }, Editor.prototype.unlink = function () {
                    var e = this.createRange();
                    if (e.isOnAnchor()) {
                        var t = j.ancestor(e.sc, j.isAnchor);
                        (e = _.createFromNode(t)).select(), this.beforeCommand(), document.execCommand("unlink"), this.afterCommand()
                    }
                }, Editor.prototype.getLinkInfo = function () {
                    var e = this.createRange().expand(j.isAnchor), t = C(k.head(e.nodes(j.isAnchor))),
                        n = {range: e, text: e.toString(), url: t.length ? t.attr("href") : ""};
                    return t.length && (n.isNewWindow = "_blank" === t.attr("target")), n
                }, Editor.prototype.addRow = function (e) {
                    var t = this.createRange(this.$editable);
                    t.isCollapsed() && t.isOnCell() && (this.beforeCommand(), this.table.addRow(t, e), this.afterCommand())
                }, Editor.prototype.addCol = function (e) {
                    var t = this.createRange(this.$editable);
                    t.isCollapsed() && t.isOnCell() && (this.beforeCommand(), this.table.addCol(t, e), this.afterCommand())
                }, Editor.prototype.deleteRow = function () {
                    var e = this.createRange(this.$editable);
                    e.isCollapsed() && e.isOnCell() && (this.beforeCommand(), this.table.deleteRow(e), this.afterCommand())
                }, Editor.prototype.deleteCol = function () {
                    var e = this.createRange(this.$editable);
                    e.isCollapsed() && e.isOnCell() && (this.beforeCommand(), this.table.deleteCol(e), this.afterCommand())
                }, Editor.prototype.deleteTable = function () {
                    var e = this.createRange(this.$editable);
                    e.isCollapsed() && e.isOnCell() && (this.beforeCommand(), this.table.deleteTable(e), this.afterCommand())
                }, Editor.prototype.resizeTo = function (e, t, n) {
                    var o;
                    if (n) {
                        var i = e.y / e.x, r = t.data("ratio");
                        o = {width: i < r ? e.x : e.y / r, height: i < r ? e.x * r : e.y}
                    } else o = {width: e.x, height: e.y};
                    t.css(o)
                }, Editor.prototype.hasFocus = function () {
                    return this.$editable.is(":focus")
                }, Editor.prototype.focus = function () {
                    this.hasFocus() || this.$editable.focus()
                }, Editor.prototype.isEmpty = function () {
                    return j.isEmpty(this.$editable[0]) || j.emptyPara === this.$editable.html()
                }, Editor.prototype.empty = function () {
                    this.context.invoke("code", j.emptyPara)
                }, Editor.prototype.normalizeContent = function () {
                    this.$editable[0].normalize()
                }, Editor
            }(), ie = function () {
                function Clipboard(e) {
                    this.context = e, this.$editable = e.layoutInfo.editable
                }

                return Clipboard.prototype.initialize = function () {
                    this.$editable.on("paste", this.pasteByEvent.bind(this))
                }, Clipboard.prototype.pasteByEvent = function (e) {
                    var t = e.originalEvent.clipboardData;
                    if (t && t.items && t.items.length) {
                        var n = 1 < t.items.length ? t.items[1] : k.head(t.items);
                        "file" === n.kind && -1 !== n.type.indexOf("image/") && this.context.invoke("editor.insertImagesOrCallback", [n.getAsFile()]), this.context.invoke("editor.afterCommand")
                    }
                }, Clipboard
            }(), re = function () {
                function Dropzone(e) {
                    this.context = e, this.$eventListener = C(document), this.$editor = e.layoutInfo.editor, this.$editable = e.layoutInfo.editable, this.options = e.options, this.lang = this.options.langInfo, this.documentEventHandlers = {}, this.$dropzone = C(['<div class="note-dropzone">', '  <div class="note-dropzone-message"/>', "</div>"].join("")).prependTo(this.$editor)
                }

                return Dropzone.prototype.initialize = function () {
                    this.options.disableDragAndDrop ? (this.documentEventHandlers.onDrop = function (e) {
                        e.preventDefault()
                    }, this.$eventListener = this.$dropzone, this.$eventListener.on("drop", this.documentEventHandlers.onDrop)) : this.attachDragAndDropEvent()
                }, Dropzone.prototype.attachDragAndDropEvent = function () {
                    var i = this, o = C(), r = this.$dropzone.find(".note-dropzone-message");
                    this.documentEventHandlers.onDragenter = function (e) {
                        var t = i.context.invoke("codeview.isActivated"),
                            n = 0 < i.$editor.width() && 0 < i.$editor.height();
                        t || o.length || !n || (i.$editor.addClass("dragover"), i.$dropzone.width(i.$editor.width()), i.$dropzone.height(i.$editor.height()), r.text(i.lang.image.dragImageHere)), o = o.add(e.target)
                    }, this.documentEventHandlers.onDragleave = function (e) {
                        (o = o.not(e.target)).length || i.$editor.removeClass("dragover")
                    }, this.documentEventHandlers.onDrop = function () {
                        o = C(), i.$editor.removeClass("dragover")
                    }, this.$eventListener.on("dragenter", this.documentEventHandlers.onDragenter).on("dragleave", this.documentEventHandlers.onDragleave).on("drop", this.documentEventHandlers.onDrop), this.$dropzone.on("dragenter", function () {
                        i.$dropzone.addClass("hover"), r.text(i.lang.image.dropImage)
                    }).on("dragleave", function () {
                        i.$dropzone.removeClass("hover"), r.text(i.lang.image.dragImageHere)
                    }), this.$dropzone.on("drop", function (e) {
                        var o = e.originalEvent.dataTransfer;
                        e.preventDefault(), o && o.files && o.files.length ? (i.$editable.focus(), i.context.invoke("editor.insertImagesOrCallback", o.files)) : C.each(o.types, function (e, t) {
                            var n = o.getData(t);
                            -1 < t.toLowerCase().indexOf("text") ? i.context.invoke("editor.pasteHTML", n) : C(n).each(function (e, t) {
                                i.context.invoke("editor.insertNode", t)
                            })
                        })
                    }).on("dragover", !1)
                }, Dropzone.prototype.destroy = function () {
                    var t = this;
                    Object.keys(this.documentEventHandlers).forEach(function (e) {
                        t.$eventListener.off(e.substr(2).toLowerCase(), t.documentEventHandlers[e])
                    }), this.documentEventHandlers = {}
                }, Dropzone
            }();
            E.hasCodeMirror && (E.isSupportAmd ? Promise.resolve().then(function () {
                var e = [Te(174)];
                (function (e) {
                    te = e
                }).apply(null, e)
            }).catch(Te.oe) : te = window.CodeMirror);
            var ae = function () {
                function CodeView(e) {
                    this.context = e, this.$editor = e.layoutInfo.editor, this.$editable = e.layoutInfo.editable, this.$codable = e.layoutInfo.codable, this.options = e.options
                }

                return CodeView.prototype.sync = function () {
                    var e = this.isActivated();
                    e && E.hasCodeMirror && this.$codable.data("cmEditor").save()
                }, CodeView.prototype.isActivated = function () {
                    return this.$editor.hasClass("codeview")
                }, CodeView.prototype.toggle = function () {
                    this.isActivated() ? this.deactivate() : this.activate(), this.context.triggerEvent("codeview.toggled")
                }, CodeView.prototype.activate = function () {
                    var t = this;
                    if (this.$codable.val(j.html(this.$editable, this.options.prettifyHtml)), this.$codable.height(this.$editable.height()), this.context.invoke("toolbar.updateCodeview", !0), this.$editor.addClass("codeview"), this.$codable.focus(), E.hasCodeMirror) {
                        var n = te.fromTextArea(this.$codable[0], this.options.codemirror);
                        if (this.options.codemirror.tern) {
                            var o = new te.TernServer(this.options.codemirror.tern);
                            n.ternServer = o, n.on("cursorActivity", function (e) {
                                o.updateArgHints(e)
                            })
                        }
                        n.on("blur", function (e) {
                            t.context.triggerEvent("blur.codeview", n.getValue(), e)
                        }), n.setSize(null, this.$editable.outerHeight()), this.$codable.data("cmEditor", n)
                    } else this.$codable.on("blur", function (e) {
                        t.context.triggerEvent("blur.codeview", t.$codable.val(), e)
                    })
                }, CodeView.prototype.deactivate = function () {
                    if (E.hasCodeMirror) {
                        var e = this.$codable.data("cmEditor");
                        this.$codable.val(e.getValue()), e.toTextArea()
                    }
                    var t = j.value(this.$codable, this.options.prettifyHtml) || j.emptyPara,
                        n = this.$editable.html() !== t;
                    this.$editable.html(t), this.$editable.height(this.options.height ? this.$codable.height() : "auto"), this.$editor.removeClass("codeview"), n && this.context.triggerEvent("change", this.$editable.html(), this.$editable), this.$editable.focus(), this.context.invoke("toolbar.updateCodeview", !1)
                }, CodeView.prototype.destroy = function () {
                    this.isActivated() && this.deactivate()
                }, CodeView
            }(), se = function () {
                function Statusbar(e) {
                    this.$document = C(document), this.$statusbar = e.layoutInfo.statusbar, this.$editable = e.layoutInfo.editable, this.options = e.options
                }

                return Statusbar.prototype.initialize = function () {
                    var o = this;
                    this.options.airMode || this.options.disableResizeEditor ? this.destroy() : this.$statusbar.on("mousedown", function (e) {
                        e.preventDefault(), e.stopPropagation();
                        var n = o.$editable.offset().top - o.$document.scrollTop(), t = function (e) {
                            var t = e.clientY - (n + 24);
                            t = 0 < o.options.minheight ? Math.max(t, o.options.minheight) : t, t = 0 < o.options.maxHeight ? Math.min(t, o.options.maxHeight) : t, o.$editable.height(t)
                        };
                        o.$document.on("mousemove", t).one("mouseup", function () {
                            o.$document.off("mousemove", t)
                        })
                    })
                }, Statusbar.prototype.destroy = function () {
                    this.$statusbar.off(), this.$statusbar.addClass("locked")
                }, Statusbar
            }(), le = function () {
                function Fullscreen(e) {
                    var t = this;
                    this.context = e, this.$editor = e.layoutInfo.editor, this.$toolbar = e.layoutInfo.toolbar, this.$editable = e.layoutInfo.editable, this.$codable = e.layoutInfo.codable, this.$window = C(window), this.$scrollbar = C("html, body"), this.onResize = function () {
                        t.resizeTo({h: t.$window.height() - t.$toolbar.outerHeight()})
                    }
                }

                return Fullscreen.prototype.resizeTo = function (e) {
                    this.$editable.css("height", e.h), this.$codable.css("height", e.h), this.$codable.data("cmeditor") && this.$codable.data("cmeditor").setsize(null, e.h)
                }, Fullscreen.prototype.toggle = function () {
                    this.$editor.toggleClass("fullscreen"), this.isFullscreen() ? (this.$editable.data("orgHeight", this.$editable.css("height")), this.$editable.data("orgMaxHeight", this.$editable.css("maxHeight")), this.$editable.css("maxHeight", ""), this.$window.on("resize", this.onResize).trigger("resize"), this.$scrollbar.css("overflow", "hidden")) : (this.$window.off("resize", this.onResize), this.resizeTo({h: this.$editable.data("orgHeight")}), this.$editable.css("maxHeight", this.$editable.css("orgMaxHeight")), this.$scrollbar.css("overflow", "visible")), this.context.invoke("toolbar.updateFullscreen", this.isFullscreen())
                }, Fullscreen.prototype.isFullscreen = function () {
                    return this.$editor.hasClass("fullscreen")
                }, Fullscreen
            }(), ce = function () {
                function Handle(e) {
                    var n = this;
                    this.context = e, this.$document = C(document), this.$editingArea = e.layoutInfo.editingArea, this.options = e.options, this.lang = this.options.langInfo, this.events = {
                        "summernote.mousedown": function (e, t) {
                            n.update(t.target) && t.preventDefault()
                        }, "summernote.keyup summernote.scroll summernote.change summernote.dialog.shown": function () {
                            n.update()
                        }, "summernote.disable": function () {
                            n.hide()
                        }, "summernote.codeview.toggled": function () {
                            n.update()
                        }
                    }
                }

                return Handle.prototype.initialize = function () {
                    var r = this;
                    this.$handle = C(['<div class="note-handle">', '<div class="note-control-selection">', '<div class="note-control-selection-bg"></div>', '<div class="note-control-holder note-control-nw"></div>', '<div class="note-control-holder note-control-ne"></div>', '<div class="note-control-holder note-control-sw"></div>', '<div class="', this.options.disableResizeImage ? "note-control-holder" : "note-control-sizing", ' note-control-se"></div>', this.options.disableResizeImage ? "" : '<div class="note-control-selection-info"></div>', "</div>", "</div>"].join("")).prependTo(this.$editingArea), this.$handle.on("mousedown", function (e) {
                        if (j.isControlSizing(e.target)) {
                            e.preventDefault(), e.stopPropagation();
                            var t = r.$handle.find(".note-control-selection").data("target"), n = t.offset(),
                                o = r.$document.scrollTop(), i = function (e) {
                                    r.context.invoke("editor.resizeTo", {
                                        x: e.clientX - n.left,
                                        y: e.clientY - (n.top - o)
                                    }, t, !e.shiftKey), r.update(t[0])
                                };
                            r.$document.on("mousemove", i).one("mouseup", function (e) {
                                e.preventDefault(), r.$document.off("mousemove", i), r.context.invoke("editor.afterCommand")
                            }), t.data("ratio") || t.data("ratio", t.height() / t.width())
                        }
                    }), this.$handle.on("wheel", function (e) {
                        e.preventDefault(), r.update()
                    })
                }, Handle.prototype.destroy = function () {
                    this.$handle.remove()
                }, Handle.prototype.update = function (e) {
                    if (this.context.isDisabled()) return !1;
                    var t = j.isImg(e), n = this.$handle.find(".note-control-selection");
                    if (this.context.invoke("imagePopover.update", e), t) {
                        var o = C(e), i = o.position(), r = {
                            left: i.left + parseInt(o.css("marginLeft"), 10),
                            top: i.top + parseInt(o.css("marginTop"), 10)
                        }, a = {w: o.outerWidth(!1), h: o.outerHeight(!1)};
                        n.css({display: "block", left: r.left, top: r.top, width: a.w, height: a.h}).data("target", o);
                        var s = new Image;
                        s.src = o.attr("src");
                        var l = a.w + "x" + a.h + " (" + this.lang.image.original + ": " + s.width + "x" + s.height + ")";
                        n.find(".note-control-selection-info").text(l), this.context.invoke("editor.saveTarget", e)
                    } else this.hide();
                    return t
                }, Handle.prototype.hide = function () {
                    this.context.invoke("editor.clearTarget"), this.$handle.children().hide()
                }, Handle
            }(), de = /^([A-Za-z][A-Za-z0-9+-.]*\:[\/]{2}|mailto:[A-Z0-9._%+-]+@)?(www\.)?(.+)$/i, ue = function () {
                function AutoLink(e) {
                    var n = this;
                    this.context = e, this.events = {
                        "summernote.keyup": function (e, t) {
                            t.isDefaultPrevented() || n.handleKeyup(t)
                        }, "summernote.keydown": function (e, t) {
                            n.handleKeydown(t)
                        }
                    }
                }

                return AutoLink.prototype.initialize = function () {
                    this.lastWordRange = null
                }, AutoLink.prototype.destroy = function () {
                    this.lastWordRange = null
                }, AutoLink.prototype.replace = function () {
                    if (this.lastWordRange) {
                        var e = this.lastWordRange.toString(), t = e.match(de);
                        if (t && (t[1] || t[2])) {
                            var n = t[1] ? e : "http://" + e, o = C("<a />").html(e).attr("href", n)[0];
                            this.context.options.linkTargetBlank && C(o).attr("target", "_blank"), this.lastWordRange.insertNode(o), this.lastWordRange = null, this.context.invoke("editor.focus")
                        }
                    }
                }, AutoLink.prototype.handleKeydown = function (e) {
                    if (k.contains([X.code.ENTER, X.code.SPACE], e.keyCode)) {
                        var t = this.context.invoke("editor.createRange").getWordRange();
                        this.lastWordRange = t
                    }
                }, AutoLink.prototype.handleKeyup = function (e) {
                    k.contains([X.code.ENTER, X.code.SPACE], e.keyCode) && this.replace()
                }, AutoLink
            }(), he = function () {
                function AutoSync(e) {
                    var t = this;
                    this.$note = e.layoutInfo.note, this.events = {
                        "summernote.change": function () {
                            t.$note.val(e.invoke("code"))
                        }
                    }
                }

                return AutoSync.prototype.shouldInitialize = function () {
                    return j.isTextarea(this.$note[0])
                }, AutoSync
            }(), pe = function () {
                function Placeholder(e) {
                    var t = this;
                    this.context = e, this.$editingArea = e.layoutInfo.editingArea, this.options = e.options, this.events = {
                        "summernote.init summernote.change": function () {
                            t.update()
                        }, "summernote.codeview.toggled": function () {
                            t.update()
                        }
                    }
                }

                return Placeholder.prototype.shouldInitialize = function () {
                    return !!this.options.placeholder
                }, Placeholder.prototype.initialize = function () {
                    var e = this;
                    this.$placeholder = C('<div class="note-placeholder">'), this.$placeholder.on("click", function () {
                        e.context.invoke("focus")
                    }).html(this.options.placeholder).prependTo(this.$editingArea), this.update()
                }, Placeholder.prototype.destroy = function () {
                    this.$placeholder.remove()
                }, Placeholder.prototype.update = function () {
                    var e = !this.context.invoke("codeview.isActivated") && this.context.invoke("editor.isEmpty");
                    this.$placeholder.toggle(e)
                }, Placeholder
            }(), fe = function () {
                function Buttons(e) {
                    this.ui = C.summernote.ui, this.context = e, this.$toolbar = e.layoutInfo.toolbar, this.options = e.options, this.lang = this.options.langInfo, this.invertedKeyMap = x.invertObject(this.options.keyMap[E.isMac ? "mac" : "pc"])
                }

                return Buttons.prototype.representShortcut = function (e) {
                    var t = this.invertedKeyMap[e];
                    return this.options.shortcuts && t ? (E.isMac && (t = t.replace("CMD", "⌘").replace("SHIFT", "⇧")), " (" + (t = t.replace("BACKSLASH", "\\").replace("SLASH", "/").replace("LEFTBRACKET", "[").replace("RIGHTBRACKET", "]")) + ")") : ""
                }, Buttons.prototype.button = function (e) {
                    return !this.options.tooltip && e.tooltip && delete e.tooltip, e.container = this.options.container, this.ui.button(e)
                }, Buttons.prototype.initialize = function () {
                    this.addToolbarButtons(), this.addImagePopoverButtons(), this.addLinkPopoverButtons(), this.addTablePopoverButtons(), this.fontInstalledMap = {}
                }, Buttons.prototype.destroy = function () {
                    delete this.fontInstalledMap
                }, Buttons.prototype.isFontInstalled = function (e) {
                    return this.fontInstalledMap.hasOwnProperty(e) || (this.fontInstalledMap[e] = E.isFontInstalled(e) || k.contains(this.options.fontNamesIgnoreCheck, e)), this.fontInstalledMap[e]
                }, Buttons.prototype.isFontDeservedToAdd = function (e) {
                    return "" !== (e = e.toLowerCase()) && this.isFontInstalled(e) && -1 === C.inArray(e, ["sans-serif", "serif", "monospace", "cursive", "fantasy"])
                }, Buttons.prototype.colorPalette = function (h, e, n, o) {
                    var p = this;
                    return this.ui.buttonGroup({
                        className: "note-color " + h,
                        children: [this.button({
                            className: "note-current-color-button",
                            contents: this.ui.icon(this.options.icons.font + " note-recent-color"),
                            tooltip: e,
                            click: function (e) {
                                var t = C(e.currentTarget);
                                n && o ? p.context.invoke("editor.color", {
                                    backColor: t.attr("data-backColor"),
                                    foreColor: t.attr("data-foreColor")
                                }) : n ? p.context.invoke("editor.color", {backColor: t.attr("data-backColor")}) : o && p.context.invoke("editor.color", {foreColor: t.attr("data-foreColor")})
                            },
                            callback: function (e) {
                                var t = e.find(".note-recent-color");
                                n && (t.css("background-color", "#FFFF00"), e.attr("data-backColor", "#FFFF00")), o || t.css("color", "transparent")
                            }
                        }), this.button({
                            className: "dropdown-toggle",
                            contents: this.ui.dropdownButtonContents("", this.options),
                            tooltip: this.lang.color.more,
                            data: {toggle: "dropdown"}
                        }), this.ui.dropdown({
                            items: (n ? ['<div class="note-palette">', '  <div class="note-palette-title">' + this.lang.color.background + "</div>", "  <div>", '    <button type="button" class="note-color-reset btn btn-light" data-event="backColor" data-value="inherit">', this.lang.color.transparent, "    </button>", "  </div>", '  <div class="note-holder" data-event="backColor"/>', "  <div>", '    <button type="button" class="note-color-select btn" data-event="openPalette" data-value="backColorPicker">', this.lang.color.cpSelect, "    </button>", '    <input type="color" id="backColorPicker" class="note-btn note-color-select-btn" value="#FFFF00" data-event="backColorPalette">', "  </div>", '  <div class="note-holder-custom" id="backColorPalette" data-event="backColor"/>', "</div>"].join("") : "") + (o ? ['<div class="note-palette">', '  <div class="note-palette-title">' + this.lang.color.foreground + "</div>", "  <div>", '    <button type="button" class="note-color-reset btn btn-light" data-event="removeFormat" data-value="foreColor">', this.lang.color.resetToDefault, "    </button>", "  </div>", '  <div class="note-holder" data-event="foreColor"/>', "  <div>", '    <button type="button" class="note-color-select btn" data-event="openPalette" data-value="foreColorPicker">', this.lang.color.cpSelect, "    </button>", '    <input type="color" id="foreColorPicker" class="note-btn note-color-select-btn" value="#000000" data-event="foreColorPalette">', '  <div class="note-holder-custom" id="foreColorPalette" data-event="foreColor"/>', "</div>"].join("") : ""),
                            callback: function (n) {
                                n.find(".note-holder").each(function (e, t) {
                                    var n = C(t);
                                    n.append(p.ui.palette({
                                        colors: p.options.colors,
                                        colorsName: p.options.colorsName,
                                        eventName: n.data("event"),
                                        container: p.options.container,
                                        tooltip: p.options.tooltip
                                    }).render())
                                });
                                var o = [["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]];
                                n.find(".note-holder-custom").each(function (e, t) {
                                    var n = C(t);
                                    n.append(p.ui.palette({
                                        colors: o,
                                        colorsName: o,
                                        eventName: n.data("event"),
                                        container: p.options.container,
                                        tooltip: p.options.tooltip
                                    }).render())
                                }), n.find("input[type=color]").each(function (e, t) {
                                    C(t).change(function () {
                                        var e = n.find("#" + C(this).data("event")).find(".note-color-btn").first(),
                                            t = this.value.toUpperCase();
                                        e.css("background-color", t).attr("aria-label", t).attr("data-value", t).attr("data-original-title", t), e.click()
                                    })
                                })
                            },
                            click: function (e) {
                                e.stopPropagation();
                                var t = C("." + h), n = C(e.target), o = n.data("event"), i = n.attr("data-value");
                                if ("openPalette" === o) {
                                    var r = t.find("#" + i),
                                        a = C(t.find("#" + r.data("event")).find(".note-color-row")[0]),
                                        s = a.find(".note-color-btn").last().detach(), l = r.val();
                                    s.css("background-color", l).attr("aria-label", l).attr("data-value", l).attr("data-original-title", l), a.prepend(s), r.click()
                                } else if (k.contains(["backColor", "foreColor"], o)) {
                                    var c = "backColor" === o ? "background-color" : "color",
                                        d = n.closest(".note-color").find(".note-recent-color"),
                                        u = n.closest(".note-color").find(".note-current-color-button");
                                    d.css(c, i), u.attr("data-" + o, i), p.context.invoke("editor." + o, i)
                                }
                            }
                        })]
                    }).render()
                }, Buttons.prototype.addToolbarButtons = function () {
                    var r = this;
                    this.context.memo("button.style", function () {
                        return r.ui.buttonGroup([r.button({
                            className: "dropdown-toggle",
                            contents: r.ui.dropdownButtonContents(r.ui.icon(r.options.icons.magic), r.options),
                            tooltip: r.lang.style.style,
                            data: {toggle: "dropdown"}
                        }), r.ui.dropdown({
                            className: "dropdown-style",
                            items: r.options.styleTags,
                            title: r.lang.style.style,
                            template: function (e) {
                                "string" == typeof e && (e = {
                                    tag: e,
                                    title: r.lang.style.hasOwnProperty(e) ? r.lang.style[e] : e
                                });
                                var t = e.tag, n = e.title, o = e.style ? ' style="' + e.style + '" ' : "",
                                    i = e.className ? ' class="' + e.className + '"' : "";
                                return "<" + t + o + i + ">" + n + "</" + t + ">"
                            },
                            click: r.context.createInvokeHandler("editor.formatBlock")
                        })]).render()
                    });
                    for (var e = function (e, t) {
                        var n = o.options.styleTags[e];
                        o.context.memo("button.style." + n, function () {
                            return r.button({
                                className: "note-btn-style-" + n,
                                contents: '<div data-value="' + n + '">' + n.toUpperCase() + "</div>",
                                tooltip: r.lang.style[n],
                                click: r.context.createInvokeHandler("editor.formatBlock")
                            }).render()
                        })
                    }, o = this, t = 0, n = this.options.styleTags.length; t < n; t++) e(t);
                    this.context.memo("button.bold", function () {
                        return r.button({
                            className: "note-btn-bold",
                            contents: r.ui.icon(r.options.icons.bold),
                            tooltip: r.lang.font.bold + r.representShortcut("bold"),
                            click: r.context.createInvokeHandlerAndUpdateState("editor.bold")
                        }).render()
                    }), this.context.memo("button.italic", function () {
                        return r.button({
                            className: "note-btn-italic",
                            contents: r.ui.icon(r.options.icons.italic),
                            tooltip: r.lang.font.italic + r.representShortcut("italic"),
                            click: r.context.createInvokeHandlerAndUpdateState("editor.italic")
                        }).render()
                    }), this.context.memo("button.underline", function () {
                        return r.button({
                            className: "note-btn-underline",
                            contents: r.ui.icon(r.options.icons.underline),
                            tooltip: r.lang.font.underline + r.representShortcut("underline"),
                            click: r.context.createInvokeHandlerAndUpdateState("editor.underline")
                        }).render()
                    }), this.context.memo("button.clear", function () {
                        return r.button({
                            contents: r.ui.icon(r.options.icons.eraser),
                            tooltip: r.lang.font.clear + r.representShortcut("removeFormat"),
                            click: r.context.createInvokeHandler("editor.removeFormat")
                        }).render()
                    }), this.context.memo("button.strikethrough", function () {
                        return r.button({
                            className: "note-btn-strikethrough",
                            contents: r.ui.icon(r.options.icons.strikethrough),
                            tooltip: r.lang.font.strikethrough + r.representShortcut("strikethrough"),
                            click: r.context.createInvokeHandlerAndUpdateState("editor.strikethrough")
                        }).render()
                    }), this.context.memo("button.superscript", function () {
                        return r.button({
                            className: "note-btn-superscript",
                            contents: r.ui.icon(r.options.icons.superscript),
                            tooltip: r.lang.font.superscript,
                            click: r.context.createInvokeHandlerAndUpdateState("editor.superscript")
                        }).render()
                    }), this.context.memo("button.subscript", function () {
                        return r.button({
                            className: "note-btn-subscript",
                            contents: r.ui.icon(r.options.icons.subscript),
                            tooltip: r.lang.font.subscript,
                            click: r.context.createInvokeHandlerAndUpdateState("editor.subscript")
                        }).render()
                    }), this.context.memo("button.fontname", function () {
                        var e = r.context.invoke("editor.currentStyle");
                        return C.each(e["font-family"].split(","), function (e, t) {
                            t = t.trim().replace(/['"]+/g, ""), r.isFontDeservedToAdd(t) && -1 === C.inArray(t, r.options.fontNames) && r.options.fontNames.push(t)
                        }), r.ui.buttonGroup([r.button({
                            className: "dropdown-toggle",
                            contents: r.ui.dropdownButtonContents('<span class="note-current-fontname"/>', r.options),
                            tooltip: r.lang.font.name,
                            data: {toggle: "dropdown"}
                        }), r.ui.dropdownCheck({
                            className: "dropdown-fontname",
                            checkClassName: r.options.icons.menuCheck,
                            items: r.options.fontNames.filter(r.isFontInstalled.bind(r)),
                            title: r.lang.font.name,
                            template: function (e) {
                                return "<span style=\"font-family: '" + e + "'\">" + e + "</span>"
                            },
                            click: r.context.createInvokeHandlerAndUpdateState("editor.fontName")
                        })]).render()
                    }), this.context.memo("button.fontsize", function () {
                        return r.ui.buttonGroup([r.button({
                            className: "dropdown-toggle",
                            contents: r.ui.dropdownButtonContents('<span class="note-current-fontsize"/>', r.options),
                            tooltip: r.lang.font.size,
                            data: {toggle: "dropdown"}
                        }), r.ui.dropdownCheck({
                            className: "dropdown-fontsize",
                            checkClassName: r.options.icons.menuCheck,
                            items: r.options.fontSizes,
                            title: r.lang.font.size,
                            click: r.context.createInvokeHandlerAndUpdateState("editor.fontSize")
                        })]).render()
                    }), this.context.memo("button.color", function () {
                        return r.colorPalette("note-color-all", r.lang.color.recent, !0, !0)
                    }), this.context.memo("button.forecolor", function () {
                        return r.colorPalette("note-color-fore", r.lang.color.foreground, !1, !0)
                    }), this.context.memo("button.backcolor", function () {
                        return r.colorPalette("note-color-back", r.lang.color.background, !0, !1)
                    }), this.context.memo("button.ul", function () {
                        return r.button({
                            contents: r.ui.icon(r.options.icons.unorderedlist),
                            tooltip: r.lang.lists.unordered + r.representShortcut("insertUnorderedList"),
                            click: r.context.createInvokeHandler("editor.insertUnorderedList")
                        }).render()
                    }), this.context.memo("button.ol", function () {
                        return r.button({
                            contents: r.ui.icon(r.options.icons.orderedlist),
                            tooltip: r.lang.lists.ordered + r.representShortcut("insertOrderedList"),
                            click: r.context.createInvokeHandler("editor.insertOrderedList")
                        }).render()
                    });
                    var i = this.button({
                        contents: this.ui.icon(this.options.icons.alignLeft),
                        tooltip: this.lang.paragraph.left + this.representShortcut("justifyLeft"),
                        click: this.context.createInvokeHandler("editor.justifyLeft")
                    }), a = this.button({
                        contents: this.ui.icon(this.options.icons.alignCenter),
                        tooltip: this.lang.paragraph.center + this.representShortcut("justifyCenter"),
                        click: this.context.createInvokeHandler("editor.justifyCenter")
                    }), s = this.button({
                        contents: this.ui.icon(this.options.icons.alignRight),
                        tooltip: this.lang.paragraph.right + this.representShortcut("justifyRight"),
                        click: this.context.createInvokeHandler("editor.justifyRight")
                    }), l = this.button({
                        contents: this.ui.icon(this.options.icons.alignJustify),
                        tooltip: this.lang.paragraph.justify + this.representShortcut("justifyFull"),
                        click: this.context.createInvokeHandler("editor.justifyFull")
                    }), c = this.button({
                        contents: this.ui.icon(this.options.icons.outdent),
                        tooltip: this.lang.paragraph.outdent + this.representShortcut("outdent"),
                        click: this.context.createInvokeHandler("editor.outdent")
                    }), d = this.button({
                        contents: this.ui.icon(this.options.icons.indent),
                        tooltip: this.lang.paragraph.indent + this.representShortcut("indent"),
                        click: this.context.createInvokeHandler("editor.indent")
                    });
                    this.context.memo("button.justifyLeft", x.invoke(i, "render")), this.context.memo("button.justifyCenter", x.invoke(a, "render")), this.context.memo("button.justifyRight", x.invoke(s, "render")), this.context.memo("button.justifyFull", x.invoke(l, "render")), this.context.memo("button.outdent", x.invoke(c, "render")), this.context.memo("button.indent", x.invoke(d, "render")), this.context.memo("button.paragraph", function () {
                        return r.ui.buttonGroup([r.button({
                            className: "dropdown-toggle",
                            contents: r.ui.dropdownButtonContents(r.ui.icon(r.options.icons.alignLeft), r.options),
                            tooltip: r.lang.paragraph.paragraph,
                            data: {toggle: "dropdown"}
                        }), r.ui.dropdown([r.ui.buttonGroup({
                            className: "note-align",
                            children: [i, a, s, l]
                        }), r.ui.buttonGroup({className: "note-list", children: [c, d]})])]).render()
                    }), this.context.memo("button.height", function () {
                        return r.ui.buttonGroup([r.button({
                            className: "dropdown-toggle",
                            contents: r.ui.dropdownButtonContents(r.ui.icon(r.options.icons.textHeight), r.options),
                            tooltip: r.lang.font.height,
                            data: {toggle: "dropdown"}
                        }), r.ui.dropdownCheck({
                            items: r.options.lineHeights,
                            checkClassName: r.options.icons.menuCheck,
                            className: "dropdown-line-height",
                            title: r.lang.font.height,
                            click: r.context.createInvokeHandler("editor.lineHeight")
                        })]).render()
                    }), this.context.memo("button.table", function () {
                        return r.ui.buttonGroup([r.button({
                            className: "dropdown-toggle",
                            contents: r.ui.dropdownButtonContents(r.ui.icon(r.options.icons.table), r.options),
                            tooltip: r.lang.table.table,
                            data: {toggle: "dropdown"}
                        }), r.ui.dropdown({
                            title: r.lang.table.table,
                            className: "note-table",
                            items: ['<div class="note-dimension-picker">', '  <div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"/>', '  <div class="note-dimension-picker-highlighted"/>', '  <div class="note-dimension-picker-unhighlighted"/>', "</div>", '<div class="note-dimension-display">1 x 1</div>'].join("")
                        })], {
                            callback: function (e) {
                                var t = e.find(".note-dimension-picker-mousecatcher");
                                t.css({
                                    width: r.options.insertTableMaxSize.col + "em",
                                    height: r.options.insertTableMaxSize.row + "em"
                                }).mousedown(r.context.createInvokeHandler("editor.insertTable")).on("mousemove", r.tableMoveHandler.bind(r))
                            }
                        }).render()
                    }), this.context.memo("button.link", function () {
                        return r.button({
                            contents: r.ui.icon(r.options.icons.link),
                            tooltip: r.lang.link.link + r.representShortcut("linkDialog.show"),
                            click: r.context.createInvokeHandler("linkDialog.show")
                        }).render()
                    }), this.context.memo("button.picture", function () {
                        return r.button({
                            contents: r.ui.icon(r.options.icons.picture),
                            tooltip: r.lang.image.image,
                            click: r.context.createInvokeHandler("imageDialog.show")
                        }).render()
                    }), this.context.memo("button.video", function () {
                        return r.button({
                            contents: r.ui.icon(r.options.icons.video),
                            tooltip: r.lang.video.video,
                            click: r.context.createInvokeHandler("videoDialog.show")
                        }).render()
                    }), this.context.memo("button.hr", function () {
                        return r.button({
                            contents: r.ui.icon(r.options.icons.minus),
                            tooltip: r.lang.hr.insert + r.representShortcut("insertHorizontalRule"),
                            click: r.context.createInvokeHandler("editor.insertHorizontalRule")
                        }).render()
                    }), this.context.memo("button.fullscreen", function () {
                        return r.button({
                            className: "btn-fullscreen",
                            contents: r.ui.icon(r.options.icons.arrowsAlt),
                            tooltip: r.lang.options.fullscreen,
                            click: r.context.createInvokeHandler("fullscreen.toggle")
                        }).render()
                    }), this.context.memo("button.codeview", function () {
                        return r.button({
                            className: "btn-codeview",
                            contents: r.ui.icon(r.options.icons.code),
                            tooltip: r.lang.options.codeview,
                            click: r.context.createInvokeHandler("codeview.toggle")
                        }).render()
                    }), this.context.memo("button.redo", function () {
                        return r.button({
                            contents: r.ui.icon(r.options.icons.redo),
                            tooltip: r.lang.history.redo + r.representShortcut("redo"),
                            click: r.context.createInvokeHandler("editor.redo")
                        }).render()
                    }), this.context.memo("button.undo", function () {
                        return r.button({
                            contents: r.ui.icon(r.options.icons.undo),
                            tooltip: r.lang.history.undo + r.representShortcut("undo"),
                            click: r.context.createInvokeHandler("editor.undo")
                        }).render()
                    }), this.context.memo("button.help", function () {
                        return r.button({
                            contents: r.ui.icon(r.options.icons.question),
                            tooltip: r.lang.options.help,
                            click: r.context.createInvokeHandler("helpDialog.show")
                        }).render()
                    })
                }, Buttons.prototype.addImagePopoverButtons = function () {
                    var e = this;
                    this.context.memo("button.imageSize100", function () {
                        return e.button({
                            contents: '<span class="note-fontsize-10">100%</span>',
                            tooltip: e.lang.image.resizeFull,
                            click: e.context.createInvokeHandler("editor.resize", "1")
                        }).render()
                    }), this.context.memo("button.imageSize50", function () {
                        return e.button({
                            contents: '<span class="note-fontsize-10">50%</span>',
                            tooltip: e.lang.image.resizeHalf,
                            click: e.context.createInvokeHandler("editor.resize", "0.5")
                        }).render()
                    }), this.context.memo("button.imageSize25", function () {
                        return e.button({
                            contents: '<span class="note-fontsize-10">25%</span>',
                            tooltip: e.lang.image.resizeQuarter,
                            click: e.context.createInvokeHandler("editor.resize", "0.25")
                        }).render()
                    }), this.context.memo("button.floatLeft", function () {
                        return e.button({
                            contents: e.ui.icon(e.options.icons.alignLeft),
                            tooltip: e.lang.image.floatLeft,
                            click: e.context.createInvokeHandler("editor.floatMe", "left")
                        }).render()
                    }), this.context.memo("button.floatRight", function () {
                        return e.button({
                            contents: e.ui.icon(e.options.icons.alignRight),
                            tooltip: e.lang.image.floatRight,
                            click: e.context.createInvokeHandler("editor.floatMe", "right")
                        }).render()
                    }), this.context.memo("button.floatNone", function () {
                        return e.button({
                            contents: e.ui.icon(e.options.icons.alignJustify),
                            tooltip: e.lang.image.floatNone,
                            click: e.context.createInvokeHandler("editor.floatMe", "none")
                        }).render()
                    }), this.context.memo("button.removeMedia", function () {
                        return e.button({
                            contents: e.ui.icon(e.options.icons.trash),
                            tooltip: e.lang.image.remove,
                            click: e.context.createInvokeHandler("editor.removeMedia")
                        }).render()
                    })
                }, Buttons.prototype.addLinkPopoverButtons = function () {
                    var e = this;
                    this.context.memo("button.linkDialogShow", function () {
                        return e.button({
                            contents: e.ui.icon(e.options.icons.link),
                            tooltip: e.lang.link.edit,
                            click: e.context.createInvokeHandler("linkDialog.show")
                        }).render()
                    }), this.context.memo("button.unlink", function () {
                        return e.button({
                            contents: e.ui.icon(e.options.icons.unlink),
                            tooltip: e.lang.link.unlink,
                            click: e.context.createInvokeHandler("editor.unlink")
                        }).render()
                    })
                }, Buttons.prototype.addTablePopoverButtons = function () {
                    var e = this;
                    this.context.memo("button.addRowUp", function () {
                        return e.button({
                            className: "btn-md",
                            contents: e.ui.icon(e.options.icons.rowAbove),
                            tooltip: e.lang.table.addRowAbove,
                            click: e.context.createInvokeHandler("editor.addRow", "top")
                        }).render()
                    }), this.context.memo("button.addRowDown", function () {
                        return e.button({
                            className: "btn-md",
                            contents: e.ui.icon(e.options.icons.rowBelow),
                            tooltip: e.lang.table.addRowBelow,
                            click: e.context.createInvokeHandler("editor.addRow", "bottom")
                        }).render()
                    }), this.context.memo("button.addColLeft", function () {
                        return e.button({
                            className: "btn-md",
                            contents: e.ui.icon(e.options.icons.colBefore),
                            tooltip: e.lang.table.addColLeft,
                            click: e.context.createInvokeHandler("editor.addCol", "left")
                        }).render()
                    }), this.context.memo("button.addColRight", function () {
                        return e.button({
                            className: "btn-md",
                            contents: e.ui.icon(e.options.icons.colAfter),
                            tooltip: e.lang.table.addColRight,
                            click: e.context.createInvokeHandler("editor.addCol", "right")
                        }).render()
                    }), this.context.memo("button.deleteRow", function () {
                        return e.button({
                            className: "btn-md",
                            contents: e.ui.icon(e.options.icons.rowRemove),
                            tooltip: e.lang.table.delRow,
                            click: e.context.createInvokeHandler("editor.deleteRow")
                        }).render()
                    }), this.context.memo("button.deleteCol", function () {
                        return e.button({
                            className: "btn-md",
                            contents: e.ui.icon(e.options.icons.colRemove),
                            tooltip: e.lang.table.delCol,
                            click: e.context.createInvokeHandler("editor.deleteCol")
                        }).render()
                    }), this.context.memo("button.deleteTable", function () {
                        return e.button({
                            className: "btn-md",
                            contents: e.ui.icon(e.options.icons.trash),
                            tooltip: e.lang.table.delTable,
                            click: e.context.createInvokeHandler("editor.deleteTable")
                        }).render()
                    })
                }, Buttons.prototype.build = function (e, t) {
                    for (var n = 0, o = t.length; n < o; n++) {
                        for (var i = t[n], r = C.isArray(i) ? i[0] : i, a = C.isArray(i) ? 1 === i.length ? [i[0]] : i[1] : [i], s = this.ui.buttonGroup({className: "note-" + r}).render(), l = 0, c = a.length; l < c; l++) {
                            var d = this.context.memo("button." + a[l]);
                            d && s.append("function" == typeof d ? d(this.context) : d)
                        }
                        s.appendTo(e)
                    }
                }, Buttons.prototype.updateCurrentStyle = function (e) {
                    var o = this, t = e || this.$toolbar, n = this.context.invoke("editor.currentStyle");
                    if (this.updateBtnStates(t, {
                        ".note-btn-bold": function () {
                            return "bold" === n["font-bold"]
                        }, ".note-btn-italic": function () {
                            return "italic" === n["font-italic"]
                        }, ".note-btn-underline": function () {
                            return "underline" === n["font-underline"]
                        }, ".note-btn-subscript": function () {
                            return "subscript" === n["font-subscript"]
                        }, ".note-btn-superscript": function () {
                            return "superscript" === n["font-superscript"]
                        }, ".note-btn-strikethrough": function () {
                            return "strikethrough" === n["font-strikethrough"]
                        }
                    }), n["font-family"]) {
                        var i = n["font-family"].split(",").map(function (e) {
                            return e.replace(/[\'\"]/g, "").replace(/\s+$/, "").replace(/^\s+/, "")
                        }), r = k.find(i, this.isFontInstalled.bind(this));
                        t.find(".dropdown-fontname a").each(function (e, t) {
                            var n = C(t), o = n.data("value") + "" == r + "";
                            n.toggleClass("checked", o)
                        }), t.find(".note-current-fontname").text(r).css("font-family", r)
                    }
                    if (n["font-size"]) {
                        var a = n["font-size"];
                        t.find(".dropdown-fontsize a").each(function (e, t) {
                            var n = C(t), o = n.data("value") + "" == a + "";
                            n.toggleClass("checked", o)
                        }), t.find(".note-current-fontsize").text(a)
                    }
                    if (n["line-height"]) {
                        var s = n["line-height"];
                        t.find(".dropdown-line-height li a").each(function (e, t) {
                            var n = C(t).data("value") + "" == s + "";
                            o.className = n ? "checked" : ""
                        })
                    }
                }, Buttons.prototype.updateBtnStates = function (n, e) {
                    var o = this;
                    C.each(e, function (e, t) {
                        o.ui.toggleBtnActive(n.find(e), t())
                    })
                }, Buttons.prototype.tableMoveHandler = function (e) {
                    var t, n = C(e.target.parentNode), o = n.next(), i = n.find(".note-dimension-picker-mousecatcher"),
                        r = n.find(".note-dimension-picker-highlighted"),
                        a = n.find(".note-dimension-picker-unhighlighted");
                    if (void 0 === e.offsetX) {
                        var s = C(e.target).offset();
                        t = {x: e.pageX - s.left, y: e.pageY - s.top}
                    } else t = {x: e.offsetX, y: e.offsetY};
                    var l = {c: Math.ceil(t.x / 18) || 1, r: Math.ceil(t.y / 18) || 1};
                    r.css({
                        width: l.c + "em",
                        height: l.r + "em"
                    }), i.data("value", l.c + "x" + l.r), 3 < l.c && l.c < this.options.insertTableMaxSize.col && a.css({width: l.c + 1 + "em"}), 3 < l.r && l.r < this.options.insertTableMaxSize.row && a.css({height: l.r + 1 + "em"}), o.html(l.c + " x " + l.r)
                }, Buttons
            }(), ge = function () {
                function Toolbar(e) {
                    this.context = e, this.$window = C(window), this.$document = C(document), this.ui = C.summernote.ui, this.$note = e.layoutInfo.note, this.$editor = e.layoutInfo.editor, this.$toolbar = e.layoutInfo.toolbar, this.options = e.options, this.followScroll = this.followScroll.bind(this)
                }

                return Toolbar.prototype.shouldInitialize = function () {
                    return !this.options.airMode
                }, Toolbar.prototype.initialize = function () {
                    var e = this;
                    this.options.toolbar = this.options.toolbar || [], this.options.toolbar.length ? this.context.invoke("buttons.build", this.$toolbar, this.options.toolbar) : this.$toolbar.hide(), this.options.toolbarContainer && this.$toolbar.appendTo(this.options.toolbarContainer), this.changeContainer(!1), this.$note.on("summernote.keyup summernote.mouseup summernote.change", function () {
                        e.context.invoke("buttons.updateCurrentStyle")
                    }), this.context.invoke("buttons.updateCurrentStyle"), this.options.followingToolbar && this.$window.on("scroll resize", this.followScroll)
                }, Toolbar.prototype.destroy = function () {
                    this.$toolbar.children().remove(), this.options.followingToolbar && this.$window.off("scroll resize", this.followScroll)
                }, Toolbar.prototype.followScroll = function () {
                    if (this.$editor.hasClass("fullscreen")) return !1;
                    var e = this.$toolbar.parent(".note-toolbar-wrapper"), t = this.$editor.outerHeight(),
                        n = this.$editor.width(), o = this.$toolbar.height();
                    e.css({height: o});
                    var i = 0;
                    this.options.otherStaticBar && (i = C(this.options.otherStaticBar).outerHeight());
                    var r = this.$document.scrollTop(), a = this.$editor.offset().top, s = a + t, l = a - i,
                        c = s - i - o;
                    l < r && r < c ? this.$toolbar.css({
                        position: "fixed",
                        top: i,
                        width: n
                    }) : this.$toolbar.css({position: "relative", top: 0, width: "100%"})
                }, Toolbar.prototype.changeContainer = function (e) {
                    e ? this.$toolbar.prependTo(this.$editor) : this.options.toolbarContainer && this.$toolbar.appendTo(this.options.toolbarContainer)
                }, Toolbar.prototype.updateFullscreen = function (e) {
                    this.ui.toggleBtnActive(this.$toolbar.find(".btn-fullscreen"), e), this.changeContainer(e)
                }, Toolbar.prototype.updateCodeview = function (e) {
                    this.ui.toggleBtnActive(this.$toolbar.find(".btn-codeview"), e), e ? this.deactivate() : this.activate()
                }, Toolbar.prototype.activate = function (e) {
                    var t = this.$toolbar.find("button");
                    e || (t = t.not(".btn-codeview")), this.ui.toggleBtn(t, !0)
                }, Toolbar.prototype.deactivate = function (e) {
                    var t = this.$toolbar.find("button");
                    e || (t = t.not(".btn-codeview")), this.ui.toggleBtn(t, !1)
                }, Toolbar
            }(), me = function () {
                function LinkDialog(e) {
                    this.context = e, this.ui = C.summernote.ui, this.$body = C(document.body), this.$editor = e.layoutInfo.editor, this.options = e.options, this.lang = this.options.langInfo, e.memo("help.linkDialog.show", this.options.langInfo.help["linkDialog.show"])
                }

                return LinkDialog.prototype.initialize = function () {
                    var e = this.options.dialogsInBody ? this.$body : this.$editor,
                        t = ['<div class="form-group note-form-group">', '<label class="note-form-label">' + this.lang.link.textToDisplay + "</label>", '<input class="note-link-text form-control note-form-control note-input" type="text" />', "</div>", '<div class="form-group note-form-group">', '<label class="note-form-label">' + this.lang.link.url + "</label>", '<input class="note-link-url form-control note-form-control note-input" type="text" value="http://" />', "</div>", this.options.disableLinkTarget ? "" : C("<div/>").append(this.ui.checkbox({
                            className: "sn-checkbox-open-in-new-window",
                            text: this.lang.link.openInNewWindow,
                            checked: !0
                        }).render()).html()].join(""),
                        n = '<input type="button" href="#" class="btn btn-primary note-btn note-btn-primary note-link-btn" value="' + this.lang.link.insert + '" disabled>';
                    this.$dialog = this.ui.dialog({
                        className: "link-dialog",
                        title: this.lang.link.insert,
                        fade: this.options.dialogsFade,
                        body: t,
                        footer: n
                    }).render().appendTo(e)
                }, LinkDialog.prototype.destroy = function () {
                    this.ui.hideDialog(this.$dialog), this.$dialog.remove()
                }, LinkDialog.prototype.bindEnterKey = function (e, t) {
                    e.on("keypress", function (e) {
                        e.keyCode === X.code.ENTER && (e.preventDefault(), t.trigger("click"))
                    })
                }, LinkDialog.prototype.toggleLinkBtn = function (e, t, n) {
                    this.ui.toggleBtn(e, t.val() && n.val())
                }, LinkDialog.prototype.showLinkDialog = function (l) {
                    var c = this;
                    return C.Deferred(function (o) {
                        var i = c.$dialog.find(".note-link-text"), r = c.$dialog.find(".note-link-url"),
                            a = c.$dialog.find(".note-link-btn"),
                            s = c.$dialog.find(".sn-checkbox-open-in-new-window input[type=checkbox]");
                        c.ui.onDialogShown(c.$dialog, function () {
                            c.context.triggerEvent("dialog.shown"), l.url || (l.url = l.text), i.val(l.text);
                            var e = function () {
                                c.toggleLinkBtn(a, i, r), l.text = i.val()
                            };
                            i.on("input", e).on("paste", function () {
                                setTimeout(e, 0)
                            });
                            var t = function () {
                                c.toggleLinkBtn(a, i, r), l.text || i.val(r.val())
                            };
                            r.on("input", t).on("paste", function () {
                                setTimeout(t, 0)
                            }).val(l.url), E.isSupportTouch || r.trigger("focus"), c.toggleLinkBtn(a, i, r), c.bindEnterKey(r, a), c.bindEnterKey(i, a);
                            var n = void 0 !== l.isNewWindow ? l.isNewWindow : c.context.options.linkTargetBlank;
                            s.prop("checked", n), a.one("click", function (e) {
                                e.preventDefault(), o.resolve({
                                    range: l.range,
                                    url: r.val(),
                                    text: i.val(),
                                    isNewWindow: s.is(":checked")
                                }), c.ui.hideDialog(c.$dialog)
                            })
                        }), c.ui.onDialogHidden(c.$dialog, function () {
                            i.off("input paste keypress"), r.off("input paste keypress"), a.off("click"), "pending" === o.state() && o.reject()
                        }), c.ui.showDialog(c.$dialog)
                    }).promise()
                }, LinkDialog.prototype.show = function () {
                    var t = this, e = this.context.invoke("editor.getLinkInfo");
                    this.context.invoke("editor.saveRange"), this.showLinkDialog(e).then(function (e) {
                        t.context.invoke("editor.restoreRange"), t.context.invoke("editor.createLink", e)
                    }).fail(function () {
                        t.context.invoke("editor.restoreRange")
                    })
                }, LinkDialog
            }(), ve = function () {
                function LinkPopover(e) {
                    var t = this;
                    this.context = e, this.ui = C.summernote.ui, this.options = e.options, this.events = {
                        "summernote.keyup summernote.mouseup summernote.change summernote.scroll": function () {
                            t.update()
                        }, "summernote.disable summernote.dialog.shown": function () {
                            t.hide()
                        }
                    }
                }

                return LinkPopover.prototype.shouldInitialize = function () {
                    return !k.isEmpty(this.options.popover.link)
                }, LinkPopover.prototype.initialize = function () {
                    this.$popover = this.ui.popover({
                        className: "note-link-popover", callback: function (e) {
                            var t = e.find(".popover-content,.note-popover-content");
                            t.prepend('<span><a target="_blank"></a>&nbsp;</span>')
                        }
                    }).render().appendTo(this.options.container);
                    var e = this.$popover.find(".popover-content,.note-popover-content");
                    this.context.invoke("buttons.build", e, this.options.popover.link)
                }, LinkPopover.prototype.destroy = function () {
                    this.$popover.remove()
                }, LinkPopover.prototype.update = function () {
                    if (this.context.invoke("editor.hasFocus")) {
                        var e = this.context.invoke("editor.createRange");
                        if (e.isCollapsed() && e.isOnAnchor()) {
                            var t = j.ancestor(e.sc, j.isAnchor), n = C(t).attr("href");
                            this.$popover.find("a").attr("href", n).html(n);
                            var o = j.posFromPlaceholder(t);
                            this.$popover.css({display: "block", left: o.left, top: o.top})
                        } else this.hide()
                    } else this.hide()
                }, LinkPopover.prototype.hide = function () {
                    this.$popover.hide()
                }, LinkPopover
            }(), ye = function () {
                function ImageDialog(e) {
                    this.context = e, this.ui = C.summernote.ui, this.$body = C(document.body), this.$editor = e.layoutInfo.editor, this.options = e.options, this.lang = this.options.langInfo
                }

                return ImageDialog.prototype.initialize = function () {
                    var e = this.options.dialogsInBody ? this.$body : this.$editor, t = "";
                    if (this.options.maximumImageFileSize) {
                        var n = Math.floor(Math.log(this.options.maximumImageFileSize) / Math.log(1024)),
                            o = 1 * (this.options.maximumImageFileSize / Math.pow(1024, n)).toFixed(2) + " " + " KMGTP"[n] + "B";
                        t = "<small>" + this.lang.image.maximumFileSize + " : " + o + "</small>"
                    }
                    var i = ['<div class="form-group note-form-group note-group-select-from-files">', '<label class="note-form-label">' + this.lang.image.selectFromFiles + "</label>", '<input class="note-image-input note-form-control note-input" ', ' type="file" name="files" accept="image/*" multiple="multiple" />', t, "</div>", '<div class="form-group note-group-image-url" style="overflow:auto;">', '<label class="note-form-label">' + this.lang.image.url + "</label>", '<input class="note-image-url form-control note-form-control note-input ', ' col-md-12" type="text" />', "</div>"].join(""),
                        r = '<input type="button" href="#" class="btn btn-primary note-btn note-btn-primary note-image-btn" value="' + this.lang.image.insert + '" disabled>';
                    this.$dialog = this.ui.dialog({
                        title: this.lang.image.insert,
                        fade: this.options.dialogsFade,
                        body: i,
                        footer: r
                    }).render().appendTo(e)
                }, ImageDialog.prototype.destroy = function () {
                    this.ui.hideDialog(this.$dialog), this.$dialog.remove()
                }, ImageDialog.prototype.bindEnterKey = function (e, t) {
                    e.on("keypress", function (e) {
                        e.keyCode === X.code.ENTER && (e.preventDefault(), t.trigger("click"))
                    })
                }, ImageDialog.prototype.show = function () {
                    var t = this;
                    this.context.invoke("editor.saveRange"), this.showImageDialog().then(function (e) {
                        t.ui.hideDialog(t.$dialog), t.context.invoke("editor.restoreRange"), "string" == typeof e ? t.options.callbacks.onImageLinkInsert ? t.context.triggerEvent("image.link.insert", e) : t.context.invoke("editor.insertImage", e) : t.options.callbacks.onImageUpload ? t.context.triggerEvent("image.upload", e) : t.context.invoke("editor.insertImagesAsDataURL", e)
                    }).fail(function () {
                        t.context.invoke("editor.restoreRange")
                    })
                }, ImageDialog.prototype.showImageDialog = function () {
                    var i = this;
                    return C.Deferred(function (t) {
                        var e = i.$dialog.find(".note-image-input"), n = i.$dialog.find(".note-image-url"),
                            o = i.$dialog.find(".note-image-btn");
                        i.ui.onDialogShown(i.$dialog, function () {
                            i.context.triggerEvent("dialog.shown"), e.replaceWith(e.clone().on("change", function (e) {
                                t.resolve(e.target.files || e.target.value)
                            }).val("")), o.click(function (e) {
                                e.preventDefault(), t.resolve(n.val())
                            }), n.on("keyup paste", function () {
                                var e = n.val();
                                i.ui.toggleBtn(o, e)
                            }).val(""), E.isSupportTouch || n.trigger("focus"), i.bindEnterKey(n, o)
                        }), i.ui.onDialogHidden(i.$dialog, function () {
                            e.off("change"), n.off("keyup paste keypress"), o.off("click"), "pending" === t.state() && t.reject()
                        }), i.ui.showDialog(i.$dialog)
                    })
                }, ImageDialog
            }(), be = function () {
                function ImagePopover(e) {
                    var t = this;
                    this.context = e, this.ui = C.summernote.ui, this.editable = e.layoutInfo.editable[0], this.options = e.options, this.events = {
                        "summernote.disable": function () {
                            t.hide()
                        }
                    }
                }

                return ImagePopover.prototype.shouldInitialize = function () {
                    return !k.isEmpty(this.options.popover.image)
                }, ImagePopover.prototype.initialize = function () {
                    this.$popover = this.ui.popover({className: "note-image-popover"}).render().appendTo(this.options.container);
                    var e = this.$popover.find(".popover-content,.note-popover-content");
                    this.context.invoke("buttons.build", e, this.options.popover.image)
                }, ImagePopover.prototype.destroy = function () {
                    this.$popover.remove()
                }, ImagePopover.prototype.update = function (e) {
                    if (j.isImg(e)) {
                        var t = j.posFromPlaceholder(e), n = j.posFromPlaceholder(this.editable);
                        this.$popover.css({
                            display: "block",
                            left: this.options.popatmouse ? event.pageX - 20 : t.left,
                            top: this.options.popatmouse ? event.pageY : Math.min(t.top, n.top)
                        })
                    } else this.hide()
                }, ImagePopover.prototype.hide = function () {
                    this.$popover.hide()
                }, ImagePopover
            }(), Ce = function () {
                function TablePopover(e) {
                    var n = this;
                    this.context = e, this.ui = C.summernote.ui, this.options = e.options, this.events = {
                        "summernote.mousedown": function (e, t) {
                            n.update(t.target)
                        }, "summernote.keyup summernote.scroll summernote.change": function () {
                            n.update()
                        }, "summernote.disable": function () {
                            n.hide()
                        }
                    }
                }

                return TablePopover.prototype.shouldInitialize = function () {
                    return !k.isEmpty(this.options.popover.table)
                }, TablePopover.prototype.initialize = function () {
                    this.$popover = this.ui.popover({className: "note-table-popover"}).render().appendTo(this.options.container);
                    var e = this.$popover.find(".popover-content,.note-popover-content");
                    this.context.invoke("buttons.build", e, this.options.popover.table), E.isFF && document.execCommand("enableInlineTableEditing", !1, !1)
                }, TablePopover.prototype.destroy = function () {
                    this.$popover.remove()
                }, TablePopover.prototype.update = function (e) {
                    if (this.context.isDisabled()) return !1;
                    var t = j.isCell(e);
                    if (t) {
                        var n = j.posFromPlaceholder(e);
                        this.$popover.css({display: "block", left: n.left, top: n.top})
                    } else this.hide();
                    return t
                }, TablePopover.prototype.hide = function () {
                    this.$popover.hide()
                }, TablePopover
            }(), xe = function () {
                function VideoDialog(e) {
                    this.context = e, this.ui = C.summernote.ui, this.$body = C(document.body), this.$editor = e.layoutInfo.editor, this.options = e.options, this.lang = this.options.langInfo
                }

                return VideoDialog.prototype.initialize = function () {
                    var e = this.options.dialogsInBody ? this.$body : this.$editor,
                        t = ['<div class="form-group note-form-group row-fluid">', '<label class="note-form-label">' + this.lang.video.url + ' <small class="text-muted">' + this.lang.video.providers + "</small></label>", '<input class="note-video-url form-control note-form-control note-input" type="text" />', "</div>"].join(""),
                        n = '<input type="button" href="#" class="btn btn-primary note-btn note-btn-primary note-video-btn" value="' + this.lang.video.insert + '" disabled>';
                    this.$dialog = this.ui.dialog({
                        title: this.lang.video.insert,
                        fade: this.options.dialogsFade,
                        body: t,
                        footer: n
                    }).render().appendTo(e)
                }, VideoDialog.prototype.destroy = function () {
                    this.ui.hideDialog(this.$dialog), this.$dialog.remove()
                }, VideoDialog.prototype.bindEnterKey = function (e, t) {
                    e.on("keypress", function (e) {
                        e.keyCode === X.code.ENTER && (e.preventDefault(), t.trigger("click"))
                    })
                }, VideoDialog.prototype.createVideoNode = function (e) {
                    var t,
                        n = e.match(/\/\/(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w|-]{11})(?:(?:[\?&]t=)(\S+))?$/),
                        o = e.match(/(?:www\.|\/\/)instagram\.com\/p\/(.[a-zA-Z0-9_-]*)/),
                        i = e.match(/\/\/vine\.co\/v\/([a-zA-Z0-9]+)/),
                        r = e.match(/\/\/(player\.)?vimeo\.com\/([a-z]*\/)*(\d+)[?]?.*/),
                        a = e.match(/.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/),
                        s = e.match(/\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/),
                        l = e.match(/\/\/v\.qq\.com.*?vid=(.+)/),
                        c = e.match(/\/\/v\.qq\.com\/x?\/?(page|cover).*?\/([^\/]+)\.html\??.*/),
                        d = e.match(/^.+.(mp4|m4v)$/), u = e.match(/^.+.(ogg|ogv)$/), h = e.match(/^.+.(webm)$/);
                    if (n && 11 === n[1].length) {
                        var p = n[1], f = 0;
                        if (void 0 !== n[2]) {
                            var g = n[2].match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
                            if (g) for (var m = [3600, 60, 1], v = 0, y = m.length; v < y; v++) f += void 0 !== g[v + 1] ? m[v] * parseInt(g[v + 1], 10) : 0
                        }
                        t = C("<iframe>").attr("frameborder", 0).attr("src", "//www.youtube.com/embed/" + p + (0 < f ? "?start=" + f : "")).attr("width", "640").attr("height", "360")
                    } else if (o && o[0].length) t = C("<iframe>").attr("frameborder", 0).attr("src", "https://instagram.com/p/" + o[1] + "/embed/").attr("width", "612").attr("height", "710").attr("scrolling", "no").attr("allowtransparency", "true"); else if (i && i[0].length) t = C("<iframe>").attr("frameborder", 0).attr("src", i[0] + "/embed/simple").attr("width", "600").attr("height", "600").attr("class", "vine-embed"); else if (r && r[3].length) t = C("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder", 0).attr("src", "//player.vimeo.com/video/" + r[3]).attr("width", "640").attr("height", "360"); else if (a && a[2].length) t = C("<iframe>").attr("frameborder", 0).attr("src", "//www.dailymotion.com/embed/video/" + a[2]).attr("width", "640").attr("height", "360"); else if (s && s[1].length) t = C("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder", 0).attr("height", "498").attr("width", "510").attr("src", "//player.youku.com/embed/" + s[1]); else if (l && l[1].length || c && c[2].length) {
                        var b = l && l[1].length ? l[1] : c[2];
                        t = C("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder", 0).attr("height", "310").attr("width", "500").attr("src", "http://v.qq.com/iframe/player.html?vid=" + b + "&amp;auto=0")
                    } else {
                        if (!(d || u || h)) return !1;
                        t = C("<video controls>").attr("src", e).attr("width", "640").attr("height", "360")
                    }
                    return t.addClass("note-video-clip"), t[0]
                }, VideoDialog.prototype.show = function () {
                    var n = this, e = this.context.invoke("editor.getSelectedText");
                    this.context.invoke("editor.saveRange"), this.showVideoDialog(e).then(function (e) {
                        n.ui.hideDialog(n.$dialog), n.context.invoke("editor.restoreRange");
                        var t = n.createVideoNode(e);
                        t && n.context.invoke("editor.insertNode", t)
                    }).fail(function () {
                        n.context.invoke("editor.restoreRange")
                    })
                }, VideoDialog.prototype.showVideoDialog = function (o) {
                    var i = this;
                    return C.Deferred(function (t) {
                        var n = i.$dialog.find(".note-video-url"), e = i.$dialog.find(".note-video-btn");
                        i.ui.onDialogShown(i.$dialog, function () {
                            i.context.triggerEvent("dialog.shown"), n.val(o).on("input", function () {
                                i.ui.toggleBtn(e, n.val())
                            }), E.isSupportTouch || n.trigger("focus"), e.click(function (e) {
                                e.preventDefault(), t.resolve(n.val())
                            }), i.bindEnterKey(n, e)
                        }), i.ui.onDialogHidden(i.$dialog, function () {
                            n.off("input"), e.off("click"), "pending" === t.state() && t.reject()
                        }), i.ui.showDialog(i.$dialog)
                    })
                }, VideoDialog
            }(), we = function () {
                function HelpDialog(e) {
                    this.context = e, this.ui = C.summernote.ui, this.$body = C(document.body), this.$editor = e.layoutInfo.editor, this.options = e.options, this.lang = this.options.langInfo
                }

                return HelpDialog.prototype.initialize = function () {
                    var e = this.options.dialogsInBody ? this.$body : this.$editor,
                        t = ['<p class="text-center">', '<a href="http://summernote.org/" target="_blank">Summernote 0.8.11</a> · ', '<a href="https://github.com/summernote/summernote" target="_blank">Project</a> · ', '<a href="https://github.com/summernote/summernote/issues" target="_blank">Issues</a>', "</p>"].join("");
                    this.$dialog = this.ui.dialog({
                        title: this.lang.options.help,
                        fade: this.options.dialogsFade,
                        body: this.createShortcutList(),
                        footer: t,
                        callback: function (e) {
                            e.find(".modal-body,.note-modal-body").css({"max-height": 300, overflow: "scroll"})
                        }
                    }).render().appendTo(e)
                }, HelpDialog.prototype.destroy = function () {
                    this.ui.hideDialog(this.$dialog), this.$dialog.remove()
                }, HelpDialog.prototype.createShortcutList = function () {
                    var o = this, i = this.options.keyMap[E.isMac ? "mac" : "pc"];
                    return Object.keys(i).map(function (e) {
                        var t = i[e], n = C('<div><div class="help-list-item"/></div>');
                        return n.append(C("<label><kbd>" + e + "</kdb></label>").css({
                            width: 180,
                            "margin-right": 10
                        })).append(C("<span/>").html(o.context.memo("help." + t) || t)), n.html()
                    }).join("")
                }, HelpDialog.prototype.showHelpDialog = function () {
                    var t = this;
                    return C.Deferred(function (e) {
                        t.ui.onDialogShown(t.$dialog, function () {
                            t.context.triggerEvent("dialog.shown"), e.resolve()
                        }), t.ui.showDialog(t.$dialog)
                    }).promise()
                }, HelpDialog.prototype.show = function () {
                    var e = this;
                    this.context.invoke("editor.saveRange"), this.showHelpDialog().then(function () {
                        e.context.invoke("editor.restoreRange")
                    })
                }, HelpDialog
            }(), ke = function () {
                function AirPopover(e) {
                    var n = this;
                    this.context = e, this.ui = C.summernote.ui, this.options = e.options, this.events = {
                        "summernote.keyup summernote.mouseup summernote.scroll": function () {
                            n.update()
                        }, "summernote.disable summernote.change summernote.dialog.shown": function () {
                            n.hide()
                        }, "summernote.focusout": function (e, t) {
                            E.isFF || t.relatedTarget && j.ancestor(t.relatedTarget, x.eq(n.$popover[0])) || n.hide()
                        }
                    }
                }

                return AirPopover.prototype.shouldInitialize = function () {
                    return this.options.airMode && !k.isEmpty(this.options.popover.air)
                }, AirPopover.prototype.initialize = function () {
                    this.$popover = this.ui.popover({className: "note-air-popover"}).render().appendTo(this.options.container);
                    var e = this.$popover.find(".popover-content");
                    this.context.invoke("buttons.build", e, this.options.popover.air)
                }, AirPopover.prototype.destroy = function () {
                    this.$popover.remove()
                }, AirPopover.prototype.update = function () {
                    var e = this.context.invoke("editor.currentStyle");
                    if (e.range && !e.range.isCollapsed()) {
                        var t = k.last(e.range.getClientRects());
                        if (t) {
                            var n = x.rect2bnd(t);
                            this.$popover.css({
                                display: "block",
                                left: Math.max(n.left + n.width / 2, 0) - 20,
                                top: n.top + n.height
                            }), this.context.invoke("buttons.updateCurrentStyle", this.$popover)
                        }
                    } else this.hide()
                }, AirPopover.prototype.hide = function () {
                    this.$popover.hide()
                }, AirPopover
            }(), Se = function () {
                function HintPopover(e) {
                    var n = this;
                    this.context = e, this.ui = C.summernote.ui, this.$editable = e.layoutInfo.editable, this.options = e.options, this.hint = this.options.hint || [], this.direction = this.options.hintDirection || "bottom", this.hints = C.isArray(this.hint) ? this.hint : [this.hint], this.events = {
                        "summernote.keyup": function (e, t) {
                            t.isDefaultPrevented() || n.handleKeyup(t)
                        }, "summernote.keydown": function (e, t) {
                            n.handleKeydown(t)
                        }, "summernote.disable summernote.dialog.shown": function () {
                            n.hide()
                        }
                    }
                }

                return HintPopover.prototype.shouldInitialize = function () {
                    return 0 < this.hints.length
                }, HintPopover.prototype.initialize = function () {
                    var t = this;
                    this.lastWordRange = null, this.$popover = this.ui.popover({
                        className: "note-hint-popover",
                        hideArrow: !0,
                        direction: ""
                    }).render().appendTo(this.options.container), this.$popover.hide(), this.$content = this.$popover.find(".popover-content,.note-popover-content"), this.$content.on("click", ".note-hint-item", function (e) {
                        t.$content.find(".active").removeClass("active"), C(e.currentTarget).addClass("active"), t.replace()
                    })
                }, HintPopover.prototype.destroy = function () {
                    this.$popover.remove()
                }, HintPopover.prototype.selectItem = function (e) {
                    this.$content.find(".active").removeClass("active"), e.addClass("active"), this.$content[0].scrollTop = e[0].offsetTop - this.$content.innerHeight() / 2
                }, HintPopover.prototype.moveDown = function () {
                    var e = this.$content.find(".note-hint-item.active"), t = e.next();
                    if (t.length) this.selectItem(t); else {
                        var n = e.parent().next();
                        n.length || (n = this.$content.find(".note-hint-group").first()), this.selectItem(n.find(".note-hint-item").first())
                    }
                }, HintPopover.prototype.moveUp = function () {
                    var e = this.$content.find(".note-hint-item.active"), t = e.prev();
                    if (t.length) this.selectItem(t); else {
                        var n = e.parent().prev();
                        n.length || (n = this.$content.find(".note-hint-group").last()), this.selectItem(n.find(".note-hint-item").last())
                    }
                }, HintPopover.prototype.replace = function () {
                    var e = this.$content.find(".note-hint-item.active");
                    if (e.length) {
                        var t = this.nodeFromItem(e);
                        this.lastWordRange.insertNode(t), _.createFromNode(t).collapse().select(), this.lastWordRange = null, this.hide(), this.context.triggerEvent("change", this.$editable.html(), this.$editable[0]), this.context.invoke("editor.focus")
                    }
                }, HintPopover.prototype.nodeFromItem = function (e) {
                    var t = this.hints[e.data("index")], n = e.data("item"), o = t.content ? t.content(n) : n;
                    return "string" == typeof o && (o = j.createText(o)), o
                }, HintPopover.prototype.createItemTemplates = function (o, e) {
                    var i = this.hints[o];
                    return e.map(function (e, t) {
                        var n = C('<div class="note-hint-item"/>');
                        return n.append(i.template ? i.template(e) : e + ""), n.data({index: o, item: e}), n
                    })
                }, HintPopover.prototype.handleKeydown = function (e) {
                    this.$popover.is(":visible") && (e.keyCode === X.code.ENTER ? (e.preventDefault(), this.replace()) : e.keyCode === X.code.UP ? (e.preventDefault(), this.moveUp()) : e.keyCode === X.code.DOWN && (e.preventDefault(), this.moveDown()))
                }, HintPopover.prototype.searchKeyword = function (e, t, n) {
                    var o = this.hints[e];
                    if (o && o.match.test(t) && o.search) {
                        var i = o.match.exec(t);
                        o.search(i[1], n)
                    } else n()
                }, HintPopover.prototype.createGroup = function (t, e) {
                    var n = this, o = C('<div class="note-hint-group note-hint-group-' + t + '"/>');
                    return this.searchKeyword(t, e, function (e) {
                        (e = e || []).length && (o.html(n.createItemTemplates(t, e)), n.show())
                    }), o
                }, HintPopover.prototype.handleKeyup = function (e) {
                    var n = this;
                    if (!k.contains([X.code.ENTER, X.code.UP, X.code.DOWN], e.keyCode)) {
                        var t = this.context.invoke("editor.createRange").getWordRange(), o = t.toString();
                        if (this.hints.length && o) {
                            this.$content.empty();
                            var i = x.rect2bnd(k.last(t.getClientRects()));
                            i && (this.$popover.hide(), this.lastWordRange = t, this.hints.forEach(function (e, t) {
                                e.match.test(o) && n.createGroup(t, o).appendTo(n.$content)
                            }), this.$content.find(".note-hint-item:first").addClass("active"), "top" === this.direction ? this.$popover.css({
                                left: i.left,
                                top: i.top - this.$popover.outerHeight() - 5
                            }) : this.$popover.css({left: i.left, top: i.top + i.height + 5}))
                        } else this.hide()
                    }
                }, HintPopover.prototype.show = function () {
                    this.$popover.show()
                }, HintPopover.prototype.hide = function () {
                    this.$popover.hide()
                }, HintPopover
            }(), Le = function () {
                function Context(e, t) {
                    this.ui = C.summernote.ui, this.$note = e, this.memos = {}, this.modules = {}, this.layoutInfo = {}, this.options = t, this.initialize()
                }

                return Context.prototype.initialize = function () {
                    return this.layoutInfo = this.ui.createLayout(this.$note, this.options), this._initialize(), this.$note.hide(), this
                }, Context.prototype.destroy = function () {
                    this._destroy(), this.$note.removeData("summernote"), this.ui.removeLayout(this.$note, this.layoutInfo)
                }, Context.prototype.reset = function () {
                    var e = this.isDisabled();
                    this.code(j.emptyPara), this._destroy(), this._initialize(), e && this.disable()
                }, Context.prototype._initialize = function () {
                    var t = this, n = C.extend({}, this.options.buttons);
                    Object.keys(n).forEach(function (e) {
                        t.memo("button." + e, n[e])
                    });
                    var o = C.extend({}, this.options.modules, C.summernote.plugins || {});
                    Object.keys(o).forEach(function (e) {
                        t.module(e, o[e], !0)
                    }), Object.keys(this.modules).forEach(function (e) {
                        t.initializeModule(e)
                    })
                }, Context.prototype._destroy = function () {
                    var t = this;
                    Object.keys(this.modules).reverse().forEach(function (e) {
                        t.removeModule(e)
                    }), Object.keys(this.memos).forEach(function (e) {
                        t.removeMemo(e)
                    }), this.triggerEvent("destroy", this)
                }, Context.prototype.code = function (e) {
                    var t = this.invoke("codeview.isActivated");
                    if (void 0 === e) return this.invoke("codeview.sync"), t ? this.layoutInfo.codable.val() : this.layoutInfo.editable.html();
                    t ? this.layoutInfo.codable.val(e) : this.layoutInfo.editable.html(e), this.$note.val(e), this.triggerEvent("change", e)
                }, Context.prototype.isDisabled = function () {
                    return "false" === this.layoutInfo.editable.attr("contenteditable")
                }, Context.prototype.enable = function () {
                    this.layoutInfo.editable.attr("contenteditable", !0), this.invoke("toolbar.activate", !0), this.triggerEvent("disable", !1)
                }, Context.prototype.disable = function () {
                    this.invoke("codeview.isActivated") && this.invoke("codeview.deactivate"), this.layoutInfo.editable.attr("contenteditable", !1), this.invoke("toolbar.deactivate", !0), this.triggerEvent("disable", !0)
                }, Context.prototype.triggerEvent = function () {
                    var e = k.head(arguments), t = k.tail(k.from(arguments)),
                        n = this.options.callbacks[x.namespaceToCamel(e, "on")];
                    n && n.apply(this.$note[0], t), this.$note.trigger("summernote." + e, t)
                }, Context.prototype.initializeModule = function (e) {
                    var t = this.modules[e];
                    t.shouldInitialize = t.shouldInitialize || x.ok, t.shouldInitialize() && (t.initialize && t.initialize(), t.events && j.attachEvents(this.$note, t.events))
                }, Context.prototype.module = function (e, t, n) {
                    if (1 === arguments.length) return this.modules[e];
                    this.modules[e] = new t(this), n || this.initializeModule(e)
                }, Context.prototype.removeModule = function (e) {
                    var t = this.modules[e];
                    t.shouldInitialize() && (t.events && j.detachEvents(this.$note, t.events), t.destroy && t.destroy()), delete this.modules[e]
                }, Context.prototype.memo = function (e, t) {
                    if (1 === arguments.length) return this.memos[e];
                    this.memos[e] = t
                }, Context.prototype.removeMemo = function (e) {
                    this.memos[e] && this.memos[e].destroy && this.memos[e].destroy(), delete this.memos[e]
                }, Context.prototype.createInvokeHandlerAndUpdateState = function (t, n) {
                    var o = this;
                    return function (e) {
                        o.createInvokeHandler(t, n)(e), o.invoke("buttons.updateCurrentStyle")
                    }
                }, Context.prototype.createInvokeHandler = function (n, o) {
                    var i = this;
                    return function (e) {
                        e.preventDefault();
                        var t = C(e.target);
                        i.invoke(n, o || t.closest("[data-value]").data("value"), t)
                    }
                }, Context.prototype.invoke = function () {
                    var e = k.head(arguments), t = k.tail(k.from(arguments)), n = e.split("."), o = 1 < n.length,
                        i = o && k.head(n), r = o ? k.last(n) : k.head(n), a = this.modules[i || "editor"];
                    return !i && this[r] ? this[r].apply(this, t) : a && a[r] && a.shouldInitialize() ? a[r].apply(a, t) : void 0
                }, Context
            }();
            C.fn.extend({
                summernote: function () {
                    var e = C.type(k.head(arguments)), t = "string" === e, n = "object" === e,
                        i = C.extend({}, C.summernote.options, n ? k.head(arguments) : {});
                    i.langInfo = C.extend(!0, {}, C.summernote.lang["en-US"], C.summernote.lang[i.lang]), i.icons = C.extend(!0, {}, C.summernote.options.icons, i.icons), i.tooltip = "auto" === i.tooltip ? !E.isSupportTouch : i.tooltip, this.each(function (e, t) {
                        var n = C(t);
                        if (!n.data("summernote")) {
                            var o = new Le(n, i);
                            n.data("summernote", o), n.data("summernote").triggerEvent("init", o.layoutInfo)
                        }
                    });
                    var o = this.first();
                    if (o.length) {
                        var r = o.data("summernote");
                        if (t) return r.invoke.apply(r, k.from(arguments));
                        i.focus && r.invoke("editor.focus")
                    }
                    return this
                }
            }), C.summernote = C.extend(C.summernote, {
                version: "0.8.11", ui: y, dom: j, range: _, plugins: {}, options: {
                    modules: {
                        editor: oe,
                        clipboard: ie,
                        dropzone: re,
                        codeview: ae,
                        statusbar: se,
                        fullscreen: le,
                        handle: ce,
                        hintPopover: Se,
                        autoLink: ue,
                        autoSync: he,
                        placeholder: pe,
                        buttons: fe,
                        toolbar: ge,
                        linkDialog: me,
                        linkPopover: ve,
                        imageDialog: ye,
                        imagePopover: be,
                        tablePopover: Ce,
                        videoDialog: xe,
                        helpDialog: we,
                        airPopover: ke
                    },
                    buttons: {},
                    lang: "en-US",
                    followingToolbar: !0,
                    otherStaticBar: "",
                    toolbar: [["style", ["style"]], ["font", ["bold", "underline", "clear"]], ["fontname", ["fontname"]], ["color", ["color"]], ["para", ["ul", "ol", "paragraph"]], ["table", ["table"]], ["insert", ["link", "picture", "video"]], ["view", ["fullscreen", "codeview", "help"]]],
                    popatmouse: !0,
                    popover: {
                        image: [["imagesize", ["imageSize100", "imageSize50", "imageSize25"]], ["float", ["floatLeft", "floatRight", "floatNone"]], ["remove", ["removeMedia"]]],
                        link: [["link", ["linkDialogShow", "unlink"]]],
                        table: [["add", ["addRowDown", "addRowUp", "addColLeft", "addColRight"]], ["delete", ["deleteRow", "deleteCol", "deleteTable"]]],
                        air: [["color", ["color"]], ["font", ["bold", "underline", "clear"]], ["para", ["ul", "paragraph"]], ["table", ["table"]], ["insert", ["link", "picture"]]]
                    },
                    airMode: !1,
                    width: null,
                    height: null,
                    linkTargetBlank: !0,
                    focus: !1,
                    tabSize: 4,
                    styleWithSpan: !0,
                    shortcuts: !0,
                    textareaAutoSync: !0,
                    hintDirection: "bottom",
                    tooltip: "auto",
                    container: "body",
                    maxTextLength: 0,
                    blockquoteBreakingLevel: 2,
                    styleTags: ["p", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5", "h6"],
                    fontNames: ["Arial", "Arial Black", "Comic Sans MS", "Courier New", "Helvetica Neue", "Helvetica", "Impact", "Lucida Grande", "Tahoma", "Times New Roman", "Verdana"],
                    fontSizes: ["8", "9", "10", "11", "12", "14", "18", "24", "36"],
                    colors: [["#000000", "#424242", "#636363", "#9C9C94", "#CEC6CE", "#EFEFEF", "#F7F7F7", "#FFFFFF"], ["#FF0000", "#FF9C00", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#9C00FF", "#FF00FF"], ["#F7C6CE", "#FFE7CE", "#FFEFC6", "#D6EFD6", "#CEDEE7", "#CEE7F7", "#D6D6E7", "#E7D6DE"], ["#E79C9C", "#FFC69C", "#FFE79C", "#B5D6A5", "#A5C6CE", "#9CC6EF", "#B5A5D6", "#D6A5BD"], ["#E76363", "#F7AD6B", "#FFD663", "#94BD7B", "#73A5AD", "#6BADDE", "#8C7BC6", "#C67BA5"], ["#CE0000", "#E79439", "#EFC631", "#6BA54A", "#4A7B8C", "#3984C6", "#634AA5", "#A54A7B"], ["#9C0000", "#B56308", "#BD9400", "#397B21", "#104A5A", "#085294", "#311873", "#731842"], ["#630000", "#7B3900", "#846300", "#295218", "#083139", "#003163", "#21104A", "#4A1031"]],
                    colorsName: [["Black", "Tundora", "Dove Gray", "Star Dust", "Pale Slate", "Gallery", "Alabaster", "White"], ["Red", "Orange Peel", "Yellow", "Green", "Cyan", "Blue", "Electric Violet", "Magenta"], ["Azalea", "Karry", "Egg White", "Zanah", "Botticelli", "Tropical Blue", "Mischka", "Twilight"], ["Tonys Pink", "Peach Orange", "Cream Brulee", "Sprout", "Casper", "Perano", "Cold Purple", "Careys Pink"], ["Mandy", "Rajah", "Dandelion", "Olivine", "Gulf Stream", "Viking", "Blue Marguerite", "Puce"], ["Guardsman Red", "Fire Bush", "Golden Dream", "Chelsea Cucumber", "Smalt Blue", "Boston Blue", "Butterfly Bush", "Cadillac"], ["Sangria", "Mai Tai", "Buddha Gold", "Forest Green", "Eden", "Venice Blue", "Meteorite", "Claret"], ["Rosewood", "Cinnamon", "Olive", "Parsley", "Tiber", "Midnight Blue", "Valentino", "Loulou"]],
                    lineHeights: ["1.0", "1.2", "1.4", "1.5", "1.6", "1.8", "2.0", "3.0"],
                    tableClassName: "table table-bordered",
                    insertTableMaxSize: {col: 10, row: 10},
                    dialogsInBody: !1,
                    dialogsFade: !1,
                    maximumImageFileSize: null,
                    callbacks: {
                        onInit: null,
                        onFocus: null,
                        onBlur: null,
                        onBlurCodeview: null,
                        onEnter: null,
                        onKeyup: null,
                        onKeydown: null,
                        onImageUpload: null,
                        onImageUploadError: null,
                        onImageLinkInsert: null
                    },
                    codemirror: {mode: "text/html", htmlMode: !0, lineNumbers: !0},
                    keyMap: {
                        pc: {
                            ENTER: "insertParagraph",
                            "CTRL+Z": "undo",
                            "CTRL+Y": "redo",
                            TAB: "tab",
                            "SHIFT+TAB": "untab",
                            "CTRL+B": "bold",
                            "CTRL+I": "italic",
                            "CTRL+U": "underline",
                            "CTRL+SHIFT+S": "strikethrough",
                            "CTRL+BACKSLASH": "removeFormat",
                            "CTRL+SHIFT+L": "justifyLeft",
                            "CTRL+SHIFT+E": "justifyCenter",
                            "CTRL+SHIFT+R": "justifyRight",
                            "CTRL+SHIFT+J": "justifyFull",
                            "CTRL+SHIFT+NUM7": "insertUnorderedList",
                            "CTRL+SHIFT+NUM8": "insertOrderedList",
                            "CTRL+LEFTBRACKET": "outdent",
                            "CTRL+RIGHTBRACKET": "indent",
                            "CTRL+NUM0": "formatPara",
                            "CTRL+NUM1": "formatH1",
                            "CTRL+NUM2": "formatH2",
                            "CTRL+NUM3": "formatH3",
                            "CTRL+NUM4": "formatH4",
                            "CTRL+NUM5": "formatH5",
                            "CTRL+NUM6": "formatH6",
                            "CTRL+ENTER": "insertHorizontalRule",
                            "CTRL+K": "linkDialog.show"
                        },
                        mac: {
                            ENTER: "insertParagraph",
                            "CMD+Z": "undo",
                            "CMD+SHIFT+Z": "redo",
                            TAB: "tab",
                            "SHIFT+TAB": "untab",
                            "CMD+B": "bold",
                            "CMD+I": "italic",
                            "CMD+U": "underline",
                            "CMD+SHIFT+S": "strikethrough",
                            "CMD+BACKSLASH": "removeFormat",
                            "CMD+SHIFT+L": "justifyLeft",
                            "CMD+SHIFT+E": "justifyCenter",
                            "CMD+SHIFT+R": "justifyRight",
                            "CMD+SHIFT+J": "justifyFull",
                            "CMD+SHIFT+NUM7": "insertUnorderedList",
                            "CMD+SHIFT+NUM8": "insertOrderedList",
                            "CMD+LEFTBRACKET": "outdent",
                            "CMD+RIGHTBRACKET": "indent",
                            "CMD+NUM0": "formatPara",
                            "CMD+NUM1": "formatH1",
                            "CMD+NUM2": "formatH2",
                            "CMD+NUM3": "formatH3",
                            "CMD+NUM4": "formatH4",
                            "CMD+NUM5": "formatH5",
                            "CMD+NUM6": "formatH6",
                            "CMD+ENTER": "insertHorizontalRule",
                            "CMD+K": "linkDialog.show"
                        }
                    },
                    icons: {
                        align: "note-icon-align",
                        alignCenter: "note-icon-align-center",
                        alignJustify: "note-icon-align-justify",
                        alignLeft: "note-icon-align-left",
                        alignRight: "note-icon-align-right",
                        rowBelow: "note-icon-row-below",
                        colBefore: "note-icon-col-before",
                        colAfter: "note-icon-col-after",
                        rowAbove: "note-icon-row-above",
                        rowRemove: "note-icon-row-remove",
                        colRemove: "note-icon-col-remove",
                        indent: "note-icon-align-indent",
                        outdent: "note-icon-align-outdent",
                        arrowsAlt: "note-icon-arrows-alt",
                        bold: "note-icon-bold",
                        caret: "note-icon-caret",
                        circle: "note-icon-circle",
                        close: "note-icon-close",
                        code: "note-icon-code",
                        eraser: "note-icon-eraser",
                        font: "note-icon-font",
                        frame: "note-icon-frame",
                        italic: "note-icon-italic",
                        link: "note-icon-link",
                        unlink: "note-icon-chain-broken",
                        magic: "note-icon-magic",
                        menuCheck: "note-icon-menu-check",
                        minus: "note-icon-minus",
                        orderedlist: "note-icon-orderedlist",
                        pencil: "note-icon-pencil",
                        picture: "note-icon-picture",
                        question: "note-icon-question",
                        redo: "note-icon-redo",
                        square: "note-icon-square",
                        strikethrough: "note-icon-strikethrough",
                        subscript: "note-icon-subscript",
                        superscript: "note-icon-superscript",
                        table: "note-icon-table",
                        textHeight: "note-icon-text-height",
                        trash: "note-icon-trash",
                        underline: "note-icon-underline",
                        undo: "note-icon-undo",
                        unorderedlist: "note-icon-unorderedlist",
                        video: "note-icon-video"
                    }
                }
            })
        }(Te(0))
    }, 265: function (t, e) {
        (function (e) {
            t.exports = e
        }).call(this, {})
    }, 266: function (e, t, n) {
    }
}, [[261, 0]]]);