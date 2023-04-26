goog.provide('re_frisk.stat');
re_frisk.stat.assoc_map = (function re_frisk$stat$assoc_map(acc,key){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cnt","cnt",283978798),(0),new cljs.core.Keyword(null,"ms","ms",-1152709733),(0)], null));
});
re_frisk.stat.get_re_frame_handlers = (function re_frisk$stat$get_re_frame_handlers(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fx","fx",-1237829572),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frisk.stat.assoc_map,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"fx","fx",-1237829572).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler)),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),new cljs.core.Keyword(null,"db","db",993250759)], 0)))),new cljs.core.Keyword(null,"cofx","cofx",2013202907),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frisk.stat.assoc_map,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cofx","cofx",2013202907).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler)),new cljs.core.Keyword(null,"db","db",993250759)))),new cljs.core.Keyword(null,"event","event",301435442),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frisk.stat.assoc_map,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler)))),new cljs.core.Keyword(null,"sub","sub",-2093760025),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frisk.stat.assoc_map,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(new cljs.core.Keyword(null,"sub","sub",-2093760025).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler))))], null);
});
re_frisk.stat.init_stat = (function re_frisk$stat$init_stat(re_frame_data){
if(cljs.core.empty_QMARK_(cljs.core.deref(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data)))){
return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),re_frisk.stat.get_re_frame_handlers());
} else {
return null;
}
});
re_frisk.stat.update_trace_stat = (function re_frisk$stat$update_trace_stat(re_frame_data,traces){
var seq__73867 = cljs.core.seq(traces);
var chunk__73868 = null;
var count__73869 = (0);
var i__73870 = (0);
while(true){
if((i__73870 < count__73869)){
var map__73940 = chunk__73868.cljs$core$IIndexed$_nth$arity$2(null,i__73870);
var map__73940__$1 = cljs.core.__destructure_map(map__73940);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73940__$1,new cljs.core.Keyword(null,"event","event",301435442));
var subs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73940__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73940__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var effects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73940__$1,new cljs.core.Keyword(null,"effects","effects",-282369292));
var coeffects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73940__$1,new cljs.core.Keyword(null,"coeffects","coeffects",497912985));
if(cljs.core.truth_(event)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration], 0));

if((cljs.core.count(effects) > (0))){
var seq__73941_73992 = cljs.core.seq(cljs.core.keys(effects));
var chunk__73942_73993 = null;
var count__73943_73994 = (0);
var i__73944_73995 = (0);
while(true){
if((i__73944_73995 < count__73943_73994)){
var key_73996 = chunk__73942_73993.cljs$core$IIndexed$_nth$arity$2(null,i__73944_73995);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_73996,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__73997 = seq__73941_73992;
var G__73998 = chunk__73942_73993;
var G__73999 = count__73943_73994;
var G__74000 = (i__73944_73995 + (1));
seq__73941_73992 = G__73997;
chunk__73942_73993 = G__73998;
count__73943_73994 = G__73999;
i__73944_73995 = G__74000;
continue;
} else {
var temp__5804__auto___74001 = cljs.core.seq(seq__73941_73992);
if(temp__5804__auto___74001){
var seq__73941_74002__$1 = temp__5804__auto___74001;
if(cljs.core.chunked_seq_QMARK_(seq__73941_74002__$1)){
var c__5568__auto___74003 = cljs.core.chunk_first(seq__73941_74002__$1);
var G__74004 = cljs.core.chunk_rest(seq__73941_74002__$1);
var G__74005 = c__5568__auto___74003;
var G__74006 = cljs.core.count(c__5568__auto___74003);
var G__74007 = (0);
seq__73941_73992 = G__74004;
chunk__73942_73993 = G__74005;
count__73943_73994 = G__74006;
i__73944_73995 = G__74007;
continue;
} else {
var key_74008 = cljs.core.first(seq__73941_74002__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_74008,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__74009 = cljs.core.next(seq__73941_74002__$1);
var G__74010 = null;
var G__74011 = (0);
var G__74012 = (0);
seq__73941_73992 = G__74009;
chunk__73942_73993 = G__74010;
count__73943_73994 = G__74011;
i__73944_73995 = G__74012;
continue;
}
} else {
}
}
break;
}
} else {
}

if((cljs.core.count(coeffects) > (0))){
var seq__73949_74013 = cljs.core.seq(cljs.core.keys(coeffects));
var chunk__73950_74014 = null;
var count__73951_74015 = (0);
var i__73952_74016 = (0);
while(true){
if((i__73952_74016 < count__73951_74015)){
var key_74017 = chunk__73950_74014.cljs$core$IIndexed$_nth$arity$2(null,i__73952_74016);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_74017,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__74018 = seq__73949_74013;
var G__74019 = chunk__73950_74014;
var G__74020 = count__73951_74015;
var G__74021 = (i__73952_74016 + (1));
seq__73949_74013 = G__74018;
chunk__73950_74014 = G__74019;
count__73951_74015 = G__74020;
i__73952_74016 = G__74021;
continue;
} else {
var temp__5804__auto___74022 = cljs.core.seq(seq__73949_74013);
if(temp__5804__auto___74022){
var seq__73949_74023__$1 = temp__5804__auto___74022;
if(cljs.core.chunked_seq_QMARK_(seq__73949_74023__$1)){
var c__5568__auto___74024 = cljs.core.chunk_first(seq__73949_74023__$1);
var G__74025 = cljs.core.chunk_rest(seq__73949_74023__$1);
var G__74026 = c__5568__auto___74024;
var G__74027 = cljs.core.count(c__5568__auto___74024);
var G__74028 = (0);
seq__73949_74013 = G__74025;
chunk__73950_74014 = G__74026;
count__73951_74015 = G__74027;
i__73952_74016 = G__74028;
continue;
} else {
var key_74029 = cljs.core.first(seq__73949_74023__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_74029,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__74030 = cljs.core.next(seq__73949_74023__$1);
var G__74031 = null;
var G__74032 = (0);
var G__74033 = (0);
seq__73949_74013 = G__74030;
chunk__73950_74014 = G__74031;
count__73951_74015 = G__74032;
i__73952_74016 = G__74033;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

if(cljs.core.seq(subs)){
var seq__73953_74034 = cljs.core.seq(subs);
var chunk__73954_74035 = null;
var count__73955_74036 = (0);
var i__73956_74037 = (0);
while(true){
if((i__73956_74037 < count__73955_74036)){
var map__73961_74038 = chunk__73954_74035.cljs$core$IIndexed$_nth$arity$2(null,i__73956_74037);
var map__73961_74039__$1 = cljs.core.__destructure_map(map__73961_74038);
var op_type_74040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73961_74039__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_74041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73961_74039__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_74042__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73961_74039__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_74040,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_74041,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_74041,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_74042__$1], 0));
} else {
}


var G__74043 = seq__73953_74034;
var G__74044 = chunk__73954_74035;
var G__74045 = count__73955_74036;
var G__74046 = (i__73956_74037 + (1));
seq__73953_74034 = G__74043;
chunk__73954_74035 = G__74044;
count__73955_74036 = G__74045;
i__73956_74037 = G__74046;
continue;
} else {
var temp__5804__auto___74047 = cljs.core.seq(seq__73953_74034);
if(temp__5804__auto___74047){
var seq__73953_74048__$1 = temp__5804__auto___74047;
if(cljs.core.chunked_seq_QMARK_(seq__73953_74048__$1)){
var c__5568__auto___74049 = cljs.core.chunk_first(seq__73953_74048__$1);
var G__74050 = cljs.core.chunk_rest(seq__73953_74048__$1);
var G__74051 = c__5568__auto___74049;
var G__74052 = cljs.core.count(c__5568__auto___74049);
var G__74053 = (0);
seq__73953_74034 = G__74050;
chunk__73954_74035 = G__74051;
count__73955_74036 = G__74052;
i__73956_74037 = G__74053;
continue;
} else {
var map__73970_74054 = cljs.core.first(seq__73953_74048__$1);
var map__73970_74055__$1 = cljs.core.__destructure_map(map__73970_74054);
var op_type_74056 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73970_74055__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_74057 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73970_74055__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_74058__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73970_74055__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_74056,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_74057,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_74057,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_74058__$1], 0));
} else {
}


var G__74059 = cljs.core.next(seq__73953_74048__$1);
var G__74060 = null;
var G__74061 = (0);
var G__74062 = (0);
seq__73953_74034 = G__74059;
chunk__73954_74035 = G__74060;
count__73955_74036 = G__74061;
i__73956_74037 = G__74062;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__74063 = seq__73867;
var G__74064 = chunk__73868;
var G__74065 = count__73869;
var G__74066 = (i__73870 + (1));
seq__73867 = G__74063;
chunk__73868 = G__74064;
count__73869 = G__74065;
i__73870 = G__74066;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__73867);
if(temp__5804__auto__){
var seq__73867__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73867__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__73867__$1);
var G__74067 = cljs.core.chunk_rest(seq__73867__$1);
var G__74068 = c__5568__auto__;
var G__74069 = cljs.core.count(c__5568__auto__);
var G__74070 = (0);
seq__73867 = G__74067;
chunk__73868 = G__74068;
count__73869 = G__74069;
i__73870 = G__74070;
continue;
} else {
var map__73972 = cljs.core.first(seq__73867__$1);
var map__73972__$1 = cljs.core.__destructure_map(map__73972);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73972__$1,new cljs.core.Keyword(null,"event","event",301435442));
var subs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73972__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73972__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var effects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73972__$1,new cljs.core.Keyword(null,"effects","effects",-282369292));
var coeffects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73972__$1,new cljs.core.Keyword(null,"coeffects","coeffects",497912985));
if(cljs.core.truth_(event)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration], 0));

if((cljs.core.count(effects) > (0))){
var seq__73975_74071 = cljs.core.seq(cljs.core.keys(effects));
var chunk__73976_74072 = null;
var count__73977_74073 = (0);
var i__73978_74074 = (0);
while(true){
if((i__73978_74074 < count__73977_74073)){
var key_74075 = chunk__73976_74072.cljs$core$IIndexed$_nth$arity$2(null,i__73978_74074);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_74075,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__74076 = seq__73975_74071;
var G__74077 = chunk__73976_74072;
var G__74078 = count__73977_74073;
var G__74079 = (i__73978_74074 + (1));
seq__73975_74071 = G__74076;
chunk__73976_74072 = G__74077;
count__73977_74073 = G__74078;
i__73978_74074 = G__74079;
continue;
} else {
var temp__5804__auto___74080__$1 = cljs.core.seq(seq__73975_74071);
if(temp__5804__auto___74080__$1){
var seq__73975_74081__$1 = temp__5804__auto___74080__$1;
if(cljs.core.chunked_seq_QMARK_(seq__73975_74081__$1)){
var c__5568__auto___74082 = cljs.core.chunk_first(seq__73975_74081__$1);
var G__74083 = cljs.core.chunk_rest(seq__73975_74081__$1);
var G__74084 = c__5568__auto___74082;
var G__74085 = cljs.core.count(c__5568__auto___74082);
var G__74086 = (0);
seq__73975_74071 = G__74083;
chunk__73976_74072 = G__74084;
count__73977_74073 = G__74085;
i__73978_74074 = G__74086;
continue;
} else {
var key_74087 = cljs.core.first(seq__73975_74081__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_74087,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__74088 = cljs.core.next(seq__73975_74081__$1);
var G__74089 = null;
var G__74090 = (0);
var G__74091 = (0);
seq__73975_74071 = G__74088;
chunk__73976_74072 = G__74089;
count__73977_74073 = G__74090;
i__73978_74074 = G__74091;
continue;
}
} else {
}
}
break;
}
} else {
}

if((cljs.core.count(coeffects) > (0))){
var seq__73980_74092 = cljs.core.seq(cljs.core.keys(coeffects));
var chunk__73981_74093 = null;
var count__73982_74094 = (0);
var i__73983_74095 = (0);
while(true){
if((i__73983_74095 < count__73982_74094)){
var key_74096 = chunk__73981_74093.cljs$core$IIndexed$_nth$arity$2(null,i__73983_74095);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_74096,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__74097 = seq__73980_74092;
var G__74098 = chunk__73981_74093;
var G__74099 = count__73982_74094;
var G__74100 = (i__73983_74095 + (1));
seq__73980_74092 = G__74097;
chunk__73981_74093 = G__74098;
count__73982_74094 = G__74099;
i__73983_74095 = G__74100;
continue;
} else {
var temp__5804__auto___74101__$1 = cljs.core.seq(seq__73980_74092);
if(temp__5804__auto___74101__$1){
var seq__73980_74102__$1 = temp__5804__auto___74101__$1;
if(cljs.core.chunked_seq_QMARK_(seq__73980_74102__$1)){
var c__5568__auto___74103 = cljs.core.chunk_first(seq__73980_74102__$1);
var G__74104 = cljs.core.chunk_rest(seq__73980_74102__$1);
var G__74105 = c__5568__auto___74103;
var G__74106 = cljs.core.count(c__5568__auto___74103);
var G__74107 = (0);
seq__73980_74092 = G__74104;
chunk__73981_74093 = G__74105;
count__73982_74094 = G__74106;
i__73983_74095 = G__74107;
continue;
} else {
var key_74108 = cljs.core.first(seq__73980_74102__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_74108,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__74109 = cljs.core.next(seq__73980_74102__$1);
var G__74110 = null;
var G__74111 = (0);
var G__74112 = (0);
seq__73980_74092 = G__74109;
chunk__73981_74093 = G__74110;
count__73982_74094 = G__74111;
i__73983_74095 = G__74112;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

if(cljs.core.seq(subs)){
var seq__73984_74113 = cljs.core.seq(subs);
var chunk__73985_74114 = null;
var count__73986_74115 = (0);
var i__73987_74116 = (0);
while(true){
if((i__73987_74116 < count__73986_74115)){
var map__73990_74117 = chunk__73985_74114.cljs$core$IIndexed$_nth$arity$2(null,i__73987_74116);
var map__73990_74118__$1 = cljs.core.__destructure_map(map__73990_74117);
var op_type_74119 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73990_74118__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_74120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73990_74118__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_74121__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73990_74118__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_74119,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_74120,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_74120,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_74121__$1], 0));
} else {
}


var G__74122 = seq__73984_74113;
var G__74123 = chunk__73985_74114;
var G__74124 = count__73986_74115;
var G__74125 = (i__73987_74116 + (1));
seq__73984_74113 = G__74122;
chunk__73985_74114 = G__74123;
count__73986_74115 = G__74124;
i__73987_74116 = G__74125;
continue;
} else {
var temp__5804__auto___74126__$1 = cljs.core.seq(seq__73984_74113);
if(temp__5804__auto___74126__$1){
var seq__73984_74127__$1 = temp__5804__auto___74126__$1;
if(cljs.core.chunked_seq_QMARK_(seq__73984_74127__$1)){
var c__5568__auto___74128 = cljs.core.chunk_first(seq__73984_74127__$1);
var G__74129 = cljs.core.chunk_rest(seq__73984_74127__$1);
var G__74130 = c__5568__auto___74128;
var G__74131 = cljs.core.count(c__5568__auto___74128);
var G__74132 = (0);
seq__73984_74113 = G__74129;
chunk__73985_74114 = G__74130;
count__73986_74115 = G__74131;
i__73987_74116 = G__74132;
continue;
} else {
var map__73991_74133 = cljs.core.first(seq__73984_74127__$1);
var map__73991_74134__$1 = cljs.core.__destructure_map(map__73991_74133);
var op_type_74135 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73991_74134__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_74136 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73991_74134__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_74137__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73991_74134__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_74135,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_74136,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_74136,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_74137__$1], 0));
} else {
}


var G__74138 = cljs.core.next(seq__73984_74127__$1);
var G__74139 = null;
var G__74140 = (0);
var G__74141 = (0);
seq__73984_74113 = G__74138;
chunk__73985_74114 = G__74139;
count__73986_74115 = G__74140;
i__73987_74116 = G__74141;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__74142 = cljs.core.next(seq__73867__$1);
var G__74143 = null;
var G__74144 = (0);
var G__74145 = (0);
seq__73867 = G__74142;
chunk__73868 = G__74143;
count__73869 = G__74144;
i__73870 = G__74145;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frisk.stat.update_event_stat = (function re_frisk$stat$update_event_stat(re_frame_data,event){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);
});

//# sourceMappingURL=re_frisk.stat.js.map
