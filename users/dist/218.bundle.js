"use strict";(self.webpackChunkusers=self.webpackChunkusers||[]).push([[218],{218:(e,t,n)=>{n.r(t);var r=n(914),o=n.n(r),a=n(338),c=n(72),s=n.n(c),i=n(825),u=n.n(i),l=n(659),d=n.n(l),p=n(56),f=n.n(p),m=n(540),h=n.n(m),v=n(113),y=n.n(v),g=n(523),E={};E.styleTagTransform=y(),E.setAttributes=f(),E.insert=d().bind(null,"head"),E.domAPI=u(),E.insertStyleElement=h(),s()(g.A,E),g.A&&g.A.locals&&g.A.locals;const b=function(e){let{users:t,onDeleteUser:n}=e;return o().createElement("ul",null,t.map((e=>o().createElement("li",{key:e.id},e.name," - ",e.email,o().createElement("button",{onClick:()=>n(e.id)},"Delete")))))},C=function(e){let{onAddUser:t}=e;const[n,a]=(0,r.useState)(""),[c,s]=(0,r.useState)("");return o().createElement("form",{onSubmit:e=>{e.preventDefault(),t({name:n,email:c}),a(""),s("")}},o().createElement("input",{type:"text",value:n,onChange:e=>a(e.target.value),placeholder:"Name",required:!0}),o().createElement("input",{type:"email",value:c,onChange:e=>s(e.target.value),placeholder:"Email",required:!0}),o().createElement("button",{type:"submit"},"Add User"))},S="http://localhost:8082",x=function(){const[e,t]=(0,r.useState)([]);(0,r.useEffect)((()=>{n()}),[]);const n=()=>{fetch("".concat(S,"/users")).then((e=>e.json())).then((e=>t(e))).catch((e=>console.error("Error fetching users:",e)))};return o().createElement("div",null,o().createElement(C,{onAddUser:e=>{fetch("".concat(S,"/users"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json())).then((()=>n())).catch((e=>console.error("Error posting user:",e)))}}),o().createElement(b,{users:e,onDeleteUser:e=>{fetch("".concat(S,"/users/").concat(e),{method:"DELETE"}).then((()=>n())).catch((e=>console.error("Error deleting user:",e)))}}))};var T,A=n(765);a.createRoot(document.getElementById("root")).render(o().createElement(o().StrictMode,null,o().createElement(A.BrowserRouter,{basename:"/"},o().createElement(x,null)))),T&&T instanceof Function&&n.e(699).then(n.t.bind(n,699,23)).then((e=>{let{getCLS:t,getFID:n,getFCP:r,getLCP:o,getTTFB:a}=e;t(T),n(T),r(T),o(T),a(T)}))},523:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(601),o=n.n(r),a=n(314),c=n.n(a)()(o());c.push([e.id,"body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n",""]);const s=c},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(c[i]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},601:e=>{e.exports=function(e){return e[1]}},338:(e,t,n)=>{var r=n(672);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],s=0;s<e.length;s++){var i=e[s],u=r.base?i[0]+r.base:i[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var p=n(d),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=s,t.splice(s,0,{identifier:d,updater:m,references:1})}c.push(d)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var s=n(a[c]);t[s].references--}for(var i=r(e,o),u=0;u<a.length;u++){var l=n(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=i}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}}]);