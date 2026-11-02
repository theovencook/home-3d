import{a as c,c as u,d as i,g as n,i as m}from"./home-3d-chunk-6SSTD3ZO.js";import"./home-3d-chunk-P2P4Y22L.js";function h(l,t){let e=t.trim().toLocaleLowerCase();return e?l.map(o=>({...o,rooms:o.rooms.filter(s=>s.name.toLocaleLowerCase().includes(e))})).filter(o=>o.rooms.length):[...l]}var p=class extends m{static properties={groups:{attribute:!1},selected:{attribute:!1},t:{attribute:!1},editFloor:{attribute:!1},_query:{state:!0},_cursor:{state:!0}};constructor(){super(),this.groups=[],this.selected=null,this.t=t=>t,this.editFloor=null,this._query="",this._cursor=0}listed(){return h(this.groups,this._query).flatMap(t=>t.rooms.map(e=>({group:t,room:e})))}fire(t,e=null){this.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0}))}firstUpdated(){let t=this.listed().findIndex(e=>e.room.id===this.selected);t>0&&(this._cursor=t),this.renderRoot.querySelector("input")?.focus({preventScroll:!0})}updated(t){t.has("_cursor")&&this.renderRoot.querySelector(".cursor")?.scrollIntoView?.({block:"nearest"})}onKey(t){let e=this.listed(),o=e.length-1,s=t.key==="ArrowDown"?Math.min(o,this._cursor+1):t.key==="ArrowUp"?Math.max(0,this._cursor-1):t.key==="Home"&&t.ctrlKey?0:t.key==="End"&&t.ctrlKey?o:null;if(s!==null)t.preventDefault(),this._cursor=Math.max(0,s);else if(t.key==="Enter"){t.preventDefault();let r=e[this._cursor];r&&this.fire("room-pick",{floorId:r.group.id,roomId:r.room.id})}else t.key==="Escape"&&(t.preventDefault(),t.stopPropagation(),this.fire("picker-close",{focus:!0}))}render(){let t=h(this.groups,this._query),e=this.groups.length>1,o=-1,s=this.listed().length?`room-${this._cursor}`:n;return i`<div class="veil" @click=${()=>this.fire("picker-close")}></div>
      <div class="box" role="dialog" aria-label=${this.t("rooms")}>
        <input
          type="search"
          role="combobox"
          aria-expanded="true"
          aria-controls="rooms-list"
          aria-autocomplete="list"
          aria-activedescendant=${s}
          aria-label=${this.t("rooms_find")}
          placeholder=${this.t("rooms_find")}
          .value=${this._query}
          @input=${r=>(this._query=r.target.value,this._cursor=0)}
          @keydown=${r=>this.onKey(r)}
        />
        <div id="rooms-list" class="list" role="listbox" aria-label=${this.t("rooms")}>
          ${t.map(r=>i`<div role="group" aria-label=${r.name}>
              ${e?i`<div class="mh" aria-hidden="true">${r.name}</div>`:n}
              ${r.rooms.map(a=>{o++;let d=o;return i`<div
                  id="room-${d}"
                  role="option"
                  aria-selected=${a.id===this.selected}
                  class="mi ${d===this._cursor?"cursor":""} ${a.id===this.selected?"on":""}"
                  @mouseenter=${()=>this._cursor=d}
                  @click=${()=>this.fire("room-pick",{floorId:r.id,roomId:a.id})}
                >
                  ${a.name}
                </div>`})}
            </div>`)}
          ${t.length?n:i`<p class="none" role="status">${this.t("rooms_none",{q:this._query.trim()})}</p>`}
        </div>
        ${this.editFloor?i`<button class="edit" @click=${()=>this.fire("edit-floor",{floorId:this.editFloor})}>${this.t("edit_floor")} ›</button>`:n}
      </div>`}static styles=u`
    :host {
      position: absolute;
      top: calc(100% + 6px);
      left: 0;
      z-index: 40;
    }
    .veil {
      position: fixed;
      inset: 0;
    }
    .box {
      position: relative;
      display: grid;
      gap: 4px;
      width: min(280px, calc(100vw - 24px));
      padding: 6px;
      border-radius: var(--fp3d-radius-card, 8px);
      border: 1px solid var(--fp3d-line, rgba(127, 127, 127, 0.4));
      background: var(--fp3d-chrome-solid, #131c31);
      color: var(--fp3d-text, inherit);
      box-shadow: 0 18px 40px rgba(0, 0, 0, 0.55);
      font-size: 13.5px;
    }
    input {
      font: inherit;
      color: inherit;
      min-height: 36px;
      padding: 0 10px;
      border-radius: var(--fp3d-radius-control, 6px);
      border: 1px solid var(--fp3d-line, rgba(127, 127, 127, 0.4));
      background: transparent;
    }
    input:focus-visible,
    .edit:focus-visible {
      outline: 2px solid var(--fp3d-accent, #48cdeb);
      outline-offset: 1px;
    }
    .list {
      max-height: min(50vh, 360px);
      overflow-y: auto;
    }
    .mh {
      padding: 8px 10px 4px;
      font-size: 11.5px;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--fp3d-muted, #94a3b8);
    }
    .mi {
      display: flex;
      align-items: center;
      min-height: 36px;
      padding: 0 10px;
      border-radius: var(--fp3d-radius-control, 6px);
      cursor: pointer;
    }
    .mi.cursor {
      background: color-mix(in srgb, var(--fp3d-accent, #48cdeb) 12%, transparent);
    }
    .mi.on {
      color: var(--fp3d-accent, #48cdeb);
      font-weight: 700;
    }
    .mi.on::after {
      content: "✓";
      margin-left: auto;
    }
    .none {
      margin: 6px 10px;
      color: var(--fp3d-muted, #94a3b8);
    }
    .edit {
      font: inherit;
      text-align: left;
      color: var(--fp3d-accent, #48cdeb);
      background: none;
      border: none;
      border-top: 1px solid var(--fp3d-line, rgba(127, 127, 127, 0.4));
      min-height: 36px;
      padding: 0 10px;
      cursor: pointer;
    }
    @media (pointer: coarse) {
      .mi,
      input,
      .edit {
        min-height: 44px;
      }
    }
  `};c("fp3d-rooms-picker",p);export{p as Fp3dRoomsPicker,h as filterRooms};
