import { scheme, convert } from './util';
export const NL2000 = scheme(0x2000);
export const NL100 = scheme(0x100);
export const NL80 = scheme(0x80);
export const NL60 = scheme(0x60);
export const encode = (scheme, input) => convert(0x100, scheme.length, [...input]).map(i => scheme[i]).join('');
export const decode = (scheme, input) => convert(scheme.length, 0x100, [...input].map(c => scheme.indexOf(c)));
