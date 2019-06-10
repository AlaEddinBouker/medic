(window.webpackJsonp = window.webpackJsonp || []).push([[18], {
    339: function (e, r, n) {
        "use strict";
        n.r(r);
        var t = n(0), o = n.n(t);
        n(6), n(12);
        !function () {
            function errorPlacementInput(e, r) {
                r.parent().is(".mda-form-control") ? e.insertAfter(r.parent()) : r.is(":radio") || r.is(":checkbox") ? e.insertAfter(r.parent()) : e.insertAfter(r)
            }

            o()(function () {
                o()("#user-login").validate({
                    errorPlacement: errorPlacementInput,
                    rules: {accountName: {required: !0, email: !0}, accountPassword: {required: !0}},
                    submitHandler: function () {
                        console.log("Form submitted!")
                    }
                })
            })
        }()
    }
}, [[339, 0]]]);