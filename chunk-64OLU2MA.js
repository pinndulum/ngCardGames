import{a as fn,b as ta}from"./chunk-VCETKZTD.js";import{A as Cn,B as oi,C as Sn,D as aa,E as ai,F as ra,G as kn,H as J,I as sa,J as la,K as ri,L as Rn,M as Pn,O as ca,a as vt,b as gn,c as xe,d as De,e as Z,f as ii,g as _n,h as bn,i as ea,j as yt,k as j,l as vn,m as Ft,n as Ce,o as zt,p as yn,q as H,r as ni,s as Se,t as ia,u as na,v as wn,w as xn,x as Dn,y as oa,z as ke}from"./chunk-65VYJ4T6.js";import{a as F,b as ei,c as ve,d as mn,e as pn,f as un,g as Jo,i as X,j as ye,k as U,l as we}from"./chunk-IHB3ENPI.js";import{b as En,c as da}from"./chunk-3RIRNZ35.js";import{a as dn,e as Ko,k as hn,l as Qo}from"./chunk-7RBXLDON.js";import{A as Pt,Aa as qi,Ab as fe,B as mt,Bb as T,C as Xe,Cb as P,Db as Tt,Eb as qe,Fb as Ke,G as it,Gb as Ut,Ib as ge,Jb as Qe,Kb as _t,M as nt,Mb as Q,N as Ue,Na as Ki,Nb as _e,O as ot,Oa as Qi,Ob as At,P as $i,Pa as Ji,Pb as Zt,Q as pt,Qb as Mt,Rb as Bt,Ta as S,V as y,Wb as A,Xa as V,Xb as rn,Y as g,Ya as W,Yb as Lt,Za as L,Zb as Je,_ as l,_a as Y,_b as ti,a as x,ab as Ot,ac as bt,b as ce,bb as Ze,bc as sn,ca as me,d as p,dc as ln,ea as pe,eb as k,f as We,fa as ue,g as K,gb as b,hb as tn,i as Yt,ia as _,ib as en,j as m,ja as D,jb as I,k as Gi,kb as It,l as Ye,m as Ge,ma as C,mc as at,na as v,p as de,pc as E,qa as Et,qc as be,ra as Gt,rc as cn,sa as Xt,sb as $e,sc as f,t as Xi,ta as ut,tb as G,u as Ui,ub as ft,va as R,vb as gt,xb as nn,y as he,yb as on,z as Zi,zb as an}from"./chunk-AZWUA666.js";var ha,Re,On,ma,$t,Pe=p(()=>{"use strict";f();f();pt();Gt();ei();vn();we();yn();ha=20,Re=(()=>{class o{_ngZone=l(v);_platform=l(F);_renderer=l(L).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new m;_scrolledCount=0;scrollContainers=new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let e=this.scrollContainers.get(t);e&&(e.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=ha){return this._platform.isBrowser?new Yt(e=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let n=t>0?this._scrolled.pipe(Xe(t)).subscribe(e):this._scrolled.subscribe(e);return this._scrolledCount++,()=>{n.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):de()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,e)=>this.deregister(e)),this._scrolled.complete()}ancestorScrolled(t,e){let n=this.getAncestorScrollContainers(t);return this.scrolled(e).pipe(mt(a=>!a||n.indexOf(a)>-1))}getAncestorScrollContainers(t){let e=[];return this.scrollContainers.forEach((n,a)=>{this._scrollableContainsElement(a,t)&&e.push(a)}),e}_scrollableContainsElement(t,e){let n=j(e),a=t.getElementRef().nativeElement;do if(n==a)return!0;while(n=n.parentElement);return!1}static \u0275fac=function(e){return new(e||o)};static \u0275prov=y({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),On=(()=>{class o{elementRef=l(R);scrollDispatcher=l(Re);ngZone=l(v);dir=l(U,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new m;_renderer=l(Y);_cleanupScroll;_elementScrolled=new m;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",t=>this._elementScrolled.next(t))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(t){let e=this.elementRef.nativeElement,n=this.dir&&this.dir.value=="rtl";t.left==null&&(t.left=n?t.end:t.start),t.right==null&&(t.right=n?t.start:t.end),t.bottom!=null&&(t.top=e.scrollHeight-e.clientHeight-t.bottom),n&&zt()!=Ft.NORMAL?(t.left!=null&&(t.right=e.scrollWidth-e.clientWidth-t.left),zt()==Ft.INVERTED?t.left=t.right:zt()==Ft.NEGATED&&(t.left=t.right?-t.right:t.right)):t.right!=null&&(t.left=e.scrollWidth-e.clientWidth-t.right),this._applyScrollToOptions(t)}_applyScrollToOptions(t){let e=this.elementRef.nativeElement;Ce()?e.scrollTo(t):(t.top!=null&&(e.scrollTop=t.top),t.left!=null&&(e.scrollLeft=t.left))}measureScrollOffset(t){let e="left",n="right",a=this.elementRef.nativeElement;if(t=="top")return a.scrollTop;if(t=="bottom")return a.scrollHeight-a.clientHeight-a.scrollTop;let r=this.dir&&this.dir.value=="rtl";return t=="start"?t=r?n:e:t=="end"&&(t=r?e:n),r&&zt()==Ft.INVERTED?t==e?a.scrollWidth-a.clientWidth-a.scrollLeft:a.scrollLeft:r&&zt()==Ft.NEGATED?t==e?a.scrollLeft+a.scrollWidth-a.clientWidth:-a.scrollLeft:t==e?a.scrollLeft:a.scrollWidth-a.clientWidth-a.scrollLeft}static \u0275fac=function(e){return new(e||o)};static \u0275dir=b({type:o,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return o})(),ma=20,$t=(()=>{class o{_platform=l(F);_listeners;_viewportSize=null;_change=new m;_document=l(D);constructor(){let t=l(v),e=l(L).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let n=a=>this._change.next(a);this._listeners=[e.listen("window","resize",n),e.listen("window","orientationchange",n)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:e,height:n}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+n,right:t.left+e,height:n,width:e}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,e=this._getWindow(),n=t.documentElement,a=n.getBoundingClientRect(),r=-a.top||t.body?.scrollTop||e.scrollY||n.scrollTop||0,s=-a.left||t.body?.scrollLeft||e.scrollX||n.scrollLeft||0;return{top:r,left:s}}change(t=ma){return t>0?this._change.pipe(Xe(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static \u0275fac=function(e){return new(e||o)};static \u0275prov=y({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()});function ci(o){let i=o.cloneNode(!0),t=i.querySelectorAll("[id]"),e=o.nodeName.toLowerCase();i.removeAttribute("id");for(let n=0;n<t.length;n++)t[n].removeAttribute("id");return e==="canvas"?An(o,i):(e==="input"||e==="select"||e==="textarea")&&Tn(o,i),In("canvas",o,i,An),In("input, textarea, select",o,i,Tn),i}function In(o,i,t,e){let n=i.querySelectorAll(o);if(n.length){let a=t.querySelectorAll(o);for(let r=0;r<n.length;r++)e(n[r],a[r])}}function Tn(o,i){i.type!=="file"&&(i.value=o.value),i.type==="radio"&&i.name&&(i.name=`mat-clone-${i.name}-${ua++}`)}function An(o,i){let t=i.getContext("2d");if(t)try{t.drawImage(o,0,0)}catch(e){}}function gi(o){let i=o.getBoundingClientRect();return{top:i.top,right:i.right,bottom:i.bottom,left:i.left,width:i.width,height:i.height,x:i.x,y:i.y}}function di(o,i,t){let{top:e,bottom:n,left:a,right:r}=o;return t>=e&&t<=n&&i>=a&&i<=r}function fa(o,i){let t=i.left<o.left,e=i.left+i.width>o.right,n=i.top<o.top,a=i.top+i.height>o.bottom;return t||e||n||a}function Qt(o,i,t){o.top+=i,o.bottom=o.top+o.height,o.left+=t,o.right=o.left+o.width}function Mn(o,i,t,e){let{top:n,right:a,bottom:r,left:s,width:c,height:d}=o,h=c*i,u=d*i;return e>n-u&&e<r+u&&t>s-h&&t<a+h}function Gn(o,i){let t=o.rootNodes;if(t.length===1&&t[0].nodeType===i.ELEMENT_NODE)return t[0];let e=i.createElement("div");return t.forEach(n=>e.appendChild(n)),e}function _i(o,i,t){for(let e in i)if(i.hasOwnProperty(e)){let n=i[e];n?o.setProperty(e,n,t?.has(e)?"important":""):o.removeProperty(e)}return o}function Nt(o,i){let t=i?"":"none";_i(o.style,{"touch-action":i?"":"none","-webkit-user-drag":i?"":"none","-webkit-tap-highlight-color":i?"":"transparent","user-select":t,"-ms-user-select":t,"-webkit-user-select":t,"-moz-user-select":t})}function Bn(o,i,t){_i(o.style,{position:i?"":"fixed",top:i?"":"0",opacity:i?"":"0",left:i?"":"-999em"},t)}function Oe(o,i){return i&&i!="none"?o+" "+i:o}function Ln(o,i){o.style.width=`${i.width}px`,o.style.height=`${i.height}px`,o.style.transform=Jt(i.left,i.top)}function Jt(o,i){return`translate3d(${Math.round(o)}px, ${Math.round(i)}px, 0)`}function Fn(o){let i=o.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(o)*i}function _a(o){let i=getComputedStyle(o),t=li(i,"transition-property"),e=t.find(s=>s==="transform"||s==="all");if(!e)return 0;let n=t.indexOf(e),a=li(i,"transition-duration"),r=li(i,"transition-delay");return Fn(a[n])+Fn(r[n])}function li(o,i){return o.getPropertyValue(i).split(",").map(e=>e.trim())}function zn(o){return"showPopover"in o}function xa(o,i,t={dragStartThreshold:5,pointerDirectionChangeThreshold:5}){let e=o.get(Y,null,{optional:!0})||o.get(L).createRenderer(null,null);return new mi(i,t,o.get(D),o.get(v),o.get($t),o.get(bi),e)}function Hn(o,i,t){return Math.max(i,Math.min(t,o))}function Kt(o){return o.type[0]==="t"}function Da(o){o.preventDefault()}function Xn(o,i,t){let e=Wn(i,o.length-1),n=Wn(t,o.length-1);if(e===n)return;let a=o[e],r=n<e?-1:1;for(let s=e;s!==n;s+=r)o[s]=o[s+r];o[n]=a}function Wn(o,i){return Math.max(0,Math.min(i,o))}function Ca(o,i){return new ui(i,o.get(bi),o.get(D),o.get(v),o.get($t))}function Zn(o,i){let{top:t,bottom:e,height:n}=o,a=n*Un;return i>=t-a&&i<=t+a?N.UP:i>=e-a&&i<=e+a?N.DOWN:N.NONE}function $n(o,i){let{left:t,right:e,width:n}=o,a=n*Un;return i>=t-a&&i<=t+a?O.LEFT:i>=e-a&&i<=e+a?O.RIGHT:O.NONE}function Sa(o,i,t,e,n){let a=Zn(i,n),r=$n(i,e),s=N.NONE,c=O.NONE;if(a){let d=o.scrollTop;a===N.UP?d>0&&(s=N.UP):o.scrollHeight-d>o.clientHeight&&(s=N.DOWN)}if(r){let d=o.scrollLeft;t==="rtl"?r===O.RIGHT?d<0&&(c=O.RIGHT):o.scrollWidth+d>o.clientWidth&&(c=O.LEFT):r===O.LEFT?d>0&&(c=O.LEFT):o.scrollWidth-d>o.clientWidth&&(c=O.RIGHT)}return[s,c]}var ua,Ee,qt,si,ga,bi,ba,hi,va,Nn,ya,wa,Vn,jn,mi,Ie,pi,Yn,Un,N,O,ui,Te,ka,qn,Kn,ss,fi,ls,cs,Ra,ds,Pa,hs,Ea=p(()=>{"use strict";f();f();pt();gn();Gt();ii();ea();vn();Pe();we();ni();mn();ua=0;Ee=class{_document;positions=new Map;constructor(i){this._document=i}clear(){this.positions.clear()}cache(i){this.clear(),this.positions.set(this._document,{scrollPosition:this.getViewportScrollPosition()}),i.forEach(t=>{this.positions.set(t,{scrollPosition:{top:t.scrollTop,left:t.scrollLeft},clientRect:gi(t)})})}handleScroll(i){let t=Z(i),e=this.positions.get(t);if(!e)return null;let n=e.scrollPosition,a,r;if(t===this._document){let d=this.getViewportScrollPosition();a=d.top,r=d.left}else a=t.scrollTop,r=t.scrollLeft;let s=n.top-a,c=n.left-r;return this.positions.forEach((d,h)=>{d.clientRect&&t!==h&&t.contains(h)&&Qt(d.clientRect,s,c)}),n.top=a,n.left=r,{top:s,left:c}}getViewportScrollPosition(){return{top:window.scrollY,left:window.scrollX}}};qt={capture:!0},si={passive:!1,capture:!0},ga=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275cmp=k({type:o,selectors:[["ng-component"]],hostAttrs:["cdk-drag-resets-container",""],decls:0,vars:0,template:function(e,n){},styles:[`@layer cdk-resets {
  .cdk-drag-preview {
    background: none;
    border: none;
    padding: 0;
    color: inherit;
    inset: auto;
  }
}
.cdk-drag-placeholder *,
.cdk-drag-preview * {
  pointer-events: none !important;
}
`],encapsulation:2,changeDetection:0})}return o})(),bi=(()=>{class o{_ngZone=l(v);_document=l(D);_styleLoader=l(vt);_renderer=l(L).createRenderer(null,null);_cleanupDocumentTouchmove;_scroll=new m;_dropInstances=new Set;_dragInstances=new Set;_activeDragInstances=Et([]);_globalListeners;_draggingPredicate=t=>t.isDragging();_domNodesToDirectives=null;pointerMove=new m;pointerUp=new m;constructor(){}registerDropContainer(t){this._dropInstances.has(t)||this._dropInstances.add(t)}registerDragItem(t){this._dragInstances.add(t),this._dragInstances.size===1&&this._ngZone.runOutsideAngular(()=>{this._cleanupDocumentTouchmove?.(),this._cleanupDocumentTouchmove=this._renderer.listen(this._document,"touchmove",this._persistentTouchmoveListener,si)})}removeDropContainer(t){this._dropInstances.delete(t)}removeDragItem(t){this._dragInstances.delete(t),this.stopDragging(t),this._dragInstances.size===0&&this._cleanupDocumentTouchmove?.()}startDragging(t,e){if(!(this._activeDragInstances().indexOf(t)>-1)&&(this._styleLoader.load(ga),this._activeDragInstances.update(n=>[...n,t]),this._activeDragInstances().length===1)){let n=e.type.startsWith("touch"),a=s=>this.pointerUp.next(s),r=[["scroll",s=>this._scroll.next(s),qt],["selectstart",this._preventDefaultWhileDragging,si]];n?r.push(["touchend",a,qt],["touchcancel",a,qt]):r.push(["mouseup",a,qt]),n||r.push(["mousemove",s=>this.pointerMove.next(s),si]),this._ngZone.runOutsideAngular(()=>{this._globalListeners=r.map(([s,c,d])=>this._renderer.listen(this._document,s,c,d))})}}stopDragging(t){this._activeDragInstances.update(e=>{let n=e.indexOf(t);return n>-1?(e.splice(n,1),[...e]):e}),this._activeDragInstances().length===0&&this._clearGlobalListeners()}isDragging(t){return this._activeDragInstances().indexOf(t)>-1}scrolled(t){let e=[this._scroll];return t&&t!==this._document&&e.push(new Yt(n=>this._ngZone.runOutsideAngular(()=>{let a=this._renderer.listen(t,"scroll",r=>{this._activeDragInstances().length&&n.next(r)},qt);return()=>{a()}}))),Pt(...e)}registerDirectiveNode(t,e){this._domNodesToDirectives??=new WeakMap,this._domNodesToDirectives.set(t,e)}removeDirectiveNode(t){this._domNodesToDirectives?.delete(t)}getDragDirectiveForNode(t){return this._domNodesToDirectives?.get(t)||null}ngOnDestroy(){this._dragInstances.forEach(t=>this.removeDragItem(t)),this._dropInstances.forEach(t=>this.removeDropContainer(t)),this._domNodesToDirectives=null,this._clearGlobalListeners(),this.pointerMove.complete(),this.pointerUp.complete()}_preventDefaultWhileDragging=t=>{this._activeDragInstances().length>0&&t.preventDefault()};_persistentTouchmoveListener=t=>{this._activeDragInstances().length>0&&(this._activeDragInstances().some(this._draggingPredicate)&&t.preventDefault(),this.pointerMove.next(t))};_clearGlobalListeners(){this._globalListeners?.forEach(t=>t()),this._globalListeners=void 0}static \u0275fac=function(e){return new(e||o)};static \u0275prov=y({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();ba=new Set(["position"]),hi=class{_document;_rootElement;_direction;_initialDomRect;_previewTemplate;_previewClass;_pickupPositionOnPage;_initialTransform;_zIndex;_renderer;_previewEmbeddedView=null;_preview;get element(){return this._preview}constructor(i,t,e,n,a,r,s,c,d,h){this._document=i,this._rootElement=t,this._direction=e,this._initialDomRect=n,this._previewTemplate=a,this._previewClass=r,this._pickupPositionOnPage=s,this._initialTransform=c,this._zIndex=d,this._renderer=h}attach(i){this._preview=this._createPreview(),i.appendChild(this._preview),zn(this._preview)&&this._preview.showPopover()}destroy(){this._preview.remove(),this._previewEmbeddedView?.destroy(),this._preview=this._previewEmbeddedView=null}setTransform(i){this._preview.style.transform=i}getBoundingClientRect(){return this._preview.getBoundingClientRect()}addClass(i){this._preview.classList.add(i)}getTransitionDuration(){return _a(this._preview)}addEventListener(i,t){return this._renderer.listen(this._preview,i,t)}_createPreview(){let i=this._previewTemplate,t=this._previewClass,e=i?i.template:null,n;if(e&&i){let a=i.matchSize?this._initialDomRect:null,r=i.viewContainer.createEmbeddedView(e,i.context);r.detectChanges(),n=Gn(r,this._document),this._previewEmbeddedView=r,i.matchSize?Ln(n,a):n.style.transform=Jt(this._pickupPositionOnPage.x,this._pickupPositionOnPage.y)}else n=ci(this._rootElement),Ln(n,this._initialDomRect),this._initialTransform&&(n.style.transform=this._initialTransform);return _i(n.style,{"pointer-events":"none",margin:zn(n)?"0 auto 0 0":"0",position:"fixed",top:"0",left:"0","z-index":this._zIndex+""},ba),Nt(n,!1),n.classList.add("cdk-drag-preview"),n.setAttribute("popover","manual"),n.setAttribute("dir",this._direction),t&&(Array.isArray(t)?t.forEach(a=>n.classList.add(a)):n.classList.add(t)),n}};va={passive:!0},Nn={passive:!1},ya={passive:!1,capture:!0},wa=800,Vn="cdk-drag-placeholder",jn=new Set(["position"]);mi=class{_config;_document;_ngZone;_viewportRuler;_dragDropRegistry;_renderer;_rootElementCleanups;_cleanupShadowRootSelectStart;_preview=null;_previewContainer;_placeholderRef=null;_placeholder;_pickupPositionInElement;_pickupPositionOnPage;_marker;_anchor=null;_passiveTransform={x:0,y:0};_activeTransform={x:0,y:0};_initialTransform;_hasStartedDragging=Et(!1);_hasMoved=!1;_initialContainer;_initialIndex;_parentPositions;_moveEvents=new m;_pointerDirectionDelta;_pointerPositionAtLastDirectionChange;_lastKnownPointerPosition;_rootElement;_ownerSVGElement=null;_rootElementTapHighlight;_pointerMoveSubscription=K.EMPTY;_pointerUpSubscription=K.EMPTY;_scrollSubscription=K.EMPTY;_resizeSubscription=K.EMPTY;_lastTouchEventTime;_dragStartTime;_boundaryElement=null;_nativeInteractionsEnabled=!0;_initialDomRect;_previewRect;_boundaryRect;_previewTemplate;_placeholderTemplate;_handles=[];_disabledHandles=new Set;_dropContainer;_direction="ltr";_parentDragRef=null;_cachedShadowRoot;lockAxis=null;dragStartDelay=0;previewClass;scale=1;get disabled(){return this._disabled||!!(this._dropContainer&&this._dropContainer.disabled)}set disabled(i){i!==this._disabled&&(this._disabled=i,this._toggleNativeDragInteractions(),this._handles.forEach(t=>Nt(t,i)))}_disabled=!1;beforeStarted=new m;started=new m;released=new m;ended=new m;entered=new m;exited=new m;dropped=new m;moved=this._moveEvents;data;constrainPosition;constructor(i,t,e,n,a,r,s){this._config=t,this._document=e,this._ngZone=n,this._viewportRuler=a,this._dragDropRegistry=r,this._renderer=s,this.withRootElement(i).withParent(t.parentDragRef||null),this._parentPositions=new Ee(e),r.registerDragItem(this)}getPlaceholderElement(){return this._placeholder}getRootElement(){return this._rootElement}getVisibleElement(){return this.isDragging()?this.getPlaceholderElement():this.getRootElement()}withHandles(i){this._handles=i.map(e=>j(e)),this._handles.forEach(e=>Nt(e,this.disabled)),this._toggleNativeDragInteractions();let t=new Set;return this._disabledHandles.forEach(e=>{this._handles.indexOf(e)>-1&&t.add(e)}),this._disabledHandles=t,this}withPreviewTemplate(i){return this._previewTemplate=i,this}withPlaceholderTemplate(i){return this._placeholderTemplate=i,this}withRootElement(i){let t=j(i);if(t!==this._rootElement){this._removeRootElementListeners();let e=this._renderer;this._rootElementCleanups=this._ngZone.runOutsideAngular(()=>[e.listen(t,"mousedown",this._pointerDown,Nn),e.listen(t,"touchstart",this._pointerDown,va),e.listen(t,"dragstart",this._nativeDragStart,Nn)]),this._initialTransform=void 0,this._rootElement=t}return typeof SVGElement<"u"&&this._rootElement instanceof SVGElement&&(this._ownerSVGElement=this._rootElement.ownerSVGElement),this}withBoundaryElement(i){return this._boundaryElement=i?j(i):null,this._resizeSubscription.unsubscribe(),i&&(this._resizeSubscription=this._viewportRuler.change(10).subscribe(()=>this._containInsideBoundaryOnResize())),this}withParent(i){return this._parentDragRef=i,this}dispose(){this._removeRootElementListeners(),this.isDragging()&&this._rootElement?.remove(),this._marker?.remove(),this._destroyPreview(),this._destroyPlaceholder(),this._dragDropRegistry.removeDragItem(this),this._removeListeners(),this.beforeStarted.complete(),this.started.complete(),this.released.complete(),this.ended.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this._moveEvents.complete(),this._handles=[],this._disabledHandles.clear(),this._dropContainer=void 0,this._resizeSubscription.unsubscribe(),this._parentPositions.clear(),this._boundaryElement=this._rootElement=this._ownerSVGElement=this._placeholderTemplate=this._previewTemplate=this._marker=this._parentDragRef=null}isDragging(){return this._hasStartedDragging()&&this._dragDropRegistry.isDragging(this)}reset(){this._rootElement.style.transform=this._initialTransform||"",this._activeTransform={x:0,y:0},this._passiveTransform={x:0,y:0}}resetToBoundary(){if(this._boundaryElement&&this._rootElement&&fa(this._boundaryElement.getBoundingClientRect(),this._rootElement.getBoundingClientRect())){let i=this._boundaryElement.getBoundingClientRect(),t=this._rootElement.getBoundingClientRect(),e=0,n=0;t.left<i.left?e=i.left-t.left:t.right>i.right&&(e=i.right-t.right),t.top<i.top?n=i.top-t.top:t.bottom>i.bottom&&(n=i.bottom-t.bottom);let a=this._activeTransform.x,r=this._activeTransform.y,s=a+e,c=r+n;this._rootElement.style.transform=Jt(s,c),this._activeTransform={x:s,y:c},this._passiveTransform={x:s,y:c}}}disableHandle(i){!this._disabledHandles.has(i)&&this._handles.indexOf(i)>-1&&(this._disabledHandles.add(i),Nt(i,!0))}enableHandle(i){this._disabledHandles.has(i)&&(this._disabledHandles.delete(i),Nt(i,this.disabled))}withDirection(i){return this._direction=i,this}_withDropContainer(i){this._dropContainer=i}getFreeDragPosition(){let i=this.isDragging()?this._activeTransform:this._passiveTransform;return{x:i.x,y:i.y}}setFreeDragPosition(i){return this._activeTransform={x:0,y:0},this._passiveTransform.x=i.x,this._passiveTransform.y=i.y,this._dropContainer||this._applyRootElementTransform(i.x,i.y),this}withPreviewContainer(i){return this._previewContainer=i,this}_sortFromLastPointerPosition(){let i=this._lastKnownPointerPosition;i&&this._dropContainer&&this._updateActiveDropContainer(this._getConstrainedPointerPosition(i),i)}_removeListeners(){this._pointerMoveSubscription.unsubscribe(),this._pointerUpSubscription.unsubscribe(),this._scrollSubscription.unsubscribe(),this._cleanupShadowRootSelectStart?.(),this._cleanupShadowRootSelectStart=void 0}_destroyPreview(){this._preview?.destroy(),this._preview=null}_destroyPlaceholder(){this._anchor?.remove(),this._placeholder?.remove(),this._placeholderRef?.destroy(),this._placeholder=this._anchor=this._placeholderRef=null}_pointerDown=i=>{if(this.beforeStarted.next(),this._handles.length){let t=this._getTargetHandle(i);t&&!this._disabledHandles.has(t)&&!this.disabled&&this._initializeDragSequence(t,i)}else this.disabled||this._initializeDragSequence(this._rootElement,i)};_pointerMove=i=>{let t=this._getPointerPositionOnPage(i);if(!this._hasStartedDragging()){let n=Math.abs(t.x-this._pickupPositionOnPage.x),a=Math.abs(t.y-this._pickupPositionOnPage.y);if(n+a>=this._config.dragStartThreshold){let s=Date.now()>=this._dragStartTime+this._getDragStartDelay(i),c=this._dropContainer;if(!s){this._endDragSequence(i);return}(!c||!c.isDragging()&&!c.isReceiving())&&(i.cancelable&&i.preventDefault(),this._hasStartedDragging.set(!0),this._ngZone.run(()=>this._startDragSequence(i)))}return}i.cancelable&&i.preventDefault();let e=this._getConstrainedPointerPosition(t);if(this._hasMoved=!0,this._lastKnownPointerPosition=t,this._updatePointerDirectionDelta(e),this._dropContainer)this._updateActiveDropContainer(e,t);else{let n=this.constrainPosition?this._initialDomRect:this._pickupPositionOnPage,a=this._activeTransform;a.x=e.x-n.x+this._passiveTransform.x,a.y=e.y-n.y+this._passiveTransform.y,this._applyRootElementTransform(a.x,a.y)}this._moveEvents.observers.length&&this._ngZone.run(()=>{this._moveEvents.next({source:this,pointerPosition:e,event:i,distance:this._getDragDistance(e),delta:this._pointerDirectionDelta})})};_pointerUp=i=>{this._endDragSequence(i)};_endDragSequence(i){if(this._dragDropRegistry.isDragging(this)&&(this._removeListeners(),this._dragDropRegistry.stopDragging(this),this._toggleNativeDragInteractions(),this._handles&&(this._rootElement.style.webkitTapHighlightColor=this._rootElementTapHighlight),!!this._hasStartedDragging()))if(this.released.next({source:this,event:i}),this._dropContainer)this._dropContainer._stopScrolling(),this._animatePreviewToPlaceholder().then(()=>{this._cleanupDragArtifacts(i),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)});else{this._passiveTransform.x=this._activeTransform.x;let t=this._getPointerPositionOnPage(i);this._passiveTransform.y=this._activeTransform.y,this._ngZone.run(()=>{this.ended.next({source:this,distance:this._getDragDistance(t),dropPoint:t,event:i})}),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)}}_startDragSequence(i){Kt(i)&&(this._lastTouchEventTime=Date.now()),this._toggleNativeDragInteractions();let t=this._getShadowRoot(),e=this._dropContainer;if(t&&this._ngZone.runOutsideAngular(()=>{this._cleanupShadowRootSelectStart=this._renderer.listen(t,"selectstart",Da,ya)}),e){let n=this._rootElement,a=n.parentNode,r=this._placeholder=this._createPlaceholderElement(),s=this._marker=this._marker||this._document.createComment("");a.insertBefore(s,n),this._initialTransform=n.style.transform||"",this._preview=new hi(this._document,this._rootElement,this._direction,this._initialDomRect,this._previewTemplate||null,this.previewClass||null,this._pickupPositionOnPage,this._initialTransform,this._config.zIndex||1e3,this._renderer),this._preview.attach(this._getPreviewInsertionPoint(a,t)),Bn(n,!1,jn),this._document.body.appendChild(a.replaceChild(r,n)),this.started.next({source:this,event:i}),e.start(),this._initialContainer=e,this._initialIndex=e.getItemIndex(this)}else this.started.next({source:this,event:i}),this._initialContainer=this._initialIndex=void 0;this._parentPositions.cache(e?e.getScrollableParents():[])}_initializeDragSequence(i,t){this._parentDragRef&&t.stopPropagation();let e=this.isDragging(),n=Kt(t),a=!n&&t.button!==0,r=this._rootElement,s=Z(t),c=!n&&this._lastTouchEventTime&&this._lastTouchEventTime+wa>Date.now(),d=n?bn(t):_n(t);if(s&&s.draggable&&t.type==="mousedown"&&t.preventDefault(),e||a||c||d)return;if(this._handles.length){let w=r.style;this._rootElementTapHighlight=w.webkitTapHighlightColor||"",w.webkitTapHighlightColor="transparent"}this._hasMoved=!1,this._hasStartedDragging.set(this._hasMoved),this._removeListeners(),this._initialDomRect=this._rootElement.getBoundingClientRect(),this._pointerMoveSubscription=this._dragDropRegistry.pointerMove.subscribe(this._pointerMove),this._pointerUpSubscription=this._dragDropRegistry.pointerUp.subscribe(this._pointerUp),this._scrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(w=>this._updateOnScroll(w)),this._boundaryElement&&(this._boundaryRect=gi(this._boundaryElement));let h=this._previewTemplate;this._pickupPositionInElement=h&&h.template&&!h.matchSize?{x:0,y:0}:this._getPointerPositionInElement(this._initialDomRect,i,t);let u=this._pickupPositionOnPage=this._lastKnownPointerPosition=this._getPointerPositionOnPage(t);this._pointerDirectionDelta={x:0,y:0},this._pointerPositionAtLastDirectionChange={x:u.x,y:u.y},this._dragStartTime=Date.now(),this._dragDropRegistry.startDragging(this,t)}_cleanupDragArtifacts(i){Bn(this._rootElement,!0,jn),this._marker.parentNode.replaceChild(this._rootElement,this._marker),this._destroyPreview(),this._destroyPlaceholder(),this._initialDomRect=this._boundaryRect=this._previewRect=this._initialTransform=void 0,this._ngZone.run(()=>{let t=this._dropContainer,e=t.getItemIndex(this),n=this._getPointerPositionOnPage(i),a=this._getDragDistance(n),r=t._isOverContainer(n.x,n.y);this.ended.next({source:this,distance:a,dropPoint:n,event:i}),this.dropped.next({item:this,currentIndex:e,previousIndex:this._initialIndex,container:t,previousContainer:this._initialContainer,isPointerOverContainer:r,distance:a,dropPoint:n,event:i}),t.drop(this,e,this._initialIndex,this._initialContainer,r,a,n,i),this._dropContainer=this._initialContainer})}_updateActiveDropContainer({x:i,y:t},{x:e,y:n}){let a=this._initialContainer._getSiblingContainerFromPosition(this,i,t);!a&&this._dropContainer!==this._initialContainer&&this._initialContainer._isOverContainer(i,t)&&(a=this._initialContainer),a&&a!==this._dropContainer&&this._ngZone.run(()=>{let r=this._dropContainer.getItemIndex(this),s=this._dropContainer.getItemAtIndex(r+1)?.getVisibleElement()||null;this.exited.next({item:this,container:this._dropContainer}),this._dropContainer.exit(this),this._conditionallyInsertAnchor(a,this._dropContainer,s),this._dropContainer=a,this._dropContainer.enter(this,i,t,a===this._initialContainer&&a.sortingDisabled?this._initialIndex:void 0),this.entered.next({item:this,container:a,currentIndex:a.getItemIndex(this)})}),this.isDragging()&&(this._dropContainer._startScrollingIfNecessary(e,n),this._dropContainer._sortItem(this,i,t,this._pointerDirectionDelta),this.constrainPosition?this._applyPreviewTransform(i,t):this._applyPreviewTransform(i-this._pickupPositionInElement.x,t-this._pickupPositionInElement.y))}_animatePreviewToPlaceholder(){if(!this._hasMoved)return Promise.resolve();let i=this._placeholder.getBoundingClientRect();this._preview.addClass("cdk-drag-animating"),this._applyPreviewTransform(i.left,i.top);let t=this._preview.getTransitionDuration();return t===0?Promise.resolve():this._ngZone.runOutsideAngular(()=>new Promise(e=>{let n=s=>{(!s||this._preview&&Z(s)===this._preview.element&&s.propertyName==="transform")&&(r(),e(),clearTimeout(a))},a=setTimeout(n,t*1.5),r=this._preview.addEventListener("transitionend",n)}))}_createPlaceholderElement(){let i=this._placeholderTemplate,t=i?i.template:null,e;return t?(this._placeholderRef=i.viewContainer.createEmbeddedView(t,i.context),this._placeholderRef.detectChanges(),e=Gn(this._placeholderRef,this._document)):e=ci(this._rootElement),e.style.pointerEvents="none",e.classList.add(Vn),e}_getPointerPositionInElement(i,t,e){let n=t===this._rootElement?null:t,a=n?n.getBoundingClientRect():i,r=Kt(e)?e.targetTouches[0]:e,s=this._getViewportScrollPosition(),c=r.pageX-a.left-s.left,d=r.pageY-a.top-s.top;return{x:a.left-i.left+c,y:a.top-i.top+d}}_getPointerPositionOnPage(i){let t=this._getViewportScrollPosition(),e=Kt(i)?i.touches[0]||i.changedTouches[0]||{pageX:0,pageY:0}:i,n=e.pageX-t.left,a=e.pageY-t.top;if(this._ownerSVGElement){let r=this._ownerSVGElement.getScreenCTM();if(r){let s=this._ownerSVGElement.createSVGPoint();return s.x=n,s.y=a,s.matrixTransform(r.inverse())}}return{x:n,y:a}}_getConstrainedPointerPosition(i){let t=this._dropContainer?this._dropContainer.lockAxis:null,{x:e,y:n}=this.constrainPosition?this.constrainPosition(i,this,this._initialDomRect,this._pickupPositionInElement):i;if(this.lockAxis==="x"||t==="x"?n=this._pickupPositionOnPage.y-(this.constrainPosition?this._pickupPositionInElement.y:0):(this.lockAxis==="y"||t==="y")&&(e=this._pickupPositionOnPage.x-(this.constrainPosition?this._pickupPositionInElement.x:0)),this._boundaryRect){let{x:a,y:r}=this.constrainPosition?{x:0,y:0}:this._pickupPositionInElement,s=this._boundaryRect,{width:c,height:d}=this._getPreviewRect(),h=s.top+r,u=s.bottom-(d-r),w=s.left+a,et=s.right-(c-a);e=Hn(e,w,et),n=Hn(n,h,u)}return{x:e,y:n}}_updatePointerDirectionDelta(i){let{x:t,y:e}=i,n=this._pointerDirectionDelta,a=this._pointerPositionAtLastDirectionChange,r=Math.abs(t-a.x),s=Math.abs(e-a.y);return r>this._config.pointerDirectionChangeThreshold&&(n.x=t>a.x?1:-1,a.x=t),s>this._config.pointerDirectionChangeThreshold&&(n.y=e>a.y?1:-1,a.y=e),n}_toggleNativeDragInteractions(){if(!this._rootElement||!this._handles)return;let i=this._handles.length>0||!this.isDragging();i!==this._nativeInteractionsEnabled&&(this._nativeInteractionsEnabled=i,Nt(this._rootElement,i))}_removeRootElementListeners(){this._rootElementCleanups?.forEach(i=>i()),this._rootElementCleanups=void 0}_applyRootElementTransform(i,t){let e=1/this.scale,n=Jt(i*e,t*e),a=this._rootElement.style;this._initialTransform==null&&(this._initialTransform=a.transform&&a.transform!="none"?a.transform:""),a.transform=Oe(n,this._initialTransform)}_applyPreviewTransform(i,t){let e=this._previewTemplate?.template?void 0:this._initialTransform,n=Jt(i,t);this._preview.setTransform(Oe(n,e))}_getDragDistance(i){let t=this._pickupPositionOnPage;return t?{x:i.x-t.x,y:i.y-t.y}:{x:0,y:0}}_cleanupCachedDimensions(){this._boundaryRect=this._previewRect=void 0,this._parentPositions.clear()}_containInsideBoundaryOnResize(){let{x:i,y:t}=this._passiveTransform;if(i===0&&t===0||this.isDragging()||!this._boundaryElement)return;let e=this._rootElement.getBoundingClientRect(),n=this._boundaryElement.getBoundingClientRect();if(n.width===0&&n.height===0||e.width===0&&e.height===0)return;let a=n.left-e.left,r=e.right-n.right,s=n.top-e.top,c=e.bottom-n.bottom;n.width>e.width?(a>0&&(i+=a),r>0&&(i-=r)):i=0,n.height>e.height?(s>0&&(t+=s),c>0&&(t-=c)):t=0,(i!==this._passiveTransform.x||t!==this._passiveTransform.y)&&this.setFreeDragPosition({y:t,x:i})}_getDragStartDelay(i){let t=this.dragStartDelay;return typeof t=="number"?t:Kt(i)?t.touch:t?t.mouse:0}_updateOnScroll(i){let t=this._parentPositions.handleScroll(i);if(t){let e=Z(i);this._boundaryRect&&e!==this._boundaryElement&&e.contains(this._boundaryElement)&&Qt(this._boundaryRect,t.top,t.left),this._pickupPositionOnPage.x+=t.left,this._pickupPositionOnPage.y+=t.top,this._dropContainer||(this._activeTransform.x-=t.left,this._activeTransform.y-=t.top,this._applyRootElementTransform(this._activeTransform.x,this._activeTransform.y))}}_getViewportScrollPosition(){return this._parentPositions.positions.get(this._document)?.scrollPosition||this._parentPositions.getViewportScrollPosition()}_getShadowRoot(){return this._cachedShadowRoot===void 0&&(this._cachedShadowRoot=xe(this._rootElement)),this._cachedShadowRoot}_getPreviewInsertionPoint(i,t){let e=this._previewContainer||"global";if(e==="parent")return i;if(e==="global"){let n=this._document;return t||n.fullscreenElement||n.webkitFullscreenElement||n.mozFullScreenElement||n.msFullscreenElement||n.body}return j(e)}_getPreviewRect(){return(!this._previewRect||!this._previewRect.width&&!this._previewRect.height)&&(this._previewRect=this._preview?this._preview.getBoundingClientRect():this._initialDomRect),this._previewRect}_nativeDragStart=i=>{if(this._handles.length){let t=this._getTargetHandle(i);t&&!this._disabledHandles.has(t)&&!this.disabled&&i.preventDefault()}else this.disabled||i.preventDefault()};_getTargetHandle(i){return this._handles.find(t=>i.target&&(i.target===t||t.contains(i.target)))}_conditionallyInsertAnchor(i,t,e){if(i===this._initialContainer)this._anchor?.remove(),this._anchor=null;else if(t===this._initialContainer&&t.hasAnchor){let n=this._anchor??=ci(this._placeholder);n.classList.remove(Vn),n.classList.add("cdk-drag-anchor"),n.style.transform="",e?e.before(n):j(t.element).appendChild(n)}}};Ie=class{_dragDropRegistry;_element;_sortPredicate;_itemPositions=[];_activeDraggables;orientation="vertical";direction="ltr";constructor(i){this._dragDropRegistry=i}_previousSwap={drag:null,delta:0,overlaps:!1};start(i){this.withItems(i)}sort(i,t,e,n){let a=this._itemPositions,r=this._getItemIndexFromPointerPosition(i,t,e,n);if(r===-1&&a.length>0)return null;let s=this.orientation==="horizontal",c=a.findIndex(B=>B.drag===i),d=a[r],h=a[c].clientRect,u=d.clientRect,w=c>r?1:-1,et=this._getItemOffsetPx(h,u,w),Rt=this._getSiblingOffsetPx(c,a,w),q=a.slice();return Xn(a,c,r),a.forEach((B,qo)=>{if(q[qo]===B)return;let Hi=B.drag===i,He=Hi?et:Rt,Wi=Hi?i.getPlaceholderElement():B.drag.getRootElement();B.offset+=He;let Yi=Math.round(B.offset*(1/B.drag.scale));s?(Wi.style.transform=Oe(`translate3d(${Yi}px, 0, 0)`,B.initialTransform),Qt(B.clientRect,0,He)):(Wi.style.transform=Oe(`translate3d(0, ${Yi}px, 0)`,B.initialTransform),Qt(B.clientRect,He,0))}),this._previousSwap.overlaps=di(u,t,e),this._previousSwap.drag=d.drag,this._previousSwap.delta=s?n.x:n.y,{previousIndex:c,currentIndex:r}}enter(i,t,e,n){let a=this._activeDraggables,r=a.indexOf(i),s=i.getPlaceholderElement();r>-1&&a.splice(r,1);let c=n==null||n<0?this._getItemIndexFromPointerPosition(i,t,e):n,d=a[c];if(d===i&&(d=a[c+1]),!d&&(c==null||c===-1||c<a.length-1)&&this._shouldEnterAsFirstChild(t,e)&&(d=a[0]),d&&!this._dragDropRegistry.isDragging(d)){let h=d.getRootElement();h.parentElement.insertBefore(s,h),a.splice(c,0,i)}else this._element.appendChild(s),a.push(i);s.style.transform="",this._cacheItemPositions()}withItems(i){this._activeDraggables=i.slice(),this._cacheItemPositions()}withSortPredicate(i){this._sortPredicate=i}reset(){this._activeDraggables?.forEach(i=>{let t=i.getRootElement();if(t){let e=this._itemPositions.find(n=>n.drag===i)?.initialTransform;t.style.transform=e||""}}),this._itemPositions=[],this._activeDraggables=[],this._previousSwap.drag=null,this._previousSwap.delta=0,this._previousSwap.overlaps=!1}getActiveItemsSnapshot(){return this._activeDraggables}getItemIndex(i){return this._getVisualItemPositions().findIndex(t=>t.drag===i)}getItemAtIndex(i){return this._getVisualItemPositions()[i]?.drag||null}updateOnScroll(i,t){this._itemPositions.forEach(({clientRect:e})=>{Qt(e,i,t)}),this._itemPositions.forEach(({drag:e})=>{this._dragDropRegistry.isDragging(e)&&e._sortFromLastPointerPosition()})}withElementContainer(i){this._element=i}_cacheItemPositions(){let i=this.orientation==="horizontal";this._itemPositions=this._activeDraggables.map(t=>{let e=t.getVisibleElement();return{drag:t,offset:0,initialTransform:e.style.transform||"",clientRect:gi(e)}}).sort((t,e)=>i?t.clientRect.left-e.clientRect.left:t.clientRect.top-e.clientRect.top)}_getVisualItemPositions(){return this.orientation==="horizontal"&&this.direction==="rtl"?this._itemPositions.slice().reverse():this._itemPositions}_getItemOffsetPx(i,t,e){let n=this.orientation==="horizontal",a=n?t.left-i.left:t.top-i.top;return e===-1&&(a+=n?t.width-i.width:t.height-i.height),a}_getSiblingOffsetPx(i,t,e){let n=this.orientation==="horizontal",a=t[i].clientRect,r=t[i+e*-1],s=a[n?"width":"height"]*e;if(r){let c=n?"left":"top",d=n?"right":"bottom";e===-1?s-=r.clientRect[c]-a[d]:s+=a[c]-r.clientRect[d]}return s}_shouldEnterAsFirstChild(i,t){if(!this._activeDraggables.length)return!1;let e=this._itemPositions,n=this.orientation==="horizontal";if(e[0].drag!==this._activeDraggables[0]){let r=e[e.length-1].clientRect;return n?i>=r.right:t>=r.bottom}else{let r=e[0].clientRect;return n?i<=r.left:t<=r.top}}_getItemIndexFromPointerPosition(i,t,e,n){let a=this.orientation==="horizontal",r=this._itemPositions.findIndex(({drag:s,clientRect:c})=>{if(s===i)return!1;if(n){let d=a?n.x:n.y;if(s===this._previousSwap.drag&&this._previousSwap.overlaps&&d===this._previousSwap.delta)return!1}return a?t>=Math.floor(c.left)&&t<Math.floor(c.right):e>=Math.floor(c.top)&&e<Math.floor(c.bottom)});return r===-1||!this._sortPredicate(r,i)?-1:r}},pi=class{_document;_dragDropRegistry;_element;_sortPredicate;_rootNode;_activeItems;_previousSwap={drag:null,deltaX:0,deltaY:0,overlaps:!1};_relatedNodes=[];constructor(i,t){this._document=i,this._dragDropRegistry=t}start(i){let t=this._element.childNodes;this._relatedNodes=[];for(let e=0;e<t.length;e++){let n=t[e];this._relatedNodes.push([n,n.nextSibling])}this.withItems(i)}sort(i,t,e,n){let a=this._getItemIndexFromPointerPosition(i,t,e),r=this._previousSwap;if(a===-1||this._activeItems[a]===i)return null;let s=this._activeItems[a];if(r.drag===s&&r.overlaps&&r.deltaX===n.x&&r.deltaY===n.y)return null;let c=this.getItemIndex(i),d=i.getPlaceholderElement(),h=s.getRootElement();a>c?h.after(d):h.before(d),Xn(this._activeItems,c,a);let u=this._getRootNode().elementFromPoint(t,e);return r.deltaX=n.x,r.deltaY=n.y,r.drag=s,r.overlaps=h===u||h.contains(u),{previousIndex:c,currentIndex:a}}enter(i,t,e,n){let a=this._activeItems.indexOf(i);a>-1&&this._activeItems.splice(a,1);let r=n==null||n<0?this._getItemIndexFromPointerPosition(i,t,e):n;r===-1&&(r=this._getClosestItemIndexToPointer(i,t,e));let s=this._activeItems[r];s&&!this._dragDropRegistry.isDragging(s)?(this._activeItems.splice(r,0,i),s.getRootElement().before(i.getPlaceholderElement())):(this._activeItems.push(i),this._element.appendChild(i.getPlaceholderElement()))}withItems(i){this._activeItems=i.slice()}withSortPredicate(i){this._sortPredicate=i}reset(){let i=this._element,t=this._previousSwap;for(let e=this._relatedNodes.length-1;e>-1;e--){let[n,a]=this._relatedNodes[e];n.parentNode===i&&n.nextSibling!==a&&(a===null?i.appendChild(n):a.parentNode===i&&i.insertBefore(n,a))}this._relatedNodes=[],this._activeItems=[],t.drag=null,t.deltaX=t.deltaY=0,t.overlaps=!1}getActiveItemsSnapshot(){return this._activeItems}getItemIndex(i){return this._activeItems.indexOf(i)}getItemAtIndex(i){return this._activeItems[i]||null}updateOnScroll(){this._activeItems.forEach(i=>{this._dragDropRegistry.isDragging(i)&&i._sortFromLastPointerPosition()})}withElementContainer(i){i!==this._element&&(this._element=i,this._rootNode=void 0)}_getItemIndexFromPointerPosition(i,t,e){let n=this._getRootNode().elementFromPoint(Math.floor(t),Math.floor(e)),a=n?this._activeItems.findIndex(r=>{let s=r.getRootElement();return n===s||s.contains(n)}):-1;return a===-1||!this._sortPredicate(a,i)?-1:a}_getRootNode(){return this._rootNode||(this._rootNode=xe(this._element)||this._document),this._rootNode}_getClosestItemIndexToPointer(i,t,e){if(this._activeItems.length===0)return-1;if(this._activeItems.length===1)return 0;let n=1/0,a=-1;for(let r=0;r<this._activeItems.length;r++){let s=this._activeItems[r];if(s!==i){let{x:c,y:d}=s.getRootElement().getBoundingClientRect(),h=Math.hypot(t-c,e-d);h<n&&(n=h,a=r)}}return a}},Yn=.05,Un=.05,N=(function(o){return o[o.NONE=0]="NONE",o[o.UP=1]="UP",o[o.DOWN=2]="DOWN",o})(N||{}),O=(function(o){return o[o.NONE=0]="NONE",o[o.LEFT=1]="LEFT",o[o.RIGHT=2]="RIGHT",o})(O||{});ui=class{_dragDropRegistry;_ngZone;_viewportRuler;element;disabled=!1;sortingDisabled=!1;lockAxis=null;autoScrollDisabled=!1;autoScrollStep=2;hasAnchor=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;beforeStarted=new m;entered=new m;exited=new m;dropped=new m;sorted=new m;receivingStarted=new m;receivingStopped=new m;data;_container;_isDragging=!1;_parentPositions;_sortStrategy;_domRect;_draggables=[];_siblings=[];_activeSiblings=new Set;_viewportScrollSubscription=K.EMPTY;_verticalScrollDirection=N.NONE;_horizontalScrollDirection=O.NONE;_scrollNode;_stopScrollTimers=new m;_cachedShadowRoot=null;_document;_scrollableElements=[];_initialScrollSnap;_direction="ltr";constructor(i,t,e,n,a){this._dragDropRegistry=t,this._ngZone=n,this._viewportRuler=a;let r=this.element=j(i);this._document=e,this.withOrientation("vertical").withElementContainer(r),t.registerDropContainer(this),this._parentPositions=new Ee(e)}dispose(){this._stopScrolling(),this._stopScrollTimers.complete(),this._viewportScrollSubscription.unsubscribe(),this.beforeStarted.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this.sorted.complete(),this.receivingStarted.complete(),this.receivingStopped.complete(),this._activeSiblings.clear(),this._scrollNode=null,this._parentPositions.clear(),this._dragDropRegistry.removeDropContainer(this)}isDragging(){return this._isDragging}start(){this._draggingStarted(),this._notifyReceivingSiblings()}enter(i,t,e,n){this._draggingStarted(),n==null&&this.sortingDisabled&&(n=this._draggables.indexOf(i)),this._sortStrategy.enter(i,t,e,n),this._cacheParentPositions(),this._notifyReceivingSiblings(),this.entered.next({item:i,container:this,currentIndex:this.getItemIndex(i)})}exit(i){this._reset(),this.exited.next({item:i,container:this})}drop(i,t,e,n,a,r,s,c={}){this._reset(),this.dropped.next({item:i,currentIndex:t,previousIndex:e,container:this,previousContainer:n,isPointerOverContainer:a,distance:r,dropPoint:s,event:c})}withItems(i){let t=this._draggables;return this._draggables=i,i.forEach(e=>e._withDropContainer(this)),this.isDragging()&&(t.filter(n=>n.isDragging()).every(n=>i.indexOf(n)===-1)?this._reset():this._sortStrategy.withItems(this._draggables)),this}withDirection(i){return this._direction=i,this._sortStrategy instanceof Ie&&(this._sortStrategy.direction=i),this}connectedTo(i){return this._siblings=i.slice(),this}withOrientation(i){if(i==="mixed")this._sortStrategy=new pi(this._document,this._dragDropRegistry);else{let t=new Ie(this._dragDropRegistry);t.direction=this._direction,t.orientation=i,this._sortStrategy=t}return this._sortStrategy.withElementContainer(this._container),this._sortStrategy.withSortPredicate((t,e)=>this.sortPredicate(t,e,this)),this}withScrollableParents(i){let t=this._container;return this._scrollableElements=i.indexOf(t)===-1?[t,...i]:i.slice(),this}withElementContainer(i){if(i===this._container)return this;let t=j(this.element),e=this._scrollableElements.indexOf(this._container),n=this._scrollableElements.indexOf(i);return e>-1&&this._scrollableElements.splice(e,1),n>-1&&this._scrollableElements.splice(n,1),this._sortStrategy&&this._sortStrategy.withElementContainer(i),this._cachedShadowRoot=null,this._scrollableElements.unshift(i),this._container=i,this}getScrollableParents(){return this._scrollableElements}getItemIndex(i){return this._isDragging?this._sortStrategy.getItemIndex(i):this._draggables.indexOf(i)}getItemAtIndex(i){return this._isDragging?this._sortStrategy.getItemAtIndex(i):this._draggables[i]||null}isReceiving(){return this._activeSiblings.size>0}_sortItem(i,t,e,n){if(this.sortingDisabled||!this._domRect||!Mn(this._domRect,Yn,t,e))return;let a=this._sortStrategy.sort(i,t,e,n);a&&this.sorted.next({previousIndex:a.previousIndex,currentIndex:a.currentIndex,container:this,item:i})}_startScrollingIfNecessary(i,t){if(this.autoScrollDisabled)return;let e,n=N.NONE,a=O.NONE;if(this._parentPositions.positions.forEach((r,s)=>{s===this._document||!r.clientRect||e||Mn(r.clientRect,Yn,i,t)&&([n,a]=Sa(s,r.clientRect,this._direction,i,t),(n||a)&&(e=s))}),!n&&!a){let{width:r,height:s}=this._viewportRuler.getViewportSize(),c={width:r,height:s,top:0,right:r,bottom:s,left:0};n=Zn(c,t),a=$n(c,i),e=window}e&&(n!==this._verticalScrollDirection||a!==this._horizontalScrollDirection||e!==this._scrollNode)&&(this._verticalScrollDirection=n,this._horizontalScrollDirection=a,this._scrollNode=e,(n||a)&&e?this._ngZone.runOutsideAngular(this._startScrollInterval):this._stopScrolling())}_stopScrolling(){this._stopScrollTimers.next()}_draggingStarted(){let i=this._container.style;this.beforeStarted.next(),this._isDragging=!0,this._initialScrollSnap=i.msScrollSnapType||i.scrollSnapType||"",i.scrollSnapType=i.msScrollSnapType="none",this._sortStrategy.start(this._draggables),this._cacheParentPositions(),this._viewportScrollSubscription.unsubscribe(),this._listenToScrollEvents()}_cacheParentPositions(){this._parentPositions.cache(this._scrollableElements),this._domRect=this._parentPositions.positions.get(this._container).clientRect}_reset(){this._isDragging=!1;let i=this._container.style;i.scrollSnapType=i.msScrollSnapType=this._initialScrollSnap,this._siblings.forEach(t=>t._stopReceiving(this)),this._sortStrategy.reset(),this._stopScrolling(),this._viewportScrollSubscription.unsubscribe(),this._parentPositions.clear()}_startScrollInterval=()=>{this._stopScrolling(),Zi(0,Ge).pipe(ot(this._stopScrollTimers)).subscribe(()=>{let i=this._scrollNode,t=this.autoScrollStep;this._verticalScrollDirection===N.UP?i.scrollBy(0,-t):this._verticalScrollDirection===N.DOWN&&i.scrollBy(0,t),this._horizontalScrollDirection===O.LEFT?i.scrollBy(-t,0):this._horizontalScrollDirection===O.RIGHT&&i.scrollBy(t,0)})};_isOverContainer(i,t){return this._domRect!=null&&di(this._domRect,i,t)}_getSiblingContainerFromPosition(i,t,e){return this._siblings.find(n=>n._canReceive(i,t,e))}_canReceive(i,t,e){if(!this._domRect||!di(this._domRect,t,e)||!this.enterPredicate(i,this))return!1;let n=this._getShadowRoot().elementFromPoint(t,e);return n?n===this._container||this._container.contains(n):!1}_startReceiving(i,t){let e=this._activeSiblings;!e.has(i)&&t.every(n=>this.enterPredicate(n,this)||this._draggables.indexOf(n)>-1)&&(e.add(i),this._cacheParentPositions(),this._listenToScrollEvents(),this.receivingStarted.next({initiator:i,receiver:this,items:t}))}_stopReceiving(i){this._activeSiblings.delete(i),this._viewportScrollSubscription.unsubscribe(),this.receivingStopped.next({initiator:i,receiver:this})}_listenToScrollEvents(){this._viewportScrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(i=>{if(this.isDragging()){let t=this._parentPositions.handleScroll(i);t&&this._sortStrategy.updateOnScroll(t.top,t.left)}else this.isReceiving()&&this._cacheParentPositions()})}_getShadowRoot(){if(!this._cachedShadowRoot){let i=xe(this._container);this._cachedShadowRoot=i||this._document}return this._cachedShadowRoot}_notifyReceivingSiblings(){let i=this._sortStrategy.getActiveItemsSnapshot().filter(t=>t.isDragging());this._siblings.forEach(t=>t._startReceiving(this,i))}};Te=new g("CDK_DRAG_PARENT"),ka=new g("CdkDragHandle"),qn=new g("CDK_DRAG_CONFIG"),Kn=new g("CdkDropList"),ss=(()=>{class o{element=l(R);dropContainer=l(Kn,{optional:!0,skipSelf:!0});_ngZone=l(v);_viewContainerRef=l(Ot);_dir=l(U,{optional:!0});_changeDetectorRef=l(at);_selfHandle=l(ka,{optional:!0,self:!0});_parentDrag=l(Te,{optional:!0,skipSelf:!0});_dragDropRegistry=l(bi);_destroyed=new m;_handles=new Gi([]);_previewTemplate=null;_placeholderTemplate=null;_dragRef;data;lockAxis=null;rootElementSelector;boundaryElement;dragStartDelay;freeDragPosition;get disabled(){return this._disabled||!!(this.dropContainer&&this.dropContainer.disabled)}set disabled(t){this._disabled=t,this._dragRef.disabled=this._disabled}_disabled=!1;constrainPosition;previewClass;previewContainer;scale=1;started=new C;released=new C;ended=new C;entered=new C;exited=new C;dropped=new C;moved=new Yt(t=>{let e=this._dragRef.moved.pipe(Ui(n=>({source:this,pointerPosition:n.pointerPosition,event:n.event,delta:n.delta,distance:n.distance}))).subscribe(t);return()=>{e.unsubscribe()}});_injector=l(_);constructor(){let t=this.dropContainer,e=l(qn,{optional:!0});this._dragRef=xa(this._injector,this.element,{dragStartThreshold:e&&e.dragStartThreshold!=null?e.dragStartThreshold:5,pointerDirectionChangeThreshold:e&&e.pointerDirectionChangeThreshold!=null?e.pointerDirectionChangeThreshold:5,zIndex:e?.zIndex}),this._dragRef.data=this,this._dragDropRegistry.registerDirectiveNode(this.element.nativeElement,this),e&&this._assignDefaults(e),t&&(t.addItem(this),t._dropListRef.beforeStarted.pipe(ot(this._destroyed)).subscribe(()=>{this._dragRef.scale=this.scale})),this._syncInputs(this._dragRef),this._handleEvents(this._dragRef)}getPlaceholderElement(){return this._dragRef.getPlaceholderElement()}getRootElement(){return this._dragRef.getRootElement()}reset(){this._dragRef.reset()}resetToBoundary(){this._dragRef.resetToBoundary()}getFreeDragPosition(){return this._dragRef.getFreeDragPosition()}setFreeDragPosition(t){this._dragRef.setFreeDragPosition(t)}ngAfterViewInit(){V(()=>{this._updateRootElement(),this._setupHandlesListener(),this._dragRef.scale=this.scale,this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)},{injector:this._injector})}ngOnChanges(t){let e=t.rootElementSelector,n=t.freeDragPosition;e&&!e.firstChange&&this._updateRootElement(),this._dragRef.scale=this.scale,n&&!n.firstChange&&this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)}ngOnDestroy(){this.dropContainer&&this.dropContainer.removeItem(this),this._dragDropRegistry.removeDirectiveNode(this.element.nativeElement),this._ngZone.runOutsideAngular(()=>{this._handles.complete(),this._destroyed.next(),this._destroyed.complete(),this._dragRef.dispose()})}_addHandle(t){let e=this._handles.getValue();e.push(t),this._handles.next(e)}_removeHandle(t){let e=this._handles.getValue(),n=e.indexOf(t);n>-1&&(e.splice(n,1),this._handles.next(e))}_setPreviewTemplate(t){this._previewTemplate=t}_resetPreviewTemplate(t){t===this._previewTemplate&&(this._previewTemplate=null)}_setPlaceholderTemplate(t){this._placeholderTemplate=t}_resetPlaceholderTemplate(t){t===this._placeholderTemplate&&(this._placeholderTemplate=null)}_updateRootElement(){let t=this.element.nativeElement,e=t;this.rootElementSelector&&(e=t.closest!==void 0?t.closest(this.rootElementSelector):t.parentElement?.closest(this.rootElementSelector)),this._dragRef.withRootElement(e||t)}_getBoundaryElement(){let t=this.boundaryElement;return t?typeof t=="string"?this.element.nativeElement.closest(t):j(t):null}_syncInputs(t){t.beforeStarted.subscribe(()=>{if(!t.isDragging()){let e=this._dir,n=this.dragStartDelay,a=this._placeholderTemplate?{template:this._placeholderTemplate.templateRef,context:this._placeholderTemplate.data,viewContainer:this._viewContainerRef}:null,r=this._previewTemplate?{template:this._previewTemplate.templateRef,context:this._previewTemplate.data,matchSize:this._previewTemplate.matchSize,viewContainer:this._viewContainerRef}:null;t.disabled=this.disabled,t.lockAxis=this.lockAxis,t.scale=this.scale,t.dragStartDelay=typeof n=="object"&&n?n:yt(n),t.constrainPosition=this.constrainPosition,t.previewClass=this.previewClass,t.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(a).withPreviewTemplate(r).withPreviewContainer(this.previewContainer||"global"),e&&t.withDirection(e.value)}}),t.beforeStarted.pipe(it(1)).subscribe(()=>{if(this._parentDrag){t.withParent(this._parentDrag._dragRef);return}let e=this.element.nativeElement.parentElement;for(;e;){let n=this._dragDropRegistry.getDragDirectiveForNode(e);if(n){t.withParent(n._dragRef);break}e=e.parentElement}})}_handleEvents(t){t.started.subscribe(e=>{this.started.emit({source:this,event:e.event}),this._changeDetectorRef.markForCheck()}),t.released.subscribe(e=>{this.released.emit({source:this,event:e.event})}),t.ended.subscribe(e=>{this.ended.emit({source:this,distance:e.distance,dropPoint:e.dropPoint,event:e.event}),this._changeDetectorRef.markForCheck()}),t.entered.subscribe(e=>{this.entered.emit({container:e.container.data,item:this,currentIndex:e.currentIndex})}),t.exited.subscribe(e=>{this.exited.emit({container:e.container.data,item:this})}),t.dropped.subscribe(e=>{this.dropped.emit({previousIndex:e.previousIndex,currentIndex:e.currentIndex,previousContainer:e.previousContainer.data,container:e.container.data,isPointerOverContainer:e.isPointerOverContainer,item:this,distance:e.distance,dropPoint:e.dropPoint,event:e.event})})}_assignDefaults(t){let{lockAxis:e,dragStartDelay:n,constrainPosition:a,previewClass:r,boundaryElement:s,draggingDisabled:c,rootElementSelector:d,previewContainer:h}=t;this.disabled=c??!1,this.dragStartDelay=n||0,this.lockAxis=e||null,a&&(this.constrainPosition=a),r&&(this.previewClass=r),s&&(this.boundaryElement=s),d&&(this.rootElementSelector=d),h&&(this.previewContainer=h)}_setupHandlesListener(){this._handles.pipe($i(t=>{let e=t.map(n=>n.element);this._selfHandle&&this.rootElementSelector&&e.push(this.element),this._dragRef.withHandles(e)}),Ue(t=>Pt(...t.map(e=>e._stateChanges.pipe(nt(e))))),ot(this._destroyed)).subscribe(t=>{let e=this._dragRef,n=t.element.nativeElement;t.disabled?e.disableHandle(n):e.enableHandle(n)})}static \u0275fac=function(e){return new(e||o)};static \u0275dir=b({type:o,selectors:[["","cdkDrag",""]],hostAttrs:[1,"cdk-drag"],hostVars:4,hostBindings:function(e,n){e&2&&A("cdk-drag-disabled",n.disabled)("cdk-drag-dragging",n._dragRef.isDragging())},inputs:{data:[0,"cdkDragData","data"],lockAxis:[0,"cdkDragLockAxis","lockAxis"],rootElementSelector:[0,"cdkDragRootElement","rootElementSelector"],boundaryElement:[0,"cdkDragBoundary","boundaryElement"],dragStartDelay:[0,"cdkDragStartDelay","dragStartDelay"],freeDragPosition:[0,"cdkDragFreeDragPosition","freeDragPosition"],disabled:[2,"cdkDragDisabled","disabled",E],constrainPosition:[0,"cdkDragConstrainPosition","constrainPosition"],previewClass:[0,"cdkDragPreviewClass","previewClass"],previewContainer:[0,"cdkDragPreviewContainer","previewContainer"],scale:[2,"cdkDragScale","scale",be]},outputs:{started:"cdkDragStarted",released:"cdkDragReleased",ended:"cdkDragEnded",entered:"cdkDragEntered",exited:"cdkDragExited",dropped:"cdkDragDropped",moved:"cdkDragMoved"},exportAs:["cdkDrag"],features:[bt([{provide:Te,useExisting:o}]),Xt]})}return o})(),fi=new g("CdkDropListGroup"),ls=(()=>{class o{_items=new Set;disabled=!1;ngOnDestroy(){this._items.clear()}static \u0275fac=function(e){return new(e||o)};static \u0275dir=b({type:o,selectors:[["","cdkDropListGroup",""]],inputs:{disabled:[2,"cdkDropListGroupDisabled","disabled",E]},exportAs:["cdkDropListGroup"],features:[bt([{provide:fi,useExisting:o}])]})}return o})(),cs=(()=>{class o{element=l(R);_changeDetectorRef=l(at);_scrollDispatcher=l(Re);_dir=l(U,{optional:!0});_group=l(fi,{optional:!0,skipSelf:!0});_latestSortedRefs;_destroyed=new m;_scrollableParentsResolved=!1;static _dropLists=[];_dropListRef;connectedTo=[];data;orientation="vertical";id=l(H).getId("cdk-drop-list-");lockAxis=null;get disabled(){return this._disabled||!!this._group&&this._group.disabled}set disabled(t){this._dropListRef.disabled=this._disabled=t}_disabled=!1;sortingDisabled=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;autoScrollDisabled=!1;autoScrollStep;elementContainerSelector=null;hasAnchor=!1;dropped=new C;entered=new C;exited=new C;sorted=new C;_unsortedItems=new Set;constructor(){let t=l(qn,{optional:!0}),e=l(_);this._dropListRef=Ca(e,this.element),this._dropListRef.data=this,t&&this._assignDefaults(t),this._dropListRef.enterPredicate=(n,a)=>this.enterPredicate(n.data,a.data),this._dropListRef.sortPredicate=(n,a,r)=>this.sortPredicate(n,a.data,r.data),this._setupInputSyncSubscription(this._dropListRef),this._handleEvents(this._dropListRef),o._dropLists.push(this),this._group&&this._group._items.add(this)}addItem(t){this._unsortedItems.add(t),t._dragRef._withDropContainer(this._dropListRef),this._dropListRef.isDragging()&&this._syncItemsWithRef(this.getSortedItems().map(e=>e._dragRef))}removeItem(t){if(this._unsortedItems.delete(t),this._latestSortedRefs){let e=this._latestSortedRefs.indexOf(t._dragRef);e>-1&&(this._latestSortedRefs.splice(e,1),this._syncItemsWithRef(this._latestSortedRefs))}}getSortedItems(){return Array.from(this._unsortedItems).sort((t,e)=>t._dragRef.getVisibleElement().compareDocumentPosition(e._dragRef.getVisibleElement())&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)}ngOnDestroy(){let t=o._dropLists.indexOf(this);t>-1&&o._dropLists.splice(t,1),this._group&&this._group._items.delete(this),this._latestSortedRefs=void 0,this._unsortedItems.clear(),this._dropListRef.dispose(),this._destroyed.next(),this._destroyed.complete()}_setupInputSyncSubscription(t){this._dir&&this._dir.change.pipe(nt(this._dir.value),ot(this._destroyed)).subscribe(e=>t.withDirection(e)),t.beforeStarted.subscribe(()=>{let e=ve(this.connectedTo).map(n=>{if(typeof n=="string"){let a=o._dropLists.find(r=>r.id===n);return a}return n});if(this._group&&this._group._items.forEach(n=>{e.indexOf(n)===-1&&e.push(n)}),!this._scrollableParentsResolved){let n=this._scrollDispatcher.getAncestorScrollContainers(this.element).map(a=>a.getElementRef().nativeElement);this._dropListRef.withScrollableParents(n),this._scrollableParentsResolved=!0}if(this.elementContainerSelector){let n=this.element.nativeElement.querySelector(this.elementContainerSelector);t.withElementContainer(n)}t.disabled=this.disabled,t.lockAxis=this.lockAxis,t.sortingDisabled=this.sortingDisabled,t.autoScrollDisabled=this.autoScrollDisabled,t.autoScrollStep=yt(this.autoScrollStep,2),t.hasAnchor=this.hasAnchor,t.connectedTo(e.filter(n=>n&&n!==this).map(n=>n._dropListRef)).withOrientation(this.orientation)})}_handleEvents(t){t.beforeStarted.subscribe(()=>{this._syncItemsWithRef(this.getSortedItems().map(e=>e._dragRef)),this._changeDetectorRef.markForCheck()}),t.entered.subscribe(e=>{this.entered.emit({container:this,item:e.item.data,currentIndex:e.currentIndex})}),t.exited.subscribe(e=>{this.exited.emit({container:this,item:e.item.data}),this._changeDetectorRef.markForCheck()}),t.sorted.subscribe(e=>{this.sorted.emit({previousIndex:e.previousIndex,currentIndex:e.currentIndex,container:this,item:e.item.data})}),t.dropped.subscribe(e=>{this.dropped.emit({previousIndex:e.previousIndex,currentIndex:e.currentIndex,previousContainer:e.previousContainer.data,container:e.container.data,item:e.item.data,isPointerOverContainer:e.isPointerOverContainer,distance:e.distance,dropPoint:e.dropPoint,event:e.event}),this._changeDetectorRef.markForCheck()}),Pt(t.receivingStarted,t.receivingStopped).subscribe(()=>this._changeDetectorRef.markForCheck())}_assignDefaults(t){let{lockAxis:e,draggingDisabled:n,sortingDisabled:a,listAutoScrollDisabled:r,listOrientation:s}=t;this.disabled=n??!1,this.sortingDisabled=a??!1,this.autoScrollDisabled=r??!1,this.orientation=s||"vertical",this.lockAxis=e||null}_syncItemsWithRef(t){this._latestSortedRefs=t,this._dropListRef.withItems(t)}static \u0275fac=function(e){return new(e||o)};static \u0275dir=b({type:o,selectors:[["","cdkDropList",""],["cdk-drop-list"]],hostAttrs:[1,"cdk-drop-list"],hostVars:7,hostBindings:function(e,n){e&2&&(G("id",n.id),A("cdk-drop-list-disabled",n.disabled)("cdk-drop-list-dragging",n._dropListRef.isDragging())("cdk-drop-list-receiving",n._dropListRef.isReceiving()))},inputs:{connectedTo:[0,"cdkDropListConnectedTo","connectedTo"],data:[0,"cdkDropListData","data"],orientation:[0,"cdkDropListOrientation","orientation"],id:"id",lockAxis:[0,"cdkDropListLockAxis","lockAxis"],disabled:[2,"cdkDropListDisabled","disabled",E],sortingDisabled:[2,"cdkDropListSortingDisabled","sortingDisabled",E],enterPredicate:[0,"cdkDropListEnterPredicate","enterPredicate"],sortPredicate:[0,"cdkDropListSortPredicate","sortPredicate"],autoScrollDisabled:[2,"cdkDropListAutoScrollDisabled","autoScrollDisabled",E],autoScrollStep:[0,"cdkDropListAutoScrollStep","autoScrollStep"],elementContainerSelector:[0,"cdkDropListElementContainer","elementContainerSelector"],hasAnchor:[2,"cdkDropListHasAnchor","hasAnchor",E]},outputs:{dropped:"cdkDropListDropped",entered:"cdkDropListEntered",exited:"cdkDropListExited",sorted:"cdkDropListSorted"},exportAs:["cdkDropList"],features:[bt([{provide:fi,useValue:void 0},{provide:Kn,useExisting:o}])]})}return o})(),Ra=new g("CdkDragPreview"),ds=(()=>{class o{templateRef=l(W);_drag=l(Te,{optional:!0});data;matchSize=!1;constructor(){this._drag?._setPreviewTemplate(this)}ngOnDestroy(){this._drag?._resetPreviewTemplate(this)}static \u0275fac=function(e){return new(e||o)};static \u0275dir=b({type:o,selectors:[["ng-template","cdkDragPreview",""]],inputs:{data:"data",matchSize:[2,"matchSize","matchSize",E]},features:[bt([{provide:Ra,useExisting:o}])]})}return o})(),Pa=new g("CdkDragPlaceholder"),hs=(()=>{class o{templateRef=l(W);_drag=l(Te,{optional:!0});data;constructor(){this._drag?._setPlaceholderTemplate(this)}ngOnDestroy(){this._drag?._resetPlaceholderTemplate(this)}static \u0275fac=function(e){return new(e||o)};static \u0275dir=b({type:o,selectors:[["ng-template","cdkDragPlaceholder",""]],inputs:{data:"data"},features:[bt([{provide:Pa,useExisting:o}])]})}return o})()});var Vt,Qn=p(()=>{"use strict";Vt=(function(o){return o[o.Down=0]="Down",o[o.Up=1]="Up",o})(Vt||{})});var $,Jn=p(()=>{"use strict";$=(function(o){return o[o.Bottom=1]="Bottom",o[o.Top=-1]="Top",o})($||{})});var Dt=p(()=>{"use strict";Qn();Jn()});var Ct,to=p(()=>{"use strict";Ct=(function(o){return o[o.Ace=1]="Ace",o[o.Two=2]="Two",o[o.Three=3]="Three",o[o.Four=4]="Four",o[o.Five=5]="Five",o[o.Six=6]="Six",o[o.Seven=7]="Seven",o[o.Eight=8]="Eight",o[o.Nine=9]="Nine",o[o.Ten=10]="Ten",o[o.Jack=11]="Jack",o[o.Queen=12]="Queen",o[o.King=13]="King",o[o.Joker=14]="Joker",o})(Ct||{})});var rt,eo=p(()=>{"use strict";rt=(function(o){return o[o.Black=0]="Black",o[o.Red=1]="Red",o})(rt||{})});var te,io=p(()=>{"use strict";te=(function(o){return o[o.Clubs=0]="Clubs",o[o.Hearts=1]="Hearts",o[o.Spades=2]="Spades",o[o.Diamonds=3]="Diamonds",o[o.Joker=4]="Joker",o})(te||{})});var no=p(()=>{"use strict";eo();to();io()});var M,St=p(()=>{"use strict";Dt();M=class{constructor(i,t){this.find=e=>this.cards.find(n=>n.ids.name===e||n.ids.deckId===e),this.findIndex=e=>this.cards.findIndex(n=>n.ids.name===e||n.ids.deckId===e),this.includes=e=>!!this.find(e),this.turn=(e,n)=>{let a=this.cards.slice(e,n);return a.forEach(r=>r.flip()),a},this.add=e=>{!e||this.includes(e.ids.deckId)||this.cards.push(e)},this.remove=e=>{let n=this.cards.indexOf(e);n<0||this.cards.splice(n,1)},this.move=(e,n,a)=>{n=(n||0)*this.drawFrom,this.drawFrom<1&&n===0&&(n=-(a||1)),a||=this.cards.length-n;let r=this.cards.splice(n,a);return e.drawFrom!==this.drawFrom&&(r=r.reverse()),r.forEach(s=>s.setPile(e)),r},this.cards=i||[],this.drawFrom=t||$.Top,this.cards.forEach(e=>e.setPile(this))}}});var vi,oo=p(()=>{"use strict";Dt();St();vi=class extends M{constructor(){super([],$.Bottom)}}});var yi,ao=p(()=>{"use strict";Dt();St();yi=class extends M{constructor(){super([],$.Bottom)}}});var wi,ro=p(()=>{"use strict";Dt();St();wi=class extends M{constructor(){super([],$.Bottom)}}});var so=p(()=>{"use strict";St()});var lo=p(()=>{"use strict";St()});var co=p(()=>{"use strict";so();oo();ao();lo();St();ro()});var Ae,ho=p(()=>{"use strict";Dt();Ae=class{constructor(i,t){this.ids=i,this.style=t,this.setState=e=>{this.style.state=e},this.getPile=()=>this.pile,this.setPile=e=>{this.pile?.includes(this.ids.deckId)&&this.pile.remove(this),this.pile=e,this.pile?.add(this)},this.flip=()=>{this.setState(this.style.state===0?1:0)},this.toString=()=>this.ids.fullname}get imagePath(){return this.style.state===Vt.Up?this.style.images.front:this.style.images.back}}});var ee,xi=p(()=>{"use strict";co();da();ee=(()=>{class o extends M{constructor(){super(...arguments),this.backImg=o.defaultBackImg,this.shuffle=(t,e)=>{let n=En(this.cards,a=>a.ids.deckId,t,e);return this.shuffleSeed=n.seed,this.cards.splice(0,this.cards.length,...n.items),this.cards}}static{this.defaultBackImg="b2fv"}}return o})()});var Oa,mo,po,Di,uo=p(()=>{"use strict";Dt();no();ho();xi();Oa=["c1","c2","c3","c4","c5","c6","c7","c8","c9","c10","cj","cq","ck","h1","h2","h3","h4","h5","h6","h7","h8","h9","h10","hj","hq","hk","s1","s2","s3","s4","s5","s6","s7","s8","s9","s10","sj","sq","sk","d1","d2","d3","d4","d5","d6","d7","d8","d9","d10","dj","dq","dk"],mo={[rt.Black]:"jb",[rt.Red]:"jr"},po=(o,i,t)=>{let e=i<52?i%13+1:Ct.Joker,n=e<14?e:Ct.Joker,a=i<52?Math.floor(i/13):te.Joker,r=a%2;n===Ct.Joker&&r===rt.Black&&o==="jr"&&(r=rt.Red);let s=(e<14?`${Ct[n]} of`:rt[r])+` ${te[a]}`,c={name:o,deckId:i,faceId:e,fullname:s},d={name:n,suit:a,color:r,state:Vt.Down,images:{front:`assets/img/cards/face/${o}.png`,back:`assets/img/cards/back/${t||ee.defaultBackImg}.png`}};return new Ae(c,d)},Di=class extends ee{constructor(i,t){super(Oa.map((e,n)=>po(e,n,i))),this.addJoker=e=>{this.includes(mo[e])||this.add(po(mo[e],this.cards.length,this.backImg))},this.backImg=i||ee.defaultBackImg,t=Math.max(t||0,0);for(let e=0;e<t;e++)this.addJoker(e%2)}}});var Ia=p(()=>{"use strict";xi();uo()});var ie,tt,st,Ci,lt,Me,ct,ne=p(()=>{"use strict";f();f();ie=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},tt=class extends ie{component;viewContainerRef;injector;projectableNodes;bindings;constructor(i,t,e,n,a){super(),this.component=i,this.viewContainerRef=t,this.injector=e,this.projectableNodes=n,this.bindings=a||null}},st=class extends ie{templateRef;viewContainerRef;context;injector;constructor(i,t,e,n){super(),this.templateRef=i,this.viewContainerRef=t,this.context=e,this.injector=n}get origin(){return this.templateRef.elementRef}attach(i,t=this.context){return this.context=t,super.attach(i)}detach(){return this.context=void 0,super.detach()}},Ci=class extends ie{element;constructor(i){super(),this.element=i instanceof R?i.nativeElement:i}},lt=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof tt)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof st)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof Ci)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Me=class extends lt{outletElement;_appRef;_defaultInjector;constructor(i,t,e){super(),this.outletElement=i,this._appRef=t,this._defaultInjector=e}attachComponentPortal(i){let t;if(i.viewContainerRef){let e=i.injector||i.viewContainerRef.injector,n=e.get(Ze,null,{optional:!0})||void 0;t=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:e,ngModuleRef:n,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),this.setDisposeFn(()=>t.destroy())}else{let e=this._appRef,n=i.injector||this._defaultInjector||_.NULL,a=n.get(me,e.injector);t=cn(i.component,{elementInjector:n,environmentInjector:a,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),e.attachView(t.hostView),this.setDisposeFn(()=>{e.viewCount>0&&e.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=i,t}attachTemplatePortal(i){let t=i.viewContainerRef,e=t.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return e.rootNodes.forEach(n=>this.outletElement.appendChild(n)),e.detectChanges(),this.setDisposeFn(()=>{let n=t.indexOf(e);n!==-1&&t.remove(n)}),this._attachedPortal=i,e}attachDomPortal=i=>{let t=i.element;t.parentNode;let e=this.outletElement.ownerDocument.createComment("dom-portal");t.parentNode.insertBefore(e,t),this.outletElement.appendChild(t),this._attachedPortal=i,super.setDisposeFn(()=>{e.parentNode&&e.parentNode.replaceChild(t,e)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}},ct=(()=>{class o extends lt{_moduleRef=l(Ze,{optional:!0});_document=l(D);_viewContainerRef=l(Ot);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}attached=new C;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);let e=t.viewContainerRef!=null?t.viewContainerRef:this._viewContainerRef,n=e.createComponent(t.component,{index:e.length,injector:t.injector||e.injector,projectableNodes:t.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:t.bindings||void 0});return e!==this._viewContainerRef&&this._getRootNode().appendChild(n.hostView.rootNodes[0]),super.setDisposeFn(()=>n.destroy()),this._attachedPortal=t,this._attachedRef=n,this.attached.emit(n),n}attachTemplatePortal(t){t.setAttachedHost(this);let e=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=e,this.attached.emit(e),e}attachDomPortal=t=>{let e=t.element;e.parentNode;let n=this._document.createComment("dom-portal");t.setAttachedHost(this),e.parentNode.insertBefore(n,e),this._getRootNode().appendChild(e),this._attachedPortal=t,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(e,n)})};_getRootNode(){let t=this._viewContainerRef.element.nativeElement;return t.nodeType===t.ELEMENT_NODE?t:t.parentNode}static \u0275fac=function(e){return new(e||o)};static \u0275dir=b({type:o,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[I]})}return o})()});function oe(o){return new Be(o.get($t),o.get(D))}function go(o,i){let t=typeof ShadowRoot<"u"&&ShadowRoot,e=i;for(;e;){if(e===o)return!0;e=t&&e instanceof ShadowRoot?e.host:e.parentNode}return!1}function xo(o){return o&&o.nodeType===1}function kt(o){return new Fe}function ae(o,i){o.get(vt).load(wo);let t=o.get(Ri),e=o.get(D),n=o.get(H),a=o.get($e),r=o.get(U),s=o.get(Y,null,{optional:!0})||o.get(L).createRenderer(null,null),c=new dt(i),d=o.get(Do,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||r.value,"showPopover"in e.body?c.usePopover=i?.usePopover??d:c.usePopover=!1;let h=e.createElement("div"),u=e.createElement("div");h.id=n.getId("cdk-overlay-"),h.classList.add("cdk-overlay-pane"),u.appendChild(h),c.usePopover&&(u.setAttribute("popover","manual"),u.classList.add("cdk-overlay-popover"));let w=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return xo(w)?w.after(u):w?.type==="parent"?w.element.appendChild(u):t.getContainerElement().appendChild(u),new jt(new Me(h,a,o),u,h,c,o.get(v),o.get(vo),e,o.get(dn),o.get(yo),i?.disableAnimations??o.get(qi,null,{optional:!0})==="NoopAnimations",o.get(me),s)}var fo,Be,Le,dt,bo,vo,yo,wo,Ri,Si,jt,_o,Fe,Do,Pi=p(()=>{"use strict";f();f();Ko();ei();ii();ra();gn();pt();sa();mn();Pe();yn();ni();we();ne();fo=Ce();Be=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,t){this._viewportRuler=i,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||"",this._previousHTMLStyles.top=i.style.top||"",i.style.left=J(-this._previousScrollPosition.left),i.style.top=J(-this._previousScrollPosition.top),i.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,t=this._document.body,e=i.style,n=t.style,a=e.scrollBehavior||"",r=n.scrollBehavior||"";this._isEnabled=!1,e.left=this._previousHTMLStyles.left,e.top=this._previousHTMLStyles.top,i.classList.remove("cdk-global-scrollblock"),fo&&(e.scrollBehavior=n.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),fo&&(e.scrollBehavior=a,n.scrollBehavior=r)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let t=this._document.documentElement,e=this._viewportRuler.getViewportSize();return t.scrollHeight>e.height||t.scrollWidth>e.width}},Le=class{enable(){}disable(){}attach(){}},dt=class{positionStrategy;scrollStrategy=new Le;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let t=Object.keys(i);for(let e of t)i[e]!==void 0&&(this[e]=i[e])}}},bo=(()=>{class o{_attachedOverlays=[];_document=l(D);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let e=this._attachedOverlays.indexOf(t);e>-1&&this._attachedOverlays.splice(e,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,e,n){return n.observers.length<1?!1:t.eventPredicate?t.eventPredicate(e):!0}static \u0275fac=function(e){return new(e||o)};static \u0275prov=y({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),vo=(()=>{class o extends bo{_ngZone=l(v);_renderer=l(L).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let e=this._attachedOverlays;for(let n=e.length-1;n>-1;n--){let a=e[n];if(this.canReceiveEvent(a,t,a._keydownEvents)){this._ngZone.run(()=>a._keydownEvents.next(t));break}}};static \u0275fac=(()=>{let t;return function(n){return(t||(t=ut(o)))(n||o)}})();static \u0275prov=y({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),yo=(()=>{class o extends bo{_platform=l(F);_ngZone=l(v);_renderer=l(L).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let e=this._document.body,n={capture:!0},a=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[a.listen(e,"pointerdown",this._pointerDownListener,n),a.listen(e,"click",this._clickListener,n),a.listen(e,"auxclick",this._clickListener,n),a.listen(e,"contextmenu",this._clickListener,n)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=e.style.cursor,e.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=Z(t)};_clickListener=t=>{let e=Z(t),n=t.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:e;this._pointerDownEventTarget=null;let a=this._attachedOverlays.slice();for(let r=a.length-1;r>-1;r--){let s=a[r],c=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,t,c))){if(go(s.overlayElement,e)||go(s.overlayElement,n))break;this._ngZone?this._ngZone.run(()=>c.next(t)):c.next(t)}}};static \u0275fac=(()=>{let t;return function(n){return(t||(t=ut(o)))(n||o)}})();static \u0275prov=y({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();wo=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275cmp=k({type:o,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(e,n){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return o})(),Ri=(()=>{class o{_platform=l(F);_containerElement;_document=l(D);_styleLoader=l(vt);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t="cdk-overlay-container";if(this._platform.isBrowser||ai()){let n=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let a=0;a<n.length;a++)n[a].remove()}let e=this._document.createElement("div");e.classList.add(t),ai()?e.setAttribute("platform","test"):this._platform.isBrowser||e.setAttribute("platform","server"),this._document.body.appendChild(e),this._containerElement=e}_loadStyles(){this._styleLoader.load(wo)}static \u0275fac=function(e){return new(e||o)};static \u0275prov=y({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),Si=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,t,e,n){this._renderer=t,this._ngZone=e,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=t.listen(this.element,"click",n)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};jt=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new m;_attachments=new m;_detachments=new m;_positionStrategy;_scrollStrategy;_locationChanges=K.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new m;_outsidePointerEvents=new m;_afterNextRenderRef;constructor(i,t,e,n,a,r,s,c,d,h=!1,u,w){this._portalOutlet=i,this._host=t,this._pane=e,this._config=n,this._ngZone=a,this._keyboardDispatcher=r,this._document=s,this._location=c,this._outsideClickDispatcher=d,this._animationsDisabled=h,this._injector=u,this._renderer=w,n.scrollStrategy&&(this._scrollStrategy=n.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=n.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=V(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof t?.onDestroy=="function"&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=x(x({},this._config),i),this._updateElementSize()}setDirection(i){this._config=ce(x({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=J(this._config.width),i.height=J(this._config.height),i.minWidth=J(this._config.minWidth),i.minHeight=J(this._config.minHeight),i.maxWidth=J(this._config.maxWidth),i.maxHeight=J(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;xo(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(i){}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Si(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,t,e){let n=ve(t||[]).filter(a=>!!a);n.length&&(e?i.classList.add(...n):i.classList.remove(...n))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=V(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(t){if(i)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}},_o="cdk-global-overlay-wrapper";Fe=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let t=i.getConfig();this._overlayRef=i,this._width&&!t.width&&i.updateSize({width:this._width}),this._height&&!t.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(_o),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,e=this._overlayRef.getConfig(),{width:n,height:a,maxWidth:r,maxHeight:s}=e,c=(n==="100%"||n==="100vw")&&(!r||r==="100%"||r==="100vw"),d=(a==="100%"||a==="100vh")&&(!s||s==="100%"||s==="100vh"),h=this._xPosition,u=this._xOffset,w=this._overlayRef.getConfig().direction==="rtl",et="",Rt="",q="";c?q="flex-start":h==="center"?(q="center",w?Rt=u:et=u):w?h==="left"||h==="end"?(q="flex-end",et=u):(h==="right"||h==="start")&&(q="flex-start",Rt=u):h==="left"||h==="start"?(q="flex-start",et=u):(h==="right"||h==="end")&&(q="flex-end",Rt=u),i.position=this._cssPosition,i.marginLeft=c?"0":et,i.marginTop=d?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=c?"0":Rt,t.justifyContent=q,t.alignItems=d?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,e=t.style;t.classList.remove(_o),e.justifyContent=e.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}},Do=new g("OVERLAY_DEFAULT_CONFIG")});var Oi=p(()=>{"use strict";Pi()});function Ta(o,i){}function La(o){let i=Et(o),t=new C;return{valueSignal:i,get value(){return i()},change:t,ngOnDestroy(){t.complete()}}}function Ii(o,i){let t=o.length;for(;t--;)i(o[t])}var ht,Ti,re,Aa,Ma,Ba,So,ko=p(()=>{"use strict";f();f();pt();ne();oa();ia();ei();ii();Pi();Gt();Cn();ni();we();ht=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext},Ti=(()=>{class o extends lt{_elementRef=l(R);_focusTrapFactory=l(xn);_config;_interactivityChecker=l(wn);_ngZone=l(v);_focusMonitor=l(Se);_renderer=l(Y);_changeDetectorRef=l(at);_injector=l(_);_platform=l(F);_document=l(D);_portalOutlet;_focusTrapped=new m;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=l(ht,{optional:!0})||new ht,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){let e=this._ariaLabelledByQueue.indexOf(t);e>-1&&(this._ariaLabelledByQueue.splice(e,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}attachDomPortal=t=>{this._portalOutlet.hasAttached();let e=this._portalOutlet.attachDomPortal(t);return this._contentAttached(),e};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{a(),r(),t.removeAttribute("tabindex")},a=this._renderer.listen(t,"blur",n),r=this._renderer.listen(t,"mousedown",n)})),t.focus(e)}_focusByCssSelector(t,e){let n=this._elementRef.nativeElement.querySelector(t);n&&this._forceFocus(n,e)}_trapFocus(t){this._isDestroyed||V(()=>{let e=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||e.focus(t);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(t)||this._focusDialogContainer(t);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',t);break;default:this._focusByCssSelector(this._config.autoFocus,t);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let t=this._config.restoreFocus,e=null;if(typeof t=="string"?e=this._document.querySelector(t):typeof t=="boolean"?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&typeof e.focus=="function"){let n=De(),a=this._elementRef.nativeElement;(!n||n===this._document.body||n===a||a.contains(n))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(t){this._elementRef.nativeElement.focus?.(t)}_containsFocus(){let t=this._elementRef.nativeElement,e=De();return t===e||t.contains(e)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=De()))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=k({type:o,selectors:[["cdk-dialog-container"]],viewQuery:function(e,n){if(e&1&&Zt(ct,7),e&2){let a;Mt(a=Bt())&&(n._portalOutlet=a.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(e,n){e&2&&G("id",n._config.id||null)("role",n._config.role)("aria-modal",n._config.ariaModal)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null)},features:[I],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,n){e&1&&It(0,Ta,0,0,"ng-template",0)},dependencies:[ct],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return o})(),re=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new m;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(i,t){this.overlayRef=i,this.config=t,this.disableClose=t.disableClose,this.backdropClick=i.backdropClick(),this.keydownEvents=i.keydownEvents(),this.outsidePointerEvents=i.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===27&&!this.disableClose&&!ke(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=i.detachments().subscribe(()=>{t.closeOnOverlayDetachments!==!1&&this.close()})}close(i,t){if(this._canClose(i)){let e=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),e.next(i),e.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(i="",t=""){return this.overlayRef.updateSize({width:i,height:t}),this}addPanelClass(i){return this.overlayRef.addPanelClass(i),this}removePanelClass(i){return this.overlayRef.removePanelClass(i),this}_canClose(i){let t=this.config;return!!this.containerInstance&&(!t.closePredicate||t.closePredicate(i,t,this.componentInstance))}},Aa=new g("DialogScrollStrategy",{providedIn:"root",factory:()=>{let o=l(_);return()=>oe(o)}}),Ma=new g("DialogData"),Ba=new g("DefaultDialogConfig");So=(()=>{class o{_injector=l(_);_defaultOptions=l(Ba,{optional:!0});_parentDialog=l(o,{optional:!0,skipSelf:!0});_overlayContainer=l(Ri);_idGenerator=l(H);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new m;_afterOpenedAtThisLevel=new m;_ariaHiddenElements=new Map;_scrollStrategy=l(Aa);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=he(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(nt(void 0)));constructor(){}open(t,e){let n=this._defaultOptions||new ht;e=x(x({},n),e),e.id=e.id||this._idGenerator.getId("cdk-dialog-"),e.id&&this.getDialogById(e.id);let a=this._getOverlayConfig(e),r=ae(this._injector,a),s=new re(r,e),c=this._attachContainer(r,s,e);if(s.containerInstance=c,!this.openDialogs.length){let d=this._overlayContainer.getContainerElement();c._focusTrapped?c._focusTrapped.pipe(it(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(d)}):this._hideNonDialogContentFromAssistiveTechnology(d)}return this._attachDialogContent(t,s,c,e),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){Ii(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){Ii(this._openDialogsAtThisLevel,t=>{t.config.closeOnDestroy===!1&&this._removeOpenDialog(t,!1)}),Ii(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){let e=new dt({positionStrategy:t.positionStrategy||kt().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation,disableAnimations:t.disableAnimations});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,n){let a=n.injector||n.viewContainerRef?.injector,r=[{provide:ht,useValue:n},{provide:re,useValue:e},{provide:jt,useValue:t}],s;n.container?typeof n.container=="function"?s=n.container:(s=n.container.type,r.push(...n.container.providers(n))):s=Ti;let c=new tt(s,n.viewContainerRef,_.create({parent:a||this._injector,providers:r}));return t.attach(c).instance}_attachDialogContent(t,e,n,a){if(t instanceof W){let r=this._createInjector(a,e,n,void 0),s={$implicit:a.data,dialogRef:e};a.templateContext&&(s=x(x({},s),typeof a.templateContext=="function"?a.templateContext():a.templateContext)),n.attachTemplatePortal(new st(t,null,s,r))}else{let r=this._createInjector(a,e,n,this._injector),s=n.attachComponentPortal(new tt(t,a.viewContainerRef,r));e.componentRef=s,e.componentInstance=s.instance}}_createInjector(t,e,n,a){let r=t.injector||t.viewContainerRef?.injector,s=[{provide:Ma,useValue:t.data},{provide:re,useValue:e}];return t.providers&&(typeof t.providers=="function"?s.push(...t.providers(e,t,n)):s.push(...t.providers)),t.direction&&(!r||!r.get(U,null,{optional:!0}))&&s.push({provide:U,useValue:La(t.direction)}),_.create({parent:r||a,providers:s})}_removeOpenDialog(t,e){let n=this.openDialogs.indexOf(t);n>-1&&(this.openDialogs.splice(n,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((a,r)=>{a?r.setAttribute("aria-hidden",a):r.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(t){if(t.parentElement){let e=t.parentElement.children;for(let n=e.length-1;n>-1;n--){let a=e[n];a!==t&&a.nodeName!=="SCRIPT"&&a.nodeName!=="STYLE"&&!a.hasAttribute("aria-live")&&!a.hasAttribute("popover")&&(this._ariaHiddenElements.set(a,a.getAttribute("aria-hidden")),a.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(e){return new(e||o)};static \u0275prov=y({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()});function Fa(o,i){}function Oo(o){return o==null?null:typeof o=="number"?o:o.endsWith("ms")?yt(o.substring(0,o.length-2)):o.endsWith("s")?yt(o.substring(0,o.length-1))*1e3:o==="0"?0:null}function ja(o,i,t){return o._closeInteractionType=i,o.close(t)}function Ya(o,i){let t=o.nativeElement.parentElement;for(;t&&!t.classList.contains("mat-mdc-dialog-container");)t=t.parentElement;return t?i.find(e=>e.id===t.id):null}var ze,Ai,Ro,Po,za,Na,Va,Eo,se,Ht,Mi,Ha,Wa,Bi,Io,To,Ao,Mo,Li=p(()=>{"use strict";Oi();f();f();ko();la();ne();ye();pt();Gt();Cn();oi();Pe();ze=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},Ai="mdc-dialog--open",Ro="mdc-dialog--opening",Po="mdc-dialog--closing",za=150,Na=75,Va=(()=>{class o extends Ti{_animationStateChanged=new C;_animationsEnabled=!X();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Oo(this._config.enterAnimationDuration)??za:0;_exitAnimationDuration=this._animationsEnabled?Oo(this._config.exitAnimationDuration)??Na:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Eo,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Ro,Ai)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Ai),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Ai),this._animationsEnabled?(this._hostElement.style.setProperty(Eo,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Po)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Ro,Po)}_waitForAnimationToComplete(t,e){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(e,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(t){let e=super.attachComponentPortal(t);return e.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),e}static \u0275fac=(()=>{let t;return function(n){return(t||(t=ut(o)))(n||o)}})();static \u0275cmp=k({type:o,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(e,n){e&2&&(Qe("id",n._config.id),G("aria-modal",n._config.ariaModal)("role",n._config.role)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null),A("_mat-animation-noopable",!n._animationsEnabled)("mat-mdc-dialog-container-with-actions",n._actionSectionCount>0))},features:[I],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(e,n){e&1&&(T(0,"div",0)(1,"div",1),It(2,Fa,0,0,"ng-template",2),P()())},dependencies:[ct],styles:[`.mat-mdc-dialog-container {
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
`],encapsulation:2})}return o})(),Eo="--mat-dialog-transition-duration";se=(function(o){return o[o.OPEN=0]="OPEN",o[o.CLOSING=1]="CLOSING",o[o.CLOSED=2]="CLOSED",o})(se||{}),Ht=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Ye(1);_beforeClosed=new Ye(1);_result;_closeFallbackTimeout;_state=se.OPEN;_closeInteractionType;constructor(i,t,e){this._ref=i,this._config=t,this._containerInstance=e,this.disableClose=t.disableClose,this.id=i.id,i.addPanelClass("mat-mdc-dialog-panel"),e._animationStateChanged.pipe(mt(n=>n.state==="opened"),it(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe(mt(n=>n.state==="closed"),it(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),i.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Pt(this.backdropClick(),this.keydownEvents().pipe(mt(n=>n.keyCode===27&&!this.disableClose&&!ke(n)))).subscribe(n=>{this.disableClose||(n.preventDefault(),ja(this,n.type==="keydown"?"keyboard":"mouse"))})}close(i){let t=this._config.closePredicate;t&&!t(i,this._config,this.componentInstance)||(this._result=i,this._containerInstance._animationStateChanged.pipe(mt(e=>e.state==="closing"),it(1)).subscribe(e=>{this._beforeClosed.next(i),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),e.totalTime+100)}),this._state=se.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(i){let t=this._ref.config.positionStrategy;return i&&(i.left||i.right)?i.left?t.left(i.left):t.right(i.right):t.centerHorizontally(),i&&(i.top||i.bottom)?i.top?t.top(i.top):t.bottom(i.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(i="",t=""){return this._ref.updateSize(i,t),this}addPanelClass(i){return this._ref.addPanelClass(i),this}removePanelClass(i){return this._ref.removePanelClass(i),this}getState(){return this._state}_finishDialogClose(){this._state=se.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};Mi=new g("MatMdcDialogData"),Ha=new g("mat-mdc-dialog-default-options"),Wa=new g("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let o=l(_);return()=>oe(o)}}),Bi=(()=>{class o{_defaultOptions=l(Ha,{optional:!0});_scrollStrategy=l(Wa);_parentDialog=l(o,{optional:!0,skipSelf:!0});_idGenerator=l(H);_injector=l(_);_dialog=l(So);_animationsDisabled=X();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new m;_afterOpenedAtThisLevel=new m;dialogConfigClass=ze;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=he(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(nt(void 0)));constructor(){this._dialogRefConstructor=Ht,this._dialogContainerType=Va,this._dialogDataToken=Mi}open(t,e){let n;e=x(x({},this._defaultOptions||new ze),e),e.id=e.id||this._idGenerator.getId("mat-mdc-dialog-"),e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();let a=this._dialog.open(t,ce(x({},e),{positionStrategy:kt(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||e.enterAnimationDuration?.toLocaleString()==="0"||e.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:e},{provide:ht,useValue:e}]},templateContext:()=>({dialogRef:n}),providers:(r,s,c)=>(n=new this._dialogRefConstructor(r,e,c),n.updatePosition(e?.position),[{provide:this._dialogContainerType,useValue:c},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:n}])}));return n.componentRef=a.componentRef,n.componentInstance=a.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{let r=this.openDialogs.indexOf(n);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}static \u0275fac=function(e){return new(e||o)};static \u0275prov=y({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),Io=(()=>{class o{_dialogRef=l(Ht,{optional:!0});_elementRef=l(R);_dialog=l(Bi);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=Ya(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(e){return new(e||o)};static \u0275dir=b({type:o})}return o})(),To=(()=>{class o extends Io{id=l(H).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=ut(o)))(n||o)}})();static \u0275dir=b({type:o,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(e,n){e&2&&Qe("id",n.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[I]})}return o})(),Ao=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275dir=b({type:o,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[en([On])]})}return o})(),Mo=(()=>{class o extends Io{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=ut(o)))(n||o)}})();static \u0275dir=b({type:o,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(e,n){e&2&&A("mat-mdc-dialog-actions-align-start",n.align==="start")("mat-mdc-dialog-actions-align-center",n.align==="center")("mat-mdc-dialog-actions-align-end",n.align==="end")},inputs:{align:"align"},features:[I]})}return o})()});var Ga,Xa,Fi,zi,Bo,Ne,Lo,Fo=p(()=>{"use strict";f();f();kn();ye();ca();Ga={capture:!0},Xa=["focus","mousedown","mouseenter","touchstart"],Fi="mat-ripple-loader-uninitialized",zi="mat-ripple-loader-class-name",Bo="mat-ripple-loader-centered",Ne="mat-ripple-loader-disabled",Lo=(()=>{class o{_document=l(D);_animationsDisabled=X();_globalRippleOptions=l(Pn,{optional:!0});_platform=l(F);_ngZone=l(v);_injector=l(_);_eventCleanups;_hosts=new Map;constructor(){let t=l(L).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Xa.map(e=>t.listen(this._document,e,this._onInteraction,Ga)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(Fi,this._globalRippleOptions?.namespace??""),(e.className||!t.hasAttribute(zi))&&t.setAttribute(zi,e.className||""),e.centered&&t.setAttribute(Bo,""),e.disabled&&t.setAttribute(Ne,"")}setDisabled(t,e){let n=this._hosts.get(t);n?(n.target.rippleDisabled=e,!e&&!n.hasSetUpEvents&&(n.hasSetUpEvents=!0,n.renderer.setupTriggerEvents(t))):e?t.setAttribute(Ne,""):t.removeAttribute(Ne)}_onInteraction=t=>{let e=Z(t);if(e instanceof HTMLElement){let n=e.closest(`[${Fi}="${this._globalRippleOptions?.namespace??""}"]`);n&&this._createRipple(n)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let e=this._document.createElement("span");e.classList.add("mat-ripple",t.getAttribute(zi)),t.append(e);let n=this._globalRippleOptions,a=this._animationsDisabled?0:n?.animation?.enterDuration??ri.enterDuration,r=this._animationsDisabled?0:n?.animation?.exitDuration??ri.exitDuration,s={rippleDisabled:this._animationsDisabled||n?.disabled||t.hasAttribute(Ne),rippleConfig:{centered:t.hasAttribute(Bo),terminateOnPointerUp:n?.terminateOnPointerUp,animation:{enterDuration:a,exitDuration:r}}},c=new Rn(s,this._ngZone,e,this._platform,this._injector),d=!s.rippleDisabled;d&&c.setupTriggerEvents(t),this._hosts.set(t,{target:s,renderer:c,hasSetUpEvents:d}),t.removeAttribute(Fi)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(e){return new(e||o)};static \u0275prov=y({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()});function zo(o){return o==null?void 0:be(o)}var Ua,No,Vo=p(()=>{"use strict";f();f();oi();na();Fo();aa();ye();Ua=new g("MAT_BUTTON_CONFIG");No=(()=>{class o{_elementRef=l(R);_ngZone=l(v);_animationsDisabled=X();_config=l(Ua,{optional:!0});_focusMonitor=l(Se);_cleanupClick;_renderer=l(Y);_rippleLoader=l(Lo);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}constructor(){l(vt).load(Sn);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(e){return new(e||o)};static \u0275dir=b({type:o,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(e,n){e&2&&(G("disabled",n._getDisabledAttribute())("aria-disabled",n._getAriaDisabled())("tabindex",n._getTabIndex()),rn(n.color?"mat-"+n.color:""),A("mat-mdc-button-disabled",n.disabled)("mat-mdc-button-disabled-interactive",n.disabledInteractive)("mat-unthemed",!n.color)("_mat-animation-noopable",n._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",E],disabled:[2,"disabled","disabled",E],ariaDisabled:[2,"aria-disabled","ariaDisabled",E],disabledInteractive:[2,"disabledInteractive","disabledInteractive",E],tabIndex:[2,"tabIndex","tabIndex",zo],_tabindex:[2,"tabindex","_tabindex",zo]}})}return o})()});function Ka(o){return o.hasAttribute("mat-raised-button")?"elevated":o.hasAttribute("mat-stroked-button")?"outlined":o.hasAttribute("mat-flat-button")?"filled":o.hasAttribute("mat-button")?"text":null}var Za,$a,qa,jo,Ve,Ni=p(()=>{"use strict";Vo();f();Za=["matButton",""],$a=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],qa=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"],jo=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Ve=(()=>{class o extends No{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let t=Ka(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let e=this._elementRef.nativeElement.classList,n=this._appearance?jo.get(this._appearance):null,a=jo.get(t);n&&e.remove(...n),e.add(...a),this._appearance=t}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=k({type:o,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[I],attrs:Za,ngContentSelectors:qa,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,n){e&1&&(_e($a),Ut(0,"span",0),At(1),qe(2,"span",1),At(3,1),Ke(),At(4,2),Ut(5,"span",2)(6,"span",3)),e&2&&A("mdc-button__ripple",!n._isFab)("mdc-fab__ripple",n._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return o})()});function Qa(o,i){if(o&1){let t=ge();T(0,"div",1)(1,"button",2),_t("click",function(){pe(t);let n=Q();return ue(n.action())}),Lt(2),P()()}if(o&2){let t=Q();S(2),ti(" ",t.data.action," ")}}function tr(o,i){}var Ja,er,le,Ho,Wt,ir,nr,or,ar,Vi,ji,rr,sr,Wo,Yo=p(()=>{"use strict";f();f();oi();Jo();Oi();pt();Ni();kn();ne();ye();Gt();Ja=["label"];er=Math.pow(2,31)-1,le=class{_overlayRef;instance;containerInstance;_afterDismissed=new m;_afterOpened=new m;_onAction=new m;_durationTimeoutId;_dismissedByAction=!1;constructor(i,t){this._overlayRef=t,this.containerInstance=i,i._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(i){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(i,er))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},Ho=new g("MatSnackBarData"),Wt=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},ir=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275dir=b({type:o,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return o})(),nr=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275dir=b({type:o,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return o})(),or=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275dir=b({type:o,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return o})(),ar=(()=>{class o{snackBarRef=l(le);data=l(Ho);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=k({type:o,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(e,n){e&1&&(T(0,"div",0),Lt(1),P(),ft(2,Qa,3,1,"div",1)),e&2&&(S(),ti(" ",n.data.message,`
`),S(),gt(n.hasAction?2:-1))},dependencies:[Ve,ir,nr,or],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return o})(),Vi="_mat-snack-bar-enter",ji="_mat-snack-bar-exit",rr=(()=>{class o extends lt{_ngZone=l(v);_elementRef=l(R);_changeDetectorRef=l(at);_platform=l(F);_animationsDisabled=X();snackBarConfig=l(Wt);_document=l(D);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=l(_);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new m;_onExit=new m;_onEnter=new m;_animationState="void";_live;_label;_role;_liveElementId=l(H).getId("mat-snack-bar-container-live-");constructor(){super();let t=this.snackBarConfig;t.politeness==="assertive"&&!t.announcementMessage?this._live="assertive":t.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(t){this._assertNotAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),e}attachTemplatePortal(t){this._assertNotAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),e}attachDomPortal=t=>{this._assertNotAttached();let e=this._portalOutlet.attachDomPortal(t);return this._afterPortalAttached(),e};onAnimationEnd(t){t===ji?this._completeExit():t===Vi&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?V(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Vi)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(Vi)},200)))}exit(){return this._destroyed?de(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?V(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(ji)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(ji),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,e=this.snackBarConfig.panelClass;e&&(Array.isArray(e)?e.forEach(r=>t.classList.add(r)):t.classList.add(e)),this._exposeToModals();let n=this._label.nativeElement,a="mdc-snackbar__label";n.classList.toggle(a,!n.querySelector(`.${a}`))}_exposeToModals(){let t=this._liveElementId,e=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let n=0;n<e.length;n++){let a=e[n],r=a.getAttribute("aria-owns");this._trackedModals.add(a),r?r.indexOf(t)===-1&&a.setAttribute("aria-owns",r+" "+t):a.setAttribute("aria-owns",t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let e=t.getAttribute("aria-owns");if(e){let n=e.replace(this._liveElementId,"").trim();n.length>0?t.setAttribute("aria-owns",n):t.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let t=this._elementRef.nativeElement,e=t.querySelector("[aria-hidden]"),n=t.querySelector("[aria-live]");if(e&&n){let a=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&e.contains(document.activeElement)&&(a=document.activeElement),e.removeAttribute("aria-hidden"),n.appendChild(e),a?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=k({type:o,selectors:[["mat-snack-bar-container"]],viewQuery:function(e,n){if(e&1&&Zt(ct,7)(Ja,7),e&2){let a;Mt(a=Bt())&&(n._portalOutlet=a.first),Mt(a=Bt())&&(n._label=a.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(e,n){e&1&&_t("animationend",function(r){return n.onAnimationEnd(r.animationName)})("animationcancel",function(r){return n.onAnimationEnd(r.animationName)}),e&2&&A("mat-snack-bar-container-enter",n._animationState==="visible")("mat-snack-bar-container-exit",n._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!n._animationsDisabled)},features:[I],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(e,n){e&1&&(T(0,"div",1)(1,"div",2,0)(3,"div",3),It(4,tr,0,0,"ng-template",4),P(),Tt(5,"div"),P()()),e&2&&(S(5),G("aria-live",n._live)("role",n._role)("id",n._liveElementId))},dependencies:[ct],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return o})(),sr=new g("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new Wt}),Wo=(()=>{class o{_live=l(Dn);_injector=l(_);_breakpointObserver=l(pn);_parentSnackBar=l(o,{optional:!0,skipSelf:!0});_defaultConfig=l(sr);_animationsDisabled=X();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=ar;snackBarContainerComponent=rr;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}constructor(){}openFromComponent(t,e){return this._attach(t,e)}openFromTemplate(t,e){return this._attach(t,e)}open(t,e="",n){let a=x(x({},this._defaultConfig),n);return a.data={message:t,action:e},a.announcementMessage===t&&(a.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,a)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,e){let n=e&&e.viewContainerRef&&e.viewContainerRef.injector,a=_.create({parent:n||this._injector,providers:[{provide:Wt,useValue:e}]}),r=new tt(this.snackBarContainerComponent,e.viewContainerRef,a),s=t.attach(r);return s.instance.snackBarConfig=e,s.instance}_attach(t,e){let n=x(x(x({},new Wt),this._defaultConfig),e),a=this._createOverlay(n),r=this._attachSnackBarContainer(a,n),s=new le(r,a);if(t instanceof W){let c=new st(t,null,{$implicit:n.data,snackBarRef:s});s.instance=r.attachTemplatePortal(c)}else{let c=this._createInjector(n,s),d=new tt(t,void 0,c),h=r.attachComponentPortal(d);s.instance=h.instance}return this._breakpointObserver.observe(un.HandsetPortrait).pipe(ot(a.detachments())).subscribe(c=>{a.overlayElement.classList.toggle(this.handsetCssClass,c.matches)}),n.announcementMessage&&r._onAnnounce.subscribe(()=>{this._live.announce(n.announcementMessage,n.politeness)}),this._animateSnackBar(s,n),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(t,e){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),e.announcementMessage&&this._live.clear()}),e.duration&&e.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(e.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter()}_createOverlay(t){let e=new dt;e.direction=t.direction;let n=kt(this._injector),a=t.direction==="rtl",r=t.horizontalPosition==="left"||t.horizontalPosition==="start"&&!a||t.horizontalPosition==="end"&&a,s=!r&&t.horizontalPosition!=="center";return r?n.left("0"):s?n.right("0"):n.centerHorizontally(),t.verticalPosition==="top"?n.top("0"):n.bottom("0"),e.positionStrategy=n,e.disableAnimations=this._animationsDisabled,ae(this._injector,e)}_createInjector(t,e){let n=t&&t.viewContainerRef&&t.viewContainerRef.injector;return _.create({parent:n||this._injector,providers:[{provide:le,useValue:e},{provide:Ho,useValue:t.data}]})}static \u0275fac=function(e){return new(e||o)};static \u0275prov=y({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()});var je,Go=p(()=>{"use strict";je={reAuth:{title:"Do you want to re-authenticate?",opts:{buttons:[{title:"Yes",action:"yes"},{title:"No",action:"no"}]}}}});var Xo,Uo=p(()=>{"use strict";f();Qo();f();Xo=(()=>{class o{constructor(){this.sani=l(hn),this.fn={html:this.sani.bypassSecurityTrustHtml,style:this.sani.bypassSecurityTrustStyle,script:this.sani.bypassSecurityTrustScript,url:this.sani.bypassSecurityTrustUrl,resourceUrl:this.sani.bypassSecurityTrustResourceUrl}}transform(t,e="url"){if(e??="url",t instanceof File&&(t=window.URL.createObjectURL(t),e=e==="url"||e==="resourceUrl"?e:"url"),typeof t!="string")throw Error(`Invalid safe transformation of "${typeof t}" to "${e}"`);if(!this.fn[e])throw Error(`Invalid safe type specified: ${e}`);return this.fn[e](t)}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275pipe=tn({name:"safe",type:o,pure:!0})}}return o})()});function lr(o,i){if(o&1&&(T(0,"div",3),Tt(1,"div",6),sn(2,"safe"),P()),o&2){let t=Q();S(),fe("innerHtml",ln(2,1,t.message,"html"),Ki)}}function cr(o,i){if(o&1&&(T(0,"div",4),Tt(1,"img",7),P()),o&2){let t=Q();S(),fe("src",t.image.src,Qi)("alt",t.image.alt)}}function dr(o,i){if(o&1&&(T(0,"div",3),Tt(1,"iframe",8),P()),o&2){let t=Q();S(),fe("src",t.iframe.src,Ji)("title",t.iframe.title)}}function hr(o,i){if(o&1){let t=ge();T(0,"button",10),_t("click",function(){let n=pe(t).$implicit,a=Q(2);return ue(a.onPress(n))}),Lt(1),P()}if(o&2){let t=i.$implicit;S(),Je(t.title)}}function mr(o,i){if(o&1&&(T(0,"div",5),on(1,hr,2,1,"button",9,nn),P()),o&2){let t=Q();S(),an(t.buttons)}}var Zo,$o=p(()=>{"use strict";f();Ni();Li();Uo();f();Zo=(()=>{class o{constructor(){this.data=l(Mi),this.dialogRef=l(Ht),this.buttons=[];let t=this.data;this.title=t.title,this.message=t.message,this.iframe=t.opts?.iframe,this.image=t.opts?.image,this.buttons=t.opts?.buttons??[{title:"OK"}]}onPress(t){let e=t?.action||t.title;this.dialogRef.close(e)}close(){this.dialogRef.close()}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275cmp=k({type:o,selectors:[["app-dialog-template"]],decls:8,vars:5,consts:[[1,"header"],["mat-dialog-title",""],["type","button","aria-label","Close",1,"btn-close","dialog-close",3,"click"],["mat-dialog-content",""],["mat-dialog-content","",1,"dialog-image-content"],["mat-dialog-actions",""],[1,"dialog-message",3,"innerHtml"],[1,"dialog-image",3,"src","alt"],[3,"src","title"],["mat-button","","type","button"],["mat-button","","type","button",3,"click"]],template:function(e,n){e&1&&(T(0,"div",0)(1,"h1",1),Lt(2),P(),T(3,"button",2),_t("click",function(){return n.close()}),P()(),ft(4,lr,3,4,"div",3),ft(5,cr,2,2,"div",4),ft(6,dr,2,2,"div",3),ft(7,mr,3,0,"div",5)),e&2&&(S(2),Je(n.title),S(2),gt(n.message?4:-1),S(),gt(n.image?5:-1),S(),gt(n.iframe?6:-1),S(),gt(n.buttons.length?7:-1))},dependencies:[To,Ao,Mo,Ve,Xo],styles:["[_nghost-%COMP%]{display:block;max-width:min(92vw,1100px)}.header[_ngcontent-%COMP%]{padding:1rem 1.25rem 0;position:relative}.header[_ngcontent-%COMP%]   .mat-mdc-dialog-title[_ngcontent-%COMP%]{font-size:clamp(1.125rem,5vw,1.5rem);line-height:1.25;margin:0;overflow-wrap:anywhere;padding:0 3rem .75rem 0}.header[_ngcontent-%COMP%]   .mat-mdc-dialog-title[_ngcontent-%COMP%]:before{display:none}.dialog-close[_ngcontent-%COMP%]{background-color:#fff;border-radius:50%;box-shadow:0 .25rem .75rem #01297033;min-height:44px;min-width:44px;opacity:1;padding:.875rem;position:absolute;right:-.5rem;top:-.5rem;z-index:1}[mat-dialog-content][_ngcontent-%COMP%], [mat-dialog-actions][_ngcontent-%COMP%]{padding:0 1.25rem 1rem}.dialog-message[_ngcontent-%COMP%]{margin-bottom:0}.dialog-image-content[_ngcontent-%COMP%]{overflow:auto}.dialog-image[_ngcontent-%COMP%]{display:block;height:auto;margin:0 auto;max-height:calc(100vh - 13rem);max-width:100%}iframe[_ngcontent-%COMP%]{border:0;height:min(70vh,640px);width:min(82vw,900px)}"]})}}return o})()});var eh,pr=p(()=>{"use strict";f();Li();Yo();pt();Go();$o();ta();f();eh=(()=>{class o{constructor(){this.cfg=l(fn),this.dialog=l(Bi),this.snackbar=l(Wo),this.success=(t,e,...n)=>{e??=this.cfg.env!=="production";let a=e?"log":"no-log";this.showSnack({type:a,text:t,props:n})},this.warn=(t,...e)=>{this.showSnack({type:"warn",text:t,props:e})},this.error=(t,...e)=>{this.showSnack({type:"error",text:t,props:e})},this.showSnack=t=>{this.snackbar.open(t.text,t.action??"OK",t.config??{duration:5e3}),t.type!=="no-log"&&console[t.type](`alert: ${t.text}`,...t.props??[])},this.dialogState=t=>this.findDialog(t)?.getState(),this.showDialog=(t,e=!0)=>We(this,null,function*(){let n=this.dialog.open(Zo,{data:t,disableClose:e,maxHeight:t.opts?.maxHeight??"70vh",maxWidth:t.opts?.maxWidth,panelClass:t.opts?.panelClass,width:t.opts?.width});return yield Xi(n.afterClosed())}),this.dialogMsgState=t=>this.findDialogMsg(t)?.getState(),this.showDialogMsg=t=>We(this,null,function*(){let e;return je[t]&&(e=yield this.showDialog(je[t])),e}),this.findDialog=t=>this.dialog.openDialogs.find(e=>e.componentInstance.data===t),this.findDialogMsg=t=>this.findDialog(je[t])}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275prov=y({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})()});export{ss as a,ls as b,cs as c,ds as d,hs as e,Ea as f,Vt as g,Dt as h,Ct as i,no as j,vi as k,yi as l,wi as m,co as n,Di as o,Ia as p,eh as q,pr as r};
