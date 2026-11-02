import{$ as Ot,A as gt,B as mt,Ba as Dt,C as bt,D as kt,E as j,F as vt,Fa as Nt,G as $t,Ga as U,H as _t,I as xt,Ia as qt,J as yt,Ja as jt,Ka as Kt,La as A,Ma as Bt,Na as Gt,P as wt,Pa as W,Q as Et,Qa as Jt,R as St,Ra as Qt,S as E,T as y,U as Pt,V as Lt,W as C,Y as Mt,a as ct,aa as Tt,c as dt,d as N,ea as I,f as ht,fa as Rt,g as q,ga as Ct,ja as It,oa as Ft,p as ut,s as ft,sa as K,ta as F,ua as zt,wa as Ut,xa as z,ya as At,za as Ht}from"./home-3d-editor-chunk-VYDSTFCK.js";import{a as Xt}from"./home-3d-editor-chunk-IA3SIIPF.js";import{$a as H,B as S,J as lt,K as P,L as ot,M as pt,Ya as x,Za as R,_a as L,a as v,b as at,db as Vt,e as rt,eb as B,fb as Wt,gb as G,h as nt,hb as V}from"./home-3d-editor-chunk-UCKHY45X.js";import{b as $,c as a,e as it,f as d,h as _}from"./home-3d-editor-chunk-EUFTLNYS.js";var Yt=(m,t,e)=>{let s=new Map;for(let i=t;i<=e;i++)s.set(m[i],i);return s},Zt=Et(class extends St{constructor(m){if(super(m),m.type!==wt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(m,t,e){let s;e===void 0?e=t:t!==void 0&&(s=t);let i=[],r=[],p=0;for(let h of m)i[p]=s?s(h,p):p,r[p]=e(h,p),p++;return{values:r,keys:i}}render(m,t,e){return this.dt(m,t,e).values}update(m,[t,e,s]){let i=Lt(m),{values:r,keys:p}=this.dt(t,e,s);if(!Array.isArray(i))return this.ut=p,r;let h=this.ut??=[],o=[],c,l,n=0,g=i.length-1,u=0,b=r.length-1;for(;n<=g&&u<=b;)if(i[n]===null)n++;else if(i[g]===null)g--;else if(h[n]===p[u])o[u]=y(i[n],r[u]),n++,u++;else if(h[g]===p[b])o[b]=y(i[g],r[b]),g--,b--;else if(h[n]===p[b])o[b]=y(i[n],r[b]),E(m,o[b+1],i[n]),n++,b--;else if(h[g]===p[u])o[u]=y(i[g],r[u]),E(m,i[n],i[g]),g--,u++;else if(c===void 0&&(c=Yt(p,u,b),l=Yt(h,n,g)),c.has(h[n]))if(c.has(h[g])){let k=l.get(p[u]),f=k!==void 0?i[k]:null;if(f===null){let T=E(m,i[n]);y(T,r[u]),o[u]=T}else o[u]=y(f,r[u]),E(m,i[n],f),i[k]=null;u++}else C(i[g]),g--;else C(i[n]),n++;for(;u<=b;){let k=E(m,o[b+1]);y(k,r[u]),o[u++]=k}for(;n<=g;){let k=i[n++];k!==null&&C(k)}return this.ut=p,Pt(m,o),it}});var ue=10,te=24,fe=96,ee="home3d.lib.open",se="home3d.lib.fav",ie="home3d.lib.recent",ae="home3d.lib.recent.shut",re="home3d.lib.shut",ne=new Set(["fav","other-rooms"]),ge=["sofa","lamp"],w=m=>`${m.type}|${m.packRelease}`;function M(m,t){try{let e=localStorage.getItem(m);return e?JSON.parse(e):t}catch{return t}}function O(m,t){try{localStorage.setItem(m,JSON.stringify(t))}catch{}}var X=class extends _{static properties={entries:{attribute:!1},language:{attribute:!1},roomHint:{attribute:!1},admin:{type:Boolean},lite:{type:Boolean},t:{attribute:!1},thumb:{attribute:!1},updates:{attribute:!1},_query:{state:!0},_room:{state:!0},_electric:{state:!0},_light:{state:!0},_outdoor:{state:!0},_pack:{state:!0},_open:{state:!0},_shut:{state:!0},_searchShut:{state:!0},_fav:{state:!0},_recent:{state:!0},_recentShut:{state:!0},_thumbs:{state:!0},_shown:{state:!0},_limits:{state:!0}};defaultOpen=new Set;roomTouched=!1;observer=null;observed=new WeakSet;wanted=new Set;drawing=0;warmTimer;queue=[];constructor(){super(),this.entries=[],this.language="en",this.roomHint=null,this.admin=!0,this.lite=(navigator.hardwareConcurrency??4)<=2||(navigator.deviceMemory??4)<=2,this.t=e=>e,this.thumb=null,this.updates=new Set,this._query="",this._room=null,this._electric=!1,this._light=!1,this._outdoor=!1,this._pack=null;let t=M(ee,null);this._open=Array.isArray(t)?new Set(t):null,this._shut=new Set(M(re,[])),this._searchShut=new Set,this._fav=M(se,[]),this._recent=M(ie,[]),this._recentShut=M(ae,!1)===!0,this._thumbs=new Map,this._shown=new Map,this._limits=new Map}willUpdate(t){if(t.has("roomHint")&&!this.roomTouched&&(this._room=this.roomHint),t.has("entries")){clearTimeout(this.warmTimer);let e=this.entries,s=r=>{let p=Math.min(e.length,r+200);Vt(e.slice(r,p)),p<e.length&&(this.warmTimer=setTimeout(()=>s(p),0))};this.warmTimer=setTimeout(()=>s(0),300),this._pack&&!this.entries.some(r=>r.pack===this._pack)&&(this._pack=null);let i=new Set(this.entries.map(r=>r.key));this._fav=this._fav.filter(r=>i.has(r)),this._recent=this._recent.filter(r=>i.has(r)),this.queue=[],this.resetPictures(this.entries)}}resetPictures(t){let e=new Set(t.map(w));this._thumbs=new Map([...this._thumbs].filter(([s])=>e.has(s))),this.wanted=new Set([...this.wanted].filter(s=>this._thumbs.has(s)))}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.warmTimer),this.observer?.disconnect(),this.observer=null}updated(){if(this.lite||!this.thumb)return;this.observer??=new IntersectionObserver(e=>{for(let s of e){if(!s.isIntersecting)continue;let i=this.byKey.get(s.target.dataset.key??"");i&&this.want(i)}},{root:null,rootMargin:"200px"});let t=this.byKey;for(let e of this.renderRoot.querySelectorAll(".fp3d-lc-pic[data-key]")){if(!this.observed.has(e)){this.observed.add(e),this.observer.observe(e);continue}let s=t.get(e.dataset.key??"");!s||this._thumbs.has(w(s))||this.wanted.has(w(s))||(this.observer.unobserve(e),this.observer.observe(e))}}get byKey(){return new Map(this.entries.map(t=>[t.key,t]))}showVariant(t,e,s){if(this.lite||!this.thumb){this.preview(e?.type??null,s);return}let i=new Map(this._shown);e?i.set(t,e.key):i.delete(t),this._shown=i,e&&this.want(e)}want(t){let e=w(t);this._thumbs.has(e)||this.wanted.has(e)||(this.wanted.add(e),this.queue.push(t),this.drain())}drain(){for(;this.drawing<2&&this.queue.length;){let t=this.queue.shift();this.drawing++;let e=w(t),s=`${e}|${fe}|1`;Xt(s,()=>this.thumb?this.thumb(t):Promise.resolve(null)).then(i=>{if(i){let r=new Map(this._thumbs);r.set(e,i),this._thumbs=r}else this.wanted.delete(e)}).catch(()=>this.wanted.delete(e)).finally(()=>{this.drawing--,this.drain()})}}pick(t){this.admin&&(this._recent=[t.key,...this._recent.filter(e=>e!==t.key)].slice(0,ue),O(ie,this._recent),this.resetFilters(),this.dispatchEvent(new CustomEvent("library-add",{detail:{type:t.type,mirror:!!t.mirror},bubbles:!0,composed:!0})))}preview(t,e){this.lite&&this.dispatchEvent(new CustomEvent("library-preview",{detail:{type:t,element:e},bubbles:!0,composed:!0}))}toggleFav(t){this._fav=this._fav.includes(t)?this._fav.filter(e=>e!==t):[...this._fav,t],O(se,this._fav)}toggleRecent(){this._recentShut=!this._recentShut,O(ae,this._recentShut)}isOpen(t,e){return t==="recent"?!this._recentShut:e?!this._searchShut.has(t):ne.has(t)?!this._shut.has(t):(this._open??this.defaultOpen).has(t)}toggleOpen(t,e){if(t==="recent")return this.toggleRecent();let s=i=>{let r=new Set(i);return r.has(t)?r.delete(t):r.add(t),r};e?this._searchShut=s(this._searchShut):ne.has(t)?(this._shut=s(this._shut),O(re,[...this._shut])):(this._open=s(this._open??this.defaultOpen),O(ee,[...this._open]))}setQuery(t){!!this._query.trim()!=!!t.trim()&&(this._searchShut=new Set),this._query=t}setRoom(t){this.roomTouched=!0,this._room=t}get filter(){return{query:this._query,room:this._room,electric:this._electric,light:this._light,outdoor:this._outdoor,pack:this._pack}}get activeFilters(){return B(this.filter)}clearFilters(){this.roomTouched=!0,this._room=null,this._pack=null,this._electric=this._light=this._outdoor=!1}resetFilters(){this.roomTouched=!1,this._room=this.roomHint,this._pack=null,this._electric=this._light=this._outdoor=!1}render(){let t=this.t,e=this.filter,s=Wt(this.entries,e),i=s.hits,r=this._query.trim().length>0,p=this.byKey,h=new Set(i.map(f=>f.key)),o=f=>({key:f.key,label:f.label,kind:f.kind,rooms:f.rooms,entries:[f]}),c=this._recent.map(f=>p.get(f)).filter(f=>!!f&&h.has(f.key)),l=this._fav.map(f=>p.get(f)).filter(f=>!!f&&h.has(f.key)),n=L.map(f=>({kind:f,cards:G(s.inRoom,f)})).filter(f=>f.cards.length),g=s.otherRooms.length?L.flatMap(f=>G(s.otherRooms,f)):[],u=n.filter(f=>ge.includes(f.kind)).map(f=>f.kind);this.defaultOpen=new Set(u.length?u:n.length?[n[0].kind]:[]);let b=B(e),k=f=>f==="room"?t(`lib_room_${this._room}`):f==="pack"?this.entries.find(T=>T.pack===this._pack)?.packLabel??this._pack??"":t(`lib_chip_${f}`);return a`<input
        class="fp3d-search"
        type="search"
        placeholder=${t("furniture_search")}
        .value=${this._query}
        @input=${f=>this.setQuery(f.target.value)}
        @keydown=${f=>{f.key==="Escape"&&this.setQuery("")}}
      />
      <div class="fp3d-lib-rooms" role="group">
        <button class="fp3d-chip ${this._room===null?"on":""}" @click=${()=>this.setRoom(null)}>${t("lib_room_all")}</button>
        ${H.map(f=>a`<button class="fp3d-chip ${this._room===f?"on":""}" @click=${()=>this.setRoom(f)}>${t(`lib_room_${f}`)}</button>`)}
      </div>
      ${this.packChips()}
      <div class="fp3d-lib-chips">
        <button class="fp3d-chip fp3d-chip-f ${this._electric?"on":""}" @click=${()=>this._electric=!this._electric}>⚡ ${t("lib_chip_electric")}</button>
        <button class="fp3d-chip fp3d-chip-f ${this._light?"on":""}" @click=${()=>this._light=!this._light}>💡 ${t("lib_chip_light")}</button>
        <button class="fp3d-chip fp3d-chip-f ${this._outdoor?"on":""}" @click=${()=>this._outdoor=!this._outdoor}>🌳 ${t("lib_chip_outdoor")}</button>
      </div>
      ${b.length?a`<div class="fp3d-lib-active" role="status">
            <span>${t("lib_filters")} ${b.map(k).join(" \xB7 ")}${s.hiddenByChips?a` <span class="fp3d-lib-hidden">(${t("lib_hidden_by_filters",{n:s.hiddenByChips})})</span>`:d}</span>
            <button class="fp3d-lib-clear" @click=${()=>this.clearFilters()}>${t("lib_clear_filters")}</button>
          </div>`:d}
      ${!r&&this.roomHint&&this._room===this.roomHint&&!this.roomTouched?a`<p class="fp3d-lib-hint">${t("lib_hint_room")}</p>`:d}
      ${i.length?d:a`<p class="fp3d-lib-hint">${t("furniture_search_none")}</p>`}
      ${s.cut?a`<p class="fp3d-lib-hint" role="status">${t("lib_keep_typing",{n:s.cut})}</p>`:d}
      ${c.length&&!r?this.section("recent",`\u{1F558} ${t("lib_recent")}`,c.map(o),r):d}
      ${l.length?this.section("fav",`\u2605 ${t("lib_favorites")}`,l.map(o),r):d}
      ${n.map(f=>this.section(f.kind,t(`lib_kind_${f.kind}`),f.cards,r))}
      ${g.length?this.section("other-rooms",t("lib_other_rooms",{n:s.otherRooms.length}),g,r):d}`}packChips(){let t=new Map;for(let e of this.entries)e.pack&&e.packLabel&&t.set(e.pack,e.packLabel);return t.size<2?d:a`<div class="fp3d-lib-chips" role="group" aria-label=${this.t("lib_pack_all")}>
      <button class="fp3d-chip ${this._pack===null?"on":""}" @click=${()=>this._pack=null}>${this.t("lib_pack_all")}</button>
      ${[...t].map(([e,s])=>a`<button class="fp3d-chip ${this._pack===e?"on":""}" @click=${()=>this._pack=e}>${s}</button>`)}
    </div>`}section(t,e,s,i){let r=t==="recent",p=this.isOpen(t,i),h=this._limits.get(t)??te,o=s.slice(0,h),c=s.reduce((l,n)=>l+n.entries.length,0);return a`<button class="fp3d-lib-head fp3d-lib-toggle ${r?"fp3d-lib-recent":""}" aria-expanded=${p} @click=${()=>this.toggleOpen(t,i)}>
        <span class="fp3d-lib-caret">${p?"\u25BE":"\u25B8"}</span>${e} <span class="fp3d-lib-count">${c}</span>
      </button>
      ${p?a`<div class="fp3d-lib-grid ${r?"fp3d-lib-recent-grid":""}">${Zt(o,l=>l.key,l=>this.card(l))}</div>
            ${s.length>h?a`<button class="fp3d-lib-more" @click=${()=>{let l=new Map(this._limits);l.set(t,h+te*2),this._limits=l}}>${this.t("lib_more",{n:s.length-h})}</button>`:d}`:d}`}card(t){let e=this.t,s=t.entries[0],i=t.entries.length>1,r=this._fav.includes(s.key),p=this._shown.get(s.key),h=p&&t.entries.find(n=>n.key===p)||s,o=this._thumbs.get(w(h))??this._thumbs.get(w(s)),c=s.light?"\u{1F4A1}":s.electric?"\u26A1":"",l=qt(t.entries.map(n=>n.type),this.updates,this.admin);return a`<div class="fp3d-lc ${i?"fp3d-lc-family":""}" title=${h.ikea?`${h.label} (IKEA ${h.ikea})`:h.label} @mouseleave=${()=>i&&this.showVariant(s.key,null,null)}>
      <button
        class="fp3d-lc-main"
        ?disabled=${!this.admin}
        @click=${()=>this.pick(s)}
        @mouseenter=${n=>this.preview(s.type,n.currentTarget)}
        @focus=${n=>this.preview(s.type,n.currentTarget)}
        @mouseleave=${()=>this.preview(null,null)}
        @blur=${()=>this.preview(null,null)}
      >
        ${this.lite?d:a`<span class="fp3d-lc-pic" data-key=${s.key}>${o?a`<img src=${o} alt="" loading="lazy" class=${(this._thumbs.has(w(h))?h:s).mirror?"fp3d-lc-mirrored":""} />`:a`<span class="fp3d-lc-wait"></span>`}</span>`}
        <span class="fp3d-lc-label">${t.label}${c?a` <span class="fp3d-lc-badge">${c}</span>`:d}</span>
        <span class="fp3d-lc-sub">${i?e("lib_sizes",{n:t.entries.length}):V(s.size,this.language)}${s.packLabel?a` · ${s.packLabel}`:a` · ${e("lib_basic")}`}</span>
      </button>
      ${i?a`<div class="fp3d-lc-chips">
            ${t.entries.map(n=>a`<button
                title="${n.label} · ${V(n.size,this.language)}"
                ?disabled=${!this.admin}
                class="fp3d-lc-chip ${h.key===n.key&&i&&p?"on":""}"
                @click=${()=>this.pick(n)}
                @mouseenter=${g=>this.showVariant(s.key,n,g.currentTarget)}
                @focus=${g=>this.showVariant(s.key,n,g.currentTarget)}
                @mouseleave=${()=>this.preview(null,null)}
                @blur=${()=>this.preview(null,null)}
              >${n.variant??n.label}</button>`)}
          </div>`:d}
      ${l.length?a`<button
            class="fp3d-lc-update"
            title=${e("lib_update_title")}
            @click=${()=>this.dispatchEvent(new CustomEvent("library-update",{detail:{types:l},bubbles:!0,composed:!0}))}
          >
            ⟳ ${e("upd_update")}
          </button>`:d}
      <button class="fp3d-lc-fav ${r?"on":""}" title=${e(r?"lib_fav_remove":"lib_fav_add")} aria-label=${e(r?"lib_fav_remove":"lib_fav_add")} @click=${()=>this.toggleFav(s.key)}>${r?"\u2605":"\u2606"}</button>
    </div>`}static styles=[x,$`
      :host {
        display: block;
      }
      .fp3d-search {
        position: sticky;
        top: 0;
        z-index: 2;
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        font-size: 14px;
        color: var(--fp3d-text);
        background: var(--fp3d-panel, #0d1424);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        padding: 8px 10px;
        margin: 6px 0 8px;
      }
      .fp3d-lib-rooms,
      .fp3d-lib-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        margin-bottom: 6px;
      }
      .fp3d-chip {
        font: inherit;
        font-size: 12px;
        color: var(--fp3d-text);
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        padding: 3px 9px;
        cursor: pointer;
        white-space: nowrap;
      }
      .fp3d-chip.on {
        background: var(--fp3d-primary);
        color: var(--fp3d-primary-text);
        border-color: var(--fp3d-accent);
        font-weight: 600;
      }
      .fp3d-chip-f {
        font-size: 11px;
      }
      .fp3d-lib-hint {
        margin: 2px 0 8px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-lib-active {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 4px 8px;
        margin: 0 0 8px;
        padding: 5px 8px;
        font-size: 12px;
        color: var(--fp3d-text);
        border: 1px solid var(--fp3d-accent);
        border-radius: 8px;
        background: rgba(80, 200, 255, 0.08);
      }
      .fp3d-lib-hidden {
        color: var(--fp3d-muted);
      }
      .fp3d-lib-clear {
        margin-left: auto;
        padding: 2px 8px;
        font: inherit;
        font-size: 12px;
        font-weight: 600;
        color: var(--fp3d-accent);
        background: none;
        border: 1px solid var(--fp3d-accent);
        border-radius: 999px;
        cursor: pointer;
      }
      .fp3d-lib-head {
        display: flex;
        align-items: center;
        gap: 6px;
        width: 100%;
        margin: 10px 0 4px;
        padding: 4px 0;
        font: inherit;
        font-size: 13px;
        font-weight: 600;
        color: var(--fp3d-text);
        background: none;
        border: 0;
        border-bottom: 1px solid var(--fp3d-line);
        text-align: left;
        cursor: pointer;
      }
      .fp3d-lib-recent {
        padding-left: 8px;
        border-left: 3px solid var(--fp3d-accent);
        background: color-mix(in srgb, var(--fp3d-accent) 10%, transparent);
      }
      .fp3d-lib-recent-grid {
        padding: 6px 0 6px 8px;
        border-left: 3px solid var(--fp3d-accent);
        background: color-mix(in srgb, var(--fp3d-accent) 5%, transparent);
      }
      .fp3d-lib-caret {
        width: 10px;
        color: var(--fp3d-muted);
      }
      .fp3d-lib-count {
        margin-left: auto;
        font-weight: 400;
        font-size: 12px;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-lib-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(108px, 1fr));
        gap: 6px;
      }
      .fp3d-lc {
        position: relative;
        display: flex;
        flex-direction: column;
        /* cards out of view are not laid out or painted: a first letter typed shows hundreds of them (#131) */
        content-visibility: auto;
        contain-intrinsic-size: auto 220px;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        overflow: hidden;
      }
      .fp3d-lc:hover {
        border-color: var(--fp3d-accent);
      }
      .fp3d-lc-main {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 2px;
        padding: 6px 6px 5px;
        font: inherit;
        color: var(--fp3d-text);
        background: none;
        border: 0;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-lc-main:disabled {
        cursor: default;
        opacity: 0.6;
      }
      .fp3d-lc-pic {
        display: block;
        height: 64px;
        border-radius: 6px;
        background: radial-gradient(ellipse at 50% 70%, rgba(80, 200, 255, 0.12), transparent 70%);
      }
      .fp3d-lc-pic img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .fp3d-lc-pic img.fp3d-lc-mirrored {
        transform: scaleX(-1);
      }
      .fp3d-lc-wait {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.03);
      }
      .fp3d-lc-label {
        font-size: 12px;
        font-weight: 500;
        line-height: 1.25;
        padding-right: 16px;
      }
      .fp3d-lc-badge {
        font-size: 10px;
      }
      .fp3d-lc-sub {
        font-size: 10.5px;
        color: var(--fp3d-muted);
        line-height: 1.2;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-lc-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 3px;
        padding: 0 6px 6px;
      }
      .fp3d-lc-chip {
        font: inherit;
        font-size: 11px;
        color: var(--fp3d-text);
        background: rgba(255, 255, 255, 0.07);
        border: 1px solid var(--fp3d-line);
        border-radius: 6px;
        padding: 2px 6px;
        cursor: pointer;
        white-space: nowrap;
      }
      .fp3d-lc-chip:hover,
      .fp3d-lc-chip.on {
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
      }
      .fp3d-lc-fav {
        position: absolute;
        top: 4px;
        right: 4px;
        width: 22px;
        height: 22px;
        padding: 0;
        font-size: 14px;
        line-height: 22px;
        color: var(--fp3d-muted);
        background: rgba(4, 16, 24, 0.55);
        border: 0;
        border-radius: 50%;
        cursor: pointer;
      }
      .fp3d-lc-fav.on,
      .fp3d-lc-fav:hover {
        color: #ffd166;
      }
      .fp3d-lc-update {
        position: absolute;
        top: 4px;
        left: 4px;
        padding: 2px 7px;
        font: inherit;
        font-size: 10.5px;
        font-weight: 600;
        color: #04101a;
        background: #ffd166;
        border: 0;
        border-radius: 999px;
        cursor: pointer;
      }
      .fp3d-lib-more {
        display: block;
        width: 100%;
        margin: 6px 0 2px;
        padding: 6px;
        font: inherit;
        font-size: 12px;
        color: var(--fp3d-accent);
        background: none;
        border: 1px dashed var(--fp3d-line);
        border-radius: 8px;
        cursor: pointer;
      }
    `]};v("fp3d-library",X);var me=24,pe=6,ce=3,J=[2,ce+pe],be=0;function le(m){let t="";do t=`g${Date.now().toString(36)}${(be++).toString(36)}`;while(m.some(e=>e.id===t));return t}function oe(m){let e=m.currentTarget?.clientWidth||1;return Math.min(.999,Math.max(0,m.offsetX/e))}var Q=class extends _{static properties={heading:{},space:{attribute:!1},labels:{attribute:!1},slots:{attribute:!1},gear:{attribute:!1},loose:{attribute:!1},gearOf:{attribute:!1},looseOf:{attribute:!1},nameOf:{attribute:!1},editable:{type:Boolean},linker:{attribute:!1},t:{attribute:!1},selected:{state:!0},pick:{state:!0},ghost:{state:!0},refused:{state:!0},face:{state:!0}};constructor(){super(),this.heading="",this.labels=[],this.slots=[],this.gear=[],this.loose=[],this.gearOf=()=>null,this.looseOf=()=>null,this.nameOf=t=>t,this.editable=!1,this.linker=null,this.t=t=>t,this.selected=null,this.pick=null,this.ghost=null,this.refused=null,this.face="front"}get hasRear(){return this.space?.rear!==!1}get shownFace(){return this.hasRear?this.face:"front"}send(t){this.slots=t,this.dispatchEvent(new CustomEvent("rack-change",{detail:{slots:t},bubbles:!0,composed:!0}))}refuse(t){this.refused={units:t.units,clash:t.clash,why:t.why??"overlap"}}setFace(t){this.face=t,this.ghost=null,this.refused=null}pickGear(t){this.editable&&(this.refused=null,this.ghost=null,this.pick=this.pick&&"add"in this.pick&&this.pick.add===t?null:{add:t})}tapSlot(t){this.refused=null,this.ghost=null,this.pick=null,this.selected=this.selected===t?null:t}startMove(){let t=this.slots.find(e=>e.id===this.selected);!this.editable||!t||t.on||(this.refused=null,this.pick={move:t.id})}hoverUnit(t,e=0){if(t===null||!this.pick){this.ghost=null;return}let s=this.candidate(t,e,null);!s||this.isLane(s)||this.showGhost(s)}hoverLane(t,e){let s=this.pick?this.candidate(t,0,e):null;!s||!this.isLane(s)||this.showGhost(s)}showGhost(t){let e=Ut(this.space,this.slots,t,this.gearOf,this.looseOf);this.ghost={units:e.units,ok:e.ok,clash:e.clash,...t.col?{col:t.col}:{}}}tapUnit(t,e=0){let s=this.pick&&this.candidate(t,e,null);if(!s||this.isLane(s)){(!this.pick||!this.editable)&&(this.selected=null,this.refused=null);return}this.place(s)}tapLane(t,e){let s=this.pick&&this.candidate(t,0,e);s&&this.isLane(s)&&this.place(s)}place(t){if(!this.pick||!this.editable)return;let s=z(this.space,this.slots,t,this.gearOf,this.looseOf);if(!s.ok)return this.refuse(s);this.refused=null,this.ghost=null,this.pick=null,this.selected=t.id,this.send(s.slots)}nudge(t){let e=this.slots.find(i=>i.id===this.selected);if(!this.editable||!e||e.on)return;let s=At(this.space,this.slots,e.id,e.u+t,this.gearOf,this.looseOf);if(!s.ok)return this.refuse(s);this.refused=null,this.send(s.slots)}nudgeCol(t){let e=this.slots.find(s=>s.id===this.selected);!e||e.on||this.replace({...e,col:(e.col??0)+t})}flipFace(){let t=this.slots.find(i=>i.id===this.selected);if(!t||t.on)return;let{face:e,...s}=t;this.replace(t.face==="rear"?s:{...s,face:"rear"})}putOnShelf(t){let e=this.slots.find(r=>r.id===this.selected);if(!this.editable||!e||e.on||!this.gearOf(e.type)?.gear.shelf)return;let s={id:le(this.slots),type:t,u:e.u,on:e.id},i=z(this.space,this.slots,s,this.gearOf,this.looseOf);if(!i.ok)return this.refuse(i);this.refused=null,this.send(i.slots)}replace(t){if(!this.editable)return;let e=z(this.space,this.slots,t,this.gearOf,this.looseOf);if(!e.ok)return this.refuse(e);this.refused=null,this.send(e.slots)}rename(t){if(!this.editable||!this.selected)return;let e=t.trim().slice(0,60);this.send(this.slots.map(s=>s.id===this.selected?{...s,name:e||null}:s))}relink(t){!this.editable||!this.selected||this.send(this.slots.map(e=>e.id===this.selected?{...e,...t(e)}:e))}linkDevice(t){if(!this.editable||!this.linker||!t)return;let e=this.linker.fromDevice(t);this.relink(s=>({entity:e.entity,links:e.links.slice(0,16),...!s.name&&e.name?{name:e.name.slice(0,60)}:{}}))}setStatusEntity(t){this.relink(e=>({entity:t||null,links:(e.links??[]).filter(s=>s!==t)}))}addLink(t){let e=this.slots.find(i=>i.id===this.selected),s=e?.links??[];!e||!t||t===e.entity||s.includes(t)||s.length>=16||this.relink(()=>({links:[...s,t]}))}removeLink(t){this.relink(e=>({links:(e.links??[]).filter(s=>s!==t)}))}deleteSelected(){if(!this.editable||!this.selected)return;let t=this.selected;this.selected=null,this.pick=null,this.refused=null,this.send(Ht(this.slots,t))}close(){this.dispatchEvent(new CustomEvent("rack-close",{bubbles:!0,composed:!0}))}isLane(t){let e=this.gearOf(t.type);return!!e&&e.gear.u<1}candidate(t,e,s){let i=this.pick;if(!i)return null;let r="add"in i?{id:le(this.slots),type:i.add,u:t}:this.slots.find(u=>u.id===i.move);if(!r)return null;let p=this.gearOf(r.type),{col:h,face:o,...c}={...r,u:t},l=c,n=s??(p&&p.gear.u>=1?Math.floor(e*F[p.gear.width]):0);return n&&(l.col=n),("add"in i?this.shownFace:r.face??"front")==="rear"&&p?.gear.depth!=="full"&&(l.face="rear"),l}onKey=t=>{t.target?.tagName!=="INPUT"&&(t.key==="Escape"?(t.stopPropagation(),this.pick||this.refused?(this.pick=null,this.ghost=null,this.refused=null):this.close()):t.key==="ArrowUp"||t.key==="ArrowDown"?(t.preventDefault(),t.stopPropagation(),this.nudge(t.key==="ArrowUp"?1:-1)):t.key==="ArrowLeft"||t.key==="ArrowRight"?(t.preventDefault(),t.stopPropagation(),this.nudgeCol(t.key==="ArrowRight"?1:-1)):t.key==="Delete"&&(t.stopPropagation(),this.deleteSelected()))};row(t,e){return`${this.space.u-(t+e-1)+1} / span ${e}`}column(t,e){let s=this.gearOf(t);if(s&&s.gear.u<1)return`${J[e]??J[0]} / span 1`;let i=s?F[s.gear.width]:1,r=pe/i;return`${ce+Math.min(e,i-1)*r} / span ${r}`}onFace(t){let e=this.gearOf(t.type);return e?zt(t,e.gear).includes(this.shownFace):this.shownFace==="front"}render(){let t=this.t,e=this.space?.u??0,s=Array.from({length:e},(n,g)=>e-g),i=this.space?Nt(this.space,this.slots,this.gearOf,this.looseOf):[],r=new Set(this.refused?.units??[]),p=new Set([...this.refused?.clash??[],...this.ghost&&!this.ghost.ok?this.ghost.clash:[],...i.map(n=>n.id)]),h=this.slots.find(n=>n.id===this.selected)??null,o=n=>this.labels[n-1]??n,c=this.slots.filter(n=>!n.on&&this.onFace(n)),l=this.pick?"add"in this.pick?this.pick.add:this.slots.find(n=>this.pick&&"move"in this.pick&&n.id===this.pick.move)?.type:void 0;return a`<div class="fp3d-rack-veil" @click=${n=>n.target===n.currentTarget&&this.close()} @keydown=${this.onKey}>
      <div class="fp3d-rack-sheet" role="dialog" aria-modal="true" aria-label=${t("rack_edit")} tabindex="-1" ${Ot()}>
        <div class="fp3d-rack-head">
          <h3>${this.heading||t("rack_edit")}</h3>
          ${this.renderTotals()}
          ${this.hasRear?a`<div class="fp3d-rack-faces" role="group">
                ${["front","rear"].map(n=>a`<button class="fp3d-btn" aria-pressed=${this.shownFace===n} @click=${()=>this.setFace(n)}>${t(`rack_face_${n}`)}</button>`)}
              </div>`:d}
          <button class="fp3d-btn" aria-label=${t("close")} @click=${()=>this.close()}>✕</button>
        </div>
        <div class="fp3d-rack-body">
          <div class="fp3d-rack-elev" style="grid-template-rows: repeat(${e}, ${me}px)" @pointerleave=${()=>this.hoverUnit(null)}>
            ${s.map(n=>a`<span class="fp3d-rack-num fp3d-rack-left" style="grid-row: ${this.row(n,1)}">${o(n)}</span>
                ${J.map((g,u)=>a`<button
                      class="fp3d-rack-lane"
                      style="grid-row: ${this.row(n,1)}; grid-column: ${g}"
                      aria-label=${`${u?"\u25B6":"\u25C0"} ${t("rack_unit",{n:o(n)})}`}
                      @pointerenter=${()=>this.hoverLane(n,u)}
                      @click=${()=>this.tapLane(n,u)}
                    ></button>`)}
                <button
                  class="fp3d-rack-cell ${r.has(n)?"fp3d-rack-bad":""}"
                  style="grid-row: ${this.row(n,1)}"
                  data-u=${n}
                  aria-label=${t("rack_unit",{n:o(n)})}
                  @pointermove=${g=>this.hoverUnit(n,oe(g))}
                  @click=${g=>this.tapUnit(n,oe(g))}
                ></button>
                <span class="fp3d-rack-num fp3d-rack-right" style="grid-row: ${this.row(n,1)}">${o(n)}</span>`)}
            ${c.map(n=>this.renderSlot(n,p))}
            ${this.ghost?.units.length&&l?a`<div
                  class="fp3d-rack-ghost ${this.ghost.ok?"fp3d-rack-ok":"fp3d-rack-bad"}"
                  style="grid-row: ${this.row(Math.max(1,this.ghost.units[0]),Math.min(this.ghost.units.length,e-Math.max(1,this.ghost.units[0])+1))}; grid-column: ${this.column(l,this.ghost.col??0)}"
                ></div>`:d}
          </div>
          <div class="fp3d-rack-side">
            ${this.refused?a`<p class="fp3d-rack-why" role="alert">${t(`rack_${this.refused.why}`)}</p>`:d}
            ${i.length?a`<section class="fp3d-rack-misfits">
                  <p class="fp3d-rack-why" role="alert">${t("rack_misfits",{n:i.length})}</p>
                  <ul>
                    ${i.map(n=>{let g=this.slots.find(u=>u.id===n.id);return a`<li><button class="fp3d-link" @click=${()=>this.tapSlot(g.id)}>${g.name||this.nameOf(g.type)}: ${t(`rack_${n.why}`)}</button></li>`})}
                  </ul>
                </section>`:d}
            ${h?this.renderChosen(h):d}
            ${this.editable?this.renderGear():a`<p class="fp3d-sub">${t("rack_read_only")}</p>`}
          </div>
        </div>
      </div>
    </div>`}renderTotals(){if(!this.space)return d;let t=this.t,e=Dt(this.space,this.slots,this.gearOf,this.looseOf);return a`<p class="fp3d-rack-totals">
      <span>${t("rack_totals",{used:e.used,free:e.free})}</span>
      <span>${e.unknown?t("rack_watts_about",{w:e.watts}):`${e.watts} W`}</span>
    </p>`}renderSlot(t,e){let s=this.space.u,i=K(t,this.gearOf).length;if(t.u<1||t.u+i-1>s)return d;let r=this.gearOf(t.type),p=u=>["fp3d-rack-gear",u===this.selected?"fp3d-rack-chosen":"",e.has(u)?"fp3d-rack-bad":"",this.pick&&"move"in this.pick&&this.pick.move===u?"fp3d-rack-moving":""].join(" "),h=`grid-row: ${this.row(t.u,i)}; grid-column: ${this.column(t.type,t.col??0)}`,o=t.name||this.nameOf(t.type);if(r&&r.gear.u<1)return a`<button class="${p(t.id)} fp3d-rack-pdu" style=${h} data-slot=${t.id} title=${o} aria-label=${o} aria-pressed=${t.id===this.selected} @click=${()=>this.tapSlot(t.id)}></button>`;let c=this.linker?.status(t)??null,l=c?a`<i class="fp3d-rack-led fp3d-rack-led-${c}" style="background:${Ft[c]}"></i>`:d,n=a`<span>${o}</span>${i>1?a`<small>${i}U</small>`:d}${l}`;if(!r?.gear.shelf)return a`<button class=${p(t.id)} style=${h} data-slot=${t.id} aria-pressed=${t.id===this.selected} @click=${()=>this.tapSlot(t.id)}>${n}</button>`;let g=this.slots.filter(u=>u.on===t.id);return a`<div class="fp3d-rack-shelf" style=${h}>
      <button class="${p(t.id)} fp3d-rack-shelf-tray" data-slot=${t.id} aria-pressed=${t.id===this.selected} @click=${()=>this.tapSlot(t.id)}>${n}</button>
      ${g.map(u=>a`<button class="${p(u.id)} fp3d-rack-loose" data-slot=${u.id} aria-pressed=${u.id===this.selected} @click=${()=>this.tapSlot(u.id)}>${u.name||this.nameOf(u.type)}</button>`)}
    </div>`}renderChosen(t){let e=this.t,s=K(t,this.gearOf),i=c=>this.labels[c-1]??c,r=s.length>1?`${i(s[0])}-${i(s.at(-1))}`:`${i(s[0])}`,p=t.on?null:this.gearOf(t.type),h=p?p.gear.u<1?2:F[p.gear.width]:1,o=t.on?this.slots.find(c=>c.id===t.on):null;return a`<section class="fp3d-rack-chosen-box">
      <h4>${t.name||this.nameOf(t.type)}</h4>
      <p class="fp3d-sub">${o?`\u2912 ${o.name||this.nameOf(o.type)}`:e("rack_at",{u:r})}${p&&p.gear.depth==="full"?a` · ${e("rack_full_depth")}`:t.face==="rear"&&this.hasRear?a` · ${e("rack_face_rear")}`:d}</p>
      ${this.editable?a`<label class="fp3d-field"
              >${e("furn_name")}
              <input type="text" maxlength="60" .value=${t.name??""} placeholder=${this.nameOf(t.type)} @change=${c=>this.rename(c.target.value)}
            /></label>
            <div class="fp3d-rack-actions">
              ${t.on?d:a`<button class="fp3d-btn" title=${e("rack_up")} @click=${()=>this.nudge(1)}>▲</button>
                    <button class="fp3d-btn" title=${e("rack_down")} @click=${()=>this.nudge(-1)}>▼</button>
                    ${h>1?a`<button class="fp3d-btn" ?disabled=${(t.col??0)<=0} @click=${()=>this.nudgeCol(-1)}>◀</button>
                          <button class="fp3d-btn" ?disabled=${(t.col??0)>=h-1} @click=${()=>this.nudgeCol(1)}>▶</button>`:d}
                    ${this.hasRear&&p&&p.gear.depth!=="full"?a`<button class="fp3d-btn" @click=${()=>this.flipFace()}>⇄ ${e(t.face==="rear"?"rack_face_front":"rack_face_rear")}</button>`:d}
                    <button class="fp3d-btn" aria-pressed=${!!this.pick&&"move"in this.pick} @click=${()=>this.startMove()}>${e("rack_move")}</button>`}
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteSelected()}>${e("delete")}</button>
            </div>
            ${this.pick&&"move"in this.pick?a`<p class="fp3d-sub">${e("rack_move_hint")}</p>`:d}
            ${p?.gear.shelf?this.renderShelf():d}`:d}
      ${this.renderLinks(t)}
    </section>`}renderLinks(t){let e=this.linker;if(!e)return d;let s=this.t,i=t.links??[],r=(o,c,l,n)=>a`<fp3d-entity-picker
        .options=${o}
        .fixed=${l}
        .value=${c}
        .placeholder=${s("entity_search")}
        @change=${g=>{g.stopPropagation(),n(g.detail.value)}}
      ></fp3d-entity-picker>`,p={id:"none",label:s("entity_none")};if(!this.editable)return t.entity||i.length?a`<h4>${s("rack_links")}</h4>
            <ul class="fp3d-rack-links">
              ${[t.entity,...i].filter(o=>!!o).map(o=>a`<li>${e.label(o)}</li>`)}
            </ul>`:d;let h=e.suggest(t).filter(o=>o!==t.entity&&!i.includes(o));return a`<h4>${s("rack_links")}</h4>
      <label class="fp3d-field">${s("rack_ha_device")} ${r(e.devices,null,[],o=>this.linkDevice(o))}</label>
      <label class="fp3d-field">${s("rack_status_from")} ${r(e.entities,t.entity??"none",[p],o=>this.setStatusEntity(o==="none"?null:o))}</label>
      ${i.length?a`<ul class="fp3d-rack-links">
            ${i.map(o=>a`<li><span>${e.label(o)}</span><button class="fp3d-btn" aria-label=${s("delete")} @click=${()=>this.removeLink(o)}>✕</button></li>`)}
          </ul>`:d}
      ${i.length<16?a`<label class="fp3d-field">${s("rack_link_add")} ${r(e.entities,null,[],o=>this.addLink(o))}</label>`:d}
      ${h.length&&i.length<16?a`<p class="fp3d-sub">${s("rack_suggested")}</p>
            <div class="fp3d-rack-list">${h.map(o=>a`<button class="fp3d-btn fp3d-rack-choice" @click=${()=>this.addLink(o)}>+ ${e.label(o)}</button>`)}</div>`:d}`}renderShelf(){let t=this.t;return a`<h4>${t("rack_on_shelf")}</h4>
      ${this.loose.length?a`<div class="fp3d-rack-list">${this.loose.map(e=>a`<button class="fp3d-btn fp3d-rack-choice" @click=${()=>this.putOnShelf(e.type)}>${e.name}</button>`)}</div>`:a`<p class="fp3d-sub">${t("rack_no_loose")}</p>`}`}renderGear(){let t=this.t,e=this.pick&&"add"in this.pick?this.pick.add:null,s=e?(this.gearOf(e)?.gear.u??1)<1:!1;return a`<section>
      <h4>${t("rack_add")}</h4>
      ${this.gear.length?a`<div class="fp3d-rack-list">
            ${this.gear.map(i=>{let r=this.gearOf(i.type)?.gear,h=`${r?.u??1}U${r&&r.width!=="full"?` ${t(`rack_width_${r.width}`)}`:""}`;return a`<button class="fp3d-btn fp3d-rack-choice" aria-pressed=${e===i.type} @click=${()=>this.pickGear(i.type)}>${i.name}<small>${h}</small></button>`})}
          </div>`:a`<p class="fp3d-sub">${t("rack_no_gear")}</p>`}
      ${e?a`<p class="fp3d-sub">${t(s?"rack_lane_hint":"rack_add_hint")}</p>`:d}
    </section>`}static styles=[x,R,$`
      .fp3d-rack-veil {
        position: fixed;
        inset: 0;
        z-index: 30;
        display: flex;
        align-items: center;
        /* at the left, so the editor's 3D pane on the right shows the rack as it changes */
        justify-content: flex-start;
        background: rgba(0, 0, 0, 0.25);
        padding: 16px;
      }
      .fp3d-rack-sheet {
        background: var(--fp3d-chrome-solid);
        color: var(--fp3d-text);
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        box-shadow: var(--fp3d-shadow);
        width: min(720px, 100%);
        max-height: calc(100% - 16px);
        display: flex;
        flex-direction: column;
        outline: none;
      }
      .fp3d-rack-head {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        padding: 10px 14px;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-rack-head h3 {
        margin: 0;
        font-size: 16px;
      }
      .fp3d-rack-body {
        display: flex;
        gap: 16px;
        padding: 14px;
        overflow: auto;
      }
      .fp3d-rack-elev {
        display: grid;
        /* U numbers, the left 0U lane, the U space in 6 (halves take 3, thirds 2), the right lane, U numbers */
        grid-template-columns: 28px 14px repeat(6, minmax(30px, 47px)) 14px 28px;
        flex: none;
        align-self: flex-start;
        border-radius: 6px;
        background: var(--fp3d-bg);
        padding: 6px 0;
      }
      .fp3d-rack-num {
        font-size: 11px;
        color: var(--fp3d-muted);
        display: flex;
        align-items: center;
        justify-content: center;
        font-variant-numeric: tabular-nums;
        border-bottom: 1px dotted var(--fp3d-line);
      }
      .fp3d-rack-left {
        grid-column: 1;
      }
      .fp3d-rack-right {
        grid-column: 10;
      }
      .fp3d-rack-cell,
      .fp3d-rack-gear,
      .fp3d-rack-ghost {
        grid-column: 3 / span 6;
      }
      .fp3d-rack-lane {
        border: 0;
        border-bottom: 1px dotted var(--fp3d-line);
        background: rgba(120, 170, 255, 0.04);
        padding: 0;
        cursor: pointer;
      }
      .fp3d-rack-lane:hover {
        background: rgba(120, 170, 255, 0.14);
      }
      .fp3d-rack-gear.fp3d-rack-pdu {
        margin: 1px 1px;
        padding: 0;
        background: repeating-linear-gradient(180deg, var(--fp3d-bg2) 0 6px, var(--fp3d-line) 6px 8px);
      }
      .fp3d-rack-shelf {
        z-index: 1;
        display: flex;
        align-items: stretch;
        gap: 2px;
        margin: 1px 2px;
        border-bottom: 3px solid var(--fp3d-muted);
        min-width: 0;
      }
      .fp3d-rack-shelf .fp3d-rack-gear {
        margin: 0;
      }
      .fp3d-rack-shelf-tray {
        flex: 0 0 auto;
        max-width: 45%;
        background: transparent;
        border-style: dashed;
      }
      .fp3d-rack-loose {
        flex: 1 1 0;
        min-width: 0;
        align-self: flex-end;
        height: 75%;
      }
      .fp3d-rack-totals {
        margin: 0 0 0 auto;
        display: flex;
        flex-wrap: wrap;
        gap: 4px 12px;
        font-size: 12px;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-rack-faces {
        display: flex;
        gap: 4px;
      }
      .fp3d-rack-faces [aria-pressed="true"] {
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
      }
      .fp3d-rack-misfits ul {
        margin: 6px 0 0;
        padding-left: 18px;
        font-size: 12px;
      }
      .fp3d-link {
        background: none;
        border: 0;
        padding: 0;
        color: inherit;
        font: inherit;
        text-decoration: underline;
        cursor: pointer;
        text-align: left;
      }
      .fp3d-rack-cell {
        border: 0;
        border-bottom: 1px dotted var(--fp3d-line);
        background: transparent;
        padding: 0;
        cursor: pointer;
        font: inherit;
      }
      .fp3d-rack-cell:hover {
        background: rgba(120, 170, 255, 0.08);
      }
      .fp3d-rack-gear {
        z-index: 1;
        margin: 1px 2px;
        border: 1px solid var(--fp3d-line);
        border-radius: 3px;
        background: var(--fp3d-bg2);
        color: var(--fp3d-text);
        font: inherit;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 6px;
        padding: 0 8px;
        cursor: pointer;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .fp3d-rack-gear small {
        color: var(--fp3d-muted);
      }
      .fp3d-rack-led {
        display: inline-block;
        flex: none;
        width: 8px;
        height: 8px;
        margin-left: auto;
        border-radius: 2px;
      }
      .fp3d-rack-links {
        list-style: none;
        margin: 0 0 6px;
        padding: 0;
        display: grid;
        gap: 4px;
      }
      .fp3d-rack-links li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 6px;
      }
      .fp3d-rack-gear.fp3d-rack-chosen {
        border-color: var(--fp3d-accent);
        box-shadow: inset 0 0 0 1px var(--fp3d-accent);
      }
      .fp3d-rack-gear.fp3d-rack-moving {
        opacity: 0.55;
      }
      .fp3d-rack-ghost {
        z-index: 2;
        pointer-events: none;
        margin: 1px 2px;
        border-radius: 3px;
        border: 2px dashed var(--fp3d-accent);
        background: rgba(55, 224, 255, 0.16);
      }
      .fp3d-rack-ghost.fp3d-rack-bad,
      .fp3d-rack-cell.fp3d-rack-bad,
      .fp3d-rack-gear.fp3d-rack-bad {
        border: 2px solid var(--fp3d-danger);
        background: rgba(255, 107, 139, 0.22);
      }
      .fp3d-rack-side {
        position: sticky;
        top: 0;
        align-self: flex-start;
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .fp3d-rack-side h4 {
        margin: 0 0 6px;
        font-size: 13px;
      }
      .fp3d-rack-why {
        margin: 0;
        padding: 8px 10px;
        border-radius: 6px;
        color: var(--fp3d-danger);
        border: 1px solid var(--fp3d-danger);
      }
      .fp3d-rack-list,
      .fp3d-rack-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-rack-choice {
        display: flex;
        gap: 6px;
        align-items: baseline;
      }
      .fp3d-rack-choice small {
        color: var(--fp3d-muted);
      }
      .fp3d-rack-choice[aria-pressed="true"],
      .fp3d-rack-actions [aria-pressed="true"] {
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
      }
      .fp3d-field {
        display: flex;
        flex-direction: column;
        gap: 4px;
        font-size: 12px;
        color: var(--fp3d-muted);
        margin-bottom: 8px;
      }
      @media (max-width: 600px) {
        .fp3d-rack-veil {
          padding: 0;
          align-items: stretch;
        }
        .fp3d-rack-sheet {
          border-radius: 0;
          max-height: none;
        }
        .fp3d-rack-body {
          flex-direction: column;
        }
        .fp3d-rack-side {
          position: static;
          align-self: stretch;
        }
        .fp3d-rack-elev {
          align-self: stretch;
          grid-template-columns: 28px 14px repeat(6, 1fr) 14px 28px;
        }
      }
    `]};v("fp3d-rack-sheet",Q);var Y=class extends _{static properties={options:{attribute:!1},value:{attribute:!1},locked:{attribute:!1},disabled:{type:Boolean},label:{attribute:!1},placeholder:{attribute:!1},searchLabel:{attribute:!1},emptyText:{attribute:!1},secondaryLabel:{attribute:!1},removeLabel:{attribute:!1},_query:{state:!0},_open:{state:!0},_cursor:{state:!0},_more:{state:!0}};constructor(){super(),this.options=[],this.value=[],this.locked=[],this.disabled=!1,this.label="",this.placeholder="",this.searchLabel="",this.emptyText="\u2013",this.secondaryLabel="",this.removeLabel="Remove {name}",this._query="",this._open=!1,this._cursor=0,this._more=!1}get open(){return this._open}nameOf(t){return this.options.find(e=>e.id===t)?.label??t}get rows(){let t=this._query.trim().toLowerCase().split(/\s+/).filter(Boolean),e=this._more||!this.secondaryLabel;return this.options.filter(s=>(e||!s.secondary||this.value.includes(s.id))&&t.every(i=>`${s.label} ${s.note??""}`.toLowerCase().includes(i)))}get hiddenCount(){return this.secondaryLabel&&!this._more?this.options.filter(t=>t.secondary&&!this.value.includes(t.id)).length:0}emit(t){this.value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}toggle(t){this.disabled||(this.value.includes(t)?this.locked.includes(t)||this.emit(this.value.filter(e=>e!==t)):this.emit([...this.value,t]))}dropPick(t){!this.disabled&&!this.locked.includes(t)&&this.emit(this.value.filter(e=>e!==t))}openList(){this._open=!0}closeList(){this._open=!1,this._query=""}updated(t){this._open&&t.has("_cursor")&&this.renderRoot?.querySelector?.("li.cursor")?.scrollIntoView?.({block:"nearest"})}onKey(t){let e=this.rows;if(t.key==="ArrowDown"||t.key==="ArrowUp")this.openList(),this._cursor=Math.max(0,Math.min(e.length-1,this._cursor+(t.key==="ArrowDown"?1:-1))),t.preventDefault();else if(t.key==="Enter"||t.key===" "&&!this._query)this._open&&e[this._cursor]?this.toggle(e[this._cursor].id):this.openList(),t.preventDefault();else if(t.key==="Escape")this._open&&t.stopPropagation(),this.closeList();else if(t.key==="Backspace"&&!this._query){let s=[...this.value].reverse().find(i=>!this.locked.includes(i));s&&this.dropPick(s)}}onFocusOut(t){let e=t.relatedTarget;(!e||!this.renderRoot.contains(e))&&this.closeList()}render(){let t=this._open?this.rows:[],e=this.hiddenCount;return a`<div class="wrap" @focusout=${this.onFocusOut}>
      <div class="box" @click=${()=>this.renderRoot.querySelector("input")?.focus()}>
        ${this.value.map(s=>{let i=this.nameOf(s),r=this.locked.includes(s);return a`<span class="chip">${i}${r||this.disabled?d:a`<button type="button" aria-label=${this.removeLabel.replace("{name}",i)} @click=${p=>(p.stopPropagation(),this.dropPick(s))}>×</button>`}</span>`})}
        <input
          type="text"
          role="combobox"
          autocomplete="off"
          aria-label=${this.label}
          aria-expanded=${this._open}
          aria-haspopup="listbox"
          aria-controls="list"
          placeholder=${this.value.length?this.searchLabel:this.placeholder||this.searchLabel}
          .value=${this._query}
          ?disabled=${this.disabled}
          @focus=${()=>this.openList()}
          @click=${()=>this.openList()}
          @input=${s=>{this._query=s.target.value,this._cursor=0,this.openList()}}
          @keydown=${this.onKey}
        />
      </div>
      ${this._open?a`<div class="pop">
            <ul id="list" class="list" role="listbox" aria-multiselectable="true" aria-label=${this.label}>
              ${t.length?d:a`<li class="empty" role="presentation">${this.emptyText}</li>`}
              ${t.map((s,i)=>{let r=this.value.includes(s.id);return a`<li
                  role="option"
                  aria-selected=${r}
                  class="${i===this._cursor?"cursor":""} ${r?"on":""}"
                  @mousedown=${p=>p.preventDefault()}
                  @click=${()=>this.toggle(s.id)}
                >
                  <span class="tick" aria-hidden="true">${r?"\u2713":""}</span><span>${s.label}</span>${s.note?a`<small>${s.note}</small>`:d}
                </li>`})}
            </ul>
            ${this.secondaryLabel?a`<label class="more"><input type="checkbox" .checked=${this._more} @change=${s=>this._more=s.target.checked} />${this.secondaryLabel}${e?a` <small>(${e})</small>`:d}</label>`:d}
          </div>`:d}
    </div>`}static styles=[x,$`
      :host {
        display: block;
        position: relative;
      }
      .box {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
        box-sizing: border-box;
        min-height: 44px;
        padding: 4px 8px;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        cursor: text;
      }
      .box:focus-within {
        outline: 2px solid var(--fp3d-accent);
        outline-offset: -1px;
      }
      .chip {
        display: inline-flex;
        align-items: center;
        gap: 2px;
        box-sizing: border-box;
        min-height: 32px;
        padding: 0 2px 0 10px;
        font-size: 13px;
        border-radius: 999px;
        background: color-mix(in srgb, var(--fp3d-accent) 20%, transparent);
      }
      .chip button {
        position: relative;
        width: 28px;
        height: 28px;
        padding: 0;
        font: inherit;
        line-height: 1;
        color: inherit;
        background: none;
        border: 0;
        border-radius: 50%;
        cursor: pointer;
      }
      .chip button::after {
        content: "";
        position: absolute;
        inset: -8px -4px;
      }
      .chip button:hover,
      .chip button:focus-visible {
        background: color-mix(in srgb, var(--fp3d-text) 20%, transparent);
        outline: none;
      }
      input[type="text"] {
        flex: 1 1 8em;
        min-width: 6em;
        box-sizing: border-box;
        padding: 8px 2px;
        font: inherit;
        color: var(--fp3d-text);
        background: none;
        border: 0;
        outline: none;
      }
      input::placeholder {
        color: var(--fp3d-muted);
      }
      .pop {
        position: absolute;
        left: 0;
        right: 0;
        top: calc(100% + 4px);
        z-index: 20;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        box-shadow: var(--fp3d-shadow);
      }
      .list {
        margin: 0;
        padding: 4px;
        list-style: none;
        max-height: 260px;
        overflow-y: auto;
      }
      li {
        display: flex;
        align-items: center;
        gap: 8px;
        min-height: 40px;
        padding: 4px 8px;
        box-sizing: border-box;
        border-radius: 6px;
        cursor: pointer;
        font-size: 13.5px;
      }
      li small,
      .more small {
        color: var(--fp3d-muted);
        font-size: 11px;
      }
      li.cursor,
      li:hover {
        background: color-mix(in srgb, var(--fp3d-accent) 18%, transparent);
      }
      li.on {
        color: var(--fp3d-accent);
      }
      .tick {
        width: 1.2em;
        text-align: center;
      }
      li.empty {
        color: var(--fp3d-muted);
        cursor: default;
      }
      .more {
        display: flex;
        align-items: center;
        gap: 8px;
        min-height: 40px;
        padding: 4px 12px;
        font-size: 13px;
        border-top: 1px solid var(--fp3d-line);
        cursor: pointer;
      }
    `]};v("fp3d-multi-select",Y);var Z=class extends _{static properties={value:{attribute:!1},hour12:{type:Boolean},disabled:{type:Boolean},clearable:{type:Boolean},step:{type:Number},label:{attribute:!1},hourLabel:{attribute:!1},minuteLabel:{attribute:!1},periodLabel:{attribute:!1}};constructor(){super(),this.value="",this.hour12=!1,this.disabled=!1,this.clearable=!1,this.step=5,this.label="",this.hourLabel="Hour",this.minuteLabel="Minute",this.periodLabel="AM/PM"}set(t,e){let s=W(this.value);if(t==="h"&&e==="")return this.send("");let i=s===null?0:Math.floor(s/60),r=s===null?0:s%60,p=i,h=r;t==="m"?h=Number(e):t==="h"?p=this.hour12?Number(e)%12+(i>=12?12:0):Number(e):p=i%12+(e==="pm"?12:0),this.send(Jt(p*60+h))}send(t){this.value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}render(){let t=W(this.value),e=t===null?null:Math.floor(t/60),s=t===null?null:t%60,i=Math.max(1,Math.round(this.step)||5),r=[...new Set([...Array.from({length:Math.ceil(60/i)},(l,n)=>n*i),...s===null?[]:[s]])].sort((l,n)=>l-n),p=this.hour12?[12,...Array.from({length:11},(l,n)=>n+1)]:Array.from({length:24},(l,n)=>n),h=e===null?"":String(this.hour12?e%12||12:e),o=l=>String(l).padStart(2,"0"),c=e===null;return a`<span class="t" role="group" aria-label=${this.label}>
      <select aria-label=${this.hourLabel} ?disabled=${this.disabled} @change=${l=>this.set("h",l.target.value)}>
        ${c?a`<option value="" selected>${this.clearable?"\u2013":o(0)}</option>`:d}
        ${this.clearable&&!c?a`<option value="">–</option>`:d}
        ${p.map(l=>a`<option value=${l} ?selected=${String(l)===h}>${this.hour12?l:o(l)}</option>`)}
      </select>
      <span aria-hidden="true">:</span>
      <select aria-label=${this.minuteLabel} ?disabled=${this.disabled||c&&this.clearable} @change=${l=>this.set("m",l.target.value)}>
        ${r.map(l=>a`<option value=${l} ?selected=${l===s||c&&l===0}>${o(l)}</option>`)}
      </select>
      ${this.hour12?a`<select aria-label=${this.periodLabel} ?disabled=${this.disabled||c&&this.clearable} @change=${l=>this.set("p",l.target.value)}>
            <option value="am" ?selected=${e===null||e<12}>AM</option>
            <option value="pm" ?selected=${e!==null&&e>=12}>PM</option>
          </select>`:d}
    </span>`}static styles=[x,$`
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
    `]};v("fp3d-time-field",Z);var ke="household.custom";function tt(m){return(m?.find(t=>t.id===ke)?.items??[]).filter(rt)}var de=It("home-3d-items",()=>"b6a8d9efeaa6");var et="pack.json",ve=/^(?:README|LICEN[CS]E|COPYING|CHANGELOG)(?:\.(?:md|txt))?$/i;function he(m){let t=m.filter(i=>!i.split("/").some(r=>r.startsWith("."))),e=t.filter(i=>i===et||i.endsWith(`/${et}`)).map(i=>i.slice(0,-et.length).replace(/\/$/,"")),s=new Map(e.sort().map(i=>[i,{root:i,files:new Map,refused:[]}]));for(let i of t){let r=e.filter(o=>o===""||i.startsWith(`${o}/`)).sort((o,c)=>c.length-o.length)[0];if(r===void 0)continue;let p=r?i.slice(r.length+1):i,h=s.get(r);ve.test(p)||(p.toLowerCase().endsWith(".json")?h.files.set(p,i):h.refused.push(p))}return[...s.values()]}var st=class extends _{static properties={hass:{attribute:!1},canEdit:{attribute:!1},packs:{attribute:!1},building:{attribute:!1},_packMsg:{state:!0},_itemsError:{state:!0},_open:{state:!0},_packUrl:{state:!0},_installing:{state:!0},_preview:{state:!0},_updates:{state:!0},_checking:{state:!0},_updatesMsg:{state:!0}};seasonDatesPart;constructor(){super(),this._packMsg=null,this._itemsError=null,this._packUrl="",this._installing=!1,this._preview=null,this._updates=null,this._checking=!1,this._updatesMsg=null;let t=[];try{t=JSON.parse(localStorage.getItem("home3d.ext.open")??"[]")}catch{}this._open=new Set(t)}toggleOpen(t){let e=new Set(this._open);e.has(t)?e.delete(t):e.add(t),this._open=e;try{localStorage.setItem("home3d.ext.open",JSON.stringify([...e]))}catch{}}summaryBar(t,e){let s=e.reduce((r,p)=>r+p.n,0),i=this._open.has(t);return a`<button class="fp3d-sum" aria-expanded=${i} @click=${()=>this.toggleOpen(t)}>
      <span class="fp3d-sum-bar">
        ${e.filter(r=>r.n>0).map(r=>a`<i class="fp3d-sum-${r.tone}" style="flex:${r.n}"></i>`)}
      </span>
      <span class="fp3d-sum-text">
        ${e.filter(r=>r.n>0||r.tone==="ok").map(r=>a`<b class="fp3d-sum-${r.tone}-text">${r.n}</b> ${r.label}`)}
        ${s?d:a`<span class="fp3d-sub">–</span>`}
      </span>
      <span class="fp3d-sum-caret">${i?"\u25BE":"\u25B8"} ${this.t(i?"ext_hide_list":"ext_show_list")}</span>
    </button>`}updated(t){let e=t.has("hass")&&!this._updates&&!this.updatesLoading&&!this.updatesTried;this.hass&&(e||t.has("packs")||t.has("building"))&&this.loadUpdates()}updatesLoading=!1;updatesTried=!1;updatesSeq=0;async loadUpdates(){if(!this.hass)return;this.updatesLoading=!0,this.updatesTried=!0;let t=++this.updatesSeq;try{let e=await j(this.hass);t===this.updatesSeq&&(this._updates=e)}catch{t===this.updatesSeq&&(this._updates=null)}finally{t===this.updatesSeq&&(this.updatesLoading=!1)}}async updatesCall(t,e=!1){if(this.hass)try{let s=await t(this.hass);s&&(this._updates=s),e&&this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}))}catch(s){this._updatesMsg={ok:!1,text:this.packError(s)}}}async checkNow(){if(!(!this.hass||this._checking)){this._checking=!0,this._updatesMsg=null;try{let t=await $t(this.hass);this._updates=t;let e=t.packs.filter(s=>s.available).length;this._updatesMsg={ok:!0,text:this.t("upd_checked",{n:t.installed.length+e})},t.installed.length&&this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}))}catch(t){this._updatesMsg={ok:!1,text:this.packError(t)}}finally{this._checking=!1}}}updateItems(t){this.updatesCall(async e=>(await vt(e,t),j(e)))}time(t){return t==null?"\u2013":(t instanceof Date?t:new Date(t*1e3)).toLocaleString(this.hass?.language,{dateStyle:"medium",timeStyle:"short"})}renderUpdates(){let t=this._updates;if(!t)return d;let e=this.isEditor,s=t.settings,i=jt(t),r=this.hass?.language??"en",p=t.items.filter(o=>!o.pinned),h=Kt(s);return a`<section class="fp3d-ext-card fp3d-updates">
      <h3>${this.t("upd_title")}</h3>
      <p class="fp3d-sub">${this.t("upd_intro")}</p>
      ${this.summaryBar("updates",[{n:i.updates,label:this.t("upd_sum_updates"),tone:"update"},{n:i.pinned,label:this.t("upd_sum_pinned"),tone:"missing"}])}
      ${this._open.has("updates")?a`${t.items.length?t.items.map(o=>a`<div class="fp3d-pack">
                  <div>
                    <b>${o.name[r.split("-")[0]]??o.name.en??Object.values(o.name)[0]??o.item}</b>
                    <span class="fp3d-sub">${o.release===o.new_release?this.t("upd_item_same",{to:o.new_release,n:o.placed}):this.t("upd_item",{from:o.release,to:o.new_release,n:o.placed})}${o.pinned?` \xB7 ${this.t("upd_pinned")}`:""}</span>
                    ${o.note?a`<span class="fp3d-sub fp3d-upd-note">${o.note}</span>`:d}
                  </div>
                  ${e?a`<button class="fp3d-btn" @click=${()=>this.updateItems([o.type])}>${this.t("upd_update")}</button>`:d}
                </div>`):a`<p class="fp3d-sub">${this.t("upd_none")}</p>`}
          ${e&&p.length>1?a`<button class="fp3d-btn fp3d-primary fp3d-pack-import" @click=${()=>this.updateItems(p.map(o=>o.type))}>${this.t("upd_update_all",{n:p.length})}</button>`:d}`:d}
      <div class="fp3d-upd-when">
        <button
          class="fp3d-link fp3d-ext-setting"
          @click=${()=>this.dispatchEvent(new CustomEvent("open-settings",{detail:{section:"packs",id:"pack_updates.frequency"},bubbles:!0,composed:!0}))}
        >
          ${this.t("upd_frequency")}: ${this.t(`upd_freq_${s.frequency}`)}${s.auto_update?` \xB7 ${this.t("upd_auto")}`:""} · ${this.t("settings")} ›
        </button>
        ${e?a`<button class="fp3d-btn" ?disabled=${this._checking} @click=${()=>this.checkNow()}>${this._checking?this.t("upd_checking"):this.t("upd_check_now")}</button>`:d}
      </div>
      <p class="fp3d-sub">
        ${this.t("upd_last_check",{time:this.time(t.last_check)})}${h?a` · ${this.t("upd_next_check",{time:this.time(h)})}`:d}
      </p>
      ${this._updatesMsg?a`<p class="fp3d-sub ${this._updatesMsg.ok?"fp3d-notice":"fp3d-pack-error"}">${this._updatesMsg.text}</p>`:d}
    </section>`}renderPackUpdate(t){let e=this._updates?.packs.find(i=>i.id===t.id);if(!e||t.custom)return d;let s=S(t,this.hass?.language??"de");return a`${e.error?a`<span class="fp3d-sub fp3d-pack-error">${this.t("pack_check_error",{detail:e.error})}</span>`:e.available?a`<span class="fp3d-sub fp3d-pack-available">${this.t("pack_available",{release:e.available.release,commit:A(e.available.commit)})}</span>
              ${e.available.note?a`<span class="fp3d-sub fp3d-upd-note">${e.available.note}</span>`:d}
              ${this.isEditor&&t.source?.origin?a`<button class="fp3d-btn" ?disabled=${this._installing} @click=${()=>{this.review(t.source.origin.url)}}>${this.t("pack_review_update")}</button>`:d}`:e.latest_release!=null?a`<span class="fp3d-sub">${this.t("pack_latest",{release:e.latest_release})}</span>`:d}
      ${this.isEditor?a`<span class="fp3d-pack-tools">
            <label class="fp3d-check">
              <input type="checkbox" .checked=${e.pinned} @change=${i=>{let r=i.target.checked;this.updatesCall(p=>_t(p,t.id,r))}} />
              ${this.t("pack_pin")}
            </label>
            ${e.previous_release!=null?a`<button
                  class="fp3d-btn"
                  @click=${async()=>{await this.ask(this.t("pack_rollback_confirm",{name:s,release:e.previous_release}),this.t("ask_ok"))&&this.updatesCall(i=>xt(i,t.id),!0)}}
                >
                  ${this.t("pack_rollback",{release:e.previous_release})}
                </button>`:d}
          </span>`:d}`}askConfirm=(t,e)=>this.ask(this.t(`pack_confirm_${t}`,{detail:e}),this.t("ask_ok"));ask(t,e,s=!1){return Mt(t,{ok:e,cancel:this.t("cancel"),danger:s})}get isEditor(){return this.canEdit??this.hass?.user?.is_admin??!1}t(t,e){return q(this.hass,t,e)}render(){return a`<div class="fp3d-ext">
      <header class="fp3d-ext-head">
        <h2>${this.t("ext_title")}</h2>
        <p class="fp3d-sub">${this.t("ext_intro")}</p>
        <div class="fp3d-ext-actions">
          <a class="fp3d-btn" href=${Tt} target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
        </div>
      </header>
      ${this.renderFun()} ${this.renderModules()} ${this.renderItems()} ${this.renderUpdates()} ${this.renderPacks()} ${this.renderLanguages()}
    </div>`}editBuilding(t){if(!this.building)return;let e=structuredClone(this.building);t(e),this.dispatchEvent(new CustomEvent("building-edit",{detail:e,bubbles:!0,composed:!0}))}renderFun(){let t=ct.filter(o=>dt(o));if(!t.length)return d;let e=this.building?.settings.pets??null,s=e?.list??[],i=e?.on!==!1,r=(this.building?.floors??[]).filter(o=>o.rooms.length).sort((o,c)=>o.elevation-c.elevation),p=o=>this.editBuilding(c=>{let l={on:c.settings.pets?.on!==!1,list:[...c.settings.pets?.list??[]]};o(l),c.settings.pets=l}),h=(o,c)=>p(l=>l.list=l.list.map(n=>n.id===o?{...n,...c}:n));return a`<section class="fp3d-ext-card">
      <h3>🎈 ${this.t("fun_title")}</h3>
      <p class="fp3d-sub">${this.t("fun_intro")}</p>
      ${this.isEditor&&this.building?this.funSwitch(this.building.settings.easter_eggs!==!1,this.t("st_easter_eggs"),o=>this.editBuilding(c=>c.settings.easter_eggs=o)):d}
      ${t.map(o=>o==="fun_seasons"?this.renderSeasons():a`<div class="fp3d-ext-feature fp3d-ext-on">
              <b>${this.t("fun_name_pets")}</b>
              <span class="fp3d-sub">${this.t("fun_feature_pets")}</span>
              ${this.isEditor&&this.building?a`${this.funSwitch(i,this.t("pets_show"),c=>p(l=>l.on=c))}
                    ${s.map(c=>a`<div class="fp3d-pet-row">
                        <select
                          aria-label=${this.t("pet_kind")}
                          @change=${l=>{let n=l.target.value,g=P[n];h(c.id,{kind:n,fur:g.includes(c.fur)?c.fur:g[0],breed:n==="dog"?c.breed??"labrador":null})}}
                        >
                          ${["cat","dog","rabbit"].map(l=>a`<option value=${l} ?selected=${c.kind===l}>${this.t(`pet_kind_${l}`)}</option>`)}
                        </select>
                        ${c.kind==="dog"?a`<select aria-label=${this.t("pet_breed")} @change=${l=>h(c.id,{breed:l.target.value})}>
                              ${pt.map(l=>a`<option value=${l} ?selected=${(c.breed??"labrador")===l}>${this.t(`pet_breed_${l}`)}</option>`)}
                            </select>`:d}
                        <input type="text" maxlength="30" .value=${c.name} placeholder=${this.t("pet_name")} aria-label=${this.t("pet_name")} @change=${l=>h(c.id,{name:l.target.value.trim()})} />
                        <select aria-label=${this.t("pet_fur")} @change=${l=>h(c.id,{fur:l.target.value})}>
                          ${P[c.kind].map(l=>a`<option value=${l} ?selected=${c.fur===l}>${this.t(`pet_fur_${l}`)}</option>`)}
                        </select>
                        <select title=${this.t("pet_eyes")} aria-label=${this.t("pet_eyes")} @change=${l=>h(c.id,{eyes:l.target.value})}>
                          ${ot.map(l=>a`<option value=${l} ?selected=${(c.eyes??"dark")===l}>${this.t(`pet_eyes_${l}`)}</option>`)}
                        </select>
                        ${r.length>1?a`<select title=${this.t("pet_floor")} aria-label=${this.t("pet_floor")} @change=${l=>h(c.id,{floor_id:l.target.value||null})}>
                              ${r.map((l,n)=>a`<option value=${n===0?"":l.id} ?selected=${(c.floor_id??r[0].id)===l.id}>🏠 ${l.name}</option>`)}
                            </select>`:d}
                        <select
                          title=${this.t("pet_mode")}
                          aria-label=${this.t("pet_mode")}
                          @change=${l=>{let n=l.target.value==="static",g=this.building;p(u=>u.list=u.list.map(b=>b.id===c.id?Rt(b,n,Ct(g,b)):b))}}
                        >
                          <option value="roaming" ?selected=${!I(c)}>${this.t("pet_roaming")}</option>
                          <option value="static" ?selected=${I(c)}>${this.t("pet_static")}</option>
                        </select>
                        ${I(c)?a`<select title=${this.t("pet_pose")} aria-label=${this.t("pet_pose")} @change=${l=>h(c.id,{pose:l.target.value})}>
                                ${lt.map(l=>a`<option value=${l} ?selected=${(c.pose??"sit")===l}>${this.t(`pet_pose_${l}`)}</option>`)}
                              </select>
                              <select
                                title=${this.t("pet_turn")}
                                aria-label=${this.t("pet_turn")}
                                @change=${l=>{let n=l.target.value;h(c.id,{rotation:n===""?null:Number(n)})}}
                              >
                                <option value="" ?selected=${c.rotation==null}>${this.t("pet_turn_auto")}</option>
                                ${[0,45,90,135,180,225,270,315].map(l=>a`<option value=${l} ?selected=${c.rotation===l}>${l}°</option>`)}
                              </select>
                              <span class="fp3d-sub">${this.t("pet_static_hint")}</span>`:d}
                        <button class="fp3d-btn" title=${this.t("delete")} @click=${()=>p(l=>l.list=l.list.filter(n=>n.id!==c.id))}>✕</button>
                      </div>`)}
                    ${s.length<8?a`<button class="fp3d-btn" @click=${()=>p(c=>c.list.push({id:`pet_${Date.now().toString(36)}`,kind:"cat",name:"",fur:P.cat[c.list.length%P.cat.length]}))}>+ ${this.t("pet_add")}</button>`:d}`:d}
            </div>`)}
    </section>`}funSwitch(t,e,s,i=!1){return a`<div class="fp3d-ext-season"><span>${e}</span><button type="button" class="fp3d-ext-sw" role="switch" aria-checked=${t} aria-label=${e} ?disabled=${i} @click=${()=>s(!t)}></button></div>`}renderSeasons(){let t=this.seasonDatesPart;return t||import("./home-3d-editor-season-dates-TWW47JSM.js").then(e=>(this.seasonDatesPart=e,this.requestUpdate())),t?.seasonsCard({building:this.building,editor:this.isEditor&&!!this.building,lang:this.hass?.language,open:this._open,t:e=>this.t(e),toggle:e=>this.toggleOpen(e),funSwitch:(e,s,i,r)=>this.funSwitch(e,s,i,r),edit:e=>this.editBuilding(e)})}renderModules(){let t=this.hass,e=t&&this.building?ut():[];return!t||!e.length?d:e.map(s=>{let i=nt().find(o=>o.id===s),r=i?S(i,t.language??"en").replace(/^(Modul|Module):\s*/i,""):s,p=`mod:${s}`,h=this._open.has(p);return a`<section class="fp3d-ext-card fp3d-ext-module" id=${`ext-${s}`}>
        <h3>${r}</h3>
        <button class="fp3d-link fp3d-ext-setting" aria-expanded=${h} @click=${()=>this.toggleOpen(p)}>${this.t("ext_module_settings")} ${h?"\u25B4":"\u25BE"}</button>
        ${h?a`<fp3d-editor
              class="fp3d-ext-fields"
              .topic=${`module:${s}`}
              .hass=${t}
              .building=${this.building}
              .canEdit=${this.canEdit}
              .packs=${this.packs}
              .narrow=${!0}
              @building-changed=${o=>{o.stopPropagation(),this.dispatchEvent(new CustomEvent("building-edit",{detail:o.detail.building,bubbles:!0,composed:!0}))}}
            ></fp3d-editor>`:d}
      </section>`})}renderItems(){if(!this.isEditor)return d;let t=tt(this.packs).length;return a`<section class="fp3d-ext-card">
      <h3>${this.t("own_items_title")}</h3>
      <p class="fp3d-sub">${this.t("own_items_hint",{n:t})}</p>
      <button class="fp3d-btn fp3d-primary fp3d-pack-import" @click=${()=>this.openItemEditor()}>${this.t("own_items_open")}</button>
      ${this._itemsError?a`<p class="fp3d-sub fp3d-pack-error">${this._itemsError}</p>`:d}
    </section>`}async openItemEditor(){let t=this.hass;if(t)try{(await de()).openItemEditor({hass:t,hassSource:()=>this.hass,t:(s,i)=>q(this.hass,s,i),items:tt(this.packs),kinds:L,rooms:H,roles:Qt,changed:()=>this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}))}),this._itemsError=null}catch(e){this._itemsError=String(e?.message??e)}}renderPacks(){let t=(this.packs??[]).filter(s=>!s.custom&&s.kind!=="language"),e=t.reduce((s,i)=>s+i.items.length,0);return a`<section class="fp3d-ext-card">
      <h3>${this.t("packs")}</h3>
      ${this.summaryBar("packs",[{n:t.length,label:this.t("ext_sum_packs",{items:e}),tone:"ok"}])}
      ${(this._open.has("packs")?t:[]).map(s=>a`<div class="fp3d-pack">
          <div>
            <b>${S(s,this.hass?.language??"de")}</b>
            <span class="fp3d-sub">${this.t("pack_by",{publisher:s.publisher,n:s.items.length})}</span>
            ${s.licence||s.release&&s.release>1?a`<span class="fp3d-sub">${[s.licence?this.t("pack_licence",{licence:s.licence}):"",s.release&&s.release>1?`v${s.release}`:""].filter(Boolean).join(" \xB7 ")}</span>`:d}
            ${this.renderOrigin(s)} ${this.renderPackUpdate(s)}
          </div>
          ${s.bundled?a`<span class="fp3d-sub">${this.t("pack_bundled")}</span>`:a`<button class="fp3d-btn fp3d-danger" @click=${()=>this.deletePack(s)}>${this.t("pack_remove")}</button>`}
        </div>`)}

      <label class="fp3d-btn fp3d-pack-import">
        ${this.t("pack_import")}
        <input type="file" accept=".fp3dpack,.json,application/json" multiple hidden @change=${s=>this.importPackFile(s)} />
      </label>
      <label class="fp3d-btn fp3d-pack-import">
        ${this.t("pack_import_folder")}
        <input type="file" webkitdirectory multiple hidden @change=${s=>this.importPackFolder(s)} />
      </label>
      ${this.isEditor?a`<form class="fp3d-pack-url" @submit=${s=>this.installFromUrl(s)}>
            <input
              type="url"
              inputmode="url"
              .value=${this._packUrl}
              placeholder="https://github.com/owner/repo/tree/main/publisher.pack"
              aria-label=${this.t("pack_install_url")}
              ?disabled=${this._installing}
              @input=${s=>this._packUrl=s.target.value}
            />
            <button class="fp3d-btn" type="submit" ?disabled=${this._installing||!this._packUrl.trim()}>
              ${this._installing?this.t("pack_installing"):this.t("pack_install_url")}
            </button>
          </form>`:d}
      ${this.renderPreview()}
      ${this._packMsg?a`<p class="fp3d-sub ${this._packMsg.ok?"fp3d-notice":"fp3d-pack-error"}">${this._packMsg.text}</p>`:d}
      <p class="fp3d-sub">${this.t("packs_hint")}</p>
    </section>`}renderLanguages(){let t=(this.packs??[]).filter(s=>s.kind==="language"),e=N(this.hass?.language);return a`<section class="fp3d-ext-card">
      <h3>${this.t("languages")}</h3>
      ${t.length?d:a`<p class="fp3d-sub">${this.t("lang_pack_none")}</p>`}
      ${t.map(s=>a`<div class="fp3d-pack">
          <div>
            <b lang=${s.language??d}>${s.name}</b>
            <span class="fp3d-sub">${this.t("lang_pack_texts",{language:s.language??"?",n:s.texts??0,publisher:s.publisher})}${s.language===e?` \xB7 ${this.t("lang_pack_shown")}`:""}</span>
            ${s.licence||s.release&&s.release>1?a`<span class="fp3d-sub">${[s.licence?this.t("pack_licence",{licence:s.licence}):"",s.release&&s.release>1?`v${s.release}`:""].filter(Boolean).join(" \xB7 ")}</span>`:d}
            ${this.renderOrigin(s)} ${this.renderPackUpdate(s)}
          </div>
          ${s.bundled?a`<span class="fp3d-sub">${this.t("pack_bundled")}</span>`:this.isEditor?a`<button class="fp3d-btn fp3d-danger" @click=${()=>this.deletePack(s)}>${this.t("pack_remove")}</button>`:d}
        </div>`)}
      <p class="fp3d-sub">${this.t("languages_hint")}</p>
    </section>`}importedText(t){return t.kind==="language"?this.t("lang_pack_imported",{name:t.name,language:t.language??"?",n:t.texts??0}):this.t("pack_imported",{name:t.name,publisher:t.publisher,n:t.items})}async languageChanged(t){this.hass&&t&&t===N(this.hass.language)&&await ht(this.hass.language,this.hass,!0)}renderOrigin(t){let e=at(t);return e?a`<span class="fp3d-sub">${this.t("pack_from")} <a href=${e.url} target="_blank" rel="noreferrer noopener">${e.label}</a></span>`:d}async installFromUrl(t){t.preventDefault();let e=this._packUrl.trim();!e||!this.hass||await this.review(e)}async review(t){if(!(!this.hass||this._installing)){this._installing=!0,this._packMsg=null,this._preview=null;try{this._preview=await kt(this.hass,t)}catch(e){e?.code==="unknown_command"?(this._installing=!1,await this.install(t)):this._packMsg={ok:!1,text:this.packError(e)}}finally{this._installing=!1}}}async install(t,e){if(this.hass){this._installing=!0;try{let s=this.hass,i=await U(r=>bt(s,t,r,e),this.askConfirm);if(!i)return;this._preview=null,this._packUrl="",this._packMsg={ok:!0,text:this.importedText(i)},await this.languageChanged(i.language),this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}))}catch(s){this._preview=null,this._packMsg={ok:!1,text:this.packError(s)}}finally{this._installing=!1}}}renderPreview(){let t=this._preview;if(!t)return d;let e=this.hass?.language??"de",s=t.installed!==null,i=t.changes,r=t.pack.kind==="language",p=(h,o)=>o.length?a`<li><b>${this.t(h,{n:o.length})}</b>: ${o.slice(0,12).map(c=>Bt(c,e)).join(", ")}${o.length>12?" \u2026":""}</li>`:d;return a`<div class="fp3d-preview" role="group" aria-label=${this.t("pp_title")}>
      <b>${s?this.t("pp_update",{name:t.pack.name,from:t.installed.release,to:t.pack.release}):this.t("pp_install",{name:t.pack.name,release:t.pack.release})}</b>
      ${t.pack.note?a`<span class="fp3d-sub fp3d-upd-note">${t.pack.note}</span>`:d}
      <span class="fp3d-sub">${r?this.t("lang_pack_texts",{language:t.pack.language??"?",n:t.pack.texts??0,publisher:t.pack.publisher}):this.t("pack_by",{publisher:t.pack.publisher,n:t.pack.items})} · ${this.t("pack_licence",{licence:t.pack.licence})}</span>
      <span class="fp3d-sub">
        ${this.t("pp_from")}
        <a href=${t.origin.url} target="_blank" rel="noreferrer noopener">${t.origin.owner}/${t.origin.repo}${t.origin.folder?`/${t.origin.folder}`:""} @ ${t.origin.ref}</a>
        · ${this.t("pp_commit")} <code>${A(t.origin.commit)}</code>${t.installed?.commit?a` (${this.t("pp_now")} <code>${A(t.installed.commit)}</code>)`:d}
      </span>
      ${t.warnings.map(h=>a`<span class="fp3d-sub fp3d-pack-error">${this.t(`pp_warn_${h}`)}</span>`)}
      ${Gt(t)?a`<span class="fp3d-sub">${s?this.t(r?"pp_nothing_texts":"pp_nothing"):this.t("pp_empty")}</span>`:a`<ul>
            ${p("pp_added",i.added)} ${p("pp_changed",i.changed)} ${p("pp_removed",i.removed)}
          </ul>
          <span class="fp3d-sub">${this.t(r?"pp_unchanged_texts":"pp_unchanged",{n:i.unchanged})}</span>`}
      ${s&&!r&&(i.changed.length||i.removed.length)?a`<span class="fp3d-sub">${this.t("pp_placed_hint")}</span>`:d}
      <span class="fp3d-pack-tools">
        <button class="fp3d-btn fp3d-primary" ?disabled=${this._installing} @click=${()=>{this.install(t.origin.url,t.origin.commit)}}>
          ${s?this.t("pp_do_update"):this.t("pp_do_install")}
        </button>
        <button class="fp3d-btn" ?disabled=${this._installing} @click=${()=>this._preview=null}>${this.t("cancel")}</button>
      </span>
    </div>`}async importPackFile(t){let e=t.target,s=[...e.files??[]];if(e.value="",!s.length||!this.hass)return;let i=[],r=[];for(let h of s)try{let o=this.hass,c=await h.text(),l=await U(n=>gt(o,c,n),this.askConfirm);if(!l)continue;i.push(this.importedText(l))}catch(o){r.push(`${h.name}: ${this.packError(o)}`)}i.length&&this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let p=s.length>1?[this.t("packs_imported_n",{n:i.length,total:s.length})]:[];this._packMsg={ok:r.length===0,text:[...p,...i,...r].join(" \xB7 ")}}async importPackFolder(t){let e=t.target,s=[...e.files??[]];if(e.value="",!s.length||!this.hass)return;let i=new Map(s.map(c=>[c.webkitRelativePath||c.name,c])),r=he([...i.keys()]);if(!r.length){this._packMsg={ok:!1,text:this.t("pack_error_no_pack")};return}let p=[],h=[];for(let c of r){let l=c.root||s[0].webkitRelativePath.split("/")[0]||"pack";if(c.refused.length){h.push(`${l}: ${this.t("pack_error_not_data",{detail:c.refused.join(", ")})}`);continue}try{let n={};for(let[b,k]of c.files)n[b]=await i.get(k).text();let g=this.hass,u=await U(b=>mt(g,n,b),this.askConfirm);if(!u)continue;p.push(this.importedText(u)),await this.languageChanged(u.language)}catch(n){h.push(`${l}: ${this.packError(n)}`)}}p.length&&this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let o=r.length>1?[this.t("packs_imported_n",{n:p.length,total:r.length})]:[];this._packMsg={ok:h.length===0,text:[...o,...p,...h].join(" \xB7 ")}}packError(t){let{code:e,message:s}=t??{},i=`pack_error_${e}`,r=this.t(i,{detail:s??String(t)});return r===i?this.t("pack_error_other",{detail:s??String(t)}):r}async deletePack(t){if(!(!this.hass||!await this.ask(this.t("pack_remove_confirm",{name:S(t,this.hass?.language??"de")}),this.t("delete"),!0))){try{await yt(this.hass,t.id)}catch(e){this._packMsg={ok:!1,text:this.t("pack_remove_failed",{error:ft(e)})};return}this._packMsg=null,await this.languageChanged(t.language),this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}))}}static styles=[x,R,$`
      .fp3d-sum {
        display: grid;
        gap: 6px;
        width: 100%;
        margin: 4px 0 8px;
        padding: 10px 12px;
        border-radius: 12px;
        border: 1px solid var(--fp3d-line, rgba(120, 190, 255, 0.22));
        background: rgba(4, 8, 18, 0.35);
        color: inherit;
        font: inherit;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-sum-bar {
        display: flex;
        gap: 2px;
        height: 8px;
        border-radius: 999px;
        overflow: hidden;
        background: rgba(120, 190, 255, 0.12);
      }
      .fp3d-sum-bar i {
        display: block;
      }
      .fp3d-sum-ok {
        background: #34d399;
      }
      .fp3d-sum-update {
        background: #fbbf24;
      }
      .fp3d-sum-missing {
        background: #60a5fa;
      }
      .fp3d-sum-text {
        display: flex;
        flex-wrap: wrap;
        gap: 4px 14px;
        font-size: 0.92em;
      }
      .fp3d-sum-ok-text {
        color: #34d399;
      }
      .fp3d-sum-update-text {
        color: #fbbf24;
      }
      .fp3d-sum-missing-text {
        color: #60a5fa;
      }
      .fp3d-preview {
        display: grid;
        gap: 6px;
        padding: 12px;
        border-radius: 12px;
        border: 1px solid var(--fp3d-line, rgba(120, 190, 255, 0.22));
        background: rgba(4, 8, 18, 0.35);
      }
      .fp3d-preview ul {
        margin: 0;
        padding-left: 18px;
      }
      .fp3d-preview code {
        font-family: ui-monospace, monospace;
      }
      .fp3d-sum-caret {
        color: var(--fp3d-muted, #8ea3c4);
        font-size: 0.85em;
      }
      :host {
        display: block;
        overflow: auto;
      }
      .fp3d-ext {
        max-width: 920px;
        margin: 0 auto;
        padding: 20px 16px 40px;
        display: grid;
        gap: 16px;
      }
      .fp3d-ext-head {
        display: grid;
        gap: 8px;
        justify-items: start;
      }
      .fp3d-ext-head a {
        text-decoration: none;
      }
      .fp3d-ext-actions,
      .fp3d-ext-links {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        align-items: center;
      }
      .fp3d-ext-head h2 {
        margin: 0;
        font-size: 22px;
      }
      .fp3d-ext-card {
        padding: 14px 16px;
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: var(--fp3d-chrome);
      }
      /* headings and body copy in light, neutral tones: blue on navy read poorly (#88) */
      .fp3d-ext-card h3 {
        margin: 0 0 8px;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--fp3d-text);
      }
      .fp3d-ext-fields {
        display: block;
        height: auto;
      }
      .fp3d-ext-dates {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 4px 12px;
        margin: -6px 0 6px;
      }
      .fp3d-ext-dates-edit {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px 16px;
        flex-basis: 100%;
      }
      .fp3d-ext-dates-field {
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .fp3d-ext-dates-field input {
        width: 4.5em;
      }
      .fp3d-ext-sub {
        margin: 0 0 8px 12px;
        padding-left: 10px;
        border-left: 2px solid var(--fp3d-line);
      }
      .fp3d-ext-season {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        min-height: 44px;
      }
      .fp3d-ext-sw {
        position: relative;
        flex: none;
        width: 46px;
        height: 28px;
        padding: 0;
        border: 0;
        border-radius: 999px;
        background: var(--fp3d-line);
        cursor: pointer;
      }
      .fp3d-ext-sw::after {
        content: "";
        position: absolute;
        top: 4px;
        left: 4px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--fp3d-muted);
        transition: transform 0.15s;
      }
      .fp3d-ext-sw[aria-checked="true"] {
        background: var(--fp3d-primary);
      }
      .fp3d-ext-sw[aria-checked="true"]::after {
        transform: translateX(18px);
        background: var(--fp3d-primary-text);
      }
      .fp3d-ext-sw:disabled {
        opacity: 0.4;
        cursor: default;
      }
      .fp3d-ext-setting {
        justify-self: start;
        min-height: 36px;
        padding: 0;
        border: 0;
        background: none;
        color: var(--fp3d-accent);
        font: inherit;
        cursor: pointer;
        text-align: left;
      }
      .fp3d-pet-row {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        align-items: center;
        margin-top: 6px;
      }
      .fp3d-pet-row input[type="text"],
      .fp3d-pet-row select {
        padding: 6px 10px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line, rgba(120, 190, 255, 0.25));
        background: rgba(4, 8, 18, 0.6);
        color: inherit;
        font: inherit;
      }
      .fp3d-pet-row input[type="text"] {
        flex: 1;
        min-width: 110px;
      }
      .fp3d-ext-feature {
        display: grid;
        gap: 6px;
        align-content: start;
        padding: 12px;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
      }
      /* an active feature is marked by its tick and "active", not a cyan frame on every card (#88) */
      .fp3d-ext-on {
        border-color: var(--fp3d-line);
      }
      .fp3d-ext-state {
        color: var(--fp3d-accent);
        font-weight: 600;
        font-size: 13px;
      }
      .fp3d-ext-link {
        color: var(--fp3d-accent);
        font-weight: 600;
        font-size: 13px;
      }
      .fp3d-sub {
        color: var(--fp3d-muted);
        font-size: 13px;
        line-height: 1.45;
      }
      .fp3d-notice {
        color: var(--fp3d-accent);
      }
      .fp3d-pack {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 8px 0;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-pack div {
        display: grid;
        gap: 2px;
      }
      .fp3d-pack-tools,
      .fp3d-upd-when {
        display: flex;
        flex-wrap: wrap;
        gap: 8px 14px;
        align-items: center;
      }
      .fp3d-upd-when {
        margin: 8px 0;
      }
      .fp3d-upd-when label {
        display: flex;
        gap: 6px;
        align-items: center;
      }
      .fp3d-upd-when select,
      .fp3d-upd-when input {
        padding: 6px 10px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line, rgba(120, 190, 255, 0.25));
        background: rgba(4, 8, 18, 0.6);
        color: inherit;
        font: inherit;
      }
      .fp3d-pack-url {
        display: flex;
        gap: 8px;
        margin-top: 10px;
      }
      .fp3d-pack-url input {
        flex: 1;
        min-width: 0;
      }
      .fp3d-pack-import {
        display: block;
        margin-top: 10px;
        text-align: center;
        cursor: pointer;
      }
      .fp3d-pack-error {
        color: var(--fp3d-danger);
      }
    `]};v("fp3d-extensions",st);
