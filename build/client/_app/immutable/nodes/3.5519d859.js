import {
  S as l,
  i,
  s as r,
  c as u,
  u as f,
  g as _,
  a as c,
  t as p,
  b as m,
} from "../chunks/index.229400e6.js";
function $(a) {
  let s;
  const o = a[1].default,
    e = u(o, a, a[0], null);
  return {
    c() {
      e && e.c();
    },
    l(t) {
      e && e.l(t);
    },
    m(t, n) {
      e && e.m(t, n), (s = !0);
    },
    p(t, [n]) {
      e &&
        e.p &&
        (!s || n & 1) &&
        f(e, o, t, t[0], s ? c(o, t[0], n, null) : _(t[0]), null);
    },
    i(t) {
      s || (p(e, t), (s = !0));
    },
    o(t) {
      m(e, t), (s = !1);
    },
    d(t) {
      e && e.d(t);
    },
  };
}
function d(a, s, o) {
  let { $$slots: e = {}, $$scope: t } = s;
  return (
    (a.$$set = (n) => {
      "$$scope" in n && o(0, (t = n.$$scope));
    }),
    [t, e]
  );
}
class b extends l {
  constructor(s) {
    super(), i(this, s, d, $, r, {});
  }
}
export { b as component };
