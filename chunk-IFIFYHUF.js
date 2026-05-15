import{$a as gn,A as Ei,Aa as ve,Ab as Se,B as st,Ba as jt,Bb as V,C as fn,Ca as ye,Cb as z,Da as _t,Db as Ae,Ea as vt,Eb as bn,F as Si,Fa as Fi,Fb as _n,G as J,Ga as Ii,Gb as Ut,H as mn,Ha as ki,Ia as Pi,Ib as Qi,Ja as Li,Jb as vn,Ka as Ni,Kb as xe,L as _e,La as Bi,Lb as Et,M as lt,Ma as Z,Mb as Re,Na as ji,Nb as St,O as Pt,Oa as Vi,Ob as yn,Pa as zi,Pb as Dn,Q as ct,Qb as wn,R as k,T as Y,Ta as P,Tb as U,Ua as yt,Ub as Ji,V as u,Va as Ui,Vb as Cn,W as M,Wa as Hi,Wb as En,Xa as et,Y as g,Ya as Dt,Z as v,Za as I,_ as a,_a as X,_b as to,a as b,ab as wt,ac as eo,b as mt,ba as Ai,bb as De,ca as pt,d as h,dc as Oe,ea as xi,eb as R,f as cn,fa as Ri,fb as T,g as dn,gb as S,hb as we,i as pe,ia as C,ib as $i,ic as Ht,j as D,ja as p,jb as L,jc as no,k as Di,kb as Ce,kc as io,l as un,lc as nt,ma as j,mb as Wi,mc as oo,na as y,nb as Gi,nc as Me,oa as pn,ob as Ee,oc as d,p as ge,pa as Oi,pb as Yi,qa as Lt,qb as Zi,ra as Nt,sa as gt,sb as Ct,ta as tt,tb as dt,u as hn,ub as Vt,v as wi,va as x,vb as zt,wa as Mi,x as Ci,xa as Bt,xb as Xi,y as be,ya as Ti,yb as Ki,za as bt,zb as qi}from"./chunk-6WB63TD3.js";function H(){return ro}function Sn(n){ro??=n}var ro,$t,Te,ao,An=h(()=>{"use strict";d();d();ro=null;$t=class{},Te=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:()=>a(ao),providedIn:"platform"})}return n})(),ao=(()=>{class n extends Te{_location;_history;_doc=a(p);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return H().getBaseHref(this._doc)}onPopState(t){let e=H().getGlobalEventTarget(this._doc,"window");return e.addEventListener("popstate",t,!1),()=>e.removeEventListener("popstate",t)}onHashChange(t){let e=H().getGlobalEventTarget(this._doc,"window");return e.addEventListener("hashchange",t,!1),()=>e.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,e,o){this._history.pushState(t,e,o)}replaceState(t,e,o){this._history.replaceState(t,e,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:()=>new n,providedIn:"platform"})}return n})()});function co(n,i){return n?i?n.endsWith("/")?i.startsWith("/")?n+i.slice(1):n+i:i.startsWith("/")?n+i:`${n}/${i}`:n:i}function so(n){let i=n.search(/#|\?|$/);return n[i-1]==="/"?n.slice(0,i-1)+n.slice(i):n}function it(n){return n&&n[0]!=="?"?`?${n}`:n}function jr(){return new Ie(v(Fe))}function Vr(n,i){if(!n||!i.startsWith(n))return i;let t=i.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:i}function lo(n){return n.replace(/\/index.html$/,"")}function zr(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}var Fe,Nr,Br,Ie,uo=h(()=>{"use strict";d();d();ct();An();Fe=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:()=>a(Br),providedIn:"root"})}return n})(),Nr=new g(""),Br=(()=>{class n extends Fe{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,e){super(),this._platformLocation=t,this._baseHref=e??this._platformLocation.getBaseHrefFromDOM()??a(p).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return co(this._baseHref,t)}path(t=!1){let e=this._platformLocation.pathname+it(this._platformLocation.search),o=this._platformLocation.hash;return o&&t?`${e}${o}`:e}pushState(t,e,o,r){let s=this.prepareExternalUrl(o+it(r));this._platformLocation.pushState(t,e,s)}replaceState(t,e,o,r){let s=this.prepareExternalUrl(o+it(r));this._platformLocation.replaceState(t,e,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(e){return new(e||n)(v(Te),v(Nr,8))};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ie=(()=>{class n{_subject=new D;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let e=this._locationStrategy.getBaseHref();this._basePath=zr(so(lo(e))),this._locationStrategy.onPopState(o=>{this._subject.next({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,e=""){return this.path()==this.normalize(t+it(e))}normalize(t){return n.stripTrailingSlash(Vr(this._basePath,lo(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,e="",o=null){this._locationStrategy.pushState(o,"",t,e),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+it(e)),o)}replaceState(t,e="",o=null){this._locationStrategy.replaceState(o,"",t,e),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+it(e)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(e=>{this._notifyUrlChangeListeners(e.url,e.state)}),()=>{let e=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(e,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",e){this._urlChangeListeners.forEach(o=>o(t,e))}subscribe(t,e,o){return this._subject.subscribe({next:t,error:e??void 0,complete:o??void 0})}static normalizeQueryParams=it;static joinWithSlash=co;static stripTrailingSlash=so;static \u0275fac=function(e){return new(e||n)(v(Fe))};static \u0275prov=u({token:n,factory:()=>jr(),providedIn:"root"})}return n})()});function Wr(n,i){return new k(2100,!1)}var $r,xn,Rn,Gr,Yr,Zr,On,ho=h(()=>{"use strict";d();d();$r=(()=>{class n{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=a(C);constructor(t){this._viewContainerRef=t}ngOnChanges(t){if(this._shouldRecreateView(t)){let e=this._viewContainerRef;if(this._viewRef&&e.remove(e.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let o=this._createContextForwardProxy();this._viewRef=e.createEmbeddedView(this.ngTemplateOutlet,o,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(t){return!!t.ngTemplateOutlet||!!t.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(t,e,o)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,e,o):!1,get:(t,e,o)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,e,o)}})}static \u0275fac=function(e){return new(e||n)(gn(wt))};static \u0275dir=S({type:n,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[gt]})}return n})();xn=class{createSubscription(i,t,e){return Oe(()=>i.subscribe({next:t,error:e}))}dispose(i){Oe(()=>i.unsubscribe())}},Rn=class{createSubscription(i,t,e){return i.then(o=>t?.(o),o=>e?.(o)),{unsubscribe:()=>{t=null,e=null}}}dispose(i){i.unsubscribe()}},Gr=new Rn,Yr=new xn,Zr=(()=>{class n{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=a(Oi);constructor(t){this._ref=t}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(t){if(!this._obj){if(t)try{this.markForCheckOnValueUpdate=!1,this._subscribe(t)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return t!==this._obj?(this._dispose(),this.transform(t)):this._latestValue}_subscribe(t){this._obj=t,this._strategy=this._selectStrategy(t),this._subscription=this._strategy.createSubscription(t,e=>this._updateLatestValue(t,e),e=>this.applicationErrorHandler(e))}_selectStrategy(t){if(Yi(t))return Gr;if(Zi(t))return Yr;throw Wr(n,t)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(t,e){t===this._obj&&(this._latestValue=e,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(e){return new(e||n)(gn(Ht,16))};static \u0275pipe=we({name:"async",type:n,pure:!1})}return n})(),On=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=T({type:n});static \u0275inj=M({})}return n})()});function Mn(n,i){i=encodeURIComponent(i);for(let t of n.split(";")){let e=t.indexOf("="),[o,r]=e==-1?[t,""]:[t.slice(0,e),t.slice(e+1)];if(o.trim()===i)return decodeURIComponent(r)}return null}var Wt,fo=h(()=>{"use strict";Wt=class{}});function mo(n){return n===Tn}var Tn,At=h(()=>{"use strict";uo();ho();An();d();fo();Tn="browser"});function po(n){for(let i of n)i.remove()}function go(n,i){let t=i.createElement("style");return t.textContent=n,t}function Kr(n,i,t,e){let o=n.head?.querySelectorAll(`style[${Fn}="${i}"],link[${Fn}="${i}"]`);if(o)for(let r of o)r.removeAttribute(Fn),r instanceof HTMLLinkElement?e.set(r.href.slice(r.href.lastIndexOf("/")+1),{usage:0,elements:[r]}):r.textContent&&t.set(r.textContent,{usage:0,elements:[r]})}function kn(n,i){let t=i.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}function ea(n){return Qr.replace(Nn,n)}function na(n){return qr.replace(Nn,n)}function vo(n,i){return i.map(t=>t.replace(Nn,n))}function bo(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Gt,ke,Ne,Pn,Fn,Ln,In,Nn,_o,qr,Qr,Jr,ta,Bn,Yt,Pe,Zt,Le,yo=h(()=>{"use strict";At();d();d();Gt=class{_doc;constructor(i){this._doc=i}manager},ke=(()=>{class n extends Gt{constructor(t){super(t)}supports(t){return!0}addEventListener(t,e,o,r){return t.addEventListener(e,o,r),()=>this.removeEventListener(t,e,o,r)}removeEventListener(t,e,o,r){return t.removeEventListener(e,o,r)}static \u0275fac=function(e){return new(e||n)(v(p))};static \u0275prov=u({token:n,factory:n.\u0275fac})}return n})(),Ne=new g(""),Pn=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,e){this._zone=e,t.forEach(s=>{s.manager=this});let o=t.filter(s=>!(s instanceof ke));this._plugins=o.slice().reverse();let r=t.find(s=>s instanceof ke);r&&this._plugins.push(r)}addEventListener(t,e,o,r){return this._findPluginFor(e).addEventListener(t,e,o,r)}getZone(){return this._zone}_findPluginFor(t){let e=this._eventNameToPlugin.get(t);if(e)return e;if(e=this._plugins.find(r=>r.supports(t)),!e)throw new k(5101,!1);return this._eventNameToPlugin.set(t,e),e}static \u0275fac=function(e){return new(e||n)(v(Ne),v(y))};static \u0275prov=u({token:n,factory:n.\u0275fac})}return n})(),Fn="ng-app-id";Ln=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(t,e,o,r={}){this.doc=t,this.appId=e,this.nonce=o,Kr(t,e,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,e){for(let o of t)this.addUsage(o,this.inline,go);e?.forEach(o=>this.addUsage(o,this.external,kn))}removeStyles(t,e){for(let o of t)this.removeUsage(o,this.inline);e?.forEach(o=>this.removeUsage(o,this.external))}addUsage(t,e,o){let r=e.get(t);r?r.usage++:e.set(t,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,o(t,this.doc)))})}removeUsage(t,e){let o=e.get(t);o&&(o.usage--,o.usage<=0&&(po(o.elements),e.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])po(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[e,{elements:o}]of this.inline)o.push(this.addElement(t,go(e,this.doc)));for(let[e,{elements:o}]of this.external)o.push(this.addElement(t,kn(e,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,e){return this.nonce&&e.setAttribute("nonce",this.nonce),t.appendChild(e)}static \u0275fac=function(e){return new(e||n)(v(p),v(Bt),v(jt,8),v(bt))};static \u0275prov=u({token:n,factory:n.\u0275fac})}return n})(),In={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Nn=/%COMP%/g,_o="%COMP%",qr=`_nghost-${_o}`,Qr=`_ngcontent-${_o}`,Jr=!0,ta=new g("",{factory:()=>Jr});Bn=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(t,e,o,r,s,l,c=null,m=null){this.eventManager=t,this.sharedStylesHost=e,this.appId=o,this.removeStylesOnCompDestroy=r,this.doc=s,this.ngZone=l,this.nonce=c,this.tracingService=m,this.defaultRenderer=new Yt(t,s,l,this.tracingService)}createRenderer(t,e){if(!t||!e)return this.defaultRenderer;let o=this.getOrCreateRenderer(t,e);return o instanceof Le?o.applyToHost(t):o instanceof Zt&&o.applyStyles(),o}getOrCreateRenderer(t,e){let o=this.rendererByCompId,r=o.get(e.id);if(!r){let s=this.doc,l=this.ngZone,c=this.eventManager,m=this.sharedStylesHost,f=this.removeStylesOnCompDestroy,_=this.tracingService;switch(e.encapsulation){case ye.Emulated:r=new Le(c,m,e,this.appId,f,s,l,_);break;case ye.ShadowDom:return new Pe(c,t,e,s,l,this.nonce,_,m);case ye.ExperimentalIsolatedShadowDom:return new Pe(c,t,e,s,l,this.nonce,_);default:r=new Zt(c,m,e,f,s,l,_);break}o.set(e.id,r)}return r}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(e){return new(e||n)(v(Pn),v(Ln),v(Bt),v(ta),v(p),v(y),v(jt),v(Hi,8))};static \u0275prov=u({token:n,factory:n.\u0275fac})}return n})(),Yt=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,t,e,o){this.eventManager=i,this.doc=t,this.ngZone=e,this.tracingService=o}destroy(){}destroyNode=null;createElement(i,t){return t?this.doc.createElementNS(In[t]||t,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,t){(bo(i)?i.content:i).appendChild(t)}insertBefore(i,t,e){i&&(bo(i)?i.content:i).insertBefore(t,e)}removeChild(i,t){t.remove()}selectRootElement(i,t){let e=typeof i=="string"?this.doc.querySelector(i):i;if(!e)throw new k(-5104,!1);return t||(e.textContent=""),e}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,t,e,o){if(o){t=o+":"+t;let r=In[o];r?i.setAttributeNS(r,t,e):i.setAttribute(t,e)}else i.setAttribute(t,e)}removeAttribute(i,t,e){if(e){let o=In[e];o?i.removeAttributeNS(o,t):i.removeAttribute(`${e}:${t}`)}else i.removeAttribute(t)}addClass(i,t){i.classList.add(t)}removeClass(i,t){i.classList.remove(t)}setStyle(i,t,e,o){o&(yt.DashCase|yt.Important)?i.style.setProperty(t,e,o&yt.Important?"important":""):i.style[t]=e}removeStyle(i,t,e){e&yt.DashCase?i.style.removeProperty(t):i.style[t]=""}setProperty(i,t,e){i!=null&&(i[t]=e)}setValue(i,t){i.nodeValue=t}listen(i,t,e,o){if(typeof i=="string"&&(i=H().getGlobalEventTarget(this.doc,i),!i))throw new k(5102,!1);let r=this.decoratePreventDefault(e);return this.tracingService?.wrapEventListener&&(r=this.tracingService.wrapEventListener(i,t,r)),this.eventManager.addEventListener(i,t,r,o)}decoratePreventDefault(i){return t=>{if(t==="__ngUnwrap__")return i;i(t)===!1&&t.preventDefault()}}};Pe=class extends Yt{hostEl;sharedStylesHost;shadowRoot;constructor(i,t,e,o,r,s,l,c){super(i,o,r,l),this.hostEl=t,this.sharedStylesHost=c,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let m=e.styles;m=vo(e.id,m);for(let _ of m){let A=document.createElement("style");s&&A.setAttribute("nonce",s),A.textContent=_,this.shadowRoot.appendChild(A)}let f=e.getExternalStyles?.();if(f)for(let _ of f){let A=kn(_,o);s&&A.setAttribute("nonce",s),this.shadowRoot.appendChild(A)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,t){return super.appendChild(this.nodeOrShadowRoot(i),t)}insertBefore(i,t,e){return super.insertBefore(this.nodeOrShadowRoot(i),t,e)}removeChild(i,t){return super.removeChild(null,t)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Zt=class extends Yt{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,t,e,o,r,s,l,c){super(i,r,s,l),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=o;let m=e.styles;this.styles=c?vo(c,m):m,this.styleUrls=e.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Ui.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Le=class extends Zt{contentAttr;hostAttr;constructor(i,t,e,o,r,s,l,c){let m=o+"-"+e.id;super(i,t,e,r,s,l,c,m),this.contentAttr=ea(m),this.hostAttr=na(m)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,t){let e=super.createElement(i,t);return super.setAttribute(e,this.contentAttr,""),e}}});function ia(){return Xt=Xt||document.head.querySelector("base"),Xt?Xt.getAttribute("href"):null}function oa(n){return new URL(n,document.baseURI).pathname}function la(n,i,t){return cn(this,null,function*(){let e=b({rootComponent:n},ca(i,t));return io(e)})}function ca(n,i){return{platformRef:i?.platformRef,appProviders:[...Co,...n?.providers??[]],platformProviders:fa}}function da(){Be.makeCurrent()}function ua(){return new pn}function ha(){return Mi(document),document}var Be,Xt,je,ra,Do,aa,sa,wo,fa,ma,Co,pa,Eo=h(()=>{"use strict";At();d();d();yo();Be=class n extends $t{supportsDOMEvents=!0;static makeCurrent(){Sn(new n)}onAndCancel(i,t,e,o){return i.addEventListener(t,e,o),()=>{i.removeEventListener(t,e,o)}}dispatchEvent(i,t){i.dispatchEvent(t)}remove(i){i.remove()}createElement(i,t){return t=t||this.getDefaultDocument(),t.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,t){return t==="window"?window:t==="document"?i:t==="body"?i.body:null}getBaseHref(i){let t=ia();return t==null?null:oa(t)}resetBaseElement(){Xt=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return Mn(document.cookie,i)}},Xt=null;je=class{addToWindow(i){Y.getAngularTestability=(e,o=!0)=>{let r=i.findTestabilityInTree(e,o);if(r==null)throw new k(5103,!1);return r},Y.getAllAngularTestabilities=()=>i.getAllTestabilities(),Y.getAllAngularRootElements=()=>i.getAllRootElements();let t=e=>{let o=Y.getAllAngularTestabilities(),r=o.length,s=function(){r--,r==0&&e()};o.forEach(l=>{l.whenStable(s)})};Y.frameworkStabilizers||(Y.frameworkStabilizers=[]),Y.frameworkStabilizers.push(t)}findTestabilityInTree(i,t,e){if(t==null)return null;let o=i.getTestability(t);return o??(e?H().isShadowRoot(t)?this.findTestabilityInTree(i,t.host,!0):this.findTestabilityInTree(i,t.parentElement,!0):null)}},ra=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac})}return n})(),Do=["alt","control","meta","shift"],aa={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},sa={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},wo=(()=>{class n extends Gt{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,e,o,r){let s=n.parseEventName(e),l=n.eventCallback(s.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>H().onAndCancel(t,s.domEventName,l,r))}static parseEventName(t){let e=t.toLowerCase().split("."),o=e.shift();if(e.length===0||!(o==="keydown"||o==="keyup"))return null;let r=n._normalizeKey(e.pop()),s="",l=e.indexOf("code");if(l>-1&&(e.splice(l,1),s="code."),Do.forEach(m=>{let f=e.indexOf(m);f>-1&&(e.splice(f,1),s+=m+".")}),s+=r,e.length!=0||r.length===0)return null;let c={};return c.domEventName=o,c.fullKey=s,c}static matchEventFullKeyCode(t,e){let o=aa[t.key]||t.key,r="";return e.indexOf("code.")>-1&&(o=t.code,r="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),Do.forEach(s=>{if(s!==o){let l=sa[s];l(t)&&(r+=s+".")}}),r+=o,r===e)}static eventCallback(t,e,o){return r=>{n.matchEventFullKeyCode(r,t)&&o.runGuarded(()=>e(r))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(e){return new(e||n)(v(p))};static \u0275prov=u({token:n,factory:n.\u0275fac})}return n})();fa=[{provide:bt,useValue:Tn},{provide:Ti,useValue:da,multi:!0},{provide:p,useFactory:ha}],ma=[{provide:Gi,useClass:je},{provide:Wi,useClass:Ee},{provide:Ee,useClass:Ee}],Co=[{provide:Ai,useValue:"root"},{provide:pn,useFactory:ua},{provide:Ne,useClass:ke,multi:!0},{provide:Ne,useClass:wo,multi:!0},Bn,Ln,Pn,{provide:I,useExisting:Bn},{provide:Wt,useClass:ra},[]],pa=(()=>{class n{constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275mod=T({type:n});static \u0275inj=M({providers:[...Co,...ma],imports:[On,no]})}return n})()});var ed,Kt,ga,jn=h(()=>{"use strict";Eo();At();d();d();ed=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(e){return new(e||n)(v(p))};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Kt=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:function(e){let o=null;return e?o=new(e||n):o=v(ga),o},providedIn:"root"})}return n})(),ga=(()=>{class n extends Kt{_doc;constructor(t){super(),this._doc=t}sanitize(t,e){if(e==null)return null;switch(t){case Z.NONE:return e;case Z.HTML:return vt(e,"HTML")?_t(e):Bi(this._doc,String(e)).toString();case Z.STYLE:return vt(e,"Style")?_t(e):e;case Z.SCRIPT:if(vt(e,"Script"))return _t(e);throw new k(5200,!1);case Z.URL:return vt(e,"URL")?_t(e):Ni(String(e));case Z.RESOURCE_URL:if(vt(e,"ResourceURL"))return _t(e);throw new k(5201,!1);default:throw new k(5202,!1)}}bypassSecurityTrustHtml(t){return Fi(t)}bypassSecurityTrustStyle(t){return Ii(t)}bypassSecurityTrustScript(t){return ki(t)}bypassSecurityTrustUrl(t){return Pi(t)}bypassSecurityTrustResourceUrl(t){return Li(t)}static \u0275fac=function(e){return new(e||n)(v(p))};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()});var Vn,E,ot=h(()=>{"use strict";d();d();At();try{Vn=typeof Intl<"u"&&Intl.v8BreakIterator}catch(n){Vn=!1}E=(()=>{class n{_platformId=a(bt);isBrowser=this._platformId?mo(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Vn)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()});function So(){if(zn==null){let n=typeof document<"u"?document.head:null;zn=!!(n&&(n.createShadowRoot||n.attachShadow))}return zn}function Un(n){if(So()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function qt(){let n=typeof document<"u"&&document?document.activeElement:null;for(;n&&n.shadowRoot;){let i=n.shadowRoot.activeElement;if(i===n)break;n=i}return n}function F(n){return n.composedPath?n.composedPath()[0]:n.target}var zn,Qt=h(()=>{"use strict"});function Hn(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Ao=h(()=>{"use strict"});var Ve,$,ze=h(()=>{"use strict";d();d();Ve=new WeakMap,$=(()=>{class n{_appRef;_injector=a(C);_environmentInjector=a(pt);load(t){let e=this._appRef=this._appRef||this._injector.get(Ct),o=Ve.get(e);o||(o={loaders:new Set,refs:[]},Ve.set(e,o),e.onDestroy(()=>{Ve.get(e)?.refs.forEach(r=>r.destroy()),Ve.delete(e)})),o.loaders.has(t)||(o.loaders.add(t),o.refs.push(Me(t,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()});function K(n){return n==null?"":typeof n=="string"?n:`${n}px`}var xo=h(()=>{"use strict"});function Jt(n){return Array.isArray(n)?n:[n]}var $n=h(()=>{"use strict"});function te(n,i=0){return Ro(n)?Number(n):arguments.length===2?i:0}function Ro(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function W(n){return n instanceof x?n.nativeElement:n}var Ue=h(()=>{"use strict";d()});function va(n){let i=n?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?_a.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var ba,_a,ut,He=h(()=>{"use strict";d();d();ba=new g("cdk-dir-doc",{providedIn:"root",factory:()=>a(p)}),_a=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;ut=(()=>{class n{get value(){return this.valueSignal()}valueSignal=Lt("ltr");change=new j;constructor(){let t=a(ba,{optional:!0});if(t){let e=t.body?t.body.dir:null,o=t.documentElement?t.documentElement.dir:null;this.valueSignal.set(va(e||o||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()});function We(){if(ht==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return ht=!1,ht;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)ht=!0;else{let n=Element.prototype.scrollTo;n?ht=!/\{\s*\[native code\]\s*\}/.test(n.toString()):ht=!1}}return ht}function xt(){if(typeof document!="object"||!document)return B.NORMAL;if($e==null){let n=document.createElement("div"),i=n.style;n.dir="rtl",i.width="1px",i.overflow="auto",i.visibility="hidden",i.pointerEvents="none",i.position="absolute";let t=document.createElement("div"),e=t.style;e.width="2px",e.height="1px",n.appendChild(t),document.body.appendChild(n),$e=B.NORMAL,n.scrollLeft===0&&(n.scrollLeft=1,$e=n.scrollLeft===0?B.NEGATED:B.INVERTED),n.remove()}return $e}var B,$e,ht,Wn=h(()=>{"use strict";B=(function(n){return n[n.NORMAL=0]="NORMAL",n[n.NEGATED=1]="NEGATED",n[n.INVERTED=2]="INVERTED",n})(B||{})});var Dd,Da=h(()=>{"use strict";d();Dd=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=T({type:n});static \u0275inj=M({})}return n})()});var wa,Oo,Mo,Ca,To,Gn=h(()=>{"use strict";d();d();ct();Nt();ot();Ue();He();Wn();wa=20,Oo=(()=>{class n{_ngZone=a(y);_platform=a(E);_renderer=a(I).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new D;_scrolledCount=0;scrollContainers=new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let e=this.scrollContainers.get(t);e&&(e.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=wa){return this._platform.isBrowser?new pe(e=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let o=t>0?this._scrolled.pipe(fn(t)).subscribe(e):this._scrolled.subscribe(e);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):ge()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,e)=>this.deregister(e)),this._scrolled.complete()}ancestorScrolled(t,e){let o=this.getAncestorScrollContainers(t);return this.scrolled(e).pipe(st(r=>!r||o.indexOf(r)>-1))}getAncestorScrollContainers(t){let e=[];return this.scrollContainers.forEach((o,r)=>{this._scrollableContainsElement(r,t)&&e.push(r)}),e}_scrollableContainsElement(t,e){let o=W(e),r=t.getElementRef().nativeElement;do if(o==r)return!0;while(o=o.parentElement);return!1}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Mo=(()=>{class n{elementRef=a(x);scrollDispatcher=a(Oo);ngZone=a(y);dir=a(ut,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new D;_renderer=a(X);_cleanupScroll;_elementScrolled=new D;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",t=>this._elementScrolled.next(t))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(t){let e=this.elementRef.nativeElement,o=this.dir&&this.dir.value=="rtl";t.left==null&&(t.left=o?t.end:t.start),t.right==null&&(t.right=o?t.start:t.end),t.bottom!=null&&(t.top=e.scrollHeight-e.clientHeight-t.bottom),o&&xt()!=B.NORMAL?(t.left!=null&&(t.right=e.scrollWidth-e.clientWidth-t.left),xt()==B.INVERTED?t.left=t.right:xt()==B.NEGATED&&(t.left=t.right?-t.right:t.right)):t.right!=null&&(t.left=e.scrollWidth-e.clientWidth-t.right),this._applyScrollToOptions(t)}_applyScrollToOptions(t){let e=this.elementRef.nativeElement;We()?e.scrollTo(t):(t.top!=null&&(e.scrollTop=t.top),t.left!=null&&(e.scrollLeft=t.left))}measureScrollOffset(t){let e="left",o="right",r=this.elementRef.nativeElement;if(t=="top")return r.scrollTop;if(t=="bottom")return r.scrollHeight-r.clientHeight-r.scrollTop;let s=this.dir&&this.dir.value=="rtl";return t=="start"?t=s?o:e:t=="end"&&(t=s?e:o),s&&xt()==B.INVERTED?t==e?r.scrollWidth-r.clientWidth-r.scrollLeft:r.scrollLeft:s&&xt()==B.NEGATED?t==e?r.scrollLeft+r.scrollWidth-r.clientWidth:-r.scrollLeft:t==e?r.scrollLeft:r.scrollWidth-r.clientWidth-r.scrollLeft}static \u0275fac=function(e){return new(e||n)};static \u0275dir=S({type:n,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return n})(),Ca=20,To=(()=>{class n{_platform=a(E);_listeners;_viewportSize=null;_change=new D;_document=a(p);constructor(){let t=a(y),e=a(I).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=r=>this._change.next(r);this._listeners=[e.listen("window","resize",o),e.listen("window","orientationchange",o)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:e,height:o}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+o,right:t.left+e,height:o,width:e}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,e=this._getWindow(),o=t.documentElement,r=o.getBoundingClientRect(),s=-r.top||t.body?.scrollTop||e.scrollY||o.scrollTop||0,l=-r.left||t.body?.scrollLeft||e.scrollX||o.scrollLeft||0;return{top:s,left:l}}change(t=Ca){return t>0?this._change.pipe(fn(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()});var Yn,G,Ge=h(()=>{"use strict";d();d();Yn={},G=class n{_appId=a(Bt);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,t=!1){return this._appId!=="ng"&&(i+=this._appId),Yn.hasOwnProperty(i)||(Yn[i]=0),`${i}${t?n._infix+"-":""}${Yn[i]++}`}static \u0275fac=function(t){return new(t||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}});var ee,Rt,Ot,Zn,Mt,Ye,ne,Ze=h(()=>{"use strict";d();d();ee=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},Rt=class extends ee{component;viewContainerRef;injector;projectableNodes;bindings;constructor(i,t,e,o,r){super(),this.component=i,this.viewContainerRef=t,this.injector=e,this.projectableNodes=o,this.bindings=r||null}},Ot=class extends ee{templateRef;viewContainerRef;context;injector;constructor(i,t,e,o){super(),this.templateRef=i,this.viewContainerRef=t,this.context=e,this.injector=o}get origin(){return this.templateRef.elementRef}attach(i,t=this.context){return this.context=t,super.attach(i)}detach(){return this.context=void 0,super.detach()}},Zn=class extends ee{element;constructor(i){super(),this.element=i instanceof x?i.nativeElement:i}},Mt=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof Rt)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof Ot)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof Zn)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Ye=class extends Mt{outletElement;_appRef;_defaultInjector;constructor(i,t,e){super(),this.outletElement=i,this._appRef=t,this._defaultInjector=e}attachComponentPortal(i){let t;if(i.viewContainerRef){let e=i.injector||i.viewContainerRef.injector,o=e.get(De,null,{optional:!0})||void 0;t=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:e,ngModuleRef:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),this.setDisposeFn(()=>t.destroy())}else{let e=this._appRef,o=i.injector||this._defaultInjector||C.NULL,r=o.get(pt,e.injector);t=Me(i.component,{elementInjector:o,environmentInjector:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),e.attachView(t.hostView),this.setDisposeFn(()=>{e.viewCount>0&&e.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=i,t}attachTemplatePortal(i){let t=i.viewContainerRef,e=t.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return e.rootNodes.forEach(o=>this.outletElement.appendChild(o)),e.detectChanges(),this.setDisposeFn(()=>{let o=t.indexOf(e);o!==-1&&t.remove(o)}),this._attachedPortal=i,e}attachDomPortal=i=>{let t=i.element;t.parentNode;let e=this.outletElement.ownerDocument.createComment("dom-portal");t.parentNode.insertBefore(e,t),this.outletElement.appendChild(t),this._attachedPortal=i,super.setDisposeFn(()=>{e.parentNode&&e.parentNode.replaceChild(t,e)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}},ne=(()=>{class n extends Mt{_moduleRef=a(De,{optional:!0});_document=a(p);_viewContainerRef=a(wt);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}attached=new j;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);let e=t.viewContainerRef!=null?t.viewContainerRef:this._viewContainerRef,o=e.createComponent(t.component,{index:e.length,injector:t.injector||e.injector,projectableNodes:t.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:t.bindings||void 0});return e!==this._viewContainerRef&&this._getRootNode().appendChild(o.hostView.rootNodes[0]),super.setDisposeFn(()=>o.destroy()),this._attachedPortal=t,this._attachedRef=o,this.attached.emit(o),o}attachTemplatePortal(t){t.setAttachedHost(this);let e=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=e,this.attached.emit(e),e}attachDomPortal=t=>{let e=t.element;e.parentNode;let o=this._document.createComment("dom-portal");t.setAttachedHost(this),e.parentNode.insertBefore(o,e),this._getRootNode().appendChild(e),this._attachedPortal=t,super.setDisposeFn(()=>{o.parentNode&&o.parentNode.replaceChild(e,o)})};_getRootNode(){let t=this._viewContainerRef.element.nativeElement;return t.nodeType===t.ELEMENT_NODE?t:t.parentNode}static \u0275fac=function(e){return new(e||n)};static \u0275dir=S({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[L]})}return n})()});function Xe(n,...i){return i.length?i.some(t=>n[t]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var Xn=h(()=>{"use strict"});function ie(n){return new Ke(n.get(To),n.get(p))}function Io(n,i){let t=typeof ShadowRoot<"u"&&ShadowRoot,e=i;for(;e;){if(e===n)return!0;e=t&&e instanceof ShadowRoot?e.host:e.parentNode}return!1}function Vo(n){return n&&n.nodeType===1}function oe(n){return new Qe}function Qn(n,i){n.get($).load(jo);let t=n.get(qn),e=n.get(p),o=n.get(G),r=n.get(Ct),s=n.get(ut),l=n.get(X,null,{optional:!0})||n.get(I).createRenderer(null,null),c=new Tt(i),m=n.get(zo,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||s.value,"showPopover"in e.body?c.usePopover=i?.usePopover??m:c.usePopover=!1;let f=e.createElement("div"),_=e.createElement("div");f.id=o.getId("cdk-overlay-"),f.classList.add("cdk-overlay-pane"),_.appendChild(f),c.usePopover&&(_.setAttribute("popover","manual"),_.classList.add("cdk-overlay-popover"));let A=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return Vo(A)?A.after(_):A?.type==="parent"?A.element.appendChild(_):t.getContainerElement().appendChild(_),new Ft(new Ye(f,r,n),_,f,c,n.get(y),n.get(No),e,n.get(Ie),n.get(Bo),i?.disableAnimations??n.get(ve,null,{optional:!0})==="NoopAnimations",n.get(pt),l)}var Fo,Ke,qe,Tt,Lo,No,Bo,jo,qn,Kn,Ft,ko,Qe,zo,Jn=h(()=>{"use strict";d();d();At();ot();Qt();Ao();ze();ct();xo();$n();Gn();Wn();Ge();He();Ze();Fo=We();Ke=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,t){this._viewportRuler=i,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||"",this._previousHTMLStyles.top=i.style.top||"",i.style.left=K(-this._previousScrollPosition.left),i.style.top=K(-this._previousScrollPosition.top),i.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,t=this._document.body,e=i.style,o=t.style,r=e.scrollBehavior||"",s=o.scrollBehavior||"";this._isEnabled=!1,e.left=this._previousHTMLStyles.left,e.top=this._previousHTMLStyles.top,i.classList.remove("cdk-global-scrollblock"),Fo&&(e.scrollBehavior=o.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Fo&&(e.scrollBehavior=r,o.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let t=this._document.documentElement,e=this._viewportRuler.getViewportSize();return t.scrollHeight>e.height||t.scrollWidth>e.width}},qe=class{enable(){}disable(){}attach(){}},Tt=class{positionStrategy;scrollStrategy=new qe;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let t=Object.keys(i);for(let e of t)i[e]!==void 0&&(this[e]=i[e])}}},Lo=(()=>{class n{_attachedOverlays=[];_document=a(p);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let e=this._attachedOverlays.indexOf(t);e>-1&&this._attachedOverlays.splice(e,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,e,o){return o.observers.length<1?!1:t.eventPredicate?t.eventPredicate(e):!0}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),No=(()=>{class n extends Lo{_ngZone=a(y);_renderer=a(I).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let e=this._attachedOverlays;for(let o=e.length-1;o>-1;o--){let r=e[o];if(this.canReceiveEvent(r,t,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(t));break}}};static \u0275fac=(()=>{let t;return function(o){return(t||(t=tt(n)))(o||n)}})();static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Bo=(()=>{class n extends Lo{_platform=a(E);_ngZone=a(y);_renderer=a(I).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let e=this._document.body,o={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(e,"pointerdown",this._pointerDownListener,o),r.listen(e,"click",this._clickListener,o),r.listen(e,"auxclick",this._clickListener,o),r.listen(e,"contextmenu",this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=e.style.cursor,e.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=F(t)};_clickListener=t=>{let e=F(t),o=t.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:e;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let s=r.length-1;s>-1;s--){let l=r[s],c=l._outsidePointerEvents;if(!(!l.hasAttached()||!this.canReceiveEvent(l,t,c))){if(Io(l.overlayElement,e)||Io(l.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>c.next(t)):c.next(t)}}};static \u0275fac=(()=>{let t;return function(o){return(t||(t=tt(n)))(o||n)}})();static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();jo=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=R({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(e,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),qn=(()=>{class n{_platform=a(E);_containerElement;_document=a(p);_styleLoader=a($);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t="cdk-overlay-container";if(this._platform.isBrowser||Hn()){let o=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let r=0;r<o.length;r++)o[r].remove()}let e=this._document.createElement("div");e.classList.add(t),Hn()?e.setAttribute("platform","test"):this._platform.isBrowser||e.setAttribute("platform","server"),this._document.body.appendChild(e),this._containerElement=e}_loadStyles(){this._styleLoader.load(jo)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Kn=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,t,e,o){this._renderer=t,this._ngZone=e,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=t.listen(this.element,"click",o)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};Ft=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new D;_attachments=new D;_detachments=new D;_positionStrategy;_scrollStrategy;_locationChanges=dn.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new D;_outsidePointerEvents=new D;_afterNextRenderRef;constructor(i,t,e,o,r,s,l,c,m,f=!1,_,A){this._portalOutlet=i,this._host=t,this._pane=e,this._config=o,this._ngZone=r,this._keyboardDispatcher=s,this._document=l,this._location=c,this._outsideClickDispatcher=m,this._animationsDisabled=f,this._injector=_,this._renderer=A,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=et(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof t?.onDestroy=="function"&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=b(b({},this._config),i),this._updateElementSize()}setDirection(i){this._config=mt(b({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=K(this._config.width),i.height=K(this._config.height),i.minWidth=K(this._config.minWidth),i.minHeight=K(this._config.minHeight),i.maxWidth=K(this._config.maxWidth),i.maxHeight=K(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Vo(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(i){}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Kn(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,t,e){let o=Jt(t||[]).filter(r=>!!r);o.length&&(e?i.classList.add(...o):i.classList.remove(...o))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=et(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(t){if(i)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}},ko="cdk-global-overlay-wrapper";Qe=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let t=i.getConfig();this._overlayRef=i,this._width&&!t.width&&i.updateSize({width:this._width}),this._height&&!t.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(ko),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,e=this._overlayRef.getConfig(),{width:o,height:r,maxWidth:s,maxHeight:l}=e,c=(o==="100%"||o==="100vw")&&(!s||s==="100%"||s==="100vw"),m=(r==="100%"||r==="100vh")&&(!l||l==="100%"||l==="100vh"),f=this._xPosition,_=this._xOffset,A=this._overlayRef.getConfig().direction==="rtl",at="",Q="",O="";c?O="flex-start":f==="center"?(O="center",A?Q=_:at=_):A?f==="left"||f==="end"?(O="flex-end",at=_):(f==="right"||f==="start")&&(O="flex-start",Q=_):f==="left"||f==="start"?(O="flex-start",at=_):(f==="right"||f==="end")&&(O="flex-end",Q=_),i.position=this._cssPosition,i.marginLeft=c?"0":at,i.marginTop=m?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=c?"0":Q,t.justifyContent=O,t.alignItems=m?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,e=t.style;t.classList.remove(ko),e.justifyContent=e.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}},zo=new g("OVERLAY_DEFAULT_CONFIG")});var Ho=h(()=>{"use strict";Jn()});function re(n){return n.buttons===0||n.detail===0}function ae(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var ti=h(()=>{"use strict"});function $o(){if(se==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>se=!0}))}finally{se=se||!1}return se}function It(n){return $o()?n:!!n.capture}var se,ei=h(()=>{"use strict"});var Wo,Go,Yo,ni,Zo,le,Xo,Je,ce,ii=h(()=>{"use strict";d();d();ct();Nt();ti();Qt();ot();ei();Ue();Wo=new g("cdk-input-modality-detector-options"),Go={ignoreKeys:[18,17,224,91,16]},Yo=650,ni={passive:!0,capture:!0},Zo=(()=>{class n{_platform=a(E);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Di(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(e=>e===t.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=F(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<Yo||(this._modality.next(re(t)?"keyboard":"mouse"),this._mostRecentTarget=F(t))};_onTouchstart=t=>{if(ae(t)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=F(t)};constructor(){let t=a(y),e=a(p),o=a(Wo,{optional:!0});if(this._options=b(b({},Go),o),this.modalityDetected=this._modality.pipe(_e(1)),this.modalityChanged=this.modalityDetected.pipe(mn()),this._platform.isBrowser){let r=a(I).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[r.listen(e,"keydown",this._onKeydown,ni),r.listen(e,"mousedown",this._onMousedown,ni),r.listen(e,"touchstart",this._onTouchstart,ni)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),le=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(le||{}),Xo=new g("cdk-focus-monitor-default-options"),Je=It({passive:!0,capture:!0}),ce=(()=>{class n{_ngZone=a(y);_platform=a(E);_inputModalityDetector=a(Zo);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=a(p);_stopInputModalityDetector=new D;constructor(){let t=a(Xo,{optional:!0});this._detectionMode=t?.detectionMode||le.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let e=F(t);for(let o=e;o;o=o.parentElement)t.type==="focus"?this._onFocus(t,o):this._onBlur(t,o)};monitor(t,e=!1){let o=W(t);if(!this._platform.isBrowser||o.nodeType!==1)return ge();let r=Un(o)||this._document,s=this._elementInfo.get(o);if(s)return e&&(s.checkChildren=!0),s.subject;let l={checkChildren:e,subject:new D,rootNode:r};return this._elementInfo.set(o,l),this._registerGlobalListeners(l),l.subject}stopMonitoring(t){let e=W(t),o=this._elementInfo.get(e);o&&(o.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(o))}focusVia(t,e,o){let r=W(t),s=this._document.activeElement;r===s?this._getClosestElementsInfo(r).forEach(([l,c])=>this._originChanged(l,e,c)):(this._setOrigin(e),typeof r.focus=="function"&&r.focus(o))}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===le.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,e){t.classList.toggle("cdk-focused",!!e),t.classList.toggle("cdk-touch-focused",e==="touch"),t.classList.toggle("cdk-keyboard-focused",e==="keyboard"),t.classList.toggle("cdk-mouse-focused",e==="mouse"),t.classList.toggle("cdk-program-focused",e==="program")}_setOrigin(t,e=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&e,this._detectionMode===le.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?Yo:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(t,e){let o=this._elementInfo.get(e),r=F(t);!o||!o.checkChildren&&e!==r||this._originChanged(e,this._getFocusOrigin(r),o)}_onBlur(t,e){let o=this._elementInfo.get(e);!o||o.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(o,null))}_emitOrigin(t,e){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(e))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let e=t.rootNode,o=this._rootNodeFocusListenerCount.get(e)||0;o||this._ngZone.runOutsideAngular(()=>{e.addEventListener("focus",this._rootNodeFocusAndBlurListener,Je),e.addEventListener("blur",this._rootNodeFocusAndBlurListener,Je)}),this._rootNodeFocusListenerCount.set(e,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Pt(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(t){let e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){let o=this._rootNodeFocusListenerCount.get(e);o>1?this._rootNodeFocusListenerCount.set(e,o-1):(e.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Je),e.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Je),this._rootNodeFocusListenerCount.delete(e))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,e,o){this._setClasses(t,e),this._emitOrigin(o,e),this._lastFocusOrigin=e}_getClosestElementsInfo(t){let e=[];return this._elementInfo.forEach((o,r)=>{(r===t||o.checkChildren&&r.contains(t))&&e.push([r,o])}),e}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:e,mostRecentModality:o}=this._inputModalityDetector;if(o!=="mouse"||!e||e===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let r=t.labels;if(r){for(let s=0;s<r.length;s++)if(r[s].contains(e))return!0}return!1}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()});function Sa(){if(tn===void 0&&(tn=null,typeof window<"u")){let n=window;n.trustedTypes!==void 0&&(tn=n.trustedTypes.createPolicy("angular#components",{createHTML:i=>i}))}return tn}function Aa(n){return Sa()?.createHTML(n)||n}function qo(n,i,t){let e=t.sanitize(Z.HTML,i);n.innerHTML=Aa(e||"")}var Ko,tn,en=h(()=>{"use strict";ze();d();d();Ko=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=R({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(e,o){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})()});function xa(n,i){if(!Qo.has(n))try{ft||(ft=document.createElement("style"),i&&ft.setAttribute("nonce",i),ft.setAttribute("type","text/css"),document.head.appendChild(ft)),ft.sheet&&(ft.sheet.insertRule(`@media ${n} {body{ }}`,0),Qo.add(n))}catch(t){console.error(t)}}function Ra(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}function Jo(n){return n.map(i=>i.split(",")).reduce((i,t)=>i.concat(t)).map(i=>i.trim())}var Qo,ft,nn,Oa,tr=h(()=>{"use strict";d();d();ct();Nt();ot();$n();Qo=new Set,nn=(()=>{class n{_platform=a(E);_nonce=a(jt,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Ra}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&xa(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();Oa=(()=>{class n{_mediaMatcher=a(nn);_zone=a(y);_queries=new Map;_destroySubject=new D;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return Jo(Jt(t)).some(o=>this._registerQuery(o).mql.matches)}observe(t){let o=Jo(Jt(t)).map(s=>this._registerQuery(s).observable),r=wi(o);return r=Ci(r.pipe(J(1)),r.pipe(_e(1),Si(0))),r.pipe(hn(s=>{let l={matches:!1,breakpoints:{}};return s.forEach(({matches:c,query:m})=>{l.matches=l.matches||c,l.breakpoints[m]=c}),l}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let e=this._mediaMatcher.matchMedia(t),r={observable:new pe(s=>{let l=c=>this._zone.run(()=>s.next(c));return e.addListener(l),()=>{e.removeListener(l)}}).pipe(lt(e),hn(({matches:s})=>({query:t,matches:s})),Pt(this._destroySubject)),mql:e};return this._queries.set(t,r),r}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()});function Ma(n){try{return n.frameElement}catch(i){return null}}function Ta(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects=="function"&&n.getClientRects().length)}function Fa(n){let i=n.nodeName.toLowerCase();return i==="input"||i==="select"||i==="button"||i==="textarea"}function Ia(n){return Pa(n)&&n.type=="hidden"}function ka(n){return La(n)&&n.hasAttribute("href")}function Pa(n){return n.nodeName.toLowerCase()=="input"}function La(n){return n.nodeName.toLowerCase()=="a"}function nr(n){if(!n.hasAttribute("tabindex")||n.tabIndex===void 0)return!1;let i=n.getAttribute("tabindex");return!!(i&&!isNaN(parseInt(i,10)))}function er(n){if(!nr(n))return null;let i=parseInt(n.getAttribute("tabindex")||"",10);return isNaN(i)?-1:i}function Na(n){let i=n.nodeName.toLowerCase(),t=i==="input"&&n.type;return t==="text"||t==="password"||i==="select"||i==="textarea"}function Ba(n){return Ia(n)?!1:Fa(n)||ka(n)||n.hasAttribute("contenteditable")||nr(n)}function ja(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var ri,oi,ai,ir,or,Va,za,si=h(()=>{"use strict";d();d();ot();ze();en();jn();ri=(()=>{class n{_platform=a(E);constructor(){}isDisabled(t){return t.hasAttribute("disabled")}isVisible(t){return Ta(t)&&getComputedStyle(t).visibility==="visible"}isTabbable(t){if(!this._platform.isBrowser)return!1;let e=Ma(ja(t));if(e&&(er(e)===-1||!this.isVisible(e)))return!1;let o=t.nodeName.toLowerCase(),r=er(t);return t.hasAttribute("contenteditable")?r!==-1:o==="iframe"||o==="object"||this._platform.WEBKIT&&this._platform.IOS&&!Na(t)?!1:o==="audio"?t.hasAttribute("controls")?r!==-1:!1:o==="video"?r===-1?!1:r!==null?!0:this._platform.FIREFOX||t.hasAttribute("controls"):t.tabIndex>=0}isFocusable(t,e){return Ba(t)&&!this.isDisabled(t)&&(e?.ignoreVisibility||this.isVisible(t))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();oi=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_enabled=!0;constructor(i,t,e,o,r=!1,s){this._element=i,this._checker=t,this._ngZone=e,this._document=o,this._injector=s,r||this.attachAnchors()}destroy(){let i=this._startAnchor,t=this._endAnchor;i&&(i.removeEventListener("focus",this.startAnchorListener),i.remove()),t&&(t.removeEventListener("focus",this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let t=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i=="start"?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let t=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(t){if(!this._checker.isFocusable(t)){let e=this._getFirstTabbableElement(t);return e?.focus(i),!!e}return t.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let t=this._getRegionBoundary("start");return t&&t.focus(i),!!t}focusLastTabbableElement(i){let t=this._getRegionBoundary("end");return t&&t.focus(i),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let t=i.children;for(let e=0;e<t.length;e++){let o=t[e].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[e]):null;if(o)return o}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let t=i.children;for(let e=t.length-1;e>=0;e--){let o=t[e].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[e]):null;if(o)return o}return null}_createAnchor(){let i=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add("cdk-visually-hidden"),i.classList.add("cdk-focus-trap-anchor"),i.setAttribute("aria-hidden","true"),i}_toggleAnchorTabIndex(i,t){i?t.setAttribute("tabindex","0"):t.removeAttribute("tabindex")}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){this._injector?et(i,{injector:this._injector}):setTimeout(i)}},ai=(()=>{class n{_checker=a(ri);_ngZone=a(y);_document=a(p);_injector=a(C);constructor(){a($).load(Ko)}create(t,e=!1){return new oi(t,this._checker,this._ngZone,this._document,e,this._injector)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ir=new g("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),or=new g("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),Va=0,za=(()=>{class n{_ngZone=a(y);_defaultOptions=a(or,{optional:!0});_liveElement;_document=a(p);_sanitizer=a(Kt);_previousTimeout;_currentPromise;_currentResolve;constructor(){let t=a(ir,{optional:!0});this._liveElement=t||this._createLiveElement()}announce(t,...e){let o=this._defaultOptions,r,s;return e.length===1&&typeof e[0]=="number"?s=e[0]:[r,s]=e,this.clear(),clearTimeout(this._previousTimeout),r||(r=o&&o.politeness?o.politeness:"polite"),s==null&&o&&(s=o.duration),this._liveElement.setAttribute("aria-live",r),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(l=>this._currentResolve=l)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!t||typeof t=="string"?this._liveElement.textContent=t:qo(this._liveElement,t,this._sanitizer),typeof s=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),s)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let t="cdk-live-announcer-element",e=this._document.getElementsByClassName(t),o=this._document.createElement("div");for(let r=0;r<e.length;r++)e[r].remove();return o.classList.add(t),o.classList.add("cdk-visually-hidden"),o.setAttribute("aria-atomic","true"),o.setAttribute("aria-live","polite"),o.id=`cdk-live-announcer-${Va++}`,this._document.body.appendChild(o),o}_exposeAnnouncerToModals(t){let e=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let o=0;o<e.length;o++){let r=e[o],s=r.getAttribute("aria-owns");s?s.indexOf(t)===-1&&r.setAttribute("aria-owns",s+" "+t):r.setAttribute("aria-owns",t)}}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()});function Ha(n,i){}function Ya(n){let i=Lt(n),t=new j;return{valueSignal:i,get value(){return i()},change:t,ngOnDestroy(){t.complete()}}}function li(n,i){let t=n.length;for(;t--;)i(n[t])}var rt,ci,de,$a,Wa,Ga,ar,sr=h(()=>{"use strict";d();d();ct();Ze();si();ii();ot();Qt();Jn();Nt();Xn();Ge();He();rt=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext},ci=(()=>{class n extends Mt{_elementRef=a(x);_focusTrapFactory=a(ai);_config;_interactivityChecker=a(ri);_ngZone=a(y);_focusMonitor=a(ce);_renderer=a(X);_changeDetectorRef=a(Ht);_injector=a(C);_platform=a(E);_document=a(p);_portalOutlet;_focusTrapped=new D;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=a(rt,{optional:!0})||new rt,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){let e=this._ariaLabelledByQueue.indexOf(t);e>-1&&(this._ariaLabelledByQueue.splice(e,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}attachDomPortal=t=>{this._portalOutlet.hasAttached();let e=this._portalOutlet.attachDomPortal(t);return this._contentAttached(),e};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let o=()=>{r(),s(),t.removeAttribute("tabindex")},r=this._renderer.listen(t,"blur",o),s=this._renderer.listen(t,"mousedown",o)})),t.focus(e)}_focusByCssSelector(t,e){let o=this._elementRef.nativeElement.querySelector(t);o&&this._forceFocus(o,e)}_trapFocus(t){this._isDestroyed||et(()=>{let e=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||e.focus(t);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(t)||this._focusDialogContainer(t);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',t);break;default:this._focusByCssSelector(this._config.autoFocus,t);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let t=this._config.restoreFocus,e=null;if(typeof t=="string"?e=this._document.querySelector(t):typeof t=="boolean"?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&typeof e.focus=="function"){let o=qt(),r=this._elementRef.nativeElement;(!o||o===this._document.body||o===r||r.contains(o))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(t){this._elementRef.nativeElement.focus?.(t)}_containsFocus(){let t=this._elementRef.nativeElement,e=qt();return t===e||t.contains(e)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=qt()))}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=R({type:n,selectors:[["cdk-dialog-container"]],viewQuery:function(e,o){if(e&1&&yn(ne,7),e&2){let r;Dn(r=wn())&&(o._portalOutlet=r.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(e,o){e&2&&dt("id",o._config.id||null)("role",o._config.role)("aria-modal",o._config.ariaModal)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null)},features:[L],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,o){e&1&&Ce(0,Ha,0,0,"ng-template",0)},dependencies:[ne],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return n})(),de=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new D;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(i,t){this.overlayRef=i,this.config=t,this.disableClose=t.disableClose,this.backdropClick=i.backdropClick(),this.keydownEvents=i.keydownEvents(),this.outsidePointerEvents=i.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===27&&!this.disableClose&&!Xe(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=i.detachments().subscribe(()=>{t.closeOnOverlayDetachments!==!1&&this.close()})}close(i,t){if(this._canClose(i)){let e=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),e.next(i),e.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(i="",t=""){return this.overlayRef.updateSize({width:i,height:t}),this}addPanelClass(i){return this.overlayRef.addPanelClass(i),this}removePanelClass(i){return this.overlayRef.removePanelClass(i),this}_canClose(i){let t=this.config;return!!this.containerInstance&&(!t.closePredicate||t.closePredicate(i,t,this.componentInstance))}},$a=new g("DialogScrollStrategy",{providedIn:"root",factory:()=>{let n=a(C);return()=>ie(n)}}),Wa=new g("DialogData"),Ga=new g("DefaultDialogConfig");ar=(()=>{class n{_injector=a(C);_defaultOptions=a(Ga,{optional:!0});_parentDialog=a(n,{optional:!0,skipSelf:!0});_overlayContainer=a(qn);_idGenerator=a(G);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new D;_afterOpenedAtThisLevel=new D;_ariaHiddenElements=new Map;_scrollStrategy=a($a);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=be(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(lt(void 0)));constructor(){}open(t,e){let o=this._defaultOptions||new rt;e=b(b({},o),e),e.id=e.id||this._idGenerator.getId("cdk-dialog-"),e.id&&this.getDialogById(e.id);let r=this._getOverlayConfig(e),s=Qn(this._injector,r),l=new de(s,e),c=this._attachContainer(s,l,e);if(l.containerInstance=c,!this.openDialogs.length){let m=this._overlayContainer.getContainerElement();c._focusTrapped?c._focusTrapped.pipe(J(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(m)}):this._hideNonDialogContentFromAssistiveTechnology(m)}return this._attachDialogContent(t,l,c,e),this.openDialogs.push(l),l.closed.subscribe(()=>this._removeOpenDialog(l,!0)),this.afterOpened.next(l),l}closeAll(){li(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){li(this._openDialogsAtThisLevel,t=>{t.config.closeOnDestroy===!1&&this._removeOpenDialog(t,!1)}),li(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){let e=new Tt({positionStrategy:t.positionStrategy||oe().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation,disableAnimations:t.disableAnimations});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,o){let r=o.injector||o.viewContainerRef?.injector,s=[{provide:rt,useValue:o},{provide:de,useValue:e},{provide:Ft,useValue:t}],l;o.container?typeof o.container=="function"?l=o.container:(l=o.container.type,s.push(...o.container.providers(o))):l=ci;let c=new Rt(l,o.viewContainerRef,C.create({parent:r||this._injector,providers:s}));return t.attach(c).instance}_attachDialogContent(t,e,o,r){if(t instanceof Dt){let s=this._createInjector(r,e,o,void 0),l={$implicit:r.data,dialogRef:e};r.templateContext&&(l=b(b({},l),typeof r.templateContext=="function"?r.templateContext():r.templateContext)),o.attachTemplatePortal(new Ot(t,null,l,s))}else{let s=this._createInjector(r,e,o,this._injector),l=o.attachComponentPortal(new Rt(t,r.viewContainerRef,s));e.componentRef=l,e.componentInstance=l.instance}}_createInjector(t,e,o,r){let s=t.injector||t.viewContainerRef?.injector,l=[{provide:Wa,useValue:t.data},{provide:de,useValue:e}];return t.providers&&(typeof t.providers=="function"?l.push(...t.providers(e,t,o)):l.push(...t.providers)),t.direction&&(!s||!s.get(ut,null,{optional:!0}))&&l.push({provide:ut,useValue:Ya(t.direction)}),C.create({parent:s||r,providers:l})}_removeOpenDialog(t,e){let o=this.openDialogs.indexOf(t);o>-1&&(this.openDialogs.splice(o,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((r,s)=>{r?s.setAttribute("aria-hidden",r):s.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(t){if(t.parentElement){let e=t.parentElement.children;for(let o=e.length-1;o>-1;o--){let r=e[o];r!==t&&r.nodeName!=="SCRIPT"&&r.nodeName!=="STYLE"&&!r.hasAttribute("aria-live")&&!r.hasAttribute("popover")&&(this._ariaHiddenElements.set(r,r.getAttribute("aria-hidden")),r.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()});var di=h(()=>{"use strict";Ue()});var df,lr=h(()=>{"use strict";tr();df={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"}});function Xa(){return a(Za,{optional:!0})?.animationsDisabled||a(ve,{optional:!0})==="NoopAnimations"?"di-disabled":(cr??=a(nn).matchMedia("(prefers-reduced-motion)").matches,cr?"reduced-motion":"enabled")}function q(){return Xa()!=="enabled"}var Za,cr,ue=h(()=>{"use strict";lr();d();Za=new g("MATERIAL_ANIMATIONS"),cr=null});var on=h(()=>{"use strict";si();ii();Ge();ti()});function Ka(n,i){}function fr(n){return n==null?null:typeof n=="number"?n:n.endsWith("ms")?te(n.substring(0,n.length-2)):n.endsWith("s")?te(n.substring(0,n.length-1))*1e3:n==="0"?0:null}function ts(n,i,t){return n._closeInteractionType=i,n.close(t)}function os(n,i){let t=n.nativeElement.parentElement;for(;t&&!t.classList.contains("mat-mdc-dialog-container");)t=t.parentElement;return t?i.find(e=>e.id===t.id):null}var an,ui,dr,ur,qa,Qa,Ja,hr,rn,kt,hi,es,ns,is,mr,pr,gr,br,_r=h(()=>{"use strict";Ho();d();d();sr();di();Ze();ue();ct();Nt();Xn();on();Gn();an=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},ui="mdc-dialog--open",dr="mdc-dialog--opening",ur="mdc-dialog--closing",qa=150,Qa=75,Ja=(()=>{class n extends ci{_animationStateChanged=new j;_animationsEnabled=!q();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?fr(this._config.enterAnimationDuration)??qa:0;_exitAnimationDuration=this._animationsEnabled?fr(this._config.exitAnimationDuration)??Qa:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(hr,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(dr,ui)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(ui),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(ui),this._animationsEnabled?(this._hostElement.style.setProperty(hr,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(ur)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(dr,ur)}_waitForAnimationToComplete(t,e){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(e,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(t){let e=super.attachComponentPortal(t);return e.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),e}static \u0275fac=(()=>{let t;return function(o){return(t||(t=tt(n)))(o||n)}})();static \u0275cmp=R({type:n,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(e,o){e&2&&(vn("id",o._config.id),dt("aria-modal",o._config.ariaModal)("role",o._config.role)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null),U("_mat-animation-noopable",!o._animationsEnabled)("mat-mdc-dialog-container-with-actions",o._actionSectionCount>0))},features:[L],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(e,o){e&1&&(V(0,"div",0)(1,"div",1),Ce(2,Ka,0,0,"ng-template",2),z()())},dependencies:[ne],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return n})(),hr="--mat-dialog-transition-duration";rn=(function(n){return n[n.OPEN=0]="OPEN",n[n.CLOSING=1]="CLOSING",n[n.CLOSED=2]="CLOSED",n})(rn||{}),kt=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new un(1);_beforeClosed=new un(1);_result;_closeFallbackTimeout;_state=rn.OPEN;_closeInteractionType;constructor(i,t,e){this._ref=i,this._config=t,this._containerInstance=e,this.disableClose=t.disableClose,this.id=i.id,i.addPanelClass("mat-mdc-dialog-panel"),e._animationStateChanged.pipe(st(o=>o.state==="opened"),J(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe(st(o=>o.state==="closed"),J(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),i.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Ei(this.backdropClick(),this.keydownEvents().pipe(st(o=>o.keyCode===27&&!this.disableClose&&!Xe(o)))).subscribe(o=>{this.disableClose||(o.preventDefault(),ts(this,o.type==="keydown"?"keyboard":"mouse"))})}close(i){let t=this._config.closePredicate;t&&!t(i,this._config,this.componentInstance)||(this._result=i,this._containerInstance._animationStateChanged.pipe(st(e=>e.state==="closing"),J(1)).subscribe(e=>{this._beforeClosed.next(i),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),e.totalTime+100)}),this._state=rn.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(i){let t=this._ref.config.positionStrategy;return i&&(i.left||i.right)?i.left?t.left(i.left):t.right(i.right):t.centerHorizontally(),i&&(i.top||i.bottom)?i.top?t.top(i.top):t.bottom(i.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(i="",t=""){return this._ref.updateSize(i,t),this}addPanelClass(i){return this._ref.addPanelClass(i),this}removePanelClass(i){return this._ref.removePanelClass(i),this}getState(){return this._state}_finishDialogClose(){this._state=rn.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};hi=new g("MatMdcDialogData"),es=new g("mat-mdc-dialog-default-options"),ns=new g("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let n=a(C);return()=>ie(n)}}),is=(()=>{class n{_defaultOptions=a(es,{optional:!0});_scrollStrategy=a(ns);_parentDialog=a(n,{optional:!0,skipSelf:!0});_idGenerator=a(G);_injector=a(C);_dialog=a(ar);_animationsDisabled=q();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new D;_afterOpenedAtThisLevel=new D;dialogConfigClass=an;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=be(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(lt(void 0)));constructor(){this._dialogRefConstructor=kt,this._dialogContainerType=Ja,this._dialogDataToken=hi}open(t,e){let o;e=b(b({},this._defaultOptions||new an),e),e.id=e.id||this._idGenerator.getId("mat-mdc-dialog-"),e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();let r=this._dialog.open(t,mt(b({},e),{positionStrategy:oe(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||e.enterAnimationDuration?.toLocaleString()==="0"||e.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:e},{provide:rt,useValue:e}]},templateContext:()=>({dialogRef:o}),providers:(s,l,c)=>(o=new this._dialogRefConstructor(s,e,c),o.updatePosition(e?.position),[{provide:this._dialogContainerType,useValue:c},{provide:this._dialogDataToken,useValue:l.data},{provide:this._dialogRefConstructor,useValue:o}])}));return o.componentRef=r.componentRef,o.componentInstance=r.componentInstance,this.openDialogs.push(o),this.afterOpened.next(o),o.afterClosed().subscribe(()=>{let s=this.openDialogs.indexOf(o);s>-1&&(this.openDialogs.splice(s,1),this.openDialogs.length||this._getAfterAllClosed().next())}),o}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),mr=(()=>{class n{_dialogRef=a(kt,{optional:!0});_elementRef=a(x);_dialog=a(is);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=os(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(e){return new(e||n)};static \u0275dir=S({type:n})}return n})(),pr=(()=>{class n extends mr{id=a(G).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let t;return function(o){return(t||(t=tt(n)))(o||n)}})();static \u0275dir=S({type:n,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(e,o){e&2&&vn("id",o.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[L]})}return n})(),gr=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=S({type:n,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[$i([Mo])]})}return n})(),br=(()=>{class n extends mr{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let t;return function(o){return(t||(t=tt(n)))(o||n)}})();static \u0275dir=S({type:n,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(e,o){e&2&&U("mat-mdc-dialog-actions-align-start",o.align==="start")("mat-mdc-dialog-actions-align-center",o.align==="center")("mat-mdc-dialog-actions-align-end",o.align==="end")},inputs:{align:"align"},features:[L]})}return n})()});var fi=h(()=>{"use strict";ot();Qt();ei()});function ss(n,i,t){let e=Math.max(Math.abs(n-t.left),Math.abs(n-t.right)),o=Math.max(Math.abs(i-t.top),Math.abs(i-t.bottom));return Math.sqrt(e*e+o*o)}var N,mi,vr,pi,he,rs,yr,Dr,wr,as,fe,gi,lm,Cr=h(()=>{"use strict";fi();d();d();on();di();en();ue();N=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(N||{}),mi=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=N.HIDDEN;constructor(i,t,e,o=!1){this._renderer=i,this.element=t,this.config=e,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}},vr=It({passive:!0,capture:!0}),pi=class{_events=new Map;addHandler(i,t,e,o){let r=this._events.get(t);if(r){let s=r.get(e);s?s.add(o):r.set(e,new Set([o]))}else this._events.set(t,new Map([[e,new Set([o])]])),i.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,vr)})}removeHandler(i,t,e){let o=this._events.get(i);if(!o)return;let r=o.get(t);r&&(r.delete(e),r.size===0&&o.delete(t),o.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,vr)))}_delegateEventHandler=i=>{let t=F(i);t&&this._events.get(i.type)?.forEach((e,o)=>{(o===t||o.contains(t))&&e.forEach(r=>r.handleEvent(i))})}},he={enterDuration:225,exitDuration:150},rs=800,yr=It({passive:!0,capture:!0}),Dr=["mousedown","touchstart"],wr=["mouseup","mouseleave","touchend","touchcancel"],as=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=R({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(e,o){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),fe=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new pi;constructor(i,t,e,o,r){this._target=i,this._ngZone=t,this._platform=o,o.isBrowser&&(this._containerElement=W(e)),r&&r.get($).load(as)}fadeInRipple(i,t,e={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=b(b({},he),e.animation);e.centered&&(i=o.left+o.width/2,t=o.top+o.height/2);let s=e.radius||ss(i,t,o),l=i-o.left,c=t-o.top,m=r.enterDuration,f=document.createElement("div");f.classList.add("mat-ripple-element"),f.style.left=`${l-s}px`,f.style.top=`${c-s}px`,f.style.height=`${s*2}px`,f.style.width=`${s*2}px`,e.color!=null&&(f.style.backgroundColor=e.color),f.style.transitionDuration=`${m}ms`,this._containerElement.appendChild(f);let _=window.getComputedStyle(f),A=_.transitionProperty,at=_.transitionDuration,Q=A==="none"||at==="0s"||at==="0s, 0s"||o.width===0&&o.height===0,O=new mi(this,f,e,Q);f.style.transform="scale3d(1, 1, 1)",O.state=N.FADING_IN,e.persistent||(this._mostRecentTransientRipple=O);let me=null;return!Q&&(m||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let vi=()=>{me&&(me.fallbackTimer=null),clearTimeout(yi),this._finishRippleTransition(O)},ln=()=>this._destroyRipple(O),yi=setTimeout(ln,m+100);f.addEventListener("transitionend",vi),f.addEventListener("transitioncancel",ln),me={onTransitionEnd:vi,onTransitionCancel:ln,fallbackTimer:yi}}),this._activeRipples.set(O,me),(Q||!m)&&this._finishRippleTransition(O),O}fadeOutRipple(i){if(i.state===N.FADING_OUT||i.state===N.HIDDEN)return;let t=i.element,e=b(b({},he),i.config.animation);t.style.transitionDuration=`${e.exitDuration}ms`,t.style.opacity="0",i.state=N.FADING_OUT,(i._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let t=W(i);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,Dr.forEach(e=>{n._eventManager.addHandler(this._ngZone,e,t,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{wr.forEach(t=>{this._triggerElement.addEventListener(t,this,yr)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===N.FADING_IN?this._startFadeOutTransition(i):i.state===N.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let t=i===this._mostRecentTransientRipple,{persistent:e}=i.config;i.state=N.VISIBLE,!e&&(!t||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let t=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=N.HIDDEN,t!==null&&(i.element.removeEventListener("transitionend",t.onTransitionEnd),i.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),i.element.remove()}_onMousedown(i){let t=re(i),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+rs;!this._target.rippleDisabled&&!t&&!e&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!ae(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=i.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let t=i.state===N.VISIBLE||i.config.terminateOnPointerUp&&i.state===N.FADING_IN;!i.config.persistent&&t&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(Dr.forEach(t=>n._eventManager.removeHandler(t,i,this)),this._pointerUpEventsRegistered&&(wr.forEach(t=>i.removeEventListener(t,this,yr)),this._pointerUpEventsRegistered=!1))}};gi=new g("mat-ripple-global-options"),lm=(()=>{class n{_elementRef=a(x);_animationsDisabled=q();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=a(y),e=a(E),o=a(gi,{optional:!0}),r=a(C);this._globalOptions=o||{},this._rippleRenderer=new fe(this,t,this._elementRef,e,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:b(b(b({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,e=0,o){return typeof t=="number"?this._rippleRenderer.fadeInRipple(t,e,b(b({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,b(b({},this.rippleConfig),t))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=S({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(e,o){e&2&&U("mat-ripple-unbounded",o.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})()});var ls,cs,bi,_i,Er,sn,Sr,Ar=h(()=>{"use strict";d();d();fi();ue();Cr();ls={capture:!0},cs=["focus","mousedown","mouseenter","touchstart"],bi="mat-ripple-loader-uninitialized",_i="mat-ripple-loader-class-name",Er="mat-ripple-loader-centered",sn="mat-ripple-loader-disabled",Sr=(()=>{class n{_document=a(p);_animationsDisabled=q();_globalRippleOptions=a(gi,{optional:!0});_platform=a(E);_ngZone=a(y);_injector=a(C);_eventCleanups;_hosts=new Map;constructor(){let t=a(I).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>cs.map(e=>t.listen(this._document,e,this._onInteraction,ls)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(bi,this._globalRippleOptions?.namespace??""),(e.className||!t.hasAttribute(_i))&&t.setAttribute(_i,e.className||""),e.centered&&t.setAttribute(Er,""),e.disabled&&t.setAttribute(sn,"")}setDisabled(t,e){let o=this._hosts.get(t);o?(o.target.rippleDisabled=e,!e&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(t))):e?t.setAttribute(sn,""):t.removeAttribute(sn)}_onInteraction=t=>{let e=F(t);if(e instanceof HTMLElement){let o=e.closest(`[${bi}="${this._globalRippleOptions?.namespace??""}"]`);o&&this._createRipple(o)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let e=this._document.createElement("span");e.classList.add("mat-ripple",t.getAttribute(_i)),t.append(e);let o=this._globalRippleOptions,r=this._animationsDisabled?0:o?.animation?.enterDuration??he.enterDuration,s=this._animationsDisabled?0:o?.animation?.exitDuration??he.exitDuration,l={rippleDisabled:this._animationsDisabled||o?.disabled||t.hasAttribute(sn),rippleConfig:{centered:t.hasAttribute(Er),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:s}}},c=new fe(l,this._ngZone,e,this._platform,this._injector),m=!l.rippleDisabled;m&&c.setupTriggerEvents(t),this._hosts.set(t,{target:l,renderer:c,hasSetUpEvents:m}),t.removeAttribute(bi)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()});var xr,Rr=h(()=>{"use strict";d();xr=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=R({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(e,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return n})()});function Or(n){return n==null?void 0:oo(n)}var ds,Mr,Tr=h(()=>{"use strict";d();d();on();en();Ar();Rr();ue();ds=new g("MAT_BUTTON_CONFIG");Mr=(()=>{class n{_elementRef=a(x);_ngZone=a(y);_animationsDisabled=q();_config=a(ds,{optional:!0});_focusMonitor=a(ce);_cleanupClick;_renderer=a(X);_rippleLoader=a(Sr);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}constructor(){a($).load(xr);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=S({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(e,o){e&2&&(dt("disabled",o._getDisabledAttribute())("aria-disabled",o._getAriaDisabled())("tabindex",o._getTabIndex()),Ji(o.color?"mat-"+o.color:""),U("mat-mdc-button-disabled",o.disabled)("mat-mdc-button-disabled-interactive",o.disabledInteractive)("mat-unthemed",!o.color)("_mat-animation-noopable",o._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",nt],disabled:[2,"disabled","disabled",nt],ariaDisabled:[2,"aria-disabled","ariaDisabled",nt],disabledInteractive:[2,"disabledInteractive","disabledInteractive",nt],tabIndex:[2,"tabIndex","tabIndex",Or],_tabindex:[2,"tabindex","_tabindex",Or]}})}return n})()});function ms(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var us,hs,fs,Fr,Ir,kr=h(()=>{"use strict";Tr();d();us=["matButton",""],hs=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],fs=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"],Fr=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Ir=(()=>{class n extends Mr{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let t=ms(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let e=this._elementRef.nativeElement.classList,o=this._appearance?Fr.get(this._appearance):null,r=Fr.get(t);o&&e.remove(...o),e.add(...r),this._appearance=t}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=R({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[L],attrs:us,ngContentSelectors:fs,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,o){e&1&&(Re(hs),Ut(0,"span",0),St(1),bn(2,"span",1),St(3,1),_n(),St(4,2),Ut(5,"span",2)(6,"span",3)),e&2&&U("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})()});var Pr,Lr=h(()=>{"use strict";d();jn();d();Pr=(()=>{class n{constructor(){this.sani=a(Kt),this.fn={html:this.sani.bypassSecurityTrustHtml,style:this.sani.bypassSecurityTrustStyle,script:this.sani.bypassSecurityTrustScript,url:this.sani.bypassSecurityTrustUrl,resourceUrl:this.sani.bypassSecurityTrustResourceUrl}}transform(t,e="url"){if(e??="url",t instanceof File&&(t=window.URL.createObjectURL(t),e=e==="url"||e==="resourceUrl"?e:"url"),typeof t!="string")throw Error(`Invalid safe transformation of "${typeof t}" to "${e}"`);if(!this.fn[e])throw Error(`Invalid safe type specified: ${e}`);return this.fn[e](t)}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275pipe=we({name:"safe",type:n,pure:!0})}}return n})()});function ps(n,i){if(n&1&&(V(0,"div",3),Ae(1,"div",6),to(2,"safe"),z()),n&2){let t=Et();P(),Se("innerHtml",eo(2,1,t.message,"html"),ji)}}function gs(n,i){if(n&1&&(V(0,"div",4),Ae(1,"img",7),z()),n&2){let t=Et();P(),Se("src",t.image.src,Vi)("alt",t.image.alt)}}function bs(n,i){if(n&1&&(V(0,"div",3),Ae(1,"iframe",8),z()),n&2){let t=Et();P(),Se("src",t.iframe.src,zi)("title",t.iframe.title)}}function _s(n,i){if(n&1){let t=Qi();V(0,"button",10),xe("click",function(){let o=xi(t).$implicit,r=Et(2);return Ri(r.onPress(o))}),Cn(1),z()}if(n&2){let t=i.$implicit;P(),En(t.title)}}function vs(n,i){if(n&1&&(V(0,"div",5),Ki(1,_s,2,1,"button",9,Xi),z()),n&2){let t=Et();P(),qi(t.buttons)}}var Um,ys=h(()=>{"use strict";d();kr();_r();Lr();d();Um=(()=>{class n{constructor(){this.data=a(hi),this.dialogRef=a(kt),this.buttons=[];let t=this.data;this.title=t.title,this.message=t.message,this.iframe=t.opts?.iframe,this.image=t.opts?.image,this.buttons=t.opts?.buttons??[{title:"OK"}]}onPress(t){let e=t?.action||t.title;this.dialogRef.close(e)}close(){this.dialogRef.close()}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=R({type:n,selectors:[["app-dialog-template"]],decls:8,vars:5,consts:[[1,"header"],["mat-dialog-title",""],["type","button","aria-label","Close",1,"btn-close","dialog-close",3,"click"],["mat-dialog-content",""],["mat-dialog-content","",1,"dialog-image-content"],["mat-dialog-actions",""],[1,"dialog-message",3,"innerHtml"],[1,"dialog-image",3,"src","alt"],[3,"src","title"],["mat-button","","type","button"],["mat-button","","type","button",3,"click"]],template:function(e,o){e&1&&(V(0,"div",0)(1,"h1",1),Cn(2),z(),V(3,"button",2),xe("click",function(){return o.close()}),z()(),Vt(4,ps,3,4,"div",3),Vt(5,gs,2,2,"div",4),Vt(6,bs,2,2,"div",3),Vt(7,vs,3,0,"div",5)),e&2&&(P(2),En(o.title),P(2),zt(o.message?4:-1),P(),zt(o.image?5:-1),P(),zt(o.iframe?6:-1),P(),zt(o.buttons.length?7:-1))},dependencies:[pr,gr,br,Ir,Pr],styles:["[_nghost-%COMP%]{display:block;max-width:min(92vw,1100px)}.header[_ngcontent-%COMP%]{padding:1rem 1.25rem 0;position:relative}.header[_ngcontent-%COMP%]   .mat-mdc-dialog-title[_ngcontent-%COMP%]{font-size:clamp(1.125rem,5vw,1.5rem);line-height:1.25;margin:0;overflow-wrap:anywhere;padding:0 3rem .75rem 0}.header[_ngcontent-%COMP%]   .mat-mdc-dialog-title[_ngcontent-%COMP%]:before{display:none}.dialog-close[_ngcontent-%COMP%]{background-color:#fff;border-radius:50%;box-shadow:0 .25rem .75rem #01297033;min-height:44px;min-width:44px;opacity:1;padding:.875rem;position:absolute;right:-.5rem;top:-.5rem;z-index:1}[mat-dialog-content][_ngcontent-%COMP%], [mat-dialog-actions][_ngcontent-%COMP%]{padding:0 1.25rem 1rem}.dialog-message[_ngcontent-%COMP%]{margin-bottom:0}.dialog-image-content[_ngcontent-%COMP%]{overflow:auto}.dialog-image[_ngcontent-%COMP%]{display:block;height:auto;margin:0 auto;max-height:calc(100vh - 13rem);max-width:100%}iframe[_ngcontent-%COMP%]{border:0;height:min(70vh,640px);width:min(82vw,900px)}"]})}}return n})()});export{Fe as a,Ie as b,$r as c,Zr as d,At as e,Bn as f,yo as g,la as h,pa as i,Eo as j,ed as k,jn as l,E as m,Jt as n,$n as o,Oa as p,df as q,lr as r,Xa as s,q as t,ue as u,ut as v,He as w,Dd as x,Da as y,Un as z,F as A,Qt as B,$ as C,ze as D,te as E,W as F,Ue as G,Oo as H,To as I,Gn as J,G as K,Ge as L,Rt as M,Ot as N,Mt as O,ne as P,Ze as Q,Tt as R,oe as S,Qn as T,Ho as U,re as V,ae as W,ti as X,ce as Y,en as Z,za as _,on as $,rn as aa,is as ba,_r as ca,fi as da,lm as ea,Cr as fa,xr as ga,Rr as ha,Ir as ia,kr as ja,Um as ka,ys as la};
