function N() {}
function tt(t, e) {
  for (const n in e) t[n] = e[n];
  return t;
}
function J(t) {
  return t();
}
function G() {
  return Object.create(null);
}
function w(t) {
  t.forEach(J);
}
function L(t) {
  return typeof t == "function";
}
function xt(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t == "object") || typeof t == "function";
}
let S;
function bt(t, e) {
  return S || (S = document.createElement("a")), (S.href = e), t === S.href;
}
function et(t) {
  return Object.keys(t).length === 0;
}
function nt(t, ...e) {
  if (t == null) return N;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function $t(t, e, n) {
  t.$$.on_destroy.push(nt(e, n));
}
function wt(t, e, n, i) {
  if (t) {
    const r = K(t, e, n, i);
    return t[0](r);
  }
}
function K(t, e, n, i) {
  return t[1] && i ? tt(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function Et(t, e, n, i) {
  if (t[2] && i) {
    const r = t[2](i(n));
    if (e.dirty === void 0) return r;
    if (typeof r == "object") {
      const o = [],
        s = Math.max(e.dirty.length, r.length);
      for (let u = 0; u < s; u += 1) o[u] = e.dirty[u] | r[u];
      return o;
    }
    return e.dirty | r;
  }
  return e.dirty;
}
function Nt(t, e, n, i, r, o) {
  if (r) {
    const s = K(e, n, i, o);
    t.p(s, r);
  }
}
function vt(t) {
  if (t.ctx.length > 32) {
    const e = [],
      n = t.ctx.length / 32;
    for (let i = 0; i < n; i++) e[i] = -1;
    return e;
  }
  return -1;
}
function kt(t) {
  return t ?? "";
}
function At(t, e, n) {
  return t.set(n), e;
}
function St(t) {
  return t && L(t.destroy) ? t.destroy : N;
}
let j = !1;
function it() {
  j = !0;
}
function rt() {
  j = !1;
}
function st(t, e, n, i) {
  for (; t < e; ) {
    const r = t + ((e - t) >> 1);
    n(r) <= i ? (t = r + 1) : (e = r);
  }
  return t;
}
function ct(t) {
  if (t.hydrate_init) return;
  t.hydrate_init = !0;
  let e = t.childNodes;
  if (t.nodeName === "HEAD") {
    const c = [];
    for (let l = 0; l < e.length; l++) {
      const f = e[l];
      f.claim_order !== void 0 && c.push(f);
    }
    e = c;
  }
  const n = new Int32Array(e.length + 1),
    i = new Int32Array(e.length);
  n[0] = -1;
  let r = 0;
  for (let c = 0; c < e.length; c++) {
    const l = e[c].claim_order,
      f =
        (r > 0 && e[n[r]].claim_order <= l
          ? r + 1
          : st(1, r, (d) => e[n[d]].claim_order, l)) - 1;
    i[c] = n[f] + 1;
    const _ = f + 1;
    (n[_] = c), (r = Math.max(_, r));
  }
  const o = [],
    s = [];
  let u = e.length - 1;
  for (let c = n[r] + 1; c != 0; c = i[c - 1]) {
    for (o.push(e[c - 1]); u >= c; u--) s.push(e[u]);
    u--;
  }
  for (; u >= 0; u--) s.push(e[u]);
  o.reverse(), s.sort((c, l) => c.claim_order - l.claim_order);
  for (let c = 0, l = 0; c < s.length; c++) {
    for (; l < o.length && s[c].claim_order >= o[l].claim_order; ) l++;
    const f = l < o.length ? o[l] : null;
    t.insertBefore(s[c], f);
  }
}
function lt(t, e) {
  if (j) {
    for (
      ct(t),
        (t.actual_end_child === void 0 ||
          (t.actual_end_child !== null &&
            t.actual_end_child.parentNode !== t)) &&
          (t.actual_end_child = t.firstChild);
      t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

    )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child
      ? (e.claim_order !== void 0 || e.parentNode !== t) &&
        t.insertBefore(e, t.actual_end_child)
      : (t.actual_end_child = e.nextSibling);
  } else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function Mt(t, e, n) {
  j && !n
    ? lt(t, e)
    : (e.parentNode !== t || e.nextSibling != n) &&
      t.insertBefore(e, n || null);
}
function ut(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function jt(t, e) {
  for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function ot(t) {
  return document.createElement(t);
}
function z(t) {
  return document.createTextNode(t);
}
function Ct() {
  return z(" ");
}
function Tt() {
  return z("");
}
function Dt(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function Ot(t) {
  return function (e) {
    return e.stopPropagation(), t.call(this, e);
  };
}
function Pt(t) {
  return function (e) {
    e.target === this && t.call(this, e);
  };
}
function qt(t, e, n) {
  n == null
    ? t.removeAttribute(e)
    : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function at(t) {
  return Array.from(t.childNodes);
}
function ft(t) {
  t.claim_info === void 0 &&
    (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function Q(t, e, n, i, r = !1) {
  ft(t);
  const o = (() => {
    for (let s = t.claim_info.last_index; s < t.length; s++) {
      const u = t[s];
      if (e(u)) {
        const c = n(u);
        return (
          c === void 0 ? t.splice(s, 1) : (t[s] = c),
          r || (t.claim_info.last_index = s),
          u
        );
      }
    }
    for (let s = t.claim_info.last_index - 1; s >= 0; s--) {
      const u = t[s];
      if (e(u)) {
        const c = n(u);
        return (
          c === void 0 ? t.splice(s, 1) : (t[s] = c),
          r
            ? c === void 0 && t.claim_info.last_index--
            : (t.claim_info.last_index = s),
          u
        );
      }
    }
    return i();
  })();
  return (
    (o.claim_order = t.claim_info.total_claimed),
    (t.claim_info.total_claimed += 1),
    o
  );
}
function dt(t, e, n, i) {
  return Q(
    t,
    (r) => r.nodeName === e,
    (r) => {
      const o = [];
      for (let s = 0; s < r.attributes.length; s++) {
        const u = r.attributes[s];
        n[u.name] || o.push(u.name);
      }
      o.forEach((s) => r.removeAttribute(s));
    },
    () => i(e)
  );
}
function Bt(t, e, n) {
  return dt(t, e, n, ot);
}
function _t(t, e) {
  return Q(
    t,
    (n) => n.nodeType === 3,
    (n) => {
      const i = "" + e;
      if (n.data.startsWith(i)) {
        if (n.data.length !== i.length) return n.splitText(i.length);
      } else n.data = i;
    },
    () => z(e),
    !0
  );
}
function Ht(t) {
  return _t(t, " ");
}
function Lt(t, e) {
  (e = "" + e), t.data !== e && (t.data = e);
}
function zt(t, e) {
  t.value = e ?? "";
}
function Ft(t, e, n, i) {
  n == null
    ? t.style.removeProperty(e)
    : t.style.setProperty(e, n, i ? "important" : "");
}
function Rt(t, e) {
  const n = [];
  let i = 0;
  for (const r of e.childNodes)
    if (r.nodeType === 8) {
      const o = r.textContent.trim();
      o === `HEAD_${t}_END`
        ? ((i -= 1), n.push(r))
        : o === `HEAD_${t}_START` && ((i += 1), n.push(r));
    } else i > 0 && n.push(r);
  return n;
}
function Wt(t, e) {
  return new t(e);
}
let v;
function E(t) {
  v = t;
}
function U() {
  if (!v) throw new Error("Function called outside component initialization");
  return v;
}
function Gt(t) {
  U().$$.on_mount.push(t);
}
function It(t) {
  U().$$.after_update.push(t);
}
function Jt(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((i) => i.call(this, e));
}
const b = [],
  I = [];
let $ = [];
const q = [],
  V = Promise.resolve();
let B = !1;
function X() {
  B || ((B = !0), V.then(Y));
}
function Kt() {
  return X(), V;
}
function H(t) {
  $.push(t);
}
function Qt(t) {
  q.push(t);
}
const P = new Set();
let x = 0;
function Y() {
  if (x !== 0) return;
  const t = v;
  do {
    try {
      for (; x < b.length; ) {
        const e = b[x];
        x++, E(e), ht(e.$$);
      }
    } catch (e) {
      throw ((b.length = 0), (x = 0), e);
    }
    for (E(null), b.length = 0, x = 0; I.length; ) I.pop()();
    for (let e = 0; e < $.length; e += 1) {
      const n = $[e];
      P.has(n) || (P.add(n), n());
    }
    $.length = 0;
  } while (b.length);
  for (; q.length; ) q.pop()();
  (B = !1), P.clear(), E(t);
}
function ht(t) {
  if (t.fragment !== null) {
    t.update(), w(t.before_update);
    const e = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, e),
      t.after_update.forEach(H);
  }
}
function mt(t) {
  const e = [],
    n = [];
  $.forEach((i) => (t.indexOf(i) === -1 ? e.push(i) : n.push(i))),
    n.forEach((i) => i()),
    ($ = e);
}
const M = new Set();
let g;
function Ut() {
  g = { r: 0, c: [], p: g };
}
function Vt() {
  g.r || w(g.c), (g = g.p);
}
function Z(t, e) {
  t && t.i && (M.delete(t), t.i(e));
}
function Xt(t, e, n, i) {
  if (t && t.o) {
    if (M.has(t)) return;
    M.add(t),
      g.c.push(() => {
        M.delete(t), i && (n && t.d(1), i());
      }),
      t.o(e);
  } else i && i();
}
function Yt(t, e) {
  t.d(1), e.delete(t.key);
}
function Zt(t, e, n, i, r, o, s, u, c, l, f, _) {
  let d = t.length,
    m = o.length,
    h = d;
  const C = {};
  for (; h--; ) C[t[h].key] = h;
  const k = [],
    T = new Map(),
    D = new Map(),
    F = [];
  for (h = m; h--; ) {
    const a = _(r, o, h),
      p = n(a);
    let y = s.get(p);
    y ? i && F.push(() => y.p(a, e)) : ((y = l(p, a)), y.c()),
      T.set(p, (k[h] = y)),
      p in C && D.set(p, Math.abs(h - C[p]));
  }
  const R = new Set(),
    W = new Set();
  function O(a) {
    Z(a, 1), a.m(u, f), s.set(a.key, a), (f = a.first), m--;
  }
  for (; d && m; ) {
    const a = k[m - 1],
      p = t[d - 1],
      y = a.key,
      A = p.key;
    a === p
      ? ((f = a.first), d--, m--)
      : T.has(A)
      ? !s.has(y) || R.has(y)
        ? O(a)
        : W.has(A)
        ? d--
        : D.get(y) > D.get(A)
        ? (W.add(y), O(a))
        : (R.add(A), d--)
      : (c(p, s), d--);
  }
  for (; d--; ) {
    const a = t[d];
    T.has(a.key) || c(a, s);
  }
  for (; m; ) O(k[m - 1]);
  return w(F), k;
}
function te(t, e, n) {
  const i = t.$$.props[e];
  i !== void 0 && ((t.$$.bound[i] = n), n(t.$$.ctx[i]));
}
function ee(t) {
  t && t.c();
}
function ne(t, e) {
  t && t.l(e);
}
function pt(t, e, n, i) {
  const { fragment: r, after_update: o } = t.$$;
  r && r.m(e, n),
    i ||
      H(() => {
        const s = t.$$.on_mount.map(J).filter(L);
        t.$$.on_destroy ? t.$$.on_destroy.push(...s) : w(s),
          (t.$$.on_mount = []);
      }),
    o.forEach(H);
}
function yt(t, e) {
  const n = t.$$;
  n.fragment !== null &&
    (mt(n.after_update),
    w(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function gt(t, e) {
  t.$$.dirty[0] === -1 && (b.push(t), X(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function ie(t, e, n, i, r, o, s, u = [-1]) {
  const c = v;
  E(t);
  const l = (t.$$ = {
    fragment: null,
    ctx: [],
    props: o,
    update: N,
    not_equal: r,
    bound: G(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    callbacks: G(),
    dirty: u,
    skip_bound: !1,
    root: e.target || c.$$.root,
  });
  s && s(l.root);
  let f = !1;
  if (
    ((l.ctx = n
      ? n(t, e.props || {}, (_, d, ...m) => {
          const h = m.length ? m[0] : d;
          return (
            l.ctx &&
              r(l.ctx[_], (l.ctx[_] = h)) &&
              (!l.skip_bound && l.bound[_] && l.bound[_](h), f && gt(t, _)),
            d
          );
        })
      : []),
    l.update(),
    (f = !0),
    w(l.before_update),
    (l.fragment = i ? i(l.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      it();
      const _ = at(e.target);
      l.fragment && l.fragment.l(_), _.forEach(ut);
    } else l.fragment && l.fragment.c();
    e.intro && Z(t.$$.fragment),
      pt(t, e.target, e.anchor, e.customElement),
      rt(),
      Y();
  }
  E(c);
}
class re {
  $destroy() {
    yt(this, 1), (this.$destroy = N);
  }
  $on(e, n) {
    if (!L(n)) return N;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      i.push(n),
      () => {
        const r = i.indexOf(n);
        r !== -1 && i.splice(r, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !et(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
export {
  St as A,
  w as B,
  Zt as C,
  Yt as D,
  Vt as E,
  ee as F,
  ne as G,
  pt as H,
  yt as I,
  Ut as J,
  bt as K,
  $t as L,
  Gt as M,
  It as N,
  Kt as O,
  I as P,
  Wt as Q,
  Ot as R,
  re as S,
  Pt as T,
  Jt as U,
  te as V,
  Qt as W,
  kt as X,
  L as Y,
  Rt as Z,
  At as _,
  Et as a,
  Xt as b,
  wt as c,
  z as d,
  ot as e,
  Ct as f,
  vt as g,
  Bt as h,
  ie as i,
  at as j,
  _t as k,
  ut as l,
  Ht as m,
  qt as n,
  Mt as o,
  lt as p,
  N as q,
  Tt as r,
  xt as s,
  Z as t,
  Nt as u,
  jt as v,
  Lt as w,
  Ft as x,
  zt as y,
  Dt as z,
};
