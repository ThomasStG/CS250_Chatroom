import {
  S as ae,
  i as ie,
  s as re,
  c as Y,
  e as y,
  f as D,
  d as U,
  h as I,
  j as T,
  m as O,
  k as V,
  l as v,
  n as p,
  o as B,
  p as c,
  z as S,
  R as fe,
  T as ce,
  u as K,
  g as Q,
  a as Z,
  t as P,
  b as N,
  B as z,
  U as _e,
  P as ue,
  x as de,
  A as C,
  E as G,
  r as X,
  J as j,
  v as he,
  w as J,
  y as F,
  V as me,
  F as pe,
  G as be,
  H as ge,
  W as ve,
  I as Ee,
  q as Me,
} from "../chunks/index.229400e6.js";
import { e as L } from "../chunks/forms.4c325e09.js";
const ke = (l) => ({}),
  $ = (l) => ({});
function ye(l) {
  let e, s, o, n, a, t, i, d, _, E, g, r, M, b;
  const u = l[3].header,
    k = Y(u, l, l[2], $),
    h = l[3].default,
    m = Y(h, l, l[2], null);
  return {
    c() {
      (e = y("dialog")),
        (s = y("div")),
        k && k.c(),
        (o = D()),
        (n = y("hr")),
        (a = D()),
        m && m.c(),
        (t = D()),
        (i = y("hr")),
        (d = D()),
        (_ = y("div")),
        (E = y("button")),
        (g = U("X")),
        this.h();
    },
    l(f) {
      e = I(f, "DIALOG", { class: !0 });
      var A = T(e);
      s = I(A, "DIV", {});
      var w = T(s);
      k && k.l(w),
        (o = O(w)),
        (n = I(w, "HR", {})),
        (a = O(w)),
        m && m.l(w),
        (t = O(w)),
        (i = I(w, "HR", {})),
        (d = O(w)),
        (_ = I(w, "DIV", {}));
      var R = T(_);
      E = I(R, "BUTTON", { class: !0 });
      var H = T(E);
      (g = V(H, "X")),
        H.forEach(v),
        R.forEach(v),
        w.forEach(v),
        A.forEach(v),
        this.h();
    },
    h() {
      p(E, "class", "close svelte-e9s364"), p(e, "class", "svelte-e9s364");
    },
    m(f, A) {
      B(f, e, A),
        c(e, s),
        k && k.m(s, null),
        c(s, o),
        c(s, n),
        c(s, a),
        m && m.m(s, null),
        c(s, t),
        c(s, i),
        c(s, d),
        c(s, _),
        c(_, E),
        c(E, g),
        l[6](e),
        (r = !0),
        M ||
          ((b = [
            S(E, "click", l[5]),
            S(s, "click", fe(l[4])),
            S(e, "close", l[7]),
            S(e, "click", ce(l[8])),
          ]),
          (M = !0));
    },
    p(f, [A]) {
      k &&
        k.p &&
        (!r || A & 4) &&
        K(k, u, f, f[2], r ? Z(u, f[2], A, ke) : Q(f[2]), $),
        m &&
          m.p &&
          (!r || A & 4) &&
          K(m, h, f, f[2], r ? Z(h, f[2], A, null) : Q(f[2]), null);
    },
    i(f) {
      r || (P(k, f), P(m, f), (r = !0));
    },
    o(f) {
      N(k, f), N(m, f), (r = !1);
    },
    d(f) {
      f && v(e), k && k.d(f), m && m.d(f), l[6](null), (M = !1), z(b);
    },
  };
}
function Ie(l, e, s) {
  let { $$slots: o = {}, $$scope: n } = e,
    { showModal: a } = e,
    t;
  function i(r) {
    _e.call(this, l, r);
  }
  const d = () => t.close();
  function _(r) {
    ue[r ? "unshift" : "push"](() => {
      (t = r), s(1, t);
    });
  }
  const E = () => s(0, (a = !1)),
    g = () => t.close();
  return (
    (l.$$set = (r) => {
      "showModal" in r && s(0, (a = r.showModal)),
        "$$scope" in r && s(2, (n = r.$$scope));
    }),
    (l.$$.update = () => {
      l.$$.dirty & 3 && t && a && t.showModal();
    }),
    [a, t, n, o, i, d, _, E, g]
  );
}
class Te extends ae {
  constructor(e) {
    super(), ie(this, e, Ie, ye, re, { showModal: 0 });
  }
}
function x(l, e, s) {
  const o = l.slice();
  return (o[12] = e[s]), (o[13] = e), (o[14] = s), o;
}
function ee(l) {
  let e,
    s,
    o = l[3],
    n = [];
  for (let t = 0; t < o.length; t += 1) n[t] = oe(x(l, o, t));
  const a = (t) =>
    N(n[t], 1, 1, () => {
      n[t] = null;
    });
  return {
    c() {
      for (let t = 0; t < n.length; t += 1) n[t].c();
      e = X();
    },
    l(t) {
      for (let i = 0; i < n.length; i += 1) n[i].l(t);
      e = X();
    },
    m(t, i) {
      for (let d = 0; d < n.length; d += 1) n[d] && n[d].m(t, i);
      B(t, e, i), (s = !0);
    },
    p(t, i) {
      if (i & 15) {
        o = t[3];
        let d;
        for (d = 0; d < o.length; d += 1) {
          const _ = x(t, o, d);
          n[d]
            ? (n[d].p(_, i), P(n[d], 1))
            : ((n[d] = oe(_)), n[d].c(), P(n[d], 1), n[d].m(e.parentNode, e));
        }
        for (j(), d = o.length; d < n.length; d += 1) a(d);
        G();
      }
    },
    i(t) {
      if (!s) {
        for (let i = 0; i < o.length; i += 1) P(n[i]);
        s = !0;
      }
    },
    o(t) {
      n = n.filter(Boolean);
      for (let i = 0; i < n.length; i += 1) N(n[i]);
      s = !1;
    },
    d(t) {
      he(n, t), t && v(e);
    },
  };
}
function te(l) {
  let e,
    s,
    o = l[12].sentAt + "",
    n;
  return {
    c() {
      (e = y("p")), (s = U("Time: ")), (n = U(o));
    },
    l(a) {
      e = I(a, "P", {});
      var t = T(e);
      (s = V(t, "Time: ")), (n = V(t, o)), t.forEach(v);
    },
    m(a, t) {
      B(a, e, t), c(e, s), c(e, n);
    },
    p(a, t) {
      t & 8 && o !== (o = a[12].sentAt + "") && J(n, o);
    },
    d(a) {
      a && v(e);
    },
  };
}
function le(l) {
  let e,
    s,
    o = l[12].updatedAt + "",
    n;
  return {
    c() {
      (e = y("p")), (s = U("Updated at: ")), (n = U(o));
    },
    l(a) {
      e = I(a, "P", {});
      var t = T(e);
      (s = V(t, "Updated at: ")), (n = V(t, o)), t.forEach(v);
    },
    m(a, t) {
      B(a, e, t), c(e, s), c(e, n);
    },
    p(a, t) {
      t & 8 && o !== (o = a[12].updatedAt + "") && J(n, o);
    },
    d(a) {
      a && v(e);
    },
  };
}
function se(l) {
  let e, s, o, n, a, t, i, d, _, E, g, r, M, b;
  function u() {
    return l[6](l[12]);
  }
  function k() {
    l[7].call(_, l[13], l[14]);
  }
  let h = l[1][l[12].id] && ne(l);
  return {
    c() {
      (e = y("div")),
        (s = y("button")),
        (o = U("Edit Message")),
        (n = D()),
        (a = y("form")),
        (t = y("button")),
        (i = U("Delete Message")),
        (d = D()),
        (_ = y("input")),
        (E = D()),
        h && h.c(),
        (g = X()),
        this.h();
    },
    l(m) {
      e = I(m, "DIV", { style: !0 });
      var f = T(e);
      s = I(f, "BUTTON", { class: !0 });
      var A = T(s);
      (o = V(A, "Edit Message")),
        A.forEach(v),
        (n = O(f)),
        (a = I(f, "FORM", { action: !0, method: !0 }));
      var w = T(a);
      t = I(w, "BUTTON", { type: !0, class: !0 });
      var R = T(t);
      (i = V(R, "Delete Message")),
        R.forEach(v),
        (d = O(w)),
        (_ = I(w, "INPUT", { type: !0, id: !0, name: !0 })),
        w.forEach(v),
        f.forEach(v),
        (E = O(m)),
        h && h.l(m),
        (g = X()),
        this.h();
    },
    h() {
      p(s, "class", "message-button"),
        p(t, "type", "submit"),
        p(t, "class", "message-button"),
        p(_, "type", "hidden"),
        p(_, "id", "messageId"),
        p(_, "name", "messageId"),
        p(a, "action", "?/deleteMessage"),
        p(a, "method", "POST"),
        de(e, "display", "flex");
    },
    m(m, f) {
      B(m, e, f),
        c(e, s),
        c(s, o),
        c(e, n),
        c(e, a),
        c(a, t),
        c(t, i),
        c(a, d),
        c(a, _),
        F(_, l[12].id),
        B(m, E, f),
        h && h.m(m, f),
        B(m, g, f),
        (r = !0),
        M ||
          ((b = [S(s, "click", u), S(_, "input", k), C(L.call(null, a, Ae))]),
          (M = !0));
    },
    p(m, f) {
      (l = m),
        f & 8 && F(_, l[12].id),
        l[1][l[12].id]
          ? h
            ? (h.p(l, f), f & 10 && P(h, 1))
            : ((h = ne(l)), h.c(), P(h, 1), h.m(g.parentNode, g))
          : h &&
            (j(),
            N(h, 1, 1, () => {
              h = null;
            }),
            G());
    },
    i(m) {
      r || (P(h), (r = !0));
    },
    o(m) {
      N(h), (r = !1);
    },
    d(m) {
      m && v(e), m && v(E), h && h.d(m), m && v(g), (M = !1), z(b);
    },
  };
}
function ne(l) {
  let e, s, o;
  function n(t) {
    l[10](t, l[12]);
  }
  let a = { $$slots: { header: [De], default: [we] }, $$scope: { ctx: l } };
  return (
    l[1][l[12].id] !== void 0 && (a.showModal = l[1][l[12].id]),
    (e = new Te({ props: a })),
    ue.push(() => me(e, "showModal", n)),
    {
      c() {
        pe(e.$$.fragment);
      },
      l(t) {
        be(e.$$.fragment, t);
      },
      m(t, i) {
        ge(e, t, i), (o = !0);
      },
      p(t, i) {
        l = t;
        const d = {};
        i & 32777 && (d.$$scope = { dirty: i, ctx: l }),
          !s &&
            i & 10 &&
            ((s = !0), (d.showModal = l[1][l[12].id]), ve(() => (s = !1))),
          e.$set(d);
      },
      i(t) {
        o || (P(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        N(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Ee(e, t);
      },
    }
  );
}
function we(l) {
  let e, s, o, n, a, t, i, d, _, E, g, r;
  function M() {
    l[9].call(i, l[13], l[14]);
  }
  return {
    c() {
      (e = y("div")),
        (s = y("body")),
        (o = y("form")),
        (n = y("div")),
        (a = y("textarea")),
        (t = D()),
        (i = y("input")),
        (d = D()),
        (_ = y("button")),
        (E = U("Submit")),
        this.h();
    },
    l(b) {
      e = I(b, "DIV", { class: !0 });
      var u = T(e);
      s = I(u, "BODY", {});
      var k = T(s);
      o = I(k, "FORM", { action: !0, method: !0 });
      var h = T(o);
      n = I(h, "DIV", {});
      var m = T(n);
      (a = I(m, "TEXTAREA", {
        rows: !0,
        cols: !0,
        id: !0,
        name: !0,
        class: !0,
      })),
        T(a).forEach(v),
        (t = O(m)),
        (i = I(m, "INPUT", { type: !0, id: !0, name: !0 })),
        m.forEach(v),
        (d = O(h)),
        (_ = I(h, "BUTTON", { class: !0, type: !0 }));
      var f = T(_);
      (E = V(f, "Submit")),
        f.forEach(v),
        h.forEach(v),
        k.forEach(v),
        u.forEach(v),
        this.h();
    },
    h() {
      p(a, "rows", "10"),
        p(a, "cols", "44"),
        (a.autofocus = !0),
        p(a, "id", "message"),
        p(a, "name", "message"),
        p(a, "class", "modal-text"),
        p(i, "type", "hidden"),
        p(i, "id", "messageId"),
        p(i, "name", "messageId"),
        p(_, "class", "bottom"),
        p(_, "type", "submit"),
        p(o, "action", "?/editMessage"),
        p(o, "method", "POST"),
        p(e, "class", "modal-size");
    },
    m(b, u) {
      B(b, e, u),
        c(e, s),
        c(s, o),
        c(o, n),
        c(n, a),
        F(a, l[0]),
        c(n, t),
        c(n, i),
        F(i, l[12].id),
        c(o, d),
        c(o, _),
        c(_, E),
        a.focus(),
        g ||
          ((r = [
            S(a, "input", l[8]),
            S(i, "input", M),
            C(L.call(null, o, Pe)),
          ]),
          (g = !0));
    },
    p(b, u) {
      (l = b), u & 1 && F(a, l[0]), u & 8 && F(i, l[12].id);
    },
    d(b) {
      b && v(e), (g = !1), z(r);
    },
  };
}
function De(l) {
  let e, s;
  return {
    c() {
      (e = y("h2")), (s = U("Edit Message")), this.h();
    },
    l(o) {
      e = I(o, "H2", { slot: !0 });
      var n = T(e);
      (s = V(n, "Edit Message")), n.forEach(v), this.h();
    },
    h() {
      p(e, "slot", "header");
    },
    m(o, n) {
      B(o, e, n), c(e, s);
    },
    p: Me,
    d(o) {
      o && v(e);
    },
  };
}
function oe(l) {
  let e,
    s,
    o,
    n = l[12].content + "",
    a,
    t,
    i,
    d,
    _,
    E,
    g = l[12].sentAt && te(l),
    r = l[12].updatedAt && le(l),
    M = l[2] == l[12].sender.id && se(l);
  return {
    c() {
      (e = y("div")),
        (s = y("p")),
        (o = U("Message: ")),
        (a = U(n)),
        (t = D()),
        g && g.c(),
        (i = D()),
        r && r.c(),
        (d = D()),
        M && M.c(),
        (_ = D()),
        this.h();
    },
    l(b) {
      e = I(b, "DIV", { class: !0 });
      var u = T(e);
      s = I(u, "P", {});
      var k = T(s);
      (o = V(k, "Message: ")),
        (a = V(k, n)),
        k.forEach(v),
        (t = O(u)),
        g && g.l(u),
        (i = O(u)),
        r && r.l(u),
        (d = O(u)),
        M && M.l(u),
        (_ = O(u)),
        u.forEach(v),
        this.h();
    },
    h() {
      p(e, "class", "message-list");
    },
    m(b, u) {
      B(b, e, u),
        c(e, s),
        c(s, o),
        c(s, a),
        c(e, t),
        g && g.m(e, null),
        c(e, i),
        r && r.m(e, null),
        c(e, d),
        M && M.m(e, null),
        c(e, _),
        (E = !0);
    },
    p(b, u) {
      (!E || u & 8) && n !== (n = b[12].content + "") && J(a, n),
        b[12].sentAt
          ? g
            ? g.p(b, u)
            : ((g = te(b)), g.c(), g.m(e, i))
          : g && (g.d(1), (g = null)),
        b[12].updatedAt
          ? r
            ? r.p(b, u)
            : ((r = le(b)), r.c(), r.m(e, d))
          : r && (r.d(1), (r = null)),
        b[2] == b[12].sender.id
          ? M
            ? (M.p(b, u), u & 12 && P(M, 1))
            : ((M = se(b)), M.c(), P(M, 1), M.m(e, _))
          : M &&
            (j(),
            N(M, 1, 1, () => {
              M = null;
            }),
            G());
    },
    i(b) {
      E || (P(M), (E = !0));
    },
    o(b) {
      N(M), (E = !1);
    },
    d(b) {
      b && v(e), g && g.d(), r && r.d(), M && M.d();
    },
  };
}
function Oe(l) {
  let e,
    s,
    o,
    n,
    a,
    t,
    i,
    d,
    _,
    E,
    g,
    r,
    M,
    b,
    u,
    k,
    h = l[3] && ee(l);
  return {
    c() {
      (e = y("div")),
        (s = y("div")),
        (o = y("h1")),
        (n = U("Messages")),
        (a = D()),
        (t = y("div")),
        h && h.c(),
        (i = D()),
        (d = y("div")),
        (_ = y("form")),
        (E = y("input")),
        (g = D()),
        (r = y("button")),
        (M = U("send")),
        this.h();
    },
    l(m) {
      e = I(m, "DIV", { class: !0 });
      var f = T(e);
      s = I(f, "DIV", { class: !0 });
      var A = T(s);
      o = I(A, "H1", { class: !0 });
      var w = T(o);
      (n = V(w, "Messages")),
        w.forEach(v),
        A.forEach(v),
        (a = O(f)),
        (t = I(f, "DIV", { class: !0 }));
      var R = T(t);
      h && h.l(R), R.forEach(v), (i = O(f)), (d = I(f, "DIV", {}));
      var H = T(d);
      _ = I(H, "FORM", { action: !0, method: !0, class: !0, id: !0 });
      var q = T(_);
      (E = I(q, "INPUT", {
        type: !0,
        id: !0,
        name: !0,
        placeholder: !0,
        class: !0,
      })),
        (g = O(q)),
        (r = I(q, "BUTTON", { type: !0, id: !0, class: !0, style: !0 }));
      var W = T(r);
      (M = V(W, "send")),
        W.forEach(v),
        q.forEach(v),
        H.forEach(v),
        f.forEach(v),
        this.h();
    },
    h() {
      p(
        o,
        "class",
        "mb-4 text-center text-4xl font-extrabold md:text-5xl lg:text-6xl"
      ),
        p(s, "class", "flex items-center"),
        p(t, "class", "mx-auto max-w-3xl items-center"),
        p(E, "type", "text"),
        p(E, "id", "content"),
        p(E, "name", "content"),
        p(E, "placeholder", "Enter message"),
        p(
          E,
          "class",
          "flex-1 rounded-l-lg border border-gray-400 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        ),
        (E.required = !0),
        p(r, "type", "submit"),
        p(r, "id", "submit"),
        p(
          r,
          "class",
          "rounded-r-lg bg-blue-500 px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        ),
        de(r, "color", "inherit"),
        p(_, "action", "?/sendMessage"),
        p(_, "method", "POST"),
        p(_, "class", "mx-auto flex h-full max-w-3xl items-center"),
        p(_, "id", "sendForm"),
        p(e, "class", "background flex min-h-screen flex-col items-center");
    },
    m(m, f) {
      B(m, e, f),
        c(e, s),
        c(s, o),
        c(o, n),
        c(e, a),
        c(e, t),
        h && h.m(t, null),
        c(e, i),
        c(e, d),
        c(d, _),
        c(_, E),
        c(_, g),
        c(_, r),
        c(r, M),
        (b = !0),
        u || ((k = [C(L.call(null, _, Ue)), S(_, "submit", l[4])]), (u = !0));
    },
    p(m, [f]) {
      m[3]
        ? h
          ? (h.p(m, f), f & 8 && P(h, 1))
          : ((h = ee(m)), h.c(), P(h, 1), h.m(t, null))
        : h &&
          (j(),
          N(h, 1, 1, () => {
            h = null;
          }),
          G());
    },
    i(m) {
      b || (P(h), (b = !0));
    },
    o(m) {
      N(h), (b = !1);
    },
    d(m) {
      m && v(e), h && h.d(), (u = !1), z(k);
    },
  };
}
const Ae =
    () =>
    async ({ update: l }) => {
      l({ reset: !1 });
    },
  Pe =
    () =>
    async ({ update: l }) => {
      l({ reset: !1 });
    },
  Ue =
    () =>
    async ({ update: l }) => {
      l({ reset: !1 });
    };
function Ve(l, e, s) {
  let o,
    n,
    { data: a } = e,
    t = "",
    i = {};
  const d = () => {
      const u = document.getElementById("content");
      u && (u.value = "");
    },
    _ = async () => {
      d();
      const u = document.getElementById("sendForm");
      u && u.submit();
    },
    E = (u) => (s(1, (i[u.id] = !0), i), s(0, (t = u.content)));
  function g(u, k) {
    (u[k].id = this.value), s(3, o), s(5, a);
  }
  function r() {
    (t = this.value), s(0, t);
  }
  function M(u, k) {
    (u[k].id = this.value), s(3, o), s(5, a);
  }
  function b(u, k) {
    l.$$.not_equal(i[k.id], u) && ((i[k.id] = u), s(1, i));
  }
  return (
    (l.$$set = (u) => {
      "data" in u && s(5, (a = u.data));
    }),
    (l.$$.update = () => {
      l.$$.dirty & 32 &&
        s(3, ({ messages: o, userId: n } = a), o, (s(2, n), s(5, a)));
    }),
    [t, i, n, o, _, a, E, g, r, M, b]
  );
}
class Se extends ae {
  constructor(e) {
    super(), ie(this, e, Ve, Oe, re, { data: 5 });
  }
}
export { Se as component };
