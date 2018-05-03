!
    function(e) {
        function t(o) {
            if (n[o]) return n[o].exports;
            var i = n[o] = {
                exports: {},
                id: o,
                loaded: !1
            };
            return e[o].call(i.exports, i, i.exports, t),
                i.loaded = !0,
                i.exports
        }
        var n = {};
        t.m = e,
            t.c = n,
            t.p = "../wap/s",
            t(0)
    } ({
        0 : function(e, t, n) {
            e.exports = n(262)
        },
        2 : function(e, t, n) {
            "use strict";
            function o(e) {
                return e && e.__esModule ? e: {
                    default:
                    e
                }
            }
            function i(e, t) {
                var n = void 0;
                t || (t = location.pathname + location.search),
                    t += e ? location.hash: "",
                s[s.gaqStr] && s[s.gaqStr].push([s.gaTrackPageview, t]),
                    n = {
                        action: "pageview",
                        Utmp: location.href || "",
                        Utmr: document.referrer || "",
                        providerId: window.provider ? window.provider.id: null,
                        uid: window.webUser ? window.webUser.id: null
                    },
                    l((0, a.
                        default)(n))
            }
            function r(e, t, n, o) {
                if (e = e || s.eduProduct && s.eduProduct.gaCategory || "", t = t || "", !(n = n || "")) {
                    var i = s.globalUtil.dataForGA,
                        r = i.projectId || "",
                        a = i.projectName || "",
                        c = i.galleryId || "",
                        u = i.galleryName || "";
                    n = c ? u + "-" + c: r ? a + "-" + r: "-"
                }
                if (e && t) {
                    var l = [s.gaTrackEvent, e, t];
                    n && (l.push(n), void 0 != o && null != o && l.push(parseInt(o))),
                    s[s.gaqStr] && s[s.gaqStr].push(l)
                }
            }
            var a = o(n(3)),
                c = o(n(6)),
                s = window;
            s.globalUtil = s.globalUtil || {},
                s.globalUtil.dataForGA = s.globalUtil.dataForGA || {};
            var u = s.eduProduct && s.eduProduct.gaProduct || s.gaProduct || "study",
                l = function() {
                    var e = document.createElement("img");
                    return function(t) {
                        e.src = "//log.study.163.com/__utm.gif?p=" + u + "&dt=" + c.
                            default.str2hex(t)
                    }
                } ();
            s.globalUtil.__trackPage = function(e) {
                if (e && e.notTrackPage) return ! 1;
                i(!0, document.title)
            },
                s.globalUtil._$goToUrl = function(e, t) {
                    if (e) {
                        var n = "";
                        if (t && t._action) {
                            var o = t._action,
                                i = t._opt_label,
                                a = t._target;
                            r(null, o, i),
                                n = a || ""
                        }
                        setTimeout(function() {
                                n && "_blank" === n ? window.open(e, n) : location.href = e
                            },
                            200)
                    }
                },
                s.globalUtil._$trackEvent = r
        },
        3 : function(e, t, n) {
            e.exports = {
                default:
                    n(4),
                __esModule: !0
            }
        },
        4 : function(e, t, n) {
            var o = n(5),
                i = o.JSON || (o.JSON = {
                        stringify: JSON.stringify
                    });
            e.exports = function(e) {
                return i.stringify.apply(i, arguments)
            }
        },
        5 : function(e, t) {
            var n = e.exports = {
                version: "2.5.0"
            };
            "number" == typeof __e && (__e = n)
        },
        6 : function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {},
                o = function(e, t) {
                    return e << t | e >>> 32 - t
                },
                i = function(e, t) {
                    var n = (65535 & e) + (65535 & t);
                    return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
                },
                r = function(e, t, n, o) {
                    return e < 20 ? t & n | ~t & o: e < 40 ? t ^ n ^ o: e < 60 ? t & n | t & o | n & o: t ^ n ^ o
                },
                a = function(e) {
                    return e < 20 ? 1518500249 : e < 40 ? 1859775393 : e < 60 ? -1894007588 : -899497514
                },
                c = function() {
                    var e = function(e) {
                            return e % 32
                        },
                        t = function(e) {
                            return 24 - e % 32
                        };
                    return function(n, o) {
                        for (var i = [], r = o ? e: t, a = 0, c = 8 * n.length; a < c; a += 8) i[a >> 5] |= (255 & n.charCodeAt(a / 8)) << r(a);
                        return i
                    }
                } (),
                s = function() {
                    var e = function(e) {
                            return e % 4
                        },
                        t = function(e) {
                            return 3 - e % 4
                        };
                    return function(n, o) {
                        for (var i = [], r = o ? e: t, a = 0, c = 4 * n.length; a < c; a++) i.push("0123456789abcdef".charAt(n[a >> 2] >> 8 * r(a) + 4 & 15) + "0123456789abcdef".charAt(n[a >> 2] >> 8 * r(a) & 15));
                        return i.join("")
                    }
                } (),
                u = function() {
                    var e = function(e) {
                            return e % 32
                        },
                        t = function(e) {
                            return 24 - e % 32
                        };
                    return function(n, o) {
                        for (var i = [], r = o ? e: t, a = 0, c = 32 * n.length; a < c; a += 8) i.push(String.fromCharCode(n[a >> 5] >>> r(a) & 255));
                        return i.join("")
                    }
                } (),
                l = function() {
                    var e = function(e) {
                            return e % 4
                        },
                        t = function(e) {
                            return 3 - e % 4
                        };
                    return function(n, o) {
                        for (var i, r = [], a = o ? e: t, c = 0; c < 4 * n.length; c += 3) {
                            i = (n[c >> 2] >> 8 * a(c) & 255) << 16 | (n[c + 1 >> 2] >> 8 * a(c + 1) & 255) << 8 | n[c + 2 >> 2] >> 8 * a(c + 2) & 255;
                            for (var s = 0; s < 4; s++) r.push(8 * c + 6 * s > 32 * n.length ? "=": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i >> 6 * (3 - s) & 63))
                        }
                        return r.join("")
                    }
                } (),
                d = function(e, t, n, r, a, c) {
                    return i(o(i(i(t, e), i(r, c)), a), n)
                },
                p = function(e, t, n, o, i, r, a) {
                    return d(t & n | ~t & o, e, t, i, r, a)
                },
                f = function(e, t, n, o, i, r, a) {
                    return d(t & o | n & ~o, e, t, i, r, a)
                },
                h = function(e, t, n, o, i, r, a) {
                    return d(t ^ n ^ o, e, t, i, r, a)
                },
                m = function(e, t, n, o, i, r, a) {
                    return d(n ^ (t | ~o), e, t, i, r, a)
                },
                g = function(e, t) {
                    e[t >> 5] |= 128 << t % 32,
                        e[14 + (t + 64 >>> 9 << 4)] = t;
                    for (var n, o, r, a, c = 1732584193,
                             s = -271733879,
                             u = -1732584194,
                             l = 271733878,
                             d = 0,
                             g = e.length; d < g; d += 16) n = c,
                        o = s,
                        r = u,
                        a = l,
                        c = p(c, s, u, l, e[d + 0], 7, -680876936),
                        l = p(l, c, s, u, e[d + 1], 12, -389564586),
                        u = p(u, l, c, s, e[d + 2], 17, 606105819),
                        s = p(s, u, l, c, e[d + 3], 22, -1044525330),
                        c = p(c, s, u, l, e[d + 4], 7, -176418897),
                        l = p(l, c, s, u, e[d + 5], 12, 1200080426),
                        u = p(u, l, c, s, e[d + 6], 17, -1473231341),
                        s = p(s, u, l, c, e[d + 7], 22, -45705983),
                        c = p(c, s, u, l, e[d + 8], 7, 1770035416),
                        l = p(l, c, s, u, e[d + 9], 12, -1958414417),
                        u = p(u, l, c, s, e[d + 10], 17, -42063),
                        s = p(s, u, l, c, e[d + 11], 22, -1990404162),
                        c = p(c, s, u, l, e[d + 12], 7, 1804603682),
                        l = p(l, c, s, u, e[d + 13], 12, -40341101),
                        u = p(u, l, c, s, e[d + 14], 17, -1502002290),
                        s = p(s, u, l, c, e[d + 15], 22, 1236535329),
                        c = f(c, s, u, l, e[d + 1], 5, -165796510),
                        l = f(l, c, s, u, e[d + 6], 9, -1069501632),
                        u = f(u, l, c, s, e[d + 11], 14, 643717713),
                        s = f(s, u, l, c, e[d + 0], 20, -373897302),
                        c = f(c, s, u, l, e[d + 5], 5, -701558691),
                        l = f(l, c, s, u, e[d + 10], 9, 38016083),
                        u = f(u, l, c, s, e[d + 15], 14, -660478335),
                        s = f(s, u, l, c, e[d + 4], 20, -405537848),
                        c = f(c, s, u, l, e[d + 9], 5, 568446438),
                        l = f(l, c, s, u, e[d + 14], 9, -1019803690),
                        u = f(u, l, c, s, e[d + 3], 14, -187363961),
                        s = f(s, u, l, c, e[d + 8], 20, 1163531501),
                        c = f(c, s, u, l, e[d + 13], 5, -1444681467),
                        l = f(l, c, s, u, e[d + 2], 9, -51403784),
                        u = f(u, l, c, s, e[d + 7], 14, 1735328473),
                        s = f(s, u, l, c, e[d + 12], 20, -1926607734),
                        c = h(c, s, u, l, e[d + 5], 4, -378558),
                        l = h(l, c, s, u, e[d + 8], 11, -2022574463),
                        u = h(u, l, c, s, e[d + 11], 16, 1839030562),
                        s = h(s, u, l, c, e[d + 14], 23, -35309556),
                        c = h(c, s, u, l, e[d + 1], 4, -1530992060),
                        l = h(l, c, s, u, e[d + 4], 11, 1272893353),
                        u = h(u, l, c, s, e[d + 7], 16, -155497632),
                        s = h(s, u, l, c, e[d + 10], 23, -1094730640),
                        c = h(c, s, u, l, e[d + 13], 4, 681279174),
                        l = h(l, c, s, u, e[d + 0], 11, -358537222),
                        u = h(u, l, c, s, e[d + 3], 16, -722521979),
                        s = h(s, u, l, c, e[d + 6], 23, 76029189),
                        c = h(c, s, u, l, e[d + 9], 4, -640364487),
                        l = h(l, c, s, u, e[d + 12], 11, -421815835),
                        u = h(u, l, c, s, e[d + 15], 16, 530742520),
                        s = h(s, u, l, c, e[d + 2], 23, -995338651),
                        c = m(c, s, u, l, e[d + 0], 6, -198630844),
                        l = m(l, c, s, u, e[d + 7], 10, 1126891415),
                        u = m(u, l, c, s, e[d + 14], 15, -1416354905),
                        s = m(s, u, l, c, e[d + 5], 21, -57434055),
                        c = m(c, s, u, l, e[d + 12], 6, 1700485571),
                        l = m(l, c, s, u, e[d + 3], 10, -1894986606),
                        u = m(u, l, c, s, e[d + 10], 15, -1051523),
                        s = m(s, u, l, c, e[d + 1], 21, -2054922799),
                        c = m(c, s, u, l, e[d + 8], 6, 1873313359),
                        l = m(l, c, s, u, e[d + 15], 10, -30611744),
                        u = m(u, l, c, s, e[d + 6], 15, -1560198380),
                        s = m(s, u, l, c, e[d + 13], 21, 1309151649),
                        c = m(c, s, u, l, e[d + 4], 6, -145523070),
                        l = m(l, c, s, u, e[d + 11], 10, -1120210379),
                        u = m(u, l, c, s, e[d + 2], 15, 718787259),
                        s = m(s, u, l, c, e[d + 9], 21, -343485551),
                        c = i(c, n),
                        s = i(s, o),
                        u = i(u, r),
                        l = i(l, a);
                    return [c, s, u, l]
                },
                v = function(e, t) {
                    var n = c(e, !0);
                    n.length > 16 && (n = g(n, 8 * e.length));
                    for (var o = Array(16), i = Array(16), r = 0; r < 16; r++) o[r] = 909522486 ^ n[r],
                        i[r] = 1549556828 ^ n[r];
                    var a = g(o.concat(c(t, !0)), 512 + 8 * t.length);
                    return g(i.concat(a), 640)
                },
                y = function(e, t) {
                    e[t >> 5] |= 128 << 24 - t % 32,
                        e[15 + (t + 64 >> 9 << 4)] = t;
                    for (var n, c, s, u, l, d = Array(80), p = 1732584193, f = -271733879, h = -1732584194, m = 271733878, g = -1009589776, v = 0, y = e.length; v < y; v += 16) {
                        n = p,
                            c = f,
                            s = h,
                            u = m,
                            l = g;
                        for (var w = 0; w < 80; w++) {
                            d[w] = w < 16 ? e[v + w] : o(d[w - 3] ^ d[w - 8] ^ d[w - 14] ^ d[w - 16], 1);
                            var b = i(i(o(p, 5), r(w, f, h, m)), i(i(g, d[w]), a(w)));
                            g = m,
                                m = h,
                                h = o(f, 30),
                                f = p,
                                p = b
                        }
                        p = i(p, n),
                            f = i(f, c),
                            h = i(h, s),
                            m = i(m, u),
                            g = i(g, l)
                    }
                    return [p, f, h, m, g]
                },
                w = function(e, t) {
                    var n = c(e);
                    n.length > 16 && (n = y(n, 8 * e.length));
                    for (var o = Array(16), i = Array(16), r = 0; r < 16; r++) o[r] = 909522486 ^ n[r],
                        i[r] = 1549556828 ^ n[r];
                    var a = y(o.concat(c(t)), 512 + 8 * t.length);
                    return y(i.concat(a), 672)
                };
            n.hmacsha12hex = function(e, t) {
                return s(w(e, t))
            },
                n.hmacsha12b64 = function(e, t) {
                    return l(w(e, t))
                },
                n.hmacsha12str = function(e, t) {
                    return u(w(e, t))
                },
                n.hmacmd52hex = function(e, t) {
                    return s(v(e, t), !0)
                },
                n.hmacmd52b64 = function(e, t) {
                    return l(v(e, t), !0)
                },
                n.hmacmd52str = function(e, t) {
                    return u(v(e, t), !0)
                },
                n.sha12hex = function(e) {
                    return s(y(c(e), 8 * e.length))
                },
                n.sha12b64 = function(e) {
                    return l(y(c(e), 8 * e.length))
                },
                n.sha12str = function(e) {
                    return u(y(c(e), 8 * e.length))
                },
                n.md52hex = function(e) {
                    return s(g(c(e, !0), 8 * e.length), !0)
                },
                n.md52b64 = function(e) {
                    return l(g(c(e, !0), 8 * e.length), !0)
                },
                n.md52str = function(e) {
                    return u(g(c(e, !0), 8 * e.length), !0)
                },
                n.str2hex = function(e, t) {
                    return s(c(e, !t), !t)
                },
                t.
                    default = n
        },
        10 : function(e, t) {
            e.exports = function() {
                var e = [];
                return e.toString = function() {
                    for (var e = [], t = 0; t < this.length; t++) {
                        var n = this[t];
                        n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
                    }
                    return e.join("")
                },
                    e.i = function(t, n) {
                        "string" == typeof t && (t = [[null, t, ""]]);
                        for (var o = {},
                                 i = 0; i < this.length; i++) {
                            var r = this[i][0];
                            "number" == typeof r && (o[r] = !0)
                        }
                        for (i = 0; i < t.length; i++) {
                            var a = t[i];
                            "number" == typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n: n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a))
                        }
                    },
                    e
            }
        },
        11 : function(e, t, n) {
            function o(e, t) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n],
                        i = d[o.id];
                    if (i) {
                        i.refs++;
                        for (a = 0; a < i.parts.length; a++) i.parts[a](o.parts[a]);
                        for (; a < o.parts.length; a++) i.parts.push(s(o.parts[a], t))
                    } else {
                        for (var r = [], a = 0; a < o.parts.length; a++) r.push(s(o.parts[a], t));
                        d[o.id] = {
                            id: o.id,
                            refs: 1,
                            parts: r
                        }
                    }
                }
            }
            function i(e) {
                for (var t = [], n = {},
                         o = 0; o < e.length; o++) {
                    var i = e[o],
                        r = i[0],
                        a = {
                            css: i[1],
                            media: i[2],
                            sourceMap: i[3]
                        };
                    n[r] ? n[r].parts.push(a) : t.push(n[r] = {
                        id: r,
                        parts: [a]
                    })
                }
                return t
            }
            function r(e, t) {
                var n = h(),
                    o = v[v.length - 1];
                if ("top" === e.insertAt) o ? o.nextSibling ? n.insertBefore(t, o.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild),
                    v.push(t);
                else {
                    if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                    n.appendChild(t)
                }
            }
            function a(e) {
                e.parentNode.removeChild(e);
                var t = v.indexOf(e);
                t >= 0 && v.splice(t, 1)
            }
            function c(e) {
                var t = document.createElement("style");
                return t.type = "text/css",
                    r(e, t),
                    t
            }
            function s(e, t) {
                var n, o, i;
                if (t.singleton) {
                    var r = g++;
                    n = m || (m = c(t)),
                        o = u.bind(null, n, r, !1),
                        i = u.bind(null, n, r, !0)
                } else n = c(t),
                    o = l.bind(null, n),
                    i = function() {
                        a(n)
                    };
                return o(e),
                    function(t) {
                        if (t) {
                            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                            o(e = t)
                        } else i()
                    }
            }
            function u(e, t, n, o) {
                var i = n ? "": o.css;
                if (e.styleSheet) e.styleSheet.cssText = y(t, i);
                else {
                    var r = document.createTextNode(i),
                        a = e.childNodes;
                    a[t] && e.removeChild(a[t]),
                        a.length ? e.insertBefore(r, a[t]) : e.appendChild(r)
                }
            }
            function l(e, t) {
                var n = t.css,
                    o = t.media,
                    i = t.sourceMap;
                if (o && e.setAttribute("media", o), i && (n += "\n/*# sourceURL=" + i.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"), e.styleSheet) e.styleSheet.cssText = n;
                else {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(n))
                }
            }
            var d = {},
                p = function(e) {
                    var t;
                    return function() {
                        return void 0 === t && (t = e.apply(this, arguments)),
                            t
                    }
                },
                f = p(function() {
                    return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
                }),
                h = p(function() {
                    return document.head || document.getElementsByTagName("head")[0]
                }),
                m = null,
                g = 0,
                v = [];
            e.exports = function(e, t) {
                void 0 === (t = t || {}).singleton && (t.singleton = f()),
                void 0 === t.insertAt && (t.insertAt = "bottom");
                var n = i(e);
                return o(n, t),
                    function(e) {
                        for (var r = [], a = 0; a < n.length; a++) {
                            var c = n[a]; (s = d[c.id]).refs--,
                                r.push(s)
                        }
                        e && o(i(e), t);
                        for (a = 0; a < r.length; a++) {
                            var s = r[a];
                            if (0 === s.refs) {
                                for (var u = 0; u < s.parts.length; u++) s.parts[u]();
                                delete d[s.id]
                            }
                        }
                    }
            };
            var y = function() {
                var e = [];
                return function(t, n) {
                    return e[t] = n,
                        e.filter(Boolean).join("\n")
                }
            } ()
        },
        13 : function(e, t, n) {
            var o, i;
            n(14),
                o = n(16);
            var r = n(17);
            i = o = o || {},
            "object" != typeof o.
                default && "function" != typeof o.
                default || (i = o = o.
                default),
            "function" == typeof i && (i = i.options),
                i.render = r.render,
                i.staticRenderFns = r.staticRenderFns,
                e.exports = o
        },
        14 : function(e, t, n) {
            var o = n(15);
            "string" == typeof o && (o = [[e.id, o, ""]]);
            n(11)(o, {});
            o.locals && (e.exports = o.locals)
        },
        15 : function(e, t, n) { (e.exports = n(10)()).push([e.id, ".main{padding-top:1.333333rem}.nav-bar{position:fixed;top:0;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;height:1.333333rem;padding:0 .4rem;box-sizing:border-box;background:#fff;color:#607d8b;font-size:.373333rem;z-index:9999;border-bottom:1px solid #f4f4f4}.hairlines .nav-bar{border-bottom:.5px solid #f4f4f4}.icon{display:-webkit-box;display:-webkit-flex;display:flex}.nav-logo{-webkit-box-flex:1;-webkit-flex:1;flex:1}.i-logo{width:2.626667rem;height:.8rem;background:url(../public/img/ban.png) no-repeat 0 0;margin-top:14px;background-size:contain}.nav-list{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.nav-item{height:.586667rem;line-height:.586667rem;padding:0 .2rem;margin-right:.133333rem;color:#607d8b}.nav-active,.nav-active:active,.nav-active:visited{background:#34c9db;color:#fff;border-radius:1.333333rem}.user-link{display:-webkit-box;display:-webkit-flex;display:flex;margin-left:.2rem}.user-link,.user-pic{width:.666667rem;height:.666667rem}.user-pic{line-height:.666667rem;border-radius:.333333rem}.user-link .ux-scratch-icon-user{background:#eceff1;color:#b0bec5;text-align:center}.user-content{position:absolute;width:2.666667rem;top:1.333333rem;right:0;padding:0 .32rem;background:#fff;border:1px solid #f4f4f4;border-top:none;overflow:hidden}.hairlines .user-content{border:.5px solid #f4f4f4}.content-item{display:block;color:#607d8b;height:1.333333rem;line-height:1.333333rem;text-align:center;font-size:.4rem}.item-border{border-bottom:1px solid #f4f4f4}.hairlines .item-border{border-bottom:.5px solid #f4f4f4}.bounce-enter-active{-webkit-animation:bounce-in .1s;animation:bounce-in .1s}.bounce-leave-active{-webkit-animation:bounce-in .1s reverse;animation:bounce-in .1s reverse}@-webkit-keyframes bounce-in{0%{opacity:0;-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:top left}to{opacity:1;-webkit-transform:scaleY(1);transform:scaleY(1);-webkit-transform-origin:top left}}@keyframes bounce-in{0%{opacity:0;-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:top left}to{opacity:1;-webkit-transform:scaleY(1);transform:scaleY(1);-webkit-transform-origin:top left}}", ""])
        },
        16 : function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.
                    default = {
                    props: ["from"],
                    data: function() {
                        return {
                            navList: [{
                                name: "首页",
                                link: "http://www.maomi.xn--fiqs8s/#/home"
                            },
                            {
                                name: "发现",
                                link: "http://www.maomi.xn--fiqs8s/#/find"
                            },
                            ],
                        }
                    },
                    computed: {
                        userLink: function() {
                            return this.isLogin ? this.userCenterUrl: this.loginUrl
                        }
                    },
                    watch: {
                        userId: function(e, t) {
                            this.userCenterUrl = "/h5/u/" + this.userId + ".htm"
                        }
                    },
                    methods: {
                        toggleUserContent: function() {
                            this.showUserContent = !this.showUserContent
                        },
                        logout: function() {
                            window.globalUtil._$goToUrl("/h5/member/logout.htm?redirectUrl=" + encodeURIComponent(location.href), {
                                _action: "导航点击",
                                _opt_label: "退出登录"
                            })
                        },
                        _$goToUrl: function(e, t) {
                            window.globalUtil._$goToUrl(e, t)
                        }
                    },
                    created: function() {
                        if (window.webUser && window.webUser.uid) {
                            var e = window.webUser,
                                t = e.uid,
                                n = e.smallFaceUrl;
                            this.userId = t,
                                this.userPic = n,
                                this.isLogin = !0
                        }
                    }
                }
        },
        17 : function(e, t) {
            e.exports = {
                render: function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                            staticClass: "nav-bar"
                        },
                        [n("div", {
                                staticClass: "nav-logo"
                            },
                            [n("a", {
                                staticClass: "icon i-logo",
                                on: {
                                    click: function(t) {
//                                      e._$goToUrl("index" === e.from ? "": "/", {
//                                          _action: "导航点击",
//                                          _opt_label: "logo"
//                                      })
										window.location = '../index.html'
                                    }
                                }
                            })]), e._v(" "), n("div", {
                                staticClass: "nav-list"
                            },
                            [e._l(e.navList,
                                function(t) {
                                    return [n("a", {
                                            class: ["nav-item", t.id === e.from ? "nav-active": ""],
                                            on: {
                                                click: function(n) {
                                                    e._$goToUrl(t.id === e.from ? "": t.link, {
                                                        _action: "导航点击",
                                                        _opt_label: t.name
                                                    })

                                                }
                                            }
                                        },
                                        [e._v(e._s(t.name))])]
                                }), e._v(" ")], 2), e._v(" ")], 1)
                },
                staticRenderFns: []
            }
        },
        18 : function(e, t, n) {
            "use strict";
            function o(e) {
                var t = e.offsetLeft;
                return null != e.offsetParent && (t += o(e.offsetParent)),
                    t
            }
            function i(e) {
                var t = e.offsetTop;
                return null != e.offsetParent && (t += i(e.offsetParent)),
                    t
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.getPageBox = void 0,
                t.getParam = function(e, t) {
                    var n = "",
                        o = "",
                        i = "";
                    if (1 === arguments.length) o = e,
                        i = window.location.search;
                    else {
                        n = e,
                            o = t;
                        var r = document.createElement("a");
                        r.href = n,
                            i = r.search
                    }
                    var a = new RegExp("(^|&)" + o + "=([^&]*)(&|$)"),
                        c = i.substr(1).match(a);
                    return null != c ? decodeURIComponent(c[2]) : ""
                },
                t.request = function(e, t, n, o) {
                    var i = window.location.port,
                        r = window.location.host,
                        a = e;
                    /^https*:\/\//.test(e) || (a = i ? "/mock/api/get/" + e + "/data.json": "//" + r + "/" + e),
                        Vue.http.get(a, t ? {
                            params: t
                        }: {}).then(function(e) {
                                n && n(e.data)
                            },
                            function(e) {
                                console.log("error", e),
                                o && o(e)
                            })
                },
                t.postRequest = function(e, t, n) {
                    e = e || {},
                        Vue.http.post(e.url, e.body, {
                            headers: e.headers,
                            emulateJSON: e.emulateJSON
                        }).then(function(e) {
                                t && t(e.data)
                            },
                            function(e) {
                                console.log("error", e),
                                n && n(e)
                            })
                },
                t.oneOf = function(e, t) {
                    for (var n = 0; n < t.length; n++) if (e === t[n]) return ! 0;
                    return ! 1
                },
                t.getNetWorkState = function() {
                    var e = "",
                        t = window.navigator.userAgent,
                        n = window.navigator.connection;
                    if (/MicroMessenger/.test(t)) if (/NetType/.test(t)) {
                        var o = t.match(/NetType\/(\S*)/);
                        e = o[1]
                    } else document.addEventListener("WeixinJSBridgeReady",
                        function() {
                            WeixinJSBridge.invoke("getNetworkType", {},
                                function(t) {
                                    e = t.err_msg
                                })
                        });
                    else if (n) {
                        var i = n.type;
                        e = i
                    }
                    return e
                },
                t.getLeft = o,
                t.getTop = i,
                n(19);
            t.getPageBox = function() {
                var e = function(e) {
                        var t = 0;
                        return e.forEach(function(e) {
                            e && (t = t ? Math.min(t, e) : e)
                        }),
                            t
                    },
                    t = [{
                        main: "scroll",
                        sub: ["Top", "Left"],
                        func: function(e, t, n) {
                            return Math.max(t["scroll" + e], n["scroll" + e])
                        }
                    },
                        {
                            main: "client",
                            sub: ["Width", "Height"],
                            func: function(t, n, o) {
                                return e([n["client" + t], n["offset" + t], o["client" + t], o["offset" + t]])
                            }
                        },
                        {
                            main: "scroll",
                            sub: ["Width", "Height"],
                            func: function(e, t, n, o) {
                                return Math.max(o["client" + e], t["scroll" + e], n["scroll" + e])
                            }
                        }];
                return function(e) {
                    var n = {},
                        o = e || document,
                        i = o.body,
                        r = o.documentElement;
                    return t.forEach(function(e) {
                        var t = e.main;
                        e.sub.forEach(function(o) {
                            n[t + o] = e.func(o, i, r, n)
                        })
                    }),
                        n
                }
            } ()
        },
        19 : function(e, t, n) {
            "use strict";
            function o(e) {
                this.state = z,
                    this.value = void 0,
                    this.deferred = [];
                var t = this;
                try {
                    e(function(e) {
                            t.resolve(e)
                        },
                        function(e) {
                            t.reject(e)
                        })
                } catch(e) {
                    t.reject(e)
                }
            }
            function i(e, t) {
                e instanceof Promise ? this.promise = e: this.promise = new Promise(e.bind(t)),
                    this.context = t
            }
            function r(e) {
                "undefined" != typeof console && G && console.warn("[VueResource warn]: " + e)
            }
            function a(e) {
                "undefined" != typeof console && console.error(e)
            }
            function c(e, t) {
                return Q(e, t)
            }
            function s(e) {
                return e ? e.replace(/^\s*|\s*$/g, "") : ""
            }
            function u(e, t) {
                return e && void 0 === t ? e.replace(/\s+$/, "") : e && t ? e.replace(new RegExp("[" + t + "]+$"), "") : e
            }
            function l(e) {
                return e ? e.toLowerCase() : ""
            }
            function d(e) {
                return e ? e.toUpperCase() : ""
            }
            function p(e) {
                return "string" == typeof e
            }
            function f(e) {
                return "function" == typeof e
            }
            function h(e) {
                return null !== e && "object" == typeof e
            }
            function m(e) {
                return h(e) && Object.getPrototypeOf(e) == Object.prototype
            }
            function g(e) {
                return "undefined" != typeof Blob && e instanceof Blob
            }
            function v(e) {
                return "undefined" != typeof FormData && e instanceof FormData
            }
            function y(e, t, n) {
                var o = i.resolve(e);
                return arguments.length < 2 ? o: o.then(t, n)
            }
            function w(e, t, n) {
                return n = n || {},
                f(n) && (n = n.call(t)),
                    k(e.bind({
                        $vm: t,
                        $options: n
                    }), e, {
                        $options: n
                    })
            }
            function b(e, t) {
                var n, o;
                if (Z(e)) for (n = 0; n < e.length; n++) t.call(e[n], e[n], n);
                else if (h(e)) for (o in e) H.call(e, o) && t.call(e[o], e[o], o);
                return e
            }
            function k(e) {
                return Y.call(arguments, 1).forEach(function(t) {
                    x(e, t, !0)
                }),
                    e
            }
            function C(e) {
                return Y.call(arguments, 1).forEach(function(t) {
                    for (var n in t) void 0 === e[n] && (e[n] = t[n])
                }),
                    e
            }
            function x(e, t, n) {
                for (var o in t) n && (m(t[o]) || Z(t[o])) ? (m(t[o]) && !m(e[o]) && (e[o] = {}), Z(t[o]) && !Z(e[o]) && (e[o] = []), x(e[o], t[o], n)) : void 0 !== t[o] && (e[o] = t[o])
            }
            function _(e, t, n) {
                var o = E(e),
                    i = o.expand(t);
                return n && n.push.apply(n, o.vars),
                    i
            }
            function E(e) {
                var t = ["+", "#", ".", "/", ";", "?", "&"],
                    n = [];
                return {
                    vars: n,
                    expand: function(o) {
                        return e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g,
                            function(e, i, r) {
                                if (i) {
                                    var a = null,
                                        c = [];
                                    if ( - 1 !== t.indexOf(i.charAt(0)) && (a = i.charAt(0), i = i.substr(1)), i.split(/,/g).forEach(function(e) {
                                            var t = /([^:\*]*)(?::(\d+)|(\*))?/.exec(e);
                                            c.push.apply(c, A(o, a, t[1], t[2] || t[3])),
                                                n.push(t[1])
                                        }), a && "+" !== a) {
                                        var s = ",";
                                        return "?" === a ? s = "&": "#" !== a && (s = a),
                                        (0 !== c.length ? a: "") + c.join(s)
                                    }
                                    return c.join(",")
                                }
                                return P(r)
                            })
                    }
                }
            }
            function A(e, t, n, o) {
                var i = e[n],
                    r = [];
                if (j(i) && "" !== i) if ("string" == typeof i || "number" == typeof i || "boolean" == typeof i) i = i.toString(),
                o && "*" !== o && (i = i.substring(0, parseInt(o, 10))),
                    r.push(T(t, i, S(t) ? n: null));
                else if ("*" === o) Array.isArray(i) ? i.filter(j).forEach(function(e) {
                    r.push(T(t, e, S(t) ? n: null))
                }) : Object.keys(i).forEach(function(e) {
                    j(i[e]) && r.push(T(t, i[e], e))
                });
                else {
                    var a = [];
                    Array.isArray(i) ? i.filter(j).forEach(function(e) {
                        a.push(T(t, e))
                    }) : Object.keys(i).forEach(function(e) {
                        j(i[e]) && (a.push(encodeURIComponent(e)), a.push(T(t, i[e].toString())))
                    }),
                        S(t) ? r.push(encodeURIComponent(n) + "=" + a.join(",")) : 0 !== a.length && r.push(a.join(","))
                } else ";" === t ? r.push(encodeURIComponent(n)) : "" !== i || "&" !== t && "?" !== t ? "" === i && r.push("") : r.push(encodeURIComponent(n) + "=");
                return r
            }
            function j(e) {
                return void 0 !== e && null !== e
            }
            function S(e) {
                return ";" === e || "&" === e || "?" === e
            }
            function T(e, t, n) {
                return t = "+" === e || "#" === e ? P(t) : encodeURIComponent(t),
                    n ? encodeURIComponent(n) + "=" + t: t
            }
            function P(e) {
                return e.split(/(%[0-9A-Fa-f]{2})/g).map(function(e) {
                    return /%[0-9A-Fa-f]/.test(e) || (e = encodeURI(e)),
                        e
                }).join("")
            }
            function B(e, t) {
                var n, o = this || {},
                    i = e;
                return p(e) && (i = {
                    url: e,
                    params: t
                }),
                    i = k({},
                        B.options, o.$options, i),
                    B.transforms.forEach(function(e) {
                        p(e) && (e = B.transform[e]),
                        f(e) && (n = U(e, n, o.$vm))
                    }),
                    n(i)
            }
            function U(e, t, n) {
                return function(o) {
                    return e.call(n, o, t)
                }
            }
            function D(e, t, n) {
                var o, i = Z(t),
                    r = m(t);
                b(t,
                    function(t, a) {
                        o = h(t) || Z(t),
                        n && (a = n + "[" + (r || o ? a: "") + "]"),
                            !n && i ? e.add(t.name, t.value) : o ? D(e, t, a) : e.add(a, t)
                    })
            }
            function I(e) {
                var t = e.match(/^\[|^\{(?!\{)/),
                    n = {
                        "[": /]$/,
                        "{": /}$/
                    };
                return t && n[t[0]].test(e)
            }
            function F(e, t) {
                t((e.client || (X ? ie: re))(e))
            }
            function M(e, t) {
                return Object.keys(e).reduce(function(e, n) {
                        return l(t) === l(n) ? n: e
                    },
                    null)
            }
            function V(e) {
                if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
                return s(e)
            }
            function O(e) {
                return new i(function(t) {
                    var n = new FileReader;
                    n.readAsText(e),
                        n.onload = function() {
                            t(n.result)
                        }
                })
            }
            function q(e) {
                return 0 === e.type.indexOf("text") || -1 !== e.type.indexOf("json")
            }
            function R(e) {
                var t = this || {},
                    n = ae(t.$vm);
                return C(e || {},
                    t.$options, R.options),
                    R.interceptors.forEach(function(e) {
                        p(e) && (e = R.interceptor[e]),
                        f(e) && n.use(e)
                    }),
                    n(new ue(e)).then(function(e) {
                            return e.ok ? e: i.reject(e)
                        },
                        function(e) {
                            return e instanceof Error && a(e),
                                i.reject(e)
                        })
            }
            function L(e, t, n, o) {
                var i = this || {},
                    r = {};
                return n = ee({},
                    L.actions, n),
                    b(n,
                        function(n, a) {
                            n = k({
                                    url: e,
                                    params: ee({},
                                        t)
                                },
                                o, n),
                                r[a] = function() {
                                    return (i.$http || R)(N(n, arguments))
                                }
                        }),
                    r
            }
            function N(e, t) {
                var n, o = ee({},
                    e),
                    i = {};
                switch (t.length) {
                    case 2:
                        i = t[0],
                            n = t[1];
                        break;
                    case 1:
                        /^(POST|PUT|PATCH)$/i.test(o.method) ? n = t[0] : i = t[0];
                        break;
                    case 0:
                        break;
                    default:
                        throw "Expected up to 2 arguments [params, body], got " + t.length + " arguments"
                }
                return o.body = n,
                    o.params = ee({},
                        o.params, i),
                    o
            }
            function W(e) {
                W.installed || (K(e), e.url = B, e.http = R, e.resource = L, e.Promise = i, Object.defineProperties(e.prototype, {
                    $url: {
                        get: function() {
                            return w(e.url, this, this.$options.url)
                        }
                    },
                    $http: {
                        get: function() {
                            return w(e.http, this, this.$options.http)
                        }
                    },
                    $resource: {
                        get: function() {
                            return e.resource.bind(this)
                        }
                    },
                    $promise: {
                        get: function() {
                            var t = this;
                            return function(n) {
                                return new e.Promise(n, t)
                            }
                        }
                    }
                }))
            }
            var z = 2;
            o.reject = function(e) {
                return new o(function(t, n) {
                    n(e)
                })
            },
                o.resolve = function(e) {
                    return new o(function(t, n) {
                        t(e)
                    })
                },
                o.all = function(e) {
                    return new o(function(t, n) {
                        var i = 0,
                            r = [];
                        0 === e.length && t(r);
                        for (var a = 0; a < e.length; a += 1) o.resolve(e[a]).then(function(n) {
                            return function(o) {
                                r[n] = o,
                                (i += 1) === e.length && t(r)
                            }
                        } (a), n)
                    })
                },
                o.race = function(e) {
                    return new o(function(t, n) {
                        for (var i = 0; i < e.length; i += 1) o.resolve(e[i]).then(t, n)
                    })
                };
            var $ = o.prototype;
            $.resolve = function(e) {
                var t = this;
                if (t.state === z) {
                    if (e === t) throw new TypeError("Promise settled with itself.");
                    var n = !1;
                    try {
                        var o = e && e.then;
                        if (null !== e && "object" == typeof e && "function" == typeof o) return void o.call(e,
                            function(e) {
                                n || t.resolve(e),
                                    n = !0
                            },
                            function(e) {
                                n || t.reject(e),
                                    n = !0
                            })
                    } catch(e) {
                        return void(n || t.reject(e))
                    }
                    t.state = 0,
                        t.value = e,
                        t.notify()
                }
            },
                $.reject = function(e) {
                    var t = this;
                    if (t.state === z) {
                        if (e === t) throw new TypeError("Promise settled with itself.");
                        t.state = 1,
                            t.value = e,
                            t.notify()
                    }
                },
                $.notify = function() {
                    var e = this;
                    c(function() {
                        if (e.state !== z) for (; e.deferred.length;) {
                            var t = e.deferred.shift(),
                                n = t[0],
                                o = t[1],
                                i = t[2],
                                r = t[3];
                            try {
                                0 === e.state ? i("function" == typeof n ? n.call(void 0, e.value) : e.value) : 1 === e.state && ("function" == typeof o ? i(o.call(void 0, e.value)) : r(e.value))
                            } catch(e) {
                                r(e)
                            }
                        }
                    })
                },
                $.then = function(e, t) {
                    var n = this;
                    return new o(function(o, i) {
                        n.deferred.push([e, t, o, i]),
                            n.notify()
                    })
                },
                $.
                    catch = function(e) {
                    return this.then(void 0, e)
                },
            "undefined" == typeof Promise && (window.Promise = o),
                i.all = function(e, t) {
                    return new i(Promise.all(e), t)
                },
                i.resolve = function(e, t) {
                    return new i(Promise.resolve(e), t)
                },
                i.reject = function(e, t) {
                    return new i(Promise.reject(e), t)
                },
                i.race = function(e, t) {
                    return new i(Promise.race(e), t)
                };
            var J = i.prototype;
            J.bind = function(e) {
                return this.context = e,
                    this
            },
                J.then = function(e, t) {
                    return e && e.bind && this.context && (e = e.bind(this.context)),
                    t && t.bind && this.context && (t = t.bind(this.context)),
                        new i(this.promise.then(e, t), this.context)
                },
                J.
                    catch = function(e) {
                    return e && e.bind && this.context && (e = e.bind(this.context)),
                        new i(this.promise.
                        catch(e), this.context)
                },
                J.
                    finally = function(e) {
                    return this.then(function(t) {
                            return e.call(this),
                                t
                        },
                        function(t) {
                            return e.call(this),
                                Promise.reject(t)
                        })
                };
            var Q, H = {}.hasOwnProperty,
                Y = [].slice,
                G = !1,
                X = "undefined" != typeof window,
                K = function(e) {
                    var t = e.config,
                        n = e.nextTick;
                    Q = n,
                        G = t.debug || !t.silent
                },
                Z = Array.isArray,
                ee = Object.assign ||
                    function(e) {
                        return Y.call(arguments, 1).forEach(function(t) {
                            x(e, t)
                        }),
                            e
                    };
            B.options = {
                url: "",
                root: null,
                params: {}
            },
                B.transform = {
                    template: function(e) {
                        var t = [],
                            n = _(e.url, e.params, t);
                        return t.forEach(function(t) {
                            delete e.params[t]
                        }),
                            n
                    },
                    query: function(e, t) {
                        var n = Object.keys(B.options.params),
                            o = {},
                            i = t(e);
                        return b(e.params,
                            function(e, t) { - 1 === n.indexOf(t) && (o[t] = e)
                            }),
                        (o = B.params(o)) && (i += ( - 1 == i.indexOf("?") ? "?": "&") + o),
                            i
                    },
                    root: function(e, t) {
                        var n = t(e);
                        return p(e.root) && !/^(https?:)?\//.test(n) && (n = u(e.root, "/") + "/" + n),
                            n
                    }
                },
                B.transforms = ["template", "query", "root"],
                B.params = function(e) {
                    var t = [],
                        n = encodeURIComponent;
                    return t.add = function(e, t) {
                        f(t) && (t = t()),
                        null === t && (t = ""),
                            this.push(n(e) + "=" + n(t))
                    },
                        D(t, e),
                        t.join("&").replace(/%20/g, "+")
                },
                B.parse = function(e) {
                    var t = document.createElement("a");
                    return document.documentMode && (t.href = e, e = t.href),
                        t.href = e,
                        {
                            href: t.href,
                            protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                            port: t.port,
                            host: t.host,
                            hostname: t.hostname,
                            pathname: "/" === t.pathname.charAt(0) ? t.pathname: "/" + t.pathname,
                            search: t.search ? t.search.replace(/^\?/, "") : "",
                            hash: t.hash ? t.hash.replace(/^#/, "") : ""
                        }
                };
            var te = function(e) {
                    return new i(function(t) {
                        var n = new XDomainRequest,
                            o = function(o) {
                                var i = o.type,
                                    r = 0;
                                "load" === i ? r = 200 : "error" === i && (r = 500),
                                    t(e.respondWith(n.responseText, {
                                        status: r
                                    }))
                            };
                        e.abort = function() {
                            return n.abort()
                        },
                            n.open(e.method, e.getUrl()),
                        e.timeout && (n.timeout = e.timeout),
                            n.onload = o,
                            n.onabort = o,
                            n.onerror = o,
                            n.ontimeout = o,
                            n.onprogress = function() {},
                            n.send(e.getBody())
                    })
                },
                ne = X && "withCredentials" in new XMLHttpRequest,
                oe = function(e) {
                    return new i(function(t) {
                        var n, o, i = e.jsonp || "callback",
                            r = e.jsonpCallback || "_jsonp" + Math.random().toString(36).substr(2),
                            a = null;
                        n = function(n) {
                            var i = n.type,
                                c = 0;
                            "load" === i && null !== a ? c = 200 : "error" === i && (c = 500),
                            c && window[r] && (delete window[r], document.body.removeChild(o)),
                                t(e.respondWith(a, {
                                    status: c
                                }))
                        },
                            window[r] = function(e) {
                                a = JSON.stringify(e)
                            },
                            e.abort = function() {
                                n({
                                    type: "abort"
                                })
                            },
                            e.params[i] = r,
                        e.timeout && setTimeout(e.abort, e.timeout),
                            (o = document.createElement("script")).src = e.getUrl(),
                            o.type = "text/javascript",
                            o.async = !0,
                            o.onload = n,
                            o.onerror = n,
                            document.body.appendChild(o)
                    })
                },
                ie = function(e) {
                    return new i(function(t) {
                        var n = new XMLHttpRequest,
                            o = function(o) {
                                var i = e.respondWith("response" in n ? n.response: n.responseText, {
                                    status: 1223 === n.status ? 204 : n.status,
                                    statusText: 1223 === n.status ? "No Content": s(n.statusText)
                                });
                                b(s(n.getAllResponseHeaders()).split("\n"),
                                    function(e) {
                                        i.headers.append(e.slice(0, e.indexOf(":")), e.slice(e.indexOf(":") + 1))
                                    }),
                                    t(i)
                            };
                        e.abort = function() {
                            return n.abort()
                        },
                        e.progress && ("GET" === e.method ? n.addEventListener("progress", e.progress) : /^(POST|PUT)$/i.test(e.method) && n.upload.addEventListener("progress", e.progress)),
                            n.open(e.method, e.getUrl(), !0),
                        e.timeout && (n.timeout = e.timeout),
                        e.responseType && "responseType" in n && (n.responseType = e.responseType),
                        (e.withCredentials || e.credentials) && (n.withCredentials = !0),
                        e.crossOrigin || e.headers.set("X-Requested-With", "XMLHttpRequest"),
                            e.headers.forEach(function(e, t) {
                                n.setRequestHeader(t, e)
                            }),
                            n.onload = o,
                            n.onabort = o,
                            n.onerror = o,
                            n.ontimeout = o,
                            n.send(e.getBody())
                    })
                },
                re = function(e) {
                    var t = n(20);
                    return new i(function(n) {
                        var o, i = e.getUrl(),
                            r = e.getBody(),
                            a = e.method,
                            c = {};
                        e.headers.forEach(function(e, t) {
                            c[t] = e
                        }),
                            t(i, {
                                body: r,
                                method: a,
                                headers: c
                            }).then(o = function(t) {
                                    var o = e.respondWith(t.body, {
                                        status: t.statusCode,
                                        statusText: s(t.statusMessage)
                                    });
                                    b(t.headers,
                                        function(e, t) {
                                            o.headers.set(t, e)
                                        }),
                                        n(o)
                                },
                                function(e) {
                                    return o(e.response)
                                })
                    })
                },
                ae = function(e) {
                    function t(t) {
                        return new i(function(i, c) {
                                function s() {
                                    f(n = o.pop()) ? n.call(e, t, u) : (r("Invalid interceptor of type " + typeof n + ", must be a function"), u())
                                }
                                function u(t) {
                                    if (f(t)) a.unshift(t);
                                    else if (h(t)) return a.forEach(function(n) {
                                        t = y(t,
                                            function(t) {
                                                return n.call(e, t) || t
                                            },
                                            c)
                                    }),
                                        void y(t, i, c);
                                    s()
                                }
                                s()
                            },
                            e)
                    }
                    var n, o = [F],
                        a = [];
                    return h(e) || (e = null),
                        t.use = function(e) {
                            o.push(e)
                        },
                        t
                },
                ce = function(e) {
                    var t = this;
                    this.map = {},
                        b(e,
                            function(e, n) {
                                return t.append(n, e)
                            })
                };
            ce.prototype.has = function(e) {
                return null !== M(this.map, e)
            },
                ce.prototype.get = function(e) {
                    var t = this.map[M(this.map, e)];
                    return t ? t.join() : null
                },
                ce.prototype.getAll = function(e) {
                    return this.map[M(this.map, e)] || []
                },
                ce.prototype.set = function(e, t) {
                    this.map[V(M(this.map, e) || e)] = [s(t)]
                },
                ce.prototype.append = function(e, t) {
                    var n = this.map[M(this.map, e)];
                    n ? n.push(s(t)) : this.set(e, t)
                },
                ce.prototype.delete = function(e) {
                    delete this.map[M(this.map, e)]
                },
                ce.prototype.deleteAll = function() {
                    this.map = {}
                },
                ce.prototype.forEach = function(e, t) {
                    var n = this;
                    b(this.map,
                        function(o, i) {
                            b(o,
                                function(o) {
                                    return e.call(t, o, i, n)
                                })
                        })
                };
            var se = function(e, t) {
                var n = t.url,
                    o = t.headers,
                    i = t.status,
                    r = t.statusText;
                this.url = n,
                    this.ok = i >= 200 && i < 300,
                    this.status = i || 0,
                    this.statusText = r || "",
                    this.headers = new ce(o),
                    this.body = e,
                    p(e) ? this.bodyText = e: g(e) && (this.bodyBlob = e, q(e) && (this.bodyText = O(e)))
            };
            se.prototype.blob = function() {
                return y(this.bodyBlob)
            },
                se.prototype.text = function() {
                    return y(this.bodyText)
                },
                se.prototype.json = function() {
                    return y(this.text(),
                        function(e) {
                            return JSON.parse(e)
                        })
                },
                Object.defineProperty(se.prototype, "data", {
                    get: function() {
                        return this.body
                    },
                    set: function(e) {
                        this.body = e
                    }
                });
            var ue = function(e) {
                this.body = null,
                    this.params = {},
                    ee(this, e, {
                        method: d(e.method || "GET")
                    }),
                this.headers instanceof ce || (this.headers = new ce(this.headers))
            };
            ue.prototype.getUrl = function() {
                return B(this)
            },
                ue.prototype.getBody = function() {
                    return this.body
                },
                ue.prototype.respondWith = function(e, t) {
                    return new se(e, ee(t || {},
                        {
                            url: this.getUrl()
                        }))
                };
            var le = {
                    Accept: "application/json, text/plain, */*"
                },
                de = {
                    "Content-Type": "application/json;charset=utf-8"
                };
            R.options = {},
                R.headers = {
                    put: de,
                    post: de,
                    patch: de,
                    delete: de,
                    common: le,
                    custom: {}
                },
                R.interceptor = {
                    before: function(e, t) {
                        f(e.before) && e.before.call(this, e),
                            t()
                    },
                    method: function(e, t) {
                        e.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(e.method) && (e.headers.set("X-HTTP-Method-Override", e.method), e.method = "POST"),
                            t()
                    },
                    jsonp: function(e, t) {
                        "JSONP" == e.method && (e.client = oe),
                            t()
                    },
                    json: function(e, t) {
                        var n = e.headers.get("Content-Type") || "";
                        h(e.body) && 0 === n.indexOf("application/json") && (e.body = JSON.stringify(e.body)),
                            t(function(e) {
                                return e.bodyText ? y(e.text(),
                                    function(t) {
                                        if (0 === (n = e.headers.get("Content-Type") || "").indexOf("application/json") || I(t)) try {
                                            e.body = JSON.parse(t)
                                        } catch(t) {
                                            e.body = null
                                        } else e.body = t;
                                        return e
                                    }) : e
                            })
                    },
                    form: function(e, t) {
                        v(e.body) ? e.headers.delete("Content-Type") : h(e.body) && e.emulateJSON && (e.body = B.params(e.body), e.headers.set("Content-Type", "application/x-www-form-urlencoded")),
                            t()
                    },
                    header: function(e, t) {
                        b(ee({},
                            R.headers.common, e.crossOrigin ? {}: R.headers.custom, R.headers[l(e.method)]),
                            function(t, n) {
                                e.headers.has(n) || e.headers.set(n, t)
                            }),
                            t()
                    },
                    cors: function(e, t) {
                        if (X) {
                            var n = B.parse(location.href),
                                o = B.parse(e.getUrl());
                            o.protocol === n.protocol && o.host === n.host || (e.crossOrigin = !0, e.emulateHTTP = !1, ne || (e.client = te))
                        }
                        t()
                    }
                },
                R.interceptors = ["before", "method", "jsonp", "json", "form", "header", "cors"],
                ["get", "delete", "head", "jsonp"].forEach(function(e) {
                    R[e] = function(t, n) {
                        return this(ee(n || {},
                            {
                                url: t,
                                method: e
                            }))
                    }
                }),
                ["post", "put", "patch"].forEach(function(e) {
                    R[e] = function(t, n, o) {
                        return this(ee(o || {},
                            {
                                url: t,
                                method: e,
                                body: n
                            }))
                    }
                }),
                L.actions = {
                    get: {
                        method: "GET"
                    },
                    save: {
                        method: "POST"
                    },
                    query: {
                        method: "GET"
                    },
                    update: {
                        method: "PUT"
                    },
                    remove: {
                        method: "DELETE"
                    },
                    delete: {
                        method: "DELETE"
                    }
                },
            "undefined" != typeof window && window.Vue && window.Vue.use(W),
                e.exports = W
        },
        20 : function(e, t) {},
        35 : function(e, t, n) {
            var o = n(36),
                i = n(5),
                r = n(37),
                a = n(39),
                c = function(e, t, n) {
                    var s, u, l, d = e & c.F,
                        p = e & c.G,
                        f = e & c.S,
                        h = e & c.P,
                        m = e & c.B,
                        g = e & c.W,
                        v = p ? i: i[t] || (i[t] = {}),
                        y = v.prototype,
                        w = p ? o: f ? o[t] : (o[t] || {}).prototype;
                    p && (n = t);
                    for (s in n)(u = !d && w && void 0 !== w[s]) && s in v || (l = u ? w[s] : n[s], v[s] = p && "function" != typeof w[s] ? n[s] : m && u ? r(l, o) : g && w[s] == l ?
                        function(e) {
                            var t = function(t, n, o) {
                                if (this instanceof e) {
                                    switch (arguments.length) {
                                        case 0:
                                            return new e;
                                        case 1:
                                            return new e(t);
                                        case 2:
                                            return new e(t, n)
                                    }
                                    return new e(t, n, o)
                                }
                                return e.apply(this, arguments)
                            };
                            return t.prototype = e.prototype,
                                t
                        } (l) : h && "function" == typeof l ? r(Function.call, l) : l, h && ((v.virtual || (v.virtual = {}))[s] = l, e & c.R && y && !y[s] && a(y, s, l)))
                };
            c.F = 1,
                c.G = 2,
                c.S = 4,
                c.P = 8,
                c.B = 16,
                c.W = 32,
                c.U = 64,
                c.R = 128,
                e.exports = c
        },
        36 : function(e, t) {
            var n = e.exports = "undefined" != typeof window && window.Math == Math ? window: "undefined" != typeof self && self.Math == Math ? self: Function("return this")();
            "number" == typeof __g && (__g = n)
        },
        37 : function(e, t, n) {
            var o = n(38);
            e.exports = function(e, t, n) {
                if (o(e), void 0 === t) return e;
                switch (n) {
                    case 1:
                        return function(n) {
                            return e.call(t, n)
                        };
                    case 2:
                        return function(n, o) {
                            return e.call(t, n, o)
                        };
                    case 3:
                        return function(n, o, i) {
                            return e.call(t, n, o, i)
                        }
                }
                return function() {
                    return e.apply(t, arguments)
                }
            }
        },
        38 : function(e, t) {
            e.exports = function(e) {
                if ("function" != typeof e) throw TypeError(e + " is not a function!");
                return e
            }
        },
        39 : function(e, t, n) {
            var o = n(40),
                i = n(48);
            e.exports = n(44) ?
                function(e, t, n) {
                    return o.f(e, t, i(1, n))
                }: function(e, t, n) {
                    return e[t] = n,
                        e
                }
        },
        40 : function(e, t, n) {
            var o = n(41),
                i = n(43),
                r = n(47),
                a = Object.defineProperty;
            t.f = n(44) ? Object.defineProperty: function(e, t, n) {
                if (o(e), t = r(t, !0), o(n), i) try {
                    return a(e, t, n)
                } catch(e) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                return "value" in n && (e[t] = n.value),
                    e
            }
        },
        41 : function(e, t, n) {
            var o = n(42);
            e.exports = function(e) {
                if (!o(e)) throw TypeError(e + " is not an object!");
                return e
            }
        },
        42 : function(e, t) {
            e.exports = function(e) {
                return "object" == typeof e ? null !== e: "function" == typeof e
            }
        },
        43 : function(e, t, n) {
            e.exports = !n(44) && !n(45)(function() {
                    return 7 != Object.defineProperty(n(46)("div"), "a", {
                            get: function() {
                                return 7
                            }
                        }).a
                })
        },
        44 : function(e, t, n) {
            e.exports = !n(45)(function() {
                return 7 != Object.defineProperty({},
                        "a", {
                            get: function() {
                                return 7
                            }
                        }).a
            })
        },
        45 : function(e, t) {
            e.exports = function(e) {
                try {
                    return !! e()
                } catch(e) {
                    return ! 0
                }
            }
        },
        46 : function(e, t, n) {
            var o = n(42),
                i = n(36).document,
                r = o(i) && o(i.createElement);
            e.exports = function(e) {
                return r ? i.createElement(e) : {}
            }
        },
        47 : function(e, t, n) {
            var o = n(42);
            e.exports = function(e, t) {
                if (!o(e)) return e;
                var n, i;
                if (t && "function" == typeof(n = e.toString) && !o(i = n.call(e))) return i;
                if ("function" == typeof(n = e.valueOf) && !o(i = n.call(e))) return i;
                if (!t && "function" == typeof(n = e.toString) && !o(i = n.call(e))) return i;
                throw TypeError("Can't convert object to primitive value")
            }
        },
        48 : function(e, t) {
            e.exports = function(e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t
                }
            }
        },
        82 : function(e, t) {
            "use strict";
            Vue.filter("normalize",
                function(e) {
                    if (e < 0) return 0;
                    if (e < 1e4) return e;
                    if (e >= 1e4 && e < 1e7) {
                        var t = e / 1e3;
                        return Math.floor(10 * t) / 10 + "k"
                    }
                    if (e >= 1e7) {
                        var n = e / 1e6;
                        return Math.floor(10 * n) / 10 + "m"
                    }
                }),
                Vue.filter("fixFaceUrl",
                    function(e, t, n) {
                        return e ? e.split("?")[0] + "?imageView&thumbnail=" + t + "y" + n + "&quality=100": ""
                    })
        },
        132 : function(e, t) { !
            function(t, n) {
                e.exports = n(t)
            } (window,
                function(e, t) {
                    function n(t, n, o) {
                        e.WeixinJSBridge ? WeixinJSBridge.invoke(t, i(n),
                            function(e) {
                                c(t, e, o)
                            }) : l(t, o)
                    }
                    function o(t, n, o) {
                        e.WeixinJSBridge ? WeixinJSBridge.on(t,
                            function(e) {
                                o && o.trigger && o.trigger(e),
                                    c(t, e, n)
                            }) : o ? l(t, o) : l(t, n)
                    }
                    function i(e) {
                        return e = e || {},
                            e.appId = T.appId,
                            e.verifyAppId = T.appId,
                            e.verifySignType = "sha1",
                            e.verifyTimestamp = T.timestamp + "",
                            e.verifyNonceStr = T.nonceStr,
                            e.verifySignature = T.signature,
                            e
                    }
                    function r(e) {
                        return {
                            timeStamp: e.timestamp + "",
                            nonceStr: e.nonceStr,
                            package: e.package,
                            paySign: e.paySign,
                            signType: e.signType || "SHA1"
                        }
                    }
                    function a(e) {
                        return e.postalCode = e.addressPostalCode,
                            delete e.addressPostalCode,
                            e.provinceName = e.proviceFirstStageName,
                            delete e.proviceFirstStageName,
                            e.cityName = e.addressCitySecondStageName,
                            delete e.addressCitySecondStageName,
                            e.countryName = e.addressCountiesThirdStageName,
                            delete e.addressCountiesThirdStageName,
                            e.detailInfo = e.addressDetailInfo,
                            delete e.addressDetailInfo,
                            e
                    }
                    function c(e, t, n) {
                        "openEnterpriseChat" == e && (t.errCode = t.err_code),
                            delete t.err_code,
                            delete t.err_desc,
                            delete t.err_detail;
                        var o = t.errMsg;
                        o || (o = t.err_msg, delete t.err_msg, o = s(e, o), t.errMsg = o),
                        (n = n || {})._complete && (n._complete(t), delete n._complete),
                            o = t.errMsg || "",
                        T.debug && !n.isInnerInvoke && alert(JSON.stringify(t));
                        var i = o.indexOf(":");
                        switch (o.substring(i + 1)) {
                            case "ok":
                                n.success && n.success(t);
                                break;
                            case "cancel":
                                n.cancel && n.cancel(t);
                                break;
                            default:
                                n.fail && n.fail(t)
                        }
                        n.complete && n.complete(t)
                    }
                    function s(e, t) {
                        var n = e,
                            o = g[n];
                        o && (n = o);
                        var i = "ok";
                        if (t) {
                            var r = t.indexOf(":");
                            "confirm" == (i = t.substring(r + 1)) && (i = "ok"),
                            "failed" == i && (i = "fail"),
                            -1 != i.indexOf("failed_") && (i = i.substring(7)),
                            -1 != i.indexOf("fail_") && (i = i.substring(5)),
                            ("access denied" == (i = (i = i.replace(/_/g, " ")).toLowerCase()) || "no permission to execute" == i) && (i = "permission denied"),
                            "config" == n && "function not exist" == i && (i = "ok"),
                            "" == i && (i = "fail")
                        }
                        return t = n + ":" + i
                    }
                    function u(e) {
                        if (e) {
                            for (var t = 0,
                                     n = e.length; n > t; ++t) {
                                var o = e[t],
                                    i = m[o];
                                i && (e[t] = i)
                            }
                            return e
                        }
                    }
                    function l(e, t) {
                        if (! (!T.debug || t && t.isInnerInvoke)) {
                            var n = g[e];
                            n && (e = n),
                            t && t._complete && delete t._complete,
                                console.log('"' + e + '",', t || "")
                        }
                    }
                    function d(e) {
                        if (! (k || C || T.debug || "6.0.2" > A || S.systemType < 0)) {
                            var t = new Image;
                            S.appId = T.appId,
                                S.initTime = j.initEndTime - j.initStartTime,
                                S.preVerifyTime = j.preVerifyEndTime - j.preVerifyStartTime,
                                I.getNetworkType({
                                    isInnerInvoke: !0,
                                    success: function(e) {
                                        S.networkType = e.networkType;
                                        var n = "https://open.weixin.qq.com/sdk/report?v=" + S.version + "&o=" + S.isPreVerifyOk + "&s=" + S.systemType + "&c=" + S.clientVersion + "&a=" + S.appId + "&n=" + S.networkType + "&i=" + S.initTime + "&p=" + S.preVerifyTime + "&u=" + S.url;
                                        t.src = n
                                    }
                                })
                        }
                    }
                    function p() {
                        return (new Date).getTime()
                    }
                    function f(t) {
                        x && (e.WeixinJSBridge ? t() : v.addEventListener && v.addEventListener("WeixinJSBridgeReady", t, !1))
                    }
                    function h() {
                        I.invoke || (I.invoke = function(t, n, o) {
                            e.WeixinJSBridge && WeixinJSBridge.invoke(t, i(n), o)
                        },
                            I.on = function(t, n) {
                                e.WeixinJSBridge && WeixinJSBridge.on(t, n)
                            })
                    }
                    if (!e.jWeixin) {
                        var m = {
                                config: "preVerifyJSAPI",
                                onMenuShareTimeline: "menu:share:timeline",
                                onMenuShareAppMessage: "menu:share:appmessage",
                                onMenuShareQQ: "menu:share:qq",
                                onMenuShareWeibo: "menu:share:weiboApp",
                                onMenuShareQZone: "menu:share:QZone",
                                previewImage: "imagePreview",
                                getLocation: "geoLocation",
                                openProductSpecificView: "openProductViewWithPid",
                                addCard: "batchAddCard",
                                openCard: "batchViewCard",
                                chooseWXPay: "getBrandWCPayRequest",
                                openEnterpriseRedPacket: "getRecevieBizHongBaoRequest",
                                startSearchBeacons: "startMonitoringBeacons",
                                stopSearchBeacons: "stopMonitoringBeacons",
                                onSearchBeacons: "onBeaconsInRange",
                                consumeAndShareCard: "consumedShareCard",
                                openAddress: "editAddress"
                            },
                            g = function() {
                                var e = {};
                                for (var t in m) e[m[t]] = t;
                                return e
                            } (),
                            v = e.document,
                            y = v.title,
                            w = navigator.userAgent.toLowerCase(),
                            b = navigator.platform.toLowerCase(),
                            k = !(!b.match("mac") && !b.match("win")),
                            C = -1 != w.indexOf("wxdebugger"),
                            x = -1 != w.indexOf("micromessenger"),
                            _ = -1 != w.indexOf("android"),
                            E = -1 != w.indexOf("iphone") || -1 != w.indexOf("ipad"),
                            A = function() {
                                var e = w.match(/micromessenger\/(\d+\.\d+\.\d+)/) || w.match(/micromessenger\/(\d+\.\d+)/);
                                return e ? e[1] : ""
                            } (),
                            j = {
                                initStartTime: p(),
                                initEndTime: 0,
                                preVerifyStartTime: 0,
                                preVerifyEndTime: 0
                            },
                            S = {
                                version: 1,
                                appId: "",
                                initTime: 0,
                                preVerifyTime: 0,
                                networkType: "",
                                isPreVerifyOk: 1,
                                systemType: E ? 1 : _ ? 2 : -1,
                                clientVersion: A,
                                url: encodeURIComponent(location.href)
                            },
                            T = {},
                            P = {
                                _completes: []
                            },
                            B = {
                                state: 0,
                                data: {}
                            };
                        f(function() {
                            j.initEndTime = p()
                        });
                        var U = !1,
                            D = [],
                            I = {
                                config: function(e) {
                                    T = e,
                                        l("config", e);
                                    var t = !1 !== T.check;
                                    f(function() {
                                        if (t) n(m.config, {
                                                verifyJsApiList: u(T.jsApiList)
                                            },
                                            function() {
                                                P._complete = function(e) {
                                                    j.preVerifyEndTime = p(),
                                                        B.state = 1,
                                                        B.data = e
                                                },
                                                    P.success = function(e) {
                                                        S.isPreVerifyOk = 0
                                                    },
                                                    P.fail = function(e) {
                                                        P._fail ? P._fail(e) : B.state = -1
                                                    };
                                                var e = P._completes;
                                                return e.push(function() {
                                                    d()
                                                }),
                                                    P.complete = function(t) {
                                                        for (var n = 0,
                                                                 o = e.length; o > n; ++n) e[n]();
                                                        P._completes = []
                                                    },
                                                    P
                                            } ()),
                                            j.preVerifyStartTime = p();
                                        else {
                                            B.state = 1;
                                            for (var e = P._completes,
                                                     o = 0,
                                                     i = e.length; i > o; ++o) e[o]();
                                            P._completes = []
                                        }
                                    }),
                                    T.beta && h()
                                },
                                ready: function(e) {
                                    0 != B.state ? e() : (P._completes.push(e), !x && T.debug && e())
                                },
                                error: function(e) {
                                    "6.0.2" > A || ( - 1 == B.state ? e(B.data) : P._fail = e)
                                },
                                checkJsApi: function(e) {
                                    var t = function(e) {
                                        var t = e.checkResult;
                                        for (var n in t) {
                                            var o = g[n];
                                            o && (t[o] = t[n], delete t[n])
                                        }
                                        return e
                                    };
                                    n("checkJsApi", {
                                            jsApiList: u(e.jsApiList)
                                        },
                                        (e._complete = function(e) {
                                            if (_) {
                                                var n = e.checkResult;
                                                n && (e.checkResult = JSON.parse(n))
                                            }
                                            e = t(e)
                                        },
                                            e))
                                },
                                onMenuShareTimeline: function(e) {
                                    o(m.onMenuShareTimeline, {
                                            complete: function() {
                                                n("shareTimeline", {
                                                        title: e.title || y,
                                                        desc: e.title || y,
                                                        img_url: e.imgUrl || "",
                                                        link: e.link || location.href,
                                                        type: e.type || "link",
                                                        data_url: e.dataUrl || ""
                                                    },
                                                    e)
                                            }
                                        },
                                        e)
                                },
                                onMenuShareAppMessage: function(e) {
                                    o(m.onMenuShareAppMessage, {
                                            complete: function() {
                                                n("sendAppMessage", {
                                                        title: e.title || y,
                                                        desc: e.desc || "",
                                                        link: e.link || location.href,
                                                        img_url: e.imgUrl || "",
                                                        type: e.type || "link",
                                                        data_url: e.dataUrl || ""
                                                    },
                                                    e)
                                            }
                                        },
                                        e)
                                },
                                onMenuShareQQ: function(e) {
                                    o(m.onMenuShareQQ, {
                                            complete: function() {
                                                n("shareQQ", {
                                                        title: e.title || y,
                                                        desc: e.desc || "",
                                                        img_url: e.imgUrl || "",
                                                        link: e.link || location.href
                                                    },
                                                    e)
                                            }
                                        },
                                        e)
                                },
                                onMenuShareWeibo: function(e) {
                                    o(m.onMenuShareWeibo, {
                                            complete: function() {
                                                n("shareWeiboApp", {
                                                        title: e.title || y,
                                                        desc: e.desc || "",
                                                        img_url: e.imgUrl || "",
                                                        link: e.link || location.href
                                                    },
                                                    e)
                                            }
                                        },
                                        e)
                                },
                                onMenuShareQZone: function(e) {
                                    o(m.onMenuShareQZone, {
                                            complete: function() {
                                                n("shareQZone", {
                                                        title: e.title || y,
                                                        desc: e.desc || "",
                                                        img_url: e.imgUrl || "",
                                                        link: e.link || location.href
                                                    },
                                                    e)
                                            }
                                        },
                                        e)
                                },
                                startRecord: function(e) {
                                    n("startRecord", {},
                                        e)
                                },
                                stopRecord: function(e) {
                                    n("stopRecord", {},
                                        e)
                                },
                                onVoiceRecordEnd: function(e) {
                                    o("onVoiceRecordEnd", e)
                                },
                                playVoice: function(e) {
                                    n("playVoice", {
                                            localId: e.localId
                                        },
                                        e)
                                },
                                pauseVoice: function(e) {
                                    n("pauseVoice", {
                                            localId: e.localId
                                        },
                                        e)
                                },
                                stopVoice: function(e) {
                                    n("stopVoice", {
                                            localId: e.localId
                                        },
                                        e)
                                },
                                onVoicePlayEnd: function(e) {
                                    o("onVoicePlayEnd", e)
                                },
                                uploadVoice: function(e) {
                                    n("uploadVoice", {
                                            localId: e.localId,
                                            isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                                        },
                                        e)
                                },
                                downloadVoice: function(e) {
                                    n("downloadVoice", {
                                            serverId: e.serverId,
                                            isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                                        },
                                        e)
                                },
                                translateVoice: function(e) {
                                    n("translateVoice", {
                                            localId: e.localId,
                                            isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                                        },
                                        e)
                                },
                                chooseImage: function(e) {
                                    n("chooseImage", {
                                            scene: "1|2",
                                            count: e.count || 9,
                                            sizeType: e.sizeType || ["original", "compressed"],
                                            sourceType: e.sourceType || ["album", "camera"]
                                        },
                                        (e._complete = function(e) {
                                            if (_) {
                                                var t = e.localIds;
                                                t && (e.localIds = JSON.parse(t))
                                            }
                                        },
                                            e))
                                },
                                getLocation: function(e) {},
                                previewImage: function(e) {
                                    n(m.previewImage, {
                                            current: e.current,
                                            urls: e.urls
                                        },
                                        e)
                                },
                                uploadImage: function(e) {
                                    n("uploadImage", {
                                            localId: e.localId,
                                            isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                                        },
                                        e)
                                },
                                downloadImage: function(e) {
                                    n("downloadImage", {
                                            serverId: e.serverId,
                                            isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                                        },
                                        e)
                                },
                                getLocalImgData: function(e) { ! 1 === U ? (U = !0, n("getLocalImgData", {
                                        localId: e.localId
                                    },
                                    (e._complete = function(e) {
                                        if (U = !1, D.length > 0) {
                                            var t = D.shift();
                                            wx.getLocalImgData(t)
                                        }
                                    },
                                        e))) : D.push(e)
                                },
                                getNetworkType: function(e) {
                                    var t = function(e) {
                                        var t = e.errMsg;
                                        e.errMsg = "getNetworkType:ok";
                                        var n = e.subtype;
                                        if (delete e.subtype, n) e.networkType = n;
                                        else {
                                            var o = t.indexOf(":"),
                                                i = t.substring(o + 1);
                                            switch (i) {
                                                case "wifi":
                                                case "edge":
                                                case "wwan":
                                                    e.networkType = i;
                                                    break;
                                                default:
                                                    e.errMsg = "getNetworkType:fail"
                                            }
                                        }
                                        return e
                                    };
                                    n("getNetworkType", {},
                                        (e._complete = function(e) {
                                            e = t(e)
                                        },
                                            e))
                                },
                                openLocation: function(e) {
                                    n("openLocation", {
                                            latitude: e.latitude,
                                            longitude: e.longitude,
                                            name: e.name || "",
                                            address: e.address || "",
                                            scale: e.scale || 28,
                                            infoUrl: e.infoUrl || ""
                                        },
                                        e)
                                },
                                getLocation: function(e) {
                                    e = e || {},
                                        n(m.getLocation, {
                                                type: e.type || "wgs84"
                                            },
                                            (e._complete = function(e) {
                                                delete e.type
                                            },
                                                e))
                                },
                                hideOptionMenu: function(e) {
                                    n("hideOptionMenu", {},
                                        e)
                                },
                                showOptionMenu: function(e) {
                                    n("showOptionMenu", {},
                                        e)
                                },
                                closeWindow: function(e) {
                                    n("closeWindow", {},
                                        e = e || {})
                                },
                                hideMenuItems: function(e) {
                                    n("hideMenuItems", {
                                            menuList: e.menuList
                                        },
                                        e)
                                },
                                showMenuItems: function(e) {
                                    n("showMenuItems", {
                                            menuList: e.menuList
                                        },
                                        e)
                                },
                                hideAllNonBaseMenuItem: function(e) {
                                    n("hideAllNonBaseMenuItem", {},
                                        e)
                                },
                                showAllNonBaseMenuItem: function(e) {
                                    n("showAllNonBaseMenuItem", {},
                                        e)
                                },
                                scanQRCode: function(e) {
                                    n("scanQRCode", {
                                            needResult: (e = e || {}).needResult || 0,
                                            scanType: e.scanType || ["qrCode", "barCode"]
                                        },
                                        (e._complete = function(e) {
                                            if (E) {
                                                var t = e.resultStr;
                                                if (t) {
                                                    var n = JSON.parse(t);
                                                    e.resultStr = n && n.scan_code && n.scan_code.scan_result
                                                }
                                            }
                                        },
                                            e))
                                },
                                openAddress: function(e) {
                                    n(m.openAddress, {},
                                        (e._complete = function(e) {
                                            e = a(e)
                                        },
                                            e))
                                },
                                openProductSpecificView: function(e) {
                                    n(m.openProductSpecificView, {
                                            pid: e.productId,
                                            view_type: e.viewType || 0,
                                            ext_info: e.extInfo
                                        },
                                        e)
                                },
                                addCard: function(e) {
                                    for (var t = e.cardList,
                                             o = [], i = 0, r = t.length; r > i; ++i) {
                                        var a = t[i],
                                            c = {
                                                card_id: a.cardId,
                                                card_ext: a.cardExt
                                            };
                                        o.push(c)
                                    }
                                    n(m.addCard, {
                                            card_list: o
                                        },
                                        (e._complete = function(e) {
                                            var t = e.card_list;
                                            if (t) {
                                                for (var n = 0,
                                                         o = (t = JSON.parse(t)).length; o > n; ++n) {
                                                    var i = t[n];
                                                    i.cardId = i.card_id,
                                                        i.cardExt = i.card_ext,
                                                        i.isSuccess = !!i.is_succ,
                                                        delete i.card_id,
                                                        delete i.card_ext,
                                                        delete i.is_succ
                                                }
                                                e.cardList = t,
                                                    delete e.card_list
                                            }
                                        },
                                            e))
                                },
                                chooseCard: function(e) {
                                    n("chooseCard", {
                                            app_id: T.appId,
                                            location_id: e.shopId || "",
                                            sign_type: e.signType || "SHA1",
                                            card_id: e.cardId || "",
                                            card_type: e.cardType || "",
                                            card_sign: e.cardSign,
                                            time_stamp: e.timestamp + "",
                                            nonce_str: e.nonceStr
                                        },
                                        (e._complete = function(e) {
                                            e.cardList = e.choose_card_info,
                                                delete e.choose_card_info
                                        },
                                            e))
                                },
                                openCard: function(e) {
                                    for (var t = e.cardList,
                                             o = [], i = 0, r = t.length; r > i; ++i) {
                                        var a = t[i],
                                            c = {
                                                card_id: a.cardId,
                                                code: a.code
                                            };
                                        o.push(c)
                                    }
                                    n(m.openCard, {
                                            card_list: o
                                        },
                                        e)
                                },
                                consumeAndShareCard: function(e) {
                                    n(m.consumeAndShareCard, {
                                            consumedCardId: e.cardId,
                                            consumedCode: e.code
                                        },
                                        e)
                                },
                                chooseWXPay: function(e) {
                                    n(m.chooseWXPay, r(e), e)
                                },
                                openEnterpriseRedPacket: function(e) {
                                    n(m.openEnterpriseRedPacket, r(e), e)
                                },
                                startSearchBeacons: function(e) {
                                    n(m.startSearchBeacons, {
                                            ticket: e.ticket
                                        },
                                        e)
                                },
                                stopSearchBeacons: function(e) {
                                    n(m.stopSearchBeacons, {},
                                        e)
                                },
                                onSearchBeacons: function(e) {
                                    o(m.onSearchBeacons, e)
                                },
                                openEnterpriseChat: function(e) {
                                    n("openEnterpriseChat", {
                                            useridlist: e.userIds,
                                            chatname: e.groupName
                                        },
                                        e)
                                }
                            },
                            F = 1,
                            M = {};
                        return v.addEventListener("error",
                            function(e) {
                                if (!_) {
                                    var t = e.target,
                                        n = t.tagName,
                                        o = t.src;
                                    if (("IMG" == n || "VIDEO" == n || "AUDIO" == n || "SOURCE" == n) && -1 != o.indexOf("wxlocalresource://")) {
                                        e.preventDefault(),
                                            e.stopPropagation();
                                        var i = t["wx-id"];
                                        if (i || (i = F++, t["wx-id"] = i), M[i]) return;
                                        M[i] = !0,
                                            wx.getLocalImgData({
                                                localId: o,
                                                success: function(e) {
                                                    t.src = e.localData
                                                }
                                            })
                                    }
                                }
                            },
                            !0),
                            v.addEventListener("load",
                                function(e) {
                                    if (!_) {
                                        var t = e.target,
                                            n = t.tagName;
                                        if (t.src, "IMG" == n || "VIDEO" == n || "AUDIO" == n || "SOURCE" == n) {
                                            var o = t["wx-id"];
                                            o && (M[o] = !1)
                                        }
                                    }
                                },
                                !0),
                        t && (e.wx = e.jWeixin = I),
                            I
                    }
                })
        },
        262 : function(e, t, n) {
            "use strict";
            function o() {
                window.location.reload()
            }
            n(2),
                window.onload = function() {
                    var e = n(263),
                        t = new Vue(e).$mount("#app");
                    window.app = t,
                        window.eduProduct = window.eduProduct || {},
                        window.eduProduct.gaCategory = "作品展示页",
                        window.globalUtil.__trackPage(),
                        "onorientationchange" in window ? window.onorientationchange = o: window.onresize = o
                }
        },
        263 : function(e, t, n) {
            var o, i;
            n(264),
                o = n(266);
            var r = n(281);
            i = o = o || {},
            "object" != typeof o.
                default && "function" != typeof o.
                default || (i = o = o.
                default),
            "function" == typeof i && (i = i.options),
                i.render = r.render,
                i.staticRenderFns = r.staticRenderFns,
                e.exports = o
        },
        264 : function(e, t, n) {
            var o = n(265);
            "string" == typeof o && (o = [[e.id, o, ""]]);
            n(11)(o, {});
            o.locals && (e.exports = o.locals)
        },
        265 : function(e, t, n) { (e.exports = n(10)()).push([e.id, "body{background:#f4f4f4}.main .area{background-color:#f4f4f4;padding-bottom:.266667rem}.main.playing .area{padding-bottom:0}.main.playing.notqqorweixin{padding-top:0}.mask{position:absolute;left:0;top:0;width:100%;height:7.506667rem}.mask-play{background:rgba(0,0,0,.4) url(/images/scratch_btn/A13A9DDA276F1066FA7D17FCC960A4CB.png) no-repeat center}.mask-pause{background:rgba(0,0,0,.4) url(/images/scratch_btn/F7686238B11B9624D212571DD37A7F76.png) no-repeat center}.fade-enter-active,.fade-leave-active{-webkit-transition:all .8s;transition:all .8s}.fade-enter,.fade-leave-to{opacity:0;-webkit-transform:translateY(6.466667rem);transform:translateY(6.466667rem)}.loading-box{width:100%;height:8.346667rem}.loading-box img{width:100%;height:100%;-webkit-filter:brightness(60%);filter:brightness(60%)}.loading{width:6.4rem;height:2.48rem;left:1.8rem;top:4rem}.loading .info{text-align:center;font-size:.373333rem;color:#fff;line-height:.493333rem}.loading .highlight{color:#34c9db;margin-right:.4rem}.loading-gif{position:absolute;left:50%;top:0;width:.8rem;height:.8rem;margin-left:-.4rem;background:url(../images/scratch_btn/7D6CF69DB7618295D9CE9AD18FEF6E10.gif?imageView&quality=100) no-repeat center/contain}.percent-box{background:#eee;border-radius:1.333333rem;position:relative;height:.266667rem;overflow:hidden;width:6.4rem;margin-bottom:.266667rem;margin-top:1.466667rem}.percent-box .percent-solid{background:#34c9db;border-radius:1.333333rem;position:absolute;left:0;top:0;right:0;bottom:0}.preview-tip{font-size:.346667rem;color:#9a9a9a;line-height:.466667rem;text-align:center;padding:.133333rem 0 .4rem}", ""])
        },
        266 : function(e, t, n) {
            "use strict";
            function o(e) {
                return e && e.__esModule ? e: {
                    default:
                    e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                n(19);
            var i = o(n(13)),
                r = o(n(267)),
                a = o(n(276)),
                c = o(n(132)),
                s = n(18),
                u = window.location.host;
            t.
                default = {
                components: {
                    NavBar: i.
                        default,
                    ProjectDetail: r.
                        default,
                    ModePanel: a.
                        default
                },
                data: function() {
                    return {
                        project: null,
                        canvas: null,
                        playing: !1,
                        isPause: !1,
                        scrolling: !1,
                        scrolled: 0,
                        loaded: !1,
                        isDetail: !1,
                        isLogin: !1,
                        audioInit: !1,
                        QQorWeiXin: !1,
                        isPreview: !1,
                        loadedPercent: 0,
                        loadedAssets: 0,
                        totalAssets: 0,
                        startY: 0
                    }
                },
                methods: {
                    getProjectInfo: function() {
                        this.project = window.pageData || {},
                        this.project.mode || (this.project.mode = 0),
                            this.isPreview = 1 == this.project.state,
                            //this.initWxShare(),
                            this.checkNetWork(),
                            this.loadProject()
                    },
                    handleThumbUp: function() {
                        this.isLogin ? (this.project.thumbUped = !this.project.thumbUped, this.project.thumbUpCount += this.project.thumbUped ? 1 : -1, (0, s.request)(this.project.thumbUped ? "h5/thumb/up.do": "h5/thumb/down.do", {
                                id: this.project.id,
                                channel: 1
                            },
                            function(e) {},
                            function(e) {})) : window.location.href="/login?returnUrl=" + encodeURIComponent(location.href)
                    },
                    handleCollect: function() {
                        var e = this;
                        this.isLogin ? (0, s.postRequest)({
                                url: this.project.collected ? "/h5/collect/down.do": "/h5/collect/up.do",
                                body: {
                                    id: this.project.id,
                                    channel: 1
                                },
                                emulateJSON: !0,
                                params: {},
                                method: "post",
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                }
                            },
                            function(t) {
                                t && t.result && (e.project.collected = !e.project.collected, e.project.collectedCount += e.project.collected ? 1 : -1)
                            },
                            function(e) {}) : window.location.href = "//" + u + "/login?returnUrl=" + encodeURIComponent(location.href)
                    },
                    initPlayer: function() {
                        var e = this;
                        P.player = function() {
                            function t(e) {
                                a && (a.start(), s.className = "pause", a.stopAll(), a.triggerGreenFlag(), a.focus(), a.stopped = !1, e && e.preventDefault())
                            }
                            function n(e) {
                                a && (a.isRunning ? (a.pause(), s.className = "play") : (a.start(), s.className = "pause"), a.focus(), e && e.preventDefault())
                            }
                            function o(e) {
                                a && (a.start(), s.className = "pause", a.stopAll(), a.stopped = !0, a.focus(), e && e.preventDefault())
                            }
                            function i(e) {
                                e && e.preventDefault(),
                                a && a.setZoom(window.innerHeight / 360)
                            }
                            function r(e) {
                                c && 27 === e.keyCode && i(e)
                            }
                            var a, c = !1,
                                s = (document.querySelector(".controls"), document.querySelector(".flag"), document.querySelector(".pause")),
                                u = (document.querySelector(".stop"), document.querySelector(".full-screen"));
                            window.addEventListener("resize",
                                function() {});
                            return {
                                load: function(t, n, o, i) {
                                    a && a.destroy(),
                                        s.className = "pause",
                                        P.IO.updateProgress = function() {
                                            e.loadedAssets = IO.loadedAssets,
                                                e.totalAssets = IO.totalAssets,
                                                console.log(e.loadedAssets),
                                                e.loadedPercent = (e.loadedAssets / e.totalAssets * 100).toFixed(0)
                                        };
                                    var c = P.IO.loadScratchr2Project(t, n);
                                    c.onload = function(e) {
                                        var t = a ? a.zoom: 1; (a = e).stopped = !0,
                                            a.start(),
                                            a.setZoom(t),
                                            a.root.addEventListener("keydown", r),
                                            o.insertBefore(a.root, o.childNodes[0]),
                                            a.focus(),
                                        i && (i(a), i = null)
                                    },
                                        c.onerror = function(e) {
                                            console.error(e.stack)
                                        },
                                        c.onprogress = function() {}
                                },
                                fullScreen: function() {
                                    u.click()
                                },
                                start: function() {
                                    t()
                                },
                                stop: function() {
                                    o()
                                },
                                pause: function() {
                                    n()
                                }
                            }
                        } ()
                    },
                    initAudio: function() {
                        if (!this.audioInit) {
                            var e = P.audioContext,
                                t = e.createOscillator(),
                                n = e.createGain();
                            t.connect(n),
                                n.connect(e.destination),
                                n.gain.setValueAtTime(0, e.currentTime),
                                t.start(),
                                this.audioInit = !0
                        }
                    },
                    updateOrientation: function() {
                        var e = this.stage;
                        e && (0 == window.orientation ? (e.setZoom(window.innerWidth / 480), this.playing && $("body").on("touchmove",
                            function(e) {
                                e.preventDefault()
                            },
                            !1)) : (e.setZoom(window.innerWidth / 480), this.playing && $("body").off("touchmove")), document.querySelector(".controls").style.width = this.canvas.style.width)
                    },
                    loadProject: function() {
                        setTimeout(function() {
                            this.initPlayer();
                            var e = this,
                                t = document.querySelector(".player"),
                                n = window.location.port;
                            window.location.origin || (window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port: ""));
                            var o = n ? window.location.origin: "";
                            P.IO.config("", o + "/scratch/asset/", o + "/scratch/soundbank/"),
                                P.player.load(this.project.projectUrl, this.project.isSplit, t,
                                    function(t) {
                                        t.setZoom(window.innerWidth / 480),
                                            e.canvas = t.canvas,
                                            e.stage = t,
                                            document.querySelector(".controls").style.display = "block",
                                            e.loaded = !0,
                                            $("body").animate({
                                                    scrollTop: 0
                                                },
                                                10)
                                    })
                        }.bind(this), 500)
                    },
                    start: function() {
                        if (window.globalUtil._$trackEvent(null, "操作点击", "开始"), this.playing) return P.player.stop(),
                            P.player.start(),
                            void(this.isPause = !1);
                        this.playing = !0,
                            this.isPause = !1,
                            P.player.start()
                    },
                    stop: function() {
                        this.playing = !1,
                            this.isPause = !1,
                            P.player.stop()
                    },
                    pause: function() {
                        window.globalUtil._$trackEvent(null, "操作点击", "暂停"),
                        this.stage.stopped || (this.isPause = !this.isPause, P.player.pause())
                    },
                    flagClicked: function() {
                        window.globalUtil._$trackEvent(null, "操作点击", "点击绿旗"),
                            this.isPause ? this.pause() : this.start()
                    },
                    back: function() {
                        $("body").off("touchmove"),
                            P.player.stop(),
                            this.playing = !1,
                            this.isPause = !1,
                            window.globalUtil._$trackEvent(null, "操作点击", "结束")
                    },
                    touchStart: function(e) {
                        this.initAudio();
                        var t = e.targetTouches;
                        1 == t.length && (this.startY = t[0].pageY)
                    },
                    touchMove: function(e) {
                        if (!this.scrolling) {
                            var t = e.targetTouches;
                            if (1 == t.length) {
                                var n = t[0].pageY,
                                    o = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop,
                                    i = document.querySelector(".project-detail").offsetTop - document.getElementById("player-area").offsetTop;
                                n + 5 < this.startY ? this.isDetail || (e.preventDefault(), this.scrolling = !0, $("body").animate({
                                            scrollTop: i
                                        },
                                        800, "swing",
                                        function() {
                                            this.scrolling = !1,
                                                this.isDetail = !0
                                        }.bind(this))) : n - 5 > this.startY && this.isDetail && o <= i && (e.preventDefault(), this.scrolling = !0, $("body").animate({
                                            scrollTop: 0
                                        },
                                        800, "swing",
                                        function() {
                                            this.scrolling = !1,
                                                this.isDetail = !1
                                        }.bind(this)), window.scrollTo(0, 0))
                            }
                        }
                    },
                    touchEnd: function(e) {},
                    onScroll: function() {
                        if (!this.scrolling) {
                            var e = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop,
                                t = document.querySelector(".project-detail").offsetTop - document.getElementById("player-area").offsetTop,
                                n = e > this.scrolled;
                            n && e > 0 && e < t && (this.scrolling = !0, $("body").animate({
                                    scrollTop: t
                                },
                                800, "swing",
                                function() {
                                    this.scrolling = !1,
                                        this.scrolled = t
                                }.bind(this)), window.scrollTo(0, t)),
                            !n && e > 0 && e < t && (this.scrolling = !0, $("body").animate({
                                    scrollTop: 0
                                },
                                800, "swing",
                                function() {
                                    this.scrolling = !1,
                                        this.scrolled = 0
                                }.bind(this)), window.scrollTo(0, 0)),
                                this.scrolled = e
                        }
                    },
                    playingChanged: function() {
                        this.playing ? (document.removeEventListener("touchstart", this.touchStart), document.removeEventListener("touchend", this.touchEnd), document.removeEventListener("touchmove", this.touchMove, !1), document.documentElement.style.backgroundColor = "#323238") : (document.addEventListener("touchstart", this.touchStart), document.addEventListener("touchend", this.touchEnd), document.addEventListener("touchmove", this.touchMove, !1), document.documentElement.style.backgroundColor = "#f4f4f4")
                    },
                    initWxShare: function() {
                        var e = this; (0, s.request)("passport/wx/getShareSign.do", {
                                url: window.location.href.split("#")[0]
                            },
                            function(t) {
                                t && (c.
                                default.config({
                                    debug:
                                        !1,
                                    appId: "wx9920353d8725a305",
                                    timestamp: +t.timestamp,
                                    nonceStr: t.nonceStr,
                                    signature: t.signature,
                                    jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareQZone", "chooseImage", "previewImage", "hideOptionMenu", "showOptionMenu", "hideMenuItems", "closeWindow", "scanQRCode"]
                                }), c.
                                default.ready(function() {
                                    var e = this.isPreview ? "//steam.nosdn.127.net/91e5f591-094e-4ff4-a6aa-cbda5602295a1499237854817.png": this.project.imgUrl; - 1 == e.indexOf("http:") && -1 == e.indexOf("https:") && (e = window.location.protocol + e);
                                    var t = this.isPreview ? "未发布作品 - " + this.project.authorName: this.project.name + " - " + this.project.authorName,
                                        n = this.project.desc || "ScratchBBS - Scratch中文社区";
                                    c.
                                    default.onMenuShareTimeline({
                                        title:
                                        t,
                                        link: window.location.href.split("#")[0],
                                        desc: n,
                                        imgUrl: e,
                                        success: function() {},
                                        cancel: function() {}
                                    }),
                                        c.
                                        default.onMenuShareAppMessage({
                                            title:
                                            t,
                                            link: window.location.href.split("#")[0],
                                            desc: n,
                                            imgUrl: e,
                                            type: "link",
                                            dataUrl: "",
                                            success: function() {},
                                            cancel: function() {}
                                        }),
                                    this.isPreview && c.
                                    default.hideMenuItems({
                                        menuList:
                                            ["menuItem:share:appMessage", "menuItem:share:timeline", "menuItem:share:qq", "menuItem:share:weiboApp", "menuItem:favorite", "menuItem:share:facebook", "menuItem:share:QZone", "menuItem:copyUrl", "menuItem:share:email"]
                                    })
                                }.bind(e)))
                            },
                            function(e) {})
                    },
                    checkNetWork: function() {
                        var e = (0, s.getNetWorkState)(),
                            t = Math.floor(this.project.projectSize / 1048576);
                        e && t >= 5 && !/wifi/i.test(e) && (1 == window.confirm("在移动网络环境下打开本作品需耗费流量" + t + "MB，是否确定打开？") || (window.location.href = "/h5/index.htm"))
                    }
                },
                watch: {
                    playing: "playingChanged"
                },
                created: function() {
                    window.webUser && window.webUser.uid && (this.isLogin = !0),
                        this.getProjectInfo()
                },
                mounted: function() {
                    window.onorientationchange = this.updateOrientation,
                        document.addEventListener("touchstart", this.touchStart),
                        document.addEventListener("touchend", this.touchEnd),
                        document.addEventListener("touchmove", this.touchMove, !1);
                    var e = navigator.userAgent.toLowerCase();
                    "micromessenger" != e.match(/MicroMessenger/i) && "mobile mqqbrowser" != e.match(/Mobile MQQBrowser/i) || (this.QQorWeiXin = !0)
                }
            }
        },
        267 : function(e, t, n) {
            var o, i;
            n(268),
                o = n(270);
            var r = n(275);
            i = o = o || {},
            "object" != typeof o.
                default && "function" != typeof o.
                default || (i = o = o.
                default),
            "function" == typeof i && (i = i.options),
                i.render = r.render,
                i.staticRenderFns = r.staticRenderFns,
                e.exports = o
        },
        268 : function(e, t, n) {
            var o = n(269);
            "string" == typeof o && (o = [[e.id, o, ""]]);
            n(11)(o, {});
            o.locals && (e.exports = o.locals)
        },
        269 : function(e, t, n) { (e.exports = n(10)()).push([e.id, ".project-detail{padding:.613333rem .32rem 1.68rem;background-color:#fff;min-height:17.786667rem;box-sizing:border-box;position:absolute;width:100%}.project-detail-top{letter-spacing:0}.project-detail-top .title{width:7.573333rem;font-size:.426667rem;color:#37474f;line-height:.56rem;margin-bottom:.186667rem;word-break:break-all}.project-detail-top .ux-scratch-icon-star_fill{color:#f6c554}.project-detail-top .ux-scratch-icon-thumbup-fill{color:#ff7474}.project-detail-top .author{font-size:.32rem;color:#78909c;line-height:.413333rem;word-break:break-all}.project-detail-top .project-operator{margin-top:.4rem;height:.56rem;line-height:.56rem}.project-detail-top .view-count{font-size:.32rem;color:#78909c}.project-detail-top .collect,.project-detail-top .thumb{display:none;margin-right:.48rem;margin-top:-.1rem}.project-detail-top .collect-svg,.project-detail-top .thumb-svg{display:none !important;font-size:.613333rem;text-align:center;color:#90a4ae;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.project-detail-top .collect-svg i,.project-detail-top .thumb-svg i{display:none none !important;padding-right:.133333rem}.project-detail-top .collect-count,.project-detail-top .thumb-count{font-size:.32rem;color:#90a4ae;line-height:.413333rem;text-align:center}.project-detail-top .thumb{margin-right:.24rem}.project-detail-top .thumb i{font-size:.64rem}.project-detail-top .collect{margin-right:.666667rem}.line{padding:0 .08rem;border-bottom:1px solid #d8e1e2;margin:.466667rem 0 .4rem}.hairlines .line{border-bottom:.5px solid #d8e1e2}.project-detail-bottom .tit{margin-bottom:.4rem;font-size:.426667rem;color:#37474f;line-height:.56rem}.project-detail-bottom .tit span{display:inline-block;height:.266667rem;margin:-.053333rem .186667rem 0;vertical-align:middle;border-right:.026667rem solid #90a4ae;border-radius:.653333rem}.project-detail-bottom .desc,.project-detail-bottom .head,.project-detail-bottom .instr{font-size:.346667rem;color:#78909c;line-height:.56rem;word-break:break-all}.project-detail-bottom .desc{margin-bottom:.266667rem}.project-tag-icon{padding-right:.066667rem;float:left;position:relative;z-index:2}.project-tag-icon img{width:.48rem;height:.48rem;margin-right:.066667rem}", ""])
        },
        270 : function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function(e) {
                return e && e.__esModule ? e: {
                    default:
                    e
                }
            } (n(271));
            n(19),
                n(82);
            n(18);
            t.
                default = (0, o.
                default)({
                    props:
                        ["project", "isPreview"],
                    data: function() {
                        return {}
                    },
                    methods: {
                        _$goToUrl: function(e, t) {
                            window.globalUtil._$goToUrl(e, t)
                        },
                        thumbUp: function() {
                            window.globalUtil._$trackEvent(null, this.project.thumbUped ? "取消点赞": "点赞", this.project.name + "-" + this.project.id),
                                this.$emit("thumbUp")
                        },
                        collect: function() {
                            this.$emit("collect"),
                                window.globalUtil._$trackEvent(null, this.project.collected ? "取消收藏": "收藏", this.project.name + "-" + this.project.id)
                        },
                        goUserPage: function() {
                            this._$goToUrl("/h5/u/" + this.project.authorId + ".htm", {
                                _action: "作品点击",
                                _opt_label: this.project.name + "-" + this.project.id + "-" + this.project.authorName + "-" + this.project.authorId
                            })
                        },
                        formatTxt: function(e) {
                            return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/ /g, "&nbsp;").replace(/\n/g, "<br/>")
                        }
                    },
                    created: function() {},
                    watch: {},
                    computed: {
                        compiledInstr: function() {
                            return this.project.instruction = this.project.instruction || "作者还没有添加操作说明哦",
                                this.formatTxt(this.project.instruction)
                        },
                        compiledDesc: function() {
                            return this.project.desc = this.project.desc || "作者还没有添加作品介绍哦",
                                this.formatTxt(this.project.desc)
                        }
                    },
                    mounted: function() {}
                },
                "created",
                function() {})
        },
        271 : function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var o = function(e) {
                return e && e.__esModule ? e: {
                    default:
                    e
                }
            } (n(272));
            t.
                default = function(e, t, n) {
                return t in e ? (0, o.
                    default)(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                    e
            }
        },
        272 : function(e, t, n) {
            e.exports = {
                default:
                    n(273),
                __esModule: !0
            }
        },
        273 : function(e, t, n) {
            n(274);
            var o = n(5).Object;
            e.exports = function(e, t, n) {
                return o.defineProperty(e, t, n)
            }
        },
        274 : function(e, t, n) {
            var o = n(35);
            o(o.S + o.F * !n(44), "Object", {
                defineProperty: n(40).f
            })
        },
        275 : function(e, t) {
            e.exports = {
                render: function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                            staticClass: "project-detail"
                        },
                        [n("div", {
                                staticClass: "project-detail-top f-cb"
                            },
                            [n("div", [e.project.contestPrizeProjectDetailDTOS && e.project.contestPrizeProjectDetailDTOS.length ? n("span", {
                                    staticClass: "project-tag-icon"
                                },
                                e._l(e.project.contestPrizeProjectDetailDTOS,
                                    function(t, o) {
                                        return t.ico ? n("img", {
                                            attrs: {
                                                title: t.name,
                                                alt: t.name,
                                                src: t.ico
                                            }
                                        }) : e._e()
                                    })) : e._e(), e._v(" "), n("div", {
                                    staticClass: "title"
                                },
                                [e._v(e._s(e.project.name))]), e._v(" "), n("div", {
                                    staticClass: "author",
                                    on: {
                                        click: e.goUserPage
                                    }
                                },
                                [e._v(e._s(e.project.authorName))])]), e._v(" "), e.isPreview ? e._e() : n("div", {
                                    staticClass: "project-operator f-cb"
                                },
                                [n("div", {
                                        staticClass: "view-count f-fl"
                                    },
                                    [e._v("浏览 " + e._s(e._f("normalize")(e.project.viewCount)))]), e._v(" "), n("div", {
                                        staticClass: "thumb f-fr"
                                    },
                                    [n("div", {
                                            staticClass: "thumb-svg",
                                            on: {
                                                click: e.thumbUp
                                            }
                                        },
                                        [n("i", {
                                            class: {
                                                "ux-scratch-icon-thumbup": !e.project.thumbUped,
                                                "ux-scratch-icon-thumbup-fill thumbUped": e.project.thumbUped
                                            }
                                        }), e._v(" "), n("span", {
                                                staticClass: "thumb-count"
                                            },
                                            [e._v(e._s(e._f("normalize")(e.project.thumbUpCount)))])])]), e._v(" "), n("div", {
                                        staticClass: "collect f-fr"
                                    },
                                    [n("div", {
                                            staticClass: "collect-svg",
                                            on: {
                                                click: e.collect
                                            }
                                        },
                                        [n("i", {
                                            class: {
                                                "ux-scratch-icon-star": !e.project.collected,
                                                "ux-scratch-icon-star_fill": e.project.collected
                                            }
                                        }), e._v(" "), n("span", {
                                                staticClass: "collect-count"
                                            },
                                            [e._v(e._s(e.project.collected ? "已收藏": "收藏"))])])])])]), e._v(" "), n("div", {
                            staticClass: "line"
                        }), e._v(" "), n("div", {
                                staticClass: "project-detail-bottom"
                            },
                            [e._m(0), e._v(" "), n("div", {
                                    staticClass: "head"
                                },
                                [e._v("作品介绍：")]), e._v(" "), n("div", {
                                staticClass: "desc",
                                domProps: {
                                    innerHTML: e._s(e.compiledDesc)
                                }
                            })])])
                },
                staticRenderFns: [function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                            staticClass: "tit"
                        },
                        [e._v("作品介绍")])
                }]
            }
        },
        276 : function(e, t, n) {
            var o, i;
            n(277),
                o = n(279);
            var r = n(280);
            i = o = o || {},
            "object" != typeof o.
                default && "function" != typeof o.
                default || (i = o = o.
                default),
            "function" == typeof i && (i = i.options),
                i.render = r.render,
                i.staticRenderFns = r.staticRenderFns,
                e.exports = o
        },
        277 : function(e, t, n) {
            var o = n(278);
            "string" == typeof o && (o = [[e.id, o, ""]]);
            n(11)(o, {});
            o.locals && (e.exports = o.locals)
        },
        278 : function(e, t, n) { (e.exports = n(10)()).push([e.id, ".mode-panel{min-height:6.466667rem;background-color:#323238;position:absolute;width:100%}.mode-panel,.top-bar{box-sizing:border-box}.top-bar{height:1.066667rem;border-bottom:1px solid #37474f;padding:0 .4rem}.hairlines .top-bar{border-bottom:.5px solid #37474f}.top-bar .collect-svg,.top-bar .thumb-svg{display:none !important ;font-size:.56rem;color:#78909c;margin-top:.24rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.top-bar .collect-count,.top-bar .thumb-count{margin-left:.133333rem;vertical-align:text-top;font-size:.346667rem;color:#90a4ae}.top-bar .collect-svg{display:none !important;margin-right:.533333rem}.top-bar .arrow{margin-top:.373333rem;font-size:.293333rem;color:#79909c}.top-bar .preview{font-size:.346667rem;color:#90a4ae;line-height:.466667rem;margin-top:.32rem}.no-mode,.no-support-mode{font-size:.48rem;color:#79909c;line-height:.626667rem;text-align:center;margin-top:1.826667rem}.no-mode .tip,.no-support-mode .tip{opacity:.4;font-size:.346667rem;color:#90a4ae;line-height:.466667rem;margin-top:.266667rem}.panel-container{position:absolute;bottom:0;left:0;width:100%;min-height:5.333333rem}.panel-left{left:.4rem;top:.693333rem}.panel-left-4{left:.533333rem;top:.693333rem}.panel-right{right:.4rem;top:.693333rem}.key-4{width:4.293333rem;height:3.946667rem;position:absolute}.key-4 .key{width:1.573333rem;height:1.573333rem;position:absolute}.key-4 .key-a{background:url(/images/scratch_btn/FD6CD1F55E91DC3955FC92275F17339E.png?imageView&quality=100) no-repeat center/contain}.key-4 .key-a.active{background:url(/images/scratch_btn/1FF0295AE033F9B657064812CF8A8765.png?imageView&quality=100) no-repeat center/contain}.key-4 .key-s{background:url(/images/scratch_btn/948631893AC9D621882A8A2BAC3A793F.png?imageView&quality=100) no-repeat center/contain}.key-4 .key-s.active{background:url(/images/scratch_btn/2E73309BF350C0B875F093E72461BCFB.png?imageView&quality=100) no-repeat center/contain}.key-4 .key-d{background:url(/images/scratch_btn/1733F556DCED31C8F00480F289B7222C.png?imageView&quality=100) no-repeat center/contain}.key-4 .key-d.active{background:url(/images/scratch_btn/C8C06FAD9F3C0C2C3C1C5CB93A072830.png?imageView&quality=100) no-repeat center/contain}.key-4 .key-w{background:url(/images/scratch_btn/A07A95E60E6DD2DF54C6C2E96491443D.png?imageView&quality=100) no-repeat center/contain}.key-4 .key-w.active{background:url(/images/scratch_btn/C5EDC6E79BAAD8AD5B251B38F0BA64A4.png?imageView&quality=100) no-repeat center/contain}.key-4 .key-h{background:url(/images/scratch_btn/EEDF4ED204CC0A3F6334F5261350C2C5.png?imageView&quality=100) no-repeat center/contain}.key-4 .key-h.active{background:url(/images/scratch_btn/7F990FE0BB74522055AF32C972C87C75.png?imageView&quality=100) no-repeat center/contain}.key-4 .key-j{background:url(/images/scratch_btn/E3C32ED84DEC59FB43B21C2E67B214F8.png?imageView&quality=100) no-repeat center/contain}.key-4 .key-j.active{background:url(/images/scratch_btn/AC34249D6CEFD6A00D1D2D726CDDD7C2.png?imageView&quality=100) no-repeat center/contain}.key-4 .key-k{background:url(/images/scratch_btn/BBB770CC00E78763F53D3EABB487109E.png?imageView&quality=100) no-repeat center/contain}.key-4 .key-k.active{background:url(/images/scratch_btn/CF2CBD7ED008F3410131C24AA61CB083.png?imageView&quality=100) no-repeat center/contain}.key-4 .key-u{background:url(/images/scratch_btn/3FCFCA18AEAC9773587E55818065317D.png?imageView&quality=100) no-repeat center/contain}.key-4 .key-u.active{background:url(/images/scratch_btn/13B657C9CD9D7D99FE4E22CE2E385201.png?imageView&quality=100) no-repeat center/contain}.key-9{width:5.866667rem;height:4.4rem;position:absolute;left:2.066667rem;top:.106667rem}.key-9 .key{width:1.6rem;height:1.2rem;display:inline-block;margin-right:.426667rem;margin-top:.293333rem}.key-9 .key:nth-child(3n){margin-right:0}.key-9 .key-q{background:url(/images/scratch_btn/D6B7D63A7260618B959E120B21A9A46A.png?imageView&quality=100) no-repeat center/contain}.key-9 .key-q.active{background:url(/images/scratch_btn/6D38C31481B92AB06C6D907DC9B893AF.png?imageView&quality=100) no-repeat center/contain}.key-9 .key-w{background:url(/images/scratch_btn/E681CF5591245F61F72FBD22D5C0CFAE.png?imageView&quality=100) no-repeat center/contain}.key-9 .key-w.active{background:url(/images/scratch_btn/A0D89597458FE4E04C075B33C1B1806C.png?imageView&quality=100) no-repeat center/contain}.key-9 .key-e{background:url(/images/scratch_btn/B7D2A5BEF703BED566BFCF41B8C6D352.png?imageView&quality=100) no-repeat center/contain}.key-9 .key-e.active{background:url(/images/scratch_btn/8DF5AED16E6FF474FF9C8CDC6B1C9970.png?imageView&quality=100) no-repeat center/contain}.key-9 .key-a{background:url(/images/scratch_btn/9EC53E41AF5F4B535CDD36F67F59D16F.png?imageView&quality=100) no-repeat center/contain}.key-9 .key-a.active{background:url(/images/scratch_btn/97BFD269BC3F9EA9E528C54A1F568D40.png?imageView&quality=100) no-repeat center/contain}.key-9 .key-s{background:url(/images/scratch_btn/833A93F0A6AA97A3C71A2B78E03D264D.png?imageView&quality=100) no-repeat center/contain}.key-9 .key-s.active{background:url(/images/scratch_btn/32D65C24012855EA0565F7B442003E39.png?imageView&quality=100) no-repeat center/contain}.key-9 .key-d{background:url(/images/scratch_btn/ADA3D61B2E90D0D6CE15CC940935C433.png?imageView&quality=100) no-repeat center/contain}.key-9 .key-d.active{background:url(/images/scratch_btn/20280250A6B0DB7320FF986139E6A221.png?imageView&quality=100) no-repeat center/contain}.key-9 .key-z{background:url(/images/scratch_btn/C2477CB7FFD4E3107D5B70765EDCB90E.png?imageView&quality=100) no-repeat center/contain}.key-9 .key-z.active{background:url(/images/scratch_btn/3E98112D2863F47B431886C2B4093207.png?imageView&quality=100) no-repeat center/contain}.key-9 .key-x{background:url(/images/scratch_btn/35E034AB6A163786429148CB6CBFDB71.png?imageView&quality=100) no-repeat center/contain}.key-9 .key-x.active{background:url(/images/scratch_btn/D8793ABE3B2E1CAAC71398387195C037.png?imageView&quality=100) no-repeat center/contain}.key-9 .key-c{background:url(/images/scratch_btn/870D448F3929AAEFF8F2D2AE7AAEEA9C.png?imageView&quality=100) no-repeat center/contain}.key-9 .key-c.active{background:url(/images/scratch_btn/C45DFA9B89FBE9E5CEFF6D04DDF0EF70.png?imageView&quality=100) no-repeat center/contain}.left{left:0;top:1.173333rem}.arrow-left{background:url(/images/scratch_btn/138F62B6FB18F6BB887226E70E71B315.png?imageView&quality=100) no-repeat center/contain}.arrow-left.active{background:url(/images/scratch_btn/33644C3C6195E730E56EF38341E123E8.png?imageView&quality=100) no-repeat center/contain}.right{right:0;top:1.173333rem}.arrow-right{background:url(/images/scratch_btn/708E136773A11AAC073BC2221746AFA6.png?imageView&quality=100) no-repeat center/contain}.arrow-right.active{background:url(/images/scratch_btn/EC384496BAD06F46C9B2D3D9D568BC51.png?imageView&quality=100) no-repeat center/contain}.up{left:1.373333rem;top:0}.arrow-up{background:url(/images/scratch_btn/E86CC1576357F1DDC868AEFC1A1CD4E0.png?imageView&quality=100) no-repeat center/contain}.arrow-up.active{background:url(/images/scratch_btn/2DCE67DE4F3AC86BE7464E4CBADEBC91.png?imageView&quality=100) no-repeat center/contain}.down{left:1.373333rem;bottom:0}.arrow-down{background:url(/images/scratch_btn/096A81D7DCF4AD55FCB215E3D5779A5B.png?imageView&quality=100) no-repeat center/contain}.arrow-down.active{background:url(/images/scratch_btn/E79BCA5624248447E0E65B94F7EF7EBC.png?imageView&quality=100) no-repeat center/contain}.space{width:2.666667rem;height:2.666667rem;position:absolute;right:.533333rem;top:1.173333rem;background:url(/images/scratch_btn/8B8C702C59C47DBFFAB99B96F8948626.png?imageView&quality=100) no-repeat center/contain}.space.active{background:url(/images/scratch_btn/252CD3882B98E0A9C51ACEB9BEAC528C.png?imageView&quality=100) no-repeat center/contain}.lt{left:.666667rem}.lt,.rt{top:.333333rem}.rt{right:.2rem}.lb{left:.2rem}.lb,.rb{bottom:0}.rb{right:.666667rem}", ""])
        },
        279 : function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                n(19),
                n(82);
            n(18);
            t.
                default = {
                props: ["project", "canvas", "isPreview"],
                data: function() {
                    return {}
                },
                methods: {
                    thumbUp: function() {
                        window.globalUtil._$trackEvent(null, "操作点击", this.project.thumbUped ? "取消点赞": "点赞"),
                            this.$emit("thumbUp")
                    },
                    collect: function() {
                        window.globalUtil._$trackEvent(null, "操作点击", this.project.collected ? "取消收藏": "收藏"),
                            this.$emit("collect")
                    },
                    back: function() {
                        $("body").off("touchmove"),
                            this.$emit("back"),
                            window.globalUtil._$trackEvent(null, "操作点击", "收起面板")
                    },
                    initKeyBoardEvents: function() {
                        function e(e, t, o, i) {
                            $(e).on(t,
                                function(t) {
                                    "keydown" == o ? $(e).addClass("active") : $(e).removeClass("active"),
                                        $(n).simulate(o, {
                                            keyCode: i
                                        })
                                })
                        }
                        function t(t) {
                            var n = [{
                                selector: ".arrow-left",
                                code: o.LEFT
                            },
                                {
                                    selector: ".arrow-right",
                                    code: o.RIGHT
                                },
                                {
                                    selector: ".arrow-up",
                                    code: o.UP
                                },
                                {
                                    selector: ".arrow-down",
                                    code: o.DOWN
                                },
                                {
                                    selector: ".space",
                                    code: o.SPACE
                                },
                                {
                                    selector: ".key-q",
                                    code: o.Q
                                },
                                {
                                    selector: ".key-w",
                                    code: o.W
                                },
                                {
                                    selector: ".key-e",
                                    code: o.E
                                },
                                {
                                    selector: ".key-a",
                                    code: o.A
                                },
                                {
                                    selector: ".key-s",
                                    code: o.S
                                },
                                {
                                    selector: ".key-d",
                                    code: o.D
                                },
                                {
                                    selector: ".key-z",
                                    code: o.Z
                                },
                                {
                                    selector: ".key-x",
                                    code: o.X
                                },
                                {
                                    selector: ".key-c",
                                    code: o.C
                                },
                                {
                                    selector: ".key-h",
                                    code: o.H
                                },
                                {
                                    selector: ".key-j",
                                    code: o.J
                                },
                                {
                                    selector: ".key-k",
                                    code: o.K
                                },
                                {
                                    selector: ".key-u",
                                    code: o.U
                                }];
                            $("body").on("touchmove",
                                function(e) {
                                    e.preventDefault()
                                },
                                !1);
                            var i = "mouse" == t ? "mousedown": "touchstart",
                                r = "mouse" == t ? "mouseup": "touchend";
                            n.forEach(function(t) {
                                e(t.selector, i, "keydown", t.code),
                                    e(t.selector, r, "keyup", t.code)
                            })
                        }
                        var n = this.canvas,
                            o = jQuery.simulate.keyCode;
                        o.Q = 81,
                            o.W = 87,
                            o.E = 69,
                            o.A = 65,
                            o.S = 83,
                            o.D = 68,
                            o.Z = 90,
                            o.X = 88,
                            o.C = 67,
                            o.H = 72,
                            o.I = 73,
                            o.J = 74,
                            o.K = 75,
                            o.U = 85,
                            t("ontouchstart" in document ? "touch": "mouse")
                    }
                },
                created: function() {},
                watch: {},
                mounted: function() {
                    this.initKeyBoardEvents()
                }
            }
        },
        280 : function(e, t) {
            e.exports = {
                render: function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                            staticClass: "mode-panel"
                        },
                        [n("div", {
                                staticClass: "top-bar f-cb"
                            },
                            [e.isPreview ? e._e() : n("div", {
                                    staticClass: "collect-svg f-fl",
                                    on: {
                                        click: e.collect
                                    }
                                },
                                [n("i", {
                                    class: {
                                        "ux-scratch-icon-star": !e.project.collected,
                                        "ux-scratch-icon-star_fill": e.project.collected
                                    }
                                }), e._v(" "), n("span", {
                                        staticClass: "collect-count"
                                    },
                                    [e._v(e._s(e._f("normalize")(e.project.collectedCount)))])]), e._v(" "), e.isPreview ? e._e() : n("div", {
                                    staticClass: "thumb-svg f-fl",
                                    on: {
                                        click: e.thumbUp
                                    }
                                },
                                [n("i", {
                                    class: {
                                        "ux-scratch-icon-thumbup": !e.project.thumbUped,
                                        "ux-scratch-icon-thumbup-fill": e.project.thumbUped
                                    }
                                }), n("span", {
                                        staticClass: "thumb-count"
                                    },
                                    [e._v(e._s(e._f("normalize")(e.project.thumbUpCount)))])]), e._v(" "), e.isPreview ? n("div", {
                                    staticClass: "preview f-fl"
                                },
                                [e._v("作品尚未发布，仅供作者本人预览")]) : e._e(), e._v(" "), n("div", {
                                    staticClass: "arrow f-fr",
                                    on: {
                                        click: e.back
                                    }
                                },
                                [n("i", {
                                    staticClass: "ux-scratch-icon-arrow"
                                })])]), e._v(" "), 1 == e.project.mode ? n("div", {
                                staticClass: "panel-container f-cb"
                            },
                            [e._m(0), e._v(" "), e._m(1)]) : 2 == e.project.mode ? n("div", {
                                staticClass: "panel-container f-cb"
                            },
                            [e._m(2), e._v(" "), n("div", {
                                staticClass: "space f-fr"
                            })]) : 3 == e.project.mode ? n("div", {
                                staticClass: "panel-container"
                            },
                            [e._m(3)]) : 5 == e.project.mode ? n("div", {
                                staticClass: "no-support-mode"
                            },
                            [e._v("\n        未适配手机端\n        "), n("p", {
                                    staticClass: "tip"
                                },
                                [e._v("请至电脑上操作")])]) : n("div", {
                                staticClass: "no-mode"
                            },
                            [e._v("\n        无需键盘\n        "), n("p", {
                                    staticClass: "tip"
                                },
                                [e._v("请在作品中操作或直接观看")])])])
                },
                staticRenderFns: [function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                            staticClass: "panel-left key-4 f-fl"
                        },
                        [n("div", {
                            staticClass: "key left key-a"
                        }), e._v(" "), n("div", {
                            staticClass: "key down key-s"
                        }), e._v(" "), n("div", {
                            staticClass: "key right key-d"
                        }), e._v(" "), n("div", {
                            staticClass: "key up key-w"
                        })])
                },
                    function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", {
                                staticClass: "panel-right key-4 f-fr"
                            },
                            [n("div", {
                                staticClass: "key left key-h"
                            }), e._v(" "), n("div", {
                                staticClass: "key down key-j"
                            }), e._v(" "), n("div", {
                                staticClass: "key right key-k"
                            }), e._v(" "), n("div", {
                                staticClass: "key up key-u"
                            })])
                    },
                    function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", {
                                staticClass: "panel-left-4 key-4 f-fl"
                            },
                            [n("div", {
                                staticClass: "key left arrow-left"
                            }), e._v(" "), n("div", {
                                staticClass: "key down arrow-down"
                            }), e._v(" "), n("div", {
                                staticClass: "key right arrow-right"
                            }), e._v(" "), n("div", {
                                staticClass: "key up arrow-up"
                            })])
                    },
                    function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", {
                                staticClass: "key-9"
                            },
                            [n("div", {
                                staticClass: "key key-q"
                            }), e._v(" "), n("div", {
                                staticClass: "key key-w"
                            }), e._v(" "), n("div", {
                                staticClass: "key key-e"
                            }), e._v(" "), n("div", {
                                staticClass: "key key-a"
                            }), e._v(" "), n("div", {
                                staticClass: "key key-s"
                            }), e._v(" "), n("div", {
                                staticClass: "key key-d"
                            }), e._v(" "), n("div", {
                                staticClass: "key key-z"
                            }), e._v(" "), n("div", {
                                staticClass: "key key-x"
                            }), e._v(" "), n("div", {
                                staticClass: "key key-c"
                            })])
                    }]
            }
        },
        281 : function(e, t) {
            e.exports = {
                render: function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                            staticClass: "main",
                            class: {
                                playing: e.playing,
                                notqqorweixin: !e.QQorWeiXin
                            }
                        },
                        [e.project && e.project.imgUrl ? n("div", {
                                directives: [{
                                    name: "show",
                                    rawName: "v-show",
                                    value: !1,
                                    expression: "false"
                                }]
                            },
                            [n("img", {
                                attrs: {
                                    src: e.project.imgUrl
                                }
                            })]) : e._e(), e._v(" "), n("nav-bar", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: !e.playing || e.QQorWeiXin,
                                expression: "!playing || QQorWeiXin"
                            }],
                            attrs: {
                                from: "detail"
                            }
                        }), e._v(" "), !e.loaded && e.project ? n("div", {
                                staticClass: "loading-box"
                            },
                            [n("img", {
                                attrs: {
                                    src: e.project.imgUrl
                                }
                            }), e._v(" "), n("div", {
                                    staticClass: "loading f-pa"
                                },
                                [n("div", {
                                    staticClass: "loading-gif"
                                }), e._v(" "), n("div", {
                                        staticClass: "percent-box"
                                    },
                                    [n("div", {
                                        staticClass: "percent-solid",
                                        style: {
                                            width: e.loadedPercent + "%"
                                        }
                                    })]), e._v(" "), n("p", {
                                        staticClass: "info"
                                    },
                                    [n("span", {
                                            staticClass: "highlight"
                                        },
                                        [e._v(e._s(e.loadedAssets) + "/" + e._s(e.totalAssets))]), e._v("正在加载......")])])]) : e._e(), e._v(" "), n("div", {
                                staticClass: "area",
                                attrs: {
                                    id: "player-area"
                                }
                            },
                            [n("div", {
                                    staticClass: "player"
                                },
                                [n("div", {
                                        staticClass: "controls",
                                        attrs: {
                                            id: "con"
                                        }
                                    },
                                    [n("span", {
                                        staticClass: "stop",
                                        on: {
                                            click: e.back
                                        }
                                    }), e._v(" "), n("span", {
                                        staticClass: "pause",
                                        on: {
                                            click: e.pause
                                        }
                                    }), e._v(" "), n("span", {
                                        staticClass: "flag",
                                        on: {
                                            click: e.start
                                        }
                                    }), e._v(" "), n("span", {
                                        staticClass: "full-screen"
                                    })])]), e._v(" "), e.playing && !e.isPause || !e.loaded ? e._e() : n("div", {
                                class: ["mask", e.isPause ? "mask-pause": "mask-play"],
                                on: {
                                    click: e.flagClicked
                                }
                            })]), e._v(" "), !e.playing && e.isPreview ? n("div", {
                                staticClass: "preview-tip"
                            },
                            [e._v("作品尚未发布，仅供作者本人预览")]) : e._e(), e._v(" "), n("transition", {
                                attrs: {
                                    name: "fade"
                                }
                            },
                            [!e.playing && e.project ? n("project-detail", {
                                attrs: {
                                    project: e.project,
                                    isPreview: e.isPreview
                                },
                                on: {
                                    collect: function(t) {
                                        e.handleCollect(t)
                                    },
                                    thumbUp: e.handleThumbUp
                                }
                            }) : e._e(), e._v(" "), e.playing && e.project ? n("mode-panel", {
                                attrs: {
                                    project: e.project,
                                    canvas: e.canvas,
                                    isPreview: e.isPreview
                                },
                                on: {
                                    back: e.back,
                                    collect: function(t) {
                                        e.handleCollect(t)
                                    },
                                    thumbUp: e.handleThumbUp
                                }
                            }) : e._e()], 1)], 1)
                },
                staticRenderFns: []
            }
        }
    });