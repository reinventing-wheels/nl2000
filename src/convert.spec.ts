import { fast, slow } from './convert'

describe('convert', () => {
  it('should convert an array of numbers from one radix to another', () => {
    for (const convert of [fast, slow]) {
      const src = [...Array(0x100).keys()].reverse()
      const dec = convert(0x100, 10, [...src])
      const hex = convert(10, 0x100, [...dec])
      expect(dec.slice(0, 10)).toEqual([3, 2, 3, 1, 6, 5, 0, 9, 0, 7])
      expect(dec.slice(-10)).toEqual([3, 3, 3, 6, 1, 8, 3, 0, 4, 0])
      expect(dec).toHaveLength(617)
      expect(hex).toEqual(src)
    }
  })
})
