(this.webpackJsonpvariablfont=this.webpackJsonpvariablfont||[]).push([[0],{16:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var i=a(1),s=a.n(i),l=a(8),n=a.n(l),u=(a(16),a(2)),r=Object(i.createContext)(),c=a(9),o=a(3),m=a(6),d=a(11),f=a(10),b=a.n(f),v=a(0),p=function(e){var t=e.minVal,a=e.maxVal,i=e.val,s=e.slideChange,l=e.i;return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("input",{onChange:function(e){s(l,e.target.value)},type:"range",min:t,max:a,value:i,step:"1"})})},j=(a(25),function(e){var t=e.name,a=e.variations,s=e.applyFont,l={};a.forEach((function(e){l[e.name]=e.defaultVal}));var n=b()(t,l),r=Object(u.a)(n,2),c=r[0],f=r[1],j=Object(i.useState)(a),x=Object(u.a)(j,2),F=x[0],h=x[1],O=function(e,t){h((function(a){return a[e].defaultVal=Number(t),Object(d.a)(a)})),f(Object(m.a)({},F[e].name,Number(t)))};return Object(v.jsxs)("div",{className:"mb-5 rounded border border-gray-200 p-4 group opacity-50 hover:opacity-100",children:[Object(v.jsx)("div",{style:Object(o.a)({},c),className:"text-3xl mb-5 truncate",children:t}),F.map((function(e,t){return Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:"font-bold",children:[e.name," : ",e.defaultVal]}),Object(v.jsx)(p,{minVal:e.minVal,maxVal:e.maxVal,val:e.defaultVal,slideChange:O,i:t})]},e.name)})),Object(v.jsx)("button",{onClick:function(){return s(t,F)},className:"rounded py-1 px-3 bg-green-200  group-hover:bg-green-800 group-hover:text-white block w-full mt-4 ",children:"Apply"})]})}),x=function(e){var t=e.className,a=e.dispatch,i=e.selectedField,s=function(e,t){if(""!==i){var s={};t.forEach((function(e){var t=e.name,a=e.defaultVal;s[t]=a})),a({type:"set_font",fontUpdate:{fontFamily:e,variations:s},selectedField:i})}else alert("You must have selected \xe0 text field")};return Object(v.jsx)("div",{className:"p-4 bg-white h-screen fixed z-30 w-64 overflow-y-auto ".concat(t),children:c.map((function(e,t){return Object(v.jsx)("div",{children:Object(v.jsx)(j,{name:e.name,variations:e.variations,applyFont:s})},t)}))})},F=function(e){var t=Object.entries(e);return t.length?t.map((function(e){var t=Object(u.a)(e,2),a=t[0],i=t[1];return"'".concat(a,"' ").concat(i)})).join(", "):"normal"},h=function(e){var t=e.onFocusField,a=e.fontStyle,s=e.fieldName,l=e.className,n=e.children,u=Object(i.useRef)(),r=["".concat(l," hover:outline-none focus-visible:outline-none hover:ring hover:ring-blue-100 focus:ring focus:ring-blue-300")],c={fontFamily:a.fontFamily,fontVariationSettings:F(a.variations)};return Object(v.jsx)("div",{onClick:function(e){if(u.current.contains(e.target)){t(!0,s)}else;},contentEditable:!0,suppressContentEditableWarning:!0,ref:u,style:c,className:r,children:n})},O=function(e){var t=e.onFocusField,a=e.className,s=Object(i.useContext)(r).state;return Object(v.jsxs)("article",{className:"".concat(a),children:[Object(v.jsx)(h,{className:"text-6xl",fieldName:"title1",onFocusField:t,fontStyle:s.article.title1,children:"Etiam felis sapien"}),Object(v.jsx)(h,{className:"text-3xl mb-8",fieldName:"title2",onFocusField:t,fontStyle:s.article.title2,children:"Viverra eu pellentesque"}),Object(v.jsx)(h,{className:"mb-4",fieldName:"body",onFocusField:t,fontStyle:s.article.body,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed elit vitae sem fermentum fermentum sed quis est. Vestibulum sed efficitur magna, in pretium diam. Praesent auctor velit mauris, vel scelerisque sem egestas at. Vestibulum orci ligula, tristique id faucibus at, vestibulum nec tortor. Maecenas sagittis, purus eu auctor feugiat, nisi est rutrum turpis, in facilisis mi mauris ut sem. Vestibulum elit quam, placerat a venenatis quis, accumsan vel neque. Vestibulum nibh turpis, finibus dictum rutrum ac, placerat nec felis."}),Object(v.jsx)(h,{className:"text-2xl",fieldName:"title3",onFocusField:t,fontStyle:s.article.title3,children:"Quisque ultrices velit vitae volutpat"}),Object(v.jsx)(h,{className:"mb-4",fieldName:"body",onFocusField:t,fontStyle:s.article.body,children:"Ut facilisis ligula ut sapien facilisis porta. Etiam consequat, risus lobortis elementum pulvinar, velit elit interdum est, a ornare nisi diam et est. Vestibulum vitae blandit diam. Curabitur luctus efficitur risus ut ultricies."}),Object(v.jsx)(h,{className:"p-5 mb-4 md:py-5 md:px-10 md:mb-0 md:w-80 md:float-right",fieldName:"quote",onFocusField:t,fontStyle:s.article.quote,children:"Etiam ac tincidunt nisi, suscipit eleifend urna. Curabitur sit amet sollicitudin est. Nullam imperdiet orci quis malesuada rutrum. Ut viverra dictum risus, sed fermentum mauris vestibulum et."}),Object(v.jsx)(h,{className:"mb-4",fieldName:"body",onFocusField:t,fontStyle:s.article.body,children:"Donec interdum arcu metus, a ultrices justo convallis vitae. Sed a massa ultrices, ultrices sem eget, porttitor dolor. In non nisl nulla. Mauris vel quam at augue pellentesque elementum. Suspendisse finibus quis felis eget faucibus. Suspendisse eu lacus sit amet erat imperdiet sollicitudin. Donec gravida, arcu id lobortis commodo, nisi leo auctor justo, a semper urna quam at dui. Nulla interdum turpis quis nisl interdum, ut efficitur metus finibus. Praesent ac ex sodales, ullamcorper risus nec, venenatis dolor. Vivamus ipsum libero, sagittis nec malesuada et, euismod quis eros. Proin facilisis purus eget turpis consectetur, ullamcorper sodales libero varius. Duis congue est id massa faucibus gravida. Mauris faucibus nunc vel congue pharetra. Pellentesque eleifend mauris non arcu porttitor, tempus tristique est vulputate."})]})};var V=function(e,t){switch(t.type){case"set_font":var a=Object(o.a)({},e);return a.article[t.selectedField]=t.fontUpdate,a;case"set_selectedField":return Object(o.a)(Object(o.a)({},e),{},{selectedField:t.selectedField});case"reset":return t.payload;default:return e}},g=function(e){var t=e.onFocusField,a=e.children,s=Object(i.useRef)(),l=function(e){if(s.current.contains(e.target)){t(!1)}else;};return Object(i.useEffect)((function(){return document.addEventListener("mouseup",l),function(){document.removeEventListener("mouseup",l)}}),[]),Object(v.jsx)("div",{className:"h-full",ref:s,children:a})},N=function(e){var t=e.onFocusField,a=e.title,s=e.subTitle,l=e.desc,n=Object(i.useContext)(r).state;return Object(v.jsxs)("div",{className:"border border-gray-300 rounded p-6 mb-4",children:[Object(v.jsx)(h,{className:"text-2xl",fieldName:"title3",onFocusField:t,fontStyle:n.article.title3,children:a}),Object(v.jsx)(h,{className:"mb-4",fieldName:"title4",onFocusField:t,fontStyle:n.article.title4,children:s}),Object(v.jsx)(h,{className:"opacity-50",fieldName:"body",onFocusField:t,fontStyle:n.article.body,children:l})]})},y=function(e){var t=e.className,a=e.onFocusField;return Object(v.jsxs)("div",{className:"".concat(t),children:[Object(v.jsx)(N,{onFocusField:a,title:"Aliquam luctus purus nec tincidunt porta",subTitle:"Vestibulum ornare turpis et sapien",desc:"Nullam imperdiet orci quis malesuada rutrum. Ut viverra dictum risus, sed fermentum mauris vestibulum et. Suspendisse nunc dolor, efficitur sit amet vulputate at, blandit ac elit."}),Object(v.jsx)(N,{onFocusField:a,title:"Vivamus feugiat semper velit",subTitle:"Cras sed tortor vestibulum",desc:"Nullam imperdiet orci quis malesuada rutrum. Ut viverra dictum risus, sed fermentum mauris vestibulum et. Suspendisse nunc dolor, efficitur sit amet vulputate at, blandit ac elit."}),Object(v.jsx)(N,{onFocusField:a,title:"Cras sed tortor vestibulum",subTitle:"Nullam imperdiet orci quis",desc:"Nullam imperdiet orci quis malesuada rutrum. Ut viverra dictum risus, sed fermentum mauris vestibulum et. Suspendisse nunc dolor, efficitur sit amet vulputate at, blandit ac elit."}),Object(v.jsx)(N,{onFocusField:a,title:"Aliquam luctus purus nec tincidunt porta",subTitle:"Vestibulum ornare turpis et sapien",desc:"Nullam imperdiet orci quis malesuada rutrum. Ut viverra dictum risus, sed fermentum mauris vestibulum et. Suspendisse nunc dolor, efficitur sit amet vulputate at, blandit ac elit."})]})},S=function(){var e=Object(i.useState)(!1),t=Object(u.a)(e,2),a=t[0],s=t[1],l=Object(i.useReducer)(V,{selectedField:"",article:{title1:{fontFamily:"Fraunces",variations:{SOFT:67,WONK:0,opsz:9,wght:652}},title2:{fontFamily:"Source Sans",variations:{wght:200}},title3:{fontFamily:"Source Sans",variations:{wght:500}},title4:{fontFamily:"Source Sans",variations:{wght:800}},body:{fontFamily:"Montserrat",variations:{wght:300}},quote:{fontFamily:"Montserrat",variations:{wght:300}}}}),n=Object(u.a)(l,2),c=n[0],o=n[1],m=function(e,t){if(e)return s(!0),void o({type:"set_selectedField",selectedField:t});s(!1),o({type:"set_selectedField",selectedField:""})};return Object(v.jsxs)(r.Provider,{value:{state:c,dispatch:o},children:[Object(v.jsx)(x,{className:"".concat(a?"shadow-2xl":"transform -translate-x-full"," transition-transform transition-shadow"),dispatch:o,selectedField:c.selectedField}),Object(v.jsx)(g,{onFocusField:m,children:Object(v.jsxs)("div",{className:"".concat(a?"transform translate-x-52":""," origin-center transition-transform p-8 md:p-24 md:pb-2 lg:flex items-center"),children:[Object(v.jsx)(O,{className:"flex-1",onFocusField:m}),Object(v.jsx)(y,{className:"flex-1  lg:ml-6  xl:ml-12",onFocusField:m})]})})]})};n.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(S,{})}),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('[{"name":"Decovar","variations":[{"name":"BLDA","defaultVal":200,"minVal":0,"maxVal":1000},{"name":"TRMC","defaultVal":900,"minVal":0,"maxVal":1000},{"name":"TRMK","defaultVal":400,"minVal":0,"maxVal":1000}]},{"name":"Source Sans","variations":[{"name":"wght","defaultVal":500,"minVal":200,"maxVal":900}]},{"name":"Montserrat","variations":[{"name":"wght","defaultVal":400,"minVal":100,"maxVal":900}]},{"name":"Montserrat italic","variations":[{"name":"wght","defaultVal":400,"minVal":100,"maxVal":900}]},{"name":"Fraunces","variations":[{"name":"opsz","defaultVal":400,"minVal":9,"maxVal":144},{"name":"wght","defaultVal":400,"minVal":100,"maxVal":900},{"name":"SOFT","defaultVal":400,"minVal":0,"maxVal":100},{"name":"WONK","defaultVal":0,"minVal":0,"maxVal":1}]},{"name":"Fraunces italic","variations":[{"name":"opsz","defaultVal":400,"minVal":9,"maxVal":144},{"name":"wght","defaultVal":400,"minVal":100,"maxVal":900},{"name":"SOFT","defaultVal":400,"minVal":0,"maxVal":100},{"name":"WONK","defaultVal":0,"minVal":0,"maxVal":1}]}]')}},[[26,1,2]]]);
//# sourceMappingURL=main.75068507.chunk.js.map