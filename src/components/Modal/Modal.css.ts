import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/root.css'

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
    // backdropFilter: 'blur(20px)',
    zIndex: '-1',
  },
})

const modalBox = style({
  background: vars.color.greyLight1,
  padding: '30px 60px',
  borderRadius: 20,
  minWidth: 300,
  // width: '100%',
  // height: '100%',
  boxShadow: `${vars.color.grey} 0px 0.8px 3px, ${vars.color.grey} 0px 6px 14px`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const modalContent = style({
  maxWidth: 500,
  margin: '0 auto',
})

export { modalBox, modalOverflow, modalContent }
