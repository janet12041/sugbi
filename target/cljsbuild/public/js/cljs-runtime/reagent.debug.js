goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__66056__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__66056 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66057__i = 0, G__66057__a = new Array(arguments.length -  0);
while (G__66057__i < G__66057__a.length) {G__66057__a[G__66057__i] = arguments[G__66057__i + 0]; ++G__66057__i;}
  args = new cljs.core.IndexedSeq(G__66057__a,0,null);
} 
return G__66056__delegate.call(this,args);};
G__66056.cljs$lang$maxFixedArity = 0;
G__66056.cljs$lang$applyTo = (function (arglist__66058){
var args = cljs.core.seq(arglist__66058);
return G__66056__delegate(args);
});
G__66056.cljs$core$IFn$_invoke$arity$variadic = G__66056__delegate;
return G__66056;
})()
);

(o.error = (function() { 
var G__66059__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__66059 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66060__i = 0, G__66060__a = new Array(arguments.length -  0);
while (G__66060__i < G__66060__a.length) {G__66060__a[G__66060__i] = arguments[G__66060__i + 0]; ++G__66060__i;}
  args = new cljs.core.IndexedSeq(G__66060__a,0,null);
} 
return G__66059__delegate.call(this,args);};
G__66059.cljs$lang$maxFixedArity = 0;
G__66059.cljs$lang$applyTo = (function (arglist__66061){
var args = cljs.core.seq(arglist__66061);
return G__66059__delegate(args);
});
G__66059.cljs$core$IFn$_invoke$arity$variadic = G__66059__delegate;
return G__66059;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
