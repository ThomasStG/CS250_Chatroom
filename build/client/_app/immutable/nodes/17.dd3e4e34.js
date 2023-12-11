import {
  S as _e,
  i as be,
  s as ge,
  e as l,
  d as w,
  f as g,
  h as n,
  j as c,
  k as E,
  l as i,
  m as y,
  x as O,
  n as t,
  o as ye,
  p as e,
  A as xe,
  t as U,
  b as oe,
  E as we,
  F as Ee,
  G as Ae,
  H as ke,
  I as Ie,
  J as Pe,
} from "../chunks/index.229400e6.js";
import { e as $e, a as De } from "../chunks/forms.4c325e09.js";
import { i as Se } from "../chunks/navigation.71f60e69.js";
import { A as Le } from "../chunks/Alert.d237b4ef.js";
function ve(x) {
  let r, u;
  return (
    (r = new Le({
      props: { type: "danger", description: x[0].error.message },
    })),
    {
      c() {
        Ee(r.$$.fragment);
      },
      l(a) {
        Ae(r.$$.fragment, a);
      },
      m(a, h) {
        ke(r, a, h), (u = !0);
      },
      p(a, h) {
        const d = {};
        h & 1 && (d.description = a[0].error.message), r.$set(d);
      },
      i(a) {
        u || (U(r.$$.fragment, a), (u = !0));
      },
      o(a) {
        oe(r.$$.fragment, a), (u = !1);
      },
      d(a) {
        Ie(r, a);
      },
    }
  );
}
function Ve(x) {
  var ne, ie;
  let r,
    u,
    a,
    h,
    d,
    m,
    V,
    G,
    J,
    j,
    o,
    A,
    k,
    M,
    R,
    v,
    z,
    I,
    P,
    K,
    Q,
    _,
    W,
    q,
    $,
    X,
    Y,
    D,
    Z,
    ee,
    S,
    te,
    L,
    re,
    B,
    ae,
    le,
    s =
      ((ie = (ne = x[0]) == null ? void 0 : ne.error) == null
        ? void 0
        : ie.message) && ve(x);
  return {
    c() {
      (r = l("div")),
        (u = l("a")),
        (a = l("span")),
        (h = w("[Squire]")),
        (d = g()),
        (m = l("div")),
        (V = l("h2")),
        (G = w("Sign in to platform")),
        (J = g()),
        s && s.c(),
        (j = g()),
        (o = l("form")),
        (A = l("div")),
        (k = l("label")),
        (M = w("Email")),
        (R = g()),
        (v = l("input")),
        (z = g()),
        (I = l("div")),
        (P = l("label")),
        (K = w("Password")),
        (Q = g()),
        (_ = l("input")),
        (W = g()),
        (q = l("div")),
        ($ = l("a")),
        (X = w("Forgot Password?")),
        (Y = g()),
        (D = l("button")),
        (Z = w("Login to your account")),
        (ee = g()),
        (S = l("div")),
        (te = w(`Don't have an account?
        `)),
        (L = l("a")),
        (re = w("Create account")),
        this.h();
    },
    l(f) {
      r = n(f, "DIV", { class: !0 });
      var b = c(r);
      u = n(b, "A", { href: !0, class: !0 });
      var F = c(u);
      a = n(F, "SPAN", { style: !0 });
      var N = c(a);
      (h = E(N, "[Squire]")),
        N.forEach(i),
        F.forEach(i),
        (d = y(b)),
        (m = n(b, "DIV", { class: !0, style: !0 }));
      var T = c(m);
      V = n(T, "H2", { class: !0 });
      var ce = c(V);
      (G = E(ce, "Sign in to platform")),
        ce.forEach(i),
        (J = y(T)),
        s && s.l(T),
        (j = y(T)),
        (o = n(T, "FORM", { class: !0, action: !0, method: !0 }));
      var p = c(o);
      A = n(p, "DIV", {});
      var C = c(A);
      k = n(C, "LABEL", { for: !0, class: !0 });
      var ue = c(k);
      (M = E(ue, "Email")),
        ue.forEach(i),
        (R = y(C)),
        (v = n(C, "INPUT", {
          id: !0,
          name: !0,
          type: !0,
          autocomplete: !0,
          class: !0,
        })),
        C.forEach(i),
        (z = y(p)),
        (I = n(p, "DIV", {}));
      var H = c(I);
      P = n(H, "LABEL", { for: !0, class: !0 });
      var me = c(P);
      (K = E(me, "Password")),
        me.forEach(i),
        (Q = y(H)),
        (_ = n(H, "INPUT", {
          id: !0,
          name: !0,
          type: !0,
          autocomplete: !0,
          class: !0,
        })),
        H.forEach(i),
        (W = y(p)),
        (q = n(p, "DIV", { class: !0 }));
      var de = c(q);
      $ = n(de, "A", { href: !0, class: !0 });
      var fe = c($);
      (X = E(fe, "Forgot Password?")),
        fe.forEach(i),
        de.forEach(i),
        (Y = y(p)),
        (D = n(p, "BUTTON", { type: !0, class: !0 }));
      var pe = c(D);
      (Z = E(pe, "Login to your account")),
        pe.forEach(i),
        (ee = y(p)),
        (S = n(p, "DIV", { class: !0 }));
      var se = c(S);
      (te = E(
        se,
        `Don't have an account?
        `
      )),
        (L = n(se, "A", { href: !0, class: !0 }));
      var he = c(L);
      (re = E(he, "Create account")),
        he.forEach(i),
        se.forEach(i),
        p.forEach(i),
        T.forEach(i),
        b.forEach(i),
        this.h();
    },
    h() {
      O(a, "font-family", "Helvetica, sans-serif, Arial"),
        t(u, "href", "/"),
        t(
          u,
          "class",
          "mb-8 flex items-center justify-center text-2xl font-semibold lg:mb-10"
        ),
        t(V, "class", "text-2xl font-bold"),
        t(k, "for", "email"),
        t(k, "class", "mb-2 block text-sm font-medium"),
        t(v, "id", "email"),
        t(v, "name", "email"),
        t(v, "type", "email"),
        t(v, "autocomplete", "email"),
        (v.required = !0),
        t(
          v,
          "class",
          "block w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
        ),
        t(P, "for", "password"),
        t(P, "class", "mb-2 block text-sm font-medium"),
        t(_, "id", "password"),
        t(_, "name", "password"),
        t(_, "type", "password"),
        t(_, "autocomplete", "current-password"),
        (_.required = !0),
        t(
          _,
          "class",
          "block w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
        ),
        t($, "href", "/forgot-password"),
        t($, "class", "ml-auto text-sm text-primary-700 hover:underline"),
        t(q, "class", "flex items-start"),
        t(D, "type", "submit"),
        t(
          D,
          "class",
          "w-full rounded-md bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto"
        ),
        t(L, "href", "/register"),
        t(L, "class", "text-primary-700 hover:underline"),
        t(S, "class", "text-sm font-medium text-gray-500"),
        t(o, "class", "mt-8 space-y-6"),
        t(o, "action", "?/login"),
        t(o, "method", "POST"),
        t(
          m,
          "class",
          "w-full max-w-xl space-y-8 rounded-md border p-6 shadow sm:p-8"
        ),
        O(m, "background", "#202020"),
        O(m, "border-color", "#303040"),
        O(m, "border-width", "5px"),
        t(
          r,
          "class",
          "pt:mt-0 mx-auto flex flex-col items-center justify-center px-6 pb-24 md:h-screen"
        );
    },
    m(f, b) {
      ye(f, r, b),
        e(r, u),
        e(u, a),
        e(a, h),
        e(r, d),
        e(r, m),
        e(m, V),
        e(V, G),
        e(m, J),
        s && s.m(m, null),
        e(m, j),
        e(m, o),
        e(o, A),
        e(A, k),
        e(k, M),
        e(A, R),
        e(A, v),
        e(o, z),
        e(o, I),
        e(I, P),
        e(P, K),
        e(I, Q),
        e(I, _),
        e(o, W),
        e(o, q),
        e(q, $),
        e($, X),
        e(o, Y),
        e(o, D),
        e(D, Z),
        e(o, ee),
        e(o, S),
        e(S, te),
        e(S, L),
        e(L, re),
        (B = !0),
        ae || ((le = xe($e.call(null, o, x[1]))), (ae = !0));
    },
    p(f, [b]) {
      var F, N;
      (N = (F = f[0]) == null ? void 0 : F.error) != null && N.message
        ? s
          ? (s.p(f, b), b & 1 && U(s, 1))
          : ((s = ve(f)), s.c(), U(s, 1), s.m(m, j))
        : s &&
          (Pe(),
          oe(s, 1, 1, () => {
            s = null;
          }),
          we());
    },
    i(f) {
      B || (U(s), (B = !0));
    },
    o(f) {
      oe(s), (B = !1);
    },
    d(f) {
      f && i(r), s && s.d(), (ae = !1), le();
    },
  };
}
function qe(x, r, u) {
  let { form: a } = r;
  const h =
    () =>
    async ({ result: d }) => {
      Se(), await De(d);
    };
  return (
    (x.$$set = (d) => {
      "form" in d && u(0, (a = d.form));
    }),
    [a, h]
  );
}
class Be extends _e {
  constructor(r) {
    super(), be(this, r, qe, Ve, ge, { form: 0 });
  }
}
export { Be as component };
