import {
  S,
  i as q,
  s as x,
  e as f,
  d as _,
  f as j,
  h as d,
  j as g,
  k as h,
  l,
  m as k,
  o as m,
  p as v,
  w as $,
  q as E,
  L as w,
} from "../chunks/index.229400e6.js";
import { s as y } from "../chunks/singletons.dd9c9a0a.js";
const C = () => {
    const s = y;
    return {
      page: { subscribe: s.page.subscribe },
      navigating: { subscribe: s.navigating.subscribe },
      updated: s.updated,
    };
  },
  H = {
    subscribe(s) {
      return C().page.subscribe(s);
    },
  };
function L(s) {
  var b;
  let t,
    r = s[0].status + "",
    o,
    n,
    i,
    p = ((b = s[0].error) == null ? void 0 : b.message) + "",
    u;
  return {
    c() {
      (t = f("h1")), (o = _(r)), (n = j()), (i = f("p")), (u = _(p));
    },
    l(e) {
      t = d(e, "H1", {});
      var a = g(t);
      (o = h(a, r)), a.forEach(l), (n = k(e)), (i = d(e, "P", {}));
      var c = g(i);
      (u = h(c, p)), c.forEach(l);
    },
    m(e, a) {
      m(e, t, a), v(t, o), m(e, n, a), m(e, i, a), v(i, u);
    },
    p(e, [a]) {
      var c;
      a & 1 && r !== (r = e[0].status + "") && $(o, r),
        a & 1 &&
          p !== (p = ((c = e[0].error) == null ? void 0 : c.message) + "") &&
          $(u, p);
    },
    i: E,
    o: E,
    d(e) {
      e && l(t), e && l(n), e && l(i);
    },
  };
}
function P(s, t, r) {
  let o;
  return w(s, H, (n) => r(0, (o = n))), [o];
}
let B = class extends S {
  constructor(t) {
    super(), q(this, t, P, L, x, {});
  }
};
export { B as component };
