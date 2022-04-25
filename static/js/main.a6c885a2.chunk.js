(this["webpackJsonpair-quality-dashboard"]=this["webpackJsonpair-quality-dashboard"]||[]).push([[0],{311:function(e,s,t){},321:function(e,s,t){},339:function(e,s,t){},340:function(e,s,t){},476:function(e,s,t){},477:function(e,s,t){},478:function(e,s,t){},479:function(e,s,t){},480:function(e,s,t){},483:function(e,s,t){},484:function(e,s,t){},485:function(e,s,t){},486:function(e,s,t){},487:function(e,s,t){},489:function(e,s,t){"use strict";t.r(s);var a=t(0),c=t.n(a),i=t(24),r=t.n(i),n=(t(311),t(541)),l=t(544),o=t(545),d=t(254),j=t.n(d),p=t(255),m=t.n(p),u=t(48),b=t(1);function h(){return Object(b.jsx)("div",{className:"sidebar",children:Object(b.jsxs)("div",{className:"sidebarWrapper",children:[Object(b.jsxs)("div",{className:"sidebarMenu",children:[Object(b.jsx)("h3",{className:"sidebarTitle",children:"Dashboard"}),Object(b.jsxs)("ul",{className:"sidebarList",children:[Object(b.jsx)(u.b,{to:"/",className:"link",children:Object(b.jsxs)("li",{className:"sidebarListItem active",children:[Object(b.jsx)(n.a,{className:"sidebarIcon"}),"Home"]})}),Object(b.jsxs)("li",{className:"sidebarListItem",children:[Object(b.jsx)(l.a,{className:"sidebarIcon"}),"Analytics"]})]})]}),Object(b.jsxs)("div",{className:"sidebarMenu",children:[Object(b.jsx)("h3",{className:"sidebarTitle",children:"Quick Menu"}),Object(b.jsx)("ul",{className:"sidebarList",children:Object(b.jsx)(u.b,{to:"/users",className:"link",children:Object(b.jsxs)("li",{className:"sidebarListItem",children:[Object(b.jsx)(o.a,{className:"sidebarIcon"}),"Users"]})})})]}),Object(b.jsxs)("div",{className:"sidebarMenu",children:[Object(b.jsx)("h3",{className:"sidebarTitle",children:"History"}),Object(b.jsxs)("ul",{className:"sidebarList",children:[Object(b.jsxs)("li",{className:"sidebarListItem",children:[Object(b.jsx)(j.a,{className:"sidebarIcon"}),"Environment Condition"]}),Object(b.jsxs)("li",{className:"sidebarListItem",children:[Object(b.jsx)(m.a,{className:"sidebarIcon"}),"Air Quality"]})]})]})]})})}var x=t(7),O=(t(321),t(256)),N=t.n(O),v=t(99),f=t.n(v);function g(){var e=Object(a.useState)(null),s=Object(x.a)(e,2),t=s[0],c=s[1];return Object(a.useEffect)((function(){f.a.get("http://airquality-g3.herokuapp.com/sensor").then((function(e){c(e.data.at(0).loc)}))}),[]),t?Object(b.jsx)("div",{className:"topbar",children:Object(b.jsxs)("div",{className:"topbarWrapper",children:[Object(b.jsx)("div",{className:"topLeft",children:Object(b.jsx)("span",{className:"logo",children:"Air Quality Monitoring \ud83d\udca8"})}),Object(b.jsx)("div",{className:"topRight",children:Object(b.jsxs)("div",{className:"topbarIconContainer",children:[Object(b.jsx)(N.a,{style:{color:"red"}}),Object(b.jsxs)("span",{className:"topbarIconDesc",children:[t,", Indonesia"]})]})})]})}):null}t(339),t(340);var w=t(546),I=t(561),y=t(271),U=t(279),S=t(129),A=t(550);function k(e){var s=e.title,t=(e.data,e.dataKey,e.grid),c=Object(a.useState)(null),i=Object(x.a)(c,2),r=i[0],n=i[1];return Object(a.useEffect)((function(){f.a.get("http://airquality-g3.herokuapp.com/composition").then((function(e){console.log(e.data),n(e.data)}))}),[]),r?(r.forEach((function(e){return function(e){e.PPM=Number(e.comp.toFixed(2)),e["Update Time"]=new Date(e.datetime).toLocaleString("in-ID")}(e)})),console.log(r),Object(b.jsxs)("div",{className:"chart",children:[Object(b.jsx)("h3",{className:"chartTitle",children:s}),Object(b.jsx)(w.a,{width:"100%",aspect:4,children:Object(b.jsxs)(I.a,{data:r,children:[Object(b.jsx)(y.a,{dataKey:"Update Time",stroke:"#5550bd"}),Object(b.jsx)(U.a,{type:"monotone",dataKey:"PPM",stroke:"#5550bd"}),Object(b.jsx)(S.a,{}),t&&Object(b.jsx)(A.a,{stroke:"#e0dfdf",strokeDasharray:"5 5"})]})})]})):null}t(476);var T=t(272),L=t.n(T),P=t(273),C=t.n(P),M=t(274),$=t.n(M);function F(){var e=Object(a.useState)(null),s=Object(x.a)(e,2),t=s[0],c=s[1],i=Object(a.useState)(null),r=Object(x.a)(i,2),n=r[0],l=r[1],o=Object(a.useState)(null),d=Object(x.a)(o,2),j=d[0],p=d[1],m=Object(a.useState)(null),u=Object(x.a)(m,2),h=u[0],O=u[1];return Object(a.useEffect)((function(){f.a.get("http://airquality-g3.herokuapp.com/condition").then((function(e){c(Number(e.data.at(-1).temperature).toFixed(2)),l(Number(e.data.at(-1).humidity).toFixed(2)),p(Number(e.data.at(-1).pressure).toFixed(2)),O(new Date(e.data.at(-1).datetime))}))}),[]),t&&n&&j&&h?Object(b.jsxs)("div",{className:"featured",children:[Object(b.jsxs)("div",{className:"featuredItem",children:[Object(b.jsx)("span",{className:"featuredTitle",children:"Temperature"}),Object(b.jsxs)("div",{className:"featuredMeasurementContainer",children:[Object(b.jsx)(L.a,{className:"featuredTempIcon",style:{fontSize:80}}),Object(b.jsxs)("span",{className:"featuredMeasurement",children:[t,Object(b.jsx)("span",{className:"featuredMeasurementUnit",children:"\u2103"})]})]}),Object(b.jsx)("div",{className:"featuredLastTimeUpdateContainer",children:Object(b.jsxs)("span",{className:"featuredLastTimeUpdate",children:["Last update: ",h.toLocaleString("in-ID")]})})]}),Object(b.jsxs)("div",{className:"featuredItem",children:[Object(b.jsx)("span",{className:"featuredTitle",children:"Humidity"}),Object(b.jsxs)("div",{className:"featuredMeasurementContainer",children:[Object(b.jsx)(C.a,{className:"featuredHumIcon",style:{fontSize:80}}),Object(b.jsxs)("span",{className:"featuredMeasurement",children:[n,Object(b.jsx)("span",{className:"featuredMeasurementUnit",children:"%"})]})]}),Object(b.jsx)("div",{className:"featuredLastTimeUpdateContainer",children:Object(b.jsxs)("span",{className:"featuredLastTimeUpdate",children:["Last update: ",h.toLocaleString("in-ID")]})})]}),Object(b.jsxs)("div",{className:"featuredItem",children:[Object(b.jsx)("span",{className:"featuredTitle",children:"Pressure"}),Object(b.jsxs)("div",{className:"featuredMeasurementContainer",children:[Object(b.jsx)($.a,{className:"featuredPressIcon",style:{fontSize:80}}),Object(b.jsxs)("span",{className:"featuredMeasurement",children:[j,Object(b.jsx)("span",{className:"featuredMeasurementUnit",children:"hPa"})]})]}),Object(b.jsx)("div",{className:"featuredLastTimeUpdateContainer",children:Object(b.jsxs)("span",{className:"featuredLastTimeUpdate",children:["Last update: ",h.toLocaleString("in-ID")]})})]})]}):null}t(477);var J=[{name:"Jan","Active User":4e3},{name:"Feb","Active User":3e3},{name:"Mar","Active User":5e3},{name:"Apr","Active User":4e3},{name:"May","Active User":3e3},{name:"Jun","Active User":2e3},{name:"Jul","Active User":4e3},{name:"Agu","Active User":3e3},{name:"Sep","Active User":4e3},{name:"Oct","Active User":1e3},{name:"Nov","Active User":4e3},{name:"Dec","Active User":3e3}],D=[{name:"Jan",Sales:4e3},{name:"Feb",Sales:3e3},{name:"Mar",Sales:5e3}],E=[{id:1,username:"Jon Snow",avatar:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"jon@gmail.com",status:"active",transaction:"$120.00"},{id:2,username:"Jon Snow",avatar:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"jon@gmail.com",status:"active",transaction:"$120.00"},{id:3,username:"Jon Snow",avatar:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"jon@gmail.com",status:"active",transaction:"$120.00"},{id:4,username:"Jon Snow",avatar:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"jon@gmail.com",status:"active",transaction:"$120.00"},{id:5,username:"Jon Snow",avatar:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"jon@gmail.com",status:"active",transaction:"$120.00"},{id:6,username:"Jon Snow",avatar:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"jon@gmail.com",status:"active",transaction:"$120.00"},{id:7,username:"Jon Snow",avatar:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"jon@gmail.com",status:"active",transaction:"$120.00"},{id:8,username:"Jon Snow",avatar:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"jon@gmail.com",status:"active",transaction:"$120.00"},{id:9,username:"Jon Snow",avatar:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"jon@gmail.com",status:"active",transaction:"$120.00"},{id:10,username:"Jon Snow",avatar:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"jon@gmail.com",status:"active",transaction:"$120.00"}],B=[{id:1,name:"Apple Airpods",img:"https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",stock:123,status:"active",price:"$120.00"},{id:2,name:"Apple Airpods",img:"https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",stock:123,status:"active",price:"$120.00"},{id:3,name:"Apple Airpods",img:"https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",stock:123,status:"active",price:"$120.00"},{id:4,name:"Apple Airpods",img:"https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",stock:123,status:"active",price:"$120.00"},{id:5,name:"Apple Airpods",img:"https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",stock:123,status:"active",price:"$120.00"},{id:6,name:"Apple Airpods",img:"https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",stock:123,status:"active",price:"$120.00"},{id:7,name:"Apple Airpods",img:"https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",stock:123,status:"active",price:"$120.00"},{id:8,name:"Apple Airpods",img:"https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",stock:123,status:"active",price:"$120.00"},{id:9,name:"Apple Airpods",img:"https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",stock:123,status:"active",price:"$120.00"},{id:10,name:"Apple Airpods",img:"https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",stock:123,status:"active",price:"$120.00"}];t(478),t(551);t(479);function K(){return Object(b.jsxs)("div",{className:"home",children:[Object(b.jsx)(F,{}),Object(b.jsx)(k,{data:J,title:"Air Quality",grid:!0,dataKey:"Active User"})]})}var Y=t(33),q=(t(480),t(152)),z=t(552);function V(){var e=Object(a.useState)(E),s=Object(x.a)(e,2),t=s[0],c=s[1],i=[{field:"id",headerName:"ID",width:90},{field:"user",headerName:"User",width:200,renderCell:function(e){return Object(b.jsxs)("div",{className:"userListUser",children:[Object(b.jsx)("img",{className:"userListImg",src:e.row.avatar,alt:""}),e.row.username]})}},{field:"email",headerName:"Email",width:200},{field:"status",headerName:"Status",width:120},{field:"transaction",headerName:"Transaction Volume",width:160},{field:"action",headerName:"Action",width:150,renderCell:function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u.b,{to:"/user/"+e.row.id,children:Object(b.jsx)("button",{className:"userListEdit",children:"Edit"})}),Object(b.jsx)(z.a,{className:"userListDelete",onClick:function(){return s=e.row.id,void c(t.filter((function(e){return e.id!==s})));var s}})]})}}];return Object(b.jsx)("div",{className:"userList",children:Object(b.jsx)(q.a,{rows:t,disableSelectionOnClick:!0,columns:i,pageSize:8,checkboxSelection:!0})})}var H=t(555),Q=t(556),R=t(557),G=t(558),W=t(559);t(483);function X(){return Object(b.jsxs)("div",{className:"user",children:[Object(b.jsxs)("div",{className:"userTitleContainer",children:[Object(b.jsx)("h1",{className:"userTitle",children:"Edit User"}),Object(b.jsx)(u.b,{to:"/newUser",children:Object(b.jsx)("button",{className:"userAddButton",children:"Create"})})]}),Object(b.jsxs)("div",{className:"userContainer",children:[Object(b.jsxs)("div",{className:"userShow",children:[Object(b.jsxs)("div",{className:"userShowTop",children:[Object(b.jsx)("img",{src:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",alt:"",className:"userShowImg"}),Object(b.jsxs)("div",{className:"userShowTopTitle",children:[Object(b.jsx)("span",{className:"userShowUsername",children:"Anna Becker"}),Object(b.jsx)("span",{className:"userShowUserTitle",children:"Software Engineer"})]})]}),Object(b.jsxs)("div",{className:"userShowBottom",children:[Object(b.jsx)("span",{className:"userShowTitle",children:"Account Details"}),Object(b.jsxs)("div",{className:"userShowInfo",children:[Object(b.jsx)(o.a,{className:"userShowIcon"}),Object(b.jsx)("span",{className:"userShowInfoTitle",children:"annabeck99"})]}),Object(b.jsxs)("div",{className:"userShowInfo",children:[Object(b.jsx)(H.a,{className:"userShowIcon"}),Object(b.jsx)("span",{className:"userShowInfoTitle",children:"10.12.1999"})]}),Object(b.jsx)("span",{className:"userShowTitle",children:"Contact Details"}),Object(b.jsxs)("div",{className:"userShowInfo",children:[Object(b.jsx)(Q.a,{className:"userShowIcon"}),Object(b.jsx)("span",{className:"userShowInfoTitle",children:"+1 123 456 67"})]}),Object(b.jsxs)("div",{className:"userShowInfo",children:[Object(b.jsx)(R.a,{className:"userShowIcon"}),Object(b.jsx)("span",{className:"userShowInfoTitle",children:"annabeck99@gmail.com"})]}),Object(b.jsxs)("div",{className:"userShowInfo",children:[Object(b.jsx)(G.a,{className:"userShowIcon"}),Object(b.jsx)("span",{className:"userShowInfoTitle",children:"New York | USA"})]})]})]}),Object(b.jsxs)("div",{className:"userUpdate",children:[Object(b.jsx)("span",{className:"userUpdateTitle",children:"Edit"}),Object(b.jsxs)("form",{className:"userUpdateForm",children:[Object(b.jsxs)("div",{className:"userUpdateLeft",children:[Object(b.jsxs)("div",{className:"userUpdateItem",children:[Object(b.jsx)("label",{children:"Username"}),Object(b.jsx)("input",{type:"text",placeholder:"annabeck99",className:"userUpdateInput"})]}),Object(b.jsxs)("div",{className:"userUpdateItem",children:[Object(b.jsx)("label",{children:"Full Name"}),Object(b.jsx)("input",{type:"text",placeholder:"Anna Becker",className:"userUpdateInput"})]}),Object(b.jsxs)("div",{className:"userUpdateItem",children:[Object(b.jsx)("label",{children:"Email"}),Object(b.jsx)("input",{type:"text",placeholder:"annabeck99@gmail.com",className:"userUpdateInput"})]}),Object(b.jsxs)("div",{className:"userUpdateItem",children:[Object(b.jsx)("label",{children:"Phone"}),Object(b.jsx)("input",{type:"text",placeholder:"+1 123 456 67",className:"userUpdateInput"})]}),Object(b.jsxs)("div",{className:"userUpdateItem",children:[Object(b.jsx)("label",{children:"Address"}),Object(b.jsx)("input",{type:"text",placeholder:"New York | USA",className:"userUpdateInput"})]})]}),Object(b.jsxs)("div",{className:"userUpdateRight",children:[Object(b.jsxs)("div",{className:"userUpdateUpload",children:[Object(b.jsx)("img",{className:"userUpdateImg",src:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",alt:""}),Object(b.jsx)("label",{htmlFor:"file",children:Object(b.jsx)(W.a,{className:"userUpdateIcon"})}),Object(b.jsx)("input",{type:"file",id:"file",style:{display:"none"}})]}),Object(b.jsx)("button",{className:"userUpdateButton",children:"Update"})]})]})]})]})]})}t(484);function Z(){return Object(b.jsxs)("div",{className:"newUser",children:[Object(b.jsx)("h1",{className:"newUserTitle",children:"New User"}),Object(b.jsxs)("form",{className:"newUserForm",children:[Object(b.jsxs)("div",{className:"newUserItem",children:[Object(b.jsx)("label",{children:"Username"}),Object(b.jsx)("input",{type:"text",placeholder:"john"})]}),Object(b.jsxs)("div",{className:"newUserItem",children:[Object(b.jsx)("label",{children:"Full Name"}),Object(b.jsx)("input",{type:"text",placeholder:"John Smith"})]}),Object(b.jsxs)("div",{className:"newUserItem",children:[Object(b.jsx)("label",{children:"Email"}),Object(b.jsx)("input",{type:"email",placeholder:"john@gmail.com"})]}),Object(b.jsxs)("div",{className:"newUserItem",children:[Object(b.jsx)("label",{children:"Password"}),Object(b.jsx)("input",{type:"password",placeholder:"password"})]}),Object(b.jsxs)("div",{className:"newUserItem",children:[Object(b.jsx)("label",{children:"Phone"}),Object(b.jsx)("input",{type:"text",placeholder:"+1 123 456 78"})]}),Object(b.jsxs)("div",{className:"newUserItem",children:[Object(b.jsx)("label",{children:"Address"}),Object(b.jsx)("input",{type:"text",placeholder:"New York | USA"})]}),Object(b.jsxs)("div",{className:"newUserItem",children:[Object(b.jsx)("label",{children:"Gender"}),Object(b.jsxs)("div",{className:"newUserGender",children:[Object(b.jsx)("input",{type:"radio",name:"gender",id:"male",value:"male"}),Object(b.jsx)("label",{for:"male",children:"Male"}),Object(b.jsx)("input",{type:"radio",name:"gender",id:"female",value:"female"}),Object(b.jsx)("label",{for:"female",children:"Female"}),Object(b.jsx)("input",{type:"radio",name:"gender",id:"other",value:"other"}),Object(b.jsx)("label",{for:"other",children:"Other"})]})]}),Object(b.jsxs)("div",{className:"newUserItem",children:[Object(b.jsx)("label",{children:"Active"}),Object(b.jsxs)("select",{className:"newUserSelect",name:"active",id:"active",children:[Object(b.jsx)("option",{value:"yes",children:"Yes"}),Object(b.jsx)("option",{value:"no",children:"No"})]})]}),Object(b.jsx)("button",{className:"newUserButton",children:"Create"})]})]})}t(485);function _(){var e=Object(a.useState)(B),s=Object(x.a)(e,2),t=s[0],c=s[1],i=[{field:"id",headerName:"ID",width:90},{field:"product",headerName:"Product",width:200,renderCell:function(e){return Object(b.jsxs)("div",{className:"productListItem",children:[Object(b.jsx)("img",{className:"productListImg",src:e.row.img,alt:""}),e.row.name]})}},{field:"stock",headerName:"Stock",width:200},{field:"status",headerName:"Status",width:120},{field:"price",headerName:"Price",width:160},{field:"action",headerName:"Action",width:150,renderCell:function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u.b,{to:"/product/"+e.row.id,children:Object(b.jsx)("button",{className:"productListEdit",children:"Edit"})}),Object(b.jsx)(z.a,{className:"productListDelete",onClick:function(){return s=e.row.id,void c(t.filter((function(e){return e.id!==s})));var s}})]})}}];return Object(b.jsx)("div",{className:"productList",children:Object(b.jsx)(q.a,{rows:t,disableSelectionOnClick:!0,columns:i,pageSize:8,checkboxSelection:!0})})}t(486);function ee(){return Object(b.jsxs)("div",{className:"product",children:[Object(b.jsxs)("div",{className:"productTitleContainer",children:[Object(b.jsx)("h1",{className:"productTitle",children:"Product"}),Object(b.jsx)(u.b,{to:"/newproduct",children:Object(b.jsx)("button",{className:"productAddButton",children:"Create"})})]}),Object(b.jsxs)("div",{className:"productTop",children:[Object(b.jsx)("div",{className:"productTopLeft",children:Object(b.jsx)(k,{data:D,dataKey:"Sales",title:"Sales Performance"})}),Object(b.jsxs)("div",{className:"productTopRight",children:[Object(b.jsxs)("div",{className:"productInfoTop",children:[Object(b.jsx)("img",{src:"https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",alt:"",className:"productInfoImg"}),Object(b.jsx)("span",{className:"productName",children:"Apple Airpods"})]}),Object(b.jsxs)("div",{className:"productInfoBottom",children:[Object(b.jsxs)("div",{className:"productInfoItem",children:[Object(b.jsx)("span",{className:"productInfoKey",children:"id:"}),Object(b.jsx)("span",{className:"productInfoValue",children:"123"})]}),Object(b.jsxs)("div",{className:"productInfoItem",children:[Object(b.jsx)("span",{className:"productInfoKey",children:"sales:"}),Object(b.jsx)("span",{className:"productInfoValue",children:"5123"})]}),Object(b.jsxs)("div",{className:"productInfoItem",children:[Object(b.jsx)("span",{className:"productInfoKey",children:"active:"}),Object(b.jsx)("span",{className:"productInfoValue",children:"yes"})]}),Object(b.jsxs)("div",{className:"productInfoItem",children:[Object(b.jsx)("span",{className:"productInfoKey",children:"in stock:"}),Object(b.jsx)("span",{className:"productInfoValue",children:"no"})]})]})]})]}),Object(b.jsx)("div",{className:"productBottom",children:Object(b.jsxs)("form",{className:"productForm",children:[Object(b.jsxs)("div",{className:"productFormLeft",children:[Object(b.jsx)("label",{children:"Product Name"}),Object(b.jsx)("input",{type:"text",placeholder:"Apple AirPod"}),Object(b.jsx)("label",{children:"In Stock"}),Object(b.jsxs)("select",{name:"inStock",id:"idStock",children:[Object(b.jsx)("option",{value:"yes",children:"Yes"}),Object(b.jsx)("option",{value:"no",children:"No"})]}),Object(b.jsx)("label",{children:"Active"}),Object(b.jsxs)("select",{name:"active",id:"active",children:[Object(b.jsx)("option",{value:"yes",children:"Yes"}),Object(b.jsx)("option",{value:"no",children:"No"})]})]}),Object(b.jsxs)("div",{className:"productFormRight",children:[Object(b.jsxs)("div",{className:"productUpload",children:[Object(b.jsx)("img",{src:"https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",alt:"",className:"productUploadImg"}),Object(b.jsx)("label",{for:"file",children:Object(b.jsx)(W.a,{})}),Object(b.jsx)("input",{type:"file",id:"file",style:{display:"none"}})]}),Object(b.jsx)("button",{className:"productButton",children:"Update"})]})]})})]})}t(487);function se(){return Object(b.jsxs)("div",{className:"newProduct",children:[Object(b.jsx)("h1",{className:"addProductTitle",children:"New Product"}),Object(b.jsxs)("form",{className:"addProductForm",children:[Object(b.jsxs)("div",{className:"addProductItem",children:[Object(b.jsx)("label",{children:"Image"}),Object(b.jsx)("input",{type:"file",id:"file"})]}),Object(b.jsxs)("div",{className:"addProductItem",children:[Object(b.jsx)("label",{children:"Name"}),Object(b.jsx)("input",{type:"text",placeholder:"Apple Airpods"})]}),Object(b.jsxs)("div",{className:"addProductItem",children:[Object(b.jsx)("label",{children:"Stock"}),Object(b.jsx)("input",{type:"text",placeholder:"123"})]}),Object(b.jsxs)("div",{className:"addProductItem",children:[Object(b.jsx)("label",{children:"Active"}),Object(b.jsxs)("select",{name:"active",id:"active",children:[Object(b.jsx)("option",{value:"yes",children:"Yes"}),Object(b.jsx)("option",{value:"no",children:"No"})]})]}),Object(b.jsx)("button",{className:"addProductButton",children:"Create"})]})]})}var te=function(){return Object(b.jsxs)(u.a,{children:[Object(b.jsx)(g,{}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(h,{}),Object(b.jsxs)(Y.c,{children:[Object(b.jsx)(Y.a,{exact:!0,path:"/",children:Object(b.jsx)(K,{})}),Object(b.jsx)(Y.a,{path:"/users",children:Object(b.jsx)(V,{})}),Object(b.jsx)(Y.a,{path:"/user/:userId",children:Object(b.jsx)(X,{})}),Object(b.jsx)(Y.a,{path:"/newUser",children:Object(b.jsx)(Z,{})}),Object(b.jsx)(Y.a,{path:"/products",children:Object(b.jsx)(_,{})}),Object(b.jsx)(Y.a,{path:"/product/:productId",children:Object(b.jsx)(ee,{})}),Object(b.jsx)(Y.a,{path:"/newproduct",children:Object(b.jsx)(se,{})})]})]})]})};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(te,{})}),document.getElementById("root"))}},[[489,1,2]]]);
//# sourceMappingURL=main.a6c885a2.chunk.js.map