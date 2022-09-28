import{f as i,O as R,aj as W,N as O,r as F,ak as I,al as $,a9 as B,a as E,U as K,am as A,D as S,a7 as k,an as z,S as L,J as c,j as T,_ as G}from"./index.6cd5baf8.js";var U=Symbol("SizeProvider"),Z=function(t){var v=R("configProvider",W),f=i(function(){return t.size||v.componentSize});return O(U,f),f},ee=function(t){var v=t?i(function(){return t.size}):R(U,i(function(){return"default"}));return v},D=function(){var a=F(!1);return I(function(){a.value=$()}),a},V=Symbol("rowContextKey"),J=function(t){O(V,t)},M=function(){return R(V,{gutter:i(function(){}),wrap:i(function(){}),supportFlexGap:i(function(){})})};B("top","middle","bottom","stretch");B("start","end","center","space-around","space-between");var q=function(){return{align:String,justify:String,prefixCls:String,gutter:{type:[Number,Array],default:0},wrap:{type:Boolean,default:void 0}}},H=E({name:"ARow",props:q(),setup:function(t,v){var f=v.slots,m=K("row",t),p=m.prefixCls,h=m.direction,j,b=F({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0,xxxl:!0}),w=D();I(function(){j=A.subscribe(function(e){var r=t.gutter||0;(!Array.isArray(r)&&S(r)==="object"||Array.isArray(r)&&(S(r[0])==="object"||S(r[1])==="object"))&&(b.value=e)})}),k(function(){A.unsubscribe(j)});var N=i(function(){var e=[0,0],r=t.gutter,n=r===void 0?0:r,s=Array.isArray(n)?n:[n,0];return s.forEach(function(l,y){if(S(l)==="object")for(var u=0;u<z.length;u++){var g=z[u];if(b.value[g]&&l[g]!==void 0){e[y]=l[g];break}}else e[y]=l||0}),e});J({gutter:N,supportFlexGap:w,wrap:i(function(){return t.wrap})});var P=i(function(){var e;return L(p.value,(e={},c(e,"".concat(p.value,"-no-wrap"),t.wrap===!1),c(e,"".concat(p.value,"-").concat(t.justify),t.justify),c(e,"".concat(p.value,"-").concat(t.align),t.align),c(e,"".concat(p.value,"-rtl"),h.value==="rtl"),e))}),_=i(function(){var e=N.value,r={},n=e[0]>0?"".concat(e[0]/-2,"px"):void 0,s=e[1]>0?"".concat(e[1]/-2,"px"):void 0;return n&&(r.marginLeft=n,r.marginRight=n),w.value?r.rowGap="".concat(e[1],"px"):s&&(r.marginTop=s,r.marginBottom=s),r});return function(){var e;return T("div",{class:P.value,style:_.value},[(e=f.default)===null||e===void 0?void 0:e.call(f)])}}}),te=H;function Q(a){return typeof a=="number"?"".concat(a," ").concat(a," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(a)?"0 0 ".concat(a):a}var X=function(){return{span:[String,Number],order:[String,Number],offset:[String,Number],push:[String,Number],pull:[String,Number],xs:{type:[String,Number,Object],default:void 0},sm:{type:[String,Number,Object],default:void 0},md:{type:[String,Number,Object],default:void 0},lg:{type:[String,Number,Object],default:void 0},xl:{type:[String,Number,Object],default:void 0},xxl:{type:[String,Number,Object],default:void 0},xxxl:{type:[String,Number,Object],default:void 0},prefixCls:String,flex:[String,Number]}},re=E({name:"ACol",props:X(),setup:function(t,v){var f=v.slots,m=M(),p=m.gutter,h=m.supportFlexGap,j=m.wrap,b=K("col",t),w=b.prefixCls,N=b.direction,P=i(function(){var e,r=t.span,n=t.order,s=t.offset,l=t.push,y=t.pull,u=w.value,g={};return["xs","sm","md","lg","xl","xxl","xxxl"].forEach(function(x){var d,o={},C=t[x];typeof C=="number"?o.span=C:S(C)==="object"&&(o=C||{}),g=G(G({},g),(d={},c(d,"".concat(u,"-").concat(x,"-").concat(o.span),o.span!==void 0),c(d,"".concat(u,"-").concat(x,"-order-").concat(o.order),o.order||o.order===0),c(d,"".concat(u,"-").concat(x,"-offset-").concat(o.offset),o.offset||o.offset===0),c(d,"".concat(u,"-").concat(x,"-push-").concat(o.push),o.push||o.push===0),c(d,"".concat(u,"-").concat(x,"-pull-").concat(o.pull),o.pull||o.pull===0),c(d,"".concat(u,"-rtl"),N.value==="rtl"),d))}),L(u,(e={},c(e,"".concat(u,"-").concat(r),r!==void 0),c(e,"".concat(u,"-order-").concat(n),n),c(e,"".concat(u,"-offset-").concat(s),s),c(e,"".concat(u,"-push-").concat(l),l),c(e,"".concat(u,"-pull-").concat(y),y),e),g)}),_=i(function(){var e=t.flex,r=p.value,n={};if(r&&r[0]>0){var s="".concat(r[0]/2,"px");n.paddingLeft=s,n.paddingRight=s}if(r&&r[1]>0&&!h.value){var l="".concat(r[1]/2,"px");n.paddingTop=l,n.paddingBottom=l}return e&&(n.flex=Q(e),j.value===!1&&!n.minWidth&&(n.minWidth=0)),n});return function(){var e;return T("div",{class:P.value,style:_.value},[(e=f.default)===null||e===void 0?void 0:e.call(f)])}}});export{re as C,te as R,D as a,Z as b,ee as u};
