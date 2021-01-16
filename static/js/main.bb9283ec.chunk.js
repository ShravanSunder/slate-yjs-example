(this["webpackJsonpslate-yjs-example"]=this["webpackJsonpslate-yjs-example"]||[]).push([[0],{1360:function(n,e,t){"use strict";t.r(e);var r=t(7),c=t(3),i=t(38),o=t.n(i),a=t(21),u=t(0),l=t(20),s=t(29),d=t.n(s),j=t(17),b=t(44),f=t.n(b),p=t(1),O=t(58),x=t(32),m=t(48),h=t(57),v=t(15);function g(){var n=Object(a.a)(["\n  box-shadow: 2px 2px 4px rgba(128, 128, 128, 0.2);\n  padding: 10px;\n  min-height: 70px;\n  margin-left: -10px;\n  margin-right: -10px;\n  background: white;\n  blockquote {\n    border-left: 2px solid #ddd;\n    margin-left: 0;\n    margin-right: 0;\n    padding-left: 10px;\n    color: #aaa;\n    font-style: italic;\n  }\n  a {\n    color: purple;\n    text-decoration: none;\n  }\n  a:visited {\n    color: darkmagenta;\n  }\n"]);return g=function(){return n},n}function k(){var n=Object(a.a)(["\n  background: ",";\n  padding: 20px 20px 30px;\n"]);return k=function(){return n},n}function y(){var n=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n  @media (max-width: 767px) {\n    flex-wrap: wrap;\n  }\n"]);return y=function(){return n},n}function w(){var n=Object(a.a)(["\n  display: grid;\n  grid-gap: 1vw;\n  grid-template-columns: 1fr 1fr;\n  @media (max-width: 767px) {\n    grid-template-columns: 1fr;\n  }\n"]);return w=function(){return n},n}function C(){var n=Object(a.a)([""]);return C=function(){return n},n}function N(){var n=Object(a.a)(["\n  padding: 6px 14px;\n  display: block;\n  outline: none;\n  background-color: transparent;\n  font-size: 14px;\n  text-align: center;\n  color: palevioletred;\n  white-space: nowrap;\n  border: 2px solid palevioletred;\n  & + button {\n    margin-left: 10px;\n  }\n"]);return N=function(){return n},n}function D(){var n=Object(a.a)(["\n  padding: 6px 14px;\n  font-size: 14px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  min-width: 240px;\n  outline: none;\n  border: 2px solid palevioletred;\n  margin-right: auto;\n"]);return D=function(){return n},n}function _(){var n=Object(a.a)(["\n  margin: 0;\n  padding-right: 10px;\n"]);return _=function(){return n},n}function E(){var n=Object(a.a)(["\n  padding-bottom: 10px;\n  border-bottom: 2px solid #e8e8e8;\n"]);return E=function(){return n},n}var M=l.a.div(E()),R=l.a.h4(_()),S=l.a.input(D()),q=l.a.button(N()),z=Object(l.a)(q)((function(n){return{color:n.active?"mediumvioletred":"lightpink",border:"none",padding:0}})),I=l.a.div(C()),T=l.a.div(w()),A=l.a.div(y()),U=l.a.div(k(),(function(n){return n.online?"rgba(128, 128, 128, 0.1)":"rgba(247, 0, 0, 0.2)"})),B=l.a.div(g()),J=["numbered-list","bulleted-list"],L=function(n,e){var t=p.a.nodes(n,{match:function(n){return n.type===e}});return!!Object(u.a)(t,1)[0]},G=t(47),H=t.n(G),W=function(n){var e=p.a.nodes(n,{match:function(n){return"link"===n.type}});return!!Object(u.a)(e,1)[0]},F=function(n){p.h.unwrapNodes(n,{match:function(n){return"link"===n.type}})},K=function(n,e){W(n)&&F(n);var t=n.selection,r=t&&p.f.isCollapsed(t),c={type:"link",href:e,children:r?[{text:e}]:[]};r?p.h.insertNodes(n,c):(p.h.wrapNodes(n,c,{split:!0}),p.h.collapse(n,{edge:"end"}))},P=function(n,e){var t=p.a.marks(n);return!!t&&!0===t[e]},Q=function(n){return Object(r.jsx)(X,Object(j.a)({},n))},V=function(n){var e=n.editor,t=n.value,i=n.onChange,o=Object(c.useCallback)((function(n){return Object(r.jsx)(Y,Object(j.a)({},n))}),[]);return Object(r.jsx)(B,{children:Object(r.jsxs)(x.b,{editor:e,value:t,onChange:i,children:[Object(r.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",position:"sticky",top:0,backgroundColor:"white",zIndex:1},children:[Object(r.jsx)($,{format:"bold",icon:"format_bold"}),Object(r.jsx)($,{format:"italic",icon:"format_italic"}),Object(r.jsx)($,{format:"underline",icon:"format_underlined"}),Object(r.jsx)($,{format:"code",icon:"code"}),Object(r.jsx)(Z,{format:"heading-one",icon:"looks_one"}),Object(r.jsx)(Z,{format:"heading-two",icon:"looks_two"}),Object(r.jsx)(Z,{format:"block-quote",icon:"format_quote"}),Object(r.jsx)(Z,{format:"numbered-list",icon:"format_list_numbered"}),Object(r.jsx)(Z,{format:"bulleted-list",icon:"format_list_bulleted"}),Object(r.jsx)(nn,{})]}),Object(r.jsx)(x.a,{renderElement:Q,renderLeaf:o})]})})},X=function(n){var e=n.attributes,t=n.children,c=n.element;switch(c.type){case"link":return Object(r.jsx)("a",Object(j.a)(Object(j.a)({},e),{},{href:c.href,children:t}));case"block-quote":return Object(r.jsx)("blockquote",Object(j.a)(Object(j.a)({},e),{},{children:t}));case"bulleted-list":return Object(r.jsx)("ul",Object(j.a)(Object(j.a)({},e),{},{children:t}));case"heading-one":return Object(r.jsx)("h1",Object(j.a)(Object(j.a)({},e),{},{children:t}));case"heading-two":return Object(r.jsx)("h2",Object(j.a)(Object(j.a)({},e),{},{children:t}));case"list-item":return Object(r.jsx)("li",Object(j.a)(Object(j.a)({},e),{},{children:t}));case"numbered-list":return Object(r.jsx)("ol",Object(j.a)(Object(j.a)({},e),{},{children:t}));default:return Object(r.jsx)("p",Object(j.a)(Object(j.a)({},e),{},{children:t}))}},Y=function(n){var e=n.attributes,t=n.children,c=n.leaf;return c.bold&&(t=Object(r.jsx)("strong",{children:t})),c.code&&(t=Object(r.jsx)("code",{children:t})),c.italic&&(t=Object(r.jsx)("em",{children:t})),c.underline&&(t=Object(r.jsx)("u",{children:t})),Object(r.jsx)("span",Object(j.a)(Object(j.a)({},e),{},{style:{position:"relative",backgroundColor:c.alphaColor},children:t}))},Z=function(n){var e=n.format,t=n.icon,c=Object(x.c)();return Object(r.jsx)(z,{active:L(c,e),onMouseDown:function(n){n.preventDefault(),function(n,e){var t=L(n,e),r=J.includes(e);if(p.h.unwrapNodes(n,{match:function(n){return J.includes(n.type)},split:!0}),p.h.setNodes(n,{type:t?"paragraph":r?"list-item":e}),!t&&r){var c={type:e,children:[]};p.h.wrapNodes(n,c)}}(c,e)},children:Object(r.jsx)(I,{className:"material-icons",children:t})})},$=function(n){var e=n.format,t=n.icon,c=Object(x.c)();return Object(r.jsx)(z,{active:P(c,e),onMouseDown:function(n){n.preventDefault(),function(n,e){P(n,e)?p.a.removeMark(n,e):p.a.addMark(n,e,!0)}(c,e)},children:Object(r.jsx)(I,{className:"material-icons",children:t})})},nn=function(){var n=Object(x.c)(),e=W(n);return Object(r.jsx)(z,{active:e,onMouseDown:function(t){if(t.preventDefault(),e)return F(n);var r=window.prompt("Enter the URL of the link:");r&&function(n,e){n.selection&&K(n,e)}(n,r)},children:Object(r.jsx)(I,{className:"material-icons",children:"link"})})};function en(){var n=Object(a.a)(["\n  margin-right: auto;\n"]);return en=function(){return n},n}var tn=function(n){var e=n.id,t=n.name,i=n.slug,o=n.removeUser,a=Object(c.useState)([]),l=Object(u.a)(a,2),s=l[0],d=l[1],j=Object(c.useState)(!1),b=Object(u.a)(j,2),f=b[0],g=b[1],k=Object(c.useMemo)((function(){var n=new v.c;return[n.getArray("content"),new h.a("wss://demos.yjs.dev/slate-demo",i,n,{connect:!1})]}),[e]),y=Object(u.a)(k,2),w=y[0],C=y[1],N=Object(c.useMemo)((function(){return Object(m.b)(function(n){var e=n,t=e.insertData,r=e.insertText,c=e.isInline;return e.isInline=function(n){return"link"===n.type||c(n)},e.insertText=function(e){e&&H()(e)?K(n,e):r(e)},e.insertData=function(e){var r=e.getData("text/plain");r&&H()(r)?K(n,r):t(e)},e}(Object(x.d)(Object(O.a)(Object(p.i)()))),w)}),[w]);Object(c.useEffect)((function(){return C.on("status",(function(n){var e=n.status;g("connected"===e)})),C.on("sync",(function(n){n&&0===w.length&&Object(m.a)(w,[{type:"paragraph",children:[{text:"Hello world!"}]}])})),C.connect(),function(){C.disconnect()}}),[C]);return Object(r.jsxs)(U,{online:f,children:[Object(r.jsxs)(A,{children:[Object(r.jsxs)(rn,{children:["Editor: ",t]}),Object(r.jsxs)("div",{style:{display:"flex",marginTop:10,marginBottom:10},children:[Object(r.jsxs)(q,{type:"button",onClick:function(){f?C.disconnect():C.connect()},children:["Go ",f?"offline":"online"]}),Object(r.jsx)(q,{type:"button",onClick:function(){return o(e)},children:"Remove"})]})]}),Object(r.jsx)(V,{editor:N,value:s,onChange:function(n){return d(n)}})]})},rn=Object(l.a)(R)(en()),cn=function(){return{id:d.a.random.uuid(),name:"".concat(d.a.name.firstName()," ").concat(d.a.name.lastName())}},on=function(n){var e=n.slug,t=n.removeRoom,i=Object(c.useState)([cn(),cn()]),o=Object(u.a)(i,2),a=o[0],l=o[1],s=Object(c.useState)(e),d=Object(u.a)(s,2),b=d[0],p=d[1],O=Object(c.useState)(!1),x=Object(u.a)(O,2),m=x[0],h=x[1],v=f()((function(){h(!0),setTimeout(h,50,!1)}),300),g=function(n){return l((function(e){return e.filter((function(e){return e.id!==n}))}))};return Object(r.jsxs)(M,{children:[Object(r.jsxs)(A,{children:[Object(r.jsx)(R,{children:"Document slug:"}),Object(r.jsx)(S,{type:"text",value:b,onChange:function(n){p(n.target.value),v()}}),Object(r.jsx)(q,{type:"button",onClick:function(){return l((function(n){return n.concat(cn())}))},children:"Add random user"}),Object(r.jsx)(q,{type:"button",onClick:t,children:"Remove Room"})]}),Object(r.jsx)(T,{children:a.map((function(n){return m?null:Object(c.createElement)(tn,Object(j.a)(Object(j.a)({},n),{},{slug:b,key:n.id,removeUser:g}))}))})]})};function an(){var n=Object(a.a)(["\n  margin-left: 0px;\n  color: violet;\n  margin-bottom: 10px;\n  border: 2px solid violet;\n"]);return an=function(){return n},n}function un(){var n=Object(a.a)(["\n  padding: 6px 14px;\n  display: block;\n  outline: none;\n  font-size: 14px;\n  max-width: 200px;\n  text-align: center;\n  color: palevioletred;\n  border: 2px solid palevioletred;\n"]);return un=function(){return n},n}function ln(){var n=Object(a.a)(["\n  display: flex;\n"]);return ln=function(){return n},n}var sn=function(){var n=Object(c.useState)([]),e=Object(u.a)(n,2),t=e[0],i=e[1],o=function(){return i(t.concat(d.a.lorem.slug(4)))},a=function(n){return function(){return i(t.filter((function(e){return e!==n})))}};return Object(c.useEffect)((function(){o()}),[]),Object(r.jsxs)("div",{children:[Object(r.jsx)(dn,{children:Object(r.jsx)(bn,{type:"button",onClick:o,children:"Add Room"})}),t.map((function(n){return Object(r.jsx)(on,{slug:n,removeRoom:a(n)},n)}))]})},dn=l.a.div(ln()),jn=l.a.button(un()),bn=Object(l.a)(jn)(an());o.a.render(Object(r.jsx)(sn,{}),document.getElementById("root"))}},[[1360,1,2]]]);
//# sourceMappingURL=main.bb9283ec.chunk.js.map