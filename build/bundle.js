var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function i(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function u(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function f(){return l(" ")}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function d(t,e){e=""+e,t.data!==e&&(t.data=e)}let b;function y(t){b=t}const v=[],w=[],m=[],g=[],_=Promise.resolve();let x=!1;function E(t){m.push(t)}let S=!1;const $=new Set;function O(){if(!S){S=!0;do{for(let t=0;t<v.length;t+=1){const e=v[t];y(e),N(e.$$)}for(v.length=0;w.length;)w.pop()();for(let t=0;t<m.length;t+=1){const e=m[t];$.has(e)||($.add(e),e())}m.length=0}while(v.length);for(;g.length;)g.pop()();x=!1,S=!1,$.clear()}}function N(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const T=new Set;function k(t,e){t&&t.i&&(T.delete(t),t.i(e))}function j(t,e,n,r){if(t&&t.o){if(T.has(t))return;T.add(t),(void 0).c.push(()=>{T.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function I(t){t&&t.c()}function P(t,n,o){const{fragment:s,on_mount:u,on_destroy:c,after_update:a}=t.$$;s&&s.m(n,o),E(()=>{const n=u.map(e).filter(i);c?c.push(...n):r(n),t.$$.on_mount=[]}),a.forEach(E)}function A(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function V(t,e){-1===t.$$.dirty[0]&&(v.push(t),x||(x=!0,_.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function C(e,i,o,s,u,c,h=[-1]){const l=b;y(e);const f=i.props||{},p=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:n(),dirty:h};let d=!1;if(p.ctx=o?o(e,f,(t,n,...r)=>{const i=r.length?r[0]:n;return p.ctx&&u(p.ctx[t],p.ctx[t]=i)&&(p.bound[t]&&p.bound[t](i),d&&V(e,t)),n}):[],p.update(),d=!0,r(p.before_update),p.fragment=!!s&&s(p.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);p.fragment&&p.fragment.l(t),t.forEach(a)}else p.fragment&&p.fragment.c();i.intro&&k(e.$$.fragment),P(e,i.target,i.anchor),O()}y(l)}class D{$destroy(){A(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var M=function(t,e){return(M=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function H(t,e){function n(){this.constructor=t}M(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function Y(t){return"function"==typeof t}var q=!1,F={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){t&&(new Error).stack;q=t},get useDeprecatedSynchronousErrorHandling(){return q}};function U(t){setTimeout((function(){throw t}),0)}var z={closed:!0,next:function(t){},error:function(t){if(F.useDeprecatedSynchronousErrorHandling)throw t;U(t)},complete:function(){}},B=function(){return Array.isArray||function(t){return t&&"number"==typeof t.length}}();function L(t){return null!==t&&"object"==typeof t}var R=function(){function t(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(t,e){return e+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t}(),G=function(){function t(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._unsubscribe=t)}return t.prototype.unsubscribe=function(){var e;if(!this.closed){var n=this._parentOrParents,r=this._unsubscribe,i=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof t)n.remove(this);else if(null!==n)for(var o=0;o<n.length;++o){n[o].remove(this)}if(Y(r))try{r.call(this)}catch(t){e=t instanceof R?J(t.errors):[t]}if(B(i)){o=-1;for(var s=i.length;++o<s;){var u=i[o];if(L(u))try{u.unsubscribe()}catch(t){e=e||[],t instanceof R?e=e.concat(J(t.errors)):e.push(t)}}}if(e)throw new R(e)}},t.prototype.add=function(e){var n=e;if(!e)return t.EMPTY;switch(typeof e){case"function":n=new t(e);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof t)){var r=n;(n=new t)._subscriptions=[r]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}var i=n._parentOrParents;if(null===i)n._parentOrParents=this;else if(i instanceof t){if(i===this)return n;n._parentOrParents=[i,this]}else{if(-1!==i.indexOf(this))return n;i.push(this)}var o=this._subscriptions;return null===o?this._subscriptions=[n]:o.push(n),n},t.prototype.remove=function(t){var e=this._subscriptions;if(e){var n=e.indexOf(t);-1!==n&&e.splice(n,1)}},t.EMPTY=function(t){return t.closed=!0,t}(new t),t}();function J(t){return t.reduce((function(t,e){return t.concat(e instanceof R?e.errors:e)}),[])}var K=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),Q=function(t){function e(n,r,i){var o=t.call(this)||this;switch(o.syncErrorValue=null,o.syncErrorThrown=!1,o.syncErrorThrowable=!1,o.isStopped=!1,arguments.length){case 0:o.destination=z;break;case 1:if(!n){o.destination=z;break}if("object"==typeof n){n instanceof e?(o.syncErrorThrowable=n.syncErrorThrowable,o.destination=n,n.add(o)):(o.syncErrorThrowable=!0,o.destination=new W(o,n));break}default:o.syncErrorThrowable=!0,o.destination=new W(o,n,r,i)}return o}return H(e,t),e.prototype[K]=function(){return this},e.create=function(t,n,r){var i=new e(t,n,r);return i.syncErrorThrowable=!1,i},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},e.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},e.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},e}(G),W=function(t){function e(e,n,r,i){var o,s=t.call(this)||this;s._parentSubscriber=e;var u=s;return Y(n)?o=n:n&&(o=n.next,r=n.error,i=n.complete,n!==z&&(Y((u=Object.create(n)).unsubscribe)&&s.add(u.unsubscribe.bind(u)),u.unsubscribe=s.unsubscribe.bind(s))),s._context=u,s._next=o,s._error=r,s._complete=i,s}return H(e,t),e.prototype.next=function(t){if(!this.isStopped&&this._next){var e=this._parentSubscriber;F.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},e.prototype.error=function(t){if(!this.isStopped){var e=this._parentSubscriber,n=F.useDeprecatedSynchronousErrorHandling;if(this._error)n&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(e.syncErrorThrowable)n?(e.syncErrorValue=t,e.syncErrorThrown=!0):U(t),this.unsubscribe();else{if(this.unsubscribe(),n)throw t;U(t)}}},e.prototype.complete=function(){var t=this;if(!this.isStopped){var e=this._parentSubscriber;if(this._complete){var n=function(){return t._complete.call(t._context)};F.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}},e.prototype.__tryOrUnsub=function(t,e){try{t.call(this._context,e)}catch(t){if(this.unsubscribe(),F.useDeprecatedSynchronousErrorHandling)throw t;U(t)}},e.prototype.__tryOrSetError=function(t,e,n){if(!F.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,n)}catch(e){return F.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=e,t.syncErrorThrown=!0,!0):(U(e),!0)}return!1},e.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},e}(Q);var X=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}();function Z(t){return t}function tt(t){return 0===t.length?Z:1===t.length?t[0]:function(e){return t.reduce((function(t,e){return e(t)}),e)}}var et=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(t,e,n){var r=this.operator,i=function(t,e,n){if(t){if(t instanceof Q)return t;if(t[K])return t[K]()}return t||e||n?new Q(t,e,n):new Q(z)}(t,e,n);if(r?i.add(r.call(i,this.source)):i.add(this.source||F.useDeprecatedSynchronousErrorHandling&&!i.syncErrorThrowable?this._subscribe(i):this._trySubscribe(i)),F.useDeprecatedSynchronousErrorHandling&&i.syncErrorThrowable&&(i.syncErrorThrowable=!1,i.syncErrorThrown))throw i.syncErrorValue;return i},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){F.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=e),!function(t){for(;t;){var e=t,n=e.closed,r=e.destination,i=e.isStopped;if(n||i)return!1;t=r&&r instanceof Q?r:null}return!0}(t)?console.warn(e):t.error(e)}},t.prototype.forEach=function(t,e){var n=this;return new(e=nt(e))((function(e,r){var i;i=n.subscribe((function(e){try{t(e)}catch(t){r(t),i&&i.unsubscribe()}}),r,e)}))},t.prototype._subscribe=function(t){var e=this.source;return e&&e.subscribe(t)},t.prototype[X]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return 0===t.length?this:tt(t)(this)},t.prototype.toPromise=function(t){var e=this;return new(t=nt(t))((function(t,n){var r;e.subscribe((function(t){return r=t}),(function(t){return n(t)}),(function(){return t(r)}))}))},t.create=function(e){return new t(e)},t}();function nt(t){if(t||(t=Promise),!t)throw new Error("no Promise impl found");return t}var rt=function(){function t(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return t.prototype=Object.create(Error.prototype),t}(),it=function(t){function e(e,n){var r=t.call(this)||this;return r.subject=e,r.subscriber=n,r.closed=!1,r}return H(e,t),e.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var t=this.subject,e=t.observers;if(this.subject=null,e&&0!==e.length&&!t.isStopped&&!t.closed){var n=e.indexOf(this.subscriber);-1!==n&&e.splice(n,1)}}},e}(G),ot=function(t){function e(e){var n=t.call(this,e)||this;return n.destination=e,n}return H(e,t),e}(Q),st=function(t){function e(){var e=t.call(this)||this;return e.observers=[],e.closed=!1,e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return H(e,t),e.prototype[K]=function(){return new ot(this)},e.prototype.lift=function(t){var e=new ut(this,this);return e.operator=t,e},e.prototype.next=function(t){if(this.closed)throw new rt;if(!this.isStopped)for(var e=this.observers,n=e.length,r=e.slice(),i=0;i<n;i++)r[i].next(t)},e.prototype.error=function(t){if(this.closed)throw new rt;this.hasError=!0,this.thrownError=t,this.isStopped=!0;for(var e=this.observers,n=e.length,r=e.slice(),i=0;i<n;i++)r[i].error(t);this.observers.length=0},e.prototype.complete=function(){if(this.closed)throw new rt;this.isStopped=!0;for(var t=this.observers,e=t.length,n=t.slice(),r=0;r<e;r++)n[r].complete();this.observers.length=0},e.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},e.prototype._trySubscribe=function(e){if(this.closed)throw new rt;return t.prototype._trySubscribe.call(this,e)},e.prototype._subscribe=function(t){if(this.closed)throw new rt;return this.hasError?(t.error(this.thrownError),G.EMPTY):this.isStopped?(t.complete(),G.EMPTY):(this.observers.push(t),new it(this,t))},e.prototype.asObservable=function(){var t=new et;return t.source=this,t},e.create=function(t,e){return new ut(t,e)},e}(et),ut=function(t){function e(e,n){var r=t.call(this)||this;return r.destination=e,r.source=n,r}return H(e,t),e.prototype.next=function(t){var e=this.destination;e&&e.next&&e.next(t)},e.prototype.error=function(t){var e=this.destination;e&&e.error&&this.destination.error(t)},e.prototype.complete=function(){var t=this.destination;t&&t.complete&&this.destination.complete()},e.prototype._subscribe=function(t){return this.source?this.source.subscribe(t):G.EMPTY},e}(st),ct=function(t){function e(e){var n=t.call(this)||this;return n._value=e,n}return H(e,t),Object.defineProperty(e.prototype,"value",{get:function(){return this.getValue()},enumerable:!0,configurable:!0}),e.prototype._subscribe=function(e){var n=t.prototype._subscribe.call(this,e);return n&&!n.closed&&e.next(this._value),n},e.prototype.getValue=function(){if(this.hasError)throw this.thrownError;if(this.closed)throw new rt;return this._value},e.prototype.next=function(e){t.prototype.next.call(this,this._value=e)},e}(st),at=function(t){function e(e,n){var r=t.call(this,e,n)||this;return r.scheduler=e,r.work=n,r.pending=!1,r}return H(e,t),e.prototype.schedule=function(t,e){if(void 0===e&&(e=0),this.closed)return this;this.state=t;var n=this.id,r=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(r,n,e)),this.pending=!0,this.delay=e,this.id=this.id||this.requestAsyncId(r,this.id,e),this},e.prototype.requestAsyncId=function(t,e,n){return void 0===n&&(n=0),setInterval(t.flush.bind(t,this),n)},e.prototype.recycleAsyncId=function(t,e,n){if(void 0===n&&(n=0),null!==n&&this.delay===n&&!1===this.pending)return e;clearInterval(e)},e.prototype.execute=function(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var n=this._execute(t,e);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(t,e){var n=!1,r=void 0;try{this.work(t)}catch(t){n=!0,r=!!t&&t||new Error(t)}if(n)return this.unsubscribe(),r},e.prototype._unsubscribe=function(){var t=this.id,e=this.scheduler,n=e.actions,r=n.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==r&&n.splice(r,1),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null},e}(function(t){function e(e,n){return t.call(this)||this}return H(e,t),e.prototype.schedule=function(t,e){return this},e}(G)),ht=function(){function t(e,n){void 0===n&&(n=t.now),this.SchedulerAction=e,this.now=n}return t.prototype.schedule=function(t,e,n){return void 0===e&&(e=0),new this.SchedulerAction(this,t).schedule(n,e)},t.now=function(){return Date.now()},t}(),lt=function(t){function e(n,r){void 0===r&&(r=ht.now);var i=t.call(this,n,(function(){return e.delegate&&e.delegate!==i?e.delegate.now():r()}))||this;return i.actions=[],i.active=!1,i.scheduled=void 0,i}return H(e,t),e.prototype.schedule=function(n,r,i){return void 0===r&&(r=0),e.delegate&&e.delegate!==this?e.delegate.schedule(n,r,i):t.prototype.schedule.call(this,n,r,i)},e.prototype.flush=function(t){var e=this.actions;if(this.active)e.push(t);else{var n;this.active=!0;do{if(n=t.execute(t.state,t.delay))break}while(t=e.shift());if(this.active=!1,n){for(;t=e.shift();)t.unsubscribe();throw n}}},e}(ht),ft=new et((function(t){return t.complete()}));function pt(t){return t?function(t){return new et((function(e){return t.schedule((function(){return e.complete()}))}))}(t):ft}function dt(t){return t&&"function"==typeof t.schedule}var bt=function(t){return function(e){for(var n=0,r=t.length;n<r&&!e.closed;n++)e.next(t[n]);e.complete()}};function yt(t,e){return new et((function(n){var r=new G,i=0;return r.add(e.schedule((function(){i!==t.length?(n.next(t[i++]),n.closed||r.add(this.schedule())):n.complete()}))),r}))}function vt(t,e){return e?yt(t,e):new et(bt(t))}function wt(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=t[t.length-1];return dt(n)?(t.pop(),yt(t,n)):vt(t)}function mt(t){var e=t.error;t.subscriber.error(e)}var gt=function(){function t(t,e,n){this.kind=t,this.value=e,this.error=n,this.hasValue="N"===t}return t.prototype.observe=function(t){switch(this.kind){case"N":return t.next&&t.next(this.value);case"E":return t.error&&t.error(this.error);case"C":return t.complete&&t.complete()}},t.prototype.do=function(t,e,n){switch(this.kind){case"N":return t&&t(this.value);case"E":return e&&e(this.error);case"C":return n&&n()}},t.prototype.accept=function(t,e,n){return t&&"function"==typeof t.next?this.observe(t):this.do(t,e,n)},t.prototype.toObservable=function(){var t,e;switch(this.kind){case"N":return wt(this.value);case"E":return t=this.error,new et(e?function(n){return e.schedule(mt,0,{error:t,subscriber:n})}:function(e){return e.error(t)});case"C":return pt()}throw new Error("unexpected notification kind value")},t.createNext=function(e){return void 0!==e?new t("N",e):t.undefinedValueNotification},t.createError=function(e){return new t("E",void 0,e)},t.createComplete=function(){return t.completeNotification},t.completeNotification=new t("C"),t.undefinedValueNotification=new t("N",void 0),t}(),_t=new lt(at),xt=function(){function t(){return Error.call(this),this.message="argument out of range",this.name="ArgumentOutOfRangeError",this}return t.prototype=Object.create(Error.prototype),t}(),Et=function(){function t(){return Error.call(this),this.message="no elements in sequence",this.name="EmptyError",this}return t.prototype=Object.create(Error.prototype),t}();function St(t,e){return function(n){if("function"!=typeof t)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return n.lift(new $t(t,e))}}var $t=function(){function t(t,e){this.project=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new Ot(t,this.project,this.thisArg))},t}(),Ot=function(t){function e(e,n,r){var i=t.call(this,e)||this;return i.project=n,i.count=0,i.thisArg=r||i,i}return H(e,t),e.prototype._next=function(t){var e;try{e=this.project.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}this.destination.next(e)},e}(Q),Nt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return H(e,t),e.prototype.notifyNext=function(t,e,n,r,i){this.destination.next(e)},e.prototype.notifyError=function(t,e){this.destination.error(t)},e.prototype.notifyComplete=function(t){this.destination.complete()},e}(Q),Tt=function(t){function e(e,n,r){var i=t.call(this)||this;return i.parent=e,i.outerValue=n,i.outerIndex=r,i.index=0,i}return H(e,t),e.prototype._next=function(t){this.parent.notifyNext(this.outerValue,t,this.outerIndex,this.index++,this)},e.prototype._error=function(t){this.parent.notifyError(t,this),this.unsubscribe()},e.prototype._complete=function(){this.parent.notifyComplete(this),this.unsubscribe()},e}(Q);function kt(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}var jt=kt(),It=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};function Pt(t){return!!t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}var At=function(t){if(t&&"function"==typeof t[X])return r=t,function(t){var e=r[X]();if("function"!=typeof e.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return e.subscribe(t)};if(It(t))return bt(t);if(Pt(t))return n=t,function(t){return n.then((function(e){t.closed||(t.next(e),t.complete())}),(function(e){return t.error(e)})).then(null,U),t};if(t&&"function"==typeof t[jt])return e=t,function(t){for(var n=e[jt]();;){var r=n.next();if(r.done){t.complete();break}if(t.next(r.value),t.closed)break}return"function"==typeof n.return&&t.add((function(){n.return&&n.return()})),t};var e,n,r,i=L(t)?"an invalid object":"'"+t+"'";throw new TypeError("You provided "+i+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")};function Vt(t,e,n,r,i){if(void 0===i&&(i=new Tt(t,n,r)),!i.closed)return e instanceof et?e.subscribe(i):At(e)(i)}function Ct(t,e){if(null!=t){if(function(t){return t&&"function"==typeof t[X]}(t))return function(t,e){return new et((function(n){var r=new G;return r.add(e.schedule((function(){var i=t[X]();r.add(i.subscribe({next:function(t){r.add(e.schedule((function(){return n.next(t)})))},error:function(t){r.add(e.schedule((function(){return n.error(t)})))},complete:function(){r.add(e.schedule((function(){return n.complete()})))}}))}))),r}))}(t,e);if(Pt(t))return function(t,e){return new et((function(n){var r=new G;return r.add(e.schedule((function(){return t.then((function(t){r.add(e.schedule((function(){n.next(t),r.add(e.schedule((function(){return n.complete()})))})))}),(function(t){r.add(e.schedule((function(){return n.error(t)})))}))}))),r}))}(t,e);if(It(t))return yt(t,e);if(function(t){return t&&"function"==typeof t[jt]}(t)||"string"==typeof t)return function(t,e){if(!t)throw new Error("Iterable cannot be null");return new et((function(n){var r,i=new G;return i.add((function(){r&&"function"==typeof r.return&&r.return()})),i.add(e.schedule((function(){r=t[jt](),i.add(e.schedule((function(){if(!n.closed){var t,e;try{var i=r.next();t=i.value,e=i.done}catch(t){return void n.error(t)}e?n.complete():(n.next(t),this.schedule())}})))}))),i}))}(t,e)}throw new TypeError((null!==t&&typeof t||t)+" is not observable")}function Dt(t,e){return e?Ct(t,e):t instanceof et?t:new et(At(t))}var Mt=function(){function t(t,e){void 0===e&&(e=Number.POSITIVE_INFINITY),this.project=t,this.concurrent=e}return t.prototype.call=function(t,e){return e.subscribe(new Ht(t,this.project,this.concurrent))},t}(),Ht=function(t){function e(e,n,r){void 0===r&&(r=Number.POSITIVE_INFINITY);var i=t.call(this,e)||this;return i.project=n,i.concurrent=r,i.hasCompleted=!1,i.buffer=[],i.active=0,i.index=0,i}return H(e,t),e.prototype._next=function(t){this.active<this.concurrent?this._tryNext(t):this.buffer.push(t)},e.prototype._tryNext=function(t){var e,n=this.index++;try{e=this.project(t,n)}catch(t){return void this.destination.error(t)}this.active++,this._innerSub(e,t,n)},e.prototype._innerSub=function(t,e,n){var r=new Tt(this,e,n),i=this.destination;i.add(r);var o=Vt(this,t,void 0,void 0,r);o!==r&&i.add(o)},e.prototype._complete=function(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()},e.prototype.notifyNext=function(t,e,n,r,i){this.destination.next(e)},e.prototype.notifyComplete=function(t){var e=this.buffer;this.remove(t),this.active--,e.length>0?this._next(e.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()},e}(Nt);function Yt(t){return void 0===t&&(t=Number.POSITIVE_INFINITY),function t(e,n,r){return void 0===r&&(r=Number.POSITIVE_INFINITY),"function"==typeof n?function(i){return i.pipe(t((function(t,r){return Dt(e(t,r)).pipe(St((function(e,i){return n(t,e,r,i)})))}),r))}:("number"==typeof n&&(r=n),function(t){return t.lift(new Mt(e,r))})}(Z,t)}function qt(){return Yt(1)}function Ft(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return qt()(wt.apply(void 0,t))}function Ut(t,e){return function(n){return n.lift(new zt(t,e))}}var zt=function(){function t(t,e){this.predicate=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new Bt(t,this.predicate,this.thisArg))},t}(),Bt=function(t){function e(e,n,r){var i=t.call(this,e)||this;return i.predicate=n,i.thisArg=r,i.count=0,i}return H(e,t),e.prototype._next=function(t){var e;try{e=this.predicate.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}e&&this.destination.next(t)},e}(Q);function Lt(t){return void 0===t&&(t=null),function(e){return e.lift(new Rt(t))}}var Rt=function(){function t(t){this.defaultValue=t}return t.prototype.call=function(t,e){return e.subscribe(new Gt(t,this.defaultValue))},t}(),Gt=function(t){function e(e,n){var r=t.call(this,e)||this;return r.defaultValue=n,r.isEmpty=!0,r}return H(e,t),e.prototype._next=function(t){this.isEmpty=!1,this.destination.next(t)},e.prototype._complete=function(){this.isEmpty&&this.destination.next(this.defaultValue),this.destination.complete()},e}(Q);var Jt=function(){function t(t,e){this.delay=t,this.scheduler=e}return t.prototype.call=function(t,e){return e.subscribe(new Kt(t,this.delay,this.scheduler))},t}(),Kt=function(t){function e(e,n,r){var i=t.call(this,e)||this;return i.delay=n,i.scheduler=r,i.queue=[],i.active=!1,i.errored=!1,i}return H(e,t),e.dispatch=function(t){for(var e=t.source,n=e.queue,r=t.scheduler,i=t.destination;n.length>0&&n[0].time-r.now()<=0;)n.shift().notification.observe(i);if(n.length>0){var o=Math.max(0,n[0].time-r.now());this.schedule(t,o)}else this.unsubscribe(),e.active=!1},e.prototype._schedule=function(t){this.active=!0,this.destination.add(t.schedule(e.dispatch,this.delay,{source:this,destination:this.destination,scheduler:t}))},e.prototype.scheduleNotification=function(t){if(!0!==this.errored){var e=this.scheduler,n=new Qt(e.now()+this.delay,t);this.queue.push(n),!1===this.active&&this._schedule(e)}},e.prototype._next=function(t){this.scheduleNotification(gt.createNext(t))},e.prototype._error=function(t){this.errored=!0,this.queue=[],this.destination.error(t),this.unsubscribe()},e.prototype._complete=function(){this.scheduleNotification(gt.createComplete()),this.unsubscribe()},e}(Q),Qt=function(){return function(t,e){this.time=t,this.notification=e}}();function Wt(t){return void 0===t&&(t=te),function(e){return e.lift(new Xt(t))}}var Xt=function(){function t(t){this.errorFactory=t}return t.prototype.call=function(t,e){return e.subscribe(new Zt(t,this.errorFactory))},t}(),Zt=function(t){function e(e,n){var r=t.call(this,e)||this;return r.errorFactory=n,r.hasValue=!1,r}return H(e,t),e.prototype._next=function(t){this.hasValue=!0,this.destination.next(t)},e.prototype._complete=function(){if(this.hasValue)return this.destination.complete();var t=void 0;try{t=this.errorFactory()}catch(e){t=e}this.destination.error(t)},e}(Q);function te(){return new Et}var ee=function(){function t(t){if(this.total=t,this.total<0)throw new xt}return t.prototype.call=function(t,e){return e.subscribe(new ne(t,this.total))},t}(),ne=function(t){function e(e,n){var r=t.call(this,e)||this;return r.total=n,r.count=0,r}return H(e,t),e.prototype._next=function(t){var e=this.total,n=++this.count;n<=e&&(this.destination.next(t),n===e&&(this.destination.complete(),this.unsubscribe()))},e}(Q);function re(t){return function(e){return 0===t?pt():e.lift(new ie(t))}}var ie=function(){function t(t){if(this.total=t,this.total<0)throw new xt}return t.prototype.call=function(t,e){return e.subscribe(new oe(t,this.total))},t}(),oe=function(t){function e(e,n){var r=t.call(this,e)||this;return r.total=n,r.ring=new Array,r.count=0,r}return H(e,t),e.prototype._next=function(t){var e=this.ring,n=this.total,r=this.count++;e.length<n?e.push(t):e[r%n]=t},e.prototype._complete=function(){var t=this.destination,e=this.count;if(e>0)for(var n=this.count>=this.total?this.total:this.count,r=this.ring,i=0;i<n;i++){var o=e++%n;t.next(r[o])}t.complete()},e}(Q);function se(t,e){var n=!1;return arguments.length>=2&&(n=!0),function(r){return r.lift(new ue(t,e,n))}}var ue=function(){function t(t,e,n){void 0===n&&(n=!1),this.accumulator=t,this.seed=e,this.hasSeed=n}return t.prototype.call=function(t,e){return e.subscribe(new ce(t,this.accumulator,this.seed,this.hasSeed))},t}(),ce=function(t){function e(e,n,r,i){var o=t.call(this,e)||this;return o.accumulator=n,o._seed=r,o.hasSeed=i,o.index=0,o}return H(e,t),Object.defineProperty(e.prototype,"seed",{get:function(){return this._seed},set:function(t){this.hasSeed=!0,this._seed=t},enumerable:!0,configurable:!0}),e.prototype._next=function(t){if(this.hasSeed)return this._tryNext(t);this.seed=t,this.destination.next(t)},e.prototype._tryNext=function(t){var e,n=this.index++;try{e=this.accumulator(this.seed,t,n)}catch(t){this.destination.error(t)}this.seed=e,this.destination.next(e)},e}(Q);function ae(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=t[t.length-1];return dt(n)?(t.pop(),function(e){return Ft(t,e,n)}):function(e){return Ft(t,e)}}function he(t,e){return"function"==typeof e?function(n){return n.pipe(he((function(n,r){return Dt(t(n,r)).pipe(St((function(t,i){return e(n,t,r,i)})))})))}:function(e){return e.lift(new le(t))}}var le=function(){function t(t){this.project=t}return t.prototype.call=function(t,e){return e.subscribe(new fe(t,this.project))},t}(),fe=function(t){function e(e,n){var r=t.call(this,e)||this;return r.project=n,r.index=0,r}return H(e,t),e.prototype._next=function(t){var e,n=this.index++;try{e=this.project(t,n)}catch(t){return void this.destination.error(t)}this._innerSub(e,t,n)},e.prototype._innerSub=function(t,e,n){var r=this.innerSubscription;r&&r.unsubscribe();var i=new Tt(this,e,n),o=this.destination;o.add(i),this.innerSubscription=Vt(this,t,void 0,void 0,i),this.innerSubscription!==i&&o.add(this.innerSubscription)},e.prototype._complete=function(){var e=this.innerSubscription;e&&!e.closed||t.prototype._complete.call(this),this.unsubscribe()},e.prototype._unsubscribe=function(){this.innerSubscription=null},e.prototype.notifyComplete=function(e){this.destination.remove(e),this.innerSubscription=null,this.isStopped&&t.prototype._complete.call(this)},e.prototype.notifyNext=function(t,e,n,r,i){this.destination.next(e)},e}(Nt);var pe=function(){function t(t,e){this.predicate=t,this.inclusive=e}return t.prototype.call=function(t,e){return e.subscribe(new de(t,this.predicate,this.inclusive))},t}(),de=function(t){function e(e,n,r){var i=t.call(this,e)||this;return i.predicate=n,i.inclusive=r,i.index=0,i}return H(e,t),e.prototype._next=function(t){var e,n=this.destination;try{e=this.predicate(t,this.index++)}catch(t){return void n.error(t)}this.nextOrComplete(t,e)},e.prototype.nextOrComplete=function(t,e){var n=this.destination;Boolean(e)?n.next(t):(this.inclusive&&n.next(t),n.complete())},e}(Q);const be=new st,ye=be.pipe(se((t,e)=>t+("win"===e.status?1:0),0),ae(0)),ve=(be.pipe(se((t,e)=>t+("loose"===e.status?1:0),0),ae(0)),be.pipe(se(t=>t+1,0),ae(0)));function we(e){let n,r,i,o,s,b,y;return{c(){n=h("div"),r=h("div"),r.textContent="Score",i=f(),o=h("div"),s=l(e[0]),b=l("/"),y=l(e[1]),p(n,"class","scoreboard svelte-zil2xb")},m(t,e){c(t,n,e),u(n,r),u(n,i),u(n,o),u(o,s),u(o,b),u(o,y)},p(t,[e]){1&e&&d(s,t[0]),2&e&&d(y,t[1])},i:t,o:t,d(t){t&&a(n)}}}function me(t,e,n){let r,i;return s(t,ye,t=>n(0,r=t)),s(t,ve,t=>n(1,i=t)),[r,i]}class ge extends D{constructor(t){super(),C(this,t,me,we,o,{})}}const _e=()=>{return xe[(t=0,e=xe.length-1,t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t)];var t,e};let xe=[{name:"Go to Town Center",keys:["h"]},{name:"Select all Town Center",keys:["a","h","j"]}];const Ee=new ct(_e()),Se=new st,$e=Ee.pipe(he(t=>{return Se.pipe((e=t.keys.length,function(t){return 0===e?pt():t.lift(new ee(e))}),ae([]),se((t,e)=>[...t,e]));var e})),Oe=t=>{return Se.pipe(ae({goal:t,keys:[],index:0,status:"run",start:null,end:null}),se((t,e)=>({...t,keys:[...t.keys,e],start:null===t.start?Date.now():t.start})),St(e=>{const{keys:n}=e,r=n.length===t.keys.length,i=n[n.length-1]!==t.keys[n.length-1]?"loose":r?"win":"run";return{...e,status:i,end:"run"!==i?Date.now():e.end}}),(e=({status:t})=>"run"===t,void 0===(n=!0)&&(n=!1),function(t){return t.lift(new pe(e,n))}),function(t,e){var n=arguments.length>=2;return function(r){return r.pipe(t?Ut((function(e,n){return t(e,n,r)})):Z,re(1),n?Lt(e):Wt((function(){return new Et})))}}());var e,n},Ne=Ee.pipe(he(t=>Oe(t))),Te=Ne.pipe(function(t,e){void 0===e&&(e=_t);var n,r=(n=t)instanceof Date&&!isNaN(+n)?+t-e.now():Math.abs(t);return function(t){return t.lift(new Jt(r,e))}}(200));function ke(e){let n,r,i,o,s,b,y,v,w,m=e[1].name+"";return{c(){n=h("div"),r=h("div"),i=h("div"),o=l(m),s=f(),b=h("div"),y=h("img"),p(i,"class","instruction-text bold svelte-8p0y6p"),p(r,"class","instructions-texts-container svelte-8p0y6p"),p(y,"width","100%"),p(y,"alt","Town Center"),y.src!==(v="/htkaoe2/images/town_center.png")&&p(y,"src","/htkaoe2/images/town_center.png"),p(b,"class","image-container svelte-8p0y6p"),p(n,"class",w="instructions-container "+e[0]+" svelte-8p0y6p")},m(t,e){c(t,n,e),u(n,r),u(r,i),u(i,o),u(n,s),u(n,b),u(b,y)},p(t,[e]){2&e&&m!==(m=t[1].name+"")&&d(o,m),1&e&&w!==(w="instructions-container "+t[0]+" svelte-8p0y6p")&&p(n,"class",w)},i:t,o:t,d(t){t&&a(n)}}}function je(t,e,n){let r,i;return s(t,Ee,t=>n(1,r=t)),Ne.subscribe(t=>{n(0,i=t.status)}),Te.subscribe(()=>{n(0,i="")}),[i,r]}class Ie extends D{constructor(t){super(),C(this,t,je,ke,o,{})}}function Pe(t,e,n){const r=t.slice();return r[1]=e[n],r}function Ae(e){let n;return{c(){n=h("div"),n.textContent="...",p(n,"class","key svelte-1xx7eas")},m(t,e){c(t,n,e)},p:t,d(t){t&&a(n)}}}function Ve(t){let e,n=t[0],r=[];for(let e=0;e<n.length;e+=1)r[e]=Ce(Pe(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=l("")},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);c(t,e,n)},p(t,i){if(1&i){let o;for(n=t[0],o=0;o<n.length;o+=1){const s=Pe(t,n,o);r[o]?r[o].p(s,i):(r[o]=Ce(s),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){!function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(r,t),t&&a(e)}}}function Ce(t){let e,n,r=(null===t[1]?"...":t[1])+"";return{c(){e=h("div"),n=l(r),p(e,"class","key svelte-1xx7eas")},m(t,r){c(t,e,r),u(e,n)},p(t,e){1&e&&r!==(r=(null===t[1]?"...":t[1])+"")&&d(n,r)},d(t){t&&a(e)}}}function De(e){let n;function r(t,e){return 0!==t[0].length?Ve:Ae}let i=r(e),o=i(e);return{c(){n=h("div"),o.c(),p(n,"class","container svelte-1xx7eas")},m(t,e){c(t,n,e),o.m(n,null)},p(t,[e]){i===(i=r(t))&&o?o.p(t,e):(o.d(1),o=i(t),o&&(o.c(),o.m(n,null)))},i:t,o:t,d(t){t&&a(n),o.d()}}}function Me(t,e,n){let r;return s(t,$e,t=>n(0,r=t)),$e.subscribe(t=>{console.log("vite state",t)}),[r]}class He extends D{constructor(t){super(),C(this,t,Me,De,o,{})}}function Ye(e){let n,r,i,o,s,l,d,b,y,v,w,m;return s=new ge({}),d=new Ie({}),y=new He({}),{c(){n=h("link"),r=f(),i=h("div"),o=h("div"),I(s.$$.fragment),l=f(),I(d.$$.fragment),b=f(),I(y.$$.fragment),p(n,"href","https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"),p(n,"rel","stylesheet"),p(o,"class","container svelte-x9ljty"),p(i,"class","background svelte-x9ljty")},m(t,a){var h,f,p,g;u(document.head,n),c(t,r,a),c(t,i,a),u(i,o),P(s,o,null),u(o,l),P(d,o,null),u(o,b),P(y,o,null),v=!0,w||(h=window,f="keydown",p=e[0],h.addEventListener(f,p,g),m=()=>h.removeEventListener(f,p,g),w=!0)},p:t,i(t){v||(k(s.$$.fragment,t),k(d.$$.fragment,t),k(y.$$.fragment,t),v=!0)},o(t){j(s.$$.fragment,t),j(d.$$.fragment,t),j(y.$$.fragment,t),v=!1},d(t){a(n),t&&a(r),t&&a(i),A(s),A(d),A(y),w=!1,m()}}}function qe(t){return Ne.subscribe(t=>{console.log("state",t),be.next(t)}),Te.subscribe(()=>{Ee.next(_e())}),console.log("/htkaoe2/"),[function(t){console.log("event",t.key),Se.next(t.key)}]}return new class extends D{constructor(t){super(),C(this,t,qe,Ye,o,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
