(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(1),c=n(7),i=n.n(c),u=n(2),s=n(9),o=function(t){var e=t.setCategories,n=Object(r.useState)(""),c=Object(u.a)(n,2),i=c[0],o=c[1];return Object(a.jsx)("form",{onSubmit:function(t){t.preventDefault(),i.trim().length>2&&e((function(t){return[i].concat(Object(s.a)(t))})),o("")},children:Object(a.jsx)("input",{type:"text",value:i,placeholder:"nombre",onChange:function(t){return function(t){o(t.target.value)}(t)}})})},j=n(10),d=function(t){t.id,t.title;var e=t.url;return Object(a.jsx)("div",{className:"card  animate__animated animate__fadeIn",alt:"",children:Object(a.jsx)("img",{src:e})})},l=n(6),b=n.n(l),f=n(8),p=function(){var t=Object(f.a)(b.a.mark((function t(e){var n,a,r,c,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="http://api.giphy.com/v1/gifs/search?api_key=YF7P4Jy6WNM3buKWWLgSS5hTLZKoYEye&q=".concat(encodeURI(e),"&limit=10"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return r=t.sent,c=r.data,i=c.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(t){var e=t.category,n=function(t){var e=Object(r.useState)({data:[],loading:!0}),n=Object(u.a)(e,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){p(t).then((function(t){c({data:t,loading:!1})}))}),[t]),a}(e),c=n.data,i=n.loading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{children:e}),i&&Object(a.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),Object(a.jsx)("div",{className:"card-grid",children:c.map((function(t){return Object(a.jsx)(d,Object(j.a)({},t),t.id)}))})]})},m=function(){var t=Object(r.useState)(["Dragon Ball"]),e=Object(u.a)(t,2),n=e[0],c=e[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"GifExpertApp"}),Object(a.jsx)(o,{setCategories:c}),Object(a.jsx)("hr",{}),Object(a.jsx)("ol",{children:n.map((function(t){return Object(a.jsx)(h,{category:t},t)}))})]})};n(17);i.a.render(Object(a.jsx)(m,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.ad6d7388.chunk.js.map