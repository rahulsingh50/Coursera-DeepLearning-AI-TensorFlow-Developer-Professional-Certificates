(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"/+fu":function(module,exports,e){var t=e("kKiu"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},"/Fji":function(module,e,t){"use strict";var n=t("VbXa"),a=t.n(n),r=t("q1tI"),i=t.n(r),o=t("EqTq"),s=t("m10x"),c=t("BxDD"),l=t("CsdX"),u=t("5Mbi"),m=t("+kEw"),d=t("Q9IO"),v=t("k52k"),p=t("ZJO1"),f=t("0/91"),g=t("g+zl"),b=t.n(g),E=t("CO3I"),h=t.n(E),O=18,y=Object(o.a)("Panel"),j=function isRenderPropsFunction(e){return"function"==typeof e},S=function(e){function Panel(t){var n;return(n=e.call(this,t)||this).toggleEdit=function(){var e;n.props.isEditable&&n.setState(function(e){var t;return{isEditing:!e.isEditing}})},n.togglePanel=function(){var e;n.props.isCollapsible&&n.setState(function(e){var t;return{isCollapsed:!e.isCollapsed}})},n.disableDoubleClick=function(e){var t;n.props.isCollapsible&&e.preventDefault()},n.state={isCollapsed:t.startCollapsed||!1,isEditing:!1},n}var t;return a()(Panel,e),Panel.prototype.render=function render(){var e=this.props,t=e.id,n=e.className,a=e.title,r=e.children,o=e.isCollapsible,g=void 0!==o&&o,E=e.collapsibleIconTitle,h=e.iconSize,O=void 0===h?18:h,S=e.isEditable,C=void 0!==S&&S,I=e.copyHandler,P=e.deleteHandler,L=e.subtitle,w=e.isHeadless,k=void 0!==w&&w,N=e.isBorderless,T=void 0!==N&&N,x=e.disableContentPadding,A=this.state,q=A.isCollapsed,D=A.isEditing,R=this.toggleEdit,z=q&&!D,M=z?i.a.createElement(m.a,{title:E,size:O}):i.a.createElement(u.a,{title:E,size:O}),W=D?i.a.createElement(d.a,{title:b()("Done Editing"),size:O}):i.a.createElement(v.a,{title:b()("Edit"),size:O}),V=!k&&(a||L||g||I||P||C);return i.a.createElement("div",{id:t,className:y(void 0,{isCollapsed:z,isBorderless:T},n)},V&&i.a.createElement("div",{className:y("header",{isCollapsed:z})},i.a.createElement(s.j,{rootClassName:y("titleContainer",{isCollapsible:g}),tag:"h3",onClick:this.togglePanel,onMouseDown:this.disableDoubleClick},a&&i.a.createElement("div",{className:y("title")},a),i.a.Children.map(L,function(e){return i.a.createElement("div",{className:y("subtitle")},e)}),g&&i.a.createElement(c.a,{rootClassName:y("button","collapse"),type:"icon",size:"zero",svgElement:M,disabled:D})),i.a.createElement("div",{className:y("buttons")},I&&i.a.createElement(c.a,{rootClassName:y("button","copy"),type:"icon",size:"zero",svgElement:i.a.createElement(f.a,{color:l.b.icon,size:18}),onClick:I,disabled:D}),P&&i.a.createElement(c.a,{rootClassName:y("button","delete"),type:"icon",size:"zero",svgElement:i.a.createElement(p.a,{color:l.b.icon,size:18}),onClick:P,disabled:D}),C&&i.a.createElement(c.a,{rootClassName:y("button","edit"),type:"icon",size:"zero",svgElement:W,onClick:R}))),i.a.createElement("div",{className:y("content",{isCollapsed:z,noPadding:!!x}),"aria-expanded":!z},j(r)?r({isEditing:D,toggleEdit:R}):r))},Panel}(i.a.Component);e.a=S},"0/91":function(module,e,t){"use strict";var n=t("q1tI"),a=t.n(n),r=t("MnCE"),i=t("oyNZ");function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var n=_objectWithoutPropertiesLoose(e,t),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){if(a=i[r],t.indexOf(a)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,a))continue;n[a]=e[a]}}return n}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++){if(r=a[i],t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var o=function SvgWindows(e){var t=e.title,a=void 0===t?"Windows":t,r=_objectWithoutProperties(e,["title"]);return n.createElement(i.a,_extends({title:a},r,{viewBox:"0 0 48 48"}),n.createElement("path",{d:"M10,0 L48,0 L48,38 L38,38 L38,48 L0,48 L0,10 L10,10 L10,0 Z M12,2 L12,10 L38,10 L38,36 L46,36 L46,2 L12,2 Z M2,46 L36,46 L36,12 L2,12 L2,46 Z"}))};(o=Object(r.pure)(o)).displayName="SvgWindows",e.a=o},"0mS+":function(module,exports){},"1ah5":function(module,e,t){"use strict";var n=t("q1tI"),a=t.n(n),r=t("oX1x"),i=t("Q/5i"),o=function QuizGradeDisclaimer(e){var t=e.courseSlug;if(t)return a.a.createElement(r.a,{courseSlug:t},function(e){var t=e.notifications;if(null==t?void 0:t.some(function(e){return"gradeDisclaimerMessage"===e.typeName}))return a.a.createElement(i.a,null);return null});return null};e.a=o},"2VB5":function(module,exports,e){},"2xnZ":function(module,exports,e){},"3KpJ":function(module,e,t){"use strict";t.d(e,"b",function(){return n}),t.d(e,"a",function(){return a});var n=function buildLearningObjectiveToItemIds(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={};return Object.keys(e).forEach(function(n){e[n].learningObjectives.forEach(function(e){t[e]?t[e].push(n):t[e]=[n]})}),t},a=function buildFilteredComputedItems(e,t,n){return e.filter(function(e){if(t&&t.includes(e.id)||n&&e.weekNumber>n)return!1;return!0})}},"4XvD":function(module,e,t){"use strict";var n=t("VkAN"),a=t.n(n),r=t("q1tI"),i=t.n(r),o=t("lTCR"),s=t.n(o),c=t("oJmH"),l=t.n(c),u=t("0mS+"),m=t.n(u);function _templateObject(){var e=a()(["\n  query LearnerLearningObjectivesProviderQuery($ids: String!) {\n    OnDemandLearningObjectivesV2 @naptime {\n      multiGet(ids: $ids) {\n        elements {\n          id\n          description\n        }\n      }\n    }\n  }\n"]);return _templateObject=function _templateObject(){return e},e}var d=s()(_templateObject()),v=function LearnerLearningObjectivesProvider(e){var t=e.learningObjectiveIds,n=e.children;return i.a.createElement(c.Query,{query:d,variables:{ids:(null==t?void 0:t.join(","))||""}},function(e){var a,r,i,o=e.loading,s=e.data,c=e.refetch,l=t&&(null==s?void 0:null===(a=s.OnDemandLearningObjectivesV2)||void 0===a?void 0:null===(r=a.multiGet)||void 0===r?void 0:null===(i=r.elements)||void 0===i?void 0:i.sort(function(e,n){return(null==t?void 0:t.indexOf(e.id))-(null==t?void 0:t.indexOf(n.id))}));return n({loading:o,learningObjectives:l,refetch:c})})};e.a=v},"84CT":function(module,exports,e){},"9wTT":function(module,exports,e){var t=e("Mhyk"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},"9zoJ":function(module,exports){exports.default={"ar":true,"de":true,"es":true,"fr":true,"ja":true,"ko":true,"pt":true,"ru":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}},CO3I:function(module,exports,e){var t=e("V4P3"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},EYHa:function(module,exports,e){var t=e("PW7B"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},Euzd:function(module,e,t){"use strict";var n=t("lSNA"),a=t.n(n),r=t("q1tI"),i=t.n(r),o=t("EqTq"),s=t("8cuT"),c=t.n(s),l=t("TdzE"),u=t("Faqi"),m=t("4XvD"),d=t("3KpJ");function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){a()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var v=Object(o.a)("LearningObjectiveWithItemsData"),p=function LearningObjectivesWithItemsData(e){var t=e.itemId,n=e.courseSlug,a=void 0===n?"":n,r=e.learningObjectiveIds,o=e.removeParentItem,s=e.removeFutureItems,c=e.buildComputedItem,l=e.children;return i.a.createElement("div",{className:v()},i.a.createElement(u.a,{slug:a},function(e){var n=e.courseMaterialsItems,a=e.itemToLearningObjectives,u=null==n?void 0:n.map(function(e){return e.id}),v=Object(d.b)(a);return u?i.a.createElement(m.a,{learningObjectiveIds:r},function(e){var n=e.learningObjectives,a=t?c(t):void 0,r=a&&o?[a.id]:void 0,i=a&&s?a.weekNumber:void 0,m=null==n?void 0:n.map(function(e){var t=v[e.id].sort(function(e,t){return u.indexOf(e)-u.indexOf(t)}).map(function(e){return c(e)}),n=Object(d.a)(t,r,i);return _objectSpread(_objectSpread({},e),{},{computedItems:n})});return l({learningObjectives:m})}):i.a.createElement("div",null)}))},f=c()(["CourseStore","ProgressStore","CourseScheduleStore","SessionStore","CourseViewGradeStore"],function(e){var t=e.CourseStore,n=e.ProgressStore,a=e.CourseScheduleStore,r=e.SessionStore,i=e.CourseViewGradeStore;return{buildComputedItem:function buildComputedItem(e){return Object(l.a)({itemMetadata:t.getMaterials().getItemMetadata(e),CourseStore:t,ProgressStore:n,CourseScheduleStore:a,SessionStore:r,CourseViewGradeStore:i})}}});e.a=f(p)},FkXZ:function(module,exports,e){var t=e("84CT"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},GLUr:function(module,e,t){"use strict";var n=t("q1tI"),a=t.n(n),r=t("EqTq"),i=t("m10x"),o=t("kvW3"),s=t("/Fji"),c=t("TpV6"),l=t("vrZb"),u=t.n(l),m=t("PdUD"),d=t.n(m),v=Object(r.a)("LearningObjectivesWithItemsList"),p=function LearningObjectivesWithItemsList(e){var t=e.learningObjectives;return a.a.createElement("div",{className:v()},null==t?void 0:t.map(function(e,t){var n=e.id,r=e.description,l=e.computedItems;return a.a.createElement("div",{key:"learning-objective-".concat(n),className:v("objective")},a.a.createElement(s.a,{key:n,title:a.a.createElement("div",null,a.a.createElement(i.f,null,r),a.a.createElement("div",{className:v("materials-count",void 0,["caption-text"])},a.a.createElement(o.b,{message:u()("{numItems, plural, =0 {Nothing} one {# material} other {# materials}} to review"),numItems:(null==l?void 0:l.length)||0}))),isCollapsible:!!(null==l?void 0:l.length),collapsibleIconTitle:l&&(null==l?void 0:l.length)>1?u()("Materials to review"):u()("Material to review"),startCollapsed:t>0||!(null==l?void 0:l.length)},null==l?void 0:l.map(function(e){return a.a.createElement("div",{key:"learning-objective-item-".concat(n,"-").concat(e.id),className:v("item")},a.a.createElement(c.a,{computedItem:e}))})))}))};e.a=p},I3nW:function(module,exports,e){var t=e("h7hs"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},J2iB:function(module,exports){function isNil(e){return null==e}module.exports=isNil},LHEl:function(module,e,t){"use strict";var n=t("VkAN"),a=t.n(n),r=t("q1tI"),i=t.n(r),o=t("lTCR"),s=t.n(o),c=t("oJmH"),l=t.n(c);function _templateObject(){var e=a()(["\n  query ExamSummariesQuery($id: String!) {\n    OnDemandExamSummariesV1 @naptime {\n      get(id: $id) {\n        elements {\n          id\n          lockingConfigurationSummary\n          bestEvaluation\n          lastEvaluation\n          lastSessionId\n          unsubmittedSessionId\n          nudge\n        }\n      }\n    }\n  }\n"]);return _templateObject=function _templateObject(){return e},e}var u=s()(_templateObject()),m=function ExamSummaries(e){var t=e.courseId,n=e.itemId,a=e.children;return i.a.createElement(c.Query,{query:u,variables:{id:"".concat(t,"~").concat(n)}},function(e){var t=e.loading,n=e.data,r=e.refetch;if(t)return a({loading:t});var i=n.OnDemandExamSummariesV1.get.elements[0],o=i.lastSessionId,s=i.lockingConfigurationSummary,c=i.unsubmittedSessionId,l=i.bestEvaluation,u=i.nudge;return a({loading:!1,lastSessionId:o,lockingConfigurationSummary:s,unsubmittedSessionId:c,bestEvaluation:l,nudge:u,refetch:r})})};e.a=m},Mhyk:function(module,exports,e){},MqGB:function(module,e,t){"use strict";t.d(e,"a",function(){return v}),t.d(e,"c",function(){return p});var n=t("J2iB"),a=t.n(n),r=t("q1tI"),i=t.n(r),o=t("EqTq"),s=t("CsdX"),c=t("LMF/"),l=t("qiXF"),u=t("tqsA"),m=t.n(u),d=Object(o.a)("CoverPageRow"),v={check:"check",warning:"warning"},p=function getStatusIconTypeForGradeRow(e,t){if(a()(e))return null;if(!e&&!t)return v.warning;return v.check},f=function CoverPageRow(e){var t=e.stepTitle,n=e.stepDetails,a=e.rightSideView,r=e.statusIconType,o=e.statusIconTitle;return i.a.createElement("div",{className:d(void 0,{rightSideViewOnly:!t})},r&&i.a.createElement("div",{className:d("status-icon")},r===v.check&&i.a.createElement(c.a,{size:24,color:s.b.success,title:o}),r===v.warning&&i.a.createElement(l.a,{size:24,color:s.b.error,title:o})),t&&i.a.createElement("div",{className:d("left-side-view")},i.a.createElement("div",{className:d("step-title")},t),i.a.createElement("div",{className:d("step-details")},n)),i.a.createElement("div",{className:d("right-side-view")},a))};e.b=f},NKt0:function(module,e,t){"use strict";var n=t("q1tI"),a=t.n(n),r=t("EqTq"),i=t("lEg3"),o=t("m10x"),s=t("tIcg"),c=t.n(s),l=Object(r.a)("CoverPageHeader"),u=function CoverPageHeader(e){var t=e.assignmentTypeName,n=e.item,r=(n=void 0===n?{}:n).timeCommitment,s=n.name,c=e.subHeader;return a.a.createElement("div",{className:l()},a.a.createElement(o.g,{tag:"div",rootClassName:l("metadata")},t,!!r&&a.a.createElement("span",null," • ",Object(i.b)(r))),a.a.createElement(o.c,{rootClassName:l("title")},s),c&&a.a.createElement("div",{className:l("sub-header")},c))};e.a=u},PW7B:function(module,exports,e){},PdUD:function(module,exports,e){var t=e("mKGs"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},"Q/5i":function(module,e,t){"use strict";var n=t("q1tI"),a=t.n(n),r=t("JOyW"),i=t("lS+i"),o=t.n(i),s=function GradeDisclaimerNotification(){var e=o()("These grades are provisional and may change. Final overall\n      grades will be published after the exam board has met.");return a.a.createElement("div",{className:"rc-GradeDisclaimerNotification"},a.a.createElement(r.a,{trackingName:"grade_disclaimer_notification",type:"info",message:e}))};e.a=s},S0QZ:function(module,e,t){"use strict";t.d(e,"a",function(){return a});var n=function clearCacheWithTypename(e,t){var n=new RegExp("^".concat(t.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&")));Object.keys(e.data.data).forEach(function(t){return t.match(n)&&e.data.delete(t)})},a=function clearCacheWithTypenames(e,t){t.forEach(function(t){return n(e,t)})}},TO9F:function(module,e,t){"use strict";var n=t("q1tI"),a=t.n(n),r=t("EqTq"),i=t("VMeS"),o=t("uNjD"),s=t.n(o),c=Object(r.a)("CoverPageContainer"),l=function CoverPageContainer(e){var t=e.children,n=e.className;return a.a.createElement("div",{className:c(void 0,void 0,n)},t||a.a.createElement(i.a,null))};e.a=l},TpV6:function(module,e,t){"use strict";var n=t("q1tI"),a=t.n(n),r=t("EqTq"),i=t("FHuh"),o=t("EYHa"),s=t.n(o),c=Object(r.a)("LearningObjectiveItem"),l=function LearningObjectiveItem(e){var t=e.computedItem;return a.a.createElement("div",{className:c()},a.a.createElement(i.a,{computedItem:t,trackingName:"learning_objective_review_link",openInNewWindow:!0,iconSize:40}))};e.a=l},USJv:function(module,e,t){"use strict";var n=t("q1tI"),a=t.n(n),r=t("MnCE"),i=t("oyNZ");function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var n=_objectWithoutPropertiesLoose(e,t),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){if(a=i[r],t.indexOf(a)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,a))continue;n[a]=e[a]}}return n}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++){if(r=a[i],t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var o=function SvgaChart(e){var t=e.title,a=void 0===t?"Chart":t,r=_objectWithoutProperties(e,["title"]);return n.createElement(i.a,_extends({title:a},r,{viewBox:"0 0 41 37"}),n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("path",{fill:"#F26C75",d:"M5 32h32V0H5z"}),n.createElement("path",{stroke:"#424242",strokeWidth:"2",d:"M8 28l9.263-12.572 10.105 8.98L40 6"}),n.createElement("path",{stroke:"#4D4D4D",strokeWidth:"2",d:"M1 0v36h40"})))};(o=Object(r.pure)(o)).displayName="SvgaChart",e.a=o},V4P3:function(module,exports,e){},Vh8P:function(module,e,t){"use strict";var n=t("UB5X"),a=t.n(n),r=t("q1tI"),i=t.n(r),o=t("EqTq"),s=t("AWZ4"),c=t("m10x"),l=t("CsdX"),u=t("CfbJ"),m=t("d3Ej"),d=t.n(m),v=t("vRSd"),p=t("kvW3"),f=t("lEg3"),g=t("RSmF"),b=t("9wTT"),E=t.n(b),h=Object(o.a)("CoverPageRowRightSideActions"),O=function renderActionButton(e,t){return i.a.createElement(s.b,{size:"sm",type:"primary",label:e,onClick:t,htmlAttributes:{"aria-label":d()("#{action} quiz",{action:e})}})},y=function CoverPageRowRightSideActions(e){var t=e.startAttempt,n=e.restartAttempt,r=e.resumeAttempt,o=e.retryAttempt,m=e.submissionTime,b=e.showTimer,E=e.timeLimit,y=e.timerId,j=e.attemptsLeft,S=e.secondsLeftInLatestAttempt,C=e.attemptLimitTimeLeft,I=null,P=a()(C)||"number"==typeof j&&j<=0;return t?I=O(d()("Start"),t):n?I=O(d()("Restart"),n):r?I=O(d()("Resume"),r):o&&(I=i.a.createElement(s.b,{size:"sm",type:"link",label:d()("Try again"),onClick:o,disabled:P})),i.a.createElement("div",{className:h()},i.a.createElement("div",{className:h("action-button",{linkStyle:!!o})},I),P&&a()(C)&&i.a.createElement("div",{className:h("retry-info")},i.a.createElement(c.a,null,i.a.createElement(p.b,{message:d()("Retake the quiz in {attemptLimitTimeLeft}"),attemptLimitTimeLeft:i.a.createElement("strong",null,Object(f.b)(C))}))),m&&i.a.createElement("div",{className:h("submission-time")},i.a.createElement(c.a,null,i.a.createElement(c.g,{tag:"span"},d()("Submitted"))," ",i.a.createElement("span",{className:h("submission-time-detail")},v.a.getFormattedDeadline(m)))),a()(E)&&t&&i.a.createElement("div",{className:h("time-limit")},i.a.createElement(c.a,null,i.a.createElement(u.a,{size:20,color:l.b.primary}),i.a.createElement("span",{className:h("time-limit-text")},i.a.createElement(p.b,{message:d()("You will have {timeLimit} to finish"),timeLimit:Object(f.b)(E,!0)})))),b&&a()(S)&&i.a.createElement(g.a,{timerId:y,remainingTimeInMs:1e3*S,displayRemaining:!0}))};e.a=y},XSZB:function(module,exports,e){var t=e("jd14"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},aumC:function(module,exports,e){var t=e("l2M7"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},eXDi:function(module,e,t){"use strict";var n=t("UB5X"),a=t.n(n),r=t("q1tI"),i=t.n(r),o=t("EqTq"),s=t("hbUA"),c=t("kvW3"),l=t("AWZ4"),u=t("m10x"),m=t("xBnS"),d=t("bOpO"),v=t("d3Ej"),p=t.n(v),f=t("I3nW"),g=t.n(f),b=Object(o.a)("CoverPageRowRightSideGrade"),E=function CoverPageRowRightSideGrade(e){var t=e.itemGrade,n=e.computedScore,r=e.maxScore,o=e.viewFeedback,s=e.isViewFeedbackButtonLinkStyle,d=e.isCumulativeGraded,v=e.reviewsExpected,f=void 0===v?0:v,g=e.reviewsReceived,E=void 0===g?0:g,O=e.showKeepHighScoreMsg,y=void 0===O||O,j=t||{},S=j.grade,C=j.isPassed;return i.a.createElement("div",{className:b()},i.a.createElement("div",{className:b("grade-info")},i.a.createElement("div",{className:b("grade-label")},p()("Grade")),i.a.createElement("div",{className:b("grade-percent",{passed:a()(S)&&!d&&!!C,failed:a()(S)&&!d&&!C})},i.a.createElement(h,{itemGrade:t,computedScore:n,maxScore:r,reviewsExpected:f,reviewsReceived:E}))),a()(S)&&o&&i.a.createElement("div",{className:b("view-feedback-section")},i.a.createElement("div",{className:b("view-feedback-button",{linkStyle:s})},i.a.createElement(l.b,{size:s?"zero":"sm",type:s?"link":"primary",label:p()("View Feedback"),onClick:o})),i.a.createElement("div",{className:b("view-feedback-info")},f>0&&E>0&&i.a.createElement(m.a,{label:p()("Feedback"),details:i.a.createElement(c.b,{message:p()("{reviewsReceived, number} of {reviewsExpected, number} received"),reviewsExpected:f,reviewsReceived:E})}),y&&i.a.createElement(u.a,null,p()("We keep your highest score")))))},h=function CoverPageRowGradeDetail(e){var t=e.itemGrade,n=e.computedScore,r=e.maxScore,o=e.reviewsExpected,l=void 0===o?0:o,m=e.reviewsReceived,v=void 0===m?0:m,f,g=(t||{}).grade;if(a()(g))return i.a.createElement("div",{className:b("grade-percent-container")},Object(s.b)(g),i.a.createElement(d.a,{itemGrade:t,computedScore:n,maxScore:r}));if(l>0&&v>0)return i.a.createElement(u.a,null,i.a.createElement(c.b,{message:p()("In progress, {reviewsReceived, number} of {reviewsExpected, number} received"),reviewsExpected:l,reviewsReceived:v}));return i.a.createElement(u.a,{rootClassName:b("no-grade")},"—")};e.a=E},fHLu:function(module,e,t){"use strict";t.d(e,"a",function(){return r});var n=t("S0QZ"),a=function clearQuizApolloCache(e){Object(n.a)(e.cache,["RestQuizSessionMetadataElement","RestQuizQuestionDataElement","LocalTimerState","LocalChangedResponse","LocalStepState","$ROOT_QUERY.ChangedResponse"])},r=function clearPracticeQuizApolloCache(e){Object(n.a)(e.cache,["LocalChangedResponse","LocalStepState"])};e.b=a},"g+/f":function(module,exports,e){},"g+zl":function(module,exports,e){var t=e("9zoJ"),n=t.default?t.default:{},a,r=(0,e("HdzH").default)(n);r.getLocale=function(){return"en"},module.exports=r},h7hs:function(module,exports,e){},jd14:function(module,exports,e){},kKiu:function(module,exports,e){},kYu0:function(module,e,t){"use strict";var n=t("VkAN"),a=t.n(n),r=t("q1tI"),i=t.n(r),o=t("lTCR"),s=t.n(o),c=t("oJmH"),l=t.n(c),u=t("sQ/U");function _templateObject(){var e=a()(['\n  query ProctoredAssessmentActionsQuery(\n    $submittedId: String!\n    $standardProctorConfigurationId: String!\n    $body: String!\n  ) {\n    ProctoredAssessmentActionsV1(\n      submittedId: $submittedId\n      standardProctorConfigurationId: $standardProctorConfigurationId\n      body: $body\n    )\n      @rest(\n        type: "ProctoredAssessmentActionsV1Data"\n        path: "proctoredAssessmentActions.v1/?action=getProctoredAssessmentSummary&submitterId={args.submittedId}&standardProctorConfigurationId={args.standardProctorConfigurationId}"\n        method: "POST"\n        bodyKey: "body"\n      ) {\n      completedAttempts\n      latestAttempt\n      nextAttemptConfig\n      remainingAttempts\n      secondsLeftInLatestAttempt\n      serverTimestamp\n    }\n  }\n']);return _templateObject=function _templateObject(){return e},e}var m=s()(_templateObject()),d=function ProctoredAssessmentActions(e){var t=e.standardProctorConfigurationId,n=e.fetchPolicy,a=void 0===n?"network-only":n,r=e.children;return i.a.createElement(c.Query,{query:m,variables:{submittedId:"user~".concat(u.a.get().id),standardProctorConfigurationId:t,body:{}},skip:!t,fetchPolicy:a},function(e){var t=e.loading,n=e.data,a=e.refetch,i=e.client;if(t)return r({loading:t,refetch:a,client:i});var o=(n||{}).ProctoredAssessmentActionsV1||{},s=o.secondsLeftInLatestAttempt,c=o.nextAttemptConfig,l=o.latestAttempt,u=o.remainingAttempts,m=o.completedAttempts,d=((l||{}).hasUnsubmittedWork||(l||{}).canContinueToWork)&&"number"==typeof((c||{}).timeLimit||{}).duration;return r({loading:!1,refetch:a,secondsLeftInLatestAttempt:s,remainingAttempts:u,completedAttempts:m,timeLimit:((c||{}).timeLimit||{}).duration,shouldShowTimer:d,client:i})})};e.a=d},l2M7:function(module,exports,e){},lo9b:function(module,e,t){"use strict";var n=t("q1tI"),a=t.n(n),r=t("EqTq"),i=t("m10x"),o=t("Euzd"),s=t("GLUr"),c=t("vrZb"),l=t.n(c),u=t("/+fu"),m=t.n(u),d=Object(r.a)("LearningObjectivesContent"),v=function LearningObjectivesContent(e){var t=e.itemId,n=e.courseSlug,r=void 0===n?"":n,c=e.learningObjectiveIds;return a.a.createElement("div",{className:d()},a.a.createElement(i.c,null,l()("Review Learning Objectives")),a.a.createElement("p",{className:d("instructions")},l()("Review concepts related to your current learning objectives")),a.a.createElement("div",{className:d("learning-objectives")},a.a.createElement(o.a,{itemId:t,courseSlug:r,learningObjectiveIds:c,removeParentItem:!0,removeFutureItems:!0},function(e){var t=e.learningObjectives;return a.a.createElement(s.a,{learningObjectives:t})})))};e.a=v},mKGs:function(module,exports,e){},nlef:function(module,e,t){"use strict";var n=t("UB5X"),a=t.n(n),r=t("q1tI"),i=t.n(r),o=t("EqTq"),s=t("lEg3"),c=t("WLgL"),l=t("kvW3"),u=t("xBnS"),m=t("d3Ej"),d=t.n(m),v=t("aumC"),p=t.n(v),f=Object(o.a)("CoverPageDetails"),g=function CoverPageDetails(e){var t=e.deadline,n=e.attemptsCompleted,r=void 0===n?0:n,o=e.attemptsLeft,m=e.attemptsRateCount,v=e.attemptsRateInterval,p=e.passingFraction,g=e.isCumulativeGraded,b=a()(o)?o+r:null;return i.a.createElement("div",{className:f()},t&&i.a.createElement(u.a,{label:d()("Due Date"),details:Object(c.s)(t,c.f)}),a()(o)&&i.a.createElement(u.a,{label:d()("Attempts"),details:i.a.createElement(l.b,{message:o===b?d()("{attemptsMax, number} left"):d()("{attemptsLeft, number}/{attemptsMax, number} left"),attemptsLeft:Math.max(o,0),attemptsMax:b})}),a()(m)&&a()(v)&&i.a.createElement(u.a,{label:d()("Attempts"),details:i.a.createElement(l.b,{message:d()("{count, number} every {duration}"),count:m,duration:Object(s.b)(v,!0)})}),a()(p)&&!g&&i.a.createElement(u.a,{label:d()("To Pass"),details:i.a.createElement(l.b,{message:d()("{percent, number, percent} or higher"),percent:Math.ceil(100*p)/100})}))};e.a=g},oX1x:function(module,e,t){"use strict";var n=t("VkAN"),a=t.n(n),r=t("q1tI"),i=t.n(r),o=t("sQ/U"),s=t("PDuk"),c=t.n(s),l=t("lTCR"),u=t.n(l),m=t("oJmH"),d=t.n(m),v=t("BH3y");function _templateObject(){var e=a()(["\n  query CourseMessagesQuery($id: String!) {\n    CourseMessagesV1 @naptime {\n      findCourseMessages(id: $id) {\n        elements {\n          id\n          messages\n        }\n      }\n    }\n  }\n"]);return _templateObject=function _templateObject(){return e},e}var p=u()(_templateObject()),f=function CourseMessagesProvider(e){var t=e.courseSlug,n=e.children,a=o.a.get().id,r=Object(s.tupleToStringKey)([Object(s.tupleToStringKey)([a,t]),v.a.COURSE_GRADES,-1]);return i.a.createElement(m.Query,{query:p,variables:{id:r}},function(e){var t,a,r,i=e.loading,o=e.data,s=e.refetch,c=null==o?void 0:null===(t=o.CourseMessagesV1)||void 0===t?void 0:null===(a=t.findCourseMessages)||void 0===a?void 0:null===(r=a.elements)||void 0===r?void 0:r[0].messages;return n({loading:i,notifications:c,refetch:s})})};e.a=f},pRpZ:function(module,e,t){"use strict";var n=t("q1tI"),a=t.n(n),r=t("EqTq"),i=t("w+/x"),o=t("USJv"),s=t("m10x"),c=t("kvW3"),l=t("d3Ej"),u=t.n(l),m=t("FkXZ"),d=t.n(m),v=Object(r.a)("CoverPageNudges"),p=function LikelihoodNudge(e){var t=e.value,n=Math.ceil(t/100);return a.a.createElement("div",{className:v()},a.a.createElement("div",{className:v("svg-icon")},a.a.createElement(o.a,{size:48})),a.a.createElement("div",{className:v("message")},a.a.createElement(s.i,null,u()("Get closer to your goal")),a.a.createElement(c.b,{message:u()("You are {value} more likely to complete the course if you finish the assignment"),value:a.a.createElement("strong",null,n>1?n+u()(" times"):t+"%"),tagName:"p",rootClassName:v("info")})))},f=function SocialNudge(e){var t=e.value;return a.a.createElement("div",{className:v()},a.a.createElement("div",{className:v("svg-icon")},a.a.createElement(i.a,{size:48}),","),a.a.createElement("div",{className:v("message")},a.a.createElement(s.i,null,u()("People are making progress")),a.a.createElement(c.b,{message:u()("{numOfLearners} learners have recently completed this assignment"),numOfLearners:a.a.createElement("strong",null,t),tagName:"p",rootClassName:v("info")})))},g=function CoverPageNudges(e){var t=e.nudge,n=t.nudgeType,r=t.nudgeNumber;switch(n){case"social":return a.a.createElement(f,{value:r});case"likelihood":return a.a.createElement(p,{value:r});default:return null}};e.a=g},sTBZ:function(module,exports,e){var t=e("g+/f"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},tIcg:function(module,exports,e){var t=e("2xnZ"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},tgnx:function(module,e,t){"use strict";var n=t("VbXa"),a=t.n(n),r=t("q1tI"),i=t.n(r),o=t("EqTq"),s=t("AWZ4"),c=t("22Sa"),l=t("oe9u"),u=t("lo9b"),m=t("vrZb"),d=t.n(m),v=Object(o.a)("LearningObjectivesButton"),p=function(e){function LearningObjectivesButton(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={expanded:!1},t.toggleTunnelVision=function(){return t.setState(function(e){return{expanded:!e.expanded}})},t}var t;return a()(LearningObjectivesButton,e),LearningObjectivesButton.prototype.render=function render(){var e=this.props,t=e.itemId,n=e.courseSlug,a=e.learningObjectiveIds,r=this.state.expanded;if(!(null==a?void 0:a.length))return null;return i.a.createElement("div",{className:v()},i.a.createElement(s.b,{type:"link",size:"zero",onClick:this.toggleTunnelVision},d()("Review Learning Objectives")),r&&i.a.createElement(c.a,{onClose:this.toggleTunnelVision,headerLeft:i.a.createElement(l.b,{headerText:d()("Review Learning Objectives"),itemTypeText:d()("Review materials")}),headerRight:i.a.createElement("div",null)},i.a.createElement(u.a,{itemId:t,courseSlug:n,learningObjectiveIds:a})))},LearningObjectivesButton}(i.a.Component);e.a=p},tqsA:function(module,exports,e){var t=e("vCDJ"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},uNjD:function(module,exports,e){var t=e("2VB5"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},vCDJ:function(module,exports,e){},"w+/x":function(module,e,t){"use strict";var n=t("q1tI"),a=t.n(n),r=t("MnCE"),i=t("oyNZ");function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var n=_objectWithoutPropertiesLoose(e,t),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){if(a=i[r],t.indexOf(a)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,a))continue;n[a]=e[a]}}return n}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++){if(r=a[i],t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var o=function SvgaPen(e){var t=e.title,a=void 0===t?"Pen":t,r=_objectWithoutProperties(e,["title"]);return n.createElement(i.a,_extends({title:a},r,{viewBox:"0 0 36 44"}),n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("path",{d:"M36 25.855C36 35.845 20.836 44 10.895 44S0 35.846 0 25.855C0 15.865 13.185 8 23.127 8 33.067 8 36 15.864 36 25.855",fill:"#F3C800"}),n.createElement("path",{stroke:"#4D4D4D",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",d:"M21.907 4.781l6.751 12.248-10.823 17.146L7.253 17.181l6.999-12.452M8.428 4.081h19.359V1H8.427zM17.954 33.074V21.186"}),n.createElement("path",{d:"M15.23 18.272a2.723 2.723 0 1 1 5.447 0 2.723 2.723 0 0 1-5.446 0z",stroke:"#4D4D4D",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})))};(o=Object(r.pure)(o)).displayName="SvgaPen",e.a=o},wrIk:function(module,e,t){"use strict";t.r(e),t.d(e,"QuizCoverPage",function(){return M});var n=t("lSNA"),a=t.n(n),r=t("VbXa"),i=t.n(r),o=t("q1tI"),s=t.n(o),c=t("oJmH"),l=t.n(c),u=t("sBWo"),m=t("fHLu"),d=t("NKt0"),v=t("tgnx"),p=t("pRpZ"),f=t("TO9F"),g=t("scbn"),b=t("qJwm"),E=t("+LJP"),h=t("MqGB"),O=t("nlef"),y=t("Vh8P"),j=t("eXDi"),S=t("1ah5"),C=t("zaiP"),I=t("LHEl"),P=t("kYu0"),L=t("VtNW"),w=t.n(L),k=t("VMeS"),N=t("8ec0"),T=t("xXQ2"),x=t("KvdX"),A=t("TOZ3"),q=t("EqTq"),D=t("XSZB"),R=t.n(D);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){a()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var z=Object(q.a)("QuizCoverPage"),M=function(e){function QuizCoverPage(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).getRestartAttemptFunction=function(e,n,a){return function(){if(n&&a){if(a.isLastAttemptBeforeLock||1===a.attemptsLeft)return void n({type:x.a.lastAttemptModal,props:_objectSpread(_objectSpread({},a),{},{onPrimaryButtonClick:t.getRestartAttemptFunction(e)})});if("number"==typeof a.timeLimit)return void n({type:x.a.timedAttemptStart,props:_objectSpread(_objectSpread({},a),{},{onPrimaryButtonClick:t.getRestartAttemptFunction(e)})})}var r=t.props.openAttemptPage;Object(m.b)(e),r()}},t}var t;return i()(QuizCoverPage,e),QuizCoverPage.prototype.render=function render(){var e=this,t=this.props,n=t.children,a=t.openSubmittedAttemptPage;return s.a.createElement(C.a,null,function(t){var r=t.item;if(!r||!r.contentSummary)return s.a.createElement(k.a,null);return s.a.createElement(I.a,{courseId:r.courseId,itemId:r.id},function(t){var i=t.loading,o=t.lastSessionId,l=t.lockingConfigurationSummary,u=t.unsubmittedSessionId,E=t.bestEvaluation,C=t.nudge,I=t.refetch;if(!r||!r.contentSummary||i)return s.a.createElement(k.a,null);if("exam"===r.contentSummary.typeName){var L=r.contentSummary.definition,q=r.isCumulativeGraded;return s.a.createElement(f.a,null,s.a.createElement(A.b,{justifyContent:"between",rootClassName:z("header-container")},s.a.createElement(d.a,{assignmentTypeName:w()("Quiz"),item:r,subHeader:s.a.createElement(v.a,{courseId:null==r?void 0:r.courseId,itemId:null==r?void 0:r.id,courseSlug:null==r?void 0:r.courseSlug,learningObjectiveIds:null==r?void 0:r.learningObjectiveIds})}),C&&s.a.createElement(p.a,{nudge:C})),s.a.createElement("div",{className:z("notifications")},s.a.createElement(S.a,{courseSlug:null==r?void 0:r.courseSlug})),s.a.createElement(P.a,{standardProctorConfigurationId:L.standardProctorConfigurationId},function(t){var n=t.timeLimit,a=t.secondsLeftInLatestAttempt,i=t.remainingAttempts,c=t.completedAttempts,m=t.client;return s.a.createElement(h.b,{stepTitle:w()("Submit your assignment"),stepDetails:s.a.createElement(O.a,{deadline:r.deadline,attemptsRateCount:(l||{}).allowedSubmissionsPerInterval,attemptsRateInterval:(l||{}).allowedSubmissionsInterval,attemptsLeft:i,attemptsCompleted:c}),rightSideView:s.a.createElement(x.b,null,function(t){var c=t.showModal,d={timeLimit:n,attemptsLeft:i,lockedTimeLeft:Object(T.b)(l),isLastAttemptBeforeLock:Object(T.c)(l),hasAttemptLimit:!!l&&l.allowedSubmissionsPerInterval>0};return s.a.createElement(y.a,{startAttempt:o||u?void 0:e.getRestartAttemptFunction(m,c,d),resumeAttempt:u?e.getRestartAttemptFunction(m):void 0,timeLimit:n,showTimer:!!u,timerId:Object(N.a)(r.id),secondsLeftInLatestAttempt:a,retryAttempt:e.getRestartAttemptFunction(m,c,d),attemptLimitTimeLeft:Object(T.a)(l),attemptsLeft:i})}),statusIconType:o?h.a.check:void 0})}),s.a.createElement(h.b,{stepTitle:w()("Receive grade"),stepDetails:s.a.createElement(O.a,{passingFraction:L.passingFraction,isCumulativeGraded:q}),rightSideView:s.a.createElement(c.ApolloConsumer,null,function(e){return s.a.createElement(j.a,{itemGrade:r.itemGrade,computedScore:(E||{}).score,maxScore:(E||{}).maxScore,isCumulativeGraded:q,viewFeedback:o?function(){Object(m.b)(e),a()}:void 0,isViewFeedbackButtonLinkStyle:!!u})}),statusIconType:Object(h.c)((r.itemGrade||{}).isPassed,q)}),s.a.createElement(h.b,{rightSideView:s.a.createElement(g.a,{computedItem:r,itemFeedbackType:b.n.Quiz})}),n&&I&&s.a.cloneElement(n,{refetchCoverPageData:function refetchCoverPageData(){return I().then(function(){return r.refetch()})}}))}return null})})},QuizCoverPage}(s.a.Component),W=Object(E.a)(function(e){return{openAttemptPage:function openAttemptPage(){e.push({name:"quiz-attempt",params:e.params})},openSubmittedAttemptPage:function openSubmittedAttemptPage(){e.push({name:"quiz-view-attempt",params:e.params})}}})(M);e.default=Object(u.a)(W)},xBnS:function(module,e,t){"use strict";var n=t("q1tI"),a=t.n(n),r=t("EqTq"),i=t("m10x"),o=t("sTBZ"),s=t.n(o),c=Object(r.a)("CoverPagePhaseDetail"),l=function CoverPagePhaseDetail(e){var t=e.label,n=e.details;return a.a.createElement("div",{className:c()},a.a.createElement(i.a,null,a.a.createElement(i.g,{rootClassName:c("label"),tag:"span"},t),a.a.createElement("span",{className:c("content")},n)))};e.a=l}}]);
//# sourceMappingURL=en.49.0ce87fc0b1643115cc97.js.map