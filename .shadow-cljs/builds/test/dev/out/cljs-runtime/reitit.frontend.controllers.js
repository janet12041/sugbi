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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__60050,match){
var map__60051 = p__60050;
var map__60051__$1 = cljs.core.__destructure_map(map__60051);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60051__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60051__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60051__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__60052(s__60053){
return (new cljs.core.LazySeq(null,(function (){
var s__60053__$1 = s__60053;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__60053__$1);
if(temp__5804__auto__){
var s__60053__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60053__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__60053__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__60055 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__60054 = (0);
while(true){
if((i__60054 < size__5522__auto__)){
var vec__60057 = cljs.core._nth(c__5521__auto__,i__60054);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60057,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60057,(1),null);
cljs.core.chunk_append(b__60055,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__60076 = (i__60054 + (1));
i__60054 = G__60076;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60055),reitit$frontend$controllers$get_identity_$_iter__60052(cljs.core.chunk_rest(s__60053__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60055),null);
}
} else {
var vec__60060 = cljs.core.first(s__60053__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60060,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60060,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__60052(cljs.core.rest(s__60053__$2)));
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
var G__60067 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60067) : f.call(null,G__60067));
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
var seq__60068_60077 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__60069_60078 = null;
var count__60070_60079 = (0);
var i__60071_60080 = (0);
while(true){
if((i__60071_60080 < count__60070_60079)){
var controller_60081 = chunk__60069_60078.cljs$core$IIndexed$_nth$arity$2(null,i__60071_60080);
reitit.frontend.controllers.apply_controller(controller_60081,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__60082 = seq__60068_60077;
var G__60083 = chunk__60069_60078;
var G__60084 = count__60070_60079;
var G__60085 = (i__60071_60080 + (1));
seq__60068_60077 = G__60082;
chunk__60069_60078 = G__60083;
count__60070_60079 = G__60084;
i__60071_60080 = G__60085;
continue;
} else {
var temp__5804__auto___60086 = cljs.core.seq(seq__60068_60077);
if(temp__5804__auto___60086){
var seq__60068_60087__$1 = temp__5804__auto___60086;
if(cljs.core.chunked_seq_QMARK_(seq__60068_60087__$1)){
var c__5568__auto___60088 = cljs.core.chunk_first(seq__60068_60087__$1);
var G__60089 = cljs.core.chunk_rest(seq__60068_60087__$1);
var G__60090 = c__5568__auto___60088;
var G__60091 = cljs.core.count(c__5568__auto___60088);
var G__60092 = (0);
seq__60068_60077 = G__60089;
chunk__60069_60078 = G__60090;
count__60070_60079 = G__60091;
i__60071_60080 = G__60092;
continue;
} else {
var controller_60093 = cljs.core.first(seq__60068_60087__$1);
reitit.frontend.controllers.apply_controller(controller_60093,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__60094 = cljs.core.next(seq__60068_60087__$1);
var G__60095 = null;
var G__60096 = (0);
var G__60097 = (0);
seq__60068_60077 = G__60094;
chunk__60069_60078 = G__60095;
count__60070_60079 = G__60096;
i__60071_60080 = G__60097;
continue;
}
} else {
}
}
break;
}

var seq__60072_60098 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__60073_60099 = null;
var count__60074_60100 = (0);
var i__60075_60101 = (0);
while(true){
if((i__60075_60101 < count__60074_60100)){
var controller_60102 = chunk__60073_60099.cljs$core$IIndexed$_nth$arity$2(null,i__60075_60101);
reitit.frontend.controllers.apply_controller(controller_60102,new cljs.core.Keyword(null,"start","start",-355208981));


var G__60103 = seq__60072_60098;
var G__60104 = chunk__60073_60099;
var G__60105 = count__60074_60100;
var G__60106 = (i__60075_60101 + (1));
seq__60072_60098 = G__60103;
chunk__60073_60099 = G__60104;
count__60074_60100 = G__60105;
i__60075_60101 = G__60106;
continue;
} else {
var temp__5804__auto___60107 = cljs.core.seq(seq__60072_60098);
if(temp__5804__auto___60107){
var seq__60072_60108__$1 = temp__5804__auto___60107;
if(cljs.core.chunked_seq_QMARK_(seq__60072_60108__$1)){
var c__5568__auto___60111 = cljs.core.chunk_first(seq__60072_60108__$1);
var G__60112 = cljs.core.chunk_rest(seq__60072_60108__$1);
var G__60113 = c__5568__auto___60111;
var G__60114 = cljs.core.count(c__5568__auto___60111);
var G__60115 = (0);
seq__60072_60098 = G__60112;
chunk__60073_60099 = G__60113;
count__60074_60100 = G__60114;
i__60075_60101 = G__60115;
continue;
} else {
var controller_60116 = cljs.core.first(seq__60072_60108__$1);
reitit.frontend.controllers.apply_controller(controller_60116,new cljs.core.Keyword(null,"start","start",-355208981));


var G__60117 = cljs.core.next(seq__60072_60108__$1);
var G__60118 = null;
var G__60119 = (0);
var G__60120 = (0);
seq__60072_60098 = G__60117;
chunk__60073_60099 = G__60118;
count__60074_60100 = G__60119;
i__60075_60101 = G__60120;
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
