(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{149:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),l=a(44),r=a.n(l),o=(a(52),a(6),function(e){var t=e.title;return n.a.createElement("div",{className:"row mb-3"},n.a.createElement("div",{className:"col-12 col-md-12"},n.a.createElement("h5",{className:"panel-title-left"},t)))}),s=a(1),m=function(e){var t=e.name,a=e.num;return n.a.createElement("div",{className:"row sub-title text-right"},n.a.createElement("div",{className:"col-6 col-md-6 text-left d-flex align-items-end"},"Russian Federation"===t?"Russia":t),n.a.createElement("div",{className:"col-6 col-md-6 text-right sub-num"},n.a.createElement("span",{className:"pull-right"},a)))},i=function(e){var t=e.num;return n.a.createElement("div",{className:"row justify-content-center title-num"},n.a.createElement("div",{className:"col-md-12 text-center"},t))},u=a(3),d=a.n(u),v=a(8),f=Object(c.createContext)(),E=function(e){var t=Object(c.useState)({}),a=Object(s.a)(t,2),l=a[0],r=a[1],o=Object(c.useState)([]),m=Object(s.a)(o,2),i=m[0],u=m[1],E=Object(c.useState)([]),b=Object(s.a)(E,2),h=b[0],p=b[1],N=Object(c.useState)([]),j=Object(s.a)(N,2),g=j[0],y=j[1],O=Object(c.useState)({}),w=Object(s.a)(O,2),x=(w[0],w[1],Object(c.useState)()),C=Object(s.a)(x,2),S=C[0],D=C[1],k=Object(c.useState)(),T=Object(s.a)(k,2),R=T[0],A=T[1],B=Object(c.useState)(),G=Object(s.a)(B,2),H=G[0],M=G[1],W=Object(c.useState)(),I=Object(s.a)(W,2),J=I[0],L=I[1],P=Object(c.useState)({}),U=Object(s.a)(P,2),F=U[0],X=U[1],Y=Object(c.useState)([]),$=Object(s.a)(Y,2),_=$[0],q=$[1],z=Object(c.useState)({}),K=Object(s.a)(z,2),Q=K[0],V=K[1];Object(c.useEffect)((function(){Z().then(ee).catch(te),re().then(ue).then(ie).catch(te),oe().then(me).catch(te),console.log("Use Effect!")}),[]);var Z=function(){var e=Object(v.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19api.com/summary");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(e){console.log("Summary Succesfully Loaded!");var t=e.Countries,a=e.Global;u(ae(t,ce)),p(ae(t,ne)),y(ae(t,le)),r(a)},te=function(e){console.log("Error! "+e)},ae=function(e,t){return e.sort(t).slice(0,5)},ce=function(e,t){return t.TotalConfirmed-e.TotalConfirmed},ne=function(e,t){return t.TotalDeaths-e.TotalDeaths},le=function(e,t){return t.TotalRecovered-e.TotalRecovered},re=function(){var e=Object(v.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19api.com/total/country/united-states",{headers:{"X-Access-Token":"d908455c-8985-4153-9df2-1f9312db921c"}});case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),oe=function(){var e=Object(v.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covidtracking.com/v1/states/current.json");case 2:return t=e.sent,a=t.json(),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(e,t){return t.positive-e.positive},me=function(e){q(e.sort(se))},ie=function(e){for(var t=e.slice(e.length-31,e.length),a=[],c=[],n=[],l=[],r=1;r<t.length;r++)a.push(t[r].Date.slice(5,10)),c.push(t[r].Confirmed-t[r-1].Confirmed),n.push(t[r].Deaths-t[r-1].Deaths),l.push(t[r].Recovered-t[r-1].Recovered);return V({confirmed:c,deaths:n,recovered:l,dates:a}),e},ue=function(e){for(var t,a,c,n,l={},r=(e.length,["Confirmed","Deaths","Recovered"]),o=0;o<r.length;o++)t=e[e.length-1][r[o]]-e[e.length-2][r[o]],a=e[e.length-2][r[o]]-e[e.length-3][r[o]],c=e[e.length-10][r[o]]-e[e.length-11][r[o]],n=e[e.length-30][r[o]]-e[e.length-31][r[o]],l[r[o]]={today:t,yesterday:a,tenDaysAgo:c,aMonthAgo:n};return console.log(l),X(l),e};return n.a.createElement("div",{className:"col-12 col-md-10 offset-md-1 col-xl-6 offset-xl-1"},n.a.createElement(f.Provider,{value:{value:[i,u],value1:[i,u],value2:[h,p],value3:[g,y],value4:[l,r],value5:[Q,V],value6:[S,D],value7:[H,M],value8:[R,A],value9:[J,L],value10:[_,q],value11:[Q,V],value12:[F,X]}},e.children))},b=function(){var e=Object(c.useContext)(f),t=e.value,a=e.value4,l=Object(s.a)(t,1)[0],r=Object(s.a)(a,1)[0],o=l.map((function(e,t){return n.a.createElement("div",{className:"col-md-12",key:t},n.a.createElement(m,{name:e.Country.split(" ",2).join(" "),num:e.TotalConfirmed}))}));return n.a.createElement("div",{className:"col-10 offset-1 col-md-4 offset-md-0"},n.a.createElement("div",{className:"panel"},n.a.createElement("div",{className:"row justify-content-center"},"Total Confirmed:",n.a.createElement("div",{className:"col-md-12 title-name"},n.a.createElement(i,{num:r.TotalConfirmed}))),n.a.createElement("div",{className:"row justify-content-center"},o)))},h=function(){var e=Object(c.useContext)(f),t=e.value3,a=e.value4,l=Object(s.a)(t,1)[0],r=Object(s.a)(a,1)[0],o=l.map((function(e,t){return n.a.createElement("div",{className:"col-md-12",key:t},n.a.createElement(m,{name:e.Country.split(" ",2).join(" "),num:e.TotalRecovered}))}));return n.a.createElement("div",{className:"col-10 offset-1 col-md-4 offset-md-0 "},n.a.createElement("div",{className:"panel"},n.a.createElement("div",{className:"row justify-content-center"},"Total Recovered",n.a.createElement("div",{className:"col-md-12 title-name"},n.a.createElement(i,{num:r.TotalRecovered}))),n.a.createElement("div",{className:"row justify-content-center"},o)))},p=function(){var e=Object(c.useContext)(f),t=e.value2,a=e.value4,l=Object(s.a)(t,1)[0],r=Object(s.a)(a,1)[0],o=l.map((function(e,t){return n.a.createElement("div",{className:"col-md-12",key:t},n.a.createElement(m,{name:e.Country.split(" ",2).join(" "),num:e.TotalDeaths}))}));return n.a.createElement("div",{className:"col-10 offset-1 col-md-4 offset-md-0 "},n.a.createElement("div",{className:"row justify-content-center"},"Total Deaths:",n.a.createElement("div",{className:"col-md-12 title-name"},n.a.createElement(i,{num:r.TotalDeaths}))),n.a.createElement("div",{className:"row justify-content-center"},o))},N=function(e){return n.a.createElement("div",{className:"row box summary "},n.a.createElement("div",{className:"col-md-12"},n.a.createElement(o,{title:"Global Summary"}),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 offset-md-0"},n.a.createElement("div",{className:"row"},n.a.createElement(b,null),n.a.createElement(h,null),n.a.createElement(p,null)))),n.a.createElement("div",{className:"row mb-3"},n.a.createElement("div",{className:"col-12 col-md-12"},n.a.createElement("h5",{className:"panel-title-right"},"GlobalSummary")))))};var j=function(){return n.a.createElement("div",{className:"col-md-4 col-lg-3 date"},(new Date).toDateString())},g=function(e){var t=e.setCategoryType;return n.a.createElement("div",{className:"col-10 offset-1 col-md-8 offset-md-0 col-lg-9 toggle "},n.a.createElement("div",{className:"btn-group btn-group-toggle","data-toggle":"buttons"},n.a.createElement("label",{className:"btn btn-secondary active",onClick:function(){return t("Confirmed")}},n.a.createElement("input",{type:"radio"})," Confirmed"),n.a.createElement("label",{className:"btn btn-secondary",onClick:function(){return t("Deaths")}},n.a.createElement("input",{type:"radio"})," Deaths"),n.a.createElement("label",{className:"btn btn-secondary",onClick:function(){return t("Recovered")}},n.a.createElement("input",{type:"radio"})," Recovered")))},y=a(45),O=function(e){var t=e.categoryType,a=Object(c.useContext)(f).value5,l=Object(s.a)(a,1)[0],r=Object(c.useState)([]),o=Object(s.a)(r,2),m=o[0],i=o[1],u=Object(c.useState)([]),d=Object(s.a)(u,2),v=d[0],E=d[1];Object(c.useEffect)((function(){t=t.toLowerCase(),i(l.dates),E(l[t])}),[l,t]);var b={labels:m,datasets:[{label:"United States",fill:!0,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:v}]};return n.a.createElement("div",{className:"col-md-12 offset-md-0 text-right"},n.a.createElement(y.a,{data:b,width:100,height:200,options:{maintainAspectRatio:!1}}))},w=function(e){e.stats;var t=e.today,a=e.yesterday,l=e.tenDaysAgo,r=e.aMonthAgo,o=Object(c.useContext)(f).value6,m=Object(c.useContext)(f).value7,i=Object(c.useContext)(f).value8,u=Object(c.useContext)(f).value9;Object(s.a)(o,1)[0],Object(s.a)(m,1)[0],Object(s.a)(i,1)[0],Object(s.a)(u,1)[0];return n.a.createElement("div",{className:"col-12 offset-0 col-md-12 offset-md-0"},n.a.createElement("div",{className:"row daily"},n.a.createElement("div",{className:"col-3 col-md-3"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 text-center sub-num"},t)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 text-center sub-title"},"Today"))),n.a.createElement("div",{className:"col-3 col-md-3"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 text-center sub-num"},a)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 text-center sub-title"},"Yesterday"))),n.a.createElement("div",{className:"col-3 col-md-3"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 text-center sub-num"},l)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 text-center sub-title"},"10 Days Ago"))),n.a.createElement("div",{className:"col-3 col-md-3"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 text-center sub-num"},r)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 text-center sub-title"},"30 Days ago")))))},x=function(){var e=Object(c.useContext)(f).value12,t=Object(s.a)(e,1)[0],a=Object(c.useState)("Confirmed"),l=Object(s.a)(a,2),r=l[0],m=l[1],i=Object(c.useState)("-"),u=Object(s.a)(i,2),d=u[0],v=u[1],E=Object(c.useState)("-"),b=Object(s.a)(E,2),h=b[0],p=b[1],N=Object(c.useState)("-"),y=Object(s.a)(N,2),x=y[0],C=y[1],S=Object(c.useState)("-"),D=Object(s.a)(S,2),k=D[0],T=D[1];return Object(c.useEffect)((function(){!function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}(t)?(v(t[r].today),p(t[r].yesterday),C(t[r].tenDaysAgo),T(t[r].aMonthAgo)):console.log("Daily Stats is Empty")}),[r,t]),n.a.createElement("div",{className:"row box details mt-10"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement(o,{title:"Daily Tracker"}),n.a.createElement("div",{className:"row date-row"},n.a.createElement(j,null),n.a.createElement(g,{setCategoryType:m})),n.a.createElement("div",{className:"row"},n.a.createElement(w,{today:d,yesterday:h,tenDaysAgo:x,aMonthAgo:k})),n.a.createElement("div",{className:"row with-margin"},n.a.createElement(O,{categoryType:r})),n.a.createElement("div",{className:"row mb-3"},n.a.createElement("div",{className:"col-12 col-md-12"},n.a.createElement("h5",{className:"panel-title-right"},"GlobalSummary")))))},C=function(){var e=Object(c.useContext)(f).value10,t=Object(s.a)(e,1)[0].map((function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement("th",{scope:"row"},t+1),n.a.createElement("td",null," ",e.state," "),n.a.createElement("td",null," ",e.positive," "),n.a.createElement("td",null," ",e.recovered?e.recovered:"-"," "),n.a.createElement("td",null," ",e.death," "),n.a.createElement("td",null," ",e.positiveIncrease," "),n.a.createElement("td",null," ",e.deathIncrease," "))}));t.slice(0,10);return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-md-12 "},n.a.createElement("div",{className:"table-responsive"},n.a.createElement("table",{className:"table text-right"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"#"),n.a.createElement("th",{scope:"col"},"State"),n.a.createElement("th",{scope:"col"},"Confirmed"),n.a.createElement("th",{scope:"col"},"Recovered"),n.a.createElement("th",{scope:"col"},"Deaths"),n.a.createElement("th",{scope:"col"},"New Confirmed"),n.a.createElement("th",{scope:"col"},"New Deaths"))),n.a.createElement("tbody",null,t.slice(0,10))))))},S=function(){return n.a.createElement("div",{className:"row box"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement(o,{title:"State by State"}),n.a.createElement(C,null),n.a.createElement("div",{className:"row mb-3"},n.a.createElement("div",{className:"col-12 col-md-12"},n.a.createElement("h5",{className:"panel-title-right"},"GlobalSummary")))))},D=function(e){var t=e.title,a=e.url,c=e.img;"url(".concat(c,")");return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-lg-12"},n.a.createElement("a",{href:a,target:"_blank"},n.a.createElement("div",{className:"row posts "},n.a.createElement("div",{className:"col-4 col-md-3 offset-md-1 col-lg-3 offset-lg-1 offset-lg-0 col-xl-4 col-xl-offset-0"},n.a.createElement("img",{style:{border:"2px solid white"},src:c,width:"100",height:"100"})),n.a.createElement("div",{className:"h-50 col-8 col-md-7 col-lg-7 col-xl-7 offset-xl-0"},n.a.createElement("span",{className:"post-title"}),t)))))},k=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),a=t[0],l=t[1],r=function(){var e=Object(v.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.reddit.com/r/coronavirus/hot.json?limit=6");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,l(a.data.children.slice(2,7));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=a.map((function(e,t){return n.a.createElement(D,{key:t,title:e.data.title,url:e.data.url,img:e.data.thumbnail})}));return Object(c.useEffect)((function(){r()}),[]),n.a.createElement("div",{className:"h-75 col-12 offset-0 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-3 offset-xl-1 box"},n.a.createElement(o,{title:"Covid-19 News"}),m,n.a.createElement("div",{className:"row mb-3"},n.a.createElement("div",{className:"col-12 col-md-12"},n.a.createElement("h5",{className:"panel-title-right"},"GlobalSummary"))))},T=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("nav",{className:"navbar fixed-top navbar-light bg-light mb-5",style:{backgroundColor:"#CED0D2"}},n.a.createElement("span",{className:"navbar-brand mb-0 h1"},"Covid-19 Tracker")),n.a.createElement("div",{className:"container-fluid h-100 pt-5"},n.a.createElement("div",{className:"row"},n.a.createElement(E,null,n.a.createElement(N,null),n.a.createElement(x,null),n.a.createElement(S,null)),n.a.createElement(k,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},47:function(e,t,a){e.exports=a(149)},52:function(e,t,a){},6:function(e,t,a){}},[[47,1,2]]]);
//# sourceMappingURL=main.fac54515.chunk.js.map