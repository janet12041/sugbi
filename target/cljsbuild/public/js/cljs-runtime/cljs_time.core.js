goog.provide('cljs_time.core');
cljs_time.core.deprecated = (function cljs_time$core$deprecated(message){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEPRECATION WARNING: ",message], 0));
});
/**
 * **Note:** Equality in goog.date.* (and also with plain
 * javascript dates) is not the same as in Joda/clj-time. Two date
 * objects representing the same instant in time in goog.date.* are not
 * equal.
 * 
 * If you need to test for equality use either `cljs-time.core/=`, or
 * optionally you can require the `cljs-time.extend` namespace which will
 * extend the goog.date.* datatypes, so that clojure.core/= works as
 * expected.
 */
cljs_time.core._EQ_ = cljs_time.internal.core._EQ_;

/**
 * Interface for various date time functions
 * @interface
 */
cljs_time.core.DateTimeProtocol = function(){};

var cljs_time$core$DateTimeProtocol$year$dyn_68049 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs_time.core.year[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (cljs_time.core.year["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.year",this$);
}
}
});
/**
 * Return the year component of the given date/time.
 */
cljs_time.core.year = (function cljs_time$core$year(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$DateTimeProtocol$year$arity$1 == null)))))){
return this$.cljs_time$core$DateTimeProtocol$year$arity$1(this$);
} else {
return cljs_time$core$DateTimeProtocol$year$dyn_68049(this$);
}
});

var cljs_time$core$DateTimeProtocol$month$dyn_68051 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs_time.core.month[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (cljs_time.core.month["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.month",this$);
}
}
});
/**
 * Return the month component of the given date/time.
 */
cljs_time.core.month = (function cljs_time$core$month(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$DateTimeProtocol$month$arity$1 == null)))))){
return this$.cljs_time$core$DateTimeProtocol$month$arity$1(this$);
} else {
return cljs_time$core$DateTimeProtocol$month$dyn_68051(this$);
}
});

var cljs_time$core$DateTimeProtocol$day$dyn_68052 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs_time.core.day[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (cljs_time.core.day["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.day",this$);
}
}
});
/**
 * Return the day of month component of the given date/time.
 */
cljs_time.core.day = (function cljs_time$core$day(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$DateTimeProtocol$day$arity$1 == null)))))){
return this$.cljs_time$core$DateTimeProtocol$day$arity$1(this$);
} else {
return cljs_time$core$DateTimeProtocol$day$dyn_68052(this$);
}
});

var cljs_time$core$DateTimeProtocol$day_of_week$dyn_68053 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs_time.core.day_of_week[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (cljs_time.core.day_of_week["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.day-of-week",this$);
}
}
});
/**
 * Return the day of week component of the given date/time. Monday is 1 and Sunday is 7
 */
cljs_time.core.day_of_week = (function cljs_time$core$day_of_week(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 == null)))))){
return this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1(this$);
} else {
return cljs_time$core$DateTimeProtocol$day_of_week$dyn_68053(this$);
}
});

var cljs_time$core$DateTimeProtocol$hour$dyn_68055 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs_time.core.hour[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (cljs_time.core.hour["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.hour",this$);
}
}
});
/**
 * Return the hour of day component of the given date/time. A time of 12:01am will have an hour component of 0.
 */
cljs_time.core.hour = (function cljs_time$core$hour(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$DateTimeProtocol$hour$arity$1 == null)))))){
return this$.cljs_time$core$DateTimeProtocol$hour$arity$1(this$);
} else {
return cljs_time$core$DateTimeProtocol$hour$dyn_68055(this$);
}
});

var cljs_time$core$DateTimeProtocol$minute$dyn_68056 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs_time.core.minute[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (cljs_time.core.minute["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.minute",this$);
}
}
});
/**
 * Return the minute of hour component of the given date/time.
 */
cljs_time.core.minute = (function cljs_time$core$minute(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$DateTimeProtocol$minute$arity$1 == null)))))){
return this$.cljs_time$core$DateTimeProtocol$minute$arity$1(this$);
} else {
return cljs_time$core$DateTimeProtocol$minute$dyn_68056(this$);
}
});

var cljs_time$core$DateTimeProtocol$sec$dyn_68057 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs_time.core.sec[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (cljs_time.core.sec["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.sec",this$);
}
}
});
/**
 * Return the second of minute component of the given date/time.
 */
cljs_time.core.sec = (function cljs_time$core$sec(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$DateTimeProtocol$sec$arity$1 == null)))))){
return this$.cljs_time$core$DateTimeProtocol$sec$arity$1(this$);
} else {
return cljs_time$core$DateTimeProtocol$sec$dyn_68057(this$);
}
});

var cljs_time$core$DateTimeProtocol$second$dyn_68060 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs_time.core.second[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (cljs_time.core.second["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.second",this$);
}
}
});
/**
 * Return the second of minute component of the given date/time.
 */
cljs_time.core.second = (function cljs_time$core$second(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$DateTimeProtocol$second$arity$1 == null)))))){
return this$.cljs_time$core$DateTimeProtocol$second$arity$1(this$);
} else {
return cljs_time$core$DateTimeProtocol$second$dyn_68060(this$);
}
});

var cljs_time$core$DateTimeProtocol$milli$dyn_68076 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs_time.core.milli[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (cljs_time.core.milli["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.milli",this$);
}
}
});
/**
 * Return the millisecond of second component of the given date/time.
 */
cljs_time.core.milli = (function cljs_time$core$milli(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$DateTimeProtocol$milli$arity$1 == null)))))){
return this$.cljs_time$core$DateTimeProtocol$milli$arity$1(this$);
} else {
return cljs_time$core$DateTimeProtocol$milli$dyn_68076(this$);
}
});

var cljs_time$core$DateTimeProtocol$equal_QMARK_$dyn_68092 = (function (this$,that){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs_time.core.equal_QMARK_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,that) : m__5394__auto__.call(null,this$,that));
} else {
var m__5392__auto__ = (cljs_time.core.equal_QMARK_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,that) : m__5392__auto__.call(null,this$,that));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.equal?",this$);
}
}
});
/**
 * Returns true if DateTime 'this' is strictly equal to date/time 'that'.
 */
cljs_time.core.equal_QMARK_ = (function cljs_time$core$equal_QMARK_(this$,that){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 == null)))))){
return this$.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2(this$,that);
} else {
return cljs_time$core$DateTimeProtocol$equal_QMARK_$dyn_68092(this$,that);
}
});

var cljs_time$core$DateTimeProtocol$after_QMARK_$dyn_68115 = (function (this$,that){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs_time.core.after_QMARK_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,that) : m__5394__auto__.call(null,this$,that));
} else {
var m__5392__auto__ = (cljs_time.core.after_QMARK_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,that) : m__5392__auto__.call(null,this$,that));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.after?",this$);
}
}
});
/**
 * Returns true if DateTime 'this' is strictly after date/time 'that'.
 */
cljs_time.core.after_QMARK_ = (function cljs_time$core$after_QMARK_(this$,that){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 == null)))))){
return this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2(this$,that);
} else {
return cljs_time$core$DateTimeProtocol$after_QMARK_$dyn_68115(this$,that);
}
});

var cljs_time$core$DateTimeProtocol$before_QMARK_$dyn_68127 = (function (this$,that){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs_time.core.before_QMARK_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,that) : m__5394__auto__.call(null,this$,that));
} else {
var m__5392__auto__ = (cljs_time.core.before_QMARK_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,that) : m__5392__auto__.call(null,this$,that));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.before?",this$);
}
}
});
/**
 * Returns true if DateTime 'this' is strictly before date/time 'that'.
 */
cljs_time.core.before_QMARK_ = (function cljs_time$core$before_QMARK_(this$,that){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 == null)))))){
return this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2(this$,that);
} else {
return cljs_time$core$DateTimeProtocol$before_QMARK_$dyn_68127(this$,that);
}
});

var cljs_time$core$DateTimeProtocol$plus_$dyn_68144 = (function (this$,period){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs_time.core.plus_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,period) : m__5394__auto__.call(null,this$,period));
} else {
var m__5392__auto__ = (cljs_time.core.plus_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,period) : m__5392__auto__.call(null,this$,period));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.plus-",this$);
}
}
});
/**
 * Returns a new date/time corresponding to the given date/time moved forwards by the given Period(s).
 */
cljs_time.core.plus_ = (function cljs_time$core$plus_(this$,period){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$DateTimeProtocol$plus_$arity$2 == null)))))){
return this$.cljs_time$core$DateTimeProtocol$plus_$arity$2(this$,period);
} else {
return cljs_time$core$DateTimeProtocol$plus_$dyn_68144(this$,period);
}
});

var cljs_time$core$DateTimeProtocol$minus_$dyn_68162 = (function (this$,period){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs_time.core.minus_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,period) : m__5394__auto__.call(null,this$,period));
} else {
var m__5392__auto__ = (cljs_time.core.minus_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,period) : m__5392__auto__.call(null,this$,period));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.minus-",this$);
}
}
});
/**
 * Returns a new date/time corresponding to the given date/time moved backwards by the given Period(s).
 */
cljs_time.core.minus_ = (function cljs_time$core$minus_(this$,period){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$DateTimeProtocol$minus_$arity$2 == null)))))){
return this$.cljs_time$core$DateTimeProtocol$minus_$arity$2(this$,period);
} else {
return cljs_time$core$DateTimeProtocol$minus_$dyn_68162(this$,period);
}
});

var cljs_time$core$DateTimeProtocol$first_day_of_the_month_$dyn_68167 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs_time.core.first_day_of_the_month_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (cljs_time.core.first_day_of_the_month_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.first-day-of-the-month-",this$);
}
}
});
/**
 * Returns the first day of the month
 */
cljs_time.core.first_day_of_the_month_ = (function cljs_time$core$first_day_of_the_month_(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 == null)))))){
return this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1(this$);
} else {
return cljs_time$core$DateTimeProtocol$first_day_of_the_month_$dyn_68167(this$);
}
});

var cljs_time$core$DateTimeProtocol$last_day_of_the_month_$dyn_68173 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs_time.core.last_day_of_the_month_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (cljs_time.core.last_day_of_the_month_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.last-day-of-the-month-",this$);
}
}
});
/**
 * Returns the last day of the month
 */
cljs_time.core.last_day_of_the_month_ = (function cljs_time$core$last_day_of_the_month_(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 == null)))))){
return this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1(this$);
} else {
return cljs_time$core$DateTimeProtocol$last_day_of_the_month_$dyn_68173(this$);
}
});

var cljs_time$core$DateTimeProtocol$week_number_of_year$dyn_68184 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs_time.core.week_number_of_year[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (cljs_time.core.week_number_of_year["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.week-number-of-year",this$);
}
}
});
/**
 * Returns the week of the week based year of the given date/time
 */
cljs_time.core.week_number_of_year = (function cljs_time$core$week_number_of_year(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1 == null)))))){
return this$.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1(this$);
} else {
return cljs_time$core$DateTimeProtocol$week_number_of_year$dyn_68184(this$);
}
});

var cljs_time$core$DateTimeProtocol$week_year$dyn_68187 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs_time.core.week_year[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (cljs_time.core.week_year["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.week-year",this$);
}
}
});
/**
 * Returns the the week based year of the given date/time.
 */
cljs_time.core.week_year = (function cljs_time$core$week_year(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$DateTimeProtocol$week_year$arity$1 == null)))))){
return this$.cljs_time$core$DateTimeProtocol$week_year$arity$1(this$);
} else {
return cljs_time$core$DateTimeProtocol$week_year$dyn_68187(this$);
}
});


/**
 * Interface for in-<time unit> functions
 * @interface
 */
cljs_time.core.InTimeUnitProtocol = function(){};

var cljs_time$core$InTimeUnitProtocol$in_millis$dyn_68207 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs_time.core.in_millis[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (cljs_time.core.in_millis["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-millis",this$);
}
}
});
/**
 * Return the time in milliseconds.
 */
cljs_time.core.in_millis = (function cljs_time$core$in_millis(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 == null)))))){
return this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1(this$);
} else {
return cljs_time$core$InTimeUnitProtocol$in_millis$dyn_68207(this$);
}
});

var cljs_time$core$InTimeUnitProtocol$in_seconds$dyn_68211 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs_time.core.in_seconds[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (cljs_time.core.in_seconds["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-seconds",this$);
}
}
});
/**
 * Return the time in seconds.
 */
cljs_time.core.in_seconds = (function cljs_time$core$in_seconds(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 == null)))))){
return this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1(this$);
} else {
return cljs_time$core$InTimeUnitProtocol$in_seconds$dyn_68211(this$);
}
});

var cljs_time$core$InTimeUnitProtocol$in_minutes$dyn_68233 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs_time.core.in_minutes[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (cljs_time.core.in_minutes["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-minutes",this$);
}
}
});
/**
 * Return the time in minutes.
 */
cljs_time.core.in_minutes = (function cljs_time$core$in_minutes(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 == null)))))){
return this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1(this$);
} else {
return cljs_time$core$InTimeUnitProtocol$in_minutes$dyn_68233(this$);
}
});

var cljs_time$core$InTimeUnitProtocol$in_hours$dyn_68241 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs_time.core.in_hours[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (cljs_time.core.in_hours["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-hours",this$);
}
}
});
/**
 * Return the time in hours.
 */
cljs_time.core.in_hours = (function cljs_time$core$in_hours(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 == null)))))){
return this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1(this$);
} else {
return cljs_time$core$InTimeUnitProtocol$in_hours$dyn_68241(this$);
}
});

var cljs_time$core$InTimeUnitProtocol$in_days$dyn_68243 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs_time.core.in_days[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (cljs_time.core.in_days["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-days",this$);
}
}
});
/**
 * Return the time in days.
 */
cljs_time.core.in_days = (function cljs_time$core$in_days(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 == null)))))){
return this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1(this$);
} else {
return cljs_time$core$InTimeUnitProtocol$in_days$dyn_68243(this$);
}
});

var cljs_time$core$InTimeUnitProtocol$in_weeks$dyn_68251 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs_time.core.in_weeks[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (cljs_time.core.in_weeks["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-weeks",this$);
}
}
});
/**
 * Return the time in weeks
 */
cljs_time.core.in_weeks = (function cljs_time$core$in_weeks(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 == null)))))){
return this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1(this$);
} else {
return cljs_time$core$InTimeUnitProtocol$in_weeks$dyn_68251(this$);
}
});

var cljs_time$core$InTimeUnitProtocol$in_months$dyn_68255 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs_time.core.in_months[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (cljs_time.core.in_months["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-months",this$);
}
}
});
/**
 * Return the time in months
 */
cljs_time.core.in_months = (function cljs_time$core$in_months(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 == null)))))){
return this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1(this$);
} else {
return cljs_time$core$InTimeUnitProtocol$in_months$dyn_68255(this$);
}
});

var cljs_time$core$InTimeUnitProtocol$in_years$dyn_68256 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs_time.core.in_years[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (cljs_time.core.in_years["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-years",this$);
}
}
});
/**
 * Return the time in years
 */
cljs_time.core.in_years = (function cljs_time$core$in_years(this$){
if((((!((this$ == null)))) && ((!((this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 == null)))))){
return this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1(this$);
} else {
return cljs_time$core$InTimeUnitProtocol$in_years$dyn_68256(this$);
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs_time.core.Interval = (function (start,end,__meta,__extmap,__hash){
this.start = start;
this.end = end;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k67814,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__67818 = k67814;
var G__67818__$1 = (((G__67818 instanceof cljs.core.Keyword))?G__67818.fqn:null);
switch (G__67818__$1) {
case "start":
return self__.start;

break;
case "end":
return self__.end;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k67814,else__5346__auto__);

}
}));

(cljs_time.core.Interval.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__67825){
var vec__67826 = p__67825;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67826,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67826,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(cljs_time.core.Interval.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#cljs-time.core.Interval{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end","end",-268185958),self__.end],null))], null),self__.__extmap));
}));

(cljs_time.core.Interval.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67813){
var self__ = this;
var G__67813__$1 = this;
return (new cljs.core.RecordIter((0),G__67813__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"end","end",-268185958)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs_time.core.Interval.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(cljs_time.core.Interval.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs_time.core.Interval.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(cljs_time.core.Interval.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (534314193 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(cljs_time.core.Interval.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this67815,other67816){
var self__ = this;
var this67815__$1 = this;
return (((!((other67816 == null)))) && ((((this67815__$1.constructor === other67816.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67815__$1.start,other67816.start)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67815__$1.end,other67816.end)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67815__$1.__extmap,other67816.__extmap)))))))));
}));

(cljs_time.core.Interval.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"end","end",-268185958),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(cljs_time.core.Interval.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k67814){
var self__ = this;
var this__5350__auto____$1 = this;
var G__67833 = k67814;
var G__67833__$1 = (((G__67833 instanceof cljs.core.Keyword))?G__67833.fqn:null);
switch (G__67833__$1) {
case "start":
case "end":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k67814);

}
}));

(cljs_time.core.Interval.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__67813){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__67834 = cljs.core.keyword_identical_QMARK_;
var expr__67835 = k__5352__auto__;
if(cljs.core.truth_((pred__67834.cljs$core$IFn$_invoke$arity$2 ? pred__67834.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start","start",-355208981),expr__67835) : pred__67834.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__67835)))){
return (new cljs_time.core.Interval(G__67813,self__.end,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67834.cljs$core$IFn$_invoke$arity$2 ? pred__67834.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end","end",-268185958),expr__67835) : pred__67834.call(null,new cljs.core.Keyword(null,"end","end",-268185958),expr__67835)))){
return (new cljs_time.core.Interval(self__.start,G__67813,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__67813),null));
}
}
}));

(cljs_time.core.Interval.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start","start",-355208981),self__.start,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end","end",-268185958),self__.end,null))], null),self__.__extmap));
}));

(cljs_time.core.Interval.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__67813){
var self__ = this;
var this__5342__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,G__67813,self__.__extmap,self__.__hash));
}));

(cljs_time.core.Interval.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(cljs_time.core.Interval.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null);
}));

(cljs_time.core.Interval.cljs$lang$type = true);

(cljs_time.core.Interval.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"cljs-time.core/Interval",null,(1),null));
}));

(cljs_time.core.Interval.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"cljs-time.core/Interval");
}));

/**
 * Positional factory function for cljs-time.core/Interval.
 */
cljs_time.core.__GT_Interval = (function cljs_time$core$__GT_Interval(start,end){
return (new cljs_time.core.Interval(start,end,null,null,null));
});

/**
 * Factory function for cljs-time.core/Interval, taking a map of keywords to field values.
 */
cljs_time.core.map__GT_Interval = (function cljs_time$core$map__GT_Interval(G__67817){
var extmap__5385__auto__ = (function (){var G__67837 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__67817,new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958)], 0));
if(cljs.core.record_QMARK_(G__67817)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__67837);
} else {
return G__67837;
}
})();
return (new cljs_time.core.Interval(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__67817),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(G__67817),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

/**
 * Returns an Interval representing the span between the two given DateTime.
 *   Note that intervals are closed on the left and open on the right.
 */
cljs_time.core.interval = (function cljs_time$core$interval(start,end){
if((start.getTime() <= end.getTime())){
} else {
throw (new Error("Assert failed: (<= (.getTime start) (.getTime end))"));
}

return cljs_time.core.__GT_Interval(start,end);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs_time.core.Period = (function (years,months,weeks,days,hours,minutes,seconds,millis,__meta,__extmap,__hash){
this.years = years;
this.months = months;
this.weeks = weeks;
this.days = days;
this.hours = hours;
this.minutes = minutes;
this.seconds = seconds;
this.millis = millis;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k67839,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__67843 = k67839;
var G__67843__$1 = (((G__67843 instanceof cljs.core.Keyword))?G__67843.fqn:null);
switch (G__67843__$1) {
case "years":
return self__.years;

break;
case "months":
return self__.months;

break;
case "weeks":
return self__.weeks;

break;
case "days":
return self__.days;

break;
case "hours":
return self__.hours;

break;
case "minutes":
return self__.minutes;

break;
case "seconds":
return self__.seconds;

break;
case "millis":
return self__.millis;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k67839,else__5346__auto__);

}
}));

(cljs_time.core.Period.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__67844){
var vec__67845 = p__67844;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67845,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67845,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(cljs_time.core.Period.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#cljs-time.core.Period{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"years","years",-1298579689),self__.years],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"months","months",-45571637),self__.months],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"weeks","weeks",1844596125),self__.weeks],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"days","days",-1394072564),self__.days],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hours","hours",58380855),self__.hours],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"minutes","minutes",1319166394),self__.minutes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seconds","seconds",-445266194),self__.seconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"millis","millis",-1338288387),self__.millis],null))], null),self__.__extmap));
}));

(cljs_time.core.Period.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67838){
var self__ = this;
var G__67838__$1 = this;
return (new cljs.core.RecordIter((0),G__67838__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"years","years",-1298579689),new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"millis","millis",-1338288387)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs_time.core.Period.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(cljs_time.core.Period.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs_time.core.Period.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
}));

(cljs_time.core.Period.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (1393857022 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(cljs_time.core.Period.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this67840,other67841){
var self__ = this;
var this67840__$1 = this;
return (((!((other67841 == null)))) && ((((this67840__$1.constructor === other67841.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67840__$1.years,other67841.years)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67840__$1.months,other67841.months)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67840__$1.weeks,other67841.weeks)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67840__$1.days,other67841.days)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67840__$1.hours,other67841.hours)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67840__$1.minutes,other67841.minutes)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67840__$1.seconds,other67841.seconds)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67840__$1.millis,other67841.millis)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67840__$1.__extmap,other67841.__extmap)))))))))))))))))))));
}));

(cljs_time.core.Period.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null,new cljs.core.Keyword(null,"millis","millis",-1338288387),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(cljs_time.core.Period.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k67839){
var self__ = this;
var this__5350__auto____$1 = this;
var G__67853 = k67839;
var G__67853__$1 = (((G__67853 instanceof cljs.core.Keyword))?G__67853.fqn:null);
switch (G__67853__$1) {
case "years":
case "months":
case "weeks":
case "days":
case "hours":
case "minutes":
case "seconds":
case "millis":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k67839);

}
}));

(cljs_time.core.Period.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__67838){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__67854 = cljs.core.keyword_identical_QMARK_;
var expr__67855 = k__5352__auto__;
if(cljs.core.truth_((pred__67854.cljs$core$IFn$_invoke$arity$2 ? pred__67854.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"years","years",-1298579689),expr__67855) : pred__67854.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),expr__67855)))){
return (new cljs_time.core.Period(G__67838,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67854.cljs$core$IFn$_invoke$arity$2 ? pred__67854.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"months","months",-45571637),expr__67855) : pred__67854.call(null,new cljs.core.Keyword(null,"months","months",-45571637),expr__67855)))){
return (new cljs_time.core.Period(self__.years,G__67838,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67854.cljs$core$IFn$_invoke$arity$2 ? pred__67854.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"weeks","weeks",1844596125),expr__67855) : pred__67854.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),expr__67855)))){
return (new cljs_time.core.Period(self__.years,self__.months,G__67838,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67854.cljs$core$IFn$_invoke$arity$2 ? pred__67854.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"days","days",-1394072564),expr__67855) : pred__67854.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),expr__67855)))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,G__67838,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67854.cljs$core$IFn$_invoke$arity$2 ? pred__67854.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hours","hours",58380855),expr__67855) : pred__67854.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),expr__67855)))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,G__67838,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67854.cljs$core$IFn$_invoke$arity$2 ? pred__67854.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"minutes","minutes",1319166394),expr__67855) : pred__67854.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),expr__67855)))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,G__67838,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67854.cljs$core$IFn$_invoke$arity$2 ? pred__67854.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"seconds","seconds",-445266194),expr__67855) : pred__67854.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),expr__67855)))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,G__67838,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67854.cljs$core$IFn$_invoke$arity$2 ? pred__67854.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"millis","millis",-1338288387),expr__67855) : pred__67854.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),expr__67855)))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,G__67838,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__67838),null));
}
}
}
}
}
}
}
}
}));

(cljs_time.core.Period.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"years","years",-1298579689),self__.years,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"months","months",-45571637),self__.months,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"weeks","weeks",1844596125),self__.weeks,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"days","days",-1394072564),self__.days,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"hours","hours",58380855),self__.hours,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"minutes","minutes",1319166394),self__.minutes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seconds","seconds",-445266194),self__.seconds,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"millis","millis",-1338288387),self__.millis,null))], null),self__.__extmap));
}));

(cljs_time.core.Period.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__67838){
var self__ = this;
var this__5342__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,G__67838,self__.__extmap,self__.__hash));
}));

(cljs_time.core.Period.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(cljs_time.core.Period.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"years","years",341951838,null),new cljs.core.Symbol(null,"months","months",1594959890,null),new cljs.core.Symbol(null,"weeks","weeks",-809839644,null),new cljs.core.Symbol(null,"days","days",246458963,null),new cljs.core.Symbol(null,"hours","hours",1698912382,null),new cljs.core.Symbol(null,"minutes","minutes",-1335269375,null),new cljs.core.Symbol(null,"seconds","seconds",1195265333,null),new cljs.core.Symbol(null,"millis","millis",302243140,null)], null);
}));

(cljs_time.core.Period.cljs$lang$type = true);

(cljs_time.core.Period.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"cljs-time.core/Period",null,(1),null));
}));

(cljs_time.core.Period.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"cljs-time.core/Period");
}));

/**
 * Positional factory function for cljs-time.core/Period.
 */
cljs_time.core.__GT_Period = (function cljs_time$core$__GT_Period(years,months,weeks,days,hours,minutes,seconds,millis){
return (new cljs_time.core.Period(years,months,weeks,days,hours,minutes,seconds,millis,null,null,null));
});

/**
 * Factory function for cljs-time.core/Period, taking a map of keywords to field values.
 */
cljs_time.core.map__GT_Period = (function cljs_time$core$map__GT_Period(G__67842){
var extmap__5385__auto__ = (function (){var G__67857 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__67842,new cljs.core.Keyword(null,"years","years",-1298579689),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"millis","millis",-1338288387)], 0));
if(cljs.core.record_QMARK_(G__67842)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__67857);
} else {
return G__67857;
}
})();
return (new cljs_time.core.Period(new cljs.core.Keyword(null,"years","years",-1298579689).cljs$core$IFn$_invoke$arity$1(G__67842),new cljs.core.Keyword(null,"months","months",-45571637).cljs$core$IFn$_invoke$arity$1(G__67842),new cljs.core.Keyword(null,"weeks","weeks",1844596125).cljs$core$IFn$_invoke$arity$1(G__67842),new cljs.core.Keyword(null,"days","days",-1394072564).cljs$core$IFn$_invoke$arity$1(G__67842),new cljs.core.Keyword(null,"hours","hours",58380855).cljs$core$IFn$_invoke$arity$1(G__67842),new cljs.core.Keyword(null,"minutes","minutes",1319166394).cljs$core$IFn$_invoke$arity$1(G__67842),new cljs.core.Keyword(null,"seconds","seconds",-445266194).cljs$core$IFn$_invoke$arity$1(G__67842),new cljs.core.Keyword(null,"millis","millis",-1338288387).cljs$core$IFn$_invoke$arity$1(G__67842),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

cljs_time.core.period = (function cljs_time$core$period(var_args){
var G__67862 = arguments.length;
switch (G__67862) {
case 2:
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___68372 = arguments.length;
var i__5770__auto___68373 = (0);
while(true){
if((i__5770__auto___68373 < len__5769__auto___68372)){
args_arr__5794__auto__.push((arguments[i__5770__auto___68373]));

var G__68374 = (i__5770__auto___68373 + (1));
i__5770__auto___68373 = G__68374;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(cljs_time.core.period.cljs$core$IFn$_invoke$arity$2 = (function (period,value){
return cljs_time.core.map__GT_Period(cljs.core.PersistentArrayMap.createAsIfByAssoc([period,value]));
}));

(cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic = (function (p1,v1,kvs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(p1,v1),kvs);
}));

/** @this {Function} */
(cljs_time.core.period.cljs$lang$applyTo = (function (seq67859){
var G__67860 = cljs.core.first(seq67859);
var seq67859__$1 = cljs.core.next(seq67859);
var G__67861 = cljs.core.first(seq67859__$1);
var seq67859__$2 = cljs.core.next(seq67859__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67860,G__67861,seq67859__$2);
}));

(cljs_time.core.period.cljs$lang$maxFixedArity = (2));

cljs_time.core.period_fns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"millis","millis",-1338288387),(function (date,op,value){
var ms = (function (){var G__67868 = date.getTime();
var G__67869 = value;
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__67868,G__67869) : op.call(null,G__67868,G__67869));
})();
var G__67870 = date;
G__67870.setTime(ms);

return G__67870;
}),new cljs.core.Keyword(null,"weeks","weeks",1844596125),(function (date,op,value){
var days = (function (){var G__67871 = (0);
var G__67872 = (value * (7));
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__67871,G__67872) : op.call(null,G__67871,G__67872));
})();
var G__67873 = date;
G__67873.add((new goog.date.Interval(goog.date.Interval.DAYS,days)));

return G__67873;
})], null);
cljs_time.core.periods = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"seconds","seconds",-445266194),goog.date.Interval.SECONDS,new cljs.core.Keyword(null,"minutes","minutes",1319166394),goog.date.Interval.MINUTES,new cljs.core.Keyword(null,"hours","hours",58380855),goog.date.Interval.HOURS,new cljs.core.Keyword(null,"days","days",-1394072564),goog.date.Interval.DAYS,new cljs.core.Keyword(null,"months","months",-45571637),goog.date.Interval.MONTHS,new cljs.core.Keyword(null,"years","years",-1298579689),goog.date.Interval.YEARS], null);
cljs_time.core.period_fn = (function cljs_time$core$period_fn(p){
return (function (operator,date){
var date_SINGLEQUOTE_ = date.clone();
var __GT_goog_interval = (function (op,interval,value){
if(cljs.core.truth_((function (){var and__5043__auto__ = interval;
if(cljs.core.truth_(and__5043__auto__)){
return value;
} else {
return and__5043__auto__;
}
})())){
return (new goog.date.Interval(interval,(op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2((0),value) : op.call(null,(0),value))));
} else {
return null;
}
});
var seq__67874_68383 = cljs.core.seq(p);
var chunk__67875_68384 = null;
var count__67876_68385 = (0);
var i__67877_68386 = (0);
while(true){
if((i__67877_68386 < count__67876_68385)){
var vec__67884_68388 = chunk__67875_68384.cljs$core$IIndexed$_nth$arity$2(null,i__67877_68386);
var k_68389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67884_68388,(0),null);
var v_68390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67884_68388,(1),null);
var temp__5802__auto___68392 = (cljs_time.core.periods.cljs$core$IFn$_invoke$arity$1 ? cljs_time.core.periods.cljs$core$IFn$_invoke$arity$1(k_68389) : cljs_time.core.periods.call(null,k_68389));
if(cljs.core.truth_(temp__5802__auto___68392)){
var period_68394 = temp__5802__auto___68392;
var temp__5804__auto___68395 = __GT_goog_interval(operator,period_68394,v_68390);
if(cljs.core.truth_(temp__5804__auto___68395)){
var i_68396 = temp__5804__auto___68395;
date_SINGLEQUOTE_.add(i_68396);
} else {
}
} else {
var temp__5804__auto___68397 = (cljs_time.core.period_fns.cljs$core$IFn$_invoke$arity$1 ? cljs_time.core.period_fns.cljs$core$IFn$_invoke$arity$1(k_68389) : cljs_time.core.period_fns.call(null,k_68389));
if(cljs.core.truth_(temp__5804__auto___68397)){
var f_68398 = temp__5804__auto___68397;
(f_68398.cljs$core$IFn$_invoke$arity$3 ? f_68398.cljs$core$IFn$_invoke$arity$3(date_SINGLEQUOTE_,operator,v_68390) : f_68398.call(null,date_SINGLEQUOTE_,operator,v_68390));
} else {
}
}


var G__68400 = seq__67874_68383;
var G__68401 = chunk__67875_68384;
var G__68402 = count__67876_68385;
var G__68403 = (i__67877_68386 + (1));
seq__67874_68383 = G__68400;
chunk__67875_68384 = G__68401;
count__67876_68385 = G__68402;
i__67877_68386 = G__68403;
continue;
} else {
var temp__5804__auto___68404 = cljs.core.seq(seq__67874_68383);
if(temp__5804__auto___68404){
var seq__67874_68405__$1 = temp__5804__auto___68404;
if(cljs.core.chunked_seq_QMARK_(seq__67874_68405__$1)){
var c__5568__auto___68406 = cljs.core.chunk_first(seq__67874_68405__$1);
var G__68407 = cljs.core.chunk_rest(seq__67874_68405__$1);
var G__68408 = c__5568__auto___68406;
var G__68409 = cljs.core.count(c__5568__auto___68406);
var G__68410 = (0);
seq__67874_68383 = G__68407;
chunk__67875_68384 = G__68408;
count__67876_68385 = G__68409;
i__67877_68386 = G__68410;
continue;
} else {
var vec__67888_68411 = cljs.core.first(seq__67874_68405__$1);
var k_68412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67888_68411,(0),null);
var v_68413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67888_68411,(1),null);
var temp__5802__auto___68414 = (cljs_time.core.periods.cljs$core$IFn$_invoke$arity$1 ? cljs_time.core.periods.cljs$core$IFn$_invoke$arity$1(k_68412) : cljs_time.core.periods.call(null,k_68412));
if(cljs.core.truth_(temp__5802__auto___68414)){
var period_68415 = temp__5802__auto___68414;
var temp__5804__auto___68416__$1 = __GT_goog_interval(operator,period_68415,v_68413);
if(cljs.core.truth_(temp__5804__auto___68416__$1)){
var i_68421 = temp__5804__auto___68416__$1;
date_SINGLEQUOTE_.add(i_68421);
} else {
}
} else {
var temp__5804__auto___68422__$1 = (cljs_time.core.period_fns.cljs$core$IFn$_invoke$arity$1 ? cljs_time.core.period_fns.cljs$core$IFn$_invoke$arity$1(k_68412) : cljs_time.core.period_fns.call(null,k_68412));
if(cljs.core.truth_(temp__5804__auto___68422__$1)){
var f_68424 = temp__5804__auto___68422__$1;
(f_68424.cljs$core$IFn$_invoke$arity$3 ? f_68424.cljs$core$IFn$_invoke$arity$3(date_SINGLEQUOTE_,operator,v_68413) : f_68424.call(null,date_SINGLEQUOTE_,operator,v_68413));
} else {
}
}


var G__68426 = cljs.core.next(seq__67874_68405__$1);
var G__68427 = null;
var G__68428 = (0);
var G__68429 = (0);
seq__67874_68383 = G__68426;
chunk__67875_68384 = G__68427;
count__67876_68385 = G__68428;
i__67877_68386 = G__68429;
continue;
}
} else {
}
}
break;
}

return date_SINGLEQUOTE_;
});
});
cljs_time.core.compare_local_dates = (function cljs_time$core$compare_local_dates(o,other){
var yo = o.getYear();
var yother = other.getYear();
var dayo = o.getDayOfYear();
var dayother = other.getDayOfYear();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(yo,yother)){
return (yo - yother);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(dayo,dayother)){
return (dayo - dayother);
} else {
return (0);

}
}
});
(goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
}));

(goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
}));

(goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
}));

(goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_((cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(0)) : cljs_time.core._EQ_.call(null,d,(0))))){
return (7);
} else {
return d;
}
}));

(goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getHours();
}));

(goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMinutes();
}));

(goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getSeconds();
}));

(goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMilliseconds();
}));

(goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() === that.getTime());
}));

(goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
}));

(goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
}));

(goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period)(cljs.core._PLUS_,this$__$1);
}));

(goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period)(cljs.core._,this$__$1);
}));

(goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.UtcDateTime(this$__$1.getYear(),this$__$1.getMonth(),(1),(0),(0),(0),(0)));
}));

(goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_((new goog.date.UtcDateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"days","days",-1394072564),(1)));
}));

(goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1 = (function (this$){
var this$__$1 = this;
return goog.date.getWeekNumber(this$__$1.getYear(),this$__$1.getMonth(),this$__$1.getDate());
}));

(goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$week_year$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.internal.core.get_week_year(this$__$1.getYear(),this$__$1.getMonth(),this$__$1.getDate());
}));

(goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
}));

(goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
}));

(goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
}));

(goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_((cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(0)) : cljs_time.core._EQ_.call(null,d,(0))))){
return (7);
} else {
return d;
}
}));

(goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getHours();
}));

(goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMinutes();
}));

(goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getSeconds();
}));

(goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMilliseconds();
}));

(goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() === that.getTime());
}));

(goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
}));

(goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
}));

(goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period)(cljs.core._PLUS_,this$__$1);
}));

(goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period)(cljs.core._,this$__$1);
}));

(goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.DateTime(this$__$1.getYear(),this$__$1.getMonth(),(1),(0),(0),(0),(0)));
}));

(goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_((new goog.date.DateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"days","days",-1394072564),(1)));
}));

(goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1 = (function (this$){
var this$__$1 = this;
return goog.date.getWeekNumber(this$__$1.getYear(),this$__$1.getMonth(),this$__$1.getDate());
}));

(goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$week_year$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.internal.core.get_week_year(this$__$1.getYear(),this$__$1.getMonth(),this$__$1.getDate());
}));

(goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
}));

(goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
}));

(goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
}));

(goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_((cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(0)) : cljs_time.core._EQ_.call(null,d,(0))))){
return (7);
} else {
return d;
}
}));

(goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return null;
}));

(goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return null;
}));

(goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return null;
}));

(goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return null;
}));

(goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return this$__$1.equals(that);
}));

(goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (cljs_time.core.compare_local_dates(this$__$1,that) > (0));
}));

(goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (cljs_time.core.compare_local_dates(this$__$1,that) < (0));
}));

(goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period)(cljs.core._PLUS_,this$__$1);
}));

(goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period)(cljs.core._,this$__$1);
}));

(goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.Date(this$__$1.getYear(),this$__$1.getMonth(),(1)));
}));

(goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_((new goog.date.Date(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1))),cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"days","days",-1394072564),(1)));
}));

(goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1 = (function (this$){
var this$__$1 = this;
return goog.date.getWeekNumber(this$__$1.getYear(),this$__$1.getMonth(),this$__$1.getDate());
}));

(goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$week_year$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.internal.core.get_week_year(this$__$1.getYear(),this$__$1.getMonth(),this$__$1.getDate());
}));
cljs_time.core.utc = ({"id": "UTC", "std_offset": (0), "names": new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["UTC"], null), "transitions": cljs.core.PersistentVector.EMPTY});
cljs_time.core.default_ms_fn = (function cljs_time$core$default_ms_fn(){
return (function (){
return (new goog.date.UtcDateTime()).getTime();
});
});
cljs_time.core.offset_ms_fn = (function cljs_time$core$offset_ms_fn(offset){
return (function (){
return ((new goog.date.UtcDateTime()).getTime() + offset);
});
});
cljs_time.core.static_ms_fn = (function cljs_time$core$static_ms_fn(ms){
return (function (){
return ms;
});
});
cljs_time.core._STAR_ms_fn_STAR_ = cljs_time.core.default_ms_fn();
/**
 * Returns a DateTime for the current instant in the UTC time zone.
 */
cljs_time.core.now = (function cljs_time$core$now(){
var G__67901 = (new goog.date.UtcDateTime());
G__67901.setTime(cljs_time.core._STAR_ms_fn_STAR_.call(null));

return G__67901;
});
/**
 * Returns a local DateTime for the current instant without date or time zone
 *   in the current time zone.
 */
cljs_time.core.time_now = (function cljs_time$core$time_now(){
var G__67902 = (new goog.date.DateTime());
G__67902.setTime(cljs_time.core._STAR_ms_fn_STAR_.call(null));

return G__67902;
});
cljs_time.core.at_midnight = (function cljs_time$core$at_midnight(datetime){
var datetime__$1 = datetime.clone();
var G__67907 = datetime__$1;
G__67907.setHours((0));

G__67907.setMinutes((0));

G__67907.setSeconds((0));

G__67907.setMilliseconds((0));

return G__67907;
});
/**
 * Returns a DateTime for today at midnight in the UTC time zone.
 */
cljs_time.core.today_at_midnight = (function cljs_time$core$today_at_midnight(){
return cljs_time.core.at_midnight(cljs_time.core.now());
});
/**
 * Returns a DateTime for the begining of the Unix epoch in the UTC time zone.
 */
cljs_time.core.epoch = (function cljs_time$core$epoch(){
var G__67908 = (new goog.date.UtcDateTime());
G__67908.setTime((0));

return G__67908;
});
/**
 * Constructs and returns a new DateTime at midnight in UTC.
 * 
 *   Specify the year, month of year, day of month. Note that month and day are
 *   1-indexed. Any number of least-significant components can be ommited, in
 *   which case they will default to 1.
 */
cljs_time.core.date_midnight = (function cljs_time$core$date_midnight(var_args){
var G__67910 = arguments.length;
switch (G__67910) {
case 1:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3(year,(1),(1));
}));

(cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3(year,month,(1));
}));

(cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return (new goog.date.UtcDateTime(year,(month - (1)),day));
}));

(cljs_time.core.date_midnight.cljs$lang$maxFixedArity = 3);

/**
 * Constructs and returns a new DateTime in UTC.
 * 
 *   Specify the year, month of year, day of month, hour of day, minute if hour,
 *   second of minute, and millisecond of second. Note that month and day are
 *   1-indexed while hour, second, minute, and millis are 0-indexed.
 * 
 *   Any number of least-significant components can be ommited, in which case
 *   they will default to 1 or 0 as appropriate.
 */
cljs_time.core.date_time = (function cljs_time$core$date_time(var_args){
var G__67912 = arguments.length;
switch (G__67912) {
case 1:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7(year,(1),(1),(0),(0),(0),(0));
}));

(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7(year,month,(1),(0),(0),(0),(0));
}));

(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,(0),(0),(0),(0));
}));

(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$4 = (function (year,month,day,hour){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,(0),(0),(0));
}));

(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$5 = (function (year,month,day,hour,minute){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,minute,(0),(0));
}));

(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$6 = (function (year,month,day,hour,minute,second){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,minute,second,(0));
}));

(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.UtcDateTime(year,(month - (1)),day,hour,minute,second,millis));
}));

(cljs_time.core.date_time.cljs$lang$maxFixedArity = 7);

/**
 * Constructs and returns a new local DateTime.
 * Specify the year, month of year, day of month, hour of day, minute of hour,
 * second of minute, and millisecond of second. Note that month and day are
 * 1-indexed while hour, second, minute, and millis are 0-indexed.
 * Any number of least-significant components can be ommited, in which case
 * they will default to 1 or 0 as appropriate.
 */
cljs_time.core.local_date_time = (function cljs_time$core$local_date_time(var_args){
var G__67915 = arguments.length;
switch (G__67915) {
case 1:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7(year,(1),(1),(0),(0),(0),(0));
}));

(cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,(1),(0),(0),(0),(0));
}));

(cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,(0),(0),(0),(0));
}));

(cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$4 = (function (year,month,day,hour){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,(0),(0),(0));
}));

(cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5 = (function (year,month,day,hour,minute){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,minute,(0),(0));
}));

(cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$6 = (function (year,month,day,hour,minute,second){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,minute,second,(0));
}));

(cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.DateTime(year,(month - (1)),day,hour,minute,second,millis));
}));

(cljs_time.core.local_date_time.cljs$lang$maxFixedArity = 7);

/**
 * Constructs and returns a new goog.date.Date in the local timezone.
 * Specify the year, month, and day.
 */
cljs_time.core.local_date = (function cljs_time$core$local_date(year,month,day){
return (new goog.date.Date(year,(month - (1)),day));
});
/**
 * Constructs and returns a new goog.date.Date representing today in the local timezone.
 */
cljs_time.core.today = (function cljs_time$core$today(){
return (new goog.date.Date((new Date(cljs_time.core._STAR_ms_fn_STAR_.call(null)))));
});
/**
 * Returns a timezone map for the given offset, specified either in hours or
 *   hours and minutes.
 */
cljs_time.core.time_zone_for_offset = (function cljs_time$core$time_zone_for_offset(var_args){
var G__67921 = arguments.length;
switch (G__67921) {
case 1:
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$1 = (function (hours){
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2(hours,null);
}));

(cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
var sign = (((hours < (0)))?new cljs.core.Keyword(null,"-","-",-2112348439):new cljs.core.Keyword(null,"+","+",1913524883));
var fmt = ["UTC%s%02d",(cljs.core.truth_(minutes)?":%02d":null)].join('');
var hours__$1 = (((hours < (0)))?((-1) * hours):hours);
var tz_name = (cljs.core.truth_(minutes)?cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic(fmt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(sign),hours__$1,minutes], 0)):cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic(fmt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(sign),hours__$1], 0)));
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),tz_name,new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sign,hours__$1,(function (){var or__5045__auto__ = minutes;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})(),(0)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),"-",new cljs.core.Keyword(null,"names","names",-1943074658),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tz_name], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("cljs-time.core","time-zone","cljs-time.core/time-zone",751963705)], null));
}));

(cljs_time.core.time_zone_for_offset.cljs$lang$maxFixedArity = 2);

/**
 * Returns the default timezone map for the current environment.
 */
cljs_time.core.default_time_zone = (function cljs_time$core$default_time_zone(){
var offset = (function (){var G__67923 = (new goog.date.DateTime());
G__67923.setTime(cljs_time.core._STAR_ms_fn_STAR_.call(null));

return G__67923;
})().getTimezoneOffset();
var hours = (((-1) * offset) / (60));
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2((hours | (0)),cljs.core.mod(hours,(1)));
});
/**
 * Assuming `dt` is in the UTC timezone, returns a DateTime
 *   corresponding to the same absolute instant in time as the given
 *   DateTime, but with calendar fields corresponding to the default
 *   (local) timezone.
 */
cljs_time.core.to_default_time_zone = (function cljs_time$core$to_default_time_zone(dt){
return (new goog.date.DateTime(dt));
});
/**
 * Assuming `dt` is in the Local timezone, returns a UtcDateTime
 *   corresponding to the same absolute instant in time as the given
 *   DateTime, but with calendar fields corresponding to the UTC
 *   timezone.
 */
cljs_time.core.to_utc_time_zone = (function cljs_time$core$to_utc_time_zone(dt){
return goog.date.UtcDateTime.fromTimestamp(dt.getTime());
});
/**
 * Assuming `dt` is in the UTC timezone, returns a DateTime
 *   corresponding to the same point in calendar time as the given
 *   DateTime, but for a correspondingly different absolute instant in
 *   time in the default (local) timezone.
 * 
 *   Note: This implementation uses the ECMAScript 5.1 implementation which
 *   trades some historical daylight savings transition accuracy for simplicity.
 *   see http://es5.github.io/#x15.9.1.8
 *   
 */
cljs_time.core.from_default_time_zone = (function cljs_time$core$from_default_time_zone(dt){
return (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate(),dt.getHours(),dt.getMinutes(),dt.getSeconds(),dt.getMilliseconds()));
});
/**
 * Assuming `dt` is in the local timezone, returns a UtcDateTime
 *   corresponding to the same point in calendar time as the given
 *   DateTime, but for a correspondingly different absolute instant in
 *   time in the UTC timezone.
 * 
 *   Note: This implementation uses the ECMAScript 5.1 implementation which
 *   trades some historical daylight savings transition accuracy for simplicity.
 *   see http://es5.github.io/#x15.9.1.8
 *   
 */
cljs_time.core.from_utc_time_zone = (function cljs_time$core$from_utc_time_zone(dt){
var year = dt.getYear();
var month = dt.getMonth();
var date = dt.getDate();
if(cljs.core.truth_((function (){var G__67924 = goog.date.Date;
var G__67925 = cljs.core.type(dt);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__67924,G__67925) : cljs_time.core._EQ_.call(null,G__67924,G__67925));
})())){
return (new goog.date.UtcDateTime(year,month,date));
} else {
return (new goog.date.UtcDateTime(year,month,date,dt.getHours(),dt.getMinutes(),dt.getSeconds(),dt.getMilliseconds()));
}
});
/**
 * Given a number, returns a Period representing that many years.
 *   Without an argument, returns a Period representing only years.
 */
cljs_time.core.years = (function cljs_time$core$years(var_args){
var G__67931 = arguments.length;
switch (G__67931) {
case 0:
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.core.years.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs_time.core.years.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"years","years",-1298579689),n);
}));

(cljs_time.core.years.cljs$lang$maxFixedArity = 1);

/**
 * Given a number, returns a Period representing that many months.
 *   Without an argument, returns a Period representing only months.
 */
cljs_time.core.months = (function cljs_time$core$months(var_args){
var G__67933 = arguments.length;
switch (G__67933) {
case 0:
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.core.months.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs_time.core.months.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"months","months",-45571637),n);
}));

(cljs_time.core.months.cljs$lang$maxFixedArity = 1);

/**
 * Given a number, returns a Period representing that many weeks.
 *   Without an argument, returns a Period representing only weeks.
 */
cljs_time.core.weeks = (function cljs_time$core$weeks(var_args){
var G__67935 = arguments.length;
switch (G__67935) {
case 0:
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"weeks","weeks",1844596125),n);
}));

(cljs_time.core.weeks.cljs$lang$maxFixedArity = 1);

/**
 * Given a number, returns a Period representing that many days.
 *   Without an argument, returns a Period representing only days.
 */
cljs_time.core.days = (function cljs_time$core$days(var_args){
var G__67937 = arguments.length;
switch (G__67937) {
case 0:
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.core.days.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs_time.core.days.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"days","days",-1394072564),n);
}));

(cljs_time.core.days.cljs$lang$maxFixedArity = 1);

/**
 * Given a number, returns a Period representing that many hours.
 *   Without an argument, returns a Period representing only hours.
 */
cljs_time.core.hours = (function cljs_time$core$hours(var_args){
var G__67939 = arguments.length;
switch (G__67939) {
case 0:
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.core.hours.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hours","hours",58380855),n);
}));

(cljs_time.core.hours.cljs$lang$maxFixedArity = 1);

/**
 * Given a number, returns a Period representing that many minutes.
 *   Without an argument, returns a Period representing only minutes.
 */
cljs_time.core.minutes = (function cljs_time$core$minutes(var_args){
var G__67941 = arguments.length;
switch (G__67941) {
case 0:
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"minutes","minutes",1319166394),n);
}));

(cljs_time.core.minutes.cljs$lang$maxFixedArity = 1);

/**
 * Given a number, returns a Period representing that many seconds.
 *   Without an argument, returns a Period representing only seconds.
 */
cljs_time.core.seconds = (function cljs_time$core$seconds(var_args){
var G__67943 = arguments.length;
switch (G__67943) {
case 0:
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"seconds","seconds",-445266194),n);
}));

(cljs_time.core.seconds.cljs$lang$maxFixedArity = 1);

/**
 * Given a number, returns a Period representing that many milliseconds.
 *   Without an argument, returns a Period representing only milliseconds.
 */
cljs_time.core.millis = (function cljs_time$core$millis(var_args){
var G__67945 = arguments.length;
switch (G__67945) {
case 0:
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.core.millis.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"millis","millis",-1338288387),n);
}));

(cljs_time.core.millis.cljs$lang$maxFixedArity = 1);

/**
 * Returns a new date/time corresponding to the given date/time moved
 *   forwards by the given Period(s).
 */
cljs_time.core.plus = (function cljs_time$core$plus(var_args){
var G__67951 = arguments.length;
switch (G__67951) {
case 2:
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___68560 = arguments.length;
var i__5770__auto___68561 = (0);
while(true){
if((i__5770__auto___68561 < len__5769__auto___68560)){
args_arr__5794__auto__.push((arguments[i__5770__auto___68561]));

var G__68562 = (i__5770__auto___68561 + (1));
i__5770__auto___68561 = G__68562;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2 = (function (dt,p){
return cljs_time.core.plus_(dt,p);
}));

(cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic = (function (dt,p,ps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs_time.core.plus_,cljs_time.core.plus_(dt,p),ps);
}));

/** @this {Function} */
(cljs_time.core.plus.cljs$lang$applyTo = (function (seq67948){
var G__67949 = cljs.core.first(seq67948);
var seq67948__$1 = cljs.core.next(seq67948);
var G__67950 = cljs.core.first(seq67948__$1);
var seq67948__$2 = cljs.core.next(seq67948__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67949,G__67950,seq67948__$2);
}));

(cljs_time.core.plus.cljs$lang$maxFixedArity = (2));

/**
 * Returns a new date/time object corresponding to the given date/time
 *   moved backwards by the given Period(s).
 */
cljs_time.core.minus = (function cljs_time$core$minus(var_args){
var G__67960 = arguments.length;
switch (G__67960) {
case 2:
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___68564 = arguments.length;
var i__5770__auto___68565 = (0);
while(true){
if((i__5770__auto___68565 < len__5769__auto___68564)){
args_arr__5794__auto__.push((arguments[i__5770__auto___68565]));

var G__68566 = (i__5770__auto___68565 + (1));
i__5770__auto___68565 = G__68566;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2 = (function (dt,p){
return cljs_time.core.minus_(dt,p);
}));

(cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic = (function (dt,p,ps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs_time.core.minus_,cljs_time.core.minus_(dt,p),ps);
}));

/** @this {Function} */
(cljs_time.core.minus.cljs$lang$applyTo = (function (seq67957){
var G__67958 = cljs.core.first(seq67957);
var seq67957__$1 = cljs.core.next(seq67957);
var G__67959 = cljs.core.first(seq67957__$1);
var seq67957__$2 = cljs.core.next(seq67957__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67958,G__67959,seq67957__$2);
}));

(cljs_time.core.minus.cljs$lang$maxFixedArity = (2));

/**
 * Returns a DateTime a supplied period before the present.
 * 
 *   e.g. `(-> 5 years ago)`
 */
cljs_time.core.ago = (function cljs_time$core$ago(period){
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.now(),period);
});
/**
 * Returns a DateTime for yesterday relative to now
 */
cljs_time.core.yesterday = (function cljs_time$core$yesterday(){
return cljs_time.core.ago(cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1)));
});
/**
 * Returns a DateTime a supplied period after the present.
 *   e.g. `(-> 30 minutes from-now)`
 */
cljs_time.core.from_now = (function cljs_time$core$from_now(period){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.now(),period);
});
/**
 * Returns the earliest of the supplied DateTimes
 */
cljs_time.core.earliest = (function cljs_time$core$earliest(var_args){
var G__67962 = arguments.length;
switch (G__67962) {
case 2:
return cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$2 = (function (dt1,dt2){
if(cljs.core.truth_(cljs_time.core.before_QMARK_(dt1,dt2))){
return dt1;
} else {
return dt2;
}
}));

(cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$1 = (function (dts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs_time.core.earliest,dts);
}));

(cljs_time.core.earliest.cljs$lang$maxFixedArity = 2);

/**
 * Returns the latest of the supplied DateTimes
 */
cljs_time.core.latest = (function cljs_time$core$latest(var_args){
var G__67964 = arguments.length;
switch (G__67964) {
case 2:
return cljs_time.core.latest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.core.latest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.core.latest.cljs$core$IFn$_invoke$arity$2 = (function (dt1,dt2){
if(cljs.core.truth_(cljs_time.core.after_QMARK_(dt1,dt2))){
return dt1;
} else {
return dt2;
}
}));

(cljs_time.core.latest.cljs$core$IFn$_invoke$arity$1 = (function (dts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs_time.core.latest,dts);
}));

(cljs_time.core.latest.cljs$lang$maxFixedArity = 2);

/**
 * Returns the start DateTime of an Interval.
 */
cljs_time.core.start = (function cljs_time$core$start(in$){
return new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(in$);
});
/**
 * Returns the end DateTime of an Interval.
 */
cljs_time.core.end = (function cljs_time$core$end(in$){
return new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(in$);
});
/**
 * Returns an Interval with an end DateTime the specified Period after the end
 *   of the given Interval
 */
cljs_time.core.extend = (function cljs_time$core$extend(var_args){
var args__5775__auto__ = [];
var len__5769__auto___68569 = arguments.length;
var i__5770__auto___68570 = (0);
while(true){
if((i__5770__auto___68570 < len__5769__auto___68569)){
args__5775__auto__.push((arguments[i__5770__auto___68570]));

var G__68571 = (i__5770__auto___68570 + (1));
i__5770__auto___68570 = G__68571;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic = (function (in$,by){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(in$,new cljs.core.Keyword(null,"end","end",-268185958),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs_time.core.plus,cljs_time.core.end(in$),by));
}));

(cljs_time.core.extend.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_time.core.extend.cljs$lang$applyTo = (function (seq67965){
var G__67966 = cljs.core.first(seq67965);
var seq67965__$1 = cljs.core.next(seq67965);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67966,seq67965__$1);
}));

cljs_time.core.month_range = (function cljs_time$core$month_range(p__67969){
var map__67970 = p__67969;
var map__67970__$1 = cljs.core.__destructure_map(map__67970);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67970__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67970__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__67968_SHARP_){
return cljs.core.not(cljs_time.core.after_QMARK_(p1__67968_SHARP_,end));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67967_SHARP_){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(start,cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((p1__67967_SHARP_ + (1))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});
cljs_time.core.total_days_in_whole_months = (function cljs_time$core$total_days_in_whole_months(interval){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67971_SHARP_){
return p1__67971_SHARP_.getNumberOfDaysInMonth();
}),cljs_time.core.month_range(interval));
});
/**
 * Returns the number of months in the given Interval.
 * 
 *   For example, the interval 2nd Jan 2012 midnight to 2nd Feb 2012 midnight,
 *   returns 1 month.
 * 
 *   Likewise, 29th Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
 * 
 *   But also, 31st Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
 * 
 *   And, 28th Dec 2012 midnight to 28th Feb 2013 midnight returns 2 months.
 */
cljs_time.core.in_months_ = (function cljs_time$core$in_months_(p__67972){
var map__67973 = p__67972;
var map__67973__$1 = cljs.core.__destructure_map(map__67973);
var interval = map__67973__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67973__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67973__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return cljs.core.count(cljs_time.core.total_days_in_whole_months(interval));
});
/**
 * Returns the number of standard years in the given Interval.
 */
cljs_time.core.in_years_ = (function cljs_time$core$in_years_(p__67974){
var map__67975 = p__67974;
var map__67975__$1 = cljs.core.__destructure_map(map__67975);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67975__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67975__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var sm = cljs_time.core.month(start);
var sd = cljs_time.core.day(start);
var em = cljs_time.core.month(end);
var ed = cljs_time.core.day(end);
var d1 = (cljs.core.truth_((function (){var and__5043__auto__ = (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(sm,(2)) : cljs_time.core._EQ_.call(null,sm,(2)));
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(sd,(29)) : cljs_time.core._EQ_.call(null,sd,(29)));
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(em,(2)) : cljs_time.core._EQ_.call(null,em,(2)));
if(cljs.core.truth_(and__5043__auto____$2)){
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(ed,(28)) : cljs_time.core._EQ_.call(null,ed,(28)));
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())?(0):(cljs.core.truth_(cljs_time.core.before_QMARK_(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),sm,sd),cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),em,ed)))?(0):(cljs.core.truth_(cljs_time.core.after_QMARK_(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),sm,sd),cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),em,ed)))?(1):(0)
)));
return ((cljs_time.core.year(end) - cljs_time.core.year(start)) - d1);
});
cljs_time.core.conversion_error = (function cljs_time$core$conversion_error(from,to){
var from__$1 = clojure.string.capitalize(cljs.core.name(from));
var to__$1 = cljs.core.name(to);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%s cannot be converted to %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([from__$1,to__$1], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"unsupported-operation","unsupported-operation",1890540953)], null));
});
(cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__67976){
var map__67977 = p__67976;
var map__67977__$1 = cljs.core.__destructure_map(map__67977);
var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67977__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67977__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67977__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67977__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67977__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67977__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67977__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67977__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var map__67978 = this;
var map__67978__$1 = cljs.core.__destructure_map(map__67978);
var millis__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67978__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67978__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67978__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67978__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67978__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67978__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67978__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67978__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
if(cljs.core.truth_(months__$1)){
return cljs_time.core.conversion_error(new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.Keyword(null,"millis","millis",-1338288387));
} else {
if(cljs.core.truth_(years__$1)){
return cljs_time.core.conversion_error(new cljs.core.Keyword(null,"years","years",-1298579689),new cljs.core.Keyword(null,"millis","millis",-1338288387));
} else {
return (((((millis__$1 + (seconds__$1 * (1000))) + ((minutes__$1 * (60)) * (1000))) + (((hours__$1 * (60)) * (60)) * (1000))) + ((((days__$1 * (24)) * (60)) * (60)) * (1000))) + (((((weeks__$1 * (7)) * (24)) * (60)) * (60)) * (1000)));

}
}
}));

(cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_millis(this$__$1) / (1000)) | (0));
}));

(cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_seconds(this$__$1) / (60)) | (0));
}));

(cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_minutes(this$__$1) / (60)) | (0));
}));

(cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_hours(this$__$1) / (24)) | (0));
}));

(cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_days(this$__$1) / (7)) | (0));
}));

(cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 = (function (p__67979){
var map__67980 = p__67979;
var map__67980__$1 = cljs.core.__destructure_map(map__67980);
var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67980__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67980__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67980__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67980__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67980__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67980__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67980__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67980__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var map__67981 = this;
var map__67981__$1 = cljs.core.__destructure_map(map__67981);
var millis__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67981__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67981__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67981__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67981__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67981__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67981__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67981__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67981__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
if(cljs.core.truth_(millis__$1)){
return cljs_time.core.conversion_error(new cljs.core.Keyword(null,"millis","millis",-1338288387),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(seconds__$1)){
return cljs_time.core.conversion_error(new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(minutes__$1)){
return cljs_time.core.conversion_error(new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(hours__$1)){
return cljs_time.core.conversion_error(new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(days__$1)){
return cljs_time.core.conversion_error(new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(weeks__$1)){
return cljs_time.core.conversion_error(new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(months__$1)){
return (months__$1 + ((function (){var or__5045__auto__ = years__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})() * (12)));
} else {
if(cljs.core.truth_(years__$1)){
return (years__$1 * (12));
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
}));

(cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 = (function (p__67982){
var map__67983 = p__67982;
var map__67983__$1 = cljs.core.__destructure_map(map__67983);
var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67983__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67983__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67983__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67983__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67983__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67983__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67983__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67983__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var map__67984 = this;
var map__67984__$1 = cljs.core.__destructure_map(map__67984);
var millis__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67984__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67984__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67984__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67984__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67984__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67984__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67984__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67984__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
if(cljs.core.truth_(millis__$1)){
return cljs_time.core.conversion_error(new cljs.core.Keyword(null,"millis","millis",-1338288387),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(seconds__$1)){
return cljs_time.core.conversion_error(new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(minutes__$1)){
return cljs_time.core.conversion_error(new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(hours__$1)){
return cljs_time.core.conversion_error(new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(days__$1)){
return cljs_time.core.conversion_error(new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(weeks__$1)){
return cljs_time.core.conversion_error(new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(months__$1)){
return (((months__$1 / (12)) + years__$1) | (0));
} else {
if(cljs.core.truth_(years__$1)){
return years__$1;
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
}));

(cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__67985){
var map__67986 = p__67985;
var map__67986__$1 = cljs.core.__destructure_map(map__67986);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67986__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67986__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__67987 = this;
var map__67987__$1 = cljs.core.__destructure_map(map__67987);
var start__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67987__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67987__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return (end__$1.getTime() - start__$1.getTime());
}));

(cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_millis(this$__$1) / (1000)) | (0));
}));

(cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_seconds(this$__$1) / (60)) | (0));
}));

(cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_minutes(this$__$1) / (60)) | (0));
}));

(cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_hours(this$__$1) / (24)) | (0));
}));

(cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_days(this$__$1) / (7)) | (0));
}));

(cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.in_months_(this$__$1);
}));

(cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.in_years_(this$__$1);
}));
/**
 * With 2 arguments: Returns true if the given Interval contains the given
 *   DateTime. Note that if the DateTime is exactly equal to the
 *   end of the interval, this function returns false.
 * 
 *   With 3 arguments: Returns true if the start DateTime is
 *   equal to or before and the end DateTime is equal to or after the test
 *   DateTime.
 */
cljs_time.core.within_QMARK_ = (function cljs_time$core$within_QMARK_(var_args){
var G__67989 = arguments.length;
switch (G__67989) {
case 2:
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__67990,date){
var map__67991 = p__67990;
var map__67991__$1 = cljs.core.__destructure_map(map__67991);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67991__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67991__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3(start,end,date);
}));

(cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (start,end,date){
var or__5045__auto__ = (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(start,date) : cljs_time.core._EQ_.call(null,start,date));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = cljs_time.core.before_QMARK_(start,date);
if(cljs.core.truth_(and__5043__auto__)){
return cljs_time.core.after_QMARK_(end,date);
} else {
return and__5043__auto__;
}
}
}));

(cljs_time.core.within_QMARK_.cljs$lang$maxFixedArity = 3);

/**
 * With 2 arguments: Returns true of the two given Intervals overlap.
 *   Note that intervals that satisfy abuts? do not satisfy overlaps?
 * 
 *   With 4 arguments: Returns true if the range specified by start-a and end-a
 *   overlaps with the range specified by start-b and end-b.
 */
cljs_time.core.overlaps_QMARK_ = (function cljs_time$core$overlaps_QMARK_(var_args){
var G__67993 = arguments.length;
switch (G__67993) {
case 2:
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__67998,p__67999){
var map__68000 = p__67998;
var map__68000__$1 = cljs.core.__destructure_map(map__68000);
var start_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68000__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68000__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__68001 = p__67999;
var map__68001__$1 = cljs.core.__destructure_map(map__68001);
var start_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68001__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68001__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var and__5043__auto__ = cljs.core.not((function (){var or__5045__auto__ = (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_a,end_b) : cljs_time.core._EQ_.call(null,start_a,end_b));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(end_a,start_b) : cljs_time.core._EQ_.call(null,end_a,start_b));
}
})());
if(and__5043__auto__){
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4(start_a,end_a,start_b,end_b);
} else {
return and__5043__auto__;
}
}));

(cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (start_a,end_a,start_b,end_b){
var or__5045__auto__ = (function (){var and__5043__auto__ = cljs_time.core.before_QMARK_(start_b,end_a);
if(cljs.core.truth_(and__5043__auto__)){
return cljs_time.core.after_QMARK_(end_b,start_a);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var and__5043__auto__ = cljs_time.core.after_QMARK_(end_b,start_a);
if(cljs.core.truth_(and__5043__auto__)){
return cljs_time.core.before_QMARK_(start_b,end_a);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_a,end_b) : cljs_time.core._EQ_.call(null,start_a,end_b));
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_b,end_a) : cljs_time.core._EQ_.call(null,start_b,end_a));
}
}
}
}));

(cljs_time.core.overlaps_QMARK_.cljs$lang$maxFixedArity = 4);

/**
 * Returns an Interval representing the overlap of the specified Intervals.
 *  Returns nil if the Intervals do not overlap.
 *  The first argument must not be nil.
 *  If the second argument is nil then the overlap of the first argument
 *  and a zero duration interval with both start and end times equal to the
 *  current time is returned.
 */
cljs_time.core.overlap = (function cljs_time$core$overlap(i_a,i_b){
if((i_b == null)){
var n = cljs_time.core.now();
var G__68002 = i_a;
var G__68003 = cljs_time.core.interval(n,n);
return (cljs_time.core.overlap.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core.overlap.cljs$core$IFn$_invoke$arity$2(G__68002,G__68003) : cljs_time.core.overlap.call(null,G__68002,G__68003));
} else {
if(cljs.core.truth_(cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2(i_a,i_b))){
return cljs_time.core.interval(cljs_time.core.latest.cljs$core$IFn$_invoke$arity$2(cljs_time.core.start(i_a),cljs_time.core.start(i_b)),cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$2(cljs_time.core.end(i_a),cljs_time.core.end(i_b)));
} else {
return null;

}
}
});
/**
 * Returns true if Interval a abuts b, i.e. then end of a is exactly the
 *   beginning of b.
 */
cljs_time.core.abuts_QMARK_ = (function cljs_time$core$abuts_QMARK_(p__68004,p__68005){
var map__68006 = p__68004;
var map__68006__$1 = cljs.core.__destructure_map(map__68006);
var start_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68006__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68006__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__68007 = p__68005;
var map__68007__$1 = cljs.core.__destructure_map(map__68007);
var start_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68007__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68007__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var or__5045__auto__ = (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_a,end_b) : cljs_time.core._EQ_.call(null,start_a,end_b));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(end_a,start_b) : cljs_time.core._EQ_.call(null,end_a,start_b));
}
});
cljs_time.core.date_QMARK_ = (function cljs_time$core$date_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs_time$core$DateTimeProtocol$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs_time.core.DateTimeProtocol,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs_time.core.DateTimeProtocol,x);
}
});
cljs_time.core.interval_QMARK_ = (function cljs_time$core$interval_QMARK_(x){
return (x instanceof cljs_time.core.Interval);
});
cljs_time.core.period_QMARK_ = (function cljs_time$core$period_QMARK_(x){
return (x instanceof cljs_time.core.Period);
});
cljs_time.core.period_type_QMARK_ = (function cljs_time$core$period_type_QMARK_(type,x){
return ((cljs_time.core.period_QMARK_(x)) && (cljs.core.contains_QMARK_(x,type)));
});
/**
 * Returns true if the given value is an instance of Years
 */
cljs_time.core.years_QMARK_ = (function cljs_time$core$years_QMARK_(val){
return cljs_time.core.period_type_QMARK_(new cljs.core.Keyword(null,"years","years",-1298579689),val);
});
/**
 * Returns true if the given value is an instance of Months
 */
cljs_time.core.months_QMARK_ = (function cljs_time$core$months_QMARK_(val){
return cljs_time.core.period_type_QMARK_(new cljs.core.Keyword(null,"months","months",-45571637),val);
});
/**
 * Returns true if the given value is an instance of Weeks
 */
cljs_time.core.weeks_QMARK_ = (function cljs_time$core$weeks_QMARK_(val){
return cljs_time.core.period_type_QMARK_(new cljs.core.Keyword(null,"weeks","weeks",1844596125),val);
});
/**
 * Returns true if the given value is an instance of Days
 */
cljs_time.core.days_QMARK_ = (function cljs_time$core$days_QMARK_(val){
return cljs_time.core.period_type_QMARK_(new cljs.core.Keyword(null,"days","days",-1394072564),val);
});
/**
 * Returns true if the given value is an instance of Hours
 */
cljs_time.core.hours_QMARK_ = (function cljs_time$core$hours_QMARK_(val){
return cljs_time.core.period_type_QMARK_(new cljs.core.Keyword(null,"hours","hours",58380855),val);
});
/**
 * Returns true if the given value is an instance of Minutes
 */
cljs_time.core.minutes_QMARK_ = (function cljs_time$core$minutes_QMARK_(val){
return cljs_time.core.period_type_QMARK_(new cljs.core.Keyword(null,"minutes","minutes",1319166394),val);
});
/**
 * Returns true if the given value is an instance of Seconds
 */
cljs_time.core.seconds_QMARK_ = (function cljs_time$core$seconds_QMARK_(val){
return cljs_time.core.period_type_QMARK_(new cljs.core.Keyword(null,"seconds","seconds",-445266194),val);
});
cljs_time.core.mins_ago = (function cljs_time$core$mins_ago(d){
return cljs_time.core.in_minutes(cljs_time.core.interval(d,cljs_time.core.now()));
});
cljs_time.core.last_day_of_the_month = (function cljs_time$core$last_day_of_the_month(var_args){
var G__68021 = arguments.length;
switch (G__68021) {
case 1:
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.last_day_of_the_month_(dt);
}));

(cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.last_day_of_the_month_(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2(year,month));
}));

(cljs_time.core.last_day_of_the_month.cljs$lang$maxFixedArity = 2);

cljs_time.core.number_of_days_in_the_month = (function cljs_time$core$number_of_days_in_the_month(var_args){
var G__68028 = arguments.length;
switch (G__68028) {
case 1:
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2(cljs_time.core.year(dt),cljs_time.core.month(dt));
}));

(cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2(year,month).getDate();
}));

(cljs_time.core.number_of_days_in_the_month.cljs$lang$maxFixedArity = 2);

cljs_time.core.first_day_of_the_month = (function cljs_time$core$first_day_of_the_month(var_args){
var G__68030 = arguments.length;
switch (G__68030) {
case 1:
return cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.first_day_of_the_month_(dt);
}));

(cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.first_day_of_the_month_(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2(year,month));
}));

(cljs_time.core.first_day_of_the_month.cljs$lang$maxFixedArity = 2);


/**
 * @interface
 */
cljs_time.core.IToPeriod = function(){};

var cljs_time$core$IToPeriod$__GT_period$dyn_68577 = (function (obj){
var x__5393__auto__ = (((obj == null))?null:obj);
var m__5394__auto__ = (cljs_time.core.__GT_period[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__5394__auto__.call(null,obj));
} else {
var m__5392__auto__ = (cljs_time.core.__GT_period["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__5392__auto__.call(null,obj));
} else {
throw cljs.core.missing_protocol("IToPeriod.->period",obj);
}
}
});
cljs_time.core.__GT_period = (function cljs_time$core$__GT_period(obj){
if((((!((obj == null)))) && ((!((obj.cljs_time$core$IToPeriod$__GT_period$arity$1 == null)))))){
return obj.cljs_time$core$IToPeriod$__GT_period$arity$1(obj);
} else {
return cljs_time$core$IToPeriod$__GT_period$dyn_68577(obj);
}
});

(cljs_time.core.Interval.prototype.cljs_time$core$IToPeriod$ = cljs.core.PROTOCOL_SENTINEL);

(cljs_time.core.Interval.prototype.cljs_time$core$IToPeriod$__GT_period$arity$1 = (function (p__68036){
var map__68037 = p__68036;
var map__68037__$1 = cljs.core.__destructure_map(map__68037);
var interval = map__68037__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68037__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68037__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__68038 = this;
var map__68038__$1 = cljs.core.__destructure_map(map__68038);
var interval__$1 = map__68038__$1;
var start__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68038__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68038__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var years = cljs_time.core.in_years(interval__$1);
var start_year = cljs_time.core.year(start__$1);
var leap_years = cljs.core.count(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.false_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.core.leap_year_QMARK_,cljs.core.range.cljs$core$IFn$_invoke$arity$2(start_year,(start_year + years)))));
var start_month = cljs_time.core.month(start__$1);
var days_in_months = cljs_time.core.total_days_in_whole_months(interval__$1);
var months = (cljs.core.count(days_in_months) - (years * (12)));
var days_to_remove = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,days_in_months);
var days = (cljs_time.core.in_days(interval__$1) - days_to_remove);
var hours_to_remove = ((24) * (days + days_to_remove));
var hours = (cljs_time.core.in_hours(interval__$1) - hours_to_remove);
var minutes_to_remove = ((60) * (hours + hours_to_remove));
var minutes = (cljs_time.core.in_minutes(interval__$1) - minutes_to_remove);
var seconds_to_remove = ((60) * (minutes + minutes_to_remove));
var seconds = (cljs_time.core.in_seconds(interval__$1) - seconds_to_remove);
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"years","years",-1298579689),years,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"months","months",-45571637),months,new cljs.core.Keyword(null,"days","days",-1394072564),days,new cljs.core.Keyword(null,"hours","hours",58380855),hours,new cljs.core.Keyword(null,"minutes","minutes",1319166394),minutes,new cljs.core.Keyword(null,"seconds","seconds",-445266194),seconds,new cljs.core.Keyword(null,"millis","millis",-1338288387),(cljs_time.core.in_millis(interval__$1) - ((1000) * (seconds + seconds_to_remove)))], 0));
}));

(cljs_time.core.Period.prototype.cljs_time$core$IToPeriod$ = cljs.core.PROTOCOL_SENTINEL);

(cljs_time.core.Period.prototype.cljs_time$core$IToPeriod$__GT_period$arity$1 = (function (period){
var period__$1 = this;
return period__$1;
}));
cljs_time.core.today_at = (function cljs_time$core$today_at(var_args){
var G__68040 = arguments.length;
switch (G__68040) {
case 4:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4 = (function (hours,minutes,seconds,millis){
var G__68042 = cljs_time.core.now();
G__68042.setHours(hours);

G__68042.setMinutes(minutes);

G__68042.setSeconds(seconds);

G__68042.setMilliseconds(millis);

return G__68042;
}));

(cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3 = (function (hours,minutes,seconds){
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4(hours,minutes,seconds,(0));
}));

(cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3(hours,minutes,(0));
}));

(cljs_time.core.today_at.cljs$lang$maxFixedArity = 4);

cljs_time.core.do_at_STAR_ = (function cljs_time$core$do_at_STAR_(base_date_time,body_fn){
var _STAR_ms_fn_STAR__orig_val__68047 = cljs_time.core._STAR_ms_fn_STAR_;
var _STAR_ms_fn_STAR__temp_val__68048 = cljs_time.core.static_ms_fn(base_date_time.getTime());
(cljs_time.core._STAR_ms_fn_STAR_ = _STAR_ms_fn_STAR__temp_val__68048);

try{return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}finally {(cljs_time.core._STAR_ms_fn_STAR_ = _STAR_ms_fn_STAR__orig_val__68047);
}});
/**
 * Floors the given date-time dt to the given time unit dt-fn,
 *  e.g. (floor (now) hour) returns (now) for all units
 *  up to and including the hour
 */
cljs_time.core.floor = (function cljs_time$core$floor(dt,dt_fn){
var dt_fns = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_time.core.year,cljs_time.core.month,cljs_time.core.day,cljs_time.core.hour,cljs_time.core.minute,cljs_time.core.second,cljs_time.core.milli], null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.core.date_time,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.apply,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,dt_fn),dt_fns),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dt_fn], null)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dt], null))));
});

//# sourceMappingURL=cljs_time.core.js.map
