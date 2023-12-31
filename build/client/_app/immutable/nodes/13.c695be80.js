import {
  S as H,
  i as B,
  s as F,
  e as m,
  d as x,
  f as A,
  h as g,
  j as y,
  k,
  l as v,
  m as P,
  x as b,
  n as I,
  o as S,
  p as f,
  q as j,
  v as G,
  w as q,
} from "../chunks/index.229400e6.js";
function Y(h, t, n) {
  const e = h.slice();
  return (e[3] = t[n]), e;
}
function z(h) {
  let t,
    n,
    e,
    o,
    c,
    i = h[3].senderName + "",
    E,
    p,
    l,
    r,
    a = h[3].sentAt + "",
    _,
    s;
  return {
    c() {
      (t = m("div")),
        (n = m("div")),
        (e = m("a")),
        (o = m("p")),
        (c = x("sender: ")),
        (E = x(i)),
        (p = A()),
        (l = m("p")),
        (r = x("sent at: ")),
        (_ = x(a)),
        this.h();
    },
    l(d) {
      t = g(d, "DIV", { class: !0 });
      var u = y(t);
      n = g(u, "DIV", {});
      var N = y(n);
      e = g(N, "A", { href: !0, class: !0 });
      var D = y(e);
      o = g(D, "P", {});
      var V = y(o);
      (c = k(V, "sender: ")),
        (E = k(V, i)),
        V.forEach(v),
        (p = P(D)),
        (l = g(D, "P", {}));
      var w = y(l);
      (r = k(w, "sent at: ")),
        (_ = k(w, a)),
        w.forEach(v),
        D.forEach(v),
        N.forEach(v),
        u.forEach(v),
        this.h();
    },
    h() {
      I(e, "href", (s = "/notifications/" + h[3].id)),
        I(e, "class", "chatbuttons"),
        I(t, "class", "list svelte-1uwsb12");
    },
    m(d, u) {
      S(d, t, u),
        f(t, n),
        f(n, e),
        f(e, o),
        f(o, c),
        f(o, E),
        f(e, p),
        f(e, l),
        f(l, r),
        f(l, _);
    },
    p(d, u) {
      u & 1 && i !== (i = d[3].senderName + "") && q(E, i),
        u & 1 && a !== (a = d[3].sentAt + "") && q(_, a),
        u & 1 && s !== (s = "/notifications/" + d[3].id) && I(e, "href", s);
    },
    d(d) {
      d && v(t);
    },
  };
}
function C(h) {
  let t, n;
  return {
    c() {
      (t = m("span")), (n = x("No Notifications Yet!")), this.h();
    },
    l(e) {
      t = g(e, "SPAN", { style: !0, class: !0 });
      var o = y(t);
      (n = k(o, "No Notifications Yet!")), o.forEach(v), this.h();
    },
    h() {
      b(t, "text-align", "center"),
        b(t, "font-size", "x-large"),
        I(
          t,
          "class",
          "bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent"
        );
    },
    m(e, o) {
      S(e, t, o), f(t, n);
    },
    d(e) {
      e && v(t);
    },
  };
}
function J(h) {
  let t,
    n,
    e,
    o,
    c,
    i,
    E,
    p = h[0],
    l = [];
  for (let a = 0; a < p.length; a += 1) l[a] = z(Y(h, p, a));
  let r = h[0].length == 0 && C();
  return {
    c() {
      (t = m("div")),
        (n = m("h1")),
        (e = x("Notifications")),
        (o = A()),
        (c = m("div")),
        (i = m("div"));
      for (let a = 0; a < l.length; a += 1) l[a].c();
      (E = A()), r && r.c(), this.h();
    },
    l(a) {
      t = g(a, "DIV", { class: !0 });
      var _ = y(t);
      n = g(_, "H1", {});
      var s = y(n);
      (e = k(s, "Notifications")),
        s.forEach(v),
        (o = P(_)),
        (c = g(_, "DIV", { style: !0 }));
      var d = y(c);
      i = g(d, "DIV", { style: !0 });
      var u = y(i);
      for (let N = 0; N < l.length; N += 1) l[N].l(u);
      (E = P(u)),
        r && r.l(u),
        u.forEach(v),
        d.forEach(v),
        _.forEach(v),
        this.h();
    },
    h() {
      b(i, "display", "flex"),
        b(i, "flex-direction", "column"),
        b(i, "justify-content", "center"),
        b(c, "margin-left", "auto"),
        b(c, "margin-right", "auto"),
        b(c, "width", "35%"),
        I(t, "class", "background");
    },
    m(a, _) {
      S(a, t, _), f(t, n), f(n, e), f(t, o), f(t, c), f(c, i);
      for (let s = 0; s < l.length; s += 1) l[s] && l[s].m(i, null);
      f(i, E), r && r.m(i, null);
    },
    p(a, [_]) {
      if (_ & 1) {
        p = a[0];
        let s;
        for (s = 0; s < p.length; s += 1) {
          const d = Y(a, p, s);
          l[s] ? l[s].p(d, _) : ((l[s] = z(d)), l[s].c(), l[s].m(i, E));
        }
        for (; s < l.length; s += 1) l[s].d(1);
        l.length = p.length;
      }
      a[0].length == 0
        ? r || ((r = C()), r.c(), r.m(i, null))
        : r && (r.d(1), (r = null));
    },
    i: j,
    o: j,
    d(a) {
      a && v(t), G(l, a), r && r.d();
    },
  };
}
function K(h, t, n) {
  let e,
    o,
    { data: c } = t;
  return (
    (h.$$set = (i) => {
      "data" in i && n(1, (c = i.data));
    }),
    (h.$$.update = () => {
      h.$$.dirty & 2 && n(0, ({ userId: e, notifications: o } = c), o);
    }),
    [o, c]
  );
}
class M extends H {
  constructor(t) {
    super(), B(this, t, K, J, F, { data: 1 });
  }
}
export { M as component };
