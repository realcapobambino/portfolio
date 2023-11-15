import { _ as _export_sfc, u as useHead } from '../server.mjs';
import { useSSRContext, defineComponent } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'tailwind-merge';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: `Bambino's Blog`,
      meta: [
        { name: "description", content: `Bambino's Blog.` }
      ]
      //   bodyAttrs: {
      //     class: 'test'
      //   },
      //   script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h1${ssrRenderAttrs(_attrs)}>BLOG</h1>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/karl/carl/git/portfolio/pages/blog/index.vue"]]);

export { index as default };
//# sourceMappingURL=index-95c8f033.mjs.map
