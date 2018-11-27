import { NL2000, encode, decode } from '.'

describe('nl2000', () => {
  const bytes = [...Buffer.from('Man is distinguished, not only by his reason, but by this singular passion from other animals, which is a lust of the mind, that by a perseverance of delight in the continued and indefatigable generation of knowledge, exceeds the short vehemence of any carnal pleasure.')]

  describe('predefined schemes', () => {
    it('should encode and decode', () => {
      const encoded = encode(NL2000, bytes)
      const decoded = decode(NL2000, encoded)
      expect(encoded).toMatch(/^[\p{Nd}\p{LC}]+$/u)
      expect(encoded).toMatch(/^[^\u0530-\u1d6a\u1fbe]+$/u)
      expect(decoded).toEqual(bytes)
    })
  })

  describe('custom schemes', () => {
    it('should encode and decode', () => {
      const scheme = [...'👐🤲🙌👏🙏🤝👍👎👊✊🤛🤜🤞✌🤘🤟👌👈👉👆👇☝✋🤚🖐🖖👋🤙💪🖕']
      const encoded = encode(scheme, bytes)
      const decoded = decode(scheme, encoded)
      expect(decoded).toEqual(bytes)
    })
  })
})
