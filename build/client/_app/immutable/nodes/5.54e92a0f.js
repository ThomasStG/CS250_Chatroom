import {
  S as ae,
  i as re,
  s as oe,
  e as m,
  d as w,
  f as P,
  h as p,
  j as v,
  k as y,
  l as f,
  m as R,
  n as _,
  o as k,
  p as c,
  q as K,
  r as x,
  v as le,
  w as te,
} from "../chunks/index.229400e6.js";
function O(s, a, l) {
  const e = s.slice();
  return (e[3] = a[l]), e;
}
function Q(s, a, l) {
  const e = s.slice();
  return (e[3] = a[l]), e;
}
function T(s) {
  let a,
    l = s[1],
    e = [];
  for (let t = 0; t < l.length; t += 1) e[t] = X(Q(s, l, t));
  return {
    c() {
      for (let t = 0; t < e.length; t += 1) e[t].c();
      a = x();
    },
    l(t) {
      for (let o = 0; o < e.length; o += 1) e[o].l(t);
      a = x();
    },
    m(t, o) {
      for (let r = 0; r < e.length; r += 1) e[r] && e[r].m(t, o);
      k(t, a, o);
    },
    p(t, o) {
      if (o & 2) {
        l = t[1];
        let r;
        for (r = 0; r < l.length; r += 1) {
          const i = Q(t, l, r);
          e[r]
            ? e[r].p(i, o)
            : ((e[r] = X(i)), e[r].c(), e[r].m(a.parentNode, a));
        }
        for (; r < e.length; r += 1) e[r].d(1);
        e.length = l.length;
      }
    },
    d(t) {
      le(e, t), t && f(a);
    },
  };
}
function W(s) {
  let a,
    l,
    e,
    t = s[3].name + "",
    o,
    r,
    i;
  return {
    c() {
      (a = m("a")),
        (l = m("p")),
        (e = w("Room Name: ")),
        (o = w(t)),
        (r = P()),
        this.h();
    },
    l(u) {
      a = p(u, "A", { href: !0, class: !0 });
      var d = v(a);
      l = p(d, "P", { class: !0 });
      var g = v(l);
      (e = y(g, "Room Name: ")),
        (o = y(g, t)),
        g.forEach(f),
        (r = R(d)),
        d.forEach(f),
        this.h();
    },
    h() {
      _(l, "class", "text-xl text-white"),
        _(a, "href", (i = "/chatrooms/" + s[3].id)),
        _(
          a,
          "class",
          "block mx-auto mb-4 rounded-lg bg-gray-800 p-6 hover:bg-gray-700"
        );
    },
    m(u, d) {
      k(u, a, d), c(a, l), c(l, e), c(l, o), c(a, r);
    },
    p(u, d) {
      d & 2 && t !== (t = u[3].name + "") && te(o, t),
        d & 2 && i !== (i = "/chatrooms/" + u[3].id) && _(a, "href", i);
    },
    d(u) {
      u && f(a);
    },
  };
}
function X(s) {
  let a,
    l = s[3].Chatroom && W(s);
  return {
    c() {
      l && l.c(), (a = x());
    },
    l(e) {
      l && l.l(e), (a = x());
    },
    m(e, t) {
      l && l.m(e, t), k(e, a, t);
    },
    p(e, t) {
      e[3].Chatroom
        ? l
          ? l.p(e, t)
          : ((l = W(e)), l.c(), l.m(a.parentNode, a))
        : l && (l.d(1), (l = null));
    },
    d(e) {
      l && l.d(e), e && f(a);
    },
  };
}
function Y(s) {
  let a,
    l = s[1],
    e = [];
  for (let t = 0; t < l.length; t += 1) e[t] = ee(O(s, l, t));
  return {
    c() {
      for (let t = 0; t < e.length; t += 1) e[t].c();
      a = x();
    },
    l(t) {
      for (let o = 0; o < e.length; o += 1) e[o].l(t);
      a = x();
    },
    m(t, o) {
      for (let r = 0; r < e.length; r += 1) e[r] && e[r].m(t, o);
      k(t, a, o);
    },
    p(t, o) {
      if (o & 3) {
        l = t[1];
        let r;
        for (r = 0; r < l.length; r += 1) {
          const i = O(t, l, r);
          e[r]
            ? e[r].p(i, o)
            : ((e[r] = ee(i)), e[r].c(), e[r].m(a.parentNode, a));
        }
        for (; r < e.length; r += 1) e[r].d(1);
        e.length = l.length;
      }
    },
    d(t) {
      le(e, t), t && f(a);
    },
  };
}
function Z(s) {
  let a,
    l,
    e,
    t,
    o = s[0] && $(s);
  return {
    c() {
      (a = m("a")), (l = m("p")), o && o.c(), (e = P()), this.h();
    },
    l(r) {
      a = p(r, "A", { href: !0, class: !0 });
      var i = v(a);
      l = p(i, "P", { class: !0 });
      var u = v(l);
      o && o.l(u), u.forEach(f), (e = R(i)), i.forEach(f), this.h();
    },
    h() {
      _(l, "class", "text-xl text-white"),
        _(a, "href", (t = "/chatrooms/" + s[3].id)),
        _(
          a,
          "class",
          "block mx-auto mb-4 rounded-lg bg-gray-800 p-6 hover:bg-gray-700"
        );
    },
    m(r, i) {
      k(r, a, i), c(a, l), o && o.m(l, null), c(a, e);
    },
    p(r, i) {
      r[0]
        ? o
          ? o.p(r, i)
          : ((o = $(r)), o.c(), o.m(l, null))
        : o && (o.d(1), (o = null)),
        i & 2 && t !== (t = "/chatrooms/" + r[3].id) && _(a, "href", t);
    },
    d(r) {
      r && f(a), o && o.d();
    },
  };
}
function $(s) {
  let a,
    l = s[3].name.replace("‎", "").replace(s[0].username, "") + "",
    e;
  return {
    c() {
      (a = w("Friend Name: ")), (e = w(l));
    },
    l(t) {
      (a = y(t, "Friend Name: ")), (e = y(t, l));
    },
    m(t, o) {
      k(t, a, o), k(t, e, o);
    },
    p(t, o) {
      o & 3 &&
        l !==
          (l = t[3].name.replace("‎", "").replace(t[0].username, "") + "") &&
        te(e, l);
    },
    d(t) {
      t && f(a), t && f(e);
    },
  };
}
function ee(s) {
  let a,
    l = s[3] && s[3].Chatroom === !1 && Z(s);
  return {
    c() {
      l && l.c(), (a = x());
    },
    l(e) {
      l && l.l(e), (a = x());
    },
    m(e, t) {
      l && l.m(e, t), k(e, a, t);
    },
    p(e, t) {
      e[3] && e[3].Chatroom === !1
        ? l
          ? l.p(e, t)
          : ((l = Z(e)), l.c(), l.m(a.parentNode, a))
        : l && (l.d(1), (l = null));
    },
    d(e) {
      l && l.d(e), e && f(a);
    },
  };
}
function se(s) {
  let a,
    l,
    e,
    t,
    o,
    r,
    i,
    u,
    d,
    g,
    V,
    j,
    q,
    E,
    D,
    F,
    H,
    C,
    n = s[1] && T(s),
    h = s[1] && Y(s);
  return {
    c() {
      (a = m("div")),
        (l = m("ul")),
        (e = m("li")),
        (t = m("h1")),
        (o = w("Chat Rooms")),
        (r = P()),
        (i = m("div")),
        n && n.c(),
        (u = P()),
        (d = m("div")),
        (g = m("a")),
        (V = m("p")),
        (j = w("Create a New Chatroom")),
        (q = P()),
        (E = m("li")),
        (D = m("h1")),
        (F = w("Direct Messages")),
        (H = P()),
        (C = m("div")),
        h && h.c(),
        this.h();
    },
    l(b) {
      a = p(b, "DIV", {});
      var N = v(a);
      l = p(N, "UL", { class: !0 });
      var A = v(l);
      e = p(A, "LI", {});
      var I = v(e);
      t = p(I, "H1", { class: !0 });
      var M = v(t);
      (o = y(M, "Chat Rooms")),
        M.forEach(f),
        (r = R(I)),
        (i = p(I, "DIV", { class: !0 }));
      var S = v(i);
      n && n.l(S), S.forEach(f), (u = R(I)), (d = p(I, "DIV", { class: !0 }));
      var U = v(d);
      g = p(U, "A", { href: !0, class: !0 });
      var z = v(g);
      V = p(z, "P", {});
      var B = v(V);
      (j = y(B, "Create a New Chatroom")),
        B.forEach(f),
        z.forEach(f),
        U.forEach(f),
        I.forEach(f),
        (q = R(A)),
        (E = p(A, "LI", {}));
      var L = v(E);
      D = p(L, "H1", { class: !0 });
      var G = v(D);
      (F = y(G, "Direct Messages")),
        G.forEach(f),
        (H = R(L)),
        (C = p(L, "DIV", { class: !0 }));
      var J = v(C);
      h && h.l(J),
        J.forEach(f),
        L.forEach(f),
        A.forEach(f),
        N.forEach(f),
        this.h();
    },
    h() {
      _(
        t,
        "class",
        "mb-4 text-center text-4xl font-extrabold md:text-5xl lg:text-6xl"
      ),
        _(i, "class", "mx-auto max-w-3xl"),
        _(g, "href", "/chatrooms/create"),
        _(
          g,
          "class",
          "block mx-auto p-3 rounded bg-blue-500 text-white hover:bg-blue-600"
        ),
        _(d, "class", "text-center"),
        _(
          D,
          "class",
          "mb-4 text-center text-4xl font-extrabold md:text-5xl lg:text-6xl"
        ),
        _(C, "class", "mx-auto max-w-3xl"),
        _(l, "class", "flex flex-wrap justify-center gap-8 dark:style-light");
    },
    m(b, N) {
      k(b, a, N),
        c(a, l),
        c(l, e),
        c(e, t),
        c(t, o),
        c(e, r),
        c(e, i),
        n && n.m(i, null),
        c(e, u),
        c(e, d),
        c(d, g),
        c(g, V),
        c(V, j),
        c(l, q),
        c(l, E),
        c(E, D),
        c(D, F),
        c(E, H),
        c(E, C),
        h && h.m(C, null);
    },
    p(b, [N]) {
      b[1]
        ? n
          ? n.p(b, N)
          : ((n = T(b)), n.c(), n.m(i, null))
        : n && (n.d(1), (n = null)),
        b[1]
          ? h
            ? h.p(b, N)
            : ((h = Y(b)), h.c(), h.m(C, null))
          : h && (h.d(1), (h = null));
    },
    i: K,
    o: K,
    d(b) {
      b && f(a), n && n.d(), h && h.d();
    },
  };
}
function ie(s, a, l) {
  let e,
    t,
    { data: o } = a;
  return (
    (s.$$set = (r) => {
      "data" in r && l(2, (o = r.data));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 4 && l(1, ({ rooms: e, usr: t } = o), e, (l(0, t), l(2, o)));
    }),
    [t, e, o]
  );
}
class ce extends ae {
  constructor(a) {
    super(), re(this, a, ie, se, oe, { data: 2 });
  }
}
export { ce as component };
