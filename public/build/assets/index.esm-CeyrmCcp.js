import{R as D}from"./app-tKDJcObQ.js";var fe=e=>e.type==="checkbox",se=e=>e instanceof Date,U=e=>e==null;const et=e=>typeof e=="object";var S=e=>!U(e)&&!Array.isArray(e)&&et(e)&&!se(e),tt=e=>S(e)&&e.target?fe(e.target)?e.target.checked:e.target.value:e,At=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,rt=(e,s)=>e.has(At(s)),xt=e=>{const s=e.constructor&&e.constructor.prototype;return S(s)&&s.hasOwnProperty("isPrototypeOf")},Re=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function p(e){let s;const t=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Re&&(e instanceof Blob||e instanceof FileList))&&(t||S(e)))if(s=t?[]:{},!t&&!xt(e))s=e;else for(const u in e)e.hasOwnProperty(u)&&(s[u]=p(e[u]));else return e;return s}var ce=e=>Array.isArray(e)?e.filter(Boolean):[],w=e=>e===void 0,c=(e,s,t)=>{if(!s||!S(e))return t;const u=ce(s.split(/[,[\].]+?/)).reduce((n,l)=>U(n)?n:n[l],e);return w(u)||u===e?w(e[s])?t:e[s]:u},W=e=>typeof e=="boolean";const _e={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},j={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},z={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},mt=D.createContext(null),Te=()=>D.useContext(mt);var st=(e,s,t,u=!0)=>{const n={defaultValues:s._defaultValues};for(const l in e)Object.defineProperty(n,l,{get:()=>{const y=l;return s._proxyFormState[y]!==j.all&&(s._proxyFormState[y]=!u||j.all),t&&(t[y]=!0),e[y]}});return n},I=e=>S(e)&&!Object.keys(e).length,it=(e,s,t,u)=>{t(e);const{name:n,...l}=e;return I(l)||Object.keys(l).length>=Object.keys(s).length||Object.keys(l).find(y=>s[y]===(!u||j.all))},he=e=>Array.isArray(e)?e:[e],ut=(e,s,t)=>!e||!s||e===s||he(e).some(u=>u&&(t?u===s:u.startsWith(s)||s.startsWith(u)));function Le(e){const s=D.useRef(e);s.current=e,D.useEffect(()=>{const t=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}function Dt(e){const s=Te(),{control:t=s.control,disabled:u,name:n,exact:l}=e||{},[y,h]=D.useState(t._formState),m=D.useRef(!0),k=D.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),_=D.useRef(n);return _.current=n,Le({disabled:u,next:v=>m.current&&ut(_.current,v.name,l)&&it(v,k.current,t._updateFormState)&&h({...t._formState,...v}),subject:t._subjects.state}),D.useEffect(()=>(m.current=!0,k.current.isValid&&t._updateValid(!0),()=>{m.current=!1}),[t]),st(y,t,k.current,!1)}var $=e=>typeof e=="string",lt=(e,s,t,u,n)=>$(e)?(u&&s.watch.add(e),c(t,e,n)):Array.isArray(e)?e.map(l=>(u&&s.watch.add(l),c(t,l))):(u&&(s.watchAll=!0),t);function wt(e){const s=Te(),{control:t=s.control,name:u,defaultValue:n,disabled:l,exact:y}=e||{},h=D.useRef(u);h.current=u,Le({disabled:l,subject:t._subjects.values,next:_=>{ut(h.current,_.name,y)&&k(p(lt(h.current,t._names,_.values||t._formValues,!1,n)))}});const[m,k]=D.useState(t._getWatch(u,n));return D.useEffect(()=>t._removeUnmounted()),m}var Oe=e=>/^\w*$/.test(e),at=e=>ce(e.replace(/["|']|\]/g,"").split(/\.|\[/)),x=(e,s,t)=>{let u=-1;const n=Oe(s)?[s]:at(s),l=n.length,y=l-1;for(;++u<l;){const h=n[u];let m=t;if(u!==y){const k=e[h];m=S(k)||Array.isArray(k)?k:isNaN(+n[u+1])?{}:[]}e[h]=m,e=e[h]}return e};function St(e){const s=Te(),{name:t,disabled:u,control:n=s.control,shouldUnregister:l}=e,y=rt(n._names.array,t),h=wt({control:n,name:t,defaultValue:c(n._formValues,t,c(n._defaultValues,t,e.defaultValue)),exact:!0}),m=Dt({control:n,name:t}),k=D.useRef(n.register(t,{...e.rules,value:h,...W(e.disabled)?{disabled:e.disabled}:{}}));return D.useEffect(()=>{const _=n._options.shouldUnregister||l,v=(N,H)=>{const L=c(n._fields,N);L&&(L._f.mount=H)};if(v(t,!0),_){const N=p(c(n._options.defaultValues,t));x(n._defaultValues,t,N),w(c(n._formValues,t))&&x(n._formValues,t,N)}return()=>{(y?_&&!n._state.action:_)?n.unregister(t):v(t,!1)}},[t,n,y,l]),D.useEffect(()=>{c(n._fields,t)&&n._updateDisabledField({disabled:u,fields:n._fields,name:t,value:c(n._fields,t)._f.value})},[u,t,n]),{field:{name:t,value:h,...W(u)||m.disabled?{disabled:m.disabled||u}:{},onChange:D.useCallback(_=>k.current.onChange({target:{value:tt(_),name:t},type:_e.CHANGE}),[t]),onBlur:D.useCallback(()=>k.current.onBlur({target:{value:c(n._formValues,t),name:t},type:_e.BLUR}),[t,n]),ref:_=>{const v=c(n._fields,t);v&&_&&(v._f.ref={focus:()=>_.focus(),select:()=>_.select(),setCustomValidity:N=>_.setCustomValidity(N),reportValidity:()=>_.reportValidity()})}},formState:m,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!c(m.errors,t)},isDirty:{enumerable:!0,get:()=>!!c(m.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!c(m.touchedFields,t)},isValidating:{enumerable:!0,get:()=>!!c(m.validatingFields,t)},error:{enumerable:!0,get:()=>c(m.errors,t)}})}}const jt=e=>e.render(St(e));var kt=(e,s,t,u,n)=>s?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[u]:n||!0}}:{},Ke=e=>({isOnSubmit:!e||e===j.onSubmit,isOnBlur:e===j.onBlur,isOnChange:e===j.onChange,isOnAll:e===j.all,isOnTouch:e===j.onTouched}),Ge=(e,s,t)=>!t&&(s.watchAll||s.watch.has(e)||[...s.watch].some(u=>e.startsWith(u)&&/^\.\w+/.test(e.slice(u.length))));const oe=(e,s,t,u)=>{for(const n of t||Object.keys(e)){const l=c(e,n);if(l){const{_f:y,...h}=l;if(y){if(y.refs&&y.refs[0]&&s(y.refs[0],n)&&!u)break;if(y.ref&&s(y.ref,y.name)&&!u)break;oe(h,s)}else S(h)&&oe(h,s)}}};var Et=(e,s,t)=>{const u=ce(c(e,t));return x(u,"root",s[t]),x(e,t,u),e},Ue=e=>e.type==="file",Q=e=>typeof e=="function",be=e=>{if(!Re)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},ve=e=>$(e),pe=e=>e.type==="radio",Ve=e=>e instanceof RegExp;const ze={value:!1,isValid:!1},Je={value:!0,isValid:!0};var nt=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!w(e[0].attributes.value)?w(e[0].value)||e[0].value===""?Je:{value:e[0].value,isValid:!0}:Je:ze}return ze};const Qe={isValid:!1,value:null};var ot=e=>Array.isArray(e)?e.reduce((s,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:s,Qe):Qe;function Xe(e,s,t="validate"){if(ve(e)||Array.isArray(e)&&e.every(ve)||W(e)&&!e)return{type:t,message:ve(e)?e:"",ref:s}}var re=e=>S(e)&&!Ve(e)?e:{value:e,message:""},Ye=async(e,s,t,u,n)=>{const{ref:l,refs:y,required:h,maxLength:m,minLength:k,min:_,max:v,pattern:N,validate:H,name:L,valueAsNumber:xe,mount:J,disabled:ie}=e._f,V=c(s,L);if(!J||ie)return{};const K=y?y[0]:l,G=b=>{u&&K.reportValidity&&(K.setCustomValidity(W(b)?"":b||""),K.reportValidity())},E={},Z=pe(l),de=fe(l),X=Z||de,ee=(xe||Ue(l))&&w(l.value)&&w(V)||be(l)&&l.value===""||V===""||Array.isArray(V)&&!V.length,B=kt.bind(null,L,t,E),ye=(b,F,C,O=z.maxLength,q=z.minLength)=>{const P=b?F:C;E[L]={type:b?O:q,message:P,ref:l,...B(b?O:q,P)}};if(n?!Array.isArray(V)||!V.length:h&&(!X&&(ee||U(V))||W(V)&&!V||de&&!nt(y).isValid||Z&&!ot(y).isValid)){const{value:b,message:F}=ve(h)?{value:!!h,message:h}:re(h);if(b&&(E[L]={type:z.required,message:F,ref:K,...B(z.required,F)},!t))return G(F),E}if(!ee&&(!U(_)||!U(v))){let b,F;const C=re(v),O=re(_);if(!U(V)&&!isNaN(V)){const q=l.valueAsNumber||V&&+V;U(C.value)||(b=q>C.value),U(O.value)||(F=q<O.value)}else{const q=l.valueAsDate||new Date(V),P=ae=>new Date(new Date().toDateString()+" "+ae),ue=l.type=="time",le=l.type=="week";$(C.value)&&V&&(b=ue?P(V)>P(C.value):le?V>C.value:q>new Date(C.value)),$(O.value)&&V&&(F=ue?P(V)<P(O.value):le?V<O.value:q<new Date(O.value))}if((b||F)&&(ye(!!b,C.message,O.message,z.max,z.min),!t))return G(E[L].message),E}if((m||k)&&!ee&&($(V)||n&&Array.isArray(V))){const b=re(m),F=re(k),C=!U(b.value)&&V.length>+b.value,O=!U(F.value)&&V.length<+F.value;if((C||O)&&(ye(C,b.message,F.message),!t))return G(E[L].message),E}if(N&&!ee&&$(V)){const{value:b,message:F}=re(N);if(Ve(b)&&!V.match(b)&&(E[L]={type:z.pattern,message:F,ref:l,...B(z.pattern,F)},!t))return G(F),E}if(H){if(Q(H)){const b=await H(V,s),F=Xe(b,K);if(F&&(E[L]={...F,...B(z.validate,F.message)},!t))return G(F.message),E}else if(S(H)){let b={};for(const F in H){if(!I(b)&&!t)break;const C=Xe(await H[F](V,s),K,F);C&&(b={...C,...B(F,C.message)},G(C.message),t&&(E[L]=b))}if(!I(b)&&(E[L]={ref:K,...b},!t))return E}}return G(!0),E};function Ct(e,s){const t=s.slice(0,-1).length;let u=0;for(;u<t;)e=w(e)?u++:e[s[u++]];return e}function Rt(e){for(const s in e)if(e.hasOwnProperty(s)&&!w(e[s]))return!1;return!0}function T(e,s){const t=Array.isArray(s)?s:Oe(s)?[s]:at(s),u=t.length===1?e:Ct(e,t),n=t.length-1,l=t[n];return u&&delete u[l],n!==0&&(S(u)&&I(u)||Array.isArray(u)&&Rt(u))&&T(e,t.slice(0,-1)),e}var ke=()=>{let e=[];return{get observers(){return e},next:n=>{for(const l of e)l.next&&l.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(l=>l!==n)}}),unsubscribe:()=>{e=[]}}},Fe=e=>U(e)||!et(e);function Y(e,s){if(Fe(e)||Fe(s))return e===s;if(se(e)&&se(s))return e.getTime()===s.getTime();const t=Object.keys(e),u=Object.keys(s);if(t.length!==u.length)return!1;for(const n of t){const l=e[n];if(!u.includes(n))return!1;if(n!=="ref"){const y=s[n];if(se(l)&&se(y)||S(l)&&S(y)||Array.isArray(l)&&Array.isArray(y)?!Y(l,y):l!==y)return!1}}return!0}var ft=e=>e.type==="select-multiple",Tt=e=>pe(e)||fe(e),Ee=e=>be(e)&&e.isConnected,Lt=e=>S(e)&&Object.values(e).some(s=>s),ct=e=>{for(const s in e)if(Q(e[s]))return!0;return!1};function Ae(e,s={}){const t=Array.isArray(e);if(S(e)||t)for(const u in e)Array.isArray(e[u])||S(e[u])&&!ct(e[u])?(s[u]=Array.isArray(e[u])?[]:{},Ae(e[u],s[u])):U(e[u])||(s[u]=!0);return s}function dt(e,s,t){const u=Array.isArray(e);if(S(e)||u)for(const n in e)Array.isArray(e[n])||S(e[n])&&!ct(e[n])?w(s)||Fe(t[n])?t[n]=Array.isArray(e[n])?Ae(e[n],[]):{...Ae(e[n])}:dt(e[n],U(s)?{}:s[n],t[n]):t[n]=!Y(e[n],s[n]);return t}var ge=(e,s)=>dt(e,s,Ae(s)),yt=(e,{valueAsNumber:s,valueAsDate:t,setValueAs:u})=>w(e)?e:s?e===""?NaN:e&&+e:t&&$(e)?new Date(e):u?u(e):e;function Ce(e){const s=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):s.disabled))return Ue(s)?s.files:pe(s)?ot(e.refs).value:ft(s)?[...s.selectedOptions].map(({value:t})=>t):fe(s)?nt(e.refs).value:yt(w(s.value)?e.ref.value:s.value,e)}var Ot=(e,s,t,u)=>{const n={};for(const l of e){const y=c(s,l);y&&x(n,l,y._f)}return{criteriaMode:t,names:[...e],fields:n,shouldUseNativeValidation:u}},ne=e=>w(e)?e:Ve(e)?e.source:S(e)?Ve(e.value)?e.value.source:e.value:e,Ut=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Ze(e,s,t){const u=c(e,t);if(u||Oe(t))return{error:u,name:t};const n=t.split(".");for(;n.length;){const l=n.join("."),y=c(s,l),h=c(e,l);if(y&&!Array.isArray(y)&&t!==l)return{name:t};if(h&&h.type)return{name:l,error:h};n.pop()}return{name:t}}var pt=(e,s,t,u,n)=>n.isOnAll?!1:!t&&n.isOnTouch?!(s||e):(t?u.isOnBlur:n.isOnBlur)?!e:(t?u.isOnChange:n.isOnChange)?e:!0,Mt=(e,s)=>!ce(c(e,s)).length&&T(e,s);const Bt={mode:j.onSubmit,reValidateMode:j.onChange,shouldFocusError:!0};function Pt(e={}){let s={...Bt,...e},t={submitCount:0,isDirty:!1,isLoading:Q(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},u={},n=S(s.defaultValues)||S(s.values)?p(s.defaultValues||s.values)||{}:{},l=s.shouldUnregister?{}:p(n),y={action:!1,mount:!1,watch:!1},h={mount:new Set,unMount:new Set,array:new Set,watch:new Set},m,k=0;const _={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={values:ke(),array:ke(),state:ke()},N=Ke(s.mode),H=Ke(s.reValidateMode),L=s.criteriaMode===j.all,xe=r=>i=>{clearTimeout(k),k=setTimeout(r,i)},J=async r=>{if(_.isValid||r){const i=s.resolver?I((await X()).errors):await B(u,!0);i!==t.isValid&&v.state.next({isValid:i})}},ie=(r,i)=>{(_.isValidating||_.validatingFields)&&(i.forEach(a=>{x(t.validatingFields,a,r)}),t.isValidating=Lt(t.validatingFields),v.state.next({validatingFields:t.validatingFields,isValidating:t.isValidating}))},V=(r,i=[],a,d,f=!0,o=!0)=>{if(d&&a){if(y.action=!0,o&&Array.isArray(c(u,r))){const g=a(c(u,r),d.argA,d.argB);f&&x(u,r,g)}if(o&&Array.isArray(c(t.errors,r))){const g=a(c(t.errors,r),d.argA,d.argB);f&&x(t.errors,r,g),Mt(t.errors,r)}if(_.touchedFields&&o&&Array.isArray(c(t.touchedFields,r))){const g=a(c(t.touchedFields,r),d.argA,d.argB);f&&x(t.touchedFields,r,g)}_.dirtyFields&&(t.dirtyFields=ge(n,l)),v.state.next({name:r,isDirty:b(r,i),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else x(l,r,i)},K=(r,i)=>{x(t.errors,r,i),v.state.next({errors:t.errors})},G=r=>{t.errors=r,v.state.next({errors:t.errors,isValid:!1})},E=(r,i,a,d)=>{const f=c(u,r);if(f){const o=c(l,r,w(a)?c(n,r):a);w(o)||d&&d.defaultChecked||i?x(l,r,i?o:Ce(f._f)):O(r,o),y.mount&&J()}},Z=(r,i,a,d,f)=>{let o=!1,g=!1;const A={name:r},R=!!(c(u,r)&&c(u,r)._f.disabled);if(!a||d){_.isDirty&&(g=t.isDirty,t.isDirty=A.isDirty=b(),o=g!==A.isDirty);const M=R||Y(c(n,r),i);g=!!(!R&&c(t.dirtyFields,r)),M||R?T(t.dirtyFields,r):x(t.dirtyFields,r,!0),A.dirtyFields=t.dirtyFields,o=o||_.dirtyFields&&g!==!M}if(a){const M=c(t.touchedFields,r);M||(x(t.touchedFields,r,a),A.touchedFields=t.touchedFields,o=o||_.touchedFields&&M!==a)}return o&&f&&v.state.next(A),o?A:{}},de=(r,i,a,d)=>{const f=c(t.errors,r),o=_.isValid&&W(i)&&t.isValid!==i;if(e.delayError&&a?(m=xe(()=>K(r,a)),m(e.delayError)):(clearTimeout(k),m=null,a?x(t.errors,r,a):T(t.errors,r)),(a?!Y(f,a):f)||!I(d)||o){const g={...d,...o&&W(i)?{isValid:i}:{},errors:t.errors,name:r};t={...t,...g},v.state.next(g)}ie(!1,Object.keys(t.validatingFields).filter(g=>g===r))},X=async r=>s.resolver(l,s.context,Ot(r||h.mount,u,s.criteriaMode,s.shouldUseNativeValidation)),ee=async r=>{const{errors:i}=await X(r);if(r)for(const a of r){const d=c(i,a);d?x(t.errors,a,d):T(t.errors,a)}else t.errors=i;return i},B=async(r,i,a={valid:!0})=>{for(const d in r){const f=r[d];if(f){const{_f:o,...g}=f;if(o){const A=h.array.has(o.name),R=await Ye(f,l,L,s.shouldUseNativeValidation&&!i,A);if(R[o.name]&&(a.valid=!1,i))break;!i&&(c(R,o.name)?A?Et(t.errors,R,o.name):x(t.errors,o.name,R[o.name]):T(t.errors,o.name))}g&&await B(g,i,a)}}return a.valid},ye=()=>{for(const r of h.unMount){const i=c(u,r);i&&(i._f.refs?i._f.refs.every(a=>!Ee(a)):!Ee(i._f.ref))&&me(r)}h.unMount=new Set},b=(r,i)=>(r&&i&&x(l,r,i),!Y(Me(),n)),F=(r,i,a)=>lt(r,h,{...y.mount?l:w(i)?n:$(r)?{[r]:i}:i},a,i),C=r=>ce(c(y.mount?l:n,r,e.shouldUnregister?c(n,r,[]):[])),O=(r,i,a={})=>{const d=c(u,r);let f=i;if(d){const o=d._f;o&&(!o.disabled&&x(l,r,yt(i,o)),f=be(o.ref)&&U(i)?"":i,ft(o.ref)?[...o.ref.options].forEach(g=>g.selected=f.includes(g.value)):o.refs?fe(o.ref)?o.refs.length>1?o.refs.forEach(g=>(!g.defaultChecked||!g.disabled)&&(g.checked=Array.isArray(f)?!!f.find(A=>A===g.value):f===g.value)):o.refs[0]&&(o.refs[0].checked=!!f):o.refs.forEach(g=>g.checked=g.value===f):Ue(o.ref)?o.ref.value="":(o.ref.value=f,o.ref.type||v.values.next({name:r,values:{...l}})))}(a.shouldDirty||a.shouldTouch)&&Z(r,f,a.shouldTouch,a.shouldDirty,!0),a.shouldValidate&&ae(r)},q=(r,i,a)=>{for(const d in i){const f=i[d],o=`${r}.${d}`,g=c(u,o);(h.array.has(r)||!Fe(f)||g&&!g._f)&&!se(f)?q(o,f,a):O(o,f,a)}},P=(r,i,a={})=>{const d=c(u,r),f=h.array.has(r),o=p(i);x(l,r,o),f?(v.array.next({name:r,values:{...l}}),(_.isDirty||_.dirtyFields)&&a.shouldDirty&&v.state.next({name:r,dirtyFields:ge(n,l),isDirty:b(r,o)})):d&&!d._f&&!U(o)?q(r,o,a):O(r,o,a),Ge(r,h)&&v.state.next({...t}),v.values.next({name:y.mount?r:void 0,values:{...l}})},ue=async r=>{const i=r.target;let a=i.name,d=!0;const f=c(u,a),o=()=>i.type?Ce(f._f):tt(r),g=A=>{d=Number.isNaN(A)||A===c(l,a,A)};if(f){let A,R;const M=o(),te=r.type===_e.BLUR||r.type===_e.FOCUS_OUT,bt=!Ut(f._f)&&!s.resolver&&!c(t.errors,a)&&!f._f.deps||pt(te,c(t.touchedFields,a),t.isSubmitted,H,N),we=Ge(a,h,te);x(l,a,M),te?(f._f.onBlur&&f._f.onBlur(r),m&&m(0)):f._f.onChange&&f._f.onChange(r);const Se=Z(a,M,te,!1),Vt=!I(Se)||we;if(!te&&v.values.next({name:a,type:r.type,values:{...l}}),bt)return _.isValid&&J(),Vt&&v.state.next({name:a,...we?{}:Se});if(!te&&we&&v.state.next({...t}),ie(!0,[a]),s.resolver){const{errors:He}=await X([a]);if(g(M),d){const Ft=Ze(t.errors,u,a),$e=Ze(He,u,Ft.name||a);A=$e.error,a=$e.name,R=I(He)}}else A=(await Ye(f,l,L,s.shouldUseNativeValidation))[a],g(M),d&&(A?R=!1:_.isValid&&(R=await B(u,!0)));d&&(f._f.deps&&ae(f._f.deps),de(a,R,A,Se))}},le=(r,i)=>{if(c(t.errors,i)&&r.focus)return r.focus(),1},ae=async(r,i={})=>{let a,d;const f=he(r);if(ie(!0,f),s.resolver){const o=await ee(w(r)?r:f);a=I(o),d=r?!f.some(g=>c(o,g)):a}else r?(d=(await Promise.all(f.map(async o=>{const g=c(u,o);return await B(g&&g._f?{[o]:g}:g)}))).every(Boolean),!(!d&&!t.isValid)&&J()):d=a=await B(u);return v.state.next({...!$(r)||_.isValid&&a!==t.isValid?{}:{name:r},...s.resolver||!r?{isValid:a}:{},errors:t.errors,isValidating:!1}),i.shouldFocus&&!d&&oe(u,le,r?f:h.mount),d},Me=r=>{const i={...n,...y.mount?l:{}};return w(r)?i:$(r)?c(i,r):r.map(a=>c(i,a))},Be=(r,i)=>({invalid:!!c((i||t).errors,r),isDirty:!!c((i||t).dirtyFields,r),isTouched:!!c((i||t).touchedFields,r),isValidating:!!c((i||t).validatingFields,r),error:c((i||t).errors,r)}),gt=r=>{r&&he(r).forEach(i=>T(t.errors,i)),v.state.next({errors:r?t.errors:{}})},Pe=(r,i,a)=>{const d=(c(u,r,{_f:{}})._f||{}).ref;x(t.errors,r,{...i,ref:d}),v.state.next({name:r,errors:t.errors,isValid:!1}),a&&a.shouldFocus&&d&&d.focus&&d.focus()},ht=(r,i)=>Q(r)?v.values.subscribe({next:a=>r(F(void 0,i),a)}):F(r,i,!0),me=(r,i={})=>{for(const a of r?he(r):h.mount)h.mount.delete(a),h.array.delete(a),i.keepValue||(T(u,a),T(l,a)),!i.keepError&&T(t.errors,a),!i.keepDirty&&T(t.dirtyFields,a),!i.keepTouched&&T(t.touchedFields,a),!i.keepIsValidating&&T(t.validatingFields,a),!s.shouldUnregister&&!i.keepDefaultValue&&T(n,a);v.values.next({values:{...l}}),v.state.next({...t,...i.keepDirty?{isDirty:b()}:{}}),!i.keepIsValid&&J()},Ie=({disabled:r,name:i,field:a,fields:d,value:f})=>{if(W(r)){const o=r?void 0:w(f)?Ce(a?a._f:c(d,i)._f):f;x(l,i,o),Z(i,o,!1,!1,!0)}},De=(r,i={})=>{let a=c(u,r);const d=W(i.disabled);return x(u,r,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:r}},name:r,mount:!0,...i}}),h.mount.add(r),a?Ie({field:a,disabled:i.disabled,name:r,value:i.value}):E(r,!0,i.value),{...d?{disabled:i.disabled}:{},...s.progressive?{required:!!i.required,min:ne(i.min),max:ne(i.max),minLength:ne(i.minLength),maxLength:ne(i.maxLength),pattern:ne(i.pattern)}:{},name:r,onChange:ue,onBlur:ue,ref:f=>{if(f){De(r,i),a=c(u,r);const o=w(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,g=Tt(o),A=a._f.refs||[];if(g?A.find(R=>R===o):o===a._f.ref)return;x(u,r,{_f:{...a._f,...g?{refs:[...A.filter(Ee),o,...Array.isArray(c(n,r))?[{}]:[]],ref:{type:o.type,name:r}}:{ref:o}}}),E(r,!1,void 0,o)}else a=c(u,r,{}),a._f&&(a._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(rt(h.array,r)&&y.action)&&h.unMount.add(r)}}},Ne=()=>s.shouldFocusError&&oe(u,le,h.mount),vt=r=>{W(r)&&(v.state.next({disabled:r}),oe(u,(i,a)=>{let d=r;const f=c(u,a);f&&W(f._f.disabled)&&(d||(d=f._f.disabled)),i.disabled=d},0,!1))},qe=(r,i)=>async a=>{let d;a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let f=p(l);if(v.state.next({isSubmitting:!0}),s.resolver){const{errors:o,values:g}=await X();t.errors=o,f=g}else await B(u);if(T(t.errors,"root"),I(t.errors)){v.state.next({errors:{}});try{await r(f,a)}catch(o){d=o}}else i&&await i({...t.errors},a),Ne(),setTimeout(Ne);if(v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:I(t.errors)&&!d,submitCount:t.submitCount+1,errors:t.errors}),d)throw d},_t=(r,i={})=>{c(u,r)&&(w(i.defaultValue)?P(r,p(c(n,r))):(P(r,i.defaultValue),x(n,r,p(i.defaultValue))),i.keepTouched||T(t.touchedFields,r),i.keepDirty||(T(t.dirtyFields,r),t.isDirty=i.defaultValue?b(r,p(c(n,r))):b()),i.keepError||(T(t.errors,r),_.isValid&&J()),v.state.next({...t}))},We=(r,i={})=>{const a=r?p(r):n,d=p(a),f=I(r),o=f?n:d;if(i.keepDefaultValues||(n=a),!i.keepValues){if(i.keepDirtyValues)for(const g of h.mount)c(t.dirtyFields,g)?x(o,g,c(l,g)):P(g,c(o,g));else{if(Re&&w(r))for(const g of h.mount){const A=c(u,g);if(A&&A._f){const R=Array.isArray(A._f.refs)?A._f.refs[0]:A._f.ref;if(be(R)){const M=R.closest("form");if(M){M.reset();break}}}}u={}}l=e.shouldUnregister?i.keepDefaultValues?p(n):{}:p(o),v.array.next({values:{...o}}),v.values.next({values:{...o}})}h={mount:i.keepDirtyValues?h.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},y.mount=!_.isValid||!!i.keepIsValid||!!i.keepDirtyValues,y.watch=!!e.shouldUnregister,v.state.next({submitCount:i.keepSubmitCount?t.submitCount:0,isDirty:f?!1:i.keepDirty?t.isDirty:!!(i.keepDefaultValues&&!Y(r,n)),isSubmitted:i.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:f?[]:i.keepDirtyValues?i.keepDefaultValues&&l?ge(n,l):t.dirtyFields:i.keepDefaultValues&&r?ge(n,r):{},touchedFields:i.keepTouched?t.touchedFields:{},errors:i.keepErrors?t.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},je=(r,i)=>We(Q(r)?r(l):r,i);return{control:{register:De,unregister:me,getFieldState:Be,handleSubmit:qe,setError:Pe,_executeSchema:X,_getWatch:F,_getDirty:b,_updateValid:J,_removeUnmounted:ye,_updateFieldArray:V,_updateDisabledField:Ie,_getFieldArray:C,_reset:We,_resetDefaultValues:()=>Q(s.defaultValues)&&s.defaultValues().then(r=>{je(r,s.resetOptions),v.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_disableForm:vt,_subjects:v,_proxyFormState:_,_setErrors:G,get _fields(){return u},get _formValues(){return l},get _state(){return y},set _state(r){y=r},get _defaultValues(){return n},get _names(){return h},set _names(r){h=r},get _formState(){return t},set _formState(r){t=r},get _options(){return s},set _options(r){s={...s,...r}}},trigger:ae,register:De,handleSubmit:qe,watch:ht,setValue:P,getValues:Me,reset:je,resetField:_t,clearErrors:gt,unregister:me,setError:Pe,setFocus:(r,i={})=>{const a=c(u,r),d=a&&a._f;if(d){const f=d.refs?d.refs[0]:d.ref;f.focus&&(f.focus(),i.shouldSelect&&f.select())}},getFieldState:Be}}function Ht(e={}){const s=D.useRef(),t=D.useRef(),[u,n]=D.useState({isDirty:!1,isValidating:!1,isLoading:Q(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:Q(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...Pt(e),formState:u});const l=s.current.control;return l._options=e,Le({subject:l._subjects.state,next:y=>{it(y,l._proxyFormState,l._updateFormState,!0)&&n({...l._formState})}}),D.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),D.useEffect(()=>{if(l._proxyFormState.isDirty){const y=l._getDirty();y!==u.isDirty&&l._subjects.state.next({isDirty:y})}},[l,u.isDirty]),D.useEffect(()=>{e.values&&!Y(e.values,t.current)?(l._reset(e.values,l._options.resetOptions),t.current=e.values,n(y=>({...y}))):l._resetDefaultValues()},[e.values,l]),D.useEffect(()=>{e.errors&&l._setErrors(e.errors)},[e.errors,l]),D.useEffect(()=>{l._state.mount||(l._updateValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),D.useEffect(()=>{e.shouldUnregister&&l._subjects.values.next({values:l._getWatch()})},[e.shouldUnregister,l]),s.current.formState=st(u,l),s.current}export{jt as C,Ht as u};
