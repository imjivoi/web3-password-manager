import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'
import breakpoints from './breakpoints'

const flex = defineProperties({
  conditions: breakpoints,
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'flex', 'block', 'inline'],
    flexDirection: ['row', 'column'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
    ],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    flexWrap: ['wrap', 'nowrap'],
  },
})

export const flexSprinkles = createSprinkles(flex)
