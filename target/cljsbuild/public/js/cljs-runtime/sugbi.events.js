goog.provide('sugbi.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("common","navigate","common/navigate",-1770818836),(function (db,p__79503){
var vec__79504 = p__79503;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79504,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79504,(1),null);
var old_match = new cljs.core.Keyword("common","route","common/route",1651124616).cljs$core$IFn$_invoke$arity$1(db);
var new_match = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(match,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),reitit.frontend.controllers.apply_controllers(new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(old_match),match));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("common","route","common/route",1651124616),new_match);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("common","navigate-fx!","common/navigate-fx!",-1088243503),(function (p__79508){
var vec__79509 = p__79508;
var seq__79510 = cljs.core.seq(vec__79509);
var first__79511 = cljs.core.first(seq__79510);
var seq__79510__$1 = cljs.core.next(seq__79510);
var k = first__79511;
var vec__79512 = seq__79510__$1;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79512,(0),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79512,(1),null);
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$3(k,params,query);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("common","navigate!","common/navigate!",1409668023),(function (_,p__79515){
var vec__79516 = p__79515;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79516,(0),null);
var url_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79516,(1),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79516,(2),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79516,(3),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("common","navigate-fx!","common/navigate-fx!",-1088243503),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [url_key,params,query], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-docs","set-docs",405672054),(function (db,p__79519){
var vec__79520 = p__79519;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79520,(0),null);
var docs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79520,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"docs","docs",-1974280502),docs);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fetch-docs","fetch-docs",1057143748),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"/docs",new cljs.core.Keyword(null,"response-format","response-format",1664465322),(ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.raw_response_format.call(null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-docs","set-docs",405672054)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("common","set-error","common/set-error",-1337739361),(function (db,p__79523){
var vec__79524 = p__79523;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79524,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79524,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("common","error","common/error",-1805182973),error);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("page","init-home","page/init-home",-915420304),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch-docs","fetch-docs",1057143748)], null)], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("common","route","common/route",1651124616),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword("common","route","common/route",1651124616).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("common","page-id","common/page-id",-1732721743),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("common","route","common/route",1651124616)], null),(function (route,_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("common","page","common/page",-2099452134),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("common","route","common/route",1651124616)], null),(function (route,_){
return new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"docs","docs",-1974280502),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"docs","docs",-1974280502).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("common","error","common/error",-1805182973),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword("common","error","common/error",-1805182973).cljs$core$IFn$_invoke$arity$1(db);
})], 0));

//# sourceMappingURL=sugbi.events.js.map
