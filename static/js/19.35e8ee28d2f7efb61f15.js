webpackJsonp([19],{183:function(n,e,t){var s=t(7)(t(231),t(320),null,null,null);n.exports=s.exports},205:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=t(213);t.n(s);e.default={data:function(){return{windowHeight:window.innerHeight}}}},206:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=t(214);t.n(s);e.default={}},207:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=t(215);t.n(s);e.default={props:["title"]}},208:function(n,e,t){e=n.exports=t(180)(!0),e.push([n.i,".app-container{position:relative;background-color:#f6f6f6}.app-container .github{position:absolute;right:10px;top:10px;width:32px;height:32px}","",{version:3,sources:["/Users/chrisHchen/git-project/gh-pages/src/styles/components/src/styles/components/Container.scss","/Users/chrisHchen/git-project/gh-pages/src/styles/components/src/styles/core/func.scss"],names:[],mappings:"AAEA,eACE,kBAAkB,AAClB,wBAAyB,CAS1B,AAXD,uBAKI,kBAAkB,AAClB,WCPe,ADQf,SCRe,ADSf,WCTe,ADUf,WCVe,CDWhB",file:"Container.scss",sourcesContent:['@import "../core/func";\n\n.app-container {\n  position: relative;\n  background-color: #f6f6f6;\n\n  .github {\n    position: absolute;\n    right: r(10);\n    top: r(10);\n    width: r(32);\n    height: r(32);\n  }\n}\n',"@function r($px) {\n  @return $px * 1px;\n}\n\n/*\n$ratio: 750/640;\n$base-fontSize: 14;\n@function r($px) {\n  @if $px != 0 {\n    @return $px / $ratio / $base-fontSize * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n\n/*\n  阿里flexible方案，详见 https://github.com/amfe/lib-flexible\n*/\n/*\n@function r($px) {\n  @if $px != 0 {\n    @return $px * 2 / 75 * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n"],sourceRoot:""}])},209:function(n,e,t){e=n.exports=t(180)(!0),e.push([n.i,"footer{text-align:center}.copyright{display:inline-block;margin:30px auto 50px;color:#ccc}.copyright-cn{font-size:14px}.copyright-en{font-size:12px}","",{version:3,sources:["/Users/chrisHchen/git-project/gh-pages/src/styles/components/src/styles/components/Footer.scss","/Users/chrisHchen/git-project/gh-pages/src/styles/components/src/styles/core/func.scss"],names:[],mappings:"AAEA,OACE,iBAAkB,CACnB,AAED,WACE,qBAAqB,AACrB,sBAA6B,AAC7B,UAAW,CASZ,AAPC,cACE,cCXe,CDYhB,AAED,cACE,cCfe,CDgBhB",file:"Footer.scss",sourcesContent:['@import "../core/func";\n\nfooter {\n  text-align: center;\n}\n\n.copyright {\n  display: inline-block;\n  margin: r(30) auto r(50) auto;\n  color: #ccc;\n\n  &-cn {\n    font-size: r(14);\n  }\n\n  &-en {\n    font-size: r(12);\n  }\n}',"@function r($px) {\n  @return $px * 1px;\n}\n\n/*\n$ratio: 750/640;\n$base-fontSize: 14;\n@function r($px) {\n  @if $px != 0 {\n    @return $px / $ratio / $base-fontSize * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n\n/*\n  阿里flexible方案，详见 https://github.com/amfe/lib-flexible\n*/\n/*\n@function r($px) {\n  @if $px != 0 {\n    @return $px * 2 / 75 * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n"],sourceRoot:""}])},210:function(n,e,t){e=n.exports=t(180)(!0),e.push([n.i,"header{padding:15px;font-size:16px}","",{version:3,sources:["/Users/chrisHchen/git-project/gh-pages/src/styles/components/src/styles/components/Header.scss","/Users/chrisHchen/git-project/gh-pages/src/styles/components/src/styles/core/func.scss"],names:[],mappings:"AAEA,OACE,aCFiB,ADGjB,cCHiB,CDIlB",file:"Header.scss",sourcesContent:['@import "../core/func";\n\nheader {\n  padding: r(15);\n  font-size: r(16);\n}\n',"@function r($px) {\n  @return $px * 1px;\n}\n\n/*\n$ratio: 750/640;\n$base-fontSize: 14;\n@function r($px) {\n  @if $px != 0 {\n    @return $px / $ratio / $base-fontSize * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n\n/*\n  阿里flexible方案，详见 https://github.com/amfe/lib-flexible\n*/\n/*\n@function r($px) {\n  @if $px != 0 {\n    @return $px * 2 / 75 * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n"],sourceRoot:""}])},211:function(n,e,t){e=n.exports=t(180)(!0),e.push([n.i,"","",{version:3,sources:[],names:[],mappings:"",file:"PageFooter.vue",sourceRoot:""}])},212:function(n,e,t){e=n.exports=t(180)(!0),e.push([n.i,"","",{version:3,sources:[],names:[],mappings:"",file:"PageHeader.vue",sourceRoot:""}])},213:function(n,e,t){var s=t(208);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);t(181)("800fcacc",s,!0)},214:function(n,e,t){var s=t(209);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);t(181)("0a81e2ac",s,!0)},215:function(n,e,t){var s=t(210);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);t(181)("ce2f83c8",s,!0)},216:function(n,e,t){var s=t(211);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);t(181)("6c761514",s,!0)},217:function(n,e,t){var s=t(212);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);t(181)("0f5d00fc",s,!0)},218:function(n,e,t){var s=t(7)(t(205),t(222),null,null,null);n.exports=s.exports},219:function(n,e,t){function s(n){t(216)}var r=t(7)(t(206),t(221),s,null,null);n.exports=r.exports},220:function(n,e,t){function s(n){t(217)}var r=t(7)(t(207),t(223),s,null,null);n.exports=r.exports},221:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)},staticRenderFns:[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("footer",[t("div",{staticClass:"copyright"},[t("div",{staticClass:"copyright-cn"},[n._v("众安·体验设计中心")]),n._v(" "),t("div",{staticClass:"copyright-en"},[n._v("Zhongan UX Densign")])])])}]}},222:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"app-container",style:{minHeight:n.windowHeight+"px"}},[t("a",{staticClass:"github",attrs:{href:"https://github.com/chrisHchen/zarm-vue"}},[t("svg",{attrs:{"aria-hidden":"true",version:"1.1",viewBox:"0 0 16 16",fill:"#42b983"}},[t("path",{attrs:{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})])]),n._v(" "),n._t("default")],2)},staticRenderFns:[]}},223:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement;return(n._self._c||e)("header",{staticClass:"Header"},[n._v(n._s(n.title))])},staticRenderFns:[]}},225:function(n,e,t){e=n.exports=t(180)(!0),e.push([n.i,".badge-page .custom-panel{display:flex;justify-content:space-between;padding:25px;background:#fff}.badge-page .box-item{width:30px;height:30px;background:#ddd}","",{version:3,sources:["/Users/chrisHchen/git-project/gh-pages/src/styles/pages/src/styles/pages/BadgePage.scss","/Users/chrisHchen/git-project/gh-pages/src/styles/pages/src/styles/core/func.scss"],names:[],mappings:"AAEA,0BAEI,aAAa,AACb,8BAA8B,AAC9B,aCLe,ADMf,eAAgB,CACjB,AANH,sBAUM,WCXa,ADYb,YCZa,ADab,eAAgB,CACjB",file:"BadgePage.scss",sourcesContent:['@import "../core/func";\n\n.badge-page {\n  .custom-panel {\n    display: flex;\n    justify-content: space-between;\n    padding: r(25);\n    background: #fff;\n  }\n\n  .box {\n    &-item {\n      width: r(30);\n      height: r(30);\n      background: #ddd;\n    }\n  }\n}\n',"@function r($px) {\n  @return $px * 1px;\n}\n\n/*\n$ratio: 750/640;\n$base-fontSize: 14;\n@function r($px) {\n  @if $px != 0 {\n    @return $px / $ratio / $base-fontSize * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n\n/*\n  阿里flexible方案，详见 https://github.com/amfe/lib-flexible\n*/\n/*\n@function r($px) {\n  @if $px != 0 {\n    @return $px * 2 / 75 * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n"],sourceRoot:""}])},226:function(n,e,t){var s=t(225);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);t(181)("67d6762b",s,!0)},231:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=t(218),r=t.n(s),o=t(220),i=t.n(o),a=t(219),c=t.n(a),l=t(226);t.n(l);e.default={components:{Container:r.a,PageHeader:i.a,PageFooter:c.a},data:function(){return{}},methods:{handleClick:function(n){console.log(n)}}}},320:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("Container",{staticClass:"badge-page"},[t("PageHeader",{attrs:{title:"徽标 Badge"}}),n._v(" "),t("main",[t("div",[t("za-panel",[t("za-panel-header",[t("za-panel-title",[n._v("基本")])],1),n._v(" "),t("za-panel-body",[t("za-cell",{attrs:{hasArrow:"",title:"点状"}},[t("za-badge",{attrs:{shape:"dot"},on:{"badge-click":n.handleClick},slot:"description"})],1),n._v(" "),t("za-cell",{attrs:{hasArrow:"",title:"直角"}},[t("za-badge",{attrs:{text:"免费"},slot:"description"})],1),n._v(" "),t("za-cell",{attrs:{hasArrow:"",title:"圆角"}},[t("za-badge",{attrs:{text:"new",shape:"radius"},slot:"description"})],1),n._v(" "),t("za-cell",{attrs:{hasArrow:"",title:"椭圆"}},[t("span",{slot:"description"},[t("za-badge",{attrs:{text:3,shape:"circle"}}),n._v(" "),t("za-badge",{attrs:{text:"999+",shape:"round"}})],1)])],1)],1),n._v(" "),t("za-panel",[t("za-panel-header",[t("za-panel-title",[n._v("上标位置")])],1),n._v(" "),t("za-panel-body",{staticClass:"custom-panel"},[t("div",{staticClass:"box"},[t("za-badge",{attrs:{sup:"",shape:"dot"},on:{"badge-click":n.handleClick}},[t("div",{staticClass:"box-item"})])],1),n._v(" "),t("div",{staticClass:"box"},[t("za-badge",{attrs:{sup:"",shape:"radius",text:"new"},on:{"badge-click":n.handleClick}},[t("div",{staticClass:"box-item"})])],1),n._v(" "),t("div",{staticClass:"box"},[t("za-badge",{attrs:{sup:"",shape:"round",text:"3"},on:{"badge-click":n.handleClick}},[t("div",{staticClass:"box-item"})])],1),n._v(" "),t("div",{staticClass:"box"},[t("za-badge",{attrs:{sup:"",shape:"round",text:"999+"},on:{"badge-click":n.handleClick}},[t("div",{staticClass:"box-item"})])],1)])],1)],1)]),n._v(" "),t("PageFooter")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=19.35e8ee28d2f7efb61f15.js.map