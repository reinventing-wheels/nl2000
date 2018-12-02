import { fast, slow } from './convert'

describe('convert', () => {
  it('should convert an array of numbers from one radix to another', () => {
    for (const convert of [fast, slow]) {
      const src = [0xdead, 0xf00d]
      const dec = convert(0x10000, 100, [...src])
      const hex = convert(100, 0x10000, [...dec])
      expect(dec).toEqual([37, 35, 94, 11, 33])
      expect(hex).toEqual(src)
    }
  })
})
