"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
exports.NL2000 = util_1.scheme(0x2000);
exports.NL100 = util_1.scheme(0x100);
exports.NL80 = util_1.scheme(0x80);
exports.NL60 = util_1.scheme(0x60);
exports.encode = (scheme, input) => util_1.convert(0x100, scheme.length, [...input]).map(i => scheme[i]).join('');
exports.decode = (scheme, input) => util_1.convert(scheme.length, 0x100, [...input].map(c => scheme.indexOf(c)));
