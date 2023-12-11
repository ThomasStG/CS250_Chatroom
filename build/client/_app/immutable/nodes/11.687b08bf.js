import {
  S as ue,
  i as fe,
  s as he,
  e as v,
  d as q,
  f as T,
  h as p,
  j as g,
  k as S,
  l as f,
  m as V,
  n as o,
  o as j,
  p as r,
  A as G,
  q as ee,
  r as J,
  v as ce,
  y as te,
  z as me,
  w as K,
  B as de,
} from "../chunks/index.229400e6.js";
import { e as L } from "../chunks/forms.4c325e09.js";
function le(a, e, s) {
  const t = a.slice();
  return (t[5] = e[s]), t;
}
function ne(a, e, s) {
  const t = a.slice();
  return (t[8] = e[s]), (t[9] = e), (t[10] = s), t;
}
function se(a) {
  let e,
    s = a[1],
    t = [];
  for (let n = 0; n < s.length; n += 1) t[n] = re(ne(a, s, n));
  return {
    c() {
      for (let n = 0; n < t.length; n += 1) t[n].c();
      e = J();
    },
    l(n) {
      for (let i = 0; i < t.length; i += 1) t[i].l(n);
      e = J();
    },
    m(n, i) {
      for (let l = 0; l < t.length; l += 1) t[l] && t[l].m(n, i);
      j(n, e, i);
    },
    p(n, i) {
      if (i & 2) {
        s = n[1];
        let l;
        for (l = 0; l < s.length; l += 1) {
          const _ = ne(n, s, l);
          t[l]
            ? t[l].p(_, i)
            : ((t[l] = re(_)), t[l].c(), t[l].m(e.parentNode, e));
        }
        for (; l < t.length; l += 1) t[l].d(1);
        t.length = s.length;
      }
    },
    d(n) {
      ce(t, n), n && f(e);
    },
  };
}
function re(a) {
  let e,
    s,
    t = a[8].username + "",
    n,
    i,
    l,
    _ = a[8].email + "",
    E,
    u,
    d,
    c,
    h,
    m,
    D,
    b,
    N,
    U;
  function w() {
    a[4].call(c, a[9], a[10]);
  }
  return {
    c() {
      (e = v("div")),
        (s = v("div")),
        (n = q(t)),
        (i = T()),
        (l = v("div")),
        (E = q(_)),
        (u = T()),
        (d = v("form")),
        (c = v("input")),
        (h = T()),
        (m = v("button")),
        (D = q("Remove Friend")),
        (b = T()),
        this.h();
    },
    l(R) {
      e = p(R, "DIV", { class: !0 });
      var I = g(e);
      s = p(I, "DIV", {});
      var P = g(s);
      (n = S(P, t)), P.forEach(f), (i = V(I)), (l = p(I, "DIV", {}));
      var B = g(l);
      (E = S(B, _)),
        B.forEach(f),
        (u = V(I)),
        (d = p(I, "FORM", { action: !0, method: !0, class: !0 }));
      var x = g(d);
      (c = p(x, "INPUT", { type: !0, id: !0, name: !0 })),
        (h = V(x)),
        (m = p(x, "BUTTON", { type: !0, class: !0 }));
      var M = g(m);
      (D = S(M, "Remove Friend")),
        M.forEach(f),
        x.forEach(f),
        (b = V(I)),
        I.forEach(f),
        this.h();
    },
    h() {
      o(c, "type", "hidden"),
        o(c, "id", "friendID"),
        o(c, "name", "friendID"),
        o(m, "type", "submit"),
        o(m, "class", "underline"),
        o(d, "action", "?/removeFriend"),
        o(d, "method", "post"),
        o(d, "class", "text-red-500"),
        o(e, "class", "flex justify-between items-center mb-2");
    },
    m(R, I) {
      j(R, e, I),
        r(e, s),
        r(s, n),
        r(e, i),
        r(e, l),
        r(l, E),
        r(e, u),
        r(e, d),
        r(d, c),
        te(c, a[8].id),
        r(d, h),
        r(d, m),
        r(m, D),
        r(e, b),
        N || ((U = [me(c, "input", w), G(L.call(null, d, pe))]), (N = !0));
    },
    p(R, I) {
      (a = R),
        I & 2 && t !== (t = a[8].username + "") && K(n, t),
        I & 2 && _ !== (_ = a[8].email + "") && K(E, _),
        I & 2 && te(c, a[8].id);
    },
    d(R) {
      R && f(e), (N = !1), de(U);
    },
  };
}
function ae(a) {
  let e,
    s = a[2],
    t = [];
  for (let n = 0; n < s.length; n += 1) t[n] = oe(le(a, s, n));
  return {
    c() {
      for (let n = 0; n < t.length; n += 1) t[n].c();
      e = J();
    },
    l(n) {
      for (let i = 0; i < t.length; i += 1) t[i].l(n);
      e = J();
    },
    m(n, i) {
      for (let l = 0; l < t.length; l += 1) t[l] && t[l].m(n, i);
      j(n, e, i);
    },
    p(n, i) {
      if (i & 5) {
        s = n[2];
        let l;
        for (l = 0; l < s.length; l += 1) {
          const _ = le(n, s, l);
          t[l]
            ? t[l].p(_, i)
            : ((t[l] = oe(_)), t[l].c(), t[l].m(e.parentNode, e));
        }
        for (; l < t.length; l += 1) t[l].d(1);
        t.length = s.length;
      }
    },
    d(n) {
      ce(t, n), n && f(e);
    },
  };
}
function ie(a) {
  let e, s, t, n, i, l, _, E, u, d, c, h, m;
  return {
    c() {
      (e = v("div")),
        (s = v("form")),
        (t = v("input")),
        (i = T()),
        (l = v("button")),
        (_ = q("Accept")),
        (E = T()),
        (u = v("form")),
        (d = v("button")),
        (c = q("Decline")),
        this.h();
    },
    l(D) {
      e = p(D, "DIV", { class: !0 });
      var b = g(e);
      s = p(b, "FORM", { action: !0, method: !0 });
      var N = g(s);
      (t = p(N, "INPUT", { type: !0, name: !0 })),
        (i = V(N)),
        (l = p(N, "BUTTON", { class: !0 }));
      var U = g(l);
      (_ = S(U, "Accept")),
        U.forEach(f),
        N.forEach(f),
        (E = V(b)),
        (u = p(b, "FORM", { action: !0, method: !0 }));
      var w = g(u);
      d = p(w, "BUTTON", { class: !0 });
      var R = g(d);
      (c = S(R, "Decline")), R.forEach(f), w.forEach(f), b.forEach(f), this.h();
    },
    h() {
      o(t, "type", "hidden"),
        o(t, "name", "requestId"),
        (t.value = n = a[5].id),
        o(l, "class", "bg-green-500 text-white rounded p-2 hover:bg-green-600"),
        o(s, "action", "?/accept"),
        o(s, "method", "POST"),
        o(d, "class", "bg-red-500 text-white rounded p-2 hover:bg-red-600"),
        o(u, "action", "?/decline"),
        o(u, "method", "POST"),
        o(e, "class", "flex gap-2");
    },
    m(D, b) {
      j(D, e, b),
        r(e, s),
        r(s, t),
        r(s, i),
        r(s, l),
        r(l, _),
        r(e, E),
        r(e, u),
        r(u, d),
        r(d, c),
        h || ((m = [G(L.call(null, s, be)), G(L.call(null, u, ge))]), (h = !0));
    },
    p(D, b) {
      b & 4 && n !== (n = D[5].id) && (t.value = n);
    },
    d(D) {
      D && f(e), (h = !1), de(m);
    },
  };
}
function oe(a) {
  let e,
    s,
    t = a[5].from.email + "",
    n,
    i,
    l,
    _ = a[5].status + "",
    E,
    u,
    d,
    c = a[5].fromId != a[0] && ie(a);
  return {
    c() {
      (e = v("div")),
        (s = v("div")),
        (n = q(t)),
        (i = T()),
        (l = v("div")),
        (E = q(_)),
        (u = T()),
        c && c.c(),
        (d = T()),
        this.h();
    },
    l(h) {
      e = p(h, "DIV", { class: !0 });
      var m = g(e);
      s = p(m, "DIV", { class: !0 });
      var D = g(s);
      (n = S(D, t)), D.forEach(f), (i = V(m)), (l = p(m, "DIV", {}));
      var b = g(l);
      (E = S(b, _)),
        b.forEach(f),
        (u = V(m)),
        c && c.l(m),
        (d = V(m)),
        m.forEach(f),
        this.h();
    },
    h() {
      o(s, "class", "px-5"),
        o(e, "class", "flex items-center justify-center mb-2");
    },
    m(h, m) {
      j(h, e, m),
        r(e, s),
        r(s, n),
        r(e, i),
        r(e, l),
        r(l, E),
        r(e, u),
        c && c.m(e, null),
        r(e, d);
    },
    p(h, m) {
      m & 4 && t !== (t = h[5].from.email + "") && K(n, t),
        m & 4 && _ !== (_ = h[5].status + "") && K(E, _),
        h[5].fromId != h[0]
          ? c
            ? c.p(h, m)
            : ((c = ie(h)), c.c(), c.m(e, d))
          : c && (c.d(1), (c = null));
    },
    d(h) {
      h && f(e), c && c.d();
    },
  };
}
function _e(a) {
  let e,
    s,
    t,
    n,
    i,
    l,
    _,
    E,
    u,
    d,
    c,
    h,
    m,
    D,
    b,
    N,
    U,
    w,
    R,
    I,
    P,
    B,
    x,
    M,
    Q,
    y = a[1] && se(a),
    F = a[2] && ae(a);
  return {
    c() {
      (e = v("div")),
        (s = v("h1")),
        (t = q("Friends")),
        (n = T()),
        (i = v("div")),
        (l = v("div")),
        (_ = q("Send Friend Request:")),
        (E = T()),
        (u = v("form")),
        (d = v("input")),
        (c = T()),
        (h = v("button")),
        (m = q("Submit")),
        (D = T()),
        (b = v("div")),
        (N = v("div")),
        (U = q("Friends:")),
        (w = T()),
        y && y.c(),
        (R = T()),
        (I = v("div")),
        (P = v("div")),
        (B = q("Friend Requests:")),
        (x = T()),
        F && F.c(),
        this.h();
    },
    l(O) {
      e = p(O, "DIV", { class: !0 });
      var k = g(e);
      s = p(k, "H1", { class: !0 });
      var W = g(s);
      (t = S(W, "Friends")),
        W.forEach(f),
        (n = V(k)),
        (i = p(k, "DIV", { class: !0 }));
      var A = g(i);
      l = p(A, "DIV", { class: !0 });
      var X = g(l);
      (_ = S(X, "Send Friend Request:")),
        X.forEach(f),
        (E = V(A)),
        (u = p(A, "FORM", { action: !0, method: !0, class: !0 }));
      var z = g(u);
      (d = p(z, "INPUT", {
        type: !0,
        id: !0,
        name: !0,
        placeholder: !0,
        class: !0,
      })),
        (c = V(z)),
        (h = p(z, "BUTTON", { type: !0, class: !0 }));
      var Y = g(h);
      (m = S(Y, "Submit")),
        Y.forEach(f),
        z.forEach(f),
        A.forEach(f),
        (D = V(k)),
        (b = p(k, "DIV", { class: !0 }));
      var C = g(b);
      N = p(C, "DIV", { class: !0 });
      var Z = g(N);
      (U = S(Z, "Friends:")),
        Z.forEach(f),
        (w = V(C)),
        y && y.l(C),
        C.forEach(f),
        (R = V(k)),
        (I = p(k, "DIV", {}));
      var H = g(I);
      P = p(H, "DIV", { class: !0 });
      var $ = g(P);
      (B = S($, "Friend Requests:")),
        $.forEach(f),
        (x = V(H)),
        F && F.l(H),
        H.forEach(f),
        k.forEach(f),
        this.h();
    },
    h() {
      o(
        s,
        "class",
        "mb-4 text-center text-4xl font-extrabold md:text-5xl lg:text-6xl"
      ),
        o(l, "class", "text-center text-lg font-medium mb-2"),
        o(d, "type", "text"),
        o(d, "id", "userName"),
        o(d, "name", "userName"),
        o(d, "placeholder", "Enter User Name"),
        o(d, "class", "p-2 border rounded mb-2"),
        o(h, "type", "submit"),
        o(h, "class", "bg-blue-500 text-white rounded p-2 hover:bg-blue-600"),
        o(u, "action", "?/friendRequest"),
        o(u, "method", "POST"),
        o(u, "class", "w-1/6 mx-auto flex flex-col"),
        o(i, "class", "mb-4"),
        o(N, "class", "text-center text-lg font-medium mb-2"),
        o(b, "class", "mb-4"),
        o(P, "class", "text-center text-lg font-medium mb-2"),
        o(e, "class", "p-4");
    },
    m(O, k) {
      j(O, e, k),
        r(e, s),
        r(s, t),
        r(e, n),
        r(e, i),
        r(i, l),
        r(l, _),
        r(i, E),
        r(i, u),
        r(u, d),
        r(u, c),
        r(u, h),
        r(h, m),
        r(e, D),
        r(e, b),
        r(b, N),
        r(N, U),
        r(b, w),
        y && y.m(b, null),
        r(e, R),
        r(e, I),
        r(I, P),
        r(P, B),
        r(I, x),
        F && F.m(I, null),
        M || ((Q = G(L.call(null, u, ve))), (M = !0));
    },
    p(O, [k]) {
      O[1]
        ? y
          ? y.p(O, k)
          : ((y = se(O)), y.c(), y.m(b, null))
        : y && (y.d(1), (y = null)),
        O[2]
          ? F
            ? F.p(O, k)
            : ((F = ae(O)), F.c(), F.m(I, null))
          : F && (F.d(1), (F = null));
    },
    i: ee,
    o: ee,
    d(O) {
      O && f(e), y && y.d(), F && F.d(), (M = !1), Q();
    },
  };
}
const ve =
    () =>
    async ({ update: a }) => {
      a({ reset: !1 });
    },
  pe =
    () =>
    async ({ update: a }) => {
      a({ reset: !1 });
    },
  be =
    () =>
    async ({ update: a }) => {
      a({ reset: !1 });
    },
  ge =
    () =>
    async ({ update: a }) => {
      a({ reset: !1 });
    };
function Ee(a, e, s) {
  let t,
    n,
    i,
    { data: l } = e;
  function _(E, u) {
    (E[u].id = this.value), s(1, n), s(3, l);
  }
  return (
    (a.$$set = (E) => {
      "data" in E && s(3, (l = E.data));
    }),
    (a.$$.update = () => {
      a.$$.dirty & 8 &&
        s(
          2,
          ({ friendRequests: t, friends: n, userId: i } = l),
          t,
          (s(1, n), s(3, l)),
          (s(0, i), s(3, l))
        );
    }),
    [i, n, t, l, _]
  );
}
class ye extends ue {
  constructor(e) {
    super(), fe(this, e, Ee, _e, he, { data: 3 });
  }
}
export { ye as component };
