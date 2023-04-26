goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__70976 = arguments.length;
switch (G__70976) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async70980 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70980 = (function (f,blockable,meta70981){
this.f = f;
this.blockable = blockable;
this.meta70981 = meta70981;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async70980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70982,meta70981__$1){
var self__ = this;
var _70982__$1 = this;
return (new cljs.core.async.t_cljs$core$async70980(self__.f,self__.blockable,meta70981__$1));
}));

(cljs.core.async.t_cljs$core$async70980.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70982){
var self__ = this;
var _70982__$1 = this;
return self__.meta70981;
}));

(cljs.core.async.t_cljs$core$async70980.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70980.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async70980.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async70980.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async70980.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta70981","meta70981",-361011915,null)], null);
}));

(cljs.core.async.t_cljs$core$async70980.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async70980.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70980");

(cljs.core.async.t_cljs$core$async70980.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async70980");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async70980.
 */
cljs.core.async.__GT_t_cljs$core$async70980 = (function cljs$core$async$__GT_t_cljs$core$async70980(f__$1,blockable__$1,meta70981){
return (new cljs.core.async.t_cljs$core$async70980(f__$1,blockable__$1,meta70981));
});

}

return (new cljs.core.async.t_cljs$core$async70980(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__71009 = arguments.length;
switch (G__71009) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__71018 = arguments.length;
switch (G__71018) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__71045 = arguments.length;
switch (G__71045) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_72659 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_72659) : fn1.call(null,val_72659));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_72659) : fn1.call(null,val_72659));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__71047 = arguments.length;
switch (G__71047) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___72661 = n;
var x_72662 = (0);
while(true){
if((x_72662 < n__5636__auto___72661)){
(a[x_72662] = x_72662);

var G__72663 = (x_72662 + (1));
x_72662 = G__72663;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71052 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71052 = (function (flag,meta71053){
this.flag = flag;
this.meta71053 = meta71053;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71054,meta71053__$1){
var self__ = this;
var _71054__$1 = this;
return (new cljs.core.async.t_cljs$core$async71052(self__.flag,meta71053__$1));
}));

(cljs.core.async.t_cljs$core$async71052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71054){
var self__ = this;
var _71054__$1 = this;
return self__.meta71053;
}));

(cljs.core.async.t_cljs$core$async71052.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71052.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async71052.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async71052.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async71052.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta71053","meta71053",-619817562,null)], null);
}));

(cljs.core.async.t_cljs$core$async71052.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71052.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71052");

(cljs.core.async.t_cljs$core$async71052.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async71052");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71052.
 */
cljs.core.async.__GT_t_cljs$core$async71052 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async71052(flag__$1,meta71053){
return (new cljs.core.async.t_cljs$core$async71052(flag__$1,meta71053));
});

}

return (new cljs.core.async.t_cljs$core$async71052(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71056 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71056 = (function (flag,cb,meta71057){
this.flag = flag;
this.cb = cb;
this.meta71057 = meta71057;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71058,meta71057__$1){
var self__ = this;
var _71058__$1 = this;
return (new cljs.core.async.t_cljs$core$async71056(self__.flag,self__.cb,meta71057__$1));
}));

(cljs.core.async.t_cljs$core$async71056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71058){
var self__ = this;
var _71058__$1 = this;
return self__.meta71057;
}));

(cljs.core.async.t_cljs$core$async71056.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71056.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async71056.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async71056.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async71056.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta71057","meta71057",-675818373,null)], null);
}));

(cljs.core.async.t_cljs$core$async71056.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71056.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71056");

(cljs.core.async.t_cljs$core$async71056.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async71056");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71056.
 */
cljs.core.async.__GT_t_cljs$core$async71056 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async71056(flag__$1,cb__$1,meta71057){
return (new cljs.core.async.t_cljs$core$async71056(flag__$1,cb__$1,meta71057));
});

}

return (new cljs.core.async.t_cljs$core$async71056(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__71062_SHARP_){
var G__71066 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__71062_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__71066) : fret.call(null,G__71066));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__71063_SHARP_){
var G__71067 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__71063_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__71067) : fret.call(null,G__71067));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__72664 = (i + (1));
i = G__72664;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___72665 = arguments.length;
var i__5770__auto___72666 = (0);
while(true){
if((i__5770__auto___72666 < len__5769__auto___72665)){
args__5775__auto__.push((arguments[i__5770__auto___72666]));

var G__72667 = (i__5770__auto___72666 + (1));
i__5770__auto___72666 = G__72667;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__71074){
var map__71075 = p__71074;
var map__71075__$1 = cljs.core.__destructure_map(map__71075);
var opts = map__71075__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq71070){
var G__71071 = cljs.core.first(seq71070);
var seq71070__$1 = cljs.core.next(seq71070);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71071,seq71070__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__71080 = arguments.length;
switch (G__71080) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__70910__auto___72669 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70911__auto__ = (function (){var switch__70804__auto__ = (function (state_71124){
var state_val_71127 = (state_71124[(1)]);
if((state_val_71127 === (7))){
var inst_71115 = (state_71124[(2)]);
var state_71124__$1 = state_71124;
var statearr_71130_72670 = state_71124__$1;
(statearr_71130_72670[(2)] = inst_71115);

(statearr_71130_72670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71127 === (1))){
var state_71124__$1 = state_71124;
var statearr_71131_72671 = state_71124__$1;
(statearr_71131_72671[(2)] = null);

(statearr_71131_72671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71127 === (4))){
var inst_71095 = (state_71124[(7)]);
var inst_71095__$1 = (state_71124[(2)]);
var inst_71096 = (inst_71095__$1 == null);
var state_71124__$1 = (function (){var statearr_71132 = state_71124;
(statearr_71132[(7)] = inst_71095__$1);

return statearr_71132;
})();
if(cljs.core.truth_(inst_71096)){
var statearr_71135_72672 = state_71124__$1;
(statearr_71135_72672[(1)] = (5));

} else {
var statearr_71136_72673 = state_71124__$1;
(statearr_71136_72673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71127 === (13))){
var state_71124__$1 = state_71124;
var statearr_71137_72674 = state_71124__$1;
(statearr_71137_72674[(2)] = null);

(statearr_71137_72674[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71127 === (6))){
var inst_71095 = (state_71124[(7)]);
var state_71124__$1 = state_71124;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71124__$1,(11),to,inst_71095);
} else {
if((state_val_71127 === (3))){
var inst_71117 = (state_71124[(2)]);
var state_71124__$1 = state_71124;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71124__$1,inst_71117);
} else {
if((state_val_71127 === (12))){
var state_71124__$1 = state_71124;
var statearr_71141_72675 = state_71124__$1;
(statearr_71141_72675[(2)] = null);

(statearr_71141_72675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71127 === (2))){
var state_71124__$1 = state_71124;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71124__$1,(4),from);
} else {
if((state_val_71127 === (11))){
var inst_71108 = (state_71124[(2)]);
var state_71124__$1 = state_71124;
if(cljs.core.truth_(inst_71108)){
var statearr_71142_72676 = state_71124__$1;
(statearr_71142_72676[(1)] = (12));

} else {
var statearr_71143_72677 = state_71124__$1;
(statearr_71143_72677[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71127 === (9))){
var state_71124__$1 = state_71124;
var statearr_71144_72678 = state_71124__$1;
(statearr_71144_72678[(2)] = null);

(statearr_71144_72678[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71127 === (5))){
var state_71124__$1 = state_71124;
if(cljs.core.truth_(close_QMARK_)){
var statearr_71145_72679 = state_71124__$1;
(statearr_71145_72679[(1)] = (8));

} else {
var statearr_71146_72680 = state_71124__$1;
(statearr_71146_72680[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71127 === (14))){
var inst_71113 = (state_71124[(2)]);
var state_71124__$1 = state_71124;
var statearr_71147_72681 = state_71124__$1;
(statearr_71147_72681[(2)] = inst_71113);

(statearr_71147_72681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71127 === (10))){
var inst_71105 = (state_71124[(2)]);
var state_71124__$1 = state_71124;
var statearr_71148_72682 = state_71124__$1;
(statearr_71148_72682[(2)] = inst_71105);

(statearr_71148_72682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71127 === (8))){
var inst_71102 = cljs.core.async.close_BANG_(to);
var state_71124__$1 = state_71124;
var statearr_71152_72683 = state_71124__$1;
(statearr_71152_72683[(2)] = inst_71102);

(statearr_71152_72683[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__70805__auto__ = null;
var cljs$core$async$state_machine__70805__auto____0 = (function (){
var statearr_71153 = [null,null,null,null,null,null,null,null];
(statearr_71153[(0)] = cljs$core$async$state_machine__70805__auto__);

(statearr_71153[(1)] = (1));

return statearr_71153;
});
var cljs$core$async$state_machine__70805__auto____1 = (function (state_71124){
while(true){
var ret_value__70806__auto__ = (function (){try{while(true){
var result__70807__auto__ = switch__70804__auto__(state_71124);
if(cljs.core.keyword_identical_QMARK_(result__70807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70807__auto__;
}
break;
}
}catch (e71154){var ex__70808__auto__ = e71154;
var statearr_71155_72684 = state_71124;
(statearr_71155_72684[(2)] = ex__70808__auto__);


if(cljs.core.seq((state_71124[(4)]))){
var statearr_71156_72685 = state_71124;
(statearr_71156_72685[(1)] = cljs.core.first((state_71124[(4)])));

} else {
throw ex__70808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72686 = state_71124;
state_71124 = G__72686;
continue;
} else {
return ret_value__70806__auto__;
}
break;
}
});
cljs$core$async$state_machine__70805__auto__ = function(state_71124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__70805__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__70805__auto____1.call(this,state_71124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__70805__auto____0;
cljs$core$async$state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__70805__auto____1;
return cljs$core$async$state_machine__70805__auto__;
})()
})();
var state__70912__auto__ = (function (){var statearr_71157 = f__70911__auto__();
(statearr_71157[(6)] = c__70910__auto___72669);

return statearr_71157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70912__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__71158){
var vec__71159 = p__71158;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71159,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71159,(1),null);
var job = vec__71159;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__70910__auto___72687 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70911__auto__ = (function (){var switch__70804__auto__ = (function (state_71166){
var state_val_71167 = (state_71166[(1)]);
if((state_val_71167 === (1))){
var state_71166__$1 = state_71166;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71166__$1,(2),res,v);
} else {
if((state_val_71167 === (2))){
var inst_71163 = (state_71166[(2)]);
var inst_71164 = cljs.core.async.close_BANG_(res);
var state_71166__$1 = (function (){var statearr_71170 = state_71166;
(statearr_71170[(7)] = inst_71163);

return statearr_71170;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_71166__$1,inst_71164);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__70805__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__70805__auto____0 = (function (){
var statearr_71171 = [null,null,null,null,null,null,null,null];
(statearr_71171[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__70805__auto__);

(statearr_71171[(1)] = (1));

return statearr_71171;
});
var cljs$core$async$pipeline_STAR__$_state_machine__70805__auto____1 = (function (state_71166){
while(true){
var ret_value__70806__auto__ = (function (){try{while(true){
var result__70807__auto__ = switch__70804__auto__(state_71166);
if(cljs.core.keyword_identical_QMARK_(result__70807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70807__auto__;
}
break;
}
}catch (e71172){var ex__70808__auto__ = e71172;
var statearr_71173_72688 = state_71166;
(statearr_71173_72688[(2)] = ex__70808__auto__);


if(cljs.core.seq((state_71166[(4)]))){
var statearr_71174_72689 = state_71166;
(statearr_71174_72689[(1)] = cljs.core.first((state_71166[(4)])));

} else {
throw ex__70808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72690 = state_71166;
state_71166 = G__72690;
continue;
} else {
return ret_value__70806__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__70805__auto__ = function(state_71166){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__70805__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__70805__auto____1.call(this,state_71166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__70805__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__70805__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__70805__auto__;
})()
})();
var state__70912__auto__ = (function (){var statearr_71178 = f__70911__auto__();
(statearr_71178[(6)] = c__70910__auto___72687);

return statearr_71178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70912__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__71180){
var vec__71181 = p__71180;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71181,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71181,(1),null);
var job = vec__71181;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___72691 = n;
var __72692 = (0);
while(true){
if((__72692 < n__5636__auto___72691)){
var G__71186_72693 = type;
var G__71186_72694__$1 = (((G__71186_72693 instanceof cljs.core.Keyword))?G__71186_72693.fqn:null);
switch (G__71186_72694__$1) {
case "compute":
var c__70910__auto___72696 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__72692,c__70910__auto___72696,G__71186_72693,G__71186_72694__$1,n__5636__auto___72691,jobs,results,process__$1,async){
return (function (){
var f__70911__auto__ = (function (){var switch__70804__auto__ = ((function (__72692,c__70910__auto___72696,G__71186_72693,G__71186_72694__$1,n__5636__auto___72691,jobs,results,process__$1,async){
return (function (state_71199){
var state_val_71200 = (state_71199[(1)]);
if((state_val_71200 === (1))){
var state_71199__$1 = state_71199;
var statearr_71205_72697 = state_71199__$1;
(statearr_71205_72697[(2)] = null);

(statearr_71205_72697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71200 === (2))){
var state_71199__$1 = state_71199;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71199__$1,(4),jobs);
} else {
if((state_val_71200 === (3))){
var inst_71197 = (state_71199[(2)]);
var state_71199__$1 = state_71199;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71199__$1,inst_71197);
} else {
if((state_val_71200 === (4))){
var inst_71189 = (state_71199[(2)]);
var inst_71190 = process__$1(inst_71189);
var state_71199__$1 = state_71199;
if(cljs.core.truth_(inst_71190)){
var statearr_71206_72698 = state_71199__$1;
(statearr_71206_72698[(1)] = (5));

} else {
var statearr_71207_72699 = state_71199__$1;
(statearr_71207_72699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71200 === (5))){
var state_71199__$1 = state_71199;
var statearr_71208_72700 = state_71199__$1;
(statearr_71208_72700[(2)] = null);

(statearr_71208_72700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71200 === (6))){
var state_71199__$1 = state_71199;
var statearr_71209_72701 = state_71199__$1;
(statearr_71209_72701[(2)] = null);

(statearr_71209_72701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71200 === (7))){
var inst_71195 = (state_71199[(2)]);
var state_71199__$1 = state_71199;
var statearr_71210_72702 = state_71199__$1;
(statearr_71210_72702[(2)] = inst_71195);

(statearr_71210_72702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__72692,c__70910__auto___72696,G__71186_72693,G__71186_72694__$1,n__5636__auto___72691,jobs,results,process__$1,async))
;
return ((function (__72692,switch__70804__auto__,c__70910__auto___72696,G__71186_72693,G__71186_72694__$1,n__5636__auto___72691,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__70805__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__70805__auto____0 = (function (){
var statearr_71211 = [null,null,null,null,null,null,null];
(statearr_71211[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__70805__auto__);

(statearr_71211[(1)] = (1));

return statearr_71211;
});
var cljs$core$async$pipeline_STAR__$_state_machine__70805__auto____1 = (function (state_71199){
while(true){
var ret_value__70806__auto__ = (function (){try{while(true){
var result__70807__auto__ = switch__70804__auto__(state_71199);
if(cljs.core.keyword_identical_QMARK_(result__70807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70807__auto__;
}
break;
}
}catch (e71212){var ex__70808__auto__ = e71212;
var statearr_71213_72703 = state_71199;
(statearr_71213_72703[(2)] = ex__70808__auto__);


if(cljs.core.seq((state_71199[(4)]))){
var statearr_71214_72704 = state_71199;
(statearr_71214_72704[(1)] = cljs.core.first((state_71199[(4)])));

} else {
throw ex__70808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72705 = state_71199;
state_71199 = G__72705;
continue;
} else {
return ret_value__70806__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__70805__auto__ = function(state_71199){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__70805__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__70805__auto____1.call(this,state_71199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__70805__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__70805__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__70805__auto__;
})()
;})(__72692,switch__70804__auto__,c__70910__auto___72696,G__71186_72693,G__71186_72694__$1,n__5636__auto___72691,jobs,results,process__$1,async))
})();
var state__70912__auto__ = (function (){var statearr_71217 = f__70911__auto__();
(statearr_71217[(6)] = c__70910__auto___72696);

return statearr_71217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70912__auto__);
});})(__72692,c__70910__auto___72696,G__71186_72693,G__71186_72694__$1,n__5636__auto___72691,jobs,results,process__$1,async))
);


break;
case "async":
var c__70910__auto___72706 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__72692,c__70910__auto___72706,G__71186_72693,G__71186_72694__$1,n__5636__auto___72691,jobs,results,process__$1,async){
return (function (){
var f__70911__auto__ = (function (){var switch__70804__auto__ = ((function (__72692,c__70910__auto___72706,G__71186_72693,G__71186_72694__$1,n__5636__auto___72691,jobs,results,process__$1,async){
return (function (state_71230){
var state_val_71231 = (state_71230[(1)]);
if((state_val_71231 === (1))){
var state_71230__$1 = state_71230;
var statearr_71234_72707 = state_71230__$1;
(statearr_71234_72707[(2)] = null);

(statearr_71234_72707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71231 === (2))){
var state_71230__$1 = state_71230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71230__$1,(4),jobs);
} else {
if((state_val_71231 === (3))){
var inst_71228 = (state_71230[(2)]);
var state_71230__$1 = state_71230;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71230__$1,inst_71228);
} else {
if((state_val_71231 === (4))){
var inst_71220 = (state_71230[(2)]);
var inst_71221 = async(inst_71220);
var state_71230__$1 = state_71230;
if(cljs.core.truth_(inst_71221)){
var statearr_71235_72708 = state_71230__$1;
(statearr_71235_72708[(1)] = (5));

} else {
var statearr_71240_72709 = state_71230__$1;
(statearr_71240_72709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71231 === (5))){
var state_71230__$1 = state_71230;
var statearr_71241_72710 = state_71230__$1;
(statearr_71241_72710[(2)] = null);

(statearr_71241_72710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71231 === (6))){
var state_71230__$1 = state_71230;
var statearr_71242_72711 = state_71230__$1;
(statearr_71242_72711[(2)] = null);

(statearr_71242_72711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71231 === (7))){
var inst_71226 = (state_71230[(2)]);
var state_71230__$1 = state_71230;
var statearr_71243_72712 = state_71230__$1;
(statearr_71243_72712[(2)] = inst_71226);

(statearr_71243_72712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__72692,c__70910__auto___72706,G__71186_72693,G__71186_72694__$1,n__5636__auto___72691,jobs,results,process__$1,async))
;
return ((function (__72692,switch__70804__auto__,c__70910__auto___72706,G__71186_72693,G__71186_72694__$1,n__5636__auto___72691,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__70805__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__70805__auto____0 = (function (){
var statearr_71244 = [null,null,null,null,null,null,null];
(statearr_71244[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__70805__auto__);

(statearr_71244[(1)] = (1));

return statearr_71244;
});
var cljs$core$async$pipeline_STAR__$_state_machine__70805__auto____1 = (function (state_71230){
while(true){
var ret_value__70806__auto__ = (function (){try{while(true){
var result__70807__auto__ = switch__70804__auto__(state_71230);
if(cljs.core.keyword_identical_QMARK_(result__70807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70807__auto__;
}
break;
}
}catch (e71245){var ex__70808__auto__ = e71245;
var statearr_71246_72713 = state_71230;
(statearr_71246_72713[(2)] = ex__70808__auto__);


if(cljs.core.seq((state_71230[(4)]))){
var statearr_71247_72714 = state_71230;
(statearr_71247_72714[(1)] = cljs.core.first((state_71230[(4)])));

} else {
throw ex__70808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72715 = state_71230;
state_71230 = G__72715;
continue;
} else {
return ret_value__70806__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__70805__auto__ = function(state_71230){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__70805__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__70805__auto____1.call(this,state_71230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__70805__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__70805__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__70805__auto__;
})()
;})(__72692,switch__70804__auto__,c__70910__auto___72706,G__71186_72693,G__71186_72694__$1,n__5636__auto___72691,jobs,results,process__$1,async))
})();
var state__70912__auto__ = (function (){var statearr_71248 = f__70911__auto__();
(statearr_71248[(6)] = c__70910__auto___72706);

return statearr_71248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70912__auto__);
});})(__72692,c__70910__auto___72706,G__71186_72693,G__71186_72694__$1,n__5636__auto___72691,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__71186_72694__$1)].join('')));

}

var G__72716 = (__72692 + (1));
__72692 = G__72716;
continue;
} else {
}
break;
}

var c__70910__auto___72717 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70911__auto__ = (function (){var switch__70804__auto__ = (function (state_71271){
var state_val_71272 = (state_71271[(1)]);
if((state_val_71272 === (7))){
var inst_71267 = (state_71271[(2)]);
var state_71271__$1 = state_71271;
var statearr_71275_72718 = state_71271__$1;
(statearr_71275_72718[(2)] = inst_71267);

(statearr_71275_72718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71272 === (1))){
var state_71271__$1 = state_71271;
var statearr_71276_72719 = state_71271__$1;
(statearr_71276_72719[(2)] = null);

(statearr_71276_72719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71272 === (4))){
var inst_71251 = (state_71271[(7)]);
var inst_71251__$1 = (state_71271[(2)]);
var inst_71252 = (inst_71251__$1 == null);
var state_71271__$1 = (function (){var statearr_71277 = state_71271;
(statearr_71277[(7)] = inst_71251__$1);

return statearr_71277;
})();
if(cljs.core.truth_(inst_71252)){
var statearr_71278_72720 = state_71271__$1;
(statearr_71278_72720[(1)] = (5));

} else {
var statearr_71279_72721 = state_71271__$1;
(statearr_71279_72721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71272 === (6))){
var inst_71256 = (state_71271[(8)]);
var inst_71251 = (state_71271[(7)]);
var inst_71256__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_71258 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_71259 = [inst_71251,inst_71256__$1];
var inst_71260 = (new cljs.core.PersistentVector(null,2,(5),inst_71258,inst_71259,null));
var state_71271__$1 = (function (){var statearr_71281 = state_71271;
(statearr_71281[(8)] = inst_71256__$1);

return statearr_71281;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71271__$1,(8),jobs,inst_71260);
} else {
if((state_val_71272 === (3))){
var inst_71269 = (state_71271[(2)]);
var state_71271__$1 = state_71271;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71271__$1,inst_71269);
} else {
if((state_val_71272 === (2))){
var state_71271__$1 = state_71271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71271__$1,(4),from);
} else {
if((state_val_71272 === (9))){
var inst_71264 = (state_71271[(2)]);
var state_71271__$1 = (function (){var statearr_71282 = state_71271;
(statearr_71282[(9)] = inst_71264);

return statearr_71282;
})();
var statearr_71284_72722 = state_71271__$1;
(statearr_71284_72722[(2)] = null);

(statearr_71284_72722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71272 === (5))){
var inst_71254 = cljs.core.async.close_BANG_(jobs);
var state_71271__$1 = state_71271;
var statearr_71286_72723 = state_71271__$1;
(statearr_71286_72723[(2)] = inst_71254);

(statearr_71286_72723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71272 === (8))){
var inst_71256 = (state_71271[(8)]);
var inst_71262 = (state_71271[(2)]);
var state_71271__$1 = (function (){var statearr_71287 = state_71271;
(statearr_71287[(10)] = inst_71262);

return statearr_71287;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71271__$1,(9),results,inst_71256);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__70805__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__70805__auto____0 = (function (){
var statearr_71288 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_71288[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__70805__auto__);

(statearr_71288[(1)] = (1));

return statearr_71288;
});
var cljs$core$async$pipeline_STAR__$_state_machine__70805__auto____1 = (function (state_71271){
while(true){
var ret_value__70806__auto__ = (function (){try{while(true){
var result__70807__auto__ = switch__70804__auto__(state_71271);
if(cljs.core.keyword_identical_QMARK_(result__70807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70807__auto__;
}
break;
}
}catch (e71289){var ex__70808__auto__ = e71289;
var statearr_71291_72724 = state_71271;
(statearr_71291_72724[(2)] = ex__70808__auto__);


if(cljs.core.seq((state_71271[(4)]))){
var statearr_71292_72725 = state_71271;
(statearr_71292_72725[(1)] = cljs.core.first((state_71271[(4)])));

} else {
throw ex__70808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72726 = state_71271;
state_71271 = G__72726;
continue;
} else {
return ret_value__70806__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__70805__auto__ = function(state_71271){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__70805__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__70805__auto____1.call(this,state_71271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__70805__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__70805__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__70805__auto__;
})()
})();
var state__70912__auto__ = (function (){var statearr_71293 = f__70911__auto__();
(statearr_71293[(6)] = c__70910__auto___72717);

return statearr_71293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70912__auto__);
}));


var c__70910__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70911__auto__ = (function (){var switch__70804__auto__ = (function (state_71334){
var state_val_71335 = (state_71334[(1)]);
if((state_val_71335 === (7))){
var inst_71330 = (state_71334[(2)]);
var state_71334__$1 = state_71334;
var statearr_71336_72727 = state_71334__$1;
(statearr_71336_72727[(2)] = inst_71330);

(statearr_71336_72727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71335 === (20))){
var state_71334__$1 = state_71334;
var statearr_71337_72728 = state_71334__$1;
(statearr_71337_72728[(2)] = null);

(statearr_71337_72728[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71335 === (1))){
var state_71334__$1 = state_71334;
var statearr_71342_72729 = state_71334__$1;
(statearr_71342_72729[(2)] = null);

(statearr_71342_72729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71335 === (4))){
var inst_71296 = (state_71334[(7)]);
var inst_71296__$1 = (state_71334[(2)]);
var inst_71297 = (inst_71296__$1 == null);
var state_71334__$1 = (function (){var statearr_71343 = state_71334;
(statearr_71343[(7)] = inst_71296__$1);

return statearr_71343;
})();
if(cljs.core.truth_(inst_71297)){
var statearr_71344_72730 = state_71334__$1;
(statearr_71344_72730[(1)] = (5));

} else {
var statearr_71345_72731 = state_71334__$1;
(statearr_71345_72731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71335 === (15))){
var inst_71310 = (state_71334[(8)]);
var state_71334__$1 = state_71334;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71334__$1,(18),to,inst_71310);
} else {
if((state_val_71335 === (21))){
var inst_71324 = (state_71334[(2)]);
var state_71334__$1 = state_71334;
var statearr_71346_72732 = state_71334__$1;
(statearr_71346_72732[(2)] = inst_71324);

(statearr_71346_72732[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71335 === (13))){
var inst_71326 = (state_71334[(2)]);
var state_71334__$1 = (function (){var statearr_71347 = state_71334;
(statearr_71347[(9)] = inst_71326);

return statearr_71347;
})();
var statearr_71348_72733 = state_71334__$1;
(statearr_71348_72733[(2)] = null);

(statearr_71348_72733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71335 === (6))){
var inst_71296 = (state_71334[(7)]);
var state_71334__$1 = state_71334;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71334__$1,(11),inst_71296);
} else {
if((state_val_71335 === (17))){
var inst_71318 = (state_71334[(2)]);
var state_71334__$1 = state_71334;
if(cljs.core.truth_(inst_71318)){
var statearr_71349_72734 = state_71334__$1;
(statearr_71349_72734[(1)] = (19));

} else {
var statearr_71350_72735 = state_71334__$1;
(statearr_71350_72735[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71335 === (3))){
var inst_71332 = (state_71334[(2)]);
var state_71334__$1 = state_71334;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71334__$1,inst_71332);
} else {
if((state_val_71335 === (12))){
var inst_71306 = (state_71334[(10)]);
var state_71334__$1 = state_71334;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71334__$1,(14),inst_71306);
} else {
if((state_val_71335 === (2))){
var state_71334__$1 = state_71334;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71334__$1,(4),results);
} else {
if((state_val_71335 === (19))){
var state_71334__$1 = state_71334;
var statearr_71352_72736 = state_71334__$1;
(statearr_71352_72736[(2)] = null);

(statearr_71352_72736[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71335 === (11))){
var inst_71306 = (state_71334[(2)]);
var state_71334__$1 = (function (){var statearr_71353 = state_71334;
(statearr_71353[(10)] = inst_71306);

return statearr_71353;
})();
var statearr_71354_72737 = state_71334__$1;
(statearr_71354_72737[(2)] = null);

(statearr_71354_72737[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71335 === (9))){
var state_71334__$1 = state_71334;
var statearr_71355_72738 = state_71334__$1;
(statearr_71355_72738[(2)] = null);

(statearr_71355_72738[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71335 === (5))){
var state_71334__$1 = state_71334;
if(cljs.core.truth_(close_QMARK_)){
var statearr_71358_72739 = state_71334__$1;
(statearr_71358_72739[(1)] = (8));

} else {
var statearr_71359_72740 = state_71334__$1;
(statearr_71359_72740[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71335 === (14))){
var inst_71312 = (state_71334[(11)]);
var inst_71310 = (state_71334[(8)]);
var inst_71310__$1 = (state_71334[(2)]);
var inst_71311 = (inst_71310__$1 == null);
var inst_71312__$1 = cljs.core.not(inst_71311);
var state_71334__$1 = (function (){var statearr_71360 = state_71334;
(statearr_71360[(11)] = inst_71312__$1);

(statearr_71360[(8)] = inst_71310__$1);

return statearr_71360;
})();
if(inst_71312__$1){
var statearr_71361_72741 = state_71334__$1;
(statearr_71361_72741[(1)] = (15));

} else {
var statearr_71362_72743 = state_71334__$1;
(statearr_71362_72743[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71335 === (16))){
var inst_71312 = (state_71334[(11)]);
var state_71334__$1 = state_71334;
var statearr_71363_72745 = state_71334__$1;
(statearr_71363_72745[(2)] = inst_71312);

(statearr_71363_72745[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71335 === (10))){
var inst_71303 = (state_71334[(2)]);
var state_71334__$1 = state_71334;
var statearr_71365_72746 = state_71334__$1;
(statearr_71365_72746[(2)] = inst_71303);

(statearr_71365_72746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71335 === (18))){
var inst_71315 = (state_71334[(2)]);
var state_71334__$1 = state_71334;
var statearr_71366_72749 = state_71334__$1;
(statearr_71366_72749[(2)] = inst_71315);

(statearr_71366_72749[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71335 === (8))){
var inst_71300 = cljs.core.async.close_BANG_(to);
var state_71334__$1 = state_71334;
var statearr_71367_72751 = state_71334__$1;
(statearr_71367_72751[(2)] = inst_71300);

(statearr_71367_72751[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__70805__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__70805__auto____0 = (function (){
var statearr_71370 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71370[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__70805__auto__);

(statearr_71370[(1)] = (1));

return statearr_71370;
});
var cljs$core$async$pipeline_STAR__$_state_machine__70805__auto____1 = (function (state_71334){
while(true){
var ret_value__70806__auto__ = (function (){try{while(true){
var result__70807__auto__ = switch__70804__auto__(state_71334);
if(cljs.core.keyword_identical_QMARK_(result__70807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70807__auto__;
}
break;
}
}catch (e71371){var ex__70808__auto__ = e71371;
var statearr_71372_72753 = state_71334;
(statearr_71372_72753[(2)] = ex__70808__auto__);


if(cljs.core.seq((state_71334[(4)]))){
var statearr_71373_72754 = state_71334;
(statearr_71373_72754[(1)] = cljs.core.first((state_71334[(4)])));

} else {
throw ex__70808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72755 = state_71334;
state_71334 = G__72755;
continue;
} else {
return ret_value__70806__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__70805__auto__ = function(state_71334){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__70805__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__70805__auto____1.call(this,state_71334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__70805__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__70805__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__70805__auto__;
})()
})();
var state__70912__auto__ = (function (){var statearr_71374 = f__70911__auto__();
(statearr_71374[(6)] = c__70910__auto__);

return statearr_71374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70912__auto__);
}));

return c__70910__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__71376 = arguments.length;
switch (G__71376) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__71381 = arguments.length;
switch (G__71381) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__71384 = arguments.length;
switch (G__71384) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__70910__auto___72768 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70911__auto__ = (function (){var switch__70804__auto__ = (function (state_71413){
var state_val_71414 = (state_71413[(1)]);
if((state_val_71414 === (7))){
var inst_71409 = (state_71413[(2)]);
var state_71413__$1 = state_71413;
var statearr_71415_72769 = state_71413__$1;
(statearr_71415_72769[(2)] = inst_71409);

(statearr_71415_72769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71414 === (1))){
var state_71413__$1 = state_71413;
var statearr_71417_72770 = state_71413__$1;
(statearr_71417_72770[(2)] = null);

(statearr_71417_72770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71414 === (4))){
var inst_71390 = (state_71413[(7)]);
var inst_71390__$1 = (state_71413[(2)]);
var inst_71391 = (inst_71390__$1 == null);
var state_71413__$1 = (function (){var statearr_71418 = state_71413;
(statearr_71418[(7)] = inst_71390__$1);

return statearr_71418;
})();
if(cljs.core.truth_(inst_71391)){
var statearr_71419_72771 = state_71413__$1;
(statearr_71419_72771[(1)] = (5));

} else {
var statearr_71420_72772 = state_71413__$1;
(statearr_71420_72772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71414 === (13))){
var state_71413__$1 = state_71413;
var statearr_71421_72773 = state_71413__$1;
(statearr_71421_72773[(2)] = null);

(statearr_71421_72773[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71414 === (6))){
var inst_71390 = (state_71413[(7)]);
var inst_71396 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_71390) : p.call(null,inst_71390));
var state_71413__$1 = state_71413;
if(cljs.core.truth_(inst_71396)){
var statearr_71425_72774 = state_71413__$1;
(statearr_71425_72774[(1)] = (9));

} else {
var statearr_71426_72775 = state_71413__$1;
(statearr_71426_72775[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71414 === (3))){
var inst_71411 = (state_71413[(2)]);
var state_71413__$1 = state_71413;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71413__$1,inst_71411);
} else {
if((state_val_71414 === (12))){
var state_71413__$1 = state_71413;
var statearr_71427_72776 = state_71413__$1;
(statearr_71427_72776[(2)] = null);

(statearr_71427_72776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71414 === (2))){
var state_71413__$1 = state_71413;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71413__$1,(4),ch);
} else {
if((state_val_71414 === (11))){
var inst_71390 = (state_71413[(7)]);
var inst_71400 = (state_71413[(2)]);
var state_71413__$1 = state_71413;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71413__$1,(8),inst_71400,inst_71390);
} else {
if((state_val_71414 === (9))){
var state_71413__$1 = state_71413;
var statearr_71431_72777 = state_71413__$1;
(statearr_71431_72777[(2)] = tc);

(statearr_71431_72777[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71414 === (5))){
var inst_71393 = cljs.core.async.close_BANG_(tc);
var inst_71394 = cljs.core.async.close_BANG_(fc);
var state_71413__$1 = (function (){var statearr_71432 = state_71413;
(statearr_71432[(8)] = inst_71393);

return statearr_71432;
})();
var statearr_71433_72778 = state_71413__$1;
(statearr_71433_72778[(2)] = inst_71394);

(statearr_71433_72778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71414 === (14))){
var inst_71407 = (state_71413[(2)]);
var state_71413__$1 = state_71413;
var statearr_71434_72779 = state_71413__$1;
(statearr_71434_72779[(2)] = inst_71407);

(statearr_71434_72779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71414 === (10))){
var state_71413__$1 = state_71413;
var statearr_71438_72780 = state_71413__$1;
(statearr_71438_72780[(2)] = fc);

(statearr_71438_72780[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71414 === (8))){
var inst_71402 = (state_71413[(2)]);
var state_71413__$1 = state_71413;
if(cljs.core.truth_(inst_71402)){
var statearr_71439_72781 = state_71413__$1;
(statearr_71439_72781[(1)] = (12));

} else {
var statearr_71440_72782 = state_71413__$1;
(statearr_71440_72782[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__70805__auto__ = null;
var cljs$core$async$state_machine__70805__auto____0 = (function (){
var statearr_71441 = [null,null,null,null,null,null,null,null,null];
(statearr_71441[(0)] = cljs$core$async$state_machine__70805__auto__);

(statearr_71441[(1)] = (1));

return statearr_71441;
});
var cljs$core$async$state_machine__70805__auto____1 = (function (state_71413){
while(true){
var ret_value__70806__auto__ = (function (){try{while(true){
var result__70807__auto__ = switch__70804__auto__(state_71413);
if(cljs.core.keyword_identical_QMARK_(result__70807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70807__auto__;
}
break;
}
}catch (e71442){var ex__70808__auto__ = e71442;
var statearr_71443_72783 = state_71413;
(statearr_71443_72783[(2)] = ex__70808__auto__);


if(cljs.core.seq((state_71413[(4)]))){
var statearr_71444_72784 = state_71413;
(statearr_71444_72784[(1)] = cljs.core.first((state_71413[(4)])));

} else {
throw ex__70808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72785 = state_71413;
state_71413 = G__72785;
continue;
} else {
return ret_value__70806__auto__;
}
break;
}
});
cljs$core$async$state_machine__70805__auto__ = function(state_71413){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__70805__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__70805__auto____1.call(this,state_71413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__70805__auto____0;
cljs$core$async$state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__70805__auto____1;
return cljs$core$async$state_machine__70805__auto__;
})()
})();
var state__70912__auto__ = (function (){var statearr_71448 = f__70911__auto__();
(statearr_71448[(6)] = c__70910__auto___72768);

return statearr_71448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70912__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__70910__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70911__auto__ = (function (){var switch__70804__auto__ = (function (state_71472){
var state_val_71473 = (state_71472[(1)]);
if((state_val_71473 === (7))){
var inst_71468 = (state_71472[(2)]);
var state_71472__$1 = state_71472;
var statearr_71474_72786 = state_71472__$1;
(statearr_71474_72786[(2)] = inst_71468);

(statearr_71474_72786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71473 === (1))){
var inst_71451 = init;
var inst_71452 = inst_71451;
var state_71472__$1 = (function (){var statearr_71475 = state_71472;
(statearr_71475[(7)] = inst_71452);

return statearr_71475;
})();
var statearr_71476_72787 = state_71472__$1;
(statearr_71476_72787[(2)] = null);

(statearr_71476_72787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71473 === (4))){
var inst_71455 = (state_71472[(8)]);
var inst_71455__$1 = (state_71472[(2)]);
var inst_71456 = (inst_71455__$1 == null);
var state_71472__$1 = (function (){var statearr_71477 = state_71472;
(statearr_71477[(8)] = inst_71455__$1);

return statearr_71477;
})();
if(cljs.core.truth_(inst_71456)){
var statearr_71478_72788 = state_71472__$1;
(statearr_71478_72788[(1)] = (5));

} else {
var statearr_71479_72789 = state_71472__$1;
(statearr_71479_72789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71473 === (6))){
var inst_71455 = (state_71472[(8)]);
var inst_71459 = (state_71472[(9)]);
var inst_71452 = (state_71472[(7)]);
var inst_71459__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_71452,inst_71455) : f.call(null,inst_71452,inst_71455));
var inst_71460 = cljs.core.reduced_QMARK_(inst_71459__$1);
var state_71472__$1 = (function (){var statearr_71480 = state_71472;
(statearr_71480[(9)] = inst_71459__$1);

return statearr_71480;
})();
if(inst_71460){
var statearr_71481_72790 = state_71472__$1;
(statearr_71481_72790[(1)] = (8));

} else {
var statearr_71482_72791 = state_71472__$1;
(statearr_71482_72791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71473 === (3))){
var inst_71470 = (state_71472[(2)]);
var state_71472__$1 = state_71472;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71472__$1,inst_71470);
} else {
if((state_val_71473 === (2))){
var state_71472__$1 = state_71472;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71472__$1,(4),ch);
} else {
if((state_val_71473 === (9))){
var inst_71459 = (state_71472[(9)]);
var inst_71452 = inst_71459;
var state_71472__$1 = (function (){var statearr_71484 = state_71472;
(statearr_71484[(7)] = inst_71452);

return statearr_71484;
})();
var statearr_71485_72792 = state_71472__$1;
(statearr_71485_72792[(2)] = null);

(statearr_71485_72792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71473 === (5))){
var inst_71452 = (state_71472[(7)]);
var state_71472__$1 = state_71472;
var statearr_71486_72793 = state_71472__$1;
(statearr_71486_72793[(2)] = inst_71452);

(statearr_71486_72793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71473 === (10))){
var inst_71466 = (state_71472[(2)]);
var state_71472__$1 = state_71472;
var statearr_71488_72794 = state_71472__$1;
(statearr_71488_72794[(2)] = inst_71466);

(statearr_71488_72794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71473 === (8))){
var inst_71459 = (state_71472[(9)]);
var inst_71462 = cljs.core.deref(inst_71459);
var state_71472__$1 = state_71472;
var statearr_71489_72795 = state_71472__$1;
(statearr_71489_72795[(2)] = inst_71462);

(statearr_71489_72795[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__70805__auto__ = null;
var cljs$core$async$reduce_$_state_machine__70805__auto____0 = (function (){
var statearr_71491 = [null,null,null,null,null,null,null,null,null,null];
(statearr_71491[(0)] = cljs$core$async$reduce_$_state_machine__70805__auto__);

(statearr_71491[(1)] = (1));

return statearr_71491;
});
var cljs$core$async$reduce_$_state_machine__70805__auto____1 = (function (state_71472){
while(true){
var ret_value__70806__auto__ = (function (){try{while(true){
var result__70807__auto__ = switch__70804__auto__(state_71472);
if(cljs.core.keyword_identical_QMARK_(result__70807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70807__auto__;
}
break;
}
}catch (e71492){var ex__70808__auto__ = e71492;
var statearr_71493_72796 = state_71472;
(statearr_71493_72796[(2)] = ex__70808__auto__);


if(cljs.core.seq((state_71472[(4)]))){
var statearr_71494_72797 = state_71472;
(statearr_71494_72797[(1)] = cljs.core.first((state_71472[(4)])));

} else {
throw ex__70808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72798 = state_71472;
state_71472 = G__72798;
continue;
} else {
return ret_value__70806__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__70805__auto__ = function(state_71472){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__70805__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__70805__auto____1.call(this,state_71472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__70805__auto____0;
cljs$core$async$reduce_$_state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__70805__auto____1;
return cljs$core$async$reduce_$_state_machine__70805__auto__;
})()
})();
var state__70912__auto__ = (function (){var statearr_71498 = f__70911__auto__();
(statearr_71498[(6)] = c__70910__auto__);

return statearr_71498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70912__auto__);
}));

return c__70910__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__70910__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70911__auto__ = (function (){var switch__70804__auto__ = (function (state_71505){
var state_val_71506 = (state_71505[(1)]);
if((state_val_71506 === (1))){
var inst_71500 = cljs.core.async.reduce(f__$1,init,ch);
var state_71505__$1 = state_71505;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71505__$1,(2),inst_71500);
} else {
if((state_val_71506 === (2))){
var inst_71502 = (state_71505[(2)]);
var inst_71503 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_71502) : f__$1.call(null,inst_71502));
var state_71505__$1 = state_71505;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71505__$1,inst_71503);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__70805__auto__ = null;
var cljs$core$async$transduce_$_state_machine__70805__auto____0 = (function (){
var statearr_71512 = [null,null,null,null,null,null,null];
(statearr_71512[(0)] = cljs$core$async$transduce_$_state_machine__70805__auto__);

(statearr_71512[(1)] = (1));

return statearr_71512;
});
var cljs$core$async$transduce_$_state_machine__70805__auto____1 = (function (state_71505){
while(true){
var ret_value__70806__auto__ = (function (){try{while(true){
var result__70807__auto__ = switch__70804__auto__(state_71505);
if(cljs.core.keyword_identical_QMARK_(result__70807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70807__auto__;
}
break;
}
}catch (e71513){var ex__70808__auto__ = e71513;
var statearr_71514_72799 = state_71505;
(statearr_71514_72799[(2)] = ex__70808__auto__);


if(cljs.core.seq((state_71505[(4)]))){
var statearr_71515_72800 = state_71505;
(statearr_71515_72800[(1)] = cljs.core.first((state_71505[(4)])));

} else {
throw ex__70808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72801 = state_71505;
state_71505 = G__72801;
continue;
} else {
return ret_value__70806__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__70805__auto__ = function(state_71505){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__70805__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__70805__auto____1.call(this,state_71505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__70805__auto____0;
cljs$core$async$transduce_$_state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__70805__auto____1;
return cljs$core$async$transduce_$_state_machine__70805__auto__;
})()
})();
var state__70912__auto__ = (function (){var statearr_71518 = f__70911__auto__();
(statearr_71518[(6)] = c__70910__auto__);

return statearr_71518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70912__auto__);
}));

return c__70910__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__71521 = arguments.length;
switch (G__71521) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__70910__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70911__auto__ = (function (){var switch__70804__auto__ = (function (state_71546){
var state_val_71547 = (state_71546[(1)]);
if((state_val_71547 === (7))){
var inst_71528 = (state_71546[(2)]);
var state_71546__$1 = state_71546;
var statearr_71548_72803 = state_71546__$1;
(statearr_71548_72803[(2)] = inst_71528);

(statearr_71548_72803[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71547 === (1))){
var inst_71522 = cljs.core.seq(coll);
var inst_71523 = inst_71522;
var state_71546__$1 = (function (){var statearr_71549 = state_71546;
(statearr_71549[(7)] = inst_71523);

return statearr_71549;
})();
var statearr_71550_72804 = state_71546__$1;
(statearr_71550_72804[(2)] = null);

(statearr_71550_72804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71547 === (4))){
var inst_71523 = (state_71546[(7)]);
var inst_71526 = cljs.core.first(inst_71523);
var state_71546__$1 = state_71546;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71546__$1,(7),ch,inst_71526);
} else {
if((state_val_71547 === (13))){
var inst_71540 = (state_71546[(2)]);
var state_71546__$1 = state_71546;
var statearr_71551_72805 = state_71546__$1;
(statearr_71551_72805[(2)] = inst_71540);

(statearr_71551_72805[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71547 === (6))){
var inst_71531 = (state_71546[(2)]);
var state_71546__$1 = state_71546;
if(cljs.core.truth_(inst_71531)){
var statearr_71552_72806 = state_71546__$1;
(statearr_71552_72806[(1)] = (8));

} else {
var statearr_71553_72807 = state_71546__$1;
(statearr_71553_72807[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71547 === (3))){
var inst_71544 = (state_71546[(2)]);
var state_71546__$1 = state_71546;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71546__$1,inst_71544);
} else {
if((state_val_71547 === (12))){
var state_71546__$1 = state_71546;
var statearr_71554_72808 = state_71546__$1;
(statearr_71554_72808[(2)] = null);

(statearr_71554_72808[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71547 === (2))){
var inst_71523 = (state_71546[(7)]);
var state_71546__$1 = state_71546;
if(cljs.core.truth_(inst_71523)){
var statearr_71555_72809 = state_71546__$1;
(statearr_71555_72809[(1)] = (4));

} else {
var statearr_71556_72810 = state_71546__$1;
(statearr_71556_72810[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71547 === (11))){
var inst_71537 = cljs.core.async.close_BANG_(ch);
var state_71546__$1 = state_71546;
var statearr_71557_72811 = state_71546__$1;
(statearr_71557_72811[(2)] = inst_71537);

(statearr_71557_72811[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71547 === (9))){
var state_71546__$1 = state_71546;
if(cljs.core.truth_(close_QMARK_)){
var statearr_71558_72812 = state_71546__$1;
(statearr_71558_72812[(1)] = (11));

} else {
var statearr_71559_72813 = state_71546__$1;
(statearr_71559_72813[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71547 === (5))){
var inst_71523 = (state_71546[(7)]);
var state_71546__$1 = state_71546;
var statearr_71560_72814 = state_71546__$1;
(statearr_71560_72814[(2)] = inst_71523);

(statearr_71560_72814[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71547 === (10))){
var inst_71542 = (state_71546[(2)]);
var state_71546__$1 = state_71546;
var statearr_71561_72815 = state_71546__$1;
(statearr_71561_72815[(2)] = inst_71542);

(statearr_71561_72815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71547 === (8))){
var inst_71523 = (state_71546[(7)]);
var inst_71533 = cljs.core.next(inst_71523);
var inst_71523__$1 = inst_71533;
var state_71546__$1 = (function (){var statearr_71562 = state_71546;
(statearr_71562[(7)] = inst_71523__$1);

return statearr_71562;
})();
var statearr_71563_72816 = state_71546__$1;
(statearr_71563_72816[(2)] = null);

(statearr_71563_72816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__70805__auto__ = null;
var cljs$core$async$state_machine__70805__auto____0 = (function (){
var statearr_71564 = [null,null,null,null,null,null,null,null];
(statearr_71564[(0)] = cljs$core$async$state_machine__70805__auto__);

(statearr_71564[(1)] = (1));

return statearr_71564;
});
var cljs$core$async$state_machine__70805__auto____1 = (function (state_71546){
while(true){
var ret_value__70806__auto__ = (function (){try{while(true){
var result__70807__auto__ = switch__70804__auto__(state_71546);
if(cljs.core.keyword_identical_QMARK_(result__70807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70807__auto__;
}
break;
}
}catch (e71565){var ex__70808__auto__ = e71565;
var statearr_71566_72817 = state_71546;
(statearr_71566_72817[(2)] = ex__70808__auto__);


if(cljs.core.seq((state_71546[(4)]))){
var statearr_71567_72818 = state_71546;
(statearr_71567_72818[(1)] = cljs.core.first((state_71546[(4)])));

} else {
throw ex__70808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72819 = state_71546;
state_71546 = G__72819;
continue;
} else {
return ret_value__70806__auto__;
}
break;
}
});
cljs$core$async$state_machine__70805__auto__ = function(state_71546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__70805__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__70805__auto____1.call(this,state_71546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__70805__auto____0;
cljs$core$async$state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__70805__auto____1;
return cljs$core$async$state_machine__70805__auto__;
})()
})();
var state__70912__auto__ = (function (){var statearr_71568 = f__70911__auto__();
(statearr_71568[(6)] = c__70910__auto__);

return statearr_71568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70912__auto__);
}));

return c__70910__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__71570 = arguments.length;
switch (G__71570) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_72823 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_72823(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_72826 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_72826(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_72827 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_72827(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_72828 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_72828(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71577 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71577 = (function (ch,cs,meta71578){
this.ch = ch;
this.cs = cs;
this.meta71578 = meta71578;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71579,meta71578__$1){
var self__ = this;
var _71579__$1 = this;
return (new cljs.core.async.t_cljs$core$async71577(self__.ch,self__.cs,meta71578__$1));
}));

(cljs.core.async.t_cljs$core$async71577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71579){
var self__ = this;
var _71579__$1 = this;
return self__.meta71578;
}));

(cljs.core.async.t_cljs$core$async71577.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71577.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async71577.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71577.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async71577.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async71577.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async71577.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta71578","meta71578",-1637228642,null)], null);
}));

(cljs.core.async.t_cljs$core$async71577.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71577.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71577");

(cljs.core.async.t_cljs$core$async71577.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async71577");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71577.
 */
cljs.core.async.__GT_t_cljs$core$async71577 = (function cljs$core$async$mult_$___GT_t_cljs$core$async71577(ch__$1,cs__$1,meta71578){
return (new cljs.core.async.t_cljs$core$async71577(ch__$1,cs__$1,meta71578));
});

}

return (new cljs.core.async.t_cljs$core$async71577(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__70910__auto___72832 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70911__auto__ = (function (){var switch__70804__auto__ = (function (state_71723){
var state_val_71724 = (state_71723[(1)]);
if((state_val_71724 === (7))){
var inst_71715 = (state_71723[(2)]);
var state_71723__$1 = state_71723;
var statearr_71725_72833 = state_71723__$1;
(statearr_71725_72833[(2)] = inst_71715);

(statearr_71725_72833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (20))){
var inst_71613 = (state_71723[(7)]);
var inst_71625 = cljs.core.first(inst_71613);
var inst_71626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71625,(0),null);
var inst_71627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71625,(1),null);
var state_71723__$1 = (function (){var statearr_71727 = state_71723;
(statearr_71727[(8)] = inst_71626);

return statearr_71727;
})();
if(cljs.core.truth_(inst_71627)){
var statearr_71728_72834 = state_71723__$1;
(statearr_71728_72834[(1)] = (22));

} else {
var statearr_71729_72835 = state_71723__$1;
(statearr_71729_72835[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (27))){
var inst_71582 = (state_71723[(9)]);
var inst_71659 = (state_71723[(10)]);
var inst_71664 = (state_71723[(11)]);
var inst_71657 = (state_71723[(12)]);
var inst_71664__$1 = cljs.core._nth(inst_71657,inst_71659);
var inst_71665 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_71664__$1,inst_71582,done);
var state_71723__$1 = (function (){var statearr_71730 = state_71723;
(statearr_71730[(11)] = inst_71664__$1);

return statearr_71730;
})();
if(cljs.core.truth_(inst_71665)){
var statearr_71731_72836 = state_71723__$1;
(statearr_71731_72836[(1)] = (30));

} else {
var statearr_71732_72837 = state_71723__$1;
(statearr_71732_72837[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (1))){
var state_71723__$1 = state_71723;
var statearr_71733_72838 = state_71723__$1;
(statearr_71733_72838[(2)] = null);

(statearr_71733_72838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (24))){
var inst_71613 = (state_71723[(7)]);
var inst_71632 = (state_71723[(2)]);
var inst_71633 = cljs.core.next(inst_71613);
var inst_71591 = inst_71633;
var inst_71592 = null;
var inst_71593 = (0);
var inst_71594 = (0);
var state_71723__$1 = (function (){var statearr_71734 = state_71723;
(statearr_71734[(13)] = inst_71592);

(statearr_71734[(14)] = inst_71591);

(statearr_71734[(15)] = inst_71594);

(statearr_71734[(16)] = inst_71632);

(statearr_71734[(17)] = inst_71593);

return statearr_71734;
})();
var statearr_71735_72839 = state_71723__$1;
(statearr_71735_72839[(2)] = null);

(statearr_71735_72839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (39))){
var state_71723__$1 = state_71723;
var statearr_71739_72840 = state_71723__$1;
(statearr_71739_72840[(2)] = null);

(statearr_71739_72840[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (4))){
var inst_71582 = (state_71723[(9)]);
var inst_71582__$1 = (state_71723[(2)]);
var inst_71583 = (inst_71582__$1 == null);
var state_71723__$1 = (function (){var statearr_71740 = state_71723;
(statearr_71740[(9)] = inst_71582__$1);

return statearr_71740;
})();
if(cljs.core.truth_(inst_71583)){
var statearr_71741_72842 = state_71723__$1;
(statearr_71741_72842[(1)] = (5));

} else {
var statearr_71742_72843 = state_71723__$1;
(statearr_71742_72843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (15))){
var inst_71592 = (state_71723[(13)]);
var inst_71591 = (state_71723[(14)]);
var inst_71594 = (state_71723[(15)]);
var inst_71593 = (state_71723[(17)]);
var inst_71609 = (state_71723[(2)]);
var inst_71610 = (inst_71594 + (1));
var tmp71736 = inst_71592;
var tmp71737 = inst_71591;
var tmp71738 = inst_71593;
var inst_71591__$1 = tmp71737;
var inst_71592__$1 = tmp71736;
var inst_71593__$1 = tmp71738;
var inst_71594__$1 = inst_71610;
var state_71723__$1 = (function (){var statearr_71743 = state_71723;
(statearr_71743[(13)] = inst_71592__$1);

(statearr_71743[(14)] = inst_71591__$1);

(statearr_71743[(18)] = inst_71609);

(statearr_71743[(15)] = inst_71594__$1);

(statearr_71743[(17)] = inst_71593__$1);

return statearr_71743;
})();
var statearr_71744_72846 = state_71723__$1;
(statearr_71744_72846[(2)] = null);

(statearr_71744_72846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (21))){
var inst_71636 = (state_71723[(2)]);
var state_71723__$1 = state_71723;
var statearr_71748_72847 = state_71723__$1;
(statearr_71748_72847[(2)] = inst_71636);

(statearr_71748_72847[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (31))){
var inst_71664 = (state_71723[(11)]);
var inst_71668 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_71664);
var state_71723__$1 = state_71723;
var statearr_71749_72848 = state_71723__$1;
(statearr_71749_72848[(2)] = inst_71668);

(statearr_71749_72848[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (32))){
var inst_71659 = (state_71723[(10)]);
var inst_71658 = (state_71723[(19)]);
var inst_71657 = (state_71723[(12)]);
var inst_71656 = (state_71723[(20)]);
var inst_71670 = (state_71723[(2)]);
var inst_71671 = (inst_71659 + (1));
var tmp71745 = inst_71658;
var tmp71746 = inst_71657;
var tmp71747 = inst_71656;
var inst_71656__$1 = tmp71747;
var inst_71657__$1 = tmp71746;
var inst_71658__$1 = tmp71745;
var inst_71659__$1 = inst_71671;
var state_71723__$1 = (function (){var statearr_71750 = state_71723;
(statearr_71750[(21)] = inst_71670);

(statearr_71750[(10)] = inst_71659__$1);

(statearr_71750[(19)] = inst_71658__$1);

(statearr_71750[(12)] = inst_71657__$1);

(statearr_71750[(20)] = inst_71656__$1);

return statearr_71750;
})();
var statearr_71751_72849 = state_71723__$1;
(statearr_71751_72849[(2)] = null);

(statearr_71751_72849[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (40))){
var inst_71688 = (state_71723[(22)]);
var inst_71692 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_71688);
var state_71723__$1 = state_71723;
var statearr_71752_72850 = state_71723__$1;
(statearr_71752_72850[(2)] = inst_71692);

(statearr_71752_72850[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (33))){
var inst_71678 = (state_71723[(23)]);
var inst_71680 = cljs.core.chunked_seq_QMARK_(inst_71678);
var state_71723__$1 = state_71723;
if(inst_71680){
var statearr_71753_72851 = state_71723__$1;
(statearr_71753_72851[(1)] = (36));

} else {
var statearr_71754_72852 = state_71723__$1;
(statearr_71754_72852[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (13))){
var inst_71603 = (state_71723[(24)]);
var inst_71606 = cljs.core.async.close_BANG_(inst_71603);
var state_71723__$1 = state_71723;
var statearr_71755_72853 = state_71723__$1;
(statearr_71755_72853[(2)] = inst_71606);

(statearr_71755_72853[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (22))){
var inst_71626 = (state_71723[(8)]);
var inst_71629 = cljs.core.async.close_BANG_(inst_71626);
var state_71723__$1 = state_71723;
var statearr_71756_72854 = state_71723__$1;
(statearr_71756_72854[(2)] = inst_71629);

(statearr_71756_72854[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (36))){
var inst_71678 = (state_71723[(23)]);
var inst_71683 = cljs.core.chunk_first(inst_71678);
var inst_71684 = cljs.core.chunk_rest(inst_71678);
var inst_71685 = cljs.core.count(inst_71683);
var inst_71656 = inst_71684;
var inst_71657 = inst_71683;
var inst_71658 = inst_71685;
var inst_71659 = (0);
var state_71723__$1 = (function (){var statearr_71757 = state_71723;
(statearr_71757[(10)] = inst_71659);

(statearr_71757[(19)] = inst_71658);

(statearr_71757[(12)] = inst_71657);

(statearr_71757[(20)] = inst_71656);

return statearr_71757;
})();
var statearr_71758_72855 = state_71723__$1;
(statearr_71758_72855[(2)] = null);

(statearr_71758_72855[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (41))){
var inst_71678 = (state_71723[(23)]);
var inst_71694 = (state_71723[(2)]);
var inst_71695 = cljs.core.next(inst_71678);
var inst_71656 = inst_71695;
var inst_71657 = null;
var inst_71658 = (0);
var inst_71659 = (0);
var state_71723__$1 = (function (){var statearr_71759 = state_71723;
(statearr_71759[(10)] = inst_71659);

(statearr_71759[(19)] = inst_71658);

(statearr_71759[(12)] = inst_71657);

(statearr_71759[(25)] = inst_71694);

(statearr_71759[(20)] = inst_71656);

return statearr_71759;
})();
var statearr_71760_72856 = state_71723__$1;
(statearr_71760_72856[(2)] = null);

(statearr_71760_72856[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (43))){
var state_71723__$1 = state_71723;
var statearr_71761_72857 = state_71723__$1;
(statearr_71761_72857[(2)] = null);

(statearr_71761_72857[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (29))){
var inst_71703 = (state_71723[(2)]);
var state_71723__$1 = state_71723;
var statearr_71762_72860 = state_71723__$1;
(statearr_71762_72860[(2)] = inst_71703);

(statearr_71762_72860[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (44))){
var inst_71712 = (state_71723[(2)]);
var state_71723__$1 = (function (){var statearr_71763 = state_71723;
(statearr_71763[(26)] = inst_71712);

return statearr_71763;
})();
var statearr_71764_72861 = state_71723__$1;
(statearr_71764_72861[(2)] = null);

(statearr_71764_72861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (6))){
var inst_71648 = (state_71723[(27)]);
var inst_71647 = cljs.core.deref(cs);
var inst_71648__$1 = cljs.core.keys(inst_71647);
var inst_71649 = cljs.core.count(inst_71648__$1);
var inst_71650 = cljs.core.reset_BANG_(dctr,inst_71649);
var inst_71655 = cljs.core.seq(inst_71648__$1);
var inst_71656 = inst_71655;
var inst_71657 = null;
var inst_71658 = (0);
var inst_71659 = (0);
var state_71723__$1 = (function (){var statearr_71770 = state_71723;
(statearr_71770[(10)] = inst_71659);

(statearr_71770[(19)] = inst_71658);

(statearr_71770[(12)] = inst_71657);

(statearr_71770[(28)] = inst_71650);

(statearr_71770[(27)] = inst_71648__$1);

(statearr_71770[(20)] = inst_71656);

return statearr_71770;
})();
var statearr_71771_72863 = state_71723__$1;
(statearr_71771_72863[(2)] = null);

(statearr_71771_72863[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (28))){
var inst_71678 = (state_71723[(23)]);
var inst_71656 = (state_71723[(20)]);
var inst_71678__$1 = cljs.core.seq(inst_71656);
var state_71723__$1 = (function (){var statearr_71773 = state_71723;
(statearr_71773[(23)] = inst_71678__$1);

return statearr_71773;
})();
if(inst_71678__$1){
var statearr_71774_72864 = state_71723__$1;
(statearr_71774_72864[(1)] = (33));

} else {
var statearr_71775_72865 = state_71723__$1;
(statearr_71775_72865[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (25))){
var inst_71659 = (state_71723[(10)]);
var inst_71658 = (state_71723[(19)]);
var inst_71661 = (inst_71659 < inst_71658);
var inst_71662 = inst_71661;
var state_71723__$1 = state_71723;
if(cljs.core.truth_(inst_71662)){
var statearr_71777_72868 = state_71723__$1;
(statearr_71777_72868[(1)] = (27));

} else {
var statearr_71781_72869 = state_71723__$1;
(statearr_71781_72869[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (34))){
var state_71723__$1 = state_71723;
var statearr_71782_72870 = state_71723__$1;
(statearr_71782_72870[(2)] = null);

(statearr_71782_72870[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (17))){
var state_71723__$1 = state_71723;
var statearr_71783_72871 = state_71723__$1;
(statearr_71783_72871[(2)] = null);

(statearr_71783_72871[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (3))){
var inst_71717 = (state_71723[(2)]);
var state_71723__$1 = state_71723;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71723__$1,inst_71717);
} else {
if((state_val_71724 === (12))){
var inst_71641 = (state_71723[(2)]);
var state_71723__$1 = state_71723;
var statearr_71784_72872 = state_71723__$1;
(statearr_71784_72872[(2)] = inst_71641);

(statearr_71784_72872[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (2))){
var state_71723__$1 = state_71723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71723__$1,(4),ch);
} else {
if((state_val_71724 === (23))){
var state_71723__$1 = state_71723;
var statearr_71785_72873 = state_71723__$1;
(statearr_71785_72873[(2)] = null);

(statearr_71785_72873[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (35))){
var inst_71701 = (state_71723[(2)]);
var state_71723__$1 = state_71723;
var statearr_71786_72874 = state_71723__$1;
(statearr_71786_72874[(2)] = inst_71701);

(statearr_71786_72874[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (19))){
var inst_71613 = (state_71723[(7)]);
var inst_71617 = cljs.core.chunk_first(inst_71613);
var inst_71618 = cljs.core.chunk_rest(inst_71613);
var inst_71619 = cljs.core.count(inst_71617);
var inst_71591 = inst_71618;
var inst_71592 = inst_71617;
var inst_71593 = inst_71619;
var inst_71594 = (0);
var state_71723__$1 = (function (){var statearr_71787 = state_71723;
(statearr_71787[(13)] = inst_71592);

(statearr_71787[(14)] = inst_71591);

(statearr_71787[(15)] = inst_71594);

(statearr_71787[(17)] = inst_71593);

return statearr_71787;
})();
var statearr_71788_72875 = state_71723__$1;
(statearr_71788_72875[(2)] = null);

(statearr_71788_72875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (11))){
var inst_71591 = (state_71723[(14)]);
var inst_71613 = (state_71723[(7)]);
var inst_71613__$1 = cljs.core.seq(inst_71591);
var state_71723__$1 = (function (){var statearr_71789 = state_71723;
(statearr_71789[(7)] = inst_71613__$1);

return statearr_71789;
})();
if(inst_71613__$1){
var statearr_71790_72876 = state_71723__$1;
(statearr_71790_72876[(1)] = (16));

} else {
var statearr_71791_72877 = state_71723__$1;
(statearr_71791_72877[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (9))){
var inst_71643 = (state_71723[(2)]);
var state_71723__$1 = state_71723;
var statearr_71793_72878 = state_71723__$1;
(statearr_71793_72878[(2)] = inst_71643);

(statearr_71793_72878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (5))){
var inst_71589 = cljs.core.deref(cs);
var inst_71590 = cljs.core.seq(inst_71589);
var inst_71591 = inst_71590;
var inst_71592 = null;
var inst_71593 = (0);
var inst_71594 = (0);
var state_71723__$1 = (function (){var statearr_71794 = state_71723;
(statearr_71794[(13)] = inst_71592);

(statearr_71794[(14)] = inst_71591);

(statearr_71794[(15)] = inst_71594);

(statearr_71794[(17)] = inst_71593);

return statearr_71794;
})();
var statearr_71798_72881 = state_71723__$1;
(statearr_71798_72881[(2)] = null);

(statearr_71798_72881[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (14))){
var state_71723__$1 = state_71723;
var statearr_71799_72882 = state_71723__$1;
(statearr_71799_72882[(2)] = null);

(statearr_71799_72882[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (45))){
var inst_71709 = (state_71723[(2)]);
var state_71723__$1 = state_71723;
var statearr_71800_72883 = state_71723__$1;
(statearr_71800_72883[(2)] = inst_71709);

(statearr_71800_72883[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (26))){
var inst_71648 = (state_71723[(27)]);
var inst_71705 = (state_71723[(2)]);
var inst_71706 = cljs.core.seq(inst_71648);
var state_71723__$1 = (function (){var statearr_71801 = state_71723;
(statearr_71801[(29)] = inst_71705);

return statearr_71801;
})();
if(inst_71706){
var statearr_71802_72884 = state_71723__$1;
(statearr_71802_72884[(1)] = (42));

} else {
var statearr_71803_72885 = state_71723__$1;
(statearr_71803_72885[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (16))){
var inst_71613 = (state_71723[(7)]);
var inst_71615 = cljs.core.chunked_seq_QMARK_(inst_71613);
var state_71723__$1 = state_71723;
if(inst_71615){
var statearr_71805_72886 = state_71723__$1;
(statearr_71805_72886[(1)] = (19));

} else {
var statearr_71806_72887 = state_71723__$1;
(statearr_71806_72887[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (38))){
var inst_71698 = (state_71723[(2)]);
var state_71723__$1 = state_71723;
var statearr_71807_72888 = state_71723__$1;
(statearr_71807_72888[(2)] = inst_71698);

(statearr_71807_72888[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (30))){
var state_71723__$1 = state_71723;
var statearr_71808_72889 = state_71723__$1;
(statearr_71808_72889[(2)] = null);

(statearr_71808_72889[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (10))){
var inst_71592 = (state_71723[(13)]);
var inst_71594 = (state_71723[(15)]);
var inst_71602 = cljs.core._nth(inst_71592,inst_71594);
var inst_71603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71602,(0),null);
var inst_71604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71602,(1),null);
var state_71723__$1 = (function (){var statearr_71809 = state_71723;
(statearr_71809[(24)] = inst_71603);

return statearr_71809;
})();
if(cljs.core.truth_(inst_71604)){
var statearr_71810_72890 = state_71723__$1;
(statearr_71810_72890[(1)] = (13));

} else {
var statearr_71811_72891 = state_71723__$1;
(statearr_71811_72891[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (18))){
var inst_71639 = (state_71723[(2)]);
var state_71723__$1 = state_71723;
var statearr_71812_72893 = state_71723__$1;
(statearr_71812_72893[(2)] = inst_71639);

(statearr_71812_72893[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (42))){
var state_71723__$1 = state_71723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71723__$1,(45),dchan);
} else {
if((state_val_71724 === (37))){
var inst_71688 = (state_71723[(22)]);
var inst_71582 = (state_71723[(9)]);
var inst_71678 = (state_71723[(23)]);
var inst_71688__$1 = cljs.core.first(inst_71678);
var inst_71689 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_71688__$1,inst_71582,done);
var state_71723__$1 = (function (){var statearr_71813 = state_71723;
(statearr_71813[(22)] = inst_71688__$1);

return statearr_71813;
})();
if(cljs.core.truth_(inst_71689)){
var statearr_71814_72896 = state_71723__$1;
(statearr_71814_72896[(1)] = (39));

} else {
var statearr_71815_72897 = state_71723__$1;
(statearr_71815_72897[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (8))){
var inst_71594 = (state_71723[(15)]);
var inst_71593 = (state_71723[(17)]);
var inst_71596 = (inst_71594 < inst_71593);
var inst_71597 = inst_71596;
var state_71723__$1 = state_71723;
if(cljs.core.truth_(inst_71597)){
var statearr_71816_72898 = state_71723__$1;
(statearr_71816_72898[(1)] = (10));

} else {
var statearr_71817_72899 = state_71723__$1;
(statearr_71817_72899[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__70805__auto__ = null;
var cljs$core$async$mult_$_state_machine__70805__auto____0 = (function (){
var statearr_71822 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71822[(0)] = cljs$core$async$mult_$_state_machine__70805__auto__);

(statearr_71822[(1)] = (1));

return statearr_71822;
});
var cljs$core$async$mult_$_state_machine__70805__auto____1 = (function (state_71723){
while(true){
var ret_value__70806__auto__ = (function (){try{while(true){
var result__70807__auto__ = switch__70804__auto__(state_71723);
if(cljs.core.keyword_identical_QMARK_(result__70807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70807__auto__;
}
break;
}
}catch (e71823){var ex__70808__auto__ = e71823;
var statearr_71824_72902 = state_71723;
(statearr_71824_72902[(2)] = ex__70808__auto__);


if(cljs.core.seq((state_71723[(4)]))){
var statearr_71828_72903 = state_71723;
(statearr_71828_72903[(1)] = cljs.core.first((state_71723[(4)])));

} else {
throw ex__70808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72904 = state_71723;
state_71723 = G__72904;
continue;
} else {
return ret_value__70806__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__70805__auto__ = function(state_71723){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__70805__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__70805__auto____1.call(this,state_71723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__70805__auto____0;
cljs$core$async$mult_$_state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__70805__auto____1;
return cljs$core$async$mult_$_state_machine__70805__auto__;
})()
})();
var state__70912__auto__ = (function (){var statearr_71829 = f__70911__auto__();
(statearr_71829[(6)] = c__70910__auto___72832);

return statearr_71829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70912__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__71834 = arguments.length;
switch (G__71834) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_72906 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_72906(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_72907 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_72907(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_72910 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_72910(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_72911 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_72911(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_72913 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_72913(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___72916 = arguments.length;
var i__5770__auto___72917 = (0);
while(true){
if((i__5770__auto___72917 < len__5769__auto___72916)){
args__5775__auto__.push((arguments[i__5770__auto___72917]));

var G__72918 = (i__5770__auto___72917 + (1));
i__5770__auto___72917 = G__72918;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__71846){
var map__71847 = p__71846;
var map__71847__$1 = cljs.core.__destructure_map(map__71847);
var opts = map__71847__$1;
var statearr_71848_72919 = state;
(statearr_71848_72919[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_71849_72920 = state;
(statearr_71849_72920[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_71850_72921 = state;
(statearr_71850_72921[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq71842){
var G__71843 = cljs.core.first(seq71842);
var seq71842__$1 = cljs.core.next(seq71842);
var G__71844 = cljs.core.first(seq71842__$1);
var seq71842__$2 = cljs.core.next(seq71842__$1);
var G__71845 = cljs.core.first(seq71842__$2);
var seq71842__$3 = cljs.core.next(seq71842__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71843,G__71844,G__71845,seq71842__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71851 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71851 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta71852){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta71852 = meta71852;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71853,meta71852__$1){
var self__ = this;
var _71853__$1 = this;
return (new cljs.core.async.t_cljs$core$async71851(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta71852__$1));
}));

(cljs.core.async.t_cljs$core$async71851.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71853){
var self__ = this;
var _71853__$1 = this;
return self__.meta71852;
}));

(cljs.core.async.t_cljs$core$async71851.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71851.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async71851.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71851.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async71851.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async71851.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async71851.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async71851.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async71851.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta71852","meta71852",1738012989,null)], null);
}));

(cljs.core.async.t_cljs$core$async71851.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71851.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71851");

(cljs.core.async.t_cljs$core$async71851.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async71851");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71851.
 */
cljs.core.async.__GT_t_cljs$core$async71851 = (function cljs$core$async$mix_$___GT_t_cljs$core$async71851(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta71852){
return (new cljs.core.async.t_cljs$core$async71851(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta71852));
});

}

return (new cljs.core.async.t_cljs$core$async71851(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__70910__auto___72932 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70911__auto__ = (function (){var switch__70804__auto__ = (function (state_71921){
var state_val_71922 = (state_71921[(1)]);
if((state_val_71922 === (7))){
var inst_71881 = (state_71921[(2)]);
var state_71921__$1 = state_71921;
if(cljs.core.truth_(inst_71881)){
var statearr_71923_72935 = state_71921__$1;
(statearr_71923_72935[(1)] = (8));

} else {
var statearr_71924_72936 = state_71921__$1;
(statearr_71924_72936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71922 === (20))){
var inst_71874 = (state_71921[(7)]);
var state_71921__$1 = state_71921;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71921__$1,(23),out,inst_71874);
} else {
if((state_val_71922 === (1))){
var inst_71857 = calc_state();
var inst_71858 = cljs.core.__destructure_map(inst_71857);
var inst_71859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71858,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_71860 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71858,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_71861 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71858,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_71862 = inst_71857;
var state_71921__$1 = (function (){var statearr_71925 = state_71921;
(statearr_71925[(8)] = inst_71861);

(statearr_71925[(9)] = inst_71862);

(statearr_71925[(10)] = inst_71860);

(statearr_71925[(11)] = inst_71859);

return statearr_71925;
})();
var statearr_71926_72938 = state_71921__$1;
(statearr_71926_72938[(2)] = null);

(statearr_71926_72938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71922 === (24))){
var inst_71865 = (state_71921[(12)]);
var inst_71862 = inst_71865;
var state_71921__$1 = (function (){var statearr_71927 = state_71921;
(statearr_71927[(9)] = inst_71862);

return statearr_71927;
})();
var statearr_71928_72939 = state_71921__$1;
(statearr_71928_72939[(2)] = null);

(statearr_71928_72939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71922 === (4))){
var inst_71874 = (state_71921[(7)]);
var inst_71876 = (state_71921[(13)]);
var inst_71873 = (state_71921[(2)]);
var inst_71874__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71873,(0),null);
var inst_71875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71873,(1),null);
var inst_71876__$1 = (inst_71874__$1 == null);
var state_71921__$1 = (function (){var statearr_71929 = state_71921;
(statearr_71929[(7)] = inst_71874__$1);

(statearr_71929[(13)] = inst_71876__$1);

(statearr_71929[(14)] = inst_71875);

return statearr_71929;
})();
if(cljs.core.truth_(inst_71876__$1)){
var statearr_71930_72940 = state_71921__$1;
(statearr_71930_72940[(1)] = (5));

} else {
var statearr_71931_72941 = state_71921__$1;
(statearr_71931_72941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71922 === (15))){
var inst_71895 = (state_71921[(15)]);
var inst_71866 = (state_71921[(16)]);
var inst_71895__$1 = cljs.core.empty_QMARK_(inst_71866);
var state_71921__$1 = (function (){var statearr_71932 = state_71921;
(statearr_71932[(15)] = inst_71895__$1);

return statearr_71932;
})();
if(inst_71895__$1){
var statearr_71933_72942 = state_71921__$1;
(statearr_71933_72942[(1)] = (17));

} else {
var statearr_71934_72943 = state_71921__$1;
(statearr_71934_72943[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71922 === (21))){
var inst_71865 = (state_71921[(12)]);
var inst_71862 = inst_71865;
var state_71921__$1 = (function (){var statearr_71935 = state_71921;
(statearr_71935[(9)] = inst_71862);

return statearr_71935;
})();
var statearr_71936_72944 = state_71921__$1;
(statearr_71936_72944[(2)] = null);

(statearr_71936_72944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71922 === (13))){
var inst_71888 = (state_71921[(2)]);
var inst_71889 = calc_state();
var inst_71862 = inst_71889;
var state_71921__$1 = (function (){var statearr_71937 = state_71921;
(statearr_71937[(17)] = inst_71888);

(statearr_71937[(9)] = inst_71862);

return statearr_71937;
})();
var statearr_71938_72945 = state_71921__$1;
(statearr_71938_72945[(2)] = null);

(statearr_71938_72945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71922 === (22))){
var inst_71915 = (state_71921[(2)]);
var state_71921__$1 = state_71921;
var statearr_71939_72947 = state_71921__$1;
(statearr_71939_72947[(2)] = inst_71915);

(statearr_71939_72947[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71922 === (6))){
var inst_71875 = (state_71921[(14)]);
var inst_71879 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71875,change);
var state_71921__$1 = state_71921;
var statearr_71940_72949 = state_71921__$1;
(statearr_71940_72949[(2)] = inst_71879);

(statearr_71940_72949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71922 === (25))){
var state_71921__$1 = state_71921;
var statearr_71941_72951 = state_71921__$1;
(statearr_71941_72951[(2)] = null);

(statearr_71941_72951[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71922 === (17))){
var inst_71875 = (state_71921[(14)]);
var inst_71867 = (state_71921[(18)]);
var inst_71897 = (inst_71867.cljs$core$IFn$_invoke$arity$1 ? inst_71867.cljs$core$IFn$_invoke$arity$1(inst_71875) : inst_71867.call(null,inst_71875));
var inst_71898 = cljs.core.not(inst_71897);
var state_71921__$1 = state_71921;
var statearr_71942_72952 = state_71921__$1;
(statearr_71942_72952[(2)] = inst_71898);

(statearr_71942_72952[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71922 === (3))){
var inst_71919 = (state_71921[(2)]);
var state_71921__$1 = state_71921;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71921__$1,inst_71919);
} else {
if((state_val_71922 === (12))){
var state_71921__$1 = state_71921;
var statearr_71943_72953 = state_71921__$1;
(statearr_71943_72953[(2)] = null);

(statearr_71943_72953[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71922 === (2))){
var inst_71865 = (state_71921[(12)]);
var inst_71862 = (state_71921[(9)]);
var inst_71865__$1 = cljs.core.__destructure_map(inst_71862);
var inst_71866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71865__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_71867 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71865__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_71868 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71865__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_71921__$1 = (function (){var statearr_71944 = state_71921;
(statearr_71944[(12)] = inst_71865__$1);

(statearr_71944[(18)] = inst_71867);

(statearr_71944[(16)] = inst_71866);

return statearr_71944;
})();
return cljs.core.async.ioc_alts_BANG_(state_71921__$1,(4),inst_71868);
} else {
if((state_val_71922 === (23))){
var inst_71906 = (state_71921[(2)]);
var state_71921__$1 = state_71921;
if(cljs.core.truth_(inst_71906)){
var statearr_71945_72958 = state_71921__$1;
(statearr_71945_72958[(1)] = (24));

} else {
var statearr_71946_72959 = state_71921__$1;
(statearr_71946_72959[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71922 === (19))){
var inst_71901 = (state_71921[(2)]);
var state_71921__$1 = state_71921;
var statearr_71947_72960 = state_71921__$1;
(statearr_71947_72960[(2)] = inst_71901);

(statearr_71947_72960[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71922 === (11))){
var inst_71875 = (state_71921[(14)]);
var inst_71885 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_71875);
var state_71921__$1 = state_71921;
var statearr_71948_72961 = state_71921__$1;
(statearr_71948_72961[(2)] = inst_71885);

(statearr_71948_72961[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71922 === (9))){
var inst_71892 = (state_71921[(19)]);
var inst_71875 = (state_71921[(14)]);
var inst_71866 = (state_71921[(16)]);
var inst_71892__$1 = (inst_71866.cljs$core$IFn$_invoke$arity$1 ? inst_71866.cljs$core$IFn$_invoke$arity$1(inst_71875) : inst_71866.call(null,inst_71875));
var state_71921__$1 = (function (){var statearr_71949 = state_71921;
(statearr_71949[(19)] = inst_71892__$1);

return statearr_71949;
})();
if(cljs.core.truth_(inst_71892__$1)){
var statearr_71950_72963 = state_71921__$1;
(statearr_71950_72963[(1)] = (14));

} else {
var statearr_71951_72964 = state_71921__$1;
(statearr_71951_72964[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71922 === (5))){
var inst_71876 = (state_71921[(13)]);
var state_71921__$1 = state_71921;
var statearr_71952_72965 = state_71921__$1;
(statearr_71952_72965[(2)] = inst_71876);

(statearr_71952_72965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71922 === (14))){
var inst_71892 = (state_71921[(19)]);
var state_71921__$1 = state_71921;
var statearr_71953_72966 = state_71921__$1;
(statearr_71953_72966[(2)] = inst_71892);

(statearr_71953_72966[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71922 === (26))){
var inst_71911 = (state_71921[(2)]);
var state_71921__$1 = state_71921;
var statearr_71954_72967 = state_71921__$1;
(statearr_71954_72967[(2)] = inst_71911);

(statearr_71954_72967[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71922 === (16))){
var inst_71903 = (state_71921[(2)]);
var state_71921__$1 = state_71921;
if(cljs.core.truth_(inst_71903)){
var statearr_71955_72968 = state_71921__$1;
(statearr_71955_72968[(1)] = (20));

} else {
var statearr_71956_72969 = state_71921__$1;
(statearr_71956_72969[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71922 === (10))){
var inst_71917 = (state_71921[(2)]);
var state_71921__$1 = state_71921;
var statearr_71958_72972 = state_71921__$1;
(statearr_71958_72972[(2)] = inst_71917);

(statearr_71958_72972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71922 === (18))){
var inst_71895 = (state_71921[(15)]);
var state_71921__$1 = state_71921;
var statearr_71959_72973 = state_71921__$1;
(statearr_71959_72973[(2)] = inst_71895);

(statearr_71959_72973[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71922 === (8))){
var inst_71874 = (state_71921[(7)]);
var inst_71883 = (inst_71874 == null);
var state_71921__$1 = state_71921;
if(cljs.core.truth_(inst_71883)){
var statearr_71960_72974 = state_71921__$1;
(statearr_71960_72974[(1)] = (11));

} else {
var statearr_71961_72975 = state_71921__$1;
(statearr_71961_72975[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__70805__auto__ = null;
var cljs$core$async$mix_$_state_machine__70805__auto____0 = (function (){
var statearr_71963 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71963[(0)] = cljs$core$async$mix_$_state_machine__70805__auto__);

(statearr_71963[(1)] = (1));

return statearr_71963;
});
var cljs$core$async$mix_$_state_machine__70805__auto____1 = (function (state_71921){
while(true){
var ret_value__70806__auto__ = (function (){try{while(true){
var result__70807__auto__ = switch__70804__auto__(state_71921);
if(cljs.core.keyword_identical_QMARK_(result__70807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70807__auto__;
}
break;
}
}catch (e71965){var ex__70808__auto__ = e71965;
var statearr_71966_72976 = state_71921;
(statearr_71966_72976[(2)] = ex__70808__auto__);


if(cljs.core.seq((state_71921[(4)]))){
var statearr_71967_72977 = state_71921;
(statearr_71967_72977[(1)] = cljs.core.first((state_71921[(4)])));

} else {
throw ex__70808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72978 = state_71921;
state_71921 = G__72978;
continue;
} else {
return ret_value__70806__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__70805__auto__ = function(state_71921){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__70805__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__70805__auto____1.call(this,state_71921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__70805__auto____0;
cljs$core$async$mix_$_state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__70805__auto____1;
return cljs$core$async$mix_$_state_machine__70805__auto__;
})()
})();
var state__70912__auto__ = (function (){var statearr_71968 = f__70911__auto__();
(statearr_71968[(6)] = c__70910__auto___72932);

return statearr_71968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70912__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_72979 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_72979(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_72983 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_72983(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_72984 = (function() {
var G__72985 = null;
var G__72985__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__72985__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__72985 = function(p,v){
switch(arguments.length){
case 1:
return G__72985__1.call(this,p);
case 2:
return G__72985__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__72985.cljs$core$IFn$_invoke$arity$1 = G__72985__1;
G__72985.cljs$core$IFn$_invoke$arity$2 = G__72985__2;
return G__72985;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__71974 = arguments.length;
switch (G__71974) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_72984(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_72984(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__71977 = arguments.length;
switch (G__71977) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__71975_SHARP_){
if(cljs.core.truth_((p1__71975_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__71975_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__71975_SHARP_.call(null,topic)))){
return p1__71975_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__71975_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71979 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71979 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta71980){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta71980 = meta71980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71981,meta71980__$1){
var self__ = this;
var _71981__$1 = this;
return (new cljs.core.async.t_cljs$core$async71979(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta71980__$1));
}));

(cljs.core.async.t_cljs$core$async71979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71981){
var self__ = this;
var _71981__$1 = this;
return self__.meta71980;
}));

(cljs.core.async.t_cljs$core$async71979.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71979.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async71979.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71979.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async71979.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async71979.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async71979.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async71979.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta71980","meta71980",-556262813,null)], null);
}));

(cljs.core.async.t_cljs$core$async71979.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71979.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71979");

(cljs.core.async.t_cljs$core$async71979.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async71979");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71979.
 */
cljs.core.async.__GT_t_cljs$core$async71979 = (function cljs$core$async$__GT_t_cljs$core$async71979(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta71980){
return (new cljs.core.async.t_cljs$core$async71979(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta71980));
});

}

return (new cljs.core.async.t_cljs$core$async71979(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__70910__auto___73014 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70911__auto__ = (function (){var switch__70804__auto__ = (function (state_72059){
var state_val_72060 = (state_72059[(1)]);
if((state_val_72060 === (7))){
var inst_72055 = (state_72059[(2)]);
var state_72059__$1 = state_72059;
var statearr_72061_73019 = state_72059__$1;
(statearr_72061_73019[(2)] = inst_72055);

(statearr_72061_73019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72060 === (20))){
var state_72059__$1 = state_72059;
var statearr_72062_73020 = state_72059__$1;
(statearr_72062_73020[(2)] = null);

(statearr_72062_73020[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72060 === (1))){
var state_72059__$1 = state_72059;
var statearr_72063_73021 = state_72059__$1;
(statearr_72063_73021[(2)] = null);

(statearr_72063_73021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72060 === (24))){
var inst_72038 = (state_72059[(7)]);
var inst_72047 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_72038);
var state_72059__$1 = state_72059;
var statearr_72064_73022 = state_72059__$1;
(statearr_72064_73022[(2)] = inst_72047);

(statearr_72064_73022[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72060 === (4))){
var inst_71987 = (state_72059[(8)]);
var inst_71987__$1 = (state_72059[(2)]);
var inst_71988 = (inst_71987__$1 == null);
var state_72059__$1 = (function (){var statearr_72065 = state_72059;
(statearr_72065[(8)] = inst_71987__$1);

return statearr_72065;
})();
if(cljs.core.truth_(inst_71988)){
var statearr_72066_73023 = state_72059__$1;
(statearr_72066_73023[(1)] = (5));

} else {
var statearr_72067_73025 = state_72059__$1;
(statearr_72067_73025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72060 === (15))){
var inst_72032 = (state_72059[(2)]);
var state_72059__$1 = state_72059;
var statearr_72068_73030 = state_72059__$1;
(statearr_72068_73030[(2)] = inst_72032);

(statearr_72068_73030[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72060 === (21))){
var inst_72052 = (state_72059[(2)]);
var state_72059__$1 = (function (){var statearr_72069 = state_72059;
(statearr_72069[(9)] = inst_72052);

return statearr_72069;
})();
var statearr_72070_73031 = state_72059__$1;
(statearr_72070_73031[(2)] = null);

(statearr_72070_73031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72060 === (13))){
var inst_72014 = (state_72059[(10)]);
var inst_72016 = cljs.core.chunked_seq_QMARK_(inst_72014);
var state_72059__$1 = state_72059;
if(inst_72016){
var statearr_72071_73033 = state_72059__$1;
(statearr_72071_73033[(1)] = (16));

} else {
var statearr_72072_73037 = state_72059__$1;
(statearr_72072_73037[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72060 === (22))){
var inst_72044 = (state_72059[(2)]);
var state_72059__$1 = state_72059;
if(cljs.core.truth_(inst_72044)){
var statearr_72073_73039 = state_72059__$1;
(statearr_72073_73039[(1)] = (23));

} else {
var statearr_72074_73041 = state_72059__$1;
(statearr_72074_73041[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72060 === (6))){
var inst_72040 = (state_72059[(11)]);
var inst_71987 = (state_72059[(8)]);
var inst_72038 = (state_72059[(7)]);
var inst_72038__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_71987) : topic_fn.call(null,inst_71987));
var inst_72039 = cljs.core.deref(mults);
var inst_72040__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72039,inst_72038__$1);
var state_72059__$1 = (function (){var statearr_72075 = state_72059;
(statearr_72075[(11)] = inst_72040__$1);

(statearr_72075[(7)] = inst_72038__$1);

return statearr_72075;
})();
if(cljs.core.truth_(inst_72040__$1)){
var statearr_72076_73047 = state_72059__$1;
(statearr_72076_73047[(1)] = (19));

} else {
var statearr_72077_73048 = state_72059__$1;
(statearr_72077_73048[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72060 === (25))){
var inst_72049 = (state_72059[(2)]);
var state_72059__$1 = state_72059;
var statearr_72078_73050 = state_72059__$1;
(statearr_72078_73050[(2)] = inst_72049);

(statearr_72078_73050[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72060 === (17))){
var inst_72014 = (state_72059[(10)]);
var inst_72023 = cljs.core.first(inst_72014);
var inst_72024 = cljs.core.async.muxch_STAR_(inst_72023);
var inst_72025 = cljs.core.async.close_BANG_(inst_72024);
var inst_72026 = cljs.core.next(inst_72014);
var inst_72000 = inst_72026;
var inst_72001 = null;
var inst_72002 = (0);
var inst_72003 = (0);
var state_72059__$1 = (function (){var statearr_72079 = state_72059;
(statearr_72079[(12)] = inst_72002);

(statearr_72079[(13)] = inst_72000);

(statearr_72079[(14)] = inst_72003);

(statearr_72079[(15)] = inst_72001);

(statearr_72079[(16)] = inst_72025);

return statearr_72079;
})();
var statearr_72080_73051 = state_72059__$1;
(statearr_72080_73051[(2)] = null);

(statearr_72080_73051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72060 === (3))){
var inst_72057 = (state_72059[(2)]);
var state_72059__$1 = state_72059;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72059__$1,inst_72057);
} else {
if((state_val_72060 === (12))){
var inst_72034 = (state_72059[(2)]);
var state_72059__$1 = state_72059;
var statearr_72081_73056 = state_72059__$1;
(statearr_72081_73056[(2)] = inst_72034);

(statearr_72081_73056[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72060 === (2))){
var state_72059__$1 = state_72059;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72059__$1,(4),ch);
} else {
if((state_val_72060 === (23))){
var state_72059__$1 = state_72059;
var statearr_72082_73057 = state_72059__$1;
(statearr_72082_73057[(2)] = null);

(statearr_72082_73057[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72060 === (19))){
var inst_72040 = (state_72059[(11)]);
var inst_71987 = (state_72059[(8)]);
var inst_72042 = cljs.core.async.muxch_STAR_(inst_72040);
var state_72059__$1 = state_72059;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72059__$1,(22),inst_72042,inst_71987);
} else {
if((state_val_72060 === (11))){
var inst_72000 = (state_72059[(13)]);
var inst_72014 = (state_72059[(10)]);
var inst_72014__$1 = cljs.core.seq(inst_72000);
var state_72059__$1 = (function (){var statearr_72083 = state_72059;
(statearr_72083[(10)] = inst_72014__$1);

return statearr_72083;
})();
if(inst_72014__$1){
var statearr_72084_73062 = state_72059__$1;
(statearr_72084_73062[(1)] = (13));

} else {
var statearr_72085_73063 = state_72059__$1;
(statearr_72085_73063[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72060 === (9))){
var inst_72036 = (state_72059[(2)]);
var state_72059__$1 = state_72059;
var statearr_72086_73064 = state_72059__$1;
(statearr_72086_73064[(2)] = inst_72036);

(statearr_72086_73064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72060 === (5))){
var inst_71997 = cljs.core.deref(mults);
var inst_71998 = cljs.core.vals(inst_71997);
var inst_71999 = cljs.core.seq(inst_71998);
var inst_72000 = inst_71999;
var inst_72001 = null;
var inst_72002 = (0);
var inst_72003 = (0);
var state_72059__$1 = (function (){var statearr_72087 = state_72059;
(statearr_72087[(12)] = inst_72002);

(statearr_72087[(13)] = inst_72000);

(statearr_72087[(14)] = inst_72003);

(statearr_72087[(15)] = inst_72001);

return statearr_72087;
})();
var statearr_72088_73066 = state_72059__$1;
(statearr_72088_73066[(2)] = null);

(statearr_72088_73066[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72060 === (14))){
var state_72059__$1 = state_72059;
var statearr_72092_73067 = state_72059__$1;
(statearr_72092_73067[(2)] = null);

(statearr_72092_73067[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72060 === (16))){
var inst_72014 = (state_72059[(10)]);
var inst_72018 = cljs.core.chunk_first(inst_72014);
var inst_72019 = cljs.core.chunk_rest(inst_72014);
var inst_72020 = cljs.core.count(inst_72018);
var inst_72000 = inst_72019;
var inst_72001 = inst_72018;
var inst_72002 = inst_72020;
var inst_72003 = (0);
var state_72059__$1 = (function (){var statearr_72093 = state_72059;
(statearr_72093[(12)] = inst_72002);

(statearr_72093[(13)] = inst_72000);

(statearr_72093[(14)] = inst_72003);

(statearr_72093[(15)] = inst_72001);

return statearr_72093;
})();
var statearr_72094_73071 = state_72059__$1;
(statearr_72094_73071[(2)] = null);

(statearr_72094_73071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72060 === (10))){
var inst_72002 = (state_72059[(12)]);
var inst_72000 = (state_72059[(13)]);
var inst_72003 = (state_72059[(14)]);
var inst_72001 = (state_72059[(15)]);
var inst_72008 = cljs.core._nth(inst_72001,inst_72003);
var inst_72009 = cljs.core.async.muxch_STAR_(inst_72008);
var inst_72010 = cljs.core.async.close_BANG_(inst_72009);
var inst_72011 = (inst_72003 + (1));
var tmp72089 = inst_72002;
var tmp72090 = inst_72000;
var tmp72091 = inst_72001;
var inst_72000__$1 = tmp72090;
var inst_72001__$1 = tmp72091;
var inst_72002__$1 = tmp72089;
var inst_72003__$1 = inst_72011;
var state_72059__$1 = (function (){var statearr_72096 = state_72059;
(statearr_72096[(12)] = inst_72002__$1);

(statearr_72096[(17)] = inst_72010);

(statearr_72096[(13)] = inst_72000__$1);

(statearr_72096[(14)] = inst_72003__$1);

(statearr_72096[(15)] = inst_72001__$1);

return statearr_72096;
})();
var statearr_72097_73072 = state_72059__$1;
(statearr_72097_73072[(2)] = null);

(statearr_72097_73072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72060 === (18))){
var inst_72029 = (state_72059[(2)]);
var state_72059__$1 = state_72059;
var statearr_72098_73073 = state_72059__$1;
(statearr_72098_73073[(2)] = inst_72029);

(statearr_72098_73073[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72060 === (8))){
var inst_72002 = (state_72059[(12)]);
var inst_72003 = (state_72059[(14)]);
var inst_72005 = (inst_72003 < inst_72002);
var inst_72006 = inst_72005;
var state_72059__$1 = state_72059;
if(cljs.core.truth_(inst_72006)){
var statearr_72099_73074 = state_72059__$1;
(statearr_72099_73074[(1)] = (10));

} else {
var statearr_72100_73075 = state_72059__$1;
(statearr_72100_73075[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__70805__auto__ = null;
var cljs$core$async$state_machine__70805__auto____0 = (function (){
var statearr_72105 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72105[(0)] = cljs$core$async$state_machine__70805__auto__);

(statearr_72105[(1)] = (1));

return statearr_72105;
});
var cljs$core$async$state_machine__70805__auto____1 = (function (state_72059){
while(true){
var ret_value__70806__auto__ = (function (){try{while(true){
var result__70807__auto__ = switch__70804__auto__(state_72059);
if(cljs.core.keyword_identical_QMARK_(result__70807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70807__auto__;
}
break;
}
}catch (e72106){var ex__70808__auto__ = e72106;
var statearr_72107_73076 = state_72059;
(statearr_72107_73076[(2)] = ex__70808__auto__);


if(cljs.core.seq((state_72059[(4)]))){
var statearr_72108_73077 = state_72059;
(statearr_72108_73077[(1)] = cljs.core.first((state_72059[(4)])));

} else {
throw ex__70808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73080 = state_72059;
state_72059 = G__73080;
continue;
} else {
return ret_value__70806__auto__;
}
break;
}
});
cljs$core$async$state_machine__70805__auto__ = function(state_72059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__70805__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__70805__auto____1.call(this,state_72059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__70805__auto____0;
cljs$core$async$state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__70805__auto____1;
return cljs$core$async$state_machine__70805__auto__;
})()
})();
var state__70912__auto__ = (function (){var statearr_72109 = f__70911__auto__();
(statearr_72109[(6)] = c__70910__auto___73014);

return statearr_72109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70912__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__72111 = arguments.length;
switch (G__72111) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__72113 = arguments.length;
switch (G__72113) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__72115 = arguments.length;
switch (G__72115) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__70910__auto___73093 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70911__auto__ = (function (){var switch__70804__auto__ = (function (state_72158){
var state_val_72159 = (state_72158[(1)]);
if((state_val_72159 === (7))){
var state_72158__$1 = state_72158;
var statearr_72160_73097 = state_72158__$1;
(statearr_72160_73097[(2)] = null);

(statearr_72160_73097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72159 === (1))){
var state_72158__$1 = state_72158;
var statearr_72161_73100 = state_72158__$1;
(statearr_72161_73100[(2)] = null);

(statearr_72161_73100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72159 === (4))){
var inst_72118 = (state_72158[(7)]);
var inst_72119 = (state_72158[(8)]);
var inst_72121 = (inst_72119 < inst_72118);
var state_72158__$1 = state_72158;
if(cljs.core.truth_(inst_72121)){
var statearr_72162_73101 = state_72158__$1;
(statearr_72162_73101[(1)] = (6));

} else {
var statearr_72163_73102 = state_72158__$1;
(statearr_72163_73102[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72159 === (15))){
var inst_72144 = (state_72158[(9)]);
var inst_72149 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_72144);
var state_72158__$1 = state_72158;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72158__$1,(17),out,inst_72149);
} else {
if((state_val_72159 === (13))){
var inst_72144 = (state_72158[(9)]);
var inst_72144__$1 = (state_72158[(2)]);
var inst_72145 = cljs.core.some(cljs.core.nil_QMARK_,inst_72144__$1);
var state_72158__$1 = (function (){var statearr_72164 = state_72158;
(statearr_72164[(9)] = inst_72144__$1);

return statearr_72164;
})();
if(cljs.core.truth_(inst_72145)){
var statearr_72165_73106 = state_72158__$1;
(statearr_72165_73106[(1)] = (14));

} else {
var statearr_72166_73107 = state_72158__$1;
(statearr_72166_73107[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72159 === (6))){
var state_72158__$1 = state_72158;
var statearr_72167_73109 = state_72158__$1;
(statearr_72167_73109[(2)] = null);

(statearr_72167_73109[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72159 === (17))){
var inst_72151 = (state_72158[(2)]);
var state_72158__$1 = (function (){var statearr_72169 = state_72158;
(statearr_72169[(10)] = inst_72151);

return statearr_72169;
})();
var statearr_72170_73110 = state_72158__$1;
(statearr_72170_73110[(2)] = null);

(statearr_72170_73110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72159 === (3))){
var inst_72156 = (state_72158[(2)]);
var state_72158__$1 = state_72158;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72158__$1,inst_72156);
} else {
if((state_val_72159 === (12))){
var _ = (function (){var statearr_72171 = state_72158;
(statearr_72171[(4)] = cljs.core.rest((state_72158[(4)])));

return statearr_72171;
})();
var state_72158__$1 = state_72158;
var ex72168 = (state_72158__$1[(2)]);
var statearr_72172_73111 = state_72158__$1;
(statearr_72172_73111[(5)] = ex72168);


if((ex72168 instanceof Object)){
var statearr_72173_73112 = state_72158__$1;
(statearr_72173_73112[(1)] = (11));

(statearr_72173_73112[(5)] = null);

} else {
throw ex72168;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72159 === (2))){
var inst_72117 = cljs.core.reset_BANG_(dctr,cnt);
var inst_72118 = cnt;
var inst_72119 = (0);
var state_72158__$1 = (function (){var statearr_72174 = state_72158;
(statearr_72174[(7)] = inst_72118);

(statearr_72174[(11)] = inst_72117);

(statearr_72174[(8)] = inst_72119);

return statearr_72174;
})();
var statearr_72175_73113 = state_72158__$1;
(statearr_72175_73113[(2)] = null);

(statearr_72175_73113[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72159 === (11))){
var inst_72123 = (state_72158[(2)]);
var inst_72124 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_72158__$1 = (function (){var statearr_72176 = state_72158;
(statearr_72176[(12)] = inst_72123);

return statearr_72176;
})();
var statearr_72177_73114 = state_72158__$1;
(statearr_72177_73114[(2)] = inst_72124);

(statearr_72177_73114[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72159 === (9))){
var inst_72119 = (state_72158[(8)]);
var _ = (function (){var statearr_72178 = state_72158;
(statearr_72178[(4)] = cljs.core.cons((12),(state_72158[(4)])));

return statearr_72178;
})();
var inst_72130 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_72119) : chs__$1.call(null,inst_72119));
var inst_72131 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_72119) : done.call(null,inst_72119));
var inst_72132 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_72130,inst_72131);
var ___$1 = (function (){var statearr_72179 = state_72158;
(statearr_72179[(4)] = cljs.core.rest((state_72158[(4)])));

return statearr_72179;
})();
var state_72158__$1 = state_72158;
var statearr_72180_73115 = state_72158__$1;
(statearr_72180_73115[(2)] = inst_72132);

(statearr_72180_73115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72159 === (5))){
var inst_72142 = (state_72158[(2)]);
var state_72158__$1 = (function (){var statearr_72181 = state_72158;
(statearr_72181[(13)] = inst_72142);

return statearr_72181;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72158__$1,(13),dchan);
} else {
if((state_val_72159 === (14))){
var inst_72147 = cljs.core.async.close_BANG_(out);
var state_72158__$1 = state_72158;
var statearr_72182_73117 = state_72158__$1;
(statearr_72182_73117[(2)] = inst_72147);

(statearr_72182_73117[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72159 === (16))){
var inst_72154 = (state_72158[(2)]);
var state_72158__$1 = state_72158;
var statearr_72183_73118 = state_72158__$1;
(statearr_72183_73118[(2)] = inst_72154);

(statearr_72183_73118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72159 === (10))){
var inst_72119 = (state_72158[(8)]);
var inst_72135 = (state_72158[(2)]);
var inst_72136 = (inst_72119 + (1));
var inst_72119__$1 = inst_72136;
var state_72158__$1 = (function (){var statearr_72184 = state_72158;
(statearr_72184[(14)] = inst_72135);

(statearr_72184[(8)] = inst_72119__$1);

return statearr_72184;
})();
var statearr_72185_73122 = state_72158__$1;
(statearr_72185_73122[(2)] = null);

(statearr_72185_73122[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72159 === (8))){
var inst_72140 = (state_72158[(2)]);
var state_72158__$1 = state_72158;
var statearr_72186_73124 = state_72158__$1;
(statearr_72186_73124[(2)] = inst_72140);

(statearr_72186_73124[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__70805__auto__ = null;
var cljs$core$async$state_machine__70805__auto____0 = (function (){
var statearr_72187 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72187[(0)] = cljs$core$async$state_machine__70805__auto__);

(statearr_72187[(1)] = (1));

return statearr_72187;
});
var cljs$core$async$state_machine__70805__auto____1 = (function (state_72158){
while(true){
var ret_value__70806__auto__ = (function (){try{while(true){
var result__70807__auto__ = switch__70804__auto__(state_72158);
if(cljs.core.keyword_identical_QMARK_(result__70807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70807__auto__;
}
break;
}
}catch (e72188){var ex__70808__auto__ = e72188;
var statearr_72189_73125 = state_72158;
(statearr_72189_73125[(2)] = ex__70808__auto__);


if(cljs.core.seq((state_72158[(4)]))){
var statearr_72190_73126 = state_72158;
(statearr_72190_73126[(1)] = cljs.core.first((state_72158[(4)])));

} else {
throw ex__70808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73127 = state_72158;
state_72158 = G__73127;
continue;
} else {
return ret_value__70806__auto__;
}
break;
}
});
cljs$core$async$state_machine__70805__auto__ = function(state_72158){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__70805__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__70805__auto____1.call(this,state_72158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__70805__auto____0;
cljs$core$async$state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__70805__auto____1;
return cljs$core$async$state_machine__70805__auto__;
})()
})();
var state__70912__auto__ = (function (){var statearr_72191 = f__70911__auto__();
(statearr_72191[(6)] = c__70910__auto___73093);

return statearr_72191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70912__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__72194 = arguments.length;
switch (G__72194) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__70910__auto___73133 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70911__auto__ = (function (){var switch__70804__auto__ = (function (state_72226){
var state_val_72227 = (state_72226[(1)]);
if((state_val_72227 === (7))){
var inst_72205 = (state_72226[(7)]);
var inst_72206 = (state_72226[(8)]);
var inst_72205__$1 = (state_72226[(2)]);
var inst_72206__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72205__$1,(0),null);
var inst_72207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72205__$1,(1),null);
var inst_72208 = (inst_72206__$1 == null);
var state_72226__$1 = (function (){var statearr_72228 = state_72226;
(statearr_72228[(9)] = inst_72207);

(statearr_72228[(7)] = inst_72205__$1);

(statearr_72228[(8)] = inst_72206__$1);

return statearr_72228;
})();
if(cljs.core.truth_(inst_72208)){
var statearr_72229_73137 = state_72226__$1;
(statearr_72229_73137[(1)] = (8));

} else {
var statearr_72230_73138 = state_72226__$1;
(statearr_72230_73138[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72227 === (1))){
var inst_72195 = cljs.core.vec(chs);
var inst_72196 = inst_72195;
var state_72226__$1 = (function (){var statearr_72231 = state_72226;
(statearr_72231[(10)] = inst_72196);

return statearr_72231;
})();
var statearr_72232_73139 = state_72226__$1;
(statearr_72232_73139[(2)] = null);

(statearr_72232_73139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72227 === (4))){
var inst_72196 = (state_72226[(10)]);
var state_72226__$1 = state_72226;
return cljs.core.async.ioc_alts_BANG_(state_72226__$1,(7),inst_72196);
} else {
if((state_val_72227 === (6))){
var inst_72222 = (state_72226[(2)]);
var state_72226__$1 = state_72226;
var statearr_72233_73140 = state_72226__$1;
(statearr_72233_73140[(2)] = inst_72222);

(statearr_72233_73140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72227 === (3))){
var inst_72224 = (state_72226[(2)]);
var state_72226__$1 = state_72226;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72226__$1,inst_72224);
} else {
if((state_val_72227 === (2))){
var inst_72196 = (state_72226[(10)]);
var inst_72198 = cljs.core.count(inst_72196);
var inst_72199 = (inst_72198 > (0));
var state_72226__$1 = state_72226;
if(cljs.core.truth_(inst_72199)){
var statearr_72235_73142 = state_72226__$1;
(statearr_72235_73142[(1)] = (4));

} else {
var statearr_72236_73144 = state_72226__$1;
(statearr_72236_73144[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72227 === (11))){
var inst_72196 = (state_72226[(10)]);
var inst_72215 = (state_72226[(2)]);
var tmp72234 = inst_72196;
var inst_72196__$1 = tmp72234;
var state_72226__$1 = (function (){var statearr_72237 = state_72226;
(statearr_72237[(11)] = inst_72215);

(statearr_72237[(10)] = inst_72196__$1);

return statearr_72237;
})();
var statearr_72238_73146 = state_72226__$1;
(statearr_72238_73146[(2)] = null);

(statearr_72238_73146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72227 === (9))){
var inst_72206 = (state_72226[(8)]);
var state_72226__$1 = state_72226;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72226__$1,(11),out,inst_72206);
} else {
if((state_val_72227 === (5))){
var inst_72220 = cljs.core.async.close_BANG_(out);
var state_72226__$1 = state_72226;
var statearr_72239_73150 = state_72226__$1;
(statearr_72239_73150[(2)] = inst_72220);

(statearr_72239_73150[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72227 === (10))){
var inst_72218 = (state_72226[(2)]);
var state_72226__$1 = state_72226;
var statearr_72240_73151 = state_72226__$1;
(statearr_72240_73151[(2)] = inst_72218);

(statearr_72240_73151[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72227 === (8))){
var inst_72207 = (state_72226[(9)]);
var inst_72205 = (state_72226[(7)]);
var inst_72196 = (state_72226[(10)]);
var inst_72206 = (state_72226[(8)]);
var inst_72210 = (function (){var cs = inst_72196;
var vec__72201 = inst_72205;
var v = inst_72206;
var c = inst_72207;
return (function (p1__72192_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__72192_SHARP_);
});
})();
var inst_72211 = cljs.core.filterv(inst_72210,inst_72196);
var inst_72196__$1 = inst_72211;
var state_72226__$1 = (function (){var statearr_72241 = state_72226;
(statearr_72241[(10)] = inst_72196__$1);

return statearr_72241;
})();
var statearr_72242_73152 = state_72226__$1;
(statearr_72242_73152[(2)] = null);

(statearr_72242_73152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__70805__auto__ = null;
var cljs$core$async$state_machine__70805__auto____0 = (function (){
var statearr_72243 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72243[(0)] = cljs$core$async$state_machine__70805__auto__);

(statearr_72243[(1)] = (1));

return statearr_72243;
});
var cljs$core$async$state_machine__70805__auto____1 = (function (state_72226){
while(true){
var ret_value__70806__auto__ = (function (){try{while(true){
var result__70807__auto__ = switch__70804__auto__(state_72226);
if(cljs.core.keyword_identical_QMARK_(result__70807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70807__auto__;
}
break;
}
}catch (e72244){var ex__70808__auto__ = e72244;
var statearr_72245_73153 = state_72226;
(statearr_72245_73153[(2)] = ex__70808__auto__);


if(cljs.core.seq((state_72226[(4)]))){
var statearr_72246_73154 = state_72226;
(statearr_72246_73154[(1)] = cljs.core.first((state_72226[(4)])));

} else {
throw ex__70808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73155 = state_72226;
state_72226 = G__73155;
continue;
} else {
return ret_value__70806__auto__;
}
break;
}
});
cljs$core$async$state_machine__70805__auto__ = function(state_72226){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__70805__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__70805__auto____1.call(this,state_72226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__70805__auto____0;
cljs$core$async$state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__70805__auto____1;
return cljs$core$async$state_machine__70805__auto__;
})()
})();
var state__70912__auto__ = (function (){var statearr_72247 = f__70911__auto__();
(statearr_72247[(6)] = c__70910__auto___73133);

return statearr_72247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70912__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__72249 = arguments.length;
switch (G__72249) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__70910__auto___73166 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70911__auto__ = (function (){var switch__70804__auto__ = (function (state_72273){
var state_val_72274 = (state_72273[(1)]);
if((state_val_72274 === (7))){
var inst_72255 = (state_72273[(7)]);
var inst_72255__$1 = (state_72273[(2)]);
var inst_72256 = (inst_72255__$1 == null);
var inst_72257 = cljs.core.not(inst_72256);
var state_72273__$1 = (function (){var statearr_72275 = state_72273;
(statearr_72275[(7)] = inst_72255__$1);

return statearr_72275;
})();
if(inst_72257){
var statearr_72276_73168 = state_72273__$1;
(statearr_72276_73168[(1)] = (8));

} else {
var statearr_72277_73169 = state_72273__$1;
(statearr_72277_73169[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72274 === (1))){
var inst_72250 = (0);
var state_72273__$1 = (function (){var statearr_72278 = state_72273;
(statearr_72278[(8)] = inst_72250);

return statearr_72278;
})();
var statearr_72279_73174 = state_72273__$1;
(statearr_72279_73174[(2)] = null);

(statearr_72279_73174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72274 === (4))){
var state_72273__$1 = state_72273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72273__$1,(7),ch);
} else {
if((state_val_72274 === (6))){
var inst_72268 = (state_72273[(2)]);
var state_72273__$1 = state_72273;
var statearr_72280_73179 = state_72273__$1;
(statearr_72280_73179[(2)] = inst_72268);

(statearr_72280_73179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72274 === (3))){
var inst_72270 = (state_72273[(2)]);
var inst_72271 = cljs.core.async.close_BANG_(out);
var state_72273__$1 = (function (){var statearr_72281 = state_72273;
(statearr_72281[(9)] = inst_72270);

return statearr_72281;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_72273__$1,inst_72271);
} else {
if((state_val_72274 === (2))){
var inst_72250 = (state_72273[(8)]);
var inst_72252 = (inst_72250 < n);
var state_72273__$1 = state_72273;
if(cljs.core.truth_(inst_72252)){
var statearr_72282_73192 = state_72273__$1;
(statearr_72282_73192[(1)] = (4));

} else {
var statearr_72283_73194 = state_72273__$1;
(statearr_72283_73194[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72274 === (11))){
var inst_72250 = (state_72273[(8)]);
var inst_72260 = (state_72273[(2)]);
var inst_72261 = (inst_72250 + (1));
var inst_72250__$1 = inst_72261;
var state_72273__$1 = (function (){var statearr_72284 = state_72273;
(statearr_72284[(10)] = inst_72260);

(statearr_72284[(8)] = inst_72250__$1);

return statearr_72284;
})();
var statearr_72285_73215 = state_72273__$1;
(statearr_72285_73215[(2)] = null);

(statearr_72285_73215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72274 === (9))){
var state_72273__$1 = state_72273;
var statearr_72286_73218 = state_72273__$1;
(statearr_72286_73218[(2)] = null);

(statearr_72286_73218[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72274 === (5))){
var state_72273__$1 = state_72273;
var statearr_72287_73219 = state_72273__$1;
(statearr_72287_73219[(2)] = null);

(statearr_72287_73219[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72274 === (10))){
var inst_72265 = (state_72273[(2)]);
var state_72273__$1 = state_72273;
var statearr_72288_73220 = state_72273__$1;
(statearr_72288_73220[(2)] = inst_72265);

(statearr_72288_73220[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72274 === (8))){
var inst_72255 = (state_72273[(7)]);
var state_72273__$1 = state_72273;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72273__$1,(11),out,inst_72255);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__70805__auto__ = null;
var cljs$core$async$state_machine__70805__auto____0 = (function (){
var statearr_72289 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_72289[(0)] = cljs$core$async$state_machine__70805__auto__);

(statearr_72289[(1)] = (1));

return statearr_72289;
});
var cljs$core$async$state_machine__70805__auto____1 = (function (state_72273){
while(true){
var ret_value__70806__auto__ = (function (){try{while(true){
var result__70807__auto__ = switch__70804__auto__(state_72273);
if(cljs.core.keyword_identical_QMARK_(result__70807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70807__auto__;
}
break;
}
}catch (e72290){var ex__70808__auto__ = e72290;
var statearr_72291_73224 = state_72273;
(statearr_72291_73224[(2)] = ex__70808__auto__);


if(cljs.core.seq((state_72273[(4)]))){
var statearr_72292_73225 = state_72273;
(statearr_72292_73225[(1)] = cljs.core.first((state_72273[(4)])));

} else {
throw ex__70808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73226 = state_72273;
state_72273 = G__73226;
continue;
} else {
return ret_value__70806__auto__;
}
break;
}
});
cljs$core$async$state_machine__70805__auto__ = function(state_72273){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__70805__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__70805__auto____1.call(this,state_72273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__70805__auto____0;
cljs$core$async$state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__70805__auto____1;
return cljs$core$async$state_machine__70805__auto__;
})()
})();
var state__70912__auto__ = (function (){var statearr_72293 = f__70911__auto__();
(statearr_72293[(6)] = c__70910__auto___73166);

return statearr_72293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70912__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async72295 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async72295 = (function (f,ch,meta72296){
this.f = f;
this.ch = ch;
this.meta72296 = meta72296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async72295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72297,meta72296__$1){
var self__ = this;
var _72297__$1 = this;
return (new cljs.core.async.t_cljs$core$async72295(self__.f,self__.ch,meta72296__$1));
}));

(cljs.core.async.t_cljs$core$async72295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72297){
var self__ = this;
var _72297__$1 = this;
return self__.meta72296;
}));

(cljs.core.async.t_cljs$core$async72295.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72295.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async72295.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async72295.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72295.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async72298 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async72298 = (function (f,ch,meta72296,_,fn1,meta72299){
this.f = f;
this.ch = ch;
this.meta72296 = meta72296;
this._ = _;
this.fn1 = fn1;
this.meta72299 = meta72299;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async72298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72300,meta72299__$1){
var self__ = this;
var _72300__$1 = this;
return (new cljs.core.async.t_cljs$core$async72298(self__.f,self__.ch,self__.meta72296,self__._,self__.fn1,meta72299__$1));
}));

(cljs.core.async.t_cljs$core$async72298.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72300){
var self__ = this;
var _72300__$1 = this;
return self__.meta72299;
}));

(cljs.core.async.t_cljs$core$async72298.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72298.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async72298.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async72298.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__72294_SHARP_){
var G__72301 = (((p1__72294_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__72294_SHARP_) : self__.f.call(null,p1__72294_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__72301) : f1.call(null,G__72301));
});
}));

(cljs.core.async.t_cljs$core$async72298.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta72296","meta72296",339005331,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async72295","cljs.core.async/t_cljs$core$async72295",1451520202,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta72299","meta72299",1349469990,null)], null);
}));

(cljs.core.async.t_cljs$core$async72298.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async72298.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async72298");

(cljs.core.async.t_cljs$core$async72298.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async72298");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async72298.
 */
cljs.core.async.__GT_t_cljs$core$async72298 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async72298(f__$1,ch__$1,meta72296__$1,___$2,fn1__$1,meta72299){
return (new cljs.core.async.t_cljs$core$async72298(f__$1,ch__$1,meta72296__$1,___$2,fn1__$1,meta72299));
});

}

return (new cljs.core.async.t_cljs$core$async72298(self__.f,self__.ch,self__.meta72296,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__72302 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__72302) : self__.f.call(null,G__72302));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async72295.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72295.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async72295.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta72296","meta72296",339005331,null)], null);
}));

(cljs.core.async.t_cljs$core$async72295.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async72295.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async72295");

(cljs.core.async.t_cljs$core$async72295.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async72295");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async72295.
 */
cljs.core.async.__GT_t_cljs$core$async72295 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async72295(f__$1,ch__$1,meta72296){
return (new cljs.core.async.t_cljs$core$async72295(f__$1,ch__$1,meta72296));
});

}

return (new cljs.core.async.t_cljs$core$async72295(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async72303 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async72303 = (function (f,ch,meta72304){
this.f = f;
this.ch = ch;
this.meta72304 = meta72304;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async72303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72305,meta72304__$1){
var self__ = this;
var _72305__$1 = this;
return (new cljs.core.async.t_cljs$core$async72303(self__.f,self__.ch,meta72304__$1));
}));

(cljs.core.async.t_cljs$core$async72303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72305){
var self__ = this;
var _72305__$1 = this;
return self__.meta72304;
}));

(cljs.core.async.t_cljs$core$async72303.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72303.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async72303.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72303.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async72303.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72303.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async72303.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta72304","meta72304",237180643,null)], null);
}));

(cljs.core.async.t_cljs$core$async72303.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async72303.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async72303");

(cljs.core.async.t_cljs$core$async72303.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async72303");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async72303.
 */
cljs.core.async.__GT_t_cljs$core$async72303 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async72303(f__$1,ch__$1,meta72304){
return (new cljs.core.async.t_cljs$core$async72303(f__$1,ch__$1,meta72304));
});

}

return (new cljs.core.async.t_cljs$core$async72303(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async72306 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async72306 = (function (p,ch,meta72307){
this.p = p;
this.ch = ch;
this.meta72307 = meta72307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async72306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72308,meta72307__$1){
var self__ = this;
var _72308__$1 = this;
return (new cljs.core.async.t_cljs$core$async72306(self__.p,self__.ch,meta72307__$1));
}));

(cljs.core.async.t_cljs$core$async72306.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72308){
var self__ = this;
var _72308__$1 = this;
return self__.meta72307;
}));

(cljs.core.async.t_cljs$core$async72306.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72306.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async72306.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async72306.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72306.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async72306.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72306.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async72306.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta72307","meta72307",-2016398416,null)], null);
}));

(cljs.core.async.t_cljs$core$async72306.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async72306.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async72306");

(cljs.core.async.t_cljs$core$async72306.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async72306");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async72306.
 */
cljs.core.async.__GT_t_cljs$core$async72306 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async72306(p__$1,ch__$1,meta72307){
return (new cljs.core.async.t_cljs$core$async72306(p__$1,ch__$1,meta72307));
});

}

return (new cljs.core.async.t_cljs$core$async72306(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__72313 = arguments.length;
switch (G__72313) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__70910__auto___73238 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70911__auto__ = (function (){var switch__70804__auto__ = (function (state_72334){
var state_val_72335 = (state_72334[(1)]);
if((state_val_72335 === (7))){
var inst_72330 = (state_72334[(2)]);
var state_72334__$1 = state_72334;
var statearr_72337_73240 = state_72334__$1;
(statearr_72337_73240[(2)] = inst_72330);

(statearr_72337_73240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72335 === (1))){
var state_72334__$1 = state_72334;
var statearr_72338_73241 = state_72334__$1;
(statearr_72338_73241[(2)] = null);

(statearr_72338_73241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72335 === (4))){
var inst_72316 = (state_72334[(7)]);
var inst_72316__$1 = (state_72334[(2)]);
var inst_72317 = (inst_72316__$1 == null);
var state_72334__$1 = (function (){var statearr_72339 = state_72334;
(statearr_72339[(7)] = inst_72316__$1);

return statearr_72339;
})();
if(cljs.core.truth_(inst_72317)){
var statearr_72340_73243 = state_72334__$1;
(statearr_72340_73243[(1)] = (5));

} else {
var statearr_72341_73244 = state_72334__$1;
(statearr_72341_73244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72335 === (6))){
var inst_72316 = (state_72334[(7)]);
var inst_72321 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_72316) : p.call(null,inst_72316));
var state_72334__$1 = state_72334;
if(cljs.core.truth_(inst_72321)){
var statearr_72342_73246 = state_72334__$1;
(statearr_72342_73246[(1)] = (8));

} else {
var statearr_72343_73247 = state_72334__$1;
(statearr_72343_73247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72335 === (3))){
var inst_72332 = (state_72334[(2)]);
var state_72334__$1 = state_72334;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72334__$1,inst_72332);
} else {
if((state_val_72335 === (2))){
var state_72334__$1 = state_72334;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72334__$1,(4),ch);
} else {
if((state_val_72335 === (11))){
var inst_72324 = (state_72334[(2)]);
var state_72334__$1 = state_72334;
var statearr_72344_73249 = state_72334__$1;
(statearr_72344_73249[(2)] = inst_72324);

(statearr_72344_73249[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72335 === (9))){
var state_72334__$1 = state_72334;
var statearr_72345_73251 = state_72334__$1;
(statearr_72345_73251[(2)] = null);

(statearr_72345_73251[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72335 === (5))){
var inst_72319 = cljs.core.async.close_BANG_(out);
var state_72334__$1 = state_72334;
var statearr_72346_73252 = state_72334__$1;
(statearr_72346_73252[(2)] = inst_72319);

(statearr_72346_73252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72335 === (10))){
var inst_72327 = (state_72334[(2)]);
var state_72334__$1 = (function (){var statearr_72347 = state_72334;
(statearr_72347[(8)] = inst_72327);

return statearr_72347;
})();
var statearr_72348_73253 = state_72334__$1;
(statearr_72348_73253[(2)] = null);

(statearr_72348_73253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72335 === (8))){
var inst_72316 = (state_72334[(7)]);
var state_72334__$1 = state_72334;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72334__$1,(11),out,inst_72316);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__70805__auto__ = null;
var cljs$core$async$state_machine__70805__auto____0 = (function (){
var statearr_72349 = [null,null,null,null,null,null,null,null,null];
(statearr_72349[(0)] = cljs$core$async$state_machine__70805__auto__);

(statearr_72349[(1)] = (1));

return statearr_72349;
});
var cljs$core$async$state_machine__70805__auto____1 = (function (state_72334){
while(true){
var ret_value__70806__auto__ = (function (){try{while(true){
var result__70807__auto__ = switch__70804__auto__(state_72334);
if(cljs.core.keyword_identical_QMARK_(result__70807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70807__auto__;
}
break;
}
}catch (e72350){var ex__70808__auto__ = e72350;
var statearr_72351_73260 = state_72334;
(statearr_72351_73260[(2)] = ex__70808__auto__);


if(cljs.core.seq((state_72334[(4)]))){
var statearr_72352_73261 = state_72334;
(statearr_72352_73261[(1)] = cljs.core.first((state_72334[(4)])));

} else {
throw ex__70808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73262 = state_72334;
state_72334 = G__73262;
continue;
} else {
return ret_value__70806__auto__;
}
break;
}
});
cljs$core$async$state_machine__70805__auto__ = function(state_72334){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__70805__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__70805__auto____1.call(this,state_72334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__70805__auto____0;
cljs$core$async$state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__70805__auto____1;
return cljs$core$async$state_machine__70805__auto__;
})()
})();
var state__70912__auto__ = (function (){var statearr_72353 = f__70911__auto__();
(statearr_72353[(6)] = c__70910__auto___73238);

return statearr_72353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70912__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__72355 = arguments.length;
switch (G__72355) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__70910__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70911__auto__ = (function (){var switch__70804__auto__ = (function (state_72417){
var state_val_72418 = (state_72417[(1)]);
if((state_val_72418 === (7))){
var inst_72413 = (state_72417[(2)]);
var state_72417__$1 = state_72417;
var statearr_72419_73268 = state_72417__$1;
(statearr_72419_73268[(2)] = inst_72413);

(statearr_72419_73268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72418 === (20))){
var inst_72383 = (state_72417[(7)]);
var inst_72394 = (state_72417[(2)]);
var inst_72395 = cljs.core.next(inst_72383);
var inst_72369 = inst_72395;
var inst_72370 = null;
var inst_72371 = (0);
var inst_72372 = (0);
var state_72417__$1 = (function (){var statearr_72420 = state_72417;
(statearr_72420[(8)] = inst_72394);

(statearr_72420[(9)] = inst_72369);

(statearr_72420[(10)] = inst_72372);

(statearr_72420[(11)] = inst_72371);

(statearr_72420[(12)] = inst_72370);

return statearr_72420;
})();
var statearr_72421_73270 = state_72417__$1;
(statearr_72421_73270[(2)] = null);

(statearr_72421_73270[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72418 === (1))){
var state_72417__$1 = state_72417;
var statearr_72422_73271 = state_72417__$1;
(statearr_72422_73271[(2)] = null);

(statearr_72422_73271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72418 === (4))){
var inst_72358 = (state_72417[(13)]);
var inst_72358__$1 = (state_72417[(2)]);
var inst_72359 = (inst_72358__$1 == null);
var state_72417__$1 = (function (){var statearr_72423 = state_72417;
(statearr_72423[(13)] = inst_72358__$1);

return statearr_72423;
})();
if(cljs.core.truth_(inst_72359)){
var statearr_72424_73272 = state_72417__$1;
(statearr_72424_73272[(1)] = (5));

} else {
var statearr_72425_73273 = state_72417__$1;
(statearr_72425_73273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72418 === (15))){
var state_72417__$1 = state_72417;
var statearr_72429_73274 = state_72417__$1;
(statearr_72429_73274[(2)] = null);

(statearr_72429_73274[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72418 === (21))){
var state_72417__$1 = state_72417;
var statearr_72430_73275 = state_72417__$1;
(statearr_72430_73275[(2)] = null);

(statearr_72430_73275[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72418 === (13))){
var inst_72369 = (state_72417[(9)]);
var inst_72372 = (state_72417[(10)]);
var inst_72371 = (state_72417[(11)]);
var inst_72370 = (state_72417[(12)]);
var inst_72379 = (state_72417[(2)]);
var inst_72380 = (inst_72372 + (1));
var tmp72426 = inst_72369;
var tmp72427 = inst_72371;
var tmp72428 = inst_72370;
var inst_72369__$1 = tmp72426;
var inst_72370__$1 = tmp72428;
var inst_72371__$1 = tmp72427;
var inst_72372__$1 = inst_72380;
var state_72417__$1 = (function (){var statearr_72431 = state_72417;
(statearr_72431[(14)] = inst_72379);

(statearr_72431[(9)] = inst_72369__$1);

(statearr_72431[(10)] = inst_72372__$1);

(statearr_72431[(11)] = inst_72371__$1);

(statearr_72431[(12)] = inst_72370__$1);

return statearr_72431;
})();
var statearr_72432_73276 = state_72417__$1;
(statearr_72432_73276[(2)] = null);

(statearr_72432_73276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72418 === (22))){
var state_72417__$1 = state_72417;
var statearr_72433_73277 = state_72417__$1;
(statearr_72433_73277[(2)] = null);

(statearr_72433_73277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72418 === (6))){
var inst_72358 = (state_72417[(13)]);
var inst_72367 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_72358) : f.call(null,inst_72358));
var inst_72368 = cljs.core.seq(inst_72367);
var inst_72369 = inst_72368;
var inst_72370 = null;
var inst_72371 = (0);
var inst_72372 = (0);
var state_72417__$1 = (function (){var statearr_72434 = state_72417;
(statearr_72434[(9)] = inst_72369);

(statearr_72434[(10)] = inst_72372);

(statearr_72434[(11)] = inst_72371);

(statearr_72434[(12)] = inst_72370);

return statearr_72434;
})();
var statearr_72435_73278 = state_72417__$1;
(statearr_72435_73278[(2)] = null);

(statearr_72435_73278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72418 === (17))){
var inst_72383 = (state_72417[(7)]);
var inst_72387 = cljs.core.chunk_first(inst_72383);
var inst_72388 = cljs.core.chunk_rest(inst_72383);
var inst_72389 = cljs.core.count(inst_72387);
var inst_72369 = inst_72388;
var inst_72370 = inst_72387;
var inst_72371 = inst_72389;
var inst_72372 = (0);
var state_72417__$1 = (function (){var statearr_72436 = state_72417;
(statearr_72436[(9)] = inst_72369);

(statearr_72436[(10)] = inst_72372);

(statearr_72436[(11)] = inst_72371);

(statearr_72436[(12)] = inst_72370);

return statearr_72436;
})();
var statearr_72437_73279 = state_72417__$1;
(statearr_72437_73279[(2)] = null);

(statearr_72437_73279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72418 === (3))){
var inst_72415 = (state_72417[(2)]);
var state_72417__$1 = state_72417;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72417__$1,inst_72415);
} else {
if((state_val_72418 === (12))){
var inst_72403 = (state_72417[(2)]);
var state_72417__$1 = state_72417;
var statearr_72438_73280 = state_72417__$1;
(statearr_72438_73280[(2)] = inst_72403);

(statearr_72438_73280[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72418 === (2))){
var state_72417__$1 = state_72417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72417__$1,(4),in$);
} else {
if((state_val_72418 === (23))){
var inst_72411 = (state_72417[(2)]);
var state_72417__$1 = state_72417;
var statearr_72439_73281 = state_72417__$1;
(statearr_72439_73281[(2)] = inst_72411);

(statearr_72439_73281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72418 === (19))){
var inst_72398 = (state_72417[(2)]);
var state_72417__$1 = state_72417;
var statearr_72440_73282 = state_72417__$1;
(statearr_72440_73282[(2)] = inst_72398);

(statearr_72440_73282[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72418 === (11))){
var inst_72369 = (state_72417[(9)]);
var inst_72383 = (state_72417[(7)]);
var inst_72383__$1 = cljs.core.seq(inst_72369);
var state_72417__$1 = (function (){var statearr_72441 = state_72417;
(statearr_72441[(7)] = inst_72383__$1);

return statearr_72441;
})();
if(inst_72383__$1){
var statearr_72442_73283 = state_72417__$1;
(statearr_72442_73283[(1)] = (14));

} else {
var statearr_72443_73284 = state_72417__$1;
(statearr_72443_73284[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72418 === (9))){
var inst_72405 = (state_72417[(2)]);
var inst_72406 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_72417__$1 = (function (){var statearr_72444 = state_72417;
(statearr_72444[(15)] = inst_72405);

return statearr_72444;
})();
if(cljs.core.truth_(inst_72406)){
var statearr_72445_73285 = state_72417__$1;
(statearr_72445_73285[(1)] = (21));

} else {
var statearr_72446_73286 = state_72417__$1;
(statearr_72446_73286[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72418 === (5))){
var inst_72361 = cljs.core.async.close_BANG_(out);
var state_72417__$1 = state_72417;
var statearr_72447_73287 = state_72417__$1;
(statearr_72447_73287[(2)] = inst_72361);

(statearr_72447_73287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72418 === (14))){
var inst_72383 = (state_72417[(7)]);
var inst_72385 = cljs.core.chunked_seq_QMARK_(inst_72383);
var state_72417__$1 = state_72417;
if(inst_72385){
var statearr_72448_73288 = state_72417__$1;
(statearr_72448_73288[(1)] = (17));

} else {
var statearr_72449_73289 = state_72417__$1;
(statearr_72449_73289[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72418 === (16))){
var inst_72401 = (state_72417[(2)]);
var state_72417__$1 = state_72417;
var statearr_72450_73290 = state_72417__$1;
(statearr_72450_73290[(2)] = inst_72401);

(statearr_72450_73290[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72418 === (10))){
var inst_72372 = (state_72417[(10)]);
var inst_72370 = (state_72417[(12)]);
var inst_72377 = cljs.core._nth(inst_72370,inst_72372);
var state_72417__$1 = state_72417;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72417__$1,(13),out,inst_72377);
} else {
if((state_val_72418 === (18))){
var inst_72383 = (state_72417[(7)]);
var inst_72392 = cljs.core.first(inst_72383);
var state_72417__$1 = state_72417;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72417__$1,(20),out,inst_72392);
} else {
if((state_val_72418 === (8))){
var inst_72372 = (state_72417[(10)]);
var inst_72371 = (state_72417[(11)]);
var inst_72374 = (inst_72372 < inst_72371);
var inst_72375 = inst_72374;
var state_72417__$1 = state_72417;
if(cljs.core.truth_(inst_72375)){
var statearr_72451_73292 = state_72417__$1;
(statearr_72451_73292[(1)] = (10));

} else {
var statearr_72452_73293 = state_72417__$1;
(statearr_72452_73293[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__70805__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__70805__auto____0 = (function (){
var statearr_72453 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72453[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__70805__auto__);

(statearr_72453[(1)] = (1));

return statearr_72453;
});
var cljs$core$async$mapcat_STAR__$_state_machine__70805__auto____1 = (function (state_72417){
while(true){
var ret_value__70806__auto__ = (function (){try{while(true){
var result__70807__auto__ = switch__70804__auto__(state_72417);
if(cljs.core.keyword_identical_QMARK_(result__70807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70807__auto__;
}
break;
}
}catch (e72454){var ex__70808__auto__ = e72454;
var statearr_72455_73295 = state_72417;
(statearr_72455_73295[(2)] = ex__70808__auto__);


if(cljs.core.seq((state_72417[(4)]))){
var statearr_72456_73296 = state_72417;
(statearr_72456_73296[(1)] = cljs.core.first((state_72417[(4)])));

} else {
throw ex__70808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73297 = state_72417;
state_72417 = G__73297;
continue;
} else {
return ret_value__70806__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__70805__auto__ = function(state_72417){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__70805__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__70805__auto____1.call(this,state_72417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__70805__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__70805__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__70805__auto__;
})()
})();
var state__70912__auto__ = (function (){var statearr_72457 = f__70911__auto__();
(statearr_72457[(6)] = c__70910__auto__);

return statearr_72457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70912__auto__);
}));

return c__70910__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__72459 = arguments.length;
switch (G__72459) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__72461 = arguments.length;
switch (G__72461) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__72463 = arguments.length;
switch (G__72463) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__70910__auto___73301 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70911__auto__ = (function (){var switch__70804__auto__ = (function (state_72487){
var state_val_72488 = (state_72487[(1)]);
if((state_val_72488 === (7))){
var inst_72482 = (state_72487[(2)]);
var state_72487__$1 = state_72487;
var statearr_72489_73302 = state_72487__$1;
(statearr_72489_73302[(2)] = inst_72482);

(statearr_72489_73302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72488 === (1))){
var inst_72464 = null;
var state_72487__$1 = (function (){var statearr_72490 = state_72487;
(statearr_72490[(7)] = inst_72464);

return statearr_72490;
})();
var statearr_72491_73303 = state_72487__$1;
(statearr_72491_73303[(2)] = null);

(statearr_72491_73303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72488 === (4))){
var inst_72467 = (state_72487[(8)]);
var inst_72467__$1 = (state_72487[(2)]);
var inst_72468 = (inst_72467__$1 == null);
var inst_72469 = cljs.core.not(inst_72468);
var state_72487__$1 = (function (){var statearr_72492 = state_72487;
(statearr_72492[(8)] = inst_72467__$1);

return statearr_72492;
})();
if(inst_72469){
var statearr_72493_73304 = state_72487__$1;
(statearr_72493_73304[(1)] = (5));

} else {
var statearr_72494_73305 = state_72487__$1;
(statearr_72494_73305[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72488 === (6))){
var state_72487__$1 = state_72487;
var statearr_72495_73306 = state_72487__$1;
(statearr_72495_73306[(2)] = null);

(statearr_72495_73306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72488 === (3))){
var inst_72484 = (state_72487[(2)]);
var inst_72485 = cljs.core.async.close_BANG_(out);
var state_72487__$1 = (function (){var statearr_72496 = state_72487;
(statearr_72496[(9)] = inst_72484);

return statearr_72496;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_72487__$1,inst_72485);
} else {
if((state_val_72488 === (2))){
var state_72487__$1 = state_72487;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72487__$1,(4),ch);
} else {
if((state_val_72488 === (11))){
var inst_72467 = (state_72487[(8)]);
var inst_72476 = (state_72487[(2)]);
var inst_72464 = inst_72467;
var state_72487__$1 = (function (){var statearr_72497 = state_72487;
(statearr_72497[(7)] = inst_72464);

(statearr_72497[(10)] = inst_72476);

return statearr_72497;
})();
var statearr_72498_73307 = state_72487__$1;
(statearr_72498_73307[(2)] = null);

(statearr_72498_73307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72488 === (9))){
var inst_72467 = (state_72487[(8)]);
var state_72487__$1 = state_72487;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72487__$1,(11),out,inst_72467);
} else {
if((state_val_72488 === (5))){
var inst_72464 = (state_72487[(7)]);
var inst_72467 = (state_72487[(8)]);
var inst_72471 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_72467,inst_72464);
var state_72487__$1 = state_72487;
if(inst_72471){
var statearr_72500_73308 = state_72487__$1;
(statearr_72500_73308[(1)] = (8));

} else {
var statearr_72501_73309 = state_72487__$1;
(statearr_72501_73309[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72488 === (10))){
var inst_72479 = (state_72487[(2)]);
var state_72487__$1 = state_72487;
var statearr_72502_73310 = state_72487__$1;
(statearr_72502_73310[(2)] = inst_72479);

(statearr_72502_73310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72488 === (8))){
var inst_72464 = (state_72487[(7)]);
var tmp72499 = inst_72464;
var inst_72464__$1 = tmp72499;
var state_72487__$1 = (function (){var statearr_72503 = state_72487;
(statearr_72503[(7)] = inst_72464__$1);

return statearr_72503;
})();
var statearr_72504_73311 = state_72487__$1;
(statearr_72504_73311[(2)] = null);

(statearr_72504_73311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__70805__auto__ = null;
var cljs$core$async$state_machine__70805__auto____0 = (function (){
var statearr_72505 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_72505[(0)] = cljs$core$async$state_machine__70805__auto__);

(statearr_72505[(1)] = (1));

return statearr_72505;
});
var cljs$core$async$state_machine__70805__auto____1 = (function (state_72487){
while(true){
var ret_value__70806__auto__ = (function (){try{while(true){
var result__70807__auto__ = switch__70804__auto__(state_72487);
if(cljs.core.keyword_identical_QMARK_(result__70807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70807__auto__;
}
break;
}
}catch (e72506){var ex__70808__auto__ = e72506;
var statearr_72507_73313 = state_72487;
(statearr_72507_73313[(2)] = ex__70808__auto__);


if(cljs.core.seq((state_72487[(4)]))){
var statearr_72508_73314 = state_72487;
(statearr_72508_73314[(1)] = cljs.core.first((state_72487[(4)])));

} else {
throw ex__70808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73315 = state_72487;
state_72487 = G__73315;
continue;
} else {
return ret_value__70806__auto__;
}
break;
}
});
cljs$core$async$state_machine__70805__auto__ = function(state_72487){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__70805__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__70805__auto____1.call(this,state_72487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__70805__auto____0;
cljs$core$async$state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__70805__auto____1;
return cljs$core$async$state_machine__70805__auto__;
})()
})();
var state__70912__auto__ = (function (){var statearr_72509 = f__70911__auto__();
(statearr_72509[(6)] = c__70910__auto___73301);

return statearr_72509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70912__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__72511 = arguments.length;
switch (G__72511) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__70910__auto___73321 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70911__auto__ = (function (){var switch__70804__auto__ = (function (state_72549){
var state_val_72550 = (state_72549[(1)]);
if((state_val_72550 === (7))){
var inst_72545 = (state_72549[(2)]);
var state_72549__$1 = state_72549;
var statearr_72551_73323 = state_72549__$1;
(statearr_72551_73323[(2)] = inst_72545);

(statearr_72551_73323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72550 === (1))){
var inst_72512 = (new Array(n));
var inst_72513 = inst_72512;
var inst_72514 = (0);
var state_72549__$1 = (function (){var statearr_72552 = state_72549;
(statearr_72552[(7)] = inst_72514);

(statearr_72552[(8)] = inst_72513);

return statearr_72552;
})();
var statearr_72553_73324 = state_72549__$1;
(statearr_72553_73324[(2)] = null);

(statearr_72553_73324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72550 === (4))){
var inst_72517 = (state_72549[(9)]);
var inst_72517__$1 = (state_72549[(2)]);
var inst_72518 = (inst_72517__$1 == null);
var inst_72519 = cljs.core.not(inst_72518);
var state_72549__$1 = (function (){var statearr_72554 = state_72549;
(statearr_72554[(9)] = inst_72517__$1);

return statearr_72554;
})();
if(inst_72519){
var statearr_72555_73325 = state_72549__$1;
(statearr_72555_73325[(1)] = (5));

} else {
var statearr_72556_73326 = state_72549__$1;
(statearr_72556_73326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72550 === (15))){
var inst_72539 = (state_72549[(2)]);
var state_72549__$1 = state_72549;
var statearr_72557_73327 = state_72549__$1;
(statearr_72557_73327[(2)] = inst_72539);

(statearr_72557_73327[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72550 === (13))){
var state_72549__$1 = state_72549;
var statearr_72558_73328 = state_72549__$1;
(statearr_72558_73328[(2)] = null);

(statearr_72558_73328[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72550 === (6))){
var inst_72514 = (state_72549[(7)]);
var inst_72535 = (inst_72514 > (0));
var state_72549__$1 = state_72549;
if(cljs.core.truth_(inst_72535)){
var statearr_72559_73329 = state_72549__$1;
(statearr_72559_73329[(1)] = (12));

} else {
var statearr_72560_73330 = state_72549__$1;
(statearr_72560_73330[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72550 === (3))){
var inst_72547 = (state_72549[(2)]);
var state_72549__$1 = state_72549;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72549__$1,inst_72547);
} else {
if((state_val_72550 === (12))){
var inst_72513 = (state_72549[(8)]);
var inst_72537 = cljs.core.vec(inst_72513);
var state_72549__$1 = state_72549;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72549__$1,(15),out,inst_72537);
} else {
if((state_val_72550 === (2))){
var state_72549__$1 = state_72549;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72549__$1,(4),ch);
} else {
if((state_val_72550 === (11))){
var inst_72529 = (state_72549[(2)]);
var inst_72530 = (new Array(n));
var inst_72513 = inst_72530;
var inst_72514 = (0);
var state_72549__$1 = (function (){var statearr_72561 = state_72549;
(statearr_72561[(7)] = inst_72514);

(statearr_72561[(10)] = inst_72529);

(statearr_72561[(8)] = inst_72513);

return statearr_72561;
})();
var statearr_72562_73334 = state_72549__$1;
(statearr_72562_73334[(2)] = null);

(statearr_72562_73334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72550 === (9))){
var inst_72513 = (state_72549[(8)]);
var inst_72527 = cljs.core.vec(inst_72513);
var state_72549__$1 = state_72549;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72549__$1,(11),out,inst_72527);
} else {
if((state_val_72550 === (5))){
var inst_72517 = (state_72549[(9)]);
var inst_72514 = (state_72549[(7)]);
var inst_72522 = (state_72549[(11)]);
var inst_72513 = (state_72549[(8)]);
var inst_72521 = (inst_72513[inst_72514] = inst_72517);
var inst_72522__$1 = (inst_72514 + (1));
var inst_72523 = (inst_72522__$1 < n);
var state_72549__$1 = (function (){var statearr_72563 = state_72549;
(statearr_72563[(12)] = inst_72521);

(statearr_72563[(11)] = inst_72522__$1);

return statearr_72563;
})();
if(cljs.core.truth_(inst_72523)){
var statearr_72564_73335 = state_72549__$1;
(statearr_72564_73335[(1)] = (8));

} else {
var statearr_72565_73336 = state_72549__$1;
(statearr_72565_73336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72550 === (14))){
var inst_72542 = (state_72549[(2)]);
var inst_72543 = cljs.core.async.close_BANG_(out);
var state_72549__$1 = (function (){var statearr_72567 = state_72549;
(statearr_72567[(13)] = inst_72542);

return statearr_72567;
})();
var statearr_72568_73337 = state_72549__$1;
(statearr_72568_73337[(2)] = inst_72543);

(statearr_72568_73337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72550 === (10))){
var inst_72533 = (state_72549[(2)]);
var state_72549__$1 = state_72549;
var statearr_72569_73338 = state_72549__$1;
(statearr_72569_73338[(2)] = inst_72533);

(statearr_72569_73338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72550 === (8))){
var inst_72522 = (state_72549[(11)]);
var inst_72513 = (state_72549[(8)]);
var tmp72566 = inst_72513;
var inst_72513__$1 = tmp72566;
var inst_72514 = inst_72522;
var state_72549__$1 = (function (){var statearr_72570 = state_72549;
(statearr_72570[(7)] = inst_72514);

(statearr_72570[(8)] = inst_72513__$1);

return statearr_72570;
})();
var statearr_72571_73339 = state_72549__$1;
(statearr_72571_73339[(2)] = null);

(statearr_72571_73339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__70805__auto__ = null;
var cljs$core$async$state_machine__70805__auto____0 = (function (){
var statearr_72572 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72572[(0)] = cljs$core$async$state_machine__70805__auto__);

(statearr_72572[(1)] = (1));

return statearr_72572;
});
var cljs$core$async$state_machine__70805__auto____1 = (function (state_72549){
while(true){
var ret_value__70806__auto__ = (function (){try{while(true){
var result__70807__auto__ = switch__70804__auto__(state_72549);
if(cljs.core.keyword_identical_QMARK_(result__70807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70807__auto__;
}
break;
}
}catch (e72573){var ex__70808__auto__ = e72573;
var statearr_72574_73340 = state_72549;
(statearr_72574_73340[(2)] = ex__70808__auto__);


if(cljs.core.seq((state_72549[(4)]))){
var statearr_72575_73341 = state_72549;
(statearr_72575_73341[(1)] = cljs.core.first((state_72549[(4)])));

} else {
throw ex__70808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73342 = state_72549;
state_72549 = G__73342;
continue;
} else {
return ret_value__70806__auto__;
}
break;
}
});
cljs$core$async$state_machine__70805__auto__ = function(state_72549){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__70805__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__70805__auto____1.call(this,state_72549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__70805__auto____0;
cljs$core$async$state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__70805__auto____1;
return cljs$core$async$state_machine__70805__auto__;
})()
})();
var state__70912__auto__ = (function (){var statearr_72576 = f__70911__auto__();
(statearr_72576[(6)] = c__70910__auto___73321);

return statearr_72576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70912__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__72578 = arguments.length;
switch (G__72578) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__70910__auto___73344 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70911__auto__ = (function (){var switch__70804__auto__ = (function (state_72623){
var state_val_72624 = (state_72623[(1)]);
if((state_val_72624 === (7))){
var inst_72619 = (state_72623[(2)]);
var state_72623__$1 = state_72623;
var statearr_72625_73345 = state_72623__$1;
(statearr_72625_73345[(2)] = inst_72619);

(statearr_72625_73345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72624 === (1))){
var inst_72579 = [];
var inst_72580 = inst_72579;
var inst_72581 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_72623__$1 = (function (){var statearr_72626 = state_72623;
(statearr_72626[(7)] = inst_72581);

(statearr_72626[(8)] = inst_72580);

return statearr_72626;
})();
var statearr_72627_73346 = state_72623__$1;
(statearr_72627_73346[(2)] = null);

(statearr_72627_73346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72624 === (4))){
var inst_72584 = (state_72623[(9)]);
var inst_72584__$1 = (state_72623[(2)]);
var inst_72585 = (inst_72584__$1 == null);
var inst_72586 = cljs.core.not(inst_72585);
var state_72623__$1 = (function (){var statearr_72628 = state_72623;
(statearr_72628[(9)] = inst_72584__$1);

return statearr_72628;
})();
if(inst_72586){
var statearr_72629_73347 = state_72623__$1;
(statearr_72629_73347[(1)] = (5));

} else {
var statearr_72630_73348 = state_72623__$1;
(statearr_72630_73348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72624 === (15))){
var inst_72580 = (state_72623[(8)]);
var inst_72611 = cljs.core.vec(inst_72580);
var state_72623__$1 = state_72623;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72623__$1,(18),out,inst_72611);
} else {
if((state_val_72624 === (13))){
var inst_72606 = (state_72623[(2)]);
var state_72623__$1 = state_72623;
var statearr_72631_73349 = state_72623__$1;
(statearr_72631_73349[(2)] = inst_72606);

(statearr_72631_73349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72624 === (6))){
var inst_72580 = (state_72623[(8)]);
var inst_72608 = inst_72580.length;
var inst_72609 = (inst_72608 > (0));
var state_72623__$1 = state_72623;
if(cljs.core.truth_(inst_72609)){
var statearr_72632_73350 = state_72623__$1;
(statearr_72632_73350[(1)] = (15));

} else {
var statearr_72633_73351 = state_72623__$1;
(statearr_72633_73351[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72624 === (17))){
var inst_72616 = (state_72623[(2)]);
var inst_72617 = cljs.core.async.close_BANG_(out);
var state_72623__$1 = (function (){var statearr_72634 = state_72623;
(statearr_72634[(10)] = inst_72616);

return statearr_72634;
})();
var statearr_72635_73354 = state_72623__$1;
(statearr_72635_73354[(2)] = inst_72617);

(statearr_72635_73354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72624 === (3))){
var inst_72621 = (state_72623[(2)]);
var state_72623__$1 = state_72623;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72623__$1,inst_72621);
} else {
if((state_val_72624 === (12))){
var inst_72580 = (state_72623[(8)]);
var inst_72599 = cljs.core.vec(inst_72580);
var state_72623__$1 = state_72623;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72623__$1,(14),out,inst_72599);
} else {
if((state_val_72624 === (2))){
var state_72623__$1 = state_72623;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72623__$1,(4),ch);
} else {
if((state_val_72624 === (11))){
var inst_72588 = (state_72623[(11)]);
var inst_72584 = (state_72623[(9)]);
var inst_72580 = (state_72623[(8)]);
var inst_72596 = inst_72580.push(inst_72584);
var tmp72636 = inst_72580;
var inst_72580__$1 = tmp72636;
var inst_72581 = inst_72588;
var state_72623__$1 = (function (){var statearr_72637 = state_72623;
(statearr_72637[(7)] = inst_72581);

(statearr_72637[(12)] = inst_72596);

(statearr_72637[(8)] = inst_72580__$1);

return statearr_72637;
})();
var statearr_72638_73356 = state_72623__$1;
(statearr_72638_73356[(2)] = null);

(statearr_72638_73356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72624 === (9))){
var inst_72581 = (state_72623[(7)]);
var inst_72592 = cljs.core.keyword_identical_QMARK_(inst_72581,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_72623__$1 = state_72623;
var statearr_72639_73361 = state_72623__$1;
(statearr_72639_73361[(2)] = inst_72592);

(statearr_72639_73361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72624 === (5))){
var inst_72589 = (state_72623[(13)]);
var inst_72588 = (state_72623[(11)]);
var inst_72584 = (state_72623[(9)]);
var inst_72581 = (state_72623[(7)]);
var inst_72588__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_72584) : f.call(null,inst_72584));
var inst_72589__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_72588__$1,inst_72581);
var state_72623__$1 = (function (){var statearr_72640 = state_72623;
(statearr_72640[(13)] = inst_72589__$1);

(statearr_72640[(11)] = inst_72588__$1);

return statearr_72640;
})();
if(inst_72589__$1){
var statearr_72641_73362 = state_72623__$1;
(statearr_72641_73362[(1)] = (8));

} else {
var statearr_72642_73363 = state_72623__$1;
(statearr_72642_73363[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72624 === (14))){
var inst_72588 = (state_72623[(11)]);
var inst_72584 = (state_72623[(9)]);
var inst_72601 = (state_72623[(2)]);
var inst_72602 = [];
var inst_72603 = inst_72602.push(inst_72584);
var inst_72580 = inst_72602;
var inst_72581 = inst_72588;
var state_72623__$1 = (function (){var statearr_72643 = state_72623;
(statearr_72643[(14)] = inst_72601);

(statearr_72643[(7)] = inst_72581);

(statearr_72643[(15)] = inst_72603);

(statearr_72643[(8)] = inst_72580);

return statearr_72643;
})();
var statearr_72644_73364 = state_72623__$1;
(statearr_72644_73364[(2)] = null);

(statearr_72644_73364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72624 === (16))){
var state_72623__$1 = state_72623;
var statearr_72645_73365 = state_72623__$1;
(statearr_72645_73365[(2)] = null);

(statearr_72645_73365[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72624 === (10))){
var inst_72594 = (state_72623[(2)]);
var state_72623__$1 = state_72623;
if(cljs.core.truth_(inst_72594)){
var statearr_72646_73366 = state_72623__$1;
(statearr_72646_73366[(1)] = (11));

} else {
var statearr_72647_73367 = state_72623__$1;
(statearr_72647_73367[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72624 === (18))){
var inst_72613 = (state_72623[(2)]);
var state_72623__$1 = state_72623;
var statearr_72648_73368 = state_72623__$1;
(statearr_72648_73368[(2)] = inst_72613);

(statearr_72648_73368[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72624 === (8))){
var inst_72589 = (state_72623[(13)]);
var state_72623__$1 = state_72623;
var statearr_72649_73369 = state_72623__$1;
(statearr_72649_73369[(2)] = inst_72589);

(statearr_72649_73369[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__70805__auto__ = null;
var cljs$core$async$state_machine__70805__auto____0 = (function (){
var statearr_72650 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72650[(0)] = cljs$core$async$state_machine__70805__auto__);

(statearr_72650[(1)] = (1));

return statearr_72650;
});
var cljs$core$async$state_machine__70805__auto____1 = (function (state_72623){
while(true){
var ret_value__70806__auto__ = (function (){try{while(true){
var result__70807__auto__ = switch__70804__auto__(state_72623);
if(cljs.core.keyword_identical_QMARK_(result__70807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70807__auto__;
}
break;
}
}catch (e72651){var ex__70808__auto__ = e72651;
var statearr_72652_73370 = state_72623;
(statearr_72652_73370[(2)] = ex__70808__auto__);


if(cljs.core.seq((state_72623[(4)]))){
var statearr_72653_73371 = state_72623;
(statearr_72653_73371[(1)] = cljs.core.first((state_72623[(4)])));

} else {
throw ex__70808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73372 = state_72623;
state_72623 = G__73372;
continue;
} else {
return ret_value__70806__auto__;
}
break;
}
});
cljs$core$async$state_machine__70805__auto__ = function(state_72623){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__70805__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__70805__auto____1.call(this,state_72623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__70805__auto____0;
cljs$core$async$state_machine__70805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__70805__auto____1;
return cljs$core$async$state_machine__70805__auto__;
})()
})();
var state__70912__auto__ = (function (){var statearr_72654 = f__70911__auto__();
(statearr_72654[(6)] = c__70910__auto___73344);

return statearr_72654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70912__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
