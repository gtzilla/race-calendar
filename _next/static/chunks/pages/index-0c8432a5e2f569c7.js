(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3685:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(1874)}])},638:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t])}))}return e}t.default=function(e,t){var r=i.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};o=e,u=Promise,(null!=u&&"undefined"!==typeof Symbol&&u[Symbol.hasInstance]?u[Symbol.hasInstance](o):o instanceof u)?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=a({},n,e));var o,u;var l=n=a({},n,t);if(l.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(l.suspense)return r(l);n.loadableGenerated&&delete(n=a({},n,n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,s(r,n);delete n.ssr}return r(n)};o(r(7294));var i=o(r(4302));function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return delete t.webpack,delete t.modules,e(t)}},6319:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var a=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=a},4302:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,s=(o=r(7294))&&o.__esModule?o:{default:o},u=r(7161),l=r(6319);var c=[],d=[],f=!1;function h(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}var p=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,r,a;return t=e,(r=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;if(t.loading){if("number"===typeof r.delay)if(0===r.delay)this._state.pastDelay=!0;else{var n=this;this._delay=setTimeout((function(){n._update({pastDelay:!0})}),r.delay)}if("number"===typeof r.timeout){var a=this;this._timeout=setTimeout((function(){a._update({timedOut:!0})}),r.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&n(t.prototype,r),a&&n(t,a),e}();function m(e){return function(e,t){var r=function(){if(!a){var t=new p(e,n);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()},n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);n.suspense&&(n.lazy=s.default.lazy(n.loader));var a=null;if(!f&&!n.suspense){var o=n.webpack?n.webpack():n.modules;o&&d.push((function(e){var t=!0,n=!1,a=void 0;try{for(var i,s=o[Symbol.iterator]();!(t=(i=s.next()).done);t=!0){var u=i.value;if(-1!==e.indexOf(u))return r()}}catch(l){n=!0,a=l}finally{try{t||null==s.return||s.return()}finally{if(n)throw a}}}))}var c=n.suspense?function(e,t){return s.default.createElement(n.lazy,i({},e,{ref:t}))}:function(e,t){r();var i=s.default.useContext(l.LoadableContext),o=u.useSubscription(a);return s.default.useImperativeHandle(t,(function(){return{retry:a.retry}}),[]),i&&Array.isArray(n.modules)&&n.modules.forEach((function(e){i(e)})),s.default.useMemo((function(){return o.loading||o.error?s.default.createElement(n.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:a.retry}):o.loaded?s.default.createElement(function(e){return e&&e.__esModule?e.default:e}(o.loaded),e):null}),[e,o])};return c.preload=function(){return!n.suspense&&r()},c.displayName="LoadableComponent",s.default.forwardRef(c)}(h,e)}function v(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return v(e,t)}))}m.preloadAll=function(){return new Promise((function(e,t){v(c).then(e,t)}))},m.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return f=!0,t()};v(d,e).then(r,r)}))},window.__NEXT_PRELOADREADY=m.preloadReady;var y=m;t.default=y},1874:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return M},default:function(){return k}});var n=r(5893),a=r(1664),i=r(381),o=r.n(i),s=r(6005),u=r(7294);function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}function d(e,t){return!t||"object"!==h(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}var h=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var a=c(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return d(this,r)}}var m=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function v(e){return(0,n.jsx)("ul",{className:"calendar-container-header",children:m.map((function(e){return(0,n.jsx)("li",{children:e.substring(0,3)},e)}))})}function y(e){var t=e.item,r=e.dayClass,i=e.day,o=i.format("YYYY-MM-DD");return(0,n.jsx)(a.default,{className:"calendar-full-date-click-link",href:t.path,passHref:!0,children:(0,n.jsx)("li",{style:{backgroundImage:"url("+t.thumbnailUrl+")",backgroundSize:"cover",backgroundRepeat:"no-repeat"},className:"active-event-on-date",children:(0,n.jsx)("span",{className:r,children:i.format("DD")})},o)})}function b(e){var t=e.day,r=e.dayClass,i=e.datesHashMap,o=e.hashKey;return(0,n.jsxs)("li",{className:"active-event-on-date",children:[(0,n.jsx)("span",{className:r,children:t.format("DD")}),i[o].map((function(e){var t=Math.floor(100/i[o].length)+"%";return(0,n.jsx)(a.default,{href:e.path,passHref:!0,children:(0,n.jsx)("div",{className:"event-with-flyer",style:{width:t,float:"left",cursor:"pointer",backgroundImage:"url("+e.thumbnailUrl+")",backgroundSize:"cover",backgroundRepeat:"no-repeat"}})},e.path)}))]},o)}var g=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(u,e);var t,r,a,i=p(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e)).state={calendarActiveDate:null},t}return t=u,(r=[{key:"onClickBack",value:function(e){e.preventDefault(),console.log("onClickBack",e);var t=this.state.calendarActiveDate?this.state.calendarActiveDate:this.props.startDate,r=o()(t,["YYYY-MM-DD"]).subtract(1,"month");this.setState({calendarActiveDate:r.format("YYYY-MM-DD")})}},{key:"onClickNext",value:function(e){e.preventDefault(),console.log("onClickNext",e,this.state.calendarActiveDate);var t=this.state.calendarActiveDate?this.state.calendarActiveDate:this.props.startDate,r=o()(t,["YYYY-MM-DD"]).add(1,"month");this.setState({calendarActiveDate:r.format("YYYY-MM-DD")})}},{key:"render",value:function(){for(var e=function(e){var t={};return e.forEach((function(e){var r=e.eventDate;s.ZP.has(t,r)||(t[r]=[]),t[r].push(e)})),t}(this.props.events),t=o()(this.state.calendarActiveDate||this.props.startDate,["YYYY-MM-DD"]),r=o()(t).startOf("month").startOf("day"),a=o()(t).endOf("month").endOf("day"),i=o()(a).endOf("month").endOf("week"),u=o()(r).startOf("month").startOf("week"),l=o()(u),c=[];l.isBefore(i);)c.push(o()(l)),l.add(1,"day");var d=o()().isSame(r,"year")?r.format("MMMM"):r.format("MMMM, YYYY");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"calendar-headline-box",children:[(0,n.jsx)("h3",{children:d}),(0,n.jsxs)("ul",{className:"calendar-back-next-controls-box",children:[(0,n.jsx)("li",{onClick:this.onClickBack.bind(this),children:"Back"}),(0,n.jsx)("li",{onClick:this.onClickNext.bind(this),children:"Next"})]})]}),(0,n.jsxs)("div",{className:"calendar-container-box",children:[(0,n.jsx)(v,{}),(0,n.jsx)("ul",{className:"calendar-container-body",children:c.map((function(t){var a=t.isSame(r,"month")?"current-month date-display-number":"date-display-number",i=t.format("YYYY-MM-DD");if(s.ZP.has(e,i)){if(1===e[i].length){var o=s.ZP.first(e[i]);return(0,n.jsx)(y,{day:t,item:o,dayClass:a})}return(0,n.jsx)(b,{day:t,dayClass:a,hashKey:i,datesHashMap:e})}return(0,n.jsx)("li",{children:(0,n.jsx)("span",{className:a,children:t.format("DD")})},i)}))})]})]})}}])&&l(t.prototype,r),a&&l(t,a),u}(u.PureComponent),_=r(5152),x=function(e){return(0,n.jsx)(u.Fragment,{children:e.children})},j=(0,_.default)((function(){return Promise.resolve(x)}),{ssr:!1}),D="MMMM D, YYYY";var M=!0;function k(e){var t=function(e){var t=o()().startOf("day");return s.ZP.chain(e).filter((function(e){return o()(e.frontMatter.date,[D]).isSameOrAfter(t,"day")})).sortBy((function(e){return o()(e.frontMatter.date,[D]).unix()})).value()}(e.posts),r=t.map((function(e){var t;return Object.assign({},null===e||void 0===e?void 0:e.frontMatter,{eventDate:o()(null===e||void 0===e||null===(t=e.frontMatter)||void 0===t?void 0:t.date,[D]).format("YYYY-MM-DD"),path:"/races/"+e.slug,slug:e.slug})}));return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(j,{children:[(0,n.jsx)("div",{className:"mt-5",children:t.length?t.map((function(e,t){return(0,n.jsx)(a.default,{href:"/races/"+e.slug,passHref:!0,children:(0,n.jsx)("div",{className:"card mb-3 pointer",style:{maxWidth:"540px"},children:(0,n.jsxs)("div",{className:"row g-0",children:[(0,n.jsx)("div",{className:"col-md-8",children:(0,n.jsxs)("div",{className:"card-body",children:[(0,n.jsx)("h5",{className:"card-title",children:e.frontMatter.title}),(0,n.jsx)("p",{className:"card-text",children:e.frontMatter.description}),(0,n.jsx)("p",{className:"card-text",children:(0,n.jsx)("small",{className:"text-muted",children:e.frontMatter.date})})]})}),(0,n.jsx)("div",{className:"col-md-4 m-auto",children:(0,n.jsx)("img",{src:e.frontMatter.thumbnailUrl,className:"img-fluid mt-1 rounded-start",alt:"thumbnail",width:500,height:500})})]})})},t)})):(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{children:"No Upcoming Alleycats"}),(0,n.jsxs)("p",{children:["Let's change that together. Share event details with ",(0,n.jsx)("a",{href:"https://instagram.com/brokeshutter/",children:"brokeshutter@ig"})," to see your race published here."]})]})}),(0,n.jsx)(g,{startDate:o()().format("YYYY-MM-DD"),today:o()().format("YYYY-MM-DD"),events:r}),(0,n.jsx)("div",{className:"text-center hosting-call-to-action-homepage",children:(0,n.jsx)(a.default,{href:"/about",passHref:!0,children:(0,n.jsx)("h2",{children:"Hosting an Alleycat?"})})})]})})}},5152:function(e,t,r){e.exports=r(638)},8217:function(e,t,r){"use strict";var n=r(6086),a=r(7294);t.useSubscription=function(e){var t=e.getCurrentValue,r=e.subscribe,i=a.useState((function(){return{getCurrentValue:t,subscribe:r,value:t()}}));e=i[0];var o=i[1];return i=e.value,e.getCurrentValue===t&&e.subscribe===r||(i=t(),o({getCurrentValue:t,subscribe:r,value:i})),a.useDebugValue(i),a.useEffect((function(){function e(){if(!a){var e=t();o((function(a){return a.getCurrentValue!==t||a.subscribe!==r||a.value===e?a:n({},a,{value:e})}))}}var a=!1,i=r(e);return e(),function(){a=!0,i()}}),[t,r]),i}},7161:function(e,t,r){"use strict";e.exports=r(8217)}},function(e){e.O(0,[885,5,774,888,179],(function(){return t=3685,e(e.s=t);var t}));var t=e.O();_N_E=t}]);