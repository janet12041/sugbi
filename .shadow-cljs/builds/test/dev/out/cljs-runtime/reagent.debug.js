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
var G__55501__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__55501 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55502__i = 0, G__55502__a = new Array(arguments.length -  0);
while (G__55502__i < G__55502__a.length) {G__55502__a[G__55502__i] = arguments[G__55502__i + 0]; ++G__55502__i;}
  args = new cljs.core.IndexedSeq(G__55502__a,0,null);
} 
return G__55501__delegate.call(this,args);};
G__55501.cljs$lang$maxFixedArity = 0;
G__55501.cljs$lang$applyTo = (function (arglist__55503){
var args = cljs.core.seq(arglist__55503);
return G__55501__delegate(args);
});
G__55501.cljs$core$IFn$_invoke$arity$variadic = G__55501__delegate;
return G__55501;
})()
);

(o.error = (function() { 
var G__55504__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__55504 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55505__i = 0, G__55505__a = new Array(arguments.length -  0);
while (G__55505__i < G__55505__a.length) {G__55505__a[G__55505__i] = arguments[G__55505__i + 0]; ++G__55505__i;}
  args = new cljs.core.IndexedSeq(G__55505__a,0,null);
} 
return G__55504__delegate.call(this,args);};
G__55504.cljs$lang$maxFixedArity = 0;
G__55504.cljs$lang$applyTo = (function (arglist__55506){
var args = cljs.core.seq(arglist__55506);
return G__55504__delegate(args);
});
G__55504.cljs$core$IFn$_invoke$arity$variadic = G__55504__delegate;
return G__55504;
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
