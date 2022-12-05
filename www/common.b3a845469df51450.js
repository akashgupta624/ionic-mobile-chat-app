"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{1354:(b,w,r)=>{r.d(w,{r:()=>a});var l=r(3184),v=r(5708);class a{constructor(){this.disabled=!1,this.clickEvent=new l.vpe}onClick(){this.clickEvent.emit()}}a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=l.Xpm({type:a,selectors:[["app-button"]],inputs:{label:"label",type:"type",disabled:"disabled"},outputs:{clickEvent:"clickEvent"},decls:2,vars:3,consts:[["expand","block",3,"type","disabled","click"]],template:function(i,o){1&i&&(l.TgZ(0,"ion-button",0),l.NdJ("click",function(){return o.onClick()}),l._uU(1),l.qZA()),2&i&&(l.Q6J("type",o.type)("disabled",o.disabled),l.xp6(1),l.hij(" ",o.label,"\n"))},dependencies:[v.YG],styles:["ion-button[_ngcontent-%COMP%]{--box-shadow: none;--border-radius: 10px;--background: #008080cc;height:48px;font-size:1rem;color:#fff;margin-bottom:.5rem;text-transform:none;text-transform:initial}"]})},8787:(b,w,r)=>{r.d(w,{T:()=>f});var l=r(4929),v=r(6549),a=r(4830);const s=(0,v.fo)("Camera",{web:()=>r.e(1327).then(r.bind(r,1327)).then(g=>new g.CameraWeb)});var i,g,o;(g=i||(i={})).Documents="DOCUMENTS",g.Data="DATA",g.Library="LIBRARY",g.Cache="CACHE",g.External="EXTERNAL",g.ExternalStorage="EXTERNAL_STORAGE",function(g){g.UTF8="utf8",g.ASCII="ascii",g.UTF16="utf16"}(o||(o={}));const u=(0,v.fo)("Filesystem",{web:()=>r.e(4046).then(r.bind(r,4046)).then(g=>new g.FilesystemWeb)});var h=r(3184),p=r(5708),m=r(9024),E=r(7556);class f{constructor(y,c,d){this.platformService=c,this.authService=d,this.convertBlobToBase64=e=>new Promise((_,C)=>{const D=new FileReader;D.onerror=C,D.onload=()=>{_(D.result)},D.readAsDataURL(e)}),this.platform=y}addNewToGallery(){return(0,l.mG)(this,void 0,void 0,function*(){return new Promise((y,c)=>{s.getPhoto({resultType:a.dk.Uri,source:this.platform.is("hybrid")?a.oK.Prompt:a.oK.Photos,quality:100,allowEditing:!0}).then(d=>(0,l.mG)(this,void 0,void 0,function*(){console.log(d);const e=d,C=yield this.readAsBase64(e);this.authService.form.profilePicture="data:image/png;base64,"+C,y(d)})).catch(d=>{c(d.message)})})})}readAsBase64(y){return(0,l.mG)(this,void 0,void 0,function*(){if(this.platform.is("hybrid"))return(yield u.readFile({path:y.path})).data;{const d=yield(yield fetch(y.webPath)).blob();return yield this.convertBlobToBase64(d)}})}}f.\u0275fac=function(y){return new(y||f)(h.LFG(p.t4),h.LFG(m.m),h.LFG(E.$))},f.\u0275prov=h.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"})},9024:(b,w,r)=>{r.d(w,{m:()=>a});var l=r(3184),v=r(5708);class a{constructor(i,o){this.config=i,this.platform=o,console.log("Mode :- ",this.config.get("mode")),console.log("Hybrid Platform :- ",this.platform.is("hybrid"))}get isIOS(){return"ios"===this.config.get("mode")}get isAndroid(){return"android"===this.config.get("mode")||"md"===this.config.get("mode")}get isHybrid(){return"md"===this.config.get("mode")||this.platform.is("hybrid")}}a.\u0275fac=function(i){return new(i||a)(l.LFG(v.De),l.LFG(v.t4))},a.\u0275prov=l.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})},4830:(b,w,r)=>{var l,s,v,a;r.d(w,{GW:()=>v,dk:()=>a,oK:()=>l}),(s=l||(l={})).Prompt="PROMPT",s.Camera="CAMERA",s.Photos="PHOTOS",function(s){s.Rear="REAR",s.Front="FRONT"}(v||(v={})),function(s){s.Uri="uri",s.Base64="base64",s.DataUrl="dataUrl"}(a||(a={}))},5479:(b,w,r)=>{r.d(w,{c:()=>s});var l=r(1559),v=r(634),a=r(9286);const s=(i,o)=>{let t,n;const u=(m,E,f)=>{if("undefined"==typeof document)return;const g=document.elementFromPoint(m,E);g&&o(g)?g!==t&&(p(),h(g,f)):p()},h=(m,E)=>{t=m,n||(n=t);const f=t;(0,l.c)(()=>f.classList.add("ion-activated")),E()},p=(m=!1)=>{if(!t)return;const E=t;(0,l.c)(()=>E.classList.remove("ion-activated")),m&&n!==t&&t.click(),t=void 0};return(0,a.createGesture)({el:i,gestureName:"buttonActiveDrag",threshold:0,onStart:m=>u(m.currentX,m.currentY,v.a),onMove:m=>u(m.currentX,m.currentY,v.b),onEnd:()=>{p(!0),(0,v.h)(),n=void 0}})}},7481:(b,w,r)=>{r.d(w,{i:()=>l});const l=v=>v&&""!==v.dir?"rtl"===v.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},5777:(b,w,r)=>{r.r(w),r.d(w,{startFocusVisible:()=>s});const l="ion-focused",a=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],s=i=>{let o=[],t=!0;const n=i?i.shadowRoot:document,u=i||document.body,h=y=>{o.forEach(c=>c.classList.remove(l)),y.forEach(c=>c.classList.add(l)),o=y},p=()=>{t=!1,h([])},m=y=>{t=a.includes(y.key),t||h([])},E=y=>{if(t&&void 0!==y.composedPath){const c=y.composedPath().filter(d=>!!d.classList&&d.classList.contains("ion-focusable"));h(c)}},f=()=>{n.activeElement===u&&h([])};return n.addEventListener("keydown",m),n.addEventListener("focusin",E),n.addEventListener("focusout",f),n.addEventListener("touchstart",p),n.addEventListener("mousedown",p),{destroy:()=>{n.removeEventListener("keydown",m),n.removeEventListener("focusin",E),n.removeEventListener("focusout",f),n.removeEventListener("touchstart",p),n.removeEventListener("mousedown",p)},setFocus:h}}},3701:(b,w,r)=>{r.d(w,{C:()=>i,a:()=>a,d:()=>s});var l=r(1670),v=r(9259);const a=function(){var o=(0,l.Z)(function*(t,n,u,h,p,m){var E;if(t)return t.attachViewToDom(n,u,p,h);if(!(m||"string"==typeof u||u instanceof HTMLElement))throw new Error("framework delegate is missing");const f="string"==typeof u?null===(E=n.ownerDocument)||void 0===E?void 0:E.createElement(u):u;return h&&h.forEach(g=>f.classList.add(g)),p&&Object.assign(f,p),n.appendChild(f),yield new Promise(g=>(0,v.c)(f,g)),f});return function(n,u,h,p,m,E){return o.apply(this,arguments)}}(),s=(o,t)=>{if(t){if(o){const n=t.parentElement;return o.removeViewFromDom(n,t)}t.remove()}return Promise.resolve()},i=()=>{let o,t;return{attachViewToDom:function(){var h=(0,l.Z)(function*(p,m,E={},f=[]){var g,y;if(o=p,m){const d="string"==typeof m?null===(g=o.ownerDocument)||void 0===g?void 0:g.createElement(m):m;f.forEach(e=>d.classList.add(e)),Object.assign(d,E),o.appendChild(d),yield new Promise(e=>(0,v.c)(d,e))}else if(o.children.length>0){const d=null===(y=o.ownerDocument)||void 0===y?void 0:y.createElement("div");f.forEach(e=>d.classList.add(e)),d.append(...o.children),o.appendChild(d)}const c=document.querySelector("ion-app")||document.body;return t=document.createComment("ionic teleport"),o.parentNode.insertBefore(t,o),c.appendChild(o),o});return function(m,E){return h.apply(this,arguments)}}(),removeViewFromDom:()=>(o&&t&&(t.parentNode.insertBefore(o,t),t.remove()),Promise.resolve())}}},634:(b,w,r)=>{r.d(w,{a:()=>a,b:()=>s,c:()=>v,d:()=>o,h:()=>i});const l={getEngine(){var t;const n=window;return n.TapticEngine||(null===(t=n.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&n.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const n=this.getEngine();if(!n)return;const u=this.isCapacitor()?t.style.toUpperCase():t.style;n.impact({style:u})},notification(t){const n=this.getEngine();if(!n)return;const u=this.isCapacitor()?t.style.toUpperCase():t.style;n.notification({style:u})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},v=()=>{l.selection()},a=()=>{l.selectionStart()},s=()=>{l.selectionChanged()},i=()=>{l.selectionEnd()},o=t=>{l.impact(t)}},2002:(b,w,r)=>{r.d(w,{a:()=>l,b:()=>m,c:()=>t,d:()=>E,e:()=>D,f:()=>o,g:()=>f,h:()=>a,i:()=>v,j:()=>e,k:()=>_,l:()=>n,m:()=>h,n:()=>g,o:()=>u,p:()=>i,q:()=>s,r:()=>d,s:()=>C,t:()=>p,u:()=>y,v:()=>c});const l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Checkmark</title><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipse</title><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Remove</title><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},3081:(b,w,r)=>{r.d(w,{I:()=>i,a:()=>h,b:()=>o,c:()=>E,d:()=>g,f:()=>p,g:()=>u,i:()=>n,p:()=>f,r:()=>y,s:()=>m});var l=r(1670),v=r(9259),a=r(9273);const i="ion-content",o=".ion-content-scroll-host",t=`${i}, ${o}`,n=c=>"ION-CONTENT"===c.tagName,u=function(){var c=(0,l.Z)(function*(d){return n(d)?(yield new Promise(e=>(0,v.c)(d,e)),d.getScrollElement()):d});return function(e){return c.apply(this,arguments)}}(),h=c=>c.querySelector(o)||c.querySelector(t),p=c=>c.closest(t),m=(c,d)=>n(c)?c.scrollToTop(d):Promise.resolve(c.scrollTo({top:0,left:0,behavior:d>0?"smooth":"auto"})),E=(c,d,e,_)=>n(c)?c.scrollByPoint(d,e,_):Promise.resolve(c.scrollBy({top:e,left:d,behavior:_>0?"smooth":"auto"})),f=c=>(0,a.a)(c,i),g=c=>{if(n(c)){const d=c,e=d.scrollY;return d.scrollY=!1,e}return c.style.setProperty("overflow","hidden"),!0},y=(c,d)=>{n(c)?c.scrollY=d:c.style.removeProperty("overflow")}},1652:(b,w,r)=>{r.d(w,{s:()=>l});const l=n=>{try{if(n instanceof class t{constructor(u){this.value=u}})return n.value;if(!s()||"string"!=typeof n||""===n)return n;const u=document.createDocumentFragment(),h=document.createElement("div");u.appendChild(h),h.innerHTML=n,o.forEach(f=>{const g=u.querySelectorAll(f);for(let y=g.length-1;y>=0;y--){const c=g[y];c.parentNode?c.parentNode.removeChild(c):u.removeChild(c);const d=a(c);for(let e=0;e<d.length;e++)v(d[e])}});const p=a(u);for(let f=0;f<p.length;f++)v(p[f]);const m=document.createElement("div");m.appendChild(u);const E=m.querySelector("div");return null!==E?E.innerHTML:m.innerHTML}catch(u){return console.error(u),""}},v=n=>{if(n.nodeType&&1!==n.nodeType)return;for(let h=n.attributes.length-1;h>=0;h--){const p=n.attributes.item(h),m=p.name;if(!i.includes(m.toLowerCase())){n.removeAttribute(m);continue}const E=p.value;null!=E&&E.toLowerCase().includes("javascript:")&&n.removeAttribute(m)}const u=a(n);for(let h=0;h<u.length;h++)v(u[h])},a=n=>null!=n.children?n.children:n.childNodes,s=()=>{var n;const u=window,h=null===(n=null==u?void 0:u.Ionic)||void 0===n?void 0:n.config;return!h||(h.get?h.get("sanitizerEnabled",!0):!0===h.sanitizerEnabled||void 0===h.sanitizerEnabled)},i=["class","id","href","src","name","slot"],o=["script","style","iframe","meta","link","object","embed"]},6524:(b,w,r)=>{r.r(w),r.d(w,{KEYBOARD_DID_CLOSE:()=>v,KEYBOARD_DID_OPEN:()=>l,copyVisualViewport:()=>d,keyboardDidClose:()=>f,keyboardDidOpen:()=>m,keyboardDidResize:()=>E,resetKeyboardAssist:()=>t,setKeyboardClose:()=>p,setKeyboardOpen:()=>h,startKeyboardAssist:()=>n,trackViewportChanges:()=>c});const l="ionKeyboardDidShow",v="ionKeyboardDidHide";let s={},i={},o=!1;const t=()=>{s={},i={},o=!1},n=e=>{u(e),e.visualViewport&&(i=d(e.visualViewport),e.visualViewport.onresize=()=>{c(e),m()||E(e)?h(e):f(e)&&p(e)})},u=e=>{e.addEventListener("keyboardDidShow",_=>h(e,_)),e.addEventListener("keyboardDidHide",()=>p(e))},h=(e,_)=>{g(e,_),o=!0},p=e=>{y(e),o=!1},m=()=>{const e=(s.height-i.height)*i.scale;return!o&&s.width===i.width&&e>150},E=e=>o&&!f(e),f=e=>o&&i.height===e.innerHeight,g=(e,_)=>{const C=_?_.keyboardHeight:e.innerHeight-i.height,D=new CustomEvent(l,{detail:{keyboardHeight:C}});e.dispatchEvent(D)},y=e=>{const _=new CustomEvent(v);e.dispatchEvent(_)},c=e=>{s=Object.assign({},i),i=d(e.visualViewport)},d=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})},3963:(b,w,r)=>{r.d(w,{c:()=>v});var l=r(2286);const v=a=>{let s,i,o;const t=()=>{s=()=>{o=!0,a&&a(!0)},i=()=>{o=!1,a&&a(!1)},null===l.w||void 0===l.w||l.w.addEventListener("keyboardWillShow",s),null===l.w||void 0===l.w||l.w.addEventListener("keyboardWillHide",i)};return t(),{init:t,destroy:()=>{null===l.w||void 0===l.w||l.w.removeEventListener("keyboardWillShow",s),null===l.w||void 0===l.w||l.w.removeEventListener("keyboardWillHide",i),s=i=void 0},isKeyboardVisible:()=>o}}},3844:(b,w,r)=>{r.d(w,{S:()=>v});const v={bubbles:{dur:1e3,circles:9,fn:(a,s,i)=>{const o=a*s/i-a+"ms",t=2*Math.PI*s/i;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(a,s,i)=>{const o=s/i,t=a*o-a+"ms",n=2*Math.PI*o;return{r:5,style:{top:9*Math.sin(n)+"px",left:9*Math.cos(n)+"px","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(a,s)=>({r:6,style:{left:9-9*s+"px","animation-delay":-110*s+"ms"}})},lines:{dur:1e3,lines:8,fn:(a,s,i)=>({y1:14,y2:26,style:{transform:`rotate(${360/i*s+(s<i/2?180:-180)}deg)`,"animation-delay":a*s/i-a+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(a,s,i)=>({y1:12,y2:20,style:{transform:`rotate(${360/i*s+(s<i/2?180:-180)}deg)`,"animation-delay":a*s/i-a+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(a,s,i)=>({y1:17,y2:29,style:{transform:`rotate(${30*s+(s<6?180:-180)}deg)`,"animation-delay":a*s/i-a+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(a,s,i)=>({y1:12,y2:20,style:{transform:`rotate(${30*s+(s<6?180:-180)}deg)`,"animation-delay":a*s/i-a+"ms"}})}}},4114:(b,w,r)=>{r.r(w),r.d(w,{createSwipeBackGesture:()=>i});var l=r(9259),v=r(7481),a=r(9286);r(6379);const i=(o,t,n,u,h)=>{const p=o.ownerDocument.defaultView,m=(0,v.i)(o),f=e=>m?-e.deltaX:e.deltaX;return(0,a.createGesture)({el:o,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:e=>(e=>{const{startX:C}=e;return m?C>=p.innerWidth-50:C<=50})(e)&&t(),onStart:n,onMove:e=>{const C=f(e)/p.innerWidth;u(C)},onEnd:e=>{const _=f(e),C=p.innerWidth,D=_/C,M=(e=>m?-e.velocityX:e.velocityX)(e),L=M>=0&&(M>.2||_>C/2),x=(L?1-D:D)*C;let O=0;if(x>5){const k=x/Math.abs(M);O=Math.min(k,540)}h(L,D<=0?.01:(0,l.l)(0,D,.9999),O)}})}}}]);
//# sourceMappingURL=common.b3a845469df51450.js.map