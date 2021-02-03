(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 42 ], {
    54: function _(t, s) {
        getApp();
        Page({
            data: {
                src: "https://static.taishan.qq.com/editor/poster/%E8%BF%9B%E7%BE%A4%E9%A2%86%E5%8F%96%E7%BA%A2%E5%8C%85%E5%B0%81%E9%9D%A2.png"
            },
            onLoad: function onLoad(t) {
                console.log("options", t);
                var s = t.type;
                2 == s && this.setData({
                    src: "https://static.taishan.qq.com/editor/poster/%E5%BE%AE%E4%BF%A1%E7%BA%A2%E5%8C%85%E5%B0%81%E9%9D%A2%E9%99%90%E9%87%8F%E6%8A%BD.png"
                }), console.log("this.src", this.data);
            }
        });
    }
}, [ [ 54, 0 ] ] ]);