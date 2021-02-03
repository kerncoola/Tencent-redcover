var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

module.exports = function(t) {
    function r(e) {
        if (n[e]) return n[e].exports;
        var o = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
    }
    var n = {};
    return r.m = t, r.c = n, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        });
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, r.t = function(t, n) {
        if (1 & n && (t = r(t)), 8 & n) return t;
        if (4 & n && "object" === (void 0 === t ? "undefined" : e(t)) && t && t.__esModule) return t;
        var o = Object.create(null);
        if (r.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: t
        }), 2 & n && "string" != typeof t) for (var u in t) r.d(o, u, function(e) {
            return t[e];
        }.bind(null, u));
        return o;
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return r.d(t, "a", t), t;
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, r.p = "", r(r.s = 21);
}({
    21: function(e, t, r) {
        Component({
            options: {
                addGlobalClass: !0
            },
            properties: {
                imgUrls: {
                    type: Array,
                    value: [],
                    observer: function(e) {
                        this.setData({
                            currentImgs: e
                        });
                    }
                },
                showDelete: {
                    type: Boolean,
                    value: !0
                },
                show: {
                    type: Boolean,
                    value: !0
                },
                current: {
                    type: Number,
                    value: 0
                },
                hideOnClick: {
                    type: Boolean,
                    value: !0
                },
                extClass: {
                    type: String,
                    value: ""
                }
            },
            data: {
                currentImgs: []
            },
            ready: function() {
                var e = this.data;
                this.setData({
                    currentImgs: e.imgUrls
                });
            },
            methods: {
                change: function(e) {
                    this.setData({
                        current: e.detail.current
                    }), this.triggerEvent("change", {
                        current: e.detail.current
                    }, {});
                },
                deleteImg: function() {
                    var e = this.data, t = e.currentImgs, r = t.splice(e.current, 1);
                    this.triggerEvent("delete", {
                        url: r[0],
                        index: e.current
                    }, {}), 0 !== t.length ? this.setData({
                        current: 0,
                        currentImgs: t
                    }) : this.hideGallery();
                },
                hideGallery: function() {
                    this.data.hideOnClick && (this.setData({
                        show: !1
                    }), this.triggerEvent("hide", {}, {}));
                }
            }
        });
    }
});