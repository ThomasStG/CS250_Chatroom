import {
  S as w,
  i as v,
  s as x,
  e as k,
  f as A,
  d as f,
  h,
  j as _,
  m as S,
  k as b,
  l as o,
  n as d,
  o as p,
  p as g,
  w as y,
  q as u,
} from "./index.229400e6.js";
import { c } from "./clsx.m.1229b3e0.js";
function m(a) {
  let e, s, n;
  return {
    c() {
      (e = k("span")), (s = f(a[0])), (n = f("!")), this.h();
    },
    l(r) {
      e = h(r, "SPAN", { class: !0 });
      var t = _(e);
      (s = b(t, a[0])), (n = b(t, "!")), t.forEach(o), this.h();
    },
    h() {
      d(e, "class", "font-medium");
    },
    m(r, t) {
      p(r, e, t), g(e, s), g(e, n);
    },
    p(r, t) {
      t & 1 && y(s, r[0]);
    },
    d(r) {
      r && o(e);
    },
  };
}
function q(a) {
  let e,
    s,
    n,
    r,
    t = a[0] && a[0] != "" && m(a);
  return {
    c() {
      (e = k("div")), t && t.c(), (s = A()), (n = f(a[1])), this.h();
    },
    l(l) {
      e = h(l, "DIV", { class: !0, role: !0 });
      var i = _(e);
      t && t.l(i), (s = S(i)), (n = b(i, a[1])), i.forEach(o), this.h();
    },
    h() {
      d(
        e,
        "class",
        (r = c("mb-4 rounded-lg p-4  text-sm", {
          "bg-red-100 text-red-700 dark:bg-red-200 dark:text-red-800":
            a[2] == "danger",
          "bg-green-100 text-green-700 dark:bg-green-200 dark:text-green-800":
            a[2] == "success",
          "bg-blue-100 text-blue-700 dark:bg-blue-200 dark:text-blue-800":
            a[2] == "info",
          "bg-yellow-100 text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800":
            a[2] == "warning",
        }))
      ),
        d(e, "role", "alert");
    },
    m(l, i) {
      p(l, e, i), t && t.m(e, null), g(e, s), g(e, n);
    },
    p(l, [i]) {
      l[0] && l[0] != ""
        ? t
          ? t.p(l, i)
          : ((t = m(l)), t.c(), t.m(e, s))
        : t && (t.d(1), (t = null)),
        i & 2 && y(n, l[1]),
        i & 4 &&
          r !==
            (r = c("mb-4 rounded-lg p-4  text-sm", {
              "bg-red-100 text-red-700 dark:bg-red-200 dark:text-red-800":
                l[2] == "danger",
              "bg-green-100 text-green-700 dark:bg-green-200 dark:text-green-800":
                l[2] == "success",
              "bg-blue-100 text-blue-700 dark:bg-blue-200 dark:text-blue-800":
                l[2] == "info",
              "bg-yellow-100 text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800":
                l[2] == "warning",
            })) &&
          d(e, "class", r);
    },
    i: u,
    o: u,
    d(l) {
      l && o(e), t && t.d();
    },
  };
}
function E(a, e, s) {
  let { title: n = "" } = e,
    { description: r } = e,
    { type: t } = e;
  return (
    (a.$$set = (l) => {
      "title" in l && s(0, (n = l.title)),
        "description" in l && s(1, (r = l.description)),
        "type" in l && s(2, (t = l.type));
    }),
    [n, r, t]
  );
}
class D extends w {
  constructor(e) {
    super(), v(this, e, E, q, x, { title: 0, description: 1, type: 2 });
  }
}
export { D as A };
