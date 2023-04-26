goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___77708 = arguments.length;
var i__5770__auto___77709 = (0);
while(true){
if((i__5770__auto___77709 < len__5769__auto___77708)){
args__5775__auto__.push((arguments[i__5770__auto___77709]));

var G__77710 = (i__5770__auto___77709 + (1));
i__5770__auto___77709 = G__77710;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq77244){
var G__77245 = cljs.core.first(seq77244);
var seq77244__$1 = cljs.core.next(seq77244);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77245,seq77244__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__77252 = cljs.core.seq(sources);
var chunk__77253 = null;
var count__77254 = (0);
var i__77255 = (0);
while(true){
if((i__77255 < count__77254)){
var map__77260 = chunk__77253.cljs$core$IIndexed$_nth$arity$2(null,i__77255);
var map__77260__$1 = cljs.core.__destructure_map(map__77260);
var src = map__77260__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77260__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77260__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77260__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77260__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e77261){var e_77711 = e77261;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_77711);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_77711.message)].join('')));
}

var G__77712 = seq__77252;
var G__77713 = chunk__77253;
var G__77714 = count__77254;
var G__77715 = (i__77255 + (1));
seq__77252 = G__77712;
chunk__77253 = G__77713;
count__77254 = G__77714;
i__77255 = G__77715;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__77252);
if(temp__5804__auto__){
var seq__77252__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77252__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__77252__$1);
var G__77716 = cljs.core.chunk_rest(seq__77252__$1);
var G__77717 = c__5568__auto__;
var G__77718 = cljs.core.count(c__5568__auto__);
var G__77719 = (0);
seq__77252 = G__77716;
chunk__77253 = G__77717;
count__77254 = G__77718;
i__77255 = G__77719;
continue;
} else {
var map__77262 = cljs.core.first(seq__77252__$1);
var map__77262__$1 = cljs.core.__destructure_map(map__77262);
var src = map__77262__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77262__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77262__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77262__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77262__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e77264){var e_77720 = e77264;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_77720);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_77720.message)].join('')));
}

var G__77721 = cljs.core.next(seq__77252__$1);
var G__77722 = null;
var G__77723 = (0);
var G__77724 = (0);
seq__77252 = G__77721;
chunk__77253 = G__77722;
count__77254 = G__77723;
i__77255 = G__77724;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__77268 = cljs.core.seq(js_requires);
var chunk__77269 = null;
var count__77270 = (0);
var i__77271 = (0);
while(true){
if((i__77271 < count__77270)){
var js_ns = chunk__77269.cljs$core$IIndexed$_nth$arity$2(null,i__77271);
var require_str_77725 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_77725);


var G__77726 = seq__77268;
var G__77727 = chunk__77269;
var G__77728 = count__77270;
var G__77729 = (i__77271 + (1));
seq__77268 = G__77726;
chunk__77269 = G__77727;
count__77270 = G__77728;
i__77271 = G__77729;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__77268);
if(temp__5804__auto__){
var seq__77268__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77268__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__77268__$1);
var G__77730 = cljs.core.chunk_rest(seq__77268__$1);
var G__77731 = c__5568__auto__;
var G__77732 = cljs.core.count(c__5568__auto__);
var G__77733 = (0);
seq__77268 = G__77730;
chunk__77269 = G__77731;
count__77270 = G__77732;
i__77271 = G__77733;
continue;
} else {
var js_ns = cljs.core.first(seq__77268__$1);
var require_str_77734 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_77734);


var G__77735 = cljs.core.next(seq__77268__$1);
var G__77736 = null;
var G__77737 = (0);
var G__77738 = (0);
seq__77268 = G__77735;
chunk__77269 = G__77736;
count__77270 = G__77737;
i__77271 = G__77738;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__77273){
var map__77274 = p__77273;
var map__77274__$1 = cljs.core.__destructure_map(map__77274);
var msg = map__77274__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77274__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77274__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__77276(s__77277){
return (new cljs.core.LazySeq(null,(function (){
var s__77277__$1 = s__77277;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__77277__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__77282 = cljs.core.first(xs__6360__auto__);
var map__77282__$1 = cljs.core.__destructure_map(map__77282);
var src = map__77282__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77282__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77282__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__77277__$1,map__77282,map__77282__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__77274,map__77274__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__77276_$_iter__77278(s__77279){
return (new cljs.core.LazySeq(null,((function (s__77277__$1,map__77282,map__77282__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__77274,map__77274__$1,msg,info,reload_info){
return (function (){
var s__77279__$1 = s__77279;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__77279__$1);
if(temp__5804__auto____$1){
var s__77279__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__77279__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__77279__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__77281 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__77280 = (0);
while(true){
if((i__77280 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__77280);
cljs.core.chunk_append(b__77281,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__77739 = (i__77280 + (1));
i__77280 = G__77739;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77281),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__77276_$_iter__77278(cljs.core.chunk_rest(s__77279__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77281),null);
}
} else {
var warning = cljs.core.first(s__77279__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__77276_$_iter__77278(cljs.core.rest(s__77279__$2)));
}
} else {
return null;
}
break;
}
});})(s__77277__$1,map__77282,map__77282__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__77274,map__77274__$1,msg,info,reload_info))
,null,null));
});})(s__77277__$1,map__77282,map__77282__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__77274,map__77274__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__77276(cljs.core.rest(s__77277__$1)));
} else {
var G__77740 = cljs.core.rest(s__77277__$1);
s__77277__$1 = G__77740;
continue;
}
} else {
var G__77741 = cljs.core.rest(s__77277__$1);
s__77277__$1 = G__77741;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__77288_77742 = cljs.core.seq(warnings);
var chunk__77289_77743 = null;
var count__77290_77744 = (0);
var i__77291_77745 = (0);
while(true){
if((i__77291_77745 < count__77290_77744)){
var map__77297_77746 = chunk__77289_77743.cljs$core$IIndexed$_nth$arity$2(null,i__77291_77745);
var map__77297_77747__$1 = cljs.core.__destructure_map(map__77297_77746);
var w_77748 = map__77297_77747__$1;
var msg_77749__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77297_77747__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_77750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77297_77747__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_77751 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77297_77747__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_77752 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77297_77747__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_77752)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_77750),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_77751),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_77749__$1)].join(''));


var G__77753 = seq__77288_77742;
var G__77754 = chunk__77289_77743;
var G__77755 = count__77290_77744;
var G__77756 = (i__77291_77745 + (1));
seq__77288_77742 = G__77753;
chunk__77289_77743 = G__77754;
count__77290_77744 = G__77755;
i__77291_77745 = G__77756;
continue;
} else {
var temp__5804__auto___77757 = cljs.core.seq(seq__77288_77742);
if(temp__5804__auto___77757){
var seq__77288_77758__$1 = temp__5804__auto___77757;
if(cljs.core.chunked_seq_QMARK_(seq__77288_77758__$1)){
var c__5568__auto___77759 = cljs.core.chunk_first(seq__77288_77758__$1);
var G__77760 = cljs.core.chunk_rest(seq__77288_77758__$1);
var G__77761 = c__5568__auto___77759;
var G__77762 = cljs.core.count(c__5568__auto___77759);
var G__77763 = (0);
seq__77288_77742 = G__77760;
chunk__77289_77743 = G__77761;
count__77290_77744 = G__77762;
i__77291_77745 = G__77763;
continue;
} else {
var map__77300_77764 = cljs.core.first(seq__77288_77758__$1);
var map__77300_77765__$1 = cljs.core.__destructure_map(map__77300_77764);
var w_77766 = map__77300_77765__$1;
var msg_77767__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77300_77765__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_77768 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77300_77765__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_77769 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77300_77765__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_77770 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77300_77765__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_77770)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_77768),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_77769),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_77767__$1)].join(''));


var G__77771 = cljs.core.next(seq__77288_77758__$1);
var G__77772 = null;
var G__77773 = (0);
var G__77774 = (0);
seq__77288_77742 = G__77771;
chunk__77289_77743 = G__77772;
count__77290_77744 = G__77773;
i__77291_77745 = G__77774;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__77272_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__77272_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__77303){
var map__77304 = p__77303;
var map__77304__$1 = cljs.core.__destructure_map(map__77304);
var msg = map__77304__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77304__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77304__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__77305 = cljs.core.seq(updates);
var chunk__77307 = null;
var count__77308 = (0);
var i__77309 = (0);
while(true){
if((i__77309 < count__77308)){
var path = chunk__77307.cljs$core$IIndexed$_nth$arity$2(null,i__77309);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__77499_77775 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__77503_77776 = null;
var count__77504_77777 = (0);
var i__77505_77778 = (0);
while(true){
if((i__77505_77778 < count__77504_77777)){
var node_77779 = chunk__77503_77776.cljs$core$IIndexed$_nth$arity$2(null,i__77505_77778);
if(cljs.core.not(node_77779.shadow$old)){
var path_match_77780 = shadow.cljs.devtools.client.browser.match_paths(node_77779.getAttribute("href"),path);
if(cljs.core.truth_(path_match_77780)){
var new_link_77781 = (function (){var G__77550 = node_77779.cloneNode(true);
G__77550.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_77780),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__77550;
})();
(node_77779.shadow$old = true);

(new_link_77781.onload = ((function (seq__77499_77775,chunk__77503_77776,count__77504_77777,i__77505_77778,seq__77305,chunk__77307,count__77308,i__77309,new_link_77781,path_match_77780,node_77779,path,map__77304,map__77304__$1,msg,updates,reload_info){
return (function (e){
var seq__77551_77782 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__77553_77783 = null;
var count__77554_77784 = (0);
var i__77555_77785 = (0);
while(true){
if((i__77555_77785 < count__77554_77784)){
var map__77562_77786 = chunk__77553_77783.cljs$core$IIndexed$_nth$arity$2(null,i__77555_77785);
var map__77562_77787__$1 = cljs.core.__destructure_map(map__77562_77786);
var task_77788 = map__77562_77787__$1;
var fn_str_77789 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77562_77787__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_77790 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77562_77787__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_77791 = goog.getObjectByName(fn_str_77789,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_77790)].join(''));

(fn_obj_77791.cljs$core$IFn$_invoke$arity$2 ? fn_obj_77791.cljs$core$IFn$_invoke$arity$2(path,new_link_77781) : fn_obj_77791.call(null,path,new_link_77781));


var G__77792 = seq__77551_77782;
var G__77793 = chunk__77553_77783;
var G__77794 = count__77554_77784;
var G__77795 = (i__77555_77785 + (1));
seq__77551_77782 = G__77792;
chunk__77553_77783 = G__77793;
count__77554_77784 = G__77794;
i__77555_77785 = G__77795;
continue;
} else {
var temp__5804__auto___77796 = cljs.core.seq(seq__77551_77782);
if(temp__5804__auto___77796){
var seq__77551_77797__$1 = temp__5804__auto___77796;
if(cljs.core.chunked_seq_QMARK_(seq__77551_77797__$1)){
var c__5568__auto___77798 = cljs.core.chunk_first(seq__77551_77797__$1);
var G__77799 = cljs.core.chunk_rest(seq__77551_77797__$1);
var G__77800 = c__5568__auto___77798;
var G__77801 = cljs.core.count(c__5568__auto___77798);
var G__77802 = (0);
seq__77551_77782 = G__77799;
chunk__77553_77783 = G__77800;
count__77554_77784 = G__77801;
i__77555_77785 = G__77802;
continue;
} else {
var map__77563_77803 = cljs.core.first(seq__77551_77797__$1);
var map__77563_77804__$1 = cljs.core.__destructure_map(map__77563_77803);
var task_77805 = map__77563_77804__$1;
var fn_str_77806 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77563_77804__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_77807 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77563_77804__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_77808 = goog.getObjectByName(fn_str_77806,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_77807)].join(''));

(fn_obj_77808.cljs$core$IFn$_invoke$arity$2 ? fn_obj_77808.cljs$core$IFn$_invoke$arity$2(path,new_link_77781) : fn_obj_77808.call(null,path,new_link_77781));


var G__77809 = cljs.core.next(seq__77551_77797__$1);
var G__77810 = null;
var G__77811 = (0);
var G__77812 = (0);
seq__77551_77782 = G__77809;
chunk__77553_77783 = G__77810;
count__77554_77784 = G__77811;
i__77555_77785 = G__77812;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_77779);
});})(seq__77499_77775,chunk__77503_77776,count__77504_77777,i__77505_77778,seq__77305,chunk__77307,count__77308,i__77309,new_link_77781,path_match_77780,node_77779,path,map__77304,map__77304__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_77780], 0));

goog.dom.insertSiblingAfter(new_link_77781,node_77779);


var G__77813 = seq__77499_77775;
var G__77814 = chunk__77503_77776;
var G__77815 = count__77504_77777;
var G__77816 = (i__77505_77778 + (1));
seq__77499_77775 = G__77813;
chunk__77503_77776 = G__77814;
count__77504_77777 = G__77815;
i__77505_77778 = G__77816;
continue;
} else {
var G__77817 = seq__77499_77775;
var G__77818 = chunk__77503_77776;
var G__77819 = count__77504_77777;
var G__77820 = (i__77505_77778 + (1));
seq__77499_77775 = G__77817;
chunk__77503_77776 = G__77818;
count__77504_77777 = G__77819;
i__77505_77778 = G__77820;
continue;
}
} else {
var G__77821 = seq__77499_77775;
var G__77822 = chunk__77503_77776;
var G__77823 = count__77504_77777;
var G__77824 = (i__77505_77778 + (1));
seq__77499_77775 = G__77821;
chunk__77503_77776 = G__77822;
count__77504_77777 = G__77823;
i__77505_77778 = G__77824;
continue;
}
} else {
var temp__5804__auto___77825 = cljs.core.seq(seq__77499_77775);
if(temp__5804__auto___77825){
var seq__77499_77826__$1 = temp__5804__auto___77825;
if(cljs.core.chunked_seq_QMARK_(seq__77499_77826__$1)){
var c__5568__auto___77827 = cljs.core.chunk_first(seq__77499_77826__$1);
var G__77828 = cljs.core.chunk_rest(seq__77499_77826__$1);
var G__77829 = c__5568__auto___77827;
var G__77830 = cljs.core.count(c__5568__auto___77827);
var G__77831 = (0);
seq__77499_77775 = G__77828;
chunk__77503_77776 = G__77829;
count__77504_77777 = G__77830;
i__77505_77778 = G__77831;
continue;
} else {
var node_77832 = cljs.core.first(seq__77499_77826__$1);
if(cljs.core.not(node_77832.shadow$old)){
var path_match_77833 = shadow.cljs.devtools.client.browser.match_paths(node_77832.getAttribute("href"),path);
if(cljs.core.truth_(path_match_77833)){
var new_link_77834 = (function (){var G__77570 = node_77832.cloneNode(true);
G__77570.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_77833),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__77570;
})();
(node_77832.shadow$old = true);

(new_link_77834.onload = ((function (seq__77499_77775,chunk__77503_77776,count__77504_77777,i__77505_77778,seq__77305,chunk__77307,count__77308,i__77309,new_link_77834,path_match_77833,node_77832,seq__77499_77826__$1,temp__5804__auto___77825,path,map__77304,map__77304__$1,msg,updates,reload_info){
return (function (e){
var seq__77572_77835 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__77574_77836 = null;
var count__77575_77837 = (0);
var i__77576_77838 = (0);
while(true){
if((i__77576_77838 < count__77575_77837)){
var map__77586_77839 = chunk__77574_77836.cljs$core$IIndexed$_nth$arity$2(null,i__77576_77838);
var map__77586_77840__$1 = cljs.core.__destructure_map(map__77586_77839);
var task_77841 = map__77586_77840__$1;
var fn_str_77842 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77586_77840__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_77843 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77586_77840__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_77844 = goog.getObjectByName(fn_str_77842,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_77843)].join(''));

(fn_obj_77844.cljs$core$IFn$_invoke$arity$2 ? fn_obj_77844.cljs$core$IFn$_invoke$arity$2(path,new_link_77834) : fn_obj_77844.call(null,path,new_link_77834));


var G__77845 = seq__77572_77835;
var G__77846 = chunk__77574_77836;
var G__77847 = count__77575_77837;
var G__77848 = (i__77576_77838 + (1));
seq__77572_77835 = G__77845;
chunk__77574_77836 = G__77846;
count__77575_77837 = G__77847;
i__77576_77838 = G__77848;
continue;
} else {
var temp__5804__auto___77849__$1 = cljs.core.seq(seq__77572_77835);
if(temp__5804__auto___77849__$1){
var seq__77572_77850__$1 = temp__5804__auto___77849__$1;
if(cljs.core.chunked_seq_QMARK_(seq__77572_77850__$1)){
var c__5568__auto___77851 = cljs.core.chunk_first(seq__77572_77850__$1);
var G__77852 = cljs.core.chunk_rest(seq__77572_77850__$1);
var G__77853 = c__5568__auto___77851;
var G__77854 = cljs.core.count(c__5568__auto___77851);
var G__77855 = (0);
seq__77572_77835 = G__77852;
chunk__77574_77836 = G__77853;
count__77575_77837 = G__77854;
i__77576_77838 = G__77855;
continue;
} else {
var map__77587_77856 = cljs.core.first(seq__77572_77850__$1);
var map__77587_77857__$1 = cljs.core.__destructure_map(map__77587_77856);
var task_77858 = map__77587_77857__$1;
var fn_str_77859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77587_77857__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_77860 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77587_77857__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_77861 = goog.getObjectByName(fn_str_77859,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_77860)].join(''));

(fn_obj_77861.cljs$core$IFn$_invoke$arity$2 ? fn_obj_77861.cljs$core$IFn$_invoke$arity$2(path,new_link_77834) : fn_obj_77861.call(null,path,new_link_77834));


var G__77862 = cljs.core.next(seq__77572_77850__$1);
var G__77863 = null;
var G__77864 = (0);
var G__77865 = (0);
seq__77572_77835 = G__77862;
chunk__77574_77836 = G__77863;
count__77575_77837 = G__77864;
i__77576_77838 = G__77865;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_77832);
});})(seq__77499_77775,chunk__77503_77776,count__77504_77777,i__77505_77778,seq__77305,chunk__77307,count__77308,i__77309,new_link_77834,path_match_77833,node_77832,seq__77499_77826__$1,temp__5804__auto___77825,path,map__77304,map__77304__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_77833], 0));

goog.dom.insertSiblingAfter(new_link_77834,node_77832);


var G__77866 = cljs.core.next(seq__77499_77826__$1);
var G__77867 = null;
var G__77868 = (0);
var G__77869 = (0);
seq__77499_77775 = G__77866;
chunk__77503_77776 = G__77867;
count__77504_77777 = G__77868;
i__77505_77778 = G__77869;
continue;
} else {
var G__77870 = cljs.core.next(seq__77499_77826__$1);
var G__77871 = null;
var G__77872 = (0);
var G__77873 = (0);
seq__77499_77775 = G__77870;
chunk__77503_77776 = G__77871;
count__77504_77777 = G__77872;
i__77505_77778 = G__77873;
continue;
}
} else {
var G__77874 = cljs.core.next(seq__77499_77826__$1);
var G__77875 = null;
var G__77876 = (0);
var G__77877 = (0);
seq__77499_77775 = G__77874;
chunk__77503_77776 = G__77875;
count__77504_77777 = G__77876;
i__77505_77778 = G__77877;
continue;
}
}
} else {
}
}
break;
}


var G__77878 = seq__77305;
var G__77879 = chunk__77307;
var G__77880 = count__77308;
var G__77881 = (i__77309 + (1));
seq__77305 = G__77878;
chunk__77307 = G__77879;
count__77308 = G__77880;
i__77309 = G__77881;
continue;
} else {
var G__77882 = seq__77305;
var G__77883 = chunk__77307;
var G__77884 = count__77308;
var G__77885 = (i__77309 + (1));
seq__77305 = G__77882;
chunk__77307 = G__77883;
count__77308 = G__77884;
i__77309 = G__77885;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__77305);
if(temp__5804__auto__){
var seq__77305__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77305__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__77305__$1);
var G__77886 = cljs.core.chunk_rest(seq__77305__$1);
var G__77887 = c__5568__auto__;
var G__77888 = cljs.core.count(c__5568__auto__);
var G__77889 = (0);
seq__77305 = G__77886;
chunk__77307 = G__77887;
count__77308 = G__77888;
i__77309 = G__77889;
continue;
} else {
var path = cljs.core.first(seq__77305__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__77588_77890 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__77592_77891 = null;
var count__77593_77892 = (0);
var i__77594_77893 = (0);
while(true){
if((i__77594_77893 < count__77593_77892)){
var node_77894 = chunk__77592_77891.cljs$core$IIndexed$_nth$arity$2(null,i__77594_77893);
if(cljs.core.not(node_77894.shadow$old)){
var path_match_77895 = shadow.cljs.devtools.client.browser.match_paths(node_77894.getAttribute("href"),path);
if(cljs.core.truth_(path_match_77895)){
var new_link_77896 = (function (){var G__77639 = node_77894.cloneNode(true);
G__77639.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_77895),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__77639;
})();
(node_77894.shadow$old = true);

(new_link_77896.onload = ((function (seq__77588_77890,chunk__77592_77891,count__77593_77892,i__77594_77893,seq__77305,chunk__77307,count__77308,i__77309,new_link_77896,path_match_77895,node_77894,path,seq__77305__$1,temp__5804__auto__,map__77304,map__77304__$1,msg,updates,reload_info){
return (function (e){
var seq__77642_77897 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__77644_77898 = null;
var count__77645_77899 = (0);
var i__77646_77900 = (0);
while(true){
if((i__77646_77900 < count__77645_77899)){
var map__77654_77901 = chunk__77644_77898.cljs$core$IIndexed$_nth$arity$2(null,i__77646_77900);
var map__77654_77902__$1 = cljs.core.__destructure_map(map__77654_77901);
var task_77903 = map__77654_77902__$1;
var fn_str_77904 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77654_77902__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_77905 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77654_77902__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_77906 = goog.getObjectByName(fn_str_77904,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_77905)].join(''));

(fn_obj_77906.cljs$core$IFn$_invoke$arity$2 ? fn_obj_77906.cljs$core$IFn$_invoke$arity$2(path,new_link_77896) : fn_obj_77906.call(null,path,new_link_77896));


var G__77907 = seq__77642_77897;
var G__77908 = chunk__77644_77898;
var G__77909 = count__77645_77899;
var G__77910 = (i__77646_77900 + (1));
seq__77642_77897 = G__77907;
chunk__77644_77898 = G__77908;
count__77645_77899 = G__77909;
i__77646_77900 = G__77910;
continue;
} else {
var temp__5804__auto___77911__$1 = cljs.core.seq(seq__77642_77897);
if(temp__5804__auto___77911__$1){
var seq__77642_77912__$1 = temp__5804__auto___77911__$1;
if(cljs.core.chunked_seq_QMARK_(seq__77642_77912__$1)){
var c__5568__auto___77913 = cljs.core.chunk_first(seq__77642_77912__$1);
var G__77914 = cljs.core.chunk_rest(seq__77642_77912__$1);
var G__77915 = c__5568__auto___77913;
var G__77916 = cljs.core.count(c__5568__auto___77913);
var G__77917 = (0);
seq__77642_77897 = G__77914;
chunk__77644_77898 = G__77915;
count__77645_77899 = G__77916;
i__77646_77900 = G__77917;
continue;
} else {
var map__77660_77918 = cljs.core.first(seq__77642_77912__$1);
var map__77660_77919__$1 = cljs.core.__destructure_map(map__77660_77918);
var task_77920 = map__77660_77919__$1;
var fn_str_77921 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77660_77919__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_77922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77660_77919__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_77923 = goog.getObjectByName(fn_str_77921,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_77922)].join(''));

(fn_obj_77923.cljs$core$IFn$_invoke$arity$2 ? fn_obj_77923.cljs$core$IFn$_invoke$arity$2(path,new_link_77896) : fn_obj_77923.call(null,path,new_link_77896));


var G__77924 = cljs.core.next(seq__77642_77912__$1);
var G__77925 = null;
var G__77926 = (0);
var G__77927 = (0);
seq__77642_77897 = G__77924;
chunk__77644_77898 = G__77925;
count__77645_77899 = G__77926;
i__77646_77900 = G__77927;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_77894);
});})(seq__77588_77890,chunk__77592_77891,count__77593_77892,i__77594_77893,seq__77305,chunk__77307,count__77308,i__77309,new_link_77896,path_match_77895,node_77894,path,seq__77305__$1,temp__5804__auto__,map__77304,map__77304__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_77895], 0));

goog.dom.insertSiblingAfter(new_link_77896,node_77894);


var G__77928 = seq__77588_77890;
var G__77929 = chunk__77592_77891;
var G__77930 = count__77593_77892;
var G__77931 = (i__77594_77893 + (1));
seq__77588_77890 = G__77928;
chunk__77592_77891 = G__77929;
count__77593_77892 = G__77930;
i__77594_77893 = G__77931;
continue;
} else {
var G__77932 = seq__77588_77890;
var G__77933 = chunk__77592_77891;
var G__77934 = count__77593_77892;
var G__77935 = (i__77594_77893 + (1));
seq__77588_77890 = G__77932;
chunk__77592_77891 = G__77933;
count__77593_77892 = G__77934;
i__77594_77893 = G__77935;
continue;
}
} else {
var G__77936 = seq__77588_77890;
var G__77937 = chunk__77592_77891;
var G__77938 = count__77593_77892;
var G__77939 = (i__77594_77893 + (1));
seq__77588_77890 = G__77936;
chunk__77592_77891 = G__77937;
count__77593_77892 = G__77938;
i__77594_77893 = G__77939;
continue;
}
} else {
var temp__5804__auto___77940__$1 = cljs.core.seq(seq__77588_77890);
if(temp__5804__auto___77940__$1){
var seq__77588_77941__$1 = temp__5804__auto___77940__$1;
if(cljs.core.chunked_seq_QMARK_(seq__77588_77941__$1)){
var c__5568__auto___77942 = cljs.core.chunk_first(seq__77588_77941__$1);
var G__77943 = cljs.core.chunk_rest(seq__77588_77941__$1);
var G__77944 = c__5568__auto___77942;
var G__77945 = cljs.core.count(c__5568__auto___77942);
var G__77946 = (0);
seq__77588_77890 = G__77943;
chunk__77592_77891 = G__77944;
count__77593_77892 = G__77945;
i__77594_77893 = G__77946;
continue;
} else {
var node_77947 = cljs.core.first(seq__77588_77941__$1);
if(cljs.core.not(node_77947.shadow$old)){
var path_match_77948 = shadow.cljs.devtools.client.browser.match_paths(node_77947.getAttribute("href"),path);
if(cljs.core.truth_(path_match_77948)){
var new_link_77949 = (function (){var G__77662 = node_77947.cloneNode(true);
G__77662.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_77948),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__77662;
})();
(node_77947.shadow$old = true);

(new_link_77949.onload = ((function (seq__77588_77890,chunk__77592_77891,count__77593_77892,i__77594_77893,seq__77305,chunk__77307,count__77308,i__77309,new_link_77949,path_match_77948,node_77947,seq__77588_77941__$1,temp__5804__auto___77940__$1,path,seq__77305__$1,temp__5804__auto__,map__77304,map__77304__$1,msg,updates,reload_info){
return (function (e){
var seq__77663_77950 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__77665_77951 = null;
var count__77666_77952 = (0);
var i__77667_77953 = (0);
while(true){
if((i__77667_77953 < count__77666_77952)){
var map__77678_77954 = chunk__77665_77951.cljs$core$IIndexed$_nth$arity$2(null,i__77667_77953);
var map__77678_77955__$1 = cljs.core.__destructure_map(map__77678_77954);
var task_77956 = map__77678_77955__$1;
var fn_str_77957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77678_77955__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_77958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77678_77955__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_77959 = goog.getObjectByName(fn_str_77957,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_77958)].join(''));

(fn_obj_77959.cljs$core$IFn$_invoke$arity$2 ? fn_obj_77959.cljs$core$IFn$_invoke$arity$2(path,new_link_77949) : fn_obj_77959.call(null,path,new_link_77949));


var G__77960 = seq__77663_77950;
var G__77961 = chunk__77665_77951;
var G__77962 = count__77666_77952;
var G__77963 = (i__77667_77953 + (1));
seq__77663_77950 = G__77960;
chunk__77665_77951 = G__77961;
count__77666_77952 = G__77962;
i__77667_77953 = G__77963;
continue;
} else {
var temp__5804__auto___77964__$2 = cljs.core.seq(seq__77663_77950);
if(temp__5804__auto___77964__$2){
var seq__77663_77965__$1 = temp__5804__auto___77964__$2;
if(cljs.core.chunked_seq_QMARK_(seq__77663_77965__$1)){
var c__5568__auto___77966 = cljs.core.chunk_first(seq__77663_77965__$1);
var G__77967 = cljs.core.chunk_rest(seq__77663_77965__$1);
var G__77968 = c__5568__auto___77966;
var G__77969 = cljs.core.count(c__5568__auto___77966);
var G__77970 = (0);
seq__77663_77950 = G__77967;
chunk__77665_77951 = G__77968;
count__77666_77952 = G__77969;
i__77667_77953 = G__77970;
continue;
} else {
var map__77684_77971 = cljs.core.first(seq__77663_77965__$1);
var map__77684_77972__$1 = cljs.core.__destructure_map(map__77684_77971);
var task_77973 = map__77684_77972__$1;
var fn_str_77974 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77684_77972__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_77975 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77684_77972__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_77976 = goog.getObjectByName(fn_str_77974,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_77975)].join(''));

(fn_obj_77976.cljs$core$IFn$_invoke$arity$2 ? fn_obj_77976.cljs$core$IFn$_invoke$arity$2(path,new_link_77949) : fn_obj_77976.call(null,path,new_link_77949));


var G__77977 = cljs.core.next(seq__77663_77965__$1);
var G__77978 = null;
var G__77979 = (0);
var G__77980 = (0);
seq__77663_77950 = G__77977;
chunk__77665_77951 = G__77978;
count__77666_77952 = G__77979;
i__77667_77953 = G__77980;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_77947);
});})(seq__77588_77890,chunk__77592_77891,count__77593_77892,i__77594_77893,seq__77305,chunk__77307,count__77308,i__77309,new_link_77949,path_match_77948,node_77947,seq__77588_77941__$1,temp__5804__auto___77940__$1,path,seq__77305__$1,temp__5804__auto__,map__77304,map__77304__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_77948], 0));

goog.dom.insertSiblingAfter(new_link_77949,node_77947);


var G__77981 = cljs.core.next(seq__77588_77941__$1);
var G__77982 = null;
var G__77983 = (0);
var G__77984 = (0);
seq__77588_77890 = G__77981;
chunk__77592_77891 = G__77982;
count__77593_77892 = G__77983;
i__77594_77893 = G__77984;
continue;
} else {
var G__77985 = cljs.core.next(seq__77588_77941__$1);
var G__77986 = null;
var G__77987 = (0);
var G__77988 = (0);
seq__77588_77890 = G__77985;
chunk__77592_77891 = G__77986;
count__77593_77892 = G__77987;
i__77594_77893 = G__77988;
continue;
}
} else {
var G__77989 = cljs.core.next(seq__77588_77941__$1);
var G__77990 = null;
var G__77991 = (0);
var G__77992 = (0);
seq__77588_77890 = G__77989;
chunk__77592_77891 = G__77990;
count__77593_77892 = G__77991;
i__77594_77893 = G__77992;
continue;
}
}
} else {
}
}
break;
}


var G__77993 = cljs.core.next(seq__77305__$1);
var G__77994 = null;
var G__77995 = (0);
var G__77996 = (0);
seq__77305 = G__77993;
chunk__77307 = G__77994;
count__77308 = G__77995;
i__77309 = G__77996;
continue;
} else {
var G__77997 = cljs.core.next(seq__77305__$1);
var G__77998 = null;
var G__77999 = (0);
var G__78000 = (0);
seq__77305 = G__77997;
chunk__77307 = G__77998;
count__77308 = G__77999;
i__77309 = G__78000;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__77688){
var map__77689 = p__77688;
var map__77689__$1 = cljs.core.__destructure_map(map__77689);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77689__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__77690){
var map__77691 = p__77690;
var map__77691__$1 = cljs.core.__destructure_map(map__77691);
var _ = map__77691__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77691__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__77692,done,error){
var map__77693 = p__77692;
var map__77693__$1 = cljs.core.__destructure_map(map__77693);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77693__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__77694,done,error){
var map__77695 = p__77694;
var map__77695__$1 = cljs.core.__destructure_map(map__77695);
var msg = map__77695__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77695__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77695__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77695__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__77696){
var map__77697 = p__77696;
var map__77697__$1 = cljs.core.__destructure_map(map__77697);
var src = map__77697__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77697__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__77698 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__77698) : done.call(null,G__77698));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__77699){
var map__77700 = p__77699;
var map__77700__$1 = cljs.core.__destructure_map(map__77700);
var msg__$1 = map__77700__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77700__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e77701){var ex = e77701;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__77702){
var map__77703 = p__77702;
var map__77703__$1 = cljs.core.__destructure_map(map__77703);
var env = map__77703__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77703__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__77704){
var map__77705 = p__77704;
var map__77705__$1 = cljs.core.__destructure_map(map__77705);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77705__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77705__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__77706){
var map__77707 = p__77706;
var map__77707__$1 = cljs.core.__destructure_map(map__77707);
var svc = map__77707__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77707__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
