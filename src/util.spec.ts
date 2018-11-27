import { scheme, convert } from './util'

describe('util', () => {
  describe('scheme', () => {
    it('should return 1494 characters from U+0000-U+2000 range', () => {
      expect(scheme(0x2000)).toHaveLength(1494)
    })
  })

  describe('convert', () => {
    it('should convert an array of numbers from one radix to another', () => {
      const src = [0xdead, 0xf00d]
      const dec = convert(0x10000, 100, [...src])
      const hex = convert(100, 0x10000, [...dec])
      expect(dec).toEqual([37, 35, 94, 11, 33])
      expect(hex).toEqual(src)
    })
  })
})
