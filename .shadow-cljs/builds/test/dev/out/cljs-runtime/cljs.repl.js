goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__80716){
var map__80717 = p__80716;
var map__80717__$1 = cljs.core.__destructure_map(map__80717);
var m = map__80717__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80717__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80717__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__80720_80927 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__80721_80928 = null;
var count__80722_80929 = (0);
var i__80723_80930 = (0);
while(true){
if((i__80723_80930 < count__80722_80929)){
var f_80931 = chunk__80721_80928.cljs$core$IIndexed$_nth$arity$2(null,i__80723_80930);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_80931], 0));


var G__80932 = seq__80720_80927;
var G__80933 = chunk__80721_80928;
var G__80934 = count__80722_80929;
var G__80935 = (i__80723_80930 + (1));
seq__80720_80927 = G__80932;
chunk__80721_80928 = G__80933;
count__80722_80929 = G__80934;
i__80723_80930 = G__80935;
continue;
} else {
var temp__5804__auto___80936 = cljs.core.seq(seq__80720_80927);
if(temp__5804__auto___80936){
var seq__80720_80937__$1 = temp__5804__auto___80936;
if(cljs.core.chunked_seq_QMARK_(seq__80720_80937__$1)){
var c__5568__auto___80938 = cljs.core.chunk_first(seq__80720_80937__$1);
var G__80939 = cljs.core.chunk_rest(seq__80720_80937__$1);
var G__80940 = c__5568__auto___80938;
var G__80941 = cljs.core.count(c__5568__auto___80938);
var G__80942 = (0);
seq__80720_80927 = G__80939;
chunk__80721_80928 = G__80940;
count__80722_80929 = G__80941;
i__80723_80930 = G__80942;
continue;
} else {
var f_80943 = cljs.core.first(seq__80720_80937__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_80943], 0));


var G__80944 = cljs.core.next(seq__80720_80937__$1);
var G__80945 = null;
var G__80946 = (0);
var G__80947 = (0);
seq__80720_80927 = G__80944;
chunk__80721_80928 = G__80945;
count__80722_80929 = G__80946;
i__80723_80930 = G__80947;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_80948 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_80948], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_80948)))?cljs.core.second(arglists_80948):arglists_80948)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__80727_80949 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__80728_80950 = null;
var count__80729_80951 = (0);
var i__80730_80952 = (0);
while(true){
if((i__80730_80952 < count__80729_80951)){
var vec__80741_80953 = chunk__80728_80950.cljs$core$IIndexed$_nth$arity$2(null,i__80730_80952);
var name_80954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80741_80953,(0),null);
var map__80744_80955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80741_80953,(1),null);
var map__80744_80956__$1 = cljs.core.__destructure_map(map__80744_80955);
var doc_80957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80744_80956__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_80958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80744_80956__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_80954], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_80958], 0));

if(cljs.core.truth_(doc_80957)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_80957], 0));
} else {
}


var G__80959 = seq__80727_80949;
var G__80960 = chunk__80728_80950;
var G__80961 = count__80729_80951;
var G__80962 = (i__80730_80952 + (1));
seq__80727_80949 = G__80959;
chunk__80728_80950 = G__80960;
count__80729_80951 = G__80961;
i__80730_80952 = G__80962;
continue;
} else {
var temp__5804__auto___80963 = cljs.core.seq(seq__80727_80949);
if(temp__5804__auto___80963){
var seq__80727_80964__$1 = temp__5804__auto___80963;
if(cljs.core.chunked_seq_QMARK_(seq__80727_80964__$1)){
var c__5568__auto___80965 = cljs.core.chunk_first(seq__80727_80964__$1);
var G__80966 = cljs.core.chunk_rest(seq__80727_80964__$1);
var G__80967 = c__5568__auto___80965;
var G__80968 = cljs.core.count(c__5568__auto___80965);
var G__80969 = (0);
seq__80727_80949 = G__80966;
chunk__80728_80950 = G__80967;
count__80729_80951 = G__80968;
i__80730_80952 = G__80969;
continue;
} else {
var vec__80746_80970 = cljs.core.first(seq__80727_80964__$1);
var name_80971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80746_80970,(0),null);
var map__80749_80972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80746_80970,(1),null);
var map__80749_80973__$1 = cljs.core.__destructure_map(map__80749_80972);
var doc_80974 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80749_80973__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_80975 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80749_80973__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_80971], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_80975], 0));

if(cljs.core.truth_(doc_80974)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_80974], 0));
} else {
}


var G__80976 = cljs.core.next(seq__80727_80964__$1);
var G__80977 = null;
var G__80978 = (0);
var G__80979 = (0);
seq__80727_80949 = G__80976;
chunk__80728_80950 = G__80977;
count__80729_80951 = G__80978;
i__80730_80952 = G__80979;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__80751 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__80752 = null;
var count__80753 = (0);
var i__80754 = (0);
while(true){
if((i__80754 < count__80753)){
var role = chunk__80752.cljs$core$IIndexed$_nth$arity$2(null,i__80754);
var temp__5804__auto___80980__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___80980__$1)){
var spec_80981 = temp__5804__auto___80980__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_80981)], 0));
} else {
}


var G__80982 = seq__80751;
var G__80983 = chunk__80752;
var G__80984 = count__80753;
var G__80985 = (i__80754 + (1));
seq__80751 = G__80982;
chunk__80752 = G__80983;
count__80753 = G__80984;
i__80754 = G__80985;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__80751);
if(temp__5804__auto____$1){
var seq__80751__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__80751__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__80751__$1);
var G__80986 = cljs.core.chunk_rest(seq__80751__$1);
var G__80987 = c__5568__auto__;
var G__80988 = cljs.core.count(c__5568__auto__);
var G__80989 = (0);
seq__80751 = G__80986;
chunk__80752 = G__80987;
count__80753 = G__80988;
i__80754 = G__80989;
continue;
} else {
var role = cljs.core.first(seq__80751__$1);
var temp__5804__auto___80991__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___80991__$2)){
var spec_80992 = temp__5804__auto___80991__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_80992)], 0));
} else {
}


var G__80993 = cljs.core.next(seq__80751__$1);
var G__80994 = null;
var G__80995 = (0);
var G__80996 = (0);
seq__80751 = G__80993;
chunk__80752 = G__80994;
count__80753 = G__80995;
i__80754 = G__80996;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__80997 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__80998 = cljs.core.ex_cause(t);
via = G__80997;
t = G__80998;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__80827 = datafied_throwable;
var map__80827__$1 = cljs.core.__destructure_map(map__80827);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80827__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80827__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__80827__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__80828 = cljs.core.last(via);
var map__80828__$1 = cljs.core.__destructure_map(map__80828);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80828__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80828__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80828__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__80829 = data;
var map__80829__$1 = cljs.core.__destructure_map(map__80829);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80829__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80829__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80829__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__80830 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__80830__$1 = cljs.core.__destructure_map(map__80830);
var top_data = map__80830__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80830__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__80845 = phase;
var G__80845__$1 = (((G__80845 instanceof cljs.core.Keyword))?G__80845.fqn:null);
switch (G__80845__$1) {
case "read-source":
var map__80846 = data;
var map__80846__$1 = cljs.core.__destructure_map(map__80846);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80846__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80846__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__80855 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__80855__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80855,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__80855);
var G__80855__$2 = (cljs.core.truth_((function (){var fexpr__80856 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__80856.cljs$core$IFn$_invoke$arity$1 ? fexpr__80856.cljs$core$IFn$_invoke$arity$1(source) : fexpr__80856.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__80855__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__80855__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80855__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__80855__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__80861 = top_data;
var G__80861__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80861,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__80861);
var G__80861__$2 = (cljs.core.truth_((function (){var fexpr__80862 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__80862.cljs$core$IFn$_invoke$arity$1 ? fexpr__80862.cljs$core$IFn$_invoke$arity$1(source) : fexpr__80862.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__80861__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__80861__$1);
var G__80861__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80861__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__80861__$2);
var G__80861__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80861__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__80861__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80861__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__80861__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__80863 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80863,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80863,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80863,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80863,(3),null);
var G__80866 = top_data;
var G__80866__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80866,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__80866);
var G__80866__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80866__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__80866__$1);
var G__80866__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80866__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__80866__$2);
var G__80866__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80866__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__80866__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80866__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__80866__$4;
}

break;
case "execution":
var vec__80869 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80869,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80869,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80869,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80869,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__80819_SHARP_){
var or__5045__auto__ = (p1__80819_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__80872 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__80872.cljs$core$IFn$_invoke$arity$1 ? fexpr__80872.cljs$core$IFn$_invoke$arity$1(p1__80819_SHARP_) : fexpr__80872.call(null,p1__80819_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__80873 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__80873__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80873,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__80873);
var G__80873__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80873__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__80873__$1);
var G__80873__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80873__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__80873__$2);
var G__80873__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80873__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__80873__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80873__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__80873__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80845__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__80878){
var map__80879 = p__80878;
var map__80879__$1 = cljs.core.__destructure_map(map__80879);
var triage_data = map__80879__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80879__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80879__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80879__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80879__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80879__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80879__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80879__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80879__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__80881 = phase;
var G__80881__$1 = (((G__80881 instanceof cljs.core.Keyword))?G__80881.fqn:null);
switch (G__80881__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__80882 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__80883 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__80884 = loc;
var G__80885 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__80887_81002 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__80888_81003 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__80889_81004 = true;
var _STAR_print_fn_STAR__temp_val__80890_81005 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__80889_81004);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__80890_81005);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80875_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__80875_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__80888_81003);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__80887_81002);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__80882,G__80883,G__80884,G__80885) : format.call(null,G__80882,G__80883,G__80884,G__80885));

break;
case "macroexpansion":
var G__80891 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__80892 = cause_type;
var G__80893 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__80894 = loc;
var G__80895 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__80891,G__80892,G__80893,G__80894,G__80895) : format.call(null,G__80891,G__80892,G__80893,G__80894,G__80895));

break;
case "compile-syntax-check":
var G__80896 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__80897 = cause_type;
var G__80898 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__80899 = loc;
var G__80900 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__80896,G__80897,G__80898,G__80899,G__80900) : format.call(null,G__80896,G__80897,G__80898,G__80899,G__80900));

break;
case "compilation":
var G__80901 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__80902 = cause_type;
var G__80903 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__80904 = loc;
var G__80905 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__80901,G__80902,G__80903,G__80904,G__80905) : format.call(null,G__80901,G__80902,G__80903,G__80904,G__80905));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__80906 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__80907 = symbol;
var G__80908 = loc;
var G__80909 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__80910_81007 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__80911_81008 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__80912_81009 = true;
var _STAR_print_fn_STAR__temp_val__80913_81010 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__80912_81009);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__80913_81010);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80876_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__80876_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__80911_81008);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__80910_81007);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__80906,G__80907,G__80908,G__80909) : format.call(null,G__80906,G__80907,G__80908,G__80909));
} else {
var G__80918 = "Execution error%s at %s(%s).\n%s\n";
var G__80919 = cause_type;
var G__80920 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__80921 = loc;
var G__80922 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__80918,G__80919,G__80920,G__80921,G__80922) : format.call(null,G__80918,G__80919,G__80920,G__80921,G__80922));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80881__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
