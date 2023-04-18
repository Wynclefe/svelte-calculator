var app=function(){"use strict";function noop(){}function run(t){return t()}function blank_object(){return Object.create(null)}function run_all(t){t.forEach(run)}function is_function(t){return"function"==typeof t}function safe_not_equal(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function is_empty(t){return 0===Object.keys(t).length}function append(t,e){t.appendChild(e)}function insert(t,e,n){t.insertBefore(e,n||null)}function detach(t){t.parentNode&&t.parentNode.removeChild(t)}function element(t){return document.createElement(t)}function text(t){return document.createTextNode(t)}function space(){return text(" ")}function listen(t,e,n,a){return t.addEventListener(e,n,a),()=>t.removeEventListener(e,n,a)}function attr(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function children(t){return Array.from(t.childNodes)}function set_data(t,e){e=""+e,t.data!==e&&(t.data=e)}let current_component;function set_current_component(t){current_component=t}const dirty_components=[],binding_callbacks=[];let render_callbacks=[];const flush_callbacks=[],resolved_promise=Promise.resolve();let update_scheduled=!1;function schedule_update(){update_scheduled||(update_scheduled=!0,resolved_promise.then(flush))}function add_render_callback(t){render_callbacks.push(t)}const seen_callbacks=new Set;let flushidx=0;function flush(){if(0!==flushidx)return;const t=current_component;do{try{for(;flushidx<dirty_components.length;){const t=dirty_components[flushidx];flushidx++,set_current_component(t),update(t.$$)}}catch(t){throw dirty_components.length=0,flushidx=0,t}for(set_current_component(null),dirty_components.length=0,flushidx=0;binding_callbacks.length;)binding_callbacks.pop()();for(let t=0;t<render_callbacks.length;t+=1){const e=render_callbacks[t];seen_callbacks.has(e)||(seen_callbacks.add(e),e())}render_callbacks.length=0}while(dirty_components.length);for(;flush_callbacks.length;)flush_callbacks.pop()();update_scheduled=!1,seen_callbacks.clear(),set_current_component(t)}function update(t){if(null!==t.fragment){t.update(),run_all(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(add_render_callback)}}function flush_render_callbacks(t){const e=[],n=[];render_callbacks.forEach((a=>-1===t.indexOf(a)?e.push(a):n.push(a))),n.forEach((t=>t())),render_callbacks=e}const outroing=new Set;function transition_in(t,e){t&&t.i&&(outroing.delete(t),t.i(e))}function mount_component(t,e,n,a){const{fragment:l,after_update:c}=t.$$;l&&l.m(e,n),a||add_render_callback((()=>{const e=t.$$.on_mount.map(run).filter(is_function);t.$$.on_destroy?t.$$.on_destroy.push(...e):run_all(e),t.$$.on_mount=[]})),c.forEach(add_render_callback)}function destroy_component(t,e){const n=t.$$;null!==n.fragment&&(flush_render_callbacks(n.after_update),run_all(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function make_dirty(t,e){-1===t.$$.dirty[0]&&(dirty_components.push(t),schedule_update(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function init(t,e,n,a,l,c,s,o=[-1]){const r=current_component;set_current_component(t);const u=t.$$={fragment:null,ctx:[],props:c,update:noop,not_equal:l,bound:blank_object(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:blank_object(),dirty:o,skip_bound:!1,root:e.target||r.$$.root};s&&s(u.root);let p=!1;if(u.ctx=n?n(t,e.props||{},((e,n,...a)=>{const c=a.length?a[0]:n;return u.ctx&&l(u.ctx[e],u.ctx[e]=c)&&(!u.skip_bound&&u.bound[e]&&u.bound[e](c),p&&make_dirty(t,e)),n})):[],u.update(),p=!0,run_all(u.before_update),u.fragment=!!a&&a(u.ctx),e.target){if(e.hydrate){const t=children(e.target);u.fragment&&u.fragment.l(t),t.forEach(detach)}else u.fragment&&u.fragment.c();e.intro&&transition_in(t.$$.fragment),mount_component(t,e.target,e.anchor,e.customElement),flush()}set_current_component(r)}class SvelteComponent{$destroy(){destroy_component(this,1),this.$destroy=noop}$on(t,e){if(!is_function(e))return noop;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!is_empty(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function create_fragment(t){let e,n,a,l,c,s,o,r,u,p,i,d,m,_,f,b,h,$,k,y,v,x,g,C,V,E,w,j,A,L,N,O,S,q,B,D,R,M,P,T,z,F;return{c(){e=element("body"),n=element("div"),a=element("div"),l=element("div"),c=text(t[0]),s=space(),o=element("div"),r=element("button"),r.textContent="1",u=space(),p=element("button"),p.textContent="2",i=space(),d=element("button"),d.textContent="3",m=space(),_=element("button"),_.textContent="+",f=space(),b=element("button"),b.textContent="4",h=space(),$=element("button"),$.textContent="5",k=space(),y=element("button"),y.textContent="6",v=space(),x=element("button"),x.textContent="-",g=space(),C=element("button"),C.textContent="7",V=space(),E=element("button"),E.textContent="8",w=space(),j=element("button"),j.textContent="9",A=space(),L=element("button"),L.textContent="*",N=space(),O=element("button"),O.textContent="0",S=space(),q=element("button"),q.textContent=".",B=space(),D=element("button"),D.textContent="C",R=space(),M=element("button"),M.textContent="/",P=space(),T=element("button"),T.textContent="=",attr(l,"class","display svelte-12tbutm"),attr(r,"class","svelte-12tbutm"),attr(p,"class","svelte-12tbutm"),attr(d,"class","svelte-12tbutm"),attr(_,"class","svelte-12tbutm"),attr(b,"class","svelte-12tbutm"),attr($,"class","svelte-12tbutm"),attr(y,"class","svelte-12tbutm"),attr(x,"class","svelte-12tbutm"),attr(C,"class","svelte-12tbutm"),attr(E,"class","svelte-12tbutm"),attr(j,"class","svelte-12tbutm"),attr(L,"class","svelte-12tbutm"),attr(O,"class","svelte-12tbutm"),attr(q,"class","svelte-12tbutm"),attr(D,"class","svelte-12tbutm"),attr(M,"class","svelte-12tbutm"),attr(T,"class","svelte-12tbutm"),attr(o,"class","buttons svelte-12tbutm"),attr(a,"class","calculator svelte-12tbutm"),attr(n,"class","container svelte-12tbutm"),attr(e,"class","svelte-12tbutm")},m(G,H){insert(G,e,H),append(e,n),append(n,a),append(a,l),append(l,c),append(a,s),append(a,o),append(o,r),append(o,u),append(o,p),append(o,i),append(o,d),append(o,m),append(o,_),append(o,f),append(o,b),append(o,h),append(o,$),append(o,k),append(o,y),append(o,v),append(o,x),append(o,g),append(o,C),append(o,V),append(o,E),append(o,w),append(o,j),append(o,A),append(o,L),append(o,N),append(o,O),append(o,S),append(o,q),append(o,B),append(o,D),append(o,R),append(o,M),append(o,P),append(o,T),z||(F=[listen(r,"click",t[1]),listen(p,"click",t[1]),listen(d,"click",t[1]),listen(_,"click",t[1]),listen(b,"click",t[1]),listen($,"click",t[1]),listen(y,"click",t[1]),listen(x,"click",t[1]),listen(C,"click",t[1]),listen(E,"click",t[1]),listen(j,"click",t[1]),listen(L,"click",t[1]),listen(O,"click",t[1]),listen(q,"click",t[1]),listen(D,"click",t[2]),listen(M,"click",t[1]),listen(T,"click",t[3])],z=!0)},p(t,[e]){1&e&&set_data(c,t[0])},i:noop,o:noop,d(t){t&&detach(e),z=!1,run_all(F)}}}function instance($$self,$$props,$$invalidate){let displayValue="",currentValue=!1;function handleButtonCLick(t){const e=t.target.textContent;$$invalidate(0,displayValue+=e),!0===currentValue&&($$invalidate(0,displayValue=""),$$invalidate(0,displayValue+=e),currentValue=!1)}function clearDisplay(){$$invalidate(0,displayValue="")}function calculateResult(){$$invalidate(0,displayValue=eval(displayValue)),currentValue=!0}return[displayValue,handleButtonCLick,clearDisplay,calculateResult]}class App extends SvelteComponent{constructor(t){super(),init(this,t,instance,create_fragment,safe_not_equal,{})}}const app=new App({target:document.body,props:{name:"world"}});return app}();
//# sourceMappingURL=bundle.js.map
