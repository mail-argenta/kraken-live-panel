!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[t] = "1b2e74d4-73cc-4d10-aada-3eaceee594de",
        e._sentryDebugIdIdentifier = "sentry-dbid-1b2e74d4-73cc-4d10-aada-3eaceee594de")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[9335], {
    4231: function(e, t, n) {
        n.d(t, {
            $: function() {
                return u
            }
        });
        var r = n(85893)
          , a = n(67294)
          , s = n(34769)
          , i = n(63439)
          , o = n(45453)
          , c = n(41265)
          , l = n(14669);
        let u = () => {
            let {enabledLanguagesArray: e, supportedLanguages: t} = (0,
            c.T)()
              , n = (0,
            a.useMemo)( () => e.sort(o.t0).map(e => ({
                label: e.displayName,
                id: e.fullCode
            })), [e]);
            return (0,
            r.jsx)(l.AZ.Consumer, {
                children: e => {
                    let {language: a, setLanguage: c} = e;
                    return (0,
                    r.jsx)(s.PS, {
                        menuSize: "lg",
                        size: "xs",
                        placeholder: t[a].displayName,
                        items: n,
                        onChange: e => c(null != e ? e : t[o.k$].displayCode),
                        icon: i.T
                    })
                }
            })
        }
    },
    99335: function(e, t, n) {
        n.d(t, {
            j: function() {
                return en
            },
            A: function() {
                return D
            }
        });
        var r = n(85893)
          , a = n(76125)
          , s = n(93967)
          , i = n.n(s)
          , o = n(41664)
          , c = n.n(o)
          , l = n(82978)
          , u = n(51954)
          , A = n(67089)
          , d = n(27511)
          , h = n(16039)
          , p = n(52188)
          , g = n(74892)
          , m = n(49874)
          , f = n(88303)
          , x = n(78400)
          , v = n(82926)
          , b = n(31531)
          , y = n(2264)
          , S = n(49038);
        let w = () => {
            let {data: e} = (0,
            S.L)()
              , {enableFinraDisclaimer: t} = (0,
            y.V)("");
            return t && (null == e ? void 0 : e.cc) === b.C.US
        }
          , j = () => (0,
        r.jsx)(v.x, {
            type: "body2",
            tone: "neutral",
            as: "p",
            textAlign: "center",
            children: (0,
            r.jsx)(a.cC, {
                i18nKey: "AccountsApp.SignInPage.UsFinraDisclaimer",
                components: {
                    Link: (0,
                    r.jsx)(p.h, {
                        tone: "brand",
                        type: "body2",
                        emphasis: "low"
                    })
                }
            })
        });
        var k = n(9227)
          , C = n(5894);
        let P = e => {
            let {backHref: t, onBack: n, headerCta: a="contact-support"} = e
              , {breakpoint: s} = (0,
            l.Gc)()
              , i = void 0 !== s && s <= l.u3.sm
              , {header: o, mobileHeader: c} = (0,
            C.x)({
                headerCta: a,
                backHref: t,
                onBack: n
            });
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)(k.h, {
                    type: "responsive",
                    progress: i ? void 0 : null,
                    children: (0,
                    r.jsx)(k.h.Content, {
                        children: o
                    })
                }), i && (0,
                r.jsx)(k.h, {
                    type: "responsive",
                    progress: null,
                    children: (0,
                    r.jsx)(k.h.Content, {
                        children: c
                    })
                })]
            })
        }
        ;
        var U = n(25675)
          , L = n.n(U);
        let N = {
            Shield: {
                src: "/accounts/_next/static/media/Shield.a1beb228.png",
                height: 384,
                width: 384,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA/0lEQVR42mMAgXjj/8zrOn+ygtilfr8EmuJ+STTHfAPzwaA/86MsA8N73tWtP6ymFXwxbY/8qtQU+0uOAQTmV7/m2dBxV2pz/5+YOTV/vrdn/Xk8ueBdJNAExf6C/0wMOgz/2ec1vnKfV/Hud1nk///LGx/9n1by9BUDwyfjvb3/ORlW9f3nmlxw32bb8qfvd3Qf/X+45+j/BQ3/z59Y/MaegeEbF0N31lehEtt/yrcvPOmcVfv2/+SCb/8PL3j+a//0FwEMINAU/YuzKfYH0JH/hfpz/me0Zv1Nnl5+WZ2B4S0j3Bdtcd+ZH9x8xAJkMjY6veXJd/gv9P/zf7ACAHKHeNkEux8xAAAAAElFTkSuQmCC",
                blurWidth: 8,
                blurHeight: 8
            },
            ExclamationMark: {
                src: "/accounts/_next/static/media/ExclamationMark.3e99154a.png",
                height: 384,
                width: 384,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA+klEQVR42mMAgd6sHywzuh4zgdh96X9EGiK+izbF/mJjgIGaoB+S7dH/JOwZvkpUBTxVn5b/2bg24pcsAwiUefzkmF31U5qB4ZXarIpXR4/P/9GVZvlZqTv9hz5U/3/mM3ue+399d/v5pQ3P/l9edv93nMt/zwD+N9JT838KMLgx/Oec1/7CeMOyBy/3zXr7/+C0G/839v49eGLeTycGhvccDJs6/nMGazy0Kvf//GJh9a+Py9seXz2y4PH/nf3vohlAoCnqF2dz/HeZmVXfDVoSf5tVR/xX7y24r8GADLpT/jCD6JaYz1ztCV/FS1z/C/08/5+RgYGBAQBU03Md2trTDAAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 8
            },
            ShieldLock: {
                src: "/accounts/_next/static/media/ShieldLock.c36adeed.png",
                height: 384,
                width: 384,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABA0lEQVR42mMAgZrQL0zbJvxgBrGrQn8KNMf9FGmO+c7CAAOt8T/FrRg+Cy6r/yE/NeeHclPEd/Wm2J9yDCDQkfabvS3hk8jW/r/WC+t+3+rJ+XF4RtF765bYX0qtyV+ZGIIY/rPOa3xrvKDyw8O+nJ//F9T9/F8R/flSgNJzjTnF/3kYNs/8z9ab9tJw44IHTw7M//T/9vqv/xc3/D26Z/YbU0OGvzwMM+s+8UQx/Fe8felx5bLuz/+XN//8f3zR07e7p7yxYQCB6oDfrG0p32UYGP4Ldib8jamN+xndlnFLhYHhPxMDDFS5/GK6ffUh2FsT475zV/n9F761/RMjAwMDAwBDV3gl/FgDAAAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 8
            },
            ChessKing: {
                src: "/accounts/_next/static/media/ChessKing.ab38cf68.png",
                height: 384,
                width: 384,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA/klEQVR42mMAgfrwn4wtcT/4J+f95G2J+8neHPeDszn2BycDDHSl/WRviPwh48v3TbY18Ydhc+xP3aaYn8pARSwMIFDp/1OiLeW7+6a+bzFJCt/l2pJ/6AOxbmP0T2WGlrhvIp2J/5X6i972LW5483/jpH+VNVk/1OvCfmt1JP2QYHBj+CW6YcKP8D3zPk+uSnh1aWrp5/97p/3YNqP4izkDw292hkn538U2TvkyZduMbwuXdn1ZUBz58M+K9rf/F7R9a2AAgRu7/3Es7/7iv6Dly9qFbd+nT658P6Wr5ENod8kPOQYYuHP2P9PCju9+U6q+KdZ4/OeG+67sPyMAfgt6+z/NOi8AAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 8
            },
            Spot: {
                src: "/accounts/_next/static/media/Spot.58ab626e.png",
                height: 384,
                width: 384,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAvklEQVR42mOAgc19v1gYoKAy7T8zAzI4MP0kK4g+OPOn0pae18IMQFCU8Z+RAQROLzsP1nls4X/buTV/PnVk/707t/qFBQMQTK6AKto697bKvIp3v8oi//9f3vDo//SSp88YGG7yMMDA6u6V4ttXPH2zo/vo/8NAvLDp/9H/925JMYDA3NbXYPtfPrhfMKv27f/JBd/+H1n47OuxuU/dGGAgOfcD2K4pRf+92vP/u1/aycDBgA5ePH7AzIAFAACO4VcnXal5mwAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 8
            },
            HourGlass: {
                src: "/accounts/_next/static/media/HourGlass.644acdb3.png",
                height: 384,
                width: 384,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA6UlEQVR42mMAgfqwn0wMcPAfyH7MPLXgFzNcqDXhh3iF22+Rxqw3llunf5u/b9qf1FTr76JgyebYH2yTS75JAXXKH9/1oGLFlFcfF1b/nNyV8lNy9qz7jAyNUT8425N/aGVp/VZYNeFLVF/xj82lvj/Ua8N+qrYn/eBimJj/gyPX5qfKiu5fhgcXfPHaPeOsUXPsH42W+B8azTE/OBk6s75zV7r9UFkz+eeUOc1vHx1aciQl0/y/Sk/GZ2EGIAAq+MFe5fpDeHHP96AlfV92Lmn56plt+VNicctPZgZsoNTnt1BL3A8hGB8AxYFo8RrTESMAAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 8
            },
            CustomerSupport: {
                src: "/accounts/_next/static/media/CustomerSupport.4b437565.png",
                height: 384,
                width: 384,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA7UlEQVR42mP4f0Wb+f6aHpZzu/4zMUDBnPJfnHNr/0D4/x8wMF5df4hr+foHbCtnPOWrD/ghPin7mxIDMlgz7xv/grpfk2dV/JxfF/PTsy3ld3JTwi/fxoivbAxvb97nK4u5Jbdr0p91m/t+7ds24ffZY3N+/N/a9/sGA8MXHgYgYFrV8qNj28Qfz1e2/jq4b9rv1vNL/8Rt7fvlx8DwnYsBSHDsn/G77MLy7+cPz/lzL8P1q1WB61vVruTvEgwMUGDN8E2AgeG/8KScnxozSr6qX1l+SvzHoVtscAUrmn+xHJn3hZUBDbw/vZwRALuFcJTmg/72AAAAAElFTkSuQmCC",
                blurWidth: 8,
                blurHeight: 8
            },
            SpotlightCoin: {
                src: "/accounts/_next/static/media/SpotlightCoin.8eaa06d4.png",
                height: 384,
                width: 384,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA90lEQVR42mMAgdaEX0wMUNCd/UuwN/un4Iz8XywMMNAY/UOs2OO/+L5VvzVrvb6o1gf/1OvN/CnNAAKzG76zpzH8Etu79rPNsS1v3Pcs/2K7a+Vvh1iG77IMILCs+xv3xNh/RvfOv0++v+Vl/cPz/1ffvvY/Jo3hp8aCCT+5GMIYfrB3lvxQv3H0T8exmT9/Xtr3+97rR68qtBm+Ka6Y9pubAQTuXv4ef+fyr9q1i79Ev3z6e9qHV9+mMTA8ZGWAgfev/wV++vh99dvXn/d++fRn45tX/+MZgOD//38w34E4vxgvnvopEs/wQ5CB4S0nUCEjAwMDAwCq4ntKTgnguAAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 8
            }
        }
          , T = e => {
            let {asset: t} = e
              , {t: n} = (0,
            a.$G)();
            return (0,
            r.jsx)("div", {
                className: "flex place-content-center",
                children: (0,
                r.jsx)(L(), {
                    className: "w-48 h-48 mb-6",
                    src: N[t],
                    priority: !0,
                    alt: E(n, t)
                })
            })
        }
          , E = (e, t) => {
            switch (t) {
            case "Shield":
                return e("AccountsApp.TopIllustrationAltText.Shield");
            case "ExclamationMark":
                return e("AccountsApp.TopIllustrationAltText.ExclamationMark");
            case "ShieldLock":
                return e("AccountsApp.TopIllustrationAltText.ShieldLock");
            case "ChessKing":
                return e("AccountsApp.TopIllustrationAltText.ChessKing");
            case "Spot":
                return e("AccountsApp.TopIllustrationAltText.Spot");
            case "HourGlass":
                return e("AccountsApp.TopIllustrationAltText.HourGlass");
            case "CustomerSupport":
                return e("AccountsApp.TopIllustrationAltText.CustomerSupport");
            case "SpotlightCoin":
                return e("AccountsApp.TopIllustrationAltText.SpotlightCoin")
            }
        }
        ;
        var M = n(22758);
        let D = e => {
            let {children: t, isLoading: n, backHref: s, headerCta: o, topIllustration: v, onBack: b, aboveCardContent: y, showFinraDisclaimer: S} = e;
            if (void 0 !== s && void 0 !== b)
                throw Error("invariant: backHref and onBack props cannot both be set");
            let {t: k} = (0,
            a.$G)()
              , {breakpoint: U} = (0,
            l.Gc)()
              , L = void 0 !== U && U <= l.u3.sm
              , {spot: N} = (0,
            x.C)()
              , E = (0,
            M.Fc)()
              , D = w()
              , {hideFooter: z} = (0,
            C.x)();
            return (0,
            r.jsx)(u.f, {
                theme: E,
                applyDsBackground: !L || "dark" === E,
                children: (0,
                r.jsxs)("div", {
                    className: i()("flex flex-col min-h-screen", {
                        "bg-ds-button-neutral-medium": L && "dark" === E
                    }),
                    children: [(0,
                    r.jsx)(P, {
                        backHref: s,
                        onBack: b,
                        headerCta: o
                    }), n ? (0,
                    r.jsx)("div", {
                        className: "flex justify-center items-center h-dvh",
                        children: (0,
                        r.jsx)(A.$, {
                            "data-testid": "loading spinner",
                            size: "xxl"
                        })
                    }) : (0,
                    r.jsx)("div", {
                        className: i()({
                            "flex place-content-center": !L,
                            "yLg:mt-[5%]": !L
                        }),
                        children: (0,
                        r.jsxs)("div", {
                            className: i()("mt-4", {
                                "mr-5 mb-5 ml-5": L,
                                "w-[498px]": !L
                            }),
                            children: [y && (0,
                            r.jsx)("div", {
                                className: "pb-2",
                                children: y
                            }), !L && s && !b && (0,
                            r.jsx)(c(), {
                                href: s,
                                passHref: !0,
                                legacyBehavior: !0,
                                children: (0,
                                r.jsx)(d.Q, {
                                    spacingBottom: 3,
                                    text: k("AccountsApp.BackButton"),
                                    size: "xs",
                                    emphasis: "low",
                                    tone: "neutral",
                                    iconStart: g.F
                                })
                            }), !L && b && !s && (0,
                            r.jsx)(d.Q, {
                                spacingBottom: 3,
                                text: k("AccountsApp.BackButton"),
                                size: "xs",
                                emphasis: "low",
                                tone: "neutral",
                                iconStart: g.F,
                                onPress: b
                            }), (0,
                            r.jsxs)(h.W2, {
                                className: i()({
                                    "bg-transparent": L
                                }),
                                paddingSize: L ? "none" : "xl",
                                removeDropShadow: L,
                                children: [v && (0,
                                r.jsx)(T, {
                                    asset: v
                                }), t]
                            })]
                        })
                    }), !z && (0,
                    r.jsx)("footer", {
                        className: "mt-auto w-full",
                        children: (0,
                        r.jsxs)("div", {
                            className: i()("flex flex-col items-center gap-4 p-4", {
                                "lg:flex-row lg:justify-between": S && D
                            }),
                            children: [(0,
                            r.jsx)("div", {
                                className: "lg:order-last",
                                children: (0,
                                r.jsxs)("div", {
                                    className: "flex gap-4",
                                    children: [(0,
                                    r.jsx)(p.h, {
                                        emphasis: "low",
                                        target: "_blank",
                                        tone: "neutral",
                                        type: "body2",
                                        href: new URL((0,
                                        m.UY)(f.Jt.PrivacyPolicy),N).toString(),
                                        children: k("AccountsApp.PrivacyPolicy")
                                    }), (0,
                                    r.jsx)(p.h, {
                                        emphasis: "low",
                                        target: "_blank",
                                        tone: "neutral",
                                        type: "body2",
                                        href: new URL((0,
                                        m.UY)(f.Jt.Legal),N).toString(),
                                        children: k("AccountsApp.TermsOfService")
                                    })]
                                })
                            }), S && D && (0,
                            r.jsx)("div", {
                                className: "lg:order-first",
                                children: (0,
                                r.jsx)(j, {})
                            })]
                        })
                    })]
                })
            })
        }
        ;
        var z = n(67294)
          , H = n(39332)
          , F = n(11163)
          , I = n(5277)
          , R = n(62440)
          , B = n(99885)
          , G = n(21448)
          , O = n(70451)
          , Y = n(89367)
          , V = n(19948)
          , K = n(78414)
          , J = n(85790)
          , W = n(60962)
          , Q = n(52849);
        let X = (0,
        z.createContext)(null)
          , q = () => {
            let e = (0,
            z.useContext)(X);
            if (null === e) {
                let e = Error("useFullScreenMobileMenuContext can only be called within FullScreenMobileMenuContext.Provider");
                throw Error.captureStackTrace && Error.captureStackTrace(e, q),
                e
            }
            return e
        }
          , Z = () => {
            let {open: e, isOpen: t, close: n} = q();
            return t ? (0,
            r.jsx)(k.h.Content.SecondaryButton, {
                icon: W.x,
                onPress: n
            }) : (0,
            r.jsx)(k.h.Content.SecondaryButton, {
                icon: Q.X,
                onPress: e
            })
        }
        ;
        var _ = n(4231);
        let $ = [{
            type: "item",
            icon: O.w,
            title: e => e("AccountsApp.AuthenticatedLayout.Sidebar.Portfolio"),
            href: "/a/portfolio",
            isActive: e => "/a/portfolio" === e
        }]
          , ee = [...$, {
            type: "divider"
        }, {
            type: "item",
            icon: Y.Z,
            title: e => e("AccountsApp.AuthenticatedLayout.Menu.Settings"),
            href: "/a/settings/account",
            isActive: e => e.startsWith("/a/settings/account")
        }, {
            type: "item",
            icon: V.W,
            title: e => e("AccountsApp.AuthenticatedLayout.Menu.Security"),
            href: "/a/settings/security",
            isActive: e => e.startsWith("/a/settings/security")
        }, {
            type: "divider"
        }, {
            type: "item",
            icon: K.d,
            title: e => e("AccountsApp.AuthenticatedLayout.Menu.SignOut"),
            href: "/logout",
            isActive: e => e.startsWith("/logout")
        }]
          , et = () => {
            let {t: e} = (0,
            a.$G)()
              , t = (0,
            F.useRouter)()
              , {homeLink: n} = (0,
            C.x)();
            return (0,
            r.jsx)(k.h, {
                type: "responsive",
                children: (0,
                r.jsx)(k.h.Content, {
                    children: {
                        left: (0,
                        r.jsx)(k.h.KrakenLogo, {
                            href: n
                        }),
                        leftSmall: (0,
                        r.jsx)("div", {
                            className: "ml-3",
                            children: (0,
                            r.jsx)(k.h.KrakenIcon, {
                                href: n
                            })
                        }),
                        right: (0,
                        r.jsxs)("div", {
                            className: "flex items-center gap-x-2",
                            children: [(0,
                            r.jsx)(_.$, {}), (0,
                            r.jsx)(I.h, {
                                size: "lg",
                                items: [{
                                    id: "settings",
                                    label: e("AccountsApp.AuthenticatedLayout.Menu.Settings"),
                                    icon: Y.Z,
                                    action: () => t.push("/a/settings/account")
                                }, {
                                    id: "security",
                                    label: e("AccountsApp.AuthenticatedLayout.Menu.Security"),
                                    icon: V.W,
                                    action: () => t.push("/a/settings/security")
                                }, {
                                    id: "log",
                                    label: e("AccountsApp.AuthenticatedLayout.Menu.SignOut"),
                                    icon: K.d,
                                    action: () => t.push("/logout")
                                }],
                                children: e => {
                                    let {toggleDropdownMenu: t, ref: n, triggerProps: a} = e;
                                    return (0,
                                    r.jsx)(R.hU, {
                                        emphasis: "low",
                                        tone: "neutral",
                                        size: "md",
                                        icon: J.Y,
                                        ref: n,
                                        onPress: t,
                                        ...a
                                    })
                                }
                            })]
                        }),
                        rightSmall: (0,
                        r.jsx)("div", {
                            className: "mr-3",
                            children: (0,
                            r.jsx)(Z, {})
                        })
                    }
                })
            })
        }
          , en = e => {
            let {children: t} = e
              , {t: n} = (0,
            a.$G)()
              , s = (0,
            H.usePathname)()
              , {breakpoint: i} = (0,
            l.Gc)()
              , o = void 0 !== i && i <= l.u3.sm
              , [A,d] = (0,
            z.useState)(!1)
              , h = (0,
            z.useMemo)( () => ({
                isOpen: A,
                open: () => d(!0),
                close: () => d(!1)
            }), [A]);
            return (0,
            r.jsx)(u.f, {
                theme: "light",
                applyDsBackground: !A,
                children: (0,
                r.jsx)(X.Provider, {
                    value: h,
                    children: (0,
                    r.jsxs)("div", {
                        className: "w-full",
                        children: [(0,
                        r.jsx)(et, {}), A ? (0,
                        r.jsx)(B.m, {
                            children: (0,
                            r.jsx)(B.m.Menu, {
                                children: ee.map(e => {
                                    switch (e.type) {
                                    case "divider":
                                        return (0,
                                        r.jsx)(B.m.Menu.Divider, {});
                                    case "item":
                                        return (0,
                                        r.jsx)(B.m.Menu.Item, {
                                            as: c(),
                                            icon: e.icon,
                                            href: e.href,
                                            active: e.isActive(s),
                                            onClick: () => setTimeout(h.close, 300),
                                            children: e.title(n)
                                        }, e.href);
                                    default:
                                        return null
                                    }
                                }
                                )
                            })
                        }) : (0,
                        r.jsxs)("div", {
                            className: "flex flex-col",
                            children: [o && (0,
                            r.jsx)("div", {
                                className: "flex flex-col w-full p-4",
                                children: t
                            }), !o && (0,
                            r.jsxs)("div", {
                                className: "flex flex-row",
                                children: [(0,
                                r.jsx)(G.Y, {
                                    children: $.filter(e => "divider" !== e.type).map(e => (0,
                                    r.jsx)(c(), {
                                        href: e.href,
                                        passHref: !0,
                                        legacyBehavior: !0,
                                        children: (0,
                                        r.jsx)(G.Y.NavItem, {
                                            icon: e.icon,
                                            active: e.isActive(s),
                                            children: e.title(n)
                                        })
                                    }, e.href))
                                }), (0,
                                r.jsx)("div", {
                                    className: "flex flex-col w-11/12",
                                    children: t
                                })]
                            })]
                        })]
                    })
                })
            })
        }
    },
    5894: function(e, t, n) {
        n.d(t, {
            x: function() {
                return E
            }
        });
        var r = n(85893)
          , a = n(41664)
          , s = n.n(a)
          , i = n(76125)
          , o = n(82492)
          , c = n.n(o)
          , l = n(25675)
          , u = n.n(l)
          , A = n(57867)
          , d = n(92417)
          , h = n(49874)
          , p = n(88303)
          , g = n(78400)
          , m = n(26530)
          , f = n(4231)
          , x = n(27511)
          , v = n(23764)
          , b = n(29893)
          , y = n(22758);
        let S = e => {
            let {headerCta: t} = e
              , {t: n} = (0,
            i.$G)()
              , {spot: a} = (0,
            g.C)()
              , s = (0,
            m.W2)()
              , o = (0,
            y.Fc)()
              , {hideContactSupport: c} = E()
              , [l] = (0,
            b.N$)();
            if ("contact-support" === t)
                return c ? null : (0,
                r.jsx)(x.Q, {
                    target: "_blank",
                    href: new URL(p.Jt.Support,a).toString(),
                    size: "xs",
                    iconStart: v.B,
                    text: n("login.ContactSupport"),
                    rel: "noopener noreferrer"
                });
            if ("create-account" === t) {
                if ("custody" === s)
                    return null;
                let e = new URL((0,
                h.UY)(p.Jt.SignUp),a);
                return s && (e.searchParams.set("rfr", s),
                e.searchParams.set("theme", o)),
                l && e.searchParams.set("redirect", l),
                (0,
                r.jsx)(x.Q, {
                    href: e.toString(),
                    size: "xs",
                    text: n("AccountsApp.SignInPage.CreateAccount")
                })
            }
            if ("sign-out" === t)
                return (0,
                r.jsx)(x.Q, {
                    href: (0,
                    h.ex)((0,
                    h.UY)(p.k2.SignOut)),
                    size: "xs",
                    text: n("AccountsApp.SignOut")
                });
            if (null === t)
                return null;
            throw Error("Invariant: invalid type of headerCta prop: ".concat(t))
        }
        ;
        var w = {
            src: "/accounts/_next/static/media/support-center.570f96fe.svg",
            height: 22,
            width: 116,
            blurWidth: 0,
            blurHeight: 0
        }
          , j = n(11163)
          , k = n.n(j)
          , C = n(62440)
          , P = n(74892);
        let U = e => {
            let {backHref: t, onBack: n} = e
              , {t: a} = (0,
            i.$G)();
            return t ? (0,
            r.jsx)(C.hU, {
                icon: P.F,
                size: "xs",
                emphasis: "low",
                tone: "neutral",
                "aria-label": a("AccountsApp.BackButton"),
                spacingStart: 4,
                onPress: () => k().push(t)
            }) : n ? (0,
            r.jsx)(C.hU, {
                icon: P.F,
                size: "xs",
                emphasis: "low",
                tone: "neutral",
                "aria-label": a("AccountsApp.BackButton"),
                spacingStart: 4,
                onPress: n
            }) : null
        }
          , L = ["default", "pro-web", "custody", "support"]
          , N = e => L.includes(e)
          , T = "https://support.kraken.com/"
          , E = function() {
            let {headerCta: e, backHref: t, onBack: n} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , {pro: a, spot: o, custody: l} = (0,
            g.C)()
              , x = (0,
            A.Mt)()
              , v = (0,
            m.W2)() || "default"
              , {t: b} = (0,
            i.$G)()
              , y = {
                default: {
                    homeLink: o,
                    goHomeCta: b("AccountsApp.LogoutPage.GoToKrakenCom"),
                    hideFooter: !1,
                    hideSupportLink: !1,
                    usernameLabel: b("AccountsApp.SignInPage.EmailOrUsername"),
                    allowOnlyEmailSignIn: !1,
                    accountRecoveryEnabled: !0,
                    withdrawalAccessHoldAcknowledgementEnabled: !0,
                    forgotLinks: (0,
                    r.jsx)(i.cC, {
                        i18nKey: "AccountsApp.SignInPage.ForgotPasswordOrUsername",
                        components: {
                            linkToForgotPassword: (0,
                            r.jsx)(s(), {
                                className: "text-ds-brand hover:underline",
                                href: (0,
                                h.UY)(p.k2.ForgotPassword)
                            }),
                            linkToForgotUsername: (0,
                            r.jsx)(s(), {
                                className: "text-ds-brand hover:underline",
                                href: (0,
                                h.UY)(p.k2.ForgotUsername)
                            })
                        }
                    }),
                    signInCta: b("AccountsApp.SignInPage.Title"),
                    header: {
                        right: (0,
                        r.jsxs)("div", {
                            className: "flex gap-x-2 items-center",
                            children: [(0,
                            r.jsx)(f.$, {}, "language-selector"), e && (0,
                            r.jsx)(S, {
                                headerCta: e
                            }, "header-cta")]
                        }),
                        rightSmall: e && (0,
                        r.jsx)("div", {
                            className: "mr-3",
                            children: (0,
                            r.jsx)(S, {
                                headerCta: e
                            })
                        }),
                        left: (0,
                        r.jsx)(s(), {
                            href: o,
                            children: (0,
                            r.jsx)(d.H2.Logo, {
                                product: "kraken-consumer",
                                theme: x,
                                height: 24
                            })
                        }),
                        leftSmall: (0,
                        r.jsx)("div", {
                            className: "ml-3",
                            children: (0,
                            r.jsx)(s(), {
                                href: o,
                                children: (0,
                                r.jsx)(d.H2.Icon, {
                                    product: "kraken-consumer",
                                    theme: x,
                                    height: 26
                                })
                            })
                        })
                    },
                    mobileHeader: {
                        leftSmall: (0,
                        r.jsx)(U, {
                            backHref: t,
                            onBack: n
                        }),
                        rightSmall: (0,
                        r.jsx)("div", {
                            className: "mr-3",
                            children: (0,
                            r.jsx)(f.$, {})
                        })
                    },
                    allowSkippingEnablePasskey: !0,
                    hideSecurityOverviewMentions: !1,
                    hideContactSupport: !1,
                    hideMobileAppsPromotionParagraph: !1,
                    hideLearnAboutConnectedDevices: !1
                },
                "pro-web": {
                    homeLink: a,
                    goHomeCta: b("AccountsApp.LogoutPage.GoToKrakenPro"),
                    signInCta: b("AccountsApp.SignInPage.ProWebTitle"),
                    header: {
                        left: (0,
                        r.jsx)(s(), {
                            href: a,
                            children: (0,
                            r.jsx)(d.H2.Logo, {
                                product: "kraken-pro",
                                theme: x,
                                height: 24
                            })
                        }),
                        leftSmall: (0,
                        r.jsx)(s(), {
                            href: a,
                            children: (0,
                            r.jsx)(d.H2.Logo, {
                                product: "kraken-pro",
                                theme: x,
                                height: 26
                            })
                        })
                    }
                },
                custody: {
                    homeLink: l,
                    goHomeCta: b("AccountsApp.LogoutPage.GoToKrakenCustody"),
                    hideFooter: !0,
                    hideSupportLink: !0,
                    usernameLabel: b("AccountsApp.SignInPage.Email"),
                    allowOnlyEmailSignIn: !0,
                    accountRecoveryEnabled: !1,
                    withdrawalAccessHoldAcknowledgementEnabled: !1,
                    signInCta: b("AccountsApp.SignInPage.CustodyTitle"),
                    forgotLinks: (0,
                    r.jsx)(i.cC, {
                        i18nKey: "AccountsApp.SignInPage.ForgotPassword",
                        components: {
                            linkToForgotPassword: (0,
                            r.jsx)(s(), {
                                className: "text-ds-brand hover:underline",
                                href: (0,
                                h.UY)(p.k2.ForgotPassword)
                            })
                        }
                    }),
                    header: {
                        right: e ? (0,
                        r.jsx)(S, {
                            headerCta: e
                        }) : null,
                        rightSmall: null,
                        left: (0,
                        r.jsx)(s(), {
                            href: l,
                            children: (0,
                            r.jsx)(d.H2.Logo, {
                                product: "kraken-custody",
                                theme: x,
                                height: 24
                            })
                        }),
                        leftSmall: (0,
                        r.jsx)(s(), {
                            href: l,
                            children: (0,
                            r.jsx)(d.H2.Logo, {
                                product: "kraken-custody",
                                theme: x,
                                height: 26
                            })
                        })
                    },
                    mobileHeader: {
                        rightSmall: null
                    },
                    allowSkippingEnablePasskey: !1,
                    hideSecurityOverviewMentions: !0,
                    hideContactSupport: !0,
                    hideMobileAppsPromotionParagraph: !0,
                    hideLearnAboutConnectedDevices: !0
                },
                support: {
                    homeLink: T,
                    goHomeCta: b("AccountsApp.LogoutPage.GoToSupportCenter"),
                    signInCta: b("AccountsApp.SignInPage.SupportCenterTitle"),
                    header: {
                        right: null,
                        rightSmall: null,
                        left: (0,
                        r.jsx)(s(), {
                            href: T,
                            children: (0,
                            r.jsx)(u(), {
                                src: w,
                                height: 24,
                                alt: b("AccountsApp.SignInPage.SupportCenterTitle")
                            })
                        })
                    }
                }
            };
            return N(v) ? c()({}, y.default, y[v]) : y.default
        }
    },
    22758: function(e, t, n) {
        n.d(t, {
            Fc: function() {
                return s
            }
        });
        var r = n(88303)
          , a = n(65460);
        let s = () => (0,
        a.C)({
            key: "preferTheme",
            defaultValue: r.qU,
            storageKey: "kds-theme-preference",
            storageTimeKey: "kds-theme-preference-storage-time",
            maxTimeThreshold: r.gs,
            validate: e => "light" === e || "dark" === e
        })
    },
    29893: function(e, t, n) {
        n.d(t, {
            Er: function() {
                return A
            },
            N$: function() {
                return p
            }
        });
        var r = n(67294)
          , a = n(77925)
          , s = n(11163)
          , i = n.n(s)
          , o = n(39332)
          , c = n(88303);
        let l = [/^kraken\.com$/, /^kraken\.zone$/, /\.kraken\.com$/, /\.kraken\.zone$/]
          , u = e => {
            try {
                let t = new URL(e);
                if ("https:" === t.protocol && l.some(e => e.test(t.hostname)))
                    return !0
            } catch (e) {}
            if (e.startsWith("https:"))
                return !1;
            try {
                let t = decodeURIComponent(e)
                  , n = new URL(t,window.location.origin);
                if (n.origin !== window.location.origin || n.pathname && n.pathname.startsWith("/") && n.pathname.includes(".") || t.startsWith("//") || t.startsWith("\\") || /[\u0000-\u001F\u007F-\u009F\uFF00-\uFFEF]/.test(t))
                    return !1;
                return !0
            } catch (e) {
                return !1
            }
        }
          , A = "redirect"
          , {replace: d} = i()
          , h = e => e && (e.endsWith(c.k2.DeviceApproval) || e.endsWith(c.k2.ConfirmSignIn))
          , p = () => {
            let {pathname: e} = (0,
            s.useRouter)()
              , t = (0,
            o.useSearchParams)()
              , n = (0,
            o.useParams)()
              , i = (0,
            r.useMemo)( () => {
                var e;
                let n = decodeURIComponent(decodeURIComponent(null !== (e = t.get(A)) && void 0 !== e ? e : ""));
                return u(n) ? n : void 0
            }
            , [t])
              , [c,l,p] = (0,
            a.Z)("cached-redirect", i)
              , [g,m] = (0,
            r.useState)(!1);
            return (0,
            r.useEffect)( () => {
                if (g || h(e) || p(),
                m(!0),
                i) {
                    i !== c && l(i);
                    let r = new URLSearchParams([...t.entries()]);
                    r.delete(A),
                    Object.entries(n).forEach(e => {
                        let[t,n] = e;
                        "string" == typeof n && r.set(t, n)
                    }
                    ),
                    d({
                        pathname: e,
                        query: "".concat(r)
                    }, void 0, {
                        shallow: !0
                    })
                }
            }
            , [g, i, n, e, c, p, t, l]),
            (0,
            r.useMemo)( () => [c, p], [c, p])
        }
    },
    64438: function(e, t, n) {
        n.d(t, {
            U: function() {
                return i
            },
            e: function() {
                return c
            }
        });
        var r = n(11163)
          , a = n.n(r)
          , s = n(47564);
        function i(e) {
            let t = Array.isArray(a().query.lang) ? a().query.lang[0] : a().query.lang;
            return t ? (0,
            s.i)(e) ? {
                pathname: "/[lang]".concat(e),
                query: {
                    lang: t
                }
            } : "/".concat(t).concat(e) : e
        }
        let o = (e, t) => e.replace(/\[(\w+)\]/g, (e, n) => t[n] || "[".concat(n, "]"))
          , c = e => "string" == typeof e ? e : o(e.pathname, e.query)
    },
    49874: function(e, t, n) {
        n.d(t, {
            KI: function() {
                return s
            },
            UY: function() {
                return i.U
            },
            Wu: function() {
                return o
            },
            ex: function() {
                return i.e
            },
            jM: function() {
                return l
            }
        });
        var r = n(20087);
        let a = e => "step-up-token-".concat(e)
          , s = () => {
            Object.values(r.W).forEach(e => sessionStorage.removeItem(a(e)))
        }
        ;
        var i = n(64438);
        let o = async e => {
            let {message: t, algorithm: n="SHA-256"} = e
              , r = new TextEncoder().encode(t);
            return Array.from(new Uint8Array(await window.crypto.subtle.digest(n, r))).map(e => e.toString(16).padStart(2, "0")).join("")
        }
          , c = (0,
        n(80304).jl)("safeLocalStorage")
          , l = e => {
            try {
                return localStorage.getItem(e)
            } catch (t) {
                return c.warn('localStorage access failed for key "'.concat(e, '"'), t),
                null
            }
        }
    },
    47564: function(e, t, n) {
        n.d(t, {
            i: function() {
                return a
            }
        });
        var r = n(88303);
        let a = e => Object.values(r.k2).some(t => e.startsWith(t))
    }
}]);
