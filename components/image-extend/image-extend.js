(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 6 ], {
    69: function _(e, a) {
        Component({
            properties: {
                placeholderImage: {
                    type: String,
                    value: null
                },
                brokenImage: {
                    type: String,
                    value: null
                },
                src: {
                    type: String
                },
                mode: {
                    type: String,
                    value: "aspectFill"
                },
                lazyLoad: {
                    type: Boolean,
                    value: !1
                },
                isDialog: {
                    type: Boolean,
                    value: !1
                }
            },
            data: {
                placeholderType: null,
                loadSuccess: 0
            },
            methods: {
                _loadError: function _loadError(e) {
                    this.properties.brokenImage && this.setData({
                        src: this.properties.brokenImage,
                        loadSuccess: 2
                    });
                },
                _loadSuccess: function _loadSuccess(e) {
                    this.setData({
                        loadSuccess: this.data.src
                    });
                }
            }
        });
    }
}, [ [ 69, 0 ] ] ]);