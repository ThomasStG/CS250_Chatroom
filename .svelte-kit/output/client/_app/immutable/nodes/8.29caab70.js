import {
  S as x,
  i as $,
  s as ee,
  e as y,
  d as O,
  f as D,
  h as E,
  j as C,
  k as P,
  l as k,
  m as S,
  n as b,
  o as B,
  p as n,
  y as F,
  z as A,
  C as X,
  q,
  B as te,
  w as Y,
  D as Z,
} from "../chunks/index.229400e6.js";
import { g as le } from "../chunks/navigation.71f60e69.js";
function R(i, e, t) {
  const a = i.slice();
  return (a[12] = e[t]), a;
}
function z(i, e, t) {
  const a = i.slice();
  return (a[12] = e[t]), a;
}
function K(i, e) {
  let t,
    a,
    p = e[12] + "",
    l,
    o,
    d,
    _,
    v,
    I,
    U;
  function m() {
    return e[9](e[12]);
  }
  return {
    key: i,
    first: null,
    c() {
      (t = y("div")),
        (a = y("p")),
        (l = O(p)),
        (o = D()),
        (d = y("button")),
        (_ = O("Add to Groupchat")),
        (v = D()),
        this.h();
    },
    l(f) {
      t = E(f, "DIV", { class: !0 });
      var w = C(t);
      a = E(w, "P", { class: !0 });
      var c = C(a);
      (l = P(c, p)),
        c.forEach(k),
        (o = S(w)),
        (d = E(w, "BUTTON", { class: !0 }));
      var N = C(d);
      (_ = P(N, "Add to Groupchat")),
        N.forEach(k),
        (v = S(w)),
        w.forEach(k),
        this.h();
    },
    h() {
      b(a, "class", "mr-2"),
        b(d, "class", "bg-green-500 text-white rounded p-2 hover:bg-green-600"),
        b(t, "class", "flex gap-2 items-center"),
        (this.first = t);
    },
    m(f, w) {
      B(f, t, w),
        n(t, a),
        n(a, l),
        n(t, o),
        n(t, d),
        n(d, _),
        n(t, v),
        I || ((U = A(d, "click", m)), (I = !0));
    },
    p(f, w) {
      (e = f), w & 4 && p !== (p = e[12] + "") && Y(l, p);
    },
    d(f) {
      f && k(t), (I = !1), U();
    },
  };
}
function L(i) {
  let e,
    t,
    a,
    p,
    l = [],
    o = new Map(),
    d,
    _,
    v,
    I,
    U,
    m,
    f,
    w,
    c,
    N = i[3];
  const j = (h) => h[12];
  for (let h = 0; h < N.length; h += 1) {
    let s = R(i, N, h),
      r = j(s);
    o.set(r, (l[h] = Q(r, s)));
  }
  let g = i[1] && W(i);
  return {
    c() {
      (e = y("div")), (t = y("h2")), (a = O("Added to groupchat:")), (p = D());
      for (let h = 0; h < l.length; h += 1) l[h].c();
      (d = D()),
        (_ = y("div")),
        (v = y("h2")),
        (I = O("Chatroom name")),
        (U = D()),
        (m = y("input")),
        (f = D()),
        g && g.c(),
        this.h();
    },
    l(h) {
      e = E(h, "DIV", { class: !0 });
      var s = C(e);
      t = E(s, "H2", { class: !0 });
      var r = C(t);
      (a = P(r, "Added to groupchat:")), r.forEach(k), (p = S(s));
      for (let V = 0; V < l.length; V += 1) l[V].l(s);
      (d = S(s)), (_ = E(s, "DIV", { class: !0 }));
      var u = C(_);
      v = E(u, "H2", { class: !0 });
      var T = C(v);
      (I = P(T, "Chatroom name")),
        T.forEach(k),
        (U = S(u)),
        (m = E(u, "INPUT", { class: !0, placeholder: !0, maxlength: !0 })),
        (f = S(u)),
        g && g.l(u),
        u.forEach(k),
        s.forEach(k),
        this.h();
    },
    h() {
      b(t, "class", "text-lg font-semibold"),
        b(v, "class", "text-lg font-semibold"),
        b(m, "class", "border p-2 rounded"),
        b(m, "placeholder", "Chatname"),
        b(m, "maxlength", "14"),
        b(_, "class", "flex gap-2 items-center mt-2"),
        b(e, "class", "mb-4");
    },
    m(h, s) {
      B(h, e, s), n(e, t), n(t, a), n(e, p);
      for (let r = 0; r < l.length; r += 1) l[r] && l[r].m(e, null);
      n(e, d),
        n(e, _),
        n(_, v),
        n(v, I),
        n(_, U),
        n(_, m),
        F(m, i[1]),
        n(_, f),
        g && g.m(_, null),
        w || ((c = A(m, "input", i[10])), (w = !0));
    },
    p(h, s) {
      s & 8 && ((N = h[3]), (l = X(l, s, j, 1, h, N, o, e, Z, Q, d, R))),
        s & 2 && m.value !== h[1] && F(m, h[1]),
        h[1]
          ? g
            ? g.p(h, s)
            : ((g = W(h)), g.c(), g.m(_, null))
          : g && (g.d(1), (g = null));
    },
    d(h) {
      h && k(e);
      for (let s = 0; s < l.length; s += 1) l[s].d();
      g && g.d(), (w = !1), c();
    },
  };
}
function Q(i, e) {
  let t,
    a = e[12] + "",
    p;
  return {
    key: i,
    first: null,
    c() {
      (t = y("p")), (p = O(a)), this.h();
    },
    l(l) {
      t = E(l, "P", {});
      var o = C(t);
      (p = P(o, a)), o.forEach(k), this.h();
    },
    h() {
      this.first = t;
    },
    m(l, o) {
      B(l, t, o), n(t, p);
    },
    p(l, o) {
      (e = l), o & 8 && a !== (a = e[12] + "") && Y(p, a);
    },
    d(l) {
      l && k(t);
    },
  };
}
function W(i) {
  let e, t, a, p;
  return {
    c() {
      (e = y("button")), (t = O("Create Groupchat")), this.h();
    },
    l(l) {
      e = E(l, "BUTTON", { class: !0 });
      var o = C(e);
      (t = P(o, "Create Groupchat")), o.forEach(k), this.h();
    },
    h() {
      b(e, "class", "bg-purple-500 text-white rounded p-2 hover:bg-purple-600");
    },
    m(l, o) {
      B(l, e, o), n(e, t), a || ((p = A(e, "click", i[6])), (a = !0));
    },
    p: q,
    d(l) {
      l && k(e), (a = !1), p();
    },
  };
}
function se(i) {
  let e,
    t,
    a,
    p,
    l,
    o,
    d,
    _,
    v,
    I,
    U,
    m,
    f = [],
    w = new Map(),
    c,
    N,
    j,
    g = i[2];
  const h = (r) => r[12];
  for (let r = 0; r < g.length; r += 1) {
    let u = z(i, g, r),
      T = h(u);
    w.set(T, (f[r] = K(T, u)));
  }
  let s = i[3].length > 0 && L(i);
  return {
    c() {
      (e = y("div")),
        (t = y("div")),
        (a = y("h1")),
        (p = O("Create Chatroom")),
        (l = D()),
        (o = y("div")),
        (d = y("input")),
        (_ = D()),
        (v = y("button")),
        (I = O("Search")),
        (U = D()),
        (m = y("div"));
      for (let r = 0; r < f.length; r += 1) f[r].c();
      (c = D()), s && s.c(), this.h();
    },
    l(r) {
      e = E(r, "DIV", { class: !0 });
      var u = C(e);
      t = E(u, "DIV", { class: !0 });
      var T = C(t);
      a = E(T, "H1", { class: !0 });
      var V = C(a);
      (p = P(V, "Create Chatroom")),
        V.forEach(k),
        (l = S(T)),
        (o = E(T, "DIV", { class: !0 }));
      var G = C(o);
      (d = E(G, "INPUT", { class: !0, placeholder: !0 })),
        (_ = S(G)),
        (v = E(G, "BUTTON", { class: !0, type: !0 }));
      var J = C(v);
      (I = P(J, "Search")),
        J.forEach(k),
        G.forEach(k),
        T.forEach(k),
        (U = S(u)),
        (m = E(u, "DIV", { class: !0 }));
      var M = C(m);
      for (let H = 0; H < f.length; H += 1) f[H].l(M);
      M.forEach(k), (c = S(u)), s && s.l(u), u.forEach(k), this.h();
    },
    h() {
      b(a, "class", "text-lg font-semibold"),
        b(d, "class", "border p-2 rounded"),
        b(d, "placeholder", "User Name"),
        b(v, "class", "bg-blue-500 text-white rounded p-2 hover:bg-blue-600"),
        b(v, "type", "submit"),
        b(o, "class", "flex gap-2 items-center mt-2"),
        b(t, "class", "mb-4"),
        b(m, "class", "mb-4"),
        b(e, "class", "p-4");
    },
    m(r, u) {
      B(r, e, u),
        n(e, t),
        n(t, a),
        n(a, p),
        n(t, l),
        n(t, o),
        n(o, d),
        F(d, i[0]),
        n(o, _),
        n(o, v),
        n(v, I),
        n(e, U),
        n(e, m);
      for (let T = 0; T < f.length; T += 1) f[T] && f[T].m(m, null);
      n(e, c),
        s && s.m(e, null),
        N || ((j = [A(d, "input", i[8]), A(v, "click", i[4])]), (N = !0));
    },
    p(r, [u]) {
      u & 1 && d.value !== r[0] && F(d, r[0]),
        u & 36 && ((g = r[2]), (f = X(f, u, h, 1, r, g, w, m, Z, K, null, z))),
        r[3].length > 0
          ? s
            ? s.p(r, u)
            : ((s = L(r)), s.c(), s.m(e, null))
          : s && (s.d(1), (s = null));
    },
    i: q,
    o: q,
    d(r) {
      r && k(e);
      for (let u = 0; u < f.length; u += 1) f[u].d();
      s && s.d(), (N = !1), te(j);
    },
  };
}
function ae(i, e, t) {
  let a,
    { data: p } = e,
    l = "",
    o = "",
    d = [],
    _ = [];
  async function v() {
    try {
      const c = await fetch("/api/searchFriend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: l }),
      });
      if (!c.ok) throw new Error("Network response was not ok " + c.statusText);
      const { user: N } = await c.json();
      t(2, (d = [...d, N.id]));
    } catch (c) {
      console.error("Fetch operation error:", c);
    }
  }
  function I(c) {
    t(3, (_ = [..._, c]));
  }
  async function U() {
    try {
      if ((_.push(a), o.length > 15 || o.length < 3))
        throw new Error("Invalid chatname length");
      const c = await fetch("/api/createRoom", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ addedUsers: _, chatname: o }),
      });
      if (!c.ok) throw new Error("Network response was not ok " + c.statusText);
      le("/chatrooms");
    } catch (c) {
      console.error("Fetch operation error:", c);
    }
  }
  function m() {
    (l = this.value), t(0, l);
  }
  const f = (c) => I(c);
  function w() {
    (o = this.value), t(1, o);
  }
  return (
    (i.$$set = (c) => {
      "data" in c && t(7, (p = c.data));
    }),
    (i.$$.update = () => {
      i.$$.dirty & 128 && ({ userId: a } = p);
    }),
    [l, o, d, _, v, I, U, p, m, f, w]
  );
}
class ne extends x {
  constructor(e) {
    super(), $(this, e, ae, se, ee, { data: 7 });
  }
}
export { ne as component };
