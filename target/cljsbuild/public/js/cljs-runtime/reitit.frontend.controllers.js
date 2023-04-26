goog.provide('reitit.frontend.controllers');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__79389,match){
var map__79390 = p__79389;
var map__79390__$1 = cljs.core.__destructure_map(map__79390);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79390__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79390__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79390__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__5043__auto__ = identity;
if(cljs.core.truth_(and__5043__auto__)){
return parameters;
} else {
return and__5043__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__79391(s__79392){
return (new cljs.core.LazySeq(null,(function (){
var s__79392__$1 = s__79392;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__79392__$1);
if(temp__5804__auto__){
var s__79392__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__79392__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__79392__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__79394 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__79393 = (0);
while(true){
if((i__79393 < size__5522__auto__)){
var vec__79399 = cljs.core._nth(c__5521__auto__,i__79393);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79399,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79399,(1),null);
cljs.core.chunk_append(b__79394,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__79420 = (i__79393 + (1));
i__79393 = G__79420;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79394),reitit$frontend$controllers$get_identity_$_iter__79391(cljs.core.chunk_rest(s__79392__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79394),null);
}
} else {
var vec__79402 = cljs.core.first(s__79392__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79402,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79402,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__79391(cljs.core.rest(s__79392__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
var G__79406 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__79406) : f.call(null,G__79406));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__79408_79421 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__79409_79422 = null;
var count__79410_79423 = (0);
var i__79411_79424 = (0);
while(true){
if((i__79411_79424 < count__79410_79423)){
var controller_79425 = chunk__79409_79422.cljs$core$IIndexed$_nth$arity$2(null,i__79411_79424);
reitit.frontend.controllers.apply_controller(controller_79425,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__79426 = seq__79408_79421;
var G__79427 = chunk__79409_79422;
var G__79428 = count__79410_79423;
var G__79429 = (i__79411_79424 + (1));
seq__79408_79421 = G__79426;
chunk__79409_79422 = G__79427;
count__79410_79423 = G__79428;
i__79411_79424 = G__79429;
continue;
} else {
var temp__5804__auto___79430 = cljs.core.seq(seq__79408_79421);
if(temp__5804__auto___79430){
var seq__79408_79431__$1 = temp__5804__auto___79430;
if(cljs.core.chunked_seq_QMARK_(seq__79408_79431__$1)){
var c__5568__auto___79432 = cljs.core.chunk_first(seq__79408_79431__$1);
var G__79433 = cljs.core.chunk_rest(seq__79408_79431__$1);
var G__79434 = c__5568__auto___79432;
var G__79435 = cljs.core.count(c__5568__auto___79432);
var G__79436 = (0);
seq__79408_79421 = G__79433;
chunk__79409_79422 = G__79434;
count__79410_79423 = G__79435;
i__79411_79424 = G__79436;
continue;
} else {
var controller_79437 = cljs.core.first(seq__79408_79431__$1);
reitit.frontend.controllers.apply_controller(controller_79437,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__79438 = cljs.core.next(seq__79408_79431__$1);
var G__79439 = null;
var G__79440 = (0);
var G__79441 = (0);
seq__79408_79421 = G__79438;
chunk__79409_79422 = G__79439;
count__79410_79423 = G__79440;
i__79411_79424 = G__79441;
continue;
}
} else {
}
}
break;
}

var seq__79416_79442 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__79417_79443 = null;
var count__79418_79444 = (0);
var i__79419_79445 = (0);
while(true){
if((i__79419_79445 < count__79418_79444)){
var controller_79446 = chunk__79417_79443.cljs$core$IIndexed$_nth$arity$2(null,i__79419_79445);
reitit.frontend.controllers.apply_controller(controller_79446,new cljs.core.Keyword(null,"start","start",-355208981));


var G__79447 = seq__79416_79442;
var G__79448 = chunk__79417_79443;
var G__79449 = count__79418_79444;
var G__79450 = (i__79419_79445 + (1));
seq__79416_79442 = G__79447;
chunk__79417_79443 = G__79448;
count__79418_79444 = G__79449;
i__79419_79445 = G__79450;
continue;
} else {
var temp__5804__auto___79451 = cljs.core.seq(seq__79416_79442);
if(temp__5804__auto___79451){
var seq__79416_79452__$1 = temp__5804__auto___79451;
if(cljs.core.chunked_seq_QMARK_(seq__79416_79452__$1)){
var c__5568__auto___79453 = cljs.core.chunk_first(seq__79416_79452__$1);
var G__79454 = cljs.core.chunk_rest(seq__79416_79452__$1);
var G__79455 = c__5568__auto___79453;
var G__79456 = cljs.core.count(c__5568__auto___79453);
var G__79457 = (0);
seq__79416_79442 = G__79454;
chunk__79417_79443 = G__79455;
count__79418_79444 = G__79456;
i__79419_79445 = G__79457;
continue;
} else {
var controller_79458 = cljs.core.first(seq__79416_79452__$1);
reitit.frontend.controllers.apply_controller(controller_79458,new cljs.core.Keyword(null,"start","start",-355208981));


var G__79459 = cljs.core.next(seq__79416_79452__$1);
var G__79460 = null;
var G__79461 = (0);
var G__79462 = (0);
seq__79416_79442 = G__79459;
chunk__79417_79443 = G__79460;
count__79418_79444 = G__79461;
i__79419_79445 = G__79462;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
