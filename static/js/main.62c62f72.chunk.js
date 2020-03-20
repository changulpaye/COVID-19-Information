(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{111:function(e,a,t){},112:function(e,a,t){"use strict";t.r(a);t(44),t(45),t(46),t(47);var n=t(0),r=t.n(n),l=t(14),c=t.n(l),o=t(10),s=t(11),i=t(15),m=t.n(i),u=t(19),d=t(16),v=t(20),E=t.n(v);var f=t(9),b=t(39),p=function(e){var a=e.country,t=function(e,a){return r.a.createElement("span",{className:"large-font"},e[a.field].toLocaleString())};return r.a.createElement("div",null,r.a.createElement(b.DataTable,{className:"table table-striped",responsive:!0,selectionMode:"single",value:a,sortMode:"multiple",resizableColumns:!0,columnResizeMode:"fit",paginator:!0,rows:10},r.a.createElement(f.Column,{field:"country",body:function(e,a){return r.a.createElement(o.b,{to:"details/".concat(e[a.field])},e[a.field])},header:"Countries",className:"font-weight-bold",sortable:"true"}),r.a.createElement(f.Column,{field:"cases",body:t,header:"Cases",sortable:"true"}),r.a.createElement(f.Column,{field:"todayCases",body:function(e,a){return 0!==e.todayCases?r.a.createElement("div",{className:"new-cases"}," +",e.todayCases.toLocaleString()," "):r.a.createElement("span",null)},header:"Today Cases",sortable:"true"}),r.a.createElement(f.Column,{field:"deaths",body:function(e,a){return r.a.createElement("div",{className:"death-cases"},"+",e[a.field].toLocaleString())},header:"Total Deaths",sortable:"true"}),r.a.createElement(f.Column,{field:"active",body:t,header:"Active Cases",sortable:"true"}),r.a.createElement(f.Column,{field:"recovered",body:t,header:"Recovered",sortable:"true"}),r.a.createElement(f.Column,{field:"critical",body:t,header:"Critical",sortable:"true"}),r.a.createElement(f.Column,{field:"casesPerOneMillion",body:t,header:"Tot Cases/1M",sortable:"true"})))},g=t(42),h=t.n(g),N=function(){var e=Object(n.useState)([]),a=Object(d.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)([]),o=Object(d.a)(c,2),s=o[0],i=o[1],v=Object(n.useState)({cases:"",deaths:"",recovered:""}),f=Object(d.a)(v,2),b=f[0],g=f[1];Object(n.useEffect)((function(){N()}),[]);var N=function(){var e=Object(u.a)(m.a.mark((function e(){var a,t,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://corona.lmao.ninja/all");case 2:return a=e.sent,t=a.data,e.next=6,E.a.get("https://corona.lmao.ninja/countries");case 6:n=e.sent,(r=n.data).sort((function(e,a){return a.cases-e.cases})),g(t),i(r),l(r);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(m.a.mark((function e(a){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a||l(s),t=s.filter((function(e){return e.country.toLowerCase().startsWith(a.toLowerCase())})),l(t);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(h.a,{active:!s.length,spinner:!0,text:"Loading Corona information..."},r.a.createElement("div",{className:"full-height "},r.a.createElement("div",{className:"row ml-3 mr-3 font-weight-bold"},r.a.createElement("div",{className:"col-4 p-2  "},r.a.createElement("div",{className:"alert alert-warning text-center"},"TOTAL CASES - ",b.cases.toLocaleString())),r.a.createElement("div",{className:"col-4 p-2 "},r.a.createElement("div",{className:"alert alert-danger text-center"},"TOTAL DEATHS - ",b.deaths.toLocaleString())),r.a.createElement("div",{className:"col-4 p-2 "},r.a.createElement("div",{className:"alert alert-success text-center"},"TOTAL RECOVERED - ",b.recovered.toLocaleString()))),r.a.createElement("div",{className:"row  ml-2 mr-2"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"form-text"},r.a.createElement("input",{className:"form-control",type:"text",name:"search",placeholder:"Enter country name",id:"search",onChange:function(e){return y(e.target.value)}}))))),r.a.createElement("div",{className:"row ml-2 mr-2"},r.a.createElement("div",{className:"col-12"},r.a.createElement(p,{country:t})))))},y=function(){return r.a.createElement("div",{className:"details-container"},"This Page is Under Development!")},C=Object(s.g)((function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement(o.c,{className:"navbar-brand",to:"/"},"Corona Information"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"}),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.c,{className:"nav-link",to:"/register"}))),r.a.createElement("form",{className:"form-inline my-2 my-lg-0"})))}));var w=function(){return r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement("div",null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/corona-infomation",component:N}),r.a.createElement(s.b,{path:"/details/:countryname",component:y}),r.a.createElement(s.a,{to:"/corona-infomation",from:"/"}))))};t(111),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(o.a,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},43:function(e,a,t){e.exports=t(112)}},[[43,1,2]]]);
//# sourceMappingURL=main.62c62f72.chunk.js.map