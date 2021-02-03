var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

module.exports = function(e) {
    function o(t) {
        if (n[t]) return n[t].exports;
        var r = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, o), r.l = !0, r.exports;
    }
    var n = {};
    return o.m = e, o.c = n, o.d = function(t, e, n) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        });
    }, o.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        });
    }, o.t = function(e, n) {
        if (1 & n && (e = o(e)), 8 & n) return e;
        if (4 & n && "object" === (void 0 === e ? "undefined" : t(e)) && e && e.__esModule) return e;
        var r = Object.create(null);
        if (o.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & n && "string" != typeof e) for (var u in e) o.d(r, u, function(t) {
            return e[t];
        }.bind(null, u));
        return r;
    }, o.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default;
        } : function() {
            return t;
        };
        return o.d(e, "a", e), e;
    }, o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }, o.p = "", o(o.s = 8);
}({
    8: function(t, e, o) {
        Component({
            options: {
                addGlobalClass: !0,
                multipleSlots: !0
            },
            properties: {
                title: {
                    type: String,
                    value: ""
                },
                extClass: {
                    type: String,
                    value: ""
                },
                footer: {
                    type: String,
                    value: ""
                }
            },
            data: {
                firstItem: null,
                checkboxCount: 0,
                checkboxIsMulti: !1,
                outerClass: "",
                childClass: ""
            },
            relations: {
                "../cell/cell": {
                    type: "descendant",
                    linked: function(t) {
                        this.data.firstItem || (this.data.firstItem = t), t !== this.data.firstItem && t.setOuterClass("weui-cell_wxss");
                    }
                },
                "../form-page/form-page": {
                    type: "ancestor"
                },
                "../checkbox-group/checkbox-group": {
                    type: "descendant",
                    linked: function(t) {
                        this.setData({
                            checkboxCount: this.data.checkboxCount + 1,
                            checkboxIsMulti: t.data.multi
                        });
                    },
                    unlinked: function(t) {
                        this.setData({
                            checkboxCount: this.data.checkboxCount - 1,
                            checkboxIsMulti: t.data.multi
                        });
                    }
                }
            },
            methods: {
                setCellMulti: function(t) {
                    this.setData({
                        checkboxIsMulti: t
                    });
                },
                setCellsClass: function(t) {
                    this.setData({
                        childClass: t
                    });
                },
                setOuterClass: function(t) {
                    this.setData({
                        outerClass: t
                    });
                }
            }
        });
    }
});