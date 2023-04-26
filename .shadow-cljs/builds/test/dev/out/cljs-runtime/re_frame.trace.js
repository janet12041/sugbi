goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__56759){
var map__56760 = p__56759;
var map__56760__$1 = cljs.core.__destructure_map(map__56760);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56760__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56760__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56760__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56760__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__56761_56788 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__56762_56789 = null;
var count__56763_56790 = (0);
var i__56764_56791 = (0);
while(true){
if((i__56764_56791 < count__56763_56790)){
var vec__56775_56792 = chunk__56762_56789.cljs$core$IIndexed$_nth$arity$2(null,i__56764_56791);
var k_56793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56775_56792,(0),null);
var cb_56794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56775_56792,(1),null);
try{var G__56779_56795 = cljs.core.deref(re_frame.trace.traces);
(cb_56794.cljs$core$IFn$_invoke$arity$1 ? cb_56794.cljs$core$IFn$_invoke$arity$1(G__56779_56795) : cb_56794.call(null,G__56779_56795));
}catch (e56778){var e_56796 = e56778;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_56793,"while storing",cljs.core.deref(re_frame.trace.traces),e_56796], 0));
}

var G__56797 = seq__56761_56788;
var G__56798 = chunk__56762_56789;
var G__56799 = count__56763_56790;
var G__56800 = (i__56764_56791 + (1));
seq__56761_56788 = G__56797;
chunk__56762_56789 = G__56798;
count__56763_56790 = G__56799;
i__56764_56791 = G__56800;
continue;
} else {
var temp__5804__auto___56801 = cljs.core.seq(seq__56761_56788);
if(temp__5804__auto___56801){
var seq__56761_56802__$1 = temp__5804__auto___56801;
if(cljs.core.chunked_seq_QMARK_(seq__56761_56802__$1)){
var c__5568__auto___56803 = cljs.core.chunk_first(seq__56761_56802__$1);
var G__56804 = cljs.core.chunk_rest(seq__56761_56802__$1);
var G__56805 = c__5568__auto___56803;
var G__56806 = cljs.core.count(c__5568__auto___56803);
var G__56807 = (0);
seq__56761_56788 = G__56804;
chunk__56762_56789 = G__56805;
count__56763_56790 = G__56806;
i__56764_56791 = G__56807;
continue;
} else {
var vec__56780_56808 = cljs.core.first(seq__56761_56802__$1);
var k_56809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56780_56808,(0),null);
var cb_56810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56780_56808,(1),null);
try{var G__56784_56811 = cljs.core.deref(re_frame.trace.traces);
(cb_56810.cljs$core$IFn$_invoke$arity$1 ? cb_56810.cljs$core$IFn$_invoke$arity$1(G__56784_56811) : cb_56810.call(null,G__56784_56811));
}catch (e56783){var e_56812 = e56783;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_56809,"while storing",cljs.core.deref(re_frame.trace.traces),e_56812], 0));
}

var G__56813 = cljs.core.next(seq__56761_56802__$1);
var G__56814 = null;
var G__56815 = (0);
var G__56816 = (0);
seq__56761_56788 = G__56813;
chunk__56762_56789 = G__56814;
count__56763_56790 = G__56815;
i__56764_56791 = G__56816;
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
