import{a as y}from"./chunk-YWFND7JV-DJ1mntJZ.js";import{_ as f,d as g,y as W,B as C,l as m,T as H,u as w,U as R}from"./mermaid.core-ctJsvNbJ.js";import{s as X,c as Y}from"./isEmpty-CPJeZ-IN.js";import{l as U}from"./line-DIkzZjhL.js";var O=f((a,t,r,h)=>{t.forEach(i=>{J[i](a,r,h)})},"insertMarkers"),Z=f((a,t,r)=>{m.trace("Making markers for ",r),a.append("defs").append("marker").attr("id",r+"_"+t+"-extensionStart").attr("class","marker extension "+t).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),a.append("defs").append("marker").attr("id",r+"_"+t+"-extensionEnd").attr("class","marker extension "+t).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z")},"extension"),A=f((a,t,r)=>{a.append("defs").append("marker").attr("id",r+"_"+t+"-compositionStart").attr("class","marker composition "+t).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),a.append("defs").append("marker").attr("id",r+"_"+t+"-compositionEnd").attr("class","marker composition "+t).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},"composition"),I=f((a,t,r)=>{a.append("defs").append("marker").attr("id",r+"_"+t+"-aggregationStart").attr("class","marker aggregation "+t).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),a.append("defs").append("marker").attr("id",r+"_"+t+"-aggregationEnd").attr("class","marker aggregation "+t).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},"aggregation"),N=f((a,t,r)=>{a.append("defs").append("marker").attr("id",r+"_"+t+"-dependencyStart").attr("class","marker dependency "+t).attr("refX",6).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),a.append("defs").append("marker").attr("id",r+"_"+t+"-dependencyEnd").attr("class","marker dependency "+t).attr("refX",13).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},"dependency"),q=f((a,t,r)=>{a.append("defs").append("marker").attr("id",r+"_"+t+"-lollipopStart").attr("class","marker lollipop "+t).attr("refX",13).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6),a.append("defs").append("marker").attr("id",r+"_"+t+"-lollipopEnd").attr("class","marker lollipop "+t).attr("refX",1).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6)},"lollipop"),Q=f((a,t,r)=>{a.append("marker").attr("id",r+"_"+t+"-pointEnd").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",6).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),a.append("marker").attr("id",r+"_"+t+"-pointStart").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",4.5).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 5 L 10 10 L 10 0 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},"point"),z=f((a,t,r)=>{a.append("marker").attr("id",r+"_"+t+"-circleEnd").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",11).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),a.append("marker").attr("id",r+"_"+t+"-circleStart").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",-1).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},"circle"),F=f((a,t,r)=>{a.append("marker").attr("id",r+"_"+t+"-crossEnd").attr("class","marker cross "+t).attr("viewBox","0 0 11 11").attr("refX",12).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0"),a.append("marker").attr("id",r+"_"+t+"-crossStart").attr("class","marker cross "+t).attr("viewBox","0 0 11 11").attr("refX",-1).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0")},"cross"),G=f((a,t,r)=>{a.append("defs").append("marker").attr("id",r+"_"+t+"-barbEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",14).attr("markerUnits","strokeWidth").attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")},"barb"),J={extension:Z,composition:A,aggregation:I,dependency:N,lollipop:q,point:Q,circle:z,cross:F,barb:G},et=O,V=f((a,t,r,h,i)=>{t.arrowTypeStart&&E(a,"start",t.arrowTypeStart,r,h,i),t.arrowTypeEnd&&E(a,"end",t.arrowTypeEnd,r,h,i)},"addEdgeMarkers"),j={arrow_cross:"cross",arrow_point:"point",arrow_barb:"barb",arrow_circle:"circle",aggregation:"aggregation",extension:"extension",composition:"composition",dependency:"dependency",lollipop:"lollipop"},E=f((a,t,r,h,i,c)=>{const n=j[r];if(!n){m.warn(`Unknown arrow type: ${r}`);return}const e=t==="start"?"Start":"End";a.attr(`marker-${t}`,`url(${h}#${i}_${c}-${n}${e})`)},"addEdgeMarker"),v={},k={},st=f(()=>{v={},k={}},"clear"),nt=f((a,t)=>{const r=g(),h=W(r.flowchart.htmlLabels),i=t.labelType==="markdown"?C(a,t.label,{style:t.labelStyle,useHtmlLabels:h,addSvgBackground:!0},r):y(t.label,t.labelStyle),c=a.insert("g").attr("class","edgeLabel"),n=c.insert("g").attr("class","label");n.node().appendChild(i);let e=i.getBBox();if(h){const o=i.children[0],l=X(i);e=o.getBoundingClientRect(),l.attr("width",e.width),l.attr("height",e.height)}n.attr("transform","translate("+-e.width/2+", "+-e.height/2+")"),v[t.id]=c,t.width=e.width,t.height=e.height;let s;if(t.startLabelLeft){const o=y(t.startLabelLeft,t.labelStyle),l=a.insert("g").attr("class","edgeTerminals"),d=l.insert("g").attr("class","inner");s=d.node().appendChild(o);const p=o.getBBox();d.attr("transform","translate("+-p.width/2+", "+-p.height/2+")"),k[t.id]||(k[t.id]={}),k[t.id].startLeft=l,u(s,t.startLabelLeft)}if(t.startLabelRight){const o=y(t.startLabelRight,t.labelStyle),l=a.insert("g").attr("class","edgeTerminals"),d=l.insert("g").attr("class","inner");s=l.node().appendChild(o),d.node().appendChild(o);const p=o.getBBox();d.attr("transform","translate("+-p.width/2+", "+-p.height/2+")"),k[t.id]||(k[t.id]={}),k[t.id].startRight=l,u(s,t.startLabelRight)}if(t.endLabelLeft){const o=y(t.endLabelLeft,t.labelStyle),l=a.insert("g").attr("class","edgeTerminals"),d=l.insert("g").attr("class","inner");s=d.node().appendChild(o);const p=o.getBBox();d.attr("transform","translate("+-p.width/2+", "+-p.height/2+")"),l.node().appendChild(o),k[t.id]||(k[t.id]={}),k[t.id].endLeft=l,u(s,t.endLabelLeft)}if(t.endLabelRight){const o=y(t.endLabelRight,t.labelStyle),l=a.insert("g").attr("class","edgeTerminals"),d=l.insert("g").attr("class","inner");s=d.node().appendChild(o);const p=o.getBBox();d.attr("transform","translate("+-p.width/2+", "+-p.height/2+")"),l.node().appendChild(o),k[t.id]||(k[t.id]={}),k[t.id].endRight=l,u(s,t.endLabelRight)}return i},"insertEdgeLabel");function u(a,t){g().flowchart.htmlLabels&&a&&(a.style.width=t.length*9+"px",a.style.height="12px")}f(u,"setTerminalWidth");var lt=f((a,t)=>{m.debug("Moving label abc88 ",a.id,a.label,v[a.id],t);let r=t.updatedPath?t.updatedPath:t.originalPath;const h=g(),{subGraphTitleTotalMargin:i}=H(h);if(a.label){const c=v[a.id];let n=a.x,e=a.y;if(r){const s=w.calcLabelPosition(r);m.debug("Moving label "+a.label+" from (",n,",",e,") to (",s.x,",",s.y,") abc88"),t.updatedPath&&(n=s.x,e=s.y)}c.attr("transform",`translate(${n}, ${e+i/2})`)}if(a.startLabelLeft){const c=k[a.id].startLeft;let n=a.x,e=a.y;if(r){const s=w.calcTerminalLabelPosition(a.arrowTypeStart?10:0,"start_left",r);n=s.x,e=s.y}c.attr("transform",`translate(${n}, ${e})`)}if(a.startLabelRight){const c=k[a.id].startRight;let n=a.x,e=a.y;if(r){const s=w.calcTerminalLabelPosition(a.arrowTypeStart?10:0,"start_right",r);n=s.x,e=s.y}c.attr("transform",`translate(${n}, ${e})`)}if(a.endLabelLeft){const c=k[a.id].endLeft;let n=a.x,e=a.y;if(r){const s=w.calcTerminalLabelPosition(a.arrowTypeEnd?10:0,"end_left",r);n=s.x,e=s.y}c.attr("transform",`translate(${n}, ${e})`)}if(a.endLabelRight){const c=k[a.id].endRight;let n=a.x,e=a.y;if(r){const s=w.calcTerminalLabelPosition(a.arrowTypeEnd?10:0,"end_right",r);n=s.x,e=s.y}c.attr("transform",`translate(${n}, ${e})`)}},"positionEdgeLabel"),K=f((a,t)=>{const r=a.x,h=a.y,i=Math.abs(t.x-r),c=Math.abs(t.y-h),n=a.width/2,e=a.height/2;return i>=n||c>=e},"outsideNode"),D=f((a,t,r)=>{m.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(r)}
  node        : x:${a.x} y:${a.y} w:${a.width} h:${a.height}`);const h=a.x,i=a.y,c=Math.abs(h-r.x),n=a.width/2;let e=r.x<t.x?n-c:n+c;const s=a.height/2,o=Math.abs(t.y-r.y),l=Math.abs(t.x-r.x);if(Math.abs(i-t.y)*n>Math.abs(h-t.x)*s){let d=r.y<t.y?t.y-s-i:i-s-t.y;e=l*d/o;const p={x:r.x<t.x?r.x+e:r.x-l+e,y:r.y<t.y?r.y+o-d:r.y-o+d};return e===0&&(p.x=t.x,p.y=t.y),l===0&&(p.x=t.x),o===0&&(p.y=t.y),m.debug(`abc89 topp/bott calc, Q ${o}, q ${d}, R ${l}, r ${e}`,p),p}else{r.x<t.x?e=t.x-n-h:e=h-n-t.x;let d=o*e/l,p=r.x<t.x?r.x+l-e:r.x-l+e,x=r.y<t.y?r.y+d:r.y-d;return m.debug(`sides calc abc89, Q ${o}, q ${d}, R ${l}, r ${e}`,{_x:p,_y:x}),e===0&&(p=t.x,x=t.y),l===0&&(p=t.x),o===0&&(x=t.y),{x:p,y:x}}},"intersection"),_=f((a,t)=>{m.debug("abc88 cutPathAtIntersect",a,t);let r=[],h=a[0],i=!1;return a.forEach(c=>{if(!K(t,c)&&!i){const n=D(t,h,c);let e=!1;r.forEach(s=>{e=e||s.x===n.x&&s.y===n.y}),r.some(s=>s.x===n.x&&s.y===n.y)||r.push(n),i=!0}else h=c,i||r.push(c)}),r},"cutPathAtIntersect"),it=f(function(a,t,r,h,i,c,n){let e=r.points;m.debug("abc88 InsertEdge: edge=",r,"e=",t);let s=!1;const o=c.node(t.v);var l=c.node(t.w);l?.intersect&&o?.intersect&&(e=e.slice(1,r.points.length-1),e.unshift(o.intersect(e[0])),e.push(l.intersect(e[e.length-1]))),r.toCluster&&(m.debug("to cluster abc88",h[r.toCluster]),e=_(r.points,h[r.toCluster].node),s=!0),r.fromCluster&&(m.debug("from cluster abc88",h[r.fromCluster]),e=_(e.reverse(),h[r.fromCluster].node).reverse(),s=!0);const d=e.filter(T=>!Number.isNaN(T.y));let p=Y;r.curve&&(i==="graph"||i==="flowchart")&&(p=r.curve);const{x,y:$}=R(r),S=U().x(x).y($).curve(p);let b;switch(r.thickness){case"normal":b="edge-thickness-normal";break;case"thick":b="edge-thickness-thick";break;case"invisible":b="edge-thickness-thick";break;default:b=""}switch(r.pattern){case"solid":b+=" edge-pattern-solid";break;case"dotted":b+=" edge-pattern-dotted";break;case"dashed":b+=" edge-pattern-dashed";break}const B=a.append("path").attr("d",S(d)).attr("id",r.id).attr("class"," "+b+(r.classes?" "+r.classes:"")).attr("style",r.style);let L="";(g().flowchart.arrowMarkerAbsolute||g().state.arrowMarkerAbsolute)&&(L=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,L=L.replace(/\(/g,"\\("),L=L.replace(/\)/g,"\\)")),V(B,r,L,n,i);let M={};return s&&(M.updatedPath=e),M.originalPath=r.points,M},"insertEdge");export{it as a,st as c,nt as i,et as m,lt as p};
