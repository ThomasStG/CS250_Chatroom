import {
  S as _t,
  i as qt,
  s as Tt,
  e as s,
  d as y,
  f as m,
  h as a,
  j as o,
  k as b,
  l,
  m as v,
  n as t,
  x as Et,
  o as It,
  p as e,
  q as rt,
  M as Bt,
} from "../chunks/index.229400e6.js";
function Lt(ct) {
  let r,
    c,
    h,
    M,
    U,
    n,
    d,
    g,
    N,
    x,
    k,
    z,
    G,
    E,
    D,
    J,
    K,
    p,
    f,
    Q,
    O,
    W,
    X,
    V,
    i,
    _,
    Y,
    q,
    Z,
    P,
    tt,
    et,
    w,
    u,
    T,
    st,
    at,
    I,
    lt,
    nt,
    B,
    ot;
  return {
    c() {
      (r = s("div")),
        (c = s("div")),
        (h = s("h1")),
        (M = y("Settings")),
        (U = m()),
        (n = s("form")),
        (d = s("div")),
        (g = s("p")),
        (N = y("Dark Mode")),
        (x = m()),
        (k = s("button")),
        (z = y("Turn on/off")),
        (G = m()),
        (E = s("div")),
        (D = s("p")),
        (J = y("Change Username")),
        (K = m()),
        (p = s("form")),
        (f = s("input")),
        (Q = m()),
        (O = s("button")),
        (W = y("submit")),
        (X = m()),
        (V = s("div")),
        (i = s("form")),
        (_ = s("input")),
        (Y = m()),
        (q = s("input")),
        (Z = m()),
        (P = s("button")),
        (tt = y("submit")),
        (et = m()),
        (w = s("div")),
        (u = s("form")),
        (T = s("button")),
        (st = y("Delete Account")),
        (at = m()),
        (I = s("button")),
        (lt = y("Cancel")),
        (nt = m()),
        (B = s("button")),
        (ot = y("Confirm")),
        this.h();
    },
    l(F) {
      r = a(F, "DIV", { class: !0 });
      var R = o(r);
      c = a(R, "DIV", {});
      var A = o(c);
      h = a(A, "H1", { class: !0 });
      var dt = o(h);
      (M = b(dt, "Settings")),
        dt.forEach(l),
        (U = v(A)),
        (n = a(A, "FORM", { action: !0, class: !0, style: !0 }));
      var L = o(n);
      d = a(L, "DIV", { class: !0 });
      var $ = o(d);
      g = a($, "P", {});
      var it = o(g);
      (N = b(it, "Dark Mode")),
        it.forEach(l),
        (x = v($)),
        (k = a($, "BUTTON", { id: !0, class: !0 }));
      var ut = o(k);
      (z = b(ut, "Turn on/off")),
        ut.forEach(l),
        $.forEach(l),
        (G = v(L)),
        (E = a(L, "DIV", { class: !0 }));
      var j = o(E);
      D = a(j, "P", { class: !0 });
      var mt = o(D);
      (J = b(mt, "Change Username")),
        mt.forEach(l),
        (K = v(j)),
        (p = a(j, "FORM", { action: !0, method: !0 }));
      var H = o(p);
      (f = a(H, "INPUT", {
        type: !0,
        name: !0,
        id: !0,
        class: !0,
        placeholder: !0,
        maxlength: !0,
      })),
        (Q = v(H)),
        (O = a(H, "BUTTON", { type: !0, class: !0 }));
      var vt = o(O);
      (W = b(vt, "submit")),
        vt.forEach(l),
        H.forEach(l),
        j.forEach(l),
        (X = v(L)),
        (V = a(L, "DIV", {}));
      var ht = o(V);
      i = a(ht, "FORM", { action: !0, method: !0 });
      var C = o(i);
      (_ = a(C, "INPUT", {
        type: !0,
        name: !0,
        id: !0,
        class: !0,
        placeholder: !0,
      })),
        (Y = v(C)),
        (q = a(C, "INPUT", {
          type: !0,
          name: !0,
          id: !0,
          class: !0,
          placeholder: !0,
        })),
        (Z = v(C)),
        (P = a(C, "BUTTON", { type: !0, class: !0 }));
      var gt = o(P);
      (tt = b(gt, "submit")),
        gt.forEach(l),
        C.forEach(l),
        ht.forEach(l),
        (et = v(L)),
        (w = a(L, "DIV", { class: !0 }));
      var pt = o(w);
      u = a(pt, "FORM", { action: !0, method: !0 });
      var S = o(u);
      T = a(S, "BUTTON", { id: !0, type: !0, class: !0 });
      var ft = o(T);
      (st = b(ft, "Delete Account")),
        ft.forEach(l),
        (at = v(S)),
        (I = a(S, "BUTTON", { id: !0, type: !0, class: !0 }));
      var yt = o(I);
      (lt = b(yt, "Cancel")),
        yt.forEach(l),
        (nt = v(S)),
        (B = a(S, "BUTTON", { id: !0, type: !0, class: !0 }));
      var bt = o(B);
      (ot = b(bt, "Confirm")),
        bt.forEach(l),
        S.forEach(l),
        pt.forEach(l),
        L.forEach(l),
        A.forEach(l),
        R.forEach(l),
        this.h();
    },
    h() {
      t(
        h,
        "class",
        "mb-4 text-center text-4xl font-extrabold md:text-5xl lg:text-6xl"
      ),
        t(k, "id", "darkmode"),
        t(k, "class", "item svelte-q4yqv2"),
        t(d, "class", "setting-item svelte-q4yqv2"),
        t(D, "class", "item svelte-q4yqv2"),
        t(f, "type", "text"),
        t(f, "name", "username"),
        t(f, "id", "username"),
        t(f, "class", "input item svelte-q4yqv2"),
        t(f, "placeholder", "New username"),
        t(f, "maxlength", "14"),
        t(O, "type", "submit"),
        t(O, "class", "item svelte-q4yqv2"),
        t(p, "action", "?/changeName"),
        t(p, "method", "POST"),
        t(E, "class", "setting-item svelte-q4yqv2"),
        t(_, "type", "password"),
        t(_, "name", "old-pass"),
        t(_, "id", "old-pass"),
        t(_, "class", "input item svelte-q4yqv2"),
        t(_, "placeholder", "Old Password"),
        t(q, "type", "password"),
        t(q, "name", "new-pass"),
        t(q, "id", "new-pass"),
        t(q, "class", "input item svelte-q4yqv2"),
        t(q, "placeholder", "New Password"),
        t(P, "type", "submit"),
        t(P, "class", "item svelte-q4yqv2"),
        t(i, "action", "?/changePass"),
        t(i, "method", "POST"),
        t(T, "id", "delete"),
        t(T, "type", "button"),
        t(T, "class", "item svelte-q4yqv2"),
        t(I, "id", "confirm"),
        t(I, "type", "button"),
        t(I, "class", "item hidden svelte-q4yqv2"),
        t(B, "id", "cancel"),
        t(B, "type", "submit"),
        t(B, "class", "item hidden svelte-q4yqv2"),
        t(u, "action", "?/deleteAccount"),
        t(u, "method", "POST"),
        t(w, "class", "setting-item svelte-q4yqv2"),
        t(n, "action", "#"),
        t(n, "class", "settings svelte-q4yqv2"),
        Et(n, "margin-left", "2vw"),
        Et(n, "margin-top", "3vh"),
        t(r, "class", "background");
    },
    m(F, R) {
      It(F, r, R),
        e(r, c),
        e(c, h),
        e(h, M),
        e(c, U),
        e(c, n),
        e(n, d),
        e(d, g),
        e(g, N),
        e(d, x),
        e(d, k),
        e(k, z),
        e(n, G),
        e(n, E),
        e(E, D),
        e(D, J),
        e(E, K),
        e(E, p),
        e(p, f),
        e(p, Q),
        e(p, O),
        e(O, W),
        e(n, X),
        e(n, V),
        e(V, i),
        e(i, _),
        e(i, Y),
        e(i, q),
        e(i, Z),
        e(i, P),
        e(P, tt),
        e(n, et),
        e(n, w),
        e(w, u),
        e(u, T),
        e(T, st),
        e(u, at),
        e(u, I),
        e(I, lt),
        e(u, nt),
        e(u, B),
        e(B, ot);
    },
    p: rt,
    i: rt,
    o: rt,
    d(F) {
      F && l(r);
    },
  };
}
function Nt(ct) {
  return (
    Bt(() => {
      const r = document.getElementById("delete"),
        c = document.getElementById("confirm"),
        h = document.getElementById("cancel"),
        M = document.getElementById("docbody"),
        U = document.getElementById("darkmode"),
        n = document.getElementById("Nav-Chat"),
        d = document.getElementById("Nav-Send"),
        g = document.getElementById("Nav-Friend"),
        N = document.getElementById("Nav-Notify"),
        x = document.getElementById("global-chat");
      document.getElementById("styleScript"),
        document.getElementsByTagName("link")[0],
        r &&
          h &&
          c &&
          (r.addEventListener("click", () => {
            h.classList.remove("hidden"),
              c.classList.remove("hidden"),
              console.log("pressed");
          }),
          c.addEventListener("click", () => {
            h.classList.add("hidden"), c.classList.add("hidden");
          })),
        M &&
          U &&
          n &&
          d &&
          g &&
          N &&
          x &&
          U.addEventListener("click", () => {
            document.body.classList.toggle("style-light"),
              n.classList.toggle("dark"),
              n.classList.toggle("light"),
              d.classList.toggle("dark"),
              d.classList.toggle("light"),
              g.classList.toggle("dark"),
              g.classList.toggle("light"),
              N.classList.toggle("dark"),
              N.classList.toggle("light"),
              x.classList.toggle("dark"),
              x.classList.toggle("light");
          });
    }),
    []
  );
}
class kt extends _t {
  constructor(r) {
    super(), qt(this, r, Nt, Lt, Tt, {});
  }
}
export { kt as component };
