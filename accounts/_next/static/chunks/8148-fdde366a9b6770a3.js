!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "93787865-e488-4af1-9dfc-267540d1d4b6",
        e._sentryDebugIdIdentifier = "sentry-dbid-93787865-e488-4af1-9dfc-267540d1d4b6")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8148], {
    53546: function(e, n, t) {
        t.d(n, {
            A: function() {
                return j
            }
        });
        var a = t(85893)
          , i = t(76125)
          , s = t(87536)
          , r = t(47533)
          , o = t(16310)
          , l = t(67294)
          , c = t(98029)
          , u = t(82926)
          , d = t(88223)
          , p = t(56238)
          , g = t(56637)
          , m = t(56962)
          , f = t(3414)
          , x = t(20063)
          , h = t(53523)
          , A = t(30137)
          , y = t(99335)
          , v = t(52210);
        let S = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i
          , b = e => {
            let {onSuccess: n} = e
              , {t} = (0,
            i.$G)()
              , {mutate: f, isPending: x, isError: A} = (0,
            c.D)({
                mutationFn: e => (0,
                m.s)({
                    payload: {
                        address: e.newEmailAddress
                    }
                }),
                onSuccess: n
            })
              , y = (0,
            s.cI)({
                mode: "onSubmit",
                defaultValues: {
                    newEmailAddress: ""
                },
                resolver: (0,
                r.X)(o.Ry({
                    newEmailAddress: o.Z_().matches(S, t("AccountsApp.ChangeEmailBcm.Step1.InvalidEmail")).required(t("AccountsApp.ChangeEmailBcm.Step1.Required"))
                }).required())
            })
              , v = (0,
            l.useCallback)(e => {
                f(e)
            }
            , [f]);
            return (0,
            a.jsxs)("form", {
                onSubmit: y.handleSubmit(v),
                children: [(0,
                a.jsx)(u.x, {
                    type: "heading3",
                    as: "div",
                    spacingBottom: 4,
                    children: t("AccountsApp.ChangeEmailBcm.Step1.Title")
                }), (0,
                a.jsx)(u.x, {
                    type: "body1",
                    tone: "neutral",
                    as: "div",
                    spacingBottom: 7,
                    children: t("AccountsApp.ChangeEmailBcm.Step1.Body1")
                }), (0,
                a.jsx)(u.x, {
                    type: "body1",
                    tone: "neutral",
                    as: "div",
                    spacingBottom: 7,
                    children: t("AccountsApp.ChangeEmailBcm.Step1.Body2")
                }), (0,
                a.jsx)(u.x, {
                    type: "body1",
                    tone: "neutral",
                    as: "div",
                    spacingBottom: 3,
                    spacingHorizontal: 3,
                    children: (0,
                    a.jsx)("b", {
                        children: t("AccountsApp.ChangeEmailBcm.Step1.Instruction1")
                    })
                }), (0,
                a.jsx)(u.x, {
                    type: "body2",
                    tone: "neutral",
                    as: "div",
                    spacingBottom: 3,
                    spacingHorizontal: 7,
                    children: t("AccountsApp.ChangeEmailBcm.Step1.Instruction1Tip")
                }), (0,
                a.jsx)(u.x, {
                    type: "body1",
                    tone: "neutral",
                    as: "div",
                    spacingBottom: 3,
                    spacingHorizontal: 3,
                    children: (0,
                    a.jsx)("b", {
                        children: t("AccountsApp.ChangeEmailBcm.Step1.Instruction2")
                    })
                }), (0,
                a.jsx)(u.x, {
                    type: "body2",
                    tone: "neutral",
                    as: "div",
                    spacingBottom: 7,
                    spacingHorizontal: 7,
                    children: t("AccountsApp.ChangeEmailBcm.Step1.Instruction2Tip")
                }), (0,
                a.jsx)(u.x, {
                    type: "body4",
                    tone: "neutral",
                    as: "div",
                    spacingBottom: 3,
                    children: (0,
                    a.jsx)("b", {
                        children: t("AccountsApp.ChangeEmailBcm.Step1.Notification.Title")
                    })
                }), (0,
                a.jsx)(u.x, {
                    type: "body4",
                    tone: "neutral",
                    as: "div",
                    spacingBottom: 7,
                    children: t("AccountsApp.ChangeEmailBcm.Step1.Notification.Body")
                }), (0,
                a.jsx)(s.Qr, {
                    control: y.control,
                    name: "newEmailAddress",
                    render: e => {
                        let {field: n, fieldState: {error: i}} = e;
                        return (0,
                        a.jsx)(d.I, {
                            size: "xxl",
                            "aria-invalid": !!(null == i ? void 0 : i.message),
                            label: t("AccountsApp.ChangeEmailBcm.Step1.NewEmail"),
                            error: null == i ? void 0 : i.message,
                            ...n
                        })
                    }
                }), A && (0,
                a.jsx)(p.P_, {
                    size: "lg",
                    direction: "inline",
                    presentation: "widget",
                    tone: "negative",
                    icon: h.U,
                    title: t("AccountsApp.ChangeEmailBcm.Step1.ErrorNotification.Title"),
                    text: t("AccountsApp.ChangeEmailBcm.Step1.ErrorNotification.Body"),
                    spacingTop: 7
                }), (0,
                a.jsx)(g.z, {
                    size: "xl",
                    type: "submit",
                    loading: x,
                    text: t("AccountsApp.ChangeEmailBcm.Step1.Cta"),
                    fullWidth: !0,
                    emphasis: "high",
                    tone: "primary",
                    spacingTop: 7
                })]
            })
        }
          , I = e => {
            var n;
            let {onSuccess: t, onCancel: m} = e
              , {data: y} = (0,
            A.N)()
              , {t: v} = (0,
            i.$G)()
              , {mutate: S, isPending: b, isError: I} = (0,
            c.D)({
                mutationFn: e => (0,
                x.U)({
                    payload: e
                }),
                onSuccess: t
            })
              , {mutate: j, isPending: C, isError: w} = (0,
            c.D)({
                mutationFn: () => (0,
                f.f)(),
                onSuccess: m
            })
              , E = (0,
            s.cI)({
                mode: "onSubmit",
                defaultValues: {
                    confirm_code: "",
                    auth_code: ""
                },
                resolver: (0,
                r.X)(o.Ry({
                    confirm_code: o.Z_().required(v("AccountsApp.ChangeEmailBcm.Step2.Required")),
                    auth_code: o.Z_().required(v("AccountsApp.ChangeEmailBcm.Step2.Required"))
                }).required())
            })
              , B = (0,
            l.useCallback)(e => {
                S(e)
            }
            , [S]);
            return (0,
            a.jsxs)("form", {
                onSubmit: E.handleSubmit(B),
                children: [(0,
                a.jsx)(u.x, {
                    type: "heading3",
                    as: "div",
                    spacingBottom: 4,
                    children: v("AccountsApp.ChangeEmailBcm.Step2.Title")
                }), (0,
                a.jsx)(u.x, {
                    type: "body1",
                    tone: "neutral",
                    as: "div",
                    spacingBottom: 7,
                    children: v("AccountsApp.ChangeEmailBcm.Step2.Body1", {
                        newEmail: null == y ? void 0 : null === (n = y.email_update) || void 0 === n ? void 0 : n.address,
                        oldEmail: null == y ? void 0 : y.email
                    })
                }), (0,
                a.jsx)(u.x, {
                    type: "body1",
                    tone: "neutral",
                    as: "div",
                    spacingBottom: 7,
                    children: v("AccountsApp.ChangeEmailBcm.Step2.Body2")
                }), (0,
                a.jsx)(s.Qr, {
                    control: E.control,
                    name: "auth_code",
                    render: e => {
                        let {field: n, fieldState: {error: t}} = e;
                        return (0,
                        a.jsx)(d.I, {
                            size: "xxl",
                            "aria-invalid": !!(null == t ? void 0 : t.message),
                            label: v("AccountsApp.ChangeEmailBcm.Step2.AuthorisationCode"),
                            error: null == t ? void 0 : t.message,
                            spacingTop: 7,
                            spacingBottom: 7,
                            ...n
                        })
                    }
                }), (0,
                a.jsx)(s.Qr, {
                    control: E.control,
                    name: "confirm_code",
                    render: e => {
                        let {field: n, fieldState: {error: t}} = e;
                        return (0,
                        a.jsx)(d.I, {
                            size: "xxl",
                            "aria-invalid": !!(null == t ? void 0 : t.message),
                            label: v("AccountsApp.ChangeEmailBcm.Step2.ConfirmationCode"),
                            error: null == t ? void 0 : t.message,
                            spacingTop: 7,
                            spacingBottom: 7,
                            ...n
                        })
                    }
                }), (I || w) && (0,
                a.jsx)(p.P_, {
                    size: "lg",
                    direction: "inline",
                    presentation: "widget",
                    tone: "negative",
                    icon: h.U,
                    title: v("AccountsApp.ChangeEmailBcm.Step2.ErrorNotification.Title"),
                    text: v("AccountsApp.ChangeEmailBcm.Step2.ErrorNotification.Body"),
                    spacingTop: 7
                }), (0,
                a.jsxs)("div", {
                    className: "flex justify-between gap-x-5",
                    children: [(0,
                    a.jsx)(g.z, {
                        size: "xl",
                        loading: C,
                        text: v("AccountsApp.ChangeEmailBcm.Step2.Cancel"),
                        fullWidth: !0,
                        emphasis: "medium",
                        tone: "neutral",
                        spacingTop: 7,
                        disabled: b,
                        onPress: () => j()
                    }), (0,
                    a.jsx)(g.z, {
                        size: "xl",
                        type: "submit",
                        loading: b,
                        text: v("AccountsApp.ChangeEmailBcm.Step2.Cta"),
                        fullWidth: !0,
                        emphasis: "high",
                        tone: "primary",
                        spacingTop: 7,
                        disabled: C
                    })]
                })]
            })
        }
          , j = () => {
            let {successRedirect: e} = (0,
            v.A)({
                skipBcmChangeEmail: !0
            })
              , [n,t] = (0,
            l.useState)("step1");
            return (0,
            a.jsxs)(y.A, {
                children: ["step1" === n && (0,
                a.jsx)(b, {
                    onSuccess: () => t("step2")
                }), "step2" === n && (0,
                a.jsx)(I, {
                    onSuccess: e,
                    onCancel: () => t("step1")
                })]
            })
        }
    },
    66704: function(e, n, t) {
        t.d(n, {
            C: function() {
                return p
            }
        });
        var a = t(67294)
          , i = t(11163)
          , s = t.n(i)
          , r = t(74468)
          , o = t(40197)
          , l = t(30137)
          , c = t(26530)
          , u = t(25579)
          , d = t(52210);
        let p = e => {
            var n, t;
            let {isEnabled: i} = e
              , p = (0,
            r.k)().sessionDataState === o.T.AVAILABLE
              , {successRedirect: g} = (0,
            d.A)()
              , m = (0,
            a.useRef)(g);
            m.current = g;
            let f = "custody" === (0,
            c.W2)()
              , x = (0,
            l.N)({
                options: {
                    enabled: i
                }
            })
              , h = (null === (n = x.data) || void 0 === n ? void 0 : n.usertype) === "custody" || (null === (t = x.data) || void 0 === t ? void 0 : t.usertype) === "custody_organization";
            (0,
            a.useEffect)( () => {
                if (!x.isLoading && p && i) {
                    if (f && !h) {
                        s().push(u.k.LogoutAndSwitchToCustody);
                        return
                    }
                    m.current()
                }
            }
            , [p, i, h, x.isLoading, f, x])
        }
    },
    68148: function(e, n, t) {
        t.r(n),
        t.d(n, {
            __N_SSG: function() {
                return ee
            },
            default: function() {
                return en
            }
        });
        var a = t(85893)
          , i = t(67294)
          , s = t(76125)
          , r = t(87536)
          , o = t(11163)
          , l = t.n(o)
          , c = t(39332)
          , u = t(67089)
          , d = t(82926)
          , p = t(52188)
          , g = t(20029)
          , m = t(59045)
          , f = t(84576)
          , x = t(79326)
          , h = t(80304)
          , A = t(52210)
          , y = t(22972)
          , v = t(88303)
          , S = t(99335)
          , b = t(66704)
          , I = t(49874)
          , j = t(69499)
          , C = t(53546)
          , w = t(5894)
          , E = t(82978)
          , B = t(95047)
          , P = t(56238)
          , T = t(88223)
          , k = t(92900)
          , z = t(56637)
          , _ = t(72609)
          , R = t(78400);
        let M = (0,
        i.lazy)( () => Promise.all([t.e(7333), t.e(3367), t.e(8272), t.e(8421), t.e(7492)]).then(t.bind(t, 71704)).then(e => ({
            default: e.RootErrors
        })))
          , L = () => {
            let {t: e} = (0,
            s.$G)()
              , {formState: n} = (0,
            r.Gc)()
              , t = (0,
            c.useSearchParams)().has("fromOtpBypass")
              , {spot: o} = (0,
            R.C)()
              , {signInCta: l, forgotLinks: u, usernameLabel: g, hideSupportLink: m} = (0,
            w.x)()
              , {breakpoint: f} = (0,
            E.Gc)()
              , x = void 0 !== f && f <= E.u3.sm
              , h = (0,
            i.useMemo)( () => [{
                text: e("AccountsApp.SignInPage.SignInWithMasterKeyAvailableCta"),
                onPress: () => window.open(e("AccountsApp.SignInPage.SignInWithMasterKeyAvailableLink"), "_blank", "noopener, noreferrer")
            }], [e]);
            return (0,
            a.jsxs)("div", {
                className: "flex flex-col gap-6",
                children: [(0,
                a.jsxs)("div", {
                    className: "flex flex-col items-center gap-6",
                    children: [!x && (0,
                    a.jsx)(B.Q0, {
                        className: "w-40",
                        asset: "beast-animated"
                    }), (0,
                    a.jsx)("div", {
                        className: "w-full",
                        children: (0,
                        a.jsx)(d.x, {
                            type: "heading2",
                            as: "h1",
                            textAlign: x ? "left" : "center",
                            children: l
                        })
                    })]
                }), t && (0,
                a.jsx)(P.P_, {
                    size: "lg",
                    icon: _.Z,
                    tone: "info",
                    text: e("AccountsApp.SignInPage.SignInWithMasterKeyAvailable"),
                    buttonPropsList: h
                }), (0,
                a.jsxs)("div", {
                    className: "flex flex-col gap-2",
                    children: [(0,
                    a.jsxs)("div", {
                        className: "flex flex-col gap-ds-1",
                        children: [(0,
                        a.jsx)(r.Qr, {
                            name: "username",
                            render: e => {
                                var n;
                                let {field: t, fieldState: i} = e;
                                return (0,
                                a.jsx)(T.I, {
                                    size: "xxl",
                                    "aria-invalid": !!(i.isTouched && i.error),
                                    position: "top",
                                    onChange: t.onChange,
                                    value: t.value,
                                    ref: t.ref,
                                    label: g,
                                    name: t.name,
                                    autoFocus: !0,
                                    autoComplete: "username",
                                    onBlur: t.onBlur,
                                    error: null === (n = i.error) || void 0 === n ? void 0 : n.message
                                })
                            }
                        }), (0,
                        a.jsx)(r.Qr, {
                            name: "password",
                            render: n => {
                                var t;
                                let {field: i, fieldState: s} = n;
                                return (0,
                                a.jsx)(k.W, {
                                    size: "xxl",
                                    "aria-invalid": !!(s.isTouched && s.error),
                                    position: "bottom",
                                    onChange: i.onChange,
                                    value: i.value,
                                    ref: i.ref,
                                    label: e("AccountsApp.SignInPage.Password"),
                                    name: i.name,
                                    autoComplete: "current-password",
                                    onBlur: i.onBlur,
                                    error: null === (t = s.error) || void 0 === t ? void 0 : t.message
                                })
                            }
                        })]
                    }), (0,
                    a.jsx)(d.x, {
                        type: "body2",
                        tone: "neutral",
                        as: "p",
                        children: u
                    })]
                }), (0,
                a.jsx)(i.Suspense, {
                    fallback: void 0,
                    children: (0,
                    a.jsx)(M, {
                        context: "Sign In",
                        className: "mt-6"
                    })
                }), (0,
                a.jsx)("div", {
                    children: (0,
                    a.jsx)(z.z, {
                        emphasis: "high",
                        size: "xl",
                        type: "submit",
                        loading: n.isSubmitting,
                        text: e("AccountsApp.SignInPage.Cta"),
                        fullWidth: !0
                    })
                }), !m && (0,
                a.jsx)("p", {
                    className: "text-center",
                    children: (0,
                    a.jsx)(d.x, {
                        type: "body2",
                        tone: "neutral",
                        children: (0,
                        a.jsx)(s.cC, {
                            i18nKey: "AccountsApp.SignInPage.Support",
                            components: {
                                supportLink: (0,
                                a.jsx)(p.h, {
                                    emphasis: "low",
                                    tone: "brand",
                                    type: "body2",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    href: new URL(v.Jt.SupportForSignIn,o).toString()
                                })
                            }
                        })
                    })
                })]
            })
        }
        ;
        var N = t(97085)
          , q = t(64438);
        let F = (0,
        h.jl)("useSignInErrorHandler")
          , U = () => {
            let {t: e} = (0,
            s.$G)()
              , n = (0,
            r.Gc)();
            return {
                handleError: (0,
                i.useCallback)( (t, a) => {
                    let {credentialType: i, currentTfaMethod: s} = a
                      , r = "webauthn" === s.type
                      , o = void 0 === n.getValues("tfa_id") || r ? "root" : "tfa";
                    if (t === m.d) {
                        y.Lt.signInSubmitted({
                            credentialType: i,
                            errorMessage: null
                        }),
                        F.info("User requires 2FA");
                        return
                    }
                    if ((0,
                    N.wb)(t)) {
                        let r = t.kwebErrors
                          , u = null == r ? void 0 : r[0];
                        if (null == u ? void 0 : u.type) {
                            let t = (null == u ? void 0 : u.msg) || "";
                            switch (u.type.toLocaleLowerCase()) {
                            case "unapproved device":
                            case "mandatory device approval":
                                {
                                    var c;
                                    null !== s.type && y.Lt.tfaChallengeSucceeded({
                                        ...a,
                                        currentTfaMethod: s,
                                        tfaContext: {
                                            name: "sign-in",
                                            scope: "two-factor"
                                        }
                                    }),
                                    window.localStorage.setItem("username", n.getValues("username"));
                                    let e = null == r ? void 0 : null === (c = r.find(e => {
                                        let {type: n} = e;
                                        return "Unapproved device" === n
                                    }
                                    )) || void 0 === c ? void 0 : c.msg;
                                    if (e && window.localStorage.setItem("checkToken", e),
                                    null == r ? void 0 : r.some(e => {
                                        var n;
                                        return (null === (n = e.type) || void 0 === n ? void 0 : n.toLocaleLowerCase()) === "mandatory device approval"
                                    }
                                    )) {
                                        F.info("User requires mandatory device approval."),
                                        y.Lt.deviceApprovalRequested({
                                            approvalType: "login_confirmation"
                                        }).finally( () => {
                                            let e = (0,
                                            q.U)(v.k2.ConfirmSignIn);
                                            F.info("Redirecting the user to ".concat(e)),
                                            l().push(e)
                                        }
                                        );
                                        return
                                    }
                                    F.info("User requires regular (non-mandatory) device approval."),
                                    y.Lt.deviceApprovalRequested({
                                        approvalType: "device"
                                    }).finally( () => {
                                        let e = (0,
                                        q.U)(v.k2.DeviceApproval);
                                        F.info("Redirecting the user to ".concat(e)),
                                        l().push(e)
                                    }
                                    );
                                    return
                                }
                            case "account unconfirmed":
                                F.info("User's account is not confirmed."),
                                y.Lt.signInSubmitted({
                                    credentialType: i,
                                    errorMessage: u.type
                                }).finally( () => {
                                    let e = (0,
                                    q.U)(v.Jt.ActivateAccount);
                                    F.info("Redirecting the user to ".concat(e)),
                                    window.location.assign(e)
                                }
                                );
                                return;
                            case "rate limit exceeded":
                                n.setError(o, {
                                    message: e("AccountsApp.SignInPage.Errors.Rate limit exceeded"),
                                    type: u.type
                                }, {
                                    shouldFocus: !1
                                });
                                break;
                            case "password reset":
                            case "password reset required":
                                n.setError(o, {
                                    message: "Password reset required",
                                    type: u.type
                                }, {
                                    shouldFocus: !1
                                });
                                break;
                            default:
                                n.setError(o, {
                                    message: t,
                                    type: u.type
                                }, {
                                    shouldFocus: !1
                                })
                            }
                            if (void 0 !== n.getValues("tfa_id")) {
                                F.info("2FA challenge was invalid, so the will be asked to enter it again.", {
                                    error: u
                                }),
                                y.Lt.tfaChallengeFailed({
                                    ...a,
                                    errorMessage: u.type,
                                    tfaContext: {
                                        name: "sign-in",
                                        scope: "two-factor"
                                    }
                                });
                                return
                            }
                            F.warn("Sign-in error occurred.", {
                                error: u,
                                tags: {
                                    credentialType: i,
                                    ...s
                                }
                            }),
                            y.Lt.signInSubmitted({
                                credentialType: i,
                                errorMessage: u.type
                            });
                            return
                        }
                    }
                    if ("object" == typeof t && t && "response"in t)
                        try {
                            let a = t.response.status
                              , s = t.response.headers;
                            if (401 === a && ("cloudflare" === s.get("server") || null !== s.get("cf-ray"))) {
                                F.info("Received a CloudFlare rate limit error.", {
                                    error: t
                                }),
                                n.setError(o, {
                                    message: e("AccountsApp.SignInPage.Errors.Rate limit exceeded")
                                }),
                                y.Lt.signInSubmitted({
                                    credentialType: i,
                                    errorMessage: "CloudFlare rate limit exceeded"
                                });
                                return
                            }
                        } catch (e) {}
                    F.error("An unexpected error has occurred", {
                        error: t,
                        tags: {
                            credentialType: i,
                            ...s
                        }
                    }),
                    y.Lt.signInSubmitted({
                        credentialType: i,
                        errorMessage: "Unexpected error"
                    }),
                    n.setError(o, {
                        message: e("AccountsApp.SignInPage.Errors.UnexpectedError")
                    })
                }
                , [n, e])
            }
        }
        ;
        var V = t(44908)
          , G = t.n(V);
        let K = (e, n, t) => {
            let a = /@/.test(e.getValues("username")) ? "email" : "username"
              , i = e.getValues("tfa_id")
              , s = [...n || [], ...t || []].find(e => e.id === i);
            return {
                credentialType: a,
                currentTfaMethod: s ? {
                    type: s.type,
                    isMasterKey: (t || []).some(e => e.id === i)
                } : {
                    type: null,
                    isMasterKey: !1
                },
                availableTfaMethods: n && n.length > 0 ? {
                    main: G()(n.map(e => e.type)),
                    secret: G()(null == t ? void 0 : t.map(e => e.type))[0] || null
                } : {
                    main: [],
                    secret: null
                }
            }
        }
        ;
        var W = t(21280);
        let D = e => {
            let {tfaOptions: n, tfaMasterOptions: t} = e
              , a = (0,
            r.Gc)()
              , s = (0,
            r.qo)({
                name: "tfa_id"
            })
              , {availableTfaMethods: o, currentTfaMethod: l} = K(a, n, t)
              , c = (0,
            W.Z)(l.type);
            return (0,
            i.useEffect)( () => {
                s && null !== l.type && l.type !== c && y.Lt.tfaChallengeRequested({
                    availableTfaMethods: o,
                    currentTfaMethod: l,
                    tfaContext: {
                        name: "sign-in",
                        scope: null
                    }
                })
            }
            , [o, l, c, s]),
            null
        }
        ;
        var $ = t(60854)
          , Q = t(74148);
        let H = () => (0,
        $.J)() ? (0,
        a.jsx)(Q.l, {}) : null
          , Z = (0,
        i.lazy)( () => Promise.all([t.e(7333), t.e(3367), t.e(8272), t.e(8421), t.e(7492)]).then(t.bind(t, 71704)).then(e => ({
            default: e.TwoFactorAuthentication
        })))
          , Y = () => {
            let {t: e} = (0,
            s.$G)()
              , n = !!(0,
            c.useSearchParams)().get(j.F6)
              , {allowOnlyEmailSignIn: t} = (0,
            w.x)()
              , {updateTelemetricsConfig: o} = (0,
            f.W)();
            (0,
            i.useEffect)( () => {
                o(x.pQ.SIGN_IN)
            }
            , [o]);
            let l = (0,
            g.t)({
                config: {
                    allowOnlyEmailSignIn: t
                },
                translations: {
                    emailRequired: e("AccountsApp.SignInPage.Validation.EmailRequired"),
                    usernameRequired: e("AccountsApp.SignInPage.Validation.UsernameRequired"),
                    passwordRequired: e("AccountsApp.SignInPage.Validation.PasswordRequired"),
                    tfaRequired: e("AccountsApp.SignInPage.Validation.2FACodeIsRequired")
                }
            });
            return n ? (0,
            a.jsx)(C.A, {}) : (0,
            a.jsx)(r.RV, {
                ...l,
                children: (0,
                a.jsx)(O, {})
            })
        }
          , J = (0,
        h.jl)("SignInForm")
          , O = () => {
            let[e,n] = (0,
            i.useState)(!1);
            (0,
            b.C)({
                isEnabled: !e
            });
            let {t} = (0,
            s.$G)()
              , o = (0,
            i.useRef)(!1)
              , {successRedirect: c} = (0,
            A.A)()
              , {accountRecoveryEnabled: g} = (0,
            w.x)()
              , f = (0,
            r.Gc)()
              , {handleError: x} = U()
              , {signIn: h, tfaChallenge: j, tfaOptions: C, tfaMasterOptions: E, tfaMasterChallenge: B, getSignInTfa: P, loading: T, reset: k} = (0,
            m.z)({
                onCompleted: () => _(),
                onError: e => x(e, z)
            })
              , z = K(f, C, E)
              , _ = (0,
            i.useCallback)( () => {
                n(!0),
                J.info("onCompleted: Sign-in completed. Setting manual sign-in mode."),
                o.current = !0,
                J.info("onCompleted: Setting startedSuccessRedirection=true"),
                y.Lt.signInCompleted({
                    ...z,
                    approvalType: null
                }).finally(c)
            }
            , [z, c])
              , R = (0,
            i.useCallback)(async e => {
                let {username: n, password: t, tfa: a, tfa_id: i} = e;
                if (T) {
                    J.info("onSubmit: Returning without submitting, loading=true");
                    return
                }
                J.info("onSubmit: Performing signIn"),
                await h({
                    username: n,
                    password: t,
                    tfa: a,
                    tfaId: i
                })
            }
            , [T, h])
              , M = (0,
            i.useMemo)( () => ({
                titles: {
                    tfa: {
                        authenticatorApp: t("AccountsApp.SignInPage.TfaTitle.AuthenticatorApp"),
                        password: t("AccountsApp.SignInPage.TfaTitle.StaticPassword"),
                        webauthn: t("AccountsApp.SignInPage.TfaTitle.Passkey"),
                        yubikey: t("AccountsApp.SignInPage.TfaTitle.Yubikey")
                    },
                    master: {
                        yubikey: t("AccountsApp.SignInPage.TfaTitle.MasterKey"),
                        webauthn: t("AccountsApp.SignInPage.TfaTitle.MasterKey"),
                        password: t("AccountsApp.SignInPage.TfaTitle.MasterKey"),
                        authenticatorApp: t("AccountsApp.SignInPage.TfaTitle.MasterKey")
                    }
                },
                instructions: {
                    tfa: {
                        authenticatorApp: t("AccountsApp.SignInPage.Tfa.AuthenticatorApp.SignInInstructions"),
                        yubikey: t("AccountsApp.SignInPage.Tfa.Yubikey.SignInInstructions"),
                        password: t("AccountsApp.SignInPage.Tfa.StaticPassword.SignInInstructions"),
                        webauthn: t("AccountsApp.SignInPage.Tfa.WebAuthn.SignInInstructions")
                    },
                    master: {
                        authenticatorApp: t("AccountsApp.SignInPage.Tfa.AuthenticatorApp.SignInInstructionsMaster"),
                        yubikey: t("AccountsApp.SignInPage.Tfa.Yubikey.SignInInstructionsMaster"),
                        password: t("AccountsApp.SignInPage.Tfa.StaticPassword.SignInInstructionsMaster"),
                        webauthn: t("AccountsApp.SignInPage.Tfa.WebAuthn.SignInInstructionsMaster")
                    }
                }
            }), [t])
              , N = (0,
            i.useCallback)(async e => {
                var n, t;
                let {isMasterKey: a} = e;
                J.info("getChallenge: Getting TFA challenges");
                let i = await P({
                    ...f.getValues()
                });
                return a ? null == i ? void 0 : null === (n = i.secret) || void 0 === n ? void 0 : n.challenge : null == i ? void 0 : null === (t = i.main) || void 0 === t ? void 0 : t.challenge
            }
            , [f, P])
              , q = void 0 !== C
              , F = (0,
            i.useCallback)( () => {
                f.reset({
                    username: f.getValues("username"),
                    password: void 0,
                    tfa: void 0,
                    tfa_id: void 0
                }),
                k(),
                J.info("onBack: Restarted MFA form state")
            }
            , [f, k])
              , V = (0,
            i.useMemo)( () => [...(null != C ? C : []).map(e => ({
                ...e,
                isMasterKey: !1,
                challenge: j
            })), ...(null != E ? E : []).map(e => ({
                ...e,
                isMasterKey: !0,
                challenge: B
            }))], [j, B, E, C]);
            return (0,
            a.jsx)(S.A, {
                headerCta: "create-account",
                onBack: q ? F : void 0,
                showFinraDisclaimer: !0,
                children: (0,
                a.jsxs)("div", {
                    className: "flex flex-col",
                    children: [(0,
                    a.jsx)("form", {
                        onSubmit: f.handleSubmit(R),
                        children: q ? (0,
                        a.jsx)(i.Suspense, {
                            fallback: (0,
                            a.jsx)("div", {
                                className: "flex justify-center items-center h-full",
                                children: (0,
                                a.jsx)(u.$, {
                                    size: "lg",
                                    tone: "brand",
                                    role: "progressbar"
                                })
                            }),
                            children: (0,
                            a.jsx)(Z, {
                                startedSuccessRedirection: o.current,
                                context: "Sign In",
                                i18n: M,
                                onSubmit: R,
                                twoFactorConfigurations: V,
                                getChallenge: N,
                                bottomAdornment: g ? (0,
                                a.jsx)(d.x, {
                                    type: "body2",
                                    tone: "neutral",
                                    as: "p",
                                    textAlign: "center",
                                    children: (0,
                                    a.jsx)(s.cC, {
                                        i18nKey: "AccountsApp.SignInPage.UnableToSignIn",
                                        components: {
                                            recoverLink: (0,
                                            a.jsx)(p.h, {
                                                emphasis: "low",
                                                tone: "brand",
                                                type: "body2",
                                                onPress: () => {
                                                    sessionStorage.setItem("verify-email-user-identifier", f.getValues("username")),
                                                    y.Lt.recoverAccountClicked({
                                                        origin: "TFA screen"
                                                    }).finally( () => {
                                                        l().push((0,
                                                        I.UY)(v.k2.VerifyEmail))
                                                    }
                                                    )
                                                }
                                            })
                                        }
                                    })
                                }) : null
                            })
                        }) : (0,
                        a.jsx)(L, {})
                    }), (0,
                    a.jsx)(D, {
                        tfaOptions: C,
                        tfaMasterOptions: E
                    }), (0,
                    a.jsx)(H, {})]
                })
            })
        }
          , X = (0,
        i.lazy)( () => t.e(2076).then(t.bind(t, 42076)).then(e => Promise.resolve({
            default: e.NewSignInFormWrapper
        })));
        var ee = !0
          , en = () => null !== (0,
        I.jM)("newSignInFormEnabled") ? (0,
        a.jsx)(X, {}) : (0,
        a.jsx)(Y, {})
    }
}]);
