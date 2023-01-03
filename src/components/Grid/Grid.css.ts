import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'
import breakpoints from '../../styles/breakpoints'
import { style } from '@vanilla-extract/css'
import { spacesValues } from '../../styles/space.css'

const gridTemplateColumnsValues = Array.from(
  { length: 12 },
  (_, i) => i + 1
).map((col) => `repeat(${col}, 1fr)`)

const gridProperties = defineProperties({
  conditions: breakpoints,
  defaultCondition: 'mobile',
  properties: {
    gridTemplateColumns: gridTemplateColumnsValues,
    gap: spacesValues,
  },
})

const gridSprinkles = createSprinkles(gridProperties)

const grid = style({
  display: 'grid',
})

export { gridSprinkles, grid }
