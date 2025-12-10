!function() {
    try {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , e = (new t.Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {},
        t._sentryDebugIds[e] = "0d78473f-4980-4ce9-a3b4-ce34f6d41d60",
        t._sentryDebugIdIdentifier = "sentry-dbid-0d78473f-4980-4ce9-a3b4-ce34f6d41d60")
    } catch (t) {}
}(),
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[4158], {
    3045: function(t, e, n) {
        var r = n(98363)
          , s = n(21463)
          , i = n(81704)
          , u = s(function(t, e) {
            r(e, i(e), t)
        });
        t.exports = u
    },
    22205: function(t, e, n) {
        t.exports = n(3045)
    },
    3651: function(t, e, n) {
        "use strict";
        n.d(e, {
            V: function() {
                return a
            }
        });
        var r = n(67646)
          , s = n(80150)
          , i = n(77239)
          , u = n(78246)
          , o = n(44199)
          , a = t => (0,
        r.Cr)(void 0, null, function*() {
            var e;
            let n = {
                id: "getOnboardingMetadata",
                module: "account",
                route: "/meta/onboarding",
                security: !0,
                routeParams: {
                    path: [],
                    query: [{
                        name: "preferred_asset_name"
                    }]
                }
            }
              , a = s(i.q)
              , {query: c={}, options: l={}, config: d={}} = null != (e = (yield a({
                request: t,
                operation: n
            })).request) ? e : {};
            return (0,
            u.Wk)({
                path: "/meta/onboarding",
                query: c,
                config: (0,
                r.EZ)((0,
                r.ih)({}, d), {
                    basePath: "/api/internal"
                }),
                options: (0,
                r.EZ)((0,
                r.ih)({}, l), {
                    method: o.w.GET
                }),
                operation: n
            })
        })
    },
    58637: function(t, e, n) {
        "use strict";
        n.d(e, {
            W: function() {
                return a
            },
            w: function() {
                return c
            }
        });
        var r = n(67646)
          , s = n(80150)
          , i = n(77239)
          , u = n(78246)
          , o = n(44199)
          , a = t => (0,
        r.Cr)(void 0, null, function*() {
            var e;
            let n = {
                id: "listTwoFactorConfigurations",
                module: "account",
                route: "/account/settings/mfa",
                security: !0,
                routeParams: {
                    path: [],
                    query: [{
                        name: "preferred_asset_name"
                    }]
                }
            }
              , a = s(i.q)
              , {query: c={}, options: l={}, config: d={}} = null != (e = (yield a({
                request: t,
                operation: n
            })).request) ? e : {};
            return (0,
            u.Wk)({
                path: "/account/settings/mfa",
                query: c,
                config: (0,
                r.EZ)((0,
                r.ih)({}, d), {
                    basePath: "/api/internal"
                }),
                options: (0,
                r.EZ)((0,
                r.ih)({}, l), {
                    method: o.w.GET
                }),
                operation: n
            })
        })
          , c = t => {
            let {query: e} = null != t ? t : {};
            return ["GET", "account", "settings", "mfa", e]
        }
    },
    68734: function(t, e, n) {
        "use strict";
        n.d(e, {
            e: function() {
                return c
            }
        });
        var r = n(67646)
          , s = n(80150)
          , i = n(77239)
          , u = n(78246)
          , o = n(44199)
          , a = n(56871)
          , c = t => (0,
        r.Cr)(void 0, null, function*() {
            let e = {
                id: "updatePreferences",
                module: "preferences",
                route: "/preferences",
                security: !0,
                routeParams: {
                    path: [],
                    query: [{
                        name: "preferred_asset_name"
                    }]
                }
            }
              , n = s(i.q)
              , {query: c={}, payload: l, options: d={}, config: h={}} = (yield n({
                request: t,
                operation: e
            })).request;
            return (0,
            u.Wk)({
                path: "/preferences",
                query: c,
                config: (0,
                r.EZ)((0,
                r.ih)({}, h), {
                    basePath: "/api/internal"
                }),
                options: (0,
                r.EZ)((0,
                r.ih)({}, d), {
                    method: o.w.PUT,
                    body: l,
                    headers: (0,
                    r.EZ)((0,
                    r.ih)({}, null == d ? void 0 : d.headers), {
                        "Content-Type": a.a.Json
                    })
                }),
                operation: e
            })
        })
    },
    64706: function(t, e, n) {
        "use strict";
        n.d(e, {
            w: function() {
                return m
            }
        });
        var r = n(81864)
          , s = n(67646)
          , i = n(80150)
          , u = n(77239)
          , o = n(78246)
          , a = n(44199)
          , c = t => (0,
        s.Cr)(void 0, null, function*() {
            var e;
            let n = {
                id: "getKycFlows",
                module: "kyc",
                route: "/kyc/flows",
                security: !0,
                routeParams: {
                    path: [],
                    query: [{
                        name: "preferred_asset_name"
                    }]
                }
            }
              , r = i(u.q)
              , {query: c={}, options: l={}, config: d={}} = null != (e = (yield r({
                request: t,
                operation: n
            })).request) ? e : {};
            return (0,
            o.Wk)({
                path: "/kyc/flows",
                query: c,
                config: (0,
                s.EZ)((0,
                s.ih)({}, d), {
                    basePath: "/api/internal"
                }),
                options: (0,
                s.EZ)((0,
                s.ih)({}, l), {
                    method: a.w.GET
                }),
                operation: n
            })
        })
          , l = t => {
            let {query: e} = null != t ? t : {};
            return ["GET", "kyc", "flows", e]
        }
          , d = n(88144)
          , h = n(71329)
          , f = n(84394)
          , p = ({params: t={}, options: e={}}={}) => (0,
        r.E)((0,
        r.i)((0,
        r.i)({}, h.O), e), {
            select: e.select || f.tF,
            queryFn: () => c(t),
            queryKey: l(t)
        })
          , m = (t={}) => (0,
        d.a)(p(t))
    },
    16352: function(t, e, n) {
        "use strict";
        n.d(e, {
            y: function() {
                return m
            }
        });
        var r = n(81864)
          , s = n(67646)
          , i = n(80150)
          , u = n(77239)
          , o = n(78246)
          , a = n(44199)
          , c = t => (0,
        s.Cr)(void 0, null, function*() {
            let e = {
                id: "getPreferences",
                module: "preferences",
                route: "/preferences",
                security: !0,
                routeParams: {
                    path: [],
                    query: [{
                        name: "keys"
                    }, {
                        name: "preferred_asset_name"
                    }]
                }
            }
              , n = i(u.q)
              , {query: r={}, options: c={}, config: l={}} = (yield n({
                request: t,
                operation: e
            })).request;
            return (0,
            o.Wk)({
                path: "/preferences",
                query: r,
                config: (0,
                s.EZ)((0,
                s.ih)({}, l), {
                    basePath: "/api/internal"
                }),
                options: (0,
                s.EZ)((0,
                s.ih)({}, c), {
                    method: a.w.GET
                }),
                operation: e
            })
        })
          , l = t => {
            let {query: e} = t;
            return ["GET", "preferences", e]
        }
          , d = n(88144)
          , h = n(71329)
          , f = n(84394)
          , p = ({params: t, options: e={}}) => (0,
        r.E)((0,
        r.i)((0,
        r.i)({}, h.O), e), {
            select: e.select || f.tF,
            queryFn: () => c(t),
            queryKey: l(t)
        })
          , m = t => (0,
        d.a)(p(t))
    },
    78047: function(t, e, n) {
        "use strict";
        n.d(e, {
            W: function() {
                return c
            }
        });
        var r = n(81864)
          , s = n(58637)
          , i = n(88144)
          , u = n(71329)
          , o = n(84394)
          , a = ({params: t={}, options: e={}}={}) => (0,
        r.E)((0,
        r.i)((0,
        r.i)({}, u.O), e), {
            select: e.select || o.tF,
            queryFn: () => (0,
            s.W)(t),
            queryKey: (0,
            s.w)(t)
        })
          , c = (t={}) => (0,
        i.a)(a(t))
    },
    98029: function(t, e, n) {
        "use strict";
        n.d(e, {
            D: function() {
                return d
            }
        });
        var r = n(67294)
          , s = n(59289)
          , i = n(27037)
          , u = n(7506)
          , o = n(24139)
          , a = class extends u.l {
            #t;
            #e = void 0;
            #n;
            #r;
            constructor(t, e) {
                super(),
                this.#t = t,
                this.setOptions(e),
                this.bindMethods(),
                this.#s()
            }
            bindMethods() {
                this.mutate = this.mutate.bind(this),
                this.reset = this.reset.bind(this)
            }
            setOptions(t) {
                let e = this.options;
                this.options = this.#t.defaultMutationOptions(t),
                (0,
                o.VS)(this.options, e) || this.#t.getMutationCache().notify({
                    type: "observerOptionsUpdated",
                    mutation: this.#n,
                    observer: this
                }),
                e?.mutationKey && this.options.mutationKey && (0,
                o.Ym)(e.mutationKey) !== (0,
                o.Ym)(this.options.mutationKey) ? this.reset() : this.#n?.state.status === "pending" && this.#n.setOptions(this.options)
            }
            onUnsubscribe() {
                this.hasListeners() || this.#n?.removeObserver(this)
            }
            onMutationUpdate(t) {
                this.#s(),
                this.#i(t)
            }
            getCurrentResult() {
                return this.#e
            }
            reset() {
                this.#n?.removeObserver(this),
                this.#n = void 0,
                this.#s(),
                this.#i()
            }
            mutate(t, e) {
                return this.#r = e,
                this.#n?.removeObserver(this),
                this.#n = this.#t.getMutationCache().build(this.#t, this.options),
                this.#n.addObserver(this),
                this.#n.execute(t)
            }
            #s() {
                let t = this.#n?.state ?? (0,
                s.R)();
                this.#e = {
                    ...t,
                    isPending: "pending" === t.status,
                    isSuccess: "success" === t.status,
                    isError: "error" === t.status,
                    isIdle: "idle" === t.status,
                    mutate: this.mutate,
                    reset: this.reset
                }
            }
            #i(t) {
                i.V.batch( () => {
                    if (this.#r && this.hasListeners()) {
                        let e = this.#e.variables
                          , n = this.#e.context;
                        t?.type === "success" ? (this.#r.onSuccess?.(t.data, e, n),
                        this.#r.onSettled?.(t.data, null, e, n)) : t?.type === "error" && (this.#r.onError?.(t.error, e, n),
                        this.#r.onSettled?.(void 0, t.error, e, n))
                    }
                    this.listeners.forEach(t => {
                        t(this.#e)
                    }
                    )
                }
                )
            }
        }
          , c = n(30202)
          , l = n(86290);
        function d(t, e) {
            let n = (0,
            c.NL)(e)
              , [s] = r.useState( () => new a(n,t));
            r.useEffect( () => {
                s.setOptions(t)
            }
            , [s, t]);
            let u = r.useSyncExternalStore(r.useCallback(t => s.subscribe(i.V.batchCalls(t)), [s]), () => s.getCurrentResult(), () => s.getCurrentResult())
              , o = r.useCallback( (t, e) => {
                s.mutate(t, e).catch(l.Z)
            }
            , [s]);
            if (u.error && (0,
            l.L)(s.options.throwOnError, [u.error]))
                throw u.error;
            return {
                ...u,
                mutate: o,
                mutateAsync: u.mutate
            }
        }
    },
    89004: function(t, e, n) {
        "use strict";
        function r(t) {
            return e => {
                let n = (t ? Math[t] : Math.trunc)(e);
                return 0 === n ? 0 : n
            }
        }
        n.d(e, {
            u: function() {
                return r
            }
        })
    },
    42060: function(t, e, n) {
        "use strict";
        n.d(e, {
            d: function() {
                return s
            }
        });
        var r = n(56703);
        function s(t) {
            for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++)
                n[s - 1] = arguments[s];
            let i = r.L.bind(null, t || n.find(t => "object" == typeof t));
            return n.map(i)
        }
    },
    18433: function(t, e, n) {
        "use strict";
        n.d(e, {
            j: function() {
                return a
            }
        });
        var r = n(42060)
          , s = n(97826);
        function i(t) {
            let e = (0,
            s.Q)(t)
              , n = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
            return n.setUTCFullYear(e.getFullYear()),
            +t - +n
        }
        var u = n(23599);
        function o(t, e) {
            let n = (0,
            s.Q)(t, null == e ? void 0 : e.in);
            return n.setHours(0, 0, 0, 0),
            n
        }
        function a(t, e, n) {
            let[s,a] = (0,
            r.d)(null == n ? void 0 : n.in, t, e)
              , l = c(s, a)
              , d = Math.abs(function(t, e, n) {
                let[s,a] = (0,
                r.d)(void 0, t, e)
                  , c = o(s)
                  , l = o(a);
                return Math.round((+c - i(c) - (+l - i(l))) / u.dP)
            }(s, a));
            s.setDate(s.getDate() - l * d);
            let h = Number(c(s, a) === -l)
              , f = l * (d - h);
            return 0 === f ? 0 : f
        }
        function c(t, e) {
            let n = t.getFullYear() - e.getFullYear() || t.getMonth() - e.getMonth() || t.getDate() - e.getDate() || t.getHours() - e.getHours() || t.getMinutes() - e.getMinutes() || t.getSeconds() - e.getSeconds() || t.getMilliseconds() - e.getMilliseconds();
            return n < 0 ? -1 : n > 0 ? 1 : n
        }
    },
    72671: function(t, e, n) {
        "use strict";
        n.d(e, {
            A: function() {
                return u
            }
        });
        var r = n(89004)
          , s = n(42060)
          , i = n(23599);
        function u(t, e, n) {
            let[u,o] = (0,
            s.d)(null == n ? void 0 : n.in, t, e)
              , a = (+u - +o) / i.vh;
            return (0,
            r.u)(null == n ? void 0 : n.roundingMethod)(a)
        }
    }
}]);
