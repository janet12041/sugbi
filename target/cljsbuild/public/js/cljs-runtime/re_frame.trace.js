goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = true;
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__66468){
var map__66469 = p__66468;
var map__66469__$1 = cljs.core.__destructure_map(map__66469);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66469__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66469__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66469__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66469__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__66470_66500 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__66471_66501 = null;
var count__66472_66502 = (0);
var i__66473_66503 = (0);
while(true){
if((i__66473_66503 < count__66472_66502)){
var vec__66484_66504 = chunk__66471_66501.cljs$core$IIndexed$_nth$arity$2(null,i__66473_66503);
var k_66505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66484_66504,(0),null);
var cb_66506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66484_66504,(1),null);
try{var G__66488_66507 = cljs.core.deref(re_frame.trace.traces);
(cb_66506.cljs$core$IFn$_invoke$arity$1 ? cb_66506.cljs$core$IFn$_invoke$arity$1(G__66488_66507) : cb_66506.call(null,G__66488_66507));
}catch (e66487){var e_66508 = e66487;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_66505,"while storing",cljs.core.deref(re_frame.trace.traces),e_66508], 0));
}

var G__66509 = seq__66470_66500;
var G__66510 = chunk__66471_66501;
var G__66511 = count__66472_66502;
var G__66512 = (i__66473_66503 + (1));
seq__66470_66500 = G__66509;
chunk__66471_66501 = G__66510;
count__66472_66502 = G__66511;
i__66473_66503 = G__66512;
continue;
} else {
var temp__5804__auto___66514 = cljs.core.seq(seq__66470_66500);
if(temp__5804__auto___66514){
var seq__66470_66515__$1 = temp__5804__auto___66514;
if(cljs.core.chunked_seq_QMARK_(seq__66470_66515__$1)){
var c__5568__auto___66516 = cljs.core.chunk_first(seq__66470_66515__$1);
var G__66517 = cljs.core.chunk_rest(seq__66470_66515__$1);
var G__66518 = c__5568__auto___66516;
var G__66519 = cljs.core.count(c__5568__auto___66516);
var G__66520 = (0);
seq__66470_66500 = G__66517;
chunk__66471_66501 = G__66518;
count__66472_66502 = G__66519;
i__66473_66503 = G__66520;
continue;
} else {
var vec__66489_66521 = cljs.core.first(seq__66470_66515__$1);
var k_66522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66489_66521,(0),null);
var cb_66523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66489_66521,(1),null);
try{var G__66493_66525 = cljs.core.deref(re_frame.trace.traces);
(cb_66523.cljs$core$IFn$_invoke$arity$1 ? cb_66523.cljs$core$IFn$_invoke$arity$1(G__66493_66525) : cb_66523.call(null,G__66493_66525));
}catch (e66492){var e_66526 = e66492;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_66522,"while storing",cljs.core.deref(re_frame.trace.traces),e_66526], 0));
}

var G__66527 = cljs.core.next(seq__66470_66515__$1);
var G__66528 = null;
var G__66529 = (0);
var G__66530 = (0);
seq__66470_66500 = G__66527;
chunk__66471_66501 = G__66528;
count__66472_66502 = G__66529;
i__66473_66503 = G__66530;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
