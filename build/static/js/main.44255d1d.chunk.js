(this.webpackJsonpudemyrrrrsmrsh1=this.webpackJsonpudemyrrrrsmrsh1||[]).push([[0],{175:function(e,t,n){},180:function(e,t,n){},200:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"default",(function(){return ce}));var c={};n.r(c),n.d(c,"default",(function(){return oe}));var a={};n.r(a),n.d(a,"getAllEntries",(function(){return he})),n.d(a,"getEntryDetails",(function(){return ve})),n.d(a,"getAllEntriesDetails",(function(){return Te}));var i=n(0),s=n.n(i),u=n(41),o=n.n(u),l=n(29),d=(n(174),n(24)),j=n(46),O=n(212),p={GET_ENTRIES:"GET_ENTRIES",POPULATE_ENTRIES:"POPULATE_ENTRIES",POPULATE_ENTRY_DETAIL:"POPULATE_ENTRY_DETAILS",ADD_ENTRY:"ADD_ENTRY",REMOVE_ENTRY:"REMOVE_ENTRY",UPDATE_ENTRY:"UPDATE_ENTRY",REMOVE_ENTRY_RESULT:"REMOVE_ENTRY_RESULT",ADD_ENTRY_RESULT:"ADD_ENTRY_RESULT"},E=p,b=function(e){return{type:p.ADD_ENTRY,payload:e}},x=function(e,t){return{type:p.UPDATE_ENTRY,payload:{id:e,entry:t}}},f=function(e,t){return{type:p.POPULATE_ENTRY_DETAIL,payload:{id:e,entry:t}}},h=(n(175),n(217)),v=n(6);var T=function(e){var t=e.title,n=e.value,r=e.color,c=void 0===r?"black":r,a=e.size,i=void 0===a?"tiny":a;return Object(v.jsxs)(h.a,{size:i,color:c,children:[Object(v.jsx)(h.a.Label,{style:{textAlign:"left"},children:t}),Object(v.jsx)(h.a.Value,{children:isNaN(n)?0:n})]})},y=n(221),_=n(220);var R=function(e){var t=e.incomeTotal,n=e.expenseTotal;return Object(v.jsx)(y.a,{textAlign:"center",children:Object(v.jsx)(_.a,{columns:2,divided:!0,children:Object(v.jsxs)(_.a.Row,{children:[Object(v.jsx)(_.a.Column,{children:Object(v.jsx)(T,{color:"green",title:"Income: ",value:t})}),Object(v.jsx)(_.a.Column,{children:Object(v.jsx)(T,{color:"red",title:"Expenses: ",value:n})})]})})})},D=n(84),N={OPEN_EDIT_MODAL:"OPEN_EDIT_MODAL",CLOSE_EDIT_MODAL:"CLOSE_EDIT_MODAL"},m=N,A=function(){return{type:N.CLOSE_EDIT_MODAL}};var g=function(e){var t=e.id,n=e.description,r=e.value,c=e.isExpense,a=void 0!==c&&c,s=Object(l.b)();return Object(v.jsx)(i.Fragment,{children:Object(v.jsx)(y.a,{color:a?"red":"green",children:Object(v.jsx)(_.a,{columns:3,textAlign:"right",children:Object(v.jsxs)(_.a.Row,{children:[Object(v.jsx)(_.a.Column,{width:10,textAlign:"left",children:n}),Object(v.jsx)(_.a.Column,{width:3,textAlign:"right",children:r}),Object(v.jsxs)(_.a.Column,{width:3,children:[Object(v.jsx)(D.a,{name:"edit",onClick:function(){return s(function(e){return{type:N.OPEN_EDIT_MODAL,payload:{id:e}}}(t))}}),Object(v.jsx)(D.a,{name:"trash",onClick:function(){return s(function(e){return{type:p.REMOVE_ENTRY,payload:{id:e}}}(t))}})]})]})})})})};var L=function(e){var t=e.entries;return Object(v.jsx)(O.a,{children:t.map((function(e){return Object(v.jsx)(g,Object(d.a)({},e),e.id)}))})},w=n(218);var I=function(e){var t=e.title,n=e.type,r=void 0===n?"h1":n;return Object(v.jsx)(w.a,{as:r,children:t})},S=n(214),P=n(216),Y=n(215),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=Object(i.useState)(t),c=Object(j.a)(r,2),a=c[0],s=c[1],u=Object(i.useState)(e),o=Object(j.a)(u,2),d=o[0],O=o[1],p=Object(i.useState)(n),E=Object(j.a)(p,2),f=E[0],h=E[1],v=Object(l.b)();Object(i.useEffect)((function(){s(t),O(e),h(n)}),[t,e,n]);var T=function(e){v(x(e,{value:a,description:d,isExpense:f})),v(A()),_()},y=function(e){v(b({id:Object(Y.a)(),description:d,value:a,isExpense:f})),_()},_=function(){O(""),s(""),h(!0)};return{value:a,setValue:s,description:d,setDescription:O,isExpense:f,setIsExpense:h,addEntry:y,updateEntry:T}},U=n(213),C=n(223);var M=function(e){var t=e.description,n=e.value,r=e.isExpense,c=e.setValue,a=e.setDescription,s=e.setIsExpense;return Object(v.jsxs)(i.Fragment,{children:[Object(v.jsxs)(U.a.Group,{children:[Object(v.jsx)(U.a.Input,{icon:"tags",label:"Description",width:12,planceholder:"New shinny thing",onChange:function(e){return a(e.target.value)},value:t}),Object(v.jsx)(U.a.Input,{width:4,label:"value",planceholder:"100.00",icon:"dollar",iconPosition:"left",onChange:function(e){return c(e.target.value)},value:n})]}),Object(v.jsx)(y.a,{compact:!0,children:Object(v.jsx)(C.a,{toggle:!0,label:"is expense",checked:r,onChange:function(){return s((function(e){return!e}))}})})]})};var V=function(e){var t=e.isOpen,n=e.description,r=e.value,c=e.isExpense,a=e.id,i=Object(l.b)(),s=k(n,r,c);return Object(v.jsxs)(S.a,{open:t,children:[Object(v.jsx)(S.a.Header,{children:"Edit entry"}),Object(v.jsx)(S.a.Content,{children:Object(v.jsx)(M,Object(d.a)({},s))}),Object(v.jsxs)(S.a.Actions,{children:[Object(v.jsx)(P.a,{onClick:function(){return i(A())},children:"Close"}),Object(v.jsx)(P.a,{onClick:function(){return s.updateEntry(a)},primary:!0,children:"Ok"})]})]})};var G=function(e){var t=e.addEntry;return Object(v.jsxs)(P.a.Group,{style:{marginTop:20},children:[Object(v.jsx)(P.a,{children:"Cancel"}),Object(v.jsx)(P.a.Or,{}),Object(v.jsx)(P.a,{primary:!0,onClick:function(){return t()},children:"Ok"})]})};var z=function(){var e=k(),t=e.value,n=e.setValue,r=e.description,c=e.setDescription,a=e.isExpense,i=e.setIsExpense,s=e.addEntry;return Object(v.jsxs)(U.a,{unstackable:!0,children:[Object(v.jsx)(M,{description:r,isExpense:a,value:t,setValue:n,setDescription:c,setIsExpense:i}),Object(v.jsx)(G,{addEntry:s,description:r,value:t,isExpense:a})]})};var B=function(){var e=Object(i.useState)(0),t=Object(j.a)(e,2),n=t[0],r=t[1],c=Object(i.useState)(),a=Object(j.a)(c,2),s=a[0],u=a[1],o=Object(i.useState)(0),E=Object(j.a)(o,2),b=E[0],x=E[1],f=Object(i.useState)(0),h=Object(j.a)(f,2),y=h[0],_=h[1],D=Object(l.c)((function(e){return e.entries})),N=Object(l.c)((function(e){return e.modals})),m=N.isOpen,A=N.id;Object(i.useEffect)((function(){x(D.reduce((function(e,t){return t.isExpense?e:e+Number(t.value)}),0)),_(D.reduce((function(e,t){return t.isExpense?e+Number(t.value):e}),0)),r(D.reduce((function(e,t){return t.isExpense?e-t.value:e+Number(t.value)}),0))}),[D]),Object(i.useEffect)((function(){var e=D.findIndex((function(e){return e.id===A}));u(D[e])}),[m,A,D]);var g=Object(l.b)();return Object(i.useEffect)((function(){g({type:p.GET_ENTRIES})}),[g]),Object(v.jsxs)(O.a,{children:[Object(v.jsx)(I,{title:"Budget"}),Object(v.jsx)(T,{size:"small",title:"Your Balance: ",value:n}),Object(v.jsx)(R,{incomeTotal:b,expenseTotal:y}),Object(v.jsx)(I,{title:"History",type:"h3"}),Object(v.jsx)(L,{entries:D}),Object(v.jsx)(I,{title:"Add new transaction",type:"h3"}),Object(v.jsx)(z,{}),Object(v.jsx)(V,Object(d.a)({isOpen:m},s))]})},F=(n(180),n(42)),H=n(151),J=n(154),W=n(153),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.POPULATE_ENTRIES:return t.payload;case E.ADD_ENTRY_RESULT:return e.concat(t.payload);case E.REMOVE_ENTRY_RESULT:return e.filter((function(e){return e.id!==t.payload.id}));case E.POPULATE_ENTRY_DETAIL:case E.UPDATE_ENTRY:var n=Object(W.a)(e),r=n.findIndex((function(e){return e.id===t.payload.id}));return n[r]=Object(d.a)(Object(d.a)({},n[r]),t.payload.entry),n;default:return e}},K=[],Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isOpen:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.OPEN_EDIT_MODAL:return Object(d.a)(Object(d.a)({},e),{},{isOpen:!0,id:t.payload.id});case m.CLOSE_EDIT_MODAL:return Object(d.a)(Object(d.a)({},e),{},{isOpen:!1,id:null});default:return e}},X=n(89),Z=n(14),$=n.n(Z),ee=n(36),te=n(43),ne=n.n(te),re=$.a.mark(ce);function ce(){var e,t;return $.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,Object(ee.d)(E.REMOVE_ENTRY);case 3:return e=n.sent,t=e.payload,n.next=7,Object(ee.a)(ae,t.id);case 7:return n.next=9,Object(ee.c)({type:"REMOVE_ENTRY_RESULT",payload:{id:t.id}});case 9:n.next=0;break;case 11:case"end":return n.stop()}}),re)}function ae(e){return ie.apply(this,arguments)}function ie(){return(ie=Object(X.a)($.a.mark((function e(t){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne.a.delete("http://localhost:3001/entries/".concat(t));case 2:return e.next=4,ne.a.delete("http://localhost:3001/values/".concat(t));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var se=$.a.mark(oe),ue=$.a.mark(le);function oe(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.e)(E.ADD_ENTRY,le);case 2:case"end":return e.stop()}}),se)}function le(e){var t;return $.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.next=3,Object(ee.a)(de,t);case 3:return n.next=5,Object(ee.a)(Oe,t);case 5:return n.next=7,Object(ee.c)({type:E.ADD_ENTRY_RESULT,payload:t});case 7:case"end":return n.stop()}}),ue)}function de(e){return je.apply(this,arguments)}function je(){return(je=Object(X.a)($.a.mark((function e(t){var n,r;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,r=t.description,e.next=3,ne.a.post("http://localhost:3001/entries",{id:n,description:r});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Oe(e){return pe.apply(this,arguments)}function pe(){return(pe=Object(X.a)($.a.mark((function e(t){var n,r,c;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,r=t.isExpensive,c=t.value,e.next=3,ne.a.post("http://localhost:3001/values",{id:n,isExpensive:r,value:c});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ee=n(60),be=$.a.mark(he),xe=$.a.mark(ve),fe=$.a.mark(Te);function he(){var e,t;return $.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Ee.d)(E.GET_ENTRIES);case 2:return n.next=4,Object(Ee.a)(ne.a,"http://localhost:3001/entries");case 4:return e=n.sent,t=e.data,n.next=8,Object(Ee.c)({type:p.POPULATE_ENTRIES,payload:t});case 8:case"end":return n.stop()}}),be)}function ve(e){var t,n;return $.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(Ee.a)(ne.a,"http://localhost:3001/values/".concat(e));case 2:return t=r.sent,n=t.data,r.next=6,Object(Ee.c)(f(e,n));case 6:case"end":return r.stop()}}),xe)}function Te(){var e,t,n,r;return $.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(Ee.d)(E.POPULATE_ENTRIES);case 2:e=c.sent,t=e.payload,n=0;case 5:if(!(n<t.length)){c.next=12;break}return r=t[n],c.next=9,Object(Ee.b)(ve,r.id);case 9:n++,c.next=5;break;case 12:case"end":return c.stop()}}),fe)}var ye=Object(J.a)(),_e=[ye],Re=function(){var e,t=Object(F.createStore)(Object(F.combineReducers)({modals:Q,entries:q}),Object(H.composeWithDevTools)(F.applyMiddleware.apply(void 0,_e)));return e=ye,Object.values(a).forEach(e.run.bind(e)),Object.values(r).forEach(e.run.bind(e)),Object.values(c).forEach(e.run.bind(e)),t}();o.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(l.a,{store:Re,children:Object(v.jsx)(B,{})})}),document.getElementById("root"))}},[[200,1,2]]]);
//# sourceMappingURL=main.44255d1d.chunk.js.map