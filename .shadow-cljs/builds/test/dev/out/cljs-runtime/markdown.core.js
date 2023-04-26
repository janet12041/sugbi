goog.provide('markdown.core');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__58342){
var map__58343 = p__58342;
var map__58343__$1 = cljs.core.__destructure_map(map__58343);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58343__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58343__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58343__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR__orig_val__58348 = markdown.common._STAR_inhibit_separator_STAR_;
var _STAR_inhibit_separator_STAR__temp_val__58349 = inhibit_separator;
(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__temp_val__58349);

try{var vec__58350 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__58353,transformer){
var vec__58354 = p__58353;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58354,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58354,(1),null);
var G__58357 = text;
var G__58358 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__58357,G__58358) : transformer.call(null,G__58357,G__58358));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__5045__auto__ = replacement_transformers;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58350,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58350,(1),null);
html.append(text);

return new_state;
}finally {(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__orig_val__58348);
}});
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__5775__auto__ = [];
var len__5769__auto___58407 = arguments.length;
var i__5770__auto___58408 = (0);
while(true){
if((i__5770__auto___58408 < len__5769__auto___58407)){
args__5775__auto__.push((arguments[i__5770__auto___58408]));

var G__58409 = (i__5770__auto___58408 + (1));
i__5770__auto___58408 = G__58409;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(markdown.core.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.format.cljs$lang$applyTo = (function (seq58359){
var G__58360 = cljs.core.first(seq58359);
var seq58359__$1 = cljs.core.next(seq58359);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58360,seq58359__$1);
}));

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__58361_58410 = cljs.core.seq(lines);
var chunk__58362_58411 = null;
var count__58363_58412 = (0);
var i__58364_58413 = (0);
while(true){
if((i__58364_58413 < count__58363_58412)){
var line_58414 = chunk__58362_58411.cljs$core$IIndexed$_nth$arity$2(null,i__58364_58413);
markdown.links.parse_reference_link(line_58414,references);


var G__58415 = seq__58361_58410;
var G__58416 = chunk__58362_58411;
var G__58417 = count__58363_58412;
var G__58418 = (i__58364_58413 + (1));
seq__58361_58410 = G__58415;
chunk__58362_58411 = G__58416;
count__58363_58412 = G__58417;
i__58364_58413 = G__58418;
continue;
} else {
var temp__5804__auto___58419 = cljs.core.seq(seq__58361_58410);
if(temp__5804__auto___58419){
var seq__58361_58424__$1 = temp__5804__auto___58419;
if(cljs.core.chunked_seq_QMARK_(seq__58361_58424__$1)){
var c__5568__auto___58425 = cljs.core.chunk_first(seq__58361_58424__$1);
var G__58426 = cljs.core.chunk_rest(seq__58361_58424__$1);
var G__58427 = c__5568__auto___58425;
var G__58428 = cljs.core.count(c__5568__auto___58425);
var G__58429 = (0);
seq__58361_58410 = G__58426;
chunk__58362_58411 = G__58427;
count__58363_58412 = G__58428;
i__58364_58413 = G__58429;
continue;
} else {
var line_58430 = cljs.core.first(seq__58361_58424__$1);
markdown.links.parse_reference_link(line_58430,references);


var G__58431 = cljs.core.next(seq__58361_58424__$1);
var G__58432 = null;
var G__58433 = (0);
var G__58434 = (0);
seq__58361_58410 = G__58431;
chunk__58362_58411 = G__58432;
count__58363_58412 = G__58433;
i__58364_58413 = G__58434;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__58367_58435 = cljs.core.seq(lines);
var chunk__58368_58436 = null;
var count__58369_58437 = (0);
var i__58370_58438 = (0);
while(true){
if((i__58370_58438 < count__58369_58437)){
var line_58439 = chunk__58368_58436.cljs$core$IIndexed$_nth$arity$2(null,i__58370_58438);
markdown.links.parse_footnote_link(line_58439,footnotes);


var G__58440 = seq__58367_58435;
var G__58441 = chunk__58368_58436;
var G__58442 = count__58369_58437;
var G__58443 = (i__58370_58438 + (1));
seq__58367_58435 = G__58440;
chunk__58368_58436 = G__58441;
count__58369_58437 = G__58442;
i__58370_58438 = G__58443;
continue;
} else {
var temp__5804__auto___58444 = cljs.core.seq(seq__58367_58435);
if(temp__5804__auto___58444){
var seq__58367_58445__$1 = temp__5804__auto___58444;
if(cljs.core.chunked_seq_QMARK_(seq__58367_58445__$1)){
var c__5568__auto___58446 = cljs.core.chunk_first(seq__58367_58445__$1);
var G__58447 = cljs.core.chunk_rest(seq__58367_58445__$1);
var G__58448 = c__5568__auto___58446;
var G__58449 = cljs.core.count(c__5568__auto___58446);
var G__58450 = (0);
seq__58367_58435 = G__58447;
chunk__58368_58436 = G__58448;
count__58369_58437 = G__58449;
i__58370_58438 = G__58450;
continue;
} else {
var line_58451 = cljs.core.first(seq__58367_58445__$1);
markdown.links.parse_footnote_link(line_58451,footnotes);


var G__58452 = cljs.core.next(seq__58367_58445__$1);
var G__58453 = null;
var G__58454 = (0);
var G__58455 = (0);
seq__58367_58435 = G__58452;
chunk__58368_58436 = G__58453;
count__58369_58437 = G__58454;
i__58370_58438 = G__58455;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__58371 = markdown.transformers.parse_metadata_headers(lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58371,(0),null);
var num_lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58371,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metadata,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(num_lines,lines)], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__58374 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR__orig_val__58375 = markdown.transformers._STAR_formatter_STAR_;
var _STAR_substring_STAR__temp_val__58376 = (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
var _STAR_formatter_STAR__temp_val__58377 = markdown.core.format;
(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__58376);

(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__temp_val__58377);

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__58381 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58381,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58381,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__58387_58456 = lines__$1;
var vec__58388_58457 = G__58387_58456;
var seq__58389_58458 = cljs.core.seq(vec__58388_58457);
var first__58390_58459 = cljs.core.first(seq__58389_58458);
var seq__58389_58460__$1 = cljs.core.next(seq__58389_58458);
var line_58461 = first__58390_58459;
var more_58462 = seq__58389_58460__$1;
var state_58463 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1], 0));
var G__58387_58464__$1 = G__58387_58456;
var state_58465__$1 = state_58463;
while(true){
var vec__58394_58466 = G__58387_58464__$1;
var seq__58395_58467 = cljs.core.seq(vec__58394_58466);
var first__58396_58468 = cljs.core.first(seq__58395_58467);
var seq__58395_58469__$1 = cljs.core.next(seq__58395_58467);
var line_58470__$1 = first__58396_58468;
var more_58471__$1 = seq__58395_58469__$1;
var state_58472__$2 = state_58465__$1;
var line_58473__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_58472__$2))?"":line_58470__$1);
var state_58474__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_58472__$2))?transformer(html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_58472__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_58472__$2),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_58472__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)], 0)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_58472__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_58471__$1))){
var G__58475 = more_58471__$1;
var G__58476 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transformer(html,line_58473__$2,cljs.core.first(more_58471__$1),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_58474__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_(line_58473__$2.trim()));
G__58387_58464__$1 = G__58475;
state_58465__$1 = G__58476;
continue;
} else {
transformer(html.append(markdown.transformers.footer(new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_58474__$3))),line_58473__$2,"",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_58474__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__orig_val__58375);

(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__58374);
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__5775__auto__ = [];
var len__5769__auto___58477 = arguments.length;
var i__5770__auto___58478 = (0);
while(true){
if((i__5770__auto___58478 < len__5769__auto___58477)){
args__5775__auto__.push((arguments[i__5770__auto___58478]));

var G__58479 = (i__5770__auto___58478 + (1));
i__5770__auto___58478 = G__58479;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_(text,params));
}));

(markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq58397){
var G__58398 = cljs.core.first(seq58397);
var seq58397__$1 = cljs.core.next(seq58397);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58398,seq58397__$1);
}));

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___58480 = arguments.length;
var i__5770__auto___58481 = (0);
while(true){
if((i__5770__auto___58481 < len__5769__auto___58480)){
args__5775__auto__.push((arguments[i__5770__auto___58481]));

var G__58482 = (i__5770__auto___58481 + (1));
i__5770__auto___58481 = G__58482;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_(text,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
}));

(markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq58403){
var G__58404 = cljs.core.first(seq58403);
var seq58403__$1 = cljs.core.next(seq58403);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58404,seq58403__$1);
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__5775__auto__ = [];
var len__5769__auto___58483 = arguments.length;
var i__5770__auto___58484 = (0);
while(true){
if((i__5770__auto___58484 < len__5769__auto___58483)){
args__5775__auto__.push((arguments[i__5770__auto___58484]));

var G__58485 = (i__5770__auto___58484 + (1));
i__5770__auto___58484 = G__58485;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

(markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html,params);
}));

(markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq58405){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58405));
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___58486 = arguments.length;
var i__5770__auto___58487 = (0);
while(true){
if((i__5770__auto___58487 < len__5769__auto___58486)){
args__5775__auto__.push((arguments[i__5770__auto___58487]));

var G__58488 = (i__5770__auto___58487 + (1));
i__5770__auto___58487 = G__58488;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

(markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html_with_meta,params);
}));

(markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq58406){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58406));
}));


//# sourceMappingURL=markdown.core.js.map
