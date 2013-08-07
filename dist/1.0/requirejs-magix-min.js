define("magix/magix",function(){[].slice;var e=/\/\.\/|\/[^\/]+?\/\.{2}\/|([^:\/])\/\/+/,t=/\/[^\/]*$/,n=/[#?].*$/,r="",i=/([^=&?\/#]+)=([^&=#?]*)/g,a="pathname",o=/^https?:\/\//i,c={},f=0,u="/",s="vframe",v={iniFile:"app/ini",appName:"app",appHome:"./",tagName:s,rootId:"magix_vf_root"},p=c.hasOwnProperty,l=function(e){return function(t,n,r){switch(arguments.length){case 0:r=e;break;case 1:r=C.isObject(t)?g(e,t):m(e,t)?e[t]:null;break;case 2:null===n?(delete e[t],r=n):e[t]=r=n}return r}},d=function(e){var t=this;t.c=[],t.x=e||20,t.b=t.x+5},h=function(e){return new d(e)},m=function(e,t){return e?p.call(e,t):0},g=function(e,t,n){for(var r in t)n&&m(n,r)||(e[r]=t[r]);return e};g(d.prototype,{get:function(e){var t,n=this,r=n.c;return e=a+e,m(r,e)&&(t=r[e],t.f>=1&&(t.f++,t.t=f++,t=t.v)),t},set:function(e,t){var n=this,r=n.c;e=a+e;var i=r[e];if(!m(r,e)){if(r.length>=n.b){r.sort(function(e,t){return t.f==e.f?t.t-e.t:t.f-e.f});for(var o=n.b-n.x;o--;)i=r.pop(),delete r[i.k]}i={},r.push(i),r[e]=i}return i.k=e,i.v=t,i.f=1,i.t=f++,i},del:function(e){e=a+e;var t=this.c,n=t[e];n&&(n.f=-1e5,n.v=r,delete t[e])},has:function(e){return e=a+e,m(this.c,e)}});var w=h(60),x=h(),b=function(e,t,n,r,i,a){for(C.isArray(e)||(e=[e]),t&&(C.isArray(t)||t.callee)||(t=[t]),r=0;e.length>r;r++)try{a=e[r],i=C.isFunction(a)&&a.apply(n,t)}catch(o){}return i},y=function(){},C={isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},mix:g,has:m,safeExec:b,noop:y,config:l(v),start:function(e){var t=this;e=g(v,e),t.libEnv(e),e.ready&&(b(e.ready),delete e.ready),t.libRequire(e.iniFile,function(n){v=g(e,n,e),v.tagNameChanged=v.tagName!=s;var r=e.progress;t.libRequire(["magix/router","magix/vom"],function(n,i){n.on("!ul",i.locChged),n.on("changed",i.locChged),r&&i.on("progress",r),t.libRequire(e.extensions,n.start)})})},keys:Object.keys||function(e){var t=[];for(var n in e)m(e,n)&&t.push(n);return t},local:l({}),path:function(i,a){var c=i+"\n"+a,f=x.get(c);if(!f){if(o.test(a))f=a;else if(i=i.replace(n,r).replace(t,r)+u,a.charAt(0)==u){var s=o.test(i)?8:0,v=i.indexOf(u,s);f=i.substring(0,v)+a}else f=i+a;for(;e.test(f);)f=f.replace(e,"$1/");x.set(c,f)}return f},pathToObject:function(e,t){var c=w.get(e);if(!c){var c={},f={},s=r;if(n.test(e)?s=e.replace(n,r):~e.indexOf("=")||(s=e),s&&o.test(s)){var v=s.indexOf(u,8);s=-1==v?u:s.substring(v)}e.replace(i,function(e,n,r){if(t)try{r=decodeURIComponent(r)}catch(i){}f[n]=r}),c[a]=s,c.params=f,w.set(e,c)}return c},objectToPath:function(e,t){var n,r=e[a],i=[],o=e.params;for(var c in o)n=o[c],t&&encodeURIComponent(n),i.push(c+"="+n);return r+"?"+i.join("&")},tmpl:function(e,t){return 1==arguments.length?{v:c[e],h:m(c,e)}:c[e]=t},listToMap:function(e,t){var n,r,i,a={};if(C.isString(e)&&(e=e.split(",")),e&&(i=e.length))for(n=0;i>n;n++)r=e[n],a[t?r[t]:r]=t?r:1;return a},cache:h},E=Object.prototype.toString;return g(C,{libRequire:function(e,t){C.isArray(e)||(e=[e]),e?require(e,t):t&&t()},libEnv:function(e){var t=this,n=e.appHome,i=location;i.protocol;var a=e.appName;n=t.path(i.href,n+u),e.appHome=n;var o=e.debug;o&&(o=0==n.indexOf(i.protocol+u+u+i.host+u));var c=r;c=o?Date.now():e.appTag,c&&(c+=".js");var f={};f[a]=n+a+"/",requirejs.config({paths:f})},isArray:$.isArray,isFunction:$.isFunction,isObject:function(e){return"[object Object]"==E.call(e)},isString:function(e){return"[object String]"==E.call(e)},isNumber:function(e){return"[object Number]"==E.call(e)},isRegExp:function(e){return"[object RegExp]"==E.call(e)},extend:function(e,t,n,r){e.superclass=t.prototype;var i=function(){};return i.prototype=t.prototype,e.prototype=new i,C.mix(e.prototype,n),C.mix(e,r),e.prototype.constructor=e,e}})}),define("magix/router",["magix/magix","magix/event"],function(e,t){var n,r,i,a,o,c=window,f="",u="pathname",s=e.has,v=e.mix,p=document,l=/^UTF-8$/i.test(p.charset||p.characterSet||"UTF-8"),d=e.config(),h=e.cache(),m=e.cache(),g=/#.*$/,w=/^[^#]*#?!?/,x="params",b=d.nativeHistory,y=function(t,n,r){if(t){r=this[x],e.isArray(t)||(t=t.split(","));for(var i=0;t.length>i&&!(n=s(r,t[i]));i++);}return n},C=function(){return s(this,u)},E=function(){return s(this,"view")},M=function(){var e=this,t=e.hash,n=e.query;return t[u]!=n[u]},V=function(e){var t=this,n=t.hash,r=t.query;return n[x][e]!=r[x][e]},j=function(e){var t=this,n=t.hash;return s(n[x],e)},I=function(e){var t=this,n=t.query;return s(n[x],e)},T=function(e){var t=this,n=t[x];return n[e]},O=function(t){var n=e.pathToObject(t,l),r=n[u];return r&&o&&(n[u]=e.path(c.location[u],r)),n},k=v({getView:function(t){if(!i){i={rs:d.routes||{},nf:d.notFoundView};var n=d.defaultView;if(!n)throw Error("unset defaultView");i.home=n;var r=d.defaultPathname||f;i.rs[r]=n,i[u]=r}var o;t||(t=i[u]);var c=i.rs;return o=e.isFunction(c)?c.call(d,t):c[t],{view:o?o:i.nf||i.home,pathname:o||a?t:i.nf?t:i[u]}},start:function(){var e=k,t=c.history;a=b&&t.pushState,o=b&&!a,a?e.useState():e.useHash(),e.route()},parseQH:function(e){e=e||c.location.href;var t=k,n=h.get(e);if(!n){var r=e.replace(g,f),i=e.replace(w,f),a=O(r),o=O(i),s={};v(s,a[x]),v(s,o[x]),n={pathnameDiff:M,paramDiff:V,hashOwn:j,queryOwn:I,get:T,href:e,srcQuery:r,srcHash:i,query:a,hash:o,params:s},h.set(e,n)}if(!n.view){var p;p=b?n.hash[u]||n.query[u]:n.hash[u];var l=t.getView(p);v(n,l)}return n},getChged:function(e,t){var n=e.href,r=t.href,i=n+"\n"+r,a=m.get(i);if(a||(i=r+"\n"+i,a=m.get(i)),!a){var o;a={params:{}},e[u]!=t[u]&&(a[u]=1,o=1),e.view!=t.view&&(a.view=1,o=1);var c,f=e[x],s=t[x];for(c in f)f[c]!=s[c]&&(o=1,a[x][c]=1);for(c in s)f[c]!=s[c]&&(o=1,a[x][c]=1);a.occur=o,a.isParam=y,a.isPathname=C,a.isView=E,m.set(i,a)}return a},route:function(){var e=k,t=e.parseQH(),i=r||{params:{},href:"~"},a=!r;r=t;var o=e.getChged(i,t);o.occur&&(n=t,e.fire("changed",{location:t,changed:o,force:a}))},navigate:function(t,r,i){var c=k;if(!r&&e.isObject(t)&&(r=t,t=f),r&&(t=e.objectToPath({params:r,pathname:t},l)),t){var p=O(t),d={};if(d[x]=v({},p[x]),d[u]=p[u],d[u]){if(o){var h=n.query;if(h&&(h=h[x]))for(var m in h)s(h,m)&&!s(d[x],m)&&(d[x][m]=f)}}else{var g=v({},n[x]);d[x]=v(g,d[x]),d[u]=n[u]}var w,b=e.objectToPath(d);w=a?b!=n.srcQuery:b!=n.srcHash,w&&(a?(c.poped=1,history[i?"replaceState":"pushState"](null,null,b),c.route()):(v(d,n,d),d.srcHash=b,d.hash={params:d[x],pathname:d[u]},c.fire("!ul",{loc:n=d}),b="#!"+b,i?location.replace(b):location.hash=b))}}},t);return k.useState=function(){var e=k,t=location.href;$(c).on("popstate",function(){var n=location.href==t;(e.poped||!n)&&(e.poped=1,e.route())},!1)},k.useHash=function(){$(c).on("hashchange",k.route,!1)},k}),define("magix/body",["magix/magix"],function(e){var t=e.has;e.mix;var n,r=e.listToMap("submit,focusin,focusout,mouseenter,mouseleave,mousewheel,change"),i=document.body,a={},o="mx-owner",c="mx-ie",f={},u=65536,s=function(e){return e.id||(e.id="mx-e-"+u--)},v=function(e,t,n){return n?e.setAttribute(t,n):n=e.getAttribute(t),n},p={process:function(e){for(var r=e.target||e.srcElement;r&&1!=r.nodeType;)r=r.parentNode;var a=r,u=e.type,p=f[u]||(f[u]=RegExp("(?:^|,)"+u+"(?:,|$)"));if(!p.test(v(r,c))){for(var l,d,h="mx-"+u,m=[];a&&a!=i&&(l=v(a,h),d=v(a,c),!l&&!p.test(d));)m.push(a),a=a.parentNode;if(l){var g=v(a,o);if(!g)for(var w=a,x=n.all();w&&w!=i;){if(t(x,w.id)){v(a,o,g=w.id);break}w=w.parentNode}if(!g)throw Error("miss "+o+":"+l);var b=n.get(g),y=b&&b.view;y&&y.processEvent({info:l,se:e,tId:s(r),cId:s(a)})}else for(var C,d;m.length;)C=m.shift(),d=v(C,c),p.test(d)||(d=d?d+","+u:u,v(C,c,d))}},on:function(e,t){var o=this;if(a[e])a[e]++;else{n=t,a[e]=1;var c=r[e];c?o.unbubble(0,i,e):i["on"+e]=function(e){e=e||window.event,e&&o.process(e)}}},un:function(e){var t=this,n=a[e];if(n>0){if(n--,!n){var o=r[e];o?t.unbubble(1,i,e):i["on"+e]=null}a[e]=n}}};return p.unbubble=function(e,t,n){var r=e?"undelegate":"delegate";$(t)[r]("[mx-"+n+"]",n,p.process)},p}),define("magix/event",["magix/magix"],function(e){var t=function(e){return"~"+e},n=e.safeExec,r={fire:function(e,r,i,a){var o=t(e),c=this,f=c[o];if(f){r||(r={}),r.type||(r.type=e);for(var u,s,v=f.length,p=v-1;v--;)u=a?v:p-v,s=f[u],(s.d||s.r)&&(f.splice(u,1),p--),s.d||n(s.f,r,c)}i&&delete c[o]},on:function(n,r,i){var a=t(n),o=this[a]||(this[a]=[]);e.isNumeric(i)?o.splice(i,0,{f:r}):o.push({f:r,r:i})},un:function(e,n){var r=t(e),i=this[r];if(i)if(n){for(var a,o=i.length-1;o>=0;o--)if(a=i[o],a.f==n&&!a.d){a.d=1;break}}else delete this[r]}};return r}),define("magix/vframe",["magix/magix","magix/event","magix/view"],function(e,t,n){var r,i,a=document,o=65536,c=window,f=c.CollectGarbage||e.noop,u=e.mix,s=e.config("tagName"),v=e.config("rootId"),p=!e.config("tagNameChanged"),l=e.has,d="mx-view",h=p?"mx-defer":"mx-vframe",m="alter",g="created",w=function(e){return"object"==typeof e?e:a.getElementById(e)},x=function(e,t){return w(e).getElementsByTagName(t)},b=function(e){return a.createElement(e)};b(s);var y,C=function(e){return e.id||(e.id="magix_vf_"+o--)},E=/<script[^>]*>[\s\S]*?<\/script>/gi,M=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1<<31,t.rM={}};return u(M,{root:function(e,t){if(!r){y=t;var n=w(v);n||(n=b(s),n.id=v,a.body.insertBefore(n,a.body.firstChild)),r=new M(v),e.add(r)}return r}}),u(u(M.prototype,t),{mountView:function(t,r){var i=this,a=w(i.id);if(a._bak?a._chgd=1:(a._bak=1,a._tmpl=a.innerHTML.replace(E,"")),i.unmountView(),t){var o=e.pathToObject(t),c=o.pathname,f=--i.sign;e.libRequire(c,function(e){if(f==i.sign){var t=i.owner;n.prepare(e);var s=new e({owner:i,id:i.id,$:w,path:c,vom:t,location:y});i.view=s,s.on("interact",function(e){e.tmpl||(a._chgd&&(a.innerHTML=a._tmpl),i.mountZoneVframes(0,0,1)),s.on("rendered",function(){i.mountZoneVframes(0,0,1)}),s.on("prerender",function(){i.unmountZoneVframes()||i.cAlter({caused:i.id})}),s.on("inited",function(){i.viewInited=1,i.fire("viewInited",{view:s})})},0),r=r||{},s.load(u(r,o.params,r))}})}},unmountView:function(){var e=this;if(e.view){i||(i={caused:e.id}),e.unmountZoneVframes(),e.cAlter(i),e.view.destroy();var t=w(e.id);t&&t._bak&&(t.innerHTML=t._tmpl),delete e.view,delete e.viewInited,i=0,e.fire("viewUnmounted"),f()}e.un("viewInited"),e.sign--},mountVframe:function(e,t,n,r){var i=this,a=i.owner,o=a.get(e);return o||(o=new M(e),o.pId=i.id,l(i.cM,e)||i.cC++,i.cM[e]=r,a.add(o)),o.mountView(t,n),o},mountZoneVframes:function(e,t,n){var r=this;r.unmountZoneVframes(e);var i=e||r.id,a=x(i,s),o=a.length,c={};if(o)for(var f,u,v,m,g=0;o>g;g++)if(f=a[g],u=C(f),!l(c,u)&&(v=f.getAttribute(d),m=!f.getAttribute(h)==p,m||v)){r.mountVframe(u,v,t,n);for(var w,b=x(f,s),y=0,E=b.length;E>y;y++)w=b[y],v=w.getAttribute(d),m=!f.getAttribute(h)==p,m||v||(c[C(w)]=1)}r.cC==r.rC&&r.cCreated({})},unmountVframe:function(e){var t=this;e=e||t.id;var n=t.owner,r=n.get(e);if(r){var i=r.fcc;r.unmountView(),n.remove(e,i),t.fire("destroy");var a=n.get(r.pId);a&&l(a.cM,e)&&(delete a.cM[e],a.cC--)}},unmountZoneVframes:function(e){var t,n,r=this;if(e){t=x(e,s);for(var i,a={},o=r.cM,c=t.length-1;c>=0;c--)i=t[c].id,l(o,i)&&(a[i]=1);t=a}else t=r.cM;for(var f in t)n=!0,r.unmountVframe(f);return n},cCreated:function(e){var t=this,n=t.view;n&&!t.fcc&&(t.fcc=1,delete t.fca,n.fire(g,e),t.fire(g,e));var r=t.owner;r.vfCreated();var i=t.id,a=r.get(t.pId);a&&!l(a.rM,i)&&(a.rM[i]=a.cM[i],a.rC++,a.rC==a.cC&&a.cCreated(e))},cAlter:function(e){var t=this;if(delete t.fcc,!t.fca){var n=t.view,r=t.id;n&&(t.fca=1,n.fire(m,e),t.fire(m,e));var i=t.owner,a=i.get(t.pId);if(a&&l(a.rM,r)){var o=a.rM[r];a.rC--,delete a.rM[r],o&&a.cAlter(e)}}},locChged:function(t,n){var r=this,i=r.view;if(i&&i.sign&&i.rendered){var a=i.olChanged(n),o={location:t,changed:n,prevent:function(){this.cs=[]},toChildren:function(t){t=t||[],e.isString(t)&&(t=t.split(",")),this.cs=t}};a&&e.safeExec(i.locationChange,o,i);for(var c,f=o.cs||e.keys(r.cM),u=0,s=f.length,v=r.owner;s>u;u++)c=v.get(f[u]),c&&c.locChged(t,n)}}}),M}),define("magix/view",["magix/magix","magix/event","magix/body"],function(e,t,n){var r=e.safeExec,i=e.has,a=",",o=[],c=e.mix,f=["render","renderUI"],u="~",s=function(e){return function(){var t,n=this,r=n.notifyUpdate();return r&&(t=e.apply(n,arguments)),t}},v=e.cache(40),p=function(e){var t=this;c(t,e),t.sign=1};c(p,{wrapUpdate:function(){var t=this;if(!t[u]){t[u]=1;for(var n,r,i=t.prototype,a=f.length-1;a>-1;a--)r=f[a],n=i[r],e.isFunction(n)&&n!=e.noop&&(i[r]=s(n))}}});var l=p.prototype,d=window.CollectGarbage||e.noop,h=/<[a-z]+(?:[^">]|"[^"]*")+(?=>)/g,m=/\smx-owner\s*=/,g=/\smx-[^v][a-z]+\s*=/,w=function(e){return!m.test(e)&&g.test(e)?e+' mx-owner="'+w.t+'"':e},x={prevent:function(e){e=e||this.domEvent,e.preventDefault?e.preventDefault():e.returnValue=!1},stop:function(e){e=e||this.domEvent,e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},halt:function(e){this.prevent(e),this.stop(e)}},b=/(\w+)(?:<(\w+)>)?(?:{([\s\S]*)})?/,y=/(\w+):([^,]+)/g;c(l,t),c(l,{render:e.noop,locationChange:e.noop,init:e.noop,hasTmpl:!0,enableEvent:!0,load:function(){var e=this,t=e.hasTmpl,n=arguments,a=e.sign,c=i(e,"template"),f=function(i){if(a==e.sign){c||(e.template=e.wrapMxEvent(i)),e.delegateEvents(),e.fire("interact",{tmpl:t},1),r(e.init,n,e),e.fire("inited",0,1),r(e.render,o,e);var f=!t&&!e.rendered;f&&(e.rendered=!0,e.fire("primed",null,1))}};t&&!c?e.fetchTmpl(f):f()},beginUpdate:function(){var e=this;e.sign&&e.rendered&&(e.fire("refresh",0,1),e.fire("prerender"))},endUpdate:function(){var e=this;e.sign&&(e.rendered||e.fire("primed",0,1),e.rendered=!0,e.fire("rendered"),d())},notifyUpdate:function(){var e=this;return e.sign&&(e.sign++,e.fire("rendercall")),e.sign},wrapMxEvent:function(e){return w.t=this.id,(e+"").replace(h,w)},setViewHTML:function(e){var t,n=this;n.beginUpdate(),n.sign&&(t=n.$(n.id),t&&(t.innerHTML=e)),n.endUpdate()},observeLocation:function(t){var n,r=this;r.$ol||(r.$ol={keys:[]}),n=r.$ol;var i=n.keys;e.isObject(t)&&(n.pn=t.pathname,t=t.keys),t&&(n.keys=i.concat((t+"").split(a)))},olChanged:function(e){var t=this,n=t.$ol;if(n){var r=0;if(n.pn&&(r=e.isPathname()),!r){var i=n.keys;r=e.isParam(i)}return r}return 1},destroy:function(){var e=this;e.fire("refresh",0,1),e.fire("destroy",0,1,1),e.delegateEvents(1),e.sign=0},parentView:function(){var e=this,t=e.vom,n=e.owner,r=t.get(n.pId),i=null;return r&&r.viewInited&&(i=r.view),i},processEvent:function(e){var t=this;if(t.enableEvent&&t.sign){var n=e.info,i=e.se,a=v.get(n);a||(a=n.match(b),a={n:a[1],f:a[2],i:a[3],p:{}},a.i&&a.i.replace(y,function(e,t,n){a.p[t]=n}),v.set(n,a));var o=t.events;if(o){var f=o[i.type],u=x[a.f];u&&u.call(x,i),u=f&&f[a.n],u&&r(u,c({view:t,currentId:e.cId,targetId:e.tId,domEvent:i,events:o,params:a.p},x),f)}}},delegateEvents:function(e){var t=this,r=t.events,i=e?n.un:n.on,a=t.vom;for(var o in r)i.call(n,o,a)}});var C=e.config("appHome"),E=e.config("debug")?"?t="+Date.now():"",M=function(t,n,r){for(var a in n)e.isObject(n[a])?(i(t,a)||(t[a]={}),M(t[a],n[a],1)):r&&(t[a]=n[a])};return p.prototype.fetchTmpl=function(t){var n=this,i="template"in n;if(i)t(tmpl);else{var a=e.tmpl(n.path);if(a.h)t(a.v);else{var o=C+n.path+".html",c=M[o],f=function(r){t(e.tmpl(n.path,r))};c?c.push(f):(c=M[o]=[f],$.ajax({url:o+E,success:function(e){r(c,e),delete M[o]},error:function(e,t){r(c,t),delete M[o]}}))}}},p.extend=function(t,n,i){var a=this,o=function(){o.superclass.constructor.apply(this,arguments),n&&r(n,arguments,this)};return o.extend=a.extend,e.extend(o,a,t,i)},p.prepare=function(e){var t=this;if(!e.wrapUpdate){e.wrapUpdate=t.wrapUpdate,e.extend=t.extend;for(var n,r=e.prototype,i=e.superclass;i;)n=i.constructor,M(r,n.prototype),i=n.superclass}e.wrapUpdate()},p}),define("magix/vom",["magix/vframe","magix/magix","magix/event"],function(e,t,n){var r=t.has,i=t.mix,a=0,o=0,c=0,f=0,u={},s={},v=t.mix({all:function(){return u},add:function(e){r(u,e.id)||(a++,u[e.id]=e,e.owner=v,v.fire("add",{vframe:e}))},get:function(e){return u[e]},remove:function(e,t){var n=u[e];n&&(a--,t&&o--,delete u[e],v.fire("remove",{vframe:n}))},vfCreated:function(){if(!f){o++;var e=o/a;e>c&&v.fire("progress",{percent:c=e},f=1==e)}},root:function(){return e.root(v,s)},locChged:function(e){var t,n=e.loc;if(n?t=1:n=e.location,i(s,n),!t){var r=v.root(),a=e.changed;a.isView()?r.mountView(n.view):r.locChged(n,a)}}},n);return v}),function(e){var t=function(){};e.console||(e.console={log:t,info:t,warn:t});var n,r={};e.Magix||(e.Magix={config:function(e){for(var t in e)r[t]=e[t]},start:function(e){n=e}},require(["magix/magix"],function(t){e.Magix=t,t.config(r),n&&t.start(n)}))}(this);