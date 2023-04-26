goog.provide('markdown.core');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__78581){
var map__78582 = p__78581;
var map__78582__$1 = cljs.core.__destructure_map(map__78582);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78582__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78582__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78582__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR__orig_val__78583 = markdown.common._STAR_inhibit_separator_STAR_;
var _STAR_inhibit_separator_STAR__temp_val__78584 = inhibit_separator;
(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__temp_val__78584);

try{var vec__78585 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__78588,transformer){
var vec__78589 = p__78588;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78589,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78589,(1),null);
var G__78592 = text;
var G__78593 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__78592,G__78593) : transformer.call(null,G__78592,G__78593));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__5045__auto__ = replacement_transformers;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78585,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78585,(1),null);
html.append(text);

return new_state;
}finally {(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__orig_val__78583);
}});
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__5775__auto__ = [];
var len__5769__auto___78636 = arguments.length;
var i__5770__auto___78637 = (0);
while(true){
if((i__5770__auto___78637 < len__5769__auto___78636)){
args__5775__auto__.push((arguments[i__5770__auto___78637]));

var G__78638 = (i__5770__auto___78637 + (1));
i__5770__auto___78637 = G__78638;
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
(markdown.core.format.cljs$lang$applyTo = (function (seq78594){
var G__78595 = cljs.core.first(seq78594);
var seq78594__$1 = cljs.core.next(seq78594);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78595,seq78594__$1);
}));

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__78596_78639 = cljs.core.seq(lines);
var chunk__78597_78640 = null;
var count__78598_78641 = (0);
var i__78599_78642 = (0);
while(true){
if((i__78599_78642 < count__78598_78641)){
var line_78643 = chunk__78597_78640.cljs$core$IIndexed$_nth$arity$2(null,i__78599_78642);
markdown.links.parse_reference_link(line_78643,references);


var G__78644 = seq__78596_78639;
var G__78645 = chunk__78597_78640;
var G__78646 = count__78598_78641;
var G__78647 = (i__78599_78642 + (1));
seq__78596_78639 = G__78644;
chunk__78597_78640 = G__78645;
count__78598_78641 = G__78646;
i__78599_78642 = G__78647;
continue;
} else {
var temp__5804__auto___78648 = cljs.core.seq(seq__78596_78639);
if(temp__5804__auto___78648){
var seq__78596_78649__$1 = temp__5804__auto___78648;
if(cljs.core.chunked_seq_QMARK_(seq__78596_78649__$1)){
var c__5568__auto___78650 = cljs.core.chunk_first(seq__78596_78649__$1);
var G__78651 = cljs.core.chunk_rest(seq__78596_78649__$1);
var G__78652 = c__5568__auto___78650;
var G__78653 = cljs.core.count(c__5568__auto___78650);
var G__78654 = (0);
seq__78596_78639 = G__78651;
chunk__78597_78640 = G__78652;
count__78598_78641 = G__78653;
i__78599_78642 = G__78654;
continue;
} else {
var line_78655 = cljs.core.first(seq__78596_78649__$1);
markdown.links.parse_reference_link(line_78655,references);


var G__78656 = cljs.core.next(seq__78596_78649__$1);
var G__78657 = null;
var G__78658 = (0);
var G__78659 = (0);
seq__78596_78639 = G__78656;
chunk__78597_78640 = G__78657;
count__78598_78641 = G__78658;
i__78599_78642 = G__78659;
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
var seq__78600_78660 = cljs.core.seq(lines);
var chunk__78601_78661 = null;
var count__78602_78662 = (0);
var i__78603_78663 = (0);
while(true){
if((i__78603_78663 < count__78602_78662)){
var line_78664 = chunk__78601_78661.cljs$core$IIndexed$_nth$arity$2(null,i__78603_78663);
markdown.links.parse_footnote_link(line_78664,footnotes);


var G__78665 = seq__78600_78660;
var G__78666 = chunk__78601_78661;
var G__78667 = count__78602_78662;
var G__78668 = (i__78603_78663 + (1));
seq__78600_78660 = G__78665;
chunk__78601_78661 = G__78666;
count__78602_78662 = G__78667;
i__78603_78663 = G__78668;
continue;
} else {
var temp__5804__auto___78669 = cljs.core.seq(seq__78600_78660);
if(temp__5804__auto___78669){
var seq__78600_78670__$1 = temp__5804__auto___78669;
if(cljs.core.chunked_seq_QMARK_(seq__78600_78670__$1)){
var c__5568__auto___78671 = cljs.core.chunk_first(seq__78600_78670__$1);
var G__78672 = cljs.core.chunk_rest(seq__78600_78670__$1);
var G__78673 = c__5568__auto___78671;
var G__78674 = cljs.core.count(c__5568__auto___78671);
var G__78675 = (0);
seq__78600_78660 = G__78672;
chunk__78601_78661 = G__78673;
count__78602_78662 = G__78674;
i__78603_78663 = G__78675;
continue;
} else {
var line_78676 = cljs.core.first(seq__78600_78670__$1);
markdown.links.parse_footnote_link(line_78676,footnotes);


var G__78677 = cljs.core.next(seq__78600_78670__$1);
var G__78678 = null;
var G__78679 = (0);
var G__78680 = (0);
seq__78600_78660 = G__78677;
chunk__78601_78661 = G__78678;
count__78602_78662 = G__78679;
i__78603_78663 = G__78680;
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
var vec__78604 = markdown.transformers.parse_metadata_headers(lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78604,(0),null);
var num_lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78604,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metadata,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(num_lines,lines)], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__78607 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR__orig_val__78608 = markdown.transformers._STAR_formatter_STAR_;
var _STAR_substring_STAR__temp_val__78609 = (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
var _STAR_formatter_STAR__temp_val__78610 = markdown.core.format;
(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__78609);

(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__temp_val__78610);

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__78611 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78611,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78611,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__78620_78681 = lines__$1;
var vec__78621_78682 = G__78620_78681;
var seq__78622_78683 = cljs.core.seq(vec__78621_78682);
var first__78623_78684 = cljs.core.first(seq__78622_78683);
var seq__78622_78685__$1 = cljs.core.next(seq__78622_78683);
var line_78686 = first__78623_78684;
var more_78687 = seq__78622_78685__$1;
var state_78688 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1], 0));
var G__78620_78689__$1 = G__78620_78681;
var state_78690__$1 = state_78688;
while(true){
var vec__78627_78691 = G__78620_78689__$1;
var seq__78628_78692 = cljs.core.seq(vec__78627_78691);
var first__78629_78693 = cljs.core.first(seq__78628_78692);
var seq__78628_78694__$1 = cljs.core.next(seq__78628_78692);
var line_78695__$1 = first__78629_78693;
var more_78696__$1 = seq__78628_78694__$1;
var state_78697__$2 = state_78690__$1;
var line_78698__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_78697__$2))?"":line_78695__$1);
var state_78699__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_78697__$2))?transformer(html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_78697__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_78697__$2),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_78697__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)], 0)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_78697__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_78696__$1))){
var G__78700 = more_78696__$1;
var G__78701 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transformer(html,line_78698__$2,cljs.core.first(more_78696__$1),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_78699__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_(line_78698__$2.trim()));
G__78620_78689__$1 = G__78700;
state_78690__$1 = G__78701;
continue;
} else {
transformer(html.append(markdown.transformers.footer(new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_78699__$3))),line_78698__$2,"",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_78699__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__orig_val__78608);

(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__78607);
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__5775__auto__ = [];
var len__5769__auto___78702 = arguments.length;
var i__5770__auto___78703 = (0);
while(true){
if((i__5770__auto___78703 < len__5769__auto___78702)){
args__5775__auto__.push((arguments[i__5770__auto___78703]));

var G__78704 = (i__5770__auto___78703 + (1));
i__5770__auto___78703 = G__78704;
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
(markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq78630){
var G__78631 = cljs.core.first(seq78630);
var seq78630__$1 = cljs.core.next(seq78630);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78631,seq78630__$1);
}));

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___78705 = arguments.length;
var i__5770__auto___78706 = (0);
while(true){
if((i__5770__auto___78706 < len__5769__auto___78705)){
args__5775__auto__.push((arguments[i__5770__auto___78706]));

var G__78707 = (i__5770__auto___78706 + (1));
i__5770__auto___78706 = G__78707;
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
(markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq78632){
var G__78633 = cljs.core.first(seq78632);
var seq78632__$1 = cljs.core.next(seq78632);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78633,seq78632__$1);
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__5775__auto__ = [];
var len__5769__auto___78708 = arguments.length;
var i__5770__auto___78709 = (0);
while(true){
if((i__5770__auto___78709 < len__5769__auto___78708)){
args__5775__auto__.push((arguments[i__5770__auto___78709]));

var G__78710 = (i__5770__auto___78709 + (1));
i__5770__auto___78709 = G__78710;
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
(markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq78634){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq78634));
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___78711 = arguments.length;
var i__5770__auto___78712 = (0);
while(true){
if((i__5770__auto___78712 < len__5769__auto___78711)){
args__5775__auto__.push((arguments[i__5770__auto___78712]));

var G__78713 = (i__5770__auto___78712 + (1));
i__5770__auto___78712 = G__78713;
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
(markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq78635){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq78635));
}));


//# sourceMappingURL=markdown.core.js.map
