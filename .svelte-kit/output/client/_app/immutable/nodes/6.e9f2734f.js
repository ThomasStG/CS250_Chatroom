import {
  S as ae,
  i as re,
  s as ie,
  c as W,
  e as y,
  f as D,
  d as B,
  h as I,
  j as T,
  m as O,
  k as N,
  l as k,
  n as b,
  o as U,
  p as f,
  z as R,
  R as fe,
  T as de,
  u as Y,
  g as K,
  a as Q,
  t as P,
  b as V,
  B as q,
  U as ce,
  P as ue,
  x as j,
  A as C,
  E as X,
  w as z,
  r as H,
  J as G,
  v as _e,
  y as S,
  V as he,
  F as me,
  G as pe,
  H as be,
  W as ge,
  I as ve,
  q as Ee,
} from "../chunks/index.229400e6.js";
import { e as J } from "../chunks/forms.4c325e09.js";
const ke = (l) => ({}),
  Z = (l) => ({});
function Me(l) {
  let e, s, o, n, r, t, a, d, h, M, v, p, E, c;
  const u = l[3].header,
    m = W(u, l, l[2], Z),
    i = l[3].default,
    _ = W(i, l, l[2], null);
  return {
    c() {
      (e = y("dialog")),
        (s = y("div")),
        m && m.c(),
        (o = D()),
        (n = y("hr")),
        (r = D()),
        _ && _.c(),
        (t = D()),
        (a = y("hr")),
        (d = D()),
        (h = y("div")),
        (M = y("button")),
        (v = B("X")),
        this.h();
    },
    l(g) {
      e = I(g, "DIALOG", { class: !0 });
      var A = T(e);
      s = I(A, "DIV", {});
      var w = T(s);
      m && m.l(w),
        (o = O(w)),
        (n = I(w, "HR", {})),
        (r = O(w)),
        _ && _.l(w),
        (t = O(w)),
        (a = I(w, "HR", {})),
        (d = O(w)),
        (h = I(w, "DIV", {}));
      var F = T(h);
      M = I(F, "BUTTON", { class: !0 });
      var L = T(M);
      (v = N(L, "X")),
        L.forEach(k),
        F.forEach(k),
        w.forEach(k),
        A.forEach(k),
        this.h();
    },
    h() {
      b(M, "class", "close svelte-e9s364"), b(e, "class", "svelte-e9s364");
    },
    m(g, A) {
      U(g, e, A),
        f(e, s),
        m && m.m(s, null),
        f(s, o),
        f(s, n),
        f(s, r),
        _ && _.m(s, null),
        f(s, t),
        f(s, a),
        f(s, d),
        f(s, h),
        f(h, M),
        f(M, v),
        l[6](e),
        (p = !0),
        E ||
          ((c = [
            R(M, "click", l[5]),
            R(s, "click", fe(l[4])),
            R(e, "close", l[7]),
            R(e, "click", de(l[8])),
          ]),
          (E = !0));
    },
    p(g, [A]) {
      m &&
        m.p &&
        (!p || A & 4) &&
        Y(m, u, g, g[2], p ? Q(u, g[2], A, ke) : K(g[2]), Z),
        _ &&
          _.p &&
          (!p || A & 4) &&
          Y(_, i, g, g[2], p ? Q(i, g[2], A, null) : K(g[2]), null);
    },
    i(g) {
      p || (P(m, g), P(_, g), (p = !0));
    },
    o(g) {
      V(m, g), V(_, g), (p = !1);
    },
    d(g) {
      g && k(e), m && m.d(g), _ && _.d(g), l[6](null), (E = !1), q(c);
    },
  };
}
function ye(l, e, s) {
  let { $$slots: o = {}, $$scope: n } = e,
    { showModal: r } = e,
    t;
  function a(p) {
    ce.call(this, l, p);
  }
  const d = () => t.close();
  function h(p) {
    ue[p ? "unshift" : "push"](() => {
      (t = p), s(1, t);
    });
  }
  const M = () => s(0, (r = !1)),
    v = () => t.close();
  return (
    (l.$$set = (p) => {
      "showModal" in p && s(0, (r = p.showModal)),
        "$$scope" in p && s(2, (n = p.$$scope));
    }),
    (l.$$.update = () => {
      l.$$.dirty & 3 && t && r && t.showModal();
    }),
    [r, t, n, o, a, d, h, M, v]
  );
}
class Ie extends ae {
  constructor(e) {
    super(), re(this, e, ye, Me, ie, { showModal: 0 });
  }
}
function $(l, e, s) {
  const o = l.slice();
  return (o[14] = e[s]), (o[15] = e), (o[16] = s), o;
}
function x(l) {
  let e,
    s,
    o = l[4].name + "",
    n,
    r,
    t,
    a,
    d,
    h,
    M,
    v,
    p,
    E,
    c,
    u;
  return {
    c() {
      (e = y("h1")),
        (s = B("Room: ")),
        (n = B(o)),
        (r = D()),
        (t = y("div")),
        (a = y("a")),
        (d = B("Back")),
        (h = D()),
        (M = y("h1")),
        (v = B("Messages")),
        (p = D()),
        (E = y("a")),
        (c = B("edit")),
        this.h();
    },
    l(m) {
      e = I(m, "H1", { class: !0 });
      var i = T(e);
      (s = N(i, "Room: ")),
        (n = N(i, o)),
        i.forEach(k),
        (r = O(m)),
        (t = I(m, "DIV", { class: !0 }));
      var _ = T(t);
      a = I(_, "A", { href: !0, class: !0, style: !0 });
      var g = T(a);
      (d = N(g, "Back")),
        g.forEach(k),
        (h = O(_)),
        (M = I(_, "H1", { class: !0 }));
      var A = T(M);
      (v = N(A, "Messages")),
        A.forEach(k),
        (p = O(_)),
        (E = I(_, "A", { href: !0 }));
      var w = T(E);
      (c = N(w, "edit")), w.forEach(k), _.forEach(k), this.h();
    },
    h() {
      b(
        e,
        "class",
        "mb-4 text-center text-4xl font-extrabold md:text-5xl lg:text-6xl"
      ),
        b(a, "href", "/chatrooms"),
        b(
          a,
          "class",
          "mb-2 mr-4 text-3xl font-extrabold md:text-4xl lg:text-2xl"
        ),
        j(a, "text-align", "left"),
        b(
          M,
          "class",
          "mb-4 text-center text-4xl font-extrabold md:text-5xl lg:text-6xl"
        ),
        b(E, "href", (u = l[2] + "/edit")),
        b(t, "class", "flex items-center");
    },
    m(m, i) {
      U(m, e, i),
        f(e, s),
        f(e, n),
        U(m, r, i),
        U(m, t, i),
        f(t, a),
        f(a, d),
        f(t, h),
        f(t, M),
        f(M, v),
        f(t, p),
        f(t, E),
        f(E, c);
    },
    p(m, i) {
      i & 16 && o !== (o = m[4].name + "") && z(n, o),
        i & 4 && u !== (u = m[2] + "/edit") && b(E, "href", u);
    },
    d(m) {
      m && k(e), m && k(r), m && k(t);
    },
  };
}
function ee(l) {
  let e,
    s,
    o = l[5],
    n = [];
  for (let t = 0; t < o.length; t += 1) n[t] = ne($(l, o, t));
  const r = (t) =>
    V(n[t], 1, 1, () => {
      n[t] = null;
    });
  return {
    c() {
      for (let t = 0; t < n.length; t += 1) n[t].c();
      e = H();
    },
    l(t) {
      for (let a = 0; a < n.length; a += 1) n[a].l(t);
      e = H();
    },
    m(t, a) {
      for (let d = 0; d < n.length; d += 1) n[d] && n[d].m(t, a);
      U(t, e, a), (s = !0);
    },
    p(t, a) {
      if (a & 43) {
        o = t[5];
        let d;
        for (d = 0; d < o.length; d += 1) {
          const h = $(t, o, d);
          n[d]
            ? (n[d].p(h, a), P(n[d], 1))
            : ((n[d] = ne(h)), n[d].c(), P(n[d], 1), n[d].m(e.parentNode, e));
        }
        for (G(), d = o.length; d < n.length; d += 1) r(d);
        X();
      }
    },
    i(t) {
      if (!s) {
        for (let a = 0; a < o.length; a += 1) P(n[a]);
        s = !0;
      }
    },
    o(t) {
      n = n.filter(Boolean);
      for (let a = 0; a < n.length; a += 1) V(n[a]);
      s = !1;
    },
    d(t) {
      _e(n, t), t && k(e);
    },
  };
}
function te(l) {
  let e,
    s,
    o = l[14].sentAt + "",
    n;
  return {
    c() {
      (e = y("p")), (s = B("Time: ")), (n = B(o));
    },
    l(r) {
      e = I(r, "P", {});
      var t = T(e);
      (s = N(t, "Time: ")), (n = N(t, o)), t.forEach(k);
    },
    m(r, t) {
      U(r, e, t), f(e, s), f(e, n);
    },
    p(r, t) {
      t & 32 && o !== (o = r[14].sentAt + "") && z(n, o);
    },
    d(r) {
      r && k(e);
    },
  };
}
function le(l) {
  let e,
    s,
    o = l[14].updatedAt + "",
    n;
  return {
    c() {
      (e = y("p")), (s = B("Updated at: ")), (n = B(o));
    },
    l(r) {
      e = I(r, "P", {});
      var t = T(e);
      (s = N(t, "Updated at: ")), (n = N(t, o)), t.forEach(k);
    },
    m(r, t) {
      U(r, e, t), f(e, s), f(e, n);
    },
    p(r, t) {
      t & 32 && o !== (o = r[14].updatedAt + "") && z(n, o);
    },
    d(r) {
      r && k(e);
    },
  };
}
function se(l) {
  let e, s, o, n, r, t, a, d, h, M, v, p, E, c;
  function u() {
    return l[8](l[14]);
  }
  function m() {
    l[9].call(h, l[15], l[16]);
  }
  let i = l[1][l[14].id] && oe(l);
  return {
    c() {
      (e = y("div")),
        (s = y("button")),
        (o = B("Edit Message")),
        (n = D()),
        (r = y("form")),
        (t = y("button")),
        (a = B("Delete Message")),
        (d = D()),
        (h = y("input")),
        (M = D()),
        i && i.c(),
        (v = H()),
        this.h();
    },
    l(_) {
      e = I(_, "DIV", { style: !0 });
      var g = T(e);
      s = I(g, "BUTTON", { class: !0 });
      var A = T(s);
      (o = N(A, "Edit Message")),
        A.forEach(k),
        (n = O(g)),
        (r = I(g, "FORM", { action: !0, method: !0 }));
      var w = T(r);
      t = I(w, "BUTTON", { type: !0, class: !0 });
      var F = T(t);
      (a = N(F, "Delete Message")),
        F.forEach(k),
        (d = O(w)),
        (h = I(w, "INPUT", { type: !0, id: !0, name: !0 })),
        w.forEach(k),
        g.forEach(k),
        (M = O(_)),
        i && i.l(_),
        (v = H()),
        this.h();
    },
    h() {
      b(s, "class", "message-button"),
        b(t, "type", "submit"),
        b(t, "class", "message-button"),
        b(h, "type", "hidden"),
        b(h, "id", "messageId"),
        b(h, "name", "messageId"),
        b(r, "action", "?/deleteMessage"),
        b(r, "method", "POST"),
        j(e, "display", "flex");
    },
    m(_, g) {
      U(_, e, g),
        f(e, s),
        f(s, o),
        f(e, n),
        f(e, r),
        f(r, t),
        f(t, a),
        f(r, d),
        f(r, h),
        S(h, l[14].id),
        U(_, M, g),
        i && i.m(_, g),
        U(_, v, g),
        (p = !0),
        E ||
          ((c = [R(s, "click", u), R(h, "input", m), C(J.call(null, r, De))]),
          (E = !0));
    },
    p(_, g) {
      (l = _),
        g & 32 && S(h, l[14].id),
        l[1][l[14].id]
          ? i
            ? (i.p(l, g), g & 34 && P(i, 1))
            : ((i = oe(l)), i.c(), P(i, 1), i.m(v.parentNode, v))
          : i &&
            (G(),
            V(i, 1, 1, () => {
              i = null;
            }),
            X());
    },
    i(_) {
      p || (P(i), (p = !0));
    },
    o(_) {
      V(i), (p = !1);
    },
    d(_) {
      _ && k(e), _ && k(M), i && i.d(_), _ && k(v), (E = !1), q(c);
    },
  };
}
function oe(l) {
  let e, s, o;
  function n(t) {
    l[12](t, l[14]);
  }
  let r = { $$slots: { header: [we], default: [Te] }, $$scope: { ctx: l } };
  return (
    l[1][l[14].id] !== void 0 && (r.showModal = l[1][l[14].id]),
    (e = new Ie({ props: r })),
    ue.push(() => he(e, "showModal", n)),
    {
      c() {
        me(e.$$.fragment);
      },
      l(t) {
        pe(e.$$.fragment, t);
      },
      m(t, a) {
        be(e, t, a), (o = !0);
      },
      p(t, a) {
        l = t;
        const d = {};
        a & 131105 && (d.$$scope = { dirty: a, ctx: l }),
          !s &&
            a & 34 &&
            ((s = !0), (d.showModal = l[1][l[14].id]), ge(() => (s = !1))),
          e.$set(d);
      },
      i(t) {
        o || (P(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        V(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        ve(e, t);
      },
    }
  );
}
function Te(l) {
  let e, s, o, n, r, t, a, d, h, M, v, p;
  function E() {
    l[11].call(a, l[15], l[16]);
  }
  return {
    c() {
      (e = y("div")),
        (s = y("body")),
        (o = y("form")),
        (n = y("div")),
        (r = y("textarea")),
        (t = D()),
        (a = y("input")),
        (d = D()),
        (h = y("button")),
        (M = B("Submit")),
        this.h();
    },
    l(c) {
      e = I(c, "DIV", { class: !0 });
      var u = T(e);
      s = I(u, "BODY", {});
      var m = T(s);
      o = I(m, "FORM", { action: !0, method: !0 });
      var i = T(o);
      n = I(i, "DIV", {});
      var _ = T(n);
      (r = I(_, "TEXTAREA", {
        rows: !0,
        cols: !0,
        id: !0,
        name: !0,
        class: !0,
      })),
        T(r).forEach(k),
        (t = O(_)),
        (a = I(_, "INPUT", { type: !0, id: !0, name: !0 })),
        _.forEach(k),
        (d = O(i)),
        (h = I(i, "BUTTON", { class: !0, type: !0 }));
      var g = T(h);
      (M = N(g, "Submit")),
        g.forEach(k),
        i.forEach(k),
        m.forEach(k),
        u.forEach(k),
        this.h();
    },
    h() {
      b(r, "rows", "10"),
        b(r, "cols", "44"),
        (r.autofocus = !0),
        b(r, "id", "message"),
        b(r, "name", "message"),
        b(r, "class", "modal-text"),
        b(a, "type", "hidden"),
        b(a, "id", "messageId"),
        b(a, "name", "messageId"),
        b(h, "class", "bottom"),
        b(h, "type", "submit"),
        b(o, "action", "?/editMessage"),
        b(o, "method", "POST"),
        b(e, "class", "modal-size");
    },
    m(c, u) {
      U(c, e, u),
        f(e, s),
        f(s, o),
        f(o, n),
        f(n, r),
        S(r, l[0]),
        f(n, t),
        f(n, a),
        S(a, l[14].id),
        f(o, d),
        f(o, h),
        f(h, M),
        r.focus(),
        v ||
          ((p = [
            R(r, "input", l[10]),
            R(a, "input", E),
            C(J.call(null, o, Oe)),
          ]),
          (v = !0));
    },
    p(c, u) {
      (l = c), u & 1 && S(r, l[0]), u & 32 && S(a, l[14].id);
    },
    d(c) {
      c && k(e), (v = !1), q(p);
    },
  };
}
function we(l) {
  let e, s;
  return {
    c() {
      (e = y("h2")), (s = B("Edit Message")), this.h();
    },
    l(o) {
      e = I(o, "H2", { slot: !0 });
      var n = T(e);
      (s = N(n, "Edit Message")), n.forEach(k), this.h();
    },
    h() {
      b(e, "slot", "header");
    },
    m(o, n) {
      U(o, e, n), f(e, s);
    },
    p: Ee,
    d(o) {
      o && k(e);
    },
  };
}
function ne(l) {
  let e,
    s,
    o,
    n = l[14].content + "",
    r,
    t,
    a,
    d,
    h,
    M,
    v = l[14].sentAt && te(l),
    p = l[14].updatedAt && le(l),
    E = l[3] == l[14].sender.id && se(l);
  return {
    c() {
      (e = y("div")),
        (s = y("p")),
        (o = B("Message: ")),
        (r = B(n)),
        (t = D()),
        v && v.c(),
        (a = D()),
        p && p.c(),
        (d = D()),
        E && E.c(),
        (h = D()),
        this.h();
    },
    l(c) {
      e = I(c, "DIV", { class: !0 });
      var u = T(e);
      s = I(u, "P", {});
      var m = T(s);
      (o = N(m, "Message: ")),
        (r = N(m, n)),
        m.forEach(k),
        (t = O(u)),
        v && v.l(u),
        (a = O(u)),
        p && p.l(u),
        (d = O(u)),
        E && E.l(u),
        (h = O(u)),
        u.forEach(k),
        this.h();
    },
    h() {
      b(e, "class", "message-list");
    },
    m(c, u) {
      U(c, e, u),
        f(e, s),
        f(s, o),
        f(s, r),
        f(e, t),
        v && v.m(e, null),
        f(e, a),
        p && p.m(e, null),
        f(e, d),
        E && E.m(e, null),
        f(e, h),
        (M = !0);
    },
    p(c, u) {
      (!M || u & 32) && n !== (n = c[14].content + "") && z(r, n),
        c[14].sentAt
          ? v
            ? v.p(c, u)
            : ((v = te(c)), v.c(), v.m(e, a))
          : v && (v.d(1), (v = null)),
        c[14].updatedAt
          ? p
            ? p.p(c, u)
            : ((p = le(c)), p.c(), p.m(e, d))
          : p && (p.d(1), (p = null)),
        c[3] == c[14].sender.id
          ? E
            ? (E.p(c, u), u & 40 && P(E, 1))
            : ((E = se(c)), E.c(), P(E, 1), E.m(e, h))
          : E &&
            (G(),
            V(E, 1, 1, () => {
              E = null;
            }),
            X());
    },
    i(c) {
      M || (P(E), (M = !0));
    },
    o(c) {
      V(E), (M = !1);
    },
    d(c) {
      c && k(e), v && v.d(), p && p.d(), E && E.d();
    },
  };
}
function Ae(l) {
  let e,
    s,
    o,
    n,
    r,
    t,
    a,
    d,
    h,
    M,
    v,
    p,
    E,
    c = l[4] && l[4].name && x(l),
    u = l[5] && ee(l);
  return {
    c() {
      (e = y("div")),
        c && c.c(),
        (s = D()),
        (o = y("div")),
        u && u.c(),
        (n = D()),
        (r = y("div")),
        (t = y("form")),
        (a = y("input")),
        (d = D()),
        (h = y("button")),
        (M = B("send")),
        this.h();
    },
    l(m) {
      e = I(m, "DIV", { class: !0 });
      var i = T(e);
      c && c.l(i), (s = O(i)), (o = I(i, "DIV", { class: !0 }));
      var _ = T(o);
      u && u.l(_), _.forEach(k), (n = O(i)), (r = I(i, "DIV", {}));
      var g = T(r);
      t = I(g, "FORM", { action: !0, method: !0, class: !0, id: !0 });
      var A = T(t);
      (a = I(A, "INPUT", {
        type: !0,
        id: !0,
        name: !0,
        placeholder: !0,
        class: !0,
      })),
        (d = O(A)),
        (h = I(A, "BUTTON", { type: !0, id: !0, class: !0, style: !0 }));
      var w = T(h);
      (M = N(w, "send")),
        w.forEach(k),
        A.forEach(k),
        g.forEach(k),
        i.forEach(k),
        this.h();
    },
    h() {
      b(o, "class", "mx-auto max-w-3xl items-center"),
        b(a, "type", "text"),
        b(a, "id", "content"),
        b(a, "name", "content"),
        b(a, "placeholder", "Enter message"),
        b(
          a,
          "class",
          "flex-1 rounded-l-lg border border-gray-400 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        ),
        (a.required = !0),
        b(h, "type", "submit"),
        b(h, "id", "submit"),
        b(
          h,
          "class",
          "rounded-r-lg bg-blue-500 px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        ),
        j(h, "color", "inherit"),
        b(t, "action", "?/sendMessage"),
        b(t, "method", "POST"),
        b(t, "class", "mx-auto flex h-full max-w-3xl items-center"),
        b(t, "id", "sendForm"),
        b(e, "class", "background flex min-h-screen flex-col items-center");
    },
    m(m, i) {
      U(m, e, i),
        c && c.m(e, null),
        f(e, s),
        f(e, o),
        u && u.m(o, null),
        f(e, n),
        f(e, r),
        f(r, t),
        f(t, a),
        f(t, d),
        f(t, h),
        f(h, M),
        (v = !0),
        p || ((E = [C(J.call(null, t, Be)), R(t, "submit", l[6])]), (p = !0));
    },
    p(m, [i]) {
      m[4] && m[4].name
        ? c
          ? c.p(m, i)
          : ((c = x(m)), c.c(), c.m(e, s))
        : c && (c.d(1), (c = null)),
        m[5]
          ? u
            ? (u.p(m, i), i & 32 && P(u, 1))
            : ((u = ee(m)), u.c(), P(u, 1), u.m(o, null))
          : u &&
            (G(),
            V(u, 1, 1, () => {
              u = null;
            }),
            X());
    },
    i(m) {
      v || (P(u), (v = !0));
    },
    o(m) {
      V(u), (v = !1);
    },
    d(m) {
      m && k(e), c && c.d(), u && u.d(), (p = !1), q(E);
    },
  };
}
const De =
    () =>
    async ({ update: l }) => {
      l({ reset: !1 });
    },
  Oe =
    () =>
    async ({ update: l }) => {
      l({ reset: !1 });
    },
  Be =
    () =>
    async ({ update: l }) => {
      l({ reset: !1 });
    };
function Ne(l, e, s) {
  let o,
    n,
    r,
    t,
    { data: a } = e,
    d = "",
    h = {};
  const M = () => {
      const i = document.getElementById("content");
      i && (i.value = "");
    },
    v = async (i) => {
      M();
      const _ = document.getElementById("sendForm");
      _ && _.submit();
    },
    p = (i) => (s(1, (h[i.id] = !0), h), s(0, (d = i.content)));
  function E(i, _) {
    (i[_].id = this.value), s(5, o), s(7, a);
  }
  function c() {
    (d = this.value), s(0, d);
  }
  function u(i, _) {
    (i[_].id = this.value), s(5, o), s(7, a);
  }
  function m(i, _) {
    l.$$.not_equal(h[_.id], i) && ((h[_.id] = i), s(1, h));
  }
  return (
    (l.$$set = (i) => {
      "data" in i && s(7, (a = i.data));
    }),
    (l.$$.update = () => {
      l.$$.dirty & 128 &&
        s(
          5,
          ({ messages: o, roomName: n, userId: r, roomId: t } = a),
          o,
          (s(4, n), s(7, a)),
          (s(3, r), s(7, a)),
          (s(2, t), s(7, a))
        );
    }),
    [d, h, t, r, n, o, v, a, p, E, c, u, m]
  );
}
class Ve extends ae {
  constructor(e) {
    super(), re(this, e, Ne, Ae, ie, { data: 7 });
  }
}
export { Ve as component };
