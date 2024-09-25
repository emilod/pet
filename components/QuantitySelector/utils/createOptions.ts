import range from 'lodash.range'

export const createOptions = (
  minValue: number,
  maxValue: number,
): Array<{
  key: string
  content: number
}> => {
  const arr = range(maxValue - minValue + 1)
  return arr.map((x) => {
    const value = x + minValue
    return { key: value.toString(), content: value }
  })
}
