import {
  S as U,
  i as E,
  s as O,
  e as d,
  f as N,
  d as g,
  h as c,
  j as T,
  m as I,
  k as q,
  l as m,
  n as e,
  o as j,
  p as a,
  A as k,
  q as P,
} from "../chunks/index.229400e6.js";
import { e as A } from "../chunks/forms.4c325e09.js";
function B(h) {
  let n, t, s, f, o, _, i, y, l, x, v, b;
  return {
    c() {
      (n = d("div")),
        (t = d("form")),
        (s = d("input")),
        (f = N()),
        (o = d("input")),
        (_ = N()),
        (i = d("input")),
        (y = N()),
        (l = d("button")),
        (x = g("send")),
        this.h();
    },
    l(u) {
      n = c(u, "DIV", {});
      var p = T(n);
      t = c(p, "FORM", { action: !0, method: !0 });
      var r = T(t);
      (s = c(r, "INPUT", { type: !0, name: !0, id: !0, placeholder: !0 })),
        (f = I(r)),
        (o = c(r, "INPUT", { type: !0, name: !0, id: !0, placeholder: !0 })),
        (_ = I(r)),
        (i = c(r, "INPUT", { type: !0, name: !0, id: !0, placeholder: !0 })),
        (y = I(r)),
        (l = c(r, "BUTTON", { type: !0, class: !0 }));
      var S = T(l);
      (x = q(S, "send")), S.forEach(m), r.forEach(m), p.forEach(m), this.h();
    },
    h() {
      e(s, "type", "text"),
        e(s, "name", "content"),
        e(s, "id", "content"),
        e(s, "placeholder", "Notification"),
        e(o, "type", "text"),
        e(o, "name", "id"),
        e(o, "id", "id"),
        e(o, "placeholder", "Id"),
        e(i, "type", "text"),
        e(i, "name", "sender"),
        e(i, "id", "sender"),
        e(i, "placeholder", "Sender Name"),
        e(l, "type", "submit"),
        e(l, "class", "item"),
        e(t, "action", "?/send"),
        e(t, "method", "POST");
    },
    m(u, p) {
      j(u, n, p),
        a(n, t),
        a(t, s),
        a(t, f),
        a(t, o),
        a(t, _),
        a(t, i),
        a(t, y),
        a(t, l),
        a(l, x),
        v || ((b = k(A.call(null, t, C))), (v = !0));
    },
    p: P,
    i: P,
    o: P,
    d(u) {
      u && m(n), (v = !1), b();
    },
  };
}
const C =
  () =>
  async ({ update: h }) => {
    h({ reset: !1 });
  };
class M extends U {
  constructor(n) {
    super(), E(this, n, null, B, O, {});
  }
}
export { M as component };
