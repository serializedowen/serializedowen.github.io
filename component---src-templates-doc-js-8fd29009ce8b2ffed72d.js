(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{JyPR:function(e,t,n){"use strict";n.r(t),n.d(t,"postQuery",(function(){return ie}));var i=n("V0hb"),o=n("ZZRV"),r=n.n(o),a=n("KJDX"),c=n.n(a),u=n("Wbzz"),s=(n("Kvkj"),n("FgOs")),l=n.n(s),d=n("1gHQ"),p=n("buSX"),f=n("ghYj"),m=n("63nZ"),v=n("EaaV");function h(e,t){"function"==typeof e?e(t):e&&(e.current=t)}function b(e,t){return o.useMemo((function(){return null==e&&null==t?null:function(n){h(e,n),h(t,n)}}),[e,t])}var g="undefined"!=typeof window?o.useLayoutEffect:o.useEffect;function y(e){var t=o.useRef(e);return g((function(){t.current=e})),o.useCallback((function(){return t.current.apply(void 0,arguments)}),[])}var E=!0,w=!1,x=null,C={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function M(e){e.metaKey||e.altKey||e.ctrlKey||(E=!0)}function O(){E=!1}function R(){"hidden"===this.visibilityState&&w&&(E=!0)}function k(e){var t,n,i,o=e.target;try{return o.matches(":focus-visible")}catch(r){}return E||(n=(t=o).type,!("INPUT"!==(i=t.tagName)||!C[n]||t.readOnly)||"TEXTAREA"===i&&!t.readOnly||!!t.isContentEditable)}function j(){w=!0,window.clearTimeout(x),x=window.setTimeout((function(){w=!1}),100)}function T(){return{isFocusVisible:k,onBlurVisible:j,ref:o.useCallback((function(e){var t=v.findDOMNode(e);null!=t&&function(e){e.addEventListener("keydown",M,!0),e.addEventListener("mousedown",O,!0),e.addEventListener("pointerdown",O,!0),e.addEventListener("touchstart",O,!0),e.addEventListener("visibilitychange",R,!0)}(t.ownerDocument)}),[])}}var N=n("+urH"),L="undefined"==typeof window?o.useEffect:o.useLayoutEffect;var D=function(e){var t=e.classes,n=e.pulsate,i=void 0!==n&&n,r=e.rippleX,a=e.rippleY,c=e.rippleSize,u=e.in,s=e.onExited,l=void 0===s?function(){}:s,d=e.timeout,p=o.useState(!1),m=p[0],v=p[1],h=Object(f.a)(t.ripple,t.rippleVisible,i&&t.ripplePulsate),b={width:c,height:c,top:-c/2+a,left:-c/2+r},g=Object(f.a)(t.child,m&&t.childLeaving,i&&t.childPulsate),E=y(l);return L((function(){if(!u){v(!0);var e=setTimeout(E,d);return function(){clearTimeout(e)}}}),[E,u,d]),o.createElement("span",{className:h,style:b},o.createElement("span",{className:g}))},S=o.forwardRef((function(e,t){var n=e.center,r=void 0!==n&&n,a=e.classes,c=e.className,u=Object(p.a)(e,["center","classes","className"]),s=o.useState([]),l=s[0],m=s[1],v=o.useRef(0),h=o.useRef(null);o.useEffect((function(){h.current&&(h.current(),h.current=null)}),[l]);var b=o.useRef(!1),g=o.useRef(null),y=o.useRef(null),E=o.useRef(null);o.useEffect((function(){return function(){clearTimeout(g.current)}}),[]);var w=o.useCallback((function(e){var t=e.pulsate,n=e.rippleX,r=e.rippleY,c=e.rippleSize,u=e.cb;m((function(e){return[].concat(Object(i.a)(e),[o.createElement(D,{key:v.current,classes:a,timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:c})])})),v.current+=1,h.current=u}),[a]),x=o.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,i=t.pulsate,o=void 0!==i&&i,a=t.center,c=void 0===a?r||t.pulsate:a,u=t.fakeElement,s=void 0!==u&&u;if("mousedown"===e.type&&b.current)b.current=!1;else{"touchstart"===e.type&&(b.current=!0);var l,d,p,f=s?null:E.current,m=f?f.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(c||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)l=Math.round(m.width/2),d=Math.round(m.height/2);else{var v=e.touches?e.touches[0]:e,h=v.clientX,x=v.clientY;l=Math.round(h-m.left),d=Math.round(x-m.top)}if(c)(p=Math.sqrt((2*Math.pow(m.width,2)+Math.pow(m.height,2))/3))%2==0&&(p+=1);else{var C=2*Math.max(Math.abs((f?f.clientWidth:0)-l),l)+2,M=2*Math.max(Math.abs((f?f.clientHeight:0)-d),d)+2;p=Math.sqrt(Math.pow(C,2)+Math.pow(M,2))}e.touches?null===y.current&&(y.current=function(){w({pulsate:o,rippleX:l,rippleY:d,rippleSize:p,cb:n})},g.current=setTimeout((function(){y.current&&(y.current(),y.current=null)}),80)):w({pulsate:o,rippleX:l,rippleY:d,rippleSize:p,cb:n})}}),[r,w]),C=o.useCallback((function(){x({},{pulsate:!0})}),[x]),M=o.useCallback((function(e,t){if(clearTimeout(g.current),"touchend"===e.type&&y.current)return e.persist(),y.current(),y.current=null,void(g.current=setTimeout((function(){M(e,t)})));y.current=null,m((function(e){return e.length>0?e.slice(1):e})),h.current=t}),[]);return o.useImperativeHandle(t,(function(){return{pulsate:C,start:x,stop:M}}),[C,x,M]),o.createElement("span",Object(d.a)({className:Object(f.a)(a.root,c),ref:E},u),o.createElement(N.a,{component:null,exit:!0},l))})),V=Object(m.a)((function(e){return{root:{overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"},ripple:{opacity:0,position:"absolute"},rippleVisible:{opacity:.3,transform:"scale(1)",animation:"$enter ".concat(550,"ms ").concat(e.transitions.easing.easeInOut)},ripplePulsate:{animationDuration:"".concat(e.transitions.duration.shorter,"ms")},child:{opacity:1,display:"block",width:"100%",height:"100%",borderRadius:"50%",backgroundColor:"currentColor"},childLeaving:{opacity:0,animation:"$exit ".concat(550,"ms ").concat(e.transitions.easing.easeInOut)},childPulsate:{position:"absolute",left:0,top:0,animation:"$pulsate 2500ms ".concat(e.transitions.easing.easeInOut," 200ms infinite")},"@keyframes enter":{"0%":{transform:"scale(0)",opacity:.1},"100%":{transform:"scale(1)",opacity:.3}},"@keyframes exit":{"0%":{opacity:1},"100%":{opacity:0}},"@keyframes pulsate":{"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.92)"},"100%":{transform:"scale(1)"}}}}),{flip:!1,name:"MuiTouchRipple"})(o.memo(S)),I=o.forwardRef((function(e,t){var n=e.action,i=e.buttonRef,r=e.centerRipple,a=void 0!==r&&r,c=e.children,u=e.classes,s=e.className,l=e.component,m=void 0===l?"button":l,h=e.disabled,g=void 0!==h&&h,E=e.disableRipple,w=void 0!==E&&E,x=e.disableTouchRipple,C=void 0!==x&&x,M=e.focusRipple,O=void 0!==M&&M,R=e.focusVisibleClassName,k=e.onBlur,j=e.onClick,N=e.onFocus,L=e.onFocusVisible,D=e.onKeyDown,S=e.onKeyUp,I=e.onMouseDown,P=e.onMouseLeave,H=e.onMouseUp,A=e.onTouchEnd,z=e.onTouchMove,B=e.onTouchStart,F=e.onDragLeave,K=e.tabIndex,X=void 0===K?0:K,Y=e.TouchRippleProps,U=e.type,_=void 0===U?"button":U,Z=Object(p.a)(e,["action","buttonRef","centerRipple","children","classes","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","onBlur","onClick","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","onDragLeave","tabIndex","TouchRippleProps","type"]),$=o.useRef(null);var q=o.useRef(null),J=o.useState(!1),W=J[0],G=J[1];g&&W&&G(!1);var Q=T(),ee=Q.isFocusVisible,te=Q.onBlurVisible,ne=Q.ref;function ie(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:C;return y((function(i){return t&&t(i),!n&&q.current&&q.current[e](i),!0}))}o.useImperativeHandle(n,(function(){return{focusVisible:function(){G(!0),$.current.focus()}}}),[]),o.useEffect((function(){W&&O&&!w&&q.current.pulsate()}),[w,O,W]);var oe=ie("start",I),re=ie("stop",F),ae=ie("stop",H),ce=ie("stop",(function(e){W&&e.preventDefault(),P&&P(e)})),ue=ie("start",B),se=ie("stop",A),le=ie("stop",z),de=ie("stop",(function(e){W&&(te(e),G(!1)),k&&k(e)}),!1),pe=y((function(e){$.current||($.current=e.currentTarget),ee(e)&&(G(!0),L&&L(e)),N&&N(e)})),fe=function(){var e=v.findDOMNode($.current);return m&&"button"!==m&&!("A"===e.tagName&&e.href)},me=o.useRef(!1),ve=y((function(e){O&&!me.current&&W&&q.current&&" "===e.key&&(me.current=!0,e.persist(),q.current.stop(e,(function(){q.current.start(e)}))),e.target===e.currentTarget&&fe()&&" "===e.key&&e.preventDefault(),D&&D(e),e.target===e.currentTarget&&fe()&&"Enter"===e.key&&!g&&(e.preventDefault(),j&&j(e))})),he=y((function(e){O&&" "===e.key&&q.current&&W&&!e.defaultPrevented&&(me.current=!1,e.persist(),q.current.stop(e,(function(){q.current.pulsate(e)}))),S&&S(e),j&&e.target===e.currentTarget&&fe()&&" "===e.key&&!e.defaultPrevented&&j(e)})),be=m;"button"===be&&Z.href&&(be="a");var ge={};"button"===be?(ge.type=_,ge.disabled=g):("a"===be&&Z.href||(ge.role="button"),ge["aria-disabled"]=g);var ye=b(i,t),Ee=b(ne,$),we=b(ye,Ee),xe=o.useState(!1),Ce=xe[0],Me=xe[1];o.useEffect((function(){Me(!0)}),[]);var Oe=Ce&&!w&&!g;return o.createElement(be,Object(d.a)({className:Object(f.a)(u.root,s,W&&[u.focusVisible,R],g&&u.disabled),onBlur:de,onClick:j,onFocus:pe,onKeyDown:ve,onKeyUp:he,onMouseDown:oe,onMouseLeave:ce,onMouseUp:ae,onDragLeave:re,onTouchEnd:se,onTouchMove:le,onTouchStart:ue,ref:we,tabIndex:g?-1:X},ge,Z),c,Oe?o.createElement(V,Object(d.a)({ref:q,center:a},Y)):null)})),P=Object(m.a)({root:{display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},"&$disabled":{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}},disabled:{},focusVisible:{}},{name:"MuiButtonBase"})(I);var H=o.createContext({}),A="undefined"==typeof window?o.useEffect:o.useLayoutEffect,z=o.forwardRef((function(e,t){var n=e.alignItems,i=void 0===n?"center":n,r=e.autoFocus,a=void 0!==r&&r,c=e.button,u=void 0!==c&&c,s=e.children,l=e.classes,m=e.className,h=e.component,g=e.ContainerComponent,y=void 0===g?"li":g,E=e.ContainerProps,w=(E=void 0===E?{}:E).className,x=Object(p.a)(E,["className"]),C=e.dense,M=void 0!==C&&C,O=e.disabled,R=void 0!==O&&O,k=e.disableGutters,j=void 0!==k&&k,T=e.divider,N=void 0!==T&&T,L=e.focusVisibleClassName,D=e.selected,S=void 0!==D&&D,V=Object(p.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),I=o.useContext(H),z={dense:M||I.dense||!1,alignItems:i},B=o.useRef(null);A((function(){a&&B.current&&B.current.focus()}),[a]);var F,K,X=o.Children.toArray(s),Y=X.length&&(F=X[X.length-1],K=["ListItemSecondaryAction"],o.isValidElement(F)&&-1!==K.indexOf(F.type.muiName)),U=b(o.useCallback((function(e){B.current=v.findDOMNode(e)}),[]),t),_=Object(d.a)({className:Object(f.a)(l.root,m,z.dense&&l.dense,!j&&l.gutters,N&&l.divider,R&&l.disabled,u&&l.button,"center"!==i&&l.alignItemsFlexStart,Y&&l.secondaryAction,S&&l.selected),disabled:R},V),Z=h||"li";return u&&(_.component=h||"div",_.focusVisibleClassName=Object(f.a)(l.focusVisible,L),Z=P),Y?(Z=_.component||h?Z:"div","li"===y&&("li"===Z?Z="div":"li"===_.component&&(_.component="div")),o.createElement(H.Provider,{value:z},o.createElement(y,Object(d.a)({className:Object(f.a)(l.container,w),ref:U},x),o.createElement(Z,_,X),X.pop()))):o.createElement(H.Provider,{value:z},o.createElement(Z,Object(d.a)({ref:U},_),X))})),B=Object(m.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(z),F=o.forwardRef((function(e,t){var n=e.children,i=e.classes,r=e.className,a=e.component,c=void 0===a?"ul":a,u=e.dense,s=void 0!==u&&u,l=e.disablePadding,m=void 0!==l&&l,v=e.subheader,h=Object(p.a)(e,["children","classes","className","component","dense","disablePadding","subheader"]),b=o.useMemo((function(){return{dense:s}}),[s]);return o.createElement(H.Provider,{value:b},o.createElement(c,Object(d.a)({className:Object(f.a)(i.root,r,s&&i.dense,!m&&i.padding,v&&i.subheader),ref:t},h),v,n))})),K=Object(m.a)({root:{listStyle:"none",margin:0,padding:0,position:"relative"},padding:{paddingTop:8,paddingBottom:8},dense:{},subheader:{paddingTop:0}},{name:"MuiList"})(F),X=n("DHRj"),Y=n("GZha"),U=n("WSwA"),_=n("N+k5");function Z(e,t){var n=e.timeout,i=e.style,o=void 0===i?{}:i;return{duration:o.transitionDuration||"number"==typeof n?n:n[t.mode]||0,delay:o.transitionDelay}}var $=n("SYlQ"),q=n("TB8+");var J=o.forwardRef((function(e,t){var n=e.children,i=e.classes,r=e.className,a=e.collapsedHeight,c=void 0===a?"0px":a,u=e.component,s=void 0===u?"div":u,l=e.disableStrictModeCompat,m=void 0!==l&&l,v=e.in,h=e.onEnter,g=e.onEntered,y=e.onEntering,E=e.onExit,w=e.onExited,x=e.onExiting,C=e.style,M=e.timeout,O=void 0===M?_.b.standard:M,R=e.TransitionComponent,k=void 0===R?U.a:R,j=Object(p.a)(e,["children","classes","className","collapsedHeight","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),T=Object($.a)()||q.a,N=o.useRef(),L=o.useRef(null),D=o.useRef(),S="number"==typeof c?"".concat(c,"px"):c;o.useEffect((function(){return function(){clearTimeout(N.current)}}),[]);var V=T.unstable_strictMode&&!m,I=o.useRef(null),P=b(t,V?I:void 0),H=function(e){return function(t,n){if(e){var i=V?[I.current,t]:[t,n],o=Object(Y.a)(i,2),r=o[0],a=o[1];void 0===a?e(r):e(r,a)}}},A=H((function(e,t){e.style.height=S,h&&h(e,t)})),z=H((function(e,t){var n=L.current?L.current.clientHeight:0,i=Z({style:C,timeout:O},{mode:"enter"}).duration;if("auto"===O){var o=T.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(o,"ms"),D.current=o}else e.style.transitionDuration="string"==typeof i?i:"".concat(i,"ms");e.style.height="".concat(n,"px"),y&&y(e,t)})),B=H((function(e,t){e.style.height="auto",g&&g(e,t)})),F=H((function(e){var t=L.current?L.current.clientHeight:0;e.style.height="".concat(t,"px"),E&&E(e)})),K=H(w),X=H((function(e){var t=L.current?L.current.clientHeight:0,n=Z({style:C,timeout:O},{mode:"exit"}).duration;if("auto"===O){var i=T.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(i,"ms"),D.current=i}else e.style.transitionDuration="string"==typeof n?n:"".concat(n,"ms");e.style.height=S,x&&x(e)}));return o.createElement(k,Object(d.a)({in:v,onEnter:A,onEntered:B,onEntering:z,onExit:F,onExited:K,onExiting:X,addEndListener:function(e,t){var n=V?e:t;"auto"===O&&(N.current=setTimeout(n,D.current||0))},nodeRef:V?I:void 0,timeout:"auto"===O?null:O},j),(function(e,t){return o.createElement(s,Object(d.a)({className:Object(f.a)(i.container,r,{entered:i.entered,exited:!v&&"0px"===S&&i.hidden}[e]),style:Object(d.a)({minHeight:S},C),ref:P},t),o.createElement("div",{className:i.wrapper,ref:L},o.createElement("div",{className:i.wrapperInner},n)))}))}));J.muiSupportAuto=!0;var W=Object(m.a)((function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(J),G=n("qM1E"),Q=n.n(G),ee=n("Uwvd"),te=n.n(ee),ne=Object(X.d)(B).withConfig({displayName:"doc__ActiveMenuItem",componentId:"sc-76mmdc-0"})(["background-color:lightgrey !important;"]),ie=(t.default=function(e){var t,n=e.data,a=n.allMarkdownRemark,s=n.markdownRemark,d=(e.pageContext,a.edges.map((function(e){return{title:e.node.frontmatter.title,slug:e.node.fields.slug,parents:e.node.fields.slug.split("/").slice(3)}}))),p=(t={children:[]},d.map((function(e){return function e(t,n,i){if(n.children=n.children||[],t){var o=n.children.filter((function(e){return e.title===t[0]}))[0];if(1===t.length){if(o)return;return n.children.push({title:t[0],isLeaf:!0,slug:i})}return o?(t.shift(),e(t,o,i)):n.children.push({title:t[0]})}}(e.parents,t,e.slug)})),t);return r.a.createElement("div",null,r.a.createElement(c.a,{title:"'' | "+l.a.siteTitle}),r.a.createElement("div",{style:{width:"100%",height:"calc(100vh - 50px)",backgroundColor:"white",display:"grid",gridTemplateColumns:"240px 1fr 100px"}},r.a.createElement("nav",{style:{overflowY:"auto"}},function e(t,n,a){if(void 0===a&&(a=0),!t)return null;var c=Object(o.useState)(t.map((function(){return!0}))),s=c[0],l=c[1];return t.map((function(t,o){return t.isLeaf?r.a.createElement(u.Link,{to:t.slug},t.slug===n?r.a.createElement(ne,{button:!0,key:t.title,style:{paddingLeft:a+1+"em"}},t.title):r.a.createElement(B,{button:!0,key:t.title,style:{paddingLeft:a+1+"em"}},t.title)):r.a.createElement(K,null,r.a.createElement(B,{style:{paddingLeft:a+1+"em"},button:!0,onClick:function(e){e.stopPropagation(),l((function(e){return e[o]=!e[o],Object(i.a)(e)}))}},t.title,s[o]?r.a.createElement(Q.a,{style:{marginLeft:"auto"}}):r.a.createElement(te.a,{style:{marginLeft:"auto"}})),r.a.createElement(W,{in:s[o]},e(t.children,n,a+1)))}))}(p.children)),r.a.createElement("div",{style:{overflowY:"auto",margin:"2em"},dangerouslySetInnerHTML:{__html:s.html}}),r.a.createElement("div",null,"Table of Contents")))},"4021407655")},Uwvd:function(e,t,n){"use strict";var i=n("7iVm");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("ZZRV")),r=(0,i(n("wHCi")).default)(o.default.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.default=r},qM1E:function(e,t,n){"use strict";var i=n("7iVm");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("ZZRV")),r=(0,i(n("wHCi")).default)(o.default.createElement("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");t.default=r}}]);
//# sourceMappingURL=component---src-templates-doc-js-8fd29009ce8b2ffed72d.js.map