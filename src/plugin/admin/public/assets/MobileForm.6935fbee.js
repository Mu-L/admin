var k=(g,l,o)=>new Promise((c,i)=>{var f=a=>{try{n(o.next(a))}catch(r){i(r)}},m=a=>{try{n(o.throw(a))}catch(r){i(r)}},n=a=>a.done?c(a.value):Promise.resolve(a.value).then(f,m);n((o=o.apply(g,l)).next())});import{a as I,c as B,r as x,m as L,f as h,k as e,o as S,h as w,j as s,p as t,I as z,B as _,q as y,t as b,F as R,aK as V}from"./index.6cd5baf8.js";import{F as v}from"./index.52ee3ac2.js";import"./index.c21d4698.js";import{C as E}from"./index.b5298110.js";import N from"./LoginFormTitle.458d226e.js";import{u as D,a as U,L as j,b as q}from"./useLogin.f7a7c7c5.js";import"./_baseIteratee.4c0536c1.js";const J=I({setup(g){const l=v.Item,{t:o}=B(),{handleBackLogin:c,getLoginState:i}=D(),{getFormRules:f}=U(),m=x(),n=x(!1),a=L({mobile:"",sms:""}),{validForm:r}=q(m),C=h(()=>e(i)===j.MOBILE);function F(){return k(this,null,function*(){const d=yield r();!d||console.log(d)})}return(d,u)=>e(C)?(S(),w(R,{key:0},[s(N,{class:"enter-x"}),s(e(v),{class:"p-4 enter-x",model:e(a),rules:e(f),ref_key:"formRef",ref:m},{default:t(()=>[s(e(l),{name:"mobile",class:"enter-x"},{default:t(()=>[s(e(z),{size:"large",value:e(a).mobile,"onUpdate:value":u[0]||(u[0]=p=>e(a).mobile=p),placeholder:e(o)("sys.login.mobile"),class:"fix-auto-fill"},null,8,["value","placeholder"])]),_:1}),s(e(l),{name:"sms",class:"enter-x"},{default:t(()=>[s(e(E),{size:"large",class:"fix-auto-fill",value:e(a).sms,"onUpdate:value":u[1]||(u[1]=p=>e(a).sms=p),placeholder:e(o)("sys.login.smsCode")},null,8,["value","placeholder"])]),_:1}),s(e(l),{class:"enter-x"},{default:t(()=>[s(e(_),{type:"primary",size:"large",block:"",onClick:F,loading:n.value},{default:t(()=>[y(b(e(o)("sys.login.loginButton")),1)]),_:1},8,["loading"]),s(e(_),{size:"large",block:"",class:"mt-4",onClick:e(c)},{default:t(()=>[y(b(e(o)("sys.login.backSignIn")),1)]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])],64)):V("",!0)}});export{J as default};
