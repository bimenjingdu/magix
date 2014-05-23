(function(e,t,n,r,i,a,o,s,c){c=0,s=function(e){return e.id||(e.id="mx_n_"+ ++c)},o("magix/magix",function(){var n=/\/\.\/|\/[^\/.]+?\/\.{2}\/|([^:\/])\/\/+|\.{2}\//,a=/\/[^\/]*$/,o=/[#?].*$/,s=/([^=&?\/#]+)=?([^&=#?]*)/g,u=/^https?:\/\//i,f="/",m="vframe",h=t.console,v=h&&h.error,d=function(){},l={tagName:m,rootId:"magix_vf_root",coded:1,error:v?function(e){h.error(e)}:d},g=l.hasOwnProperty,p=function(e,t){return e&&g.call(e,t)},x=function(t){return function(n,r,i){switch(arguments.length){case 0:i=t;break;case 1:i=_._o(n)?b(t,n):p(t,n)?t[n]:e;break;case 2:r===e?(delete t[n],i=r):t[n]=i=r}return i}},y=function(e,t){return t.f-e.f||t.t-e.t},w=function(e,t){var n=this;return n.get?(n.c=[],n.b=0|t||5,n.x=n.b+(e||20)):n=new w(e,t),n},b=function(e,t,n,r){for(r in t)n&&p(n,r)||(e[r]=t[r]);return e};b(w.prototype,{get:function(e){var t,n=this,i=n.c;return e=r+e,p(i,e)&&(t=i[e],t.f>=1&&(t.f++,t.t=++c,t=t.v)),t},list:function(){return this.c},set:function(e,t,n){var i=this,a=i.c,o=r+e,s=a[o];if(!p(a,o)){if(a.length>=i.x){a.sort(y);for(var u=i.b;u--;)s=a.pop(),i.del(s.o)}s={o:e},a.push(s),a[o]=s}return s.v=t,s.f=1,s.t=++c,s.m=n,t},del:function(e){e=r+e;var t=this.c,n=t[e];n&&(n.f=-1,n.v=i,delete t[e],n.m&&(P(n.m,n.o,n),n.m=i))},has:function(e){return p(this.c,r+e)}});var C=w(40),M=w(),P=function(e,t,n,r,i,a){for(_._a(e)||(e=[e]),t&&(_._a(t)||t.callee)||(t=[t]),r=0;e.length>r;r++)try{a=e[r],i=a&&a.apply(n,t)}catch(o){l.error(o)}return i},_={mix:b,has:p,tryCall:P,noop:d,config:x(l),start:function(e){var t=this;b(l,e),t.use(["magix/router","magix/vom",e.iniFile],function(n,r,i){l=b(l,i,e),l["!tnc"]=l.tagName!=m,n.on("!ul",r.loc),n.on("changed",r.loc),t.use(l.extensions,n.start)})},keys:Object.keys||function(e){var t,n=[];for(t in e)p(e,t)&&n.push(t);return n},local:x({}),path:function(e,t){var s=e+r+t,c=M.get(s);if(!c){for(u.test(t)?e=i:(e=e.replace(o,i).replace(a,i)+f,t.charAt(0)==f&&(e=e.substring(0,e.indexOf(f,u.test(e)?8:0)))),c=e+t;n.test(c);)c=c.replace(n,"$1/");M.set(s,c)}return c},toObject:function(e){var t,n,r,a,c=C.get(e),m={};return c?(m.path=c.path,m.params=b({},c.params)):(t={},n=i,o.test(e)?n=e.replace(o,i):~e.indexOf("=")||(n=e),r=e.replace(n,i),n&&u.test(n)&&(a=n.indexOf(f,8),n=~a?n.substring(a):f),r.replace(s,function(e,n,r){if(l.coded)try{r=decodeURIComponent(r)}catch(i){}t[n]=r}),m.path=n,m.params=t,C.set(e,m)),m},toUrl:function(e,t,n){var r,i,a=[];for(i in t)r=t[i],(!n||r||p(n,i))&&(l.coded&&(r=encodeURIComponent(r)),a.push(i+"="+r));return a.length&&(e+="?"+a.join("&")),e},toMap:function(e,t,n){var r,i,a,o={};if(n=n||1,e&&(a=e.length))for(r=0;a>r;r++)i=e[r],o[t?i[t]:i]=t?i:n;return o},cache:w},k=Object.prototype.toString,I=function(){};return b(_,{use:function(e,t){e?seajs.use(e,t):t&&t()},_a:$.isArray,_f:$.isFunction,_o:function(e){return"[object Object]"==k.call(e)},extend:function(e,t,n,r){var i=t.prototype,a=e.prototype;return e.superclass=i,i.constructor=t,I.prototype=i,a=new I,_.mix(a,n),_.mix(e,r),a.constructor=e,e}})}),o("magix/router",["magix/magix","magix/event"],function(e){var n,i,o,s,c,u,f=e("magix/magix"),m=e("magix/event"),h="",v="path",d="view",l=f.has,g=f.mix,p=f.keys,x=f.config(),y=f.cache(),w=f.cache(40),b=t.location,C=t.history,M={params:{},href:h},P=/#.*$/,_=/^[^#]*#?!?/,k="params",I=function(e,t,n){if(e){n=this[k],e=(e+h).split(a);for(var r=0;e.length>r&&!(t=l(n,e[r]));r++);}return t},V=function(){return this[v]},q=function(){return this[d]},A=function(e,t,n,r){return n=this,r=n[k],arguments.length>1?r[e]=t:r[e]||h},U=function(e){var t=f.toObject(e),n=t[v];return n&&c&&(t[v]=f.path(b.pathname,n)),t},O=g({viewInfo:function(e,t){var n,r,a,o;return i||(i={rs:x.routes||{},nf:x.unfoundView},a=x.defaultView,i.dv=a,o=x.defaultPath||h,n=i.rs,i.f=f._f(n),i.f||n[o]||!a||(n[o]=a),i[v]=o),e||(e=i[v]),n=i.rs,r=i.f?n.call(x,e,t):n[e],{view:r||i.nf||i.dv,path:e}},start:function(){o=x.edge,s=o&&C.pushState,c=o&&!s,u=s?"srcQuery":"srcHash",s?O.useState():O.useHash(),O.route()},parseQH:function(e,t){e=e||b.href;var n,r,i,a,s,c,u,f=y.get(e);return f||(i=e.replace(P,h),a=e.replace(_,h),s=U(i),c=U(a),u={},g(u,s[k]),g(u,c[k]),f={get:A,set:A,href:e,refHref:M.href,srcQuery:i,srcHash:a,query:s,hash:c,params:u},y.set(e,f)),t&&!f[d]&&(r=f.hash[v]||o&&f.query[v],n=O.viewInfo(r,f),g(f,n)),f},getChged:function(e,t){var n=e.href,i=t.href,a=n+r+i,o=w.get(a);if(!o){var s,c,u,f;o={isParam:I,isPath:V,isView:q},o[d]=u,o[v]=u,o[k]=f={};var m,h,l=e[k],g=t[k],$=[v,d].concat(p(l),p(g));for(m=$.length-1;m>=0;m--)h=$[m],1==m&&(l=e,g=t,f=o),c=l[h],u=g[h],c!=u&&(f[h]={from:c,to:u},s=1);o.occur=s,w.set(a,o)}return o},route:function(){var e=O.parseQH(0,1),t=!M.get,r=O.getChged(M,e);M=e,r.occur&&(n=e,O.fire("changed",{location:e,changed:r,force:t}))},navigate:function(e,t,r){if(!t&&f._o(e)&&(t=e,e=h),t&&(e=f.toUrl(e,t)),e&&n){var i=U(e),a=n.query[k];if(i[v]){if(c)for(var m in a)l(a,m)&&!l(i[k],m)&&(i[k][m]=h)}else{var d=g({},n[k]);i[k]=g(d,i[k]),i[v]=n[v]}var p,$=f.toUrl(i[v],i[k],o?v:a);p=$!=n[u],p&&(s?(O.poped=1,C[r?"replaceState":"pushState"](h,h,$),O.route()):(g(i,n,i),i.srcHash=$,O.fire("!ul",{loc:n=i}),$="#!"+$,r?b.replace($):b.hash=$))}}},m);return O.useState=function(){var e=O,t=location.href;$(WIN).on("popstate",function(){var n=location.href==t;(e.poped||!n)&&(e.poped=1,e.route())})},O.useHash=function(){$(WIN).on("hashchange",O.route)},O}),o("magix/body",["magix/magix"],function(t){var o,c=t("magix/magix"),u={},f=c.has,m="mx-ei",h=n.body,v="parentNode",d={},l=/\smx-(?!view|vframe)[a-z]+\s*=\s*"/g,g="on",p=function(e,t,n){return n?e.setAttribute(t,n):n=e.getAttribute(t),n},x=function(){this.prevent(),this.stop()},y=function(){this.prevented=1},w="",b={wrap:function(e,t,n,a){return t+=i,a=e+r,t=n?[i].concat(t).join(w+a):t.replace(l,"$&"+a)},process:function(t){if(t&&!t[g]){var n=t.target;t[g]=1;for(var i,u,h,l=n,$=t.type,b=d[$]||(d[$]=RegExp(a+$+"(?:,|$)")),C="mx-"+$,M=[];l&&1==l.nodeType&&(i=p(l,C),u=p(l,m),!i&&!b.test(u));)M.push(l),l=l[v];if(i){for(var P,_,k,I,V,q,A,U,O,N=i.split(w);N.length;)if(_=N.shift()){if(k=_.split(r),_=k.pop(),q=k[0],!q&&!P)for(A=l,U=o.all();A;){if(f(U,O=A.id)){p(l,C,(q=O)+r+i);break}A=A[v]}if(P=1,!q)throw Error("bad:"+_);I=o.get(q),V=I&&I.view,V&&(t.currentId=s(l),t.targetId=s(n),t.prevent=t.preventDefault||y,t.stop=t.stopPropagation||c.noop,t.halt=x,V.pEvt(_,$,t))}}else{for(;M.length;)h=M.pop(),u=p(h,m)||g,b.test(u)||(u=u+a+$,p(h,m,u));h=e}l=n=e}},act:function(e,t,n){var r=u[e]||0,i=r>0?1:0,a=b.process;r+=t?-i:i,r||(n&&(o=n),b.lib(h,e,a,t),t||(r=1)),u[e]=r}},C={focus:2,blur:2,mouseenter:2,mouseleave:2},M=$.now();return b.lib=function(e,t,n,r,a,o){var s=C[t];if(a){n.$n||(n.$n=M--);var c="_$"+n.$n;a[c]||(a[c]=function(){n.apply(a,arguments)}),n=a[c]}o||2!=s?$(e)[r?"off":g](t,n):$(e)[(r?"un":i)+"delegate"]("[mx-"+t+"]",t,n)},b}),o("magix/event",["magix/magix"],function(e){var t=e("magix/magix"),n=t.tryCall,i={fire:function(e,t,i,a){var o=r+e,s=this,c=s[o];if(c){t||(t={}),t.type||(t.type=e);for(var u,f,m=c.length,h=m-1;m--;)u=a?m:h-m,f=c[u],(f.d||f.r)&&(c.splice(u,1),h--),f.d||n(f.f,t,s);i=i||0>h}i&&delete s[o]},on:function(e,t,n){var i=r+e,a=this[i]||(this[i]=[]),o={f:t};isNaN(n)?(o.r=n,a.push(o)):a.splice(0|n,0,o)},rely:function(e,t,r,i,a){var o=this;o.on(e,t,a),r.on(i,function(){o.off(e,t)},n)},off:function(e,t){var n=r+e,i=this[n];if(i)if(t){for(var a,o=i.length-1;o>=0;o--)if(a=i[o],a.f==t&&!a.d){a.d=1;break}}else delete this[n]},once:function(e,t){this.on(e,t,n)}};return t.mix(t.local,i),i}),o("magix/vframe",["magix/magix","magix/event","magix/view"],function(t){var r,o,c,u,f,m,h,v,d,l,g,p=t("magix/magix"),$=t("magix/event"),x=t("magix/view"),y=p.tryCall,w=[],b=p.mix,C=p.config(),M="mx-vframe",P=p.has,_="querySelectorAll",k="alter",I="created",V=function(e){return"object"==typeof e?e:n.getElementById(e)},q=function(e,t,i){return t=V(e),t&&(i=c?n[_]("#"+s(t)+f):t.getElementsByTagName(r)),i||w},A=function(e,t,n){if(e=V(e),t=V(t),e&&t)if(e!==t)try{n=m?t.contains(e):16&t.compareDocumentPosition(e)}catch(r){n=0}else n=1;return n},U=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1,t.rM={},t.owner=g,g.add(e,t)};return U.root=function(t,i,a){if(!h){r=C.tagName,o=C["!tnc"],c=o&&n[_],f=" "+r+"["+M+"=true]",u=o&&!c;var s=n.body;m=s.contains,d=i,l=a,g=t;var v=C.rootId,p=V(v);p||(p=n.createElement(r),p.id=v,s.appendChild(p),p=e),h=new U(v)}return h},b(b(U.prototype,$),{mountView:function(e,t,n){var r=this,i=V(r.id);if(r._a||(r._a=1,r._t=i.innerHTML),r.unmountView(n),r._d=0,e){var a=p.toObject(e),o=a.path,s=++r.sign;p.use(o,function(e){if(s==r.sign){x.prepare(e);var n=new e({owner:r,id:r.id,$:V,$c:A,path:o,vom:g,location:d});r.view=n;var c=function(e){r.mountZoneVframes(e.id)};n.on("interact",function(e){e.tmpl||(i.innerHTML=r._t,c(V)),n.on("primed",function(){r.viewPrimed=1,r.fire("viewMounted")}),n.on("rendered",c),n.on("prerender",function(e){r.unmountZoneVframes(e.id,e.keep,1)||r.cAlter()})},0),n.load(b(a.params,t),l)}})}},unmountView:function(e){var t=this,n=t.view;if(n){v||(v={}),t._d=1,t.unmountZoneVframes(0,e,1),t.cAlter(v),t.view=0,n.oust();var r=V(t.id);r&&t._a&&!e&&(r.innerHTML=t._t),t.viewInited=0,t.viewPrimed&&(t.viewPrimed=0,t.fire("viewUnmounted")),v=0}t.sign++},mountVframe:function(e,t,n,r,i){var a=this;a.fcc&&!r&&a.cAlter();var o=g.get(e);return o||(o=new U(e),o.pId=a.id,P(a.cM,e)||a.cC++,a.cM[e]=1),o._p=r,o.mountView(t,n,i),o},mountZoneVframes:function(e,t,n,r){var i=this;e=e||i.id,i.unmountZoneVframes(e,r,1);var a=q(e),o=a.length,c={};if(o)for(var f,m,h,v,d=0;o>d;d++)if(f=a[d],m=s(f),!P(c,m)&&(h=f.getAttribute("mx-view"),v=u?f.getAttribute(M):1,v||h)){i.mountVframe(m,h,t,n,r);for(var l,g=q(f),p=0,$=g.length;$>p;p++)l=g[p],c[s(l)]=1}i.cCreated()},unmountVframe:function(e,t,n){var r=this;e=e||r.id;var i=g.get(e);if(i){var a=i.fcc;i.unmountView(t),g.remove(e,a);var o=g.get(i.pId);o&&P(o.cM,e)&&(delete o.cM[e],o.cC--,n||r._d||o.cCreated())}},unmountZoneVframes:function(e,t,n){var r,i,a=this,o=a.cM;for(i in o)(!e||A(i,e))&&a.unmountVframe(i,t,r=1);return n||a._d||a.cCreated(),r},invokeView:function(e,t){var n,r=this;if(r.viewInited){var i=r.view,a=i&&i[e];a&&(n=y(a,t||w,i))}return n},cCreated:function(e){var t=this;if(t.cC==t.rC){var n=t.view;n&&!t.fcc&&(t.fcc=1,t.fca=0,n.fire(I,e),t.fire(I,e));var r=t.id,i=g.get(t.pId);i&&!P(i.rM,r)&&(i.rM[r]=i.cM[r],i.rC++,i.cCreated(e))}},cAlter:function(e){var t=this;if(e||(e={}),!t.fca&&t.fcc){t.fcc=0;var n=t.view,r=t.id;n&&(t.fca=1,n.fire(k,e),t.fire(k,e));var i=g.get(t.pId);i&&P(i.rM,r)&&(i.rC--,delete i.rM[r],t._p||i.cAlter(e))}},locChged:function(){var e=this,t=e.view;if(e.viewInited&&t&&t.sign>0){var n=t.olChg(l),r={location:d,changed:l,prevent:function(){this.cs=w},to:function(e){e=(e+i).split(a),this.cs=e||w}};n&&t.render(r);for(var o,s=r.cs||p.keys(e.cM),c=0,u=s.length;u>c;c++)o=g.get(s[c]),o&&o.locChged()}}}),U}),o("magix/view",function(o){var s=o("magix/magix"),c=o("magix/event"),u=o("magix/body"),f=o("magix/router"),m=s.tryCall,h=s.has,v=[],d=s.noop,l=s.mix,g=0,p="destroy",x=function(e){return function(){var t=this,n=t.notifyUpdate();n>0&&m(e,arguments,t)}},y=function(e){var t=e&&e[p];t&&m(t,v,e)},w=function(e){clearTimeout(e),clearInterval(e)},b=function(e,t){var n=this,r=n.$res;for(var i in r){var a=r[i];(!e||a.mr)&&n.destroyManaged(i,t)}},C=s.cache(40),M=/(\w+)(?:<(\w+)>)?(?:\(?{([\s\S]*)}\)?)?/,P=/(\w+):(['"]?)([^,]+)\2/g,_=/([$\w]+)<([\w,]+)>/,k=function(e){var t=this;l(t,e),t.$ol={ks:[]},t.$ns={},t.$res={},t.sign=1,t.addNode(t.id),m(k.$,[e],t)},I=k.prototype,V={$win:t,$doc:n};k.$=[],k.prepare=function(e){if(!e[r]){e[r]=1;var t,n,i,o,s,c,u=e.prototype,f={},m=[];for(var h in u)if(t=u[h],n=h.match(_))for(i=n[1],o=n[2],o=o.split(a),s=o.length-1;s>-1;s--)n=o[s],c=V[i],c?m.push({n:i,t:n,h:c,f:t}):(f[n]=1,u[i+r+n]=t);else"render"==h&&t!=d&&(u[h]=x(t));u.$evts=f,u.$sevts=m}},k.mixin=function(e,t){t&&k.$.push(t),l(I,e)},l(l(I,c),{render:d,wrapEvent:u.wrap,init:d,hasTmpl:!0,load:function(){var e=this,t=e.hasTmpl,n=arguments,r=function(r){t&&(e.template=u.wrap(e.id,r)),e.dEvts(),e.fire("interact",{tmpl:t},1),m(e.init,n,e),e.fire("inited",0,1),e.owner.viewInited=1,e.render();var i=!t&&!e.rendered;i&&(e.rendered=1,e.fire("primed",0,1))};t?e.fetchTmpl(e.path,e.wrapAsync(r)):r()},beginUpdate:function(e,t){var n=this;n.sign>0&&n.rendered&&(n.fire("prerender",{id:e,keep:t}),b.call(n,0,1))},endUpdate:function(e){var t=this;t.sign>0&&(t.rendered||(t.fire("primed",0,1),t.rendered=1),t.fire("rendered",{id:e}))},notifyUpdate:function(){var e=this;return e.sign>0&&(e.sign++,e.fire("rendercall"),b.call(e,1,1)),e.sign},wrapAsync:function(e){var t=this,n=t.sign;return function(){n>0&&n==t.sign&&e&&e.apply(this,arguments)}},setViewHTML:function(e,t){var n,r=this;r.beginUpdate(e),r.sign>0&&(n=r.$(e),n&&(n.innerHTML=t)),r.endUpdate(e)},observeLocation:function(e){var t,n=this;t=n.$ol,t.f=1;var r=t.ks;s._o(e)&&(t.pn=e.path,e=e.params),e&&(t.ks=r.concat((e+i).split(a)))},olChg:function(e){var t,n=this,r=n.$ol;return r.f&&(r.pn&&(t=e.path),t||(t=e.isParam(r.ks))),t},oust:function(){var e=this;e.sign>0&&(e.sign=0,e.fire(p,0,1,1),b.call(e),e.dEvts(1)),e.sign--},parentView:function(){var t=this,n=t.vom,r=t.owner,i=n.get(r.pId),a=e;return i&&i.viewInited&&(a=i.view),a},pEvt:function(e,t,n){var i=this;if(i.sign>0){var a=C.get(e);a||(a=e.match(M),a={n:a[1],f:a[2],i:a[3],p:{}},a.i&&a.i.replace(P,function(e,t,n,r){a.p[t]=r}),C.set(e,a));var o=a.n+r+t,s=i[o];if(s){var c=n[a.f];c&&c.call(n),n.params=a.p,m(s,n,i)}}},dEvts:function(e){var t=this,n=t.$evts,r=t.vom;for(var i in n)u.act(i,e,r);for(n=t.$sevts,i=n.length;i-->0;)r=n[i],u.lib(r.h,r.t,r.f,e,t,1)},addNode:function(e){this.$ns[e]=1},removeNode:function(e){delete this.$ns[e]},inside:function(e,t){var n,r=this;for(var i in r.$ns)if(n=r.$c(e,i))break;if(!n&&t){var a,o=r.owner,s=r.vom,c=o.cM;for(a in c)if(o=s.get(a),o&&(n=o.invokeView("inside",[e,t])))break}return n},navigate:f.navigate,manage:function(e,t,n){var r=this,i=arguments,a=1,o=r.$res;1==i.length?(t=e,e="res_"+g++,a=0):r.destroyManaged(e);var s;s=(0|t)===t?w:y;var c={hk:a,res:t,ol:n,mr:t&&t.$host,oust:s};return o[e]=c,t},getManaged:function(t,n){var r=this,i=r.$res,a=e;if(h(i,t)){var o=i[t];a=o.res,n&&delete i[t]}return a},removeManaged:function(e){return this.getManaged(e,1)},destroyManaged:function(e,t){var n,r=this,i=r.$res,a=i[e];return!a||t&&a.ol||(n=a.res,a.oust(n),a.hk&&t||delete i[e]),n},dispatch:function(e,t,n){n=this,t||(t={}),t.type=e,t.target=n.$(n.id),u.process(t)}});var q={},A="?t="+Math.random(),U={},O={};return I.fetchTmpl=function(e,t){var n=this,r="template"in n;if(r)t(n.template);else if(h(U,e))t(U[e]);else{var i=e.indexOf("/"),a=e.substring(0,i);q[a]||(q[a]=seajs.data.paths[a]);var o=q[a]+e.substring(i+1)+".html",s=O[o],c=function(n){t(U[e]=n)};s?s.push(c):(s=O[o]=[c],$.ajax({url:o+A,success:function(e){m(s,e),delete O[o]},error:function(e,t){m(s,t),delete O[o]}}))}},k.extend=function(e,t,n){var r=this,i=function(){i.superclass.constructor.apply(this,arguments),n&&m(n,arguments,this)};return i.extend=r.extend,s.extend(i,r,e,t)},k}),o("magix/vom",["magix/vframe","magix/magix","magix/event"],function(e){var t=e("magix/vframe"),n=e("magix/magix"),r=e("magix/event"),i=n.has,a=n.mix,o={},s={},c={},u=n.mix({all:function(){return o},add:function(e,t){i(o,e)||(o[e]=t,u.fire("add",{vframe:t}))},get:function(e){return o[e]},remove:function(e,t){var n=o[e];n&&(delete o[e],u.fire("remove",{vframe:n,fcc:t}))},loc:function(e){var n,r=e.loc;if(r?n=1:r=e.location,a(s,r),!n){a(c,e.changed);var i=t.root(u,s,c);c.view?i.mountView(r.view):i.locChged()}}},r);return u}),o("magix/mmanager",["magix/magix","magix/event"],function(n){var o=n("magix/magix"),s=n("magix/event"),u=o.has,f=o.tryCall,m=o._a,h=o._f,v=o._o,d=1,l=2,g=4,p="postParams",$="urlParams",x=Date.now||function(){return+new Date},y=t.JSON,w=o.mix,b=12e5,C=function(e,t,n,i){if(h(e))t&&(n=C(f(e)));else if(y)n=y.stringify(e);else if(v(e)||m(e)){n=[];for(i in e)u(e,i)&&n.push(i,r,C(e[i]))}else n=e;return n},M=function(e,t,n){for(var i,a=[t.name,C(n)],o={},s=e.length-1;s>-1;s--)i=e[s],o[i]||a.push(o[i]=C(t[i],1),C(n[i],1));return a.join(r)},P=function(e){var t=e.cache;return t&&(t=t===!0?b:0|t),t},_=function(e){throw Error(e)},k=function(e,t){var n=this;n.$mClass=e,n.$mCache=o.cache(),n.$mCacheKeys={},n.$mMetas={},n.$sKeys=(t&&(i+t).split(a)||[]).concat(p,$),n.id="mm"+ ++c,f(k.$,arguments,n)},I=[].slice,V=function(e,t,n,r){return function(i){return e.apply(t,[n,r,i])}},q=function(e,t){var n=t.b,r=t.a,i=r[n];if(i){var a=i.q;delete r[n],f(a,e,i.e)}},A=function(t,n,r){var i,a=this,o=n.a,s=n.c,c=n.d,u=n.g,m=n.i,h=n.j,v=n.k,p=n.l,$=n.m,y=n.n,w=n.o;n.b++,delete s[a.id];var b=a.$mm,C=b.key;if(c[t]=a,r)n.e=1,i=1,n.f=r,u.msg=r,u[t]=r,h.fire("fail",{model:a,msg:r});else{if(!C||C&&!m.has(C)){C&&m.set(C,a),b.time=x();var M=b.done;M&&f(M,a),h.fire("done",{model:a})}b.used>0&&(a.fromCache=1),b.used++}if(!o.$oust){if(v==d){var P=p?$[t]:$;P&&(y[t]=f(P,[i?u:e,a,u],o))}else if(v==l){w[t]={m:a,e:i,s:r};for(var _,k,I=w.i||0;_=w[I];I++)k=p?$[I]:$,_.e&&(u.msg=_.s,u[I]=_.s),y[I]=f(k,[_.e?u:e,_.m,u].concat(y),o);w.i=I}n.b==n.h&&(n.e||(u=e),v==g?(c.unshift(u),y[0]=u,y[1]=f($,c,o)):y.unshift(u),o.$ntId=setTimeout(function(){o.doNext(y)},30))}},U=function(e,t){return function(n,r){var i=I.call(arguments,1);return this.send(n,i.length>1?i:r,e,t)}};w(k,{create:function(e,t){return new k(e,t)},mixin:function(e,t){t&&k.$.push(t),w(k.prototype,e)},$:[]});var O=function(e){var t=this;t.$host=e,t.$reqs={},t.id="mr"+ ++c,t.$queue=[]};return w(O.prototype,{send:function(e,t,n,r){var i=this;if(i.$busy)return i.next(function(){this.send(e,t,n,r)}),i;i.$busy=1;var a=i.$host,o=a.$mCache,s=a.$mCacheKeys,c=i.$reqs;m(e)||(e=[e]);var f=e.length,h=[],v=m(t);v&&(h=Array(t.length));for(var d,l={a:i,b:0,c:i.$reqs,d:Array(f),g:{},h:f,i:o,j:a,k:n,l:v,m:t,n:h,o:[]},g=0;e.length>g;g++)if(d=e[g]){var p=a.getModel(d,r),$=p.entity,x=$.$mm.key,y=V(A,$,g,l);y.id=i.id,x&&u(s,x)?s[x].q.push(y):p.update?(c[$.id]=$,x&&(s[x]={q:[y],e:$},y=q),$.request(y,{a:s,b:x})):y()}else _("empty model");return i},fetchAll:function(e,t){return this.send(e,t,g)},saveAll:function(e,t){return this.send(e,t,g,1)},fetchOrder:U(l),saveOrder:U(l,1),saveOne:U(d,1),fetchOne:U(d),stop:function(){var e=this;clearTimeout(e.$ntId);var t=e.$host,n=e.$reqs,r=t.$mCacheKeys;for(var i in n){var a=n[i],o=a.$mm.key;if(o&&u(r,o)){for(var s,c=r[o],m=c.q,h=[],v=[],d=0;m.length>d;d++)s=m[d],s.id!=e.id?h.push(s):v.push(s);h.length?(f(v,"abort",c.e),c.q=h):a.abort()}else a.abort()}e.$reqs={},e.$queue=[],e.$busy=0},next:function(e){var t=this;if(t.$queue.push(e),!t.$busy){var n=t.$args;t.doNext(n)}return t},doNext:function(e){var t=this;t.$busy=0;var n=t.$queue;if(n){var r=n.shift();r&&f(r,e,t)}t.$args=e},destroy:function(){var e=this;e.$oust=1,e.stop()}}),k.mixin(s),k.mixin({registerModels:function(e){var t=this,n=t.$mMetas;m(e)||(e=[e]);for(var r,i,a,o=0;e.length>o;o++)r=e[o],r&&(i=r.name,i?n[i]&&_("already exist:"+i):_("miss name"),a=P(r),a&&(r.cache=a),n[i]=r)},registerMethods:function(e){w(this,e)},createModel:function(e){var t,n=this,r=n.getModelMeta(e),i=P(e)||r.cache,a=new n.$mClass;return a.set(r),a.$mm=t={used:0,done:r.done},i&&(t.key=M(n.$sKeys,r,e)),e.name&&a.set(e),a.setUrlParams(r[$]),a.setPostParams(r[p]),a.setUrlParams(e[$]),a.setPostParams(e[p]),n.fire("inited",{model:a}),a},getModelMeta:function(e){var t=this,n=t.$mMetas,r=e.name||e,i=n[r];return i||_("Unfound:"+r),i},getModel:function(e,t){var n,r,i=this;return t||(n=i.getCachedModel(e)),n||(r=1,n=i.createModel(e)),{entity:n,update:r}},createMRequest:function(e){var t=new O(this);return e&&e.manage&&e.manage(t),t},clearCacheByKey:function(e){var t=this,n=t.$mCache;n.del(e)},clearCacheByName:function(e){for(var t=this,n=t.$mCache,r=n.list(),i=0;r.length>i;i++){var a=r[i],o=a.v,s=o&&o.$mm;if(s){var c=s.meta.name;c==e&&n.del(s.key)}}},getCachedModel:function(t){var n,r=this,i=r.$mCache,a=e,o=r.getModelMeta(t),s=P(t)||o.cache;if(s&&(n=M(r.$sKeys,o,t)),n){var c=r.$mCacheKeys,u=c[n];u?a=u.e:(a=i.get(n),a&&s>0&&x()-a.$mm.time>s&&(r.clearCacheByKey(n),a=0))}return a}}),k}),o("magix/model",["magix/magix"],function(e){var t=e("magix/magix"),n=function(e,n,r){var i=this,a=function(){a.superclass.constructor.apply(this,arguments),r&&r.apply(this,arguments)};return t.extend(a,i,e,n)},a=+new Date,o=t.has,s=t._o,c=t.toString,u=function(e){this.set(e),this.id="m"+a--},f=function(e,t){return function(n,r){this.setParams(n,r,e,t)}},m=/^\?|=(?=&|$)/g,h="GET",v="POST";return t.mix(u,{extend:n}),t.mix(u.prototype,{sync:t.noop,getPostParams:function(){return this.getParams(v)},getUrlParams:function(){return this.getParams(h)},getParams:function(e){var n=t.toUrl(i,this[r+(e||h)]);return n=n.replace(m,i)},setUrlParamsIf:f(h,1),setPostParamsIf:f(v,1),setParams:function(e,n,a,c){var u,f,m,h=this,v=r+a;h[v]||(h[v]={}),m=h[v],t._f(e)&&(e=t.tryCall(e)),e&&!s(e)&&(u={},u[e]=~(e+i).indexOf("=")?i:n,e=u);for(f in e)c&&o(m,f)||(m[f]=e[f])},setPostParams:f(v),setUrlParams:f(h),get:function(e,t,n){var r=this,a=arguments.length,o=2==a,s=r.$attrs;if(a){for(var u=(e+i).split(".");s&&u[0];)s=s[u.shift()];u[0]&&(s=n)}return o&&c.call(t)!=c.call(s)&&(s=t),s},set:function(e,t){var n=this;if(n.$attrs||(n.$attrs={}),s(e))for(var r in e)n.$attrs[r]=e[r];else e&&(n.$attrs[e]=t)},request:function(e,t){var n=this;n.$abt=0;var r=function(r,i){n.$abt||(s(i)||(i={data:i}),n.set(i),e(r,t))};n.$trans=n.sync(n.$temp=r)},abort:function(){var e=this,t=e.$trans,n=e.$temp;n&&n("abort"),e.$abt=1,t&&t.abort&&t.abort(),e.$trans=0},isAborted:function(){return this.$abt}}),u}),n.createElement("vframe")})(null,this,document,"","",",",define);