import { convert } from './convert'
import { scheme } from './scheme'

export type FnFactory<T, U> = (scheme?: string | string[]) => Fn<T, U>
export type Fn<T, U> = (input: Iterable<T>) => U

export const NL2000 = scheme(0x2000)
export const NL180  = scheme(0x180)
export const NL100  = scheme(0x100)
export const NL80   = scheme(0x80)
export const NL60   = scheme(0x60)

export const encoder: FnFactory<number, string> = (scheme = NL2000) => input =>
  convert(0x100, scheme.length, [...input]).map(i => scheme[i]).join('')

export const decoder: FnFactory<string, number[]> = (scheme = NL2000) => input =>
  convert(scheme.length, 0x100, [...input].map(c => scheme.indexOf(c)))

export const encode = encoder()
export const decode = decoder()
