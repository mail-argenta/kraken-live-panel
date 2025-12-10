!function() {
    try {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , e = (new t.Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {},
        t._sentryDebugIds[e] = "d26a70df-afe0-4b55-b7e9-5445477a57e2",
        t._sentryDebugIdIdentifier = "sentry-dbid-d26a70df-afe0-4b55-b7e9-5445477a57e2")
    } catch (t) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[1779], {
    18690: function(t, e, r) {
        r.d(e, {
            p: function() {
                return o
            }
        });
        var n = r(85893)
          , s = r(52188)
          , i = r(88303);
        let o = t => {
            let {type: e, children: r} = t;
            return (0,
            n.jsx)(s.h, {
                emphasis: "low",
                tone: "brand",
                type: e,
                href: i.Jt.ContactSupport,
                target: "_blank",
                children: r
            })
        }
    },
    12698: function(t, e, r) {
        r.d(e, {
            q: function() {
                return I
            }
        });
        var n = r(85893)
          , s = r(67294)
          , i = r(76125)
          , o = r(16310)
          , a = r(87536)
          , u = r(47533)
          , l = r(98029)
          , c = r(41664)
          , d = r.n(c)
          , h = r(82926)
          , p = r(56238)
          , g = r(27511)
          , m = r(88223)
          , f = r(56637)
          , y = r(64705)
          , v = r(36595)
          , b = r(57600)
          , w = r(97085)
          , x = r(18706)
          , A = r(73184)
          , P = r(7408)
          , j = r(49874)
          , F = r(99335)
          , E = r(39424)
          , S = r(19351);
        let C = function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
              , e = async () => {
                try {
                    let e = await Promise.all([r.e(3714), r.e(5584), r.e(1566)]).then(r.bind(r, 11566));
                    window.xchg = {},
                    e.default(window.xchg);
                    let n = window.xchg.i;
                    if (!n) {
                        E.uT("Failed to load xchgId");
                        return
                    }
                    n.init(...t)
                } catch (t) {
                    E.uT("Failed to initialize xchgId", t)
                }
            }
            ;
            return {
                ref: (0,
                S.O)({
                    onMount: e
                }),
                generateDeviceFingerprint: t => {
                    try {
                        let e = window.xchg.i;
                        if (e && e.submit)
                            return e.submit(t)
                    } catch (t) {
                        E.uT("Failed calculate CSR", t)
                    }
                    return ""
                }
            }
        };
        var k = r(88303)
          , R = r(18690)
          , O = r(22972);
        let U = "This value is not a valid email address."
          , M = t => {
            var e, r, n;
            return (0,
            w.wb)(t) && ((null === (e = t.kwebErrors) || void 0 === e ? void 0 : e.some(t => {
                var e;
                return null === (e = t.error) || void 0 === e ? void 0 : e.includes(U)
            }
            )) || (null === (n = t.kwebData) || void 0 === n ? void 0 : null === (r = n.errors) || void 0 === r ? void 0 : r.some(t => {
                var e;
                return null === (e = t.error) || void 0 === e ? void 0 : e.includes(U)
            }
            )))
        }
          , _ = "INVALID_EMAIL"
          , B = "GENERAL_BACKEND_ERROR"
          , I = t => {
            let {type: e, hideContactSupport: r} = t
              , {t: c} = (0,
            i.$G)()
              , [E,S] = (0,
            s.useState)(!1)
              , {generateDeviceFingerprint: I, ref: V} = C([!0])
              , N = o.Ry({
                email: o.Z_().test("has-@-symbol", _, t => !t || /.+?@.+?/.test(t)).required(c("AccountsApp.ForgotPages.EmailRequired"))
            })
              , q = (0,
            a.cI)({
                mode: "onSubmit",
                defaultValues: {
                    email: ""
                },
                resolver: (0,
                u.X)(N)
            })
              , {mutate: L, isPending: Z} = (0,
            l.D)({
                mutationFn: async t => {
                    let {email: r} = t;
                    q.setError("email", {});
                    let {data: n} = await (0,
                    b.w)()
                      , {solution: s} = await (0,
                    x.p)(n.result.challenge2)
                      , i = I({
                        email: r
                    });
                    return "ForgotUsername" === e ? (0,
                    v.i)({
                        headers: {
                            "x-pow": s
                        },
                        payload: {
                            email: r,
                            csr: i
                        }
                    }) : (0,
                    y.x)({
                        headers: {
                            "x-pow": s
                        },
                        payload: {
                            email: r,
                            csr: i
                        }
                    })
                }
                ,
                onMutate: () => {
                    "ForgotPassword" === e && O.Lt.emailAccessVerificationRequested({
                        recoveryType: "password_reset"
                    })
                }
                ,
                onError: t => {
                    q.setError("email", {
                        message: M(t) ? U : B
                    }),
                    "ForgotPassword" === e && O.Lt.emailAccessVerificationFailed({
                        errorMessage: (0,
                        w.wb)(t) ? (0,
                        P.Z)(t) : "unknown error"
                    })
                }
                ,
                onSuccess: () => S(!0)
            })
              , T = (0,
            s.useCallback)( () => S(!1), []);
            return E ? (0,
            n.jsxs)(F.A, {
                onBack: T,
                topIllustration: "Shield",
                headerCta: r ? null : "contact-support",
                children: [(0,
                n.jsx)(h.x, {
                    type: "heading3",
                    as: "div",
                    spacingBottom: 4,
                    children: c("AccountsApp.ForgotPages.SuccessTitle")
                }), "ForgotUsername" === e && (0,
                n.jsx)(h.x, {
                    type: "body1",
                    tone: "neutral",
                    as: "div",
                    spacingBottom: 7,
                    children: (0,
                    n.jsx)(i.cC, {
                        i18nKey: "AccountsApp.ForgotPages.ForgotUsername.SuccessBody",
                        components: {
                            b: (0,
                            n.jsx)("b", {})
                        },
                        values: {
                            email: q.getValues().email
                        }
                    })
                }), "ForgotPassword" === e && (0,
                n.jsxs)(n.Fragment, {
                    children: [(0,
                    n.jsx)(h.x, {
                        type: "body1",
                        tone: "neutral",
                        as: "div",
                        spacingBottom: 4,
                        children: (0,
                        n.jsx)(i.cC, {
                            i18nKey: "AccountsApp.ForgotPages.ForgotPassword.SuccessBody",
                            components: {
                                b: (0,
                                n.jsx)("b", {})
                            },
                            values: {
                                email: q.getValues().email
                            }
                        })
                    }), (0,
                    n.jsx)(p.P_, {
                        size: "lg",
                        direction: "inline",
                        presentation: "widget",
                        tone: "warning",
                        icon: A.v,
                        text: c("AccountsApp.ForgotPages.ForgotPassword.SuccessNotification"),
                        spacingBottom: 4
                    }), (0,
                    n.jsx)(h.x, {
                        type: "body1",
                        tone: "neutral",
                        as: "div",
                        spacingBottom: 7,
                        children: c("AccountsApp.ForgotPages.ForgotPassword.RequestIntervalNotice")
                    })]
                }), (0,
                n.jsx)(d(), {
                    href: (0,
                    j.UY)(k.k2.SignIn),
                    passHref: !0,
                    legacyBehavior: !0,
                    children: (0,
                    n.jsx)(g.Q, {
                        size: "xl",
                        text: c("AccountsApp.ForgotPages.SuccessButton"),
                        fullWidth: !0,
                        emphasis: "medium",
                        tone: "primary"
                    })
                })]
            }) : (0,
            n.jsxs)(F.A, {
                backHref: (0,
                j.UY)(k.k2.SignIn),
                headerCta: r ? null : "contact-support",
                children: [(0,
                n.jsx)(h.x, {
                    type: "heading3",
                    spacingBottom: 4,
                    as: "div",
                    children: c("ForgotUsername" === e ? "AccountsApp.ForgotPages.ForgotUsername.Title" : "AccountsApp.ForgotPages.ForgotPassword.Title")
                }), (0,
                n.jsx)(h.x, {
                    type: "body1",
                    tone: "neutral",
                    as: "div",
                    spacingBottom: 7,
                    children: c("ForgotUsername" === e ? "AccountsApp.ForgotPages.ForgotUsername.Body" : "AccountsApp.ForgotPages.ForgotPassword.Body")
                }), (0,
                n.jsx)(a.RV, {
                    ...q,
                    children: (0,
                    n.jsxs)("form", {
                        ref: V,
                        onSubmit: q.handleSubmit(t => L(t)),
                        children: [(0,
                        n.jsx)(a.Qr, {
                            name: "email",
                            render: t => {
                                let {field: r, fieldState: {error: s}} = t;
                                return (0,
                                n.jsx)(m.I, {
                                    size: "xxl",
                                    spacingBottom: 7,
                                    label: c("AccountsApp.ForgotPages.Email"),
                                    "aria-invalid": !!(null == s ? void 0 : s.message),
                                    ...r,
                                    error: (null == s ? void 0 : s.message) === _ || (null == s ? void 0 : s.message) === U ? (0,
                                    n.jsx)("div", {
                                        children: (0,
                                        n.jsx)(i.cC, {
                                            i18nKey: "AccountsApp.ForgotPages.InvalidEmail",
                                            components: {
                                                ContactSupport: (0,
                                                n.jsx)(R.p, {
                                                    type: "body2"
                                                })
                                            }
                                        })
                                    }) : (null == s ? void 0 : s.message) === B ? (0,
                                    n.jsx)("div", {
                                        children: (0,
                                        n.jsx)(i.cC, {
                                            i18nKey: "ForgotUsername" === e ? "AccountsApp.ForgotPages.ErrorRetrieving" : "AccountsApp.ForgotPages.ErrorRetrievingPassword",
                                            components: {
                                                ContactSupport: (0,
                                                n.jsx)(R.p, {
                                                    type: "body2"
                                                })
                                            }
                                        })
                                    }) : null == s ? void 0 : s.message
                                })
                            }
                        }), (0,
                        n.jsx)(f.z, {
                            size: "xl",
                            type: "submit",
                            loading: Z,
                            text: c("AccountsApp.ForgotPages.SubmitButton"),
                            fullWidth: !0,
                            emphasis: "high",
                            tone: "primary"
                        })]
                    })
                })]
            })
        }
    },
    27744: function(t, e, r) {
        r.d(e, {
            R: function() {
                return i
            }
        });
        var n = r(85893)
          , s = r(12698);
        let i = () => (0,
        n.jsx)(s.q, {
            type: "ForgotUsername"
        })
    },
    81779: function(t, e, r) {
        r.r(e),
        r.d(e, {
            __N_SSG: function() {
                return i
            }
        });
        var n = r(85893)
          , s = r(27744)
          , i = !0;
        e.default = () => (0,
        n.jsx)(s.R, {})
    },
    18706: function(t, e, r) {
        r.d(e, {
            p: function() {
                return a
            }
        });
        var n = r(74291)
          , s = t => {
            let e = new Uint8Array(t.length / 2);
            for (let r = 0, n = 0; r < t.length; r += 2)
                e[n++] = parseInt(t.substr(r, 2), 16);
            return e
        }
          , i = t => {
            let e = "";
            for (let r = 0; r < t.length; ++r)
                e += t[r].toString(16).padStart(2, "0");
            return e
        }
          , o = t => (0,
        n.C)(void 0, null, function*() {
            let e = yield crypto.subtle.digest("SHA-256", t);
            return crypto.subtle.digest("SHA-256", e)
        })
          , a = (t, ...e) => (0,
        n.C)(void 0, [t, ...e], function*(t, e={}) {
            let r;
            let {logTime: n} = e
              , a = s(t.data)
              , u = new Uint8Array(t.randomness)
              , l = new Uint8Array(a.length + u.length);
            l.set(a),
            n && console.time("PoW");
            let c = 1;
            do
                crypto.getRandomValues(u),
                l.set(u, a.length),
                r = new DataView((yield o(l))),
                c++;
            while (r.getUint32(0) >> 32 - t.difficulty != 0);
            return n && console.timeEnd("PoW"),
            {
                solution: i(u),
                attempts: c
            }
        })
    },
    64705: function(t, e, r) {
        r.d(e, {
            x: function() {
                return l
            }
        });
        var n = r(67646)
          , s = r(80150)
          , i = r(77239)
          , o = r(78246)
          , a = r(44199)
          , u = r(56871)
          , l = t => (0,
        n.Cr)(void 0, null, function*() {
            let e = {
                id: "beginResetPassword",
                module: "account",
                route: "/account/password/reset",
                security: !1,
                routeParams: {
                    path: [],
                    query: [{
                        name: "preferred_asset_name"
                    }]
                }
            }
              , r = s(i.q)
              , {query: l={}, headers: c, payload: d, options: h={}, config: p={}} = (yield r({
                request: t,
                operation: e
            })).request;
            return (0,
            o.Wk)({
                path: "/account/password/reset",
                query: l,
                config: (0,
                n.EZ)((0,
                n.ih)({}, p), {
                    basePath: "/api/internal"
                }),
                options: (0,
                n.EZ)((0,
                n.ih)({}, h), {
                    method: a.w.POST,
                    body: d,
                    headers: (0,
                    n.ih)((0,
                    n.EZ)((0,
                    n.ih)({}, null == h ? void 0 : h.headers), {
                        "Content-Type": u.a.Json
                    }), c)
                }),
                operation: e
            })
        })
    },
    36595: function(t, e, r) {
        r.d(e, {
            i: function() {
                return l
            }
        });
        var n = r(67646)
          , s = r(80150)
          , i = r(77239)
          , o = r(78246)
          , a = r(44199)
          , u = r(56871)
          , l = t => (0,
        n.Cr)(void 0, null, function*() {
            let e = {
                id: "getUsernameByEmail",
                module: "account",
                route: "/account/username-by-email",
                security: !1,
                routeParams: {
                    path: [],
                    query: [{
                        name: "preferred_asset_name"
                    }]
                }
            }
              , r = s(i.q)
              , {query: l={}, headers: c, payload: d, options: h={}, config: p={}} = (yield r({
                request: t,
                operation: e
            })).request;
            return (0,
            o.Wk)({
                path: "/account/username-by-email",
                query: l,
                config: (0,
                n.EZ)((0,
                n.ih)({}, p), {
                    basePath: "/api/internal"
                }),
                options: (0,
                n.EZ)((0,
                n.ih)({}, h), {
                    method: a.w.POST,
                    body: d,
                    headers: (0,
                    n.ih)((0,
                    n.EZ)((0,
                    n.ih)({}, null == h ? void 0 : h.headers), {
                        "Content-Type": u.a.Json
                    }), c)
                }),
                operation: e
            })
        })
    },
    57600: function(t, e, r) {
        r.d(e, {
            w: function() {
                return u
            }
        });
        var n = r(67646)
          , s = r(80150)
          , i = r(77239)
          , o = r(78246)
          , a = r(44199)
          , u = t => (0,
        n.Cr)(void 0, null, function*() {
            var e;
            let r = {
                id: "initSession",
                module: "sessions",
                route: "/session",
                security: !1,
                routeParams: {
                    path: [],
                    query: [{
                        name: "preferred_asset_name"
                    }]
                }
            }
              , u = s(i.q)
              , {query: l={}, options: c={}, config: d={}} = null != (e = (yield u({
                request: t,
                operation: r
            })).request) ? e : {};
            return (0,
            o.Wk)({
                path: "/session",
                query: l,
                config: (0,
                n.EZ)((0,
                n.ih)({}, d), {
                    basePath: "/api/internal"
                }),
                options: (0,
                n.EZ)((0,
                n.ih)({}, c), {
                    method: a.w.GET
                }),
                operation: r
            })
        })
    },
    7408: function(t, e, r) {
        r.d(e, {
            Z: function() {
                return n
            }
        });
        var n = t => {
            var e;
            let r = t.response.headers.get("x-trace-id");
            return JSON.stringify({
                errors: null == (e = t.kwebErrors) ? void 0 : e.map( ({msg: t, type: e}) => ({
                    msg: t,
                    type: e
                })),
                message: t.message,
                xTraceId: r
            })
        }
    },
    47533: function(t, e, r) {
        r.d(e, {
            X: function() {
                return l
            }
        });
        var n = r(87536)
          , s = function(t, e, r) {
            if (t && "reportValidity"in t) {
                var s = (0,
                n.U2)(r, e);
                t.setCustomValidity(s && s.message || ""),
                t.reportValidity()
            }
        }
          , i = function(t, e) {
            var r = function(r) {
                var n = e.fields[r];
                n && n.ref && "reportValidity"in n.ref ? s(n.ref, r, t) : n.refs && n.refs.forEach(function(e) {
                    return s(e, r, t)
                })
            };
            for (var n in e.fields)
                r(n)
        }
          , o = function(t, e, r) {
            for (var n, s = -1, i = /^\w*$/.test(e) ? [e] : Array.isArray(n = e.replace(/["|']|\]/g, "").split(/\.|\[/)) ? n.filter(Boolean) : [], o = i.length, a = o - 1; ++s < o; ) {
                var u = i[s]
                  , l = r;
                if (s !== a) {
                    var c = t[u];
                    l = !(null != c && !Array.isArray(c) && "object" == typeof c && !(c instanceof Date) || Array.isArray(c)) ? isNaN(+i[s + 1]) ? {} : [] : c
                }
                t[u] = l,
                t = t[u]
            }
            return t
        }
          , a = function(t, e) {
            e.shouldUseNativeValidation && i(t, e);
            var r = {};
            for (var s in t) {
                var a = (0,
                n.U2)(e.fields, s)
                  , l = Object.assign(t[s] || {}, {
                    ref: a && a.ref
                });
                if (u(e.names || Object.keys(t), s)) {
                    var c = Object.assign({}, (0,
                    n.U2)(r, s));
                    o(c, "root", l),
                    o(r, s, c)
                } else
                    o(r, s, l)
            }
            return r
        }
          , u = function(t, e) {
            return t.some(function(t) {
                return t.startsWith(e + ".")
            })
        };
        function l(t, e, r) {
            return void 0 === e && (e = {}),
            void 0 === r && (r = {}),
            function(s, o, u) {
                try {
                    return Promise.resolve(function(n, a) {
                        try {
                            var l = (e.context,
                            Promise.resolve(t["sync" === r.mode ? "validateSync" : "validate"](s, Object.assign({
                                abortEarly: !1
                            }, e, {
                                context: o
                            }))).then(function(t) {
                                return u.shouldUseNativeValidation && i({}, u),
                                {
                                    values: r.raw ? s : t,
                                    errors: {}
                                }
                            }))
                        } catch (t) {
                            return a(t)
                        }
                        return l && l.then ? l.then(void 0, a) : l
                    }(0, function(t) {
                        var e;
                        if (!t.inner)
                            throw t;
                        return {
                            values: {},
                            errors: a((e = !u.shouldUseNativeValidation && "all" === u.criteriaMode,
                            (t.inner || []).reduce(function(t, r) {
                                if (t[r.path] || (t[r.path] = {
                                    message: r.message,
                                    type: r.type
                                }),
                                e) {
                                    var s = t[r.path].types
                                      , i = s && s[r.type];
                                    t[r.path] = (0,
                                    n.KN)(r.path, e, t, r.type, i ? [].concat(i, r.message) : r.message)
                                }
                                return t
                            }, {})), u)
                        }
                    }))
                } catch (t) {
                    return Promise.reject(t)
                }
            }
        }
    },
    98029: function(t, e, r) {
        r.d(e, {
            D: function() {
                return d
            }
        });
        var n = r(67294)
          , s = r(59289)
          , i = r(27037)
          , o = r(7506)
          , a = r(24139)
          , u = class extends o.l {
            #t;
            #e = void 0;
            #r;
            #n;
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
                a.VS)(this.options, e) || this.#t.getMutationCache().notify({
                    type: "observerOptionsUpdated",
                    mutation: this.#r,
                    observer: this
                }),
                e?.mutationKey && this.options.mutationKey && (0,
                a.Ym)(e.mutationKey) !== (0,
                a.Ym)(this.options.mutationKey) ? this.reset() : this.#r?.state.status === "pending" && this.#r.setOptions(this.options)
            }
            onUnsubscribe() {
                this.hasListeners() || this.#r?.removeObserver(this)
            }
            onMutationUpdate(t) {
                this.#s(),
                this.#i(t)
            }
            getCurrentResult() {
                return this.#e
            }
            reset() {
                this.#r?.removeObserver(this),
                this.#r = void 0,
                this.#s(),
                this.#i()
            }
            mutate(t, e) {
                return this.#n = e,
                this.#r?.removeObserver(this),
                this.#r = this.#t.getMutationCache().build(this.#t, this.options),
                this.#r.addObserver(this),
                this.#r.execute(t)
            }
            #s() {
                let t = this.#r?.state ?? (0,
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
                    if (this.#n && this.hasListeners()) {
                        let e = this.#e.variables
                          , r = this.#e.context;
                        t?.type === "success" ? (this.#n.onSuccess?.(t.data, e, r),
                        this.#n.onSettled?.(t.data, null, e, r)) : t?.type === "error" && (this.#n.onError?.(t.error, e, r),
                        this.#n.onSettled?.(void 0, t.error, e, r))
                    }
                    this.listeners.forEach(t => {
                        t(this.#e)
                    }
                    )
                }
                )
            }
        }
          , l = r(30202)
          , c = r(86290);
        function d(t, e) {
            let r = (0,
            l.NL)(e)
              , [s] = n.useState( () => new u(r,t));
            n.useEffect( () => {
                s.setOptions(t)
            }
            , [s, t]);
            let o = n.useSyncExternalStore(n.useCallback(t => s.subscribe(i.V.batchCalls(t)), [s]), () => s.getCurrentResult(), () => s.getCurrentResult())
              , a = n.useCallback( (t, e) => {
                s.mutate(t, e).catch(c.Z)
            }
            , [s]);
            if (o.error && (0,
            c.L)(s.options.throwOnError, [o.error]))
                throw o.error;
            return {
                ...o,
                mutate: a,
                mutateAsync: o.mutate
            }
        }
    },
    73184: function(t, e, r) {
        r.d(e, {
            v: function() {
                return a
            }
        });
        var n = r(84615)
          , s = r(49237)
          , i = r(99443)
          , o = r(85893)
          , a = (0,
        s.y)(t => {
            let {svgProps: e, pathProps: r, circleProps: s, rectProps: a, lineProps: u, clipPathProps: l, gProps: c, defsProps: d, customGradient: h} = t;
            return (0,
            o.jsxs)(i.ny, (0,
            n.EZ)((0,
            n.ih)({}, e({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            })), {
                children: [h, (0,
                o.jsx)(i.y$, (0,
                n.ih)({}, r({
                    d: "M3.24767 16.8142L9.92704 5.12139C10.7811 3.62621 13.2189 3.6262 14.073 5.12139L20.7523 16.8142C21.5228 18.163 20.4023 19.75 18.6794 19.75H5.32063C3.59774 19.75 2.47717 18.163 3.24767 16.8142Z",
                    stroke: "white",
                    strokeWidth: "2"
                }))), (0,
                o.jsx)(i.y$, (0,
                n.ih)({}, r({
                    d: "M12 9L12 12",
                    stroke: "white",
                    strokeWidth: "2",
                    strokeLinecap: "round"
                }))), (0,
                o.jsx)(i.y$, (0,
                n.ih)({}, r({
                    d: "M12 15.0928L12 16.1238",
                    stroke: "white",
                    strokeWidth: "2",
                    strokeLinecap: "round"
                })))]
            }))
        }
        , "Warning")
    }
}]);
