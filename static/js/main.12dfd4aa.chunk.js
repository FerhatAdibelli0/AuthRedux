(this["webpackJsonpredux-basics"]=this["webpackJsonpredux-basics"]||[]).push([[0],{10:function(e,t,n){e.exports={header:"Header_header__3j5KE"}},11:function(e,t,n){e.exports={profile:"UserProfile_profile__3AjWo"}},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(4),o=n.n(r),i=n(2),s=n(3),u=Object(s.b)({name:"Authentication",initialState:{isAuthented:!1},reducers:{logedIn:function(e){e.isAuthented=!0},logedOut:function(e){e.isAuthented=!1}}}),l=u.actions,j=u.reducer,a=Object(s.b)({name:"counter",initialState:{counter:0,showCounter:!1},reducers:{increment:function(e){e.counter++},decrement:function(e){e.counter--},increase:function(e,t){e.counter=e.counter+t.payload.amount},toggle:function(e){e.showCounter=!e.showCounter}}}),d=a.actions,h=a.reducer,b=Object(s.a)({reducer:{counter:h,auth:j}}),O=(n(19),n(8)),x=n.n(O),f=n(1),m=function(){var e=Object(i.c)((function(e){return e.counter.counter})),t=Object(i.c)((function(e){return e.counter.showCounter})),n=Object(i.b)();return Object(f.jsxs)("main",{className:x.a.counter,children:[Object(f.jsx)("h1",{children:"Redux Counter"}),t&&Object(f.jsx)("div",{className:x.a.value,children:e}),Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{onClick:function(){n(d.increment())},children:"increment"}),Object(f.jsx)("button",{onClick:function(){n(d.increase({amount:7}))},children:"increase By 7"}),Object(f.jsx)("button",{onClick:function(){n(d.decrement())},children:"decrement"})]}),Object(f.jsx)("button",{onClick:function(){n(d.toggle())},children:"Toggle Counter"})]})},p=n(10),g=n.n(p),_=function(e){var t=Object(i.c)((function(e){return e.auth.isAuthented}));return Object(f.jsxs)("header",{className:g.a.header,children:[Object(f.jsx)("h1",{children:"Redux Auth"}),t&&Object(f.jsx)("nav",{children:Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"/",children:"My Products"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"/",children:"My Sales"})}),Object(f.jsx)("li",{children:Object(f.jsx)("button",{onClick:e.logedOutHandler,children:"Logout"})})]})})]})},v=n(5),C=n.n(v),w=function(e){return Object(f.jsx)("main",{className:C.a.auth,children:Object(f.jsx)("section",{children:Object(f.jsxs)("form",{children:[Object(f.jsxs)("div",{className:C.a.control,children:[Object(f.jsx)("label",{htmlFor:"email",children:"Email"}),Object(f.jsx)("input",{type:"email",id:"email"})]}),Object(f.jsxs)("div",{className:C.a.control,children:[Object(f.jsx)("label",{htmlFor:"password",children:"Password"}),Object(f.jsx)("input",{type:"password",id:"password"})]}),Object(f.jsx)("button",{onClick:e.loginHandler,children:"Login"})]})})})},A=n(11),k=n.n(A),y=function(){return Object(f.jsx)("main",{className:k.a.profile,children:Object(f.jsx)("h2",{children:"My User Profile"})})};var N=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.auth.isAuthented}));return Object(f.jsxs)(c.Fragment,{children:[Object(f.jsx)(_,{logedOutHandler:function(){e(l.logedOut())}}),t&&Object(f.jsx)(y,{}),!t&&Object(f.jsx)(w,{loginHandler:function(){e(l.logedIn())}}),Object(f.jsx)(m,{}),";"]})};o.a.render(Object(f.jsx)(i.a,{store:b,children:Object(f.jsx)(N,{})}),document.getElementById("root"))},5:function(e,t,n){e.exports={auth:"Auth_auth__20t6s",control:"Auth_control__vjNwZ"}},8:function(e,t,n){e.exports={counter:"Counter_counter__roXpn",value:"Counter_value__3O8WK"}}},[[21,1,2]]]);
//# sourceMappingURL=main.12dfd4aa.chunk.js.map