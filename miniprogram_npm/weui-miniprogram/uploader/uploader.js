var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

module.exports = function(t) {
    function r(e) {
        if (a[e]) return a[e].exports;
        var i = a[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, r), i.l = !0, i.exports;
    }
    var a = {};
    return r.m = t, r.c = a, r.d = function(e, t, a) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        });
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, r.t = function(t, a) {
        if (1 & a && (t = r(t)), 8 & a) return t;
        if (4 & a && "object" === (void 0 === t ? "undefined" : e(t)) && t && t.__esModule) return t;
        var i = Object.create(null);
        if (r.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }), 2 & a && "string" != typeof t) for (var n in t) r.d(i, n, function(e) {
            return t[e];
        }.bind(null, n));
        return i;
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return r.d(t, "a", t), t;
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, r.p = "", r(r.s = 22);
}({
    22: function(e, t, r) {
        Component({
            options: {
                addGlobalClass: !0
            },
            properties: {
                title: {
                    type: String,
                    value: "图片上传"
                },
                sizeType: {
                    type: Array,
                    value: [ "original", "compressed" ]
                },
                sourceType: {
                    type: Array,
                    value: [ "album", "camera" ]
                },
                maxSize: {
                    type: Number,
                    value: 5242880
                },
                maxCount: {
                    type: Number,
                    value: 1
                },
                files: {
                    type: Array,
                    value: [],
                    observer: function(e) {
                        this.setData({
                            currentFiles: e
                        });
                    }
                },
                select: {
                    type: null,
                    value: function() {}
                },
                upload: {
                    type: null,
                    value: null
                },
                tips: {
                    type: String,
                    value: ""
                },
                extClass: {
                    type: String,
                    value: ""
                },
                showDelete: {
                    type: Boolean,
                    value: !0
                }
            },
            data: {
                currentFiles: [],
                showPreview: !1,
                previewImageUrls: []
            },
            ready: function() {},
            methods: {
                previewImage: function(e) {
                    var t = e.currentTarget.dataset.index, r = [];
                    this.data.files.forEach(function(e) {
                        r.push(e.url);
                    }), this.setData({
                        previewImageUrls: r,
                        previewCurrent: t,
                        showPreview: !0
                    });
                },
                chooseImage: function() {
                    var e = this;
                    this.uploading || wx.chooseImage({
                        count: this.data.maxCount - this.data.files.length,
                        sizeType: this.data.sizeType,
                        sourceType: this.data.sourceType,
                        success: function(t) {
                            var r = -1;
                            if (t.tempFiles.forEach(function(t, a) {
                                t.size > e.data.maxSize && (r = a);
                            }), "function" != typeof e.data.select || !1 !== e.data.select(t)) if (r >= 0) e.triggerEvent("fail", {
                                type: 1,
                                errMsg: "chooseImage:fail size exceed " + e.data.maxSize,
                                total: t.tempFilePaths.length,
                                index: r
                            }, {}); else {
                                var a = wx.getFileSystemManager(), i = t.tempFilePaths.map(function(e) {
                                    return a.readFileSync(e);
                                }), n = {
                                    tempFilePaths: t.tempFilePaths,
                                    tempFiles: t.tempFiles,
                                    contents: i
                                };
                                e.triggerEvent("select", n, {});
                                var l = t.tempFilePaths.map(function(e, r) {
                                    return {
                                        loading: !0,
                                        url: t.tempFilePaths[r] || "data:image/jpg;base64," + wx.arrayBufferToBase64(i[r])
                                    };
                                });
                                if (l && l.length && "function" == typeof e.data.upload) {
                                    var o = e.data.files.length, s = e.data.files.concat(l);
                                    e.setData({
                                        files: s,
                                        currentFiles: s
                                    }), e.loading = !0, e.data.upload(n).then(function(t) {
                                        if (e.loading = !1, t.urls) {
                                            var r = e.data.files;
                                            t.urls.forEach(function(e, t) {
                                                r[o + t].url = e, r[o + t].loading = !1;
                                            }), e.setData({
                                                files: r,
                                                currentFiles: s
                                            }), e.triggerEvent("success", t, {});
                                        } else e.triggerEvent("fail", {
                                            type: 3,
                                            errMsg: "upload file fail, urls not found"
                                        }, {});
                                    }).catch(function(r) {
                                        e.loading = !1;
                                        var a = e.data.files;
                                        t.tempFilePaths.forEach(function(e, t) {
                                            a[o + t].error = !0, a[o + t].loading = !1;
                                        }), e.setData({
                                            files: a,
                                            currentFiles: s
                                        }), e.triggerEvent("fail", {
                                            type: 3,
                                            errMsg: "upload file fail",
                                            error: r
                                        }, {});
                                    });
                                }
                            }
                        },
                        fail: function(t) {
                            t.errMsg.indexOf("chooseImage:fail cancel") >= 0 ? e.triggerEvent("cancel", {}, {}) : (t.type = 2, 
                            e.triggerEvent("fail", t, {}));
                        }
                    });
                },
                deletePic: function(e) {
                    var t = e.detail.index, r = this.data.files, a = r.splice(t, 1);
                    this.setData({
                        files: r,
                        currentFiles: r
                    }), this.triggerEvent("delete", {
                        index: t,
                        item: a[0]
                    });
                }
            }
        });
    }
});