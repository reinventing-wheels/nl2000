(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.nl2000 = {})));
}(this, (function (exports) { 'use strict';

  const scheme = (range) => String.fromCharCode(...Array(range).keys())
      .replace(/[^\p{Nd}\p{LC}]|[\u0530-\u1d6a\u1fbe]/ug, '');
  const convert = (radix, toRadix, input) => {
      const remainders = [];
      while (input.some(n => n > 0))
          remainders.push(divide(radix, toRadix, input));
      return remainders.reverse();
  };
  const divide = (radix, divisor, input) => {
      let remainder = 0;
      for (let i = 0; i < input.length; i++) {
          const n = radix * remainder + input[i];
          input[i] = n / divisor >>> 0; // integer division
          remainder = n % divisor;
      }
      return remainder;
  };

  const NL2000 = scheme(0x2000);
  const NL100 = scheme(0x100);
  const NL80 = scheme(0x80);
  const NL60 = scheme(0x60);
  const encode = (scheme$$1, input) => convert(0x100, scheme$$1.length, [...input]).map(i => scheme$$1[i]).join('');
  const decode = (scheme$$1, input) => convert(scheme$$1.length, 0x100, [...input].map(c => scheme$$1.indexOf(c)));

  exports.NL2000 = NL2000;
  exports.NL100 = NL100;
  exports.NL80 = NL80;
  exports.NL60 = NL60;
  exports.encode = encode;
  exports.decode = decode;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=nl2000.js.map
