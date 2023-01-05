import { style } from '@vanilla-extract/css'
import { modalOverflow } from '../Modal/Modal.css'
import { vars } from '../../styles/root.css'

export const loaderGlobal = style([
  modalOverflow,
  {
    zIndex: 20,
    ':after': {
      background: vars.color.grey,
      opacity: 0.8,
      backdropFilter: 'blur(10px)',
    },
  },
])
