import {
  S as j,
  i as q,
  s as F,
  e as g,
  d as b,
  f as N,
  h as v,
  j as y,
  k as x,
  l as m,
  m as V,
  n as u,
  x as p,
  o as k,
  p as h,
  q as E,
  v as M,
  r as D,
  w as P,
} from "../chunks/index.229400e6.js";
function w(i, t, e) {
  const a = i.slice();
  return (a[3] = t[e]), a;
}
function C(i) {
  let t,
    e,
    a,
    c,
    s =
      (i[3].name = (i[3].name = i[3].name.replace("‎", "")).replace(
        i[0].username,
        ""
      )) + "",
    f,
    r,
    n;
  return {
    c() {
      (t = g("div")),
        (e = g("a")),
        (a = g("p")),
        (c = b("Friend Name: ")),
        (f = b(s)),
        (n = N()),
        this.h();
    },
    l(o) {
      t = v(o, "DIV", { class: !0, style: !0 });
      var l = y(t);
      e = v(l, "A", { href: !0, class: !0 });
      var d = y(e);
      a = v(d, "P", { class: !0 });
      var _ = y(a);
      (c = x(_, "Friend Name: ")),
        (f = x(_, s)),
        _.forEach(m),
        d.forEach(m),
        (n = V(l)),
        l.forEach(m),
        this.h();
    },
    h() {
      u(a, "class", "text-xl text-white"),
        u(e, "href", (r = "/chatrooms/" + i[3].id)),
        u(
          e,
          "class",
          "mb-4 block rounded-lg bg-gray-800 p-6 hover:bg-gray-700"
        ),
        u(t, "class", "flex"),
        p(t, "position", "relative");
    },
    m(o, l) {
      k(o, t, l), h(t, e), h(e, a), h(a, c), h(a, f), h(t, n);
    },
    p(o, l) {
      l & 3 &&
        s !==
          (s =
            (o[3].name = (o[3].name = o[3].name.replace("‎", "")).replace(
              o[0].username,
              ""
            )) + "") &&
        P(f, s),
        l & 2 && r !== (r = "/chatrooms/" + o[3].id) && u(e, "href", r);
    },
    d(o) {
      o && m(t);
    },
  };
}
function I(i) {
  let t,
    e = i[3] && i[3].Chatroom === !1 && C(i);
  return {
    c() {
      e && e.c(), (t = D());
    },
    l(a) {
      e && e.l(a), (t = D());
    },
    m(a, c) {
      e && e.m(a, c), k(a, t, c);
    },
    p(a, c) {
      a[3] && a[3].Chatroom === !1
        ? e
          ? e.p(a, c)
          : ((e = C(a)), e.c(), e.m(t.parentNode, t))
        : e && (e.d(1), (e = null));
    },
    d(a) {
      e && e.d(a), a && m(t);
    },
  };
}
function S(i) {
  let t,
    e,
    a,
    c,
    s,
    f = i[1],
    r = [];
  for (let n = 0; n < f.length; n += 1) r[n] = I(w(i, f, n));
  return {
    c() {
      (t = g("div")),
        (e = g("h1")),
        (a = b("Direct Messages")),
        (c = N()),
        (s = g("div"));
      for (let n = 0; n < r.length; n += 1) r[n].c();
      this.h();
    },
    l(n) {
      t = v(n, "DIV", { class: !0, style: !0 });
      var o = y(t);
      e = v(o, "H1", { class: !0 });
      var l = y(e);
      (a = x(l, "Direct Messages")),
        l.forEach(m),
        (c = V(o)),
        (s = v(o, "DIV", { class: !0, style: !0 }));
      var d = y(s);
      for (let _ = 0; _ < r.length; _ += 1) r[_].l(d);
      d.forEach(m), o.forEach(m), this.h();
    },
    h() {
      u(
        e,
        "class",
        "mb-4 text-center text-4xl font-extrabold text-white md:text-5xl lg:text-6xl"
      ),
        u(s, "class", "mx-auto max-w-3xl"),
        p(s, "left", "50%"),
        p(s, "justify-content", "center"),
        p(s, "allign-items", "center"),
        p(s, "display", "flex"),
        u(t, "class", "min-h-screen bg-gray-900 py-8"),
        p(t, "margin-right", "auto"),
        p(t, "margin-left", "auto");
    },
    m(n, o) {
      k(n, t, o), h(t, e), h(e, a), h(t, c), h(t, s);
      for (let l = 0; l < r.length; l += 1) r[l] && r[l].m(s, null);
    },
    p(n, [o]) {
      if (o & 3) {
        f = n[1];
        let l;
        for (l = 0; l < f.length; l += 1) {
          const d = w(n, f, l);
          r[l] ? r[l].p(d, o) : ((r[l] = I(d)), r[l].c(), r[l].m(s, null));
        }
        for (; l < r.length; l += 1) r[l].d(1);
        r.length = f.length;
      }
    },
    i: E,
    o: E,
    d(n) {
      n && m(t), M(r, n);
    },
  };
}
function A(i, t, e) {
  let a,
    c,
    { data: s } = t;
  return (
    console.log(2),
    (i.$$set = (f) => {
      "data" in f && e(2, (s = f.data));
    }),
    (i.$$.update = () => {
      i.$$.dirty & 4 && e(1, ({ rooms: a, usr: c } = s), a, (e(0, c), e(2, s)));
    }),
    [c, a, s]
  );
}
class z extends j {
  constructor(t) {
    super(), q(this, t, A, S, F, { data: 2 });
  }
}
export { z as component };
