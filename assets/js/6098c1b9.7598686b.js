"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[365],{7682:(e,n,t)=>{t.d(n,{A:()=>j});t(6540);var i=t(4164),s=t(5210),r=t(1090),c=t(8618),l=t(6297),d=t(1969);const o={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var a=t(4848);function h(e){let{href:n,children:t}=e;return(0,a.jsx)(r.A,{href:n,className:(0,i.A)("card padding--lg",o.cardContainer),children:t})}function u(e){let{href:n,icon:t,title:s,description:r}=e;return(0,a.jsxs)(h,{href:n,children:[(0,a.jsxs)(d.A,{as:"h2",className:(0,i.A)("text--truncate",o.cardTitle),title:s,children:[t," ",s]}),r&&(0,a.jsx)("p",{className:(0,i.A)("text--truncate",o.cardDescription),title:r,children:r})]})}function m(e){let{item:n}=e;const t=(0,s.Nr)(n);return t?(0,a.jsx)(u,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??(0,l.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function x(e){let{item:n}=e;const t=(0,c.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,s.cC)(n.docId??void 0);return(0,a.jsx)(u,{href:n.href,icon:t,title:n.label,description:n.description??i?.description})}function p(e){let{item:n}=e;switch(n.type){case"link":return(0,a.jsx)(x,{item:n});case"category":return(0,a.jsx)(m,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function f(e){let{className:n}=e;const t=(0,s.$S)();return(0,a.jsx)(j,{items:t.items,className:n})}function j(e){const{items:n,className:t}=e;if(!n)return(0,a.jsx)(f,{...e});const r=(0,s.d1)(n);return(0,a.jsx)("section",{className:(0,i.A)("row",t),children:r.map(((e,n)=>(0,a.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,a.jsx)(p,{item:e})},n)))})}},7703:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>h});var i=t(4848),s=t(8453),r=t(7682),c=t(5210);const l={sidebarDepth:0},d="\u5e38\u89c1\u95ee\u9898",o={id:"faq/README",title:"\u5e38\u89c1\u95ee\u9898",description:"\u8fd9\u91cc\u603b\u7ed3\u4e86\u4f7f\u7528\u65f6\u7ecf\u5e38\u51fa\u73b0\u7684\u95ee\u9898",source:"@site/docs/faq/README.md",sourceDirName:"faq",slug:"/faq/",permalink:"/faq/",draft:!1,unlisted:!1,editUrl:"https://github.com/vlssu/docs-natgo/tree/master/docs/faq/README.md",tags:[],version:"current",lastUpdatedBy:"\u98d2\u723d\u5e08\u53d4",lastUpdatedAt:1708323959,formattedLastUpdatedAt:"2024\u5e742\u670819\u65e5",frontMatter:{sidebarDepth:0},sidebar:"tutorialSidebar",previous:{title:"Minecraft\u7c7b\u578b",permalink:"/tutorial/minecraft"},next:{title:"\u6b63\u5e38\u5173\u95ed\u6570\u636e\u6267\u884c\u4fdd\u62a4",permalink:"/faq/data_execution_prevention"}},a={},h=[{value:"\u6211\u7684\u4e16\u754c\u7aef\u53e3\u591a\u5c11\uff1f",id:"\u6211\u7684\u4e16\u754c\u7aef\u53e3\u591a\u5c11",level:2},{value:"\u6620\u5c04\u53ef\u4ee5\u7528\u5728\u4ec0\u4e48\u73af\u5883\u4e0b\uff1f",id:"\u6620\u5c04\u53ef\u4ee5\u7528\u5728\u4ec0\u4e48\u73af\u5883\u4e0b",level:2},{value:"\u5565\u65f6\u5019\u66f4\u65b0Linux\u7248\u672c",id:"\u5565\u65f6\u5019\u66f4\u65b0linux\u7248\u672c",level:2},{value:"5\u5143\u80fd\u7528\u591a\u4e45\uff1f",id:"5\u5143\u80fd\u7528\u591a\u4e45",level:2},{value:"\u63d0\u793a\u53d1\u9001\u9a8c\u8bc1\u7801\u5931\u8d25\u600e\u4e48\u529e\uff1f",id:"\u63d0\u793a\u53d1\u9001\u9a8c\u8bc1\u7801\u5931\u8d25\u600e\u4e48\u529e",level:2},{value:"\u63d0\u793aNatGo \u5ba2\u6237\u7aef \u5df2\u505c\u6b62\u5de5\u4f5c \u600e\u4e48\u529e\uff1f",id:"\u63d0\u793anatgo-\u5ba2\u6237\u7aef-\u5df2\u505c\u6b62\u5de5\u4f5c-\u600e\u4e48\u529e",level:2},{value:"\u6211\u7684\u4e16\u754c\u63d0\u793a\u767b\u5f55\u5931\u8d25\uff1a\u65e0\u6548\u7684\u4f1a\u8bdd\u600e\u4e48\u529e\uff1f",id:"\u6211\u7684\u4e16\u754c\u63d0\u793a\u767b\u5f55\u5931\u8d25\u65e0\u6548\u7684\u4f1a\u8bdd\u600e\u4e48\u529e",level:2},{value:"\u600e\u4e48\u6c2a\u91d1\uff1f \u53ef\u4ee5\u8054\u7cfb\u5ba2\u670d\u6216\u901a\u8fc7\u6dd8\u5b9d\u94fe\u63a5\u8d2d\u4e70",id:"\u600e\u4e48\u6c2a\u91d1-\u53ef\u4ee5\u8054\u7cfb\u5ba2\u670d\u6216\u901a\u8fc7\u6dd8\u5b9d\u94fe\u63a5\u8d2d\u4e70",level:2},{value:"\u6211\u5e94\u8be5\u9009\u90a3\u4e2a\u8282\u70b9\u66f4\u597d?",id:"\u6211\u5e94\u8be5\u9009\u90a3\u4e2a\u8282\u70b9\u66f4\u597d",level:2},{value:"Minecraft\u663e\u793a\u670d\u52a1\u5668\u7248\u672c\u5df2\u8fc7\u671f",id:"minecraft\u663e\u793a\u670d\u52a1\u5668\u7248\u672c\u5df2\u8fc7\u671f",level:2}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",h1:"h1",h2:"h2",hr:"hr",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u5e38\u89c1\u95ee\u9898",children:"\u5e38\u89c1\u95ee\u9898"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u91cc\u603b\u7ed3\u4e86\u4f7f\u7528\u65f6\u7ecf\u5e38\u51fa\u73b0\u7684\u95ee\u9898"}),"\n","\n","\n",(0,i.jsx)(r.A,{items:(0,c.$S)().items}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"\u6211\u7684\u4e16\u754c\u7aef\u53e3\u591a\u5c11",children:"\u6211\u7684\u4e16\u754c\u7aef\u53e3\u591a\u5c11\uff1f"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["JAVA\u7248\u9ed8\u8ba4\u7aef\u53e325565",(0,i.jsx)(n.br,{}),"\n","PE/BE/\u57fa\u5ca9\u7248\u9ed8\u8ba4\u7aef\u53e319132"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6620\u5c04\u53ef\u4ee5\u7528\u5728\u4ec0\u4e48\u73af\u5883\u4e0b",children:"\u6620\u5c04\u53ef\u4ee5\u7528\u5728\u4ec0\u4e48\u73af\u5883\u4e0b\uff1f"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u57fa\u4e8eTCP\u3001UDP\u534f\u8bae\u4ee5\u53caWindows\u73af\u5883\u4e0b"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5565\u65f6\u5019\u66f4\u65b0linux\u7248\u672c",children:"\u5565\u65f6\u5019\u66f4\u65b0Linux\u7248\u672c"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u76ee\u524d\u5df2\u6709\u8ba1\u5212\uff0c\u5c3d\u60c5\u671f\u5f85"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"5\u5143\u80fd\u7528\u591a\u4e45",children:"5\u5143\u80fd\u7528\u591a\u4e45\uff1f"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u4e24\u4e2a\u670b\u53cb\u8054\u673a\u53ef\u4ee5\u7528\u8fd120\u5929 \u81f3\u4e8e\u51c6\u786e\u7528\u591a\u4e45,\u56e0\u4eba\u800c\u5f02"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u63d0\u793a\u53d1\u9001\u9a8c\u8bc1\u7801\u5931\u8d25\u600e\u4e48\u529e",children:"\u63d0\u793a\u53d1\u9001\u9a8c\u8bc1\u7801\u5931\u8d25\u600e\u4e48\u529e\uff1f"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u91cd\u8bd5\u5373\u53ef"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u63d0\u793anatgo-\u5ba2\u6237\u7aef-\u5df2\u505c\u6b62\u5de5\u4f5c-\u600e\u4e48\u529e",children:"\u63d0\u793aNatGo \u5ba2\u6237\u7aef \u5df2\u505c\u6b62\u5de5\u4f5c \u600e\u4e48\u529e\uff1f"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u53ef\u4ee5\u53c2\u8003",(0,i.jsx)(n.a,{href:"https://zhidao.baidu.com/question/1366465077364459979.html",children:"\u3010\u6b64\u94fe\u63a5\u3011"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6211\u7684\u4e16\u754c\u63d0\u793a\u767b\u5f55\u5931\u8d25\u65e0\u6548\u7684\u4f1a\u8bdd\u600e\u4e48\u529e",children:"\u6211\u7684\u4e16\u754c\u63d0\u793a\u767b\u5f55\u5931\u8d25\uff1a\u65e0\u6548\u7684\u4f1a\u8bdd\u600e\u4e48\u529e\uff1f"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u56e0\u4e3a\u670d\u52a1\u7aef\u90a3\u8fb9\u5f00\u542f\u4e86\u6b63\u7248\u9a8c\u8bc1\u3001\u6216\u8005\u662f\u8054\u673a\u65f6\u7528\u6237\u672a\u4f7f\u7528\u6b63\u7248\u7528\u6237\u767b\u9646\u6e38\u620f\uff0c\u89e3\u51b3\u65b9\u6cd5:1\u3001\u670d\u52a1\u7aef\u5173\u95ed\u6b63\u7248\u9a8c\u8bc1\u529f\u80fd 2\u3001\u5982\u679c\u662f\u8054\u673a\u3001\u8bf7\u786e\u4fdd\u8054\u673a\u7684\u7528\u6237\u662f\u6b63\u7248\u7528\u6237\u6216\u4f7f\u7528\u4e86\u5916\u7f6e\u767b\u5f55\u529f\u80fd \u4e5f\u53ef\u4ee5\u5b89\u88c5\u76f8\u5173\u8054\u673amod\u5173\u95ed\u9a8c\u8bc1\u529f\u80fd"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"\u8fd9\u91cc\u968f\u4fbf\u5199\u4ec0\u4e48\uff0c\u53ef\u4ee5\u76f4\u63a5\u5199\u6b65\u9aa4\u540d",src:t(9577).A+"",width:"350",height:"118"})}),"\n",(0,i.jsx)(n.h2,{id:"\u600e\u4e48\u6c2a\u91d1-\u53ef\u4ee5\u8054\u7cfb\u5ba2\u670d\u6216\u901a\u8fc7\u6dd8\u5b9d\u94fe\u63a5\u8d2d\u4e70",children:"\u600e\u4e48\u6c2a\u91d1\uff1f \u53ef\u4ee5\u8054\u7cfb\u5ba2\u670d\u6216\u901a\u8fc7\u6dd8\u5b9d\u94fe\u63a5\u8d2d\u4e70"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u53ef\u4ee5\u8054\u7cfb\u5ba2\u670d",(0,i.jsx)(n.a,{href:"http://wpa.qq.com/msgrd?v=3&uin=672183160&site=qq&menu=yes",children:"\u3010\u5ba2\u670d\u5c0f\u8d85\u3011"}),(0,i.jsx)(n.a,{href:"http://wpa.qq.com/msgrd?v=3&uin=1666633881&site=qq&menu=yes",children:"\u3010\u5ba2\u670d\u5c0f\u4f1f\u3011"})," \u6216\u8005\u901a\u8fc7\u6dd8\u5b9d\u8fde\u63a5",(0,i.jsx)(n.a,{href:"https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-22409864018.2.67477092FAdx3v&id=611262672455",children:"\u3010\u6dd8\u5b9d\u5e97\u94fa\u3011"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6211\u5e94\u8be5\u9009\u90a3\u4e2a\u8282\u70b9\u66f4\u597d",children:"\u6211\u5e94\u8be5\u9009\u90a3\u4e2a\u8282\u70b9\u66f4\u597d?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u6839\u636e\u60a8\u7684\u5730\u7406\u4f4d\u7f6e\u51b3\u5b9a \u5237\u65b0\u8282\u70b9\u540e\u9009\u62e9\u5ef6\u8fdf\u6700\u4f4e\u7684\u8282\u70b9"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"minecraft\u663e\u793a\u670d\u52a1\u5668\u7248\u672c\u5df2\u8fc7\u671f",children:"Minecraft\u663e\u793a\u670d\u52a1\u5668\u7248\u672c\u5df2\u8fc7\u671f"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u670d\u52a1\u5668\u521a\u5f00\u4f1a\u8fd9\u6837,\u7b49\u4e00\u4f1a\u5c31\u597d\u4e86"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["\u5176\u4ed6\u95ee\u9898\u53ef\u4ee5\u52a0\u5165Q\u7fa4\u63d0\u95ee,\u89e3\u51b3\u7684\u95ee\u9898\u4f1a\u88ab\u66f4\u65b0\u5230\u8fd9\u91cc Q\u7fa4:1019593660 \u5ba2\u670d:",(0,i.jsx)(n.a,{href:"http://wpa.qq.com/msgrd?v=3&uin=672183160&site=qq&menu=yes",children:"\u3010\u5ba2\u670d\u5c0f\u8d85\u3011"}),(0,i.jsx)(n.a,{href:"http://wpa.qq.com/msgrd?v=3&uin=1666633881&site=qq&menu=yes",children:"\u3010\u5ba2\u670d\u5c0f\u4f1f\u3011"})]})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},9577:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/faq-1-ab208a51fbbf837ddfd794e15fb7954b.png"},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var i=t(6540);const s={},r=i.createContext(s);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);