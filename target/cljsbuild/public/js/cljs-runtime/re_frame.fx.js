goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__66738 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__66739 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__66739);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___66855 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___66855)){
var new_db_66856 = temp__5804__auto___66855;
var fexpr__66743_66857 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__66743_66857.cljs$core$IFn$_invoke$arity$1 ? fexpr__66743_66857.cljs$core$IFn$_invoke$arity$1(new_db_66856) : fexpr__66743_66857.call(null,new_db_66856));
} else {
}

var seq__66744 = cljs.core.seq(effects_without_db);
var chunk__66745 = null;
var count__66746 = (0);
var i__66747 = (0);
while(true){
if((i__66747 < count__66746)){
var vec__66759 = chunk__66745.cljs$core$IIndexed$_nth$arity$2(null,i__66747);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66759,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66759,(1),null);
var temp__5802__auto___66858 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___66858)){
var effect_fn_66859 = temp__5802__auto___66858;
(effect_fn_66859.cljs$core$IFn$_invoke$arity$1 ? effect_fn_66859.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_66859.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__66860 = seq__66744;
var G__66861 = chunk__66745;
var G__66862 = count__66746;
var G__66863 = (i__66747 + (1));
seq__66744 = G__66860;
chunk__66745 = G__66861;
count__66746 = G__66862;
i__66747 = G__66863;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__66744);
if(temp__5804__auto__){
var seq__66744__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66744__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__66744__$1);
var G__66864 = cljs.core.chunk_rest(seq__66744__$1);
var G__66865 = c__5568__auto__;
var G__66866 = cljs.core.count(c__5568__auto__);
var G__66867 = (0);
seq__66744 = G__66864;
chunk__66745 = G__66865;
count__66746 = G__66866;
i__66747 = G__66867;
continue;
} else {
var vec__66763 = cljs.core.first(seq__66744__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66763,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66763,(1),null);
var temp__5802__auto___66868 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___66868)){
var effect_fn_66869 = temp__5802__auto___66868;
(effect_fn_66869.cljs$core$IFn$_invoke$arity$1 ? effect_fn_66869.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_66869.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__66870 = cljs.core.next(seq__66744__$1);
var G__66871 = null;
var G__66872 = (0);
var G__66873 = (0);
seq__66744 = G__66870;
chunk__66745 = G__66871;
count__66746 = G__66872;
i__66747 = G__66873;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__56739__auto___66874 = re_frame.interop.now();
var duration__56740__auto___66875 = (end__56739__auto___66874 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__56740__auto___66875,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__56739__auto___66874);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__66738);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___66876 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___66876)){
var new_db_66877 = temp__5804__auto___66876;
var fexpr__66767_66878 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__66767_66878.cljs$core$IFn$_invoke$arity$1 ? fexpr__66767_66878.cljs$core$IFn$_invoke$arity$1(new_db_66877) : fexpr__66767_66878.call(null,new_db_66877));
} else {
}

var seq__66770 = cljs.core.seq(effects_without_db);
var chunk__66771 = null;
var count__66772 = (0);
var i__66773 = (0);
while(true){
if((i__66773 < count__66772)){
var vec__66784 = chunk__66771.cljs$core$IIndexed$_nth$arity$2(null,i__66773);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66784,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66784,(1),null);
var temp__5802__auto___66879 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___66879)){
var effect_fn_66880 = temp__5802__auto___66879;
(effect_fn_66880.cljs$core$IFn$_invoke$arity$1 ? effect_fn_66880.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_66880.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__66881 = seq__66770;
var G__66882 = chunk__66771;
var G__66883 = count__66772;
var G__66884 = (i__66773 + (1));
seq__66770 = G__66881;
chunk__66771 = G__66882;
count__66772 = G__66883;
i__66773 = G__66884;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__66770);
if(temp__5804__auto__){
var seq__66770__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66770__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__66770__$1);
var G__66885 = cljs.core.chunk_rest(seq__66770__$1);
var G__66886 = c__5568__auto__;
var G__66887 = cljs.core.count(c__5568__auto__);
var G__66888 = (0);
seq__66770 = G__66885;
chunk__66771 = G__66886;
count__66772 = G__66887;
i__66773 = G__66888;
continue;
} else {
var vec__66789 = cljs.core.first(seq__66770__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66789,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66789,(1),null);
var temp__5802__auto___66889 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___66889)){
var effect_fn_66890 = temp__5802__auto___66889;
(effect_fn_66890.cljs$core$IFn$_invoke$arity$1 ? effect_fn_66890.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_66890.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__66891 = cljs.core.next(seq__66770__$1);
var G__66892 = null;
var G__66893 = (0);
var G__66894 = (0);
seq__66770 = G__66891;
chunk__66771 = G__66892;
count__66772 = G__66893;
i__66773 = G__66894;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__66793){
var map__66794 = p__66793;
var map__66794__$1 = cljs.core.__destructure_map(map__66794);
var effect = map__66794__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66794__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66794__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__66800 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__66801 = null;
var count__66802 = (0);
var i__66803 = (0);
while(true){
if((i__66803 < count__66802)){
var effect = chunk__66801.cljs$core$IIndexed$_nth$arity$2(null,i__66803);
re_frame.fx.dispatch_later(effect);


var G__66896 = seq__66800;
var G__66897 = chunk__66801;
var G__66898 = count__66802;
var G__66899 = (i__66803 + (1));
seq__66800 = G__66896;
chunk__66801 = G__66897;
count__66802 = G__66898;
i__66803 = G__66899;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__66800);
if(temp__5804__auto__){
var seq__66800__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66800__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__66800__$1);
var G__66901 = cljs.core.chunk_rest(seq__66800__$1);
var G__66902 = c__5568__auto__;
var G__66903 = cljs.core.count(c__5568__auto__);
var G__66904 = (0);
seq__66800 = G__66901;
chunk__66801 = G__66902;
count__66802 = G__66903;
i__66803 = G__66904;
continue;
} else {
var effect = cljs.core.first(seq__66800__$1);
re_frame.fx.dispatch_later(effect);


var G__66905 = cljs.core.next(seq__66800__$1);
var G__66906 = null;
var G__66907 = (0);
var G__66908 = (0);
seq__66800 = G__66905;
chunk__66801 = G__66906;
count__66802 = G__66907;
i__66803 = G__66908;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__66819 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__66820 = null;
var count__66821 = (0);
var i__66822 = (0);
while(true){
if((i__66822 < count__66821)){
var vec__66832 = chunk__66820.cljs$core$IIndexed$_nth$arity$2(null,i__66822);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66832,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66832,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___66909 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___66909)){
var effect_fn_66910 = temp__5802__auto___66909;
(effect_fn_66910.cljs$core$IFn$_invoke$arity$1 ? effect_fn_66910.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_66910.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__66911 = seq__66819;
var G__66912 = chunk__66820;
var G__66913 = count__66821;
var G__66914 = (i__66822 + (1));
seq__66819 = G__66911;
chunk__66820 = G__66912;
count__66821 = G__66913;
i__66822 = G__66914;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__66819);
if(temp__5804__auto__){
var seq__66819__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66819__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__66819__$1);
var G__66915 = cljs.core.chunk_rest(seq__66819__$1);
var G__66916 = c__5568__auto__;
var G__66917 = cljs.core.count(c__5568__auto__);
var G__66918 = (0);
seq__66819 = G__66915;
chunk__66820 = G__66916;
count__66821 = G__66917;
i__66822 = G__66918;
continue;
} else {
var vec__66838 = cljs.core.first(seq__66819__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66838,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66838,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___66919 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___66919)){
var effect_fn_66920 = temp__5802__auto___66919;
(effect_fn_66920.cljs$core$IFn$_invoke$arity$1 ? effect_fn_66920.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_66920.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__66921 = cljs.core.next(seq__66819__$1);
var G__66922 = null;
var G__66923 = (0);
var G__66924 = (0);
seq__66819 = G__66921;
chunk__66820 = G__66922;
count__66821 = G__66923;
i__66822 = G__66924;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__66844 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__66845 = null;
var count__66846 = (0);
var i__66847 = (0);
while(true){
if((i__66847 < count__66846)){
var event = chunk__66845.cljs$core$IIndexed$_nth$arity$2(null,i__66847);
re_frame.router.dispatch(event);


var G__66926 = seq__66844;
var G__66927 = chunk__66845;
var G__66928 = count__66846;
var G__66929 = (i__66847 + (1));
seq__66844 = G__66926;
chunk__66845 = G__66927;
count__66846 = G__66928;
i__66847 = G__66929;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__66844);
if(temp__5804__auto__){
var seq__66844__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66844__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__66844__$1);
var G__66930 = cljs.core.chunk_rest(seq__66844__$1);
var G__66931 = c__5568__auto__;
var G__66932 = cljs.core.count(c__5568__auto__);
var G__66933 = (0);
seq__66844 = G__66930;
chunk__66845 = G__66931;
count__66846 = G__66932;
i__66847 = G__66933;
continue;
} else {
var event = cljs.core.first(seq__66844__$1);
re_frame.router.dispatch(event);


var G__66934 = cljs.core.next(seq__66844__$1);
var G__66935 = null;
var G__66936 = (0);
var G__66937 = (0);
seq__66844 = G__66934;
chunk__66845 = G__66935;
count__66846 = G__66936;
i__66847 = G__66937;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__66851 = cljs.core.seq(value);
var chunk__66852 = null;
var count__66853 = (0);
var i__66854 = (0);
while(true){
if((i__66854 < count__66853)){
var event = chunk__66852.cljs$core$IIndexed$_nth$arity$2(null,i__66854);
clear_event(event);


var G__66938 = seq__66851;
var G__66939 = chunk__66852;
var G__66940 = count__66853;
var G__66941 = (i__66854 + (1));
seq__66851 = G__66938;
chunk__66852 = G__66939;
count__66853 = G__66940;
i__66854 = G__66941;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__66851);
if(temp__5804__auto__){
var seq__66851__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66851__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__66851__$1);
var G__66942 = cljs.core.chunk_rest(seq__66851__$1);
var G__66943 = c__5568__auto__;
var G__66944 = cljs.core.count(c__5568__auto__);
var G__66945 = (0);
seq__66851 = G__66942;
chunk__66852 = G__66943;
count__66853 = G__66944;
i__66854 = G__66945;
continue;
} else {
var event = cljs.core.first(seq__66851__$1);
clear_event(event);


var G__66946 = cljs.core.next(seq__66851__$1);
var G__66947 = null;
var G__66948 = (0);
var G__66949 = (0);
seq__66851 = G__66946;
chunk__66852 = G__66947;
count__66853 = G__66948;
i__66854 = G__66949;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
