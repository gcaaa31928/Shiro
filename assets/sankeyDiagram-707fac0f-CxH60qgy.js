import{c as z,g as K,s as Q,a as H,b as J,o as q,n as Z,p as tt,i as et,G as it,J as nt}from"./index.demo-D7pjvFTb.js";import{s as L}from"./isEmpty-CPJeZ-IN.js";import{S as st,d as rt,l as ot,r as at,c as lt,j as ct}from"./sankeyLinkHorizontal-CgO6js3K.js";import"./owner-eagQWD7v.js";import{o as ht}from"./ordinal-Cboi1Yqb.js";import{d as ut}from"./Tableau10-CvOaoHrI.js";import"./index-DP3cqZMk.js";import"./FormInput-Cm8TmlFT.js";import"./StyledButton-Dw1NSLdk.js";import"./proxy-Nduva4Ti.js";import"./provider-CEmImVai.js";import"./viewport-CIRotvhe.js";import"./spring-C80N1tKa.js";import"./index-ruaAFTxf.js";import"./use-is-unmounted-s8iE4ntz.js";import"./use-event-callback-CNvn5lcI.js";import"./dom-BowoBODo.js";import"./use-drag-controls-BQqh8BIu.js";import"./visual-element-CEM7Lww2.js";import"./index-D6p5TRFo.js";import"./use-ref-value-Bw8XjGYB.js";import"./Shiki-BY37ZjXb.js";import"./index-D7tm2AmB.js";import"./use-motion-template-CG2NZtUh.js";import"./use-is-dark-BUJCkWoz.js";import"./LinkCard-DRRSL1xL.js";import"./image-qDpgj1f_.js";import"./Gallery-C9cHB7g0.js";import"./useQuery-C2j6PTNF.js";import"./alert-CD03bL8S.js";import"./index-BqTMT-9N.js";import"./FloatPopover-SF_LLQpc.js";import"./SocialSourceLink-Dld2WA2_.js";import"./Collapse-vVB60taR.js";import"./CodeEditor-CFTBtx3W.js";import"./index-LAI3pait.js";import"./cookie-Dph3Mm-z.js";import"./Mermaid-D36zXwpR.js";import"./init-Gi6I4Gst.js";var R=function(){var r=function(d,t,e,i){for(e=e||{},i=d.length;i--;e[d[i]]=t);return e},h=[1,9],y=[1,10],b=[1,5,10,12],E={trace:function(){},yy:{},symbols_:{error:2,start:3,SANKEY:4,NEWLINE:5,csv:6,opt_eof:7,record:8,csv_tail:9,EOF:10,"field[source]":11,COMMA:12,"field[target]":13,"field[value]":14,field:15,escaped:16,non_escaped:17,DQUOTE:18,ESCAPED_TEXT:19,NON_ESCAPED_TEXT:20,$accept:0,$end:1},terminals_:{2:"error",4:"SANKEY",5:"NEWLINE",10:"EOF",11:"field[source]",12:"COMMA",13:"field[target]",14:"field[value]",18:"DQUOTE",19:"ESCAPED_TEXT",20:"NON_ESCAPED_TEXT"},productions_:[0,[3,4],[6,2],[9,2],[9,0],[7,1],[7,0],[8,5],[15,1],[15,1],[16,3],[17,1]],performAction:function(t,e,i,o,l,s,S){var g=s.length-1;switch(l){case 7:const m=o.findOrCreateNode(s[g-4].trim().replaceAll('""','"')),_=o.findOrCreateNode(s[g-2].trim().replaceAll('""','"')),I=parseFloat(s[g].trim());o.addLink(m,_,I);break;case 8:case 9:case 11:this.$=s[g];break;case 10:this.$=s[g-1];break}},table:[{3:1,4:[1,2]},{1:[3]},{5:[1,3]},{6:4,8:5,15:6,16:7,17:8,18:h,20:y},{1:[2,6],7:11,10:[1,12]},r(y,[2,4],{9:13,5:[1,14]}),{12:[1,15]},r(b,[2,8]),r(b,[2,9]),{19:[1,16]},r(b,[2,11]),{1:[2,1]},{1:[2,5]},r(y,[2,2]),{6:17,8:5,15:6,16:7,17:8,18:h,20:y},{15:18,16:7,17:8,18:h,20:y},{18:[1,19]},r(y,[2,3]),{12:[1,20]},r(b,[2,10]),{15:21,16:7,17:8,18:h,20:y},r([1,5,10],[2,7])],defaultActions:{11:[2,1],12:[2,5]},parseError:function(t,e){if(e.recoverable)this.trace(t);else{var i=new Error(t);throw i.hash=e,i}},parse:function(t){var e=this,i=[0],o=[],l=[null],s=[],S=this.table,g="",m=0,_=0,I=2,U=1,G=s.slice.call(arguments,1),c=Object.create(this.lexer),x={yy:{}};for(var O in this.yy)Object.prototype.hasOwnProperty.call(this.yy,O)&&(x.yy[O]=this.yy[O]);c.setInput(t,x.yy),x.yy.lexer=c,x.yy.parser=this,typeof c.yylloc>"u"&&(c.yylloc={});var A=c.yylloc;s.push(A);var w=c.options&&c.options.ranges;typeof x.yy.parseError=="function"?this.parseError=x.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function n(){var v;return v=o.pop()||c.lex()||U,typeof v!="number"&&(v instanceof Array&&(o=v,v=o.pop()),v=e.symbols_[v]||v),v}for(var a,T,p,F,P={},N,k,Y,C;;){if(T=i[i.length-1],this.defaultActions[T]?p=this.defaultActions[T]:((a===null||typeof a>"u")&&(a=n()),p=S[T]&&S[T][a]),typeof p>"u"||!p.length||!p[0]){var W="";C=[];for(N in S[T])this.terminals_[N]&&N>I&&C.push("'"+this.terminals_[N]+"'");c.showPosition?W="Parse error on line "+(m+1)+`:
`+c.showPosition()+`
Expecting `+C.join(", ")+", got '"+(this.terminals_[a]||a)+"'":W="Parse error on line "+(m+1)+": Unexpected "+(a==U?"end of input":"'"+(this.terminals_[a]||a)+"'"),this.parseError(W,{text:c.match,token:this.terminals_[a]||a,line:c.yylineno,loc:A,expected:C})}if(p[0]instanceof Array&&p.length>1)throw new Error("Parse Error: multiple actions possible at state: "+T+", token: "+a);switch(p[0]){case 1:i.push(a),l.push(c.yytext),s.push(c.yylloc),i.push(p[1]),a=null,_=c.yyleng,g=c.yytext,m=c.yylineno,A=c.yylloc;break;case 2:if(k=this.productions_[p[1]][1],P.$=l[l.length-k],P._$={first_line:s[s.length-(k||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(k||1)].first_column,last_column:s[s.length-1].last_column},w&&(P._$.range=[s[s.length-(k||1)].range[0],s[s.length-1].range[1]]),F=this.performAction.apply(P,[g,_,m,x.yy,p[1],l,s].concat(G)),typeof F<"u")return F;k&&(i=i.slice(0,-1*k*2),l=l.slice(0,-1*k),s=s.slice(0,-1*k)),i.push(this.productions_[p[1]][0]),l.push(P.$),s.push(P._$),Y=S[i[i.length-2]][i[i.length-1]],i.push(Y);break;case 3:return!0}}return!0}},u=function(){var d={EOF:1,parseError:function(e,i){if(this.yy.parser)this.yy.parser.parseError(e,i);else throw new Error(e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t;var e=t.match(/(?:\r\n?|\n).*/g);return e?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var o=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var l=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===o.length?this.yylloc.first_column:0)+o[o.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[l[0],l[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+`
`+e+"^"},test_match:function(t,e){var i,o,l;if(this.options.backtrack_lexer&&(l={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(l.yylloc.range=this.yylloc.range.slice(0))),o=t[0].match(/(?:\r\n?|\n).*/g),o&&(this.yylineno+=o.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:o?o[o.length-1].length-o[o.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack){for(var s in l)this[s]=l[s];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var t,e,i,o;this._more||(this.yytext="",this.match="");for(var l=this._currentRules(),s=0;s<l.length;s++)if(i=this._input.match(this.rules[l[s]]),i&&(!e||i[0].length>e[0].length)){if(e=i,o=s,this.options.backtrack_lexer){if(t=this.test_match(i,l[s]),t!==!1)return t;if(this._backtrack){e=!1;continue}else return!1}else if(!this.options.flex)break}return e?(t=this.test_match(e,l[o]),t!==!1?t:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var e=this.next();return e||this.lex()},begin:function(e){this.conditionStack.push(e)},popState:function(){var e=this.conditionStack.length-1;return e>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(e){return e=this.conditionStack.length-1-Math.abs(e||0),e>=0?this.conditionStack[e]:"INITIAL"},pushState:function(e){this.begin(e)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(e,i,o,l){switch(o){case 0:return this.pushState("csv"),4;case 1:return 10;case 2:return 5;case 3:return 12;case 4:return this.pushState("escaped_text"),18;case 5:return 20;case 6:return this.popState("escaped_text"),18;case 7:return 19}},rules:[/^(?:sankey-beta\b)/i,/^(?:$)/i,/^(?:((\u000D\u000A)|(\u000A)))/i,/^(?:(\u002C))/i,/^(?:(\u0022))/i,/^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/i,/^(?:(\u0022)(?!(\u0022)))/i,/^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/i],conditions:{csv:{rules:[1,2,3,4,5,6,7],inclusive:!1},escaped_text:{rules:[6,7],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7],inclusive:!0}}};return d}();E.lexer=u;function f(){this.yy={}}return f.prototype=E,E.Parser=f,new f}();R.parser=R;const j=R;let D=[],M=[],$={};const yt=()=>{D=[],M=[],$={},tt()};class pt{constructor(h,y,b=0){this.source=h,this.target=y,this.value=b}}const ft=(r,h,y)=>{D.push(new pt(r,h,y))};class dt{constructor(h){this.ID=h}}const gt=r=>(r=et.sanitizeText(r,z()),$[r]||($[r]=new dt(r),M.push($[r])),$[r]),mt=()=>M,_t=()=>D,xt=()=>({nodes:M.map(r=>({id:r.ID})),links:D.map(r=>({source:r.source.ID,target:r.target.ID,value:r.value}))}),kt={nodesMap:$,getConfig:()=>z().sankey,getNodes:mt,getLinks:_t,getGraph:xt,addLink:ft,findOrCreateNode:gt,getAccTitle:K,setAccTitle:Q,getAccDescription:H,setAccDescription:J,getDiagramTitle:q,setDiagramTitle:Z,clear:yt},B=class V{static next(h){return new V(h+ ++V.count)}constructor(h){this.id=h,this.href=`#${h}`}toString(){return"url("+this.href+")"}};B.count=0;let X=B;const vt={left:ot,right:at,center:lt,justify:ct},bt=function(r,h,y,b){const{securityLevel:E,sankey:u}=z(),f=it.sankey;let d;E==="sandbox"&&(d=L("#i"+h));const t=E==="sandbox"?L(d.nodes()[0].contentDocument.body):L("body"),e=E==="sandbox"?t.select(`[id="${h}"]`):L(`[id="${h}"]`),i=u?.width??f.width,o=u?.height??f.width,l=u?.useMaxWidth??f.useMaxWidth,s=u?.nodeAlignment??f.nodeAlignment,S=u?.prefix??f.prefix,g=u?.suffix??f.suffix,m=u?.showValues??f.showValues,_=b.db.getGraph(),I=vt[s];st().nodeId(n=>n.id).nodeWidth(10).nodePadding(10+(m?15:0)).nodeAlign(I).extent([[0,0],[i,o]])(_);const c=ht(ut);e.append("g").attr("class","nodes").selectAll(".node").data(_.nodes).join("g").attr("class","node").attr("id",n=>(n.uid=X.next("node-")).id).attr("transform",function(n){return"translate("+n.x0+","+n.y0+")"}).attr("x",n=>n.x0).attr("y",n=>n.y0).append("rect").attr("height",n=>n.y1-n.y0).attr("width",n=>n.x1-n.x0).attr("fill",n=>c(n.id));const x=({id:n,value:a})=>m?`${n}
${S}${Math.round(a*100)/100}${g}`:n;e.append("g").attr("class","node-labels").attr("font-family","sans-serif").attr("font-size",14).selectAll("text").data(_.nodes).join("text").attr("x",n=>n.x0<i/2?n.x1+6:n.x0-6).attr("y",n=>(n.y1+n.y0)/2).attr("dy",`${m?"0":"0.35"}em`).attr("text-anchor",n=>n.x0<i/2?"start":"end").text(x);const O=e.append("g").attr("class","links").attr("fill","none").attr("stroke-opacity",.5).selectAll(".link").data(_.links).join("g").attr("class","link").style("mix-blend-mode","multiply"),A=u?.linkColor||"gradient";if(A==="gradient"){const n=O.append("linearGradient").attr("id",a=>(a.uid=X.next("linearGradient-")).id).attr("gradientUnits","userSpaceOnUse").attr("x1",a=>a.source.x1).attr("x2",a=>a.target.x0);n.append("stop").attr("offset","0%").attr("stop-color",a=>c(a.source.id)),n.append("stop").attr("offset","100%").attr("stop-color",a=>c(a.target.id))}let w;switch(A){case"gradient":w=n=>n.uid;break;case"source":w=n=>c(n.source.id);break;case"target":w=n=>c(n.target.id);break;default:w=A}O.append("path").attr("d",rt()).attr("stroke",w).attr("stroke-width",n=>Math.max(1,n.width)),nt(void 0,e,0,l)},Et={draw:bt},St=r=>r.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g,"").replaceAll(/([\n\r])+/g,`
`).trim(),At=j.parse.bind(j);j.parse=r=>At(St(r));const ue={parser:j,db:kt,renderer:Et};export{ue as diagram};
