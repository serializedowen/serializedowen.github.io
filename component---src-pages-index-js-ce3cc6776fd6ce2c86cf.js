(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"7dF+":function(e,t,r){var n=r("gteZ"),a=r("OASQ"),i=r("aXON"),o=Math.max,c=Math.min;e.exports=function(e,t,r){var s,l,u,f,d,m,v=0,g=!1,p=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function x(t){var r=s,n=l;return s=l=void 0,v=t,f=e.apply(n,r)}function y(e){return v=e,d=setTimeout(w,t),g?x(e):f}function b(e){var r=e-m;return void 0===m||r>=t||r<0||p&&e-v>=u}function w(){var e=a();if(b(e))return k(e);d=setTimeout(w,function(e){var r=t-(e-m);return p?c(r,u-(e-v)):r}(e))}function k(e){return d=void 0,h&&s?x(e):(s=l=void 0,f)}function E(){var e=a(),r=b(e);if(s=arguments,l=this,m=e,r){if(void 0===d)return y(m);if(p)return clearTimeout(d),d=setTimeout(w,t),x(m)}return void 0===d&&(d=setTimeout(w,t)),f}return t=i(t)||0,n(r)&&(g=!!r.leading,u=(p="maxWait"in r)?o(i(r.maxWait)||0,t):u,h="trailing"in r?!!r.trailing:h),E.cancel=function(){void 0!==d&&clearTimeout(d),v=0,s=m=l=d=void 0},E.flush=function(){return void 0===d?f:k(a())},E}},MKxc:function(e,t,r){"use strict";var n=r("ZZRV"),a=r.n(n),i=r("P6u4"),o=r.n(i),c=r("aArQ");t.a=function(e){return function(t){return a.a.createElement(c.a,Object.assign({},t,{i18nMessages:o.a}),a.a.createElement(e,t))}}},OASQ:function(e,t,r){var n=r("trXQ");e.exports=function(){return n.Date.now()}},P6u4:function(e,t){e.exports={selectLanguage:"Select your language",greeting:"Howdy",categories:"Categories",contact:"Contact",readTime:"{time} Min Read",blog:"Blog",docs:"Docs",mainPage:"Home",copyrights:"@SerializedOwen 2020. All rights reserved."}},RXBc:function(e,t,r){"use strict";r.r(t),r.d(t,"IndexPage",(function(){return O}));var n=r("ZZRV"),a=r.n(n),i=r("Wbzz"),o=r("DHRj"),c=r("B6KL"),s=r("Kvkj"),l=r("VBu3"),u=r("MKxc"),f=r("7dF+"),d=r.n(f),m=r("1gHQ"),v=r("buSX"),g=r("ghYj"),p=r("63nZ"),h=r("KUEp");function x(e){var t,r,n;return t=e,r=0,n=1,e=(Math.min(Math.max(r,t),n)-r)/(n-r),e=(e-=1)*e*e+1}var y=n.forwardRef((function(e,t){var r,a=e.classes,i=e.className,o=e.color,c=void 0===o?"primary":o,s=e.disableShrink,l=void 0!==s&&s,u=e.size,f=void 0===u?40:u,d=e.style,p=e.thickness,y=void 0===p?3.6:p,b=e.value,w=void 0===b?0:b,k=e.variant,E=void 0===k?"indeterminate":k,O=Object(v.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),j={},D={},S={};if("determinate"===E||"static"===E){var M=2*Math.PI*((44-y)/2);j.strokeDasharray=M.toFixed(3),S["aria-valuenow"]=Math.round(w),"static"===E?(j.strokeDashoffset="".concat(((100-w)/100*M).toFixed(3),"px"),D.transform="rotate(-90deg)"):(j.strokeDashoffset="".concat((r=(100-w)/100,r*r*M).toFixed(3),"px"),D.transform="rotate(".concat((270*x(w/70)).toFixed(3),"deg)"))}return n.createElement("div",Object(m.a)({className:Object(g.a)(a.root,i,"inherit"!==c&&a["color".concat(Object(h.a)(c))],{indeterminate:a.indeterminate,static:a.static}[E]),style:Object(m.a)({width:f,height:f},D,d),ref:t,role:"progressbar"},S,O),n.createElement("svg",{className:a.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},n.createElement("circle",{className:Object(g.a)(a.circle,l&&a.circleDisableShrink,{indeterminate:a.circleIndeterminate,static:a.circleStatic}[E]),style:j,cx:44,cy:44,r:(44-y)/2,fill:"none",strokeWidth:y})))})),b=Object(p.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(y);function w(e){var t=e.hasMore,r=e.loader,i=Object(n.useRef)(null),o=Object(n.useState)(!1),c=o[0],s=o[1];return Object(n.useEffect)((function(){var e=d()((function(){t&&function(e){if(!e.current)return!1;var t=e.current.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}(i)&&(s(!0),setTimeout((function(){s(!1),r()}),1e3))}),200);return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[t]),a.a.createElement("div",{style:{textAlign:"center"},ref:i},c&&a.a.createElement(b,null))}var k=!0,E=o.d.div.withConfig({displayName:"pages__Hero",componentId:"sc-1bygtfm-0"})(["grid-column:2;padding:3rem 2rem 6rem 2rem;text-shadow:0 12px 30px rgba(0,0,0,0.15);p{font-size:1.68rem;margin-top:-1rem;@media ","{font-size:1.25rem;}@media ","{font-size:1.45rem;}}"],l.a.phone,l.a.tablet),O=function(){var e=Object(n.useState)(10),t=e[0],r=e[1];Object(n.useEffect)((function(){k=!1}),[]);var o=Object(i.useStaticQuery)("1806087563").allMarkdownRemark.edges;return a.a.createElement(s.j,null,a.a.createElement(E,null,a.a.createElement("h1",{style:{color:"white"}},a.a.createElement(c.a,{id:"greeting"})),a.a.createElement("p",{style:{color:"white"}},"I'm SerializedOwen, a Full-stack Web Developer with five years of industry experience"),a.a.createElement(i.Link,{to:"/contact"},a.a.createElement(s.b,{big:!0},a.a.createElement("svg",{width:"1792",height:"1792",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z"})),a.a.createElement(c.a,{id:"contact"})))),a.a.createElement(s.c,null,a.a.createElement(s.h,null,"Latest stories"),o.filter((function(e,r){return k?r<10:r<t})).map((function(e){return a.a.createElement(s.a,{title:e.node.frontmatter.title,date:e.node.frontmatter.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead,slug:e.node.fields.slug,category:e.node.frontmatter.category,key:e.node.fields.slug})})),a.a.createElement(w,{hasMore:t<o.length,loader:function(){return r((function(e){return e+10}))}})))};t.default=Object(u.a)(O)},aXON:function(e,t,r){var n=r("gteZ"),a=r("feRE"),i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return NaN;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var r=c.test(e);return r||s.test(e)?l(e.slice(2),r?2:8):o.test(e)?NaN:+e}},gteZ:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}}}]);
//# sourceMappingURL=component---src-pages-index-js-ce3cc6776fd6ce2c86cf.js.map