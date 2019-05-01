(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.nl2000 = {}));
}(this, function (exports) { 'use strict';

  const fast = (fromRadix, toRadix, input) => {
      const fromRadixʹ = BigInt(fromRadix);
      const toRadixʹ = BigInt(toRadix);
      const output = [];
      let n = BigInt(0);
      for (let i = 0; i < input.length; i++)
          n = fromRadixʹ * n + BigInt(input[i]);
      for (; n; n /= toRadixʹ)
          output.push(Number(n % toRadixʹ));
      return output.reverse();
  };
  const slow = (fromRadix, toRadix, input) => {
      const output = [];
      while (input.some(n => n > 0)) {
          let remainder = 0;
          for (let i = 0; i < input.length; i++) {
              const n = fromRadix * remainder + input[i];
              input[i] = n / toRadix >>> 0; // integer division
              remainder = n % toRadix;
          }
          output.push(remainder);
      }
      return output.reverse();
  };
  const convert = typeof BigInt === 'function'
      ? fast
      : slow;

  const scheme = (range) => String.fromCharCode(...Array(range).keys())
      .replace(/[^\p{Nd}\p{LC}]|[\u0530-\u1d6a\u1fbe]/ug, '');

  const NL2000 = scheme(0x2000);
  const NL180 = scheme(0x180);
  const NL100 = scheme(0x100);
  const NL80 = scheme(0x80);
  const NL60 = scheme(0x60);
  const encoder = (scheme = NL2000) => input => convert(0x100, scheme.length, [...input]).map(i => scheme[i]).join('');
  const decoder = (scheme = NL2000) => input => convert(scheme.length, 0x100, [...input].map(c => scheme.indexOf(c)));
  const encode = encoder();
  const decode = decoder();

  exports.NL100 = NL100;
  exports.NL180 = NL180;
  exports.NL2000 = NL2000;
  exports.NL60 = NL60;
  exports.NL80 = NL80;
  exports.decode = decode;
  exports.decoder = decoder;
  exports.encode = encode;
  exports.encoder = encoder;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=nl2000.js.map
