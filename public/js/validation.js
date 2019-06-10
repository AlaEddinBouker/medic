(window.webpackJsonp = window.webpackJsonp || []).push([[29], {
    285: function (e, r, i) {
        "use strict";
        i.r(r);
        var n = i(0), t = i.n(n);
        i(6), i(12), i(286);
        !function () {
            function errorPlacementInput(e, r) {
                r.parent().parent().is(".mda-input-group") ? e.insertAfter(r.parent().parent()) : r.parent().is(".mda-form-control") ? e.insertAfter(r.parent()) : r.is(":radio") || r.is(":checkbox") ? e.insertAfter(r.parent()) : e.insertAfter(r)
            }

            t()(function () {
                t.a.fn.validate && t()("#form-register").validate({
                    errorPlacement: errorPlacementInput,
                    rules: {
                        email: {required: !0, email: !0},
                        password1: {required: !0},
                        confirm_match: {required: !0, equalTo: "#id-password"}
                    }
                });
                t()("#form-login").validate({
                    errorPlacement: errorPlacementInput,
                    rules: {loginemail: {required: !0, email: !0}, loginpassword: {required: !0}}
                }), t()("#form-subscribe").validate({
                    errorPlacement: errorPlacementInput,
                    rules: {feedemail: {required: !0, email: !0}}
                }), t()("#form-example").validate({
                    errorPlacement: errorPlacementInput,
                    rules: {
                        sometext: {required: !0},
                        email: {required: !0, email: !0},
                        digits: {required: !0, digits: !0},
                        url: {required: !0, url: !0},
                        min: {required: !0, min: 6},
                        max: {required: !0, max: 6},
                        minlength: {required: !0, minlength: 6},
                        maxlength: {required: !0, maxlength: 10},
                        length: {required: !0, range: [6, 10]},
                        match1: {required: !0},
                        confirm_match: {required: !0, equalTo: "#id-source"}
                    }
                })
            })
        }()
    }, 286: function (e, r, i) {
    }
}, [[285, 0]]]);