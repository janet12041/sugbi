goog.provide('pjstadig.util');
pjstadig.util.print_seq = (function pjstadig$util$print_seq(aseq){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__55001_55151 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__55002_55152 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__55003_55153 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__55004_55154 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__55003_55153);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__55004_55154);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out(cljs.core.ffirst(aseq));

pjstadig.print.rprint(" ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

(cljs.pprint._STAR_current_length_STAR_ = (0));

cljs.pprint.write_out(cljs.core.fnext(cljs.core.first(aseq)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__55002_55152);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__55001_55151);
}}

return null;
});
pjstadig.util.pprint_record = (function pjstadig$util$pprint_record(arec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__55060_55155 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__55061_55156 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__55062_55157 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__55063_55158 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__55062_55157);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__55063_55158);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,cljs.core.re_find(/.*?\{/,(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__55064_55162 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__55065_55163 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__55066_55164 = true;
var _STAR_print_fn_STAR__temp_val__55067_55165 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__55066_55164);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__55067_55165);

try{cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arec], 0));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__55065_55163);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__55064_55162);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})()),null,"}");

var length_count55070_55166 = (0);
var aseq_55167 = cljs.core.seq(arec);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count55070_55166 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_55167){
pjstadig.util.print_seq(aseq_55167);

if(cljs.core.next(aseq_55167)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", "], 0));

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__55168 = (length_count55070_55166 + (1));
var G__55169 = cljs.core.next(aseq_55167);
length_count55070_55166 = G__55168;
aseq_55167 = G__55169;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__55061_55156);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__55060_55155);
}}

return null;
});
pjstadig.util.report_ = (function pjstadig$util$report_(p__55102){
var map__55103 = p__55102;
var map__55103__$1 = cljs.core.__destructure_map(map__55103);
var event = map__55103__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55103__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55103__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55103__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var diffs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55103__$1,new cljs.core.Keyword(null,"diffs","diffs",-1720136241));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55103__$1,new cljs.core.Keyword(null,"message","message",-406056002));
cljs.test.inc_report_counter_BANG_(new cljs.core.Keyword(null,"fail","fail",1706214930));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\nFAIL in",cljs.test.testing_vars_str(event)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env()))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.test.testing_contexts_str()], 0));
} else {
}

if(cljs.core.truth_(message)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([message], 0));
} else {
}

return pjstadig.print.with_pretty_writer((function (){
var print_expected = (function (actual__$1){
pjstadig.print.rprint("expected: ");

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(expected,cljs.core._STAR_out_STAR_);

pjstadig.print.rprint("  actual: ");

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(actual__$1,cljs.core._STAR_out_STAR_);

return pjstadig.print.clear();
});
if(cljs.core.seq(diffs)){
var seq__55115 = cljs.core.seq(diffs);
var chunk__55116 = null;
var count__55117 = (0);
var i__55118 = (0);
while(true){
if((i__55118 < count__55117)){
var vec__55137 = chunk__55116.cljs$core$IIndexed$_nth$arity$2(null,i__55118);
var actual__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55137,(0),null);
var vec__55140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55137,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55140,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55140,(1),null);
print_expected(actual__$1);

if((((!((expected == null)))) && ((!((actual__$1 == null)))))){
pjstadig.print.rprint("    diff:");

if(cljs.core.truth_(a)){
pjstadig.print.rprint(" - ");

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(a,cljs.core._STAR_out_STAR_);

pjstadig.print.rprint("          + ");
} else {
pjstadig.print.rprint(" + ");
}

if(cljs.core.truth_(b)){
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(b,cljs.core._STAR_out_STAR_);
} else {
}

pjstadig.print.clear();
} else {
}


var G__55176 = seq__55115;
var G__55177 = chunk__55116;
var G__55178 = count__55117;
var G__55179 = (i__55118 + (1));
seq__55115 = G__55176;
chunk__55116 = G__55177;
count__55117 = G__55178;
i__55118 = G__55179;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__55115);
if(temp__5804__auto__){
var seq__55115__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55115__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__55115__$1);
var G__55180 = cljs.core.chunk_rest(seq__55115__$1);
var G__55181 = c__5568__auto__;
var G__55182 = cljs.core.count(c__5568__auto__);
var G__55183 = (0);
seq__55115 = G__55180;
chunk__55116 = G__55181;
count__55117 = G__55182;
i__55118 = G__55183;
continue;
} else {
var vec__55144 = cljs.core.first(seq__55115__$1);
var actual__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55144,(0),null);
var vec__55147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55144,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55147,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55147,(1),null);
print_expected(actual__$1);

if((((!((expected == null)))) && ((!((actual__$1 == null)))))){
pjstadig.print.rprint("    diff:");

if(cljs.core.truth_(a)){
pjstadig.print.rprint(" - ");

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(a,cljs.core._STAR_out_STAR_);

pjstadig.print.rprint("          + ");
} else {
pjstadig.print.rprint(" + ");
}

if(cljs.core.truth_(b)){
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(b,cljs.core._STAR_out_STAR_);
} else {
}

pjstadig.print.clear();
} else {
}


var G__55184 = cljs.core.next(seq__55115__$1);
var G__55185 = null;
var G__55186 = (0);
var G__55187 = (0);
seq__55115 = G__55184;
chunk__55116 = G__55185;
count__55117 = G__55186;
i__55118 = G__55187;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return print_expected(actual);
}
}));
});
pjstadig.util.define_fail_report = (function pjstadig$util$define_fail_report(){
return cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (event){
return pjstadig.util.report_(pjstadig.print.convert_event(event));
}));
});

//# sourceMappingURL=pjstadig.util.js.map
