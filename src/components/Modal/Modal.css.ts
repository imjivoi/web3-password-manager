import { style } from '@vanilla-extract/css'
import { flexSprinkles } from '../../styles/flex.css'
import { vars } from '../../styles/root.css'
import { spaceSprinkles } from '../../styles/space.css'
import { pxToRem } from '../../utils/px-to-rem'

const modalOverflow = style([
  {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: 10,
    '::after': {
      content: '',
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      backdropFilter: 'blur(5px)',
      zIndex: '-1',
      transition: 'all .3s',
    },
  },
  flexSprinkles({
    display: { tablet: 'flex' },
    justifyContent: { tablet: 'center' },
    alignItems: { tablet: 'center' },
  }),
])

const modalBox = style([
  {
    background: vars.theme.backgroundColorSecondary,
    width: '100%',
    height: '100%',
    padding: `${pxToRem(15)} ${pxToRem(30)}`,

    '@media': {
      'screen and (min-width: 640px)': {
        boxShadow: `${vars.theme.backgroundColorSecondary} 0px 0.8px 3px, ${vars.theme.backgroundColorSecondary} 0px 6px 14px`,
        minWidth: pxToRem(300),
        maxWidth: pxToRem(500),
        borderRadius: 20,
        height: 'auto',
        padding: `${pxToRem(30)} ${pxToRem(60)}`,
      },
    },
  },
  flexSprinkles({
    display: { tablet: 'flex' },
    justifyContent: { tablet: 'center' },
    alignItems: { tablet: 'center' },
  }),
])

const modalContent = style([
  {
    width: '100%',
  },
  spaceSprinkles({
    marginX: 'auto',
    marginY: {
      tablet: 'none',
    },
    marginTop: {
      tablet: 'none',
      mobile: 'large',
    },
  }),
])

export { modalBox, modalOverflow, modalContent }
