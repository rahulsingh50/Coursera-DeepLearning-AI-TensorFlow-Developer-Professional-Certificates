(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{"/5UJ":function(module,e,t){"use strict";var n=t("q1tI"),r=t.n(n),a=t("TOZ3"),o=t("CsdX"),i=t("xqk1"),s=t("vpZN"),c=t("buno"),u=t("F9YM"),l=t("Ne6o"),d=t.n(l),m=t("Il3Q"),g=t.n(m),f=function formatNoteClipDescription(e){var t=e.noteStartTs,n=e.noteEndTs,r=e.captureTs;if(t&&n)return"".concat(Object(u.c)(t)," - ").concat(Object(u.c)(n));return"".concat(Object(u.c)(r))},p=function constructItemLink(e,t,n){return"".concat(Object(s.c)(e),"/lecture/").concat(t,"?t=").concat(Math.trunc(n))},h=function HighlightItemInfo(e){var t=e.note,n=e.course;return r.a.createElement(a.b,{rootClassName:"rc-NoteCardItemInfo highlight",flexDirection:"row",justifyContent:"start",alignItems:"start"},r.a.createElement(i.a,{size:24,color:o.b.black}),r.a.createElement(a.b,{rootClassName:"video-info-box",flexDirection:"column",justifyContent:"center",alignItems:"stretch"},r.a.createElement(c.a,{className:"nostyle",trackingName:"highlight_link",data:{itemId:t.itemId},href:p(n.slug,t.itemId,t.noteStartTs),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"video-title","aria-label":d()("Item Name")},t.itemName)),r.a.createElement("div",{className:"video-details","aria-label":d()("Duration")},f(t))))},v=function HighlightItemInfoWithSnapshot(e){var t=e.note,n=e.course;return r.a.createElement(a.b,{rootClassName:"rc-NoteCardItemInfo snapshot",flexDirection:"column",justifyContent:"center",alignItems:"stretch"},r.a.createElement(c.a,{className:"nostyle thumbnail-container",trackingName:"snapshot_link",data:{itemId:t.itemId},href:p(n.slug,t.itemId,t.noteStartTs),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"thumbnail-overlay"},r.a.createElement("div",{className:"snapshot-link-text"},d()("Go to video"))),r.a.createElement("img",{className:"snapshot-thumbnail",src:t.snapshotUrl,alt:"note"})),r.a.createElement("div",{className:"video-title","aria-label":d()("Item Name")},t.itemName),r.a.createElement("div",{className:"video-details","aria-label":d()("Duration")},f(t)))},N=function NoteCardItemInfo(e){var t=e.note,n=e.course;return t.snapshotUrl?r.a.createElement(v,{note:t,course:n}):r.a.createElement(h,{note:t,course:n})};e.a=N},"879p":function(module,e,t){"use strict";var n=t("q1tI"),r=t.n(n),a=t("ikUE"),o=t("CbCy"),i=function ContentNotesDataProvider(e){var t=e.contentType,n=e.course,module=e.module,i=e.pageSize,s=void 0===i?10:i,c=e.children;if("module"===t)return module?r.a.createElement(o.a,{course:n,module:module,pageSize:s},function(e){return c(e)}):null;return r.a.createElement(a.a,{course:n,pageSize:s},function(e){return c(e)})};e.a=i},"9gxM":function(module,exports,e){},AK1u:function(module,exports,e){var t=e("9gxM"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},a=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},CbCy:function(module,e,t){"use strict";var n=t("RIqP"),r=t.n(n),a=t("VkAN"),o=t.n(a),i=t("q1tI"),s=t.n(i),c=t("lTCR"),u=t.n(c),l=t("oJmH"),d=t.n(l),m=t("mDxB");function _templateObject3(){var e=o()(["\n  mutation UpdateNoteMutation($noteId: String!, $noteDraft: DataMap!) {\n    UserNotesV1 @naptime {\n      update(id: $noteId, input: $noteDraft) {\n        elements {\n          id\n          userText\n          createdAt\n          updatedAt\n          details\n        }\n      }\n    }\n  }\n"]);return _templateObject3=function _templateObject3(){return e},e}function _templateObject2(){var e=o()(["\n  mutation DeleteNoteMutation($noteId: String!) {\n    UserNotesV1 @naptime {\n      delete(id: $noteId) {\n        id\n      }\n    }\n  }\n"]);return _templateObject2=function _templateObject2(){return e},e}function _templateObject(){var e=o()(["\n  query NotesModuleQuery($courseId: String!, $moduleId: String!, $start: Int, $limit: Int) {\n    UserNotesV1 @naptime {\n      courseModuleWithContentSort(courseId: $courseId, moduleId: $moduleId, start: $start, limit: $limit) {\n        elements {\n          id\n          userText\n          createdAt\n          updatedAt\n          details\n        }\n        paging\n      }\n    }\n  }\n"]);return _templateObject=function _templateObject(){return e},e}var g=function cloneData(e){return JSON.parse(JSON.stringify(e))},f=u()(_templateObject()),p=function ModuleNotesQueryProvider(e){var t=e.course,module=e.module,n=e.pageSize,a=e.children;return s.a.createElement(l.Query,{query:f,variables:{courseId:t.id,moduleId:module.id,start:0,limit:n},notifyOnNetworkStatusChange:!0},function(e){var t=e.loading,o=e.error,i=e.data,s=e.fetchMore;if(o)return a({notes:null,onLastPage:!1,fetchNextPage:function fetchNextPage(){},error:!0,loadingInitialPage:!1,loadingNextPage:!1});if(t&&!(((i||{}).UserNotesV1||{}).courseModuleWithContentSort||{}).elements)return a({notes:null,onLastPage:!1,fetchNextPage:function fetchNextPage(){},error:!1,loadingInitialPage:!0,loadingNextPage:!1});var c,u=((i||{}).UserNotesV1||{}).courseModuleWithContentSort,l=((u||{}).elements||[]).map(m.d),d=(u||{}).paging,f=!d||!d.next||d.total&&d.next>=d.total,p;return a({notes:l,fetchNextPage:function fetchNextPage(){s({variables:{start:l.length,limit:n},updateQuery:function updateQuery(e,t){var n=t.fetchMoreResult,a=g(e);if(!n)return a;var o=a;o.UserNotesV1.courseModuleWithContentSort.elements=[].concat(r()(e.UserNotesV1.courseModuleWithContentSort.elements),r()(n.UserNotesV1.courseModuleWithContentSort.elements));var i=n.UserNotesV1.courseModuleWithContentSort.paging;return o.UserNotesV1.courseModuleWithContentSort.paging=i,o}})},onLastPage:f,error:!1,loadingInitialPage:!1,loadingNextPage:!!t})})},h=u()(_templateObject2()),v=function ModuleNotesDeletionProvider(e){var t=e.course,module=e.module,n=e.pageSize,r=e.children;return s.a.createElement(l.Mutation,{mutation:h},function(e){var a;return r({deleteNote:function deleteNote(r){e({variables:{noteId:r},update:function update(e){var a=e.readQuery({query:f,variables:{courseId:t.id,moduleId:module.id,start:0,limit:n}}),o=g(a),i,s,c,u=((((a||{}).UserNotesV1||{}).courseModuleWithContentSort||{}).elements||[]).filter(function(e){return e.id!==r}),l=o;l.UserNotesV1.courseModuleWithContentSort.elements=u,e.writeQuery({query:f,variables:{courseId:t.id,moduleId:module.id,start:0,limit:n},data:l})}})}})})},N=u()(_templateObject3()),b=function ModuleNotesUpdateProvider(e){var t=e.children;return s.a.createElement(l.Mutation,{mutation:N},function(e){var n;return t({updateNote:function updateNote(t,n){e({variables:{noteId:t,noteDraft:n}})}})})},x=function ModuleNotesDataProvider(e){var t=e.course,module=e.module,n=e.pageSize,r=e.children;return s.a.createElement(p,{course:t,module:module,pageSize:n},function(e){var a=e.notes,o=e.fetchNextPage,i=e.error,c=e.loadingInitialPage,u=e.loadingNextPage,l=e.onLastPage;return s.a.createElement(v,{course:t,module:module,pageSize:n},function(e){var t=e.deleteNote;return s.a.createElement(b,null,function(e){var n=e.updateNote;return r({notes:a,onLastPage:l,fetchNextPage:o,deleteNote:t,updateNote:n,error:i,loadingInitialPage:c,loadingNextPage:u})})})})};e.a=x},DaUC:function(module,e,t){"use strict";e.a=function(e){var t=document.createElement("canvas");t.width=960,t.height=540;var n=e.el().querySelector("video");return t.getContext("2d").drawImage(n,0,0,t.width,t.height),t.toDataURL("image/jpeg")}},F9YM:function(module,e,t){"use strict";t.d(e,"c",function(){return s}),t.d(e,"e",function(){return c}),t.d(e,"a",function(){return u}),t.d(e,"b",function(){return l}),t.d(e,"d",function(){return g});var n=t("wd/R"),r=t.n(n),a=1,o=function findCueIndexForTimeHelper(e,t,n,r){if(t>n)return-1;var a=n-Math.floor((n-t)/2);return r<e[a].startTime?findCueIndexForTimeHelper(e,t,a-1,r):a!==e.length-1&&r>=e[a+1].startTime?findCueIndexForTimeHelper(e,a+1,n,r):a},i=function findCueIndexForTime(e,t){return o(e,0,e.length-1,t)},s=function formatTime(e){var t="m:ss",n=1e3*e,a,o;return r.a.duration(n).hours()>0&&(t="h:m"+t),r.a.utc(n).format(t)},c=function getTimeFromDuration(e){var t=1e3*e,n=r.a.duration(t),a=n.hours(),o=n.minutes(),i;return{seconds:n.seconds(),minutes:o,hours:a}},u=function buildParagraphs(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],r,a,o;return e.forEach(function(e){a&&(o=e.startTime-a.endTime),(!r||o>=t)&&(r=[],n.push(r)),r.push(e),a=e}),n},l=function findCuesAroundTime(e,t){var n,r=e[i(e,t)];if(!r)return[];return[r]},d=function getSentenceCueIndices(e,t){for(var n=[],r=e-1;-1!==r;){var a=t[r];if("."===a.text[a.text.length-1])break;n.unshift(r),r-=1}for(var o=e;o<=t.length-1;){var i=t[o];if(n.push(o),"."===i.text[i.text.length-1])break;o+=1}return n},m=function getAdjancentCueIndices(e,t){var n=[],r=[];return e>=2&&r.push(e-2),e>=1&&r.push(e-1),e<t-1&&n.push(e+1),e<t-2&&n.push(e+2),[].concat(r,[e],n)},g=function getAdjacentCues(e,t,n){var r=i(e,t);if(-1===r&&e.length>2)return[0,1,2].map(function(t){return e[t]});if(r<0||r>=e.length)return[];if("en"===n)return d(r,e).map(function(t){return e[t]});return m(r,e.length).map(function(t){return e[t]})}},Hwfz:function(module,e,t){"use strict";var n=t("q1tI"),r=t.n(n),a=t("1w3K"),o=t.n(a),i=t("XBa+"),s=t("TOZ3"),c=t("uhOI"),u=t("gNwb"),l=t("zUWw"),d=t("Ne6o"),m=t.n(d),g=t("AK1u"),f=t.n(g),p=Object(u.d)({type:"BUTTON"})(i.a),h=function NotesCardList(e){var t=e.notes,n=e.course,o=e.fetchNextPage,i=e.onLastPage,u=e.deleteNote,d=e.updateNote,g=e.loadingPage;return r.a.createElement("div",{className:"rc-NotesCardList"},r.a.createElement(a.CSSTransitionGroup,{component:"ul",className:"nostyle note-card-list",transitionEnter:!0,transitionLeave:!0,transitionName:"card-list-transition",transitionEnterTimeout:500,transitionLeaveTimeout:300},t.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(l.a,{note:e,course:n,deleteNote:function deleteNote(){return u(e.id)},updateNote:function updateNote(t){d(e.id,t)}}))})),!i&&r.a.createElement(s.b,{rootClassName:"notes-page-button-container",flexDirection:"column",justifyContent:"start",alignItems:"center"},r.a.createElement(p,{type:"secondary",rootClassName:"notes-next-page-button",trackingName:"next_notes_page",trackingData:{currentNoteCount:t.length},apiStatus:g?c.c:c.a,apiStatusAttributesConfig:{label:{API_BEFORE_SEND:m()("See More Notes"),API_IN_PROGRESS:m()("Loading Notes...")}},onClick:o})))};e.a=h},Il3Q:function(module,exports,e){var t=e("KpKp"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},a=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},KpKp:function(module,exports,e){},Ne6o:function(module,exports,e){var t=e("OIEB"),n=t.default?t.default:{},r,a=(0,e("HdzH").default)(n);a.getLocale=function(){return"en"},module.exports=a},OIEB:function(module,exports){exports.default={"ar":true,"de":true,"es":true,"fr":true,"ja":true,"ko":true,"pt":true,"ru":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}},QAEH:function(module,e,t){"use strict";var n=t("VkAN"),r=t.n(n),a=t("q1tI"),o=t.n(a),i=t("lTCR"),s=t.n(i),c=t("oJmH"),u=t.n(c);function _templateObject(){var e=r()(['\n  query CourseMaterialsQuery($slug: String!) {\n    OnDemandCourseMaterialsV2 @naptime {\n      slug(slug: $slug, showHidden: true, includes: "modules") {\n        elements {\n          id\n          name\n        }\n        linked {\n          onDemandCourseMaterialModulesV1 {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n']);return _templateObject=function _templateObject(){return e},e}var l=s()(_templateObject()),d=function CourseContentDataProvider(e){var t=e.courseSlug,n=e.children;return o.a.createElement(c.Query,{query:l,variables:{slug:t}},function(e){var r=e.loading,a=e.error,o=e.data;if(a||r)return n({course:null,modules:null,error:!!a,loading:!!r});var i,s=(o.OnDemandCourseMaterialsV2||{}).slug,c=(s||{}).elements[0].id,u=(s||{}).elements[0].name,l=((s||{}).linked||{}).onDemandCourseMaterialModulesV1;return n({course:{id:c,name:u,slug:t},modules:l,error:!1,loading:!1})})};e.a=d},"R+Yg":function(module,exports,e){var t=e("jtIK"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},a=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},RL3h:function(module,exports,e){},TaCa:function(module,e,t){"use strict";var n=t("q1tI"),r=t.n(n),a=t("TOZ3"),o=t("CsdX"),i=t("wwtN"),s=t("8WNh"),c=t("Ne6o"),u=t.n(c),l=t("kUh3"),d=t.n(l),m="https://s3.amazonaws.com/coursera_assets/learner/icon_note.svg",g="https://s3.amazonaws.com/coursera_assets/learner/icon_highlight.svg",f=function NotesReviewPageDataState(e){var t=e.dataState;return r.a.createElement(a.b,{rootClassName:"rc-NotesReviewPageDataState",flexDirection:"column",justifyContent:"start",alignItems:"center"},"error"===t&&[r.a.createElement(i.a,{key:"icon",size:84,color:o.b.error}),r.a.createElement("div",{key:"message",className:"data-state-message headline-5-text"},u()("There was an issue loading your notes data. Please try refreshing the page."))],"loading"===t&&[r.a.createElement(s.a,{key:"icon",size:84}),r.a.createElement("div",{key:"message",className:"data-state-message headline-5-text"},u()("Loading notes..."))],"empty"===t&&[r.a.createElement(a.b,{justifyContent:"center",rootClassName:"state-icons"},r.a.createElement("img",{src:m,alt:u()("Take notes"),className:"placeholder-icon"}),r.a.createElement("img",{src:g,alt:u()("Highlight"),className:"placeholder-icon"})),r.a.createElement("div",{key:"message",className:"data-state-message headline-5-text"},u()("You have not added any notes yet. Notes can be created from video pages."))])};e.a=f},UVRO:function(module,exports,e){var t=e("UjJW"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},a=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},UjJW:function(module,exports,e){},Yydp:function(module,e,t){"use strict";var n=t("RIqP"),r=t.n(n),a=t("lSNA"),o=t.n(a),i=t("pVnL"),s=t.n(i),c=t("q1tI"),u=t.n(c),l=t("PJ/k"),d=t.n(l),m=t("Ne6o"),g=t.n(m),f=t("UVRO"),p=t.n(f);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){o()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var h=function FilterDropdownItem(e){var t=e.content,n=e.inMenu,r=e.onEnterKey,a,o=n?{role:"menuitem",tabIndex:0,onKeyDown:r&&function(e){"Enter"===e.key&&r()}}:{};return t&&"course"!==t.contentType?u.a.createElement("div",s()({},o,{className:"content-name"}),t.name):u.a.createElement("span",o,g()("All notes"))},v=function NotesPageFilterDropdown(e){var t=e.course,n=e.modules,a=e.selectedContentId,o=e.onSelect,i=void 0===o?function(){}:o,s=a||t.id,c=_objectSpread({contentType:"course"},t),d=n.map(function(module){return _objectSpread({contentType:"module"},module)}),m=[c].concat(r()(d)),g=m.find(function(e){return e.id===s}),f=(null==g?void 0:g.name)||"All notes",p=u.a.createElement("div",{className:"content-switcher-title"},u.a.createElement(h,{content:g,inMenu:!1}));return u.a.createElement("div",{className:"rc-NotesPageFilterDropdown"},u.a.createElement(l.DropdownButton,{title:p,onSelect:i,"aria-label":"Notes dropdown, ".concat(f,", selected")},m.map(function(e){return u.a.createElement(l.MenuItem,{key:e.id,eventKey:e.id},u.a.createElement(h,{inMenu:!0,content:e,onEnterKey:function onEnterKey(){i(e.id)}}))})))};e.a=v},c5cO:function(module,e,t){"use strict";t.r(e);var n=t("VbXa"),r=t.n(n),a=t("q1tI"),o=t.n(a),i=t("q3BH"),s=t("Hwfz"),c=t("QsJ7"),u=t("Yydp"),l=t("TaCa"),d=t("QAEH"),m=t("879p"),g=t("Ne6o"),f=t.n(g),p=t("R+Yg"),h=t.n(p),v=20,N=function(e){function NotesReviewPageWithCourseData(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={selectedContentId:null},t.onContentSelect=function(e){t.setState({selectedContentId:e})},t}var t;return r()(NotesReviewPageWithCourseData,e),NotesReviewPageWithCourseData.prototype.render=function render(){var e=this.props,t=e.course,n=e.modules,r,a=this.state.selectedContentId||t.id,i=a===t.id?t:n.find(function(module){return module.id===a}),d=a===t.id?"course":"module";return o.a.createElement("div",{className:"rc-NotesReviewPage"},o.a.createElement("h2",{className:"notes-header headline-6-text"},f()("Notes")),o.a.createElement(c.a,{pageTitle:f()("Notes")}),o.a.createElement(u.a,{course:t,modules:n,selectedContentId:a,onSelect:this.onContentSelect}),o.a.createElement(m.a,{pageSize:20,contentType:d,course:t,module:"module"===d&&i?i:null},function(e){var n=e.notes,r=e.onLastPage,a=e.fetchNextPage,i=e.error,c=e.loadingInitialPage,u=e.loadingNextPage,d=e.updateNote,m=e.deleteNote;if(i)return o.a.createElement(l.a,{dataState:"error"});if(c)return o.a.createElement(l.a,{dataState:"loading"});if(!n||0===n.length)return o.a.createElement(l.a,{dataState:"empty"});return o.a.createElement(s.a,{course:t,notes:n,onLastPage:r,fetchNextPage:a,updateNote:d,deleteNote:m,loadingPage:u})}))},NotesReviewPageWithCourseData}(o.a.Component),b=i.a.createTrackedContainer(function(e){var t;return{namespace:{page:"notes_review"},courseId:e.course.id}})(N),x=function NotesReviewPage(e){var t=e.params.courseSlug;return o.a.createElement(d.a,{courseSlug:t},function(e){var t=e.course,n=e.modules,r=e.error,a=e.loading;if(r)return o.a.createElement(l.a,{dataState:"error"});if(a)return o.a.createElement(l.a,{dataState:"loading"});return o.a.createElement(b,{course:t,modules:n})})};e.default=x},i50z:function(module,exports,e){},ikUE:function(module,e,t){"use strict";var n=t("RIqP"),r=t.n(n),a=t("VkAN"),o=t.n(a),i=t("q1tI"),s=t.n(i),c=t("lTCR"),u=t.n(c),l=t("oJmH"),d=t.n(l),m=t("mDxB");function _templateObject3(){var e=o()(["\n  mutation UpdateNoteMutation($noteId: String!, $noteDraft: DataMap!) {\n    UserNotesV1 @naptime {\n      update(id: $noteId, input: $noteDraft) {\n        elements {\n          id\n          userText\n          createdAt\n          updatedAt\n          details\n        }\n      }\n    }\n  }\n"]);return _templateObject3=function _templateObject3(){return e},e}function _templateObject2(){var e=o()(["\n  mutation DeleteNoteMutation($noteId: String!) {\n    UserNotesV1 @naptime {\n      delete(id: $noteId) {\n        id\n      }\n    }\n  }\n"]);return _templateObject2=function _templateObject2(){return e},e}function _templateObject(){var e=o()(["\n  query NotesDataQuery($courseId: String!, $start: Int, $limit: Int) {\n    UserNotesV1 @naptime {\n      courseWithContentSort(courseId: $courseId, start: $start, limit: $limit) {\n        elements {\n          id\n          userText\n          createdAt\n          updatedAt\n          details\n        }\n        paging\n      }\n    }\n  }\n"]);return _templateObject=function _templateObject(){return e},e}var g=function cloneData(e){return JSON.parse(JSON.stringify(e))},f=u()(_templateObject()),p=function CourseNotesQueryProvider(e){var t=e.course,n=e.pageSize,a=e.children;return s.a.createElement(l.Query,{query:f,variables:{courseId:t.id,start:0,limit:n},notifyOnNetworkStatusChange:!0},function(e){var t=e.loading,o=e.error,i=e.data,s=e.fetchMore;if(o)return a({notes:null,onLastPage:!1,error:!0,fetchNextPage:function fetchNextPage(){},loadingInitialPage:!1,loadingNextPage:!1});var c,u=((i||{}).UserNotesV1||{}).courseWithContentSort;if(t&&!(u||{}).elements)return a({notes:null,onLastPage:!1,error:!1,fetchNextPage:function fetchNextPage(){},loadingInitialPage:!0,loadingNextPage:!1});var l=((u||{}).elements||[]).map(m.d),d=(u||{}).paging,f=!d||!d.next||d.total&&d.next>=d.total,p;return a({notes:l,fetchNextPage:function fetchNextPage(){s({variables:{start:l.length,limit:n},updateQuery:function updateQuery(e,t){var n=t.fetchMoreResult,a=g(e);if(!n)return a;var o=a;o.UserNotesV1.courseWithContentSort.elements=[].concat(r()(e.UserNotesV1.courseWithContentSort.elements),r()(n.UserNotesV1.courseWithContentSort.elements));var i=n.UserNotesV1.courseWithContentSort.paging;return o.UserNotesV1.courseWithContentSort.paging=i,o}})},onLastPage:f,error:!1,loadingInitialPage:!1,loadingNextPage:t})})},h=u()(_templateObject2()),v=function CourseNotesDeletionProvider(e){var t=e.course,n=e.pageSize,r=e.children;return s.a.createElement(l.Mutation,{mutation:h},function(e){var a;return r({deleteNote:function deleteNote(r){e({variables:{noteId:r},update:function update(e){var a=e.readQuery({query:f,variables:{courseId:t.id,start:0,limit:n}}),o=g(a),i,s,c,u=((((a||{}).UserNotesV1||{}).courseWithContentSort||{}).elements||[]).filter(function(e){return e.id!==r}),l=o;l.UserNotesV1.courseWithContentSort.elements=u,e.writeQuery({query:f,variables:{courseId:t.id,start:0,limit:n},data:l})}})}})})},N=u()(_templateObject3()),b=function CourseNotesUpdateProvider(e){var t=e.children;return s.a.createElement(l.Mutation,{mutation:N},function(e){var n;return t({updateNote:function updateNote(t,n){e({variables:{noteId:t,noteDraft:n}})}})})},x=function CourseNotesDataProvider(e){var t=e.course,n=e.pageSize,r=e.children;return s.a.createElement(p,{course:t,pageSize:n},function(e){var a=e.notes,o=e.fetchNextPage,i=e.error,c=e.loadingInitialPage,u=e.loadingNextPage,l=e.onLastPage;return s.a.createElement(v,{course:t,pageSize:n},function(e){var t=e.deleteNote;return s.a.createElement(b,null,function(e){var n=e.updateNote;return r({notes:a,onLastPage:l,fetchNextPage:o,deleteNote:t,updateNote:n,error:i,loadingInitialPage:c,loadingNextPage:u})})})})};e.a=x},jtIK:function(module,exports,e){},kUh3:function(module,exports,e){var t=e("lEIx"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},a=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},kzXq:function(module,e,t){"use strict";var n=t("q1tI"),r=t.n(n),a=t("AWZ4"),o=t("TOZ3"),i=t("gNwb"),s=t("PB6g"),c=t("Ne6o"),u=t.n(c),l=t("oLhO"),d=t.n(l),m=Object(i.d)({type:"BUTTON"})(a.b),g=function NoteCardNote(e){var t=e.note,n=e.editingState,a=e.isConfirmingDelete,i=e.onDeleteConfirm,c=e.onDeleteCancel,l=e.onEditTextChange,d=e.onEditSave,g=e.onEditCancel,f=e.editorRef;return r.a.createElement(o.b,{rootClassName:"rc-NoteCardNote",flexDirection:"column",justifyContent:"start",alignItems:"stretch"},r.a.createElement("div",{className:"video-section-text","aria-label":u()("Transcript")},t.transcriptText),!n.isEditing&&t.noteText&&t.noteText.length>0&&r.a.createElement("div",{className:"video-note-text-box video-note-text","aria-label":u()("User Note")},t.noteText),n.isEditing&&r.a.createElement("textarea",{ref:f,className:"video-note-text-box video-note-editor",value:n.editNoteText,onChange:function onChange(e){var t=e.target.value;l(t)}}),n.isEditing&&r.a.createElement(o.b,{rootClassName:"video-edit-actions",flexDirection:"row",justifyContent:"end",alignItems:"center"},r.a.createElement(m,{rootClassName:"edit-action-button edit-save-button",trackingName:"note_edit_save_button",trackingData:{noteId:t.id,oldText:t.noteText,newText:n.editNoteText},label:u()("Save"),size:"sm",type:"primary",onClick:d}),r.a.createElement(m,{rootClassName:"edit-action-button edit-cancel-button",trackingName:"note_edit_cancel_button",trackingData:{noteId:t.id,oldText:t.noteText,newText:n.editNoteText},label:u()("Cancel"),size:"sm",type:"default",onClick:g})),a&&r.a.createElement(o.b,{rootClassName:"delete-confirm-container",justifyContent:"end",alignItems:"center"},r.a.createElement("div",{className:"delete-confirm-text"},u()("Delete entire note?")),r.a.createElement(s.a,{tagName:"span"},r.a.createElement("label",{htmlFor:"delete-confirm-button-yes"},u()("Delete entire note? Yes"))),r.a.createElement(m,{rootClassName:"delete-confirm-button",size:"sm",type:"primary",label:u()("Yes"),onClick:i,trackingName:"note_delete_confirm_button",htmlAttributes:{id:"delete-confirm-button-yes"}}),r.a.createElement(s.a,{tagName:"span"},r.a.createElement("label",{htmlFor:"delete-confirm-button-no"},u()("Delete entire note? No"))),r.a.createElement(m,{rootClassName:"delete-confirm-button",size:"sm",type:"secondary",label:u()("No"),onClick:c,trackingName:"note_delete_cancel_button",htmlAttributes:{id:"delete-confirm-button-no"}})))};e.a=g},lDT8:function(module,exports,e){var t=e("i50z"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},a=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},lEIx:function(module,exports,e){},mDxB:function(module,e,t){"use strict";t.d(e,"d",function(){return m}),t.d(e,"e",function(){return g}),t.d(e,"a",function(){return f}),t.d(e,"b",function(){return p}),t.d(e,"c",function(){return h});var n=t("lSNA"),r=t.n(n),a=t("wiyT"),o=t.n(a),i=t("fw5G"),s=t.n(i),c=t("DnuM"),u=t("p6CZ");function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){r()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var l=Object(c.a)("/api/userNotes.v1",{type:"rest"}),d=function uploadSnapshot(e,t){return o.a.Promise(function(n){var r=(new s.a).addQueryParam("action","getScreenShotUploadUrl").addQueryParam("id",e);l.post(r.toString()).then(function(r){var a=Object(u.c)(t),o;Object(c.a)(r,{type:"rest"}).put("",{contentType:"image/png",data:a,processData:!1}).then(function(){var t=e.split("~")[1];n("https://s3.amazonaws.com/coursera-video-thumbnail-notes/web/".concat(t))})})})},m=function reshapeHighlightForClient(e){var t=e.id,n=e.createdAt,r=e.updatedAt,a=e.userText,o=e.details.definition,i=o.noteEndTs,s=o.noteStartTs,c=o.captureTs,u=o.snapshotUrl,l=o.transcriptTextStartIndex,d=o.transcriptTextEndIndex,m=o.transcriptText,g,f,p;return{id:t,itemId:o.itemId,itemName:o.itemName,clientId:t,createdAt:n,updatedAt:r,languageCode:o.languageCode,noteText:a,noteEndTs:i&&i/1e3,noteStartTs:s&&s/1e3,captureTs:c&&c/1e3,snapshotUrl:u,transcriptTextStartIndex:l,transcriptTextEndIndex:d,transcriptText:m,pendingCreate:!1,pendingUpdate:!1}},g=function updateHighlight(e){var t=e.itemId,n=e.courseId,r=e.languageCode,a=e.id,o=e.highlight,i=new s.a(a),c=Object(u.d)({itemId:t,courseId:n,highlight:o,languageCode:r});return l.put(i.toString(),{data:c})},f=function createHighlight(e){var t=e.itemId,n=e.courseId,r=e.languageCode,a=e.highlight,i=Object(u.d)({itemId:t,courseId:n,highlight:a,languageCode:r});if(a.snapshotDataUrl)return o.a.Promise(function(e,o){l.post("",{data:i}).then(function(i){var s,c=i.elements[0].id;if(!a.snapshotDataUrl)return void o();d(c,a.snapshotDataUrl).then(function(o){g({itemId:t,courseId:n,languageCode:r,id:c,highlight:_objectSpread(_objectSpread({},a),{},{snapshotUrl:o})}).then(function(){e({id:c,snapshotUrl:o})})})})});return l.post("",{data:i}).then(function(e){return e.elements[0]})},p=function deleteHighlight(e){var t=e.id,n=new s.a(t);return l.delete(n.toString())},h=function getHighlights(e){var t=e.itemId,n=e.courseId,r=e.languageCode,a=(new s.a).addQueryParam("itemId",t).addQueryParam("courseId",n).addQueryParam("languageCode",r).addQueryParam("q","courseItemLanguageCode").addQueryParam("fields","id, userText, createdAt, updatedAt, details");return l.get(a.toString()).then(function(e){return e.elements.map(m)})},v=function getCourseHighlights(e){var t=e.courseId,n=(new s.a).addQueryParam("courseId",t).addQueryParam("q","course").addQueryParam("fields","id, userText, createdAt, updatedAt, details");return l.get(n.toString()).then(function(e){return e.elements.map(m)})}},oLhO:function(module,exports,e){var t=e("RL3h"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},a=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},p6CZ:function(module,e,t){"use strict";t.d(e,"c",function(){return o}),t.d(e,"b",function(){return i}),t.d(e,"a",function(){return s}),t.d(e,"d",function(){return c});var n=t("k8gO"),r=t("DaUC"),a=t("F9YM"),o=function getBlobFromDataURI(e){for(var t=atob(e.split(",")[1]),n=e.split(",")[0].split(":")[1].split(";")[0],r=new ArrayBuffer(t.length),a=new Uint8Array(r),o=0;o<t.length;o+=1)a[o]=t.charCodeAt(o);return new Blob([r],{type:n})},i=function generateHighlightFromTranscriptSelection(e,t){var r=e.transcriptTextStartIndex,a=e.transcriptTextEndIndex,o=t.cues.filter(function(e){return e.index>=r.cueIndex&&e.index<=a.cueIndex}),i=o.reduce(function(e,t){var n=t.index,o=t.text,i=r.cueIndex,s=r.textIndex,c=a.cueIndex,u=a.textIndex;if(n===i){if(n===c)return"".concat(e).concat(o.substring(s,u+1));return"".concat(e).concat(o.substring(s))}if(n===c)return"".concat(e," ").concat(o.substring(0,u+1));return"".concat(e," ").concat(o)},""),s=Object(n.a)(),c=s,u=o[0],l,d=o[o.length-1].endTime,m,g,f="",p=!0,h=!1,v;return{id:s,clientId:c,captureTs:u.startTime,noteStartTs:u.startTime,noteEndTs:d,transcriptText:i,noteText:"",languageCode:t.languageCode,transcriptTextStartIndex:r,transcriptTextEndIndex:a,pendingCreate:!0,pendingUpdate:!1}},s=function generateHighlightFromCaptureButton(e,t){var o=Object(n.a)(),i=o,s="",c=e.languageCode,u=t.currentTime(),l=Object(a.d)(e.cues,u,c),d=l[0],m=l[l.length-1],g=l.reduce(function(e,t){if(t.index===d.index)return"".concat(e).concat(t.text);return"".concat(e," ").concat(t.text)},""),f={textIndex:0,cueIndex:d.index},p={textIndex:m.text.length-1,cueIndex:m.index},h=m.endTime,v,N=!0,b=!1,x;return{id:o,clientId:i,captureTs:u,noteStartTs:d.startTime,noteEndTs:h,transcriptText:g,noteText:"",languageCode:c,transcriptTextStartIndex:f,transcriptTextEndIndex:p,snapshotDataUrl:Object(r.a)(t),pendingCreate:!0,pendingUpdate:!1}},c=function getDraftFromHighlight(e){var t=e.itemId,n=e.courseId,r=e.highlight,a=e.languageCode,o=r.noteStartTs,i=r.noteEndTs,s=r.captureTs,c=r.snapshotUrl,u=r.transcriptText,l=r.noteText,d=r.transcriptTextEndIndex,m;return{details:{typeName:"video",definition:{itemId:t,courseId:n,snapshotUrl:c||"",transcriptTextStartIndex:r.transcriptTextStartIndex,transcriptTextEndIndex:d,languageCode:a,transcriptText:u,noteEndTs:i&&1e3*i,captureTs:s&&1e3*s,noteStartTs:o&&1e3*o}},userNote:l}},u=function reshapeHighlightForClient(e){var t=e.id,n=e.createdAt,r=e.updatedAt,a=e.userText,o=e.details.definition,i=o.noteEndTs,s=o.noteStartTs,c=o.captureTs,u=o.snapshotUrl,l=o.transcriptTextStartIndex,d=o.transcriptTextEndIndex,m=o.transcriptText,g,f,p;return{id:t,itemId:o.itemId,itemName:o.itemName,clientId:t,createdAt:n,updatedAt:r,languageCode:o.languageCode,noteText:a,noteEndTs:i&&i/1e3,noteStartTs:s&&s/1e3,captureTs:c&&c/1e3,snapshotUrl:u,transcriptTextStartIndex:l,transcriptTextEndIndex:d,transcriptText:m,pendingCreate:!1,pendingUpdate:!1}}},zUWw:function(module,e,t){"use strict";var n=t("lSNA"),r=t.n(n),a=t("VbXa"),o=t.n(a),i=t("q1tI"),s=t.n(i),c=t("BxDD"),u=t("TOZ3"),l=t("CsdX"),d=t("k52k"),m=t("ZJO1"),g=t("gNwb"),f=t("/5UJ"),p=t("kzXq"),h=t("p6CZ"),v=t("Ne6o"),N=t.n(v),b=t("lDT8"),x=t.n(b);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){r()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var C=Object(g.d)({type:"BUTTON"})(c.a),I=function(e){function NoteCard(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={isEditing:!1,isConfirmingDelete:!1,editNoteText:null},t.onDeleteClick=function(){t.setState({isConfirmingDelete:!0})},t.onDeleteConfirm=function(){var e;(0,t.props.deleteNote)(),t.setState({isConfirmingDelete:!1})},t.onDeleteCancel=function(){t.setState({isConfirmingDelete:!1})},t.onEditStart=function(){var e;if(!t.state.isEditing){var n=t.props.note;t.setState({isEditing:!0,editNoteText:n.noteText||""})}},t.onEditTextChange=function(e){t.setState({editNoteText:e})},t.onEditCancel=function(){t.setState({isEditing:!1,editNoteText:null})},t.onEditSave=function(){var e=t.props,n=e.note,r=e.course,a=e.updateNote,o=t.state.editNoteText;a(Object(h.d)({itemId:n.itemId,courseId:r.id,highlight:_objectSpread(_objectSpread({},n),{},{noteText:o||""}),languageCode:n.languageCode})),t.setState({isEditing:!1,editNoteText:null})},t.onNoteEditRef=function(e){e&&e.focus()},t}var t;return o()(NoteCard,e),NoteCard.prototype.render=function render(){var e=this.props,t=e.note,n=e.course,r=this.state,a=r.isEditing,o=r.isConfirmingDelete,i=r.editNoteText;return s.a.createElement(u.b,{rootClassName:"rc-NoteCard",htmlAttributes:{tabIndex:0},flexDirection:"row",justifyContent:"start",alignItems:"stretch"},s.a.createElement(f.a,{note:t,course:n}),s.a.createElement(u.b,{rootClassName:"note-text-and-actions",flexDirection:"column",justifyContent:"start",alignItems:"stretch"},s.a.createElement(p.a,{editorRef:this.onNoteEditRef,note:t,editingState:{isEditing:a,editNoteText:i},isConfirmingDelete:o,onDeleteCancel:this.onDeleteCancel,onDeleteConfirm:this.onDeleteConfirm,onEditCancel:this.onEditCancel,onEditSave:this.onEditSave,onEditTextChange:this.onEditTextChange}),!(a||o)&&s.a.createElement(u.b,{rootClassName:"action-buttons-row",justifyContent:"end",alignItems:"center"},s.a.createElement(C,{rootClassName:"note-card-button edit-button",htmlAttributes:{"aria-label":N()("Edit note for text: #{text}",{text:t.transcriptText}),tabIndex:0},trackingName:"note_edit_button",trackingData:{noteId:t.id},svgElement:s.a.createElement(d.a,{size:24,color:l.b.lightGrayText,hoverColor:l.b.primary,title:N()("Edit")}),type:"icon",size:"zero",onClick:this.onEditStart}),s.a.createElement(C,{rootClassName:"note-card-button delete-button",htmlAttributes:{"aria-label":N()("Delete note for text: #{text}",{text:t.transcriptText}),tabIndex:0},trackingName:"note_delete_button",trackingData:{noteId:t.id},svgElement:s.a.createElement(m.a,{size:24,color:l.b.lightGrayText,hoverColor:l.b.primary,title:N()("Delete")}),type:"icon",size:"zero",onClick:this.onDeleteClick}))))},NoteCard}(s.a.Component);e.a=I}}]);
//# sourceMappingURL=en.68.9f0470997a2d390ff35a.js.map