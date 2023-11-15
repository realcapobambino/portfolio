import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import * as vue$1 from 'vue';
import { unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'tailwind-merge';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

const require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(vue$1);

var vue=require$$0;function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script = vue.defineComponent({
  name: "VueWriter",
  props: {
    array: {
      type: Array,
      required: true
    },
    eraseSpeed: {
      type: Number,
      default: 100
    },
    typeSpeed: {
      type: Number,
      default: 200
    },
    delay: {
      type: Number,
      default: 2000
    },
    intervals: {
      type: Number,
      default: 500
    },
    start: {
      type: Number,
      default: 0
    },
    caret: {
      type: String,
      default: "cursor"
    },
    iterations: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      typeValue: "",
      count: 0,
      typeStatus: false,
      arrayIndex: 0,
      charIndex: 0
    };
  },
  methods: {
    typewriter: function typewriter() {
      var loop = 0;

      if (this.charIndex < this.array[this.arrayIndex].length) {
        if (!this.typeStatus) {
          this.typeStatus = true;
        }

        this.typeValue += this.array[this.arrayIndex].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typewriter, this.typeSpeed);
      } else {
        this.count += 1;

        if (this.count === this.array.length) {
          loop += 1;

          if (loop === this.iterations) {
            return this.typeStatus = false;
          }
        }

        this.typeStatus = false;
        setTimeout(this.eraser, this.delay);
      }
    },
    eraser: function eraser() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.array[this.arrayIndex].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraser, this.eraseSpeed);
      } else {
        this.typeStatus = false;
        this.arrayIndex += 1;
        if (this.arrayIndex >= this.array.length) this.arrayIndex = 0;
        setTimeout(this.typewriter, this.typeSpeed + this.intervals);
      }
    }
  },
  created: function created() {
    setTimeout(this.typewriter, this.start);
  }
});var _hoisted_1 = {
  class: "is-typed"
};
var _hoisted_2 = {
  class: "typed"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1, [vue.renderSlot(_ctx.$slots, "default"), vue.createVNode("span", _hoisted_2, vue.toDisplayString(_ctx.typeValue), 1), vue.createVNode("span", {
    class: _ctx.caret + ' ' + {
      typing: _ctx.typeStatus
    }
  }, " ", 2)]);
}script.render = render;// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var component = /*#__PURE__*/(function () {
  // Get component instance
  var installable = script; // Attach install function executed by Vue.use()

  installable.install = function (app) {
    app.component('VueWriter', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
var namedExports=/*#__PURE__*/Object.freeze({__proto__:null,'default': component});// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)

Object.entries(namedExports).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      exportName = _ref2[0],
      exported = _ref2[1];

  if (exportName !== 'default') component[exportName] = exported;
});var vueWriter_ssr=component;

const VueWriter = /*@__PURE__*/getDefaultExportFromCjs(vueWriter_ssr);

const _imports_0 = "" + publicAssetsURL("img/dev.svg");
const _imports_1 = "" + publicAssetsURL("img/nodejs.png");
const _imports_2 = "" + publicAssetsURL("img/arduino.png");
const _imports_3 = "" + publicAssetsURL("img/vue.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="md:container md:mx-auto"><section class="flex flex-col items-center mt-10 justify-center gap-2 sm:flex-row sm:mt-10"><div class="w-full text-left md:w-1/3"><h1 class="text-3xl text-center md:text-3xl xl:text-4xl sm:text-left text-ternary-dark dark:text-primary-light"> Hello there, I am <strong> Charles Kariuki Wahome</strong></h1>`);
      _push(ssrRenderComponent(unref(VueWriter), {
        class: "mt-2 text-lg leading-none text-center text-gray-400 font-general-medium sm:text-xl xl:text-2xl sm:text-left",
        array: ["Full-Stack Developer", "Linux Enthusiast", "Gaming Enthusiast"],
        eraseSpeed: 50,
        typeSpeed: 100
      }, null, _parent));
      _push(`</div><div class="float-right w-full text-right md:w-1/3"><img${ssrRenderAttr("src", _imports_0)} alt="Developer"></div></section></div><section class="md:py-5 md:my-5"><div class="container"><div><div class="text-center"><p class="mb-2 text-2xl font-semibold font-general-semibold sm:text-5xl text-ternary-dark"> Projects Portfolio</p></div><div class="text-center"><p class="mb-2 text-xl">Below are some of the projects I have worked on:</p></div><div class="grid grid-cols-1 mt-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10"><a href="https://github.com/realcapobambino/freegames-express" class="mb-10 duration-500 shadow-lg cursor-pointer rounded-xl hover:grayscale-0 grayscale hover:shadow-2xl sm:mb-0 bg-secondary-light" aria-label="Single Project"><div><img${ssrRenderAttr("src", _imports_1)} alt="Gamers&#39; Haven" class="border-none rounded-t-xl"></div><div class="px-4 py-6 text-center"><p class="mb-2 text-xl font-semibold font-general-semibold text-ternary-dark"> Gamers&#39; Haven</p><span class="text-lg font-general-medium text-ternary-dark">Web Application - NodeJs, ExpressJs, Tailwind </span></div></a><a href="https://github.com/realcapobambino/access-control-arduino" class="mb-10 duration-500 shadow-lg cursor-pointer rounded-xl hover:grayscale-0 grayscale hover:shadow-2xl sm:mb-0 bg-secondary-light" aria-label="Single Project"><div><img${ssrRenderAttr("src", _imports_2)} alt="Arduino Access Control" class="border-none rounded-t-xl"></div><div class="px-4 py-6 text-center"><p class="mb-2 text-xl font-semibold font-general-semibold text-ternary-dark"> RFID Access Control</p><span class="text-lg font-general-medium text-ternary-dark">Hardware(IoT) - Arduino, C++</span></div></a><a href="https://github.com/realcapobambino/ip-tracker-vue3" class="mb-10 duration-500 shadow-lg cursor-pointer rounded-xl hover:grayscale-0 grayscale hover:shadow-2xl sm:mb-0 bg-secondary-light" aria-label="Single Project"><div><img${ssrRenderAttr("src", _imports_3)} alt="Project Management UI" class="border-none rounded-t-xl"></div><div class="px-4 py-6 text-center"><p class="mb-2 text-xl font-semibold font-general-semibold text-ternary-dark"> IP Tracker</p><span class="text-lg font-general-medium text-ternary-dark">Web Application - VueJs, Tailwind</span></div></a></div></div></div></section><section><div class="container mx-auto"><div class="pt-20 pb-8 mt-20 border-t-2 sm:pt-30 border-primary-light"><div class="flex flex-col items-center justify-center mb-12 sm:mb-20"><p class="mb-5 text-3xl font-semibold font-general-semibold sm:text-4xl text-primary-dark"> Follow me </p><ul class="flex gap-4 sm:gap-8"><a href="https://www.charleswahome.me/" target="__blank" class="p-4 text-gray-400 duration-500 rounded-lg shadow-sm cursor-pointer hover:text-indigo-500 bg-gray-50 hover:bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 feather feather-globe sm:w-8 sm:h-8"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></a><a href="https://github.com/realcapobambino" target="__blank" class="p-4 text-gray-400 duration-500 rounded-lg shadow-sm cursor-pointer hover:text-indigo-500 bg-gray-50 hover:bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 feather feather-github sm:w-8 sm:h-8"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a><a href="https://twitter.com/realcapobambino" target="__blank" class="p-4 text-gray-400 duration-500 rounded-lg shadow-sm cursor-pointer hover:text-indigo-500 bg-gray-50 hover:bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 feather feather-twitter sm:w-8 sm:h-8"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a><a href="https://www.linkedin.com/in/charleswahome" target="__blank" class="p-4 text-gray-400 duration-500 rounded-lg shadow-sm cursor-pointer hover:text-indigo-500 bg-gray-50 hover:bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 feather feather-linkedin sm:w-8 sm:h-8"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a></ul></div></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/karl/carl/git/portfolio/pages/index.vue"]]);

export { index as default };
//# sourceMappingURL=index-a4a13d23.mjs.map
