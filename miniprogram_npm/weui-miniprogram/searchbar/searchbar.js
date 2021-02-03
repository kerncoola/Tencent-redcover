var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

module.exports = function(e) {
    function n(t) {
        if (r[t]) return r[t].exports;
        var a = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, n), a.l = !0, a.exports;
    }
    var r = {};
    return n.m = e, n.c = r, n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        });
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        });
    }, n.t = function(e, r) {
        if (1 & r && (e = n(e)), 8 & r) return e;
        if (4 & r && "object" === (void 0 === e ? "undefined" : t(e)) && e && e.__esModule) return e;
        var a = Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }), 2 & r && "string" != typeof e) for (var o in e) n.d(a, o, function(t) {
            return e[t];
        }.bind(null, o));
        return a;
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default;
        } : function() {
            return t;
        };
        return n.d(e, "a", e), e;
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "", n(n.s = 26);
}({
    26: function(t, e, n) {
        Component({
            options: {
                addGlobalClass: !0
            },
            properties: {
                extClass: {
                    type: String,
                    value: ""
                },
                focus: {
                    type: Boolean,
                    value: !1
                },
                placeholder: {
                    type: String,
                    value: "搜索"
                },
                value: {
                    type: String,
                    value: ""
                },
                search: {
                    type: Function,
                    value: null
                },
                throttle: {
                    type: Number,
                    value: 500
                },
                cancelText: {
                    type: String,
                    value: "取消"
                },
                cancel: {
                    type: Boolean,
                    value: !0
                }
            },
            data: {
                result: []
            },
            lastSearch: Date.now(),
            lifetimes: {
                attached: function() {
                    this.data.focus && this.setData({
                        searchState: !0
                    });
                }
            },
            methods: {
                clearInput: function() {
                    this.setData({
                        value: "",
                        focus: !0,
                        result: []
                    }), this.triggerEvent("clear");
                },
                inputFocus: function(t) {
                    this.triggerEvent("focus", t.detail);
                },
                inputBlur: function(t) {
                    this.setData({
                        focus: !1
                    }), this.triggerEvent("blur", t.detail);
                },
                showInput: function() {
                    this.setData({
                        focus: !0,
                        searchState: !0
                    });
                },
                hideInput: function() {
                    this.setData({
                        searchState: !1
                    }), this.triggerEvent("cancel");
                },
                inputChange: function(t) {
                    var e = this;
                    this.setData({
                        value: t.detail.value
                    }), this.triggerEvent("input", t.detail), Date.now() - this.lastSearch < this.data.throttle || "function" == typeof this.data.search && (this.lastSearch = Date.now(), 
                    this.timerId = setTimeout(function() {
                        e.data.search(e.data.value).then(function(t) {
                            e.setData({
                                result: t
                            });
                        }).catch(function(t) {
                            console.error("search error", t);
                        });
                    }, this.data.throttle));
                },
                selectResult: function(t) {
                    var e = t.currentTarget.dataset.index, n = this.data.result[e];
                    this.triggerEvent("selectresult", {
                        index: e,
                        item: n
                    });
                }
            }
        });
    }
});