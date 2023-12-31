import {
  S as H,
  i as R,
  s as G,
  e as x,
  d as M,
  f as D,
  h as y,
  j as E,
  k as g,
  l as u,
  m as N,
  n as p,
  x as S,
  o as A,
  p as c,
  q as j,
  y as z,
  z as J,
  A as K,
  w as q,
  B as L,
} from "../chunks/index.229400e6.js";
import { e as Q } from "../chunks/forms.4c325e09.js";
function C(r) {
  let e,
    i,
    s = r[0].content + "",
    o,
    f,
    l,
    I,
    k = r[0].senderName + "",
    h,
    n,
    d,
    a,
    v,
    P,
    T,
    b,
    O,
    w,
    m = r[0].sentAt && F(r);
  return {
    c() {
      (e = x("p")),
        (i = M("Message: ")),
        (o = M(s)),
        (f = D()),
        (l = x("p")),
        (I = M("Sender: ")),
        (h = M(k)),
        (n = D()),
        m && m.c(),
        (d = D()),
        (a = x("form")),
        (v = x("button")),
        (P = M("Delete Message")),
        (T = D()),
        (b = x("input")),
        this.h();
    },
    l(t) {
      e = y(t, "P", {});
      var _ = E(e);
      (i = g(_, "Message: ")),
        (o = g(_, s)),
        _.forEach(u),
        (f = N(t)),
        (l = y(t, "P", { style: !0 }));
      var V = E(l);
      (I = g(V, "Sender: ")),
        (h = g(V, k)),
        V.forEach(u),
        (n = N(t)),
        m && m.l(t),
        (d = N(t)),
        (a = y(t, "FORM", { action: !0, method: !0, style: !0 }));
      var B = E(a);
      v = y(B, "BUTTON", { type: !0, class: !0 });
      var U = E(v);
      (P = g(U, "Delete Message")),
        U.forEach(u),
        (T = N(B)),
        (b = y(B, "INPUT", { type: !0, id: !0, name: !0 })),
        B.forEach(u),
        this.h();
    },
    h() {
      S(l, "color", "inherit"),
        p(v, "type", "submit"),
        p(v, "class", "chatbuttons-s"),
        p(b, "type", "hidden"),
        p(b, "id", "messageId"),
        p(b, "name", "messageId"),
        p(a, "action", "?/deleteMessage"),
        p(a, "method", "POST"),
        S(a, "border", "4px"),
        S(a, "border-color", "green");
    },
    m(t, _) {
      A(t, e, _),
        c(e, i),
        c(e, o),
        A(t, f, _),
        A(t, l, _),
        c(l, I),
        c(l, h),
        A(t, n, _),
        m && m.m(t, _),
        A(t, d, _),
        A(t, a, _),
        c(a, v),
        c(v, P),
        c(a, T),
        c(a, b),
        z(b, r[0].id),
        O || ((w = [J(b, "input", r[2]), K(Q.call(null, a, X))]), (O = !0));
    },
    p(t, _) {
      _ & 1 && s !== (s = t[0].content + "") && q(o, s),
        _ & 1 && k !== (k = t[0].senderName + "") && q(h, k),
        t[0].sentAt
          ? m
            ? m.p(t, _)
            : ((m = F(t)), m.c(), m.m(d.parentNode, d))
          : m && (m.d(1), (m = null)),
        _ & 1 && z(b, t[0].id);
    },
    d(t) {
      t && u(e),
        t && u(f),
        t && u(l),
        t && u(n),
        m && m.d(t),
        t && u(d),
        t && u(a),
        (O = !1),
        L(w);
    },
  };
}
function F(r) {
  let e,
    i,
    s = r[0].sentAt + "",
    o;
  return {
    c() {
      (e = x("p")), (i = M("Time: ")), (o = M(s)), this.h();
    },
    l(f) {
      e = y(f, "P", { style: !0 });
      var l = E(e);
      (i = g(l, "Time: ")), (o = g(l, s)), l.forEach(u), this.h();
    },
    h() {
      S(e, "color", "inherit");
    },
    m(f, l) {
      A(f, e, l), c(e, i), c(e, o);
    },
    p(f, l) {
      l & 1 && s !== (s = f[0].sentAt + "") && q(o, s);
    },
    d(f) {
      f && u(e);
    },
  };
}
function W(r) {
  let e,
    i,
    s,
    o,
    f,
    l,
    I,
    k,
    h,
    n = r[0] && C(r);
  return {
    c() {
      (e = x("div")),
        (i = x("div")),
        (s = x("a")),
        (o = M("Back")),
        (f = D()),
        (l = x("h1")),
        (I = M("Message")),
        (k = D()),
        (h = x("div")),
        n && n.c(),
        this.h();
    },
    l(d) {
      e = y(d, "DIV", { class: !0 });
      var a = E(e);
      i = y(a, "DIV", { class: !0 });
      var v = E(i);
      s = y(v, "A", { href: !0, class: !0, style: !0 });
      var P = E(s);
      (o = g(P, "Back")),
        P.forEach(u),
        (f = N(v)),
        (l = y(v, "H1", { class: !0 }));
      var T = E(l);
      (I = g(T, "Message")),
        T.forEach(u),
        v.forEach(u),
        (k = N(a)),
        (h = y(a, "DIV", { class: !0 }));
      var b = E(h);
      n && n.l(b), b.forEach(u), a.forEach(u), this.h();
    },
    h() {
      p(s, "href", "/notifications"),
        p(
          s,
          "class",
          "mb-2 mr-4 text-3xl font-extrabold md:text-4xl lg:text-2xl"
        ),
        S(s, "text-align", "left"),
        p(
          l,
          "class",
          "mb-4 text-center text-4xl font-extrabold md:text-5xl lg:text-6xl"
        ),
        p(i, "class", "flex items-center"),
        p(h, "class", "message-list mx-auto max-w-3xl items-center"),
        p(e, "class", "background flex min-h-screen flex-col items-center");
    },
    m(d, a) {
      A(d, e, a),
        c(e, i),
        c(i, s),
        c(s, o),
        c(i, f),
        c(i, l),
        c(l, I),
        c(e, k),
        c(e, h),
        n && n.m(h, null);
    },
    p(d, [a]) {
      d[0]
        ? n
          ? n.p(d, a)
          : ((n = C(d)), n.c(), n.m(h, null))
        : n && (n.d(1), (n = null));
    },
    i: j,
    o: j,
    d(d) {
      d && u(e), n && n.d();
    },
  };
}
const X =
  () =>
  async ({ update: r }) => {
    r({ reset: !1 });
  };
function Y(r, e, i) {
  let s,
    { data: o } = e;
  function f() {
    (s.id = this.value), i(0, s), i(1, o);
  }
  return (
    (r.$$set = (l) => {
      "data" in l && i(1, (o = l.data));
    }),
    (r.$$.update = () => {
      r.$$.dirty & 2 && i(0, ({ notification: s } = o), s);
    }),
    [s, o, f]
  );
}
class ee extends H {
  constructor(e) {
    super(), R(this, e, Y, W, G, { data: 1 });
  }
}
export { ee as component };
