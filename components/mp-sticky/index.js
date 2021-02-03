(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 18 ], {
    62: function _(e, t, n) {
        var i = n(63), o = ".weui-sticky";
        Component({
            options: {
                addGlobalClass: !0,
                pureDataPattern: /^_/,
                multipleSlots: !0
            },
            behaviors: [ i ],
            properties: {
                offsetTop: {
                    type: Number,
                    value: 0
                },
                zIndex: {
                    type: Number,
                    value: 99
                },
                disabled: {
                    type: Boolean,
                    value: !1
                },
                container: {
                    type: null
                }
            },
            data: {
                fixed: !1,
                height: 0,
                _attached: !1,
                _containerHeight: 0
            },
            observers: {
                disabled: function disabled(e) {
                    this.data._attached && (e ? this.disconnectObserver() : this.initObserver());
                },
                container: function container(e) {
                    "function" === typeof e && this.data.height && this.observerContainer();
                },
                offsetTop: function offsetTop(e) {
                    "number" === typeof e && this.data._attached && this.initObserver();
                }
            },
            lifetimes: {
                attached: function attached() {
                    console.log("组件触发"), this.data._attached = !0, this.data.disabled || this.initObserver();
                },
                detached: function detached() {
                    this.data._attached = !1, this.disconnectObserver();
                }
            },
            methods: {
                getContainerRect: function getContainerRect() {
                    var e = this.data.container();
                    return new Promise(function(t) {
                        return e.boundingClientRect(t).exec();
                    });
                },
                initObserver: function initObserver() {
                    var e = this;
                    console.log("init"), this.disconnectObserver(), this.getRect(o).then(function(t) {
                        e.setData({
                            height: t.height
                        }), e.observerContent(), e.observerContainer();
                    });
                },
                disconnectObserver: function disconnectObserver(e) {
                    if (e) {
                        var t = this[e];
                        t && t.disconnect();
                    } else this.contentObserver && this.contentObserver.disconnect(), this.containerObserver && this.containerObserver.disconnect();
                },
                observerContent: function observerContent() {
                    var e = this, t = this.data.offsetTop;
                    this.disconnectObserver("contentObserver");
                    var n = this.createIntersectionObserver({
                        thresholds: [ 1 ],
                        initialRatio: 1
                    });
                    n.relativeToViewport().observe(o, function(n) {
                        console.log(n, "res", e.data.disabled, t), e.data.disabled || e.setFixed(n.boundingClientRect.top);
                    }), this.contentObserver = n;
                },
                observerContainer: function observerContainer() {
                    var e = this, t = this.data, n = t.container, i = t.height, r = t.offsetTop;
                    "function" === typeof n && (this.disconnectObserver("containerObserver"), this.getContainerRect().then(function(t) {
                        e.getRect(o).then(function(n) {
                            var s = n.top, a = t.top, c = t.height, h = s - a, d = e.createIntersectionObserver({
                                thresholds: [ 1 ],
                                initialRatio: 1
                            });
                            d.relativeToViewport({
                                top: c - i - r - h
                            }), d.observe(o, function(t) {
                                e.data.disabled || e.setFixed(t.boundingClientRect.top);
                            }), e.data._relativeTop = h, e.data._containerHeight = c, e.containerObserver = d;
                        });
                    }));
                },
                setFixed: function setFixed(e) {
                    var t = this.data, n = t.height, i = t._containerHeight, o = t._relativeTop, r = t.offsetTop, s = i && n ? e >= n + r + o - i && e < r : e < r;
                    this.triggerEvent("scroll", {
                        scrollTop: e,
                        isFixed: s
                    }), this.setData({
                        fixed: s
                    });
                }
            }
        });
    },
    63: function _(e, t) {
        e.exports = Behavior({
            methods: {
                getRect: function getRect(e) {
                    var t = this;
                    return new Promise(function(n, i) {
                        t.createSelectorQuery().select(e).boundingClientRect(function(t) {
                            t ? n(t) : i(new Error("can not find selector: ".concat(e)));
                        }).exec();
                    });
                },
                getAllRects: function getAllRects(e) {
                    var t = this;
                    return new Promise(function(n, i) {
                        t.createSelectorQuery().selectAll(e).boundingClientRect(function(t) {
                            t && t.lenght > 0 ? n(t) : i(new Error("can not find selector: ".concat(e)));
                        }).exec();
                    });
                }
            }
        });
    }
}, [ [ 62, 0 ] ] ]);