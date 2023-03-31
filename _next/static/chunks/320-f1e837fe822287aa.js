(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[320],{18688:function(e,t,s){"use strict";s.d(t,{Z:function(){return v}});var n=s(85893),i=s(67294),r=s(96455),a=s(87260),l=s(8193);function o(){let[e,t]=(0,i.useState)(!1);return(0,n.jsxs)("div",{className:"fixed bottom-4 right-4",children:[(0,n.jsxs)("button",{onClick:()=>t(!0),className:"inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-full text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:bg-gray-400 gap-2 shadow hover:shadow-lg hover:-translate-y-1 transition-all group",children:[(0,n.jsx)(l.znh,{className:"w-6 h-6 group-hover:scale-110 transition-all"}),(0,n.jsx)("span",{children:"Got Questions?"})]}),(0,n.jsxs)(a.Z,{max:!0,open:e,setOpen:t,children:[(0,n.jsx)("h2",{className:"text-lg text-center my-4 font-semibold",children:"Frequently Asked Questions"}),(0,n.jsx)("div",{className:"text-center",children:"Don't find what you're looking for? Email us at support@typingmind.com"}),(0,n.jsx)(r.Z,{})]})]})}var d=s(11163);function c(e){let{user:t,org:s}=e,[r,a]=(0,i.useState)(!0),[l,o]=(0,i.useState)(null),[d,c]=(0,i.useState)(null);(0,i.useEffect)(()=>{h(),m()},[]);let m=async()=>{for(await new Promise(e=>setTimeout(e,1e3));!window.createLemonSqueezy;)await new Promise(e=>setTimeout(e,1e3));console.log("Lemon installed"),window.createLemonSqueezy(),window.LemonSqueezy&&(console.log("Lemon setup"),window.LemonSqueezy.Setup({eventHandler:e=>{"Checkout.Success"===e.event&&setTimeout(()=>{window.location.href="/admin/verify_payment"},1e3)}}))},u={"checkout[email]":t.email,"checkout[custom][org_id]":s.id,embed:"1"},x=Object.keys(u).map(e=>"".concat(e,"=").concat(encodeURIComponent(u[e]))).join("&"),h=async e=>{a(!0),o("");try{let e=await fetch("/api/hosted/subscriptions",{headers:{"Content-Type":"application/json"}});if(e.status>=400){let t=await e.json();o(t.userMessage||GENERIC_MESSAGE),a(!1);return}if(!e.ok){o(GENERIC_MESSAGE),a(!1);return}let t=await e.json();c(t.subscriptions)}catch(e){o(GENERIC_MESSAGE),console.error(e)}a(!1)};return r?null:(0,n.jsxs)("div",{children:[d&&d.length>0&&d.filter(e=>{var t,s;return(null==e?void 0:null===(t=e.data)||void 0===t?void 0:null===(s=t.attributes)||void 0===s?void 0:s.status)==="active"}).length>0?null:(0,n.jsxs)("div",{className:"p-4 bg-yellow-50 rounded-md shadow",children:[(0,n.jsx)("div",{className:"text-sm mb-2",children:"Please finish your payment to activate your Chat Instance."}),(0,n.jsx)("a",{className:"lemonsqueezy-button inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 gap-2",target:"_blank",rel:"noreferrer noopener",href:"https://tdinh.lemonsqueezy.com/checkout/buy/5b95a345-5a3e-4883-bc7c-f51a61b5be22?"+x,children:"Buy Subscription →"})]}),l&&(0,n.jsx)("div",{className:"text-center text-red-500 text-sm font-semibold my-2",children:l})]})}s(88388),s(3650),s(67907);var m=s(23235);function u(e){let{}=e,[t,s]=(0,i.useState)(!1),[r,a]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{"#verified"===window.location.hash&&(window.location.hash="",s(!0),setTimeout(()=>{a(!0)},800))},[]),r?(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"flex items-center justify-center",children:(0,n.jsx)(m.Z,{})}),(0,n.jsx)("div",{className:"flex items-center justify-center text-green-500 text-lg font-semibold",children:"\uD83C\uDF89 Well done! Your Chat instance is now verified!"}),(0,n.jsx)("div",{className:"flex items-center justify-center text-green-500",children:"You can now customize and preview your Chat instance below."})]}):null}function x(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return t.filter(Boolean).join(" ")}function h(e){let{items:t,selectedTab:s,setSelectedTab:i}=e;return(0,n.jsxs)("div",{className:"mt-4",children:[(0,n.jsxs)("div",{className:"sm:hidden",children:[(0,n.jsx)("label",{className:"sr-only",children:"Select a tab"}),(0,n.jsx)("select",{className:"block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm dark:bg-zinc-800",value:s,onChange:e=>{i(e.target.value)},children:t.map(e=>(0,n.jsx)("option",{children:e.name},e.name))})]}),(0,n.jsx)("div",{className:"hidden sm:block",children:(0,n.jsx)("div",{className:"border-b border-gray-200",children:(0,n.jsx)("nav",{className:"-mb-px flex space-x-8","aria-label":"Tabs",children:t.map(e=>e.link?(0,n.jsx)("a",{href:e.link,className:x(e.name===s?"border-blue-500 text-blue-600 dark:text-blue-500":"border-transparent text-gray-500 dark:text-gray-200 hover:border-gray-200 dark:hover:text-gray-400 hover:text-gray-700","flex whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"),"aria-current":e.name===s?"page":void 0,children:e.name},e.name):(0,n.jsx)("button",{onClick:()=>i(e.name),className:x(e.name===s?"border-blue-500 text-blue-600 dark:text-blue-500":"border-transparent text-gray-500 dark:text-gray-200 hover:border-gray-200 dark:hover:text-gray-400 hover:text-gray-700","flex whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"),"aria-current":e.name===s?"page":void 0,children:e.name},e.name))})})})]})}var f=s(31955),g=s(54426),b=s(56681),p=s(51448),y=s(89583);let j=[{name:"Settings",link:"/admin"},{name:"Custom Domain",link:"/admin/domains"},{name:"Members",link:"/admin/members"},{name:"Billing",link:"/admin/billing"}];function v(e){let{user:t,serverHostConfig:s,serverOrg:r,roles:a,children:l}=e,m=(0,d.useRouter)(),x=j.find(e=>e.link===m.pathname)||j[0],[v,w]=(0,i.useState)(x.name),[N,k]=(0,i.useState)(r),S=()=>{f.Z.remove("org_token"),window.location.reload()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"min-h-screen ",children:[(0,n.jsx)(p.Z,{hostConfig:s,title:"Admin Panel"}),(0,n.jsx)("div",{className:"py-10 ",children:(0,n.jsxs)("main",{className:"max-w-3xl mx-auto px-4",children:[(0,n.jsx)(u,{}),(0,n.jsxs)("div",{className:"text-center my-10",children:[(0,n.jsx)("h1",{className:"text-2xl text-center my-2",children:"Manage Your Instance"}),(0,n.jsx)("span",{className:"text-xs bg-green-500 rounded-full px-3 py-1 text-white text-white font-semibold inline-block",children:"Early Access"})]}),t?(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"text-center flex items-center justify-center gap-2",children:[(0,n.jsxs)("div",{children:["\uD83D\uDC4B Welcome, ",(0,n.jsx)("b",{children:null==t?void 0:t.email})]}),(0,n.jsx)(g.Z,{onConfirmed:S,className:"text-red-500 font-semibold cursor-pointer hover:underline",children:"Logout"})]}),t&&a.includes("admin")?(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"text-right my-4 flex items-center justify-center gap-2 flex-wrap",children:[(0,n.jsx)("span",{className:"text-sm font-semibold",children:"Your Chat URL(s):"}),(0,n.jsxs)("a",{target:"_blank",href:"https://".concat(N.subdomain,".typingcloud.com"),className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 gap-2",children:[N.subdomain,".typingcloud.com",(0,n.jsx)(y.CkN,{className:"w-4 h-4"})]}),N.hostname?(0,n.jsxs)("a",{target:"_blank",href:"https://".concat(N.hostname),className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 gap-2",children:[N.hostname,(0,n.jsx)(y.CkN,{className:"w-4 h-4"})]}):null]}),(0,n.jsx)(c,{org:N,user:t}),(0,n.jsx)(h,{items:j,selectedTab:v,setSelectedTab:w}),l({org:N,user:t,onOrgUpdated:k})]}):(0,n.jsx)("div",{className:"text-center my-10",children:"You are not an admin and cannot access this page."})]}):(0,n.jsxs)("div",{className:"max-w-md mx-auto px-4",children:[(0,n.jsx)("div",{className:"text-lg text-center",children:"Please Login First"}),(0,n.jsx)(b.Z,{hostConfig:{orgID:N.id},onLoggedIn:()=>{window.location.reload()}})]})]})}),(0,n.jsx)(o,{}),(0,n.jsx)("script",{src:"https://assets.lemonsqueezy.com/lemon.js",defer:!0})]})})}},54426:function(e,t,s){"use strict";s.d(t,{Z:function(){return r}});var n=s(85893),i=s(67294);function r(){let e,{onConfirmed:t,children:s,className:r,disabled:a,defaultText:l=()=>"Delete",confirmText:o=()=>(0,n.jsx)("span",{className:"text-red-500 text-xs hover:underline",children:"Sure?"})}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[d,c]=(0,i.useState)(!1);return(0,i.useEffect)(()=>()=>clearTimeout(e),[]),(0,i.useEffect)(()=>(d&&(clearTimeout(e),e=setTimeout(()=>{c(!1)},2e3)),()=>clearTimeout(e)),[d]),(0,n.jsx)("button",{onClick:()=>{!a&&(d?t&&t():c(!0))},className:r,children:d?o({disabled:a}):s||l({disabled:a})})}},88388:function(e,t,s){"use strict";s.d(t,{Z:function(){return d}});var n=s(85893),i=s(67294),r=s(24461);let a="Something went wrong. Please try again.";function l(e){var t,s,l,o,d,c,m,u,x,h,f,g,b,p,y,j,v,w;let{subscription:N}=e,[k,S]=(0,i.useState)(N),[C,E]=(0,i.useState)(!1),[T,D]=(0,i.useState)(null),M=async e=>{if("cancel"!==e||window.confirm("Are you sure you want to cancel this subscription?")){E(!0),D("");try{var t,s,n,i,r,l,o,d;let c=await fetch("/api/hosted/subscriptions/"+N.id,{headers:{"Content-Type":"application/json"},method:"PUT",body:JSON.stringify({action:e})});if(c.status>=400){let e=await c.json();D(e.userMessage||a),E(!1);return}if(!c.ok){D(a),E(!1);return}let m=await c.json();S(m.subscription),"update"===e&&(null==m?void 0:null===(t=m.subscription)||void 0===t?void 0:null===(s=t.data)||void 0===s?void 0:null===(n=s.attributes)||void 0===n?void 0:null===(i=n.urls)||void 0===i?void 0:i.update_payment_method)&&window.open(null==m?void 0:null===(r=m.subscription)||void 0===r?void 0:null===(l=r.data)||void 0===l?void 0:null===(o=l.attributes)||void 0===o?void 0:null===(d=o.urls)||void 0===d?void 0:d.update_payment_method,"_blank")}catch(e){D(a),console.error(e)}E(!1)}};return(0,n.jsx)("div",{className:"flex items-center justify-between px-4 py-2",children:(0,n.jsx)("div",{className:"flex items-center",children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"text-lg font-medium flex items-center justify-center gap-2",children:[(null==k?void 0:null===(t=k.data)||void 0===t?void 0:null===(s=t.attributes)||void 0===s?void 0:s.status)==="active"?(0,n.jsx)("div",{className:"text-xs text-white px-2 py-1 bg-green-500 rounded-md inline-block",children:"Active"}):(null==k?void 0:null===(l=k.data)||void 0===l?void 0:null===(o=l.attributes)||void 0===o?void 0:o.status)==="cancelled"?(0,n.jsx)("div",{className:"text-xs text-white px-2 py-1 bg-red-500 rounded-md inline-block",children:"Cancelled"}):(0,n.jsx)("div",{className:"text-xs text-white px-2 py-1 bg-gray-500 rounded-md inline-block",children:null==k?void 0:null===(d=k.data)||void 0===d?void 0:null===(c=d.attributes)||void 0===c?void 0:c.status_formatted}),(0,n.jsx)("span",{children:null==k?void 0:null===(m=k.data)||void 0===m?void 0:null===(u=m.attributes)||void 0===u?void 0:u.product_name})]}),(null==k?void 0:null===(x=k.data)||void 0===x?void 0:null===(h=x.attributes)||void 0===h?void 0:h.status)==="cancelled"?(0,n.jsxs)("div",{className:"text-xs text-gray-500 my-1",children:["Subscription ends at:"," ",new Date(null==k?void 0:null===(f=k.data)||void 0===f?void 0:null===(g=f.attributes)||void 0===g?void 0:g.ends_at).toLocaleString()]}):null,(0,n.jsx)("div",{className:"flex items-center justify-start gap-2 my-2",children:(null==k?void 0:null===(b=k.data)||void 0===b?void 0:null===(p=b.attributes)||void 0===p?void 0:p.status)==="active"?(0,n.jsxs)("div",{className:"flex items-center justify-start gap-2",children:[(0,n.jsx)("button",{onClick:()=>M("update"),disabled:C,className:"px-4 py-2 bg-blue-500 rounded-md text-sm font-medium text-white hover:bg-blue-600 disabled:bg-gray-400 flex items-center justify-center gap-2",children:(0,n.jsx)("span",{children:"Update Payment Metod"})}),(0,n.jsx)("button",{onClick:()=>M("cancel"),disabled:C,className:"px-4 py-2 bg-red-500 rounded-md text-sm font-medium text-white hover:bg-red-600 disabled:bg-gray-400 flex items-center justify-center gap-2",children:(0,n.jsx)("span",{children:"Cancel"})})]}):(null==k?void 0:null===(y=k.data)||void 0===y?void 0:null===(j=y.attributes)||void 0===j?void 0:j.status)==="cancelled"&&new Date(null==k?void 0:null===(v=k.data)||void 0===v?void 0:null===(w=v.attributes)||void 0===w?void 0:w.ends_at)>new Date?(0,n.jsx)("div",{className:"flex items-center justify-start gap-2",children:(0,n.jsx)("button",{onClick:()=>M("resume"),disabled:C,className:"px-4 py-2 bg-blue-500 rounded-md text-sm font-medium text-white hover:bg-blue-600 disabled:bg-gray-400 flex items-center justify-center gap-2",children:(0,n.jsx)("span",{children:"Resume"})})}):null}),C?(0,n.jsxs)("div",{className:"text-xs text-gray-500 my-1 flex items-center justify-start my-2 gap-2",children:[(0,n.jsx)(r.Z,{}),(0,n.jsx)("span",{children:"Please wait..."})]}):null,T&&(0,n.jsx)("div",{className:"text-center text-red-500 text-sm font-semibold my-2",children:T})]})})})}let o="Something went wrong. Please try again.";function d(e){let{org:t}=e,[s,a]=(0,i.useState)([]),[d,c]=(0,i.useState)(!1),[m,u]=(0,i.useState)(null);(0,i.useEffect)(()=>{x()},[]);let x=async()=>{c(!0),u("");try{let e=await fetch("/api/hosted/subscriptions",{headers:{"Content-Type":"application/json"}});if(e.status>=400){let t=await e.json();u(t.userMessage||o),c(!1);return}if(!e.ok){u(o),c(!1);return}let t=await e.json();a(t.subscriptions)}catch(e){u(o),console.error(e)}c(!1)};return d?(0,n.jsx)("div",{className:"my-10 flex items-center justify-center",children:(0,n.jsx)(r.Z,{})}):(0,n.jsxs)("div",{className:"my-2",children:[m&&(0,n.jsx)("div",{className:"px-4 text-center text-red-500",children:m}),s.length?(0,n.jsx)("div",{className:"my-4 divide-y divide-gray-900/10",children:s.map(e=>(0,n.jsx)(l,{subscription:e},e.id))}):(0,n.jsx)("div",{className:"my-4 text-center text-gray-500",children:"No subscriptions"})]})}},67907:function(e,t,s){"use strict";s.d(t,{Z:function(){return u}});var n=s(85893),i=s(67294);let r=()=>(0,n.jsxs)("div",{className:"flex items-center space-x-3 px-2 sm:px-10",children:[(0,n.jsx)("div",{className:"w-6 h-6 rounded-full bg-gray-300 animate-pulse"}),(0,n.jsx)("p",{className:"text-black text-gray-500 font-normal text-sm",children:"Loading Configuration"})]});function a(e){try{let t=e.error;if("missing_txt_record"===t.code)return null;return t.message}catch(e){return null}}function l(e){let{domainInfo:t}=e,[s,l]=(0,i.useState)("CNAME");if(!t)return(0,n.jsx)(r,{});let o=t.name.replace("."+t.apexName,"");if(!t.verified){let e=t.verification.find(e=>"TXT"===e.type);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex items-center space-x-3 my-3 px-2 sm:px-10",children:[(0,n.jsxs)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",shapeRendering:"geometricPrecision",children:[(0,n.jsx)("circle",{cx:"12",cy:"12",r:"10",fill:"#EAB308"}),(0,n.jsx)("path",{d:"M12 8v4",stroke:"white"}),(0,n.jsx)("path",{d:"M12 16h.01",stroke:"white"})]}),(0,n.jsx)("p",{className:"text-yellow-600 font-medium text-sm",children:"Domain is pending verification"})]}),(0,n.jsx)("div",{className:"w-full border-t border-gray-100 mt-5 mb-8"}),(0,n.jsxs)("div",{className:"px-2 sm:px-10",children:[(0,n.jsx)("div",{className:"flex justify-start space-x-4",children:(0,n.jsx)("div",{onClick:()=>l("CNAME"),className:"".concat("CNAME"==s?"text-black border-black":"text-gray-400 border-white"," text-sm border-b-2 pb-1 transition-all ease duration-150"),children:"Verify Domain Ownership"})}),(0,n.jsxs)("div",{className:"my-3 text-left",children:[(0,n.jsxs)("p",{className:"my-5 text-sm",children:["Please set the following TXT record on ",t.apexName," to prove ownership of ",t.name,":"]}),(0,n.jsxs)("div",{className:"flex justify-start items-start space-x-10 bg-gray-50 p-2 rounded-md",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"text-sm font-bold",children:"Type"}),(0,n.jsx)("p",{className:"text-sm font-mono mt-2",children:e.type})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"text-sm font-bold",children:"Name"}),(0,n.jsx)("p",{className:"text-sm font-mono mt-2",children:e.domain.slice(0,e.domain.length-t.apexName.length-1)})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"text-sm font-bold",children:"Value"}),(0,n.jsx)("p",{className:"text-sm font-mono mt-2",children:(0,n.jsx)("span",{className:"text-ellipsis",children:e.value})})]})]}),a(t.verificationResponse)&&(0,n.jsx)("p",{className:"my-5 text-sm text-red-700",children:a(t.verificationResponse)})]})]})]})}return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex items-center space-x-3 my-3 px-2 sm:px-10",children:[(0,n.jsxs)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",shapeRendering:"geometricPrecision",children:[(0,n.jsx)("circle",{cx:"12",cy:"12",r:"10",fill:t.configured?"#1976d2":"#d32f2f"}),t.configured?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("path",{d:"M8 11.8571L10.5 14.3572L15.8572 9",fill:"none",stroke:"white"})}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("path",{d:"M15 9l-6 6",stroke:"white"}),(0,n.jsx)("path",{d:"M9 9l6 6",stroke:"white"})]})]}),(0,n.jsxs)("p",{className:"".concat(t.configured?"text-black font-normal":"text-red-700 font-medium"," text-sm"),children:[t.configured?"Valid":"Invalid"," Configuration"]})]}),t.configured&&(0,n.jsx)("div",{className:"text-left px-2 sm:px-10 mb-2",children:(0,n.jsx)("p",{className:"text-sm text-gray-500 font-normal",children:"Note: it may take 1-3 minutes for the SSL certificate to be provisioned."})}),!t.configured&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"w-full border-t border-gray-100 mt-5 mb-8"}),(0,n.jsx)("div",{className:"px-2 sm:px-10",children:(0,n.jsxs)("div",{className:"my-3 text-left",children:[(0,n.jsxs)("p",{className:"my-5 text-sm",children:["Set the following record on your DNS provider of"," ",(0,n.jsx)("b",{children:t.apexName})," to continue:"]}),(0,n.jsxs)("div",{className:"flex justify-start items-center space-x-10 bg-gray-50 p-2 rounded-md",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"text-sm font-bold",children:"Type"}),(0,n.jsx)("p",{className:"text-sm font-mono mt-2",children:s})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"text-sm font-bold",children:"Name"}),(0,n.jsx)("p",{className:"text-sm font-mono mt-2",children:"CNAME"==s?o:"@"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"text-sm font-bold",children:"Value"}),(0,n.jsx)("p",{className:"text-sm font-mono mt-2",children:"CNAME"==s?"cname.typingcloud.com":"76.76.21.21"})]})]}),(0,n.jsxs)("p",{className:"my-5 text-sm",children:[(0,n.jsx)("b",{children:"Note:"})," If you are using Cloudflare, you will need to disable their proxy (turn off the orange cloud icon)."]})]})})]})]})}var o=s(24461);let d="Something went wrong. Please try again.";function c(e){let{domain:t}=e,[s,r]=(0,i.useState)(!1),[a,c]=(0,i.useState)(null),[m,u]=(0,i.useState)(null);(0,i.useEffect)(()=>{t&&x()},[t]);let x=async()=>{r(!0),c("");try{let e=await fetch("/api/hosted/domains/check",{headers:{"Content-Type":"application/json"},method:"POST"});if(e.status>=400){let t=await e.json();c(t.userMessage||d),r(!1);return}if(!e.ok){c(d),r(!1);return}u(await e.json())}catch(e){c(d),console.error(e)}r(!1)};return(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"my-8 text-center",children:[a&&(0,n.jsx)("div",{className:"my-4 text-red-500 text-sm text-center",children:a}),(0,n.jsx)("div",{className:"border-gray-200 border py-2 rounded-md shadow my-4",children:(0,n.jsx)(l,{domainInfo:m})}),(0,n.jsxs)("button",{onClick:x,type:"submit",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 gap-2",disabled:s,children:[s?(0,n.jsx)(o.Z,{}):"→",(0,n.jsx)("span",{children:"Re-check DNS Config"})]})]})})}let m="Something went wrong. Please try again.";function u(e){let{org:t,onOrgUpdated:s}=e,[r,a]=(0,i.useState)(t.hostname||""),[l,d]=(0,i.useState)(!1),[u,x]=(0,i.useState)(null),h=async()=>{d(!0),x("");try{let e=await fetch("/api/hosted/domains",{body:JSON.stringify({hostname:r}),headers:{"Content-Type":"application/json"},method:"POST"});if(e.status>=400){let t=await e.json();x(t.userMessage||m),d(!1);return}if(!e.ok){x(m),d(!1);return}let t=await e.json();s(t)}catch(e){x(m),console.error(e)}d(!1)};return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"my-4",children:[(0,n.jsx)("label",{className:"text-sm font-semibold my-1 block",children:"Default Sub-domain"}),(0,n.jsx)("div",{className:"text-xs text-gray-500 my-1",children:"Your default sub-domain is hosted on *.typingcloud.com"}),(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"relative block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6 resize-none dark:bg-zinc-600 dark:text-white dark:ring-gray-500 dark:focus:ring-blue-500 bg-gray-100 px-2",children:[(null==t?void 0:t.subdomain)||"",".typingcloud.com"]})})]}),(0,n.jsxs)("div",{className:"my-4",children:[(0,n.jsx)("label",{className:"text-sm font-semibold my-1 block",children:"Custom Domain (Updating DNS records required)"}),(0,n.jsx)("div",{className:"text-xs text-gray-500 my-1",children:"Your users will be able to access your instance at this domain."}),(0,n.jsx)("div",{children:(0,n.jsx)("input",{disabled:l,onKeyDown:e=>{"Enter"===e.key&&h()},type:"text",className:"relative block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6 min-h-[36px] max-h-[500px] resize-none dark:bg-zinc-600 dark:text-white dark:ring-gray-500 dark:focus:ring-blue-500",placeholder:"www.typingmind.com",value:r,onChange:e=>a(e.target.value)})})]}),(0,n.jsxs)("div",{className:"my-8 text-center",children:[u&&(0,n.jsx)("div",{className:"my-4 text-red-500 text-sm text-center",children:u}),(0,n.jsxs)("button",{onClick:h,type:"submit",className:"inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 gap-2",disabled:l,children:[l?(0,n.jsx)(o.Z,{}):"→",(0,n.jsx)("span",{children:"Save"})]})]}),t.hostname&&(0,n.jsx)(c,{domain:t.hostname})]})}},56681:function(e,t,s){"use strict";s.d(t,{Z:function(){return o}});var n=s(85893),i=s(67294),r=s(31955),a=s(24461);s(14364);let l="Something went wrong. Please try again.";function o(e){let{hostConfig:t,onLoggedIn:s,defaultEmail:o=""}=e,[d,c]=(0,i.useState)(null),[m,u]=(0,i.useState)(o),[x,h]=(0,i.useState)(!1),[f,g]=(0,i.useState)(""),[b,p]=(0,i.useState)(!1),y=(0,i.useRef)(null);(0,i.useEffect)(()=>{u(o)},[o]);let j=async()=>{try{p(!0),c("");let e=await fetch("/api/hosted/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:m,orgID:t.orgID})});if(e.status>=400){let t=await e.json();c(t.userMessage||l),p(!1);return}if(!e.ok){c(l),p(!1);return}await e.json(),h(!0),setTimeout(()=>{y.current.focus()},100)}catch(e){console.error(e),c(l)}p(!1)},v=async()=>{try{p(!0),c("");let e=await fetch("/api/hosted/verify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:m,code:f,orgID:t.orgID})});if(e.status>=400){let t=await e.json();c(t.userMessage||l),p(!1);return}if(!e.ok){c(l),p(!1);return}let n=await e.json();r.Z.set("org_token",n.token,{expires:30}),null==s||s()}catch(e){console.error(e),c(l)}p(!1)};return(0,n.jsxs)("div",{children:[x?(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"my-4",children:[(0,n.jsxs)("div",{className:"my-1 font-semibold",children:["Enter the code in your email (",m,"):"]}),(0,n.jsx)("input",{ref:y,type:"text",disabled:b,placeholder:"XXXXXX",className:"w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 text-xl text-center",value:f,onChange:e=>g(e.target.value),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),v())}})]}),d&&(0,n.jsx)("div",{className:"text-center text-red-500 text-sm font-semibold my-2",children:d}),(0,n.jsxs)("div",{className:"my-4 flex items-center justify-center gap-2",children:[(0,n.jsxs)("button",{onClick:v,disabled:b||!f,className:"flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-default transition-colors gap-2",children:[b?(0,n.jsx)(a.Z,{}):null,"Submit"]}),(0,n.jsx)("button",{onClick:()=>h(!1),disabled:b,className:"flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-white-600 hover:bg-white-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white-500 disabled:bg-gray-400 disabled:cursor-default transition-colors gap-2 disabled:text-white dark:text-white",children:"Cancel"})]})]}):(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"my-4",children:[(0,n.jsx)("div",{className:"my-1 font-semibold",children:"Enter your email:"}),(0,n.jsx)("input",{type:"email",disabled:b,placeholder:"example@gmail.com",className:"w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-zinc-700",value:m,onChange:e=>u(e.target.value),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),j())}})]}),d&&(0,n.jsx)("div",{className:"text-center text-red-500 text-sm font-semibold my-2",children:d}),(0,n.jsx)("div",{className:"my-4 flex items-center justify-center gap-2",children:(0,n.jsxs)("button",{onClick:j,disabled:b||!m,className:"flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-default transition-colors gap-2",children:[b?(0,n.jsx)(a.Z,{}):null,"Send Code"]})})]}),(0,n.jsxs)("div",{className:"text-xs font-semibold text-gray-500 text-center px-4 mt-4",children:["You will receive a verification email from ",(0,n.jsx)("b",{children:"hosted@typingmind.com"}),". Please check your spam folder if you don't see it in your inbox."]})]})}},3650:function(e,t,s){"use strict";s.d(t,{Z:function(){return u}});var n=s(85893),i=s(67294);function r(e){let{member:t,user:s,loading:i,onRemove:r}=e;return(0,n.jsxs)("div",{className:"flex items-center justify-between px-4 py-2 hover:bg-gray-100 ",children:[(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"text-lg font-medium",children:t.email})}),t.roles?(0,n.jsx)("div",{className:"flex items-center justify-center gap-2",children:t.roles.split(",").map(e=>(0,n.jsx)("div",{className:"text-xs text-white px-2 py-1 bg-green-500 rounded-md",children:e.toUpperCase()},e))}):null,t.invitedAt&&!t.lastLoginAt?(0,n.jsx)("div",{className:"text-xs text-white px-2 py-1 bg-gray-500 rounded-md",children:"Invited"}):null]}),(0,n.jsx)("div",{className:"flex items-end justify-center flex-col",children:s.email===t.email?null:(0,n.jsx)("button",{onClick:()=>r(t),disabled:i,className:"inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:bg-gray-400 disabled:cursor-default transition-colors whitespace-nowrap space-x-1",children:"Remove"})})]},t.id)}var a=s(87260),l=s(89583);let o="Something went wrong. Please try again.";function d(e){let{onAdded:t}=e,[s,r]=(0,i.useState)(!1),[d,c]=(0,i.useState)(""),[m,u]=(0,i.useState)(!1),[x,h]=(0,i.useState)(null),f=async()=>{u(!0),h("");try{let e=await fetch("/api/hosted/members",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({emails:d.trim().split(/[,;\n]/).map(e=>e.trim())})});if(e.status>=400){let t=await e.json();h(t.userMessage||o),u(!1);return}if(!e.ok){h(o),u(!1);return}r(!1),null==t||t()}catch(e){h(o),console.error(e)}u(!1)},g=d.trim().split(/[,;\n]/).every(e=>e.trim().length>0&&e.includes("@"));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("button",{onClick:()=>r(!0),className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-400 gap-2",children:[(0,n.jsx)(l.wEH,{className:"w-4 h-4"}),(0,n.jsx)("span",{children:"Add Members"})]}),(0,n.jsxs)(a.Z,{open:s,setOpen:r,showCloseButton:!1,children:[(0,n.jsx)("h2",{className:"text-lg text-center my-4 font-semibold",children:"Add Members"}),(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("p",{className:"text-gray-500",children:"Enter your team members' email addresses here."}),(0,n.jsx)("p",{className:"font-semibold my-2",children:"One email per line."})]}),(0,n.jsx)("textarea",{rows:5,value:d,onChange:e=>c(e.target.value),placeholder:"john@example.com\nalice@yourdomain.com\n...",className:"relative block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6 min-h-[36px] max-h-[500px] resize-none dark:bg-zinc-600 dark:text-white dark:ring-gray-500 dark:focus:ring-blue-500",onKeyDown:e=>{(e.metaKey||e.ctrlKey)&&"Enter"===e.key&&(e.preventDefault(),f())}}),d&&!g&&(0,n.jsx)("p",{className:"text-red-500 text-sm mt-2",children:"Some emails in the list are invalid."}),x&&(0,n.jsx)("p",{className:"text-red-500 text-sm mt-2",children:x}),(0,n.jsxs)("div",{className:" flex items-center justify-center gap-2 mt-4",children:[(0,n.jsxs)("button",{onClick:f,disabled:m||!g,className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-default transition-colors whitespace-nowrap space-x-1",children:[(0,n.jsx)(l.Z1Y,{className:"w-4 h-4"}),(0,n.jsx)("span",{children:"Add Members"})]}),(0,n.jsx)("button",{onClick:()=>r(!1),disabled:m,className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-white hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white-500 disabled:bg-gray-400 disabled:cursor-default transition-colors whitespace-nowrap space-x-1",children:(0,n.jsx)("span",{children:"Cancel"})})]})]})]})}var c=s(24461);let m="Something went wrong. Please try again.";function u(e){let{user:t,org:s}=e,[a,o]=(0,i.useState)([]),[u,x]=(0,i.useState)(!1),[h,f]=(0,i.useState)(null);(0,i.useEffect)(()=>{b()},[]);let g=async e=>{if(window.confirm("Are you sure you want to remove this member?")){x(!0),f("");try{let t=await fetch("/api/hosted/members/"+e.id,{headers:{"Content-Type":"application/json"},method:"DELETE"});if(t.status>=400){let e=await t.json();f(e.userMessage||m),x(!1);return}if(!t.ok){f(m),x(!1);return}let s=await t.json();o(s.members)}catch(e){f(m),console.error(e)}x(!1)}},b=async()=>{x(!0),f("");try{let e=await fetch("/api/hosted/members",{headers:{"Content-Type":"application/json"}});if(e.status>=400){let t=await e.json();f(t.userMessage||m),x(!1);return}if(!e.ok){f(m),x(!1);return}let t=await e.json();o(t.members)}catch(e){f(m),console.error(e)}x(!1)},p={"checkout[email]":t.email,"checkout[custom][org_id]":s.id};return Object.keys(p).map(e=>"".concat(e,"=").concat(encodeURIComponent(p[e]))).join("&"),u?(0,n.jsx)("div",{className:"my-10 flex items-center justify-center",children:(0,n.jsx)(c.Z,{})}):(0,n.jsxs)("div",{children:[h&&(0,n.jsx)("div",{className:"px-4 text-center text-red-500",children:h}),(0,n.jsx)("div",{className:"my-4 font-semibold",children:(0,n.jsxs)("div",{children:["Current members: ",a.length,"/",s.maxUsers,". You have"," ",(0,n.jsxs)("span",{className:s.maxUsers-a.length>0?"text-green-500":"text-red-500",children:[s.maxUsers-a.length," seats"]})," ","remaining."]})}),(0,n.jsxs)("div",{className:"my-4 space-x-2",children:[(0,n.jsx)(d,{onAdded:b}),(0,n.jsxs)("button",{className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 gap-2",target:"_blank",rel:"noreferrer noopener",disabled:!0,children:[(0,n.jsx)(l.Z1Y,{className:"w-4 h-4"}),(0,n.jsx)("span",{children:"Buy More Seats"})]})]}),(0,n.jsx)("div",{className:"text-xs text-gray-500",children:"Buying more seats will become available very soon!"}),(0,n.jsx)("div",{className:"my-4 divide-y divide-gray-900/10",children:a.map(e=>(0,n.jsx)(r,{user:t,member:e,onRemove:g},e.id))})]})}},87260:function(e,t,s){"use strict";s.d(t,{Z:function(){return o}});var n=s(85893),i=s(67294),r=s(44080),a=s(98029);function l(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return t.filter(Boolean).join(" ")}function o(e){let{closeButtonText:t,showCloseButton:s=!0,title:o,position:d,open:c,setOpen:m,hideOverflow:u=!0,children:x,wide:h,wide2:f,max:g,customZ:b}=e;return(0,n.jsx)(r.u.Root,{show:c,as:i.Fragment,children:(0,n.jsx)(a.V,{as:"div",className:l("fixed inset-0 overflow-y-auto",b||"z-50 "),onClose:m,children:(0,n.jsxs)("div",{className:l("flex justify-center min-h-screen px-4 pb-20 text-center sm:block sm:p-0","top"===d?"items-start pt-28":"items-center pt-4"),children:[(0,n.jsx)(r.u.Child,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,n.jsx)(a.V.Overlay,{className:"fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"})}),(0,n.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"​"}),(0,n.jsx)(r.u.Child,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,n.jsxs)("div",{className:l("inline-block w-full align-bottom bg-white dark:bg-zinc-900 rounded-lg px-4 pt-5 pb-4 text-left  shadow-xl transform transition-all sm:my-8 sm:align-middle sm:p-6",u?"overflow-hidden":"",h?" sm:max-w-lg":f?"sm:max-w-xl":g?"sm:max-w-3xl":" sm:max-w-sm"),children:[(0,n.jsxs)("div",{children:[o?(0,n.jsx)(a.V.Title,{as:"h3",className:"text-lg text-center leading-6 font-medium text-gray-900 dark:text-white",children:o}):null,(0,n.jsx)("div",{className:"mt-2 text-gray-800 dark:text-white text-left text-sm",children:x})]}),s?(0,n.jsx)("div",{className:"mt-5 sm:mt-6 text-center",children:(0,n.jsx)("button",{type:"button",className:"inline-flex justify-center rounded-md border border-transparent shadow-sm px-2 py-1 bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm",onClick:()=>m(!1),children:t||"Close"})}):null]})})]})})})}},11163:function(e,t,s){e.exports=s(90387)}}]);