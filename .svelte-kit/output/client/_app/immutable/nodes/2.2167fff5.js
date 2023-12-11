import {
  S as oe,
  i as ce,
  s as ue,
  e as f,
  h,
  j as m,
  l as c,
  n as i,
  o as B,
  q as Ye,
  f as w,
  d as A,
  F as Ne,
  m as E,
  k as I,
  G as De,
  K as nt,
  x as v,
  X as Ze,
  p as l,
  H as Ve,
  A as lt,
  z as it,
  Y as ot,
  w as ct,
  t as J,
  b as Q,
  I as Le,
  B as ut,
  c as tt,
  u as at,
  g as st,
  a as rt,
  Z as dt,
  L as ft,
  _ as ht,
} from "../chunks/index.229400e6.js";
import { b as mt } from "../chunks/navigation.71f60e69.js";
import { w as vt } from "../chunks/singletons.dd9c9a0a.js";
import { c as Je } from "../chunks/clsx.m.1229b3e0.js";
const Qe = vt({}),
  Ae = {
    name: "[Squire]",
    description: "Our project for CS250 using sveltekit, prisma, and tailwind",
  };
function _t(r, e) {
  const t = (a) => r && !r.contains(a.target) && !a.defaultPrevented && e();
  return (
    document.addEventListener("click", t, !0),
    {
      destroy() {
        document.removeEventListener("click", t, !0);
      },
    }
  );
}
function pt(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default")
    ? r.default
    : r;
}
function gt(r) {
  for (var e = 5381, t = r.length; t; ) e = (e * 33) ^ r.charCodeAt(--t);
  return e >>> 0;
}
var bt = gt;
const $t = (r, e, t) => [
  [r, e, t],
  [(r + 120) % 360, e, t],
  [(r + 240) % 360, e, t],
];
var yt = $t;
const Ie = (r, e, t) => (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? r + (e - r) * 6 * t
      : t < 1 / 2
      ? e
      : t < 2 / 3
      ? r + (e - r) * (2 / 3 - t) * 6
      : r
  ),
  wt = (r, e, t) => {
    let a, s, n;
    if (((r = r / 360), e == 0)) a = s = n = t;
    else {
      const o = t < 0.5 ? t * (1 + e) : t + e - t * e,
        d = 2 * t - o;
      (a = Ie(d, o, r + 1 / 3)), (s = Ie(d, o, r)), (n = Ie(d, o, r - 1 / 3));
    }
    return [
      Math.max(0, Math.min(Math.round(a * 255), 255)),
      Math.max(0, Math.min(Math.round(s * 255), 255)),
      Math.max(0, Math.min(Math.round(n * 255), 255)),
    ];
  };
var Et = wt;
const xt = bt,
  kt = yt,
  We = Et,
  Mt = () => Math.floor(Math.random() * Date.now()),
  At = (r, e) => {
    const t = xt(r),
      a = kt(t % 360, 1, 0.5),
      s = We(a[0][0], a[0][1], a[0][2]),
      n = We(a[1][0], a[1][1], a[1][2]),
      o = `rgb(${s[0]}, ${s[1]}, ${s[2]})`,
      d = `rgb(${n[0]}, ${n[1]}, ${n[2]})`,
      p = Mt();
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg ${
      e != null ? `width="${e}px" height="${e}px"` : ""
    } viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="${p}">
      <stop stop-color="${o}" offset="0%"></stop>
      <stop stop-color="${d}" offset="100%"></stop>
    </linearGradient>
  </defs>
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <rect id="Rectangle" fill="url(#${p})" x="0" y="0" width="80" height="80"></rect>
  </g>
</svg>`;
  };
var It = At;
const Nt = pt(It);
function Dt(r) {
  let e,
    t = r[1](r[0]) + "";
  return {
    c() {
      (e = f("div")), this.h();
    },
    l(a) {
      e = h(a, "DIV", { class: !0 });
      var s = m(e);
      s.forEach(c), this.h();
    },
    h() {
      i(e, "class", "overflow-clip rounded-full");
    },
    m(a, s) {
      B(a, e, s), (e.innerHTML = t);
    },
    p(a, [s]) {
      s & 1 && t !== (t = a[1](a[0]) + "") && (e.innerHTML = t);
    },
    i: Ye,
    o: Ye,
    d(a) {
      a && c(e);
    },
  };
}
function Vt(r, e, t) {
  let { email: a } = e,
    { size: s } = e;
  const n = (o) => Nt(o, s);
  return (
    (r.$$set = (o) => {
      "email" in o && t(0, (a = o.email)), "size" in o && t(2, (s = o.size));
    }),
    [a, n, s]
  );
}
class Lt extends oe {
  constructor(e) {
    super(), ce(this, e, Vt, Dt, ue, { email: 0, size: 2 });
  }
}
function et(r) {
  let e, t;
  return {
    c() {
      (e = f("a")), (t = A("send")), this.h();
    },
    l(a) {
      e = h(a, "A", { class: !0, href: !0, id: !0 });
      var s = m(e);
      (t = I(s, "send")), s.forEach(c), this.h();
    },
    h() {
      i(e, "class", "btn dark svelte-18hhbin"),
        i(e, "href", "/sendNot"),
        i(e, "id", "Nav-Send");
    },
    m(a, s) {
      B(a, e, s), l(e, t);
    },
    d(a) {
      a && c(e);
    },
  };
}
function St(r) {
  let e,
    t,
    a,
    s,
    n,
    o,
    d,
    p,
    u,
    b,
    x,
    _,
    V,
    de,
    fe,
    L,
    he,
    me,
    S,
    ve,
    _e,
    W,
    C,
    pe,
    ge,
    H,
    O,
    U,
    y,
    P,
    be,
    $e,
    T,
    ee,
    ye,
    k,
    z,
    F,
    K = r[0].email + "",
    te,
    we,
    N,
    X,
    j,
    Ee,
    xe,
    Y,
    q,
    ke,
    ae,
    G,
    Me,
    Se,
    $ = r[0].id == 2 && et();
  return (
    (T = new Lt({ props: { email: r[0].email, size: 32 } })),
    {
      c() {
        (e = f("nav")),
          (t = f("div")),
          (a = f("div")),
          (s = f("div")),
          (n = f("a")),
          (o = f("img")),
          (p = w()),
          (u = f("span")),
          (b = A("[Squire]")),
          (x = w()),
          (_ = f("div")),
          (V = f("a")),
          (de = A("Chatrooms")),
          (fe = w()),
          (L = f("a")),
          (he = A("Friends")),
          (me = w()),
          (S = f("a")),
          (ve = A("Notifications")),
          (_e = w()),
          $ && $.c(),
          (W = w()),
          (C = f("a")),
          (pe = A("global-chat")),
          (ge = w()),
          (H = f("div")),
          (O = f("div")),
          (U = f("div")),
          (y = f("button")),
          (P = f("span")),
          (be = A("Open user menu")),
          ($e = w()),
          Ne(T.$$.fragment),
          (ye = w()),
          (k = f("div")),
          (z = f("div")),
          (F = f("p")),
          (te = A(K)),
          (we = w()),
          (N = f("ul")),
          (X = f("li")),
          (j = f("a")),
          (Ee = A("Settings")),
          (xe = w()),
          (Y = f("li")),
          (q = f("a")),
          (ke = A("Log out")),
          this.h();
      },
      l(g) {
        e = h(g, "NAV", { style: !0 });
        var D = m(e);
        t = h(D, "DIV", { style: !0 });
        var Z = m(t);
        a = h(Z, "DIV", { style: !0 });
        var R = m(a);
        s = h(R, "DIV", { style: !0 });
        var Ce = m(s);
        n = h(Ce, "A", { href: !0, class: !0 });
        var se = m(n);
        (o = h(se, "IMG", { src: !0 })),
          (p = E(se)),
          (u = h(se, "SPAN", { class: !0, style: !0 }));
        var Oe = m(u);
        (b = I(Oe, "[Squire]")),
          Oe.forEach(c),
          se.forEach(c),
          Ce.forEach(c),
          (x = E(R)),
          (_ = h(R, "DIV", { style: !0 }));
        var M = m(_);
        V = h(M, "A", { class: !0, href: !0, id: !0 });
        var Te = m(V);
        (de = I(Te, "Chatrooms")),
          Te.forEach(c),
          (fe = E(M)),
          (L = h(M, "A", { class: !0, href: !0, id: !0 }));
        var je = m(L);
        (he = I(je, "Friends")),
          je.forEach(c),
          (me = E(M)),
          (S = h(M, "A", { class: !0, href: !0, id: !0 }));
        var qe = m(S);
        (ve = I(qe, "Notifications")),
          qe.forEach(c),
          (_e = E(M)),
          $ && $.l(M),
          (W = E(M)),
          (C = h(M, "A", { class: !0, href: !0, id: !0 }));
        var ze = m(C);
        (pe = I(ze, "global-chat")),
          ze.forEach(c),
          M.forEach(c),
          (ge = E(R)),
          (H = h(R, "DIV", { class: !0 }));
        var Fe = m(H);
        O = h(Fe, "DIV", { class: !0 });
        var re = m(O);
        U = h(re, "DIV", {});
        var He = m(U);
        y = h(He, "BUTTON", {
          type: !0,
          class: !0,
          id: !0,
          "aria-expanded": !0,
          "data-dropdown-toggle": !0,
        });
        var ne = m(y);
        P = h(ne, "SPAN", { class: !0 });
        var Pe = m(P);
        (be = I(Pe, "Open user menu")),
          Pe.forEach(c),
          ($e = E(ne)),
          De(T.$$.fragment, ne),
          ne.forEach(c),
          He.forEach(c),
          (ye = E(re)),
          (k = h(re, "DIV", { class: !0, id: !0 }));
        var le = m(k);
        z = h(le, "DIV", { class: !0, role: !0 });
        var Ge = m(z);
        F = h(Ge, "P", { class: !0, role: !0 });
        var Re = m(F);
        (te = I(Re, K)),
          Re.forEach(c),
          Ge.forEach(c),
          (we = E(le)),
          (N = h(le, "UL", { class: !0, role: !0 }));
        var ie = m(N);
        X = h(ie, "LI", {});
        var Be = m(X);
        j = h(Be, "A", { href: !0, class: !0, role: !0 });
        var Ue = m(j);
        (Ee = I(Ue, "Settings")),
          Ue.forEach(c),
          Be.forEach(c),
          (xe = E(ie)),
          (Y = h(ie, "LI", {}));
        var Ke = m(Y);
        q = h(Ke, "A", { href: !0, class: !0, role: !0 });
        var Xe = m(q);
        (ke = I(Xe, "Log out")),
          Xe.forEach(c),
          Ke.forEach(c),
          ie.forEach(c),
          le.forEach(c),
          re.forEach(c),
          Fe.forEach(c),
          R.forEach(c),
          Z.forEach(c),
          D.forEach(c),
          this.h();
      },
      h() {
        nt(o.src, (d = "favicon.png")) || i(o, "src", d),
          i(
            u,
            "class",
            "text-md helvetica self-center whitespace-nowrap font-semibold"
          ),
          v(u, "font-family", "Helvetica, sans-serif"),
          i(n, "href", "/"),
          i(n, "class", "flex items-center space-x-2"),
          v(s, "margin-left", "0.5rem"),
          v(s, "display", "flex"),
          v(s, "align-items", "center"),
          v(s, "justify-content", "flex-start"),
          i(V, "class", "btn dark svelte-18hhbin"),
          i(V, "href", "/chatrooms"),
          i(V, "id", "Nav-Chat"),
          i(L, "class", "btn dark svelte-18hhbin"),
          i(L, "href", "/friends"),
          i(L, "id", "Nav-Friend"),
          i(S, "class", "btn dark svelte-18hhbin"),
          i(S, "href", "/notifications"),
          i(S, "id", "Nav-Notify"),
          i(C, "class", "btn dark svelte-18hhbin"),
          i(C, "href", "/globalChat"),
          i(C, "id", "global-chat"),
          v(_, "display", "flex"),
          v(_, "gap", "16px"),
          v(_, "justify-content", "center"),
          i(P, "class", "sr-only"),
          i(y, "type", "button"),
          i(
            y,
            "class",
            "flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300"
          ),
          i(y, "id", "user-menu-button-2"),
          i(y, "aria-expanded", "false"),
          i(y, "data-dropdown-toggle", "dropdown-2"),
          i(F, "class", "truncate text-sm font-medium text-gray-900"),
          i(F, "role", "none"),
          i(z, "class", "px-4 py-3"),
          i(z, "role", "none"),
          i(j, "href", "/settings"),
          i(
            j,
            "class",
            "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          ),
          i(j, "role", "menuitem"),
          i(q, "href", "/logout"),
          i(
            q,
            "class",
            "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          ),
          i(q, "role", "menuitem"),
          i(N, "class", "py-1"),
          i(N, "role", "none"),
          i(
            k,
            "class",
            (ae =
              Ze(
                Je(
                  "fixed right-5 top-9 z-50 my-4 list-none divide-y divide-gray-100 rounded border bg-white text-base shadow-lg",
                  { visible: r[1], invisible: !r[1] }
                )
              ) + " svelte-18hhbin")
          ),
          i(k, "id", "dropdown-2"),
          i(O, "class", "relative ml-3 flex items-center"),
          i(H, "class", "flex items-center"),
          v(a, "display", "flex"),
          v(a, "align-items", "center"),
          v(a, "justify-content", "space-between"),
          v(a, "max-height", "2rem"),
          v(t, "padding", "1rem"),
          v(t, "lg", "padding: 1.25rem"),
          v(t, "lg", "padding-left: 3rem"),
          v(t, "max-height", "2rem"),
          v(e, "position", "fixed"),
          v(e, "top", "0"),
          v(e, "left", "0"),
          v(e, "width", "100%");
      },
      m(g, D) {
        B(g, e, D),
          l(e, t),
          l(t, a),
          l(a, s),
          l(s, n),
          l(n, o),
          l(n, p),
          l(n, u),
          l(u, b),
          l(a, x),
          l(a, _),
          l(_, V),
          l(V, de),
          l(_, fe),
          l(_, L),
          l(L, he),
          l(_, me),
          l(_, S),
          l(S, ve),
          l(_, _e),
          $ && $.m(_, null),
          l(_, W),
          l(_, C),
          l(C, pe),
          l(a, ge),
          l(a, H),
          l(H, O),
          l(O, U),
          l(U, y),
          l(y, P),
          l(P, be),
          l(y, $e),
          Ve(T, y, null),
          l(O, ye),
          l(O, k),
          l(k, z),
          l(z, F),
          l(F, te),
          l(k, we),
          l(k, N),
          l(N, X),
          l(X, j),
          l(j, Ee),
          l(N, xe),
          l(N, Y),
          l(Y, q),
          l(q, ke),
          (G = !0),
          Me ||
            ((Se = [lt((ee = _t.call(null, y, r[2]))), it(y, "click", r[3])]),
            (Me = !0));
      },
      p(g, [D]) {
        g[0].id == 2
          ? $ || (($ = et()), $.c(), $.m(_, W))
          : $ && ($.d(1), ($ = null));
        const Z = {};
        D & 1 && (Z.email = g[0].email),
          T.$set(Z),
          ee && ot(ee.update) && D & 2 && ee.update.call(null, g[2]),
          (!G || D & 1) && K !== (K = g[0].email + "") && ct(te, K),
          (!G ||
            (D & 2 &&
              ae !==
                (ae =
                  Ze(
                    Je(
                      "fixed right-5 top-9 z-50 my-4 list-none divide-y divide-gray-100 rounded border bg-white text-base shadow-lg",
                      { visible: g[1], invisible: !g[1] }
                    )
                  ) + " svelte-18hhbin"))) &&
            i(k, "class", ae);
      },
      i(g) {
        G || (J(T.$$.fragment, g), (G = !0));
      },
      o(g) {
        Q(T.$$.fragment, g), (G = !1);
      },
      d(g) {
        g && c(e), $ && $.d(), Le(T), (Me = !1), ut(Se);
      },
    }
  );
}
function Ct(r, e, t) {
  let { user: a } = e,
    s = !1;
  const n = () => {
      t(1, (s = !1));
    },
    o = () => {
      t(1, (s = !s));
    };
  return (
    (r.$$set = (d) => {
      "user" in d && t(0, (a = d.user));
    }),
    [a, s, n, o]
  );
}
class Ot extends oe {
  constructor(e) {
    super(), ce(this, e, Ct, St, ue, { user: 0 });
  }
}
function Tt(r) {
  let e, t, a;
  const s = r[1].default,
    n = tt(s, r, r[0], null);
  return {
    c() {
      (e = f("main")), (t = f("div")), n && n.c(), this.h();
    },
    l(o) {
      e = h(o, "MAIN", {});
      var d = m(e);
      t = h(d, "DIV", { class: !0, style: !0 });
      var p = m(t);
      n && n.l(p), p.forEach(c), d.forEach(c), this.h();
    },
    h() {
      i(t, "class", "container mx-auto px-4 pt-24"),
        v(t, "height", "100%"),
        v(t, "width", "100%");
    },
    m(o, d) {
      B(o, e, d), l(e, t), n && n.m(t, null), (a = !0);
    },
    p(o, [d]) {
      n &&
        n.p &&
        (!a || d & 1) &&
        at(n, s, o, o[0], a ? rt(s, o[0], d, null) : st(o[0]), null);
    },
    i(o) {
      a || (J(n, o), (a = !0));
    },
    o(o) {
      Q(n, o), (a = !1);
    },
    d(o) {
      o && c(e), n && n.d(o);
    },
  };
}
function jt(r, e, t) {
  let { $$slots: a = {}, $$scope: s } = e;
  return (
    (r.$$set = (n) => {
      "$$scope" in n && t(0, (s = n.$$scope));
    }),
    [s, a]
  );
}
class qt extends oe {
  constructor(e) {
    super(), ce(this, e, jt, Tt, ue, {});
  }
}
function zt(r) {
  let e;
  const t = r[4].default,
    a = tt(t, r, r[5], null);
  return {
    c() {
      a && a.c();
    },
    l(s) {
      a && a.l(s);
    },
    m(s, n) {
      a && a.m(s, n), (e = !0);
    },
    p(s, n) {
      a &&
        a.p &&
        (!e || n & 32) &&
        at(a, t, s, s[5], e ? rt(t, s[5], n, null) : st(s[5]), null);
    },
    i(s) {
      e || (J(a, s), (e = !0));
    },
    o(s) {
      Q(a, s), (e = !1);
    },
    d(s) {
      a && a.d(s);
    },
  };
}
function Ft(r) {
  let e, t, a, s, n, o, d, p;
  return (
    (document.title = e = r[2]),
    (n = new Ot({ props: { user: r[0].user } })),
    (d = new qt({
      props: { $$slots: { default: [zt] }, $$scope: { ctx: r } },
    })),
    {
      c() {
        (t = f("meta")),
          (a = w()),
          (s = f("div")),
          Ne(n.$$.fragment),
          (o = w()),
          Ne(d.$$.fragment),
          this.h();
      },
      l(u) {
        const b = dt("svelte-1law5hj", document.head);
        (t = h(b, "META", { name: !0, content: !0 })),
          b.forEach(c),
          (a = E(u)),
          (s = h(u, "DIV", { class: !0 }));
        var x = m(s);
        De(n.$$.fragment, x),
          (o = E(x)),
          De(d.$$.fragment, x),
          x.forEach(c),
          this.h();
      },
      h() {
        i(t, "name", "description"),
          i(t, "content", r[1]),
          i(s, "class", "min-h-full");
      },
      m(u, b) {
        l(document.head, t),
          B(u, a, b),
          B(u, s, b),
          Ve(n, s, null),
          l(s, o),
          Ve(d, s, null),
          (p = !0);
      },
      p(u, [b]) {
        (!p || b & 4) && e !== (e = u[2]) && (document.title = e),
          (!p || b & 2) && i(t, "content", u[1]);
        const x = {};
        b & 1 && (x.user = u[0].user), n.$set(x);
        const _ = {};
        b & 32 && (_.$$scope = { dirty: b, ctx: u }), d.$set(_);
      },
      i(u) {
        p || (J(n.$$.fragment, u), J(d.$$.fragment, u), (p = !0));
      },
      o(u) {
        Q(n.$$.fragment, u), Q(d.$$.fragment, u), (p = !1);
      },
      d(u) {
        c(t), u && c(a), u && c(s), Le(n), Le(d);
      },
    }
  );
}
function Ht(r, e, t) {
  let a, s, n;
  ft(r, Qe, (u) => t(3, (n = u)));
  let { $$slots: o = {}, $$scope: d } = e,
    { data: p } = e;
  return (
    mt(() => {
      ht(Qe, (n = {}), n);
    }),
    (r.$$set = (u) => {
      "data" in u && t(0, (p = u.data)),
        "$$scope" in u && t(5, (d = u.$$scope));
    }),
    (r.$$.update = () => {
      r.$$.dirty & 8 &&
        t(2, (a = n.title ? n.title + " | " + Ae.name : Ae.name)),
        r.$$.dirty & 8 && t(1, (s = n.description ?? Ae.description));
    }),
    [p, s, a, n, o, d]
  );
}
class Ut extends oe {
  constructor(e) {
    super(), ce(this, e, Ht, Ft, ue, { data: 0 });
  }
}
export { Ut as component };
