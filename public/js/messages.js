(window.webpackJsonp = window.webpackJsonp || []).push([[19], {
    316: function (o, n, c) {
        "use strict";
        c.r(n);
        var a = c(0), s = c.n(a);
        s()(function () {
            s()(".msg-display").each(function () {
                var o = s()(this);
                o.on("click", function (o) {
                    s()(o.target).is(".dropdown") || 0 < s()(o.target).parents(".dropdown").length || s()(".modal-message").modal()
                })
            }), s()("#compose").on("click", function () {
                s()(".modal-compose").modal()
            })
        })
    }
}, [[316, 0]]]);