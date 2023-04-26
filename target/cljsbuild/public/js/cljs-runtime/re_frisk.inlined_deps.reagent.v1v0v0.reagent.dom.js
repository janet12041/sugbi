goog.provide('re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.inlined_deps !== 'undefined') && (typeof re_frisk.inlined_deps.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.roots !== 'undefined')){
} else {
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.unmount_comp = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render_comp = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__67581 = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__67582 = true;
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__67582);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__67583 = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__67584 = false;
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__67584);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.roots,cljs.core.assoc,container,comp);

re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__67583);
}}));
}finally {(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__67581);
}});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.re_render_component = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$dom$re_render_component(comp,container){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render_comp(comp,container,null);
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
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$dom$render(var_args){
var G__67586 = arguments.length;
switch (G__67586) {
case 2:
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.default_compiler);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_();

var vec__67587 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67587,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67587,(1),null);
var f = (function (){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render_comp(f,container,callback);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.unmount_component_at_node = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$dom$unmount_component_at_node(container){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.dom_node = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
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
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.force_update_all = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$dom$force_update_all(){
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_();

var seq__67590_67607 = cljs.core.seq(cljs.core.deref(re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.roots));
var chunk__67591_67608 = null;
var count__67592_67609 = (0);
var i__67593_67610 = (0);
while(true){
if((i__67593_67610 < count__67592_67609)){
var vec__67600_67611 = chunk__67591_67608.cljs$core$IIndexed$_nth$arity$2(null,i__67593_67610);
var container_67612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67600_67611,(0),null);
var comp_67613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67600_67611,(1),null);
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.re_render_component(comp_67613,container_67612);


var G__67614 = seq__67590_67607;
var G__67615 = chunk__67591_67608;
var G__67616 = count__67592_67609;
var G__67617 = (i__67593_67610 + (1));
seq__67590_67607 = G__67614;
chunk__67591_67608 = G__67615;
count__67592_67609 = G__67616;
i__67593_67610 = G__67617;
continue;
} else {
var temp__5804__auto___67618 = cljs.core.seq(seq__67590_67607);
if(temp__5804__auto___67618){
var seq__67590_67619__$1 = temp__5804__auto___67618;
if(cljs.core.chunked_seq_QMARK_(seq__67590_67619__$1)){
var c__5568__auto___67620 = cljs.core.chunk_first(seq__67590_67619__$1);
var G__67621 = cljs.core.chunk_rest(seq__67590_67619__$1);
var G__67622 = c__5568__auto___67620;
var G__67623 = cljs.core.count(c__5568__auto___67620);
var G__67624 = (0);
seq__67590_67607 = G__67621;
chunk__67591_67608 = G__67622;
count__67592_67609 = G__67623;
i__67593_67610 = G__67624;
continue;
} else {
var vec__67603_67625 = cljs.core.first(seq__67590_67619__$1);
var container_67626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67603_67625,(0),null);
var comp_67627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67603_67625,(1),null);
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.re_render_component(comp_67627,container_67626);


var G__67628 = cljs.core.next(seq__67590_67619__$1);
var G__67629 = null;
var G__67630 = (0);
var G__67631 = (0);
seq__67590_67607 = G__67628;
chunk__67591_67608 = G__67629;
count__67592_67609 = G__67630;
i__67593_67610 = G__67631;
continue;
}
} else {
}
}
break;
}

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.js.map
