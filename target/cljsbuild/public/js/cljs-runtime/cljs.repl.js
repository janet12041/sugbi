goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__76716){
var map__76717 = p__76716;
var map__76717__$1 = cljs.core.__destructure_map(map__76717);
var m = map__76717__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76717__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76717__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__76718_76824 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__76719_76825 = null;
var count__76720_76826 = (0);
var i__76721_76827 = (0);
while(true){
if((i__76721_76827 < count__76720_76826)){
var f_76828 = chunk__76719_76825.cljs$core$IIndexed$_nth$arity$2(null,i__76721_76827);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_76828], 0));


var G__76829 = seq__76718_76824;
var G__76830 = chunk__76719_76825;
var G__76831 = count__76720_76826;
var G__76832 = (i__76721_76827 + (1));
seq__76718_76824 = G__76829;
chunk__76719_76825 = G__76830;
count__76720_76826 = G__76831;
i__76721_76827 = G__76832;
continue;
} else {
var temp__5804__auto___76833 = cljs.core.seq(seq__76718_76824);
if(temp__5804__auto___76833){
var seq__76718_76834__$1 = temp__5804__auto___76833;
if(cljs.core.chunked_seq_QMARK_(seq__76718_76834__$1)){
var c__5568__auto___76835 = cljs.core.chunk_first(seq__76718_76834__$1);
var G__76836 = cljs.core.chunk_rest(seq__76718_76834__$1);
var G__76837 = c__5568__auto___76835;
var G__76838 = cljs.core.count(c__5568__auto___76835);
var G__76839 = (0);
seq__76718_76824 = G__76836;
chunk__76719_76825 = G__76837;
count__76720_76826 = G__76838;
i__76721_76827 = G__76839;
continue;
} else {
var f_76841 = cljs.core.first(seq__76718_76834__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_76841], 0));


var G__76842 = cljs.core.next(seq__76718_76834__$1);
var G__76843 = null;
var G__76844 = (0);
var G__76845 = (0);
seq__76718_76824 = G__76842;
chunk__76719_76825 = G__76843;
count__76720_76826 = G__76844;
i__76721_76827 = G__76845;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_76846 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_76846], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_76846)))?cljs.core.second(arglists_76846):arglists_76846)], 0));
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
var seq__76729_76847 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__76730_76848 = null;
var count__76731_76849 = (0);
var i__76732_76850 = (0);
while(true){
if((i__76732_76850 < count__76731_76849)){
var vec__76746_76851 = chunk__76730_76848.cljs$core$IIndexed$_nth$arity$2(null,i__76732_76850);
var name_76852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76746_76851,(0),null);
var map__76749_76853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76746_76851,(1),null);
var map__76749_76854__$1 = cljs.core.__destructure_map(map__76749_76853);
var doc_76855 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76749_76854__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_76856 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76749_76854__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_76852], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_76856], 0));

if(cljs.core.truth_(doc_76855)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_76855], 0));
} else {
}


var G__76857 = seq__76729_76847;
var G__76858 = chunk__76730_76848;
var G__76859 = count__76731_76849;
var G__76860 = (i__76732_76850 + (1));
seq__76729_76847 = G__76857;
chunk__76730_76848 = G__76858;
count__76731_76849 = G__76859;
i__76732_76850 = G__76860;
continue;
} else {
var temp__5804__auto___76861 = cljs.core.seq(seq__76729_76847);
if(temp__5804__auto___76861){
var seq__76729_76863__$1 = temp__5804__auto___76861;
if(cljs.core.chunked_seq_QMARK_(seq__76729_76863__$1)){
var c__5568__auto___76864 = cljs.core.chunk_first(seq__76729_76863__$1);
var G__76865 = cljs.core.chunk_rest(seq__76729_76863__$1);
var G__76866 = c__5568__auto___76864;
var G__76867 = cljs.core.count(c__5568__auto___76864);
var G__76868 = (0);
seq__76729_76847 = G__76865;
chunk__76730_76848 = G__76866;
count__76731_76849 = G__76867;
i__76732_76850 = G__76868;
continue;
} else {
var vec__76750_76869 = cljs.core.first(seq__76729_76863__$1);
var name_76870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76750_76869,(0),null);
var map__76753_76871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76750_76869,(1),null);
var map__76753_76872__$1 = cljs.core.__destructure_map(map__76753_76871);
var doc_76873 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76753_76872__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_76874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76753_76872__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_76870], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_76874], 0));

if(cljs.core.truth_(doc_76873)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_76873], 0));
} else {
}


var G__76875 = cljs.core.next(seq__76729_76863__$1);
var G__76876 = null;
var G__76877 = (0);
var G__76878 = (0);
seq__76729_76847 = G__76875;
chunk__76730_76848 = G__76876;
count__76731_76849 = G__76877;
i__76732_76850 = G__76878;
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

var seq__76754 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__76755 = null;
var count__76756 = (0);
var i__76757 = (0);
while(true){
if((i__76757 < count__76756)){
var role = chunk__76755.cljs$core$IIndexed$_nth$arity$2(null,i__76757);
var temp__5804__auto___76879__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___76879__$1)){
var spec_76881 = temp__5804__auto___76879__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_76881)], 0));
} else {
}


var G__76885 = seq__76754;
var G__76886 = chunk__76755;
var G__76887 = count__76756;
var G__76888 = (i__76757 + (1));
seq__76754 = G__76885;
chunk__76755 = G__76886;
count__76756 = G__76887;
i__76757 = G__76888;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__76754);
if(temp__5804__auto____$1){
var seq__76754__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__76754__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__76754__$1);
var G__76889 = cljs.core.chunk_rest(seq__76754__$1);
var G__76890 = c__5568__auto__;
var G__76891 = cljs.core.count(c__5568__auto__);
var G__76892 = (0);
seq__76754 = G__76889;
chunk__76755 = G__76890;
count__76756 = G__76891;
i__76757 = G__76892;
continue;
} else {
var role = cljs.core.first(seq__76754__$1);
var temp__5804__auto___76893__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___76893__$2)){
var spec_76894 = temp__5804__auto___76893__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_76894)], 0));
} else {
}


var G__76895 = cljs.core.next(seq__76754__$1);
var G__76896 = null;
var G__76897 = (0);
var G__76898 = (0);
seq__76754 = G__76895;
chunk__76755 = G__76896;
count__76756 = G__76897;
i__76757 = G__76898;
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
var G__76899 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__76900 = cljs.core.ex_cause(t);
via = G__76899;
t = G__76900;
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
var map__76760 = datafied_throwable;
var map__76760__$1 = cljs.core.__destructure_map(map__76760);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76760__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76760__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__76760__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__76761 = cljs.core.last(via);
var map__76761__$1 = cljs.core.__destructure_map(map__76761);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76761__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76761__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76761__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__76762 = data;
var map__76762__$1 = cljs.core.__destructure_map(map__76762);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76762__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76762__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76762__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__76763 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__76763__$1 = cljs.core.__destructure_map(map__76763);
var top_data = map__76763__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76763__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__76764 = phase;
var G__76764__$1 = (((G__76764 instanceof cljs.core.Keyword))?G__76764.fqn:null);
switch (G__76764__$1) {
case "read-source":
var map__76765 = data;
var map__76765__$1 = cljs.core.__destructure_map(map__76765);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76765__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76765__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__76766 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__76766__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__76766,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__76766);
var G__76766__$2 = (cljs.core.truth_((function (){var fexpr__76767 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__76767.cljs$core$IFn$_invoke$arity$1 ? fexpr__76767.cljs$core$IFn$_invoke$arity$1(source) : fexpr__76767.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__76766__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__76766__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__76766__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__76766__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__76768 = top_data;
var G__76768__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__76768,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__76768);
var G__76768__$2 = (cljs.core.truth_((function (){var fexpr__76769 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__76769.cljs$core$IFn$_invoke$arity$1 ? fexpr__76769.cljs$core$IFn$_invoke$arity$1(source) : fexpr__76769.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__76768__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__76768__$1);
var G__76768__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__76768__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__76768__$2);
var G__76768__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__76768__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__76768__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__76768__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__76768__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__76770 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76770,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76770,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76770,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76770,(3),null);
var G__76773 = top_data;
var G__76773__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__76773,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__76773);
var G__76773__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__76773__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__76773__$1);
var G__76773__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__76773__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__76773__$2);
var G__76773__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__76773__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__76773__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__76773__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__76773__$4;
}

break;
case "execution":
var vec__76774 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76774,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76774,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76774,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76774,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__76759_SHARP_){
var or__5045__auto__ = (p1__76759_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__76777 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__76777.cljs$core$IFn$_invoke$arity$1 ? fexpr__76777.cljs$core$IFn$_invoke$arity$1(p1__76759_SHARP_) : fexpr__76777.call(null,p1__76759_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__76778 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__76778__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__76778,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__76778);
var G__76778__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__76778__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__76778__$1);
var G__76778__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__76778__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__76778__$2);
var G__76778__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__76778__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__76778__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__76778__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__76778__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__76764__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__76781){
var map__76782 = p__76781;
var map__76782__$1 = cljs.core.__destructure_map(map__76782);
var triage_data = map__76782__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76782__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76782__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76782__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76782__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76782__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76782__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76782__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76782__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__76783 = phase;
var G__76783__$1 = (((G__76783 instanceof cljs.core.Keyword))?G__76783.fqn:null);
switch (G__76783__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__76784 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__76785 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__76786 = loc;
var G__76787 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__76788_76903 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__76789_76904 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__76790_76905 = true;
var _STAR_print_fn_STAR__temp_val__76791_76906 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__76790_76905);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__76791_76906);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__76779_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__76779_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__76789_76904);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__76788_76903);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__76784,G__76785,G__76786,G__76787) : format.call(null,G__76784,G__76785,G__76786,G__76787));

break;
case "macroexpansion":
var G__76792 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__76793 = cause_type;
var G__76794 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__76795 = loc;
var G__76796 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__76792,G__76793,G__76794,G__76795,G__76796) : format.call(null,G__76792,G__76793,G__76794,G__76795,G__76796));

break;
case "compile-syntax-check":
var G__76797 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__76798 = cause_type;
var G__76799 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__76800 = loc;
var G__76801 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__76797,G__76798,G__76799,G__76800,G__76801) : format.call(null,G__76797,G__76798,G__76799,G__76800,G__76801));

break;
case "compilation":
var G__76802 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__76803 = cause_type;
var G__76804 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__76805 = loc;
var G__76806 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__76802,G__76803,G__76804,G__76805,G__76806) : format.call(null,G__76802,G__76803,G__76804,G__76805,G__76806));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__76807 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__76808 = symbol;
var G__76809 = loc;
var G__76810 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__76811_76911 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__76812_76912 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__76813_76913 = true;
var _STAR_print_fn_STAR__temp_val__76814_76914 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__76813_76913);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__76814_76914);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__76780_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__76780_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__76812_76912);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__76811_76911);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__76807,G__76808,G__76809,G__76810) : format.call(null,G__76807,G__76808,G__76809,G__76810));
} else {
var G__76815 = "Execution error%s at %s(%s).\n%s\n";
var G__76816 = cause_type;
var G__76817 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__76818 = loc;
var G__76819 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__76815,G__76816,G__76817,G__76818,G__76819) : format.call(null,G__76815,G__76816,G__76817,G__76818,G__76819));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__76783__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
