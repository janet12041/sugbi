goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__77008,p__77009){
var map__77010 = p__77008;
var map__77010__$1 = cljs.core.__destructure_map(map__77010);
var svc = map__77010__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77010__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77010__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77010__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__77011 = p__77009;
var map__77011__$1 = cljs.core.__destructure_map(map__77011);
var msg = map__77011__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77011__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77011__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77011__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77011__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__77013,p__77014){
var map__77015 = p__77013;
var map__77015__$1 = cljs.core.__destructure_map(map__77015);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77015__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__77016 = p__77014;
var map__77016__$1 = cljs.core.__destructure_map(map__77016);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77016__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__77025,p__77026){
var map__77027 = p__77025;
var map__77027__$1 = cljs.core.__destructure_map(map__77027);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77027__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77027__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__77028 = p__77026;
var map__77028__$1 = cljs.core.__destructure_map(map__77028);
var msg = map__77028__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77028__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__77032,tid){
var map__77033 = p__77032;
var map__77033__$1 = cljs.core.__destructure_map(map__77033);
var svc = map__77033__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77033__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__77042 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__77043 = null;
var count__77044 = (0);
var i__77045 = (0);
while(true){
if((i__77045 < count__77044)){
var vec__77052 = chunk__77043.cljs$core$IIndexed$_nth$arity$2(null,i__77045);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77052,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77052,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__77066 = seq__77042;
var G__77067 = chunk__77043;
var G__77068 = count__77044;
var G__77069 = (i__77045 + (1));
seq__77042 = G__77066;
chunk__77043 = G__77067;
count__77044 = G__77068;
i__77045 = G__77069;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__77042);
if(temp__5804__auto__){
var seq__77042__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77042__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__77042__$1);
var G__77070 = cljs.core.chunk_rest(seq__77042__$1);
var G__77071 = c__5568__auto__;
var G__77072 = cljs.core.count(c__5568__auto__);
var G__77073 = (0);
seq__77042 = G__77070;
chunk__77043 = G__77071;
count__77044 = G__77072;
i__77045 = G__77073;
continue;
} else {
var vec__77055 = cljs.core.first(seq__77042__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77055,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77055,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__77074 = cljs.core.next(seq__77042__$1);
var G__77075 = null;
var G__77076 = (0);
var G__77077 = (0);
seq__77042 = G__77074;
chunk__77043 = G__77075;
count__77044 = G__77076;
i__77045 = G__77077;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__77034_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__77034_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__77035_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__77035_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__77036_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__77036_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__77037_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__77037_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__77058){
var map__77059 = p__77058;
var map__77059__$1 = cljs.core.__destructure_map(map__77059);
var svc = map__77059__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77059__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77059__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
