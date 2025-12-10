!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[t] = "c0ec0a57-5876-4a67-909d-09b4a870930b",
        e._sentryDebugIdIdentifier = "sentry-dbid-c0ec0a57-5876-4a67-909d-09b4a870930b")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[7333], {
    57333: function(e, t, r) {
        r.d(t, {
            F7: function() {
                return k
            },
            HH: function() {
                return R
            },
            KG: function() {
                return B
            }
        });
        var n, a, u, o, i, l = r(67294);
        function c(e, t) {
            var r = {};
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
                    0 > t.indexOf(n[a]) && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
            return r
        }
        function s() {}
        function f(e) {
            return !!(e || "").match(/\d/)
        }
        function d(e) {
            return null == e
        }
        function v(e) {
            return d(e) || "number" == typeof e && isNaN(e) || "number" == typeof e && !isFinite(e)
        }
        function g(e) {
            return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
        }
        function m(e, t) {
            void 0 === t && (t = !0);
            var r = "-" === e[0]
              , n = r && t
              , a = (e = e.replace("-", "")).split(".");
            return {
                beforeDecimal: a[0],
                afterDecimal: a[1] || "",
                hasNegation: r,
                addNegation: n
            }
        }
        function p(e, t, r) {
            for (var n = "", a = r ? "0" : "", u = 0; u <= t - 1; u++)
                n += e[u] || a;
            return n
        }
        function h(e, t) {
            return Array(t + 1).join(e)
        }
        function S(e) {
            var t = e + ""
              , r = "-" === t[0] ? "-" : "";
            r && (t = t.substring(1));
            var n = t.split(/[eE]/g)
              , a = n[0]
              , u = n[1];
            if (!(u = Number(u)))
                return r + a;
            a = a.replace(".", "");
            var o = 1 + u
              , i = a.length;
            return o < 0 ? a = "0." + h("0", Math.abs(o)) + a : o >= i ? a += h("0", o - i) : a = (a.substring(0, o) || "0") + "." + a.substring(o),
            r + a
        }
        function b(e, t, r) {
            if (-1 !== ["", "-"].indexOf(e))
                return e;
            var n = (-1 !== e.indexOf(".") || r) && t
              , a = m(e)
              , u = a.beforeDecimal
              , o = a.afterDecimal
              , i = a.hasNegation
              , l = parseFloat("0." + (o || "0"))
              , c = (o.length <= t ? "0." + o : l.toFixed(t)).split(".")
              , s = u;
            return u && Number(c[0]) && (s = u.split("").reverse().reduce(function(e, t, r) {
                return e.length > r ? (Number(e[0]) + Number(t)).toString() + e.substring(1, e.length) : t + e
            }, c[0])),
            (i ? "-" : "") + s + (n ? "." : "") + p(c[1] || "", t, r)
        }
        function y(e, t) {
            if (e.value = e.value,
            null !== e) {
                if (e.createTextRange) {
                    var r = e.createTextRange();
                    return r.move("character", t),
                    r.select(),
                    !0
                }
                return e.selectionStart || 0 === e.selectionStart ? (e.focus(),
                e.setSelectionRange(t, t),
                !0) : (e.focus(),
                !1)
            }
        }
        (n = i || (i = {})).event = "event",
        n.props = "prop";
        var V = (a = function(e, t) {
            for (var r = 0, n = 0, a = e.length, u = t.length; e[r] === t[r] && r < a; )
                r++;
            for (; e[a - 1 - n] === t[u - 1 - n] && u - n > r && a - n > r; )
                n++;
            return {
                from: {
                    start: r,
                    end: a - n
                },
                to: {
                    start: r,
                    end: u - n
                }
            }
        }
        ,
        o = void 0,
        function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            return u && e.length === u.length && e.every(function(e, t) {
                return e === u[t]
            }) ? o : (u = e,
            o = a.apply(void 0, e))
        }
        )
          , w = function(e, t) {
            var r = Math.min(e.selectionStart, t);
            return {
                from: {
                    start: r,
                    end: e.selectionEnd
                },
                to: {
                    start: r,
                    end: t
                }
            }
        };
        function x(e) {
            return Math.max(e.selectionStart, e.selectionEnd)
        }
        function D(e) {
            return {
                from: {
                    start: 0,
                    end: 0
                },
                to: {
                    start: 0,
                    end: e.length
                },
                lastValue: ""
            }
        }
        function N(e, t) {
            return (void 0 === e && (e = " "),
            "string" == typeof e) ? e : e[t] || " "
        }
        function O(e) {
            var t = e.currentValue
              , r = e.formattedValue
              , n = e.currentValueIndex
              , a = e.formattedValueIndex;
            return t[n] === r[a]
        }
        function E(e, t, r, n) {
            var a = e.length;
            if (t = Math.min(Math.max(t, 0), a),
            "left" === n) {
                for (; t >= 0 && !r[t]; )
                    t--;
                -1 === t && (t = r.indexOf(!0))
            } else {
                for (; t <= a && !r[t]; )
                    t++;
                t > a && (t = r.lastIndexOf(!0))
            }
            return -1 === t && (t = a),
            t
        }
        function I(e) {
            for (var t = Array.from({
                length: e.length + 1
            }).map(function() {
                return !0
            }), r = 0, n = t.length; r < n; r++)
                t[r] = !!(f(e[r]) || f(e[r - 1]));
            return t
        }
        function C(e, t, r, n, a, u) {
            void 0 === u && (u = s);
            var o, i, c = (o = function(e, t) {
                var r, u;
                return v(e) ? (u = "",
                r = "") : r = "number" == typeof e || t ? n(u = "number" == typeof e ? S(e) : e) : n(u = a(e, void 0)),
                {
                    formattedValue: r,
                    numAsString: u
                }
            }
            ,
            (i = (0,
            l.useRef)(o)).current = o,
            (0,
            l.useRef)(function() {
                for (var e = [], t = arguments.length; t--; )
                    e[t] = arguments[t];
                return i.current.apply(i, e)
            }).current), f = (0,
            l.useState)(function() {
                return c(d(e) ? t : e, r)
            }), g = f[0], m = f[1], p = e, h = r;
            d(e) && (p = g.numAsString,
            h = !0);
            var b = c(p, h);
            return (0,
            l.useMemo)(function() {
                m(b)
            }, [b.formattedValue]),
            [g, function(e, t) {
                e.formattedValue !== g.formattedValue && m({
                    formattedValue: e.formattedValue,
                    numAsString: e.value
                }),
                u(e, t)
            }
            ]
        }
        function A(e) {
            return e.replace(/[^0-9]/g, "")
        }
        function j(e) {
            return e
        }
        function k(e) {
            var t = e.type;
            void 0 === t && (t = "text");
            var r = e.displayType;
            void 0 === r && (r = "input");
            var n = e.customInput
              , a = e.renderText
              , u = e.getInputRef
              , o = e.format;
            void 0 === o && (o = j);
            var d = e.removeFormatting;
            void 0 === d && (d = A);
            var v = e.defaultValue
              , g = e.valueIsNumericString
              , m = e.onValueChange
              , p = e.isAllowed
              , h = e.onChange;
            void 0 === h && (h = s);
            var S = e.onKeyDown;
            void 0 === S && (S = s);
            var b = e.onMouseUp;
            void 0 === b && (b = s);
            var D = e.onFocus;
            void 0 === D && (D = s);
            var N = e.onBlur;
            void 0 === N && (N = s);
            var k = e.value
              , T = e.getCaretBoundary;
            void 0 === T && (T = I);
            var F = e.isValidInputCharacter;
            void 0 === F && (F = f);
            var B = e.isCharacterSame
              , R = c(e, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"])
              , M = C(k, v, !!g, o, d, m)
              , K = M[0]
              , W = K.formattedValue
              , _ = K.numAsString
              , L = M[1]
              , P = (0,
            l.useRef)()
              , G = (0,
            l.useRef)({
                formattedValue: W,
                numAsString: _
            })
              , $ = function(e, t) {
                G.current = {
                    formattedValue: e.formattedValue,
                    numAsString: e.value
                },
                L(e, t)
            }
              , U = (0,
            l.useState)(!1)
              , H = U[0]
              , Z = U[1]
              , q = (0,
            l.useRef)(null)
              , z = (0,
            l.useRef)({
                setCaretTimeout: null,
                focusTimeout: null
            });
            (0,
            l.useEffect)(function() {
                return Z(!0),
                function() {
                    clearTimeout(z.current.setCaretTimeout),
                    clearTimeout(z.current.focusTimeout)
                }
            }, []);
            var J = o
              , Q = function(e, t) {
                var r = parseFloat(t);
                return {
                    formattedValue: e,
                    value: t,
                    floatValue: isNaN(r) ? void 0 : r
                }
            }
              , X = function(e, t, r) {
                (0 !== e.selectionStart || e.selectionEnd !== e.value.length) && (y(e, t),
                z.current.setCaretTimeout = setTimeout(function() {
                    e.value === r && e.selectionStart !== t && y(e, t)
                }, 0))
            }
              , Y = function(e, t, r) {
                return E(e, t, T(e), r)
            }
              , ee = function(e, t, r) {
                var n = T(t)
                  , a = function(e, t, r, n, a, u, o) {
                    void 0 === o && (o = O);
                    var i = a.findIndex(function(e) {
                        return e
                    })
                      , l = e.slice(0, i);
                    t || r.startsWith(l) || (t = l,
                    r = l + r,
                    n += l.length);
                    for (var c = r.length, s = e.length, f = {}, d = Array(c), v = 0; v < c; v++) {
                        d[v] = -1;
                        for (var g = 0; g < s; g++)
                            if (o({
                                currentValue: r,
                                lastValue: t,
                                formattedValue: e,
                                currentValueIndex: v,
                                formattedValueIndex: g
                            }) && !0 !== f[g]) {
                                d[v] = g,
                                f[g] = !0;
                                break
                            }
                    }
                    for (var m = n; m < c && (-1 === d[m] || !u(r[m])); )
                        m++;
                    var p = m === c || -1 === d[m] ? s : d[m];
                    for (m = n - 1; m > 0 && -1 === d[m]; )
                        m--;
                    var h = -1 === m || -1 === d[m] ? 0 : d[m] + 1;
                    return h > p ? p : n - h < p - n ? h : p
                }(t, W, e, r, n, F, B);
                return E(t, a, n)
            }
              , et = function(e) {
                var t, r = e.formattedValue;
                void 0 === r && (r = "");
                var n = e.input
                  , a = e.source
                  , u = e.event
                  , o = e.numAsString;
                if (n) {
                    var i = e.inputValue || n.value
                      , l = x(n);
                    n.value = r,
                    void 0 !== (t = ee(i, r, l)) && X(n, t, r)
                }
                r !== W && $(Q(r, o), {
                    event: u,
                    source: a
                })
            };
            (0,
            l.useEffect)(function() {
                var e = G.current
                  , t = e.formattedValue
                  , r = e.numAsString;
                (W !== t || _ !== r) && $(Q(W, _), {
                    event: void 0,
                    source: i.props
                })
            }, [W, _]);
            var er = q.current ? x(q.current) : void 0;
            ("undefined" != typeof window ? l.useLayoutEffect : l.useEffect)(function() {
                var e = q.current;
                if (W !== G.current.formattedValue && e) {
                    var t = ee(G.current.formattedValue, W, er);
                    e.value = W,
                    X(e, t, W)
                }
            }, [W]);
            var en = function(e, t, r) {
                var n = t.target
                  , a = Object.assign(Object.assign({}, P.current ? w(P.current, n.selectionEnd) : V(W, e)), {
                    lastValue: W
                })
                  , u = d(e, a)
                  , o = J(u);
                if (u = d(o, void 0),
                p && !p(Q(o, u))) {
                    var i = t.target
                      , l = ee(e, W, x(i));
                    return i.value = W,
                    X(i, l, W),
                    !1
                }
                return et({
                    formattedValue: o,
                    numAsString: u,
                    inputValue: e,
                    event: t,
                    source: r,
                    input: t.target
                }),
                !0
            }
              , ea = function(e, t) {
                void 0 === t && (t = 0);
                var r = e.selectionStart
                  , n = e.selectionEnd;
                P.current = {
                    selectionStart: r,
                    selectionEnd: n + t
                }
            }
              , eu = Object.assign({
                inputMode: H && "undefined" != typeof navigator && !(navigator.platform && /iPhone|iPod/.test(navigator.platform)) ? "numeric" : void 0
            }, R, {
                type: t,
                value: W,
                onChange: function(e) {
                    en(e.target.value, e, i.event) && h(e),
                    P.current = void 0
                },
                onKeyDown: function(e) {
                    var t, r = e.target, n = e.key, a = r.selectionStart, u = r.selectionEnd, o = r.value;
                    void 0 === o && (o = ""),
                    "ArrowLeft" === n || "Backspace" === n ? t = Math.max(a - 1, 0) : "ArrowRight" === n ? t = Math.min(a + 1, o.length) : "Delete" === n && (t = a);
                    var i = 0;
                    "Delete" === n && a === u && (i = 1);
                    var l = "ArrowLeft" === n || "ArrowRight" === n;
                    if (void 0 === t || a !== u && !l) {
                        S(e),
                        ea(r, i);
                        return
                    }
                    var c = t;
                    l ? (c = Y(o, t, "ArrowLeft" === n ? "left" : "right")) !== t && e.preventDefault() : "Delete" !== n || F(o[t]) ? "Backspace" !== n || F(o[t]) || (c = Y(o, t, "left")) : c = Y(o, t, "right"),
                    c !== t && X(r, c, o),
                    S(e),
                    ea(r, i)
                },
                onMouseUp: function(e) {
                    var t = e.target
                      , r = function() {
                        var e = t.selectionStart
                          , r = t.selectionEnd
                          , n = t.value;
                        if (void 0 === n && (n = ""),
                        e === r) {
                            var a = Y(n, e);
                            a !== e && X(t, a, n)
                        }
                    };
                    r(),
                    requestAnimationFrame(function() {
                        r()
                    }),
                    b(e),
                    ea(t)
                },
                onFocus: function(e) {
                    e.persist && e.persist();
                    var t = e.target
                      , r = e.currentTarget;
                    q.current = t,
                    z.current.focusTimeout = setTimeout(function() {
                        var n = t.selectionStart
                          , a = t.selectionEnd
                          , u = t.value;
                        void 0 === u && (u = "");
                        var o = Y(u, n);
                        o === n || 0 === n && a === u.length || X(t, o, u),
                        D(Object.assign(Object.assign({}, e), {
                            currentTarget: r
                        }))
                    }, 0)
                },
                onBlur: function(e) {
                    q.current = null,
                    clearTimeout(z.current.focusTimeout),
                    clearTimeout(z.current.setCaretTimeout),
                    N(e)
                }
            });
            return "text" === r ? a ? l.createElement(l.Fragment, null, a(W, R) || null) : l.createElement("span", Object.assign({}, R, {
                ref: u
            }), W) : n ? l.createElement(n, Object.assign({}, eu, {
                ref: u
            })) : l.createElement("input", Object.assign({}, eu, {
                ref: u
            }))
        }
        function T(e, t) {
            var r, n, a, u = t.decimalScale, o = t.fixedDecimalScale, i = t.prefix;
            void 0 === i && (i = "");
            var l = t.suffix;
            void 0 === l && (l = "");
            var c = t.allowNegative
              , s = t.thousandsGroupStyle;
            if (void 0 === s && (s = "thousand"),
            "" === e || "-" === e)
                return e;
            var f = F(t)
              , d = f.thousandSeparator
              , v = f.decimalSeparator
              , g = 0 !== u && -1 !== e.indexOf(".") || u && o
              , h = m(e, c)
              , S = h.beforeDecimal
              , b = h.afterDecimal
              , y = h.addNegation;
            return void 0 !== u && (b = p(b, u, !!o)),
            d && (r = S,
            n = function(e) {
                switch (e) {
                case "lakh":
                    return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;
                case "wan":
                    return /(\d)(?=(\d{4})+(?!\d))/g;
                default:
                    return /(\d)(?=(\d{3})+(?!\d))/g
                }
            }(s),
            a = -1 === (a = r.search(/[1-9]/)) ? r.length : a,
            S = r.substring(0, a) + r.substring(a, r.length).replace(n, "$1" + d)),
            i && (S = i + S),
            l && (b += l),
            y && (S = "-" + S),
            e = S + (g && v || "") + b
        }
        function F(e) {
            var t = e.decimalSeparator;
            void 0 === t && (t = ".");
            var r = e.thousandSeparator
              , n = e.allowedDecimalSeparators;
            return !0 === r && (r = ","),
            n || (n = [t, "."]),
            {
                decimalSeparator: t,
                thousandSeparator: r,
                allowedDecimalSeparators: n
            }
        }
        function B(e) {
            (e = function(e) {
                var t = F(e)
                  , r = t.thousandSeparator
                  , n = t.decimalSeparator
                  , a = e.prefix;
                void 0 === a && (a = "");
                var u = e.allowNegative;
                if (void 0 === u && (u = !0),
                r === n)
                    throw Error("\n        Decimal separator can't be same as thousand separator.\n        thousandSeparator: " + r + ' (thousandSeparator = {true} is same as thousandSeparator = ",")\n        decimalSeparator: ' + n + " (default value for decimalSeparator is .)\n     ");
                return a.startsWith("-") && u && (console.error("\n      Prefix can't start with '-' when allowNegative is true.\n      prefix: " + a + "\n      allowNegative: " + u + "\n    "),
                u = !1),
                Object.assign(Object.assign({}, e), {
                    allowNegative: u
                })
            }(e)).decimalSeparator,
            e.allowedDecimalSeparators,
            e.thousandsGroupStyle;
            var t, r = e.suffix, n = e.allowNegative, a = e.allowLeadingZeros, u = e.onKeyDown;
            void 0 === u && (u = s);
            var o = e.onBlur;
            void 0 === o && (o = s);
            var l = e.thousandSeparator
              , p = e.decimalScale
              , h = e.fixedDecimalScale
              , w = e.prefix;
            void 0 === w && (w = "");
            var x = e.defaultValue
              , N = e.value
              , O = e.valueIsNumericString
              , E = e.onValueChange
              , I = c(e, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"])
              , A = F(e)
              , j = A.decimalSeparator
              , k = A.allowedDecimalSeparators
              , B = function(t) {
                return T(t, e)
            }
              , R = function(t, r) {
                return function(e, t, r) {
                    void 0 === t && (t = D(e));
                    var n, a, u, o, i = r.allowNegative, l = r.prefix;
                    void 0 === l && (l = "");
                    var c = r.suffix;
                    void 0 === c && (c = "");
                    var s = r.decimalScale
                      , d = t.from
                      , v = t.to
                      , p = v.start
                      , h = v.end
                      , S = F(r)
                      , b = S.allowedDecimalSeparators
                      , y = S.decimalSeparator
                      , V = e[h] === y;
                    if (f(e) && (e === l || e === c) && "" === t.lastValue)
                        return e;
                    if (h - p == 1 && -1 !== b.indexOf(e[p])) {
                        var w = 0 === s ? "" : y;
                        e = e.substring(0, p) + w + e.substring(p + 1, e.length)
                    }
                    var x = function(e, t, r) {
                        var n = !1
                          , a = !1;
                        l.startsWith("-") ? n = !1 : e.startsWith("--") ? (n = !1,
                        a = !0) : c.startsWith("-") && e.length === c.length ? n = !1 : "-" === e[0] && (n = !0);
                        var u = n ? 1 : 0;
                        return a && (u = 2),
                        u && (e = e.substring(u),
                        t -= u,
                        r -= u),
                        {
                            value: e,
                            start: t,
                            end: r,
                            hasNegation: n
                        }
                    }
                      , N = x(e, p, h)
                      , O = N.hasNegation;
                    e = N.value,
                    p = N.start,
                    h = N.end;
                    var E = x(t.lastValue, d.start, d.end)
                      , I = E.start
                      , C = E.end
                      , A = E.value
                      , j = e.substring(p, h);
                    e.length && A.length && (I > A.length - c.length || C < l.length) && !(j && c.startsWith(j)) && (e = A);
                    var k = 0;
                    e.startsWith(l) ? k += l.length : p < l.length && (k = p),
                    e = e.substring(k),
                    h -= k;
                    var T = e.length
                      , B = e.length - c.length;
                    e.endsWith(c) ? T = B : h > B ? T = h : h > e.length - c.length && (T = h),
                    e = e.substring(0, T),
                    void 0 === (n = O ? "-" + e : e) && (n = ""),
                    a = RegExp("(-)(.)*(-)"),
                    u = /(-)/.test(n),
                    o = a.test(n),
                    n = n.replace(/-/g, ""),
                    u && !o && i && (n = "-" + n);
                    var R = (e = ((e = n).match(RegExp("(^-)|[0-9]|" + g(y), "g")) || []).join("")).indexOf(y)
                      , M = m(e = e.replace(RegExp(g(y), "g"), function(e, t) {
                        return t === R ? "." : ""
                    }), i)
                      , K = M.beforeDecimal
                      , W = M.afterDecimal
                      , _ = M.addNegation;
                    return v.end - v.start < d.end - d.start && "" === K && V && !parseFloat(W) && (e = _ ? "-" : ""),
                    e
                }(t, r, e)
            }
              , M = d(N) ? x : N
              , K = null != O ? O : (t = w,
            "" === M || !(null == t ? void 0 : t.match(/\d/)) && !(null == r ? void 0 : r.match(/\d/)) && "string" == typeof M && !isNaN(Number(M)));
            d(N) ? d(x) || (K = K || "number" == typeof x) : K = K || "number" == typeof N;
            var W = function(e) {
                return v(e) ? e : ("number" == typeof e && (e = S(e)),
                K && "number" == typeof p) ? b(e, p, !!h) : e
            }
              , _ = C(W(N), W(x), !!K, B, R, E)
              , L = _[0]
              , P = L.numAsString
              , G = L.formattedValue
              , $ = _[1];
            return Object.assign(Object.assign({}, I), {
                value: G,
                valueIsNumericString: !1,
                isValidInputCharacter: function(e) {
                    return e === j || f(e)
                },
                isCharacterSame: function(e) {
                    var t = e.currentValue
                      , r = e.lastValue
                      , n = e.formattedValue
                      , a = e.currentValueIndex
                      , u = e.formattedValueIndex
                      , o = t[a]
                      , i = n[u]
                      , l = V(r, t).to
                      , c = function(e) {
                        return R(e).indexOf(".") + w.length
                    };
                    return !(0 === N && h && p && t[l.start] === j && c(t) < a && c(n) > u) && (!!(a >= l.start && a < l.end && k && k.includes(o)) && i === j || o === i)
                },
                onValueChange: $,
                format: B,
                removeFormatting: R,
                getCaretBoundary: function(t) {
                    var r, n, a, u, o, i;
                    return void 0 === (n = (r = e).prefix) && (n = ""),
                    void 0 === (a = r.suffix) && (a = ""),
                    u = Array.from({
                        length: t.length + 1
                    }).map(function() {
                        return !0
                    }),
                    o = "-" === t[0],
                    u.fill(!1, 0, n.length + (o ? 1 : 0)),
                    i = t.length,
                    u.fill(!1, i - a.length + 1, i + 1),
                    u
                },
                onKeyDown: function(e) {
                    var t = e.target
                      , r = e.key
                      , a = t.selectionStart
                      , o = t.selectionEnd
                      , i = t.value;
                    if (void 0 === i && (i = ""),
                    ("Backspace" === r || "Delete" === r) && o < w.length) {
                        e.preventDefault();
                        return
                    }
                    if (a !== o) {
                        u(e);
                        return
                    }
                    "Backspace" === r && "-" === i[0] && a === w.length + 1 && n && y(t, 1),
                    p && h && ("Backspace" === r && i[a - 1] === j ? (y(t, a - 1),
                    e.preventDefault()) : "Delete" === r && i[a] === j && e.preventDefault()),
                    (null == k ? void 0 : k.includes(r)) && i[a] === j && y(t, a + 1);
                    var c = !0 === l ? "," : l;
                    "Backspace" === r && i[a - 1] === c && y(t, a - 1),
                    "Delete" === r && i[a] === c && y(t, a + 1),
                    u(e)
                },
                onBlur: function(t) {
                    var r = P;
                    r.match(/\d/g) || (r = ""),
                    a || (r = function(e) {
                        if (!e)
                            return e;
                        var t = "-" === e[0];
                        t && (e = e.substring(1, e.length));
                        var r = e.split(".")
                          , n = r[0].replace(/^0+/, "") || "0"
                          , a = r[1] || "";
                        return (t ? "-" : "") + n + (a ? "." + a : "")
                    }(r)),
                    h && p && (r = b(r, p, h)),
                    r !== P && $({
                        formattedValue: T(r, e),
                        value: r,
                        floatValue: parseFloat(r)
                    }, {
                        event: t,
                        source: i.event
                    }),
                    o(t)
                }
            })
        }
        function R(e) {
            var t, r, n, a, u, o, i, v, g, m, p, h, S = (e.mask,
            e.allowEmptyFormatting,
            t = e.format,
            void 0 === (r = e.inputMode) && (r = "numeric"),
            void 0 === (n = e.onKeyDown) && (n = s),
            void 0 === (a = e.patternChar) && (a = "#"),
            u = e.value,
            o = e.defaultValue,
            i = e.valueIsNumericString,
            v = c(e, ["mask", "allowEmptyFormatting", "format", "inputMode", "onKeyDown", "patternChar", "value", "defaultValue", "valueIsNumericString"]),
            !function(e) {
                var t = e.mask;
                if (t && ("string" === t ? t : t.toString()).match(/\d/g))
                    throw Error("Mask " + t + " should not contain numeric character;")
            }(e),
            g = function(t) {
                return function(e, t) {
                    var r = t.format
                      , n = t.mask
                      , a = t.patternChar;
                    void 0 === a && (a = "#");
                    var u = Array.from({
                        length: e.length + 1
                    }).map(function() {
                        return !0
                    })
                      , o = 0
                      , i = -1
                      , l = {};
                    r.split("").forEach(function(t, r) {
                        var u = void 0;
                        t === a && (u = N(n, ++o - 1),
                        -1 === i && e[r] === u && (i = r)),
                        l[r] = u
                    });
                    for (var c = function(t) {
                        return r[t] === a && e[t] !== l[t]
                    }, s = 0, f = u.length; s < f; s++)
                        u[s] = s === i || c(s) || c(s - 1);
                    return u[r.indexOf(a)] = !0,
                    u
                }(t, e)
            }
            ,
            m = d(u) ? o : u,
            p = null != i ? i : "" === m || !(null == t ? void 0 : t.match(/\d/)) && "string" == typeof m && (!!m.match(/^\d+$/) || "" === m),
            h = Object.assign(Object.assign({}, e), {
                valueIsNumericString: p
            }),
            Object.assign(Object.assign({}, v), {
                value: u,
                defaultValue: o,
                valueIsNumericString: p,
                inputMode: r,
                format: function(e) {
                    return function(e, t) {
                        var r = t.format
                          , n = t.allowEmptyFormatting
                          , a = t.mask
                          , u = t.patternChar;
                        if (void 0 === u && (u = "#"),
                        "" === e && !n)
                            return "";
                        for (var o = 0, i = r.split(""), l = 0, c = r.length; l < c; l++)
                            r[l] === u && (i[l] = e[o] || N(a, o),
                            o += 1);
                        return i.join("")
                    }(e, h)
                },
                removeFormatting: function(e, t) {
                    return function(e, t, r) {
                        void 0 === t && (t = D(e));
                        var n = r.format
                          , a = r.patternChar;
                        void 0 === a && (a = "#");
                        var u = t.from
                          , o = t.to
                          , i = t.lastValue;
                        void 0 === i && (i = "");
                        var l = function(e) {
                            return n[e] === a
                        }
                          , c = function(e, t) {
                            for (var r = "", n = 0; n < e.length; n++)
                                l(t + n) && f(e[n]) && (r += e[n]);
                            return r
                        }
                          , s = function(e) {
                            return e.replace(/[^0-9]/g, "")
                        };
                        if (!n.match(/\d/))
                            return s(e);
                        if (("" === i || u.end - u.start === i.length) && e.length === n.length) {
                            for (var d = "", v = 0; v < e.length; v++)
                                if (l(v))
                                    f(e[v]) && (d += e[v]);
                                else if (e[v] !== n[v])
                                    return s(e);
                            return d
                        }
                        var g = i.substring(0, u.start)
                          , m = e.substring(o.start, o.end)
                          , p = i.substring(u.end);
                        return "" + c(g, 0) + s(m) + c(p, u.end)
                    }(e, t, h)
                },
                getCaretBoundary: g,
                onKeyDown: function(e) {
                    var r = e.key
                      , u = e.target
                      , o = u.selectionStart
                      , i = u.selectionEnd
                      , l = u.value;
                    if (o !== i) {
                        n(e);
                        return
                    }
                    var c = o;
                    if ("Backspace" === r || "Delete" === r) {
                        var s = "right";
                        if ("Backspace" === r) {
                            for (; c > 0 && t[c - 1] !== a; )
                                c--;
                            s = "left"
                        } else {
                            for (var f = t.length; c < f && t[c] !== a; )
                                c++;
                            s = "right"
                        }
                        c = E(l, c, g(l), s)
                    } else
                        t[c] !== a && "ArrowLeft" !== r && "ArrowRight" !== r && (c = E(l, c + 1, g(l), "right"));
                    c !== o && y(u, c),
                    n(e)
                }
            }));
            return l.createElement(k, Object.assign({}, S))
        }
    }
}]);
