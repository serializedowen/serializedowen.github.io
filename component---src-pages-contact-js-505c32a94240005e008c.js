(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{152:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(162),o=n.n(i),l=n(36),c=n(156),m=n(164),s=n(158),p=n(159),u=n.n(p),d=c.c.div.withConfig({displayName:"contact__Content",componentId:"sc-1na4qda-0"})(["grid-column:2;box-shadow:0 4px 120px rgba(0,0,0,0.1);border-radius:1rem;padding:2rem 4rem;background-color:",";z-index:9000;margin-top:-3rem;@media ","{padding:3rem 3rem;}@media ","{padding:2rem 1.5rem;}form{p{label,input{display:block;}input{min-width:275px;margin-top:0.5rem;}textarea{resize:vertical;min-height:150px;width:100%;margin-top:0.5rem;}}}"],function(e){return e.theme.colors.bg},s.a.tablet,s.a.phone);t.default=function(){return r.a.createElement(m.d,null,r.a.createElement(m.i,null,r.a.createElement(o.a,{title:"Contact | "+u.a.siteTitle}),r.a.createElement(m.c,null,r.a.createElement(l.Link,{to:"/"},u.a.siteTitle)),r.a.createElement(d,null,r.a.createElement("h1",null,"Contact"),r.a.createElement("p",null,"Super cool intro text to get people contacting me! It uses Netlify's form feature."),r.a.createElement("form",{name:"contact-form",method:"post","data-netlify":"true","data-netlify-honeypot":"bot-field",action:"/success"},r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"contact-name"},"Name",r.a.createElement("input",{name:"name",id:"contact-name",type:"text",required:!0}))),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"contact-email"},"E-Mail ",r.a.createElement("input",{name:"email",id:"contact-email",type:"email",required:!0}))),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"contact-message"},"Your Message ",r.a.createElement("textarea",{name:"message",id:"contact-message",required:!0}))),r.a.createElement("p",null,r.a.createElement(m.b,null,"Send")),r.a.createElement("input",{type:"hidden",name:"form-name",value:"contact-form"})))))}},158:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a={tablet:"(max-width: "+"1200px"+")",phone:"(max-width: "+"600px"+")"}},159:function(e,t){e.exports={pathPrefix:"/",siteTitle:"Minimal Blog",siteTitleAlt:"Minimal Blog - Gatsby Starter",siteUrl:"serializedowen.github.io",siteLanguage:"en",siteBanner:"/social/banner.jpg",favicon:"src/favicon.png",siteDescription:"Minimal Blog with big typography",author:"SeriallizedOwen",siteLogo:"/social/logo.png",userTwitter:"",ogSiteName:"serializedowen - portfolio",ogLanguage:"en_US",themeColor:"#3498DB",backgroundColor:"#2b2e3c",headerFontFamily:"Bitter",bodyFontFamily:"Open Sans",baseFontSize:"18px"}},163:function(e){e.exports={data:{site:{buildTime:"29.12.2018"}}}},164:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(1),o=n.n(i),l=n(156),c=n(36),m=n(165),s=n.n(m),p=l.c.article.withConfig({displayName:"Article__Post",componentId:"sc-1p7dbao-0"})(["display:flex;flex-direction:column;margin-top:3.5rem;margin-bottom:3.5rem;"]),u=l.c.h2.withConfig({displayName:"Article__Title",componentId:"sc-1p7dbao-1"})(["position:relative;text-shadow:0 12px 30px rgba(0,0,0,0.15);margin-bottom:0.75rem;"]),d=l.c.span.withConfig({displayName:"Article__Initiale",componentId:"sc-1p7dbao-2"})(["position:absolute;font-size:7rem;transform:translate(-50%,-50%);opacity:0.08;user-select:none;z-index:-1;"]),g=l.c.p.withConfig({displayName:"Article__Excerpt",componentId:"sc-1p7dbao-3"})(["grid-column:-1 / 1;margin-top:1rem;margin-bottom:1rem;"]),f=function(e){var t=e.title,n=e.date,a=e.excerpt,i=e.slug,o=e.timeToRead,l=e.category,m=t.charAt(0);return r.a.createElement(p,null,r.a.createElement(u,null,r.a.createElement(d,null,m),r.a.createElement(c.Link,{to:i},t)),r.a.createElement(ie,null,n," — ",o," Min Read — In"," ",r.a.createElement(c.Link,{to:"/categories/"+s()(l)},l)),r.a.createElement(g,null,a))},h=f;f.propTypes={title:o.a.string.isRequired,date:o.a.string.isRequired,excerpt:o.a.string.isRequired,slug:o.a.string.isRequired,timeToRead:o.a.number.isRequired,category:o.a.string.isRequired};n(166);var b=n(161),y=l.c.button.withConfig({displayName:"Button",componentId:"f0k30h-0"})(["background:",";border:none;display:inline-flex;align-items:center;border-radius:",";font-size:",";color:white;padding:",";transition:all ",";box-shadow:0 4px 6px rgba(50,50,93,0.11),0 1px 3px rgba(0,0,0,0.08);&:hover{background:",";cursor:pointer;transform:translateY(-2px);}&:focus{outline:none;}svg{width:20px;height:20px;margin-right:0.75rem;fill:white;}"],function(e){return e.theme.colors.primary},function(e){return e.big?"1.5rem":"1rem"},function(e){return e.big?"1.2rem":"1rem"},function(e){return e.big?"0.35rem 1.6rem":"0.25rem 1.5rem"},function(e){return e.theme.transitions.normal},function(e){return Object(b.b)(.05,e.theme.colors.primary)}),x=l.c.header.withConfig({displayName:"Header__Wrapper",componentId:"sc-1uevezl-0"})(["background:linear-gradient( 45deg,",","," );grid-column:1 / -1;margin-left:-1rem;margin-right:-1rem;padding:2rem 2rem 5rem 2rem;box-shadow:inset 0px -10px 30px 0px rgba(0,0,0,0.1);"],function(e){return Object(b.a)(.1,e.theme.colors.primary)},function(e){return Object(b.b)(.1,e.theme.colors.primary)}),E=l.c.div.withConfig({displayName:"Header__Content",componentId:"sc-1uevezl-1"})(["max-width:1000px;margin:0 auto;a{color:white;&:hover{opacity:0.85;color:white;}}"]),v=function(e){var t=e.children;return r.a.createElement(x,null,r.a.createElement(E,null,t))},w=v;v.propTypes={children:o.a.oneOfType([o.a.array,o.a.node]).isRequired};var k=n(167),z=n.n(k),N=n(163),_={colors:{primary:"#7f0034",secondary:"#efdfd0",bg:"#efdfd0",grey:{dark:"rgba(0, 0, 0, 0.9)",default:"rgba(0, 0, 0, 0.7)",light:"rgba(0, 0, 0, 0.5)",ultraLight:"rgba(0, 0, 0, 0.25)"}},transitions:{normal:"0.5s"},fontSize:{small:"0.9rem"}},T=n(158),C=(n(157),n(76)),I=n.n(C),S=l.c.svg.attrs({preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"}).withConfig({displayName:"SVG",componentId:"sc-1u2ae8k-0"})(["fill:",";"],function(e){return e.theme.colors.secondary||"black"}),P=function(e){var t=e.children,n=e.link,a=I()(e,["children","link"]);return n?r.a.createElement("a",{href:n},r.a.createElement(S,a,t)):r.a.createElement(S,a,t)};function L(e){var t=e.link;return r.a.createElement(P,{link:t,viewBox:"0 0 40 40"},r.a.createElement("g",null,r.a.createElement("path",{d:"m20 0c-11 0-20 9-20 20 0 8.8 5.7 16.3 13.7 19 1 0.2 1.3-0.5 1.3-1 0-0.5 0-2 0-3.7-5.5 1.2-6.7-2.4-6.7-2.4-0.9-2.3-2.2-2.9-2.2-2.9-1.9-1.2 0.1-1.2 0.1-1.2 2 0.1 3.1 2.1 3.1 2.1 1.7 3 4.6 2.1 5.8 1.6 0.2-1.3 0.7-2.2 1.3-2.7-4.5-0.5-9.2-2.2-9.2-9.8 0-2.2 0.8-4 2.1-5.4-0.2-0.5-0.9-2.6 0.2-5.3 0 0 1.7-0.5 5.5 2 1.6-0.4 3.3-0.6 5-0.6 1.7 0 3.4 0.2 5 0.7 3.8-2.6 5.5-2.1 5.5-2.1 1.1 2.8 0.4 4.8 0.2 5.3 1.3 1.4 2.1 3.2 2.1 5.4 0 7.6-4.7 9.3-9.2 9.8 0.7 0.6 1.4 1.9 1.4 3.7 0 2.7 0 4.9 0 5.5 0 0.6 0.3 1.2 1.3 1 8-2.7 13.7-10.2 13.7-19 0-11-9-20-20-20z"})))}function O(e){var t=e.link;return r.a.createElement(P,{link:t,viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"}))}function j(e){var t=e.link;return r.a.createElement(P,{link:t,viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M23.541 12.748c-.609-1.38-1.758-2.476-3.092-3.151-2.354-1.192-5.281-1.185-7.629.03-1.631.837-2.993 2.337-3.379 4.162-.318 1.344-.033 2.791.68 3.961 1.061 1.762 2.979 2.887 4.971 3.248 1.443.293 2.936.119 4.338-.285.842.326 1.592.854 2.408 1.246-.211-.707-.436-1.406-.676-2.102.916-.65 1.746-1.461 2.244-2.479.744-1.415.789-3.171.135-4.63zm-9.924-9.466c-2.495-1.404-5.602-1.615-8.286-.645-1.764.635-3.36 1.815-4.346 3.42-.895 1.45-1.23 3.258-.799 4.917.433 1.84 1.711 3.383 3.262 4.413-.3.85-.585 1.699-.855 2.555.975-.51 1.95-1.043 2.926-1.561 1.17.375 2.415.559 3.66.518-.33-.943-.405-1.965-.255-2.951.225-1.371.975-2.625 1.994-3.554 1.726-1.615 4.171-2.296 6.496-2.131-.436-2.135-1.936-3.939-3.824-4.98h.027zm1.733 9.989c-.209.652-1.156.848-1.615.352-.506-.459-.309-1.418.355-1.623.734-.31 1.582.537 1.26 1.271zm4.795.092c-.256.586-1.141.723-1.576.27-.209-.191-.27-.479-.344-.73.104-.458.42-.933.93-.955.705-.098 1.336.773.975 1.416h.015zM12.99 6.909c.008.961-1.275 1.561-1.995.909-.747-.535-.535-1.837.342-2.106.785-.315 1.713.344 1.651 1.185l.002.012zm-6.059.244c-.172.835-1.291 1.238-1.946.678-.759-.535-.546-1.861.345-2.131.873-.336 1.865.55 1.601 1.453z"}))}L.propTypes={link:o.a.string},O.propTypes={link:o.a.string},j.propTypes={link:o.a.string};var q=L,B=O,A=j,M=l.c.nav.attrs({role:"navigation"}).withConfig({displayName:"Navigation__Nav",componentId:"sc-1f5u5u3-0"})(["background:",";height:50px;overflow:scroll;max-width:1080px;a{margin-left:1rem;margin-right:1rem;color:",";}"],function(e){return e.theme.colors.primary},function(e){return e.theme.colors.secondary}),R=l.c.div.withConfig({displayName:"Navigation__NavWrap",componentId:"sc-1f5u5u3-1"})(["padding-left:2em;display:flex;background:",";padding-right:2em;& > *{display:flex;box-shadow:inset 0 -1px 0 0px rgba(0,0,0,0.1);align-items:center;z-index:10;}"],function(e){return e.theme.colors.primary}),F=l.c.span.withConfig({displayName:"Navigation__Icons",componentId:"sc-1f5u5u3-2"})(["margin-left:auto;& > *{margin:0.3rem;}"]),H=function(){return r.a.createElement(R,null,r.a.createElement(M,null,r.a.createElement(c.Link,{to:"/"},"Home"),r.a.createElement(c.Link,{to:"/contact"},"Contact"),r.a.createElement(c.Link,{to:"/categories"},"Categories")),r.a.createElement(F,null,r.a.createElement(q,{link:"https://github.com/serializedowen"}),r.a.createElement(B,null),r.a.createElement(A,{link:Object(c.withPrefix)("/social/QRcode.jpg")})))};function U(){var e=z()(["\n  ::selection {\n    color: ",";\n    background: ",";\n  }\n  body {\n    background: ",";\n    color: ",";\n    font-display: swap;\n    @media "," {\n      font-size: 14px;\n    }\n  }\n  a {\n    color: ",";\n    text-decoration: none;\n    transition: all ",";\n  }\n  a:hover {\n    color: ",";\n  }\n  h1, h2, h3, h4 {\n    color: ",';\n  }\n  blockquote {\n    font-style: italic;\n    position: relative;\n  }\n\n  blockquote:before {\n    content: "";\n    position: absolute;\n    background: ',";\n    height: 100%;\n    width: 6px;\n    margin-left: -1.6rem;\n  }\n  label {\n    margin-bottom: .5rem;\n    color: ",";\n  }\n  input, textarea {\n    border-radius: .5rem;\n    border: none;\n    background: rgba(0, 0, 0, 0.05);\n    padding: .25rem 1rem;\n    &:focus {\n      outline: none;\n    }\n  }\n"]);return U=function(){return e},e}var W=Object(l.b)(U(),_.colors.bg,_.colors.primary,_.colors.bg,_.default,T.a.phone,_.colors.grey.dark,_.transitions.normal,_.colors.primary,_.colors.grey.dark,_.colors.primary,_.colors.grey.dark),D=l.c.footer.withConfig({displayName:"Layout__Footer",componentId:"jsdtpm-0"})(["text-align:center;padding:3rem 0;span{font-size:0.75rem;}"]),V=function(e){var t=e.children;return r.a.createElement(c.StaticQuery,{query:"1719855500",render:function(e){return r.a.createElement(l.a,{theme:_},r.a.createElement(r.a.Fragment,null,r.a.createElement(re,null),r.a.createElement(W,null),r.a.createElement(H,null),t,r.a.createElement(D,null,"© 2018 by SerializedOwen. All rights reserved. ",r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/serializedowen/serializedowen.github.io"},"GitHub Repository")," ",r.a.createElement("br",null),r.a.createElement("span",null,"Last build: ",e.site.buildTime))))},data:N})},G=V;V.propTypes={children:o.a.oneOfType([o.a.array,o.a.node]).isRequired};var J=l.c.div.withConfig({displayName:"PrevNext__Wrapper",componentId:"sc-5pxgbz-0"})(["display:flex;margin:6rem auto 0 auto;a{color:",";display:flex;align-items:center;}justify-items:center;"],function(e){return e.theme.colors.primary}),Y=l.c.div.withConfig({displayName:"PrevNext__Prev",componentId:"sc-5pxgbz-1"})(["span{text-transform:uppercase;font-size:0.8rem;color:",";}"],function(e){return e.theme.colors.grey.light}),Q=l.c.div.withConfig({displayName:"PrevNext__Next",componentId:"sc-5pxgbz-2"})(["margin-left:auto;text-align:right;span{text-transform:uppercase;font-size:0.8rem;color:",";}"],function(e){return e.theme.colors.grey.light}),K=function(e){var t=e.next,n=e.prev;return r.a.createElement(J,null,n&&r.a.createElement(Y,null,r.a.createElement("span",null,"Previous"),r.a.createElement(c.Link,{to:n.fields.slug},n.frontmatter.title)),t&&r.a.createElement(Q,null,r.a.createElement("span",null,"Next"),r.a.createElement(c.Link,{to:t.fields.slug},t.frontmatter.title)))},X=K;K.propTypes={next:o.a.object,prev:o.a.object},K.defaultProps={next:null,prev:null};n(160);var Z=l.c.div.withConfig({displayName:"SectionTitle",componentId:"bmdq58-0"})(["font-size:",";text-transform:uppercase;font-weight:bold;text-align:center;color:",";position:relative;padding-bottom:1rem;margin-bottom:4rem;&:after{content:'';height:1px;width:50px;position:absolute;bottom:0;left:50%;margin-left:-25px;background:",";}"],function(e){return e.theme.fontSize.small},function(e){return e.theme.colors.grey.dark},function(e){return e.theme.colors.grey.ultraLight}),$=n(162),ee=n.n($),te=n(159),ne=n.n(te),ae=function(e){var t,n,a,i,o=e.postNode,l=e.postPath,c=e.postSEO,m="/"===ne.a.pathPrefix?"":ne.a.pathPrefix;c?(t=o.frontmatter.title,n=o.excerpt,a=ne.a.siteBanner,i=ne.a.siteUrl+m+l):(t=ne.a.siteTitle,n=ne.a.siteDescription,a=ne.a.siteBanner);a=ne.a.siteUrl+m+a;var s=ne.a.siteUrl+ne.a.pathPrefix,p=[{"@context":"http://schema.org","@type":"WebSite","@id":s,url:s,name:t,alternateName:ne.a.siteTitleAlt?ne.a.siteTitleAlt:""}];return c&&(p=[{"@context":"http://schema.org","@type":"BlogPosting","@id":i,url:i,name:t,alternateName:ne.a.siteTitleAlt?ne.a.siteTitleAlt:"",headline:t,image:{"@type":"ImageObject",url:a},description:n,datePublished:o.frontmatter.date,dateModified:o.frontmatter.date,author:{"@type":"Person",name:ne.a.author},publisher:{"@type":"Organization",name:ne.a.author,logo:{"@type":"ImageObject",url:ne.a.siteUrl+m+ne.a.siteLogo}},isPartOf:s,mainEntityOfPage:{"@type":"WebSite","@id":s}}]),r.a.createElement(ee.a,null,r.a.createElement("html",{lang:ne.a.siteLanguage}),r.a.createElement("title",null,ne.a.siteTitle),r.a.createElement("meta",{name:"description",content:n}),r.a.createElement("meta",{name:"image",content:a}),r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(p)),r.a.createElement("meta",{property:"og:locale",content:ne.a.ogLanguage}),r.a.createElement("meta",{property:"og:site_name",content:ne.a.ogSiteName?ne.a.ogSiteName:""}),r.a.createElement("meta",{property:"og:url",content:c?i:s}),c?r.a.createElement("meta",{property:"og:type",content:"article"}):null,r.a.createElement("meta",{property:"og:title",content:t}),r.a.createElement("meta",{property:"og:description",content:n}),r.a.createElement("meta",{property:"og:image",content:a}),r.a.createElement("meta",{property:"fb:app_id",content:ne.a.siteFBAppID?ne.a.siteFBAppID:""}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:creator",content:ne.a.userTwitter?ne.a.userTwitter:""}),r.a.createElement("meta",{name:"twitter:title",content:t}),r.a.createElement("meta",{name:"twitter:url",content:ne.a.siteUrl}),r.a.createElement("meta",{name:"twitter:description",content:n}),r.a.createElement("meta",{name:"twitter:image",content:a}))},re=ae;ae.propTypes={postNode:o.a.object,postPath:o.a.string,postSEO:o.a.bool};var ie=l.c.div.withConfig({displayName:"Subline",componentId:"sc-2pjf43-0"})(["font-size:",";color:",";",";",";",";"],function(e){return e.theme.fontSize.small},function(e){return e.theme.colors.grey.light},function(e){return e.sectionTitle&&"margin-top: -3rem"},function(e){return e.sectionTitle&&"margin-bottom: 4rem"},function(e){return e.sectionTitle&&"text-align: center"}),oe=l.c.div.withConfig({displayName:"Wrapper",componentId:"sc-1v6sncg-0"})(["display:grid;grid-template-columns:1fr minmax(320px,1000px) 1fr;padding:0 1rem;"]);n.d(t,"a",function(){return h}),n.d(t,"b",function(){return y}),n.d(t,"c",function(){return w}),n.d(t,"d",function(){return G}),n.d(t,"e",function(){return X}),n.d(t,"g",function(){return Z}),n.d(t,"f",function(){return re}),n.d(t,"h",function(){return ie}),n.d(t,"i",function(){return oe})}}]);
//# sourceMappingURL=component---src-pages-contact-js-505c32a94240005e008c.js.map