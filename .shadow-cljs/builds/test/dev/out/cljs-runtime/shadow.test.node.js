goog.provide('shadow.test.node');
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)], null),(function (m){
if(cljs.test.successful_QMARK_(m)){
return process.exit((0));
} else {
return process.exit((1));
}
}));
shadow.test.node.reset_test_data_BANG_ = (function shadow$test$node$reset_test_data_BANG_(){
return shadow.test.env.reset_test_data_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"sugbi.core-test","sugbi.core-test",-656491114,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return sugbi.core_test.test_home;},new cljs.core.Symbol("sugbi.core-test","test-home","sugbi.core-test/test-home",1255351481,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sugbi.core-test","sugbi.core-test",-656491114,null),new cljs.core.Symbol(null,"test-home","test-home",1948456799,null),"sugbi/core_test.cljs",(19),(1),(7),(7),cljs.core.List.EMPTY,null,(cljs.core.truth_(sugbi.core_test.test_home)?sugbi.core_test.test_home.cljs$lang$test:null)]))], null)], null)], null));
});
shadow.test.node.parse_args = (function shadow$test$node$parse_args(args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (opts,arg){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("--help",arg)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"help","help",-439233446),true);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("--list",arg)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"list","list",765357683),true);
} else {
if(clojure.string.starts_with_QMARK_(arg,"--test=")){
var test_arg = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(arg,(7));
var test_syms = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol,clojure.string.split.cljs$core$IFn$_invoke$arity$2(test_arg,","));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(opts,new cljs.core.Keyword(null,"test-syms","test-syms",338772208),cljs.core.into,test_syms);
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Unknown arg: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)].join('')], 0));

return opts;

}
}
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"test-syms","test-syms",338772208),cljs.core.PersistentVector.EMPTY], null),args);
});
shadow.test.node.find_matching_test_vars = (function shadow$test$node$find_matching_test_vars(test_syms){
var test_namespaces = cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.simple_symbol_QMARK_,test_syms));
var test_var_syms = cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.qualified_symbol_QMARK_,test_syms));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (the_var){
var map__52082 = cljs.core.meta(the_var);
var map__52082__$1 = cljs.core.__destructure_map(map__52082);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52082__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52082__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return ((cljs.core.contains_QMARK_(test_namespaces,ns)) || (cljs.core.contains_QMARK_(test_var_syms,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,name))));
}),shadow.test.env.get_test_vars());
});
shadow.test.node.execute_cli = (function shadow$test$node$execute_cli(p__52083){
var map__52084 = p__52083;
var map__52084__$1 = cljs.core.__destructure_map(map__52084);
var opts = map__52084__$1;
var test_syms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52084__$1,new cljs.core.Keyword(null,"test-syms","test-syms",338772208));
var help = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52084__$1,new cljs.core.Keyword(null,"help","help",-439233446));
var list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52084__$1,new cljs.core.Keyword(null,"list","list",765357683));
var test_env = cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(help)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Usage:"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  --list (list known test names)"], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  --test=<ns-to-test>,<fqn-symbol-to-test> (run test for namespace or single var, separated by comma)"], 0));
} else {
if(cljs.core.truth_(list)){
var seq__52085 = cljs.core.seq(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,shadow.test.env.get_tests()));
var chunk__52086 = null;
var count__52087 = (0);
var i__52088 = (0);
while(true){
if((i__52088 < count__52087)){
var vec__52107 = chunk__52086.cljs$core$IIndexed$_nth$arity$2(null,i__52088);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52107,(0),null);
var ns_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52107,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Namespace:",ns], 0));

var seq__52110_52126 = cljs.core.seq(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(ns_info));
var chunk__52112_52127 = null;
var count__52113_52128 = (0);
var i__52114_52129 = (0);
while(true){
if((i__52114_52129 < count__52113_52128)){
var var_52130 = chunk__52112_52127.cljs$core$IIndexed$_nth$arity$2(null,i__52114_52129);
var m_52131 = cljs.core.meta(var_52130);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m_52131)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m_52131))].join('')], 0));


var G__52132 = seq__52110_52126;
var G__52133 = chunk__52112_52127;
var G__52134 = count__52113_52128;
var G__52135 = (i__52114_52129 + (1));
seq__52110_52126 = G__52132;
chunk__52112_52127 = G__52133;
count__52113_52128 = G__52134;
i__52114_52129 = G__52135;
continue;
} else {
var temp__5804__auto___52136 = cljs.core.seq(seq__52110_52126);
if(temp__5804__auto___52136){
var seq__52110_52137__$1 = temp__5804__auto___52136;
if(cljs.core.chunked_seq_QMARK_(seq__52110_52137__$1)){
var c__5568__auto___52138 = cljs.core.chunk_first(seq__52110_52137__$1);
var G__52139 = cljs.core.chunk_rest(seq__52110_52137__$1);
var G__52140 = c__5568__auto___52138;
var G__52141 = cljs.core.count(c__5568__auto___52138);
var G__52142 = (0);
seq__52110_52126 = G__52139;
chunk__52112_52127 = G__52140;
count__52113_52128 = G__52141;
i__52114_52129 = G__52142;
continue;
} else {
var var_52143 = cljs.core.first(seq__52110_52137__$1);
var m_52144 = cljs.core.meta(var_52143);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m_52144)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m_52144))].join('')], 0));


var G__52145 = cljs.core.next(seq__52110_52137__$1);
var G__52146 = null;
var G__52147 = (0);
var G__52148 = (0);
seq__52110_52126 = G__52145;
chunk__52112_52127 = G__52146;
count__52113_52128 = G__52147;
i__52114_52129 = G__52148;
continue;
}
} else {
}
}
break;
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["---------------------------------"], 0));


var G__52149 = seq__52085;
var G__52150 = chunk__52086;
var G__52151 = count__52087;
var G__52152 = (i__52088 + (1));
seq__52085 = G__52149;
chunk__52086 = G__52150;
count__52087 = G__52151;
i__52088 = G__52152;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__52085);
if(temp__5804__auto__){
var seq__52085__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52085__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__52085__$1);
var G__52153 = cljs.core.chunk_rest(seq__52085__$1);
var G__52154 = c__5568__auto__;
var G__52155 = cljs.core.count(c__5568__auto__);
var G__52156 = (0);
seq__52085 = G__52153;
chunk__52086 = G__52154;
count__52087 = G__52155;
i__52088 = G__52156;
continue;
} else {
var vec__52116 = cljs.core.first(seq__52085__$1);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52116,(0),null);
var ns_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52116,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Namespace:",ns], 0));

var seq__52119_52157 = cljs.core.seq(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(ns_info));
var chunk__52121_52158 = null;
var count__52122_52159 = (0);
var i__52123_52160 = (0);
while(true){
if((i__52123_52160 < count__52122_52159)){
var var_52161 = chunk__52121_52158.cljs$core$IIndexed$_nth$arity$2(null,i__52123_52160);
var m_52162 = cljs.core.meta(var_52161);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m_52162)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m_52162))].join('')], 0));


var G__52163 = seq__52119_52157;
var G__52164 = chunk__52121_52158;
var G__52165 = count__52122_52159;
var G__52166 = (i__52123_52160 + (1));
seq__52119_52157 = G__52163;
chunk__52121_52158 = G__52164;
count__52122_52159 = G__52165;
i__52123_52160 = G__52166;
continue;
} else {
var temp__5804__auto___52167__$1 = cljs.core.seq(seq__52119_52157);
if(temp__5804__auto___52167__$1){
var seq__52119_52168__$1 = temp__5804__auto___52167__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52119_52168__$1)){
var c__5568__auto___52169 = cljs.core.chunk_first(seq__52119_52168__$1);
var G__52170 = cljs.core.chunk_rest(seq__52119_52168__$1);
var G__52171 = c__5568__auto___52169;
var G__52172 = cljs.core.count(c__5568__auto___52169);
var G__52173 = (0);
seq__52119_52157 = G__52170;
chunk__52121_52158 = G__52171;
count__52122_52159 = G__52172;
i__52123_52160 = G__52173;
continue;
} else {
var var_52174 = cljs.core.first(seq__52119_52168__$1);
var m_52175 = cljs.core.meta(var_52174);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m_52175)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m_52175))].join('')], 0));


var G__52176 = cljs.core.next(seq__52119_52168__$1);
var G__52177 = null;
var G__52178 = (0);
var G__52179 = (0);
seq__52119_52157 = G__52176;
chunk__52121_52158 = G__52177;
count__52122_52159 = G__52178;
i__52123_52160 = G__52179;
continue;
}
} else {
}
}
break;
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["---------------------------------"], 0));


var G__52180 = cljs.core.next(seq__52085__$1);
var G__52181 = null;
var G__52182 = (0);
var G__52183 = (0);
seq__52085 = G__52180;
chunk__52086 = G__52181;
count__52087 = G__52182;
i__52088 = G__52183;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core.seq(test_syms)){
var test_vars = shadow.test.node.find_matching_test_vars(test_syms);
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2(test_env,test_vars);
} else {
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(test_env,null);

}
}
}
});
shadow.test.node.main = (function shadow$test$node$main(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52184 = arguments.length;
var i__5770__auto___52185 = (0);
while(true){
if((i__5770__auto___52185 < len__5769__auto___52184)){
args__5775__auto__.push((arguments[i__5770__auto___52185]));

var G__52186 = (i__5770__auto___52185 + (1));
i__5770__auto___52185 = G__52186;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.test.node.main.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.test.node.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
shadow.test.node.reset_test_data_BANG_();

if(shadow.test.env.UI_DRIVEN){
return console.log("Waiting for UI ...");
} else {
var opts = shadow.test.node.parse_args(args);
return shadow.test.node.execute_cli(opts);
}
}));

(shadow.test.node.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.test.node.main.cljs$lang$applyTo = (function (seq52125){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52125));
}));


//# sourceMappingURL=shadow.test.node.js.map
