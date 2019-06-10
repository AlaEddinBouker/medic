(window.webpackJsonp = window.webpackJsonp || []).push([[25], {
    341: function (e, r, n) {
        "use strict";
        n.r(r);
        var o = n(0), t = n.n(o);
        n(6), n(12);
        !function () {
            function errorPlacementInput(e, r) {
                r.parent().is(".mda-form-control") ? e.insertAfter(r.parent()) : r.is(":radio") || r.is(":checkbox") ? e.insertAfter(r.parent()) : e.insertAfter(r)
            }

            t()(function () {
                t()("#user-signup").validate({
                    errorPlacement: errorPlacementInput,
                    rules: {
                        accountName: {required: !0, email: !0},
                        accountPassword: {required: !0},
                        accountPasswordCheck: {required: !0, equalTo: "#account-password"}
                    },
                    submitHandler: function () {
                        console.log("Form submitted!"), t()("#form-ok").hide().removeClass("invisible").show(500)
                    }
                })
            })
        }()
    }
}, [[341, 0]]]);