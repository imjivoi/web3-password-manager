import { globalStyle, style } from '@vanilla-extract/css'
import { resetBtn } from '../../styles/reset.css'
import { pxToRem } from '../../utils/px-to-rem'
import { vars } from '../../styles/root.css'
import { flexSprinkles } from '../../styles/flex.css'

export const connectItem = style([
  resetBtn,
  {
    cursor: 'pointer',
    borderRadius: 10,
    border: '1px solid transparent',
    padding: `${pxToRem(15)} ${pxToRem(20)}`,
    background: vars.color.blueLight4,
    color: vars.color.white,
    width: '100%',
    fontSize: pxToRem(18),
    transition: 'all .3s',
    ':active': {
      borderColor: vars.theme.colorPrimary,
    },
    ':disabled': {
      background: vars.color.greyLight3,
      color: vars.color.black,
      cursor: 'not-allowed',
      borderColor: 'transparent',
    },
  },
  flexSprinkles({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
])
