import { createRequire } from 'module';

createRequire(import.meta.url);
var l;
l = { __e: function(n2, l2, u3, t2) {
  for (var i2, o2, r2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((o2 = i2.constructor) && null != o2.getDerivedStateFromError && (i2.setState(o2.getDerivedStateFromError(n2)), r2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), r2 = i2.__d), r2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;

// node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs
var f2 = 0;
function u2(e2, t2, n2, o2, i2, u3) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u3 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l.vnode && l.vnode(l2), l2;
}

// node_modules/@quartz-community/utils/dist/index.js
function simplifySlug(fp) {
  const res = stripSlashes(trimSuffix(fp, "index"));
  return res.length === 0 ? "/" : res;
}
function endsWith(s2, suffix) {
  return s2 === suffix || s2.endsWith("/" + suffix);
}
function trimSuffix(s2, suffix) {
  if (endsWith(s2, suffix)) {
    s2 = s2.slice(0, -suffix.length);
  }
  return s2;
}
function stripSlashes(s2, onlyStripPrefix) {
  if (s2.startsWith("/")) {
    s2 = s2.substring(1);
  }
  return s2;
}

// src/components/Related.tsx
var RelatedComponent = ({
  fileData,
  allFiles,
  displayClass
}) => {
  const related = fileData.related ?? [];
  if (related.length === 0) return null;
  const pages = related.map((slug2) => {
    const found = allFiles?.find(
      (f3) => simplifySlug(f3.slug ?? "") === slug2
    );
    const title = found?.frontmatter?.title ?? slug2.split("/").pop() ?? slug2;
    return { slug: slug2, title };
  });
  return /* @__PURE__ */ u2("div", { class: `related ${displayClass ?? ""}`, children: [
    /* @__PURE__ */ u2("h3", { children: "Related" }),
    /* @__PURE__ */ u2("ul", { children: pages.map(({ slug: slug2, title }) => /* @__PURE__ */ u2("li", { children: /* @__PURE__ */ u2("a", { href: `/${slug2}`, children: title }) }, slug2)) })
  ] });
};
var Related = (_opts) => RelatedComponent;
var Related_default = Related;

export { Related_default as Related };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map