(window.webpackJsonp = window.webpackJsonp || []).push([[17], {
    338: function (e, n, r) {
        "use strict";
        r.r(n);
        var t = r(0), o = r.n(t);
        r(6), r(12);
        !function () {
            function errorPlacementInput(e, n) {
                n.parent().is(".mda-form-control") ? e.insertAfter(n.parent()) : n.is(":radio") || n.is(":checkbox") ? e.insertAfter(n.parent()) : e.insertAfter(n)
            }

            o()(function () {
                o()("#user-lock").validate({
                    errorPlacement: errorPlacementInput,
                    rules: {accountName: {required: !0, email: !0}},
                    submitHandler: function () {
                        console.log("Form submitted!"), window.location.href = "dashboard.html"
                    }
                })
            })
        }()
    }
}, [[338, 0]]]);