export const fast = (fromRadix: number, toRadix: number, input: number[]) => {
  const fromRadixʹ = BigInt(fromRadix)
  const toRadixʹ = BigInt(toRadix)
  const output = []
  let n = BigInt(0)
  for (let i = 0; i < input.length; i++)
    n = fromRadixʹ * n + BigInt(input[i])
  for (; n; n /= toRadixʹ)
    output.push(Number(n % toRadixʹ))
  return output.reverse()
}

export const slow = (fromRadix: number, toRadix: number, input: number[]) => {
  const output = []
  while (input.some(n => n > 0)) {
    let remainder = 0
    for (let i = 0; i < input.length; i++) {
      const n = fromRadix * remainder + input[i]
      input[i] = n / toRadix >>> 0 // integer division
      remainder = n % toRadix
    }
    output.push(remainder)
  }
  return output.reverse()
}

export const convert =
  typeof BigInt === 'function'
    ? fast
    : slow
