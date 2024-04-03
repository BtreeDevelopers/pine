import "./index.css";
import { defineComponent as v, computed as u, openBlock as c, createElementBlock as f, normalizeClass as h, createElementVNode as p, renderSlot as O, useCssVars as V, unref as R, resolveComponent as D, toDisplayString as T, createCommentVNode as k, createBlock as x, defineAsyncComponent as ne, resolveDynamicComponent as se, getCurrentInstance as ae, ref as P, watch as $, createVNode as C, Transition as A, withCtx as L, Fragment as N, renderList as q, resolveDirective as le, withDirectives as ie, onMounted as E, withModifiers as re, nextTick as H, normalizeStyle as ce, TransitionGroup as de, reactive as G, createApp as ue, inject as X } from "vue";
const fe = { class: "pine-main" }, pe = /* @__PURE__ */ v({
  __name: "PineApp",
  setup(e) {
    const o = b(), t = u(() => o.theme === "dark");
    return (s, n) => (c(), f("div", {
      id: "pine-app",
      class: h({ dark: t.value })
    }, [
      p("div", fe, [
        O(s.$slots, "default")
      ])
    ], 2));
  }
});
function g(e, o) {
  var s, n, a, i;
  return /(?:#)[0-9a-f]{8}|(?:#)[0-9a-f]{6}|(?:#)[0-9a-f]{4}|(?:#)[0-9a-f]{3}/gi.test(e) || !o ? e : (n = (s = o.colors) == null ? void 0 : s[o.theme]) != null && n[e] ? (i = (a = o.colors) == null ? void 0 : a[o.theme]) == null ? void 0 : i[e] : U(e) ? U(e) : e;
}
function M(e) {
  return `0${Math.round(255 / 100 * e).toString(16)}`.slice(-2).toUpperCase();
}
function F(e) {
  return typeof e == "number" || /^(\d{1,4})$/gi.test(e) ? e + "px" : (/^(\d{1,4})([a-z]{2})$/gi.test(e), e);
}
function J(e) {
  const o = [];
  for (let t = 0; t < e.length; t++) {
    const s = e[t];
    o.push(s), s.children.length && o.push(...J(s.children));
  }
  return o;
}
function U(e) {
  const o = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    "indianred ": "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgrey: "#d3d3d3",
    lightgreen: "#90ee90",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370d8",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#d87093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  };
  return typeof o[e.toLowerCase()] < "u" ? o[e.toLowerCase()] : !1;
}
let j = !1;
try {
  if (typeof window < "u") {
    const e = Object.defineProperty({}, "passive", {
      get: () => (j = !0, j)
    });
    window.addEventListener("testListener", e, e), window.removeEventListener(
      "testListener",
      e,
      e
    );
  }
} catch (e) {
  console.warn(e);
}
const me = { class: "pine-textfield" }, _e = { key: 0 }, he = { class: "container" }, ve = ["type", "disabled", "value", "readonly"], ge = /* @__PURE__ */ v({
  __name: "PineTextField",
  props: {
    modelValue: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    label: {},
    width: { default: "-webkit-fill-available" },
    type: { default: "text" },
    color: { default: "primary" },
    backgroundColor: { default: "highlight" },
    iconRight: {},
    "onClick:icon": {}
  },
  emits: ["update:modelValue", "click:icon"],
  setup(e, { emit: o }) {
    const t = e;
    V((l) => ({
      "2e9df3ac": n.value,
      "131674f8": a.value,
      "7bbbc31d": R(g)("neutral60", R(s)),
      f08ffee0: i.value
    }));
    const s = b(), n = u(
      () => g(t.backgroundColor, s)
    ), a = u(() => g(t.color, s)), i = u(() => F(t.width));
    return (l, r) => {
      const d = D("PineIcon");
      return c(), f("div", me, [
        l.label ? (c(), f("p", _e, T(l.label), 1)) : k("", !0),
        p("div", he, [
          p("input", {
            type: l.type,
            disabled: l.disabled,
            onInput: r[0] || (r[0] = (m) => o("update:modelValue", m.target.value)),
            value: l.modelValue,
            readonly: l.readonly
          }, null, 40, ve),
          l.iconRight ? (c(), x(d, {
            key: 0,
            onClick: r[1] || (r[1] = (m) => o("click:icon")),
            class: h(["internal-icon", { "icon-clickble": t["onClick:icon"] }]),
            name: l.iconRight
          }, null, 8, ["class", "name"])) : k("", !0)
        ])
      ]);
    };
  }
});
const ye = /* @__PURE__ */ v({
  __name: "PineIcon",
  props: {
    name: {},
    type: { default: "solid" },
    color: { default: "primary" },
    size: { default: 20 }
  },
  setup(e) {
    const o = e;
    V((i) => ({
      "160978e4": n.value,
      "3707d926": a.value
    }));
    const t = b(), s = u(() => {
      const i = o.name + "Icon";
      return ne(async () => o.type == "solid" ? (await import("./index-8ec3a4e3.js"))[i] : (await import("./index-dab64a59.js"))[i]);
    }), n = u(() => g(o.color, t)), a = u(() => F(o.size));
    return (i, l) => (c(), x(se(s.value), { class: "pine-icon" }));
  }
});
const ke = { class: "pine-loader" }, be = /* @__PURE__ */ p("svg", {
  class: "circular-loader",
  viewBox: "25 25 50 50"
}, [
  /* @__PURE__ */ p("circle", {
    class: "loader-bg",
    cx: "50",
    cy: "50",
    r: "20"
  }),
  /* @__PURE__ */ p("circle", {
    class: "loader-path",
    cx: "50",
    cy: "50",
    r: "20"
  })
], -1), we = [
  be
], Ce = /* @__PURE__ */ v({
  __name: "PineLoading",
  props: {
    size: { default: 60 },
    weight: { default: 4 },
    color: { default: "primary" },
    backgroundColor: { default: "highlight" }
  },
  setup(e) {
    const o = e;
    V((l) => ({
      "7cf1d006": s.value,
      a04c5fb4: n.value,
      "4c681e8e": i.value,
      "176c4f6b": a.value
    }));
    const t = b(), s = u(() => F(o.size)), n = u(() => F(o.weight)), a = u(() => g(o.color, t)), i = u(
      () => g(o.backgroundColor, t)
    );
    return (l, r) => (c(), f("div", ke, we));
  }
});
const Pe = { class: "pine-menu-drawer" }, $e = {
  key: 0,
  class: "pine-drawer"
}, Ve = /* @__PURE__ */ v({
  __name: "PineDrawer",
  props: {
    backgroundColor: { default: "highlight" },
    modelValue: { type: Boolean, default: !1 },
    closeOnClickOutside: { type: Boolean, default: !0 },
    app: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const t = e;
    V((r) => ({
      "5fa2c660": l.value
    }));
    const s = b(), n = ae(), a = P(!1);
    $(
      () => [t.app, t.modelValue],
      () => {
        var r, d;
        if (t.modelValue) {
          const m = (d = (r = n == null ? void 0 : n.parent) == null ? void 0 : r.vnode.el) == null ? void 0 : d.classList.contains(
            "pine-menu-drawer-parent"
          );
          !t.app && !m ? n.parent.vnode.el.classList.add("pine-menu-drawer-parent") : t.app && m && n.parent.vnode.el.classList.remove("pine-menu-drawer-parent");
        }
      },
      { immediate: !0 }
    ), $(
      () => t.modelValue,
      (r) => {
        a.value !== r && (a.value = r);
      },
      { immediate: !0 }
    );
    function i() {
      a.value = !1, o("update:modelValue", !1);
    }
    const l = u(() => g(t.backgroundColor, s));
    return (r, d) => (c(), f("div", Pe, [
      C(A, { name: "slide-position" }, {
        default: L(() => [
          a.value ? (c(), f("nav", $e, [
            O(r.$slots, "default")
          ])) : k("", !0)
        ]),
        _: 3
      }),
      C(A, { name: "slide-fade" }, {
        default: L(() => [
          a.value ? (c(), f("div", {
            key: 0,
            class: "pine-overlay",
            onClick: d[0] || (d[0] = (m) => r.closeOnClickOutside ? i() : null)
          })) : k("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
const xe = { class: "pine-drawer-model" }, Oe = { class: "header" }, Ie = /* @__PURE__ */ p("div", { style: { width: "30px" } }, null, -1), Fe = { class: "base" }, Se = ["onClick"], Be = { class: "text-item" }, De = { class: "end" }, Te = { class: "text-item" }, Le = /* @__PURE__ */ v({
  __name: "PineDrawerModel",
  props: {
    itens: {},
    modelValue: { default: null },
    selectedColor: { default: "background" },
    showIcons: { type: Boolean, default: !0 },
    iconDirection: { default: "left" },
    lastOption: {}
  },
  emits: ["clickOnClose", "clickOnItem", "clickOnLastItem"],
  setup(e, { emit: o }) {
    const t = e;
    V((l) => ({
      "7151ba98": n.value
    }));
    const s = b(), n = u(() => g(t.selectedColor, s)), a = P(0);
    $(
      () => t.modelValue,
      (l) => {
        a.value !== l && (a.value = l);
      },
      { immediate: !0 }
    );
    function i(l) {
      a.value = l, o("clickOnItem", l);
    }
    return (l, r) => {
      var m, _, w;
      const d = D("PineIcon");
      return c(), f("div", xe, [
        p("div", null, [
          p("div", Oe, [
            C(d, {
              name: "XMark",
              color: "text",
              size: 30,
              class: "icon",
              onClick: r[0] || (r[0] = (y) => o("clickOnClose"))
            }),
            O(l.$slots, "title"),
            Ie
          ]),
          p("div", Fe, [
            (c(!0), f(N, null, q(t.itens, (y, S) => (c(), f("div", {
              onClick: (B) => y.disabled ? null : i(S),
              key: S,
              class: h(["item-list", {
                selected: a.value === S,
                "right-icon": l.iconDirection == "right",
                disabled: y.disabled
              }])
            }, [
              y.icon && t.showIcons && l.iconDirection == "left" ? (c(), x(d, {
                key: 0,
                size: 26,
                name: y.icon,
                color: y.color || "text",
                class: "icon"
              }, null, 8, ["name", "color"])) : k("", !0),
              p("p", Be, T(y.title), 1),
              y.icon && t.showIcons && l.iconDirection == "right" ? (c(), x(d, {
                key: 1,
                size: 26,
                name: y.icon,
                color: y.color || "text",
                class: "icon"
              }, null, 8, ["name", "color"])) : k("", !0)
            ], 10, Se))), 128))
          ])
        ]),
        p("div", De, [
          l.lastOption ? (c(), f("div", {
            key: 0,
            class: h(["item-list", {
              "center-end": !t.showIcons,
              "right-icon": l.iconDirection == "right"
            }]),
            onClick: r[1] || (r[1] = (y) => o("clickOnLastItem"))
          }, [
            t.showIcons && ((m = l.lastOption) != null && m.icon) && l.iconDirection == "left" ? (c(), x(d, {
              key: 0,
              size: 26,
              name: l.lastOption.icon,
              color: l.lastOption.color,
              class: "icon"
            }, null, 8, ["name", "color"])) : k("", !0),
            p("p", Te, T((_ = l.lastOption) == null ? void 0 : _.title), 1),
            t.showIcons && ((w = l.lastOption) != null && w.icon) && l.iconDirection == "right" ? (c(), x(d, {
              key: 1,
              size: 26,
              name: l.lastOption.icon,
              color: l.lastOption.color,
              class: "icon"
            }, null, 8, ["name", "color"])) : k("", !0)
          ], 2)) : k("", !0)
        ])
      ]);
    };
  }
});
const Ee = /* @__PURE__ */ v({
  __name: "PineMenu",
  props: {
    modelValue: { type: Boolean },
    closeOnClick: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const t = e;
    V((d) => ({
      "4a1fbb7b": l.value
    }));
    const s = b(), n = P(!1);
    $(
      () => t.modelValue,
      (d) => n.value = d,
      { immediate: !0 }
    ), $(
      () => n.value,
      (d) => o("update:modelValue", d),
      { immediate: !0 }
    );
    const a = () => J(r.value.childNodes), i = () => n.value = !1, l = u(() => g("highlight", s)), r = P();
    return (d, m) => {
      const _ = le("click-outside");
      return ie((c(), f("div", {
        class: "p-menu",
        ref_key: "menuBase",
        ref: r
      }, [
        p("div", {
          class: "component",
          ref: "comp",
          onClick: m[0] || (m[0] = (w) => n.value = !n.value)
        }, [
          O(d.$slots, "default")
        ], 512),
        p("div", {
          class: h(["menu", { "show-modal": n.value }]),
          ref: "timerPicker",
          onClick: m[1] || (m[1] = () => {
            d.closeOnClick && i();
          })
        }, [
          O(d.$slots, "menu")
        ], 2)
      ])), [
        [_, {
          handler: i,
          include: () => [...a()]
        }]
      ]);
    };
  }
});
const Me = { class: "list-items" }, Re = ["onClick"], Ae = /* @__PURE__ */ v({
  __name: "PineSelect",
  props: {
    items: {},
    color: { default: "primary" },
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const t = e;
    V((_) => ({
      a6e56c26: n.value,
      "4ffbc522": a.value
    }));
    const s = b();
    E(() => {
      t.modelValue && d(t.modelValue);
    }), $(
      () => t.modelValue,
      (_) => {
        _ && d(_);
      }
    );
    const n = u(() => g(t.color, s)), a = u(() => g("background", s)), i = P(!1), l = (_, w = "value") => {
      if (typeof _ == "string")
        return _;
      if (_) {
        if (_[w])
          return _[w];
      } else
        return;
      return _;
    }, r = (_ = "value", w = "text") => {
      const y = t.items.find(
        (S) => l(S, _) === m.value
      );
      return y ? l(y, w) : "";
    }, d = (_) => {
      m.value = l(_), o("update:modelValue", m.value);
    }, m = P("");
    return (_, w) => {
      const y = D("PineTextField"), S = D("PineMenu");
      return c(), f("div", {
        class: h(["pine-select", { "is-open": i.value }])
      }, [
        C(S, {
          modelValue: i.value,
          "onUpdate:modelValue": w[0] || (w[0] = (B) => i.value = B)
        }, {
          menu: L(() => [
            p("ul", Me, [
              (c(!0), f(N, null, q(_.items, (B) => (c(), f("li", {
                key: l(B),
                onClick: ($t) => d(B),
                class: h({ "item-selected": m.value === l(B) })
              }, T(l(B, "text")), 11, Re))), 128))
            ])
          ]),
          default: L(() => [
            C(y, {
              "model-value": r(),
              color: _.color,
              readonly: "",
              class: "input",
              "icon-right": "ArrowDown"
            }, null, 8, ["model-value", "color"])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 2);
    };
  }
});
const I = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [s, n] of o)
    t[s] = n;
  return t;
}, ze = /* @__PURE__ */ I(Ae, [["__scopeId", "data-v-720c8b94"]]), Ne = /* @__PURE__ */ v({
  __name: "PineCard",
  props: {
    height: { default: "auto" },
    width: { default: "auto" },
    backgroundColor: { default: "highlight" },
    onClick: {}
  },
  emits: ["click"],
  setup(e, { emit: o }) {
    const t = e;
    V((l) => ({
      40012157: n.value,
      "6301a5c8": a.value,
      "0eacddb0": i.value
    }));
    const s = b(), n = u(() => F(t.width)), a = u(() => F(t.height)), i = u(
      () => g(t.backgroundColor, s)
    );
    return (l, r) => (c(), f("div", {
      class: h(["pine-card", { clickable: t.onClick }]),
      onClick: r[0] || (r[0] = (d) => o("click"))
    }, [
      O(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const qe = /* @__PURE__ */ I(Ne, [["__scopeId", "data-v-0a38e220"]]), Ue = ["value", "disabled"], je = { class: "toggle-base" }, We = /* @__PURE__ */ v({
  __name: "PineSwitch",
  props: {
    modelValue: { type: Boolean },
    color: { default: "primary" },
    disabled: { type: Boolean },
    iconRight: {},
    iconLeft: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const t = e;
    V((r) => ({
      "423cc2c6": n.value,
      a7475f8e: a.value
    }));
    const s = b();
    $(
      () => t.modelValue,
      (r) => {
        typeof r == "boolean" && (i.value = r);
      }
    ), E(() => {
      t.modelValue && (i.value = t.modelValue);
    });
    const n = u(() => g(t.color, s)), a = u(() => g("neutral30", s)), i = P(!1), l = () => {
      t.disabled || (i.value = !i.value, o("update:modelValue", i.value));
    };
    return (r, d) => {
      const m = D("PineIcon");
      return c(), f("a", {
        onClick: l,
        class: h(["switch-pine", { "switch-disabled": r.disabled }])
      }, [
        p("input", {
          type: "checkbox",
          value: i.value,
          disabled: r.disabled
        }, null, 8, Ue),
        p("div", je, [
          r.iconLeft ? (c(), x(m, {
            key: 0,
            name: r.iconLeft,
            size: 15,
            class: h([{ oculte: !i.value }, "absolute"]),
            color: "white"
          }, null, 8, ["name", "class"])) : k("", !0),
          r.iconRight ? (c(), f("div", {
            key: 1,
            class: h([{ oculte: i.value }, "absolute icon-right d-flex align-center"])
          }, [
            C(m, {
              name: r.iconRight,
              size: 15,
              color: "white"
            }, null, 8, ["name"])
          ], 2)) : k("", !0),
          C(A, { name: "move" }, {
            default: L(() => [
              p("div", {
                class: h(["toggle-circle absolute", { "light-select": i.value }])
              }, null, 2)
            ]),
            _: 1
          })
        ])
      ], 2);
    };
  }
});
const He = /* @__PURE__ */ I(We, [["__scopeId", "data-v-8f1553e8"]]), Ge = /* @__PURE__ */ v({
  __name: "PineSwitchTheme",
  emits: ["change"],
  setup(e, { emit: o }) {
    const t = b(), s = P(!1);
    return E(() => {
      s.value = t.theme == "light", o("change", t.theme);
    }), $(
      () => s.value,
      (n) => {
        n ? t.theme = "light" : t.theme = "dark", o("change", t.theme);
      }
    ), (n, a) => {
      const i = D("PineSwitch");
      return c(), x(i, {
        modelValue: s.value,
        "onUpdate:modelValue": a[0] || (a[0] = (l) => s.value = l),
        "icon-left": "Sun",
        "icon-right": "Moon"
      }, null, 8, ["modelValue"]);
    };
  }
}), Xe = ["disabled"], Je = {
  key: 0,
  class: "loading"
}, Ke = { class: "content" }, Qe = /* @__PURE__ */ v({
  __name: "PineBtn",
  props: {
    height: { default: "auto" },
    width: { default: "auto" },
    color: { default: "primary" },
    type: { default: "solid" },
    loading: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: o }) {
    const t = e;
    V((d) => ({
      "48ad4fd5": n.value,
      "6fdb470a": a.value,
      "7b043a26": i.value,
      fac88cec: r.value,
      "73966c84": l.value,
      "6b838498": i.value + R(M)(10),
      "6b838859": i.value + R(M)(20)
    }));
    const s = b(), n = u(() => F(t.width)), a = u(() => F(t.height)), i = u(() => g(t.color, s)), l = u(
      () => g(t.color, s) + M(70)
    ), r = u(
      () => g(t.color, s) + M(90)
    );
    return (d, m) => {
      const _ = D("PineLoading");
      return c(), f("button", {
        class: h(["pine-button", [d.type + "-button", { "loading-button": d.loading }]]),
        disabled: d.loading,
        onClick: m[0] || (m[0] = (w) => o("click"))
      }, [
        d.loading ? (c(), f("div", Je, [
          C(_, {
            color: "white",
            "background-color": "highlight",
            weight: "6"
          })
        ])) : k("", !0),
        p("div", Ke, [
          O(d.$slots, "default", {}, void 0, !0)
        ])
      ], 10, Xe);
    };
  }
});
const Ze = /* @__PURE__ */ I(Qe, [["__scopeId", "data-v-5de79f0a"]]);
const Ye = {}, et = { class: "pine-container" };
function tt(e, o) {
  return c(), f("div", et, [
    O(e.$slots, "default", {}, void 0, !0)
  ]);
}
const ot = /* @__PURE__ */ I(Ye, [["render", tt], ["__scopeId", "data-v-bcd1e068"]]), nt = /* @__PURE__ */ v({
  __name: "PineDialog",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const t = e, s = P(!1);
    $(
      () => t.modelValue,
      (a) => {
        s.value = t.modelValue, a ? document.body.style.overflow = "hidden" : document.body.style.overflow = "inherit";
      },
      { immediate: !0 }
    );
    function n() {
      o("update:modelValue", !1), s.value = !1;
    }
    return (a, i) => (c(), f("div", {
      class: h(["pine-dialog", s.value ? "aberta" : "fechada"]),
      onClick: n
    }, [
      p("div", {
        class: "pine-dialog-base",
        onClick: i[0] || (i[0] = re(() => {
        }, ["stop"]))
      }, [
        O(a.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
});
const st = /* @__PURE__ */ I(nt, [["__scopeId", "data-v-780c9313"]]), at = /* @__PURE__ */ v({
  __name: "Progress",
  props: {
    duration: { default: 5e3 }
  },
  setup(e) {
    const o = e, t = P(!0), s = u(() => ({
      animationDuration: `${o.duration}ms`,
      animationPlayState: "running",
      opacity: 1
    })), n = u(() => t.value ? "b-toast__progress" : "");
    return $(
      () => o.duration,
      () => {
        t.value = !1, H(() => t.value = !0);
      },
      {
        immediate: !0
      }
    ), (a, i) => (c(), f("div", {
      ref: "el",
      class: h(n.value),
      style: ce(s.value)
    }, null, 6));
  }
});
const lt = /* @__PURE__ */ I(at, [["__scopeId", "data-v-f819f0e3"]]), it = /* @__PURE__ */ v({
  __name: "Timer",
  props: {
    timer: {},
    id: {}
  },
  emits: ["close-toast"],
  setup(e, { emit: o }) {
    const t = e;
    return E(() => {
      setTimeout(() => {
        o("close-toast", t.id);
      }, t.timer);
    }), (s, n) => (c(), f("div"));
  }
}), rt = ["stroke"], ct = /* @__PURE__ */ p("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}, null, -1), dt = /* @__PURE__ */ p("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
}, null, -1), ut = [
  ct,
  dt
], ft = /* @__PURE__ */ v({
  __name: "X",
  props: {
    dark: { type: Boolean }
  },
  setup(e) {
    return (o, t) => (c(), f("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: o.dark ? "white" : "black",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: "feather feather-x"
    }, ut, 8, rt));
  }
}), pt = { class: "b-toast__text" }, mt = { class: "b-toast__content" }, _t = /* @__PURE__ */ v({
  __name: "PineToast",
  props: {
    toast: {}
  },
  emits: ["delete-toast"],
  setup(e, { emit: o }) {
    const t = e, s = b(), n = u(() => t.toast.theme ? t.toast.theme === "dark" : s.theme == "dark");
    return (a, i) => (c(), f("div", {
      class: h(["b-toast__alert", `theme-${a.toast.type} ${n.value ? "dark" : ""}`])
    }, [
      C(it, {
        style: { display: "none" },
        timer: a.toast.duration,
        id: a.toast.id,
        onCloseToast: i[0] || (i[0] = (l) => o("delete-toast", l))
      }, null, 8, ["timer", "id"]),
      p("div", pt, [
        a.toast.title ? (c(), f("h4", {
          key: 0,
          class: h(["b-toast__title", `color-${a.toast.type}`])
        }, T(a.toast.title), 3)) : k("", !0),
        p("h4", mt, T(a.toast.content), 1)
      ]),
      p("a", {
        onClick: i[1] || (i[1] = (l) => o("delete-toast", a.toast.id)),
        class: "b-toast__close"
      }, [
        C(ft, { dark: n.value }, null, 8, ["dark"])
      ]),
      C(lt, {
        class: h(`bg-${a.toast.type}`),
        duration: a.toast.duration
      }, null, 8, ["class", "duration"])
    ], 2));
  }
});
const K = /* @__PURE__ */ I(_t, [["__scopeId", "data-v-ddac6a1c"]]);
function ht(e, o) {
  e.setAttribute("data-pine-tooltip", typeof o.value == "string" ? o.value : o.value.text), e.classList.add("with-pine-tooltip");
  const t = typeof o.value == "string" ? vt(o.modifiers) : o.value.position;
  ["top", "bottom", "left", "right"].forEach((s) => {
    e.classList.remove(`pine-tooltip--${s}`);
  }), e.classList.add(`pine-tooltip--${t}`);
}
function vt(e) {
  return e.top ? "top" : e.bottom ? "bottom" : e.left ? "left" : e.right ? "right" : "top";
}
function Q(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; )
      e = e.parentNode;
    return e !== document ? null : document;
  }
  const o = e.getRootNode();
  return o !== document && o.getRootNode({ composed: !0 }) !== document ? null : o;
}
function gt() {
  return !0;
}
function Z(e, o, t) {
  if (!e || Y(e, t) === !1)
    return !1;
  const s = Q(o);
  if (typeof ShadowRoot < "u" && s instanceof ShadowRoot && s.host === e.target)
    return !1;
  const n = (typeof t.value == "object" && t.value.include || (() => []))();
  return n.push(o), !n.some((a) => a == null ? void 0 : a.contains(e.target));
}
function Y(e, o) {
  return (typeof o.value == "object" && o.value.closeConditional || gt)(e);
}
function yt(e, o, t) {
  const s = typeof t.value == "function" ? t.value : t.value.handler;
  o._clickOutside.lastMousedownWasOutside && Z(e, o, t) && setTimeout(() => {
    Y(e, t) && s && s(e);
  }, 0);
}
function W(e, o) {
  const t = Q(e);
  o(document), typeof ShadowRoot < "u" && t instanceof ShadowRoot && o(t);
}
const kt = {
  mounted(e, o) {
    const t = (n) => yt(n, e, o), s = (n) => {
      e._clickOutside.lastMousedownWasOutside = Z(
        n,
        e,
        o
      );
    };
    W(e, (n) => {
      n.addEventListener("click", t, !0), n.addEventListener("mousedown", s, !0);
    }), e._clickOutside || (e._clickOutside = {
      lastMousedownWasOutside: !1
    }), e._clickOutside[o.instance.$.uid] = {
      onClick: t,
      onMousedown: s
    };
  },
  unmounted(e, o) {
    e._clickOutside && (W(e, (t) => {
      var a;
      if (!t || !((a = e._clickOutside) != null && a[o.instance.$.uid]))
        return;
      const { onClick: s, onMousedown: n } = e._clickOutside[o.instance.$.uid];
      t.removeEventListener("click", s, !0), t.removeEventListener("mousedown", n, !0);
    }), delete e._clickOutside[o.instance.$.uid]);
  }
}, bt = /* @__PURE__ */ v({
  __name: "ToastContainer",
  props: {
    toasts: {},
    dismiss: { type: Function }
  },
  setup(e) {
    const o = e, t = P(), s = (a) => {
      a.remove !== void 0 ? a.remove() : a.parentNode && a.parentNode.removeChild(a);
    };
    E(() => {
      s(t.value), document.querySelector("#pine-app").appendChild(t.value);
    });
    const n = (a) => {
      o.dismiss(a);
    };
    return (a, i) => (c(), f("div", {
      ref_key: "el",
      ref: t,
      class: "b-toast__container"
    }, [
      C(de, {
        name: "b-toast__bounce",
        tag: "div"
      }, {
        default: L(() => [
          (c(!0), f(N, null, q(a.toasts, (l) => (c(), x(K, {
            key: l.id,
            toast: l,
            onDeleteToast: n
          }, null, 8, ["toast"]))), 128))
        ]),
        _: 1
      })
    ], 512));
  }
});
const wt = /* @__PURE__ */ I(bt, [["__scopeId", "data-v-9c365f3d"]]);
var ee = /* @__PURE__ */ ((e) => (e.SUCCESS = "success", e.ERROR = "error", e.WARNING = "warning", e.INFO = "info", e))(ee || {});
const Ct = ((e) => () => e++)(0);
function Pt(e, o) {
  const t = G({
    _toasts: [],
    show: (s, n) => {
      const a = Object.assign(
        {},
        {
          id: Ct(),
          type: ee.SUCCESS,
          duration: (o == null ? void 0 : o.duration) || 5e3,
          theme: (o == null ? void 0 : o.theme) || "dark"
        },
        n,
        {
          content: s
        }
      );
      return t._toasts.push(a), a.id;
    },
    clear: () => {
      t._toasts = [];
    },
    dismiss: (s) => {
      const n = t._toasts.findIndex((a) => a.id === s);
      n !== -1 && t._toasts.splice(n, 1);
    }
  });
  return H(() => {
    const s = ue(wt, {
      toasts: t._toasts,
      dismiss: t.dismiss
    }), n = e;
    s._context.components = n._context.components, s._context.directives = n._context.directives, s._context.mixins = n._context.mixins, s._context.provides = n._context.provides, s.config.globalProperties = n.config.globalProperties, s.mount(document.createElement("div"));
  }), t;
}
const te = Symbol.for("pine:pine"), oe = Symbol.for("pine:toast");
function z(e, o) {
  var a, i;
  if (z.installed)
    return;
  z.installed = !0, e.component("PineApp", pe), e.component("PineTextField", ge), e.component("PineIcon", ye), e.component("PineLoading", Ce), e.component("PineDrawer", Ve), e.component("PineDrawerModel", Le), e.component("PineMenu", Ee), e.component("PineSelect", ze), e.component("PineCard", qe), e.component("PineSwitch", He), e.component("PineSwitchTheme", Ge), e.component("PineBtn", Ze), e.component("PineContainer", ot), e.component("PineDialog", st), e.component("PineToast", K), e.directive("tooltip", ht), e.directive("clickOutside", kt);
  const t = G({
    theme: (o == null ? void 0 : o.theme) || "dark",
    //'light'
    colors: {
      light: {
        primary: "#5093FE",
        secondary: "#00F391",
        error: "#FE5050",
        warning: "#FF8A00",
        background: "#F1F1F1",
        highlight: "#E5E6E8",
        neutral100: "#000000",
        neutral80: "#6C6C6C",
        neutral70: "#757575",
        neutral60: "#7F7F7F",
        neutral30: "#B5B5B5",
        neutral0: "#FFFFFF",
        ...(a = o == null ? void 0 : o.colors) == null ? void 0 : a.light
      },
      dark: {
        primary: "#5093FE",
        secondary: "#00F391",
        error: "#FE5050",
        warning: "#FF8A00",
        background: "#161922",
        highlight: "#252831",
        neutral100: "#000000",
        neutral80: "#6C6C6C",
        neutral70: "#757575",
        neutral60: "#7F7F7F",
        neutral30: "#B5B5B5",
        neutral0: "#FFFFFF",
        ...(i = o == null ? void 0 : o.colors) == null ? void 0 : i.dark
      }
    }
  }), s = Pt(e, o == null ? void 0 : o.toast);
  e.provide(te, t), e.provide(oe, s);
  const n = document.querySelector(":root");
  n.style.setProperty("--p-light-primary", t.colors.light.primary), n.style.setProperty("--p-light-secondary", t.colors.light.secondary), n.style.setProperty("--p-light-error", t.colors.light.error), n.style.setProperty("--p-light-warning", t.colors.light.warning), n.style.setProperty("--p-light-background", t.colors.light.background), n.style.setProperty("--p-light-highlight", t.colors.light.highlight), n.style.setProperty("--p-dark-primary", t.colors.dark.primary), n.style.setProperty("--p-dark-secondary", t.colors.dark.secondary), n.style.setProperty("--p-dark-error", t.colors.dark.error), n.style.setProperty("--p-dark-warning", t.colors.dark.warning), n.style.setProperty("--p-dark-background", t.colors.dark.background), n.style.setProperty("--p-dark-highlight", t.colors.dark.highlight);
}
function b() {
  const e = X(te);
  if (!e)
    throw new Error("Erro ao procura a instância do Pine");
  return e;
}
function Ot() {
  const e = X(oe);
  if (!e)
    throw new Error("Erro ao procura a instância do Toast");
  return e;
}
const It = {
  install: z
};
export {
  ee as TYPE_TOAST,
  It as default,
  z as pinePlugin,
  b as usePine,
  Ot as useToast
};
