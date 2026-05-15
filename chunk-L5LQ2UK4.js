import{a as E,b as Ie,c as it}from"./chunk-63YGQJC3.js";import{a as xe,b as Ae,c as Se,d as Ee,e as Fe,f as Je,g as L,h as et,i as X,j as tt,k as Pe,l as N,m as D,n as nt,o as Ne,p as rt}from"./chunk-XWCWQIZF.js";import{B as be,C as We,G as Ce,O as we,aa as ke,ba as qe,da as Ke,fa as De,ga as Xe,ia as Ve,ja as Ye,k as _e,ka as Me,la as Ze,m as ve,oa as K,p as ze,pa as Qe,x as ye,y as $e}from"./chunk-PPWVMMYS.js";import{Ab as u,Bb as o,Cb as s,Db as f,G as ee,Ib as b,Jb as oe,Kb as m,Lb as c,Mb as U,Nb as H,Oa as V,Ob as le,Pb as de,Q as He,Qb as ce,Rb as ue,Ta as l,Tb as y,U as $,Ub as he,Vb as h,W as te,Wb as I,Xb as me,Y as j,Zb as fe,_ as g,d as R,ea as _,eb as F,fa as v,fb as se,ga as ie,gc as ge,ic as G,kb as W,lc as M,ma as B,mc as pe,na as ne,oc as P,sa as re,t as J,tb as C,ub as A,va as ae,vb as S,wb as q,yb as w,zb as k}from"./chunk-6WB63TD3.js";var Oe,Te,Re=R(()=>{"use strict";P();Oe=new j(""),Te=new j("")});var ot,lt,Ge,Le=R(()=>{"use strict";P();ot=["mat-internal-form-field",""],lt=["*"],Ge=(()=>{class n{labelPosition="after";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=F({type:n,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,i){t&2&&y("mdc-form-field--align-end",i.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:ot,ngContentSelectors:lt,decls:1,vars:0,template:function(t,i){t&1&&(U(),H(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})()});function ut(n,d){n&1&&(o(0,"span",11),ie(),o(1,"svg",13),f(2,"path",14),s(),o(3,"svg",15),f(4,"path",16),s()())}var dt,ct,ht,z,Y,Be,Z=R(()=>{"use strict";P();P();Re();Ke();qe();Le();$e();Ze();Ye();We();dt=["switch"],ct=["*"];ht=new j("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),z=class{source;checked;constructor(d,e){this.source=d,this.checked=e}},Y=(()=>{class n{_elementRef=g(ae);_focusMonitor=g(ke);_changeDetectorRef=g(G);defaults=g(ht);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new z(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=ye();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new B;toggleChange=new B;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){g(Ce).load(Me);let e=g(new ge("tabindex"),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||"accent",this.id=this._uniqueId=g(we).getId("mat-mdc-slide-toggle-"),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new z(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=F({type:n,selectors:[["mat-slide-toggle"]],viewQuery:function(t,i){if(t&1&&le(dt,5),t&2){let r;de(r=ce())&&(i._switchElement=r.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(t,i){t&2&&(oe("id",i.id),C("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),he(i.color?"mat-"+i.color:""),y("mat-mdc-slide-toggle-focused",i._focused)("mat-mdc-slide-toggle-checked",i.checked)("_mat-animation-noopable",i._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",M],color:"color",disabled:[2,"disabled","disabled",M],disableRipple:[2,"disableRipple","disableRipple",M],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:pe(e)],checked:[2,"checked","checked",M],hideIcon:[2,"hideIcon","hideIcon",M],disabledInteractive:[2,"disabledInteractive","disabledInteractive",M]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[fe([{provide:Oe,useExisting:$(()=>n),multi:!0},{provide:Te,useExisting:n,multi:!0}]),re],ngContentSelectors:ct,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(t,i){if(t&1&&(U(),o(0,"div",1)(1,"button",2,0),m("click",function(){return i._handleClick()}),f(3,"div",3)(4,"span",4),o(5,"span",5)(6,"span",6)(7,"span",7),f(8,"span",8),s(),o(9,"span",9),f(10,"span",10),s(),A(11,ut,5,0,"span",11),s()()(),o(12,"label",12),m("click",function(a){return a.stopPropagation()}),H(13),s()()),t&2){let r=ue(2);u("labelPosition",i.labelPosition),l(),y("mdc-switch--selected",i.checked)("mdc-switch--unselected",!i.checked)("mdc-switch--checked",i.checked)("mdc-switch--disabled",i.disabled)("mat-mdc-slide-toggle-disabled-interactive",i.disabledInteractive),u("tabIndex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex)("disabled",i.disabled&&!i.disabledInteractive),C("id",i.buttonId)("name",i.name)("aria-label",i.ariaLabel)("aria-labelledby",i._getAriaLabelledBy())("aria-describedby",i.ariaDescribedby)("aria-required",i.required||null)("aria-checked",i.checked)("aria-disabled",i.disabled&&i.disabledInteractive?"true":null),l(9),u("matRippleTrigger",r)("matRippleDisabled",i.disableRipple||i.disabled)("matRippleCentered",!0),l(),S(i.hideIcon?-1:11),l(),u("for",i.buttonId),C("id",i._labelId)}},dependencies:[Ve,Ge],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--mat-slide-toggle-track-height, 32px);
  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--mat-slide-toggle-handle-width);
  height: var(--mat-slide-toggle-handle-height);
  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--mat-slide-toggle-selected-handle-size, 24px);
  height: var(--mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--selected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));
}
.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));
}
.mdc-switch--unselected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));
}
.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--mat-slide-toggle-state-layer-size, 40px);
  height: var(--mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--mat-slide-toggle-selected-icon-size, 16px);
  height: var(--mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return n})(),Be=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=se({type:n});static \u0275inj=te({imports:[Y,be]})}return n})()});var Q,Ue=R(()=>{"use strict";Q=n=>n.reduce((d,e)=>(d.push(...e),d),[])});function ft(n,d){if(n&1&&(o(0,"strong"),h(1),s()),n&2){let e=c(2);l(),I(e.cheatSelectedCard.ids.fullname)}}function gt(n,d){if(n&1){let e=b();o(0,"button",24),m("click",function(){let i=_(e).$implicit,r=c(2);return v(r.selectCheatStock(i))}),f(1,"img",25),s()}if(n&2){let e=d.$implicit,t=c(2);y("is-selected",t.cheatSelectedCard===e),u("title",e.ids.fullname),C("aria-label","Peek "+e.ids.fullname),l(),u("src",e.style.images.front,V)("alt",e.ids.fullname)}}function pt(n,d){n&1&&(o(0,"span",21),h(1,"Stock empty"),s())}function _t(n,d){if(n&1){let e=b();o(0,"div",16)(1,"div",18)(2,"span"),h(3,"Peek"),s(),A(4,ft,2,1,"strong"),s(),o(5,"div",19),w(6,gt,2,6,"button",20,O,!1,pt,2,0,"span",21),s(),o(9,"div",22)(10,"button",23),m("click",function(){_(e);let i=c();return v(i.cheatPalmSelected())}),h(11,"Palm"),s(),o(12,"button",23),m("click",function(){_(e);let i=c();return v(i.toggleCheatCoverMode())}),h(13,"Cover"),s()()()}if(n&2){let e=c();l(4),S(e.cheatSelectedCard?4:-1),l(2),k(e.cheatStockCards),l(4),u("disabled",!e.canPalmCheatCard),l(2),y("is-active",e.cheatCoverMode),u("disabled",!e.canCoverCheatCard),C("aria-pressed",e.cheatCoverMode)}}function vt(n,d){if(n&1){let e=b();o(0,"span",36),m("click",function(i){let r=_(e).$implicit,a=c(2);return v(a.onStockCardClick(i,r))}),f(1,"img",37),s()}if(n&2){let e=d.$implicit,t=c(2);y("is-cheat-peek",t.isCheatPeek(e))("is-stock-cheat-peek",t.isStockCheatPeek(e)),l(),u("src",t.cardImagePath(e),V)("title",e.ids.fullname)("alt",e.ids.fullname)}}function yt(n,d){n&1&&f(0,"div",40)}function bt(n,d){if(n&1){let e=b();o(0,"div",38),m("click",function(i){let r=_(e).$implicit,a=c(2);return v(a.onCardClick(i,r))}),W(1,yt,1,0,"div",39),f(2,"img",37),s()}if(n&2){let e=d.$implicit,t=c(2);y("is-cheat-cover-target",t.isCheatCoverTarget(e)),u("cdkDragData",e),l(2),u("src",t.cardImagePath(e),V)("title",e.ids.fullname)("alt",e.ids.fullname)}}function Ct(n,d){if(n&1){let e=b();o(0,"div",38),m("click",function(i){let r=_(e).$implicit,a=c(3);return v(a.onCardClick(i,r))}),f(1,"img",37),s()}if(n&2){let e=d.$implicit,t=c(3);u("cdkDragData",e),l(),u("src",t.cardImagePath(e),V)("title",e.ids.fullname)("alt",e.ids.fullname)}}function wt(n,d){if(n&1){let e=b();o(0,"div",41),m("cdkDropListDropped",function(i){_(e);let r=c(2);return v(r.onDrop(i))}),f(1,"img",28),w(2,Ct,2,4,"div",42,O),s()}if(n&2){let e=d.$index,t=c(2);u("cdkDropListData",t.foundations[e].cards)("cdkDropListSortPredicate",t.canSort)("cdkDropListEnterPredicate",t.foundationDrop),C("pile","foundations"+e),l(2),k(t.foundations[e].cards)}}function kt(n,d){if(n&1&&f(0,"img",49),n&2){let e=d.$implicit;u("src",e.imagePath,V)("alt",e.ids.fullname)}}function Dt(n,d){if(n&1&&(o(0,"div",48),w(1,kt,1,2,"img",49,O),s()),n&2){let e=c(5);l(),k(e.dragging)}}function Vt(n,d){n&1&&f(0,"div",40)}function Mt(n,d){if(n&1){let e=b();o(0,"div",45),m("click",function(i){_(e);let r=c().$implicit,a=c(3);return v(a.onCardClick(i,r))})("cdkDragStarted",function(i){_(e);let r=c(4);return v(r.onDragStart(i))}),W(1,Dt,3,0,"div",46)(2,Vt,1,0,"div",39),f(3,"img",47),s()}if(n&2){let e=c().$implicit,t=c(3);y("is-cheat-cover-target",t.isCheatCoverTarget(e)),u("cdkDragData",e),l(3),u("src",t.cardImagePath(e),V)("title",e.ids.fullname)("alt",e.ids.fullname)("hidden",t.dragging.includes(e))}}function xt(n,d){if(n&1){let e=b();o(0,"div",36),m("click",function(i){_(e);let r=c().$implicit,a=c(3);return v(a.onCardClick(i,r))}),f(1,"img",37),s()}if(n&2){let e=c().$implicit,t=c(3);y("is-cheat-peek",t.isCheatPeek(e))("is-cheat-peek-target",t.isCheatPeekTarget(e)),l(),u("src",t.cardImagePath(e),V)("title",e.ids.fullname)("alt",e.ids.fullname)}}function At(n,d){if(n&1&&A(0,Mt,4,7,"div",31)(1,xt,2,7,"div",44),n&2){let e=d.$implicit,t=c(3);S(t.canMove(e)?0:1)}}function St(n,d){if(n&1){let e=b();o(0,"div",43),m("cdkDropListDropped",function(i){_(e);let r=c(2);return v(r.onDrop(i))}),w(1,At,2,1,null,null,O),s()}if(n&2){let e=d.$index,t=c(2);u("cdkDropListData",t.tableaus[e].cards)("cdkDropListSortPredicate",t.canSort)("cdkDropListEnterPredicate",t.tableauDrop),C("pile","tableaus"+e),l(),k(t.tableaus[e].cards)}}function Et(n,d){if(n&1){let e=b();o(0,"div",17)(1,"div",26)(2,"button",27),m("click",function(){_(e);let i=c();return v(i.onDeckClick())}),f(3,"img",28),w(4,vt,2,7,"span",29,O),s(),o(6,"div",30),f(7,"img",28),w(8,bt,3,6,"div",31,O),s(),o(10,"div",32),w(11,wt,4,4,"div",33,q),s()(),o(13,"div",34),w(14,St,3,4,"div",35,q),s()()}if(n&2){let e=c();l(4),k(e.deck.cards),l(2),u("cdkDropListData",e.draw.cards)("cdkDropListSortPredicate",e.canSort)("cdkDropListEnterPredicate",e.noDrop),l(2),k(e.draw.cards),l(3),k(e.foundations),l(3),k(e.tableaus)}}var O,Oi,Ft=R(()=>{Je();P();Xe();ze();Z();He();Qe();et();tt();it();nt();rt();Ue();P();Z();O=(n,d)=>d.ids.deckId;Oi=(()=>{class n{constructor(){this.dialog=g(De),this.cdr=g(G),this.zone=g(ne),this.route=g(_e),this.router=g(ve),this.drawCount=3,this.gameSeed="",this.cheatMode=!1,this.cheatCoverMode=!1,this.history={records:[]},this.draw=new Pe,this.foundations=[new N,new N,new N,new N],this.tableaus=[new D,new D,new D,new D,new D,new D,new D],this.dragging=[],this.routeSeed=()=>this.route.snapshot.queryParamMap.get("seed")||void 0,this.setSeedQueryParam=()=>{this.gameSeed&&this.router.navigate([],{relativeTo:this.route,queryParams:{seed:this.gameSeed},queryParamsHandling:"merge",replaceUrl:!0})},this.canFoundationDrop=(e,t)=>{if(!e||e!==e.getPile()?.cards.slice(-1)[0])return!1;let i=(t||[]).slice(-1)[0];return i?e.style.suit===i.style.suit&&e.style.name===i.style.name+1:e.style.name===X.Ace},this.canTableauDrop=(e,t)=>{if(!e)return!1;let i=(t||[]).slice(-1)[0];return i?e.style.color!==i.style.color&&e.style.name===i.style.name-1:e.style.name===X.King},this.moveCard=(e,t)=>{if(!e||!t)return;let i=e.getPile();if(i){let r=i.cards.indexOf(e);if(r<0)return;let a=r>0?i.cards[r-1]:void 0,p=i.cards.slice(r),x=Ie(i,...p);a&&!this.canMove(a)&&(x.moves.push(E(i,a)),a.flip()),i.move(t,r)&&this.history.records.push(x)}this.checkWin()},this.checkWin=()=>{if(!((Q(this.foundations.map(r=>r.cards))||[]).length===52))return;let i=this.dialog.open(K,{disableClose:!0,data:{title:"You Won!",message:"Winner, winner... chicken dinner!",opts:{buttons:[{title:"Ok"},{title:"New Game",action:()=>{this.history.records.splice(0),this.startGame()}}]}}});J(i.afterClosed()).then(r=>{typeof r=="function"&&r()})},this.undo=()=>{let e=this.history.records.pop();if(e?.undo){e.undo(),this.clearCheatSelection();return}for(let t of e?.moves||[]){let i=[this.deck,this.draw,...this.tableaus,...this.foundations];for(let r of i){let a=r.cards.find(p=>p.ids.deckId===t.deckId);a&&(a.style.state=t.style.state,t.pile!==r&&r.move(t.pile,r.cards.indexOf(a)))}}},this.isConfirmYes=e=>typeof e=="string"&&e.toLowerCase()==="yes",this.askRestart=e=>{this.dialog.open(K,{disableClose:!0,data:{title:"Are you sure?",message:"Are you sure you would like to start a new game?",opts:{buttons:[{title:"Yes",action:"yes"},{title:"No",action:"no"}]}}}).afterClosed().pipe(ee(1)).subscribe(i=>{this.isConfirmYes(i)&&this.zone.run(()=>this.dealGame(e))})},this.requestGame=e=>{if(this.history.records.length){this.askRestart(e);return}this.dealGame(e)},this.dealGame=e=>{this.deck=new Ne,this.history.records.splice(0),this.clearCheatSelection();for(let i of[this.draw,...this.tableaus,...this.foundations])i.cards.splice(0);this.deck.shuffle(e?void 0:3,e),this.gameSeed=this.deck.shuffleSeed??"";let t=this.tableaus.length;for(let i=t;i>0;i--)for(let r=t-i;r<t;r++){let a=this.tableaus[r];this.deck.move(a,0,1),r===t-i&&a.turn(-1)}this.cdr.detectChanges()},this.startGame=e=>{this.requestGame(e)},this.placeCard=(e,t,i)=>{if(e.setPile(t),typeof i!="number")return;let r=t.cards.indexOf(e);if(r<0)return;let a=Math.min(Math.max(i,0),t.cards.length-1);t.cards.splice(r,1),t.cards.splice(a,0,e)},this.canCheatCover=e=>{if(!e||e===this.cheatSelectedCard||!this.canMove(e))return!1;let t=e.getPile(),i=t===this.draw&&t.cards.slice(-1)[0]===e,r=this.tableaus.some(a=>a===t&&a.cards.includes(e));return i||r},this.canCheatPeek=e=>{if(!e||this.canMove(e))return!1;let t=e.getPile();return t===this.deck||this.tableaus.some(i=>i===t)},this.clearCheatSelection=()=>{this.cheatSelectedCard=void 0,this.cheatCoverMode=!1},this.swapCheatCards=(e,t,i,r,a,p)=>{if(t===a){t.cards[i]=r,a.cards[p]=e;return}this.placeCard(e,a,p),this.placeCard(r,t,i)},this.replayGame=()=>{let e=this.gameSeed;e&&this.requestGame(e)},this.setDrawCount=e=>{this.drawCount=e},this.toggleCheatMode=()=>{this.cheatMode=!this.cheatMode,this.clearCheatSelection()},this.selectCheatStock=e=>{if(!(!this.deck.includes(e.ids.deckId)||!this.canCheatPeek(e))){if(this.cheatSelectedCard===e){this.clearCheatSelection();return}this.cheatSelectedCard=e,this.cheatCoverMode=!1}},this.selectCheatCard=e=>{if(this.canCheatPeek(e)){if(this.cheatSelectedCard===e){this.clearCheatSelection();return}this.cheatSelectedCard=e,this.cheatCoverMode=!1}},this.toggleCheatCoverMode=()=>{this.canCoverCheatCard&&(this.cheatCoverMode=!this.cheatCoverMode)},this.cardImagePath=e=>this.isCheatPeek(e)?e.style.images.front:e.imagePath,this.isCheatPeek=e=>this.cheatMode&&!!e&&this.cheatSelectedCard===e,this.isStockCheatPeek=e=>this.isCheatPeek(e)&&e.getPile()===this.deck,this.isCheatCoverTarget=e=>this.cheatMode&&this.cheatCoverMode&&this.canCheatCover(e),this.isCheatPeekTarget=e=>this.cheatMode&&this.canCheatPeek(e),this.onDeckClick=()=>{if(!this.cheatMode){this.doDraw();return}let e=this.deck.cards.slice(-1)[0];e&&this.selectCheatStock(e)},this.onStockCardClick=(e,t)=>{this.cheatMode&&(e.stopPropagation(),this.selectCheatStock(t))},this.onCardClick=(e,t)=>{if(!this.cheatMode){this.dblClick(t);return}if(this.cheatCoverMode&&this.canCheatCover(t)){e.stopPropagation(),this.cheatSwapWithCover(t);return}this.canCheatPeek(t)&&(e.stopPropagation(),this.selectCheatCard(t))},this.cheatPalmSelected=()=>{let e=this.cheatSelectedCard,t=e?.getPile();if(!e||!t||!this.canPalmCheatCard)return;let i=t.cards.indexOf(e);if(i<0)return;let r=e.style.state;this.history.records.push({moves:[E(t,e)],undo:()=>{this.placeCard(e,t,i),e.setState(r)}}),this.placeCard(e,this.draw),e.setState(L.Up),this.clearCheatSelection()},this.cheatSwapWithCover=e=>{let t=this.cheatSelectedCard,i=t?.getPile(),r=e.getPile();if(!t||!i||!r||!this.canCheatCover(e))return;let a=i.cards.indexOf(t),p=r.cards.indexOf(e);if(a<0||p<0)return;let x=t.style.state,T=e.style.state;this.history.records.push({moves:[E(i,t),E(r,e)],undo:()=>{this.placeCard(t,i,a),t.setState(x),this.placeCard(e,r,p),e.setState(T)}}),this.swapCheatCards(t,i,a,e,r,p),t.setState(L.Up),e.setState(L.Down),this.clearCheatSelection()},this.doDraw=()=>{this.clearCheatSelection();let e,t;this.deck.cards.length?(e=this.deck.move(this.draw,0,this.drawCount),t=e.map(i=>E(this.deck,i))):(e=this.draw.move(this.deck,0),t=e.map(i=>E(this.draw,i))),e.forEach(i=>i.flip()),this.history.records.push({moves:t.reverse()})},this.canMove=e=>e?.style.state===L.Up,this.dblClick=e=>{if(this.canMove(e))for(let t of[...this.foundations,...this.tableaus]){let i=()=>!1;if(t instanceof N?i=this.canFoundationDrop:t instanceof D&&(i=this.canTableauDrop),i(e,t.cards))return this.moveCard(e,t)}},this.canSort=(e,t,i)=>{let r=t.data,a=i.data;return!i.data.includes(r)&&e===a.length},this.noDrop=()=>!1,this.foundationDrop=(e,t)=>this.canFoundationDrop(e.data,t.data),this.tableauDrop=(e,t)=>this.canTableauDrop(e.data,t.data),this.onDragStart=e=>{let t=e.source.data,i=t.getPile();if(i){let r=i.cards.indexOf(t),a=i.cards.slice(r);a&&this.dragging.splice(0,this.dragging.length,...a??[])}},this.onDrop=e=>{if(e.previousContainer===e.container)e.item.reset();else{let i=e.container.element.nativeElement.attributes.getNamedItem("pile")?.value;if(i){let a=/^(?<type>foundations|tableaus)(?<ndx>\d+)$/.exec(i)?.groups??{};if(a){let p=a.type,x=Number(a.ndx),T=p&&Number.isInteger(x)?this.findDropPile(p,x):void 0;T&&this.moveCard(e.item.data,T)}}}this.dragging.splice(0)}}ngOnInit(){this.startGame(this.routeSeed())}get gameSeedLabel(){let t=/^shuffle:(.*):(\d+)$/.exec(this.gameSeed)?.[1]??this.gameSeed;return t.length>8?t.slice(0,8):t}get cheatStockCards(){return this.deck?.cards.slice().reverse()??[]}get cheatCoverCards(){let e=this.draw.cards.slice(-1),t=Q(this.tableaus.map(i=>i.cards));return[...e,...t].filter(i=>this.canCheatCover(i))}get canPalmCheatCard(){return!!this.cheatSelectedCard&&!this.foundations.some(e=>e.includes(this.cheatSelectedCard?.ids.deckId??""))}get canCoverCheatCard(){return!!this.cheatSelectedCard&&this.cheatCoverCards.length>0}findDropPile(e,t){return e==="foundations"?this.foundations[t]:this.tableaus[t]}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=F({type:n,selectors:[["app-klondike"]],decls:46,vars:14,consts:[[1,"pagetitle"],[1,"breadcrumb"],[1,"breadcrumb-item"],[1,"breadcrumb-item","active"],[1,"section","klondike"],[1,"card","klondike-card"],[1,"game-toolbar"],[1,"game-actions"],["type","button",1,"game-button","game-button-primary",3,"click"],["type","button",1,"game-button",3,"click","disabled"],["type","button",1,"game-button","game-button-cheat",3,"click"],["aria-label","Game status",1,"game-status"],["role","button","tabindex","0",1,"seed-status",3,"click","keydown.enter","keydown.space","title"],[1,"draw-control"],["id","drawMode"],["aria-labelledby","drawMode",3,"change","checked"],["aria-label","Cheat mode",1,"cheat-panel"],["cdkDropListGroup","",1,"gametable"],[1,"cheat-panel-header"],["aria-label","Stock peek",1,"cheat-stock"],["type","button",1,"cheat-card",3,"is-selected","title"],[1,"cheat-empty"],[1,"cheat-actions"],["type","button",1,"game-button","game-button-cheat-action",3,"click","disabled"],["type","button",1,"cheat-card",3,"click","title"],["draggable","false",3,"src","alt"],[1,"upper"],["type","button","aria-label","Draw from stock",1,"pile","deck",3,"click"],["src","assets/img/cards/back/b1fv.png","alt","","aria-hidden","true","draggable","false",1,"pile-watermark"],[1,"facecard",3,"is-cheat-peek","is-stock-cheat-peek"],["cdkDropList","","cdkDropListSortingDisabled","","aria-label","Waste pile",1,"pile","draw",3,"cdkDropListData","cdkDropListSortPredicate","cdkDropListEnterPredicate"],["cdkDrag","",1,"facecard","is-draggable",3,"cdkDragData","is-cheat-cover-target"],["aria-label","Foundation piles",1,"foundations"],["cdkDropList","","cdkDropListSortingDisabled","",1,"pile","foundation",3,"cdkDropListData","cdkDropListSortPredicate","cdkDropListEnterPredicate"],["aria-label","Tableau piles",1,"tableaus"],["cdkDropList","","cdkDropListSortingDisabled","",1,"pile","tableau",3,"cdkDropListData","cdkDropListSortPredicate","cdkDropListEnterPredicate"],[1,"facecard",3,"click"],["draggable","false",3,"src","title","alt"],["cdkDrag","",1,"facecard","is-draggable",3,"click","cdkDragData"],["class","placeholder",4,"cdkDragPlaceholder"],[1,"placeholder"],["cdkDropList","","cdkDropListSortingDisabled","",1,"pile","foundation",3,"cdkDropListDropped","cdkDropListData","cdkDropListSortPredicate","cdkDropListEnterPredicate"],["cdkDrag","",1,"facecard","is-draggable",3,"cdkDragData"],["cdkDropList","","cdkDropListSortingDisabled","",1,"pile","tableau",3,"cdkDropListDropped","cdkDropListData","cdkDropListSortPredicate","cdkDropListEnterPredicate"],[1,"facecard",3,"is-cheat-peek","is-cheat-peek-target"],["cdkDrag","",1,"facecard","is-draggable",3,"click","cdkDragStarted","cdkDragData"],["class","tableau-drag-preview",4,"cdkDragPreview"],["draggable","false",3,"src","title","alt","hidden"],[1,"tableau-drag-preview"],[3,"src","alt"]],template:function(t,i){t&1&&(o(0,"div",0)(1,"nav")(2,"ol",1)(3,"li",2),h(4,"Home"),s(),o(5,"li",2),h(6,"Solitaire"),s(),o(7,"li",3),h(8,"Klondike"),s()()(),o(9,"h1"),h(10,"Klondike Solitaire"),s()(),o(11,"section",4)(12,"div",5)(13,"div",6)(14,"div",7)(15,"button",8),m("click",function(){return i.startGame()}),h(16,"New Game"),s(),o(17,"button",9),m("click",function(){return i.replayGame()}),h(18,"Replay"),s(),o(19,"button",9),m("click",function(){return i.undo()}),h(20,"Undo"),s(),o(21,"button",10),m("click",function(){return i.toggleCheatMode()}),h(22,"Cheat"),s()(),o(23,"div",11)(24,"span")(25,"strong"),h(26),s(),h(27," Moves"),s(),o(28,"span")(29,"strong"),h(30),s(),h(31," Stock"),s(),o(32,"span")(33,"strong"),h(34),s(),h(35," Waste"),s(),o(36,"span",12),m("click",function(){return i.setSeedQueryParam()})("keydown.enter",function(){return i.setSeedQueryParam()})("keydown.space",function(){return i.setSeedQueryParam()}),o(37,"strong"),h(38),s(),h(39," Deal "),s()(),o(40,"div",13)(41,"span",14),h(42),s(),o(43,"mat-slide-toggle",15),m("change",function(a){return i.setDrawCount(a.checked?3:1)}),s()()(),A(44,_t,14,7,"div",16),A(45,Et,16,3,"div",17),s()()),t&2&&(l(17),u("disabled",!i.gameSeed),l(2),u("disabled",i.history.records.length<1),l(2),y("is-active",i.cheatMode),C("aria-pressed",i.cheatMode),l(5),I(i.history.records.length),l(4),I(i.deck.cards.length),l(4),I(i.draw.cards.length),l(2),u("title",i.gameSeed),l(2),I(i.gameSeedLabel),l(4),me("Draw ",i.drawCount),l(),u("checked",i.drawCount===3),l(),S(i.cheatMode?44:-1),l(),S(i.deck.cards?45:-1))},dependencies:[xe,Fe,Ee,Se,Ae,Be,Y],styles:[`:host{display:block}.klondike{--card-w: clamp(42px, calc((100vw - 84px) / 7), 78px);--card-h: calc(var(--card-w) * 1.352);--pile-gap: clamp(.25rem, .85vw, .75rem);--tableau-gap: clamp(.5rem, .8vw, 1rem);--stack-offset: clamp(.86rem, calc(var(--card-h) * .25), 1.55rem);--table-padding: clamp(.5rem, 2vw, 1.25rem);--felt: #1a8563;--felt-dark: #126850;--felt-light: #35a57a;--brass: #d7b56d;margin-inline:auto;max-width:1180px}.pagetitle+.klondike{margin-top:.75rem}.klondike-card{background:var(--felt);border:1px solid rgba(19,87,67,.24);border-radius:8px;box-shadow:0 .65rem 1.5rem #1642391c,inset 0 0 0 1px #ffffff1a;margin-bottom:1.25rem;overflow:hidden;overscroll-behavior:contain}.draw-control{align-items:center;box-sizing:border-box;display:flex;gap:.5rem;justify-content:end;justify-self:end;padding-inline:.4rem;width:min(100%,10rem)}.draw-control span{color:#fffc;font-size:.78rem;font-weight:700;margin:0;text-transform:uppercase}.draw-control .mat-mdc-slide-toggle{--mdc-switch-selected-focus-state-layer-color: #f4d58d;--mdc-switch-selected-handle-color: #f4d58d;--mdc-switch-selected-hover-state-layer-color: #f4d58d;--mdc-switch-selected-pressed-state-layer-color: #f4d58d;--mdc-switch-selected-track-color: rgba(244, 213, 141, .7);--mdc-switch-unselected-handle-color: #f9fbf8;--mdc-switch-unselected-track-color: rgba(255, 255, 255, .32)}.gametable{background-color:var(--felt);background-image:linear-gradient(45deg,rgba(255,255,255,.024) 25%,transparent 25%),linear-gradient(-45deg,rgba(255,255,255,.018) 25%,transparent 25%);background-size:18px 18px;min-height:min(70vh,720px);padding:var(--table-padding)}.upper{align-items:start;display:grid;gap:var(--pile-gap);grid-template-columns:var(--card-w) var(--card-w) minmax(0,1fr);margin-bottom:clamp(1rem,2vw,1.75rem)}.foundations{display:grid;gap:var(--pile-gap);grid-template-columns:repeat(4,var(--card-w));justify-content:end}.tableaus{align-items:start;display:grid;gap:var(--tableau-gap);grid-template-columns:repeat(7,var(--card-w));justify-content:center}.pile{background:radial-gradient(circle at 50% 38%,rgba(255,255,255,.13),transparent 58%),#ffffff0f;border:1px solid rgba(255,255,255,.32);border-radius:max(5px,var(--card-w) * .08);box-shadow:inset 0 0 0 1px #0d533e1f,inset 0 .45rem 1rem #104a3914;min-height:var(--card-h);position:relative;width:var(--card-w)}button.pile{align-items:stretch;cursor:pointer;display:block;justify-content:stretch;padding:0}button.pile:hover{opacity:1}.deck,.draw,.foundation{height:var(--card-h)}.pile-watermark{filter:saturate(.5);height:var(--card-h);inset:0;opacity:.18;position:absolute;width:var(--card-w)}.facecard{animation:card-settle .22s cubic-bezier(.2,.8,.2,1);border-radius:max(4px,var(--card-w) * .065);display:block;height:var(--card-h);min-height:0;min-width:0;position:relative;touch-action:none;transition:filter .16s ease,transform .18s cubic-bezier(.2,.8,.2,1);width:var(--card-w)}.facecard.is-draggable{cursor:grab}.facecard.cdk-drag-dragging,.cdk-drag-preview{cursor:grabbing}.facecard img,.tableau-drag-preview img{border-radius:max(4px,var(--card-w) * .065);display:block;height:var(--card-h);object-fit:contain;-webkit-user-select:none;user-select:none;width:var(--card-w)}.facecard img{filter:drop-shadow(0 .18rem .25rem rgba(8,41,33,.18))}.deck .facecard,.draw .facecard,.foundation .facecard{inset:0;position:absolute}.deck .facecard:nth-last-child(2){transform:translate(1px,-1px)}.deck .facecard:nth-last-child(3){transform:translate(2px,-2px)}.facecard.is-cheat-peek img{outline:2px solid #f5cb62;outline-offset:-2px}.facecard.is-cheat-peek-target img{outline:1px dashed rgba(245,203,98,.76);outline-offset:-3px}.facecard.is-cheat-peek-target,.facecard.is-cheat-cover-target{cursor:pointer}.facecard.is-cheat-peek-target:hover img{outline-style:solid}.facecard.is-cheat-cover-target img{outline:2px solid #ffffff;outline-offset:-2px}.facecard.is-cheat-cover-target:hover img{outline-color:#f5cb62}.deck .facecard.is-stock-cheat-peek{transform:translate(calc(var(--card-w) * .34),calc(var(--card-h) * .22)) rotate(4deg);z-index:5}.draw .facecard:last-child,.foundation .facecard:last-child{z-index:2}.tableau{min-height:calc(var(--card-h) + 6 * var(--stack-offset))}.tableau .facecard:not(:first-child){margin-top:calc(var(--stack-offset) - var(--card-h))}.tableau .facecard.is-draggable:hover{filter:brightness(1.04);transform:translateY(-3px);z-index:3}.placeholder.cdk-drag-placeholder{display:block;height:var(--card-h);opacity:0;visibility:hidden;width:var(--card-w)}.draw .placeholder.cdk-drag-placeholder,.foundation .placeholder.cdk-drag-placeholder{inset:0;position:absolute}.tableau .placeholder.cdk-drag-placeholder:not(:first-child){margin-top:calc(var(--stack-offset) - var(--card-h))}.klondike .cdk-drag-animating{transition:none!important}.klondike .tableau.cdk-drop-list-dragging .facecard:not(.cdk-drag-placeholder),.klondike .foundation.cdk-drop-list-dragging .facecard:not(.cdk-drag-placeholder){transition:filter .12s ease,transform .12s cubic-bezier(.2,.8,.2,1)}@media(max-width:767px){.klondike{--card-w: clamp(34px, calc((100vw - 60px) / 7), 52px);--pile-gap: clamp(.18rem, 1vw, .38rem);--tableau-gap: var(--pile-gap);--table-padding: .5rem;margin-inline:0}.klondike-card{border-radius:8px;margin-bottom:.75rem}.draw-control{justify-content:space-between;justify-self:stretch;width:100%}.gametable{min-height:calc(100svh - 16rem)}.upper{grid-template-columns:repeat(6,var(--card-w));justify-content:space-between}.foundations{display:grid;gap:var(--pile-gap);grid-column:3/span 4;grid-template-columns:repeat(4,var(--card-w));justify-content:space-between}.tableaus{justify-content:space-between}.tableau{min-height:calc(var(--card-h) + 9 * var(--stack-offset))}}@media(max-width:380px){.klondike{--card-w: clamp(34px, calc((100vw - 38px) / 7), 45px);--stack-offset: clamp(.74rem, calc(var(--card-h) * .24), 1.15rem)}}
`],encapsulation:2})}}return n})()});Ft();export{Oi as KlondikeComponent};
