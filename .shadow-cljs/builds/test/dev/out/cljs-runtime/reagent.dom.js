goog.provide('reagent.dom');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return shadow.js.shim.module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__57532 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__57533 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__57533);

try{return shadow.js.shim.module$react_dom.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__57535 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__57536 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__57536);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__57535);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__57532);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__57539 = arguments.length;
switch (G__57539) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__57540 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57540,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57540,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return shadow.js.shim.module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__57545_57562 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__57546_57563 = null;
var count__57547_57564 = (0);
var i__57548_57565 = (0);
while(true){
if((i__57548_57565 < count__57547_57564)){
var vec__57555_57566 = chunk__57546_57563.cljs$core$IIndexed$_nth$arity$2(null,i__57548_57565);
var container_57567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57555_57566,(0),null);
var comp_57568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57555_57566,(1),null);
reagent.dom.re_render_component(comp_57568,container_57567);


var G__57569 = seq__57545_57562;
var G__57570 = chunk__57546_57563;
var G__57571 = count__57547_57564;
var G__57572 = (i__57548_57565 + (1));
seq__57545_57562 = G__57569;
chunk__57546_57563 = G__57570;
count__57547_57564 = G__57571;
i__57548_57565 = G__57572;
continue;
} else {
var temp__5804__auto___57573 = cljs.core.seq(seq__57545_57562);
if(temp__5804__auto___57573){
var seq__57545_57574__$1 = temp__5804__auto___57573;
if(cljs.core.chunked_seq_QMARK_(seq__57545_57574__$1)){
var c__5568__auto___57575 = cljs.core.chunk_first(seq__57545_57574__$1);
var G__57576 = cljs.core.chunk_rest(seq__57545_57574__$1);
var G__57577 = c__5568__auto___57575;
var G__57578 = cljs.core.count(c__5568__auto___57575);
var G__57579 = (0);
seq__57545_57562 = G__57576;
chunk__57546_57563 = G__57577;
count__57547_57564 = G__57578;
i__57548_57565 = G__57579;
continue;
} else {
var vec__57558_57581 = cljs.core.first(seq__57545_57574__$1);
var container_57582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57558_57581,(0),null);
var comp_57583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57558_57581,(1),null);
reagent.dom.re_render_component(comp_57583,container_57582);


var G__57585 = cljs.core.next(seq__57545_57574__$1);
var G__57586 = null;
var G__57587 = (0);
var G__57588 = (0);
seq__57545_57562 = G__57585;
chunk__57546_57563 = G__57586;
count__57547_57564 = G__57587;
i__57548_57565 = G__57588;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
