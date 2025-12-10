!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "a3e90383-ff10-4aef-b95b-47febcadd12f",
        e._sentryDebugIdIdentifier = "sentry-dbid-a3e90383-ff10-4aef-b95b-47febcadd12f")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2210], {
    52210: function(e, n, t) {
        t.d(n, {
            A: function() {
                return j
            }
        });
        var a = t(67294)
          , i = t(11163)
          , s = t.n(i)
          , r = t(22205)
          , o = t.n(r)
          , c = t(64706)
          , l = t(16352)
          , u = t(78047)
          , d = t(22990)
          , f = t(30137)
          , g = t(98029)
          , p = t(68734);
        let w = "global.language"
          , h = ["useSetPreferredLanguage", w]
          , v = () => {
            let e = (0,
            a.useCallback)(async e => (0,
            p.e)({
                payload: {
                    [w]: e
                }
            }), []);
            return (0,
            g.D)({
                mutationFn: e,
                mutationKey: h
            })
        }
        ;
        var y = t(49874)
          , P = t(25579)
          , b = t(78400);
        let m = () => {
            try {
                localStorage.removeItem("username"),
                localStorage.removeItem("checkToken"),
                sessionStorage.removeItem("username")
            } catch (e) {}
        }
        ;
        var k = t(29893)
          , R = t(19351)
          , _ = t(47564)
          , I = t(14669)
          , L = t(88144)
          , E = t(3651)
          , U = t(17173)
          , S = t(91981);
        let C = e => {
            let n = parseInt(e, 32);
            return {
                channelId: 255 & n,
                deviceType: n >> 8 & 255,
                productId: n >> 16 & 255,
                featureId: n >> 24 & 65535
            }
        }
          , N = ["useGetOnboardingReferrer"]
          , D = () => {
            let e = (0,
            S.k)();
            return (0,
            L.a)({
                queryKey: N,
                queryFn: async () => {
                    let {data: e} = await (0,
                    E.V)()
                      , {k_origin: n} = e.result;
                    if (n) {
                        let {productId: e} = C(n);
                        if (e === U.z.Product.Pro)
                            return "Pro";
                        if (e === U.z.Product.Nft)
                            return "NFT"
                    }
                    return null
                }
                ,
                enabled: e
            })
        }
        ;
        var A = t(72671)
          , F = t(21444)
          , T = t(29142);
        let W = e => (0,
        A.A)(new Date, (0,
        F.K)(e)) > 72
          , z = e => {
            let {enabled: n} = e
              , {data: t} = (0,
            f.N)({
                options: {
                    enabled: n
                }
            })
              , {data: a} = (0,
            d.r)({
                options: {
                    enabled: n
                }
            })
              , {data: i} = (0,
            c.w)({
                options: {
                    enabled: n
                }
            })
              , {data: s} = (0,
            u.W)({
                options: {
                    enabled: n,
                    select: e => e.data.result.main
                }
            })
              , {skippedInTheLast30Days: r} = (0,
            T.d)();
            if (r || !t || !a || !i || !s || s.some(e => {
                let {type: n} = e;
                return "google_auth_totp" !== n
            }
            ))
                return {
                    isEligible: !1
                };
            let o = W(parseInt(a.created_time, 10))
              , l = t.settings_lock
              , g = void 0 !== i.find(e => "remediation" === e.type && ("open" === e.status || "processing" === e.status));
            return {
                isEligible: !l && !g && o,
                variant: s.some(e => {
                    let {type: n} = e;
                    return "google_auth_totp" === n
                }
                ) ? "AuthenticatorApp" : "No2FA"
            }
        }
        ;
        var J = t(69499);
        let O = "global.preferred_app"
          , j = function() {
            var e, n, t;
            let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , r = (0,
            R.k)()
              , {pro: g, spot: p, custody: w} = (0,
            b.C)()
              , [h,L] = (0,
            k.N$)()
              , E = D()
              , U = (0,
            l.y)({
                options: {
                    enabled: r
                },
                params: {
                    query: {
                        keys: [O]
                    }
                }
            })
              , S = null === (e = U.data) || void 0 === e ? void 0 : e[O]
              , {mutateAsync: C} = v()
              , {language: N} = (0,
            I.Qg)()
              , A = (0,
            f.N)({
                options: {
                    enabled: r
                }
            })
              , F = (null === (n = A.data) || void 0 === n ? void 0 : n.usertype) === "custody" || (null === (t = A.data) || void 0 === t ? void 0 : t.usertype) === "custody_organization"
              , T = (0,
            d.r)({
                options: {
                    enabled: r
                }
            })
              , W = (0,
            c.w)({
                options: {
                    enabled: r
                }
            })
              , j = (0,
            u.W)({
                options: {
                    enabled: r
                }
            })
              , {variant: q, isEligible: x} = z({
                enabled: r
            })
              , {needsBcmEmailChange: M} = (0,
            J.lA)({
                enabled: r
            })
              , B = (0,
            a.useRef)(!1)
              , [G,K] = (0,
            a.useState)(i)
              , Q = (0,
            a.useCallback)(async () => {
                let {searchParams: e, skipPasskeyPromotion: n, forcedPasskeyPromotionVariant: t, skipBcmChangeEmail: a} = G;
                if (!B.current) {
                    B.current = !0;
                    let i = "".concat(new URL(P.J.Consumer,p));
                    try {
                        if (F)
                            ( () => {
                                try {
                                    if (h) {
                                        if (h.startsWith("/")) {
                                            i = "".concat(new URL(h,w));
                                            return
                                        }
                                        let e = new URL(h);
                                        i = "".concat(new URL(e.pathname,w));
                                        return
                                    }
                                } catch (e) {}
                                i = "".concat(new URL("/app/portfolio",w))
                            }
                            )();
                        else if (M && !a) {
                            let e = new URL(P.k.SignIn,p);
                            e.searchParams.set(J.F6, "true"),
                            i = "".concat(e)
                        } else if (!window.opener || window.opener.closed || h) {
                            if (h) {
                                let e = h.startsWith("/") ? new URL(h,p) : new URL(h);
                                i = "".concat(e)
                            } else if (x && t && !n)
                                i = "".concat(P.k.EnablePasskey, "?v=").concat(t);
                            else if (x && q && !n)
                                i = "".concat(P.k.EnablePasskey, "?v=").concat(q);
                            else if (U.isSuccess && (!S || (null == S ? void 0 : S.value) === "classic"))
                                i = "".concat(new URL(P.J.ProductSelect,p));
                            else if ((null == S ? void 0 : S.value) && S.is_valid)
                                switch (S.value) {
                                case "pro":
                                    i = "".concat(new URL("/app",g));
                                    break;
                                case "consumer":
                                    i = "".concat(new URL(P.J.Consumer,p))
                                }
                        } else {
                            window.opener.postMessage("sign-in success", "*"),
                            window.opener.focus(),
                            window.close();
                            return
                        }
                    } catch (e) {} finally {
                        L()
                    }
                    try {
                        let n = new URL(i);
                        Object.entries(null != e ? e : {}).forEach(e => {
                            let[t,a] = e;
                            t !== k.Er && n.searchParams.set(t, a)
                        }
                        ),
                        i = "".concat(n)
                    } catch (e) {}
                    try {
                        m()
                    } catch (e) {}
                    if ("en-us" !== N && await C(N),
                    (0,
                    _.i)(i)) {
                        s().push((0,
                        y.ex)((0,
                        y.UY)(i)));
                        return
                    }
                    window.location.assign(i)
                }
            }
            , [G, p, N, F, M, h, x, q, U.isSuccess, S, w, g, L, C])
              , [V,Y] = (0,
            a.useState)(!1)
              , Z = (0,
            a.useCallback)(e => {
                if (e && K(n => o()({}, n, e)),
                !V) {
                    if (A.isPending || U.isPending || T.isPending || W.isPending || j.isPending || E.isPending) {
                        if (A.isPending)
                            A.refetch({
                                cancelRefetch: !1
                            });
                        else if (F) {
                            Q();
                            return
                        }
                        U.isPending && U.refetch({
                            cancelRefetch: !1
                        }),
                        T.isPending && T.refetch({
                            cancelRefetch: !1
                        }),
                        W.isPending && W.refetch({
                            cancelRefetch: !1
                        }),
                        j.isPending && j.refetch({
                            cancelRefetch: !1
                        }),
                        Y(!0);
                        return
                    }
                    Q()
                }
            }
            , [V, F, A, U, T, W, j, E, Q]);
            return (0,
            a.useEffect)( () => {
                !V || U.isPending || A.isPending || T.isPending || W.isPending || j.isPending || Q()
            }
            , [V, Q, U.isPending, A.isPending, T.isPending, W.isPending, j.isPending, E.isPending]),
            (0,
            a.useMemo)( () => ({
                successRedirect: Z,
                executing: V
            }), [V, Z])
        }
    },
    69499: function(e, n, t) {
        t.d(n, {
            F6: function() {
                return i
            },
            lA: function() {
                return s
            }
        });
        var a = t(30137);
        let i = "bcmEmailChange"
          , s = e => {
            var n;
            let {enabled: t} = e
              , {data: i} = (0,
            a.N)({
                options: {
                    enabled: t
                }
            });
            return {
                needsBcmEmailChange: null == i ? void 0 : null === (n = i.remediations) || void 0 === n ? void 0 : n.includes("email_change")
            }
        }
    },
    29142: function(e, n, t) {
        t.d(n, {
            d: function() {
                return r
            }
        });
        var a = t(18433)
          , i = t(77925)
          , s = t(88303);
        let r = () => {
            let[e,n] = (0,
            i.Z)(s.O9, 0);
            return {
                skippedInTheLast30Days: 30 >= (0,
                a.j)(Date.now(), null != e ? e : 0),
                setSkippedEnablePasskeyToNow: () => n(Date.now())
            }
        }
    }
}]);
