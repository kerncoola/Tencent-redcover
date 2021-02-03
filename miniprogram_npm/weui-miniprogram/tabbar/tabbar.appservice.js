$gwx_XC_18=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}var __WXML_GLOBAL__={};{
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_18 || [];
function gz$gwx_XC_18_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_18_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_18_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_18_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'list']])
Z([3,'index'])
Z([3,'tabChange'])
Z([a,[3,'weui-tabbar__item '],[[2,'?:'],[[2,'==='],[[7],[3,'index']],[[7],[3,'current']]],[1,'weui-bar__item_on'],[1,'']]])
Z([[7],[3,'index']])
Z([[2,'||'],[[6],[[7],[3,'item']],[3,'badge']],[[6],[[7],[3,'item']],[3,'dot']]])
Z([[6],[[7],[3,'item']],[3,'badge']])
Z([3,'position: absolute;top:-2px;left:calc(100% - 3px)'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_18_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_18_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_18=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_18=true;
var x=['./miniprogram_npm/weui-miniprogram/tabbar/tabbar.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_18_1()
var lGE=_v()
_(r,lGE)
var aHE=function(eJE,tIE,bKE,gg){
var xME=_mz(z,'view',['bindtap',2,'class',1,'data-index',2],[],eJE,tIE,gg)
var oNE=_v()
_(xME,oNE)
if(_oz(z,5,eJE,tIE,gg)){oNE.wxVkey=1
var fOE=_mz(z,'mp-badge',['content',6,'style',1],[],eJE,tIE,gg)
_(oNE,fOE)
}
oNE.wxXCkey=1
oNE.wxXCkey=3
_(bKE,xME)
return bKE
}
lGE.wxXCkey=4
_2z(z,0,aHE,e,s,gg,lGE,'item','index','index')
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_18";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_18();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/weui-miniprogram/tabbar/tabbar.wxml'] = [$gwx_XC_18, './miniprogram_npm/weui-miniprogram/tabbar/tabbar.wxml'];else __wxAppCode__['miniprogram_npm/weui-miniprogram/tabbar/tabbar.wxml'] = $gwx_XC_18( './miniprogram_npm/weui-miniprogram/tabbar/tabbar.wxml' );
	;__wxRoute = "miniprogram_npm/weui-miniprogram/tabbar/tabbar";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/weui-miniprogram/tabbar/tabbar.js";define("miniprogram_npm/weui-miniprogram/tabbar/tabbar.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};module.exports=function(e){function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var n={};return r.m=e,r.c=n,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"===(void 0===e?"undefined":t(e))&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var u in e)r.d(o,u,function(t){return e[t]}.bind(null,u));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=16)}({16:function(t,e,r){Component({options:{addGlobalClass:!0},properties:{extClass:{type:String,value:""},list:{type:Array,value:[]},current:{type:Number,value:0}},methods:{tabChange:function(t){var e=t.currentTarget.dataset.index;e!==this.data.current&&(this.setData({current:e}),this.triggerEvent("change",{index:e,item:this.data.list[e]}))}}})}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/weui-miniprogram/tabbar/tabbar.js'});require("miniprogram_npm/weui-miniprogram/tabbar/tabbar.js");