import {
  S as me,
  i as ue,
  s as de,
  r as ne,
  o as k,
  q as oe,
  l as i,
  e as f,
  d as I,
  f as O,
  h,
  j as b,
  k as T,
  m as N,
  n as o,
  x as U,
  p as n,
  y as w,
  z as se,
  A as re,
  w as fe,
  B as he,
} from "../chunks/index.229400e6.js";
import { e as le } from "../chunks/forms.4c325e09.js";
function ie(s) {
  let r,
    e,
    t,
    m,
    c,
    A,
    y = (s[0].name || "Unnamed Room") + "",
    g,
    F,
    l,
    C,
    B,
    q,
    d,
    p,
    M,
    R,
    j,
    z,
    P,
    H,
    G,
    D,
    J,
    K,
    _,
    E,
    L,
    x,
    Q,
    W,
    Y;
  return {
    c() {
      (r = f("a")),
        (e = I("back")),
        (m = O()),
        (c = f("h1")),
        (A = I("Edit Chatroom: ")),
        (g = I(y)),
        (F = O()),
        (l = f("div")),
        (C = f("div")),
        (B = I("Change Chatroom Name")),
        (q = O()),
        (d = f("form")),
        (p = f("input")),
        (M = O()),
        (R = f("button")),
        (j = I("Rename")),
        (z = O()),
        (P = f("div")),
        (H = I("Add user to chatroom")),
        (G = O()),
        (D = f("div")),
        (J =
          I(`//TODO: use the searchFriend API to add a single user at a time to the
      chatroom (parseInt(params.slug))`)),
        (K = O()),
        (_ = f("form")),
        (E = f("input")),
        (L = O()),
        (x = f("button")),
        (Q = I("Exit Room")),
        this.h();
    },
    l(a) {
      r = h(a, "A", { href: !0 });
      var u = b(r);
      (e = T(u, "back")),
        u.forEach(i),
        (m = N(a)),
        (c = h(a, "H1", { class: !0 }));
      var X = b(c);
      (A = T(X, "Edit Chatroom: ")),
        (g = T(X, y)),
        X.forEach(i),
        (F = N(a)),
        (l = h(a, "DIV", { style: !0 }));
      var v = b(l);
      C = h(v, "DIV", { class: !0 });
      var Z = b(C);
      (B = T(Z, "Change Chatroom Name")),
        Z.forEach(i),
        (q = N(v)),
        (d = h(v, "FORM", { action: !0, method: !0, class: !0, style: !0 }));
      var S = b(d);
      (p = h(S, "INPUT", { id: !0, name: !0, maxlength: !0 })),
        (M = N(S)),
        (R = h(S, "BUTTON", { id: !0, type: !0 }));
      var $ = b(R);
      (j = T($, "Rename")),
        $.forEach(i),
        S.forEach(i),
        (z = N(v)),
        (P = h(v, "DIV", { class: !0 }));
      var ee = b(P);
      (H = T(ee, "Add user to chatroom")),
        ee.forEach(i),
        (G = N(v)),
        (D = h(v, "DIV", {}));
      var te = b(D);
      (J = T(
        te,
        `//TODO: use the searchFriend API to add a single user at a time to the
      chatroom (parseInt(params.slug))`
      )),
        te.forEach(i),
        (K = N(v)),
        (_ = h(v, "FORM", { action: !0, method: !0 }));
      var V = b(_);
      (E = h(V, "INPUT", { type: !0, name: !0 })),
        (L = N(V)),
        (x = h(V, "BUTTON", { type: !0, id: !0, class: !0 }));
      var ae = b(x);
      (Q = T(ae, "Exit Room")),
        ae.forEach(i),
        V.forEach(i),
        v.forEach(i),
        this.h();
    },
    h() {
      o(r, "href", (t = "/chatrooms/" + s[0].id)),
        o(
          c,
          "class",
          "mb-4 text-center text-4xl font-extrabold md:text-5xl lg:text-6xl"
        ),
        o(C, "class", "mb-2 text-2xl"),
        o(p, "id", "newName"),
        o(p, "name", "newName"),
        o(p, "maxlength", "15"),
        o(R, "id", "renamebutton"),
        o(R, "type", "submit"),
        o(d, "action", "?/rename"),
        o(d, "method", "POST"),
        o(d, "class", "flex"),
        U(d, "margin-bottom", "12px"),
        o(P, "class", "mb-2 text-2xl"),
        o(E, "type", "hidden"),
        o(E, "name", "room"),
        o(x, "type", "submit"),
        o(x, "id", "chatexit"),
        o(x, "class", "chatbuttons"),
        o(_, "action", "?/exit"),
        o(_, "method", "POST"),
        U(l, "display", "flex"),
        U(l, "flex-direction", "column"),
        U(l, "align-items", "center"),
        U(l, "height", "100vh");
    },
    m(a, u) {
      k(a, r, u),
        n(r, e),
        k(a, m, u),
        k(a, c, u),
        n(c, A),
        n(c, g),
        k(a, F, u),
        k(a, l, u),
        n(l, C),
        n(C, B),
        n(l, q),
        n(l, d),
        n(d, p),
        w(p, s[0].name),
        n(d, M),
        n(d, R),
        n(R, j),
        n(l, z),
        n(l, P),
        n(P, H),
        n(l, G),
        n(l, D),
        n(D, J),
        n(l, K),
        n(l, _),
        n(_, E),
        w(E, s[0].id),
        n(_, L),
        n(_, x),
        n(x, Q),
        W ||
          ((Y = [
            se(p, "input", s[2]),
            re(le.call(null, d, pe)),
            se(E, "input", s[3]),
            re(le.call(null, _, _e)),
          ]),
          (W = !0));
    },
    p(a, u) {
      u & 1 && t !== (t = "/chatrooms/" + a[0].id) && o(r, "href", t),
        u & 1 && y !== (y = (a[0].name || "Unnamed Room") + "") && fe(g, y),
        u & 1 && p.value !== a[0].name && w(p, a[0].name),
        u & 1 && w(E, a[0].id);
    },
    d(a) {
      a && i(r), a && i(m), a && i(c), a && i(F), a && i(l), (W = !1), he(Y);
    },
  };
}
function ce(s) {
  let r,
    e = s[0] && s[0].name && ie(s);
  return {
    c() {
      e && e.c(), (r = ne());
    },
    l(t) {
      e && e.l(t), (r = ne());
    },
    m(t, m) {
      e && e.m(t, m), k(t, r, m);
    },
    p(t, [m]) {
      t[0] && t[0].name
        ? e
          ? e.p(t, m)
          : ((e = ie(t)), e.c(), e.m(r.parentNode, r))
        : e && (e.d(1), (e = null));
    },
    i: oe,
    o: oe,
    d(t) {
      e && e.d(t), t && i(r);
    },
  };
}
const pe =
    () =>
    async ({ update: s }) => {
      s({ reset: !1 });
    },
  _e =
    () =>
    async ({ update: s }) => {
      s({ reset: !1 });
    };
function ve(s, r, e) {
  let t,
    { data: m } = r;
  function c() {
    (t.name = this.value), e(0, t), e(1, m);
  }
  function A() {
    (t.id = this.value), e(0, t), e(1, m);
  }
  return (
    (s.$$set = (y) => {
      "data" in y && e(1, (m = y.data));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 2 && e(0, ({ room: t } = m), t);
    }),
    [t, m, c, A]
  );
}
class Ee extends me {
  constructor(r) {
    super(), ue(this, r, ve, ce, de, { data: 1 });
  }
}
export { Ee as component };
