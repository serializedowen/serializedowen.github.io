(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"postQuery",function(){return b});var r=n(0),a=n.n(r),o=n(1),i=n.n(o),l=n(161),c=n.n(l),m=n(36),s=n(156),p=n(163),u=n(157),d=n(158),g=n.n(d),f=s.c.div.withConfig({displayName:"category__Content",componentId:"khsva9-0"})(["grid-column:2;box-shadow:0 4px 120px rgba(0,0,0,0.1);border-radius:1rem;padding:2rem 4rem;background-color:",";z-index:9000;margin-top:-3rem;@media ","{padding:3rem 3rem;}@media ","{padding:2rem 1.5rem;}"],function(e){return e.theme.colors.bg},u.a.tablet,u.a.phone),h=function(e){var t=e.pageContext.category,n=e.data.allMarkdownRemark,r=n.edges,o=n.totalCount,i=o+" post"+(1===o?"":"s")+' tagged with "'+t+'"';return a.a.createElement(p.d,null,a.a.createElement(p.i,null,a.a.createElement(c.a,{title:t+" | "+g.a.siteTitle}),a.a.createElement(p.c,null,a.a.createElement(m.Link,{to:"/"},g.a.siteTitle)),a.a.createElement(f,null,a.a.createElement(p.g,null,"Category – ",t),a.a.createElement(p.h,{sectionTitle:!0},i," (See ",a.a.createElement(m.Link,{to:"/categories"},"all categories"),")"),r.map(function(e){return a.a.createElement(p.a,{title:e.node.frontmatter.title,date:e.node.frontmatter.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead,slug:e.node.fields.slug,category:e.node.frontmatter.category,key:e.node.fields.slug})}))))};t.default=h,h.propTypes={pageContext:i.a.shape({category:i.a.string.isRequired}).isRequired,data:i.a.shape({allMarkdownRemark:i.a.shape({edges:i.a.array.isRequired,totalCount:i.a.number.isRequired})}).isRequired};var b="2282355105"},157:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={tablet:"(max-width: "+"1200px"+")",phone:"(max-width: "+"600px"+")"}},158:function(e,t){e.exports={pathPrefix:"/",siteTitle:"Minimal Blog",siteTitleAlt:"Minimal Blog - Gatsby Starter",siteUrl:"https://minimal-blog.netlify.com",siteLanguage:"en",siteBanner:"/social/banner.jpg",favicon:"src/favicon.png",siteDescription:"Minimal Blog with big typography",author:"LekoArts",siteLogo:"/social/logo.png",userTwitter:"@minimal",ogSiteName:"minimal",ogLanguage:"en_US",themeColor:"#3498DB",backgroundColor:"#2b2e3c",headerFontFamily:"Bitter",bodyFontFamily:"Open Sans",baseFontSize:"18px"}},162:function(e){e.exports={data:{site:{buildTime:"21.12.2018"}}}},163:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1),i=n.n(o),l=n(156),c=n(36),m=n(164),s=n.n(m),p=l.c.article.withConfig({displayName:"Article__Post",componentId:"sc-1p7dbao-0"})(["display:flex;flex-direction:column;margin-top:3.5rem;margin-bottom:3.5rem;"]),u=l.c.h2.withConfig({displayName:"Article__Title",componentId:"sc-1p7dbao-1"})(["position:relative;text-shadow:0 12px 30px rgba(0,0,0,0.15);margin-bottom:0.75rem;"]),d=l.c.span.withConfig({displayName:"Article__Initiale",componentId:"sc-1p7dbao-2"})(["position:absolute;font-size:7rem;transform:translate(-50%,-50%);opacity:0.08;user-select:none;z-index:-1;"]),g=l.c.p.withConfig({displayName:"Article__Excerpt",componentId:"sc-1p7dbao-3"})(["grid-column:-1 / 1;margin-top:1rem;margin-bottom:1rem;"]),f=function(e){var t=e.title,n=e.date,r=e.excerpt,o=e.slug,i=e.timeToRead,l=e.category,m=t.charAt(0);return a.a.createElement(p,null,a.a.createElement(u,null,a.a.createElement(d,null,m),a.a.createElement(c.Link,{to:o},t)),a.a.createElement(H,null,n," — ",i," Min Read — In"," ",a.a.createElement(c.Link,{to:"/categories/"+s()(l)},l)),a.a.createElement(g,null,r))},h=f;f.propTypes={title:i.a.string.isRequired,date:i.a.string.isRequired,excerpt:i.a.string.isRequired,slug:i.a.string.isRequired,timeToRead:i.a.number.isRequired,category:i.a.string.isRequired};n(165);var b=n(160),y=l.c.button.withConfig({displayName:"Button",componentId:"f0k30h-0"})(["background:",";border:none;display:inline-flex;align-items:center;border-radius:",";font-size:",";color:white;padding:",";transition:all ",";box-shadow:0 4px 6px rgba(50,50,93,0.11),0 1px 3px rgba(0,0,0,0.08);&:hover{background:",";cursor:pointer;transform:translateY(-2px);}&:focus{outline:none;}svg{width:20px;height:20px;margin-right:0.75rem;fill:white;}"],function(e){return e.theme.colors.primary},function(e){return e.big?"1.5rem":"1rem"},function(e){return e.big?"1.2rem":"1rem"},function(e){return e.big?"0.35rem 1.6rem":"0.25rem 1.5rem"},function(e){return e.theme.transitions.normal},function(e){return Object(b.b)(.05,e.theme.colors.primary)}),x=l.c.header.withConfig({displayName:"Header__Wrapper",componentId:"sc-1uevezl-0"})(["background:linear-gradient( 45deg,",","," );grid-column:1 / -1;margin-left:-1rem;margin-right:-1rem;padding:2rem 2rem 5rem 2rem;box-shadow:inset 0px -10px 30px 0px rgba(0,0,0,0.1);"],function(e){return Object(b.a)(.1,e.theme.colors.primary)},function(e){return Object(b.b)(.1,e.theme.colors.primary)}),E=l.c.div.withConfig({displayName:"Header__Content",componentId:"sc-1uevezl-1"})(["max-width:1000px;margin:0 auto;a{color:white;&:hover{opacity:0.85;color:white;}}"]),w=function(e){var t=e.children;return a.a.createElement(x,null,a.a.createElement(E,null,t))},v=w;w.propTypes={children:i.a.oneOfType([i.a.array,i.a.node]).isRequired};var k=n(166),T=n.n(k),N=n(162),_={colors:{primary:"#d02e77",bg:"white",grey:{dark:"rgba(0, 0, 0, 0.9)",default:"rgba(0, 0, 0, 0.7)",light:"rgba(0, 0, 0, 0.5)",ultraLight:"rgba(0, 0, 0, 0.25)"}},transitions:{normal:"0.5s"},fontSize:{small:"0.9rem"}},C=n(157);function z(){var e=T()(["\n  ::selection {\n    color: ",";\n    background: ",";\n  }\n  body {\n    background: ",";\n    color: ",";\n    font-display: swap;\n    @media "," {\n      font-size: 14px;\n    }\n  }\n  a {\n    color: ",";\n    text-decoration: none;\n    transition: all ",";\n  }\n  a:hover {\n    color: ",";\n  }\n  h1, h2, h3, h4 {\n    color: ",';\n  }\n  blockquote {\n    font-style: italic;\n    position: relative;\n  }\n\n  blockquote:before {\n    content: "";\n    position: absolute;\n    background: ',";\n    height: 100%;\n    width: 6px;\n    margin-left: -1.6rem;\n  }\n  label {\n    margin-bottom: .5rem;\n    color: ",";\n  }\n  input, textarea {\n    border-radius: .5rem;\n    border: none;\n    background: rgba(0, 0, 0, 0.05);\n    padding: .25rem 1rem;\n    &:focus {\n      outline: none;\n    }\n  }\n"]);return z=function(){return e},e}var I=Object(l.b)(z(),_.colors.bg,_.colors.primary,_.colors.bg,_.default,C.a.phone,_.colors.grey.dark,_.transitions.normal,_.colors.primary,_.colors.grey.dark,_.colors.primary,_.colors.grey.dark),R=l.c.footer.withConfig({displayName:"Layout__Footer",componentId:"sc-6xzn7e-0"})(["text-align:center;padding:3rem 0;span{font-size:0.75rem;}"]),S=function(e){var t=e.children;return a.a.createElement(c.StaticQuery,{query:"1719855500",render:function(e){return a.a.createElement(l.a,{theme:_},a.a.createElement(a.a.Fragment,null,a.a.createElement(J,null),a.a.createElement(I,null),t,a.a.createElement(R,null,"© 2018 by John Doe. All rights reserved. ",a.a.createElement("br",null),a.a.createElement("a",{href:"https://github.com/LekoArts/gatsby-starter-minimal-blog"},"GitHub Repository")," ",a.a.createElement("br",null),a.a.createElement("span",null,"Last build: ",e.site.buildTime))))},data:N})},L=S;S.propTypes={children:i.a.oneOfType([i.a.array,i.a.node]).isRequired};var P=l.c.div.withConfig({displayName:"PrevNext__Wrapper",componentId:"sc-5pxgbz-0"})(["display:flex;margin:6rem auto 0 auto;a{color:",";display:flex;align-items:center;}justify-items:center;"],function(e){return e.theme.colors.primary}),q=l.c.div.withConfig({displayName:"PrevNext__Prev",componentId:"sc-5pxgbz-1"})(["span{text-transform:uppercase;font-size:0.8rem;color:",";}"],function(e){return e.theme.colors.grey.light}),A=l.c.div.withConfig({displayName:"PrevNext__Next",componentId:"sc-5pxgbz-2"})(["margin-left:auto;text-align:right;span{text-transform:uppercase;font-size:0.8rem;color:",";}"],function(e){return e.theme.colors.grey.light}),O=function(e){var t=e.next,n=e.prev;return a.a.createElement(P,null,n&&a.a.createElement(q,null,a.a.createElement("span",null,"Previous"),a.a.createElement(c.Link,{to:n.fields.slug},n.frontmatter.title)),t&&a.a.createElement(A,null,a.a.createElement("span",null,"Next"),a.a.createElement(c.Link,{to:t.fields.slug},t.frontmatter.title)))},j=O;O.propTypes={next:i.a.object,prev:i.a.object},O.defaultProps={next:null,prev:null};n(159);var B=l.c.div.withConfig({displayName:"SectionTitle",componentId:"bmdq58-0"})(["font-size:",";text-transform:uppercase;font-weight:bold;text-align:center;color:",";position:relative;padding-bottom:1rem;margin-bottom:4rem;&:after{content:'';height:1px;width:50px;position:absolute;bottom:0;left:50%;margin-left:-25px;background:",";}"],function(e){return e.theme.fontSize.small},function(e){return e.theme.colors.grey.dark},function(e){return e.theme.colors.grey.ultraLight}),F=n(161),M=n.n(F),U=n(158),D=n.n(U),W=function(e){var t,n,r,o,i=e.postNode,l=e.postPath,c=e.postSEO,m="/"===D.a.pathPrefix?"":D.a.pathPrefix;c?(t=i.frontmatter.title,n=i.excerpt,r=D.a.siteBanner,o=D.a.siteUrl+m+l):(t=D.a.siteTitle,n=D.a.siteDescription,r=D.a.siteBanner);r=D.a.siteUrl+m+r;var s=D.a.siteUrl+D.a.pathPrefix,p=[{"@context":"http://schema.org","@type":"WebSite","@id":s,url:s,name:t,alternateName:D.a.siteTitleAlt?D.a.siteTitleAlt:""}];return c&&(p=[{"@context":"http://schema.org","@type":"BlogPosting","@id":o,url:o,name:t,alternateName:D.a.siteTitleAlt?D.a.siteTitleAlt:"",headline:t,image:{"@type":"ImageObject",url:r},description:n,datePublished:i.frontmatter.date,dateModified:i.frontmatter.date,author:{"@type":"Person",name:D.a.author},publisher:{"@type":"Organization",name:D.a.author,logo:{"@type":"ImageObject",url:D.a.siteUrl+m+D.a.siteLogo}},isPartOf:s,mainEntityOfPage:{"@type":"WebSite","@id":s}}]),a.a.createElement(M.a,null,a.a.createElement("html",{lang:D.a.siteLanguage}),a.a.createElement("title",null,D.a.siteTitle),a.a.createElement("meta",{name:"description",content:n}),a.a.createElement("meta",{name:"image",content:r}),a.a.createElement("script",{type:"application/ld+json"},JSON.stringify(p)),a.a.createElement("meta",{property:"og:locale",content:D.a.ogLanguage}),a.a.createElement("meta",{property:"og:site_name",content:D.a.ogSiteName?D.a.ogSiteName:""}),a.a.createElement("meta",{property:"og:url",content:c?o:s}),c?a.a.createElement("meta",{property:"og:type",content:"article"}):null,a.a.createElement("meta",{property:"og:title",content:t}),a.a.createElement("meta",{property:"og:description",content:n}),a.a.createElement("meta",{property:"og:image",content:r}),a.a.createElement("meta",{property:"fb:app_id",content:D.a.siteFBAppID?D.a.siteFBAppID:""}),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.a.createElement("meta",{name:"twitter:creator",content:D.a.userTwitter?D.a.userTwitter:""}),a.a.createElement("meta",{name:"twitter:title",content:t}),a.a.createElement("meta",{name:"twitter:url",content:D.a.siteUrl}),a.a.createElement("meta",{name:"twitter:description",content:n}),a.a.createElement("meta",{name:"twitter:image",content:r}))},J=W;W.propTypes={postNode:i.a.object,postPath:i.a.string,postSEO:i.a.bool};var H=l.c.div.withConfig({displayName:"Subline",componentId:"sc-2pjf43-0"})(["font-size:",";color:",";",";",";",";"],function(e){return e.theme.fontSize.small},function(e){return e.theme.colors.grey.light},function(e){return e.sectionTitle&&"margin-top: -3rem"},function(e){return e.sectionTitle&&"margin-bottom: 4rem"},function(e){return e.sectionTitle&&"text-align: center"}),G=l.c.div.withConfig({displayName:"Wrapper",componentId:"sc-1v6sncg-0"})(["display:grid;grid-template-columns:1fr minmax(320px,1000px) 1fr;padding:0 1rem;"]);n.d(t,"a",function(){return h}),n.d(t,"b",function(){return y}),n.d(t,"c",function(){return v}),n.d(t,"d",function(){return L}),n.d(t,"e",function(){return j}),n.d(t,"g",function(){return B}),n.d(t,"f",function(){return J}),n.d(t,"h",function(){return H}),n.d(t,"i",function(){return G})}}]);
//# sourceMappingURL=component---src-templates-category-js-abc2e4d95a5cec69070d.js.map