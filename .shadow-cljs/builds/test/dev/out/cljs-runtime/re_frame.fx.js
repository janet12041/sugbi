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
var _STAR_current_trace_STAR__orig_val__57041 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__57042 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__57042);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___57142 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___57142)){
var new_db_57143 = temp__5804__auto___57142;
var fexpr__57047_57144 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__57047_57144.cljs$core$IFn$_invoke$arity$1 ? fexpr__57047_57144.cljs$core$IFn$_invoke$arity$1(new_db_57143) : fexpr__57047_57144.call(null,new_db_57143));
} else {
}

var seq__57048 = cljs.core.seq(effects_without_db);
var chunk__57049 = null;
var count__57050 = (0);
var i__57051 = (0);
while(true){
if((i__57051 < count__57050)){
var vec__57067 = chunk__57049.cljs$core$IIndexed$_nth$arity$2(null,i__57051);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57067,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57067,(1),null);
var temp__5802__auto___57145 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___57145)){
var effect_fn_57146 = temp__5802__auto___57145;
(effect_fn_57146.cljs$core$IFn$_invoke$arity$1 ? effect_fn_57146.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_57146.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__57147 = seq__57048;
var G__57148 = chunk__57049;
var G__57149 = count__57050;
var G__57150 = (i__57051 + (1));
seq__57048 = G__57147;
chunk__57049 = G__57148;
count__57050 = G__57149;
i__57051 = G__57150;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57048);
if(temp__5804__auto__){
var seq__57048__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57048__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__57048__$1);
var G__57151 = cljs.core.chunk_rest(seq__57048__$1);
var G__57152 = c__5568__auto__;
var G__57153 = cljs.core.count(c__5568__auto__);
var G__57154 = (0);
seq__57048 = G__57151;
chunk__57049 = G__57152;
count__57050 = G__57153;
i__57051 = G__57154;
continue;
} else {
var vec__57073 = cljs.core.first(seq__57048__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57073,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57073,(1),null);
var temp__5802__auto___57155 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___57155)){
var effect_fn_57156 = temp__5802__auto___57155;
(effect_fn_57156.cljs$core$IFn$_invoke$arity$1 ? effect_fn_57156.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_57156.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__57157 = cljs.core.next(seq__57048__$1);
var G__57158 = null;
var G__57159 = (0);
var G__57160 = (0);
seq__57048 = G__57157;
chunk__57049 = G__57158;
count__57050 = G__57159;
i__57051 = G__57160;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__56739__auto___57161 = re_frame.interop.now();
var duration__56740__auto___57162 = (end__56739__auto___57161 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__56740__auto___57162,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__56739__auto___57161);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__57041);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___57163 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___57163)){
var new_db_57164 = temp__5804__auto___57163;
var fexpr__57077_57165 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__57077_57165.cljs$core$IFn$_invoke$arity$1 ? fexpr__57077_57165.cljs$core$IFn$_invoke$arity$1(new_db_57164) : fexpr__57077_57165.call(null,new_db_57164));
} else {
}

var seq__57078 = cljs.core.seq(effects_without_db);
var chunk__57079 = null;
var count__57080 = (0);
var i__57081 = (0);
while(true){
if((i__57081 < count__57080)){
var vec__57094 = chunk__57079.cljs$core$IIndexed$_nth$arity$2(null,i__57081);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57094,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57094,(1),null);
var temp__5802__auto___57166 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___57166)){
var effect_fn_57167 = temp__5802__auto___57166;
(effect_fn_57167.cljs$core$IFn$_invoke$arity$1 ? effect_fn_57167.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_57167.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__57168 = seq__57078;
var G__57169 = chunk__57079;
var G__57170 = count__57080;
var G__57171 = (i__57081 + (1));
seq__57078 = G__57168;
chunk__57079 = G__57169;
count__57080 = G__57170;
i__57081 = G__57171;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57078);
if(temp__5804__auto__){
var seq__57078__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57078__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__57078__$1);
var G__57172 = cljs.core.chunk_rest(seq__57078__$1);
var G__57173 = c__5568__auto__;
var G__57174 = cljs.core.count(c__5568__auto__);
var G__57175 = (0);
seq__57078 = G__57172;
chunk__57079 = G__57173;
count__57080 = G__57174;
i__57081 = G__57175;
continue;
} else {
var vec__57097 = cljs.core.first(seq__57078__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57097,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57097,(1),null);
var temp__5802__auto___57178 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___57178)){
var effect_fn_57179 = temp__5802__auto___57178;
(effect_fn_57179.cljs$core$IFn$_invoke$arity$1 ? effect_fn_57179.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_57179.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__57180 = cljs.core.next(seq__57078__$1);
var G__57181 = null;
var G__57182 = (0);
var G__57183 = (0);
seq__57078 = G__57180;
chunk__57079 = G__57181;
count__57080 = G__57182;
i__57081 = G__57183;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__57112){
var map__57113 = p__57112;
var map__57113__$1 = cljs.core.__destructure_map(map__57113);
var effect = map__57113__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57113__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57113__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__57114 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__57115 = null;
var count__57116 = (0);
var i__57117 = (0);
while(true){
if((i__57117 < count__57116)){
var effect = chunk__57115.cljs$core$IIndexed$_nth$arity$2(null,i__57117);
re_frame.fx.dispatch_later(effect);


var G__57184 = seq__57114;
var G__57185 = chunk__57115;
var G__57186 = count__57116;
var G__57187 = (i__57117 + (1));
seq__57114 = G__57184;
chunk__57115 = G__57185;
count__57116 = G__57186;
i__57117 = G__57187;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57114);
if(temp__5804__auto__){
var seq__57114__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57114__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__57114__$1);
var G__57188 = cljs.core.chunk_rest(seq__57114__$1);
var G__57189 = c__5568__auto__;
var G__57190 = cljs.core.count(c__5568__auto__);
var G__57191 = (0);
seq__57114 = G__57188;
chunk__57115 = G__57189;
count__57116 = G__57190;
i__57117 = G__57191;
continue;
} else {
var effect = cljs.core.first(seq__57114__$1);
re_frame.fx.dispatch_later(effect);


var G__57192 = cljs.core.next(seq__57114__$1);
var G__57193 = null;
var G__57194 = (0);
var G__57195 = (0);
seq__57114 = G__57192;
chunk__57115 = G__57193;
count__57116 = G__57194;
i__57117 = G__57195;
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
var seq__57118 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__57119 = null;
var count__57120 = (0);
var i__57121 = (0);
while(true){
if((i__57121 < count__57120)){
var vec__57128 = chunk__57119.cljs$core$IIndexed$_nth$arity$2(null,i__57121);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57128,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57128,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___57198 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___57198)){
var effect_fn_57199 = temp__5802__auto___57198;
(effect_fn_57199.cljs$core$IFn$_invoke$arity$1 ? effect_fn_57199.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_57199.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__57200 = seq__57118;
var G__57201 = chunk__57119;
var G__57202 = count__57120;
var G__57203 = (i__57121 + (1));
seq__57118 = G__57200;
chunk__57119 = G__57201;
count__57120 = G__57202;
i__57121 = G__57203;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57118);
if(temp__5804__auto__){
var seq__57118__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57118__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__57118__$1);
var G__57204 = cljs.core.chunk_rest(seq__57118__$1);
var G__57205 = c__5568__auto__;
var G__57206 = cljs.core.count(c__5568__auto__);
var G__57207 = (0);
seq__57118 = G__57204;
chunk__57119 = G__57205;
count__57120 = G__57206;
i__57121 = G__57207;
continue;
} else {
var vec__57131 = cljs.core.first(seq__57118__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57131,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57131,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___57208 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___57208)){
var effect_fn_57209 = temp__5802__auto___57208;
(effect_fn_57209.cljs$core$IFn$_invoke$arity$1 ? effect_fn_57209.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_57209.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__57210 = cljs.core.next(seq__57118__$1);
var G__57211 = null;
var G__57212 = (0);
var G__57213 = (0);
seq__57118 = G__57210;
chunk__57119 = G__57211;
count__57120 = G__57212;
i__57121 = G__57213;
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
var seq__57134 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__57135 = null;
var count__57136 = (0);
var i__57137 = (0);
while(true){
if((i__57137 < count__57136)){
var event = chunk__57135.cljs$core$IIndexed$_nth$arity$2(null,i__57137);
re_frame.router.dispatch(event);


var G__57216 = seq__57134;
var G__57217 = chunk__57135;
var G__57218 = count__57136;
var G__57219 = (i__57137 + (1));
seq__57134 = G__57216;
chunk__57135 = G__57217;
count__57136 = G__57218;
i__57137 = G__57219;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57134);
if(temp__5804__auto__){
var seq__57134__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57134__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__57134__$1);
var G__57220 = cljs.core.chunk_rest(seq__57134__$1);
var G__57221 = c__5568__auto__;
var G__57222 = cljs.core.count(c__5568__auto__);
var G__57223 = (0);
seq__57134 = G__57220;
chunk__57135 = G__57221;
count__57136 = G__57222;
i__57137 = G__57223;
continue;
} else {
var event = cljs.core.first(seq__57134__$1);
re_frame.router.dispatch(event);


var G__57224 = cljs.core.next(seq__57134__$1);
var G__57225 = null;
var G__57226 = (0);
var G__57227 = (0);
seq__57134 = G__57224;
chunk__57135 = G__57225;
count__57136 = G__57226;
i__57137 = G__57227;
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
var seq__57138 = cljs.core.seq(value);
var chunk__57139 = null;
var count__57140 = (0);
var i__57141 = (0);
while(true){
if((i__57141 < count__57140)){
var event = chunk__57139.cljs$core$IIndexed$_nth$arity$2(null,i__57141);
clear_event(event);


var G__57228 = seq__57138;
var G__57229 = chunk__57139;
var G__57230 = count__57140;
var G__57231 = (i__57141 + (1));
seq__57138 = G__57228;
chunk__57139 = G__57229;
count__57140 = G__57230;
i__57141 = G__57231;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57138);
if(temp__5804__auto__){
var seq__57138__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57138__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__57138__$1);
var G__57232 = cljs.core.chunk_rest(seq__57138__$1);
var G__57233 = c__5568__auto__;
var G__57234 = cljs.core.count(c__5568__auto__);
var G__57235 = (0);
seq__57138 = G__57232;
chunk__57139 = G__57233;
count__57140 = G__57234;
i__57141 = G__57235;
continue;
} else {
var event = cljs.core.first(seq__57138__$1);
clear_event(event);


var G__57236 = cljs.core.next(seq__57138__$1);
var G__57237 = null;
var G__57238 = (0);
var G__57239 = (0);
seq__57138 = G__57236;
chunk__57139 = G__57237;
count__57140 = G__57238;
i__57141 = G__57239;
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
