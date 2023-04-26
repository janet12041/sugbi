goog.provide('day8.re_frame.http_fx');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__57593){
var vec__57596 = p__57593;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57596,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57596,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__57609){
var map__57613 = p__57609;
var map__57613__$1 = cljs.core.__destructure_map(map__57613);
var request = map__57613__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57613__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57613__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,new cljs.core.Keyword(null,"api","api",-899839580),api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__57605_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__57605_SHARP_));
}),(function (p1__57608_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__57608_SHARP_));
}),api)], 0)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.Keyword(null,"on-request","on-request",972531605)], 0));
});
day8.re_frame.http_fx.dispatch_on_request = (function day8$re_frame$http_fx$dispatch_on_request(request,xhrio){
var temp__5802__auto__ = new cljs.core.Keyword(null,"on-request","on-request",972531605).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5802__auto__)){
var on_request = temp__5802__auto__;
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_request,xhrio));
} else {
return null;
}
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__57621 = cljs.core.seq(seq_request_maps);
var chunk__57622 = null;
var count__57623 = (0);
var i__57624 = (0);
while(true){
if((i__57624 < count__57623)){
var request__$1 = chunk__57622.cljs$core$IIndexed$_nth$arity$2(null,i__57624);
var xhrio_57655 = ajax.simple.ajax_request(day8.re_frame.http_fx.request__GT_xhrio_options(request__$1));
day8.re_frame.http_fx.dispatch_on_request(request__$1,xhrio_57655);


var G__57660 = seq__57621;
var G__57661 = chunk__57622;
var G__57662 = count__57623;
var G__57663 = (i__57624 + (1));
seq__57621 = G__57660;
chunk__57622 = G__57661;
count__57623 = G__57662;
i__57624 = G__57663;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57621);
if(temp__5804__auto__){
var seq__57621__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57621__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__57621__$1);
var G__57664 = cljs.core.chunk_rest(seq__57621__$1);
var G__57665 = c__5568__auto__;
var G__57666 = cljs.core.count(c__5568__auto__);
var G__57667 = (0);
seq__57621 = G__57664;
chunk__57622 = G__57665;
count__57623 = G__57666;
i__57624 = G__57667;
continue;
} else {
var request__$1 = cljs.core.first(seq__57621__$1);
var xhrio_57668 = ajax.simple.ajax_request(day8.re_frame.http_fx.request__GT_xhrio_options(request__$1));
day8.re_frame.http_fx.dispatch_on_request(request__$1,xhrio_57668);


var G__57669 = cljs.core.next(seq__57621__$1);
var G__57670 = null;
var G__57671 = (0);
var G__57672 = (0);
seq__57621 = G__57669;
chunk__57622 = G__57670;
count__57623 = G__57671;
i__57624 = G__57672;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect);

//# sourceMappingURL=day8.re_frame.http_fx.js.map
