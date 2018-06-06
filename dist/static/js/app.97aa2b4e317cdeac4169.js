webpackJsonp([1],{"+3ff":function(t,e){},"2Ptw":function(t,e){},"8gbA":function(t,e){},CWMi:function(t,e){},LHkU:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("7+uW"),o=a("kxiW"),n=a.n(o),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=a("VU/8")({name:"App"},s,!1,function(t){a("XRbk")},null,null).exports,l=a("/ocq"),d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("Home")])])}]};var p=a("VU/8")({name:"Home",data:function(){return{}}},d,!1,function(t){a("QzAI")},"data-v-7b26713c",null).exports,u={name:"Login",data:function(){return{email:"",password:""}},methods:{login:function(){var t=this;n.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(e){t.$router.replace("dashboard")},function(t){})}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("Sign In")]),t._v(" "),a("form",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"Username"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("br"),t._v(" "),a("a",{attrs:{href:"#",exact:""},on:{click:t.login}},[t._v("Login")])])])},staticRenderFns:[]};var v=a("VU/8")(u,m,!1,function(t){a("YvpC")},"data-v-4fab9406",null).exports,c={name:"Home",data:function(){return{}},methods:{logout:function(){var t=this;n.a.auth().signOut().then(function(){t.$router.replace("login")})}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ul",[a("li",[a("router-link",{attrs:{to:"/dashboard",exact:""}},[t._v("Home")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/dashboard/library",exact:""}},[t._v("Library")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/dashboard/add",exact:""}},[t._v("Add Game")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/dashboard/user",exact:""}},[t._v("Add User")])],1),t._v(" "),a("li",[a("a",{attrs:{href:"#"},on:{click:t.logout}},[t._v("Log Out")])])])])},staticRenderFns:[]};var _=a("VU/8")(c,f,!1,function(t){a("txIJ")},"data-v-966f74bc",null).exports,h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("h1",[this._v("Admin Dashboard")])])}]};var b=a("VU/8")({data:function(){return{}}},h,!1,function(t){a("LHkU")},"data-v-6cae4307",null).exports,y={data:function(){return{}},methods:{getDate:function(){return(new Date).getFullYear()}}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("small",[this._v(" © "+this._s(this.getDate())+" dazzle ")])])},staticRenderFns:[]};var w=a("VU/8")(y,g,!1,function(t){a("2Ptw")},"data-v-561f8066",null).exports,x={components:{"app-header":b,"app-controls":_,"app-footer":w},data:function(){return{}}},P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("app-header"),this._v(" "),e("h3",[this._v("Home")]),this._v(" "),e("router-view"),this._v(" "),e("app-controls"),this._v(" "),e("app-footer")],1)},staticRenderFns:[]};var A=a("VU/8")(x,P,!1,function(t){a("+3ff")},"data-v-75b87610",null).exports,E={components:{"app-header":b,"app-controls":_,"app-footer":w},data:function(){return{}}},I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("app-header"),this._v(" "),e("h1",[this._v("adminLibrary")]),this._v(" "),e("app-controls"),this._v(" "),e("app-footer")],1)},staticRenderFns:[]};var U=a("VU/8")(E,I,!1,function(t){a("f4Hq")},"data-v-02e3217e",null).exports,H={components:{"app-header":b,"app-controls":_,"app-footer":w},data:function(){return{}}},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("app-header"),this._v(" "),this._m(0),this._v(" "),e("app-controls"),this._v(" "),e("app-footer")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"form",attrs:{action:"#",id:"formAddGames"}},[a("fieldset",{staticClass:"section-a"},[a("h3",[t._v("Game Info ")]),t._v(" "),a("hr"),t._v(" "),a("label",{attrs:{for:"formName"}},[t._v("Name:")]),t._v(" "),a("input",{attrs:{id:"formName",type:"text"}}),t._v(" "),a("label",{attrs:{for:"formDescription"}},[t._v("Description:")]),t._v(" "),a("textarea",{attrs:{id:"formDescription",cols:"30",rows:"15"}}),t._v(" "),a("label",{attrs:{for:"formImage"}},[t._v("Image:\n             "),a("small",[t._v("(name without spaces)")])]),t._v(" "),a("input",{attrs:{id:"formImage",type:"text",value:"images/games/"}})]),t._v(" "),a("fieldset",{staticClass:"section-b"},[a("h3",[t._v("Game Info")]),t._v(" "),a("hr"),t._v(" "),a("label",{attrs:{for:"formType"}},[t._v("Type:\n             "),a("small",[t._v("(seperated by commas i.e Trivia, Card, Board)")])]),t._v(" "),a("input",{attrs:{id:"formType",type:"text"}}),t._v(" "),a("label",{attrs:{for:"formGenre"}},[t._v("Genre:\n             "),a("small",[t._v("(seperated by commas i.e Horror, Roleplay, Humour)")])]),t._v(" "),a("input",{attrs:{id:"formGenre",type:"text"}}),t._v(" "),a("label",{attrs:{for:"formIdeal"}},[t._v("Ideal For:\n             "),a("small",[t._v("(seperated by commas i.e Groups, Family, Adults)")])]),t._v(" "),a("input",{attrs:{id:"formIdeal",type:"text"}}),t._v(" "),a("label",{attrs:{for:"formAge"}},[t._v("Age:")]),t._v(" "),a("input",{attrs:{id:"formAge",type:"number"}}),t._v(" "),a("label",{attrs:{for:"formDifficulty"}},[t._v("Difficulty:")]),t._v(" "),a("select",{attrs:{id:"formDifficulty"}},[a("option",{attrs:{value:"Easy"}},[t._v("Easy")]),t._v(" "),a("option",{attrs:{value:"Medium"}},[t._v("Medium")]),t._v(" "),a("option",{attrs:{value:"Hard"}},[t._v("Hard")])])]),t._v(" "),a("fieldset",{staticClass:"section-c"},[a("h3",[t._v("Players & Time")]),t._v(" "),a("hr"),t._v(" "),a("label",{attrs:{for:"formPlayersIdeal"}},[t._v("Players Ideal:")]),t._v(" "),a("input",{attrs:{id:"formPlayersIdeal",type:"number"}}),t._v(" "),a("label",{attrs:{for:"formPlayersMinimum"}},[t._v("Players Minimum:")]),t._v(" "),a("input",{attrs:{id:"formPlayersMinimum",type:"number"}}),t._v(" "),a("label",{attrs:{for:"formPlayersMax"}},[t._v("Players Max:")]),t._v(" "),a("input",{attrs:{id:"formPlayersMax",type:"number"}}),t._v(" "),a("label",{attrs:{for:"formSetupTime"}},[t._v("Setup Time:")]),t._v(" "),a("input",{attrs:{id:"formSetupTime",type:"number"}}),t._v(" "),a("label",{attrs:{for:"formPlayTime"}},[t._v("Play Time:")]),t._v(" "),a("input",{attrs:{id:"formPlayTime",type:"number"}})]),t._v(" "),a("fieldset",{staticClass:"section-d"},[a("h3",[t._v("Other Info")]),t._v(" "),a("hr"),t._v(" "),a("label",{attrs:{for:"formPublishDate"}},[t._v("Publish Date:")]),t._v(" "),a("input",{attrs:{id:"formPublishDate",type:"date"}}),t._v(" "),a("label",{attrs:{for:"formPublisher"}},[t._v("Publisher:\n             "),a("small",[t._v("(seperated by commas)")])]),t._v(" "),a("input",{attrs:{id:"formPublisher",type:"text"}}),t._v(" "),a("label",{attrs:{for:"formExpansion"}},[t._v("Expansion:")]),t._v(" "),a("input",{attrs:{id:"formExpansion",type:"text"}}),t._v(" "),a("label",{attrs:{for:"formLocation"}},[t._v("Location:")]),t._v(" "),a("input",{attrs:{id:"formLocation",type:"text"}}),t._v(" "),a("a",{staticClass:"submit-btn",attrs:{id:"formSubmit"}},[t._v(" Add Game ")])])])}]};var D=a("VU/8")(H,k,!1,function(t){a("8gbA")},"data-v-4afd0d36",null).exports,R={components:{"app-header":b,"app-controls":_,"app-footer":w},data:function(){return{email:"",password:"",password2:""}},methods:{addUser:function(){this.password===this.password2&&n.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(t){},function(t){})}}},$={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("app-header"),t._v(" "),a("h3",[t._v("Add User")]),t._v(" "),a("form",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"pass1",placeholder:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password2,expression:"password2"}],attrs:{type:"password",id:"pass2",placeholder:"confirm password"},domProps:{value:t.password2},on:{input:function(e){e.target.composing||(t.password2=e.target.value)}}}),a("br"),t._v(" "),a("a",{attrs:{href:"#"},on:{click:t.addUser}},[t._v("Add User")])]),t._v(" "),a("app-controls"),t._v(" "),a("app-footer")],1)},staticRenderFns:[]};var F=a("VU/8")(R,$,!1,function(t){a("CWMi")},"data-v-55e86cb2",null).exports;r.a.use(l.a);var C=new l.a({mode:"history",routes:[{path:"*",redirect:"/home"},{path:"/home",name:"Home",component:p},{path:"/login",name:"Login",component:v},{path:"/dashboard",name:"dashboard-home",component:A,meta:{requiresAuth:!0}},{path:"/dashboard/library",name:"dashboard-library",component:U,meta:{requiresAuth:!0}},{path:"/dashboard/add",name:"dashboard-add",component:D,meta:{requiresAuth:!0}},{path:"/dashboard/user",name:"dashboard-user",component:F,meta:{requiresAuth:!0}}]});C.beforeEach(function(t,e,a){var r=n.a.auth().currentUser,o=t.matched.some(function(t){return t.meta.requiresAuth});o&&!r?a("/"):!o&&r?a("dashboard/add"):a()});var L=C,T=void 0;n.a.initializeApp({apiKey:"AIzaSyCxPu8HFBXRDWsLhjQWwjVKvznkS1mT5MY",authDomain:"board-game-tabletop.firebaseapp.com",databaseURL:"https://board-game-tabletop.firebaseio.com",projectId:"board-game-tabletop",storageBucket:"board-game-tabletop.appspot.com",messagingSenderId:"115444661210"}),r.a.config.productionTip=!1,n.a.auth().onAuthStateChanged(function(t){T||(T=new r.a({el:"#app",template:"<App/>",components:{App:i},router:L}))})},QzAI:function(t,e){},XRbk:function(t,e){},YvpC:function(t,e){},f4Hq:function(t,e){},txIJ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.97aa2b4e317cdeac4169.js.map