import{b as g,c as M,l as _}from"./home-3d-settings-chunk-IXZBOWJI.js";import{a as u,b as f,c as n,d as s,f as c,h as m,k as b}from"./home-3d-settings-chunk-UBHQG3QB.js";var x=class extends m{static properties={value:{attribute:!1},hour12:{type:Boolean},disabled:{type:Boolean},clearable:{type:Boolean},step:{type:Number},label:{attribute:!1},hourLabel:{attribute:!1},minuteLabel:{attribute:!1},periodLabel:{attribute:!1}};constructor(){super(),this.value="",this.hour12=!1,this.disabled=!1,this.clearable=!1,this.step=5,this.label="",this.hourLabel="Hour",this.minuteLabel="Minute",this.periodLabel="AM/PM"}set(e,t){let i=g(this.value);if(e==="h"&&t==="")return this.send("");let l=i===null?0:Math.floor(i/60),r=i===null?0:i%60,a=l,p=r;e==="m"?p=Number(t):e==="h"?a=this.hour12?Number(t)%12+(l>=12?12:0):Number(t):a=l%12+(t==="pm"?12:0),this.send(M(a*60+p))}send(e){this.value=e,this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0,composed:!0}))}render(){let e=g(this.value),t=e===null?null:Math.floor(e/60),i=e===null?null:e%60,l=Math.max(1,Math.round(this.step)||5),r=[...new Set([...Array.from({length:Math.ceil(60/l)},(o,d)=>d*l),...i===null?[]:[i]])].sort((o,d)=>o-d),a=this.hour12?[12,...Array.from({length:11},(o,d)=>d+1)]:Array.from({length:24},(o,d)=>d),p=t===null?"":String(this.hour12?t%12||12:t),v=o=>String(o).padStart(2,"0"),h=t===null;return n`<span class="t" role="group" aria-label=${this.label}>
      <select aria-label=${this.hourLabel} ?disabled=${this.disabled} @change=${o=>this.set("h",o.target.value)}>
        ${h?n`<option value="" selected>${this.clearable?"\u2013":v(0)}</option>`:c}
        ${this.clearable&&!h?n`<option value="">–</option>`:c}
        ${a.map(o=>n`<option value=${o} ?selected=${String(o)===p}>${this.hour12?o:v(o)}</option>`)}
      </select>
      <span aria-hidden="true">:</span>
      <select aria-label=${this.minuteLabel} ?disabled=${this.disabled||h&&this.clearable} @change=${o=>this.set("m",o.target.value)}>
        ${r.map(o=>n`<option value=${o} ?selected=${o===i||h&&o===0}>${v(o)}</option>`)}
      </select>
      ${this.hour12?n`<select aria-label=${this.periodLabel} ?disabled=${this.disabled||h&&this.clearable} @change=${o=>this.set("p",o.target.value)}>
            <option value="am" ?selected=${t===null||t<12}>AM</option>
            <option value="pm" ?selected=${t!==null&&t>=12}>PM</option>
          </select>`:c}
    </span>`}static styles=[b,f`
      :host {
        display: inline-block;
      }
      .t {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        color: var(--fp3d-text);
      }
      select {
        min-height: 36px;
        padding: 4px 6px;
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
      }
      select:focus-visible {
        outline: 2px solid var(--fp3d-accent);
        outline-offset: -1px;
      }
    `]};u("fp3d-time-field",x);var w=40,y=class extends m{static formAssociated=!0;static properties={options:{attribute:!1},fixed:{attribute:!1},value:{attribute:!1},disabled:{type:Boolean},placeholder:{attribute:!1},prefer:{attribute:!1},groups:{attribute:!1},_query:{state:!0},_open:{state:!0},_cursor:{state:!0}};partition=null;blurTimer;ranked=null;constructor(){super(),this.options=[],this.fixed=[],this.value=null,this.disabled=!1,this.placeholder="",this.prefer={},this.groups=null,this._query="",this._open=!1,this._cursor=0,this.addEventListener("click",e=>{e.composedPath()[0]===this&&this.renderRoot?.querySelector?.("input")?.focus()})}get open(){return this._open}get current(){return[...this.fixed,...this.options].find(e=>e.id===this.value)}get hits(){let e=this._query.trim().toLowerCase(),t=e.split(/\s+/).filter(Boolean),i=p=>{let v=`${p.label} ${p.id}`.toLowerCase();return t.every(h=>v.includes(h))},l=this.fixed.filter(p=>!e||i(p)),r=this.grouped(this.rankedOptions()),a=e?r.filter(i):r;return[...l,...a.slice(0,w)]}fits(e){return(this.prefer.domains??[]).includes(e.id.slice(0,e.id.indexOf(".")))}grouped(e){if(!this.groups||!this.prefer.domains?.length)return e;let t=e;if(this.partition?.from===t&&this.partition.domains===this.prefer.domains)return this.partition.list;let i=[...e.filter(l=>this.fits(l)),...e.filter(l=>!this.fits(l))];return this.partition={from:t,domains:this.prefer.domains,list:i},i}headings(e){let t=e.map(()=>null);if(!this.groups||!this.prefer.domains?.length)return t;let i=e.filter(r=>r.id.includes(".")),l=i.filter(r=>this.fits(r)).length;return!l||l===i.length||(t[e.indexOf(i[0])]=this.groups.likely,t[e.indexOf(i[l])]=this.groups.other),t}rankedOptions(){let e=`${this.prefer.area??""}|${(this.prefer.domains??[]).join(",")}`,t=this.ranked;if(t&&t.options===this.options&&t.prefer===e)return t.list;let i=_(this.options,this.prefer);return this.ranked={options:this.options,prefer:e,list:i},i}onQuery(){let e=this.hits,t=this._query.trim()?e.findIndex(i=>i.id.includes(".")):-1;this._cursor=Math.max(0,t)}get leftOut(){let e=this._query.trim().toLowerCase(),t=e.split(/\s+/).filter(Boolean),i=e?this.options.filter(l=>t.every(r=>`${l.label} ${l.id}`.toLowerCase().includes(r))).length:this.options.length;return Math.max(0,i-w)}openList(){clearTimeout(this.blurTimer),this._open=!0,this._query="",this._cursor=0}updated(e){this._open&&e.has("_cursor")&&this.renderRoot?.querySelector?.("li.cursor")?.scrollIntoView?.({block:"nearest"})}choose(e){this.value=e,this._query="",this._open=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0,composed:!0}))}onKey(e){let t=this.hits;e.key==="ArrowDown"?(this._open=!0,this._cursor=Math.min(t.length-1,this._cursor+1),e.preventDefault()):e.key==="ArrowUp"?(this._cursor=Math.max(0,this._cursor-1),e.preventDefault()):e.key==="Enter"?(this._open&&t[this._cursor]&&this.choose(t[this._cursor].id),e.preventDefault()):e.key==="Escape"&&(this._open=!1,this._query="")}render(){let e=this.current,t=this._open?this.hits:[],i=this.headings(t),l=this.value&&this.value.includes(".")?this.value:null;return n`<div class="wrap" @mousedown=${r=>r.target?.localName!=="input"&&r.preventDefault()}>
      <input
        type="text"
        role="combobox"
        aria-expanded=${this._open}
        ?disabled=${this.disabled}
        placeholder=${e?e.label:this.placeholder}
        .value=${this._open?this._query:e?.label??""}
        @focus=${()=>this.openList()}
        @click=${()=>{this._open||this.openList()}}
        @blur=${()=>{this.blurTimer=setTimeout(()=>this._open=!1,150)}}
        @input=${r=>{this._query=r.target.value,this._open=!0,this.onQuery()}}
        @keydown=${this.onKey}
      />
      ${this._open?n`<ul class="list" role="listbox">
            ${t.length?c:n`<li class="empty">–</li>`}
            ${t.map((r,a)=>n`${i[a]?n`<li class="group" role="presentation">${i[a]}</li>`:c}<li
                role="option"
                aria-selected=${r.id===this.value}
                class="${a===this._cursor?"cursor":""} ${r.id===this.value?"chosen":""}"
                @mousedown=${p=>p.preventDefault()}
                @click=${()=>this.choose(r.id)}
              >
                <span>${r.label}</span>${r.id.includes(".")?n`<small>${r.id}</small>`:c}
              </li>`)}
            ${this.leftOut>0?n`<li class="empty">… +${this.leftOut} · ${this.placeholder}</li>`:c}
          </ul>`:c}
      ${l?n`<small class="picked" title=${l}>${l}</small>`:c}
    </div>`}static styles=[b,f`
      :host {
        display: block;
        position: relative;
      }
      input {
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        padding: 8px 10px;
      }
      input::placeholder {
        color: var(--fp3d-text);
        opacity: 0.9;
      }
      input:focus::placeholder {
        color: var(--fp3d-muted);
      }
      input:focus {
        outline: 2px solid var(--fp3d-accent);
        outline-offset: -1px;
      }
      .list {
        position: absolute;
        left: 0;
        right: 0;
        top: calc(100% + 4px);
        z-index: 20;
        margin: 0;
        padding: 4px;
        list-style: none;
        max-height: 280px;
        overflow-y: auto;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        box-shadow: var(--fp3d-shadow);
      }
      li {
        display: flex;
        flex-direction: column;
        gap: 1px;
        padding: 6px 8px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 13.5px;
      }
      li small {
        color: var(--fp3d-muted);
        font-size: 11px;
      }
      li.cursor,
      li:hover {
        background: color-mix(in srgb, var(--fp3d-accent) 18%, transparent);
      }
      li.chosen {
        color: var(--fp3d-accent);
      }
      .picked {
        display: block;
        margin-top: 2px;
        color: var(--fp3d-muted);
        font-size: 11px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      li.group {
        color: var(--fp3d-muted);
        cursor: default;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        padding: 6px 8px 2px;
      }
      li.group:hover {
        background: none;
      }
      li.empty {
        color: var(--fp3d-muted);
        cursor: default;
      }
    `]};u("fp3d-entity-picker",y);var L={home:s`<path d="M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3z"/>`,sun:s`<circle cx="12" cy="12" r="4"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2"/>`,zap:s`<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>`,star:s`<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z"/>`,sparkles:s`<path d="m10 3 2 5 5 2-5 2-2 5-2-5-5-2 5-2zm8 11v6m-3-3h6"/>`,alert:s`<path d="M12 3 2 20h20zm0 6v5m0 3v.1"/>`,waves:s`<path d="M2 8q3.5-3 7 0t7 0 6 0M2 15q3.5-3 7 0t7 0 6 0"/>`,camera:s`<path d="M3 7h4l2-3h6l2 3h4v13H3z"/><circle cx="12" cy="13" r="3.5"/>`,calendar:s`<rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4m8-4v4"/>`,users:s`<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7m2 3a6.5 6.5 0 0 1 3.5 5.5"/>`,key:s`<circle cx="8" cy="15" r="4.5"/><path d="m11.5 11.5 8.5-8.5M16 7l3 3"/>`,tablet:s`<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M11 18h2"/>`,package:s`<path d="M21 8 12 3 3 8v8l9 5 9-5zM3 8l9 5 9-5m-9 5v8"/>`,history:s`<path d="M3 12a9 9 0 1 0 3-6.7L3 8m0-5v5h5m4-1v5l3.5 2"/>`,sliders:s`<path d="M4 6h16M4 12h16M4 18h16"/><circle cx="15" cy="6" r="2"/><circle cx="9" cy="12" r="2"/><circle cx="17" cy="18" r="2"/>`,palette:s`<path d="M12 3a9 9 0 0 0 0 18c1.5 0 2-1 1.5-2.5S14 15 16 15h2a3 3 0 0 0 3-3c0-5-4-9-9-9z"/><circle cx="8" cy="10" r="1"/><circle cx="12" cy="7" r="1"/>`,cube:s`<path d="M12 2.5 20.5 7v10L12 21.5 3.5 17V7zM3.5 7l8.5 4.5L20.5 7M12 11.5v10"/>`,monitor:s`<rect x="2.5" y="4" width="19" height="13" rx="2"/><path d="M8 21h8m-4-4v4"/>`,mic:s`<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/>`,search:s`<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>`,back:s`<path d="m15 18-6-6 6-6"/>`,next:s`<path d="m9 18 6-6-6-6"/>`,lock:s`<rect x="4.5" y="11" width="15" height="10" rx="2"/><path d="M8 11V7.5a4 4 0 0 1 8 0V11"/>`},$=class extends m{static properties={name:{}};connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return n`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${L[this.name]??""}</svg>`}static styles=f`:host{display:inline-flex;flex:none;width:18px;height:18px}:host(.s){width:16px;height:16px}svg{width:100%;height:100%}`};u("fp3d-line-icon",$);var B=Object.keys(L);
