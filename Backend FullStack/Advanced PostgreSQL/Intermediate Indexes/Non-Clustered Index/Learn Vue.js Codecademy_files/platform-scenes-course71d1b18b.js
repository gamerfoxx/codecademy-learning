(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[402],{PyEA:function(e,t,r){"use strict";r.r(t);var n=r("wx14"),o=r("rePB"),s=r("ODXe"),c=r("q1tI"),a=r.n(c),i=r("/MKj"),u=r("GR0a"),p=r("/BuZ"),l=r("e18T"),O=r("cHig"),b=r("yy36"),h=r("Ff2n"),C=r("cQ3R"),j=r("b0K7"),d=r("wMKF"),m=r("1xSP"),y=r("lzsc"),w=r("c8W1"),f=r("2oex"),P=r("CWAm"),I=r("givd"),g=r("J2dO");const _=["currentContentItem","hasCourseAccess","hasCourseContentItemAccess","platformPage","contentTitle"];function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const E={showModal:I.c,nextContentItemRequested:w.b,trackVisit:P.i},CourseRouteComponent=e=>{const t=m.c[e.currentContentItem.type].component;return a.a.createElement(t,e)};class courseContentItem_CourseContentItem extends c.Component{constructor(...e){super(...e),Object(o.a)(this,"componentDidUpdate",(e=>{e.hasCourseContentItemAccess&&!this.props.hasCourseContentItemAccess&&this.showProExclusiveCourseInterstitial()})),Object(o.a)(this,"redirectToContainerCourse",(()=>{const e=this.props.locationQuery.course_redirect;return!!e&&(window.location.assign(Object(j.jb)(e)),!0)})),Object(o.a)(this,"showNextContentInterstitial",(()=>{const e=this.props,t=e.hasNextContent,r=e.isCourseCompleted;if(t||r)this.props.nextContentItemRequested({returnPath:this.returnPath()});else{if(this.redirectToContainerCourse())return;window.location.assign(this.returnPath())}})),Object(o.a)(this,"showProExclusiveCourseInterstitial",(()=>{this.props.showModal({type:"ProExclusiveCourseInterstitial",returnPath:this.returnPath()})}))}componentDidMount(){var e;this.props.contentIds&&((e=window).dataLayer||(e.dataLayer=[]),window.dataLayer.push({event:"content_id_loaded",content_id:Object(d.a)(this.props.contentIds)}));this.props.hasCourseContentItemAccess||this.showProExclusiveCourseInterstitial()}returnPath(){const e=this.props.locationParams;return Object(j.jb)(e.trackSlug)}renderCourseRouteComponent(){const e=this.props,t=e.currentContentItem,r=(e.hasCourseAccess,e.hasCourseContentItemAccess),o=e.platformPage,s=(e.contentTitle,_objectSpread(_objectSpread({},Object(h.a)(e,_)),{},{exitPaths:{logo:"/",back:this.returnPath()},navigateToExercise:this.props.navigateToExercise,redirectToContainerCourse:this.redirectToContainerCourse,showNextContentInterstitial:this.showNextContentInterstitial}));return r?a.a.createElement(CourseRouteComponent,Object(n.a)({next:()=>{}},s,{platformPage:o,currentContentItem:t})):"lesson"===t.type?a.a.createElement(g.a,{contentItemSlug:t.slug,isFreeTrack:!1,hideSignUp:!0}):a.a.createElement(p.a,null)}render(){const e=this.props.contentTitle;return a.a.createElement(a.a.Fragment,null,a.a.createElement(C.a,{title:e}),this.renderCourseRouteComponent())}}var x=Object(i.connect)((e=>({currentCourse:Object(f.I)(e),contentTitle:Object(f.i)(e),currentContentItem:Object(f.q)(e),nextContentItems:Object(f.V)(e),hasNextContent:Object(f.T)(e),isCourseCompleted:Object(y.a)(e),hasCourseAccess:Object(f.N)(e),hasCourseContentItemAccess:Object(f.O)(e),contentIds:Object(f.h)(e)})),E)(courseContentItem_CourseContentItem);function course_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function course_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?course_ownKeys(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):course_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const v={fetchInitialCourseContent:O.b};t.default=Object(i.connect)((e=>({isAnonymous:Object(b.y)(e)})),v)((e=>{const t=Object(c.useState)(!0),r=Object(s.a)(t,2),o=r[0],i=r[1],O=e.locationParams,b=e.locationQuery,h=e.dispatch,C=e.fetchInitialCourseContent,j=e.isAnonymous;if(Object(c.useEffect)((()=>{if(j)return;i(!0),(async()=>{await C(),i(!1)})()}),[j,O.trackSlug,C]),j||o)return a.a.createElement(p.a,null);return a.a.createElement(x,Object(n.a)({navigateToExercise:(e,t=!1)=>{let r=l.d(course_objectSpread(course_objectSpread({},O),{},{sectionType:"exercises",exerciseSlug:e,query:b}));t&&(r=Object(u.redirect)(r)),h(r)}},e))}))}}]);
//# sourceMappingURL=platform-scenes-course~71d1b18b.8d2d0d3cf3c43fa612cf.chunk.js.map