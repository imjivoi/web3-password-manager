import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/root.css'
import { pxToRem } from '../../utils/px-to-rem'

const modalOverflow = style({
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  zIndex: 10,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
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
})

const modalBox = style({
  background: vars.theme.backgroundColorSecondary,
  padding: `${pxToRem(30)} ${pxToRem(60)}`,
  borderRadius: 20,
  minWidth: pxToRem(300),
  maxWidth: pxToRem(500),
  width: '100%',
  boxShadow: `${vars.theme.backgroundColorSecondary} 0px 0.8px 3px, ${vars.theme.backgroundColorSecondary} 0px 6px 14px`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const modalContent = style({
  width: '100%',
  margin: '0 auto',
})

export { modalBox, modalOverflow, modalContent }
