!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[t] = "18335f4a-85fd-4814-9574-468a71beaaa4",
        e._sentryDebugIdIdentifier = "sentry-dbid-18335f4a-85fd-4814-9574-468a71beaaa4")
    } catch (e) {}
}(),
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2999], {
    47443: function(e, t, r) {
        var n = r(42118);
        e.exports = function(e, t) {
            return !!(null == e ? 0 : e.length) && n(e, t, 0) > -1
        }
    },
    1196: function(e) {
        e.exports = function(e, t, r) {
            for (var n = -1, i = null == e ? 0 : e.length; ++n < i; )
                if (r(t, e[n]))
                    return !0;
            return !1
        }
    },
    41848: function(e) {
        e.exports = function(e, t, r, n) {
            for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
                if (t(e[o], o, e))
                    return o;
            return -1
        }
    },
    42118: function(e, t, r) {
        var n = r(41848)
          , i = r(62722)
          , o = r(42351);
        e.exports = function(e, t, r) {
            return t == t ? o(e, t, r) : n(e, i, r)
        }
    },
    62722: function(e) {
        e.exports = function(e) {
            return e != e
        }
    },
    45652: function(e, t, r) {
        var n = r(88668)
          , i = r(47443)
          , o = r(1196)
          , a = r(74757)
          , s = r(23593)
          , u = r(21814);
        e.exports = function(e, t, r) {
            var c = -1
              , l = i
              , d = e.length
              , f = !0
              , h = []
              , m = h;
            if (r)
                f = !1,
                l = o;
            else if (d >= 200) {
                var p = t ? null : s(e);
                if (p)
                    return u(p);
                f = !1,
                l = a,
                m = new n
            } else
                m = t ? [] : h;
            e: for (; ++c < d; ) {
                var v = e[c]
                  , y = t ? t(v) : v;
                if (v = r || 0 !== v ? v : 0,
                f && y == y) {
                    for (var g = m.length; g--; )
                        if (m[g] === y)
                            continue e;
                    t && m.push(y),
                    h.push(v)
                } else
                    l(m, y, r) || (m !== h && m.push(y),
                    h.push(v))
            }
            return h
        }
    },
    23593: function(e, t, r) {
        var n = r(58525)
          , i = r(50308)
          , o = r(21814)
          , a = n && 1 / o(new n([, -0]))[1] == 1 / 0 ? function(e) {
            return new n(e)
        }
        : i;
        e.exports = a
    },
    42351: function(e) {
        e.exports = function(e, t, r) {
            for (var n = r - 1, i = e.length; ++n < i; )
                if (e[n] === t)
                    return n;
            return -1
        }
    },
    50308: function(e) {
        e.exports = function() {}
    },
    44908: function(e, t, r) {
        var n = r(45652);
        e.exports = function(e) {
            return e && e.length ? n(e) : []
        }
    },
    48670: function(e, t, r) {
        "use strict";
        r.d(t, {
            Z: function() {
                return i
            }
        });
        var n = r(67294);
        function i() {
            var e = (0,
            n.useRef)(!0);
            return e.current ? (e.current = !1,
            !0) : e.current
        }
    },
    30326: function(e, t, r) {
        "use strict";
        var n = r(67294);
        t.Z = function(e) {
            var t = (0,
            n.useRef)(e);
            return t.current = e,
            t
        }
    },
    21280: function(e, t, r) {
        "use strict";
        r.d(t, {
            Z: function() {
                return a
            }
        });
        var n = r(67294)
          , i = r(48670)
          , o = function(e, t) {
            return e === t
        };
        function a(e, t) {
            void 0 === t && (t = o);
            var r = (0,
            n.useRef)()
              , a = (0,
            n.useRef)(e);
            return (0,
            i.Z)() || t(a.current, e) || (r.current = a.current,
            a.current = e),
            r.current
        }
    },
    59045: function(e, t, r) {
        "use strict";
        r.d(t, {
            d: function() {
                return m
            },
            z: function() {
                return p
            }
        });
        var n = r(74291)
          , i = r(67294)
          , o = r(88408)
          , a = r(71877)
          , s = r(19264)
          , u = r(78712)
          , c = r(71281)
          , l = e => (0,
        a.Cr)(void 0, null, function*() {
            let {query: t={}, headers: r, payload: n, options: i={}, config: o={}} = e;
            return (0,
            s.Wk)({
                path: "/account/settings/tfa",
                query: t,
                config: (0,
                a.EZ)((0,
                a.ih)({}, o), {
                    basePath: "/api/internal"
                }),
                options: (0,
                a.EZ)((0,
                a.ih)({}, i), {
                    method: u.w.POST,
                    body: n,
                    headers: (0,
                    a.ih)((0,
                    a.EZ)((0,
                    a.ih)({}, null == i ? void 0 : i.headers), {
                        "Content-Type": c.a.Json
                    }), r)
                }),
                operation: {
                    id: "getTfaUsernamePassword",
                    module: "account",
                    route: "/account/settings/tfa"
                }
            })
        })
          , d = e => (0,
        a.Cr)(void 0, null, function*() {
            let {query: t={}, options: r={}, config: n={}} = null != e ? e : {};
            return (0,
            s.Wk)({
                path: "/session",
                query: t,
                config: (0,
                a.EZ)((0,
                a.ih)({}, n), {
                    basePath: "/api/internal"
                }),
                options: (0,
                a.EZ)((0,
                a.ih)({}, r), {
                    method: u.w.GET
                }),
                operation: {
                    id: "initSession",
                    module: "sessions",
                    route: "/session"
                }
            })
        })
          , f = r(74468)
          , h = r(18706)
          , m = Error("needs two-factor authentication")
          , p = (e={}) => {
            let {login: t} = (0,
            f.k)()
              , [r,a] = (0,
            i.useState)()
              , [s,u] = (0,
            i.useState)([])
              , [c,p] = (0,
            i.useState)()
              , [v,y] = (0,
            i.useState)()
              , g = e => (0,
            n.C)(void 0, [e], function*({username: e, password: t, slid: r}) {
                let {data: {result: {challenge2: i}}} = yield d()
                  , o = (yield(0,
                h.p)(i)).solution
                  , s = yield l({
                    headers: (0,
                    n.i)({
                        "x-pow": o
                    }, r ? {
                        "x-slid": r
                    } : {}),
                    payload: {
                        username: e,
                        password: t
                    }
                });
                if ("none" === s.data.result.type)
                    return;
                let c = s.data.result;
                return (null == c ? void 0 : c.secret) !== void 0 && (u(c.secret.options),
                y(c.secret.challenge)),
                (null == c ? void 0 : c.main) !== void 0 && (a(c.main.options),
                p(c.main.challenge)),
                c
            })
              , [w,{loading: x, error: k}] = (0,
            o.i)(e => (0,
            n.C)(void 0, [e], function*({username: e, password: r, tfa: i, tfaId: o, slid: a}) {
                if (!i) {
                    let t = yield g({
                        username: e,
                        password: r,
                        slid: a
                    });
                    if ((null == t ? void 0 : t.main) !== void 0)
                        throw m
                }
                let {data: {result: {challenge2: s}}} = yield d();
                yield t({
                    payload: {
                        username: e,
                        password: r,
                        tfa: i,
                        tfa_id: o
                    },
                    headers: (0,
                    n.i)({
                        "x-pow": (yield(0,
                        h.p)(s)).solution
                    }, a ? {
                        "x-slid": a
                    } : {})
                })
            }), e);
            return {
                signIn: w,
                getSignInTfa: g,
                loading: x,
                error: k,
                tfaOptions: r,
                tfaMasterOptions: s,
                tfaChallenge: c,
                tfaMasterChallenge: v,
                reset: (0,
                i.useCallback)( () => {
                    a(void 0),
                    u([]),
                    p(void 0),
                    y(void 0)
                }
                , [])
            }
        }
    },
    20029: function(e, t, r) {
        "use strict";
        r.d(t, {
            t: function() {
                return l
            }
        });
        var n = r(74291)
          , i = r(87536)
          , o = function(e, t, r) {
            if (e && "reportValidity"in e) {
                var n = (0,
                i.U2)(r, t);
                e.setCustomValidity(n && n.message || ""),
                e.reportValidity()
            }
        }
          , a = function(e, t) {
            var r = function(r) {
                var n = t.fields[r];
                n && n.ref && "reportValidity"in n.ref ? o(n.ref, r, e) : n.refs && n.refs.forEach(function(t) {
                    return o(t, r, e)
                })
            };
            for (var n in t.fields)
                r(n)
        }
          , s = function(e, t) {
            t.shouldUseNativeValidation && a(e, t);
            var r = {};
            for (var n in e) {
                var o = (0,
                i.U2)(t.fields, n);
                (0,
                i.t8)(r, n, Object.assign(e[n] || {}, {
                    ref: o && o.ref
                }))
            }
            return r
        }
          , u = r(16310)
          , c = ({config: e, translations: t}) => (0,
        u.Ry)({
            username: (null == e ? void 0 : e.allowOnlyEmailSignIn) ? (0,
            u.Z_)().email(t.emailRequired).required(t.emailRequired) : (0,
            u.Z_)().required(t.usernameRequired),
            password: (0,
            u.Z_)().required(t.passwordRequired),
            tfa: (0,
            u.Z_)().when("tfa_id", {
                is: e => void 0 !== e,
                then: e => e.required(t.tfaRequired)
            }),
            tfa_id: (0,
            u.Z_)()
        })
          , l = ({config: e, translations: t}) => {
            var r, o, u;
            return (0,
            i.cI)((0,
            n.i)({
                resolver: (r = c({
                    config: e,
                    translations: t
                }),
                void 0 === o && (o = {}),
                void 0 === u && (u = {}),
                function(e, t, n) {
                    try {
                        return Promise.resolve(function(i, s) {
                            try {
                                var c = (o.context,
                                Promise.resolve(r["sync" === u.mode ? "validateSync" : "validate"](e, Object.assign({
                                    abortEarly: !1
                                }, o, {
                                    context: t
                                }))).then(function(t) {
                                    return n.shouldUseNativeValidation && a({}, n),
                                    {
                                        values: u.raw ? e : t,
                                        errors: {}
                                    }
                                }))
                            } catch (e) {
                                return s(e)
                            }
                            return c && c.then ? c.then(void 0, s) : c
                        }(0, function(e) {
                            var t;
                            if (!e.inner)
                                throw e;
                            return {
                                values: {},
                                errors: s((t = !n.shouldUseNativeValidation && "all" === n.criteriaMode,
                                (e.inner || []).reduce(function(e, r) {
                                    if (e[r.path] || (e[r.path] = {
                                        message: r.message,
                                        type: r.type
                                    }),
                                    t) {
                                        var n = e[r.path].types
                                          , o = n && n[r.type];
                                        e[r.path] = (0,
                                        i.KN)(r.path, t, e, r.type, o ? [].concat(o, r.message) : r.message)
                                    }
                                    return e
                                }, {})), n)
                            }
                        }))
                    } catch (e) {
                        return Promise.reject(e)
                    }
                }
                )
            }, e))
        }
    },
    56962: function(e, t, r) {
        "use strict";
        r.d(t, {
            s: function() {
                return c
            }
        });
        var n = r(67646)
          , i = r(80150)
          , o = r(77239)
          , a = r(78246)
          , s = r(44199)
          , u = r(56871)
          , c = e => (0,
        n.Cr)(void 0, null, function*() {
            let t = {
                id: "updateEmail",
                module: "account",
                route: "/account/settings/email",
                security: !0,
                routeParams: {
                    path: [],
                    query: [{
                        name: "preferred_asset_name"
                    }]
                }
            }
              , r = i(o.q)
              , {query: c={}, payload: l, options: d={}, config: f={}} = (yield r({
                request: e,
                operation: t
            })).request;
            return (0,
            a.Wk)({
                path: "/account/settings/email",
                query: c,
                config: (0,
                n.EZ)((0,
                n.ih)({}, f), {
                    basePath: "/api/internal",
                    csrf: (0,
                    n.ih)({
                        contextId: "SETTINGSACCOUNT"
                    }, null == f ? void 0 : f.csrf)
                }),
                options: (0,
                n.EZ)((0,
                n.ih)({}, d), {
                    method: s.w.PUT,
                    body: l,
                    headers: (0,
                    n.EZ)((0,
                    n.ih)({}, null == d ? void 0 : d.headers), {
                        "Content-Type": u.a.Json
                    })
                }),
                operation: t
            })
        })
    },
    3414: function(e, t, r) {
        "use strict";
        r.d(t, {
            f: function() {
                return u
            }
        });
        var n = r(67646)
          , i = r(80150)
          , o = r(77239)
          , a = r(78246)
          , s = r(44199)
          , u = e => (0,
        n.Cr)(void 0, null, function*() {
            var t;
            let r = {
                id: "updateEmailCancel",
                module: "account",
                route: "/account/settings/email/confirm",
                security: !0,
                routeParams: {
                    path: [],
                    query: [{
                        name: "user"
                    }, {
                        name: "key"
                    }, {
                        name: "preferred_asset_name"
                    }]
                }
            }
              , u = i(o.q)
              , {query: c={}, options: l={}, config: d={}} = null != (t = (yield u({
                request: e,
                operation: r
            })).request) ? t : {};
            return (0,
            a.Wk)({
                path: "/account/settings/email/confirm",
                query: c,
                config: (0,
                n.EZ)((0,
                n.ih)({}, d), {
                    basePath: "/api/internal"
                }),
                options: (0,
                n.EZ)((0,
                n.ih)({}, l), {
                    method: s.w.DELETE
                }),
                operation: r
            })
        })
    },
    20063: function(e, t, r) {
        "use strict";
        r.d(t, {
            U: function() {
                return c
            }
        });
        var n = r(67646)
          , i = r(80150)
          , o = r(77239)
          , a = r(78246)
          , s = r(44199)
          , u = r(56871)
          , c = e => (0,
        n.Cr)(void 0, null, function*() {
            let t = {
                id: "updateEmailConfirm",
                module: "account",
                route: "/account/settings/email/confirm",
                security: !0,
                routeParams: {
                    path: [],
                    query: [{
                        name: "preferred_asset_name"
                    }]
                }
            }
              , r = i(o.q)
              , {query: c={}, payload: l, options: d={}, config: f={}} = (yield r({
                request: e,
                operation: t
            })).request;
            return (0,
            a.Wk)({
                path: "/account/settings/email/confirm",
                query: c,
                config: (0,
                n.EZ)((0,
                n.ih)({}, f), {
                    basePath: "/api/internal",
                    csrf: (0,
                    n.ih)({
                        contextId: "SETTINGSACCOUNT"
                    }, null == f ? void 0 : f.csrf)
                }),
                options: (0,
                n.EZ)((0,
                n.ih)({}, d), {
                    method: s.w.PUT,
                    body: l,
                    headers: (0,
                    n.EZ)((0,
                    n.ih)({}, null == d ? void 0 : d.headers), {
                        "Content-Type": u.a.Json
                    })
                }),
                operation: t
            })
        })
    },
    47533: function(e, t, r) {
        "use strict";
        r.d(t, {
            X: function() {
                return c
            }
        });
        var n = r(87536)
          , i = function(e, t, r) {
            if (e && "reportValidity"in e) {
                var i = (0,
                n.U2)(r, t);
                e.setCustomValidity(i && i.message || ""),
                e.reportValidity()
            }
        }
          , o = function(e, t) {
            var r = function(r) {
                var n = t.fields[r];
                n && n.ref && "reportValidity"in n.ref ? i(n.ref, r, e) : n.refs && n.refs.forEach(function(t) {
                    return i(t, r, e)
                })
            };
            for (var n in t.fields)
                r(n)
        }
          , a = function(e, t, r) {
            for (var n, i = -1, o = /^\w*$/.test(t) ? [t] : Array.isArray(n = t.replace(/["|']|\]/g, "").split(/\.|\[/)) ? n.filter(Boolean) : [], a = o.length, s = a - 1; ++i < a; ) {
                var u = o[i]
                  , c = r;
                if (i !== s) {
                    var l = e[u];
                    c = !(null != l && !Array.isArray(l) && "object" == typeof l && !(l instanceof Date) || Array.isArray(l)) ? isNaN(+o[i + 1]) ? {} : [] : l
                }
                e[u] = c,
                e = e[u]
            }
            return e
        }
          , s = function(e, t) {
            t.shouldUseNativeValidation && o(e, t);
            var r = {};
            for (var i in e) {
                var s = (0,
                n.U2)(t.fields, i)
                  , c = Object.assign(e[i] || {}, {
                    ref: s && s.ref
                });
                if (u(t.names || Object.keys(e), i)) {
                    var l = Object.assign({}, (0,
                    n.U2)(r, i));
                    a(l, "root", c),
                    a(r, i, l)
                } else
                    a(r, i, c)
            }
            return r
        }
          , u = function(e, t) {
            return e.some(function(e) {
                return e.startsWith(t + ".")
            })
        };
        function c(e, t, r) {
            return void 0 === t && (t = {}),
            void 0 === r && (r = {}),
            function(i, a, u) {
                try {
                    return Promise.resolve(function(n, s) {
                        try {
                            var c = (t.context,
                            Promise.resolve(e["sync" === r.mode ? "validateSync" : "validate"](i, Object.assign({
                                abortEarly: !1
                            }, t, {
                                context: a
                            }))).then(function(e) {
                                return u.shouldUseNativeValidation && o({}, u),
                                {
                                    values: r.raw ? i : e,
                                    errors: {}
                                }
                            }))
                        } catch (e) {
                            return s(e)
                        }
                        return c && c.then ? c.then(void 0, s) : c
                    }(0, function(e) {
                        var t;
                        if (!e.inner)
                            throw e;
                        return {
                            values: {},
                            errors: s((t = !u.shouldUseNativeValidation && "all" === u.criteriaMode,
                            (e.inner || []).reduce(function(e, r) {
                                if (e[r.path] || (e[r.path] = {
                                    message: r.message,
                                    type: r.type
                                }),
                                t) {
                                    var i = e[r.path].types
                                      , o = i && i[r.type];
                                    e[r.path] = (0,
                                    n.KN)(r.path, t, e, r.type, o ? [].concat(o, r.message) : r.message)
                                }
                                return e
                            }, {})), u)
                        }
                    }))
                } catch (e) {
                    return Promise.reject(e)
                }
            }
        }
    },
    53523: function(e, t, r) {
        "use strict";
        r.d(t, {
            U: function() {
                return s
            }
        });
        var n = r(84615)
          , i = r(49237)
          , o = r(99443)
          , a = r(85893)
          , s = (0,
        i.y)(e => {
            let {svgProps: t, pathProps: r, circleProps: i, rectProps: s, lineProps: u, clipPathProps: c, gProps: l, defsProps: d, customGradient: f} = e;
            return (0,
            a.jsxs)(o.ny, (0,
            n.EZ)((0,
            n.ih)({}, t({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            })), {
                children: [f, (0,
                a.jsx)(o.y$, (0,
                n.ih)({}, r({
                    d: "M15 9L9 15M15 15L9 9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
                    stroke: "white",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })))]
            }))
        }
        , "Clear")
    },
    72609: function(e, t, r) {
        "use strict";
        r.d(t, {
            Z: function() {
                return s
            }
        });
        var n = r(84615)
          , i = r(49237)
          , o = r(99443)
          , a = r(85893)
          , s = (0,
        i.y)(e => {
            let {svgProps: t, pathProps: r, circleProps: i, rectProps: s, lineProps: u, clipPathProps: c, gProps: l, defsProps: d, customGradient: f} = e;
            return (0,
            a.jsxs)(o.ny, (0,
            n.EZ)((0,
            n.ih)({}, t({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            })), {
                children: [f, (0,
                a.jsx)(o.y$, (0,
                n.ih)({}, r({
                    d: "M11 11H12V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
                    stroke: "white",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }))), (0,
                a.jsx)(o.UL, (0,
                n.ih)({}, s({
                    x: "11.5",
                    y: "7.5",
                    width: "1",
                    height: "1",
                    rx: "0.5",
                    fill: "white",
                    stroke: "white",
                    strokeWidth: "2"
                })))]
            }))
        }
        , "InfoCircle")
    },
    92900: function(e, t, r) {
        "use strict";
        r.d(t, {
            W: function() {
                return h
            }
        });
        var n = r(65231)
          , i = r(75817)
          , o = r(59638)
          , a = r(25014)
          , s = r(85893)
          , u = (0,
        o.y)(e => {
            let {svgProps: t, pathProps: r, circleProps: n, rectProps: o, lineProps: u, clipPathProps: c, gProps: l, defsProps: d, customGradient: f} = e;
            return (0,
            s.jsxs)(a.ny, (0,
            i.EZ)((0,
            i.ih)({}, t({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            })), {
                children: [f, (0,
                s.jsx)(a.y$, (0,
                i.ih)({}, r({
                    d: "M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z",
                    stroke: "white",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }))), (0,
                s.jsx)(a.y$, (0,
                i.ih)({}, r({
                    d: "M21.4974 11.0946C16.66 2.96839 7.33998 2.96848 2.50257 11.0947C2.17069 11.6523 2.17069 12.3479 2.50257 12.9054C7.33998 21.0316 16.66 21.0315 21.4974 12.9053C21.8293 12.3477 21.8293 11.6521 21.4974 11.0946Z",
                    stroke: "white",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })))]
            }))
        }
        , "Eye")
          , c = (0,
        o.y)(e => {
            let {svgProps: t, pathProps: r, circleProps: n, rectProps: o, lineProps: u, clipPathProps: c, gProps: l, defsProps: d, customGradient: f} = e;
            return (0,
            s.jsxs)(a.ny, (0,
            i.EZ)((0,
            i.ih)({}, t({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            })), {
                children: [f, (0,
                s.jsx)(a.y$, (0,
                i.ih)({}, r({
                    d: "M17.2656 17.2969C12.9688 20.5156 6.33331 19.3397 2.50306 12.9054C2.17118 12.3479 2.17118 11.6523 2.50306 11.0948C3.82299 8.87742 5.40625 7.35938 6.6875 6.73438",
                    stroke: "white",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }))), (0,
                s.jsx)(a.y$, (0,
                i.ih)({}, r({
                    d: "M20.2891 14.6405C20.8282 13.9452 20.994 13.7517 21.498 12.9051C21.8298 12.3476 21.8298 11.652 21.498 11.0945C18.625 6.26841 14.8438 4.71864 10.6563 5.09365M13.9688 13.9765C13.7657 14.5233 13.0888 14.9999 12.0005 14.9999C10.3437 14.9999 9.00052 13.6567 9.00052 11.9999C9.00052 10.9096 9.45319 10.3671 9.98444 9.96864",
                    stroke: "white",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }))), (0,
                s.jsx)(a.y$, (0,
                i.ih)({}, r({
                    d: "M2.98459 2.99969L21.0156 21.0155",
                    stroke: "white",
                    strokeWidth: "2",
                    strokeLinecap: "round"
                })))]
            }))
        }
        , "EyeOff")
          , l = r(67294)
          , d = r(62440)
          , f = r(88223)
          , h = (0,
        r(24407).T)((0,
        l.forwardRef)(function(e, t) {
            let[r,i] = (0,
            l.useState)(!0)
              , o = (0,
            s.jsx)("div", {
                className: "inline-flex h-full items-center",
                children: (0,
                s.jsx)(d.hU, {
                    icon: r ? u : c,
                    onPress: () => i(e => !e),
                    emphasis: "none",
                    tone: "neutral",
                    size: "sm",
                    "aria-label": r ? "Show password" : "Hide password"
                })
            });
            return (0,
            s.jsx)(f.I, (0,
            n.EZ)((0,
            n.ih)({}, e), {
                addon: o,
                type: r ? "password" : "text",
                ref: t
            }))
        }));
        f.I.displayName = "PasswordInput"
    },
    74148: function(e, t, r) {
        "use strict";
        r.d(t, {
            l: function() {
                return P
            }
        });
        var n = r(67294)
          , i = r(56637)
          , o = r(80304)
          , a = r(50351)
          , s = r(4985)
          , u = r(30326)
          , c = r(70768)
          , l = (e, t) => "".concat(e, "/").concat(t)
          , d = e => {
            let {componentName: t, name: r, isEnabled: i=!0, id: o, tags: d, cancelOnUnmount: f} = e
              , h = (0,
            n.useRef)(void 0)
              , m = (0,
            u.Z)(d);
            (0,
            n.useEffect)( () => {
                if (i) {
                    let e = (0,
                    s.E)((0,
                    s.i)((0,
                    s.i)({}, c.hO), m.current), {
                        componentName: t
                    });
                    a.O.start({
                        id: o,
                        name: l(t, r),
                        tags: e,
                        op: r
                    }),
                    h.current = setTimeout( () => {
                        a.O.cancel({
                            id: o,
                            name: l(t, r),
                            reason: c.mR
                        })
                    }
                    , c.qU)
                }
                return () => {
                    clearTimeout(h.current)
                }
            }
            , [t, o, i, m, r]),
            (0,
            n.useEffect)( () => () => {
                f && a.O.cancel({
                    name: l(t, r),
                    id: o,
                    reason: c.uk
                })
            }
            , [])
        }
          , f = r(14801)
          , h = function(e) {
            var t = (0,
            n.useRef)(e);
            t.current = e,
            (0,
            f.Z)(function() {
                return function() {
                    return t.current()
                }
            })
        }
          , m = r(87222)
          , p = (0,
        m.j)("use-finish-transaction")
          , v = e => {
            let {componentName: t, name: r, id: i, predicate: o, isEnabled: s=!0} = e
              , u = (0,
            n.useRef)(!1);
            (0,
            n.useEffect)( () => {
                s && o && !u.current ? (u.current = !0,
                a.O.finish({
                    name: l(t, r),
                    id: i,
                    delayedFinish: !0
                })) : s && o && u.current && p.debug("Skipping finish transaction because it was already marked as finished", {
                    extra: {
                        name: l(t, r),
                        id: i
                    }
                })
            }
            , [t, i, s, r, o]),
            h( () => {
                a.O.cancel({
                    name: l(t, r),
                    id: i
                })
            }
            )
        }
          , y = e => {
            let {componentName: t, name: r, predicate: n, isEnabled: i=!0, tags: o} = e;
            d({
                componentName: t,
                name: r,
                isEnabled: i,
                tags: o
            }),
            v({
                componentName: t,
                name: r,
                predicate: n,
                isEnabled: i
            })
        }
          , g = r(46700)
          , w = r(69737)
          , x = r(35133)
          , k = r(99233)
          , E = (0,
        m.j)("use-performance-mount")
          , C = function(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1]
              , r = arguments.length > 2 ? arguments[2] : void 0
              , i = (0,
            x.i)()
              , o = (0,
            n.useRef)(!1)
              , a = (0,
            n.useRef)()
              , u = l(e, "mount-start")
              , d = l(e, "mount-paint-end")
              , f = l(e, "mount-paint-end")
              , h = l(e, "mount-paint")
              , m = l(e, "mount");
            !t || a.current || o.current || (i.debug && performance.mark(u),
            a.current = (0,
            g.qp)({
                name: h,
                attributes: (0,
                s.E)((0,
                s.i)((0,
                s.i)({}, c.hO), r), {
                    componentName: e
                }),
                op: "mount-paint",
                forceTransaction: !0
            }),
            o.current = !0,
            E.debug("Start performance mount transaction", {
                extra: {
                    componentName: e,
                    tags: r
                }
            })),
            (0,
            n.useEffect)( () => {
                if (!t)
                    return;
                let r = (0,
                x.i)()
                  , n = a.current
                  , i = !1;
                if (!n) {
                    E.debug("Skipping mount performance monitoring due to missing transaction (expected during HMR)", {
                        extra: {
                            componentName: e
                        }
                    });
                    return
                }
                r.debug && (performance.mark(f),
                performance.measure(m, u, f));
                let o = setTimeout( () => {
                    i || (i = !0,
                    n.setStatus({
                        code: w.OP,
                        message: "ok"
                    }),
                    (0,
                    k.wy)(n)),
                    r.debug && (performance.mark(d),
                    performance.measure(h, u, d)),
                    E.debug("Mount paint completed", {
                        extra: {
                            transaction: n,
                            componentName: e
                        }
                    })
                }
                , 0);
                return a.current = void 0,
                () => {
                    clearTimeout(o),
                    (0,
                    x.i)().debug && (performance.clearMarks(u),
                    performance.clearMarks(f)),
                    t && !i && n && (n.setStatus({
                        code: w.OP,
                        message: "out_of_range"
                    }),
                    (0,
                    k.wy)(n),
                    E.debug("Finished due to unmount", {
                        extra: {
                            componentName: e,
                            transaction: n
                        }
                    }))
                }
            }
            , [])
        }
          , b = (0,
        m.j)("use-performance-change")
          , j = e => {
            let {componentName: t, changeName: r, changedValue: i, isEnabled: o=!0, tags: a} = e
              , u = (0,
            x.i)()
              , l = "".concat(t, "/").concat(r)
              , d = (0,
            n.useRef)()
              , f = (0,
            n.useRef)(i)
              , h = "".concat(l, "/start")
              , m = "".concat(l, "/end");
            o && f.current !== i && (f.current = i,
            u.debug && performance.mark(h),
            d.current = (0,
            g.qp)({
                name: l,
                attributes: (0,
                s.i)((0,
                s.E)((0,
                s.i)({}, c.hO), {
                    changedValue: i,
                    componentName: t,
                    changeName: r
                }), a),
                op: "change"
            }),
            setTimeout( () => {
                d.current && (d.current.setStatus({
                    code: w.OP,
                    message: "ok"
                }),
                d.current.end()),
                u.debug && (performance.mark(m),
                performance.measure(l, h, m),
                b.debug("Change tracked", {
                    extra: (0,
                    s.i)({
                        eventName: l,
                        changedValue: i,
                        componentName: t,
                        changeName: r
                    }, a)
                }))
            }
            , 0))
        }
          , Z = e => {
            let {componentName: t, isLoadingCompleted: r, isEnabled: n=!0, isMountPaintEnabled: i=!1, tags: o} = e;
            y({
                componentName: t,
                name: "mount-to-loaded",
                predicate: r,
                isEnabled: n,
                tags: o
            }),
            C(t, n && i, o),
            j({
                componentName: t,
                changeName: "data-render",
                changedValue: r,
                isEnabled: n,
                tags: o
            })
        }
          , T = r(85893)
          , S = (0,
        o.jl)("sentry-devtools")
          , P = () => {
            let[e,t] = (0,
            n.useState)(!1)
              , [r,s] = (0,
            n.useState)(!0)
              , u = (0,
            n.useRef)();
            return (0,
            n.useEffect)( () => () => {
                S.info("Clearing intervals on unmount"),
                clearInterval(u.current)
            }
            , []),
            (0,
            n.useEffect)( () => {
                let e = setTimeout( () => {
                    s(!1)
                }
                , 3e3);
                return () => {
                    void 0 !== e && clearTimeout(e)
                }
            }
            , []),
            (0,
            n.useEffect)( () => {
                if (e)
                    throw Error("Test exception in effect")
            }
            , [e]),
            Z({
                componentName: "sentry-devtools",
                isLoadingCompleted: !r
            }),
            (0,
            T.jsxs)("div", {
                className: "flex flex-col gap-2 p-2",
                children: [(0,
                T.jsx)(i.z, {
                    text: "Force sentry handler exception",
                    onPress: () => {
                        throw Error("Test handler exception")
                    }
                }), (0,
                T.jsx)(i.z, {
                    text: "Enable sentry effect exception",
                    onPress: () => {
                        t(!0)
                    }
                }), (0,
                T.jsx)(i.z, {
                    text: "Disable sentry effect exception",
                    onPress: () => {
                        t(!1)
                    }
                }), (0,
                T.jsx)(i.z, {
                    text: "Log manual error",
                    onPress: () => {
                        S.error("Test manual error", {
                            extra: {
                                exampleData: "exampleValue"
                            }
                        })
                    }
                }), (0,
                T.jsx)(i.z, {
                    text: "Start 40s transaction. Check console logs for details",
                    onPress: () => {
                        let e = (0,
                        o.jl)("long-task")
                          , t = performance.now();
                        a.O.start({
                            name: "long-task"
                        }),
                        u.current = setInterval( () => {
                            let r = performance.now() - t;
                            r >= 4e4 ? (a.O.finish({
                                name: "long-task"
                            }),
                            e.info("Max time passed", {
                                extra: {
                                    maxTime: 4e4,
                                    diff: r
                                }
                            }),
                            clearInterval(u.current)) : e.info("Update timer", {
                                extra: {
                                    maxTime: 4e4,
                                    start: t,
                                    diff: r,
                                    diffSec: r / 1e3
                                }
                            })
                        }
                        , 1e3)
                    }
                })]
            })
        }
    },
    60854: function(e, t, r) {
        "use strict";
        r.d(t, {
            J: function() {
                return o
            }
        });
        var n = r(67294)
          , i = () => !!window.localStorage && "true" === window.localStorage.getItem("KR_SHOW_SENTRY_DEVTOOLS")
          , o = () => {
            let e = (0,
            n.useRef)(void 0);
            return void 0 === e.current && (e.current = i()),
            e.current
        }
    }
}]);
