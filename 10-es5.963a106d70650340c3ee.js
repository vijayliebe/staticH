function _defineProperties(n,l){for(var t=0;t<l.length;t++){var e=l[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,l,t){return l&&_defineProperties(n.prototype,l),t&&_defineProperties(n,t),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{L6id:function(n,l,t){"use strict";t.r(l),t.d(l,"HomeModuleNgFactory",(function(){return O}));var e=t("8Y7J"),o=function n(){_classCallCheck(this,n)},c=t("pMnS"),a=t("SVse"),u=t("Cq1L"),i=function(){function n(l,t){_classCallCheck(this,n),this.datacontextService=l,this.utilsService=t,this.apps=u.a.apps}return _createClass(n,[{key:"ngOnInit",value:function(){this.appNames=Object.keys(this.apps)}}]),n}(),r=t("1kK4"),s=t("8wRs"),p=e.zb({encapsulation:0,styles:[[".dash-cont[_ngcontent-%COMP%]{padding:2em}.dash-cont[_ngcontent-%COMP%]   #pageHeading[_ngcontent-%COMP%]{margin-bottom:1em;letter-spacing:.02em;font-size:1.4rem;font-weight:300;color:#343a40}.dash-cont[_ngcontent-%COMP%]   .dash-icons[_ngcontent-%COMP%]{font-size:2em;margin-bottom:8px}.dash-cont[_ngcontent-%COMP%]   .app-cell[_ngcontent-%COMP%]{box-shadow:1px 1px 7px #ccc;text-decoration:none;display:inline-block;margin-right:1%;margin-bottom:1%;border:1px solid #eee;background-color:#fff;width:24%;padding:2em 1em;cursor:pointer;position:relative}.dash-cont[_ngcontent-%COMP%]   .app-cell[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{color:#343a40;margin-top:10px;font-size:1.2em}.dash-cont[_ngcontent-%COMP%]   .app-cell[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{color:#017cad}.dash-cont[_ngcontent-%COMP%]   .app-cell[_ngcontent-%COMP%]:hover{background-color:#fbf9fc}.dash-cont[_ngcontent-%COMP%]   .app-cell[_ngcontent-%COMP%]:hover   .setting-icon[_ngcontent-%COMP%]{display:block}.dash-cont[_ngcontent-%COMP%]   .app-cell[_ngcontent-%COMP%]:hover   .material-icons[_ngcontent-%COMP%]{color:#343a40}"]],data:{}});function d(n){return e.cc(0,[(n()(),e.Bb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),e.Bb(1,0,null,null,1,"i",[["class","material-icons dash-icons"]],null,null,null,null,null)),(n()(),e.Zb(2,null,["",""]))],null,(function(n,l){n(l,2,0,l.component.apps[l.parent.context.$implicit].icon)}))}function b(n){return e.cc(0,[(n()(),e.Bb(0,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),e.Bb(1,0,null,null,0,"img",[["class","material-icons dash-icons"]],[[8,"src",4]],null,null,null,null))],null,(function(n,l){n(l,1,0,e.Ib(1,"",l.component.apps[l.parent.context.$implicit].icon,""))}))}function f(n){return e.cc(0,[(n()(),e.Bb(0,0,null,null,6,"a",[["class","app-cell text-center"]],null,[[null,"click"]],(function(n,l,t){var e=!0,o=n.component;return"click"===l&&(e=!1!==o.utilsService.urlRedirect(o.apps[n.context.$implicit].href)&&e),e}),null,null)),(n()(),e.kb(16777216,null,null,1,null,d)),e.Ab(2,16384,null,0,a.m,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(n()(),e.kb(16777216,null,null,1,null,b)),e.Ab(4,16384,null,0,a.m,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(n()(),e.Bb(5,0,null,null,1,"div",[["class","name"]],null,null,null,null,null)),(n()(),e.Zb(6,null,["",""]))],(function(n,l){var t=l.component;n(l,2,0,"icon"==t.apps[l.context.$implicit].iconTypoe),n(l,4,0,"img"==t.apps[l.context.$implicit].iconTypoe)}),(function(n,l){n(l,6,0,l.component.apps[l.context.$implicit].name)}))}function g(n){return e.cc(0,[(n()(),e.Bb(0,0,null,null,4,"div",[["class","dash-cont"]],null,null,null,null,null)),(n()(),e.Bb(1,0,null,null,1,"div",[["id","pageHeading"],["label","Dashboard"]],null,null,null,null,null)),(n()(),e.Zb(-1,null,["Dashboard"])),(n()(),e.kb(16777216,null,null,1,null,f)),e.Ab(4,278528,null,0,a.l,[e.Q,e.N,e.t],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,4,0,l.component.appNames)}),null)}var h=e.xb("app-dashboard",i,(function(n){return e.cc(0,[(n()(),e.Bb(0,0,null,null,1,"app-dashboard",[],null,null,null,g,p)),e.Ab(1,114688,null,0,i,[r.a,s.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),m=t("iInd"),O=e.yb(o,[],(function(n){return e.Nb([e.Ob(512,e.j,e.bb,[[8,[c.a,h]],[3,e.j],e.y]),e.Ob(4608,a.o,a.n,[e.v]),e.Ob(1073742336,a.c,a.c,[]),e.Ob(1073742336,m.l,m.l,[[2,m.q],[2,m.k]]),e.Ob(1073742336,o,o,[]),e.Ob(1024,m.i,(function(){return[[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"dashboard",component:i},{path:"**",redirectTo:"dashboard"}]]}),[])])}))}}]);