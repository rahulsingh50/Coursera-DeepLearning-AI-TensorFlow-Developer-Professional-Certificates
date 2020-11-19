(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{"+m0m":function(module,e,n){"use strict";var t=n("xxrO"),r=n("TV8g");e.a=function(e,n){var a=Object(r.a)(e).then(function(e){return new t.a(e.elements)});return a.done(),a}},"2dZ3":function(module,e,n){"use strict";n.d(e,"b",function(){return u});var t=n("M6Ur"),r={isLaunched:function isLaunched(e){return!!e.launchedAt&&e.launchedAt<=Date.now()},isPreEnrollmentEnabled:function isPreEnrollmentEnabled(e){return!this.isLaunched(e)&&"preEnrollmentEnabledAt"in e},isSessionsModeEnabled:function isSessionsModeEnabled(e){return void 0!==e.sessionsEnabledAt&&e.sessionsEnabledAt<=Date.now()},isVerificationEnabled:function isVerificationEnabled(e){return!!e.verificationEnabledAt&&e.verificationEnabledAt<=Date.now()},isPrivate:function isPrivate(e){return Object(t.a)(e)},isFullC4CPartner:function isFullC4CPartner(e){var n=e.isC4CPartner,t=e.isPrivateAuthoringPartner;return n&&!t}};e.a=r;var a=r.isLaunched,o=r.isPreEnrollmentEnabled,i=r.isSessionsModeEnabled,s=r.isVerificationEnabled,u=r.isPrivate,c=r.isFullC4CPartner},"2egT":function(module,e,n){"use strict";n.d(e,"c",function(){return getRelativeUrl}),n.d(e,"e",function(){return getWelcomeUrl}),n.d(e,"d",function(){return getWeekUrl}),n.d(e,"b",function(){return getReferenceUrl}),n.d(e,"a",function(){return canAccessCourse});var t=n("sQ/U");function getRelativeUrl(e,n){return"/learn/".concat(e,"/").concat(n)}function getWelcomeUrl(e){return getRelativeUrl(e,"home/welcome")}function getGradesUrl(e){return getRelativeUrl(e,"home/assignments")}function getNotesUrl(e){return getRelativeUrl(e,"home/notes")}function getWeekUrl(e,n){return getRelativeUrl(e,"home/week/".concat(n))}function getReferenceUrl(e,n){return getRelativeUrl(e,"resources/".concat(n))}function canAccessCourse(e,n){var r=["BROWSER","NOT_ENROLLED","PRE_ENROLLED_LEARNER"],a=!!e[0]&&e[0].courseRole,o=!!n,i=t.a.isSuperuser()||a&&!r.includes(a);return o&&i}},CMO8:function(module,e,n){"use strict";var t=n("wiyT"),r=n.n(t),a=n("DnuM"),o=n("sQ/U"),i=n("2dZ3"),s=n("2FMX"),u=n("+m0m"),c=Object(a.a)("/api/reports.v1",{type:"rest"}),l="teachVisitedAt",d=10080,f={getBannerData:function getBannerData(){var e=this;return this.getTeachingCourse().spread(function(n,t){return[n,t,e.getLearnerCounts(n,t)]})},getVisitedTimestamp:function getVisitedTimestamp(){return localStorage.teachVisitedAt},setVisitedTimestamp:function setVisitedTimestamp(){localStorage.teachVisitedAt=Date.now()},shouldShow:function shouldShow(){var e=this.getVisitedTimestamp();if(e){var n=new Date(parseInt(e)),t=new Date(Date.now()),r,a,o;return 60*t.getHours()+t.getMinutes()-(60*n.getHours()+n.getMinutes())>10080}return!0},getTeachingCourse:function getTeachingCourse(){var e=o.a.get().id;if(!e)return r.a.reject();return Object(u.a)(e).then(function(e){var n=e.find(function(e){return e.hasTeachingRole()});if(n&&"UNIVERSITY_ADMIN"!==n.get("courseRole")){var t=n.get("courseId");return[n,s.a.fromId(t)]}return r.a.reject()}).spread(function(e,n){return i.a.isLaunched(n)?[e,n]:r.a.reject()})},getLearnerCounts:function getLearnerCounts(e,n){var t=this;return r()(c.get("Course~".concat(n.id,"~activity_learner_counts"))).then(function(a){return t.validateLearnerCountsResponse(a)?a.elements[0].body:r.a.reject({membership:e,course:n})})},validateLearnerCountsResponse:function validateLearnerCountsResponse(e){return e.elements&&e.elements[0]&&e.elements[0].body&&e.elements[0].body.latest&&e.elements[0].body.latest.starter_ever_count&&e.elements[0].body.latest.active_learner_past_1w_count&&e.elements[0].body.latest.visitor_ever_count&&e.elements[0].body["1w_ago"]&&e.elements[0].body["1w_ago"].starter_ever_count},getWeeklyNewLearnerCount:function getWeeklyNewLearnerCount(e){return e.latest.starter_ever_count-e["1w_ago"].starter_ever_count},getWeeklyActiveLearnerCount:function getWeeklyActiveLearnerCount(e){return e.latest.active_learner_past_1w_count},getTotalLearnerCount:function getTotalLearnerCount(e){return e.latest.visitor_ever_count}};e.a=f;var h=f.getBannerData,b=f.getVisitedTimestamp,p=f.setVisitedTimestamp,v=f.shouldShow,g=f.getTeachingCourse,m=f.getLearnerCounts,C=f.validateLearnerCountsResponse,E=f.getWeeklyNewLearnerCount,y=f.getWeeklyActiveLearnerCount,I=f.getTotalLearnerCount},DliG:function(module,e,n){"use strict";var t=n("VbXa"),r=n.n(t),a=n("17x9"),o=n.n(a),i=n("q1tI"),s=n.n(i),u=n("CMO8"),c=n("kvW3"),l=function(e){function TotalLearnerBanner(){return e.apply(this,arguments)||this}var n;return r()(TotalLearnerBanner,e),TotalLearnerBanner.prototype.render=function render(){var e=this.props.course,n=e.name,t="/teach/".concat(e.slug),r=u.a.getTotalLearnerCount(this.props.learnerCounts);return s.a.createElement("div",{className:"rc-TotalLearnerBanner"},"A total of"," ",s.a.createElement("a",{href:t},s.a.createElement("strong",{className:"c-teach-banner-learner-count"},s.a.createElement(c.c,{value:r})," learners"))," ","are enrolled in ",s.a.createElement("span",{className:"c-teach-banner-course-name"},n),". View more on the"," ",s.a.createElement("a",{href:t},s.a.createElement("strong",null,"Course Dashboard.")))},TotalLearnerBanner}(s.a.Component);l.propTypes={course:o.a.object.isRequired,learnerCounts:o.a.object.isRequired},e.a=l},EAIP:function(module,exports,e){var n=e("xvkB"),t;"string"==typeof n&&(n=[[module.i,n,""]]);var r={transform:void 0},a=e("aET+")(n,r);n.locals&&(module.exports=n.locals)},FyPc:function(module,exports,e){var n=e("dunj"),t=e("V9xz"),r=e("ut/Y");function maxBy(e,a){return e&&e.length?n(e,r(a,2),t):void 0}module.exports=maxBy},M6Ur:function(module,e,n){"use strict";n.d(e,"a",function(){return N});var t=n("lSNA"),r=n.n(t),a=n("FyPc"),o=n.n(a),i=n("dMi0"),s=n.n(i),u=n("xHmP"),c=n("2egT"),l=n("jQVW"),d=n("ibP9"),f=n("qXB5"),h=n("2aIb"),b=n.n(h);function ownKeys(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ownKeys(Object(t),!0).forEach(function(n){r()(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var p=function openNewWindowWithCourseSlug(e){return window.open(Object(c.e)(e),"_blank")},v=function viewContextAsLearner(e,n){var t=n.courseContext,r=n.branch,a=n.courseSlug,o=n.courseId,i=n.skipReloadWindow,c=void 0!==i&&i,f=n.onCompleteChangeUserEnrollment,h=void 0===f?function(){}:f,b=function onComplete(){h(),p(a)},v={courseId:o,selectDefaultSessionForBranch:!0,branch:r,skipReloadWindow:c,userCanSwitchGroups:!0};if(c?v.onCompleteChangeUserEnrollment=b:v.newWindow=p(a),t.typeName===l.a.SESSION_GROUP)v=_objectSpread(_objectSpread({},v),{},{sessionId:t.definition.sessionId,groupId:t.definition.groupId,selectDefaultSessionForBranch:!1});else if(t.typeName===l.a.PUBLIC_BRANCH&&(r.branchStatus===d.b.NEW||r.branchStatus===d.b.UPCOMING)){var g=s()(r.associatedSessions,function(e){return e.isPreview})||null;v=_objectSpread(_objectSpread({},v),{},{selectDefaultSessionForBranch:!g,sessionId:g})}e.executeAction(u.a,v)},g=function getContextByContextId(e,n){return e.find(function(e){var t=e.definition;return n.startsWith("group~")?t.groupId===n.split("group~")[1]:t.authoringCourseBranchId===n})},m=function hasCreatingBranch(e){return!!e.find(function(e){var n;return(null==e?void 0:null===(n=e.definition)||void 0===n?void 0:n.status)===f.b.CREATING&&e.typeName!==l.a.SESSION_GROUP_CREATION_JOB})},C=function hasCreatingContext(e){return!!e.find(function(e){var n;return(null===(n=e.definition)||void 0===n?void 0:n.status)===f.b.CREATING})},E=function getCreatedContexts(e){return e.filter(function(e){return e.typeName!==l.a.SESSION_GROUP_CREATION_JOB&&f.a[e.definition.status]!==f.b.CREATING})},y=function getLatestSelectableBranchId(e){var n;if(1===e.length)return e[0].definition.authoringCourseBranchId;var t=function isNotArchived(e){return![f.b.ARCHIVED,f.b.ENDED].includes(e.definition.status)},r=function isAlreadyCreated(e){return e.definition.status!==f.b.CREATING},a=e.filter(function(e){return t(e)&&r(e)});0===a.length&&(a=e.filter(r));var i=o()(a,function(e){return e.definition.createdAt})||a[0];return(null==i?void 0:null===(n=i.definition)||void 0===n?void 0:n.authoringCourseBranchId)||null},I=function canCreateNewBranch(e){var n=function isPrivate(e){return e.typeName!==l.a.PUBLIC_BRANCH};return!e.find(function(e){var t=f.a[e.definition.status];return t!==f.b.LIVE&&t!==f.b.ARCHIVED&&!n(e)&&e.definition.status!==f.b.UPCOMING})},N=function shouldHideCatalogContexts(e){return!!e.isRestrictedMembership&&!e.isLimitedToEnterprise},w=function isPartnerOrganization(e,n){var t=n.isPrivateAuthoringPartner,r=void 0!==t&&t;return e.isLimitedToEnterprise||r},A=function getCatalogMessages(e,n){var t=w(e,n);return{contextLabel:t?b()("Your Organization"):b()("Public"),labelTooltip:t?b()("Enrollment available only to learners in your organization"):b()("Enrollment available to all Coursera learners"),zeroStateMessage:t?b()("No instances created for your organization yet."):b()("No public versions have been created. Click <strong>Create New</strong> if you'd like to create a public version so that anyone can enroll from the public Coursera catalog.")}},S=function isEmptyCourseShell(e){return 0===(e||[]).length}},TV8g:function(module,e,n){"use strict";var t=n("wiyT"),r=n.n(t),a=n("fw5G"),o=n.n(a),i=n("43qm");e.a=function(e){var n=(new o.a).addQueryParam("q","findByUser").addQueryParam("userId",e);return r()(i.a.get(n.toString()))}},V9xz:function(module,exports){function baseGt(e,n){return e>n}module.exports=baseGt},dMi0:function(module,exports,e){var n=e("lyyl"),t=e("JC6p"),r=e("ut/Y");function findKey(e,a){return n(e,r(a,3),t)}module.exports=findKey},dunj:function(module,exports,e){var n=e("/9aa");function baseExtremum(e,t,r){for(var a=-1,o=e.length;++a<o;){var i=e[a],s=t(i);if(null!=s&&(void 0===u?s==s&&!n(s):r(s,u)))var u=s,c=i}return c}module.exports=baseExtremum},"j+0V":function(module,e,n){"use strict";n.r(e);var t=n("VbXa"),r=n.n(t),a=n("q1tI"),o=n.n(a),i=n("CMO8"),s=n("DliG"),u=n("xM+b"),c=n("yjYA"),l=n("EAIP"),d=n.n(l),f=[{key:"weeklyActiveLearner",component:u.a},{key:"weeklyNewLearner",component:c.a},{key:"totalLearner",component:s.a}],h=function(e){function TeachBanner(){for(var n,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return(n=e.call.apply(e,[this].concat(r))||this).state={course:null,membership:null,learnerCounts:{},bannerIndex:-1,dismissed:!1},n.handleDismiss=function(){i.a.setVisitedTimestamp(),n.setState({dismissed:!0})},n}r()(TeachBanner,e);var n=TeachBanner.prototype;return n.componentDidMount=function componentDidMount(){var e=this;i.a.getBannerData().spread(function(n,t,r){var a=Math.round(Math.random()*(f.length-1));e.setState({course:t,membership:n,learnerCounts:r,bannerIndex:a})}).catch(function(){}).done()},n.renderBanner=function renderBanner(){var e=f[this.state.bannerIndex].component;return o.a.createElement(e,{course:this.state.course,learnerCounts:this.state.learnerCounts})},n.render=function render(){if(!this.state.course||this.state.dismissed||!i.a.shouldShow())return o.a.createElement("div",null);return o.a.createElement("div",{className:"rc-TeachBanner bt3-alert bt3-alert-info bt3-alert-dismissable"},o.a.createElement("div",{className:"c-teach-banner-content"},o.a.createElement("button",{onClick:this.handleDismiss,className:"bt3-close","data-dismiss":"alert","aria-label":"Close"},o.a.createElement("span",{"aria-hidden":"true"},"×")),this.renderBanner()))},TeachBanner}(o.a.Component);e.default=h},jQVW:function(module,e,n){"use strict";n.d(e,"a",function(){return t});var t=Object.freeze({PRIVATE_BRANCH:"privateBranchContext",PUBLIC_BRANCH:"publicBranchContext",SESSION_GROUP:"sessionGroupContext",SESSION_GROUP_CREATION_JOB:"sessionGroupCreationJobContext"}),r=t},jqTA:function(module,e,n){"use strict";n.d(e,"d",function(){return h}),n.d(e,"b",function(){return p}),n.d(e,"a",function(){return v}),n.d(e,"e",function(){return g}),n.d(e,"c",function(){return O}),n.d(e,"f",function(){return L});var t=n("lSNA"),r=n.n(t),a=n("FyPc"),o=n.n(a),i=n("J2m7"),s=n.n(i),u=n("wd/R"),c=n.n(u),l=n("ibP9");function ownKeys(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ownKeys(Object(t),!0).forEach(function(n){r()(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var d=function isBaseBranch(e){return!/(authoringBranch|branch)~.+/.test(e)},f=function findCorrespondingCourseBranchId(e,n,t){var r=s()(e,function(e){return e.id===t});return r?r.courseBranchId:n},h=function getSortedSessions(e){return Object.keys(e.associatedSessions).map(function(n){return Object.assign({},e.associatedSessions[n],{id:n})}).sort(function(e,n){return e.startedAt-n.startedAt})},b=function getActiveSessions(e){if(!e.associatedSessions)return null;return Object.keys(e.associatedSessions).reduce(function(n,t){var r=e.associatedSessions[t];return Date.now()>r.startedAt&&Date.now()<r.endedAt&&n.push(_objectSpread(_objectSpread({},r),{},{id:t,startedAt:c.a.utc(r.startedAt),endedAt:c.a.utc(r.endedAt),enrollmentEndedAt:c.a.utc(r.enrollmentEndedAt)})),n},[]).sort(function(e,n){return e.startedAt-n.startedAt})},p=function getDefaultEnrollableSessionId(e){if(!e.associatedSessions)return null;var n=b(e);if(n&&n.length>0)return n[0].id;var t=h(e);if(t&&t[0])return t[0].id;return null},v=function associatedSessionsAreFinal(e){return e.filter(function(e){return e.enrollmentEndedAt>c()()}).length<=1},g=function isLaunched(e,n){if(n)return e===l.b.LIVE||e===l.b.ARCHIVED;var t;return!![l.b.LIVE,l.b.ARCHIVED,l.b.UPCOMING].find(function(n){return e===n})},m=function canLaunch(e){return!d(e.id)&&(e.branchStatus===l.b.NEW||e.branchStatus===l.b.PENDING)},C=function canCreateNewBranch(e){return!e.find(function(e){return e.branchStatus!==l.b.LIVE&&e.branchStatus!==l.b.ARCHIVED&&!e.isPrivate&&e.branchStatus!==l.b.UPCOMING})},E=function isPrivateLiveBranch(e,n){return n&&e===l.b.LIVE},y=function allowBreakingAction(e,n){return n||e===l.b.NEW||e===l.b.PENDING},I=function isBreakingChangeAllowed(e){return e.isPrivate&&e.branchStatus===l.b.LIVE},N=function hasCreatingBranch(e){return!!e.find(function(e){return e.branchStatus===l.b.CREATING})},w=function getBranchIdForSession(e,n){if(1===n.length)return n[0].id;var t=n.find(function(n){return n.associatedSessions[e]});return t&&t.id},A=function getPublicBranches(e){return e.filter(function(e){return!e.isPrivate&&e.listed})},S=function getLatestBranch(e){if(1===e.length)return e[0];return o()(e,"createdAt")||e[0]},O=function getLatestSelectableBranch(e){if(1===e.length)return e[0];var n=e.filter(function(e){return e.branchStatus!==l.b.ARCHIVED&&e.branchStatus!==l.b.CREATING});return 0===n.length&&(n=e.filter(function(e){return e.branchStatus===l.b.ARCHIVED&&e.branchStatus!==l.b.CREATING})),S(n)},L=function pushBranchIdToUrl(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=n.location,a=n.push,o=r.query;delete o.sessionId,delete o.groupId,delete o.agVersionId;var i=_objectSpread(_objectSpread({},o),{},t?{versionId:e,agVersionId:e}:{versionId:e}),s=_objectSpread(_objectSpread({},r),{},{query:i});a(s)}},lyyl:function(module,exports){function baseFindKey(e,n,t){var r;return t(e,function(e,t,a){if(n(e,t,a))return r=t,!1}),r}module.exports=baseFindKey},qXB5:function(module,e,n){"use strict";n.d(e,"a",function(){return i});var t=n("lSNA"),r=n.n(t),a,o=Object.freeze({LIVE:"live",NEW:"new",UPCOMING:"upcoming",ARCHIVED:"archived",CREATING:"creating",FAILED:"failed",RUNNING:"running",ENDED:"ended",PENDING:"pending",OPEN:"open"});e.b=o;var i=(a={},r()(a,o.NEW,o.NEW),r()(a,o.FAILED,o.FAILED),r()(a,o.UPCOMING,o.UPCOMING),r()(a,o.LIVE,o.LIVE),r()(a,o.ARCHIVED,o.ARCHIVED),r()(a,o.RUNNING,o.LIVE),r()(a,o.ENDED,o.ARCHIVED),r()(a,o.PENDING,o.UPCOMING),r()(a,o.OPEN,o.LIVE),r()(a,o.CREATING,o.CREATING),a)},xHmP:function(module,e,n){"use strict";n.d(e,"a",function(){return l});var t=n("sQ/U"),r=n("wiyT"),a=n.n(r),o=n("DnuM"),i=n("fw5G"),s=n.n(i),u=n("jqTA"),c=Object(o.a)("/api/viewAsLearnerInCourse.v1",{type:"rest"}),l=function changeUserEnrollment(e,n){var r=n.courseId,o=n.sessionId,i=n.groupId,l=n.userCanSwitchGroups,d=n.selectDefaultSessionForBranch,f=n.newWindow,h=n.onCompleteChangeUserEnrollment,b=void 0===h?function(){}:h,p=n.branch,v=n.skipReloadWindow,g=void 0!==v&&v,m,C=function maybeReloadWindow(){if(g)return void b();var e;(f||window).location.reload(),b()},E,y,I={userId:t.a.get().id,courseId:r,sessionId:d&&p?Object(u.b)(p):o,groupIds:l&&i?[i]:[]};a()(c.post((new s.a).addQueryParam("action","start").toString(),{data:I})).then(C).done()},d=l},"xM+b":function(module,e,n){"use strict";var t=n("VbXa"),r=n.n(t),a=n("17x9"),o=n.n(a),i=n("q1tI"),s=n.n(i),u=n("CMO8"),c=n("kvW3"),l=function(e){function WeeklyActiveLearnerBanner(){return e.apply(this,arguments)||this}var n;return r()(WeeklyActiveLearnerBanner,e),WeeklyActiveLearnerBanner.prototype.render=function render(){var e=this.props.course,n=e.name,t="/teach/".concat(e.slug),r=u.a.getWeeklyActiveLearnerCount(this.props.learnerCounts);return s.a.createElement("div",{className:"rc-WeeklyActiveLearnerBanner"},s.a.createElement("a",{href:t},s.a.createElement("strong",{className:"c-teach-banner-learner-count"},s.a.createElement(c.c,{value:r})," learners"))," ","were active in ",s.a.createElement("span",{className:"c-teach-banner-course-name"},n)," in the past week. View more on the"," ",s.a.createElement("a",{href:t},s.a.createElement("strong",null,"Course Dashboard.")))},WeeklyActiveLearnerBanner}(s.a.Component);l.propTypes={course:o.a.object.isRequired,learnerCounts:o.a.object.isRequired},e.a=l},xvkB:function(module,exports,e){},xxrO:function(module,e,n){"use strict";var t=n("welz"),r=n.n(t),a=n("4uJh"),o=r.a.Collection.extend({model:a.a,getEnrolled:function getEnrolled(){return this.filter(function(e){return e.get("courseRole")!==a.a.NOT_ENROLLED})}});e.a=o},yjYA:function(module,e,n){"use strict";var t=n("VbXa"),r=n.n(t),a=n("17x9"),o=n.n(a),i=n("q1tI"),s=n.n(i),u=n("CMO8"),c=n("kvW3"),l=function(e){function WeeklyNewLearnerBanner(){return e.apply(this,arguments)||this}var n;return r()(WeeklyNewLearnerBanner,e),WeeklyNewLearnerBanner.prototype.render=function render(){var e=this.props.course,n=e.name,t="/teach/".concat(e.slug),r=u.a.getWeeklyNewLearnerCount(this.props.learnerCounts);return s.a.createElement("div",{className:"rc-WeeklyNewLearnerBanner"},s.a.createElement("a",{href:t},s.a.createElement("strong",{className:"c-teach-banner-learner-count"},s.a.createElement(c.c,{value:r})," learners"))," ","enrolled in ",s.a.createElement("span",{className:"c-teach-banner-course-name"},n)," in the past week. View more on the"," ",s.a.createElement("a",{href:t},s.a.createElement("strong",null,"Course Dashboard.")))},WeeklyNewLearnerBanner}(s.a.Component);l.propTypes={course:o.a.object.isRequired,learnerCounts:o.a.object.isRequired},e.a=l}}]);
//# sourceMappingURL=77.66c20fea1fd20057a375.js.map