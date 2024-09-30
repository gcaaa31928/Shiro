import{r as he,j as O,R as Ve}from"./index-DP3cqZMk.js";import{m as Ie}from"./proxy-Nduva4Ti.js";function xe(e){var t,r,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=xe(e[t]))&&(o&&(o+=" "),o+=r)}else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function ne(){for(var e,t,r=0,o="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=xe(e))&&(o&&(o+=" "),o+=t);return o}const ce="-",$e=e=>{const t=Ee(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:i=>{const s=i.split(ce);return s[0]===""&&s.length!==1&&s.shift(),ve(s,t)||Te(i)},getConflictingClassGroupIds:(i,s)=>{const u=r[i]||[];return s&&o[i]?[...u,...o[i]]:u}}},ve=(e,t)=>{if(e.length===0)return t.classGroupId;const r=e[0],o=t.nextPart.get(r),a=o?ve(e.slice(1),o):void 0;if(a)return a;if(t.validators.length===0)return;const n=e.join(ce);return t.validators.find(({validator:i})=>i(n))?.classGroupId},pe=/^\[(.+)\]$/,Te=e=>{if(pe.test(e)){const t=pe.exec(e)[1],r=t?.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}},Ee=e=>{const{theme:t,prefix:r}=e,o={nextPart:new Map,validators:[]};return Le(Object.entries(e.classGroups),r).forEach(([n,i])=>{se(i,o,n,t)}),o},se=(e,t,r,o)=>{e.forEach(a=>{if(typeof a=="string"){const n=a===""?t:fe(t,a);n.classGroupId=r;return}if(typeof a=="function"){if(Oe(a)){se(a(o),t,r,o);return}t.validators.push({validator:a,classGroupId:r});return}Object.entries(a).forEach(([n,i])=>{se(i,fe(t,n),r,o)})})},fe=(e,t)=>{let r=e;return t.split(ce).forEach(o=>{r.nextPart.has(o)||r.nextPart.set(o,{nextPart:new Map,validators:[]}),r=r.nextPart.get(o)}),r},Oe=e=>e.isThemeGetter,Le=(e,t)=>t?e.map(([r,o])=>{const a=o.map(n=>typeof n=="string"?t+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([i,s])=>[t+i,s])):n);return[r,a]}):e,Be=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,o=new Map;const a=(n,i)=>{r.set(n,i),t++,t>e&&(t=0,o=r,r=new Map)};return{get(n){let i=r.get(n);if(i!==void 0)return i;if((i=o.get(n))!==void 0)return a(n,i),i},set(n,i){r.has(n)?r.set(n,i):a(n,i)}}},we="!",We=e=>{const{separator:t,experimentalParseClassName:r}=e,o=t.length===1,a=t[0],n=t.length,i=s=>{const u=[];let C=0,m=0,j;for(let b=0;b<s.length;b++){let A=s[b];if(C===0){if(A===a&&(o||s.slice(b,b+n)===t)){u.push(s.slice(m,b)),m=b+n;continue}if(A==="/"){j=b;continue}}A==="["?C++:A==="]"&&C--}const S=u.length===0?s:s.substring(m),G=S.startsWith(we),M=G?S.substring(1):S,k=j&&j>m?j-m:void 0;return{modifiers:u,hasImportantModifier:G,baseClassName:M,maybePostfixModifierPosition:k}};return r?s=>r({className:s,parseClassName:i}):i},_e=e=>{if(e.length<=1)return e;const t=[];let r=[];return e.forEach(o=>{o[0]==="["?(t.push(...r.sort(),o),r=[]):r.push(o)}),t.push(...r.sort()),t},Fe=e=>({cache:Be(e.cacheSize),parseClassName:We(e),...$e(e)}),Je=/\s+/,Ue=(e,t)=>{const{parseClassName:r,getClassGroupId:o,getConflictingClassGroupIds:a}=t,n=[],i=e.trim().split(Je);let s="";for(let u=i.length-1;u>=0;u-=1){const C=i[u],{modifiers:m,hasImportantModifier:j,baseClassName:S,maybePostfixModifierPosition:G}=r(C);let M=!!G,k=o(M?S.substring(0,G):S);if(!k){if(!M){s=C+(s.length>0?" "+s:s);continue}if(k=o(S),!k){s=C+(s.length>0?" "+s:s);continue}M=!1}const b=_e(m).join(":"),A=j?b+we:b,y=A+k;if(n.includes(y))continue;n.push(y);const L=a(k,M);for(let P=0;P<L.length;++P){const B=L[P];n.push(A+B)}s=C+(s.length>0?" "+s:s)}return s};function qe(){let e=0,t,r,o="";for(;e<arguments.length;)(t=arguments[e++])&&(r=ke(t))&&(o&&(o+=" "),o+=r);return o}const ke=e=>{if(typeof e=="string")return e;let t,r="";for(let o=0;o<e.length;o++)e[o]&&(t=ke(e[o]))&&(r&&(r+=" "),r+=t);return r};function le(e,...t){let r,o,a,n=i;function i(u){const C=t.reduce((m,j)=>j(m),e());return r=Fe(C),o=r.cache.get,a=r.cache.set,n=s,s(u)}function s(u){const C=o(u);if(C)return C;const m=Ue(u,r);return a(u,m),m}return function(){return n(qe.apply(null,arguments))}}const w=e=>{const t=r=>r[e]||[];return t.isThemeGetter=!0,t},Ce=/^\[(?:([a-z-]+):)?(.+)\]$/i,Ke=/^\d+\/\d+$/,He=new Set(["px","full","screen"]),Ze=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Xe=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Qe=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Ye=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,De=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,V=e=>_(e)||He.has(e)||Ke.test(e),T=e=>F(e,"length",ir),_=e=>!!e&&!Number.isNaN(Number(e)),te=e=>F(e,"number",_),H=e=>!!e&&Number.isInteger(Number(e)),er=e=>e.endsWith("%")&&_(e.slice(0,-1)),c=e=>Ce.test(e),E=e=>Ze.test(e),rr=new Set(["length","size","percentage"]),tr=e=>F(e,rr,Ae),or=e=>F(e,"position",Ae),nr=new Set(["image","url"]),sr=e=>F(e,nr,cr),lr=e=>F(e,"",ar),Z=()=>!0,F=(e,t,r)=>{const o=Ce.exec(e);return o?o[1]?typeof t=="string"?o[1]===t:t.has(o[1]):r(o[2]):!1},ir=e=>Xe.test(e)&&!Qe.test(e),Ae=()=>!1,ar=e=>Ye.test(e),cr=e=>De.test(e),ie=()=>{const e=w("colors"),t=w("spacing"),r=w("blur"),o=w("brightness"),a=w("borderColor"),n=w("borderRadius"),i=w("borderSpacing"),s=w("borderWidth"),u=w("contrast"),C=w("grayscale"),m=w("hueRotate"),j=w("invert"),S=w("gap"),G=w("gradientColorStops"),M=w("gradientColorStopPositions"),k=w("inset"),b=w("margin"),A=w("opacity"),y=w("padding"),L=w("saturate"),P=w("scale"),B=w("sepia"),D=w("skew"),J=w("space"),U=w("translate"),W=()=>["auto","contain","none"],q=()=>["auto","hidden","clip","visible","scroll"],K=()=>["auto",c,t],l=()=>[c,t],p=()=>["",V,T],d=()=>["auto",_,c],g=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],f=()=>["solid","dashed","dotted","double","none"],h=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],x=()=>["start","end","center","between","around","evenly","stretch"],v=()=>["","0",c],z=()=>["auto","avoid","all","avoid-page","page","left","right","column"],N=()=>[_,c];return{cacheSize:500,separator:":",theme:{colors:[Z],spacing:[V,T],blur:["none","",E,c],brightness:N(),borderColor:[e],borderRadius:["none","","full",E,c],borderSpacing:l(),borderWidth:p(),contrast:N(),grayscale:v(),hueRotate:N(),invert:v(),gap:l(),gradientColorStops:[e],gradientColorStopPositions:[er,T],inset:K(),margin:K(),opacity:N(),padding:l(),saturate:N(),scale:N(),sepia:v(),skew:N(),space:l(),translate:l()},classGroups:{aspect:[{aspect:["auto","square","video",c]}],container:["container"],columns:[{columns:[E]}],"break-after":[{"break-after":z()}],"break-before":[{"break-before":z()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...g(),c]}],overflow:[{overflow:q()}],"overflow-x":[{"overflow-x":q()}],"overflow-y":[{"overflow-y":q()}],overscroll:[{overscroll:W()}],"overscroll-x":[{"overscroll-x":W()}],"overscroll-y":[{"overscroll-y":W()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[k]}],"inset-x":[{"inset-x":[k]}],"inset-y":[{"inset-y":[k]}],start:[{start:[k]}],end:[{end:[k]}],top:[{top:[k]}],right:[{right:[k]}],bottom:[{bottom:[k]}],left:[{left:[k]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",H,c]}],basis:[{basis:K()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",c]}],grow:[{grow:v()}],shrink:[{shrink:v()}],order:[{order:["first","last","none",H,c]}],"grid-cols":[{"grid-cols":[Z]}],"col-start-end":[{col:["auto",{span:["full",H,c]},c]}],"col-start":[{"col-start":d()}],"col-end":[{"col-end":d()}],"grid-rows":[{"grid-rows":[Z]}],"row-start-end":[{row:["auto",{span:[H,c]},c]}],"row-start":[{"row-start":d()}],"row-end":[{"row-end":d()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",c]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",c]}],gap:[{gap:[S]}],"gap-x":[{"gap-x":[S]}],"gap-y":[{"gap-y":[S]}],"justify-content":[{justify:["normal",...x()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...x(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...x(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[J]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[J]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",c,t]}],"min-w":[{"min-w":[c,t,"min","max","fit"]}],"max-w":[{"max-w":[c,t,"none","full","min","max","fit","prose",{screen:[E]},E]}],h:[{h:[c,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[c,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[c,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[c,t,"auto","min","max","fit"]}],"font-size":[{text:["base",E,T]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",te]}],"font-family":[{font:[Z]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",c]}],"line-clamp":[{"line-clamp":["none",_,te]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",V,c]}],"list-image":[{"list-image":["none",c]}],"list-style-type":[{list:["none","disc","decimal",c]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[A]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[A]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...f(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",V,T]}],"underline-offset":[{"underline-offset":["auto",V,c]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:l()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",c]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",c]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[A]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...g(),or]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",tr]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},sr]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[M]}],"gradient-via-pos":[{via:[M]}],"gradient-to-pos":[{to:[M]}],"gradient-from":[{from:[G]}],"gradient-via":[{via:[G]}],"gradient-to":[{to:[G]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[A]}],"border-style":[{border:[...f(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[A]}],"divide-style":[{divide:f()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:["",...f()]}],"outline-offset":[{"outline-offset":[V,c]}],"outline-w":[{outline:[V,T]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:p()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[A]}],"ring-offset-w":[{"ring-offset":[V,T]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",E,lr]}],"shadow-color":[{shadow:[Z]}],opacity:[{opacity:[A]}],"mix-blend":[{"mix-blend":[...h(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":h()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[o]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",E,c]}],grayscale:[{grayscale:[C]}],"hue-rotate":[{"hue-rotate":[m]}],invert:[{invert:[j]}],saturate:[{saturate:[L]}],sepia:[{sepia:[B]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[C]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[m]}],"backdrop-invert":[{"backdrop-invert":[j]}],"backdrop-opacity":[{"backdrop-opacity":[A]}],"backdrop-saturate":[{"backdrop-saturate":[L]}],"backdrop-sepia":[{"backdrop-sepia":[B]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",c]}],duration:[{duration:N()}],ease:[{ease:["linear","in","out","in-out",c]}],delay:[{delay:N()}],animate:[{animate:["none","spin","ping","pulse","bounce",c]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[P]}],"scale-x":[{"scale-x":[P]}],"scale-y":[{"scale-y":[P]}],rotate:[{rotate:[H,c]}],"translate-x":[{"translate-x":[U]}],"translate-y":[{"translate-y":[U]}],"skew-x":[{"skew-x":[D]}],"skew-y":[{"skew-y":[D]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",c]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",c]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":l()}],"scroll-mx":[{"scroll-mx":l()}],"scroll-my":[{"scroll-my":l()}],"scroll-ms":[{"scroll-ms":l()}],"scroll-me":[{"scroll-me":l()}],"scroll-mt":[{"scroll-mt":l()}],"scroll-mr":[{"scroll-mr":l()}],"scroll-mb":[{"scroll-mb":l()}],"scroll-ml":[{"scroll-ml":l()}],"scroll-p":[{"scroll-p":l()}],"scroll-px":[{"scroll-px":l()}],"scroll-py":[{"scroll-py":l()}],"scroll-ps":[{"scroll-ps":l()}],"scroll-pe":[{"scroll-pe":l()}],"scroll-pt":[{"scroll-pt":l()}],"scroll-pr":[{"scroll-pr":l()}],"scroll-pb":[{"scroll-pb":l()}],"scroll-pl":[{"scroll-pl":l()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",c]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[V,T,te]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},dr=(e,{cacheSize:t,prefix:r,separator:o,experimentalParseClassName:a,extend:n={},override:i={}})=>{Q(e,"cacheSize",t),Q(e,"prefix",r),Q(e,"separator",o),Q(e,"experimentalParseClassName",a);for(const s in i)ur(e[s],i[s]);for(const s in n)pr(e[s],n[s]);return e},Q=(e,t,r)=>{r!==void 0&&(e[t]=r)},ur=(e,t)=>{if(t)for(const r in t)Q(e,r,t[r])},pr=(e,t)=>{if(t)for(const r in t){const o=t[r];o!==void 0&&(e[r]=(e[r]||[]).concat(o))}},fr=(e,...t)=>typeof e=="function"?le(ie,e,...t):le(()=>dr(ie(),e),...t),ze=le(ie),br=(...e)=>ze(ne(e)),Cr=e=>{try{return JSON.parse(e)}catch{return null}},de=he.forwardRef(({children:e,...t},r)=>O.jsx(Ie.button,{initial:!0,whileFocus:{scale:1.02},whileHover:{scale:1.02},whileTap:{scale:.95},...t,ref:r,children:e}));de.displayName="MotionButtonBase";const gr=he.forwardRef(({className:e,children:t,...r},o)=>O.jsx(de,{ref:o,className:br("inline-flex rounded-full bg-accent p-2 text-center leading-none center hover:opacity-90",e),...r,children:t}));gr.displayName="RoundedIconButton";const mr=e=>Ve.createElement("a",e,e.children);var be=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,R=e=>!e||typeof e!="object"||Object.keys(e).length===0,yr=(e,t)=>JSON.stringify(e)===JSON.stringify(t);function je(e,t){e.forEach(function(r){Array.isArray(r)?je(r,t):t.push(r)})}function Se(e){let t=[];return je(e,t),t}var Me=(...e)=>Se(e).filter(Boolean),Ne=(e,t)=>{let r={},o=Object.keys(e),a=Object.keys(t);for(let n of o)if(a.includes(n)){let i=e[n],s=t[n];typeof i=="object"&&typeof s=="object"?r[n]=Ne(i,s):Array.isArray(i)||Array.isArray(s)?r[n]=Me(s,i):r[n]=s+" "+i}else r[n]=e[n];for(let n of a)o.includes(n)||(r[n]=t[n]);return r},ge=e=>!e||typeof e!="string"?e:e.replace(/\s+/g," ").trim(),hr={twMerge:!0,twMergeConfig:{},responsiveVariants:!1},Re=e=>e||void 0,Y=(...e)=>Re(Se(e).filter(Boolean).join(" ")),oe=null,I={},ae=!1,X=(...e)=>t=>t.twMerge?((!oe||ae)&&(ae=!1,oe=R(I)?ze:fr({...I,extend:{theme:I.theme,classGroups:I.classGroups,conflictingClassGroupModifiers:I.conflictingClassGroupModifiers,conflictingClassGroups:I.conflictingClassGroups,...I.extend}})),Re(oe(Y(e)))):Y(e),me=(e,t)=>{for(let r in t)e.hasOwnProperty(r)?e[r]=Y(e[r],t[r]):e[r]=t[r];return e},xr=(e,t)=>{let{extend:r=null,slots:o={},variants:a={},compoundVariants:n=[],compoundSlots:i=[],defaultVariants:s={}}=e,u={...hr,...t},C=r!=null&&r.base?Y(r.base,e?.base):e?.base,m=r!=null&&r.variants&&!R(r.variants)?Ne(a,r.variants):a,j=r!=null&&r.defaultVariants&&!R(r.defaultVariants)?{...r.defaultVariants,...s}:s;!R(u.twMergeConfig)&&!yr(u.twMergeConfig,I)&&(ae=!0,I=u.twMergeConfig);let S=R(r?.slots),G=R(o)?{}:{base:Y(e?.base,S&&r?.base),...o},M=S?G:me({...r?.slots},R(G)?{base:e?.base}:G),k=R(r?.compoundVariants)?n:Me(r?.compoundVariants,n),b=y=>{if(R(m)&&R(o)&&S)return X(C,y?.class,y?.className)(u);if(k&&!Array.isArray(k))throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof k}`);if(i&&!Array.isArray(i))throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof i}`);let L=(l,p,d=[],g)=>{let f=d;if(typeof p=="string")f=f.concat(ge(p).split(" ").map(h=>`${l}:${h}`));else if(Array.isArray(p))f=f.concat(p.reduce((h,x)=>h.concat(`${l}:${x}`),[]));else if(typeof p=="object"&&typeof g=="string"){for(let h in p)if(p.hasOwnProperty(h)&&h===g){let x=p[h];if(x&&typeof x=="string"){let v=ge(x);f[g]?f[g]=f[g].concat(v.split(" ").map(z=>`${l}:${z}`)):f[g]=v.split(" ").map(z=>`${l}:${z}`)}else Array.isArray(x)&&x.length>0&&(f[g]=x.reduce((v,z)=>v.concat(`${l}:${z}`),[]))}}return f},P=(l,p=m,d=null,g=null)=>{var f;let h=p[l];if(!h||R(h))return null;let x=(f=g?.[l])!=null?f:y?.[l];if(x===null)return null;let v=be(x),z=Array.isArray(u.responsiveVariants)&&u.responsiveVariants.length>0||u.responsiveVariants===!0,N=j?.[l],$=[];if(typeof v=="object"&&z)for(let[re,ue]of Object.entries(v)){let Pe=h[ue];if(re==="initial"){N=ue;continue}Array.isArray(u.responsiveVariants)&&!u.responsiveVariants.includes(re)||($=L(re,Pe,$,d))}let Ge=v!=null&&typeof v!="object"?v:be(N),ee=h[Ge||"false"];return typeof $=="object"&&typeof d=="string"&&$[d]?me($,ee):$.length>0?($.push(ee),$):ee},B=()=>m?Object.keys(m).map(l=>P(l,m)):null,D=(l,p)=>{if(!m||typeof m!="object")return null;let d=new Array;for(let g in m){let f=P(g,m,l,p),h=l==="base"&&typeof f=="string"?f:f&&f[l];h&&(d[d.length]=h)}return d},J={};for(let l in y)y[l]!==void 0&&(J[l]=y[l]);let U=(l,p)=>{var d;let g=typeof y?.[l]=="object"?{[l]:(d=y[l])==null?void 0:d.initial}:{};return{...j,...J,...g,...p}},W=(l=[],p)=>{let d=[];for(let{class:g,className:f,...h}of l){let x=!0;for(let[v,z]of Object.entries(h)){let N=U(v,p);if(Array.isArray(z)){if(!z.includes(N[v])){x=!1;break}}else if(N[v]!==z){x=!1;break}}x&&(g&&d.push(g),f&&d.push(f))}return d},q=l=>{let p=W(k,l);if(!Array.isArray(p))return p;let d={};for(let g of p)if(typeof g=="string"&&(d.base=X(d.base,g)(u)),typeof g=="object")for(let[f,h]of Object.entries(g))d[f]=X(d[f],h)(u);return d},K=l=>{if(i.length<1)return null;let p={};for(let{slots:d=[],class:g,className:f,...h}of i){if(!R(h)){let x=!0;for(let v of Object.keys(h)){let z=U(v,l)[v];if(z===void 0||(Array.isArray(h[v])?!h[v].includes(z):h[v]!==z)){x=!1;break}}if(!x)continue}for(let x of d)p[x]=p[x]||[],p[x].push([g,f])}return p};if(!R(o)||!S){let l={};if(typeof M=="object"&&!R(M))for(let p of Object.keys(M))l[p]=d=>{var g,f;return X(M[p],D(p,d),((g=q(d))!=null?g:[])[p],((f=K(d))!=null?f:[])[p],d?.class,d?.className)(u)};return l}return X(C,B(),W(k),y?.class,y?.className)(u)},A=()=>{if(!(!m||typeof m!="object"))return Object.keys(m)};return b.variantKeys=A(),b.extend=r,b.base=C,b.slots=M,b.variants=m,b.defaultVariants=j,b.compoundSlots=i,b.compoundVariants=k,b};const ye=xr({base:"inline-flex select-none cursor-default items-center gap-2 justify-center rounded-lg py-2 px-3 text-sm outline-offset-2 transition active:transition-none",variants:{variant:{primary:ne("bg-accent text-zinc-100","hover:contrast-[1.10] active:contrast-125","font-semibold","disabled:cursor-not-allowed disabled:bg-accent/40 disabled:opacity-80 disabled:dark:text-zinc-50","dark:text-neutral-800"),secondary:ne("group rounded-full bg-gradient-to-b from-zinc-50/50 to-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:from-zinc-900/50 dark:to-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20","disabled:cursor-not-allowed disabled:bg-gray-400 disabled:opacity-80 disabled:dark:bg-gray-800 disabled:dark:text-zinc-50")}}}),Ar=({variant:e="primary",className:t,isLoading:r,href:o,...a})=>{const n=r?vr:"div";return O.jsx(n,{children:o?O.jsx(mr,{href:o,className:ye({variant:e,className:t}),...a}):O.jsx(de,{className:ye({variant:e,className:t}),...a})})},vr=({children:e})=>O.jsxs("div",{className:"relative",children:[e,O.jsx("div",{className:"absolute inset-0 z-[1] flex items-center justify-center",children:O.jsx("div",{className:"loading loading-spinner size-5"})})]});export{mr as L,de as M,Ar as S,ne as a,xr as b,br as c,Cr as s};
