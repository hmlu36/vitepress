import {
  init_vue_runtime_esm_bundler,
  vue_runtime_esm_bundler_exports
} from "./chunk-JARVIF7X.js";
import {
  __commonJS,
  __toCommonJS
} from "./chunk-NIBQISYW.js";

// node_modules/highcharts/highcharts.js
var require_highcharts = __commonJS({
  "node_modules/highcharts/highcharts.js"(exports, module) {
    "use strict";
    (function(Z, M) {
      "object" === typeof module && module.exports ? (M["default"] = M, module.exports = Z.document ? M(Z) : M) : "function" === typeof define && define.amd ? define("highcharts/highcharts", function() {
        return M(Z);
      }) : (Z.Highcharts && Z.Highcharts.error(16, true), Z.Highcharts = M(Z));
    })("undefined" !== typeof window ? window : exports, function(Z) {
      function M(v, a2, z, F) {
        v.hasOwnProperty(a2) || (v[a2] = F.apply(null, z));
      }
      var a = {};
      M(a, "Core/Globals.js", [], function() {
        var v = "undefined" !== typeof Z ? Z : "undefined" !== typeof window ? window : {}, a2;
        (function(a3) {
          a3.SVG_NS = "http://www.w3.org/2000/svg";
          a3.product = "Highcharts";
          a3.version = "9.3.3";
          a3.win = v;
          a3.doc = a3.win.document;
          a3.svg = a3.doc && a3.doc.createElementNS && !!a3.doc.createElementNS(a3.SVG_NS, "svg").createSVGRect;
          a3.userAgent = a3.win.navigator && a3.win.navigator.userAgent || "";
          a3.isChrome = -1 !== a3.userAgent.indexOf("Chrome");
          a3.isFirefox = -1 !== a3.userAgent.indexOf("Firefox");
          a3.isMS = /(edge|msie|trident)/i.test(a3.userAgent) && !a3.win.opera;
          a3.isSafari = !a3.isChrome && -1 !== a3.userAgent.indexOf("Safari");
          a3.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(a3.userAgent);
          a3.isWebKit = -1 !== a3.userAgent.indexOf("AppleWebKit");
          a3.deg2rad = 2 * Math.PI / 360;
          a3.hasBidiBug = a3.isFirefox && 4 > parseInt(a3.userAgent.split("Firefox/")[1], 10);
          a3.hasTouch = !!a3.win.TouchEvent;
          a3.marginNames = ["plotTop", "marginRight", "marginBottom", "plotLeft"];
          a3.noop = function() {
          };
          a3.supportsPassiveEvents = function() {
            var v2 = false;
            if (!a3.isMS) {
              var u = Object.defineProperty({}, "passive", { get: function() {
                v2 = true;
              } });
              a3.win.addEventListener && a3.win.removeEventListener && (a3.win.addEventListener(
                "testPassive",
                a3.noop,
                u
              ), a3.win.removeEventListener("testPassive", a3.noop, u));
            }
            return v2;
          }();
          a3.charts = [];
          a3.dateFormats = {};
          a3.seriesTypes = {};
          a3.symbolSizes = {};
          a3.chartCount = 0;
        })(a2 || (a2 = {}));
        "";
        return a2;
      });
      M(a, "Core/Utilities.js", [a["Core/Globals.js"]], function(a2) {
        function v(m, b2, d2, g2) {
          var D = b2 ? "Highcharts error" : "Highcharts warning";
          32 === m && (m = D + ": Deprecated member");
          var x = n(m), c2 = x ? D + " #" + m + ": www.highcharts.com/errors/" + m + "/" : m.toString();
          if ("undefined" !== typeof g2) {
            var r2 = "";
            x && (c2 += "?");
            B(g2, function(m2, b3) {
              r2 += "\n - " + b3 + ": " + m2;
              x && (c2 += encodeURI(b3) + "=" + encodeURI(m2));
            });
            c2 += r2;
          }
          J(a2, "displayError", { chart: d2, code: m, message: c2, params: g2 }, function() {
            if (b2)
              throw Error(c2);
            l.console && -1 === v.messages.indexOf(c2) && console.warn(c2);
          });
          v.messages.push(c2);
        }
        function z(m, b2) {
          var d2 = {};
          B(m, function(D, x) {
            if (H(m[x], true) && !m.nodeType && b2[x])
              D = z(m[x], b2[x]), Object.keys(D).length && (d2[x] = D);
            else if (H(m[x]) || m[x] !== b2[x])
              d2[x] = m[x];
          });
          return d2;
        }
        function F(m, b2) {
          return parseInt(m, b2 || 10);
        }
        function y(m) {
          return "string" === typeof m;
        }
        function G(m) {
          m = Object.prototype.toString.call(m);
          return "[object Array]" === m || "[object Array Iterator]" === m;
        }
        function H(m, b2) {
          return !!m && "object" === typeof m && (!b2 || !G(m));
        }
        function A(m) {
          return H(m) && "number" === typeof m.nodeType;
        }
        function q(m) {
          var b2 = m && m.constructor;
          return !(!H(m, true) || A(m) || !b2 || !b2.name || "Object" === b2.name);
        }
        function n(m) {
          return "number" === typeof m && !isNaN(m) && Infinity > m && -Infinity < m;
        }
        function k(m) {
          return "undefined" !== typeof m && null !== m;
        }
        function e(m, b2, d2) {
          var D;
          y(b2) ? k(d2) ? m.setAttribute(b2, d2) : m && m.getAttribute && ((D = m.getAttribute(b2)) || "class" !== b2 || (D = m.getAttribute(b2 + "Name"))) : B(b2, function(b3, d3) {
            k(b3) ? m.setAttribute(d3, b3) : m.removeAttribute(d3);
          });
          return D;
        }
        function c(b2, d2) {
          var m;
          b2 || (b2 = {});
          for (m in d2)
            b2[m] = d2[m];
          return b2;
        }
        function h() {
          for (var b2 = arguments, d2 = b2.length, x = 0; x < d2; x++) {
            var g2 = b2[x];
            if ("undefined" !== typeof g2 && null !== g2)
              return g2;
          }
        }
        function f(b2, d2) {
          a2.isMS && !a2.svg && d2 && "undefined" !== typeof d2.opacity && (d2.filter = "alpha(opacity=" + 100 * d2.opacity + ")");
          c(b2.style, d2);
        }
        function w(b2, d2) {
          return 1e14 < b2 ? b2 : parseFloat(b2.toPrecision(d2 || 14));
        }
        function p(b2, d2, x) {
          var m = a2.getStyle || p;
          if ("width" === d2)
            return d2 = Math.min(b2.offsetWidth, b2.scrollWidth), x = b2.getBoundingClientRect && b2.getBoundingClientRect().width, x < d2 && x >= d2 - 1 && (d2 = Math.floor(x)), Math.max(0, d2 - (m(b2, "padding-left", true) || 0) - (m(b2, "padding-right", true) || 0));
          if ("height" === d2)
            return Math.max(0, Math.min(b2.offsetHeight, b2.scrollHeight) - (m(b2, "padding-top", true) || 0) - (m(b2, "padding-bottom", true) || 0));
          l.getComputedStyle || v(27, true);
          if (b2 = l.getComputedStyle(b2, void 0)) {
            var g2 = b2.getPropertyValue(d2);
            h(x, "opacity" !== d2) && (g2 = F(g2));
          }
          return g2;
        }
        function B(b2, d2, g2) {
          for (var m in b2)
            Object.hasOwnProperty.call(b2, m) && d2.call(g2 || b2[m], b2[m], m, b2);
        }
        function t(b2, d2, g2) {
          function m(d3, m2) {
            var L = b2.removeEventListener || a2.removeEventListenerPolyfill;
            L && L.call(b2, d3, m2, false);
          }
          function x(g3) {
            var x2;
            if (b2.nodeName) {
              if (d2) {
                var L = {};
                L[d2] = true;
              } else
                L = g3;
              B(L, function(b3, d3) {
                if (g3[d3])
                  for (x2 = g3[d3].length; x2--; )
                    m(d3, g3[d3][x2].fn);
              });
            }
          }
          var D = "function" === typeof b2 && b2.prototype || b2;
          if (Object.hasOwnProperty.call(D, "hcEvents")) {
            var l2 = D.hcEvents;
            d2 ? (D = l2[d2] || [], g2 ? (l2[d2] = D.filter(function(b3) {
              return g2 !== b3.fn;
            }), m(d2, g2)) : (x(l2), l2[d2] = [])) : (x(l2), delete D.hcEvents);
          }
        }
        function J(b2, d2, g2, l2) {
          g2 = g2 || {};
          if (r.createEvent && (b2.dispatchEvent || b2.fireEvent && b2 !== a2)) {
            var m = r.createEvent("Events");
            m.initEvent(d2, true, true);
            g2 = c(m, g2);
            b2.dispatchEvent ? b2.dispatchEvent(g2) : b2.fireEvent(d2, g2);
          } else if (b2.hcEvents) {
            g2.target || c(g2, { preventDefault: function() {
              g2.defaultPrevented = true;
            }, target: b2, type: d2 });
            m = [];
            for (var x = b2, D = false; x.hcEvents; )
              Object.hasOwnProperty.call(x, "hcEvents") && x.hcEvents[d2] && (m.length && (D = true), m.unshift.apply(m, x.hcEvents[d2])), x = Object.getPrototypeOf(x);
            D && m.sort(function(b3, d3) {
              return b3.order - d3.order;
            });
            m.forEach(function(d3) {
              false === d3.fn.call(b2, g2) && g2.preventDefault();
            });
          }
          l2 && !g2.defaultPrevented && l2.call(b2, g2);
        }
        var C = a2.charts, r = a2.doc, l = a2.win;
        (v || (v = {})).messages = [];
        Math.easeInOutSine = function(b2) {
          return -0.5 * (Math.cos(Math.PI * b2) - 1);
        };
        var b = Array.prototype.find ? function(b2, d2) {
          return b2.find(d2);
        } : function(b2, d2) {
          var m, g2 = b2.length;
          for (m = 0; m < g2; m++)
            if (d2(b2[m], m))
              return b2[m];
        };
        B({ map: "map", each: "forEach", grep: "filter", reduce: "reduce", some: "some" }, function(b2, d2) {
          a2[d2] = function(m) {
            var g2;
            v(32, false, void 0, (g2 = {}, g2["Highcharts." + d2] = "use Array." + b2, g2));
            return Array.prototype[b2].apply(m, [].slice.call(arguments, 1));
          };
        });
        var g, d = function() {
          var b2 = Math.random().toString(36).substring(2, 9) + "-", d2 = 0;
          return function() {
            return "highcharts-" + (g ? "" : b2) + d2++;
          };
        }();
        l.jQuery && (l.jQuery.fn.highcharts = function() {
          var b2 = [].slice.call(arguments);
          if (this[0])
            return b2[0] ? (new a2[y(b2[0]) ? b2.shift() : "Chart"](this[0], b2[0], b2[1]), this) : C[e(this[0], "data-highcharts-chart")];
        });
        b = { addEvent: function(b2, d2, g2, l2) {
          void 0 === l2 && (l2 = {});
          var m = "function" === typeof b2 && b2.prototype || b2;
          Object.hasOwnProperty.call(m, "hcEvents") || (m.hcEvents = {});
          m = m.hcEvents;
          a2.Point && b2 instanceof a2.Point && b2.series && b2.series.chart && (b2.series.chart.runTrackerClick = true);
          var x = b2.addEventListener || a2.addEventListenerPolyfill;
          x && x.call(b2, d2, g2, a2.supportsPassiveEvents ? { passive: void 0 === l2.passive ? -1 !== d2.indexOf("touch") : l2.passive, capture: false } : false);
          m[d2] || (m[d2] = []);
          m[d2].push({ fn: g2, order: "number" === typeof l2.order ? l2.order : Infinity });
          m[d2].sort(function(b3, d3) {
            return b3.order - d3.order;
          });
          return function() {
            t(b2, d2, g2);
          };
        }, arrayMax: function(b2) {
          for (var d2 = b2.length, m = b2[0]; d2--; )
            b2[d2] > m && (m = b2[d2]);
          return m;
        }, arrayMin: function(b2) {
          for (var d2 = b2.length, m = b2[0]; d2--; )
            b2[d2] < m && (m = b2[d2]);
          return m;
        }, attr: e, clamp: function(b2, d2, g2) {
          return b2 > d2 ? b2 < g2 ? b2 : g2 : d2;
        }, cleanRecursively: z, clearTimeout: function(b2) {
          k(b2) && clearTimeout(b2);
        }, correctFloat: w, createElement: function(b2, d2, g2, l2, e2) {
          b2 = r.createElement(b2);
          d2 && c(b2, d2);
          e2 && f(b2, { padding: "0", border: "none", margin: "0" });
          g2 && f(b2, g2);
          l2 && l2.appendChild(b2);
          return b2;
        }, css: f, defined: k, destroyObjectProperties: function(b2, d2) {
          B(b2, function(m, g2) {
            m && m !== d2 && m.destroy && m.destroy();
            delete b2[g2];
          });
        }, discardElement: function(b2) {
          b2 && b2.parentElement && b2.parentElement.removeChild(b2);
        }, erase: function(b2, d2) {
          for (var m = b2.length; m--; )
            if (b2[m] === d2) {
              b2.splice(m, 1);
              break;
            }
        }, error: v, extend: c, extendClass: function(b2, d2) {
          var m = function() {
          };
          m.prototype = new b2();
          c(m.prototype, d2);
          return m;
        }, find: b, fireEvent: J, getMagnitude: function(b2) {
          return Math.pow(10, Math.floor(Math.log(b2) / Math.LN10));
        }, getNestedProperty: function(b2, d2) {
          for (b2 = b2.split("."); b2.length && k(d2); ) {
            var m = b2.shift();
            if ("undefined" === typeof m || "__proto__" === m)
              return;
            d2 = d2[m];
            if (!k(d2) || "function" === typeof d2 || "number" === typeof d2.nodeType || d2 === l)
              return;
          }
          return d2;
        }, getStyle: p, inArray: function(b2, d2, g2) {
          v(32, false, void 0, { "Highcharts.inArray": "use Array.indexOf" });
          return d2.indexOf(b2, g2);
        }, isArray: G, isClass: q, isDOMElement: A, isFunction: function(b2) {
          return "function" === typeof b2;
        }, isNumber: n, isObject: H, isString: y, keys: function(b2) {
          v(32, false, void 0, { "Highcharts.keys": "use Object.keys" });
          return Object.keys(b2);
        }, merge: function() {
          var b2, d2 = arguments, g2 = {}, l2 = function(b3, d3) {
            "object" !== typeof b3 && (b3 = {});
            B(d3, function(m, g3) {
              "__proto__" !== g3 && "constructor" !== g3 && (!H(m, true) || q(m) || A(m) ? b3[g3] = d3[g3] : b3[g3] = l2(b3[g3] || {}, m));
            });
            return b3;
          };
          true === d2[0] && (g2 = d2[1], d2 = Array.prototype.slice.call(d2, 2));
          var c2 = d2.length;
          for (b2 = 0; b2 < c2; b2++)
            g2 = l2(g2, d2[b2]);
          return g2;
        }, normalizeTickInterval: function(b2, d2, g2, l2, c2) {
          var m = b2;
          g2 = h(g2, 1);
          var r2 = b2 / g2;
          d2 || (d2 = c2 ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], false === l2 && (1 === g2 ? d2 = d2.filter(function(b3) {
            return 0 === b3 % 1;
          }) : 0.1 >= g2 && (d2 = [1 / g2])));
          for (l2 = 0; l2 < d2.length && !(m = d2[l2], c2 && m * g2 >= b2 || !c2 && r2 <= (d2[l2] + (d2[l2 + 1] || d2[l2])) / 2); l2++)
            ;
          return m = w(m * g2, -Math.round(Math.log(1e-3) / Math.LN10));
        }, objectEach: B, offset: function(b2) {
          var d2 = r.documentElement;
          b2 = b2.parentElement || b2.parentNode ? b2.getBoundingClientRect() : { top: 0, left: 0, width: 0, height: 0 };
          return { top: b2.top + (l.pageYOffset || d2.scrollTop) - (d2.clientTop || 0), left: b2.left + (l.pageXOffset || d2.scrollLeft) - (d2.clientLeft || 0), width: b2.width, height: b2.height };
        }, pad: function(b2, d2, g2) {
          return Array((d2 || 2) + 1 - String(b2).replace("-", "").length).join(g2 || "0") + b2;
        }, pick: h, pInt: F, relativeLength: function(b2, d2, g2) {
          return /%$/.test(b2) ? d2 * parseFloat(b2) / 100 + (g2 || 0) : parseFloat(b2);
        }, removeEvent: t, splat: function(b2) {
          return G(b2) ? b2 : [b2];
        }, stableSort: function(b2, d2) {
          var g2 = b2.length, m, l2;
          for (l2 = 0; l2 < g2; l2++)
            b2[l2].safeI = l2;
          b2.sort(function(b3, g3) {
            m = d2(b3, g3);
            return 0 === m ? b3.safeI - g3.safeI : m;
          });
          for (l2 = 0; l2 < g2; l2++)
            delete b2[l2].safeI;
        }, syncTimeout: function(b2, d2, g2) {
          if (0 < d2)
            return setTimeout(b2, d2, g2);
          b2.call(0, g2);
          return -1;
        }, timeUnits: {
          millisecond: 1,
          second: 1e3,
          minute: 6e4,
          hour: 36e5,
          day: 864e5,
          week: 6048e5,
          month: 24192e5,
          year: 314496e5
        }, uniqueKey: d, useSerialIds: function(b2) {
          return g = h(b2, g);
        }, wrap: function(b2, d2, g2) {
          var m = b2[d2];
          b2[d2] = function() {
            var b3 = Array.prototype.slice.call(arguments), d3 = arguments, l2 = this;
            l2.proceed = function() {
              m.apply(l2, arguments.length ? arguments : d3);
            };
            b3.unshift(m);
            b3 = g2.apply(this, b3);
            l2.proceed = null;
            return b3;
          };
        } };
        "";
        return b;
      });
      M(a, "Core/Chart/ChartDefaults.js", [], function() {
        return { panning: { enabled: false, type: "x" }, styledMode: false, borderRadius: 0, colorCount: 10, defaultSeriesType: "line", ignoreHiddenSeries: true, spacing: [
          10,
          10,
          15,
          10
        ], resetZoomButton: { theme: { zIndex: 6 }, position: { align: "right", x: -10, y: 10 } }, zoomBySingleTouch: false, width: null, height: null, borderColor: "#335cad", backgroundColor: "#ffffff", plotBorderColor: "#cccccc" };
      });
      M(a, "Core/Color/Color.js", [a["Core/Globals.js"], a["Core/Utilities.js"]], function(a2, u) {
        var v = u.isNumber, F = u.merge, y = u.pInt;
        u = function() {
          function u2(v2) {
            this.rgba = [NaN, NaN, NaN, NaN];
            this.input = v2;
            var A = a2.Color;
            if (A && A !== u2)
              return new A(v2);
            if (!(this instanceof u2))
              return new u2(v2);
            this.init(v2);
          }
          u2.parse = function(a3) {
            return a3 ? new u2(a3) : u2.None;
          };
          u2.prototype.init = function(a3) {
            var A;
            if ("object" === typeof a3 && "undefined" !== typeof a3.stops)
              this.stops = a3.stops.map(function(e) {
                return new u2(e[1]);
              });
            else if ("string" === typeof a3) {
              this.input = a3 = u2.names[a3.toLowerCase()] || a3;
              if ("#" === a3.charAt(0)) {
                var q = a3.length;
                var n = parseInt(a3.substr(1), 16);
                7 === q ? A = [(n & 16711680) >> 16, (n & 65280) >> 8, n & 255, 1] : 4 === q && (A = [(n & 3840) >> 4 | (n & 3840) >> 8, (n & 240) >> 4 | n & 240, (n & 15) << 4 | n & 15, 1]);
              }
              if (!A)
                for (n = u2.parsers.length; n-- && !A; ) {
                  var k = u2.parsers[n];
                  (q = k.regex.exec(a3)) && (A = k.parse(q));
                }
            }
            A && (this.rgba = A);
          };
          u2.prototype.get = function(a3) {
            var A = this.input, q = this.rgba;
            if ("object" === typeof A && "undefined" !== typeof this.stops) {
              var n = F(A);
              n.stops = [].slice.call(n.stops);
              this.stops.forEach(function(k, e) {
                n.stops[e] = [n.stops[e][0], k.get(a3)];
              });
              return n;
            }
            return q && v(q[0]) ? "rgb" === a3 || !a3 && 1 === q[3] ? "rgb(" + q[0] + "," + q[1] + "," + q[2] + ")" : "a" === a3 ? "" + q[3] : "rgba(" + q.join(",") + ")" : A;
          };
          u2.prototype.brighten = function(a3) {
            var A = this.rgba;
            if (this.stops)
              this.stops.forEach(function(n) {
                n.brighten(a3);
              });
            else if (v(a3) && 0 !== a3)
              for (var q = 0; 3 > q; q++)
                A[q] += y(255 * a3), 0 > A[q] && (A[q] = 0), 255 < A[q] && (A[q] = 255);
            return this;
          };
          u2.prototype.setOpacity = function(a3) {
            this.rgba[3] = a3;
            return this;
          };
          u2.prototype.tweenTo = function(a3, A) {
            var q = this.rgba, n = a3.rgba;
            if (!v(q[0]) || !v(n[0]))
              return a3.input || "none";
            a3 = 1 !== n[3] || 1 !== q[3];
            return (a3 ? "rgba(" : "rgb(") + Math.round(n[0] + (q[0] - n[0]) * (1 - A)) + "," + Math.round(n[1] + (q[1] - n[1]) * (1 - A)) + "," + Math.round(n[2] + (q[2] - n[2]) * (1 - A)) + (a3 ? "," + (n[3] + (q[3] - n[3]) * (1 - A)) : "") + ")";
          };
          u2.names = { white: "#ffffff", black: "#000000" };
          u2.parsers = [{
            regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
            parse: function(a3) {
              return [y(a3[1]), y(a3[2]), y(a3[3]), parseFloat(a3[4], 10)];
            }
          }, { regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, parse: function(a3) {
            return [y(a3[1]), y(a3[2]), y(a3[3]), 1];
          } }];
          u2.None = new u2("");
          return u2;
        }();
        "";
        return u;
      });
      M(a, "Core/Color/Palettes.js", [], function() {
        return { colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" ") };
      });
      M(a, "Core/Time.js", [a["Core/Globals.js"], a["Core/Utilities.js"]], function(a2, u) {
        var v = a2.win, F = u.defined, y = u.error, G = u.extend, H = u.isObject, A = u.merge, q = u.objectEach, n = u.pad, k = u.pick, e = u.splat, c = u.timeUnits, h = a2.isSafari && v.Intl && v.Intl.DateTimeFormat.prototype.formatRange, f = a2.isSafari && v.Intl && !v.Intl.DateTimeFormat.prototype.formatRange;
        u = function() {
          function w(c2) {
            this.options = {};
            this.variableTimezone = this.useUTC = false;
            this.Date = v.Date;
            this.getTimezoneOffset = this.timezoneOffsetFunction();
            this.update(c2);
          }
          w.prototype.get = function(c2, e2) {
            if (this.variableTimezone || this.timezoneOffset) {
              var p = e2.getTime(), f2 = p - this.getTimezoneOffset(e2);
              e2.setTime(f2);
              c2 = e2["getUTC" + c2]();
              e2.setTime(p);
              return c2;
            }
            return this.useUTC ? e2["getUTC" + c2]() : e2["get" + c2]();
          };
          w.prototype.set = function(c2, e2, f2) {
            if (this.variableTimezone || this.timezoneOffset) {
              if ("Milliseconds" === c2 || "Seconds" === c2 || "Minutes" === c2 && 0 === this.getTimezoneOffset(e2) % 36e5)
                return e2["setUTC" + c2](f2);
              var p = this.getTimezoneOffset(e2);
              p = e2.getTime() - p;
              e2.setTime(p);
              e2["setUTC" + c2](f2);
              c2 = this.getTimezoneOffset(e2);
              p = e2.getTime() + c2;
              return e2.setTime(p);
            }
            return this.useUTC || h && "FullYear" === c2 ? e2["setUTC" + c2](f2) : e2["set" + c2](f2);
          };
          w.prototype.update = function(c2) {
            var e2 = k(c2 && c2.useUTC, true);
            this.options = c2 = A(true, this.options || {}, c2);
            this.Date = c2.Date || v.Date || Date;
            this.timezoneOffset = (this.useUTC = e2) && c2.timezoneOffset;
            this.getTimezoneOffset = this.timezoneOffsetFunction();
            this.variableTimezone = e2 && !(!c2.getTimezoneOffset && !c2.timezone);
          };
          w.prototype.makeTime = function(c2, e2, h2, w2, C, r) {
            if (this.useUTC) {
              var l = this.Date.UTC.apply(0, arguments);
              var b = this.getTimezoneOffset(l);
              l += b;
              var g = this.getTimezoneOffset(l);
              b !== g ? l += g - b : b - 36e5 !== this.getTimezoneOffset(l - 36e5) || f || (l -= 36e5);
            } else
              l = new this.Date(c2, e2, k(h2, 1), k(w2, 0), k(C, 0), k(r, 0)).getTime();
            return l;
          };
          w.prototype.timezoneOffsetFunction = function() {
            var c2 = this, e2 = this.options, f2 = e2.getTimezoneOffset, h2 = e2.moment || v.moment;
            if (!this.useUTC)
              return function(c3) {
                return 6e4 * new Date(c3.toString()).getTimezoneOffset();
              };
            if (e2.timezone) {
              if (h2)
                return function(c3) {
                  return 6e4 * -h2.tz(c3, e2.timezone).utcOffset();
                };
              y(25);
            }
            return this.useUTC && f2 ? function(c3) {
              return 6e4 * f2(c3.valueOf());
            } : function() {
              return 6e4 * (c2.timezoneOffset || 0);
            };
          };
          w.prototype.dateFormat = function(c2, e2, f2) {
            if (!F(e2) || isNaN(e2))
              return a2.defaultOptions.lang && a2.defaultOptions.lang.invalidDate || "";
            c2 = k(c2, "%Y-%m-%d %H:%M:%S");
            var p = this, h2 = new this.Date(e2), r = this.get("Hours", h2), l = this.get("Day", h2), b = this.get("Date", h2), g = this.get("Month", h2), d = this.get("FullYear", h2), m = a2.defaultOptions.lang, D = m && m.weekdays, x = m && m.shortWeekdays;
            h2 = G({ a: x ? x[l] : D[l].substr(0, 3), A: D[l], d: n(b), e: n(b, 2, " "), w: l, b: m.shortMonths[g], B: m.months[g], m: n(g + 1), o: g + 1, y: d.toString().substr(2, 2), Y: d, H: n(r), k: r, I: n(r % 12 || 12), l: r % 12 || 12, M: n(this.get("Minutes", h2)), p: 12 > r ? "AM" : "PM", P: 12 > r ? "am" : "pm", S: n(h2.getSeconds()), L: n(Math.floor(e2 % 1e3), 3) }, a2.dateFormats);
            q(h2, function(b2, d2) {
              for (; -1 !== c2.indexOf("%" + d2); )
                c2 = c2.replace("%" + d2, "function" === typeof b2 ? b2.call(p, e2) : b2);
            });
            return f2 ? c2.substr(0, 1).toUpperCase() + c2.substr(1) : c2;
          };
          w.prototype.resolveDTLFormat = function(c2) {
            return H(c2, true) ? c2 : (c2 = e(c2), { main: c2[0], from: c2[1], to: c2[2] });
          };
          w.prototype.getTimeTicks = function(e2, h2, f2, w2) {
            var p = this, r = [], l = {}, b = new p.Date(h2), g = e2.unitRange, d = e2.count || 1, m;
            w2 = k(w2, 1);
            if (F(h2)) {
              p.set(
                "Milliseconds",
                b,
                g >= c.second ? 0 : d * Math.floor(p.get("Milliseconds", b) / d)
              );
              g >= c.second && p.set("Seconds", b, g >= c.minute ? 0 : d * Math.floor(p.get("Seconds", b) / d));
              g >= c.minute && p.set("Minutes", b, g >= c.hour ? 0 : d * Math.floor(p.get("Minutes", b) / d));
              g >= c.hour && p.set("Hours", b, g >= c.day ? 0 : d * Math.floor(p.get("Hours", b) / d));
              g >= c.day && p.set("Date", b, g >= c.month ? 1 : Math.max(1, d * Math.floor(p.get("Date", b) / d)));
              if (g >= c.month) {
                p.set("Month", b, g >= c.year ? 0 : d * Math.floor(p.get("Month", b) / d));
                var D = p.get("FullYear", b);
              }
              g >= c.year && p.set(
                "FullYear",
                b,
                D - D % d
              );
              g === c.week && (D = p.get("Day", b), p.set("Date", b, p.get("Date", b) - D + w2 + (D < w2 ? -7 : 0)));
              D = p.get("FullYear", b);
              w2 = p.get("Month", b);
              var x = p.get("Date", b), t = p.get("Hours", b);
              h2 = b.getTime();
              !p.variableTimezone && p.useUTC || !F(f2) || (m = f2 - h2 > 4 * c.month || p.getTimezoneOffset(h2) !== p.getTimezoneOffset(f2));
              h2 = b.getTime();
              for (b = 1; h2 < f2; )
                r.push(h2), h2 = g === c.year ? p.makeTime(D + b * d, 0) : g === c.month ? p.makeTime(D, w2 + b * d) : !m || g !== c.day && g !== c.week ? m && g === c.hour && 1 < d ? p.makeTime(D, w2, x, t + b * d) : h2 + g * d : p.makeTime(D, w2, x + b * d * (g === c.day ? 1 : 7)), b++;
              r.push(h2);
              g <= c.hour && 1e4 > r.length && r.forEach(function(b2) {
                0 === b2 % 18e5 && "000000000" === p.dateFormat("%H%M%S%L", b2) && (l[b2] = "day");
              });
            }
            r.info = G(e2, { higherRanks: l, totalRange: g * d });
            return r;
          };
          w.prototype.getDateFormat = function(e2, h2, f2, w2) {
            var p = this.dateFormat("%m-%d %H:%M:%S.%L", h2), r = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 }, l = "millisecond";
            for (b in c) {
              if (e2 === c.week && +this.dateFormat("%w", h2) === f2 && "00:00:00.000" === p.substr(6)) {
                var b = "week";
                break;
              }
              if (c[b] > e2) {
                b = l;
                break;
              }
              if (r[b] && p.substr(r[b]) !== "01-01 00:00:00.000".substr(r[b]))
                break;
              "week" !== b && (l = b);
            }
            if (b)
              var g = this.resolveDTLFormat(w2[b]).main;
            return g;
          };
          return w;
        }();
        "";
        return u;
      });
      M(a, "Core/DefaultOptions.js", [a["Core/Chart/ChartDefaults.js"], a["Core/Color/Color.js"], a["Core/Globals.js"], a["Core/Color/Palettes.js"], a["Core/Time.js"], a["Core/Utilities.js"]], function(a2, u, z, F, y, G) {
        u = u.parse;
        var v = G.merge, A = {
          colors: F.colors,
          symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
          lang: {
            loading: "Loading...",
            months: "January February March April May June July August September October November December".split(" "),
            shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
            weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            decimalPoint: ".",
            numericSymbols: "kMGTPE".split(""),
            resetZoom: "Reset zoom",
            resetZoomTitle: "Reset zoom level 1:1",
            thousandsSep: " "
          },
          global: {},
          time: { Date: void 0, getTimezoneOffset: void 0, timezone: void 0, timezoneOffset: 0, useUTC: true },
          chart: a2,
          title: { text: "Chart title", align: "center", margin: 15, widthAdjust: -44 },
          subtitle: { text: "", align: "center", widthAdjust: -44 },
          caption: { margin: 15, text: "", align: "left", verticalAlign: "bottom" },
          plotOptions: {},
          labels: { style: { position: "absolute", color: "#333333" } },
          legend: {
            enabled: true,
            align: "center",
            alignColumns: true,
            className: "highcharts-no-tooltip",
            layout: "horizontal",
            labelFormatter: function() {
              return this.name;
            },
            borderColor: "#999999",
            borderRadius: 0,
            navigation: { activeColor: "#003399", inactiveColor: "#cccccc" },
            itemStyle: { color: "#333333", cursor: "pointer", fontSize: "12px", fontWeight: "bold", textOverflow: "ellipsis" },
            itemHoverStyle: { color: "#000000" },
            itemHiddenStyle: { color: "#cccccc" },
            shadow: false,
            itemCheckboxStyle: { position: "absolute", width: "13px", height: "13px" },
            squareSymbol: true,
            symbolPadding: 5,
            verticalAlign: "bottom",
            x: 0,
            y: 0,
            title: { style: { fontWeight: "bold" } }
          },
          loading: { labelStyle: { fontWeight: "bold", position: "relative", top: "45%" }, style: { position: "absolute", backgroundColor: "#ffffff", opacity: 0.5, textAlign: "center" } },
          tooltip: {
            enabled: true,
            animation: z.svg,
            borderRadius: 3,
            dateTimeLabelFormats: {
              millisecond: "%A, %b %e, %H:%M:%S.%L",
              second: "%A, %b %e, %H:%M:%S",
              minute: "%A, %b %e, %H:%M",
              hour: "%A, %b %e, %H:%M",
              day: "%A, %b %e, %Y",
              week: "Week from %A, %b %e, %Y",
              month: "%B %Y",
              year: "%Y"
            },
            footerFormat: "",
            headerShape: "callout",
            hideDelay: 500,
            padding: 8,
            shape: "callout",
            shared: false,
            snap: z.isTouchDevice ? 25 : 10,
            headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
            pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>',
            backgroundColor: u("#f7f7f7").setOpacity(0.85).get(),
            borderWidth: 1,
            shadow: true,
            stickOnContact: false,
            style: { color: "#333333", cursor: "default", fontSize: "12px", whiteSpace: "nowrap" },
            useHTML: false
          },
          credits: { enabled: true, href: "https://www.highcharts.com?credits", position: { align: "right", x: -10, verticalAlign: "bottom", y: -5 }, style: { cursor: "pointer", color: "#999999", fontSize: "9px" }, text: "Highcharts.com" }
        };
        A.chart.styledMode = false;
        "";
        var q = new y(v(A.global, A.time));
        a2 = { defaultOptions: A, defaultTime: q, getOptions: function() {
          return A;
        }, setOptions: function(n) {
          v(true, A, n);
          if (n.time || n.global)
            z.time ? z.time.update(v(
              A.global,
              A.time,
              n.global,
              n.time
            )) : z.time = q;
          return A;
        } };
        "";
        return a2;
      });
      M(a, "Core/Animation/Fx.js", [a["Core/Color/Color.js"], a["Core/Globals.js"], a["Core/Utilities.js"]], function(a2, u, z) {
        var v = a2.parse, y = u.win, G = z.isNumber, H = z.objectEach;
        return function() {
          function a3(a4, n, k) {
            this.pos = NaN;
            this.options = n;
            this.elem = a4;
            this.prop = k;
          }
          a3.prototype.dSetter = function() {
            var a4 = this.paths, n = a4 && a4[0];
            a4 = a4 && a4[1];
            var k = this.now || 0, e = [];
            if (1 !== k && n && a4)
              if (n.length === a4.length && 1 > k)
                for (var c = 0; c < a4.length; c++) {
                  for (var h = n[c], f = a4[c], w = [], p = 0; p < f.length; p++) {
                    var B = h[p], t = f[p];
                    G(B) && G(t) && ("A" !== f[0] || 4 !== p && 5 !== p) ? w[p] = B + k * (t - B) : w[p] = t;
                  }
                  e.push(w);
                }
              else
                e = a4;
            else
              e = this.toD || [];
            this.elem.attr("d", e, void 0, true);
          };
          a3.prototype.update = function() {
            var a4 = this.elem, n = this.prop, k = this.now, e = this.options.step;
            if (this[n + "Setter"])
              this[n + "Setter"]();
            else
              a4.attr ? a4.element && a4.attr(n, k, null, true) : a4.style[n] = k + this.unit;
            e && e.call(a4, k, this);
          };
          a3.prototype.run = function(q, n, k) {
            var e = this, c = e.options, h = function(c2) {
              return h.stopped ? false : e.step(c2);
            }, f = y.requestAnimationFrame || function(c2) {
              setTimeout(
                c2,
                13
              );
            }, w = function() {
              for (var c2 = 0; c2 < a3.timers.length; c2++)
                a3.timers[c2]() || a3.timers.splice(c2--, 1);
              a3.timers.length && f(w);
            };
            q !== n || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +/* @__PURE__ */ new Date(), this.start = q, this.end = n, this.unit = k, this.now = this.start, this.pos = 0, h.elem = this.elem, h.prop = this.prop, h() && 1 === a3.timers.push(h) && f(w)) : (delete c.curAnim[this.prop], c.complete && 0 === Object.keys(c.curAnim).length && c.complete.call(this.elem));
          };
          a3.prototype.step = function(a4) {
            var n = +/* @__PURE__ */ new Date(), k = this.options, e = this.elem, c = k.complete, h = k.duration, f = k.curAnim;
            if (e.attr && !e.element)
              a4 = false;
            else if (a4 || n >= h + this.startTime) {
              this.now = this.end;
              this.pos = 1;
              this.update();
              var w = f[this.prop] = true;
              H(f, function(c2) {
                true !== c2 && (w = false);
              });
              w && c && c.call(e);
              a4 = false;
            } else
              this.pos = k.easing((n - this.startTime) / h), this.now = this.start + (this.end - this.start) * this.pos, this.update(), a4 = true;
            return a4;
          };
          a3.prototype.initPath = function(a4, n, k) {
            function e(c2, e2) {
              for (; c2.length < J; ) {
                var l = c2[0], b = e2[J - c2.length];
                b && "M" === l[0] && (c2[0] = "C" === b[0] ? ["C", l[1], l[2], l[1], l[2], l[1], l[2]] : [
                  "L",
                  l[1],
                  l[2]
                ]);
                c2.unshift(l);
                w && (l = c2.pop(), c2.push(c2[c2.length - 1], l));
              }
            }
            function c(c2, e2) {
              for (; c2.length < J; )
                if (e2 = c2[Math.floor(c2.length / p) - 1].slice(), "C" === e2[0] && (e2[1] = e2[5], e2[2] = e2[6]), w) {
                  var l = c2[Math.floor(c2.length / p)].slice();
                  c2.splice(c2.length / 2, 0, e2, l);
                } else
                  c2.push(e2);
            }
            var h = a4.startX, f = a4.endX;
            k = k.slice();
            var w = a4.isArea, p = w ? 2 : 1;
            n = n && n.slice();
            if (!n)
              return [k, k];
            if (h && f && f.length) {
              for (a4 = 0; a4 < h.length; a4++)
                if (h[a4] === f[0]) {
                  var B = a4;
                  break;
                } else if (h[0] === f[f.length - h.length + a4]) {
                  B = a4;
                  var t = true;
                  break;
                } else if (h[h.length - 1] === f[f.length - h.length + a4]) {
                  B = h.length - a4;
                  break;
                }
              "undefined" === typeof B && (n = []);
            }
            if (n.length && G(B)) {
              var J = k.length + B * p;
              t ? (e(n, k), c(k, n)) : (e(k, n), c(n, k));
            }
            return [n, k];
          };
          a3.prototype.fillSetter = function() {
            a3.prototype.strokeSetter.apply(this, arguments);
          };
          a3.prototype.strokeSetter = function() {
            this.elem.attr(this.prop, v(this.start).tweenTo(v(this.end), this.pos), void 0, true);
          };
          a3.timers = [];
          return a3;
        }();
      });
      M(a, "Core/Animation/AnimationUtilities.js", [a["Core/Animation/Fx.js"], a["Core/Utilities.js"]], function(a2, u) {
        function v(c) {
          return q(c) ? n({ duration: 500, defer: 0 }, c) : { duration: c ? 500 : 0, defer: 0 };
        }
        function F(c, e2) {
          for (var h = a2.timers.length; h--; )
            a2.timers[h].elem !== c || e2 && e2 !== a2.timers[h].prop || (a2.timers[h].stopped = true);
        }
        var y = u.defined, G = u.getStyle, H = u.isArray, A = u.isNumber, q = u.isObject, n = u.merge, k = u.objectEach, e = u.pick;
        return { animate: function(c, e2, f) {
          var h, p = "", B, t;
          if (!q(f)) {
            var J = arguments;
            f = { duration: J[2], easing: J[3], complete: J[4] };
          }
          A(f.duration) || (f.duration = 400);
          f.easing = "function" === typeof f.easing ? f.easing : Math[f.easing] || Math.easeInOutSine;
          f.curAnim = n(e2);
          k(e2, function(k2, r) {
            F(c, r);
            t = new a2(c, f, r);
            B = void 0;
            "d" === r && H(e2.d) ? (t.paths = t.initPath(c, c.pathArray, e2.d), t.toD = e2.d, h = 0, B = 1) : c.attr ? h = c.attr(r) : (h = parseFloat(G(c, r)) || 0, "opacity" !== r && (p = "px"));
            B || (B = k2);
            "string" === typeof B && B.match("px") && (B = B.replace(/px/g, ""));
            t.run(h, B, p);
          });
        }, animObject: v, getDeferredAnimation: function(c, e2, f) {
          var h = v(e2), p = 0, a3 = 0;
          (f ? [f] : c.series).forEach(function(c2) {
            c2 = v(c2.options.animation);
            p = e2 && y(e2.defer) ? h.defer : Math.max(p, c2.duration + c2.defer);
            a3 = Math.min(h.duration, c2.duration);
          });
          c.renderer.forExport && (p = 0);
          return { defer: Math.max(0, p - a3), duration: Math.min(p, a3) };
        }, setAnimation: function(c, h) {
          h.renderer.globalAnimation = e(c, h.options.chart.animation, true);
        }, stop: F };
      });
      M(a, "Core/Renderer/HTML/AST.js", [a["Core/Globals.js"], a["Core/Utilities.js"]], function(a2, u) {
        var v = a2.SVG_NS, F = u.attr, y = u.createElement, G = u.error, H = u.isFunction, A = u.isString, q = u.objectEach, n = u.splat, k = (u = a2.win.trustedTypes) && H(u.createPolicy) && u.createPolicy("highcharts", { createHTML: function(c2) {
          return c2;
        } }), e = k ? k.createHTML("") : "";
        try {
          var c = !!new DOMParser().parseFromString(e, "text/html");
        } catch (h) {
          c = false;
        }
        H = function() {
          function h(c2) {
            this.nodes = "string" === typeof c2 ? this.parseMarkup(c2) : c2;
          }
          h.filterUserAttributes = function(c2) {
            q(c2, function(e2, p) {
              var f = true;
              -1 === h.allowedAttributes.indexOf(p) && (f = false);
              -1 !== ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(p) && (f = A(e2) && h.allowedReferences.some(function(c3) {
                return 0 === e2.indexOf(c3);
              }));
              f || (G("Highcharts warning: Invalid attribute '" + p + "' in config"), delete c2[p]);
            });
            return c2;
          };
          h.setElementHTML = function(c2, e2) {
            c2.innerHTML = h.emptyHTML;
            e2 && new h(e2).addToDOM(c2);
          };
          h.prototype.addToDOM = function(c2) {
            function e2(c3, f) {
              var p;
              n(c3).forEach(function(c4) {
                var t = c4.tagName, r = c4.textContent ? a2.doc.createTextNode(c4.textContent) : void 0;
                if (t)
                  if ("#text" === t)
                    var l = r;
                  else if (-1 !== h.allowedTags.indexOf(t)) {
                    t = a2.doc.createElementNS("svg" === t ? v : f.namespaceURI || v, t);
                    var b = c4.attributes || {};
                    q(c4, function(c5, d) {
                      "tagName" !== d && "attributes" !== d && "children" !== d && "textContent" !== d && (b[d] = c5);
                    });
                    F(t, h.filterUserAttributes(b));
                    r && t.appendChild(r);
                    e2(c4.children || [], t);
                    l = t;
                  } else
                    G("Highcharts warning: Invalid tagName " + t + " in config");
                l && f.appendChild(l);
                p = l;
              });
              return p;
            }
            return e2(this.nodes, c2);
          };
          h.prototype.parseMarkup = function(e2) {
            var h2 = [];
            e2 = e2.trim();
            if (c)
              e2 = new DOMParser().parseFromString(k ? k.createHTML(e2) : e2, "text/html");
            else {
              var p = y("div");
              p.innerHTML = e2;
              e2 = { body: p };
            }
            var f = function(c2, e3) {
              var h3 = c2.nodeName.toLowerCase(), r = { tagName: h3 };
              "#text" === h3 && (r.textContent = c2.textContent || "");
              if (h3 = c2.attributes) {
                var l = {};
                [].forEach.call(h3, function(b2) {
                  l[b2.name] = b2.value;
                });
                r.attributes = l;
              }
              if (c2.childNodes.length) {
                var b = [];
                [].forEach.call(c2.childNodes, function(c3) {
                  f(c3, b);
                });
                b.length && (r.children = b);
              }
              e3.push(r);
            };
            [].forEach.call(e2.body.childNodes, function(c2) {
              return f(c2, h2);
            });
            return h2;
          };
          h.allowedAttributes = "aria-controls aria-describedby aria-expanded aria-haspopup aria-hidden aria-label aria-labelledby aria-live aria-pressed aria-readonly aria-roledescription aria-selected class clip-path color colspan cx cy d dx dy disabled fill height href id in markerHeight markerWidth offset opacity orient padding paddingLeft paddingRight patternUnits r refX refY role scope slope src startOffset stdDeviation stroke stroke-linecap stroke-width style tableValues result rowspan summary target tabindex text-align textAnchor textLength title type valign width x x1 x2 y y1 y2 zIndex".split(" ");
          h.allowedReferences = "https:// http:// mailto: / ../ ./ #".split(" ");
          h.allowedTags = "a abbr b br button caption circle clipPath code dd defs div dl dt em feComponentTransfer feFuncA feFuncB feFuncG feFuncR feGaussianBlur feOffset feMerge feMergeNode filter h1 h2 h3 h4 h5 h6 hr i img li linearGradient marker ol p path pattern pre rect small span stop strong style sub sup svg table text thead tbody tspan td th tr u ul #text".split(" ");
          h.emptyHTML = e;
          return h;
        }();
        "";
        return H;
      });
      M(
        a,
        "Core/FormatUtilities.js",
        [a["Core/DefaultOptions.js"], a["Core/Utilities.js"]],
        function(a2, u) {
          function v(a3, k, e, c) {
            a3 = +a3 || 0;
            k = +k;
            var h = F.lang, f = (a3.toString().split(".")[1] || "").split("e")[0].length, w = a3.toString().split("e"), p = k;
            if (-1 === k)
              k = Math.min(f, 20);
            else if (!H(k))
              k = 2;
            else if (k && w[1] && 0 > w[1]) {
              var B = k + +w[1];
              0 <= B ? (w[0] = (+w[0]).toExponential(B).split("e")[0], k = B) : (w[0] = w[0].split(".")[0] || 0, a3 = 20 > k ? (w[0] * Math.pow(10, w[1])).toFixed(k) : 0, w[1] = 0);
            }
            B = (Math.abs(w[1] ? w[0] : a3) + Math.pow(10, -Math.max(k, f) - 1)).toFixed(k);
            f = String(q(B));
            var t = 3 < f.length ? f.length % 3 : 0;
            e = A(e, h.decimalPoint);
            c = A(c, h.thousandsSep);
            a3 = (0 > a3 ? "-" : "") + (t ? f.substr(0, t) + c : "");
            a3 = 0 > +w[1] && !p ? "0" : a3 + f.substr(t).replace(/(\d{3})(?=\d)/g, "$1" + c);
            k && (a3 += e + B.slice(-k));
            w[1] && 0 !== +a3 && (a3 += "e" + w[1]);
            return a3;
          }
          var F = a2.defaultOptions, y = a2.defaultTime, G = u.getNestedProperty, H = u.isNumber, A = u.pick, q = u.pInt;
          return { dateFormat: function(a3, k, e) {
            return y.dateFormat(a3, k, e);
          }, format: function(a3, k, e) {
            var c = "{", h = false, f = /f$/, w = /\.([0-9])/, p = F.lang, B = e && e.time || y;
            e = e && e.numberFormatter || v;
            for (var t = []; a3; ) {
              var J = a3.indexOf(c);
              if (-1 === J)
                break;
              var C = a3.slice(0, J);
              if (h) {
                C = C.split(":");
                c = G(C.shift() || "", k);
                if (C.length && "number" === typeof c)
                  if (C = C.join(":"), f.test(C)) {
                    var r = parseInt((C.match(w) || ["", "-1"])[1], 10);
                    null !== c && (c = e(c, r, p.decimalPoint, -1 < C.indexOf(",") ? p.thousandsSep : ""));
                  } else
                    c = B.dateFormat(C, c);
                t.push(c);
              } else
                t.push(C);
              a3 = a3.slice(J + 1);
              c = (h = !h) ? "}" : "{";
            }
            t.push(a3);
            return t.join("");
          }, numberFormat: v };
        }
      );
      M(a, "Core/Renderer/RendererUtilities.js", [a["Core/Utilities.js"]], function(a2) {
        var v = a2.clamp, z = a2.pick, F = a2.stableSort, y;
        (function(a3) {
          function u(a4, q, n) {
            var k = a4, e = k.reducedLen || q, c = function(c2, e2) {
              return (e2.rank || 0) - (c2.rank || 0);
            }, h = function(c2, e2) {
              return c2.target - e2.target;
            }, f, w = true, p = [], B = 0;
            for (f = a4.length; f--; )
              B += a4[f].size;
            if (B > e) {
              F(a4, c);
              for (B = f = 0; B <= e; )
                B += a4[f].size, f++;
              p = a4.splice(f - 1, a4.length);
            }
            F(a4, h);
            for (a4 = a4.map(function(c2) {
              return { size: c2.size, targets: [c2.target], align: z(c2.align, 0.5) };
            }); w; ) {
              for (f = a4.length; f--; )
                e = a4[f], c = (Math.min.apply(0, e.targets) + Math.max.apply(0, e.targets)) / 2, e.pos = v(
                  c - e.size * e.align,
                  0,
                  q - e.size
                );
              f = a4.length;
              for (w = false; f--; )
                0 < f && a4[f - 1].pos + a4[f - 1].size > a4[f].pos && (a4[f - 1].size += a4[f].size, a4[f - 1].targets = a4[f - 1].targets.concat(a4[f].targets), a4[f - 1].align = 0.5, a4[f - 1].pos + a4[f - 1].size > q && (a4[f - 1].pos = q - a4[f - 1].size), a4.splice(f, 1), w = true);
            }
            k.push.apply(k, p);
            f = 0;
            a4.some(function(c2) {
              var e2 = 0;
              return (c2.targets || []).some(function() {
                k[f].pos = c2.pos + e2;
                if ("undefined" !== typeof n && Math.abs(k[f].pos - k[f].target) > n)
                  return k.slice(0, f + 1).forEach(function(c3) {
                    return delete c3.pos;
                  }), k.reducedLen = (k.reducedLen || q) - 0.1 * q, k.reducedLen > 0.1 * q && u(k, q, n), true;
                e2 += k[f].size;
                f++;
                return false;
              });
            });
            F(k, h);
            return k;
          }
          a3.distribute = u;
        })(y || (y = {}));
        return y;
      });
      M(a, "Core/Renderer/SVG/SVGElement.js", [a["Core/Animation/AnimationUtilities.js"], a["Core/Renderer/HTML/AST.js"], a["Core/Color/Color.js"], a["Core/Globals.js"], a["Core/Utilities.js"]], function(a2, u, z, F, y) {
        var v = a2.animate, H = a2.animObject, A = a2.stop, q = F.deg2rad, n = F.doc, k = F.noop, e = F.svg, c = F.SVG_NS, h = F.win, f = y.addEvent, w = y.attr, p = y.createElement, B = y.css, t = y.defined, J = y.erase, C = y.extend, r = y.fireEvent, l = y.isArray, b = y.isFunction, g = y.isNumber, d = y.isString, m = y.merge, D = y.objectEach, x = y.pick, I = y.pInt, P = y.syncTimeout, S = y.uniqueKey;
        a2 = function() {
          function a3() {
            this.element = void 0;
            this.onEvents = {};
            this.opacity = 1;
            this.renderer = void 0;
            this.SVG_NS = c;
            this.symbolCustomAttribs = "x y width height r start end innerR anchorX anchorY rounded".split(" ");
          }
          a3.prototype._defaultGetter = function(b2) {
            b2 = x(this[b2 + "Value"], this[b2], this.element ? this.element.getAttribute(b2) : null, 0);
            /^[\-0-9\.]+$/.test(b2) && (b2 = parseFloat(b2));
            return b2;
          };
          a3.prototype._defaultSetter = function(b2, d2, c2) {
            c2.setAttribute(d2, b2);
          };
          a3.prototype.add = function(b2) {
            var d2 = this.renderer, c2 = this.element;
            b2 && (this.parentGroup = b2);
            this.parentInverted = b2 && b2.inverted;
            "undefined" !== typeof this.textStr && "text" === this.element.nodeName && d2.buildText(this);
            this.added = true;
            if (!b2 || b2.handleZ || this.zIndex)
              var g2 = this.zIndexSetter();
            g2 || (b2 ? b2.element : d2.box).appendChild(c2);
            if (this.onAdd)
              this.onAdd();
            return this;
          };
          a3.prototype.addClass = function(b2, d2) {
            var c2 = d2 ? "" : this.attr("class") || "";
            b2 = (b2 || "").split(/ /g).reduce(function(b3, d3) {
              -1 === c2.indexOf(d3) && b3.push(d3);
              return b3;
            }, c2 ? [c2] : []).join(" ");
            b2 !== c2 && this.attr("class", b2);
            return this;
          };
          a3.prototype.afterSetters = function() {
            this.doTransform && (this.updateTransform(), this.doTransform = false);
          };
          a3.prototype.align = function(b2, c2, g2) {
            var m2 = {}, L = this.renderer, e2 = L.alignedObjects, l2, a4, E;
            if (b2) {
              if (this.alignOptions = b2, this.alignByTranslate = c2, !g2 || d(g2))
                this.alignTo = l2 = g2 || "renderer", J(e2, this), e2.push(this), g2 = void 0;
            } else
              b2 = this.alignOptions, c2 = this.alignByTranslate, l2 = this.alignTo;
            g2 = x(g2, L[l2], "scrollablePlotBox" === l2 ? L.plotBox : void 0, L);
            l2 = b2.align;
            var r2 = b2.verticalAlign;
            L = (g2.x || 0) + (b2.x || 0);
            e2 = (g2.y || 0) + (b2.y || 0);
            "right" === l2 ? a4 = 1 : "center" === l2 && (a4 = 2);
            a4 && (L += (g2.width - (b2.width || 0)) / a4);
            m2[c2 ? "translateX" : "x"] = Math.round(L);
            "bottom" === r2 ? E = 1 : "middle" === r2 && (E = 2);
            E && (e2 += (g2.height - (b2.height || 0)) / E);
            m2[c2 ? "translateY" : "y"] = Math.round(e2);
            this[this.placed ? "animate" : "attr"](m2);
            this.placed = true;
            this.alignAttr = m2;
            return this;
          };
          a3.prototype.alignSetter = function(b2) {
            var d2 = { left: "start", center: "middle", right: "end" };
            d2[b2] && (this.alignValue = b2, this.element.setAttribute(
              "text-anchor",
              d2[b2]
            ));
          };
          a3.prototype.animate = function(b2, d2, c2) {
            var g2 = this, m2 = H(x(d2, this.renderer.globalAnimation, true));
            d2 = m2.defer;
            x(n.hidden, n.msHidden, n.webkitHidden, false) && (m2.duration = 0);
            0 !== m2.duration ? (c2 && (m2.complete = c2), P(function() {
              g2.element && v(g2, b2, m2);
            }, d2)) : (this.attr(b2, void 0, c2), D(b2, function(b3, d3) {
              m2.step && m2.step.call(this, b3, { prop: d3, pos: 1, elem: this });
            }, this));
            return this;
          };
          a3.prototype.applyTextOutline = function(b2) {
            var d2 = this.element;
            -1 !== b2.indexOf("contrast") && (b2 = b2.replace(/contrast/g, this.renderer.getContrast(d2.style.fill)));
            var g2 = b2.split(" ");
            b2 = g2[g2.length - 1];
            if ((g2 = g2[0]) && "none" !== g2 && F.svg) {
              this.fakeTS = true;
              this.ySetter = this.xSetter;
              g2 = g2.replace(/(^[\d\.]+)(.*?)$/g, function(b3, d3, c2) {
                return 2 * Number(d3) + c2;
              });
              this.removeTextOutline();
              var m2 = n.createElementNS(c, "tspan");
              w(m2, { "class": "highcharts-text-outline", fill: b2, stroke: b2, "stroke-width": g2, "stroke-linejoin": "round" });
              [].forEach.call(d2.childNodes, function(b3) {
                var d3 = b3.cloneNode(true);
                d3.removeAttribute && ["fill", "stroke", "stroke-width", "stroke"].forEach(function(b4) {
                  return d3.removeAttribute(b4);
                });
                m2.appendChild(d3);
              });
              var e2 = n.createElementNS(c, "tspan");
              e2.textContent = "​";
              ["x", "y"].forEach(function(b3) {
                var c2 = d2.getAttribute(b3);
                c2 && e2.setAttribute(b3, c2);
              });
              m2.appendChild(e2);
              d2.insertBefore(m2, d2.firstChild);
            }
          };
          a3.prototype.attr = function(b2, d2, c2, g2) {
            var m2 = this.element, e2 = this.symbolCustomAttribs, L, l2 = this, E, a4;
            if ("string" === typeof b2 && "undefined" !== typeof d2) {
              var K = b2;
              b2 = {};
              b2[K] = d2;
            }
            "string" === typeof b2 ? l2 = (this[b2 + "Getter"] || this._defaultGetter).call(this, b2, m2) : (D(b2, function(d3, c3) {
              E = false;
              g2 || A(this, c3);
              this.symbolName && -1 !== e2.indexOf(c3) && (L || (this.symbolAttr(b2), L = true), E = true);
              !this.rotation || "x" !== c3 && "y" !== c3 || (this.doTransform = true);
              E || (a4 = this[c3 + "Setter"] || this._defaultSetter, a4.call(this, d3, c3, m2), !this.styledMode && this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(c3) && this.updateShadows(c3, d3, a4));
            }, this), this.afterSetters());
            c2 && c2.call(this);
            return l2;
          };
          a3.prototype.clip = function(b2) {
            return this.attr("clip-path", b2 ? "url(" + this.renderer.url + "#" + b2.id + ")" : "none");
          };
          a3.prototype.crisp = function(b2, d2) {
            d2 = d2 || b2.strokeWidth || 0;
            var c2 = Math.round(d2) % 2 / 2;
            b2.x = Math.floor(b2.x || this.x || 0) + c2;
            b2.y = Math.floor(b2.y || this.y || 0) + c2;
            b2.width = Math.floor((b2.width || this.width || 0) - 2 * c2);
            b2.height = Math.floor((b2.height || this.height || 0) - 2 * c2);
            t(b2.strokeWidth) && (b2.strokeWidth = d2);
            return b2;
          };
          a3.prototype.complexColor = function(b2, d2, c2) {
            var g2 = this.renderer, e2, L, a4, h2, E, x2, p2, f2, k2, w2, B2 = [], I2;
            r(this.renderer, "complexColor", { args: arguments }, function() {
              b2.radialGradient ? L = "radialGradient" : b2.linearGradient && (L = "linearGradient");
              if (L) {
                a4 = b2[L];
                E = g2.gradients;
                x2 = b2.stops;
                k2 = c2.radialReference;
                l(a4) && (b2[L] = a4 = { x1: a4[0], y1: a4[1], x2: a4[2], y2: a4[3], gradientUnits: "userSpaceOnUse" });
                "radialGradient" === L && k2 && !t(a4.gradientUnits) && (h2 = a4, a4 = m(a4, g2.getRadialAttr(k2, h2), { gradientUnits: "userSpaceOnUse" }));
                D(a4, function(b3, d3) {
                  "id" !== d3 && B2.push(d3, b3);
                });
                D(x2, function(b3) {
                  B2.push(b3);
                });
                B2 = B2.join(",");
                if (E[B2])
                  w2 = E[B2].attr("id");
                else {
                  a4.id = w2 = S();
                  var K = E[B2] = g2.createElement(L).attr(a4).add(g2.defs);
                  K.radAttr = h2;
                  K.stops = [];
                  x2.forEach(function(b3) {
                    0 === b3[1].indexOf("rgba") ? (e2 = z.parse(b3[1]), p2 = e2.get("rgb"), f2 = e2.get("a")) : (p2 = b3[1], f2 = 1);
                    b3 = g2.createElement("stop").attr({
                      offset: b3[0],
                      "stop-color": p2,
                      "stop-opacity": f2
                    }).add(K);
                    K.stops.push(b3);
                  });
                }
                I2 = "url(" + g2.url + "#" + w2 + ")";
                c2.setAttribute(d2, I2);
                c2.gradient = B2;
                b2.toString = function() {
                  return I2;
                };
              }
            });
          };
          a3.prototype.css = function(b2) {
            var d2 = this.styles, c2 = {}, g2 = this.element, m2 = ["textOutline", "textOverflow", "width"], a4 = "", l2 = !d2;
            b2 && b2.color && (b2.fill = b2.color);
            d2 && D(b2, function(b3, g3) {
              d2 && d2[g3] !== b3 && (c2[g3] = b3, l2 = true);
            });
            if (l2) {
              d2 && (b2 = C(d2, c2));
              if (b2) {
                if (null === b2.width || "auto" === b2.width)
                  delete this.textWidth;
                else if ("text" === g2.nodeName.toLowerCase() && b2.width)
                  var r2 = this.textWidth = I(b2.width);
              }
              this.styles = b2;
              r2 && !e && this.renderer.forExport && delete b2.width;
              if (g2.namespaceURI === this.SVG_NS) {
                var E = function(b3, d3) {
                  return "-" + d3.toLowerCase();
                };
                D(b2, function(b3, d3) {
                  -1 === m2.indexOf(d3) && (a4 += d3.replace(/([A-Z])/g, E) + ":" + b3 + ";");
                });
                a4 && w(g2, "style", a4);
              } else
                B(g2, b2);
              this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), b2 && b2.textOutline && this.applyTextOutline(b2.textOutline));
            }
            return this;
          };
          a3.prototype.dashstyleSetter = function(b2) {
            var d2 = this["stroke-width"];
            "inherit" === d2 && (d2 = 1);
            if (b2 = b2 && b2.toLowerCase()) {
              var c2 = b2.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
              for (b2 = c2.length; b2--; )
                c2[b2] = "" + I(c2[b2]) * x(d2, NaN);
              b2 = c2.join(",").replace(/NaN/g, "none");
              this.element.setAttribute("stroke-dasharray", b2);
            }
          };
          a3.prototype.destroy = function() {
            var b2 = this, d2 = b2.element || {}, c2 = b2.renderer, g2 = d2.ownerSVGElement, m2 = c2.isSVG && "SPAN" === d2.nodeName && b2.parentGroup || void 0;
            d2.onclick = d2.onmouseout = d2.onmouseover = d2.onmousemove = d2.point = null;
            A(b2);
            if (b2.clipPath && g2) {
              var e2 = b2.clipPath;
              [].forEach.call(g2.querySelectorAll("[clip-path],[CLIP-PATH]"), function(b3) {
                -1 < b3.getAttribute("clip-path").indexOf(e2.element.id) && b3.removeAttribute("clip-path");
              });
              b2.clipPath = e2.destroy();
            }
            if (b2.stops) {
              for (g2 = 0; g2 < b2.stops.length; g2++)
                b2.stops[g2].destroy();
              b2.stops.length = 0;
              b2.stops = void 0;
            }
            b2.safeRemoveChild(d2);
            for (c2.styledMode || b2.destroyShadows(); m2 && m2.div && 0 === m2.div.childNodes.length; )
              d2 = m2.parentGroup, b2.safeRemoveChild(m2.div), delete m2.div, m2 = d2;
            b2.alignTo && J(c2.alignedObjects, b2);
            D(b2, function(d3, c3) {
              b2[c3] && b2[c3].parentGroup === b2 && b2[c3].destroy && b2[c3].destroy();
              delete b2[c3];
            });
          };
          a3.prototype.destroyShadows = function() {
            (this.shadows || []).forEach(function(b2) {
              this.safeRemoveChild(b2);
            }, this);
            this.shadows = void 0;
          };
          a3.prototype.destroyTextPath = function(b2, d2) {
            var c2 = b2.getElementsByTagName("text")[0];
            if (c2) {
              if (c2.removeAttribute("dx"), c2.removeAttribute("dy"), d2.element.setAttribute("id", ""), this.textPathWrapper && c2.getElementsByTagName("textPath").length) {
                for (b2 = this.textPathWrapper.element.childNodes; b2.length; )
                  c2.appendChild(b2[0]);
                c2.removeChild(this.textPathWrapper.element);
              }
            } else if (b2.getAttribute("dx") || b2.getAttribute("dy"))
              b2.removeAttribute("dx"), b2.removeAttribute("dy");
            this.textPathWrapper && (this.textPathWrapper = this.textPathWrapper.destroy());
          };
          a3.prototype.dSetter = function(b2, d2, c2) {
            l(b2) && ("string" === typeof b2[0] && (b2 = this.renderer.pathToSegments(b2)), this.pathArray = b2, b2 = b2.reduce(function(b3, d3, c3) {
              return d3 && d3.join ? (c3 ? b3 + " " : "") + d3.join(" ") : (d3 || "").toString();
            }, ""));
            /(NaN| {2}|^$)/.test(b2) && (b2 = "M 0 0");
            this[d2] !== b2 && (c2.setAttribute(d2, b2), this[d2] = b2);
          };
          a3.prototype.fadeOut = function(b2) {
            var d2 = this;
            d2.animate({ opacity: 0 }, { duration: x(b2, 150), complete: function() {
              d2.attr({ y: -9999 }).hide();
            } });
          };
          a3.prototype.fillSetter = function(b2, d2, c2) {
            "string" === typeof b2 ? c2.setAttribute(d2, b2) : b2 && this.complexColor(b2, d2, c2);
          };
          a3.prototype.getBBox = function(d2, c2) {
            var g2 = this.renderer, m2 = this.element, e2 = this.styles, l2 = this.textStr, r2 = g2.cache, h2 = g2.cacheKeys, E = m2.namespaceURI === this.SVG_NS;
            c2 = x(c2, this.rotation, 0);
            var p2 = g2.styledMode ? m2 && a3.prototype.getStyle.call(m2, "font-size") : e2 && e2.fontSize, f2;
            if (t(l2)) {
              var D2 = l2.toString();
              -1 === D2.indexOf("<") && (D2 = D2.replace(/[0-9]/g, "0"));
              D2 += ["", c2, p2, this.textWidth, e2 && e2.textOverflow, e2 && e2.fontWeight].join();
            }
            D2 && !d2 && (f2 = r2[D2]);
            if (!f2) {
              if (E || g2.forExport) {
                try {
                  var k2 = this.fakeTS && function(b2) {
                    var d3 = m2.querySelector(".highcharts-text-outline");
                    d3 && B(d3, { display: b2 });
                  };
                  b(k2) && k2("none");
                  f2 = m2.getBBox ? C({}, m2.getBBox()) : { width: m2.offsetWidth, height: m2.offsetHeight };
                  b(k2) && k2("");
                } catch (X) {
                  "";
                }
                if (!f2 || 0 > f2.width)
                  f2 = {
                    width: 0,
                    height: 0
                  };
              } else
                f2 = this.htmlGetBBox();
              g2.isSVG && (d2 = f2.width, g2 = f2.height, E && (f2.height = g2 = { "11px,17": 14, "13px,20": 16 }[(p2 || "") + "," + Math.round(g2)] || g2), c2 && (E = c2 * q, f2.width = Math.abs(g2 * Math.sin(E)) + Math.abs(d2 * Math.cos(E)), f2.height = Math.abs(g2 * Math.cos(E)) + Math.abs(d2 * Math.sin(E))));
              if (D2 && ("" === l2 || 0 < f2.height)) {
                for (; 250 < h2.length; )
                  delete r2[h2.shift()];
                r2[D2] || h2.push(D2);
                r2[D2] = f2;
              }
            }
            return f2;
          };
          a3.prototype.getStyle = function(b2) {
            return h.getComputedStyle(this.element || this, "").getPropertyValue(b2);
          };
          a3.prototype.hasClass = function(b2) {
            return -1 !== ("" + this.attr("class")).split(" ").indexOf(b2);
          };
          a3.prototype.hide = function(b2) {
            b2 ? this.attr({ y: -9999 }) : this.attr({ visibility: "hidden" });
            return this;
          };
          a3.prototype.htmlGetBBox = function() {
            return { height: 0, width: 0, x: 0, y: 0 };
          };
          a3.prototype.init = function(b2, d2) {
            this.element = "span" === d2 ? p(d2) : n.createElementNS(this.SVG_NS, d2);
            this.renderer = b2;
            r(this, "afterInit");
          };
          a3.prototype.invert = function(b2) {
            this.inverted = b2;
            this.updateTransform();
            return this;
          };
          a3.prototype.on = function(b2, d2) {
            var c2 = this.onEvents;
            if (c2[b2])
              c2[b2]();
            c2[b2] = f(
              this.element,
              b2,
              d2
            );
            return this;
          };
          a3.prototype.opacitySetter = function(b2, d2, c2) {
            this.opacity = b2 = Number(Number(b2).toFixed(3));
            c2.setAttribute(d2, b2);
          };
          a3.prototype.removeClass = function(b2) {
            return this.attr("class", ("" + this.attr("class")).replace(d(b2) ? new RegExp("(^| )" + b2 + "( |$)") : b2, " ").replace(/ +/g, " ").trim());
          };
          a3.prototype.removeTextOutline = function() {
            var b2 = this.element.querySelector("tspan.highcharts-text-outline");
            b2 && this.safeRemoveChild(b2);
          };
          a3.prototype.safeRemoveChild = function(b2) {
            var d2 = b2.parentNode;
            d2 && d2.removeChild(b2);
          };
          a3.prototype.setRadialReference = function(b2) {
            var d2 = this.element.gradient && this.renderer.gradients[this.element.gradient];
            this.element.radialReference = b2;
            d2 && d2.radAttr && d2.animate(this.renderer.getRadialAttr(b2, d2.radAttr));
            return this;
          };
          a3.prototype.setTextPath = function(b2, d2) {
            var c2 = this.element, e2 = this.text ? this.text.element : c2, a4 = { textAnchor: "text-anchor" }, l2 = false, r2 = this.textPathWrapper, x2 = !r2;
            d2 = m(true, { enabled: true, attributes: { dy: -5, startOffset: "50%", textAnchor: "middle" } }, d2);
            var E = u.filterUserAttributes(d2.attributes);
            if (b2 && d2 && d2.enabled) {
              r2 && null === r2.element.parentNode ? (x2 = true, r2 = r2.destroy()) : r2 && this.removeTextOutline.call(r2.parentGroup);
              this.options && this.options.padding && (E.dx = -this.options.padding);
              r2 || (this.textPathWrapper = r2 = this.renderer.createElement("textPath"), l2 = true);
              var p2 = r2.element;
              (d2 = b2.element.getAttribute("id")) || b2.element.setAttribute("id", d2 = S());
              if (x2)
                for (e2.setAttribute("y", 0), g(E.dx) && e2.setAttribute("x", -E.dx), b2 = [].slice.call(e2.childNodes), x2 = 0; x2 < b2.length; x2++) {
                  var f2 = b2[x2];
                  f2.nodeType !== h.Node.TEXT_NODE && "tspan" !== f2.nodeName || p2.appendChild(f2);
                }
              l2 && r2 && r2.add({ element: e2 });
              p2.setAttributeNS("http://www.w3.org/1999/xlink", "href", this.renderer.url + "#" + d2);
              t(E.dy) && (p2.parentNode.setAttribute("dy", E.dy), delete E.dy);
              t(E.dx) && (p2.parentNode.setAttribute("dx", E.dx), delete E.dx);
              D(E, function(b3, d3) {
                p2.setAttribute(a4[d3] || d3, b3);
              });
              c2.removeAttribute("transform");
              this.removeTextOutline.call(r2);
              this.text && !this.renderer.styledMode && this.attr({ fill: "none", "stroke-width": 0 });
              this.applyTextOutline = this.updateTransform = k;
            } else
              r2 && (delete this.updateTransform, delete this.applyTextOutline, this.destroyTextPath(c2, b2), this.updateTransform(), this.options && this.options.rotation && this.applyTextOutline(this.options.style.textOutline));
            return this;
          };
          a3.prototype.shadow = function(b2, d2, c2) {
            var g2 = [], m2 = this.element, e2 = this.oldShadowOptions, a4 = { color: "#000000", offsetX: this.parentInverted ? -1 : 1, offsetY: this.parentInverted ? -1 : 1, opacity: 0.15, width: 3 }, l2 = false, E;
            true === b2 ? E = a4 : "object" === typeof b2 && (E = C(a4, b2));
            E && (E && e2 && D(E, function(b3, d3) {
              b3 !== e2[d3] && (l2 = true);
            }), l2 && this.destroyShadows(), this.oldShadowOptions = E);
            if (!E)
              this.destroyShadows();
            else if (!this.shadows) {
              var L = E.opacity / E.width;
              var r2 = this.parentInverted ? "translate(" + E.offsetY + ", " + E.offsetX + ")" : "translate(" + E.offsetX + ", " + E.offsetY + ")";
              for (a4 = 1; a4 <= E.width; a4++) {
                var h2 = m2.cloneNode(false);
                var x2 = 2 * E.width + 1 - 2 * a4;
                w(h2, { stroke: b2.color || "#000000", "stroke-opacity": L * a4, "stroke-width": x2, transform: r2, fill: "none" });
                h2.setAttribute("class", (h2.getAttribute("class") || "") + " highcharts-shadow");
                c2 && (w(h2, "height", Math.max(w(h2, "height") - x2, 0)), h2.cutHeight = x2);
                d2 ? d2.element.appendChild(h2) : m2.parentNode && m2.parentNode.insertBefore(h2, m2);
                g2.push(h2);
              }
              this.shadows = g2;
            }
            return this;
          };
          a3.prototype.show = function(b2) {
            return this.attr({ visibility: b2 ? "inherit" : "visible" });
          };
          a3.prototype.strokeSetter = function(b2, d2, c2) {
            this[d2] = b2;
            this.stroke && this["stroke-width"] ? (a3.prototype.fillSetter.call(this, this.stroke, "stroke", c2), c2.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = true) : "stroke-width" === d2 && 0 === b2 && this.hasStroke ? (c2.removeAttribute("stroke"), this.hasStroke = false) : this.renderer.styledMode && this["stroke-width"] && (c2.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = true);
          };
          a3.prototype.strokeWidth = function() {
            if (!this.renderer.styledMode)
              return this["stroke-width"] || 0;
            var b2 = this.getStyle("stroke-width"), d2 = 0;
            if (b2.indexOf("px") === b2.length - 2)
              d2 = I(b2);
            else if ("" !== b2) {
              var g2 = n.createElementNS(c, "rect");
              w(g2, { width: b2, "stroke-width": 0 });
              this.element.parentNode.appendChild(g2);
              d2 = g2.getBBox().width;
              g2.parentNode.removeChild(g2);
            }
            return d2;
          };
          a3.prototype.symbolAttr = function(b2) {
            var d2 = this;
            "x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function(c2) {
              d2[c2] = x(b2[c2], d2[c2]);
            });
            d2.attr({ d: d2.renderer.symbols[d2.symbolName](d2.x, d2.y, d2.width, d2.height, d2) });
          };
          a3.prototype.textSetter = function(b2) {
            b2 !== this.textStr && (delete this.textPxLength, this.textStr = b2, this.added && this.renderer.buildText(this));
          };
          a3.prototype.titleSetter = function(b2) {
            var d2 = this.element, c2 = d2.getElementsByTagName("title")[0] || n.createElementNS(this.SVG_NS, "title");
            d2.insertBefore ? d2.insertBefore(c2, d2.firstChild) : d2.appendChild(c2);
            c2.textContent = String(x(b2, "")).replace(/<[^>]*>/g, "").replace(/&lt;/g, "<").replace(
              /&gt;/g,
              ">"
            );
          };
          a3.prototype.toFront = function() {
            var b2 = this.element;
            b2.parentNode.appendChild(b2);
            return this;
          };
          a3.prototype.translate = function(b2, d2) {
            return this.attr({ translateX: b2, translateY: d2 });
          };
          a3.prototype.updateShadows = function(b2, d2, c2) {
            var g2 = this.shadows;
            if (g2)
              for (var m2 = g2.length; m2--; )
                c2.call(g2[m2], "height" === b2 ? Math.max(d2 - (g2[m2].cutHeight || 0), 0) : "d" === b2 ? this.d : d2, b2, g2[m2]);
          };
          a3.prototype.updateTransform = function() {
            var b2 = this.scaleX, d2 = this.scaleY, c2 = this.inverted, g2 = this.rotation, m2 = this.matrix, e2 = this.element, a4 = this.translateX || 0, l2 = this.translateY || 0;
            c2 && (a4 += this.width, l2 += this.height);
            a4 = ["translate(" + a4 + "," + l2 + ")"];
            t(m2) && a4.push("matrix(" + m2.join(",") + ")");
            c2 ? a4.push("rotate(90) scale(-1,1)") : g2 && a4.push("rotate(" + g2 + " " + x(this.rotationOriginX, e2.getAttribute("x"), 0) + " " + x(this.rotationOriginY, e2.getAttribute("y") || 0) + ")");
            (t(b2) || t(d2)) && a4.push("scale(" + x(b2, 1) + " " + x(d2, 1) + ")");
            a4.length && e2.setAttribute("transform", a4.join(" "));
          };
          a3.prototype.visibilitySetter = function(b2, d2, c2) {
            "inherit" === b2 ? c2.removeAttribute(d2) : this[d2] !== b2 && c2.setAttribute(
              d2,
              b2
            );
            this[d2] = b2;
          };
          a3.prototype.xGetter = function(b2) {
            "circle" === this.element.nodeName && ("x" === b2 ? b2 = "cx" : "y" === b2 && (b2 = "cy"));
            return this._defaultGetter(b2);
          };
          a3.prototype.zIndexSetter = function(b2, d2) {
            var c2 = this.renderer, g2 = this.parentGroup, m2 = (g2 || c2).element || c2.box, e2 = this.element;
            c2 = m2 === c2.box;
            var a4 = false;
            var l2 = this.added;
            var E;
            t(b2) ? (e2.setAttribute("data-z-index", b2), b2 = +b2, this[d2] === b2 && (l2 = false)) : t(this[d2]) && e2.removeAttribute("data-z-index");
            this[d2] = b2;
            if (l2) {
              (b2 = this.zIndex) && g2 && (g2.handleZ = true);
              d2 = m2.childNodes;
              for (E = d2.length - 1; 0 <= E && !a4; E--) {
                g2 = d2[E];
                l2 = g2.getAttribute("data-z-index");
                var r2 = !t(l2);
                if (g2 !== e2) {
                  if (0 > b2 && r2 && !c2 && !E)
                    m2.insertBefore(e2, d2[E]), a4 = true;
                  else if (I(l2) <= b2 || r2 && (!t(b2) || 0 <= b2))
                    m2.insertBefore(e2, d2[E + 1] || null), a4 = true;
                }
              }
              a4 || (m2.insertBefore(e2, d2[c2 ? 3 : 0] || null), a4 = true);
            }
            return a4;
          };
          return a3;
        }();
        a2.prototype["stroke-widthSetter"] = a2.prototype.strokeSetter;
        a2.prototype.yGetter = a2.prototype.xGetter;
        a2.prototype.matrixSetter = a2.prototype.rotationOriginXSetter = a2.prototype.rotationOriginYSetter = a2.prototype.rotationSetter = a2.prototype.scaleXSetter = a2.prototype.scaleYSetter = a2.prototype.translateXSetter = a2.prototype.translateYSetter = a2.prototype.verticalAlignSetter = function(b2, d2) {
          this[d2] = b2;
          this.doTransform = true;
        };
        "";
        return a2;
      });
      M(a, "Core/Renderer/RendererRegistry.js", [a["Core/Globals.js"]], function(a2) {
        var v;
        (function(v2) {
          v2.rendererTypes = {};
          var u;
          v2.getRendererType = function(a3) {
            void 0 === a3 && (a3 = u);
            return v2.rendererTypes[a3] || v2.rendererTypes[u];
          };
          v2.registerRendererType = function(y, z, H) {
            v2.rendererTypes[y] = z;
            if (!u || H)
              u = y, a2.Renderer = z;
          };
        })(v || (v = {}));
        return v;
      });
      M(
        a,
        "Core/Renderer/SVG/SVGLabel.js",
        [a["Core/Renderer/SVG/SVGElement.js"], a["Core/Utilities.js"]],
        function(a2, u) {
          var v = this && this.__extends || /* @__PURE__ */ function() {
            var a3 = function(k, e) {
              a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, e2) {
                c.__proto__ = e2;
              } || function(c, e2) {
                for (var a4 in e2)
                  e2.hasOwnProperty(a4) && (c[a4] = e2[a4]);
              };
              return a3(k, e);
            };
            return function(k, e) {
              function c() {
                this.constructor = k;
              }
              a3(k, e);
              k.prototype = null === e ? Object.create(e) : (c.prototype = e.prototype, new c());
            };
          }(), F = u.defined, y = u.extend, G = u.isNumber, H = u.merge, A = u.pick, q = u.removeEvent;
          return function(n) {
            function k(e, c, a3, f, w, p, B, t, J, C) {
              var r = n.call(this) || this;
              r.paddingLeftSetter = r.paddingSetter;
              r.paddingRightSetter = r.paddingSetter;
              r.init(e, "g");
              r.textStr = c;
              r.x = a3;
              r.y = f;
              r.anchorX = p;
              r.anchorY = B;
              r.baseline = J;
              r.className = C;
              r.addClass("button" === C ? "highcharts-no-tooltip" : "highcharts-label");
              C && r.addClass("highcharts-" + C);
              r.text = e.text(void 0, 0, 0, t).attr({ zIndex: 1 });
              var l;
              "string" === typeof w && ((l = /^url\((.*?)\)$/.test(w)) || r.renderer.symbols[w]) && (r.symbolKey = w);
              r.bBox = k.emptyBBox;
              r.padding = 3;
              r.baselineOffset = 0;
              r.needsBox = e.styledMode || l;
              r.deferredAttr = {};
              r.alignFactor = 0;
              return r;
            }
            v(k, n);
            k.prototype.alignSetter = function(e) {
              e = { left: 0, center: 0.5, right: 1 }[e];
              e !== this.alignFactor && (this.alignFactor = e, this.bBox && G(this.xSetting) && this.attr({ x: this.xSetting }));
            };
            k.prototype.anchorXSetter = function(e, c) {
              this.anchorX = e;
              this.boxAttr(c, Math.round(e) - this.getCrispAdjust() - this.xSetting);
            };
            k.prototype.anchorYSetter = function(e, c) {
              this.anchorY = e;
              this.boxAttr(c, e - this.ySetting);
            };
            k.prototype.boxAttr = function(e, c) {
              this.box ? this.box.attr(e, c) : this.deferredAttr[e] = c;
            };
            k.prototype.css = function(e) {
              if (e) {
                var c = {};
                e = H(e);
                k.textProps.forEach(function(a3) {
                  "undefined" !== typeof e[a3] && (c[a3] = e[a3], delete e[a3]);
                });
                this.text.css(c);
                var h = "width" in c;
                "fontSize" in c || "fontWeight" in c ? this.updateTextPadding() : h && this.updateBoxSize();
              }
              return a2.prototype.css.call(this, e);
            };
            k.prototype.destroy = function() {
              q(this.element, "mouseenter");
              q(this.element, "mouseleave");
              this.text && this.text.destroy();
              this.box && (this.box = this.box.destroy());
              a2.prototype.destroy.call(this);
            };
            k.prototype.fillSetter = function(e, c) {
              e && (this.needsBox = true);
              this.fill = e;
              this.boxAttr(c, e);
            };
            k.prototype.getBBox = function() {
              this.textStr && 0 === this.bBox.width && 0 === this.bBox.height && this.updateBoxSize();
              var e = this.padding, c = A(this.paddingLeft, e);
              return { width: this.width, height: this.height, x: this.bBox.x - c, y: this.bBox.y - e };
            };
            k.prototype.getCrispAdjust = function() {
              return this.renderer.styledMode && this.box ? this.box.strokeWidth() % 2 / 2 : (this["stroke-width"] ? parseInt(
                this["stroke-width"],
                10
              ) : 0) % 2 / 2;
            };
            k.prototype.heightSetter = function(e) {
              this.heightSetting = e;
            };
            k.prototype.onAdd = function() {
              var e = this.textStr;
              this.text.add(this);
              this.attr({ text: F(e) ? e : "", x: this.x, y: this.y });
              this.box && F(this.anchorX) && this.attr({ anchorX: this.anchorX, anchorY: this.anchorY });
            };
            k.prototype.paddingSetter = function(e, c) {
              G(e) ? e !== this[c] && (this[c] = e, this.updateTextPadding()) : this[c] = void 0;
            };
            k.prototype.rSetter = function(e, c) {
              this.boxAttr(c, e);
            };
            k.prototype.shadow = function(e) {
              e && !this.renderer.styledMode && (this.updateBoxSize(), this.box && this.box.shadow(e));
              return this;
            };
            k.prototype.strokeSetter = function(e, c) {
              this.stroke = e;
              this.boxAttr(c, e);
            };
            k.prototype["stroke-widthSetter"] = function(e, c) {
              e && (this.needsBox = true);
              this["stroke-width"] = e;
              this.boxAttr(c, e);
            };
            k.prototype["text-alignSetter"] = function(e) {
              this.textAlign = e;
            };
            k.prototype.textSetter = function(e) {
              "undefined" !== typeof e && this.text.attr({ text: e });
              this.updateTextPadding();
            };
            k.prototype.updateBoxSize = function() {
              var e = this.text.element.style, c = {}, a3 = this.padding, f = this.bBox = G(this.widthSetting) && G(this.heightSetting) && !this.textAlign || !F(this.text.textStr) ? k.emptyBBox : this.text.getBBox();
              this.width = this.getPaddedWidth();
              this.height = (this.heightSetting || f.height || 0) + 2 * a3;
              e = this.renderer.fontMetrics(e && e.fontSize, this.text);
              this.baselineOffset = a3 + Math.min((this.text.firstLineMetrics || e).b, f.height || Infinity);
              this.heightSetting && (this.baselineOffset += (this.heightSetting - e.h) / 2);
              this.needsBox && (this.box || (a3 = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect(), a3.addClass(("button" === this.className ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), a3.add(this)), a3 = this.getCrispAdjust(), c.x = a3, c.y = (this.baseline ? -this.baselineOffset : 0) + a3, c.width = Math.round(this.width), c.height = Math.round(this.height), this.box.attr(y(c, this.deferredAttr)), this.deferredAttr = {});
            };
            k.prototype.updateTextPadding = function() {
              var a3 = this.text;
              this.updateBoxSize();
              var c = this.baseline ? 0 : this.baselineOffset, h = A(this.paddingLeft, this.padding);
              F(this.widthSetting) && this.bBox && ("center" === this.textAlign || "right" === this.textAlign) && (h += { center: 0.5, right: 1 }[this.textAlign] * (this.widthSetting - this.bBox.width));
              if (h !== a3.x || c !== a3.y)
                a3.attr("x", h), a3.hasBoxWidthChanged && (this.bBox = a3.getBBox(true)), "undefined" !== typeof c && a3.attr("y", c);
              a3.x = h;
              a3.y = c;
            };
            k.prototype.widthSetter = function(a3) {
              this.widthSetting = G(a3) ? a3 : void 0;
            };
            k.prototype.getPaddedWidth = function() {
              var a3 = this.padding, c = A(this.paddingLeft, a3);
              a3 = A(this.paddingRight, a3);
              return (this.widthSetting || this.bBox.width || 0) + c + a3;
            };
            k.prototype.xSetter = function(a3) {
              this.x = a3;
              this.alignFactor && (a3 -= this.alignFactor * this.getPaddedWidth(), this["forceAnimate:x"] = true);
              this.xSetting = Math.round(a3);
              this.attr("translateX", this.xSetting);
            };
            k.prototype.ySetter = function(a3) {
              this.ySetting = this.y = Math.round(a3);
              this.attr("translateY", this.ySetting);
            };
            k.emptyBBox = { width: 0, height: 0, x: 0, y: 0 };
            k.textProps = "color direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow width".split(" ");
            return k;
          }(a2);
        }
      );
      M(
        a,
        "Core/Renderer/SVG/Symbols.js",
        [a["Core/Utilities.js"]],
        function(a2) {
          function v(a3, q, n, k, e) {
            var c = [];
            if (e) {
              var h = e.start || 0, f = H(e.r, n);
              n = H(e.r, k || n);
              var w = (e.end || 0) - 1e-3;
              k = e.innerR;
              var p = H(e.open, 1e-3 > Math.abs((e.end || 0) - h - 2 * Math.PI)), B = Math.cos(h), t = Math.sin(h), J = Math.cos(w), C = Math.sin(w);
              h = H(e.longArc, 1e-3 > w - h - Math.PI ? 0 : 1);
              c.push(["M", a3 + f * B, q + n * t], ["A", f, n, 0, h, H(e.clockwise, 1), a3 + f * J, q + n * C]);
              y(k) && c.push(p ? ["M", a3 + k * J, q + k * C] : ["L", a3 + k * J, q + k * C], ["A", k, k, 0, h, y(e.clockwise) ? 1 - e.clockwise : 0, a3 + k * B, q + k * t]);
              p || c.push(["Z"]);
            }
            return c;
          }
          function z(a3, q, n, k, e) {
            return e && e.r ? F(a3, q, n, k, e) : [["M", a3, q], ["L", a3 + n, q], ["L", a3 + n, q + k], ["L", a3, q + k], ["Z"]];
          }
          function F(a3, q, n, k, e) {
            e = e && e.r || 0;
            return [["M", a3 + e, q], ["L", a3 + n - e, q], ["C", a3 + n, q, a3 + n, q, a3 + n, q + e], ["L", a3 + n, q + k - e], ["C", a3 + n, q + k, a3 + n, q + k, a3 + n - e, q + k], ["L", a3 + e, q + k], ["C", a3, q + k, a3, q + k, a3, q + k - e], ["L", a3, q + e], ["C", a3, q, a3, q, a3 + e, q]];
          }
          var y = a2.defined, G = a2.isNumber, H = a2.pick;
          return { arc: v, callout: function(a3, q, n, k, e) {
            var c = Math.min(e && e.r || 0, n, k), h = c + 6, f = e && e.anchorX;
            e = e && e.anchorY || 0;
            var w = F(a3, q, n, k, { r: c });
            if (!G(f))
              return w;
            a3 + f >= n ? e > q + h && e < q + k - h ? w.splice(3, 1, ["L", a3 + n, e - 6], ["L", a3 + n + 6, e], ["L", a3 + n, e + 6], ["L", a3 + n, q + k - c]) : w.splice(3, 1, ["L", a3 + n, k / 2], ["L", f, e], ["L", a3 + n, k / 2], ["L", a3 + n, q + k - c]) : 0 >= a3 + f ? e > q + h && e < q + k - h ? w.splice(7, 1, ["L", a3, e + 6], ["L", a3 - 6, e], ["L", a3, e - 6], ["L", a3, q + c]) : w.splice(7, 1, ["L", a3, k / 2], ["L", f, e], ["L", a3, k / 2], ["L", a3, q + c]) : e && e > k && f > a3 + h && f < a3 + n - h ? w.splice(5, 1, ["L", f + 6, q + k], ["L", f, q + k + 6], ["L", f - 6, q + k], ["L", a3 + c, q + k]) : e && 0 > e && f > a3 + h && f < a3 + n - h && w.splice(1, 1, ["L", f - 6, q], ["L", f, q - 6], ["L", f + 6, q], ["L", n - c, q]);
            return w;
          }, circle: function(a3, q, n, k) {
            return v(a3 + n / 2, q + k / 2, n / 2, k / 2, { start: 0.5 * Math.PI, end: 2.5 * Math.PI, open: false });
          }, diamond: function(a3, q, n, k) {
            return [["M", a3 + n / 2, q], ["L", a3 + n, q + k / 2], ["L", a3 + n / 2, q + k], ["L", a3, q + k / 2], ["Z"]];
          }, rect: z, roundedRect: F, square: z, triangle: function(a3, q, n, k) {
            return [["M", a3 + n / 2, q], ["L", a3 + n, q + k], ["L", a3, q + k], ["Z"]];
          }, "triangle-down": function(a3, q, n, k) {
            return [["M", a3, q], ["L", a3 + n, q], ["L", a3 + n / 2, q + k], ["Z"]];
          } };
        }
      );
      M(a, "Core/Renderer/SVG/TextBuilder.js", [a["Core/Renderer/HTML/AST.js"], a["Core/Globals.js"], a["Core/Utilities.js"]], function(a2, u, z) {
        var v = u.doc, y = u.SVG_NS, G = u.win, H = z.attr, A = z.isString, q = z.objectEach, n = z.pick;
        return function() {
          function k(a3) {
            var c = a3.styles;
            this.renderer = a3.renderer;
            this.svgElement = a3;
            this.width = a3.textWidth;
            this.textLineHeight = c && c.lineHeight;
            this.textOutline = c && c.textOutline;
            this.ellipsis = !(!c || "ellipsis" !== c.textOverflow);
            this.noWrap = !(!c || "nowrap" !== c.whiteSpace);
            this.fontSize = c && c.fontSize;
          }
          k.prototype.buildSVG = function() {
            var e = this.svgElement, c = e.element, h = e.renderer, f = n(e.textStr, "").toString(), k2 = -1 !== f.indexOf("<"), p = c.childNodes;
            h = this.width && !e.added && h.box;
            var B = /<br.*?>/g, t = [f, this.ellipsis, this.noWrap, this.textLineHeight, this.textOutline, this.fontSize, this.width].join();
            if (t !== e.textCache) {
              e.textCache = t;
              delete e.actualWidth;
              for (t = p.length; t--; )
                c.removeChild(p[t]);
              k2 || this.ellipsis || this.width || -1 !== f.indexOf(" ") && (!this.noWrap || B.test(f)) ? "" !== f && (h && h.appendChild(c), f = new a2(f), this.modifyTree(f.nodes), f.addToDOM(e.element), this.modifyDOM(), this.ellipsis && -1 !== (c.textContent || "").indexOf("…") && e.attr(
                "title",
                this.unescapeEntities(e.textStr || "", ["&lt;", "&gt;"])
              ), h && h.removeChild(c)) : c.appendChild(v.createTextNode(this.unescapeEntities(f)));
              A(this.textOutline) && e.applyTextOutline && e.applyTextOutline(this.textOutline);
            }
          };
          k.prototype.modifyDOM = function() {
            var a3 = this, c = this.svgElement, h = H(c.element, "x");
            c.firstLineMetrics = void 0;
            for (var f; f = c.element.firstChild; )
              if (/^[\s\u200B]*$/.test(f.textContent || " "))
                c.element.removeChild(f);
              else
                break;
            [].forEach.call(c.element.querySelectorAll("tspan.highcharts-br"), function(e, p2) {
              e.nextSibling && e.previousSibling && (0 === p2 && 1 === e.previousSibling.nodeType && (c.firstLineMetrics = c.renderer.fontMetrics(void 0, e.previousSibling)), H(e, { dy: a3.getLineHeight(e.nextSibling), x: h }));
            });
            var k2 = this.width || 0;
            if (k2) {
              var p = function(e, p2) {
                var f2 = e.textContent || "", r = f2.replace(/([^\^])-/g, "$1- ").split(" "), l = !a3.noWrap && (1 < r.length || 1 < c.element.childNodes.length), b = a3.getLineHeight(p2), g = 0, d = c.actualWidth;
                if (a3.ellipsis)
                  f2 && a3.truncate(e, f2, void 0, 0, Math.max(0, k2 - parseInt(a3.fontSize || 12, 10)), function(b2, d2) {
                    return b2.substring(
                      0,
                      d2
                    ) + "…";
                  });
                else if (l) {
                  f2 = [];
                  for (l = []; p2.firstChild && p2.firstChild !== e; )
                    l.push(p2.firstChild), p2.removeChild(p2.firstChild);
                  for (; r.length; )
                    r.length && !a3.noWrap && 0 < g && (f2.push(e.textContent || ""), e.textContent = r.join(" ").replace(/- /g, "-")), a3.truncate(e, void 0, r, 0 === g ? d || 0 : 0, k2, function(b2, d2) {
                      return r.slice(0, d2).join(" ").replace(/- /g, "-");
                    }), d = c.actualWidth, g++;
                  l.forEach(function(b2) {
                    p2.insertBefore(b2, e);
                  });
                  f2.forEach(function(d2) {
                    p2.insertBefore(v.createTextNode(d2), e);
                    d2 = v.createElementNS(y, "tspan");
                    d2.textContent = "​";
                    H(d2, { dy: b, x: h });
                    p2.insertBefore(d2, e);
                  });
                }
              }, B = function(a4) {
                [].slice.call(a4.childNodes).forEach(function(e) {
                  e.nodeType === G.Node.TEXT_NODE ? p(e, a4) : (-1 !== e.className.baseVal.indexOf("highcharts-br") && (c.actualWidth = 0), B(e));
                });
              };
              B(c.element);
            }
          };
          k.prototype.getLineHeight = function(a3) {
            var c;
            a3 = a3.nodeType === G.Node.TEXT_NODE ? a3.parentElement : a3;
            this.renderer.styledMode || (c = a3 && /(px|em)$/.test(a3.style.fontSize) ? a3.style.fontSize : this.fontSize || this.renderer.style.fontSize || 12);
            return this.textLineHeight ? parseInt(
              this.textLineHeight.toString(),
              10
            ) : this.renderer.fontMetrics(c, a3 || this.svgElement.element).h;
          };
          k.prototype.modifyTree = function(a3) {
            var c = this, e = function(h, k2) {
              var p = h.attributes;
              p = void 0 === p ? {} : p;
              var f = h.children, t = h.tagName, w = c.renderer.styledMode;
              if ("b" === t || "strong" === t)
                w ? p["class"] = "highcharts-strong" : p.style = "font-weight:bold;" + (p.style || "");
              else if ("i" === t || "em" === t)
                w ? p["class"] = "highcharts-emphasized" : p.style = "font-style:italic;" + (p.style || "");
              A(p.style) && (p.style = p.style.replace(/(;| |^)color([ :])/, "$1fill$2"));
              "br" === t ? (p["class"] = "highcharts-br", h.textContent = "​", (k2 = a3[k2 + 1]) && k2.textContent && (k2.textContent = k2.textContent.replace(/^ +/gm, ""))) : "a" === t && f && f.some(function(c2) {
                return "#text" === c2.tagName;
              }) && (h.children = [{ children: f, tagName: "tspan" }]);
              "#text" !== t && "a" !== t && (h.tagName = "tspan");
              h.attributes = p;
              f && f.filter(function(c2) {
                return "#text" !== c2.tagName;
              }).forEach(e);
            };
            a3.forEach(e);
          };
          k.prototype.truncate = function(a3, c, h, f, k2, p) {
            var e = this.svgElement, t = e.renderer, w = e.rotation, n2 = [], r = h ? 1 : 0, l = (c || h || "").length, b = l, g, d = function(b2, d2) {
              d2 = d2 || b2;
              var g2 = a3.parentNode;
              if (g2 && "undefined" === typeof n2[d2])
                if (g2.getSubStringLength)
                  try {
                    n2[d2] = f + g2.getSubStringLength(0, h ? d2 + 1 : d2);
                  } catch (P) {
                    "";
                  }
                else
                  t.getSpanWidth && (a3.textContent = p(c || h, b2), n2[d2] = f + t.getSpanWidth(e, a3));
              return n2[d2];
            };
            e.rotation = 0;
            var m = d(a3.textContent.length);
            if (f + m > k2) {
              for (; r <= l; )
                b = Math.ceil((r + l) / 2), h && (g = p(h, b)), m = d(b, g && g.length - 1), r === l ? r = l + 1 : m > k2 ? l = b - 1 : r = b;
              0 === l ? a3.textContent = "" : c && l === c.length - 1 || (a3.textContent = g || p(c || h, b));
            }
            h && h.splice(0, b);
            e.actualWidth = m;
            e.rotation = w;
          };
          k.prototype.unescapeEntities = function(a3, c) {
            q(this.renderer.escapes, function(e, f) {
              c && -1 !== c.indexOf(e) || (a3 = a3.toString().replace(new RegExp(e, "g"), f));
            });
            return a3;
          };
          return k;
        }();
      });
      M(a, "Core/Renderer/SVG/SVGRenderer.js", [a["Core/Renderer/HTML/AST.js"], a["Core/Color/Color.js"], a["Core/Globals.js"], a["Core/Renderer/RendererRegistry.js"], a["Core/Renderer/SVG/SVGElement.js"], a["Core/Renderer/SVG/SVGLabel.js"], a["Core/Renderer/SVG/Symbols.js"], a["Core/Renderer/SVG/TextBuilder.js"], a["Core/Utilities.js"]], function(a2, u, z, F, y, G, H, A, q) {
        var n = z.charts, k = z.deg2rad, e = z.doc, c = z.isFirefox, h = z.isMS, f = z.isWebKit, w = z.noop, p = z.SVG_NS, B = z.symbolSizes, t = z.win, J = q.addEvent, C = q.attr, r = q.createElement, l = q.css, b = q.defined, g = q.destroyObjectProperties, d = q.extend, m = q.isArray, D = q.isNumber, x = q.isObject, I = q.isString, P = q.merge, v = q.pick, O = q.pInt, U = q.uniqueKey, Y;
        z = function() {
          function L(b2, d2, a3, c2, g2, m2, e2) {
            this.width = this.url = this.style = this.isSVG = this.imgCount = this.height = this.gradients = this.globalAnimation = this.defs = this.chartIndex = this.cacheKeys = this.cache = this.boxWrapper = this.box = this.alignedObjects = void 0;
            this.init(b2, d2, a3, c2, g2, m2, e2);
          }
          L.prototype.init = function(b2, d2, a3, g2, m2, E, L2) {
            var r2 = this.createElement("svg").attr({ version: "1.1", "class": "highcharts-root" }), K = r2.element;
            L2 || r2.css(this.getStyle(g2));
            b2.appendChild(K);
            C(b2, "dir", "ltr");
            -1 === b2.innerHTML.indexOf("xmlns") && C(K, "xmlns", this.SVG_NS);
            this.isSVG = true;
            this.box = K;
            this.boxWrapper = r2;
            this.alignedObjects = [];
            this.url = this.getReferenceURL();
            this.createElement("desc").add().element.appendChild(e.createTextNode("Created with Highcharts 9.3.3"));
            this.defs = this.createElement("defs").add();
            this.allowHTML = E;
            this.forExport = m2;
            this.styledMode = L2;
            this.gradients = {};
            this.cache = {};
            this.cacheKeys = [];
            this.imgCount = 0;
            this.setSize(d2, a3, false);
            var p2;
            c && b2.getBoundingClientRect && (d2 = function() {
              l(b2, { left: 0, top: 0 });
              p2 = b2.getBoundingClientRect();
              l(b2, { left: Math.ceil(p2.left) - p2.left + "px", top: Math.ceil(p2.top) - p2.top + "px" });
            }, d2(), this.unSubPixelFix = J(t, "resize", d2));
          };
          L.prototype.definition = function(b2) {
            return new a2([b2]).addToDOM(this.defs.element);
          };
          L.prototype.getReferenceURL = function() {
            if ((c || f) && e.getElementsByTagName("base").length) {
              if (!b(Y)) {
                var d2 = U();
                d2 = new a2([{ tagName: "svg", attributes: { width: 8, height: 8 }, children: [{ tagName: "defs", children: [{ tagName: "clipPath", attributes: { id: d2 }, children: [{ tagName: "rect", attributes: { width: 4, height: 4 } }] }] }, { tagName: "rect", attributes: { id: "hitme", width: 8, height: 8, "clip-path": "url(#" + d2 + ")", fill: "rgba(0,0,0,0.001)" } }] }]).addToDOM(e.body);
                l(d2, { position: "fixed", top: 0, left: 0, zIndex: 9e5 });
                var g2 = e.elementFromPoint(6, 6);
                Y = "hitme" === (g2 && g2.id);
                e.body.removeChild(d2);
              }
              if (Y)
                return t.location.href.split("#")[0].replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20");
            }
            return "";
          };
          L.prototype.getStyle = function(b2) {
            return this.style = d({ fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif', fontSize: "12px" }, b2);
          };
          L.prototype.setStyle = function(b2) {
            this.boxWrapper.css(this.getStyle(b2));
          };
          L.prototype.isHidden = function() {
            return !this.boxWrapper.getBBox().width;
          };
          L.prototype.destroy = function() {
            var b2 = this.defs;
            this.box = null;
            this.boxWrapper = this.boxWrapper.destroy();
            g(this.gradients || {});
            this.gradients = null;
            b2 && (this.defs = b2.destroy());
            this.unSubPixelFix && this.unSubPixelFix();
            return this.alignedObjects = null;
          };
          L.prototype.createElement = function(b2) {
            var d2 = new this.Element();
            d2.init(this, b2);
            return d2;
          };
          L.prototype.getRadialAttr = function(b2, d2) {
            return { cx: b2[0] - b2[2] / 2 + (d2.cx || 0) * b2[2], cy: b2[1] - b2[2] / 2 + (d2.cy || 0) * b2[2], r: (d2.r || 0) * b2[2] };
          };
          L.prototype.buildText = function(b2) {
            new A(b2).buildSVG();
          };
          L.prototype.getContrast = function(b2) {
            b2 = u.parse(b2).rgba;
            b2[0] *= 1;
            b2[1] *= 1.2;
            b2[2] *= 0.5;
            return 459 < b2[0] + b2[1] + b2[2] ? "#000000" : "#FFFFFF";
          };
          L.prototype.button = function(b2, c2, g2, m2, e2, l2, L2, r2, p2, x2) {
            var E = this.label(b2, c2, g2, p2, void 0, void 0, x2, void 0, "button"), f2 = this.styledMode, K = 0, D2 = e2 ? P(e2) : {};
            b2 = D2 && D2.style || {};
            D2 = a2.filterUserAttributes(D2);
            E.attr(P({ padding: 8, r: 2 }, D2));
            if (!f2) {
              D2 = P({ fill: "#f7f7f7", stroke: "#cccccc", "stroke-width": 1, style: { color: "#333333", cursor: "pointer", fontWeight: "normal" } }, { style: b2 }, D2);
              var k2 = D2.style;
              delete D2.style;
              l2 = P(D2, { fill: "#e6e6e6" }, a2.filterUserAttributes(l2 || {}));
              var N = l2.style;
              delete l2.style;
              L2 = P(D2, { fill: "#e6ebf5", style: { color: "#000000", fontWeight: "bold" } }, a2.filterUserAttributes(L2 || {}));
              var w2 = L2.style;
              delete L2.style;
              r2 = P(D2, { style: { color: "#cccccc" } }, a2.filterUserAttributes(r2 || {}));
              var t2 = r2.style;
              delete r2.style;
            }
            J(E.element, h ? "mouseover" : "mouseenter", function() {
              3 !== K && E.setState(1);
            });
            J(E.element, h ? "mouseout" : "mouseleave", function() {
              3 !== K && E.setState(K);
            });
            E.setState = function(b3) {
              1 !== b3 && (E.state = K = b3);
              E.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][b3 || 0]);
              f2 || E.attr([D2, l2, L2, r2][b3 || 0]).css([k2, N, w2, t2][b3 || 0]);
            };
            f2 || E.attr(D2).css(d({ cursor: "default" }, k2));
            return E.on("touchstart", function(b3) {
              return b3.stopPropagation();
            }).on("click", function(b3) {
              3 !== K && m2.call(E, b3);
            });
          };
          L.prototype.crispLine = function(d2, a3, c2) {
            void 0 === c2 && (c2 = "round");
            var g2 = d2[0], m2 = d2[1];
            b(g2[1]) && g2[1] === m2[1] && (g2[1] = m2[1] = Math[c2](g2[1]) - a3 % 2 / 2);
            b(g2[2]) && g2[2] === m2[2] && (g2[2] = m2[2] = Math[c2](g2[2]) + a3 % 2 / 2);
            return d2;
          };
          L.prototype.path = function(b2) {
            var a3 = this.styledMode ? {} : { fill: "none" };
            m(b2) ? a3.d = b2 : x(b2) && d(a3, b2);
            return this.createElement("path").attr(a3);
          };
          L.prototype.circle = function(b2, d2, a3) {
            b2 = x(b2) ? b2 : "undefined" === typeof b2 ? {} : { x: b2, y: d2, r: a3 };
            d2 = this.createElement("circle");
            d2.xSetter = d2.ySetter = function(b3, d3, a4) {
              a4.setAttribute("c" + d3, b3);
            };
            return d2.attr(b2);
          };
          L.prototype.arc = function(b2, d2, a3, c2, g2, m2) {
            x(b2) ? (c2 = b2, d2 = c2.y, a3 = c2.r, b2 = c2.x) : c2 = { innerR: c2, start: g2, end: m2 };
            b2 = this.symbol("arc", b2, d2, a3, a3, c2);
            b2.r = a3;
            return b2;
          };
          L.prototype.rect = function(b2, d2, a3, c2, g2, m2) {
            g2 = x(b2) ? b2.r : g2;
            var e2 = this.createElement("rect");
            b2 = x(b2) ? b2 : "undefined" === typeof b2 ? {} : { x: b2, y: d2, width: Math.max(a3, 0), height: Math.max(c2, 0) };
            this.styledMode || ("undefined" !== typeof m2 && (b2["stroke-width"] = m2, b2 = e2.crisp(b2)), b2.fill = "none");
            g2 && (b2.r = g2);
            e2.rSetter = function(b3, d3, a4) {
              e2.r = b3;
              C(a4, { rx: b3, ry: b3 });
            };
            e2.rGetter = function() {
              return e2.r || 0;
            };
            return e2.attr(b2);
          };
          L.prototype.setSize = function(b2, d2, a3) {
            this.width = b2;
            this.height = d2;
            this.boxWrapper.animate({ width: b2, height: d2 }, { step: function() {
              this.attr({ viewBox: "0 0 " + this.attr("width") + " " + this.attr("height") });
            }, duration: v(
              a3,
              true
            ) ? void 0 : 0 });
            this.alignElements();
          };
          L.prototype.g = function(b2) {
            var d2 = this.createElement("g");
            return b2 ? d2.attr({ "class": "highcharts-" + b2 }) : d2;
          };
          L.prototype.image = function(b2, d2, a3, c2, g2, m2) {
            var e2 = { preserveAspectRatio: "none" }, l2 = function(b3, d3) {
              b3.setAttributeNS ? b3.setAttributeNS("http://www.w3.org/1999/xlink", "href", d3) : b3.setAttribute("hc-svg-href", d3);
            };
            D(d2) && (e2.x = d2);
            D(a3) && (e2.y = a3);
            D(c2) && (e2.width = c2);
            D(g2) && (e2.height = g2);
            var E = this.createElement("image").attr(e2);
            d2 = function(d3) {
              l2(E.element, b2);
              m2.call(E, d3);
            };
            m2 ? (l2(
              E.element,
              "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            ), a3 = new t.Image(), J(a3, "load", d2), a3.src = b2, a3.complete && d2({})) : l2(E.element, b2);
            return E;
          };
          L.prototype.symbol = function(a3, c2, g2, m2, L2, E) {
            var p2 = this, h2 = /^url\((.*?)\)$/, x2 = h2.test(a3), f2 = !x2 && (this.symbols[a3] ? a3 : "circle"), D2 = f2 && this.symbols[f2], k2;
            if (D2) {
              "number" === typeof c2 && (k2 = D2.call(this.symbols, Math.round(c2 || 0), Math.round(g2 || 0), m2 || 0, L2 || 0, E));
              var K = this.path(k2);
              p2.styledMode || K.attr("fill", "none");
              d(K, { symbolName: f2 || void 0, x: c2, y: g2, width: m2, height: L2 });
              E && d(K, E);
            } else if (x2) {
              var w2 = a3.match(h2)[1];
              var t2 = K = this.image(w2);
              t2.imgwidth = v(B[w2] && B[w2].width, E && E.width);
              t2.imgheight = v(B[w2] && B[w2].height, E && E.height);
              var I2 = function(b2) {
                return b2.attr({ width: b2.width, height: b2.height });
              };
              ["width", "height"].forEach(function(d2) {
                t2[d2 + "Setter"] = function(d3, a4) {
                  var c3 = this["img" + a4];
                  this[a4] = d3;
                  b(c3) && (E && "within" === E.backgroundSize && this.width && this.height && (c3 = Math.round(c3 * Math.min(this.width / this.imgwidth, this.height / this.imgheight))), this.element && this.element.setAttribute(a4, c3), this.alignByTranslate || (d3 = ((this[a4] || 0) - c3) / 2, this.attr("width" === a4 ? { translateX: d3 } : { translateY: d3 })));
                };
              });
              b(c2) && t2.attr({ x: c2, y: g2 });
              t2.isImg = true;
              b(t2.imgwidth) && b(t2.imgheight) ? I2(t2) : (t2.attr({ width: 0, height: 0 }), r("img", { onload: function() {
                var b2 = n[p2.chartIndex];
                0 === this.width && (l(this, { position: "absolute", top: "-999em" }), e.body.appendChild(this));
                B[w2] = { width: this.width, height: this.height };
                t2.imgwidth = this.width;
                t2.imgheight = this.height;
                t2.element && I2(t2);
                this.parentNode && this.parentNode.removeChild(this);
                p2.imgCount--;
                if (!p2.imgCount && b2 && !b2.hasLoaded)
                  b2.onload();
              }, src: w2 }), this.imgCount++);
            }
            return K;
          };
          L.prototype.clipRect = function(b2, d2, a3, c2) {
            var g2 = U() + "-", m2 = this.createElement("clipPath").attr({ id: g2 }).add(this.defs);
            b2 = this.rect(b2, d2, a3, c2, 0).add(m2);
            b2.id = g2;
            b2.clipPath = m2;
            b2.count = 0;
            return b2;
          };
          L.prototype.text = function(d2, a3, c2, g2) {
            var m2 = {};
            if (g2 && (this.allowHTML || !this.forExport))
              return this.html(d2, a3, c2);
            m2.x = Math.round(a3 || 0);
            c2 && (m2.y = Math.round(c2));
            b(d2) && (m2.text = d2);
            d2 = this.createElement("text").attr(m2);
            if (!g2 || this.forExport && !this.allowHTML)
              d2.xSetter = function(b2, d3, a4) {
                for (var c3 = a4.getElementsByTagName("tspan"), g3 = a4.getAttribute(d3), m3 = 0, e2; m3 < c3.length; m3++)
                  e2 = c3[m3], e2.getAttribute(d3) === g3 && e2.setAttribute(d3, b2);
                a4.setAttribute(d3, b2);
              };
            return d2;
          };
          L.prototype.fontMetrics = function(b2, d2) {
            b2 = !this.styledMode && /px/.test(b2) || !t.getComputedStyle ? b2 || d2 && d2.style && d2.style.fontSize || this.style && this.style.fontSize : d2 && y.prototype.getStyle.call(d2, "font-size");
            b2 = /px/.test(b2) ? O(b2) : 12;
            d2 = 24 > b2 ? b2 + 3 : Math.round(1.2 * b2);
            return { h: d2, b: Math.round(0.8 * d2), f: b2 };
          };
          L.prototype.rotCorr = function(b2, d2, a3) {
            var c2 = b2;
            d2 && a3 && (c2 = Math.max(c2 * Math.cos(d2 * k), 4));
            return { x: -b2 / 3 * Math.sin(d2 * k), y: c2 };
          };
          L.prototype.pathToSegments = function(b2) {
            for (var d2 = [], a3 = [], c2 = { A: 8, C: 7, H: 2, L: 3, M: 3, Q: 5, S: 5, T: 3, V: 2 }, g2 = 0; g2 < b2.length; g2++)
              I(a3[0]) && D(b2[g2]) && a3.length === c2[a3[0].toUpperCase()] && b2.splice(g2, 0, a3[0].replace("M", "L").replace("m", "l")), "string" === typeof b2[g2] && (a3.length && d2.push(a3.slice(0)), a3.length = 0), a3.push(b2[g2]);
            d2.push(a3.slice(0));
            return d2;
          };
          L.prototype.label = function(b2, d2, a3, c2, g2, m2, e2, l2, L2) {
            return new G(this, b2, d2, a3, c2, g2, m2, e2, l2, L2);
          };
          L.prototype.alignElements = function() {
            this.alignedObjects.forEach(function(b2) {
              return b2.align();
            });
          };
          return L;
        }();
        d(z.prototype, { Element: y, SVG_NS: p, escapes: { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }, symbols: H, draw: w });
        F.registerRendererType("svg", z, true);
        "";
        return z;
      });
      M(a, "Core/Renderer/HTML/HTMLElement.js", [a["Core/Globals.js"], a["Core/Renderer/SVG/SVGElement.js"], a["Core/Utilities.js"]], function(a2, u, z) {
        var v = this && this.__extends || /* @__PURE__ */ function() {
          var a3 = function(c2, e2) {
            a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, c3) {
              a4.__proto__ = c3;
            } || function(a4, c3) {
              for (var e3 in c3)
                c3.hasOwnProperty(e3) && (a4[e3] = c3[e3]);
            };
            return a3(c2, e2);
          };
          return function(c2, e2) {
            function p() {
              this.constructor = c2;
            }
            a3(c2, e2);
            c2.prototype = null === e2 ? Object.create(e2) : (p.prototype = e2.prototype, new p());
          };
        }(), y = a2.isFirefox, G = a2.isMS, H = a2.isWebKit, A = a2.win, q = z.css, n = z.defined, k = z.extend, e = z.pick, c = z.pInt;
        return function(a3) {
          function h() {
            return null !== a3 && a3.apply(this, arguments) || this;
          }
          v(h, a3);
          h.compose = function(a4) {
            if (-1 === h.composedClasses.indexOf(a4)) {
              h.composedClasses.push(a4);
              var c2 = h.prototype, e2 = a4.prototype;
              e2.getSpanCorrection = c2.getSpanCorrection;
              e2.htmlCss = c2.htmlCss;
              e2.htmlGetBBox = c2.htmlGetBBox;
              e2.htmlUpdateTransform = c2.htmlUpdateTransform;
              e2.setSpanRotation = c2.setSpanRotation;
            }
            return a4;
          };
          h.prototype.getSpanCorrection = function(a4, c2, e2) {
            this.xCorr = -a4 * e2;
            this.yCorr = -c2;
          };
          h.prototype.htmlCss = function(a4) {
            var c2 = "SPAN" === this.element.tagName && a4 && "width" in a4, h2 = e(c2 && a4.width, void 0);
            if (c2) {
              delete a4.width;
              this.textWidth = h2;
              var f = true;
            }
            a4 && "ellipsis" === a4.textOverflow && (a4.whiteSpace = "nowrap", a4.overflow = "hidden");
            this.styles = k(this.styles, a4);
            q(this.element, a4);
            f && this.htmlUpdateTransform();
            return this;
          };
          h.prototype.htmlGetBBox = function() {
            var a4 = this.element;
            return { x: a4.offsetLeft, y: a4.offsetTop, width: a4.offsetWidth, height: a4.offsetHeight };
          };
          h.prototype.htmlUpdateTransform = function() {
            if (this.added) {
              var a4 = this.renderer, e2 = this.element, h2 = this.translateX || 0, f = this.translateY || 0, k2 = this.x || 0, C = this.y || 0, r = this.textAlign || "left", l = { left: 0, center: 0.5, right: 1 }[r], b = this.styles;
              b = b && b.whiteSpace;
              q(e2, { marginLeft: h2, marginTop: f });
              !a4.styledMode && this.shadows && this.shadows.forEach(function(b2) {
                q(b2, { marginLeft: h2 + 1, marginTop: f + 1 });
              });
              this.inverted && [].forEach.call(e2.childNodes, function(b2) {
                a4.invertChild(b2, e2);
              });
              if ("SPAN" === e2.tagName) {
                var g = this.rotation, d = this.textWidth && c(this.textWidth), m = [g, r, e2.innerHTML, this.textWidth, this.textAlign].join(), D = void 0;
                D = false;
                if (d !== this.oldTextWidth) {
                  if (this.textPxLength)
                    var x = this.textPxLength;
                  else
                    q(e2, { width: "", whiteSpace: b || "nowrap" }), x = e2.offsetWidth;
                  (d > this.oldTextWidth || x > d) && (/[ \-]/.test(e2.textContent || e2.innerText) || "ellipsis" === e2.style.textOverflow) && (q(e2, { width: x > d || g ? d + "px" : "auto", display: "block", whiteSpace: b || "normal" }), this.oldTextWidth = d, D = true);
                }
                this.hasBoxWidthChanged = D;
                m !== this.cTT && (D = a4.fontMetrics(e2.style.fontSize, e2).b, !n(g) || g === (this.oldRotation || 0) && r === this.oldAlign || this.setSpanRotation(g, l, D), this.getSpanCorrection(!n(g) && this.textPxLength || e2.offsetWidth, D, l, g, r));
                q(e2, { left: k2 + (this.xCorr || 0) + "px", top: C + (this.yCorr || 0) + "px" });
                this.cTT = m;
                this.oldRotation = g;
                this.oldAlign = r;
              }
            } else
              this.alignOnAdd = true;
          };
          h.prototype.setSpanRotation = function(a4, c2, e2) {
            var h2 = {}, p = G && !/Edge/.test(A.navigator.userAgent) ? "-ms-transform" : H ? "-webkit-transform" : y ? "MozTransform" : A.opera ? "-o-transform" : void 0;
            p && (h2[p] = h2.transform = "rotate(" + a4 + "deg)", h2[p + (y ? "Origin" : "-origin")] = h2.transformOrigin = 100 * c2 + "% " + e2 + "px", q(this.element, h2));
          };
          h.composedClasses = [];
          return h;
        }(u);
      });
      M(
        a,
        "Core/Renderer/HTML/HTMLRenderer.js",
        [a["Core/Renderer/HTML/AST.js"], a["Core/Renderer/SVG/SVGElement.js"], a["Core/Renderer/SVG/SVGRenderer.js"], a["Core/Utilities.js"]],
        function(a2, u, z, F) {
          var v = this && this.__extends || /* @__PURE__ */ function() {
            var a3 = function(k, e) {
              a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, e2) {
                a4.__proto__ = e2;
              } || function(a4, e2) {
                for (var c in e2)
                  e2.hasOwnProperty(c) && (a4[c] = e2[c]);
              };
              return a3(k, e);
            };
            return function(k, e) {
              function c() {
                this.constructor = k;
              }
              a3(k, e);
              k.prototype = null === e ? Object.create(e) : (c.prototype = e.prototype, new c());
            };
          }(), G = F.attr, H = F.createElement, A = F.extend, q = F.pick;
          return function(n) {
            function k() {
              return null !== n && n.apply(this, arguments) || this;
            }
            v(k, n);
            k.compose = function(a3) {
              -1 === k.composedClasses.indexOf(a3) && (k.composedClasses.push(a3), a3.prototype.html = k.prototype.html);
              return a3;
            };
            k.prototype.html = function(e, c, h) {
              var f = this.createElement("span"), k2 = f.element, p = f.renderer, n2 = p.isSVG, t = function(a3, c2) {
                ["opacity", "visibility"].forEach(function(e2) {
                  a3[e2 + "Setter"] = function(l, b, g) {
                    var d = a3.div ? a3.div.style : c2;
                    u.prototype[e2 + "Setter"].call(this, l, b, g);
                    d && (d[b] = l);
                  };
                });
                a3.addedSetters = true;
              };
              f.textSetter = function(c2) {
                c2 !== this.textStr && (delete this.bBox, delete this.oldTextWidth, a2.setElementHTML(this.element, q(c2, "")), this.textStr = c2, f.doTransform = true);
              };
              n2 && t(f, f.element.style);
              f.xSetter = f.ySetter = f.alignSetter = f.rotationSetter = function(a3, c2) {
                "align" === c2 ? f.alignValue = f.textAlign = a3 : f[c2] = a3;
                f.doTransform = true;
              };
              f.afterSetters = function() {
                this.doTransform && (this.htmlUpdateTransform(), this.doTransform = false);
              };
              f.attr({ text: e, x: Math.round(c), y: Math.round(h) }).css({ position: "absolute" });
              p.styledMode || f.css({ fontFamily: this.style.fontFamily, fontSize: this.style.fontSize });
              k2.style.whiteSpace = "nowrap";
              f.css = f.htmlCss;
              n2 && (f.add = function(a3) {
                var c2 = p.box.parentNode, e2 = [];
                if (this.parentGroup = a3) {
                  var l = a3.div;
                  if (!l) {
                    for (; a3; )
                      e2.push(a3), a3 = a3.parentGroup;
                    e2.reverse().forEach(function(b) {
                      function a4(d2, a5) {
                        b[a5] = d2;
                        "translateX" === a5 ? r.left = d2 + "px" : r.top = d2 + "px";
                        b.doTransform = true;
                      }
                      var d = G(b.element, "class"), m = b.styles || {};
                      l = b.div = b.div || H("div", d ? { className: d } : void 0, {
                        position: "absolute",
                        left: (b.translateX || 0) + "px",
                        top: (b.translateY || 0) + "px",
                        display: b.display,
                        opacity: b.opacity,
                        cursor: m.cursor,
                        pointerEvents: m.pointerEvents,
                        visibility: b.visibility
                      }, l || c2);
                      var r = l.style;
                      A(b, { classSetter: /* @__PURE__ */ function(b2) {
                        return function(d2) {
                          this.element.setAttribute("class", d2);
                          b2.className = d2;
                        };
                      }(l), on: function() {
                        e2[0].div && f.on.apply({ element: e2[0].div, onEvents: b.onEvents }, arguments);
                        return b;
                      }, translateXSetter: a4, translateYSetter: a4 });
                      b.addedSetters || t(b);
                    });
                  }
                } else
                  l = c2;
                l.appendChild(k2);
                f.added = true;
                f.alignOnAdd && f.htmlUpdateTransform();
                return f;
              });
              return f;
            };
            k.composedClasses = [];
            return k;
          }(z);
        }
      );
      M(a, "Core/Axis/AxisDefaults.js", [], function() {
        var a2;
        (function(a3) {
          a3.defaultXAxisOptions = { alignTicks: true, allowDecimals: void 0, panningEnabled: true, zIndex: 2, zoomEnabled: true, dateTimeLabelFormats: { millisecond: { main: "%H:%M:%S.%L", range: false }, second: { main: "%H:%M:%S", range: false }, minute: { main: "%H:%M", range: false }, hour: { main: "%H:%M", range: false }, day: { main: "%e. %b" }, week: { main: "%e. %b" }, month: { main: "%b '%y" }, year: { main: "%Y" } }, endOnTick: false, gridLineDashStyle: "Solid", gridZIndex: 1, labels: {
            autoRotation: void 0,
            autoRotationLimit: 80,
            distance: void 0,
            enabled: true,
            indentation: 10,
            overflow: "justify",
            padding: 5,
            reserveSpace: void 0,
            rotation: void 0,
            staggerLines: 0,
            step: 0,
            useHTML: false,
            x: 0,
            zIndex: 7,
            style: { color: "#666666", cursor: "default", fontSize: "11px" }
          }, maxPadding: 0.01, minorGridLineDashStyle: "Solid", minorTickLength: 2, minorTickPosition: "outside", minPadding: 0.01, offset: void 0, opposite: false, reversed: void 0, reversedStacks: false, showEmpty: true, showFirstLabel: true, showLastLabel: true, startOfWeek: 1, startOnTick: false, tickLength: 10, tickPixelInterval: 100, tickmarkPlacement: "between", tickPosition: "outside", title: {
            align: "middle",
            rotation: 0,
            useHTML: false,
            x: 0,
            y: 0,
            style: { color: "#666666" }
          }, type: "linear", uniqueNames: true, visible: true, minorGridLineColor: "#f2f2f2", minorGridLineWidth: 1, minorTickColor: "#999999", lineColor: "#ccd6eb", lineWidth: 1, gridLineColor: "#e6e6e6", gridLineWidth: void 0, tickColor: "#ccd6eb" };
          a3.defaultYAxisOptions = { reversedStacks: true, endOnTick: true, maxPadding: 0.05, minPadding: 0.05, tickPixelInterval: 72, showLastLabel: true, labels: { x: -8 }, startOnTick: true, title: { rotation: 270, text: "Values" }, stackLabels: {
            animation: {},
            allowOverlap: false,
            enabled: false,
            crop: true,
            overflow: "justify",
            formatter: function() {
              var a4 = this.axis.chart.numberFormatter;
              return a4(this.total, -1);
            },
            style: { color: "#000000", fontSize: "11px", fontWeight: "bold", textOutline: "1px contrast" }
          }, gridLineWidth: 1, lineWidth: 0 };
          a3.defaultLeftAxisOptions = { labels: { x: -15 }, title: { rotation: 270 } };
          a3.defaultRightAxisOptions = { labels: { x: 15 }, title: { rotation: 90 } };
          a3.defaultBottomAxisOptions = { labels: { autoRotation: [-45], x: 0 }, margin: 15, title: { rotation: 0 } };
          a3.defaultTopAxisOptions = { labels: { autoRotation: [-45], x: 0 }, margin: 15, title: { rotation: 0 } };
        })(a2 || (a2 = {}));
        return a2;
      });
      M(a, "Core/Foundation.js", [a["Core/Utilities.js"]], function(a2) {
        var v = a2.addEvent, z = a2.isFunction, F = a2.objectEach, y = a2.removeEvent, G;
        (function(a3) {
          a3.registerEventOptions = function(a4, q) {
            a4.eventOptions = a4.eventOptions || {};
            F(q.events, function(n, k) {
              a4.eventOptions[k] !== n && (a4.eventOptions[k] && (y(a4, k, a4.eventOptions[k]), delete a4.eventOptions[k]), z(n) && (a4.eventOptions[k] = n, v(a4, k, n)));
            });
          };
        })(G || (G = {}));
        return G;
      });
      M(
        a,
        "Core/Axis/Tick.js",
        [a["Core/FormatUtilities.js"], a["Core/Globals.js"], a["Core/Utilities.js"]],
        function(a2, u, z) {
          var v = u.deg2rad, y = z.clamp, G = z.correctFloat, H = z.defined, A = z.destroyObjectProperties, q = z.extend, n = z.fireEvent, k = z.isNumber, e = z.merge, c = z.objectEach, h = z.pick;
          u = function() {
            function f(a3, c2, e2, h2, f2) {
              this.isNewLabel = this.isNew = true;
              this.axis = a3;
              this.pos = c2;
              this.type = e2 || "";
              this.parameters = f2 || {};
              this.tickmarkOffset = this.parameters.tickmarkOffset;
              this.options = this.parameters.options;
              n(this, "init");
              e2 || h2 || this.addLabel();
            }
            f.prototype.addLabel = function() {
              var c2 = this, e2 = c2.axis, f2 = e2.options, t = e2.chart, J = e2.categories, C = e2.logarithmic, r = e2.names, l = c2.pos, b = h(c2.options && c2.options.labels, f2.labels), g = e2.tickPositions, d = l === g[0], m = l === g[g.length - 1], D = (!b.step || 1 === b.step) && 1 === e2.tickInterval;
              g = g.info;
              var x = c2.label, I;
              J = this.parameters.category || (J ? h(J[l], r[l], l) : l);
              C && k(J) && (J = G(C.lin2log(J)));
              if (e2.dateTime)
                if (g) {
                  var P = t.time.resolveDTLFormat(f2.dateTimeLabelFormats[!f2.grid && g.higherRanks[l] || g.unitName]);
                  var v2 = P.main;
                } else
                  k(J) && (v2 = e2.dateTime.getXDateFormat(J, f2.dateTimeLabelFormats || {}));
              c2.isFirst = d;
              c2.isLast = m;
              var O = {
                axis: e2,
                chart: t,
                dateTimeLabelFormat: v2,
                isFirst: d,
                isLast: m,
                pos: l,
                tick: c2,
                tickPositionInfo: g,
                value: J
              };
              n(this, "labelFormat", O);
              var u2 = function(d2) {
                return b.formatter ? b.formatter.call(d2, d2) : b.format ? (d2.text = e2.defaultLabelFormatter.call(d2), a2.format(b.format, d2, t)) : e2.defaultLabelFormatter.call(d2, d2);
              };
              f2 = u2.call(O, O);
              var A2 = P && P.list;
              c2.shortenLabel = A2 ? function() {
                for (I = 0; I < A2.length; I++)
                  if (q(O, { dateTimeLabelFormat: A2[I] }), x.attr({ text: u2.call(O, O) }), x.getBBox().width < e2.getSlotWidth(c2) - 2 * b.padding)
                    return;
                x.attr({ text: "" });
              } : void 0;
              D && e2._addedPlotLB && c2.moveLabel(f2, b);
              H(x) || c2.movedLabel ? x && x.textStr !== f2 && !D && (!x.textWidth || b.style.width || x.styles.width || x.css({ width: null }), x.attr({ text: f2 }), x.textPxLength = x.getBBox().width) : (c2.label = x = c2.createLabel({ x: 0, y: 0 }, f2, b), c2.rotation = 0);
            };
            f.prototype.createLabel = function(a3, c2, h2) {
              var f2 = this.axis, p = f2.chart;
              if (a3 = H(c2) && h2.enabled ? p.renderer.text(c2, a3.x, a3.y, h2.useHTML).add(f2.labelGroup) : null)
                p.styledMode || a3.css(e(h2.style)), a3.textPxLength = a3.getBBox().width;
              return a3;
            };
            f.prototype.destroy = function() {
              A(
                this,
                this.axis
              );
            };
            f.prototype.getPosition = function(a3, c2, e2, h2) {
              var f2 = this.axis, p = f2.chart, r = h2 && p.oldChartHeight || p.chartHeight;
              a3 = { x: a3 ? G(f2.translate(c2 + e2, null, null, h2) + f2.transB) : f2.left + f2.offset + (f2.opposite ? (h2 && p.oldChartWidth || p.chartWidth) - f2.right - f2.left : 0), y: a3 ? r - f2.bottom + f2.offset - (f2.opposite ? f2.height : 0) : G(r - f2.translate(c2 + e2, null, null, h2) - f2.transB) };
              a3.y = y(a3.y, -1e5, 1e5);
              n(this, "afterGetPosition", { pos: a3 });
              return a3;
            };
            f.prototype.getLabelPosition = function(a3, c2, e2, h2, f2, k2, r, l) {
              var b = this.axis, g = b.transA, d = b.isLinked && b.linkedParent ? b.linkedParent.reversed : b.reversed, m = b.staggerLines, D = b.tickRotCorr || { x: 0, y: 0 }, x = h2 || b.reserveSpaceDefault ? 0 : -b.labelOffset * ("center" === b.labelAlign ? 0.5 : 1), p = {}, t = f2.y;
              H(t) || (t = 0 === b.side ? e2.rotation ? -8 : -e2.getBBox().height : 2 === b.side ? D.y + 8 : Math.cos(e2.rotation * v) * (D.y - e2.getBBox(false, 0).height / 2));
              a3 = a3 + f2.x + x + D.x - (k2 && h2 ? k2 * g * (d ? -1 : 1) : 0);
              c2 = c2 + t - (k2 && !h2 ? k2 * g * (d ? 1 : -1) : 0);
              m && (e2 = r / (l || 1) % m, b.opposite && (e2 = m - e2 - 1), c2 += b.labelOffset / m * e2);
              p.x = a3;
              p.y = Math.round(c2);
              n(this, "afterGetLabelPosition", { pos: p, tickmarkOffset: k2, index: r });
              return p;
            };
            f.prototype.getLabelSize = function() {
              return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
            };
            f.prototype.getMarkPath = function(a3, c2, e2, h2, f2, k2) {
              return k2.crispLine([["M", a3, c2], ["L", a3 + (f2 ? 0 : -e2), c2 + (f2 ? e2 : 0)]], h2);
            };
            f.prototype.handleOverflow = function(a3) {
              var c2 = this.axis, e2 = c2.options.labels, f2 = a3.x, k2 = c2.chart.chartWidth, n2 = c2.chart.spacing, r = h(c2.labelLeft, Math.min(c2.pos, n2[3]));
              n2 = h(c2.labelRight, Math.max(c2.isRadial ? 0 : c2.pos + c2.len, k2 - n2[1]));
              var l = this.label, b = this.rotation, g = { left: 0, center: 0.5, right: 1 }[c2.labelAlign || l.attr("align")], d = l.getBBox().width, m = c2.getSlotWidth(this), D = {}, x = m, I = 1, w;
              if (b || "justify" !== e2.overflow)
                0 > b && f2 - g * d < r ? w = Math.round(f2 / Math.cos(b * v) - r) : 0 < b && f2 + g * d > n2 && (w = Math.round((k2 - f2) / Math.cos(b * v)));
              else if (k2 = f2 + (1 - g) * d, f2 - g * d < r ? x = a3.x + x * (1 - g) - r : k2 > n2 && (x = n2 - a3.x + x * g, I = -1), x = Math.min(m, x), x < m && "center" === c2.labelAlign && (a3.x += I * (m - x - g * (m - Math.min(d, x)))), d > x || c2.autoRotation && (l.styles || {}).width)
                w = x;
              w && (this.shortenLabel ? this.shortenLabel() : (D.width = Math.floor(w) + "px", (e2.style || {}).textOverflow || (D.textOverflow = "ellipsis"), l.css(D)));
            };
            f.prototype.moveLabel = function(a3, e2) {
              var h2 = this, f2 = h2.label, k2 = h2.axis, p = k2.reversed, r = false;
              f2 && f2.textStr === a3 ? (h2.movedLabel = f2, r = true, delete h2.label) : c(k2.ticks, function(b) {
                r || b.isNew || b === h2 || !b.label || b.label.textStr !== a3 || (h2.movedLabel = b.label, r = true, b.labelPos = h2.movedLabel.xy, delete b.label);
              });
              if (!r && (h2.labelPos || f2)) {
                var l = h2.labelPos || f2.xy;
                f2 = k2.horiz ? p ? 0 : k2.width + k2.left : l.x;
                k2 = k2.horiz ? l.y : p ? k2.width + k2.left : 0;
                h2.movedLabel = h2.createLabel({ x: f2, y: k2 }, a3, e2);
                h2.movedLabel && h2.movedLabel.attr({ opacity: 0 });
              }
            };
            f.prototype.render = function(a3, c2, e2) {
              var f2 = this.axis, k2 = f2.horiz, p = this.pos, r = h(this.tickmarkOffset, f2.tickmarkOffset);
              p = this.getPosition(k2, p, r, c2);
              r = p.x;
              var l = p.y;
              f2 = k2 && r === f2.pos + f2.len || !k2 && l === f2.pos ? -1 : 1;
              k2 = h(e2, this.label && this.label.newOpacity, 1);
              e2 = h(e2, 1);
              this.isActive = true;
              this.renderGridLine(c2, e2, f2);
              this.renderMark(p, e2, f2);
              this.renderLabel(p, c2, k2, a3);
              this.isNew = false;
              n(this, "afterRender");
            };
            f.prototype.renderGridLine = function(a3, c2, e2) {
              var f2 = this.axis, k2 = f2.options, p = {}, r = this.pos, l = this.type, b = h(
                this.tickmarkOffset,
                f2.tickmarkOffset
              ), g = f2.chart.renderer, d = this.gridLine, m = k2.gridLineWidth, D = k2.gridLineColor, x = k2.gridLineDashStyle;
              "minor" === this.type && (m = k2.minorGridLineWidth, D = k2.minorGridLineColor, x = k2.minorGridLineDashStyle);
              d || (f2.chart.styledMode || (p.stroke = D, p["stroke-width"] = m || 0, p.dashstyle = x), l || (p.zIndex = 1), a3 && (c2 = 0), this.gridLine = d = g.path().attr(p).addClass("highcharts-" + (l ? l + "-" : "") + "grid-line").add(f2.gridGroup));
              if (d && (e2 = f2.getPlotLinePath({ value: r + b, lineWidth: d.strokeWidth() * e2, force: "pass", old: a3 })))
                d[a3 || this.isNew ? "attr" : "animate"]({ d: e2, opacity: c2 });
            };
            f.prototype.renderMark = function(a3, c2, e2) {
              var f2 = this.axis, k2 = f2.options, p = f2.chart.renderer, r = this.type, l = f2.tickSize(r ? r + "Tick" : "tick"), b = a3.x;
              a3 = a3.y;
              var g = h(k2["minor" !== r ? "tickWidth" : "minorTickWidth"], !r && f2.isXAxis ? 1 : 0);
              k2 = k2["minor" !== r ? "tickColor" : "minorTickColor"];
              var d = this.mark, m = !d;
              l && (f2.opposite && (l[0] = -l[0]), d || (this.mark = d = p.path().addClass("highcharts-" + (r ? r + "-" : "") + "tick").add(f2.axisGroup), f2.chart.styledMode || d.attr({ stroke: k2, "stroke-width": g })), d[m ? "attr" : "animate"]({ d: this.getMarkPath(
                b,
                a3,
                l[0],
                d.strokeWidth() * e2,
                f2.horiz,
                p
              ), opacity: c2 }));
            };
            f.prototype.renderLabel = function(a3, c2, e2, f2) {
              var p = this.axis, n2 = p.horiz, r = p.options, l = this.label, b = r.labels, g = b.step;
              p = h(this.tickmarkOffset, p.tickmarkOffset);
              var d = a3.x;
              a3 = a3.y;
              var m = true;
              l && k(d) && (l.xy = a3 = this.getLabelPosition(d, a3, l, n2, b, p, f2, g), this.isFirst && !this.isLast && !r.showFirstLabel || this.isLast && !this.isFirst && !r.showLastLabel ? m = false : !n2 || b.step || b.rotation || c2 || 0 === e2 || this.handleOverflow(a3), g && f2 % g && (m = false), m && k(a3.y) ? (a3.opacity = e2, l[this.isNewLabel ? "attr" : "animate"](a3), this.isNewLabel = false) : (l.attr("y", -9999), this.isNewLabel = true));
            };
            f.prototype.replaceMovedLabel = function() {
              var a3 = this.label, c2 = this.axis, e2 = c2.reversed;
              if (a3 && !this.isNew) {
                var f2 = c2.horiz ? e2 ? c2.left : c2.width + c2.left : a3.xy.x;
                e2 = c2.horiz ? a3.xy.y : e2 ? c2.width + c2.top : c2.top;
                a3.animate({ x: f2, y: e2, opacity: 0 }, void 0, a3.destroy);
                delete this.label;
              }
              c2.isDirty = true;
              this.label = this.movedLabel;
              delete this.movedLabel;
            };
            return f;
          }();
          "";
          return u;
        }
      );
      M(a, "Core/Axis/Axis.js", [
        a["Core/Animation/AnimationUtilities.js"],
        a["Core/Axis/AxisDefaults.js"],
        a["Core/Color/Color.js"],
        a["Core/DefaultOptions.js"],
        a["Core/Foundation.js"],
        a["Core/Globals.js"],
        a["Core/Axis/Tick.js"],
        a["Core/Utilities.js"]
      ], function(a2, u, z, F, y, G, H, A) {
        var q = a2.animObject, n = F.defaultOptions, k = y.registerEventOptions, e = G.deg2rad, c = A.arrayMax, h = A.arrayMin, f = A.clamp, w = A.correctFloat, p = A.defined, B = A.destroyObjectProperties, t = A.erase, J = A.error, C = A.extend, r = A.fireEvent, l = A.getMagnitude, b = A.isArray, g = A.isNumber, d = A.isString, m = A.merge, D = A.normalizeTickInterval, x = A.objectEach, I = A.pick, P = A.relativeLength, v = A.removeEvent, O = A.splat, U = A.syncTimeout;
        a2 = function() {
          function a3(b2, d2) {
            this.zoomEnabled = this.width = this.visible = this.userOptions = this.translationSlope = this.transB = this.transA = this.top = this.ticks = this.tickRotCorr = this.tickPositions = this.tickmarkOffset = this.tickInterval = this.tickAmount = this.side = this.series = this.right = this.positiveValuesOnly = this.pos = this.pointRangePadding = this.pointRange = this.plotLinesAndBandsGroups = this.plotLinesAndBands = this.paddedTicks = this.overlap = this.options = this.offset = this.names = this.minPixelPadding = this.minorTicks = this.minorTickInterval = this.min = this.maxLabelLength = this.max = this.len = this.left = this.labelFormatter = this.labelEdge = this.isLinked = this.height = this.hasVisibleSeries = this.hasNames = this.eventOptions = this.coll = this.closestPointRange = this.chart = this.categories = this.bottom = this.alternateBands = void 0;
            this.init(b2, d2);
          }
          a3.prototype.init = function(b2, d2) {
            var a4 = d2.isX;
            this.chart = b2;
            this.horiz = b2.inverted && !this.isZAxis ? !a4 : a4;
            this.isXAxis = a4;
            this.coll = this.coll || (a4 ? "xAxis" : "yAxis");
            r(this, "init", { userOptions: d2 });
            this.opposite = I(d2.opposite, this.opposite);
            this.side = I(d2.side, this.side, this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3);
            this.setOptions(d2);
            var c2 = this.options, e2 = c2.labels, m2 = c2.type;
            this.userOptions = d2;
            this.minPixelPadding = 0;
            this.reversed = I(c2.reversed, this.reversed);
            this.visible = c2.visible;
            this.zoomEnabled = c2.zoomEnabled;
            this.hasNames = "category" === m2 || true === c2.categories;
            this.categories = c2.categories || this.hasNames;
            this.names || (this.names = [], this.names.keys = {});
            this.plotLinesAndBandsGroups = {};
            this.positiveValuesOnly = !!this.logarithmic;
            this.isLinked = p(c2.linkedTo);
            this.ticks = {};
            this.labelEdge = [];
            this.minorTicks = {};
            this.plotLinesAndBands = [];
            this.alternateBands = {};
            this.len = 0;
            this.minRange = this.userMinRange = c2.minRange || c2.maxZoom;
            this.range = c2.range;
            this.offset = c2.offset || 0;
            this.min = this.max = null;
            d2 = I(c2.crosshair, O(b2.options.tooltip.crosshairs)[a4 ? 0 : 1]);
            this.crosshair = true === d2 ? {} : d2;
            -1 === b2.axes.indexOf(this) && (a4 ? b2.axes.splice(b2.xAxis.length, 0, this) : b2.axes.push(this), b2[this.coll].push(this));
            this.series = this.series || [];
            b2.inverted && !this.isZAxis && a4 && "undefined" === typeof this.reversed && (this.reversed = true);
            this.labelRotation = g(e2.rotation) ? e2.rotation : void 0;
            k(this, c2);
            r(this, "afterInit");
          };
          a3.prototype.setOptions = function(b2) {
            this.options = m(u.defaultXAxisOptions, "yAxis" === this.coll && u.defaultYAxisOptions, [u.defaultTopAxisOptions, u.defaultRightAxisOptions, u.defaultBottomAxisOptions, u.defaultLeftAxisOptions][this.side], m(n[this.coll], b2));
            r(this, "afterSetOptions", { userOptions: b2 });
          };
          a3.prototype.defaultLabelFormatter = function(b2) {
            var d2 = this.axis;
            b2 = this.chart.numberFormatter;
            var a4 = g(this.value) ? this.value : NaN, c2 = d2.chart.time, e2 = this.dateTimeLabelFormat, m2 = n.lang, l2 = m2.numericSymbols;
            m2 = m2.numericSymbolMagnitude || 1e3;
            var f2 = d2.logarithmic ? Math.abs(a4) : d2.tickInterval, h2 = l2 && l2.length;
            if (d2.categories)
              var r2 = "" + this.value;
            else if (e2)
              r2 = c2.dateFormat(e2, a4);
            else if (h2 && 1e3 <= f2)
              for (; h2-- && "undefined" === typeof r2; )
                d2 = Math.pow(m2, h2 + 1), f2 >= d2 && 0 === 10 * a4 % d2 && null !== l2[h2] && 0 !== a4 && (r2 = b2(a4 / d2, -1) + l2[h2]);
            "undefined" === typeof r2 && (r2 = 1e4 <= Math.abs(a4) ? b2(a4, -1) : b2(a4, -1, void 0, ""));
            return r2;
          };
          a3.prototype.getSeriesExtremes = function() {
            var b2 = this, d2 = b2.chart, a4;
            r(this, "getSeriesExtremes", null, function() {
              b2.hasVisibleSeries = false;
              b2.dataMin = b2.dataMax = b2.threshold = null;
              b2.softThreshold = !b2.isXAxis;
              b2.stacking && b2.stacking.buildStacks();
              b2.series.forEach(function(c2) {
                if (c2.visible || !d2.options.chart.ignoreHiddenSeries) {
                  var e2 = c2.options, m2 = e2.threshold;
                  b2.hasVisibleSeries = true;
                  b2.positiveValuesOnly && 0 >= m2 && (m2 = null);
                  if (b2.isXAxis) {
                    if (e2 = c2.xData, e2.length) {
                      e2 = b2.logarithmic ? e2.filter(b2.validatePositiveValue) : e2;
                      a4 = c2.getXExtremes(e2);
                      var l2 = a4.min;
                      var f2 = a4.max;
                      g(l2) || l2 instanceof Date || (e2 = e2.filter(g), a4 = c2.getXExtremes(e2), l2 = a4.min, f2 = a4.max);
                      e2.length && (b2.dataMin = Math.min(I(b2.dataMin, l2), l2), b2.dataMax = Math.max(I(b2.dataMax, f2), f2));
                    }
                  } else if (c2 = c2.applyExtremes(), g(c2.dataMin) && (l2 = c2.dataMin, b2.dataMin = Math.min(I(b2.dataMin, l2), l2)), g(c2.dataMax) && (f2 = c2.dataMax, b2.dataMax = Math.max(I(b2.dataMax, f2), f2)), p(m2) && (b2.threshold = m2), !e2.softThreshold || b2.positiveValuesOnly)
                    b2.softThreshold = false;
                }
              });
            });
            r(this, "afterGetSeriesExtremes");
          };
          a3.prototype.translate = function(b2, d2, a4, c2, e2, m2) {
            var l2 = this.linkedParent || this, f2 = c2 && l2.old ? l2.old.min : l2.min, r2 = l2.minPixelPadding;
            e2 = (l2.isOrdinal || l2.brokenAxis && l2.brokenAxis.hasBreaks || l2.logarithmic && e2) && l2.lin2val;
            var h2 = 1, k2 = 0;
            c2 = c2 && l2.old ? l2.old.transA : l2.transA;
            c2 || (c2 = l2.transA);
            a4 && (h2 *= -1, k2 = l2.len);
            l2.reversed && (h2 *= -1, k2 -= h2 * (l2.sector || l2.len));
            d2 ? (b2 = (b2 * h2 + k2 - r2) / c2 + f2, e2 && (b2 = l2.lin2val(b2))) : (e2 && (b2 = l2.val2lin(b2)), b2 = g(f2) ? h2 * (b2 - f2) * c2 + k2 + h2 * r2 + (g(m2) ? c2 * m2 : 0) : void 0);
            return b2;
          };
          a3.prototype.toPixels = function(b2, d2) {
            return this.translate(
              b2,
              false,
              !this.horiz,
              null,
              true
            ) + (d2 ? 0 : this.pos);
          };
          a3.prototype.toValue = function(b2, d2) {
            return this.translate(b2 - (d2 ? 0 : this.pos), true, !this.horiz, null, true);
          };
          a3.prototype.getPlotLinePath = function(b2) {
            function d2(b3, d3, a5) {
              if ("pass" !== n2 && b3 < d3 || b3 > a5)
                n2 ? b3 = f(b3, d3, a5) : B2 = true;
              return b3;
            }
            var a4 = this, c2 = a4.chart, e2 = a4.left, m2 = a4.top, l2 = b2.old, h2 = b2.value, k2 = b2.lineWidth, x2 = l2 && c2.oldChartHeight || c2.chartHeight, D2 = l2 && c2.oldChartWidth || c2.chartWidth, L = a4.transB, p2 = b2.translatedValue, n2 = b2.force, t2, C2, w2, q2, B2;
            b2 = {
              value: h2,
              lineWidth: k2,
              old: l2,
              force: n2,
              acrossPanes: b2.acrossPanes,
              translatedValue: p2
            };
            r(this, "getPlotLinePath", b2, function(b3) {
              p2 = I(p2, a4.translate(h2, null, null, l2));
              p2 = f(p2, -1e5, 1e5);
              t2 = w2 = Math.round(p2 + L);
              C2 = q2 = Math.round(x2 - p2 - L);
              g(p2) ? a4.horiz ? (C2 = m2, q2 = x2 - a4.bottom, t2 = w2 = d2(t2, e2, e2 + a4.width)) : (t2 = e2, w2 = D2 - a4.right, C2 = q2 = d2(C2, m2, m2 + a4.height)) : (B2 = true, n2 = false);
              b3.path = B2 && !n2 ? null : c2.renderer.crispLine([["M", t2, C2], ["L", w2, q2]], k2 || 1);
            });
            return b2.path;
          };
          a3.prototype.getLinearTickPositions = function(b2, d2, a4) {
            var c2 = w(Math.floor(d2 / b2) * b2);
            a4 = w(Math.ceil(a4 / b2) * b2);
            var e2 = [], g2;
            w(c2 + b2) === c2 && (g2 = 20);
            if (this.single)
              return [d2];
            for (d2 = c2; d2 <= a4; ) {
              e2.push(d2);
              d2 = w(d2 + b2, g2);
              if (d2 === m2)
                break;
              var m2 = d2;
            }
            return e2;
          };
          a3.prototype.getMinorTickInterval = function() {
            var b2 = this.options;
            return true === b2.minorTicks ? I(b2.minorTickInterval, "auto") : false === b2.minorTicks ? null : b2.minorTickInterval;
          };
          a3.prototype.getMinorTickPositions = function() {
            var b2 = this.options, d2 = this.tickPositions, a4 = this.minorTickInterval, c2 = this.pointRangePadding || 0, e2 = this.min - c2;
            c2 = this.max + c2;
            var g2 = c2 - e2, m2 = [];
            if (g2 && g2 / a4 < this.len / 3) {
              var l2 = this.logarithmic;
              if (l2)
                this.paddedTicks.forEach(function(b3, d3, c3) {
                  d3 && m2.push.apply(
                    m2,
                    l2.getLogTickPositions(a4, c3[d3 - 1], c3[d3], true)
                  );
                });
              else if (this.dateTime && "auto" === this.getMinorTickInterval())
                m2 = m2.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(a4), e2, c2, b2.startOfWeek));
              else
                for (b2 = e2 + (d2[0] - e2) % a4; b2 <= c2 && b2 !== m2[0]; b2 += a4)
                  m2.push(b2);
            }
            0 !== m2.length && this.trimTicks(m2);
            return m2;
          };
          a3.prototype.adjustForMinRange = function() {
            var b2 = this.options, d2 = this.logarithmic, a4 = this.min, e2 = this.max, g2 = 0, m2, l2, f2, r2;
            this.isXAxis && "undefined" === typeof this.minRange && !d2 && (p(b2.min) || p(b2.max) || p(b2.floor) || p(b2.ceiling) ? this.minRange = null : (this.series.forEach(function(b3) {
              f2 = b3.xData;
              r2 = b3.xIncrement ? 1 : f2.length - 1;
              if (1 < f2.length) {
                for (m2 = r2; 0 < m2; m2--)
                  if (l2 = f2[m2] - f2[m2 - 1], !g2 || l2 < g2)
                    g2 = l2;
              }
            }), this.minRange = Math.min(5 * g2, this.dataMax - this.dataMin)));
            if (e2 - a4 < this.minRange) {
              var k2 = this.dataMax - this.dataMin >= this.minRange;
              var x2 = this.minRange;
              var D2 = (x2 - e2 + a4) / 2;
              D2 = [a4 - D2, I(b2.min, a4 - D2)];
              k2 && (D2[2] = this.logarithmic ? this.logarithmic.log2lin(this.dataMin) : this.dataMin);
              a4 = c(D2);
              e2 = [a4 + x2, I(b2.max, a4 + x2)];
              k2 && (e2[2] = d2 ? d2.log2lin(this.dataMax) : this.dataMax);
              e2 = h(e2);
              e2 - a4 < x2 && (D2[0] = e2 - x2, D2[1] = I(b2.min, e2 - x2), a4 = c(D2));
            }
            this.min = a4;
            this.max = e2;
          };
          a3.prototype.getClosest = function() {
            var b2;
            this.categories ? b2 = 1 : this.series.forEach(function(d2) {
              var a4 = d2.closestPointRange, c2 = d2.visible || !d2.chart.options.chart.ignoreHiddenSeries;
              !d2.noSharedTooltip && p(a4) && c2 && (b2 = p(b2) ? Math.min(b2, a4) : a4);
            });
            return b2;
          };
          a3.prototype.nameToX = function(d2) {
            var a4 = b(this.categories), c2 = a4 ? this.categories : this.names, e2 = d2.options.x;
            d2.series.requireSorting = false;
            p(e2) || (e2 = this.options.uniqueNames ? a4 ? c2.indexOf(d2.name) : I(c2.keys[d2.name], -1) : d2.series.autoIncrement());
            if (-1 === e2) {
              if (!a4)
                var g2 = c2.length;
            } else
              g2 = e2;
            "undefined" !== typeof g2 && (this.names[g2] = d2.name, this.names.keys[d2.name] = g2);
            return g2;
          };
          a3.prototype.updateNames = function() {
            var b2 = this, d2 = this.names;
            0 < d2.length && (Object.keys(d2.keys).forEach(function(b3) {
              delete d2.keys[b3];
            }), d2.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach(function(d3) {
              d3.xIncrement = null;
              if (!d3.points || d3.isDirtyData)
                b2.max = Math.max(b2.max, d3.xData.length - 1), d3.processData(), d3.generatePoints();
              d3.data.forEach(function(a4, c2) {
                if (a4 && a4.options && "undefined" !== typeof a4.name) {
                  var e2 = b2.nameToX(a4);
                  "undefined" !== typeof e2 && e2 !== a4.x && (a4.x = e2, d3.xData[c2] = e2);
                }
              });
            }));
          };
          a3.prototype.setAxisTranslation = function() {
            var b2 = this, a4 = b2.max - b2.min, c2 = b2.linkedParent, e2 = !!b2.categories, g2 = b2.isXAxis, m2 = b2.axisPointRange || 0, l2 = 0, f2 = 0, h2 = b2.transA;
            if (g2 || e2 || m2) {
              var k2 = b2.getClosest();
              c2 ? (l2 = c2.minPointOffset, f2 = c2.pointRangePadding) : b2.series.forEach(function(a5) {
                var c3 = e2 ? 1 : g2 ? I(a5.options.pointRange, k2, 0) : b2.axisPointRange || 0, h3 = a5.options.pointPlacement;
                m2 = Math.max(m2, c3);
                if (!b2.single || e2)
                  a5 = a5.is("xrange") ? !g2 : g2, l2 = Math.max(l2, a5 && d(h3) ? 0 : c3 / 2), f2 = Math.max(f2, a5 && "on" === h3 ? 0 : c3);
              });
              c2 = b2.ordinal && b2.ordinal.slope && k2 ? b2.ordinal.slope / k2 : 1;
              b2.minPointOffset = l2 *= c2;
              b2.pointRangePadding = f2 *= c2;
              b2.pointRange = Math.min(m2, b2.single && e2 ? 1 : a4);
              g2 && (b2.closestPointRange = k2);
            }
            b2.translationSlope = b2.transA = h2 = b2.staticScale || b2.len / (a4 + f2 || 1);
            b2.transB = b2.horiz ? b2.left : b2.bottom;
            b2.minPixelPadding = h2 * l2;
            r(this, "afterSetAxisTranslation");
          };
          a3.prototype.minFromRange = function() {
            return this.max - this.range;
          };
          a3.prototype.setTickInterval = function(b2) {
            var d2 = this.chart, a4 = this.logarithmic, c2 = this.options, e2 = this.isXAxis, m2 = this.isLinked, f2 = c2.tickPixelInterval, h2 = this.categories, k2 = this.softThreshold, x2 = c2.maxPadding, L = c2.minPadding, n2 = g(c2.tickInterval) && 0 <= c2.tickInterval ? c2.tickInterval : void 0, t2 = g(this.threshold) ? this.threshold : null;
            this.dateTime || h2 || m2 || this.getTickAmount();
            var C2 = I(this.userMin, c2.min);
            var q2 = I(this.userMax, c2.max);
            if (m2) {
              this.linkedParent = d2[this.coll][c2.linkedTo];
              var B2 = this.linkedParent.getExtremes();
              this.min = I(B2.min, B2.dataMin);
              this.max = I(B2.max, B2.dataMax);
              c2.type !== this.linkedParent.options.type && J(11, 1, d2);
            } else {
              if (k2 && p(t2)) {
                if (this.dataMin >= t2)
                  B2 = t2, L = 0;
                else if (this.dataMax <= t2) {
                  var P2 = t2;
                  x2 = 0;
                }
              }
              this.min = I(C2, B2, this.dataMin);
              this.max = I(q2, P2, this.dataMax);
            }
            a4 && (this.positiveValuesOnly && !b2 && 0 >= Math.min(this.min, I(this.dataMin, this.min)) && J(10, 1, d2), this.min = w(a4.log2lin(this.min), 16), this.max = w(a4.log2lin(this.max), 16));
            this.range && p(this.max) && (this.userMin = this.min = C2 = Math.max(this.dataMin, this.minFromRange()), this.userMax = q2 = this.max, this.range = null);
            r(this, "foundExtremes");
            this.beforePadding && this.beforePadding();
            this.adjustForMinRange();
            !(h2 || this.axisPointRange || this.stacking && this.stacking.usePercentage || m2) && p(this.min) && p(this.max) && (d2 = this.max - this.min) && (!p(C2) && L && (this.min -= d2 * L), !p(q2) && x2 && (this.max += d2 * x2));
            g(this.userMin) || (g(c2.softMin) && c2.softMin < this.min && (this.min = C2 = c2.softMin), g(c2.floor) && (this.min = Math.max(this.min, c2.floor)));
            g(this.userMax) || (g(c2.softMax) && c2.softMax > this.max && (this.max = q2 = c2.softMax), g(c2.ceiling) && (this.max = Math.min(this.max, c2.ceiling)));
            k2 && p(this.dataMin) && (t2 = t2 || 0, !p(C2) && this.min < t2 && this.dataMin >= t2 ? this.min = this.options.minRange ? Math.min(t2, this.max - this.minRange) : t2 : !p(q2) && this.max > t2 && this.dataMax <= t2 && (this.max = this.options.minRange ? Math.max(t2, this.min + this.minRange) : t2));
            g(this.min) && g(this.max) && !this.chart.polar && this.min > this.max && (p(this.options.min) ? this.max = this.min : p(this.options.max) && (this.min = this.max));
            this.tickInterval = this.min === this.max || "undefined" === typeof this.min || "undefined" === typeof this.max ? 1 : m2 && this.linkedParent && !n2 && f2 === this.linkedParent.options.tickPixelInterval ? n2 = this.linkedParent.tickInterval : I(n2, this.tickAmount ? (this.max - this.min) / Math.max(this.tickAmount - 1, 1) : void 0, h2 ? 1 : (this.max - this.min) * f2 / Math.max(this.len, f2));
            if (e2 && !b2) {
              var v2 = this.min !== (this.old && this.old.min) || this.max !== (this.old && this.old.max);
              this.series.forEach(function(b3) {
                b3.forceCrop = b3.forceCropping && b3.forceCropping();
                b3.processData(v2);
              });
              r(this, "postProcessData", { hasExtemesChanged: v2 });
            }
            this.setAxisTranslation();
            r(this, "initialAxisTranslation");
            this.pointRange && !n2 && (this.tickInterval = Math.max(this.pointRange, this.tickInterval));
            b2 = I(c2.minTickInterval, this.dateTime && !this.series.some(function(b3) {
              return b3.noSharedTooltip;
            }) ? this.closestPointRange : 0);
            !n2 && this.tickInterval < b2 && (this.tickInterval = b2);
            this.dateTime || this.logarithmic || n2 || (this.tickInterval = D(this.tickInterval, void 0, l(this.tickInterval), I(c2.allowDecimals, 0.5 > this.tickInterval || void 0 !== this.tickAmount), !!this.tickAmount));
            this.tickAmount || (this.tickInterval = this.unsquish());
            this.setTickPositions();
          };
          a3.prototype.setTickPositions = function() {
            var b2 = this.options, d2 = b2.tickPositions, a4 = this.getMinorTickInterval(), c2 = this.hasVerticalPanning(), e2 = "colorAxis" === this.coll, g2 = (e2 || !c2) && b2.startOnTick;
            c2 = (e2 || !c2) && b2.endOnTick;
            e2 = b2.tickPositioner;
            this.tickmarkOffset = this.categories && "between" === b2.tickmarkPlacement && 1 === this.tickInterval ? 0.5 : 0;
            this.minorTickInterval = "auto" === a4 && this.tickInterval ? this.tickInterval / 5 : a4;
            this.single = this.min === this.max && p(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || false !== b2.allowDecimals);
            this.tickPositions = a4 = d2 && d2.slice();
            !a4 && (this.ordinal && this.ordinal.positions || !((this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200)) ? a4 = this.dateTime ? this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval, b2.units), this.min, this.max, b2.startOfWeek, this.ordinal && this.ordinal.positions, this.closestPointRange, true) : this.logarithmic ? this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(
              this.tickInterval,
              this.min,
              this.max
            ) : (a4 = [this.min, this.max], J(19, false, this.chart)), a4.length > this.len && (a4 = [a4[0], a4.pop()], a4[0] === a4[1] && (a4.length = 1)), this.tickPositions = a4, e2 && (e2 = e2.apply(this, [this.min, this.max]))) && (this.tickPositions = a4 = e2);
            this.paddedTicks = a4.slice(0);
            this.trimTicks(a4, g2, c2);
            this.isLinked || (this.single && 2 > a4.length && !this.categories && !this.series.some(function(b3) {
              return b3.is("heatmap") && "between" === b3.options.pointPlacement;
            }) && (this.min -= 0.5, this.max += 0.5), d2 || e2 || this.adjustTickAmount());
            r(this, "afterSetTickPositions");
          };
          a3.prototype.trimTicks = function(b2, d2, a4) {
            var c2 = b2[0], e2 = b2[b2.length - 1], g2 = !this.isOrdinal && this.minPointOffset || 0;
            r(this, "trimTicks");
            if (!this.isLinked) {
              if (d2 && -Infinity !== c2)
                this.min = c2;
              else
                for (; this.min - g2 > b2[0]; )
                  b2.shift();
              if (a4)
                this.max = e2;
              else
                for (; this.max + g2 < b2[b2.length - 1]; )
                  b2.pop();
              0 === b2.length && p(c2) && !this.options.tickPositions && b2.push((e2 + c2) / 2);
            }
          };
          a3.prototype.alignToOthers = function() {
            var b2 = {}, d2 = this.options, a4;
            false !== this.chart.options.chart.alignTicks && d2.alignTicks && false !== d2.startOnTick && false !== d2.endOnTick && !this.logarithmic && this.chart[this.coll].forEach(function(d3) {
              var c2 = d3.options;
              c2 = [d3.horiz ? c2.left : c2.top, c2.width, c2.height, c2.pane].join();
              d3.series.length && (b2[c2] ? a4 = true : b2[c2] = 1);
            });
            return a4;
          };
          a3.prototype.getTickAmount = function() {
            var b2 = this.options, d2 = b2.tickPixelInterval, a4 = b2.tickAmount;
            !p(b2.tickInterval) && !a4 && this.len < d2 && !this.isRadial && !this.logarithmic && b2.startOnTick && b2.endOnTick && (a4 = 2);
            !a4 && this.alignToOthers() && (a4 = Math.ceil(this.len / d2) + 1);
            4 > a4 && (this.finalTickAmt = a4, a4 = 5);
            this.tickAmount = a4;
          };
          a3.prototype.adjustTickAmount = function() {
            var b2 = this.options, d2 = this.tickInterval, a4 = this.tickPositions, c2 = this.tickAmount, e2 = this.finalTickAmt, m2 = a4 && a4.length, l2 = I(this.threshold, this.softThreshold ? 0 : null);
            if (this.hasData() && g(this.min) && g(this.max)) {
              if (m2 < c2) {
                for (; a4.length < c2; )
                  a4.length % 2 || this.min === l2 ? a4.push(w(a4[a4.length - 1] + d2)) : a4.unshift(w(a4[0] - d2));
                this.transA *= (m2 - 1) / (c2 - 1);
                this.min = b2.startOnTick ? a4[0] : Math.min(this.min, a4[0]);
                this.max = b2.endOnTick ? a4[a4.length - 1] : Math.max(this.max, a4[a4.length - 1]);
              } else
                m2 > c2 && (this.tickInterval *= 2, this.setTickPositions());
              if (p(e2)) {
                for (d2 = b2 = a4.length; d2--; )
                  (3 === e2 && 1 === d2 % 2 || 2 >= e2 && 0 < d2 && d2 < b2 - 1) && a4.splice(d2, 1);
                this.finalTickAmt = void 0;
              }
            }
          };
          a3.prototype.setScale = function() {
            var b2 = false, d2 = false;
            this.series.forEach(function(a5) {
              b2 = b2 || a5.isDirtyData || a5.isDirty;
              d2 = d2 || a5.xAxis && a5.xAxis.isDirty || false;
            });
            this.setAxisSize();
            var a4 = this.len !== (this.old && this.old.len);
            a4 || b2 || d2 || this.isLinked || this.forceRedraw || this.userMin !== (this.old && this.old.userMin) || this.userMax !== (this.old && this.old.userMax) || this.alignToOthers() ? (this.stacking && this.stacking.resetStacks(), this.forceRedraw = false, this.getSeriesExtremes(), this.setTickInterval(), this.isDirty || (this.isDirty = a4 || this.min !== (this.old && this.old.min) || this.max !== (this.old && this.old.max))) : this.stacking && this.stacking.cleanStacks();
            b2 && this.panningState && (this.panningState.isDirty = true);
            r(this, "afterSetScale");
          };
          a3.prototype.setExtremes = function(b2, d2, a4, c2, e2) {
            var g2 = this, m2 = g2.chart;
            a4 = I(a4, true);
            g2.series.forEach(function(b3) {
              delete b3.kdTree;
            });
            e2 = C(e2, { min: b2, max: d2 });
            r(g2, "setExtremes", e2, function() {
              g2.userMin = b2;
              g2.userMax = d2;
              g2.eventArgs = e2;
              a4 && m2.redraw(c2);
            });
          };
          a3.prototype.zoom = function(b2, d2) {
            var a4 = this, c2 = this.dataMin, e2 = this.dataMax, g2 = this.options, m2 = Math.min(c2, I(g2.min, c2)), l2 = Math.max(e2, I(g2.max, e2));
            b2 = { newMin: b2, newMax: d2 };
            r(this, "zoom", b2, function(b3) {
              var d3 = b3.newMin, g3 = b3.newMax;
              if (d3 !== a4.min || g3 !== a4.max)
                a4.allowZoomOutside || (p(c2) && (d3 < m2 && (d3 = m2), d3 > l2 && (d3 = l2)), p(e2) && (g3 < m2 && (g3 = m2), g3 > l2 && (g3 = l2))), a4.displayBtn = "undefined" !== typeof d3 || "undefined" !== typeof g3, a4.setExtremes(d3, g3, false, void 0, { trigger: "zoom" });
              b3.zoomed = true;
            });
            return b2.zoomed;
          };
          a3.prototype.setAxisSize = function() {
            var b2 = this.chart, d2 = this.options, a4 = d2.offsets || [0, 0, 0, 0], c2 = this.horiz, e2 = this.width = Math.round(P(I(d2.width, b2.plotWidth - a4[3] + a4[1]), b2.plotWidth)), g2 = this.height = Math.round(P(I(d2.height, b2.plotHeight - a4[0] + a4[2]), b2.plotHeight)), m2 = this.top = Math.round(P(I(d2.top, b2.plotTop + a4[0]), b2.plotHeight, b2.plotTop));
            d2 = this.left = Math.round(P(I(d2.left, b2.plotLeft + a4[3]), b2.plotWidth, b2.plotLeft));
            this.bottom = b2.chartHeight - g2 - m2;
            this.right = b2.chartWidth - e2 - d2;
            this.len = Math.max(c2 ? e2 : g2, 0);
            this.pos = c2 ? d2 : m2;
          };
          a3.prototype.getExtremes = function() {
            var b2 = this.logarithmic;
            return { min: b2 ? w(b2.lin2log(this.min)) : this.min, max: b2 ? w(b2.lin2log(this.max)) : this.max, dataMin: this.dataMin, dataMax: this.dataMax, userMin: this.userMin, userMax: this.userMax };
          };
          a3.prototype.getThreshold = function(b2) {
            var d2 = this.logarithmic, a4 = d2 ? d2.lin2log(this.min) : this.min;
            d2 = d2 ? d2.lin2log(this.max) : this.max;
            null === b2 || -Infinity === b2 ? b2 = a4 : Infinity === b2 ? b2 = d2 : a4 > b2 ? b2 = a4 : d2 < b2 && (b2 = d2);
            return this.translate(b2, 0, 1, 0, 1);
          };
          a3.prototype.autoLabelAlign = function(b2) {
            var d2 = (I(b2, 0) - 90 * this.side + 720) % 360;
            b2 = { align: "center" };
            r(
              this,
              "autoLabelAlign",
              b2,
              function(b3) {
                15 < d2 && 165 > d2 ? b3.align = "right" : 195 < d2 && 345 > d2 && (b3.align = "left");
              }
            );
            return b2.align;
          };
          a3.prototype.tickSize = function(b2) {
            var d2 = this.options, a4 = I(d2["tick" === b2 ? "tickWidth" : "minorTickWidth"], "tick" === b2 && this.isXAxis && !this.categories ? 1 : 0), c2 = d2["tick" === b2 ? "tickLength" : "minorTickLength"];
            if (a4 && c2) {
              "inside" === d2[b2 + "Position"] && (c2 = -c2);
              var e2 = [c2, a4];
            }
            b2 = { tickSize: e2 };
            r(this, "afterTickSize", b2);
            return b2.tickSize;
          };
          a3.prototype.labelMetrics = function() {
            var b2 = this.tickPositions && this.tickPositions[0] || 0;
            return this.chart.renderer.fontMetrics(
              this.options.labels.style.fontSize,
              this.ticks[b2] && this.ticks[b2].label
            );
          };
          a3.prototype.unsquish = function() {
            var b2 = this.options.labels, d2 = this.horiz, a4 = this.tickInterval, c2 = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / a4), m2 = b2.rotation, l2 = this.labelMetrics(), f2 = Math.max(this.max - this.min, 0), h2 = function(b3) {
              var d3 = b3 / (c2 || 1);
              d3 = 1 < d3 ? Math.ceil(d3) : 1;
              d3 * a4 > f2 && Infinity !== b3 && Infinity !== c2 && f2 && (d3 = Math.ceil(f2 / a4));
              return w(d3 * a4);
            }, r2 = a4, k2, x2, D2 = Number.MAX_VALUE;
            if (d2) {
              if (!b2.staggerLines && !b2.step)
                if (g(m2))
                  var p2 = [m2];
                else
                  c2 < b2.autoRotationLimit && (p2 = b2.autoRotation);
              p2 && p2.forEach(function(b3) {
                if (b3 === m2 || b3 && -90 <= b3 && 90 >= b3) {
                  x2 = h2(Math.abs(l2.h / Math.sin(e * b3)));
                  var d3 = x2 + Math.abs(b3 / 360);
                  d3 < D2 && (D2 = d3, k2 = b3, r2 = x2);
                }
              });
            } else
              b2.step || (r2 = h2(l2.h));
            this.autoRotation = p2;
            this.labelRotation = I(k2, g(m2) ? m2 : 0);
            return r2;
          };
          a3.prototype.getSlotWidth = function(b2) {
            var d2 = this.chart, a4 = this.horiz, c2 = this.options.labels, e2 = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1), m2 = d2.margin[3];
            if (b2 && g(b2.slotWidth))
              return b2.slotWidth;
            if (a4 && 2 > c2.step)
              return c2.rotation ? 0 : (this.staggerLines || 1) * this.len / e2;
            if (!a4) {
              b2 = c2.style.width;
              if (void 0 !== b2)
                return parseInt(String(b2), 10);
              if (m2)
                return m2 - d2.spacing[3];
            }
            return 0.33 * d2.chartWidth;
          };
          a3.prototype.renderUnsquish = function() {
            var b2 = this.chart, a4 = b2.renderer, c2 = this.tickPositions, e2 = this.ticks, g2 = this.options.labels, m2 = g2.style, l2 = this.horiz, f2 = this.getSlotWidth(), h2 = Math.max(1, Math.round(f2 - 2 * g2.padding)), r2 = {}, k2 = this.labelMetrics(), x2 = m2.textOverflow, D2 = 0;
            d(g2.rotation) || (r2.rotation = g2.rotation || 0);
            c2.forEach(function(b3) {
              b3 = e2[b3];
              b3.movedLabel && b3.replaceMovedLabel();
              b3 && b3.label && b3.label.textPxLength > D2 && (D2 = b3.label.textPxLength);
            });
            this.maxLabelLength = D2;
            if (this.autoRotation)
              D2 > h2 && D2 > k2.h ? r2.rotation = this.labelRotation : this.labelRotation = 0;
            else if (f2) {
              var p2 = h2;
              if (!x2) {
                var n2 = "clip";
                for (h2 = c2.length; !l2 && h2--; ) {
                  var I2 = c2[h2];
                  if (I2 = e2[I2].label)
                    I2.styles && "ellipsis" === I2.styles.textOverflow ? I2.css({ textOverflow: "clip" }) : I2.textPxLength > f2 && I2.css({ width: f2 + "px" }), I2.getBBox().height > this.len / c2.length - (k2.h - k2.f) && (I2.specificTextOverflow = "ellipsis");
                }
              }
            }
            r2.rotation && (p2 = D2 > 0.5 * b2.chartHeight ? 0.33 * b2.chartHeight : D2, x2 || (n2 = "ellipsis"));
            if (this.labelAlign = g2.align || this.autoLabelAlign(this.labelRotation))
              r2.align = this.labelAlign;
            c2.forEach(function(b3) {
              var d2 = (b3 = e2[b3]) && b3.label, a5 = m2.width, c3 = {};
              d2 && (d2.attr(r2), b3.shortenLabel ? b3.shortenLabel() : p2 && !a5 && "nowrap" !== m2.whiteSpace && (p2 < d2.textPxLength || "SPAN" === d2.element.tagName) ? (c3.width = p2 + "px", x2 || (c3.textOverflow = d2.specificTextOverflow || n2), d2.css(c3)) : d2.styles && d2.styles.width && !c3.width && !a5 && d2.css({ width: null }), delete d2.specificTextOverflow, b3.rotation = r2.rotation);
            }, this);
            this.tickRotCorr = a4.rotCorr(k2.b, this.labelRotation || 0, 0 !== this.side);
          };
          a3.prototype.hasData = function() {
            return this.series.some(function(b2) {
              return b2.hasData();
            }) || this.options.showEmpty && p(this.min) && p(this.max);
          };
          a3.prototype.addTitle = function(b2) {
            var d2 = this.chart.renderer, a4 = this.horiz, c2 = this.opposite, e2 = this.options.title, g2 = this.chart.styledMode, l2;
            this.axisTitle || ((l2 = e2.textAlign) || (l2 = (a4 ? { low: "left", middle: "center", high: "right" } : { low: c2 ? "right" : "left", middle: "center", high: c2 ? "left" : "right" })[e2.align]), this.axisTitle = d2.text(e2.text || "", 0, 0, e2.useHTML).attr({ zIndex: 7, rotation: e2.rotation, align: l2 }).addClass("highcharts-axis-title"), g2 || this.axisTitle.css(m(e2.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = true);
            g2 || e2.style.width || this.isRadial || this.axisTitle.css({ width: this.len + "px" });
            this.axisTitle[b2 ? "show" : "hide"](b2);
          };
          a3.prototype.generateTick = function(b2) {
            var d2 = this.ticks;
            d2[b2] ? d2[b2].addLabel() : d2[b2] = new H(this, b2);
          };
          a3.prototype.getOffset = function() {
            var b2 = this, d2 = this, a4 = d2.chart, c2 = d2.horiz, e2 = d2.options, g2 = d2.side, m2 = d2.ticks, l2 = d2.tickPositions, f2 = d2.coll, h2 = d2.axisParent, k2 = a4.renderer, D2 = a4.inverted && !d2.isZAxis ? [1, 0, 3, 2][g2] : g2, n2 = d2.hasData(), t2 = e2.title, C2 = e2.labels, q2 = a4.axisOffset;
            a4 = a4.clipOffset;
            var w2 = [
              -1,
              1,
              1,
              -1
            ][g2], B2 = e2.className, P2, J2 = 0, ja = 0, ca = 0;
            d2.showAxis = P2 = n2 || e2.showEmpty;
            d2.staggerLines = d2.horiz && C2.staggerLines || void 0;
            if (!d2.axisGroup) {
              var v2 = function(d3, a5, c3) {
                return k2.g(d3).attr({ zIndex: c3 }).addClass("highcharts-" + f2.toLowerCase() + a5 + " " + (b2.isRadial ? "highcharts-radial-axis" + a5 + " " : "") + (B2 || "")).add(h2);
              };
              d2.gridGroup = v2("grid", "-grid", e2.gridZIndex);
              d2.axisGroup = v2("axis", "", e2.zIndex);
              d2.labelGroup = v2("axis-labels", "-labels", C2.zIndex);
            }
            n2 || d2.isLinked ? (l2.forEach(function(b3) {
              d2.generateTick(b3);
            }), d2.renderUnsquish(), d2.reserveSpaceDefault = 0 === g2 || 2 === g2 || { 1: "left", 3: "right" }[g2] === d2.labelAlign, I(C2.reserveSpace, "center" === d2.labelAlign ? true : null, d2.reserveSpaceDefault) && l2.forEach(function(b3) {
              ca = Math.max(m2[b3].getLabelSize(), ca);
            }), d2.staggerLines && (ca *= d2.staggerLines), d2.labelOffset = ca * (d2.opposite ? -1 : 1)) : x(m2, function(b3, d3) {
              b3.destroy();
              delete m2[d3];
            });
            if (t2 && t2.text && false !== t2.enabled && (d2.addTitle(P2), P2 && false !== t2.reserveSpace)) {
              d2.titleOffset = J2 = d2.axisTitle.getBBox()[c2 ? "height" : "width"];
              var O2 = t2.offset;
              ja = p(O2) ? 0 : I(t2.margin, c2 ? 5 : 10);
            }
            d2.renderLine();
            d2.offset = w2 * I(e2.offset, q2[g2] ? q2[g2] + (e2.margin || 0) : 0);
            d2.tickRotCorr = d2.tickRotCorr || { x: 0, y: 0 };
            t2 = 0 === g2 ? -d2.labelMetrics().h : 2 === g2 ? d2.tickRotCorr.y : 0;
            n2 = Math.abs(ca) + ja;
            ca && (n2 = n2 - t2 + w2 * (c2 ? I(C2.y, d2.tickRotCorr.y + 8 * w2) : C2.x));
            d2.axisTitleMargin = I(O2, n2);
            d2.getMaxLabelDimensions && (d2.maxLabelDimensions = d2.getMaxLabelDimensions(m2, l2));
            "colorAxis" !== f2 && (c2 = this.tickSize("tick"), q2[g2] = Math.max(q2[g2], (d2.axisTitleMargin || 0) + J2 + w2 * d2.offset, n2, l2 && l2.length && c2 ? c2[0] + w2 * d2.offset : 0), e2 = !d2.axisLine || e2.offset ? 0 : 2 * Math.floor(d2.axisLine.strokeWidth() / 2), a4[D2] = Math.max(a4[D2], e2));
            r(this, "afterGetOffset");
          };
          a3.prototype.getLinePath = function(b2) {
            var d2 = this.chart, a4 = this.opposite, c2 = this.offset, e2 = this.horiz, g2 = this.left + (a4 ? this.width : 0) + c2;
            c2 = d2.chartHeight - this.bottom - (a4 ? this.height : 0) + c2;
            a4 && (b2 *= -1);
            return d2.renderer.crispLine([["M", e2 ? this.left : g2, e2 ? c2 : this.top], ["L", e2 ? d2.chartWidth - this.right : g2, e2 ? c2 : d2.chartHeight - this.bottom]], b2);
          };
          a3.prototype.renderLine = function() {
            this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({ stroke: this.options.lineColor, "stroke-width": this.options.lineWidth, zIndex: 7 }));
          };
          a3.prototype.getTitlePosition = function() {
            var b2 = this.horiz, d2 = this.left, a4 = this.top, c2 = this.len, e2 = this.options.title, g2 = b2 ? d2 : a4, m2 = this.opposite, l2 = this.offset, f2 = e2.x, h2 = e2.y, k2 = this.axisTitle, x2 = this.chart.renderer.fontMetrics(e2.style.fontSize, k2);
            k2 = Math.max(k2.getBBox(null, 0).height - x2.h - 1, 0);
            c2 = { low: g2 + (b2 ? 0 : c2), middle: g2 + c2 / 2, high: g2 + (b2 ? c2 : 0) }[e2.align];
            d2 = (b2 ? a4 + this.height : d2) + (b2 ? 1 : -1) * (m2 ? -1 : 1) * this.axisTitleMargin + [-k2, k2, x2.f, -k2][this.side];
            b2 = { x: b2 ? c2 + f2 : d2 + (m2 ? this.width : 0) + l2 + f2, y: b2 ? d2 + h2 - (m2 ? this.height : 0) + l2 : c2 + h2 };
            r(this, "afterGetTitlePosition", { titlePosition: b2 });
            return b2;
          };
          a3.prototype.renderMinorTick = function(b2, d2) {
            var a4 = this.minorTicks;
            a4[b2] || (a4[b2] = new H(this, b2, "minor"));
            d2 && a4[b2].isNew && a4[b2].render(null, true);
            a4[b2].render(null, false, 1);
          };
          a3.prototype.renderTick = function(b2, d2, a4) {
            var c2 = this.ticks;
            if (!this.isLinked || b2 >= this.min && b2 <= this.max || this.grid && this.grid.isColumn)
              c2[b2] || (c2[b2] = new H(this, b2)), a4 && c2[b2].isNew && c2[b2].render(
                d2,
                true,
                -1
              ), c2[b2].render(d2);
          };
          a3.prototype.render = function() {
            var b2 = this, d2 = b2.chart, a4 = b2.logarithmic, c2 = b2.options, e2 = b2.isLinked, m2 = b2.tickPositions, l2 = b2.axisTitle, f2 = b2.ticks, h2 = b2.minorTicks, k2 = b2.alternateBands, D2 = c2.stackLabels, p2 = c2.alternateGridColor, n2 = b2.tickmarkOffset, I2 = b2.axisLine, t2 = b2.showAxis, C2 = q(d2.renderer.globalAnimation), w2, B2;
            b2.labelEdge.length = 0;
            b2.overlap = false;
            [f2, h2, k2].forEach(function(b3) {
              x(b3, function(b4) {
                b4.isActive = false;
              });
            });
            if (b2.hasData() || e2) {
              var P2 = b2.chart.hasRendered && b2.old && g(b2.old.min);
              b2.minorTickInterval && !b2.categories && b2.getMinorTickPositions().forEach(function(d3) {
                b2.renderMinorTick(d3, P2);
              });
              m2.length && (m2.forEach(function(d3, a5) {
                b2.renderTick(d3, a5, P2);
              }), n2 && (0 === b2.min || b2.single) && (f2[-1] || (f2[-1] = new H(b2, -1, null, true)), f2[-1].render(-1)));
              p2 && m2.forEach(function(c3, e3) {
                B2 = "undefined" !== typeof m2[e3 + 1] ? m2[e3 + 1] + n2 : b2.max - n2;
                0 === e3 % 2 && c3 < b2.max && B2 <= b2.max + (d2.polar ? -n2 : n2) && (k2[c3] || (k2[c3] = new G.PlotLineOrBand(b2)), w2 = c3 + n2, k2[c3].options = { from: a4 ? a4.lin2log(w2) : w2, to: a4 ? a4.lin2log(B2) : B2, color: p2, className: "highcharts-alternate-grid" }, k2[c3].render(), k2[c3].isActive = true);
              });
              b2._addedPlotLB || (b2._addedPlotLB = true, (c2.plotLines || []).concat(c2.plotBands || []).forEach(function(d3) {
                b2.addPlotBandOrLine(d3);
              }));
            }
            [f2, h2, k2].forEach(function(b3) {
              var a5 = [], c3 = C2.duration;
              x(b3, function(b4, d3) {
                b4.isActive || (b4.render(d3, false, 0), b4.isActive = false, a5.push(d3));
              });
              U(function() {
                for (var d3 = a5.length; d3--; )
                  b3[a5[d3]] && !b3[a5[d3]].isActive && (b3[a5[d3]].destroy(), delete b3[a5[d3]]);
              }, b3 !== k2 && d2.hasRendered && c3 ? c3 : 0);
            });
            I2 && (I2[I2.isPlaced ? "animate" : "attr"]({ d: this.getLinePath(I2.strokeWidth()) }), I2.isPlaced = true, I2[t2 ? "show" : "hide"](t2));
            l2 && t2 && (c2 = b2.getTitlePosition(), g(c2.y) ? (l2[l2.isNew ? "attr" : "animate"](c2), l2.isNew = false) : (l2.attr("y", -9999), l2.isNew = true));
            D2 && D2.enabled && b2.stacking && b2.stacking.renderStackTotals();
            b2.old = { len: b2.len, max: b2.max, min: b2.min, transA: b2.transA, userMax: b2.userMax, userMin: b2.userMin };
            b2.isDirty = false;
            r(this, "afterRender");
          };
          a3.prototype.redraw = function() {
            this.visible && (this.render(), this.plotLinesAndBands.forEach(function(b2) {
              b2.render();
            }));
            this.series.forEach(function(b2) {
              b2.isDirty = true;
            });
          };
          a3.prototype.getKeepProps = function() {
            return this.keepProps || a3.keepProps;
          };
          a3.prototype.destroy = function(b2) {
            var d2 = this, a4 = d2.plotLinesAndBands, c2 = this.eventOptions;
            r(this, "destroy", { keepEvents: b2 });
            b2 || v(d2);
            [d2.ticks, d2.minorTicks, d2.alternateBands].forEach(function(b3) {
              B(b3);
            });
            if (a4)
              for (b2 = a4.length; b2--; )
                a4[b2].destroy();
            "axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function(b3) {
              d2[b3] && (d2[b3] = d2[b3].destroy());
            });
            for (var e2 in d2.plotLinesAndBandsGroups)
              d2.plotLinesAndBandsGroups[e2] = d2.plotLinesAndBandsGroups[e2].destroy();
            x(d2, function(b3, a5) {
              -1 === d2.getKeepProps().indexOf(a5) && delete d2[a5];
            });
            this.eventOptions = c2;
          };
          a3.prototype.drawCrosshair = function(b2, d2) {
            var a4 = this.crosshair, c2 = I(a4 && a4.snap, true), e2 = this.chart, g2, m2 = this.cross;
            r(this, "drawCrosshair", { e: b2, point: d2 });
            b2 || (b2 = this.cross && this.cross.e);
            if (a4 && false !== (p(d2) || !c2)) {
              c2 ? p(d2) && (g2 = I("colorAxis" !== this.coll ? d2.crosshairPos : null, this.isXAxis ? d2.plotX : this.len - d2.plotY)) : g2 = b2 && (this.horiz ? b2.chartX - this.pos : this.len - b2.chartY + this.pos);
              if (p(g2)) {
                var l2 = { value: d2 && (this.isXAxis ? d2.x : I(d2.stackY, d2.y)), translatedValue: g2 };
                e2.polar && C(l2, { isCrosshair: true, chartX: b2 && b2.chartX, chartY: b2 && b2.chartY, point: d2 });
                l2 = this.getPlotLinePath(l2) || null;
              }
              if (!p(l2)) {
                this.hideCrosshair();
                return;
              }
              c2 = this.categories && !this.isRadial;
              m2 || (this.cross = m2 = e2.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (c2 ? "category " : "thin ") + (a4.className || "")).attr({ zIndex: I(a4.zIndex, 2) }).add(), e2.styledMode || (m2.attr({ stroke: a4.color || (c2 ? z.parse("#ccd6eb").setOpacity(0.25).get() : "#cccccc"), "stroke-width": I(a4.width, 1) }).css({ "pointer-events": "none" }), a4.dashStyle && m2.attr({ dashstyle: a4.dashStyle })));
              m2.show().attr({ d: l2 });
              c2 && !a4.width && m2.attr({ "stroke-width": this.transA });
              this.cross.e = b2;
            } else
              this.hideCrosshair();
            r(this, "afterDrawCrosshair", { e: b2, point: d2 });
          };
          a3.prototype.hideCrosshair = function() {
            this.cross && this.cross.hide();
            r(this, "afterHideCrosshair");
          };
          a3.prototype.hasVerticalPanning = function() {
            var b2 = this.chart.options.chart.panning;
            return !!(b2 && b2.enabled && /y/.test(b2.type));
          };
          a3.prototype.validatePositiveValue = function(b2) {
            return g(b2) && 0 < b2;
          };
          a3.prototype.update = function(b2, d2) {
            var a4 = this.chart;
            b2 = m(this.userOptions, b2);
            this.destroy(true);
            this.init(a4, b2);
            a4.isDirtyBox = true;
            I(d2, true) && a4.redraw();
          };
          a3.prototype.remove = function(b2) {
            for (var d2 = this.chart, a4 = this.coll, c2 = this.series, e2 = c2.length; e2--; )
              c2[e2] && c2[e2].remove(false);
            t(d2.axes, this);
            t(d2[a4], this);
            d2[a4].forEach(function(b3, d3) {
              b3.options.index = b3.userOptions.index = d3;
            });
            this.destroy();
            d2.isDirtyBox = true;
            I(b2, true) && d2.redraw();
          };
          a3.prototype.setTitle = function(b2, d2) {
            this.update({ title: b2 }, d2);
          };
          a3.prototype.setCategories = function(b2, d2) {
            this.update(
              { categories: b2 },
              d2
            );
          };
          a3.defaultOptions = u.defaultXAxisOptions;
          a3.keepProps = "extKey hcEvents names series userMax userMin".split(" ");
          return a3;
        }();
        "";
        return a2;
      });
      M(a, "Core/Axis/DateTimeAxis.js", [a["Core/Utilities.js"]], function(a2) {
        var v = a2.addEvent, z = a2.getMagnitude, F = a2.normalizeTickInterval, y = a2.timeUnits, G;
        (function(a3) {
          function u() {
            return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
          }
          function q(a4) {
            "datetime" !== a4.userOptions.type ? this.dateTime = void 0 : this.dateTime || (this.dateTime = new k(this));
          }
          var n = [];
          a3.compose = function(a4) {
            -1 === n.indexOf(a4) && (n.push(a4), a4.keepProps.push("dateTime"), a4.prototype.getTimeTicks = u, v(a4, "init", q));
            return a4;
          };
          var k = function() {
            function a4(a5) {
              this.axis = a5;
            }
            a4.prototype.normalizeTimeTickInterval = function(a5, e) {
              var c = e || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]];
              e = c[c.length - 1];
              var h = y[e[0]], k2 = e[1], n2;
              for (n2 = 0; n2 < c.length && !(e = c[n2], h = y[e[0]], k2 = e[1], c[n2 + 1] && a5 <= (h * k2[k2.length - 1] + y[c[n2 + 1][0]]) / 2); n2++)
                ;
              h === y.year && a5 < 5 * h && (k2 = [1, 2, 5]);
              a5 = F(a5 / h, k2, "year" === e[0] ? Math.max(z(a5 / h), 1) : 1);
              return { unitRange: h, count: a5, unitName: e[0] };
            };
            a4.prototype.getXDateFormat = function(a5, e) {
              var c = this.axis;
              return c.closestPointRange ? c.chart.time.getDateFormat(c.closestPointRange, a5, c.options.startOfWeek, e) || e.year : e.day;
            };
            return a4;
          }();
          a3.Additions = k;
        })(G || (G = {}));
        return G;
      });
      M(a, "Core/Axis/LogarithmicAxis.js", [a["Core/Utilities.js"]], function(a2) {
        var v = a2.addEvent, z = a2.getMagnitude, F = a2.normalizeTickInterval, y = a2.pick, G;
        (function(a3) {
          function u(a4) {
            var c = this.logarithmic;
            "logarithmic" !== a4.userOptions.type ? this.logarithmic = void 0 : c || (this.logarithmic = new k(this));
          }
          function q() {
            var a4 = this.logarithmic;
            a4 && (this.lin2val = function(c) {
              return a4.lin2log(c);
            }, this.val2lin = function(c) {
              return a4.log2lin(c);
            });
          }
          var n = [];
          a3.compose = function(a4) {
            -1 === n.indexOf(a4) && (n.push(a4), a4.keepProps.push("logarithmic"), v(a4, "init", u), v(a4, "afterInit", q));
            return a4;
          };
          var k = function() {
            function a4(a5) {
              this.axis = a5;
            }
            a4.prototype.getLogTickPositions = function(a5, e, f, k2) {
              var c = this.axis, h = c.len, n2 = c.options, q2 = [];
              k2 || (this.minorAutoInterval = void 0);
              if (0.5 <= a5)
                a5 = Math.round(a5), q2 = c.getLinearTickPositions(a5, e, f);
              else if (0.08 <= a5) {
                var C = Math.floor(e), r, l = n2 = void 0;
                for (h = 0.3 < a5 ? [1, 2, 4] : 0.15 < a5 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; C < f + 1 && !l; C++) {
                  var b = h.length;
                  for (r = 0; r < b && !l; r++) {
                    var g = this.log2lin(this.lin2log(C) * h[r]);
                    g > e && (!k2 || n2 <= f) && "undefined" !== typeof n2 && q2.push(n2);
                    n2 > f && (l = true);
                    n2 = g;
                  }
                }
              } else
                e = this.lin2log(e), f = this.lin2log(f), a5 = k2 ? c.getMinorTickInterval() : n2.tickInterval, a5 = y("auto" === a5 ? null : a5, this.minorAutoInterval, n2.tickPixelInterval / (k2 ? 5 : 1) * (f - e) / ((k2 ? h / c.tickPositions.length : h) || 1)), a5 = F(a5, void 0, z(a5)), q2 = c.getLinearTickPositions(a5, e, f).map(this.log2lin), k2 || (this.minorAutoInterval = a5 / 5);
              k2 || (c.tickInterval = a5);
              return q2;
            };
            a4.prototype.lin2log = function(a5) {
              return Math.pow(10, a5);
            };
            a4.prototype.log2lin = function(a5) {
              return Math.log(a5) / Math.LN10;
            };
            return a4;
          }();
          a3.Additions = k;
        })(G || (G = {}));
        return G;
      });
      M(a, "Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js", [a["Core/Utilities.js"]], function(a2) {
        var v = a2.erase, z = a2.extend, F = a2.isNumber, y;
        (function(a3) {
          var u = [], A;
          a3.compose = function(a4, k) {
            A || (A = a4);
            -1 === u.indexOf(k) && (u.push(k), z(k.prototype, q.prototype));
            return k;
          };
          var q = function() {
            function a4() {
            }
            a4.prototype.getPlotBandPath = function(a5, e, c) {
              void 0 === c && (c = this.options);
              var h = this.getPlotLinePath({ value: e, force: true, acrossPanes: c.acrossPanes }), f = [], k = this.horiz;
              e = !F(this.min) || !F(this.max) || a5 < this.min && e < this.min || a5 > this.max && e > this.max;
              a5 = this.getPlotLinePath({ value: a5, force: true, acrossPanes: c.acrossPanes });
              c = 1;
              if (a5 && h) {
                if (e) {
                  var p = a5.toString() === h.toString();
                  c = 0;
                }
                for (e = 0; e < a5.length; e += 2) {
                  var n = a5[e], t = a5[e + 1], q2 = h[e], C = h[e + 1];
                  "M" !== n[0] && "L" !== n[0] || "M" !== t[0] && "L" !== t[0] || "M" !== q2[0] && "L" !== q2[0] || "M" !== C[0] && "L" !== C[0] || (k && q2[1] === n[1] ? (q2[1] += c, C[1] += c) : k || q2[2] !== n[2] || (q2[2] += c, C[2] += c), f.push(["M", n[1], n[2]], ["L", t[1], t[2]], ["L", C[1], C[2]], ["L", q2[1], q2[2]], ["Z"]));
                  f.isFlat = p;
                }
              }
              return f;
            };
            a4.prototype.addPlotBand = function(a5) {
              return this.addPlotBandOrLine(a5, "plotBands");
            };
            a4.prototype.addPlotLine = function(a5) {
              return this.addPlotBandOrLine(
                a5,
                "plotLines"
              );
            };
            a4.prototype.addPlotBandOrLine = function(a5, e) {
              var c = this, h = this.userOptions, f = new A(this, a5);
              this.visible && (f = f.render());
              if (f) {
                this._addedPlotLB || (this._addedPlotLB = true, (h.plotLines || []).concat(h.plotBands || []).forEach(function(a6) {
                  c.addPlotBandOrLine(a6);
                }));
                if (e) {
                  var k = h[e] || [];
                  k.push(a5);
                  h[e] = k;
                }
                this.plotLinesAndBands.push(f);
              }
              return f;
            };
            a4.prototype.removePlotBandOrLine = function(a5) {
              var e = this.plotLinesAndBands, c = this.options, h = this.userOptions;
              if (e) {
                for (var f = e.length; f--; )
                  e[f].id === a5 && e[f].destroy();
                [c.plotLines || [], h.plotLines || [], c.plotBands || [], h.plotBands || []].forEach(function(c2) {
                  for (f = c2.length; f--; )
                    (c2[f] || {}).id === a5 && v(c2, c2[f]);
                });
              }
            };
            a4.prototype.removePlotBand = function(a5) {
              this.removePlotBandOrLine(a5);
            };
            a4.prototype.removePlotLine = function(a5) {
              this.removePlotBandOrLine(a5);
            };
            return a4;
          }();
        })(y || (y = {}));
        return y;
      });
      M(a, "Core/Axis/PlotLineOrBand/PlotLineOrBand.js", [a["Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js"], a["Core/Utilities.js"]], function(a2, u) {
        var v = u.arrayMax, F = u.arrayMin, y = u.defined, G = u.destroyObjectProperties, H = u.erase, A = u.fireEvent, q = u.merge, n = u.objectEach, k = u.pick;
        u = function() {
          function e(a3, e2) {
            this.axis = a3;
            e2 && (this.options = e2, this.id = e2.id);
          }
          e.compose = function(c) {
            return a2.compose(e, c);
          };
          e.prototype.render = function() {
            A(this, "render");
            var a3 = this, e2 = a3.axis, f = e2.horiz, w = e2.logarithmic, p = a3.options, B = p.color, t = k(p.zIndex, 0), v2 = p.events, C = {}, r = e2.chart.renderer, l = p.label, b = a3.label, g = p.to, d = p.from, m = p.value, D = a3.svgElem, x = [], I = y(d) && y(g);
            x = y(m);
            var P = !D, S = { "class": "highcharts-plot-" + (I ? "band " : "line ") + (p.className || "") }, O = I ? "bands" : "lines";
            w && (d = w.log2lin(d), g = w.log2lin(g), m = w.log2lin(m));
            e2.chart.styledMode || (x ? (S.stroke = B || "#999999", S["stroke-width"] = k(p.width, 1), p.dashStyle && (S.dashstyle = p.dashStyle)) : I && (S.fill = B || "#e6ebf5", p.borderWidth && (S.stroke = p.borderColor, S["stroke-width"] = p.borderWidth)));
            C.zIndex = t;
            O += "-" + t;
            (w = e2.plotLinesAndBandsGroups[O]) || (e2.plotLinesAndBandsGroups[O] = w = r.g("plot-" + O).attr(C).add());
            P && (a3.svgElem = D = r.path().attr(S).add(w));
            if (x)
              x = e2.getPlotLinePath({
                value: m,
                lineWidth: D.strokeWidth(),
                acrossPanes: p.acrossPanes
              });
            else if (I)
              x = e2.getPlotBandPath(d, g, p);
            else
              return;
            !a3.eventsAdded && v2 && (n(v2, function(b2, d2) {
              D.on(d2, function(b3) {
                v2[d2].apply(a3, [b3]);
              });
            }), a3.eventsAdded = true);
            (P || !D.d) && x && x.length ? D.attr({ d: x }) : D && (x ? (D.show(true), D.animate({ d: x })) : D.d && (D.hide(), b && (a3.label = b = b.destroy())));
            l && (y(l.text) || y(l.formatter)) && x && x.length && 0 < e2.width && 0 < e2.height && !x.isFlat ? (l = q({ align: f && I && "center", x: f ? !I && 4 : 10, verticalAlign: !f && I && "middle", y: f ? I ? 16 : 10 : I ? 6 : -4, rotation: f && !I && 90 }, l), this.renderLabel(
              l,
              x,
              I,
              t
            )) : b && b.hide();
            return a3;
          };
          e.prototype.renderLabel = function(a3, e2, f, k2) {
            var c = this.axis, h = c.chart.renderer, n2 = this.label;
            n2 || (this.label = n2 = h.text(this.getLabelText(a3), 0, 0, a3.useHTML).attr({ align: a3.textAlign || a3.align, rotation: a3.rotation, "class": "highcharts-plot-" + (f ? "band" : "line") + "-label " + (a3.className || ""), zIndex: k2 }).add(), c.chart.styledMode || n2.css(q({ textOverflow: "ellipsis" }, a3.style)));
            k2 = e2.xBounds || [e2[0][1], e2[1][1], f ? e2[2][1] : e2[0][1]];
            e2 = e2.yBounds || [e2[0][2], e2[1][2], f ? e2[2][2] : e2[0][2]];
            f = F(k2);
            h = F(e2);
            n2.align(
              a3,
              false,
              { x: f, y: h, width: v(k2) - f, height: v(e2) - h }
            );
            n2.alignValue && "left" !== n2.alignValue || n2.css({ width: (90 === n2.rotation ? c.height - (n2.alignAttr.y - c.top) : c.width - (n2.alignAttr.x - c.left)) + "px" });
            n2.show(true);
          };
          e.prototype.getLabelText = function(a3) {
            return y(a3.formatter) ? a3.formatter.call(this) : a3.text;
          };
          e.prototype.destroy = function() {
            H(this.axis.plotLinesAndBands, this);
            delete this.axis;
            G(this);
          };
          return e;
        }();
        "";
        "";
        return u;
      });
      M(a, "Core/Tooltip.js", [
        a["Core/FormatUtilities.js"],
        a["Core/Globals.js"],
        a["Core/Renderer/RendererUtilities.js"],
        a["Core/Renderer/RendererRegistry.js"],
        a["Core/Utilities.js"]
      ], function(a2, u, z, F, y) {
        var v = a2.format, H = u.doc, A = z.distribute, q = y.addEvent, n = y.clamp, k = y.css, e = y.defined, c = y.discardElement, h = y.extend, f = y.fireEvent, w = y.isArray, p = y.isNumber, B = y.isString, t = y.merge, J = y.pick, C = y.splat, r = y.syncTimeout;
        a2 = function() {
          function a3(b, a4) {
            this.allowShared = true;
            this.container = void 0;
            this.crosshairs = [];
            this.distance = 0;
            this.isHidden = true;
            this.isSticky = false;
            this.now = {};
            this.options = {};
            this.outside = false;
            this.chart = b;
            this.init(b, a4);
          }
          a3.prototype.applyFilter = function() {
            var b = this.chart;
            b.renderer.definition({ tagName: "filter", attributes: { id: "drop-shadow-" + b.index, opacity: 0.5 }, children: [{ tagName: "feGaussianBlur", attributes: { "in": "SourceAlpha", stdDeviation: 1 } }, { tagName: "feOffset", attributes: { dx: 1, dy: 1 } }, { tagName: "feComponentTransfer", children: [{ tagName: "feFuncA", attributes: { type: "linear", slope: 0.3 } }] }, { tagName: "feMerge", children: [{ tagName: "feMergeNode" }, { tagName: "feMergeNode", attributes: { "in": "SourceGraphic" } }] }] });
          };
          a3.prototype.bodyFormatter = function(b) {
            return b.map(function(b2) {
              var a4 = b2.series.tooltipOptions;
              return (a4[(b2.point.formatPrefix || "point") + "Formatter"] || b2.point.tooltipFormatter).call(b2.point, a4[(b2.point.formatPrefix || "point") + "Format"] || "");
            });
          };
          a3.prototype.cleanSplit = function(b) {
            this.chart.series.forEach(function(a4) {
              var d = a4 && a4.tt;
              d && (!d.isActive || b ? a4.tt = d.destroy() : d.isActive = false);
            });
          };
          a3.prototype.defaultFormatter = function(b) {
            var a4 = this.points || C(this);
            var d = [b.tooltipFooterHeaderFormatter(a4[0])];
            d = d.concat(b.bodyFormatter(a4));
            d.push(b.tooltipFooterHeaderFormatter(
              a4[0],
              true
            ));
            return d;
          };
          a3.prototype.destroy = function() {
            this.label && (this.label = this.label.destroy());
            this.split && this.tt && (this.cleanSplit(true), this.tt = this.tt.destroy());
            this.renderer && (this.renderer = this.renderer.destroy(), c(this.container));
            y.clearTimeout(this.hideTimer);
            y.clearTimeout(this.tooltipTimeout);
          };
          a3.prototype.getAnchor = function(b, a4) {
            var d = this.chart, c2 = d.pointer, e2 = d.inverted, g = d.plotTop, l = d.plotLeft, f2, r2, h2 = 0, k2 = 0;
            b = C(b);
            this.followPointer && a4 ? ("undefined" === typeof a4.chartX && (a4 = c2.normalize(a4)), c2 = [a4.chartX - l, a4.chartY - g]) : b[0].tooltipPos ? c2 = b[0].tooltipPos : (b.forEach(function(b2) {
              f2 = b2.series.yAxis;
              r2 = b2.series.xAxis;
              h2 += b2.plotX || 0;
              k2 += b2.plotLow ? (b2.plotLow + (b2.plotHigh || 0)) / 2 : b2.plotY || 0;
              r2 && f2 && (e2 ? (h2 += g + d.plotHeight - r2.len - r2.pos, k2 += l + d.plotWidth - f2.len - f2.pos) : (h2 += r2.pos - l, k2 += f2.pos - g));
            }), h2 /= b.length, k2 /= b.length, c2 = [e2 ? d.plotWidth - k2 : h2, e2 ? d.plotHeight - h2 : k2], this.shared && 1 < b.length && a4 && (e2 ? c2[0] = a4.chartX - l : c2[1] = a4.chartY - g));
            return c2.map(Math.round);
          };
          a3.prototype.getLabel = function() {
            var b = this, a4 = this.chart.styledMode, d = this.options, c2 = this.split && this.allowShared, l = "tooltip" + (e(d.className) ? " " + d.className : ""), f2 = d.style.pointerEvents || (!this.followPointer && d.stickOnContact ? "auto" : "none"), r2 = function() {
              b.inContact = true;
            }, h2 = function(a5) {
              var d2 = b.chart.hoverSeries;
              b.inContact = b.shouldStickOnContact() && b.chart.pointer.inClass(a5.relatedTarget, "highcharts-tooltip");
              if (!b.inContact && d2 && d2.onMouseOut)
                d2.onMouseOut();
            }, p2, n2 = this.chart.renderer;
            if (b.label) {
              var t2 = !b.label.hasClass("highcharts-label");
              (c2 && !t2 || !c2 && t2) && b.destroy();
            }
            if (!this.label) {
              if (this.outside) {
                t2 = this.chart.options.chart.style;
                var C2 = F.getRendererType();
                this.container = p2 = u.doc.createElement("div");
                p2.className = "highcharts-tooltip-container";
                k(p2, { position: "absolute", top: "1px", pointerEvents: f2, zIndex: Math.max(this.options.style.zIndex || 0, (t2 && t2.zIndex || 0) + 3) });
                q(p2, "mouseenter", r2);
                q(p2, "mouseleave", h2);
                u.doc.body.appendChild(p2);
                this.renderer = n2 = new C2(p2, 0, 0, t2, void 0, void 0, n2.styledMode);
              }
              c2 ? this.label = n2.g(l) : (this.label = n2.label("", 0, 0, d.shape, void 0, void 0, d.useHTML, void 0, l).attr({ padding: d.padding, r: d.borderRadius }), a4 || this.label.attr({ fill: d.backgroundColor, "stroke-width": d.borderWidth }).css(d.style).css({ pointerEvents: f2 }).shadow(d.shadow));
              a4 && d.shadow && (this.applyFilter(), this.label.attr({ filter: "url(#drop-shadow-" + this.chart.index + ")" }));
              if (b.outside && !b.split) {
                var B2 = this.label, w2 = B2.xSetter, v2 = B2.ySetter;
                B2.xSetter = function(a5) {
                  w2.call(B2, b.distance);
                  p2.style.left = a5 + "px";
                };
                B2.ySetter = function(a5) {
                  v2.call(B2, b.distance);
                  p2.style.top = a5 + "px";
                };
              }
              this.label.on("mouseenter", r2).on("mouseleave", h2).attr({ zIndex: 8 }).add();
            }
            return this.label;
          };
          a3.prototype.getPosition = function(b, a4, d) {
            var c2 = this.chart, e2 = this.distance, g = {}, l = c2.inverted && d.h || 0, f2 = this.outside, r2 = f2 ? H.documentElement.clientWidth - 2 * e2 : c2.chartWidth, h2 = f2 ? Math.max(H.body.scrollHeight, H.documentElement.scrollHeight, H.body.offsetHeight, H.documentElement.offsetHeight, H.documentElement.clientHeight) : c2.chartHeight, k2 = c2.pointer.getChartPosition(), p2 = function(g2) {
              var m = "x" === g2;
              return [g2, m ? r2 : h2, m ? b : a4].concat(f2 ? [m ? b * k2.scaleX : a4 * k2.scaleY, m ? k2.left - e2 + (d.plotX + c2.plotLeft) * k2.scaleX : k2.top - e2 + (d.plotY + c2.plotTop) * k2.scaleY, 0, m ? r2 : h2] : [m ? b : a4, m ? d.plotX + c2.plotLeft : d.plotY + c2.plotTop, m ? c2.plotLeft : c2.plotTop, m ? c2.plotLeft + c2.plotWidth : c2.plotTop + c2.plotHeight]);
            }, n2 = p2("y"), t2 = p2("x"), C2;
            p2 = !!d.negative;
            !c2.polar && c2.hoverSeries && c2.hoverSeries.yAxis && c2.hoverSeries.yAxis.reversed && (p2 = !p2);
            var q2 = !this.followPointer && J(d.ttBelow, !c2.inverted === p2), B2 = function(b2, a5, d2, c3, m, r3, h3) {
              var x = f2 ? "y" === b2 ? e2 * k2.scaleY : e2 * k2.scaleX : e2, D = (d2 - c3) / 2, p3 = c3 < m - e2, E2 = m + e2 + c3 < a5, n3 = m - x - d2 + D;
              m = m + x - D;
              if (q2 && E2)
                g[b2] = m;
              else if (!q2 && p3)
                g[b2] = n3;
              else if (p3)
                g[b2] = Math.min(h3 - c3, 0 > n3 - l ? n3 : n3 - l);
              else if (E2)
                g[b2] = Math.max(r3, m + l + d2 > a5 ? m : m + l);
              else
                return false;
            }, w2 = function(b2, a5, d2, c3, m) {
              var l2;
              m < e2 || m > a5 - e2 ? l2 = false : g[b2] = m < d2 / 2 ? 1 : m > a5 - c3 / 2 ? a5 - c3 - 2 : m - d2 / 2;
              return l2;
            }, E = function(b2) {
              var a5 = n2;
              n2 = t2;
              t2 = a5;
              C2 = b2;
            }, T = function() {
              false !== B2.apply(0, n2) ? false !== w2.apply(0, t2) || C2 || (E(true), T()) : C2 ? g.x = g.y = 0 : (E(true), T());
            };
            (c2.inverted || 1 < this.len) && E();
            T();
            return g;
          };
          a3.prototype.hide = function(b) {
            var a4 = this;
            y.clearTimeout(this.hideTimer);
            b = J(b, this.options.hideDelay);
            this.isHidden || (this.hideTimer = r(function() {
              a4.getLabel().fadeOut(b ? void 0 : b);
              a4.isHidden = true;
            }, b));
          };
          a3.prototype.init = function(b, a4) {
            this.chart = b;
            this.options = a4;
            this.crosshairs = [];
            this.now = { x: 0, y: 0 };
            this.isHidden = true;
            this.split = a4.split && !b.inverted && !b.polar;
            this.shared = a4.shared || this.split;
            this.outside = J(a4.outside, !(!b.scrollablePixelsX && !b.scrollablePixelsY));
          };
          a3.prototype.shouldStickOnContact = function() {
            return !(this.followPointer || !this.options.stickOnContact);
          };
          a3.prototype.isStickyOnContact = function() {
            return !(!this.shouldStickOnContact() || !this.inContact);
          };
          a3.prototype.move = function(b, a4, d, c2) {
            var e2 = this, g = e2.now, m = false !== e2.options.animation && !e2.isHidden && (1 < Math.abs(b - g.x) || 1 < Math.abs(a4 - g.y)), l = e2.followPointer || 1 < e2.len;
            h(g, { x: m ? (2 * g.x + b) / 3 : b, y: m ? (g.y + a4) / 2 : a4, anchorX: l ? void 0 : m ? (2 * g.anchorX + d) / 3 : d, anchorY: l ? void 0 : m ? (g.anchorY + c2) / 2 : c2 });
            e2.getLabel().attr(g);
            e2.drawTracker();
            m && (y.clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function() {
              e2 && e2.move(b, a4, d, c2);
            }, 32));
          };
          a3.prototype.refresh = function(b, a4) {
            var d = this.chart, c2 = this.options, e2 = C(b), g = e2[0], l = [], r2 = c2.formatter || this.defaultFormatter, h2 = this.shared, k2 = d.styledMode, p2 = {};
            if (c2.enabled) {
              y.clearTimeout(this.hideTimer);
              this.allowShared = !(!w(b) && b.series && b.series.noSharedTooltip);
              this.followPointer = !this.split && g.series.tooltipOptions.followPointer;
              b = this.getAnchor(b, a4);
              var n2 = b[0], t2 = b[1];
              h2 && this.allowShared ? (d.pointer.applyInactiveState(e2), e2.forEach(function(b2) {
                b2.setState("hover");
                l.push(b2.getLabelConfig());
              }), p2 = { x: g.category, y: g.y }, p2.points = l) : p2 = g.getLabelConfig();
              this.len = l.length;
              r2 = r2.call(p2, this);
              h2 = g.series;
              this.distance = J(
                h2.tooltipOptions.distance,
                16
              );
              if (false === r2)
                this.hide();
              else {
                if (this.split && this.allowShared)
                  this.renderSplit(r2, e2);
                else {
                  var q2 = n2, B2 = t2;
                  a4 && d.pointer.isDirectTouch && (q2 = a4.chartX - d.plotLeft, B2 = a4.chartY - d.plotTop);
                  if (d.polar || false === h2.options.clip || e2.some(function(b2) {
                    return b2.series.shouldShowTooltip(q2, B2);
                  }))
                    a4 = this.getLabel(), c2.style.width && !k2 || a4.css({ width: this.chart.spacingBox.width + "px" }), a4.attr({ text: r2 && r2.join ? r2.join("") : r2 }), a4.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" + J(g.colorIndex, h2.colorIndex)), k2 || a4.attr({ stroke: c2.borderColor || g.color || h2.color || "#666666" }), this.updatePosition({ plotX: n2, plotY: t2, negative: g.negative, ttBelow: g.ttBelow, h: b[2] || 0 });
                  else {
                    this.hide();
                    return;
                  }
                }
                this.isHidden && this.label && this.label.attr({ opacity: 1 }).show();
                this.isHidden = false;
              }
              f(this, "refresh");
            }
          };
          a3.prototype.renderSplit = function(b, a4) {
            function d(b2, a5, d2, e3, g2) {
              void 0 === g2 && (g2 = true);
              d2 ? (a5 = X ? 0 : G, b2 = n(b2 - e3 / 2, N.left, N.right - e3 - (c2.outside ? R : 0))) : (a5 -= z2, b2 = g2 ? b2 - e3 - y2 : b2 + y2, b2 = n(b2, g2 ? b2 : N.left, N.right));
              return { x: b2, y: a5 };
            }
            var c2 = this, e2 = c2.chart, g = c2.chart, l = g.chartWidth, f2 = g.chartHeight, r2 = g.plotHeight, k2 = g.plotLeft, p2 = g.plotTop, t2 = g.pointer, C2 = g.scrollablePixelsY;
            C2 = void 0 === C2 ? 0 : C2;
            var q2 = g.scrollablePixelsX, w2 = g.scrollingContainer;
            w2 = void 0 === w2 ? { scrollLeft: 0, scrollTop: 0 } : w2;
            var v2 = w2.scrollLeft;
            w2 = w2.scrollTop;
            var u2 = g.styledMode, y2 = c2.distance, E = c2.options, T = c2.options.positioner, N = c2.outside && "number" !== typeof q2 ? H.documentElement.getBoundingClientRect() : { left: v2, right: v2 + l, top: w2, bottom: w2 + f2 }, V = c2.getLabel(), W = this.renderer || e2.renderer, X = !(!e2.xAxis[0] || !e2.xAxis[0].opposite);
            e2 = t2.getChartPosition();
            var R = e2.left;
            e2 = e2.top;
            var z2 = p2 + w2, aa = 0, G = r2 - C2;
            B(b) && (b = [false, b]);
            b = b.slice(0, a4.length + 1).reduce(function(b2, e3, g2) {
              if (false !== e3 && "" !== e3) {
                g2 = a4[g2 - 1] || { isHeader: true, plotX: a4[0].plotX, plotY: r2, series: {} };
                var m = g2.isHeader, l2 = m ? c2 : g2.series;
                e3 = e3.toString();
                var f3 = l2.tt, h2 = g2.isHeader;
                var x = g2.series;
                var D = "highcharts-color-" + J(g2.colorIndex, x.colorIndex, "none");
                f3 || (f3 = { padding: E.padding, r: E.borderRadius }, u2 || (f3.fill = E.backgroundColor, f3["stroke-width"] = E.borderWidth), f3 = W.label("", 0, 0, E[h2 ? "headerShape" : "shape"], void 0, void 0, E.useHTML).addClass((h2 ? "highcharts-tooltip-header " : "") + "highcharts-tooltip-box " + D).attr(f3).add(V));
                f3.isActive = true;
                f3.attr({ text: e3 });
                u2 || f3.css(E.style).shadow(E.shadow).attr({ stroke: E.borderColor || g2.color || x.color || "#333333" });
                l2 = l2.tt = f3;
                h2 = l2.getBBox();
                e3 = h2.width + l2.strokeWidth();
                m && (aa = h2.height, G += aa, X && (z2 -= aa));
                x = g2.plotX;
                x = void 0 === x ? 0 : x;
                D = g2.plotY;
                D = void 0 === D ? 0 : D;
                f3 = g2.series;
                if (g2.isHeader) {
                  x = k2 + x;
                  var t3 = p2 + r2 / 2;
                } else {
                  var I = f3.xAxis, C3 = f3.yAxis;
                  x = I.pos + n(x, -y2, I.len + y2);
                  f3.shouldShowTooltip(0, C3.pos - p2 + D, { ignoreX: true }) && (t3 = C3.pos + D);
                }
                x = n(
                  x,
                  N.left - y2,
                  N.right + y2
                );
                "number" === typeof t3 ? (h2 = h2.height + 1, D = T ? T.call(c2, e3, h2, g2) : d(x, t3, m, e3), b2.push({ align: T ? 0 : void 0, anchorX: x, anchorY: t3, boxWidth: e3, point: g2, rank: J(D.rank, m ? 1 : 0), size: h2, target: D.y, tt: l2, x: D.x })) : l2.isActive = false;
              }
              return b2;
            }, []);
            !T && b.some(function(b2) {
              var a5 = (c2.outside ? R : 0) + b2.anchorX;
              return a5 < N.left && a5 + b2.boxWidth < N.right ? true : a5 < R - N.left + b2.boxWidth && N.right - a5 > a5;
            }) && (b = b.map(function(b2) {
              var a5 = d(b2.anchorX, b2.anchorY, b2.point.isHeader, b2.boxWidth, false);
              return h(b2, { target: a5.y, x: a5.x });
            }));
            c2.cleanSplit();
            A(b, G);
            var F2 = R, ba = R;
            b.forEach(function(b2) {
              var a5 = b2.x, d2 = b2.boxWidth;
              b2 = b2.isHeader;
              b2 || (c2.outside && R + a5 < F2 && (F2 = R + a5), !b2 && c2.outside && F2 + d2 > ba && (ba = R + a5));
            });
            b.forEach(function(b2) {
              var a5 = b2.x, d2 = b2.anchorX, e3 = b2.pos, g2 = b2.point.isHeader;
              e3 = { visibility: "undefined" === typeof e3 ? "hidden" : "inherit", x: a5, y: e3 + z2, anchorX: d2, anchorY: b2.anchorY };
              if (c2.outside && a5 < d2) {
                var m = R - F2;
                0 < m && (g2 || (e3.x = a5 + m, e3.anchorX = d2 + m), g2 && (e3.x = (ba - F2) / 2, e3.anchorX = d2 + m));
              }
              b2.tt.attr(e3);
            });
            b = c2.container;
            C2 = c2.renderer;
            c2.outside && b && C2 && (g = V.getBBox(), C2.setSize(g.width + g.x, g.height + g.y, false), b.style.left = F2 + "px", b.style.top = e2 + "px");
          };
          a3.prototype.drawTracker = function() {
            if (this.followPointer || !this.options.stickOnContact)
              this.tracker && this.tracker.destroy();
            else {
              var b = this.chart, a4 = this.label, d = this.shared ? b.hoverPoints : b.hoverPoint;
              if (a4 && d) {
                var c2 = { x: 0, y: 0, width: 0, height: 0 };
                d = this.getAnchor(d);
                var e2 = a4.getBBox();
                d[0] += b.plotLeft - a4.translateX;
                d[1] += b.plotTop - a4.translateY;
                c2.x = Math.min(0, d[0]);
                c2.y = Math.min(0, d[1]);
                c2.width = 0 > d[0] ? Math.max(Math.abs(d[0]), e2.width - d[0]) : Math.max(
                  Math.abs(d[0]),
                  e2.width
                );
                c2.height = 0 > d[1] ? Math.max(Math.abs(d[1]), e2.height - Math.abs(d[1])) : Math.max(Math.abs(d[1]), e2.height);
                this.tracker ? this.tracker.attr(c2) : (this.tracker = a4.renderer.rect(c2).addClass("highcharts-tracker").add(a4), b.styledMode || this.tracker.attr({ fill: "rgba(0,0,0,0)" }));
              }
            }
          };
          a3.prototype.styledModeFormat = function(b) {
            return b.replace('style="font-size: 10px"', 'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class="highcharts-color-{$1.colorIndex}"');
          };
          a3.prototype.tooltipFooterHeaderFormatter = function(b, a4) {
            var d = b.series, c2 = d.tooltipOptions, e2 = d.xAxis, g = e2 && e2.dateTime;
            e2 = { isFooter: a4, labelConfig: b };
            var l = c2.xDateFormat, r2 = c2[a4 ? "footerFormat" : "headerFormat"];
            f(this, "headerFormatter", e2, function(a5) {
              g && !l && p(b.key) && (l = g.getXDateFormat(b.key, c2.dateTimeLabelFormats));
              g && l && (b.point && b.point.tooltipDateKeys || ["key"]).forEach(function(b2) {
                r2 = r2.replace("{point." + b2 + "}", "{point." + b2 + ":" + l + "}");
              });
              d.chart.styledMode && (r2 = this.styledModeFormat(r2));
              a5.text = v(r2, { point: b, series: d }, this.chart);
            });
            return e2.text;
          };
          a3.prototype.update = function(b) {
            this.destroy();
            t(true, this.chart.options.tooltip.userOptions, b);
            this.init(this.chart, t(true, this.options, b));
          };
          a3.prototype.updatePosition = function(b) {
            var a4 = this.chart, d = this.options, c2 = a4.pointer, e2 = this.getLabel();
            c2 = c2.getChartPosition();
            var l = (d.positioner || this.getPosition).call(this, e2.width, e2.height, b), f2 = b.plotX + a4.plotLeft;
            b = b.plotY + a4.plotTop;
            if (this.outside) {
              d = d.borderWidth + 2 * this.distance;
              this.renderer.setSize(e2.width + d, e2.height + d, false);
              if (1 !== c2.scaleX || 1 !== c2.scaleY)
                k(this.container, { transform: "scale(" + c2.scaleX + ", " + c2.scaleY + ")" }), f2 *= c2.scaleX, b *= c2.scaleY;
              f2 += c2.left - l.x;
              b += c2.top - l.y;
            }
            this.move(Math.round(l.x), Math.round(l.y || 0), f2, b);
          };
          return a3;
        }();
        "";
        return a2;
      });
      M(a, "Core/Series/Point.js", [a["Core/Renderer/HTML/AST.js"], a["Core/Animation/AnimationUtilities.js"], a["Core/DefaultOptions.js"], a["Core/FormatUtilities.js"], a["Core/Utilities.js"]], function(a2, u, z, F, y) {
        var v = u.animObject, H = z.defaultOptions, A = F.format, q = y.addEvent, n = y.defined, k = y.erase, e = y.extend, c = y.fireEvent, h = y.getNestedProperty, f = y.isArray, w = y.isFunction, p = y.isNumber, B = y.isObject, t = y.merge, J = y.objectEach, C = y.pick, r = y.syncTimeout, l = y.removeEvent, b = y.uniqueKey;
        u = function() {
          function g() {
            this.colorIndex = this.category = void 0;
            this.formatPrefix = "point";
            this.id = void 0;
            this.isNull = false;
            this.percentage = this.options = this.name = void 0;
            this.selected = false;
            this.total = this.series = void 0;
            this.visible = true;
            this.x = void 0;
          }
          g.prototype.animateBeforeDestroy = function() {
            var b2 = this, a3 = { x: b2.startXPos, opacity: 0 }, c2 = b2.getGraphicalProps();
            c2.singular.forEach(function(d) {
              b2[d] = b2[d].animate("dataLabel" === d ? { x: b2[d].startXPos, y: b2[d].startYPos, opacity: 0 } : a3);
            });
            c2.plural.forEach(function(a4) {
              b2[a4].forEach(function(a5) {
                a5.element && a5.animate(e({ x: b2.startXPos }, a5.startYPos ? { x: a5.startXPos, y: a5.startYPos } : {}));
              });
            });
          };
          g.prototype.applyOptions = function(b2, a3) {
            var d = this.series, c2 = d.options.pointValKey || d.pointValKey;
            b2 = g.prototype.optionsToObject.call(this, b2);
            e(this, b2);
            this.options = this.options ? e(this.options, b2) : b2;
            b2.group && delete this.group;
            b2.dataLabels && delete this.dataLabels;
            c2 && (this.y = g.prototype.getNestedProperty.call(
              this,
              c2
            ));
            this.formatPrefix = (this.isNull = C(this.isValid && !this.isValid(), null === this.x || !p(this.y))) ? "null" : "point";
            this.selected && (this.state = "select");
            "name" in this && "undefined" === typeof a3 && d.xAxis && d.xAxis.hasNames && (this.x = d.xAxis.nameToX(this));
            "undefined" === typeof this.x && d ? this.x = "undefined" === typeof a3 ? d.autoIncrement() : a3 : p(b2.x) && d.options.relativeXValue && (this.x = d.autoIncrement(b2.x));
            return this;
          };
          g.prototype.destroy = function() {
            function b2() {
              if (a3.graphic || a3.dataLabel || a3.dataLabels)
                l(a3), a3.destroyElements();
              for (h2 in a3)
                a3[h2] = null;
            }
            var a3 = this, c2 = a3.series, e2 = c2.chart;
            c2 = c2.options.dataSorting;
            var g2 = e2.hoverPoints, f2 = v(a3.series.chart.renderer.globalAnimation), h2;
            a3.legendItem && e2.legend.destroyItem(a3);
            g2 && (a3.setState(), k(g2, a3), g2.length || (e2.hoverPoints = null));
            if (a3 === e2.hoverPoint)
              a3.onMouseOut();
            c2 && c2.enabled ? (this.animateBeforeDestroy(), r(b2, f2.duration)) : b2();
            e2.pointCount--;
          };
          g.prototype.destroyElements = function(b2) {
            var a3 = this;
            b2 = a3.getGraphicalProps(b2);
            b2.singular.forEach(function(b3) {
              a3[b3] = a3[b3].destroy();
            });
            b2.plural.forEach(function(b3) {
              a3[b3].forEach(function(b4) {
                b4.element && b4.destroy();
              });
              delete a3[b3];
            });
          };
          g.prototype.firePointEvent = function(b2, a3, e2) {
            var d = this, g2 = this.series.options;
            (g2.point.events[b2] || d.options && d.options.events && d.options.events[b2]) && d.importEvents();
            "click" === b2 && g2.allowPointSelect && (e2 = function(b3) {
              d.select && d.select(null, b3.ctrlKey || b3.metaKey || b3.shiftKey);
            });
            c(d, b2, a3, e2);
          };
          g.prototype.getClassName = function() {
            return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + ("undefined" !== typeof this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "");
          };
          g.prototype.getGraphicalProps = function(b2) {
            var a3 = this, d = [], c2 = { singular: [], plural: [] }, e2;
            b2 = b2 || { graphic: 1, dataLabel: 1 };
            b2.graphic && d.push("graphic", "upperGraphic", "shadowGroup");
            b2.dataLabel && d.push("dataLabel", "dataLabelUpper", "connector");
            for (e2 = d.length; e2--; ) {
              var g2 = d[e2];
              a3[g2] && c2.singular.push(g2);
            }
            ["dataLabel", "connector"].forEach(function(d2) {
              var e3 = d2 + "s";
              b2[d2] && a3[e3] && c2.plural.push(e3);
            });
            return c2;
          };
          g.prototype.getLabelConfig = function() {
            return { x: this.category, y: this.y, color: this.color, colorIndex: this.colorIndex, key: this.name || this.category, series: this.series, point: this, percentage: this.percentage, total: this.total || this.stackTotal };
          };
          g.prototype.getNestedProperty = function(b2) {
            if (b2)
              return 0 === b2.indexOf("custom.") ? h(b2, this.options) : this[b2];
          };
          g.prototype.getZone = function() {
            var b2 = this.series, a3 = b2.zones;
            b2 = b2.zoneAxis || "y";
            var c2, e2 = 0;
            for (c2 = a3[e2]; this[b2] >= c2.value; )
              c2 = a3[++e2];
            this.nonZonedColor || (this.nonZonedColor = this.color);
            this.color = c2 && c2.color && !this.options.color ? c2.color : this.nonZonedColor;
            return c2;
          };
          g.prototype.hasNewShapeType = function() {
            return (this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName)) !== this.shapeType;
          };
          g.prototype.init = function(a3, e2, g2) {
            this.series = a3;
            this.applyOptions(e2, g2);
            this.id = n(this.id) ? this.id : b();
            this.resolveColor();
            a3.chart.pointCount++;
            c(this, "afterInit");
            return this;
          };
          g.prototype.optionsToObject = function(b2) {
            var a3 = this.series, d = a3.options.keys, c2 = d || a3.pointArrayMap || ["y"], e2 = c2.length, l2 = {}, r2 = 0, h2 = 0;
            if (p(b2) || null === b2)
              l2[c2[0]] = b2;
            else if (f(b2))
              for (!d && b2.length > e2 && (a3 = typeof b2[0], "string" === a3 ? l2.name = b2[0] : "number" === a3 && (l2.x = b2[0]), r2++); h2 < e2; )
                d && "undefined" === typeof b2[r2] || (0 < c2[h2].indexOf(".") ? g.prototype.setNestedProperty(l2, b2[r2], c2[h2]) : l2[c2[h2]] = b2[r2]), r2++, h2++;
            else
              "object" === typeof b2 && (l2 = b2, b2.dataLabels && (a3._hasPointLabels = true), b2.marker && (a3._hasPointMarkers = true));
            return l2;
          };
          g.prototype.resolveColor = function() {
            var b2 = this.series, a3 = b2.chart.styledMode;
            var c2 = b2.chart.options.chart.colorCount;
            delete this.nonZonedColor;
            if (b2.options.colorByPoint) {
              if (!a3) {
                c2 = b2.options.colors || b2.chart.options.colors;
                var e2 = c2[b2.colorCounter];
                c2 = c2.length;
              }
              a3 = b2.colorCounter;
              b2.colorCounter++;
              b2.colorCounter === c2 && (b2.colorCounter = 0);
            } else
              a3 || (e2 = b2.color), a3 = b2.colorIndex;
            this.colorIndex = C(this.options.colorIndex, a3);
            this.color = C(this.options.color, e2);
          };
          g.prototype.setNestedProperty = function(b2, a3, c2) {
            c2.split(".").reduce(function(b3, d, c3, e2) {
              b3[d] = e2.length - 1 === c3 ? a3 : B(b3[d], true) ? b3[d] : {};
              return b3[d];
            }, b2);
            return b2;
          };
          g.prototype.tooltipFormatter = function(b2) {
            var a3 = this.series, d = a3.tooltipOptions, c2 = C(d.valueDecimals, ""), e2 = d.valuePrefix || "", g2 = d.valueSuffix || "";
            a3.chart.styledMode && (b2 = a3.chart.tooltip.styledModeFormat(b2));
            (a3.pointArrayMap || ["y"]).forEach(function(a4) {
              a4 = "{point." + a4;
              if (e2 || g2)
                b2 = b2.replace(RegExp(a4 + "}", "g"), e2 + a4 + "}" + g2);
              b2 = b2.replace(RegExp(a4 + "}", "g"), a4 + ":,." + c2 + "f}");
            });
            return A(b2, { point: this, series: this.series }, a3.chart);
          };
          g.prototype.update = function(b2, a3, c2, e2) {
            function d() {
              g2.applyOptions(b2);
              var d2 = m && g2.hasDummyGraphic;
              d2 = null === g2.y ? !d2 : d2;
              m && d2 && (g2.graphic = m.destroy(), delete g2.hasDummyGraphic);
              B(b2, true) && (m && m.element && b2 && b2.marker && "undefined" !== typeof b2.marker.symbol && (g2.graphic = m.destroy()), b2 && b2.dataLabels && g2.dataLabel && (g2.dataLabel = g2.dataLabel.destroy()), g2.connector && (g2.connector = g2.connector.destroy()));
              h2 = g2.index;
              l2.updateParallelArrays(g2, h2);
              r2.data[h2] = B(r2.data[h2], true) || B(b2, true) ? g2.options : C(b2, r2.data[h2]);
              l2.isDirty = l2.isDirtyData = true;
              !l2.fixedBox && l2.hasCartesianSeries && (f2.isDirtyBox = true);
              "point" === r2.legendType && (f2.isDirtyLegend = true);
              a3 && f2.redraw(c2);
            }
            var g2 = this, l2 = g2.series, m = g2.graphic, f2 = l2.chart, r2 = l2.options, h2;
            a3 = C(a3, true);
            false === e2 ? d() : g2.firePointEvent("update", { options: b2 }, d);
          };
          g.prototype.remove = function(b2, a3) {
            this.series.removePoint(this.series.data.indexOf(this), b2, a3);
          };
          g.prototype.select = function(b2, a3) {
            var d = this, c2 = d.series, e2 = c2.chart;
            this.selectedStaging = b2 = C(b2, !d.selected);
            d.firePointEvent(b2 ? "select" : "unselect", { accumulate: a3 }, function() {
              d.selected = d.options.selected = b2;
              c2.options.data[c2.data.indexOf(d)] = d.options;
              d.setState(b2 && "select");
              a3 || e2.getSelectedPoints().forEach(function(b3) {
                var a4 = b3.series;
                b3.selected && b3 !== d && (b3.selected = b3.options.selected = false, a4.options.data[a4.data.indexOf(b3)] = b3.options, b3.setState(e2.hoverPoints && a4.options.inactiveOtherPoints ? "inactive" : ""), b3.firePointEvent("unselect"));
              });
            });
            delete this.selectedStaging;
          };
          g.prototype.onMouseOver = function(b2) {
            var a3 = this.series.chart, d = a3.pointer;
            b2 = b2 ? d.normalize(b2) : d.getChartCoordinatesFromPoint(this, a3.inverted);
            d.runPointActions(
              b2,
              this
            );
          };
          g.prototype.onMouseOut = function() {
            var b2 = this.series.chart;
            this.firePointEvent("mouseOut");
            this.series.options.inactiveOtherPoints || (b2.hoverPoints || []).forEach(function(b3) {
              b3.setState();
            });
            b2.hoverPoints = b2.hoverPoint = null;
          };
          g.prototype.importEvents = function() {
            if (!this.hasImportedEvents) {
              var b2 = this, a3 = t(b2.series.options.point, b2.options).events;
              b2.events = a3;
              J(a3, function(a4, d) {
                w(a4) && q(b2, d, a4);
              });
              this.hasImportedEvents = true;
            }
          };
          g.prototype.setState = function(b2, g2) {
            var d = this.series, l2 = this.state, m = d.options.states[b2 || "normal"] || {}, f2 = H.plotOptions[d.type].marker && d.options.marker, r2 = f2 && false === f2.enabled, h2 = f2 && f2.states && f2.states[b2 || "normal"] || {}, k2 = false === h2.enabled, n2 = this.marker || {}, t2 = d.chart, q2 = f2 && d.markerAttribs, w2 = d.halo, B2, v2 = d.stateMarkerGraphic;
            b2 = b2 || "";
            if (!(b2 === this.state && !g2 || this.selected && "select" !== b2 || false === m.enabled || b2 && (k2 || r2 && false === h2.enabled) || b2 && n2.states && n2.states[b2] && false === n2.states[b2].enabled)) {
              this.state = b2;
              q2 && (B2 = d.markerAttribs(this, b2));
              if (this.graphic && !this.hasDummyGraphic) {
                l2 && this.graphic.removeClass("highcharts-point-" + l2);
                b2 && this.graphic.addClass("highcharts-point-" + b2);
                if (!t2.styledMode) {
                  var J2 = d.pointAttribs(this, b2);
                  var E = C(t2.options.chart.animation, m.animation);
                  d.options.inactiveOtherPoints && p(J2.opacity) && ((this.dataLabels || []).forEach(function(b3) {
                    b3 && b3.animate({ opacity: J2.opacity }, E);
                  }), this.connector && this.connector.animate({ opacity: J2.opacity }, E));
                  this.graphic.animate(J2, E);
                }
                B2 && this.graphic.animate(B2, C(t2.options.chart.animation, h2.animation, f2.animation));
                v2 && v2.hide();
              } else {
                if (b2 && h2) {
                  l2 = n2.symbol || d.symbol;
                  v2 && v2.currentSymbol !== l2 && (v2 = v2.destroy());
                  if (B2)
                    if (v2)
                      v2[g2 ? "animate" : "attr"]({ x: B2.x, y: B2.y });
                    else
                      l2 && (d.stateMarkerGraphic = v2 = t2.renderer.symbol(l2, B2.x, B2.y, B2.width, B2.height).add(d.markerGroup), v2.currentSymbol = l2);
                  !t2.styledMode && v2 && "inactive" !== this.state && v2.attr(d.pointAttribs(this, b2));
                }
                v2 && (v2[b2 && this.isInside ? "show" : "hide"](), v2.element.point = this, v2.addClass(this.getClassName(), true));
              }
              m = m.halo;
              B2 = (v2 = this.graphic || v2) && v2.visibility || "inherit";
              m && m.size && v2 && "hidden" !== B2 && !this.isCluster ? (w2 || (d.halo = w2 = t2.renderer.path().add(v2.parentGroup)), w2.show()[g2 ? "animate" : "attr"]({ d: this.haloPath(m.size) }), w2.attr({ "class": "highcharts-halo highcharts-color-" + C(this.colorIndex, d.colorIndex) + (this.className ? " " + this.className : ""), visibility: B2, zIndex: -1 }), w2.point = this, t2.styledMode || w2.attr(e({ fill: this.color || d.color, "fill-opacity": m.opacity }, a2.filterUserAttributes(m.attributes || {})))) : w2 && w2.point && w2.point.haloPath && w2.animate({ d: w2.point.haloPath(0) }, null, w2.hide);
              c(this, "afterSetState", { state: b2 });
            }
          };
          g.prototype.haloPath = function(b2) {
            return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - b2, this.plotY - b2, 2 * b2, 2 * b2);
          };
          return g;
        }();
        "";
        return u;
      });
      M(a, "Core/Pointer.js", [a["Core/Color/Color.js"], a["Core/Globals.js"], a["Core/Tooltip.js"], a["Core/Utilities.js"]], function(a2, u, z, F) {
        var v = a2.parse, G = u.charts, H = u.noop, A = F.addEvent, q = F.attr, n = F.css, k = F.defined, e = F.extend, c = F.find, h = F.fireEvent, f = F.isNumber, w = F.isObject, p = F.objectEach, B = F.offset, t = F.pick, J = F.splat;
        a2 = function() {
          function a3(a4, c2) {
            this.lastValidTouch = {};
            this.pinchDown = [];
            this.runChartClick = false;
            this.eventsToUnbind = [];
            this.chart = a4;
            this.hasDragged = false;
            this.options = c2;
            this.init(a4, c2);
          }
          a3.prototype.applyInactiveState = function(a4) {
            var c2 = [], b;
            (a4 || []).forEach(function(a5) {
              b = a5.series;
              c2.push(b);
              b.linkedParent && c2.push(b.linkedParent);
              b.linkedSeries && (c2 = c2.concat(b.linkedSeries));
              b.navigatorSeries && c2.push(b.navigatorSeries);
            });
            this.chart.series.forEach(function(b2) {
              -1 === c2.indexOf(b2) ? b2.setState("inactive", true) : b2.options.inactiveOtherPoints && b2.setAllPointsToState("inactive");
            });
          };
          a3.prototype.destroy = function() {
            var c2 = this;
            this.eventsToUnbind.forEach(function(a4) {
              return a4();
            });
            this.eventsToUnbind = [];
            u.chartCount || (a3.unbindDocumentMouseUp && (a3.unbindDocumentMouseUp = a3.unbindDocumentMouseUp()), a3.unbindDocumentTouchEnd && (a3.unbindDocumentTouchEnd = a3.unbindDocumentTouchEnd()));
            clearInterval(c2.tooltipTimeout);
            p(c2, function(a4, b) {
              c2[b] = void 0;
            });
          };
          a3.prototype.drag = function(a4) {
            var c2 = this.chart, b = c2.options.chart, e2 = this.zoomHor, d = this.zoomVert, m = c2.plotLeft, f2 = c2.plotTop, h2 = c2.plotWidth, r = c2.plotHeight, k2 = this.mouseDownX || 0, p2 = this.mouseDownY || 0, n2 = w(b.panning) ? b.panning && b.panning.enabled : b.panning, t2 = b.panKey && a4[b.panKey + "Key"], q2 = a4.chartX, B2 = a4.chartY, C = this.selectionMarker;
            if (!C || !C.touch) {
              if (q2 < m ? q2 = m : q2 > m + h2 && (q2 = m + h2), B2 < f2 ? B2 = f2 : B2 > f2 + r && (B2 = f2 + r), this.hasDragged = Math.sqrt(Math.pow(k2 - q2, 2) + Math.pow(p2 - B2, 2)), 10 < this.hasDragged) {
                var J2 = c2.isInsidePlot(k2 - m, p2 - f2, { visiblePlotOnly: true });
                !c2.hasCartesianSeries && !c2.mapView || !this.zoomX && !this.zoomY || !J2 || t2 || C || (this.selectionMarker = C = c2.renderer.rect(m, f2, e2 ? 1 : h2, d ? 1 : r, 0).attr({ "class": "highcharts-selection-marker", zIndex: 7 }).add(), c2.styledMode || C.attr({ fill: b.selectionMarkerFill || v("#335cad").setOpacity(0.25).get() }));
                C && e2 && (e2 = q2 - k2, C.attr({ width: Math.abs(e2), x: (0 < e2 ? 0 : e2) + k2 }));
                C && d && (e2 = B2 - p2, C.attr({ height: Math.abs(e2), y: (0 < e2 ? 0 : e2) + p2 }));
                J2 && !C && n2 && c2.pan(a4, b.panning);
              }
            }
          };
          a3.prototype.dragStart = function(a4) {
            var c2 = this.chart;
            c2.mouseIsDown = a4.type;
            c2.cancelClick = false;
            c2.mouseDownX = this.mouseDownX = a4.chartX;
            c2.mouseDownY = this.mouseDownY = a4.chartY;
          };
          a3.prototype.drop = function(a4) {
            var c2 = this, b = this.chart, g = this.hasPinched;
            if (this.selectionMarker) {
              var d = this.selectionMarker, m = d.attr ? d.attr("x") : d.x, r = d.attr ? d.attr("y") : d.y, p2 = d.attr ? d.attr("width") : d.width, t2 = d.attr ? d.attr("height") : d.height, q2 = { originalEvent: a4, xAxis: [], yAxis: [], x: m, y: r, width: p2, height: t2 }, B2 = !!b.mapView;
              if (this.hasDragged || g)
                b.axes.forEach(function(b2) {
                  if (b2.zoomEnabled && k(b2.min) && (g || c2[{ xAxis: "zoomX", yAxis: "zoomY" }[b2.coll]]) && f(m) && f(r)) {
                    var d2 = b2.horiz, e2 = "touchend" === a4.type ? b2.minPixelPadding : 0, l = b2.toValue((d2 ? m : r) + e2);
                    d2 = b2.toValue((d2 ? m + p2 : r + t2) - e2);
                    q2[b2.coll].push({ axis: b2, min: Math.min(l, d2), max: Math.max(l, d2) });
                    B2 = true;
                  }
                }), B2 && h(b, "selection", q2, function(a5) {
                  b.zoom(e(
                    a5,
                    g ? { animation: false } : null
                  ));
                });
              f(b.index) && (this.selectionMarker = this.selectionMarker.destroy());
              g && this.scaleGroups();
            }
            b && f(b.index) && (n(b.container, { cursor: b._cursor }), b.cancelClick = 10 < this.hasDragged, b.mouseIsDown = this.hasDragged = this.hasPinched = false, this.pinchDown = []);
          };
          a3.prototype.findNearestKDPoint = function(a4, c2, b) {
            var e2 = this.chart, d = e2.hoverPoint;
            e2 = e2.tooltip;
            if (d && e2 && e2.isStickyOnContact())
              return d;
            var l;
            a4.forEach(function(a5) {
              var d2 = !(a5.noSharedTooltip && c2) && 0 > a5.options.findNearestPointBy.indexOf("y");
              a5 = a5.searchPoint(b, d2);
              if ((d2 = w(a5, true) && a5.series) && !(d2 = !w(l, true))) {
                d2 = l.distX - a5.distX;
                var e3 = l.dist - a5.dist, g = (a5.series.group && a5.series.group.zIndex) - (l.series.group && l.series.group.zIndex);
                d2 = 0 < (0 !== d2 && c2 ? d2 : 0 !== e3 ? e3 : 0 !== g ? g : l.series.index > a5.series.index ? -1 : 1);
              }
              d2 && (l = a5);
            });
            return l;
          };
          a3.prototype.getChartCoordinatesFromPoint = function(a4, c2) {
            var b = a4.series, e2 = b.xAxis;
            b = b.yAxis;
            var d = a4.shapeArgs;
            if (e2 && b) {
              var l = t(a4.clientX, a4.plotX), h2 = a4.plotY || 0;
              a4.isNode && d && f(d.x) && f(d.y) && (l = d.x, h2 = d.y);
              return c2 ? { chartX: b.len + b.pos - h2, chartY: e2.len + e2.pos - l } : { chartX: l + e2.pos, chartY: h2 + b.pos };
            }
            if (d && d.x && d.y)
              return { chartX: d.x, chartY: d.y };
          };
          a3.prototype.getChartPosition = function() {
            if (this.chartPosition)
              return this.chartPosition;
            var a4 = this.chart.container, c2 = B(a4);
            this.chartPosition = { left: c2.left, top: c2.top, scaleX: 1, scaleY: 1 };
            var b = a4.offsetWidth;
            a4 = a4.offsetHeight;
            2 < b && 2 < a4 && (this.chartPosition.scaleX = c2.width / b, this.chartPosition.scaleY = c2.height / a4);
            return this.chartPosition;
          };
          a3.prototype.getCoordinates = function(a4) {
            var c2 = { xAxis: [], yAxis: [] };
            this.chart.axes.forEach(function(b) {
              c2[b.isXAxis ? "xAxis" : "yAxis"].push({ axis: b, value: b.toValue(a4[b.horiz ? "chartX" : "chartY"]) });
            });
            return c2;
          };
          a3.prototype.getHoverData = function(a4, e2, b, g, d, m) {
            var l = [];
            g = !(!g || !a4);
            var f2 = { chartX: m ? m.chartX : void 0, chartY: m ? m.chartY : void 0, shared: d };
            h(this, "beforeGetHoverData", f2);
            var r = e2 && !e2.stickyTracking ? [e2] : b.filter(function(b2) {
              return f2.filter ? f2.filter(b2) : b2.visible && !(!d && b2.directTouch) && t(b2.options.enableMouseTracking, true) && b2.stickyTracking;
            });
            var k2 = g || !m ? a4 : this.findNearestKDPoint(r, d, m);
            e2 = k2 && k2.series;
            k2 && (d && !e2.noSharedTooltip ? (r = b.filter(function(b2) {
              return f2.filter ? f2.filter(b2) : b2.visible && !(!d && b2.directTouch) && t(b2.options.enableMouseTracking, true) && !b2.noSharedTooltip;
            }), r.forEach(function(b2) {
              var a5 = c(b2.points, function(b3) {
                return b3.x === k2.x && !b3.isNull;
              });
              w(a5) && (b2.chart.isBoosting && (a5 = b2.getPoint(a5)), l.push(a5));
            })) : l.push(k2));
            f2 = { hoverPoint: k2 };
            h(this, "afterGetHoverData", f2);
            return { hoverPoint: f2.hoverPoint, hoverSeries: e2, hoverPoints: l };
          };
          a3.prototype.getPointFromEvent = function(a4) {
            a4 = a4.target;
            for (var c2; a4 && !c2; )
              c2 = a4.point, a4 = a4.parentNode;
            return c2;
          };
          a3.prototype.onTrackerMouseOut = function(a4) {
            a4 = a4.relatedTarget || a4.toElement;
            var c2 = this.chart.hoverSeries;
            this.isDirectTouch = false;
            if (!(!c2 || !a4 || c2.stickyTracking || this.inClass(a4, "highcharts-tooltip") || this.inClass(a4, "highcharts-series-" + c2.index) && this.inClass(a4, "highcharts-tracker")))
              c2.onMouseOut();
          };
          a3.prototype.inClass = function(a4, c2) {
            for (var b; a4; ) {
              if (b = q(a4, "class")) {
                if (-1 !== b.indexOf(c2))
                  return true;
                if (-1 !== b.indexOf("highcharts-container"))
                  return false;
              }
              a4 = a4.parentNode;
            }
          };
          a3.prototype.init = function(a4, c2) {
            this.options = c2;
            this.chart = a4;
            this.runChartClick = !(!c2.chart.events || !c2.chart.events.click);
            this.pinchDown = [];
            this.lastValidTouch = {};
            z && (a4.tooltip = new z(a4, c2.tooltip), this.followTouchMove = t(c2.tooltip.followTouchMove, true));
            this.setDOMEvents();
          };
          a3.prototype.normalize = function(a4, c2) {
            var b = a4.touches, g = b ? b.length ? b.item(0) : t(b.changedTouches, a4.changedTouches)[0] : a4;
            c2 || (c2 = this.getChartPosition());
            b = g.pageX - c2.left;
            g = g.pageY - c2.top;
            b /= c2.scaleX;
            g /= c2.scaleY;
            return e(a4, { chartX: Math.round(b), chartY: Math.round(g) });
          };
          a3.prototype.onContainerClick = function(a4) {
            var c2 = this.chart, b = c2.hoverPoint;
            a4 = this.normalize(a4);
            var g = c2.plotLeft, d = c2.plotTop;
            c2.cancelClick || (b && this.inClass(a4.target, "highcharts-tracker") ? (h(b.series, "click", e(a4, { point: b })), c2.hoverPoint && b.firePointEvent("click", a4)) : (e(a4, this.getCoordinates(a4)), c2.isInsidePlot(a4.chartX - g, a4.chartY - d, { visiblePlotOnly: true }) && h(c2, "click", a4)));
          };
          a3.prototype.onContainerMouseDown = function(a4) {
            var c2 = 1 === ((a4.buttons || a4.button) & 1);
            a4 = this.normalize(a4);
            if (u.isFirefox && 0 !== a4.button)
              this.onContainerMouseMove(a4);
            if ("undefined" === typeof a4.button || c2)
              this.zoomOption(a4), c2 && a4.preventDefault && a4.preventDefault(), this.dragStart(a4);
          };
          a3.prototype.onContainerMouseLeave = function(c2) {
            var e2 = G[t(a3.hoverChartIndex, -1)], b = this.chart.tooltip;
            b && b.shouldStickOnContact() && this.inClass(c2.relatedTarget, "highcharts-tooltip-container") || (c2 = this.normalize(c2), e2 && (c2.relatedTarget || c2.toElement) && (e2.pointer.reset(), e2.pointer.chartPosition = void 0), b && !b.isHidden && this.reset());
          };
          a3.prototype.onContainerMouseEnter = function(a4) {
            delete this.chartPosition;
          };
          a3.prototype.onContainerMouseMove = function(a4) {
            var c2 = this.chart;
            a4 = this.normalize(a4);
            this.setHoverChartIndex();
            a4.preventDefault || (a4.returnValue = false);
            ("mousedown" === c2.mouseIsDown || this.touchSelect(a4)) && this.drag(a4);
            c2.openMenu || !this.inClass(a4.target, "highcharts-tracker") && !c2.isInsidePlot(a4.chartX - c2.plotLeft, a4.chartY - c2.plotTop, { visiblePlotOnly: true }) || (this.inClass(a4.target, "highcharts-no-tooltip") ? this.reset(false, 0) : this.runPointActions(a4));
          };
          a3.prototype.onDocumentTouchEnd = function(c2) {
            var e2 = G[t(
              a3.hoverChartIndex,
              -1
            )];
            e2 && e2.pointer.drop(c2);
          };
          a3.prototype.onContainerTouchMove = function(a4) {
            if (this.touchSelect(a4))
              this.onContainerMouseMove(a4);
            else
              this.touch(a4);
          };
          a3.prototype.onContainerTouchStart = function(a4) {
            if (this.touchSelect(a4))
              this.onContainerMouseDown(a4);
            else
              this.zoomOption(a4), this.touch(a4, true);
          };
          a3.prototype.onDocumentMouseMove = function(a4) {
            var c2 = this.chart, b = this.chartPosition;
            a4 = this.normalize(a4, b);
            var e2 = c2.tooltip;
            !b || e2 && e2.isStickyOnContact() || c2.isInsidePlot(a4.chartX - c2.plotLeft, a4.chartY - c2.plotTop, { visiblePlotOnly: true }) || this.inClass(a4.target, "highcharts-tracker") || this.reset();
          };
          a3.prototype.onDocumentMouseUp = function(c2) {
            var e2 = G[t(a3.hoverChartIndex, -1)];
            e2 && e2.pointer.drop(c2);
          };
          a3.prototype.pinch = function(a4) {
            var c2 = this, b = c2.chart, g = c2.pinchDown, d = a4.touches || [], m = d.length, f2 = c2.lastValidTouch, k2 = c2.hasZoom, p2 = {}, r = 1 === m && (c2.inClass(a4.target, "highcharts-tracker") && b.runTrackerClick || c2.runChartClick), n2 = {}, q2 = c2.selectionMarker;
            1 < m ? c2.initiated = true : 1 === m && this.followTouchMove && (c2.initiated = false);
            k2 && c2.initiated && !r && false !== a4.cancelable && a4.preventDefault();
            [].map.call(d, function(b2) {
              return c2.normalize(b2);
            });
            "touchstart" === a4.type ? ([].forEach.call(d, function(b2, a5) {
              g[a5] = { chartX: b2.chartX, chartY: b2.chartY };
            }), f2.x = [g[0].chartX, g[1] && g[1].chartX], f2.y = [g[0].chartY, g[1] && g[1].chartY], b.axes.forEach(function(a5) {
              if (a5.zoomEnabled) {
                var d2 = b.bounds[a5.horiz ? "h" : "v"], c3 = a5.minPixelPadding, e2 = a5.toPixels(Math.min(t(a5.options.min, a5.dataMin), a5.dataMin)), g2 = a5.toPixels(Math.max(t(a5.options.max, a5.dataMax), a5.dataMax)), m2 = Math.max(e2, g2);
                d2.min = Math.min(a5.pos, Math.min(
                  e2,
                  g2
                ) - c3);
                d2.max = Math.max(a5.pos + a5.len, m2 + c3);
              }
            }), c2.res = true) : c2.followTouchMove && 1 === m ? this.runPointActions(c2.normalize(a4)) : g.length && (h(b, "touchpan", { originalEvent: a4 }, function() {
              q2 || (c2.selectionMarker = q2 = e({ destroy: H, touch: true }, b.plotBox));
              c2.pinchTranslate(g, d, p2, q2, n2, f2);
              c2.hasPinched = k2;
              c2.scaleGroups(p2, n2);
            }), c2.res && (c2.res = false, this.reset(false, 0)));
          };
          a3.prototype.pinchTranslate = function(a4, c2, b, e2, d, m) {
            this.zoomHor && this.pinchTranslateDirection(true, a4, c2, b, e2, d, m);
            this.zoomVert && this.pinchTranslateDirection(false, a4, c2, b, e2, d, m);
          };
          a3.prototype.pinchTranslateDirection = function(a4, c2, b, e2, d, m, f2, h2) {
            var g = this.chart, l = a4 ? "x" : "y", k2 = a4 ? "X" : "Y", p2 = "chart" + k2, r = a4 ? "width" : "height", n2 = g["plot" + (a4 ? "Left" : "Top")], t2 = g.inverted, x = g.bounds[a4 ? "h" : "v"], q2 = 1 === c2.length, D = c2[0][p2], B2 = !q2 && c2[1][p2];
            c2 = function() {
              "number" === typeof v2 && 20 < Math.abs(D - B2) && (C = h2 || Math.abs(N - v2) / Math.abs(D - B2));
              E = (n2 - N) / C + D;
              w2 = g["plot" + (a4 ? "Width" : "Height")] / C;
            };
            var w2, E, C = h2 || 1, N = b[0][p2], v2 = !q2 && b[1][p2];
            c2();
            b = E;
            if (b < x.min) {
              b = x.min;
              var J2 = true;
            } else
              b + w2 > x.max && (b = x.max - w2, J2 = true);
            J2 ? (N -= 0.8 * (N - f2[l][0]), "number" === typeof v2 && (v2 -= 0.8 * (v2 - f2[l][1])), c2()) : f2[l] = [N, v2];
            t2 || (m[l] = E - n2, m[r] = w2);
            m = t2 ? 1 / C : C;
            d[r] = w2;
            d[l] = b;
            e2[t2 ? a4 ? "scaleY" : "scaleX" : "scale" + k2] = C;
            e2["translate" + k2] = m * n2 + (N - m * D);
          };
          a3.prototype.reset = function(a4, c2) {
            var b = this.chart, e2 = b.hoverSeries, d = b.hoverPoint, m = b.hoverPoints, f2 = b.tooltip, l = f2 && f2.shared ? m : d;
            a4 && l && J(l).forEach(function(b2) {
              b2.series.isCartesian && "undefined" === typeof b2.plotX && (a4 = false);
            });
            if (a4)
              f2 && l && J(l).length && (f2.refresh(l), f2.shared && m ? m.forEach(function(b2) {
                b2.setState(b2.state, true);
                b2.series.isCartesian && (b2.series.xAxis.crosshair && b2.series.xAxis.drawCrosshair(
                  null,
                  b2
                ), b2.series.yAxis.crosshair && b2.series.yAxis.drawCrosshair(null, b2));
              }) : d && (d.setState(d.state, true), b.axes.forEach(function(b2) {
                b2.crosshair && d.series[b2.coll] === b2 && b2.drawCrosshair(null, d);
              })));
            else {
              if (d)
                d.onMouseOut();
              m && m.forEach(function(b2) {
                b2.setState();
              });
              if (e2)
                e2.onMouseOut();
              f2 && f2.hide(c2);
              this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove());
              b.axes.forEach(function(b2) {
                b2.hideCrosshair();
              });
              this.hoverX = b.hoverPoints = b.hoverPoint = null;
            }
          };
          a3.prototype.runPointActions = function(e2, f2) {
            var b = this.chart, g = b.tooltip && b.tooltip.options.enabled ? b.tooltip : void 0, d = g ? g.shared : false, m = f2 || b.hoverPoint, l = m && m.series || b.hoverSeries;
            f2 = this.getHoverData(m, l, b.series, (!e2 || "touchmove" !== e2.type) && (!!f2 || l && l.directTouch && this.isDirectTouch), d, e2);
            m = f2.hoverPoint;
            l = f2.hoverSeries;
            var h2 = f2.hoverPoints;
            f2 = l && l.tooltipOptions.followPointer && !l.tooltipOptions.split;
            d = d && l && !l.noSharedTooltip;
            if (m && (m !== b.hoverPoint || g && g.isHidden)) {
              (b.hoverPoints || []).forEach(function(b2) {
                -1 === h2.indexOf(b2) && b2.setState();
              });
              if (b.hoverSeries !== l)
                l.onMouseOver();
              this.applyInactiveState(h2);
              (h2 || []).forEach(function(b2) {
                b2.setState("hover");
              });
              b.hoverPoint && b.hoverPoint.firePointEvent("mouseOut");
              if (!m.series)
                return;
              b.hoverPoints = h2;
              b.hoverPoint = m;
              m.firePointEvent("mouseOver");
              g && g.refresh(d ? h2 : m, e2);
            } else
              f2 && g && !g.isHidden && (m = g.getAnchor([{}], e2), b.isInsidePlot(m[0], m[1], { visiblePlotOnly: true }) && g.updatePosition({ plotX: m[0], plotY: m[1] }));
            this.unDocMouseMove || (this.unDocMouseMove = A(b.container.ownerDocument, "mousemove", function(b2) {
              var d2 = G[a3.hoverChartIndex];
              if (d2)
                d2.pointer.onDocumentMouseMove(b2);
            }), this.eventsToUnbind.push(this.unDocMouseMove));
            b.axes.forEach(function(a4) {
              var d2 = t((a4.crosshair || {}).snap, true), g2;
              d2 && ((g2 = b.hoverPoint) && g2.series[a4.coll] === a4 || (g2 = c(h2, function(b2) {
                return b2.series[a4.coll] === a4;
              })));
              g2 || !d2 ? a4.drawCrosshair(e2, g2) : a4.hideCrosshair();
            });
          };
          a3.prototype.scaleGroups = function(a4, c2) {
            var b = this.chart;
            b.series.forEach(function(e2) {
              var d = a4 || e2.getPlotBox();
              e2.group && (e2.xAxis && e2.xAxis.zoomEnabled || b.mapView) && (e2.group.attr(d), e2.markerGroup && (e2.markerGroup.attr(d), e2.markerGroup.clip(c2 ? b.clipRect : null)), e2.dataLabelsGroup && e2.dataLabelsGroup.attr(d));
            });
            b.clipRect.attr(c2 || b.clipBox);
          };
          a3.prototype.setDOMEvents = function() {
            var c2 = this, e2 = this.chart.container, b = e2.ownerDocument;
            e2.onmousedown = this.onContainerMouseDown.bind(this);
            e2.onmousemove = this.onContainerMouseMove.bind(this);
            e2.onclick = this.onContainerClick.bind(this);
            this.eventsToUnbind.push(A(e2, "mouseenter", this.onContainerMouseEnter.bind(this)));
            this.eventsToUnbind.push(A(e2, "mouseleave", this.onContainerMouseLeave.bind(this)));
            a3.unbindDocumentMouseUp || (a3.unbindDocumentMouseUp = A(b, "mouseup", this.onDocumentMouseUp.bind(this)));
            for (var g = this.chart.renderTo.parentElement; g && "BODY" !== g.tagName; )
              this.eventsToUnbind.push(A(g, "scroll", function() {
                delete c2.chartPosition;
              })), g = g.parentElement;
            u.hasTouch && (this.eventsToUnbind.push(A(e2, "touchstart", this.onContainerTouchStart.bind(this), { passive: false })), this.eventsToUnbind.push(A(e2, "touchmove", this.onContainerTouchMove.bind(this), { passive: false })), a3.unbindDocumentTouchEnd || (a3.unbindDocumentTouchEnd = A(b, "touchend", this.onDocumentTouchEnd.bind(this), { passive: false })));
          };
          a3.prototype.setHoverChartIndex = function() {
            var c2 = this.chart, e2 = u.charts[t(a3.hoverChartIndex, -1)];
            if (e2 && e2 !== c2)
              e2.pointer.onContainerMouseLeave({ relatedTarget: true });
            e2 && e2.mouseIsDown || (a3.hoverChartIndex = c2.index);
          };
          a3.prototype.touch = function(a4, c2) {
            var b = this.chart, e2;
            this.setHoverChartIndex();
            if (1 === a4.touches.length)
              if (a4 = this.normalize(a4), (e2 = b.isInsidePlot(a4.chartX - b.plotLeft, a4.chartY - b.plotTop, { visiblePlotOnly: true })) && !b.openMenu) {
                c2 && this.runPointActions(a4);
                if ("touchmove" === a4.type) {
                  c2 = this.pinchDown;
                  var d = c2[0] ? 4 <= Math.sqrt(Math.pow(c2[0].chartX - a4.chartX, 2) + Math.pow(c2[0].chartY - a4.chartY, 2)) : false;
                }
                t(d, true) && this.pinch(a4);
              } else
                c2 && this.reset();
            else
              2 === a4.touches.length && this.pinch(a4);
          };
          a3.prototype.touchSelect = function(a4) {
            return !(!this.chart.options.chart.zoomBySingleTouch || !a4.touches || 1 !== a4.touches.length);
          };
          a3.prototype.zoomOption = function(a4) {
            var c2 = this.chart, b = c2.options.chart;
            c2 = c2.inverted;
            var e2 = b.zoomType || "";
            /touch/.test(a4.type) && (e2 = t(b.pinchType, e2));
            this.zoomX = a4 = /x/.test(e2);
            this.zoomY = b = /y/.test(e2);
            this.zoomHor = a4 && !c2 || b && c2;
            this.zoomVert = b && !c2 || a4 && c2;
            this.hasZoom = a4 || b;
          };
          return a3;
        }();
        "";
        return a2;
      });
      M(a, "Core/MSPointer.js", [a["Core/Globals.js"], a["Core/Pointer.js"], a["Core/Utilities.js"]], function(a2, u, z) {
        function v() {
          var a3 = [];
          a3.item = function(a4) {
            return this[a4];
          };
          c(f, function(c2) {
            a3.push({ pageX: c2.pageX, pageY: c2.pageY, target: c2.target });
          });
          return a3;
        }
        function y(a3, c2, e2, f2) {
          var h2 = H[u.hoverChartIndex || NaN];
          "touch" !== a3.pointerType && a3.pointerType !== a3.MSPOINTER_TYPE_TOUCH || !h2 || (h2 = h2.pointer, f2(a3), h2[c2]({ type: e2, target: a3.currentTarget, preventDefault: q, touches: v() }));
        }
        var G = this && this.__extends || /* @__PURE__ */ function() {
          var a3 = function(c2, e2) {
            a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, c3) {
              a4.__proto__ = c3;
            } || function(a4, c3) {
              for (var e3 in c3)
                c3.hasOwnProperty(e3) && (a4[e3] = c3[e3]);
            };
            return a3(c2, e2);
          };
          return function(c2, e2) {
            function f2() {
              this.constructor = c2;
            }
            a3(c2, e2);
            c2.prototype = null === e2 ? Object.create(e2) : (f2.prototype = e2.prototype, new f2());
          };
        }(), H = a2.charts, A = a2.doc, q = a2.noop, n = a2.win, k = z.addEvent, e = z.css, c = z.objectEach, h = z.removeEvent, f = {}, w = !!n.PointerEvent;
        return function(c2) {
          function p() {
            return null !== c2 && c2.apply(this, arguments) || this;
          }
          G(p, c2);
          p.isRequired = function() {
            return !(a2.hasTouch || !n.PointerEvent && !n.MSPointerEvent);
          };
          p.prototype.batchMSEvents = function(a3) {
            a3(this.chart.container, w ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown);
            a3(this.chart.container, w ? "pointermove" : "MSPointerMove", this.onContainerPointerMove);
            a3(A, w ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp);
          };
          p.prototype.destroy = function() {
            this.batchMSEvents(h);
            c2.prototype.destroy.call(this);
          };
          p.prototype.init = function(a3, f2) {
            c2.prototype.init.call(this, a3, f2);
            this.hasZoom && e(a3.container, { "-ms-touch-action": "none", "touch-action": "none" });
          };
          p.prototype.onContainerPointerDown = function(a3) {
            y(a3, "onContainerTouchStart", "touchstart", function(a4) {
              f[a4.pointerId] = { pageX: a4.pageX, pageY: a4.pageY, target: a4.currentTarget };
            });
          };
          p.prototype.onContainerPointerMove = function(a3) {
            y(a3, "onContainerTouchMove", "touchmove", function(a4) {
              f[a4.pointerId] = {
                pageX: a4.pageX,
                pageY: a4.pageY
              };
              f[a4.pointerId].target || (f[a4.pointerId].target = a4.currentTarget);
            });
          };
          p.prototype.onDocumentPointerUp = function(a3) {
            y(a3, "onDocumentTouchEnd", "touchend", function(a4) {
              delete f[a4.pointerId];
            });
          };
          p.prototype.setDOMEvents = function() {
            c2.prototype.setDOMEvents.call(this);
            (this.hasZoom || this.followTouchMove) && this.batchMSEvents(k);
          };
          return p;
        }(u);
      });
      M(a, "Core/Legend/Legend.js", [
        a["Core/Animation/AnimationUtilities.js"],
        a["Core/FormatUtilities.js"],
        a["Core/Globals.js"],
        a["Core/Series/Point.js"],
        a["Core/Renderer/RendererUtilities.js"],
        a["Core/Utilities.js"]
      ], function(a2, u, z, F, y, G) {
        var v = a2.animObject, A = a2.setAnimation, q = u.format;
        a2 = z.isFirefox;
        var n = z.marginNames;
        z = z.win;
        var k = y.distribute, e = G.addEvent, c = G.createElement, h = G.css, f = G.defined, w = G.discardElement, p = G.find, B = G.fireEvent, t = G.isNumber, J = G.merge, C = G.pick, r = G.relativeLength, l = G.stableSort, b = G.syncTimeout;
        y = G.wrap;
        G = function() {
          function a3(b2, a4) {
            this.allItems = [];
            this.contentGroup = this.box = void 0;
            this.display = false;
            this.group = void 0;
            this.offsetWidth = this.maxLegendWidth = this.maxItemWidth = this.legendWidth = this.legendHeight = this.lastLineHeight = this.lastItemY = this.itemY = this.itemX = this.itemMarginTop = this.itemMarginBottom = this.itemHeight = this.initialItemY = 0;
            this.options = {};
            this.padding = 0;
            this.pages = [];
            this.proximate = false;
            this.scrollGroup = void 0;
            this.widthOption = this.totalItemWidth = this.titleHeight = this.symbolWidth = this.symbolHeight = 0;
            this.chart = b2;
            this.init(b2, a4);
          }
          a3.prototype.init = function(b2, a4) {
            this.chart = b2;
            this.setOptions(a4);
            a4.enabled && (this.render(), e(this.chart, "endResize", function() {
              this.legend.positionCheckboxes();
            }), this.proximate ? this.unchartrender = e(this.chart, "render", function() {
              this.legend.proximatePositions();
              this.legend.positionItems();
            }) : this.unchartrender && this.unchartrender());
          };
          a3.prototype.setOptions = function(b2) {
            var a4 = C(b2.padding, 8);
            this.options = b2;
            this.chart.styledMode || (this.itemStyle = b2.itemStyle, this.itemHiddenStyle = J(this.itemStyle, b2.itemHiddenStyle));
            this.itemMarginTop = b2.itemMarginTop || 0;
            this.itemMarginBottom = b2.itemMarginBottom || 0;
            this.padding = a4;
            this.initialItemY = a4 - 5;
            this.symbolWidth = C(
              b2.symbolWidth,
              16
            );
            this.pages = [];
            this.proximate = "proximate" === b2.layout && !this.chart.inverted;
            this.baseline = void 0;
          };
          a3.prototype.update = function(b2, a4) {
            var c2 = this.chart;
            this.setOptions(J(true, this.options, b2));
            this.destroy();
            c2.isDirtyLegend = c2.isDirtyBox = true;
            C(a4, true) && c2.redraw();
            B(this, "afterUpdate");
          };
          a3.prototype.colorizeItem = function(b2, a4) {
            b2.legendGroup[a4 ? "removeClass" : "addClass"]("highcharts-legend-item-hidden");
            if (!this.chart.styledMode) {
              var c2 = this.options, d = b2.legendItem, e2 = b2.legendLine, g = b2.legendSymbol, f2 = this.itemHiddenStyle.color;
              c2 = a4 ? c2.itemStyle.color : f2;
              var m = a4 ? b2.color || f2 : f2, h2 = b2.options && b2.options.marker, l2 = { fill: m };
              d && d.css({ fill: c2, color: c2 });
              e2 && e2.attr({ stroke: m });
              g && (h2 && g.isMarker && (l2 = b2.pointAttribs(), a4 || (l2.stroke = l2.fill = f2)), g.attr(l2));
            }
            B(this, "afterColorizeItem", { item: b2, visible: a4 });
          };
          a3.prototype.positionItems = function() {
            this.allItems.forEach(this.positionItem, this);
            this.chart.isResizing || this.positionCheckboxes();
          };
          a3.prototype.positionItem = function(b2) {
            var a4 = this, c2 = this.options, d = c2.symbolPadding, e2 = !c2.rtl, g = b2._legendItemPos;
            c2 = g[0];
            g = g[1];
            var h2 = b2.checkbox, l2 = b2.legendGroup;
            l2 && l2.element && (d = { translateX: e2 ? c2 : this.legendWidth - c2 - 2 * d - 4, translateY: g }, e2 = function() {
              B(a4, "afterPositionItem", { item: b2 });
            }, f(l2.translateY) ? l2.animate(d, void 0, e2) : (l2.attr(d), e2()));
            h2 && (h2.x = c2, h2.y = g);
          };
          a3.prototype.destroyItem = function(b2) {
            var a4 = b2.checkbox;
            ["legendItem", "legendLine", "legendSymbol", "legendGroup"].forEach(function(a5) {
              b2[a5] && (b2[a5] = b2[a5].destroy());
            });
            a4 && w(b2.checkbox);
          };
          a3.prototype.destroy = function() {
            function b2(b3) {
              this[b3] && (this[b3] = this[b3].destroy());
            }
            this.getAllItems().forEach(function(a4) {
              [
                "legendItem",
                "legendGroup"
              ].forEach(b2, a4);
            });
            "clipRect up down pager nav box title group".split(" ").forEach(b2, this);
            this.display = null;
          };
          a3.prototype.positionCheckboxes = function() {
            var b2 = this.group && this.group.alignAttr, a4 = this.clipHeight || this.legendHeight, c2 = this.titleHeight;
            if (b2) {
              var e2 = b2.translateY;
              this.allItems.forEach(function(d) {
                var g = d.checkbox;
                if (g) {
                  var f2 = e2 + c2 + g.y + (this.scrollOffset || 0) + 3;
                  h(g, { left: b2.translateX + d.checkboxOffset + g.x - 20 + "px", top: f2 + "px", display: this.proximate || f2 > e2 - 6 && f2 < e2 + a4 - 6 ? "" : "none" });
                }
              }, this);
            }
          };
          a3.prototype.renderTitle = function() {
            var b2 = this.options, a4 = this.padding, c2 = b2.title, e2 = 0;
            c2.text && (this.title || (this.title = this.chart.renderer.label(c2.text, a4 - 3, a4 - 4, null, null, null, b2.useHTML, null, "legend-title").attr({ zIndex: 1 }), this.chart.styledMode || this.title.css(c2.style), this.title.add(this.group)), c2.width || this.title.css({ width: this.maxLegendWidth + "px" }), b2 = this.title.getBBox(), e2 = b2.height, this.offsetWidth = b2.width, this.contentGroup.attr({ translateY: e2 }));
            this.titleHeight = e2;
          };
          a3.prototype.setText = function(b2) {
            var a4 = this.options;
            b2.legendItem.attr({ text: a4.labelFormat ? q(a4.labelFormat, b2, this.chart) : a4.labelFormatter.call(b2) });
          };
          a3.prototype.renderItem = function(b2) {
            var a4 = this.chart, c2 = a4.renderer, d = this.options, e2 = this.symbolWidth, g = d.symbolPadding || 0, f2 = this.itemStyle, h2 = this.itemHiddenStyle, l2 = "horizontal" === d.layout ? C(d.itemDistance, 20) : 0, k2 = !d.rtl, p2 = !b2.series, n2 = !p2 && b2.series.drawLegendSymbol ? b2.series : b2, r2 = n2.options, t2 = this.createCheckboxForItem && r2 && r2.showCheckbox, q2 = d.useHTML, w2 = b2.options.className, E = b2.legendItem;
            r2 = e2 + g + l2 + (t2 ? 20 : 0);
            E || (b2.legendGroup = c2.g("legend-item").addClass("highcharts-" + n2.type + "-series highcharts-color-" + b2.colorIndex + (w2 ? " " + w2 : "") + (p2 ? " highcharts-series-" + b2.index : "")).attr({ zIndex: 1 }).add(this.scrollGroup), b2.legendItem = E = c2.text("", k2 ? e2 + g : -g, this.baseline || 0, q2), a4.styledMode || E.css(J(b2.visible ? f2 : h2)), E.attr({ align: k2 ? "left" : "right", zIndex: 2 }).add(b2.legendGroup), this.baseline || (this.fontMetrics = c2.fontMetrics(a4.styledMode ? 12 : f2.fontSize, E), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, E.attr("y", this.baseline), this.symbolHeight = d.symbolHeight || this.fontMetrics.f, d.squareSymbol && (this.symbolWidth = C(d.symbolWidth, Math.max(this.symbolHeight, 16)), r2 = this.symbolWidth + g + l2 + (t2 ? 20 : 0), k2 && E.attr("x", this.symbolWidth + g))), n2.drawLegendSymbol(this, b2), this.setItemEvents && this.setItemEvents(b2, E, q2));
            t2 && !b2.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(b2);
            this.colorizeItem(b2, b2.visible);
            !a4.styledMode && f2.width || E.css({ width: (d.itemWidth || this.widthOption || a4.spacingBox.width) - r2 + "px" });
            this.setText(b2);
            a4 = E.getBBox();
            c2 = this.fontMetrics && this.fontMetrics.h || 0;
            b2.itemWidth = b2.checkboxOffset = d.itemWidth || b2.legendItemWidth || a4.width + r2;
            this.maxItemWidth = Math.max(this.maxItemWidth, b2.itemWidth);
            this.totalItemWidth += b2.itemWidth;
            this.itemHeight = b2.itemHeight = Math.round(b2.legendItemHeight || (a4.height > 1.5 * c2 ? a4.height : c2));
          };
          a3.prototype.layoutItem = function(b2) {
            var a4 = this.options, c2 = this.padding, d = "horizontal" === a4.layout, e2 = b2.itemHeight, g = this.itemMarginBottom, f2 = this.itemMarginTop, h2 = d ? C(a4.itemDistance, 20) : 0, l2 = this.maxLegendWidth;
            a4 = a4.alignColumns && this.totalItemWidth > l2 ? this.maxItemWidth : b2.itemWidth;
            d && this.itemX - c2 + a4 > l2 && (this.itemX = c2, this.lastLineHeight && (this.itemY += f2 + this.lastLineHeight + g), this.lastLineHeight = 0);
            this.lastItemY = f2 + this.itemY + g;
            this.lastLineHeight = Math.max(e2, this.lastLineHeight);
            b2._legendItemPos = [this.itemX, this.itemY];
            d ? this.itemX += a4 : (this.itemY += f2 + e2 + g, this.lastLineHeight = e2);
            this.offsetWidth = this.widthOption || Math.max((d ? this.itemX - c2 - (b2.checkbox ? 0 : h2) : a4) + c2, this.offsetWidth);
          };
          a3.prototype.getAllItems = function() {
            var b2 = [];
            this.chart.series.forEach(function(a4) {
              var c2 = a4 && a4.options;
              a4 && C(c2.showInLegend, f(c2.linkedTo) ? false : void 0, true) && (b2 = b2.concat(a4.legendItems || ("point" === c2.legendType ? a4.data : a4)));
            });
            B(this, "afterGetAllItems", { allItems: b2 });
            return b2;
          };
          a3.prototype.getAlignment = function() {
            var b2 = this.options;
            return this.proximate ? b2.align.charAt(0) + "tv" : b2.floating ? "" : b2.align.charAt(0) + b2.verticalAlign.charAt(0) + b2.layout.charAt(0);
          };
          a3.prototype.adjustMargins = function(b2, a4) {
            var c2 = this.chart, d = this.options, e2 = this.getAlignment();
            e2 && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(function(g, h2) {
              g.test(e2) && !f(b2[h2]) && (c2[n[h2]] = Math.max(c2[n[h2]], c2.legend[(h2 + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][h2] * d[h2 % 2 ? "x" : "y"] + C(d.margin, 12) + a4[h2] + (c2.titleOffset[h2] || 0)));
            });
          };
          a3.prototype.proximatePositions = function() {
            var b2 = this.chart, a4 = [], c2 = "left" === this.options.align;
            this.allItems.forEach(function(d) {
              var e2;
              var g = c2;
              if (d.yAxis) {
                d.xAxis.options.reversed && (g = !g);
                d.points && (e2 = p(g ? d.points : d.points.slice(0).reverse(), function(b3) {
                  return t(b3.plotY);
                }));
                g = this.itemMarginTop + d.legendItem.getBBox().height + this.itemMarginBottom;
                var f2 = d.yAxis.top - b2.plotTop;
                d.visible ? (e2 = e2 ? e2.plotY : d.yAxis.height, e2 += f2 - 0.3 * g) : e2 = f2 + d.yAxis.height;
                a4.push({ target: e2, size: g, item: d });
              }
            }, this);
            k(a4, b2.plotHeight).forEach(function(a5) {
              a5.item._legendItemPos && (a5.item._legendItemPos[1] = b2.plotTop - b2.spacing[0] + a5.pos);
            });
          };
          a3.prototype.render = function() {
            var b2 = this.chart, a4 = b2.renderer, c2 = this.options, e2 = this.padding, g = this.getAllItems(), f2 = this.group, h2 = this.box;
            this.itemX = e2;
            this.itemY = this.initialItemY;
            this.lastItemY = this.offsetWidth = 0;
            this.widthOption = r(c2.width, b2.spacingBox.width - e2);
            var k2 = b2.spacingBox.width - 2 * e2 - c2.x;
            -1 < ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) && (k2 /= 2);
            this.maxLegendWidth = this.widthOption || k2;
            f2 || (this.group = f2 = a4.g("legend").addClass(c2.className || "").attr({ zIndex: 7 }).add(), this.contentGroup = a4.g().attr({ zIndex: 1 }).add(f2), this.scrollGroup = a4.g().add(this.contentGroup));
            this.renderTitle();
            l(g, function(b3, a5) {
              return (b3.options && b3.options.legendIndex || 0) - (a5.options && a5.options.legendIndex || 0);
            });
            c2.reversed && g.reverse();
            this.allItems = g;
            this.display = k2 = !!g.length;
            this.itemHeight = this.totalItemWidth = this.maxItemWidth = this.lastLineHeight = 0;
            g.forEach(this.renderItem, this);
            g.forEach(this.layoutItem, this);
            g = (this.widthOption || this.offsetWidth) + e2;
            var p2 = this.lastItemY + this.lastLineHeight + this.titleHeight;
            p2 = this.handleOverflow(p2);
            p2 += e2;
            h2 || (this.box = h2 = a4.rect().addClass("highcharts-legend-box").attr({ r: c2.borderRadius }).add(f2), h2.isNew = true);
            b2.styledMode || h2.attr({ stroke: c2.borderColor, "stroke-width": c2.borderWidth || 0, fill: c2.backgroundColor || "none" }).shadow(c2.shadow);
            0 < g && 0 < p2 && (h2[h2.isNew ? "attr" : "animate"](h2.crisp.call({}, { x: 0, y: 0, width: g, height: p2 }, h2.strokeWidth())), h2.isNew = false);
            h2[k2 ? "show" : "hide"]();
            b2.styledMode && "none" === f2.getStyle("display") && (g = p2 = 0);
            this.legendWidth = g;
            this.legendHeight = p2;
            k2 && this.align();
            this.proximate || this.positionItems();
            B(this, "afterRender");
          };
          a3.prototype.align = function(b2) {
            void 0 === b2 && (b2 = this.chart.spacingBox);
            var a4 = this.chart, c2 = this.options, d = b2.y;
            /(lth|ct|rth)/.test(this.getAlignment()) && 0 < a4.titleOffset[0] ? d += a4.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && 0 < a4.titleOffset[2] && (d -= a4.titleOffset[2]);
            d !== b2.y && (b2 = J(b2, { y: d }));
            this.group.align(J(c2, { width: this.legendWidth, height: this.legendHeight, verticalAlign: this.proximate ? "top" : c2.verticalAlign }), true, b2);
          };
          a3.prototype.handleOverflow = function(b2) {
            var a4 = this, c2 = this.chart, d = c2.renderer, e2 = this.options, g = e2.y, f2 = "top" === e2.verticalAlign, h2 = this.padding, l2 = e2.maxHeight, k2 = e2.navigation, p2 = C(k2.animation, true), n2 = k2.arrowSize || 12, r2 = this.pages, t2 = this.allItems, q2 = function(b3) {
              "number" === typeof b3 ? v2.attr({ height: b3 }) : v2 && (a4.clipRect = v2.destroy(), a4.contentGroup.clip());
              a4.contentGroup.div && (a4.contentGroup.div.style.clip = b3 ? "rect(" + h2 + "px,9999px," + (h2 + b3) + "px,0)" : "auto");
            }, w2 = function(b3) {
              a4[b3] = d.circle(0, 0, 1.3 * n2).translate(n2 / 2, n2 / 2).add(N);
              c2.styledMode || a4[b3].attr("fill", "rgba(0,0,0,0.0001)");
              return a4[b3];
            }, E, B2;
            g = c2.spacingBox.height + (f2 ? -g : g) - h2;
            var N = this.nav, v2 = this.clipRect;
            "horizontal" !== e2.layout || "middle" === e2.verticalAlign || e2.floating || (g /= 2);
            l2 && (g = Math.min(g, l2));
            r2.length = 0;
            b2 && 0 < g && b2 > g && false !== k2.enabled ? (this.clipHeight = E = Math.max(g - 20 - this.titleHeight - h2, 0), this.currentPage = C(this.currentPage, 1), this.fullHeight = b2, t2.forEach(function(b3, a5) {
              var c3 = b3._legendItemPos[1], d2 = Math.round(b3.legendItem.getBBox().height), e3 = r2.length;
              if (!e3 || c3 - r2[e3 - 1] > E && (B2 || c3) !== r2[e3 - 1])
                r2.push(B2 || c3), e3++;
              b3.pageIx = e3 - 1;
              B2 && (t2[a5 - 1].pageIx = e3 - 1);
              a5 === t2.length - 1 && c3 + d2 - r2[e3 - 1] > E && d2 <= E && (r2.push(c3), b3.pageIx = e3);
              c3 !== B2 && (B2 = c3);
            }), v2 || (v2 = a4.clipRect = d.clipRect(0, h2, 9999, 0), a4.contentGroup.clip(v2)), q2(E), N || (this.nav = N = d.g().attr({ zIndex: 1 }).add(this.group), this.up = d.symbol("triangle", 0, 0, n2, n2).add(N), w2("upTracker").on(
              "click",
              function() {
                a4.scroll(-1, p2);
              }
            ), this.pager = d.text("", 15, 10).addClass("highcharts-legend-navigation"), c2.styledMode || this.pager.css(k2.style), this.pager.add(N), this.down = d.symbol("triangle-down", 0, 0, n2, n2).add(N), w2("downTracker").on("click", function() {
              a4.scroll(1, p2);
            })), a4.scroll(0), b2 = g) : N && (q2(), this.nav = N.destroy(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0);
            return b2;
          };
          a3.prototype.scroll = function(a4, c2) {
            var d = this, e2 = this.chart, g = this.pages, f2 = g.length, h2 = this.clipHeight, l2 = this.options.navigation, m = this.pager, k2 = this.padding, p2 = this.currentPage + a4;
            p2 > f2 && (p2 = f2);
            0 < p2 && ("undefined" !== typeof c2 && A(c2, e2), this.nav.attr({ translateX: k2, translateY: h2 + this.padding + 7 + this.titleHeight, visibility: "visible" }), [this.up, this.upTracker].forEach(function(b2) {
              b2.attr({ "class": 1 === p2 ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" });
            }), m.attr({ text: p2 + "/" + f2 }), [this.down, this.downTracker].forEach(
              function(b2) {
                b2.attr({ x: 18 + this.pager.getBBox().width, "class": p2 === f2 ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" });
              },
              this
            ), e2.styledMode || (this.up.attr({ fill: 1 === p2 ? l2.inactiveColor : l2.activeColor }), this.upTracker.css({ cursor: 1 === p2 ? "default" : "pointer" }), this.down.attr({ fill: p2 === f2 ? l2.inactiveColor : l2.activeColor }), this.downTracker.css({ cursor: p2 === f2 ? "default" : "pointer" })), this.scrollOffset = -g[p2 - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: this.scrollOffset }), this.currentPage = p2, this.positionCheckboxes(), a4 = v(C(c2, e2.renderer.globalAnimation, true)), b(function() {
              B(d, "afterScroll", { currentPage: p2 });
            }, a4.duration));
          };
          a3.prototype.setItemEvents = function(b2, a4, c2) {
            var d = this, e2 = d.chart.renderer.boxWrapper, g = b2 instanceof F, f2 = "highcharts-legend-" + (g ? "point" : "series") + "-active", h2 = d.chart.styledMode, l2 = function(a5) {
              d.allItems.forEach(function(c3) {
                b2 !== c3 && [c3].concat(c3.linkedSeries || []).forEach(function(b3) {
                  b3.setState(a5, !g);
                });
              });
            };
            (c2 ? [a4, b2.legendSymbol] : [b2.legendGroup]).forEach(function(c3) {
              if (c3)
                c3.on("mouseover", function() {
                  b2.visible && l2("inactive");
                  b2.setState("hover");
                  b2.visible && e2.addClass(f2);
                  h2 || a4.css(d.options.itemHoverStyle);
                }).on("mouseout", function() {
                  d.chart.styledMode || a4.css(J(b2.visible ? d.itemStyle : d.itemHiddenStyle));
                  l2("");
                  e2.removeClass(f2);
                  b2.setState();
                }).on("click", function(a5) {
                  var c4 = function() {
                    b2.setVisible && b2.setVisible();
                    l2(b2.visible ? "inactive" : "");
                  };
                  e2.removeClass(f2);
                  a5 = { browserEvent: a5 };
                  b2.firePointEvent ? b2.firePointEvent("legendItemClick", a5, c4) : B(b2, "legendItemClick", a5, c4);
                });
            });
          };
          a3.prototype.createCheckboxForItem = function(b2) {
            b2.checkbox = c(
              "input",
              { type: "checkbox", className: "highcharts-legend-checkbox", checked: b2.selected, defaultChecked: b2.selected },
              this.options.itemCheckboxStyle,
              this.chart.container
            );
            e(b2.checkbox, "click", function(a4) {
              B(b2.series || b2, "checkboxClick", { checked: a4.target.checked, item: b2 }, function() {
                b2.select();
              });
            });
          };
          return a3;
        }();
        (/Trident\/7\.0/.test(z.navigator && z.navigator.userAgent) || a2) && y(G.prototype, "positionItem", function(b2, a3) {
          var c2 = this, d = function() {
            a3._legendItemPos && b2.call(c2, a3);
          };
          d();
          c2.bubbleLegend || setTimeout(d);
        });
        "";
        return G;
      });
      M(
        a,
        "Core/Series/SeriesRegistry.js",
        [a["Core/Globals.js"], a["Core/DefaultOptions.js"], a["Core/Series/Point.js"], a["Core/Utilities.js"]],
        function(a2, u, z, F) {
          var v = u.defaultOptions, G = F.error, H = F.extendClass, A = F.merge, q;
          (function(n) {
            function k(a3, c) {
              var e = v.plotOptions || {}, f = c.defaultOptions;
              c.prototype.pointClass || (c.prototype.pointClass = z);
              c.prototype.type = a3;
              f && (e[a3] = f);
              n.seriesTypes[a3] = c;
            }
            n.seriesTypes = a2.seriesTypes;
            n.getSeries = function(a3, c) {
              void 0 === c && (c = {});
              var e = a3.options.chart;
              e = c.type || e.type || e.defaultSeriesType || "";
              var f = n.seriesTypes[e];
              n || G(17, true, a3, { missingModuleFor: e });
              e = new f();
              "function" === typeof e.init && e.init(a3, c);
              return e;
            };
            n.registerSeriesType = k;
            n.seriesType = function(a3, c, h, f, q2) {
              var e = v.plotOptions || {};
              c = c || "";
              e[a3] = A(e[c], h);
              k(a3, H(n.seriesTypes[c] || function() {
              }, f));
              n.seriesTypes[a3].prototype.type = a3;
              q2 && (n.seriesTypes[a3].prototype.pointClass = H(z, q2));
              return n.seriesTypes[a3];
            };
          })(q || (q = {}));
          return q;
        }
      );
      M(a, "Core/Chart/Chart.js", [
        a["Core/Animation/AnimationUtilities.js"],
        a["Core/Axis/Axis.js"],
        a["Core/FormatUtilities.js"],
        a["Core/Foundation.js"],
        a["Core/Globals.js"],
        a["Core/Legend/Legend.js"],
        a["Core/MSPointer.js"],
        a["Core/DefaultOptions.js"],
        a["Core/Pointer.js"],
        a["Core/Renderer/RendererRegistry.js"],
        a["Core/Series/SeriesRegistry.js"],
        a["Core/Renderer/SVG/SVGRenderer.js"],
        a["Core/Time.js"],
        a["Core/Utilities.js"],
        a["Core/Renderer/HTML/AST.js"]
      ], function(a2, u, z, F, y, G, H, A, q, n, k, e, c, h, f) {
        var w = a2.animate, p = a2.animObject, B = a2.setAnimation, t = z.numberFormat, v = F.registerEventOptions, C = y.charts, r = y.doc, l = y.marginNames, b = y.svg, g = y.win, d = A.defaultOptions, m = A.defaultTime, D = k.seriesTypes, x = h.addEvent, I = h.attr, P = h.cleanRecursively, S = h.createElement, O = h.css, U = h.defined, Y = h.discardElement, L = h.erase, K = h.error, M2 = h.extend, da = h.find, Q = h.fireEvent, ea = h.getStyle, E = h.isArray, T = h.isNumber, N = h.isObject, V = h.isString, W = h.merge, X = h.objectEach, R = h.pick, fa = h.pInt, aa = h.relativeLength, ia = h.removeEvent, ha = h.splat, ba = h.syncTimeout, ka = h.uniqueKey;
        a2 = function() {
          function a3(b2, a4, c2) {
            this.series = this.renderTo = this.renderer = this.pointer = this.pointCount = this.plotWidth = this.plotTop = this.plotLeft = this.plotHeight = this.plotBox = this.options = this.numberFormatter = this.margin = this.legend = this.labelCollectors = this.isResizing = this.index = this.eventOptions = this.container = this.colorCounter = this.clipBox = this.chartWidth = this.chartHeight = this.bounds = this.axisOffset = this.axes = void 0;
            this.sharedClips = {};
            this.yAxis = this.xAxis = this.userOptions = this.titleOffset = this.time = this.symbolCounter = this.spacingBox = this.spacing = void 0;
            this.getArgs(b2, a4, c2);
          }
          a3.chart = function(b2, c2, d2) {
            return new a3(b2, c2, d2);
          };
          a3.prototype.getArgs = function(b2, a4, c2) {
            V(b2) || b2.nodeName ? (this.renderTo = b2, this.init(a4, c2)) : this.init(b2, a4);
          };
          a3.prototype.init = function(b2, a4) {
            var e2 = b2.plotOptions || {};
            Q(this, "init", { args: arguments }, function() {
              var g2 = W(d, b2), f2 = g2.chart;
              X(g2.plotOptions, function(b3, a5) {
                N(b3) && (b3.tooltip = e2[a5] && W(e2[a5].tooltip) || void 0);
              });
              g2.tooltip.userOptions = b2.chart && b2.chart.forExport && b2.tooltip.userOptions || b2.tooltip;
              this.userOptions = b2;
              this.margin = [];
              this.spacing = [];
              this.bounds = { h: {}, v: {} };
              this.labelCollectors = [];
              this.callback = a4;
              this.isResizing = 0;
              this.options = g2;
              this.axes = [];
              this.series = [];
              this.time = b2.time && Object.keys(b2.time).length ? new c(b2.time) : y.time;
              this.numberFormatter = f2.numberFormatter || t;
              this.styledMode = f2.styledMode;
              this.hasCartesianSeries = f2.showAxes;
              this.index = C.length;
              C.push(this);
              y.chartCount++;
              v(this, f2);
              this.xAxis = [];
              this.yAxis = [];
              this.pointCount = this.colorCounter = this.symbolCounter = 0;
              Q(this, "afterInit");
              this.firstRender();
            });
          };
          a3.prototype.initSeries = function(b2) {
            var a4 = this.options.chart;
            a4 = b2.type || a4.type || a4.defaultSeriesType;
            var c2 = D[a4];
            c2 || K(17, true, this, { missingModuleFor: a4 });
            a4 = new c2();
            "function" === typeof a4.init && a4.init(this, b2);
            return a4;
          };
          a3.prototype.setSeriesData = function() {
            this.getSeriesOrderByLinks().forEach(function(b2) {
              b2.points || b2.data || !b2.enabledDataSorting || b2.setData(b2.options.data, false);
            });
          };
          a3.prototype.getSeriesOrderByLinks = function() {
            return this.series.concat().sort(function(b2, a4) {
              return b2.linkedSeries.length || a4.linkedSeries.length ? a4.linkedSeries.length - b2.linkedSeries.length : 0;
            });
          };
          a3.prototype.orderSeries = function(b2) {
            var a4 = this.series;
            b2 = b2 || 0;
            for (var c2 = a4.length; b2 < c2; ++b2)
              a4[b2] && (a4[b2].index = b2, a4[b2].name = a4[b2].getName());
          };
          a3.prototype.isInsidePlot = function(b2, a4, c2) {
            void 0 === c2 && (c2 = {});
            var d2 = this.inverted, e2 = this.plotBox, g2 = this.plotLeft, f2 = this.plotTop, h2 = this.scrollablePlotBox, l2 = 0;
            var k2 = 0;
            c2.visiblePlotOnly && this.scrollingContainer && (k2 = this.scrollingContainer, l2 = k2.scrollLeft, k2 = k2.scrollTop);
            var m2 = c2.series;
            e2 = c2.visiblePlotOnly && h2 || e2;
            h2 = c2.inverted ? a4 : b2;
            a4 = c2.inverted ? b2 : a4;
            b2 = { x: h2, y: a4, isInsidePlot: true };
            if (!c2.ignoreX) {
              var p2 = m2 && (d2 ? m2.yAxis : m2.xAxis) || { pos: g2, len: Infinity };
              h2 = c2.paneCoordinates ? p2.pos + h2 : g2 + h2;
              h2 >= Math.max(l2 + g2, p2.pos) && h2 <= Math.min(l2 + g2 + e2.width, p2.pos + p2.len) || (b2.isInsidePlot = false);
            }
            !c2.ignoreY && b2.isInsidePlot && (d2 = m2 && (d2 ? m2.xAxis : m2.yAxis) || { pos: f2, len: Infinity }, c2 = c2.paneCoordinates ? d2.pos + a4 : f2 + a4, c2 >= Math.max(k2 + f2, d2.pos) && c2 <= Math.min(k2 + f2 + e2.height, d2.pos + d2.len) || (b2.isInsidePlot = false));
            Q(this, "afterIsInsidePlot", b2);
            return b2.isInsidePlot;
          };
          a3.prototype.redraw = function(b2) {
            Q(this, "beforeRedraw");
            var a4 = this.hasCartesianSeries ? this.axes : this.colorAxis || [], c2 = this.series, d2 = this.pointer, e2 = this.legend, g2 = this.userOptions.legend, f2 = this.renderer, h2 = f2.isHidden(), l2 = [], k2 = this.isDirtyBox, m2 = this.isDirtyLegend;
            this.setResponsive && this.setResponsive(false);
            B(this.hasRendered ? b2 : false, this);
            h2 && this.temporaryDisplay();
            this.layOutTitles();
            for (b2 = c2.length; b2--; ) {
              var p2 = c2[b2];
              if (p2.options.stacking || p2.options.centerInCategory) {
                var n2 = true;
                if (p2.isDirty) {
                  var E2 = true;
                  break;
                }
              }
            }
            if (E2)
              for (b2 = c2.length; b2--; )
                p2 = c2[b2], p2.options.stacking && (p2.isDirty = true);
            c2.forEach(function(b3) {
              b3.isDirty && ("point" === b3.options.legendType ? ("function" === typeof b3.updateTotals && b3.updateTotals(), m2 = true) : g2 && (g2.labelFormatter || g2.labelFormat) && (m2 = true));
              b3.isDirtyData && Q(b3, "updatedData");
            });
            m2 && e2 && e2.options.enabled && (e2.render(), this.isDirtyLegend = false);
            n2 && this.getStacks();
            a4.forEach(function(b3) {
              b3.updateNames();
              b3.setScale();
            });
            this.getMargins();
            a4.forEach(function(b3) {
              b3.isDirty && (k2 = true);
            });
            a4.forEach(function(b3) {
              var a5 = b3.min + "," + b3.max;
              b3.extKey !== a5 && (b3.extKey = a5, l2.push(function() {
                Q(b3, "afterSetExtremes", M2(b3.eventArgs, b3.getExtremes()));
                delete b3.eventArgs;
              }));
              (k2 || n2) && b3.redraw();
            });
            k2 && this.drawChartBox();
            Q(this, "predraw");
            c2.forEach(function(b3) {
              (k2 || b3.isDirty) && b3.visible && b3.redraw();
              b3.isDirtyData = false;
            });
            d2 && d2.reset(true);
            f2.draw();
            Q(this, "redraw");
            Q(this, "render");
            h2 && this.temporaryDisplay(true);
            l2.forEach(function(b3) {
              b3.call();
            });
          };
          a3.prototype.get = function(b2) {
            function a4(a5) {
              return a5.id === b2 || a5.options && a5.options.id === b2;
            }
            for (var c2 = this.series, d2 = da(this.axes, a4) || da(this.series, a4), e2 = 0; !d2 && e2 < c2.length; e2++)
              d2 = da(c2[e2].points || [], a4);
            return d2;
          };
          a3.prototype.getAxes = function() {
            var b2 = this, a4 = this.options, c2 = a4.xAxis = ha(a4.xAxis || {});
            a4 = a4.yAxis = ha(a4.yAxis || {});
            Q(this, "getAxes");
            c2.forEach(function(b3, a5) {
              b3.index = a5;
              b3.isX = true;
            });
            a4.forEach(function(b3, a5) {
              b3.index = a5;
            });
            c2.concat(a4).forEach(function(a5) {
              new u(b2, a5);
            });
            Q(this, "afterGetAxes");
          };
          a3.prototype.getSelectedPoints = function() {
            return this.series.reduce(function(b2, a4) {
              a4.getPointsCollection().forEach(function(a5) {
                R(a5.selectedStaging, a5.selected) && b2.push(a5);
              });
              return b2;
            }, []);
          };
          a3.prototype.getSelectedSeries = function() {
            return this.series.filter(function(b2) {
              return b2.selected;
            });
          };
          a3.prototype.setTitle = function(b2, a4, c2) {
            this.applyDescription("title", b2);
            this.applyDescription("subtitle", a4);
            this.applyDescription(
              "caption",
              void 0
            );
            this.layOutTitles(c2);
          };
          a3.prototype.applyDescription = function(b2, a4) {
            var c2 = this, d2 = "title" === b2 ? { color: "#333333", fontSize: this.options.isStock ? "16px" : "18px" } : { color: "#666666" };
            d2 = this.options[b2] = W(!this.styledMode && { style: d2 }, this.options[b2], a4);
            var e2 = this[b2];
            e2 && a4 && (this[b2] = e2 = e2.destroy());
            d2 && !e2 && (e2 = this.renderer.text(d2.text, 0, 0, d2.useHTML).attr({ align: d2.align, "class": "highcharts-" + b2, zIndex: d2.zIndex || 4 }).add(), e2.update = function(a5) {
              c2[{ title: "setTitle", subtitle: "setSubtitle", caption: "setCaption" }[b2]](a5);
            }, this.styledMode || e2.css(d2.style), this[b2] = e2);
          };
          a3.prototype.layOutTitles = function(b2) {
            var a4 = [0, 0, 0], c2 = this.renderer, d2 = this.spacingBox;
            ["title", "subtitle", "caption"].forEach(function(b3) {
              var e3 = this[b3], g2 = this.options[b3], f2 = g2.verticalAlign || "top";
              b3 = "title" === b3 ? "top" === f2 ? -3 : 0 : "top" === f2 ? a4[0] + 2 : 0;
              var h2;
              if (e3) {
                this.styledMode || (h2 = g2.style && g2.style.fontSize);
                h2 = c2.fontMetrics(h2, e3).b;
                e3.css({ width: (g2.width || d2.width + (g2.widthAdjust || 0)) + "px" });
                var l2 = Math.round(e3.getBBox(g2.useHTML).height);
                e3.align(M2({ y: "bottom" === f2 ? h2 : b3 + h2, height: l2 }, g2), false, "spacingBox");
                g2.floating || ("top" === f2 ? a4[0] = Math.ceil(a4[0] + l2) : "bottom" === f2 && (a4[2] = Math.ceil(a4[2] + l2)));
              }
            }, this);
            a4[0] && "top" === (this.options.title.verticalAlign || "top") && (a4[0] += this.options.title.margin);
            a4[2] && "bottom" === this.options.caption.verticalAlign && (a4[2] += this.options.caption.margin);
            var e2 = !this.titleOffset || this.titleOffset.join(",") !== a4.join(",");
            this.titleOffset = a4;
            Q(this, "afterLayOutTitles");
            !this.isDirtyBox && e2 && (this.isDirtyBox = this.isDirtyLegend = e2, this.hasRendered && R(b2, true) && this.isDirtyBox && this.redraw());
          };
          a3.prototype.getChartSize = function() {
            var b2 = this.options.chart, a4 = b2.width;
            b2 = b2.height;
            var c2 = this.renderTo;
            U(a4) || (this.containerWidth = ea(c2, "width"));
            U(b2) || (this.containerHeight = ea(c2, "height"));
            this.chartWidth = Math.max(0, a4 || this.containerWidth || 600);
            this.chartHeight = Math.max(0, aa(b2, this.chartWidth) || (1 < this.containerHeight ? this.containerHeight : 400));
          };
          a3.prototype.temporaryDisplay = function(b2) {
            var a4 = this.renderTo;
            if (b2)
              for (; a4 && a4.style; )
                a4.hcOrigStyle && (O(a4, a4.hcOrigStyle), delete a4.hcOrigStyle), a4.hcOrigDetached && (r.body.removeChild(a4), a4.hcOrigDetached = false), a4 = a4.parentNode;
            else
              for (; a4 && a4.style; ) {
                r.body.contains(a4) || a4.parentNode || (a4.hcOrigDetached = true, r.body.appendChild(a4));
                if ("none" === ea(a4, "display", false) || a4.hcOricDetached)
                  a4.hcOrigStyle = { display: a4.style.display, height: a4.style.height, overflow: a4.style.overflow }, b2 = { display: "block", overflow: "hidden" }, a4 !== this.renderTo && (b2.height = 0), O(a4, b2), a4.offsetWidth || a4.style.setProperty("display", "block", "important");
                a4 = a4.parentNode;
                if (a4 === r.body)
                  break;
              }
          };
          a3.prototype.setClassName = function(b2) {
            this.container.className = "highcharts-container " + (b2 || "");
          };
          a3.prototype.getContainer = function() {
            var a4 = this.options, c2 = a4.chart, d2 = ka(), g2, h2 = this.renderTo;
            h2 || (this.renderTo = h2 = c2.renderTo);
            V(h2) && (this.renderTo = h2 = r.getElementById(h2));
            h2 || K(13, true, this);
            var l2 = fa(I(h2, "data-highcharts-chart"));
            T(l2) && C[l2] && C[l2].hasRendered && C[l2].destroy();
            I(h2, "data-highcharts-chart", this.index);
            h2.innerHTML = f.emptyHTML;
            c2.skipClone || h2.offsetWidth || this.temporaryDisplay();
            this.getChartSize();
            l2 = this.chartWidth;
            var k2 = this.chartHeight;
            O(h2, { overflow: "hidden" });
            this.styledMode || (g2 = M2({ position: "relative", overflow: "hidden", width: l2 + "px", height: k2 + "px", textAlign: "left", lineHeight: "normal", zIndex: 0, "-webkit-tap-highlight-color": "rgba(0,0,0,0)", userSelect: "none", "touch-action": "manipulation", outline: "none" }, c2.style || {}));
            this.container = d2 = S("div", { id: d2 }, g2, h2);
            this._cursor = d2.style.cursor;
            this.renderer = new (c2.renderer || !b ? n.getRendererType(c2.renderer) : e)(d2, l2, k2, void 0, c2.forExport, a4.exporting && a4.exporting.allowHTML, this.styledMode);
            B(
              void 0,
              this
            );
            this.setClassName(c2.className);
            if (this.styledMode)
              for (var m2 in a4.defs)
                this.renderer.definition(a4.defs[m2]);
            else
              this.renderer.setStyle(c2.style);
            this.renderer.chartIndex = this.index;
            Q(this, "afterGetContainer");
          };
          a3.prototype.getMargins = function(b2) {
            var a4 = this.spacing, c2 = this.margin, d2 = this.titleOffset;
            this.resetMargins();
            d2[0] && !U(c2[0]) && (this.plotTop = Math.max(this.plotTop, d2[0] + a4[0]));
            d2[2] && !U(c2[2]) && (this.marginBottom = Math.max(this.marginBottom, d2[2] + a4[2]));
            this.legend && this.legend.display && this.legend.adjustMargins(
              c2,
              a4
            );
            Q(this, "getMargins");
            b2 || this.getAxisMargins();
          };
          a3.prototype.getAxisMargins = function() {
            var b2 = this, a4 = b2.axisOffset = [0, 0, 0, 0], c2 = b2.colorAxis, d2 = b2.margin, e2 = function(b3) {
              b3.forEach(function(b4) {
                b4.visible && b4.getOffset();
              });
            };
            b2.hasCartesianSeries ? e2(b2.axes) : c2 && c2.length && e2(c2);
            l.forEach(function(c3, e3) {
              U(d2[e3]) || (b2[c3] += a4[e3]);
            });
            b2.setChartSize();
          };
          a3.prototype.reflow = function(b2) {
            var a4 = this, c2 = a4.options.chart, d2 = a4.renderTo, e2 = U(c2.width) && U(c2.height), f2 = c2.width || ea(d2, "width");
            c2 = c2.height || ea(d2, "height");
            d2 = b2 ? b2.target : g;
            delete a4.pointer.chartPosition;
            if (!e2 && !a4.isPrinting && f2 && c2 && (d2 === g || d2 === r)) {
              if (f2 !== a4.containerWidth || c2 !== a4.containerHeight)
                h.clearTimeout(a4.reflowTimeout), a4.reflowTimeout = ba(function() {
                  a4.container && a4.setSize(void 0, void 0, false);
                }, b2 ? 100 : 0);
              a4.containerWidth = f2;
              a4.containerHeight = c2;
            }
          };
          a3.prototype.setReflow = function(b2) {
            var a4 = this;
            false === b2 || this.unbindReflow ? false === b2 && this.unbindReflow && (this.unbindReflow = this.unbindReflow()) : (this.unbindReflow = x(g, "resize", function(b3) {
              a4.options && a4.reflow(b3);
            }), x(this, "destroy", this.unbindReflow));
          };
          a3.prototype.setSize = function(b2, a4, c2) {
            var d2 = this, e2 = d2.renderer;
            d2.isResizing += 1;
            B(c2, d2);
            c2 = e2.globalAnimation;
            d2.oldChartHeight = d2.chartHeight;
            d2.oldChartWidth = d2.chartWidth;
            "undefined" !== typeof b2 && (d2.options.chart.width = b2);
            "undefined" !== typeof a4 && (d2.options.chart.height = a4);
            d2.getChartSize();
            d2.styledMode || (c2 ? w : O)(d2.container, { width: d2.chartWidth + "px", height: d2.chartHeight + "px" }, c2);
            d2.setChartSize(true);
            e2.setSize(d2.chartWidth, d2.chartHeight, c2);
            d2.axes.forEach(function(b3) {
              b3.isDirty = true;
              b3.setScale();
            });
            d2.isDirtyLegend = true;
            d2.isDirtyBox = true;
            d2.layOutTitles();
            d2.getMargins();
            d2.redraw(c2);
            d2.oldChartHeight = null;
            Q(d2, "resize");
            ba(function() {
              d2 && Q(d2, "endResize", null, function() {
                --d2.isResizing;
              });
            }, p(c2).duration);
          };
          a3.prototype.setChartSize = function(b2) {
            var a4 = this.inverted, c2 = this.renderer, d2 = this.chartWidth, e2 = this.chartHeight, g2 = this.options.chart, f2 = this.spacing, h2 = this.clipOffset, l2, k2, m2, p2;
            this.plotLeft = l2 = Math.round(this.plotLeft);
            this.plotTop = k2 = Math.round(this.plotTop);
            this.plotWidth = m2 = Math.max(0, Math.round(d2 - l2 - this.marginRight));
            this.plotHeight = p2 = Math.max(0, Math.round(e2 - k2 - this.marginBottom));
            this.plotSizeX = a4 ? p2 : m2;
            this.plotSizeY = a4 ? m2 : p2;
            this.plotBorderWidth = g2.plotBorderWidth || 0;
            this.spacingBox = c2.spacingBox = { x: f2[3], y: f2[0], width: d2 - f2[3] - f2[1], height: e2 - f2[0] - f2[2] };
            this.plotBox = c2.plotBox = { x: l2, y: k2, width: m2, height: p2 };
            a4 = 2 * Math.floor(this.plotBorderWidth / 2);
            d2 = Math.ceil(Math.max(a4, h2[3]) / 2);
            e2 = Math.ceil(Math.max(a4, h2[0]) / 2);
            this.clipBox = { x: d2, y: e2, width: Math.floor(this.plotSizeX - Math.max(a4, h2[1]) / 2 - d2), height: Math.max(0, Math.floor(this.plotSizeY - Math.max(a4, h2[2]) / 2 - e2)) };
            b2 || (this.axes.forEach(function(b3) {
              b3.setAxisSize();
              b3.setAxisTranslation();
            }), c2.alignElements());
            Q(this, "afterSetChartSize", { skipAxes: b2 });
          };
          a3.prototype.resetMargins = function() {
            Q(this, "resetMargins");
            var b2 = this, a4 = b2.options.chart;
            ["margin", "spacing"].forEach(function(c2) {
              var d2 = a4[c2], e2 = N(d2) ? d2 : [d2, d2, d2, d2];
              ["Top", "Right", "Bottom", "Left"].forEach(function(d3, g2) {
                b2[c2][g2] = R(a4[c2 + d3], e2[g2]);
              });
            });
            l.forEach(function(a5, c2) {
              b2[a5] = R(b2.margin[c2], b2.spacing[c2]);
            });
            b2.axisOffset = [0, 0, 0, 0];
            b2.clipOffset = [0, 0, 0, 0];
          };
          a3.prototype.drawChartBox = function() {
            var b2 = this.options.chart, a4 = this.renderer, c2 = this.chartWidth, d2 = this.chartHeight, e2 = this.styledMode, g2 = this.plotBGImage, f2 = b2.backgroundColor, h2 = b2.plotBackgroundColor, l2 = b2.plotBackgroundImage, k2 = this.plotLeft, m2 = this.plotTop, p2 = this.plotWidth, n2 = this.plotHeight, E2 = this.plotBox, r2 = this.clipRect, t2 = this.clipBox, q2 = this.chartBackground, N2 = this.plotBackground, w2 = this.plotBorder, B2, C2 = "animate";
            q2 || (this.chartBackground = q2 = a4.rect().addClass("highcharts-background").add(), C2 = "attr");
            if (e2)
              var x2 = B2 = q2.strokeWidth();
            else {
              x2 = b2.borderWidth || 0;
              B2 = x2 + (b2.shadow ? 8 : 0);
              f2 = { fill: f2 || "none" };
              if (x2 || q2["stroke-width"])
                f2.stroke = b2.borderColor, f2["stroke-width"] = x2;
              q2.attr(f2).shadow(b2.shadow);
            }
            q2[C2]({ x: B2 / 2, y: B2 / 2, width: c2 - B2 - x2 % 2, height: d2 - B2 - x2 % 2, r: b2.borderRadius });
            C2 = "animate";
            N2 || (C2 = "attr", this.plotBackground = N2 = a4.rect().addClass("highcharts-plot-background").add());
            N2[C2](E2);
            e2 || (N2.attr({ fill: h2 || "none" }).shadow(b2.plotShadow), l2 && (g2 ? (l2 !== g2.attr("href") && g2.attr("href", l2), g2.animate(E2)) : this.plotBGImage = a4.image(l2, k2, m2, p2, n2).add()));
            r2 ? r2.animate({ width: t2.width, height: t2.height }) : this.clipRect = a4.clipRect(t2);
            C2 = "animate";
            w2 || (C2 = "attr", this.plotBorder = w2 = a4.rect().addClass("highcharts-plot-border").attr({ zIndex: 1 }).add());
            e2 || w2.attr({ stroke: b2.plotBorderColor, "stroke-width": b2.plotBorderWidth || 0, fill: "none" });
            w2[C2](w2.crisp({ x: k2, y: m2, width: p2, height: n2 }, -w2.strokeWidth()));
            this.isDirtyBox = false;
            Q(this, "afterDrawChartBox");
          };
          a3.prototype.propFromSeries = function() {
            var b2 = this, a4 = b2.options.chart, c2 = b2.options.series, d2, e2, g2;
            ["inverted", "angular", "polar"].forEach(function(f2) {
              e2 = D[a4.type || a4.defaultSeriesType];
              g2 = a4[f2] || e2 && e2.prototype[f2];
              for (d2 = c2 && c2.length; !g2 && d2--; )
                (e2 = D[c2[d2].type]) && e2.prototype[f2] && (g2 = true);
              b2[f2] = g2;
            });
          };
          a3.prototype.linkSeries = function() {
            var b2 = this, a4 = b2.series;
            a4.forEach(function(b3) {
              b3.linkedSeries.length = 0;
            });
            a4.forEach(function(a5) {
              var c2 = a5.options.linkedTo;
              V(c2) && (c2 = ":previous" === c2 ? b2.series[a5.index - 1] : b2.get(c2)) && c2.linkedParent !== a5 && (c2.linkedSeries.push(a5), a5.linkedParent = c2, c2.enabledDataSorting && a5.setDataSortingOptions(), a5.visible = R(a5.options.visible, c2.options.visible, a5.visible));
            });
            Q(this, "afterLinkSeries");
          };
          a3.prototype.renderSeries = function() {
            this.series.forEach(function(b2) {
              b2.translate();
              b2.render();
            });
          };
          a3.prototype.renderLabels = function() {
            var b2 = this, a4 = b2.options.labels;
            a4.items && a4.items.forEach(function(c2) {
              var d2 = M2(a4.style, c2.style), e2 = fa(d2.left) + b2.plotLeft, g2 = fa(d2.top) + b2.plotTop + 12;
              delete d2.left;
              delete d2.top;
              b2.renderer.text(c2.html, e2, g2).attr({ zIndex: 2 }).css(d2).add();
            });
          };
          a3.prototype.render = function() {
            var b2 = this.axes, a4 = this.colorAxis, c2 = this.renderer, d2 = this.options, e2 = function(b3) {
              b3.forEach(function(b4) {
                b4.visible && b4.render();
              });
            }, g2 = 0;
            this.setTitle();
            this.legend = new G(this, d2.legend);
            this.getStacks && this.getStacks();
            this.getMargins(true);
            this.setChartSize();
            d2 = this.plotWidth;
            b2.some(function(b3) {
              if (b3.horiz && b3.visible && b3.options.labels.enabled && b3.series.length)
                return g2 = 21, true;
            });
            var f2 = this.plotHeight = Math.max(this.plotHeight - g2, 0);
            b2.forEach(function(b3) {
              b3.setScale();
            });
            this.getAxisMargins();
            var h2 = 1.1 < d2 / this.plotWidth, l2 = 1.05 < f2 / this.plotHeight;
            if (h2 || l2)
              b2.forEach(function(b3) {
                (b3.horiz && h2 || !b3.horiz && l2) && b3.setTickInterval(true);
              }), this.getMargins();
            this.drawChartBox();
            this.hasCartesianSeries ? e2(b2) : a4 && a4.length && e2(a4);
            this.seriesGroup || (this.seriesGroup = c2.g("series-group").attr({ zIndex: 3 }).add());
            this.renderSeries();
            this.renderLabels();
            this.addCredits();
            this.setResponsive && this.setResponsive();
            this.hasRendered = true;
          };
          a3.prototype.addCredits = function(b2) {
            var a4 = this, c2 = W(true, this.options.credits, b2);
            c2.enabled && !this.credits && (this.credits = this.renderer.text(c2.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function() {
              c2.href && (g.location.href = c2.href);
            }).attr({ align: c2.position.align, zIndex: 8 }), a4.styledMode || this.credits.css(c2.style), this.credits.add().align(c2.position), this.credits.update = function(b3) {
              a4.credits = a4.credits.destroy();
              a4.addCredits(b3);
            });
          };
          a3.prototype.destroy = function() {
            var b2 = this, a4 = b2.axes, c2 = b2.series, d2 = b2.container, e2 = d2 && d2.parentNode, g2;
            Q(b2, "destroy");
            b2.renderer.forExport ? L(C, b2) : C[b2.index] = void 0;
            y.chartCount--;
            b2.renderTo.removeAttribute("data-highcharts-chart");
            ia(b2);
            for (g2 = a4.length; g2--; )
              a4[g2] = a4[g2].destroy();
            this.scroller && this.scroller.destroy && this.scroller.destroy();
            for (g2 = c2.length; g2--; )
              c2[g2] = c2[g2].destroy();
            "title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function(a5) {
              var c3 = b2[a5];
              c3 && c3.destroy && (b2[a5] = c3.destroy());
            });
            d2 && (d2.innerHTML = f.emptyHTML, ia(d2), e2 && Y(d2));
            X(b2, function(a5, c3) {
              delete b2[c3];
            });
          };
          a3.prototype.firstRender = function() {
            var b2 = this, a4 = b2.options;
            if (!b2.isReadyToRender || b2.isReadyToRender()) {
              b2.getContainer();
              b2.resetMargins();
              b2.setChartSize();
              b2.propFromSeries();
              b2.getAxes();
              (E(a4.series) ? a4.series : []).forEach(function(a5) {
                b2.initSeries(a5);
              });
              b2.linkSeries();
              b2.setSeriesData();
              Q(b2, "beforeRender");
              q && (H.isRequired() ? b2.pointer = new H(b2, a4) : b2.pointer = new q(b2, a4));
              b2.render();
              b2.pointer.getChartPosition();
              if (!b2.renderer.imgCount && !b2.hasLoaded)
                b2.onload();
              b2.temporaryDisplay(true);
            }
          };
          a3.prototype.onload = function() {
            this.callbacks.concat([this.callback]).forEach(function(b2) {
              b2 && "undefined" !== typeof this.index && b2.apply(this, [this]);
            }, this);
            Q(this, "load");
            Q(this, "render");
            U(this.index) && this.setReflow(this.options.chart.reflow);
            this.hasLoaded = true;
          };
          a3.prototype.addSeries = function(b2, a4, c2) {
            var d2 = this, e2;
            b2 && (a4 = R(a4, true), Q(d2, "addSeries", { options: b2 }, function() {
              e2 = d2.initSeries(b2);
              d2.isDirtyLegend = true;
              d2.linkSeries();
              e2.enabledDataSorting && e2.setData(b2.data, false);
              Q(d2, "afterAddSeries", { series: e2 });
              a4 && d2.redraw(c2);
            }));
            return e2;
          };
          a3.prototype.addAxis = function(b2, a4, c2, d2) {
            return this.createAxis(a4 ? "xAxis" : "yAxis", { axis: b2, redraw: c2, animation: d2 });
          };
          a3.prototype.addColorAxis = function(b2, a4, c2) {
            return this.createAxis(
              "colorAxis",
              { axis: b2, redraw: a4, animation: c2 }
            );
          };
          a3.prototype.createAxis = function(b2, a4) {
            b2 = new u(this, W(a4.axis, { index: this[b2].length, isX: "xAxis" === b2 }));
            R(a4.redraw, true) && this.redraw(a4.animation);
            return b2;
          };
          a3.prototype.showLoading = function(b2) {
            var a4 = this, c2 = a4.options, d2 = c2.loading, e2 = function() {
              g2 && O(g2, { left: a4.plotLeft + "px", top: a4.plotTop + "px", width: a4.plotWidth + "px", height: a4.plotHeight + "px" });
            }, g2 = a4.loadingDiv, h2 = a4.loadingSpan;
            g2 || (a4.loadingDiv = g2 = S("div", { className: "highcharts-loading highcharts-loading-hidden" }, null, a4.container));
            h2 || (a4.loadingSpan = h2 = S("span", { className: "highcharts-loading-inner" }, null, g2), x(a4, "redraw", e2));
            g2.className = "highcharts-loading";
            f.setElementHTML(h2, R(b2, c2.lang.loading, ""));
            a4.styledMode || (O(g2, M2(d2.style, { zIndex: 10 })), O(h2, d2.labelStyle), a4.loadingShown || (O(g2, { opacity: 0, display: "" }), w(g2, { opacity: d2.style.opacity || 0.5 }, { duration: d2.showDuration || 0 })));
            a4.loadingShown = true;
            e2();
          };
          a3.prototype.hideLoading = function() {
            var b2 = this.options, a4 = this.loadingDiv;
            a4 && (a4.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || w(a4, { opacity: 0 }, { duration: b2.loading.hideDuration || 100, complete: function() {
              O(a4, { display: "none" });
            } }));
            this.loadingShown = false;
          };
          a3.prototype.update = function(b2, a4, d2, e2) {
            var g2 = this, f2 = { credits: "addCredits", title: "setTitle", subtitle: "setSubtitle", caption: "setCaption" }, h2 = b2.isResponsiveOptions, l2 = [], k2, p2;
            Q(g2, "update", { options: b2 });
            h2 || g2.setResponsive(false, true);
            b2 = P(b2, g2.options);
            g2.userOptions = W(g2.userOptions, b2);
            var n2 = b2.chart;
            if (n2) {
              W(true, g2.options.chart, n2);
              "className" in n2 && g2.setClassName(n2.className);
              "reflow" in n2 && g2.setReflow(n2.reflow);
              if ("inverted" in n2 || "polar" in n2 || "type" in n2) {
                g2.propFromSeries();
                var E2 = true;
              }
              "alignTicks" in n2 && (E2 = true);
              "events" in n2 && v(this, n2);
              X(n2, function(b3, a5) {
                -1 !== g2.propsRequireUpdateSeries.indexOf("chart." + a5) && (k2 = true);
                -1 !== g2.propsRequireDirtyBox.indexOf(a5) && (g2.isDirtyBox = true);
                -1 !== g2.propsRequireReflow.indexOf(a5) && (h2 ? g2.isDirtyBox = true : p2 = true);
              });
              !g2.styledMode && n2.style && g2.renderer.setStyle(g2.options.chart.style || {});
            }
            !g2.styledMode && b2.colors && (this.options.colors = b2.colors);
            b2.time && (this.time === m && (this.time = new c(b2.time)), W(
              true,
              g2.options.time,
              b2.time
            ));
            X(b2, function(a5, c2) {
              if (g2[c2] && "function" === typeof g2[c2].update)
                g2[c2].update(a5, false);
              else if ("function" === typeof g2[f2[c2]])
                g2[f2[c2]](a5);
              else
                "colors" !== c2 && -1 === g2.collectionsWithUpdate.indexOf(c2) && W(true, g2.options[c2], b2[c2]);
              "chart" !== c2 && -1 !== g2.propsRequireUpdateSeries.indexOf(c2) && (k2 = true);
            });
            this.collectionsWithUpdate.forEach(function(a5) {
              if (b2[a5]) {
                var c2 = [];
                g2[a5].forEach(function(b3, a6) {
                  b3.options.isInternal || c2.push(R(b3.options.index, a6));
                });
                ha(b2[a5]).forEach(function(b3, e3) {
                  var f3 = U(b3.id), h3;
                  f3 && (h3 = g2.get(b3.id));
                  !h3 && g2[a5] && (h3 = g2[a5][c2 ? c2[e3] : e3]) && f3 && U(h3.options.id) && (h3 = void 0);
                  h3 && h3.coll === a5 && (h3.update(b3, false), d2 && (h3.touched = true));
                  !h3 && d2 && g2.collectionsWithInit[a5] && (g2.collectionsWithInit[a5][0].apply(g2, [b3].concat(g2.collectionsWithInit[a5][1] || []).concat([false])).touched = true);
                });
                d2 && g2[a5].forEach(function(b3) {
                  b3.touched || b3.options.isInternal ? delete b3.touched : l2.push(b3);
                });
              }
            });
            l2.forEach(function(b3) {
              b3.chart && b3.remove && b3.remove(false);
            });
            E2 && g2.axes.forEach(function(b3) {
              b3.update({}, false);
            });
            k2 && g2.getSeriesOrderByLinks().forEach(function(b3) {
              b3.chart && b3.update({}, false);
            }, this);
            E2 = n2 && n2.width;
            n2 = n2 && (V(n2.height) ? aa(n2.height, E2 || g2.chartWidth) : n2.height);
            p2 || T(E2) && E2 !== g2.chartWidth || T(n2) && n2 !== g2.chartHeight ? g2.setSize(E2, n2, e2) : R(a4, true) && g2.redraw(e2);
            Q(g2, "afterUpdate", { options: b2, redraw: a4, animation: e2 });
          };
          a3.prototype.setSubtitle = function(b2, a4) {
            this.applyDescription("subtitle", b2);
            this.layOutTitles(a4);
          };
          a3.prototype.setCaption = function(b2, a4) {
            this.applyDescription("caption", b2);
            this.layOutTitles(a4);
          };
          a3.prototype.showResetZoom = function() {
            function b2() {
              a4.zoomOut();
            }
            var a4 = this, c2 = d.lang, e2 = a4.options.chart.resetZoomButton, g2 = e2.theme, f2 = g2.states, h2 = "chart" === e2.relativeTo || "spacingBox" === e2.relativeTo ? null : "scrollablePlotBox";
            Q(this, "beforeShowResetZoom", null, function() {
              a4.resetZoomButton = a4.renderer.button(c2.resetZoom, null, null, b2, g2, f2 && f2.hover).attr({ align: e2.position.align, title: c2.resetZoomTitle }).addClass("highcharts-reset-zoom").add().align(e2.position, false, h2);
            });
            Q(this, "afterShowResetZoom");
          };
          a3.prototype.zoomOut = function() {
            Q(this, "selection", { resetSelection: true }, this.zoom);
          };
          a3.prototype.zoom = function(b2) {
            var a4 = this, c2 = a4.pointer, d2 = a4.inverted ? c2.mouseDownX : c2.mouseDownY, e2 = false, g2;
            !b2 || b2.resetSelection ? (a4.axes.forEach(function(b3) {
              g2 = b3.zoom();
            }), c2.initiated = false) : b2.xAxis.concat(b2.yAxis).forEach(function(b3) {
              var f3 = b3.axis, h2 = a4.inverted ? f3.left : f3.top, l2 = a4.inverted ? h2 + f3.width : h2 + f3.height, k2 = f3.isXAxis, m2 = false;
              if (!k2 && d2 >= h2 && d2 <= l2 || k2 || !U(d2))
                m2 = true;
              c2[k2 ? "zoomX" : "zoomY"] && m2 && (g2 = f3.zoom(b3.min, b3.max), f3.displayBtn && (e2 = true));
            });
            var f2 = a4.resetZoomButton;
            e2 && !f2 ? a4.showResetZoom() : !e2 && N(f2) && (a4.resetZoomButton = f2.destroy());
            g2 && a4.redraw(R(
              a4.options.chart.animation,
              b2 && b2.animation,
              100 > a4.pointCount
            ));
          };
          a3.prototype.pan = function(b2, a4) {
            var c2 = this, d2 = c2.hoverPoints;
            a4 = "object" === typeof a4 ? a4 : { enabled: a4, type: "x" };
            var e2 = c2.options.chart, g2 = c2.options.mapNavigation && c2.options.mapNavigation.enabled;
            e2 && e2.panning && (e2.panning = a4);
            var f2 = a4.type, h2;
            Q(this, "pan", { originalEvent: b2 }, function() {
              d2 && d2.forEach(function(b3) {
                b3.setState();
              });
              var a5 = c2.xAxis;
              "xy" === f2 ? a5 = a5.concat(c2.yAxis) : "y" === f2 && (a5 = c2.yAxis);
              var e3 = {};
              a5.forEach(function(a6) {
                if (a6.options.panningEnabled && !a6.options.isInternal) {
                  var d3 = a6.horiz, l2 = b2[d3 ? "chartX" : "chartY"];
                  d3 = d3 ? "mouseDownX" : "mouseDownY";
                  var k2 = c2[d3], m2 = a6.minPointOffset || 0, p2 = a6.reversed && !c2.inverted || !a6.reversed && c2.inverted ? -1 : 1, n2 = a6.getExtremes(), E2 = a6.toValue(k2 - l2, true) + m2 * p2, r2 = a6.toValue(k2 + a6.len - l2, true) - (m2 * p2 || a6.isXAxis && a6.pointRangePadding || 0), t2 = r2 < E2;
                  p2 = a6.hasVerticalPanning();
                  k2 = t2 ? r2 : E2;
                  E2 = t2 ? E2 : r2;
                  var q2 = a6.panningState;
                  !p2 || a6.isXAxis || q2 && !q2.isDirty || a6.series.forEach(function(b3) {
                    var a7 = b3.getProcessedData(true);
                    a7 = b3.getExtremes(a7.yData, true);
                    q2 || (q2 = { startMin: Number.MAX_VALUE, startMax: -Number.MAX_VALUE });
                    T(a7.dataMin) && T(a7.dataMax) && (q2.startMin = Math.min(R(b3.options.threshold, Infinity), a7.dataMin, q2.startMin), q2.startMax = Math.max(R(b3.options.threshold, -Infinity), a7.dataMax, q2.startMax));
                  });
                  p2 = Math.min(R(q2 && q2.startMin, n2.dataMin), m2 ? n2.min : a6.toValue(a6.toPixels(n2.min) - a6.minPixelPadding));
                  r2 = Math.max(R(q2 && q2.startMax, n2.dataMax), m2 ? n2.max : a6.toValue(a6.toPixels(n2.max) + a6.minPixelPadding));
                  a6.panningState = q2;
                  a6.isOrdinal || (m2 = p2 - k2, 0 < m2 && (E2 += m2, k2 = p2), m2 = E2 - r2, 0 < m2 && (E2 = r2, k2 -= m2), a6.series.length && k2 !== n2.min && E2 !== n2.max && k2 >= p2 && E2 <= r2 && (a6.setExtremes(
                    k2,
                    E2,
                    false,
                    false,
                    { trigger: "pan" }
                  ), c2.resetZoomButton || g2 || k2 === p2 || E2 === r2 || !f2.match("y") || (c2.showResetZoom(), a6.displayBtn = false), h2 = true), e3[d3] = l2);
                }
              });
              X(e3, function(b3, a6) {
                c2[a6] = b3;
              });
              h2 && c2.redraw(false);
              O(c2.container, { cursor: "move" });
            });
          };
          return a3;
        }();
        M2(a2.prototype, {
          callbacks: [],
          collectionsWithInit: { xAxis: [a2.prototype.addAxis, [true]], yAxis: [a2.prototype.addAxis, [false]], series: [a2.prototype.addSeries] },
          collectionsWithUpdate: ["xAxis", "yAxis", "series"],
          propsRequireDirtyBox: "backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
          propsRequireReflow: "margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),
          propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" ")
        });
        "";
        return a2;
      });
      M(a, "Core/Legend/LegendSymbol.js", [a["Core/Utilities.js"]], function(a2) {
        var v = a2.merge, z = a2.pick, F;
        (function(a3) {
          a3.drawLineMarker = function(a4) {
            var u = this.options, A = a4.symbolWidth, q = a4.symbolHeight, n = q / 2, k = this.chart.renderer, e = this.legendGroup;
            a4 = a4.baseline - Math.round(0.3 * a4.fontMetrics.b);
            var c = {}, h = u.marker;
            this.chart.styledMode || (c = { "stroke-width": u.lineWidth || 0 }, u.dashStyle && (c.dashstyle = u.dashStyle));
            this.legendLine = k.path([["M", 0, a4], ["L", A, a4]]).addClass("highcharts-graph").attr(c).add(e);
            h && false !== h.enabled && A && (u = Math.min(z(h.radius, n), n), 0 === this.symbol.indexOf("url") && (h = v(h, { width: q, height: q }), u = 0), this.legendSymbol = A = k.symbol(this.symbol, A / 2 - u, a4 - u, 2 * u, 2 * u, h).addClass("highcharts-point").add(e), A.isMarker = true);
          };
          a3.drawRectangle = function(a4, v2) {
            var u = a4.symbolHeight, q = a4.options.squareSymbol;
            v2.legendSymbol = this.chart.renderer.rect(q ? (a4.symbolWidth - u) / 2 : 0, a4.baseline - u + 1, q ? u : a4.symbolWidth, u, z(a4.options.symbolRadius, u / 2)).addClass("highcharts-point").attr({ zIndex: 3 }).add(v2.legendGroup);
          };
        })(F || (F = {}));
        return F;
      });
      M(a, "Core/Series/SeriesDefaults.js", [], function() {
        return { lineWidth: 2, allowPointSelect: false, crisp: true, showCheckbox: false, animation: { duration: 1e3 }, events: {}, marker: { enabledThreshold: 2, lineColor: "#ffffff", lineWidth: 0, radius: 4, states: {
          normal: { animation: true },
          hover: { animation: { duration: 50 }, enabled: true, radiusPlus: 2, lineWidthPlus: 1 },
          select: { fillColor: "#cccccc", lineColor: "#000000", lineWidth: 2 }
        } }, point: { events: {} }, dataLabels: { animation: {}, align: "center", defer: true, formatter: function() {
          var a2 = this.series.chart.numberFormatter;
          return "number" !== typeof this.y ? "" : a2(this.y, -1);
        }, padding: 5, style: { fontSize: "11px", fontWeight: "bold", color: "contrast", textOutline: "1px contrast" }, verticalAlign: "bottom", x: 0, y: 0 }, cropThreshold: 300, opacity: 1, pointRange: 0, softThreshold: true, states: {
          normal: { animation: true },
          hover: { animation: { duration: 50 }, lineWidthPlus: 1, marker: {}, halo: { size: 10, opacity: 0.25 } },
          select: { animation: { duration: 0 } },
          inactive: { animation: { duration: 50 }, opacity: 0.2 }
        }, stickyTracking: true, turboThreshold: 1e3, findNearestPointBy: "x" };
      });
      M(a, "Core/Series/Series.js", [
        a["Core/Animation/AnimationUtilities.js"],
        a["Core/DefaultOptions.js"],
        a["Core/Foundation.js"],
        a["Core/Globals.js"],
        a["Core/Legend/LegendSymbol.js"],
        a["Core/Series/Point.js"],
        a["Core/Series/SeriesDefaults.js"],
        a["Core/Series/SeriesRegistry.js"],
        a["Core/Renderer/SVG/SVGElement.js"],
        a["Core/Utilities.js"]
      ], function(a2, u, z, F, y, G, H, A, q, n) {
        var k = a2.animObject, e = a2.setAnimation, c = u.defaultOptions, h = z.registerEventOptions, f = F.hasTouch, w = F.svg, p = F.win, B = A.seriesTypes, t = n.addEvent, v = n.arrayMax, C = n.arrayMin, r = n.clamp, l = n.cleanRecursively, b = n.correctFloat, g = n.defined, d = n.erase, m = n.error, D = n.extend, x = n.find, I = n.fireEvent, P = n.getNestedProperty, S = n.isArray, O = n.isNumber, U = n.isString, Y = n.merge, L = n.objectEach, K = n.pick, M2 = n.removeEvent, da = n.splat, Q = n.syncTimeout;
        a2 = function() {
          function a3() {
            this.zones = this.yAxis = this.xAxis = this.userOptions = this.tooltipOptions = this.processedYData = this.processedXData = this.points = this.options = this.linkedSeries = this.index = this.eventsToUnbind = this.eventOptions = this.data = this.chart = this._i = void 0;
          }
          a3.prototype.init = function(a4, b2) {
            I(this, "init", { options: b2 });
            var c2 = this, d2 = a4.series;
            this.eventsToUnbind = [];
            c2.chart = a4;
            c2.options = c2.setOptions(b2);
            b2 = c2.options;
            c2.linkedSeries = [];
            c2.bindAxes();
            D(c2, { name: b2.name, state: "", visible: false !== b2.visible, selected: true === b2.selected });
            h(this, b2);
            var e2 = b2.events;
            if (e2 && e2.click || b2.point && b2.point.events && b2.point.events.click || b2.allowPointSelect)
              a4.runTrackerClick = true;
            c2.getColor();
            c2.getSymbol();
            c2.parallelArrays.forEach(function(a5) {
              c2[a5 + "Data"] || (c2[a5 + "Data"] = []);
            });
            c2.isCartesian && (a4.hasCartesianSeries = true);
            var g2;
            d2.length && (g2 = d2[d2.length - 1]);
            c2._i = K(g2 && g2._i, -1) + 1;
            c2.opacity = c2.options.opacity;
            a4.orderSeries(this.insert(d2));
            b2.dataSorting && b2.dataSorting.enabled ? c2.setDataSortingOptions() : c2.points || c2.data || c2.setData(b2.data, false);
            I(this, "afterInit");
          };
          a3.prototype.is = function(a4) {
            return B[a4] && this instanceof B[a4];
          };
          a3.prototype.insert = function(a4) {
            var b2 = this.options.index, c2;
            if (O(b2)) {
              for (c2 = a4.length; c2--; )
                if (b2 >= K(a4[c2].options.index, a4[c2]._i)) {
                  a4.splice(c2 + 1, 0, this);
                  break;
                }
              -1 === c2 && a4.unshift(this);
              c2 += 1;
            } else
              a4.push(this);
            return K(c2, a4.length - 1);
          };
          a3.prototype.bindAxes = function() {
            var a4 = this, b2 = a4.options, c2 = a4.chart, d2;
            I(this, "bindAxes", null, function() {
              (a4.axisTypes || []).forEach(function(e2) {
                var g2 = 0;
                c2[e2].forEach(function(c3) {
                  d2 = c3.options;
                  if (b2[e2] === g2 && !d2.isInternal || "undefined" !== typeof b2[e2] && b2[e2] === d2.id || "undefined" === typeof b2[e2] && 0 === d2.index)
                    a4.insert(c3.series), a4[e2] = c3, c3.isDirty = true;
                  d2.isInternal || g2++;
                });
                a4[e2] || a4.optionalAxis === e2 || m(18, true, c2);
              });
            });
            I(this, "afterBindAxes");
          };
          a3.prototype.updateParallelArrays = function(a4, b2) {
            var c2 = a4.series, d2 = arguments, e2 = O(b2) ? function(d3) {
              var e3 = "y" === d3 && c2.toYData ? c2.toYData(a4) : a4[d3];
              c2[d3 + "Data"][b2] = e3;
            } : function(a5) {
              Array.prototype[b2].apply(c2[a5 + "Data"], Array.prototype.slice.call(d2, 2));
            };
            c2.parallelArrays.forEach(e2);
          };
          a3.prototype.hasData = function() {
            return this.visible && "undefined" !== typeof this.dataMax && "undefined" !== typeof this.dataMin || this.visible && this.yData && 0 < this.yData.length;
          };
          a3.prototype.autoIncrement = function(a4) {
            var b2 = this.options, c2 = b2.pointIntervalUnit, d2 = b2.relativeXValue, e2 = this.chart.time, g2 = this.xIncrement, f2;
            g2 = K(g2, b2.pointStart, 0);
            this.pointInterval = f2 = K(this.pointInterval, b2.pointInterval, 1);
            d2 && O(a4) && (f2 *= a4);
            c2 && (b2 = new e2.Date(g2), "day" === c2 ? e2.set("Date", b2, e2.get("Date", b2) + f2) : "month" === c2 ? e2.set("Month", b2, e2.get("Month", b2) + f2) : "year" === c2 && e2.set("FullYear", b2, e2.get("FullYear", b2) + f2), f2 = b2.getTime() - g2);
            if (d2 && O(a4))
              return g2 + f2;
            this.xIncrement = g2 + f2;
            return g2;
          };
          a3.prototype.setDataSortingOptions = function() {
            var a4 = this.options;
            D(this, { requireSorting: false, sorted: false, enabledDataSorting: true, allowDG: false });
            g(a4.pointRange) || (a4.pointRange = 1);
          };
          a3.prototype.setOptions = function(a4) {
            var b2 = this.chart, d2 = b2.options, e2 = d2.plotOptions, f2 = b2.userOptions || {};
            a4 = Y(a4);
            b2 = b2.styledMode;
            var h2 = { plotOptions: e2, userOptions: a4 };
            I(this, "setOptions", h2);
            var l2 = h2.plotOptions[this.type], k2 = f2.plotOptions || {};
            this.userOptions = h2.userOptions;
            f2 = Y(l2, e2.series, f2.plotOptions && f2.plotOptions[this.type], a4);
            this.tooltipOptions = Y(c.tooltip, c.plotOptions.series && c.plotOptions.series.tooltip, c.plotOptions[this.type].tooltip, d2.tooltip.userOptions, e2.series && e2.series.tooltip, e2[this.type].tooltip, a4.tooltip);
            this.stickyTracking = K(a4.stickyTracking, k2[this.type] && k2[this.type].stickyTracking, k2.series && k2.series.stickyTracking, this.tooltipOptions.shared && !this.noSharedTooltip ? true : f2.stickyTracking);
            null === l2.marker && delete f2.marker;
            this.zoneAxis = f2.zoneAxis;
            e2 = this.zones = (f2.zones || []).slice();
            !f2.negativeColor && !f2.negativeFillColor || f2.zones || (d2 = { value: f2[this.zoneAxis + "Threshold"] || f2.threshold || 0, className: "highcharts-negative" }, b2 || (d2.color = f2.negativeColor, d2.fillColor = f2.negativeFillColor), e2.push(d2));
            e2.length && g(e2[e2.length - 1].value) && e2.push(b2 ? {} : { color: this.color, fillColor: this.fillColor });
            I(this, "afterSetOptions", { options: f2 });
            return f2;
          };
          a3.prototype.getName = function() {
            return K(this.options.name, "Series " + (this.index + 1));
          };
          a3.prototype.getCyclic = function(a4, b2, c2) {
            var d2 = this.chart, e2 = this.userOptions, f2 = a4 + "Index", h2 = a4 + "Counter", l2 = c2 ? c2.length : K(d2.options.chart[a4 + "Count"], d2[a4 + "Count"]);
            if (!b2) {
              var k2 = K(e2[f2], e2["_" + f2]);
              g(k2) || (d2.series.length || (d2[h2] = 0), e2["_" + f2] = k2 = d2[h2] % l2, d2[h2] += 1);
              c2 && (b2 = c2[k2]);
            }
            "undefined" !== typeof k2 && (this[f2] = k2);
            this[a4] = b2;
          };
          a3.prototype.getColor = function() {
            this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.color = "#cccccc" : this.getCyclic("color", this.options.color || c.plotOptions[this.type].color, this.chart.options.colors);
          };
          a3.prototype.getPointsCollection = function() {
            return (this.hasGroupedData ? this.points : this.data) || [];
          };
          a3.prototype.getSymbol = function() {
            this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols);
          };
          a3.prototype.findPointIndex = function(a4, b2) {
            var c2 = a4.id, d2 = a4.x, e2 = this.points, g2 = this.options.dataSorting, f2, h2;
            if (c2)
              g2 = this.chart.get(c2), g2 instanceof G && (f2 = g2);
            else if (this.linkedParent || this.enabledDataSorting || this.options.relativeXValue) {
              if (f2 = function(b3) {
                return !b3.touched && b3.index === a4.index;
              }, g2 && g2.matchByName ? f2 = function(b3) {
                return !b3.touched && b3.name === a4.name;
              } : this.options.relativeXValue && (f2 = function(b3) {
                return !b3.touched && b3.options.x === a4.x;
              }), f2 = x(e2, f2), !f2)
                return;
            }
            if (f2) {
              var l2 = f2 && f2.index;
              "undefined" !== typeof l2 && (h2 = true);
            }
            "undefined" === typeof l2 && O(d2) && (l2 = this.xData.indexOf(d2, b2));
            -1 !== l2 && "undefined" !== typeof l2 && this.cropped && (l2 = l2 >= this.cropStart ? l2 - this.cropStart : l2);
            !h2 && O(l2) && e2[l2] && e2[l2].touched && (l2 = void 0);
            return l2;
          };
          a3.prototype.updateData = function(a4, b2) {
            var c2 = this.options, d2 = c2.dataSorting, e2 = this.points, f2 = [], h2 = this.requireSorting, l2 = a4.length === e2.length, k2, m2, p2, n2 = true;
            this.xIncrement = null;
            a4.forEach(function(a5, b3) {
              var m3 = g(a5) && this.pointClass.prototype.optionsToObject.call({ series: this }, a5) || {}, n3 = m3.x;
              if (m3.id || O(n3)) {
                if (m3 = this.findPointIndex(m3, p2), -1 === m3 || "undefined" === typeof m3 ? f2.push(a5) : e2[m3] && a5 !== c2.data[m3] ? (e2[m3].update(a5, false, null, false), e2[m3].touched = true, h2 && (p2 = m3 + 1)) : e2[m3] && (e2[m3].touched = true), !l2 || b3 !== m3 || d2 && d2.enabled || this.hasDerivedData)
                  k2 = true;
              } else
                f2.push(a5);
            }, this);
            if (k2)
              for (a4 = e2.length; a4--; )
                (m2 = e2[a4]) && !m2.touched && m2.remove && m2.remove(false, b2);
            else
              !l2 || d2 && d2.enabled ? n2 = false : (a4.forEach(function(a5, b3) {
                a5 !== e2[b3].y && e2[b3].update && e2[b3].update(
                  a5,
                  false,
                  null,
                  false
                );
              }), f2.length = 0);
            e2.forEach(function(a5) {
              a5 && (a5.touched = false);
            });
            if (!n2)
              return false;
            f2.forEach(function(a5) {
              this.addPoint(a5, false, null, null, false);
            }, this);
            null === this.xIncrement && this.xData && this.xData.length && (this.xIncrement = v(this.xData), this.autoIncrement());
            return true;
          };
          a3.prototype.setData = function(a4, b2, c2, d2) {
            var e2 = this, g2 = e2.points, f2 = g2 && g2.length || 0, h2 = e2.options, l2 = e2.chart, k2 = h2.dataSorting, p2 = e2.xAxis, n2 = h2.turboThreshold, r2 = this.xData, E = this.yData, t2 = e2.pointArrayMap;
            t2 = t2 && t2.length;
            var q2 = h2.keys, w2, B2 = 0, C2 = 1, x2 = null;
            a4 = a4 || [];
            var v2 = a4.length;
            b2 = K(b2, true);
            k2 && k2.enabled && (a4 = this.sortData(a4));
            false !== d2 && v2 && f2 && !e2.cropped && !e2.hasGroupedData && e2.visible && !e2.isSeriesBoosting && (w2 = this.updateData(a4, c2));
            if (!w2) {
              e2.xIncrement = null;
              e2.colorCounter = 0;
              this.parallelArrays.forEach(function(a5) {
                e2[a5 + "Data"].length = 0;
              });
              if (n2 && v2 > n2)
                if (x2 = e2.getFirstValidPoint(a4), O(x2))
                  for (c2 = 0; c2 < v2; c2++)
                    r2[c2] = this.autoIncrement(), E[c2] = a4[c2];
                else if (S(x2))
                  if (t2)
                    if (x2.length === t2)
                      for (c2 = 0; c2 < v2; c2++)
                        r2[c2] = this.autoIncrement(), E[c2] = a4[c2];
                    else
                      for (c2 = 0; c2 < v2; c2++)
                        d2 = a4[c2], r2[c2] = d2[0], E[c2] = d2.slice(
                          1,
                          t2 + 1
                        );
                  else if (q2 && (B2 = q2.indexOf("x"), C2 = q2.indexOf("y"), B2 = 0 <= B2 ? B2 : 0, C2 = 0 <= C2 ? C2 : 1), 1 === x2.length && (C2 = 0), B2 === C2)
                    for (c2 = 0; c2 < v2; c2++)
                      r2[c2] = this.autoIncrement(), E[c2] = a4[c2][C2];
                  else
                    for (c2 = 0; c2 < v2; c2++)
                      d2 = a4[c2], r2[c2] = d2[B2], E[c2] = d2[C2];
                else
                  m(12, false, l2);
              else
                for (c2 = 0; c2 < v2; c2++)
                  "undefined" !== typeof a4[c2] && (d2 = { series: e2 }, e2.pointClass.prototype.applyOptions.apply(d2, [a4[c2]]), e2.updateParallelArrays(d2, c2));
              E && U(E[0]) && m(14, true, l2);
              e2.data = [];
              e2.options.data = e2.userOptions.data = a4;
              for (c2 = f2; c2--; )
                g2[c2] && g2[c2].destroy && g2[c2].destroy();
              p2 && (p2.minRange = p2.userMinRange);
              e2.isDirty = l2.isDirtyBox = true;
              e2.isDirtyData = !!g2;
              c2 = false;
            }
            "point" === h2.legendType && (this.processData(), this.generatePoints());
            b2 && l2.redraw(c2);
          };
          a3.prototype.sortData = function(a4) {
            var b2 = this, c2 = b2.options.dataSorting.sortKey || "y", d2 = function(a5, b3) {
              return g(b3) && a5.pointClass.prototype.optionsToObject.call({ series: a5 }, b3) || {};
            };
            a4.forEach(function(c3, e2) {
              a4[e2] = d2(b2, c3);
              a4[e2].index = e2;
            }, this);
            a4.concat().sort(function(a5, b3) {
              a5 = P(c2, a5);
              b3 = P(c2, b3);
              return b3 < a5 ? -1 : b3 > a5 ? 1 : 0;
            }).forEach(function(a5, b3) {
              a5.x = b3;
            }, this);
            b2.linkedSeries && b2.linkedSeries.forEach(function(b3) {
              var c3 = b3.options, e2 = c3.data;
              c3.dataSorting && c3.dataSorting.enabled || !e2 || (e2.forEach(function(c4, g2) {
                e2[g2] = d2(b3, c4);
                a4[g2] && (e2[g2].x = a4[g2].x, e2[g2].index = g2);
              }), b3.setData(e2, false));
            });
            return a4;
          };
          a3.prototype.getProcessedData = function(a4) {
            var b2 = this.xAxis, c2 = this.options, d2 = c2.cropThreshold, e2 = a4 || this.getExtremesFromAll || c2.getExtremesFromAll, g2 = this.isCartesian;
            a4 = b2 && b2.val2lin;
            c2 = !(!b2 || !b2.logarithmic);
            var f2 = 0, h2 = this.xData, l2 = this.yData, k2 = this.requireSorting;
            var p2 = false;
            var n2 = h2.length;
            if (b2) {
              p2 = b2.getExtremes();
              var r2 = p2.min;
              var E = p2.max;
              p2 = b2.categories && !b2.names.length;
            }
            if (g2 && this.sorted && !e2 && (!d2 || n2 > d2 || this.forceCrop)) {
              if (h2[n2 - 1] < r2 || h2[0] > E)
                h2 = [], l2 = [];
              else if (this.yData && (h2[0] < r2 || h2[n2 - 1] > E)) {
                var t2 = this.cropData(this.xData, this.yData, r2, E);
                h2 = t2.xData;
                l2 = t2.yData;
                f2 = t2.start;
                t2 = true;
              }
            }
            for (d2 = h2.length || 1; --d2; )
              if (b2 = c2 ? a4(h2[d2]) - a4(h2[d2 - 1]) : h2[d2] - h2[d2 - 1], 0 < b2 && ("undefined" === typeof q2 || b2 < q2))
                var q2 = b2;
              else
                0 > b2 && k2 && !p2 && (m(15, false, this.chart), k2 = false);
            return { xData: h2, yData: l2, cropped: t2, cropStart: f2, closestPointRange: q2 };
          };
          a3.prototype.processData = function(a4) {
            var b2 = this.xAxis;
            if (this.isCartesian && !this.isDirty && !b2.isDirty && !this.yAxis.isDirty && !a4)
              return false;
            a4 = this.getProcessedData();
            this.cropped = a4.cropped;
            this.cropStart = a4.cropStart;
            this.processedXData = a4.xData;
            this.processedYData = a4.yData;
            this.closestPointRange = this.basePointRange = a4.closestPointRange;
            I(this, "afterProcessData");
          };
          a3.prototype.cropData = function(a4, b2, c2, d2, e2) {
            var g2 = a4.length, f2, h2 = 0, l2 = g2;
            e2 = K(e2, this.cropShoulder);
            for (f2 = 0; f2 < g2; f2++)
              if (a4[f2] >= c2) {
                h2 = Math.max(0, f2 - e2);
                break;
              }
            for (c2 = f2; c2 < g2; c2++)
              if (a4[c2] > d2) {
                l2 = c2 + e2;
                break;
              }
            return { xData: a4.slice(h2, l2), yData: b2.slice(
              h2,
              l2
            ), start: h2, end: l2 };
          };
          a3.prototype.generatePoints = function() {
            var a4 = this.options, b2 = a4.data, c2 = this.processedXData, d2 = this.processedYData, e2 = this.pointClass, g2 = c2.length, f2 = this.cropStart || 0, h2 = this.hasGroupedData, l2 = a4.keys, k2 = [];
            a4 = a4.dataGrouping && a4.dataGrouping.groupAll ? f2 : 0;
            var m2, p2, n2 = this.data;
            if (!n2 && !h2) {
              var r2 = [];
              r2.length = b2.length;
              n2 = this.data = r2;
            }
            l2 && h2 && (this.options.keys = false);
            for (p2 = 0; p2 < g2; p2++) {
              r2 = f2 + p2;
              if (h2) {
                var t2 = new e2().init(this, [c2[p2]].concat(da(d2[p2])));
                t2.dataGroup = this.groupMap[a4 + p2];
                t2.dataGroup.options && (t2.options = t2.dataGroup.options, D(t2, t2.dataGroup.options), delete t2.dataLabels);
              } else
                (t2 = n2[r2]) || "undefined" === typeof b2[r2] || (n2[r2] = t2 = new e2().init(this, b2[r2], c2[p2]));
              t2 && (t2.index = h2 ? a4 + p2 : r2, k2[p2] = t2);
            }
            this.options.keys = l2;
            if (n2 && (g2 !== (m2 = n2.length) || h2))
              for (p2 = 0; p2 < m2; p2++)
                p2 !== f2 || h2 || (p2 += g2), n2[p2] && (n2[p2].destroyElements(), n2[p2].plotX = void 0);
            this.data = n2;
            this.points = k2;
            I(this, "afterGeneratePoints");
          };
          a3.prototype.getXExtremes = function(a4) {
            return { min: C(a4), max: v(a4) };
          };
          a3.prototype.getExtremes = function(a4, b2) {
            var c2 = this.xAxis, d2 = this.yAxis, e2 = this.processedXData || this.xData, g2 = [], f2 = this.requireSorting ? this.cropShoulder : 0;
            d2 = d2 ? d2.positiveValuesOnly : false;
            var h2, l2 = 0, k2 = 0, m2 = 0;
            a4 = a4 || this.stackedYData || this.processedYData || [];
            var p2 = a4.length;
            if (c2) {
              var n2 = c2.getExtremes();
              l2 = n2.min;
              k2 = n2.max;
            }
            for (h2 = 0; h2 < p2; h2++) {
              var r2 = e2[h2];
              n2 = a4[h2];
              var t2 = (O(n2) || S(n2)) && (n2.length || 0 < n2 || !d2);
              r2 = b2 || this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || !c2 || (e2[h2 + f2] || r2) >= l2 && (e2[h2 - f2] || r2) <= k2;
              if (t2 && r2)
                if (t2 = n2.length)
                  for (; t2--; )
                    O(n2[t2]) && (g2[m2++] = n2[t2]);
                else
                  g2[m2++] = n2;
            }
            a4 = { activeYData: g2, dataMin: C(g2), dataMax: v(g2) };
            I(this, "afterGetExtremes", { dataExtremes: a4 });
            return a4;
          };
          a3.prototype.applyExtremes = function() {
            var a4 = this.getExtremes();
            this.dataMin = a4.dataMin;
            this.dataMax = a4.dataMax;
            return a4;
          };
          a3.prototype.getFirstValidPoint = function(a4) {
            for (var b2 = a4.length, c2 = 0, d2 = null; null === d2 && c2 < b2; )
              d2 = a4[c2], c2++;
            return d2;
          };
          a3.prototype.translate = function() {
            this.processedXData || this.processData();
            this.generatePoints();
            var a4 = this.options, c2 = a4.stacking, d2 = this.xAxis, e2 = d2.categories, f2 = this.enabledDataSorting, h2 = this.yAxis, l2 = this.points, k2 = l2.length, m2 = this.pointPlacementToXValue(), p2 = !!m2, n2 = a4.threshold, t2 = a4.startFromThreshold ? n2 : 0, q2 = this.zoneAxis || "y", w2, B2, C2 = Number.MAX_VALUE;
            for (w2 = 0; w2 < k2; w2++) {
              var x2 = l2[w2], v2 = x2.x, u2 = void 0, D2 = void 0, J = x2.y, A2 = x2.low, y2 = c2 && h2.stacking && h2.stacking.stacks[(this.negStacks && J < (t2 ? 0 : n2) ? "-" : "") + this.stackKey];
              if (h2.positiveValuesOnly && !h2.validatePositiveValue(J) || d2.positiveValuesOnly && !d2.validatePositiveValue(v2))
                x2.isNull = true;
              x2.plotX = B2 = b(r(d2.translate(v2, 0, 0, 0, 1, m2, "flags" === this.type), -1e5, 1e5));
              if (c2 && this.visible && y2 && y2[v2]) {
                var z2 = this.getStackIndicator(
                  z2,
                  v2,
                  this.index
                );
                x2.isNull || (u2 = y2[v2], D2 = u2.points[z2.key]);
              }
              S(D2) && (A2 = D2[0], J = D2[1], A2 === t2 && z2.key === y2[v2].base && (A2 = K(O(n2) && n2, h2.min)), h2.positiveValuesOnly && 0 >= A2 && (A2 = null), x2.total = x2.stackTotal = u2.total, x2.percentage = u2.total && x2.y / u2.total * 100, x2.stackY = J, this.irregularWidths || u2.setOffset(this.pointXOffset || 0, this.barW || 0));
              x2.yBottom = g(A2) ? r(h2.translate(A2, 0, 1, 0, 1), -1e5, 1e5) : null;
              this.dataModify && (J = this.dataModify.modifyValue(J, w2));
              x2.plotY = void 0;
              O(J) && (u2 = h2.translate(J, false, true, false, true), "undefined" !== typeof u2 && (x2.plotY = r(
                u2,
                -1e5,
                1e5
              )));
              x2.isInside = this.isPointInside(x2);
              x2.clientX = p2 ? b(d2.translate(v2, 0, 0, 0, 1, m2)) : B2;
              x2.negative = x2[q2] < (a4[q2 + "Threshold"] || n2 || 0);
              x2.category = e2 && "undefined" !== typeof e2[x2.x] ? e2[x2.x] : x2.x;
              if (!x2.isNull && false !== x2.visible) {
                "undefined" !== typeof F2 && (C2 = Math.min(C2, Math.abs(B2 - F2)));
                var F2 = B2;
              }
              x2.zone = this.zones.length ? x2.getZone() : void 0;
              !x2.graphic && this.group && f2 && (x2.isNew = true);
            }
            this.closestPointRangePx = C2;
            I(this, "afterTranslate");
          };
          a3.prototype.getValidPoints = function(a4, b2, c2) {
            var d2 = this.chart;
            return (a4 || this.points || []).filter(function(a5) {
              return b2 && !d2.isInsidePlot(a5.plotX, a5.plotY, { inverted: d2.inverted }) ? false : false !== a5.visible && (c2 || !a5.isNull);
            });
          };
          a3.prototype.getClipBox = function() {
            var a4 = this.chart, b2 = this.xAxis, c2 = this.yAxis, d2 = Y(a4.clipBox);
            b2 && b2.len !== a4.plotSizeX && (d2.width = b2.len);
            c2 && c2.len !== a4.plotSizeY && (d2.height = c2.len);
            return d2;
          };
          a3.prototype.getSharedClipKey = function() {
            return this.sharedClipKey = (this.options.xAxis || 0) + "," + (this.options.yAxis || 0);
          };
          a3.prototype.setClip = function() {
            var a4 = this.chart, b2 = this.group, c2 = this.markerGroup, d2 = a4.sharedClips;
            a4 = a4.renderer;
            var e2 = this.getClipBox(), g2 = this.getSharedClipKey(), f2 = d2[g2];
            f2 ? f2.animate(e2) : d2[g2] = f2 = a4.clipRect(e2);
            b2 && b2.clip(false === this.options.clip ? void 0 : f2);
            c2 && c2.clip();
          };
          a3.prototype.animate = function(a4) {
            var b2 = this.chart, c2 = this.group, d2 = this.markerGroup, e2 = b2.inverted, g2 = k(this.options.animation), f2 = [this.getSharedClipKey(), g2.duration, g2.easing, g2.defer].join(), h2 = b2.sharedClips[f2], l2 = b2.sharedClips[f2 + "m"];
            if (a4 && c2)
              g2 = this.getClipBox(), h2 ? h2.attr("height", g2.height) : (g2.width = 0, e2 && (g2.x = b2.plotHeight), h2 = b2.renderer.clipRect(g2), b2.sharedClips[f2] = h2, l2 = b2.renderer.clipRect({ x: e2 ? (b2.plotSizeX || 0) + 99 : -99, y: e2 ? -b2.plotLeft : -b2.plotTop, width: 99, height: e2 ? b2.chartWidth : b2.chartHeight }), b2.sharedClips[f2 + "m"] = l2), c2.clip(h2), d2 && d2.clip(l2);
            else if (h2 && !h2.hasClass("highcharts-animating")) {
              b2 = this.getClipBox();
              var m2 = g2.step;
              d2 && d2.element.childNodes.length && (g2.step = function(a5, b3) {
                m2 && m2.apply(b3, arguments);
                l2 && l2.element && l2.attr(b3.prop, "width" === b3.prop ? a5 + 99 : a5);
              });
              h2.addClass("highcharts-animating").animate(b2, g2);
            }
          };
          a3.prototype.afterAnimate = function() {
            var a4 = this;
            this.setClip();
            L(
              this.chart.sharedClips,
              function(b2, c2, d2) {
                b2 && !a4.chart.container.querySelector('[clip-path="url(#' + b2.id + ')"]') && (b2.destroy(), delete d2[c2]);
              }
            );
            this.finishedAnimating = true;
            I(this, "afterAnimate");
          };
          a3.prototype.drawPoints = function() {
            var a4 = this.points, b2 = this.chart, c2 = this.options.marker, d2 = this[this.specialGroup] || this.markerGroup, e2 = this.xAxis, g2 = K(c2.enabled, !e2 || e2.isRadial ? true : null, this.closestPointRangePx >= c2.enabledThreshold * c2.radius), f2, h2;
            if (false !== c2.enabled || this._hasPointMarkers)
              for (f2 = 0; f2 < a4.length; f2++) {
                var l2 = a4[f2];
                var k2 = (h2 = l2.graphic) ? "animate" : "attr";
                var m2 = l2.marker || {};
                var p2 = !!l2.marker;
                if ((g2 && "undefined" === typeof m2.enabled || m2.enabled) && !l2.isNull && false !== l2.visible) {
                  var n2 = K(m2.symbol, this.symbol, "rect");
                  var r2 = this.markerAttribs(l2, l2.selected && "select");
                  this.enabledDataSorting && (l2.startXPos = e2.reversed ? -(r2.width || 0) : e2.width);
                  var t2 = false !== l2.isInside;
                  h2 ? h2[t2 ? "show" : "hide"](t2).animate(r2) : t2 && (0 < (r2.width || 0) || l2.hasImage) && (l2.graphic = h2 = b2.renderer.symbol(n2, r2.x, r2.y, r2.width, r2.height, p2 ? m2 : c2).add(d2), this.enabledDataSorting && b2.hasRendered && (h2.attr({ x: l2.startXPos }), k2 = "animate"));
                  h2 && "animate" === k2 && h2[t2 ? "show" : "hide"](t2).animate(r2);
                  if (h2 && !b2.styledMode)
                    h2[k2](this.pointAttribs(l2, l2.selected && "select"));
                  h2 && h2.addClass(l2.getClassName(), true);
                } else
                  h2 && (l2.graphic = h2.destroy());
              }
          };
          a3.prototype.markerAttribs = function(a4, b2) {
            var c2 = this.options, d2 = c2.marker, e2 = a4.marker || {}, g2 = e2.symbol || d2.symbol, f2 = K(e2.radius, d2.radius);
            b2 && (d2 = d2.states[b2], b2 = e2.states && e2.states[b2], f2 = K(b2 && b2.radius, d2 && d2.radius, f2 + (d2 && d2.radiusPlus || 0)));
            a4.hasImage = g2 && 0 === g2.indexOf("url");
            a4.hasImage && (f2 = 0);
            a4 = { x: c2.crisp ? Math.floor(a4.plotX - f2) : a4.plotX - f2, y: a4.plotY - f2 };
            f2 && (a4.width = a4.height = 2 * f2);
            return a4;
          };
          a3.prototype.pointAttribs = function(a4, b2) {
            var c2 = this.options.marker, d2 = a4 && a4.options, e2 = d2 && d2.marker || {}, g2 = d2 && d2.color, f2 = a4 && a4.color, h2 = a4 && a4.zone && a4.zone.color, l2 = this.color;
            a4 = K(e2.lineWidth, c2.lineWidth);
            d2 = 1;
            l2 = g2 || h2 || f2 || l2;
            g2 = e2.fillColor || c2.fillColor || l2;
            f2 = e2.lineColor || c2.lineColor || l2;
            b2 = b2 || "normal";
            c2 = c2.states[b2] || {};
            b2 = e2.states && e2.states[b2] || {};
            a4 = K(b2.lineWidth, c2.lineWidth, a4 + K(b2.lineWidthPlus, c2.lineWidthPlus, 0));
            g2 = b2.fillColor || c2.fillColor || g2;
            f2 = b2.lineColor || c2.lineColor || f2;
            d2 = K(b2.opacity, c2.opacity, d2);
            return { stroke: f2, "stroke-width": a4, fill: g2, opacity: d2 };
          };
          a3.prototype.destroy = function(a4) {
            var b2 = this, c2 = b2.chart, e2 = /AppleWebKit\/533/.test(p.navigator.userAgent), g2 = b2.data || [], f2, h2, l2, k2;
            I(b2, "destroy");
            this.removeEvents(a4);
            (b2.axisTypes || []).forEach(function(a5) {
              (k2 = b2[a5]) && k2.series && (d(k2.series, b2), k2.isDirty = k2.forceRedraw = true);
            });
            b2.legendItem && b2.chart.legend.destroyItem(b2);
            for (h2 = g2.length; h2--; )
              (l2 = g2[h2]) && l2.destroy && l2.destroy();
            b2.clips && b2.clips.forEach(function(a5) {
              return a5.destroy();
            });
            n.clearTimeout(b2.animationTimeout);
            L(b2, function(a5, b3) {
              a5 instanceof q && !a5.survive && (f2 = e2 && "group" === b3 ? "hide" : "destroy", a5[f2]());
            });
            c2.hoverSeries === b2 && (c2.hoverSeries = void 0);
            d(c2.series, b2);
            c2.orderSeries();
            L(b2, function(c3, d2) {
              a4 && "hcEvents" === d2 || delete b2[d2];
            });
          };
          a3.prototype.applyZones = function() {
            var a4 = this, b2 = this.chart, c2 = b2.renderer, d2 = this.zones, e2 = this.clips || [], g2 = this.graph, f2 = this.area, h2 = Math.max(b2.chartWidth, b2.chartHeight), l2 = this[(this.zoneAxis || "y") + "Axis"], k2 = b2.inverted, m2, p2, n2, t2, q2, x2, w2, B2, C2 = false;
            if (d2.length && (g2 || f2) && l2 && "undefined" !== typeof l2.min) {
              var v2 = l2.reversed;
              var u2 = l2.horiz;
              g2 && !this.showLine && g2.hide();
              f2 && f2.hide();
              var D2 = l2.getExtremes();
              d2.forEach(function(d3, E) {
                m2 = v2 ? u2 ? b2.plotWidth : 0 : u2 ? 0 : l2.toPixels(D2.min) || 0;
                m2 = r(K(p2, m2), 0, h2);
                p2 = r(Math.round(l2.toPixels(K(d3.value, D2.max), true) || 0), 0, h2);
                C2 && (m2 = p2 = l2.toPixels(D2.max));
                t2 = Math.abs(m2 - p2);
                q2 = Math.min(m2, p2);
                x2 = Math.max(m2, p2);
                l2.isXAxis ? (n2 = { x: k2 ? x2 : q2, y: 0, width: t2, height: h2 }, u2 || (n2.x = b2.plotHeight - n2.x)) : (n2 = { x: 0, y: k2 ? x2 : q2, width: h2, height: t2 }, u2 && (n2.y = b2.plotWidth - n2.y));
                k2 && c2.isVML && (n2 = l2.isXAxis ? {
                  x: 0,
                  y: v2 ? q2 : x2,
                  height: n2.width,
                  width: b2.chartWidth
                } : { x: n2.y - b2.plotLeft - b2.spacingBox.x, y: 0, width: n2.height, height: b2.chartHeight });
                e2[E] ? e2[E].animate(n2) : e2[E] = c2.clipRect(n2);
                w2 = a4["zone-area-" + E];
                B2 = a4["zone-graph-" + E];
                g2 && B2 && B2.clip(e2[E]);
                f2 && w2 && w2.clip(e2[E]);
                C2 = d3.value > D2.max;
                a4.resetZones && 0 === p2 && (p2 = void 0);
              });
              this.clips = e2;
            } else
              a4.visible && (g2 && g2.show(true), f2 && f2.show(true));
          };
          a3.prototype.invertGroups = function(a4) {
            function b2() {
              ["group", "markerGroup"].forEach(function(b3) {
                c2[b3] && (d2.renderer.isVML && c2[b3].attr({ width: c2.yAxis.len, height: c2.xAxis.len }), c2[b3].width = c2.yAxis.len, c2[b3].height = c2.xAxis.len, c2[b3].invert(c2.isRadialSeries ? false : a4));
              });
            }
            var c2 = this, d2 = c2.chart;
            c2.xAxis && (c2.eventsToUnbind.push(t(d2, "resize", b2)), b2(), c2.invertGroups = b2);
          };
          a3.prototype.plotGroup = function(a4, b2, c2, d2, e2) {
            var f2 = this[a4], h2 = !f2;
            c2 = { visibility: c2, zIndex: d2 || 0.1 };
            "undefined" === typeof this.opacity || this.chart.styledMode || "inactive" === this.state || (c2.opacity = this.opacity);
            h2 && (this[a4] = f2 = this.chart.renderer.g().add(e2));
            f2.addClass("highcharts-" + b2 + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (g(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (f2.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), true);
            f2.attr(c2)[h2 ? "attr" : "animate"](this.getPlotBox());
            return f2;
          };
          a3.prototype.getPlotBox = function() {
            var a4 = this.chart, b2 = this.xAxis, c2 = this.yAxis;
            a4.inverted && (b2 = c2, c2 = this.xAxis);
            return { translateX: b2 ? b2.left : a4.plotLeft, translateY: c2 ? c2.top : a4.plotTop, scaleX: 1, scaleY: 1 };
          };
          a3.prototype.removeEvents = function(a4) {
            a4 || M2(this);
            this.eventsToUnbind.length && (this.eventsToUnbind.forEach(function(a5) {
              a5();
            }), this.eventsToUnbind.length = 0);
          };
          a3.prototype.render = function() {
            var a4 = this, b2 = a4.chart, c2 = a4.options, d2 = k(c2.animation), e2 = a4.visible ? "inherit" : "hidden", g2 = c2.zIndex, f2 = a4.hasRendered, h2 = b2.seriesGroup, l2 = b2.inverted;
            b2 = !a4.finishedAnimating && b2.renderer.isSVG ? d2.duration : 0;
            I(this, "render");
            var m2 = a4.plotGroup("group", "series", e2, g2, h2);
            a4.markerGroup = a4.plotGroup("markerGroup", "markers", e2, g2, h2);
            false !== c2.clip && a4.setClip();
            a4.animate && b2 && a4.animate(true);
            m2.inverted = K(a4.invertible, a4.isCartesian) ? l2 : false;
            a4.drawGraph && (a4.drawGraph(), a4.applyZones());
            a4.visible && a4.drawPoints();
            a4.drawDataLabels && a4.drawDataLabels();
            a4.redrawPoints && a4.redrawPoints();
            a4.drawTracker && false !== a4.options.enableMouseTracking && a4.drawTracker();
            a4.invertGroups(l2);
            a4.animate && b2 && a4.animate();
            f2 || (b2 && d2.defer && (b2 += d2.defer), a4.animationTimeout = Q(function() {
              a4.afterAnimate();
            }, b2 || 0));
            a4.isDirty = false;
            a4.hasRendered = true;
            I(a4, "afterRender");
          };
          a3.prototype.redraw = function() {
            var a4 = this.chart, b2 = this.isDirty || this.isDirtyData, c2 = this.group, d2 = this.xAxis, e2 = this.yAxis;
            c2 && (a4.inverted && c2.attr({
              width: a4.plotWidth,
              height: a4.plotHeight
            }), c2.animate({ translateX: K(d2 && d2.left, a4.plotLeft), translateY: K(e2 && e2.top, a4.plotTop) }));
            this.translate();
            this.render();
            b2 && delete this.kdTree;
          };
          a3.prototype.searchPoint = function(a4, b2) {
            var c2 = this.xAxis, d2 = this.yAxis, e2 = this.chart.inverted;
            return this.searchKDTree({ clientX: e2 ? c2.len - a4.chartY + c2.pos : a4.chartX - c2.pos, plotY: e2 ? d2.len - a4.chartX + d2.pos : a4.chartY - d2.pos }, b2, a4);
          };
          a3.prototype.buildKDTree = function(a4) {
            function b2(a5, d3, e2) {
              var g2 = a5 && a5.length;
              if (g2) {
                var f2 = c2.kdAxisArray[d3 % e2];
                a5.sort(function(a6, b3) {
                  return a6[f2] - b3[f2];
                });
                g2 = Math.floor(g2 / 2);
                return { point: a5[g2], left: b2(a5.slice(0, g2), d3 + 1, e2), right: b2(a5.slice(g2 + 1), d3 + 1, e2) };
              }
            }
            this.buildingKdTree = true;
            var c2 = this, d2 = -1 < c2.options.findNearestPointBy.indexOf("y") ? 2 : 1;
            delete c2.kdTree;
            Q(function() {
              c2.kdTree = b2(c2.getValidPoints(null, !c2.directTouch), d2, d2);
              c2.buildingKdTree = false;
            }, c2.options.kdNow || a4 && "touchstart" === a4.type ? 0 : 1);
          };
          a3.prototype.searchKDTree = function(a4, b2, c2) {
            function d2(a5, b3, c3, k2) {
              var m2 = b3.point, p2 = e2.kdAxisArray[c3 % k2], n2 = m2, r2 = g(a5[f2]) && g(m2[f2]) ? Math.pow(a5[f2] - m2[f2], 2) : null;
              var t2 = g(a5[h2]) && g(m2[h2]) ? Math.pow(a5[h2] - m2[h2], 2) : null;
              t2 = (r2 || 0) + (t2 || 0);
              m2.dist = g(t2) ? Math.sqrt(t2) : Number.MAX_VALUE;
              m2.distX = g(r2) ? Math.sqrt(r2) : Number.MAX_VALUE;
              p2 = a5[p2] - m2[p2];
              t2 = 0 > p2 ? "left" : "right";
              r2 = 0 > p2 ? "right" : "left";
              b3[t2] && (t2 = d2(a5, b3[t2], c3 + 1, k2), n2 = t2[l2] < n2[l2] ? t2 : m2);
              b3[r2] && Math.sqrt(p2 * p2) < n2[l2] && (a5 = d2(a5, b3[r2], c3 + 1, k2), n2 = a5[l2] < n2[l2] ? a5 : n2);
              return n2;
            }
            var e2 = this, f2 = this.kdAxisArray[0], h2 = this.kdAxisArray[1], l2 = b2 ? "distX" : "dist";
            b2 = -1 < e2.options.findNearestPointBy.indexOf("y") ? 2 : 1;
            this.kdTree || this.buildingKdTree || this.buildKDTree(c2);
            if (this.kdTree)
              return d2(
                a4,
                this.kdTree,
                b2,
                b2
              );
          };
          a3.prototype.pointPlacementToXValue = function() {
            var a4 = this.options, b2 = a4.pointRange, c2 = this.xAxis;
            a4 = a4.pointPlacement;
            "between" === a4 && (a4 = c2.reversed ? -0.5 : 0.5);
            return O(a4) ? a4 * (b2 || c2.pointRange) : 0;
          };
          a3.prototype.isPointInside = function(a4) {
            var b2 = this.chart, c2 = this.xAxis, d2 = this.yAxis;
            return "undefined" !== typeof a4.plotY && "undefined" !== typeof a4.plotX && 0 <= a4.plotY && a4.plotY <= (d2 ? d2.len : b2.plotHeight) && 0 <= a4.plotX && a4.plotX <= (c2 ? c2.len : b2.plotWidth);
          };
          a3.prototype.drawTracker = function() {
            var a4 = this, b2 = a4.options, c2 = b2.trackByArea, d2 = [].concat(c2 ? a4.areaPath : a4.graphPath), e2 = a4.chart, g2 = e2.pointer, h2 = e2.renderer, l2 = e2.options.tooltip.snap, m2 = a4.tracker, k2 = function(b3) {
              if (e2.hoverSeries !== a4)
                a4.onMouseOver();
            }, p2 = "rgba(192,192,192," + (w ? 1e-4 : 2e-3) + ")";
            m2 ? m2.attr({ d: d2 }) : a4.graph && (a4.tracker = h2.path(d2).attr({ visibility: a4.visible ? "visible" : "hidden", zIndex: 2 }).addClass(c2 ? "highcharts-tracker-area" : "highcharts-tracker-line").add(a4.group), e2.styledMode || a4.tracker.attr({ "stroke-linecap": "round", "stroke-linejoin": "round", stroke: p2, fill: c2 ? p2 : "none", "stroke-width": a4.graph.strokeWidth() + (c2 ? 0 : 2 * l2) }), [a4.tracker, a4.markerGroup, a4.dataLabelsGroup].forEach(function(a5) {
              if (a5 && (a5.addClass("highcharts-tracker").on("mouseover", k2).on("mouseout", function(a6) {
                g2.onTrackerMouseOut(a6);
              }), b2.cursor && !e2.styledMode && a5.css({ cursor: b2.cursor }), f))
                a5.on("touchstart", k2);
            }));
            I(this, "afterDrawTracker");
          };
          a3.prototype.addPoint = function(a4, b2, c2, d2, e2) {
            var g2 = this.options, f2 = this.data, h2 = this.chart, l2 = this.xAxis;
            l2 = l2 && l2.hasNames && l2.names;
            var m2 = g2.data, k2 = this.xData, p2;
            b2 = K(b2, true);
            var n2 = { series: this };
            this.pointClass.prototype.applyOptions.apply(
              n2,
              [a4]
            );
            var r2 = n2.x;
            var t2 = k2.length;
            if (this.requireSorting && r2 < k2[t2 - 1])
              for (p2 = true; t2 && k2[t2 - 1] > r2; )
                t2--;
            this.updateParallelArrays(n2, "splice", t2, 0, 0);
            this.updateParallelArrays(n2, t2);
            l2 && n2.name && (l2[r2] = n2.name);
            m2.splice(t2, 0, a4);
            p2 && (this.data.splice(t2, 0, null), this.processData());
            "point" === g2.legendType && this.generatePoints();
            c2 && (f2[0] && f2[0].remove ? f2[0].remove(false) : (f2.shift(), this.updateParallelArrays(n2, "shift"), m2.shift()));
            false !== e2 && I(this, "addPoint", { point: n2 });
            this.isDirtyData = this.isDirty = true;
            b2 && h2.redraw(d2);
          };
          a3.prototype.removePoint = function(a4, b2, c2) {
            var d2 = this, g2 = d2.data, f2 = g2[a4], h2 = d2.points, l2 = d2.chart, k2 = function() {
              h2 && h2.length === g2.length && h2.splice(a4, 1);
              g2.splice(a4, 1);
              d2.options.data.splice(a4, 1);
              d2.updateParallelArrays(f2 || { series: d2 }, "splice", a4, 1);
              f2 && f2.destroy();
              d2.isDirty = true;
              d2.isDirtyData = true;
              b2 && l2.redraw();
            };
            e(c2, l2);
            b2 = K(b2, true);
            f2 ? f2.firePointEvent("remove", null, k2) : k2();
          };
          a3.prototype.remove = function(a4, b2, c2, d2) {
            function e2() {
              g2.destroy(d2);
              f2.isDirtyLegend = f2.isDirtyBox = true;
              f2.linkSeries();
              K(a4, true) && f2.redraw(b2);
            }
            var g2 = this, f2 = g2.chart;
            false !== c2 ? I(
              g2,
              "remove",
              null,
              e2
            ) : e2();
          };
          a3.prototype.update = function(a4, b2) {
            a4 = l(a4, this.userOptions);
            I(this, "update", { options: a4 });
            var c2 = this, d2 = c2.chart, e2 = c2.userOptions, g2 = c2.initialType || c2.type, f2 = d2.options.plotOptions, h2 = B[g2].prototype, k2 = c2.finishedAnimating && { animation: false }, p2 = {}, n2, r2 = ["eventOptions", "navigatorSeries", "baseSeries"], t2 = a4.type || e2.type || d2.options.chart.type, q2 = !(this.hasDerivedData || t2 && t2 !== this.type || "undefined" !== typeof a4.pointStart || "undefined" !== typeof a4.pointInterval || "undefined" !== typeof a4.relativeXValue || c2.hasOptionChanged("dataGrouping") || c2.hasOptionChanged("pointStart") || c2.hasOptionChanged("pointInterval") || c2.hasOptionChanged("pointIntervalUnit") || c2.hasOptionChanged("keys"));
            t2 = t2 || g2;
            q2 && (r2.push("data", "isDirtyData", "points", "processedXData", "processedYData", "xIncrement", "cropped", "_hasPointMarkers", "_hasPointLabels", "clips", "nodes", "layout", "mapMap", "mapData", "minY", "maxY", "minX", "maxX"), false !== a4.visible && r2.push("area", "graph"), c2.parallelArrays.forEach(function(a5) {
              r2.push(a5 + "Data");
            }), a4.data && (a4.dataSorting && D(c2.options.dataSorting, a4.dataSorting), this.setData(a4.data, false)));
            a4 = Y(e2, k2, { index: "undefined" === typeof e2.index ? c2.index : e2.index, pointStart: K(f2 && f2.series && f2.series.pointStart, e2.pointStart, c2.xData[0]) }, !q2 && { data: c2.options.data }, a4);
            q2 && a4.data && (a4.data = c2.options.data);
            r2 = ["group", "markerGroup", "dataLabelsGroup", "transformGroup"].concat(r2);
            r2.forEach(function(a5) {
              r2[a5] = c2[a5];
              delete c2[a5];
            });
            f2 = false;
            if (B[t2]) {
              if (f2 = t2 !== c2.type, c2.remove(false, false, false, true), f2)
                if (Object.setPrototypeOf)
                  Object.setPrototypeOf(c2, B[t2].prototype);
                else {
                  k2 = Object.hasOwnProperty.call(c2, "hcEvents") && c2.hcEvents;
                  for (n2 in h2)
                    c2[n2] = void 0;
                  D(c2, B[t2].prototype);
                  k2 ? c2.hcEvents = k2 : delete c2.hcEvents;
                }
            } else
              m(17, true, d2, { missingModuleFor: t2 });
            r2.forEach(function(a5) {
              c2[a5] = r2[a5];
            });
            c2.init(d2, a4);
            if (q2 && this.points) {
              var x2 = c2.options;
              false === x2.visible ? (p2.graphic = 1, p2.dataLabel = 1) : c2._hasPointLabels || (a4 = x2.marker, h2 = x2.dataLabels, !a4 || false !== a4.enabled && (e2.marker && e2.marker.symbol) === a4.symbol || (p2.graphic = 1), h2 && false === h2.enabled && (p2.dataLabel = 1));
              this.points.forEach(function(a5) {
                a5 && a5.series && (a5.resolveColor(), Object.keys(p2).length && a5.destroyElements(p2), false === x2.showInLegend && a5.legendItem && d2.legend.destroyItem(a5));
              }, this);
            }
            c2.initialType = g2;
            d2.linkSeries();
            f2 && c2.linkedSeries.length && (c2.isDirtyData = true);
            I(this, "afterUpdate");
            K(b2, true) && d2.redraw(q2 ? void 0 : false);
          };
          a3.prototype.setName = function(a4) {
            this.name = this.options.name = this.userOptions.name = a4;
            this.chart.isDirtyLegend = true;
          };
          a3.prototype.hasOptionChanged = function(a4) {
            var b2 = this.options[a4], c2 = this.chart.options.plotOptions, d2 = this.userOptions[a4];
            return d2 ? b2 !== d2 : b2 !== K(
              c2 && c2[this.type] && c2[this.type][a4],
              c2 && c2.series && c2.series[a4],
              b2
            );
          };
          a3.prototype.onMouseOver = function() {
            var a4 = this.chart, b2 = a4.hoverSeries;
            a4.pointer.setHoverChartIndex();
            if (b2 && b2 !== this)
              b2.onMouseOut();
            this.options.events.mouseOver && I(this, "mouseOver");
            this.setState("hover");
            a4.hoverSeries = this;
          };
          a3.prototype.onMouseOut = function() {
            var a4 = this.options, b2 = this.chart, c2 = b2.tooltip, d2 = b2.hoverPoint;
            b2.hoverSeries = null;
            if (d2)
              d2.onMouseOut();
            this && a4.events.mouseOut && I(this, "mouseOut");
            !c2 || this.stickyTracking || c2.shared && !this.noSharedTooltip || c2.hide();
            b2.series.forEach(function(a5) {
              a5.setState(
                "",
                true
              );
            });
          };
          a3.prototype.setState = function(a4, b2) {
            var c2 = this, d2 = c2.options, e2 = c2.graph, g2 = d2.inactiveOtherPoints, f2 = d2.states, h2 = K(f2[a4 || "normal"] && f2[a4 || "normal"].animation, c2.chart.options.chart.animation), l2 = d2.lineWidth, k2 = 0, m2 = d2.opacity;
            a4 = a4 || "";
            if (c2.state !== a4 && ([c2.group, c2.markerGroup, c2.dataLabelsGroup].forEach(function(b3) {
              b3 && (c2.state && b3.removeClass("highcharts-series-" + c2.state), a4 && b3.addClass("highcharts-series-" + a4));
            }), c2.state = a4, !c2.chart.styledMode)) {
              if (f2[a4] && false === f2[a4].enabled)
                return;
              a4 && (l2 = f2[a4].lineWidth || l2 + (f2[a4].lineWidthPlus || 0), m2 = K(f2[a4].opacity, m2));
              if (e2 && !e2.dashstyle)
                for (d2 = { "stroke-width": l2 }, e2.animate(d2, h2); c2["zone-graph-" + k2]; )
                  c2["zone-graph-" + k2].animate(d2, h2), k2 += 1;
              g2 || [c2.group, c2.markerGroup, c2.dataLabelsGroup, c2.labelBySeries].forEach(function(a5) {
                a5 && a5.animate({ opacity: m2 }, h2);
              });
            }
            b2 && g2 && c2.points && c2.setAllPointsToState(a4 || void 0);
          };
          a3.prototype.setAllPointsToState = function(a4) {
            this.points.forEach(function(b2) {
              b2.setState && b2.setState(a4);
            });
          };
          a3.prototype.setVisible = function(a4, b2) {
            var c2 = this, d2 = c2.chart, e2 = c2.legendItem, g2 = d2.options.chart.ignoreHiddenSeries, f2 = c2.visible, h2 = (c2.visible = a4 = c2.options.visible = c2.userOptions.visible = "undefined" === typeof a4 ? !f2 : a4) ? "show" : "hide";
            ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach(function(a5) {
              if (c2[a5])
                c2[a5][h2]();
            });
            if (d2.hoverSeries === c2 || (d2.hoverPoint && d2.hoverPoint.series) === c2)
              c2.onMouseOut();
            e2 && d2.legend.colorizeItem(c2, a4);
            c2.isDirty = true;
            c2.options.stacking && d2.series.forEach(function(a5) {
              a5.options.stacking && a5.visible && (a5.isDirty = true);
            });
            c2.linkedSeries.forEach(function(b3) {
              b3.setVisible(a4, false);
            });
            g2 && (d2.isDirtyBox = true);
            I(c2, h2);
            false !== b2 && d2.redraw();
          };
          a3.prototype.show = function() {
            this.setVisible(true);
          };
          a3.prototype.hide = function() {
            this.setVisible(false);
          };
          a3.prototype.select = function(a4) {
            this.selected = a4 = this.options.selected = "undefined" === typeof a4 ? !this.selected : a4;
            this.checkbox && (this.checkbox.checked = a4);
            I(this, a4 ? "select" : "unselect");
          };
          a3.prototype.shouldShowTooltip = function(a4, b2, c2) {
            void 0 === c2 && (c2 = {});
            c2.series = this;
            c2.visiblePlotOnly = true;
            return this.chart.isInsidePlot(a4, b2, c2);
          };
          a3.defaultOptions = H;
          return a3;
        }();
        D(a2.prototype, { axisTypes: [
          "xAxis",
          "yAxis"
        ], coll: "series", colorCounter: 0, cropShoulder: 1, directTouch: false, drawLegendSymbol: y.drawLineMarker, isCartesian: true, kdAxisArray: ["clientX", "plotY"], parallelArrays: ["x", "y"], pointClass: G, requireSorting: true, sorted: true });
        A.series = a2;
        "";
        "";
        return a2;
      });
      M(a, "Extensions/ScrollablePlotArea.js", [a["Core/Animation/AnimationUtilities.js"], a["Core/Axis/Axis.js"], a["Core/Chart/Chart.js"], a["Core/Series/Series.js"], a["Core/Renderer/RendererRegistry.js"], a["Core/Utilities.js"]], function(a2, u, z, F, y, G) {
        var v = a2.stop, A = G.addEvent, q = G.createElement, n = G.merge, k = G.pick;
        A(z, "afterSetChartSize", function(a3) {
          var c = this.options.chart.scrollablePlotArea, e = c && c.minWidth;
          c = c && c.minHeight;
          if (!this.renderer.forExport) {
            if (e) {
              if (this.scrollablePixelsX = e = Math.max(0, e - this.chartWidth)) {
                this.scrollablePlotBox = this.renderer.scrollablePlotBox = n(this.plotBox);
                this.plotBox.width = this.plotWidth += e;
                this.inverted ? this.clipBox.height += e : this.clipBox.width += e;
                var f = { 1: { name: "right", value: e } };
              }
            } else
              c && (this.scrollablePixelsY = e = Math.max(
                0,
                c - this.chartHeight
              )) && (this.scrollablePlotBox = this.renderer.scrollablePlotBox = n(this.plotBox), this.plotBox.height = this.plotHeight += e, this.inverted ? this.clipBox.width += e : this.clipBox.height += e, f = { 2: { name: "bottom", value: e } });
            f && !a3.skipAxes && this.axes.forEach(function(a4) {
              f[a4.side] ? a4.getPlotLinePath = function() {
                var c2 = f[a4.side].name, e2 = this[c2];
                this[c2] = e2 - f[a4.side].value;
                var h = u.prototype.getPlotLinePath.apply(this, arguments);
                this[c2] = e2;
                return h;
              } : (a4.setAxisSize(), a4.setAxisTranslation());
            });
          }
        });
        A(z, "render", function() {
          this.scrollablePixelsX || this.scrollablePixelsY ? (this.setUpScrolling && this.setUpScrolling(), this.applyFixed()) : this.fixedDiv && this.applyFixed();
        });
        z.prototype.setUpScrolling = function() {
          var a3 = this, c = { WebkitOverflowScrolling: "touch", overflowX: "hidden", overflowY: "hidden" };
          this.scrollablePixelsX && (c.overflowX = "auto");
          this.scrollablePixelsY && (c.overflowY = "auto");
          this.scrollingParent = q("div", { className: "highcharts-scrolling-parent" }, { position: "relative" }, this.renderTo);
          this.scrollingContainer = q(
            "div",
            { className: "highcharts-scrolling" },
            c,
            this.scrollingParent
          );
          A(this.scrollingContainer, "scroll", function() {
            a3.pointer && delete a3.pointer.chartPosition;
          });
          this.innerContainer = q("div", { className: "highcharts-inner-container" }, null, this.scrollingContainer);
          this.innerContainer.appendChild(this.container);
          this.setUpScrolling = null;
        };
        z.prototype.moveFixedElements = function() {
          var a3 = this.container, c = this.fixedRenderer, h = ".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-drillup-button .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(" "), f;
          this.scrollablePixelsX && !this.inverted ? f = ".highcharts-yaxis" : this.scrollablePixelsX && this.inverted ? f = ".highcharts-xaxis" : this.scrollablePixelsY && !this.inverted ? f = ".highcharts-xaxis" : this.scrollablePixelsY && this.inverted && (f = ".highcharts-yaxis");
          f && h.push(f + ":not(.highcharts-radial-axis)", f + "-labels:not(.highcharts-radial-axis-labels)");
          h.forEach(function(e) {
            [].forEach.call(a3.querySelectorAll(e), function(a4) {
              (a4.namespaceURI === c.SVG_NS ? c.box : c.box.parentNode).appendChild(a4);
              a4.style.pointerEvents = "auto";
            });
          });
        };
        z.prototype.applyFixed = function() {
          var a3 = !this.fixedDiv, c = this.options.chart, h = c.scrollablePlotArea, f = y.getRendererType();
          a3 ? (this.fixedDiv = q("div", { className: "highcharts-fixed" }, { position: "absolute", overflow: "hidden", pointerEvents: "none", zIndex: (c.style && c.style.zIndex || 0) + 2, top: 0 }, null, true), this.scrollingContainer && this.scrollingContainer.parentNode.insertBefore(this.fixedDiv, this.scrollingContainer), this.renderTo.style.overflow = "visible", this.fixedRenderer = c = new f(
            this.fixedDiv,
            this.chartWidth,
            this.chartHeight,
            this.options.chart.style
          ), this.scrollableMask = c.path().attr({ fill: this.options.chart.backgroundColor || "#fff", "fill-opacity": k(h.opacity, 0.85), zIndex: -1 }).addClass("highcharts-scrollable-mask").add(), A(this, "afterShowResetZoom", this.moveFixedElements), A(this, "afterDrilldown", this.moveFixedElements), A(this, "afterLayOutTitles", this.moveFixedElements)) : this.fixedRenderer.setSize(this.chartWidth, this.chartHeight);
          if (this.scrollableDirty || a3)
            this.scrollableDirty = false, this.moveFixedElements();
          c = this.chartWidth + (this.scrollablePixelsX || 0);
          f = this.chartHeight + (this.scrollablePixelsY || 0);
          v(this.container);
          this.container.style.width = c + "px";
          this.container.style.height = f + "px";
          this.renderer.boxWrapper.attr({ width: c, height: f, viewBox: [0, 0, c, f].join(" ") });
          this.chartBackground.attr({ width: c, height: f });
          this.scrollingContainer.style.height = this.chartHeight + "px";
          a3 && (h.scrollPositionX && (this.scrollingContainer.scrollLeft = this.scrollablePixelsX * h.scrollPositionX), h.scrollPositionY && (this.scrollingContainer.scrollTop = this.scrollablePixelsY * h.scrollPositionY));
          f = this.axisOffset;
          a3 = this.plotTop - f[0] - 1;
          h = this.plotLeft - f[3] - 1;
          c = this.plotTop + this.plotHeight + f[2] + 1;
          f = this.plotLeft + this.plotWidth + f[1] + 1;
          var n2 = this.plotLeft + this.plotWidth - (this.scrollablePixelsX || 0), p = this.plotTop + this.plotHeight - (this.scrollablePixelsY || 0);
          a3 = this.scrollablePixelsX ? [["M", 0, a3], ["L", this.plotLeft - 1, a3], ["L", this.plotLeft - 1, c], ["L", 0, c], ["Z"], ["M", n2, a3], ["L", this.chartWidth, a3], ["L", this.chartWidth, c], ["L", n2, c], ["Z"]] : this.scrollablePixelsY ? [["M", h, 0], ["L", h, this.plotTop - 1], ["L", f, this.plotTop - 1], ["L", f, 0], ["Z"], ["M", h, p], ["L", h, this.chartHeight], ["L", f, this.chartHeight], ["L", f, p], ["Z"]] : [["M", 0, 0]];
          "adjustHeight" !== this.redrawTrigger && this.scrollableMask.attr({ d: a3 });
        };
        A(u, "afterInit", function() {
          this.chart.scrollableDirty = true;
        });
        A(F, "show", function() {
          this.chart.scrollableDirty = true;
        });
        "";
      });
      M(a, "Core/Axis/StackingAxis.js", [a["Core/Animation/AnimationUtilities.js"], a["Core/Axis/Axis.js"], a["Core/Utilities.js"]], function(a2, u, z) {
        var v = a2.getDeferredAnimation, y = z.addEvent, G = z.destroyObjectProperties, H = z.fireEvent, A = z.isNumber, q = z.objectEach, n;
        (function(a3) {
          function e() {
            var a4 = this.stacking;
            if (a4) {
              var c2 = a4.stacks;
              q(c2, function(a5, e2) {
                G(a5);
                c2[e2] = null;
              });
              a4 && a4.stackTotalGroup && a4.stackTotalGroup.destroy();
            }
          }
          function c() {
            this.stacking || (this.stacking = new f(this));
          }
          var h = [];
          a3.compose = function(a4) {
            -1 === h.indexOf(a4) && (h.push(a4), y(a4, "init", c), y(a4, "destroy", e));
            return a4;
          };
          var f = function() {
            function a4(a5) {
              this.oldStacks = {};
              this.stacks = {};
              this.stacksTouched = 0;
              this.axis = a5;
            }
            a4.prototype.buildStacks = function() {
              var a5 = this.axis, c2 = a5.series, e2 = a5.options.reversedStacks, f2 = c2.length, h2;
              if (!a5.isXAxis) {
                this.usePercentage = false;
                for (h2 = f2; h2--; ) {
                  var k = c2[e2 ? h2 : f2 - h2 - 1];
                  k.setStackedPoints();
                  k.setGroupedPoints();
                }
                for (h2 = 0; h2 < f2; h2++)
                  c2[h2].modifyStacks();
                H(a5, "afterBuildStacks");
              }
            };
            a4.prototype.cleanStacks = function() {
              if (!this.axis.isXAxis) {
                if (this.oldStacks)
                  var a5 = this.stacks = this.oldStacks;
                q(a5, function(a6) {
                  q(a6, function(a7) {
                    a7.cumulative = a7.total;
                  });
                });
              }
            };
            a4.prototype.resetStacks = function() {
              var a5 = this, c2 = a5.stacks;
              a5.axis.isXAxis || q(c2, function(c3) {
                q(
                  c3,
                  function(e2, f2) {
                    A(e2.touched) && e2.touched < a5.stacksTouched ? (e2.destroy(), delete c3[f2]) : (e2.total = null, e2.cumulative = null);
                  }
                );
              });
            };
            a4.prototype.renderStackTotals = function() {
              var a5 = this.axis, c2 = a5.chart, e2 = c2.renderer, f2 = this.stacks;
              a5 = v(c2, a5.options.stackLabels && a5.options.stackLabels.animation || false);
              var h2 = this.stackTotalGroup = this.stackTotalGroup || e2.g("stack-labels").attr({ visibility: "visible", zIndex: 6, opacity: 0 }).add();
              h2.translate(c2.plotLeft, c2.plotTop);
              q(f2, function(a6) {
                q(a6, function(a7) {
                  a7.render(h2);
                });
              });
              h2.animate(
                { opacity: 1 },
                a5
              );
            };
            return a4;
          }();
          a3.Additions = f;
        })(n || (n = {}));
        return n;
      });
      M(a, "Extensions/Stacking.js", [a["Core/Axis/Axis.js"], a["Core/Chart/Chart.js"], a["Core/FormatUtilities.js"], a["Core/Globals.js"], a["Core/Series/Series.js"], a["Core/Axis/StackingAxis.js"], a["Core/Utilities.js"]], function(a2, u, z, F, y, G, H) {
        var v = z.format, q = H.correctFloat, n = H.defined, k = H.destroyObjectProperties, e = H.isArray, c = H.isNumber, h = H.objectEach, f = H.pick, w = function() {
          function a3(a4, c2, e2, f2, h2) {
            var l = a4.chart.inverted;
            this.axis = a4;
            this.isNegative = e2;
            this.options = c2 = c2 || {};
            this.x = f2;
            this.total = null;
            this.points = {};
            this.hasValidPoints = false;
            this.stack = h2;
            this.rightCliff = this.leftCliff = 0;
            this.alignOptions = { align: c2.align || (l ? e2 ? "left" : "right" : "center"), verticalAlign: c2.verticalAlign || (l ? "middle" : e2 ? "bottom" : "top"), y: c2.y, x: c2.x };
            this.textAlign = c2.textAlign || (l ? e2 ? "right" : "left" : "center");
          }
          a3.prototype.destroy = function() {
            k(this, this.axis);
          };
          a3.prototype.render = function(a4) {
            var c2 = this.axis.chart, e2 = this.options, h2 = e2.format;
            h2 = h2 ? v(h2, this, c2) : e2.formatter.call(this);
            this.label ? this.label.attr({
              text: h2,
              visibility: "hidden"
            }) : (this.label = c2.renderer.label(h2, null, null, e2.shape, null, null, e2.useHTML, false, "stack-labels"), h2 = { r: e2.borderRadius || 0, text: h2, rotation: e2.rotation, padding: f(e2.padding, 5), visibility: "hidden" }, c2.styledMode || (h2.fill = e2.backgroundColor, h2.stroke = e2.borderColor, h2["stroke-width"] = e2.borderWidth, this.label.css(e2.style)), this.label.attr(h2), this.label.added || this.label.add(a4));
            this.label.labelrank = c2.plotSizeY;
          };
          a3.prototype.setOffset = function(a4, e2, h2, k2, p) {
            var l = this.axis, b = l.chart;
            k2 = l.translate(l.stacking.usePercentage ? 100 : k2 ? k2 : this.total, 0, 0, 0, 1);
            h2 = l.translate(h2 ? h2 : 0);
            h2 = n(k2) && Math.abs(k2 - h2);
            a4 = f(p, b.xAxis[0].translate(this.x)) + a4;
            l = n(k2) && this.getStackBox(b, this, a4, k2, e2, h2, l);
            e2 = this.label;
            h2 = this.isNegative;
            a4 = "justify" === f(this.options.overflow, "justify");
            var g = this.textAlign;
            e2 && l && (p = e2.getBBox(), k2 = e2.padding, g = "left" === g ? b.inverted ? -k2 : k2 : "right" === g ? p.width : b.inverted && "center" === g ? p.width / 2 : b.inverted ? h2 ? p.width + k2 : -k2 : p.width / 2, h2 = b.inverted ? p.height / 2 : h2 ? -k2 : p.height, this.alignOptions.x = f(this.options.x, 0), this.alignOptions.y = f(this.options.y, 0), l.x -= g, l.y -= h2, e2.align(this.alignOptions, null, l), b.isInsidePlot(e2.alignAttr.x + g - this.alignOptions.x, e2.alignAttr.y + h2 - this.alignOptions.y) ? e2.show() : (e2.alignAttr.y = -9999, a4 = false), a4 && y.prototype.justifyDataLabel.call(this.axis, e2, this.alignOptions, e2.alignAttr, p, l), e2.attr({ x: e2.alignAttr.x, y: e2.alignAttr.y }), f(!a4 && this.options.crop, true) && ((b = c(e2.x) && c(e2.y) && b.isInsidePlot(e2.x - k2 + e2.width, e2.y) && b.isInsidePlot(e2.x + k2, e2.y)) || e2.hide()));
          };
          a3.prototype.getStackBox = function(a4, c2, e2, f2, h2, l, b) {
            var g = c2.axis.reversed, d = a4.inverted, k2 = b.height + b.pos - (d ? a4.plotLeft : a4.plotTop);
            c2 = c2.isNegative && !g || !c2.isNegative && g;
            return { x: d ? c2 ? f2 - b.right : f2 - l + b.pos - a4.plotLeft : e2 + a4.xAxis[0].transB - a4.plotLeft, y: d ? b.height - e2 - h2 : c2 ? k2 - f2 - l : k2 - f2, width: d ? l : h2, height: d ? h2 : l };
          };
          return a3;
        }();
        u.prototype.getStacks = function() {
          var a3 = this, c2 = a3.inverted;
          a3.yAxis.forEach(function(a4) {
            a4.stacking && a4.stacking.stacks && a4.hasVisibleSeries && (a4.stacking.oldStacks = a4.stacking.stacks);
          });
          a3.series.forEach(function(e2) {
            var h2 = e2.xAxis && e2.xAxis.options || {};
            !e2.options.stacking || true !== e2.visible && false !== a3.options.chart.ignoreHiddenSeries || (e2.stackKey = [e2.type, f(e2.options.stack, ""), c2 ? h2.top : h2.left, c2 ? h2.height : h2.width].join());
          });
        };
        G.compose(a2);
        y.prototype.setGroupedPoints = function() {
          var a3 = this.yAxis.stacking;
          this.options.centerInCategory && (this.is("column") || this.is("columnrange")) && !this.options.stacking && 1 < this.chart.series.length ? y.prototype.setStackedPoints.call(this, "group") : a3 && h(a3.stacks, function(c2, e2) {
            "group" === e2.slice(-5) && (h(c2, function(a4) {
              return a4.destroy();
            }), delete a3.stacks[e2]);
          });
        };
        y.prototype.setStackedPoints = function(a3) {
          var c2 = a3 || this.options.stacking;
          if (c2 && (true === this.visible || false === this.chart.options.chart.ignoreHiddenSeries)) {
            var h2 = this.processedXData, k2 = this.processedYData, p = [], r = k2.length, l = this.options, b = l.threshold, g = f(l.startFromThreshold && b, 0);
            l = l.stack;
            a3 = a3 ? this.type + "," + c2 : this.stackKey;
            var d = "-" + a3, m = this.negStacks, v2 = this.yAxis, x = v2.stacking.stacks, u2 = v2.stacking.oldStacks, A, y2;
            v2.stacking.stacksTouched += 1;
            for (y2 = 0; y2 < r; y2++) {
              var z2 = h2[y2];
              var F2 = k2[y2];
              var H2 = this.getStackIndicator(
                H2,
                z2,
                this.index
              );
              var G2 = H2.key;
              var K = (A = m && F2 < (g ? 0 : b)) ? d : a3;
              x[K] || (x[K] = {});
              x[K][z2] || (u2[K] && u2[K][z2] ? (x[K][z2] = u2[K][z2], x[K][z2].total = null) : x[K][z2] = new w(v2, v2.options.stackLabels, A, z2, l));
              K = x[K][z2];
              null !== F2 ? (K.points[G2] = K.points[this.index] = [f(K.cumulative, g)], n(K.cumulative) || (K.base = G2), K.touched = v2.stacking.stacksTouched, 0 < H2.index && false === this.singleStacks && (K.points[G2][0] = K.points[this.index + "," + z2 + ",0"][0])) : K.points[G2] = K.points[this.index] = null;
              "percent" === c2 ? (A = A ? a3 : d, m && x[A] && x[A][z2] ? (A = x[A][z2], K.total = A.total = Math.max(A.total, K.total) + Math.abs(F2) || 0) : K.total = q(K.total + (Math.abs(F2) || 0))) : "group" === c2 ? (e(F2) && (F2 = F2[0]), null !== F2 && (K.total = (K.total || 0) + 1)) : K.total = q(K.total + (F2 || 0));
              K.cumulative = "group" === c2 ? (K.total || 1) - 1 : f(K.cumulative, g) + (F2 || 0);
              null !== F2 && (K.points[G2].push(K.cumulative), p[y2] = K.cumulative, K.hasValidPoints = true);
            }
            "percent" === c2 && (v2.stacking.usePercentage = true);
            "group" !== c2 && (this.stackedYData = p);
            v2.stacking.oldStacks = {};
          }
        };
        y.prototype.modifyStacks = function() {
          var a3 = this, c2 = a3.stackKey, e2 = a3.yAxis.stacking.stacks, f2 = a3.processedXData, h2, k2 = a3.options.stacking;
          a3[k2 + "Stacker"] && [c2, "-" + c2].forEach(function(c3) {
            for (var b = f2.length, g, d; b--; )
              if (g = f2[b], h2 = a3.getStackIndicator(h2, g, a3.index, c3), d = (g = e2[c3] && e2[c3][g]) && g.points[h2.key])
                a3[k2 + "Stacker"](d, g, b);
          });
        };
        y.prototype.percentStacker = function(a3, c2, e2) {
          c2 = c2.total ? 100 / c2.total : 0;
          a3[0] = q(a3[0] * c2);
          a3[1] = q(a3[1] * c2);
          this.stackedYData[e2] = a3[1];
        };
        y.prototype.getStackIndicator = function(a3, c2, e2, f2) {
          !n(a3) || a3.x !== c2 || f2 && a3.key !== f2 ? a3 = { x: c2, index: 0, key: f2 } : a3.index++;
          a3.key = [e2, c2, a3.index].join();
          return a3;
        };
        F.StackItem = w;
        "";
        return F.StackItem;
      });
      M(a, "Series/Line/LineSeries.js", [a["Core/Series/Series.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function(a2, u, z) {
        var v = this && this.__extends || /* @__PURE__ */ function() {
          var a3 = function(v2, q) {
            a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, k) {
              a4.__proto__ = k;
            } || function(a4, k) {
              for (var e in k)
                k.hasOwnProperty(e) && (a4[e] = k[e]);
            };
            return a3(v2, q);
          };
          return function(v2, q) {
            function n() {
              this.constructor = v2;
            }
            a3(v2, q);
            v2.prototype = null === q ? Object.create(q) : (n.prototype = q.prototype, new n());
          };
        }(), y = z.defined, G = z.merge;
        z = function(u2) {
          function A() {
            var a3 = null !== u2 && u2.apply(this, arguments) || this;
            a3.data = void 0;
            a3.options = void 0;
            a3.points = void 0;
            return a3;
          }
          v(A, u2);
          A.prototype.drawGraph = function() {
            var a3 = this, n = this.options, k = (this.gappedPath || this.getGraphPath).call(this), e = this.chart.styledMode, c = [["graph", "highcharts-graph"]];
            e || c[0].push(n.lineColor || this.color || "#cccccc", n.dashStyle);
            c = a3.getZonesGraphs(c);
            c.forEach(function(c2, f) {
              var h = c2[0], p = a3[h], q = p ? "animate" : "attr";
              p ? (p.endX = a3.preventGraphAnimation ? null : k.xMap, p.animate({ d: k })) : k.length && (a3[h] = p = a3.chart.renderer.path(k).addClass(c2[1]).attr({ zIndex: 1 }).add(a3.group));
              p && !e && (h = { stroke: c2[2], "stroke-width": n.lineWidth, fill: a3.fillGraph && a3.color || "none" }, c2[3] ? h.dashstyle = c2[3] : "square" !== n.linecap && (h["stroke-linecap"] = h["stroke-linejoin"] = "round"), p[q](h).shadow(2 > f && n.shadow));
              p && (p.startX = k.xMap, p.isArea = k.isArea);
            });
          };
          A.prototype.getGraphPath = function(a3, n, k) {
            var e = this, c = e.options, h = [], f = [], q, p = c.step;
            a3 = a3 || e.points;
            var v2 = a3.reversed;
            v2 && a3.reverse();
            (p = { right: 1, center: 2 }[p] || p && 3) && v2 && (p = 4 - p);
            a3 = this.getValidPoints(a3, false, !(c.connectNulls && !n && !k));
            a3.forEach(function(t, v3) {
              var w = t.plotX, r = t.plotY, l = a3[v3 - 1];
              (t.leftCliff || l && l.rightCliff) && !k && (q = true);
              t.isNull && !y(n) && 0 < v3 ? q = !c.connectNulls : t.isNull && !n ? q = true : (0 === v3 || q ? v3 = [["M", t.plotX, t.plotY]] : e.getPointSpline ? v3 = [e.getPointSpline(a3, t, v3)] : p ? (v3 = 1 === p ? [["L", l.plotX, r]] : 2 === p ? [["L", (l.plotX + w) / 2, l.plotY], ["L", (l.plotX + w) / 2, r]] : [["L", w, l.plotY]], v3.push(["L", w, r])) : v3 = [["L", w, r]], f.push(t.x), p && (f.push(t.x), 2 === p && f.push(t.x)), h.push.apply(h, v3), q = false);
            });
            h.xMap = f;
            return e.graphPath = h;
          };
          A.prototype.getZonesGraphs = function(a3) {
            this.zones.forEach(function(n, k) {
              k = ["zone-graph-" + k, "highcharts-graph highcharts-zone-graph-" + k + " " + (n.className || "")];
              this.chart.styledMode || k.push(n.color || this.color, n.dashStyle || this.options.dashStyle);
              a3.push(k);
            }, this);
            return a3;
          };
          A.defaultOptions = G(a2.defaultOptions, {});
          return A;
        }(a2);
        u.registerSeriesType("line", z);
        "";
        return z;
      });
      M(a, "Series/Area/AreaSeries.js", [
        a["Core/Color/Color.js"],
        a["Core/Legend/LegendSymbol.js"],
        a["Core/Series/SeriesRegistry.js"],
        a["Core/Utilities.js"]
      ], function(a2, u, z, F) {
        var v = this && this.__extends || /* @__PURE__ */ function() {
          var a3 = function(e, c) {
            a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, c2) {
              a4.__proto__ = c2;
            } || function(a4, c2) {
              for (var e2 in c2)
                c2.hasOwnProperty(e2) && (a4[e2] = c2[e2]);
            };
            return a3(e, c);
          };
          return function(e, c) {
            function h() {
              this.constructor = e;
            }
            a3(e, c);
            e.prototype = null === c ? Object.create(c) : (h.prototype = c.prototype, new h());
          };
        }(), G = a2.parse, H = z.seriesTypes.line;
        a2 = F.extend;
        var A = F.merge, q = F.objectEach, n = F.pick;
        F = function(a3) {
          function e() {
            var c = null !== a3 && a3.apply(this, arguments) || this;
            c.data = void 0;
            c.options = void 0;
            c.points = void 0;
            return c;
          }
          v(e, a3);
          e.prototype.drawGraph = function() {
            this.areaPath = [];
            a3.prototype.drawGraph.apply(this);
            var c = this, e2 = this.areaPath, f = this.options, k = [["area", "highcharts-area", this.color, f.fillColor]];
            this.zones.forEach(function(a4, e3) {
              k.push(["zone-area-" + e3, "highcharts-area highcharts-zone-area-" + e3 + " " + a4.className, a4.color || c.color, a4.fillColor || f.fillColor]);
            });
            k.forEach(function(a4) {
              var h = a4[0], k2 = c[h], p = k2 ? "animate" : "attr", q2 = {};
              k2 ? (k2.endX = c.preventGraphAnimation ? null : e2.xMap, k2.animate({ d: e2 })) : (q2.zIndex = 0, k2 = c[h] = c.chart.renderer.path(e2).addClass(a4[1]).add(c.group), k2.isArea = true);
              c.chart.styledMode || (q2.fill = n(a4[3], G(a4[2]).setOpacity(n(f.fillOpacity, 0.75)).get()));
              k2[p](q2);
              k2.startX = e2.xMap;
              k2.shiftUnit = f.step ? 2 : 1;
            });
          };
          e.prototype.getGraphPath = function(a4) {
            var c = H.prototype.getGraphPath, e2 = this.options, k = e2.stacking, p = this.yAxis, q2, t = [], v2 = [], u2 = this.index, r = p.stacking.stacks[this.stackKey], l = e2.threshold, b = Math.round(p.getThreshold(e2.threshold));
            e2 = n(e2.connectNulls, "percent" === k);
            var g = function(c2, d2, e3) {
              var g2 = a4[c2];
              c2 = k && r[g2.x].points[u2];
              var f = g2[e3 + "Null"] || 0;
              e3 = g2[e3 + "Cliff"] || 0;
              g2 = true;
              if (e3 || f) {
                var h = (f ? c2[0] : c2[1]) + e3;
                var n2 = c2[0] + e3;
                g2 = !!f;
              } else
                !k && a4[d2] && a4[d2].isNull && (h = n2 = l);
              "undefined" !== typeof h && (v2.push({ plotX: m, plotY: null === h ? b : p.getThreshold(h), isNull: g2, isCliff: true }), t.push({ plotX: m, plotY: null === n2 ? b : p.getThreshold(n2), doCurve: false }));
            };
            a4 = a4 || this.points;
            k && (a4 = this.getStackPoints(a4));
            for (q2 = 0; q2 < a4.length; q2++) {
              k || (a4[q2].leftCliff = a4[q2].rightCliff = a4[q2].leftNull = a4[q2].rightNull = void 0);
              var d = a4[q2].isNull;
              var m = n(a4[q2].rectPlotX, a4[q2].plotX);
              var D = k ? n(a4[q2].yBottom, b) : b;
              if (!d || e2)
                e2 || g(q2, q2 - 1, "left"), d && !k && e2 || (v2.push(a4[q2]), t.push({ x: q2, plotX: m, plotY: D })), e2 || g(q2, q2 + 1, "right");
            }
            q2 = c.call(this, v2, true, true);
            t.reversed = true;
            d = c.call(this, t, true, true);
            (D = d[0]) && "M" === D[0] && (d[0] = ["L", D[1], D[2]]);
            d = q2.concat(d);
            d.length && d.push(["Z"]);
            c = c.call(this, v2, false, e2);
            d.xMap = q2.xMap;
            this.areaPath = d;
            return c;
          };
          e.prototype.getStackPoints = function(a4) {
            var c = this, e2 = [], k = [], p = this.xAxis, v2 = this.yAxis, t = v2.stacking.stacks[this.stackKey], u2 = {}, C = v2.series, r = C.length, l = v2.options.reversedStacks ? 1 : -1, b = C.indexOf(c);
            a4 = a4 || this.points;
            if (this.options.stacking) {
              for (var g = 0; g < a4.length; g++)
                a4[g].leftNull = a4[g].rightNull = void 0, u2[a4[g].x] = a4[g];
              q(t, function(a5, b2) {
                null !== a5.total && k.push(b2);
              });
              k.sort(function(a5, b2) {
                return a5 - b2;
              });
              var d = C.map(function(a5) {
                return a5.visible;
              });
              k.forEach(function(a5, g2) {
                var f = 0, h, m;
                if (u2[a5] && !u2[a5].isNull)
                  e2.push(u2[a5]), [-1, 1].forEach(function(e3) {
                    var f2 = 1 === e3 ? "rightNull" : "leftNull", n2 = 0, p2 = t[k[g2 + e3]];
                    if (p2)
                      for (var q3 = b; 0 <= q3 && q3 < r; ) {
                        var v3 = C[q3].index;
                        h = p2.points[v3];
                        h || (v3 === c.index ? u2[a5][f2] = true : d[q3] && (m = t[a5].points[v3]) && (n2 -= m[1] - m[0]));
                        q3 += l;
                      }
                    u2[a5][1 === e3 ? "rightCliff" : "leftCliff"] = n2;
                  });
                else {
                  for (var q2 = b; 0 <= q2 && q2 < r; ) {
                    if (h = t[a5].points[C[q2].index]) {
                      f = h[1];
                      break;
                    }
                    q2 += l;
                  }
                  f = n(f, 0);
                  f = v2.translate(f, 0, 1, 0, 1);
                  e2.push({ isNull: true, plotX: p.translate(a5, 0, 0, 0, 1), x: a5, plotY: f, yBottom: f });
                }
              });
            }
            return e2;
          };
          e.defaultOptions = A(H.defaultOptions, { threshold: 0 });
          return e;
        }(H);
        a2(F.prototype, {
          singleStacks: false,
          drawLegendSymbol: u.drawRectangle
        });
        z.registerSeriesType("area", F);
        "";
        return F;
      });
      M(a, "Series/Spline/SplineSeries.js", [a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function(a2, u) {
        var v = this && this.__extends || /* @__PURE__ */ function() {
          var a3 = function(v2, q) {
            a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, k) {
              a4.__proto__ = k;
            } || function(a4, k) {
              for (var e in k)
                k.hasOwnProperty(e) && (a4[e] = k[e]);
            };
            return a3(v2, q);
          };
          return function(v2, q) {
            function n() {
              this.constructor = v2;
            }
            a3(v2, q);
            v2.prototype = null === q ? Object.create(q) : (n.prototype = q.prototype, new n());
          };
        }(), F = a2.seriesTypes.line, y = u.merge, G = u.pick;
        u = function(a3) {
          function u2() {
            var q = null !== a3 && a3.apply(this, arguments) || this;
            q.data = void 0;
            q.options = void 0;
            q.points = void 0;
            return q;
          }
          v(u2, a3);
          u2.prototype.getPointSpline = function(a4, n, k) {
            var e = n.plotX || 0, c = n.plotY || 0, h = a4[k - 1];
            k = a4[k + 1];
            if (h && !h.isNull && false !== h.doCurve && !n.isCliff && k && !k.isNull && false !== k.doCurve && !n.isCliff) {
              a4 = h.plotY || 0;
              var f = k.plotX || 0;
              k = k.plotY || 0;
              var q = 0;
              var p = (1.5 * e + (h.plotX || 0)) / 2.5;
              var v2 = (1.5 * c + a4) / 2.5;
              f = (1.5 * e + f) / 2.5;
              var t = (1.5 * c + k) / 2.5;
              f !== p && (q = (t - v2) * (f - e) / (f - p) + c - t);
              v2 += q;
              t += q;
              v2 > a4 && v2 > c ? (v2 = Math.max(a4, c), t = 2 * c - v2) : v2 < a4 && v2 < c && (v2 = Math.min(a4, c), t = 2 * c - v2);
              t > k && t > c ? (t = Math.max(k, c), v2 = 2 * c - t) : t < k && t < c && (t = Math.min(k, c), v2 = 2 * c - t);
              n.rightContX = f;
              n.rightContY = t;
            }
            n = ["C", G(h.rightContX, h.plotX, 0), G(h.rightContY, h.plotY, 0), G(p, e, 0), G(v2, c, 0), e, c];
            h.rightContX = h.rightContY = void 0;
            return n;
          };
          u2.defaultOptions = y(F.defaultOptions);
          return u2;
        }(F);
        a2.registerSeriesType("spline", u);
        "";
        return u;
      });
      M(
        a,
        "Series/AreaSpline/AreaSplineSeries.js",
        [a["Series/Area/AreaSeries.js"], a["Series/Spline/SplineSeries.js"], a["Core/Legend/LegendSymbol.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]],
        function(a2, u, z, F, y) {
          var v = this && this.__extends || /* @__PURE__ */ function() {
            var a3 = function(k, e) {
              a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, e2) {
                a4.__proto__ = e2;
              } || function(a4, e2) {
                for (var c in e2)
                  e2.hasOwnProperty(c) && (a4[c] = e2[c]);
              };
              return a3(k, e);
            };
            return function(k, e) {
              function c() {
                this.constructor = k;
              }
              a3(k, e);
              k.prototype = null === e ? Object.create(e) : (c.prototype = e.prototype, new c());
            };
          }(), H = a2.prototype, A = y.extend, q = y.merge;
          y = function(n) {
            function k() {
              var a3 = null !== n && n.apply(this, arguments) || this;
              a3.data = void 0;
              a3.points = void 0;
              a3.options = void 0;
              return a3;
            }
            v(k, n);
            k.defaultOptions = q(u.defaultOptions, a2.defaultOptions);
            return k;
          }(u);
          A(y.prototype, { getGraphPath: H.getGraphPath, getStackPoints: H.getStackPoints, drawGraph: H.drawGraph, drawLegendSymbol: z.drawRectangle });
          F.registerSeriesType("areaspline", y);
          "";
          return y;
        }
      );
      M(a, "Series/Column/ColumnSeries.js", [
        a["Core/Animation/AnimationUtilities.js"],
        a["Core/Color/Color.js"],
        a["Core/Globals.js"],
        a["Core/Legend/LegendSymbol.js"],
        a["Core/Series/Series.js"],
        a["Core/Series/SeriesRegistry.js"],
        a["Core/Utilities.js"]
      ], function(a2, u, z, F, y, G, H) {
        var v = this && this.__extends || /* @__PURE__ */ function() {
          var a3 = function(c2, b) {
            a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, b2) {
              a4.__proto__ = b2;
            } || function(a4, b2) {
              for (var c3 in b2)
                b2.hasOwnProperty(c3) && (a4[c3] = b2[c3]);
            };
            return a3(c2, b);
          };
          return function(c2, b) {
            function e2() {
              this.constructor = c2;
            }
            a3(c2, b);
            c2.prototype = null === b ? Object.create(b) : (e2.prototype = b.prototype, new e2());
          };
        }(), q = a2.animObject, n = u.parse, k = z.hasTouch;
        a2 = z.noop;
        var e = H.clamp, c = H.css, h = H.defined, f = H.extend, w = H.fireEvent, p = H.isArray, B = H.isNumber, t = H.merge, J = H.pick, C = H.objectEach;
        H = function(a3) {
          function l() {
            var b = null !== a3 && a3.apply(this, arguments) || this;
            b.borderWidth = void 0;
            b.data = void 0;
            b.group = void 0;
            b.options = void 0;
            b.points = void 0;
            return b;
          }
          v(l, a3);
          l.prototype.animate = function(a4) {
            var b = this, c2 = this.yAxis, h2 = b.options, l2 = this.chart.inverted, k2 = {}, n2 = l2 ? "translateX" : "translateY";
            if (a4)
              k2.scaleY = 1e-3, a4 = e(c2.toPixels(h2.threshold), c2.pos, c2.pos + c2.len), l2 ? k2.translateX = a4 - c2.len : k2.translateY = a4, b.clipBox && b.setClip(), b.group.attr(k2);
            else {
              var p2 = Number(b.group.attr(n2));
              b.group.animate({ scaleY: 1 }, f(q(b.options.animation), { step: function(a5, d) {
                b.group && (k2[n2] = p2 + d.pos * (c2.pos - p2), b.group.attr(k2));
              } }));
            }
          };
          l.prototype.init = function(b, c2) {
            a3.prototype.init.apply(this, arguments);
            var d = this;
            b = d.chart;
            b.hasRendered && b.series.forEach(function(a4) {
              a4.type === d.type && (a4.isDirty = true);
            });
          };
          l.prototype.getColumnMetrics = function() {
            var a4 = this, c2 = a4.options, d = a4.xAxis, e2 = a4.yAxis, f2 = d.options.reversedStacks;
            f2 = d.reversed && !f2 || !d.reversed && f2;
            var h2 = {}, l2, k2 = 0;
            false === c2.grouping ? k2 = 1 : a4.chart.series.forEach(function(b) {
              var c3 = b.yAxis, d2 = b.options;
              if (b.type === a4.type && (b.visible || !a4.chart.options.chart.ignoreHiddenSeries) && e2.len === c3.len && e2.pos === c3.pos) {
                if (d2.stacking && "group" !== d2.stacking) {
                  l2 = b.stackKey;
                  "undefined" === typeof h2[l2] && (h2[l2] = k2++);
                  var g = h2[l2];
                } else
                  false !== d2.grouping && (g = k2++);
                b.columnIndex = g;
              }
            });
            var n2 = Math.min(Math.abs(d.transA) * (d.ordinal && d.ordinal.slope || c2.pointRange || d.closestPointRange || d.tickInterval || 1), d.len), p2 = n2 * c2.groupPadding, r = (n2 - 2 * p2) / (k2 || 1);
            c2 = Math.min(c2.maxPointWidth || d.len, J(c2.pointWidth, r * (1 - 2 * c2.pointPadding)));
            a4.columnMetrics = { width: c2, offset: (r - c2) / 2 + (p2 + ((a4.columnIndex || 0) + (f2 ? 1 : 0)) * r - n2 / 2) * (f2 ? -1 : 1), paddedWidth: r, columnCount: k2 };
            return a4.columnMetrics;
          };
          l.prototype.crispCol = function(a4, c2, d, e2) {
            var b = this.chart, g = this.borderWidth, f2 = -(g % 2 ? 0.5 : 0);
            g = g % 2 ? 0.5 : 1;
            b.inverted && b.renderer.isVML && (g += 1);
            this.options.crisp && (d = Math.round(a4 + d) + f2, a4 = Math.round(a4) + f2, d -= a4);
            e2 = Math.round(c2 + e2) + g;
            f2 = 0.5 >= Math.abs(c2) && 0.5 < e2;
            c2 = Math.round(c2) + g;
            e2 -= c2;
            f2 && e2 && (--c2, e2 += 1);
            return { x: a4, y: c2, width: d, height: e2 };
          };
          l.prototype.adjustForMissingColumns = function(a4, c2, d, e2) {
            var b = this, g = this.options.stacking;
            if (!d.isNull && 1 < e2.columnCount) {
              var f2 = 0, h2 = 0;
              C(this.yAxis.stacking && this.yAxis.stacking.stacks, function(a5) {
                if ("number" === typeof d.x && (a5 = a5[d.x.toString()])) {
                  var c3 = a5.points[b.index], e3 = a5.total;
                  g ? (c3 && (f2 = h2), a5.hasValidPoints && h2++) : p(c3) && (f2 = c3[1], h2 = e3 || 0);
                }
              });
              a4 = (d.plotX || 0) + ((h2 - 1) * e2.paddedWidth + c2) / 2 - c2 - f2 * e2.paddedWidth;
            }
            return a4;
          };
          l.prototype.translate = function() {
            var a4 = this, c2 = a4.chart, d = a4.options, f2 = a4.dense = 2 > a4.closestPointRange * a4.xAxis.transA;
            f2 = a4.borderWidth = J(d.borderWidth, f2 ? 0 : 1);
            var l2 = a4.xAxis, k2 = a4.yAxis, n2 = d.threshold, p2 = a4.translatedThreshold = k2.getThreshold(n2), r = J(d.minPointLength, 5), q2 = a4.getColumnMetrics(), t2 = q2.width, v2 = a4.pointXOffset = q2.offset, u2 = a4.dataMin, w2 = a4.dataMax, C2 = a4.barW = Math.max(t2, 1 + 2 * f2);
            c2.inverted && (p2 -= 0.5);
            d.pointPadding && (C2 = Math.ceil(C2));
            y.prototype.translate.apply(a4);
            a4.points.forEach(function(b) {
              var g = J(b.yBottom, p2), f3 = 999 + Math.abs(g), m = b.plotX || 0;
              f3 = e(b.plotY, -f3, k2.len + f3);
              var x = Math.min(f3, g), D = Math.max(f3, g) - x, y2 = t2, A = m + v2, z2 = C2;
              r && Math.abs(D) < r && (D = r, m = !k2.reversed && !b.negative || k2.reversed && b.negative, B(n2) && B(w2) && b.y === n2 && w2 <= n2 && (k2.min || 0) < n2 && (u2 !== w2 || (k2.max || 0) <= n2) && (m = !m), x = Math.abs(x - p2) > r ? g - r : p2 - (m ? r : 0));
              h(b.options.pointWidth) && (y2 = z2 = Math.ceil(b.options.pointWidth), A -= Math.round((y2 - t2) / 2));
              d.centerInCategory && (A = a4.adjustForMissingColumns(A, y2, b, q2));
              b.barX = A;
              b.pointWidth = y2;
              b.tooltipPos = c2.inverted ? [e(k2.len + k2.pos - c2.plotLeft - f3, k2.pos - c2.plotLeft, k2.len + k2.pos - c2.plotLeft), l2.len + l2.pos - c2.plotTop - A - z2 / 2, D] : [l2.left - c2.plotLeft + A + z2 / 2, e(f3 + k2.pos - c2.plotTop, k2.pos - c2.plotTop, k2.len + k2.pos - c2.plotTop), D];
              b.shapeType = a4.pointClass.prototype.shapeType || "rect";
              b.shapeArgs = a4.crispCol.apply(a4, b.isNull ? [A, p2, z2, 0] : [A, x, z2, D]);
            });
          };
          l.prototype.drawGraph = function() {
            this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data");
          };
          l.prototype.pointAttribs = function(a4, c2) {
            var b = this.options, e2 = this.pointAttrToOptions || {}, g = e2.stroke || "borderColor", f2 = e2["stroke-width"] || "borderWidth", h2 = a4 && a4.color || this.color, l2 = a4 && a4[g] || b[g] || h2;
            e2 = a4 && a4.options.dashStyle || b.dashStyle;
            var k2 = a4 && a4[f2] || b[f2] || this[f2] || 0, p2 = J(a4 && a4.opacity, b.opacity, 1);
            if (a4 && this.zones.length) {
              var r = a4.getZone();
              h2 = a4.options.color || r && (r.color || a4.nonZonedColor) || this.color;
              r && (l2 = r.borderColor || l2, e2 = r.dashStyle || e2, k2 = r.borderWidth || k2);
            }
            c2 && a4 && (a4 = t(b.states[c2], a4.options.states && a4.options.states[c2] || {}), c2 = a4.brightness, h2 = a4.color || "undefined" !== typeof c2 && n(h2).brighten(a4.brightness).get() || h2, l2 = a4[g] || l2, k2 = a4[f2] || k2, e2 = a4.dashStyle || e2, p2 = J(a4.opacity, p2));
            g = { fill: h2, stroke: l2, "stroke-width": k2, opacity: p2 };
            e2 && (g.dashstyle = e2);
            return g;
          };
          l.prototype.drawPoints = function() {
            var a4 = this, c2 = this.chart, d = a4.options, e2 = c2.renderer, f2 = d.animationLimit || 250, h2;
            a4.points.forEach(function(b) {
              var g = b.graphic, l2 = !!g, k2 = g && c2.pointCount < f2 ? "animate" : "attr";
              if (B(b.plotY) && null !== b.y) {
                h2 = b.shapeArgs;
                g && b.hasNewShapeType() && (g = g.destroy());
                a4.enabledDataSorting && (b.startXPos = a4.xAxis.reversed ? -(h2 ? h2.width || 0 : 0) : a4.xAxis.width);
                g || (b.graphic = g = e2[b.shapeType](h2).add(b.group || a4.group)) && a4.enabledDataSorting && c2.hasRendered && c2.pointCount < f2 && (g.attr({ x: b.startXPos }), l2 = true, k2 = "animate");
                if (g && l2)
                  g[k2](t(h2));
                if (d.borderRadius)
                  g[k2]({ r: d.borderRadius });
                c2.styledMode || g[k2](a4.pointAttribs(b, b.selected && "select")).shadow(false !== b.allowShadow && d.shadow, null, d.stacking && !d.borderRadius);
                g && (g.addClass(b.getClassName(), true), g.attr({ visibility: b.visible ? "inherit" : "hidden" }));
              } else
                g && (b.graphic = g.destroy());
            });
          };
          l.prototype.drawTracker = function() {
            var a4 = this, e2 = a4.chart, d = e2.pointer, f2 = function(a5) {
              var b = d.getPointFromEvent(a5);
              "undefined" !== typeof b && (d.isDirectTouch = true, b.onMouseOver(a5));
            }, h2;
            a4.points.forEach(function(a5) {
              h2 = p(a5.dataLabels) ? a5.dataLabels : a5.dataLabel ? [a5.dataLabel] : [];
              a5.graphic && (a5.graphic.element.point = a5);
              h2.forEach(function(b) {
                b.div ? b.div.point = a5 : b.element.point = a5;
              });
            });
            a4._hasTracking || (a4.trackerGroups.forEach(function(b) {
              if (a4[b]) {
                a4[b].addClass("highcharts-tracker").on("mouseover", f2).on("mouseout", function(a5) {
                  d.onTrackerMouseOut(a5);
                });
                if (k)
                  a4[b].on(
                    "touchstart",
                    f2
                  );
                !e2.styledMode && a4.options.cursor && a4[b].css(c).css({ cursor: a4.options.cursor });
              }
            }), a4._hasTracking = true);
            w(this, "afterDrawTracker");
          };
          l.prototype.remove = function() {
            var a4 = this, c2 = a4.chart;
            c2.hasRendered && c2.series.forEach(function(b) {
              b.type === a4.type && (b.isDirty = true);
            });
            y.prototype.remove.apply(a4, arguments);
          };
          l.defaultOptions = t(y.defaultOptions, { borderRadius: 0, centerInCategory: false, groupPadding: 0.2, marker: null, pointPadding: 0.1, minPointLength: 0, cropThreshold: 50, pointRange: null, states: {
            hover: { halo: false, brightness: 0.1 },
            select: { color: "#cccccc", borderColor: "#000000" }
          }, dataLabels: { align: void 0, verticalAlign: void 0, y: void 0 }, startFromThreshold: true, stickyTracking: false, tooltip: { distance: 6 }, threshold: 0, borderColor: "#ffffff" });
          return l;
        }(y);
        f(H.prototype, { cropShoulder: 0, directTouch: true, drawLegendSymbol: F.drawRectangle, getSymbol: a2, negStacks: true, trackerGroups: ["group", "dataLabelsGroup"] });
        G.registerSeriesType("column", H);
        "";
        "";
        return H;
      });
      M(a, "Core/Series/DataLabel.js", [
        a["Core/Animation/AnimationUtilities.js"],
        a["Core/FormatUtilities.js"],
        a["Core/Utilities.js"]
      ], function(a2, u, z) {
        var v = a2.getDeferredAnimation, y = u.format, G = z.defined, H = z.extend, A = z.fireEvent, q = z.isArray, n = z.merge, k = z.objectEach, e = z.pick, c = z.splat, h;
        (function(a3) {
          function f(a4, b, c2, d, f2) {
            var g = this, h3 = this.chart, l = this.isCartesian && h3.inverted, k2 = this.enabledDataSorting, m = e(a4.dlBox && a4.dlBox.centerX, a4.plotX, -9999), n2 = e(a4.plotY, -9999), p = b.getBBox(), r2 = c2.rotation, q2 = c2.align, t2 = h3.isInsidePlot(m, Math.round(n2), { inverted: l, paneCoordinates: true, series: g }), v2 = function(c3) {
              k2 && g.xAxis && !u3 && g.setDataLabelStartPos(
                a4,
                b,
                f2,
                t2,
                c3
              );
            }, u3 = "justify" === e(c2.overflow, k2 ? "none" : "justify"), w = this.visible && false !== a4.visible && (a4.series.forceDL || k2 && !u3 || t2 || e(c2.inside, !!this.options.stacking) && d && h3.isInsidePlot(m, l ? d.x + 1 : d.y + d.height - 1, { inverted: l, paneCoordinates: true, series: g }));
            if (w) {
              var C2 = h3.renderer.fontMetrics(h3.styledMode ? void 0 : c2.style.fontSize, b).b;
              d = H({ x: l ? this.yAxis.len - n2 : m, y: Math.round(l ? this.xAxis.len - m : n2), width: 0, height: 0 }, d);
              H(c2, { width: p.width, height: p.height });
              r2 ? (u3 = false, m = h3.renderer.rotCorr(C2, r2), m = { x: d.x + (c2.x || 0) + d.width / 2 + m.x, y: d.y + (c2.y || 0) + { top: 0, middle: 0.5, bottom: 1 }[c2.verticalAlign] * d.height }, v2(m), b[f2 ? "attr" : "animate"](m).attr({ align: q2 }), v2 = (r2 + 720) % 360, v2 = 180 < v2 && 360 > v2, "left" === q2 ? m.y -= v2 ? p.height : 0 : "center" === q2 ? (m.x -= p.width / 2, m.y -= p.height / 2) : "right" === q2 && (m.x -= p.width, m.y -= v2 ? 0 : p.height), b.placed = true, b.alignAttr = m) : (v2(d), b.align(c2, void 0, d), m = b.alignAttr);
              u3 && 0 <= d.height ? this.justifyDataLabel(b, c2, m, p, d, f2) : e(c2.crop, true) && (w = h3.isInsidePlot(m.x, m.y, { paneCoordinates: true, series: g }) && h3.isInsidePlot(m.x + p.width, m.y + p.height, {
                paneCoordinates: true,
                series: g
              }));
              if (c2.shape && !r2)
                b[f2 ? "attr" : "animate"]({ anchorX: l ? h3.plotWidth - a4.plotY : a4.plotX, anchorY: l ? h3.plotHeight - a4.plotX : a4.plotY });
            }
            f2 && k2 && (b.placed = false);
            w || k2 && !u3 || (b.hide(true), b.placed = false);
          }
          function h2(a4, b) {
            var c2 = b.filter;
            return c2 ? (b = c2.operator, a4 = a4[c2.property], c2 = c2.value, ">" === b && a4 > c2 || "<" === b && a4 < c2 || ">=" === b && a4 >= c2 || "<=" === b && a4 <= c2 || "==" === b && a4 == c2 || "===" === b && a4 === c2 ? true : false) : true;
          }
          function u2() {
            var a4 = this, b = a4.chart, g = a4.options, d = a4.points, f2 = a4.hasRendered || 0, n2 = b.renderer, p = g.dataLabels, r2, t2 = p.animation;
            t2 = p.defer ? v(
              b,
              t2,
              a4
            ) : { defer: 0, duration: 0 };
            p = z2(z2(b.options.plotOptions && b.options.plotOptions.series && b.options.plotOptions.series.dataLabels, b.options.plotOptions && b.options.plotOptions[a4.type] && b.options.plotOptions[a4.type].dataLabels), p);
            A(this, "drawDataLabels");
            if (q(p) || p.enabled || a4._hasPointLabels) {
              var u3 = a4.plotGroup("dataLabelsGroup", "data-labels", f2 ? "inherit" : "hidden", p.zIndex || 6);
              u3.attr({ opacity: +f2 });
              !f2 && (f2 = a4.dataLabelsGroup) && (a4.visible && u3.show(true), f2[g.animation ? "animate" : "attr"]({ opacity: 1 }, t2));
              d.forEach(function(d2) {
                r2 = c(z2(p, d2.dlOptions || d2.options && d2.options.dataLabels));
                r2.forEach(function(c2, f3) {
                  var l = c2.enabled && (!d2.isNull || d2.dataLabelOnNull) && h2(d2, c2), m = d2.connectors ? d2.connectors[f3] : d2.connector, p2 = d2.dataLabels ? d2.dataLabels[f3] : d2.dataLabel, r3 = e(c2.distance, d2.labelDistance), q2 = !p2;
                  if (l) {
                    var t3 = d2.getLabelConfig();
                    var v2 = e(c2[d2.formatPrefix + "Format"], c2.format);
                    t3 = G(v2) ? y(v2, t3, b) : (c2[d2.formatPrefix + "Formatter"] || c2.formatter).call(t3, c2);
                    v2 = c2.style;
                    var w = c2.rotation;
                    b.styledMode || (v2.color = e(c2.color, v2.color, a4.color, "#000000"), "contrast" === v2.color ? (d2.contrastColor = n2.getContrast(d2.color || a4.color), v2.color = !G(r3) && c2.inside || 0 > r3 || g.stacking ? d2.contrastColor : "#000000") : delete d2.contrastColor, g.cursor && (v2.cursor = g.cursor));
                    var C2 = { r: c2.borderRadius || 0, rotation: w, padding: c2.padding, zIndex: 1 };
                    b.styledMode || (C2.fill = c2.backgroundColor, C2.stroke = c2.borderColor, C2["stroke-width"] = c2.borderWidth);
                    k(C2, function(a5, b2) {
                      "undefined" === typeof a5 && delete C2[b2];
                    });
                  }
                  !p2 || l && G(t3) && !!p2.div === !!c2.useHTML || (d2.dataLabel = p2 = d2.dataLabel && d2.dataLabel.destroy(), d2.dataLabels && (1 === d2.dataLabels.length ? delete d2.dataLabels : delete d2.dataLabels[f3]), f3 || delete d2.dataLabel, m && (d2.connector = d2.connector.destroy(), d2.connectors && (1 === d2.connectors.length ? delete d2.connectors : delete d2.connectors[f3])));
                  l && G(t3) && (p2 ? C2.text = t3 : (d2.dataLabels = d2.dataLabels || [], p2 = d2.dataLabels[f3] = w ? n2.text(t3, 0, -9999, c2.useHTML).addClass("highcharts-data-label") : n2.label(t3, 0, -9999, c2.shape, null, null, c2.useHTML, null, "data-label"), f3 || (d2.dataLabel = p2), p2.addClass(" highcharts-data-label-color-" + d2.colorIndex + " " + (c2.className || "") + (c2.useHTML ? " highcharts-tracker" : ""))), p2.options = c2, p2.attr(C2), b.styledMode || p2.css(v2).shadow(c2.shadow), p2.added || p2.add(u3), c2.textPath && !c2.useHTML && (p2.setTextPath(d2.getDataLabelPath && d2.getDataLabelPath(p2) || d2.graphic, c2.textPath), d2.dataLabelPath && !c2.textPath.enabled && (d2.dataLabelPath = d2.dataLabelPath.destroy())), a4.alignDataLabel(d2, p2, c2, null, q2));
                });
              });
            }
            A(this, "afterDrawDataLabels");
          }
          function t(a4, b, c2, d, e2, f2) {
            var g = this.chart, h3 = b.align, k2 = b.verticalAlign, l = a4.box ? 0 : a4.padding || 0, m = b.x;
            m = void 0 === m ? 0 : m;
            var n2 = b.y;
            n2 = void 0 === n2 ? 0 : n2;
            var p = (c2.x || 0) + l;
            if (0 > p) {
              "right" === h3 && 0 <= m ? (b.align = "left", b.inside = true) : m -= p;
              var r2 = true;
            }
            p = (c2.x || 0) + d.width - l;
            p > g.plotWidth && ("left" === h3 && 0 >= m ? (b.align = "right", b.inside = true) : m += g.plotWidth - p, r2 = true);
            p = c2.y + l;
            0 > p && ("bottom" === k2 && 0 <= n2 ? (b.verticalAlign = "top", b.inside = true) : n2 -= p, r2 = true);
            p = (c2.y || 0) + d.height - l;
            p > g.plotHeight && ("top" === k2 && 0 >= n2 ? (b.verticalAlign = "bottom", b.inside = true) : n2 += g.plotHeight - p, r2 = true);
            r2 && (b.x = m, b.y = n2, a4.placed = !f2, a4.align(b, void 0, e2));
            return r2;
          }
          function z2(a4, b) {
            var c2 = [], d;
            if (q(a4) && !q(b))
              c2 = a4.map(function(a5) {
                return n(a5, b);
              });
            else if (q(b) && !q(a4))
              c2 = b.map(function(b2) {
                return n(a4, b2);
              });
            else if (q(a4) || q(b))
              for (d = Math.max(a4.length, b.length); d--; )
                c2[d] = n(a4[d], b[d]);
            else
              c2 = n(a4, b);
            return c2;
          }
          function C(a4, b, c2, d, e2) {
            var g = this.chart, f2 = g.inverted, h3 = this.xAxis, k2 = h3.reversed, l = f2 ? b.height / 2 : b.width / 2;
            a4 = (a4 = a4.pointWidth) ? a4 / 2 : 0;
            b.startXPos = f2 ? e2.x : k2 ? -l - a4 : h3.width - l + a4;
            b.startYPos = f2 ? k2 ? this.yAxis.height - l + a4 : -l - a4 : e2.y;
            d ? "hidden" === b.visibility && (b.show(), b.attr({ opacity: 0 }).animate({ opacity: 1 })) : b.attr({ opacity: 1 }).animate(
              { opacity: 0 },
              void 0,
              b.hide
            );
            g.hasRendered && (c2 && b.attr({ x: b.startXPos, y: b.startYPos }), b.placed = true);
          }
          var r = [];
          a3.compose = function(a4) {
            if (-1 === r.indexOf(a4)) {
              var b = a4.prototype;
              r.push(a4);
              b.alignDataLabel = f;
              b.drawDataLabels = u2;
              b.justifyDataLabel = t;
              b.setDataLabelStartPos = C;
            }
          };
        })(h || (h = {}));
        "";
        return h;
      });
      M(a, "Series/Column/ColumnDataLabel.js", [a["Core/Series/DataLabel.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function(a2, u, z) {
        var v = u.series, y = z.merge, G = z.pick, H;
        (function(u2) {
          function q(a3, e, c, h, f) {
            var k = this.chart.inverted, n2 = a3.series, q2 = (n2.xAxis ? n2.xAxis.len : this.chart.plotSizeX) || 0;
            n2 = (n2.yAxis ? n2.yAxis.len : this.chart.plotSizeY) || 0;
            var t = a3.dlBox || a3.shapeArgs, u3 = G(a3.below, a3.plotY > G(this.translatedThreshold, n2)), C = G(c.inside, !!this.options.stacking);
            t && (h = y(t), 0 > h.y && (h.height += h.y, h.y = 0), t = h.y + h.height - n2, 0 < t && t < h.height && (h.height -= t), k && (h = { x: n2 - h.y - h.height, y: q2 - h.x - h.width, width: h.height, height: h.width }), C || (k ? (h.x += u3 ? 0 : h.width, h.width = 0) : (h.y += u3 ? h.height : 0, h.height = 0)));
            c.align = G(c.align, !k || C ? "center" : u3 ? "right" : "left");
            c.verticalAlign = G(c.verticalAlign, k || C ? "middle" : u3 ? "top" : "bottom");
            v.prototype.alignDataLabel.call(this, a3, e, c, h, f);
            c.inside && a3.contrastColor && e.css({ color: a3.contrastColor });
          }
          var n = [];
          u2.compose = function(k) {
            a2.compose(v);
            -1 === n.indexOf(k) && (n.push(k), k.prototype.alignDataLabel = q);
          };
        })(H || (H = {}));
        return H;
      });
      M(a, "Series/Bar/BarSeries.js", [a["Series/Column/ColumnSeries.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function(a2, u, z) {
        var v = this && this.__extends || /* @__PURE__ */ function() {
          var a3 = function(v2, q) {
            a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, k) {
              a4.__proto__ = k;
            } || function(a4, k) {
              for (var e in k)
                k.hasOwnProperty(e) && (a4[e] = k[e]);
            };
            return a3(v2, q);
          };
          return function(v2, q) {
            function n() {
              this.constructor = v2;
            }
            a3(v2, q);
            v2.prototype = null === q ? Object.create(q) : (n.prototype = q.prototype, new n());
          };
        }(), y = z.extend, G = z.merge;
        z = function(u2) {
          function y2() {
            var a3 = null !== u2 && u2.apply(this, arguments) || this;
            a3.data = void 0;
            a3.options = void 0;
            a3.points = void 0;
            return a3;
          }
          v(y2, u2);
          y2.defaultOptions = G(
            a2.defaultOptions,
            {}
          );
          return y2;
        }(a2);
        y(z.prototype, { inverted: true });
        u.registerSeriesType("bar", z);
        "";
        return z;
      });
      M(a, "Series/Scatter/ScatterSeries.js", [a["Series/Column/ColumnSeries.js"], a["Series/Line/LineSeries.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function(a2, u, z, F) {
        var v = this && this.__extends || /* @__PURE__ */ function() {
          var a3 = function(n, k) {
            a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, c) {
              a4.__proto__ = c;
            } || function(a4, c) {
              for (var e in c)
                c.hasOwnProperty(e) && (a4[e] = c[e]);
            };
            return a3(n, k);
          };
          return function(n, k) {
            function e() {
              this.constructor = n;
            }
            a3(n, k);
            n.prototype = null === k ? Object.create(k) : (e.prototype = k.prototype, new e());
          };
        }(), G = F.addEvent, H = F.extend, A = F.merge;
        F = function(a3) {
          function n() {
            var k = null !== a3 && a3.apply(this, arguments) || this;
            k.data = void 0;
            k.options = void 0;
            k.points = void 0;
            return k;
          }
          v(n, a3);
          n.prototype.applyJitter = function() {
            var a4 = this, e = this.options.jitter, c = this.points.length;
            e && this.points.forEach(function(h, f) {
              ["x", "y"].forEach(function(k, n2) {
                var p = "plot" + k.toUpperCase();
                if (e[k] && !h.isNull) {
                  var q = a4[k + "Axis"];
                  var v2 = e[k] * q.transA;
                  if (q && !q.isLog) {
                    var u2 = Math.max(0, h[p] - v2);
                    q = Math.min(q.len, h[p] + v2);
                    n2 = 1e4 * Math.sin(f + n2 * c);
                    h[p] = u2 + (q - u2) * (n2 - Math.floor(n2));
                    "x" === k && (h.clientX = h.plotX);
                  }
                }
              });
            });
          };
          n.prototype.drawGraph = function() {
            this.options.lineWidth ? a3.prototype.drawGraph.call(this) : this.graph && (this.graph = this.graph.destroy());
          };
          n.defaultOptions = A(u.defaultOptions, { lineWidth: 0, findNearestPointBy: "xy", jitter: { x: 0, y: 0 }, marker: { enabled: true }, tooltip: {
            headerFormat: '<span style="color:{point.color}">●</span> <span style="font-size: 10px"> {series.name}</span><br/>',
            pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
          } });
          return n;
        }(u);
        H(F.prototype, { drawTracker: a2.prototype.drawTracker, sorted: false, requireSorting: false, noSharedTooltip: true, trackerGroups: ["group", "markerGroup", "dataLabelsGroup"], takeOrdinalPosition: false });
        G(F, "afterTranslate", function() {
          this.applyJitter();
        });
        z.registerSeriesType("scatter", F);
        "";
        return F;
      });
      M(a, "Series/CenteredUtilities.js", [a["Core/Globals.js"], a["Core/Series/Series.js"], a["Core/Utilities.js"]], function(a2, u, z) {
        var v = a2.deg2rad, y = z.isNumber, G = z.pick, H = z.relativeLength, A;
        (function(a3) {
          a3.getCenter = function() {
            var a4 = this.options, k = this.chart, e = 2 * (a4.slicedOffset || 0), c = k.plotWidth - 2 * e, h = k.plotHeight - 2 * e, f = a4.center, q = Math.min(c, h), p = a4.size, v2 = a4.innerSize || 0;
            "string" === typeof p && (p = parseFloat(p));
            "string" === typeof v2 && (v2 = parseFloat(v2));
            a4 = [G(f[0], "50%"), G(f[1], "50%"), G(p && 0 > p ? void 0 : a4.size, "100%"), G(v2 && 0 > v2 ? void 0 : a4.innerSize || 0, "0%")];
            !k.angular || this instanceof u || (a4[3] = 0);
            for (f = 0; 4 > f; ++f)
              p = a4[f], k = 2 > f || 2 === f && /%$/.test(p), a4[f] = H(p, [c, h, q, a4[2]][f]) + (k ? e : 0);
            a4[3] > a4[2] && (a4[3] = a4[2]);
            return a4;
          };
          a3.getStartAndEndRadians = function(a4, k) {
            a4 = y(a4) ? a4 : 0;
            k = y(k) && k > a4 && 360 > k - a4 ? k : a4 + 360;
            return { start: v * (a4 + -90), end: v * (k + -90) };
          };
        })(A || (A = {}));
        "";
        return A;
      });
      M(a, "Series/Pie/PiePoint.js", [a["Core/Animation/AnimationUtilities.js"], a["Core/Series/Point.js"], a["Core/Utilities.js"]], function(a2, u, z) {
        var v = this && this.__extends || /* @__PURE__ */ function() {
          var a3 = function(e, c) {
            a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, c2) {
              a4.__proto__ = c2;
            } || function(a4, c2) {
              for (var e2 in c2)
                c2.hasOwnProperty(e2) && (a4[e2] = c2[e2]);
            };
            return a3(e, c);
          };
          return function(e, c) {
            function h() {
              this.constructor = e;
            }
            a3(e, c);
            e.prototype = null === c ? Object.create(c) : (h.prototype = c.prototype, new h());
          };
        }(), y = a2.setAnimation, G = z.addEvent, H = z.defined;
        a2 = z.extend;
        var A = z.isNumber, q = z.pick, n = z.relativeLength;
        u = function(a3) {
          function e() {
            var c = null !== a3 && a3.apply(this, arguments) || this;
            c.labelDistance = void 0;
            c.options = void 0;
            c.series = void 0;
            return c;
          }
          v(e, a3);
          e.prototype.getConnectorPath = function() {
            var a4 = this.labelPosition, e2 = this.series.options.dataLabels, f = this.connectorShapes, k = e2.connectorShape;
            f[k] && (k = f[k]);
            return k.call(this, { x: a4.final.x, y: a4.final.y, alignment: a4.alignment }, a4.connectorPosition, e2);
          };
          e.prototype.getTranslate = function() {
            return this.sliced ? this.slicedTranslation : { translateX: 0, translateY: 0 };
          };
          e.prototype.haloPath = function(a4) {
            var c = this.shapeArgs;
            return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(c.x, c.y, c.r + a4, c.r + a4, { innerR: c.r - 1, start: c.start, end: c.end });
          };
          e.prototype.init = function() {
            var c = this;
            a3.prototype.init.apply(
              this,
              arguments
            );
            this.name = q(this.name, "Slice");
            var e2 = function(a4) {
              c.slice("select" === a4.type);
            };
            G(this, "select", e2);
            G(this, "unselect", e2);
            return this;
          };
          e.prototype.isValid = function() {
            return A(this.y) && 0 <= this.y;
          };
          e.prototype.setVisible = function(a4, e2) {
            var c = this, h = this.series, k = h.chart, n2 = h.options.ignoreHiddenPoint;
            e2 = q(e2, n2);
            a4 !== this.visible && (this.visible = this.options.visible = a4 = "undefined" === typeof a4 ? !this.visible : a4, h.options.data[h.data.indexOf(this)] = this.options, ["graphic", "dataLabel", "connector", "shadowGroup"].forEach(function(e3) {
              if (c[e3])
                c[e3][a4 ? "show" : "hide"](a4);
            }), this.legendItem && k.legend.colorizeItem(this, a4), a4 || "hover" !== this.state || this.setState(""), n2 && (h.isDirty = true), e2 && k.redraw());
          };
          e.prototype.slice = function(a4, e2, f) {
            var c = this.series;
            y(f, c.chart);
            q(e2, true);
            this.sliced = this.options.sliced = H(a4) ? a4 : !this.sliced;
            c.options.data[c.data.indexOf(this)] = this.options;
            this.graphic && this.graphic.animate(this.getTranslate());
            this.shadowGroup && this.shadowGroup.animate(this.getTranslate());
          };
          return e;
        }(u);
        a2(u.prototype, { connectorShapes: { fixedOffset: function(a3, e, c) {
          var h = e.breakAt;
          e = e.touchingSliceAt;
          return [["M", a3.x, a3.y], c.softConnector ? ["C", a3.x + ("left" === a3.alignment ? -5 : 5), a3.y, 2 * h.x - e.x, 2 * h.y - e.y, h.x, h.y] : ["L", h.x, h.y], ["L", e.x, e.y]];
        }, straight: function(a3, e) {
          e = e.touchingSliceAt;
          return [["M", a3.x, a3.y], ["L", e.x, e.y]];
        }, crookedLine: function(a3, e, c) {
          e = e.touchingSliceAt;
          var h = this.series, f = h.center[0], k = h.chart.plotWidth, p = h.chart.plotLeft;
          h = a3.alignment;
          var q2 = this.shapeArgs.r;
          c = n(c.crookDistance, 1);
          k = "left" === h ? f + q2 + (k + p - f - q2) * (1 - c) : p + (f - q2) * c;
          c = ["L", k, a3.y];
          f = true;
          if ("left" === h ? k > a3.x || k < e.x : k < a3.x || k > e.x)
            f = false;
          a3 = [["M", a3.x, a3.y]];
          f && a3.push(c);
          a3.push(["L", e.x, e.y]);
          return a3;
        } } });
        return u;
      });
      M(a, "Series/Pie/PieSeries.js", [a["Series/CenteredUtilities.js"], a["Series/Column/ColumnSeries.js"], a["Core/Globals.js"], a["Core/Legend/LegendSymbol.js"], a["Series/Pie/PiePoint.js"], a["Core/Series/Series.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Renderer/SVG/Symbols.js"], a["Core/Utilities.js"]], function(a2, u, z, F, y, G, H, A, q) {
        var n = this && this.__extends || /* @__PURE__ */ function() {
          var a3 = function(c2, e2) {
            a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, c3) {
              a4.__proto__ = c3;
            } || function(a4, c3) {
              for (var e3 in c3)
                c3.hasOwnProperty(e3) && (a4[e3] = c3[e3]);
            };
            return a3(c2, e2);
          };
          return function(c2, e2) {
            function f2() {
              this.constructor = c2;
            }
            a3(c2, e2);
            c2.prototype = null === e2 ? Object.create(e2) : (f2.prototype = e2.prototype, new f2());
          };
        }(), k = a2.getStartAndEndRadians;
        z = z.noop;
        var e = q.clamp, c = q.extend, h = q.fireEvent, f = q.merge, v = q.pick, p = q.relativeLength;
        q = function(a3) {
          function c2() {
            var c3 = null !== a3 && a3.apply(this, arguments) || this;
            c3.center = void 0;
            c3.data = void 0;
            c3.maxLabelDistance = void 0;
            c3.options = void 0;
            c3.points = void 0;
            return c3;
          }
          n(c2, a3);
          c2.prototype.animate = function(a4) {
            var c3 = this, e2 = c3.points, f2 = c3.startAngleRad;
            a4 || e2.forEach(function(a5) {
              var b = a5.graphic, d = a5.shapeArgs;
              b && d && (b.attr({ r: v(a5.startR, c3.center && c3.center[3] / 2), start: f2, end: f2 }), b.animate({ r: d.r, start: d.start, end: d.end }, c3.options.animation));
            });
          };
          c2.prototype.drawEmpty = function() {
            var a4 = this.startAngleRad, c3 = this.endAngleRad, e2 = this.options;
            if (0 === this.total && this.center) {
              var f2 = this.center[0];
              var b = this.center[1];
              this.graph || (this.graph = this.chart.renderer.arc(f2, b, this.center[1] / 2, 0, a4, c3).addClass("highcharts-empty-series").add(this.group));
              this.graph.attr({ d: A.arc(f2, b, this.center[2] / 2, 0, { start: a4, end: c3, innerR: this.center[3] / 2 }) });
              this.chart.styledMode || this.graph.attr({ "stroke-width": e2.borderWidth, fill: e2.fillColor || "none", stroke: e2.color || "#cccccc" });
            } else
              this.graph && (this.graph = this.graph.destroy());
          };
          c2.prototype.drawPoints = function() {
            var a4 = this.chart.renderer;
            this.points.forEach(function(c3) {
              c3.graphic && c3.hasNewShapeType() && (c3.graphic = c3.graphic.destroy());
              c3.graphic || (c3.graphic = a4[c3.shapeType](c3.shapeArgs).add(c3.series.group), c3.delayedRendering = true);
            });
          };
          c2.prototype.generatePoints = function() {
            a3.prototype.generatePoints.call(this);
            this.updateTotals();
          };
          c2.prototype.getX = function(a4, c3, f2) {
            var h2 = this.center, b = this.radii ? this.radii[f2.index] || 0 : h2[2] / 2;
            a4 = Math.asin(e((a4 - h2[1]) / (b + f2.labelDistance), -1, 1));
            return h2[0] + (c3 ? -1 : 1) * Math.cos(a4) * (b + f2.labelDistance) + (0 < f2.labelDistance ? (c3 ? -1 : 1) * this.options.dataLabels.padding : 0);
          };
          c2.prototype.hasData = function() {
            return !!this.processedXData.length;
          };
          c2.prototype.redrawPoints = function() {
            var a4 = this, c3 = a4.chart, e2 = c3.renderer, h2 = a4.options.shadow, b, g, d, k2;
            this.drawEmpty();
            !h2 || a4.shadowGroup || c3.styledMode || (a4.shadowGroup = e2.g("shadow").attr({ zIndex: -1 }).add(a4.group));
            a4.points.forEach(function(l) {
              var m = {};
              g = l.graphic;
              if (!l.isNull && g) {
                var n2 = void 0;
                k2 = l.shapeArgs;
                b = l.getTranslate();
                c3.styledMode || (n2 = l.shadowGroup, h2 && !n2 && (n2 = l.shadowGroup = e2.g("shadow").add(a4.shadowGroup)), n2 && n2.attr(b), d = a4.pointAttribs(l, l.selected && "select"));
                l.delayedRendering ? (g.setRadialReference(a4.center).attr(k2).attr(b), c3.styledMode || g.attr(d).attr({ "stroke-linejoin": "round" }).shadow(h2, n2), l.delayedRendering = false) : (g.setRadialReference(a4.center), c3.styledMode || f(true, m, d), f(true, m, k2, b), g.animate(m));
                g.attr({ visibility: l.visible ? "inherit" : "hidden" });
                g.addClass(l.getClassName(), true);
              } else
                g && (l.graphic = g.destroy());
            });
          };
          c2.prototype.sortByAngle = function(a4, c3) {
            a4.sort(function(a5, e2) {
              return "undefined" !== typeof a5.angle && (e2.angle - a5.angle) * c3;
            });
          };
          c2.prototype.translate = function(a4) {
            this.generatePoints();
            var c3 = this.options, e2 = c3.slicedOffset, f2 = e2 + (c3.borderWidth || 0), b = k(c3.startAngle, c3.endAngle), g = this.startAngleRad = b.start;
            b = (this.endAngleRad = b.end) - g;
            var d = this.points, m = c3.dataLabels.distance;
            c3 = c3.ignoreHiddenPoint;
            var n2 = d.length, q2, t = 0;
            a4 || (this.center = a4 = this.getCenter());
            for (q2 = 0; q2 < n2; q2++) {
              var u2 = d[q2];
              var w = g + t * b;
              !u2.isValid() || c3 && !u2.visible || (t += u2.percentage / 100);
              var y2 = g + t * b;
              var B = { x: a4[0], y: a4[1], r: a4[2] / 2, innerR: a4[3] / 2, start: Math.round(1e3 * w) / 1e3, end: Math.round(1e3 * y2) / 1e3 };
              u2.shapeType = "arc";
              u2.shapeArgs = B;
              u2.labelDistance = v(u2.options.dataLabels && u2.options.dataLabels.distance, m);
              u2.labelDistance = p(u2.labelDistance, B.r);
              this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, u2.labelDistance);
              y2 = (y2 + w) / 2;
              y2 > 1.5 * Math.PI ? y2 -= 2 * Math.PI : y2 < -Math.PI / 2 && (y2 += 2 * Math.PI);
              u2.slicedTranslation = { translateX: Math.round(Math.cos(y2) * e2), translateY: Math.round(Math.sin(y2) * e2) };
              B = Math.cos(y2) * a4[2] / 2;
              var A2 = Math.sin(y2) * a4[2] / 2;
              u2.tooltipPos = [a4[0] + 0.7 * B, a4[1] + 0.7 * A2];
              u2.half = y2 < -Math.PI / 2 || y2 > Math.PI / 2 ? 1 : 0;
              u2.angle = y2;
              w = Math.min(f2, u2.labelDistance / 5);
              u2.labelPosition = { natural: { x: a4[0] + B + Math.cos(y2) * u2.labelDistance, y: a4[1] + A2 + Math.sin(y2) * u2.labelDistance }, "final": {}, alignment: 0 > u2.labelDistance ? "center" : u2.half ? "right" : "left", connectorPosition: { breakAt: { x: a4[0] + B + Math.cos(y2) * w, y: a4[1] + A2 + Math.sin(y2) * w }, touchingSliceAt: { x: a4[0] + B, y: a4[1] + A2 } } };
            }
            h(this, "afterTranslate");
          };
          c2.prototype.updateTotals = function() {
            var a4 = this.points, c3 = a4.length, e2 = this.options.ignoreHiddenPoint, f2, b = 0;
            for (f2 = 0; f2 < c3; f2++) {
              var g = a4[f2];
              !g.isValid() || e2 && !g.visible || (b += g.y);
            }
            this.total = b;
            for (f2 = 0; f2 < c3; f2++)
              g = a4[f2], g.percentage = 0 < b && (g.visible || !e2) ? g.y / b * 100 : 0, g.total = b;
          };
          c2.defaultOptions = f(G.defaultOptions, {
            center: [null, null],
            clip: false,
            colorByPoint: true,
            dataLabels: { allowOverlap: true, connectorPadding: 5, connectorShape: "fixedOffset", crookDistance: "70%", distance: 30, enabled: true, formatter: function() {
              return this.point.isNull ? void 0 : this.point.name;
            }, softConnector: true, x: 0 },
            fillColor: void 0,
            ignoreHiddenPoint: true,
            inactiveOtherPoints: true,
            legendType: "point",
            marker: null,
            size: null,
            showInLegend: false,
            slicedOffset: 10,
            stickyTracking: false,
            tooltip: { followPointer: true },
            borderColor: "#ffffff",
            borderWidth: 1,
            lineWidth: void 0,
            states: { hover: { brightness: 0.1 } }
          });
          return c2;
        }(G);
        c(q.prototype, { axisTypes: [], directTouch: true, drawGraph: void 0, drawLegendSymbol: F.drawRectangle, drawTracker: u.prototype.drawTracker, getCenter: a2.getCenter, getSymbol: z, isCartesian: false, noSharedTooltip: true, pointAttribs: u.prototype.pointAttribs, pointClass: y, requireSorting: false, searchPoint: z, trackerGroups: ["group", "dataLabelsGroup"] });
        H.registerSeriesType("pie", q);
        "";
        return q;
      });
      M(a, "Series/Pie/PieDataLabel.js", [
        a["Core/Series/DataLabel.js"],
        a["Core/Globals.js"],
        a["Core/Renderer/RendererUtilities.js"],
        a["Core/Series/SeriesRegistry.js"],
        a["Core/Utilities.js"]
      ], function(a2, u, z, F, y) {
        var v = u.noop, H = z.distribute, A = F.series, q = y.arrayMax, n = y.clamp, k = y.defined, e = y.merge, c = y.pick, h = y.relativeLength, f;
        (function(f2) {
          function p() {
            var a3 = this, f3 = a3.data, b = a3.chart, g = a3.options.dataLabels || {}, d = g.connectorPadding, h2 = b.plotWidth, n2 = b.plotHeight, p2 = b.plotLeft, v2 = Math.round(b.chartWidth / 3), t2 = a3.center, u3 = t2[2] / 2, w2 = t2[1], C2 = [[], []], y2 = [0, 0, 0, 0], B = a3.dataLabelPositioners, z2, F2, G, J, M2, E, T, N, V, W, X, R;
            a3.visible && (g.enabled || a3._hasPointLabels) && (f3.forEach(function(a4) {
              a4.dataLabel && a4.visible && a4.dataLabel.shortened && (a4.dataLabel.attr({ width: "auto" }).css({ width: "auto", textOverflow: "clip" }), a4.dataLabel.shortened = false);
            }), A.prototype.drawDataLabels.apply(a3), f3.forEach(function(a4) {
              a4.dataLabel && (a4.visible ? (C2[a4.half].push(a4), a4.dataLabel._pos = null, !k(g.style.width) && !k(a4.options.dataLabels && a4.options.dataLabels.style && a4.options.dataLabels.style.width) && a4.dataLabel.getBBox().width > v2 && (a4.dataLabel.css({ width: Math.round(0.7 * v2) + "px" }), a4.dataLabel.shortened = true)) : (a4.dataLabel = a4.dataLabel.destroy(), a4.dataLabels && 1 === a4.dataLabels.length && delete a4.dataLabels));
            }), C2.forEach(function(e2, f4) {
              var l = e2.length, m = [], r;
              if (l) {
                a3.sortByAngle(e2, f4 - 0.5);
                if (0 < a3.maxLabelDistance) {
                  var q2 = Math.max(0, w2 - u3 - a3.maxLabelDistance);
                  var v3 = Math.min(w2 + u3 + a3.maxLabelDistance, b.plotHeight);
                  e2.forEach(function(a4) {
                    0 < a4.labelDistance && a4.dataLabel && (a4.top = Math.max(0, w2 - u3 - a4.labelDistance), a4.bottom = Math.min(w2 + u3 + a4.labelDistance, b.plotHeight), r = a4.dataLabel.getBBox().height || 21, a4.distributeBox = { target: a4.labelPosition.natural.y - a4.top + r / 2, size: r, rank: a4.y }, m.push(a4.distributeBox));
                  });
                  q2 = v3 + r - q2;
                  H(m, q2, q2 / 5);
                }
                for (X = 0; X < l; X++) {
                  z2 = e2[X];
                  E = z2.labelPosition;
                  J = z2.dataLabel;
                  W = false === z2.visible ? "hidden" : "inherit";
                  V = q2 = E.natural.y;
                  m && k(z2.distributeBox) && ("undefined" === typeof z2.distributeBox.pos ? W = "hidden" : (T = z2.distributeBox.size, V = B.radialDistributionY(z2)));
                  delete z2.positionIndex;
                  if (g.justify)
                    N = B.justify(z2, u3, t2);
                  else
                    switch (g.alignTo) {
                      case "connectors":
                        N = B.alignToConnectors(e2, f4, h2, p2);
                        break;
                      case "plotEdges":
                        N = B.alignToPlotEdges(J, f4, h2, p2);
                        break;
                      default:
                        N = B.radialDistributionX(a3, z2, V, q2);
                    }
                  J._attr = { visibility: W, align: E.alignment };
                  R = z2.options.dataLabels || {};
                  J._pos = { x: N + c(R.x, g.x) + ({ left: d, right: -d }[E.alignment] || 0), y: V + c(R.y, g.y) - 10 };
                  E.final.x = N;
                  E.final.y = V;
                  c(g.crop, true) && (M2 = J.getBBox().width, q2 = null, N - M2 < d && 1 === f4 ? (q2 = Math.round(M2 - N + d), y2[3] = Math.max(q2, y2[3])) : N + M2 > h2 - d && 0 === f4 && (q2 = Math.round(N + M2 - h2 + d), y2[1] = Math.max(q2, y2[1])), 0 > V - T / 2 ? y2[0] = Math.max(Math.round(-V + T / 2), y2[0]) : V + T / 2 > n2 && (y2[2] = Math.max(Math.round(V + T / 2 - n2), y2[2])), J.sideOverflow = q2);
                }
              }
            }), 0 === q(y2) || this.verifyDataLabelOverflow(y2)) && (this.placeDataLabels(), this.points.forEach(function(d2) {
              R = e(g, d2.options.dataLabels);
              if (F2 = c(R.connectorWidth, 1)) {
                var f4;
                G = d2.connector;
                if ((J = d2.dataLabel) && J._pos && d2.visible && 0 < d2.labelDistance) {
                  W = J._attr.visibility;
                  if (f4 = !G)
                    d2.connector = G = b.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + d2.colorIndex + (d2.className ? " " + d2.className : "")).add(a3.dataLabelsGroup), b.styledMode || G.attr({ "stroke-width": F2, stroke: R.connectorColor || d2.color || "#666666" });
                  G[f4 ? "attr" : "animate"]({ d: d2.getConnectorPath() });
                  G.attr("visibility", W);
                } else
                  G && (d2.connector = G.destroy());
              }
            }));
          }
          function u2() {
            this.points.forEach(function(a3) {
              var c2 = a3.dataLabel, b;
              c2 && a3.visible && ((b = c2._pos) ? (c2.sideOverflow && (c2._attr.width = Math.max(c2.getBBox().width - c2.sideOverflow, 0), c2.css({ width: c2._attr.width + "px", textOverflow: (this.options.dataLabels.style || {}).textOverflow || "ellipsis" }), c2.shortened = true), c2.attr(c2._attr), c2[c2.moved ? "animate" : "attr"](b), c2.moved = true) : c2 && c2.attr({ y: -9999 }));
              delete a3.distributeBox;
            }, this);
          }
          function t(a3) {
            var c2 = this.center, b = this.options, e2 = b.center, d = b.minSize || 80, f3 = null !== b.size;
            if (!f3) {
              if (null !== e2[0])
                var k2 = Math.max(c2[2] - Math.max(a3[1], a3[3]), d);
              else
                k2 = Math.max(c2[2] - a3[1] - a3[3], d), c2[0] += (a3[3] - a3[1]) / 2;
              null !== e2[1] ? k2 = n(k2, d, c2[2] - Math.max(a3[0], a3[2])) : (k2 = n(k2, d, c2[2] - a3[0] - a3[2]), c2[1] += (a3[0] - a3[2]) / 2);
              k2 < c2[2] ? (c2[2] = k2, c2[3] = Math.min(h(b.innerSize || 0, k2), k2), this.translate(c2), this.drawDataLabels && this.drawDataLabels()) : f3 = true;
            }
            return f3;
          }
          var w = [], C = { radialDistributionY: function(a3) {
            return a3.top + a3.distributeBox.pos;
          }, radialDistributionX: function(a3, c2, b, e2) {
            return a3.getX(b < c2.top + 2 || b > c2.bottom - 2 ? e2 : b, c2.half, c2);
          }, justify: function(a3, c2, b) {
            return b[0] + (a3.half ? -1 : 1) * (c2 + a3.labelDistance);
          }, alignToPlotEdges: function(a3, c2, b, e2) {
            a3 = a3.getBBox().width;
            return c2 ? a3 + e2 : b - a3 - e2;
          }, alignToConnectors: function(a3, c2, b, e2) {
            var d = 0, g;
            a3.forEach(function(a4) {
              g = a4.dataLabel.getBBox().width;
              g > d && (d = g);
            });
            return c2 ? d + e2 : b - d - e2;
          } };
          f2.compose = function(c2) {
            a2.compose(A);
            -1 === w.indexOf(c2) && (w.push(c2), c2 = c2.prototype, c2.dataLabelPositioners = C, c2.alignDataLabel = v, c2.drawDataLabels = p, c2.placeDataLabels = u2, c2.verifyDataLabelOverflow = t);
          };
        })(f || (f = {}));
        return f;
      });
      M(a, "Extensions/OverlappingDataLabels.js", [a["Core/Chart/Chart.js"], a["Core/Utilities.js"]], function(a2, u) {
        function v(a3, k) {
          var e = false;
          if (a3) {
            var c = a3.newOpacity;
            a3.oldOpacity !== c && (a3.alignAttr && a3.placed ? (a3[c ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), e = true, a3.alignAttr.opacity = c, a3[a3.isOld ? "animate" : "attr"](a3.alignAttr, null, function() {
              k.styledMode || a3.css({ pointerEvents: c ? "auto" : "none" });
            }), y(k, "afterHideOverlappingLabel")) : a3.attr({ opacity: c }));
            a3.isOld = true;
          }
          return e;
        }
        var F = u.addEvent, y = u.fireEvent, G = u.isArray, H = u.isNumber, A = u.objectEach, q = u.pick;
        F(a2, "render", function() {
          var a3 = this, k = [];
          (this.labelCollectors || []).forEach(function(a4) {
            k = k.concat(a4());
          });
          (this.yAxis || []).forEach(function(a4) {
            a4.stacking && a4.options.stackLabels && !a4.options.stackLabels.allowOverlap && A(a4.stacking.stacks, function(a5) {
              A(a5, function(a6) {
                a6.label && "hidden" !== a6.label.visibility && k.push(a6.label);
              });
            });
          });
          (this.series || []).forEach(function(e) {
            var c = e.options.dataLabels;
            e.visible && (false !== c.enabled || e._hasPointLabels) && (c = function(c2) {
              return c2.forEach(function(c3) {
                c3.visible && (G(c3.dataLabels) ? c3.dataLabels : c3.dataLabel ? [c3.dataLabel] : []).forEach(function(e2) {
                  var f = e2.options;
                  e2.labelrank = q(f.labelrank, c3.labelrank, c3.shapeArgs && c3.shapeArgs.height);
                  f.allowOverlap ? (e2.oldOpacity = e2.opacity, e2.newOpacity = 1, v(e2, a3)) : k.push(e2);
                });
              });
            }, c(e.nodes || []), c(e.points));
          });
          this.hideOverlappingLabels(k);
        });
        a2.prototype.hideOverlappingLabels = function(a3) {
          var k = this, e = a3.length, c = k.renderer, h, f, n, p = false;
          var q2 = function(a4) {
            var e2, f2 = a4.box ? 0 : a4.padding || 0, b = e2 = 0, g;
            if (a4 && (!a4.alignAttr || a4.placed)) {
              var d = a4.alignAttr || { x: a4.attr("x"), y: a4.attr("y") };
              var h2 = a4.parentGroup;
              a4.width || (e2 = a4.getBBox(), a4.width = e2.width, a4.height = e2.height, e2 = c.fontMetrics(null, a4.element).h);
              var k2 = a4.width - 2 * f2;
              (g = { left: "0", center: "0.5", right: "1" }[a4.alignValue]) ? b = +g * k2 : H(a4.x) && Math.round(a4.x) !== a4.translateX && (b = a4.x - a4.translateX);
              return { x: d.x + (h2.translateX || 0) + f2 - (b || 0), y: d.y + (h2.translateY || 0) + f2 - e2, width: a4.width - 2 * f2, height: a4.height - 2 * f2 };
            }
          };
          for (f = 0; f < e; f++)
            if (h = a3[f])
              h.oldOpacity = h.opacity, h.newOpacity = 1, h.absoluteBox = q2(h);
          a3.sort(function(a4, c2) {
            return (c2.labelrank || 0) - (a4.labelrank || 0);
          });
          for (f = 0; f < e; f++) {
            var t = (q2 = a3[f]) && q2.absoluteBox;
            for (h = f + 1; h < e; ++h) {
              var u2 = (n = a3[h]) && n.absoluteBox;
              !t || !u2 || q2 === n || 0 === q2.newOpacity || 0 === n.newOpacity || u2.x >= t.x + t.width || u2.x + u2.width <= t.x || u2.y >= t.y + t.height || u2.y + u2.height <= t.y || ((q2.labelrank < n.labelrank ? q2 : n).newOpacity = 0);
            }
          }
          a3.forEach(function(a4) {
            v(a4, k) && (p = true);
          });
          p && y(k, "afterHideAllOverlappingLabels");
        };
      });
      M(
        a,
        "Core/Responsive.js",
        [a["Core/Utilities.js"]],
        function(a2) {
          var v = a2.extend, z = a2.find, F = a2.isArray, y = a2.isObject, G = a2.merge, H = a2.objectEach, A = a2.pick, q = a2.splat, n = a2.uniqueKey, k;
          (function(a3) {
            var c = [];
            a3.compose = function(a4) {
              -1 === c.indexOf(a4) && (c.push(a4), v(a4.prototype, e.prototype));
              return a4;
            };
            var e = function() {
              function a4() {
              }
              a4.prototype.currentOptions = function(a5) {
                function c2(a6, f2, h, k2) {
                  var b;
                  H(a6, function(a7, d) {
                    if (!k2 && -1 < e2.collectionsWithUpdate.indexOf(d) && f2[d])
                      for (a7 = q(a7), h[d] = [], b = 0; b < Math.max(a7.length, f2[d].length); b++)
                        f2[d][b] && (void 0 === a7[b] ? h[d][b] = f2[d][b] : (h[d][b] = {}, c2(a7[b], f2[d][b], h[d][b], k2 + 1)));
                    else
                      y(a7) ? (h[d] = F(a7) ? [] : {}, c2(a7, f2[d] || {}, h[d], k2 + 1)) : h[d] = "undefined" === typeof f2[d] ? null : f2[d];
                  });
                }
                var e2 = this, f = {};
                c2(a5, this.options, f, 0);
                return f;
              };
              a4.prototype.matchResponsiveRule = function(a5, c2) {
                var e2 = a5.condition;
                (e2.callback || function() {
                  return this.chartWidth <= A(e2.maxWidth, Number.MAX_VALUE) && this.chartHeight <= A(e2.maxHeight, Number.MAX_VALUE) && this.chartWidth >= A(e2.minWidth, 0) && this.chartHeight >= A(e2.minHeight, 0);
                }).call(this) && c2.push(a5._id);
              };
              a4.prototype.setResponsive = function(a5, c2) {
                var e2 = this, f = this.options.responsive, h = this.currentResponsive, k2 = [];
                !c2 && f && f.rules && f.rules.forEach(function(a6) {
                  "undefined" === typeof a6._id && (a6._id = n());
                  e2.matchResponsiveRule(a6, k2);
                }, this);
                c2 = G.apply(void 0, k2.map(function(a6) {
                  return z((f || {}).rules || [], function(c3) {
                    return c3._id === a6;
                  });
                }).map(function(a6) {
                  return a6 && a6.chartOptions;
                }));
                c2.isResponsiveOptions = true;
                k2 = k2.toString() || void 0;
                k2 !== (h && h.ruleIds) && (h && this.update(h.undoOptions, a5, true), k2 ? (h = this.currentOptions(c2), h.isResponsiveOptions = true, this.currentResponsive = { ruleIds: k2, mergedOptions: c2, undoOptions: h }, this.update(c2, a5, true)) : this.currentResponsive = void 0);
              };
              return a4;
            }();
          })(k || (k = {}));
          "";
          "";
          return k;
        }
      );
      M(a, "masters/highcharts.src.js", [
        a["Core/Globals.js"],
        a["Core/Utilities.js"],
        a["Core/DefaultOptions.js"],
        a["Core/Animation/Fx.js"],
        a["Core/Animation/AnimationUtilities.js"],
        a["Core/Renderer/HTML/AST.js"],
        a["Core/FormatUtilities.js"],
        a["Core/Renderer/RendererUtilities.js"],
        a["Core/Renderer/SVG/SVGElement.js"],
        a["Core/Renderer/SVG/SVGRenderer.js"],
        a["Core/Renderer/HTML/HTMLElement.js"],
        a["Core/Renderer/HTML/HTMLRenderer.js"],
        a["Core/Axis/Axis.js"],
        a["Core/Axis/DateTimeAxis.js"],
        a["Core/Axis/LogarithmicAxis.js"],
        a["Core/Axis/PlotLineOrBand/PlotLineOrBand.js"],
        a["Core/Axis/Tick.js"],
        a["Core/Tooltip.js"],
        a["Core/Series/Point.js"],
        a["Core/Pointer.js"],
        a["Core/MSPointer.js"],
        a["Core/Legend/Legend.js"],
        a["Core/Chart/Chart.js"],
        a["Core/Series/Series.js"],
        a["Core/Series/SeriesRegistry.js"],
        a["Series/Column/ColumnSeries.js"],
        a["Series/Column/ColumnDataLabel.js"],
        a["Series/Pie/PieSeries.js"],
        a["Series/Pie/PieDataLabel.js"],
        a["Core/Series/DataLabel.js"],
        a["Core/Responsive.js"],
        a["Core/Color/Color.js"],
        a["Core/Time.js"]
      ], function(a2, u, z, F, y, G, H, A, q, n, k, e, c, h, f, w, p, B, t, J, C, r, l, b, g, d, m, D, x, I, M2, S, O) {
        a2.animate = y.animate;
        a2.animObject = y.animObject;
        a2.getDeferredAnimation = y.getDeferredAnimation;
        a2.setAnimation = y.setAnimation;
        a2.stop = y.stop;
        a2.timers = F.timers;
        a2.AST = G;
        a2.Axis = c;
        a2.Chart = l;
        a2.chart = l.chart;
        a2.Fx = F;
        a2.Legend = r;
        a2.PlotLineOrBand = w;
        a2.Point = t;
        a2.Pointer = C.isRequired() ? C : J;
        a2.Series = b;
        a2.SVGElement = q;
        a2.SVGRenderer = n;
        a2.Tick = p;
        a2.Time = O;
        a2.Tooltip = B;
        a2.Color = S;
        a2.color = S.parse;
        e.compose(n);
        k.compose(q);
        a2.defaultOptions = z.defaultOptions;
        a2.getOptions = z.getOptions;
        a2.time = z.defaultTime;
        a2.setOptions = z.setOptions;
        a2.dateFormat = H.dateFormat;
        a2.format = H.format;
        a2.numberFormat = H.numberFormat;
        a2.addEvent = u.addEvent;
        a2.arrayMax = u.arrayMax;
        a2.arrayMin = u.arrayMin;
        a2.attr = u.attr;
        a2.clearTimeout = u.clearTimeout;
        a2.correctFloat = u.correctFloat;
        a2.createElement = u.createElement;
        a2.css = u.css;
        a2.defined = u.defined;
        a2.destroyObjectProperties = u.destroyObjectProperties;
        a2.discardElement = u.discardElement;
        a2.distribute = A.distribute;
        a2.erase = u.erase;
        a2.error = u.error;
        a2.extend = u.extend;
        a2.extendClass = u.extendClass;
        a2.find = u.find;
        a2.fireEvent = u.fireEvent;
        a2.getMagnitude = u.getMagnitude;
        a2.getStyle = u.getStyle;
        a2.inArray = u.inArray;
        a2.isArray = u.isArray;
        a2.isClass = u.isClass;
        a2.isDOMElement = u.isDOMElement;
        a2.isFunction = u.isFunction;
        a2.isNumber = u.isNumber;
        a2.isObject = u.isObject;
        a2.isString = u.isString;
        a2.keys = u.keys;
        a2.merge = u.merge;
        a2.normalizeTickInterval = u.normalizeTickInterval;
        a2.objectEach = u.objectEach;
        a2.offset = u.offset;
        a2.pad = u.pad;
        a2.pick = u.pick;
        a2.pInt = u.pInt;
        a2.relativeLength = u.relativeLength;
        a2.removeEvent = u.removeEvent;
        a2.seriesType = g.seriesType;
        a2.splat = u.splat;
        a2.stableSort = u.stableSort;
        a2.syncTimeout = u.syncTimeout;
        a2.timeUnits = u.timeUnits;
        a2.uniqueKey = u.uniqueKey;
        a2.useSerialIds = u.useSerialIds;
        a2.wrap = u.wrap;
        m.compose(d);
        I.compose(b);
        h.compose(c);
        f.compose(c);
        x.compose(D);
        w.compose(c);
        M2.compose(l);
        return a2;
      });
      a["masters/highcharts.src.js"]._modules = a;
      return a["masters/highcharts.src.js"];
    });
  }
});

// node_modules/vue3-highcharts/dist/vue3-highcharts.common.js
var require_vue3_highcharts_common = __commonJS({
  "node_modules/vue3-highcharts/dist/vue3-highcharts.common.js"(exports, module) {
    module.exports = /******/
    function(modules) {
      var installedModules = {};
      function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
          return installedModules[moduleId].exports;
        }
        var module2 = installedModules[moduleId] = {
          /******/
          i: moduleId,
          /******/
          l: false,
          /******/
          exports: {}
          /******/
        };
        modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
        module2.l = true;
        return module2.exports;
      }
      __webpack_require__.m = modules;
      __webpack_require__.c = installedModules;
      __webpack_require__.d = function(exports2, name, getter) {
        if (!__webpack_require__.o(exports2, name)) {
          Object.defineProperty(exports2, name, { enumerable: true, get: getter });
        }
      };
      __webpack_require__.r = function(exports2) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
          Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
        }
        Object.defineProperty(exports2, "__esModule", { value: true });
      };
      __webpack_require__.t = function(value, mode) {
        if (mode & 1)
          value = __webpack_require__(value);
        if (mode & 8)
          return value;
        if (mode & 4 && typeof value === "object" && value && value.__esModule)
          return value;
        var ns = /* @__PURE__ */ Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", { enumerable: true, value });
        if (mode & 2 && typeof value != "string")
          for (var key in value)
            __webpack_require__.d(ns, key, (function(key2) {
              return value[key2];
            }).bind(null, key));
        return ns;
      };
      __webpack_require__.n = function(module2) {
        var getter = module2 && module2.__esModule ? (
          /******/
          function getDefault() {
            return module2["default"];
          }
        ) : (
          /******/
          function getModuleExports() {
            return module2;
          }
        );
        __webpack_require__.d(getter, "a", getter);
        return getter;
      };
      __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      __webpack_require__.p = "";
      return __webpack_require__(__webpack_require__.s = "fb15");
    }({
      /***/
      "0bd6": (
        /***/
        function(module2, exports2) {
          module2.exports = require_highcharts();
        }
      ),
      /***/
      "8875": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
          (function(root, factory) {
            if (true) {
              !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports2, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module2.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            } else {
            }
          })(typeof self !== "undefined" ? self : this, function() {
            function getCurrentScript() {
              var descriptor = Object.getOwnPropertyDescriptor(document, "currentScript");
              if (!descriptor && "currentScript" in document && document.currentScript) {
                return document.currentScript;
              }
              if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
                return document.currentScript;
              }
              try {
                throw new Error();
              } catch (err) {
                var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig, ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig, stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack), scriptLocation = stackDetails && stackDetails[1] || false, line = stackDetails && stackDetails[2] || false, currentLocation = document.location.href.replace(document.location.hash, ""), pageSource, inlineScriptSourceRegExp, inlineScriptSource, scripts = document.getElementsByTagName("script");
                if (scriptLocation === currentLocation) {
                  pageSource = document.documentElement.outerHTML;
                  inlineScriptSourceRegExp = new RegExp("(?:[^\\n]+?\\n){0," + (line - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*", "i");
                  inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, "$1").trim();
                }
                for (var i = 0; i < scripts.length; i++) {
                  if (scripts[i].readyState === "interactive") {
                    return scripts[i];
                  }
                  if (scripts[i].src === scriptLocation) {
                    return scripts[i];
                  }
                  if (scriptLocation === currentLocation && scripts[i].innerHTML && scripts[i].innerHTML.trim() === inlineScriptSource) {
                    return scripts[i];
                  }
                }
                return null;
              }
            }
            ;
            return getCurrentScript;
          });
        }
      ),
      /***/
      "8bbf": (
        /***/
        function(module2, exports2) {
          module2.exports = (init_vue_runtime_esm_bundler(), __toCommonJS(vue_runtime_esm_bundler_exports));
        }
      ),
      /***/
      "fb15": (
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          "use strict";
          __webpack_require__.r(__webpack_exports__);
          if (typeof window !== "undefined") {
            var currentScript = window.document.currentScript;
            if (true) {
              var getCurrentScript = __webpack_require__("8875");
              currentScript = getCurrentScript();
              if (!("currentScript" in document)) {
                Object.defineProperty(document, "currentScript", { get: getCurrentScript });
              }
            }
            var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
            if (src) {
              __webpack_require__.p = src[1];
            }
          }
          var setPublicPath = null;
          var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
          var external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_ = __webpack_require__("0bd6");
          var external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_default = __webpack_require__.n(external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_);
          const vueHighcharts = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
            name: "VueHighchart",
            props: {
              type: {
                type: String,
                default: "chart"
              },
              options: {
                type: Object,
                required: true
              },
              redrawOnUpdate: {
                type: Boolean,
                default: true
              },
              oneToOneUpdate: {
                type: Boolean,
                default: false
              },
              animateOnUpdate: {
                type: Boolean,
                default: true
              }
            },
            setup(props, { emit }) {
              const chartRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);
              const chart = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);
              const { options } = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toRefs"])(props);
              if (options.value && external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_default.a[props.type]) {
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(options, (newValue) => {
                  if (chart.value) {
                    chart.value.update(newValue, props.redrawOnUpdate, props.oneToOneOnUpdate, props.animateOnUpdate);
                    emit("updated");
                  }
                }, { deep: true });
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(() => {
                  chart.value = external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_default.a[props.type](chartRef.value, options.value, () => {
                    emit("rendered");
                  });
                });
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onUnmounted"])(() => {
                  if (chart.value)
                    chart.value.destroy();
                  emit("destroyed");
                });
              } else if (!props.options) {
                console.warn('The "options" parameter is required.');
              } else {
                console.warn(`${props.type} is not a valid highcharts type or has not been imported`);
              }
              return {
                chartRef,
                chart
              };
            },
            render() {
              return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
                class: "vue-highcharts",
                ref: "chartRef"
              });
            }
          });
          var vue3_highcharts = vueHighcharts;
          const install = (app) => {
            app.component(vue3_highcharts.name, vue3_highcharts);
          };
          vue3_highcharts.install = install;
          var src_0 = vue3_highcharts;
          var entry_lib = __webpack_exports__["default"] = src_0;
        }
      )
      /******/
    });
  }
});
export default require_vue3_highcharts_common();
//# sourceMappingURL=vue3-highcharts.js.map
