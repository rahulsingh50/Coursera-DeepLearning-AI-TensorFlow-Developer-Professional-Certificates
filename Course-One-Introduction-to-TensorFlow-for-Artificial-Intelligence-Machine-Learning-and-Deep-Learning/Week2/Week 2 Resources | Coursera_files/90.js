(window.webpackJsonp=window.webpackJsonp||[]).push([[90,119],{"7AkQ":function(module,e,t){"use strict";var n=t("q1tI"),r=t.n(n),o=t("EqTq"),a=t("TOZ3"),i=t("CsdX"),c=t("MVKU"),s=t("+kEw"),l=t("5Mbi"),u=t("YuGj"),d=t("6R2g"),h=t("mIXM"),p=t.n(h),f=Object(u.a)(c.a),m=Object(o.a)("UserPortrait"),v=40,b=.6,g=16,w=function UserPortrait(e){var t=e.user,n=e.showFirstName,o=e.showCaret,c=e.showFullName,u=e.isCaretUp,h=t.full_name,p=t.photo_120,v=h&&h.split(" ")[0];return r.a.createElement(a.b,{rootClassName:m(void 0,void 0,"pii-hide"),alignItems:"center"},p&&r.a.createElement(d.a,{fullName:h,profileImageUrl:p,width:40,height:40}),!p&&r.a.createElement(f,{size:Math.round(24),color:i.b.white,stackColor:i.b.accent,stackToIconRatio:.6}),n&&r.a.createElement("span",{"data-e2e":"UserPortraitFirstName",className:m("first-name",void 0,"body c-ph-username")},v),c&&r.a.createElement("span",{"data-e2e":"UserPortraitFullName",className:m("full-name",void 0,"body c-ph-username")},h),o&&u?r.a.createElement(l.a,{size:16,suppressTitle:!0}):r.a.createElement(s.a,{size:16,suppressTitle:!0}))};e.a=w},"AHi/":function(module,e,t){"use strict";t.r(e),t.d(e,"default",function(){return y});var n=t("pVnL"),r=t.n(n),o=t("VbXa"),a=t.n(o),i=t("17x9"),c=t.n(i),s=t("q1tI"),l=t.n(s),u=t("w/1P"),d=t.n(u),h=t("hS5U"),p=t.n(h),f=t("eJRr"),m=t.n(f),v=t("CsdX"),b=t("VGgr"),g=t("BHjd"),w=f.StyleSheet.create({SignoutForm:{width:"100%",height:"100%",padding:0}}),y=function(e){function SignoutButton(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).state={componentDidMount:!1},t}a()(SignoutButton,e);var t=SignoutButton.prototype;return t.componentDidMount=function componentDidMount(){this.setState(function(){return{componentDidMount:!0}})},t.render=function render(){var e=this.props,t=e.mobileOnly,n=e.onKeyDown,o=e.tabIndex,a=e.targetRef,i=this.state.componentDidMount,c=b.a.get("CSRF3-Token"),s=d()("c-ph-right-nav-button","rc-HeaderRightNavButton",t&&"c-ph-right-nav-mobile-only"),u=i&&Object(g.a)("logout",c)||"";return l.a.createElement("li",{className:s,role:"none"},l.a.createElement("form",r()({},Object(v.d)("c-ph-right-nav-button",w.SignoutForm),{action:u,method:"post"}),l.a.createElement("button",{id:"logout-btn",role:"menuitem",tabIndex:o,ref:a,onKeyDown:n,className:"sign-out",type:"submit","data-popup-close":!0,style:{border:"none"}},p()("Log Out"))))},SignoutButton}(s.Component);y.propTypes={mobileOnly:c.a.bool,tabIndex:c.a.number,onKeyDown:c.a.func,targetRef:c.a.func}},M8gU:function(module,exports,e){},MVKU:function(module,e,t){"use strict";var n=t("q1tI"),r=t.n(n),o=t("MnCE"),a=t("oyNZ");function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var n=_objectWithoutPropertiesLoose(e,t),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++){if(r=a[o],t.indexOf(r)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,r))continue;n[r]=e[r]}}return n}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++){if(o=r[a],t.indexOf(o)>=0)continue;n[o]=e[o]}return n}var i=function SvgUserFilled(e){var t=e.title,r=void 0===t?"User Filled":t,o=_objectWithoutProperties(e,["title"]);return n.createElement(a.a,_extends({title:r},o,{viewBox:"0 0 48 48"}),n.createElement("path",{d:"M33.5,10.4C33.7,5.1,29.2,1,24,1s-9.8,4.2-9.5,9.4c0.1,1.1,1.1,6.3,1.1,6.3c0.8,4.5,3.8,8.3,8.4,8.3s7.6-3.8,8.4-8.4C32.4,16.6,33.4,11.4,33.5,10.4z"}),n.createElement("path",{d:"M47,47H1l1.1-8.2c0.5-2.7,2.9-4.3,5.6-4.9L24,31l16.3,2.9c2.7,0.6,5.1,2.2,5.5,4.9L47,47z"}))};(i=Object(o.pure)(i)).displayName="SvgUserFilled",e.a=i},Q1T9:function(module,e,t){"use strict";var n={up:38,left:37,down:40,right:39,space:32,enter:13,esc:27,tab:9,home:36,end:35};e.a=n},RbUx:function(module,e,t){"use strict";var n=t("pVnL"),r=t.n(n),o=t("QILm"),a=t.n(o),i=t("q1tI"),c=t.n(i),s=t("TmOg"),l=function List(e){var t=e.children,n=e.onEsc,o=e.onEnter,i=e.domRef,s=e.activateClick,l=e.allowDefaultOnEnter,u=a()(e,["children","onEsc","onEnter","domRef","activateClick","allowDefaultOnEnter"]);return c.a.createElement("ul",r()({ref:i},u),t)},u=Object(s.a)(l);e.a=u},TmOg:function(module,e,t){"use strict";var n=t("lSNA"),r=t.n(n),o=t("QILm"),a=t.n(o),i=t("VbXa"),c=t.n(i),s=t("44Ds"),l=t.n(s),u=t("q1tI"),d=t.n(u),h=t("MnCE"),p=t("Q1T9");function withKeyboardControls(e){var t=function(t){function WithKeyboardControls(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).state={tabbableChildIndex:0},e.childRefs=[],e.manageFocus=l()(function(t){return function(n){var r,o,a,i,c=e.getChildAtIndex(t);if(!c)return;var s=c.props,l=n.keyCode,u=e.props,d=u["aria-controls"],h=u["aria-labelledby"],f=u.allowDefaultOnEnter,m=0,v=null,b=s["aria-controls"]||d,g=s["aria-labelledby"]||h,w=e.props,y=w.onEnter,k=w.onEsc,C=w.activateClick,O=w.selectOnArrow;switch(l){case p.a.up:case p.a.left:n.preventDefault();for(var E=1,S=e.childRefs.length;E<=S&&!v;E+=1)m=((t-E)%S+S)%S,v=e.childRefs[m];var R;if(null===(r=v)||void 0===r||r.focus(),O)null===(R=v)||void 0===R||R.click();e.setState({tabbableChildIndex:m});break;case p.a.down:case p.a.right:n.preventDefault();for(var j=1,N=e.childRefs.length;j<=N&&!v;j+=1)m=((t+j)%N+N)%N,v=e.childRefs[m];var D;if(null===(o=v)||void 0===o||o.focus(),O)null===(D=v)||void 0===D||D.click();e.setState({tabbableChildIndex:m});break;case p.a.space:case p.a.enter:var I;if(f||n.preventDefault(),m=t,v=e.childRefs[m],C)null===(I=v)||void 0===I||I.click();y&&y(s,n),b&&e.giftFocus(b);break;case p.a.esc:null==k||k(s,n),g&&e.giftFocus(g);break;case p.a.home:n.preventDefault();for(var M=0,B=e.childRefs.length;M<B&&!v;M+=1)m=M,v=e.childRefs[m];null===(a=v)||void 0===a||a.focus(),e.setState({tabbableChildIndex:m});break;case p.a.end:n.preventDefault();for(var x=1,A=e.childRefs.length;x<=A&&!v;x+=1)m=A-x,v=e.childRefs[m];null===(i=v)||void 0===i||i.focus(),e.setState({tabbableChildIndex:m})}}}),e.manageRef=l()(function(t){return function(n){e.childRefs[t]=n}}),e}c()(WithKeyboardControls,t);var n=WithKeyboardControls.prototype;return n.getChildAtIndex=function getChildAtIndex(e){var t;return d.a.Children.forEach(this.props.children,function(n,r){r===e&&d.a.isValidElement(n)&&(t=n)}),t},n.giftFocus=function giftFocus(e){var t=document.getElementById(e);null==t||t.focus()},n.render=function render(){var t=this,n=this.props,o=n.children,i=a()(n,["children"]),c=this.state.tabbableChildIndex;return d.a.createElement(e,i,d.a.Children.map(o,function(e,n){var o;if(!d.a.isValidElement(e))return null;var a="string"==typeof e.type?"ref":"targetRef",i=(o={},r()(o,a,t.manageRef(n)),r()(o,"onKeyDown",t.manageFocus(n)),r()(o,"tabIndex",n===c?0:-1),r()(o,"key",e.key||n),o);return d.a.cloneElement(e,i)}))},WithKeyboardControls}(d.a.Component);return t.defaultProps={onEnter:function onEnter(){return},onEsc:function onEsc(){return},activateClick:!1,selectOnArrow:!1},Object(h.setDisplayName)(Object(h.wrapDisplayName)(e,"withKeyboardControls"))(t)}e.a=withKeyboardControls},YuGj:function(module,e,t){"use strict";var n=t("pVnL"),r=t.n(n),o=t("lSNA"),a=t.n(o),i=t("QILm"),c=t.n(i),s=t("VbXa"),l=t.n(s),u=t("q1tI"),d=t.n(u),h=t("eJRr"),p=t.n(h),f=t("CsdX"),m=t("MnCE"),v=t("5BCV");function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){a()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function getStyles(e){var t=e.size,n=e.stackBorderRadius,r=e.stackBorderWidth,o=e.stackBorderColor,a=e.stackToIconRatio;return{withSvgStack:{width:t/a,height:t/a,overflow:"hidden",border:"".concat(r,"px solid ").concat(o),borderRadius:n}}}var b=h.StyleSheet.create({withSvgStack:{}}),g=function withSvgStack(e){var t=e.displayName||e.name,n=function(t){function HOC(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).state={isHovered:!1},e.handleBlur=function(){e.setState({isHovered:!1})},e.handleFocus=function(){e.setState({isHovered:!0})},e}var n;return l()(HOC,t),HOC.prototype.render=function render(){var t=this.props,n=t.stackBorderColor,o=t.stackBorderRadius,a=t.stackBorderWidth,i=t.stackColor,s=t.stackHoverColor,l=t.stackStyle,u=t.stackToIconRatio,h=t.stackTag,p=t.size,m=t.color,v=t.hoverColor,g=c()(t,["stackBorderColor","stackBorderRadius","stackBorderWidth","stackColor","stackHoverColor","stackStyle","stackToIconRatio","stackTag","size","color","hoverColor"]),w=this.state.isHovered,y=getStyles({size:p,stackBorderRadius:o,stackBorderWidth:a,stackBorderColor:n,stackToIconRatio:u}),k=w&&s?s:i;return d.a.createElement(h,r()({},Object(f.d)("horizontal-box align-items-absolute-center",b.withSvgStack),{style:_objectSpread(_objectSpread({},y.withSvgStack),{},{backgroundColor:k},l),onFocus:this.handleFocus,onMouseOver:this.handleFocus,onMouseOut:this.handleBlur,onBlur:this.handleBlur}),d.a.createElement(e,r()({},g,{size:p,color:w&&v||m})))},HOC}(d.a.Component);return n.displayName="withSvgStack(".concat(t,")"),n.defaultProps={stackTag:"span",size:24,stackBorderRadius:"50%",stackBorderWidth:0,stackBorderColor:f.b.divider,stackColor:f.b.primary,stackStyle:{},stackToIconRatio:.6},Object(v.default)(n,e),Object(m.pure)(n)};e.a=g},mIXM:function(module,exports,e){var t=e("M8gU"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},o=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},qfNz:function(module,exports,e){var t=e("qvxe"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},o=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},qvxe:function(module,exports,e){},vmV4:function(module,e,t){"use strict";t.r(e);var n=t("pVnL"),r=t.n(n),o=t("VbXa"),a=t.n(o),i=t("q1tI"),c=t.n(i),s=t("E+oP"),l=t.n(s),u=t("hS5U"),d=t.n(u),h=t("sQ/U"),p=t("w/1P"),f=t.n(p),m=t("RbUx"),v=t("7AkQ"),b=t("AHi/"),g=t("ac/Q"),w=t("Q1T9"),y=t("HvVw"),k=t("qfNz"),C=t.n(k),O=function(e){function AuthenticatedAccountDropdown(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).state={showNavMenu:!1},t.handleClick=function(e){if(t.node&&t.node.contains(e.target))return;t.toggleMenu()},t.handleKeyPress=function(e){if(t.dropdownMenu){var n=e.keyCode,r=t.dropdownMenu.querySelectorAll("li > a, button");if(r.length){var o=n===w.a.down?r[0]:r[r.length-1];n!==w.a.up&&n!==w.a.down||o.focus({preventScroll:!0})}}},t.toggleMenu=function(){t.setState(function(e){return{showNavMenu:!e.showNavMenu}})},t}a()(AuthenticatedAccountDropdown,e);var t=AuthenticatedAccountDropdown.prototype;return t.componentDidUpdate=function componentDidUpdate(e,t){var n=t.showNavMenu,r=this.state.showNavMenu,o,a;r!==n&&(r?((null===(o=this.firstButtonRef)||void 0===o?void 0:o.querySelector('[role="menuitem"]')).focus(),document.addEventListener("click",this.handleClick,!1)):document.removeEventListener("click",this.handleClick,!1))},t.componentWillUnmount=function componentWillUnmount(){document.removeEventListener("click",this.handleClick,!1)},t.inEnterpriseOrDegree=function inEnterpriseOrDegree(){var e=this.props,t=e.thirdPartyOrganizations,n=e.programs,r=e.degrees;return!l()(t)||!l()(n)||!l()(r)},t.render=function render(){var e=this,t=this.props,n=t.hideAvatarBorder,o=t.showAdminLinks,a=this.state.showNavMenu,i=h.a.get().full_name,s=d()("User dropdown menu for #{learnerName}: closed",{learnerName:i});a&&(s=d()("User dropdown menu for #{learnerName}: open",{learnerName:i}));var l=f()(["rc-AuthenticatedAccountDropdown","c-ph-right-nav-button","c-ph-right-nav-desktop-only","c-ph-avatar-button",{"c-ph-right-nav-no-border":n},{"c-ph-right-nav-expanded":a}]),u=f()(["button-link","horizontal-box","switcher_trigger","align-items-absolute-center","c-authenticated-dropdown-button","c-ph-slim"]),p=Object(y.a)(this.props);return this.inEnterpriseOrDegree()&&!o||p.unshift({href:"/?skipBrowseRedirect=true",label:d()("My Courses"),name:"my-courses"}),c.a.createElement("li",{className:l,role:"menuitem"},c.a.createElement("div",{className:"bt3-dropdown c-authenticated-dropdown-menu-container",ref:function ref(t){e.node=t}},c.a.createElement("button",{type:"button",id:"right-nav-dropdown-btn",ref:function ref(t){e.dropdownButton=t},className:u,"aria-haspopup":"true","aria-expanded":a,"aria-label":s,onClick:this.toggleMenu,onKeyDown:this.handleKeyPress,"data-e2e":"header-profile"},c.a.createElement(v.a,{user:h.a.get(),showFullName:!0,showCaret:!0,isCaretUp:a})),a&&c.a.createElement(m.a,{id:"c-ph-aai-dropdown",domRef:function domRef(t){e.dropdownMenu=t},className:"c-authenticated-dropdown-menu",role:"menu","aria-labelledby":"right-nav-dropdown-btn","aria-label":"Navigation Menu",onEsc:this.toggleMenu,allowDefaultOnEnter:!0},p.map(function(t,n){return c.a.createElement(g.a,r()({domRef:function domRef(t){0===n&&(e.firstButtonRef=t)},wrapperClassName:"dropdown-btn",linkClassName:"dropdown-link",key:t.name},t))}),c.a.createElement(b.default,null))))},AuthenticatedAccountDropdown}(c.a.Component);e.default=O}}]);
//# sourceMappingURL=90.8ff16aa5a72ee9f71802.js.map