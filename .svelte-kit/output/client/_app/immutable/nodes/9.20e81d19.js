import {
  S as V,
  i as z,
  s as G,
  e as h,
  d as N,
  f as R,
  h as u,
  j as y,
  k as x,
  l as f,
  m as S,
  n as m,
  o as H,
  p as l,
  q as j,
  v as J,
  w as K,
} from "../chunks/index.229400e6.js";
function w(c, t, r) {
  const a = c.slice();
  return (a[0] = t[r]), a;
}
function D(c) {
  let t = c[0].username + "",
    r;
  return {
    c() {
      r = N(t);
    },
    l(a) {
      r = x(a, t);
    },
    m(a, d) {
      H(a, r, d);
    },
    p(a, d) {
      d & 1 && t !== (t = a[0].username + "") && K(r, t);
    },
    d(a) {
      a && f(r);
    },
  };
}
function L(c) {
  let t,
    r,
    a,
    d,
    i,
    p,
    k,
    b,
    O,
    I,
    T,
    _,
    U,
    P,
    E,
    q,
    A,
    g = c[0],
    n = [];
  for (let o = 0; o < g.length; o += 1) n[o] = D(w(c, g, o));
  return {
    c() {
      (t = h("div")),
        (r = h("h1")),
        (a = N("Add ChatRoom")),
        (d = R()),
        (i = h("form")),
        (p = h("input")),
        (k = R()),
        (b = h("button")),
        (O = N("search")),
        (I = R());
      for (let o = 0; o < n.length; o += 1) n[o].c();
      (T = N(`
  //list users found and add
  `)),
        (_ = h("form")),
        (U = h("input")),
        (P = R()),
        (E = h("button")),
        (q = N("Submit")),
        (A = N(`
  //list users in chatroom`)),
        this.h();
    },
    l(o) {
      t = u(o, "DIV", {});
      var s = y(t);
      r = u(s, "H1", {});
      var e = y(r);
      (a = x(e, "Add ChatRoom")),
        e.forEach(f),
        (d = S(s)),
        (i = u(s, "FORM", { action: !0, method: !0 }));
      var v = y(i);
      (p = u(v, "INPUT", { placeholder: !0, type: !0, id: !0, name: !0 })),
        (k = S(v)),
        (b = u(v, "BUTTON", { type: !0 }));
      var F = y(b);
      (O = x(F, "search")), F.forEach(f), v.forEach(f), (I = S(s));
      for (let B = 0; B < n.length; B += 1) n[B].l(s);
      (T = x(
        s,
        `
  //list users found and add
  `
      )),
        (_ = u(s, "FORM", {}));
      var C = y(_);
      (U = u(C, "INPUT", { placeholder: !0 })),
        (P = S(C)),
        (E = u(C, "BUTTON", {}));
      var M = y(E);
      (q = x(M, "Submit")),
        M.forEach(f),
        C.forEach(f),
        (A = x(
          s,
          `
  //list users in chatroom`
        )),
        s.forEach(f),
        this.h();
    },
    h() {
      m(p, "placeholder", "Search for user"),
        m(p, "type", "text"),
        m(p, "id", "userName"),
        m(p, "name", "userName"),
        m(b, "type", "submit"),
        m(i, "action", "?/findUser"),
        m(i, "method", "post"),
        m(U, "placeholder", "ChatRoom Name");
    },
    m(o, s) {
      H(o, t, s),
        l(t, r),
        l(r, a),
        l(t, d),
        l(t, i),
        l(i, p),
        l(i, k),
        l(i, b),
        l(b, O),
        l(t, I);
      for (let e = 0; e < n.length; e += 1) n[e] && n[e].m(t, null);
      l(t, T), l(t, _), l(_, U), l(_, P), l(_, E), l(E, q), l(t, A);
    },
    p(o, [s]) {
      if (s & 1) {
        g = o[0];
        let e;
        for (e = 0; e < g.length; e += 1) {
          const v = w(o, g, e);
          n[e] ? n[e].p(v, s) : ((n[e] = D(v)), n[e].c(), n[e].m(t, T));
        }
        for (; e < n.length; e += 1) n[e].d(1);
        n.length = g.length;
      }
    },
    i: j,
    o: j,
    d(o) {
      o && f(t), J(n, o);
    },
  };
}
function Q(c, t, r) {
  let a,
    { data: d } = t;
  return (
    (c.$$set = (i) => {
      "data" in i && r(1, (d = i.data));
    }),
    (c.$$.update = () => {
      c.$$.dirty & 2 && r(0, ({ foundUserCookie: a } = d), a);
    }),
    [a, d]
  );
}
class X extends V {
  constructor(t) {
    super(), z(this, t, Q, L, G, { data: 1 });
  }
}
export { X as component };
