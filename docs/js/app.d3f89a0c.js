(function(e){function t(t){for(var r,i,c=t[0],s=t[1],l=t[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,c=1;c<a.length;c++){var s=a[c];0!==n[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},o=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},1490:function(e,t,a){"use strict";a("a03e")},"14b9":function(e,t,a){},2289:function(e,t,a){e.exports=a.p+"img/vuejs.c3647c97.png"},"2cca":function(e,t,a){},"305e":function(e,t,a){e.exports=a.p+"img/developer.ec7eacb1.png"},"4ba3":function(e,t,a){e.exports=a.p+"img/css3.2b016ed2.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("NavBar",{on:{changePage:function(t){return e.changePage(t)}}}),"home"==e.activePage?a("Header"):e._e(),"home"==e.activePage?a("Offers"):e._e(),"js"==e.activePage?a("OfferJS",{on:{changePage:function(t){return e.changePage("js")}}}):e._e(),"home"!=e.activePage&&"js"!=e.activePage?a("BuildSide"):e._e()],1)},o=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{attrs:{id:"Nav"}},[e.$vuetify.breakpoint.mobile?e._e():a("v-app-bar",{attrs:{"elevate-on-scroll":"",fixed:"",flat:""}},[a("v-tabs",{attrs:{"fixed-tabs":"","background-color":"#28016f",dark:""}},e._l(e.route,(function(t){return a("v-tab",{key:t.name,on:{click:function(a){return e.$emit("changePage",t.props)}}},[e._v(" "+e._s(t.name)+" ")])})),1)],1),e.$vuetify.breakpoint.mobile?a("v-app-bar",{attrs:{color:"deep-purple accent-4",dense:"",dark:"",fixed:""}},[a("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,n=t.attrs;return[a("v-app-bar-nav-icon",e._g(e._b({},"v-app-bar-nav-icon",n,!1),r))]}}],null,!1,1620504925)},[a("v-list",{attrs:{flat:""}},e._l(e.route,(function(t,r){return a("v-list-item",{key:r,on:{click:function(a){return e.$emit("changePage",t.props)}}},[a("v-list-item-title",[e._v(e._s(t.name))])],1)})),1)],1),a("v-app-title",[e._v(" Nawigacja ")])],1):e._e()],1)},c=[],s=a("94ed"),l={name:"Header",data:function(){return{icon:s["a"],route:[{name:"HomePage",props:"home"},{name:"HTML",props:"html"},{name:"CSS",props:"css"},{name:"JS",props:"js"},{name:"VueJS",props:"vue"},{name:"React",props:"react"}]}}},u=l,f=(a("1490"),a("2877")),p=a("6544"),d=a.n(p),v=a("40dc"),b=a("5bc1"),m=a("8860"),h=a("da13"),g=a("5d23"),y=a("e449"),_=a("71a3"),w=a("fe57"),k=Object(f["a"])(u,i,c,!1,null,"6b2b9b2f",null),x=k.exports;d()(k,{VAppBar:v["a"],VAppBarNavIcon:b["a"],VList:m["a"],VListItem:h["a"],VListItemTitle:g["a"],VMenu:y["a"],VTab:_["a"],VTabs:w["a"]});var C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{attrs:{id:"Header"}},[r("v-row",[r("v-col",{staticClass:"header-title",class:{"header-title-mobile":e.$vuetify.breakpoint.mobile},attrs:{cols:e.$vuetify.breakpoint.mobile?12:6}},[r("h1",[e._v("Programowanie W Internecie")]),e._v(" Poznaj topowe technologie Webowe! "),r("br"),r("v-btn",{staticClass:"header-btn",attrs:{color:"white",elevation:"24",fab:"",icon:"",outlined:"",text:""},on:{click:function(t){return e.$vuetify.goTo("#Offers",e.optionScroll)}}},[r("v-icon",[e._v(" "+e._s(e.icon)+" ")])],1)],1),e.$vuetify.breakpoint.mobile?e._e():r("v-col",{attrs:{cols:"6"}},[r("v-img",{staticClass:"header-img",attrs:{src:a("305e")}})],1)],1)],1)},S=[],j={name:"Header",data:function(){return{icon:s["a"]}},computed:{optionScroll:function(){return{duration:500,offset:0,easing:"easeInOutCubic"}}}},O=j,P=(a("75df"),a("8336")),V=a("62ad"),E=a("132d"),$=a("adda"),J=a("0fd9"),z=Object(f["a"])(O,C,S,!1,null,"2c70be55",null),T=z.exports;d()(z,{VBtn:P["a"],VCol:V["a"],VIcon:E["a"],VImg:$["a"],VRow:J["a"]});var B=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{attrs:{id:"Offers"}},[r("h1",[e._v("Stack, czyli czym się zajmiemy")]),e._v(" HTML, CSS, JS i frameworki..'' "),r("div",{staticClass:"Card-container"},[r("v-row",[r("v-col",[r("Card",{attrs:{title:"HTML",subtitle:"Język opisowy",color:"#e79874",image:a("b55a")}})],1),r("v-col",[r("Card",{attrs:{title:"CSS",subtitle:"Język opisowy",color:"#689EE7",image:a("4ba3")}})],1)],1),r("v-row",[r("v-col",[r("Card",{attrs:{title:"JavaScript",subtitle:"Język interaktywny",color:"#DDC02D",image:a("f505")}})],1)],1),r("v-row",[r("v-col",[r("Card",{attrs:{title:"Vuejs",subtitle:"Framework JavaScript",color:"#80D3B0",image:a("2289")}})],1),r("v-col",[r("Card",{attrs:{title:"React",subtitle:"Framework JavaScript",color:"#00D8FF",image:a("5b0d")}})],1)],1)],1)])},I=[],H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"Card"}},[a("v-card",{staticClass:"offer-card",attrs:{rounded:"",color:e.color}},[a("v-card-text",[a("b",[e._v(e._s(e.title))]),e._v(" "),a("br"),e._v(" "+e._s(e.subtitle)+" "),a("v-img",{staticClass:"offer-img",attrs:{"max-height":"250","max-width":"250",src:e.image}})],1),a("br")],1)],1)},M=[],L={name:"Offers",props:["title","subtitle","color","image"],data:function(){return{}},methods:{}},A=L,D=(a("94f2"),a("b0af")),F=a("99d9"),N=Object(f["a"])(A,H,M,!1,null,"e28909d6",null),R=N.exports;d()(N,{VCard:D["a"],VCardText:F["a"],VImg:$["a"]});var W={name:"Offers",components:{Card:R},data:function(){return{}}},q=W,G=(a("a3c5"),Object(f["a"])(q,B,I,!1,null,"59983bf6",null)),K=G.exports;d()(G,{VCol:V["a"],VRow:J["a"]});var Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"body"},[a("v-card",{staticStyle:{"margin-top":"200px",background:"#28016F"}},e._l(3,(function(t){return a("v-card",{key:t,staticClass:"d-flex flex-row mb-6 justify-center align-center",staticStyle:{background:"#A999C5"}},e._l(3,(function(r){return a("v-card",{key:r,staticClass:"pa-2 game-item",attrs:{outlined:"",tile:"",id:3*(t-1)+r},on:{click:function(a){e.check(3*(t-1)+r)}}})})),1)})),1)],1)},U=[],X=(a("d3b7"),a("159b"),{name:"js",data:function(){return{turn:!1,player1:[],player2:[],rule:[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]}},methods:{clear:function(){this.player1=[],this.player2=[];for(var e=1;e<=9;e++)document.getElementById(e).style.backgroundColor="white"},win:function(e,t){var a=this;return this.rule.forEach((function(r){var n=0;e.forEach((function(e){r.forEach((function(t){e==t&&n++})),3==n&&(alert("Wygrał "+t+"!"),a.clear())}))})),!1},lose:function(){(this.player1.length>=5||this.player2.length>=5)&&(alert("Spróbujcie jeszcze raz!"),this.clear())},check:function(e){var t=document.getElementById(e),a=!0;this.player1.forEach((function(t){t===e&&(a=!1)})),this.player2.forEach((function(t){t===e&&(a=!1)})),a&&(this.turn?(t.style.backgroundColor="blue",this.player1.push(e),this.win(this.player1,"gracz1")):(t.style.backgroundColor="red",this.player2.push(e),this.win(this.player2,"gracz2")),console.log(this.lose()),this.turn=!this.turn)}}}),Y=X,Z=(a("6452"),Object(f["a"])(Y,Q,U,!1,null,null,null)),ee=Z.exports;d()(Z,{VCard:D["a"]});var te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("v-spacer",{staticStyle:{height:"200px"}}),e._v(" Strona aktualnie w budowie.. ")],1)},ae=[],re=a("2fa4"),ne={},oe=Object(f["a"])(ne,te,ae,!1,null,null,null),ie=oe.exports;d()(oe,{VSpacer:re["a"]});var ce={name:"App",components:{NavBar:x,Header:T,Offers:K,OfferJS:ee,BuildSide:ie},data:function(){return{activePage:"home"}},methods:{changePage:function(e){this.activePage=e}}},se=ce,le=(a("034f"),a("7496")),ue=Object(f["a"])(se,n,o,!1,null,null,null),fe=ue.exports;d()(ue,{VApp:le["a"]});a("5363");var pe=a("f309");r["a"].use(pe["a"]);var de=new pe["a"]({icons:{iconfont:"mdi"}});r["a"].config.productionTip=!1,new r["a"]({vuetify:de,render:function(e){return e(fe)}}).$mount("#app")},"5b0d":function(e,t,a){e.exports=a.p+"img/react.8b9de6f5.png"},6452:function(e,t,a){"use strict";a("14b9")},"75df":function(e,t,a){"use strict";a("2cca")},"85ec":function(e,t,a){},"94f2":function(e,t,a){"use strict";a("cecd")},a03e:function(e,t,a){},a3c5:function(e,t,a){"use strict";a("abfe")},abfe:function(e,t,a){},b55a:function(e,t,a){e.exports=a.p+"img/html.cb4f7224.png"},cecd:function(e,t,a){},f505:function(e,t,a){e.exports=a.p+"img/js.79046a55.png"}});
//# sourceMappingURL=app.d3f89a0c.js.map