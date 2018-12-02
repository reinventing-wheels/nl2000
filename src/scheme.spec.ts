import { scheme } from './scheme'

describe('scheme', () => {
  it('should return 1494 characters from U+0000-U+2000 range', () => {
    expect(scheme(0x2000)).toHaveLength(1494)
  })
})
