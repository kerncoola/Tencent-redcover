(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 35 ], {
    57: function _(e, a) {
        var c = getApp();
        Page({
            data: {
                path: "/pages/follow/index?path=https://mp.weixin.qq.com/s?__biz=Mzg3MDU0NDQwNQ==&mid=2247483668&idx=1&sn=c5466918ef9e7c72601b85773340f5ca&chksm=ce8d646ef9faed78439faf1f3f79d053fa9e5e5ff984ec2251877a15cac18f8a95abcb386bdb&scene=132#wechat_redirect"
            },
            onLoad: function onLoad(e) {
                e.path && this.setData({
                    path: decodeURIComponent(e.path)
                });
            },
            receivePostMsg: function receivePostMsg(e) {
                var a = e.detail.data;
                console.log("收到的消息是", a), c.user = JSON.parse(a);
            },
            onShareAppMessage: function onShareAppMessage(e) {
                var a = e.webViewUrl;
                console.log(a);
            }
        });
    }
}, [ [ 57, 0 ] ] ]);