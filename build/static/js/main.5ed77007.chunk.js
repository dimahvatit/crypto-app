(this["webpackJsonpcrypto-app"]=this["webpackJsonpcrypto-app"]||[]).push([[0],{229:function(e,c,t){},303:function(e,c,t){},328:function(e,c,t){},368:function(e,c,t){},369:function(e,c,t){},370:function(e,c,t){},371:function(e,c,t){},377:function(e,c,t){"use strict";t.r(c);var a=t(0),n=t.n(a),s=t(31),i=t(32),l=t(37),r=t(381),o=t(383),j=t(392),d=t(6),h=t(387),b=t(219),u=t(391),x=t(393),O=t(394),m=t(395),p=t(396),v=t(397),g=t.p+"static/media/cryptocurrency-logo.c652390c.png",f=(t(229),t(2)),N=function(){var e=Object(a.useState)(!0),c=Object(d.a)(e,2),t=c[0],n=c[1],s=Object(a.useState)(null),i=Object(d.a)(s,2),r=i[0],j=i[1];return Object(a.useEffect)((function(){var e=function(){return j(window.innerWidth)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),Object(a.useEffect)((function(){n(!(r<1e3))}),[r]),Object(f.jsxs)("div",{className:"nav-container",children:[Object(f.jsxs)("div",{className:"logo-container",children:[Object(f.jsx)(l.b,{to:"/",children:Object(f.jsx)(h.a,{src:g,size:60})}),Object(f.jsx)(o.a.Title,{level:2,className:"logo",children:Object(f.jsx)(l.b,{to:"/",children:"crApp"})}),Object(f.jsx)(b.a,{className:"menu-control-container",onClick:function(){return n((function(e){return!e}))},children:Object(f.jsx)(x.a,{})})]}),t&&Object(f.jsxs)(u.a,{theme:"dark",children:[Object(f.jsx)(u.a.Item,{icon:Object(f.jsx)(O.a,{className:"nav-menu-icon"}),children:Object(f.jsx)(l.b,{to:"/",children:"Home"})},"1"),Object(f.jsx)(u.a.Item,{icon:Object(f.jsx)(m.a,{className:"nav-menu-icon"}),children:Object(f.jsx)(l.b,{to:"/cryptocurrencies",children:"Cryptocurrencies"})},"2"),Object(f.jsx)(u.a.Item,{icon:Object(f.jsx)(p.a,{className:"nav-menu-icon"}),children:Object(f.jsx)(l.b,{to:"/exchanges",children:"Exchanges"})},"3"),Object(f.jsx)(u.a.Item,{icon:Object(f.jsx)(v.a,{className:"nav-menu-icon"}),children:Object(f.jsx)(l.b,{to:"/news",children:"News"})},"4")]})]})},y=t(39),w=t.n(y),C=t(100),k=t(59),S=t(384),T=t(134),P=t(46),A={"x-rapidapi-host":"coinranking1.p.rapidapi.com","x-rapidapi-key":"cc8ea52f9dmsh349b88ea4441c09p10dde3jsn7c3df1e6a8db","x-access-token":"i-have-to-migrate-to-v2"},E=function(e){return{url:e,headers:A}},M=Object(T.a)({reducerPath:"cryptoApi",baseQuery:Object(P.d)({baseUrl:"https://coinranking1.p.rapidapi.com"}),endpoints:function(e){return{getCoins:e.query({query:function(e){return E("/coins?limit=".concat(e))}}),getCryptoDetails:e.query({query:function(e){return E("/coin/".concat(e))}}),getCryptoHistory:e.query({query:function(e){var c=e.coinId,t=e.timePeriod;return E("/coin/".concat(c,"/history/").concat(t))}}),getExchanges:e.query({query:function(){return E("/exchanges")}})}}}),q=M.useGetCoinsQuery,D=M.useGetCryptoDetailsQuery,F=M.useGetCryptoHistoryQuery,L=M.useGetExchangesQuery,U=(t(303),o.a.Title);var z=function(){var e,c=q(10),t=c.data,a=c.isFetching,n=null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.stats;return a?Object(f.jsx)(V,{}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(U,{level:2,className:"heading",children:"Global Crypto Stats"}),Object(f.jsxs)(C.a,{gutter:[0,16],children:[Object(f.jsx)(k.a,{span:12,children:Object(f.jsx)(S.a,{title:"Total Cryptocurrencies",value:n.total})}),Object(f.jsx)(k.a,{span:12,children:Object(f.jsx)(S.a,{title:"Total Exchanges",value:Object(y.millify)(n.totalExchanges,{precision:1})})}),Object(f.jsx)(k.a,{span:12,children:Object(f.jsx)(S.a,{title:"Total Market Cap",value:Object(y.millify)(n.totalMarketCap,{precision:1})})}),Object(f.jsx)(k.a,{span:12,children:Object(f.jsx)(S.a,{title:"Total 24h Volume",value:Object(y.millify)(n.total24hVolume,{precision:1})})}),Object(f.jsx)(k.a,{span:12,children:Object(f.jsx)(S.a,{title:"Total Markets",value:Object(y.millify)(n.totalMarkets,{precision:1})})})]}),Object(f.jsxs)("div",{className:"home-heading-container",children:[Object(f.jsx)(U,{level:2,className:"home-title",children:"Top 10 Cryptocurrencies in the world"}),Object(f.jsx)(U,{level:3,className:"show-more",children:Object(f.jsx)(l.b,{to:"/cryptocurrencies",children:"Show more"})})]}),Object(f.jsx)(Oe,{simplified:!0}),Object(f.jsxs)("div",{className:"home-heading-container",children:[Object(f.jsx)(U,{level:2,className:"home-title",children:"Latest Crypto News"}),Object(f.jsx)(U,{level:3,className:"show-more",children:Object(f.jsx)(l.b,{to:"/news",children:"Show more"})})]}),Object(f.jsx)(ke,{simplified:!0})]})},I=t(91),$=t(388),H=t(380),V=function(){return Object(f.jsx)("div",{className:"loader",children:Object(f.jsx)(H.a,{tip:"Loading...",size:"large"})})},G=(t(328),$.a.Panel),Q=o.a.Text,W=function(){var e,c=L(),t=c.data;if(c.isFetching)return Object(f.jsx)(V,{});var a=null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.exchanges;return Object(f.jsxs)("div",{className:"exchanges",children:[Object(f.jsxs)(C.a,{children:[Object(f.jsx)(k.a,{className:"exchanges-col-heading",span:6,children:"Exchanges"}),Object(f.jsx)(k.a,{className:"exchanges-col-heading col-tex-center",span:6,children:"24h Trade Volume"}),Object(f.jsx)(k.a,{className:"exchanges-col-heading col-tex-center",span:6,children:"Markets"}),Object(f.jsx)(k.a,{className:"exchanges-col-heading col-tex-center",span:6,children:"Market Share"})]}),null===a||void 0===a?void 0:a.map((function(e,c){return Object(f.jsx)($.a,{accordion:!0,children:Object(f.jsx)(G,{showArrow:!1,header:Object(f.jsxs)(C.a,{className:"exchanges-row",align:"middle",children:[Object(f.jsx)(k.a,{className:"col-exchange-container",span:6,children:Object(f.jsxs)(j.b,{size:"middle",children:[Object(f.jsxs)(Q,{children:[c+1,". "]}),Object(f.jsx)(h.a,{size:{xs:24,sm:32,md:40,lg:64,xl:80},src:null===e||void 0===e?void 0:e.iconUrl}),Object(f.jsx)(Q,{className:"exchange-name",children:null===e||void 0===e?void 0:e.name})]})}),Object(f.jsx)(k.a,{className:"col-tex-center",span:6,children:w()(null===e||void 0===e?void 0:e.volume,{precision:1})}),Object(f.jsx)(k.a,{className:"col-tex-center",span:6,children:null===e||void 0===e?void 0:e.numberOfMarkets}),Object(f.jsx)(k.a,{className:"col-tex-center",span:6,children:w()(null===e||void 0===e?void 0:e.marketShare,{precision:1})})]}),children:(null===e||void 0===e?void 0:e.description)&&Object(I.a)(null===e||void 0===e?void 0:e.description)},e.uuid)})}))]})},B=t(386),J=t(389),R=t(382),_=t(403),Z=t(404),K=t(390),X=t(385),Y=t(220),ee=o.a.Title,ce=function(e){for(var c,t=e.coinHistory,a=e.currentPrice,n=e.coinName,s=[],i=[],l=0;l<(null===t||void 0===t||null===(r=t.data)||void 0===r||null===(o=r.history)||void 0===o?void 0:o.length);l++){var r,o,j,d;s.push(null===t||void 0===t||null===(j=t.data)||void 0===j?void 0:j.history[l].price),i.push(new Date(null===t||void 0===t||null===(d=t.data)||void 0===d?void 0:d.history[l].timestamp).toLocaleDateString())}var h={labels:i,datasets:[{label:"Price in USD",data:s,fill:!1,backgroundColor:"#0071bd",borderColor:"#0071bd"}]};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(C.a,{className:"chart-header",children:[Object(f.jsxs)(ee,{level:2,className:"chart-title",children:[n," Price Chart"]}),Object(f.jsxs)(k.a,{className:"price-container",children:[Object(f.jsxs)(ee,{level:5,className:"price-change",children:["Price change: ",null===t||void 0===t||null===(c=t.data)||void 0===c?void 0:c.change,"%"]}),Object(f.jsxs)(ee,{level:5,className:"current-price",children:["Current ",n," Price: $ ",a]})]})]}),Object(f.jsx)(C.a,{style:{maxWidth:"100%"},children:Object(f.jsx)(Y.a,{data:h,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}},style:{maxWidth:"100%"}})})]})},te=t(398),ae=t(399),ne=t(400),se=t(401),ie=t(138),le=t(402),re=t(223),oe=(t(368),o.a.Title),je=o.a.Text,de=X.a.Option;function he(e){return"0"===e.match(/[0-9]+/)[0]?e.match(/\.0+/)&&e.match(/\.0+/)[0].length>4?e.slice(0,10):e.slice(0,8):Number(e).toLocaleString("en",{maximumFractionDigits:2})}var be=function(){var e,c=Object(i.f)().coinId,t=Object(a.useState)("7d"),n=Object(d.a)(t,2),s=n[0],l=n[1],r=D(c),o=r.data,j=r.isFetching,h=F({coinId:c,timePeriod:s}).data,b=null===o||void 0===o||null===(e=o.data)||void 0===e?void 0:e.coin;if(j)return Object(f.jsx)(V,{});var u=[{title:"Price to USD",value:"$ ".concat((null===b||void 0===b?void 0:b.price)&&he(null===b||void 0===b?void 0:b.price)),icon:Object(f.jsx)(te.a,{})},{title:"Rank",value:b.rank,icon:Object(f.jsx)(ae.a,{})},{title:"24h Volume",value:"$ ".concat(b.volume&&w()(b.volume,{precision:3})),icon:Object(f.jsx)(ne.a,{})},{title:"Market Cap",value:"$ ".concat(b.marketCap&&w()(b.marketCap,{precision:3})),icon:Object(f.jsx)(te.a,{})},{title:"All-time-high (daily avg.)",value:"$ ".concat(he(b.allTimeHigh.price)),icon:Object(f.jsx)(se.a,{})}],x=[{title:"Number Of Markets",value:b.numberOfMarkets,icon:Object(f.jsx)(m.a,{})},{title:"Number Of Exchanges",value:b.numberOfExchanges,icon:Object(f.jsx)(p.a,{})},{title:"Aprroved Supply",value:b.approvedSupply?Object(f.jsx)(ie.a,{}):Object(f.jsx)(le.a,{}),icon:Object(f.jsx)(re.a,{})},{title:"Total Supply",value:"$ ".concat(w()(b.totalSupply,{precision:3})),icon:Object(f.jsx)(re.a,{})},{title:"Circulating Supply",value:"$ ".concat(w()(b.circulatingSupply,{precision:3})),icon:Object(f.jsx)(re.a,{})}];return Object(f.jsxs)("div",{className:"coin-detail-container",children:[Object(f.jsxs)(k.a,{className:"coin-heading-container",children:[Object(f.jsxs)(oe,{level:2,className:"coin-name",children:[b.name," (",b.symbol,") Price"]}),Object(f.jsxs)("p",{children:[b.name," live price in USD View value statistics, market cap and suplpy"]})]}),Object(f.jsx)(X.a,{defaultValue:"7d",className:"select-timeperiod",placeholder:"Select Time Period",onChange:function(e){return l(e)},children:["24h","7d","30d","3m","1y","3y","5y"].map((function(e){return Object(f.jsx)(de,{children:e},e)}))}),Object(f.jsx)(ce,{coinHistory:h,currentPrice:w()(b.price,{precision:4}),coinName:b.name}),Object(f.jsxs)(C.a,{className:"stats-container",children:[Object(f.jsxs)(k.a,{className:"coin-value-statistics",children:[Object(f.jsxs)(k.a,{className:"coin-value-statistics-heading",children:[Object(f.jsxs)(oe,{level:3,className:"coin-details-heading",children:[b.name," Value statistics"]}),Object(f.jsxs)("p",{children:["An overview showing the main stats of ",b.name]})]}),u.map((function(e){var c=e.icon,t=e.title,a=e.value;return Object(f.jsxs)(C.a,{className:"coin-stats",children:[Object(f.jsxs)(k.a,{className:"coin-stats-name",children:[Object(f.jsx)(je,{children:c}),Object(f.jsx)(je,{children:t})]}),Object(f.jsx)(je,{className:"coin-stats-value",children:a})]},Object(K.a)())}))]}),Object(f.jsxs)(k.a,{className:"other-stats-info",children:[Object(f.jsxs)(k.a,{className:"coin-value-statistics-heading",children:[Object(f.jsx)(oe,{level:3,className:"coin-details-heading",children:"Other statistics"}),Object(f.jsxs)("p",{children:["An overview showing the global stats of ",b.name]})]}),x.map((function(e){var c=e.icon,t=e.title,a=e.value;return Object(f.jsxs)(C.a,{className:"coin-stats",children:[Object(f.jsxs)(k.a,{className:"coin-stats-name",children:[Object(f.jsx)(je,{children:c}),Object(f.jsx)(je,{children:t})]}),Object(f.jsx)(je,{className:"coin-stats-value",children:a})]},Object(K.a)())}))]})]}),Object(f.jsxs)(C.a,{className:"coin-desc-link",children:[Object(f.jsxs)(k.a,{className:"coin-desc",children:[Object(f.jsxs)(oe,{level:3,className:"coin-details-heading",children:["What is ",b.name]}),Object(I.a)(b.description)]}),Object(f.jsxs)(k.a,{className:"coin-links",children:[Object(f.jsxs)(oe,{level:3,className:"coin-details-heading",children:[b.name," Links"]}),b.links.map((function(e){return Object(f.jsxs)(C.a,{className:"coin-link",children:[Object(f.jsx)(oe,{level:5,className:"link-name",children:e.type}),Object(f.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.name})]},e.url)}))]})]})]})},ue=(t(369),$.a.Panel),xe=o.a.Text,Oe=function(e){var c=e.simplified,t=q(c?10:100),n=t.data,s=t.isFetching,i=Object(a.useState)([]),r=Object(d.a)(i,2),o=r[0],b=r[1],u=Object(a.useState)(""),x=Object(d.a)(u,2),O=x[0],m=x[1],p=Object(a.useState)("grid"),v=Object(d.a)(p,2),g=v[0],N=v[1];Object(a.useEffect)((function(){var e,c=null===n||void 0===n||null===(e=n.data)||void 0===e?void 0:e.coins.filter((function(e){return e.name.toLowerCase().includes(O.toLowerCase())}));b(c)}),[n,O]);var w={fontSize:25,color:"#3c71e4"};return s?Object(f.jsx)(V,{}):Object(f.jsxs)(f.Fragment,{children:[!c&&Object(f.jsxs)(C.a,{className:"crypto-cards-header",gutter:[32,32],children:[Object(f.jsx)("div",{className:"search-crypto",children:Object(f.jsx)(B.a,{placeholder:"Search coins",onChange:function(e){return m(e.target.value)}})}),Object(f.jsxs)(J.a.Group,{className:"change-view",defaultValue:"grid",buttonStyle:"outline",onChange:function(e){return N(e.target.value)},children:[Object(f.jsx)(J.a.Button,{value:"list",children:Object(f.jsx)(_.a,{style:w})}),Object(f.jsx)(J.a.Button,{value:"grid",children:Object(f.jsx)(Z.a,{style:w})})]})]}),"list"===g?Object(f.jsxs)("div",{className:"coins-list-view",children:[Object(f.jsxs)(C.a,{children:[Object(f.jsx)(k.a,{className:"exchanges-col-heading",span:6,children:"Currency"}),Object(f.jsx)(k.a,{className:"exchanges-col-heading col-tex-center",span:6,children:"Price"}),Object(f.jsx)(k.a,{className:"exchanges-col-heading col-tex-center",span:6,children:"Market Cap"}),Object(f.jsx)(k.a,{className:"exchanges-col-heading col-tex-center",span:6,children:"Daily Change"})]}),null===o||void 0===o?void 0:o.map((function(e,c){return Object(f.jsx)($.a,{children:Object(f.jsx)(ue,{showArrow:!1,header:Object(f.jsxs)(C.a,{className:"exchanges-row",align:"middle",children:[Object(f.jsx)(k.a,{className:"col-exchange-container",span:6,children:Object(f.jsxs)(j.b,{size:"middle",children:[Object(f.jsxs)(xe,{children:[c+1,". "]}),Object(f.jsx)(h.a,{size:{xs:24,sm:32,md:40,lg:64,xl:80},src:null===e||void 0===e?void 0:e.iconUrl}),Object(f.jsx)(xe,{className:"exchange-name",children:null===e||void 0===e?void 0:e.name})]})}),Object(f.jsx)(k.a,{className:"col-tex-center",span:6,children:Object(y.millify)(null===e||void 0===e?void 0:e.price,{precision:2})}),Object(f.jsx)(k.a,{className:"col-tex-center",span:6,children:Object(y.millify)(null===e||void 0===e?void 0:e.marketCap,{precision:1})}),Object(f.jsxs)(k.a,{className:"col-tex-center",span:6,children:[null===e||void 0===e?void 0:e.change,"%"]})]}),children:(null===e||void 0===e?void 0:e.description)&&Object(I.a)(null===e||void 0===e?void 0:e.description)},e.uuid)})}))]}):Object(f.jsx)(C.a,{gutter:[16,{xs:8,sm:16,md:24,lg:32}],className:"crypto-card-container",children:null===o||void 0===o?void 0:o.map((function(e){return Object(f.jsx)(k.a,{xs:24,ms:12,lg:6,className:"crypto-card",children:Object(f.jsx)(l.b,{to:"/crypto/".concat(e.id),children:Object(f.jsxs)(R.a,{title:"".concat(e.rank,". ").concat(e.name),extra:Object(f.jsx)("img",{className:"coin-image",src:e.iconUrl,alt:"".concat(e.name," icon")}),hoverable:!0,children:[Object(f.jsxs)("p",{children:["Price: $",he(e.price)]}),Object(f.jsxs)("p",{children:["Market Cap: $",Object(y.millify)(e.marketCap,{precision:3,space:!0})]}),Object(f.jsxs)("p",{children:["Daily Change: ",e.change,"%"]})]})})},e.uuid)}))})]})},me=t(215),pe=t.n(me),ve={"x-bingapis-sdk":"true","x-rapidapi-host":"bing-news-search1.p.rapidapi.com","x-rapidapi-key":"cc8ea52f9dmsh349b88ea4441c09p10dde3jsn7c3df1e6a8db"},ge=Object(T.a)({reducerPath:"cryptoNewsApi",baseQuery:Object(P.d)({baseUrl:"https://bing-news-search1.p.rapidapi.com"}),endpoints:function(e){return{getNews:e.query({query:function(e){var c=e.newsCategory,t=e.count;return{url:"/news/search?q=".concat(c,"&safeSearch=Off&textFormat=Raw&freshness=Day&count=").concat(t),headers:ve}}})}}}),fe=ge.useGetNewsQuery,Ne=t.p+"static/media/crypto-news-demo-img.b0c9beef.jpg",ye=(t(370),o.a.Text),we=o.a.Title,Ce=X.a.Option,ke=function(e){var c,t,n,s=e.simplified,i=Object(a.useState)("Cryptocurrency"),l=Object(d.a)(i,2),r=l[0],o=l[1],j=fe({newsCategory:r,count:s?6:15}),b=j.data,u=j.isFetching,x=q(100).data;return u?Object(f.jsx)(V,{}):Object(f.jsx)("div",{children:Object(f.jsxs)(C.a,{gutter:[24,24],children:[!s&&Object(f.jsx)(k.a,{span:24,children:Object(f.jsxs)(X.a,{showSearch:!0,className:"select-news",placeholder:"Select a coin",optionFilterProp:"children",onChange:function(e){return o(e)},filterOption:function(e,c){return c.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:[null===x||void 0===x||null===(c=x.data)||void 0===c||null===(t=c.coins)||void 0===t?void 0:t.map((function(e){return Object(f.jsx)(Ce,{value:e.name,children:e.name},e.uuid)})),Object(f.jsx)(Ce,{value:"Cryptocurrency",children:"All news"})]})}),null===b||void 0===b||null===(n=b.value)||void 0===n?void 0:n.map((function(e,c){var t,a,n,s,i,l;return Object(f.jsx)(k.a,{xs:24,sm:12,lg:8,children:Object(f.jsx)(R.a,{hoverable:!0,className:"news-card",children:Object(f.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:[Object(f.jsxs)("div",{className:"news-image-container",children:[Object(f.jsx)(we,{className:"news-title",level:4,children:e.name}),Object(f.jsx)("img",{style:{maxWidth:"200px",maxHeight:"100px"},src:(null===e||void 0===e||null===(t=e.image)||void 0===t||null===(a=t.thumbnail)||void 0===a?void 0:a.contentUrl)||Ne,alt:"news"})]}),Object(f.jsx)("p",{children:e.description.length>100?"".concat(e.description.substring(0,100),"..."):e.description}),Object(f.jsxs)("div",{className:"provider-container",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)(h.a,{src:(null===e||void 0===e||null===(n=e.provider[0])||void 0===n||null===(s=n.image)||void 0===s||null===(i=s.thumbnail)||void 0===i?void 0:i.contentUrl)||Ne,alt:"news"}),Object(f.jsx)(ye,{className:"propvider-name",children:null===(l=e.provider[0])||void 0===l?void 0:l.name})]}),Object(f.jsx)(ye,{children:pe()(e.datePublished).startOf("ss").fromNow()})]})]})})},c)}))]})})};t.p,o.a.Title,o.a.Text,t(371);var Se,Te=function(){return Object(f.jsxs)("div",{className:"app",children:[Object(f.jsx)("div",{className:"navbar",children:Object(f.jsx)(N,{})}),Object(f.jsxs)("div",{className:"main",children:[Object(f.jsx)(r.a,{children:Object(f.jsx)("div",{className:"routes",children:Object(f.jsxs)(i.c,{children:[Object(f.jsx)(i.a,{exact:!0,path:"/",children:Object(f.jsx)(z,{})}),Object(f.jsx)(i.a,{exact:!0,path:"/cryptocurrencies",children:Object(f.jsx)(Oe,{})}),Object(f.jsx)(i.a,{exact:!0,path:"/exchanges",children:Object(f.jsx)(W,{})}),Object(f.jsx)(i.a,{exact:!0,path:"/crypto/:coinId",children:Object(f.jsx)(be,{})}),Object(f.jsx)(i.a,{exact:!0,path:"/news",children:Object(f.jsx)(ke,{})})]})})}),Object(f.jsxs)("div",{className:"footer",children:[Object(f.jsxs)(o.a.Title,{level:5,style:{color:"white",textAlign:"center"},children:["CrApp ",Object(f.jsx)("br",{}),"All rights reserved"]}),Object(f.jsxs)(j.b,{children:[Object(f.jsx)(l.b,{to:"/",children:"Home"}),Object(f.jsx)(l.b,{to:"/cryptocurrencies",children:"Cryptocurrencies"}),Object(f.jsx)(l.b,{to:"/news",children:"News"})]})]})]})]})},Pe=(t(372),t(7)),Ae=t(14),Ee=Object(Ae.a)({reducer:(Se={},Object(Pe.a)(Se,M.reducerPath,M.reducer),Object(Pe.a)(Se,ge.reducerPath,ge.reducer),Se)}),Me=t(44),qe=t(20),De=t(216),Fe=t.n(De);Object(s.render)(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(l.a,{children:Object(f.jsx)(Me.a,{store:Ee,children:Object(f.jsx)(qe.b,{locale:Fe.a,children:Object(f.jsx)(Te,{})})})})}),document.getElementById("root"))}},[[377,1,2]]]);
//# sourceMappingURL=main.5ed77007.chunk.js.map