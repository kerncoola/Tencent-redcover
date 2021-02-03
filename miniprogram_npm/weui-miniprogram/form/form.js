function e(e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}

var r = function() {
    function e(e, r) {
        for (var t = 0; t < r.length; t++) {
            var u = r[t];
            u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), 
            Object.defineProperty(e, u.key, u);
        }
    }
    return function(r, t, u) {
        return t && e(r.prototype, t), u && e(r, u), r;
    };
}(), t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

module.exports = function(e) {
    function r(t) {
        if (u[t]) return u[t].exports;
        var n = u[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, r), n.l = !0, n.exports;
    }
    var u = {};
    return r.m = e, r.c = u, r.d = function(e, t, u) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: u
        });
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, r.t = function(e, u) {
        if (1 & u && (e = r(e)), 8 & u) return e;
        if (4 & u && "object" === (void 0 === e ? "undefined" : t(e)) && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & u && "string" != typeof e) for (var a in e) r.d(n, a, function(r) {
            return e[r];
        }.bind(null, a));
        return n;
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return r.d(t, "a", t), t;
    }, r.o = function(e, r) {
        return Object.prototype.hasOwnProperty.call(e, r);
    }, r.p = "", r(r.s = 4);
}([ function(e, r, t) {
    r.__esModule = !0, r.diffObject = r.diff = void 0;
    r.diff = function(e, r) {
        if (!e && r || e && !r) return !0;
        for (var t in r) if (e[t] !== r[t]) return !0;
        for (var u in e) if (e[u] !== r[u]) return !0;
        return !1;
    };
    r.diffObject = function(e, r) {
        if (!e && r) return r;
        if (!r && e) return e;
        var t = {}, u = !1;
        for (var n in r) e[n] !== r[n] && (u = !0, t[n] = r[n]);
        for (var a in e) e[a] !== r[a] && (u = !0, t[a] = r[a]);
        return u ? t : null;
    };
}, , , , function(e, r, t) {
    function u(e) {
        e.data.prop && (this.data.formItems[e.data.prop] = e), e.setInForm && e.setInForm(), 
        this.data.firstItem || (this.data.firstItem = e);
    }
    function n(e) {
        e.data.prop && delete this.data.formItems[e.data.prop];
    }
    r.__esModule = !0, r.default = void 0;
    var a = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(t(5)), i = t(0);
    Component({
        properties: {
            models: {
                type: Object,
                value: {},
                observer: "_modelChange"
            },
            rules: {
                type: Array,
                value: [],
                observer: "_rulesChange"
            },
            extClass: {
                type: String,
                value: ""
            }
        },
        data: {
            errors: {},
            formItems: {},
            firstItem: null
        },
        relations: {
            "../cell/cell": {
                type: "descendant",
                linked: u,
                unlinked: n
            },
            "../checkbox-group/checkbox-group": {
                type: "descendant",
                linked: u,
                unlinked: n
            }
        },
        attached: function() {
            this.initRules(), this.formValidator = new a.default(this.data.models, this.data.newRules);
        },
        methods: {
            initRules: function(e) {
                var r = {};
                return (e || this.data.rules).forEach(function(e) {
                    e.name && e.rules && (r[e.name] = e.rules || []);
                }), this.setData({
                    newRules: r
                }), r;
            },
            _modelChange: function(e, r) {
                var t = this;
                if (!this.formValidator) return e;
                this.formValidator.setModel(e);
                var u = (0, i.diffObject)(r, e);
                if (u) {
                    var n = !0, a = [], o = {};
                    Object.keys(u).forEach(function(e) {
                        t.formValidator.validateField(e, u[e], function(r, t) {
                            t && t[e] && (a.push(t[e]), o[e] = t[e]), n = r;
                        });
                    }), this._showErrors(u, o), this.triggerEvent(n ? "success" : "fail", n ? {
                        trigger: "change"
                    } : {
                        errors: a,
                        trigger: "change"
                    });
                }
                return e;
            },
            _rulesChange: function(e) {
                var r = this.initRules(e);
                return this.formValidator && this.formValidator.setRules(r), e;
            },
            _showAllErrors: function(e) {
                var r = this;
                Object.keys(this.data.newRules).forEach(function(t) {
                    r._showError(t, e && e[t]);
                });
            },
            _showErrors: function(e, r) {
                var t = this;
                Object.keys(e).forEach(function(e) {
                    t._showError(e, r && r[e]);
                });
            },
            _showError: function(e, r) {
                var t = this.data.formItems[e];
                t && t.data.showError && t.setError(r);
            },
            validate: function(e) {
                var r = this;
                return this.formValidator.validate(function(t, u) {
                    r._showAllErrors(u);
                    var n = r.handleErrors(u);
                    r.triggerEvent(t ? "success" : "fail", t ? {
                        trigger: "validate"
                    } : {
                        errors: n,
                        trigger: "validate"
                    }), e && e(t, n);
                });
            },
            validateField: function(e, r) {
                var t = this, u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function(e) {
                    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                };
                return this.formValidator.validateField(e, r, function(r, n) {
                    t._showError(e, n);
                    var a = t.handleErrors(n);
                    t.triggerEvent(r ? "success" : "fail", r ? {
                        trigger: "validate"
                    } : {
                        errors: a,
                        trigger: "validate"
                    }), u && u(r, a);
                });
            },
            handleErrors: function(e) {
                if (e) {
                    var r = [];
                    return this.data.rules.forEach(function(t) {
                        e[t.name] && (e[t.name].name = t.name, r.push(e[t.name]));
                    }), r;
                }
                return e;
            },
            addMethod: function(e, r) {
                return this.formValidator.addMethod(e, r);
            }
        }
    });
    var o = a.default;
    r.default = o;
}, function(t, u, n) {
    function a(e, r, t) {
        return r in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t, e;
    }
    u.__esModule = !0, u.default = void 0;
    var i = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(n(6)), o = n(0), F = Object.prototype.toString, s = function(e, r) {
        for (var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, n = "", a = Object.keys(e), o = 0, F = a.length; o < F; ++o) {
            var s = a[o];
            if ("name" !== s && "message" !== s) {
                var l = void 0 !== e.validator ? e.validator : i.default[s];
                if ("function" == typeof l && (n = l(e, r, t, u))) return n;
            }
        }
        return n;
    }, l = function() {
        function t(r, u) {
            e(this, t), a(this, "models", void 0), a(this, "rules", void 0), a(this, "errors", void 0), 
            this.models = r, this.rules = u, this.errors = {};
        }
        return r(t, [ {
            key: "validate",
            value: function(e) {
                var r = this;
                return new Promise(function(t) {
                    var u = 0, n = r.errors, a = r.models, i = !1;
                    Object.keys(r.rules).forEach(function(e) {
                        var t = n[e];
                        r._innerValidateField(e, a[e], function(r, a) {
                            r || u++, (0, o.diff)(t, a) && (n[e] = a, i = !0);
                        });
                    }), Object.keys(n).forEach(function(e) {
                        n[e] || delete n[e];
                    }), t({
                        isValid: !u,
                        errors: u ? n : void 0
                    }), e && e(!u, u ? n : void 0);
                });
            }
        }, {
            key: "validateField",
            value: function(e, r, t) {
                var u = this;
                return new Promise(function(n) {
                    u._innerValidateField(e, r, function(r, a) {
                        var i = {};
                        i[e] = a, n({
                            valid: r,
                            error: r ? void 0 : a
                        }), t && t(r, r ? void 0 : i);
                        var F = u.errors[e];
                        (0, o.diff)(F, a) && (a || delete u.errors[e], u.errors[e] = a);
                    });
                });
            }
        }, {
            key: "_innerValidateField",
            value: function(e, r, t) {
                var u = this.rules[e];
                if (!u) return console.warn("[form-validator] rule name " + e + " not exists."), 
                void t(!0);
                "function" == typeof r && (t = r, r = void 0);
                var n = !1, a = this.models;
                if ("[object Array]" === F.call(u)) u.forEach(function(u) {
                    u.name = e;
                    var i = s(u, r || a[e], u.param, a);
                    i && !n && (n = !0, t(!1, i ? {
                        message: i,
                        rule: u
                    } : void 0));
                }), n || t(!n); else {
                    var i = u;
                    i.name = e;
                    var o = s(i, r || a[e], i.param, a), l = o ? {
                        message: o,
                        rule: i
                    } : void 0;
                    o && (n = !0), t(!n, l);
                }
            }
        }, {
            key: "setModel",
            value: function(e) {
                this.models = e;
            }
        }, {
            key: "setRules",
            value: function(e) {
                this.rules = e;
            }
        } ], [ {
            key: "addMethod",
            value: function(e, r) {
                i.default[e] = r;
            }
        } ]), t;
    }();
    u.default = l;
}, function(e, r, t) {
    r.__esModule = !0, r.default = void 0;
    var u = t(7), n = {
        required: "%s必填",
        minlength: "长度最少为%s",
        maxlength: "长度最大为%s",
        rangelength: "长度在%s和%s之间",
        bytelength: "最多只能输入%s个字",
        min: "值最小为%s",
        max: "值最大为%s",
        range: "值的范围为%s和%s之间",
        mobile: "请输入正确的手机号",
        email: "请输入正确的电子邮件",
        url: "请输入正确的URL地址",
        equalTo: "值和字段%s不相等"
    }, a = function(e) {
        return 0 !== e && !1 !== e && !e;
    }, i = {
        required: function(e, r) {
            return !1 === e.required ? "" : a(r) ? (0, u.sprintf)(e.message || n.required, e.name) : "";
        },
        minlength: function(e, r) {
            var t = e.minlength;
            return (r = r || "").length < t ? (0, u.sprintf)(e.message || n.minlength, t) : "";
        },
        maxlength: function(e, r) {
            var t = e.maxlength;
            return (r = r || "").length > t ? (0, u.sprintf)(e.message || n.maxlength, t) : "";
        },
        rangelength: function(e, r) {
            var t = e.rangelength;
            return (r = r || "").length > t[1] || r.length < t[0] ? (0, u.sprintf)(e.message || n.rangelength, t[0], t[1]) : "";
        },
        min: function(e, r) {
            var t = e.min;
            return r < t ? (0, u.sprintf)(e.message || n.min, t) : "";
        },
        max: function(e, r) {
            var t = e.max;
            return r > t ? (0, u.sprintf)(e.message || n.max, t) : "";
        },
        range: function(e, r) {
            var t = e.range;
            return r < t[0] || r > t[1] ? (0, u.sprintf)(e.message || n.range, t[0], t[1]) : "";
        },
        mobile: function(e, r) {
            return r = r || "", !1 === e.mobile ? "" : 11 !== r.length ? (0, u.sprintf)(e.message || n.mobile) : "";
        },
        email: function(e, r) {
            return !1 === e.email ? "" : /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(r) ? "" : (0, 
            u.sprintf)(e.message || n.email);
        },
        url: function(e, r) {
            return !1 === e.url ? "" : /^(https?|s?ftp|weixin):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(r) ? "" : e.message || n.url;
        },
        equalTo: function(e, r, t, a) {
            var i = e.equalTo;
            return r !== a[i] ? (0, u.sprintf)(e.message || n.equalTo, e.name) : "";
        },
        bytelength: function(e, r, t) {
            return t = e.param, (r = r || "").replace(/[^\x00-\xff]/g, "**").length > t ? (0, 
            u.sprintf)(e.message || n.bytelength, t) : "";
        }
    };
    r.default = i;
}, function(e, r, t) {
    r.__esModule = !0, r.sprintf = void 0;
    r.sprintf = function() {
        for (var e = arguments.length, r = Array(e), t = 0; t < e; t++) r[t] = arguments[t];
        var u = void 0, n = r[0] || "", a = void 0, i = void 0, o = r.length - 1;
        if (o < 1) return n;
        for (u = 1; u < o + 1; ) n = n.replace(/%s/, "{#" + u + "#}"), u++;
        for (n.replace("%s", ""), u = 1; void 0 !== (a = r[u]); ) i = new RegExp("{#" + u + "#}", "g"), 
        n = n.replace(i, a), u++;
        return n;
    };
} ]);