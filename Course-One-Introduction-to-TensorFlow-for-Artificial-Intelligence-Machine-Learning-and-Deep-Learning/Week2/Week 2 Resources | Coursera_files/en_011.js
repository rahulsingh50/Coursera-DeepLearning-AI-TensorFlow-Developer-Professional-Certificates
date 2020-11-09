(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"+9Qw":function(module,e,t){"use strict";var n=t("q1tI"),r=t.n(n),a=t("w/1P"),o=t.n(a),i=t("TOZ3"),c=t("m10x"),s=t("cO+T"),u=t("jr3s"),l=t.n(u),d=t("d62h"),p=t.n(d),m=function LtiLaunchRoleOptions(e){var t=e.className,n=e.options,a=e.selectedOptionId,u=e.onChange;if(n.length<=1)return null;return r.a.createElement(i.b,{rootClassName:o()("rc-LtiLaunchRoleOptions",t),justifyContent:"end",style:{alignItems:"flex-end"}},r.a.createElement(c.g,{style:{whiteSpace:"nowrap"}},l()("Launch as:")),r.a.createElement(s.a,{options:n,labelKey:"label",valueKey:"id",value:a,onChange:u}))};e.a=m},"0/aH":function(module,e,t){"use strict";t.d(e,"a",function(){return n});var n=18e4},"1pA2":function(module,e,t){"use strict";var n=t("ty6C"),r=t("YCpq"),a=t("eBhw");e.a=function(e){var t=e.itemId,o=e.courseId,i=e.courseSlug,c=new a.a({itemId:t,courseId:o,courseSlug:i}),s={courseId:o,itemId:t,learnerId:r.a.get("id")},u={fields:[]},l=!0;return c.create(n.a.opensApi,s,u,!0)}},"3duF":function(module,e,t){"use strict";var n=t("F/us"),r=t.n(n),a=t("hidG"),o=function DescriptionData(e){Object(a.a)(e,"DescriptionData constructed with no arguments"),Object.assign(this,r()(e).pick("id","itemId","courseId","ltiVersion","description","toolName","privacyLevel"))};e.a=o},"5s8R":function(module,e,t){"use strict";t.d(e,"c",function(){return y}),t.d(e,"a",function(){return T}),t.d(e,"b",function(){return S});var n=t("unn+"),r=t("q3BH"),a=t("z+Ik"),o,i,c,s,u=("undefined"!=typeof window&&navigator.userAgent||"").toLowerCase().indexOf("catchpoint")>=0?"6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI":"6LfC0DkUAAAAADDdBbNPjM3yzkRyRgghbjYYgzeU",l="https://www.recaptcha.net/recaptcha/api.js?onload=onInitialRecaptchaSetup&render=explicit",d,p={},m,h,f,g="recaptcha-finaid-form",b="recaptcha-payment-settings",v=function getlangCode(){var e=Object(a.getLanguageCode)(),t;return"zh-mo"===e?"zh":e},E=function trackRecaptcha(e){e&&e.namespace&&r.a.trackComponent(e,{},"recaptcha_executed","show")},I=function getRecaptchaResponse(e){return window.grecaptcha&&"function"==typeof window.grecaptcha.getResponse?window.grecaptcha.getResponse(p[e]):(n.default.error("No grecaptcha found"),null)},O=function executeRecaptcha(e){return window.grecaptcha?(window.grecaptcha.execute(p[e]),m&&E(m),Promise.resolve()):(n.default.error("No grecaptcha found"),Promise.reject())},L=function onInitialRecaptchaSetup(){window.grecaptcha?(p[d]=window.grecaptcha.render(d,{sitekey:u,callback:h,hl:v()}),f&&f(p[d])):n.default.error("No grecaptcha found")},R=function injectGoogleRecaptchaScript(){var e=document.body||document.getElementsByTagName("body")[0],t=document.createElement("script");t.src=l,t.type="text/javascript",t.async=!0,t.defer=!0,t.onerror=function(){throw new URIError("The script ".concat(l," is not accessible."))},e.appendChild(t)},y=function setupRecaptcha(e,t,n,r){"undefined"!=typeof document&&"undefined"!=typeof window&&(window.onInitialRecaptchaSetup=L,h=t,d=e,m=r,n&&(f=n),R())},T=function getRecaptchaToken(e){var t=p[e],n=I(t);return""===n?(O(t),null):null===n?"":n},S=function resetRecaptcha(e){window.grecaptcha?window.grecaptcha.reset(p[e]):n.default.error("No grecaptcha found")}},"632r":function(module,exports,e){},"7p8r":function(module,exports,e){},"7x7S":function(module,e,t){"use strict";var n=t("lSNA"),r=t.n(n),a=t("ty6C"),o=t("YCpq"),i=t("eBhw");function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){r()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}e.a=function(e){var t=e.itemId,n=e.courseId,r=e.courseSlug,c=e.launchRole,s=e.recaptchaToken,u=new i.a({itemId:t,courseId:n,courseSlug:r}),l=_objectSpread({courseId:n,itemId:t,learnerId:o.a.get("id"),recaptchaToken:s},c?{launchAs:c}:{}),d={fields:["endpointUrl","authRequestUrl","signedProperties"]},p=!0;return u.create(a.a.ungradedLaunchesApi,l,d,!0)}},"By/7":function(module,e,t){"use strict";t.d(e,"a",function(){return c});var n=t("zKnr"),r=t("jr3s"),a=t.n(r),o=function isInstructorCourseRole(e){return"string"==typeof e&&n.a.includes(e)},i=function isAdminCourseRole(e){return"string"==typeof e&&n.c.includes(e)},c=function buildLaunchRoleOptions(e){var t=i(e),r=o(e)||t,c=[{id:n.b.LEARNER,label:a()("Learner"),launchRole:r?"LEARNER":null}];return r&&c.push({id:n.b.INSTRUCTOR,label:a()("Instructor"),launchRole:t?"INSTRUCTOR":null}),t&&c.push({id:n.b.ADMIN,label:a()("Admin"),launchRole:null}),c}},EEk1:function(module,e,t){"use strict";var n=t("wiyT"),r=t.n(n),a=t("7x7S"),o=t("hoCt"),i=t("YCpq");e.a=function(e){var t=e.itemId,n=e.courseId,c=e.courseSlug,s=e.launchRole,u=e.recaptchaToken;return i.a.get("authenticated")?Object(a.a)({itemId:t,courseId:n,courseSlug:c,launchRole:s,recaptchaToken:u}).then(function(e){return e.body.elements[0]}).then(function(e){return new o.a(Object.assign({},{itemId:t,courseId:n},e))}):r()({})}},FDW2:function(module,e,t){"use strict";var n=t("q1tI"),r=t.n(n),a=t("kvW3"),o=t("RHKO"),i=t.n(o),c=t("K3W+"),s=t.n(c),u=function RecaptchaDisclaimer(){return n.createElement("div",{className:"m-t-1s caption-text text-xs-center"},n.createElement("div",{className:"m-b-1"},n.createElement(a.b,{message:i()("This site is protected by reCAPTCHA and the Google {privacyPolicyLink} and {tosLink} apply."),privacyPolicyLink:n.createElement("a",{href:"https://policies.google.com/privacy"},i()("Privacy Policy")),tosLink:n.createElement("a",{href:"https://policies.google.com/terms"},i()("Terms of Service"))})))};e.a=u},Hpzv:function(module,exports,e){var t=e("okaG"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},a=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},HsdC:function(module,e,t){"use strict";var n=t("VbXa"),r=t.n(n),a,o=function(e){function UserEmails(){return e.apply(this,arguments)||this}return r()(UserEmails,e),UserEmails}(t("HlCP").a);o.RESOURCE_NAME="userEmails.v2",e.a=o},J3ji:function(module,e,t){"use strict";var n=t("VbXa"),r=t.n(n),a=t("q1tI"),o=t.n(a),i=t("MnCE"),c=t("q5zD"),s=t("beC1"),u=t("K2XA"),l=t("Jz+x"),d=t("8cuT"),p=t.n(d),m=t("aelv"),h=t("zgcx"),f=t("nRXD"),g=t.n(f),b=function(e){function LtiLauncher(){return e.apply(this,arguments)||this}var t;return r()(LtiLauncher,e),LtiLauncher.prototype.render=function render(){var e=this.props,t=e.computedItem,n=e.descriptionData,r=e.isGradedLti,a=e.itemProgress,i=e.courseId,l=t.itemGrade,d=n||{},p=d.description,f=d.ltiVersion,g=d.privacyLevel,b=d.toolName,v=l.isPassing();return o.a.createElement(u.a,{className:"rc-LtiLauncher"},o.a.createElement("h2",{className:"title"},v&&o.a.createElement(c.a,{name:"circle-outer",innerIcon:"check",size:"lg",className:"completion-checkmark"}),b),o.a.createElement("div",{className:"tool-description"},o.a.createElement(s.a,{assumeStringIsHtml:!1,content:p})),o.a.createElement(m.a,{itemProgress:a,isGradedLti:r,computedItem:t}),o.a.createElement("hr",null),o.a.createElement("div",{className:"tool-launch"},o.a.createElement(h.a,{computedItem:t,courseId:i,isGradedLti:r,ltiVersion:f,privacyLevel:g,toolName:b})))},LtiLauncher}(o.a.Component);e.a=Object(i.compose)(Object(l.a)(),p()(["CourseStore"],function(e,t){var n=e.CourseStore,r=t.computedItem,a=t.computedCourseProgress;return{courseId:n.getCourseId(),itemProgress:a.courseProgress.getItemProgress(r.id)}}))(b)},"K3W+":function(module,exports,e){var t=e("xo/A"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},a=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},"KkL/":function(module,e,t){"use strict";t.d(e,"a",function(){return r});var n=t("KMW/"),r=function isInvisibleRecaptchaForLtiLaunchEnabled(e){return n.a.get("authentication","enableRecaptchaForLtiLaunch",{course_id:e})}},"Mc+d":function(module,e,t){"use strict";var n=t("VbXa"),r=t.n(n),a=t("17x9"),o=t.n(a),i=t("PStO"),c=t("q1tI"),s=t.n(c),u=t("MnCE"),l=t("F/us"),d=t.n(l),p=t("jr3s"),m=t.n(p),h=t("w/1P"),f=t.n(h),g=t("KMW/"),b=t("pAPY"),v=t("8cuT"),E=t.n(v),I=t("HsdC"),O=t("kvW3"),L=t("sQ/U"),R=t("+2ZD"),y=t("q5zD"),T=t("upIK"),S=t.n(T),A=function getTranslation(e){var t;return{ARIA_LABEL_FOR_LAUNCHED:m()("Open third-party tool in new window"),ARIA_LABEL_FOR_EMBEDDED:m()("Open third-party tool"),BUTTON_LABEL:m()("Open Tool")}[e]},C=function isEmailVerificationEnabled(e){return g.a.get("authentication","enableLtiToolEmailVerification",{course_id:e})},w=function(e){function LtiLaunchForm(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={showEmailVerificationModal:!1,emailVerificationMessage:void 0},t.onSubmit=function(e){var n=t.props,r=n.computedItem,a=n.courseId,o=n.courseSlug,i=n.onLaunch,c=n.userEmails,s=r.id;if(C(a)&&!(null==c?void 0:c.some(function(e){return e.isVerified})))return e.preventDefault(),void t.toggleEmailVerificationModal();Object(b.a)({itemId:s,courseId:a,courseSlug:o}),i&&setTimeout(i,0)},t.getActionUrl=function(){var e=t.props,n=e.ltiVersion,r=e.launchData;return"V1_3"===n?r.authRequestUrl:r.endpointUrl},t.toggleEmailVerificationModal=function(){t.setState(function(e){var t;return{showEmailVerificationModal:!e.showEmailVerificationModal}})},t.resendEmailVerification=function(){var e=t.context.executeMutation,n=t.props.userEmails,r=m()("Unable to send verification"),a=null==n?void 0:n[0];if(!a)return void t.setState({emailVerificationMessage:r});e(I.a.action("resendVerificationEmail",{},{email:a.email,userId:L.a.get().id})).then(function(){t.setState({emailVerificationMessage:m()("Email sent to #{email}",{email:a.email})})}).fail(function(){t.setState({emailVerificationMessage:r})}).done()},t}r()(LtiLaunchForm,e);var t=LtiLaunchForm.prototype;return t.renderEmailVerificationModal=function renderEmailVerificationModal(){var e=this.state.emailVerificationMessage;return s.a.createElement(R.a,{trackingName:"lti_email_verification_modal",modalName:"lti_email_verification_modal",handleClose:this.toggleEmailVerificationModal},s.a.createElement("h3",{className:"bt3-text-center"},m()("Email Verification Required")),s.a.createElement("div",null,s.a.createElement(O.b,{message:m()('You have not verified your email address yet. Please check your email inbox for an email from {courseraSupport} titled "{pleaseVerifyEmail}" and follow the instructions provided.'),courseraSupport:s.a.createElement("strong",null,m()("Coursera Support")),pleaseVerifyEmail:s.a.createElement("strong",null,m()("Action Required: Please confirm your email"))})),e?s.a.createElement("p",{className:"email-verification-message"},e):s.a.createElement("button",{className:"resend-verification-email-button secondary",type:"button",onClick:this.resendEmailVerification},m()("Resend Verification Email")))},t.render=function render(){var e=this.props,t=e.launchData,n=e.className,r=e.launchTarget,a=e.buttonLabel,o=void 0===a?A("BUTTON_LABEL"):a,i=this.state.showEmailVerificationModal,c=A("_blank"===r?"ARIA_LABEL_FOR_LAUNCHED":"ARIA_LABEL_FOR_EMBEDDED"),u=this.getActionUrl();return s.a.createElement("div",{className:f()(n,"rc-LaunchForm")},i&&this.renderEmailVerificationModal(),s.a.createElement("form",{method:"POST",onSubmit:this.onSubmit,action:u,target:r},d()(t.signedProperties).map(function(e,t){return s.a.createElement("input",{name:String(t),type:"hidden",value:e,key:t})}),s.a.createElement("button",{className:"submit-button primary",type:"submit","aria-label":c},s.a.createElement(y.a,{name:"external-link"}),"  ",o)))},LtiLaunchForm}(s.a.Component);w.contextTypes={executeMutation:o.a.func.isRequired},e.a=Object(u.compose)(E()(["CourseStore"],function(e){var t=e.CourseStore;return{courseId:t.getCourseId(),courseSlug:t.getCourseSlug()}}),Object(u.branch)(function(e){var t=e.courseId;return C(t)},i.a.createContainer(function(){return{userEmails:I.a.finder("findByUser",{params:{userId:L.a.get().id},fields:["isVerified"]})}})))(w)},Nxwp:function(module,exports,e){},"O/Cb":function(module,e,t){"use strict";var n=t("wiyT"),r=t.n(n),a=t("rBSV"),o=t("3duF"),i=t("YCpq");e.a=function(e){var t=e.itemId,n=e.courseId,c=e.courseSlug;return i.a.get("authenticated")?Object(a.a)({itemId:t,courseId:n,courseSlug:c}).then(function(e){return new o.a(Object.assign({},{itemId:t,courseId:n,courseSlug:c},e))}):r()({})}},RHKO:function(module,exports,e){var t=e("nkwd"),n=t.default?t.default:{},r,a=(0,e("HdzH").default)(n);a.getLocale=function(){return"en"},module.exports=a},"S/+v":function(module,e,t){"use strict";t.d(e,"a",function(){return s});var n=t("VbXa"),r=t.n(n),a=t("q1tI"),o=t.n(a),i=t("XbdE"),c=t("5s8R"),s=function(e){function Recaptcha(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={didRecaptchaComplete:!1,isRecaptchaLoaded:!1},t.handleRecaptchaRendered=function(){},t.handleRecaptchaLoaded=function(){t.setState({isRecaptchaLoaded:!0})},t.checkRecaptcha=function(){var e;if(!t.state.isRecaptchaLoaded)return;var n=t.props,r=n.recaptchaId,a=n.onComplete,o=n.onPass,i=n.onFail,s;if(t.state.didRecaptchaComplete)return;var u=Object(c.a)(r),l;"string"==typeof u&&(t.setState({didRecaptchaComplete:!0}),null==a||a(u),u.length>0?null==o||o(u):null==i||i())},t}r()(Recaptcha,e);var t=Recaptcha.prototype;return t.componentDidMount=function componentDidMount(){var e=this.props.recaptchaId;Object(c.c)(e,this.handleRecaptchaRendered,this.handleRecaptchaLoaded)},t.render=function render(){var e=this.props.recaptchaId,t=this.state.didRecaptchaComplete;return o.a.createElement("div",null,o.a.createElement(i.a,{onInterval:this.checkRecaptcha,interval:10,isEnabled:!t}),o.a.createElement("div",{id:e,"data-size":"invisible"}))},Recaptcha}(o.a.Component),u=s},TjAE:function(module,e,t){"use strict";var n=t("wiyT"),r=t.n(n),a=t("XN5z"),o=t("hoCt"),i=t("YCpq");e.a=function(e){var t=e.itemId,n=e.courseId,c=e.courseSlug,s=e.launchRole,u=e.recaptchaToken;return i.a.get("authenticated")?Object(a.a)({itemId:t,courseId:n,courseSlug:c,launchRole:s,recaptchaToken:u}).then(function(e){return e.body.elements[0]}).then(function(e){return new o.a(Object.assign({},{itemId:t,courseId:n},e))}):r()({})}},XN5z:function(module,e,t){"use strict";var n=t("lSNA"),r=t.n(n),a=t("ty6C"),o=t("YCpq"),i=t("eBhw");function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){r()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}e.a=function(e){var t=e.itemId,n=e.courseId,r=e.courseSlug,c=e.launchRole,s=e.recaptchaToken,u=new i.a({itemId:t,courseId:n,courseSlug:r}),l=_objectSpread({courseId:n,itemId:t,learnerId:o.a.get("id"),recaptchaToken:s,verifiableId:null},c?{launchAs:c}:{}),d={fields:["endpointUrl","authRequestUrl","signedProperties"]},p=!0;return u.create(a.a.gradedLaunchesApi,l,d,!0)}},XbdE:function(module,e,t){"use strict";t.d(e,"a",function(){return s});var n=t("VbXa"),r=t.n(n),a=t("q1tI"),o=t.n(a),i=t("plNT"),c=0,s=function(e){function Poller(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={isRunning:!1},t.onInterval=function(){var e=t.props.onInterval;return e?Promise.resolve(e()):Promise.resolve()},t.start=function(){t.setState({isRunning:!0},t.run)},t.stop=function(){t.clearTimeout(),t.setState({isRunning:!1})},t.run=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=t.props,r=n.interval,a=n.isEnabled,o=t.state.isRunning,i=e||a&&o;if(t.clearTimeout(),!i||!t.mounted)return;var c=function runNext(){a&&o&&t.mounted&&(t.clearTimeout(),t.timeoutId=window.setTimeout(t.run,r))};t.onInterval().then(c,c)},t.mounted=!1,t.pollerRef={},t.timeoutId=c,t}r()(Poller,e);var t=Poller.prototype;return t.componentDidMount=function componentDidMount(){var e=this.props,t=e.autoStart,n=e.pollerRef;this.mounted=!0,this.pollerRef.current={start:this.start,stop:this.stop,run:this.run},n&&(n.current=this.pollerRef.current),t&&this.start()},t.componentDidUpdate=function componentDidUpdate(e){var t=this.props,n=t.pollerRef,r=t.isEnabled,a=this.state.isRunning;n&&n!==e.pollerRef&&(n.current=this.pollerRef.current),e.isEnabled!==r&&(r?a&&this.run():this.clearTimeout())},t.componentWillUnmount=function componentWillUnmount(){this.mounted=!1,this.stop()},t.clearTimeout=function(e){function clearTimeout(){return e.apply(this,arguments)}return clearTimeout.toString=function(){return e.toString()},clearTimeout}(function(){this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=c)}),t.render=function render(){var e=this.props,t=e.uid,n=e.name,r=e.showDebugger,a=e.isEnabled,c=this.state.isRunning;return r?o.a.createElement(i.a,{uid:t,name:n,pollerRef:this.pollerRef,isEnabled:a,isRunning:c}):null},Poller}(o.a.Component);s.defaultProps={autoStart:!0,isEnabled:!0,showDebugger:!1},e.b=s},Zj1l:function(module,exports,e){},aelv:function(module,e,t){"use strict";var n=t("VbXa"),r=t.n(n),a=t("q1tI"),o=t.n(a),i=t("us00"),c=t("hbUA"),s=t("jd4K"),u=t("jr3s"),l=t.n(u),d=t("kvW3"),p=function(e){function Score(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).renderGrade=function(){var e=t.props,n=e.computedItem,r=e.computedItem.itemGrade,a=t.getScore();return Object(c.z)(n)?o.a.createElement("div",{className:"score"},o.a.createElement(d.a,{message:l()("<strong>{passingLabel}</strong> {score, number}%"),passingLabel:t.getPassingLabel(),score:Number.isNaN(a)?"--":a}),r.hasLatePenalty()&&o.a.createElement(i.a,{tooltipLabel:o.a.createElement(d.a,{message:l()("Late penalty of {percent}% applied"),percent:100*r.getLatePenaltyRatio()})})):o.a.createElement("div",{className:"score"},o.a.createElement(d.a,{message:l()("<strong>Grade: </strong>--")}))},t}r()(Score,e);var t=Score.prototype;return t.getPassingLabel=function getPassingLabel(){var e=this.props,t=e.isGradedLti,n=e.computedItem.itemGrade,r=e.itemProgress,a;return(t?n.isPassing():r.get("progressState")===s.a.COMPLETED)?l()("Passed"):l()("Try again")},t.getScore=function getScore(){var e=this.props,t=e.isGradedLti,n=e.computedItem.itemGrade,r=e.itemProgress;if(t){var a=n.get("overallOutcome");return Math.floor(100*a.grade)}return Math.floor(r.get("completionPercent"))},t.render=function render(){var e=this.props,t=e.computedItem,n=e.itemProgress,r;return(null==n?void 0:n.get("progressState"))===s.a.COMPLETED||t.isGraded?this.renderGrade():t.isSubmitted?o.a.createElement("div",{className:"score"},o.a.createElement("strong",null,l()("Submitted"))):null},Score}(o.a.Component);e.a=p},bAeU:function(module,exports,e){var t=e("7p8r"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},a=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},bcxU:function(module,exports){exports.default={"ar":true,"de":true,"es":true,"fr":true,"ja":true,"ko":true,"pseudo":true,"pt":true,"ru":true,"tr":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}},d62h:function(module,exports,e){var t=e("Nxwp"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},a=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},e13k:function(module,e,t){"use strict";var n=t("VbXa"),r=t.n(n),a=t("q1tI"),o=t.n(a),i=t("37kS"),c=t.n(i),s=t("Hpzv"),u=t.n(s),l=function(e){function LoadingIndicator(){return e.apply(this,arguments)||this}var t;return r()(LoadingIndicator,e),LoadingIndicator.prototype.render=function render(){return o.a.createElement("div",{className:"rc-LoadingIndicator"},c()("Loading"))},LoadingIndicator}(o.a.Component);e.a=l},hidG:function(module,e,t){"use strict";function assert(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Error;if(!e)throw"string"==typeof t?new Error(t):t;return e}t.d(e,"a",function(){return assert})},hoCt:function(module,e,t){"use strict";var n=t("F/us"),r=t.n(n),a=t("hidG"),o=function LaunchData(e){Object(a.a)(e,"LaunchData constructed with no arguments"),Object.assign(this,{signedProperties:{}},r()(e).pick("id","itemId","courseId","signedProperties","endpointUrl","authRequestUrl"))};e.a=o},jd4K:function(module,e,t){"use strict";var n;t.d(e,"a",function(){return n}),function(e){e.COMPLETED="Completed",e.STARTED="Started",e.NOT_STARTED="NotStarted"}(n||(n={}))},jr3s:function(module,exports,e){var t=e("bcxU"),n=t.default?t.default:{},r,a=(0,e("HdzH").default)(n);a.getLocale=function(){return"en"},module.exports=a},lPoB:function(module,exports,e){var t=e("Zj1l"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},a=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},nRXD:function(module,exports,e){var t=e("632r"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},a=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},nkwd:function(module,exports){exports.default={"ar":true,"de":true,"es":true,"fr":true,"ja":true,"ko":true,"pt":true,"ru":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}},okaG:function(module,exports,e){},p258:function(module,e,t){"use strict";t.r(e);var n=t("VbXa"),r=t.n(n),a=t("wiyT"),o=t.n(a),i=t("q1tI"),c=t.n(i),s=t("MnCE"),u=t("sQ/U"),l=t("TdzE"),d=t("O/Cb"),p=t("uyIS"),m=t("8cuT"),h=t.n(m),f=t("+LJP"),g=t("J3ji"),b=t("e13k"),v=function(e){function LtiItem(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={descriptionData:null},t}r()(LtiItem,e);var t=LtiItem.prototype;return t.componentDidMount=function componentDidMount(){this.fetchData()},t.fetchData=function fetchData(){var e=this,t=this.props,n=t.computedItem,r=t.courseId,a=t.courseSlug;o.a.all([Object(d.a)({itemId:n.id,courseId:r,courseSlug:a}),Object(p.a)(u.a.get().id,r)]).spread(function(t){e.setState({descriptionData:t})}).done()},t.render=function render(){var e=this.props,t=e.computedItem,n=e.isGradedLti,r=this.state.descriptionData;return c.a.createElement("div",{className:"rc-LtiItem"},r&&c.a.createElement(g.a,{computedItem:t,descriptionData:r,isGradedLti:n}),!r&&c.a.createElement(b.a,null))},LtiItem}(c.a.Component);e.default=Object(s.compose)(Object(f.a)(function(e){return{isGradedLti:e.isActive({name:"gradedLti",params:e.params})}}),Object(l.b)(),h()(["CourseStore"],function(e){var t=e.CourseStore;return{courseId:t.getCourseId(),courseSlug:t.getCourseSlug()}}))(v)},pAPY:function(module,e,t){"use strict";var n=t("wiyT"),r=t.n(n),a=t("1pA2"),o=t("x6CM"),i=t("YCpq");e.a=function(e){var t=e.itemId,n=e.courseId,c=e.courseSlug;return i.a.get("authenticated")?Object(a.a)({itemId:t,courseId:n,courseSlug:c}).then(function(e){return e.body.elements[0]}).then(function(e){return new o.a(Object.assign({},{itemId:t,courseId:n},e))}):r()({})}},plNT:function(module,e,t){"use strict";t.d(e,"a",function(){return b});var n=t("lSNA"),r=t.n(n),a=t("VbXa"),o=t.n(a),i=t("q1tI"),c=t.n(i),s=t("TOZ3"),u=t("CsdX"),l=t("qAUi"),d=t("wwtN"),p=t("6gRZ"),m=t.n(p),h=t("sQ/U"),f=t("bAeU"),g=t.n(f);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){r()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var b=function(e){function PollerDebugger(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={config:{shouldDisplay:!1,shouldRun:!0}},t.loadConfig=function(){var e=t.getStorageKey(),n=t.state.config;try{var r=JSON.parse(localStorage.getItem(e)||"");return Promise.resolve(_objectSpread(_objectSpread({},n),r))}catch(e){return Promise.resolve(n)}},t.saveConfig=function(){var e=t.getStorageKey(),n=t.state.config,r=JSON.stringify(n);return localStorage.setItem(e,r),Promise.resolve()},t.start=function(){var e=t.props.pollerRef.current;if(!e)return;t.setState(function(e){var t;return{config:_objectSpread(_objectSpread({},e.config),{},{shouldRun:!0})}},function(){t.saveConfig().then(function(){e.start()})})},t.stop=function(){var e=t.props.pollerRef.current;if(!e)return;t.setState(function(e){var t;return{config:_objectSpread(_objectSpread({},e.config),{},{shouldRun:!1})}},function(){t.saveConfig().then(function(){e.stop()})})},t.toggle=function(){var e;t.props.isRunning?t.stop():t.start()},t.forceRun=function(){var e=t.props.pollerRef.current;null==e||e.run(!0)},t}o()(PollerDebugger,e);var t=PollerDebugger.prototype;return t.componentDidMount=function componentDidMount(){var e=this,t=this.props,n=t.uid,r=t.pollerRef;n&&this.loadConfig().then(function(t){e.setState({config:t},function(){if(!r.current)return;t.shouldRun?r.current.start():r.current.stop()})})},t.getStorageKey=function getStorageKey(){var e=this.props.uid;return"poller:".concat(e||"unknown")},t.render=function render(){var e=this.props,t=e.name,n=e.pollerRef.current,r=e.isEnabled,a=e.isRunning,o,i=this.state.config.shouldDisplay&&h.a.isSuperuser();if(!n||!i)return null;return c.a.createElement(s.b,{rootClassName:"rc-PollerDebugger",alignItems:"center"},r?c.a.createElement(l.a,{size:18,color:u.b.success}):c.a.createElement(d.a,{size:18,color:u.b.danger}),c.a.createElement("span",null,r&&a?"Polling":"Not polling"," ",t),c.a.createElement(p.ButtonGroup,null,c.a.createElement(p.Button,{size:"xs",onClick:this.toggle},a?"Stop":"Start"),c.a.createElement(p.Button,{size:"xs",onClick:this.forceRun},"Force Run")))},PollerDebugger}(i.Component)},rBSV:function(module,e,t){"use strict";var n=t("ty6C"),r=t("eBhw");e.a=function(e){var t=e.itemId,a=e.courseId,o=e.courseSlug,i,c={fields:["ltiVersion","privacyLevel","toolName","description"]};return new r.a({itemId:t,courseId:a,courseSlug:o}).getWithUserCourseItemId(n.a.descriptionsApi,c).then(function(e){return e.elements[0]})}},ty6C:function(module,e,t){"use strict";var n={descriptionsApi:"onDemandLtiDescriptions.v1",gradedLaunchesApi:"onDemandLtiGradedLaunches.v1",opensApi:"onDemandLtiOpens.v1",ungradedLaunchesApi:"onDemandLtiUngradedLaunches.v1"};e.a=n;var r=n.descriptionsApi,a=n.gradedLaunchesApi,o=n.opensApi,i=n.ungradedLaunchesApi},upIK:function(module,exports,e){var t=e("yiUz"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},a=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},us00:function(module,e,t){"use strict";var n=t("q1tI"),r=t.n(n),a=t("PJ/k"),o=t.n(a),i=t("5iHD"),c=t("0N/Z"),s=t("lPoB"),u=t.n(s),l=function LatePenaltyIcon(e){var t=e.gradingLatePenalty,n=e.tooltipLabel;return r.a.createElement(a.OverlayTrigger,{placement:"bottom",overlay:r.a.createElement(a.Tooltip,null,n,!n&&t&&new c.a(t).learnerLabel)},r.a.createElement("div",{className:"rc-LatePenaltyIcon"},r.a.createElement(i.a,{size:20,color:"#111"})))};e.a=l},x6CM:function(module,e,t){"use strict";var n=t("F/us"),r=t.n(n),a=t("hidG"),o=function OpenData(e){Object(a.a)(e,"OpenData constructed with no arguments"),Object.assign(this,r()(e).pick("id","itemId","courseId"))};e.a=o},"xo/A":function(module,exports,e){},yiUz:function(module,exports,e){},zKnr:function(module,e,t){"use strict";t.d(e,"a",function(){return n}),t.d(e,"c",function(){return r}),t.d(e,"b",function(){return a});var n=["INSTRUCTOR","TEACHING_STAFF","COURSE_ASSISTANT","DATA_COORDINATOR"],r=["UNIVERSITY_ADMIN"],a={LEARNER:"learner",INSTRUCTOR:"instructor",ADMIN:"admin"}},zgcx:function(module,e,t){"use strict";var n=t("VkAN"),r=t.n(n),a=t("VbXa"),o=t.n(a),i=t("q1tI"),c=t.n(i),s=t("MnCE"),u=t("lTCR"),l=t.n(u),d=t("xJyF"),p=t("jr3s"),m=t.n(p),h=t("sQ/U"),f=t("XbdE"),g=t("kvW3"),b=t("Mc+d"),v=t("TjAE"),E=t("EEk1"),I=t("F9Z8"),O=t("q5zD"),L=t("4uCe"),R=t("TOZ3"),y=t("rQpo"),T=t("KMW/"),S=t("8cuT"),A=t.n(S),C=t("hbUA"),w=t("+9Qw"),N=t("0/aH"),P=t("zKnr"),D=t("By/7"),j=t("FDW2"),U=t("KkL/"),k=t("S/+v");function _templateObject(){var e=r()(["\n  query OpenCourseMembershipsV1Query($userId: String!, $slug: String!) {\n    OpenCourseMembershipsV1Resource {\n      findByUserAndSlug(userId: $userId, slug: $slug) {\n        elements {\n          id\n          courseRole\n        }\n      }\n    }\n  }\n"]);return _templateObject=function _templateObject(){return e},e}var M="recaptcha-lti-launch",V=function getTranslation(e){var t;return{BUTTON_OPEN_TOOL:m()("Open Tool"),BUTTON_PREPARING:m()("Preparing..."),DISCLOSURE:m()("This course uses a third-party tool, {toolName}, to enhance your learning experience."),DISCLOSURE_WITHOUT_TOOLNAME:m()("This course uses a third-party tool, to enhance your learning experience."),IFRAME_TITLE:m()("Third-party tool"),IFRAME_RENDER_FAIL:m()("Cannot render iframe."),PRIVACY_ANONYMOUS:m()("No personal information will be shared with the tool."),PRIVACY_SHARE_ID:m()("The tool will reference basic information like your Coursera ID."),PRIVACY_SHARE_NAME:m()("The tool will reference basic information like your name and Coursera ID."),PRIVACY_SHARE_EMAIL:m()("The tool will reference basic information like your name, email, and Coursera ID."),BUTTON_OPEN_TOOL_AS_LEARNER:m()("Open Tool as Learner"),BUTTON_OPEN_TOOL_AS_INSTRUCTOR:m()("Open Tool as Instructor"),BUTTON_OPEN_TOOL_AS_UNIVERSITY_ADMIN:m()("Open Tool as University Admin"),BUTTON_OPEN_TOOL_AS_TEACHING_STAFF:m()("Open Tool as Teaching Staff"),BUTTON_OPEN_TOOL_AS_COURSE_ASSISTANT:m()("Open Tool as Course Assistant"),BUTTON_OPEN_TOOL_AS_DATA_COORDINATOR:m()("Open Tool as Data Coordinator")}[e]||""},x="token-not-required",B=function(e){function LtiVerifyAndLaunch(t){var n;(n=e.call(this,t)||this).handleLaunchRoleChange=function(e){n.setState({selectedLaunchRoleOptionId:e.id},function(){var e=n.state.recaptchaToken;n.loadLaunchData(e)})},n.handleHonorCodeAgreementComplete=function(){n.setState({honorCodeAcknowledged:!0})},n.handleHonorCodeAgreementIncomplete=function(){n.setState({honorCodeAcknowledged:!1})},n.handleResponsibilityChanged=function(e){var t=e.target.checked;n.setState({agreesToUseResponsibly:t})},n.handleLtiToolLaunch=function(){n.isRecaptchaEpicEnabled()||n.loadLaunchData(),n.getLtiEmbeddingData()&&n.setState({embeddedLtiToolIsVisible:!0})},n.handleRecaptchaPass=function(e){n.setState({recaptchaToken:e}),n.loadLaunchData(e)},n.getPrivacyMessage=function(){var e;switch(n.props.privacyLevel){case"anonymous":return V("PRIVACY_ANONYMOUS");case"share_user_id":return V("PRIVACY_SHARE_ID");case"share_user_name":return V("PRIVACY_SHARE_NAME");case"share_user_email":return V("PRIVACY_SHARE_EMAIL");default:return null}},n.getLtiEmbeddingData=function(){var e=n.props.courseId,t;return T.a.get("Flex","embeddedLtiCourses")[e]},n.getLaunchTarget=function(){return n.getLtiEmbeddingData()?"lti-app-iframe":"_blank"},n.isRecaptchaEpicEnabled=function(){var e=n.props.courseId;return Object(U.a)(e)},n.hasAcceptedAgreement=function(){var e=n.state,t=e.honorCodeAcknowledged,r=e.agreesToUseResponsibly;return t||r},n.loadLaunchData=function(e){var t=n.props.courseId;n.setState({launchData:null},function(){var r=n.props,a=r.computedItem,o=r.courseSlug,i=r.isGradedLti,c=n.state,s=c.launchRoleOptions,u=c.selectedLaunchRoleOptionId,l=a.id,d,p=(s.find(function(e){return e.id===u})||s[0]).launchRole,m=p||void 0,h;(i?Object(v.a)({itemId:l,courseId:t,courseSlug:o,launchRole:m,recaptchaToken:e}):Object(E.a)({itemId:l,courseId:t,courseSlug:o,launchRole:m,recaptchaToken:e})).then(function(e){n.setState({launchData:e})},function(){})})},n.renderDisclosures=function(){var e=n.props,t=e.isGradedLti,r=e.toolName;return c.a.createElement("div",null,c.a.createElement("div",{className:"tool-privacy-message"},c.a.createElement(g.b,{message:V(r?"DISCLOSURE":"DISCLOSURE_WITHOUT_TOOLNAME"),toolName:r})," ",n.getPrivacyMessage()),t?c.a.createElement("div",{className:"honor-code-agreement"},c.a.createElement(I.a,{onAgreementComplete:n.handleHonorCodeAgreementComplete,onAgreementIncomplete:n.handleHonorCodeAgreementIncomplete})):c.a.createElement(L.a,{onChange:n.handleResponsibilityChanged},m()("I agree to use this tool responsibly.")))},n.renderEmbeddedLtiTool=function(){var e=n.getLtiEmbeddingData(),t=n.state.embeddedLtiToolIsVisible;if(e){var r=n.getLaunchTarget();return c.a.createElement("iframe",{title:V("IFRAME_TITLE"),name:r||void 0,className:t?"full-width":"hidden",height:e.height,sandbox:e.sandbox},V("IFRAME_RENDER_FAIL"))}return null};var r=Object(D.a)(t.courseRole);return n.state={honorCodeAcknowledged:!1,agreesToUseResponsibly:!1,embeddedLtiToolIsVisible:!1,launchData:null,launchRoleOptions:r,selectedLaunchRoleOptionId:P.b.LEARNER,recaptchaToken:null},n}o()(LtiVerifyAndLaunch,e);var t=LtiVerifyAndLaunch.prototype;return t.componentDidMount=function componentDidMount(){this.isRecaptchaEpicEnabled()||this.loadLaunchData("token-not-required")},t.getPurchaseCoursePromptButton=function getPurchaseCoursePromptButton(){var e=this.props.courseId;return c.a.createElement("div",{className:"horizontal-box align-items-vertical-center"},c.a.createElement(y.a,{courseId:e}))},t.renderLaunchButton=function renderLaunchButton(){var e=this.props,t=e.computedItem,n=e.ltiVersion,r=this.state,a=r.launchData,o=r.launchRoleOptions,i=r.selectedLaunchRoleOptionId,s=this.getLaunchTarget();return this.hasAcceptedAgreement()?c.a.createElement(R.b,{rootClassName:"launch-button-container",justifyContent:"end",style:{alignItems:"flex-end"}},c.a.createElement(w.a,{className:"flex-1",options:o,selectedOptionId:i,onChange:this.handleLaunchRoleChange}),a&&s?c.a.createElement(b.a,{buttonLabel:V("BUTTON_OPEN_TOOL"),className:"lti-submit-button",computedItem:t,launchData:a,launchTarget:s,ltiVersion:n,onLaunch:this.handleLtiToolLaunch}):c.a.createElement("button",{className:"lti-submit-button primary",disabled:!0,type:"submit"},c.a.createElement(O.a,{name:"external-link"}),"  ",V("BUTTON_PREPARING"))):c.a.createElement(R.b,{justifyContent:"end"},c.a.createElement("button",{className:"lti-submit-button primary",disabled:!0,type:"submit"},c.a.createElement(O.a,{name:"external-link"}),"  ",V("BUTTON_OPEN_TOOL")))},t.render=function render(){var e=this.state.embeddedLtiToolIsVisible,t=this.getLtiEmbeddingData(),n=this.props.computedItem,r=this.isRecaptchaEpicEnabled();if(Object(C.m)(n))return this.getPurchaseCoursePromptButton();return c.a.createElement("div",{className:"rc-LtiVerifyAndLaunch"},r&&this.hasAcceptedAgreement()&&c.a.createElement(k.a,{recaptchaId:"recaptcha-lti-launch",onPass:this.handleRecaptchaPass}),!e&&this.renderDisclosures(),!e&&this.renderLaunchButton(),!r&&c.a.createElement(f.b,{isEnabled:this.hasAcceptedAgreement(),interval:N.a,onInterval:this.loadLaunchData}),r&&c.a.createElement(j.a,null),t&&this.renderEmbeddedLtiTool())},LtiVerifyAndLaunch}(c.a.Component),q=l()(_templateObject());e.a=Object(s.compose)(A()(["CourseStore"],function(e){var t;return{courseSlug:e.CourseStore.getCourseSlug()}}),Object(d.a)(q,{skip:function skip(){return!h.a.isAuthenticatedUser()},options:function options(e){var t=e.courseSlug;return{variables:{userId:"".concat(h.a.get().id),slug:t}}},props:function props(e){var t,n,r,a,o,i,c=(((e.data||{}).OpenCourseMembershipsV1Resource||{}).findByUserAndSlug||{}).elements,s=c&&c[0],u;return{courseRole:s&&s.courseRole}}}))(B)}}]);
//# sourceMappingURL=en.53.fbcde14429112fb4cd00.js.map