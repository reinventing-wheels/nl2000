export const fast = (fromRadix: number, toRadix: number, input: number[]) => {
  const remainders = [], r = BigInt(fromRadix), R = BigInt(toRadix)
  let z = BigInt(0)
  for (const n of input) z = r * z + BigInt(n)
  for (; z; z /= R) remainders.push(Number(z % R))
  return remainders.reverse()
}

export const slow = (fromRadix: number, toRadix: number, input: number[]) => {
  const remainders = []
  while (input.some(n => n > 0)) {
    let remainder = 0
    for (let i = 0; i < input.length; i++) {
      const n = fromRadix * remainder + input[i]
      input[i] = n / toRadix >>> 0 // integer division
      remainder = n % toRadix
    }
    remainders.push(remainder)
  }
  return remainders.reverse()
}

export const convert =
  typeof BigInt === 'function'
    ? fast
    : slow
