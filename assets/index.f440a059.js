var t=Object.defineProperty,e=Object.prototype.hasOwnProperty,s=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,n=(e,s,r)=>s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,i=(t,i)=>{for(var o in i||(i={}))e.call(i,o)&&n(t,o,i[o]);if(s)for(var o of s(i))r.call(i,o)&&n(t,o,i[o]);return t};import{M as o,S as a,k as l,E as c,a as h,h as d,i as u,u as p,r as m,b as f,m as k,I as g,t as w,w as x,c as y,s as b,d as v,l as M,D as E,e as O,f as $,P as A,g as C,T as S}from"./vendor.1e2fcefa.js";var I,R,B,_;!function(t=".",e="__import__"){try{self[e]=new Function("u","return import(u)")}catch(s){const r=new URL(t,location),n=t=>{URL.revokeObjectURL(t.src),t.remove()};self[e]=t=>new Promise(((s,i)=>{const o=new URL(t,r);if(self[e].moduleMap[o])return s(self[e].moduleMap[o]);const a=new Blob([`import * as m from '${o}';`,`${e}.moduleMap['${o}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(a),onerror(){i(new Error(`Failed to import: ${t}`)),n(l)},onload(){s(self[e].moduleMap[o]),n(l)}});document.head.appendChild(l)})),self[e].moduleMap={}}}("/milkdown/assets/"),(R=I||(I={}))[R.Internal=0]="Internal",R[R.ProsemirrorSpec=1]="ProsemirrorSpec",R[R.ProsemirrorPlugin=2]="ProsemirrorPlugin",R[R.MarkdownItOption=3]="MarkdownItOption",R[R.MarkdownItPlugin=4]="MarkdownItPlugin",R[R.Theme=5]="Theme",R[R.Listener=6]="Listener",(_=B||(B={}))[_.Idle=0]="Idle",_[_.BuildSchema=1]="BuildSchema",_[_.SchemaReady=2]="SchemaReady",_[_.PluginReady=3]="PluginReady",_[_.Complete=4]="Complete";class D{constructor(t={}){this.options=t}injectContext(t,e){this.context=t,this.updateContext=e}}class P extends D{constructor(){super(...arguments),this.loadAfter=B.Idle,this.type=I.ProsemirrorSpec}main(){this.updateContext({marks:this.context.marks.concat(this)})}}class L extends D{constructor(){super(...arguments),this.loadAfter=B.Idle,this.type=I.ProsemirrorSpec}main(){this.updateContext({nodes:this.context.nodes.concat(this)})}}function N(t,e,s={}){return t.reduce(((t,s)=>{const[r,n]=e(s);return i(i({},t),{[r]:n})}),s)}function T(t){return t.isText}class z extends D{constructor(){super(...arguments),this.id="schemaLoader",this.type=I.Internal,this.loadAfter=B.BuildSchema}main(){const t=N(this.context.nodes,(t=>[t.id,t.schema])),e=N(this.context.marks,(t=>[t.id,t.schema])),s=new a({nodes:i(i({doc:{content:"block+"}},t),{text:{group:"inline"}}),marks:e});this.updateContext({schema:s})}}class j{constructor(t,e,s){this.stack=t,this.schema=e,this.tokenHandlers=s}parseTokens(t){t.forEach(((e,s)=>{const r=this.tokenHandlers[e.type];if(!r)throw new Error("Token type `"+e.type+"` not supported by Markdown parser");r(this,e,t,s)}))}addText(t){t&&this.stack.addText((e=>this.schema.text(t,e)))}transformTokensToDoc(t){this.parseTokens(t);let e=null;do{e=this.stack.closeNode()}while(this.stack.length);return e}}class V{constructor(t){this.els=[{type:t,content:[]}],this.marks=o.none}top(){const{els:t}=this;return t[t.length-1]}pushInTopEl(t){var e;null==(e=this.top())||e.content.push(t)}get length(){return this.els.length}openMark(t){this.marks=t.addToSet(this.marks)}closeMark(t){this.marks=t.removeFromSet(this.marks)}addText(t){const e=this.top();if(!e)throw new Error;const s=e.content,r=s[s.length-1],n=t(this.marks),i=r&&function(t,e){if(T(t)&&T(e)&&o.sameSet(t.marks,e.marks))return t.withText(t.text+e.text)}(r,n);i?s[s.length-1]=i:s.push(n)}openNode(t,e){this.els.push({type:t,attrs:e,content:[]})}addNode(t,e,s){const r=t.createAndFill(e,s,this.marks);return r?(this.pushInTopEl(r),r):null}closeNode(){this.marks.length&&(this.marks=o.none);const t=this.els.pop();if(!t)throw new Error;return this.addNode(t.type,t.attrs,t.content)}}function W(t,e,s,r){return t.getAttrs?t.getAttrs(e,s,r):t.attrs}function q(){}function U(t,e){const s={softbreak:t=>t.addText("\n")};return Object.entries(e).forEach((([e,r])=>{if(function(t){return Reflect.has(t,"block")}(r)){const n=t.nodes[r.block];if(!n)throw new Error;return["hr","hardbreak","fence"].includes(e)?void(s[e]=(t,e,s,i)=>{t.stack.openNode(n,W(r,e,s,i)),t.addText(e.content),t.stack.closeNode()}):(s[e+"_open"]=(t,e,s,i)=>t.stack.openNode(n,W(r,e,s,i)),void(s[e+"_close"]=t=>t.stack.closeNode()))}if(!function(t){return Reflect.has(t,"node")}(r)){if(function(t){return Reflect.has(t,"mark")}(r)){const n=t.marks[r.mark];if(!n)throw new Error;return["code_inline"].includes(e)?void(s[e]=(t,e,s,i)=>{t.stack.openMark(n.create(W(r,e,s,i))),t.addText(e.content),t.stack.closeMark(n)}):(s[e+"_open"]=(t,e,s,i)=>t.stack.openMark(n.create(W(r,e,s,i))),void(s[e+"_close"]=t=>t.stack.closeMark(n)))}if(function(t){return Reflect.has(t,"ignore")}(r))return s[e+"_open"]=q,void(s[e+"_close"]=q);throw new RangeError("Unrecognized parsing spec "+JSON.stringify(r))}{const n=t.nodes[r.node];if(!n)throw new Error;s[e]=(t,e,s,i)=>t.stack.addNode(n,W(r,e,s,i))}})),s.inline=(t,e)=>{var s;return t.parseTokens(null!=(s=e.children)?s:[])},s.text=(t,e)=>t.addText(e.content),s}class G extends D{constructor(){super(...arguments),this.id="parserLoader",this.type=I.Internal,this.loadAfter=B.SchemaReady}main(){const t=N([...this.context.nodes,...this.context.marks],(t=>[t.id,t.parser])),e=(s=this.context.schema,r=this.context.markdownIt,n=t,t=>new j(new V(s.topNodeType),s,U(s,n)).transformTokensToDoc(r.parse(t,{})));var s,r,n;this.updateContext({parser:e})}}class F{static escape(t,e){let s=t.replace(/[`*\\~[\]]/g,"\\$&");return e&&(s=s.replace(/^[:#\-*+]/,"\\$&").replace(/^(\d+)\./,"$1\\.")),s}static quote(t){const e=-1===t.indexOf('"')?'""':-1===t.indexOf("'")?"''":"()";return e[0]+t+e[1]}static repeat(t,e){return Array(e).fill(t).reduce(((t,e)=>t+e),"")}static getEnclosingWhitespace(t){return{leading:(t.match(/^(\s+)/)||[])[0],trailing:(t.match(/(\s+)$/)||[])[0]}}static removeWhiteSpaceAfter(t){const e=/\s+$/.exec(t);return e?t.slice(0,e.index):t}}class H{constructor(t,e){this.nodes=t,this.marks=e,this.out="",this.delimitation="",this.closed=!1,this.utils=F,this.nodes=t,this.marks=e}get output(){return this.out}get atBlank(){return/(^|\n)$/.test(this.out)}renderContent(t){return t.forEach(((e,s,r)=>this.render(e,t,r))),this}render(t,e,s){const r=this.nodes[t.type.name];if(!r)throw new Error;return r(this,t,e,s),this}ensureNewLine(){return this.atBlank||(this.out+="\n"),this}closeBlock(t){return this.closed=t,this}flushClose(t=1){if(!this.closed)return this;if(this.atBlank||(this.out+="\n"),t>=1){const e=this.utils.removeWhiteSpaceAfter(this.delimitation),s=this.utils.repeat(e+"\n",t);this.out+=s}return this.closed=!1,this}write(t){return this.flushClose(),t?(this.delimitation&&this.atBlank&&(this.out+=this.delimitation),this.out+=t,this):this}text(t,e=!1){const s=t.split("\n");return s.forEach(((t,r)=>{const n=e?this.utils.escape(t,Boolean(this.atBlank||this.closed)):t;this.write(n);r===s.length-1||(this.out+="\n")})),this}wrapBlock(t,e,s,r=t){this.write(r);const n=this.delimitation;return this.delimitation+=t,s(),this.delimitation=n,this.closeBlock(e),this}markString(t,e,s,r){const n=this.marks[t.type.name];if(!n)throw new Error;const i=e?n.open:n.close;return"string"==typeof i?i:i(this,t,s,r)}wrapWithMark(t,e,s,r){const n=this.markString(t,!0,e,s),i=this.markString(t,!1,e,s+1);return this.text(n+r+i),this}serializeMarks(t,e,s,r=!1){return t.map((t=>this.markString(t,r,e,s))).join("")}renderInline(t){let e=[];const s=(t=!1)=>(e,s)=>{var r,n,i,o;const a=null!=(n=null==(r=this.marks[e.type.name])?void 0:r.priority)?n:0,l=null!=(o=null==(i=this.marks[s.type.name])?void 0:i.priority)?o:0;return t?a-l:l-a};return t.forEach(((r,n,i)=>{if(!T(r))return void this.render(r,t,i);const o=r.marks||[],a=e.filter((t=>!o.includes(t))).sort(s()),l=o.filter((t=>!e.includes(t))).sort(s(!0));l.forEach((t=>e.push(t))),e=e.filter((t=>!a.includes(t)));const c=this.serializeMarks(l,t,i,!0),h=this.serializeMarks(a,t,i+1);this.write(h+c+r.text)})),(()=>{const s=this.serializeMarks(e,t,t.childCount+1);this.write(s)})(),this}renderList(t,e,s){this.closed&&this.closed.type===t.type&&this.flushClose(2),t.forEach(((r,n,i)=>{this.wrapBlock(e,t,(()=>this.render(r,t,i)),s(i))}))}}class Y extends D{constructor(){super(...arguments),this.id="serializerLoader",this.type=I.Internal,this.loadAfter=B.SchemaReady}main(){const t=function(t,e){return s=>{const r=new H(t,e);return r.renderContent(s),r.output}}(N(this.context.nodes,(t=>[t.id,t.serializer]),{text(t,e){const{text:s}=e;s&&t.text(s)}}),N(this.context.marks,(t=>[t.id,t.serializer])));this.updateContext({serializer:t})}}class K extends D{constructor(){super(...arguments),this.id="inputRulesLoader",this.type=I.Internal,this.loadAfter=B.SchemaReady}main(){const{nodes:t,marks:e,schema:s}=this.context,r=[...t.filter((t=>Boolean(t.inputRules))).reduce(((t,e)=>{const r=s.nodes[e.id];return r?[...t,...e.inputRules(r,s)]:t}),[]),...e.filter((t=>Boolean(t.inputRules))).reduce(((t,e)=>{const r=s.marks[e.id];return r?[...t,...e.inputRules(r,s)]:t}),[])];this.updateContext({inputRules:r})}}class J extends D{constructor(){super(...arguments),this.id="keymapLoader",this.type=I.Internal,this.loadAfter=B.SchemaReady}main(){const{nodes:t,marks:e,schema:s}=this.context,r=[...t.filter((t=>Boolean(t.keymap))).map((t=>{const e=s.nodes[t.id];if(!e)throw new Error;return t.keymap(e)})),...e.filter((t=>Boolean(t.keymap))).map((t=>{const e=s.marks[t.id];if(!e)throw new Error;return t.keymap(e)}))].map((t=>l(t)));this.updateContext({keymap:r})}}class Q extends D{constructor(){super(...arguments),this.id="nodeViewsLoader",this.type=I.Internal,this.loadAfter=B.SchemaReady}main(){const{nodes:t,marks:e,schema:s,editor:r}=this.context,n=t.filter((t=>Boolean(t.view))).reduce(((t,e)=>{const n=s.nodes[e.id];if(!n)throw new Error;return i(i({},t),{[e.id]:(...t)=>e.view(r,n,...t)})}),{}),o=e.filter((t=>Boolean(t.view))).reduce(((t,e)=>{const n=s.marks[e.id];if(!n)throw new Error;return i(i({},t),{[e.id]:(...t)=>e.view(r,n,...t)})}),{}),a=i(i({},n),o);this.updateContext({nodeViews:a})}}const X=t=>class extends D{constructor(){super(...arguments),this.id=t,this.type=I.ProsemirrorPlugin,this.loadAfter=B.SchemaReady}main(){this.updateContext({prosemirrorPlugins:this.context.prosemirrorPlugins.concat(...this.options.plugins(this.context))})}},Z=(t,e)=>new(X(t))({plugins:e});class tt extends D{constructor(){super(...arguments),this.id="viewLoader",this.type=I.Internal,this.loadAfter=B.PluginReady}main(){const{nodeViews:t,serializer:e}=this.context,{listener:s}=this.options,r=this.createState(),n=this.createViewContainer(),i=new c(n,{state:r,nodeViews:t,dispatchTransaction:t=>{var r,n;const o=i.state.apply(t);i.updateState(o),null==(r=s.markdown)||r.forEach((t=>{t((()=>e(i.state.doc)))})),null==(n=s.doc)||n.forEach((t=>{t(i.state.doc)}))}});this.prepareViewDom(i.dom),this.updateContext({editorView:i})}createState(){const{parser:t,schema:e,inputRules:s,keymap:r,prosemirrorPlugins:n}=this.context,{defaultValue:i}=this.options,o=t(i);return h.create({schema:e,doc:o,plugins:[d(),u({rules:s}),...r,l({"Mod-z":p,"Shift-Mod-z":m}),l(f),...n]})}createViewContainer(){const{root:t}=this.options,e=document.createElement("div");return e.className="milkdown",t.appendChild(e),e}prepareViewDom(t){t.classList.add("editor"),t.setAttribute("role","textbox")}}function et(t,e){return new g(t,((t,s,r,n)=>{const{tr:i}=t,o=s.length;let a=r,l=n;if(s[o-1]){const c=s[0],h=s[o-1],d=s[o-2],u=r+c.indexOf(d),p=u+d.length-1,m=u+d.lastIndexOf(h),f=m+h.length;if(function(t,e,s){let r=[];return s.doc.nodesBetween(t,e,((t,e)=>{r=[...r,...t.marks.map((s=>({start:e,end:e+t.nodeSize,mark:s})))]})),r}(r,n,t).filter((t=>t.mark.type.excludes(e))).filter((t=>t.end>u)).length)return null;f<p&&i.delete(f,p),m>u&&i.delete(u,m),a=u,l=a+h.length}return i.addMark(a,l,e.create()),i.removeStoredMark(e),i}))}const st=[new class extends P{constructor(){super(...arguments),this.id="link",this.schema={attrs:{href:{},title:{default:null}},inclusive:!1,parseDOM:[{tag:"a[href]",getAttrs:t=>({href:t.getAttribute("href"),title:t.getAttribute("title")})}],toDOM:t=>["a",i(i({},t.attrs),{class:"link"})]},this.parser={mark:"link",getAttrs:t=>({href:t.attrGet("href"),title:t.attrGet("title")||null})},this.serializer={open:()=>"[",close:(t,e)=>`](${t.utils.escape(e.attrs.href)}${e.attrs.title?` ${t.utils.quote(e.attrs.title)}`:""})`,priority:1},this.inputRules=(t,e)=>[new g(/\[(?<text>.+?)]\((?<href>.*?)(?=“|\))"?(?<title>[^"]+)?"?\)/,((s,r,n,i)=>{const[o,a="",l,c]=r,{tr:h}=s;return o&&h.replaceWith(n,i,e.text(a)).addMark(n,a.length+n,t.create({title:c,href:l})),h}))]}},new class extends P{constructor(){super(...arguments),this.id="strong",this.schema={parseDOM:[{tag:"b"},{tag:"strong"},{style:"font-style",getAttrs:t=>"bold"===t}],toDOM:()=>["strong",{class:"strong"}]},this.parser={mark:this.id},this.serializer={open:"**",close:"**"},this.inputRules=t=>[et(/(?:__)([^_]+)(?:__)$/,t),et(/(?:\*\*)([^*]+)(?:\*\*)$/,t)],this.keymap=t=>({"Mod-b":w(t)})}},new class extends P{constructor(){super(...arguments),this.id="code_inline",this.schema={excludes:"_",parseDOM:[{tag:"code"}],toDOM:()=>["code",{class:"code-inline"}]},this.parser={mark:"code_inline"},this.serializer={open:"`",close:"`"},this.inputRules=t=>[et(/(?:^|[^`])(`([^`]+)`)$/,t)]}},new class extends P{constructor(){super(...arguments),this.id="em",this.schema={parseDOM:[{tag:"i"},{tag:"em"},{style:"font-style",getAttrs:t=>"italic"===t}],toDOM:()=>["em",{class:"em"}]},this.parser={mark:"em"},this.serializer={open:"*",close:"*"},this.inputRules=t=>[et(/(?:^|[^_])(_([^_]+)_)$/,t),et(/(?:^|[^*])(\*([^*]+)\*)$/,t)],this.keymap=t=>({"Mod-i":w(t)})}}];const rt=Array(5).fill(0).map(((t,e)=>e+1));const nt=["","javascript","typescript","bash","sql","json","c","cpp","java","ruby","python","go","rust"];const it=[new class extends L{constructor(){super(...arguments),this.id="paragraph",this.schema={content:"inline*",group:"block",parseDOM:[{tag:"p"}],toDOM:()=>["p",{class:"paragraph"},0]},this.parser={block:this.id},this.serializer=(t,e)=>{t.renderInline(e).closeBlock(e)}}},new class extends L{constructor(){super(...arguments),this.id="hardbreak",this.schema={inline:!0,group:"inline",selectable:!1,parseDOM:[{tag:"br"}],toDOM:()=>["br",{class:"bard-break"}]},this.parser={block:this.id},this.serializer=t=>{t.write("  \n")},this.keymap=t=>({"Shift-Enter":(e,s)=>(null==s||s(e.tr.replaceSelectionWith(t.create()).scrollIntoView()),!0)})}},new class extends L{constructor(){super(...arguments),this.id="blockquote",this.schema={content:"block+",group:"block",defining:!0,parseDOM:[{tag:"blockquote"}],toDOM:()=>["blockquote",{class:"blockquote"},0]},this.parser={block:this.id},this.serializer=(t,e)=>{t.wrapBlock("> ",e,(()=>t.renderContent(e)))},this.inputRules=t=>[x(/^\s*>\s$/,t)]}},new class extends L{constructor(){super(...arguments),this.id="fence",this.schema={content:"text*",group:"block",marks:"",defining:!0,code:!0,attrs:{language:{default:""}},parseDOM:[{tag:"pre",preserveWhitespace:"full",getAttrs:t=>({language:t.dataset.language})}],toDOM:t=>{const e=this.createSelectElement(t.attrs.language);return["div",{"data-language":t.attrs.language,class:"code-fence"},["div",{contentEditable:"false"},e],["pre",["code",{spellCheck:"false"},0]]]}},this.parser={block:this.id,getAttrs:t=>({language:t.info})},this.serializer=(t,e)=>{t.write("```"+e.attrs.language+"\n"),t.text(e.textContent),t.ensureNewLine(),t.write("```"),t.closeBlock(e)},this.inputRules=t=>[y(/^```$/,t)],this.keymap=()=>({Tab:(t,e)=>{const{tr:s,selection:r}=t;return!!e&&(e(s.insertText("  ",r.from,r.to)),!0)}})}onChangeLanguage(t,e,s){const{editorView:r}=this.context,n=r.posAtCoords({top:t,left:e});if(!n)return;const i=r.state.tr.setNodeMarkup(n.inside,void 0,{language:s});r.dispatch(i)}createSelectElement(t){const e=document.createElement("select");return e.className="code-fence_select",e.addEventListener("change",(t=>{if(this.context.loadState!==B.Complete)throw new Error("Should not trigger event before milkdown ready.");const e=t.target;if(!e)return;const{top:s,left:r}=e.getBoundingClientRect();this.onChangeLanguage(s,r,e.value)})),nt.forEach((s=>{const r=document.createElement("option");r.className="code-fence_select-option",r.value=s,r.innerText=s||"--",r.selected=t===s,e.appendChild(r)})),e}},new class extends L{constructor(){super(...arguments),this.id="ordered_list",this.schema={content:"list_item+",group:"block",attrs:{order:{default:1}},parseDOM:[{tag:"ol",getAttrs:t=>({order:t.hasAttribute("start")?Number(t.getAttribute("start")):1})}],toDOM:t=>["ol",i(i({},1===t.attrs.order?{}:t.attrs.order),{class:"ordered-list"}),0]},this.parser={block:this.id},this.serializer=(t,e)=>{const{order:s=1}=e.attrs,r=(""+(s+e.childCount-1)).length,n=t.utils.repeat(" ",r+2);t.renderList(e,n,(e=>{const n=`${s+e}`;return t.utils.repeat(" ",r-n.length)+n+". "}))},this.inputRules=t=>[x(/^(\d+)\.\s$/,t,(t=>({order:Number(t[1])})),((t,e)=>e.childCount+e.attrs.order===Number(t[1])))]}},new class extends L{constructor(){super(...arguments),this.id="bullet_list",this.schema={content:"list_item+",group:"block",parseDOM:[{tag:"ul"}],toDOM:()=>["ul",{class:"bullet-list"},0]},this.parser={block:this.id},this.serializer=(t,e)=>{t.renderList(e,"  ",(()=>"* "))},this.inputRules=t=>[x(/^\s*([-+*])\s$/,t)]}},new class extends L{constructor(){super(...arguments),this.id="list_item",this.schema={content:"paragraph block*",defining:!0,parseDOM:[{tag:"li"}],toDOM:()=>["li",{class:"list-item"},0]},this.parser={block:this.id},this.serializer=(t,e)=>{t.renderContent(e)},this.keymap=t=>({Enter:b(t),"Mod-]":v(t),"Mod-[":M(t)})}},new class extends L{constructor(){super(...arguments),this.id="heading",this.schema={content:"text*",group:"block",attrs:{level:{default:1}},parseDOM:rt.map((t=>({tag:`h${t}`,attrs:{level:t}}))),toDOM:t=>[`h${t.attrs.level}`,{class:`heading h${t.attrs.level}`},0]},this.parser={block:this.id,getAttrs:t=>({level:Number(t.tag.slice(1))})},this.serializer=(t,e)=>{t.write(`${t.utils.repeat("#",e.attrs.level)} `),t.renderInline(e),t.closeBlock(e)},this.inputRules=t=>rt.map((e=>y(new RegExp(`^(#{1,${e}})\\s$`),t,(()=>({level:e})))))}},new class extends L{constructor(){super(...arguments),this.id="hr",this.schema={group:"block",parseDOM:[{tag:"hr"}],toDOM:()=>["hr",{class:"hr"}]},this.parser={block:this.id},this.serializer=(t,e)=>{t.write("---"),t.closeBlock(e)},this.inputRules=t=>[new g(/^(?:---|___\s|\*\*\*\s)$/,((e,s,r,n)=>{const{tr:i}=e;return s[0]&&i.replaceWith(r,n,t.create({})),i}))]}},new class extends L{constructor(){super(...arguments),this.id="image",this.schema={inline:!0,attrs:{src:{},alt:{default:null},title:{default:null}},group:"inline",draggable:!0,marks:"",parseDOM:[{tag:"img[src]",getAttrs:t=>({src:t.getAttribute("src"),alt:t.getAttribute("alt"),title:t.getAttribute("title")})}],toDOM:t=>["img",i(i({},t.attrs),{class:"image"})]},this.parser={node:"image",getAttrs:t=>{var e,s;return{src:t.attrGet("src"),alt:(null==(s=null==(e=t.children)?void 0:e[0])?void 0:s.content)||null,title:t.attrGet("title")}}},this.serializer=(t,e)=>{const s=t.utils.escape(e.attrs.alt||""),r=e.attrs.title?" "+t.utils.quote(e.attrs.title):"",n=t.utils.escape(e.attrs.src)+r;t.write(`![${s}](${n}) `)},this.inputRules=t=>[new g(/!\[(?<alt>.*?)]\((?<filename>.*?)(?=“|\))"?(?<title>[^"]+)?"?\)/,((e,s,r,n)=>{const[i,o,a,l]=s,{tr:c}=e;return i&&c.replaceWith(r,n,t.create({src:a,alt:o,title:l})),c}))]}},new class extends L{constructor(){super(...arguments),this.id="tab_indent",this.schema={group:"inline",inline:!0,selectable:!1,parseDOM:[{tag:"span[class='tab-indent']"}],toDOM:()=>["span",{class:"tab-indent"},"  "]},this.parser={block:this.id},this.serializer=t=>{t.write("  ")},this.keymap=t=>({Tab:(e,s)=>{const{selection:r}=e.tr,n=Boolean(e.tr);if(!r)return n;const{from:i,to:o}=r;if(i!==o||!t)return n;const a=e.tr.replaceSelectionWith(t.create()).scrollIntoView();return null==s||s(a),Boolean(a)}})}}],ot=(at=t=>t.isBlock,(t,e)=>((t,e=!0)=>{const s=[];return t.descendants(((t,r)=>{if(s.push({node:t,pos:r}),!e)return!1})),s})(t,e).filter((t=>at(t.node))));var at;const lt={};const ct="MILKDOWN_PLUGIN_PRISM";function ht(t){let e=!1;return new A({key:new C(ct),state:{init:(t,{doc:e})=>E.create(e,[]),apply:(s,r,n,i)=>{const o=i.selection.$head.parent.type.name===t,a=n.selection.$head.parent.type.name===t,l=s.docChanged&&(o||a);return!e||l?(e=!0,function(t,e){const s=[],r=ot(t).filter((t=>t.node.type.name===e));return r.forEach((t=>{var e;let r=t.pos+1;const n=t.node.attrs.language;if(n){if(!(null==(e=lt[t.pos])?void 0:e.node.eq(t.node))){const e=O.highlight(t.node.textContent,n),s=(t,e=[])=>t.flatMap((t=>"element"===t.type?s(t.children,[...e,...t.properties.className||[]]):[{text:t.value,className:e}])),i=s(e).map((({text:t,className:e})=>{const s=r,n=s+t.length;return r=n,$.inline(s,n,{class:e.join(" ")})}));lt[t.pos]={node:t.node,dec:i}}lt[t.pos].dec.forEach((t=>{s.push(t)}))}})),Object.keys(lt).filter((t=>!r.find((e=>e.pos===Number(t))))).forEach((t=>{delete lt[Number(t)]})),E.create(t,s)}(s.doc,t)):r.map(s.mapping,s.doc)}},view:t=>(window.requestAnimationFrame((()=>{t.dispatch(t.state.tr.setMeta(ct,{loaded:!0}))})),{}),props:{decorations(t){return this.getState(t)}}})}const dt=Z("prism",(()=>[ht("fence")]));function ut(t){const e=document.createElement("span");return e.textContent=t,e.className="icon material-icons material-icons-outlined",e}var pt,mt;(mt=pt||(pt={}))[mt.Bold=0]="Bold",mt[mt.Italic=1]="Italic",mt[mt.Code=2]="Code";class ft{constructor(t,e,s){var r;this.ctx=t,this.items=e,this.view=s,this.listener=t=>{const{view:e}=this;e&&(t.preventDefault(),Object.values(this.items).forEach((({$:s,command:r})=>{s.contains(t.target)&&r(e.state,e.dispatch)})))},this.$=document.createElement("div"),this.$.className="tooltip",Object.values(e).forEach((({$:t})=>this.$.appendChild(t))),null==(r=s.dom.parentNode)||r.appendChild(this.$),this.update(s),this.$.addEventListener("mousedown",this.listener)}update(t,e){const s=t.state;(null==e?void 0:e.doc.eq(s.doc))&&e.selection.eq(s.selection)||(!s.selection.empty&&s.selection instanceof S?(this.calculateItem(t),this.$.classList.remove("hide"),this.calculatePosition(t)):this.hide())}destroy(){this.$.removeEventListener("mousedown",this.listener),this.$.remove()}hide(){this.$.classList.add("hide")}calculateItem(t){Object.values(this.items).forEach((e=>{var s;(null==(s=e.disable)?void 0:s.call(e,t))?e.$.style.display="none":e.$.style.display&&(e.$.style.display="")}))}calculatePosition(t){var e;const s=t.state,{from:r,to:n}=s.selection,i=t.coordsAtPos(r),o=t.coordsAtPos(n),a=Math.max((i.left+o.left)/2,i.left+3),l=null==(e=this.$.offsetParent)?void 0:e.getBoundingClientRect();l&&(this.$.style.left=a-l.left+"px",this.$.style.bottom=l.bottom-i.top+"px")}}const kt=t=>new A({key:new C("MILKDOWN_PLUGIN_TOOLTIP"),view:e=>new ft(t,(t=>({[pt.Bold]:{$:ut("format_bold"),command:w(t.schema.marks.strong)},[pt.Italic]:{$:ut("format_italic"),command:w(t.schema.marks.em)},[pt.Code]:{$:ut("code"),command:w(t.schema.marks.code_inline),disable:e=>{var s;const{$from:r}=e.state.selection,{link:n}=t.schema.marks;return Boolean(n.isInSet((null==(s=r.nodeAfter)?void 0:s.marks)||[]))}}}))(t),e)}),gt=Z("tooltip",(t=>[kt(t)]));const wt=document.getElementById("app");if(!wt)throw new Error;const xt=new class{constructor(t){this.atoms=[],this.ctx={loadState:B.Idle,markdownIt:new k("commonmark"),nodes:[],marks:[],editor:this,prosemirrorPlugins:[]},this.updateCtx=t=>{Object.assign(this.ctx,t)};const e=i({root:document.body,defaultValue:"",listener:{}},t);this.use([new z,new G,new Y,new J,new K,new Q,new tt(e)])}injectCtx(){this.atoms.forEach((t=>t.injectContext(this.ctx,this.updateCtx)))}runAtomByLoadState(t){this.atoms.filter((e=>e.loadAfter===t)).forEach((t=>{t.main()}))}addAtom(t){const e=this.atoms.findIndex((e=>e.id===t.id));e>=0&&(console.warn(`Atom: ${t.id} is conflicted with previous atom, the previous one will be override.`),this.atoms.splice(e,1)),this.atoms.push(t)}use(t){return Array.isArray(t)?(t.forEach((t=>{this.addAtom(t)})),this):(this.addAtom(t),this)}create(){this.injectCtx(),[B.Idle,B.BuildSchema,B.SchemaReady,B.PluginReady,B.Complete].forEach((t=>{this.ctx.loadState=t,this.runAtomByLoadState(t)}))}}({root:wt,defaultValue:"\n# Milkdown\n\n![logo](/milkdown/milkdown-mini.svg)\n\n> Milkdown is a WYSIWYG markdown editor.\n>\n> Here is the [repo](https://github.com/Saul-Mirone/milkdown) (*right click to open link*).\n\nYou can check the output markdown text in **developer tool**.\n",listener:{markdown:[t=>console.log(t())]}}).use(it).use(st).use(dt);/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||xt.use(gt),xt.create();
