"use strict";(self.webpackChunkusers=self.webpackChunkusers||[]).push([[599],{599:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var r=n(914),c=n.n(r),o=n(189),s=n(531),a=n(272);const l=function(){const[e,t]=(0,r.useState)([]);(0,r.useEffect)((()=>{n()}),[]);const n=()=>{fetch("".concat(a.A,"/users")).then((e=>e.json())).then((e=>t(e))).catch((e=>console.error("Error fetching users:",e)))};return c().createElement("div",null,c().createElement(s.A,{onAddUser:e=>{fetch("".concat(a.A,"/users"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json())).then((()=>n())).catch((e=>console.error("Error posting user:",e)))}}),c().createElement(o.A,{users:e,onDeleteUser:e=>{fetch("".concat(a.A,"/users/").concat(e),{method:"DELETE"}).then((()=>n())).catch((e=>console.error("Error deleting user:",e)))}}))}},531:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(914),c=n.n(r);const o=function(e){let{onAddUser:t}=e;const[n,o]=(0,r.useState)(""),[s,a]=(0,r.useState)("");return c().createElement("form",{onSubmit:e=>{e.preventDefault(),t({name:n,email:s}),o(""),a("")}},c().createElement("input",{type:"text",value:n,onChange:e=>o(e.target.value),placeholder:"Name",required:!0}),c().createElement("input",{type:"email",value:s,onChange:e=>a(e.target.value),placeholder:"Email",required:!0}),c().createElement("button",{type:"submit"},"Add User"))}},189:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(914),c=n.n(r);const o=function(e){let{users:t,onDeleteUser:n}=e;return c().createElement("ul",null,t.map((e=>c().createElement("li",{key:e.id},e.name," - ",e.email,c().createElement("button",{onClick:()=>n(e.id)},"Delete")))))}},272:(e,t,n)=>{n.d(t,{A:()=>r});const r="http://localhost:8082"}}]);