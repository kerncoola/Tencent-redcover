$gwx_XC_5=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_5 || [];
function gz$gwx_XC_5_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'checkedChange'])
Z([a,[3,'weui-check__label '],[[7],[3,'outerClass']],[3,' '],[[7],[3,'extClass']],[3,' '],[[2,'?:'],[[2,'!'],[[7],[3,'multi']]],[1,'^weui-cell_radio'],[1,'^weui-cell_checkbox']]])
Z([3,'weui-active'])
Z([[2,'!'],[[7],[3,'multi']]])
Z([[7],[3,'multi']])
Z(z[4])
Z(z[3])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_5=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_5=true;
var x=['./miniprogram_npm/weui-miniprogram/checkbox/checkbox.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_5_1()
var t7B=_mz(z,'mp-cell',['bindtap',0,'extClass',1,'extHoverClass',1,'hasFooter',2,'hasHeader',3],[],e,s,gg)
var e8B=_v()
_(t7B,e8B)
if(_oz(z,5,e,s,gg)){e8B.wxVkey=1
}
var b9B=_v()
_(t7B,b9B)
if(_oz(z,6,e,s,gg)){b9B.wxVkey=1
}
e8B.wxXCkey=1
b9B.wxXCkey=1
_(r,t7B)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_5";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_5();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/weui-miniprogram/checkbox/checkbox.wxml'] = [$gwx_XC_5, './miniprogram_npm/weui-miniprogram/checkbox/checkbox.wxml'];else __wxAppCode__['miniprogram_npm/weui-miniprogram/checkbox/checkbox.wxml'] = $gwx_XC_5( './miniprogram_npm/weui-miniprogram/checkbox/checkbox.wxml' );
	;__wxRoute = "miniprogram_npm/weui-miniprogram/checkbox/checkbox";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/weui-miniprogram/checkbox/checkbox.js";define("miniprogram_npm/weui-miniprogram/checkbox/checkbox.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};module.exports=function(e){function n(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var o={};return n.m=e,n.c=o,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(e,o){if(1&o&&(e=n(e)),8&o)return e;if(4&o&&"object"===(void 0===e?"undefined":t(e))&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=25)}({25:function(t,e,n){Component({options:{addGlobalClass:!0,multipleSlots:!0},properties:{multi:{type:Boolean,value:!0},checked:{type:Boolean,value:!1},value:{type:String,value:""},label:{type:String,value:"label"},extClass:{type:String,value:""}},data:{},relations:{"../checkbox-group/checkbox-group":{type:"ancestor",linked:function(t){this.data.group=t},unlinked:function(){this.data.group=null}}},methods:{setMulti:function(t){this.setData({multi:t})},setOuterClass:function(t){this.setData({outerClass:t})},checkedChange:function(){if(this.data.multi){var t=!this.data.checked;this.setData({checked:t}),this.data.group&&this.data.group.checkedChange(t,this)}else{var e=this.data.checked;if(e)return;this.setData({checked:!0}),this.data.group&&this.data.group.checkedChange(e,this)}this.triggerEvent("change",{value:this.data.value,checked:this.data.checked})}}})}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/weui-miniprogram/checkbox/checkbox.js'});require("miniprogram_npm/weui-miniprogram/checkbox/checkbox.js");