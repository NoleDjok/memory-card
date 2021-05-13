"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */Object.defineProperty(exports,"__esModule",{value:!0});var Linq_1=require("../Linq/Linq"),SlotItem=function(){};exports.SlotItem=SlotItem;var SlotList=function(){function t(){this.items=new Linq_1.List}return t.prototype.get=function(t){return this[t]},t.prototype.initialize=function(i,o){var s=new Linq_1.List(o.getSlots());if(i){var t=function(t){var e=i[t],n=s.FirstOrDefault(function(t){return t.name==e.slotName});if(n){var r=new SlotItem;r.slot=n,r.name=t,a.items.Add(r),a[t]=n}else console.error(a.constructor.name+": error can't find slot '"+e.slotName+"' in armature '"+o.name+"'")},a=this;for(var e in i)t(e)}},t}();exports.SlotList=SlotList;