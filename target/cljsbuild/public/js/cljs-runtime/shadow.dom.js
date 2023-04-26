goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_74480 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_74480(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_74481 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_74481(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__74166 = coll;
var G__74167 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__74166,G__74167) : shadow.dom.lazy_native_coll_seq.call(null,G__74166,G__74167));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__74174 = arguments.length;
switch (G__74174) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__74176 = arguments.length;
switch (G__74176) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__74182 = arguments.length;
switch (G__74182) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__74191 = arguments.length;
switch (G__74191) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__74193 = arguments.length;
switch (G__74193) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__74199 = arguments.length;
switch (G__74199) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e74200){if((e74200 instanceof Object)){
var e = e74200;
return console.log("didnt support attachEvent",el,e);
} else {
throw e74200;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__74205 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__74206 = null;
var count__74207 = (0);
var i__74208 = (0);
while(true){
if((i__74208 < count__74207)){
var el = chunk__74206.cljs$core$IIndexed$_nth$arity$2(null,i__74208);
var handler_74488__$1 = ((function (seq__74205,chunk__74206,count__74207,i__74208,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__74205,chunk__74206,count__74207,i__74208,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_74488__$1);


var G__74489 = seq__74205;
var G__74490 = chunk__74206;
var G__74491 = count__74207;
var G__74492 = (i__74208 + (1));
seq__74205 = G__74489;
chunk__74206 = G__74490;
count__74207 = G__74491;
i__74208 = G__74492;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__74205);
if(temp__5804__auto__){
var seq__74205__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74205__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__74205__$1);
var G__74493 = cljs.core.chunk_rest(seq__74205__$1);
var G__74494 = c__5568__auto__;
var G__74495 = cljs.core.count(c__5568__auto__);
var G__74496 = (0);
seq__74205 = G__74493;
chunk__74206 = G__74494;
count__74207 = G__74495;
i__74208 = G__74496;
continue;
} else {
var el = cljs.core.first(seq__74205__$1);
var handler_74497__$1 = ((function (seq__74205,chunk__74206,count__74207,i__74208,el,seq__74205__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__74205,chunk__74206,count__74207,i__74208,el,seq__74205__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_74497__$1);


var G__74498 = cljs.core.next(seq__74205__$1);
var G__74499 = null;
var G__74500 = (0);
var G__74501 = (0);
seq__74205 = G__74498;
chunk__74206 = G__74499;
count__74207 = G__74500;
i__74208 = G__74501;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__74211 = arguments.length;
switch (G__74211) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__74212 = cljs.core.seq(events);
var chunk__74213 = null;
var count__74214 = (0);
var i__74215 = (0);
while(true){
if((i__74215 < count__74214)){
var vec__74222 = chunk__74213.cljs$core$IIndexed$_nth$arity$2(null,i__74215);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74222,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74222,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__74503 = seq__74212;
var G__74504 = chunk__74213;
var G__74505 = count__74214;
var G__74506 = (i__74215 + (1));
seq__74212 = G__74503;
chunk__74213 = G__74504;
count__74214 = G__74505;
i__74215 = G__74506;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__74212);
if(temp__5804__auto__){
var seq__74212__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74212__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__74212__$1);
var G__74507 = cljs.core.chunk_rest(seq__74212__$1);
var G__74508 = c__5568__auto__;
var G__74509 = cljs.core.count(c__5568__auto__);
var G__74510 = (0);
seq__74212 = G__74507;
chunk__74213 = G__74508;
count__74214 = G__74509;
i__74215 = G__74510;
continue;
} else {
var vec__74225 = cljs.core.first(seq__74212__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74225,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74225,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__74511 = cljs.core.next(seq__74212__$1);
var G__74512 = null;
var G__74513 = (0);
var G__74514 = (0);
seq__74212 = G__74511;
chunk__74213 = G__74512;
count__74214 = G__74513;
i__74215 = G__74514;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__74228 = cljs.core.seq(styles);
var chunk__74229 = null;
var count__74230 = (0);
var i__74231 = (0);
while(true){
if((i__74231 < count__74230)){
var vec__74239 = chunk__74229.cljs$core$IIndexed$_nth$arity$2(null,i__74231);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74239,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74239,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__74515 = seq__74228;
var G__74516 = chunk__74229;
var G__74517 = count__74230;
var G__74518 = (i__74231 + (1));
seq__74228 = G__74515;
chunk__74229 = G__74516;
count__74230 = G__74517;
i__74231 = G__74518;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__74228);
if(temp__5804__auto__){
var seq__74228__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74228__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__74228__$1);
var G__74519 = cljs.core.chunk_rest(seq__74228__$1);
var G__74520 = c__5568__auto__;
var G__74521 = cljs.core.count(c__5568__auto__);
var G__74522 = (0);
seq__74228 = G__74519;
chunk__74229 = G__74520;
count__74230 = G__74521;
i__74231 = G__74522;
continue;
} else {
var vec__74243 = cljs.core.first(seq__74228__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74243,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74243,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__74523 = cljs.core.next(seq__74228__$1);
var G__74524 = null;
var G__74525 = (0);
var G__74526 = (0);
seq__74228 = G__74523;
chunk__74229 = G__74524;
count__74230 = G__74525;
i__74231 = G__74526;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__74246_74527 = key;
var G__74246_74528__$1 = (((G__74246_74527 instanceof cljs.core.Keyword))?G__74246_74527.fqn:null);
switch (G__74246_74528__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_74530 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_74530,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_74530,"aria-");
}
})())){
el.setAttribute(ks_74530,value);
} else {
(el[ks_74530] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__74282){
var map__74283 = p__74282;
var map__74283__$1 = cljs.core.__destructure_map(map__74283);
var props = map__74283__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74283__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__74284 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74284,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74284,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74284,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__74287 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__74287,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__74287;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__74289 = arguments.length;
switch (G__74289) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__74290){
var vec__74291 = p__74290;
var seq__74292 = cljs.core.seq(vec__74291);
var first__74293 = cljs.core.first(seq__74292);
var seq__74292__$1 = cljs.core.next(seq__74292);
var nn = first__74293;
var first__74293__$1 = cljs.core.first(seq__74292__$1);
var seq__74292__$2 = cljs.core.next(seq__74292__$1);
var np = first__74293__$1;
var nc = seq__74292__$2;
var node = vec__74291;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__74294 = nn;
var G__74295 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__74294,G__74295) : create_fn.call(null,G__74294,G__74295));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__74296 = nn;
var G__74297 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__74296,G__74297) : create_fn.call(null,G__74296,G__74297));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__74298 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74298,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74298,(1),null);
var seq__74301_74532 = cljs.core.seq(node_children);
var chunk__74302_74533 = null;
var count__74303_74534 = (0);
var i__74304_74535 = (0);
while(true){
if((i__74304_74535 < count__74303_74534)){
var child_struct_74536 = chunk__74302_74533.cljs$core$IIndexed$_nth$arity$2(null,i__74304_74535);
var children_74537 = shadow.dom.dom_node(child_struct_74536);
if(cljs.core.seq_QMARK_(children_74537)){
var seq__74317_74538 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_74537));
var chunk__74319_74539 = null;
var count__74320_74540 = (0);
var i__74321_74541 = (0);
while(true){
if((i__74321_74541 < count__74320_74540)){
var child_74542 = chunk__74319_74539.cljs$core$IIndexed$_nth$arity$2(null,i__74321_74541);
if(cljs.core.truth_(child_74542)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_74542);


var G__74543 = seq__74317_74538;
var G__74544 = chunk__74319_74539;
var G__74545 = count__74320_74540;
var G__74546 = (i__74321_74541 + (1));
seq__74317_74538 = G__74543;
chunk__74319_74539 = G__74544;
count__74320_74540 = G__74545;
i__74321_74541 = G__74546;
continue;
} else {
var G__74547 = seq__74317_74538;
var G__74548 = chunk__74319_74539;
var G__74549 = count__74320_74540;
var G__74550 = (i__74321_74541 + (1));
seq__74317_74538 = G__74547;
chunk__74319_74539 = G__74548;
count__74320_74540 = G__74549;
i__74321_74541 = G__74550;
continue;
}
} else {
var temp__5804__auto___74551 = cljs.core.seq(seq__74317_74538);
if(temp__5804__auto___74551){
var seq__74317_74552__$1 = temp__5804__auto___74551;
if(cljs.core.chunked_seq_QMARK_(seq__74317_74552__$1)){
var c__5568__auto___74553 = cljs.core.chunk_first(seq__74317_74552__$1);
var G__74554 = cljs.core.chunk_rest(seq__74317_74552__$1);
var G__74555 = c__5568__auto___74553;
var G__74556 = cljs.core.count(c__5568__auto___74553);
var G__74557 = (0);
seq__74317_74538 = G__74554;
chunk__74319_74539 = G__74555;
count__74320_74540 = G__74556;
i__74321_74541 = G__74557;
continue;
} else {
var child_74558 = cljs.core.first(seq__74317_74552__$1);
if(cljs.core.truth_(child_74558)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_74558);


var G__74559 = cljs.core.next(seq__74317_74552__$1);
var G__74560 = null;
var G__74561 = (0);
var G__74562 = (0);
seq__74317_74538 = G__74559;
chunk__74319_74539 = G__74560;
count__74320_74540 = G__74561;
i__74321_74541 = G__74562;
continue;
} else {
var G__74563 = cljs.core.next(seq__74317_74552__$1);
var G__74564 = null;
var G__74565 = (0);
var G__74566 = (0);
seq__74317_74538 = G__74563;
chunk__74319_74539 = G__74564;
count__74320_74540 = G__74565;
i__74321_74541 = G__74566;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_74537);
}


var G__74567 = seq__74301_74532;
var G__74568 = chunk__74302_74533;
var G__74569 = count__74303_74534;
var G__74570 = (i__74304_74535 + (1));
seq__74301_74532 = G__74567;
chunk__74302_74533 = G__74568;
count__74303_74534 = G__74569;
i__74304_74535 = G__74570;
continue;
} else {
var temp__5804__auto___74571 = cljs.core.seq(seq__74301_74532);
if(temp__5804__auto___74571){
var seq__74301_74572__$1 = temp__5804__auto___74571;
if(cljs.core.chunked_seq_QMARK_(seq__74301_74572__$1)){
var c__5568__auto___74573 = cljs.core.chunk_first(seq__74301_74572__$1);
var G__74574 = cljs.core.chunk_rest(seq__74301_74572__$1);
var G__74575 = c__5568__auto___74573;
var G__74576 = cljs.core.count(c__5568__auto___74573);
var G__74577 = (0);
seq__74301_74532 = G__74574;
chunk__74302_74533 = G__74575;
count__74303_74534 = G__74576;
i__74304_74535 = G__74577;
continue;
} else {
var child_struct_74578 = cljs.core.first(seq__74301_74572__$1);
var children_74579 = shadow.dom.dom_node(child_struct_74578);
if(cljs.core.seq_QMARK_(children_74579)){
var seq__74323_74580 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_74579));
var chunk__74325_74581 = null;
var count__74326_74582 = (0);
var i__74327_74583 = (0);
while(true){
if((i__74327_74583 < count__74326_74582)){
var child_74584 = chunk__74325_74581.cljs$core$IIndexed$_nth$arity$2(null,i__74327_74583);
if(cljs.core.truth_(child_74584)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_74584);


var G__74585 = seq__74323_74580;
var G__74586 = chunk__74325_74581;
var G__74587 = count__74326_74582;
var G__74588 = (i__74327_74583 + (1));
seq__74323_74580 = G__74585;
chunk__74325_74581 = G__74586;
count__74326_74582 = G__74587;
i__74327_74583 = G__74588;
continue;
} else {
var G__74589 = seq__74323_74580;
var G__74590 = chunk__74325_74581;
var G__74591 = count__74326_74582;
var G__74592 = (i__74327_74583 + (1));
seq__74323_74580 = G__74589;
chunk__74325_74581 = G__74590;
count__74326_74582 = G__74591;
i__74327_74583 = G__74592;
continue;
}
} else {
var temp__5804__auto___74593__$1 = cljs.core.seq(seq__74323_74580);
if(temp__5804__auto___74593__$1){
var seq__74323_74594__$1 = temp__5804__auto___74593__$1;
if(cljs.core.chunked_seq_QMARK_(seq__74323_74594__$1)){
var c__5568__auto___74595 = cljs.core.chunk_first(seq__74323_74594__$1);
var G__74596 = cljs.core.chunk_rest(seq__74323_74594__$1);
var G__74597 = c__5568__auto___74595;
var G__74598 = cljs.core.count(c__5568__auto___74595);
var G__74599 = (0);
seq__74323_74580 = G__74596;
chunk__74325_74581 = G__74597;
count__74326_74582 = G__74598;
i__74327_74583 = G__74599;
continue;
} else {
var child_74600 = cljs.core.first(seq__74323_74594__$1);
if(cljs.core.truth_(child_74600)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_74600);


var G__74601 = cljs.core.next(seq__74323_74594__$1);
var G__74602 = null;
var G__74603 = (0);
var G__74604 = (0);
seq__74323_74580 = G__74601;
chunk__74325_74581 = G__74602;
count__74326_74582 = G__74603;
i__74327_74583 = G__74604;
continue;
} else {
var G__74605 = cljs.core.next(seq__74323_74594__$1);
var G__74606 = null;
var G__74607 = (0);
var G__74608 = (0);
seq__74323_74580 = G__74605;
chunk__74325_74581 = G__74606;
count__74326_74582 = G__74607;
i__74327_74583 = G__74608;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_74579);
}


var G__74609 = cljs.core.next(seq__74301_74572__$1);
var G__74610 = null;
var G__74611 = (0);
var G__74612 = (0);
seq__74301_74532 = G__74609;
chunk__74302_74533 = G__74610;
count__74303_74534 = G__74611;
i__74304_74535 = G__74612;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__74330 = cljs.core.seq(node);
var chunk__74331 = null;
var count__74332 = (0);
var i__74333 = (0);
while(true){
if((i__74333 < count__74332)){
var n = chunk__74331.cljs$core$IIndexed$_nth$arity$2(null,i__74333);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__74613 = seq__74330;
var G__74614 = chunk__74331;
var G__74615 = count__74332;
var G__74616 = (i__74333 + (1));
seq__74330 = G__74613;
chunk__74331 = G__74614;
count__74332 = G__74615;
i__74333 = G__74616;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__74330);
if(temp__5804__auto__){
var seq__74330__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74330__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__74330__$1);
var G__74617 = cljs.core.chunk_rest(seq__74330__$1);
var G__74618 = c__5568__auto__;
var G__74619 = cljs.core.count(c__5568__auto__);
var G__74620 = (0);
seq__74330 = G__74617;
chunk__74331 = G__74618;
count__74332 = G__74619;
i__74333 = G__74620;
continue;
} else {
var n = cljs.core.first(seq__74330__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__74621 = cljs.core.next(seq__74330__$1);
var G__74622 = null;
var G__74623 = (0);
var G__74624 = (0);
seq__74330 = G__74621;
chunk__74331 = G__74622;
count__74332 = G__74623;
i__74333 = G__74624;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__74335 = arguments.length;
switch (G__74335) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__74337 = arguments.length;
switch (G__74337) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__74339 = arguments.length;
switch (G__74339) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___74628 = arguments.length;
var i__5770__auto___74629 = (0);
while(true){
if((i__5770__auto___74629 < len__5769__auto___74628)){
args__5775__auto__.push((arguments[i__5770__auto___74629]));

var G__74630 = (i__5770__auto___74629 + (1));
i__5770__auto___74629 = G__74630;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__74341_74631 = cljs.core.seq(nodes);
var chunk__74342_74632 = null;
var count__74343_74633 = (0);
var i__74344_74634 = (0);
while(true){
if((i__74344_74634 < count__74343_74633)){
var node_74635 = chunk__74342_74632.cljs$core$IIndexed$_nth$arity$2(null,i__74344_74634);
fragment.appendChild(shadow.dom._to_dom(node_74635));


var G__74636 = seq__74341_74631;
var G__74637 = chunk__74342_74632;
var G__74638 = count__74343_74633;
var G__74639 = (i__74344_74634 + (1));
seq__74341_74631 = G__74636;
chunk__74342_74632 = G__74637;
count__74343_74633 = G__74638;
i__74344_74634 = G__74639;
continue;
} else {
var temp__5804__auto___74640 = cljs.core.seq(seq__74341_74631);
if(temp__5804__auto___74640){
var seq__74341_74641__$1 = temp__5804__auto___74640;
if(cljs.core.chunked_seq_QMARK_(seq__74341_74641__$1)){
var c__5568__auto___74642 = cljs.core.chunk_first(seq__74341_74641__$1);
var G__74643 = cljs.core.chunk_rest(seq__74341_74641__$1);
var G__74644 = c__5568__auto___74642;
var G__74645 = cljs.core.count(c__5568__auto___74642);
var G__74646 = (0);
seq__74341_74631 = G__74643;
chunk__74342_74632 = G__74644;
count__74343_74633 = G__74645;
i__74344_74634 = G__74646;
continue;
} else {
var node_74647 = cljs.core.first(seq__74341_74641__$1);
fragment.appendChild(shadow.dom._to_dom(node_74647));


var G__74648 = cljs.core.next(seq__74341_74641__$1);
var G__74649 = null;
var G__74650 = (0);
var G__74651 = (0);
seq__74341_74631 = G__74648;
chunk__74342_74632 = G__74649;
count__74343_74633 = G__74650;
i__74344_74634 = G__74651;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq74340){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq74340));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__74345_74652 = cljs.core.seq(scripts);
var chunk__74346_74653 = null;
var count__74347_74654 = (0);
var i__74348_74655 = (0);
while(true){
if((i__74348_74655 < count__74347_74654)){
var vec__74355_74656 = chunk__74346_74653.cljs$core$IIndexed$_nth$arity$2(null,i__74348_74655);
var script_tag_74657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74355_74656,(0),null);
var script_body_74658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74355_74656,(1),null);
eval(script_body_74658);


var G__74659 = seq__74345_74652;
var G__74660 = chunk__74346_74653;
var G__74661 = count__74347_74654;
var G__74662 = (i__74348_74655 + (1));
seq__74345_74652 = G__74659;
chunk__74346_74653 = G__74660;
count__74347_74654 = G__74661;
i__74348_74655 = G__74662;
continue;
} else {
var temp__5804__auto___74663 = cljs.core.seq(seq__74345_74652);
if(temp__5804__auto___74663){
var seq__74345_74664__$1 = temp__5804__auto___74663;
if(cljs.core.chunked_seq_QMARK_(seq__74345_74664__$1)){
var c__5568__auto___74665 = cljs.core.chunk_first(seq__74345_74664__$1);
var G__74666 = cljs.core.chunk_rest(seq__74345_74664__$1);
var G__74667 = c__5568__auto___74665;
var G__74668 = cljs.core.count(c__5568__auto___74665);
var G__74669 = (0);
seq__74345_74652 = G__74666;
chunk__74346_74653 = G__74667;
count__74347_74654 = G__74668;
i__74348_74655 = G__74669;
continue;
} else {
var vec__74358_74670 = cljs.core.first(seq__74345_74664__$1);
var script_tag_74671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74358_74670,(0),null);
var script_body_74672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74358_74670,(1),null);
eval(script_body_74672);


var G__74673 = cljs.core.next(seq__74345_74664__$1);
var G__74674 = null;
var G__74675 = (0);
var G__74676 = (0);
seq__74345_74652 = G__74673;
chunk__74346_74653 = G__74674;
count__74347_74654 = G__74675;
i__74348_74655 = G__74676;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__74361){
var vec__74362 = p__74361;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74362,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74362,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__74366 = arguments.length;
switch (G__74366) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__74367 = cljs.core.seq(style_keys);
var chunk__74368 = null;
var count__74369 = (0);
var i__74370 = (0);
while(true){
if((i__74370 < count__74369)){
var it = chunk__74368.cljs$core$IIndexed$_nth$arity$2(null,i__74370);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__74678 = seq__74367;
var G__74679 = chunk__74368;
var G__74680 = count__74369;
var G__74681 = (i__74370 + (1));
seq__74367 = G__74678;
chunk__74368 = G__74679;
count__74369 = G__74680;
i__74370 = G__74681;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__74367);
if(temp__5804__auto__){
var seq__74367__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74367__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__74367__$1);
var G__74682 = cljs.core.chunk_rest(seq__74367__$1);
var G__74683 = c__5568__auto__;
var G__74684 = cljs.core.count(c__5568__auto__);
var G__74685 = (0);
seq__74367 = G__74682;
chunk__74368 = G__74683;
count__74369 = G__74684;
i__74370 = G__74685;
continue;
} else {
var it = cljs.core.first(seq__74367__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__74686 = cljs.core.next(seq__74367__$1);
var G__74687 = null;
var G__74688 = (0);
var G__74689 = (0);
seq__74367 = G__74686;
chunk__74368 = G__74687;
count__74369 = G__74688;
i__74370 = G__74689;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k74372,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__74376 = k74372;
var G__74376__$1 = (((G__74376 instanceof cljs.core.Keyword))?G__74376.fqn:null);
switch (G__74376__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k74372,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__74377){
var vec__74378 = p__74377;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74378,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74378,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__74371){
var self__ = this;
var G__74371__$1 = this;
return (new cljs.core.RecordIter((0),G__74371__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this74373,other74374){
var self__ = this;
var this74373__$1 = this;
return (((!((other74374 == null)))) && ((((this74373__$1.constructor === other74374.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74373__$1.x,other74374.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74373__$1.y,other74374.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74373__$1.__extmap,other74374.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k74372){
var self__ = this;
var this__5350__auto____$1 = this;
var G__74381 = k74372;
var G__74381__$1 = (((G__74381 instanceof cljs.core.Keyword))?G__74381.fqn:null);
switch (G__74381__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k74372);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__74371){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__74382 = cljs.core.keyword_identical_QMARK_;
var expr__74383 = k__5352__auto__;
if(cljs.core.truth_((pred__74382.cljs$core$IFn$_invoke$arity$2 ? pred__74382.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__74383) : pred__74382.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__74383)))){
return (new shadow.dom.Coordinate(G__74371,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74382.cljs$core$IFn$_invoke$arity$2 ? pred__74382.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__74383) : pred__74382.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__74383)))){
return (new shadow.dom.Coordinate(self__.x,G__74371,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__74371),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__74371){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__74371,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__74375){
var extmap__5385__auto__ = (function (){var G__74385 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__74375,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__74375)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__74385);
} else {
return G__74385;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__74375),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__74375),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k74387,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__74391 = k74387;
var G__74391__$1 = (((G__74391 instanceof cljs.core.Keyword))?G__74391.fqn:null);
switch (G__74391__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k74387,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__74392){
var vec__74393 = p__74392;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74393,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74393,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__74386){
var self__ = this;
var G__74386__$1 = this;
return (new cljs.core.RecordIter((0),G__74386__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this74388,other74389){
var self__ = this;
var this74388__$1 = this;
return (((!((other74389 == null)))) && ((((this74388__$1.constructor === other74389.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74388__$1.w,other74389.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74388__$1.h,other74389.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74388__$1.__extmap,other74389.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k74387){
var self__ = this;
var this__5350__auto____$1 = this;
var G__74396 = k74387;
var G__74396__$1 = (((G__74396 instanceof cljs.core.Keyword))?G__74396.fqn:null);
switch (G__74396__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k74387);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__74386){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__74397 = cljs.core.keyword_identical_QMARK_;
var expr__74398 = k__5352__auto__;
if(cljs.core.truth_((pred__74397.cljs$core$IFn$_invoke$arity$2 ? pred__74397.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__74398) : pred__74397.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__74398)))){
return (new shadow.dom.Size(G__74386,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74397.cljs$core$IFn$_invoke$arity$2 ? pred__74397.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__74398) : pred__74397.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__74398)))){
return (new shadow.dom.Size(self__.w,G__74386,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__74386),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__74386){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__74386,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__74390){
var extmap__5385__auto__ = (function (){var G__74400 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__74390,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__74390)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__74400);
} else {
return G__74400;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__74390),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__74390),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__74694 = (i + (1));
var G__74695 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__74694;
ret = G__74695;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__74405){
var vec__74406 = p__74405;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74406,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74406,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__74410 = arguments.length;
switch (G__74410) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__74697 = ps;
var G__74698 = (i + (1));
el__$1 = G__74697;
i = G__74698;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__74411 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74411,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74411,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74411,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__74414_74699 = cljs.core.seq(props);
var chunk__74415_74700 = null;
var count__74416_74701 = (0);
var i__74417_74702 = (0);
while(true){
if((i__74417_74702 < count__74416_74701)){
var vec__74424_74703 = chunk__74415_74700.cljs$core$IIndexed$_nth$arity$2(null,i__74417_74702);
var k_74704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74424_74703,(0),null);
var v_74705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74424_74703,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_74704);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_74704),v_74705);


var G__74706 = seq__74414_74699;
var G__74707 = chunk__74415_74700;
var G__74708 = count__74416_74701;
var G__74709 = (i__74417_74702 + (1));
seq__74414_74699 = G__74706;
chunk__74415_74700 = G__74707;
count__74416_74701 = G__74708;
i__74417_74702 = G__74709;
continue;
} else {
var temp__5804__auto___74710 = cljs.core.seq(seq__74414_74699);
if(temp__5804__auto___74710){
var seq__74414_74711__$1 = temp__5804__auto___74710;
if(cljs.core.chunked_seq_QMARK_(seq__74414_74711__$1)){
var c__5568__auto___74712 = cljs.core.chunk_first(seq__74414_74711__$1);
var G__74713 = cljs.core.chunk_rest(seq__74414_74711__$1);
var G__74714 = c__5568__auto___74712;
var G__74715 = cljs.core.count(c__5568__auto___74712);
var G__74716 = (0);
seq__74414_74699 = G__74713;
chunk__74415_74700 = G__74714;
count__74416_74701 = G__74715;
i__74417_74702 = G__74716;
continue;
} else {
var vec__74427_74717 = cljs.core.first(seq__74414_74711__$1);
var k_74718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74427_74717,(0),null);
var v_74719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74427_74717,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_74718);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_74718),v_74719);


var G__74720 = cljs.core.next(seq__74414_74711__$1);
var G__74721 = null;
var G__74722 = (0);
var G__74723 = (0);
seq__74414_74699 = G__74720;
chunk__74415_74700 = G__74721;
count__74416_74701 = G__74722;
i__74417_74702 = G__74723;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__74431 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74431,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74431,(1),null);
var seq__74434_74724 = cljs.core.seq(node_children);
var chunk__74436_74725 = null;
var count__74437_74726 = (0);
var i__74438_74727 = (0);
while(true){
if((i__74438_74727 < count__74437_74726)){
var child_struct_74728 = chunk__74436_74725.cljs$core$IIndexed$_nth$arity$2(null,i__74438_74727);
if((!((child_struct_74728 == null)))){
if(typeof child_struct_74728 === 'string'){
var text_74729 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_74729),child_struct_74728].join(''));
} else {
var children_74730 = shadow.dom.svg_node(child_struct_74728);
if(cljs.core.seq_QMARK_(children_74730)){
var seq__74452_74731 = cljs.core.seq(children_74730);
var chunk__74454_74732 = null;
var count__74455_74733 = (0);
var i__74456_74734 = (0);
while(true){
if((i__74456_74734 < count__74455_74733)){
var child_74735 = chunk__74454_74732.cljs$core$IIndexed$_nth$arity$2(null,i__74456_74734);
if(cljs.core.truth_(child_74735)){
node.appendChild(child_74735);


var G__74736 = seq__74452_74731;
var G__74737 = chunk__74454_74732;
var G__74738 = count__74455_74733;
var G__74739 = (i__74456_74734 + (1));
seq__74452_74731 = G__74736;
chunk__74454_74732 = G__74737;
count__74455_74733 = G__74738;
i__74456_74734 = G__74739;
continue;
} else {
var G__74740 = seq__74452_74731;
var G__74741 = chunk__74454_74732;
var G__74742 = count__74455_74733;
var G__74743 = (i__74456_74734 + (1));
seq__74452_74731 = G__74740;
chunk__74454_74732 = G__74741;
count__74455_74733 = G__74742;
i__74456_74734 = G__74743;
continue;
}
} else {
var temp__5804__auto___74744 = cljs.core.seq(seq__74452_74731);
if(temp__5804__auto___74744){
var seq__74452_74745__$1 = temp__5804__auto___74744;
if(cljs.core.chunked_seq_QMARK_(seq__74452_74745__$1)){
var c__5568__auto___74746 = cljs.core.chunk_first(seq__74452_74745__$1);
var G__74747 = cljs.core.chunk_rest(seq__74452_74745__$1);
var G__74748 = c__5568__auto___74746;
var G__74749 = cljs.core.count(c__5568__auto___74746);
var G__74750 = (0);
seq__74452_74731 = G__74747;
chunk__74454_74732 = G__74748;
count__74455_74733 = G__74749;
i__74456_74734 = G__74750;
continue;
} else {
var child_74751 = cljs.core.first(seq__74452_74745__$1);
if(cljs.core.truth_(child_74751)){
node.appendChild(child_74751);


var G__74752 = cljs.core.next(seq__74452_74745__$1);
var G__74753 = null;
var G__74754 = (0);
var G__74755 = (0);
seq__74452_74731 = G__74752;
chunk__74454_74732 = G__74753;
count__74455_74733 = G__74754;
i__74456_74734 = G__74755;
continue;
} else {
var G__74756 = cljs.core.next(seq__74452_74745__$1);
var G__74757 = null;
var G__74758 = (0);
var G__74759 = (0);
seq__74452_74731 = G__74756;
chunk__74454_74732 = G__74757;
count__74455_74733 = G__74758;
i__74456_74734 = G__74759;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_74730);
}
}


var G__74760 = seq__74434_74724;
var G__74761 = chunk__74436_74725;
var G__74762 = count__74437_74726;
var G__74763 = (i__74438_74727 + (1));
seq__74434_74724 = G__74760;
chunk__74436_74725 = G__74761;
count__74437_74726 = G__74762;
i__74438_74727 = G__74763;
continue;
} else {
var G__74764 = seq__74434_74724;
var G__74765 = chunk__74436_74725;
var G__74766 = count__74437_74726;
var G__74767 = (i__74438_74727 + (1));
seq__74434_74724 = G__74764;
chunk__74436_74725 = G__74765;
count__74437_74726 = G__74766;
i__74438_74727 = G__74767;
continue;
}
} else {
var temp__5804__auto___74768 = cljs.core.seq(seq__74434_74724);
if(temp__5804__auto___74768){
var seq__74434_74769__$1 = temp__5804__auto___74768;
if(cljs.core.chunked_seq_QMARK_(seq__74434_74769__$1)){
var c__5568__auto___74770 = cljs.core.chunk_first(seq__74434_74769__$1);
var G__74771 = cljs.core.chunk_rest(seq__74434_74769__$1);
var G__74772 = c__5568__auto___74770;
var G__74773 = cljs.core.count(c__5568__auto___74770);
var G__74774 = (0);
seq__74434_74724 = G__74771;
chunk__74436_74725 = G__74772;
count__74437_74726 = G__74773;
i__74438_74727 = G__74774;
continue;
} else {
var child_struct_74775 = cljs.core.first(seq__74434_74769__$1);
if((!((child_struct_74775 == null)))){
if(typeof child_struct_74775 === 'string'){
var text_74776 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_74776),child_struct_74775].join(''));
} else {
var children_74777 = shadow.dom.svg_node(child_struct_74775);
if(cljs.core.seq_QMARK_(children_74777)){
var seq__74458_74778 = cljs.core.seq(children_74777);
var chunk__74460_74779 = null;
var count__74461_74780 = (0);
var i__74462_74781 = (0);
while(true){
if((i__74462_74781 < count__74461_74780)){
var child_74782 = chunk__74460_74779.cljs$core$IIndexed$_nth$arity$2(null,i__74462_74781);
if(cljs.core.truth_(child_74782)){
node.appendChild(child_74782);


var G__74783 = seq__74458_74778;
var G__74784 = chunk__74460_74779;
var G__74785 = count__74461_74780;
var G__74786 = (i__74462_74781 + (1));
seq__74458_74778 = G__74783;
chunk__74460_74779 = G__74784;
count__74461_74780 = G__74785;
i__74462_74781 = G__74786;
continue;
} else {
var G__74787 = seq__74458_74778;
var G__74788 = chunk__74460_74779;
var G__74789 = count__74461_74780;
var G__74790 = (i__74462_74781 + (1));
seq__74458_74778 = G__74787;
chunk__74460_74779 = G__74788;
count__74461_74780 = G__74789;
i__74462_74781 = G__74790;
continue;
}
} else {
var temp__5804__auto___74791__$1 = cljs.core.seq(seq__74458_74778);
if(temp__5804__auto___74791__$1){
var seq__74458_74792__$1 = temp__5804__auto___74791__$1;
if(cljs.core.chunked_seq_QMARK_(seq__74458_74792__$1)){
var c__5568__auto___74793 = cljs.core.chunk_first(seq__74458_74792__$1);
var G__74794 = cljs.core.chunk_rest(seq__74458_74792__$1);
var G__74795 = c__5568__auto___74793;
var G__74796 = cljs.core.count(c__5568__auto___74793);
var G__74797 = (0);
seq__74458_74778 = G__74794;
chunk__74460_74779 = G__74795;
count__74461_74780 = G__74796;
i__74462_74781 = G__74797;
continue;
} else {
var child_74798 = cljs.core.first(seq__74458_74792__$1);
if(cljs.core.truth_(child_74798)){
node.appendChild(child_74798);


var G__74799 = cljs.core.next(seq__74458_74792__$1);
var G__74800 = null;
var G__74801 = (0);
var G__74802 = (0);
seq__74458_74778 = G__74799;
chunk__74460_74779 = G__74800;
count__74461_74780 = G__74801;
i__74462_74781 = G__74802;
continue;
} else {
var G__74803 = cljs.core.next(seq__74458_74792__$1);
var G__74804 = null;
var G__74805 = (0);
var G__74806 = (0);
seq__74458_74778 = G__74803;
chunk__74460_74779 = G__74804;
count__74461_74780 = G__74805;
i__74462_74781 = G__74806;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_74777);
}
}


var G__74807 = cljs.core.next(seq__74434_74769__$1);
var G__74808 = null;
var G__74809 = (0);
var G__74810 = (0);
seq__74434_74724 = G__74807;
chunk__74436_74725 = G__74808;
count__74437_74726 = G__74809;
i__74438_74727 = G__74810;
continue;
} else {
var G__74811 = cljs.core.next(seq__74434_74769__$1);
var G__74812 = null;
var G__74813 = (0);
var G__74814 = (0);
seq__74434_74724 = G__74811;
chunk__74436_74725 = G__74812;
count__74437_74726 = G__74813;
i__74438_74727 = G__74814;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___74815 = arguments.length;
var i__5770__auto___74816 = (0);
while(true){
if((i__5770__auto___74816 < len__5769__auto___74815)){
args__5775__auto__.push((arguments[i__5770__auto___74816]));

var G__74817 = (i__5770__auto___74816 + (1));
i__5770__auto___74816 = G__74817;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq74464){
var G__74465 = cljs.core.first(seq74464);
var seq74464__$1 = cljs.core.next(seq74464);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74465,seq74464__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__74467 = arguments.length;
switch (G__74467) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__70910__auto___74819 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70911__auto__ = (function (){var switch__70804__auto__ = (function (state_74472){
var state_val_74473 = (state_74472[(1)]);
if((state_val_74473 === (1))){
var state_74472__$1 = state_74472;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74472__$1,(2),once_or_cleanup);
} else {
if((state_val_74473 === (2))){
var inst_74469 = (state_74472[(2)]);
var inst_74470 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_74472__$1 = (function (){var statearr_74474 = state_74472;
(statearr_74474[(7)] = inst_74469);

return statearr_74474;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_74472__$1,inst_74470);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__70805__auto__ = null;
var shadow$dom$state_machine__70805__auto____0 = (function (){
var statearr_74475 = [null,null,null,null,null,null,null,null];
(statearr_74475[(0)] = shadow$dom$state_machine__70805__auto__);

(statearr_74475[(1)] = (1));

return statearr_74475;
});
var shadow$dom$state_machine__70805__auto____1 = (function (state_74472){
while(true){
var ret_value__70806__auto__ = (function (){try{while(true){
var result__70807__auto__ = switch__70804__auto__(state_74472);
if(cljs.core.keyword_identical_QMARK_(result__70807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70807__auto__;
}
break;
}
}catch (e74476){var ex__70808__auto__ = e74476;
var statearr_74477_74820 = state_74472;
(statearr_74477_74820[(2)] = ex__70808__auto__);


if(cljs.core.seq((state_74472[(4)]))){
var statearr_74478_74821 = state_74472;
(statearr_74478_74821[(1)] = cljs.core.first((state_74472[(4)])));

} else {
throw ex__70808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74822 = state_74472;
state_74472 = G__74822;
continue;
} else {
return ret_value__70806__auto__;
}
break;
}
});
shadow$dom$state_machine__70805__auto__ = function(state_74472){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__70805__auto____0.call(this);
case 1:
return shadow$dom$state_machine__70805__auto____1.call(this,state_74472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__70805__auto____0;
shadow$dom$state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__70805__auto____1;
return shadow$dom$state_machine__70805__auto__;
})()
})();
var state__70912__auto__ = (function (){var statearr_74479 = f__70911__auto__();
(statearr_74479[(6)] = c__70910__auto___74819);

return statearr_74479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70912__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
