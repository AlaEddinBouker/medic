(window.webpackJsonp = window.webpackJsonp || []).push([[23], {
    340: function (e, r, n) {
        "use strict";
        n.r(r);
        var o = n(0), t = n.n(o);
        n(6), n(12);
        !function () {
            function errorPlacementInput(e, r) {
                r.parent().is(".mda-form-control") ? e.insertAfter(r.parent()) : r.is(":radio") || r.is(":checkbox") ? e.insertAfter(r.parent()) : e.insertAfter(r)
            }

            t()(function () {
                var e = t()("#user-recover");
                e.validate({
                    errorPlacement: errorPlacementInput,
                    rules: {accountName: {required: !0, email: !0}},
                    submitHandler: function () {
                        console.log("Form submitted!"), e.hide(), t()("#confirmation").hide().removeClass("d-none").show(500)
                    }
                })
            })
        }()
    }
}, [[340, 0]]]);