(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"8QsS":function(e,t,n){var r=n("Aq8R")((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=r},"8RlI":function(e,t,n){var r=n("VhfK"),a=n("qun4"),i=n("xrLW"),o=n("VyIr");e.exports=function(e,t,n){return e=i(e),void 0===(t=n?void 0:t)?a(e)?o(e):r(e):e.match(t)||[]}},Aq8R:function(e,t,n){var r=n("ojxZ"),a=n("p+bC"),i=n("8RlI"),o=RegExp("['’]","g");e.exports=function(e){return function(t){return r(i(a(t).replace(o,"")),e,"")}}},Kvkj:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return x.a})),n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return z})),n.d(t,"h",(function(){return A})),n.d(t,"g",(function(){return j.a})),n.d(t,"i",(function(){return N})),n.d(t,"j",(function(){return _})),n.d(t,"c",(function(){return Z})),n.d(t,"f",(function(){return k}));var r=n("ZZRV"),a=n.n(r),i=n("DHRj"),o=n("Wbzz"),u=n("8QsS"),l=n.n(u),c=n("B6KL"),m=i.d.article.withConfig({displayName:"Article__Post",componentId:"bjoifw-0"})(["display:flex;flex-direction:column;margin-top:3.5rem;margin-bottom:3.5rem;"]),d=i.d.h2.withConfig({displayName:"Article__Title",componentId:"bjoifw-1"})(["position:relative;text-shadow:0 12px 30px rgba(0,0,0,0.15);margin-bottom:0.75rem;"]),f=i.d.span.withConfig({displayName:"Article__Initiale",componentId:"bjoifw-2"})(["position:absolute;font-size:7rem;transform:translate(-50%,-50%);opacity:0.08;user-select:none;z-index:-1;"]),s=i.d.p.withConfig({displayName:"Article__Excerpt",componentId:"bjoifw-3"})(["grid-column:-1 / 1;margin-top:1rem;margin-bottom:1rem;"]),p=function(e){var t=e.title,n=e.date,r=e.excerpt,i=e.slug,u=e.timeToRead,p=e.category,x=t.charAt(0);return a.a.createElement(m,null,a.a.createElement(d,null,a.a.createElement(f,null,x),a.a.createElement(o.Link,{to:i},t)),a.a.createElement(N,null,n," —"," ",a.a.createElement(c.a,{id:"readTime",values:{time:u}})," ","— In"," ",a.a.createElement(o.Link,{to:"/categories/"+l()(p)},p)),a.a.createElement(s,null,r))},x=n("5Wrh"),g=n("WE2V"),h=i.d.header.withConfig({displayName:"Header__Wrapper",componentId:"sc-1qo1wtx-0"})(["background:linear-gradient( 45deg,",","," );grid-column:1 / -1;padding:2rem 2rem 5rem 2rem;box-shadow:inset 0px -10px 30px 0px rgba(0,0,0,0.1);"],(function(e){return Object(g.a)(.1,e.theme.colors.primary)}),(function(e){return Object(g.b)(.1,e.theme.colors.primary)})),E=i.d.div.withConfig({displayName:"Header__Content",componentId:"sc-1qo1wtx-1"})(["max-width:1000px;margin:0 auto;a{color:white;&:hover{opacity:0.85;color:white;}}"]),b=function(e){var t=e.children;return a.a.createElement(h,null,a.a.createElement(E,null,t))},v=n("eis9"),y=i.d.div.withConfig({displayName:"PrevNext__Wrapper",componentId:"pdnusi-0"})(["display:flex;margin:6rem auto 0 auto;a{color:",";display:flex;align-items:center;}justify-items:center;"],(function(e){return e.theme.colors.primary})),w=i.d.div.withConfig({displayName:"PrevNext__Prev",componentId:"pdnusi-1"})(["span{text-transform:uppercase;font-size:0.8rem;color:",";}"],(function(e){return e.theme.colors.grey.light})),I=i.d.div.withConfig({displayName:"PrevNext__Next",componentId:"pdnusi-2"})(["margin-left:auto;text-align:right;span{text-transform:uppercase;font-size:0.8rem;color:",";}"],(function(e){return e.theme.colors.grey.light})),C=function(e){var t=e.next,n=e.prev;return a.a.createElement(y,null,n&&a.a.createElement(w,null,a.a.createElement("span",null,"Previous"),a.a.createElement(o.Link,{to:n.fields.slug},a.a.createElement(v.a,null,n.frontmatter.title))),t&&a.a.createElement(I,null,a.a.createElement("span",null,"Next"),a.a.createElement(o.Link,{to:t.fields.slug},a.a.createElement(v.a,null,t.frontmatter.title))))},z=C;C.defaultProps={next:null,prev:null};var A=i.d.div.withConfig({displayName:"SectionTitle",componentId:"sc-10y81l1-0"})(["font-size:",";text-transform:uppercase;font-weight:bold;text-align:center;color:",";position:relative;padding-bottom:1rem;margin-bottom:4rem;&:after{content:'';height:1px;width:50px;position:absolute;bottom:0;left:50%;margin-left:-25px;background:",";}"],(function(e){return e.theme.fontSize.small}),(function(e){return e.theme.colors.grey.dark}),(function(e){return e.theme.colors.grey.ultraLight})),j=n("EYWl"),N=i.d.div.withConfig({displayName:"Subline",componentId:"sc-1slp79m-0"})(["font-size:",";color:",";",";",";",";"],(function(e){return e.theme.fontSize.small}),(function(e){return e.theme.colors.grey.light}),(function(e){return e.sectionTitle&&"margin-top: -3rem"}),(function(e){return e.sectionTitle&&"margin-bottom: 4rem"}),(function(e){return e.sectionTitle&&"text-align: center"})),_=i.d.div.withConfig({displayName:"Wrapper",componentId:"sc-1e6dc7d-0"})(["display:grid;grid-template-columns:1fr minmax(320px,1000px) 1fr;padding:0;"]),R=(n("Q/Mu"),n("VBu3")),Z=i.d.div.withConfig({displayName:"Content",componentId:"sc-1p4jfrf-0"})(["grid-column:2;box-shadow:0 4px 120px rgba(0,0,0,0.1);border-radius:1rem;padding:2rem 4rem;background-color:",";z-index:20;margin-top:-3rem;margin-left:1rem;margin-right:1rem;@media ","{padding:3rem 3rem;}@media ","{padding:2rem 1.5rem;}"],(function(e){return e.theme.colors.bg}),R.a.tablet,R.a.phone),L=i.d.div.withConfig({displayName:"ProgressBar__Progress",componentId:"iu367a-0"})(["position:fixed;background-color:#4EA6EC;height:2px;z-index:200;width:100%;transition:0.2s;left:-100%;"]);function k(e){return a.a.createElement(L,{style:{transform:"translateX("+e.progress+"%)"}})}},RhpP:function(e,t,n){var r=n("mE2a")({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=r},VhfK:function(e,t){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(n)||[]}},VyIr:function(e,t){var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",r="["+n+"]",a="\\d+",i="[\\u2700-\\u27bf]",o="[a-z\\xdf-\\xf6\\xf8-\\xff]",u="[^\\ud800-\\udfff"+n+a+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",l="(?:\\ud83c[\\udde6-\\uddff]){2}",c="[\\ud800-\\udbff][\\udc00-\\udfff]",m="[A-Z\\xc0-\\xd6\\xd8-\\xde]",d="(?:"+o+"|"+u+")",f="(?:"+m+"|"+u+")",s="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",p="[\\ufe0e\\ufe0f]?"+s+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",l,c].join("|")+")[\\ufe0e\\ufe0f]?"+s+")*"),x="(?:"+[i,l,c].join("|")+")"+p,g=RegExp([m+"?"+o+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[r,m,"$"].join("|")+")",f+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[r,m+d,"$"].join("|")+")",m+"?"+d+"+(?:['’](?:d|ll|m|re|s|t|ve))?",m+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a,x].join("|"),"g");e.exports=function(e){return e.match(g)||[]}},kPEo:function(e,t,n){"use strict";var r=n("ZZRV"),a=n.n(r),i=n("nfZ2"),o=n.n(i),u=n("aArQ");t.a=function(e){return function(t){return a.a.createElement(u.a,Object.assign({},t,{i18nMessages:o.a}),a.a.createElement(e,t))}}},mE2a:function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},nfZ2:function(e,t){e.exports={selectLanguage:"请选择语言",greeting:"你好",categories:"分类",contact:"联系",readTime:"{time} 分钟阅读",blog:"博客",docs:"文档",mainPage:"主页",copyrights:"@SerializedOwen 2020. 保留所有权利。"}},ojxZ:function(e,t){e.exports=function(e,t,n,r){var a=-1,i=null==e?0:e.length;for(r&&i&&(n=e[++a]);++a<i;)n=t(n,e[a],a,e);return n}},"p+bC":function(e,t,n){var r=n("RhpP"),a=n("xrLW"),i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=a(e))&&e.replace(i,r).replace(o,"")}},qun4:function(e,t){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return n.test(e)}},vh1e:function(e,t,n){"use strict";n.r(t),n.d(t,"Contact",(function(){return p}));var r=n("ZZRV"),a=n.n(r),i=n("KJDX"),o=n.n(i),u=n("Wbzz"),l=n("DHRj"),c=n("Kvkj"),m=n("FgOs"),d=n.n(m),f=n("kPEo"),s=Object(l.d)(c.c).withConfig({displayName:"contactzh__Content",componentId:"sc-10dghrd-0"})(["form{p{label,input{display:block;}input{min-width:230px;margin-top:0.5rem;}textarea{resize:vertical;min-height:150px;width:100%;margin-top:0.5rem;}}}"]),p=function(){return a.a.createElement(c.j,null,a.a.createElement(o.a,{title:"Contact | "+d.a.siteTitle}),a.a.createElement(c.d,null,a.a.createElement(u.Link,{to:"/"},d.a.siteTitle)),a.a.createElement(s,null,a.a.createElement("h1",null,"联系"),a.a.createElement("form",{name:"contact-form",method:"post","data-netlify":"true","data-netlify-honeypot":"bot-field",action:"/success"},a.a.createElement("p",null,a.a.createElement("label",{htmlFor:"contact-name"},"名字",a.a.createElement("input",{name:"name",id:"contact-name",type:"text",required:!0}))),a.a.createElement("p",null,a.a.createElement("label",{htmlFor:"contact-email"},"邮箱 ",a.a.createElement("input",{name:"email",id:"contact-email",type:"email",required:!0}))),a.a.createElement("p",null,a.a.createElement("label",{htmlFor:"contact-message"},"你的消息 ",a.a.createElement("textarea",{name:"message",id:"contact-message",required:!0}))),a.a.createElement("p",null,a.a.createElement(c.b,null,"发送")),a.a.createElement("input",{type:"hidden",name:"form-name",value:"contact-form"}))))};t.default=Object(f.a)(p)}}]);
//# sourceMappingURL=component---src-pages-contact-zh-js-b980c2e3a0572b7f60d2.js.map