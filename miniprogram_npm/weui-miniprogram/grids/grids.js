var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

module.exports = function(t) {
    function n(e) {
        if (r[e]) return r[e].exports;
        var o = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }
    var r = {};
    return n.m = t, n.c = r, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        });
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, n.t = function(t, r) {
        if (1 & r && (t = n(t)), 8 & r) return t;
        if (4 & r && "object" === (void 0 === t ? "undefined" : e(t)) && t && t.__esModule) return t;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: t
        }), 2 & r && "string" != typeof t) for (var i in t) n.d(o, i, function(e) {
            return t[e];
        }.bind(null, i));
        return o;
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return n.d(t, "a", t), t;
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 23);
}({
    23: function(e, t, n) {
        var r = {
            target: "self",
            url: "",
            openType: "navigate",
            delta: 1,
            appId: "",
            path: "",
            extraData: "",
            version: "release",
            hoverClass: "navigator-hover",
            hoverStopPropagation: !1,
            hoverStartTime: 50,
            hoverStayTime: 600,
            bindsuccess: function() {},
            bindfail: function() {},
            bindcomplete: function() {}
        };
        Component({
            options: {
                addGlobalClass: !0,
                pureDataPattern: /^_/
            },
            properties: {
                extClass: {
                    type: String,
                    value: ""
                },
                grids: {
                    type: Array,
                    value: [],
                    observer: "_onGridsChange"
                }
            },
            data: {
                innerGrids: []
            },
            ready: function() {},
            methods: {
                _onGridsChange: function(e) {
                    e && this.setData({
                        innerGrids: e.map(function(e) {
                            return Object.assign({}, r, e);
                        })
                    });
                }
            }
        });
    }
});