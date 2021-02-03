var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

module.exports = function(e) {
    function a(t) {
        if (n[t]) return n[t].exports;
        var r = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, a), r.l = !0, r.exports;
    }
    var n = {};
    return a.m = e, a.c = n, a.d = function(t, e, n) {
        a.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        });
    }, a.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        });
    }, a.t = function(e, n) {
        if (1 & n && (e = a(e)), 8 & n) return e;
        if (4 & n && "object" === (void 0 === e ? "undefined" : t(e)) && e && e.__esModule) return e;
        var r = Object.create(null);
        if (a.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & n && "string" != typeof e) for (var i in e) a.d(r, i, function(t) {
            return e[t];
        }.bind(null, i));
        return r;
    }, a.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default;
        } : function() {
            return t;
        };
        return a.d(e, "a", e), e;
    }, a.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }, a.p = "", a(a.s = 24);
}({
    24: function(t, e, a) {
        Component({
            options: {
                addGlobalClass: !0,
                multipleSlots: !0
            },
            properties: {
                multi: {
                    type: Boolean,
                    value: !0,
                    observer: "_multiChange"
                },
                extClass: {
                    type: String,
                    value: ""
                },
                prop: {
                    type: String,
                    value: ""
                }
            },
            data: {
                targetList: [],
                parentCell: null
            },
            relations: {
                "../checkbox/checkbox": {
                    type: "descendant",
                    linked: function(t) {
                        this.data.targetList.push(t), t.setMulti(this.data.multi), this.data.firstItem || (this.data.firstItem = t), 
                        t !== this.data.firstItem && t.setOuterClass("weui-cell_wxss");
                    },
                    unlinked: function(t) {
                        var e = -1;
                        this.data.targetList.forEach(function(a, n) {
                            a === t && (e = n);
                        }), this.data.targetList.splice(e, 1), this.data.targetList || (this.data.firstItem = null);
                    }
                },
                "../form/form": {
                    type: "ancestor"
                },
                "../cells/cells": {
                    type: "ancestor",
                    linked: function(t) {
                        this.data.parentCell || (this.data.parentCell = t), this.setParentCellsClass();
                    },
                    unlinked: function() {
                        this.data.parentCell = null;
                    }
                }
            },
            methods: {
                checkedChange: function(t, e) {
                    if (this.data.multi) {
                        var a = [];
                        this.data.targetList.forEach(function(t) {
                            t.data.checked && a.push(t.data.value);
                        }), this.triggerEvent("change", {
                            value: a
                        });
                    } else {
                        var n = "";
                        this.data.targetList.forEach(function(t) {
                            t === e ? n = t.data.value : t.setData({
                                checked: !1
                            });
                        }), this.triggerEvent("change", {
                            value: n
                        }, {});
                    }
                },
                setParentCellsClass: function() {
                    var t = this.data.multi ? "weui-cells_checkbox" : "";
                    this.data.parentCell && this.data.parentCell.setCellsClass(t);
                },
                _multiChange: function(t) {
                    return this.data.targetList.forEach(function(e) {
                        e.setMulti(t);
                    }), this.data.parentCell && this.data.parentCell.setCellMulti(t), t;
                }
            }
        });
    }
});