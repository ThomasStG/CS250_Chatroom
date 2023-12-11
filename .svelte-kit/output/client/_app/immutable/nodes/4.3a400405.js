import {
  S as y,
  i as C,
  s as E,
  e as o,
  d as u,
  f as T,
  h as c,
  j as p,
  k as x,
  l,
  m as A,
  n as _,
  o as D,
  p as a,
  q as v,
} from "../chunks/index.229400e6.js";
function I(q) {
  let t, e, s, h, d, g, n, m;
  return {
    c() {
      (t = o("div")),
        (e = o("h1")),
        (s = o("span")),
        (h = u("[Squire]")),
        (d = u(" Chat App.")),
        (g = T()),
        (n = o("p")),
        (m = u(`This is a chat app for the CS-250 class. This app is capable of
    authentication, creating chat rooms by user ID, sending messages, 
    sending and approving friend requests, and utilizing direct messages.`)),
        this.h();
    },
    l(r) {
      t = c(r, "DIV", {});
      var i = p(t);
      e = c(i, "H1", { class: !0 });
      var f = p(e);
      s = c(f, "SPAN", { class: !0 });
      var b = p(s);
      (h = x(b, "[Squire]")),
        b.forEach(l),
        (d = x(f, " Chat App.")),
        f.forEach(l),
        (g = A(i)),
        (n = c(i, "P", { class: !0 }));
      var S = p(n);
      (m = x(
        S,
        `This is a chat app for the CS-250 class. This app is capable of
    authentication, creating chat rooms by user ID, sending messages, 
    sending and approving friend requests, and utilizing direct messages.`
      )),
        S.forEach(l),
        i.forEach(l),
        this.h();
    },
    h() {
      _(
        s,
        "class",
        "bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent"
      ),
        _(e, "class", "mb-4 text-3xl font-extrabold md:text-5xl lg:text-6xl"),
        _(n, "class", "text-white-500 text-lg font-normal lg:text-xl");
    },
    m(r, i) {
      D(r, t, i), a(t, e), a(e, s), a(s, h), a(e, d), a(t, g), a(t, n), a(n, m);
    },
    p: v,
    i: v,
    o: v,
    d(r) {
      r && l(t);
    },
  };
}
class w extends y {
  constructor(t) {
    super(), C(this, t, null, I, E, {});
  }
}
export { w as component };
