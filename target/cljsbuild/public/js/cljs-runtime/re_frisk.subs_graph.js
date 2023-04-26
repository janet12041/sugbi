goog.provide('re_frisk.subs_graph');
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.network !== 'undefined')){
} else {
re_frisk.subs_graph.network = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.reaction__GT_operation !== 'undefined')){
} else {
re_frisk.subs_graph.reaction__GT_operation = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.view__GT_reactions !== 'undefined')){
} else {
re_frisk.subs_graph.view__GT_reactions = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.vis !== 'undefined')){
} else {
re_frisk.subs_graph.vis = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.doc !== 'undefined')){
} else {
re_frisk.subs_graph.doc = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.nodes !== 'undefined')){
} else {
re_frisk.subs_graph.nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.edges !== 'undefined')){
} else {
re_frisk.subs_graph.edges = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.options !== 'undefined')){
} else {
re_frisk.subs_graph.options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"physics","physics",-1254209137),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"solver","solver",-744421825),"forceAtlas2Based",new cljs.core.Keyword(null,"maxVelocity","maxVelocity",1721643083),(30),new cljs.core.Keyword(null,"minVelocity","minVelocity",-32716928),(10),new cljs.core.Keyword(null,"stabilization","stabilization",-1209068026),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"iterations","iterations",-1402710890),(30)], null)], null)], null));
}
re_frisk.subs_graph.init = (function re_frisk$subs_graph$init(win,document){
cljs.core.reset_BANG_(re_frisk.subs_graph.vis,win.vis);

return cljs.core.reset_BANG_(re_frisk.subs_graph.doc,document);
});
re_frisk.subs_graph.set_root_node = (function re_frisk$subs_graph$set_root_node(reaction){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),reaction))){
return null;
} else {
var data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"app-db",new cljs.core.Keyword(null,"label","label",1718410804),"app-db",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"yellow","yellow",-881035449)], null)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction,data);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction,"app-db");

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js(data));
} else {
return null;
}
}
});
re_frisk.subs_graph.destroy = (function re_frisk$subs_graph$destroy(){
var temp__5804__auto__ = new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network));
if(cljs.core.truth_(temp__5804__auto__)){
var network_js = temp__5804__auto__;
network_js.destroy();

return cljs.core.reset_BANG_(re_frisk.subs_graph.network,null);
} else {
return null;
}
});
re_frisk.subs_graph.create = (function re_frisk$subs_graph$create(){
re_frisk.subs_graph.destroy();

if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.deref(re_frisk.subs_graph.vis);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.deref(re_frisk.subs_graph.doc);
} else {
return and__5043__auto__;
}
})())){
var Network = cljs.core.deref(re_frisk.subs_graph.vis).Network;
var DataSet = cljs.core.deref(re_frisk.subs_graph.vis).DataSet;
var nodes_ds = (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(re_frisk.subs_graph.nodes)))));
var edges_ds = (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(re_frisk.subs_graph.edges)))));
var data = ({"nodes": nodes_ds, "edges": edges_ds});
var temp__5804__auto__ = cljs.core.deref(re_frisk.subs_graph.doc).getElementById("global-subs-graph-container");
if(cljs.core.truth_(temp__5804__auto__)){
var container = temp__5804__auto__;
return cljs.core.reset_BANG_(re_frisk.subs_graph.network,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"network","network",2050004697),(new Network(container,data,re_frisk.subs_graph.options))], null));
} else {
return null;
}
} else {
return null;
}
});
re_frisk.subs_graph.update_subs = (function re_frisk$subs_graph$update_subs(traces){
var temp__5804__auto___68058 = new cljs.core.Keyword(null,"app-db-reaction","app-db-reaction",-269835135).cljs$core$IFn$_invoke$arity$1(cljs.core.first(traces));
if(cljs.core.truth_(temp__5804__auto___68058)){
var app_db_reaction_68059 = temp__5804__auto___68058;
re_frisk.subs_graph.set_root_node(app_db_reaction_68059);
} else {
}

var seq__67650_68061 = cljs.core.seq(traces);
var chunk__67651_68062 = null;
var count__67652_68063 = (0);
var i__67653_68064 = (0);
while(true){
if((i__67653_68064 < count__67652_68063)){
var map__67676_68065 = chunk__67651_68062.cljs$core$IIndexed$_nth$arity$2(null,i__67653_68064);
var map__67676_68066__$1 = cljs.core.__destructure_map(map__67676_68065);
var subs_68067 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67676_68066__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__67677_68068 = cljs.core.seq(subs_68067);
var chunk__67678_68069 = null;
var count__67679_68070 = (0);
var i__67680_68071 = (0);
while(true){
if((i__67680_68071 < count__67679_68070)){
var map__67683_68072 = chunk__67678_68069.cljs$core$IIndexed$_nth$arity$2(null,i__67680_68071);
var map__67683_68073__$1 = cljs.core.__destructure_map(map__67683_68072);
var operation_68074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67683_68073__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_68075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67683_68073__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.truth_(reaction_68075)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction_68075,operation_68074);
} else {
}


var G__68077 = seq__67677_68068;
var G__68078 = chunk__67678_68069;
var G__68079 = count__67679_68070;
var G__68080 = (i__67680_68071 + (1));
seq__67677_68068 = G__68077;
chunk__67678_68069 = G__68078;
count__67679_68070 = G__68079;
i__67680_68071 = G__68080;
continue;
} else {
var temp__5804__auto___68081 = cljs.core.seq(seq__67677_68068);
if(temp__5804__auto___68081){
var seq__67677_68082__$1 = temp__5804__auto___68081;
if(cljs.core.chunked_seq_QMARK_(seq__67677_68082__$1)){
var c__5568__auto___68083 = cljs.core.chunk_first(seq__67677_68082__$1);
var G__68084 = cljs.core.chunk_rest(seq__67677_68082__$1);
var G__68085 = c__5568__auto___68083;
var G__68086 = cljs.core.count(c__5568__auto___68083);
var G__68087 = (0);
seq__67677_68068 = G__68084;
chunk__67678_68069 = G__68085;
count__67679_68070 = G__68086;
i__67680_68071 = G__68087;
continue;
} else {
var map__67685_68088 = cljs.core.first(seq__67677_68082__$1);
var map__67685_68089__$1 = cljs.core.__destructure_map(map__67685_68088);
var operation_68090 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67685_68089__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_68091 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67685_68089__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.truth_(reaction_68091)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction_68091,operation_68090);
} else {
}


var G__68093 = cljs.core.next(seq__67677_68082__$1);
var G__68094 = null;
var G__68095 = (0);
var G__68096 = (0);
seq__67677_68068 = G__68093;
chunk__67678_68069 = G__68094;
count__67679_68070 = G__68095;
i__67680_68071 = G__68096;
continue;
}
} else {
}
}
break;
}


var G__68097 = seq__67650_68061;
var G__68098 = chunk__67651_68062;
var G__68099 = count__67652_68063;
var G__68100 = (i__67653_68064 + (1));
seq__67650_68061 = G__68097;
chunk__67651_68062 = G__68098;
count__67652_68063 = G__68099;
i__67653_68064 = G__68100;
continue;
} else {
var temp__5804__auto___68101 = cljs.core.seq(seq__67650_68061);
if(temp__5804__auto___68101){
var seq__67650_68102__$1 = temp__5804__auto___68101;
if(cljs.core.chunked_seq_QMARK_(seq__67650_68102__$1)){
var c__5568__auto___68103 = cljs.core.chunk_first(seq__67650_68102__$1);
var G__68104 = cljs.core.chunk_rest(seq__67650_68102__$1);
var G__68105 = c__5568__auto___68103;
var G__68106 = cljs.core.count(c__5568__auto___68103);
var G__68107 = (0);
seq__67650_68061 = G__68104;
chunk__67651_68062 = G__68105;
count__67652_68063 = G__68106;
i__67653_68064 = G__68107;
continue;
} else {
var map__67686_68108 = cljs.core.first(seq__67650_68102__$1);
var map__67686_68109__$1 = cljs.core.__destructure_map(map__67686_68108);
var subs_68110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67686_68109__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__67687_68111 = cljs.core.seq(subs_68110);
var chunk__67688_68112 = null;
var count__67689_68113 = (0);
var i__67690_68114 = (0);
while(true){
if((i__67690_68114 < count__67689_68113)){
var map__67697_68116 = chunk__67688_68112.cljs$core$IIndexed$_nth$arity$2(null,i__67690_68114);
var map__67697_68117__$1 = cljs.core.__destructure_map(map__67697_68116);
var operation_68118 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67697_68117__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_68119 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67697_68117__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.truth_(reaction_68119)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction_68119,operation_68118);
} else {
}


var G__68120 = seq__67687_68111;
var G__68121 = chunk__67688_68112;
var G__68122 = count__67689_68113;
var G__68123 = (i__67690_68114 + (1));
seq__67687_68111 = G__68120;
chunk__67688_68112 = G__68121;
count__67689_68113 = G__68122;
i__67690_68114 = G__68123;
continue;
} else {
var temp__5804__auto___68124__$1 = cljs.core.seq(seq__67687_68111);
if(temp__5804__auto___68124__$1){
var seq__67687_68125__$1 = temp__5804__auto___68124__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67687_68125__$1)){
var c__5568__auto___68126 = cljs.core.chunk_first(seq__67687_68125__$1);
var G__68128 = cljs.core.chunk_rest(seq__67687_68125__$1);
var G__68129 = c__5568__auto___68126;
var G__68130 = cljs.core.count(c__5568__auto___68126);
var G__68131 = (0);
seq__67687_68111 = G__68128;
chunk__67688_68112 = G__68129;
count__67689_68113 = G__68130;
i__67690_68114 = G__68131;
continue;
} else {
var map__67700_68132 = cljs.core.first(seq__67687_68125__$1);
var map__67700_68133__$1 = cljs.core.__destructure_map(map__67700_68132);
var operation_68134 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67700_68133__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_68135 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67700_68133__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.truth_(reaction_68135)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction_68135,operation_68134);
} else {
}


var G__68136 = cljs.core.next(seq__67687_68125__$1);
var G__68137 = null;
var G__68138 = (0);
var G__68139 = (0);
seq__67687_68111 = G__68136;
chunk__67688_68112 = G__68137;
count__67689_68113 = G__68138;
i__67690_68114 = G__68139;
continue;
}
} else {
}
}
break;
}


var G__68140 = cljs.core.next(seq__67650_68102__$1);
var G__68141 = null;
var G__68142 = (0);
var G__68143 = (0);
seq__67650_68061 = G__68140;
chunk__67651_68062 = G__68141;
count__67652_68063 = G__68142;
i__67653_68064 = G__68143;
continue;
}
} else {
}
}
break;
}

var new_nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__67701_68145 = cljs.core.seq(traces);
var chunk__67702_68146 = null;
var count__67703_68147 = (0);
var i__67704_68148 = (0);
while(true){
if((i__67704_68148 < count__67703_68147)){
var map__67819_68149 = chunk__67702_68146.cljs$core$IIndexed$_nth$arity$2(null,i__67704_68148);
var map__67819_68150__$1 = cljs.core.__destructure_map(map__67819_68149);
var subs_68151 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67819_68150__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__67820_68152 = cljs.core.seq(subs_68151);
var chunk__67821_68153 = null;
var count__67822_68154 = (0);
var i__67823_68155 = (0);
while(true){
if((i__67823_68155 < count__67822_68154)){
var map__67863_68156 = chunk__67821_68153.cljs$core$IIndexed$_nth$arity$2(null,i__67823_68155);
var map__67863_68157__$1 = cljs.core.__destructure_map(map__67863_68156);
var op_type_68158 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67863_68157__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var input_signals_68159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67863_68157__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_68160 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67863_68157__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_68161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67863_68157__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_68158,new cljs.core.Keyword(null,"create-class","create-class",1988524183))){
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_68158,new cljs.core.Keyword(null,"render","render",-1408033454));
if(and__5043__auto__){
return input_signals_68159;
} else {
return and__5043__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.view__GT_reactions,cljs.core.assoc,operation_68160,input_signals_68159);
} else {
}

var operation_68163__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_68160);
if(cljs.core.truth_(reaction_68161)){
var temp__5802__auto___68164 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),operation_68163__$1);
if(cljs.core.truth_(temp__5802__auto___68164)){
var old_reaction_68165 = temp__5802__auto___68164;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_68158,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_68165))){
var updated_node_68166 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_68165,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_68158,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_68158)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_68163__$1,updated_node_68166);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new_nodes),operation_68163__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_68163__$1,updated_node_68166);
} else {
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_68166], null)));
}
} else {
}
} else {
}
} else {
var data_68169 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),operation_68163__$1,new cljs.core.Keyword(null,"label","label",1718410804),operation_68163__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_68158)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_68158], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_68163__$1,data_68169);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_68163__$1,data_68169);
}
} else {
}

if(cljs.core.truth_(input_signals_68159)){
var seq__67864_68174 = cljs.core.seq(input_signals_68159);
var chunk__67865_68175 = null;
var count__67866_68176 = (0);
var i__67867_68177 = (0);
while(true){
if((i__67867_68177 < count__67866_68176)){
var input_reaction_68178 = chunk__67865_68175.cljs$core$IIndexed$_nth$arity$2(null,i__67867_68177);
var input_operation_68179 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_68178));
var reaction_path_68180 = [input_operation_68179,"-",operation_68163__$1].join('');
var temp__5802__auto___68182 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_68180);
if(cljs.core.truth_(temp__5802__auto___68182)){
var old_edge_68183 = temp__5802__auto___68182;
var updated_edge_68185 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_68183,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_68180,updated_edge_68185);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_68185], null)));
} else {
}
} else {
var data_68186 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_68180,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_68179,new cljs.core.Keyword(null,"to","to",192099007),operation_68163__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_68180,data_68186);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_68186));
} else {
}
}


var G__68188 = seq__67864_68174;
var G__68189 = chunk__67865_68175;
var G__68190 = count__67866_68176;
var G__68191 = (i__67867_68177 + (1));
seq__67864_68174 = G__68188;
chunk__67865_68175 = G__68189;
count__67866_68176 = G__68190;
i__67867_68177 = G__68191;
continue;
} else {
var temp__5804__auto___68192 = cljs.core.seq(seq__67864_68174);
if(temp__5804__auto___68192){
var seq__67864_68193__$1 = temp__5804__auto___68192;
if(cljs.core.chunked_seq_QMARK_(seq__67864_68193__$1)){
var c__5568__auto___68194 = cljs.core.chunk_first(seq__67864_68193__$1);
var G__68195 = cljs.core.chunk_rest(seq__67864_68193__$1);
var G__68196 = c__5568__auto___68194;
var G__68197 = cljs.core.count(c__5568__auto___68194);
var G__68198 = (0);
seq__67864_68174 = G__68195;
chunk__67865_68175 = G__68196;
count__67866_68176 = G__68197;
i__67867_68177 = G__68198;
continue;
} else {
var input_reaction_68199 = cljs.core.first(seq__67864_68193__$1);
var input_operation_68200 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_68199));
var reaction_path_68201 = [input_operation_68200,"-",operation_68163__$1].join('');
var temp__5802__auto___68202 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_68201);
if(cljs.core.truth_(temp__5802__auto___68202)){
var old_edge_68208 = temp__5802__auto___68202;
var updated_edge_68209 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_68208,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_68201,updated_edge_68209);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_68209], null)));
} else {
}
} else {
var data_68210 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_68201,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_68200,new cljs.core.Keyword(null,"to","to",192099007),operation_68163__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_68201,data_68210);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_68210));
} else {
}
}


var G__68212 = cljs.core.next(seq__67864_68193__$1);
var G__68213 = null;
var G__68214 = (0);
var G__68215 = (0);
seq__67864_68174 = G__68212;
chunk__67865_68175 = G__68213;
count__67866_68176 = G__68214;
i__67867_68177 = G__68215;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}


var G__68216 = seq__67820_68152;
var G__68217 = chunk__67821_68153;
var G__68218 = count__67822_68154;
var G__68219 = (i__67823_68155 + (1));
seq__67820_68152 = G__68216;
chunk__67821_68153 = G__68217;
count__67822_68154 = G__68218;
i__67823_68155 = G__68219;
continue;
} else {
var temp__5804__auto___68220 = cljs.core.seq(seq__67820_68152);
if(temp__5804__auto___68220){
var seq__67820_68221__$1 = temp__5804__auto___68220;
if(cljs.core.chunked_seq_QMARK_(seq__67820_68221__$1)){
var c__5568__auto___68222 = cljs.core.chunk_first(seq__67820_68221__$1);
var G__68223 = cljs.core.chunk_rest(seq__67820_68221__$1);
var G__68224 = c__5568__auto___68222;
var G__68225 = cljs.core.count(c__5568__auto___68222);
var G__68226 = (0);
seq__67820_68152 = G__68223;
chunk__67821_68153 = G__68224;
count__67822_68154 = G__68225;
i__67823_68155 = G__68226;
continue;
} else {
var map__67887_68227 = cljs.core.first(seq__67820_68221__$1);
var map__67887_68228__$1 = cljs.core.__destructure_map(map__67887_68227);
var op_type_68229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67887_68228__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var input_signals_68230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67887_68228__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_68231 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67887_68228__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_68232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67887_68228__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_68229,new cljs.core.Keyword(null,"create-class","create-class",1988524183))){
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_68229,new cljs.core.Keyword(null,"render","render",-1408033454));
if(and__5043__auto__){
return input_signals_68230;
} else {
return and__5043__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.view__GT_reactions,cljs.core.assoc,operation_68231,input_signals_68230);
} else {
}

var operation_68237__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_68231);
if(cljs.core.truth_(reaction_68232)){
var temp__5802__auto___68238 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),operation_68237__$1);
if(cljs.core.truth_(temp__5802__auto___68238)){
var old_reaction_68239 = temp__5802__auto___68238;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_68229,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_68239))){
var updated_node_68240 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_68239,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_68229,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_68229)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_68237__$1,updated_node_68240);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new_nodes),operation_68237__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_68237__$1,updated_node_68240);
} else {
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_68240], null)));
}
} else {
}
} else {
}
} else {
var data_68242 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),operation_68237__$1,new cljs.core.Keyword(null,"label","label",1718410804),operation_68237__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_68229)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_68229], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_68237__$1,data_68242);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_68237__$1,data_68242);
}
} else {
}

if(cljs.core.truth_(input_signals_68230)){
var seq__67891_68244 = cljs.core.seq(input_signals_68230);
var chunk__67892_68245 = null;
var count__67893_68246 = (0);
var i__67894_68247 = (0);
while(true){
if((i__67894_68247 < count__67893_68246)){
var input_reaction_68248 = chunk__67892_68245.cljs$core$IIndexed$_nth$arity$2(null,i__67894_68247);
var input_operation_68249 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_68248));
var reaction_path_68250 = [input_operation_68249,"-",operation_68237__$1].join('');
var temp__5802__auto___68252 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_68250);
if(cljs.core.truth_(temp__5802__auto___68252)){
var old_edge_68253 = temp__5802__auto___68252;
var updated_edge_68254 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_68253,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_68250,updated_edge_68254);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_68254], null)));
} else {
}
} else {
var data_68258 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_68250,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_68249,new cljs.core.Keyword(null,"to","to",192099007),operation_68237__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_68250,data_68258);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_68258));
} else {
}
}


var G__68259 = seq__67891_68244;
var G__68260 = chunk__67892_68245;
var G__68261 = count__67893_68246;
var G__68262 = (i__67894_68247 + (1));
seq__67891_68244 = G__68259;
chunk__67892_68245 = G__68260;
count__67893_68246 = G__68261;
i__67894_68247 = G__68262;
continue;
} else {
var temp__5804__auto___68263__$1 = cljs.core.seq(seq__67891_68244);
if(temp__5804__auto___68263__$1){
var seq__67891_68264__$1 = temp__5804__auto___68263__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67891_68264__$1)){
var c__5568__auto___68265 = cljs.core.chunk_first(seq__67891_68264__$1);
var G__68266 = cljs.core.chunk_rest(seq__67891_68264__$1);
var G__68267 = c__5568__auto___68265;
var G__68268 = cljs.core.count(c__5568__auto___68265);
var G__68269 = (0);
seq__67891_68244 = G__68266;
chunk__67892_68245 = G__68267;
count__67893_68246 = G__68268;
i__67894_68247 = G__68269;
continue;
} else {
var input_reaction_68270 = cljs.core.first(seq__67891_68264__$1);
var input_operation_68271 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_68270));
var reaction_path_68272 = [input_operation_68271,"-",operation_68237__$1].join('');
var temp__5802__auto___68273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_68272);
if(cljs.core.truth_(temp__5802__auto___68273)){
var old_edge_68274 = temp__5802__auto___68273;
var updated_edge_68275 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_68274,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_68272,updated_edge_68275);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_68275], null)));
} else {
}
} else {
var data_68276 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_68272,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_68271,new cljs.core.Keyword(null,"to","to",192099007),operation_68237__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_68272,data_68276);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_68276));
} else {
}
}


var G__68277 = cljs.core.next(seq__67891_68264__$1);
var G__68278 = null;
var G__68279 = (0);
var G__68280 = (0);
seq__67891_68244 = G__68277;
chunk__67892_68245 = G__68278;
count__67893_68246 = G__68279;
i__67894_68247 = G__68280;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}


var G__68281 = cljs.core.next(seq__67820_68221__$1);
var G__68282 = null;
var G__68283 = (0);
var G__68284 = (0);
seq__67820_68152 = G__68281;
chunk__67821_68153 = G__68282;
count__67822_68154 = G__68283;
i__67823_68155 = G__68284;
continue;
}
} else {
}
}
break;
}


var G__68285 = seq__67701_68145;
var G__68286 = chunk__67702_68146;
var G__68287 = count__67703_68147;
var G__68288 = (i__67704_68148 + (1));
seq__67701_68145 = G__68285;
chunk__67702_68146 = G__68286;
count__67703_68147 = G__68287;
i__67704_68148 = G__68288;
continue;
} else {
var temp__5804__auto___68289 = cljs.core.seq(seq__67701_68145);
if(temp__5804__auto___68289){
var seq__67701_68290__$1 = temp__5804__auto___68289;
if(cljs.core.chunked_seq_QMARK_(seq__67701_68290__$1)){
var c__5568__auto___68292 = cljs.core.chunk_first(seq__67701_68290__$1);
var G__68293 = cljs.core.chunk_rest(seq__67701_68290__$1);
var G__68294 = c__5568__auto___68292;
var G__68295 = cljs.core.count(c__5568__auto___68292);
var G__68296 = (0);
seq__67701_68145 = G__68293;
chunk__67702_68146 = G__68294;
count__67703_68147 = G__68295;
i__67704_68148 = G__68296;
continue;
} else {
var map__67895_68297 = cljs.core.first(seq__67701_68290__$1);
var map__67895_68298__$1 = cljs.core.__destructure_map(map__67895_68297);
var subs_68299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67895_68298__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__67896_68300 = cljs.core.seq(subs_68299);
var chunk__67897_68301 = null;
var count__67898_68302 = (0);
var i__67899_68303 = (0);
while(true){
if((i__67899_68303 < count__67898_68302)){
var map__67922_68304 = chunk__67897_68301.cljs$core$IIndexed$_nth$arity$2(null,i__67899_68303);
var map__67922_68305__$1 = cljs.core.__destructure_map(map__67922_68304);
var op_type_68306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67922_68305__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var input_signals_68307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67922_68305__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_68308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67922_68305__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_68309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67922_68305__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_68306,new cljs.core.Keyword(null,"create-class","create-class",1988524183))){
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_68306,new cljs.core.Keyword(null,"render","render",-1408033454));
if(and__5043__auto__){
return input_signals_68307;
} else {
return and__5043__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.view__GT_reactions,cljs.core.assoc,operation_68308,input_signals_68307);
} else {
}

var operation_68310__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_68308);
if(cljs.core.truth_(reaction_68309)){
var temp__5802__auto___68311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),operation_68310__$1);
if(cljs.core.truth_(temp__5802__auto___68311)){
var old_reaction_68312 = temp__5802__auto___68311;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_68306,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_68312))){
var updated_node_68313 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_68312,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_68306,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_68306)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_68310__$1,updated_node_68313);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new_nodes),operation_68310__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_68310__$1,updated_node_68313);
} else {
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_68313], null)));
}
} else {
}
} else {
}
} else {
var data_68315 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),operation_68310__$1,new cljs.core.Keyword(null,"label","label",1718410804),operation_68310__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_68306)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_68306], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_68310__$1,data_68315);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_68310__$1,data_68315);
}
} else {
}

if(cljs.core.truth_(input_signals_68307)){
var seq__67927_68316 = cljs.core.seq(input_signals_68307);
var chunk__67928_68317 = null;
var count__67929_68318 = (0);
var i__67930_68319 = (0);
while(true){
if((i__67930_68319 < count__67929_68318)){
var input_reaction_68320 = chunk__67928_68317.cljs$core$IIndexed$_nth$arity$2(null,i__67930_68319);
var input_operation_68321 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_68320));
var reaction_path_68322 = [input_operation_68321,"-",operation_68310__$1].join('');
var temp__5802__auto___68323 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_68322);
if(cljs.core.truth_(temp__5802__auto___68323)){
var old_edge_68324 = temp__5802__auto___68323;
var updated_edge_68325 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_68324,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_68322,updated_edge_68325);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_68325], null)));
} else {
}
} else {
var data_68326 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_68322,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_68321,new cljs.core.Keyword(null,"to","to",192099007),operation_68310__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_68322,data_68326);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_68326));
} else {
}
}


var G__68327 = seq__67927_68316;
var G__68328 = chunk__67928_68317;
var G__68329 = count__67929_68318;
var G__68330 = (i__67930_68319 + (1));
seq__67927_68316 = G__68327;
chunk__67928_68317 = G__68328;
count__67929_68318 = G__68329;
i__67930_68319 = G__68330;
continue;
} else {
var temp__5804__auto___68331__$1 = cljs.core.seq(seq__67927_68316);
if(temp__5804__auto___68331__$1){
var seq__67927_68333__$1 = temp__5804__auto___68331__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67927_68333__$1)){
var c__5568__auto___68334 = cljs.core.chunk_first(seq__67927_68333__$1);
var G__68335 = cljs.core.chunk_rest(seq__67927_68333__$1);
var G__68336 = c__5568__auto___68334;
var G__68337 = cljs.core.count(c__5568__auto___68334);
var G__68338 = (0);
seq__67927_68316 = G__68335;
chunk__67928_68317 = G__68336;
count__67929_68318 = G__68337;
i__67930_68319 = G__68338;
continue;
} else {
var input_reaction_68339 = cljs.core.first(seq__67927_68333__$1);
var input_operation_68340 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_68339));
var reaction_path_68341 = [input_operation_68340,"-",operation_68310__$1].join('');
var temp__5802__auto___68342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_68341);
if(cljs.core.truth_(temp__5802__auto___68342)){
var old_edge_68343 = temp__5802__auto___68342;
var updated_edge_68344 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_68343,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_68341,updated_edge_68344);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_68344], null)));
} else {
}
} else {
var data_68345 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_68341,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_68340,new cljs.core.Keyword(null,"to","to",192099007),operation_68310__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_68341,data_68345);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_68345));
} else {
}
}


var G__68346 = cljs.core.next(seq__67927_68333__$1);
var G__68347 = null;
var G__68348 = (0);
var G__68349 = (0);
seq__67927_68316 = G__68346;
chunk__67928_68317 = G__68347;
count__67929_68318 = G__68348;
i__67930_68319 = G__68349;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}


var G__68350 = seq__67896_68300;
var G__68351 = chunk__67897_68301;
var G__68352 = count__67898_68302;
var G__68353 = (i__67899_68303 + (1));
seq__67896_68300 = G__68350;
chunk__67897_68301 = G__68351;
count__67898_68302 = G__68352;
i__67899_68303 = G__68353;
continue;
} else {
var temp__5804__auto___68354__$1 = cljs.core.seq(seq__67896_68300);
if(temp__5804__auto___68354__$1){
var seq__67896_68355__$1 = temp__5804__auto___68354__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67896_68355__$1)){
var c__5568__auto___68356 = cljs.core.chunk_first(seq__67896_68355__$1);
var G__68357 = cljs.core.chunk_rest(seq__67896_68355__$1);
var G__68358 = c__5568__auto___68356;
var G__68359 = cljs.core.count(c__5568__auto___68356);
var G__68360 = (0);
seq__67896_68300 = G__68357;
chunk__67897_68301 = G__68358;
count__67898_68302 = G__68359;
i__67899_68303 = G__68360;
continue;
} else {
var map__67946_68361 = cljs.core.first(seq__67896_68355__$1);
var map__67946_68362__$1 = cljs.core.__destructure_map(map__67946_68361);
var op_type_68363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67946_68362__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var input_signals_68364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67946_68362__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_68365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67946_68362__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_68366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67946_68362__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_68363,new cljs.core.Keyword(null,"create-class","create-class",1988524183))){
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_68363,new cljs.core.Keyword(null,"render","render",-1408033454));
if(and__5043__auto__){
return input_signals_68364;
} else {
return and__5043__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.view__GT_reactions,cljs.core.assoc,operation_68365,input_signals_68364);
} else {
}

var operation_68367__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_68365);
if(cljs.core.truth_(reaction_68366)){
var temp__5802__auto___68368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),operation_68367__$1);
if(cljs.core.truth_(temp__5802__auto___68368)){
var old_reaction_68369 = temp__5802__auto___68368;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_68363,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_68369))){
var updated_node_68371 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_68369,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_68363,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_68363)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_68367__$1,updated_node_68371);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new_nodes),operation_68367__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_68367__$1,updated_node_68371);
} else {
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_68371], null)));
}
} else {
}
} else {
}
} else {
var data_68375 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),operation_68367__$1,new cljs.core.Keyword(null,"label","label",1718410804),operation_68367__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_68363)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_68363], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_68367__$1,data_68375);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_68367__$1,data_68375);
}
} else {
}

if(cljs.core.truth_(input_signals_68364)){
var seq__67952_68376 = cljs.core.seq(input_signals_68364);
var chunk__67953_68377 = null;
var count__67954_68378 = (0);
var i__67955_68379 = (0);
while(true){
if((i__67955_68379 < count__67954_68378)){
var input_reaction_68380 = chunk__67953_68377.cljs$core$IIndexed$_nth$arity$2(null,i__67955_68379);
var input_operation_68381 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_68380));
var reaction_path_68382 = [input_operation_68381,"-",operation_68367__$1].join('');
var temp__5802__auto___68387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_68382);
if(cljs.core.truth_(temp__5802__auto___68387)){
var old_edge_68391 = temp__5802__auto___68387;
var updated_edge_68393 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_68391,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_68382,updated_edge_68393);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_68393], null)));
} else {
}
} else {
var data_68399 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_68382,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_68381,new cljs.core.Keyword(null,"to","to",192099007),operation_68367__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_68382,data_68399);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_68399));
} else {
}
}


var G__68417 = seq__67952_68376;
var G__68418 = chunk__67953_68377;
var G__68419 = count__67954_68378;
var G__68420 = (i__67955_68379 + (1));
seq__67952_68376 = G__68417;
chunk__67953_68377 = G__68418;
count__67954_68378 = G__68419;
i__67955_68379 = G__68420;
continue;
} else {
var temp__5804__auto___68423__$2 = cljs.core.seq(seq__67952_68376);
if(temp__5804__auto___68423__$2){
var seq__67952_68425__$1 = temp__5804__auto___68423__$2;
if(cljs.core.chunked_seq_QMARK_(seq__67952_68425__$1)){
var c__5568__auto___68430 = cljs.core.chunk_first(seq__67952_68425__$1);
var G__68431 = cljs.core.chunk_rest(seq__67952_68425__$1);
var G__68432 = c__5568__auto___68430;
var G__68433 = cljs.core.count(c__5568__auto___68430);
var G__68434 = (0);
seq__67952_68376 = G__68431;
chunk__67953_68377 = G__68432;
count__67954_68378 = G__68433;
i__67955_68379 = G__68434;
continue;
} else {
var input_reaction_68435 = cljs.core.first(seq__67952_68425__$1);
var input_operation_68436 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_68435));
var reaction_path_68437 = [input_operation_68436,"-",operation_68367__$1].join('');
var temp__5802__auto___68438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_68437);
if(cljs.core.truth_(temp__5802__auto___68438)){
var old_edge_68439 = temp__5802__auto___68438;
var updated_edge_68440 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_68439,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_68437,updated_edge_68440);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_68440], null)));
} else {
}
} else {
var data_68441 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_68437,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_68436,new cljs.core.Keyword(null,"to","to",192099007),operation_68367__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_68437,data_68441);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_68441));
} else {
}
}


var G__68442 = cljs.core.next(seq__67952_68425__$1);
var G__68443 = null;
var G__68444 = (0);
var G__68445 = (0);
seq__67952_68376 = G__68442;
chunk__67953_68377 = G__68443;
count__67954_68378 = G__68444;
i__67955_68379 = G__68445;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}


var G__68446 = cljs.core.next(seq__67896_68355__$1);
var G__68447 = null;
var G__68448 = (0);
var G__68449 = (0);
seq__67896_68300 = G__68446;
chunk__67897_68301 = G__68447;
count__67898_68302 = G__68448;
i__67899_68303 = G__68449;
continue;
}
} else {
}
}
break;
}


var G__68450 = cljs.core.next(seq__67701_68290__$1);
var G__68451 = null;
var G__68452 = (0);
var G__68453 = (0);
seq__67701_68145 = G__68450;
chunk__67702_68146 = G__68451;
count__67703_68147 = G__68452;
i__67704_68148 = G__68453;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if((cljs.core.count(cljs.core.deref(new_nodes)) > (20))){
return re_frisk.subs_graph.create();
} else {
var seq__67994 = cljs.core.seq(cljs.core.vals(cljs.core.deref(new_nodes)));
var chunk__67995 = null;
var count__67996 = (0);
var i__67997 = (0);
while(true){
if((i__67997 < count__67996)){
var data = chunk__67995.cljs$core$IIndexed$_nth$arity$2(null,i__67997);
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js(data));


var G__68454 = seq__67994;
var G__68455 = chunk__67995;
var G__68456 = count__67996;
var G__68457 = (i__67997 + (1));
seq__67994 = G__68454;
chunk__67995 = G__68455;
count__67996 = G__68456;
i__67997 = G__68457;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__67994);
if(temp__5804__auto__){
var seq__67994__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67994__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__67994__$1);
var G__68458 = cljs.core.chunk_rest(seq__67994__$1);
var G__68459 = c__5568__auto__;
var G__68460 = cljs.core.count(c__5568__auto__);
var G__68461 = (0);
seq__67994 = G__68458;
chunk__67995 = G__68459;
count__67996 = G__68460;
i__67997 = G__68461;
continue;
} else {
var data = cljs.core.first(seq__67994__$1);
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js(data));


var G__68462 = cljs.core.next(seq__67994__$1);
var G__68463 = null;
var G__68464 = (0);
var G__68465 = (0);
seq__67994 = G__68462;
chunk__67995 = G__68463;
count__67996 = G__68464;
i__67997 = G__68465;
continue;
}
} else {
return null;
}
}
break;
}
}
} else {
return null;
}
});
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.event_network !== 'undefined')){
} else {
re_frisk.subs_graph.event_network = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
re_frisk.subs_graph.create_event_subs = (function re_frisk$subs_graph$create_event_subs(p__68009){
var map__68010 = p__68009;
var map__68010__$1 = cljs.core.__destructure_map(map__68010);
var app_db_reaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68010__$1,new cljs.core.Keyword(null,"app-db-reaction","app-db-reaction",-269835135));
var subs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68010__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.event_network))){
cljs.core.deref(re_frisk.subs_graph.event_network).destroy();

cljs.core.reset_BANG_(re_frisk.subs_graph.event_network,null);
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.deref(re_frisk.subs_graph.vis);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.deref(re_frisk.subs_graph.doc);
} else {
return and__5043__auto__;
}
})())){
var temp__5804__auto__ = cljs.core.deref(re_frisk.subs_graph.doc).getElementById("event-subs-graph-container");
if(cljs.core.truth_(temp__5804__auto__)){
var container = temp__5804__auto__;
var Network = cljs.core.deref(re_frisk.subs_graph.vis).Network;
var DataSet = cljs.core.deref(re_frisk.subs_graph.vis).DataSet;
var nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([app_db_reaction,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),app_db_reaction,new cljs.core.Keyword(null,"label","label",1718410804),"app-db",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"yellow","yellow",-881035449)], null)], null)]));
var edges = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__68011_68466 = cljs.core.seq(subs);
var chunk__68012_68467 = null;
var count__68013_68468 = (0);
var i__68014_68469 = (0);
while(true){
if((i__68014_68469 < count__68013_68468)){
var map__68031_68470 = chunk__68012_68467.cljs$core$IIndexed$_nth$arity$2(null,i__68014_68469);
var map__68031_68471__$1 = cljs.core.__destructure_map(map__68031_68470);
var op_type_68472 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68031_68471__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_68473 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68031_68471__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_68474 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68031_68471__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_68475 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68031_68471__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5802__auto___68476 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nodes),reaction_68473);
if(cljs.core.truth_(temp__5802__auto___68476)){
var old_reaction_68477 = temp__5802__auto___68476;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_68472,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_68477))){
var updated_node_68478 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_68477,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_68472,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_68472)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_68473,updated_node_68478);
} else {
}
} else {
var data_68479 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_68473,new cljs.core.Keyword(null,"label","label",1718410804),operation_68475,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_68472)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_68472], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_68473,data_68479);
}

if(cljs.core.truth_(input_signals_68474)){
var seq__68032_68480 = cljs.core.seq(input_signals_68474);
var chunk__68033_68481 = null;
var count__68034_68482 = (0);
var i__68035_68483 = (0);
while(true){
if((i__68035_68483 < count__68034_68482)){
var input_reaction_68484 = chunk__68033_68481.cljs$core$IIndexed$_nth$arity$2(null,i__68035_68483);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_68484),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_68473)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_68484),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_68473)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_68484,new cljs.core.Keyword(null,"to","to",192099007),reaction_68473], null));
}


var G__68486 = seq__68032_68480;
var G__68487 = chunk__68033_68481;
var G__68488 = count__68034_68482;
var G__68489 = (i__68035_68483 + (1));
seq__68032_68480 = G__68486;
chunk__68033_68481 = G__68487;
count__68034_68482 = G__68488;
i__68035_68483 = G__68489;
continue;
} else {
var temp__5804__auto___68491__$1 = cljs.core.seq(seq__68032_68480);
if(temp__5804__auto___68491__$1){
var seq__68032_68492__$1 = temp__5804__auto___68491__$1;
if(cljs.core.chunked_seq_QMARK_(seq__68032_68492__$1)){
var c__5568__auto___68493 = cljs.core.chunk_first(seq__68032_68492__$1);
var G__68494 = cljs.core.chunk_rest(seq__68032_68492__$1);
var G__68495 = c__5568__auto___68493;
var G__68496 = cljs.core.count(c__5568__auto___68493);
var G__68497 = (0);
seq__68032_68480 = G__68494;
chunk__68033_68481 = G__68495;
count__68034_68482 = G__68496;
i__68035_68483 = G__68497;
continue;
} else {
var input_reaction_68498 = cljs.core.first(seq__68032_68492__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_68498),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_68473)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_68498),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_68473)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_68498,new cljs.core.Keyword(null,"to","to",192099007),reaction_68473], null));
}


var G__68499 = cljs.core.next(seq__68032_68492__$1);
var G__68500 = null;
var G__68501 = (0);
var G__68502 = (0);
seq__68032_68480 = G__68499;
chunk__68033_68481 = G__68500;
count__68034_68482 = G__68501;
i__68035_68483 = G__68502;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__68503 = seq__68011_68466;
var G__68504 = chunk__68012_68467;
var G__68505 = count__68013_68468;
var G__68506 = (i__68014_68469 + (1));
seq__68011_68466 = G__68503;
chunk__68012_68467 = G__68504;
count__68013_68468 = G__68505;
i__68014_68469 = G__68506;
continue;
} else {
var temp__5804__auto___68507__$1 = cljs.core.seq(seq__68011_68466);
if(temp__5804__auto___68507__$1){
var seq__68011_68508__$1 = temp__5804__auto___68507__$1;
if(cljs.core.chunked_seq_QMARK_(seq__68011_68508__$1)){
var c__5568__auto___68509 = cljs.core.chunk_first(seq__68011_68508__$1);
var G__68510 = cljs.core.chunk_rest(seq__68011_68508__$1);
var G__68511 = c__5568__auto___68509;
var G__68512 = cljs.core.count(c__5568__auto___68509);
var G__68513 = (0);
seq__68011_68466 = G__68510;
chunk__68012_68467 = G__68511;
count__68013_68468 = G__68512;
i__68014_68469 = G__68513;
continue;
} else {
var map__68041_68514 = cljs.core.first(seq__68011_68508__$1);
var map__68041_68515__$1 = cljs.core.__destructure_map(map__68041_68514);
var op_type_68516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68041_68515__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_68517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68041_68515__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_68518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68041_68515__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_68519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68041_68515__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5802__auto___68521 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nodes),reaction_68517);
if(cljs.core.truth_(temp__5802__auto___68521)){
var old_reaction_68522 = temp__5802__auto___68521;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_68516,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_68522))){
var updated_node_68523 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_68522,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_68516,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_68516)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_68517,updated_node_68523);
} else {
}
} else {
var data_68524 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_68517,new cljs.core.Keyword(null,"label","label",1718410804),operation_68519,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_68516)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_68516], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_68517,data_68524);
}

if(cljs.core.truth_(input_signals_68518)){
var seq__68043_68525 = cljs.core.seq(input_signals_68518);
var chunk__68044_68526 = null;
var count__68045_68527 = (0);
var i__68046_68528 = (0);
while(true){
if((i__68046_68528 < count__68045_68527)){
var input_reaction_68529 = chunk__68044_68526.cljs$core$IIndexed$_nth$arity$2(null,i__68046_68528);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_68529),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_68517)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_68529),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_68517)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_68529,new cljs.core.Keyword(null,"to","to",192099007),reaction_68517], null));
}


var G__68531 = seq__68043_68525;
var G__68532 = chunk__68044_68526;
var G__68533 = count__68045_68527;
var G__68534 = (i__68046_68528 + (1));
seq__68043_68525 = G__68531;
chunk__68044_68526 = G__68532;
count__68045_68527 = G__68533;
i__68046_68528 = G__68534;
continue;
} else {
var temp__5804__auto___68535__$2 = cljs.core.seq(seq__68043_68525);
if(temp__5804__auto___68535__$2){
var seq__68043_68536__$1 = temp__5804__auto___68535__$2;
if(cljs.core.chunked_seq_QMARK_(seq__68043_68536__$1)){
var c__5568__auto___68537 = cljs.core.chunk_first(seq__68043_68536__$1);
var G__68538 = cljs.core.chunk_rest(seq__68043_68536__$1);
var G__68539 = c__5568__auto___68537;
var G__68540 = cljs.core.count(c__5568__auto___68537);
var G__68541 = (0);
seq__68043_68525 = G__68538;
chunk__68044_68526 = G__68539;
count__68045_68527 = G__68540;
i__68046_68528 = G__68541;
continue;
} else {
var input_reaction_68542 = cljs.core.first(seq__68043_68536__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_68542),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_68517)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_68542),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_68517)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_68542,new cljs.core.Keyword(null,"to","to",192099007),reaction_68517], null));
}


var G__68543 = cljs.core.next(seq__68043_68536__$1);
var G__68544 = null;
var G__68545 = (0);
var G__68546 = (0);
seq__68043_68525 = G__68543;
chunk__68044_68526 = G__68544;
count__68045_68527 = G__68545;
i__68046_68528 = G__68546;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__68547 = cljs.core.next(seq__68011_68508__$1);
var G__68548 = null;
var G__68549 = (0);
var G__68550 = (0);
seq__68011_68466 = G__68547;
chunk__68012_68467 = G__68548;
count__68013_68468 = G__68549;
i__68014_68469 = G__68550;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frisk.subs_graph.event_network,(new Network(container,({"nodes": (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(nodes))))), "edges": (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(edges)))))}),re_frisk.subs_graph.options)));
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=re_frisk.subs_graph.js.map
