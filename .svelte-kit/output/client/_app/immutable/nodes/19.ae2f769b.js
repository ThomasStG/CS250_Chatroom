import {
  S as $e,
  i as Ne,
  s as Ce,
  e as s,
  f as d,
  d as x,
  h as o,
  j as c,
  m as f,
  k as w,
  l as i,
  K as De,
  n as e,
  x as he,
  o as Se,
  p as t,
  A as Te,
  t as z,
  b as ye,
  E as Ue,
  F as Ve,
  G as Be,
  H as je,
  I as Oe,
  J as Fe,
} from "../chunks/index.229400e6.js";
import { A as Ge } from "../chunks/Alert.d237b4ef.js";
import { e as He } from "../chunks/forms.4c325e09.js";
function Pe(I) {
  let r, u;
  return (
    (r = new Ge({
      props: { type: "danger", description: I[0].error.message },
    })),
    {
      c() {
        Ve(r.$$.fragment);
      },
      l(a) {
        Be(r.$$.fragment, a);
      },
      m(a, g) {
        je(r, a, g), (u = !0);
      },
      p(a, g) {
        const V = {};
        g & 1 && (V.description = a[0].error.message), r.$set(V);
      },
      i(a) {
        u || (z(r.$$.fragment, a), (u = !0));
      },
      o(a) {
        ye(r.$$.fragment, a), (u = !1);
      },
      d(a) {
        Oe(r, a);
      },
    }
  );
}
function Me(I) {
  var _e, xe;
  let r,
    u,
    a,
    g,
    V,
    O,
    Q,
    W,
    m,
    B,
    X,
    Y,
    G,
    n,
    A,
    L,
    Z,
    ee,
    h,
    te,
    q,
    E,
    re,
    ae,
    k,
    se,
    P,
    $,
    oe,
    le,
    y,
    ne,
    N,
    C,
    ie,
    ce,
    v,
    ue,
    D,
    me,
    de,
    S,
    fe,
    T,
    pe,
    H,
    be,
    ve,
    l =
      ((xe = (_e = I[0]) == null ? void 0 : _e.error) == null
        ? void 0
        : xe.message) && Pe(I);
  return {
    c() {
      (r = s("div")),
        (u = s("a")),
        (a = s("img")),
        (V = d()),
        (O = s("span")),
        (Q = x("[Squire]")),
        (W = d()),
        (m = s("div")),
        (B = s("h2")),
        (X = x("Create a new account")),
        (Y = d()),
        l && l.c(),
        (G = d()),
        (n = s("form")),
        (A = s("div")),
        (L = s("label")),
        (Z = x("Email")),
        (ee = d()),
        (h = s("input")),
        (te = d()),
        (q = s("div")),
        (E = s("label")),
        (re = x("User-Name")),
        (ae = d()),
        (k = s("input")),
        (se = d()),
        (P = s("div")),
        ($ = s("label")),
        (oe = x("Password")),
        (le = d()),
        (y = s("input")),
        (ne = d()),
        (N = s("div")),
        (C = s("label")),
        (ie = x("Confirm password")),
        (ce = d()),
        (v = s("input")),
        (ue = d()),
        (D = s("button")),
        (me = x("Create account")),
        (de = d()),
        (S = s("div")),
        (fe = x("Already have an account? ")),
        (T = s("a")),
        (pe = x("Login")),
        this.h();
    },
    l(b) {
      r = o(b, "DIV", { class: !0 });
      var _ = c(r);
      u = o(_, "A", { href: !0, class: !0 });
      var U = c(u);
      (a = o(U, "IMG", { src: !0, class: !0, alt: !0 })),
        (V = f(U)),
        (O = o(U, "SPAN", {}));
      var F = c(O);
      (Q = w(F, "[Squire]")),
        F.forEach(i),
        U.forEach(i),
        (W = f(_)),
        (m = o(_, "DIV", { class: !0, style: !0 }));
      var j = c(m);
      B = o(j, "H2", { class: !0 });
      var we = c(B);
      (X = w(we, "Create a new account")),
        we.forEach(i),
        (Y = f(j)),
        l && l.l(j),
        (G = f(j)),
        (n = o(j, "FORM", { action: !0, method: !0, class: !0 }));
      var p = c(n);
      A = o(p, "DIV", {});
      var M = c(A);
      L = o(M, "LABEL", { for: !0, class: !0 });
      var Ee = c(L);
      (Z = w(Ee, "Email")),
        Ee.forEach(i),
        (ee = f(M)),
        (h = o(M, "INPUT", {
          id: !0,
          name: !0,
          type: !0,
          autocomplete: !0,
          class: !0,
        })),
        M.forEach(i),
        (te = f(p)),
        (q = o(p, "DIV", {}));
      var J = c(q);
      E = o(J, "LABEL", { for: !0, class: !0, maxlength: !0 });
      var ke = c(E);
      (re = w(ke, "User-Name")),
        ke.forEach(i),
        (ae = f(J)),
        (k = o(J, "INPUT", { id: !0, name: !0, type: !0, class: !0 })),
        J.forEach(i),
        (se = f(p)),
        (P = o(p, "DIV", {}));
      var K = c(P);
      $ = o(K, "LABEL", { for: !0, class: !0 });
      var Ie = c($);
      (oe = w(Ie, "Password")),
        Ie.forEach(i),
        (le = f(K)),
        (y = o(K, "INPUT", {
          id: !0,
          name: !0,
          type: !0,
          autocomplete: !0,
          class: !0,
        })),
        K.forEach(i),
        (ne = f(p)),
        (N = o(p, "DIV", {}));
      var R = c(N);
      C = o(R, "LABEL", { for: !0, class: !0 });
      var Ae = c(C);
      (ie = w(Ae, "Confirm password")),
        Ae.forEach(i),
        (ce = f(R)),
        (v = o(R, "INPUT", {
          id: !0,
          name: !0,
          type: !0,
          autocomplete: !0,
          class: !0,
        })),
        R.forEach(i),
        (ue = f(p)),
        (D = o(p, "BUTTON", { type: !0, class: !0 }));
      var Le = c(D);
      (me = w(Le, "Create account")),
        Le.forEach(i),
        (de = f(p)),
        (S = o(p, "DIV", { class: !0 }));
      var ge = c(S);
      (fe = w(ge, "Already have an account? ")),
        (T = o(ge, "A", { href: !0, class: !0 }));
      var qe = c(T);
      (pe = w(qe, "Login")),
        qe.forEach(i),
        ge.forEach(i),
        p.forEach(i),
        j.forEach(i),
        _.forEach(i),
        this.h();
    },
    h() {
      De(a.src, (g = "/favicon.png")) || e(a, "src", g),
        e(a, "class", "mr-4 h-11"),
        e(a, "alt", "Squire Logo"),
        e(u, "href", "/"),
        e(
          u,
          "class",
          "mb-8 flex items-center justify-center text-2xl font-semibold lg:mb-10"
        ),
        e(B, "class", "text-2xl font-bold"),
        e(L, "for", "email"),
        e(L, "class", "mb-2 block text-sm font-medium"),
        e(h, "id", "email"),
        e(h, "name", "email"),
        e(h, "type", "email"),
        e(h, "autocomplete", "email"),
        (h.required = !0),
        e(
          h,
          "class",
          "block w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
        ),
        e(E, "for", "username"),
        e(E, "class", "mb-2 block text-sm font-medium"),
        e(E, "maxlength", "14"),
        e(k, "id", "username"),
        e(k, "name", "username"),
        e(k, "type", "text"),
        (k.required = !0),
        e(
          k,
          "class",
          "block w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 focus:border-primary-500 focus:ring-primary-500 sm:text-sm text-gray-900"
        ),
        e($, "for", "password"),
        e($, "class", "mb-2 block text-sm font-medium"),
        e(y, "id", "password"),
        e(y, "name", "password"),
        e(y, "type", "password"),
        e(y, "autocomplete", "new-password"),
        (y.required = !0),
        e(
          y,
          "class",
          "block w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
        ),
        e(C, "for", "confirm-password"),
        e(C, "class", "mb-2 block text-sm font-medium"),
        e(v, "id", "password-confirmation"),
        e(v, "name", "password-confirmation"),
        e(v, "type", "password"),
        e(v, "autocomplete", "new-password"),
        (v.required = !0),
        e(
          v,
          "class",
          "block w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
        ),
        e(D, "type", "submit"),
        e(
          D,
          "class",
          "w-full rounded-md bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto"
        ),
        e(T, "href", "/login"),
        e(T, "class", "text-primary-700 hover:underline"),
        e(S, "class", "text-sm font-medium text-gray-500"),
        e(n, "action", "?/register"),
        e(n, "method", "POST"),
        e(n, "class", "mt-8 space-y-6"),
        e(
          m,
          "class",
          "w-full max-w-xl space-y-8 rounded-md border p-6 shadow sm:p-8"
        ),
        he(m, "background", "#202020"),
        he(m, "border-color", "#303040"),
        he(m, "border-width", "5px"),
        e(
          r,
          "class",
          "pt:mt-0 mx-auto flex flex-col items-center justify-center px-6 pb-24 md:h-screen"
        );
    },
    m(b, _) {
      Se(b, r, _),
        t(r, u),
        t(u, a),
        t(u, V),
        t(u, O),
        t(O, Q),
        t(r, W),
        t(r, m),
        t(m, B),
        t(B, X),
        t(m, Y),
        l && l.m(m, null),
        t(m, G),
        t(m, n),
        t(n, A),
        t(A, L),
        t(L, Z),
        t(A, ee),
        t(A, h),
        t(n, te),
        t(n, q),
        t(q, E),
        t(E, re),
        t(q, ae),
        t(q, k),
        t(n, se),
        t(n, P),
        t(P, $),
        t($, oe),
        t(P, le),
        t(P, y),
        t(n, ne),
        t(n, N),
        t(N, C),
        t(C, ie),
        t(N, ce),
        t(N, v),
        t(n, ue),
        t(n, D),
        t(D, me),
        t(n, de),
        t(n, S),
        t(S, fe),
        t(S, T),
        t(T, pe),
        (H = !0),
        be || ((ve = Te(He.call(null, n))), (be = !0));
    },
    p(b, [_]) {
      var U, F;
      (F = (U = b[0]) == null ? void 0 : U.error) != null && F.message
        ? l
          ? (l.p(b, _), _ & 1 && z(l, 1))
          : ((l = Pe(b)), l.c(), z(l, 1), l.m(m, G))
        : l &&
          (Fe(),
          ye(l, 1, 1, () => {
            l = null;
          }),
          Ue());
    },
    i(b) {
      H || (z(l), (H = !0));
    },
    o(b) {
      ye(l), (H = !1);
    },
    d(b) {
      b && i(r), l && l.d(), (be = !1), ve();
    },
  };
}
function Je(I, r, u) {
  let { form: a } = r;
  return (
    (I.$$set = (g) => {
      "form" in g && u(0, (a = g.form));
    }),
    [a]
  );
}
class Qe extends $e {
  constructor(r) {
    super(), Ne(this, r, Je, Me, Ce, { form: 0 });
  }
}
export { Qe as component };
