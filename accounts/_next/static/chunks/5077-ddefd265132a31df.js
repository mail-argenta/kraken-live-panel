!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[t] = "fcd8f789-c3ca-4113-a5e8-c4002ed9795e",
        e._sentryDebugIdIdentifier = "sentry-dbid-fcd8f789-c3ca-4113-a5e8-c4002ed9795e")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5077], {
    18706: function(e, t, r) {
        r.d(t, {
            p: function() {
                return l
            }
        });
        var n = r(74291)
          , o = e => {
            let t = new Uint8Array(e.length / 2);
            for (let r = 0, n = 0; r < e.length; r += 2)
                t[n++] = parseInt(e.substr(r, 2), 16);
            return t
        }
          , i = e => {
            let t = "";
            for (let r = 0; r < e.length; ++r)
                t += e[r].toString(16).padStart(2, "0");
            return t
        }
          , a = e => (0,
        n.C)(void 0, null, function*() {
            let t = yield crypto.subtle.digest("SHA-256", e);
            return crypto.subtle.digest("SHA-256", t)
        })
          , l = (e, ...t) => (0,
        n.C)(void 0, [e, ...t], function*(e, t={}) {
            let r;
            let {logTime: n} = t
              , l = o(e.data)
              , d = new Uint8Array(e.randomness)
              , s = new Uint8Array(l.length + d.length);
            s.set(l),
            n && console.time("PoW");
            let u = 1;
            do
                crypto.getRandomValues(d),
                s.set(d, l.length),
                r = new DataView((yield a(s))),
                u++;
            while (r.getUint32(0) >> 32 - e.difficulty != 0);
            return n && console.timeEnd("PoW"),
            {
                solution: i(d),
                attempts: u
            }
        })
    },
    71877: function(e, t, r) {
        r.d(t, {
            Cr: function() {
                return f
            },
            EZ: function() {
                return c
            },
            ih: function() {
                return u
            }
        });
        var n = Object.defineProperty
          , o = Object.defineProperties
          , i = Object.getOwnPropertyDescriptors
          , a = Object.getOwnPropertySymbols
          , l = Object.prototype.hasOwnProperty
          , d = Object.prototype.propertyIsEnumerable
          , s = (e, t, r) => t in e ? n(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[t] = r
          , u = (e, t) => {
            for (var r in t || (t = {}))
                l.call(t, r) && s(e, r, t[r]);
            if (a)
                for (var r of a(t))
                    d.call(t, r) && s(e, r, t[r]);
            return e
        }
          , c = (e, t) => o(e, i(t))
          , f = (e, t, r) => new Promise( (n, o) => {
            var i = e => {
                try {
                    l(r.next(e))
                } catch (e) {
                    o(e)
                }
            }
              , a = e => {
                try {
                    l(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }
              , l = e => e.done ? n(e.value) : Promise.resolve(e.value).then(i, a);
            l((r = r.apply(e, t)).next())
        }
        )
    },
    19264: function(e, t, r) {
        r.d(t, {
            Wk: function() {
                return es
            }
        });
        var n, o, i = Object.defineProperty, a = Object.defineProperties, l = Object.getOwnPropertyDescriptors, d = Object.getOwnPropertySymbols, s = Object.prototype.hasOwnProperty, u = Object.prototype.propertyIsEnumerable, c = Math.pow, f = (e, t, r) => t in e ? i(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[t] = r, p = (e, t) => {
            for (var r in t || (t = {}))
                s.call(t, r) && f(e, r, t[r]);
            if (d)
                for (var r of d(t))
                    u.call(t, r) && f(e, r, t[r]);
            return e
        }
        , g = (e, t) => a(e, l(t)), y = (e, t, r) => new Promise( (n, o) => {
            var i = e => {
                try {
                    l(r.next(e))
                } catch (e) {
                    o(e)
                }
            }
              , a = e => {
                try {
                    l(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }
              , l = e => e.done ? n(e.value) : Promise.resolve(e.value).then(i, a);
            l((r = r.apply(e, t)).next())
        }
        ), h = r(80129), v = e => e.replace(/\/+$/, ""), w = e => e.replace(/^\/+/, ""), b = e => {
            let[t="",...r] = e.split("?")
              , n = r.join("?");
            return {
                pathString: t.split("/").reduce( (e, t) => t ? `${e}/${t}` : e, ""),
                queryString: n
            }
        }
        , m = e => {
            let {queryString: t="", queryObject: r} = e;
            if (!t && !r)
                return;
            let n = p(p({}, h.parse(t)), r);
            return h.stringify(n, {
                arrayFormat: "indices",
                encode: !0
            })
        }
        , P = e => {
            let t = "";
            if (e.domain && (t = v(e.domain)),
            e.basePath) {
                let r = w(e.basePath);
                t = `${t}/${v(r)}`
            }
            if (e.path) {
                let {pathString: r, queryString: n} = b(e.path)
                  , o = m({
                    queryString: n,
                    queryObject: e.query
                });
                t = `${t}/${w(r)}`,
                o && (t = `${t}?${o}`)
            }
            return v(t)
        }
        ;
        r(36968),
        r(9996);
        var R = r(84770)
          , E = () => {
            var e, t;
            let r = R.eb;
            if (!R.El)
                throw R.QM;
            return null == (t = null == (e = R.El[R.tl]) ? void 0 : e[r].configs) ? void 0 : t.v1
        }
        ;
        function T(e, t) {
            return void 0 !== e ? e : t
        }
        var q = (e, t) => {
            var r, n, o, i, a, l, d, s, u, c, f, p, g, y, h, v, w, b, m, P, R, E, q, O, k, N, U;
            let x = T(null == (r = t.config) ? void 0 : r.domain, e.domain)
              , I = T(null == (n = t.config) ? void 0 : n.basePath, e.basePath)
              , S = {
                channel: T(null == (i = null == (o = t.config) ? void 0 : o.segmentation) ? void 0 : i.channel, null == (a = e.segmentation) ? void 0 : a.channel),
                device: T(null == (d = null == (l = t.config) ? void 0 : l.segmentation) ? void 0 : d.device, null == (s = e.segmentation) ? void 0 : s.device),
                product: T(null == (c = null == (u = t.config) ? void 0 : u.segmentation) ? void 0 : c.product, null == (f = e.segmentation) ? void 0 : f.product),
                feature: T(null == (g = null == (p = t.config) ? void 0 : p.segmentation) ? void 0 : g.feature, null == (y = e.segmentation) ? void 0 : y.feature)
            }
              , F = {
                logWarnings: null == (b = T(null == (v = null == (h = t.config) ? void 0 : h.errors) ? void 0 : v.logWarnings, null == (w = e.errors) ? void 0 : w.logWarnings)) || b,
                throwWarnings: null != (E = T(null == (P = null == (m = t.config) ? void 0 : m.errors) ? void 0 : P.throwWarnings, null == (R = e.errors) ? void 0 : R.throwWarnings)) && E
            };
            return {
                domain: x,
                basePath: I,
                segmentation: S,
                csrf: {
                    auth: T(null == (O = null == (q = t.config) ? void 0 : q.csrf) ? void 0 : O.auth, null == (k = e.csrf) ? void 0 : k.auth),
                    contextId: null == (U = null == (N = t.config) ? void 0 : N.csrf) ? void 0 : U.contextId
                },
                errors: F
            }
        }
          , O = (e={}) => ({
            body: void 0,
            cache: e.cache,
            credentials: e.credentials,
            headers: e.headers,
            integrity: e.integrity,
            keepalive: e.keepalive,
            method: void 0,
            mode: e.mode,
            redirect: e.redirect,
            referrer: e.referrer,
            referrerPolicy: e.referrerPolicy,
            signal: e.signal,
            window: e.window,
            priority: e.priority
        })
          , k = r(78712)
          , N = r(68630)
          , U = r(34444)
          , x = e => {
            let t = new FormData
              , r = U.flatten(e);
            if (!N(r))
                throw Error("Error flattening object when converting to FormData");
            for (let[e,n] of Object.entries(r))
                if (null != n) {
                    if ("string" == typeof n || n instanceof Blob) {
                        t.append(e, n);
                        continue
                    }
                    if ("number" == typeof n && !isNaN(n) && isFinite(n) || "boolean" == typeof n) {
                        t.append(e, String(n));
                        continue
                    }
                }
            return t
        }
          , I = r(71281)
          , S = e => {
            try {
                return JSON.parse(e),
                !0
            } catch (e) {
                return !1
            }
        }
          , F = e => {
            var t;
            return (null != (t = Object.entries(e).find( ([e]) => "content-type" === e.toLowerCase())) ? t : [])[1]
        }
          , j = (e, t) => {
            let r = F(t);
            if ("string" == typeof e) {
                let t = null != r ? r : S(e) ? I.a.Json : void 0;
                return {
                    body: e,
                    contentType: t
                }
            }
            return N(e) ? r === I.a.FormData ? {
                body: x(e),
                contentType: void 0
            } : {
                body: JSON.stringify(e),
                contentType: null != r ? r : I.a.Json
            } : {
                body: e,
                contentType: r
            }
        }
          , A = (e={}) => {
            let {channel: t, device: r, product: n, feature: o} = e;
            if (void 0 === t || void 0 === r || void 0 === n || void 0 === o)
                return;
            let i = t;
            return Number(i += (r << 8) + (n << 16) + o * c(2, 24)).toString(32)
        }
          , C = class {
            constructor(e) {
                this.removeUndefinedHeaders = e => Object.entries(e).reduce( (e, [t,r]) => (void 0 !== r && (e[t] = r),
                e), {}),
                this.get = () => this.headers,
                this.headers = this.removeUndefinedHeaders(e)
            }
        }
          , L = (e, t) => {
            let {csrfToken: r, contentType: n, segmentation: o} = t;
            return new C(g(p({}, Object.entries(null != e ? e : {}).reduce( (e, [t,r]) => ("content-type" === t.toLowerCase() || (e[t] = r),
            e), {})), {
                Accept: "application/json",
                "Content-Type": n,
                "x-csrf-token": r,
                "X-KOrigin": A(o)
            })).get()
        }
          , D = ((n = D || {}).BadRequest = "Bad Request",
        n.Unauthorized = "Unauthorized",
        n.PaymentRequired = "Payment Required",
        n.Forbidden = "Forbidden",
        n.NotFound = "Not Found",
        n.MethodNotAllowed = "Method Not Allowed",
        n.NotAcceptable = "Not Acceptable",
        n.ProxyAuthenticationRequired = "Proxy Authentication Required",
        n.RequestTimeout = "Request Timeout",
        n.Conflict = "Conflict",
        n.Gone = "Gone",
        n.LengthRequired = "Length Required",
        n.PreconditionFailed = "Precondition Failed",
        n.PayloadTooLarge = "Payload Too Large",
        n.URITooLong = "URI Too Long",
        n.UnsupportedMediaType = "Unsupported Media Type",
        n.RangeNotSatisfiable = "Range Not Satisfiable",
        n.ExpectationFailed = "Expectation Failed",
        n.ImATeapot = "I'm a teapot",
        n.MisdirectedRequest = "Misdirected Request",
        n.UnprocessableEntity = "Unprocessable Entity",
        n.Locked = "Locked",
        n.FailedDependency = "Failed Dependency",
        n.TooEarly = "Too Early",
        n.UpgradeRequired = "Upgrade Required",
        n.PreconditionRequired = "Precondition Required",
        n.TooManyRequests = "Too Many Requests",
        n.RequestHeaderFieldsTooLarge = "Request Header Fields Too Large",
        n.UnavailableForLegalReasons = "Unavailable For Legal Reasons",
        n)
          , W = {
            400: "Bad Request",
            401: "Unauthorized",
            402: "Payment Required",
            403: "Forbidden",
            404: "Not Found",
            405: "Method Not Allowed",
            406: "Not Acceptable",
            407: "Proxy Authentication Required",
            408: "Request Timeout",
            409: "Conflict",
            410: "Gone",
            411: "Length Required",
            412: "Precondition Failed",
            413: "Payload Too Large",
            414: "URI Too Long",
            415: "Unsupported Media Type",
            416: "Range Not Satisfiable",
            417: "Expectation Failed",
            418: "I'm a teapot",
            421: "Misdirected Request",
            422: "Unprocessable Entity",
            423: "Locked",
            424: "Failed Dependency",
            425: "Too Early",
            426: "Upgrade Required",
            428: "Precondition Required",
            429: "Too Many Requests",
            431: "Request Header Fields Too Large",
            451: "Unavailable For Legal Reasons"
        }
          , M = ((o = M || {}).InternalServerError = "Internal Server Error",
        o.NotImplemented = "Not Implemented",
        o.BadGateway = "Bad Gateway",
        o.ServiceUnavailable = "Service Unavailable",
        o.GatewayTimeout = "Gateway Timeout",
        o.HTTPVersionNotSupported = "HTTP Version Not Supported",
        o.VariantAlsoNegotiates = "Variant Also Negotiates",
        o.InsufficientStorage = "Insufficient Storage",
        o.LoopDetected = "Loop Detected",
        o.NotExtended = "Not Extended",
        o.NetworkAuthenticationRequired = "Network Authentication Required",
        o)
          , V = {
            500: "Internal Server Error",
            501: "Not Implemented",
            502: "Bad Gateway",
            503: "Service Unavailable",
            504: "Gateway Timeout",
            505: "HTTP Version Not Supported",
            506: "Variant Also Negotiates",
            507: "Insufficient Storage",
            508: "Loop Detected",
            510: "Not Extended",
            511: "Network Authentication Required"
        }
          , $ = r(68263)
          , G = r(45016)
          , _ = e => y(void 0, null, function*() {
            try {
                return {
                    kwebData: yield e.clone().json(),
                    kwebDataParsingError: void 0
                }
            } catch (e) {
                return {
                    kwebData: void 0,
                    kwebDataParsingError: e
                }
            }
        })
          , H = e => {
            if (!e || !Array.isArray(e) || 0 === e.length)
                return {
                    kwebErrors: void 0,
                    errors: void 0,
                    warnings: void 0
                };
            let t = e.map(e => ({
                errorClass: "errorClass"in e ? e.errorClass : void 0,
                field: "field"in e ? e.field : void 0,
                msg: "msg"in e ? e.msg : void 0,
                severity: "severity"in e ? e.severity : void 0,
                type: "type"in e ? e.type : void 0,
                value: "value"in e ? e.value : void 0,
                error: "error"in e ? e.error : void 0,
                valid_options: "valid_options"in e ? e.valid_options : void 0
            }));
            return {
                kwebErrors: t,
                errors: t.filter(e => "E" === e.severity),
                warnings: t.filter(e => "W" === e.severity)
            }
        }
          , B = e => {
            let {response: t, request: r, data: n, kwebData: o} = e
              , {status: i} = t
              , a = String(i)
              , l = void 0 !== W[a] ? W[a] : "Unknown";
            return new G.lV({
                message: l,
                response: t,
                request: r,
                data: n,
                kwebData: o
            })
        }
          , J = e => {
            let {response: t, request: r, data: n, kwebData: o} = e
              , {status: i} = t
              , a = String(i)
              , l = void 0 !== V[a] ? V[a] : "Unknown";
            return new G.lV({
                message: l,
                response: t,
                request: r,
                data: n,
                kwebData: o
            })
        }
          , z = e => {
            let {response: t} = e;
            return t.status >= 400 && t.status <= 499 ? B(e) : J(e)
        }
          , K = e => y(void 0, null, function*() {
            let {response: t, request: r, options: n} = e
              , {errors: o} = null != n ? n : {}
              , {kwebData: i, kwebDataParsingError: a} = yield _(t)
              , l = H(null == i ? void 0 : i.errors);
            try {
                if (l.kwebErrors) {
                    let {kwebErrors: e, errors: n, warnings: a} = l
                      , d = n && 0 !== n.length
                      , s = a && 0 !== a.length;
                    if ((null == o ? void 0 : o.logWarnings) && s && a.forEach(e => console.warn("Kweb Warning:", e.msg)),
                    d)
                        throw new G.lV({
                            message: "Response data errors with E severity found",
                            response: t,
                            request: r,
                            kwebData: i,
                            kwebErrors: e
                        });
                    if ((null == o ? void 0 : o.throwWarnings) && s)
                        throw new G.lV({
                            message: "Response data errors with W severity found",
                            response: t,
                            request: r,
                            kwebData: i,
                            kwebErrors: e
                        })
                }
                if (!t.ok)
                    throw z({
                        response: t,
                        request: r,
                        kwebData: i
                    });
                if (!i) {
                    let e = a instanceof Error ? a.message : "unknown";
                    throw new G.lV({
                        message: `Response data failed to be parsed. Error: ${e}`,
                        response: t,
                        request: r,
                        kwebData: i
                    })
                }
                if (null == i.result)
                    throw new G.lV({
                        message: "Response data result property is not defined",
                        response: t,
                        request: r,
                        kwebData: i
                    });
                return (0,
                $.g5)({
                    args: [{
                        response: t,
                        request: r,
                        kwebData: i
                    }]
                }),
                {
                    data: i
                }
            } catch (e) {
                throw (0,
                $.g5)({
                    args: [{
                        response: t,
                        request: r,
                        kwebData: i,
                        error: e
                    }]
                }),
                e
            }
        })
          , X = (e, t, r) => y(void 0, null, function*() {
            var n;
            let o = P({
                domain: e,
                basePath: t,
                path: "/session/expiration"
            });
            return null != (n = (yield fetch(o, r)).headers.get("x-internal-auth")) ? n : ""
        })
          , Q = e => y(void 0, null, function*() {
            let {domain: t, basePath: r, csrfAuth: n, csrfContextId: o, fetchOptions: i, operation: a} = e
              , l = `/csrf/${o}`
              , d = P({
                domain: t,
                basePath: r,
                path: l
            })
              , s = g(p({}, i), {
                method: "GET",
                headers: g(p({}, i.headers), {
                    "Csrf-Auth": n
                })
            })
              , u = yield fetch(d, s)
              , {data: c} = yield K({
                response: u,
                request: {
                    fetch: {
                        url: d,
                        options: s
                    },
                    path: l,
                    pathParams: void 0,
                    operation: {
                        id: "getCsrfToken",
                        module: "CSRF",
                        route: "/csrf/{context_id}"
                    },
                    initiator: {
                        operation: a
                    }
                }
            });
            return c.result.csrf_token
        })
          , Z = e => y(void 0, null, function*() {
            let {domain: t, basePath: r, method: n, csrfAuth: o, csrfToken: i, csrfContextId: a, segmentation: l, fetchOptionsDefaults: d, operation: s} = e;
            if (i)
                return i;
            if (n.toLowerCase() === k.w.GET.toLowerCase() || !a)
                return;
            let u = L(d.headers, {
                segmentation: l
            })
              , c = g(p({}, d), {
                headers: u
            })
              , f = null != o ? o : yield X(t, r, c);
            return Q({
                domain: t,
                basePath: r,
                csrfAuth: f,
                csrfContextId: a,
                fetchOptions: c,
                operation: s
            })
        })
          , Y = (e, t, r) => y(void 0, null, function*() {
            var n, o, i, a, l, d, s, u, c, f, g, y;
            let {options: h={}, operation: v} = e
              , w = (null != (n = h.method) ? n : k.w.GET).toUpperCase()
              , b = p(p({}, t.headers), h.headers)
              , {body: m, contentType: P} = j(h.body, b)
              , R = yield Z({
                domain: r.domain,
                basePath: r.basePath,
                method: w,
                csrfAuth: r.csrf.auth,
                csrfToken: null == b ? void 0 : b["x-csrf-token"],
                csrfContextId: r.csrf.contextId,
                segmentation: r.segmentation,
                fetchOptionsDefaults: t,
                operation: v
            });
            return {
                body: m,
                cache: null != (o = h.cache) ? o : t.cache,
                credentials: null != (i = h.credentials) ? i : t.credentials,
                headers: L(b, {
                    csrfToken: R,
                    contentType: P,
                    segmentation: r.segmentation
                }),
                integrity: null != (a = h.integrity) ? a : t.integrity,
                keepalive: null != (l = h.keepalive) ? l : t.keepalive,
                method: w,
                mode: null != (d = h.mode) ? d : t.mode,
                redirect: null != (s = h.redirect) ? s : t.redirect,
                referrer: null != (u = h.referrer) ? u : t.referrer,
                referrerPolicy: null != (c = h.referrerPolicy) ? c : t.referrerPolicy,
                signal: null != (f = h.signal) ? f : t.signal,
                window: null != (g = h.window) ? g : t.window,
                priority: null != (y = h.priority) ? y : t.priority
            }
        })
          , ee = (e, t) => y(void 0, null, function*() {
            let r = q(e, t)
              , n = O(e.requestDefaults)
              , o = yield Y(t, n, r);
            return {
                configOptions: r,
                fetchOptions: o,
                fetchOptionsDefaults: n
            }
        })
          , et = e => e.replace(/\/+$/, "")
          , er = e => e.replace(/^\/+/, "")
          , en = e => er(et(e))
          , eo = [{
            prefix: "${",
            suffix: "}"
        }, {
            prefix: "{",
            suffix: "}"
        }, {
            prefix: ":",
            suffix: ""
        }]
          , ei = e => {
            for (let t of eo) {
                let {prefix: r, suffix: n} = t;
                if (e.startsWith(r) && e.endsWith(n)) {
                    let t = e.substring(r.length);
                    return t.substring(0, t.length - n.length)
                }
            }
        }
          , ea = (e, t="") => {
            let r = e.split("?")[0]
              , n = t.split("?")[0]
              , o = en(r)
              , i = en(n)
              , a = o.split("/")
              , l = i.split("/");
            if (a.length !== l.length)
                return;
            let d = a.reduce( (e, t, r) => {
                let n = ei(l[r]);
                return n && (e[n] = t),
                e
            }
            , {});
            if (0 !== Object.keys(d).length)
                return d
        }
          , el = e => y(void 0, null, function*() {
            let t = E();
            if (!t)
                throw Error(`No config found for kweb request: ${e.path}`);
            let {configOptions: r, fetchOptions: n, fetchOptionsDefaults: o} = yield ee(t, e)
              , i = P({
                domain: r.domain,
                basePath: r.basePath,
                path: e.path,
                query: e.query
            });
            return {
                configOptions: r,
                fetchOptions: n,
                fetchOptionsDefaults: o,
                fetchUrl: i
            }
        })
          , ed = e => {
            var t;
            let {requestParams: r, parsedParams: n} = e;
            return {
                fetch: {
                    url: n.fetchUrl,
                    options: n.fetchOptions
                },
                path: r.path,
                basePath: n.configOptions.basePath,
                pathParams: ea(r.path, null == (t = r.operation) ? void 0 : t.route),
                query: r.query,
                operation: r.operation
            }
        }
          , es = e => y(void 0, null, function*() {
            let t = yield el(e)
              , r = yield fetch(t.fetchUrl, t.fetchOptions)
              , n = ed({
                requestParams: e,
                parsedParams: t
            })
              , {data: o} = yield K({
                response: r,
                request: n,
                options: {
                    errors: t.configOptions.errors
                }
            });
            return {
                response: r,
                request: n,
                data: o
            }
        })
    },
    71281: function(e, t, r) {
        r.d(t, {
            a: function() {
                return o
            }
        });
        var n, o = ((n = o || {}).FormData = "multipart/form-data",
        n.Json = "application/json",
        n.Plain = "text/plain",
        n.XWwwFormUrlencoded = "application/x-www-form-urlencoded",
        n)
    },
    78712: function(e, t, r) {
        r.d(t, {
            w: function() {
                return o
            }
        });
        var n, o = ((n = o || {}).GET = "get",
        n.POST = "post",
        n.PUT = "put",
        n.PATCH = "patch",
        n.DELETE = "delete",
        n)
    },
    88408: function(e, t, r) {
        r.d(t, {
            i: function() {
                return y
            }
        });
        var n = Object.defineProperty
          , o = Object.defineProperties
          , i = Object.getOwnPropertyDescriptors
          , a = Object.getOwnPropertySymbols
          , l = Object.prototype.hasOwnProperty
          , d = Object.prototype.propertyIsEnumerable
          , s = (e, t, r) => t in e ? n(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[t] = r
          , u = (e, t) => {
            for (var r in t || (t = {}))
                l.call(t, r) && s(e, r, t[r]);
            if (a)
                for (var r of a(t))
                    d.call(t, r) && s(e, r, t[r]);
            return e
        }
          , c = (e, t) => o(e, i(t))
          , f = (e, t, r) => new Promise( (n, o) => {
            var i = e => {
                try {
                    l(r.next(e))
                } catch (e) {
                    o(e)
                }
            }
              , a = e => {
                try {
                    l(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }
              , l = e => e.done ? n(e.value) : Promise.resolve(e.value).then(i, a);
            l((r = r.apply(e, t)).next())
        }
        )
          , p = r(67294)
          , g = {
            ignoreWhileCallingFn: !1
        }
          , y = (e, t=g) => {
            let[r,n] = (0,
            p.useState)({
                data: void 0,
                loading: !1,
                error: void 0
            })
              , o = (0,
            p.useRef)({
                mutationId: 0,
                state: r,
                callback: e,
                options: t
            });
            o.current = c(u({}, o.current), {
                state: r,
                callback: e,
                options: u(u({}, g), t)
            });
            let i = (0,
            p.useCallback)(e => {
                n(t => {
                    let r = u(u({}, t), e);
                    return o.current.state = r,
                    r
                }
                )
            }
            , []);
            return [(0,
            p.useCallback)( (...e) => f(void 0, null, function*() {
                var t, r, n, a;
                if (o.current.options.ignoreWhileCallingFn && o.current.state.loading)
                    return;
                let l = ++o.current.mutationId;
                i({
                    loading: !0
                });
                try {
                    let n = yield o.current.callback(...e);
                    return o.current.mutationId === l && (i({
                        data: n,
                        loading: !1,
                        error: void 0
                    }),
                    null == (r = (t = o.current.options).onCompleted) || r.call(t, n)),
                    n
                } catch (e) {
                    o.current.mutationId === l && (i({
                        data: void 0,
                        loading: !1,
                        error: e
                    }),
                    null == (a = (n = o.current.options).onError) || a.call(n, e));
                    return
                }
            }), [i]), r]
        }
    }
}]);
