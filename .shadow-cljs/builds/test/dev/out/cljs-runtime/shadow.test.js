goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__60203){
var vec__60204 = p__60203;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60204,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60204,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__60207 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__60207__$1 = (((G__60207 instanceof cljs.core.Keyword))?G__60207.fqn:null);
switch (G__60207__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__60209 = (function (){
var seq__60210 = cljs.core.seq(vars__$1);
var chunk__60211 = null;
var count__60212 = (0);
var i__60213 = (0);
while(true){
if((i__60213 < count__60212)){
var v = chunk__60211.cljs$core$IIndexed$_nth$arity$2(null,i__60213);
var temp__5804__auto___60259 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5804__auto___60259)){
var t_60260 = temp__5804__auto___60259;
var G__60218_60261 = ((function (seq__60210,chunk__60211,count__60212,i__60213,t_60260,temp__5804__auto___60259,v,each_fixture_fn,G__60207,G__60207__$1,env,once_fixtures,each_fixtures,vec__60204,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_60260)));
});})(seq__60210,chunk__60211,count__60212,i__60213,t_60260,temp__5804__auto___60259,v,each_fixture_fn,G__60207,G__60207__$1,env,once_fixtures,each_fixtures,vec__60204,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__60218_60261) : each_fixture_fn.call(null,G__60218_60261));
} else {
}


var G__60262 = seq__60210;
var G__60263 = chunk__60211;
var G__60264 = count__60212;
var G__60265 = (i__60213 + (1));
seq__60210 = G__60262;
chunk__60211 = G__60263;
count__60212 = G__60264;
i__60213 = G__60265;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__60210);
if(temp__5804__auto__){
var seq__60210__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60210__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__60210__$1);
var G__60266 = cljs.core.chunk_rest(seq__60210__$1);
var G__60267 = c__5568__auto__;
var G__60268 = cljs.core.count(c__5568__auto__);
var G__60269 = (0);
seq__60210 = G__60266;
chunk__60211 = G__60267;
count__60212 = G__60268;
i__60213 = G__60269;
continue;
} else {
var v = cljs.core.first(seq__60210__$1);
var temp__5804__auto___60270__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5804__auto___60270__$1)){
var t_60271 = temp__5804__auto___60270__$1;
var G__60219_60272 = ((function (seq__60210,chunk__60211,count__60212,i__60213,t_60271,temp__5804__auto___60270__$1,v,seq__60210__$1,temp__5804__auto__,each_fixture_fn,G__60207,G__60207__$1,env,once_fixtures,each_fixtures,vec__60204,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_60271)));
});})(seq__60210,chunk__60211,count__60212,i__60213,t_60271,temp__5804__auto___60270__$1,v,seq__60210__$1,temp__5804__auto__,each_fixture_fn,G__60207,G__60207__$1,env,once_fixtures,each_fixtures,vec__60204,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__60219_60272) : each_fixture_fn.call(null,G__60219_60272));
} else {
}


var G__60273 = cljs.core.next(seq__60210__$1);
var G__60274 = null;
var G__60275 = (0);
var G__60276 = (0);
seq__60210 = G__60273;
chunk__60211 = G__60274;
count__60212 = G__60275;
i__60213 = G__60276;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__60208 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__60208.cljs$core$IFn$_invoke$arity$1 ? fexpr__60208.cljs$core$IFn$_invoke$arity$1(G__60209) : fexpr__60208.call(null,G__60209));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60207__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__60202_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__60202_SHARP_));
}),vars))], 0));
});
/**
 * Like test-ns, but returns a block for further composition and
 *   later execution.  Does not clear the current env.
 */
shadow.test.test_ns_block = (function shadow$test$test_ns_block(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

var map__60220 = shadow.test.env.get_test_ns_info(ns);
var map__60220__$1 = cljs.core.__destructure_map(map__60220);
var test_ns = map__60220__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60220__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__60222,vars){
var map__60223 = p__60222;
var map__60223__$1 = cljs.core.__destructure_map(map__60223);
var env = map__60223__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60223__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__60224_60277 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__60226_60278 = null;
var count__60227_60279 = (0);
var i__60228_60280 = (0);
while(true){
if((i__60228_60280 < count__60227_60279)){
var vec__60238_60281 = chunk__60226_60278.cljs$core$IIndexed$_nth$arity$2(null,i__60228_60280);
var test_ns_60282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60238_60281,(0),null);
var ns_info_60283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60238_60281,(1),null);
var map__60241_60284 = ns_info_60283;
var map__60241_60285__$1 = cljs.core.__destructure_map(map__60241_60284);
var fixtures_60286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60241_60285__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5804__auto___60287 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_60286);
if(cljs.core.truth_(temp__5804__auto___60287)){
var fix_60288 = temp__5804__auto___60287;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_60282,fix_60288], 0));
} else {
}

var temp__5804__auto___60289 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_60286);
if(cljs.core.truth_(temp__5804__auto___60289)){
var fix_60290 = temp__5804__auto___60289;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_60282,fix_60290], 0));
} else {
}


var G__60291 = seq__60224_60277;
var G__60292 = chunk__60226_60278;
var G__60293 = count__60227_60279;
var G__60294 = (i__60228_60280 + (1));
seq__60224_60277 = G__60291;
chunk__60226_60278 = G__60292;
count__60227_60279 = G__60293;
i__60228_60280 = G__60294;
continue;
} else {
var temp__5804__auto___60295 = cljs.core.seq(seq__60224_60277);
if(temp__5804__auto___60295){
var seq__60224_60296__$1 = temp__5804__auto___60295;
if(cljs.core.chunked_seq_QMARK_(seq__60224_60296__$1)){
var c__5568__auto___60297 = cljs.core.chunk_first(seq__60224_60296__$1);
var G__60298 = cljs.core.chunk_rest(seq__60224_60296__$1);
var G__60299 = c__5568__auto___60297;
var G__60300 = cljs.core.count(c__5568__auto___60297);
var G__60301 = (0);
seq__60224_60277 = G__60298;
chunk__60226_60278 = G__60299;
count__60227_60279 = G__60300;
i__60228_60280 = G__60301;
continue;
} else {
var vec__60242_60302 = cljs.core.first(seq__60224_60296__$1);
var test_ns_60303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60242_60302,(0),null);
var ns_info_60304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60242_60302,(1),null);
var map__60245_60305 = ns_info_60304;
var map__60245_60306__$1 = cljs.core.__destructure_map(map__60245_60305);
var fixtures_60307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60245_60306__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5804__auto___60308__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_60307);
if(cljs.core.truth_(temp__5804__auto___60308__$1)){
var fix_60309 = temp__5804__auto___60308__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_60303,fix_60309], 0));
} else {
}

var temp__5804__auto___60310__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_60307);
if(cljs.core.truth_(temp__5804__auto___60310__$1)){
var fix_60311 = temp__5804__auto___60310__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_60303,fix_60311], 0));
} else {
}


var G__60312 = cljs.core.next(seq__60224_60296__$1);
var G__60313 = null;
var G__60314 = (0);
var G__60315 = (0);
seq__60224_60277 = G__60312;
chunk__60226_60278 = G__60313;
count__60227_60279 = G__60314;
i__60228_60280 = G__60315;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60221_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__60221_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__60246 = cljs.test.get_current_env();
var map__60246__$1 = cljs.core.__destructure_map(map__60246);
var env = map__60246__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60246__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60246__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__60248 = arguments.length;
switch (G__60248) {
case 1:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1 = (function (test_vars){
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),test_vars);
}));

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2 = (function (env,vars){
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_test_vars.cljs$lang$maxFixedArity = 2);

/**
 * test all vars for given namespace symbol
 */
shadow.test.test_ns = (function shadow$test$test_ns(var_args){
var G__60250 = arguments.length;
switch (G__60250) {
case 1:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),ns);
}));

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2 = (function (env,ns){
var map__60251 = shadow.test.env.get_test_ns_info(ns);
var map__60251__$1 = cljs.core.__destructure_map(map__60251);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60251__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__60254 = arguments.length;
switch (G__60254) {
case 0:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,shadow.test.env.get_test_namespaces());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,namespaces){
if(cljs.core.set_QMARK_(namespaces)){
} else {
throw (new Error("Assert failed: (set? namespaces)"));
}

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60252_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__60252_SHARP_)));
}),shadow.test.env.get_test_vars());
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_tests.cljs$lang$maxFixedArity = 2);

/**
 * Runs all tests in all namespaces; prints results.
 *   Optional argument is a regular expression; only namespaces with
 *   names matching the regular expression (with re-matches) will be
 *   tested.
 */
shadow.test.run_all_tests = (function shadow$test$run_all_tests(var_args){
var G__60257 = arguments.length;
switch (G__60257) {
case 0:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(env,null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,re){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60255_SHARP_){
var or__5045__auto__ = (re == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__60255_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
