(function(e){function t(t){for(var s,o,i=t[0],c=t[1],l=t[2],u=0,p=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);d&&d(t);while(p.length)p.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(s=!1)}s&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},r={app:0},n=[];function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var s=a("8a23"),r=a.n(s);r.a},"0aba":function(e,t,a){},"2d33":function(e,t,a){},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=n(e);return a(t)}function n(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=n,e.exports=r,r.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=a("8c4f"),n=a("4eb5"),o=a.n(n),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("h1",[e._v("Github Leaderboard")]),a("Adder",{attrs:{max_people:e.max_people,disabled:e.people.length>=e.max_people,count:e.people.length},on:{add:e.onAddPerson}}),a("div",{staticClass:"people-container"},e._l(e.people,(function(t,s){return a("div",{key:t.username},[a("Person",{attrs:{name:t.username,color:e.colours[s]},on:{remove:e.onRemovePerson}})],1)})),0),0!==e.people.length?a("div",[a("ShareButton",{attrs:{people:e.people}})],1):e._e(),0!==e.people.length?a("div",[a("h1",{staticClass:"chart-title"},[e._v("Contributions this year:")]),a("div",{staticClass:"chart-container"},[a("line-chart",{attrs:{chartData:e.year_dataset}})],1),a("h1",{staticClass:"chart-title"},[e._v("Contributions Today:")]),a("div",{staticClass:"chart-container"},[a("bar-chart",{attrs:{chartData:e.daily_dataset}})],1)]):e._e()],1)},c=[],l=(a("7db0"),a("fb6a"),a("a434"),a("ac1f"),a("1276"),a("bc3a")),d=a.n(l),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",[e._v("Add people: ("+e._s(this.count)+"/"+e._s(this.max_people)+")")]),a("div",{staticClass:"adder"},[a("v-text-field",{attrs:{placeholder:"Github Username",height:"2vh",disabled:e.disabled},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.add(t)}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("v-btn",{attrs:{disabled:e.name.length<1},on:{click:e.add}},[e._v("+")])],1)])},p=[],f=(a("b0c0"),a("a9e3"),{name:"Adder",data:function(){return{name:""}},methods:{add:function(){this.$emit("add",this.name),this.name=""}},props:{disabled:{type:Boolean,default:!1},count:{type:Number,default:0},max_people:{type:Number,default:8}}}),b=f,h=(a("b429"),a("2877")),j=a("6544"),m=a.n(j),v=a("8336"),y=a("8654"),g=Object(h["a"])(b,u,p,!1,null,"d44f796a",null),k=g.exports;m()(g,{VBtn:v["a"],VTextField:y["a"]});var _=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-chip",{attrs:{close:!0,color:e.color},on:{"click:close":e.remove}},[e._v(e._s(e.name))])],1)},x=[],w={name:"Person",props:{name:String,color:String},methods:{remove:function(){this.$emit("remove",this.name)}}},C=w,z=(a("9c44"),a("cc20")),O=Object(h["a"])(C,_,x,!1,null,"fc96ac0e",null),A=O.exports;m()(O,{VChip:z["a"]});var P,B,E,L,S=a("1fca"),D=S["c"].reactiveProp,T={extends:S["a"],mixins:[D],data:function(){return{options:{scales:{yAxes:[{ticks:{beginAtZero:!0},gridLines:{display:!0}}],xAxes:[{gridLines:{display:!1}}]},legend:{display:!1},responsive:!0,maintainAspectRatio:!1}}},mounted:function(){this.renderChart(this.chartData,this.options)}},$=T,M=Object(h["a"])($,P,B,!1,null,null,null),N=M.exports,F=S["c"].reactiveProp,R={extends:S["b"],mixins:[F],data:function(){return{options:{scales:{yAxes:[{ticks:{beginAtZero:!0},gridLines:{display:!0}}],xAxes:[{gridLines:{display:!1}}]},legend:{display:!1},tooltip:{displayColors:!1},responsive:!0,maintainAspectRatio:!1}}},mounted:function(){this.renderChart(this.chartData,this.options)}},q=R,G=Object(h["a"])(q,E,L,!1,null,null,null),V=G.exports,U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-btn",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.link,expression:"link",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticClass:"ma-2 white--text",attrs:{color:"blue-grey","min-width":"350px"}},[e._v(" "+e._s(e.prompt)+" ")])},H=[],J={name:"ShareButton",props:{people:Array},data:function(){return{prompt:"Copy Link to this leaderboard"}},computed:{link:function(){if(0==this.people.length)return"https://leaderboard.50w.co";var e="https://leaderboard.50w.co/#/?names=";for(var t in this.people)e=e+this.people[t].username+",";return e.substring(0,e.length-1)}},methods:{onError:function(){var e=this;this.prompt="Error!",setTimeout((function(){e.prompt="Copy Link to this leaderboard"}),2e3)},onCopy:function(){var e=this;this.prompt="Copied!",setTimeout((function(){e.prompt="Copy Link to this leaderboard"}),2e3)}}},W=J,Y=Object(h["a"])(W,U,H,!1,null,null,null),Z=Y.exports;m()(Y,{VBtn:v["a"]});var I={name:"App",components:{Adder:k,Person:A,BarChart:N,LineChart:V,ShareButton:Z},data:function(){return{colours:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],max_people:8,people:[],year_labels:[]}},methods:{onAddPerson:function(e){for(var t in this.people)if(e.toLowerCase()==this.people[t].username.toLowerCase())return;this.people.push({username:e,score:0,year_data:[],year_labels:[]});var a=new Date,s=a.getFullYear()+"-"+("0"+(a.getMonth()+1)).substr(-2)+"-"+("0"+a.getDate()).substr(-2),r=this;d.a.get("https://github-contributions-api.now.sh/v1/"+e).then((function(t){for(var a in r.people)if(r.people[a].username==e){r.people[a].score=t.data.contributions.find((function(e){return e.date===s})).count;for(var n=[],o=[],i=0;i<366;i++)n.push(t.data.contributions[i].count),o.push(t.data.contributions[i].date);for(n=n.reverse(),i=1;i<n.length;i++)n[i]=n[i]+n[i-1];var c=new Date,l=new Date(c.getFullYear(),0,0),d=c-l+60*(l.getTimezoneOffset()-c.getTimezoneOffset())*1e3,u=864e5,p=Math.floor(d/u);r.people[a].year_data=n.slice(0,p),r.people[a].year_labels=o.reverse().slice(0,p);break}}))},onRemovePerson:function(e){for(var t in this.people)if(this.people[t].username==e){this.people.splice(t,1);break}}},computed:{data:function(){var e=[];for(var t in this.people)e.push(this.people[t].score);return e},labels:function(){var e=[];for(var t in this.people)e.push(this.people[t].username);return e},daily_dataset:function(){return{labels:this.labels,datasets:[{label:"Contributions",backgroundColor:this.colours,pointBackgroundColor:"white",borderWidth:1,pointBorderColor:"#249EBF",data:this.data}]}},year_dataset:function(){var e=[];for(var t in this.people){var a={fill:!1,label:this.people[t].username,borderColor:this.colours[t],pointBackgroundColor:"white",pointHoverBorderColor:this.colours[t],pointHitRadius:10,borderWidth:5,pointRadius:0,pointBorderColor:"#249EBF",data:this.people[t].year_data};e.push(a)}return{labels:this.people[0].year_labels,datasets:e}}},mounted:function(){if(this.$route.query.names){var e=this.$route.query.names.split(",");for(var t in e)this.onAddPerson(e[t])}}},K=I,Q=(a("034f"),Object(h["a"])(K,i,c,!1,null,null,null)),X=Q.exports,ee=(a("5363"),a("f309"));s["a"].use(ee["a"]);var te=new ee["a"]({icons:{iconfont:"mdi"}});s["a"].config.productionTip=!1;var ae=[{path:"/food",component:X}],se=new r["a"]({routes:ae});s["a"].use(r["a"]),s["a"].use(o.a),new s["a"]({router:se,vuetify:te,render:function(e){return e(X)}}).$mount("#app")},"8a23":function(e,t,a){},"9c44":function(e,t,a){"use strict";var s=a("0aba"),r=a.n(s);r.a},b429:function(e,t,a){"use strict";var s=a("2d33"),r=a.n(s);r.a}});
//# sourceMappingURL=app.492ac593.js.map