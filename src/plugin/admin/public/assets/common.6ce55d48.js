var g=(a,t,e)=>new Promise((r,n)=>{var d=s=>{try{o(e.next(s))}catch(c){n(c)}},u=s=>{try{o(e.throw(s))}catch(c){n(c)}},o=s=>s.done?r(s.value):Promise.resolve(s.value).then(d,u);o((e=e.apply(a,t)).next())});import{cB as p,cy as i}from"./index.656c725e.js";const l=(a,t,e,r)=>g(void 0,null,function*(){return p.get(i({url:a,params:t,headers:{ignoreCancelToken:!0}},e),r)}),m=(a,t,e,r)=>g(void 0,null,function*(){return p.post(i({url:a,params:t,headers:{ignoreCancelToken:!0}},e),r)}),y=(a,t,e,r)=>n=>p.get(i({url:a,params:Object.assign(t||{},n),headers:{ignoreCancelToken:!0}},e),r);export{l as a,m as b,y as g};
