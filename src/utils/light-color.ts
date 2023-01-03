export const getLightColor = (color: string, light: number) => {
  let [r, g, b] = color.split(',').map((c) => parseInt(c))

  if (light < 0) {
    r = Math.round((1 + light) * r)
    g = Math.round((1 + light) * g)
    b = Math.round((1 + light) * b)
  } else {
    r = Math.round((1 - light) * r + light * 255)
    g = Math.round((1 - light) * g + light * 255)
    b = Math.round((1 - light) * b + light * 255)
  }

  return `${r},${g},${b}`
}

export const getLightColor2 = (c, n) =>
  c.map((d) => ((d += n) < 0 ? 0 : d > 255 ? 255 : d | 0))
